"use strict";

import { separador } from "./modulos-esm/exemplos.js";
import cursos from "./modulos-esm/cursos.js";
/*map (mapear, mapeamento - tranformar/gerar em outra coisa)
Passa por elementos de um array e realiza operações em cada um deçes através de uma função call back, gerando um novo array d elementos tarnsformados. */

//Exemplo 1
const numeros = [10, 10, 5, 12.5, 66, 50, 1000];
console.log(numeros);

const numerosDobrados = numeros.map((numero) => numero * 2);

console.log(numerosDobrados);

separador();

/*Mini-exercicio:
1) Crie um array com 5 textos escritos em letras MAIUSCULAS
2) mostre no console este array
3) Usando o map, acesse e transforme todos eles em letras minúsculas
4) Guarde o resultado do map em uma nova constante
5) Mostre no console este novo array
*/

const textos = ["SENAC", "MAYCON", "HENRIQUE", "SILVA", "SANTOS"];
console.log(textos);

const textoMinusculo = textos.map((texto) => texto.toLowerCase());

console.log(textoMinusculo);

separador();

console.log("==Lista Completa de Cursos==");
console.log(cursos);
console.log("==============================");

separador();

//Exemplo 2: gerar um novo array contendo somente os títulos dos cursos
const titulos = cursos.map((curso) => curso.titulo);
console.log(titulos);

separador();

/*Use o map para gerar um novo array contendo SOMENTE os preços dos cursos calculados com um desconto de 10% */

const precos = cursos.map((curso) => curso.preco);
console.log(precos);

const descontos = cursos.map((curso) => {
  let valorComDesconto = curso.preco - curso.preco * 0.1;
  return valorComDesconto;
});

console.log(descontos);

separador();

//Exemplo 3: gerar um novo array completo(ou seja com os objeto completo com os precos atualizados com desconto) mas com os preços atualizados com o desconto

const cursosComDesconto = cursos.map((curso) => {
  return {
    ...curso, //spread das propriedades do curso(copianod -as para cá)
    preco: curso.preco - curso.preco * 0.1, // mas o preco é atualzado
  };
});

console.log(cursosComDesconto);

separador();

/*Exercício
Gere uma nova lista de cursos contendo apenas os titulos e as categorias. */

// const titulosComCategoria = cursos.map((curso) => {
//   return {
//     titulo: curso.titulo,
//     categoria: curso.categoria,
//   };
// });

// console.log(titulosComCategoria);

// versão 2: com retorno implicito(atenção: use paênteses no retorno do objeto)
// const titulosComCategoria = cursos.map((curso) => ({
//   titulo: curso.titulo,
//   categoria: curso.categoria,
// }));

// console.log(titulosComCategoria);

//Versão 3: usando desestruturação de parâmetros
/* Note que podemos até mesmo deixar apenas o nome dos pareâmetros como propriedades do objeto retornado.
Ou seja, em vez de usar titulo: titulo, podemos deixar somente titulo. Em vez de usar categoria: categoria, basta categoria.
*/
const cursosComTituloCategoria = cursos.map(({ titulo, categoria }) => ({
  titulo: titulo,
  categoria: categoria,
}));
