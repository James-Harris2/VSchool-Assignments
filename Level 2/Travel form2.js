const form = document.ticketInfo
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // prevents the form from submitting 
            // document.getElementById('formSubmit')

            console.dir(form.firstName.value)
            console.dir(form.lastName.value);
            console.dir(form);
            console.dir(form.gender.value);
            console.dir(form.travel.value);
            console.dir(form.food.value);


            
});            
    