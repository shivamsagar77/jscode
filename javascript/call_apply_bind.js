const object ={
    name:"shivam"
}

function  call_apply_bind(city,country){
   console.log(`${this.name} is from ${city} which located in the country name ${country}`)
}

call_apply_bind.call(object,"delhi","india")
call_apply_bind.apply(object,["ahmedabad","india"])

const bind_variable = call_apply_bind.bind(object,"mumbai","india")
bind_variable();