

var usuarioActual  = null;
var loginAbierto   = false;
var productosFiltrados = null;


function actualizarUICompleta() {
    renderizarProductos(productosFiltrados || productos);
    actualizarBadge();
}


function abrirLogin() {
    loginAbierto = true;
    uiAbrirLogin();
}

function cerrarLogin() {
    loginAbierto = false;
    uiCerrarLogin();
}

function intentarLogin() {
    var email    = document.getElementById('campo-email').value.trim();
    var password = document.getElementById('campo-password').value.trim();

    if (!email || !password) {
        uiMostrarErrorLogin('Por favor completa todos los campos.');
        return;
    }

   
    autenticarUsuario(email, password, function(data) {
        if (data.ok) {
            usuarioActual = data.usuario;

            uiOcultarErrorLogin();
            uiMostrarSesionActiva(usuarioActual);
            cerrarLogin();
            actualizarUICompleta();
            mostrarToast('Bienvenido, ' + usuarioActual.nombre);

        } else {
            uiMostrarErrorLogin(data.error || 'Correo o contraseña incorrectos.');
            uiAnimarLoginShake();
        }
    });
}


function cerrarSesion() {
    window.location.href = 'index.php?action=logout';
}