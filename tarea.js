import scannf from './node_modules/prompt-sync/index.js';
import chalk from 'chalk';
import Pausa from './source/pausa.js';
let Scannf = scannf();
let pausa = new Pausa();
export default function Tarea() {
    this.fechaHoy = new Date();
    this.fechaActual = this.fechaHoy.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
    this.titulo = ` `;
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
            this.titulo = " ";
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
                this.estado = "Pendiente";
                return this.estado;
            }
            if (this.estado != "P" && this.estado != "E" && this.estado != "T" && this.estado != "C" && this.estado != "") {
                console.log("Opción invalida, opciónes validas: P, E, T, C.\nVuelva a intentarlo.");
                pausa.run();
                console.clear();
            }
        } while (this.estado != "P" && this.estado != "E" && this.estado != "T" && this.estado != "C" && this.estado != "");
        if (this.estado == "") {
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
    this.SetVencimiento = function () {//Retorna un vencimiento o `-1` si es cncelado************************************************
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
            if (año == ` `) {
                this.vencimiento = "----------";
                return "----------";
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
    this.SetDificultad = function () {//Retorna una dificultad o `-1` si es cncelado************************************************
        console.clear();
        do {
            console.log(`[] Ingresa la dificultad o solo [Enter] para cancelar:\nDificultad [F]acil / [M]edio / [D]ificil:`);
            this.dificultad = Scannf(`>`);
            if (this.dificultad == ` `) {
                this.dificultad = "🌑🌑🌑";
                return this.dificultad;
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
    this.SetUltimaEd = function () {//Actualiza ultima edición************************************************
        this.fechaEd = new Date();
        this.ultimaEd = this.fechaHoy.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }
    this.GetTitulo = function () {
        return this.titulo;
    }
    this.GetEstado = function () {
        return this.estado;
    }
    this.GetDescripción = function () {
        return this.descripcion;
    }
    this.GetVencimiento = function () {
        return this.vencimiento;
    }
    this.GetDificultad = function () {
        return this.dificultad;
    }
    this.GetUltimaEd = function () {
        return this.ultimaEd;
    }
    this.GetCreacion = function () {
        return this.creación;
    }
    this.Crear = function (f) {
        let op = `0`;
        do {
            let aux;
            if (f == `1`) {
                console.log(`\n\n`);
                console.log(chalk.greenBright("Estas editando una tarea"));
                console.log(`Si deseas mantener los valores de un atributo simplemente dejalo en blanco.`);
                console.log(`Si deseas dejar en blanco un atributo escribe un espacio(Solo funciona con atributos que puedan estar en blanco).`);
                console.log(`*************************\n1. Editar titulo.\n2. Editar descripción.\n3. Editar Estado.\n4. Editar dificultad.\n5. Editar vencimiento.\n6. Guardar Cambios.\n7. Cancelar.`);

            }
            else {
                console.log(chalk.greenBright("Estas creando una tarea\n"));
                console.log(`*************************\n1. Asignar titulo.\n2. Asignar descripción.\n3. Asignar Estado.\n4. Asignar dificultad.\n5. Asignar vencimiento.\n6. Guardar Cambios.\n7. Cancelar.`);

            }
            op = Scannf(chalk.greenBright(">>"));
            switch (op) {
                case `1`:
                    aux = this.SetTitulo();
                    if (aux == `-1`) {
                        console.clear();
                        console.log(chalk.redBright(`Cancelado...`));
                    }
                    else {
                        console.log(chalk.greenBright(`Titulo Guardado: ${aux}`));
                    }
                    break;
                case `2`:
                    aux = this.SetDescripción();
                    if (aux == `-1`) {
                        console.clear();
                        console.log(chalk.redBright(`Cancelado...`));
                    }
                    else {
                        console.log(chalk.greenBright(`Descripción Guardada: ${aux}`));
                    }
                    break;
                case `3`:
                    aux = this.SetEstado();
                    if (aux == `-1`) {
                        console.clear();
                        console.log(chalk.redBright(`Cancelado...`));
                    }
                    else {
                        console.log(chalk.greenBright(`Estado Guardado: ${aux}`));
                    }
                    break;
                case `4`:
                    aux = this.SetDificultad();
                    if (aux == `-1`) {
                        console.clear();
                        console.log(chalk.redBright(`Cancelado...`));
                    }
                    else {
                        console.log(chalk.greenBright(`Dificultad guardada: ${aux}`));
                    }
                    break;
                case `5`:
                    aux = this.SetVencimiento();
                    if (aux == `-1`) {
                        console.clear();
                        console.log(chalk.redBright(`Cancelado...`));
                    }
                    else {
                        console.log(chalk.greenBright(`Vencimientoo Guardado: ${aux}`));
                    }
                    break;
                case `6`:
                    if (this.GetTitulo() == ` `) {
                        console.log(chalk.redBright(`Primero debe ingresar un Titulo de tarea.`));
                        op = `0`;
                        break;
                    }
                    else {
                        return `2`;
                    }
                case `7`:
                    break;

                default:
                    console.log(chalk.redBright(`Opción invalida...`));
                    break;
            }
            pausa.run();
            console.clear();
        } while (op = ! `7`);
        return `-1`;
    }


}