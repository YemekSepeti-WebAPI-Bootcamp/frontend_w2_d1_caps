console.log("begin");

function login(username, password, callback) {
  setTimeout(() => {
    console.log("login yapılıyor");
    //backend tokenı oluşturdu
    const token = `${username}1231231123123${password}`;
    callback(token);
  }, 2000);
}

function getRestaurants(token, callback) {
  setTimeout(() => {
    console.log("restorantlar alınıyor");
    const serverResult = ["dominos", "konyalı", "samsun pide"];
    callback(serverResult);
  }, 2500);
}

function getMenu(restauran, callback) {
  setTimeout(() => {
    console.log("menüler alınıyor");
    const serverResult = ["margarita", "vegi", "4 peynirli"];
    callback(serverResult);
  }, 2500);
}

login("murat", "1234", (token) => {
  console.log("token: ", token);
  getRestaurants(token, (restaurans) => {
    console.log(restaurans);
    getMenu(restaurans[0], (menu) => {
      console.log(menu);
    });
  });
});

console.log("end");
