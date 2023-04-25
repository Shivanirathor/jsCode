let a = [12,34,2,66,4,32]
var i, j, temp;

for( i=0; i<a.length; i++){
document.write(a[i]+ "<br/> ");
}

for(i=0; i<a.length; i++){
    for(j=0; j<a.length-1; j++){
      if(a[j] > a[j+1]){
        temp = a[j];
        a[j] = a[j+1];
        a[j+1] = temp;
      }  
    }
}
document.write("<br/> <br/> <br/> <br/> ")
for( i=0; i<a.length; i++){
    document.write(a[i]+ "<br/> ");
    }