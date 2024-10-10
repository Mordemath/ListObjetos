import scannf from 'prompt-sync';
import chalk from 'chalk';
import Pausa from './pausa.js';
import tareas from './ListaDeTareasIndex.js';
import Buscador from './Buscador.js';
let Scannf = scannf();
let pausa = new Pausa();
export default function MenuVer() {
    this.buscador = new Buscador();
    this.run = function () {
        let op = `-1`;
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
                        this.VerTarea(i, tareas);
                    }
                    break;
                case `2`:
                    console.log(chalk.blueBright(`Estas son todas tus tareas [P]endientes:\n`));
                    for (let i = 0; i < tareas.length; i++) {
                        if (tareas[i].GetEstado() == `Pendiente`) {
                            this.VerTarea(i, tareas);
                        }
                    }
                    break;
                case `3`:
                    console.log(chalk.blueBright(`Estas son todas tus tareas [E]n curso:\n`));
                    for (let i = 0; i < tareas.length; i++) {
                        if (tareas[i].GetEstado() == `En curso`) {
                            this.VerTarea(i, tareas);
                        }
                    }
                    break;
                case `4`:
                    console.log(chalk.blueBright(`Estas son todas tus tareas [T]erminadas:\n`));
                    for (let i = 0; i < tareas.length; i++) {
                        if (tareas[i].GetEstado() == `Terminada`) {
                            this.VerTarea(i, tareas);
                        }
                    }
                    break;
                case `0`:
                    break;
                default:
                    console.log(chalk.redBright(`Opción invalida...`));
                    op = `-1`;
                    break;
            }
            this.Detalles(op);
        }
    }
    this.VerTarea = function (i, tareas) {
        console.log(chalk.blueBright(`*************************************************************`));
        console.log(chalk.blueBright(`Tarea N° [${i + 1}]`));
        console.log(chalk.greenBright(`${tareas[i].GetTitulo()}`));

    }
    this.Detalles = function (op) {
        if (op != `0` && op != `-1`) {
            console.log(`¿Deseas ver los detalles de alguna?`);
            console.log(`Introduce el numero de tarea para verla o solo [ENTER] para volver...\n`);
            op = Scannf(`>`);
            if (op != ``) {
                let indice = op - 1;
                let existeTarea = this.buscador.BuscarPor(tareas, `0`, op);
                if (existeTarea != `-1`) {
                    this.VerDetalles((indice), tareas);
                    console.log("Si deseas editarla ingresa [E] o solo [ENTER] para volver\n");
                    op = Scannf();
                    if (op == `E` || op == `e`) {
                        let auxTarea = Object.assign({},tareas[indice]);
                        let x = auxTarea.SetTarea(`1`);
                        if (x == `-1`) {
                            console.log(chalk.redBright(`Cancelado...`));
                            op = `-1`;
                        }
                        else{
                            tareas[indice] = Object.assign({},auxTarea);
                        }
                    }
                    else {
                        op = `-1`;
                    }
                }
            }
        }
    }
    this.VerDetalles = function (i, tareas) {
        console.log(chalk.blueBright(`Esta es la tarea.`));
        console.log(chalk.blueBright(`*************************************************************`));
        console.log(chalk.blueBright(`Tarea N° [${i + 1}]`));
        console.log(chalk.greenBright(`Titulo: ${tareas[i].GetTitulo()}`));
        console.log(chalk.greenBright(`Descripción: ${tareas[i].GetDescripción()}`));
        console.log(chalk.greenBright(`Estado: ${tareas[i].GetEstado()}`));
        console.log(chalk.greenBright(`Dificultad: ${tareas[i].GetDificultad()}`));
        console.log(chalk.greenBright(`Vencimiento: ${tareas[i].GetVencimiento()}`));
        console.log(chalk.greenBright(`Fecha de creación: ${tareas[i].GetCreacion()}\n`));
        console.log(chalk.greenBright(`Ultima edición: ${tareas[i].GetUltimaEd()}`));
    }
}