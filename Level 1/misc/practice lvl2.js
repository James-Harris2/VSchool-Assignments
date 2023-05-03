let form = document["my-form"];
// Submit Event

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const firstName = form.firstName.value
    const lastName = form.lastName.value;
    form.firstName.value = ""
    form.lastName.value = ""

    const h1 = document.createElement ("h1")
    h1.textContent = firstName + " " + lastName
    document.getElementsByTagName("body") [0].append(h1)

});