function getValueType(paellaType)
{
	this.paellaType = paellaType;
}

function getValuePrice(valor)
{
	this.valor = valor;
}

function getValueCoin()
{
	var precio = document.getElementById("precio");
	var valor = precio.value;
	console.log(valor);
	return valor;
}
/*
function buildPaella() 
{
	//var factory = executeFactory(this.paellaType.value);
	//var paellaProduct = generatePaella(factory.type);
	var carrito = [];
	var buildCar = new buildShoppingCar();
	carrito.push(buildCar);
	console.log(carrito);
	return carrito;
}
*/