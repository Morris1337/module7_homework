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
