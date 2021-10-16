import { Card } from './utils.js';

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

function cargarProductos(contenedor) {
    let html = '';
    for (let i = 0; i < listaPeliculas.length; i++) {
        html += Card(listaPeliculas[i]);
    }
    if (contenedor)
    contenedor.innerHTML = html;
}

$.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=604a8bb5b071679af383a0a19ea9701c', function(data) {
    listaPeliculas = data.results;
    for (let i =0; i < listaPeliculas.length; i++) {
        listaPeliculas[i].genero = generos[Math.floor(Math.random() * generos.length)];
        listaPeliculas[i].precio = "$1000";
        listaPeliculas[i].stock = 10;
        listaPeliculas[i].video = videos[Math.floor(Math.random() * videos.length)];
    }
    cargarProductos(contenedor);
    const video = document.getElementById('video');
    const element = document.getElementsByClassName('bg-cards');
    for (let i=0; i < element.length; i++) {
        element[i].addEventListener('click', () => {
            video.src = `https://www.youtube.com/embed/${listaPeliculas[i].video}`;
        })
    }
});




export {
    cargarProductos,
    listaPeliculas
}
