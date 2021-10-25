var app = new Vue({
    el: "#app",
    data: {
      models: ["Samsung", "Huawei", "Nokia", "iPhone", "Xiaomi"],
      system: ["Android", "Windows", "Ios"],
      screen: ["6", "5.5", "5"],
      cellPhones: [
        "Galaxy S21",
        "Xiaomi Redmi 9",
        "Galaxy A32",
        "Galaxy Note 9",
        "iphone 13 Pro",
        "Google Pixel",
        "Galaxy Z Fold",
        "Motorola Moto",
        "OnePlus 9",
        "Asus ROG",
        "OPPO Find X3",
        "Xiaomi Mi 11",
        "ASUS ZenFone 8",
        "OPPO Find X3",
        "OnePlus Nord 2",
        "Sony Xperia",
        "Vivo X60 Pro",
        "Lenovo Legion",
        "Realme GT",
        "Motorola Edge",
      ],
      masVendidos: [
        "Samsung",
        "Apple",
        "Xiaomi",
        "vivo",
        "Opo",
        "Huawei",
        "Motorola",
        "Realme",
        "Tecno",
        "LG",
      ],
      namePhone: "",
      love: 0,
      favorites: [
        50, 500, 40, 200, 300, 500, 300, 700, 100, 50, 40, 200, 300, 500,
        300, 700, 100, 40, 200, 300,
      ],
      save: [
        300, 500, 300, 700, 100, 50, 40, 200, 300, 500, 200, 100, 150, 50,
        40, 200, 300, 500, 300, 700,
      ],
      activos: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      guardados: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    },
    methods: {
      //Metodo para obtener el nombre del celular en el modal
      obtenerNombre: function (pos) {
        this.namePhone = this.cellPhones[pos];
      },

      cambiarIconLove: function(pos) {
        let id_iconLove = 'love'+pos
        let id_number = 'favNumber'+pos

        if(this.activos[pos] === 0){
          document.getElementById(id_iconLove).className = "bi bi-heart-fill";
          document.getElementById(id_number).textContent = this.favorites[pos] + 1;
          this.favorites[pos] += 1;
          this.activos[pos] = 1;
          
          
        }
        else{
          document.getElementById(id_iconLove).className = "bi bi-heart";
          document.getElementById(id_number).textContent = this.favorites[pos] - 1;
          this.favorites[pos] += -1;
          this.activos[pos] = 0;
        }
      },

      cambiarIconSalvarPublicacion: function(pos){
        let id_iconSalvar = 'salvar'+pos
        let id_salvarNumber = 'salvarNumber'+pos

        if(this.guardados[pos] === 0){
          document.getElementById(id_iconSalvar).className = "bi bi-bookmark-check-fill";
          document.getElementById(id_salvarNumber).textContent = this.save[pos] + 1;
          this.save[pos] += 1;
          this.guardados[pos] = 1;
        }
        else{
          document.getElementById(id_iconSalvar).className = "bi bi-bookmark-plus";
          document.getElementById(id_salvarNumber).textContent = this.save[pos] - 1;
          this.save[pos] += -1;
          this.guardados[pos] = 0;
        }
      }
    },
  });