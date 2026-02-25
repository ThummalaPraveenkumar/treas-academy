(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75254,e=>{"use strict";var t=e.i(71645);let a=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,a)=>a?a.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},s=(...e)=>e.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim();var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,t.forwardRef)(({color:e="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:o="",children:n,iconNode:d,...c},m)=>(0,t.createElement)("svg",{ref:m,...r,width:a,height:a,stroke:e,strokeWidth:l?24*Number(i)/Number(a):i,className:s("lucide",o),...!n&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,a])=>(0,t.createElement)(e,a)),...Array.isArray(n)?n:[n]])),l=(e,r)=>{let l=(0,t.forwardRef)(({className:l,...o},n)=>(0,t.createElement)(i,{ref:n,iconNode:r,className:s(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...o}));return l.displayName=a(e),l};e.s(["default",()=>l],75254)},63488,e=>{"use strict";let t=(0,e.i(75254).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["Mail",()=>t],63488)},84614,e=>{"use strict";let t=(0,e.i(75254).default)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);e.s(["User",()=>t],84614)},43432,e=>{"use strict";let t=(0,e.i(75254).default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);e.s(["Phone",()=>t],43432)},71689,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",()=>t],71689)},69139,e=>{"use strict";let t,a;var s,r=e.i(43476),i=e.i(71645),l=e.i(75254);let o=(0,l.default)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var n=e.i(63488),d=e.i(84614),c=e.i(43432);let m=(0,l.default)("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]),u=(0,l.default)("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]);var p=e.i(71689),h=e.i(22016);let f={data:""},x=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,g=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,b=(e,t)=>{let a="",s="",r="";for(let i in e){let l=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+l+";":s+="f"==i[1]?b(l,i):i+"{"+b(l,"k"==i[1]?"":t)+"}":"object"==typeof l?s+=b(l,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=l&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=b.p?b.p(i,l):i+":"+l+";")}return a+(t&&r?t+"{"+r+"}":r)+s},v={},j=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+j(e[a]);return t}return e};function w(e){let t,a,s=this||{},r=e.call?e(s.p):e;return((e,t,a,s,r)=>{var i;let l=j(e),o=v[l]||(v[l]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(l));if(!v[o]){let t=l!==e?e:(e=>{let t,a,s=[{}];for(;t=x.exec(e.replace(g,""));)t[4]?s.shift():t[3]?(a=t[3].replace(y," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(y," ").trim();return s[0]})(e);v[o]=b(r?{["@keyframes "+o]:t}:t,a?"":"."+o)}let n=a&&v.g?v.g:null;return a&&(v.g=v[o]),i=v[o],n?t.data=t.data.replace(n,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),o})(r.unshift?r.raw?(t=[].slice.call(arguments,1),a=s.p,r.reduce((e,s,r)=>{let i=t[r];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":b(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(s.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||f})(s.target),s.g,s.o,s.k)}w.bind({g:1});let N,k,C,E=w.bind({k:1});function A(e,t){let a=this||{};return function(){let s=arguments;function r(i,l){let o=Object.assign({},i),n=o.className||r.className;a.p=Object.assign({theme:k&&k()},o),a.o=/ *go\d+/.test(n),o.className=w.apply(a,s)+(n?" "+n:""),t&&(o.ref=l);let d=e;return e[0]&&(d=o.as||e,delete o.as),C&&d[0]&&C(o),N(d,o)}return t?t(r):r}}var z=(e,t)=>"function"==typeof e?e(t):e,M=(t=0,()=>(++t).toString()),$=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},O="default",P=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return P(e,{type:+!!e.toasts.find(e=>e.id===s.id),toast:s});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},S=[],T={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},D={},L=(e,t=O)=>{D[t]=P(D[t]||T,e),S.forEach(([e,a])=>{e===t&&a(D[t])})},I=e=>Object.keys(D).forEach(t=>L(e,t)),H=(e=O)=>t=>{L(t,e)},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},q=e=>(t,a)=>{let s,r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||M()}))(t,e,a);return H(r.toasterId||(s=r.id,Object.keys(D).find(e=>D[e].toasts.some(e=>e.id===s))))({type:2,toast:r}),r.id},B=(e,t)=>q("blank")(e,t);B.error=q("error"),B.success=q("success"),B.loading=q("loading"),B.custom=q("custom"),B.dismiss=(e,t)=>{let a={type:3,toastId:e};t?H(t)(a):I(a)},B.dismissAll=e=>B.dismiss(void 0,e),B.remove=(e,t)=>{let a={type:4,toastId:e};t?H(t)(a):I(a)},B.removeAll=e=>B.remove(void 0,e),B.promise=(e,t,a)=>{let s=B.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?z(t.success,e):void 0;return r?B.success(r,{id:s,...a,...null==a?void 0:a.success}):B.dismiss(s),e}).catch(e=>{let r=t.error?z(t.error,e):void 0;r?B.error(r,{id:s,...a,...null==a?void 0:a.error}):B.dismiss(s)}),e};var U=1e3,_=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Y=A("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${W} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,K=E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Z=A("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${K} 1s linear infinite;
`,V=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,J=E`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,G=A("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${J} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=A("div")`
  position: absolute;
`,X=A("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=A("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ea=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?i.createElement(et,null,t):t:"blank"===a?null:i.createElement(X,null,i.createElement(Z,{...s}),"loading"!==a&&i.createElement(Q,null,"error"===a?i.createElement(Y,{...s}):i.createElement(G,{...s})))},es=A("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,er=A("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ei=i.memo(({toast:e,position:t,style:a,children:s})=>{let r=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[s,r]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${E(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},l=i.createElement(ea,{toast:e}),o=i.createElement(er,{...e.ariaProps},z(e.message,e));return i.createElement(es,{className:e.className,style:{...r,...a,...e.style}},"function"==typeof s?s({icon:l,message:o}):i.createElement(i.Fragment,null,l,o))});s=i.createElement,b.p=void 0,N=s,k=void 0,C=void 0;var el=({id:e,className:t,style:a,onHeightUpdate:s,children:r})=>{let l=i.useCallback(t=>{if(t){let a=()=>{s(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return i.createElement("div",{ref:l,className:t,style:a},r)},eo=w`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,en=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:r,toasterId:l,containerStyle:o,containerClassName:n})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:a,pausedAt:s}=((e={},t=O)=>{let[a,s]=(0,i.useState)(D[t]||T),r=(0,i.useRef)(D[t]);(0,i.useEffect)(()=>(r.current!==D[t]&&s(D[t]),S.push([t,s]),()=>{let e=S.findIndex(([e])=>e===t);e>-1&&S.splice(e,1)}),[t]);let l=a.toasts.map(t=>{var a,s,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...a,toasts:l}})(e,t),r=(0,i.useRef)(new Map).current,l=(0,i.useCallback)((e,t=U)=>{if(r.has(e))return;let a=setTimeout(()=>{r.delete(e),o({type:4,toastId:e})},t);r.set(e,a)},[]);(0,i.useEffect)(()=>{if(s)return;let e=Date.now(),r=a.map(a=>{if(a.duration===1/0)return;let s=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(s<0){a.visible&&B.dismiss(a.id);return}return setTimeout(()=>B.dismiss(a.id,t),s)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[a,s,t]);let o=(0,i.useCallback)(H(t),[t]),n=(0,i.useCallback)(()=>{o({type:5,time:Date.now()})},[o]),d=(0,i.useCallback)((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),c=(0,i.useCallback)(()=>{s&&o({type:6,time:Date.now()})},[s,o]),m=(0,i.useCallback)((e,t)=>{let{reverseOrder:s=!1,gutter:r=8,defaultPosition:i}=t||{},l=a.filter(t=>(t.position||i)===(e.position||i)&&t.height),o=l.findIndex(t=>t.id===e.id),n=l.filter((e,t)=>t<o&&e.visible).length;return l.filter(e=>e.visible).slice(...s?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+r,0)},[a]);return(0,i.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)l(e.id,e.removeDelay);else{let t=r.get(e.id);t&&(clearTimeout(t),r.delete(e.id))}})},[a,l]),{toasts:a,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:m}}})(a,l);return i.createElement("div",{"data-rht-toaster":l||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(a=>{let l,o,n=a.position||t,d=c.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}),m=(l=n.includes("top"),o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(l?1:-1)}px)`,...l?{top:0}:{bottom:0},...o});return i.createElement(el,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?eo:"",style:m},"custom"===a.type?z(a.message,a):r?r(a):i.createElement(ei,{toast:a,position:n}))}))};function ed(){let[e,t]=(0,i.useState)({name:"",email:"",phone:"",message:""}),[a,s]=(0,i.useState)(!1),l=a=>{t({...e,[a.target.name]:a.target.value})},f=async a=>{a.preventDefault(),s(!0);try{if(!e.name.trim()){B.error("Please enter your name"),s(!1);return}if(!e.email.trim()||!/\S+@\S+\.\S+/.test(e.email)){B.error("Please enter a valid email address"),s(!1);return}if(!e.message.trim()){B.error("Please enter your message"),s(!1);return}let a=B.loading("Sending your message..."),r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),i=await r.json();B.dismiss(a),r.ok&&i.success?(B.success("✅ Message sent successfully! We will contact you soon."),t({name:"",email:"",phone:"",message:""})):B.error("❌ "+(i.message||"Failed to send message. Please try again."))}catch(e){console.error("Error:",e),B.error("❌ An error occurred. Please try again later.")}finally{s(!1)}};return(0,r.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,r.jsx)(en,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff"},success:{duration:3e3,iconTheme:{primary:"#10b981",secondary:"#fff"}},error:{duration:4e3,iconTheme:{primary:"#ef4444",secondary:"#fff"}},loading:{duration:1/0}}}),(0,r.jsx)("div",{className:"bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)(h.default,{href:"/",className:"inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors",children:[(0,r.jsx)(p.ArrowLeft,{size:20,className:"mr-2"}),"Back to Home"]}),(0,r.jsx)("h1",{className:"text-4xl md:text-5xl font-bold mb-6",children:"Contact Us"}),(0,r.jsx)("p",{className:"text-xl max-w-3xl",children:"Have questions about our programs? Need guidance? We're here to help you with all your early childhood education needs."})]})}),(0,r.jsx)("div",{className:"container mx-auto px-4 py-16",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[(0,r.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-6 md:p-8",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Send us a Message"}),(0,r.jsxs)("form",{onSubmit:f,className:"space-y-6",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(d.User,{className:"absolute left-3 top-3 text-gray-400",size:20}),(0,r.jsx)("input",{type:"text",name:"name",value:e.name,onChange:l,required:!0,className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all",placeholder:"Your name"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(n.Mail,{className:"absolute left-3 top-3 text-gray-400",size:20}),(0,r.jsx)("input",{type:"email",name:"email",value:e.email,onChange:l,required:!0,className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all",placeholder:"your.email@example.com"})]})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number (Optional)"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(c.Phone,{className:"absolute left-3 top-3 text-gray-400",size:20}),(0,r.jsx)("input",{type:"tel",name:"phone",value:e.phone,onChange:l,className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all",placeholder:"+91 9606051069"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Your Message *"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(m,{className:"absolute left-3 top-3 text-gray-400",size:20}),(0,r.jsx)("textarea",{name:"message",value:e.message,onChange:l,required:!0,rows:5,className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all",placeholder:"Tell us how we can help you..."})]})]}),(0,r.jsx)("button",{type:"submit",disabled:a,className:"w-full bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center",children:a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Sending..."]}):(0,r.jsxs)(r.Fragment,{children:["Send Message ",(0,r.jsx)(o,{className:"ml-2",size:20})]})})]})]}),(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-6 md:p-8",children:[(0,r.jsx)("h3",{className:"text-xl font-bold text-gray-800 mb-6",children:"Contact Information"}),(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"flex items-start",children:[(0,r.jsx)("div",{className:"p-3 bg-teal-50 rounded-lg mr-4",children:(0,r.jsx)(n.Mail,{className:"text-teal-600",size:24})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"font-semibold text-gray-800",children:"Email"}),(0,r.jsx)("p",{className:"text-gray-600",children:"contact@treaacademy.com"}),(0,r.jsx)("p",{className:"text-gray-500 text-sm mt-1",children:"Typically replies within 24 hours"})]})]}),(0,r.jsxs)("div",{className:"flex items-start",children:[(0,r.jsx)("div",{className:"p-3 bg-teal-50 rounded-lg mr-4",children:(0,r.jsx)(c.Phone,{className:"text-teal-600",size:24})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"font-semibold text-gray-800",children:"Phone"}),(0,r.jsx)("p",{className:"text-gray-600",children:"+91 9606051069"}),(0,r.jsx)("p",{className:"text-gray-500 text-sm mt-1",children:"Mon-Fri, 9AM-6PM"})]})]}),(0,r.jsxs)("div",{className:"flex items-start",children:[(0,r.jsx)("div",{className:"p-3 bg-teal-50 rounded-lg mr-4",children:(0,r.jsx)(u,{className:"text-teal-600",size:24})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"font-semibold text-gray-800",children:"Location"}),(0,r.jsx)("p",{className:"text-gray-600",children:"Bengaluru, Karnataka"}),(0,r.jsx)("p",{className:"text-gray-500 text-sm mt-1",children:"Available for in-person consultations"})]})]})]})]}),(0,r.jsxs)("div",{className:"bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl p-6 md:p-8",children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Need Immediate Assistance?"}),(0,r.jsx)("p",{className:"mb-6",children:"Book a consultation call with our experts for personalized guidance."}),(0,r.jsx)(h.default,{href:"/book-consultation",className:"inline-block bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors",children:"Book a Consultation"})]}),(0,r.jsxs)("div",{className:"bg-gray-50 rounded-2xl p-6 md:p-8",children:[(0,r.jsx)("h3",{className:"text-xl font-bold text-gray-800 mb-4",children:"What happens after you contact us?"}),(0,r.jsxs)("ul",{className:"space-y-4",children:[(0,r.jsxs)("li",{className:"flex items-start",children:[(0,r.jsx)("div",{className:"w-6 h-6 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold",children:"1"}),(0,r.jsx)("span",{className:"text-gray-600",children:"You'll receive a confirmation email within minutes"})]}),(0,r.jsxs)("li",{className:"flex items-start",children:[(0,r.jsx)("div",{className:"w-6 h-6 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold",children:"2"}),(0,r.jsx)("span",{className:"text-gray-600",children:"Our team reviews your query and assigns the right expert"})]}),(0,r.jsxs)("li",{className:"flex items-start",children:[(0,r.jsx)("div",{className:"w-6 h-6 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold",children:"3"}),(0,r.jsx)("span",{className:"text-gray-600",children:"You'll get a personalized response within 24 hours"})]})]})]})]})]})})]})}e.s(["default",()=>ed],69139)}]);