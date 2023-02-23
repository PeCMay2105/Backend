const alunos =['Marcos','Felipe','Joao','César','Bruna','Cleide','Luiza']
const notas = [8,10,8,7,5,9,8]
const AlunosENotas= [ alunos, notas]
function verificaAluno(aluno){
    if(AlunosENotas[0].includes(aluno)){
        let indice = AlunosENotas[0].indexOf(aluno)
        let nota = AlunosENotas[1][indice]
        console.log(`A média do aluno ${aluno} é ${nota}`)
    }
    else{
        console.log('este aluno não está cadastrado')
    }
}
verificaAluno('Felipe')
verificaAluno('Marcos')