import Animales from "./Animales.js";

export default class Tipos extends Animales {
    constructor(nombre, edad, comentarios, imagen, sonido) {
        super(nombre, edad, comentarios, imagen, sonido);
    }
}