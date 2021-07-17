# _Mr. Robo-Rodgers_

#### _A web app that orders pizza._

#### By _**Aaron Kauffman**_

## Technologies Used

* _JavaScript_
* _JQuery_
* _HTML_
* _CSS_

## Description

_This application asks the user to submit information about what pizza they'd like and converts it into a javascript array._

## Setup/Installation Requirements

* _"git clone" the url associated with the repository_
* _open the cloned repo zip file_
* _open (or double click) the index.html file_
* _have fun!_

## Specs
<pre>
Describe: Pizza();
Test: "It will create an object based on the parameters provided."
Output: new Pizza("name",true,false,false,false,true,"large");
Result: {Pizza anchovy: false artichoke: false cheese: true name: "name" pepperoni: false pineapple: true size: "large"}

Describe: PushOrder();
Test: "It will use the previous mentioned constructor and push a Pizza object to a global array."
Output: pushOrder("name",true,false,false,false,true,"large");
Result: [{Pizza}]

Describe: findOrderIndex();
Test: "It will use a forEach loop to search through every object's key: 'name' and return the index where it is located."
Output: findOrderIndex(name);
Result: 0,1,2,3... (an integer)

Describe: testForName();
Test: "It will use a forEach loop to search through every object's key: 'name' and will return a boolean."
Output: testForName(name);
Result: true or false

Describe: findOrderObject();
Test: "It will use a forEach to search for name and return object to be served to method calcCost()."
Output: findOrderObject(name);
Result: {Pizza}

Describe: Pizza.prototype.calcCost = function ()
Test: "It will iterate the total of a pizza based on it's properties using both a case switch or if and else statements."
Output: Pizza.calcCost()
Result: 0,1,2,3... (an integer)

Describe: checkPlease();
Test: "It will serve object in element of array to Pizza method calcCost()."
Output: checkPlease(name);
Result: findOrderObject(name).calcCost(); ...basically call the other function so the return would also be an integer.

</pre>

## Known Bugs

* _If the code somehow breaks it will reload the page._

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact Information

_If you run into any issues, remember: Stop, Drop, and Roll. Or, Contact Aaron at: Aaron.Christian.Kauffman@gmail.com_