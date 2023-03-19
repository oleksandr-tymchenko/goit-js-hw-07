import { galleryItems } from './gallery-items.js';
// Change code below this line

const galaryList = document.querySelector('ul.gallery');

const galaryListItems = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
    </li>`
}).join('');

galaryList.innerHTML = galaryListItems;
console.log(galleryItems);

const galary = new SimpleLightbox('ul.gallery a');
const galaryProp = galary.defaultOptions;
galaryProp.captionsData = 'alt';
galaryProp.captionDelay = 250;
galaryProp.captionClass = 'gallery__image caption-class';

// console.log(galaryProp.captionsData)

