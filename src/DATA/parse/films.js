// Source: https://www.amediateka.ru/movies

let results = [];

const searchResults = document.querySelectorAll(
  '[class="ExtendedCardItem_extended-card-item__2Ml2i"]'
);

for (let i = 0; i < searchResults.length - 1; i++) {
  const item = {};

  //title
  item.title = searchResults[i]
    .querySelector(".ExtendedCardItem_extended-card-item__logo__1upQc")
    .getAttribute("alt");
  results.push(item);

  //descr
  item.description = searchResults[i].querySelector(
    ".ExtendedCardItem_extended-card-item__description__18gwD"
  ).innerText;

  //img
  item.img = searchResults[i]
    .querySelector("picture")
    .querySelectorAll("source")[1]
    .getAttribute("srcset")
    .split(",")[1]
    .slice(0, -2)
    .trim();

  //genres
  item.genres = [];
  item.genres.push(
    searchResults[i].querySelectorAll(".Tag_tag_default__1Cr3h")[2]
      .childNodes[0].innerText
  );
  if (searchResults[i].querySelectorAll(".Tag_tag_default__1Cr3h")[3]) {
    item.genres.push(
      searchResults[i].querySelectorAll(".Tag_tag_default__1Cr3h")[3]
        .childNodes[0].innerText
    );
  }
}

console.log(JSON.stringify(results, null, 2));
