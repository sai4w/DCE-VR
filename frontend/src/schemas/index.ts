import { Professions, gender, gouvernorats } from "@src/types";
import * as z from "zod";

export const postSchema = z.object({
  imgs: z
    .array(z.instanceof(File))
    .min(1, "image est obligatoire")
    .max(5, "Maximum 5 images"),
  title: z.string().min(1, "Titre est obligatoire"),
  categorie: z.string().min(1, "Categorie est obligatoire"),
  description: z.string().min(1, "Description est obligatoire"),
  location: z.string().min(1, "Location est obligatoire"),
  value: z.string().min(1, "Value est obligatoire"),
  minTime: z.string().min(1, "Minimum rental time est obligatoire"),
  day: z.string().min(1, "Price per day est obligatoire"),
  week: z.string().min(1, "Price per week est obligatoire"),
  month: z.string().min(1, "Price per month est obligatoire"),
});
export const contactSchema = z.object({
  name: z.string().min(1, "Nom est obligatoire"),
  email: z.string().email("Email est invalide").min(1, "Email est obligatoire"),
  subject: z.string().min(1, "Sujet est obligatoire"),
  message: z.string().min(1, "Message est obligatoire"),
});
export const signalerSchema = z.object({
  imgs: z
    .array(z.instanceof(File))
    .min(1, "minimum 1 image")
    .max(4, "Maximum 4 images"),
  title: z.string().min(1, "Titre est obligatoire"),
  description: z.string().min(1, "Description est obligatoire"),
  location: z.string().min(1, "Location est obligatoire"),
});

export const nettoyageSchema = z.object({
  imgs: z
    .array(z.instanceof(File))
    .min(1, "minimum 1 image")
    .max(4, "Maximum 4 images"),
  description: z.string().min(1, "Description est obligatoire"),
});

export const parametreGeneraleSchema = z.object({
  firstname: z.string().min(1, "Prénom est obligatoire"),
  lastname: z.string().min(1, "Nom est obligatoire"),
  birth: z.date({
    required_error: "A date of birth is required.",
  }),
  region: z.nativeEnum(gouvernorats, {
    required_error: "Region est obligatoire",
  }),
  proffesional: z.nativeEnum(Professions, {
    required_error: "proffesional est obligatoire",
  }),
});

export const parametreSecuriteSchema = z.object({
  email: z.string().email("Email est invalide").optional().or(z.literal("")),
  phone: z
    .string()
    .min(1, "Téléphone est obligatoire")
    .optional()
    .or(z.literal("")),
  oldPassword: z
    .string()
    .min(6, "Mot de passe doit contenir au moins 6 caractères"),
  newPassword: z
    .string()
    .min(6, "Mot de passe doit contenir au moins 6 caractères")
    .optional()
    .or(z.literal("")),
  confirmPassword: z
    .string()
    .min(6, "Mot de passe doit contenir au moins 6 caractères")
    .optional()
    .or(z.literal("")),
});

export const loginSchema = z.object({
  email: z.string().email("Email est invalide").min(1, "Email est obligatoire"),
  password: z
    .string()
    .min(6, "Mot de passe doit contenir au moins 6 caractères"),
});

export const register_1_Schema = z.object({
  firstname: z.string().min(1, "Prénom est obligatoire"),
  lastname: z.string().min(1, "Nom est obligatoire"),
  email: z.string().email("Email est invalide").min(1, "Email est obligatoire"),
  password: z
    .string()
    .min(6, "Mot de passe doit contenir au moins 6 caractères"),
  termsAndConditions: z.boolean().refine((v) => v, {
    message: "Vous devez accepter les conditions d'utilisation",
  }),
});

export const register_2_Schema = z.object({
  gender: z.nativeEnum(gender, {
    required_error: "sexe est obligatoire",
  }),
  phone: z.string().min(1, "Téléphone est obligatoire"),
  birth: z.date({
    required_error: "A date of birth is required.",
  }),
  region: z.nativeEnum(gouvernorats, {
    required_error: "Region est obligatoire",
  }),
});
export const register_3_Schema = z.object({
  profession: z.string().min(1, "Profession est obligatoire"),
  avatar: z.string().min(1, "Avatar est obligatoire"),
});
