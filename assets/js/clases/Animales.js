
export default class Animal {
    #nombre;
    #edad;
    #comentarios;
    #img;
    #sonido;
    
    constructor(nombre, edad, comentarios, img, sonido = {}) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#comentarios = comentarios;
        this.#img = img;
        this.#sonido = sonido;
    }

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    get comentarios() {
        return this.#comentarios;
    }

    set comentarios(nuevoComentarios) {
        this.#comentarios = nuevoComentarios;
        return this.#comentarios;
    }

    get img() {
        return this.#img;
    }

    get sonido() {
        return this.#sonido;
    }

}