function consolee(city,state){
    console.log(`${this.name} is from ${city} and state is ${state}`)
}

const person = {
    name:"shivam"
}
consolee.call(person,"delhi","ahmedabad")

consolee.apply(person,['delhi','ahmedabad']);

const s = consolee.bind(person,"delhi","ahmedabad");

s();


const person1 = { 
    name:"shivam"
}

function callperson(city,state){
    console.log(` and ${this.name} ${city} is from ${state}`);
}

callperson.apply(person1,["mumbai","maharastra"])