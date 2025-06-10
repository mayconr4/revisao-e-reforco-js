"use strict"; 

import {classificar} from "./modulos-esm/funcoes.js"

/*Sobre o operador rest .... 
usamos o rest para mesclar uma relação de parâmetros/argumentos
para uma função. Na pratica , os ´râmetros se comportam como um array podendo receber iterações via loop. */


function somar(...valores){
    // variável acumuladora 
    let total = 0;

    // Iteração para somar e guardar o resultado
    for(const valor of valores){ 
        total+=valor;
    }

    return total;

}

let resultado1 = somar(10,20);
let resultado2 = somar(10,20,30,5,5,6,7,8,7,4,6,5,65,65,656,56,546,66);   
console.log(resultado1);  
console.log(resultado2); 

console.log("--------------------------------------------------------");

console.log(classificar("Goiaba","Amora", "Banana", "Abacate"));
console.log(classificar("Viper","Bishop", "Triton", "Amazon"));




