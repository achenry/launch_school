function go1() {
  go2(); // go2 is in scope, initialized, and usable
  function go2() {
    console.log(go2);
  }
  // let go2 = function() {
  //   console.log(go2);
  // }
}
go1();
