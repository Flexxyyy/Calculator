let buttons=document.querySelectorAll('.btn');
let inputScreen=document.getElementById('inp');
let value='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='X'){
            buttonText='*';
            value+=buttonText;
            inputScreen.innerText=value;
        }

        else if(buttonText=='DEL'){
            value=value.slice(0,value.length-1);
            inputScreen.innerText=value;
        }

        else if(buttonText=='RESET'){
            value="";
            inputScreen.innerText=value;
        }

        else if(buttonText=='='){
            inputScreen.innerText=eval(value);
        }

        else{
            value+=buttonText;
            inputScreen.innerText=value;
        }
    })
}

let theme1=document.getElementById('theme1');
let theme2=document.getElementById('theme2');
let theme3=document.getElementById('theme3');
let answerTab=document.getElementById('answer-tab');
let functionTab=document.getElementById('function-tab');
let inputText=document.getElementById('inp');
let h6=document.getElementById('h6');

//theme1
theme1.addEventListener('click',()=>{
    document.body.style.backgroundColor='hsl(222, 26%, 31%)';
    answerTab.style.backgroundColor='hsl(224, 36%, 15%)'; 
    functionTab.style.backgroundColor='hsl(223, 31%, 20%)';
    for(button of buttons){
        button.style.backgroundColor='hsl(30, 25%, 89%)';
        button.style.color='black';
    }
    inputText.style.color='hsl(0, 0, 100%)';
    h6.style.color='hsl(0, 0, 100%)';
    longBtn[0].style.backgroundColor='hsl(225, 21%, 49%)';
    longBtn[0].style.color='black';
    longBtn[1].style.backgroundColor='hsl(6, 63%, 50%)';
    longBtn[1].style.color='black';
})




//theme2
theme2.addEventListener('click',()=>{
    document.body.style.backgroundColor='hsl(268, 75%, 9%)';
    answerTab.style.backgroundColor='hsl(268, 71%, 12%)'; 
    functionTab.style.backgroundColor='hsl(268, 71%, 12%)';
    for(button of buttons){
        button.style.backgroundColor='hsl(268, 47%, 21%)';
        button.style.color='hsl(52, 100%, 62%)';
    }
    inputText.style.color='hsl(52, 100%, 62%)';
    h6.style.color='hsl(52, 100%, 62%)';
    longBtn[0].style.backgroundColor='hsl(281, 89%, 26%)';
    longBtn[0].style.color='white';
    longBtn[1].style.backgroundColor='hsl(176, 100%, 44%)';
    longBtn[1].style.color='black';
})

// theme3
let longBtn=document.querySelectorAll('.long');
theme3.addEventListener('click',()=>{
    document.body.style.backgroundColor='hsl(0, 0%, 90%)';
    answerTab.style.backgroundColor='hsl(0, 0%, 93%)';
    functionTab.style.backgroundColor='hsl(0, 5%, 81%)'; 
    for(button of buttons){
        button.style.backgroundColor='hsl(45, 7%, 89%)';
        button.style.color='hsl(60, 10%, 19%)';
    }
    inputText.style.color='hsl(60, 10%, 19%)';
    h6.style.color='hsl(60, 10%, 19%)';
    // for(item of longBtn){
        
    // }
    longBtn[0].style.backgroundColor='hsl(25, 99%, 27%)';
    longBtn[0].style.color='white';
    longBtn[1].style.backgroundColor='hsl(185, 42%, 37%)';
    longBtn[1].style.color='white';
})