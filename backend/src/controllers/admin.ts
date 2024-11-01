import { getUserByEmail } from "../db/users";
import { authentication } from "../helpers";
import express from "express";
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
    if (user.type == "user") {
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
