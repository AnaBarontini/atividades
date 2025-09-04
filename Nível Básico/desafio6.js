//6. **Verificar se um número é par ou ímpar:**
//    - Peça ao usuário para inserir um número.
//    - Use o operador `%` para verificar se o número é divisível por 2.
//    - Fluxograma

const numero = Number(prompt("Digite um número:"))

if (Number.isNaN(numero)) {
    console.log("Número inválido. Por favor digite novamente.")
} else {
    if (numero % 2 == 0) {
        console.log(`O número ${numero} é par.`)
    } else {
        console.log(`O número ${numero} é ímpar.`)
    }
}