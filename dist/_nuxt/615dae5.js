(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{221:function(t,n,e){t.exports=e.p+"img/logo-elemes.44c76ea.png"},222:function(t,n,e){t.exports=e.p+"img/header-image-desktop.8cfa013.png"},223:function(t,n,e){t.exports=e.p+"img/header-image-mobile.511660a.png"},224:function(t,n,e){"use strict";var r=e(12),o=e(0),c=e(3),f=e(101),l=e(17),m=e(13),d=e(169),h=e(34),x=e(100),v=e(168),I=e(5),_=e(68).f,N=e(28).f,k=e(16).f,E=e(225),y=e(226).trim,w="Number",S=o.Number,O=S.prototype,A=o.TypeError,C=c("".slice),T=c("".charCodeAt),F=function(t){var n=v(t,"number");return"bigint"==typeof n?n:j(n)},j=function(t){var n,e,r,o,c,f,l,code,m=v(t,"number");if(x(m))throw A("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=y(m),43===(n=T(m,0))||45===n){if(88===(e=T(m,2))||120===e)return NaN}else if(48===n){switch(T(m,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+m}for(f=(c=C(m,2)).length,l=0;l<f;l++)if((code=T(c,l))<48||code>o)return NaN;return parseInt(c,r)}return+m};if(f(w,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var M,R=function(t){var n=arguments.length<1?0:S(F(t)),e=this;return h(O,e)&&I((function(){E(e)}))?d(Object(n),e,R):n},z=r?_(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;z.length>L;L++)m(S,M=z[L])&&!m(R,M)&&k(R,M,N(S,M));R.prototype=O,O.constructor=R,l(o,w,R)}},225:function(t,n,e){var r=e(3);t.exports=r(1..valueOf)},226:function(t,n,e){var r=e(3),o=e(21),c=e(11),f=e(227),l=r("".replace),m="["+f+"]",d=RegExp("^"+m+m+"*"),h=RegExp(m+m+"*$"),x=function(t){return function(n){var e=c(o(n));return 1&t&&(e=l(e,d,"")),2&t&&(e=l(e,h,"")),e}};t.exports={start:x(1),end:x(2),trim:x(3)}},227:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},228:function(t,n,e){"use strict";e.r(n);e(224);var r={props:{rating:{type:Number,default:0}},data:function(){return{check:!0,active:"text-yellow-300",inactive:"text-gray-300",maxStar:5}},computed:{remainingStars:function(){return this.maxStar-this.rating}}},o=e(43),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mt-5 gap-0"},t._l(t.maxStar,(function(n,r){return e("font-awesome-icon",{key:r,class:[r<t.rating?t.active:t.inactive],attrs:{icon:["fas","star"]}})})),1)}),[],!1,null,null,null);n.default=component.exports},235:function(t,n,e){var map={"./bg-pattern-transparent.png":236,"./bg-pattern.png":237,"./cookies-thumbnail.png":238,"./donut-milk-thumbnail.png":239,"./donut-unicorn-thumbnail.png":240,"./header-image-desktop.png":222,"./header-image-mobile.png":223,"./kathi-kebab-thumbnail.png":241,"./kebab-thumbnail.png":242,"./logo-elemes.png":221,"./pepperoni-thumbnail.png":243,"./pizza-thumbnail.png":244,"./sushi-thumbnail.png":245};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=235},236:function(t,n,e){t.exports=e.p+"img/bg-pattern-transparent.88e529c.png"},237:function(t,n,e){t.exports=e.p+"img/bg-pattern.d657928.png"},238:function(t,n,e){t.exports=e.p+"img/cookies-thumbnail.349f96f.png"},239:function(t,n,e){t.exports=e.p+"img/donut-milk-thumbnail.37e7556.png"},240:function(t,n,e){t.exports=e.p+"img/donut-unicorn-thumbnail.a38e493.png"},241:function(t,n,e){t.exports=e.p+"img/kathi-kebab-thumbnail.9666d40.png"},242:function(t,n,e){t.exports=e.p+"img/kebab-thumbnail.f4926d2.png"},243:function(t,n,e){t.exports=e.p+"img/pepperoni-thumbnail.ff536fd.png"},244:function(t,n,e){t.exports=e.p+"img/pizza-thumbnail.2662bf3.png"},245:function(t,n,e){t.exports=e.p+"img/sushi-thumbnail.da518ac.png"},247:function(t,n,e){"use strict";e.r(n);var r={components:{StarRating:e(228).default},props:{dataItem:{type:Object,default:function(){}}}},o=e(43),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{class:t.dataItem.background_color+" rounded-xl px-5 py-5 my-3 shadow-smooth"},[r("div",{staticClass:"mb-5"},[r("img",{staticClass:"w-24 h-24",attrs:{src:e(235)("./"+t.dataItem.url_image),alt:"thumbnail"}})]),t._v(" "),r("p",{staticClass:"font-bold text-xl text-gray-800"},[t._v(t._s(t.dataItem.name))]),t._v(" "),r("p",{staticClass:"font-semibold text-green-primary"},[t._v(t._s(t.dataItem.category))]),t._v(" "),r("star-rating",{attrs:{rating:t.dataItem.rating}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);