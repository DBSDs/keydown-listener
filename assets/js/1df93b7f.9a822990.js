(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{8892:function(e,n){!function(e){"use strict";var n=function(){return n=Object.assign||function(e){for(var n,t=1,l=arguments.length;t<l;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},n.apply(this,arguments)};function t(e,n,t){if(t||2===arguments.length)for(var l,r=0,o=n.length;r<o;r++)!l&&r in n||(l||(l=Array.prototype.slice.call(n,0,r)),l[r]=n[r]);return e.concat(l||Array.prototype.slice.call(n))}var l={element:"undefined"==typeof window?null:document},r=[],o=[],a=!0;e.default=function(e){var i,c;function s(n){r.includes(n.key)||(r.push(n.key),o.push(n),e.onkeydown&&e.onkeydown({keys:r,events:o}))}function u(n){var t=r.findIndex((function(e){return e===n.key}));-1!==t&&(r.splice(t,1),o.splice(t,1),e.onkeydown&&e.onkeydown({keys:r,events:o}))}a&&(e?Object.keys(l).map((function(n){void 0===e[n]&&(e[n]=l[n])})):e=n({},l),null===(i=e.element)||void 0===i||i.addEventListener("keydown",s),null===(c=e.element)||void 0===c||c.addEventListener("keyup",u),a=!1);var d={keys:r,events:o,unbind:function(){var n,t;null===(n=e.element)||void 0===n||n.removeEventListener("keydown",s),null===(t=e.element)||void 0===t||t.removeEventListener("keyup",u)}};return Object.defineProperty(d,"keys",{get:function(){return t([],r,!0)}}),Object.defineProperty(d,"events",{get:function(){return t([],o,!0)}}),d},Object.defineProperty(e,"__esModule",{value:!0})}(n)},4919:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var l=t(7378),r=t(353),o=t(3829);const a="heroBanner_c70D",i="buttons_lHLg";var c=t(8944),s=t(1884),u=t(6457);function d(e){let{children:n,fallback:t}=e;return(0,u.Z)()?l.createElement(l.Fragment,null,n?.()):t??null}var f=t(8892),y=t.n(f);const m=function(){const{siteConfig:e}=(0,r.Z)(),[n,t]=l.useState([]),[o,u]=l.useState([]);return l.createElement(d,{fallback:l.createElement("div",null,"Loading...")},(()=>{const r=y()({onkeydown:e=>{u([...e.keys])}});return l.createElement(l.Fragment,null,l.createElement("header",{className:(0,c.Z)("hero hero--primary",a)},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement("div",{className:i},l.createElement(s.Z,{className:"button button--secondary button--lg",onClick:e=>{t(r.keys)}},"\u4fdd\u5b58\u6309\u952e")))),l.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"10px"}},l.createElement("label",null,"\u6b63\u5728\u6309\u952e\uff1a",o.join("+"))),l.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"10px"}},l.createElement("label",null,"\u70b9\u51fb\u65f6\u6309\u952e\uff1a",n.join("+"))))}))};function p(){const{siteConfig:e}=(0,r.Z)();return l.createElement(o.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},l.createElement(m,null),";")}}}]);