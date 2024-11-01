export type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  birth: Date;
  gender: string;
  region: string;
  proffesional: string;
  avatar: string;
  type: "user" | "admin" | "superadmin";
  phone: string;
  feedback_stars?: number;
  feedback_commentaire?: string;
};
export type Post = {
  _id: string;
  id_owner: User;
  images: string[];
  title: string;
  description: string;
  category: categories;
  location: string;
  price: {
    day: number;
    week: number;
    month: number;
  };
  originalPrice: number;
  status: string;
  minTime: number;
  rented: Array<Date>;
  rating: number;
  comment: {
    _id: string;
    id_user: string;
    comment: string;
    rating: number;
  };
  reservation: [
    {
      _id: string;
      date_deb: Date;
      date_fin: Date;
      evaluation: number;
      id_renter: User["_id"];
      status_p: string;
      total: number;
      disponibility: string;
    },
  ];
};
export type Playlist = {
  videos: Array<{
    _id: string;
    title: string;
    description: string;
    type: string;
    url: string;
  }>;
};
export type Cleaning = {
  _id: string;
  id_cleaner: string;
  status: string;
  description: string;
  images: string[];
  date: Date;
};
export type Nettoyage = {
  cleaning: Cleaning;
  id_signal: string;
  user: User;
};
export type Signal = {
  _id: string;
  title: string;
  description: string;
  location: string;
  images: string[];
  id_signaler: User["_id"];
  user: User;
  status: string;
  date: Date;
  cleaning?: Cleaning[];
};
export enum categories {
  "Electronique",
  "Récyclage",
  "Mécanique",
}
export enum Professions {
  Médecin = "Médecin",
  Ingénieur = "Ingénieur",
  Enseignant = "Enseignant",
  Avocat = "Avocat",
  Infirmière = "Infirmière",
  Comptable = "Comptable",
  "Programmeur/Développeur de logiciels" = "Programmeur/Développeur de logiciels",
  Architecte = "Architecte",
  Scientifique = "Scientifique",
  "Agent de police" = "Agent de police",
  Pompier = "Pompier",
  "Chef cuisinier" = "Chef cuisinier",
  Artiste = "Artiste",
  Musicien = "Musicien",
  "Acteur/Actrice" = "Acteur/Actrice",
  "Écrivain/Auteur" = "Écrivain/Auteur",
  Agriculteur = "Agriculteur",
  Pilote = "Pilote",
  Entrepreneur = "Entrepreneur",
  Vendeur = "Vendeur",
  "Professionnel du marketing" = "Professionnel du marketing",
  Psychologue = "Psychologue",
  "Travailleur social" = "Travailleur social",
  Pharmacien = "Pharmacien",
  "Conseiller financier" = "Conseiller financier",
  Consultant = "Consultant",
  Électricien = "Électricien",
  Plombier = "Plombier",
  Mécanicien = "Mécanicien",
  Menuisier = "Menuisier",
  Etudiant = "Etudiant",
  Retraité = "Retraité",
  SansEmploi = "Sans emploi",
  Écologiste = "Écologiste",
  Autre = "Autre",
}

export enum gouvernorats {
  Ariana = "Ariana",
  Béja = "Béja",
  BenArous = "Ben Arous",
  Bizerte = "Bizerte",
  Gabès = "Gabès",
  Gafsa = "Gafsa",
  Jendouba = "Jendouba",
  Kairouan = "Kairouan",
  Kasserine = "Kasserine",
  Kébili = "Kébili",
  LeKef = "Le Kef",
  Mahdia = "Mahdia",
  LaManouba = "La Manouba",
  Médenine = "Médenine",
  Monastir = "Monastir",
  Nabeul = "Nabeul",
  Sfax = "Sfax",
  SidiBouzid = "Sidi Bouzid",
  Siliana = "Siliana",
  Sousse = "Sousse",
  Tataouine = "Tataouine",
  Tozeur = "Tozeur",
  Tunis = "Tunis",
  Zaghouan = "Zaghouan",
}
export enum gender {
  M = "M",
  F = "F",
}

export type registerType = {
  register_1: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    termsAndConditions: boolean;
  };
  register_2: {
    gender: gender;
    phone: string;
    birth: Date;
    region: gouvernorats;
  };
};
