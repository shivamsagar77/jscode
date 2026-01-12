const grandParent = { grandParentProp: "I am grandparent" };
 const parent = Object.create(grandParent);
  parent.parentProp = "I am parent"; 
  const child = Object.create(parent); 
  child.childProp = "I am child"; 
  console.log(child.childProp); 
  // I am child (own property) 
  console.log(child.parentProp); 
  // // I am parent (from prototype)
   console.log(child.grandParentProp);
  //  // I am grandparent (from prototype chain)