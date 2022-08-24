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
   window.addEventListener(`keydown`, onEscKeyPress);
   const isImgCard = evn.target.classList.contains('gallery__image');
   evn.preventDefault()
   if (!isImgCard) {
    return;
   }
   const imgEl = document.querySelector(`.gallery__link`)
   imgEl.href = evn.target.dataset.source;
   
   const instance = basicLightbox.create(`
    <img class="modal__image" src="assets/images/image.png" width="800" height="600">
   `)   

   instance.show();
   const modalEl = document.querySelector(`.modal__image`);
   // console.log(basicLightbox_placeholder.src)
      modalEl.src = evn.target.dataset.source;
   //  console.log(modalEl.src)
 
   function onEscKeyPress(event) {
   
      if (event.code == "Escape") {
         instance.close();
         console.log(`"${event.code}"`)
      }
      return; 
      
   }
   
}
// function onEscKeyPress(event) {
   
//    if (event.code == "Escape") {
//       instance.close();
//       console.log(`"${event.code}"`)
//    }
//    return; 
   
// }
// Create button  keydown

// console.log(galleryItems);
