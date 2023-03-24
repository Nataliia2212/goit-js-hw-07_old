import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')
const gallery = createGaleryMarkup(galleryItems);

galleryRef.addEventListener('click', onClickImg)
galleryRef.insertAdjacentHTML('beforeend', gallery)

function createGaleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}"/>
                </a>
            </li>`    
    }
    ).join('')
}


function onClickImg(event) {
    event.preventDefault();
    
    let lightbox = new SimpleLightbox('.gallery a', {captionsData:	'alt', captionDelay: 250});
    lightbox.on();
}



