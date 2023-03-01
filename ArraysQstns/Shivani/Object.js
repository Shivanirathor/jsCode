var users = [{
    firstName : "Shivani",   // firstname is a keywords
    lastName : "Rathor",
    role : "Admin",
    age : 22,
},
{
    firstName : "Shivi",   // firstname,role,ahe this things we called as a keywords.
    lastName : "Rathor",
    role : "",
    age : 23,
},
]
// 2 ways to console
// console.log(users.firstName);
// console.log(users["role"]);

// console.log(users.age);
// users.age = 21;
// console.log(users.age);

// console.table(users);

console.log(users)
console.table(users[1]);