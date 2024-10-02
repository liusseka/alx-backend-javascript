// Handle a promise and respond to resolution and rejection.
export default function handleResponseFromAPI(promise) {
  return promise
    .then((value) => {
      console.log("Got a response from the API");
      return { status: 200, body: "success" };
    })
    .catch(() => {
      return new Error();
    });
}
