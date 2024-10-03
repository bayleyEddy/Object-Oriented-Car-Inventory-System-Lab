//Class represents a car with name, model, year and price properties
class Car {
    //Constructor to initialize the car with name, model, year and price
    constructor(name, model, year, price){
        this.name = name;               //Assigns the name of the car
        this.model = model;             //Assigns the car model
        this.year = year;               //Assigns car's manufacture year
        this.price = price;             //Assigns initial car price
    }

    //Method to calculate the price after depreciation based on the car's age
    calculatePrice(){
        const currentYearNow = new Date().getFullYear();            //Get the current year
        const calcCarAge = currentYearNow - this.year;              //Calculate the car's age
        const depreciationRate = calcCarAge * 500;                  // Calculates the depreciation of the car ($500 a year)
        const carFinalPrice = this.price - depreciationRate;        //Calculates the final price of the car after depreciation

        return Math.max(carFinalPrice, 0);                          //Returns the final price of the car and ensures that it is not less than $0
    }
}

//Class to manage a list of cars in the inventory
class CarManager{
    //Constructor to initialize an empty array to store cars
    constructor(){
        this.cars = [];                                         //Initialize an empty array to store car objects
    }

    //Method to add a new car to inventory
    addCar(name, model, year, price){
        const newCar = new Car(name, model, year, price);       //Makes a new car object
        this.cars.push(newCar);                                 //Adds a new car to the array
        this.displayCars();                                     //Displays the updated list of cars
    }


    //Method to display the list of cars in the inventory
    displayCars(){
        const displayCarList = document.getElementById('carList');      //Displays car list
        displayCarList.innerHTML = '';                                  //Clears list of cars

        for (let i = 0; i < this.cars.length; i++){                     //Loops through the array to each car
            const car = this.cars[i];                                   //Finds the current car
            displayCarList.innerHTML += `<li>Name: ${car.name}, Model: ${car.model}, Year: ${car.year}, Price: $${car.price}</li>`;  //Adds the cars information from the boxes to the list
        }

    }

    //Method to calculate and show the total price of all cars in the inventory after depreciation
    showTotalPrice(){
        let totalPrice = 0;                                           //Initializes total price 
        for (let i = 0; i < this.cars.length; i++){                   //Loops to traverse through all cars
            totalPrice += this.cars[i].calculatePrice();              //Calculates total price by summing the prices of all cars after depreciation
        }
        alert(`Total Price of Car Inventory: $${totalPrice}`);        //Alert message to display inventory total
    }
}

//Instance of CarManager to manage the car inventory
const CarManagerInventory = new CarManager();                         //Initializing the CarManagerInventory instance

//Function to add a car from the input fields in the HTML form
function addCar(){
    const name = document.getElementById('name').value;                   //Gets the car name from the input field
    const model = document.getElementById('model').value;                 //Gets the car model from the input field
    const year = parseInt(document.getElementById('year').value);         //Gets the manufacture year and convert it to an integer
    const price = parseFloat(document.getElementById('price').value);    //Gets the price and converts it to a floating-point number

    //Checks to see if any field is left empty or has a negative value
    if (!name || !model || isNaN(year) || year <=0 || isNaN(price) || price <= 0){      //Checks to see if name and model are not empty and that year and price are not below 0
        alert("Make sure that all fields are correctly filled out");                    //Notifies user if a field is empty or incorrectly formatted
        return;
    }

    CarManagerInventory.addCar(name, model, year, price);       //Add the new car to the inventory



}

//Function to show the total price of all cars when the button is clicked
function showTotalPriceButton(){
    CarManagerInventory.showTotalPrice();    //Calls the showTotalPrice method in the CarManagerInventory
}

