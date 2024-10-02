// Use async/await to handle multiple promises.
import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto("photo.jpg");
    const user = await createUser();
    return { photo, user };
  } catch {
    return { photo: null, user: null };
  }
}
