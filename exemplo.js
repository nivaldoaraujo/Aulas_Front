const carros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 12000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 15000 },
    { id: 3, modelo: 'Saveiro', marca: 'Wolkswagen', preco: 18000 },
    { id: 4, modelo: 'Onix', marca: 'Chevrolet', preco: 27000 }
]
// filter, map, reduce
const data = carros.filter(x => x.preco >= 16000).map(x => x.preco)
const data2 = carros.filter(x => x.modelo == "Saveiro").map(x => x.modelo)
const data3 = carros.map(z => z.modelo)

console.log(data3)
//console.log(data2)
