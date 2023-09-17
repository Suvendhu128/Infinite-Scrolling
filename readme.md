## Infinite Image Gallery with Auto-Refresh

This JavaScript code provides an example of an infinite image gallery that automatically refreshes when the user reaches the end of the page. It fetches random images from the Unsplash API and displays them in a gallery format. When the user scrolls to the end of the page, it loads more images and, if they're at the very bottom, it refreshes the page to start over.

### How It Works

1. **Initialization**: The code initializes a `page` variable to keep track of the current page for fetching images and sets the number of images to load per request using `perPage`.

2. **Fetch Images**: The `fetchImages` function constructs the API URL with the current page number and fetches a batch of random images from Unsplash. It appends these images to the gallery container.

3. **Load More Images**: The `loadMoreImages` function listens for the user's scroll events. When the user scrolls near the end of the page, it calls `fetchImages` to load more images. If the user reaches the very bottom of the page (within 1 pixel), it triggers a page refresh using `location.reload()`.

4. **Initial Load**: The code initiates the loading of images when the page loads, displaying the first batch of images.

### Customization

- You can adjust the `perPage` variable to control how many images are loaded per request.
- Customize the Unsplash API URL with your own API key and parameters if needed.
- Modify the image rendering and styling to suit your project's requirements.

---

Feel free to add this explanation to your `README.md` file, and make any additional customizations or clarifications as needed for your project's documentation.

 
const container = document.getElementById("container");
Expaln:

- This line fetches the HTML element with the ID "container" and stores it in the `container` variable. This element will be used to display the images.

 
let page = 1; // Initialize page number
Expaln:

- Here, we declare a variable `page` and set it to `1`. This variable keeps track of the current page number for fetching images.

 
const fetchImages = () => {
Expaln:

- We define a function called `fetchImages` using an arrow function syntax. This function will be responsible for fetching and displaying a batch of images.

 
const perPage = 20; // Number of images to load per request (adjust as needed)
Expaln:

- This line sets the number of images to load per API request. You can adjust the `perPage` variable to control the batch size.

 
const url = `https://api.unsplash.com/photos/random/?client_id=LV4ASAy8_8Sfm9r7X2m4ZHrWlXFATcG758Zij3-BCAc&count=${perPage}&page=${page}`;
Expaln:

- Here, we construct the Unsplash API URL with placeholders for the number of images (`count`) and the current page (`page`). This URL will be used to fetch random images.

 
fetch(url)
Expaln:

- This line initiates a network request to the Unsplash API using the constructed URL.

 
  .then((response) => {
    return response.json();
  })
Expaln:

- We use the `.then()` method to handle the API response. It first converts the response to JSON format, making it easier to work with.

 
  .then((data) => {
    data.forEach((ele) => {
Expaln:

- In this part, we iterate through the fetched data, which is an array of image objects, using `.forEach()`. Each image object is represented as `ele`.

 
    const img = document.createElement("img");
Expaln:

- We create an `img` element in the DOM using `document.createElement()`. This element will represent an image in the gallery.

 
    img.src = ele.urls.small;
Expaln:

- We set the `src` attribute of the image element to the URL of the small-sized image from the Unsplash API.

 
    container.appendChild(img);
Expaln:

- Finally, we append the image element to the `container` element, adding it to the gallery.

 
    });
Expaln:

- We close the `forEach` loop, which processes each image in the fetched data.

 
  page++; // Increment page number for the next request
})
Expaln:

- After processing the batch of images, we increment the `page` variable to prepare for the next page of image requests.

 
.catch((error) => {
  console.error("Error fetching images:", error);
});
Expaln:

- We add error handling using `.catch()`. If there's an error during the API request or data processing, it will be logged to the console.

 
const loadMoreImages = () => {
Expaln:

- Here, we define a function called `loadMoreImages` using an arrow function. This function will be triggered when the user scrolls the page.

 
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight
  ) {
    fetchImages();
  }
Expaln:

- This code checks if the user has scrolled near the bottom of the page by comparing the sum of the viewport height (`window.innerHeight`) and the current scroll position (`window.scrollY`) to the total document height (`document.documentElement.scrollHeight`). If they are near the bottom, it calls the `fetchImages` function to load more images.

 
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1) {
    location.reload();
  }
};
Expaln:

- This part of the code checks if the user has reached the very bottom of the page (within 1 pixel). If so, it triggers a page refresh using `location.reload()`.

 
window.addEventListener("scroll", loadMoreImages);
Expaln:

- We add an event listener to the window's scroll event, which will call the `loadMoreImages` function when the user scrolls the page.

 
fetchImages(); // Initial load of images
Expaln:

- Finally, we make an initial call to the `fetchImages` function to load the first batch of images when the page initially loads.