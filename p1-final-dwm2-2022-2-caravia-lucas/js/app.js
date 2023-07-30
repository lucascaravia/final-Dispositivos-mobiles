const contenidoDeLaTienda = document.getElementById("contenidoDeLaTienda");
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")



let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((producto) => {
    let contenido = document.createElement("div");
    contenido.className = "card";
    contenido.innerHTML = `
    <img src="${producto.img}">
    <h4>${producto.nombre}</h4>
    <p class="precio">${producto.precio} $</p>
    `
    contenidoDeLaTienda.append(contenido)

    let comprar = document.createElement("button");
    comprar.innerText = "buy"
    comprar.className = "comprar"

    contenido.append(comprar)

    comprar.addEventListener("click",()=>{

    const repetir = carrito.some((repetirProducto) => repetirProducto.id === producto.id);

    if (repetir){
        carrito.map((prod) =>{
            if(prod.id === producto.id){
                prod.cantidad++;
            }
        })
    }else {
        carrito.push({
            id: producto.id,
            img: producto.img,
            nombre: producto.nombre,
            categorias: producto.categorias,
            precio: producto.precio,
            cantidad: producto.cantidad,
        });
        
        saveLocal();
        contador(); 
    }
});
});


// local storage
const saveLocal = () =>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
}
