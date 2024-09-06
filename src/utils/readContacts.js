import fs from "fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf8");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    console.error("Error reading file:", error);
    throw error;
  }
};
