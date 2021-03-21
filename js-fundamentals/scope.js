var name = "zeki";
var person;

// person.computer.name;

// person = {
//   name: "murat",
//   computer: {
//     name: "lenovo",
//     cpu: "2ghz",
//   },
// };

// function write(param) {
//   const funcVariable = "function";
//   console.log(param);
// }

// write(param);

function looping() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

// function looping() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }

looping();
