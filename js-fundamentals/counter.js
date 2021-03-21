var add = (function () {
  let counter = 0;

  return function () {
    counter += 1;
    console.log(counter);
    return counter;
  };
})();

add();
add();
add();

// function add() {

//   function plus() {
//     counter += 1;
//   }

//   plus();
// }
