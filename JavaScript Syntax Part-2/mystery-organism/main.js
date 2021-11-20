// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  //console.log(dnaBases[Math.floor(Math.random() * 4)])
  return dnaBases[Math.floor(Math.random() * 4)];
};
const dnaBases = ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C']
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specinum, dna) => {
  
  return {
    specinum,
    dna,
    mutate: () => {

      return dna.map(ele => returnRandBase() === ele ? returnRandBase() : ele)
    },
    compareDNA: (newArr) => {
      if(newArr.specinum===specinum){
        return ` you are trying to compare thesame specimen`
      }
      let identical = []
      for (let i = 0; i < newArr.dna.length; i++) {
        if (newArr.dna[i] === dna[i]) {
          identical.push(dna[i])
        }
      }
      const percentage = (identical.length / newArr.dna.length) * 100
      
     return `specimen #${specinum} and #${newArr.specinum} have ${percentage.toFixed(2)}% DNA in common`

    },
    willLikelySurvive: () => {
    
      let dnaCorG = []
      for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'C'||dna[i] === 'G') {
          dnaCorG.push(dna[i])
        } 
      }
      
      const gcPercentage = (dnaCorG.length / dna.length) * 100
    return gcPercentage>=60 ?true:false
    },
   

  }


}

const survivers=()=>{

const arrSurvivers=[]
let counter=1
while (arrSurvivers.length<30){
  let listOfSurvivers = pAequorFactory(counter, mockUpStrand())
  arrSurvivers.push(listOfSurvivers) 
  counter++
}

return arrSurvivers
}


// const firstCall = pAequorFactory(2, mockUpStrand())
// const secondCall = pAequorFactory(3, mockUpStrand())
// const thirdCall = pAequorFactory(4, mockUpStrand())
// console.log(firstCall.compareDNA(secondCall))
// console.log(firstCall.willLikelySurvive())
// console.log(firstCall.mutate())

console.log(survivers())
