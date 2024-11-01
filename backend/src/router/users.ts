import express from "express";
import {
  getAllUsers,
  deleteUser,
  updateUserGeneralInfo,
  getUser,
} from "../controllers/users";

export default (router: express.Router) => {
  router.get("/users", getAllUsers);
  router.delete("/user/delete/:id", deleteUser);
  router.post("/user/update/:id", updateUserGeneralInfo);
  router.get("/user/:id", getUser);
};
