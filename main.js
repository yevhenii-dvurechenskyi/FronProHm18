let number = document.querySelector(`.number`);
let plus = document.querySelector(`.counterPlus`);
let minus = document.querySelector(`.counterMinus`);
let zero = document.querySelector(`.counterZero`);

numberInt = Number(number.textContent);

plus.onclick = function(){
    numberInt++;
    return number.textContent = numberInt;   
}
minus.onclick = function(){
    if(numberInt > 0){
        numberInt--;
        return number.textContent = numberInt;  
    }
}
zero.onclick = function(){
    numberInt = 0;
    return number.textContent = numberInt;   
}











// var h1 = document.createElement('h1');
// var p = document.createElement('p');
// var input = document.createElement('input');
// var button = document.createElement('button');

// p.textContent = `Задача:';
// button.textContent = 'Press to enter';
// document.body.prepend(h1, p, input, button);

// button.onclick = function() {
//     alert(input.value);
//     return input.value = null;
// };
