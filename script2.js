var numero = 80
//  0  à 100 intervalo
if(numero < 0 || numero > 100){
    var a = "Fora do intervalo !"
}
else if (numero <= 25){
    var a = "intervalo entre 0 à 25 !"
}
else if(numero <= 50){
    var a = "intervalo entre 25 à 50 !"
}
else if(numero <= 75){
    var a = "intervalo entre 50 à 75 !"
}
else{
    var a = "intervalo entre 75 à 100!"
}

console.log(a)

var num = 21

if(num % 2 == 0 ){
    var z = "Este numero é PAR"
}
else{
    var z = "Este numero é IMPAR"
}
console.log(z)