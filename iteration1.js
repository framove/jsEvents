window.onload= () => {

//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

let ejecutar = () => {
    let eventClick = document.querySelector('.click').value
    console.log(eventClick)
}
let btnEvent = document.createElement('button')
btnEvent.classList.add('btnToClick')
btnEvent.innerText = 'Click me'
btnEvent.addEventListener('click', ejecutar)
document.body.appendChild(btnEvent)


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let input = document.querySelector(".focus")
input.addEventListener('focus', function(){
    console.log("Escribe tu nombre")
})



}