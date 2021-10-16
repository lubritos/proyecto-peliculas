import { hideToast } from './toast.js'
import './noticias.js'
import { agregarCarrito, stockActual, vaciarCarrito } from './carrito.js';
import { cargarProductos, listaPeliculas } from './app.js'
import { ResultadoPeli } from './utils.js';

let suscriptores = [];
$(`#peliculas`).on('click', '.btn-comprar',function() {
    const nombre = $(this).data('pelicula');
    const peliculaComprada = listaPeliculas.filter((peli) => peli.title === nombre);
    agregarCarrito(peliculaComprada[0]);
    const stock = stockActual(peliculaComprada[0].stock, peliculaComprada[0].title);
    $(this).text(`Comprar (${stock})`);
});

$('#buscador-general').on('keyup', function() {
    let html = '';
    const busqueda = $(this).val();
    if (!busqueda) return $('#busqueda-general').hide();
    const resultados = listaPeliculas.filter((pelicula) => {
        return pelicula.title.toLowerCase().includes(busqueda.toLowerCase());
    });
    resultados.map(peli => {
        html += ResultadoPeli(peli);
    });
    if (resultados.length) {
        $('#busqueda-general').html(html);
    } else {
        $('#busqueda-general').html('<div><p>Ninguna pelicula encontrada.</p></div>');
    }
    $('#busqueda-general').show();
});

$('#toast').on('click', '.btn-close', function() {
    hideToast();
});

$('.carrito').on('click', '.eliminar' , function() {
    const id = $(this).data('id');
    const nombre = $(this).data('nombre');
    const peliculaComprada = listaPeliculas.filter((peli) => peli.title === nombre);
    vaciarCarrito(id);
    const stock = stockActual(peliculaComprada[0].stock, peliculaComprada[0].title);
    $(`[data-pelicula="${peliculaComprada[0].title}"]`).text(`Comprar (${stock})`);
});

$('.modal').on('click', '.vaciar' , function() {
    vaciarCarrito();
    cargarProductos(document.getElementById('peliculas'));
});
$('#mensaje').hide();
$('#suscripcion').submit(function(evento){
    evento.preventDefault();
    const email = $('.input-email').val();
    suscriptores.push(email);
    localStorage.setItem('suscriptores', JSON.stringify(suscriptores));
    $(this).removeClass('d-flex');
    $(this).fadeOut();
    $('#mensaje').show();
});

$('.btn-gen').on('click', function() {
    const genero = $(this).data('genero');
    if (genero === 'all') {
        $('.card').fadeIn();
    } else {
        $('.card').fadeOut();
        $('.'+genero).fadeIn();
    }
});

$('#generos').on('change', function() {
    const genero = $(this).val();
    if (genero === 'all') {
        $('.card').fadeIn();
    } else {
        $('.card').fadeOut();
        $('.'+genero).fadeIn();
    }
});

$(window).scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll > 100) {
        $('.btn-icon-cart').addClass('position-fixed bottom-0 end-0 m-3 c-red');
    } else {
        $('.btn-icon-cart').removeClass('position-fixed bottom-0 end-0 m-3 c-red');
    }

});
