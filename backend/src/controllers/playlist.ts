import Express from "express";
import { createPlaylist } from "../db/playlist";

export const createVid = async (
  req: Express.Request,
  res: Express.Response,
) => {
  try {
    const { title, description, type, link, date } = req.body;
    if (!title || !description || !type || !link || !date) {
      return res.sendStatus(400);
    }
    await createPlaylist({ title, description, type, link, date });
    return res.sendStatus(201);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};
