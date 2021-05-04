import tv from "../data/tv.json";

async function sendData(data, url) {
  for (let key of Object.keys(data)) {
    const response = await fetch(
      `https://htc-vue-c9c6c-default-rtdb.firebaseio.com/${url}/${key}.json`,
      {
        method: "PUT",
        body: JSON.stringify(data[key]),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.error.message || "Failed fetching data"
      );
      throw error;
    }
  }
}

sendData(tv, "tv");
