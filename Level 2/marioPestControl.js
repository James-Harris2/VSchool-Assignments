const buttonToBeClicked = document.getElementById("submit"); 
const pestControl = document.pestControl
const total = document.getElementById('total')

buttonToBeClicked.addEventListener("click", submit)

function submit(event) {
    event.preventDefault()
    const bobombTotal = pestControl.elements['bobombTotal'].value
    const cheepTotal = pestControl.elements['cheepTotal'].value
    const goombasTotal = pestControl.elements['goombasTotal'].value
    const bobombPrice = bobombTotal * 7
    const cheepPrice = cheepTotal * 11
    const goombasPrice = goombasTotal * 5

    total.innerHTML = "Total: " + (bobombPrice + cheepPrice + goombasPrice) + " Coins"
}


