let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);

let string = '';
buttonsArray.forEach(function(btn){
    btn.addEventListener('click',function(event){
        
        if(event.target.innerHTML == 'C'){
            string = string.substring(0, string.length-1);
            display.value = string
        }
        else if(event.target.innerHTML == 'CA'){
            string = '';
            display.value = string;
        }
        else if(event.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }
        else{
            string += event.target.innerHTML;
            display.value = string;
        }
    })
})

// console.log(buttonsArray);

