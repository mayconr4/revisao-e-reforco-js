# Atividades de revisão e reforço de JavaScript

## Sobre escopo de variáveis e constantes

- `var`: escopo GLOBAL
- `let`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada
- `const`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada. Obs.: **obrigatório** inicializar com algum valor.

---

## Modulos no JavScript

Exitem duas formas de uso:

- ModuloCJS: mecanismo mais antigo, usa `module.exports` e `require` associado á uma constante.
- Módulos ESM: mecanismo atual, usa `export` e `import`.

**OBs.:**recomendável criar na raíz o `package.json` contendo:

```json
{
  "type": "module"
}
```

---

## Sobre os operadores REST e SPREAD (...)

Rest e Spread em JavaScript

## O Operador Rest (...)

coleta argumentos de função em um array. Pense nele como um "empacotador".

## Já o Operador Spread (...)

espalha elementos de arrays ou objetos, funcionando como um "desempacotador".
Eles são opostos: Rest coleta na definição da função,
Spread expande na utilização. Ambos simplificam a manipulação de dados no seu código.
