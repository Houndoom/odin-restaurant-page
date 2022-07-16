export default function () {
  const historyHeading = document.createElement('h1');
  historyHeading.textContent = "History";

  const historyP1 = document.createElement('p');
  historyP1.textContent = "Partake of the ale of the Gods themselves!";
  
  const historyP2 = document.createElement('p');
  const historyP2Span = document.createElement('span');

  historyP2Span.textContent = "The Everlasting Tankard of Ale (high-quality)";

  historyP2.append("The Hound of Genshi once travelled the breadth of the land in search of the perfect ale. Through the years he visited alehouses as numerous as the sea of stars, but the ale was always found wanting. His journey took him to the Edge of the World, where he was rooted in despondence for three days and nights. The Divinity of Ale, moved by his fervent passion, appeared before him and presented to him ")
  historyP2.appendChild(historyP2Span)
  historyP2.append(". One sip of the liquid reduced the Hound of Genshi to tears, for he had found the Holy Grale. His dreams renewed, the Hound of Genshi set up The Hog's Chapeau at the Edge of the World, serving the Ale of the Gods for the enjoyment of all.");

  const aboutContent = document.createElement('div');
  aboutContent.classList.add('about-content');
  aboutContent.appendChild(historyHeading);
  aboutContent.appendChild(historyP1);
  aboutContent.appendChild(historyP2);

  const main = document.querySelector('.main');
  main.appendChild(aboutContent);
};