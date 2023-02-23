const aluno ={
    nome: 'Marco',
    idade:19,
    rotina: []
}

let peito = {
    1:"crucifixo_com_halter",
    2:"supino_máquina",
    3:"supino_inclinado",
    4:"paralela",
    5:"crossOver"
}
let perna = {
    1:"agachamento",
    2:"legpress",
    3:"extensora",
    4:"flexora",
    5:"legpress_unilateral",
    6:"banco_romano"
}
aluno.rotina.push(peito,perna)
console.log(aluno)
