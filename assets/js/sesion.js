// Usuario actualmente logueado (null = no hay sesión)
var usuarioActual = null;

// Control de estado del modal login
var loginAbierto  = false;


// ─────────────────────────────────────────────
// 🔄 REFRESCO GLOBAL DE UI
// ─────────────────────────────────────────────
function actualizarUICompleta() {
  renderizarProductos(productosFiltrados || productos);
  actualizarBadge();
}


// ─────────────────────────────────────────────
// 🔐 LOGIN
// ─────────────────────────────────────────────
function abrirLogin() {
  loginAbierto = true;
  uiAbrirLogin();
}

function cerrarLogin() {
  loginAbierto = false;
  uiCerrarLogin();
}

function intentarLogin() {

  var email    = document.getElementById("campo-email").value.trim();
  var password = document.getElementById("campo-password").value.trim();

  if (!email || !password) {
    uiMostrarErrorLogin("Por favor completa todos los campos.");
    return;
  }

  var usuario = autenticarUsuario(email, password);

  if (usuario) {

    // ✅ Guardar sesión
    usuarioActual = usuario;

    uiOcultarErrorLogin();
    uiMostrarSesionActiva(usuario);
    cerrarLogin();

    // 🔥 CLAVE: re-renderizar TODO
    actualizarUICompleta();

    mostrarToast("Bienvenido, " + usuario.nombre);

  } else {
    uiMostrarErrorLogin("Correo o contrasena incorrectos.");
    uiAnimarLoginShake();
  }
}


// ─────────────────────────────────────────────
// 🚪 LOGOUT
// ─────────────────────────────────────────────
function cerrarSesion() {

  usuarioActual = null;
  carrito = [];

  uiCerrarSesion();

  // 🔥 CLAVE: re-renderizar TODO
  actualizarUICompleta();

  mostrarToast("Sesion cerrada");
}