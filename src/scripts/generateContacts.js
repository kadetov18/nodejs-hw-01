import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const addContacts = [];
    for (let index = 0; index < number; index++) {
      addContacts.push(createFakeContact());
    }

    const updatedContacts = [...contacts, ...addContacts];
    await writeContacts(updatedContacts);
    console.log("Contacts generated successfully!");
  } catch (error) {
    console.error("Error generating contacts:", error);
  }
};

generateContacts(5);
