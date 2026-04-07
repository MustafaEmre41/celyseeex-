(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
    <div class="home-screen">
      <button class="app-icon" data-app="maps">
        <div class="icon-box">
          <span class="material-symbols-rounded">map</span>
        </div>
        <span class="icon-label">Maps</span>
      </button>

      <button class="app-icon" data-app="music">
        <div class="icon-box">
          <span class="material-symbols-rounded">music_note</span>
        </div>
        <span class="icon-label">Music</span>
      </button>

      <button class="app-icon" data-app="phone">
        <div class="icon-box">
          <span class="material-symbols-rounded">call</span>
        </div>
        <span class="icon-label">Phone</span>
      </button>

      <button class="app-icon" data-app="messages">
        <div class="icon-box">
          <span class="material-symbols-rounded">chat</span>
        </div>
        <span class="icon-label">Messages</span>
      </button>

      <button class="app-icon" data-app="settings">
        <div class="icon-box">
          <span class="material-symbols-rounded">settings</span>
        </div>
        <span class="icon-label">Settings</span>
      </button>
    </div>
  `}function t(){return`
    <div style="position:relative; width:100%; height:100%;">
      <div class="maps-ui-panel" style="position:absolute; top:20px; left:20px; z-index:10; background:var(--bg-taskbar); box-shadow:0 10px 30px rgba(0,0,0,0.5); padding:20px; border-radius:var(--radius-lg); border:1px solid rgba(255,255,255,0.1); width:320px;">
        <h3 style="margin-bottom:16px; font-size:20px; font-weight:600; display:flex; align-items:center; gap:8px;"><span class="material-symbols-rounded">navigation</span> Navigation</h3>
        <div style="display:flex; flex-direction:column; gap:12px;">
          <input type="text" id="route-start" placeholder="Locating device..." style="padding:14px; border-radius:var(--radius-sm); border:1px solid rgba(255,255,255,0.2); background:rgba(0,0,0,0.4); color:white; width:100%; font-size:14px;">
          <input type="text" id="route-end" placeholder="To (Destination)" style="padding:14px; border-radius:var(--radius-sm); border:1px solid rgba(255,255,255,0.2); background:rgba(0,0,0,0.4); color:white; width:100%; font-size:14px;">
          
          <button id="route-btn" style="padding:14px; border-radius:var(--radius-md); border:none; background:var(--color-primary); color:white; font-weight:600; font-size:16px; cursor:pointer; margin-top:4px;">Route Preview</button>
          
          <button id="open-maps-btn" style="padding:14px; border-radius:var(--radius-md); border:none; background:var(--color-maps); color:white; font-weight:600; font-size:16px; cursor:pointer; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;"><span class="material-symbols-rounded" style="font-size:20px;">open_in_new</span> Full Navigation</button>
        </div>
      </div>
      <iframe
        id="maps-iframe"
        class="fullscreen-app"
        frameborder="0" style="border:0; width:100%; height:100%;"
        src="https://maps.google.com/maps?q=Locating...&t=m&z=12&ie=UTF8&iwloc=&output=embed" allowfullscreen>
      </iframe>
    </div>
  `}function n(){return`
    <div class="music-app">
      <div class="album-art">
        <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=400&q=80" alt="Album Art">
      </div>
      
      <div class="track-info">
        <div class="track-title">Midnight Drive</div>
        <div class="track-artist">Synthwave Classics</div>
      </div>

      <div class="player-controls">
        <button class="control-btn"><span class="material-symbols-rounded">skip_previous</span></button>
        <button class="control-btn play-btn"><span class="material-symbols-rounded">play_arrow</span></button>
        <button class="control-btn"><span class="material-symbols-rounded">skip_next</span></button>
      </div>
    </div>
  `}var r=document.getElementById(`clock`),i=document.getElementById(`main-content`),a=document.querySelectorAll(`.nav-btn`);function o(){let e=new Date,t=e.getHours(),n=e.getMinutes();t=t<10?`0`+t:t,n=n<10?`0`+n:n,r&&(r.textContent=`${t}:${n}`)}setInterval(o,1e3),o();var s=null;function c(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(e=>{s={lat:e.coords.latitude,lng:e.coords.longitude};let t=document.querySelector(`#maps-iframe`),n=document.querySelector(`#route-start`);t&&s&&(t.src=`https://maps.google.com/maps?q=${s.lat},${s.lng}&t=m&z=15&ie=UTF8&iwloc=&output=embed`),n&&(n.value=`${s.lat.toFixed(4)}, ${s.lng.toFixed(4)}`)},e=>{console.warn(`Geolocation denied or error`,e);let t=document.querySelector(`#maps-iframe`);t&&!s&&(t.src=`https://maps.google.com/maps?q=Istanbul&t=m&z=12&ie=UTF8&iwloc=&output=embed`)},{enableHighAccuracy:!0})}c();var l=`maps`,u={home:e,maps:t,music:n,phone:()=>`<div class="music-app" style="color:white; padding:40px; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center;"><h2 style="font-size:32px;">Phone Application</h2><div style="font-size:18px; margin-top:20px; color:#A0A0A0;">Dialer and Contacts would render here.</div></div>`};function d(e){if(l===e&&document.querySelector(`.app-view`))return;if(e===`music`){window.open(`https://music.youtube.com`,`_blank`),document.querySelector(`.app-view`)||d(`maps`);return}let t=document.createElement(`div`);t.className=`app-view`;let n=u[e];if(n?t.innerHTML=n():t.innerHTML=`<div style="padding:40px; text-align:center; height:100%; display:flex; justify-content:center; align-items:center; font-size:24px;">App under construction</div>`,i.appendChild(t),t.offsetWidth,t.classList.add(`active`),i.querySelectorAll(`.app-view:not(:last-child)`).forEach(e=>{e.classList.remove(`active`),setTimeout(()=>e.remove(),400)}),l=e,a.forEach(t=>{t.dataset.app===e?t.classList.add(`active`):t.classList.remove(`active`)}),e===`home`&&t.querySelectorAll(`.app-icon`).forEach(e=>{e.addEventListener(`click`,()=>d(e.dataset.app))}),e===`maps`){let e=t.querySelector(`#route-btn`),n=t.querySelector(`#open-maps-btn`),r=t.querySelector(`#route-start`),i=t.querySelector(`#route-end`),a=t.querySelector(`#maps-iframe`);s?(a.src=`https://maps.google.com/maps?q=${s.lat},${s.lng}&t=m&z=15&ie=UTF8&iwloc=&output=embed`,r.value=`${s.lat.toFixed(4)}, ${s.lng.toFixed(4)}`):c(),e.addEventListener(`click`,()=>{let e=encodeURIComponent(r.value),t=encodeURIComponent(i.value);t&&(a.src=`https://maps.google.com/maps?saddr=${e}&daddr=${t}&output=embed`)}),n.addEventListener(`click`,()=>{let e=encodeURIComponent(r.value),t=encodeURIComponent(i.value);t?window.open(`https://www.google.com/maps/dir/${e}/${t}`,`_blank`):window.open(`https://www.google.com/maps`,`_blank`)})}}a.forEach(e=>{e.addEventListener(`click`,()=>d(e.dataset.app))}),d(`maps`);