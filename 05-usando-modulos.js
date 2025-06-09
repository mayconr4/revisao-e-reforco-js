'use strict';

// Importação de recurso (padrão default) 
import alunos from "./modulos-esm/alunos.js"; 

// osu do as/apelido para veitar conflito de nomes
import {pessoa,livro,alunos as personagens} from "./dados.js";

//Iportação de multiplos recursos/módulos usando ESM
import { saudacao,clientes, separador } from "./modulos-esm/exemplos.js"; 

saudacao("Fulano de tal");
console.log(clientes);

separador();

console.log(alunos[0]);
console.log(alunos)

separador();


for (const aluno of alunos){ 
    
    console.log(aluno); 

} 

separador();

console.log("Personagens");
console.log(personagens);