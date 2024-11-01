import express from "express";
import authentication from "./authentication";
import users from "./users";
import post from "./post";
import test from "./test";
import playlist from "./playlist";
import signal from "./signal";
import admin from "./admin";
const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  post(router);
  test(router);
  playlist(router);
  signal(router);
  admin(router);
  return router;
};
