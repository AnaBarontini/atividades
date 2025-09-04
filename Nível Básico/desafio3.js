//3. **Aprovação em uma prova:**
//    - O usuário insere a nota de um aluno (0 a 100).
//    - Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".
//    - Fluxograma

const nota = Number(prompt("Digite sua nota de 0 a 100:"));

if (Number.isNaN(nota) || nota < 0 || nota > 100) {
    console.log("Nota inválida. Por favor digite um número de 0 a 100.")
} else 
    if(nota >=60){
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }
    
