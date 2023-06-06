// Calcule el sueldo mensual de un trabajador ingresando el número de horas trabajadas en
// el mes y el valor tanto como de las horas normales de trabajo y las horas extras.

var horas
var horasExtras
var valorHoras
var valorHorasExtras

const horas_mes=document.getElementById("horas_mes")
const horas_extras_mes=document.getElementById("horas_extras_mes")
const valor_hora=document.getElementById("valor_hora")
const valor_hora_extra=document.getElementById("valor_hora_extra")
const salario_neto=document.getElementById("salario_neto")
const salario_value=document.getElementById("salario_value")
const form_operations=document.getElementById("form_operations")
const btn_salario=document.getElementById("btn_salario")
const btn_reset=document.getElementById("btn_reset")

salario_neto.style.display="none"
btn_salario.addEventListener('click',()=>{
    horas = horas_mes.value
    horasExtras = horas_extras_mes.value
    valorHoras = valor_hora.value
    valorHorasExtras = valor_hora_extra.value
    salario_neto.style.display="block"
    salarioNeto = horas*valorHoras+horasExtras*valorHorasExtras
    salario_value.innerHTML="Salario neto: "+(salarioNeto).toString()+"$"
    form_operations.style.display="none"
})

btn_reset.addEventListener('click',()=>{
    location.reload()
})




