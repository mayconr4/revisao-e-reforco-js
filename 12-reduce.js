"use strict";

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

/*reduce (reduzir, redução, chegar a um resultado único) Passa por elementos de um array e reduz a um unico valor , que pode ser uma soma, média, convatenação, etc.

a função callback recebe dois parâmetros: o acumulador (valor que é acumulado até o momento ), e o valor atual (elmento do array sendo processado).

*/

//Exemplo  1
const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce((acumulador, valor) => {
  return acumulador + valor;
}, 0);
//console.log(total);

//Exercicio 1 :
const precoTotal = cursos.reduce((acumulador, { preco }) => {
  return acumulador + preco;
}, 0);

console.log(precoTotal);

//Exercicio 2:
// const mediaDosPrecos = cursos.reduce((acumulador, curso) => {
//   let valores = precoTotal;
//   return valores / cursos.length;
// }, 0);
// console.log(mediaDosPrecos);

const mediaDosPrecos = cursos.reduce((acumulador, { preco }) => {
  return acumulador + preco / cursos.length;
}, 0);
console.log(mediaDosPrecos.toFixed(2));
// const mediaDosPrecos = cursos.reduce((acumulador, curso) => {

//   return valores / cursos.length;
// }, 0);
// console.log(mediaDosPrecos);

//Exercicio 3: calcule o preco total dos cursos de front-end

const precoTotalFront = cursos
  .filter(({ categoria }) => categoria === "Front-End")
  .reduce((acumulador, { preco }) => acumulador + preco, 0);

console.log(precoTotalFront);
