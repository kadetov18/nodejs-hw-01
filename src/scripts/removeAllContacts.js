import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";
export const removeAllContacts = async () => {};
fs.writeFile(PATH_DB, "[]");
removeAllContacts();
