import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          
        />
      </a>
    </li>`
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', handlerOnClick);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});

function handlerOnClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  lightbox.on('show.simplelightbox', function () {});
}
