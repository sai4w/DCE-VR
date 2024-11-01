import express from "express";

export default (router: express.Router) => {
  router.get("/test", (req, res) => {
    res.json("Hello World");
  });
};
