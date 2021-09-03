const showToast = (mensaje) => {
    const html = `<div class="position-fixed top-0 end-0 p-3" style="z-index: 11; width: 100%;">
            <div class="toast align-items-center text-white bg-green position-absolute top-0 end-0 border-0" role="alert" aria-live="assertive" aria-atomic="true" style="display:block;">
                <div class="d-flex">
                    <div class="toast-body">
                        ${mensaje}
                    </div>
                    <button onClick="hideToast()" type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>`;
    document.getElementById('toast').innerHTML = html;
}

function hideToast() {
    document.getElementById('toast').innerHTML = '';
}