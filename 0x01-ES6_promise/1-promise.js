// Create a function that returns a promise based on a boolean input.
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: "Success" });
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}
