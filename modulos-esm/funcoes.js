"use strict";

import {separador } from "./exemplos.js"
/*Execicios 
1) crie um arquivo chmado "funcoes.js" dentro da pasta "modulos-esm"
2) Dentro dele , programe 3 funções (USANDO ARROW FUNCTION):
   - converter caracteres para MAIUSCULO
   - Converter caracteres para MINÚSCULO
   -  formatar valor em moeda brasileira (real)
3) Exporte-as como modulos
4) no arquivo 05, importe e utiliza estas funções passando textos e valores para testes.

*/ 

// Com retorno EXPLÍCITO
// const calcularMetadeSintaxeCompleta = (valor) => {
//     return valor / 2;
// }
// console.log(calcularMetadeSintaxeCompleta(10));




const converterParaMaiuscula = (texto) =>{ 
    return texto.toUpperCase();
} 

console.log(converterParaMaiuscula('maycon')); 


separador();


const converterParaMinuscula = (texto2) =>{ 
    return texto2.toLowerCase(); 
} 

console.log(converterParaMinuscula('maycon')); 

separador();

// function formatarPreco(float $valor  ):string { 
//     return "R$".number_format($valor, 2, ",",".");          
// }

const valorFormatado = (valor ) => { 
    return valor  =  valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
} 
console.log(valorFormatado(1000004)); 

// return valor.toFixed(2); 

export{converterParaMaiuscula, converterParaMinuscula, valorFormatado};
