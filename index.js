import tarea from './tarea.js';
import Pausa from './source/pausa.js';
import scannf from './node_modules/prompt-sync/index.js';
import chalk from 'chalk';
import MenuVer from './MenuVer.js';
import Buscador from './source/Buscador.js';
let buscador = new Buscador();
let Scannf = scannf();
let tareas = [];
export default tareas;
let pausa = new Pausa();
let auxTarea = new tarea();
let hayTareas = false;
let menuVer = new MenuVer();
let op = ``;
while (op != `0`) {
    console.log(chalk.blueBright("Hola Olivia\n¿Qué deseas hacer?\n"));
    console.log("[1] Ver mis tareas.\n[2] Buscar una tarea.\n[3] Agregar una tarea.\n[0] Salir");
    op = Scannf(`Opción: `);
    switch (op) {
        case `1`:
            if (hayTareas) {
                menuVer.run();
            }
            else {
                console.log(chalk.redBright("No hay tareas para mostrar.\n"));
            }
            break;
        case `2`:
            if (hayTareas) {
                buscador.BuscarPor(tareas, `1`, 0);
            }
            else {
                console.log(chalk.redBright("No hay tareas para mostrar.\n"));
            }
            break;
        case `3`:
            let x = auxTarea.SetTarea(`0`);
            tareas.push(Object.assign({},auxTarea));//`0`para crear tarea, `1` para editarla**********************************
            if (x == `-1`) {
                console.log(chalk.redBright("Cancelado...\n"));
                tareas.pop();
            }
            else {
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
