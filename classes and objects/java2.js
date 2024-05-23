console.log("Hi i am muhammad zahid khan")

class animal{
    constructor(name){
        this.name=name
        console.log("the object is created")
    }
    eat(){
        console.log("this animals is eating ")
    }
    sleep(){
        console.log("the animals sleep ")
    }
}

let a = new animal("cow");


class lion extends animal {
    constructor(name){
        super(name)
        console.log("this is lion class")
    }
    
    sleep(){
        super.eat()
        console.log("the animals sleep ")
    }

    eat(){
        // super.eat()
        console.log("this animals is eating lion")
    }
}

let b = new lion("tiger")