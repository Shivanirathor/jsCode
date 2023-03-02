
var countries = ["japan", "russian", "USA", "india" ];

var states = new Array("mumbai", "delhi", "raj", "goa");

console.log(countries[0]);

console.log(countries.length);

countries[0] = "iran"   // replacing the value
console.log(countries);

var user = ["shivani", "shivani1@gmail.com", 3, 23, "riya", true];
console.log(user);

user.pop();
user.shift();
user.unshift("ruhi")
user.push(349)
console.log(user[2]);

console.log(user.indexOf("riyaa"));   // indexOf means - we can search our item like in which index its , if it'll not in our array so it ll return -1

console.log(Array.from("shivani"));    // printing one by one element