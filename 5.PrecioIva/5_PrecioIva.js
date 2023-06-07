const price=document.getElementById("price")
const iva=document.getElementById("iva")
const result=document.getElementById("result")
const form_operations=document.getElementById("form_operations")
const btn_calculate=document.getElementById("btn_calculate")
const btn_reset=document.getElementById("btn_reset")
const suma=document.getElementById("suma")

result.style.display="none"
btn_calculate.addEventListener('click',()=>{
    let productPrice = Number(price.value)
    let producIva = Number(iva.value)
    result.style.display="block"
    suma.innerHTML = `El producto tiene un precio de ${productPrice} <br>Un IVA de ${producIva} <br> Para un precio neto: ${(productPrice+(productPrice*producIva)/100  )}`
    form_operations.style.display="none"
})

btn_reset.addEventListener('click',()=>{
    location.reload()
})
