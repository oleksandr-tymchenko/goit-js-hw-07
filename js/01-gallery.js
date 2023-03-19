import { galleryItems } from './gallery-items.js';
// Change code below this line


const galaryList = document.querySelector('ul.gallery');

const galaryListItems = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"  width = "360" height = "200">
    </li>`
}).join('');
// console.log(galaryListItems);
galaryList.innerHTML = galaryListItems;
// console.log(galleryItems);

galaryList.addEventListener('click', onClickGetBigImage);


// function onClickEscapeClose(evt, showImg) {
//     if (evt.code === 'Escape') {
//         console.log('find')
//         showImg.close();
//     };
// };
    
                // , { once: tru })

    

function onClickGetBigImage(evt) {
    evt.preventDefault();

    const largeImg = evt.target.dataset.source;
    const showImg = basicLightbox.create(`
    <img src="${largeImg}" width="800" height="600">
    `
        , {
            onShow: (showImg) => {
                document.addEventListener('keydown', 
                    (evt => {
                    if (evt.code === 'Escape') {
                        // console.log('find')
                        showImg.close();
                    }
                }), {once: true});
                
            }
           
        },
    );
    
    showImg.show();

};




