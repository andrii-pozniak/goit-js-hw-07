import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgGalleryCard = document.querySelector(`.gallery`);
const imgGallery = onCreateImgCard(galleryItems);

// Create card
imgGalleryCard.insertAdjacentHTML("beforeend", imgGallery);

function onCreateImgCard(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
       return `
       <div class="gallery__item">
         <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
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
   const isImgCard = evn.target.classList.contains('gallery__image');
   if (!isImgCard) {
    return;
   }
   const imgEl = document.querySelector(`.gallery__link`)
   // imgEl.href = imgEl.target.dataset.source;
   //  console.log(evn)
   console.log(imgEl.dataset.source)
}
// console.log(galleryItems);
