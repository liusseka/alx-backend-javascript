// Return a resolved promise with user info.
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
