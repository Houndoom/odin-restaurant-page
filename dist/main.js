(()=>{"use strict";const e=(()=>{const e=[];return{createMenuItem:(n,o,c)=>{const l=new t(n,o,c);e.push(l)},removeMenuItem:t=>{if(typeof t===Number)e.splice(Number,1);else if(typeof t===String)for(let n in e)e[n].itemName===t&&e.splice(n,1)},getMenuItems:()=>e}})();class t{constructor(e,t,n){this.itemName=e,this.imgSrc=t,this.itemPrice=n}}e.createMenuItem("The Holy Grale","ale.jpg","$30"),e.createMenuItem("Hale Mary","ale.jpg","$30"),e.createMenuItem("Boring Gingle Ale","ale.jpg","$10"),e.createMenuItem("Another Boring Gingle Ale","ale.jpg","$10"),console.log(e.getMenuItems()),function(){const e=document.createElement("h1");e.textContent="Find Us";const t=document.createElement("p");t.textContent="We are located at the Edge of the World. You won't miss us. There is nothing else here.";const n=document.createElement("h1");n.textContent="Directions";const o=document.createElement("ol"),c=document.createElement("ul"),l=document.createElement("ul"),a=document.createElement("ul"),d=document.createElement("ul");c.textContent="Pick a direction",l.textContent="Walk in that direction",a.textContent="???",d.textContent="Profit!",o.appendChild(c),o.appendChild(l),o.appendChild(a),o.appendChild(d);const i=document.createElement("h1");i.textContent="Telephone";const m=document.createElement("p");m.textContent="3343-63-843-96753";const r=document.createElement("h1");r.textContent="Email";const p=document.createElement("p");p.textContent="the_hogs_chapeau@edgeoftheworld.com";const s=document.createElement("div");s.classList.add("contact-content"),s.appendChild(e),s.appendChild(t),s.appendChild(n),s.appendChild(o),s.appendChild(i),s.appendChild(m),s.appendChild(r),s.appendChild(p)}()})();