
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

// async function getMenuBusiness() {
//     const token = await login("murat", "1234")
//     console.log(token)

//     const restaurants = await getRestaurants(token)
//     console.log(restaurants)

//     const menu = await getMenu(restaurants[0])
//     console.log(menu)
// }

const getMenuBusiness = async () => {

    try {

        const token = await login("murat", "1234")
        console.log(token)

        const restaurants = await getRestaurants(token)
        console.log(restaurants)

        const menu = await getMenu(restaurants[5])
        console.log(menu)

    } catch (error) {
        console.log(error)
    }
    
}

getMenuBusiness()

console.log("end")
