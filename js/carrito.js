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
        html2 +=  `<div class="d-flex m-2 p-2 w-100 h-100 align-items-center justify-content-center">
                        <img src="${carrito[i].portada}" class="rounded mx-auto d-block" alt="" width="60">
                        <div class="d-flex flex-column m-3">
                            <h5>${carrito[i].nombre}</h5>
                            <span>${carrito[i].precio}</span>
                            <span>${carrito[i].genero}</span>
                        </div>
                    </div>
                    `;
    }
    divCarrito.innerHTML = html2;
}