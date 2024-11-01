import express from "express";
import { login } from "../controllers/admin";

export default (router: express.Router) => {
  router.post("/admin", login);
};
