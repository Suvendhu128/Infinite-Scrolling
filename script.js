const container = document.getElementById("container");

let page = 4; 

const fetchImages = () => {
  const perPage = 200; 
  const url = `https://api.unsplash.com/photos/random/?client_id=3il1lAPCuQkXjbheX1FMg10DKINQgH4xaAi5eHbyGHg&count=${perPage}&page=${page}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((ele) => {
        const img = document.createElement("img");
        img.src = ele.urls.small;
        container.appendChild(img);
      });
      page++; 
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
};

const loadMoreImages = () => {
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight
  ) {
    fetchImages();
  }
};

window.addEventListener("scroll", loadMoreImages);

fetchImages(); 
