var a = ["red", "blue", "green", " pink", "grey"]
var i = 1;
var ref;

function picLibrary(){
document.images[0].src = a[i];
i++;
if(i < 3){
    i=0;
}
}
function start(){
    ref = setInterval("picLibrary()", 1000);
}
function stop(){
    clearInterval(ref);
}
