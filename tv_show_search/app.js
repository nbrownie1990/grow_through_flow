const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  searchShows();
  displayImages(res.data);
  form.elements.query.value = "";
});

const displayImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

const searchShows = async () => {
  const searchTerm = form.elements.query.value;
  try {
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    console.log(res.data);
  } catch (e) {
    return "no jokes available :( Sorry!";
  }
};

//   function die die bilder wieder löscht
