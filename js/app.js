const listaPeliculas = [
    {
        nombre: 'Ant-Man and the Wasp',
        portada: './imagenes/gallery-1.jpg',
        anio:'2018',
        genero: 'Action'
    },
    {
        nombre: 'Avengers: Infinity War',
        portada: './imagenes/gallery-2.jpg',
        anio:'2018',
        genero: 'Action, Fantasy'
    },
    {
        nombre: 'The Flash',
        portada: './imagenes/gallery-3.jpg',
        anio:'2014',
        genero: 'Adventure, Fantasy'
    },
    {
        nombre: 'Game of thrones',
        portada: './imagenes/gallery-4.jpg',
        anio:'2018',
        genero: 'Adventure, Action'
    },
    {
        nombre: 'Titans',
        portada: './imagenes/gallery-5.jpg',
        anio:'2018',
        genero: 'Drama, Adventure'
    },
    {
        nombre: 'Aquaman',
        portada: './imagenes/gallery-6.jpg',
        anio:'2018',
        genero: 'Action, Fantasy'
    },
    {
        nombre: 'Hold the Dark',
        portada: './imagenes/gallery-7.jpg',
        anio:'2018',
        genero: 'Adventure, Mistery'
    },
    {
        nombre: 'The predator',
        portada: './imagenes/gallery-8.jpg',
        anio:'2018',
        genero: 'Adventure, Horror'
    },
];


const contenedor = document.getElementById('peliculas');

const card = (pelicula) => {
    return `<div class="card m-2" style="width: 18rem;">
                <img src="${pelicula.portada}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${pelicula.nombre}</h5>
                    <h6>${pelicula.anio}</h6>
                    <p>${pelicula.genero}</p>
                </div>
            </div>`;
}
let html = '';
for (let i = 0; i < listaPeliculas.length; i++) {
    html +=  card(listaPeliculas[i]);
}
contenedor.innerHTML = html;