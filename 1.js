const person1 = {
  name: "Smith",
  status: "Agent",
  weapon: "Pistol",
  }

function p1(obj){

obj = Object.create(person1);
obj.ownStatus = "Program";


  for(let key in obj){
    if(obj.hasOwnProperty(key))
       console.log(key + " - " + obj[key])
  }
}

p1();

const car = {name: "audi", wheel: 4}
const car1 = Object.create(car)
car1.dor = 2

function writeKeyAndValues(obj){
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      console.log(`${key}:${obj[key]}`)
    }
  }
}



writeKeyAndValues(car1)
console.log(car1.name)