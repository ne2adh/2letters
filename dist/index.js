"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeroALetras = void 0;
const numeroALetras = (numero) => {
    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const especiales = ['', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
    if (numero === 0)
        return 'cero';
    const convertirUnidades = (num) => unidades[num];
    const convertirDecenas = (num) => num < 10 ? convertirUnidades(num) : decenas[Math.floor(num / 10)];
    const convertirCentenas = (num) => centenas[Math.floor(num / 100)];
    if (numero < 10) {
        return convertirUnidades(numero);
    }
    else if (numero < 20) {
        return especiales[numero - 10];
    }
    else if (numero < 100) {
        return `${convertirDecenas(numero)} y ${convertirUnidades(numero % 10)}`;
    }
    else if (numero < 1000) {
        if (numero % 100 === 0) {
            return `${convertirCentenas(numero)}`;
        }
        else {
            return `${convertirCentenas(numero)} ${(0, exports.numeroALetras)(numero % 100)}`;
        }
    }
    else {
        return 'Número fuera de rango';
    }
};
exports.numeroALetras = numeroALetras;
