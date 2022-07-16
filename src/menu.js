import {menu} from './menuItems.js';

menu.createMenuItem('The Holy Grale','ale.jpg','$30');
menu.createMenuItem('Hale Mary','ale.jpg','$30');
menu.createMenuItem('Boring Gingle Ale','ale.jpg','$10');
menu.createMenuItem('Another Boring Gingle Ale','ale.jpg','$10');

console.log(menu.getMenuItems());

export default function() {
  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  for (const i of menu.getMenuItems()) {
    const menuItem = document.createElement('div');
    const menuImg = document.createElement('img');
    const itemName = document.createElement('div');
    const itemPrice = document.createElement('div');
    
    menuImg.src = i.imgSrc;
    menuImg.alt = i.itemName;
    itemName.textContent = i.itemName;
    itemPrice.textContent = i.itemPrice;
    
    menuItem.classList.add('menu-item');
    menuItem.appendChild(menuImg);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemPrice);
    
    menuContent.appendChild(menuItem);
  }

  const main = document.querySelector('.main');
  main.appendChild(menuContent);
}