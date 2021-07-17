//backend starts here 👇

//create empty global array to store objects
let orders = []

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
function pushOrder(name, cheese, pepperoni, artichoke, anchovy, pineapple, size) {
    if (testForName(name) == true) {//call tesForName() to find possible duplicate
        console.log(name + " is already a name! Please choose a different name.")
    } else {
        orders.push(new Pizza(name, cheese, pepperoni, artichoke, anchovy, pineapple, size));//push Pizza object to array
        return orders;
    }
}

//use a forEach loop to search through every object's key: 'name' and return the index where it is located.
function findOrderIndex(name) {
    let position = null; //where the index integer will be stored.
    orders.forEach((element, index) => {
        // console.log(element)
        if (element.name == name) {//if the objects key: 'name' matches 
            // console.log("MATCH!");//debug
            position = index; //
        }
    })
    return position;
}

//use a forEach loop to search through every object's key: 'name' and will return a boolean
function testForName(name) {
    let nameExist = false;
    orders.forEach((element) => {
        console.log(element)
        if (element.name == name) {
            nameExist = true;
        }
    });
    return nameExist;
}

//forEach to search for name and return object to be served to method calcCost()
function findOrderObject(name) {
    let myObject = null;
    orders.forEach((element) => {
        // console.log(element)
        if (element.name == name) {
            // console.log("MATCH!");//debug
            myObject = element;
        }
    })
    return myObject;
}

//serve object in element of array to Pizza method calcCost()
function checkPlease(name) {
    return findOrderObject(name).calcCost();
}

//method for calculating Pizza objects
Pizza.prototype.calcCost = function () {
    let total = 0;
    console.log(this.name);

    if (this.cheese == true) {//if boolean is true or if pizza has topping add $0.50 to total
        total += .50;
        console.log('cheese: ' + this.cheese + " $" + total);
    }
    if (this.pepperoni == true) {
        total += .50;
        console.log('pepperoni: ' + this.pepperoni + " $" + total);
    }
    if (this.artichoke == true) {
        total += .50;
        console.log('artichoke: ' + this.artichoke + " $" + total);
    }
    if (this.anchovy == true) {
        total += .50;
        console.log('anchovy: ' + this.anchovy + " $" + total);
    }
    if (this.pineapple == true) {
        total += .50;
        console.log('pineapple: ' + this.pineapple + " $" + total);
    }

    switch (this.size) {//if size matches either add appropriate integer to total
        case 'small':
            total += 3;
            break;
        case 'medium':
            total += 4;
            break;
        case 'large':
            total += 5;
            break;
        default:
            alert("sorry you get no pizza for causing a bug!");
            location.reload();
    }
    console.log('size: ' + this.size + " $" + total);
    return total;
}

// backend ends here 👆

// frontend starts here 👇
$(document).ready(function () {
    $("form#form").submit(function (event) {
        event.preventDefault();
        // console.log($("input#cheese").val())
        let name= $("input#name").val();
        let cheese= $("input#cheese").prop('checked');
        let pepperoni= $("input#pepperoni").prop('checked');
        let artichoke= $("input#artichoke").prop('checked');
        let anchovy= $("input#anchovy").prop('checked');
        let pineapple= $("input#pineapple").prop('checked');
        let size= $("input[name=size]:checked").val();
        // console.log(name,cheese,pepperoni,artichoke,anchovy,pineapple,size);
        pushOrder(name,cheese,pepperoni,artichoke,anchovy,pineapple,size);
        checkPlease(name);
        $("div#result").text(JSON.stringify(orders));//print result on the screen


    });
});
//frontend ends here 👆