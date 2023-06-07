

const boys=document.getElementById("boys")
const girls=document.getElementById("girls")
const result=document.getElementById("result")
const form_class=document.getElementById("form_class")
const btn_calculate=document.getElementById("btn_calculate")
const btn_reset=document.getElementById("btn_reset")
const total=document.getElementById("total")
const percentage_boys=document.getElementById("percentage_boys")
const percentage_girls=document.getElementById("percentage_girls")

result.style.display="none"
btn_calculate.addEventListener('click',()=>{
    let cBoys = Number(boys.value)
    let cGirls = Number(girls.value)
    result.style.display="block"
    let totalPercentage=(cBoys)+(cGirls)
    total.innerHTML=totalPercentage+" Alumnos"
    percentage_boys.innerHTML=(cBoys*100/totalPercentage)+"% Hombres"
    percentage_girls.innerHTML=(cGirls*100/totalPercentage)+"% Mujeres"
    form_class.style.display="none"
})

btn_reset.addEventListener('click',()=>{
    location.reload()
})




