import scannf from './node_modules/prompt-sync/index.js';
import chalk from 'chalk';
import pausa from './source/pausa';
let Scannf = scannf();
let pausa = new Pausa();
export default function Tarea() {
    this.fechaHoy = new Date();
    this.fechaActual = this.fechaHoy.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
    this.titulo = "----------";
    this.estado = "Pendiente";
    this.descripción = "----------";
    this.vencimiento = "----------";
    this.dificultad = "🌑🌑🌑";
    this.ultimaEd = this.fechaActual;
    this.creación = this.fechaActual;
    this.SetTitulo = function () {//Retorna un titulo  o `-1` si se cancela*****************************************************
        console.clear();
        do {
            console.log(chalk.greenBright(`[] Ingresa el titulo o solo [Enter] para cancelar.\n`));
            this.titulo = Scannf(`>`);
            if (this.titulo == " " || this.titulo == "  " || this.titulo == "   ") {
                console.log("Eltitulo no puede estar vacío.\nVuelva a intentarlo.");
                pausa.run();
                console.clear();
            }
            if (this.titulo.length > 100) {
                console.log("El titulo no puede superar los 100 caracteres.\nVuelva a intentarlo.");
                pausa.run();
                console.clear();
            }
        } while (this.titulo == " " || this.titulo == "  " || this.titulo == "   " || this.titulo.length > 100);
        if (this.titulo == "") {
            return `-1`;
        }
        else {
            console.clear();
            return this.titulo;
        }
    }
    this.SetEstado = function () {//Retorna un estado o `-1` si es cncelado******************************************************
        console.clear();
        do {
            console.log(`[] Ingresa el estado o solo [Enter] para cancelar:\n([P]endiente) / [E]n curso / [T]erminada / [C]ancelada:`);
            this.estado = Scannf(`>`);
            if (this.estado == ` `) {
                return ` `;
            }
            if (this.estado != "P" && this.estado != "E" && this.estado != "T" && this.estado != "C" && this.estado != "") {
                console.log("Opción invalida, opciónes validas: P, E, T, C.\nVuelva a intentarlo.");
                pausa.run();
                console.clear();
            }
        } while (this.estado != "P" && this.estado != "E" && this.estado != "T" && this.estado != "C" && this.estado != "");
        if (this.estado == "") {
            this.estado = "Pendiente";
            return `-1`;
        }
        else {
            switch (this.estado) {
                case `P`:
                    this.estado = `Pendiente`;
                    break;
                case `E`:
                    this.estado = `En curso`;
                    break;
                case `T`:
                    this.estado = `Terminada`;
                    break;
                case `C`:
                    this.estado = `Cancelada`;
                    break;
            }
            console.clear();
            return this.estado;
        }
    }
    this.SetDescripción = function () {//Retorna una descripción o `-1` si es cncelado************************************************
        console.clear();
        do {
            console.log(`[] Ingresa la descripción o solo [Enter] para cancelar.\n`);
            this.descripción = Scannf(`>`);
            if (this.descripción.length > 500) {
                console.log("La descripción no puede superar los 500 caracteres.\nVuelva a intentarlo.");
                pausa.run();
                console.clear();
            }
        } while ((this.descripción.length > 500) && this.descripción != "");
        if (this.descripción == "") {
            this.descripción = "----------";
            return `-1`;
        }
        else {
            console.clear();
            return this.descripción;
        }
    }
    this.SetVencimiento = function () {
        let año;
        let mes;
        let dia;
        let diasPorMes;
        let bisiesto;
        console.clear();
        //Pedimos el año**************************************************************************
        do {
            console.log(`[] Ingresa el año de vencimiento o solo [Enter] para cancelar:\n`);
            console.log(`[Ejemplo: 2021]`);
            año = Scannf(`>`);
            if (año == ` ` && f == `1`) {
                return ` `;
            }
            if ((año.length != 4 || año == NaN) && año != "") {
                console.log("Año ingresado invalido, solo se admiten numeros de 4 digitos sin espacios.\nVuelva a intentarlo.");
                pausa.run();
                console.clear();
            }
            else {
                bisiesto = (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0));
            }
        } while ((año.length != 4 || parseInt(año) == NaN) && año != "");
        if (año == "") {
            return `-1`;
        }
        diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // Ajustar febrero para años bisiestos
        if (bisiesto) {
            diasPorMes[1] = 29;
        }
        //Pedimos el mes**************************************************************************
        do {
            console.log(`[] Ingresa el mes de vencimiento o solo [Enter] para cancelar:\n`);
            console.log(`[Ejemplo: 03]`);
            mes = Scannf(`>`);
            if ((mes < 1 || mes > 12 || isNaN(mes)) && mes != "") {
                console.log("Mes ingresado invalido, solo se admiten numeros del 1 al 12, de dos digitos y sin espacios.\nVuelva a intentarlo.");
                pausa.run();
                console.clear();
            }
        } while ((mes < 1 || mes > 12 || isNaN(mes)) && mes != "");
        if (mes == "") {
            return `-1`;
        }
        //Pedimos el día**************************************************************************
        do {
            console.log(`[] Ingresa el día de vencimiento o solo [Enter] para cancelar:\n`);
            console.log(`[Ejemplo: 03]`);
            dia = Scannf(`>`);
            if ((dia < 1 || dia > diasPorMes[mes - 1] || isNaN(dia)) && dia != "") {
                console.log(`Dia ingresado invalido, solo se admiten numeros del 1 al ${diasPorMes[mes - 1]}de dos digitos sin espacios.\nVuelva a intentarlo.`);
                pausa.run();
                console.clear();
            }
        } while ((dia < 1 || dia > diasPorMes[mes - 1] || isNaN(dia)) && dia != "");
        if (dia == "") {
            return `-1`;
        }
        else {
            this.vencimiento = [dia + `/` + mes + `/` + año];
            console.clear();
            return this.vencimiento;
        }
    }
    this.SetDificultad = function () {
        console.clear();
        do {
            console.log(`[] Ingresa la dificultad o solo [Enter] para cancelar:\nDificultad [F]acil / [M]edio / [D]ificil:`);
            this.dificultad = Scannf(`>`);
            if (this.dificultad == ` ` && f == `1`) {
                return ` `;
            }
            if (this.dificultad != "F" && this.dificultad != "M" && this.dificultad != "D" && this.dificultad != "") {
                console.log("Opción invalida, opciónes validas: F, M, D.\nVuelva a intentarlo.");
                pausa.run();
                console.clear();
            }
        } while (this.dificultad != "F" && this.dificultad != "M" && this.dificultad != "D" && this.dificultad != "");
        if (this.dificultad == "") {
            this.dificultad = "🌑🌑🌑";
            return `-1`;
        }
        else {
            switch (this.dificultad) {
                case `F`:
                    this.dificultad = "🌑🌑🌑";
                    break;
                case `M`:
                    this.dificultad = "🌕🌕🌑";
                    break;
                case `D`:
                    this.dificultad = "🌕🌕🌕";
                    break;
            }
            console.clear();
            return this.dificultad;
        }
    }
    this.SetUltimaEd = function () {
        this.fechaEd = new Date();
        this.ultimaEd = this.fechaHoy.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }
    this.GetTitulo = function () {
        return this.titulo;
    }
}