/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
    document.querySelector("img").src = generateImg();
  });

  console.log("Hello Rigo from the console!");
};
let generateImg = () => {
  let src = [
    "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1584388937/shape/mentalfloss/536413-gettyimages-1077470274.jpg?itok=NoDcW5uz",
    "https://api.timeforkids.com/wp-content/uploads/2020/04/200410016385.jpg",
    "https://earthsky.org/upl/2019/04/bluejay-e1554247141817.jpg",
    "https://www.marykassian.com/wp-content/uploads/2011/11/grumpy-old-lady.jpg"
  ];

  let srcIndex = Math.floor(Math.random() * src.length);

  return src[srcIndex];
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
