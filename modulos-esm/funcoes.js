"use strict";


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



const converterParaMinuscula = (texto) =>{ 
    return texto.toLowerCase(); 
}   

export const valorFormatado = (valor ) => { 
    return valor  =  valor.toLocaleString( 
    'pt-br',{ 
        style: 'currency', 
         currency: 'BRL' 
    } 
  ) 
  
} ; 


export const formatarMoeda = (valor, moeda = 'BRL', localidade = 'pt-br' ) => { 
    return  valor.toLocaleString( 
    localidade,
    { 

        style: 'currency', 
         currency:  moeda
    } 
  ) 
  
} ;

/*Usamos o rest operator para obte ruma lista de parâmetors não importando a quantidade */
export function classificar(...texto){ 
  return texto.sort();
}
 

// return valor.toFixed(2); 

export{converterParaMaiuscula, converterParaMinuscula };
