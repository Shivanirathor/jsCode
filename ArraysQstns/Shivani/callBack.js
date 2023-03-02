// function isEven(element){      
var isEven = (element) =>{     // other way to write function its written in var "arrow funvtion"
    // if(element % 2 === 0){
    //     return true;
    // }else{
    //     return false;
    // }


    return element % 3 === 0;
}

// console.log(isEven(3));

// CallBack function
// var result = [2,12,8,2,4].every(isEven);   // will give true false output
// console.log(result);


// var result = [2,12,8,2,4].every((e) =>{   // will give true false output
// return e % 2 === 0;
// })

var result = [2,12,1,8,2,4].every((e) => (e % 2 === 0));
console.log(result);