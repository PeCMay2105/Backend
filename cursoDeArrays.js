const notas = [10,6,8,5.5,10]
notas.pop(10)

//console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length
//console.log(media)

let mediaAuto = (notas.reduce(calculo,0))/notas.length

function calculo(valor1,valor2){
return valor1 + valor2
}
//onsole.log(mediaAuto)




const sala1 = ['marcos','cesar','clara','maria']
const sala2 = ['carlos','felipe','pedro','artur']
let sala3 = sala1.concat(sala2)
console.log(sala1)
console.log(sala2)
console.log(sala3)
