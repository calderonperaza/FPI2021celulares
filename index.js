document.addEventListener('DOMContentLoaded', () => {
    
    let cardsTelefonos = document.getElementById('cardsTelefonos');

    let partes = '';

    for(let i = 0; i < 8; i++){
    partes+=`
        <div class="col-3 p-2 d-none d-lg-block d-md-block">
            <div class="card" >
                <img src="./imagenes/iphone12pro.jpg" class="card-img-top" alt="..." style="height: 200px;">
                <div class="card-body text-center">
                    <h5 class="card-title">$1102.00</h5>
                    <p class="card-text">
                    Iphone 12 Pro Max
                    Super Retina XDR
                    OLED de 6.7",
                    128GB,
                    12 Megapixeles
                    </p>
                </div>
            </div>
        </div>
        <div class="col-6 p-2 d-md-none">
            <div class="card" >
                <img src="./imagenes/iphone12pro.jpg" class="card-img-top" alt="..." style="height: 200px;">
                <div class="card-body text-center">
                    <h5 class="card-title">$1102.00</h5>
                    <p class="card-text">
                    Iphone 12 Pro Max
                    Super Retina XDR
                    OLED de 6.7",
                    128GB,
                    12 Megapixeles
                    </p>
                </div>
            </div>
        </div>
            `
}
cardsTelefonos.innerHTML = partes;
});