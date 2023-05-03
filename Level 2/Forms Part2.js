const form = document.myForm

form.addEventListener("Submit", function(event) {
    event.preventDefault()

    const firstName = form.firstName.value
    const lastName = form.lastName.value
    form.firstName.value = ""
    form.lastName.value = ""

    
    
    
    // 1. <h1></h1>
    const h1 = document.createElement('h1')
    // 2. <h1> Harry Potter</h2>
    h1.textContent = firstName + " " + lastName
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)

}) 
