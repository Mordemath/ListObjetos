import tarea from './tarea.js';
import Pausa from './source/pausa.js';
import scannf from './node_modules/prompt-sync/index.js';
let Scannf = scannf();
let tareas = [];
let tareaA = new tarea();
let pausa = new Pausa();
pausa.run();
let op = ``;
while (op != `0`) {
    console.log(chalk.blueBright("Hola Olivia\n¿Qué deseas hacer?\n"));
    console.log("[1] Ver mis tareas.\n[2] Buscar una tarea.\n[3] Agregar una tarea.\n[0] Salir");
    op = Scannf(`Opción: `);
    switch (op) {
        case `1`:
            a
            break;
        case `2`:

            break;
        case `3`:

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
