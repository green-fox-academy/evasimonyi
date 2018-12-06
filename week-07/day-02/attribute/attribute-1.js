//Write the image's url to the console.
const imageUrl = document.querySelector('img');
console.log(imageUrl.getAttribute('src'));

//Replace the image with a picture of your favorite animal.
imageUrl.setAttribute('src', 'https://i.pinimg.com/564x/08/c8/c6/08c8c6e150d28de8487fab40a2b832dc.jpg')

//Make the link point to the Green Fox Academy website.
const gfaURL = document.querySelector('a');
gfaURL.setAttribute('href', 'https://www.greenfoxacademy.com/')

//Replace its text with 'Don't click me!'.
const dontClickButton = document.querySelector('.this-one');
console.log(dontClickButton.innerText);

dontClickButton.innerText = 'Don\'t click me!';

//Disable the second button.
dontClickButton.disabled = true;

