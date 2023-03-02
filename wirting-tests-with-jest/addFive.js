function addFive(val) {
    console.log(val * 2);
}
addFive(2);




// const dishData1 = [
//     {
//         name: "Italian pasta",
//         price: 9.55
//     },
//     {
//         name: "Rice with veggies",
//         price: 8.65
//     },
//     {
//         name: "Chicken with potatoes",
//         price: 15.55
//     },
//     {
//         name: "Vegetarian Pizza",
//         price: 6.45
//     },
// ]
// const tax1 = 1.20;

// function getPrices1(taxBoolean) {
//     for (let i = 0; i < dishData1.length; i++) {
//         let finalPrice;
//         if (taxBoolean) {
//             finalPrice = dishData1[i].price * tax1;
//         } else if (taxBoolean == false) {
//             finalPrice = dishData1[i].price;
//         } else {
//             console.log("You need to pass a boolean to the getPrices call!");
//             break;
//         }
//         console.log(`Dish: ${dishData1[i].name} Price: $${finalPrice}`);
//     }
// }
// function getDiscount1(taxBoolean, guests) {
//     getPrices1(taxBoolean);
//     let check = typeof guests == "number" && (guests > 0 && guests < 30);
//     if (check == true) {
//         let discount = 0;
//         if (guests < 5) {
//             discount = 5;
//         } else if (guests >= 5) {
//             discount = 10;

//         } console.log(`Discount is: $ ${discount}`);
//     } else {
//         console.log(`The second argument must be a number between 0 and 30`);
//     }
// }

// getDiscount1(3,5);
// console.log("-----")
// getDiscount1(true, "a");















// console.log("------------------------------------------------------");
// // Given code
// const dishData = [
//     {
//         name: "Italian pasta",
//         price: 9.55
//     },
//     {
//         name: "Rice with veggies",
//         price: 8.65
//     },
//     {
//         name: "Chicken with potatoes",
//         price: 15.55
//     },
//     {
//         name: "Vegetarian Pizza",
//         price: 6.45
//     },
// ]
// const tax = 1.20;

// // Implement getPrices()
// function getPrices(taxBoolean) {
//     for (d of dishData) { // don't use in // use let d of dishData
//         var finalPrice;
//         if (taxBoolean == true) {
//             finalPrice = tax * d.price;
//         }
//         else if (taxBoolean == false) {
//             finalPrice = d.price;
//         }
//         else {
//             console.log("You need to pass a boolean to the getPrices call!");
//             break;
//         }
//         console.log("Dish:", d.name, "Price: $" + finalPrice);
//         // console.log(`Dish: ${d.name} Price: ${finalPrice}`);
//     }
// }

// // Implement getDiscount()
// function getDiscount(taxBoolean, guests) {
//     getPrices(taxBoolean);
//     var condition = typeof (guests) == 'number' && guests > 0 && guests < 30;
//     if (condition == true) {
//         var discount = 0;
//         if (guests < 5) {
//             discount = 5;
//         }
//         else if (guests >= 5) {
//             discount = 10;
//         }
//         console.log('Discount is: $' + discount);
//     }
//     else {
//         console.log('The second argument must be a number between 0 and 30');

//     }
// }
// // Call getDiscount()
// getDiscount(5);
// getDiscount(true, "a");

