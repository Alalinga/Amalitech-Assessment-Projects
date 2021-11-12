let input='How could you not feel the breeze of programming'
const vowels=['a','e','i','o','u']

let resultArray=[]
for(let inputIndex=0;inputIndex<input.length;inputIndex++){
  for(let vowelIndex=0;vowelIndex<vowels.length;vowelIndex++){
     if(input[inputIndex]===vowels[vowelIndex]){
       resultArray.push(input[inputIndex])
       if(input[inputIndex]==='e' ||input[inputIndex]=='u'){
         resultArray.push(input[inputIndex])
       }

     }
  }
  // console.log(inputIndex+' => '+input[inputIndex])
}
console.log(resultArray)

//capitalizing the array and returning a string as whale language
const whaleLanguage=(array)=>{
  return array.map(capitalizeArr=>capitalizeArr.toUpperCase()).join('');
}
console.log(whaleLanguage(resultArray))


