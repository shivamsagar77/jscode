function person(name){
    this.name = name;
}
person.prototype.greet = function(){
    return `Hello i am ${this.name}`
}

const p1 = new person("shivam");
console.log(p1.greet())