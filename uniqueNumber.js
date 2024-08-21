function findUniq(arr) {
let answer = arr.filter((item,index) => {
   if(arr.indexOf(item) === arr.lastIndexOf(item))
   return item;
    })
    return Number(answer.toString())
    
  }