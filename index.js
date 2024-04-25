const input = require('prompt-sync') ()
const lista = []

while (true) {

    function adicionar (tarefa) {
        lista.push(tarefa)
    }

    function remover (indice) {
        if (indice < 0 || indice >= lista.length) {
            
            console.log("Erro ao remover a tarefa")
        } else {
            lista.splice(indice, 1)
        }

    }

    function listarLista () {
        const tamanho = lista.length
        
        for (let i = 0; i < tamanho; i++) {
            console.log("tarefa", i + ":", lista[i])
        }
    }

    console.log("*Opções*")
    console.log("======================")
    console.log("1. Adicionar tarefa")
    console.log("2. Remover tarefa")
    console.log("3. Listar tarefa")
    console.log("4. Sair")
    console.log("=======================")

    let escolha = String(input("Digite o número de uma das opções: "))
    escolha.toLocaleLowerCase()

    if (escolha === '1') {
        let adiciona = String(input("Digite uma tarefa para adicionar: "))
        adicionar(adiciona)
        
        console.log("Tarefa adicionada com sucesso")

    } else if (escolha === '2') {
        let posicao = Number(input("Digite o número índice à ser removido: "))
        remover(posicao)
        console.log("Tarefa removida com sucesso")

    } else if (escolha === '3') {
        listarLista()

    } else if (escolha === '4') {
        break
    
    } else {
        console.log("Algo deu errado. Por favor, tente novamente")
    }

}