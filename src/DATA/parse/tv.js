// Source: https://tv.yandex.ru/

const results = {};
const channel = document.querySelector(".channel-header__text").innerHTML;
const date = document
  .querySelector(".calendar__item_selected")
  .getAttribute("href")
  .slice(6);
results[channel] = {};
results[channel][date] = [];

document.querySelectorAll(".channel-schedule__event").forEach((el) => {
  const item = {};
  item.time = el.querySelector("time").innerHTML;
  item.title = el.querySelector(".channel-schedule__text").innerHTML;
  results[channel][date].push(item);
});

console.log(JSON.stringify(results, null, 2));
