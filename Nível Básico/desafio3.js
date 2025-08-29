console.log("Bem vindo!");
const prompt = require("prompt-sync")();

let nota = prompt("Digite sua nota")

if(nota >0 >100){
    if(nota >=60){
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }

}else {
    console.log("Essa nota não existe.")
}