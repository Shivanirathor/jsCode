
// function myName(name){
//     // return "shivani"
//     console.log("helloe my  name is " + [name]);
// }
// // console.log(myName())
// myName("shivani")

// simple function- we can call it anywhere 
// function declarations r scanned nd made available
tipper("2")

function tipper(a){
    // var bill = a;
    var bill = parseInt(a);
    console.log(bill + 5);
}


// function with variable - we hv to call downside only
// variable declaration r scanned nd made undefined
 var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill + 15);

}
bigTipper("200");



