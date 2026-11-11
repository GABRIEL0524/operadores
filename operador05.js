//O cinema dá desconto se o dia da semana for "quarta-feira" ou se o cliente for 
//"estudante". Crie um programa que receba o dia e a condição de estudante 
//(true/false) e informe se ele tem direito ao desconto. 
var dia = "terça-feira"
var estudante = false

if( dia == "quarta-feira"||estudante == true ) {
    console.log("paga meia")
} else {
    console.log("paga inteiro")
}