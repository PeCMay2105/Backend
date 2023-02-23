
//forma 1 (usando classes e objetos)
class telefone {
    celular;
    fixo;
    constructor(celular,fixo){
        this.celular = celular
        this.fixo = fixo
    }
}


cliente = {
    nome: "Dumbledore",
    email: "alvoDumble@hogmail.com",
    contato: new telefone('(922)333444','(922)987561')
}

//forma 2 (usando classes, objetos e aninhando os dois)

    cliente2 = {
        nome: "Dumbledore",
        email: "alvoDumble@hogmail.com",
    }
        cliente2.contato = new telefone('(922)333444','(922)987561')

//forma 3 (usando apenas objetos e aninhandos eles)

    cliente3 ={
        nome: "Dumbledore",
        email: "alvoDumble@hogmail.com",
    }
        cliente3.contato ={
            celular: '(922)333444',
            fixo: '(922)987561'
        }


/* console.log(cliente)
console.log(cliente2)
console.log(cliente3) */

let clientes = []
clientes.push(cliente,cliente2,cliente3)
console.log(clientes)

