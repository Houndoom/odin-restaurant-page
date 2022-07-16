export default function () {

  const findUsHeading = document.createElement('h1');
  findUsHeading.textContent = "Find Us";

  const findUsP = document.createElement('p');
  findUsP.textContent = "We are located at the Edge of the World. You won't miss us. There is nothing else here.";
  
  const dirHeading = document.createElement('h1');
  dirHeading.textContent = "Directions";

  const dirOl = document.createElement('ol');
  const dirLi1 = document.createElement('li')
  const dirLi2 = document.createElement('li');
  const dirLi3 = document.createElement('li');
  const dirLi4 = document.createElement('li');

  dirLi1.textContent = "Pick a direction";
  dirLi2.textContent = "Walk in that direction";
  dirLi3.textContent = "???";
  dirLi4.textContent = "Profit!";

  dirOl.appendChild(dirLi1);
  dirOl.appendChild(dirLi2);
  dirOl.appendChild(dirLi3);
  dirOl.appendChild(dirLi4);

  const telHeading = document.createElement('h1');
  telHeading.textContent = "Telephone";

  const telP = document.createElement('p');
  telP.textContent = "3343-63-843-96753";
  
  const emailHeading = document.createElement('h1');
  emailHeading.textContent = "Email";

  const emailP = document.createElement('p');
  emailP.textContent = "the_hogs_chapeau@edgeoftheworld.com";
  
  const contactContent = document.createElement('div');
  contactContent.classList.add('contact-content');
  
  contactContent.appendChild(findUsHeading);
  contactContent.appendChild(findUsP);
  contactContent.appendChild(dirHeading);
  contactContent.appendChild(dirOl);
  contactContent.appendChild(telHeading);
  contactContent.appendChild(telP);
  contactContent.appendChild(emailHeading);
  contactContent.appendChild(emailP);

  const main = document.querySelector('.main');
  main.appendChild(contactContent);

}