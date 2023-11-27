var produtos = ["Caneta", "Borracha", "Apontador"]

var num = [12, 54, 84, 140]


console.log(produtos.length)

console.log(" O apontador está no índice: " + produtos.indexOf("Apontador"))

produtos.push("Apontador")

const [tomate, cogumelo, ...rest] = ['2K', '5K', '20K', '4K', '6K', '9K'];
console.log(rest)