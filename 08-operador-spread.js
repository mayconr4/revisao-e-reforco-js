"use strict";

import { classificar } from "./modulos-esm/funcoes.js";
import { separador } from "./modulos-esm/exemplos.js";
/*Sobre o operador spread 

Usamos o operador spread para esplahar dados de arrays e objetos,
pode ser util na chamada de funcões e também ná mesclagem destas estruturas*/

//spread com arryas

const bandas = ["Yes", "Rush", "Pink Floyd"];
const maisBandas = ["Dream Theater", "Savatage", ...bandas];

console.log(bandas);
console.log(maisBandas);

separador();

// spread para espalhar parâmetros para uma função
console.log(classificar(...maisBandas));

separador();

//spreade em objetos
const cliente = {
  nome: "Ozzy",
  cidade: "Belo Horizonte",
  idade: 77,
};

const compra = {
  ...cliente, //copiando as propriedade de clientes para compra
  codigoPedido: "123xyz",
  produtos: ["Morcego", "Pomba", "Micorfone"],
  total: 2589.66,
  nome: "Paulo Cantor", //sobreEscrvendo uma propriedade que veio com spread
};

console.log(compra);
