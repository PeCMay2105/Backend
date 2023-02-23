    Métodos de array:

concat() //Serve para concatenar dois ou mais arrays
 filter() // Retorna os itens de um array que se encaixam nas diretrizes de uma função passada pelo
 find() // faz o mesmo quer o filter, com a diferença de que retorna só o primeiro valor
 finIndex() // faz o mesmo que o find, mas retorna o índice do elemento
 lastIndexOf() // faz o mesmo que o findIndex, mas começa a busca pelo último elemento
 forEach()// Dispensa comentarios
 pop() // remove itens do array
        caso não seja especificado o índice do elemento que deve ser removido, o método remove o ultimo item do array.
 shift() // remove o primeiro item do array, consequentemente alterando os índices de todos os demais
 Push() // adiciona itens ao array
 unshift() // Tem efeito parecido ao push, mas adiciona o elemento na primeira posição, consequentemente alterando o índice de todos os demais
 reduce() // Usa os itens do array para realizar uma ação que irá reduzir o retorno a apenas 1 valor
 reduceRight() // funciona igual ao reduce, mas começa a verificação pelo final do array
 slice() // Copia uma parte do array e transfere para outro array
        ex: 
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        console.log(animals.slice(2));
        // Expected output: Array ["camel", "duck", "elephant"]

        
 sort() // organiza os itens do array segundo a ordem do unicode
 splice() // remove e adiciona elementos na lista seguindo a sintaxe:
            array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
                //remove 1 elemento do índice 3
                removed = myFish.splice(3, 1);
                //myFish é ["angel", "clown", "drum", "surgeon"]
                //removed é ["mandarim"]                    