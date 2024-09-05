var itens = []

function add() {
    let itemA = document.getElementById("adciona").value.toUpperCase()

    if(itemA === "") {
        alert("Por favor insira um item válido.")

        return
    }

    itens.push(itemA)

    alert(`Adcionado ao estoque ${itemA}`)
}

function rem() {
    let itemR = document.getElementById("remove").value.toUpperCase()

    if(itens.includes(itemR)) {
        itens.forEach(retira)

        alert(`Removido do estoque ${itemR}`)
    
        function retira(item, index) {
            if (itemR === item) {
                itens.splice(index, 1)
            }
        }
    } else {
        alert(`Por favor remova um item presente.`)

        return
    }
}

function exibe() {
    let texto = ""

    itens.forEach(lista)

    document.getElementById("lista").innerHTML = `${texto}`

    function lista(item, index) {
        texto += `${(index + 1)}: ${item}<br>`
    }

    if (texto === "") {
        alert(`O estoque está vazio.`)
    }
}