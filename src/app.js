/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let randomNumber = Math.random() * 10;
  document.querySelector("#the-excuse").innerHTML = generateExcuse();

  console.log("Hello Rigo from the console!" + randomNumber);
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["giraffe", "doctor", "neighbor", "nome", "grocer", "cop"];
  let action = [
    "took my",
    "threw my",
    "stoled my",
    "yelled at my",
    "sang to my",
    "tickled my"
  ];
  let where = [
    "in my kitchen",
    "in the basement",
    "in my neighbor's apartment",
    "in my toilet",
    "in the office",
    "in the zoo",
    "through the window"
  ];
  let possesion = ["sandwich", "parrot", "nose", "homework", "breakfast"];

  let pronIndx = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  let possesionIndex = Math.floor(Math.random() * possesion.length);

  return (
    pronoun[pronIndx] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possesion[possesionIndex] +
    " " +
    where[whereIndex]
  );
};
