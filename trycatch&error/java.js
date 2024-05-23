let a = prompt("enter frist number")

let b= prompt("enter second number")

// by default the a and b is consider as  string to add to inter first we convert them to interger and then add the converted interger e.g  parseint(a) and prseint(b)


// throw error
// isNaN() is a function to check wether the number is NaN
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("this is not allowed sorry")
}
let sum = parseInt(a)+parseInt(b)    
console.log(sum)



// // handling the error
// try {
//     console.log("the sum =",sum*c)
// } catch (error) {
//     console.log("sorry try again")
// }
// finally{
//     console.log("the files has being closed")
// }
// // console.log("the sum =",sum)