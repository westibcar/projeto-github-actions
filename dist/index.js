"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculadora_1 = __importDefault(require("./calculadora"));
// Cria uma instância da calculadora
const calculadora = new calculadora_1.default();
// Realiza algumas operações de exemplo
const resultadoSoma = calculadora.adicionar(5, 3);
console.log(`Resultado da soma: ${resultadoSoma}`);
const resultadoSubtracao = calculadora.subtrair(10, 7);
console.log(`Resultado da subtração: ${resultadoSubtracao}`);
const resultadoMultiplicacao = calculadora.multiplicar(4, 6);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
const resultadoDivisao = calculadora.dividir(20, 5);
console.log(`Resultado da divisão: ${resultadoDivisao}`);
