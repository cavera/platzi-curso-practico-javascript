const cupones = [
	{ name: "CODIGO1", discount: 15 },
	{ name: "CODIGO2", discount: 25 },
	{ name: "CODIGO3", discount: 30 },
];

function calcularPrecioConDescuento(precio, descuento) {
	const porcentajePrecioConDescuento = 100 - descuento;
	const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

	return precioConDescuento;
}

function onClickButtonPriceDiscount() {
	let finalDiscount = 0;
	const inputPrice = document.getElementById("InputPrice");
	const priceValue = inputPrice.value;

	const inputDiscount = document.getElementById("InputDiscount");
	const discountValue = inputDiscount.value;

	const inputCoupon = document.getElementById("InputCoupon");
	const couponValue = inputCoupon.value;

	const isCouponValid = cupones.find(function (coupon) {
		return coupon.name == couponValue;
	});

	if (isCouponValid) {
		finalDiscount = isCouponValid.discount;
	} else {
		finalDiscount = discountValue;
	}

	const precioConDescuento = calcularPrecioConDescuento(priceValue, finalDiscount);

	const resultP = document.getElementById("ResultP");
	resultP.innerText = `El precio a pagar con descuento es $${precioConDescuento}`;
}
