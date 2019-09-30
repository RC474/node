var faker = require("faker");
console.log("WelCome To My Shop");
console.log("==============================")
for(let i = 0; i < 10; i++){
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());

};

