(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{7913:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},u=r(2199),f=r(1587),c=r(7215);function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i={};function s(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(o?"%"+o:"")]=!0}}var d=a.default.forwardRef((function(e,t){var r,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,p=e.href,v=e.as,y=e.children,g=e.prefetch,b=e.passHref,h=e.replace,m=e.shallow,C=e.scroll,E=e.locale,w=e.onClick,R=e.onMouseEnter,k=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=y,d&&"string"===typeof r&&(r=a.default.createElement("a",null,r));var M,O=!1!==g,j=f.useRouter(),L=a.default.useMemo((function(){var e=u.resolveHref(j,p,!0),t=n(e,2),r=t[0],o=t[1];return{href:r,as:v?u.resolveHref(j,v):o||r}}),[j,p,v]),_=L.href,I=L.as,x=a.default.useRef(_),U=a.default.useRef(I);d&&(M=a.default.Children.only(r));var S=d?M&&"object"===typeof M&&M.ref:t,P=c.useIntersection({rootMargin:"200px"}),V=n(P,3),D=V[0],H=V[1],K=V[2],N=a.default.useCallback((function(e){U.current===I&&x.current===_||(K(),U.current=I,x.current=_),D(e),S&&("function"===typeof S?S(e):"object"===typeof S&&(S.current=e))}),[I,S,_,K,D]);a.default.useEffect((function(){var e=H&&O&&u.isLocalURL(_),t="undefined"!==typeof E?E:j&&j.locale,r=i[_+"%"+I+(t?"%"+t:"")];e&&!r&&s(j,_,I,{locale:t})}),[I,_,H,E,O,j]);var B={ref:N,onClick:function(e){d||"function"!==typeof w||w(e),d&&M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,f,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:f}))}(e,j,_,I,h,m,C,E)},onMouseEnter:function(e){d||"function"!==typeof R||R(e),d&&M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),u.isLocalURL(_)&&s(j,_,I,{priority:!0})}};if(!d||b||"a"===M.type&&!("href"in M.props)){var T="undefined"!==typeof E?E:j&&j.locale,A=j&&j.isLocaleDomain&&u.getDomainLocale(I,T,j&&j.locales,j&&j.domainLocales);B.href=A||u.addBasePath(u.addLocale(I,T,j&&j.defaultLocale))}return d?a.default.cloneElement(M,B):a.default.createElement("a",Object.assign({},k,B),r)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,l=e.disabled||!u,i=o.useRef(),s=o.useState(!1),d=n(s,2),p=d[0],v=d[1],y=o.useState(t?t.current:null),g=n(y,2),b=g[0],h=g[1],m=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),l||p||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=f.get(n):(t=f.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return f.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),f.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:b,rootMargin:r}))}),[l,b,r,p]),C=o.useCallback((function(){v(!1)}),[]);return o.useEffect((function(){if(!u&&!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&h(t.current)}),[t]),[m,p,C]};var o=r(7294),a=r(8065),u="undefined"!==typeof IntersectionObserver;var f=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(7913)},1163:function(e,t,r){e.exports=r(1587)},5934:function(e,t,r){"use strict";var n;r.d(t,{Z:function(){return s}});var o=new Uint8Array(16);function a(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var f=function(e){return"string"===typeof e&&u.test(e)},c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!f(r))throw TypeError("Stringified UUID is invalid");return r};var s=function(e,t,r){var n=(e=e||{}).random||(e.rng||a)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return i(n)}}}]);