//5. **Classificação de idade:**
//    - Peça ao usuário para inserir sua idade.
//    - Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).
//    - Fluxograma

const idade = Number(prompt("Digite sua idade: "));

if (Number.isNaN(idade) || idade < 0) {
    console.log("Idade inválida.")
} else {
    if(idade <= 12){
    console.log("Você é criança.")
    } else {
        if (idade <= 17) {
            console.log("Você é adolescente.")
        } else {
            console.log("Você é adulto.")
        }
    }
}