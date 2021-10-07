import { hideToast } from './toast.js'
import './noticias.js'
import { agregarCarrito, stockActual, vaciarCarrito } from './carrito.js';
import { cargarProductos, listaPeliculas } from './app.js'

let suscriptores = [];
$(`#peliculas`).on('click', '.btn-comprar',function() {
    const nombre = $(this).data('pelicula');
    const peliculaComprada = listaPeliculas.filter((peli) => peli.title === nombre);
    agregarCarrito(peliculaComprada[0]);
    const stock = stockActual(peliculaComprada[0].stock, peliculaComprada[0].title);
    $(this).text(`Comprar (${stock})`);
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

$('.slider-1').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
});

$('.slider-2').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    }
});

$(window).scroll(function () {
    const scroll = $(window).scrollTop();
    // Do something
    console.log(scroll);
    if (scroll > 100) {
        $('.btn-icon-cart').addClass('position-fixed bottom-0 end-0 m-3 c-red');
        $('.carrito-contador').addClass('position-fixed end-0 bottom-0');
    } else {
        $('.btn-icon-cart').removeClass('position-fixed bottom-0 end-0 m-3 c-red');
        $('.carrito-contador').removeClass('position-fixed');
    }

});
