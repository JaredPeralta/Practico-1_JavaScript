const coupons = [
    "Primera compra",
    "Verano",
    "Secreto"
];

function calcularPrecioConDescuento(precio, coupons){
    const porcentajePreciosDescuento = 100 - coupons;
    const precioConDescuento = (precio*porcentajePreciosDescuento)/100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("ImputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("ImputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue){
        case coupons[0]:
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 30;
        break;
        case coupons[2]:
            descuento = 50;
        break;
        default:
            descuento = 0;
            alert("Cupon Invalido");
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es : $" + precioConDescuento;
}