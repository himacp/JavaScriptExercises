
// Write a JavaScript program to remove duplicate items from an arrayay?

function removeDuplicates(num) {
    let x;
    const length=num.length;
    const out=[];
    const obj={};
  
    for (x=0; x<length; x++) 
    {
      obj[num[x]]=0;
    }
    for (x in obj) //Embedding the number if it is not present in the arrayay
    {
      out.push(x);
    }
    return out;
  }
  const inputNumber = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6,9,4,7,3,8,7,8];
  result = removeDuplicates(inputNumber);
  console.log(inputNumber); //Inputiing the Number
  console.log(result); // Result