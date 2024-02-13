function B0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const fI="modulepreload",hI=function(e){return"/BabySitterHub/"+e},iy={},pI=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link");i=Promise.all(n.map(s=>{if(s=hI(s),s in iy)return;iy[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const f=o[d];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":fI,a||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),a)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})}))}return i.then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};function Ap(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var W0={exports:{}},Ec={},V0={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=Symbol.for("react.element"),mI=Symbol.for("react.portal"),gI=Symbol.for("react.fragment"),yI=Symbol.for("react.strict_mode"),vI=Symbol.for("react.profiler"),_I=Symbol.for("react.provider"),wI=Symbol.for("react.context"),EI=Symbol.for("react.forward_ref"),SI=Symbol.for("react.suspense"),CI=Symbol.for("react.memo"),TI=Symbol.for("react.lazy"),oy=Symbol.iterator;function II(e){return e===null||typeof e!="object"?null:(e=oy&&e[oy]||e["@@iterator"],typeof e=="function"?e:null)}var H0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G0=Object.assign,K0={};function ls(e,t,n){this.props=e,this.context=t,this.refs=K0,this.updater=n||H0}ls.prototype.isReactComponent={};ls.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ls.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function q0(){}q0.prototype=ls.prototype;function Op(e,t,n){this.props=e,this.context=t,this.refs=K0,this.updater=n||H0}var Dp=Op.prototype=new q0;Dp.constructor=Op;G0(Dp,ls.prototype);Dp.isPureReactComponent=!0;var sy=Array.isArray,Y0=Object.prototype.hasOwnProperty,Lp={current:null},Q0={key:!0,ref:!0,__self:!0,__source:!0};function J0(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Y0.call(t,r)&&!Q0.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:il,type:e,key:o,ref:s,props:i,_owner:Lp.current}}function xI(e,t){return{$$typeof:il,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Mp(e){return typeof e=="object"&&e!==null&&e.$$typeof===il}function kI(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ay=/\/+/g;function $d(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kI(""+e.key):t.toString(36)}function Jl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case il:case mI:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+$d(s,0):r,sy(i)?(n="",e!=null&&(n=e.replace(ay,"$&/")+"/"),Jl(i,t,n,"",function(u){return u})):i!=null&&(Mp(i)&&(i=xI(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ay,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",sy(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+$d(o,a);s+=Jl(o,t,n,l,i)}else if(l=II(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+$d(o,a++),s+=Jl(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function xl(e,t,n){if(e==null)return e;var r=[],i=0;return Jl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function bI(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var bt={current:null},Xl={transition:null},RI={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Xl,ReactCurrentOwner:Lp};le.Children={map:xl,forEach:function(e,t,n){xl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xl(e,function(){t++}),t},toArray:function(e){return xl(e,function(t){return t})||[]},only:function(e){if(!Mp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=ls;le.Fragment=gI;le.Profiler=vI;le.PureComponent=Op;le.StrictMode=yI;le.Suspense=SI;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RI;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=G0({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Lp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Y0.call(t,l)&&!Q0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:il,type:e.type,key:i,ref:o,props:r,_owner:s}};le.createContext=function(e){return e={$$typeof:wI,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_I,_context:e},e.Consumer=e};le.createElement=J0;le.createFactory=function(e){var t=J0.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:EI,render:e}};le.isValidElement=Mp;le.lazy=function(e){return{$$typeof:TI,_payload:{_status:-1,_result:e},_init:bI}};le.memo=function(e,t){return{$$typeof:CI,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=Xl.transition;Xl.transition={};try{e()}finally{Xl.transition=t}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(e,t){return bt.current.useCallback(e,t)};le.useContext=function(e){return bt.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return bt.current.useDeferredValue(e)};le.useEffect=function(e,t){return bt.current.useEffect(e,t)};le.useId=function(){return bt.current.useId()};le.useImperativeHandle=function(e,t,n){return bt.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return bt.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return bt.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return bt.current.useMemo(e,t)};le.useReducer=function(e,t,n){return bt.current.useReducer(e,t,n)};le.useRef=function(e){return bt.current.useRef(e)};le.useState=function(e){return bt.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return bt.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return bt.current.useTransition()};le.version="18.2.0";V0.exports=le;var E=V0.exports;const Nt=Ap(E),Bf=B0({__proto__:null,default:Nt},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PI=E,NI=Symbol.for("react.element"),AI=Symbol.for("react.fragment"),OI=Object.prototype.hasOwnProperty,DI=PI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LI={key:!0,ref:!0,__self:!0,__source:!0};function X0(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)OI.call(t,r)&&!LI.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:NI,type:e,key:o,ref:s,props:i,_owner:DI.current}}Ec.Fragment=AI;Ec.jsx=X0;Ec.jsxs=X0;W0.exports=Ec;var I=W0.exports,Wf={},Z0={exports:{}},Jt={},ew={exports:{}},tw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,z){var V=D.length;D.push(z);e:for(;0<V;){var J=V-1>>>1,X=D[J];if(0<i(X,z))D[J]=z,D[V]=X,V=J;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],V=D.pop();if(V!==z){D[0]=V;e:for(var J=0,X=D.length,yt=X>>>1;J<yt;){var xe=2*(J+1)-1,Le=D[xe],Ae=xe+1,ct=D[Ae];if(0>i(Le,V))Ae<X&&0>i(ct,Le)?(D[J]=ct,D[Ae]=V,J=Ae):(D[J]=Le,D[xe]=V,J=xe);else if(Ae<X&&0>i(ct,V))D[J]=ct,D[Ae]=V,J=Ae;else break e}}return z}function i(D,z){var V=D.sortIndex-z.sortIndex;return V!==0?V:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,y=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=D)r(u),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(u)}}function C(D){if(_=!1,g(D),!y)if(n(l)!==null)y=!0,en(b);else{var z=n(u);z!==null&&pe(C,z.startTime-D)}}function b(D,z){y=!1,_&&(_=!1,p(P),P=-1),m=!0;var V=f;try{for(g(z),d=n(l);d!==null&&(!(d.expirationTime>z)||D&&!Q());){var J=d.callback;if(typeof J=="function"){d.callback=null,f=d.priorityLevel;var X=J(d.expirationTime<=z);z=e.unstable_now(),typeof X=="function"?d.callback=X:d===n(l)&&r(l),g(z)}else r(l);d=n(l)}if(d!==null)var yt=!0;else{var xe=n(u);xe!==null&&pe(C,xe.startTime-z),yt=!1}return yt}finally{d=null,f=V,m=!1}}var v=!1,S=null,P=-1,O=5,$=-1;function Q(){return!(e.unstable_now()-$<O)}function ue(){if(S!==null){var D=e.unstable_now();$=D;var z=!0;try{z=S(!0,D)}finally{z?ee():(v=!1,S=null)}}else v=!1}var ee;if(typeof h=="function")ee=function(){h(ue)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,zt=Ee.port2;Ee.port1.onmessage=ue,ee=function(){zt.postMessage(null)}}else ee=function(){w(ue,0)};function en(D){S=D,v||(v=!0,ee())}function pe(D,z){P=w(function(){D(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,en(b))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var V=f;f=z;try{return D()}finally{f=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=f;f=D;try{return z()}finally{f=V}},e.unstable_scheduleCallback=function(D,z,V){var J=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?J+V:J):V=J,D){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=V+X,D={id:c++,callback:z,priorityLevel:D,startTime:V,expirationTime:X,sortIndex:-1},V>J?(D.sortIndex=V,t(u,D),n(l)===null&&D===n(u)&&(_?(p(P),P=-1):_=!0,pe(C,V-J))):(D.sortIndex=X,t(l,D),y||m||(y=!0,en(b))),D},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(D){var z=f;return function(){var V=f;f=z;try{return D.apply(this,arguments)}finally{f=V}}}})(tw);ew.exports=tw;var MI=ew.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nw=E,qt=MI;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rw=new Set,ya={};function qi(e,t){Bo(e,t),Bo(e+"Capture",t)}function Bo(e,t){for(ya[e]=t,e=0;e<t.length;e++)rw.add(t[e])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vf=Object.prototype.hasOwnProperty,FI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ly={},uy={};function jI(e){return Vf.call(uy,e)?!0:Vf.call(ly,e)?!1:FI.test(e)?uy[e]=!0:(ly[e]=!0,!1)}function $I(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function UI(e,t,n,r){if(t===null||typeof t>"u"||$I(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Rt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){gt[e]=new Rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];gt[t]=new Rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){gt[e]=new Rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){gt[e]=new Rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){gt[e]=new Rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){gt[e]=new Rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){gt[e]=new Rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){gt[e]=new Rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){gt[e]=new Rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fp=/[\-:]([a-z])/g;function jp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fp,jp);gt[t]=new Rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fp,jp);gt[t]=new Rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fp,jp);gt[t]=new Rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){gt[e]=new Rt(e,1,!1,e.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){gt[e]=new Rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function $p(e,t,n,r){var i=gt.hasOwnProperty(t)?gt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(UI(t,n,i,r)&&(n=null),r||i===null?jI(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var cr=nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kl=Symbol.for("react.element"),po=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),Up=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),iw=Symbol.for("react.provider"),ow=Symbol.for("react.context"),zp=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),Kf=Symbol.for("react.suspense_list"),Bp=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),sw=Symbol.for("react.offscreen"),cy=Symbol.iterator;function Is(e){return e===null||typeof e!="object"?null:(e=cy&&e[cy]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,Ud;function Hs(e){if(Ud===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ud=t&&t[1]||""}return`
`+Ud+e}var zd=!1;function Bd(e,t){if(!e||zd)return"";zd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{zd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hs(e):""}function zI(e){switch(e.tag){case 5:return Hs(e.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 2:case 15:return e=Bd(e.type,!1),e;case 11:return e=Bd(e.type.render,!1),e;case 1:return e=Bd(e.type,!0),e;default:return""}}function qf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mo:return"Fragment";case po:return"Portal";case Hf:return"Profiler";case Up:return"StrictMode";case Gf:return"Suspense";case Kf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ow:return(e.displayName||"Context")+".Consumer";case iw:return(e._context.displayName||"Context")+".Provider";case zp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bp:return t=e.displayName||null,t!==null?t:qf(e.type)||"Memo";case Cr:t=e._payload,e=e._init;try{return qf(e(t))}catch{}}return null}function BI(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qf(t);case 8:return t===Up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function aw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function WI(e){var t=aw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bl(e){e._valueTracker||(e._valueTracker=WI(e))}function lw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=aw(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _u(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yf(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function dy(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uw(e,t){t=t.checked,t!=null&&$p(e,"checked",t,!1)}function Qf(e,t){uw(e,t);var n=Gr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jf(e,t.type,Gr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fy(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jf(e,t,n){(t!=="number"||_u(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gs=Array.isArray;function No(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hy(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Gs(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gr(n)}}function cw(e,t){var n=Gr(t.value),r=Gr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function py(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rl,fw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rl=Rl||document.createElement("div"),Rl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VI=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(e){VI.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zs[t]=Zs[e]})});function hw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zs.hasOwnProperty(e)&&Zs[e]?(""+t).trim():t+"px"}function pw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var HI=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eh(e,t){if(t){if(HI[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function th(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nh=null;function Wp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rh=null,Ao=null,Oo=null;function my(e){if(e=al(e)){if(typeof rh!="function")throw Error(N(280));var t=e.stateNode;t&&(t=xc(t),rh(e.stateNode,e.type,t))}}function mw(e){Ao?Oo?Oo.push(e):Oo=[e]:Ao=e}function gw(){if(Ao){var e=Ao,t=Oo;if(Oo=Ao=null,my(e),t)for(e=0;e<t.length;e++)my(t[e])}}function yw(e,t){return e(t)}function vw(){}var Wd=!1;function _w(e,t,n){if(Wd)return e(t,n);Wd=!0;try{return yw(e,t,n)}finally{Wd=!1,(Ao!==null||Oo!==null)&&(vw(),gw())}}function _a(e,t){var n=e.stateNode;if(n===null)return null;var r=xc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var ih=!1;if(er)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){ih=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{ih=!1}function GI(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ea=!1,wu=null,Eu=!1,oh=null,KI={onError:function(e){ea=!0,wu=e}};function qI(e,t,n,r,i,o,s,a,l){ea=!1,wu=null,GI.apply(KI,arguments)}function YI(e,t,n,r,i,o,s,a,l){if(qI.apply(this,arguments),ea){if(ea){var u=wu;ea=!1,wu=null}else throw Error(N(198));Eu||(Eu=!0,oh=u)}}function Yi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ww(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gy(e){if(Yi(e)!==e)throw Error(N(188))}function QI(e){var t=e.alternate;if(!t){if(t=Yi(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gy(i),e;if(o===r)return gy(i),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Ew(e){return e=QI(e),e!==null?Sw(e):null}function Sw(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sw(e);if(t!==null)return t;e=e.sibling}return null}var Cw=qt.unstable_scheduleCallback,yy=qt.unstable_cancelCallback,JI=qt.unstable_shouldYield,XI=qt.unstable_requestPaint,He=qt.unstable_now,ZI=qt.unstable_getCurrentPriorityLevel,Vp=qt.unstable_ImmediatePriority,Tw=qt.unstable_UserBlockingPriority,Su=qt.unstable_NormalPriority,ex=qt.unstable_LowPriority,Iw=qt.unstable_IdlePriority,Sc=null,Ln=null;function tx(e){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Sc,e,void 0,(e.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:ix,nx=Math.log,rx=Math.LN2;function ix(e){return e>>>=0,e===0?32:31-(nx(e)/rx|0)|0}var Pl=64,Nl=4194304;function Ks(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ks(a):(o&=s,o!==0&&(r=Ks(o)))}else s=n&~i,s!==0?r=Ks(s):o!==0&&(r=Ks(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Cn(t),i=1<<n,r|=e[n],t&=~i;return r}function ox(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Cn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=ox(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function sh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xw(){var e=Pl;return Pl<<=1,!(Pl&4194240)&&(Pl=64),e}function Vd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ol(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Cn(t),e[t]=n}function ax(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Cn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Hp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Cn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function kw(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bw,Gp,Rw,Pw,Nw,ah=!1,Al=[],Or=null,Dr=null,Lr=null,wa=new Map,Ea=new Map,Ir=[],lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vy(e,t){switch(e){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":wa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(t.pointerId)}}function ks(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=al(t),t!==null&&Gp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ux(e,t,n,r,i){switch(t){case"focusin":return Or=ks(Or,e,t,n,r,i),!0;case"dragenter":return Dr=ks(Dr,e,t,n,r,i),!0;case"mouseover":return Lr=ks(Lr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return wa.set(o,ks(wa.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ea.set(o,ks(Ea.get(o)||null,e,t,n,r,i)),!0}return!1}function Aw(e){var t=mi(e.target);if(t!==null){var n=Yi(t);if(n!==null){if(t=n.tag,t===13){if(t=ww(n),t!==null){e.blockedOn=t,Nw(e.priority,function(){Rw(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nh=r,n.target.dispatchEvent(r),nh=null}else return t=al(n),t!==null&&Gp(t),e.blockedOn=n,!1;t.shift()}return!0}function _y(e,t,n){Zl(e)&&n.delete(t)}function cx(){ah=!1,Or!==null&&Zl(Or)&&(Or=null),Dr!==null&&Zl(Dr)&&(Dr=null),Lr!==null&&Zl(Lr)&&(Lr=null),wa.forEach(_y),Ea.forEach(_y)}function bs(e,t){e.blockedOn===t&&(e.blockedOn=null,ah||(ah=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,cx)))}function Sa(e){function t(i){return bs(i,e)}if(0<Al.length){bs(Al[0],e);for(var n=1;n<Al.length;n++){var r=Al[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Or!==null&&bs(Or,e),Dr!==null&&bs(Dr,e),Lr!==null&&bs(Lr,e),wa.forEach(t),Ea.forEach(t),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)Aw(n),n.blockedOn===null&&Ir.shift()}var Do=cr.ReactCurrentBatchConfig,Tu=!0;function dx(e,t,n,r){var i=ge,o=Do.transition;Do.transition=null;try{ge=1,Kp(e,t,n,r)}finally{ge=i,Do.transition=o}}function fx(e,t,n,r){var i=ge,o=Do.transition;Do.transition=null;try{ge=4,Kp(e,t,n,r)}finally{ge=i,Do.transition=o}}function Kp(e,t,n,r){if(Tu){var i=lh(e,t,n,r);if(i===null)ef(e,t,r,Iu,n),vy(e,r);else if(ux(i,e,t,n,r))r.stopPropagation();else if(vy(e,r),t&4&&-1<lx.indexOf(e)){for(;i!==null;){var o=al(i);if(o!==null&&bw(o),o=lh(e,t,n,r),o===null&&ef(e,t,r,Iu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ef(e,t,r,null,n)}}var Iu=null;function lh(e,t,n,r){if(Iu=null,e=Wp(r),e=mi(e),e!==null)if(t=Yi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ww(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Iu=e,null}function Ow(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZI()){case Vp:return 1;case Tw:return 4;case Su:case ex:return 16;case Iw:return 536870912;default:return 16}default:return 16}}var Nr=null,qp=null,eu=null;function Dw(){if(eu)return eu;var e,t=qp,n=t.length,r,i="value"in Nr?Nr.value:Nr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return eu=i.slice(e,1<r?1-r:void 0)}function tu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ol(){return!0}function wy(){return!1}function Xt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ol:wy,this.isPropagationStopped=wy,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),t}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yp=Xt(us),sl=$e({},us,{view:0,detail:0}),hx=Xt(sl),Hd,Gd,Rs,Cc=$e({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rs&&(Rs&&e.type==="mousemove"?(Hd=e.screenX-Rs.screenX,Gd=e.screenY-Rs.screenY):Gd=Hd=0,Rs=e),Hd)},movementY:function(e){return"movementY"in e?e.movementY:Gd}}),Ey=Xt(Cc),px=$e({},Cc,{dataTransfer:0}),mx=Xt(px),gx=$e({},sl,{relatedTarget:0}),Kd=Xt(gx),yx=$e({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=Xt(yx),_x=$e({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wx=Xt(_x),Ex=$e({},us,{data:0}),Sy=Xt(Ex),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tx[e])?!!t[e]:!1}function Qp(){return Ix}var xx=$e({},sl,{key:function(e){if(e.key){var t=Sx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qp,charCode:function(e){return e.type==="keypress"?tu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kx=Xt(xx),bx=$e({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cy=Xt(bx),Rx=$e({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qp}),Px=Xt(Rx),Nx=$e({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ax=Xt(Nx),Ox=$e({},Cc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dx=Xt(Ox),Lx=[9,13,27,32],Jp=er&&"CompositionEvent"in window,ta=null;er&&"documentMode"in document&&(ta=document.documentMode);var Mx=er&&"TextEvent"in window&&!ta,Lw=er&&(!Jp||ta&&8<ta&&11>=ta),Ty=" ",Iy=!1;function Mw(e,t){switch(e){case"keyup":return Lx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fw(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var go=!1;function Fx(e,t){switch(e){case"compositionend":return Fw(t);case"keypress":return t.which!==32?null:(Iy=!0,Ty);case"textInput":return e=t.data,e===Ty&&Iy?null:e;default:return null}}function jx(e,t){if(go)return e==="compositionend"||!Jp&&Mw(e,t)?(e=Dw(),eu=qp=Nr=null,go=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lw&&t.locale!=="ko"?null:t.data;default:return null}}var $x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$x[e.type]:t==="textarea"}function jw(e,t,n,r){mw(r),t=xu(t,"onChange"),0<t.length&&(n=new Yp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var na=null,Ca=null;function Ux(e){Yw(e,0)}function Tc(e){var t=_o(e);if(lw(t))return e}function zx(e,t){if(e==="change")return t}var $w=!1;if(er){var qd;if(er){var Yd="oninput"in document;if(!Yd){var ky=document.createElement("div");ky.setAttribute("oninput","return;"),Yd=typeof ky.oninput=="function"}qd=Yd}else qd=!1;$w=qd&&(!document.documentMode||9<document.documentMode)}function by(){na&&(na.detachEvent("onpropertychange",Uw),Ca=na=null)}function Uw(e){if(e.propertyName==="value"&&Tc(Ca)){var t=[];jw(t,Ca,e,Wp(e)),_w(Ux,t)}}function Bx(e,t,n){e==="focusin"?(by(),na=t,Ca=n,na.attachEvent("onpropertychange",Uw)):e==="focusout"&&by()}function Wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tc(Ca)}function Vx(e,t){if(e==="click")return Tc(t)}function Hx(e,t){if(e==="input"||e==="change")return Tc(t)}function Gx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kn=typeof Object.is=="function"?Object.is:Gx;function Ta(e,t){if(kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vf.call(t,i)||!kn(e[i],t[i]))return!1}return!0}function Ry(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Py(e,t){var n=Ry(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ry(n)}}function zw(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zw(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bw(){for(var e=window,t=_u();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_u(e.document)}return t}function Xp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kx(e){var t=Bw(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zw(n.ownerDocument.documentElement,n)){if(r!==null&&Xp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Py(n,o);var s=Py(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qx=er&&"documentMode"in document&&11>=document.documentMode,yo=null,uh=null,ra=null,ch=!1;function Ny(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ch||yo==null||yo!==_u(r)||(r=yo,"selectionStart"in r&&Xp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&Ta(ra,r)||(ra=r,r=xu(uh,"onSelect"),0<r.length&&(t=new Yp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yo)))}function Dl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vo={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionend:Dl("Transition","TransitionEnd")},Qd={},Ww={};er&&(Ww=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function Ic(e){if(Qd[e])return Qd[e];if(!vo[e])return e;var t=vo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ww)return Qd[e]=t[n];return e}var Vw=Ic("animationend"),Hw=Ic("animationiteration"),Gw=Ic("animationstart"),Kw=Ic("transitionend"),qw=new Map,Ay="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(e,t){qw.set(e,t),qi(t,[e])}for(var Jd=0;Jd<Ay.length;Jd++){var Xd=Ay[Jd],Yx=Xd.toLowerCase(),Qx=Xd[0].toUpperCase()+Xd.slice(1);Zr(Yx,"on"+Qx)}Zr(Vw,"onAnimationEnd");Zr(Hw,"onAnimationIteration");Zr(Gw,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(Kw,"onTransitionEnd");Bo("onMouseEnter",["mouseout","mouseover"]);Bo("onMouseLeave",["mouseout","mouseover"]);Bo("onPointerEnter",["pointerout","pointerover"]);Bo("onPointerLeave",["pointerout","pointerover"]);qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jx=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function Oy(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,YI(r,t,void 0,e),e.currentTarget=null}function Yw(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Oy(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Oy(i,a,u),o=l}}}if(Eu)throw e=oh,Eu=!1,oh=null,e}function ke(e,t){var n=t[mh];n===void 0&&(n=t[mh]=new Set);var r=e+"__bubble";n.has(r)||(Qw(t,e,2,!1),n.add(r))}function Zd(e,t,n){var r=0;t&&(r|=4),Qw(n,e,r,t)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function Ia(e){if(!e[Ll]){e[Ll]=!0,rw.forEach(function(n){n!=="selectionchange"&&(Jx.has(n)||Zd(n,!1,e),Zd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ll]||(t[Ll]=!0,Zd("selectionchange",!1,t))}}function Qw(e,t,n,r){switch(Ow(t)){case 1:var i=dx;break;case 4:i=fx;break;default:i=Kp}n=i.bind(null,t,n,e),i=void 0,!ih||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ef(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=mi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}_w(function(){var u=o,c=Wp(n),d=[];e:{var f=qw.get(e);if(f!==void 0){var m=Yp,y=e;switch(e){case"keypress":if(tu(n)===0)break e;case"keydown":case"keyup":m=kx;break;case"focusin":y="focus",m=Kd;break;case"focusout":y="blur",m=Kd;break;case"beforeblur":case"afterblur":m=Kd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ey;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Px;break;case Vw:case Hw:case Gw:m=vx;break;case Kw:m=Ax;break;case"scroll":m=hx;break;case"wheel":m=Dx;break;case"copy":case"cut":case"paste":m=wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Cy}var _=(t&4)!==0,w=!_&&e==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,g;h!==null;){g=h;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,p!==null&&(C=_a(h,p),C!=null&&_.push(xa(h,C,g)))),w)break;h=h.return}0<_.length&&(f=new m(f,y,null,n,c),d.push({event:f,listeners:_}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==nh&&(y=n.relatedTarget||n.fromElement)&&(mi(y)||y[tr]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?mi(y):null,y!==null&&(w=Yi(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=Ey,C="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(_=Cy,C="onPointerLeave",p="onPointerEnter",h="pointer"),w=m==null?f:_o(m),g=y==null?f:_o(y),f=new _(C,h+"leave",m,n,c),f.target=w,f.relatedTarget=g,C=null,mi(c)===u&&(_=new _(p,h+"enter",y,n,c),_.target=g,_.relatedTarget=w,C=_),w=C,m&&y)t:{for(_=m,p=y,h=0,g=_;g;g=uo(g))h++;for(g=0,C=p;C;C=uo(C))g++;for(;0<h-g;)_=uo(_),h--;for(;0<g-h;)p=uo(p),g--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=uo(_),p=uo(p)}_=null}else _=null;m!==null&&Dy(d,f,m,_,!1),y!==null&&w!==null&&Dy(d,w,y,_,!0)}}e:{if(f=u?_o(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=zx;else if(xy(f))if($w)b=Hx;else{b=Wx;var v=Bx}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Vx);if(b&&(b=b(e,u))){jw(d,b,n,c);break e}v&&v(e,f,u),e==="focusout"&&(v=f._wrapperState)&&v.controlled&&f.type==="number"&&Jf(f,"number",f.value)}switch(v=u?_o(u):window,e){case"focusin":(xy(v)||v.contentEditable==="true")&&(yo=v,uh=u,ra=null);break;case"focusout":ra=uh=yo=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,Ny(d,n,c);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":Ny(d,n,c)}var S;if(Jp)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else go?Mw(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Lw&&n.locale!=="ko"&&(go||P!=="onCompositionStart"?P==="onCompositionEnd"&&go&&(S=Dw()):(Nr=c,qp="value"in Nr?Nr.value:Nr.textContent,go=!0)),v=xu(u,P),0<v.length&&(P=new Sy(P,e,null,n,c),d.push({event:P,listeners:v}),S?P.data=S:(S=Fw(n),S!==null&&(P.data=S)))),(S=Mx?Fx(e,n):jx(e,n))&&(u=xu(u,"onBeforeInput"),0<u.length&&(c=new Sy("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}Yw(d,t)})}function xa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_a(e,n),o!=null&&r.unshift(xa(e,o,i)),o=_a(e,t),o!=null&&r.push(xa(e,o,i))),e=e.return}return r}function uo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dy(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=_a(n,o),l!=null&&s.unshift(xa(n,l,a))):i||(l=_a(n,o),l!=null&&s.push(xa(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Xx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function Ly(e){return(typeof e=="string"?e:""+e).replace(Xx,`
`).replace(Zx,"")}function Ml(e,t,n){if(t=Ly(t),Ly(e)!==t&&n)throw Error(N(425))}function ku(){}var dh=null,fh=null;function hh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,ek=typeof clearTimeout=="function"?clearTimeout:void 0,My=typeof Promise=="function"?Promise:void 0,tk=typeof queueMicrotask=="function"?queueMicrotask:typeof My<"u"?function(e){return My.resolve(null).then(e).catch(nk)}:ph;function nk(e){setTimeout(function(){throw e})}function tf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Sa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Sa(t)}function Mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cs=Math.random().toString(36).slice(2),Dn="__reactFiber$"+cs,ka="__reactProps$"+cs,tr="__reactContainer$"+cs,mh="__reactEvents$"+cs,rk="__reactListeners$"+cs,ik="__reactHandles$"+cs;function mi(e){var t=e[Dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tr]||n[Dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fy(e);e!==null;){if(n=e[Dn])return n;e=Fy(e)}return t}e=n,n=e.parentNode}return null}function al(e){return e=e[Dn]||e[tr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _o(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function xc(e){return e[ka]||null}var gh=[],wo=-1;function ei(e){return{current:e}}function Ne(e){0>wo||(e.current=gh[wo],gh[wo]=null,wo--)}function Ie(e,t){wo++,gh[wo]=e.current,e.current=t}var Kr={},Ct=ei(Kr),Lt=ei(!1),Ri=Kr;function Wo(e,t){var n=e.type.contextTypes;if(!n)return Kr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(e){return e=e.childContextTypes,e!=null}function bu(){Ne(Lt),Ne(Ct)}function jy(e,t,n){if(Ct.current!==Kr)throw Error(N(168));Ie(Ct,t),Ie(Lt,n)}function Jw(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,BI(e)||"Unknown",i));return $e({},n,r)}function Ru(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kr,Ri=Ct.current,Ie(Ct,e),Ie(Lt,Lt.current),!0}function $y(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Jw(e,t,Ri),r.__reactInternalMemoizedMergedChildContext=e,Ne(Lt),Ne(Ct),Ie(Ct,e)):Ne(Lt),Ie(Lt,n)}var Vn=null,kc=!1,nf=!1;function Xw(e){Vn===null?Vn=[e]:Vn.push(e)}function ok(e){kc=!0,Xw(e)}function ti(){if(!nf&&Vn!==null){nf=!0;var e=0,t=ge;try{var n=Vn;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vn=null,kc=!1}catch(i){throw Vn!==null&&(Vn=Vn.slice(e+1)),Cw(Vp,ti),i}finally{ge=t,nf=!1}}return null}var Eo=[],So=0,Pu=null,Nu=0,sn=[],an=0,Pi=null,Hn=1,Gn="";function li(e,t){Eo[So++]=Nu,Eo[So++]=Pu,Pu=e,Nu=t}function Zw(e,t,n){sn[an++]=Hn,sn[an++]=Gn,sn[an++]=Pi,Pi=e;var r=Hn;e=Gn;var i=32-Cn(r)-1;r&=~(1<<i),n+=1;var o=32-Cn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Hn=1<<32-Cn(t)+i|n<<i|r,Gn=o+e}else Hn=1<<o|n<<i|r,Gn=e}function Zp(e){e.return!==null&&(li(e,1),Zw(e,1,0))}function em(e){for(;e===Pu;)Pu=Eo[--So],Eo[So]=null,Nu=Eo[--So],Eo[So]=null;for(;e===Pi;)Pi=sn[--an],sn[an]=null,Gn=sn[--an],sn[an]=null,Hn=sn[--an],sn[an]=null}var Kt=null,Ht=null,De=!1,vn=null;function e1(e,t){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uy(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Kt=e,Ht=Mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Kt=e,Ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pi!==null?{id:Hn,overflow:Gn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Kt=e,Ht=null,!0):!1;default:return!1}}function yh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vh(e){if(De){var t=Ht;if(t){var n=t;if(!Uy(e,t)){if(yh(e))throw Error(N(418));t=Mr(n.nextSibling);var r=Kt;t&&Uy(e,t)?e1(r,n):(e.flags=e.flags&-4097|2,De=!1,Kt=e)}}else{if(yh(e))throw Error(N(418));e.flags=e.flags&-4097|2,De=!1,Kt=e}}}function zy(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Kt=e}function Fl(e){if(e!==Kt)return!1;if(!De)return zy(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hh(e.type,e.memoizedProps)),t&&(t=Ht)){if(yh(e))throw t1(),Error(N(418));for(;t;)e1(e,t),t=Mr(t.nextSibling)}if(zy(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ht=Mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ht=null}}else Ht=Kt?Mr(e.stateNode.nextSibling):null;return!0}function t1(){for(var e=Ht;e;)e=Mr(e.nextSibling)}function Vo(){Ht=Kt=null,De=!1}function tm(e){vn===null?vn=[e]:vn.push(e)}var sk=cr.ReactCurrentBatchConfig;function mn(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Au=ei(null),Ou=null,Co=null,nm=null;function rm(){nm=Co=Ou=null}function im(e){var t=Au.current;Ne(Au),e._currentValue=t}function _h(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lo(e,t){Ou=e,nm=Co=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(At=!0),e.firstContext=null)}function cn(e){var t=e._currentValue;if(nm!==e)if(e={context:e,memoizedValue:t,next:null},Co===null){if(Ou===null)throw Error(N(308));Co=e,Ou.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return t}var gi=null;function om(e){gi===null?gi=[e]:gi.push(e)}function n1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,om(t)):(n.next=i.next,i.next=n),t.interleaved=n,nr(e,r)}function nr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tr=!1;function sm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nr(e,n)}return i=r.interleaved,i===null?(t.next=t,om(r)):(t.next=i.next,i.next=t),r.interleaved=t,nr(e,n)}function nu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hp(e,n)}}function By(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Du(e,t,n,r){var i=e.updateQueue;Tr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(f=t,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(m,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(m,d,f):y,f==null)break e;d=$e({},d,f);break e;case 2:Tr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ai|=s,e.lanes=s,e.memoizedState=d}}function Wy(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var i1=new nw.Component().refs;function wh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bc={isMounted:function(e){return(e=e._reactInternals)?Yi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kt(),i=$r(e),o=Qn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Fr(e,o,i),t!==null&&(Tn(t,e,i,r),nu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kt(),i=$r(e),o=Qn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Fr(e,o,i),t!==null&&(Tn(t,e,i,r),nu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),r=$r(e),i=Qn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fr(e,i,r),t!==null&&(Tn(t,e,r,n),nu(t,e,r))}};function Vy(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ta(n,r)||!Ta(i,o):!0}function o1(e,t,n){var r=!1,i=Kr,o=t.contextType;return typeof o=="object"&&o!==null?o=cn(o):(i=Mt(t)?Ri:Ct.current,r=t.contextTypes,o=(r=r!=null)?Wo(e,i):Kr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hy(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function Eh(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=i1,sm(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=cn(o):(o=Mt(t)?Ri:Ct.current,i.context=Wo(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(wh(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bc.enqueueReplaceState(i,i.state,null),Du(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ps(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===i1&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function jl(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gy(e){var t=e._init;return t(e._payload)}function s1(e){function t(p,h){if(e){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Ur(p,h),p.index=0,p.sibling=null,p}function o(p,h,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,g,C){return h===null||h.tag!==6?(h=cf(g,p.mode,C),h.return=p,h):(h=i(h,g),h.return=p,h)}function l(p,h,g,C){var b=g.type;return b===mo?c(p,h,g.props.children,C,g.key):h!==null&&(h.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Cr&&Gy(b)===h.type)?(C=i(h,g.props),C.ref=Ps(p,h,g),C.return=p,C):(C=lu(g.type,g.key,g.props,null,p.mode,C),C.ref=Ps(p,h,g),C.return=p,C)}function u(p,h,g,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=df(g,p.mode,C),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function c(p,h,g,C,b){return h===null||h.tag!==7?(h=Ti(g,p.mode,C,b),h.return=p,h):(h=i(h,g),h.return=p,h)}function d(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=cf(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case kl:return g=lu(h.type,h.key,h.props,null,p.mode,g),g.ref=Ps(p,null,h),g.return=p,g;case po:return h=df(h,p.mode,g),h.return=p,h;case Cr:var C=h._init;return d(p,C(h._payload),g)}if(Gs(h)||Is(h))return h=Ti(h,p.mode,g,null),h.return=p,h;jl(p,h)}return null}function f(p,h,g,C){var b=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(p,h,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case kl:return g.key===b?l(p,h,g,C):null;case po:return g.key===b?u(p,h,g,C):null;case Cr:return b=g._init,f(p,h,b(g._payload),C)}if(Gs(g)||Is(g))return b!==null?null:c(p,h,g,C,null);jl(p,g)}return null}function m(p,h,g,C,b){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(g)||null,a(h,p,""+C,b);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case kl:return p=p.get(C.key===null?g:C.key)||null,l(h,p,C,b);case po:return p=p.get(C.key===null?g:C.key)||null,u(h,p,C,b);case Cr:var v=C._init;return m(p,h,g,v(C._payload),b)}if(Gs(C)||Is(C))return p=p.get(g)||null,c(h,p,C,b,null);jl(h,C)}return null}function y(p,h,g,C){for(var b=null,v=null,S=h,P=h=0,O=null;S!==null&&P<g.length;P++){S.index>P?(O=S,S=null):O=S.sibling;var $=f(p,S,g[P],C);if($===null){S===null&&(S=O);break}e&&S&&$.alternate===null&&t(p,S),h=o($,h,P),v===null?b=$:v.sibling=$,v=$,S=O}if(P===g.length)return n(p,S),De&&li(p,P),b;if(S===null){for(;P<g.length;P++)S=d(p,g[P],C),S!==null&&(h=o(S,h,P),v===null?b=S:v.sibling=S,v=S);return De&&li(p,P),b}for(S=r(p,S);P<g.length;P++)O=m(S,p,P,g[P],C),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?P:O.key),h=o(O,h,P),v===null?b=O:v.sibling=O,v=O);return e&&S.forEach(function(Q){return t(p,Q)}),De&&li(p,P),b}function _(p,h,g,C){var b=Is(g);if(typeof b!="function")throw Error(N(150));if(g=b.call(g),g==null)throw Error(N(151));for(var v=b=null,S=h,P=h=0,O=null,$=g.next();S!==null&&!$.done;P++,$=g.next()){S.index>P?(O=S,S=null):O=S.sibling;var Q=f(p,S,$.value,C);if(Q===null){S===null&&(S=O);break}e&&S&&Q.alternate===null&&t(p,S),h=o(Q,h,P),v===null?b=Q:v.sibling=Q,v=Q,S=O}if($.done)return n(p,S),De&&li(p,P),b;if(S===null){for(;!$.done;P++,$=g.next())$=d(p,$.value,C),$!==null&&(h=o($,h,P),v===null?b=$:v.sibling=$,v=$);return De&&li(p,P),b}for(S=r(p,S);!$.done;P++,$=g.next())$=m(S,p,P,$.value,C),$!==null&&(e&&$.alternate!==null&&S.delete($.key===null?P:$.key),h=o($,h,P),v===null?b=$:v.sibling=$,v=$);return e&&S.forEach(function(ue){return t(p,ue)}),De&&li(p,P),b}function w(p,h,g,C){if(typeof g=="object"&&g!==null&&g.type===mo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case kl:e:{for(var b=g.key,v=h;v!==null;){if(v.key===b){if(b=g.type,b===mo){if(v.tag===7){n(p,v.sibling),h=i(v,g.props.children),h.return=p,p=h;break e}}else if(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Cr&&Gy(b)===v.type){n(p,v.sibling),h=i(v,g.props),h.ref=Ps(p,v,g),h.return=p,p=h;break e}n(p,v);break}else t(p,v);v=v.sibling}g.type===mo?(h=Ti(g.props.children,p.mode,C,g.key),h.return=p,p=h):(C=lu(g.type,g.key,g.props,null,p.mode,C),C.ref=Ps(p,h,g),C.return=p,p=C)}return s(p);case po:e:{for(v=g.key;h!==null;){if(h.key===v)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=df(g,p.mode,C),h.return=p,p=h}return s(p);case Cr:return v=g._init,w(p,h,v(g._payload),C)}if(Gs(g))return y(p,h,g,C);if(Is(g))return _(p,h,g,C);jl(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=cf(g,p.mode,C),h.return=p,p=h),s(p)):n(p,h)}return w}var Ho=s1(!0),a1=s1(!1),ll={},Mn=ei(ll),ba=ei(ll),Ra=ei(ll);function yi(e){if(e===ll)throw Error(N(174));return e}function am(e,t){switch(Ie(Ra,t),Ie(ba,e),Ie(Mn,ll),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zf(t,e)}Ne(Mn),Ie(Mn,t)}function Go(){Ne(Mn),Ne(ba),Ne(Ra)}function l1(e){yi(Ra.current);var t=yi(Mn.current),n=Zf(t,e.type);t!==n&&(Ie(ba,e),Ie(Mn,n))}function lm(e){ba.current===e&&(Ne(Mn),Ne(ba))}var Me=ei(0);function Lu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rf=[];function um(){for(var e=0;e<rf.length;e++)rf[e]._workInProgressVersionPrimary=null;rf.length=0}var ru=cr.ReactCurrentDispatcher,of=cr.ReactCurrentBatchConfig,Ni=0,je=null,Ye=null,rt=null,Mu=!1,ia=!1,Pa=0,ak=0;function _t(){throw Error(N(321))}function cm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kn(e[n],t[n]))return!1;return!0}function dm(e,t,n,r,i,o){if(Ni=o,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ru.current=e===null||e.memoizedState===null?dk:fk,e=n(r,i),ia){o=0;do{if(ia=!1,Pa=0,25<=o)throw Error(N(301));o+=1,rt=Ye=null,t.updateQueue=null,ru.current=hk,e=n(r,i)}while(ia)}if(ru.current=Fu,t=Ye!==null&&Ye.next!==null,Ni=0,rt=Ye=je=null,Mu=!1,t)throw Error(N(300));return e}function fm(){var e=Pa!==0;return Pa=0,e}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?je.memoizedState=rt=e:rt=rt.next=e,rt}function dn(){if(Ye===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=rt===null?je.memoizedState:rt.next;if(t!==null)rt=t,Ye=e;else{if(e===null)throw Error(N(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},rt===null?je.memoizedState=rt=e:rt=rt.next=e}return rt}function Na(e,t){return typeof t=="function"?t(e):t}function sf(e){var t=dn(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Ye,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Ni&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,je.lanes|=c,Ai|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,kn(r,t.memoizedState)||(At=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,je.lanes|=o,Ai|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function af(e){var t=dn(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);kn(o,t.memoizedState)||(At=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function u1(){}function c1(e,t){var n=je,r=dn(),i=t(),o=!kn(r.memoizedState,i);if(o&&(r.memoizedState=i,At=!0),r=r.queue,hm(h1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Aa(9,f1.bind(null,n,r,i,t),void 0,null),lt===null)throw Error(N(349));Ni&30||d1(n,t,i)}return i}function d1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function f1(e,t,n,r){t.value=n,t.getSnapshot=r,p1(t)&&m1(e)}function h1(e,t,n){return n(function(){p1(t)&&m1(e)})}function p1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kn(e,n)}catch{return!0}}function m1(e){var t=nr(e,1);t!==null&&Tn(t,e,1,-1)}function Ky(e){var t=An();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:e},t.queue=e,e=e.dispatch=ck.bind(null,je,e),[t.memoizedState,e]}function Aa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function g1(){return dn().memoizedState}function iu(e,t,n,r){var i=An();je.flags|=e,i.memoizedState=Aa(1|t,n,void 0,r===void 0?null:r)}function Rc(e,t,n,r){var i=dn();r=r===void 0?null:r;var o=void 0;if(Ye!==null){var s=Ye.memoizedState;if(o=s.destroy,r!==null&&cm(r,s.deps)){i.memoizedState=Aa(t,n,o,r);return}}je.flags|=e,i.memoizedState=Aa(1|t,n,o,r)}function qy(e,t){return iu(8390656,8,e,t)}function hm(e,t){return Rc(2048,8,e,t)}function y1(e,t){return Rc(4,2,e,t)}function v1(e,t){return Rc(4,4,e,t)}function _1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function w1(e,t,n){return n=n!=null?n.concat([e]):null,Rc(4,4,_1.bind(null,t,e),n)}function pm(){}function E1(e,t){var n=dn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function S1(e,t){var n=dn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function C1(e,t,n){return Ni&21?(kn(n,t)||(n=xw(),je.lanes|=n,Ai|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=n)}function lk(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=of.transition;of.transition={};try{e(!1),t()}finally{ge=n,of.transition=r}}function T1(){return dn().memoizedState}function uk(e,t,n){var r=$r(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},I1(e))x1(t,n);else if(n=n1(e,t,n,r),n!==null){var i=kt();Tn(n,e,r,i),k1(n,t,r)}}function ck(e,t,n){var r=$r(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(I1(e))x1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,kn(a,s)){var l=t.interleaved;l===null?(i.next=i,om(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=n1(e,t,i,r),n!==null&&(i=kt(),Tn(n,e,r,i),k1(n,t,r))}}function I1(e){var t=e.alternate;return e===je||t!==null&&t===je}function x1(e,t){ia=Mu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function k1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hp(e,n)}}var Fu={readContext:cn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},dk={readContext:cn,useCallback:function(e,t){return An().memoizedState=[e,t===void 0?null:t],e},useContext:cn,useEffect:qy,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,iu(4194308,4,_1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return iu(4194308,4,e,t)},useInsertionEffect:function(e,t){return iu(4,2,e,t)},useMemo:function(e,t){var n=An();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=An();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uk.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=An();return e={current:e},t.memoizedState=e},useState:Ky,useDebugValue:pm,useDeferredValue:function(e){return An().memoizedState=e},useTransition:function(){var e=Ky(!1),t=e[0];return e=lk.bind(null,e[1]),An().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,i=An();if(De){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),lt===null)throw Error(N(349));Ni&30||d1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,qy(h1.bind(null,r,o,e),[e]),r.flags|=2048,Aa(9,f1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=An(),t=lt.identifierPrefix;if(De){var n=Gn,r=Hn;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ak++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fk={readContext:cn,useCallback:E1,useContext:cn,useEffect:hm,useImperativeHandle:w1,useInsertionEffect:y1,useLayoutEffect:v1,useMemo:S1,useReducer:sf,useRef:g1,useState:function(){return sf(Na)},useDebugValue:pm,useDeferredValue:function(e){var t=dn();return C1(t,Ye.memoizedState,e)},useTransition:function(){var e=sf(Na)[0],t=dn().memoizedState;return[e,t]},useMutableSource:u1,useSyncExternalStore:c1,useId:T1,unstable_isNewReconciler:!1},hk={readContext:cn,useCallback:E1,useContext:cn,useEffect:hm,useImperativeHandle:w1,useInsertionEffect:y1,useLayoutEffect:v1,useMemo:S1,useReducer:af,useRef:g1,useState:function(){return af(Na)},useDebugValue:pm,useDeferredValue:function(e){var t=dn();return Ye===null?t.memoizedState=e:C1(t,Ye.memoizedState,e)},useTransition:function(){var e=af(Na)[0],t=dn().memoizedState;return[e,t]},useMutableSource:u1,useSyncExternalStore:c1,useId:T1,unstable_isNewReconciler:!1};function Ko(e,t){try{var n="",r=t;do n+=zI(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function lf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Sh(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pk=typeof WeakMap=="function"?WeakMap:Map;function b1(e,t,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$u||($u=!0,Ah=r),Sh(e,t)},n}function R1(e,t,n){n=Qn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Sh(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Sh(e,t),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Yy(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=bk.bind(null,e,t,n),t.then(e,e))}function Qy(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jy(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qn(-1,1),t.tag=2,Fr(n,t,1))),n.lanes|=1),e)}var mk=cr.ReactCurrentOwner,At=!1;function xt(e,t,n,r){t.child=e===null?a1(t,null,n,r):Ho(t,e.child,n,r)}function Xy(e,t,n,r,i){n=n.render;var o=t.ref;return Lo(t,i),r=dm(e,t,n,r,o,i),n=fm(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rr(e,t,i)):(De&&n&&Zp(t),t.flags|=1,xt(e,t,r,i),t.child)}function Zy(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Sm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,P1(e,t,o,r,i)):(e=lu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(s,r)&&e.ref===t.ref)return rr(e,t,i)}return t.flags|=1,e=Ur(o,r),e.ref=t.ref,e.return=t,t.child=e}function P1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ta(o,r)&&e.ref===t.ref)if(At=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(At=!0);else return t.lanes=e.lanes,rr(e,t,i)}return Ch(e,t,n,r,i)}function N1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Io,Vt),Vt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(Io,Vt),Vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ie(Io,Vt),Vt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ie(Io,Vt),Vt|=r;return xt(e,t,i,n),t.child}function A1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ch(e,t,n,r,i){var o=Mt(n)?Ri:Ct.current;return o=Wo(t,o),Lo(t,i),n=dm(e,t,n,r,o,i),r=fm(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rr(e,t,i)):(De&&r&&Zp(t),t.flags|=1,xt(e,t,n,i),t.child)}function ev(e,t,n,r,i){if(Mt(n)){var o=!0;Ru(t)}else o=!1;if(Lo(t,i),t.stateNode===null)ou(e,t),o1(t,n,r),Eh(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=cn(u):(u=Mt(n)?Ri:Ct.current,u=Wo(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hy(t,s,r,u),Tr=!1;var f=t.memoizedState;s.state=f,Du(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Lt.current||Tr?(typeof c=="function"&&(wh(t,n,c,r),l=t.memoizedState),(a=Tr||Vy(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,r1(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:mn(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=cn(l):(l=Mt(n)?Ri:Ct.current,l=Wo(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Hy(t,s,r,l),Tr=!1,f=t.memoizedState,s.state=f,Du(t,r,s,i);var y=t.memoizedState;a!==d||f!==y||Lt.current||Tr?(typeof m=="function"&&(wh(t,n,m,r),y=t.memoizedState),(u=Tr||Vy(t,n,u,r,f,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Th(e,t,n,r,o,i)}function Th(e,t,n,r,i,o){A1(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&$y(t,n,!1),rr(e,t,o);r=t.stateNode,mk.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ho(t,e.child,null,o),t.child=Ho(t,null,a,o)):xt(e,t,a,o),t.memoizedState=r.state,i&&$y(t,n,!0),t.child}function O1(e){var t=e.stateNode;t.pendingContext?jy(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jy(e,t.context,!1),am(e,t.containerInfo)}function tv(e,t,n,r,i){return Vo(),tm(i),t.flags|=256,xt(e,t,n,r),t.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function xh(e){return{baseLanes:e,cachePool:null,transitions:null}}function D1(e,t,n){var r=t.pendingProps,i=Me.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ie(Me,i&1),e===null)return vh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ac(s,r,0,null),e=Ti(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=xh(n),t.memoizedState=Ih,e):mm(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gk(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ur(a,o):(o=Ti(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?xh(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ih,r}return o=e.child,e=o.sibling,r=Ur(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function mm(e,t){return t=Ac({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $l(e,t,n,r){return r!==null&&tm(r),Ho(t,e.child,null,n),e=mm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gk(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=lf(Error(N(422))),$l(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ac({mode:"visible",children:r.children},i,0,null),o=Ti(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ho(t,e.child,null,s),t.child.memoizedState=xh(s),t.memoizedState=Ih,o);if(!(t.mode&1))return $l(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(N(419)),r=lf(o,r,void 0),$l(e,t,s,r)}if(a=(s&e.childLanes)!==0,At||a){if(r=lt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nr(e,i),Tn(r,e,i,-1))}return Em(),r=lf(Error(N(421))),$l(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Rk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ht=Mr(i.nextSibling),Kt=t,De=!0,vn=null,e!==null&&(sn[an++]=Hn,sn[an++]=Gn,sn[an++]=Pi,Hn=e.id,Gn=e.overflow,Pi=t),t=mm(t,r.children),t.flags|=4096,t)}function nv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_h(e.return,t,n)}function uf(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function L1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xt(e,t,r.children,n),r=Me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nv(e,n,t);else if(e.tag===19)nv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ie(Me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Lu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),uf(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Lu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}uf(t,!0,n,null,o);break;case"together":uf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ou(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ai|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Ur(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ur(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yk(e,t,n){switch(t.tag){case 3:O1(t),Vo();break;case 5:l1(t);break;case 1:Mt(t.type)&&Ru(t);break;case 4:am(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ie(Au,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Me,Me.current&1),t.flags|=128,null):n&t.child.childLanes?D1(e,t,n):(Ie(Me,Me.current&1),e=rr(e,t,n),e!==null?e.sibling:null);Ie(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return L1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,N1(e,t,n)}return rr(e,t,n)}var M1,kh,F1,j1;M1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kh=function(){};F1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,yi(Mn.current);var o=null;switch(n){case"input":i=Yf(e,i),r=Yf(e,r),o=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),o=[];break;case"textarea":i=Xf(e,i),r=Xf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ku)}eh(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ya.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ya.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ke("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};j1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ns(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vk(e,t,n){var r=t.pendingProps;switch(em(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return Mt(t.type)&&bu(),wt(t),null;case 3:return r=t.stateNode,Go(),Ne(Lt),Ne(Ct),um(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vn!==null&&(Lh(vn),vn=null))),kh(e,t),wt(t),null;case 5:lm(t);var i=yi(Ra.current);if(n=t.type,e!==null&&t.stateNode!=null)F1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return wt(t),null}if(e=yi(Mn.current),Fl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Dn]=t,r[ka]=o,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<qs.length;i++)ke(qs[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":dy(r,o),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ke("invalid",r);break;case"textarea":hy(r,o),ke("invalid",r)}eh(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ml(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ml(r.textContent,a,e),i=["children",""+a]):ya.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ke("scroll",r)}switch(n){case"input":bl(r),fy(r,o,!0);break;case"textarea":bl(r),py(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ku)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dw(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Dn]=t,e[ka]=r,M1(e,t,!1,!1),t.stateNode=e;e:{switch(s=th(n,r),n){case"dialog":ke("cancel",e),ke("close",e),i=r;break;case"iframe":case"object":case"embed":ke("load",e),i=r;break;case"video":case"audio":for(i=0;i<qs.length;i++)ke(qs[i],e);i=r;break;case"source":ke("error",e),i=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=r;break;case"details":ke("toggle",e),i=r;break;case"input":dy(e,r),i=Yf(e,r),ke("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),ke("invalid",e);break;case"textarea":hy(e,r),i=Xf(e,r),ke("invalid",e);break;default:i=r}eh(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?pw(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fw(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&va(e,l):typeof l=="number"&&va(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ya.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ke("scroll",e):l!=null&&$p(e,o,l,s))}switch(n){case"input":bl(e),fy(e,r,!1);break;case"textarea":bl(e),py(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?No(e,!!r.multiple,o,!1):r.defaultValue!=null&&No(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ku)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)j1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=yi(Ra.current),yi(Mn.current),Fl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dn]=t,(o=r.nodeValue!==n)&&(e=Kt,e!==null))switch(e.tag){case 3:Ml(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ml(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=t,t.stateNode=r}return wt(t),null;case 13:if(Ne(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Ht!==null&&t.mode&1&&!(t.flags&128))t1(),Vo(),t.flags|=98560,o=!1;else if(o=Fl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[Dn]=t}else Vo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),o=!1}else vn!==null&&(Lh(vn),vn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Je===0&&(Je=3):Em())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return Go(),kh(e,t),e===null&&Ia(t.stateNode.containerInfo),wt(t),null;case 10:return im(t.type._context),wt(t),null;case 17:return Mt(t.type)&&bu(),wt(t),null;case 19:if(Ne(Me),o=t.memoizedState,o===null)return wt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ns(o,!1);else{if(Je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Lu(e),s!==null){for(t.flags|=128,Ns(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ie(Me,Me.current&1|2),t.child}e=e.sibling}o.tail!==null&&He()>qo&&(t.flags|=128,r=!0,Ns(o,!1),t.lanes=4194304)}else{if(!r)if(e=Lu(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ns(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!De)return wt(t),null}else 2*He()-o.renderingStartTime>qo&&n!==1073741824&&(t.flags|=128,r=!0,Ns(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=He(),t.sibling=null,n=Me.current,Ie(Me,r?n&1|2:n&1),t):(wt(t),null);case 22:case 23:return wm(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Vt&1073741824&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function _k(e,t){switch(em(t),t.tag){case 1:return Mt(t.type)&&bu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Go(),Ne(Lt),Ne(Ct),um(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return lm(t),null;case 13:if(Ne(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Vo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Me),null;case 4:return Go(),null;case 10:return im(t.type._context),null;case 22:case 23:return wm(),null;case 24:return null;default:return null}}var Ul=!1,Et=!1,wk=typeof WeakSet=="function"?WeakSet:Set,j=null;function To(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(e,t,r)}else n.current=null}function bh(e,t,n){try{n()}catch(r){Be(e,t,r)}}var rv=!1;function Ek(e,t){if(dh=Tu,e=Bw(),Xp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++c===r&&(l=s),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fh={focusedElem:e,selectionRange:n},Tu=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,w=y.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:mn(t.type,_),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(C){Be(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return y=rv,rv=!1,y}function oa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&bh(t,n,o)}i=i.next}while(i!==r)}}function Pc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $1(e){var t=e.alternate;t!==null&&(e.alternate=null,$1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dn],delete t[ka],delete t[mh],delete t[rk],delete t[ik])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function U1(e){return e.tag===5||e.tag===3||e.tag===4}function iv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||U1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ph(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ku));else if(r!==4&&(e=e.child,e!==null))for(Ph(e,t,n),e=e.sibling;e!==null;)Ph(e,t,n),e=e.sibling}function Nh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nh(e,t,n),e=e.sibling;e!==null;)Nh(e,t,n),e=e.sibling}var ht=null,gn=!1;function _r(e,t,n){for(n=n.child;n!==null;)z1(e,t,n),n=n.sibling}function z1(e,t,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Sc,n)}catch{}switch(n.tag){case 5:Et||To(n,t);case 6:var r=ht,i=gn;ht=null,_r(e,t,n),ht=r,gn=i,ht!==null&&(gn?(e=ht,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(gn?(e=ht,n=n.stateNode,e.nodeType===8?tf(e.parentNode,n):e.nodeType===1&&tf(e,n),Sa(e)):tf(ht,n.stateNode));break;case 4:r=ht,i=gn,ht=n.stateNode.containerInfo,gn=!0,_r(e,t,n),ht=r,gn=i;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&bh(n,t,s),i=i.next}while(i!==r)}_r(e,t,n);break;case 1:if(!Et&&(To(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Be(n,t,a)}_r(e,t,n);break;case 21:_r(e,t,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,_r(e,t,n),Et=r):_r(e,t,n);break;default:_r(e,t,n)}}function ov(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wk),t.forEach(function(r){var i=Pk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ht=a.stateNode,gn=!1;break e;case 3:ht=a.stateNode.containerInfo,gn=!0;break e;case 4:ht=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(ht===null)throw Error(N(160));z1(o,s,i),ht=null,gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Be(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)B1(t,e),t=t.sibling}function B1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hn(t,e),Nn(e),r&4){try{oa(3,e,e.return),Pc(3,e)}catch(_){Be(e,e.return,_)}try{oa(5,e,e.return)}catch(_){Be(e,e.return,_)}}break;case 1:hn(t,e),Nn(e),r&512&&n!==null&&To(n,n.return);break;case 5:if(hn(t,e),Nn(e),r&512&&n!==null&&To(n,n.return),e.flags&32){var i=e.stateNode;try{va(i,"")}catch(_){Be(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&uw(i,o),th(a,s);var u=th(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?pw(i,d):c==="dangerouslySetInnerHTML"?fw(i,d):c==="children"?va(i,d):$p(i,c,d,u)}switch(a){case"input":Qf(i,o);break;case"textarea":cw(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?No(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?No(i,!!o.multiple,o.defaultValue,!0):No(i,!!o.multiple,o.multiple?[]:"",!1))}i[ka]=o}catch(_){Be(e,e.return,_)}}break;case 6:if(hn(t,e),Nn(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){Be(e,e.return,_)}}break;case 3:if(hn(t,e),Nn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(t.containerInfo)}catch(_){Be(e,e.return,_)}break;case 4:hn(t,e),Nn(e);break;case 13:hn(t,e),Nn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(vm=He())),r&4&&ov(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Et=(u=Et)||c,hn(t,e),Et=u):hn(t,e),Nn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(j=e,c=e.child;c!==null;){for(d=j=c;j!==null;){switch(f=j,m=f.child,f.tag){case 0:case 11:case 14:case 15:oa(4,f,f.return);break;case 1:To(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){Be(r,n,_)}}break;case 5:To(f,f.return);break;case 22:if(f.memoizedState!==null){av(d);continue}}m!==null?(m.return=f,j=m):av(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hw("display",s))}catch(_){Be(e,e.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Be(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:hn(t,e),Nn(e),r&4&&ov(e);break;case 21:break;default:hn(t,e),Nn(e)}}function Nn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(U1(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(va(i,""),r.flags&=-33);var o=iv(e);Nh(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=iv(e);Ph(e,a,s);break;default:throw Error(N(161))}}catch(l){Be(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sk(e,t,n){j=e,W1(e)}function W1(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ul;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Et;a=Ul;var u=Et;if(Ul=s,(Et=l)&&!u)for(j=i;j!==null;)s=j,l=s.child,s.tag===22&&s.memoizedState!==null?lv(i):l!==null?(l.return=s,j=l):lv(i);for(;o!==null;)j=o,W1(o),o=o.sibling;j=i,Ul=a,Et=u}sv(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,j=o):sv(e)}}function sv(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Et||Pc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Et)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wy(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wy(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Et||t.flags&512&&Rh(t)}catch(f){Be(t,t.return,f)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function av(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function lv(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pc(4,t)}catch(l){Be(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Be(t,i,l)}}var o=t.return;try{Rh(t)}catch(l){Be(t,o,l)}break;case 5:var s=t.return;try{Rh(t)}catch(l){Be(t,s,l)}}}catch(l){Be(t,t.return,l)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var Ck=Math.ceil,ju=cr.ReactCurrentDispatcher,gm=cr.ReactCurrentOwner,un=cr.ReactCurrentBatchConfig,fe=0,lt=null,qe=null,mt=0,Vt=0,Io=ei(0),Je=0,Oa=null,Ai=0,Nc=0,ym=0,sa=null,Pt=null,vm=0,qo=1/0,Bn=null,$u=!1,Ah=null,jr=null,zl=!1,Ar=null,Uu=0,aa=0,Oh=null,su=-1,au=0;function kt(){return fe&6?He():su!==-1?su:su=He()}function $r(e){return e.mode&1?fe&2&&mt!==0?mt&-mt:sk.transition!==null?(au===0&&(au=xw()),au):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Ow(e.type)),e):1}function Tn(e,t,n,r){if(50<aa)throw aa=0,Oh=null,Error(N(185));ol(e,n,r),(!(fe&2)||e!==lt)&&(e===lt&&(!(fe&2)&&(Nc|=n),Je===4&&xr(e,mt)),Ft(e,r),n===1&&fe===0&&!(t.mode&1)&&(qo=He()+500,kc&&ti()))}function Ft(e,t){var n=e.callbackNode;sx(e,t);var r=Cu(e,e===lt?mt:0);if(r===0)n!==null&&yy(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yy(n),t===1)e.tag===0?ok(uv.bind(null,e)):Xw(uv.bind(null,e)),tk(function(){!(fe&6)&&ti()}),n=null;else{switch(kw(r)){case 1:n=Vp;break;case 4:n=Tw;break;case 16:n=Su;break;case 536870912:n=Iw;break;default:n=Su}n=J1(n,V1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function V1(e,t){if(su=-1,au=0,fe&6)throw Error(N(327));var n=e.callbackNode;if(Mo()&&e.callbackNode!==n)return null;var r=Cu(e,e===lt?mt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zu(e,r);else{t=r;var i=fe;fe|=2;var o=G1();(lt!==e||mt!==t)&&(Bn=null,qo=He()+500,Ci(e,t));do try{xk();break}catch(a){H1(e,a)}while(!0);rm(),ju.current=o,fe=i,qe!==null?t=0:(lt=null,mt=0,t=Je)}if(t!==0){if(t===2&&(i=sh(e),i!==0&&(r=i,t=Dh(e,i))),t===1)throw n=Oa,Ci(e,0),xr(e,r),Ft(e,He()),n;if(t===6)xr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Tk(i)&&(t=zu(e,r),t===2&&(o=sh(e),o!==0&&(r=o,t=Dh(e,o))),t===1))throw n=Oa,Ci(e,0),xr(e,r),Ft(e,He()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:ui(e,Pt,Bn);break;case 3:if(xr(e,r),(r&130023424)===r&&(t=vm+500-He(),10<t)){if(Cu(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){kt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ph(ui.bind(null,e,Pt,Bn),t);break}ui(e,Pt,Bn);break;case 4:if(xr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Cn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ck(r/1960))-r,10<r){e.timeoutHandle=ph(ui.bind(null,e,Pt,Bn),r);break}ui(e,Pt,Bn);break;case 5:ui(e,Pt,Bn);break;default:throw Error(N(329))}}}return Ft(e,He()),e.callbackNode===n?V1.bind(null,e):null}function Dh(e,t){var n=sa;return e.current.memoizedState.isDehydrated&&(Ci(e,t).flags|=256),e=zu(e,t),e!==2&&(t=Pt,Pt=n,t!==null&&Lh(t)),e}function Lh(e){Pt===null?Pt=e:Pt.push.apply(Pt,e)}function Tk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!kn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xr(e,t){for(t&=~ym,t&=~Nc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Cn(t),r=1<<n;e[n]=-1,t&=~r}}function uv(e){if(fe&6)throw Error(N(327));Mo();var t=Cu(e,0);if(!(t&1))return Ft(e,He()),null;var n=zu(e,t);if(e.tag!==0&&n===2){var r=sh(e);r!==0&&(t=r,n=Dh(e,r))}if(n===1)throw n=Oa,Ci(e,0),xr(e,t),Ft(e,He()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ui(e,Pt,Bn),Ft(e,He()),null}function _m(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(qo=He()+500,kc&&ti())}}function Oi(e){Ar!==null&&Ar.tag===0&&!(fe&6)&&Mo();var t=fe;fe|=1;var n=un.transition,r=ge;try{if(un.transition=null,ge=1,e)return e()}finally{ge=r,un.transition=n,fe=t,!(fe&6)&&ti()}}function wm(){Vt=Io.current,Ne(Io)}function Ci(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ek(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(em(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bu();break;case 3:Go(),Ne(Lt),Ne(Ct),um();break;case 5:lm(r);break;case 4:Go();break;case 13:Ne(Me);break;case 19:Ne(Me);break;case 10:im(r.type._context);break;case 22:case 23:wm()}n=n.return}if(lt=e,qe=e=Ur(e.current,null),mt=Vt=t,Je=0,Oa=null,ym=Nc=Ai=0,Pt=sa=null,gi!==null){for(t=0;t<gi.length;t++)if(n=gi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}gi=null}return e}function H1(e,t){do{var n=qe;try{if(rm(),ru.current=Fu,Mu){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mu=!1}if(Ni=0,rt=Ye=je=null,ia=!1,Pa=0,gm.current=null,n===null||n.return===null){Je=1,Oa=t,qe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=mt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Qy(s);if(m!==null){m.flags&=-257,Jy(m,s,a,o,t),m.mode&1&&Yy(o,u,t),t=m,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){Yy(o,u,t),Em();break e}l=Error(N(426))}}else if(De&&a.mode&1){var w=Qy(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Jy(w,s,a,o,t),tm(Ko(l,a));break e}}o=l=Ko(l,a),Je!==4&&(Je=2),sa===null?sa=[o]:sa.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=b1(o,l,t);By(o,p);break e;case 1:a=l;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(jr===null||!jr.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=R1(o,a,t);By(o,C);break e}}o=o.return}while(o!==null)}q1(n)}catch(b){t=b,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function G1(){var e=ju.current;return ju.current=Fu,e===null?Fu:e}function Em(){(Je===0||Je===3||Je===2)&&(Je=4),lt===null||!(Ai&268435455)&&!(Nc&268435455)||xr(lt,mt)}function zu(e,t){var n=fe;fe|=2;var r=G1();(lt!==e||mt!==t)&&(Bn=null,Ci(e,t));do try{Ik();break}catch(i){H1(e,i)}while(!0);if(rm(),fe=n,ju.current=r,qe!==null)throw Error(N(261));return lt=null,mt=0,Je}function Ik(){for(;qe!==null;)K1(qe)}function xk(){for(;qe!==null&&!JI();)K1(qe)}function K1(e){var t=Q1(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?q1(e):qe=t,gm.current=null}function q1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_k(n,t),n!==null){n.flags&=32767,qe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Je=6,qe=null;return}}else if(n=vk(n,t,Vt),n!==null){qe=n;return}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);Je===0&&(Je=5)}function ui(e,t,n){var r=ge,i=un.transition;try{un.transition=null,ge=1,kk(e,t,n,r)}finally{un.transition=i,ge=r}return null}function kk(e,t,n,r){do Mo();while(Ar!==null);if(fe&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ax(e,o),e===lt&&(qe=lt=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zl||(zl=!0,J1(Su,function(){return Mo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=un.transition,un.transition=null;var s=ge;ge=1;var a=fe;fe|=4,gm.current=null,Ek(e,n),B1(n,e),Kx(fh),Tu=!!dh,fh=dh=null,e.current=n,Sk(n),XI(),fe=a,ge=s,un.transition=o}else e.current=n;if(zl&&(zl=!1,Ar=e,Uu=i),o=e.pendingLanes,o===0&&(jr=null),tx(n.stateNode),Ft(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($u)throw $u=!1,e=Ah,Ah=null,e;return Uu&1&&e.tag!==0&&Mo(),o=e.pendingLanes,o&1?e===Oh?aa++:(aa=0,Oh=e):aa=0,ti(),null}function Mo(){if(Ar!==null){var e=kw(Uu),t=un.transition,n=ge;try{if(un.transition=null,ge=16>e?16:e,Ar===null)var r=!1;else{if(e=Ar,Ar=null,Uu=0,fe&6)throw Error(N(331));var i=fe;for(fe|=4,j=e.current;j!==null;){var o=j,s=o.child;if(j.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:oa(8,c,o)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var f=c.sibling,m=c.return;if($1(c),c===u){j=null;break}if(f!==null){f.return=m,j=f;break}j=m}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}j=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,j=s;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:oa(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,j=p;break e}j=o.return}}var h=e.current;for(j=h;j!==null;){s=j;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,j=g;else e:for(s=h;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Pc(9,a)}}catch(b){Be(a,a.return,b)}if(a===s){j=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,j=C;break e}j=a.return}}if(fe=i,ti(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Sc,e)}catch{}r=!0}return r}finally{ge=n,un.transition=t}}return!1}function cv(e,t,n){t=Ko(n,t),t=b1(e,t,1),e=Fr(e,t,1),t=kt(),e!==null&&(ol(e,1,t),Ft(e,t))}function Be(e,t,n){if(e.tag===3)cv(e,e,n);else for(;t!==null;){if(t.tag===3){cv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){e=Ko(n,e),e=R1(t,e,1),t=Fr(t,e,1),e=kt(),t!==null&&(ol(t,1,e),Ft(t,e));break}}t=t.return}}function bk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=kt(),e.pingedLanes|=e.suspendedLanes&n,lt===e&&(mt&n)===n&&(Je===4||Je===3&&(mt&130023424)===mt&&500>He()-vm?Ci(e,0):ym|=n),Ft(e,t)}function Y1(e,t){t===0&&(e.mode&1?(t=Nl,Nl<<=1,!(Nl&130023424)&&(Nl=4194304)):t=1);var n=kt();e=nr(e,t),e!==null&&(ol(e,t,n),Ft(e,n))}function Rk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Y1(e,n)}function Pk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Y1(e,n)}var Q1;Q1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Lt.current)At=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return At=!1,yk(e,t,n);At=!!(e.flags&131072)}else At=!1,De&&t.flags&1048576&&Zw(t,Nu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ou(e,t),e=t.pendingProps;var i=Wo(t,Ct.current);Lo(t,n),i=dm(null,t,r,e,i,n);var o=fm();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mt(r)?(o=!0,Ru(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sm(t),i.updater=bc,t.stateNode=i,i._reactInternals=t,Eh(t,r,e,n),t=Th(null,t,r,!0,o,n)):(t.tag=0,De&&o&&Zp(t),xt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ou(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ak(r),e=mn(r,e),i){case 0:t=Ch(null,t,r,e,n);break e;case 1:t=ev(null,t,r,e,n);break e;case 11:t=Xy(null,t,r,e,n);break e;case 14:t=Zy(null,t,r,mn(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mn(r,i),Ch(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mn(r,i),ev(e,t,r,i,n);case 3:e:{if(O1(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,i=o.element,r1(e,t),Du(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ko(Error(N(423)),t),t=tv(e,t,r,n,i);break e}else if(r!==i){i=Ko(Error(N(424)),t),t=tv(e,t,r,n,i);break e}else for(Ht=Mr(t.stateNode.containerInfo.firstChild),Kt=t,De=!0,vn=null,n=a1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vo(),r===i){t=rr(e,t,n);break e}xt(e,t,r,n)}t=t.child}return t;case 5:return l1(t),e===null&&vh(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,hh(r,i)?s=null:o!==null&&hh(r,o)&&(t.flags|=32),A1(e,t),xt(e,t,s,n),t.child;case 6:return e===null&&vh(t),null;case 13:return D1(e,t,n);case 4:return am(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ho(t,null,r,n):xt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mn(r,i),Xy(e,t,r,i,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ie(Au,r._currentValue),r._currentValue=s,o!==null)if(kn(o.value,s)){if(o.children===i.children&&!Lt.current){t=rr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Qn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_h(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),_h(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}xt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Lo(t,n),i=cn(i),r=r(i),t.flags|=1,xt(e,t,r,n),t.child;case 14:return r=t.type,i=mn(r,t.pendingProps),i=mn(r.type,i),Zy(e,t,r,i,n);case 15:return P1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mn(r,i),ou(e,t),t.tag=1,Mt(r)?(e=!0,Ru(t)):e=!1,Lo(t,n),o1(t,r,i),Eh(t,r,i,n),Th(null,t,r,!0,e,n);case 19:return L1(e,t,n);case 22:return N1(e,t,n)}throw Error(N(156,t.tag))};function J1(e,t){return Cw(e,t)}function Nk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(e,t,n,r){return new Nk(e,t,n,r)}function Sm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ak(e){if(typeof e=="function")return Sm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zp)return 11;if(e===Bp)return 14}return 2}function Ur(e,t){var n=e.alternate;return n===null?(n=ln(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lu(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Sm(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case mo:return Ti(n.children,i,o,t);case Up:s=8,i|=8;break;case Hf:return e=ln(12,n,t,i|2),e.elementType=Hf,e.lanes=o,e;case Gf:return e=ln(13,n,t,i),e.elementType=Gf,e.lanes=o,e;case Kf:return e=ln(19,n,t,i),e.elementType=Kf,e.lanes=o,e;case sw:return Ac(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case iw:s=10;break e;case ow:s=9;break e;case zp:s=11;break e;case Bp:s=14;break e;case Cr:s=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=ln(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ti(e,t,n,r){return e=ln(7,e,r,t),e.lanes=n,e}function Ac(e,t,n,r){return e=ln(22,e,r,t),e.elementType=sw,e.lanes=n,e.stateNode={isHidden:!1},e}function cf(e,t,n){return e=ln(6,e,null,t),e.lanes=n,e}function df(e,t,n){return t=ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ok(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vd(0),this.expirationTimes=Vd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cm(e,t,n,r,i,o,s,a,l){return e=new Ok(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ln(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sm(o),e}function Dk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:po,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function X1(e){if(!e)return Kr;e=e._reactInternals;e:{if(Yi(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Mt(n))return Jw(e,n,t)}return t}function Z1(e,t,n,r,i,o,s,a,l){return e=Cm(n,r,!0,e,i,o,s,a,l),e.context=X1(null),n=e.current,r=kt(),i=$r(n),o=Qn(r,i),o.callback=t??null,Fr(n,o,i),e.current.lanes=i,ol(e,i,r),Ft(e,r),e}function Oc(e,t,n,r){var i=t.current,o=kt(),s=$r(i);return n=X1(n),t.context===null?t.context=n:t.pendingContext=n,t=Qn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fr(i,t,s),e!==null&&(Tn(e,i,s,o),nu(e,i,s)),s}function Bu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tm(e,t){dv(e,t),(e=e.alternate)&&dv(e,t)}function Lk(){return null}var eE=typeof reportError=="function"?reportError:function(e){console.error(e)};function Im(e){this._internalRoot=e}Dc.prototype.render=Im.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Oc(e,t,null,null)};Dc.prototype.unmount=Im.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Oi(function(){Oc(null,e,null,null)}),t[tr]=null}};function Dc(e){this._internalRoot=e}Dc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pw();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ir.length&&t!==0&&t<Ir[n].priority;n++);Ir.splice(n,0,e),n===0&&Aw(e)}};function xm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fv(){}function Mk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Bu(s);o.call(u)}}var s=Z1(t,r,e,0,null,!1,!1,"",fv);return e._reactRootContainer=s,e[tr]=s.current,Ia(e.nodeType===8?e.parentNode:e),Oi(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Bu(l);a.call(u)}}var l=Cm(e,0,!1,null,null,!1,!1,"",fv);return e._reactRootContainer=l,e[tr]=l.current,Ia(e.nodeType===8?e.parentNode:e),Oi(function(){Oc(t,l,n,r)}),l}function Mc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Bu(s);a.call(l)}}Oc(t,s,e,i)}else s=Mk(n,t,e,i,r);return Bu(s)}bw=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ks(t.pendingLanes);n!==0&&(Hp(t,n|1),Ft(t,He()),!(fe&6)&&(qo=He()+500,ti()))}break;case 13:Oi(function(){var r=nr(e,1);if(r!==null){var i=kt();Tn(r,e,1,i)}}),Tm(e,1)}};Gp=function(e){if(e.tag===13){var t=nr(e,134217728);if(t!==null){var n=kt();Tn(t,e,134217728,n)}Tm(e,134217728)}};Rw=function(e){if(e.tag===13){var t=$r(e),n=nr(e,t);if(n!==null){var r=kt();Tn(n,e,t,r)}Tm(e,t)}};Pw=function(){return ge};Nw=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};rh=function(e,t,n){switch(t){case"input":if(Qf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xc(r);if(!i)throw Error(N(90));lw(r),Qf(r,i)}}}break;case"textarea":cw(e,n);break;case"select":t=n.value,t!=null&&No(e,!!n.multiple,t,!1)}};yw=_m;vw=Oi;var Fk={usingClientEntryPoint:!1,Events:[al,_o,xc,mw,gw,_m]},As={findFiberByHostInstance:mi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jk={bundleType:As.bundleType,version:As.version,rendererPackageName:As.rendererPackageName,rendererConfig:As.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ew(e),e===null?null:e.stateNode},findFiberByHostInstance:As.findFiberByHostInstance||Lk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{Sc=Bl.inject(jk),Ln=Bl}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fk;Jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xm(t))throw Error(N(200));return Dk(e,t,null,n)};Jt.createRoot=function(e,t){if(!xm(e))throw Error(N(299));var n=!1,r="",i=eE;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cm(e,1,!1,null,null,n,!1,r,i),e[tr]=t.current,Ia(e.nodeType===8?e.parentNode:e),new Im(t)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Ew(t),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return Oi(e)};Jt.hydrate=function(e,t,n){if(!Lc(t))throw Error(N(200));return Mc(null,e,t,!0,n)};Jt.hydrateRoot=function(e,t,n){if(!xm(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=eE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Z1(t,null,e,1,n??null,i,!1,o,s),e[tr]=t.current,Ia(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Dc(t)};Jt.render=function(e,t,n){if(!Lc(t))throw Error(N(200));return Mc(null,e,t,!1,n)};Jt.unmountComponentAtNode=function(e){if(!Lc(e))throw Error(N(40));return e._reactRootContainer?(Oi(function(){Mc(null,null,e,!1,function(){e._reactRootContainer=null,e[tr]=null})}),!0):!1};Jt.unstable_batchedUpdates=_m;Jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Lc(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Mc(e,t,n,!1,r)};Jt.version="18.2.0-next-9e3b772b8-20220608";function tE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tE)}catch(e){console.error(e)}}tE(),Z0.exports=Jt;var km=Z0.exports;const $k=Ap(km),Uk=B0({__proto__:null,default:$k},[km]);var hv=km;Wf.createRoot=hv.createRoot,Wf.hydrateRoot=hv.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function We(){return We=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},We.apply(this,arguments)}var Ve;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ve||(Ve={}));const pv="popstate";function zk(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Da("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Li(i)}return Wk(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Di(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bk(){return Math.random().toString(36).substr(2,8)}function mv(e,t){return{usr:e.state,key:e.key,idx:t}}function Da(e,t,n,r){return n===void 0&&(n=null),We({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dr(t):t,{state:n,key:t&&t.key||r||Bk()})}function Li(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Wk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ve.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(We({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=Ve.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:p})}function f(w,p){a=Ve.Push;let h=Da(_.location,w,p);n&&n(h,w),u=c()+1;let g=mv(h,u),C=_.createHref(h);try{s.pushState(g,"",C)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(C)}o&&l&&l({action:a,location:_.location,delta:1})}function m(w,p){a=Ve.Replace;let h=Da(_.location,w,p);n&&n(h,w),u=c();let g=mv(h,u),C=_.createHref(h);s.replaceState(g,"",C),o&&l&&l({action:a,location:_.location,delta:0})}function y(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:Li(w);return re(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let _={get action(){return a},get location(){return e(i,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(pv,d),l=w,()=>{i.removeEventListener(pv,d),l=null}},createHref(w){return t(i,w)},createURL:y,encodeLocation(w){let p=y(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:m,go(w){return s.go(w)}};return _}var ze;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ze||(ze={}));const Vk=new Set(["lazy","caseSensitive","path","id","index","children"]);function Hk(e){return e.index===!0}function Mh(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let s=[...n,o],a=typeof i.id=="string"?i.id:s.join("-");if(re(i.index!==!0||!i.children,"Cannot specify children on an index route"),re(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Hk(i)){let l=We({},i,t(i),{id:a});return r[a]=l,l}else{let l=We({},i,t(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Mh(i.children,t,s,r)),l}})}function xo(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?dr(t):t,i=ir(r.pathname||"/",n);if(i==null)return null;let o=nE(e);Kk(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=nb(o[a],ib(i));return s}function Gk(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function nE(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Jn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(re(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),nE(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:eb(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of rE(o.path))i(o,s,l)}),t}function rE(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=rE(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Kk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:tb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qk=/^:[\w-]+$/,Yk=3,Qk=2,Jk=1,Xk=10,Zk=-2,gv=e=>e==="*";function eb(e,t){let n=e.split("/"),r=n.length;return n.some(gv)&&(r+=Zk),t&&(r+=Qk),n.filter(i=>!gv(i)).reduce((i,o)=>i+(qk.test(o)?Yk:o===""?Jk:Xk),r)}function tb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function nb(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Fh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:Jn([i,c.pathname]),pathnameBase:lb(Jn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Jn([i,c.pathnameBase]))}return o}function Fh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rb(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:m}=c;if(f==="*"){let _=a[d]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[d];return m&&!y?u[f]=void 0:u[f]=ob(y||"",f),u},{}),pathname:o,pathnameBase:s,pattern:e}}function rb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Di(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ib(e){try{return decodeURI(e)}catch(t){return Di(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ob(e,t){try{return decodeURIComponent(e)}catch(n){return Di(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ir(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function sb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?dr(e):e;return{pathname:n?n.startsWith("/")?n:ab(n,t):t,search:ub(r),hash:cb(i)}}function ab(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ff(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fc(e,t){let n=iE(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=dr(e):(i=We({},e),re(!i.pathname||!i.pathname.includes("?"),ff("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),ff("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),ff("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=sb(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Jn=e=>e.join("/").replace(/\/\/+/g,"/"),lb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ub=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,cb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class bm{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function oE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sE=["post","put","patch","delete"],db=new Set(sE),fb=["get",...sE],hb=new Set(fb),pb=new Set([301,302,303,307,308]),mb=new Set([307,308]),hf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},gb={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Os={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},aE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yb=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),lE="remix-router-transitions";function vb(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;re(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let T=e.detectErrorBoundary;i=x=>({hasErrorBoundary:T(x)})}else i=yb;let o={},s=Mh(e.routes,i,void 0,o),a,l=e.basename||"/",u=We({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),c=null,d=new Set,f=null,m=null,y=null,_=e.hydrationData!=null,w=xo(s,e.history.location,l),p=null;if(w==null){let T=on(404,{pathname:e.history.location.pathname}),{matches:x,route:R}=Tv(s);w=x,p={[R.id]:T}}let h,g=w.some(T=>T.route.lazy),C=w.some(T=>T.route.loader);if(g)h=!1;else if(!C)h=!0;else if(u.v7_partialHydration){let T=e.hydrationData?e.hydrationData.loaderData:null,x=e.hydrationData?e.hydrationData.errors:null;h=w.every(R=>R.route.loader&&R.route.loader.hydrate!==!0&&(T&&T[R.route.id]!==void 0||x&&x[R.route.id]!==void 0))}else h=e.hydrationData!=null;let b,v={historyAction:e.history.action,location:e.history.location,matches:w,initialized:h,navigation:hf,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map,blockers:new Map},S=Ve.Pop,P=!1,O,$=!1,Q=new Map,ue=null,ee=!1,Ee=!1,zt=[],en=[],pe=new Map,D=0,z=-1,V=new Map,J=new Set,X=new Map,yt=new Map,xe=new Set,Le=new Map,Ae=new Map,ct=!1;function Rn(){if(c=e.history.listen(T=>{let{action:x,location:R,delta:L}=T;if(ct){ct=!1;return}Di(Ae.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=ty({currentLocation:v.location,nextLocation:R,historyAction:x});if(B&&L!=null){ct=!0,e.history.go(L*-1),oo(B,{state:"blocked",location:R,proceed(){oo(B,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),e.history.go(L)},reset(){let ie=new Map(v.blockers);ie.set(B,Os),Ue({blockers:ie})}});return}return zn(x,R)}),n){Rb(t,Q);let T=()=>Pb(t,Q);t.addEventListener("pagehide",T),ue=()=>t.removeEventListener("pagehide",T)}return v.initialized||zn(Ve.Pop,v.location,{initialHydration:!0}),b}function tn(){c&&c(),ue&&ue(),d.clear(),O&&O.abort(),v.fetchers.forEach((T,x)=>de(x)),v.blockers.forEach((T,x)=>Ts(x))}function yr(T){return d.add(T),()=>d.delete(T)}function Ue(T,x){x===void 0&&(x={}),v=We({},v,T);let R=[],L=[];u.v7_fetcherPersist&&v.fetchers.forEach((B,ie)=>{B.state==="idle"&&(xe.has(ie)?L.push(ie):R.push(ie))}),[...d].forEach(B=>B(v,{deletedFetchers:L,unstable_viewTransitionOpts:x.viewTransitionOpts,unstable_flushSync:x.flushSync===!0})),u.v7_fetcherPersist&&(R.forEach(B=>v.fetchers.delete(B)),L.forEach(B=>de(B)))}function vt(T,x,R){var L,B;let{flushSync:ie}=R===void 0?{}:R,q=v.actionData!=null&&v.navigation.formMethod!=null&&yn(v.navigation.formMethod)&&v.navigation.state==="loading"&&((L=T.state)==null?void 0:L._isRedirect)!==!0,G;x.actionData?Object.keys(x.actionData).length>0?G=x.actionData:G=null:q?G=v.actionData:G=null;let H=x.loaderData?Cv(v.loaderData,x.loaderData,x.matches||[],x.errors):v.loaderData,ce=v.blockers;ce.size>0&&(ce=new Map(ce),ce.forEach((Se,dt)=>ce.set(dt,Os)));let Ze=P===!0||v.navigation.formMethod!=null&&yn(v.navigation.formMethod)&&((B=T.state)==null?void 0:B._isRedirect)!==!0;a&&(s=a,a=void 0),ee||S===Ve.Pop||(S===Ve.Push?e.history.push(T,T.state):S===Ve.Replace&&e.history.replace(T,T.state));let te;if(S===Ve.Pop){let Se=Q.get(v.location.pathname);Se&&Se.has(T.pathname)?te={currentLocation:v.location,nextLocation:T}:Q.has(T.pathname)&&(te={currentLocation:T,nextLocation:v.location})}else if($){let Se=Q.get(v.location.pathname);Se?Se.add(T.pathname):(Se=new Set([T.pathname]),Q.set(v.location.pathname,Se)),te={currentLocation:v.location,nextLocation:T}}Ue(We({},x,{actionData:G,loaderData:H,historyAction:S,location:T,initialized:!0,navigation:hf,revalidation:"idle",restoreScrollPosition:ry(T,x.matches||v.matches),preventScrollReset:Ze,blockers:ce}),{viewTransitionOpts:te,flushSync:ie===!0}),S=Ve.Pop,P=!1,$=!1,ee=!1,Ee=!1,zt=[],en=[]}async function Ss(T,x){if(typeof T=="number"){e.history.go(T);return}let R=jh(v.location,v.matches,l,u.v7_prependBasename,T,u.v7_relativeSplatPath,x==null?void 0:x.fromRouteId,x==null?void 0:x.relative),{path:L,submission:B,error:ie}=yv(u.v7_normalizeFormMethod,!1,R,x),q=v.location,G=Da(v.location,L,x&&x.state);G=We({},G,e.history.encodeLocation(G));let H=x&&x.replace!=null?x.replace:void 0,ce=Ve.Push;H===!0?ce=Ve.Replace:H===!1||B!=null&&yn(B.formMethod)&&B.formAction===v.location.pathname+v.location.search&&(ce=Ve.Replace);let Ze=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,te=(x&&x.unstable_flushSync)===!0,Se=ty({currentLocation:q,nextLocation:G,historyAction:ce});if(Se){oo(Se,{state:"blocked",location:G,proceed(){oo(Se,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),Ss(T,x)},reset(){let dt=new Map(v.blockers);dt.set(Se,Os),Ue({blockers:dt})}});return}return await zn(ce,G,{submission:B,pendingError:ie,preventScrollReset:Ze,replace:x&&x.replace,enableViewTransition:x&&x.unstable_viewTransition,flushSync:te})}function Rd(){if(M(),Ue({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){zn(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}zn(S||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function zn(T,x,R){O&&O.abort(),O=null,S=T,ee=(R&&R.startUninterruptedRevalidation)===!0,uI(v.location,v.matches),P=(R&&R.preventScrollReset)===!0,$=(R&&R.enableViewTransition)===!0;let L=a||s,B=R&&R.overrideNavigation,ie=xo(L,x,l),q=(R&&R.flushSync)===!0;if(!ie){let dt=on(404,{pathname:x.pathname}),{matches:nn,route:et}=Tv(L);Dd(),vt(x,{matches:nn,loaderData:{},errors:{[et.id]:dt}},{flushSync:q});return}if(v.initialized&&!Ee&&Cb(v.location,x)&&!(R&&R.submission&&yn(R.submission.formMethod))){vt(x,{matches:ie},{flushSync:q});return}O=new AbortController;let G=Ls(e.history,x,O.signal,R&&R.submission),H,ce;if(R&&R.pendingError)ce={[la(ie).route.id]:R.pendingError};else if(R&&R.submission&&yn(R.submission.formMethod)){let dt=await Pd(G,x,R.submission,ie,{replace:R.replace,flushSync:q});if(dt.shortCircuited)return;H=dt.pendingActionData,ce=dt.pendingActionError,B=pf(x,R.submission),q=!1,G=new Request(G.url,{signal:G.signal})}let{shortCircuited:Ze,loaderData:te,errors:Se}=await Nd(G,x,ie,B,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,R&&R.initialHydration===!0,q,H,ce);Ze||(O=null,vt(x,We({matches:ie},H?{actionData:H}:{},{loaderData:te,errors:Se})))}async function Pd(T,x,R,L,B){B===void 0&&(B={}),M();let ie=kb(x,R);Ue({navigation:ie},{flushSync:B.flushSync===!0});let q,G=Uh(L,x);if(!G.route.action&&!G.route.lazy)q={type:ze.error,error:on(405,{method:T.method,pathname:x.pathname,routeId:G.route.id})};else if(q=await Ds("action",T,G,L,o,i,l,u.v7_relativeSplatPath),T.signal.aborted)return{shortCircuited:!0};if(_i(q)){let H;return B&&B.replace!=null?H=B.replace:H=q.location===v.location.pathname+v.location.search,await oi(v,q,{submission:R,replace:H}),{shortCircuited:!0}}if(ko(q)){let H=la(L,G.route.id);return(B&&B.replace)!==!0&&(S=Ve.Push),{pendingActionData:{},pendingActionError:{[H.route.id]:q.error}}}if(vi(q))throw on(400,{type:"defer-action"});return{pendingActionData:{[G.route.id]:q.data}}}async function Nd(T,x,R,L,B,ie,q,G,H,ce,Ze){let te=L||pf(x,B),Se=B||ie||kv(te),dt=a||s,[nn,et]=vv(e.history,v,R,Se,x,u.v7_partialHydration&&G===!0,Ee,zt,en,xe,X,J,dt,l,ce,Ze);if(Dd(_e=>!(R&&R.some(Oe=>Oe.route.id===_e))||nn&&nn.some(Oe=>Oe.route.id===_e)),z=++D,nn.length===0&&et.length===0){let _e=io();return vt(x,We({matches:R,loaderData:{},errors:Ze||null},ce?{actionData:ce}:{},_e?{fetchers:new Map(v.fetchers)}:{}),{flushSync:H}),{shortCircuited:!0}}if(!ee&&(!u.v7_partialHydration||!G)){et.forEach(Oe=>{let Pn=v.fetchers.get(Oe.key),Il=Ms(void 0,Pn?Pn.data:void 0);v.fetchers.set(Oe.key,Il)});let _e=ce||v.actionData;Ue(We({navigation:te},_e?Object.keys(_e).length===0?{actionData:null}:{actionData:_e}:{},et.length>0?{fetchers:new Map(v.fetchers)}:{}),{flushSync:H})}et.forEach(_e=>{pe.has(_e.key)&&Xe(_e.key),_e.controller&&pe.set(_e.key,_e.controller)});let so=()=>et.forEach(_e=>Xe(_e.key));O&&O.signal.addEventListener("abort",so);let{results:Ld,loaderResults:ao,fetcherResults:vr}=await k(v.matches,R,nn,et,T);if(T.signal.aborted)return{shortCircuited:!0};O&&O.signal.removeEventListener("abort",so),et.forEach(_e=>pe.delete(_e.key));let si=Iv(Ld);if(si){if(si.idx>=nn.length){let _e=et[si.idx-nn.length].key;J.add(_e)}return await oi(v,si.result,{replace:q}),{shortCircuited:!0}}let{loaderData:Md,errors:Fd}=Sv(v,R,nn,ao,Ze,et,vr,Le);Le.forEach((_e,Oe)=>{_e.subscribe(Pn=>{(Pn||_e.done)&&Le.delete(Oe)})});let jd=io(),lo=Cl(z),Tl=jd||lo||et.length>0;return We({loaderData:Md,errors:Fd},Tl?{fetchers:new Map(v.fetchers)}:{})}function Ad(T,x,R,L){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");pe.has(T)&&Xe(T);let B=(L&&L.unstable_flushSync)===!0,ie=a||s,q=jh(v.location,v.matches,l,u.v7_prependBasename,R,u.v7_relativeSplatPath,x,L==null?void 0:L.relative),G=xo(ie,q,l);if(!G){W(T,x,on(404,{pathname:q}),{flushSync:B});return}let{path:H,submission:ce,error:Ze}=yv(u.v7_normalizeFormMethod,!0,q,L);if(Ze){W(T,x,Ze,{flushSync:B});return}let te=Uh(G,H);if(P=(L&&L.preventScrollReset)===!0,ce&&yn(ce.formMethod)){Cs(T,x,H,te,G,B,ce);return}X.set(T,{routeId:x,path:H}),Od(T,x,H,te,G,B,ce)}async function Cs(T,x,R,L,B,ie,q){if(M(),X.delete(T),!L.route.action&&!L.route.lazy){let Oe=on(405,{method:q.formMethod,pathname:R,routeId:x});W(T,x,Oe,{flushSync:ie});return}let G=v.fetchers.get(T);F(T,bb(q,G),{flushSync:ie});let H=new AbortController,ce=Ls(e.history,R,H.signal,q);pe.set(T,H);let Ze=D,te=await Ds("action",ce,L,B,o,i,l,u.v7_relativeSplatPath);if(ce.signal.aborted){pe.get(T)===H&&pe.delete(T);return}if(u.v7_fetcherPersist&&xe.has(T)){if(_i(te)||ko(te)){F(T,Er(void 0));return}}else{if(_i(te))if(pe.delete(T),z>Ze){F(T,Er(void 0));return}else return J.add(T),F(T,Ms(q)),oi(v,te,{fetcherSubmission:q});if(ko(te)){W(T,x,te.error);return}}if(vi(te))throw on(400,{type:"defer-action"});let Se=v.navigation.location||v.location,dt=Ls(e.history,Se,H.signal),nn=a||s,et=v.navigation.state!=="idle"?xo(nn,v.navigation.location,l):v.matches;re(et,"Didn't find any matches after fetcher action");let so=++D;V.set(T,so);let Ld=Ms(q,te.data);v.fetchers.set(T,Ld);let[ao,vr]=vv(e.history,v,et,q,Se,!1,Ee,zt,en,xe,X,J,nn,l,{[L.route.id]:te.data},void 0);vr.filter(Oe=>Oe.key!==T).forEach(Oe=>{let Pn=Oe.key,Il=v.fetchers.get(Pn),dI=Ms(void 0,Il?Il.data:void 0);v.fetchers.set(Pn,dI),pe.has(Pn)&&Xe(Pn),Oe.controller&&pe.set(Pn,Oe.controller)}),Ue({fetchers:new Map(v.fetchers)});let si=()=>vr.forEach(Oe=>Xe(Oe.key));H.signal.addEventListener("abort",si);let{results:Md,loaderResults:Fd,fetcherResults:jd}=await k(v.matches,et,ao,vr,dt);if(H.signal.aborted)return;H.signal.removeEventListener("abort",si),V.delete(T),pe.delete(T),vr.forEach(Oe=>pe.delete(Oe.key));let lo=Iv(Md);if(lo){if(lo.idx>=ao.length){let Oe=vr[lo.idx-ao.length].key;J.add(Oe)}return oi(v,lo.result)}let{loaderData:Tl,errors:_e}=Sv(v,v.matches,ao,Fd,void 0,vr,jd,Le);if(v.fetchers.has(T)){let Oe=Er(te.data);v.fetchers.set(T,Oe)}Cl(so),v.navigation.state==="loading"&&so>z?(re(S,"Expected pending action"),O&&O.abort(),vt(v.navigation.location,{matches:et,loaderData:Tl,errors:_e,fetchers:new Map(v.fetchers)})):(Ue({errors:_e,loaderData:Cv(v.loaderData,Tl,et,_e),fetchers:new Map(v.fetchers)}),Ee=!1)}async function Od(T,x,R,L,B,ie,q){let G=v.fetchers.get(T);F(T,Ms(q,G?G.data:void 0),{flushSync:ie});let H=new AbortController,ce=Ls(e.history,R,H.signal);pe.set(T,H);let Ze=D,te=await Ds("loader",ce,L,B,o,i,l,u.v7_relativeSplatPath);if(vi(te)&&(te=await dE(te,ce.signal,!0)||te),pe.get(T)===H&&pe.delete(T),!ce.signal.aborted){if(xe.has(T)){F(T,Er(void 0));return}if(_i(te))if(z>Ze){F(T,Er(void 0));return}else{J.add(T),await oi(v,te);return}if(ko(te)){W(T,x,te.error);return}re(!vi(te),"Unhandled fetcher deferred data"),F(T,Er(te.data))}}async function oi(T,x,R){let{submission:L,fetcherSubmission:B,replace:ie}=R===void 0?{}:R;x.revalidate&&(Ee=!0);let q=Da(T.location,x.location,{_isRedirect:!0});if(re(q,"Expected a location on the redirect navigation"),n){let Se=!1;if(x.reloadDocument)Se=!0;else if(aE.test(x.location)){const dt=e.history.createURL(x.location);Se=dt.origin!==t.location.origin||ir(dt.pathname,l)==null}if(Se){ie?t.location.replace(x.location):t.location.assign(x.location);return}}O=null;let G=ie===!0?Ve.Replace:Ve.Push,{formMethod:H,formAction:ce,formEncType:Ze}=T.navigation;!L&&!B&&H&&ce&&Ze&&(L=kv(T.navigation));let te=L||B;if(mb.has(x.status)&&te&&yn(te.formMethod))await zn(G,q,{submission:We({},te,{formAction:x.location}),preventScrollReset:P});else{let Se=pf(q,L);await zn(G,q,{overrideNavigation:Se,fetcherSubmission:B,preventScrollReset:P})}}async function k(T,x,R,L,B){let ie=await Promise.all([...R.map(H=>Ds("loader",B,H,x,o,i,l,u.v7_relativeSplatPath)),...L.map(H=>H.matches&&H.match&&H.controller?Ds("loader",Ls(e.history,H.path,H.controller.signal),H.match,H.matches,o,i,l,u.v7_relativeSplatPath):{type:ze.error,error:on(404,{pathname:H.path})})]),q=ie.slice(0,R.length),G=ie.slice(R.length);return await Promise.all([xv(T,R,q,q.map(()=>B.signal),!1,v.loaderData),xv(T,L.map(H=>H.match),G,L.map(H=>H.controller?H.controller.signal:null),!0)]),{results:ie,loaderResults:q,fetcherResults:G}}function M(){Ee=!0,zt.push(...Dd()),X.forEach((T,x)=>{pe.has(x)&&(en.push(x),Xe(x))})}function F(T,x,R){R===void 0&&(R={}),v.fetchers.set(T,x),Ue({fetchers:new Map(v.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function W(T,x,R,L){L===void 0&&(L={});let B=la(v.matches,x);de(T),Ue({errors:{[B.route.id]:R},fetchers:new Map(v.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function Z(T){return u.v7_fetcherPersist&&(yt.set(T,(yt.get(T)||0)+1),xe.has(T)&&xe.delete(T)),v.fetchers.get(T)||gb}function de(T){let x=v.fetchers.get(T);pe.has(T)&&!(x&&x.state==="loading"&&V.has(T))&&Xe(T),X.delete(T),V.delete(T),J.delete(T),xe.delete(T),v.fetchers.delete(T)}function Ge(T){if(u.v7_fetcherPersist){let x=(yt.get(T)||0)-1;x<=0?(yt.delete(T),xe.add(T)):yt.set(T,x)}else de(T);Ue({fetchers:new Map(v.fetchers)})}function Xe(T){let x=pe.get(T);re(x,"Expected fetch controller: "+T),x.abort(),pe.delete(T)}function ro(T){for(let x of T){let R=Z(x),L=Er(R.data);v.fetchers.set(x,L)}}function io(){let T=[],x=!1;for(let R of J){let L=v.fetchers.get(R);re(L,"Expected fetcher: "+R),L.state==="loading"&&(J.delete(R),T.push(R),x=!0)}return ro(T),x}function Cl(T){let x=[];for(let[R,L]of V)if(L<T){let B=v.fetchers.get(R);re(B,"Expected fetcher: "+R),B.state==="loading"&&(Xe(R),V.delete(R),x.push(R))}return ro(x),x.length>0}function ey(T,x){let R=v.blockers.get(T)||Os;return Ae.get(T)!==x&&Ae.set(T,x),R}function Ts(T){v.blockers.delete(T),Ae.delete(T)}function oo(T,x){let R=v.blockers.get(T)||Os;re(R.state==="unblocked"&&x.state==="blocked"||R.state==="blocked"&&x.state==="blocked"||R.state==="blocked"&&x.state==="proceeding"||R.state==="blocked"&&x.state==="unblocked"||R.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+x.state);let L=new Map(v.blockers);L.set(T,x),Ue({blockers:L})}function ty(T){let{currentLocation:x,nextLocation:R,historyAction:L}=T;if(Ae.size===0)return;Ae.size>1&&Di(!1,"A router only supports one blocker at a time");let B=Array.from(Ae.entries()),[ie,q]=B[B.length-1],G=v.blockers.get(ie);if(!(G&&G.state==="proceeding")&&q({currentLocation:x,nextLocation:R,historyAction:L}))return ie}function Dd(T){let x=[];return Le.forEach((R,L)=>{(!T||T(L))&&(R.cancel(),x.push(L),Le.delete(L))}),x}function lI(T,x,R){if(f=T,y=x,m=R||null,!_&&v.navigation===hf){_=!0;let L=ry(v.location,v.matches);L!=null&&Ue({restoreScrollPosition:L})}return()=>{f=null,y=null,m=null}}function ny(T,x){return m&&m(T,x.map(L=>Gk(L,v.loaderData)))||T.key}function uI(T,x){if(f&&y){let R=ny(T,x);f[R]=y()}}function ry(T,x){if(f){let R=ny(T,x),L=f[R];if(typeof L=="number")return L}return null}function cI(T){o={},a=Mh(T,i,void 0,o)}return b={get basename(){return l},get future(){return u},get state(){return v},get routes(){return s},get window(){return t},initialize:Rn,subscribe:yr,enableScrollRestoration:lI,navigate:Ss,fetch:Ad,revalidate:Rd,createHref:T=>e.history.createHref(T),encodeLocation:T=>e.history.encodeLocation(T),getFetcher:Z,deleteFetcher:Ge,dispose:tn,getBlocker:ey,deleteBlocker:Ts,_internalFetchControllers:pe,_internalActiveDeferreds:Le,_internalSetRoutes:cI},b}function _b(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function jh(e,t,n,r,i,o,s,a){let l,u;if(s){l=[];for(let d of t)if(l.push(d),d.route.id===s){u=d;break}}else l=t,u=t[t.length-1];let c=jc(i||".",Fc(l,o),ir(e.pathname,n)||e.pathname,a==="path");return i==null&&(c.search=e.search,c.hash=e.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Rm(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Jn([n,c.pathname])),Li(c)}function yv(e,t,n,r){if(!r||!_b(r))return{path:n};if(r.formMethod&&!xb(r.formMethod))return{path:n,error:on(405,{method:r.formMethod})};let i=()=>({path:n,error:on(400,{type:"invalid-body"})}),o=r.formMethod||"get",s=e?o.toUpperCase():o.toLowerCase(),a=cE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!yn(s))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,y)=>{let[_,w]=y;return""+m+_+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!yn(s))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}re(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=$h(r.formData),u=r.formData;else if(r.body instanceof FormData)l=$h(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Ev(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Ev(l)}catch{return i()}let c={formMethod:s,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(yn(c.formMethod))return{path:n,submission:c};let d=dr(n);return t&&d.search&&Rm(d.search)&&l.append("index",""),d.search="?"+l,{path:Li(d),submission:c}}function wb(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function vv(e,t,n,r,i,o,s,a,l,u,c,d,f,m,y,_){let w=_?Object.values(_)[0]:y?Object.values(y)[0]:void 0,p=e.createURL(t.location),h=e.createURL(i),g=_?Object.keys(_)[0]:void 0,b=wb(n,g).filter((S,P)=>{let{route:O}=S;if(O.lazy)return!0;if(O.loader==null)return!1;if(o)return O.loader.hydrate?!0:t.loaderData[O.id]===void 0&&(!t.errors||t.errors[O.id]===void 0);if(Eb(t.loaderData,t.matches[P],S)||a.some(ue=>ue===S.route.id))return!0;let $=t.matches[P],Q=S;return _v(S,We({currentUrl:p,currentParams:$.params,nextUrl:h,nextParams:Q.params},r,{actionResult:w,defaultShouldRevalidate:s||p.pathname+p.search===h.pathname+h.search||p.search!==h.search||uE($,Q)}))}),v=[];return c.forEach((S,P)=>{if(o||!n.some(ee=>ee.route.id===S.routeId)||u.has(P))return;let O=xo(f,S.path,m);if(!O){v.push({key:P,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let $=t.fetchers.get(P),Q=Uh(O,S.path),ue=!1;d.has(P)?ue=!1:l.includes(P)?ue=!0:$&&$.state!=="idle"&&$.data===void 0?ue=s:ue=_v(Q,We({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:w,defaultShouldRevalidate:s})),ue&&v.push({key:P,routeId:S.routeId,path:S.path,matches:O,match:Q,controller:new AbortController})}),[b,v]}function Eb(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function uE(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function _v(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function wv(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];re(i,"No route found in manifest");let o={};for(let s in r){let l=i[s]!==void 0&&s!=="hasErrorBoundary";Di(!l,'Route "'+i.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!l&&!Vk.has(s)&&(o[s]=r[s])}Object.assign(i,o),Object.assign(i,We({},t(i),{lazy:void 0}))}async function Ds(e,t,n,r,i,o,s,a,l){l===void 0&&(l={});let u,c,d,f=_=>{let w,p=new Promise((h,g)=>w=g);return d=()=>w(),t.signal.addEventListener("abort",d),Promise.race([_({request:t,params:n.params,context:l.requestContext}),p])};try{let _=n.route[e];if(n.route.lazy)if(_){let w,p=await Promise.all([f(_).catch(h=>{w=h}),wv(n.route,o,i)]);if(w)throw w;c=p[0]}else if(await wv(n.route,o,i),_=n.route[e],_)c=await f(_);else if(e==="action"){let w=new URL(t.url),p=w.pathname+w.search;throw on(405,{method:t.method,pathname:p,routeId:n.route.id})}else return{type:ze.data,data:void 0};else if(_)c=await f(_);else{let w=new URL(t.url),p=w.pathname+w.search;throw on(404,{pathname:p})}re(c!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(_){u=ze.error,c=_}finally{d&&t.signal.removeEventListener("abort",d)}if(Ib(c)){let _=c.status;if(pb.has(_)){let p=c.headers.get("Location");if(re(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!aE.test(p))p=jh(new URL(t.url),r.slice(0,r.indexOf(n)+1),s,!0,p,a);else if(!l.isStaticRequest){let h=new URL(t.url),g=p.startsWith("//")?new URL(h.protocol+p):new URL(p),C=ir(g.pathname,s)!=null;g.origin===h.origin&&C&&(p=g.pathname+g.search+g.hash)}if(l.isStaticRequest)throw c.headers.set("Location",p),c;return{type:ze.redirect,status:_,location:p,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===ze.error?ze.error:ze.data,response:c};let w;try{let p=c.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?c.body==null?w=null:w=await c.json():w=await c.text()}catch(p){return{type:ze.error,error:p}}return u===ze.error?{type:u,error:new bm(_,c.statusText,w),headers:c.headers}:{type:ze.data,data:w,statusCode:c.status,headers:c.headers}}if(u===ze.error)return{type:u,error:c};if(Tb(c)){var m,y;return{type:ze.deferred,deferredData:c,statusCode:(m=c.init)==null?void 0:m.status,headers:((y=c.init)==null?void 0:y.headers)&&new Headers(c.init.headers)}}return{type:ze.data,data:c}}function Ls(e,t,n,r){let i=e.createURL(cE(t)).toString(),o={signal:n};if(r&&yn(r.formMethod)){let{formMethod:s,formEncType:a}=r;o.method=s.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(r.json)):a==="text/plain"?o.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?o.body=$h(r.formData):o.body=r.formData}return new Request(i,o)}function $h(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Ev(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Sb(e,t,n,r,i){let o={},s=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=t[d].route.id;if(re(!_i(c),"Cannot handle redirect results in processLoaderData"),ko(c)){let m=la(e,f),y=c.error;r&&(y=Object.values(r)[0],r=void 0),s=s||{},s[m.route.id]==null&&(s[m.route.id]=y),o[f]=void 0,l||(l=!0,a=oE(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else vi(c)?(i.set(f,c.deferredData),o[f]=c.deferredData.data):o[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(s=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:u}}function Sv(e,t,n,r,i,o,s,a){let{loaderData:l,errors:u}=Sb(t,n,r,i,a);for(let c=0;c<o.length;c++){let{key:d,match:f,controller:m}=o[c];re(s!==void 0&&s[c]!==void 0,"Did not find corresponding fetcher result");let y=s[c];if(!(m&&m.signal.aborted))if(ko(y)){let _=la(e.matches,f==null?void 0:f.route.id);u&&u[_.route.id]||(u=We({},u,{[_.route.id]:y.error})),e.fetchers.delete(d)}else if(_i(y))re(!1,"Unhandled fetcher revalidation redirect");else if(vi(y))re(!1,"Unhandled fetcher deferred data");else{let _=Er(y.data);e.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function Cv(e,t,n,r){let i=We({},t);for(let o of n){let s=o.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(i[s]=t[s]):e[s]!==void 0&&o.route.loader&&(i[s]=e[s]),r&&r.hasOwnProperty(s))break}return i}function la(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Tv(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function on(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,s="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(s="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?a="defer() is not supported in actions":o==="invalid-body"&&(a="Unable to encode submission body")):e===403?(s="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",a='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new bm(e||500,s,new Error(a),!0)}function Iv(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(_i(n))return{result:n,idx:t}}}function cE(e){let t=typeof e=="string"?dr(e):e;return Li(We({},t,{hash:""}))}function Cb(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function vi(e){return e.type===ze.deferred}function ko(e){return e.type===ze.error}function _i(e){return(e&&e.type)===ze.redirect}function Tb(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Ib(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function xb(e){return hb.has(e.toLowerCase())}function yn(e){return db.has(e.toLowerCase())}async function xv(e,t,n,r,i,o){for(let s=0;s<n.length;s++){let a=n[s],l=t[s];if(!l)continue;let u=e.find(d=>d.route.id===l.route.id),c=u!=null&&!uE(u,l)&&(o&&o[l.route.id])!==void 0;if(vi(a)&&(i||c)){let d=r[s];re(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await dE(a,d,i).then(f=>{f&&(n[s]=f||n[s])})}}}async function dE(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ze.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ze.error,error:i}}return{type:ze.data,data:e.deferredData.data}}}function Rm(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Uh(e,t){let n=typeof t=="string"?dr(t).search:t.search;if(e[e.length-1].route.index&&Rm(n||""))return e[e.length-1];let r=iE(e);return r[r.length-1]}function kv(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:s}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:s,text:void 0}}}function pf(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function kb(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ms(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function bb(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Er(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Rb(e,t){try{let n=e.sessionStorage.getItem(lE);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function Pb(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(lE,JSON.stringify(n))}catch(r){Di(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},La.apply(this,arguments)}const ul=E.createContext(null),Pm=E.createContext(null),fr=E.createContext(null),$c=E.createContext(null),hr=E.createContext({outlet:null,matches:[],isDataRoute:!1}),fE=E.createContext(null);function Nb(e,t){let{relative:n}=t===void 0?{}:t;ds()||re(!1);let{basename:r,navigator:i}=E.useContext(fr),{hash:o,pathname:s,search:a}=Uc(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Jn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function ds(){return E.useContext($c)!=null}function Qi(){return ds()||re(!1),E.useContext($c).location}function hE(e){E.useContext(fr).static||E.useLayoutEffect(e)}function pE(){let{isDataRoute:e}=E.useContext(hr);return e?Vb():Ab()}function Ab(){ds()||re(!1);let e=E.useContext(ul),{basename:t,future:n,navigator:r}=E.useContext(fr),{matches:i}=E.useContext(hr),{pathname:o}=Qi(),s=JSON.stringify(Fc(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return hE(()=>{a.current=!0}),E.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=jc(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Jn([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,s,o,e])}const Ob=E.createContext(null);function Db(e){let t=E.useContext(hr).outlet;return t&&E.createElement(Ob.Provider,{value:e},t)}function Uc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(fr),{matches:i}=E.useContext(hr),{pathname:o}=Qi(),s=JSON.stringify(Fc(i,r.v7_relativeSplatPath));return E.useMemo(()=>jc(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Lb(e,t,n,r){ds()||re(!1);let{navigator:i}=E.useContext(fr),{matches:o}=E.useContext(hr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Qi(),c;if(t){var d;let w=typeof t=="string"?dr(t):t;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||re(!1),c=w}else c=u;let f=c.pathname||"/",m=l==="/"?f:f.slice(l.length)||"/",y=xo(e,{pathname:m}),_=Ub(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Jn([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Jn([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return t&&_?E.createElement($c.Provider,{value:{location:La({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ve.Pop}},_):_}function Mb(){let e=yE(),t=oE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const Fb=E.createElement(Mb,null);class jb extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(hr.Provider,{value:this.props.routeContext},E.createElement(fE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $b(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(ul);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(hr.Provider,{value:t},r)}function Ub(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||re(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:m}=n,y=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,f)=>{let m,y=!1,_=null,w=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||Fb,l&&(u<0&&f===0?(Hb("route-fallback",!1),y=!0,w=null):u===f&&(y=!0,w=d.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,f+1)),h=()=>{let g;return m?g=_:y?g=w:d.route.Component?g=E.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,E.createElement($b,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?E.createElement(jb,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var mE=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mE||{}),Wu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Wu||{});function zb(e){let t=E.useContext(ul);return t||re(!1),t}function Bb(e){let t=E.useContext(Pm);return t||re(!1),t}function Wb(e){let t=E.useContext(hr);return t||re(!1),t}function gE(e){let t=Wb(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function yE(){var e;let t=E.useContext(fE),n=Bb(Wu.UseRouteError),r=gE(Wu.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Vb(){let{router:e}=zb(mE.UseNavigateStable),t=gE(Wu.UseNavigateStable),n=E.useRef(!1);return hE(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,La({fromRouteId:t},o)))},[e,t])}const bv={};function Hb(e,t,n){!t&&!bv[e]&&(bv[e]=!0)}function Gb(e){let{to:t,replace:n,state:r,relative:i}=e;ds()||re(!1);let{future:o,static:s}=E.useContext(fr),{matches:a}=E.useContext(hr),{pathname:l}=Qi(),u=pE(),c=jc(t,Fc(a,o.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return E.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function Kb(e){return Db(e.context)}function qb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ve.Pop,navigator:o,static:s=!1,future:a}=e;ds()&&re(!1);let l=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:o,static:s,future:La({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=dr(r));let{pathname:c="/",search:d="",hash:f="",state:m=null,key:y="default"}=r,_=E.useMemo(()=>{let w=ir(c,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:m,key:y},navigationType:i}},[l,c,d,f,m,y,i]);return _==null?null:E.createElement(fr.Provider,{value:u},E.createElement($c.Provider,{children:n,value:_}))}new Promise(()=>{});function Yb(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:E.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yo.apply(this,arguments)}function vE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Qb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jb(e,t){return e.button===0&&(!t||t==="_self")&&!Qb(e)}const Xb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Zb=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],eR="6";try{window.__reactRouterVersion=eR}catch{}function tR(e,t){return vb({basename:t==null?void 0:t.basename,future:Yo({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:zk({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||nR(),routes:e,mapRouteProperties:Yb,window:t==null?void 0:t.window}).initialize()}function nR(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Yo({},t,{errors:rR(t.errors)})),t}function rR(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new bm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let s=new o(i.message);s.stack="",n[r]=s}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const _E=E.createContext({isTransitioning:!1}),iR=E.createContext(new Map),oR="startTransition",Rv=Bf[oR],sR="flushSync",Pv=Uk[sR];function aR(e){Rv?Rv(e):e()}function Fs(e){Pv?Pv(e):e()}let lR=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function uR(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=E.useState(n.state),[s,a]=E.useState(),[l,u]=E.useState({isTransitioning:!1}),[c,d]=E.useState(),[f,m]=E.useState(),[y,_]=E.useState(),w=E.useRef(new Map),{v7_startTransition:p}=r||{},h=E.useCallback(S=>{p?aR(S):S()},[p]),g=E.useCallback((S,P)=>{let{deletedFetchers:O,unstable_flushSync:$,unstable_viewTransitionOpts:Q}=P;O.forEach(ee=>w.current.delete(ee)),S.fetchers.forEach((ee,Ee)=>{ee.data!==void 0&&w.current.set(Ee,ee.data)});let ue=n.window==null||typeof n.window.document.startViewTransition!="function";if(!Q||ue){$?Fs(()=>o(S)):h(()=>o(S));return}if($){Fs(()=>{f&&(c&&c.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation})});let ee=n.window.document.startViewTransition(()=>{Fs(()=>o(S))});ee.finished.finally(()=>{Fs(()=>{d(void 0),m(void 0),a(void 0),u({isTransitioning:!1})})}),Fs(()=>m(ee));return}f?(c&&c.resolve(),f.skipTransition(),_({state:S,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation})):(a(S),u({isTransitioning:!0,flushSync:!1,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation}))},[n.window,f,c,w,h]);E.useLayoutEffect(()=>n.subscribe(g),[n,g]),E.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new lR)},[l]),E.useEffect(()=>{if(c&&s&&n.window){let S=s,P=c.promise,O=n.window.document.startViewTransition(async()=>{h(()=>o(S)),await P});O.finished.finally(()=>{d(void 0),m(void 0),a(void 0),u({isTransitioning:!1})}),m(O)}},[h,s,c,n.window]),E.useEffect(()=>{c&&s&&i.location.key===s.location.key&&c.resolve()},[c,f,i.location,s]),E.useEffect(()=>{!l.isTransitioning&&y&&(a(y.state),u({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),_(void 0))},[l.isTransitioning,y]),E.useEffect(()=>{},[]);let C=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:S=>n.navigate(S),push:(S,P,O)=>n.navigate(S,{state:P,preventScrollReset:O==null?void 0:O.preventScrollReset}),replace:(S,P,O)=>n.navigate(S,{replace:!0,state:P,preventScrollReset:O==null?void 0:O.preventScrollReset})}),[n]),b=n.basename||"/",v=E.useMemo(()=>({router:n,navigator:C,static:!1,basename:b}),[n,C,b]);return E.createElement(E.Fragment,null,E.createElement(ul.Provider,{value:v},E.createElement(Pm.Provider,{value:i},E.createElement(iR.Provider,{value:w.current},E.createElement(_E.Provider,{value:l},E.createElement(qb,{basename:b,location:i.location,navigationType:i.historyAction,navigator:C,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?E.createElement(cR,{routes:n.routes,future:n.future,state:i}):t))))),null)}function cR(e){let{routes:t,future:n,state:r}=e;return Lb(t,void 0,r,n)}const dR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wE=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,f=vE(t,Xb),{basename:m}=E.useContext(fr),y,_=!1;if(typeof u=="string"&&fR.test(u)&&(y=u,dR))try{let g=new URL(window.location.href),C=u.startsWith("//")?new URL(g.protocol+u):new URL(u),b=ir(C.pathname,m);C.origin===g.origin&&b!=null?u=b+C.search+C.hash:_=!0}catch{}let w=Nb(u,{relative:i}),p=mR(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(g){r&&r(g),g.defaultPrevented||p(g)}return E.createElement("a",Yo({},f,{href:y||w,onClick:_||o?r:h,ref:n,target:l}))}),hR=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,unstable_viewTransition:u,children:c}=t,d=vE(t,Zb),f=Uc(l,{relative:d.relative}),m=Qi(),y=E.useContext(Pm),{navigator:_,basename:w}=E.useContext(fr),p=y!=null&&gR(f)&&u===!0,h=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,g=m.pathname,C=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(g=g.toLowerCase(),C=C?C.toLowerCase():null,h=h.toLowerCase()),C&&w&&(C=ir(C,w)||C);const b=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let v=g===h||!s&&g.startsWith(h)&&g.charAt(b)==="/",S=C!=null&&(C===h||!s&&C.startsWith(h)&&C.charAt(h.length)==="/"),P={isActive:v,isPending:S,isTransitioning:p},O=v?r:void 0,$;typeof o=="function"?$=o(P):$=[o,v?"active":null,S?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let Q=typeof a=="function"?a(P):a;return E.createElement(wE,Yo({},d,{"aria-current":O,className:$,ref:n,style:Q,to:l,unstable_viewTransition:u}),typeof c=="function"?c(P):c)});var zh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(zh||(zh={}));var Nv;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nv||(Nv={}));function pR(e){let t=E.useContext(ul);return t||re(!1),t}function mR(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=pE(),u=Qi(),c=Uc(e,{relative:s});return E.useCallback(d=>{if(Jb(d,n)){d.preventDefault();let f=r!==void 0?r:Li(u)===Li(c);l(e,{replace:f,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,c,r,i,n,e,o,s,a])}function gR(e,t){t===void 0&&(t={});let n=E.useContext(_E);n==null&&re(!1);let{basename:r}=pR(zh.useViewTransitionState),i=Uc(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=ir(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=ir(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Fh(i.pathname,s)!=null||Fh(i.pathname,o)!=null}var EE={exports:{}},SE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cl=E;function yR(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vR=typeof Object.is=="function"?Object.is:yR,_R=cl.useSyncExternalStore,wR=cl.useRef,ER=cl.useEffect,SR=cl.useMemo,CR=cl.useDebugValue;SE.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=wR(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=SR(function(){function l(m){if(!u){if(u=!0,c=m,m=r(m),i!==void 0&&s.hasValue){var y=s.value;if(i(y,m))return d=y}return d=m}if(y=d,vR(c,m))return y;var _=r(m);return i!==void 0&&i(y,_)?y:(c=m,d=_)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=_R(e,o[0],o[1]);return ER(function(){s.hasValue=!0,s.value=a},[a]),CR(a),a};EE.exports=SE;var TR=EE.exports,Gt="default"in Bf?Nt:Bf,Av=Symbol.for("react-redux-context"),Ov=typeof globalThis<"u"?globalThis:{};function IR(){if(!Gt.createContext)return{};const e=Ov[Av]??(Ov[Av]=new Map);let t=e.get(Gt.createContext);return t||(t=Gt.createContext(null),e.set(Gt.createContext,t)),t}var qr=IR(),xR=()=>{throw new Error("uSES not initialized!")};function Nm(e=qr){return function(){return Gt.useContext(e)}}var CE=Nm(),TE=xR,kR=e=>{TE=e},bR=(e,t)=>e===t;function RR(e=qr){const t=e===qr?CE:Nm(e),n=(r,i={})=>{const{equalityFn:o=bR,devModeChecks:s={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=t();Gt.useRef(!0);const f=Gt.useCallback({[r.name](y){return r(y)}}[r.name],[r,c,s.stabilityCheck]),m=TE(l.addNestedSub,a.getState,u||a.getState,f,o);return Gt.useDebugValue(m),m};return Object.assign(n,{withTypes:()=>n}),n}var PR=RR();function NR(e){e()}function AR(){let e=null,t=null;return{clear(){e=null,t=null},notify(){NR(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Dv={notify(){},get:()=>[]};function OR(e,t){let n,r=Dv,i=0,o=!1;function s(_){c();const w=r.subscribe(_);let p=!1;return()=>{p||(p=!0,w(),d())}}function a(){r.notify()}function l(){y.onStateChange&&y.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=AR())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Dv)}function f(){o||(o=!0,c())}function m(){o&&(o=!1,d())}const y={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:m,getListeners:()=>r};return y}var DR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LR=DR?Gt.useLayoutEffect:Gt.useEffect;function MR({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:o="once"}){const s=Gt.useMemo(()=>{const u=OR(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:o}},[e,r,i,o]),a=Gt.useMemo(()=>e.getState(),[e]);LR(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,a]);const l=t||qr;return Gt.createElement(l.Provider,{value:s},n)}var FR=MR;function IE(e=qr){const t=e===qr?CE:Nm(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var jR=IE();function $R(e=qr){const t=e===qr?jR:IE(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var zc=$R();kR(TR.useSyncExternalStoreWithSelector);var at=function(){return at=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},at.apply(this,arguments)};function Ma(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var be="-ms-",ua="-moz-",me="-webkit-",xE="comm",Bc="rule",Am="decl",UR="@import",kE="@keyframes",zR="@layer",bE=Math.abs,Om=String.fromCharCode,Bh=Object.assign;function BR(e,t){return it(e,0)^45?(((t<<2^it(e,0))<<2^it(e,1))<<2^it(e,2))<<2^it(e,3):0}function RE(e){return e.trim()}function Wn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function uu(e,t,n){return e.indexOf(t,n)}function it(e,t){return e.charCodeAt(t)|0}function Qo(e,t,n){return e.slice(t,n)}function On(e){return e.length}function PE(e){return e.length}function Ys(e,t){return t.push(e),e}function WR(e,t){return e.map(t).join("")}function Lv(e,t){return e.filter(function(n){return!Wn(n,t)})}var Wc=1,Jo=1,NE=0,fn=0,Ke=0,fs="";function Vc(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Wc,column:Jo,length:s,return:"",siblings:a}}function Sr(e,t){return Bh(Vc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function co(e){for(;e.root;)e=Sr(e.root,{children:[e]});Ys(e,e.siblings)}function VR(){return Ke}function HR(){return Ke=fn>0?it(fs,--fn):0,Jo--,Ke===10&&(Jo=1,Wc--),Ke}function In(){return Ke=fn<NE?it(fs,fn++):0,Jo++,Ke===10&&(Jo=1,Wc++),Ke}function Ii(){return it(fs,fn)}function cu(){return fn}function Hc(e,t){return Qo(fs,e,t)}function Wh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function GR(e){return Wc=Jo=1,NE=On(fs=e),fn=0,[]}function KR(e){return fs="",e}function mf(e){return RE(Hc(fn-1,Vh(e===91?e+2:e===40?e+1:e)))}function qR(e){for(;(Ke=Ii())&&Ke<33;)In();return Wh(e)>2||Wh(Ke)>3?"":" "}function YR(e,t){for(;--t&&In()&&!(Ke<48||Ke>102||Ke>57&&Ke<65||Ke>70&&Ke<97););return Hc(e,cu()+(t<6&&Ii()==32&&In()==32))}function Vh(e){for(;In();)switch(Ke){case e:return fn;case 34:case 39:e!==34&&e!==39&&Vh(Ke);break;case 40:e===41&&Vh(e);break;case 92:In();break}return fn}function QR(e,t){for(;In()&&e+Ke!==57;)if(e+Ke===84&&Ii()===47)break;return"/*"+Hc(t,fn-1)+"*"+Om(e===47?e:In())}function JR(e){for(;!Wh(Ii());)In();return Hc(e,fn)}function XR(e){return KR(du("",null,null,null,[""],e=GR(e),0,[0],e))}function du(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,d=s,f=0,m=0,y=0,_=1,w=1,p=1,h=0,g="",C=i,b=o,v=r,S=g;w;)switch(y=h,h=In()){case 40:if(y!=108&&it(S,d-1)==58){uu(S+=ne(mf(h),"&","&\f"),"&\f",bE(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:S+=mf(h);break;case 9:case 10:case 13:case 32:S+=qR(y);break;case 92:S+=YR(cu()-1,7);continue;case 47:switch(Ii()){case 42:case 47:Ys(ZR(QR(In(),cu()),t,n,l),l);break;default:S+="/"}break;case 123*_:a[u++]=On(S)*p;case 125*_:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(S=ne(S,/\f/g,"")),m>0&&On(S)-d&&Ys(m>32?Fv(S+";",r,n,d-1,l):Fv(ne(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(Ys(v=Mv(S,t,n,u,c,i,a,g,C=[],b=[],d,o),o),h===123)if(c===0)du(S,t,v,v,C,o,d,a,b);else switch(f===99&&it(S,3)===110?100:f){case 100:case 108:case 109:case 115:du(e,v,v,r&&Ys(Mv(e,v,v,0,0,i,a,g,i,C=[],d,b),b),i,b,d,a,r?C:b);break;default:du(S,v,v,v,[""],b,0,a,b)}}u=c=m=0,_=p=1,g=S="",d=s;break;case 58:d=1+On(S),m=y;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&HR()==125)continue}switch(S+=Om(h),h*_){case 38:p=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(On(S)-1)*p,p=1;break;case 64:Ii()===45&&(S+=mf(In())),f=Ii(),c=d=On(g=S+=JR(cu())),h++;break;case 45:y===45&&On(S)==2&&(_=0)}}return o}function Mv(e,t,n,r,i,o,s,a,l,u,c,d){for(var f=i-1,m=i===0?o:[""],y=PE(m),_=0,w=0,p=0;_<r;++_)for(var h=0,g=Qo(e,f+1,f=bE(w=s[_])),C=e;h<y;++h)(C=RE(w>0?m[h]+" "+g:ne(g,/&\f/g,m[h])))&&(l[p++]=C);return Vc(e,t,n,i===0?Bc:a,l,u,c,d)}function ZR(e,t,n,r){return Vc(e,t,n,xE,Om(VR()),Qo(e,2,-2),0,r)}function Fv(e,t,n,r,i){return Vc(e,t,n,Am,Qo(e,0,r),Qo(e,r+1,-1),r,i)}function AE(e,t,n){switch(BR(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 4789:return ua+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+ua+e+be+e+e;case 5936:switch(it(e,t+11)){case 114:return me+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return me+e+be+e+e;case 6165:return me+e+be+"flex-"+e+e;case 5187:return me+e+ne(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+be+"flex-$1$2")+e;case 5443:return me+e+be+"flex-item-"+ne(e,/flex-|-self/g,"")+(Wn(e,/flex-|baseline/)?"":be+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return me+e+be+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return me+e+be+ne(e,"shrink","negative")+e;case 5292:return me+e+be+ne(e,"basis","preferred-size")+e;case 6060:return me+"box-"+ne(e,"-grow","")+me+e+be+ne(e,"grow","positive")+e;case 4554:return me+ne(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4200:if(!Wn(e,/flex-|baseline/))return be+"grid-column-align"+Qo(e,t)+e;break;case 2592:case 3360:return be+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Wn(r.props,/grid-\w+-end/)})?~uu(e+(n=n[t].value),"span",0)?e:be+ne(e,"-start","")+e+be+"grid-row-span:"+(~uu(n,"span",0)?Wn(n,/\d+/):+Wn(n,/\d+/)-+Wn(e,/\d+/))+";":be+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Wn(r.props,/grid-\w+-start/)})?e:be+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(On(e)-1-t>6)switch(it(e,t+1)){case 109:if(it(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+ua+(it(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~uu(e,"stretch",0)?AE(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return be+i+":"+o+u+(s?be+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(it(e,t+6)===121)return ne(e,":",":"+me)+e;break;case 6444:switch(it(e,it(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(it(e,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+be+"$2box$3")+e;case 100:return ne(e,":",":"+be)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Vu(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function eP(e,t,n,r){switch(e.type){case zR:if(e.children.length)break;case UR:case Am:return e.return=e.return||e.value;case xE:return"";case kE:return e.return=e.value+"{"+Vu(e.children,r)+"}";case Bc:if(!On(e.value=e.props.join(",")))return""}return On(n=Vu(e.children,r))?e.return=e.value+"{"+n+"}":""}function tP(e){var t=PE(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function nP(e){return function(t){t.root||(t=t.return)&&e(t)}}function rP(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Am:e.return=AE(e.value,e.length,n);return;case kE:return Vu([Sr(e,{value:ne(e.value,"@","@"+me)})],r);case Bc:if(e.length)return WR(n=e.props,function(i){switch(Wn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":co(Sr(e,{props:[ne(i,/:(read-\w+)/,":"+ua+"$1")]})),co(Sr(e,{props:[i]})),Bh(e,{props:Lv(n,r)});break;case"::placeholder":co(Sr(e,{props:[ne(i,/:(plac\w+)/,":"+me+"input-$1")]})),co(Sr(e,{props:[ne(i,/:(plac\w+)/,":"+ua+"$1")]})),co(Sr(e,{props:[ne(i,/:(plac\w+)/,be+"input-$1")]})),co(Sr(e,{props:[i]})),Bh(e,{props:Lv(n,r)});break}return""})}}var iP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wt={},Xo=typeof process<"u"&&Wt!==void 0&&(Wt.REACT_APP_SC_ATTR||Wt.SC_ATTR)||"data-styled",OE="active",DE="data-styled-version",Gc="6.1.8",Dm=`/*!sc*/
`,Lm=typeof window<"u"&&"HTMLElement"in window,oP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==""?Wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.SC_DISABLE_SPEEDY!==void 0&&Wt.SC_DISABLE_SPEEDY!==""&&Wt.SC_DISABLE_SPEEDY!=="false"&&Wt.SC_DISABLE_SPEEDY),sP={},Kc=Object.freeze([]),Zo=Object.freeze({});function LE(e,t,n){return n===void 0&&(n=Zo),e.theme!==n.theme&&e.theme||t||n.theme}var ME=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),aP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lP=/(^-|-$)/g;function jv(e){return e.replace(aP,"-").replace(lP,"")}var uP=/(a)(d)/gi,Wl=52,$v=function(e){return String.fromCharCode(e+(e>25?39:97))};function Hh(e){var t,n="";for(t=Math.abs(e);t>Wl;t=t/Wl|0)n=$v(t%Wl)+n;return($v(t%Wl)+n).replace(uP,"$1-$2")}var gf,FE=5381,bo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},jE=function(e){return bo(FE,e)};function $E(e){return Hh(jE(e)>>>0)}function cP(e){return e.displayName||e.name||"Component"}function yf(e){return typeof e=="string"&&!0}var UE=typeof Symbol=="function"&&Symbol.for,zE=UE?Symbol.for("react.memo"):60115,dP=UE?Symbol.for("react.forward_ref"):60112,fP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},hP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},BE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pP=((gf={})[dP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gf[zE]=BE,gf);function Uv(e){return("type"in(t=e)&&t.type.$$typeof)===zE?BE:"$$typeof"in e?pP[e.$$typeof]:fP;var t}var mP=Object.defineProperty,gP=Object.getOwnPropertyNames,zv=Object.getOwnPropertySymbols,yP=Object.getOwnPropertyDescriptor,vP=Object.getPrototypeOf,Bv=Object.prototype;function WE(e,t,n){if(typeof t!="string"){if(Bv){var r=vP(t);r&&r!==Bv&&WE(e,r,n)}var i=gP(t);zv&&(i=i.concat(zv(t)));for(var o=Uv(e),s=Uv(t),a=0;a<i.length;++a){var l=i[a];if(!(l in hP||n&&n[l]||s&&l in s||o&&l in o)){var u=yP(t,l);try{mP(e,l,u)}catch{}}}}return e}function Mi(e){return typeof e=="function"}function Mm(e){return typeof e=="object"&&"styledComponentId"in e}function wi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Gh(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Fa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Kh(e,t,n){if(n===void 0&&(n=!1),!n&&!Fa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Kh(e[r],t[r]);else if(Fa(t))for(var r in t)e[r]=Kh(e[r],t[r]);return e}function Fm(e,t){Object.defineProperty(e,"toString",{value:t})}function Fi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _P=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Fi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Dm);return n},e}(),fu=new Map,Hu=new Map,hu=1,Vl=function(e){if(fu.has(e))return fu.get(e);for(;Hu.has(hu);)hu++;var t=hu++;return fu.set(e,t),Hu.set(t,e),t},wP=function(e,t){hu=t+1,fu.set(e,t),Hu.set(t,e)},EP="style[".concat(Xo,"][").concat(DE,'="').concat(Gc,'"]'),SP=new RegExp("^".concat(Xo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),CP=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},TP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Dm),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(SP);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(wP(c,u),CP(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function IP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var VE=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Xo,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Xo,OE),r.setAttribute(DE,Gc);var s=IP();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},xP=function(){function e(t){this.element=VE(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Fi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),kP=function(){function e(t){this.element=VE(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),bP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Wv=Lm,RP={isServer:!Lm,useCSSOMInjection:!oP},Gu=function(){function e(t,n,r){t===void 0&&(t=Zo),n===void 0&&(n={});var i=this;this.options=at(at({},RP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Lm&&Wv&&(Wv=!1,function(o){for(var s=document.querySelectorAll(EP),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Xo)!==OE&&(TP(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Fm(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var f=function(p){return Hu.get(p)}(d);if(f===void 0)return"continue";var m=o.names.get(f),y=s.getGroup(d);if(m===void 0||y.length===0)return"continue";var _="".concat(Xo,".g").concat(d,'[id="').concat(f,'"]'),w="";m!==void 0&&m.forEach(function(p){p.length>0&&(w+="".concat(p,","))}),l+="".concat(y).concat(_,'{content:"').concat(w,'"}').concat(Dm)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Vl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(at(at({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new bP(i):r?new xP(i):new kP(i)}(this.options),new _P(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Vl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Vl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Vl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),PP=/&/g,NP=/^\s*\/\/.*$/gm;function HE(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=HE(n.children,t)),n})}function AP(e){var t,n,r,i=e===void 0?Zo:e,o=i.options,s=o===void 0?Zo:o,a=i.plugins,l=a===void 0?Kc:a,u=function(f,m,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===Bc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(PP,n).replace(r,u))}),s.prefix&&c.push(rP),c.push(eP);var d=function(f,m,y,_){m===void 0&&(m=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(NP,""),p=XR(y||m?"".concat(y," ").concat(m," { ").concat(w," }"):w);s.namespace&&(p=HE(p,s.namespace));var h=[];return Vu(p,tP(c.concat(nP(function(g){return h.push(g)})))),h};return d.hash=l.length?l.reduce(function(f,m){return m.name||Fi(15),bo(f,m.name)},FE).toString():"",d}var OP=new Gu,qh=AP(),GE=Nt.createContext({shouldForwardProp:void 0,styleSheet:OP,stylis:qh});GE.Consumer;Nt.createContext(void 0);function Yh(){return E.useContext(GE)}var DP=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=qh);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Fm(this,function(){throw Fi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=qh),this.name+t.hash},e}(),LP=function(e){return e>="A"&&e<="Z"};function Vv(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;LP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var KE=function(e){return e==null||e===!1||e===""},qE=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!KE(o)&&(Array.isArray(o)&&o.isCss||Mi(o)?r.push("".concat(Vv(i),":"),o,";"):Fa(o)?r.push.apply(r,Ma(Ma(["".concat(i," {")],qE(o),!1),["}"],!1)):r.push("".concat(Vv(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in iP||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zr(e,t,n,r){if(KE(e))return[];if(Mm(e))return[".".concat(e.styledComponentId)];if(Mi(e)){if(!Mi(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return zr(i,t,n,r)}var o;return e instanceof DP?n?(e.inject(n,r),[e.getName(r)]):[e]:Fa(e)?qE(e):Array.isArray(e)?Array.prototype.concat.apply(Kc,e.map(function(s){return zr(s,t,n,r)})):[e.toString()]}function YE(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Mi(n)&&!Mm(n))return!1}return!0}var MP=jE(Gc),FP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&YE(t),this.componentId=n,this.baseHash=bo(MP,n),this.baseStyle=r,Gu.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=wi(i,this.staticRulesId);else{var o=Gh(zr(this.rules,t,n,r)),s=Hh(bo(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=wi(i,s),this.staticRulesId=s}else{for(var l=bo(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Gh(zr(d,t,n,r));l=bo(l,f+c),u+=f}}if(u){var m=Hh(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=wi(i,m)}}return i},e}(),ja=Nt.createContext(void 0);ja.Consumer;function jP(e){var t=Nt.useContext(ja),n=E.useMemo(function(){return function(r,i){if(!r)throw Fi(14);if(Mi(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Fi(8);return i?at(at({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Nt.createElement(ja.Provider,{value:n},e.children):null}var vf={};function $P(e,t,n){var r=Mm(e),i=e,o=!yf(e),s=t.attrs,a=s===void 0?Kc:s,l=t.componentId,u=l===void 0?function(C,b){var v=typeof C!="string"?"sc":jv(C);vf[v]=(vf[v]||0)+1;var S="".concat(v,"-").concat($E(Gc+v+vf[v]));return b?"".concat(b,"-").concat(S):S}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(C){return yf(C)?"styled.".concat(C):"Styled(".concat(cP(C),")")}(e):c,f=t.displayName&&t.componentId?"".concat(jv(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;y=function(C,b){return _(C,b)&&w(C,b)}}else y=_}var p=new FP(n,f,r?i.componentStyle:void 0);function h(C,b){return function(v,S,P){var O=v.attrs,$=v.componentStyle,Q=v.defaultProps,ue=v.foldedComponentIds,ee=v.styledComponentId,Ee=v.target,zt=Nt.useContext(ja),en=Yh(),pe=v.shouldForwardProp||en.shouldForwardProp,D=LE(S,zt,Q)||Zo,z=function(Le,Ae,ct){for(var Rn,tn=at(at({},Ae),{className:void 0,theme:ct}),yr=0;yr<Le.length;yr+=1){var Ue=Mi(Rn=Le[yr])?Rn(tn):Rn;for(var vt in Ue)tn[vt]=vt==="className"?wi(tn[vt],Ue[vt]):vt==="style"?at(at({},tn[vt]),Ue[vt]):Ue[vt]}return Ae.className&&(tn.className=wi(tn.className,Ae.className)),tn}(O,S,D),V=z.as||Ee,J={};for(var X in z)z[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&z.theme===D||(X==="forwardedAs"?J.as=z.forwardedAs:pe&&!pe(X,V)||(J[X]=z[X]));var yt=function(Le,Ae){var ct=Yh(),Rn=Le.generateAndInjectStyles(Ae,ct.styleSheet,ct.stylis);return Rn}($,z),xe=wi(ue,ee);return yt&&(xe+=" "+yt),z.className&&(xe+=" "+z.className),J[yf(V)&&!ME.has(V)?"class":"className"]=xe,J.ref=P,E.createElement(V,J)}(g,C,b)}h.displayName=d;var g=Nt.forwardRef(h);return g.attrs=m,g.componentStyle=p,g.displayName=d,g.shouldForwardProp=y,g.foldedComponentIds=r?wi(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=f,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(b){for(var v=[],S=1;S<arguments.length;S++)v[S-1]=arguments[S];for(var P=0,O=v;P<O.length;P++)Kh(b,O[P],!0);return b}({},i.defaultProps,C):C}}),Fm(g,function(){return".".concat(g.styledComponentId)}),o&&WE(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Hv(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Gv=function(e){return Object.assign(e,{isCss:!0})};function QE(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Mi(e)||Fa(e))return Gv(zr(Hv(Kc,Ma([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?zr(r):Gv(zr(Hv(r,t)))}function Qh(e,t,n){if(n===void 0&&(n=Zo),!t)throw Fi(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,QE.apply(void 0,Ma([i],o,!1)))};return r.attrs=function(i){return Qh(e,t,at(at({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Qh(e,t,at(at({},n),i))},r}var JE=function(e){return Qh($P,e)},U=JE;ME.forEach(function(e){U[e]=JE(e)});var UP=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=YE(t),Gu.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Gh(zr(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Gu.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function zP(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=QE.apply(void 0,Ma([e],t,!1)),i="sc-global-".concat($E(JSON.stringify(r))),o=new UP(r,i),s=function(l){var u=Yh(),c=Nt.useContext(ja),d=Nt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),Nt.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(o.isStatic)o.renderStyles(l,sP,c,f);else{var m=at(at({},u),{theme:LE(u,d,s.defaultProps)});o.renderStyles(l,m,c,f)}}return Nt.memo(s)}function ft(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var BP=typeof Symbol=="function"&&Symbol.observable||"@@observable",Kv=BP,_f=()=>Math.random().toString(36).substring(7).split("").join("."),WP={INIT:`@@redux/INIT${_f()}`,REPLACE:`@@redux/REPLACE${_f()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${_f()}`},Ku=WP;function jm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function XE(e,t,n){if(typeof e!="function")throw new Error(ft(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ft(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ft(1));return n(XE)(e,t)}let r=e,i=t,o=new Map,s=o,a=0,l=!1;function u(){s===o&&(s=new Map,o.forEach((w,p)=>{s.set(p,w)}))}function c(){if(l)throw new Error(ft(3));return i}function d(w){if(typeof w!="function")throw new Error(ft(4));if(l)throw new Error(ft(5));let p=!0;u();const h=a++;return s.set(h,w),function(){if(p){if(l)throw new Error(ft(6));p=!1,u(),s.delete(h),o=null}}}function f(w){if(!jm(w))throw new Error(ft(7));if(typeof w.type>"u")throw new Error(ft(8));if(typeof w.type!="string")throw new Error(ft(17));if(l)throw new Error(ft(9));try{l=!0,i=r(i,w)}finally{l=!1}return(o=s).forEach(h=>{h()}),w}function m(w){if(typeof w!="function")throw new Error(ft(10));r=w,f({type:Ku.REPLACE})}function y(){const w=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(ft(11));function h(){const C=p;C.next&&C.next(c())}return h(),{unsubscribe:w(h)}},[Kv](){return this}}}return f({type:Ku.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:m,[Kv]:y}}function VP(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Ku.INIT})>"u")throw new Error(ft(12));if(typeof n(void 0,{type:Ku.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ft(13))})}function HP(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let i;try{VP(n)}catch(o){i=o}return function(s={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],m=s[d],y=f(m,a);if(typeof y>"u")throw a&&a.type,new Error(ft(14));u[d]=y,l=l||y!==m}return l=l||r.length!==Object.keys(s).length,l?u:s}}function qu(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function GP(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(ft(15))};const s={getState:i.getState,dispatch:(l,...u)=>o(l,...u)},a=e.map(l=>l(s));return o=qu(...a)(i.dispatch),{...i,dispatch:o}}}function KP(e){return jm(e)&&"type"in e&&typeof e.type=="string"}var ZE=Symbol.for("immer-nothing"),qv=Symbol.for("immer-draftable"),Yt=Symbol.for("immer-state");function _n(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var es=Object.getPrototypeOf;function Yr(e){return!!e&&!!e[Yt]}function or(e){var t;return e?eS(e)||Array.isArray(e)||!!e[qv]||!!((t=e.constructor)!=null&&t[qv])||Yc(e)||Qc(e):!1}var qP=Object.prototype.constructor.toString();function eS(e){if(!e||typeof e!="object")return!1;const t=es(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===qP}function $a(e,t){qc(e)===0?Object.entries(e).forEach(([n,r])=>{t(n,r,e)}):e.forEach((n,r)=>t(r,n,e))}function qc(e){const t=e[Yt];return t?t.type_:Array.isArray(e)?1:Yc(e)?2:Qc(e)?3:0}function Jh(e,t){return qc(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function tS(e,t,n){const r=qc(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function YP(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Yc(e){return e instanceof Map}function Qc(e){return e instanceof Set}function ci(e){return e.copy_||e.base_}function Xh(e,t){if(Yc(e))return new Map(e);if(Qc(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&eS(e))return es(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[Yt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const o=r[i],s=n[o];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(n[o]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[o]})}return Object.create(es(e),n)}function $m(e,t=!1){return Jc(e)||Yr(e)||!or(e)||(qc(e)>1&&(e.set=e.add=e.clear=e.delete=QP),Object.freeze(e),t&&$a(e,(n,r)=>$m(r,!0))),e}function QP(){_n(2)}function Jc(e){return Object.isFrozen(e)}var JP={};function ji(e){const t=JP[e];return t||_n(0,e),t}var Ua;function nS(){return Ua}function XP(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Yv(e,t){t&&(ji("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Zh(e){ep(e),e.drafts_.forEach(ZP),e.drafts_=null}function ep(e){e===Ua&&(Ua=e.parent_)}function Qv(e){return Ua=XP(Ua,e)}function ZP(e){const t=e[Yt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Jv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Yt].modified_&&(Zh(t),_n(4)),or(e)&&(e=Yu(t,e),t.parent_||Qu(t,e)),t.patches_&&ji("Patches").generateReplacementPatches_(n[Yt].base_,e,t.patches_,t.inversePatches_)):e=Yu(t,n,[]),Zh(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ZE?e:void 0}function Yu(e,t,n){if(Jc(t))return t;const r=t[Yt];if(!r)return $a(t,(i,o)=>Xv(e,r,t,i,o,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return Qu(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let o=i,s=!1;r.type_===3&&(o=new Set(i),i.clear(),s=!0),$a(o,(a,l)=>Xv(e,r,i,a,l,n,s)),Qu(e,i,!1),n&&e.patches_&&ji("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function Xv(e,t,n,r,i,o,s){if(Yr(i)){const a=o&&t&&t.type_!==3&&!Jh(t.assigned_,r)?o.concat(r):void 0,l=Yu(e,i,a);if(tS(n,r,l),Yr(l))e.canAutoFreeze_=!1;else return}else s&&n.add(i);if(or(i)&&!Jc(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Yu(e,i),(!t||!t.scope_.parent_)&&Qu(e,i)}}function Qu(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&$m(t,n)}function eN(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:nS(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=Um;n&&(i=[r],o=za);const{revoke:s,proxy:a}=Proxy.revocable(i,o);return r.draft_=a,r.revoke_=s,a}var Um={get(e,t){if(t===Yt)return e;const n=ci(e);if(!Jh(n,t))return tN(e,n,t);const r=n[t];return e.finalized_||!or(r)?r:r===wf(e.base_,t)?(Ef(e),e.copy_[t]=np(r,e)):r},has(e,t){return t in ci(e)},ownKeys(e){return Reflect.ownKeys(ci(e))},set(e,t,n){const r=rS(ci(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=wf(ci(e),t),o=i==null?void 0:i[Yt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(YP(n,i)&&(n!==void 0||Jh(e.base_,t)))return!0;Ef(e),tp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return wf(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Ef(e),tp(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=ci(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){_n(11)},getPrototypeOf(e){return es(e.base_)},setPrototypeOf(){_n(12)}},za={};$a(Um,(e,t)=>{za[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});za.deleteProperty=function(e,t){return za.set.call(this,e,t,void 0)};za.set=function(e,t,n){return Um.set.call(this,e[0],t,n,e[0])};function wf(e,t){const n=e[Yt];return(n?ci(n):e)[t]}function tN(e,t,n){var i;const r=rS(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function rS(e,t){if(!(t in e))return;let n=es(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=es(n)}}function tp(e){e.modified_||(e.modified_=!0,e.parent_&&tp(e.parent_))}function Ef(e){e.copy_||(e.copy_=Xh(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var nN=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const o=n;n=t;const s=this;return function(l=o,...u){return s.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&_n(6),r!==void 0&&typeof r!="function"&&_n(7);let i;if(or(t)){const o=Qv(this),s=np(t,void 0);let a=!0;try{i=n(s),a=!1}finally{a?Zh(o):ep(o)}return Yv(o,r),Jv(i,o)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===ZE&&(i=void 0),this.autoFreeze_&&$m(i,!0),r){const o=[],s=[];ji("Patches").generateReplacementPatches_(t,i,o,s),r(o,s)}return i}else _n(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...a)=>this.produceWithPatches(s,l=>t(l,...a));let r,i;return[this.produce(t,n,(s,a)=>{r=s,i=a}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){or(e)||_n(8),Yr(e)&&(e=iS(e));const t=Qv(this),n=np(e,void 0);return n[Yt].isManual_=!0,ep(t),n}finishDraft(e,t){const n=e&&e[Yt];(!n||!n.isManual_)&&_n(9);const{scope_:r}=n;return Yv(r,t),Jv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=ji("Patches").applyPatches_;return Yr(e)?r(e,t):this.produce(e,i=>r(i,t))}};function np(e,t){const n=Yc(e)?ji("MapSet").proxyMap_(e,t):Qc(e)?ji("MapSet").proxySet_(e,t):eN(e,t);return(t?t.scope_:nS()).drafts_.push(n),n}function iS(e){return Yr(e)||_n(10,e),oS(e)}function oS(e){if(!or(e)||Jc(e))return e;const t=e[Yt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Xh(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Xh(e,!0);return $a(n,(r,i)=>{tS(n,r,oS(i))}),t&&(t.finalized_=!1),n}var Qt=new nN,sS=Qt.produce;Qt.produceWithPatches.bind(Qt);Qt.setAutoFreeze.bind(Qt);Qt.setUseStrictShallowCopy.bind(Qt);Qt.applyPatches.bind(Qt);Qt.createDraft.bind(Qt);Qt.finishDraft.bind(Qt);function rN(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function iN(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function oN(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var Zv=e=>Array.isArray(e)?e:[e];function sN(e){const t=Array.isArray(e[0])?e[0]:e;return oN(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function aN(e,t){const n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var lN=class{constructor(e){this.value=e}deref(){return this.value}},uN=typeof WeakRef<"u"?WeakRef:lN,cN=0,e_=1;function Hl(){return{s:cN,v:void 0,o:null,p:null}}function zm(e,t={}){let n=Hl();const{resultEqualityCheck:r}=t;let i,o=0;function s(){var d;let a=n;const{length:l}=arguments;for(let f=0,m=l;f<m;f++){const y=arguments[f];if(typeof y=="function"||typeof y=="object"&&y!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const w=_.get(y);w===void 0?(a=Hl(),_.set(y,a)):a=w}else{let _=a.p;_===null&&(a.p=_=new Map);const w=_.get(y);w===void 0?(a=Hl(),_.set(y,a)):a=w}}const u=a;let c;if(a.s===e_?c=a.v:(c=e.apply(null,arguments),o++),u.s=e_,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,o!==0&&o--),i=typeof c=="object"&&c!==null||typeof c=="function"?new uN(c):c}return u.v=c,c}return s.clearCache=()=>{n=Hl(),s.resetResultsCount()},s.resultsCount=()=>o,s.resetResultsCount=()=>{o=0},s}function aS(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...i)=>{let o=0,s=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),rN(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:m=zm,argsMemoizeOptions:y=[],devModeChecks:_={}}=c,w=Zv(f),p=Zv(y),h=sN(i),g=d(function(){return o++,u.apply(null,arguments)},...w),C=m(function(){s++;const v=aN(h,arguments);return a=g.apply(null,v),a},...p);return Object.assign(C,{resultFunc:u,memoizedResultFunc:g,dependencies:h,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>a,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:d,argsMemoize:m})};return Object.assign(r,{withTypes:()=>r}),r}var dN=aS(zm),fN=Object.assign((e,t=dN)=>{iN(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(o=>e[o]);return t(r,(...o)=>o.reduce((s,a,l)=>(s[n[l]]=a,s),{}))},{withTypes:()=>fN});function lS(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var hN=lS(),pN=lS,mN=(...e)=>{const t=aS(...e),n=Object.assign((...r)=>{const i=t(...r),o=(s,...a)=>i(Yr(s)?iS(s):s,...a);return Object.assign(o,i),o},{withTypes:()=>n});return n};mN(zm);var gN=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?qu:qu.apply(null,arguments)};function ts(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(jt(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>KP(r)&&r.type===e,n}var uS=class Qs extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Qs.prototype)}static get[Symbol.species](){return Qs}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Qs(...t[0].concat(this)):new Qs(...t.concat(this))}};function t_(e){return or(e)?sS(e,()=>{}):e}function n_(e,t,n){if(e.has(t)){let i=e.get(t);return n.update&&(i=n.update(i,t,e),e.set(t,i)),i}if(!n.insert)throw new Error(jt(10));const r=n.insert(t,e);return e.set(t,r),r}function yN(e){return typeof e=="boolean"}var vN=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let s=new uS;return n&&(yN(n)?s.push(hN):s.push(pN(n.extraArgument))),s},_N="RTK_autoBatch",cS=e=>t=>{setTimeout(t,e)},wN=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:cS(10),EN=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,s=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?wN:e.type==="callback"?e.queueNotification:cS(e.timeout),u=()=>{s=!1,o&&(o=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[_N]),o=!i,o&&(s||(s=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},SN=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new uS(e);return r&&i.push(EN(typeof r=="object"?r:void 0)),i},CN=!0;function TN(e){const t=vN(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(jm(n))a=HP(n);else throw new Error(jt(1));let l;typeof r=="function"?l=r(t):l=t();let u=qu;i&&(u=gN({trace:!CN,...typeof i=="object"&&i}));const c=GP(...l),d=SN(c);let f=typeof s=="function"?s(d):d();const m=u(...f);return XE(a,o,m)}function dS(e){const t={},n=[];let r;const i={addCase(o,s){const a=typeof o=="string"?o:o.type;if(!a)throw new Error(jt(28));if(a in t)throw new Error(jt(29));return t[a]=s,i},addMatcher(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function IN(e){return typeof e=="function"}function xN(e,t){let[n,r,i]=dS(t),o;if(IN(e))o=()=>t_(e());else{const a=t_(e);o=()=>a}function s(a=o(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Yr(c)){const m=d(c,l);return m===void 0?c:m}else{if(or(c))return sS(c,f=>d(f,l));{const f=d(c,l);if(f===void 0){if(c===null)return c;throw new Error(jt(9))}return f}}return c},a)}return s.getInitialState=o,s}var kN="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",bN=(e=21)=>{let t="",n=e;for(;n--;)t+=kN[Math.random()*64|0];return t},RN=Symbol.for("rtk-slice-createasyncthunk");function PN(e,t){return`${e}/${t}`}function NN({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[RN];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(jt(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(DN()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(g,C){const b=typeof g=="string"?g:g.type;if(!b)throw new Error(jt(12));if(b in u.sliceCaseReducersByType)throw new Error(jt(13));return u.sliceCaseReducersByType[b]=C,c},addMatcher(g,C){return u.sliceMatchers.push({matcher:g,reducer:C}),c},exposeAction(g,C){return u.actionCreators[g]=C,c},exposeCaseReducer(g,C){return u.sliceCaseReducersByName[g]=C,c}};l.forEach(g=>{const C=a[g],b={reducerName:g,type:PN(o,g),createNotation:typeof i.reducers=="function"};MN(C)?jN(b,C,c,t):LN(b,C,c)});function d(){const[g={},C=[],b=void 0]=typeof i.extraReducers=="function"?dS(i.extraReducers):[i.extraReducers],v={...g,...u.sliceCaseReducersByType};return xN(i.initialState,S=>{for(let P in v)S.addCase(P,v[P]);for(let P of u.sliceMatchers)S.addMatcher(P.matcher,P.reducer);for(let P of C)S.addMatcher(P.matcher,P.reducer);b&&S.addDefaultCase(b)})}const f=g=>g,m=new Map;let y;function _(g,C){return y||(y=d()),y(g,C)}function w(){return y||(y=d()),y.getInitialState()}function p(g,C=!1){function b(S){let P=S[g];return typeof P>"u"&&C&&(P=w()),P}function v(S=f){const P=n_(m,C,{insert:()=>new WeakMap});return n_(P,S,{insert:()=>{const O={};for(const[$,Q]of Object.entries(i.selectors??{}))O[$]=AN(Q,S,w,C);return O}})}return{reducerPath:g,getSelectors:v,get selectors(){return v(b)},selectSlice:b}}const h={name:o,reducer:_,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:w,...p(s),injectInto(g,{reducerPath:C,...b}={}){const v=C??s;return g.inject({reducerPath:v,reducer:_},b),{...h,...p(v,!0)}}};return h}}function AN(e,t,n,r){function i(o,...s){let a=t(o);return typeof a>"u"&&r&&(a=n()),e(a,...s)}return i.unwrapped=e,i}var ON=NN();function DN(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function LN({type:e,reducerName:t,createNotation:n},r,i){let o,s;if("reducer"in r){if(n&&!FN(r))throw new Error(jt(17));o=r.reducer,s=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,s?ts(e,s):ts(e))}function MN(e){return e._reducerDefinitionType==="asyncThunk"}function FN(e){return e._reducerDefinitionType==="reducerWithPrepare"}function jN({type:e,reducerName:t},n,r,i){if(!i)throw new Error(jt(18));const{payloadCreator:o,fulfilled:s,pending:a,rejected:l,settled:u,options:c}=n,d=i(e,o,c);r.exposeAction(t,d),s&&r.addCase(d.fulfilled,s),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:s||Gl,pending:a||Gl,rejected:l||Gl,settled:u||Gl})}function Gl(){}var $N=(e,t)=>{if(typeof e!="function")throw new Error(jt(32))},Bm="listenerMiddleware",UN=e=>{let{type:t,actionCreator:n,matcher:r,predicate:i,effect:o}=e;if(t)i=ts(t).match;else if(n)t=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(jt(21));return $N(o),{predicate:i,type:t,effect:o}},zN=Object.assign(e=>{const{type:t,predicate:n,effect:r}=UN(e);return{id:bN(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(jt(22))}}},{withTypes:()=>zN}),BN=Object.assign(ts(`${Bm}/add`),{withTypes:()=>BN});ts(`${Bm}/removeAll`);var WN=Object.assign(ts(`${Bm}/remove`),{withTypes:()=>WN});function jt(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const fS=ON({name:"users",initialState:{currentUser:null},reducers:{setUser(e,t){e.currentUser=t.payload}}}),{setUser:Ba}=fS.actions,VN=e=>e.users,HN=fS.reducer,GN=TN({reducer:{users:HN}});var r_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=function(e,t){if(!e)throw hs(t)},hs=function(e){return new Error("Firebase Database ("+hS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},KN=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Wm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,s||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(pS(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):KN(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw new qN;const f=o<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class qN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mS=function(e){const t=pS(e);return Wm.encodeByteArray(t,!0)},Ju=function(e){return mS(e).replace(/\./g,"")},Xu=function(e){try{return Wm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(e){return gS(void 0,e)}function gS(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!QN(n)||(e[n]=gS(e[n],t[n]));return e}function QN(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=()=>JN().__FIREBASE_DEFAULTS__,ZN=()=>{if(typeof process>"u"||typeof r_>"u")return;const e=r_.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},eA=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Xu(e[1]);return t&&JSON.parse(t)},Vm=()=>{try{return XN()||ZN()||eA()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},yS=e=>{var t,n;return(n=(t=Vm())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},tA=e=>{const t=yS(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},vS=()=>{var e;return(e=Vm())===null||e===void 0?void 0:e.config},_S=e=>{var t;return(t=Vm())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ju(JSON.stringify(n)),Ju(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function rA(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function wS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iA(){const e=Tt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ES(){return hS.NODE_ADMIN===!0}function oA(){try{return typeof indexedDB=="object"}catch{return!1}}function sA(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="FirebaseError";class ni extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=aA,Object.setPrototypeOf(this,ni.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dl.prototype.create)}}class dl{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?lA(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new ni(i,a,r)}}function lA(e,t){return e.replace(uA,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const uA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(e){return JSON.parse(e)}function st(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=Wa(Xu(o[0])||""),n=Wa(Xu(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},cA=function(e){const t=SS(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dA=function(e){const t=SS(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ns(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function rp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Zu(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ec(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(i_(o)&&i_(s)){if(!ec(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function i_(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Js(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Xs(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^o&(s^a),c=1518500249):(u=o^s^a,c=1859775393):d<60?(u=o&s|a&(o|s),c=2400959708):(u=o^s^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(o[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=t[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)t[r]=this.chain_[i]>>o&255,++r;return t}}function hA(e,t){const n=new pA(e,t);return n.subscribe.bind(n)}class pA{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mA(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Sf),i.error===void 0&&(i.error=Sf),i.complete===void 0&&(i.complete=Sf);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mA(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Sf(){}function Zc(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,A(r<e.length,"Surrogate pair missing trail surrogate.");const s=e.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ed=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){return e&&e._delegate?e._delegate:e}class $i{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Xc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_A(t))try{this.getOrInitializeService({instanceIdentifier:di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=di){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=di){return this.instances.has(t)}getOptions(t=di){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vA(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=di){return this.component?this.component.multipleInstances?t:di:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vA(e){return e===di?void 0:e}function _A(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new yA(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ve||(ve={}));const EA={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},SA=ve.INFO,CA={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},TA=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=CA[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Gm{constructor(t){this.name=t,this._logLevel=SA,this._logHandler=TA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ve))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?EA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...t),this._logHandler(this,ve.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...t),this._logHandler(this,ve.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...t),this._logHandler(this,ve.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...t),this._logHandler(this,ve.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...t),this._logHandler(this,ve.ERROR,...t)}}const IA=(e,t)=>t.some(n=>e instanceof n);let o_,s_;function xA(){return o_||(o_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kA(){return s_||(s_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CS=new WeakMap,ip=new WeakMap,TS=new WeakMap,Cf=new WeakMap,Km=new WeakMap;function bA(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Br(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&CS.set(n,e)}).catch(()=>{}),Km.set(t,e),t}function RA(e){if(ip.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});ip.set(e,t)}let op={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ip.get(e);if(t==="objectStoreNames")return e.objectStoreNames||TS.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function PA(e){op=e(op)}function NA(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Tf(this),t,...n);return TS.set(r,t.sort?t.sort():[t]),Br(r)}:kA().includes(e)?function(...t){return e.apply(Tf(this),t),Br(CS.get(this))}:function(...t){return Br(e.apply(Tf(this),t))}}function AA(e){return typeof e=="function"?NA(e):(e instanceof IDBTransaction&&RA(e),IA(e,xA())?new Proxy(e,op):e)}function Br(e){if(e instanceof IDBRequest)return bA(e);if(Cf.has(e))return Cf.get(e);const t=AA(e);return t!==e&&(Cf.set(e,t),Km.set(t,e)),t}const Tf=e=>Km.get(e);function OA(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Br(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Br(s.result),l.oldVersion,l.newVersion,Br(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const DA=["get","getKey","getAll","getAllKeys","count"],LA=["put","add","delete","clear"],If=new Map;function a_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(If.get(t))return If.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=LA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DA.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return If.set(t,o),o}PA(e=>({...e,get:(t,n,r)=>a_(t,n)||e.get(t,n,r),has:(t,n)=>!!a_(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FA(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const sp="@firebase/app",l_="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Gm("@firebase/app"),jA="@firebase/app-compat",$A="@firebase/analytics-compat",UA="@firebase/analytics",zA="@firebase/app-check-compat",BA="@firebase/app-check",WA="@firebase/auth",VA="@firebase/auth-compat",HA="@firebase/database",GA="@firebase/database-compat",KA="@firebase/functions",qA="@firebase/functions-compat",YA="@firebase/installations",QA="@firebase/installations-compat",JA="@firebase/messaging",XA="@firebase/messaging-compat",ZA="@firebase/performance",eO="@firebase/performance-compat",tO="@firebase/remote-config",nO="@firebase/remote-config-compat",rO="@firebase/storage",iO="@firebase/storage-compat",oO="@firebase/firestore",sO="@firebase/firestore-compat",aO="firebase",lO="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="[DEFAULT]",uO={[sp]:"fire-core",[jA]:"fire-core-compat",[UA]:"fire-analytics",[$A]:"fire-analytics-compat",[BA]:"fire-app-check",[zA]:"fire-app-check-compat",[WA]:"fire-auth",[VA]:"fire-auth-compat",[HA]:"fire-rtdb",[GA]:"fire-rtdb-compat",[KA]:"fire-fn",[qA]:"fire-fn-compat",[YA]:"fire-iid",[QA]:"fire-iid-compat",[JA]:"fire-fcm",[XA]:"fire-fcm-compat",[ZA]:"fire-perf",[eO]:"fire-perf-compat",[tO]:"fire-rc",[nO]:"fire-rc-compat",[rO]:"fire-gcs",[iO]:"fire-gcs-compat",[oO]:"fire-fst",[sO]:"fire-fst-compat","fire-js":"fire-js",[aO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new Map,lp=new Map;function cO(e,t){try{e.container.addComponent(t)}catch(n){Ui.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function rs(e){const t=e.name;if(lp.has(t))return Ui.debug(`There were multiple attempts to register component ${t}.`),!1;lp.set(t,e);for(const n of tc.values())cO(n,e);return!0}function qm(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wr=new dl("app","Firebase",dO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=lO;function IS(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ap,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=vS()),!n)throw Wr.create("no-options");const o=tc.get(i);if(o){if(ec(n,o.options)&&ec(r,o.config))return o;throw Wr.create("duplicate-app",{appName:i})}const s=new wA(i);for(const l of lp.values())s.addComponent(l);const a=new fO(n,r,s);return tc.set(i,a),a}function xS(e=ap){const t=tc.get(e);if(!t&&e===ap&&vS())return IS();if(!t)throw Wr.create("no-app",{appName:e});return t}function Vr(e,t,n){var r;let i=(r=uO[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ui.warn(a.join(" "));return}rs(new $i(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO="firebase-heartbeat-database",pO=1,Va="firebase-heartbeat-store";let xf=null;function kS(){return xf||(xf=OA(hO,pO,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Va)}catch(n){console.warn(n)}}}}).catch(e=>{throw Wr.create("idb-open",{originalErrorMessage:e.message})})),xf}async function mO(e){try{const n=(await kS()).transaction(Va),r=await n.objectStore(Va).get(bS(e));return await n.done,r}catch(t){if(t instanceof ni)Ui.warn(t.message);else{const n=Wr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ui.warn(n.message)}}}async function u_(e,t){try{const r=(await kS()).transaction(Va,"readwrite");await r.objectStore(Va).put(t,bS(e)),await r.done}catch(n){if(n instanceof ni)Ui.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ui.warn(r.message)}}}function bS(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=1024,yO=30*24*60*60*1e3;class vO{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=c_();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=yO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=c_(),{heartbeatsToSend:r,unsentEntries:i}=_O(this._heartbeatsCache.heartbeats),o=Ju(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function c_(){return new Date().toISOString().substring(0,10)}function _O(e,t=gO){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),d_(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),d_(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wO{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oA()?sA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return u_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return u_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function d_(e){return Ju(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(e){rs(new $i("platform-logger",t=>new MA(t),"PRIVATE")),rs(new $i("heartbeat",t=>new vO(t),"PRIVATE")),Vr(sp,l_,e),Vr(sp,l_,"esm2017"),Vr("fire-js","")}EO("");var SO="firebase",CO="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vr(SO,CO,"app");function Ym(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function RS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TO=RS,PS=new dl("auth","Firebase",RS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new Gm("@firebase/auth");function IO(e,...t){nc.logLevel<=ve.WARN&&nc.warn(`Auth (${ms}): ${e}`,...t)}function pu(e,...t){nc.logLevel<=ve.ERROR&&nc.error(`Auth (${ms}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,...t){throw Qm(e,...t)}function Fn(e,...t){return Qm(e,...t)}function xO(e,t,n){const r=Object.assign(Object.assign({},TO()),{[t]:n});return new dl("auth","Firebase",r).create(t,{appName:e.name})}function Qm(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return PS.create(e,...t)}function Y(e,t,...n){if(!e)throw Qm(t,...n)}function Kn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw pu(t),new Error(t)}function sr(e,t){e||Kn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function kO(){return f_()==="http:"||f_()==="https:"}function f_(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kO()||rA()||"connection"in navigator)?navigator.onLine:!0}function RO(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,n){this.shortDelay=t,this.longDelay=n,sr(n>t,"Short delay should be less than long delay!"),this.isMobile=Hm()||wS()}get(){return bO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(e,t){sr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO=new fl(3e4,6e4);function ri(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function pr(e,t,n,r,i={}){return AS(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=ps(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),NS.fetch()(OS(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function AS(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},PO),t);try{const i=new OO(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Kl(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kl(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Kl(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Kl(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xO(e,c,u);bn(e,c)}}catch(i){if(i instanceof ni)throw i;bn(e,"network-request-failed",{message:String(i)})}}async function hl(e,t,n,r,i={}){const o=await pr(e,t,n,r,i);return"mfaPendingCredential"in o&&bn(e,"multi-factor-auth-required",{_serverResponse:o}),o}function OS(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Jm(e.config,i):`${e.config.apiScheme}://${i}`}function AO(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OO{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fn(this.auth,"network-request-failed")),NO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kl(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Fn(e,t,r);return i.customData._tokenResponse=n,i}function h_(e){return e!==void 0&&e.enterprise!==void 0}class DO{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return AO(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function LO(e,t){return pr(e,"GET","/v2/recaptchaConfig",ri(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(e,t){return pr(e,"POST","/v1/accounts:delete",t)}async function FO(e,t){return pr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function jO(e,t=!1){const n=It(e),r=await n.getIdToken(t),i=Xm(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ca(kf(i.auth_time)),issuedAtTime:ca(kf(i.iat)),expirationTime:ca(kf(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function kf(e){return Number(e)*1e3}function Xm(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return pu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xu(n);return i?JSON.parse(i):(pu("Failed to decode base64 JWT payload"),null)}catch(i){return pu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $O(e){const t=Xm(e);return Y(t,"internal-error"),Y(typeof t.exp<"u","internal-error"),Y(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ni&&UO(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function UO({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ca(this.lastLoginAt),this.creationTime=ca(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(e){var t;const n=e.auth,r=await e.getIdToken(),i=await is(e,FO(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?VO(o.providerUserInfo):[],a=WO(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new DS(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function BO(e){const t=It(e);await rc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function WO(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function VO(e){return e.map(t=>{var{providerId:n}=t,r=Ym(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(e,t){const n=await AS(e,{},async()=>{const r=ps({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=OS(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",NS.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GO(e,t){return pr(e,"POST","/v2/accounts:revokeToken",ri(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Y(t.idToken,"internal-error"),Y(typeof t.idToken<"u","internal-error"),Y(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):$O(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return Y(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await HO(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ha;return r&&(Y(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(Y(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ha,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(e,t){Y(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class xi{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Ym(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new DS(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await is(this,this.stsTokenManager.getToken(this.auth,t));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return jO(this,t)}reload(){return BO(this)}_assign(t){this!==t&&(Y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new xi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await rc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await is(this,MO(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:C,isAnonymous:b,providerData:v,stsTokenManager:S}=n;Y(g&&S,t,"internal-error");const P=Ha.fromJSON(this.name,S);Y(typeof g=="string",t,"internal-error"),wr(d,t.name),wr(f,t.name),Y(typeof C=="boolean",t,"internal-error"),Y(typeof b=="boolean",t,"internal-error"),wr(m,t.name),wr(y,t.name),wr(_,t.name),wr(w,t.name),wr(p,t.name),wr(h,t.name);const O=new xi({uid:g,auth:t,email:f,emailVerified:C,displayName:d,isAnonymous:b,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:P,createdAt:p,lastLoginAt:h});return v&&Array.isArray(v)&&(O.providerData=v.map($=>Object.assign({},$))),w&&(O._redirectEventId=w),O}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ha;i.updateFromServerResponse(n);const o=new xi({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await rc(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=new Map;function qn(e){sr(e instanceof Function,"Expected a class definition");let t=p_.get(e);return t?(sr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,p_.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}LS.type="NONE";const m_=LS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(e,t,n){return`firebase:${e}:${t}:${n}`}class Fo{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=mu(this.userKey,i.apiKey,o),this.fullPersistenceKey=mu("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?xi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Fo(qn(m_),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||qn(m_);const s=mu(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const d=xi._fromJSON(t,c);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Fo(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Fo(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(jS(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(MS(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(US(t))return"Blackberry";if(zS(t))return"Webos";if(Zm(t))return"Safari";if((t.includes("chrome/")||FS(t))&&!t.includes("edge/"))return"Chrome";if($S(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function MS(e=Tt()){return/firefox\//i.test(e)}function Zm(e=Tt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function FS(e=Tt()){return/crios\//i.test(e)}function jS(e=Tt()){return/iemobile/i.test(e)}function $S(e=Tt()){return/android/i.test(e)}function US(e=Tt()){return/blackberry/i.test(e)}function zS(e=Tt()){return/webos/i.test(e)}function td(e=Tt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function KO(e=Tt()){var t;return td(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function qO(){return iA()&&document.documentMode===10}function BS(e=Tt()){return td(e)||$S(e)||zS(e)||US(e)||/windows phone/i.test(e)||jS(e)}function YO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(e,t=[]){let n;switch(e){case"Browser":n=g_(Tt());break;case"Worker":n=`${g_(Tt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JO(e,t={}){return pr(e,"GET","/v2/passwordPolicy",ri(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO=6;class ZO{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:XO,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new y_(this),this.idTokenSubscription=new y_(this),this.beforeStateQueue=new QO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=PS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fo.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await rc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=RO()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?It(t):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await JO(this),n=new ZO(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new dl("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GO(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&qn(t)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Fo.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=WS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&IO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ji(e){return It(e)}class y_{constructor(t){this.auth=t,this.observer=null,this.addObserver=hA(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tD(e){nd=e}function VS(e){return nd.loadJS(e)}function nD(){return nd.recaptchaEnterpriseScript}function rD(){return nd.gapiScript}function iD(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const oD="recaptcha-enterprise",sD="NO_RECAPTCHA";class aD{constructor(t){this.type=oD,this.auth=Ji(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{LO(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new DO(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;h_(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(sD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&h_(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=nD();l.length!==0&&(l+=a),VS(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function v_(e,t,n,r=!1){const i=new aD(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function cp(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await v_(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await v_(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(e,t){const n=qm(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ec(o,t??{}))return i;bn(i,"already-initialized")}return n.initialize({options:t})}function uD(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function cD(e,t,n){const r=Ji(e);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=HS(t),{host:s,port:a}=dD(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||fD()}function HS(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function dD(e){const t=HS(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:__(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:__(s)}}}function __(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function fD(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(t){return Kn("not implemented")}_linkToIdToken(t,n){return Kn("not implemented")}_getReauthenticationResolver(t){return Kn("not implemented")}}async function hD(e,t){return pr(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(e,t){return hl(e,"POST","/v1/accounts:signInWithPassword",ri(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD(e,t){return hl(e,"POST","/v1/accounts:signInWithEmailLink",ri(e,t))}async function gD(e,t){return hl(e,"POST","/v1/accounts:signInWithEmailLink",ri(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends eg{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ga(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ga(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cp(t,n,"signInWithPassword",pD);case"emailLink":return mD(t,{email:this._email,oobCode:this._password});default:bn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cp(t,r,"signUpPassword",hD);case"emailLink":return gD(t,{idToken:n,email:this._email,oobCode:this._password});default:bn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(e,t){return hl(e,"POST","/v1/accounts:signInWithIdp",ri(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD="http://localhost";class zi extends eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new zi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Ym(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new zi(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return jo(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,jo(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,jo(t,n)}buildRequest(){const t={requestUri:yD,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ps(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _D(e){const t=Js(Xs(e)).link,n=t?Js(Xs(t)).deep_link_id:null,r=Js(Xs(e)).deep_link_id;return(r?Js(Xs(r)).link:null)||r||n||t||e}class tg{constructor(t){var n,r,i,o,s,a;const l=Js(Xs(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=vD((i=l.mode)!==null&&i!==void 0?i:null);Y(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=_D(t);try{return new tg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.providerId=gs.PROVIDER_ID}static credential(t,n){return Ga._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=tg.parseLink(n);return Y(r,"argument-error"),Ga._fromEmailAndCode(t,r.code,r.tenantId)}}gs.PROVIDER_ID="password";gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends GS{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends pl{constructor(){super("facebook.com")}static credential(t){return zi._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kr.credentialFromTaggedObject(t)}static credentialFromError(t){return kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kr.credential(t.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends pl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return zi._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return br.credentialFromTaggedObject(t)}static credentialFromError(t){return br.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends pl{constructor(){super("github.com")}static credential(t){return zi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rr.credentialFromTaggedObject(t)}static credentialFromError(t){return Rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rr.credential(t.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends pl{constructor(){super("twitter.com")}static credential(t,n){return zi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Pr.credentialFromTaggedObject(t)}static credentialFromError(t){return Pr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wD(e,t){return hl(e,"POST","/v1/accounts:signUp",ri(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await xi._fromIdTokenResponse(t,r,i),s=w_(r);return new Bi({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=w_(r);return new Bi({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function w_(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends ni{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ic.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ic(t,n,r,i)}}function KS(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ic._fromErrorAndOperation(e,o,t,r):o})}async function ED(e,t,n=!1){const r=await is(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Bi._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await is(e,KS(r,i,t,e),n);Y(o.idToken,r,"internal-error");const s=Xm(o.idToken);Y(s,r,"internal-error");const{sub:a}=s;return Y(e.uid===a,r,"user-mismatch"),Bi._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(e,t,n=!1){const r="signIn",i=await KS(e,r,t),o=await Bi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function CD(e,t){return qS(Ji(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(e){const t=Ji(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function TD(e,t,n){const r=Ji(e),s=await cp(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&YS(e),l}),a=await Bi._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function ID(e,t,n){return CD(It(e),gs.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&YS(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xD(e,t){return pr(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kD(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=It(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await is(r,xD(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function bD(e,t,n,r){return It(e).onIdTokenChanged(t,n,r)}function RD(e,t,n){return It(e).beforeAuthStateChanged(t,n)}function PD(e,t,n,r){return It(e).onAuthStateChanged(t,n,r)}function ND(e){return It(e).signOut()}const oc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oc,"1"),this.storage.removeItem(oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(){const e=Tt();return Zm(e)||td(e)}const OD=1e3,DD=10;class JS extends QS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=AD()&&YO(),this.fallbackToPolling=BS(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);qO()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,DD):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},OD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}JS.type="LOCAL";const LD=JS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS extends QS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}XS.type="SESSION";const ZS=XS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new rd(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await MD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=ng("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function jD(e){jn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function $D(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UD(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function zD(){return eC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="firebaseLocalStorageDb",BD=1,sc="firebaseLocalStorage",nC="fbase_key";class ml{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function id(e,t){return e.transaction([sc],t?"readwrite":"readonly").objectStore(sc)}function WD(){const e=indexedDB.deleteDatabase(tC);return new ml(e).toPromise()}function dp(){const e=indexedDB.open(tC,BD);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(sc,{keyPath:nC})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(sc)?t(r):(r.close(),await WD(),t(await dp()))})})}async function E_(e,t,n){const r=id(e,!0).put({[nC]:t,value:n});return new ml(r).toPromise()}async function VD(e,t){const n=id(e,!1).get(t),r=await new ml(n).toPromise();return r===void 0?null:r.value}function S_(e,t){const n=id(e,!0).delete(t);return new ml(n).toPromise()}const HD=800,GD=3;class rC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dp(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>GD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rd._getInstance(zD()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await $D(),!this.activeServiceWorker)return;this.sender=new FD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||UD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await dp();return await E_(t,oc,"1"),await S_(t,oc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>E_(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>VD(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>S_(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=id(i,!1).getAll();return new ml(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rC.type="LOCAL";const KD=rC;new fl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(e,t){return t?qn(t):(Y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg extends eg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return jo(t,this._buildIdpRequest())}_linkToIdToken(t,n){return jo(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return jo(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function YD(e){return qS(e.auth,new rg(e),e.bypassAuthState)}function QD(e){const{auth:t,user:n}=e;return Y(n,t,"internal-error"),SD(n,new rg(e),e.bypassAuthState)}async function JD(e){const{auth:t,user:n}=e;return Y(n,t,"internal-error"),ED(n,new rg(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return YD;case"linkViaPopup":case"linkViaRedirect":return JD;case"reauthViaPopup":case"reauthViaRedirect":return QD;default:bn(this.auth,"internal-error")}}resolve(t){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=new fl(2e3,1e4);class Ro extends iC{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ro.currentPopupAction&&Ro.currentPopupAction.cancel(),Ro.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Y(t,this.auth,"internal-error"),t}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const t=ng();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ro.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,XD.get())};t()}}Ro.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD="pendingRedirect",gu=new Map;class eL extends iC{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=gu.get(this.auth._key());if(!t){try{const r=await tL(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}gu.set(this.auth._key(),t)}return this.bypassAuthState||gu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tL(e,t){const n=iL(t),r=rL(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nL(e,t){gu.set(e._key(),t)}function rL(e){return qn(e._redirectPersistence)}function iL(e){return mu(ZD,e.config.apiKey,e.name)}async function oL(e,t,n=!1){const r=Ji(e),i=qD(r,t),s=await new eL(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=10*60*1e3;class aL{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!lL(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!oC(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=sL&&this.cachedEventUids.clear(),this.cachedEventUids.has(C_(t))}saveEventToCache(t){this.cachedEventUids.add(C_(t)),this.lastProcessedEventTime=Date.now()}}function C_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function oC({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function lL(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oC(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uL(e,t={}){return pr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dL=/^https?/;async function fL(e){if(e.config.emulator)return;const{authorizedDomains:t}=await uL(e);for(const n of t)try{if(hL(n))return}catch{}bn(e,"unauthorized-domain")}function hL(e){const t=up(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!dL.test(n))return!1;if(cL.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL=new fl(3e4,6e4);function T_(){const e=jn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function mL(e){return new Promise((t,n)=>{var r,i,o;function s(){T_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{T_(),n(Fn(e,"network-request-failed"))},timeout:pL.get()})}if(!((i=(r=jn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=jn().gapi)===null||o===void 0)&&o.load)s();else{const a=iD("iframefcb");return jn()[a]=()=>{gapi.load?s():n(Fn(e,"network-request-failed"))},VS(`${rD()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw yu=null,t})}let yu=null;function gL(e){return yu=yu||mL(e),yu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL=new fl(5e3,15e3),vL="__/auth/iframe",_L="emulator/auth/iframe",wL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SL(e){const t=e.config;Y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Jm(t,_L):`https://${e.config.authDomain}/${vL}`,r={apiKey:t.apiKey,appName:e.name,v:ms},i=EL.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ps(r).slice(1)}`}async function CL(e){const t=await gL(e),n=jn().gapi;return Y(n,e,"internal-error"),t.open({where:document.body,url:SL(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wL,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Fn(e,"network-request-failed"),a=jn().setTimeout(()=>{o(s)},yL.get());function l(){jn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IL=500,xL=600,kL="_blank",bL="http://localhost";class I_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RL(e,t,n,r=IL,i=xL){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TL),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Tt().toLowerCase();n&&(a=FS(u)?kL:n),MS(u)&&(t=t||bL,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,y])=>`${f}${m}=${y},`,"");if(KO(u)&&a!=="_self")return PL(t||"",a),new I_(null);const d=window.open(t||"",a,c);Y(d,e,"popup-blocked");try{d.focus()}catch{}return new I_(d)}function PL(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL="__/auth/handler",AL="emulator/auth/handler",OL=encodeURIComponent("fac");async function x_(e,t,n,r,i,o){Y(e.config.authDomain,e,"auth-domain-config-required"),Y(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ms,eventId:i};if(t instanceof GS){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",rp(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries(o||{}))s[c]=d}if(t instanceof pl){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${OL}=${encodeURIComponent(l)}`:"";return`${DL(e)}?${ps(a).slice(1)}${u}`}function DL({config:e}){return e.emulator?Jm(e,AL):`https://${e.authDomain}/${NL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="webStorageSupport";class LL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZS,this._completeRedirectFn=oL,this._overrideRedirectResult=nL}async _openPopup(t,n,r,i){var o;sr((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await x_(t,n,r,up(),i);return RL(t,s,ng())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await x_(t,n,r,up(),i);return jD(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(sr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await CL(t),r=new aL(t);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(bf,{type:bf},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[bf];s!==void 0&&n(!!s),bn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fL(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return BS()||Zm()||td()}}const ML=LL;var k_="@firebase/auth",b_="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $L(e){rs(new $i("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;Y(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:WS(e)},u=new eD(r,i,o,l);return uD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),rs(new $i("auth-internal",t=>{const n=Ji(t.getProvider("auth").getImmediate());return(r=>new FL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vr(k_,b_,jL(e)),Vr(k_,b_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL=5*60,zL=_S("authIdTokenMaxAge")||UL;let R_=null;const BL=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zL)return;const i=n==null?void 0:n.token;R_!==i&&(R_=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WL(e=xS()){const t=qm(e,"auth");if(t.isInitialized())return t.getImmediate();const n=lD(e,{popupRedirectResolver:ML,persistence:[KD,LD,ZS]}),r=_S("authTokenSyncURL");if(r){const o=BL(r);RD(n,o,()=>o(n.currentUser)),bD(n,s=>o(s))}const i=yS("auth");return i&&cD(n,`http://${i}`),n}function VL(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}tD({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Fn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",VL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$L("Browser");var P_={};const N_="@firebase/database",A_="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sC="";function HL(e){sC=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),st(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Wa(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return $n(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new GL(t)}}catch{}return new KL},Ei=aC("localStorage"),fp=aC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new Gm("@firebase/database"),qL=function(){let e=1;return function(){return e++}}(),lC=function(e){const t=gA(e),n=new fA;n.update(t);const r=n.digest();return Wm.encodeByteArray(r)},gl=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=gl.apply(null,r):typeof r=="object"?t+=st(r):t+=r,t+=" "}return t};let ki=null,O_=!0;const YL=function(e,t){A(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?($o.logLevel=ve.VERBOSE,ki=$o.log.bind($o),t&&fp.set("logging_enabled",!0)):typeof e=="function"?ki=e:(ki=null,fp.remove("logging_enabled"))},St=function(...e){if(O_===!0&&(O_=!1,ki===null&&fp.get("logging_enabled")===!0&&YL(!0)),ki){const t=gl.apply(null,e);ki(t)}},yl=function(e){return function(...t){St(e,...t)}},hp=function(...e){const t="FIREBASE INTERNAL ERROR: "+gl(...e);$o.error(t)},ar=function(...e){const t=`FIREBASE FATAL ERROR: ${gl(...e)}`;throw $o.error(t),new Error(t)},$t=function(...e){const t="FIREBASE WARNING: "+gl(...e);$o.warn(t)},QL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ig=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},JL=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wi="[MIN_NAME]",lr="[MAX_NAME]",ys=function(e,t){if(e===t)return 0;if(e===Wi||t===lr)return-1;if(t===Wi||e===lr)return 1;{const n=D_(e),r=D_(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},XL=function(e,t){return e===t?0:e<t?-1:1},js=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+st(t))},og=function(e){if(typeof e!="object"||e===null)return st(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=st(t[r]),n+=":",n+=og(e[t[r]]);return n+="}",n},uC=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Ut(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const cC=function(e){A(!ig(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,s,a,l;e===0?(o=0,s=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=a+r,s=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},ZL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tM(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const nM=new RegExp("^-?(0*)\\d{1,10}$"),rM=-2147483648,iM=2147483647,D_=function(e){if(nM.test(e)){const t=Number(e);if(t>=rM&&t<=iM)return t}return null},vs=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw $t("Exception was thrown by user callback.",n),t},Math.floor(0))}},oM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},da=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){$t(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(St("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$t(t)}}class Uo{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Uo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="5",dC="v",fC="s",hC="r",pC="f",mC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gC="ls",yC="p",pp="ac",vC="websocket",_C="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(t,n,r,i,o=!1,s="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ei.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Ei.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function lM(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function EC(e,t,n){A(typeof t=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let r;if(t===vC)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===_C)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);lM(e)&&(n.ns=e.namespace);const i=[];return Ut(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(){this.counters_={}}incrementCounter(t,n=1){$n(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return YN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf={},Pf={};function ag(e){const t=e.toString();return Rf[t]||(Rf[t]=new uM),Rf[t]}function cM(e,t){const n=e.toString();return Pf[n]||(Pf[n]=t()),Pf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&vs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="start",fM="close",hM="pLPCommand",pM="pRTLPCB",SC="id",CC="pw",TC="ser",mM="cb",gM="seg",yM="ts",vM="d",_M="dframe",IC=1870,xC=30,wM=IC-xC,EM=25e3,SM=3e4;class Po{constructor(t,n,r,i,o,s,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yl(t),this.stats_=ag(n),this.urlFn=l=>(this.appCheckToken&&(l[pp]=this.appCheckToken),EC(n,_C,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dM(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SM)),JL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lg((...o)=>{const[s,a,l,u,c]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===L_)this.id=a,this.password=l;else if(s===fM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[L_]="t",r[TC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[mM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[dC]=sg,this.transportSessionId&&(r[fC]=this.transportSessionId),this.lastSessionId&&(r[gC]=this.lastSessionId),this.applicationId&&(r[yC]=this.applicationId),this.appCheckToken&&(r[pp]=this.appCheckToken),typeof location<"u"&&location.hostname&&mC.test(location.hostname)&&(r[hC]=pC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Po.forceAllow_=!0}static forceDisallow(){Po.forceDisallow_=!0}static isAvailable(){return Po.forceAllow_?!0:!Po.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZL()&&!eM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=st(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mS(n),i=uC(r,wM);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[_M]="t",r[SC]=t,r[CC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=st(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lg{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qL(),window[hM+this.uniqueCallbackIdentifier]=t,window[pM+this.uniqueCallbackIdentifier]=n,this.myIFrame=lg.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){St("frame writing exception"),a.stack&&St(a.stack),St(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||St("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[SC]=this.myID,t[CC]=this.myPW,t[TC]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xC+r.length<=IC;){const s=this.pendingSegs.shift();r=r+"&"+gM+i+"="+s.seg+"&"+yM+i+"="+s.ts+"&"+vM+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(EM)),o=()=>{clearTimeout(i),r()};this.addTag(t,o)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{St("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=16384,TM=45e3;let ac=null;typeof MozWebSocket<"u"?ac=MozWebSocket:typeof WebSocket<"u"&&(ac=WebSocket);class wn{constructor(t,n,r,i,o,s,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yl(this.connId),this.stats_=ag(n),this.connURL=wn.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,o){const s={};return s[dC]=sg,typeof location<"u"&&location.hostname&&mC.test(location.hostname)&&(s[hC]=pC),n&&(s[fC]=n),r&&(s[gC]=r),i&&(s[pp]=i),o&&(s[yC]=o),EC(t,vC,s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ei.set("previous_websocket_failure",!0);try{let r;ES(),this.mySock=new ac(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){wn.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&ac!==null&&!wn.forceDisallow_}static previouslyFailed(){return Ei.isInMemoryStorage||Ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ei.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Wa(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(A(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=st(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=uC(n,CM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(TM))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wn.responsesRequiredToBeHealthy=2;wn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Po,wn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=wn&&wn.isAvailable();let r=n&&!wn.previouslyFailed();if(t.webSocketOnly&&(n||$t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wn];else{const i=this.transports_=[];for(const o of Ka.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);Ka.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ka.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=6e4,xM=5e3,kM=10*1024,bM=100*1024,Nf="t",M_="d",RM="s",F_="r",PM="e",j_="o",$_="a",U_="n",z_="p",NM="h";class AM{constructor(t,n,r,i,o,s,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yl("c:"+this.id+":"),this.transportManager_=new Ka(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=da(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Nf in t){const n=t[Nf];n===$_?this.upgradeIfSecondaryHealthy_():n===F_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===j_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=js("t",t),r=js("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:z_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:U_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=js("t",t),r=js("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=js(Nf,t);if(M_ in t){const r=t[M_];if(n===NM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===U_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===RM?this.onConnectionShutdown_(r):n===F_?this.onReset_(r):n===PM?hp("Server Error: "+r):n===j_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hp("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sg!==r&&$t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),da(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(IM))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):da(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:z_,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(t){this.allowedEvents_=t,this.listeners_={},A(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(t){A(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends bC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new lc}getInitialEvent(t){return A(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=32,W_=768;class we{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function he(){return new we("")}function oe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Qr(e){return e.pieces_.length-e.pieceNum_}function Te(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new we(e.pieces_,t)}function RC(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function OM(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function PC(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function NC(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new we(t,0)}function Qe(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof we)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new we(n,0)}function ae(e){return e.pieceNum_>=e.pieces_.length}function Ot(e,t){const n=oe(e),r=oe(t);if(n===null)return t;if(n===r)return Ot(Te(e),Te(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ug(e,t){if(Qr(e)!==Qr(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function En(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Qr(e)>Qr(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class DM{constructor(t,n){this.errorPrefix_=n,this.parts_=PC(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ed(this.parts_[r]);AC(this)}}function LM(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=ed(t),AC(e)}function MM(e){const t=e.parts_.pop();e.byteLength_-=ed(t),e.parts_.length>0&&(e.byteLength_-=1)}function AC(e){if(e.byteLength_>W_)throw new Error(e.errorPrefix_+"has a key path longer than "+W_+" bytes ("+e.byteLength_+").");if(e.parts_.length>B_)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+B_+") or object contains a cycle "+fi(e))}function fi(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg extends bC{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new cg}getInitialEvent(t){return A(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=1e3,FM=60*5*1e3,V_=30*1e3,jM=1.3,$M=3e4,UM="server_kill",H_=3;class Xn extends kC{constructor(t,n,r,i,o,s,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Xn.nextPersistentConnectionId_++,this.log_=yl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$s,this.maxReconnectDelay_=FM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ES())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cg.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&lc.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,o={r:i,a:t,b:n};this.log_(st(o)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new Xc,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(t,n,r,i){this.initConnection_();const o=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),A(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";t.tag&&(o.q=n._queryObject,o.t=t.tag),o.h=t.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,u=a.s;Xn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&$n(t,"w")){const r=ns(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();$t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||dA(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=V_)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=cA(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===t&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),A(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const o={p:t},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+t,o),this.sendRequest(t,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+st(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):hp("Unrecognized action received from server: "+st(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$s,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=$s,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$M&&(this.reconnectDelay_=$s),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xn.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},u=function(d){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?St("getToken() completed but was canceled"):(St("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new AM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,m=>{$t(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(UM)},o))}catch(d){this.log_("Failed to get token: "+d),s||(this.repoInfo_.nodeAdmin&&$t(d),l())}}}interrupt(t){St("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){St("Resuming connection for reason: "+t),delete this.interruptReasons_[t],rp(this.interruptReasons_)&&(this.reconnectDelay_=$s,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(o=>og(o)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new we(t).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){St("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=H_&&(this.reconnectDelay_=V_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){St("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=H_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+sC.replace(/\./g,"-")]=1,Hm()?t["framework.cordova"]=1:wS()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=lc.getInstance().currentlyOnline();return rp(this.interruptReasons_)&&t}}Xn.nextPersistentConnectionId_=0;Xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new se(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new se(Wi,t),i=new se(Wi,n);return this.compare(r,i)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;class OC extends od{static get __EMPTY_NODE(){return ql}static set __EMPTY_NODE(t){ql=t}compare(t,n){return ys(t.name,n.name)}isDefinedOn(t){throw hs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return se.MIN}maxPost(){return new se(lr,ql)}makePost(t,n){return A(typeof t=="string","KeyIndex indexValue must always be a string."),new se(t,ql)}toString(){return".key"}}const Zn=new OC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!t.isEmpty();)if(t=t,s=n?r(t.key,n):1,i&&(s*=-1),s<0)this.isReverse_?t=t.left:t=t.right;else if(s===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class ot{constructor(t,n,r,i,o){this.key=t,this.value=n,this.color=r??ot.RED,this.left=i??Dt.EMPTY_NODE,this.right=o??Dt.EMPTY_NODE}copy(t,n,r,i,o){return new ot(t??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const o=r(t,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Dt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}ot.RED=!0;ot.BLACK=!1;class zM{copy(t,n,r,i,o){return this}insert(t,n,r){return new ot(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dt{constructor(t,n=Dt.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Dt(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,ot.BLACK,null,null))}remove(t){return new Dt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,ot.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Yl(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Yl(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Yl(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Yl(this.root_,null,this.comparator_,!0,t)}}Dt.EMPTY_NODE=new zM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(e,t){return ys(e.name,t.name)}function dg(e,t){return ys(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mp;function WM(e){mp=e}const DC=function(e){return typeof e=="number"?"number:"+cC(e):"string:"+e},LC=function(e){if(e.isLeafNode()){const t=e.val();A(typeof t=="string"||typeof t=="number"||typeof t=="object"&&$n(t,".sv"),"Priority must be a string or number.")}else A(e===mp||e.isEmpty(),"priority of unexpected type.");A(e===mp||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G_;class nt{constructor(t,n=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),LC(this.priorityNode_)}static set __childrenNodeConstructor(t){G_=t}static get __childrenNodeConstructor(){return G_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new nt(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ae(t)?this:oe(t)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=oe(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(A(r!==".priority"||Qr(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+DC(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=cC(this.value_):t+=this.value_,this.lazyHash_=lC(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===nt.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof nt.__childrenNodeConstructor?-1:(A(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=nt.VALUE_TYPE_ORDER.indexOf(n),o=nt.VALUE_TYPE_ORDER.indexOf(r);return A(i>=0,"Unknown leaf type: "+n),A(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MC,FC;function VM(e){MC=e}function HM(e){FC=e}class GM extends od{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?ys(t.name,n.name):o}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(lr,new nt("[PRIORITY-POST]",FC))}makePost(t,n){const r=MC(t);return new se(n,new nt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Fe=new GM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=Math.log(2);class qM{constructor(t){const n=o=>parseInt(Math.log(o)/KM,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const uc=function(e,t,n,r){e.sort(t);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=e[l],f=n?n(d):d,new ot(f,d.node,ot.BLACK,null,null);{const m=parseInt(c/2,10)+l,y=i(l,m),_=i(m+1,u);return d=e[m],f=n?n(d):d,new ot(f,d.node,ot.BLACK,y,_)}},o=function(l){let u=null,c=null,d=e.length;const f=function(y,_){const w=d-y,p=d;d-=y;const h=i(w+1,p),g=e[w],C=n?n(g):g;m(new ot(C,g.node,_,null,h))},m=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(y+1));_?f(w,ot.BLACK):(f(w,ot.BLACK),f(w,ot.RED))}return c},s=new qM(e.length),a=o(s);return new Dt(r||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Af;const fo={};class Yn{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return A(fo&&Fe,"ChildrenNode.ts has not been loaded"),Af=Af||new Yn({".priority":fo},{".priority":Fe}),Af}get(t){const n=ns(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Dt?n:null}hasIndex(t){return $n(this.indexSet_,t.toString())}addIndex(t,n){A(t!==Zn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(se.Wrap);let s=o.getNext();for(;s;)i=i||t.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=uc(r,t.getCompare()):a=fo;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new Yn(c,u)}addToIndexes(t,n){const r=Zu(this.indexes_,(i,o)=>{const s=ns(this.indexSet_,o);if(A(s,"Missing index implementation for "+o),i===fo)if(s.isDefinedOn(t.node)){const a=[],l=n.getIterator(se.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),uc(a,s.getCompare())}else return fo;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new se(t.name,a))),l.insert(t,t.node)}});return new Yn(r,this.indexSet_)}removeFromIndexes(t,n){const r=Zu(this.indexes_,i=>{if(i===fo)return i;{const o=n.get(t.name);return o?i.remove(new se(t.name,o)):i}});return new Yn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us;class K{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&LC(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Us||(Us=new K(new Dt(dg),null,Yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Us}updatePriority(t){return this.children_.isEmpty()?this:new K(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Us:n}}getChild(t){const n=oe(t);return n===null?this:this.getImmediateChild(n).getChild(Te(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(A(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new se(t,n);let i,o;n.isEmpty()?(i=this.children_.remove(t),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?Us:this.priorityNode_;return new K(i,s,o)}}updateChild(t,n){const r=oe(t);if(r===null)return n;{A(oe(t)!==".priority"||Qr(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Te(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild(Fe,(s,a)=>{n[s]=a.val(t),r++,o&&K.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!t&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+DC(this.getPriority().val())+":"),this.forEachChild(Fe,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":lC(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new se(t,n));return o?o.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new se(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new se(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,se.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,se.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)>0;)i.getNext(),o=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===vl?-1:0}withIndex(t){if(t===Zn||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Zn||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Fe),i=n.getIterator(Fe);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(t){return t===Zn?null:this.indexMap_.get(t.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class YM extends K{constructor(){super(new Dt(dg),K.EMPTY_NODE,Yn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return K.EMPTY_NODE}isEmpty(){return!1}}const vl=new YM;Object.defineProperties(se,{MIN:{value:new se(Wi,K.EMPTY_NODE)},MAX:{value:new se(lr,vl)}});OC.__EMPTY_NODE=K.EMPTY_NODE;nt.__childrenNodeConstructor=K;WM(vl);HM(vl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM=!0;function pt(e,t=null){if(e===null)return K.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),A(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new nt(n,pt(t))}if(!(e instanceof Array)&&QM){const n=[];let r=!1;if(Ut(e,(s,a)=>{if(s.substring(0,1)!=="."){const l=pt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new se(s,l)))}}),n.length===0)return K.EMPTY_NODE;const o=uc(n,BM,s=>s.name,dg);if(r){const s=uc(n,Fe.getCompare());return new K(o,pt(t),new Yn({".priority":s},{".priority":Fe}))}else return new K(o,pt(t),Yn.Default)}else{let n=K.EMPTY_NODE;return Ut(e,(r,i)=>{if($n(e,r)&&r.substring(0,1)!=="."){const o=pt(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(pt(t))}}VM(pt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC extends od{constructor(t){super(),this.indexPath_=t,A(!ae(t)&&oe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?ys(t.name,n.name):o}makePost(t,n){const r=pt(t),i=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,i)}maxPost(){const t=K.EMPTY_NODE.updateChild(this.indexPath_,vl);return new se(lr,t)}toString(){return PC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM extends od{compare(t,n){const r=t.node.compareTo(n.node);return r===0?ys(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(t,n){const r=pt(t);return new se(n,r)}toString(){return".value"}}const $C=new JM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(e){return{type:"value",snapshotNode:e}}function os(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function qa(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ya(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function XM(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(t){this.index_=t}updateChild(t,n,r,i,o,s){A(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?t.hasChild(n)?s.trackChildChange(qa(n,a)):A(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(os(n,r)):s.trackChildChange(Ya(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Fe,(i,o)=>{n.hasChild(i)||r.trackChildChange(qa(i,o))}),n.isLeafNode()||n.forEachChild(Fe,(i,o)=>{if(t.hasChild(i)){const s=t.getImmediateChild(i);s.equals(o)||r.trackChildChange(Ya(i,o,s))}else r.trackChildChange(os(i,o))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?K.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t){this.indexedFilter_=new fg(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Qa.getStartPost_(t),this.endPost_=Qa.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,o,s){return this.matches(new se(n,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,o,s)}updateFullNode(t,n,r){n.isLeafNode()&&(n=K.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const o=this;return n.forEachChild(Fe,(s,a)=>{o.matches(new se(s,a))||(i=i.updateImmediateChild(s,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Qa(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,o,s){return this.rangedFilter_.matches(new se(n,r))||(r=K.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,o,s):this.fullLimitUpdateChild_(t,n,r,o,s)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;o.hasNext()&&s<this.limit_;){const a=o.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),s++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let o;this.reverse_?o=i.getReverseIterator(this.index_):o=i.getIterator(this.index_);let s=0;for(;o.hasNext();){const a=o.getNext();s<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?s++:i=i.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,o){let s;if(this.reverse_){const d=this.index_.getCompare();s=(f,m)=>d(m,f)}else s=this.index_.getCompare();const a=t;A(a.numChildren()===this.limit_,"");const l=new se(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:s(f,l);if(c&&!r.isEmpty()&&m>=0)return o!=null&&o.trackChildChange(Ya(n,r,d)),a.updateImmediateChild(n,r);{o!=null&&o.trackChildChange(qa(n,d));const _=a.updateImmediateChild(n,K.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(o!=null&&o.trackChildChange(os(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?t:c&&s(u,l)>=0?(o!=null&&(o.trackChildChange(qa(u.name,u.node)),o.trackChildChange(os(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,K.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wi}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:lr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const t=new hg;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function e2(e){return e.loadsAllData()?new fg(e.getIndex()):e.hasLimit()?new ZM(e):new Qa(e)}function t2(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function K_(e,t,n){const r=e.copy();return r.startSet_=!0,t===void 0&&(t=null),r.indexStartValue_=t,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function n2(e,t,n){let r;return e.index_===Zn||n?r=K_(e,t,n):r=K_(e,t,lr),r.startAfterSet_=!0,r}function r2(e,t){const n=e.copy();return n.index_=t,n}function q_(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Fe?n="$priority":e.index_===$C?n="$value":e.index_===Zn?n="$key":(A(e.index_ instanceof jC,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=st(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=st(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+st(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=st(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+st(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Y_(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Fe&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends kC{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=yl("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(A(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const o=t._path.toString();this.log_("Listen called for "+o+" "+t._queryIdentifier);const s=cc.getListenId_(t,r),a={};this.listens_[s]=a;const l=q_(t._queryParams);this.restRequest_(o+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(o,d,!1,r),ns(this.listens_,s)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(t,n){const r=cc.getListenId_(t,n);delete this.listens_[r]}get(t){const n=q_(t._queryParams),r=t._path.toString(),i=new Xc;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+ps(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Wa(a.responseText)}catch{$t("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&$t("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){return{value:null,children:new Map}}function zC(e,t,n){if(ae(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=oe(t);e.children.has(r)||e.children.set(r,dc());const i=e.children.get(r);t=Te(t),zC(i,t,n)}}function gp(e,t,n){e.value!==null?n(t,e.value):o2(e,(r,i)=>{const o=new we(t.toString()+"/"+r);gp(i,o,n)})}function o2(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Ut(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=10*1e3,a2=30*1e3,l2=5*60*1e3;class u2{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new s2(t);const r=Q_+(a2-Q_)*Math.random();da(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;Ut(t,(i,o)=>{o>0&&$n(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),da(this.reportStats_.bind(this),Math.floor(Math.random()*2*l2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Sn||(Sn={}));function BC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mg(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=Sn.ACK_USER_WRITE,this.source=BC()}operationForChild(t){if(ae(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(t));return new fc(he(),n,this.revert)}}else return A(oe(this.path)===t,"operationForChild called for unrelated child."),new fc(Te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,n){this.source=t,this.path=n,this.type=Sn.LISTEN_COMPLETE}operationForChild(t){return ae(this.path)?new Ja(this.source,he()):new Ja(this.source,Te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=Sn.OVERWRITE}operationForChild(t){return ae(this.path)?new Vi(this.source,he(),this.snap.getImmediateChild(t)):new Vi(this.source,Te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=Sn.MERGE}operationForChild(t){if(ae(this.path)){const n=this.children.subtree(new we(t));return n.isEmpty()?null:n.value?new Vi(this.source,he(),n.value):new Xa(this.source,he(),n)}else return A(oe(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Xa(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ae(t))return this.isFullyInitialized()&&!this.filtered_;const n=oe(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function d2(e,t,n,r){const i=[],o=[];return t.forEach(s=>{s.type==="child_changed"&&e.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(XM(s.childName,s.snapshotNode))}),zs(e,i,"child_removed",t,r,n),zs(e,i,"child_added",t,r,n),zs(e,i,"child_moved",o,r,n),zs(e,i,"child_changed",t,r,n),zs(e,i,"value",t,r,n),i}function zs(e,t,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>h2(e,a,l)),s.forEach(a=>{const l=f2(e,a,o);i.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function f2(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function h2(e,t,n){if(t.childName==null||n.childName==null)throw hs("Should only compare child_ events.");const r=new se(t.childName,t.snapshotNode),i=new se(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(e,t){return{eventCache:e,serverCache:t}}function fa(e,t,n,r){return sd(new Hi(t,n,r),e.serverCache)}function WC(e,t,n,r){return sd(e.eventCache,new Hi(t,n,r))}function yp(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Gi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Of;const p2=()=>(Of||(Of=new Dt(XL)),Of);class Pe{constructor(t,n=p2()){this.value=t,this.children=n}static fromObject(t){let n=new Pe(null);return Ut(t,(r,i)=>{n=n.set(new we(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(ae(t))return null;{const r=oe(t),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(Te(t),n);return o!=null?{path:Qe(new we(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ae(t))return this;{const n=oe(t),r=this.children.get(n);return r!==null?r.subtree(Te(t)):new Pe(null)}}set(t,n){if(ae(t))return new Pe(n,this.children);{const r=oe(t),o=(this.children.get(r)||new Pe(null)).set(Te(t),n),s=this.children.insert(r,o);return new Pe(this.value,s)}}remove(t){if(ae(t))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=oe(t),r=this.children.get(n);if(r){const i=r.remove(Te(t));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new Pe(null):new Pe(this.value,o)}else return this}}get(t){if(ae(t))return this.value;{const n=oe(t),r=this.children.get(n);return r?r.get(Te(t)):null}}setTree(t,n){if(ae(t))return n;{const r=oe(t),o=(this.children.get(r)||new Pe(null)).setTree(Te(t),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new Pe(this.value,s)}}fold(t){return this.fold_(he(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(Qe(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,he(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ae(t))return null;{const o=oe(t),s=this.children.get(o);return s?s.findOnPath_(Te(t),Qe(n,o),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,he(),n)}foreachOnPath_(t,n,r){if(ae(t))return this;{this.value&&r(n,this.value);const i=oe(t),o=this.children.get(i);return o?o.foreachOnPath_(Te(t),Qe(n,i),r):new Pe(null)}}foreach(t){this.foreach_(he(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Qe(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.writeTree_=t}static empty(){return new xn(new Pe(null))}}function ha(e,t,n){if(ae(t))return new xn(new Pe(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let o=r.value;const s=Ot(i,t);return o=o.updateChild(s,n),new xn(e.writeTree_.set(i,o))}else{const i=new Pe(n),o=e.writeTree_.setTree(t,i);return new xn(o)}}}function J_(e,t,n){let r=e;return Ut(n,(i,o)=>{r=ha(r,Qe(t,i),o)}),r}function X_(e,t){if(ae(t))return xn.empty();{const n=e.writeTree_.setTree(t,new Pe(null));return new xn(n)}}function vp(e,t){return Xi(e,t)!=null}function Xi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Ot(n.path,t)):null}function Z_(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(r,i)=>{t.push(new se(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new se(r,i.value))}),t}function Hr(e,t){if(ae(t))return e;{const n=Xi(e,t);return n!=null?new xn(new Pe(n)):new xn(e.writeTree_.subtree(t))}}function _p(e){return e.writeTree_.isEmpty()}function ss(e,t){return VC(he(),e.writeTree_,t)}function VC(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,o)=>{i===".priority"?(A(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=VC(Qe(e,i),o,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(Qe(e,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(e,t){return qC(t,e)}function m2(e,t,n,r,i){A(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=ha(e.visibleWrites,t,n)),e.lastWriteId=r}function g2(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function y2(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);A(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,s=e.allWrites.length-1;for(;i&&s>=0;){const a=e.allWrites[s];a.visible&&(s>=n&&v2(a,r.path)?i=!1:En(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return _2(e),!0;if(r.snap)e.visibleWrites=X_(e.visibleWrites,r.path);else{const a=r.children;Ut(a,l=>{e.visibleWrites=X_(e.visibleWrites,Qe(r.path,l))})}return!0}else return!1}function v2(e,t){if(e.snap)return En(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&En(Qe(e.path,n),t))return!0;return!1}function _2(e){e.visibleWrites=HC(e.allWrites,w2,he()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function w2(e){return e.visible}function HC(e,t,n){let r=xn.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const s=o.path;let a;if(o.snap)En(n,s)?(a=Ot(n,s),r=ha(r,a,o.snap)):En(s,n)&&(a=Ot(s,n),r=ha(r,he(),o.snap.getChild(a)));else if(o.children){if(En(n,s))a=Ot(n,s),r=J_(r,a,o.children);else if(En(s,n))if(a=Ot(s,n),ae(a))r=J_(r,he(),o.children);else{const l=ns(o.children,oe(a));if(l){const u=l.getChild(Te(a));r=ha(r,he(),u)}}}else throw hs("WriteRecord should have .snap or .children")}}return r}function GC(e,t,n,r,i){if(!r&&!i){const o=Xi(e.visibleWrites,t);if(o!=null)return o;{const s=Hr(e.visibleWrites,t);if(_p(s))return n;if(n==null&&!vp(s,he()))return null;{const a=n||K.EMPTY_NODE;return ss(s,a)}}}else{const o=Hr(e.visibleWrites,t);if(!i&&_p(o))return n;if(!i&&n==null&&!vp(o,he()))return null;{const s=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(En(u.path,t)||En(t,u.path))},a=HC(e.allWrites,s,t),l=n||K.EMPTY_NODE;return ss(a,l)}}}function E2(e,t,n){let r=K.EMPTY_NODE;const i=Xi(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Fe,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=Hr(e.visibleWrites,t);return n.forEachChild(Fe,(s,a)=>{const l=ss(Hr(o,new we(s)),a);r=r.updateImmediateChild(s,l)}),Z_(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=Hr(e.visibleWrites,t);return Z_(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function S2(e,t,n,r,i){A(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=Qe(t,n);if(vp(e.visibleWrites,o))return null;{const s=Hr(e.visibleWrites,o);return _p(s)?i.getChild(n):ss(s,i.getChild(n))}}function C2(e,t,n,r){const i=Qe(t,n),o=Xi(e.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=Hr(e.visibleWrites,i);return ss(s,r.getNode().getImmediateChild(n))}else return null}function T2(e,t){return Xi(e.visibleWrites,t)}function I2(e,t,n,r,i,o,s){let a;const l=Hr(e.visibleWrites,t),u=Xi(l,he());if(u!=null)a=u;else if(n!=null)a=ss(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=s.getCompare(),f=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function x2(){return{visibleWrites:xn.empty(),allWrites:[],lastWriteId:-1}}function hc(e,t,n,r){return GC(e.writeTree,e.treePath,t,n,r)}function yg(e,t){return E2(e.writeTree,e.treePath,t)}function e0(e,t,n,r){return S2(e.writeTree,e.treePath,t,n,r)}function pc(e,t){return T2(e.writeTree,Qe(e.treePath,t))}function k2(e,t,n,r,i,o){return I2(e.writeTree,e.treePath,t,n,r,i,o)}function vg(e,t,n){return C2(e.writeTree,e.treePath,t,n)}function KC(e,t){return qC(Qe(e.treePath,t),e.writeTree)}function qC(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,Ya(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,qa(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,os(r,t.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,Ya(r,t.snapshotNode,i.oldSnap));else throw hs("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const YC=new R2;class _g{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new Hi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vg(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gi(this.viewCache_),o=k2(this.writes_,i,n,1,r,t);return o.length===0?null:o[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(e){return{filter:e}}function N2(e,t){A(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),A(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function A2(e,t,n,r,i){const o=new b2;let s,a;if(n.type===Sn.OVERWRITE){const u=n;u.source.fromUser?s=wp(e,t,u.path,u.snap,r,i,o):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!ae(u.path),s=mc(e,t,u.path,u.snap,r,i,a,o))}else if(n.type===Sn.MERGE){const u=n;u.source.fromUser?s=D2(e,t,u.path,u.children,r,i,o):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),s=Ep(e,t,u.path,u.children,r,i,a,o))}else if(n.type===Sn.ACK_USER_WRITE){const u=n;u.revert?s=F2(e,t,u.path,r,i,o):s=L2(e,t,u.path,u.affectedTree,r,i,o)}else if(n.type===Sn.LISTEN_COMPLETE)s=M2(e,t,n.path,r,o);else throw hs("Unknown operation type: "+n.type);const l=o.getChanges();return O2(t,s,l),{viewCache:s,changes:l}}function O2(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=yp(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(UC(yp(t)))}}function QC(e,t,n,r,i,o){const s=t.eventCache;if(pc(r,n)!=null)return t;{let a,l;if(ae(n))if(A(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=Gi(t),c=u instanceof K?u:K.EMPTY_NODE,d=yg(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),d,o)}else{const u=hc(r,Gi(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,o)}else{const u=oe(n);if(u===".priority"){A(Qr(n)===1,"Can't have a priority with additional path components");const c=s.getNode();l=t.serverCache.getNode();const d=e0(r,n,c,l);d!=null?a=e.filter.updatePriority(c,d):a=s.getNode()}else{const c=Te(n);let d;if(s.isCompleteForChild(u)){l=t.serverCache.getNode();const f=e0(r,n,s.getNode(),l);f!=null?d=s.getNode().getImmediateChild(u).updateChild(c,f):d=s.getNode().getImmediateChild(u)}else d=vg(r,u,t.serverCache);d!=null?a=e.filter.updateChild(s.getNode(),u,d,c,i,o):a=s.getNode()}}return fa(t,a,s.isFullyInitialized()||ae(n),e.filter.filtersNodes())}}function mc(e,t,n,r,i,o,s,a){const l=t.serverCache;let u;const c=s?e.filter:e.filter.getIndexedFilter();if(ae(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=oe(n);if(!l.isCompleteForPath(n)&&Qr(n)>1)return t;const y=Te(n),w=l.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),m,w,y,YC,null)}const d=WC(t,u,l.isFullyInitialized()||ae(n),c.filtersNodes()),f=new _g(i,d,o);return QC(e,d,n,i,f,a)}function wp(e,t,n,r,i,o,s){const a=t.eventCache;let l,u;const c=new _g(i,t,o);if(ae(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=fa(t,u,!0,e.filter.filtersNodes());else{const d=oe(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=fa(t,u,a.isFullyInitialized(),a.isFiltered());else{const f=Te(n),m=a.getNode().getImmediateChild(d);let y;if(ae(f))y=r;else{const _=c.getCompleteChild(d);_!=null?RC(f)===".priority"&&_.getChild(NC(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=K.EMPTY_NODE}if(m.equals(y))l=t;else{const _=e.filter.updateChild(a.getNode(),d,y,f,c,s);l=fa(t,_,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function t0(e,t){return e.eventCache.isCompleteForChild(t)}function D2(e,t,n,r,i,o,s){let a=t;return r.foreach((l,u)=>{const c=Qe(n,l);t0(t,oe(c))&&(a=wp(e,a,c,u,i,o,s))}),r.foreach((l,u)=>{const c=Qe(n,l);t0(t,oe(c))||(a=wp(e,a,c,u,i,o,s))}),a}function n0(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function Ep(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;ae(n)?u=r:u=new Pe(null).setTree(n,r);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=t.serverCache.getNode().getImmediateChild(d),y=n0(e,m,f);l=mc(e,l,new we(d),y,i,o,s,a)}}),u.children.inorderTraversal((d,f)=>{const m=!t.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const y=t.serverCache.getNode().getImmediateChild(d),_=n0(e,y,f);l=mc(e,l,new we(d),_,i,o,s,a)}}),l}function L2(e,t,n,r,i,o,s){if(pc(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return mc(e,t,n,l.getNode().getChild(n),i,o,a,s);if(ae(n)){let u=new Pe(null);return l.getNode().forEachChild(Zn,(c,d)=>{u=u.set(new we(c),d)}),Ep(e,t,n,u,i,o,a,s)}else return t}else{let u=new Pe(null);return r.foreach((c,d)=>{const f=Qe(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Ep(e,t,n,u,i,o,a,s)}}function M2(e,t,n,r,i){const o=t.serverCache,s=WC(t,o.getNode(),o.isFullyInitialized()||ae(n),o.isFiltered());return QC(e,s,n,r,YC,i)}function F2(e,t,n,r,i,o){let s;if(pc(r,n)!=null)return t;{const a=new _g(r,t,i),l=t.eventCache.getNode();let u;if(ae(n)||oe(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=hc(r,Gi(t));else{const d=t.serverCache.getNode();A(d instanceof K,"serverChildren would be complete if leaf node"),c=yg(r,d)}c=c,u=e.filter.updateFullNode(l,c,o)}else{const c=oe(n);let d=vg(r,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,Te(n),a,o):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,K.EMPTY_NODE,Te(n),a,o):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=hc(r,Gi(t)),s.isLeafNode()&&(u=e.filter.updateFullNode(u,s,o)))}return s=t.serverCache.isFullyInitialized()||pc(r,he())!=null,fa(t,u,s,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new fg(r.getIndex()),o=e2(r);this.processor_=P2(o);const s=n.serverCache,a=n.eventCache,l=i.updateFullNode(K.EMPTY_NODE,s.getNode(),null),u=o.updateFullNode(K.EMPTY_NODE,a.getNode(),null),c=new Hi(l,s.isFullyInitialized(),i.filtersNodes()),d=new Hi(u,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=sd(d,c),this.eventGenerator_=new c2(this.query_)}get query(){return this.query_}}function $2(e){return e.viewCache_.serverCache.getNode()}function U2(e,t){const n=Gi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ae(t)&&!n.getImmediateChild(oe(t)).isEmpty())?n.getChild(t):null}function r0(e){return e.eventRegistrations_.length===0}function z2(e,t){e.eventRegistrations_.push(t)}function i0(e,t,n){const r=[];if(n){A(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(o=>{const s=o.createCancelEvent(n,i);s&&r.push(s)})}if(t){let i=[];for(let o=0;o<e.eventRegistrations_.length;++o){const s=e.eventRegistrations_[o];if(!s.matches(t))i.push(s);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(o+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function o0(e,t,n,r){t.type===Sn.MERGE&&t.source.queryId!==null&&(A(Gi(e.viewCache_),"We should always have a full cache before handling merges"),A(yp(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=A2(e.processor_,i,t,n,r);return N2(e.processor_,o.viewCache),A(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,JC(e,o.changes,o.viewCache.eventCache.getNode(),null)}function B2(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(o,s)=>{r.push(os(o,s))}),n.isFullyInitialized()&&r.push(UC(n.getNode())),JC(e,r,n.getNode(),t)}function JC(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return d2(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;class W2{constructor(){this.views=new Map}}function V2(e){A(!gc,"__referenceConstructor has already been defined"),gc=e}function H2(){return A(gc,"Reference.ts has not been loaded"),gc}function G2(e){return e.views.size===0}function wg(e,t,n,r){const i=t.source.queryId;if(i!==null){const o=e.views.get(i);return A(o!=null,"SyncTree gave us an op for an invalid query."),o0(o,t,n,r)}else{let o=[];for(const s of e.views.values())o=o.concat(o0(s,t,n,r));return o}}function K2(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let a=hc(n,i?r:null),l=!1;a?l=!0:r instanceof K?(a=yg(n,r),l=!1):(a=K.EMPTY_NODE,l=!1);const u=sd(new Hi(a,l,!1),new Hi(r,i,!1));return new j2(t,u)}return s}function q2(e,t,n,r,i,o){const s=K2(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),z2(s,n),B2(s,n)}function Y2(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Jr(e);if(i==="default")for(const[l,u]of e.views.entries())s=s.concat(i0(u,n,r)),r0(u)&&(e.views.delete(l),u.query._queryParams.loadsAllData()||o.push(u.query));else{const l=e.views.get(i);l&&(s=s.concat(i0(l,n,r)),r0(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||o.push(l.query)))}return a&&!Jr(e)&&o.push(new(H2())(t._repo,t._path)),{removed:o,events:s}}function XC(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function zo(e,t){let n=null;for(const r of e.views.values())n=n||U2(r,t);return n}function ZC(e,t){if(t._queryParams.loadsAllData())return ad(e);{const r=t._queryIdentifier;return e.views.get(r)}}function eT(e,t){return ZC(e,t)!=null}function Jr(e){return ad(e)!=null}function ad(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc;function Q2(e){A(!yc,"__referenceConstructor has already been defined"),yc=e}function J2(){return A(yc,"Reference.ts has not been loaded"),yc}let X2=1;class s0{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=x2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tT(e,t,n,r,i){return m2(e.pendingWriteTree_,t,n,r,i),i?_l(e,new Vi(BC(),t,n)):[]}function Si(e,t,n=!1){const r=g2(e.pendingWriteTree_,t);if(y2(e.pendingWriteTree_,t)){let o=new Pe(null);return r.snap!=null?o=o.set(he(),!0):Ut(r.children,s=>{o=o.set(new we(s),!0)}),_l(e,new fc(r.path,o,n))}else return[]}function ld(e,t,n){return _l(e,new Vi(pg(),t,n))}function Z2(e,t,n){const r=Pe.fromObject(n);return _l(e,new Xa(pg(),t,r))}function e3(e,t){return _l(e,new Ja(pg(),t))}function t3(e,t,n){const r=Sg(e,n);if(r){const i=Cg(r),o=i.path,s=i.queryId,a=Ot(o,t),l=new Ja(mg(s),a);return Tg(e,o,l)}else return[]}function Sp(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&(t._queryIdentifier==="default"||eT(s,t))){const l=Y2(s,t,n,r);G2(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(o,(f,m)=>Jr(m));if(c&&!d){const f=e.syncPointTree_.subtree(o);if(!f.isEmpty()){const m=i3(f);for(let y=0;y<m.length;++y){const _=m[y],w=_.query,p=iT(e,_);e.listenProvider_.startListening(pa(w),vc(e,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?e.listenProvider_.stopListening(pa(t),null):u.forEach(f=>{const m=e.queryToTagMap.get(ud(f));e.listenProvider_.stopListening(pa(f),m)}))}o3(e,u)}return a}function n3(e,t,n,r){const i=Sg(e,r);if(i!=null){const o=Cg(i),s=o.path,a=o.queryId,l=Ot(s,t),u=new Vi(mg(a),l,n);return Tg(e,s,u)}else return[]}function r3(e,t,n,r){const i=Sg(e,r);if(i){const o=Cg(i),s=o.path,a=o.queryId,l=Ot(s,t),u=Pe.fromObject(n),c=new Xa(mg(a),l,u);return Tg(e,s,c)}else return[]}function a0(e,t,n,r=!1){const i=t._path;let o=null,s=!1;e.syncPointTree_.foreachOnPath(i,(f,m)=>{const y=Ot(f,i);o=o||zo(m,y),s=s||Jr(m)});let a=e.syncPointTree_.get(i);a?(s=s||Jr(a),o=o||zo(a,he())):(a=new W2,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;o!=null?l=!0:(l=!1,o=K.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((m,y)=>{const _=zo(y,he());_&&(o=o.updateImmediateChild(m,_))}));const u=eT(a,t);if(!u&&!t._queryParams.loadsAllData()){const f=ud(t);A(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=s3();e.queryToTagMap.set(f,m),e.tagToQueryMap.set(m,f)}const c=gg(e.pendingWriteTree_,i);let d=q2(a,t,n,c,o,l);if(!u&&!s&&!r){const f=ZC(a,t);d=d.concat(a3(e,t,f))}return d}function Eg(e,t,n){const i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(s,a)=>{const l=Ot(s,t),u=zo(a,l);if(u)return u});return GC(i,t,o,n,!0)}function _l(e,t){return nT(t,e.syncPointTree_,null,gg(e.pendingWriteTree_,he()))}function nT(e,t,n,r){if(ae(e.path))return rT(e,t,n,r);{const i=t.get(he());n==null&&i!=null&&(n=zo(i,he()));let o=[];const s=oe(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const u=n?n.getImmediateChild(s):null,c=KC(r,s);o=o.concat(nT(a,l,u,c))}return i&&(o=o.concat(wg(i,e,r,n))),o}}function rT(e,t,n,r){const i=t.get(he());n==null&&i!=null&&(n=zo(i,he()));let o=[];return t.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,u=KC(r,s),c=e.operationForChild(s);c&&(o=o.concat(rT(c,a,l,u)))}),i&&(o=o.concat(wg(i,e,r,n))),o}function iT(e,t){const n=t.query,r=vc(e,n);return{hashFn:()=>($2(t)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?t3(e,n._path,r):e3(e,n._path);{const o=tM(i,n);return Sp(e,n,null,o)}}}}function vc(e,t){const n=ud(t);return e.queryToTagMap.get(n)}function ud(e){return e._path.toString()+"$"+e._queryIdentifier}function Sg(e,t){return e.tagToQueryMap.get(t)}function Cg(e){const t=e.indexOf("$");return A(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new we(e.substr(0,t))}}function Tg(e,t,n){const r=e.syncPointTree_.get(t);A(r,"Missing sync point for query tag that we're tracking");const i=gg(e.pendingWriteTree_,t);return wg(r,n,i,null)}function i3(e){return e.fold((t,n,r)=>{if(n&&Jr(n))return[ad(n)];{let i=[];return n&&(i=XC(n)),Ut(r,(o,s)=>{i=i.concat(s)}),i}})}function pa(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(J2())(e._repo,e._path):e}function o3(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=ud(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}function s3(){return X2++}function a3(e,t,n){const r=t._path,i=vc(e,t),o=iT(e,n),s=e.listenProvider_.startListening(pa(t),i,o.hashFn,o.onComplete),a=e.syncPointTree_.subtree(r);if(i)A(!Jr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ae(u)&&c&&Jr(c))return[ad(c).query];{let f=[];return c&&(f=f.concat(XC(c).map(m=>m.query))),Ut(d,(m,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const c=l[u];e.listenProvider_.stopListening(pa(c),vc(e,c))}}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Ig(n)}node(){return this.node_}}class xg{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Qe(this.path_,t);return new xg(this.syncTree_,n)}node(){return Eg(this.syncTree_,this.path_)}}const l3=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},l0=function(e,t,n){if(!e||typeof e!="object")return e;if(A(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return u3(e[".sv"],t,n);if(typeof e[".sv"]=="object")return c3(e[".sv"],t);A(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},u3=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+e)}},c3=function(e,t,n){e.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&A(!1,"Unexpected increment value: "+r);const i=t.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},d3=function(e,t,n,r){return kg(t,new xg(n,e),r)},oT=function(e,t,n){return kg(e,new Ig(t),n)};function kg(e,t,n){const r=e.getPriority().val(),i=l0(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const s=e,a=l0(s.getValue(),t,n);return a!==s.getValue()||i!==s.getPriority().val()?new nt(a,pt(i)):e}else{const s=e;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new nt(i))),s.forEachChild(Fe,(a,l)=>{const u=kg(l,t.getImmediateChild(a),n);u!==l&&(o=o.updateImmediateChild(a,u))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function Rg(e,t){let n=t instanceof we?t:new we(t),r=e,i=oe(n);for(;i!==null;){const o=ns(r.node.children,i)||{children:{},childCount:0};r=new bg(i,r,o),n=Te(n),i=oe(n)}return r}function _s(e){return e.node.value}function sT(e,t){e.node.value=t,Cp(e)}function aT(e){return e.node.childCount>0}function f3(e){return _s(e)===void 0&&!aT(e)}function cd(e,t){Ut(e.node.children,(n,r)=>{t(new bg(n,e,r))})}function lT(e,t,n,r){n&&!r&&t(e),cd(e,i=>{lT(i,t,!0,r)}),n&&r&&t(e)}function h3(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function wl(e){return new we(e.parent===null?e.name:wl(e.parent)+"/"+e.name)}function Cp(e){e.parent!==null&&p3(e.parent,e.name,e)}function p3(e,t,n){const r=f3(n),i=$n(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Cp(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Cp(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m3=/[\[\].#$\/\u0000-\u001F\u007F]/,g3=/[\[\].#$\u0000-\u001F\u007F]/,Df=10*1024*1024,Pg=function(e){return typeof e=="string"&&e.length!==0&&!m3.test(e)},uT=function(e){return typeof e=="string"&&e.length!==0&&!g3.test(e)},y3=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),uT(e)},u0=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!ig(e)||e&&typeof e=="object"&&$n(e,".sv")},cT=function(e,t,n,r){r&&t===void 0||Ng(Zc(e,"value"),t,n)},Ng=function(e,t,n){const r=n instanceof we?new DM(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+fi(r));if(typeof t=="function")throw new Error(e+"contains a function "+fi(r)+" with contents = "+t.toString());if(ig(t))throw new Error(e+"contains "+t.toString()+" "+fi(r));if(typeof t=="string"&&t.length>Df/3&&ed(t)>Df)throw new Error(e+"contains a string greater than "+Df+" utf8 bytes "+fi(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,o=!1;if(Ut(t,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!Pg(s)))throw new Error(e+" contains an invalid key ("+s+") "+fi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LM(r,s),Ng(e,a,r),MM(r)}),i&&o)throw new Error(e+' contains ".value" child '+fi(r)+" in addition to actual children.")}},v3=function(e,t,n,r){if(!(r&&n===void 0)&&!Pg(n))throw new Error(Zc(e,t)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},dT=function(e,t,n,r){if(!(r&&n===void 0)&&!uT(n))throw new Error(Zc(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_3=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dT(e,t,n,r)},w3=function(e,t){if(oe(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},E3=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Pg(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!y3(n))throw new Error(Zc(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ag(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();n!==null&&!ug(o,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function fT(e,t,n){Ag(e,n),hT(e,r=>ug(r,t))}function ur(e,t,n){Ag(e,n),hT(e,r=>En(r,t)||En(t,r))}function hT(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(C3(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function C3(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();ki&&St("event: "+n.toString()),vs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3="repo_interrupt",I3=25;class x3{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new S3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dc(),this.transactionQueueTree_=new bg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function k3(e,t,n){if(e.stats_=ag(e.repoInfo_),e.forceRestClient_||oM())e.server_=new cc(e.repoInfo_,(r,i,o,s)=>{c0(e,r,i,o,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>d0(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{st(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Xn(e.repoInfo_,t,(r,i,o,s)=>{c0(e,r,i,o,s)},r=>{d0(e,r)},r=>{R3(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=cM(e.repoInfo_,()=>new u2(e.stats_,e.server_)),e.infoData_=new i2,e.infoSyncTree_=new s0({startListening:(r,i,o,s)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=ld(e.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),Dg(e,"connected",!1),e.serverSyncTree_=new s0({startListening:(r,i,o,s)=>(e.server_.listen(r,o,i,(a,l)=>{const u=s(a,l);ur(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function b3(e){const n=e.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Og(e){return l3({timestamp:b3(e)})}function c0(e,t,n,r,i){e.dataUpdateCount++;const o=new we(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(i)if(r){const l=Zu(n,u=>pt(u));s=r3(e.serverSyncTree_,o,l,i)}else{const l=pt(n);s=n3(e.serverSyncTree_,o,l,i)}else if(r){const l=Zu(n,u=>pt(u));s=Z2(e.serverSyncTree_,o,l)}else{const l=pt(n);s=ld(e.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=dd(e,o)),ur(e.eventQueue_,a,s)}function d0(e,t){Dg(e,"connected",t),t===!1&&N3(e)}function R3(e,t){Ut(t,(n,r)=>{Dg(e,n,r)})}function Dg(e,t,n){const r=new we("/.info/"+t),i=pt(n);e.infoData_.updateSnapshot(r,i);const o=ld(e.infoSyncTree_,r,i);ur(e.eventQueue_,r,o)}function pT(e){return e.nextWriteId_++}function P3(e,t,n,r,i){Lg(e,"set",{path:t.toString(),value:n,priority:r});const o=Og(e),s=pt(n,r),a=Eg(e.serverSyncTree_,t),l=oT(s,a,o),u=pT(e),c=tT(e.serverSyncTree_,t,l,u,!0);Ag(e.eventQueue_,c),e.server_.put(t.toString(),s.val(!0),(f,m)=>{const y=f==="ok";y||$t("set at "+t+" failed: "+f);const _=Si(e.serverSyncTree_,u,!y);ur(e.eventQueue_,t,_),D3(e,i,f,m)});const d=_T(e,t);dd(e,d),ur(e.eventQueue_,d,[])}function N3(e){Lg(e,"onDisconnectEvents");const t=Og(e),n=dc();gp(e.onDisconnect_,he(),(i,o)=>{const s=d3(i,o,e.serverSyncTree_,t);zC(n,i,s)});let r=[];gp(n,he(),(i,o)=>{r=r.concat(ld(e.serverSyncTree_,i,o));const s=_T(e,i);dd(e,s)}),e.onDisconnect_=dc(),ur(e.eventQueue_,he(),r)}function A3(e,t,n){let r;oe(t._path)===".info"?r=a0(e.infoSyncTree_,t,n):r=a0(e.serverSyncTree_,t,n),fT(e.eventQueue_,t._path,r)}function f0(e,t,n){let r;oe(t._path)===".info"?r=Sp(e.infoSyncTree_,t,n):r=Sp(e.serverSyncTree_,t,n),fT(e.eventQueue_,t._path,r)}function O3(e){e.persistentConnection_&&e.persistentConnection_.interrupt(T3)}function Lg(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),St(n,...t)}function D3(e,t,n,r){t&&vs(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let o=i;r&&(o+=": "+r);const s=new Error(o);s.code=i,t(s)}})}function mT(e,t,n){return Eg(e.serverSyncTree_,t,n)||K.EMPTY_NODE}function Mg(e,t=e.transactionQueueTree_){if(t||fd(e,t),_s(t)){const n=yT(e,t);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&L3(e,wl(t),n)}else aT(t)&&cd(t,n=>{Mg(e,n)})}function L3(e,t,n){const r=n.map(u=>u.currentWriteId),i=mT(e,t,r);let o=i;const s=i.hash();for(let u=0;u<n.length;u++){const c=n[u];A(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ot(t,c.path);o=o.updateChild(d,c.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,u=>{Lg(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Si(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();fd(e,Rg(e.transactionQueueTree_,t)),Mg(e,e.transactionQueueTree_),ur(e.eventQueue_,t,c);for(let f=0;f<d.length;f++)vs(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{$t("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}dd(e,t)}},s)}function dd(e,t){const n=gT(e,t),r=wl(n),i=yT(e,n);return M3(e,i,r),r}function M3(e,t,n){if(t.length===0)return;const r=[];let i=[];const s=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=Ot(n,l.path);let c=!1,d;if(A(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Si(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=I3)c=!0,d="maxretry",i=i.concat(Si(e.serverSyncTree_,l.currentWriteId,!0));else{const f=mT(e,l.path,s);l.currentInputSnapshot=f;const m=t[a].update(f.val());if(m!==void 0){Ng("transaction failed: Data returned ",m,l.path);let y=pt(m);typeof m=="object"&&m!=null&&$n(m,".priority")||(y=y.updatePriority(f.getPriority()));const w=l.currentWriteId,p=Og(e),h=oT(y,f,p);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=pT(e),s.splice(s.indexOf(w),1),i=i.concat(tT(e.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Si(e.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(Si(e.serverSyncTree_,l.currentWriteId,!0))}ur(e.eventQueue_,n,i),i=[],c&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(d),!1,null))))}fd(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)vs(r[a]);Mg(e,e.transactionQueueTree_)}function gT(e,t){let n,r=e.transactionQueueTree_;for(n=oe(t);n!==null&&_s(r)===void 0;)r=Rg(r,n),t=Te(t),n=oe(t);return r}function yT(e,t){const n=[];return vT(e,t,n),n.sort((r,i)=>r.order-i.order),n}function vT(e,t,n){const r=_s(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);cd(t,i=>{vT(e,i,n)})}function fd(e,t){const n=_s(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,sT(t,n.length>0?n:void 0)}cd(t,r=>{fd(e,r)})}function _T(e,t){const n=wl(gT(e,t)),r=Rg(e.transactionQueueTree_,t);return h3(r,i=>{Lf(e,i)}),Lf(e,r),lT(r,i=>{Lf(e,i)}),n}function Lf(e,t){const n=_s(t);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(A(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(A(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(Si(e.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?sT(t,void 0):n.length=o+1,ur(e.eventQueue_,wl(t),i);for(let s=0;s<r.length;s++)vs(r[s])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F3(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function j3(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):$t(`Invalid query segment '${n}' in query '${e}'`)}return t}const h0=function(e,t){const n=$3(e),r=n.namespace;n.domain==="firebase.com"&&ar(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||QL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new wC(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new we(n.pathString)}},$3=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(i=F3(e.substring(c,d)));const f=j3(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(s=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const m=t.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=t.indexOf(".");r=t.substring(0,y).toLowerCase(),n=t.substring(y+1),o=r}"ns"in f&&(o=f.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+st(this.snapshot.exportVal())}}class ET{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ae(this._path)?null:RC(this._path)}get ref(){return new mr(this._repo,this._path)}get _queryIdentifier(){const t=Y_(this._queryParams),n=og(t);return n==="{}"?"default":n}get _queryObject(){return Y_(this._queryParams)}isEqual(t){if(t=It(t),!(t instanceof ws))return!1;const n=this._repo===t._repo,r=ug(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+OM(this._path)}}function z3(e,t){if(e._orderByCalled===!0)throw new Error(t+": You can't combine multiple orderBy calls.")}function ST(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Zn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==Wi)throw new Error(r);if(typeof t!="string")throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==lr)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(e.getIndex()===Fe){if(t!=null&&!u0(t)||n!=null&&!u0(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(A(e.getIndex()instanceof jC||e.getIndex()===$C,"unknown index type."),t!=null&&typeof t=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function B3(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class mr extends ws{constructor(t,n){super(t,n,new hg,!1)}get parent(){const t=NC(this._path);return t===null?null:new mr(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Za{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new we(t),r=_c(this.ref,t);return new Za(this._node.getChild(n),r,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new Za(i,_c(this.ref,r),Fe)))}hasChild(t){const n=new we(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function W3(e,t){return e=It(e),e._checkNotDeleted("ref"),t!==void 0?_c(e._root,t):e._root}function _c(e,t){return e=It(e),oe(e._path)===null?_3("child","path",t,!1):dT("child","path",t,!1),new mr(e._repo,Qe(e._path,t))}function V3(e,t){e=It(e),w3("set",e._path),cT("set",t,e._path,!1);const n=new Xc;return P3(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}class Fg{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new wT("value",this,new Za(t.snapshotNode,new mr(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new ET(this,t,n):null}matches(t){return t instanceof Fg?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class jg{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new ET(this,t,n):null}createEvent(t,n){A(t.childName!=null,"Child events should have a childName.");const r=_c(new mr(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new wT(t.type,this,new Za(t.snapshotNode,r,i),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof jg?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function H3(e,t,n,r,i){let o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{f0(e._repo,e,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const s=new U3(n,o||void 0),a=t==="value"?new Fg(s):new jg(t,s);return A3(e._repo,e,a),()=>f0(e._repo,e,a)}function d5(e,t,n,r){return H3(e,"value",t,n,r)}class $g{}class G3 extends $g{constructor(t,n){super(),this._value=t,this._key=n,this.type="startAfter"}_apply(t){cT("startAfter",this._value,t._path,!1);const n=n2(t._queryParams,this._value,this._key);if(B3(n),ST(n),t._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ws(t._repo,t._path,n,t._orderByCalled)}}function f5(e,t){return v3("startAfter","key",t,!0),new G3(e,t)}class K3 extends $g{constructor(t){super(),this._limit=t,this.type="limitToFirst"}_apply(t){if(t._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ws(t._repo,t._path,t2(t._queryParams,this._limit),t._orderByCalled)}}function h5(e){if(typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new K3(e)}class q3 extends $g{constructor(){super(...arguments),this.type="orderByKey"}_apply(t){z3(t,"orderByKey");const n=r2(t._queryParams,Zn);return ST(n),new ws(t._repo,t._path,n,!0)}}function p5(){return new q3}function m5(e,...t){let n=It(e);for(const r of t)n=r._apply(n);return n}V2(mr);Q2(mr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y3="FIREBASE_DATABASE_EMULATOR_HOST",Tp={};let Q3=!1;function J3(e,t,n,r){e.repoInfo_=new wC(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function X3(e,t,n,r,i){let o=r||e.options.databaseURL;o===void 0&&(e.options.projectId||ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),St("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s=h0(o,i),a=s.repoInfo,l,u;typeof process<"u"&&P_&&(u=P_[Y3]),u?(l=!0,o=`http://${u}?ns=${a.namespace}`,s=h0(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const c=i&&l?new Uo(Uo.OWNER):new aM(e.name,e.options,t);E3("Invalid Firebase Database URL",s),ae(s.path)||ar("Database URL must point to the root of a Firebase Database (not including a child path).");const d=eF(a,e,c,new sM(e.name,n));return new tF(d,e)}function Z3(e,t){const n=Tp[t];(!n||n[e.key]!==e)&&ar(`Database ${t}(${e.repoInfo_}) has already been deleted.`),O3(e),delete n[e.key]}function eF(e,t,n,r){let i=Tp[t.name];i||(i={},Tp[t.name]=i);let o=i[e.toURLString()];return o&&ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new x3(e,Q3,n,r),i[e.toURLString()]=o,o}class tF{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(k3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new mr(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Z3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&ar("Cannot call "+t+" on a deleted database.")}}function nF(e=xS(),t){const n=qm(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=tA("database");r&&rF(n,...r)}return n}function rF(e,t,n,r={}){e=It(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&ar("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ar('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Uo(Uo.OWNER);else if(r.mockUserToken){const s=typeof r.mockUserToken=="string"?r.mockUserToken:nA(r.mockUserToken,e.app.options.projectId);o=new Uo(s)}J3(i,t,n,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iF(e){HL(ms),rs(new $i("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return X3(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),Vr(N_,A_,e),Vr(N_,A_,"esm2017")}Xn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};Xn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};iF();const oF={apiKey:"AIzaSyCWYjmkk34JmxhoKR59l_T-aK5C44aY72I",authDomain:"babysitters-57e3c.firebaseapp.com",databaseURL:"https://babysitters-57e3c-default-rtdb.firebaseio.com",projectId:"babysitters-57e3c",storageBucket:"babysitters-57e3c.appspot.com",messagingSenderId:"107090147671",appId:"1:107090147671:web:d1ad6872e16611aa746612"},sF=IS(oF),aF=nF(sF),el=WL(),lF=(e,t)=>{V3(W3(aF,"users/"+e),{favorites:t})},uF=zP`
body {
    background-color:  ${e=>e.theme.colors.mainBackground};
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
};

img {
    display: block;
    max-width: 100%;
    height: auto;
}

h1, h2, h3, h4, h5, h5, p {
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
    cursor: pointer;
}

button {
    cursor: pointer;
    outline: none;
     padding: 0;
    margin: 0;
}


.Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(5, 5, 5, 0.8);
    z-index: 1200;
    }

.container {
    width: 320px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 834px) {
        width: 834px;
        padding-left: 27px;
        padding-right: 27px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 1440px) {
        width: 1440px;
        padding-left: 34px;
        padding-right: 34px;
        margin-left: auto;
        margin-right: auto;
    }
}

.modal-open {
  overflow: hidden !important;
}

    
`,Bs=["320","833","834","1439","1440"],cF=Object.freeze({colors:{mainBackground:"#F3F3F3",primaryGreenColor:"#103931",secondaryGreenColor:"#38cd3e",headerText:"#fbfbfb",titleText:"#8a8a89",primaryBodyText:"#11101c",secondaryBodyText:"rgba(17, 16, 28, 0.5)",buttonBorder:"rgba(251, 251, 251, 0.4)",photoBorder:"rgba(240, 63, 59, 0.2)",primaryWhite:"#FFFFFF",error:"#E74A3B",additionalGreenColor:"rgba(16, 57, 49, 0.2)"},fontWeights:{medium:500,bold:700},fontSizes:{xs:"14px",s:"16px",m:"18px",l:"22px",l2:"24px",xl:"30px",xxl:"32px"},transition:{customTrans:"250ms cubic-bezier(0.4, 0, 0.2, 1)"},mq:{mobMin:`min-width: ${Bs[0]}px`,mobMax:`max-width: ${Bs[1]}px`,tabMin:`min-width: ${Bs[2]}px`,tabMax:`max-width: ${Bs[3]}px`,deskMin:`min-width: ${Bs[4]}px`}}),dF=()=>(yE(),I.jsx("div",{children:"ErrorPage"})),CT=E.createContext(),TT=()=>E.useContext(CT),fF=({children:e})=>{const[t,n]=E.useState({isOpen:!1,formType:null,selectedNanny:null}),r=(o,s)=>{n({isOpen:!0,formType:o,selectedNanny:s})},i=()=>{n({isOpen:!1,formType:null,selectedNanny:null})};return I.jsx(CT.Provider,{value:{modalConfig:t,openModal:r,closeModal:i},children:e})};function hd(){const{currentUser:e}=PR(VN);return{currentUser:e,name:e==null?void 0:e.name,isAuth:!!(e!=null&&e.email)}}const hF=U.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,pF=U.div`
  background-color: #fff;
  border-radius: 10px;
`,Ug=({onClose:e,children:t})=>(E.useEffect(()=>{const n=r=>{r.key==="Escape"&&e()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[e]),I.jsx(hF,{onClick:e,children:I.jsx(pF,{onClick:n=>n.stopPropagation(),children:t})})),mF=U.button`
  font-weight: 500;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  padding: ${({$padding:e})=>e||"14px 40px"};
  border-radius: 30px;
  border: ${({$border:e})=>e?"1px solid rgba(251, 251, 251, 0.4)":"none"};
  background-color: ${({$border:e})=>e?"transparent":"#103931"};
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgba(16, 57, 49, 0.2);
    color: black;
  }
`,ma=({title:e,border:t,onClick:n,padding:r})=>I.jsx(mF,{$border:t,onClick:n,$padding:r,children:e});var gF=function(t){return yF(t)&&!vF(t)};function yF(e){return!!e&&typeof e=="object"}function vF(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||EF(e)}var _F=typeof Symbol=="function"&&Symbol.for,wF=_F?Symbol.for("react.element"):60103;function EF(e){return e.$$typeof===wF}function SF(e){return Array.isArray(e)?[]:{}}function wc(e,t){return t.clone!==!1&&t.isMergeableObject(e)?tl(SF(e),e,t):e}function CF(e,t,n){return e.concat(t).map(function(r){return wc(r,n)})}function TF(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=wc(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=wc(t[i],n):r[i]=tl(e[i],t[i],n)}),r}function tl(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||CF,n.isMergeableObject=n.isMergeableObject||gF;var r=Array.isArray(t),i=Array.isArray(e),o=r===i;return o?r?n.arrayMerge(e,t,n):TF(e,t,n):wc(t,n)}tl.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return tl(r,i,n)},{})};var Ip=tl,IT=typeof global=="object"&&global&&global.Object===Object&&global,IF=typeof self=="object"&&self&&self.Object===Object&&self,Un=IT||IF||Function("return this")(),Xr=Un.Symbol,xT=Object.prototype,xF=xT.hasOwnProperty,kF=xT.toString,Ws=Xr?Xr.toStringTag:void 0;function bF(e){var t=xF.call(e,Ws),n=e[Ws];try{e[Ws]=void 0;var r=!0}catch{}var i=kF.call(e);return r&&(t?e[Ws]=n:delete e[Ws]),i}var RF=Object.prototype,PF=RF.toString;function NF(e){return PF.call(e)}var AF="[object Null]",OF="[object Undefined]",p0=Xr?Xr.toStringTag:void 0;function Zi(e){return e==null?e===void 0?OF:AF:p0&&p0 in Object(e)?bF(e):NF(e)}function kT(e,t){return function(n){return e(t(n))}}var zg=kT(Object.getPrototypeOf,Object);function eo(e){return e!=null&&typeof e=="object"}var DF="[object Object]",LF=Function.prototype,MF=Object.prototype,bT=LF.toString,FF=MF.hasOwnProperty,jF=bT.call(Object);function m0(e){if(!eo(e)||Zi(e)!=DF)return!1;var t=zg(e);if(t===null)return!0;var n=FF.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&bT.call(n)==jF}var g0=Array.isArray,y0=Object.keys,$F=Object.prototype.hasOwnProperty,UF=typeof Element<"u";function xp(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=g0(e),r=g0(t),i,o,s;if(n&&r){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!xp(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,c=t instanceof RegExp;if(u!=c)return!1;if(u&&c)return e.toString()==t.toString();var d=y0(e);if(o=d.length,o!==y0(t).length)return!1;for(i=o;i--!==0;)if(!$F.call(t,d[i]))return!1;if(UF&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(s=d[i],!(s==="_owner"&&e.$$typeof)&&!xp(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}var zF=function(t,n){try{return xp(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const hi=Ap(zF);function BF(){this.__data__=[],this.size=0}function RT(e,t){return e===t||e!==e&&t!==t}function pd(e,t){for(var n=e.length;n--;)if(RT(e[n][0],t))return n;return-1}var WF=Array.prototype,VF=WF.splice;function HF(e){var t=this.__data__,n=pd(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():VF.call(t,n,1),--this.size,!0}function GF(e){var t=this.__data__,n=pd(t,e);return n<0?void 0:t[n][1]}function KF(e){return pd(this.__data__,e)>-1}function qF(e,t){var n=this.__data__,r=pd(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function gr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}gr.prototype.clear=BF;gr.prototype.delete=HF;gr.prototype.get=GF;gr.prototype.has=KF;gr.prototype.set=qF;function YF(){this.__data__=new gr,this.size=0}function QF(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function JF(e){return this.__data__.get(e)}function XF(e){return this.__data__.has(e)}function El(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ZF="[object AsyncFunction]",e4="[object Function]",t4="[object GeneratorFunction]",n4="[object Proxy]";function PT(e){if(!El(e))return!1;var t=Zi(e);return t==e4||t==t4||t==ZF||t==n4}var Mf=Un["__core-js_shared__"],v0=function(){var e=/[^.]+$/.exec(Mf&&Mf.keys&&Mf.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function r4(e){return!!v0&&v0 in e}var i4=Function.prototype,o4=i4.toString;function to(e){if(e!=null){try{return o4.call(e)}catch{}try{return e+""}catch{}}return""}var s4=/[\\^$.*+?()[\]{}|]/g,a4=/^\[object .+?Constructor\]$/,l4=Function.prototype,u4=Object.prototype,c4=l4.toString,d4=u4.hasOwnProperty,f4=RegExp("^"+c4.call(d4).replace(s4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function h4(e){if(!El(e)||r4(e))return!1;var t=PT(e)?f4:a4;return t.test(to(e))}function p4(e,t){return e==null?void 0:e[t]}function no(e,t){var n=p4(e,t);return h4(n)?n:void 0}var nl=no(Un,"Map"),rl=no(Object,"create");function m4(){this.__data__=rl?rl(null):{},this.size=0}function g4(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var y4="__lodash_hash_undefined__",v4=Object.prototype,_4=v4.hasOwnProperty;function w4(e){var t=this.__data__;if(rl){var n=t[e];return n===y4?void 0:n}return _4.call(t,e)?t[e]:void 0}var E4=Object.prototype,S4=E4.hasOwnProperty;function C4(e){var t=this.__data__;return rl?t[e]!==void 0:S4.call(t,e)}var T4="__lodash_hash_undefined__";function I4(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=rl&&t===void 0?T4:t,this}function Ki(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ki.prototype.clear=m4;Ki.prototype.delete=g4;Ki.prototype.get=w4;Ki.prototype.has=C4;Ki.prototype.set=I4;function x4(){this.size=0,this.__data__={hash:new Ki,map:new(nl||gr),string:new Ki}}function k4(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function md(e,t){var n=e.__data__;return k4(t)?n[typeof t=="string"?"string":"hash"]:n.map}function b4(e){var t=md(this,e).delete(e);return this.size-=t?1:0,t}function R4(e){return md(this,e).get(e)}function P4(e){return md(this,e).has(e)}function N4(e,t){var n=md(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function ii(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ii.prototype.clear=x4;ii.prototype.delete=b4;ii.prototype.get=R4;ii.prototype.has=P4;ii.prototype.set=N4;var A4=200;function O4(e,t){var n=this.__data__;if(n instanceof gr){var r=n.__data__;if(!nl||r.length<A4-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ii(r)}return n.set(e,t),this.size=n.size,this}function Es(e){var t=this.__data__=new gr(e);this.size=t.size}Es.prototype.clear=YF;Es.prototype.delete=QF;Es.prototype.get=JF;Es.prototype.has=XF;Es.prototype.set=O4;function D4(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var _0=function(){try{var e=no(Object,"defineProperty");return e({},"",{}),e}catch{}}();function NT(e,t,n){t=="__proto__"&&_0?_0(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var L4=Object.prototype,M4=L4.hasOwnProperty;function AT(e,t,n){var r=e[t];(!(M4.call(e,t)&&RT(r,n))||n===void 0&&!(t in e))&&NT(e,t,n)}function gd(e,t,n,r){var i=!n;n||(n={});for(var o=-1,s=t.length;++o<s;){var a=t[o],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?NT(n,a,l):AT(n,a,l)}return n}function F4(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var j4="[object Arguments]";function w0(e){return eo(e)&&Zi(e)==j4}var OT=Object.prototype,$4=OT.hasOwnProperty,U4=OT.propertyIsEnumerable,z4=w0(function(){return arguments}())?w0:function(e){return eo(e)&&$4.call(e,"callee")&&!U4.call(e,"callee")},Sl=Array.isArray;function B4(){return!1}var DT=typeof exports=="object"&&exports&&!exports.nodeType&&exports,E0=DT&&typeof module=="object"&&module&&!module.nodeType&&module,W4=E0&&E0.exports===DT,S0=W4?Un.Buffer:void 0,V4=S0?S0.isBuffer:void 0,LT=V4||B4,H4=9007199254740991,G4=/^(?:0|[1-9]\d*)$/;function K4(e,t){var n=typeof e;return t=t??H4,!!t&&(n=="number"||n!="symbol"&&G4.test(e))&&e>-1&&e%1==0&&e<t}var q4=9007199254740991;function MT(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=q4}var Y4="[object Arguments]",Q4="[object Array]",J4="[object Boolean]",X4="[object Date]",Z4="[object Error]",e6="[object Function]",t6="[object Map]",n6="[object Number]",r6="[object Object]",i6="[object RegExp]",o6="[object Set]",s6="[object String]",a6="[object WeakMap]",l6="[object ArrayBuffer]",u6="[object DataView]",c6="[object Float32Array]",d6="[object Float64Array]",f6="[object Int8Array]",h6="[object Int16Array]",p6="[object Int32Array]",m6="[object Uint8Array]",g6="[object Uint8ClampedArray]",y6="[object Uint16Array]",v6="[object Uint32Array]",Re={};Re[c6]=Re[d6]=Re[f6]=Re[h6]=Re[p6]=Re[m6]=Re[g6]=Re[y6]=Re[v6]=!0;Re[Y4]=Re[Q4]=Re[l6]=Re[J4]=Re[u6]=Re[X4]=Re[Z4]=Re[e6]=Re[t6]=Re[n6]=Re[r6]=Re[i6]=Re[o6]=Re[s6]=Re[a6]=!1;function _6(e){return eo(e)&&MT(e.length)&&!!Re[Zi(e)]}function Bg(e){return function(t){return e(t)}}var FT=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ga=FT&&typeof module=="object"&&module&&!module.nodeType&&module,w6=ga&&ga.exports===FT,Ff=w6&&IT.process,as=function(){try{var e=ga&&ga.require&&ga.require("util").types;return e||Ff&&Ff.binding&&Ff.binding("util")}catch{}}(),C0=as&&as.isTypedArray,E6=C0?Bg(C0):_6,S6=Object.prototype,C6=S6.hasOwnProperty;function jT(e,t){var n=Sl(e),r=!n&&z4(e),i=!n&&!r&&LT(e),o=!n&&!r&&!i&&E6(e),s=n||r||i||o,a=s?F4(e.length,String):[],l=a.length;for(var u in e)(t||C6.call(e,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||K4(u,l)))&&a.push(u);return a}var T6=Object.prototype;function Wg(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||T6;return e===n}var I6=kT(Object.keys,Object),x6=Object.prototype,k6=x6.hasOwnProperty;function b6(e){if(!Wg(e))return I6(e);var t=[];for(var n in Object(e))k6.call(e,n)&&n!="constructor"&&t.push(n);return t}function $T(e){return e!=null&&MT(e.length)&&!PT(e)}function Vg(e){return $T(e)?jT(e):b6(e)}function R6(e,t){return e&&gd(t,Vg(t),e)}function P6(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var N6=Object.prototype,A6=N6.hasOwnProperty;function O6(e){if(!El(e))return P6(e);var t=Wg(e),n=[];for(var r in e)r=="constructor"&&(t||!A6.call(e,r))||n.push(r);return n}function Hg(e){return $T(e)?jT(e,!0):O6(e)}function D6(e,t){return e&&gd(t,Hg(t),e)}var UT=typeof exports=="object"&&exports&&!exports.nodeType&&exports,T0=UT&&typeof module=="object"&&module&&!module.nodeType&&module,L6=T0&&T0.exports===UT,I0=L6?Un.Buffer:void 0,x0=I0?I0.allocUnsafe:void 0;function M6(e,t){if(t)return e.slice();var n=e.length,r=x0?x0(n):new e.constructor(n);return e.copy(r),r}function zT(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function F6(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}function BT(){return[]}var j6=Object.prototype,$6=j6.propertyIsEnumerable,k0=Object.getOwnPropertySymbols,Gg=k0?function(e){return e==null?[]:(e=Object(e),F6(k0(e),function(t){return $6.call(e,t)}))}:BT;function U6(e,t){return gd(e,Gg(e),t)}function WT(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var z6=Object.getOwnPropertySymbols,VT=z6?function(e){for(var t=[];e;)WT(t,Gg(e)),e=zg(e);return t}:BT;function B6(e,t){return gd(e,VT(e),t)}function HT(e,t,n){var r=t(e);return Sl(e)?r:WT(r,n(e))}function W6(e){return HT(e,Vg,Gg)}function V6(e){return HT(e,Hg,VT)}var kp=no(Un,"DataView"),bp=no(Un,"Promise"),Rp=no(Un,"Set"),Pp=no(Un,"WeakMap"),b0="[object Map]",H6="[object Object]",R0="[object Promise]",P0="[object Set]",N0="[object WeakMap]",A0="[object DataView]",G6=to(kp),K6=to(nl),q6=to(bp),Y6=to(Rp),Q6=to(Pp),pi=Zi;(kp&&pi(new kp(new ArrayBuffer(1)))!=A0||nl&&pi(new nl)!=b0||bp&&pi(bp.resolve())!=R0||Rp&&pi(new Rp)!=P0||Pp&&pi(new Pp)!=N0)&&(pi=function(e){var t=Zi(e),n=t==H6?e.constructor:void 0,r=n?to(n):"";if(r)switch(r){case G6:return A0;case K6:return b0;case q6:return R0;case Y6:return P0;case Q6:return N0}return t});const Kg=pi;var J6=Object.prototype,X6=J6.hasOwnProperty;function Z6(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&X6.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var O0=Un.Uint8Array;function qg(e){var t=new e.constructor(e.byteLength);return new O0(t).set(new O0(e)),t}function ej(e,t){var n=t?qg(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var tj=/\w*$/;function nj(e){var t=new e.constructor(e.source,tj.exec(e));return t.lastIndex=e.lastIndex,t}var D0=Xr?Xr.prototype:void 0,L0=D0?D0.valueOf:void 0;function rj(e){return L0?Object(L0.call(e)):{}}function ij(e,t){var n=t?qg(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var oj="[object Boolean]",sj="[object Date]",aj="[object Map]",lj="[object Number]",uj="[object RegExp]",cj="[object Set]",dj="[object String]",fj="[object Symbol]",hj="[object ArrayBuffer]",pj="[object DataView]",mj="[object Float32Array]",gj="[object Float64Array]",yj="[object Int8Array]",vj="[object Int16Array]",_j="[object Int32Array]",wj="[object Uint8Array]",Ej="[object Uint8ClampedArray]",Sj="[object Uint16Array]",Cj="[object Uint32Array]";function Tj(e,t,n){var r=e.constructor;switch(t){case hj:return qg(e);case oj:case sj:return new r(+e);case pj:return ej(e,n);case mj:case gj:case yj:case vj:case _j:case wj:case Ej:case Sj:case Cj:return ij(e,n);case aj:return new r;case lj:case dj:return new r(e);case uj:return nj(e);case cj:return new r;case fj:return rj(e)}}var M0=Object.create,Ij=function(){function e(){}return function(t){if(!El(t))return{};if(M0)return M0(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function xj(e){return typeof e.constructor=="function"&&!Wg(e)?Ij(zg(e)):{}}var kj="[object Map]";function bj(e){return eo(e)&&Kg(e)==kj}var F0=as&&as.isMap,Rj=F0?Bg(F0):bj,Pj="[object Set]";function Nj(e){return eo(e)&&Kg(e)==Pj}var j0=as&&as.isSet,Aj=j0?Bg(j0):Nj,Oj=1,Dj=2,Lj=4,GT="[object Arguments]",Mj="[object Array]",Fj="[object Boolean]",jj="[object Date]",$j="[object Error]",KT="[object Function]",Uj="[object GeneratorFunction]",zj="[object Map]",Bj="[object Number]",qT="[object Object]",Wj="[object RegExp]",Vj="[object Set]",Hj="[object String]",Gj="[object Symbol]",Kj="[object WeakMap]",qj="[object ArrayBuffer]",Yj="[object DataView]",Qj="[object Float32Array]",Jj="[object Float64Array]",Xj="[object Int8Array]",Zj="[object Int16Array]",e$="[object Int32Array]",t$="[object Uint8Array]",n$="[object Uint8ClampedArray]",r$="[object Uint16Array]",i$="[object Uint32Array]",Ce={};Ce[GT]=Ce[Mj]=Ce[qj]=Ce[Yj]=Ce[Fj]=Ce[jj]=Ce[Qj]=Ce[Jj]=Ce[Xj]=Ce[Zj]=Ce[e$]=Ce[zj]=Ce[Bj]=Ce[qT]=Ce[Wj]=Ce[Vj]=Ce[Hj]=Ce[Gj]=Ce[t$]=Ce[n$]=Ce[r$]=Ce[i$]=!0;Ce[$j]=Ce[KT]=Ce[Kj]=!1;function vu(e,t,n,r,i,o){var s,a=t&Oj,l=t&Dj,u=t&Lj;if(n&&(s=i?n(e,r,i,o):n(e)),s!==void 0)return s;if(!El(e))return e;var c=Sl(e);if(c){if(s=Z6(e),!a)return zT(e,s)}else{var d=Kg(e),f=d==KT||d==Uj;if(LT(e))return M6(e,a);if(d==qT||d==GT||f&&!i){if(s=l||f?{}:xj(e),!a)return l?B6(e,D6(s,e)):U6(e,R6(s,e))}else{if(!Ce[d])return i?e:{};s=Tj(e,d,a)}}o||(o=new Es);var m=o.get(e);if(m)return m;o.set(e,s),Aj(e)?e.forEach(function(w){s.add(vu(w,t,n,w,e,o))}):Rj(e)&&e.forEach(function(w,p){s.set(p,vu(w,t,n,p,e,o))});var y=u?l?V6:W6:l?Hg:Vg,_=c?void 0:y(e);return D4(_||e,function(w,p){_&&(p=w,w=e[p]),AT(s,p,vu(w,t,n,p,e,o))}),s}var o$=4;function $0(e){return vu(e,o$)}function YT(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var s$="[object Symbol]";function Yg(e){return typeof e=="symbol"||eo(e)&&Zi(e)==s$}var a$="Expected a function";function Qg(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(a$);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(Qg.Cache||ii),n}Qg.Cache=ii;var l$=500;function u$(e){var t=Qg(e,function(r){return n.size===l$&&n.clear(),r}),n=t.cache;return t}var c$=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,d$=/\\(\\)?/g,f$=u$(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(c$,function(n,r,i,o){t.push(i?o.replace(d$,"$1"):r||n)}),t});const h$=f$;var p$=1/0;function m$(e){if(typeof e=="string"||Yg(e))return e;var t=e+"";return t=="0"&&1/e==-p$?"-0":t}var g$=1/0,U0=Xr?Xr.prototype:void 0,z0=U0?U0.toString:void 0;function QT(e){if(typeof e=="string")return e;if(Sl(e))return YT(e,QT)+"";if(Yg(e))return z0?z0.call(e):"";var t=e+"";return t=="0"&&1/e==-g$?"-0":t}function y$(e){return e==null?"":QT(e)}function JT(e){return Sl(e)?YT(e,m$):Yg(e)?[e]:zT(h$(y$(e)))}var XT={exports:{}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ut=typeof Symbol=="function"&&Symbol.for,Jg=ut?Symbol.for("react.element"):60103,Xg=ut?Symbol.for("react.portal"):60106,yd=ut?Symbol.for("react.fragment"):60107,vd=ut?Symbol.for("react.strict_mode"):60108,_d=ut?Symbol.for("react.profiler"):60114,wd=ut?Symbol.for("react.provider"):60109,Ed=ut?Symbol.for("react.context"):60110,Zg=ut?Symbol.for("react.async_mode"):60111,Sd=ut?Symbol.for("react.concurrent_mode"):60111,Cd=ut?Symbol.for("react.forward_ref"):60112,Td=ut?Symbol.for("react.suspense"):60113,v$=ut?Symbol.for("react.suspense_list"):60120,Id=ut?Symbol.for("react.memo"):60115,xd=ut?Symbol.for("react.lazy"):60116,_$=ut?Symbol.for("react.block"):60121,w$=ut?Symbol.for("react.fundamental"):60117,E$=ut?Symbol.for("react.responder"):60118,S$=ut?Symbol.for("react.scope"):60119;function Zt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Jg:switch(e=e.type,e){case Zg:case Sd:case yd:case _d:case vd:case Td:return e;default:switch(e=e&&e.$$typeof,e){case Ed:case Cd:case xd:case Id:case wd:return e;default:return t}}case Xg:return t}}}function ZT(e){return Zt(e)===Sd}ye.AsyncMode=Zg;ye.ConcurrentMode=Sd;ye.ContextConsumer=Ed;ye.ContextProvider=wd;ye.Element=Jg;ye.ForwardRef=Cd;ye.Fragment=yd;ye.Lazy=xd;ye.Memo=Id;ye.Portal=Xg;ye.Profiler=_d;ye.StrictMode=vd;ye.Suspense=Td;ye.isAsyncMode=function(e){return ZT(e)||Zt(e)===Zg};ye.isConcurrentMode=ZT;ye.isContextConsumer=function(e){return Zt(e)===Ed};ye.isContextProvider=function(e){return Zt(e)===wd};ye.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jg};ye.isForwardRef=function(e){return Zt(e)===Cd};ye.isFragment=function(e){return Zt(e)===yd};ye.isLazy=function(e){return Zt(e)===xd};ye.isMemo=function(e){return Zt(e)===Id};ye.isPortal=function(e){return Zt(e)===Xg};ye.isProfiler=function(e){return Zt(e)===_d};ye.isStrictMode=function(e){return Zt(e)===vd};ye.isSuspense=function(e){return Zt(e)===Td};ye.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===yd||e===Sd||e===_d||e===vd||e===Td||e===v$||typeof e=="object"&&e!==null&&(e.$$typeof===xd||e.$$typeof===Id||e.$$typeof===wd||e.$$typeof===Ed||e.$$typeof===Cd||e.$$typeof===w$||e.$$typeof===E$||e.$$typeof===S$||e.$$typeof===_$)};ye.typeOf=Zt;XT.exports=ye;var C$=XT.exports,eI=C$,T$={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},I$={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tI={};tI[eI.ForwardRef]=T$;tI[eI.Memo]=I$;function tt(){return tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tt.apply(this,arguments)}function nI(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var kd=E.createContext(void 0);kd.displayName="FormikContext";kd.Provider;kd.Consumer;function x$(){var e=E.useContext(kd);return e}var pn=function(t){return typeof t=="function"},bd=function(t){return t!==null&&typeof t=="object"},k$=function(t){return String(Math.floor(Number(t)))===t},jf=function(t){return Object.prototype.toString.call(t)==="[object String]"},$f=function(t){return bd(t)&&pn(t.then)};function Bt(e,t,n,r){r===void 0&&(r=0);for(var i=JT(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function bi(e,t,n){for(var r=$0(e),i=r,o=0,s=JT(t);o<s.length-1;o++){var a=s[o],l=Bt(e,s.slice(0,o+1));if(l&&(bd(l)||Array.isArray(l)))i=i[a]=$0(l);else{var u=s[o+1];i=i[a]=k$(u)&&Number(u)>=0?[]:{}}}return(o===0?e:i)[s[o]]===n?e:(n===void 0?delete i[s[o]]:i[s[o]]=n,o===0&&n===void 0&&delete r[s[o]],r)}function rI(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],a=e[s];bd(a)?n.get(a)||(n.set(a,!0),r[s]=Array.isArray(a)?[]:{},rI(a,t,n,r[s])):r[s]=t}return r}function b$(e,t){switch(t.type){case"SET_VALUES":return tt({},e,{values:t.payload});case"SET_TOUCHED":return tt({},e,{touched:t.payload});case"SET_ERRORS":return hi(e.errors,t.payload)?e:tt({},e,{errors:t.payload});case"SET_STATUS":return tt({},e,{status:t.payload});case"SET_ISSUBMITTING":return tt({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return tt({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return tt({},e,{values:bi(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return tt({},e,{touched:bi(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return tt({},e,{errors:bi(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return tt({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return tt({},e,{touched:rI(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return tt({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return tt({},e,{isSubmitting:!1});default:return e}}var ai={},Ql={};function R$(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,o=e.validateOnMount,s=o===void 0?!1:o,a=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,c=e.onSubmit,d=nI(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=tt({validateOnChange:n,validateOnBlur:i,validateOnMount:s,onSubmit:c},d),m=E.useRef(f.initialValues),y=E.useRef(f.initialErrors||ai),_=E.useRef(f.initialTouched||Ql),w=E.useRef(f.initialStatus),p=E.useRef(!1),h=E.useRef({});E.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var g=E.useState(0),C=g[1],b=E.useRef({values:f.initialValues,errors:f.initialErrors||ai,touched:f.initialTouched||Ql,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),v=b.current,S=E.useCallback(function(k){var M=b.current;b.current=b$(M,k),M!==b.current&&C(function(F){return F+1})},[]),P=E.useCallback(function(k,M){return new Promise(function(F,W){var Z=f.validate(k,M);Z==null?F(ai):$f(Z)?Z.then(function(de){F(de||ai)},function(de){W(de)}):F(Z)})},[f.validate]),O=E.useCallback(function(k,M){var F=f.validationSchema,W=pn(F)?F(M):F,Z=M&&W.validateAt?W.validateAt(M,k):N$(k,W);return new Promise(function(de,Ge){Z.then(function(){de(ai)},function(Xe){Xe.name==="ValidationError"?de(P$(Xe)):Ge(Xe)})})},[f.validationSchema]),$=E.useCallback(function(k,M){return new Promise(function(F){return F(h.current[k].validate(M))})},[]),Q=E.useCallback(function(k){var M=Object.keys(h.current).filter(function(W){return pn(h.current[W].validate)}),F=M.length>0?M.map(function(W){return $(W,Bt(k,W))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(F).then(function(W){return W.reduce(function(Z,de,Ge){return de==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||de&&(Z=bi(Z,M[Ge],de)),Z},{})})},[$]),ue=E.useCallback(function(k){return Promise.all([Q(k),f.validationSchema?O(k):{},f.validate?P(k):{}]).then(function(M){var F=M[0],W=M[1],Z=M[2],de=Ip.all([F,W,Z],{arrayMerge:A$});return de})},[f.validate,f.validationSchema,Q,P,O]),ee=rn(function(k){return k===void 0&&(k=v.values),S({type:"SET_ISVALIDATING",payload:!0}),ue(k).then(function(M){return p.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:M})),M})});E.useEffect(function(){s&&p.current===!0&&hi(m.current,f.initialValues)&&ee(m.current)},[s,ee]);var Ee=E.useCallback(function(k){var M=k&&k.values?k.values:m.current,F=k&&k.errors?k.errors:y.current?y.current:f.initialErrors||{},W=k&&k.touched?k.touched:_.current?_.current:f.initialTouched||{},Z=k&&k.status?k.status:w.current?w.current:f.initialStatus;m.current=M,y.current=F,_.current=W,w.current=Z;var de=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!k&&!!k.isSubmitting,errors:F,touched:W,status:Z,values:M,isValidating:!!k&&!!k.isValidating,submitCount:k&&k.submitCount&&typeof k.submitCount=="number"?k.submitCount:0}})};if(f.onReset){var Ge=f.onReset(v.values,Ss);$f(Ge)?Ge.then(de):de()}else de()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);E.useEffect(function(){p.current===!0&&!hi(m.current,f.initialValues)&&u&&(m.current=f.initialValues,Ee(),s&&ee(m.current))},[u,f.initialValues,Ee,s,ee]),E.useEffect(function(){u&&p.current===!0&&!hi(y.current,f.initialErrors)&&(y.current=f.initialErrors||ai,S({type:"SET_ERRORS",payload:f.initialErrors||ai}))},[u,f.initialErrors]),E.useEffect(function(){u&&p.current===!0&&!hi(_.current,f.initialTouched)&&(_.current=f.initialTouched||Ql,S({type:"SET_TOUCHED",payload:f.initialTouched||Ql}))},[u,f.initialTouched]),E.useEffect(function(){u&&p.current===!0&&!hi(w.current,f.initialStatus)&&(w.current=f.initialStatus,S({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var zt=rn(function(k){if(h.current[k]&&pn(h.current[k].validate)){var M=Bt(v.values,k),F=h.current[k].validate(M);return $f(F)?(S({type:"SET_ISVALIDATING",payload:!0}),F.then(function(W){return W}).then(function(W){S({type:"SET_FIELD_ERROR",payload:{field:k,value:W}}),S({type:"SET_ISVALIDATING",payload:!1})})):(S({type:"SET_FIELD_ERROR",payload:{field:k,value:F}}),Promise.resolve(F))}else if(f.validationSchema)return S({type:"SET_ISVALIDATING",payload:!0}),O(v.values,k).then(function(W){return W}).then(function(W){S({type:"SET_FIELD_ERROR",payload:{field:k,value:Bt(W,k)}}),S({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),en=E.useCallback(function(k,M){var F=M.validate;h.current[k]={validate:F}},[]),pe=E.useCallback(function(k){delete h.current[k]},[]),D=rn(function(k,M){S({type:"SET_TOUCHED",payload:k});var F=M===void 0?i:M;return F?ee(v.values):Promise.resolve()}),z=E.useCallback(function(k){S({type:"SET_ERRORS",payload:k})},[]),V=rn(function(k,M){var F=pn(k)?k(v.values):k;S({type:"SET_VALUES",payload:F});var W=M===void 0?n:M;return W?ee(F):Promise.resolve()}),J=E.useCallback(function(k,M){S({type:"SET_FIELD_ERROR",payload:{field:k,value:M}})},[]),X=rn(function(k,M,F){S({type:"SET_FIELD_VALUE",payload:{field:k,value:M}});var W=F===void 0?n:F;return W?ee(bi(v.values,k,M)):Promise.resolve()}),yt=E.useCallback(function(k,M){var F=M,W=k,Z;if(!jf(k)){k.persist&&k.persist();var de=k.target?k.target:k.currentTarget,Ge=de.type,Xe=de.name,ro=de.id,io=de.value,Cl=de.checked,ey=de.outerHTML,Ts=de.options,oo=de.multiple;F=M||Xe||ro,W=/number|range/.test(Ge)?(Z=parseFloat(io),isNaN(Z)?"":Z):/checkbox/.test(Ge)?D$(Bt(v.values,F),Cl,io):Ts&&oo?O$(Ts):io}F&&X(F,W)},[X,v.values]),xe=rn(function(k){if(jf(k))return function(M){return yt(M,k)};yt(k)}),Le=rn(function(k,M,F){M===void 0&&(M=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:k,value:M}});var W=F===void 0?i:F;return W?ee(v.values):Promise.resolve()}),Ae=E.useCallback(function(k,M){k.persist&&k.persist();var F=k.target,W=F.name,Z=F.id,de=F.outerHTML,Ge=M||W||Z;Le(Ge,!0)},[Le]),ct=rn(function(k){if(jf(k))return function(M){return Ae(M,k)};Ae(k)}),Rn=E.useCallback(function(k){pn(k)?S({type:"SET_FORMIK_STATE",payload:k}):S({type:"SET_FORMIK_STATE",payload:function(){return k}})},[]),tn=E.useCallback(function(k){S({type:"SET_STATUS",payload:k})},[]),yr=E.useCallback(function(k){S({type:"SET_ISSUBMITTING",payload:k})},[]),Ue=rn(function(){return S({type:"SUBMIT_ATTEMPT"}),ee().then(function(k){var M=k instanceof Error,F=!M&&Object.keys(k).length===0;if(F){var W;try{if(W=Rd(),W===void 0)return}catch(Z){throw Z}return Promise.resolve(W).then(function(Z){return p.current&&S({type:"SUBMIT_SUCCESS"}),Z}).catch(function(Z){if(p.current)throw S({type:"SUBMIT_FAILURE"}),Z})}else if(p.current&&(S({type:"SUBMIT_FAILURE"}),M))throw k})}),vt=rn(function(k){k&&k.preventDefault&&pn(k.preventDefault)&&k.preventDefault(),k&&k.stopPropagation&&pn(k.stopPropagation)&&k.stopPropagation(),Ue().catch(function(M){console.warn("Warning: An unhandled error was caught from submitForm()",M)})}),Ss={resetForm:Ee,validateForm:ee,validateField:zt,setErrors:z,setFieldError:J,setFieldTouched:Le,setFieldValue:X,setStatus:tn,setSubmitting:yr,setTouched:D,setValues:V,setFormikState:Rn,submitForm:Ue},Rd=rn(function(){return c(v.values,Ss)}),zn=rn(function(k){k&&k.preventDefault&&pn(k.preventDefault)&&k.preventDefault(),k&&k.stopPropagation&&pn(k.stopPropagation)&&k.stopPropagation(),Ee()}),Pd=E.useCallback(function(k){return{value:Bt(v.values,k),error:Bt(v.errors,k),touched:!!Bt(v.touched,k),initialValue:Bt(m.current,k),initialTouched:!!Bt(_.current,k),initialError:Bt(y.current,k)}},[v.errors,v.touched,v.values]),Nd=E.useCallback(function(k){return{setValue:function(F,W){return X(k,F,W)},setTouched:function(F,W){return Le(k,F,W)},setError:function(F){return J(k,F)}}},[X,Le,J]),Ad=E.useCallback(function(k){var M=bd(k),F=M?k.name:k,W=Bt(v.values,F),Z={name:F,value:W,onChange:xe,onBlur:ct};if(M){var de=k.type,Ge=k.value,Xe=k.as,ro=k.multiple;de==="checkbox"?Ge===void 0?Z.checked=!!W:(Z.checked=!!(Array.isArray(W)&&~W.indexOf(Ge)),Z.value=Ge):de==="radio"?(Z.checked=W===Ge,Z.value=Ge):Xe==="select"&&ro&&(Z.value=Z.value||[],Z.multiple=!0)}return Z},[ct,xe,v.values]),Cs=E.useMemo(function(){return!hi(m.current,v.values)},[m.current,v.values]),Od=E.useMemo(function(){return typeof a<"u"?Cs?v.errors&&Object.keys(v.errors).length===0:a!==!1&&pn(a)?a(f):a:v.errors&&Object.keys(v.errors).length===0},[a,Cs,v.errors,f]),oi=tt({},v,{initialValues:m.current,initialErrors:y.current,initialTouched:_.current,initialStatus:w.current,handleBlur:ct,handleChange:xe,handleReset:zn,handleSubmit:vt,resetForm:Ee,setErrors:z,setFormikState:Rn,setFieldTouched:Le,setFieldValue:X,setFieldError:J,setStatus:tn,setSubmitting:yr,setTouched:D,setValues:V,submitForm:Ue,validateForm:ee,validateField:zt,isValid:Od,dirty:Cs,unregisterField:pe,registerField:en,getFieldProps:Ad,getFieldMeta:Pd,getFieldHelpers:Nd,validateOnBlur:i,validateOnChange:n,validateOnMount:s});return oi}function P$(e){var t={};if(e.inner){if(e.inner.length===0)return bi(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var o;if(n){if(r>=i.length)break;o=i[r++]}else{if(r=i.next(),r.done)break;o=r.value}var s=o;Bt(t,s.path)||(t=bi(t,s.path,s.message))}}return t}function N$(e,t,n,r){n===void 0&&(n=!1);var i=Np(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Np(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||m0(i)?Np(i):i!==""?i:void 0}):m0(e[r])?t[r]=Np(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function A$(e,t,n){var r=e.slice();return t.forEach(function(o,s){if(typeof r[s]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(o);r[s]=l?Ip(Array.isArray(o)?[]:{},o,n):o}else n.isMergeableObject(o)?r[s]=Ip(e[s],o,n):e.indexOf(o)===-1&&r.push(o)}),r}function O$(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function D$(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,o=-1;if(Array.isArray(e))r=e,o=e.indexOf(n),i=o>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,o).concat(r.slice(o+1)):r}var L$=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?E.useLayoutEffect:E.useEffect;function rn(e){var t=E.useRef(e);return L$(function(){t.current=e}),E.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}var M$=E.forwardRef(function(e,t){var n=e.action,r=nI(e,["action"]),i=n??"#",o=x$(),s=o.handleReset,a=o.handleSubmit;return E.createElement("form",tt({onSubmit:a,ref:t,onReset:s,action:i},r))});M$.displayName="Form";const F$=U.div`
  position: relative;
`,iI=U.input`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  background-color: transparent;
  font-size: 16px;
  line-height: 125%;
  color: #11101c;
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus,
  &:hover {
    outline: #103931 solid 1px;
  }
  grid-column: ${({$isGridStretchRow:e})=>e?"span 2":"span 1"};
`,j$=U.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 16px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,$$=e=>E.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none",...e},E.createElement("path",{d:"M0.666504 7.99996C0.666504 7.99996 3.33317 2.66663 7.99984 2.66663C12.6665 2.66663 15.3332 7.99996 15.3332 7.99996C15.3332 7.99996 12.6665 13.3333 7.99984 13.3333C3.33317 13.3333 0.666504 7.99996 0.666504 7.99996Z",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),E.createElement("path",{d:"M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),U$=e=>E.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none",...e},E.createElement("g",{clipPath:"url(#clip0_283_2250)"},E.createElement("path",{d:"M11.9601 11.96C10.8205 12.8286 9.43282 13.3099 8.00008 13.3333C3.33342 13.3333 0.666748 7.99998 0.666748 7.99998C1.49601 6.45457 2.64617 5.10438 4.04008 4.03998M6.60008 2.82664C7.05897 2.71923 7.52879 2.66554 8.00008 2.66664C12.6667 2.66664 15.3334 7.99998 15.3334 7.99998C14.9287 8.75705 14.4461 9.4698 13.8934 10.1266M9.41342 9.41331C9.23032 9.60981 9.00952 9.76741 8.76418 9.87672C8.51885 9.98604 8.25402 10.0448 7.98548 10.0496C7.71693 10.0543 7.45019 10.0049 7.20116 9.9043C6.95212 9.80371 6.7259 9.65399 6.53598 9.46408C6.34606 9.27416 6.19634 9.04794 6.09575 8.7989C5.99517 8.54987 5.94577 8.28312 5.9505 8.01458C5.95524 7.74604 6.01402 7.48121 6.12333 7.23587C6.23264 6.99054 6.39025 6.76974 6.58675 6.58664",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),E.createElement("path",{d:"M0.666748 0.666626L15.3334 15.3333",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),E.createElement("defs",null,E.createElement("clipPath",{id:"clip0_283_2250"},E.createElement("rect",{width:16,height:16,fill:"#11101c"})))),Uf=({name:e,type:t,handleChange:n,value:r})=>{const[i,o]=E.useState(!1),s=e.charAt(0).toUpperCase()+e.slice(1),a=l=>{l.preventDefault(),o(u=>!u)};return I.jsxs(F$,{children:[I.jsx(iI,{id:e,name:e,type:e==="password"?i?"text":"password":t,onChange:n,value:r,placeholder:s}),e==="password"&&I.jsx(j$,{onClick:a,children:i?I.jsx($$,{}):I.jsx(U$,{})})]})},z$=e=>E.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},E.createElement("path",{d:"M24 8L8 24",stroke:"#11101C",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),E.createElement("path",{d:"M8 8L24 24",stroke:"#11101C",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"})),B$=U.form`
  position: relative;
  width: 566px;
  background: #fbfbfb;
  border-radius: 30px;
  padding: 64px;
`,W$=U.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #11101c;
  margin-bottom: 20px;
`,V$=U.p`
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
  margin-bottom: 40px;
`,H$=U.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
`,G$=U.button`
  width: 100%;
  font-size: 16px;
  background: #103931;
  border-radius: 30px;
  padding-block: 16px;
  font-weight: 500;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  border: none;
  &:hover {
    box-shadow: inset 0 0 10px #103931, 0 0 0 1px #103931;
  }
`,oI=U(z$)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    box-shadow: inset 0 0 10px #103931, 0 0 0 1px #103931;
  }
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,sI=({title:e,handleClick:t,text:n,isRegistration:r,onClose:i})=>{const o=R$({initialValues:{email:"",password:"",name:""},onSubmit:()=>t(o.values.email,o.values.password,o.values.name)});return I.jsxs(B$,{onSubmit:o.handleSubmit,children:[I.jsx(oI,{onClick:i}),I.jsx(W$,{children:e}),I.jsx(V$,{children:n}),I.jsxs(H$,{children:[r&&I.jsx(Uf,{name:"name",type:"text",handleChange:o.handleChange,value:o.values.name}),I.jsx(Uf,{name:"email",type:"email",handleChange:o.handleChange,value:o.values.email}),I.jsx(Uf,{name:"password",type:"password",handleChange:o.handleChange,value:o.values.password})]}),I.jsx(G$,{type:"submit",children:r?"Sign Up":"Log In"})]})},K$=({onClose:e})=>{const t=zc(),n=(r,i)=>{ID(el,r,i).then(({user:o})=>{const s=o.displayName||"";t(Ba({name:s,email:o.email,id:o.uid,token:o.accessToken})),e()}).catch(o=>{console.error("Error:",o)})};return I.jsx(sI,{onClose:e,title:"Log In",handleClick:n,text:"Welcome back! Please enter your credentials to access your account and continue your babysitter search."})},q$=({onClose:e})=>{const t=zc(),n=(r,i,o)=>{TD(el,r,i).then(({user:s})=>{kD(el.currentUser,{displayName:o}).catch(a=>{console.error("Error updating name:",a)}),t(Ba({name:o,email:s.email,id:s.uid,token:s.accessToken})),e()}).catch(s=>{const a=s.code,l=s.message;console.error("Error:",a,l)})};return I.jsx(sI,{onClose:e,title:"Registration",handleClick:n,text:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.",isRegistration:!0})},Y$=e=>E.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},E.createElement("path",{d:"M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z",fill:"#103931"})),Q$=U.div`
  display: flex;
  gap: 9px;
`,J$=U.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,X$=U.div`
  display: flex;
  align-items: center;
  gap: 14px;
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 111%;
    letter-spacing: -0.01em;
    color: ${e=>e.theme.colors.headerText};
  }
`,Z$=U.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${e=>e.theme.colors.headerText};
`,eU=()=>{const{name:e,isAuth:t}=hd(),{modalConfig:n,openModal:r,closeModal:i}=TT(),o=zc(),s=()=>{ND(el).then(()=>o(Ba(null))).catch(a=>console.log(a))};return I.jsxs(Q$,{children:[t?I.jsxs(J$,{children:[I.jsxs(X$,{children:[I.jsx(Z$,{children:I.jsx(Y$,{})}),I.jsx("span",{children:e})]}),I.jsx(ma,{title:"Logout",border:!0,onClick:s})]}):I.jsxs(I.Fragment,{children:[I.jsx(ma,{title:"Log in",border:!0,onClick:()=>r("login")}),I.jsx(ma,{title:"Registration",border:!1,onClick:()=>r("registration")})]}),n.isOpen&&I.jsx(Ug,{onClose:i,children:n.formType==="login"?I.jsx(K$,{onClose:i}):n.formType==="registration"?I.jsx(q$,{onClose:i}):null})]})},tU=U.header`
  position: ${({$main:e})=>e?"absolute":"static"};
  top: 0;
  left: 128px;
  z-index: 1000;
  width: ${({$main:e})=>e?"1184px":"100%"};
  background-color: ${({$main:e,theme:t})=>e?"transparent":t.colors.primaryGreenColor};
`,nU=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  padding-inline: ${({$main:e})=>e?"0":"128px"};
`,rU=U(wE)`
  font-weight: 500;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.headerText};
`,iU=U.div`
  display: flex;
  gap: 92px;
  align-items: center;
`,oU=U.nav`
  display: flex;
  gap: 40px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
`,zf=U(hR)`
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  &.active {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      right: 50%;
      transform: translate(50%, 100%);
      width: 8px;
      height: 8px;
      background-color: #fbfbfb;
      border-radius: 50%;
    }
  }
`,sU=({isFetching:e})=>{const t=Qi(),{pathname:n}=t,{isAuth:r}=hd(),i=n==="/BabySitterHub";return e?I.jsx(Ug,{children:I.jsx("p",{children:"loading..."})}):I.jsx(tU,{$main:i,children:I.jsxs(nU,{$main:i,children:[I.jsx(rU,{to:"/BabySitterHub",children:"Nanny.Services"}),I.jsxs(iU,{children:[I.jsxs(oU,{children:[I.jsx(zf,{to:"/BabySitterHub",end:!0,children:"Home"}),I.jsx(zf,{to:"/BabySitterHub/nannies",children:"Nannies"}),r&&I.jsx(zf,{to:"/BabySitterHub/favorites",children:"Favorites"})]}),I.jsx(eU,{})]})]})})},aU=U.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`,lU=()=>{const e=zc(),[t,n]=E.useState(!0);return E.useEffect(()=>{const r=PD(el,i=>{if(i){const o={name:i.displayName,email:i.email,id:i.uid};e(Ba(o)),n(!1)}else e(Ba(null)),n(!1)});return()=>r()},[e]),I.jsx(fF,{children:I.jsxs(aU,{children:[I.jsx(sU,{isFetching:t}),I.jsx("main",{children:I.jsx(Kb,{})})]})})},uU=e=>E.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 12.5L5 15L12.5 22.5L25 10L22.5 7.5L12.5 17.5L7.5 12.5Z",fill:"#FBFBFB"})),cU=U.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: ${e=>e.theme.colors.mainBackground};
  border-radius: 20px;
  padding: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
`,dU=U.div`
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background: ${e=>e.theme.colors.primaryGreenColor};
  display: flex;
  align-items: center;
  justify-content: center;
`,fU=U.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: ${e=>e.theme.colors.secondaryBodyText};
    margin-bottom: 6px;
  }
  span {
    font-weight: 700;
    font-size: 24px;
    color: ${e=>e.theme.colors.primaryBodyText};
  }
`,hU=()=>I.jsxs(cU,{children:[I.jsx(dU,{children:I.jsx(uU,{})}),I.jsxs(fU,{children:[I.jsx("h2",{children:"Experienced Nannies"}),I.jsx("span",{children:"15,000"})]})]}),pU="/BabySitterHub/assets/MainPageImg-hMIncv30.jpg",mU=e=>E.createElement("svg",{width:15,height:17,viewBox:"0 0 15 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},E.createElement("path",{d:"M12.8229 1.67313C12.7461 1.12622 12.2404 0.745174 11.6935 0.822036L2.78109 2.0746C2.23418 2.15146 1.85313 2.65713 1.92999 3.20404C2.00685 3.75095 2.51252 4.13199 3.05943 4.05513L10.9816 2.94175L12.095 10.8639C12.1718 11.4108 12.6775 11.7918 13.2244 11.715C13.7713 11.6381 14.1524 11.1325 14.0755 10.5855L12.8229 1.67313ZM1.79864 16.7896L12.6313 2.41412L11.034 1.21049L0.201365 15.5859L1.79864 16.7896Z",fill:"#FBFBFB"})),gU=U.section`
  position: relative;
  width: 100%;
  max-width: 1370px;
  margin: 30px;
  border-radius: 30px;
  height: calc(100lvh - 64px);
  display: flex;
  overflow: auto;
  background-color: ${e=>e.theme.colors.primaryGreenColor};
`,yU=U.div`
  width: 517px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 251px 64px 15px 96px;
  color: ${e=>e.theme.colors.headerText};
`,vU=U.h1`
  font-weight: 500;
  font-size: 70px;
  line-height: 100%;
  letter-spacing: -0.03em;
  margin-bottom: 28px;
`,_U=U.p`
  font-size: 28px;
  line-height: 107%;
  letter-spacing: -0.02em;
  margin-bottom: 64px;
`,wU=U.button`
  max-width: 231px;
  display: inline-block;
  color: ${e=>e.theme.colors.headerText};
  border: 1px solid ${e=>e.theme.colors.buttonBorder};
  border-radius: 30px;
  padding: 18px 50px;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.01em;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,EU=U.div`
  width: 699px;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    box-shadow: inset 0 4px 4px 0 rgba(18, 20, 23, 0.6);
  }
`,SU=()=>I.jsxs(gU,{children:[I.jsxs(yU,{children:[I.jsx(vU,{children:"Make Life Easier for the Family:"}),I.jsx(_U,{children:"Find Babysitters Online for All Occasions"}),I.jsxs(wU,{children:["Get started",I.jsx(mU,{})]})]}),I.jsx(EU,{children:I.jsx("img",{src:pU})}),I.jsx(hU,{})]}),CU=()=>I.jsx(SU,{}),TU=e=>E.createElement("svg",{width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},E.createElement("path",{d:"M22.5766 4.99419C22.0233 4.44061 21.3663 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8047 3.40226 16.0817 3.70187C15.3586 4.00147 14.7016 4.44061 14.1483 4.99419L13 6.14252L11.8516 4.99419C10.734 3.87652 9.21809 3.24863 7.63747 3.24863C6.05685 3.24863 4.54097 3.87652 3.4233 4.99419C2.30563 6.11186 1.67773 7.62774 1.67773 9.20836C1.67773 10.789 2.30563 12.3049 3.4233 13.4225L4.57163 14.5709L13 22.9992L21.4283 14.5709L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5693 6.20448 23.1302 5.54751 22.5766 4.99419Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),IU=U.article`
  width: 100%;
  display: flex;
  padding: 24px;
  border-radius: 24px;
  background-color: ${e=>e.theme.colors.headerText};
`,xU=U.div`
  border: 2px solid ${e=>e.theme.colors.photoBorder};
  border-radius: 30px;
  max-width: 120px;
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    border-radius: 15px;
    max-width: 96px;
    height: auto;
  }
  margin-right: 24px;
`,kU=U.div`
  display: flex;
  flex-direction: column;
  gap: ${({$fullInfo:e})=>e?"48px":"14px"};
`,bU=U.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,RU=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,PU=U.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${e=>e.theme.colors.titleText};
  }
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: ${e=>e.theme.colors.primaryBodyText};
  }
`,NU=U.div`
  display: flex;
  gap: 48px;
  align-items: center;
`,AU=U.div`
  display: flex;
  gap: 32px;
  align-items: center;
  p {
    position: relative;
  }
  & > *:not(:last-child)::before {
    content: "";
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 16px;
    background-color: ${e=>e.theme.colors.primaryBodyText};
  }
`,OU=U.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,DU=U.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,LU=U.span`
  span {
    color: ${e=>e.theme.colors.secondaryGreenColor};
  }
`,MU=U.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,FU=U.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${e=>e.theme.colors.secondaryBodyText};
`,jU=U.div`
  display: flex;
  gap: 40px;
  align-items: center;
`,$U=U.button`
  text-align: start;
  border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${e=>e.theme.colors.primaryBodyText};
`,UU=U.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,zU=U(TU)`
  fill: ${({$clicked:e})=>e?"red":"none"};
  stroke: ${({$clicked:e})=>e?"red":"#11101c"};
`,aI=e=>E.createElement("svg",{width:16,height:15,viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},E.createElement("path",{d:"M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5795 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703Z",fill:"#FFC531",stroke:"#FFC531",strokeWidth:1.2})),BU=e=>E.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},E.createElement("g",{clipPath:"url(#clip0_31_1949)"},E.createElement("path",{d:"M14 6.66663C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66663C2 5.07533 2.63214 3.5492 3.75736 2.42399C4.88258 1.29877 6.4087 0.666626 8 0.666626C9.5913 0.666626 11.1174 1.29877 12.2426 2.42399C13.3679 3.5492 14 5.07533 14 6.66663Z",stroke:"#11101C",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),E.createElement("path",{d:"M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z",stroke:"#11101C",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),E.createElement("defs",null,E.createElement("clipPath",{id:"clip0_31_1949"},E.createElement("rect",{width:16,height:16,fill:"white"})))),WU=U.li`
  display: flex;
  gap: 3px;
  align-items: center;
  border-radius: 24px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  background: ${e=>e.theme.colors.mainBackground};
  color: ${e=>e.theme.colors.titleText};
  &:first-child p {
    text-decoration: underline;
  }
  p {
    text-decoration-skip-ink: none;
    color: ${e=>e.theme.colors.primaryBodyText};
  }
`,Vs=({label:e,value:t})=>I.jsxs(WU,{children:[I.jsx("span",{children:e}),I.jsx("p",{children:t})]}),VU=U.article`
  max-width: 433px;
`,HU=U.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,GU=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 44px;
  height: 44px;
  background: ${e=>e.theme.colors.additionalGreenColor};
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${e=>e.theme.colors.primaryGreenColor};
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`,KU=U.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
`,qU=U.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: ${e=>e.theme.colors.primaryBodyText};
`,YU=U.span`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${e=>e.theme.colors.primaryBodyText};
`,QU=U.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${e=>e.theme.colors.secondaryBodyText};
`,JU=({review:e})=>{const{reviewer:t,rating:n,comment:r}=e;return I.jsxs(VU,{children:[I.jsxs(HU,{children:[I.jsx(GU,{children:e.avatar?I.jsx("img",{src:e.avatar}):I.jsx("span",{children:t.charAt(0).toUpperCase()})}),I.jsxs(KU,{children:[I.jsx(qU,{children:t}),I.jsxs(YU,{children:[I.jsx(aI,{}),I.jsx("span",{children:n.toString().length===1?`${n}.0`:n})]})]})]}),I.jsx(QU,{children:r})]})},XU=U.div`
  border-radius: 30px;
  width: 600px;
  height: auto;
  background: #fbfbfb;
  position: relative;
  padding: 34px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`,ZU=U.div`
  h3 {
    max-width: 400px;
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #11101c;
    margin-bottom: 20px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: rgba(17, 16, 28, 0.5);
  }
`,e5=U.div`
  display: flex;
  align-items: center;
  gap: 14px;

  img {
    border-radius: 15px;
    width: 44px;
    height: 44px;
  }
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    color: #8a8a89;
    margin-bottom: 4px;
  }
  h4 {
    font-weight: 500;
    line-height: 150%;
    color: #11101c;
  }
`,t5=U.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, auto);
  grid-row-gap: 10px;
  grid-column-gap: 8px;
`,n5=U.textarea`
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  grid-column: span 2;
  height: 86px;
  resize: none;
  &:focus,
  &:hover {
    outline: #103931 solid 1px;
  }
`,ho=({name:e,type:t,placeholder:n,value:r,onChange:i,isGridStretchRow:o})=>I.jsx(iI,{name:e,type:t,placeholder:n,value:r,onChange:i,$isGridStretchRow:o}),r5=({onClose:e,nanny:t})=>{const{name:n,avatar_url:r}=t;return I.jsxs(XU,{children:[I.jsx(oI,{onClick:e}),I.jsxs(ZU,{children:[I.jsx("h3",{children:"Make an appointment with a babysitter"}),I.jsx("p",{children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."})]}),I.jsxs(e5,{children:[I.jsx("img",{src:r,alt:"Portrait of the babysitter"}),I.jsxs("div",{children:[I.jsx("span",{children:"Your nanny"}),I.jsx("h4",{children:n})]})]}),I.jsxs(t5,{children:[I.jsx(ho,{name:"address",type:"text",placeholder:"Address"}),I.jsx(ho,{name:"phone",type:"tel",placeholder:"+380"}),I.jsx(ho,{name:"child_age",type:"number",placeholder:"Child's age"}),I.jsx(ho,{name:"time",type:"time",placeholder:"00:00"}),I.jsx(ho,{name:"email",type:"email",placeholder:"Email",isGridStretchRow:"true"}),I.jsx(ho,{name:"parent_name",type:"text",placeholder:"Father's or mother's name",isGridStretchRow:"true"}),I.jsx(n5,{placeholder:"Comment"})]}),I.jsx(ma,{title:"Send",border:!1,padding:"14px"})]})},i5=e=>{const t=new Date(e),n=new Date;let r=n.getFullYear()-t.getFullYear();const i=n.getMonth()-t.getMonth();return(i<0||i===0&&n.getDate()<t.getDate())&&r--,r},o5=({nanny:e})=>{const{currentUser:t,isAuth:n}=hd(),[r,i]=E.useState(!1),{modalConfig:o,openModal:s,closeModal:a}=TT(),[l,u]=E.useState(null),[c,d]=E.useState(null),{about:f,avatar_url:m,birthday:y,characters:_,education:w,experience:p,id:h,kids_age:g,location:C,name:b,price_per_hour:v,rating:S,reviews:P}=e;if(!e)return null;E.useEffect(()=>{u(e);const ee=(JSON.parse(localStorage.getItem("favorites"))||[]).some(Ee=>Ee.id===e.id);d(ee)},[e]);const O=_.map(ue=>ue.charAt(0).toUpperCase()+ue.slice(1)).join(", "),$=()=>{s("appointment",l)},Q=()=>{if(n){const ue=JSON.parse(localStorage.getItem("favorites"))||[],ee=ue.some(Ee=>Ee.id===l.id);if(console.log(t),lF(t.id,ue),ee){const Ee=ue.filter(zt=>zt.id!==l.id);localStorage.setItem("favorites",JSON.stringify(Ee)),d(!1)}else ue.push(l),localStorage.setItem("favorites",JSON.stringify(ue)),d(!0)}else s("login")};return I.jsxs(IU,{children:[I.jsx(xU,{children:I.jsx("img",{src:m,alt:"Portrait of the babysitter"})}),I.jsxs(kU,{$fullInfo:r,children:[I.jsxs(bU,{children:[I.jsxs(RU,{children:[I.jsxs(PU,{children:[I.jsx("span",{children:"Nanny"}),I.jsx("h2",{children:b})]}),I.jsxs(NU,{children:[I.jsxs(AU,{children:[I.jsxs(OU,{children:[I.jsx(BU,{}),I.jsx("p",{children:C})]}),I.jsxs(DU,{children:[I.jsx(aI,{}),I.jsxs("p",{children:["Rating: ",S]})]}),I.jsxs(LU,{children:["Price / 1 hour:",I.jsxs("span",{children:[" ",v,"$"]})]})]}),I.jsx(zU,{onClick:Q,$clicked:c})]})]}),I.jsxs(MU,{children:[I.jsx(Vs,{label:"Age:",value:i5(y)}),I.jsx(Vs,{label:"Experience:",value:p}),I.jsx(Vs,{label:"Kids age:",value:g}),I.jsx(Vs,{label:"Characters:",value:O}),I.jsx(Vs,{label:"Education:",value:w})]}),I.jsx(FU,{children:f})]}),r&&I.jsx(UU,{children:P.map((ue,ee)=>I.jsx(JU,{review:ue},ee))}),I.jsxs(jU,{children:[r&&I.jsx(ma,{title:"Make an appointment",border:!1,padding:"14px 28px",onClick:$}),I.jsx($U,{onClick:()=>i(!r),children:r?"Show less":"Read more"})]})]}),o.isOpen&&o.formType==="appointment"&&I.jsx(Ug,{onClose:a,children:I.jsx(r5,{onClose:a,nanny:o.selectedNanny})})]})},s5=({nannies:e})=>I.jsx("ul",{children:e.map(t=>I.jsx(o5,{nanny:t},t.id))}),a5=({children:e})=>{const{isAuth:t}=hd();return t?e:I.jsx(Gb,{to:"/BabySitterHub"})},l5=()=>{const[e,t]=E.useState([]);return E.useEffect(()=>{const n=JSON.parse(localStorage.getItem("favorites"))||[];t(n)},[t]),I.jsx("div",{children:I.jsx(s5,{nannies:e})})},u5=tR([{element:I.jsx(lU,{}),errorElement:I.jsx(dF,{}),children:[{path:"/BabySitterHub",element:I.jsx(CU,{})},{path:"/BabySitterHub/nannies",lazy:async()=>{let{Catalog:e}=await pI(()=>import("./Catalog-eY9wLKXW.js"),__vite__mapDeps([]));return{Component:e}}},{path:"/BabySitterHub/favorites",lazy:async()=>({Component:()=>I.jsx(a5,{children:I.jsx(l5,{})})})}]}]);Wf.createRoot(document.getElementById("root")).render(I.jsx(Nt.StrictMode,{children:I.jsx(FR,{store:GN,children:I.jsxs(jP,{theme:cF,children:[I.jsx(uF,{}),I.jsx(E.Suspense,{fallback:I.jsx(I.Fragment,{children:"loading"}),children:I.jsx(uR,{router:u5})})]})})}));export{o5 as C,W3 as a,d5 as b,aF as d,I as j,h5 as l,p5 as o,m5 as q,E as r,f5 as s,U as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
