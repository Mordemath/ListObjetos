import scannf from './node_modules/prompt-sync/index.js';
import chalk from 'chalk';
import Calculadora from './Calculadora/Cindex.js';
import { TaskManager } from './source/ListaDeTareasIndex.js';
const calculadora = Object.create(Calculadora);
const taskManager = Object.create(TaskManager);
let Scannf = scannf();
let op = ``;
console.log(chalk.greenBright("[1] Calculadora(Ejercicio 2).\n[2] ListaDeTareas(Ejercicio 3).\n[0] Salir"));
op = Scannf(chalk.blueBright(">>"));
switch (op) {
    case "1":
        calculadora.run();
        break;
    case "2":
        taskManager.run();
        break;
    default:
        console.log(chalk.redBright("Opción invalida"));
        break;
}
