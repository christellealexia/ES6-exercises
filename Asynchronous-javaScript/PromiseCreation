const cart = ['shoes','pants','kurta'];
const promise = createOrder(cart); //orderId
promise.then(function(){
console.log(orderId);
    // proceedToPayment(orderId);
});
// Producer

function createOrder(cart) {
const pr = new Promise (function(resolve, reject){
    if(!validateCart(cart)){
        const err= new Error("Cart is not valid");
        reject(err);
    }
    const orderId = '12345';
    if(orderId){
        resolve(orderId);
    }
})
return pr;
}
function validateCart(cart){
    return true;
}