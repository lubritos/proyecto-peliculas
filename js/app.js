const listaPeliculas = [
    {
        nombre: 'Ant-Man and the Wasp',
        portada: './imagenes/gallery-1.jpg',
        anio:'2018',
        genero: 'Action',
        precio: '$1000',
        video: 'UUkn-enk2RU',
        stock: 10,
    },
    {
        nombre: 'Avengers: Infinity War',
        portada: './imagenes/gallery-2.jpg',
        anio:'2018',
        genero: 'Action, Fantasy',
        precio: '$1000',
        video: '6ZfuNTqbHE8',
        stock:10,
    },
    {
        nombre: 'The Flash',
        portada: './imagenes/gallery-3.jpg',
        anio:'2014',
        genero: 'Adventure, Fantasy',
        precio: '$1000',
        video: 'Yj0l7iGKh8g',
        stock:10,
    },
    {
        nombre: 'Game of thrones',
        portada: './imagenes/gallery-4.jpg',
        anio:'2018',
        genero: 'Adventure, Action',
        precio: '$1000',
        video: 'KPLWWIOCOOQ',
        stock:10,
    },
    {
        nombre: 'Titans',
        portada: './imagenes/gallery-5.jpg',
        anio:'2018',
        genero: 'Drama, Adventure',
        precio: '$1000',
        video: '_JX89CWH5MU',
        stock:10,
    },
    {
        nombre: 'Aquaman',
        portada: './imagenes/gallery-6.jpg',
        anio:'2018',
        genero: 'Action, Fantasy',
        precio: '$1000',
        video: 'WDkg3h8PCVU',
        stock:10,
    },
    {
        nombre: 'Hold the Dark',
        portada: './imagenes/gallery-7.jpg',
        anio:'2018',
        genero: 'Adventure, Mistery',
        precio: '$1000',
        video: 'OFAwDO6b5KI',
        stock:10,
    },
    {
        nombre: 'The predator',
        portada: './imagenes/gallery-8.jpg',
        anio:'2018',
        genero: 'Adventure, Horror',
        precio: '$1000',
        video: 'WaG1KZqrLvM',
        stock:10,
    },
];


const contenedor = document.getElementById('peliculas');

const card = (pelicula) => {
    return `<div class="card mx-2 my-4" style="width: 18rem;">
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
                <button onclick='agregarCarrito(${JSON.stringify(pelicula)})' class="btn bg-orange c-white roboto f-1">
                    Comprar (${stockActual(pelicula.stock, pelicula.nombre)}) 
                <button>
            </div>`;
}

function cargarProductos(contenedor) {
    let html = '';
    for (let i = 0; i < listaPeliculas.length; i++) {
        html +=  card(listaPeliculas[i]);
    }
    contenedor.innerHTML = html;
}

cargarProductos(contenedor);

const element = document.getElementsByClassName('bg-cards');
const triller = document.getElementById('triller');
const video = document.getElementById('video');
for (let i=0; i < element.length; i++) {
    element[i].addEventListener('click', () => {
        video.src = `https://www.youtube.com/embed/${listaPeliculas[i].video}`;
    })
}
