// Collectively resolve promises and log user info.
import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto("photo.jpg"), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(
        `${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`
      );
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}