const people = ['Greg','Mary','Devon','james']

// exercise 1.

//people.forEach(nome => console.log(nome))

//exercise 2.
/*     console.log(`esta é a lista antiga: ${people}`)

    let indice = people.indexOf("Greg")
    console.log(indice)

    people.splice(indice,1)

    console.log(`esta é a lista nova: ${people}`) */

//exercise 3.

    /* function remove(array,nome){
        let lista = array
        let removido = nome
        let indice = lista.indexOf(nome)
        lista.splice(indice,1)
        console.log(lista)
    }

    remove(people,'Greg') */

// exercise 4.

/*     people.unshift("Matt")
    console.log(people)
 */

// exercise 5.

    function meAdd(array,meuNome){
        array.push(meuNome)
        console.log(people)
    }

    meAdd(people,'PeCMay')