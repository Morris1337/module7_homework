
const car = {name: "audi", wheel: 4, name2: "BMW"}
const car1 = Object.create(car)
car1.dor = 2


function возвращаетКлючИзЗначенияОбъекта(str, obj){
   console.log(str in obj)
   return str in obj
  }


возвращаетКлючИзЗначенияОбъекта("name", car1)
