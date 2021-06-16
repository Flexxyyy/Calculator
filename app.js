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