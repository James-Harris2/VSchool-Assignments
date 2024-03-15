function extractInitials(names) { // Changed parameter from 'array' to 'names'
  return names.map(name => {
    const parts = name.split(' '); // Split on spaces to get first and last names
    return parts.map(part => part[0]).join('');
  });
}

const names = ['James Harris', 'Jordon Burger', 'Zac Ward'];
const initials = extractInitials(names);
console.log(initials);

export default extractInitials;


//   function filterByProperty(objects, propertyName, propertyValue) {
//     return objects.filter(object => object[propertyName] === propertyValue);
//   }


//   const people = [
//     { name: 'Alice', age: 30, country: 'USA' },
//     { name: 'Bob', age: 25, country: 'Canada' },
//     { name: 'Charlie', age: 35, country: 'USA' },
//     { name: 'David', age: 30, country: 'Australia' },
//   ];

//   const filteredByCountry = filterByProperty(people, 'age', 30);
//   console.log(filteredByCountry);


// Write a function called createTable(rows, columns) that takes two parameters: rows (number of rows) and columns (number of columns). The function should generate a table represented as an array of arrays, where each inner array represents a row and contains the row's data. Each cell in the table should contain the product of its row index and column index.

function createTable(rows, columns) {
  // create our original array
  const result = []

  // create an inner array for each row
  for (let i = 0; i < rows; i++) {
    const row = []
    //take the value of i * j add that as a column
    for (let j = 0; j < columns; j++) {
      row.push(i * j)
    }
    // add the inner array to the original array
    result.push(row)
  }
  return result
}

// Test the function with different values
const table1 = createTable(3, 4);
console.log(table1);

/* Expected Outcome:
[   0  1  2  3
  0[0, 0, 0, 0],
  1[0, 1, 2, 3],
  2[0, 2, 4, 6]
]
 */

const table2 = createTable(5, 5);
console.log(table2);