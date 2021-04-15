function soma(){
    let n1 = document.getElementById('num1')
    let n2 = document.getElementById('num2')

    let soma =  parseInt(n1.value)  +  parseInt(n2.value) 
    
    window.alert('a soma de ' + n1.value  + ' + ' + n2.value + ' é igual a ' + soma )
}
function subtracao(){
    let n3 = document.getElementById('num3')
    let n4 = document.getElementById('num4')

    let subtracao = parseInt(n3.value)  -  parseInt(n4.value)

    window.alert('a subtração de ' + n3.value  +  ' - '  +  n4.value  +  ' é igual a ' + subtracao)
}
function multiplicacao(){
    let n5 = document.getElementById('num5')
    let n6 = document.getElementById('num6')

    let  multiplicacao = parseInt(n5.value)  *  parseInt(n6.value)

    window.alert('a multiplicação de ' + n5.value  +  ' * '  +  n6.value  +  ' é igual a ' + multiplicacao)
}
function divisao(){
    let n7 = document.getElementById('num7')
    let n8 = document.getElementById('num8')

    let divisao = parseInt(n7.value)  /  parseInt(n8.value)

    window.alert('a divisão de ' + n7.value  +  ' / '  +  n8.value  +  ' é igual a ' + divisao)
}