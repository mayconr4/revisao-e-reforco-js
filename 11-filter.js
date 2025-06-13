//
"use strict";

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

/* filter (filtrar) 
Passa por elmentos de um array e executa uma função callback visando retornar valores de acordo com uma oumais condições, gerando um novo array.
*/

//Exemplo 1: filtrarv vendas que tenham batido uma meta
const vendas = [1500, 3000, 500, 1000, 750, 5000, 100];
const META = 1000;

const vendasQueBateramMeta = vendas.filter((venda) => {
  return venda >= META;
});

console.log(vendasQueBateramMeta);

/*Se fosse fazer sem filter ..... */
// const bateramMeta = [];
// for(const venda of vendas){
//     if (venda >= META) {
//         bateramMeta.push(venda);
//     }
// }
// console.log(bateramMeta);

separador();

// Exemplo 2: filtrar serviços pendentes
const servicos = [
  { codigo: 1, tipo: "limpeza", status: "Concluido" },
  { codigo: 2, tipo: "manutenção", status: "Pendente" },
  { codigo: 3, tipo: "reparo", status: "Pendente" },
  { codigo: 4, tipo: "Consultaria", status: "Concluido" },
  { codigo: 5, tipo: "Instalação", status: "Concluido" },
];

const verficaSituacao = servicos.filter((servico) => {
  return servico.status == "Pendente";
});
// atendimento () => (paciente.idade >= 60 ? "prioritario" : "normal")
console.log(verficaSituacao);

const exibirSituacao = (tipo, status) => {};
