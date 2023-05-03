// WORKING with PROMISES
// chaining (.then)+ (.catch)
const promise = new Promise((resolve, reject) =>{
    if(true){
        resolve("Shit this works!");

    } else {
        reject("Error, it broke");
    }
    
   
})

promise.then(result => console.log(result))