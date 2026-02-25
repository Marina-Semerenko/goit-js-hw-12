import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let currentQuery = "";
let currentPage = 1;
let totalHits = 0;




form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = event.currentTarget.elements["search-text"].value.trim();

  if (!query) 
   
    return;
  

  currentQuery = query;
  currentPage = 1;
  totalHits = 0;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
    
      });
      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(totalHits / 15);

     if (currentPage < totalPages) {
            showLoadMoreButton();
        } else {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        }
  } catch (error) {
    iziToast.error({
      message: "Error fetching images",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener("click", async () => {
    currentPage += 1;
  hideLoadMoreButton(); 
  showLoader();

  

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    createGallery(data.hits);

    const totalPages = Math.ceil(totalHits / 15);

     if (currentPage < totalPages) {
            showLoadMoreButton();
        } else {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            }); 
        }
   
    const card = document.querySelector(".gallery-item");
    if (card) {
      const cardHeight = card.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
      });
    }
  } catch (error) {
    iziToast.error({
      message: "Error fetching images",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
});