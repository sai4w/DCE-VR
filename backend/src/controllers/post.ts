import express from "express";
import { uploadImg } from "./uploadImg";
import {
  createPost,
  getPostById,
  getPostByOwner,
  getPosts,
  getReservationByIdRenter,
  updatePostById,
} from "../db/posts";
import { getUserById } from "../db/users";
export const addPost = async (req: express.Request, res: express.Response) => {
  try {
    const post = { ...req.body };
    const files = req.files as { imgs?: Express.Multer.File[] };
    post.images = [];
    if (files.imgs && files.imgs.length > 0) {
      for (let index = 0; index < files.imgs.length; index++) {
        try {
          const result = await uploadImg(files.imgs[index]);
          if (result) {
            post.images.push(result.url);
          }
        } catch (error) {
          console.error(error);
          return res
            .status(400)
            .json({ error: "erreur lors de l'upload de l'image" });
        }
      }
    } else {
      return res
        .status(400)
        .json({ error: "aucune image n'a été téléchargée" });
    }
    createPost(post).then((post) => {
      return res.status(201).json(post);
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};
export const getAllPosts = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const posts = await getPosts();
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};
export const getPost = async (req: express.Request, res: express.Response) => {
  try {
    const post = await getPostById(req.params.id);
    const user = await getUserById(post.id_owner as string);
    return res.status(200).json({ post, user });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};
export const addRevervation = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const post = await getPostById(req.params.id);
    if (!post) {
      return res.sendStatus(404);
    }
    const reservation = { ...req.body };
    post.reservation = [...post.reservation, reservation];

    updatePostById(post._id.toString(), post).then((post) => {
      return res.status(200).json(post);
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};

export const getPostByUser = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Missing id" });
    const posts = await getPostByOwner(id);
    const user = await getUserById(id);
    posts.forEach((post) => {
      post.id_owner = user;
    });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getPostByRenterId = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Missing id" });
    const posts = await getReservationByIdRenter(id);
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
