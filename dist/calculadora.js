"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importando as funções de operações
const adicao_1 = require("./operacoes/adicao");
const subtracao_1 = require("./operacoes/subtracao");
const multiplicacao_1 = require("./operacoes/multiplicacao");
const divisao_1 = require("./operacoes/divisao");
class Calculadora {
    adicionar(a, b) {
        return (0, adicao_1.adicionar)(a, b);
    }
    subtrair(a, b) {
        return (0, subtracao_1.subtrair)(a, b);
    }
    multiplicar(a, b) {
        return (0, multiplicacao_1.multiplicar)(a, b);
    }
    dividir(a, b) {
        return (0, divisao_1.dividir)(a, b);
    }
}
exports.default = Calculadora;
