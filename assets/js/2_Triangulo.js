// <!-- Aplica la fórmula a = (b*h)/2 para calcular el área de un triángulo donde sus dimensiones
// base y altura se deben pedir al usuario que las digite -->
const pantalla=document.getElementById("pantalla")
const lienzo=pantalla.getContext("2d")
const textoPantalla=document.getElementById("textoPantalla")

function canvas(){
    lienzo.fillStyle="black"
    lienzo.fillRect(0,0,1000,800)
    lienzo.fill()



}

var h=prompt("Digite la medida del alto del triangulo")*10
var b=prompt("Digite la medida de la base del triangulo")*10
canvas()
lienzo.fillStyle="white"
lienzo.beginPath()
lienzo.moveTo(500,0)
lienzo.lineTo(500-(b/2),h)
lienzo.lineTo(500+(b/2),h)
lienzo.fill()

textoPantalla.innerHTML="El area total es: "+((h*b/100)/2).toString()


