// Source: https://tv.yandex.ru/
function hashCode(str) {
  return str.split("").reduce(function(a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
}

const results = {};
let channel = document.querySelector(".channel-header__text").innerHTML;
channel = hashCode(channel) + "_" + channel;
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
