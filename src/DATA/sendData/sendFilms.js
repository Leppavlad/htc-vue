import films from "../data/films.json";

async function sendData(data, url) {
  await data.forEach(async function(el) {
    const response = await fetch(
      "https://htc-vue-c9c6c-default-rtdb.firebaseio.com/" + url,
      {
        method: "POST",
        body: JSON.stringify(el),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.error.message || "Failed fetching data"
      );
      throw error;
    }
  });
}

sendData(films, "films.json");
