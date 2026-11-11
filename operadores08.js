//Um aluno é aprovado se tiver nota maior ou igual a 7 e frequencia maior ou igual a 
//75%. Porém, se ele tiver nota menor que 7, mas tiver o trabalhoExtra como true e 
//frequencia maior ou igual a 75%, ele também é aprovado. Crie a lógica para 
//verificar a situação do aluno.

var nota =8
var frequencia =75
var trabalhoExtra =false


if (nota >=7 && frequencia >=75 || trabalhoExtra == true) { 
    console.log("voce foi aprovado")
} else {
    console.log("voce foi reprovado")
}

