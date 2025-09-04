//1. **Verificar maioridade:**
//    1. Peça ao usuário uma idade.
//    2. Use um `if-else` para verificar se ele é maior ou menor de idade.
//    - Fluxograma.

const idade = Number(prompt("Digite sua idade: "));

if (Number.isNaN(idade) || idade < 0) {
    console.log("Idade inválida.")
} else {
    if(idade >=18){
    console.log("Você é maior de idade!")
}else{
    console.log("Você não é maior de idade!")
}
}
