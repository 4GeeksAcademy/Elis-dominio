/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["mis", "los", "nuestros"];
  let abjetiv = ["grandes", "ultimos", "modernos"];
  let noun = ["almacenes", "perros", "lapices"];
  let tlds = [".org", ".de", ".dog"];

  let domainNames = [];
  for (let pr of pronoun) {
    for (let abj of abjetiv) {
      for (let n of noun) {
        for (let tl of tlds) {
          // domainNames.push(pr + abj + n + tl);
          console.log(pr + abj + n + tl);
        }
      }
    }
  }
  // console.log(domainNames);
};
