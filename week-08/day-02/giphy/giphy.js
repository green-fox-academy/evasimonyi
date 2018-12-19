const API_BASE_URL = "https://api.giphy.com/v1/gifs/search?api_key=9TvdL2dZ2ceVcOiZALYzBbps2OuTXJ0d&"

//api kulcsot kulon kell kimenteni, mint a link

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      //ezt erdemes kint meghatarozni az egeszbol:
      const imgs = document.querySelector('.thumbnails');
      response.data.forEach(e => {
        const images = document.createElement('img');
        images.setAttribute('src', e.images.downsized_still.url)
        imgs.appendChild(images);
        images.onclick = () => {
          images.setAttribute('src', e.images.downsized.url);
        }
      });
    }
  }
};

xhr.open('GET', `${API_BASE_URL}q=dog&limit=16&offset=0&rating=G&lang=en`);
xhr.send();