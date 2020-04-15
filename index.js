let box='';
let drawing =false;
let canvas = document.querySelector('.canvas');
let row = `<div class='row'>`
let color ='black';


canvas.onmousedown=()=>{
    drawing=true;
};
canvas.onmouseup=()=>{
    drawing=false;
};



for(let i=0; i<100;i++){
    box += `<div class='box' onmouseover="coloring(this)" ></div>`;
}
row+=box;
row+=`</div>`;

for(let i=0; i<80;i++){
    canvas.innerHTML+=row
}
canvas.innerHTML+=row


coloring=(t)=>{
    if(drawing){
        t.style.backgroundColor=`${color}`
    }
   
}

let currentColor= document.querySelector('.current-color');
currentColor.style.backgroundColor=color;


changeColor=(c)=>{
    color=c;
    currentColor.style.backgroundColor=color;
}



customColor=()=>{
    let customInput = document.querySelector('#input').value;
    console.log(customInput)
    color = customInput;
    currentColor.style.backgroundColor=color;
}



