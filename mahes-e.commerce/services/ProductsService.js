const PRODUCTS = [
    {
        id: 100,
        name: 'washing machine',
        price: 350,
        image: require('../assets/products/was.jpg'),
        description: 'Best Washing Machine Models • LG 9.0 kg 5 Star Inverter Fully Automatic Front-Loading Washing Machine • LG 8.0 Kg 5 Star Inverter Touch Control Fully Automatic Front Load Washing Machine).'
    },
    {
        id: 101,
        name: 'bright light',
        price: 600,
        image: require('../assets/products/light.jpg'),
        description: 'If you want to lighten up only a small part of your room, choose from Orient Electrical’s range of fluorescent lamps. Cfl light uses 70% lesser energy than any other lights and you can avoid hefty.'
    },
    {
        id: 102,
        name: 'AC',
        price: 10000,
        image: require('../assets/products/AC.jpg'),
        description: 'Happy couple cool down using air conditioning at homeHappy couple freshen up using air conditioner at home.'
    },{
        id:103,
        name:'Fan',
        price:1250,
        image:require('../assets/products/fan.jpg'),
        description:'Bajaj Fans are a household name that stands for superior quality and style. Not just Ceiling Fans, Bajaj also makes a wide array of Table, Wall, Pedestal and Exhaust Fans. No matter what your nee'
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

