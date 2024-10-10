import scannf from './node_modules/prompt-sync/index.js';
import chalk from 'chalk';
import Pausa from './source/pausa.js';
import tareas from './index.js';
let Scannf = scannf();
let pausa = new Pausa();
export default function MenuVer() {
    let op = `-1`;
    this.run = function () {
        while (op != `0`) {
            console.log(chalk.blueBright("¿Que tarea deseas ver?\n"));
            console.log("[1] Todas");
            console.log("[2] Pendientes");
            console.log("[3] En Curso");
            console.log("[4] Terminadas");
            console.log("[0] Volver");
            op = Scannf("Ingrese una opcion: ");
            switch (op) {
                case `1`:
                    console.clear();
                    console.log(chalk.blueBright(`Estas son todas tus [T]areas:`));
                    for (let i = 0; i < tareas.length; i++) {
                        VerTarea(i, tareas);
                    }
                    break;
                case `0`:
                    break;
                default:
                    console.log(chalk.redBright(`Opción invalida...`));
                    op = `-1`;
                    break;
            }
        }
    }
    this.VerTarea = function (i, tareas) {
        console.log(chalk.blueBright(`*************************************************************`));
        console.log(chalk.blueBright(`Tarea N° [${i + 1}]`));
        console.log(chalk.greenBright(`${tareas[i].GetTitulo}`));
    
    }
}