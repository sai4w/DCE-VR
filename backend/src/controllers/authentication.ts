import { createUser, getUserByEmail, getUserById } from "../db/users";
import express from "express";
import { authentication, random } from "../helpers";

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.sendStatus(400);
    }
    const user = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password",
    );
    if (!user) {
      return res.sendStatus(400);
    }
    const exprectedHash = authentication(user.authentication.salt, password);

    if (exprectedHash !== user.authentication.password) {
      return res.sendStatus(403);
    }
    await user.save();
    const userObject = user.toObject();
    delete userObject.authentication;
    return res.status(201).json(userObject);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};
export const register = async (req: express.Request, res: express.Response) => {
  try {
    const {
      firstname,
      lastname,
      birth,
      gender,
      region,
      email,
      profession,
      avatar,
      phone,
      password,
    } = req.body;
    if (
      !firstname ||
      !email ||
      !password ||
      !lastname ||
      !birth ||
      !avatar ||
      !phone ||
      !profession ||
      !region ||
      !gender
    ) {
      return res.sendStatus(400);
    }
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.sendStatus(409);
    }
    const salt = random();

    const user = await createUser({
      firstname,
      lastname,
      birth,
      gender,
      region,
      email,
      proffesional: profession,
      avatar,
      phone,
      authentication: {
        password: authentication(salt, password),
        salt,
      },
    });
    delete user.authentication;
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};
