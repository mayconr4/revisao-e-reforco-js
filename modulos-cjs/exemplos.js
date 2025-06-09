"use strict";

function minhaFuncao(){
    console.log("Olá! Função criada em um módulo");

} 


const clientes = ['JOn Olivia ','David glimour ','Floor jansen'];

/*CJS: CommonJs */
module.exports = {minhaFuncao, clientes}; 