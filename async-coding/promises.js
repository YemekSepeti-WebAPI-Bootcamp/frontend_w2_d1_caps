// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("error");
//   }, 3000);
// });

// promise
//   .then((token) => console.log(token))
//   .catch((err) => console.log(err))
//   .finally((x) => {
//     console.log(x);
//   });

function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login yapılıyor");
      //backend tokenı oluşturdu
      const token = `${username}1231231123123${password}`;
      resolve(token);
    }, 2000);
  });
}

function getRestaurants(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("restorantlar alınıyor");
      const serverResult = ["dominos", "konyalı", "samsun pide"];
      resolve(serverResult);
    }, 2500);
  });
}

function getMenu(restauran) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("menüler alınıyor");
      let serverResult;

      if (restauran === "dominos") {
        serverResult = ["margarita", "vegi", "4 peynirli"];
      } else if (restauran === "konyalı")
        serverResult = ["Adana Kebap", "Mercimek Çorbası"];
      else if (restauran === "samsun pide")
        serverResult = ["Kıymalı pide", "Kaşarlı Pide"];
      else {
        reject("restorant bulunamadı");
      }

      resolve(serverResult);
    }, 2500);
  });
}

// login("murat", "1234", (token) => {
//   console.log("token: ", token);
//   getRestaurants(token, (restaurans) => {
//     console.log(restaurans);
//     getMenu(restaurans[0], (menu) => {
//       console.log(menu);
//     });
//   });
// });

// login("murat", "1234")
//   .then((token) => getRestaurants(token))
//   .then((restaurants) => getMenu(restaurants[4]))
//   .then((menu) => console.log(menu))
//   .catch((err) => console.log(err));

const getCities = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([...Array(81).keys()]);
  }, 2000);
});

const getAdv = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("reklamlar");
  }, 3000);
});

// getCities.then((cities) => {
//   console.log(cities);
//   getAdv.then((p) => console.log(p));
// });

Promise.all([getCities, getAdv]).then((result) => console.log(result));
