import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup(galleryItems));

function galleryMarkup(galleryItems) {
  if ('loading' in HTMLImageElement.prototype) {
    return galleryItems
      .map(
        ({ preview, original, description }) =>
          `<a class="gallery__item" href="${original}">
      <img
      loading ='lazy'
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>`,
      )
      .join('');
  } else {
    scriptCreate();
    return galleryItems
      .map(
        ({ preview, original, description }) =>
          `<a class="gallery__item" href="${original}">
      <img
      loading ='lazy'
        class="lazyload gallery__image"
        data-src="${preview}"
        alt="${description}"
      />
    </a>`,
      )
      .join('');
  }
}

function scriptCreate() {
  const script = document.createElement('script');

  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';

  document.body.appendChild(script);
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
