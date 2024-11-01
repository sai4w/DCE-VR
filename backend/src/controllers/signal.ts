import express from "express";
import {
  createSignal,
  deleteSignalById,
  getSignalById,
  getSignalByIdSignaler,
  getSignals,
} from "../db/signal";
import { uploadImg } from "./uploadImg";
import { getUserById } from "../db/users";
import mongoose from "mongoose";

export const addSignal = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const signal = { ...req.body };
    if (
      !signal.id_signaler ||
      !signal.title ||
      !signal.description ||
      !signal.location
    ) {
      return res
        .sendStatus(400)
        .json({ Error: "des champs n'ont pas trouvée", data: req.body });
    }

    const files = req.files as { imgs?: Express.Multer.File[] };
    signal.images = [];
    if (files.imgs && files.imgs.length > 0) {
      for (let index = 0; index < files.imgs.length; index++) {
        try {
          const result = await uploadImg(files.imgs[index]);
          if (result) {
            signal.images.push(result.url);
          }
        } catch (error) {
          return res.status(400).json({ error: error.message });
        }
      }
    }
    createSignal(signal);
    return res.status(201).json(signal);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getAllSignals = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const signals = await getSignals();
    return res.status(200).json(signals);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getSignal = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Missing id" });
    const signal = await getSignalById(id);
    const user = await getUserById(signal.id_signaler as string);
    return res.status(200).json({ signal, user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
export const addNettoyage = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const nettoyage = { ...req.body };
    if (
      !nettoyage.id_cleaner ||
      !nettoyage.id_signal ||
      !nettoyage.description
    ) {
      return res
        .sendStatus(400)
        .json({ Error: "des champs n'ont pas trouvée", data: req.body });
    }
    const files = req.files as { imgs?: Express.Multer.File[] };
    nettoyage.images = [];
    if (files.imgs && files.imgs.length > 0) {
      for (let index = 0; index < files.imgs.length; index++) {
        try {
          const result = await uploadImg(files.imgs[index]);
          if (result) {
            nettoyage.images.push(result.url);
          }
        } catch (error) {
          return res.status(400).json({ error: error.message });
        }
      }
    } else {
      console.log("aucune image n'a été téléchargée");
    }
    const signal = await getSignalById(nettoyage.id_signal);
    if (!signal) {
      return res.status(404).json({ error: "Signal n'est pas trouvée" });
    }
    signal.cleaning = [...signal.cleaning, nettoyage];
    await signal.save();
    return res.status(201).json(signal);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
export const updateStatus = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { status, id_signal, id_clean } = req.body;
    console.log(req.body);

    if (!status || !id_signal || !id_clean) {
      return res.status(400).json({ error: "id untrouvable" });
    }

    const signal = await getSignalById(id_signal);

    if (!signal) {
      return res.status(404).json({ error: "Signal non trouvé" });
    }

    const cleanId = new mongoose.Types.ObjectId(id_clean);
    let cleanFound = false;

    if (status === "accepté") {
      signal.status = "cleaned";

      signal.cleaning = signal.cleaning.map((clean) => {
        if (clean._id.equals(cleanId)) {
          cleanFound = true;
          console.log("accepté");
          return { ...clean, status: "accepté" };
        }
        return clean;
      });

      if (!cleanFound) {
        return res.status(404).json({ error: "Cleaning entry not found" });
      }
    } else if (status === "refusé") {
      signal.cleaning = signal.cleaning.map((clean) => {
        if (clean._id.equals(cleanId)) {
          cleanFound = true;
          return { ...clean, status: "refusé" };
        }
        return clean;
      });

      if (!cleanFound) {
        return res.status(404).json({ error: "Cleaning entry not found" });
      }
    } else {
      return res.status(400).json({ error: "Status non reconnu" });
    }

    await signal.save();
    return res.status(200).json(signal);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const getSignalByUser = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "id untrouvable" });
    const signaux = await getSignalByIdSignaler(id);
    return res.status(200).json(signaux);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteSignal = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { id } = req.params;
    const ids = req.body;
    if (!id && !ids) return res.status(400).json({ error: "id untrouvable" });
    if (ids && ids.length > 0) {
      for (let index = 0; index < ids.length; index++) {
        await deleteSignalById(ids[index]);
      }
      return res.status(204).json({ message: "Signal supprimé" });
    }
    await deleteSignalById(id);
    return res.status(204).json({ message: "Signal supprimé" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
export const getAllNettoyages = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const signals = await getSignals();
    const cleaningsWithUsers = [];
    for (const signal of signals) {
      for (const cleaning of signal.cleaning) {
        const user = await getUserById(cleaning.id_cleaner);
        cleaningsWithUsers.push({
          cleaning,
          user,
          id_signal: signal._id,
        });
      }
    }
    return res.status(200).json(cleaningsWithUsers);
  } catch (error) {
    console.error("Error fetching nettoyages:", error);
    throw new Error("Failed to fetch nettoyages");
  }
};
