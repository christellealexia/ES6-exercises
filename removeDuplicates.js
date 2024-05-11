let removeDuplicates = (productsIDs) =>  [... new Set(productIDs)];

const productIDs = ['A123', 'B456', 'A123', 'C789', 'B456'];
console.log(removeDuplicates(productIDs));