import { ABOUT_COLLECTION, CONTACT_COLLECTION } from "@/constants/dbconstants";
import getRepository from "./getRepository";

export default async function getContact() {
  return (
    await getRepository(ABOUT_COLLECTION).findById(CONTACT_COLLECTION)
  )?.data();
}
