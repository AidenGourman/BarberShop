!function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-list-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),c=function(){var n="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),t.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",c),n.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.b2a63254.js.map