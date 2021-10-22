const templatebrand = document.getElementById("templatebrand").content;
const templatesystem = document.getElementById("templatesystem").content;
const templatedisplay = document.getElementById("templatedisplay").content;
const templatecellphone = document.getElementById("templatecellphone").content;
const brand = document.getElementById("brand");
const system = document.getElementById("system");
const display = document.getElementById("display");
const cellphone = document.getElementById("cellphone");
const fragment = document.createDocumentFragment();


document.addEventListener("DOMContentLoaded", (e) => {
  fetchdata();
  pintarsystem(systemr);
  pintardisplay(displayr);
  pintarbrand(brandr);

});

const fetchdata = async () => {
    const res = await fetch("api.json");
    const data =  await res.json();
    console.log(data);
    pintarcard(data);
  
};

const pintarcard = (data) => {
  data.forEach((item) => {
    templatecellphone.querySelector("h5").textContent = item.modelo;
    templatecellphone.querySelector("img").setAttribute("src",item.image);
    templatecellphone.querySelector("p").textContent= item.description;
    templatecellphone.querySelector("bottom").dataset.id= item.id;
    const clone = templatecellphone.cloneNode(true);
    fragment.appendChild(clone);
  });
  cellphone.appendChild(fragment);
};


const obtenerid= (e) => {
 
  if(e.target.classList.contains("btn-dark")){

  }
  e.stopPropagation();
}



const brandr = ["Samsumg", "Huawei", "Nokia", "Iphone", "Xiomi"];
const systemr = ["Android", "Windows", "Ios"];
const displayr = ["6", "5.5", "5"];

const pintarsystem = (systemr) => {
  systemr.forEach((item) => {
    templatesystem.querySelector("label").textContent = item;
    templatesystem.querySelector("input").textContent=item;
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


const pintarbrand = (brandr) => {
  brandr.forEach((item) => {
    templatebrand.querySelector("label").textContent = item;

    const clone = templatebrand.cloneNode(true);
    fragment.appendChild(clone);
  });
  brand.appendChild(fragment);
};
