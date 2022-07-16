import {menu} from './menuItems.js';
import aleImg from './ale.jpg';

menu.createMenuItem('The Holy Grale',aleImg,'$30');
menu.createMenuItem('Hale Mary',aleImg,'$30');
menu.createMenuItem('Boring Gingle Ale',aleImg,'$10');
menu.createMenuItem('Another Boring Gingle Ale',aleImg,'$10');
menu.createMenuItem('Last Boring Gingle Ale I Promise',aleImg,'$10');

export default function() {
  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  const menuTitle = document.createElement('h1');
  menuTitle.textContent = 'Menu';

  const menuItself = document.createElement('div');
  menuItself.classList.add('menu-itself');

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
    
    menuItself.appendChild(menuItem);
  }

  menuContent.appendChild(menuTitle);
  menuContent.appendChild(menuItself);

  const main = document.querySelector('.main');
  main.appendChild(menuContent);
}