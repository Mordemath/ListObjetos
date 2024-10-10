import scannf from './node_modules/prompt-sync/index.js';
import chalk from 'chalk';
import Calculadora from './Calculadora/Cindex.js';
import { taskManager } from './SourceListaDeTareas/ListaDeTareasIndex.js';
const calculadora = new Calculadora();
const TaskManager = new taskManager();
let Scannf = scannf();
let op = ``;
while (op != '0') {
    console.log(chalk.greenBright("[1] Calculadora(Ejercicio 2).\n[2] ListaDeTareas(Ejercicio 3).\n[0] Salir"));
    op = Scannf(chalk.blueBright(">>"));
    switch (op) {
        case "1":
            console.clear();
            calculadora.run();
            console.clear();
            break;
        case "2":
            console.clear();
            TaskManager.run();
            console.clear();
            break;
        case `0`:
            break;
        default:
            console.log(chalk.redBright("Opción invalida"));
            op = `-1`;
            break;
    }
}
