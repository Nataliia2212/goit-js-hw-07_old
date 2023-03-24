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
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`    
    }
    ).join('')
}


function onClickImg(event) {
    event.preventDefault();
    const img=event.target.dataset.source
   
    const instance = basicLightbox.create(`
        <img src="${img}" width="800" height="600">
    `, {
        onShow: () => {
            window.addEventListener('keydown', onEscapePress)
        },
      
        onClose: () => {
            window.removeEventListener('keydown', onEscapePress)
        }
    })

    instance.show()

    function onEscapePress(event) {
        if (event.code === 'Escape') {
            instance.close()
        }
    } 
}
      
   