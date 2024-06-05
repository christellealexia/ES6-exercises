let equalArrays = (arr1, arr2) => {
    let str1 = arr1.join();
    let str2 = arr1.join();
  if (str1 === str2){
    return true;
  }
    else
      return false;
    
  }
  const array1 = [
      { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
      { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
  ];
  
  const array2 = [
      { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
      { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
  ];
  
  console.log(equalArrays(array1, array2));