import { agregarCarrito, stockActual } from "./carrito.js";
import { Card, ResultadoPeli } from "./utils.js";

let peliculasTiendas;
const contenedor = document.getElementById('tienda');
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
$.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=604a8bb5b071679af383a0a19ea9701c', function(data) {
    peliculasTiendas = data.results;
    for (let i =0; i < peliculasTiendas.length; i++) {
        peliculasTiendas[i].genero = generos[Math.floor(Math.random() * generos.length)];
        peliculasTiendas[i].precio = "$1000";
        peliculasTiendas[i].stock = 10;
        peliculasTiendas[i].video = videos[Math.floor(Math.random() * videos.length)];
    }
    let html = '';
    for (let i = 0; i < peliculasTiendas.length; i++) {
        html += Card(peliculasTiendas[i]);
    }
    contenedor.innerHTML = html;
    const video = document.getElementById('video');
    const element = document.getElementsByClassName('bg-cards');
    for (let i=0; i < element.length; i++) {
        element[i].addEventListener('click', () => {
            video.src = `https://www.youtube.com/embed/${peliculasTiendas[i].video}`;
        })
    }
});

$('.search').on('keyup', function() {
    let html = '';
    const busqueda = $(this).val();
    if (!busqueda) return $('#resultados-busqueda').hide();
    const resultados = peliculasTiendas.filter((pelicula) => {
        return pelicula.title.toLowerCase().includes(busqueda.toLowerCase());
    });
    resultados.map(peli => {
        html += ResultadoPeli(peli);
    });
    if (resultados.length) {
        $('#resultados-busqueda').html(html);
    } else {
        $('#resultados-busqueda').html('<div><p>Ninguna pelicula encontrada.</p></div>');
    }
    $('#resultados-busqueda').show();
});

$(`#tienda`).on('click', '.btn-comprar',function() {
    const nombre = $(this).data('pelicula');
    const peliculaComprada = peliculasTiendas.filter((peli) => peli.title === nombre);
    agregarCarrito(peliculaComprada[0]);
    const stock = stockActual(peliculaComprada[0].stock, peliculaComprada[0].title);
    $(this).text(`Comprar (${stock})`);
});