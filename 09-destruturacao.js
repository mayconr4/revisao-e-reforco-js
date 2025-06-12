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

/*
faça a destruturação de elmentos deste array

const  [frase,perifericos] = diversos 

teste usando o console.log para exibir cada elmento extraido
console.log(frase);


const [teclado, monitor, mouse] = perifericos
*/

const [javaScript, [teclado, monitor, mouse], numero, funcao] = diversos;

console.log(javaScript);
console.log(teclado);
console.log(monitor);
console.log(mouse);
console.log(numero);
console.log(funcao("maycon"));
separador();
//faca a destruturação dos  elementos

const guloseimas = [
  "brigadeiro",
  "brownie",
  "torta de limão",
  "coxinha",
  "pastel",
  "pizza",
  "esfiha",
];

//Destruturação com operador rest
const [brigadeiro, brownie, torta, ...salgados] = guloseimas;
console.log(brigadeiro);
console.log(salgados); // virou um array

separador();

/*Destruturando objetos */
const musico = {
  nome: "David Glamour",
  instrumento: "Guitarra",
  idade: 77,
  banda: "Pink Floyd",
};

//Acessando propriedade atráves do objeto (sem destruturação)
// console.log(musico.nome);
// console.log(musico.idade);
// separador();

// com destruturação
const { nome, instrumento, idade, banda } = musico;

console.log(nome);
console.log(instrumento);
console.log(banda);
console.log(idade);

const aluno = {
  nome: "maycon",
  cidade: "são paulo",
  estado: "SP",
};

//destruturaçãoo com alias/apelido em propriedade
const { nome: nomeDoAluno, cidade, estado } = aluno;

console.log(nomeDoAluno);
console.log(cidade);
console.log(estado);
separador();

/*Mini-exercicio */
const paciente = {
  nome: "Gabriel Viana",
  idade: 19,
  contatos: ["gabriel@gmail.com", "11-98765-4321"],
  sintomas: "Sonolência permanente , coriza tosse, bronquite.....",
  mensalidade: 568.75,
  endereco: {
    localidade: "Rua Francisco coimbra",
    numero: "403",
    bairro: "penha",
  },
  atendimento: () => (paciente.idade >= 60 ? "prioritario" : "normal"),
};

// Destruturando todos os elementos deste objeto paciente, tornando-os  novas constantes

// Use o console.log para testar o acessso a cada nova constante desestruturada

const {
  nome: nomePaciente,
  idade: idadePaciente,
  contatos: [email, telefone],
  sintomas,
  mensalidade,
  endereco: { localidade, numero: numeroEndereco, bairro },
  atendimento,
} = paciente;

console.log(nomePaciente);
console.log(idadePaciente);
console.log(email);
console.log(telefone);
console.log(sintomas);
console.log(mensalidade);
console.log(localidade);
console.log(numeroEndereco);
console.log(bairro);
console.log(atendimento());

separador();
//Desestrutura com parametros
function processarPedido([produto, preco, marca = "não informado"]) {
  console.log("Produto: " + produto);
  console.log("Preço: " + preco);
  console.log("Marca: " + marca);
}

const pedidoA = ["Tv", 1500, "Sony"];
processarPedido(pedidoA);

const pedidoB = ["Notebook", 2500];
processarPedido(pedidoB);

separador();

const exibirDados = (filme) => {
  console.log(`Filme: ${filme.titulo} - Ano: ${filme.ano}\n`);
};

const filme1 = {
  titulo: "O Hobbit",
  ano: 2012,
};

const filme2 = {
  titulo: "O Senhor dos Anéis",
  ano: 2001,
};

exibirDados(filme1);
exibirDados(filme2);
