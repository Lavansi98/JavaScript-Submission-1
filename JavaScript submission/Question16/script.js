function inventoryValue(products){
    let total=0;
    products.forEach(product => {
        total =total + product.price*product.quantity;
    });
    return total;
}

const products =[
    {name:'laptop', price:1000, quantity:5},
    {name:'phone', price:500, quantity:10},
]
console.log(inventoryValue(products));