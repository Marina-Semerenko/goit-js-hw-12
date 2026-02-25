import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector(".load-more");

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images.map(image =>
        `<li class="galleri-item">
        <a class="gallery-link" href="${image.largeImageURL}" >
        <img src= "${image.webformatURL}"
        
        alt="${image.tags.split(",")[0]}"  loading="lazy"/>
        </a>
        <div class="info">
        <p><b>Likes:</b> ${image.likes}</p>
        <p><b>Views:</b> ${image.views}</p>
        <p><b>Comments:</b> ${image.comments}</p>
        <p><b>Downloads:</b> ${image.downloads}</p>
        </div>
        </li>                   
        `).join('');

    galleryContainer.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
    }
export function clearGallery() {
    galleryContainer.innerHTML = '';
}
export function showLoader() {
    loader.classList.remove("is-hidden");
    }
export function hideLoader() {
    loader.classList.add("is-hidden");
}
    
export function showErrorMessage() {
  iziToast.error({
    message:
      "Sorry, there are no images matching your search query. Please try again!",
    position: "topRight",
  });
}

export function showEmptyWarning() {
  iziToast.warning({
    message: "Please enter a search query!",
    position: "topRight",
  });
}

export function showLoadMoreButton () {
    loadMoreBtn.classList.remove("is-hidden");
}

export function hideLoadMoreButton ()  {
    loadMoreBtn.classList.add("is-hidden");
    
}

export function disableLoadMoreButton() {
  loadMoreBtn.disabled = true;
}

export function enableLoadMoreButton() {
  loadMoreBtn.disabled = false;
}