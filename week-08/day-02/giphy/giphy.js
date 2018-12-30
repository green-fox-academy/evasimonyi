const API_BASE_URL = "https://api.giphy.com/v1/gifs/search?api_key=9TvdL2dZ2ceVcOiZALYzBbps2OuTXJ0d&"
let API_KEY = "q=dog&limit=16&offset=0&rating=G&lang=en"

//api kulcsot kulon kell kimenteni, mint a link

const xhr = new XMLHttpRequest();
const thumbnails = document.querySelector('.thumbnails');

// 1. easier, shorter
// xhr.onload = () => {
//   if (xhr.status === 200) {}

// 2. same thing as 1. but longer
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {}

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {
//       const response = JSON.parse(xhr.responseText);
//       response.data.forEach(e => {
//         const images = document.createElement('img');
//         images.setAttribute('src', e.images.downsized_still.url)
//         thumbnails.appendChild(images);
//         images.onclick = () => {
//           images.setAttribute('src', e.images.downsized.url);
//         }
//       });
//     }
//   }
// };

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    response.data.forEach(e => {
      const images = document.createElement('img');
      images.setAttribute('src', e.images.downsized_still.url);
      thumbnails.appendChild(images);
      images.onclick = () => {
        images.setAttribute('src', e.images.downsized.url);
      }
    });
  }
}

xhr.open('GET', `${API_BASE_URL}${API_KEY}`);
xhr.send();