// alert("i am muhammad zahid khan a web devoloper")

// let Obj={
//     a:1,
//     b: "muhammad zahid khan"
// }

// console.log(Obj)


// let animals={
//     eat:true
// }

// let rabbit={
//     jumps :true
// }

// rabbit_proto_=animals;         //prototype  

class animals {
    constructor(name) {
        this.name = name
        console.log("a new object is created...")
    }
    // how to acess the eat function 
    // a.eats
    // write in console protion
    eats() {
        console.log("the animals is eating..")
    }
    // a.sleep 
    // write in console protion 
    sleep() {
        console.log("i am sleeping..")
    }
}

// extends means inhertiance extends is a keywords used to inherit the property of  a class
// now lion class is inhertied from or derived from the animals class because the "extends" keywords is used



class lion extends animals {
    constructor(name) {
        // super is a keywords used to call the parents constructure
        super(name)
        console.log("a new object is created...")
    }

    // this is methord overriding because the function "eats" is also used in the parents class
    eats() {
        // and we also target or acess the function by "super" keyword
        super.sleep
        console.log("the kp is eating..")
    }

}


// "A" is instant of animals 
// wrote on consle "i instantof animals "
let a = new animals("kp");
console.log(a)


// "i" is instant of lion and animals 
// wrote on consle "i instantof animals or lion"
let i = new lion("tiger");
console.log(i)

