//backend starts here 👇

//constructor for pizza order
function Pizza(name, cheese, pepperoni, artichoke, anchovy, pineapple, size) {
    this.name = name;
    this.cheese = cheese;
    this.pepperoni = pepperoni;
    this.artichoke = artichoke;
    this.anchovy = anchovy;
    this.pineapple = pineapple;
    this.size = size;
}

//push order using pizza constructor to global array
function pushOrder(name, cheese, pepperoni, artichoke, anchovy, pineapple, size, arr) {
    if (testForName(name, arr) == true) { //call tesForName() to find possible duplicate
    } else {
        arr.push(new Pizza(name, cheese, pepperoni, artichoke, anchovy, pineapple, size)); //push Pizza object to array
        return arr;
    }
}

//use a forEach loop to search through every object's key: 'name' and return the index where it is located.
function findOrderIndex(name, arr) {
    let position = null; //where the index integer will be stored.
    arr.forEach((element, index) => {
        if (element.name == name) { //if the objects key: 'name' matches 
            position = index; //
        }
    })
    return position;
}

//use a forEach loop to search through every object's key: 'name' and will return a boolean
function testForName(name, arr) {
    let nameExist = false;
    arr.forEach((element) => {
        if (element.name == name) {
            nameExist = true;
        }
    });
    return nameExist;
}

//forEach to search for name and return object to be served to method calcCost()
function findOrderObject(name, arr) {
    let myObject = null;
    arr.forEach((element) => {
        if (element.name == name) {
            myObject = element;
        }
    })
    return myObject;
}

//serve object in element of array to Pizza method calcCost()
function checkPlease(name, arr) {
    return findOrderObject(name, arr).calcCost();
}

//method for calculating Pizza objects
Pizza.prototype.calcCost = function() {
    this.total = 0;

    if (this.cheese == true) { //if boolean is true or if pizza has topping add $0.50 to total
        this.total += .50;
    }
    if (this.pepperoni == true) {
        this.total += .50;
    }
    if (this.artichoke == true) {
        this.total += .50;
    }
    if (this.anchovy == true) {
        this.total += .50;
    }
    if (this.pineapple == true) {
        this.total += .50;
    }

    switch (this.size) { //if size matches either add appropriate integer to total
        case 'small':
            this.total += 3;
            break;
        case 'medium':
            this.total += 4;
            break;
        case 'large':
            this.total += 5;
            break;
        default:
            alert("srry no 🍕 4 u :(");
            location.reload();
    }
    return this.total;
}

// backend ends here 👆

// frontend starts here 👇
$(document).ready(function() {
    //create empty array to store objects
    let orders = []
    $("form#form").submit(function(event) {
        event.preventDefault();
        let name = $("input#name").val();
        let cheese = $("input#cheese").prop('checked');
        let pepperoni = $("input#pepperoni").prop('checked');
        let artichoke = $("input#artichoke").prop('checked');
        let anchovy = $("input#anchovy").prop('checked');
        let pineapple = $("input#pineapple").prop('checked');
        let size = $("input[name=size]:checked").val();
        pushOrder(name, cheese, pepperoni, artichoke, anchovy, pineapple, size, orders);
        let total = checkPlease(name, orders);
        //$("div#result").html("<p>" + JSON.stringify(orders).replace(/[^a-zA-Z:]/g, " ") + " total price: " + " $" + total);//print result on the screen
        $("h1.orders").show();
        $("div#result").html(printOrders(orders));


        //front end function to create HTML section per order
        function printOrders(arr) {
            let result = "";
            arr.forEach(element => {
                result += ("<em><h3>" + element.name + "'s " + " $" + element.total + " " + element.size + " 🍕 " + "</h3>" + "cheese 🧀 " + element.cheese + "<br>" + "</h3>" + "pepperoni  🔴 " + element.pepperoni + "<br>" + "</h3>" + "artichoke 🌳 " + element.artichoke + "<br>" + "</h3>" + "anchovy 🐟 " + element.anchovy + "<br>" + "</h3>" + "pineapple 🍍 " + element.pineapple + "<br><br>" + "</em>");
            });
            return result;
        }
    });
});
//frontend ends here 👆