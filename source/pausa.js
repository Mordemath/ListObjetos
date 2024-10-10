import chalk from 'chalk';
import scannf from 'prompt-sync';
let Scannf = scannf();
export default function pausa() {
    this.run = function () {
        let a;
        a = Scannf(chalk.yellowBright(`Presióne la tecla [ENTER] para continuar...`));
    }
}
