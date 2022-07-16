export {menu};

const menu = (() => {

  const menuItems = [];

  const createMenuItem = (itemName, imgSrc, itemPrice) => {
    const newMenuItem = new menuItem(itemName, imgSrc, itemPrice);
    menuItems.push(newMenuItem);
  }

  const removeMenuItem = (i) => {
    if (typeof i === Number) {
      menuItems.splice(Number, 1);
    } else if (typeof i === String) {
      for (let j in menuItems) {
        if (menuItems[j].itemName === i) menuItems.splice(j, 1);
      }
    }
  }

  const getMenuItems = () => menuItems;

  return {createMenuItem, removeMenuItem, getMenuItems};
})();

class menuItem {
  constructor(itemName, imgSrc, itemPrice) {
    this.itemName = itemName;
    this.imgSrc = imgSrc;
    this.itemPrice = itemPrice;
  }
}

