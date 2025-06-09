'use strict';

// Importação de recurso (padrão default) 
import alunos from "./modulos-esm/alunos.js"; 

// osu do as/apelido para veitar conflito de nomes
import {pessoa,livro,alunos as personagens} from "./dados.js";

//Iportação de multiplos recursos/módulos usando ESM
import { saudacao,clientes, separador } from "./modulos-esm/exemplos.js";  


import { 
    converterParaMaiuscula,
     converterParaMinuscula, 
     valorFormatado ,
     formatarMoeda
} from "./modulos-esm/funcoes.js";

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

/*Execicios 
1) crie um arquivo chmado "funcoes.js" dentro da pasta "modulos-esm"
2) Dentro dele , programe 3 funções (USANDO ARROW FUNCTION):
   - converter caracteres para MAIUSCULO
   - Converter caracteres para MINÚSCULO
   -  formatar valor em moeda brasileira (real)
3) Exporte-as como modulos
4) no arquivo 05, importe e utiliza estas funções passando textos e valores para testes.

*/ 
separador();

console.log(converterParaMaiuscula("maycon henrique silva santos"));  


console.log(converterParaMinuscula("MAYCON HENRIQUE SILVA SANTOS"));  


console.log(valorFormatado(1000));

console.log(formatarMoeda(3000, 'EUR','fr'));
