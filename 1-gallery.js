import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as t}from"./assets/vendor-BrmiC7Ed.js";const e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"}],p=document.querySelector(".gallery");p.innerHTML=e.map(({preview:a,original:o,description:i})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img 
            class="gallery-image" 
            src="${a}" 
            alt="${i}" 
          />
        </a>
      </li>`).join("");new t(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8,showCounter:!0,enableKeyboard:!0,nav:!0});
//# sourceMappingURL=1-gallery.js.map
