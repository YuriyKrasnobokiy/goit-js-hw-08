!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var i,o,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,l=setTimeout(h,t),s?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(S(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return d?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,m&&i?b(e):(i=o=void 0,u)}function T(){var e=p(),n=S(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return O(f);if(d)return l=setTimeout(h,t),b(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=f=o=l=void 0},T.flush=function(){return void 0===l?u:w(p())},T}function y(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=u.test(e);return r||l.test(e)?f(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),S="feedback-form-state",h=JSON.parse(localStorage.getItem(S));O.addEventListener("input",n((function(){var e={email:O.elements.email.value,message:O.elements.message.value};localStorage.setItem(S,JSON.stringify(e))}),500)),h&&(O.elements.email.value=h.email,O.elements.message.value=h.message),O.addEventListener("submit",(function(e){""!==O.elements.email.value&&""!==O.elements.message.value||alert("Please fill in all the fields!");e.preventDefault(),console.log(JSON.parse(localStorage.getItem(S))),O.reset(),localStorage.removeItem(S)}))}();
//# sourceMappingURL=03-feedback.0caf9e1b.js.map
