// =====OOP LESSONS======

//  FOR DATE

const myDate = new Date()
console.log(myDate);
console.log(myDate.getFullYear());

//  Object

const people = {
    name : 'bob',
    age : 24,
    isBlack : true
}
console.log(people);

//  CLASS is  a javascript key word that allows you to have as many objects as you want

class Persons {
    constructor (name, age, gender, address){
        this.name = name, 
        this.age = age,
        this. gender = gender,
        this. address = address 
    }
}

const user = new Persons('naheem', 10, 'male', 'ogun')
const user2 = new Persons('opera', 50, 'male', 'lagos')
const user3= new Persons('chapo', 30, 'male', 'kogi')
const user4 = new Persons('rodi', 80, 'female', 'kwara')
const user5 = new Persons('teddy', 100, 'other', 'delta')
const user6 = new Persons('mubi', 125, 'male', 'borno')
const user7 = new Persons('emma', 150, 'null', 'ekiti')

console.log(user);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
console.log(user6);
console.log(user7);

console.log([user, user2]);

//  ARROW FUNCTION

const createPerson = (name, age, gender, address) =>{
    const schemaCreate =
    {
        name,
        age,
        gender,
        address
    }
   return schemaCreate

}
const addUser = createPerson ('kk', 12, 'male', 'lagos')
console.log(addUser);

//  INHERITANCE

class Animal {  // parent class
    alive = true

    isbeautiful = 'this is beautiful'

    eat() {
        console.log(`this ${this.name} can eat`);
    }

    sleep(){
        console.log(`this ${this.name} can sleep`);
    }
}
class Rabbit extends Animal {
    name = 'hare'

    run() {
        console.log(`this ${this.name} can run`);
    }
}
class Fish extends Animal {
    name = 'fish'

    swim() {
        console.log(`this ${this.name} can swim`);
    }
}
const rabbit = new Rabbit
console.log(rabbit);
console.log(rabbit.name);
rabbit.run()
rabbit.eat()
const fish = new Fish // mine
fish.swim()