const form = document.userInformation;


form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fName = form.fName.value
  form.fName.value = ""
  form.lName.value = ""
  const age = form.DOB.value
  console.log('DOB')
  
 
  
  
});
