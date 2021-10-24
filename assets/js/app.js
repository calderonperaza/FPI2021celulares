const templatebrand = document.getElementById("templatebrand").content;

const templatebrand2 = document.getElementById("templatebrand2").content;
const templatesystem = document.getElementById("templatesystem").content;
const templatesystem2 = document.getElementById("templatesystem2").content;
const templatedisplay = document.getElementById("templatedisplay").content;
const templatecellphone = document.getElementById("templatecellphone").content;
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
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const items = document.getElementById('items')
const footer = document.getElementById('footer')

document.addEventListener("DOMContentLoaded", (e) => {
  fetchdata();
  pintarbrand(brandr);
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
items.addEventListener('click', e => { btnAumentarDisminuir(e) })

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
    templatebrand2.querySelector("option").textContent = item;
    const clone = templatebrand.cloneNode(true);
    fragment.appendChild(clone);
  });
  brand.appendChild(fragment);
  
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

const pintarsystem = (systemr) => {
  systemr.forEach((item) => {
    templatesystem.querySelector("label").textContent = item;
    templatesystem.querySelector("input").textContent = item;
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

function toastAnuncio(id) {
  var toastElList = [].slice.call(document.querySelectorAll(id));
  var toastList = toastElList.map(function (toastEl) {
   
    return new bootstrap.Toast(toastEl);
  });
  toastList.forEach((toast) => toast.show()); 
}


