//Realiza las operaciones de suma, resta, multiplicación, división, y módulo pidiéndole solo
//2 números al usuario 


const number_one=document.getElementById("number_one")
const number_two=document.getElementById("number_two")
const result=document.getElementById("result")
const form_operations=document.getElementById("form_operations")
const btn_calculate=document.getElementById("btn_calculate")
const btn_reset=document.getElementById("btn_reset")
const suma=document.getElementById("suma")
const resta=document.getElementById("resta")
const multi=document.getElementById("multi")
const division=document.getElementById("division")
const modulo=document.getElementById("modulo")

result.style.display="none"
btn_calculate.addEventListener('click',()=>{
    let numberOne = number_one.value
    let numberTwo = number_two.value
    result.style.display="block"
    suma.innerHTML = "Suma: "+(Number(numberOne)+Number(numberTwo))
    resta.innerHTML = "Resta: "+(numberOne-numberTwo)
    multi.innerHTML = "Multiplicacion: "+(numberOne*numberTwo)
    division.innerHTML = "Division: "+(numberOne/numberTwo)
    modulo.innerHTML = "Modulo: "+(numberOne%numberTwo)
    form_operations.style.display="none"
})

btn_reset.addEventListener('click',()=>{
    location.reload()
})




