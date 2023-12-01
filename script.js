const accessKey = "nAbtCHnnELk8HE0nRR9dcUND_fkQYnR9JZrAhuvWptw";
const formElement = document.querySelector("form");
const inputElement = document.getElementById(search - input);
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more");

let inputData = "";
let page = 1;
function searchImages() {
  inputData = inputEl.value;
  const url = `https:/api.unsplash.com/search/photos?page=${page}&query=&{inputData}&client_id${accessKey}`;
}
