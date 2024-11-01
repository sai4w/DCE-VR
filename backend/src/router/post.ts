import express from "express";
import { upload } from "../utils/upload";
import {
  addPost,
  getAllPosts,
  getPost,
  addRevervation,
  getPostByUser,
  getPostByRenterId,
} from "../controllers/post";

export default (router: express.Router) => {
  router.post("/post", upload.fields([{ name: "imgs" }]), addPost);
  router.get("/posts", getAllPosts);
  router.get("/post/:id", getPost);
  router.post("/post/:id", addRevervation);
  router.get("/myposts/:id", getPostByUser);
  router.get("/myrents/:id", getPostByRenterId);
};
