// functions in javascrift
function nice(name) {
    console.log("hi " + name + " you are a good person")
    console.log("hi " + name+ " you are crazy person")
    console.log("hi " + name+ " you are nice person")
    console.log("hi " + name+ " you are not bad")
    console.log("hi " + name+ " you are bad person")

}
// nice("uzair khan")
// nice("zahid khan")


let a =10;
let b=45;
function sum(a,b) {
    // console.log(a+b)
    return a + b
}
 result = sum(a,b)

 console.log("the sum of a and b is :",result)


// console.log("hi zahid you are a good person")
// console.log("hi zahid you are bad person")
// console.log("hi zahid you are crazy person")
// console.log("hi zahid you are nice person")
// console.log("hi zahid you are not bad")

function add(z,x) {
    return z+x
    
}
result = add(4,7)
console.log("the sum of z and x is :", result)


// arrow function 
const func1=(x)=>{
    console.log("i am in arrow function" , x)
}

func1(67);


// another example of arrow function

let func=((x)=>{
console.log("i am muhammad zahid khan from yarhusssain and my marks is "+ x+"outof 100")
})


func(90)