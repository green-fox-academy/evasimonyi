//Add an item that says 'The Green Fox' to the asteroid list.
const asteroidList = document.querySelector('ul.asteroids');
const newAsteroidGFA = document.createElement('li');

newAsteroidGFA.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroidGFA);

//Add an item that says 'The Lamplighter' to the asteroid list.
const newAsteroidLL = document.createElement('li');
newAsteroidLL.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroidLL);

//Add a heading saying 'I can add elements to the DOM!' to the .container.
const container = document.querySelector('.container');
const newHeading = document.createElement('h1');
newHeading.textContent = 'I can add elements to the DOM!';
container.appendChild(newHeading)

//Add an image, any image, to the container.

const image = document.createElement('img');
image.setAttribute('src', 'https://i.pinimg.com/564x/08/c8/c6/08c8c6e150d28de8487fab40a2b832dc.jpg')
container.appendChild(image);
