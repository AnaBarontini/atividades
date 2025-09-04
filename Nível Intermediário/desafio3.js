//3. **Desconto em compras:**
//    - Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
//    - Caso contrário, exiba o valor normal.

const compra = Number(prompt("Digite o valor da compra em reais:"))

if (Number.isNaN(compra) || compra < 0) {
    alert("Valor inválido. Por favor digite novamente.")
} else {
    if (compra > 100) {
        const desconto = compra * 0.1
        alert(`O valor da compra com desconto de 10% é R$${desconto}.`)
    } else {
        alert(`O valor da compra é insuficiente para o desconto de 10%, e continua R$${compra}.`)
    }
}