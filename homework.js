const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    // "Max Planck",
    "Katherine Blodgett",
    // "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//   let nameStartWithA = inventors.filter((name) => {
//     if (name.charAt(0) === "A")
//     return name
//   })
//   console.log(nameStartWithA)

//   let nameContainN = inventors.filter((name) => {
//       if (name.includes("n", 0))
//       return name
//   })
//   console.log(nameContainN)

  let sameTwiceChar = inventors.filter((name) =>{
    for(i=0; i<name.length; i++){
      if(name.charAt(i) === name.charAt(i+1)){
          return name
      }}}
    )
  console.log(sameTwiceChar)

//   let oddNum = numbers.filter((num) => {
//       if (num%2 !== 0){
//         return num
//       }
//   })
//   console.log(oddNum)

//   let twoDigits = numbers.filter((num) => {
//       if (num/10 >= 1)
//       return num
//   })
//   console.log(twoDigits)

  let primeNum = numbers.filter((num) =>{
    let a = true
    for (i=2; i < num; i++){
      if (num%i == 0){
        a = false; 
        break;
      }
    }
    if (a == true && num >=2){
      
      return num
    }
})
console.log(primeNum)

// let firstName = inventors.map((name) =>{
//     return name.split(" ", 1)
// })
// console.log(firstName)

// let nameLength = inventors.map((name) =>{
//   return name.length
// })
// console.log(nameLength)

// let nameUpperCase = inventors.map((name)=>{
//   return name.toUpperCase()
// })
// console.log(nameUpperCase)

let initialName = inventors.map((name)=>{
  namesplit = (name.split(" ").map(word => word.charAt(0))).join('.')
  return namesplit})

// // })
console.log(initialName)

// let multiplied100 = numbers.map((num)=> {
//   num *= 100
//   console.log(num)
//   return  num
// })
// console.log(multiplied100)

// let AtoZ = inventors.sort()
// console.log(AtoZ)

// // let ZtoA = inventors.reverse()
// // console.log(ZtoA)

// let ZtoA = inventors.sort(function(a,b){
//   let nameA = a
//   let nameB = b
//   if (nameA < nameB){
//   return -1
//   }
//   if (nameA > nameB){
//   return 1
//   }W
//   return 0
// })
// console.log(ZtoA)

// let sortedNameLength = inventors.sort(function(a,b){
//   return a.length - b.length
// })
// console.log(sortedNameLength)

let sortedNameLength = inventors.sort((a,b) => a-b)
console.log(sortedNameLength)

// let sumAll = numbers.reduce((total, item)=>{
//   return total += item
// })
// console.log(sumAll)

// let sumAllEven = numbers.filter(i => i%2 === 0).reduce((total, item) =>{ 
//    return total += item
// })
// console.log(sumAllEven)

// let sumAllOdd = numbers.filter(i => !(i%2===0)).reduce((total,item)=>total +=item)
// console.log(sumAllOdd)

let a = inventors.map(name => name.split(" ",1)).reduce((total, item)=> total +=item)
console.log(a)

// let b = inventors.some(inventors => inventors.y)
// console.log(b)

// let c = inventors.every(name => name.y)
// console.log(c)

let d = inventors.every(name => name.split(' ')[0].length >= 4)
console.log(d)
