const lista = {nome: "Nivaldo", idade: "20", endereco: "Rua B - 20"}

let x = ""

for (let z in lista){
    x += lista[z]
}
console.log(x)
//-------------------------------------------------
let list = [10, 20, 30];
for (const valor of list) {
console.log(valor);
}

//-----------------------

autenticado = true;

switch (autenticado) {
case true:
console.log("Usuário logado");
break;
case false:
console.log("Usuário não autenticado");
}