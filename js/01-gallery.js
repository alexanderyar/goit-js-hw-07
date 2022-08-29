import { galleryItems } from './gallery-items.js';
// const basicLightbox = require('basiclightbox')
// console.log(basicLightbox)
// import * as basicLightbox from 'basiclightbox'


// Change code below this line

console.log(galleryItems);


// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>

const galleryParent = document.querySelector('.gallery')

// console.log(galleryParent);

//  javascript: void(0);

function galleryMarkupCreator(picsArray) {
    const markupItself = picsArray.map(({preview, original, description}) => {
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
        </div>`
    }
    )
    
    return markupItself.join('');
}
// console.log(markupItself)

// console.log(galleryMarkupCreator(galleryItems))
const markup = galleryMarkupCreator(galleryItems)

console.log(markup)

galleryParent.insertAdjacentHTML('beforeend', markup);






const linkEl = document.querySelectorAll('.gallery__link');
//  console.log(linkEl)

// linkEl.forEach(link => { link.addEventListener('click', onLinkClick) })

// function onLinkClick(e) {
//     e.preventDefault()

// }



    // linkEl.addEventListener('click', (e) => {return "abc"})

// const linkPreventDefault = document.querySelectorAll('.gallery__link')

// console.log(linkPreventDefault)

// linkPreventDefault.addEventListener('click', e => {e.preventDefault()})



galleryParent.addEventListener('click', onClick)

function onClick(evt) {

     evt.preventDefault()

// console.log(evt.target)
//     if (evt.target.classList.contains('gallery__link')) {
//     evt.preventDefault()
// }
    
    // const linkEl = evt.target.closest('.gallery__link');

    // linkEl.addEventListener('click', (e) => {return "abc"})

    if (!evt.target.classList.contains('gallery__image')) {
        console.log('мимо')
        return
    }
    
    // console.log(evt.target.dataset.source)
     window.addEventListener('keydown', onKeydown)
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" class="gallery__image">
`)
    instance.show()



   
    
    function onKeydown(evt) {
        if (evt.code === 'Escape') {
             window.removeEventListener('keydown', onKeydown)
            instance.close()
           
        }
    console.log(evt) 
  
    }


}

// width="800" height="600"