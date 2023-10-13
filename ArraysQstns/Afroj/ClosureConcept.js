// function along with its lexical scope
// bundled together=closure

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  // a=100;
  return y();
}
x();
// var z = x();
// It remembers the reference to a even outside the scope
// console.log(z);
