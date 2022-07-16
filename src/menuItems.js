export {menu};

const menu = (() => {

  const _menuItems = []; // Object containing menu items

  const createMenuItem = (itemName, imgSrc, itemPrice) => {
    const newMenuItem = new menuItem(itemName, imgSrc, itemPrice);
    _menuItems.push(newMenuItem);
  }

  const removeMenuItem = (i) => {
    if (typeof i === Number) {
      _menuItems.splice(Number, 1);
    } else if (typeof i === String) {
      for (let j in _menuItems) {
        if (_menuItems[j].itemName === i) _menuItems.splice(j, 1);
      }
    }
  }

  const getMenuItems = () => _menuItems;

  return {createMenuItem, removeMenuItem, getMenuItems};
})();

class menuItem {
  constructor(itemName, imgSrc, itemPrice) {
    this.itemName = itemName;
    this.imgSrc = imgSrc;
    this.itemPrice = itemPrice;
  }
}

