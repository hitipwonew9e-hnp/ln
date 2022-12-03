let div = document.querySelector('.div')
let k = document.querySelector('.k')
window.addEventListener('load', function(){
    setTimeout(()=>{
        // div.style.opacity=0;
    },2000);

setTimeout(()=>{
div.style.display='block';
// div.style.opacity=00;
},10000);
})


k.onclick = function(){
    div.style.opacity=0;
    setTimeout(()=>{
        div.style.display='none';
    },2000);
       
}
let btnCathc = document.querySelector('.btn-catch')
let gameDive = document.querySelector('.game')
function moveFunc(){
   console.log('Виконалася функція');
   let maxW = gameDive.clientWidth-btnCathc.offsetWidth;
   let maxH = gameDive.clientHeight-btnCathc.offsetHeight;
btnCathc.style.top = maxH * Math.random() +'px';
btnCathc.style.left = maxW * Math.random() +'px';
}

btnCathc.addEventListener('mousemove', moveFunc)


let html = document.querySelector('.fon')
btnCathc.onclick = function () {
    setTimeout(()=>{
        // div.style.opacity=0;
    },50000);

setTimeout(()=>{
html.style.display='block';
// div.style.opacity=00;
},1000);
}
function clickFunction(){
    this.style.backgroundColor='lightgreen'
    let n = document.createElement('div')
    n.style.backgroundColor='lime'
    n.innerHTML='<p>Ти молодець!</p>'
    n.style.padding='20px';
    document.querySelector('.game').replaceWith(n);
}
btnCathc.addEventListener('click', clickFunction)
