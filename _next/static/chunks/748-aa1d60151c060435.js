"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{6893:function(e,t,n){n.d(t,{Ihx:function(){return o}});var r=n(8357);function o(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}}]})(e)}},9468:function(e,t,n){n.d(t,{R:function(){return eF}});var r,o=n(7294),i=n.t(o,2);function a(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add(()=>e.removeEventListener(n,r,o))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(n))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let n=setTimeout(...e);return t.add(()=>clearTimeout(n))},microTask(...e){var n;let r={current:!0};return n=()=>{r.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(n):Promise.resolve().then(n).catch(e=>setTimeout(()=>{throw e})),t.add(()=>{r.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(e){let t=a();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let r of e.splice(n,1))r()}),dispose(){for(let t of e.splice(0))t()}};return t}function l(){let[e]=(0,o.useState)(a);return(0,o.useEffect)(()=>()=>e.dispose(),[e]),e}var u=Object.defineProperty,s=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t,n)=>(s(e,"symbol"!=typeof t?t+"":t,n),n);let d=new class{constructor(){c(this,"current",this.detect()),c(this,"handoffState","pending"),c(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},f=(e,t)=>{d.isServer?(0,o.useEffect)(e,t):(0,o.useLayoutEffect)(e,t)},p=null!=(r=o.useId)?r:function(){let e=function(){let e,t=(e="undefined"==typeof document,(0,i.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,r]=o.useState(d.isHandoffComplete);return n&&!1===d.isHandoffComplete&&r(!1),o.useEffect(()=>{!0!==n&&r(!0)},[n]),o.useEffect(()=>d.handoff(),[]),!t&&n}(),[t,n]=o.useState(e?()=>d.nextId():null);return f(()=>{null===t&&n(d.nextId())},[t]),null!=t?""+t:void 0};function v(e){let t=(0,o.useRef)(e);return f(()=>{t.current=e},[e]),t}function b(e,t){let[n,r]=(0,o.useState)(e),i=v(e);return f(()=>r(i.current),[i,r,...t]),n}let m=function(e){let t=v(e);return o.useCallback((...e)=>t.current(...e),[t])},h=Symbol();function g(...e){let t=(0,o.useRef)(e);(0,o.useEffect)(()=>{t.current=e},[e]);let n=m(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[h]))?void 0:n}function x(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}function y(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,y),o}var O,S,E=((O=E||{})[O.None=0]="None",O[O.RenderStrategy=1]="RenderStrategy",O[O.Static=2]="Static",O),w=((S=w||{})[S.Unmount=0]="Unmount",S[S.Hidden=1]="Hidden",S);function L({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:a}){let l=I(t,e);if(i)return R(l,n,r,a);let u=null!=o?o:0;if(2&u){let{static:s=!1,...c}=l;if(s)return R(c,n,r,a)}if(1&u){let{unmount:d=!0,...f}=l;return y(d?0:1,{0:()=>null,1:()=>R({...f,hidden:!0,style:{display:"none"}},n,r,a)})}return R(l,n,r,a)}function R(e,t={},n,r){let{as:i=n,children:a,refName:l="ref",...u}=D(e,["unmount","static"]),s=void 0!==e.ref?{[l]:e.ref}:{},c="function"==typeof a?a(t):a;"className"in u&&u.className&&"function"==typeof u.className&&(u.className=u.className(t));let d={};if(t){let f=!1,p=[];for(let[v,b]of Object.entries(t))"boolean"==typeof b&&(f=!0),!0===b&&p.push(v);f&&(d["data-headlessui-state"]=p.join(" "))}if(i===o.Fragment&&Object.keys(P(u)).length>0){if(!(0,o.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let m=c.props,h="function"==typeof(null==m?void 0:m.className)?(...e)=>x(null==m?void 0:m.className(...e),u.className):x(null==m?void 0:m.className,u.className);return(0,o.cloneElement)(c,Object.assign({},I(c.props,P(D(u,["ref"]))),d,s,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,s.ref),h?{className:h}:{}))}return(0,o.createElement)(i,Object.assign({},D(u,["ref"]),i!==o.Fragment&&s,i!==o.Fragment&&d),c)}function I(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&"function"==typeof r[o]?(null!=n[o]||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let i in n)Object.assign(t,{[i](e,...t){let r=n[i];for(let o of r){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;o(e,...t)}}});return t}function T(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function P(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function D(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}var F,N,C=((F=C||{}).Space=" ",F.Enter="Enter",F.Escape="Escape",F.Backspace="Backspace",F.Delete="Delete",F.ArrowLeft="ArrowLeft",F.ArrowUp="ArrowUp",F.ArrowRight="ArrowRight",F.ArrowDown="ArrowDown",F.Home="Home",F.End="End",F.PageUp="PageUp",F.PageDown="PageDown",F.Tab="Tab",F),A=((N=A||{})[N.First=0]="First",N[N.Previous=1]="Previous",N[N.Next=2]="Next",N[N.Last=3]="Last",N[N.Specific=4]="Specific",N[N.Nothing=5]="Nothing",N);function k(e){return d.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let M=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var j,H,U,$,B=((j=B||{})[j.First=1]="First",j[j.Previous=2]="Previous",j[j.Next=4]="Next",j[j.Last=8]="Last",j[j.WrapAround=16]="WrapAround",j[j.NoScroll=32]="NoScroll",j),q=((H=q||{})[H.Error=0]="Error",H[H.Overflow=1]="Overflow",H[H.Success=2]="Success",H[H.Underflow=3]="Underflow",H),Q=((U=Q||{})[U.Previous=-1]="Previous",U[U.Next=1]="Next",U),V=(($=V||{})[$.Strict=0]="Strict",$[$.Loose=1]="Loose",$);function _(e,t=0){var n;return e!==(null==(n=k(e))?void 0:n.body)&&y(t,{0:()=>e.matches(M),1(){let t=e;for(;null!==t;){if(t.matches(M))return!0;t=t.parentElement}return!1}})}var K,W=((K=W||{})[K.Keyboard=0]="Keyboard",K[K.Mouse=1]="Mouse",K);"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let z=(0,o.createContext)(null);z.displayName="OpenClosedContext";var G=((J=G||{})[J.Open=1]="Open",J[J.Closed=2]="Closed",J[J.Closing=4]="Closing",J[J.Opening=8]="Opening",J);function Z({value:e,children:t}){return o.createElement(z.Provider,{value:e},t)}function Y(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function X(e,t,n){let r=v(t);(0,o.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}var J,ee,et=((ee=et||{})[ee.None=1]="None",ee[ee.Focusable=2]="Focusable",ee[ee.Hidden=4]="Hidden",ee);let en=T(function(e,t){let{features:n=1,...r}=e;return L({ourProps:{ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});function er(e={},t=null,n=[]){for(let[r,o]of Object.entries(e))ei(n,eo(t,r),o);return n}function eo(e,t){return e?e+"["+t+"]":t}function ei(e,t,n){if(Array.isArray(n))for(let[r,o]of n.entries())ei(e,eo(t,r.toString()),o);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):er(n,t,e)}function ea(e){return[e.screenX,e.screenY]}let el=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function eu(e){var t,n;let r=null!=(t=e.innerText)?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return r;let i=!1;for(let a of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),i=!0;let l=i?null!=(n=o.innerText)?n:"":r;return el.test(l)&&(l=l.replace(el,"")),l}var es,ec,ed,ef,ep=((es=ep||{})[es.Open=0]="Open",es[es.Closed=1]="Closed",es),ev=((ec=ev||{})[ec.Single=0]="Single",ec[ec.Multi=1]="Multi",ec),eb=((ed=eb||{})[ed.Pointer=0]="Pointer",ed[ed.Other=1]="Other",ed),em=((ef=em||{})[ef.OpenListbox=0]="OpenListbox",ef[ef.CloseListbox=1]="CloseListbox",ef[ef.GoToOption=2]="GoToOption",ef[ef.Search=3]="Search",ef[ef.ClearSearch=4]="ClearSearch",ef[ef.RegisterOption=5]="RegisterOption",ef[ef.UnregisterOption=6]="UnregisterOption",ef[ef.RegisterLabel=7]="RegisterLabel",ef);function eh(e,t=e=>e){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(t(e.options.slice()),e=>e.dataRef.current.domRef.current),o=n?r.indexOf(n):null;return -1===o&&(o=null),{options:r,activeOptionIndex:o}}let eg={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(e=>n(e.dataRef.current.value));return -1!==r&&(t=r),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=eh(e),o=function(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=null!=r?r:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex(e=>!t.resolveDisabled(e));case 1:{let r=n.slice().reverse().findIndex((e,n,r)=>(-1===o||!(r.length-n-1>=o))&&!t.resolveDisabled(e));return -1===r?r:n.length-1-r}case 2:return n.findIndex((e,n)=>!(n<=o)&&!t.resolveDisabled(e));case 3:{let i=n.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===i?i:n.length-1-i}case 4:return n.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===i?r:i}(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:o,activationTrigger:null!=(n=t.trigger)?n:1}},3(e,t){if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))}),i=o?e.options.indexOf(o):-1;return -1===i||i===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:i,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5(e,t){let n={id:t.id,dataRef:t.dataRef},r=eh(e,e=>[...e,n]);return null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6(e,t){let n=eh(e,e=>{let n=e.findIndex(e=>e.id===t.id);return -1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},ex=(0,o.createContext)(null);function ey(e){let t=(0,o.useContext)(ex);if(null===t){let n=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ey),n}return t}ex.displayName="ListboxActionsContext";let eO=(0,o.createContext)(null);function eS(e){let t=(0,o.useContext)(eO);if(null===t){let n=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,eS),n}return t}function eE(e,t){return y(t.type,eg,e,t)}eO.displayName="ListboxDataContext";let ew=o.Fragment,eL=E.RenderStrategy|E.Static,eR=T(function(e,t){let{value:n,defaultValue:r,form:i,name:a,onChange:u,by:s=(e,t)=>e===t,disabled:c=!1,horizontal:d=!1,multiple:p=!1,...b}=e,h=d?"horizontal":"vertical",x=g(t),[O=p?[]:void 0,S]=function(e,t,n){let[r,i]=(0,o.useState)(n),a=void 0!==e,l=(0,o.useRef)(a),u=(0,o.useRef)(!1),s=(0,o.useRef)(!1);return!a||l.current||u.current?a||!l.current||s.current||(s.current=!0,l.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,l.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[a?e:r,m(e=>(a||i(e),null==t?void 0:t(e)))]}(n,u,r),[E,w]=(0,o.useReducer)(eE,{dataRef:(0,o.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),R=(0,o.useRef)({static:!1,hold:!1}),I=(0,o.useRef)(null),T=(0,o.useRef)(null),D=(0,o.useRef)(null),F=m("string"==typeof s?(e,t)=>(null==e?void 0:e[s])===(null==t?void 0:t[s]):s),N=(0,o.useCallback)(e=>y(C.mode,{1:()=>O.some(t=>F(t,e)),0:()=>F(O,e)}),[O]),C=(0,o.useMemo)(()=>({...E,value:O,disabled:c,mode:p?1:0,orientation:h,compare:F,isSelected:N,optionsPropsRef:R,labelRef:I,buttonRef:T,optionsRef:D}),[O,c,p,E]);f(()=>{E.dataRef.current=C},[C]),function(e,t,n=!0){var r,i;let a=(0,o.useRef)(!1);function l(n,r){if(!a.current||n.defaultPrevented)return;let o=r(n);if(null===o||!o.getRootNode().contains(o)||!o.isConnected)return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e);for(let l of i){if(null===l)continue;let u=l instanceof HTMLElement?l:l.current;if(null!=u&&u.contains(o)||n.composed&&n.composedPath().includes(u))return}return _(o,V.Loose)||-1===o.tabIndex||n.preventDefault(),t(n,o)}(0,o.useEffect)(()=>{requestAnimationFrame(()=>{a.current=n})},[n]);let u=(0,o.useRef)(null),s;X("pointerdown",e=>{var t,n;a.current&&(u.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),X("mousedown",e=>{var t,n;a.current&&(u.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),X("click",e=>{u.current&&(l(e,()=>u.current),u.current=null)},!0),X("touchend",e=>l(e,()=>e.target instanceof HTMLElement?e.target:null),!0),r="blur",s=v(e=>l(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null)),(0,o.useEffect)(()=>{function e(e){s.current(e)}return window.addEventListener(r,e,!0),()=>window.removeEventListener(r,e,!0)},[r,!0])}([C.buttonRef,C.optionsRef],(e,t)=>{var n;w({type:1}),_(t,V.Loose)||(e.preventDefault(),null==(n=C.buttonRef.current)||n.focus())},0===C.listboxState);let k=(0,o.useMemo)(()=>({open:0===C.listboxState,disabled:c,value:O}),[C,c,O]),M=m(e=>{let t=C.options.find(t=>t.id===e);t&&Q(t.dataRef.current.value)}),j=m(()=>{if(null!==C.activeOptionIndex){let{dataRef:e,id:t}=C.options[C.activeOptionIndex];Q(e.current.value),w({type:2,focus:A.Specific,id:t})}}),H=m(()=>w({type:0})),U=m(()=>w({type:1})),$=m((e,t,n)=>e===A.Specific?w({type:2,focus:A.Specific,id:t,trigger:n}):w({type:2,focus:e,trigger:n})),B=m((e,t)=>(w({type:5,id:e,dataRef:t}),()=>w({type:6,id:e}))),q=m(e=>(w({type:7,id:e}),()=>w({type:7,id:null}))),Q=m(e=>y(C.mode,{0:()=>null==S?void 0:S(e),1(){let t=C.value.slice(),n=t.findIndex(t=>F(t,e));return -1===n?t.push(e):t.splice(n,1),null==S?void 0:S(t)}})),K=m(e=>w({type:3,value:e})),W=m(()=>w({type:4})),z=(0,o.useMemo)(()=>({onChange:Q,registerOption:B,registerLabel:q,goToOption:$,closeListbox:U,openListbox:H,selectActiveOption:j,selectOption:M,search:K,clearSearch:W}),[]),Y=(0,o.useRef)(null),J=l();return(0,o.useEffect)(()=>{Y.current&&void 0!==r&&J.addEventListener(Y.current,"reset",()=>{null==S||S(r)})},[Y,S]),o.createElement(ex.Provider,{value:z},o.createElement(eO.Provider,{value:C},o.createElement(Z,{value:y(C.listboxState,{0:G.Open,1:G.Closed})},null!=a&&null!=O&&er({[a]:O}).map(([e,t],n)=>o.createElement(en,{features:et.Hidden,ref:0===n?e=>{var t;Y.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...P({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,name:e,value:t})})),L({ourProps:{ref:x},theirProps:b,slot:k,defaultTag:ew,name:"Listbox"}))))}),eI=T(function(e,t){var n;let r=p(),{id:i=`headlessui-listbox-button-${r}`,...a}=e,u=eS("Listbox.Button"),s=ey("Listbox.Button"),c=g(u.buttonRef,t),d=l(),v=m(e=>{switch(e.key){case C.Space:case C.Enter:case C.ArrowDown:e.preventDefault(),s.openListbox(),d.nextFrame(()=>{u.value||s.goToOption(A.First)});break;case C.ArrowUp:e.preventDefault(),s.openListbox(),d.nextFrame(()=>{u.value||s.goToOption(A.Last)})}}),h=m(e=>{e.key===C.Space&&e.preventDefault()}),x=m(e=>{if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(e.currentTarget))return e.preventDefault();0===u.listboxState?(s.closeListbox(),d.nextFrame(()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(e.preventDefault(),s.openListbox())}),y=b(()=>{if(u.labelId)return[u.labelId,i].join(" ")},[u.labelId,i]),O=(0,o.useMemo)(()=>({open:0===u.listboxState,disabled:u.disabled,value:u.value}),[u]),S={ref:c,id:i,type:function(e,t){let[n,r]=(0,o.useState)(()=>Y(e));return f(()=>{r(Y(e))},[e.type,e.as]),f(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,u.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(n=u.optionsRef.current)?void 0:n.id,"aria-expanded":0===u.listboxState,"aria-labelledby":y,disabled:u.disabled,onKeyDown:v,onKeyUp:h,onClick:x};return L({ourProps:S,theirProps:a,slot:O,defaultTag:"button",name:"Listbox.Button"})}),eT=T(function(e,t){let n=p(),{id:r=`headlessui-listbox-label-${n}`,...i}=e,a=eS("Listbox.Label"),l=ey("Listbox.Label"),u=g(a.labelRef,t);f(()=>l.registerLabel(r),[r]);let s=m(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})});return L({ourProps:{ref:u,id:r,onClick:s},theirProps:i,slot:(0,o.useMemo)(()=>({open:0===a.listboxState,disabled:a.disabled}),[a]),defaultTag:"label",name:"Listbox.Label"})}),eP=T(function(e,t){var n;let r=p(),{id:i=`headlessui-listbox-options-${r}`,...u}=e,s=eS("Listbox.Options"),c=ey("Listbox.Options"),d=g(s.optionsRef,t),f=l(),v=l(),h=(0,o.useContext)(z),x=null!==h?(h&G.Open)===G.Open:0===s.listboxState;(0,o.useEffect)(()=>{var e;let t=s.optionsRef.current;t&&0===s.listboxState&&t!==(null==(e=k(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})},[s.listboxState,s.optionsRef]);let O=m(e=>{switch(v.dispose(),e.key){case C.Space:if(""!==s.searchQuery)return e.preventDefault(),e.stopPropagation(),c.search(e.key);case C.Enter:if(e.preventDefault(),e.stopPropagation(),null!==s.activeOptionIndex){let{dataRef:t}=s.options[s.activeOptionIndex];c.onChange(t.current.value)}0===s.mode&&(c.closeListbox(),a().nextFrame(()=>{var e;return null==(e=s.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case y(s.orientation,{vertical:C.ArrowDown,horizontal:C.ArrowRight}):return e.preventDefault(),e.stopPropagation(),c.goToOption(A.Next);case y(s.orientation,{vertical:C.ArrowUp,horizontal:C.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),c.goToOption(A.Previous);case C.Home:case C.PageUp:return e.preventDefault(),e.stopPropagation(),c.goToOption(A.First);case C.End:case C.PageDown:return e.preventDefault(),e.stopPropagation(),c.goToOption(A.Last);case C.Escape:return e.preventDefault(),e.stopPropagation(),c.closeListbox(),f.nextFrame(()=>{var e;return null==(e=s.buttonRef.current)?void 0:e.focus({preventScroll:!0})});case C.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(c.search(e.key),v.setTimeout(()=>c.clearSearch(),350))}}),S=b(()=>{var e,t,n;return null!=(n=null==(e=s.labelRef.current)?void 0:e.id)?n:null==(t=s.buttonRef.current)?void 0:t.id},[s.labelRef.current,s.buttonRef.current]),E=(0,o.useMemo)(()=>({open:0===s.listboxState}),[s]),w={"aria-activedescendant":null===s.activeOptionIndex||null==(n=s.options[s.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===s.mode||void 0,"aria-labelledby":S,"aria-orientation":s.orientation,id:i,onKeyDown:O,role:"listbox",tabIndex:0,ref:d};return L({ourProps:w,theirProps:u,slot:E,defaultTag:"ul",features:eL,visible:x,name:"Listbox.Options"})}),eD=T(function(e,t){var n;let r,i,l=p(),{id:u=`headlessui-listbox-option-${l}`,disabled:s=!1,value:c,...d}=e,b=eS("Listbox.Option"),h=ey("Listbox.Option"),x=null!==b.activeOptionIndex&&b.options[b.activeOptionIndex].id===u,y=b.isSelected(c),O=(0,o.useRef)(null),S=(r=(0,o.useRef)(""),i=(0,o.useRef)(""),m(()=>{let e=O.current;if(!e)return"";let t=e.innerText;if(r.current===t)return i.current;let n=(function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let r=n.split(" ").map(e=>{let t=document.getElementById(e);if(t){let n=t.getAttribute("aria-label");return"string"==typeof n?n.trim():eu(t).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return eu(e).trim()})(e).trim().toLowerCase();return r.current=t,i.current=n,n})),E=v({disabled:s,value:c,domRef:O,get textValue(){return S()}}),w=g(t,O);f(()=>{if(0!==b.listboxState||!x||0===b.activationTrigger)return;let e=a();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=O.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[O,x,b.listboxState,b.activationTrigger,b.activeOptionIndex]),f(()=>h.registerOption(u,E),[E,u]);let R,I=m(e=>{if(s)return e.preventDefault();h.onChange(c),0===b.mode&&(h.closeListbox(),a().nextFrame(()=>{var e;return null==(e=b.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))}),T=m(()=>{if(s)return h.goToOption(A.Nothing);h.goToOption(A.Specific,u)}),P=(R=(0,o.useRef)([-1,-1]),{wasMoved(e){let t=ea(e);return(R.current[0]!==t[0]||R.current[1]!==t[1])&&(R.current=t,!0)},update(e){R.current=ea(e)}}),D=m(e=>P.update(e)),F=m(e=>{P.wasMoved(e)&&(s||x||h.goToOption(A.Specific,u,0))}),N=m(e=>{P.wasMoved(e)&&(s||x&&h.goToOption(A.Nothing))}),C=(0,o.useMemo)(()=>({active:x,selected:y,disabled:s}),[x,y,s]);return L({ourProps:{id:u,ref:w,role:"option",tabIndex:!0===s?void 0:-1,"aria-disabled":!0===s||void 0,"aria-selected":y,disabled:void 0,onClick:I,onFocus:T,onPointerEnter:D,onMouseEnter:D,onPointerMove:F,onMouseMove:F,onPointerLeave:N,onMouseLeave:N},theirProps:d,slot:C,defaultTag:"li",name:"Listbox.Option"})}),eF=Object.assign(eR,{Button:eI,Label:eT,Options:eP,Option:eD})},9815:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(943),o=n(3375),i=n(1566);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,o.Z)(e)||(0,i.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);