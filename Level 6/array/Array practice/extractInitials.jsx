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


  function filterByProperty(objects, propertyName, propertyValue) {
    return objects.filter(object => object[propertyName] === propertyValue);
  }
  
  const people = [
    { name: 'Alice', age: 30, country: 'USA' },
    { name: 'Bob', age: 25, country: 'Canada' },
    { name: 'Charlie', age: 35, country: 'USA' },
    { name: 'David', age: 28, country: 'Australia' },
  ];
  
  const filteredByCountry = filterByProperty(people, 'country', 'USA');
  console.log(filteredByCountry);