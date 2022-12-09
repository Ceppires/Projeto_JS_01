let firstNumber = prompt('Digite o primeiro número: ')
let secondNumber = prompt('Digite o segundo número: ')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

const restSoma = sum/2

alert('Soma ' + sum)
alert('Subtração ' + sub)
alert('Multiplicação ' + multi)
alert('Divisão ' + div)
alert('Resto da divisão ' + restDiv)

if (restSoma%2 == 0) {
    alert(`O total é ${sum}, e é um número par.`)
}else {
	alert(`O total é ${sum}, e é um número impar.`);
}

if (firstNumber === secondNumber) {
    alert('Os números inseridos são iguais')
}else {
    alert('Os números inseridos são diferentes')
}