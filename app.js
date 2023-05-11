const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userInput = form.elements.query.value;
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`);
  showImg(res.data);
  form.elements.query.value = '';
})

const showImg = (shows) => {
  for (let result of shows) {
    if(result.show.img) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
}