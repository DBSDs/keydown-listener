!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).WaterMark={})}(this,(function(e){"use strict";var n=function(){return n=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},n.apply(this,arguments)};function t(e,n,t){if(t||2===arguments.length)for(var o,r=0,i=n.length;r<i;r++)!o&&r in n||(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return e.concat(o||Array.prototype.slice.call(n))}var o={element:"undefined"==typeof window?null:document},r=[],i=[],u=!0;e.default=function(e){var l,d;function f(n){!r.includes(n.key)&&n.getModifierState(n.key)&&(r.push(n.key),i.push(n),e.onkeydown&&e.onkeydown({keys:r,events:i}))}function s(n){var t=r.findIndex((function(e){return e===n.key}));-1!==t&&(r.splice(t,1),i.splice(t,1),e.onkeydown&&e.onkeydown({keys:r,events:i}))}u&&(e?Object.keys(o).map((function(n){void 0===e[n]&&(e[n]=o[n])})):e=n({},o),null===(l=e.element)||void 0===l||l.addEventListener("keydown",f),null===(d=e.element)||void 0===d||d.addEventListener("keyup",s),u=!1);var c={keys:r,events:i,unbind:function(){var n,t;null===(n=e.element)||void 0===n||n.removeEventListener("keydown",f),null===(t=e.element)||void 0===t||t.removeEventListener("keyup",s)}};return Object.defineProperty(c,"keys",{get:function(){return t([],r,!0)}}),Object.defineProperty(c,"events",{get:function(){return t([],i,!0)}}),c},Object.defineProperty(e,"__esModule",{value:!0})}));
