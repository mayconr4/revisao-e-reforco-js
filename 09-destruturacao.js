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

//Destruturando alguns valores do array (omitimos Cruritiba e belo horizonte)
const [paraiba, amazonas, , bahia] = capitais;
console.log(paraiba);
console.log(amazonas);
console.log(bahia);

separador();

const linguagens = [
  ["HTML", "CSS", "JS"],
  ["PHP", "Node.Js", "SQL", "Python", "ASP.Net"],
];
console.log(linguagens);

//console.log(linguagens[0][2]);
//console.log(linguagens[1][3]);

const [frontEnd, backEnd] = linguagens;

console.log(frontEnd[2]); //JS
console.log(backEnd[3]); //Python

separador();

// Destruturação aninhada
const [[html, css, js], [php, node, sql, python, asp]] = linguagens;
console.log(js);
console.log(python);

separador();

/*Mini exercicio */

const diversos = [
  "JavaScript - Reforco",
  ["Teclado", "Monitor", "Mouse"],
  2112,
  (texto) => texto.toUpperCase(),
];

const [javaScript, [teclado, monitor, mouse], numero, funcao] = diversos;

console.log(javaScript);
console.log(teclado);
console.log(monitor);
console.log(mouse);
console.log(numero);
console.log(funcao("maycon"));

//faca a destruturação dos  elementos
