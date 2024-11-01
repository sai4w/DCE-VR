import express from "express";
import { upload } from "../utils/upload";
import {
  addSignal,
  getAllSignals,
  getSignal,
  addNettoyage,
  getSignalByUser,
  deleteSignal,
  updateStatus,
  getAllNettoyages,
} from "../controllers/signal";

export default (router: express.Router) => {
  router.post("/signaler", upload.fields([{ name: "imgs" }]), addSignal);
  router.get("/signals", getAllSignals);
  router.get("/signal/:id", getSignal);
  router.post("/nettoyer", upload.fields([{ name: "imgs" }]), addNettoyage);
  router.get("/messignaux/:id", getSignalByUser);
  router.delete("/signal/:id", deleteSignal);
  router.delete("/signal", deleteSignal);
  router.put("/signal", updateStatus);
  router.get("/nettoyages", getAllNettoyages);
};
