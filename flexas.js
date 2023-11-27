var valor = 10

//Função básica
function inc (){
    valor = 20 + 30
}
//executando a função 
inc()

console.log(valor)


//função com parâmetros
function nome(meuNome){
    console.log(meuNome)
}

nome("Nivaldo Araújo")
nome("Carlos Lira")

//função com parâmetros de numeros
function somar(v1, v2){
    const total = v1 + v2
    console.log("O valor do cálculo é: " , total)
}

somar(10, 20)

function multi (x, y){
    return x * y
}

console.log("O resultado da multiplicação é: " , multi(3, 5))
//Aerrow Function
//() => { }

var calculo = (x, y) => { return x * y }

console.log("Função aérea:  "+calculo(2, 10))

var calc = (b, a) => b * a
console.log("O valor de multiplicação é:  " + calc(2, 50))