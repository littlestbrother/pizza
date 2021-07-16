// $(document).ready(function() {
// console.log("Jquery loaded properly");
// });

//create empty global array to store objects
let orders = []

function Pizza(name, cheese, pepperoni, artichoke, anchovy, pineapple){
    this.cheese = cheese;
    this. pepperoni = pepperoni;
    this.artichoke = artichoke;
    this.anchovy = anchovy;
    this.pineapple = pineapple;
}

function orderNewPizza(name, cheese, pepperoni, artichoke, anchovy, pineapple){
    orders.push(new Pizza(name, cheese, pepperoni, artichoke, anchovy, pineapple));
    console.log("order list: ")
    return orders;
}