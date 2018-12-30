const leftButton = document.querySelector('.leftbutton');
const rightButton = document.querySelector('.rightbutton');
const thumbnails = document.querySelector('.thumbnails');

const pictures = [
  {
    'title': 'picture1',
    'url': 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2018%2F03%2F21041247%2Fpuppies.jpg&w=1000&c=sc&poi=face&q=70',
    'description': 'this is the first cute dog'
  },
  {
    'title': 'picture2',
    'url': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg',
    'description': 'this is the second cute dog'
  },
  {
    'title': 'picture3',
    'url': 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn',
    'description': 'this is the third cute dog'
  },
  {
    'title': 'picture4',
    'url': 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/All-about-puppies--Cesar’s-tips%2C-tricks-and-advice.jpg?itok=bi9xUvwe',
    'description': 'this is the fourth cute dog'
  },
  {
    'title': 'picture5',
    'url': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg',
    'description': 'this is the fifth cute dog'
  },
  {
    'title': 'picture6',
    'url': 'https://cdn1-www.dogtime.com/assets/uploads/2010/12/puppies.jpg',
    'description': 'this is the sixth cute dog'
  },
];

//putting the images into the thumbnails section
const mainImg = document.querySelector('.mainImg');
mainImg.setAttribute('src', pictures[0].url);

for (let i = 0; i < pictures.length; i++) {
  const thumbnail = document.createElement('img');
  thumbnail.src = pictures[i].url;
  thumbnails.appendChild(thumbnail);
}

//eventlistener: clicking on a picture makes the picture become the main displayed image
const images = document.querySelectorAll('img');

const displayThisPic = (e) => {
  mainImg.setAttribute('src', e.target.src);
}

images.forEach(e => {
  e.addEventListener('click', displayThisPic)
})


//button functions
let selectedPictureIndex = 0;

const showNextPic = () => {
  if (selectedPictureIndex !== pictures.length - 1) {
    selectedPictureIndex++;
    mainImg.setAttribute('src', pictures[selectedPictureIndex].url);
  } else if (selectedPictureIndex === pictures.length - 1) {
    selectedPictureIndex = 0;
    mainImg.setAttribute('src', pictures[selectedPictureIndex].url);
  }
}

rightButton.addEventListener("click", showNextPic);

const showPreviousPic = () => {
  if (selectedPictureIndex >= 1) {
    selectedPictureIndex--;
    mainImg.setAttribute('src', pictures[selectedPictureIndex].url);
  } else if (selectedPictureIndex === 0) {
    selectedPictureIndex = pictures.length - 1;
    mainImg.setAttribute('src', pictures[selectedPictureIndex].url);
  }
}

leftButton.addEventListener("click", showPreviousPic);

