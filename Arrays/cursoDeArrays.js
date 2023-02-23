
const numeros = [100,200,300,400,500,600]

/* for(let i=0; i< numeros.length;i++){
    let iteraNum = numeros[i]
    let indice = numeros.indexOf(iteraNum)
    console.log(iteraNum,indice)
} */
    
// calculando a média usando o for
/* let somatorio = 0
const notas = [10,6.5,8,7.5]

for(let i=0; i<notas.length; i++){
    somatorio += notas[i]
}
let media = somatorio/notas.length
console.log(`a média é ${media}`)
 */


// média de matrizes

const notas1 = [10,6.5,8,7.5]
/* const notas2 = [9,6,6]
const notas3 = [8.5,9.5]
const notasTotais = [notas1,notas2,notas3]


let somatorio = 0


for(i=0;i<notasTotais.length;i++){
    for(j=0; j<notasTotais[i].length;j++){
        somatorio += notasTotais[i][j]
    }
}
//console.log(somatorio)
let notaDesejada = notasTotais[1]
console.log(notaDesejada)
 */

/* let somatorio = 0
for(nota of notas1){
    somatorio+= nota
}
let media = somatorio/notas1.length
console.log(media) */
let somatorio = 0
notas1.forEach(nota =>{somatorio += nota})

let media = somatorio/notas1.length
/* console.log(somatorio)
console.log(media) */

const alunos = ['Ana','Marcos','Maria','Mauricio']
const notas = [7,4.5,8,7.5]
const alunosENotas = [alunos,notas]
//console.log(alunosENotas[1].length)

const listaDeReprovados = alunos.filter((aluno,indice)=>{
    return notas[indice] < 6
})
console.log(listaDeReprovados)
 const reprovados =[]
    for(i=0;i<alunos.length;i++){   
        aluno ={
        nome: alunos[i],
        nota : notas[i],
        status: undefined
        }
        if(aluno.nota<8){
            aluno.status = "reprovado"
            reprovados.push(aluno.nome)
        }
        else{
            aluno.status = "aprovado"
        }
        //console.log(aluno)
    }
    //console.log(`os reprovados foram ${reprovados}`)

   
   const soma = notas.reduce((conjunto,currentGrade) =>
    { return conjunto + currentGrade},0)
    const mediaGeral = soma/notas.length 
   console.log(mediaGeral)
    
    
