// const str = "Hello World"; 
// // console.log(str.toLowerCase());
// console.log(typeof str);

// const str2 = new String("Hello World");
// console.log(typeof str2);

// const movie = new Object();
// console.log("movie", movie);

// const element = document.querySelector(".some-class");
// console.log("element", {element});

// console.log(window.alert("HI"));
// alert("HI");

// const movieOne = {
//     title: "West Side Story",
//     year: 2021,
//     director: "Steven Spielberg",
//     Boolean: true,
//     GetSummary: function() {
//         return `${this.title} was directed by ${this.director}, which was released in ${this.year}`;

//     }
// }

// const movieTwo = {
//     title: "Pero",
//     year: 2021,
//     director: "Peroski Peroberg",
//     Boolean: true,
//     GetSummary: function() {
//         return `${this.title} was directed by ${this.director}, which was released in ${this.year}`;

//     }
// }

// console.log(movieOne.title);
// console.log(movieOne.year);
// console.log(movieOne.director);
// console.log(movieOne.Boolean);
// console.log(movieOne.GetSummary());
// console.log(movieTwo.GetSummary());

// function Movie (title, year, director) {
//     this.title = title;
//     this.year = year;
//     this.director = director;

    // this.GetSummary = function() {
    //     return `${this.title} was directed by ${this.director}, which was released in ${this.year}`;
    // }
// }

// const MovieOne = new Movie("West Side Story", 2021, "Steven Spielberg");
// const MovieTwo = new Movie("W Story", 2021, "Pero Spielberg");
// const MovieThree = new Movie("Side Story", 2021, "Mero Spielberg");
// const MovieFour = new Movie("West Side ", 2021, "Hero Spielberg");

// Movie.prototype.GetSummary = function () {
//     return `${this.title} was directed by ${this.director}, which was released in ${this.year}`;
// }

// console.log(MovieOne);
// console.log(MovieTwo);
// console.log(MovieThree.GetSummary());
// console.log(MovieFour);

// function Car (model, year, color, speed) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.speed = speed;
// }

// const CarOne = new Car("Porsche", 2020, "white", "300km/h");
// const CarTwo = new Car("Volvo", 2019, "black", "240km/h");
// const CarThree = new Car("Tesla", 2021, "red", "220km/h");
// const CarFour = new Car("Lexus", 2022, "blue", "200km/h");

// Car.prototype.GetSummary = function () {
//     return `The car model ${this.model} was released in ${this.year} with the color ${this.color} and maximum speed of ${this.speed}.`;
// }

// console.log(CarOne);
// console.log(CarTwo.model);
// console.log(CarThree.GetSummary());
// console.log(typeof CarFour);


//==========================================================================================\\
//CLASSES\\

// class User {
//     constructor(name, email, jobOcupation) {
//         this.name = name;
//         this.email = email;
//         this.jobOcupation = jobOcupation;
//     }

//     SayHello() {
//         return `${this.name} says hello.`;
//     }
// };

// const UserOne = new User ("John", "john@gmail.com", "Accountant");
// const UserTwo = new User ("Rohn", "rohn@gmail.com", "Cashier");

// console.log(UserOne);
// console.log(UserTwo);
// console.log(UserOne.SayHello());
// console.log(UserTwo.SayHello());


// class Car {
//     constructor(name, year, color) {
//         this.name = name;
//         this.year = year;
//         this.color = color;
//     }

//     GetName() {
//         return `This is a ${this.name}`
//     }
// };

// class Model extends Car {
//     constructor(model, name, year, color) {
//         super(name, year, color);
//         this.model = model;
//     }

//     GetModel() {
//         return `${this.GetName()} ${this.model} released in ${this.year}`;
//     }

//     GetColor() {
//         return `The color of ${this.name} ${this.model} is ${this.color}`;
//     }
// }
// const carOne = new Car("Nissan");
// const carTwo = new Model("Sunny", "Nissan", 2000, "blue");
// const carThree = new Model("Florida", "Yugo", 1991, "red");
// const carFour = new Model("101", "Zastava", 1980, "green");

// console.log(carOne.GetName());
// console.log(carTwo.GetModel());
// console.log(carThree.GetModel());
// console.log(carFour.GetModel());
// console.log(carFour.GetColor());


//==========================================================================================\\
//Web Storage\\

// 2 tipa:
// Local - cuvame podatoci i so izgasen browser
// Session - samo vo tekot na sesijata stojat podatocite koga ke se izgasi browserot se gubat

// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const reset_button = document.querySelector(".reset");
// const result = document.querySelector("h2");

// if(localStorage.getItem("name")) {
//     result.innerHTML = localStorage.getItem("name");
// } else {
//     alert("You need to enter name first");
// };

// button.addEventListener("click", function() {
//     result.innerHTML = input.value;
//     localStorage.setItem("name",input.value);
// });

// reset_button.addEventListener("click", function() {
//     localStorage.removeItem("name",);
//     result.innerHTML = "";
// });

// let user = {
//     name: "Pero Perovski",
//     age: 99
// }


// localStorage.setItem("pero", JSON.stringify(user));

// let pero = JSON.parse(localStorage.getItem("pero"));

// console.log(pero);

// ============== domasno starca udarca

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "ane",
        yearOfBirth: 1812,
        yearOfDeath: 1941,
      },
];

const FindOldest = (arr) => {
    var oldestPerson;
    var oldestAgeChange = 0;

    for(var i = 0; i < arr.length; i++) {
        var personAge = arr[i].yearOfDeath - arr[i].yearOfBirth;
        if(personAge >= oldestAgeChange) {
            oldestAgeChange = personAge;
            oldestPerson = `The olddest person is ${arr[i].name} with ${personAge} years.`;
        }
    }
    return oldestPerson;
}

console.log(FindOldest(people));