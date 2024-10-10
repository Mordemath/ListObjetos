import tarea from './tarea.js';
import scannf from 'prompt-sync';
import chalk from 'chalk';
import MenuVer from '../source/MenuVer.js';
import Buscador from './Buscador.js';
let tareas = [];
export default tareas;
export function taskManager() {
    this.run = function () {
        let buscador = new Buscador();
        let Scannf = scannf();
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
                    auxTarea = new tarea();//reinicializa la tarea auxiliar para ser utilizada *******************************(es un puntero, por eso hace falta esto)
                    let x = auxTarea.SetTarea(`0`);
                    tareas.push(Object.assign({}, auxTarea));//`0`para crear tarea, `1` para editarla**********************************
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
    }
}
//xd