let a = prompt("enter a number ")
let b = prompt("enter a second number")

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("there is error in syntax sorry")
}

let sum = parseInt(a)+parseInt(b)
console.log(sum)

function name(params) {

try {
    console.log("the sum is =",sum*f)
    return true
} catch (error) {
    console.log("there is error in the code ")
    return false
}finally{
    console.log("ha hi muhammad zahid khan ")
}
}



let ab = name()

console.log(ab)