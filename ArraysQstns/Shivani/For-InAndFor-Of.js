const names = ["yt", "fb", "insta", "wtsp", "twitter"]
// in "of" - we create like arrays 
// for(const n of names){
//     console.log(n);
// }


// in "in" - we create like objects

const symbol = {
    yt : "youtube",
    wtsp : "whatsapp",
    fb : "facebook",
    insta : "instagram",
    twit : "twitter"
}

for(const n in symbol){
// console.log(symbol[n]);
console.log(`key is: ${n} and value is: ${symbol[n]}`);
}
