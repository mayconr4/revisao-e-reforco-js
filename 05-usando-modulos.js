'use strict';

// Importação de recurso (padrão default) 
import alunos from "./modulos-esm/alunos.js";

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