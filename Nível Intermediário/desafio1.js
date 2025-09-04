//1. **Calculadora simples:**
//    - Peça dois números e uma operação (`+`, `-`, `*`, `/`).
//    - Use um `if-else` para calcular o resultado e exibi-lo.

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação (+, -, *, /):");

if (Number.isNaN(n1) || Number.isNaN(n2)) {
 alert("Números inválidos. Por favor digite novamente.");
} else {
    switch (operacao) {
        case "+":
            alert("Resultado: " + (n1 + n2));
            break;
        case "-":
        alert("Resultado: " + (n1 - n2));
        break;
        case "*":
        alert("Resultado: " + (n1 * n2));
        break;
        case "/":
            if (n2 === 0) {
             alert("Erro: Divisão por zero.");
            } else {
             alert("Resultado: " + (n1 / n2))
            }
        break;

        default:
        alert("Operação inválida. Por favor tente novamente.");
    } 
}