let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor e ${num[0]}`)
let pos = num.indexOf()
if (pos == - 1) {
    console.log(`o valor não foi encontrado!`)
} else {
    console.log(`o valor 8 esta na posição ${pos}`)
}