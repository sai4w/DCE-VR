import { createPlaylist } from "../db/playlist";
import express from "express";
export default (router: express.Router) => {
  router.post("/playlist", createPlaylist);
};
