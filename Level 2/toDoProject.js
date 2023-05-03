const aForm = document.aForm;
const titleInput = document.getElementById("title-box");
//grab the description, image url, and price inputs from the HTML once it's created
const descriptionInput = document.getElementById("description-box");
const imageUrlInput = document.getElementById("image-box");
const priceInput = document.getElementById("price-box");
const unorderedList = document.getElementById("unordered-list");

function getTodo() {
  axios
    .get("https://api.vschool.io/james/todo/")
    .then((response) => listData(response.data))
    .catch((error) => console.log(error));
}

function listData(data) {
  clearOut();

  for (let i = 0; i < data.length; i++) {
    //created elements
    const title = document.createElement("h1");
    const description = document.createElement("p");
    const imageUrl = document.createElement("img");
    const price = document.createElement("p");
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    let checkbox = document.createElement("input");

    //text content and set attributes
    title.textContent = data[i].title;
    description.textContent = data[i].description;
    imageUrl.setAttribute("src", data[i].imgUrl);
    imageUrl.classList.add("image");
    price.textContent = data[i].price;
    deleteBtn.textContent = "X";
    checkbox.setAttribute("type", "checkbox");

    //functionality for checkbox
    if (data[i].completed === true) {
      title.style.textDecoration = "line-through";
      description.style.textDecoration = "line-through";
      price.style.textDecoration = "line-through";  
      //once you add the description, image url, and price, you can also use textDecoration to line-through those as well
      checkbox.checked = true;
    }

    //axios put request for checkbox
  checkbox.addEventListener("click", function () {
    // event.preventDefault();

    // object to sent to the API
    //what were are updating is the completed property
    
    const checkCompletion = {
      completed: !data[i].completed,
    }

    console.log(checkCompletion.completed, "checkCompletion.completed")

    axios.put("https://api.vschool.io/james/todo/" + data[i]._id, checkCompletion)
    //getTodo is retrieving the updated data from the API
    .then(() => getTodo())
    .catch(error => console.log(error))
  })
    //functionality for delete button
    deleteBtn.addEventListener("click", function (event) {
      event.preventDefault();

      //axios delete request
      axios
        .delete("https://api.vschool.io/james/todo/" + data[i]._id)
        .then(() => getTodo())
        .catch((error) => console.log(error));
    });

    //append items
    unorderedList.append(li);
    li.append(title, description, price, imageUrl, deleteBtn, checkbox,);
  }
}

//functionality for submitting todos
aForm.addEventListener("click", function (event) {
  event.preventDefault();

  const newAform = {
    // add value from inputs for description, image url, and price
    title: titleInput.value,
    description: descriptionInput.value,
    imgUrl: imageUrlInput.value,
    price: priceInput.value,
  };

  //clear the input values from the input boxes
  titleInput.value = "";
  descriptionInput.value = "";
  imageUrlInput.value = "";
  priceInput.value = "";

  axios
    .post("https://api.vschool.io/james/todo/", newAform)
    .then((response) => console.log(response.data))
    .then(() => getTodo())
    .catch((error) => console.log(error));
});

function clearOut() {
  const clear = unorderedList;
  while (clear.firstChild) {
    clear.removeChild(clear.firstChild);
  }
}

getTodo();
