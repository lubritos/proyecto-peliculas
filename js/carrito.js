import { showToast } from './toast.js'
let peliculasGuardadas = localStorage.getItem('carrito');
    peliculasGuardadas = JSON.parse(peliculasGuardadas);
let carrito = peliculasGuardadas || [];

const agregarCarrito = (pelicula) => {
    carrito.push(pelicula);
    actualizarCarrito(carrito);
    saveStorage(carrito);
    showToast('Pelicula Agregada');
    console.log('Pelicula agregada al carrito', pelicula);
};


function actualizarCarrito(listado) {
    const divCarrito = document.getElementsByClassName('carrito')[0];
    document.getElementById('carrito-contador').innerHTML = listado.length;
    let html2 = '';
    for (let i = 0; i < listado.length; i++) {
        html2 +=  `<div class="d-flex m-2 p-2 w-100 h-100 align-items-center justify-content-center">
                        <img src="https://image.tmdb.org/t/p/w500/${carrito[i].poster_path}" class="rounded mx-auto d-block" alt="" width="60">
                        <div class="d-flex flex-column m-3 descripcion-carrito">
                            <h5>${carrito[i].title}</h5>
                            <span>${carrito[i].precio}</span>
                            <span>${carrito[i].genero}</span>
                        </div>
                            <i data-id="${i}" data-nombre="${carrito[i].title}"class="fw-bold fs-5 eliminar btn-danger fas fa-trash-alt"></i>
                    </div>
                    `;
    }
    divCarrito.innerHTML = `
    <div class="d-flex flex-column overflow-scroll">
        ${html2}
        <div class="acciones d-flex justify-content-between m-3">
            <button class="btn btn-warning text-white">Comprar</button>
            <button class="btn vaciar btn-danger">Vaciar</button>
        </div>
    </div>`;
}

const saveStorage = (loqueguardo) => {
    localStorage.setItem('carrito', JSON.stringify(loqueguardo));
}
const vaciarCarrito = (id) => {
    if (id >= 0){
        console.log('Eliminar', id);
        const carritoNuevo = carrito.filter((c,index) => index !== parseInt(id, 10) );
        saveStorage(carritoNuevo);
        carrito = carritoNuevo;
        actualizarCarrito(carritoNuevo);
    } else {
        const divCarrito = document.getElementsByClassName('carrito')[0];
        divCarrito.innerHTML = '';
        localStorage.removeItem('carrito');
        carrito = [];
        actualizarCarrito(carrito);
    }

}

const stockActual = (stock, nombre) => {
    const listado = carrito.filter(pelicula => pelicula.title === nombre);
    return stock - listado.length;
}
actualizarCarrito(carrito);

export {
    stockActual,
    agregarCarrito,
    vaciarCarrito
}
