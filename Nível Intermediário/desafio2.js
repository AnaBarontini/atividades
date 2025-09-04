//2. **Maior entre três números:**
//    - O usuário insere três números.
//    - Use `if-else` para determinar e exibir o maior.


const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));
const n3 = Number(prompt("Digite o terceiro número:"));

if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
    alert("Números inválidos. Por favor digite novamente.")
} else {
    if (n1 > n2 && n1 > n3) {
        alert(`O ${n1} é maior que ${n2} e ${n3}`)
    } else {
        if (n2 > n1 && n2 > n3) {
            alert(`O ${n2} é maior que ${n1} e ${n3}`)            
        } else {
            alert(`O ${n3} é maior que ${n1} e ${n2}`)             
        }
    }
}