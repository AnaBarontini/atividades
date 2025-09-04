//4. **Verificar se um número é positivo, negativo ou zero:**
//    - Peça ao usuário para inserir um número.
//    - Use um `if-else` para verificar se o número é positivo, negativo ou zero.
//    - Fluxograma

const numero = Number(prompt("Digite um número:"))

if (Number.isNaN(numero)) {
    console.log("Número inválido. Por favor digite novamente.")
} else {
    if (numero > 0) {
        console.log(`O número ${numero} é positivo.`)
    } else {
        if (numero < 0) {
        console.log(`O número ${numero} é negativo.`)
        } else {
            console.log("O número é zero.")
        }
    }
}