let x = +prompt("Введите число");
let n = +prompt("Введите число");

class Sum{
    constructor(x, n){
        this.x = x
        this.n = n
    }
        count(){
            if(x < 1 || n < 1){
                console.log("Вы ввели не натуральное число")
              }else{
              console.log(`${x} в степени ${n} = ${Math.pow(this.x, this.n)}`)
              }
        }
}


const sum = new Sum(x, n)

sum.count()