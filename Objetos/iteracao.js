
const pessoa ={
    nome: "Marcos",
    idade: 18,
    curso: [],
    universidade: "UFSCAR"
}

const curso1 ={
    curso: "Arquitetura",
    universidade: "UFSCAR",
    turno: "Diurno" 
}
const curso2 ={
    curso: "Direito",
    universidade: "UFSCAR",
    turno: "Noturno" 
}

pessoa.curso.push(curso1,curso2)

/* let listaKeys = Object.keys(pessoa)
let teste = listaKeys.indexOf("curso")

if(teste == undefined || teste == null || teste < 0){
    console.error("É necessário listar um curso")
}
else{
    console.log("Verificação bem sucedida")
    
    
}


for(let item in pessoa){
    console.log(`${item}: `,pessoa[item])
    console.log(pessoa[item])
} */

/* console.log(pessoa)
console.log(...pessoa.curso) */

const teste ={
    ...pessoa.curso[0]
}

console.log(teste)
console.log(...pessoa.curso)