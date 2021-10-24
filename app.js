//tabla carrito
const items = document.getElementById('items')
const footer = document.getElementById('footer')
//templates
const templatebrand = document.getElementById("templatebrand").content;
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const templatebrand2 = document.getElementById("templatebrand2").content;
const templatesystem = document.getElementById("templatesystem").content;
const templatesystem2 = document.getElementById("templatesystem2").content;
const templatedisplay = document.getElementById("templatedisplay").content;
const templatecellphone = document.getElementById("templatecellphone").content;
//filtros marca pantalla sistemas
const brand = document.getElementById("brand2");
const brand2 = document.getElementById("brand");
const system = document.getElementById("system");
const system2 = document.getElementById("os");
const display = document.getElementById("display");
const cellphone = document.getElementById("cellphone");

const fragment = document.createDocumentFragment();
const brandr = ["Samsumg", "Huawei", "Nokia", "Iphone", "Xiomi"];
const systemr = ["Android", "Windows", "Ios"];
const displayr = ["6", "5.5", "5"];
let carrito = {}



items.addEventListener('click', e => { btnAumentarDisminuir(e) })
document.addEventListener("DOMContentLoaded", (e) => {
  fetchdata();
  pintarbrand(brandr)
  pintarbrand2(brandr);
  pintardisplay(displayr);
  pintarsystem(systemr);
  pintarsystem2(systemr)

  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    pintarCarrito()
}


});
cellphone.addEventListener('click', e => { addCarrito(e) });
const fetchdata = async () => {
  const res = await fetch("api.json");
  const data = await res.json();
  pintarcard(data);
};


const pintarcard = (data) => {
  data.forEach((item) => {
    templatecellphone.querySelector("h6").textContent = item.modelo;
    templatecellphone.querySelector("img").setAttribute("src", item.image);
    templatecellphone.querySelector("p").textContent = item.description;
    templatecellphone.querySelector("button").dataset.id = item.id;
    templatecellphone.querySelector("span").textContent = item.precio;
    const clone = templatecellphone.cloneNode(true);
    fragment.appendChild(clone);
  });
  cellphone.appendChild(fragment);
};


const pintarbrand = (brandr) => {
  brandr.forEach((item) => {
    templatebrand.querySelector("label").textContent = item;
  
    const clone = templatebrand.cloneNode(true);
    fragment.appendChild(clone);
  });
  brand.appendChild(fragment);
  
};




const pintarsystem = (systemr) => {
  systemr.forEach((item) => {
    templatesystem.querySelector("label").textContent = item;

    const clone = templatesystem.cloneNode(true);
    fragment.appendChild(clone);
  });
  system.appendChild(fragment);
};

const pintardisplay = (displayr) => {
  displayr.forEach((item) => {
    templatedisplay.querySelector("label").textContent = item;
    const clone = templatedisplay.cloneNode(true);
    fragment.appendChild(clone);
  });
  display.appendChild(fragment);
};

const pintarbrand2 = (brandr) => {
  brandr.forEach((item) => {
    templatebrand2.querySelector("option").textContent = item;
    const clone = templatebrand2.cloneNode(true);
    fragment.appendChild(clone);
  });
  brand2.appendChild(fragment);
  
};

const pintarsystem2 = (systemr) => {
  systemr.forEach((item) => {
    templatesystem2.querySelector("option").textContent = item;
    const clone = templatesystem2.cloneNode(true);
    fragment.appendChild(clone);
  });
  system2.appendChild(fragment);
};
function toastAnuncio(id) {
  var toastElList = [].slice.call(document.querySelectorAll(id));
  var toastList = toastElList.map(function (toastEl) {
   
    return new bootstrap.Toast(toastEl);
  });
  toastList.forEach((toast) => toast.show()); 
}

// Agregar al carrito
const addCarrito = e => {
  console.log(e.target.classList.contains('btn'))
 if (e.target.classList.contains('btn')) {
     setCarrito(e.target.parentElement)
 }
 e.stopPropagation()
}

const setCarrito = item => {
 // console.log(item)
 const producto = {
     title: item.querySelector('h6').textContent,
     precio: item.querySelector('span').textContent,
     id: item.querySelector('button').dataset.id,
     cantidad: 1
 }
 // console.log(producto)
 if (carrito.hasOwnProperty(producto.id)) {
     producto.cantidad = carrito[producto.id].cantidad + 1
 }

 carrito[producto.id] = { ...producto }
 
 pintarCarrito()
}

const pintarCarrito = () => {
  items.innerHTML = ''

  Object.values(carrito).forEach(producto => {
      templateCarrito.querySelector('th').textContent = producto.id
      templateCarrito.querySelectorAll('td')[0].textContent = producto.title
      templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
      templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
      
      //botones
      templateCarrito.querySelector('.btn-info').dataset.id = producto.id
      templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

      const clone = templateCarrito.cloneNode(true)
      fragment.appendChild(clone)
  })
  items.appendChild(fragment)

  pintarFooter()

  localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () => {
 footer.innerHTML = ''
 
 if (Object.keys(carrito).length === 0) {
     footer.innerHTML = `
     <th scope="row" colspan="5">Carrito vacío</th>
     `
     return
 }
 
 // sumar cantidad y sumar totales
 const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
 const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
 // console.log(nPrecio)

 templateFooter.querySelectorAll('td')[0].textContent = nCantidad
 templateFooter.querySelector('span').textContent = nPrecio

 const clone = templateFooter.cloneNode(true)
 fragment.appendChild(clone)

 footer.appendChild(fragment)

 const boton = document.querySelector('#vaciar-carrito')
 boton.addEventListener('click', () => {
     carrito = {}
     pintarCarrito()
 })

}

const btnAumentarDisminuir = e => {
  console.log(e.target.classList.contains('btn-info'))
 if (e.target.classList.contains('btn-info')) {
     const producto = carrito[e.target.dataset.id]
     producto.cantidad++
     carrito[e.target.dataset.id] = { ...producto }
     pintarCarrito()
 }

 if (e.target.classList.contains('btn-danger')) {
     const producto = carrito[e.target.dataset.id]
     producto.cantidad--
     if (producto.cantidad === 0) {
         delete carrito[e.target.dataset.id]
     } else {
         carrito[e.target.dataset.id] = {...producto}
     }
     pintarCarrito()
 }
 e.stopPropagation()
}
