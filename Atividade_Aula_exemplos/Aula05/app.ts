import { Carro } from './carro';
import { Direcao } from './direcao';
import { Motor } from './motor';
import { Veiculo } from './veiculo';
 
//let c = new Carro("Fiat","Uno","Branco","FDS-9876",4);

// let a = new Automovel("Ford","KA","Azul","QWE-0908",2);

//c = a;

// c.exibirInformacoes();

// c.numPortas = -1;
// console.log(c.fabricante)
// c.exibirInformacoes()

let veiculo = new Veiculo(2000);
//veiculo.ligar()

//let motor = new Motor();
let direcao = new Direcao();

veiculo.direcao = direcao;
//veiculo.motor = motor;

//veiculo.motor.potencia = 1000;
veiculo.direcao.cor = "Preta"
console.log(`Motor = ${veiculo.motor.potencia}, Direção = ${veiculo.direcao.cor}`);
