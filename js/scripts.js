// $(document).ready(function() {
// console.log("Jquery loaded properly");
// });

//create empty global array to store objects
let orders = []

//constructor for pizza order
function Pizza(name, cheese, pepperoni, artichoke, anchovy, pineapple) {
    this.name = name;
    this.cheese = cheese;
    this.pepperoni = pepperoni;
    this.artichoke = artichoke;
    this.anchovy = anchovy;
    this.pineapple = pineapple;
}

//push order using pizza constructor to global array
function pushOrder(name, cheese, pepperoni, artichoke, anchovy, pineapple) {
    if(testForName(name) == true){
        console.log(name + " is already a name! Please choose a different name.")
    } else {
    orders.push(new Pizza(name, cheese, pepperoni, artichoke, anchovy, pineapple));
    return orders;
    }
}

//this will use a forEach loop to search through every object's key: 'name' and return the index where it is located.
function findOrderIndex(name) {
    let position = null;
    orders.forEach((element, index) => {
        // console.log(element)
        if (element.name == name) {
            // console.log("MATCH!");//debug
            position = index;
        }
    })
    return position;
}

//this will use a forEach loop to search through every object's key: 'name' and will return a boolean
function testForName(name){
    let nameExist = false;
    orders.forEach((element) => {
        console.log(element)
        if (element.name == name) {
            nameExist = true;
        }
    });
    return nameExist;
}