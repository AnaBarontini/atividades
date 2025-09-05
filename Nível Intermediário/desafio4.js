//4. **Sistema de login simples:**
//    - O usuário insere um nome de usuário e senha.
//    - Se `usuario == "admin"` e `senha == "1234"`, exibir "Login bem-sucedido", caso contrário "Acesso negado".

const user = prompt("Digite o usuário:");
const password = prompt("Digite a senha");

if (user == "admin" && password == "1234") {
    alert("Login bem-sucedido. Bem vindo!")
} else {
    alert("Acesso negado.")
}