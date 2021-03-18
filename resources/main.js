//am modificat product.js pentru a face coats un array de obiecte, 
//nu am reusit asa cum era fisierul

$(function() {
    const coatsContentWrapper = $('.coats-content-wrapper'),
    
          getcoatHTML = function(coatObj) {
            return `<div class="single-coat-wrapper" data-id=${coatObj.id}>
            <div class="coat-image-wrapper" style="background-image: url(assets/coats/${coatObj.imgUrl})"></div>
            <div class="details-wrapper">
                <div class="title-wrapper">
                    <div>${coatObj.name}</div>
                </div>
                <div class="price-wrapper">${coatObj.currency} ${coatObj.price}</div>
            </div>
        </div>
                `;
          };

    for(let i = 0; i < coats.length; i++) {
        let coatObj = coats[i],
            coatHMTL = getcoatHTML(coatObj);
            coatsContentWrapper.append(coatHMTL);
    }

//pentru overlay
    // const overlayWrapper = $('.overlay-wrapper'),
    
    //       getcoatHTML = function(coatObj) {
    //         return `<div class="single-overlay-wrapper" data-id=${coatObj.id}>
    //         <div class="overlay-image-wrapper" style="background-image: url(assets/coats/${coatObj.imgUrl})"></div>
    //         <div class="overlay-title">${coatObj.name}</div>
    //         <div class="overlay-price">${coatObj.currency} ${coatObj.price}</div>
    //         <div class="overlay-size">Your size</div>
    //         <div class="overlay-composition">${coatObj.composition}</div>
    //         <div class="overlay-country">${coatObj.country}</div>
    //         <div class="overlay-care">${coatObj.care}</div>
    //     </div>
    //             `;
    //       };
   
  
});