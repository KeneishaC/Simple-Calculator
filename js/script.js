// IPO - Input Process Output 

//variables (state) and constants
let input, output

//Cached Element References
const buttonCtnr = document.getElementById('buttons');
const clearBtnEl = document.getElementById('clear')
const inputEl = document.querySelector('input')

//Event Listeners 
buttonCtnr.addEventListener('click', handleClick)
clearBtnEl.addEventListener('click', handleClearOrInit)

//Functions 
handleClearOrInit()

function handleClearOrInit() {
    output = ""
    
}

function handleClick(event){
    input = event.target.classList.contains('button') 
    ? event.target.dataset.value
    : null
    if(!input) return
    
    alert('Button clicked')
}