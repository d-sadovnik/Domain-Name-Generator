/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#misdominios").innerHTML = domainGenerate();
  });
};

let domainGenerate = () => {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let dots = [".com", ".us", ".net", ".io"];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjs.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < dots.length; l++) {
          console.log(pronouns[i] + adjs[j] + nouns[k] + dots[l]);
        }
      }
    }
  }
};

domainGenerate();
