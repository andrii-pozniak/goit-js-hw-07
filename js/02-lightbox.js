import { galleryItems } from './gallery-items.js';

const imgGalleryCard = document.querySelector(`.gallery`);
const imgGallery = onCreateImgCard(galleryItems);

// Create card
imgGalleryCard.insertAdjacentHTML("beforeend", imgGallery);

function onCreateImgCard(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
       return `
       <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
     </a>
    </div>
       ` ;       
    }).join("");
    
};
// delegation
imgGalleryCard.addEventListener(`click`, onImgCardClick);

function onImgCardClick(evn) {
    console.log("hello")
const isImgCard = evn.target.classList.contains('gallery__image', {
    
});
   evn.preventDefault()
   console.log(isImgCard)
   if (!isImgCard) {
    return;
   }
   const imgEl = document.querySelector(`.gallery__link`)
   imgEl.href = evn.target.dataset.source;

   

   const modalEl = document.querySelector(`.modal__image`);
   
   console.log("OK")
     new SimpleLightbox(`.gallery__item a`);
    
}
