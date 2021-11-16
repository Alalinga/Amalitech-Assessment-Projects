// implementing clamp method
const _ ={
  clamp:(number,lower,upper)=>{
   let lowerClampedValue=Math.max(number,lower)
   let clampedValue=Math.min(lowerClampedValue,upper)
   return clampedValue;
  },

  // implementing inRange method
inRange(number,start,end){
     
    if(end===undefined){
      end=start
      start=0
    }
    if(start > end){
      let temp=end
      end=start
      start=temp
    }
  const isInRange= start<=number && number< end? true :false
  return isInRange;  
},
// implementing words method
words:(string)=>{
const words=string.split(' ')
return words
},
// implementing pad method
pad:(string,length)=>{
  if(length<=string.length){
    return string
  }
  const startPaddingLength=Math.floor((length-string.length)/2);
  const endPaddingLength=(length-string.length)-startPaddingLength;
  const paddedString=' '.repeat(startPaddingLength).concat(string).concat(' '.repeat(endPaddingLength))

return paddedString;
},
// implementing has method
has:(object,key)=>{
  const  hasValue= object[key]!==undefined;
  return hasValue;
},
// implementing invert method
invert:(object)=>{
   const invertedObject={} 
  for(let key in object){
    let originalValue=object[key]
    invertedObject[originalValue]=key
  }
  return invertedObject;
},
findKey:(object,predicate)=>{
    for(let key in object){
      let value=object[key]
      let predicateReturnValue=predicate(value)
      if(predicateReturnValue){
        return key
      }
    }
  return undefined;
},
drop:(array,n)=>{
  if(!n){
    n=1
  }
 let droppedArray=array.slice(n) 
 return droppedArray;
},
dropWhile:(array,predicate)=>{
  // const anonymous:(element,index)=>{
  //   return predicate(element,index,array)!==-1
  // }
  let dropNumber=array.findIndex((element,index)=>{
    return !predicate(element,index,array)
  });
  const droppedArray= _.drop(array,dropNumber)
  return droppedArray
},

chunk:(array,size)=>{
    if(!size){
      size=1
    }
    let arrayChunks=[]
    let counter=1
    for(let i=0;i< array.length; i+=size){
       counter=size+i;
      let arrayChunk=array.slice(i,counter)
      arrayChunks.push(arrayChunk)
    }
    return arrayChunks;
}
}



// Do not write or modify code below this line.
module.exports = _;
