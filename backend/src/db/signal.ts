import mongoose from "mongoose";
import { getUserById } from "./users";
export const cleaningScheam = new mongoose.Schema({
  id_cleaner: { type: String, required: true },
  images: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
export const signalSchema = new mongoose.Schema({
  id_signaler: { type: String, required: true },
  title: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "uncleaned",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cleaning: {
    type: [cleaningScheam],
    required: false,
  },
});

export const Signal = mongoose.model("Signal", signalSchema);

export const createSignal = (values: Record<string, any>) =>
  new Signal(values).save().then((signal) => signal.toObject());

export const getSignals = async () => {
  const signals = await Signal.find();
  const signalsWithUser = [];
  for (const signal of signals) {
    const user = await getUserById(signal.id_signaler as string);
    signalsWithUser.push({
      ...signal.toObject(),
      user,
    });
  }
  return signalsWithUser;
};
export const getSignalById = (id: string) => Signal.findById(id);
export const getSignalByIdSignaler = async (id: string) => {
  const signals = await Signal.find({ id_signaler: id });
  const signalsWithUser = [];
  for (const signal of signals) {
    const user = await getUserById(signal.id_signaler as string);
    signalsWithUser.push({
      ...signal.toObject(),
      user,
    });
  }
  return signalsWithUser;
};
export const deleteSignalById = (id: string) => Signal.findByIdAndDelete(id);
export const updateSignalById = (id: string, values: Record<string, any>) =>
  Signal.findByIdAndUpdate(id, values, { new: true })
    .then((signal) => signal.toObject())
    .catch((error) => {
      throw new Error(error);
    });
