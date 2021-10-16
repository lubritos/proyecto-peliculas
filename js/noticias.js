let html3 = '';
const contenedorNoticias = document.getElementById('noticias');

const cardNoticias = (noticias) => {
    return `<div class="card m-3" style="width: 18rem;">
                <img src="${noticias.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${noticias.titulo}</h5>
                    <span class="card-text">${noticias.fecha}</span>
                    <p>${noticias.descripcion}</p>
                </div>
            </div>`;
}

$.get('/js/json/noticias.json' , function(data) {
    for (let i = 0; i < data.length; i++) {
        html3 +=  cardNoticias(data[i]);
    }
    if(contenedorNoticias)
    contenedorNoticias.innerHTML = html3;
});