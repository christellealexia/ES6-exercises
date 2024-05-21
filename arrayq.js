// 5. Create a function that performs a pivot operation, on an array of objects,
//  converting it from long to wide format based on specified keys.
//   const longFormatData = [     { id: 1, name: "Alice", age: 30 },   
//     { id: 2, name: "Bob", age: 25 },   
//       { id: 3, name: "Charlie", age: 35 } ]; const keys = ["id", "name"];
//        // const wideFormatData = pivotLongToWide(longFormatData, keys); // console.log(wideFormatData);
//         output: {   id: [ 1, 2, 3 ],   name: [ 'Alice', 'Bob', 'Charlie' ] } .................................................................................. const longFormatData = [     { id: 1, lastName: "Dany", age: 30 },     { id: 2, lastName: "Josue", age: 25 },     { id: 3, lastName: "Noella", age: 35 } ]; const keys = ["id", "lastName"]; // const wideFormatData = pivotLongToWide(longFormatData, keys); // console.log(wideFormatData); output: {   id: [ 1, 2, 3 ],   lastName: [ 'Dany', 'Josue', 'Noella' ] }


        let pivot = (arr) => {
            let ids = "";
    for (let i = 0; i<arr.length; i++){
        for  (key in longFormatData){
            ids = longFormatData[key];
        }
        return ids;
    }
    
            }
        
        const longFormatData = [     { id: 1, name: "Alice", age: 30 },   
    { id: 2, name: "Bob", age: 25 },   
      { id: 3, name: "Charlie", age: 35 } ]
      console.log (pivot(longFormatData));

      