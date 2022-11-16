"use strict";
exports.__esModule = true;
var direcao_1 = require("./direcao");
var veiculo_1 = require("./veiculo");
//let c = new Carro("Fiat","Uno","Branco","FDS-9876",4);
// let a = new Automovel("Ford","KA","Azul","QWE-0908",2);
//c = a;
// c.exibirInformacoes();
// c.numPortas = -1;
// console.log(c.fabricante)
// c.exibirInformacoes()
var veiculo = new veiculo_1.Veiculo(2000);
//veiculo.ligar()
//let motor = new Motor();
var direcao = new direcao_1.Direcao();
veiculo.direcao = direcao;
//veiculo.motor = motor;
//veiculo.motor.potencia = 1000;
veiculo.direcao.cor = "Preta";
console.log("Motor = ".concat(veiculo.motor.potencia, ", Dire\u00E7\u00E3o = ").concat(veiculo.direcao.cor));
