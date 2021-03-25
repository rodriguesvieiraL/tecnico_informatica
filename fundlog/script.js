function variavel() {
let num1=2

 num1=num1+2
let texto= document.getElementById('texto1')
texto1.innerHTML = num1
}
function constante(){
    const num2=0
//num2=num2+855//dispara um erro
    let  texto2  = document.getElementById('texto2')
    texto2.innerHTML = num2
}
function media(){
    const pac1=9.5
    const pac2=8.7
    const AVbi=7
    const soma = pac1+pac2+AVbi

    const mediaaluno = soma / 3

    let  texto3  = document.getElementById('texto3')
    texto3.innerHTML ="o aluno teve a media final de"+ mediaaluno
}