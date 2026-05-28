// BASE DE DATOS SIMULADA

const usuarios = [
  { id: 1, nombre: "Ana Garcia",   email: "ana@email.com",    password: "ana123",    avatar: "AG" },
  { id: 2, nombre: "Carlos Lopez", email: "carlos@email.com", password: "carlos456", avatar: "CL" },
  { id: 3, nombre: "Admin",        email: "admin@tienda.com", password: "admin000",  avatar: "AD" }
];

const productos = [
    // ROPA
    {
        id: 1,
        nombre: "Vestido blanco",
        categoria: "ropa",
        precio: 329990,
        precioOriginal: 420990,
        descripcion: "Vestido blanco versátil juvenil.",
        imagen: "./assets/imagenes/vestido1.jpeg",
        tallas: ["XS", "S", "M", "L", "XL"],
        colores: ["#ffffff"],
        enOferta: true
    },
    {
        id: 2,
        nombre: "Chaquetas y cazadoras",
        categoria: "ropa",
        precio: 229000,
        precioOriginal: null,
        descripcion: "Chaqueta denim azul claro con con detalle curvo en la parte inferior para mujer.",
        imagen: "./assets/imagenes/chaqueta denim azul.png",
        tallas: ["XS", "S", "M", "L"],
        colores: ["#c0c8f2"],
        enOferta: false
    },
    {
        id: 3,
        nombre: "Buzos",
        categoria: "ropa",
        precio: 104930,
        precioOriginal: 149900,
        descripcion: "Buzo oversize con bordados florales en algodón café para mujer.",
        imagen: "./assets/imagenes/buzo oversize.png",
        tallas: ["XS", "S", "M", "L", "XL"],
        colores: ["#dfb184"],
        enOferta: false
    },
    {
        id: 4,
        nombre: "Jean denim azul",
        categoria: "ropa",
        precio: 160930,
        precioOriginal: 229900,
        descripcion: "Jean recto con dobladillo ancho en denim azul oscuro para mujer.",
        imagen: "./assets/imagenes/jeans.png",
        tallas: ["S", "M", "L"],
        colores: ["#364b54"],
        enOferta: true
    },
        {
        id: 4,
        nombre: "Camisa blanca",
        categoria: "ropa",
        precio: 160930,
        precioOriginal: 229900,
        descripcion: "Camisa 100% lino manga larga blanca para mujer.",
        imagen: "./assets/imagenes/camisa.png",
        tallas: ["S", "M", "L"],
        colores: ["#ffffff"],
        enOferta: true
    },
        {
        id: 5,
        nombre: "Camisa boxy",
        categoria: "ropa",
        precio: 202930,
        precioOriginal: 289900,
        descripcion: "Camisa boxy crop con apliques florales en algodón azul para mujer.",
        imagen: "./assets/imagenes/camisa boxy.png",
        tallas: ["S", "M", "L"],
        enOferta: true
    },
    {
        id: 6,
        nombre: "Jean denim café",
        categoria: "ropa",
        precio: 289990,
        precioOriginal: 329900,
        descripcion: "Jean café, perfecto para el día a día.",
        imagen: "./assets/imagenes/denim cafe.jpeg",
        tallas: ["6", "8", "10", "12", "14"],
        colores: ["#564434"],
        enOferta: true
    },

    // ZAPATOS
    {
        id: 7,
        nombre: "Zapatos",
        categoria: "zapatos",
        precio: 349930,
        precioOriginal: 499900,
        descripcion: "Suecos punta fina planos con flecos y tachas en cuero camel para mujer, talla de 35 a 40",
        imagen: "./assets/imagenes/suecos.png",
        tallas: ["35", "36", "37", "38", "39", "40"],
        colores: ["#D4A574"],
        enOferta: false
    },
    {
        id: 8,
        nombre: "Zapatos",
        categoria: "zapatos",
        precio: 107960,
        precioOriginal: 269900,
        descripcion: "Sandalias azules para mujer",
        imagen: "./assets/imagenes/sandalias.png",
        tallas: ["35", "36", "37", "38", "39", "40"],
        colores: ["#0000FF"],
        enOferta: false
    },
    {
        id: 9,
        nombre: "Sandalias cafés",
        categoria: "zapatos",
        precio: 79990,
        precioOriginal: 99990,
        descripcion: "Sandalias con plataforma comoda y tiras elegantes. Perfectas para el verano.",
        imagen: "./assets/imagenes/sandaliasp.png",
        tallas: ["35", "36", "37", "38", "39"],
        colores: ["#D4A574"],
        enOferta: true
    },
    {
        id: 10,
        nombre: "Zapatos negros",
        categoria: "zapatos",
        precio: 154630,
        precioOriginal: 220900,
        descripcion: "Zapatos versátiles color negro para mujer.",
        imagen: "./assets/imagenes/znegros.png",
        tallas: ["35", "36", "37", "38", "39"],
        colores: ["#000000"],
        enOferta: true
    },
    {
        id: 11,
        nombre: "Botas Chelsea",
        categoria: "zapatos",
        precio: 439900,
        precioOriginal: null,
        descripcion: "Botas chelsea de cuero sintetico con elastico lateral. Clasicas y versatiles.",
        imagen: "./assets/imagenes/botass.jpeg",
        tallas: ["35", "36", "37", "38", "39", "40"],
        colores: ["#2C2420"],
        enOferta: false
    },

    // ACCESORIOS
    {
        id: 12,
        nombre: "Pareo",
        categoria: "accesorios",
        precio: 49.99,
        precioOriginal: null,
        descripcion: "Pareo con estampado de peces terracota para mujer",
        imagen: "./assets/imagenes/pareo.png",
        tallas: ["unico"],
        enOferta: false
    },
    {
        id: 13,
        nombre: "Vela",
        categoria: "accesorios",
        precio: 49990,
        precioOriginal: null,
        descripcion: "Vela con olor.",
        imagen: "./assets/imagenes/vela.png",
        tallas: ["Unico"],
        colores: ["#2C2420", "#D4A574", "#E8D5C4"],
        enOferta: false
    },
    {
        id: 14,
        nombre: "Fragancia",
        categoria: "accesorios",
        precio: 139900,
        precioOriginal: null,
        descripcion: "Fragancia Amazonas.",
        imagen: "./assets/imagenes/fragancia.png",
        tallas: ["Unico"],
        colores: ["#D4A574"],
        enOferta: false
    },
    {
        id: 15,
        nombre: "Charm",
        categoria: "accesorios",
        precio: 21546,
        precioOriginal: 39900,
        descripcion: "Charm color café sintético.",
        imagen: "./assets/imagenes/charm.png",
        tallas: ["Unico"],
        enOferta: true
    },
    {
        id: 16,
        nombre: "Llavero para mujer",
        categoria: "accesorios",
        precio: 59900,
        precioOriginal: null,
        descripcion: "Llavero con flecos para mujer.",
        imagen: "./assets/imagenes/llavero.png",
        tallas: ["unico"],
        enOferta: false
    },
    {
        id: 17,
        nombre: "Pañoleta flores",
        categoria: "accesorios",
        precio: 69900,
        precioOriginal: null,
        descripcion: "Pañoleta vino con estampado de flores.",
        imagen: "./assets/imagenes/pañoleta.png",
        tallas: ["Unico"],
        enOferta: false
    },
    {
        id: 18,
        nombre: "Bolso de flecos",
        categoria: "accesorios",
        precio: 499900,
        precioOriginal: null,
        descripcion: "Bolso bandolera con flecos largos beige para mujer.",
        imagen: "./assets/imagenes/bolso.png",
        tallas: ["Unico"],
        colores: ["#E8D5C4"],
        enOferta: false
    }
];

function autenticarUsuario(email, password) {// Función que valida si un usuario existe con el email y contraseña ingresados
  return usuarios.find(function(u) {  // Busca dentro del arreglo "usuarios"
    return u.email === email && u.password === password;// Compara si el email y la contraseña coinciden
  }) || null; // Si encuentra un usuario lo retorna, si no, retorna null
}

function obtenerProductos() {// Función que retorna todos los productos disponibles
  return productos;// Devuelve el arreglo completo de productos
}

function filtrarPorCategoria(categoria) {// Función que filtra productos según la categoría seleccionada
  if (categoria === "todos") return productos;// Si la categoría es "todos", no filtra nada
  return productos.filter(function(p) {// Si no, filtra los productos cuya categoría coincida
    return p.categoria === categoria;// Retorna solo los productos que pertenecen a esa categoría
  });
}

function obtenerProductoPorId(id) {// Función que busca un producto específico por su ID  
  return productos.find(function(p) {// Busca dentro del arreglo "productos"    
    return p.id === id;// Compara si el id del producto coincide
  }) || null; // Si lo encuentra lo retorna, si no devuelve null  
}
