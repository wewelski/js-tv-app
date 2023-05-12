const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userInput = form.elements.query.value;
  const getShows = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`);
  dispTV(getShows.data);
  form.elements.query.value = '';
})


const dispTV = (shows) => {
  for(let result of shows) {
    if(result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
}