let currentNumberWrapper = document.getElementById("currentNumber")
let currentNumber = 0

const increment = () => {
    currentNumber = currentNumber + 1 
    currentNumberWrapper.innerHTML = currentNumber
}
const decrement = () => {
    currentNumber = currentNumber - 1 
    currentNumberWrapper.innerHTML = currentNumber
}