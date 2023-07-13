const a =[1,2,3,4];
const b =[3,5,4,6];

//  let intersection = a.filter(x => b.includes(x));

//  console.log(intersection);

// const interSection = a.filter((element) => b.includes(element));      // includes means it'll return true if sting contains a specified string else false
const interSection = [...a,...b].filter((element) =>{ 
    return element % 2 === 0;
});

console.log(interSection);
