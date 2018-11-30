//Primero traemos los id de los elementos a ocupar
const textChange = document.getElementById('textToChange');
const btn = document.getElementById('btn');
const paint = document.getElementById('paintText');

//Pintamos el texto que se ingresa al input
textChange.addEventListener("keypress", (event) => {
    let key = event.which || event.keyCode;
    if(key === 13){
    paint.innerHTML = `${textChange.value}`
    }
}); 

//Tomamos el texto que se ha pintado y le cambiamos el estilo con setattribute
btn.addEventListener('click', event => {
    paint.setAttribute('class', 'style2');
});

//btn.addEventListener('click', 'styleChange');