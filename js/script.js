let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);  
    actualizarCarrito();    
}

function eliminarProducto(index) {
    carrito.splice(index, 1);  
    actualizarCarrito();       
}

function actualizarCarrito() {
    const numeroArticulos = document.getElementById('numero-articulos');
    numeroArticulos.textContent = carrito.length;

    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; 

    let total = 0; 
    carrito.forEach((producto, index) => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio}`;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn-eliminar');
        btnEliminar.addEventListener('click', function() {
            eliminarProducto(index); 
        });

        item.appendChild(btnEliminar); 

        listaCarrito.appendChild(item);
        total += producto.precio; 
    });

    const totalCarrito = document.getElementById('total-carrito');
    totalCarrito.textContent = `Total: $${total}`;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = '<li>Tu carrito está vacío.</li>';
        totalCarrito.textContent = 'Total: $0';
    }
}

document.getElementById('btn-ir-a-pagar').addEventListener('click', function() {
    if (carrito.length > 0) {
        localStorage.setItem('carrito', JSON.stringify(carrito));

        window.location.href = 'pago.html'; 
    } else {
        alert('Tu carrito está vacío. No puedes realizar un pago.');
    }
});

function realizarBusqueda(event) {
    event.preventDefault(); 
    const busqueda = document.getElementById("campo_busqueda").value;
    alert(`Buscando: ${busqueda}`);
}

document.getElementById("menu_icon").addEventListener("click", function() {
    const menuNav = document.getElementById("menu_nav");
    menuNav.classList.toggle("active"); 
});

document.addEventListener('DOMContentLoaded', () => {
    const producto1 = { nombre: "Producto 1", precio: 100 };
    const producto2 = { nombre: "Producto 2", precio: 50 };

    agregarAlCarrito(producto1);
    agregarAlCarrito(producto2);
});

document.addEventListener('DOMContentLoaded', () => {
    if (!carrito || carrito.length === 0) {
        const mensajeAlerta = document.getElementById('mensaje-alerta');
        mensajeAlerta.style.display = 'block'; 
        setTimeout(() => {
            mensajeAlerta.style.display = 'none'; 
        }, 3000);
    }
});