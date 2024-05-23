class User{
    constructor(name){
        this.name=name;
    }

    get name(){
        return this._name;
    } 
    
    set name (value){
        if (value.length<4){
            console.log("it is too short..");
            return;
        }
        this._name= value ;
    }
}

let user = new User("khan");
console.log(user.name);
//  user = new User("");
console.log(user.name)