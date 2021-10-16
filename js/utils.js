import {stockActual} from './carrito.js';
const Card = (pelicula) => {
    return `<div class="card mx-2 my-4 ${pelicula.genero.replace(',', ' ').toLowerCase()}" style="width: 18rem;">
                <div class="position-relative" style="transition">
                    <div data-bs-toggle="modal" data-bs-target="#triller"
                        class="position-absolute w-100 h-100 d-none bg-cards">
                        <i class="far fa-play-circle c-white position-absolute top-50 start-50 translate-middle fs-1"></i>
                    </div>
                    <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="...">
                </div>                
                <div class="card-body">
                    <h5 class="card-title">${pelicula.title}</h5>
                    <h6>${pelicula.release_date}</h6>
                    <p>${pelicula.genero}</p>
                    <span>${pelicula.precio}</span>
                </div>
                <button data-pelicula="${pelicula.title}" class="btn btn-comprar bg-orange c-white roboto f-1">
                    Comprar (${stockActual(pelicula.stock, pelicula.title)})
                </button>
            </div>`;
}

const ResultadoPeli = (pelicula) => {
    return `<div class="compra d-flex m-2 p-2 h-100 align-items-center justify-content-center">
            <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="rounded mx-3 d-block" alt="" width="60">
            <div class="d-flex flex-column m-3 descripcion-carrito fw-bold roboto">
                <h5>${pelicula.title}</h5>
                <span>${pelicula.precio}</span>
                <span>${pelicula.genero}</span>
            </div>
        </div>
        `;
}


export {
    Card,
    ResultadoPeli
}