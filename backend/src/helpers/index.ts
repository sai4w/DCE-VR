import crypto from "crypto";

const SECRET = "DCEVRPFE2024";

export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (salt: string, password: string) => {
  const hash = crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
  return hash;
};
