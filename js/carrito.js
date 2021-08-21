const carrito = [];

const agregarCarrito = (pelicula) => {
    carrito.push(pelicula);
    actualizarCarrito();
    console.log('Pelicula agregada al carrito', pelicula);
};


function actualizarCarrito() {
    const divCarrito = document.getElementsByClassName('carrito')[0];
    let html2 = '';
    for (let i = 0; i < carrito.length; i++) {
        html2 +=  `<div><h5>${carrito[i].nombre}</h5></div>`;
    }
    divCarrito.innerHTML = html2;
}