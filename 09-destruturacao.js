"use strict";

import { separador } from "./modulos-esm/exemplos.js";

//Destruturando arrays
const clientes = ["Jon oliva", "Geddy lee", "David gilmour"];

const [cliente1, cliente2, cliente3] = clientes;

console.log(clientes[0]);
console.log(clientes[1]);
console.log(clientes[2]);

const capitais = [
  "Jão Pessoa",
  "Manaus",
  "Curitiba",
  "Salvador",
  "Belo Horizonte",
];

separador();

//Destruturando alguns valores do array
const [paraiba, amazonas, , bahia] = capitais;
console.log(paraiba);
console.log(amazonas);
console.log(bahia);
