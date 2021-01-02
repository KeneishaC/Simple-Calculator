// IIFE
// IPO - Input Process Output 
(function() {
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
        render()
    }

    function handleClick(event){
        input = event.target.classList.contains('button') 
        ? event.target.dataset.value
        : null
        if(!input) return

        if(input === "=") return calculate()

        output += input
        //render changes to the DOM
        render()
    }

    function calculate() {
        const calculation = new Function(`return (${output})`)
        output = String(calculation())
        render()
    }

    function render() {
        if(output) inputEl.value = output
        else inputEl.value = "0"
    }
})()