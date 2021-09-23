let listaPeliculas;
const contenedor = document.getElementById('peliculas');

const card = (pelicula) => {
    return `<div class="card mx-2 my-4 ${pelicula.genero.replace(',', ' ').toLowerCase()}" style="width: 18rem;">
                <div class="position-relative" style="transition">
                    <div data-bs-toggle="modal" data-bs-target="#triller"
                        class="position-absolute w-100 h-100 d-none bg-cards">
                        <i class="far fa-play-circle c-white position-absolute top-50 start-50 translate-middle fs-1"></i>
                    </div>
                    <img src="${pelicula.portada}" class="card-img-top" alt="...">
                </div>                
                <div class="card-body">
                    <h5 class="card-title">${pelicula.nombre}</h5>
                    <h6>${pelicula.anio}</h6>
                    <p>${pelicula.genero}</p>
                    <span>${pelicula.precio}</span>

                </div>
                <button data-pelicula="${pelicula.nombre}" class="btn btn-comprar bg-orange c-white roboto f-1">
                    Comprar (${pelicula.stock})
                </button>
            </div>`;
}

function cargarProductos(contenedor) {
    let html = '';
    for (let i = 0; i < listaPeliculas.length; i++) {
        html +=  card(listaPeliculas[i]);
    }
    contenedor.innerHTML = html;
}

$.get('./js/json/peliculas.json', function(data) {
    listaPeliculas = data;
    cargarProductos(contenedor);
});

const element = document.getElementsByClassName('bg-cards');
const triller = document.getElementById('triller');
const video = document.getElementById('video');
for (let i=0; i < element.length; i++) {
    element[i].addEventListener('click', () => {
        video.src = `https://www.youtube.com/embed/${listaPeliculas[i].video}`;
    })
}

export {
    cargarProductos,
    listaPeliculas
}
