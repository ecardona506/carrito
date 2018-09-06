function shoppingCar(typePaella)
{ 
    this.typePaella = typePaella;
    var arrayElements = [];
    this.compoProto = function() 
    {
        var objectComposite = 
        {
        add: function(product)
        {
        arrayElements.push(product);
        return arrayElements;
        },

        remove: function (product)
        {
        arrayElements.split(0, this.arrayElements.length);
        arrayElements.add(product);
        return arrayElements;
        }
    }
    return objectComposite;
    } 
}

var arr = []

function buildShoppingCar(){//tipo de producto, producto){
    var car = new shoppingCar(document.getElementById("paellaType").value); 
    var productType = getValueType(document.getElementById("paellaType").value);
    car.compoProto().add(productType);
    arr.push(car);
    console.log(arr);
}


function bb(){
   console.log(document.getElementById("paellaType").value);
}