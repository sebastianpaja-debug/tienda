
var productos = [];


function cargarProductos(categoria, callback) {
    categoria = categoria || 'todos';

    fetch('./api/productos.php?categoria=' + categoria)
        .then(function(res) { return res.json(); })
        .then(function(data) {
            if (data.ok) {
                productos = data.productos;
                if (typeof callback === 'function') callback(productos);
            } else {
                console.error('Error al cargar productos:', data.error);
            }
        })
        .catch(function(err) {
            console.error('Error de red al cargar productos:', err);
        });
}

function obtenerProductos() {
    return productos;
}


function filtrarPorCategoria(categoria, callback) {
    cargarProductos(categoria, callback);
}


function obtenerProductoPorId(id) {
    return productos.find(function(p) {
        return p.id === id;
    }) || null;
}



function autenticarUsuario(email, password, callback) {
    fetch('./api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
        if (typeof callback === 'function') callback(data);
    })
    .catch(function(err) {
        console.error('Error al autenticar:', err);
        if (typeof callback === 'function') callback({ ok: false, error: 'Error de red' });
    });
}