import scannf from 'prompt-sync';
import chalk from 'chalk';
import Pausa from './pausa.js';
import MenuVer from '../MenuVer.js';
let Scannf = scannf();
let pausa = new Pausa();
let ver = new MenuVer();
export default function Buscador() {
    this.BuscarPor = function (tareas, op, j) {
        j = j - 1;
        switch (op) {
            case `0`://Buscamos por indice en el array tareas*****************
                if (j > tareas.length || j < 0 || isNaN(j)) {
                    console.log(chalk.redBright(`No se encuentran resultados para el indice ingresado...`));
                    return `-1`;
                }
                return j;
            case `1`:
                while (op != ``) {
                    console.log(chalk.greenBright(`Escriba el titulo o una palabra clave del titulo de tarea a buscar o [ENTER] para volver\n`));
                    let clave = Scannf(`>`);
                    if (clave != ``) {
                        let contador = 0;
                        for (let i = 0; i < tareas.length; i++) {
                            if (tareas[i].GetTitulo().includes(clave)) {
                                ver.VerTarea(i, tareas);
                                contador = contador + 1;
                            }
                        }
                        if (contador == 0) {
                            console.log(chalk.redBright(`No se encontraron coincidencias...`));
                        }
                        else {
                            console.log(chalk.greenBright(`${contador} coincidencias encontradas...`));
                            ver.Detalles(`1`);
                            console.clear();
                        }
                    }
                    else {
                        break;
                    }
                }
                break;
        }
    }
}