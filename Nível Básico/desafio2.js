//2. **Verificar se um número é positivo ou negativo:**
//    - Peça ao usuário para inserir um número.
//    - Use um `if-else` para verificar se o número é positivo, negativo.
//    - OBS: *Por hora* considere o 0 como sendo um número negativo.
//    - Fluxograma

const numero = Number(prompt("Digite um número: "));

if (Number.isNaN(numero)) {
    console.log("Número inválido.")
} else 
    if(numero > 0){
    console.log(`O número ${numero} é positivo!`)
}   
    else {
    console.log(`O número ${numero} é negativo!`)
}
