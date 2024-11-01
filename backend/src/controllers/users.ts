import express from "express";
import {
  getUsers,
  deleteUserById,
  updateUserById,
  getUserById,
} from "../db/users";
import { authentication } from "../helpers";

export const getAllUsers = async (res: express.Response) => {
  try {
    const users = await getUsers();
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { id } = req.params;
    const user = await deleteUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};

export const updateUserGeneralInfo = async (
  req: express.Request,
  res: express.Response,
): Promise<express.Response> => {
  try {
    const { id } = req.params;
    const values = { ...req.body.data };
    console.log("values", values);
    if (
      (values.newPassword || values.phone || values.email) &&
      !values.oldPassword
    ) {
      return res.status(400).send("Ancien mot de passe incorrect");
    } else if (values.newPassword && values.oldPassword) {
      const user = await getUserById(id).select(
        "+authentication.salt +authentication.password",
      );
      if (!user) {
        return res.status(404).send("Utilisateur non trouvé");
      }
      const exprectedHash = authentication(
        user.authentication.salt,
        values.oldPassword,
      );

      if (exprectedHash !== user.authentication.password) {
        return res.status(401).send("Ancien mot de passe incorrect");
      }

      if (values.newPassword && values.oldPassword) {
        values.authentication = {
          password: authentication(
            user.authentication.salt,
            values.newPassword,
          ),
          salt: user.authentication.salt,
        };

        delete values.newPassword;
        delete values.oldPassword;
      }
    }
    const updatedUser = await updateUserById(id, values);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const user = await getUserById(req.params.id);
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
