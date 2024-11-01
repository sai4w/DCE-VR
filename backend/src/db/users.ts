import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  birth: { type: Date, required: true },
  gender: { type: String, required: true },
  region: { type: String, required: true },
  email: { type: String, required: true },
  proffesional: { type: String, required: true },
  avatar: { type: String, required: true },
  phone: { type: String, required: true },
  type: {
    type: String,
    enum: ["user", "admin", "superadmin"],
    default: "user",
  },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, required: true, select: false },
  },
  feedback_stars: { type: Number, required: false },
  feedback_commentaire: { type: String, required: false },
});

export const UserModel = mongoose.model("User", userSchema);

export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) =>
  UserModel.findOne({
    email,
  });
export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({
    "authentication.sessionToken": sessionToken,
  });
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) => UserModel.findByIdAndDelete(id);
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values, { new: true }).then((user) =>
    user?.toObject(),
  );
