const items = [
    { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
    { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
    { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
    { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
    { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
    { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
    { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
    { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
  ];
  
  const cart = [];
  
  // ------------------ Complete the functions written below ------------------------------ //
 

  items.forEach((item) => {console.log(item.name);});
  
  /**
   * @param {number} id
   * @returns {{id: number, name: string, price: number, category: string, inventory: number}} item
   */
  function findItemById(id) {
 return items.find((item) => {if(id === item.id){return item;
          }
        }
      );
    }

  
  
  /**
   * @returns {items[]} Returns a new array with capitalized names
   */
    function capitalizeLetter (item) {
    return item.charAt(0).toUpperCase() + item.slice(1);}


  function capitalizeNames() {
  
    // DO NOT MUTATE THE ORIGINAL ARRAY IN YOU LOGIC
    return items.map(item => {
    return { ...item, name: capitalizeLetter(item.name)
        };
      });
    }

      const capitalizedItems = capitalizeNames(items);
      console.log(capitalizedItems);
    
      
  
  /**
   * @returns {number} the sum of all inventory items
   */

  
  
  function calculateTotalInventory() {
  const total = items.reduce((acc, item) =>  {
        return acc + item.inventory;
      }, 0);
      // console.log(total)
      return total;
    }
    calculateTotalInventory();
  
  /**
   * @returns {number} the total price of all inventory items combined
   */
  function calculateAllInventoryPrice() {
    const totalPrice = items.reduce((acc, item) => {
        return acc + item.price * item.inventory;
      }, 0);
      // console.log(totalPrice);
      return totalPrice;
    }
    calculateAllInventoryPrice();
  
  
  /**
   * @param {string} name
   * @returns {number} the price of the item passed in
   */
  function getItemPriceByName(name) {
    const foundItems = items.filter(item => item.name === name);
    return foundItems.length > 0 ? foundItems[0].price : "Item not found";
  }
  
  
  /**
   * @param {categoryId} id of category to find
   * @returns {items[]} array of all items which belong to the given category
   */
  function filterItemsByCategoryId(categoryId) {
  const filterCategoryId = items.filter(item => item.categoryId === categoryId);
return filterCategoryId;
}



  
  
  function logCartItems() {}



  
  
  /**
   * @returns { number } returns the total price of items in your cart
   */

  
  
  // --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //
  
  const ids = prompt(
    "enter numbers separated by commas for the ids of the items you want to add to your cart",
    "1, 3, 5"
  );
  // Split the string of numbers into an array of strings.
  const idArr = ids.split(", ");
  
  idArr.forEach((id) => cart.push(id));
  console.log(`The names of all the items are: `);
  logItemNames();
  const itemId = prompt("enter the id of an item you are trying to find", "1");
  console.log(
    `The item with id ${itemId} is  ${JSON.stringify(
      findItemById(+itemId),
      null,
      2
    )}`
  );
  console.log(
    "We can map over an array and return a new array with the names capitalized like so: ",
    capitalizeNames()
  );
  console.log(
    "The total inventory of all grocery items is: ",
    calculateTotalInventory()
  );
  console.log(
    "The total price of all items in inventory is: ",
    calculateAllInventoryPrice()
  );
  
  const itemToFind = prompt(
    "Enter the name of an item to find the price of",
    "apple"
  );
  console.log(`The price of ${itemToFind} is: `, getItemPriceByName(itemToFind));
  
  const categoryId = prompt(
    "Enter a number between 1-4 to filter only items with that categoryId",
    2
  );
  console.log(
    `The items in category ${categoryId} are: `,
    filterItemsByCategoryId(+categoryId)
  );
  
  console.log("Cart items: ");
  logCartItems();
  
  console.log(
    `The total price of the items in your cart is: `,
    calculateTotalCartPrice()
  );