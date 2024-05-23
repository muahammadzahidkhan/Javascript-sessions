console.log("i am  muhammad zahid khan")
console.log("hello")

setTimeout(() => {
    console.log("i am in wating mode")
}, 2000);

console.log("the end")

// call back (important )

let a = "muhammad zahid khan";

const callback=()=>{
    console.log("hi i am muhammad zahid khan  khan")
}
const test = (a,callback)=>{

    // let sc = document.createElement("script")
    // sc.a = a;
    // let sc =document.onload=callback();
    callback();
    console.log(a);
    // document.head.append(callback)
}

test(a,callback)