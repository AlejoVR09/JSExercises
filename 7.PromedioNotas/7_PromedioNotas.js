const grade=document.getElementById("grade")
const result=document.getElementById("result")
const form_operations=document.getElementById("form_operations")
const btn_calculate=document.getElementById("btn_calculate")
const btn_reset=document.getElementById("btn_reset")
const suma_notas=document.getElementById("suma_notas")
var cont=0
var notas=0
let prom=0
result.style.display="none"
btn_calculate.addEventListener('click',()=>{
    let nota = Number(grade.value)
    if (nota>5 || nota<1) {
        alert("Numeros entre 1 y 5")
    }
    else{
        cont++ 
        notas=notas+nota
    }

    if (cont==3) {
        prom=notas/3
        suma_notas.innerHTML=prom
        result.style.display="block"
        form_operations.style.display="none"
    }
    grade.value=""
    
})

btn_reset.addEventListener('click',()=>{
    location.reload()
})

if (cont===2) {
    alert("si")
}
