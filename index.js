import tarea from './tarea.js';
import Pausa from './source/pausa.js';
import scannf from './node_modules/prompt-sync/index.js';
import chalk  from 'chalk';

let Scannf = scannf();
let tareas = [];
let pausa = new Pausa();
let auxTarea = new tarea();
let hayTareas = false;
let op = ``;
while (op != `0`) {
    console.log(chalk.blueBright("Hola Olivia\n¿Qué deseas hacer?\n"));
    console.log("[1] Ver mis tareas.\n[2] Buscar una tarea.\n[3] Agregar una tarea.\n[0] Salir");
    op = Scannf(`Opción: `);
    switch (op) {
        case `1`:

            break;
        case `2`:

            break;
        case `3`:
            let x = auxTarea.Crear(`0`);
            if ( x == `-1`) {//`0`para crear tarea, `1` para editarla**********************************
                console.log(chalk.redBright("Cancelado...\n"));
            }
            else {
                tareas.push(auxTarea);
                console.log(chalk.greenBright(`¡Datos guardados!`));
                hayTareas = true;
            }

            break;
        case `0`:
            console.log(chalk.blueBright(`Hasta la proxima Olivia...`));
            break;
        default:
            console.log(chalk.redBright(`Opción invalida...`));
            op = `-1`;
            break;
    }

}
