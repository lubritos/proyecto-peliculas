import { hideToast } from './toast.js'
import './noticias.js'
import { agregarCarrito, stockActual, vaciarCarrito } from './carrito.js';
import { cargarProductos, listaPeliculas } from './app.js'

let suscriptores = [];
$(`#peliculas`).on('click', '.btn-comprar',function() {
    const nombre = $(this).data('pelicula');
    const peliculaComprada = listaPeliculas.filter((peli) => peli.nombre === nombre);
    agregarCarrito(peliculaComprada[0]);
    const stock = stockActual(peliculaComprada[0].stock, peliculaComprada[0].nombre);
    $(this).text(`Comprar (${stock})`);
});

$('#toast').on('click', '.btn-close', function() {
    hideToast();
});

$('.carrito').on('click', '.eliminar' , function() {
    const id = $(this).data('id');
    const nombre = $(this).data('nombre');
    const peliculaComprada = listaPeliculas.filter((peli) => peli.nombre === nombre);
    vaciarCarrito(id);
    const stock = stockActual(peliculaComprada[0].stock, peliculaComprada[0].nombre);
    $(`[data-pelicula="${peliculaComprada[0].nombre}"]`).text(`Comprar (${stock})`);
});

$('.carrito').on('click', '.vaciar' , function() {
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

$('#horror').on('click', function() {
    $('.card').fadeOut();
    $('.horror').fadeIn();
});
$('#action').on('click', function() {
    $('.card').fadeOut();
    $('.action').fadeIn();
});
$('#adventure').on('click', function() {
    $('.card').fadeOut();
    $('.adventure').fadeIn();
});
$('#fantasy').on('click', function() {
    $('.card').fadeOut();
    $('.fantasy').fadeIn();
});
$('#mistery').on('click', function() {
    $('.card').fadeOut();
    $('.mistery').fadeIn();
});
$('#all').on('click', function() {
    $('.card').fadeIn();
});