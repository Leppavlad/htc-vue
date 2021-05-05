async function parse(url) {
  const response = await fetch(url);
  const responseData = await response.json();
  if (!response.ok) {
    //
  }
  console.log(responseData);
}

// const title = document.querySelector(".description-bouquet__title");
parse("");
