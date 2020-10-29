// const car = {
//     make: 'Tesla',
//     model: 'Model S',
//     color: red
// }

// function start() {
//     return "Outta here...."
// };

// function stop () {
//     return 'Push the brakes';
// }


const car = {
    make: 'Tesla',
    model: 'Model S',
    color: 'red',
    start: function() {
        return 'Outta here.....'
    },
    stop: function(){
        return "Push the breaks";
    }
    
}
console.log(car.start());

const employee = {
    name: "Rose Bell",
    role: "SEI Lead Instructor",
    salary: 100000
}

function salaryIncrease(salary) {
    return salary * 1.10;
}

console.log(salaryIncrease(employee.salary))

//constructor functioin

// function Human (firstName, lastName){
//     this .firstName = firstName;
//     this.lastName = lastName;
// }

// const rome = new Human('Rome', 'Bell');

// console.log(rome.firstName);

// const rob = new Human('Rob', 'Bell');
// const homer = new Human('Homer', 'Simpson');
// const bart = new Human('Bart', 'Simpson');
// const lisa = new Human('Lisa', 'Simpson');

// function Car(make, model, color){
//     this.make = make;
//     this.model = model;
//     this.color = color;
// }

// const gaz = new Car ('Volga', 21, 'Blue');
// const ford = new Car ('Mustang', '2018 Ford Mustang', 'Red');
// const lada = new Car ('Volkswagen', 'Beatle', 'Yellow' );

function User (name, email) {
    this.name=name;
    this.email=email;
    this.admin=true;
}

const romeBell = new User ('Rome', 'rome@email.com')
    romeBell.admin = false;

    User.prototype.hello = function (){
        console.log('Hello');
    }

    // // Human.prototype.swanDress = function () {
    // //     console.log('Hello!');
    // }

    // const bjork = new Human ('Bjork','Guomundsdottir');
    //    bjork.swanDress();



 class Car {
     constructor(make, model, color) {
         this.make = make;
         this.model = model;
         this.color = color;
         this.hello = function(){
         console.log('My car is a ' + this.make);
     }
 }    
}

const tesla = new Car('Tesla','Model S', 'Red');
tesla.hello();
class Human {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName= lastName;
    }
}

const amy = new Human('Amy', 'Winehouse');





