import Pausa from '../source/pausa.js'
import chalk from "../node_modules/chalk/source/index.js";
import prompt from "../node_modules/prompt-sync/index.js";
let scannf = prompt();
let pausa = new Pausa();

export default function calculadora() {
    this.a;
    this.b;
    this.s;
    this.run = function () {
        let op = 0;
        while (op != 6) {
            console.log(chalk.blueBright(`Menú************************************************************`));
            console.log(`1_Suma\n2_Resta\n3_multiplicación\n4_división\n5_Ingresar una expresión matematica completa\n6_Salir`);
            op = scannf(`Opción: `);
            switch (op) {
                case "1":
                    console.log("a+b");
                    if (this.EntradaDeNumeros() != -1) {
                        console.log(chalk.greenBright(`El resultado es ${this.a + this.b}`));
                    } else {
                        console.log(chalk.redBright(`Error...`));
                    }
                    break;
                case "2":
                    console.log("a-b");
                    if (this.EntradaDeNumeros() != -1) {
                        console.log(chalk.greenBright(`El resultado es ${this.a - this.b}`));
                    } else {
                        console.log(chalk.redBright(`Error...`));
                    }
                    break;
                case "3":
                    console.log("a*b");
                    if (this.EntradaDeNumeros() != -1) {
                        console.log(chalk.greenBright(`El resultado es ${this.a * this.b}`));
                    } else {
                        console.log(chalk.redBright(`Error...`));
                    }
                    break;
                case "4":
                    console.log("a/b");
                    if (this.EntradaDeNumeros() != -1) {
                        console.log(chalk.greenBright(`El resultado es ${this.a / this.b}`));
                    } else {
                        console.log(chalk.redBright(`Error...`));
                    }
                    break;
                case `5`:
                    console.log(chalk.blueBright(`Ingrese la expresión Ej: ((-3+1)*5+20)/2\n\n`));
                    this.s = scannf(`>>`);
                    if (this.TieneLetra(this.s)) {
                        console.log(chalk.redBright(`Error...`));
                        break;
                    }
                    let res = eval(this.s);
                    console.log(chalk.greenBright(`El resultado es ${res}`));
                    break;
                case "6":
                    console.log(chalk.yellowBright(`Hasta pronto...`));
                    break;
                default:
                    console.log(chalk.redBright(`Opción invalida`));
                    break;
            }
            pausa.run();
        }
    }
    this.a = 3;
    this.EntradaDeNumeros = function () {
        this.a = parseInt(scannf(`Ingrese el numero a: `));
        this.b = parseInt(scannf(`ingrese el numero b: `));
        if (isNaN(this.a) || isNaN(this.b)) {
            return -1;
        }
    }

    this.TieneLetra = function (s) {
        const letras = /[a-zA-Z]/;
        return letras.test(s);
    }
}