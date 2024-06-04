function sortProducts(products) {
    return products.sort((a, b) => a.price - b.price);
}
const products = [
    { name: "Product A", price: 10 },
    { name: "Product B", price: 5 },
    { name: "Product C", price: 15 }
];

const sortedProducts = sortProducts(products);

console.log(sortedProducts);
