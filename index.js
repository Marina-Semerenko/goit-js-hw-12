import{a as w,S as v,i}from"./assets/vendor-BK2FPhdO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const S="54645800-ce9a454a278ea89e94662f70a",q="https://pixabay.com/api/";async function u(s,r){return(await w.get(q,{params:{key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),M=new v(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const r=s.map(e=>`<li class="galleri-item">
        <a class="gallery-link" href="${e.largeImageURL}" >
        <img src= "${e.webformatURL}"
        
        alt="${e.tags.split(",")[0]}"  loading="lazy"/>
        </a>
        <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
        </li>                   
        `).join("");f.insertAdjacentHTML("beforeend",r),M.refresh()}function P(){f.innerHTML=""}function p(){h.classList.remove("is-hidden")}function g(){h.classList.add("is-hidden")}function L(){m.classList.remove("is-hidden")}function b(){m.classList.add("is-hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more");let d="",n=1,c=0;B.addEventListener("submit",async s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(r){d=r,n=1,c=0,P(),b(),p();try{const e=await u(d,n);if(c=e.totalHits,e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits);const a=Math.ceil(c/15);n<a?L():i.info({message:"We're sorry, but you've reached the end of search results."})}catch{i.error({message:"Error fetching images",position:"topRight"})}finally{g()}}});$.addEventListener("click",async()=>{n+=1,b(),p();try{const s=await u(d,n);y(s.hits);const r=Math.ceil(c/15);n<r?L():i.info({message:"We're sorry, but you've reached the end of search results."});const e=document.querySelector(".gallery-item");if(e){const a=e.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}catch{i.error({message:"Error fetching images",position:"topRight"})}finally{g()}});
//# sourceMappingURL=index.js.map
