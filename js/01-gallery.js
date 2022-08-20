import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgGalleryCard = document.querySelector(`.gallery`);
const imgGallery = onCreateImgCard(galleryItems);

// Create card
imgGalleryCard.insertAdjacentHTML("beforeend", imgGallery);

function onCreateImgCard(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
       return `
       <div>
            <img class="gallery__image" 
            src=${preview} 
            original=${original}
            alt=${description}/>
       </div>` ;       
    }).join("");
    
};
// delegation
imgGalleryCard.addEventListener(`click`, onImgCardClick);

function onImgCardClick(evn) {
   const isImgCard = evn.target.classList.contains(`gallery__image`);
   if (!isImgCard) {
    return;
   }
   const imgEl = evn.target
   imgEl.src = imgEl.attributes.original.nodeValue;
    console.log(evn)
   console.log(imgEl.attributes.original.nodeValue)
}
// console.log(galleryItems);
