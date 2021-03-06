let favoriteSandwich = "Rueben";

let leastFavoriteSandwich = {
  sandwichName: "Mud sandwich",
  price: 11.99,
  ingredients: ["bread", "mud", "mustard"],
};

console.log(leastFavoriteSandwich.ingredients[0]);

let menu = [
  {
    sandwichName: "Tomato sandwich",
    price: 6.99,
    ingredients: ["bread", "mayo", "tomato", "salt and pepper"],
  },
  {
    sandwichName: "Mud sandwich",
    price: 11.99,
    ingredients: ["bread", "mud", "mustard"],
  },
  {
    sandwichName: "Rueben",
    price: 9.99,
    ingredients: [
      "bread",
      "corned beef",
      "saurkraut",
      "thousand island dressing",
      "cheese",
    ],
  },
];

// 1. Write a "Dairy Free" function -CHECKK
// 2. that loops through your array of sandwiches - CHECKKK
// 3. and returns a new array of sandwiches
// 4. that do NOT include cheese in their ingredient list.
//(Make sure you have at least one sandwich with cheese so you can test if this function works.)

function dairyFree() {
  // Somewhere in here I need an if/else statement to ask if there is cheese
  let cheeseFreeSandwiches = [];
  for (let i = 0; i < menu.length; i++) {
    let ingredientsForThisSandwich = menu[i].ingredients

    if (ingredientsForThisSandwich.includes("cheese")=== false) {
      cheeseFreeSandwiches.push(menu[i])
    }

  }
  return cheeseFreeSandwiches;
}

let dairyFreeMenu = dairyFree(); // Expected output: we should see logs that say mud and tomato do not include cheese, and rueben DOES

console.log("dairy free menu", dairyFreeMenu)

// Expected output: array with tomato sandwich and mud sandwich, but NOT my rueben because it has cheese

// let ruebenIngredients = menu[2].ingredients;
// console.log("this is rueben ingredietns", ruebenIngredients)
// // Loop through ingredients for just a rueben
// for(let i = 0; i < ruebenIngredients.length; i++){
//     console.log(ruebenIngredients[i])
// }

// // Loop through all the sandwiches
// for(let i = 0; i < menu.length; i++){
//     console.log("this is i", i)
//     console.log(menu[i].sandwichName)
//     // console.log(menu[i].ingredients)
//     for(let j = 0; j < menu[i].ingredients.length; j++){
//         console.log(menu[i].ingredients[j])
//     }
// }

// console.log(menu[2].sandwichName)
// console.log(menu[2].ingredients[1]) // corned beef

// for(let i = 0; i < menu.length; i++){
//     if(menu[i].sandwichName === favoriteSandwich){
//         console.log("CHEF'S CHOICE", menu[i].sandwichName)
//     } else {
//         console.log(menu[i].sandwichName)
//     }

// }

// for (let i = 0; i < menu.length; i++) {
//   if (menu[i].price < 10) {
//     console.log(`SALE ${menu[i].sandwichName} - ${menu[i].price}`);
//   } else {
//     console.log(menu[i].sandwichName);
//   }
// }

// Write a function that takes in the name of my franchise owner and returns an array of menu items with that person's name tacked onto the beginning

// function createFranchiseMenu(franchiseOwnerName) {
//   let franchiseMenuArray = [];
//   console.log("This franchise belongs to:", franchiseOwnerName);
//   //Loop over the menu array
//   for (let i = 0; i < menu.length; i++) {
//     // Modify every sandwich name to include the franchise owner's name
//     let currentSandwichObject = menu[i];
//     let currentSandwichName = currentSandwichObject.sandwichName;
//     // Object for new sandwich menu
//     let newSandwich = {
//       sandwichName: `${franchiseOwnerName}'s ${currentSandwichName}`
//     }
//     // Push it into the new franchise menu
//     franchiseMenuArray.push(newSandwich)
//   }

// //   console.log(franchiseMenuArray)
//   return franchiseMenuArray;
// }

// // Call the function
// let vincentMenu = createFranchiseMenu("Vincent");
// let angieMenu = createFranchiseMenu("Angie");
// let mandyMenu = createFranchiseMenu("Mandy");
// let thomasMenu = createFranchiseMenu("Thomas");

// console.log(vincentMenu)


