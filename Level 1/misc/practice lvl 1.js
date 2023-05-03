// querySelector
// Select a single element from the page. (Returns the first element it finds that matches the query)
// var result = document.querySelector("ol#favorite-things > li")
// console.log(result)

// querySelectorAll
// Select all elements from the page that match the query.
// var result = document.querySelectorAll("ol#favorite-things > li")
// console.log(Array.from (result))

// for (var i = 0; i< result.length; i++) {
//     result[i].textContent = "Redacted Information"
// }

// var result = document.querySelectorAll ("ol#favorite-things > li")
// console.log (result)

// for (var i = 0; i < result.length; i ++) {
//     result[i].textContent = "Redacted Info"
// }
// var fruit = {name: "Apples"}
// fruit.name = "Grapes"
// console.log (fruit)
//EXAMINE THE DOCUMENT OBJECT MODEL
// console.log(document.doctype);
// console.log (document.all);
// console.log (document.body);
// GET ELEMENTBYID
// // console.log(document.getElementById('header-title'));
// headerTitle.textContent = 'What up Yo!';
// headerTitle.innerText = 'Yo! what?';
// headerTitle.innerHTML = <h3>What up yo!</h3>;
// console.log (headerTitle);
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('mainheader');
// headerTitle.textContent = 'What up Yo!';
// headerTitle.innerText = 'Yo! what?';
// headerTitle.innerHTML = <h3>What up yo!</h3>;
// console.log (headerTitle);

// GETELEMENTSBYCLASSNAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);

// QUERYSELECTORBYALL//
// var titles = document.querySelectorAll('title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd) ');
// var even = document.querySelectorAll('li:nth-child(even) ');


// for (var i = 0; i < odd.length;  i++){
//    odd [i].style.backgroundColor = '#f4f4f4';
//    even [i].style.backgroundColor = '#ccc';

// }
