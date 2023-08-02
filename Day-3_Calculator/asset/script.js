let string = "";
const buttons = document.querySelectorAll('button');
console.log(buttons);
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        try{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value =string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector('input').value =string;
        }
        else if(e.target.innerHTML == "C"){
            string = string.substring(0 ,string.length-1)
            document.querySelector('input').value =string;
        }
        else if(e.target.innerHTML == "%"){
            string = string/100;
            document.querySelector('input').value =string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value =string;
        }
    }
    catch(err){
        console.log(err,"myerr");
        document.querySelector('input').value = "Invalid input";
    }
        
    })
})