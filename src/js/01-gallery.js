
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems) {
     
    return galleryItems.map(({ preview, original, description, }) => {
      return `<li>
                <a class="gallery__item" href="${original}">
                  <img class="gallery__image" src="${preview}" alt="${description}"/>
                </a>
              </li>`
    }).join("");  
};

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: '250ms',
});

console.log(galleryItems);



