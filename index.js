// this = reference to the object where this is used (the object depends on the immediate context )
// person.name = this.name

const person1 ={
    name: "spengehob",
    favFood: "burger",
    sayHello : function(){console.log(`Hi I am ${this.name}`)},
  eat: function(){
    console.log(`hi i am eating ${this.favFood}`);
    
  }
    
}
person1.sayHello()
person1.eat()