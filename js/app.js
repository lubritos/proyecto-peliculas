let listaPeliculas;
const contenedor = document.getElementById('peliculas');
const generos = [
    "Action, Fantasy",
    "Adventure, Fantasy",
    "Drama, Adventure",
    "Adventure, Mistery",
    "Adventure, Horror",
];
const videos = [
    "UUkn-enk2RU",
    "6ZfuNTqbHE8",
    "Yj0l7iGKh8g"
];
const card = (pelicula) => {
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

$.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=604a8bb5b071679af383a0a19ea9701c', function(data) {
    console.log(data);
    listaPeliculas = data.results;
    for (let i =0; i < listaPeliculas.length; i++) {
        listaPeliculas[i].genero = generos[Math.floor(Math.random() * generos.length)];
        listaPeliculas[i].precio = "$1000";
        listaPeliculas[i].stock = 10;
        listaPeliculas[i].video = videos[Math.floor(Math.random() * videos.length)];
    }
    cargarProductos(contenedor);
    const video = document.getElementById('video');
    for (let i=0; i < element.length; i++) {
        element[i].addEventListener('click', () => {
            video.src = `https://www.youtube.com/embed/${listaPeliculas[i].video}`;
        })
    }
});

const element = document.getElementsByClassName('bg-cards');


export {
    cargarProductos,
    listaPeliculas
}
