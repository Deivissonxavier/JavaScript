let num = [5, 8, 4, 2, 1, 0]
num.push(7)///adiciona mais um elemento
num.push(18)
num.sort()///ordena os valores em ordem crescente

num.length///quantidade de elemento


console.log(`À quantidade de lementos é ${num.length}`)
console.log(`Nosso vetor é ${num}`)

let pos = num.indexOf(8) /// encontrar um valor dentro de vetor retornando o idice
if(pos == -1){
    console.log("ERRO! valor não encontrado!")
} else{
    console.log(`O valor 8 está ${pos}`)
}