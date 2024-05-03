import Tipos from "./clases/Tipos.js";
import data from "./data.js";

let animales = [];
let imagenAnimal;
let sonidoAnimal;

// mostrar modal inicio al cargar la página
$(document).ready(function () {
    $("#modalInicio").modal('show');
});

// let now = new Date();
// console.log(now);

moment.locale("es");

// cargar datos animal
document.getElementById('animal').addEventListener('change', async (evento) => {
    try {
        const listaAnimal = evento.target.value;
        const animales = await data.getData()
        const datosAnimal = await animales.find((animal) => {
            return animal.name === listaAnimal;
        })
        imagenAnimal = `${datosAnimal.imagen}`;
        sonidoAnimal = `${datosAnimal.sonido}`;
        const preview = document.getElementById('imagen');
        // preview.parentElement.classList.remove('p-5')
        preview.style.backgroundImage = `url(./assets/img/${imagenAnimal})`;
    } catch (error) {
        console.log(error);
    }
});

// agregar animal al listado
document.getElementById('btnAgregar').addEventListener('click', () => {
    try {
        const nombre = document.getElementById('animal').value;
        const edad = document.getElementById('edad').value;
        const comentario = document.getElementById('comentarios').value;
        if (nombre && edad && comentario) {
            let animal = new Tipos(nombre, edad, comentario, imagenAnimal, sonidoAnimal);
            animales.push(animal);
            crearTarjeta();
            document.getElementById("registro").reset();
            document.getElementById("imagen").style.backgroundImage = "";
        } else {
            alert('Debes completar todos los datos para registrar el avistamiento.')
        }
    } catch (error) {
        console.log(error)
    }
});

// crear card con datos animal
const crearTarjeta = () => {
    try {
        const template = document.getElementById('animales');
        template.innerHTML = "";
        animales.forEach((animal, i) => {
            template.innerHTML += `
            <div class="col-4 p-2">
            <div class="text-white">
              <img id="imgAnimal"
                height="200"
                src="./assets/img/${animal.img}" 
                data-bs-toggle="modal"  
                data-bs-target="#modalAnimal" 
                onclick="crearModal('${i}')" 
              />
              <div>
                <button onclick="sonidoAnimal('${animal.sonido}')" class="btn btn-light text-white" id="btnSonido" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Escuchar al animal">🔊</button>
              </div>
            </div>
          </div>
            `
        })
    } catch (error) {
        console.log(error);
    }
}

// función sonido animal
window.sonidoAnimal = (sonido) => {
    try {
        let musica = new Audio(`./assets/sounds/${sonido}`);
        musica.play();
    } catch (error) {
        console.log(error);
    }
}

// crear modal animal
window.crearModal = (i) => {
    try {
        const cuerpoModal = document.getElementsByClassName('modal-body')[0];
        const animal = animales[i];
        cuerpoModal.innerHTML = `
        <div class="px-3 pb-2">
        <div class="card w-75 m-auto bg-dark text-white border-0">
        <h5 class="card-title text-center text-uppercase text-warning">${animal.nombre}</h5>
        <hr>
          <img
            src="./assets/img/${animal.img}"
            class="d-block m-auto w-100" id="resImgAnimal"
          />
          <hr>
          <div class="card-body text-center">
            <h6 class="card-text text-warning">Edad aproximada:</h6>
            <p>${animal.edad}</p>
            <hr/>
            <h6 class="card-text text-warning">Detalles de la observación:</h6>
            <p>${animal.comentarios}</p>
          </div>
          <hr>
          <em class="text-center text-warning fw-light">${moment().format("LLLL")}</em>
        </div>
        </div>
        `;
    } catch (error) {
        console.log(error)
    }
};