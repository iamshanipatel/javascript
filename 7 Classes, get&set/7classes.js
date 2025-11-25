class Human {
     // properties
    age = 13; //public 
    #wt = 80; // privet... # ka proyo karne par privet ho jata hai 
    ht = 180;

    constructor(newage, newHeight){
        this.age = newage; // age badlne ka tarika
        this.ht = newHeight; // height badlne ka tarika
    }
    // behaviour
    walking(){
        console.log("I am Walking", this.#wt) // privet karne ke bad class ke andar this ke sath print hota hai(this.#wt)
     }
   running(){
        console.log("I am running")
    }
  get fetchWeight(){
    return this.#wt
  }
  
 }
 let obj = new Human(50, 190);
 console.log(obj.age)
 console.log(obj.ht)
 obj.walking()
 obj.running()

