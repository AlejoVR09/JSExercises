// Realiza el cálculo del salario que debe recibir un trabajador que gana x salario con un
// descuento del 8% por salud y 10% por pensión


var salario = prompt("Salario: ")
var salarioNeto = salario-(salario*0.08)-(salario*0.10)

const salario_bruto=document.getElementById("salario_bruto")
const salario_neto=document.getElementById("salario_neto")

salario_bruto.innerHTML="Salario bruto: "+salario.toString()+"$"
salario_neto.innerHTML="Salario neto: "+(salarioNeto).toString()+"$"
