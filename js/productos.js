// PRODUCTOS


let carritoUsuario = JSON.parse(localStorage.getItem("carrito")) || []; //De esta forma le digo a JS que "carrito Usuario" es lo que está almacenado en el local storage, y si no tiene nada es que está vacío.

const productos = [

    { codigo: 1, nombre: `Gorra HxH`, precio: 900, imagen: `./Imagenes/Gorra.png` },
    { codigo: 2, nombre: `Remera HxH`, precio: 1000, imagen: `./Imagenes/Remera.png` },
    { codigo: 3, nombre: `Mouse Pad HxH`, precio: 200, imagen: `./Imagenes/Mouse Pad.png` },
    { codigo: 4, nombre: `Pantuflas HxH`, precio: 700, imagen: `./Imagenes/Pantuflas.png` },
    { codigo: 5, nombre: `Taza HxH`, precio: 350, imagen: `./Imagenes/Taza.png` },
    { codigo: 6, nombre: `Libreta HxH`, precio: 420, imagen: `./Imagenes/Libreta.png` }
];



