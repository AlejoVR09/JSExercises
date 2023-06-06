// Realiza el cálculo del salario que debe recibir un trabajador que gana x salario con un
// descuento del 8% por salud y 10% por pensión


var salario
var salarioNeto

const salario_bruto=document.getElementById("salario_bruto")
const salario_neto=document.getElementById("salario_neto")
const salario_value=document.getElementById("salario_value")
const form_salary=document.getElementById("form_salary")
const btn_salario=document.getElementById("btn_salario")
const btn_reset=document.getElementById("btn_reset")

salario_neto.style.display="none"
btn_salario.addEventListener('click',()=>{
    salario = salario_bruto.value
    salario_neto.style.display="block"
    salarioNeto = salario-(salario*0.08)-(salario*0.10)
    salario_value.innerHTML="Salario neto: "+(salarioNeto).toString()+"$"
    form_salary.style.display="none"
})

btn_reset.addEventListener('click',()=>{
    location.reload()
})




