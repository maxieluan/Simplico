(function(){const L=document.getElementById("lang"),g=document.getElementById("btn-navbar"),l=document.getElementById("navbar-menu"),r=document.getElementById("toc-collapse"),d=document.getElementById("toc"),c=document.querySelectorAll("#toc a"),s=[],u=document.querySelector("main .home"),m=document.querySelector(".featured");L.addEventListener("change",o=>{const n=o.target.value;if(document.getElementById("currentLang").innerHTML.trim()==="en"){const t=window.location.pathname.split("/");window.location.href=`/${n}/${t.filter(i=>i!="").slice(0).join("/")}`}else if(n==="en"){const t=window.location.pathname.split("/");window.location.href=`/${t.filter(i=>i!="").slice(1).join("/")}`}}),g.addEventListener("click",()=>{l.classList.toggle("menu-hide"),localStorage.setItem("menu-show",!l.classList.contains("menu-hide"))});function y(){localStorage.getItem("menu-show")==="true"&&(l.classList.toggle("menu-hide"),localStorage.setItem("menu-show",!l.classList.contains("menu-hide")))}document.addEventListener("DOMContentLoaded",()=>{y()}),r&&r.addEventListener("click",()=>{const o=document.getElementById("TableOfContents");if(!o)return;o.classList.toggle("small-hidden"),r.querySelectorAll("span").forEach(e=>{e.classList.toggle("hidden")})}),document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("pre"),n=document.querySelectorAll(".highlight");o.forEach(e=>{const t=document.createElement("button");t.className="copy-button hidden",t.type="button",t.innerText="Copy",t.addEventListener("click",()=>{navigator.clipboard.writeText(e.innerText),t.innerText="Copied!",setTimeout(()=>{t.innerText="Copy"},1e3)}),e.parentNode.insertBefore(t,e)}),n.forEach(e=>{e.addEventListener("mouseenter",()=>{e.querySelector(".copy-button").classList.remove("hidden")})}),n.forEach(e=>{e.addEventListener("mouseleave",()=>{e.querySelector(".copy-button").classList.add("hidden")})})}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("table").forEach(n=>{const e=document.createElement("div");e.className="table-container",n.parentNode.insertBefore(e,n),e.appendChild(n)})}),document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("main.post");if(!o)return;o.querySelectorAll("h2, h3, h4, h5, h6").forEach(e=>{const t=document.createElement("a");t.className="anchor",t.href=`#${e.id}`,t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3V4m10 4h2.31l.32-3h2l-.32 3h2l.32-3h2l-.32 3H23v2h-1.9l-.2 2H23v2h-2.31l-.32 3h-2l.32-3h-2l-.32 3h-2l.32-3H13v-2h1.9l.2-2H13V8m4.1 2l-.2 2h2l.2-2h-2Z"/></svg>',e.insertBefore(t,e.firstChild)})});function E(){const o=window.scrollY,e=document.querySelector("main").getBoundingClientRect();o>=e.top&&d.classList.add("float"),o<=48&&d.classList.remove("float")}function w(){var o;for(let n=0;n<c.length;n++){let e=document.getElementById(c[n].attributes.href.value.slice(1)),t=document.getElementById((o=c[n+1])==null?void 0:o.attributes.href.value.slice(1));if(!(!e||!t))if(e.getBoundingClientRect().top<=0){if((t==null?void 0:t.getBoundingClientRect().top)<=0){c[n].classList.remove("active");continue}c[n].classList.add("active")}else c[n].classList.remove("active")}}function v(){const o=u.querySelectorAll("li");function n(e){e.classList.add("fade-in-from-side")}o.length>0&&o.forEach((e,t)=>{setTimeout(()=>{n(e)},100*t)})}function S(){const o=m.querySelectorAll("li");let n=window.innerHeight*.8;function e(t){t.classList.add("fade-in-from-side")}m.getBoundingClientRect().top<=n&&o.forEach(t=>{o.forEach((i,a)=>{setTimeout(()=>{e(i)},100*a)})})}let B=[v,S];function b(o,n){let e=s[o],t=s[n],i=e.getBoundingClientRect().top,a=t.getBoundingClientRect().top;n===0&&(a=document.body.getBoundingClientRect().top);let C=a-i;return t.querySelectorAll("li").forEach(f=>{f.classList.remove("fade-in-from-side")}),new Promise(f=>{window.scrollBy({top:C,behavior:"smooth"}),setTimeout(()=>{f(),B[n]()},500)})}let p=!1;d!==null&&window.addEventListener("scroll",()=>{p||(window.requestAnimationFrame(()=>{E(),w()}),p=!0)});let h=!1;if(u!==null){let e=function(t){if(l.classList.contains("menu-hide")||g.click(),t.preventDefault(),!h){let i=o;h=!0,o+=1,o>=s.length&&(o=0),Promise.all([b(i,o)]).then(()=>{h=!1})}};var T=e;let o=0;v(),s.push(u),s.push(m);const n=document.querySelector("main");n.addEventListener("wheel",e),n.addEventListener("scroll",t=>{t.preventDefault()}),n.addEventListener("touchmove",e)}})();
