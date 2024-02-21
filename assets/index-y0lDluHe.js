var Kb=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var a7=Kb((ln,un)=>{function t1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Yb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n1={exports:{}},od={},r1={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kl=Symbol.for("react.element"),qb=Symbol.for("react.portal"),Qb=Symbol.for("react.fragment"),Xb=Symbol.for("react.strict_mode"),Jb=Symbol.for("react.profiler"),Zb=Symbol.for("react.provider"),eI=Symbol.for("react.context"),tI=Symbol.for("react.forward_ref"),nI=Symbol.for("react.suspense"),rI=Symbol.for("react.memo"),iI=Symbol.for("react.lazy"),lv=Symbol.iterator;function sI(t){return t===null||typeof t!="object"?null:(t=lv&&t[lv]||t["@@iterator"],typeof t=="function"?t:null)}var i1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s1=Object.assign,o1={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=o1,this.updater=n||i1}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a1(){}a1.prototype=Mo.prototype;function Im(t,e,n){this.props=t,this.context=e,this.refs=o1,this.updater=n||i1}var km=Im.prototype=new a1;km.constructor=Im;s1(km,Mo.prototype);km.isPureReactComponent=!0;var uv=Array.isArray,l1=Object.prototype.hasOwnProperty,Rm={current:null},u1={key:!0,ref:!0,__self:!0,__source:!0};function c1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)l1.call(e,r)&&!u1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:kl,type:t,key:s,ref:o,props:i,_owner:Rm.current}}function oI(t,e){return{$$typeof:kl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pm(t){return typeof t=="object"&&t!==null&&t.$$typeof===kl}function aI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cv=/\/+/g;function Cf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?aI(""+t.key):e.toString(36)}function Tu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case kl:case qb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cf(o,0):r,uv(i)?(n="",t!=null&&(n=t.replace(cv,"$&/")+"/"),Tu(i,e,n,"",function(u){return u})):i!=null&&(Pm(i)&&(i=oI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",uv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Cf(s,a);o+=Tu(s,e,n,l,i)}else if(l=sI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Cf(s,a++),o+=Tu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Jl(t,e,n){if(t==null)return t;var r=[],i=0;return Tu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},bu={transition:null},uI={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:bu,ReactCurrentOwner:Rm};Ee.Children={map:Jl,forEach:function(t,e,n){Jl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Jl(t,function(){e++}),e},toArray:function(t){return Jl(t,function(e){return e})||[]},only:function(t){if(!Pm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ee.Component=Mo;Ee.Fragment=Qb;Ee.Profiler=Jb;Ee.PureComponent=Im;Ee.StrictMode=Xb;Ee.Suspense=nI;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uI;Ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=s1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)l1.call(e,l)&&!u1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:kl,type:t.type,key:i,ref:s,props:r,_owner:o}};Ee.createContext=function(t){return t={$$typeof:eI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zb,_context:t},t.Consumer=t};Ee.createElement=c1;Ee.createFactory=function(t){var e=c1.bind(null,t);return e.type=t,e};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(t){return{$$typeof:tI,render:t}};Ee.isValidElement=Pm;Ee.lazy=function(t){return{$$typeof:iI,_payload:{_status:-1,_result:t},_init:lI}};Ee.memo=function(t,e){return{$$typeof:rI,type:t,compare:e===void 0?null:e}};Ee.startTransition=function(t){var e=bu.transition;bu.transition={};try{t()}finally{bu.transition=e}};Ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ee.useCallback=function(t,e){return Wt.current.useCallback(t,e)};Ee.useContext=function(t){return Wt.current.useContext(t)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};Ee.useEffect=function(t,e){return Wt.current.useEffect(t,e)};Ee.useId=function(){return Wt.current.useId()};Ee.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};Ee.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};Ee.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};Ee.useMemo=function(t,e){return Wt.current.useMemo(t,e)};Ee.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};Ee.useRef=function(t){return Wt.current.useRef(t)};Ee.useState=function(t){return Wt.current.useState(t)};Ee.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};Ee.useTransition=function(){return Wt.current.useTransition()};Ee.version="18.2.0";r1.exports=Ee;var C=r1.exports;const ot=sd(C),Mh=t1({__proto__:null,default:ot},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cI=C,dI=Symbol.for("react.element"),fI=Symbol.for("react.fragment"),hI=Object.prototype.hasOwnProperty,pI=cI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mI={key:!0,ref:!0,__self:!0,__source:!0};function d1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hI.call(e,r)&&!mI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dI,type:t,key:s,ref:o,props:i,_owner:pI.current}}od.Fragment=fI;od.jsx=d1;od.jsxs=d1;n1.exports=od;var x=n1.exports,Lh={},f1={exports:{}},pn={},h1={exports:{}},p1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var q=z.length;z.push(K);e:for(;0<q;){var ne=q-1>>>1,se=z[ne];if(0<i(se,K))z[ne]=K,z[q]=se,q=ne;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],q=z.pop();if(q!==K){z[0]=q;e:for(var ne=0,se=z.length,at=se>>>1;ne<at;){var Re=2*(ne+1)-1,Le=z[Re],Se=Re+1,$e=z[Se];if(0>i(Le,q))Se<se&&0>i($e,Le)?(z[ne]=$e,z[Se]=q,ne=Se):(z[ne]=Le,z[Re]=q,ne=Re);else if(Se<se&&0>i($e,q))z[ne]=$e,z[Se]=q,ne=Se;else break e}}return K}function i(z,K){var q=z.sortIndex-K.sortIndex;return q!==0?q:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(z){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=z)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function E(z){if(v=!1,y(z),!g)if(n(l)!==null)g=!0,Oe(T);else{var K=n(u);K!==null&&de(E,K.startTime-z)}}function T(z,K){g=!1,v&&(v=!1,m(P),P=-1),p=!0;var q=f;try{for(y(K),d=n(l);d!==null&&(!(d.expirationTime>K)||z&&!N());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var se=ne(d.expirationTime<=K);K=t.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&r(l),y(K)}else r(l);d=n(l)}if(d!==null)var at=!0;else{var Re=n(u);Re!==null&&de(E,Re.startTime-K),at=!1}return at}finally{d=null,f=q,p=!1}}var _=!1,S=null,P=-1,k=5,A=-1;function N(){return!(t.unstable_now()-A<k)}function G(){if(S!==null){var z=t.unstable_now();A=z;var K=!0;try{K=S(!0,z)}finally{K?j():(_=!1,S=null)}}else _=!1}var j;if(typeof h=="function")j=function(){h(G)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,Ie=Z.port2;Z.port1.onmessage=G,j=function(){Ie.postMessage(null)}}else j=function(){w(G,0)};function Oe(z){S=z,_||(_=!0,j())}function de(z,K){P=w(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Oe(T))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var q=f;f=K;try{return z()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=f;f=z;try{return K()}finally{f=q}},t.unstable_scheduleCallback=function(z,K,q){var ne=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ne+q:ne):q=ne,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=q+se,z={id:c++,callback:K,priorityLevel:z,startTime:q,expirationTime:se,sortIndex:-1},q>ne?(z.sortIndex=q,e(u,z),n(l)===null&&z===n(u)&&(v?(m(P),P=-1):v=!0,de(E,q-ne))):(z.sortIndex=se,e(l,z),g||p||(g=!0,Oe(T))),z},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(z){var K=f;return function(){var q=f;f=K;try{return z.apply(this,arguments)}finally{f=q}}}})(p1);h1.exports=p1;var gI=h1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1=C,dn=gI;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g1=new Set,Ba={};function gs(t,e){fo(t,e),fo(t+"Capture",e)}function fo(t,e){for(Ba[t]=e,t=0;t<e.length;t++)g1.add(e[t])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jh=Object.prototype.hasOwnProperty,yI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dv={},fv={};function vI(t){return jh.call(fv,t)?!0:jh.call(dv,t)?!1:yI.test(t)?fv[t]=!0:(dv[t]=!0,!1)}function _I(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wI(t,e,n,r){if(e===null||typeof e>"u"||_I(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];At[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Om=/[\-:]([a-z])/g;function Am(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Om,Am);At[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Om,Am);At[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Om,Am);At[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nm(t,e,n,r){var i=At.hasOwnProperty(e)?At[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wI(e,n,i,r)&&(n=null),r||i===null?vI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kr=m1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zl=Symbol.for("react.element"),js=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),Dm=Symbol.for("react.strict_mode"),Fh=Symbol.for("react.profiler"),y1=Symbol.for("react.provider"),v1=Symbol.for("react.context"),Mm=Symbol.for("react.forward_ref"),$h=Symbol.for("react.suspense"),Uh=Symbol.for("react.suspense_list"),Lm=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),_1=Symbol.for("react.offscreen"),hv=Symbol.iterator;function Qo(t){return t===null||typeof t!="object"?null:(t=hv&&t[hv]||t["@@iterator"],typeof t=="function"?t:null)}var et=Object.assign,Tf;function ga(t){if(Tf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tf=e&&e[1]||""}return`
`+Tf+t}var bf=!1;function If(t,e){if(!t||bf)return"";bf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ga(t):""}function xI(t){switch(t.tag){case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 2:case 15:return t=If(t.type,!1),t;case 11:return t=If(t.type.render,!1),t;case 1:return t=If(t.type,!0),t;default:return""}}function zh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fs:return"Fragment";case js:return"Portal";case Fh:return"Profiler";case Dm:return"StrictMode";case $h:return"Suspense";case Uh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v1:return(t.displayName||"Context")+".Consumer";case y1:return(t._context.displayName||"Context")+".Provider";case Mm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lm:return e=t.displayName||null,e!==null?e:zh(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return zh(t(e))}catch{}}return null}function EI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zh(e);case 8:return e===Dm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SI(t){var e=w1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eu(t){t._valueTracker||(t._valueTracker=SI(t))}function x1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=w1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bh(t,e){var n=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function E1(t,e){e=e.checked,e!=null&&Nm(t,"checked",e,!1)}function Wh(t,e){E1(t,e);var n=ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vh(t,e.type,ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vh(t,e,n){(e!=="number"||qu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function to(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(ya(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ci(n)}}function S1(t,e){var n=ci(e.value),r=ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function C1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?C1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tu,T1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tu=tu||document.createElement("div"),tu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CI=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){CI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function b1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function I1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=b1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TI=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kh(t,e){if(e){if(TI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Yh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qh=null;function jm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qh=null,no=null,ro=null;function vv(t){if(t=Ol(t)){if(typeof Qh!="function")throw Error(L(280));var e=t.stateNode;e&&(e=dd(e),Qh(t.stateNode,t.type,e))}}function k1(t){no?ro?ro.push(t):ro=[t]:no=t}function R1(){if(no){var t=no,e=ro;if(ro=no=null,vv(t),e)for(t=0;t<e.length;t++)vv(e[t])}}function P1(t,e){return t(e)}function O1(){}var kf=!1;function A1(t,e,n){if(kf)return t(e,n);kf=!0;try{return P1(t,e,n)}finally{kf=!1,(no!==null||ro!==null)&&(O1(),R1())}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var r=dd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Xh=!1;if(wr)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){Xh=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{Xh=!1}function bI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ta=!1,Qu=null,Xu=!1,Jh=null,II={onError:function(t){Ta=!0,Qu=t}};function kI(t,e,n,r,i,s,o,a,l){Ta=!1,Qu=null,bI.apply(II,arguments)}function RI(t,e,n,r,i,s,o,a,l){if(kI.apply(this,arguments),Ta){if(Ta){var u=Qu;Ta=!1,Qu=null}else throw Error(L(198));Xu||(Xu=!0,Jh=u)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function N1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _v(t){if(ys(t)!==t)throw Error(L(188))}function PI(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _v(i),t;if(s===r)return _v(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function D1(t){return t=PI(t),t!==null?M1(t):null}function M1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=M1(t);if(e!==null)return e;t=t.sibling}return null}var L1=dn.unstable_scheduleCallback,wv=dn.unstable_cancelCallback,OI=dn.unstable_shouldYield,AI=dn.unstable_requestPaint,st=dn.unstable_now,NI=dn.unstable_getCurrentPriorityLevel,Fm=dn.unstable_ImmediatePriority,j1=dn.unstable_UserBlockingPriority,Ju=dn.unstable_NormalPriority,DI=dn.unstable_LowPriority,F1=dn.unstable_IdlePriority,ad=null,Jn=null;function MI(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(ad,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:FI,LI=Math.log,jI=Math.LN2;function FI(t){return t>>>=0,t===0?32:31-(LI(t)/jI|0)|0}var nu=64,ru=4194304;function va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=va(a):(s&=o,s!==0&&(r=va(s)))}else o=n&~i,o!==0?r=va(o):s!==0&&(r=va(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$n(e),i=1<<n,r|=t[n],e&=~i;return r}function $I(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=$I(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Zh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $1(){var t=nu;return nu<<=1,!(nu&4194240)&&(nu=64),t}function Rf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function zI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $m(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ne=0;function U1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z1,Um,B1,W1,V1,ep=!1,iu=[],Yr=null,qr=null,Qr=null,Ha=new Map,Ga=new Map,Ur=[],BI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xv(t,e){switch(t){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":Ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function Jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ol(e),e!==null&&Um(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function WI(t,e,n,r,i){switch(e){case"focusin":return Yr=Jo(Yr,t,e,n,r,i),!0;case"dragenter":return qr=Jo(qr,t,e,n,r,i),!0;case"mouseover":return Qr=Jo(Qr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ha.set(s,Jo(Ha.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ga.set(s,Jo(Ga.get(s)||null,t,e,n,r,i)),!0}return!1}function H1(t){var e=ji(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=N1(n),e!==null){t.blockedOn=e,V1(t.priority,function(){B1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Iu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qh=r,n.target.dispatchEvent(r),qh=null}else return e=Ol(n),e!==null&&Um(e),t.blockedOn=n,!1;e.shift()}return!0}function Ev(t,e,n){Iu(t)&&n.delete(e)}function VI(){ep=!1,Yr!==null&&Iu(Yr)&&(Yr=null),qr!==null&&Iu(qr)&&(qr=null),Qr!==null&&Iu(Qr)&&(Qr=null),Ha.forEach(Ev),Ga.forEach(Ev)}function Zo(t,e){t.blockedOn===e&&(t.blockedOn=null,ep||(ep=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,VI)))}function Ka(t){function e(i){return Zo(i,t)}if(0<iu.length){Zo(iu[0],t);for(var n=1;n<iu.length;n++){var r=iu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yr!==null&&Zo(Yr,t),qr!==null&&Zo(qr,t),Qr!==null&&Zo(Qr,t),Ha.forEach(e),Ga.forEach(e),n=0;n<Ur.length;n++)r=Ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ur.length&&(n=Ur[0],n.blockedOn===null);)H1(n),n.blockedOn===null&&Ur.shift()}var io=kr.ReactCurrentBatchConfig,ec=!0;function HI(t,e,n,r){var i=Ne,s=io.transition;io.transition=null;try{Ne=1,zm(t,e,n,r)}finally{Ne=i,io.transition=s}}function GI(t,e,n,r){var i=Ne,s=io.transition;io.transition=null;try{Ne=4,zm(t,e,n,r)}finally{Ne=i,io.transition=s}}function zm(t,e,n,r){if(ec){var i=tp(t,e,n,r);if(i===null)$f(t,e,r,tc,n),xv(t,r);else if(WI(i,t,e,n,r))r.stopPropagation();else if(xv(t,r),e&4&&-1<BI.indexOf(t)){for(;i!==null;){var s=Ol(i);if(s!==null&&z1(s),s=tp(t,e,n,r),s===null&&$f(t,e,r,tc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $f(t,e,r,null,n)}}var tc=null;function tp(t,e,n,r){if(tc=null,t=jm(r),t=ji(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=N1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tc=t,null}function G1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NI()){case Fm:return 1;case j1:return 4;case Ju:case DI:return 16;case F1:return 536870912;default:return 16}default:return 16}}var Gr=null,Bm=null,ku=null;function K1(){if(ku)return ku;var t,e=Bm,n=e.length,r,i="value"in Gr?Gr.value:Gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ku=i.slice(t,1<r?1-r:void 0)}function Ru(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function su(){return!0}function Sv(){return!1}function mn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?su:Sv,this.isPropagationStopped=Sv,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=su)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=su)},persist:function(){},isPersistent:su}),e}var Lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wm=mn(Lo),Pl=et({},Lo,{view:0,detail:0}),KI=mn(Pl),Pf,Of,ea,ld=et({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(Pf=t.screenX-ea.screenX,Of=t.screenY-ea.screenY):Of=Pf=0,ea=t),Pf)},movementY:function(t){return"movementY"in t?t.movementY:Of}}),Cv=mn(ld),YI=et({},ld,{dataTransfer:0}),qI=mn(YI),QI=et({},Pl,{relatedTarget:0}),Af=mn(QI),XI=et({},Lo,{animationName:0,elapsedTime:0,pseudoElement:0}),JI=mn(XI),ZI=et({},Lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ek=mn(ZI),tk=et({},Lo,{data:0}),Tv=mn(tk),nk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ik={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ik[t])?!!e[t]:!1}function Vm(){return sk}var ok=et({},Pl,{key:function(t){if(t.key){var e=nk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ru(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vm,charCode:function(t){return t.type==="keypress"?Ru(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ru(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ak=mn(ok),lk=et({},ld,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bv=mn(lk),uk=et({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vm}),ck=mn(uk),dk=et({},Lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),fk=mn(dk),hk=et({},ld,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pk=mn(hk),mk=[9,13,27,32],Hm=wr&&"CompositionEvent"in window,ba=null;wr&&"documentMode"in document&&(ba=document.documentMode);var gk=wr&&"TextEvent"in window&&!ba,Y1=wr&&(!Hm||ba&&8<ba&&11>=ba),Iv=" ",kv=!1;function q1(t,e){switch(t){case"keyup":return mk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function yk(t,e){switch(t){case"compositionend":return Q1(e);case"keypress":return e.which!==32?null:(kv=!0,Iv);case"textInput":return t=e.data,t===Iv&&kv?null:t;default:return null}}function vk(t,e){if($s)return t==="compositionend"||!Hm&&q1(t,e)?(t=K1(),ku=Bm=Gr=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y1&&e.locale!=="ko"?null:e.data;default:return null}}var _k={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_k[t.type]:e==="textarea"}function X1(t,e,n,r){k1(r),e=nc(e,"onChange"),0<e.length&&(n=new Wm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ia=null,Ya=null;function wk(t){lx(t,0)}function ud(t){var e=Bs(t);if(x1(e))return t}function xk(t,e){if(t==="change")return e}var J1=!1;if(wr){var Nf;if(wr){var Df="oninput"in document;if(!Df){var Pv=document.createElement("div");Pv.setAttribute("oninput","return;"),Df=typeof Pv.oninput=="function"}Nf=Df}else Nf=!1;J1=Nf&&(!document.documentMode||9<document.documentMode)}function Ov(){Ia&&(Ia.detachEvent("onpropertychange",Z1),Ya=Ia=null)}function Z1(t){if(t.propertyName==="value"&&ud(Ya)){var e=[];X1(e,Ya,t,jm(t)),A1(wk,e)}}function Ek(t,e,n){t==="focusin"?(Ov(),Ia=e,Ya=n,Ia.attachEvent("onpropertychange",Z1)):t==="focusout"&&Ov()}function Sk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ud(Ya)}function Ck(t,e){if(t==="click")return ud(e)}function Tk(t,e){if(t==="input"||t==="change")return ud(e)}function bk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:bk;function qa(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jh.call(e,i)||!Wn(t[i],e[i]))return!1}return!0}function Av(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nv(t,e){var n=Av(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Av(n)}}function ex(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ex(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tx(){for(var t=window,e=qu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qu(t.document)}return e}function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ik(t){var e=tx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ex(n.ownerDocument.documentElement,n)){if(r!==null&&Gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Nv(n,s);var o=Nv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kk=wr&&"documentMode"in document&&11>=document.documentMode,Us=null,np=null,ka=null,rp=!1;function Dv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rp||Us==null||Us!==qu(r)||(r=Us,"selectionStart"in r&&Gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ka&&qa(ka,r)||(ka=r,r=nc(np,"onSelect"),0<r.length&&(e=new Wm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Us)))}function ou(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zs={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},Mf={},nx={};wr&&(nx=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function cd(t){if(Mf[t])return Mf[t];if(!zs[t])return t;var e=zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nx)return Mf[t]=e[n];return t}var rx=cd("animationend"),ix=cd("animationiteration"),sx=cd("animationstart"),ox=cd("transitionend"),ax=new Map,Mv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wi(t,e){ax.set(t,e),gs(e,[t])}for(var Lf=0;Lf<Mv.length;Lf++){var jf=Mv[Lf],Rk=jf.toLowerCase(),Pk=jf[0].toUpperCase()+jf.slice(1);wi(Rk,"on"+Pk)}wi(rx,"onAnimationEnd");wi(ix,"onAnimationIteration");wi(sx,"onAnimationStart");wi("dblclick","onDoubleClick");wi("focusin","onFocus");wi("focusout","onBlur");wi(ox,"onTransitionEnd");fo("onMouseEnter",["mouseout","mouseover"]);fo("onMouseLeave",["mouseout","mouseover"]);fo("onPointerEnter",["pointerout","pointerover"]);fo("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ok=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Lv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,RI(r,e,void 0,t),t.currentTarget=null}function lx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Lv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Lv(i,a,u),s=l}}}if(Xu)throw t=Jh,Xu=!1,Jh=null,t}function Ve(t,e){var n=e[lp];n===void 0&&(n=e[lp]=new Set);var r=t+"__bubble";n.has(r)||(ux(e,t,2,!1),n.add(r))}function Ff(t,e,n){var r=0;e&&(r|=4),ux(n,t,r,e)}var au="_reactListening"+Math.random().toString(36).slice(2);function Qa(t){if(!t[au]){t[au]=!0,g1.forEach(function(n){n!=="selectionchange"&&(Ok.has(n)||Ff(n,!1,t),Ff(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[au]||(e[au]=!0,Ff("selectionchange",!1,e))}}function ux(t,e,n,r){switch(G1(e)){case 1:var i=HI;break;case 4:i=GI;break;default:i=zm}n=i.bind(null,e,n,t),i=void 0,!Xh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $f(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ji(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}A1(function(){var u=s,c=jm(n),d=[];e:{var f=ax.get(t);if(f!==void 0){var p=Wm,g=t;switch(t){case"keypress":if(Ru(n)===0)break e;case"keydown":case"keyup":p=ak;break;case"focusin":g="focus",p=Af;break;case"focusout":g="blur",p=Af;break;case"beforeblur":case"afterblur":p=Af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=qI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ck;break;case rx:case ix:case sx:p=JI;break;case ox:p=fk;break;case"scroll":p=KI;break;case"wheel":p=pk;break;case"copy":case"cut":case"paste":p=ek;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bv}var v=(e&4)!==0,w=!v&&t==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,y;h!==null;){y=h;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,m!==null&&(E=Va(h,m),E!=null&&v.push(Xa(h,E,y)))),w)break;h=h.return}0<v.length&&(f=new p(f,g,null,n,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==qh&&(g=n.relatedTarget||n.fromElement)&&(ji(g)||g[xr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?ji(g):null,g!==null&&(w=ys(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=Cv,E="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=bv,E="onPointerLeave",m="onPointerEnter",h="pointer"),w=p==null?f:Bs(p),y=g==null?f:Bs(g),f=new v(E,h+"leave",p,n,c),f.target=w,f.relatedTarget=y,E=null,ji(c)===u&&(v=new v(m,h+"enter",g,n,c),v.target=y,v.relatedTarget=w,E=v),w=E,p&&g)t:{for(v=p,m=g,h=0,y=v;y;y=As(y))h++;for(y=0,E=m;E;E=As(E))y++;for(;0<h-y;)v=As(v),h--;for(;0<y-h;)m=As(m),y--;for(;h--;){if(v===m||m!==null&&v===m.alternate)break t;v=As(v),m=As(m)}v=null}else v=null;p!==null&&jv(d,f,p,v,!1),g!==null&&w!==null&&jv(d,w,g,v,!0)}}e:{if(f=u?Bs(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=xk;else if(Rv(f))if(J1)T=Tk;else{T=Sk;var _=Ek}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=Ck);if(T&&(T=T(t,u))){X1(d,T,n,c);break e}_&&_(t,f,u),t==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Vh(f,"number",f.value)}switch(_=u?Bs(u):window,t){case"focusin":(Rv(_)||_.contentEditable==="true")&&(Us=_,np=u,ka=null);break;case"focusout":ka=np=Us=null;break;case"mousedown":rp=!0;break;case"contextmenu":case"mouseup":case"dragend":rp=!1,Dv(d,n,c);break;case"selectionchange":if(kk)break;case"keydown":case"keyup":Dv(d,n,c)}var S;if(Hm)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $s?q1(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Y1&&n.locale!=="ko"&&($s||P!=="onCompositionStart"?P==="onCompositionEnd"&&$s&&(S=K1()):(Gr=c,Bm="value"in Gr?Gr.value:Gr.textContent,$s=!0)),_=nc(u,P),0<_.length&&(P=new Tv(P,t,null,n,c),d.push({event:P,listeners:_}),S?P.data=S:(S=Q1(n),S!==null&&(P.data=S)))),(S=gk?yk(t,n):vk(t,n))&&(u=nc(u,"onBeforeInput"),0<u.length&&(c=new Tv("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}lx(d,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Va(t,n),s!=null&&r.unshift(Xa(t,s,i)),s=Va(t,e),s!=null&&r.push(Xa(t,s,i))),t=t.return}return r}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Va(n,s),l!=null&&o.unshift(Xa(n,l,a))):i||(l=Va(n,s),l!=null&&o.push(Xa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ak=/\r\n?/g,Nk=/\u0000|\uFFFD/g;function Fv(t){return(typeof t=="string"?t:""+t).replace(Ak,`
`).replace(Nk,"")}function lu(t,e,n){if(e=Fv(e),Fv(t)!==e&&n)throw Error(L(425))}function rc(){}var ip=null,sp=null;function op(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ap=typeof setTimeout=="function"?setTimeout:void 0,Dk=typeof clearTimeout=="function"?clearTimeout:void 0,$v=typeof Promise=="function"?Promise:void 0,Mk=typeof queueMicrotask=="function"?queueMicrotask:typeof $v<"u"?function(t){return $v.resolve(null).then(t).catch(Lk)}:ap;function Lk(t){setTimeout(function(){throw t})}function Uf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ka(e)}function Xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var jo=Math.random().toString(36).slice(2),Xn="__reactFiber$"+jo,Ja="__reactProps$"+jo,xr="__reactContainer$"+jo,lp="__reactEvents$"+jo,jk="__reactListeners$"+jo,Fk="__reactHandles$"+jo;function ji(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xr]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uv(t);t!==null;){if(n=t[Xn])return n;t=Uv(t)}return e}t=n,n=t.parentNode}return null}function Ol(t){return t=t[Xn]||t[xr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function dd(t){return t[Ja]||null}var up=[],Ws=-1;function xi(t){return{current:t}}function Ye(t){0>Ws||(t.current=up[Ws],up[Ws]=null,Ws--)}function We(t,e){Ws++,up[Ws]=t.current,t.current=e}var di={},Ft=xi(di),Qt=xi(!1),Ji=di;function ho(t,e){var n=t.type.contextTypes;if(!n)return di;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Xt(t){return t=t.childContextTypes,t!=null}function ic(){Ye(Qt),Ye(Ft)}function zv(t,e,n){if(Ft.current!==di)throw Error(L(168));We(Ft,e),We(Qt,n)}function cx(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,EI(t)||"Unknown",i));return et({},n,r)}function sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||di,Ji=Ft.current,We(Ft,t),We(Qt,Qt.current),!0}function Bv(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=cx(t,e,Ji),r.__reactInternalMemoizedMergedChildContext=t,Ye(Qt),Ye(Ft),We(Ft,t)):Ye(Qt),We(Qt,n)}var ur=null,fd=!1,zf=!1;function dx(t){ur===null?ur=[t]:ur.push(t)}function $k(t){fd=!0,dx(t)}function Ei(){if(!zf&&ur!==null){zf=!0;var t=0,e=Ne;try{var n=ur;for(Ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ur=null,fd=!1}catch(i){throw ur!==null&&(ur=ur.slice(t+1)),L1(Fm,Ei),i}finally{Ne=e,zf=!1}}return null}var Vs=[],Hs=0,oc=null,ac=0,xn=[],En=0,Zi=null,dr=1,fr="";function Pi(t,e){Vs[Hs++]=ac,Vs[Hs++]=oc,oc=t,ac=e}function fx(t,e,n){xn[En++]=dr,xn[En++]=fr,xn[En++]=Zi,Zi=t;var r=dr;t=fr;var i=32-$n(r)-1;r&=~(1<<i),n+=1;var s=32-$n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dr=1<<32-$n(e)+i|n<<i|r,fr=s+t}else dr=1<<s|n<<i|r,fr=t}function Km(t){t.return!==null&&(Pi(t,1),fx(t,1,0))}function Ym(t){for(;t===oc;)oc=Vs[--Hs],Vs[Hs]=null,ac=Vs[--Hs],Vs[Hs]=null;for(;t===Zi;)Zi=xn[--En],xn[En]=null,fr=xn[--En],xn[En]=null,dr=xn[--En],xn[En]=null}var cn=null,on=null,Qe=!1,Dn=null;function hx(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,on=Xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zi!==null?{id:dr,overflow:fr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,on=null,!0):!1;default:return!1}}function cp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dp(t){if(Qe){var e=on;if(e){var n=e;if(!Wv(t,e)){if(cp(t))throw Error(L(418));e=Xr(n.nextSibling);var r=cn;e&&Wv(t,e)?hx(r,n):(t.flags=t.flags&-4097|2,Qe=!1,cn=t)}}else{if(cp(t))throw Error(L(418));t.flags=t.flags&-4097|2,Qe=!1,cn=t}}}function Vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function uu(t){if(t!==cn)return!1;if(!Qe)return Vv(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!op(t.type,t.memoizedProps)),e&&(e=on)){if(cp(t))throw px(),Error(L(418));for(;e;)hx(t,e),e=Xr(e.nextSibling)}if(Vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){on=Xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}on=null}}else on=cn?Xr(t.stateNode.nextSibling):null;return!0}function px(){for(var t=on;t;)t=Xr(t.nextSibling)}function po(){on=cn=null,Qe=!1}function qm(t){Dn===null?Dn=[t]:Dn.push(t)}var Uk=kr.ReactCurrentBatchConfig;function On(t,e){if(t&&t.defaultProps){e=et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var lc=xi(null),uc=null,Gs=null,Qm=null;function Xm(){Qm=Gs=uc=null}function Jm(t){var e=lc.current;Ye(lc),t._currentValue=e}function fp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function so(t,e){uc=t,Qm=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(Qm!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(uc===null)throw Error(L(308));Gs=t,uc.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Fi=null;function Zm(t){Fi===null?Fi=[t]:Fi.push(t)}function mx(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Er(t,r)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $r=!1;function eg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Er(t,n)}return i=r.interleaved,i===null?(e.next=e,Zm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Er(t,n)}function Pu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$m(t,n)}}function Hv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cc(t,e,n,r){var i=t.updateQueue;$r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(f=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=et({},d,f);break e;case 2:$r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=d}}function Gv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var yx=new m1.Component().refs;function hp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hd={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=ei(t),s=yr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jr(t,s,i),e!==null&&(Un(e,t,i,r),Pu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=ei(t),s=yr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jr(t,s,i),e!==null&&(Un(e,t,i,r),Pu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Bt(),r=ei(t),i=yr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jr(t,i,r),e!==null&&(Un(e,t,r,n),Pu(e,t,r))}};function Kv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qa(n,r)||!qa(i,s):!0}function vx(t,e,n){var r=!1,i=di,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(i=Xt(e)?Ji:Ft.current,r=e.contextTypes,s=(r=r!=null)?ho(t,i):di),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hd.enqueueReplaceState(e,e.state,null)}function pp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=yx,eg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Tn(s):(s=Xt(e)?Ji:Ft.current,i.context=ho(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hd.enqueueReplaceState(i,i.state,null),cc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===yx&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function cu(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qv(t){var e=t._init;return e(t._payload)}function _x(t){function e(m,h){if(t){var y=m.deletions;y===null?(m.deletions=[h],m.flags|=16):y.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=ti(m,h),m.index=0,m.sibling=null,m}function s(m,h,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<h?(m.flags|=2,h):y):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,y,E){return h===null||h.tag!==6?(h=Yf(y,m.mode,E),h.return=m,h):(h=i(h,y),h.return=m,h)}function l(m,h,y,E){var T=y.type;return T===Fs?c(m,h,y.props.children,E,y.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Fr&&qv(T)===h.type)?(E=i(h,y.props),E.ref=ta(m,h,y),E.return=m,E):(E=Lu(y.type,y.key,y.props,null,m.mode,E),E.ref=ta(m,h,y),E.return=m,E)}function u(m,h,y,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=qf(y,m.mode,E),h.return=m,h):(h=i(h,y.children||[]),h.return=m,h)}function c(m,h,y,E,T){return h===null||h.tag!==7?(h=Gi(y,m.mode,E,T),h.return=m,h):(h=i(h,y),h.return=m,h)}function d(m,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Yf(""+h,m.mode,y),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Zl:return y=Lu(h.type,h.key,h.props,null,m.mode,y),y.ref=ta(m,null,h),y.return=m,y;case js:return h=qf(h,m.mode,y),h.return=m,h;case Fr:var E=h._init;return d(m,E(h._payload),y)}if(ya(h)||Qo(h))return h=Gi(h,m.mode,y,null),h.return=m,h;cu(m,h)}return null}function f(m,h,y,E){var T=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(m,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zl:return y.key===T?l(m,h,y,E):null;case js:return y.key===T?u(m,h,y,E):null;case Fr:return T=y._init,f(m,h,T(y._payload),E)}if(ya(y)||Qo(y))return T!==null?null:c(m,h,y,E,null);cu(m,y)}return null}function p(m,h,y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(y)||null,a(h,m,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Zl:return m=m.get(E.key===null?y:E.key)||null,l(h,m,E,T);case js:return m=m.get(E.key===null?y:E.key)||null,u(h,m,E,T);case Fr:var _=E._init;return p(m,h,y,_(E._payload),T)}if(ya(E)||Qo(E))return m=m.get(y)||null,c(h,m,E,T,null);cu(h,E)}return null}function g(m,h,y,E){for(var T=null,_=null,S=h,P=h=0,k=null;S!==null&&P<y.length;P++){S.index>P?(k=S,S=null):k=S.sibling;var A=f(m,S,y[P],E);if(A===null){S===null&&(S=k);break}t&&S&&A.alternate===null&&e(m,S),h=s(A,h,P),_===null?T=A:_.sibling=A,_=A,S=k}if(P===y.length)return n(m,S),Qe&&Pi(m,P),T;if(S===null){for(;P<y.length;P++)S=d(m,y[P],E),S!==null&&(h=s(S,h,P),_===null?T=S:_.sibling=S,_=S);return Qe&&Pi(m,P),T}for(S=r(m,S);P<y.length;P++)k=p(S,m,P,y[P],E),k!==null&&(t&&k.alternate!==null&&S.delete(k.key===null?P:k.key),h=s(k,h,P),_===null?T=k:_.sibling=k,_=k);return t&&S.forEach(function(N){return e(m,N)}),Qe&&Pi(m,P),T}function v(m,h,y,E){var T=Qo(y);if(typeof T!="function")throw Error(L(150));if(y=T.call(y),y==null)throw Error(L(151));for(var _=T=null,S=h,P=h=0,k=null,A=y.next();S!==null&&!A.done;P++,A=y.next()){S.index>P?(k=S,S=null):k=S.sibling;var N=f(m,S,A.value,E);if(N===null){S===null&&(S=k);break}t&&S&&N.alternate===null&&e(m,S),h=s(N,h,P),_===null?T=N:_.sibling=N,_=N,S=k}if(A.done)return n(m,S),Qe&&Pi(m,P),T;if(S===null){for(;!A.done;P++,A=y.next())A=d(m,A.value,E),A!==null&&(h=s(A,h,P),_===null?T=A:_.sibling=A,_=A);return Qe&&Pi(m,P),T}for(S=r(m,S);!A.done;P++,A=y.next())A=p(S,m,P,A.value,E),A!==null&&(t&&A.alternate!==null&&S.delete(A.key===null?P:A.key),h=s(A,h,P),_===null?T=A:_.sibling=A,_=A);return t&&S.forEach(function(G){return e(m,G)}),Qe&&Pi(m,P),T}function w(m,h,y,E){if(typeof y=="object"&&y!==null&&y.type===Fs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Zl:e:{for(var T=y.key,_=h;_!==null;){if(_.key===T){if(T=y.type,T===Fs){if(_.tag===7){n(m,_.sibling),h=i(_,y.props.children),h.return=m,m=h;break e}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Fr&&qv(T)===_.type){n(m,_.sibling),h=i(_,y.props),h.ref=ta(m,_,y),h.return=m,m=h;break e}n(m,_);break}else e(m,_);_=_.sibling}y.type===Fs?(h=Gi(y.props.children,m.mode,E,y.key),h.return=m,m=h):(E=Lu(y.type,y.key,y.props,null,m.mode,E),E.ref=ta(m,h,y),E.return=m,m=E)}return o(m);case js:e:{for(_=y.key;h!==null;){if(h.key===_)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(m,h.sibling),h=i(h,y.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=qf(y,m.mode,E),h.return=m,m=h}return o(m);case Fr:return _=y._init,w(m,h,_(y._payload),E)}if(ya(y))return g(m,h,y,E);if(Qo(y))return v(m,h,y,E);cu(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,y),h.return=m,m=h):(n(m,h),h=Yf(y,m.mode,E),h.return=m,m=h),o(m)):n(m,h)}return w}var mo=_x(!0),wx=_x(!1),Al={},Zn=xi(Al),Za=xi(Al),el=xi(Al);function $i(t){if(t===Al)throw Error(L(174));return t}function tg(t,e){switch(We(el,e),We(Za,t),We(Zn,Al),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gh(e,t)}Ye(Zn),We(Zn,e)}function go(){Ye(Zn),Ye(Za),Ye(el)}function xx(t){$i(el.current);var e=$i(Zn.current),n=Gh(e,t.type);e!==n&&(We(Za,t),We(Zn,n))}function ng(t){Za.current===t&&(Ye(Zn),Ye(Za))}var Xe=xi(0);function dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bf=[];function rg(){for(var t=0;t<Bf.length;t++)Bf[t]._workInProgressVersionPrimary=null;Bf.length=0}var Ou=kr.ReactCurrentDispatcher,Wf=kr.ReactCurrentBatchConfig,es=0,Ze=null,dt=null,wt=null,fc=!1,Ra=!1,tl=0,zk=0;function Dt(){throw Error(L(321))}function ig(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function sg(t,e,n,r,i,s){if(es=s,Ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ou.current=t===null||t.memoizedState===null?Hk:Gk,t=n(r,i),Ra){s=0;do{if(Ra=!1,tl=0,25<=s)throw Error(L(301));s+=1,wt=dt=null,e.updateQueue=null,Ou.current=Kk,t=n(r,i)}while(Ra)}if(Ou.current=hc,e=dt!==null&&dt.next!==null,es=0,wt=dt=Ze=null,fc=!1,e)throw Error(L(300));return t}function og(){var t=tl!==0;return tl=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ze.memoizedState=wt=t:wt=wt.next=t,wt}function bn(){if(dt===null){var t=Ze.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var e=wt===null?Ze.memoizedState:wt.next;if(e!==null)wt=e,dt=t;else{if(t===null)throw Error(L(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},wt===null?Ze.memoizedState=wt=t:wt=wt.next=t}return wt}function nl(t,e){return typeof e=="function"?e(t):e}function Vf(t){var e=bn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=dt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((es&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ze.lanes|=c,ts|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Wn(r,e.memoizedState)||(Yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ze.lanes|=s,ts|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hf(t){var e=bn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wn(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ex(){}function Sx(t,e){var n=Ze,r=bn(),i=e(),s=!Wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Yt=!0),r=r.queue,ag(bx.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,rl(9,Tx.bind(null,n,r,i,e),void 0,null),Tt===null)throw Error(L(349));es&30||Cx(n,e,i)}return i}function Cx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ze.updateQueue,e===null?(e={lastEffect:null,stores:null},Ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tx(t,e,n,r){e.value=n,e.getSnapshot=r,Ix(e)&&kx(t)}function bx(t,e,n){return n(function(){Ix(e)&&kx(t)})}function Ix(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function kx(t){var e=Er(t,1);e!==null&&Un(e,t,1,-1)}function Qv(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e.queue=t,t=t.dispatch=Vk.bind(null,Ze,t),[e.memoizedState,t]}function rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ze.updateQueue,e===null?(e={lastEffect:null,stores:null},Ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Rx(){return bn().memoizedState}function Au(t,e,n,r){var i=Yn();Ze.flags|=t,i.memoizedState=rl(1|e,n,void 0,r===void 0?null:r)}function pd(t,e,n,r){var i=bn();r=r===void 0?null:r;var s=void 0;if(dt!==null){var o=dt.memoizedState;if(s=o.destroy,r!==null&&ig(r,o.deps)){i.memoizedState=rl(e,n,s,r);return}}Ze.flags|=t,i.memoizedState=rl(1|e,n,s,r)}function Xv(t,e){return Au(8390656,8,t,e)}function ag(t,e){return pd(2048,8,t,e)}function Px(t,e){return pd(4,2,t,e)}function Ox(t,e){return pd(4,4,t,e)}function Ax(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nx(t,e,n){return n=n!=null?n.concat([t]):null,pd(4,4,Ax.bind(null,e,t),n)}function lg(){}function Dx(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ig(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Mx(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ig(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Lx(t,e,n){return es&21?(Wn(n,e)||(n=$1(),Ze.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function Bk(t,e){var n=Ne;Ne=n!==0&&4>n?n:4,t(!0);var r=Wf.transition;Wf.transition={};try{t(!1),e()}finally{Ne=n,Wf.transition=r}}function jx(){return bn().memoizedState}function Wk(t,e,n){var r=ei(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fx(t))$x(e,n);else if(n=mx(t,e,n,r),n!==null){var i=Bt();Un(n,t,r,i),Ux(n,e,r)}}function Vk(t,e,n){var r=ei(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fx(t))$x(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Wn(a,o)){var l=e.interleaved;l===null?(i.next=i,Zm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=mx(t,e,i,r),n!==null&&(i=Bt(),Un(n,t,r,i),Ux(n,e,r))}}function Fx(t){var e=t.alternate;return t===Ze||e!==null&&e===Ze}function $x(t,e){Ra=fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ux(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$m(t,n)}}var hc={readContext:Tn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Hk={readContext:Tn,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:Xv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Au(4194308,4,Ax.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Au(4194308,4,t,e)},useInsertionEffect:function(t,e){return Au(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Wk.bind(null,Ze,t),[r.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:Qv,useDebugValue:lg,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=Qv(!1),e=t[0];return t=Bk.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ze,i=Yn();if(Qe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Tt===null)throw Error(L(349));es&30||Cx(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xv(bx.bind(null,r,s,t),[t]),r.flags|=2048,rl(9,Tx.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=Tt.identifierPrefix;if(Qe){var n=fr,r=dr;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gk={readContext:Tn,useCallback:Dx,useContext:Tn,useEffect:ag,useImperativeHandle:Nx,useInsertionEffect:Px,useLayoutEffect:Ox,useMemo:Mx,useReducer:Vf,useRef:Rx,useState:function(){return Vf(nl)},useDebugValue:lg,useDeferredValue:function(t){var e=bn();return Lx(e,dt.memoizedState,t)},useTransition:function(){var t=Vf(nl)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Ex,useSyncExternalStore:Sx,useId:jx,unstable_isNewReconciler:!1},Kk={readContext:Tn,useCallback:Dx,useContext:Tn,useEffect:ag,useImperativeHandle:Nx,useInsertionEffect:Px,useLayoutEffect:Ox,useMemo:Mx,useReducer:Hf,useRef:Rx,useState:function(){return Hf(nl)},useDebugValue:lg,useDeferredValue:function(t){var e=bn();return dt===null?e.memoizedState=t:Lx(e,dt.memoizedState,t)},useTransition:function(){var t=Hf(nl)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Ex,useSyncExternalStore:Sx,useId:jx,unstable_isNewReconciler:!1};function yo(t,e){try{var n="",r=e;do n+=xI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Gf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yk=typeof WeakMap=="function"?WeakMap:Map;function zx(t,e,n){n=yr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){mc||(mc=!0,Tp=r),mp(t,e)},n}function Bx(t,e,n){n=yr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mp(t,e),typeof r!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Yk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lR.bind(null,t,e,n),e.then(t,t))}function Zv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function e_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yr(-1,1),e.tag=2,Jr(n,e,1))),n.lanes|=1),t)}var qk=kr.ReactCurrentOwner,Yt=!1;function Ut(t,e,n,r){e.child=t===null?wx(e,null,n,r):mo(e,t.child,n,r)}function t_(t,e,n,r,i){n=n.render;var s=e.ref;return so(e,i),r=sg(t,e,n,r,s,i),n=og(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sr(t,e,i)):(Qe&&n&&Km(e),e.flags|=1,Ut(t,e,r,i),e.child)}function n_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wx(t,e,s,r,i)):(t=Lu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(o,r)&&t.ref===e.ref)return Sr(t,e,i)}return e.flags|=1,t=ti(s,r),t.ref=e.ref,t.return=e,e.child=t}function Wx(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qa(s,r)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,Sr(t,e,i)}return gp(t,e,n,r,i)}function Vx(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Ys,sn),sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,We(Ys,sn),sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,We(Ys,sn),sn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,We(Ys,sn),sn|=r;return Ut(t,e,i,n),e.child}function Hx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gp(t,e,n,r,i){var s=Xt(n)?Ji:Ft.current;return s=ho(e,s),so(e,i),n=sg(t,e,n,r,s,i),r=og(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sr(t,e,i)):(Qe&&r&&Km(e),e.flags|=1,Ut(t,e,n,i),e.child)}function r_(t,e,n,r,i){if(Xt(n)){var s=!0;sc(e)}else s=!1;if(so(e,i),e.stateNode===null)Nu(t,e),vx(e,n,r),pp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Tn(u):(u=Xt(n)?Ji:Ft.current,u=ho(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Yv(e,o,r,u),$r=!1;var f=e.memoizedState;o.state=f,cc(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Qt.current||$r?(typeof c=="function"&&(hp(e,n,c,r),l=e.memoizedState),(a=$r||Kv(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gx(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:On(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=Xt(n)?Ji:Ft.current,l=ho(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Yv(e,o,r,l),$r=!1,f=e.memoizedState,o.state=f,cc(e,r,o,i);var g=e.memoizedState;a!==d||f!==g||Qt.current||$r?(typeof p=="function"&&(hp(e,n,p,r),g=e.memoizedState),(u=$r||Kv(e,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return yp(t,e,n,r,s,i)}function yp(t,e,n,r,i,s){Hx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Bv(e,n,!1),Sr(t,e,s);r=e.stateNode,qk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=mo(e,t.child,null,s),e.child=mo(e,null,a,s)):Ut(t,e,a,s),e.memoizedState=r.state,i&&Bv(e,n,!0),e.child}function Gx(t){var e=t.stateNode;e.pendingContext?zv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zv(t,e.context,!1),tg(t,e.containerInfo)}function i_(t,e,n,r,i){return po(),qm(i),e.flags|=256,Ut(t,e,n,r),e.child}var vp={dehydrated:null,treeContext:null,retryLane:0};function _p(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kx(t,e,n){var r=e.pendingProps,i=Xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),We(Xe,i&1),t===null)return dp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yd(o,r,0,null),t=Gi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_p(n),e.memoizedState=vp,t):ug(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Qk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ti(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ti(a,s):(s=Gi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_p(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vp,r}return s=t.child,t=s.sibling,r=ti(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ug(t,e){return e=yd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function du(t,e,n,r){return r!==null&&qm(r),mo(e,t.child,null,n),t=ug(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Gf(Error(L(422))),du(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yd({mode:"visible",children:r.children},i,0,null),s=Gi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&mo(e,t.child,null,o),e.child.memoizedState=_p(o),e.memoizedState=vp,s);if(!(e.mode&1))return du(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(L(419)),r=Gf(s,r,void 0),du(t,e,o,r)}if(a=(o&t.childLanes)!==0,Yt||a){if(r=Tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Er(t,i),Un(r,t,i,-1))}return mg(),r=Gf(Error(L(421))),du(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=uR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,on=Xr(i.nextSibling),cn=e,Qe=!0,Dn=null,t!==null&&(xn[En++]=dr,xn[En++]=fr,xn[En++]=Zi,dr=t.id,fr=t.overflow,Zi=e),e=ug(e,r.children),e.flags|=4096,e)}function s_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fp(t.return,e,n)}function Kf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Yx(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(t,e,r.children,n),r=Xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&s_(t,n,e);else if(t.tag===19)s_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(We(Xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kf(e,!0,n,null,s);break;case"together":Kf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=ti(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ti(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Xk(t,e,n){switch(e.tag){case 3:Gx(e),po();break;case 5:xx(e);break;case 1:Xt(e.type)&&sc(e);break;case 4:tg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;We(lc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(We(Xe,Xe.current&1),e.flags|=128,null):n&e.child.childLanes?Kx(t,e,n):(We(Xe,Xe.current&1),t=Sr(t,e,n),t!==null?t.sibling:null);We(Xe,Xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Yx(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),We(Xe,Xe.current),r)break;return null;case 22:case 23:return e.lanes=0,Vx(t,e,n)}return Sr(t,e,n)}var qx,wp,Qx,Xx;qx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wp=function(){};Qx=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$i(Zn.current);var s=null;switch(n){case"input":i=Bh(t,i),r=Bh(t,r),s=[];break;case"select":i=et({},i,{value:void 0}),r=et({},r,{value:void 0}),s=[];break;case"textarea":i=Hh(t,i),r=Hh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rc)}Kh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ba.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ba.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Xx=function(t,e,n,r){n!==r&&(e.flags|=4)};function na(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Jk(t,e,n){var r=e.pendingProps;switch(Ym(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return Xt(e.type)&&ic(),Mt(e),null;case 3:return r=e.stateNode,go(),Ye(Qt),Ye(Ft),rg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(uu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(kp(Dn),Dn=null))),wp(t,e),Mt(e),null;case 5:ng(e);var i=$i(el.current);if(n=e.type,t!==null&&e.stateNode!=null)Qx(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return Mt(e),null}if(t=$i(Zn.current),uu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xn]=e,r[Ja]=s,t=(e.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<_a.length;i++)Ve(_a[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":pv(r,s),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",r);break;case"textarea":gv(r,s),Ve("invalid",r)}Kh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&lu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lu(r.textContent,a,t),i=["children",""+a]):Ba.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ve("scroll",r)}switch(n){case"input":eu(r),mv(r,s,!0);break;case"textarea":eu(r),yv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xn]=e,t[Ja]=r,qx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yh(n,r),n){case"dialog":Ve("cancel",t),Ve("close",t),i=r;break;case"iframe":case"object":case"embed":Ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<_a.length;i++)Ve(_a[i],t);i=r;break;case"source":Ve("error",t),i=r;break;case"img":case"image":case"link":Ve("error",t),Ve("load",t),i=r;break;case"details":Ve("toggle",t),i=r;break;case"input":pv(t,r),i=Bh(t,r),Ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=et({},r,{value:void 0}),Ve("invalid",t);break;case"textarea":gv(t,r),i=Hh(t,r),Ve("invalid",t);break;default:i=r}Kh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?I1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&T1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wa(t,l):typeof l=="number"&&Wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ba.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ve("scroll",t):l!=null&&Nm(t,s,l,o))}switch(n){case"input":eu(t),mv(t,r,!1);break;case"textarea":eu(t),yv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ci(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?to(t,!!r.multiple,s,!1):r.defaultValue!=null&&to(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mt(e),null;case 6:if(t&&e.stateNode!=null)Xx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=$i(el.current),$i(Zn.current),uu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xn]=e,(s=r.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:lu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xn]=e,e.stateNode=r}return Mt(e),null;case 13:if(Ye(Xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&on!==null&&e.mode&1&&!(e.flags&128))px(),po(),e.flags|=98560,s=!1;else if(s=uu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Xn]=e}else po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mt(e),s=!1}else Dn!==null&&(kp(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Xe.current&1?pt===0&&(pt=3):mg())),e.updateQueue!==null&&(e.flags|=4),Mt(e),null);case 4:return go(),wp(t,e),t===null&&Qa(e.stateNode.containerInfo),Mt(e),null;case 10:return Jm(e.type._context),Mt(e),null;case 17:return Xt(e.type)&&ic(),Mt(e),null;case 19:if(Ye(Xe),s=e.memoizedState,s===null)return Mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)na(s,!1);else{if(pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dc(t),o!==null){for(e.flags|=128,na(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return We(Xe,Xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&st()>vo&&(e.flags|=128,r=!0,na(s,!1),e.lanes=4194304)}else{if(!r)if(t=dc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Mt(e),null}else 2*st()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,r=!0,na(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=st(),e.sibling=null,n=Xe.current,We(Xe,r?n&1|2:n&1),e):(Mt(e),null);case 22:case 23:return pg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?sn&1073741824&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function Zk(t,e){switch(Ym(e),e.tag){case 1:return Xt(e.type)&&ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return go(),Ye(Qt),Ye(Ft),rg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ng(e),null;case 13:if(Ye(Xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ye(Xe),null;case 4:return go(),null;case 10:return Jm(e.type._context),null;case 22:case 23:return pg(),null;case 24:return null;default:return null}}var fu=!1,Lt=!1,eR=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){nt(t,e,r)}else n.current=null}function xp(t,e,n){try{n()}catch(r){nt(t,e,r)}}var o_=!1;function tR(t,e){if(ip=ec,t=tx(),Gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sp={focusedElem:t,selectionRange:n},ec=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:On(e.type,v),w);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(E){nt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return g=o_,o_=!1,g}function Pa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xp(e,n,s)}i=i.next}while(i!==r)}}function md(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ep(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jx(t){var e=t.alternate;e!==null&&(t.alternate=null,Jx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[Ja],delete e[lp],delete e[jk],delete e[Fk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zx(t){return t.tag===5||t.tag===3||t.tag===4}function a_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rc));else if(r!==4&&(t=t.child,t!==null))for(Sp(t,e,n),t=t.sibling;t!==null;)Sp(t,e,n),t=t.sibling}function Cp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cp(t,e,n),t=t.sibling;t!==null;)Cp(t,e,n),t=t.sibling}var Pt=null,An=!1;function Nr(t,e,n){for(n=n.child;n!==null;)eE(t,e,n),n=n.sibling}function eE(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(ad,n)}catch{}switch(n.tag){case 5:Lt||Ks(n,e);case 6:var r=Pt,i=An;Pt=null,Nr(t,e,n),Pt=r,An=i,Pt!==null&&(An?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(An?(t=Pt,n=n.stateNode,t.nodeType===8?Uf(t.parentNode,n):t.nodeType===1&&Uf(t,n),Ka(t)):Uf(Pt,n.stateNode));break;case 4:r=Pt,i=An,Pt=n.stateNode.containerInfo,An=!0,Nr(t,e,n),Pt=r,An=i;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xp(n,e,o),i=i.next}while(i!==r)}Nr(t,e,n);break;case 1:if(!Lt&&(Ks(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){nt(n,e,a)}Nr(t,e,n);break;case 21:Nr(t,e,n);break;case 22:n.mode&1?(Lt=(r=Lt)||n.memoizedState!==null,Nr(t,e,n),Lt=r):Nr(t,e,n);break;default:Nr(t,e,n)}}function l_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eR),e.forEach(function(r){var i=cR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,An=!1;break e;case 3:Pt=a.stateNode.containerInfo,An=!0;break e;case 4:Pt=a.stateNode.containerInfo,An=!0;break e}a=a.return}if(Pt===null)throw Error(L(160));eE(s,o,i),Pt=null,An=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){nt(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tE(e,t),e=e.sibling}function tE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Kn(t),r&4){try{Pa(3,t,t.return),md(3,t)}catch(v){nt(t,t.return,v)}try{Pa(5,t,t.return)}catch(v){nt(t,t.return,v)}}break;case 1:kn(e,t),Kn(t),r&512&&n!==null&&Ks(n,n.return);break;case 5:if(kn(e,t),Kn(t),r&512&&n!==null&&Ks(n,n.return),t.flags&32){var i=t.stateNode;try{Wa(i,"")}catch(v){nt(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&E1(i,s),Yh(a,o);var u=Yh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?I1(i,d):c==="dangerouslySetInnerHTML"?T1(i,d):c==="children"?Wa(i,d):Nm(i,c,d,u)}switch(a){case"input":Wh(i,s);break;case"textarea":S1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?to(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?to(i,!!s.multiple,s.defaultValue,!0):to(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ja]=s}catch(v){nt(t,t.return,v)}}break;case 6:if(kn(e,t),Kn(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){nt(t,t.return,v)}}break;case 3:if(kn(e,t),Kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(v){nt(t,t.return,v)}break;case 4:kn(e,t),Kn(t);break;case 13:kn(e,t),Kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fg=st())),r&4&&l_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Lt=(u=Lt)||c,kn(e,t),Lt=u):kn(e,t),Kn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(H=t,c=t.child;c!==null;){for(d=H=c;H!==null;){switch(f=H,p=f.child,f.tag){case 0:case 11:case 14:case 15:Pa(4,f,f.return);break;case 1:Ks(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){nt(r,n,v)}}break;case 5:Ks(f,f.return);break;case 22:if(f.memoizedState!==null){c_(d);continue}}p!==null?(p.return=f,H=p):c_(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=b1("display",o))}catch(v){nt(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){nt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kn(e,t),Kn(t),r&4&&l_(t);break;case 21:break;default:kn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zx(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wa(i,""),r.flags&=-33);var s=a_(t);Cp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=a_(t);Sp(t,a,o);break;default:throw Error(L(161))}}catch(l){nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nR(t,e,n){H=t,nE(t)}function nE(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Lt;a=fu;var u=Lt;if(fu=o,(Lt=l)&&!u)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?d_(i):l!==null?(l.return=o,H=l):d_(i);for(;s!==null;)H=s,nE(s),s=s.sibling;H=i,fu=a,Lt=u}u_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):u_(t)}}function u_(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||md(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ka(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Lt||e.flags&512&&Ep(e)}catch(f){nt(e,e.return,f)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function c_(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function d_(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{md(4,e)}catch(l){nt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){nt(e,i,l)}}var s=e.return;try{Ep(e)}catch(l){nt(e,s,l)}break;case 5:var o=e.return;try{Ep(e)}catch(l){nt(e,o,l)}}}catch(l){nt(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var rR=Math.ceil,pc=kr.ReactCurrentDispatcher,cg=kr.ReactCurrentOwner,Cn=kr.ReactCurrentBatchConfig,ke=0,Tt=null,ct=null,Ot=0,sn=0,Ys=xi(0),pt=0,il=null,ts=0,gd=0,dg=0,Oa=null,Gt=null,fg=0,vo=1/0,ar=null,mc=!1,Tp=null,Zr=null,hu=!1,Kr=null,gc=0,Aa=0,bp=null,Du=-1,Mu=0;function Bt(){return ke&6?st():Du!==-1?Du:Du=st()}function ei(t){return t.mode&1?ke&2&&Ot!==0?Ot&-Ot:Uk.transition!==null?(Mu===0&&(Mu=$1()),Mu):(t=Ne,t!==0||(t=window.event,t=t===void 0?16:G1(t.type)),t):1}function Un(t,e,n,r){if(50<Aa)throw Aa=0,bp=null,Error(L(185));Rl(t,n,r),(!(ke&2)||t!==Tt)&&(t===Tt&&(!(ke&2)&&(gd|=n),pt===4&&zr(t,Ot)),Jt(t,r),n===1&&ke===0&&!(e.mode&1)&&(vo=st()+500,fd&&Ei()))}function Jt(t,e){var n=t.callbackNode;UI(t,e);var r=Zu(t,t===Tt?Ot:0);if(r===0)n!==null&&wv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wv(n),e===1)t.tag===0?$k(f_.bind(null,t)):dx(f_.bind(null,t)),Mk(function(){!(ke&6)&&Ei()}),n=null;else{switch(U1(r)){case 1:n=Fm;break;case 4:n=j1;break;case 16:n=Ju;break;case 536870912:n=F1;break;default:n=Ju}n=cE(n,rE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rE(t,e){if(Du=-1,Mu=0,ke&6)throw Error(L(327));var n=t.callbackNode;if(oo()&&t.callbackNode!==n)return null;var r=Zu(t,t===Tt?Ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yc(t,r);else{e=r;var i=ke;ke|=2;var s=sE();(Tt!==t||Ot!==e)&&(ar=null,vo=st()+500,Hi(t,e));do try{oR();break}catch(a){iE(t,a)}while(!0);Xm(),pc.current=s,ke=i,ct!==null?e=0:(Tt=null,Ot=0,e=pt)}if(e!==0){if(e===2&&(i=Zh(t),i!==0&&(r=i,e=Ip(t,i))),e===1)throw n=il,Hi(t,0),zr(t,r),Jt(t,st()),n;if(e===6)zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!iR(i)&&(e=yc(t,r),e===2&&(s=Zh(t),s!==0&&(r=s,e=Ip(t,s))),e===1))throw n=il,Hi(t,0),zr(t,r),Jt(t,st()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Oi(t,Gt,ar);break;case 3:if(zr(t,r),(r&130023424)===r&&(e=fg+500-st(),10<e)){if(Zu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ap(Oi.bind(null,t,Gt,ar),e);break}Oi(t,Gt,ar);break;case 4:if(zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=st()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rR(r/1960))-r,10<r){t.timeoutHandle=ap(Oi.bind(null,t,Gt,ar),r);break}Oi(t,Gt,ar);break;case 5:Oi(t,Gt,ar);break;default:throw Error(L(329))}}}return Jt(t,st()),t.callbackNode===n?rE.bind(null,t):null}function Ip(t,e){var n=Oa;return t.current.memoizedState.isDehydrated&&(Hi(t,e).flags|=256),t=yc(t,e),t!==2&&(e=Gt,Gt=n,e!==null&&kp(e)),t}function kp(t){Gt===null?Gt=t:Gt.push.apply(Gt,t)}function iR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~dg,e&=~gd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),r=1<<n;t[n]=-1,e&=~r}}function f_(t){if(ke&6)throw Error(L(327));oo();var e=Zu(t,0);if(!(e&1))return Jt(t,st()),null;var n=yc(t,e);if(t.tag!==0&&n===2){var r=Zh(t);r!==0&&(e=r,n=Ip(t,r))}if(n===1)throw n=il,Hi(t,0),zr(t,e),Jt(t,st()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Oi(t,Gt,ar),Jt(t,st()),null}function hg(t,e){var n=ke;ke|=1;try{return t(e)}finally{ke=n,ke===0&&(vo=st()+500,fd&&Ei())}}function ns(t){Kr!==null&&Kr.tag===0&&!(ke&6)&&oo();var e=ke;ke|=1;var n=Cn.transition,r=Ne;try{if(Cn.transition=null,Ne=1,t)return t()}finally{Ne=r,Cn.transition=n,ke=e,!(ke&6)&&Ei()}}function pg(){sn=Ys.current,Ye(Ys)}function Hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dk(n)),ct!==null)for(n=ct.return;n!==null;){var r=n;switch(Ym(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ic();break;case 3:go(),Ye(Qt),Ye(Ft),rg();break;case 5:ng(r);break;case 4:go();break;case 13:Ye(Xe);break;case 19:Ye(Xe);break;case 10:Jm(r.type._context);break;case 22:case 23:pg()}n=n.return}if(Tt=t,ct=t=ti(t.current,null),Ot=sn=e,pt=0,il=null,dg=gd=ts=0,Gt=Oa=null,Fi!==null){for(e=0;e<Fi.length;e++)if(n=Fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fi=null}return t}function iE(t,e){do{var n=ct;try{if(Xm(),Ou.current=hc,fc){for(var r=Ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fc=!1}if(es=0,wt=dt=Ze=null,Ra=!1,tl=0,cg.current=null,n===null||n.return===null){pt=1,il=e,ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Zv(o);if(p!==null){p.flags&=-257,e_(p,o,a,s,e),p.mode&1&&Jv(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Jv(s,u,e),mg();break e}l=Error(L(426))}}else if(Qe&&a.mode&1){var w=Zv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),e_(w,o,a,s,e),qm(yo(l,a));break e}}s=l=yo(l,a),pt!==4&&(pt=2),Oa===null?Oa=[s]:Oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=zx(s,l,e);Hv(s,m);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Zr===null||!Zr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Bx(s,a,e);Hv(s,E);break e}}s=s.return}while(s!==null)}aE(n)}catch(T){e=T,ct===n&&n!==null&&(ct=n=n.return);continue}break}while(!0)}function sE(){var t=pc.current;return pc.current=hc,t===null?hc:t}function mg(){(pt===0||pt===3||pt===2)&&(pt=4),Tt===null||!(ts&268435455)&&!(gd&268435455)||zr(Tt,Ot)}function yc(t,e){var n=ke;ke|=2;var r=sE();(Tt!==t||Ot!==e)&&(ar=null,Hi(t,e));do try{sR();break}catch(i){iE(t,i)}while(!0);if(Xm(),ke=n,pc.current=r,ct!==null)throw Error(L(261));return Tt=null,Ot=0,pt}function sR(){for(;ct!==null;)oE(ct)}function oR(){for(;ct!==null&&!OI();)oE(ct)}function oE(t){var e=uE(t.alternate,t,sn);t.memoizedProps=t.pendingProps,e===null?aE(t):ct=e,cg.current=null}function aE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Zk(n,e),n!==null){n.flags&=32767,ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pt=6,ct=null;return}}else if(n=Jk(n,e,sn),n!==null){ct=n;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);pt===0&&(pt=5)}function Oi(t,e,n){var r=Ne,i=Cn.transition;try{Cn.transition=null,Ne=1,aR(t,e,n,r)}finally{Cn.transition=i,Ne=r}return null}function aR(t,e,n,r){do oo();while(Kr!==null);if(ke&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zI(t,s),t===Tt&&(ct=Tt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hu||(hu=!0,cE(Ju,function(){return oo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=Ne;Ne=1;var a=ke;ke|=4,cg.current=null,tR(t,n),tE(n,t),Ik(sp),ec=!!ip,sp=ip=null,t.current=n,nR(n),AI(),ke=a,Ne=o,Cn.transition=s}else t.current=n;if(hu&&(hu=!1,Kr=t,gc=i),s=t.pendingLanes,s===0&&(Zr=null),MI(n.stateNode),Jt(t,st()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mc)throw mc=!1,t=Tp,Tp=null,t;return gc&1&&t.tag!==0&&oo(),s=t.pendingLanes,s&1?t===bp?Aa++:(Aa=0,bp=t):Aa=0,Ei(),null}function oo(){if(Kr!==null){var t=U1(gc),e=Cn.transition,n=Ne;try{if(Cn.transition=null,Ne=16>t?16:t,Kr===null)var r=!1;else{if(t=Kr,Kr=null,gc=0,ke&6)throw Error(L(331));var i=ke;for(ke|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(H=u;H!==null;){var c=H;switch(c.tag){case 0:case 11:case 15:Pa(8,c,s)}var d=c.child;if(d!==null)d.return=c,H=d;else for(;H!==null;){c=H;var f=c.sibling,p=c.return;if(Jx(c),c===u){H=null;break}if(f!==null){f.return=p,H=f;break}H=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,H=m;break e}H=s.return}}var h=t.current;for(H=h;H!==null;){o=H;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,H=y;else e:for(o=h;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:md(9,a)}}catch(T){nt(a,a.return,T)}if(a===o){H=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,H=E;break e}H=a.return}}if(ke=i,Ei(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(ad,t)}catch{}r=!0}return r}finally{Ne=n,Cn.transition=e}}return!1}function h_(t,e,n){e=yo(n,e),e=zx(t,e,1),t=Jr(t,e,1),e=Bt(),t!==null&&(Rl(t,1,e),Jt(t,e))}function nt(t,e,n){if(t.tag===3)h_(t,t,n);else for(;e!==null;){if(e.tag===3){h_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zr===null||!Zr.has(r))){t=yo(n,t),t=Bx(e,t,1),e=Jr(e,t,1),t=Bt(),e!==null&&(Rl(e,1,t),Jt(e,t));break}}e=e.return}}function lR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(Ot&n)===n&&(pt===4||pt===3&&(Ot&130023424)===Ot&&500>st()-fg?Hi(t,0):dg|=n),Jt(t,e)}function lE(t,e){e===0&&(t.mode&1?(e=ru,ru<<=1,!(ru&130023424)&&(ru=4194304)):e=1);var n=Bt();t=Er(t,e),t!==null&&(Rl(t,e,n),Jt(t,n))}function uR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lE(t,n)}function cR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),lE(t,n)}var uE;uE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,Xk(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,Qe&&e.flags&1048576&&fx(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nu(t,e),t=e.pendingProps;var i=ho(e,Ft.current);so(e,n),i=sg(null,e,r,t,i,n);var s=og();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xt(r)?(s=!0,sc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eg(e),i.updater=hd,e.stateNode=i,i._reactInternals=e,pp(e,r,t,n),e=yp(null,e,r,!0,s,n)):(e.tag=0,Qe&&s&&Km(e),Ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fR(r),t=On(r,t),i){case 0:e=gp(null,e,r,t,n);break e;case 1:e=r_(null,e,r,t,n);break e;case 11:e=t_(null,e,r,t,n);break e;case 14:e=n_(null,e,r,On(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),gp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),r_(t,e,r,i,n);case 3:e:{if(Gx(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,gx(t,e),cc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=yo(Error(L(423)),e),e=i_(t,e,r,n,i);break e}else if(r!==i){i=yo(Error(L(424)),e),e=i_(t,e,r,n,i);break e}else for(on=Xr(e.stateNode.containerInfo.firstChild),cn=e,Qe=!0,Dn=null,n=wx(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),r===i){e=Sr(t,e,n);break e}Ut(t,e,r,n)}e=e.child}return e;case 5:return xx(e),t===null&&dp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,op(r,i)?o=null:s!==null&&op(r,s)&&(e.flags|=32),Hx(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&dp(e),null;case 13:return Kx(t,e,n);case 4:return tg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mo(e,null,r,n):Ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),t_(t,e,r,i,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,We(lc,r._currentValue),r._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===i.children&&!Qt.current){e=Sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=yr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,so(e,n),i=Tn(i),r=r(i),e.flags|=1,Ut(t,e,r,n),e.child;case 14:return r=e.type,i=On(r,e.pendingProps),i=On(r.type,i),n_(t,e,r,i,n);case 15:return Wx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),Nu(t,e),e.tag=1,Xt(r)?(t=!0,sc(e)):t=!1,so(e,n),vx(e,r,i),pp(e,r,i,n),yp(null,e,r,!0,t,n);case 19:return Yx(t,e,n);case 22:return Vx(t,e,n)}throw Error(L(156,e.tag))};function cE(t,e){return L1(t,e)}function dR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,r){return new dR(t,e,n,r)}function gg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fR(t){if(typeof t=="function")return gg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mm)return 11;if(t===Lm)return 14}return 2}function ti(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fs:return Gi(n.children,i,s,e);case Dm:o=8,i|=8;break;case Fh:return t=Sn(12,n,e,i|2),t.elementType=Fh,t.lanes=s,t;case $h:return t=Sn(13,n,e,i),t.elementType=$h,t.lanes=s,t;case Uh:return t=Sn(19,n,e,i),t.elementType=Uh,t.lanes=s,t;case _1:return yd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y1:o=10;break e;case v1:o=9;break e;case Mm:o=11;break e;case Lm:o=14;break e;case Fr:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gi(t,e,n,r){return t=Sn(7,t,r,e),t.lanes=n,t}function yd(t,e,n,r){return t=Sn(22,t,r,e),t.elementType=_1,t.lanes=n,t.stateNode={isHidden:!1},t}function Yf(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function qf(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rf(0),this.expirationTimes=Rf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yg(t,e,n,r,i,s,o,a,l){return t=new hR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eg(s),t}function pR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function dE(t){if(!t)return di;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(Xt(n))return cx(t,n,e)}return e}function fE(t,e,n,r,i,s,o,a,l){return t=yg(n,r,!0,t,i,s,o,a,l),t.context=dE(null),n=t.current,r=Bt(),i=ei(n),s=yr(r,i),s.callback=e??null,Jr(n,s,i),t.current.lanes=i,Rl(t,i,r),Jt(t,r),t}function vd(t,e,n,r){var i=e.current,s=Bt(),o=ei(i);return n=dE(n),e.context===null?e.context=n:e.pendingContext=n,e=yr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jr(i,e,o),t!==null&&(Un(t,i,o,s),Pu(t,i,o)),o}function vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function p_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vg(t,e){p_(t,e),(t=t.alternate)&&p_(t,e)}function mR(){return null}var hE=typeof reportError=="function"?reportError:function(t){console.error(t)};function _g(t){this._internalRoot=t}_d.prototype.render=_g.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));vd(t,e,null,null)};_d.prototype.unmount=_g.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){vd(null,t,null,null)}),e[xr]=null}};function _d(t){this._internalRoot=t}_d.prototype.unstable_scheduleHydration=function(t){if(t){var e=W1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ur.length&&e!==0&&e<Ur[n].priority;n++);Ur.splice(n,0,t),n===0&&H1(t)}};function wg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function m_(){}function gR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=vc(o);s.call(u)}}var o=fE(e,r,t,0,null,!1,!1,"",m_);return t._reactRootContainer=o,t[xr]=o.current,Qa(t.nodeType===8?t.parentNode:t),ns(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vc(l);a.call(u)}}var l=yg(t,0,!1,null,null,!1,!1,"",m_);return t._reactRootContainer=l,t[xr]=l.current,Qa(t.nodeType===8?t.parentNode:t),ns(function(){vd(e,l,n,r)}),l}function xd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=vc(o);a.call(l)}}vd(e,o,t,i)}else o=gR(n,e,t,i,r);return vc(o)}z1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=va(e.pendingLanes);n!==0&&($m(e,n|1),Jt(e,st()),!(ke&6)&&(vo=st()+500,Ei()))}break;case 13:ns(function(){var r=Er(t,1);if(r!==null){var i=Bt();Un(r,t,1,i)}}),vg(t,1)}};Um=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=Bt();Un(e,t,134217728,n)}vg(t,134217728)}};B1=function(t){if(t.tag===13){var e=ei(t),n=Er(t,e);if(n!==null){var r=Bt();Un(n,t,e,r)}vg(t,e)}};W1=function(){return Ne};V1=function(t,e){var n=Ne;try{return Ne=t,e()}finally{Ne=n}};Qh=function(t,e,n){switch(e){case"input":if(Wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=dd(r);if(!i)throw Error(L(90));x1(r),Wh(r,i)}}}break;case"textarea":S1(t,n);break;case"select":e=n.value,e!=null&&to(t,!!n.multiple,e,!1)}};P1=hg;O1=ns;var yR={usingClientEntryPoint:!1,Events:[Ol,Bs,dd,k1,R1,hg]},ra={findFiberByHostInstance:ji,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vR={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D1(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||mR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{ad=pu.inject(vR),Jn=pu}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yR;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wg(e))throw Error(L(200));return pR(t,e,null,n)};pn.createRoot=function(t,e){if(!wg(t))throw Error(L(299));var n=!1,r="",i=hE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yg(t,1,!1,null,null,n,!1,r,i),t[xr]=e.current,Qa(t.nodeType===8?t.parentNode:t),new _g(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=D1(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return ns(t)};pn.hydrate=function(t,e,n){if(!wd(e))throw Error(L(200));return xd(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!wg(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fE(e,null,t,1,n??null,i,!1,s,o),t[xr]=e.current,Qa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _d(e)};pn.render=function(t,e,n){if(!wd(e))throw Error(L(200));return xd(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!wd(t))throw Error(L(40));return t._reactRootContainer?(ns(function(){xd(null,null,t,!1,function(){t._reactRootContainer=null,t[xr]=null})}),!0):!1};pn.unstable_batchedUpdates=hg;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wd(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return xd(t,e,n,!1,r)};pn.version="18.2.0-next-9e3b772b8-20220608";function pE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pE)}catch(t){console.error(t)}}pE(),f1.exports=pn;var xg=f1.exports;const _R=sd(xg),wR=t1({__proto__:null,default:_R},[xg]);var g_=xg;Lh.createRoot=g_.createRoot,Lh.hydrateRoot=g_.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rt(){return rt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rt.apply(this,arguments)}var it;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(it||(it={}));const y_="popstate";function xR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return sl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:is(i)}return SR(e,n,null,t)}function me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ER(){return Math.random().toString(36).substr(2,8)}function v_(t,e){return{usr:t.state,key:t.key,idx:e}}function sl(t,e,n,r){return n===void 0&&(n=null),rt({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Rr(e):e,{state:n,key:e&&e.key||r||ER()})}function is(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Rr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function SR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=it.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(rt({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=it.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:m})}function f(w,m){a=it.Push;let h=sl(v.location,w,m);n&&n(h,w),u=c()+1;let y=v_(h,u),E=v.createHref(h);try{o.pushState(y,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(w,m){a=it.Replace;let h=sl(v.location,w,m);n&&n(h,w),u=c();let y=v_(h,u),E=v.createHref(h);o.replaceState(y,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function g(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:is(w);return me(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(y_,d),l=w,()=>{i.removeEventListener(y_,d),l=null}},createHref(w){return e(i,w)},createURL:g,encodeLocation(w){let m=g(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(w){return o.go(w)}};return v}var tt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(tt||(tt={}));const CR=new Set(["lazy","caseSensitive","path","id","index","children"]);function TR(t){return t.index===!0}function Rp(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(me(i.index!==!0||!i.children,"Cannot specify children on an index route"),me(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),TR(i)){let l=rt({},i,e(i),{id:a});return r[a]=l,l}else{let l=rt({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Rp(i.children,e,o,r)),l}})}function qs(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Rr(e):e,i=Cr(r.pathname||"/",n);if(i==null)return null;let s=mE(t);IR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=LR(s[a],FR(i));return o}function bR(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function mE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=vr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),mE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:DR(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of gE(s.path))i(s,o,l)}),e}function gE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=gE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function IR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:MR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kR=/^:[\w-]+$/,RR=3,PR=2,OR=1,AR=10,NR=-2,__=t=>t==="*";function DR(t,e){let n=t.split("/"),r=n.length;return n.some(__)&&(r+=NR),e&&(r+=PR),n.filter(i=>!__(i)).reduce((i,s)=>i+(kR.test(s)?RR:s===""?OR:AR),r)}function MR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function LR(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Pp({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:vr([i,c.pathname]),pathnameBase:BR(vr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=vr([i,c.pathnameBase]))}return s}function Pp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=jR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let v=a[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const g=a[d];return p&&!g?u[f]=void 0:u[f]=$R(g||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function jR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),rs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function FR(t){try{return decodeURI(t)}catch(e){return rs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $R(t,e){try{return decodeURIComponent(t)}catch(n){return rs(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Cr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function UR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Rr(t):t;return{pathname:n?n.startsWith("/")?n:zR(n,e):e,search:WR(r),hash:VR(i)}}function zR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Eg(t,e){let n=yE(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Sg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Rr(t):(i=rt({},t),me(!i.pathname||!i.pathname.includes("?"),Qf("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),Qf("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),Qf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=UR(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const vr=t=>t.join("/").replace(/\/\/+/g,"/"),BR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),WR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,VR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Cg{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function vE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const _E=["post","put","patch","delete"],HR=new Set(_E),GR=["get",..._E],KR=new Set(GR),YR=new Set([301,302,303,307,308]),qR=new Set([307,308]),Xf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},QR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ia={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},wE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,XR=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),xE="remix-router-transitions";function JR(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;me(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let b=t.detectErrorBoundary;i=R=>({hasErrorBoundary:b(R)})}else i=XR;let s={},o=Rp(t.routes,i,void 0,s),a,l=t.basename||"/",u=rt({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},t.future),c=null,d=new Set,f=null,p=null,g=null,v=t.hydrationData!=null,w=qs(o,t.history.location,l),m=null;if(w==null){let b=wn(404,{pathname:t.history.location.pathname}),{matches:R,route:O}=I_(o);w=R,m={[O.id]:b}}let h,y=w.some(b=>b.route.lazy),E=w.some(b=>b.route.loader);if(y)h=!1;else if(!E)h=!0;else if(u.v7_partialHydration){let b=t.hydrationData?t.hydrationData.loaderData:null,R=t.hydrationData?t.hydrationData.errors:null;h=w.every(O=>O.route.loader&&O.route.loader.hydrate!==!0&&(b&&b[O.route.id]!==void 0||R&&R[O.route.id]!==void 0))}else h=t.hydrationData!=null;let T,_={historyAction:t.history.action,location:t.history.location,matches:w,initialized:h,navigation:Xf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},S=it.Pop,P=!1,k,A=!1,N=new Map,G=null,j=!1,Z=!1,Ie=[],Oe=[],de=new Map,z=0,K=-1,q=new Map,ne=new Set,se=new Map,at=new Map,Re=new Set,Le=new Map,Se=new Map,$e=!1;function Ht(){if(c=t.history.listen(b=>{let{action:R,location:O,delta:B}=b;if($e){$e=!1;return}rs(Se.size===0||B!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Y=sv({currentLocation:_.location,nextLocation:O,historyAction:R});if(Y&&B!=null){$e=!0,t.history.go(B*-1),ks(Y,{state:"blocked",location:O,proceed(){ks(Y,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),t.history.go(B)},reset(){let ge=new Map(_.blockers);ge.set(Y,ia),$({blockers:ge})}});return}return le(R,O)}),n){uP(e,N);let b=()=>cP(e,N);e.addEventListener("pagehide",b),G=()=>e.removeEventListener("pagehide",b)}return _.initialized||le(it.Pop,_.location,{initialHydration:!0}),T}function It(){c&&c(),G&&G(),d.clear(),k&&k.abort(),_.fetchers.forEach((b,R)=>be(R)),_.blockers.forEach((b,R)=>qo(R))}function M(b){return d.add(b),()=>d.delete(b)}function $(b,R){R===void 0&&(R={}),_=rt({},_,b);let O=[],B=[];u.v7_fetcherPersist&&_.fetchers.forEach((Y,ge)=>{Y.state==="idle"&&(Re.has(ge)?B.push(ge):O.push(ge))}),[...d].forEach(Y=>Y(_,{deletedFetchers:B,unstable_viewTransitionOpts:R.viewTransitionOpts,unstable_flushSync:R.flushSync===!0})),u.v7_fetcherPersist&&(O.forEach(Y=>_.fetchers.delete(Y)),B.forEach(Y=>be(Y)))}function J(b,R,O){var B,Y;let{flushSync:ge}=O===void 0?{}:O,re=_.actionData!=null&&_.navigation.formMethod!=null&&Nn(_.navigation.formMethod)&&_.navigation.state==="loading"&&((B=b.state)==null?void 0:B._isRedirect)!==!0,te;R.actionData?Object.keys(R.actionData).length>0?te=R.actionData:te=null:re?te=_.actionData:te=null;let X=R.loaderData?b_(_.loaderData,R.loaderData,R.matches||[],R.errors):_.loaderData,Te=_.blockers;Te.size>0&&(Te=new Map(Te),Te.forEach((Ue,kt)=>Te.set(kt,ia)));let gt=P===!0||_.navigation.formMethod!=null&&Nn(_.navigation.formMethod)&&((Y=b.state)==null?void 0:Y._isRedirect)!==!0;a&&(o=a,a=void 0),j||S===it.Pop||(S===it.Push?t.history.push(b,b.state):S===it.Replace&&t.history.replace(b,b.state));let he;if(S===it.Pop){let Ue=N.get(_.location.pathname);Ue&&Ue.has(b.pathname)?he={currentLocation:_.location,nextLocation:b}:N.has(b.pathname)&&(he={currentLocation:b,nextLocation:_.location})}else if(A){let Ue=N.get(_.location.pathname);Ue?Ue.add(b.pathname):(Ue=new Set([b.pathname]),N.set(_.location.pathname,Ue)),he={currentLocation:_.location,nextLocation:b}}$(rt({},R,{actionData:te,loaderData:X,historyAction:S,location:b,initialized:!0,navigation:Xf,revalidation:"idle",restoreScrollPosition:av(b,R.matches||_.matches),preventScrollReset:gt,blockers:Te}),{viewTransitionOpts:he,flushSync:ge===!0}),S=it.Pop,P=!1,A=!1,j=!1,Z=!1,Ie=[],Oe=[]}async function ae(b,R){if(typeof b=="number"){t.history.go(b);return}let O=Op(_.location,_.matches,l,u.v7_prependBasename,b,u.v7_relativeSplatPath,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:B,submission:Y,error:ge}=w_(u.v7_normalizeFormMethod,!1,O,R),re=_.location,te=sl(_.location,B,R&&R.state);te=rt({},te,t.history.encodeLocation(te));let X=R&&R.replace!=null?R.replace:void 0,Te=it.Push;X===!0?Te=it.Replace:X===!1||Y!=null&&Nn(Y.formMethod)&&Y.formAction===_.location.pathname+_.location.search&&(Te=it.Replace);let gt=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,he=(R&&R.unstable_flushSync)===!0,Ue=sv({currentLocation:re,nextLocation:te,historyAction:Te});if(Ue){ks(Ue,{state:"blocked",location:te,proceed(){ks(Ue,{state:"proceeding",proceed:void 0,reset:void 0,location:te}),ae(b,R)},reset(){let kt=new Map(_.blockers);kt.set(Ue,ia),$({blockers:kt})}});return}return await le(Te,te,{submission:Y,pendingError:ge,preventScrollReset:gt,replace:R&&R.replace,enableViewTransition:R&&R.unstable_viewTransition,flushSync:he})}function oe(){if(U(),$({revalidation:"loading"}),_.navigation.state!=="submitting"){if(_.navigation.state==="idle"){le(_.historyAction,_.location,{startUninterruptedRevalidation:!0});return}le(S||_.historyAction,_.navigation.location,{overrideNavigation:_.navigation})}}async function le(b,R,O){k&&k.abort(),k=null,S=b,j=(O&&O.startUninterruptedRevalidation)===!0,Vb(_.location,_.matches),P=(O&&O.preventScrollReset)===!0,A=(O&&O.enableViewTransition)===!0;let B=a||o,Y=O&&O.overrideNavigation,ge=qs(B,R,l),re=(O&&O.flushSync)===!0;if(!ge){let kt=wn(404,{pathname:R.pathname}),{matches:yn,route:yt}=I_(B);_f(),J(R,{matches:yn,loaderData:{},errors:{[yt.id]:kt}},{flushSync:re});return}if(_.initialized&&!Z&&rP(_.location,R)&&!(O&&O.submission&&Nn(O.submission.formMethod))){J(R,{matches:ge},{flushSync:re});return}k=new AbortController;let te=oa(t.history,R,k.signal,O&&O.submission),X,Te;if(O&&O.pendingError)Te={[Na(ge).route.id]:O.pendingError};else if(O&&O.submission&&Nn(O.submission.formMethod)){let kt=await ue(te,R,O.submission,ge,{replace:O.replace,flushSync:re});if(kt.shortCircuited)return;X=kt.pendingActionData,Te=kt.pendingActionError,Y=Jf(R,O.submission),re=!1,te=new Request(te.url,{signal:te.signal})}let{shortCircuited:gt,loaderData:he,errors:Ue}=await fe(te,R,ge,Y,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,O&&O.initialHydration===!0,re,X,Te);gt||(k=null,J(R,rt({matches:ge},X?{actionData:X}:{},{loaderData:he,errors:Ue})))}async function ue(b,R,O,B,Y){Y===void 0&&(Y={}),U();let ge=aP(R,O);$({navigation:ge},{flushSync:Y.flushSync===!0});let re,te=Np(B,R);if(!te.route.action&&!te.route.lazy)re={type:tt.error,error:wn(405,{method:b.method,pathname:R.pathname,routeId:te.route.id})};else if(re=await sa("action",b,te,B,s,i,l,u.v7_relativeSplatPath),b.signal.aborted)return{shortCircuited:!0};if(zi(re)){let X;return Y&&Y.replace!=null?X=Y.replace:X=re.location===_.location.pathname+_.location.search,await W(_,re,{submission:O,replace:X}),{shortCircuited:!0}}if(Qs(re)){let X=Na(B,te.route.id);return(Y&&Y.replace)!==!0&&(S=it.Push),{pendingActionData:{},pendingActionError:{[X.route.id]:re.error}}}if(Ui(re))throw wn(400,{type:"defer-action"});return{pendingActionData:{[te.route.id]:re.data}}}async function fe(b,R,O,B,Y,ge,re,te,X,Te,gt){let he=B||Jf(R,Y),Ue=Y||ge||P_(he),kt=a||o,[yn,yt]=x_(t.history,_,O,Ue,R,u.v7_partialHydration&&te===!0,Z,Ie,Oe,Re,se,ne,kt,l,Te,gt);if(_f(je=>!(O&&O.some(qe=>qe.route.id===je))||yn&&yn.some(qe=>qe.route.id===je)),K=++z,yn.length===0&&yt.length===0){let je=Is();return J(R,rt({matches:O,loaderData:{},errors:gt||null},Te?{actionData:Te}:{},je?{fetchers:new Map(_.fetchers)}:{}),{flushSync:X}),{shortCircuited:!0}}if(!j&&(!u.v7_partialHydration||!te)){yt.forEach(qe=>{let Gn=_.fetchers.get(qe.key),Xl=aa(void 0,Gn?Gn.data:void 0);_.fetchers.set(qe.key,Xl)});let je=Te||_.actionData;$(rt({navigation:he},je?Object.keys(je).length===0?{actionData:null}:{actionData:je}:{},yt.length>0?{fetchers:new Map(_.fetchers)}:{}),{flushSync:X})}yt.forEach(je=>{de.has(je.key)&&mt(je.key),je.controller&&de.set(je.key,je.controller)});let Rs=()=>yt.forEach(je=>mt(je.key));k&&k.signal.addEventListener("abort",Rs);let{results:wf,loaderResults:Ps,fetcherResults:Ar}=await I(_.matches,O,yn,yt,b);if(b.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",Rs),yt.forEach(je=>de.delete(je.key));let ki=k_(wf);if(ki){if(ki.idx>=yn.length){let je=yt[ki.idx-yn.length].key;ne.add(je)}return await W(_,ki.result,{replace:re}),{shortCircuited:!0}}let{loaderData:xf,errors:Ef}=T_(_,O,yn,Ps,gt,yt,Ar,Le);Le.forEach((je,qe)=>{je.subscribe(Gn=>{(Gn||je.done)&&Le.delete(qe)})});let Sf=Is(),Os=ql(K),Ql=Sf||Os||yt.length>0;return rt({loaderData:xf,errors:Ef},Ql?{fetchers:new Map(_.fetchers)}:{})}function we(b,R,O,B){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");de.has(b)&&mt(b);let Y=(B&&B.unstable_flushSync)===!0,ge=a||o,re=Op(_.location,_.matches,l,u.v7_prependBasename,O,u.v7_relativeSplatPath,R,B==null?void 0:B.relative),te=qs(ge,re,l);if(!te){Q(b,R,wn(404,{pathname:re}),{flushSync:Y});return}let{path:X,submission:Te,error:gt}=w_(u.v7_normalizeFormMethod,!0,re,B);if(gt){Q(b,R,gt,{flushSync:Y});return}let he=Np(te,X);if(P=(B&&B.preventScrollReset)===!0,Te&&Nn(Te.formMethod)){Ce(b,R,X,he,te,Y,Te);return}se.set(b,{routeId:R,path:X}),xe(b,R,X,he,te,Y,Te)}async function Ce(b,R,O,B,Y,ge,re){if(U(),se.delete(b),!B.route.action&&!B.route.lazy){let qe=wn(405,{method:re.formMethod,pathname:O,routeId:R});Q(b,R,qe,{flushSync:ge});return}let te=_.fetchers.get(b);V(b,lP(re,te),{flushSync:ge});let X=new AbortController,Te=oa(t.history,O,X.signal,re);de.set(b,X);let gt=z,he=await sa("action",Te,B,Y,s,i,l,u.v7_relativeSplatPath);if(Te.signal.aborted){de.get(b)===X&&de.delete(b);return}if(u.v7_fetcherPersist&&Re.has(b)){if(zi(he)||Qs(he)){V(b,Mr(void 0));return}}else{if(zi(he))if(de.delete(b),K>gt){V(b,Mr(void 0));return}else return ne.add(b),V(b,aa(re)),W(_,he,{fetcherSubmission:re});if(Qs(he)){Q(b,R,he.error);return}}if(Ui(he))throw wn(400,{type:"defer-action"});let Ue=_.navigation.location||_.location,kt=oa(t.history,Ue,X.signal),yn=a||o,yt=_.navigation.state!=="idle"?qs(yn,_.navigation.location,l):_.matches;me(yt,"Didn't find any matches after fetcher action");let Rs=++z;q.set(b,Rs);let wf=aa(re,he.data);_.fetchers.set(b,wf);let[Ps,Ar]=x_(t.history,_,yt,re,Ue,!1,Z,Ie,Oe,Re,se,ne,yn,l,{[B.route.id]:he.data},void 0);Ar.filter(qe=>qe.key!==b).forEach(qe=>{let Gn=qe.key,Xl=_.fetchers.get(Gn),Gb=aa(void 0,Xl?Xl.data:void 0);_.fetchers.set(Gn,Gb),de.has(Gn)&&mt(Gn),qe.controller&&de.set(Gn,qe.controller)}),$({fetchers:new Map(_.fetchers)});let ki=()=>Ar.forEach(qe=>mt(qe.key));X.signal.addEventListener("abort",ki);let{results:xf,loaderResults:Ef,fetcherResults:Sf}=await I(_.matches,yt,Ps,Ar,kt);if(X.signal.aborted)return;X.signal.removeEventListener("abort",ki),q.delete(b),de.delete(b),Ar.forEach(qe=>de.delete(qe.key));let Os=k_(xf);if(Os){if(Os.idx>=Ps.length){let qe=Ar[Os.idx-Ps.length].key;ne.add(qe)}return W(_,Os.result)}let{loaderData:Ql,errors:je}=T_(_,_.matches,Ps,Ef,void 0,Ar,Sf,Le);if(_.fetchers.has(b)){let qe=Mr(he.data);_.fetchers.set(b,qe)}ql(Rs),_.navigation.state==="loading"&&Rs>K?(me(S,"Expected pending action"),k&&k.abort(),J(_.navigation.location,{matches:yt,loaderData:Ql,errors:je,fetchers:new Map(_.fetchers)})):($({errors:je,loaderData:b_(_.loaderData,Ql,yt,je),fetchers:new Map(_.fetchers)}),Z=!1)}async function xe(b,R,O,B,Y,ge,re){let te=_.fetchers.get(b);V(b,aa(re,te?te.data:void 0),{flushSync:ge});let X=new AbortController,Te=oa(t.history,O,X.signal);de.set(b,X);let gt=z,he=await sa("loader",Te,B,Y,s,i,l,u.v7_relativeSplatPath);if(Ui(he)&&(he=await CE(he,Te.signal,!0)||he),de.get(b)===X&&de.delete(b),!Te.signal.aborted){if(Re.has(b)){V(b,Mr(void 0));return}if(zi(he))if(K>gt){V(b,Mr(void 0));return}else{ne.add(b),await W(_,he);return}if(Qs(he)){Q(b,R,he.error);return}me(!Ui(he),"Unhandled fetcher deferred data"),V(b,Mr(he.data))}}async function W(b,R,O){let{submission:B,fetcherSubmission:Y,replace:ge}=O===void 0?{}:O;R.revalidate&&(Z=!0);let re=sl(b.location,R.location,{_isRedirect:!0});if(me(re,"Expected a location on the redirect navigation"),n){let Ue=!1;if(R.reloadDocument)Ue=!0;else if(wE.test(R.location)){const kt=t.history.createURL(R.location);Ue=kt.origin!==e.location.origin||Cr(kt.pathname,l)==null}if(Ue){ge?e.location.replace(R.location):e.location.assign(R.location);return}}k=null;let te=ge===!0?it.Replace:it.Push,{formMethod:X,formAction:Te,formEncType:gt}=b.navigation;!B&&!Y&&X&&Te&&gt&&(B=P_(b.navigation));let he=B||Y;if(qR.has(R.status)&&he&&Nn(he.formMethod))await le(te,re,{submission:rt({},he,{formAction:R.location}),preventScrollReset:P});else{let Ue=Jf(re,B);await le(te,re,{overrideNavigation:Ue,fetcherSubmission:Y,preventScrollReset:P})}}async function I(b,R,O,B,Y){let ge=await Promise.all([...O.map(X=>sa("loader",Y,X,R,s,i,l,u.v7_relativeSplatPath)),...B.map(X=>X.matches&&X.match&&X.controller?sa("loader",oa(t.history,X.path,X.controller.signal),X.match,X.matches,s,i,l,u.v7_relativeSplatPath):{type:tt.error,error:wn(404,{pathname:X.path})})]),re=ge.slice(0,O.length),te=ge.slice(O.length);return await Promise.all([R_(b,O,re,re.map(()=>Y.signal),!1,_.loaderData),R_(b,B.map(X=>X.match),te,B.map(X=>X.controller?X.controller.signal:null),!0)]),{results:ge,loaderResults:re,fetcherResults:te}}function U(){Z=!0,Ie.push(..._f()),se.forEach((b,R)=>{de.has(R)&&(Oe.push(R),mt(R))})}function V(b,R,O){O===void 0&&(O={}),_.fetchers.set(b,R),$({fetchers:new Map(_.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function Q(b,R,O,B){B===void 0&&(B={});let Y=Na(_.matches,R);be(b),$({errors:{[Y.route.id]:O},fetchers:new Map(_.fetchers)},{flushSync:(B&&B.flushSync)===!0})}function ce(b){return u.v7_fetcherPersist&&(at.set(b,(at.get(b)||0)+1),Re.has(b)&&Re.delete(b)),_.fetchers.get(b)||QR}function be(b){let R=_.fetchers.get(b);de.has(b)&&!(R&&R.state==="loading"&&q.has(b))&&mt(b),se.delete(b),q.delete(b),ne.delete(b),Re.delete(b),_.fetchers.delete(b)}function lt(b){if(u.v7_fetcherPersist){let R=(at.get(b)||0)-1;R<=0?(at.delete(b),Re.add(b)):at.set(b,R)}else be(b);$({fetchers:new Map(_.fetchers)})}function mt(b){let R=de.get(b);me(R,"Expected fetch controller: "+b),R.abort(),de.delete(b)}function bs(b){for(let R of b){let O=ce(R),B=Mr(O.data);_.fetchers.set(R,B)}}function Is(){let b=[],R=!1;for(let O of ne){let B=_.fetchers.get(O);me(B,"Expected fetcher: "+O),B.state==="loading"&&(ne.delete(O),b.push(O),R=!0)}return bs(b),R}function ql(b){let R=[];for(let[O,B]of q)if(B<b){let Y=_.fetchers.get(O);me(Y,"Expected fetcher: "+O),Y.state==="loading"&&(mt(O),q.delete(O),R.push(O))}return bs(R),R.length>0}function iv(b,R){let O=_.blockers.get(b)||ia;return Se.get(b)!==R&&Se.set(b,R),O}function qo(b){_.blockers.delete(b),Se.delete(b)}function ks(b,R){let O=_.blockers.get(b)||ia;me(O.state==="unblocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="proceeding"||O.state==="blocked"&&R.state==="unblocked"||O.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+R.state);let B=new Map(_.blockers);B.set(b,R),$({blockers:B})}function sv(b){let{currentLocation:R,nextLocation:O,historyAction:B}=b;if(Se.size===0)return;Se.size>1&&rs(!1,"A router only supports one blocker at a time");let Y=Array.from(Se.entries()),[ge,re]=Y[Y.length-1],te=_.blockers.get(ge);if(!(te&&te.state==="proceeding")&&re({currentLocation:R,nextLocation:O,historyAction:B}))return ge}function _f(b){let R=[];return Le.forEach((O,B)=>{(!b||b(B))&&(O.cancel(),R.push(B),Le.delete(B))}),R}function Wb(b,R,O){if(f=b,g=R,p=O||null,!v&&_.navigation===Xf){v=!0;let B=av(_.location,_.matches);B!=null&&$({restoreScrollPosition:B})}return()=>{f=null,g=null,p=null}}function ov(b,R){return p&&p(b,R.map(B=>bR(B,_.loaderData)))||b.key}function Vb(b,R){if(f&&g){let O=ov(b,R);f[O]=g()}}function av(b,R){if(f){let O=ov(b,R),B=f[O];if(typeof B=="number")return B}return null}function Hb(b){s={},a=Rp(b,i,void 0,s)}return T={get basename(){return l},get future(){return u},get state(){return _},get routes(){return o},get window(){return e},initialize:Ht,subscribe:M,enableScrollRestoration:Wb,navigate:ae,fetch:we,revalidate:oe,createHref:b=>t.history.createHref(b),encodeLocation:b=>t.history.encodeLocation(b),getFetcher:ce,deleteFetcher:lt,dispose:It,getBlocker:iv,deleteBlocker:qo,_internalFetchControllers:de,_internalActiveDeferreds:Le,_internalSetRoutes:Hb},T}function ZR(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Op(t,e,n,r,i,s,o,a){let l,u;if(o){l=[];for(let d of e)if(l.push(d),d.route.id===o){u=d;break}}else l=e,u=e[e.length-1];let c=Sg(i||".",Eg(l,s),Cr(t.pathname,n)||t.pathname,a==="path");return i==null&&(c.search=t.search,c.hash=t.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Tg(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:vr([n,c.pathname])),is(c)}function w_(t,e,n,r){if(!r||!ZR(r))return{path:n};if(r.formMethod&&!oP(r.formMethod))return{path:n,error:wn(405,{method:r.formMethod})};let i=()=>({path:n,error:wn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=SE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Nn(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,g)=>{let[v,w]=g;return""+p+v+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Nn(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}me(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Ap(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Ap(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=C_(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=C_(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Nn(c.formMethod))return{path:n,submission:c};let d=Rr(n);return e&&d.search&&Tg(d.search)&&l.append("index",""),d.search="?"+l,{path:is(d),submission:c}}function eP(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function x_(t,e,n,r,i,s,o,a,l,u,c,d,f,p,g,v){let w=v?Object.values(v)[0]:g?Object.values(g)[0]:void 0,m=t.createURL(e.location),h=t.createURL(i),y=v?Object.keys(v)[0]:void 0,T=eP(n,y).filter((S,P)=>{let{route:k}=S;if(k.lazy)return!0;if(k.loader==null)return!1;if(s)return k.loader.hydrate?!0:e.loaderData[k.id]===void 0&&(!e.errors||e.errors[k.id]===void 0);if(tP(e.loaderData,e.matches[P],S)||a.some(G=>G===S.route.id))return!0;let A=e.matches[P],N=S;return E_(S,rt({currentUrl:m,currentParams:A.params,nextUrl:h,nextParams:N.params},r,{actionResult:w,defaultShouldRevalidate:o||m.pathname+m.search===h.pathname+h.search||m.search!==h.search||EE(A,N)}))}),_=[];return c.forEach((S,P)=>{if(s||!n.some(j=>j.route.id===S.routeId)||u.has(P))return;let k=qs(f,S.path,p);if(!k){_.push({key:P,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let A=e.fetchers.get(P),N=Np(k,S.path),G=!1;d.has(P)?G=!1:l.includes(P)?G=!0:A&&A.state!=="idle"&&A.data===void 0?G=o:G=E_(N,rt({currentUrl:m,currentParams:e.matches[e.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:w,defaultShouldRevalidate:o})),G&&_.push({key:P,routeId:S.routeId,path:S.path,matches:k,match:N,controller:new AbortController})}),[T,_]}function tP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function EE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function E_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function S_(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];me(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";rs(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!CR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,rt({},e(i),{lazy:void 0}))}async function sa(t,e,n,r,i,s,o,a,l){l===void 0&&(l={});let u,c,d,f=v=>{let w,m=new Promise((h,y)=>w=y);return d=()=>w(),e.signal.addEventListener("abort",d),Promise.race([v({request:e,params:n.params,context:l.requestContext}),m])};try{let v=n.route[t];if(n.route.lazy)if(v){let w,m=await Promise.all([f(v).catch(h=>{w=h}),S_(n.route,s,i)]);if(w)throw w;c=m[0]}else if(await S_(n.route,s,i),v=n.route[t],v)c=await f(v);else if(t==="action"){let w=new URL(e.url),m=w.pathname+w.search;throw wn(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:tt.data,data:void 0};else if(v)c=await f(v);else{let w=new URL(e.url),m=w.pathname+w.search;throw wn(404,{pathname:m})}me(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){u=tt.error,c=v}finally{d&&e.signal.removeEventListener("abort",d)}if(sP(c)){let v=c.status;if(YR.has(v)){let m=c.headers.get("Location");if(me(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!wE.test(m))m=Op(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m,a);else if(!l.isStaticRequest){let h=new URL(e.url),y=m.startsWith("//")?new URL(h.protocol+m):new URL(m),E=Cr(y.pathname,o)!=null;y.origin===h.origin&&E&&(m=y.pathname+y.search+y.hash)}if(l.isStaticRequest)throw c.headers.set("Location",m),c;return{type:tt.redirect,status:v,location:m,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===tt.error?tt.error:tt.data,response:c};let w;try{let m=c.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?c.body==null?w=null:w=await c.json():w=await c.text()}catch(m){return{type:tt.error,error:m}}return u===tt.error?{type:u,error:new Cg(v,c.statusText,w),headers:c.headers}:{type:tt.data,data:w,statusCode:c.status,headers:c.headers}}if(u===tt.error)return{type:u,error:c};if(iP(c)){var p,g;return{type:tt.deferred,deferredData:c,statusCode:(p=c.init)==null?void 0:p.status,headers:((g=c.init)==null?void 0:g.headers)&&new Headers(c.init.headers)}}return{type:tt.data,data:c}}function oa(t,e,n,r){let i=t.createURL(SE(e)).toString(),s={signal:n};if(r&&Nn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Ap(r.formData):s.body=r.formData}return new Request(i,s)}function Ap(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function C_(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function nP(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(me(!zi(c),"Cannot handle redirect results in processLoaderData"),Qs(c)){let p=Na(t,f),g=c.error;r&&(g=Object.values(r)[0],r=void 0),o=o||{},o[p.route.id]==null&&(o[p.route.id]=g),s[f]=void 0,l||(l=!0,a=vE(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else Ui(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function T_(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=nP(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:p}=s[c];me(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let g=o[c];if(!(p&&p.signal.aborted))if(Qs(g)){let v=Na(t.matches,f==null?void 0:f.route.id);u&&u[v.route.id]||(u=rt({},u,{[v.route.id]:g.error})),t.fetchers.delete(d)}else if(zi(g))me(!1,"Unhandled fetcher revalidation redirect");else if(Ui(g))me(!1,"Unhandled fetcher deferred data");else{let v=Mr(g.data);t.fetchers.set(d,v)}}return{loaderData:l,errors:u}}function b_(t,e,n,r){let i=rt({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Na(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function I_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function wn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Cg(t||500,o,new Error(a),!0)}function k_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(zi(n))return{result:n,idx:e}}}function SE(t){let e=typeof t=="string"?Rr(t):t;return is(rt({},e,{hash:""}))}function rP(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Ui(t){return t.type===tt.deferred}function Qs(t){return t.type===tt.error}function zi(t){return(t&&t.type)===tt.redirect}function iP(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function sP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function oP(t){return KR.has(t.toLowerCase())}function Nn(t){return HR.has(t.toLowerCase())}async function R_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!EE(u,l)&&(s&&s[l.route.id])!==void 0;if(Ui(a)&&(i||c)){let d=r[o];me(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await CE(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function CE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:tt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:tt.error,error:i}}return{type:tt.data,data:t.deferredData.data}}}function Tg(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Np(t,e){let n=typeof e=="string"?Rr(e).search:e.search;if(t[t.length-1].route.index&&Tg(n||""))return t[t.length-1];let r=yE(t);return r[r.length-1]}function P_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Jf(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function aP(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function aa(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function lP(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Mr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function uP(t,e){try{let n=t.sessionStorage.getItem(xE);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function cP(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(xE,JSON.stringify(n))}catch(r){rs(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ol.apply(this,arguments)}const Nl=C.createContext(null),bg=C.createContext(null),Si=C.createContext(null),Ed=C.createContext(null),Ci=C.createContext({outlet:null,matches:[],isDataRoute:!1}),TE=C.createContext(null);function dP(t,e){let{relative:n}=e===void 0?{}:e;Dl()||me(!1);let{basename:r,navigator:i}=C.useContext(Si),{hash:s,pathname:o,search:a}=Sd(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:vr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Dl(){return C.useContext(Ed)!=null}function Fo(){return Dl()||me(!1),C.useContext(Ed).location}function bE(t){C.useContext(Si).static||C.useLayoutEffect(t)}function Ig(){let{isDataRoute:t}=C.useContext(Ci);return t?CP():fP()}function fP(){Dl()||me(!1);let t=C.useContext(Nl),{basename:e,future:n,navigator:r}=C.useContext(Si),{matches:i}=C.useContext(Ci),{pathname:s}=Fo(),o=JSON.stringify(Eg(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return bE(()=>{a.current=!0}),C.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Sg(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:vr([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}const hP=C.createContext(null);function pP(t){let e=C.useContext(Ci).outlet;return e&&C.createElement(hP.Provider,{value:t},e)}function Sd(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.useContext(Si),{matches:i}=C.useContext(Ci),{pathname:s}=Fo(),o=JSON.stringify(Eg(i,r.v7_relativeSplatPath));return C.useMemo(()=>Sg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function mP(t,e,n,r){Dl()||me(!1);let{navigator:i}=C.useContext(Si),{matches:s}=C.useContext(Ci),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Fo(),c;if(e){var d;let w=typeof e=="string"?Rr(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||me(!1),c=w}else c=u;let f=c.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",g=qs(t,{pathname:p}),v=wP(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:vr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:vr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&v?C.createElement(Ed.Provider,{value:{location:ol({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:it.Pop}},v):v}function gP(){let t=RE(),e=vE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,null)}const yP=C.createElement(gP,null);class vP extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?C.createElement(Ci.Provider,{value:this.props.routeContext},C.createElement(TE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _P(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Nl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Ci.Provider,{value:e},r)}function wP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||me(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:p}=n,g=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let p,g=!1,v=null,w=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||yP,l&&(u<0&&f===0?(TP("route-fallback",!1),g=!0,w=null):u===f&&(g=!0,w=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),h=()=>{let y;return p?y=v:g?y=w:d.route.Component?y=C.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,C.createElement(_P,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?C.createElement(vP,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var IE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(IE||{}),_c=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(_c||{});function xP(t){let e=C.useContext(Nl);return e||me(!1),e}function EP(t){let e=C.useContext(bg);return e||me(!1),e}function SP(t){let e=C.useContext(Ci);return e||me(!1),e}function kE(t){let e=SP(),n=e.matches[e.matches.length-1];return n.route.id||me(!1),n.route.id}function RE(){var t;let e=C.useContext(TE),n=EP(_c.UseRouteError),r=kE(_c.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function CP(){let{router:t}=xP(IE.UseNavigateStable),e=kE(_c.UseNavigateStable),n=C.useRef(!1);return bE(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ol({fromRouteId:e},s)))},[t,e])}const O_={};function TP(t,e,n){!e&&!O_[t]&&(O_[t]=!0)}function bP(t){return pP(t.context)}function IP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=it.Pop,navigator:s,static:o=!1,future:a}=t;Dl()&&me(!1);let l=e.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:s,static:o,future:ol({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Rr(r));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:g="default"}=r,v=C.useMemo(()=>{let w=Cr(c,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:p,key:g},navigationType:i}},[l,c,d,f,p,g,i]);return v==null?null:C.createElement(Si.Provider,{value:u},C.createElement(Ed.Provider,{children:n,value:v}))}new Promise(()=>{});function kP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:C.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:C.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:C.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_o.apply(this,arguments)}function PE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function RP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function PP(t,e){return t.button===0&&(!e||e==="_self")&&!RP(t)}const OP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],AP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],NP="6";try{window.__reactRouterVersion=NP}catch{}function DP(t,e){return JR({basename:e==null?void 0:e.basename,future:_o({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:xR({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||MP(),routes:t,mapRouteProperties:kP,window:e==null?void 0:e.window}).initialize()}function MP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=_o({},e,{errors:LP(e.errors)})),e}function LP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Cg(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const OE=C.createContext({isTransitioning:!1}),jP=C.createContext(new Map),FP="startTransition",A_=Mh[FP],$P="flushSync",N_=wR[$P];function UP(t){A_?A_(t):t()}function la(t){N_?N_(t):t()}let zP=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function BP(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=C.useState(n.state),[o,a]=C.useState(),[l,u]=C.useState({isTransitioning:!1}),[c,d]=C.useState(),[f,p]=C.useState(),[g,v]=C.useState(),w=C.useRef(new Map),{v7_startTransition:m}=r||{},h=C.useCallback(S=>{m?UP(S):S()},[m]),y=C.useCallback((S,P)=>{let{deletedFetchers:k,unstable_flushSync:A,unstable_viewTransitionOpts:N}=P;k.forEach(j=>w.current.delete(j)),S.fetchers.forEach((j,Z)=>{j.data!==void 0&&w.current.set(Z,j.data)});let G=n.window==null||typeof n.window.document.startViewTransition!="function";if(!N||G){A?la(()=>s(S)):h(()=>s(S));return}if(A){la(()=>{f&&(c&&c.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation})});let j=n.window.document.startViewTransition(()=>{la(()=>s(S))});j.finished.finally(()=>{la(()=>{d(void 0),p(void 0),a(void 0),u({isTransitioning:!1})})}),la(()=>p(j));return}f?(c&&c.resolve(),f.skipTransition(),v({state:S,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(a(S),u({isTransitioning:!0,flushSync:!1,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[n.window,f,c,w,h]);C.useLayoutEffect(()=>n.subscribe(y),[n,y]),C.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new zP)},[l]),C.useEffect(()=>{if(c&&o&&n.window){let S=o,P=c.promise,k=n.window.document.startViewTransition(async()=>{h(()=>s(S)),await P});k.finished.finally(()=>{d(void 0),p(void 0),a(void 0),u({isTransitioning:!1})}),p(k)}},[h,o,c,n.window]),C.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,f,i.location,o]),C.useEffect(()=>{!l.isTransitioning&&g&&(a(g.state),u({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),v(void 0))},[l.isTransitioning,g]),C.useEffect(()=>{},[]);let E=C.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:S=>n.navigate(S),push:(S,P,k)=>n.navigate(S,{state:P,preventScrollReset:k==null?void 0:k.preventScrollReset}),replace:(S,P,k)=>n.navigate(S,{replace:!0,state:P,preventScrollReset:k==null?void 0:k.preventScrollReset})}),[n]),T=n.basename||"/",_=C.useMemo(()=>({router:n,navigator:E,static:!1,basename:T}),[n,E,T]);return C.createElement(C.Fragment,null,C.createElement(Nl.Provider,{value:_},C.createElement(bg.Provider,{value:i},C.createElement(jP.Provider,{value:w.current},C.createElement(OE.Provider,{value:l},C.createElement(IP,{basename:T,location:i.location,navigationType:i.historyAction,navigator:E,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?C.createElement(WP,{routes:n.routes,future:n.future,state:i}):e))))),null)}function WP(t){let{routes:e,future:n,state:r}=t;return mP(e,void 0,r,n)}const VP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cd=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=PE(e,OP),{basename:p}=C.useContext(Si),g,v=!1;if(typeof u=="string"&&HP.test(u)&&(g=u,VP))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),T=Cr(E.pathname,p);E.origin===y.origin&&T!=null?u=T+E.search+E.hash:v=!0}catch{}let w=dP(u,{relative:i}),m=YP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(y){r&&r(y),y.defaultPrevented||m(y)}return C.createElement("a",_o({},f,{href:g||w,onClick:v||s?r:h,ref:n,target:l}))}),GP=C.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=PE(e,AP),f=Sd(l,{relative:d.relative}),p=Fo(),g=C.useContext(bg),{navigator:v,basename:w}=C.useContext(Si),m=g!=null&&qP(f)&&u===!0,h=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,y=p.pathname,E=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(y=y.toLowerCase(),E=E?E.toLowerCase():null,h=h.toLowerCase()),E&&w&&(E=Cr(E,w)||E);const T=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let _=y===h||!o&&y.startsWith(h)&&y.charAt(T)==="/",S=E!=null&&(E===h||!o&&E.startsWith(h)&&E.charAt(h.length)==="/"),P={isActive:_,isPending:S,isTransitioning:m},k=_?r:void 0,A;typeof s=="function"?A=s(P):A=[s,_?"active":null,S?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let N=typeof a=="function"?a(P):a;return C.createElement(Cd,_o({},d,{"aria-current":k,className:A,ref:n,style:N,to:l,unstable_viewTransition:u}),typeof c=="function"?c(P):c)});var Dp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Dp||(Dp={}));var D_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(D_||(D_={}));function KP(t){let e=C.useContext(Nl);return e||me(!1),e}function YP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ig(),u=Fo(),c=Sd(t,{relative:o});return C.useCallback(d=>{if(PP(d,n)){d.preventDefault();let f=r!==void 0?r:is(u)===is(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function qP(t,e){e===void 0&&(e={});let n=C.useContext(OE);n==null&&me(!1);let{basename:r}=KP(Dp.useViewTransitionState),i=Sd(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Cr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Cr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Pp(i.pathname,o)!=null||Pp(i.pathname,s)!=null}var AE={exports:{}},NE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml=C;function QP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var XP=typeof Object.is=="function"?Object.is:QP,JP=Ml.useSyncExternalStore,ZP=Ml.useRef,eO=Ml.useEffect,tO=Ml.useMemo,nO=Ml.useDebugValue;NE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=ZP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=tO(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var g=o.value;if(i(g,p))return d=g}return d=p}if(g=d,XP(c,p))return g;var v=r(p);return i!==void 0&&i(g,v)?g:(c=p,d=v)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=JP(t,s[0],s[1]);return eO(function(){o.hasValue=!0,o.value=a},[a]),nO(a),a};AE.exports=NE;var rO=AE.exports,an="default"in Mh?ot:Mh,M_=Symbol.for("react-redux-context"),L_=typeof globalThis<"u"?globalThis:{};function iO(){if(!an.createContext)return{};const t=L_[M_]??(L_[M_]=new Map);let e=t.get(an.createContext);return e||(e=an.createContext(null),t.set(an.createContext,e)),e}var fi=iO(),sO=()=>{throw new Error("uSES not initialized!")};function kg(t=fi){return function(){return an.useContext(t)}}var DE=kg(),ME=sO,oO=t=>{ME=t},aO=(t,e)=>t===e;function lO(t=fi){const e=t===fi?DE:kg(t),n=(r,i={})=>{const{equalityFn:s=aO,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=e();an.useRef(!0);const f=an.useCallback({[r.name](g){return r(g)}}[r.name],[r,c,o.stabilityCheck]),p=ME(l.addNestedSub,a.getState,u||a.getState,f,s);return an.useDebugValue(p),p};return Object.assign(n,{withTypes:()=>n}),n}var Rg=lO();function uO(t){t()}function cO(){let t=null,e=null;return{clear(){t=null,e=null},notify(){uO(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var j_={notify(){},get:()=>[]};function dO(t,e){let n,r=j_,i=0,s=!1;function o(v){c();const w=r.subscribe(v);let m=!1;return()=>{m||(m=!0,w(),d())}}function a(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return s}function c(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=cO())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=j_)}function f(){s||(s=!0,c())}function p(){s&&(s=!1,d())}const g={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return g}var fO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hO=fO?an.useLayoutEffect:an.useEffect;function pO({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=an.useMemo(()=>{const u=dO(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=an.useMemo(()=>t.getState(),[t]);hO(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||fi;return an.createElement(l.Provider,{value:o},n)}var mO=pO;function LE(t=fi){const e=t===fi?DE:kg(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var gO=LE();function yO(t=fi){const e=t===fi?gO:LE(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var $o=yO();oO(rO.useSyncExternalStoreWithSelector);var Ct=function(){return Ct=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ct.apply(this,arguments)};function wo(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var He="-ms-",Da="-moz-",Ae="-webkit-",jE="comm",Td="rule",Pg="decl",vO="@import",FE="@keyframes",_O="@layer",$E=Math.abs,Og=String.fromCharCode,Mp=Object.assign;function wO(t,e){return xt(t,0)^45?(((e<<2^xt(t,0))<<2^xt(t,1))<<2^xt(t,2))<<2^xt(t,3):0}function UE(t){return t.trim()}function lr(t,e){return(t=e.exec(t))?t[0]:t}function pe(t,e,n){return t.replace(e,n)}function ju(t,e,n){return t.indexOf(e,n)}function xt(t,e){return t.charCodeAt(e)|0}function xo(t,e,n){return t.slice(e,n)}function Qn(t){return t.length}function zE(t){return t.length}function wa(t,e){return e.push(t),t}function xO(t,e){return t.map(e).join("")}function F_(t,e){return t.filter(function(n){return!lr(n,e)})}var bd=1,Eo=1,BE=0,In=0,ut=0,Uo="";function Id(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:bd,column:Eo,length:o,return:"",siblings:a}}function Lr(t,e){return Mp(Id("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ns(t){for(;t.root;)t=Lr(t.root,{children:[t]});wa(t,t.siblings)}function EO(){return ut}function SO(){return ut=In>0?xt(Uo,--In):0,Eo--,ut===10&&(Eo=1,bd--),ut}function zn(){return ut=In<BE?xt(Uo,In++):0,Eo++,ut===10&&(Eo=1,bd++),ut}function Ki(){return xt(Uo,In)}function Fu(){return In}function kd(t,e){return xo(Uo,t,e)}function Lp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function CO(t){return bd=Eo=1,BE=Qn(Uo=t),In=0,[]}function TO(t){return Uo="",t}function Zf(t){return UE(kd(In-1,jp(t===91?t+2:t===40?t+1:t)))}function bO(t){for(;(ut=Ki())&&ut<33;)zn();return Lp(t)>2||Lp(ut)>3?"":" "}function IO(t,e){for(;--e&&zn()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return kd(t,Fu()+(e<6&&Ki()==32&&zn()==32))}function jp(t){for(;zn();)switch(ut){case t:return In;case 34:case 39:t!==34&&t!==39&&jp(ut);break;case 40:t===41&&jp(t);break;case 92:zn();break}return In}function kO(t,e){for(;zn()&&t+ut!==57;)if(t+ut===84&&Ki()===47)break;return"/*"+kd(e,In-1)+"*"+Og(t===47?t:zn())}function RO(t){for(;!Lp(Ki());)zn();return kd(t,In)}function PO(t){return TO($u("",null,null,null,[""],t=CO(t),0,[0],t))}function $u(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,p=0,g=0,v=1,w=1,m=1,h=0,y="",E=i,T=s,_=r,S=y;w;)switch(g=h,h=zn()){case 40:if(g!=108&&xt(S,d-1)==58){ju(S+=pe(Zf(h),"&","&\f"),"&\f",$E(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:S+=Zf(h);break;case 9:case 10:case 13:case 32:S+=bO(g);break;case 92:S+=IO(Fu()-1,7);continue;case 47:switch(Ki()){case 42:case 47:wa(OO(kO(zn(),Fu()),e,n,l),l);break;default:S+="/"}break;case 123*v:a[u++]=Qn(S)*m;case 125*v:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:m==-1&&(S=pe(S,/\f/g,"")),p>0&&Qn(S)-d&&wa(p>32?U_(S+";",r,n,d-1,l):U_(pe(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(wa(_=$_(S,e,n,u,c,i,a,y,E=[],T=[],d,s),s),h===123)if(c===0)$u(S,e,_,_,E,s,d,a,T);else switch(f===99&&xt(S,3)===110?100:f){case 100:case 108:case 109:case 115:$u(t,_,_,r&&wa($_(t,_,_,0,0,i,a,y,i,E=[],d,T),T),i,T,d,a,r?E:T);break;default:$u(S,_,_,_,[""],T,0,a,T)}}u=c=p=0,v=m=1,y=S="",d=o;break;case 58:d=1+Qn(S),p=g;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&SO()==125)continue}switch(S+=Og(h),h*v){case 38:m=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(Qn(S)-1)*m,m=1;break;case 64:Ki()===45&&(S+=Zf(zn())),f=Ki(),c=d=Qn(y=S+=RO(Fu())),h++;break;case 45:g===45&&Qn(S)==2&&(v=0)}}return s}function $_(t,e,n,r,i,s,o,a,l,u,c,d){for(var f=i-1,p=i===0?s:[""],g=zE(p),v=0,w=0,m=0;v<r;++v)for(var h=0,y=xo(t,f+1,f=$E(w=o[v])),E=t;h<g;++h)(E=UE(w>0?p[h]+" "+y:pe(y,/&\f/g,p[h])))&&(l[m++]=E);return Id(t,e,n,i===0?Td:a,l,u,c,d)}function OO(t,e,n,r){return Id(t,e,n,jE,Og(EO()),xo(t,2,-2),0,r)}function U_(t,e,n,r,i){return Id(t,e,n,Pg,xo(t,0,r),xo(t,r+1,-1),r,i)}function WE(t,e,n){switch(wO(t,e)){case 5103:return Ae+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+t+t;case 4789:return Da+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+t+Da+t+He+t+t;case 5936:switch(xt(t,e+11)){case 114:return Ae+t+He+pe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ae+t+He+pe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ae+t+He+pe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ae+t+He+t+t;case 6165:return Ae+t+He+"flex-"+t+t;case 5187:return Ae+t+pe(t,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+He+"flex-$1$2")+t;case 5443:return Ae+t+He+"flex-item-"+pe(t,/flex-|-self/g,"")+(lr(t,/flex-|baseline/)?"":He+"grid-row-"+pe(t,/flex-|-self/g,""))+t;case 4675:return Ae+t+He+"flex-line-pack"+pe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ae+t+He+pe(t,"shrink","negative")+t;case 5292:return Ae+t+He+pe(t,"basis","preferred-size")+t;case 6060:return Ae+"box-"+pe(t,"-grow","")+Ae+t+He+pe(t,"grow","positive")+t;case 4554:return Ae+pe(t,/([^-])(transform)/g,"$1"+Ae+"$2")+t;case 6187:return pe(pe(pe(t,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),t,"")+t;case 5495:case 3959:return pe(t,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return pe(pe(t,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+He+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+t+t;case 4200:if(!lr(t,/flex-|baseline/))return He+"grid-column-align"+xo(t,e)+t;break;case 2592:case 3360:return He+pe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,lr(r.props,/grid-\w+-end/)})?~ju(t+(n=n[e].value),"span",0)?t:He+pe(t,"-start","")+t+He+"grid-row-span:"+(~ju(n,"span",0)?lr(n,/\d+/):+lr(n,/\d+/)-+lr(t,/\d+/))+";":He+pe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return lr(r.props,/grid-\w+-start/)})?t:He+pe(pe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return pe(t,/(.+)-inline(.+)/,Ae+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qn(t)-1-e>6)switch(xt(t,e+1)){case 109:if(xt(t,e+4)!==45)break;case 102:return pe(t,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+Da+(xt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ju(t,"stretch",0)?WE(pe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return pe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return He+i+":"+s+u+(o?He+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(xt(t,e+6)===121)return pe(t,":",":"+Ae)+t;break;case 6444:switch(xt(t,xt(t,14)===45?18:11)){case 120:return pe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae+(xt(t,14)===45?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+He+"$2box$3")+t;case 100:return pe(t,":",":"+He)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(t,"scroll-","scroll-snap-")+t}return t}function wc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function AO(t,e,n,r){switch(t.type){case _O:if(t.children.length)break;case vO:case Pg:return t.return=t.return||t.value;case jE:return"";case FE:return t.return=t.value+"{"+wc(t.children,r)+"}";case Td:if(!Qn(t.value=t.props.join(",")))return""}return Qn(n=wc(t.children,r))?t.return=t.value+"{"+n+"}":""}function NO(t){var e=zE(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function DO(t){return function(e){e.root||(e=e.return)&&t(e)}}function MO(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Pg:t.return=WE(t.value,t.length,n);return;case FE:return wc([Lr(t,{value:pe(t.value,"@","@"+Ae)})],r);case Td:if(t.length)return xO(n=t.props,function(i){switch(lr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ns(Lr(t,{props:[pe(i,/:(read-\w+)/,":"+Da+"$1")]})),Ns(Lr(t,{props:[i]})),Mp(t,{props:F_(n,r)});break;case"::placeholder":Ns(Lr(t,{props:[pe(i,/:(plac\w+)/,":"+Ae+"input-$1")]})),Ns(Lr(t,{props:[pe(i,/:(plac\w+)/,":"+Da+"$1")]})),Ns(Lr(t,{props:[pe(i,/:(plac\w+)/,He+"input-$1")]})),Ns(Lr(t,{props:[i]})),Mp(t,{props:F_(n,r)});break}return""})}}var LO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rn={},So=typeof process<"u"&&rn!==void 0&&(rn.REACT_APP_SC_ATTR||rn.SC_ATTR)||"data-styled",VE="active",HE="data-styled-version",Rd="6.1.8",Ag=`/*!sc*/
`,Ng=typeof window<"u"&&"HTMLElement"in window,jO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&rn!==void 0&&rn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&rn.REACT_APP_SC_DISABLE_SPEEDY!==""?rn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&rn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&rn!==void 0&&rn.SC_DISABLE_SPEEDY!==void 0&&rn.SC_DISABLE_SPEEDY!==""&&rn.SC_DISABLE_SPEEDY!=="false"&&rn.SC_DISABLE_SPEEDY),FO={},Pd=Object.freeze([]),Co=Object.freeze({});function GE(t,e,n){return n===void 0&&(n=Co),t.theme!==n.theme&&t.theme||e||n.theme}var KE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$O=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,UO=/(^-|-$)/g;function z_(t){return t.replace($O,"-").replace(UO,"")}var zO=/(a)(d)/gi,mu=52,B_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Fp(t){var e,n="";for(e=Math.abs(t);e>mu;e=e/mu|0)n=B_(e%mu)+n;return(B_(e%mu)+n).replace(zO,"$1-$2")}var eh,YE=5381,Xs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},qE=function(t){return Xs(YE,t)};function Dg(t){return Fp(qE(t)>>>0)}function BO(t){return t.displayName||t.name||"Component"}function th(t){return typeof t=="string"&&!0}var QE=typeof Symbol=="function"&&Symbol.for,XE=QE?Symbol.for("react.memo"):60115,WO=QE?Symbol.for("react.forward_ref"):60112,VO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},HO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},JE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},GO=((eh={})[WO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},eh[XE]=JE,eh);function W_(t){return("type"in(e=t)&&e.type.$$typeof)===XE?JE:"$$typeof"in t?GO[t.$$typeof]:VO;var e}var KO=Object.defineProperty,YO=Object.getOwnPropertyNames,V_=Object.getOwnPropertySymbols,qO=Object.getOwnPropertyDescriptor,QO=Object.getPrototypeOf,H_=Object.prototype;function ZE(t,e,n){if(typeof e!="string"){if(H_){var r=QO(e);r&&r!==H_&&ZE(t,r,n)}var i=YO(e);V_&&(i=i.concat(V_(e)));for(var s=W_(t),o=W_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in HO||n&&n[l]||o&&l in o||s&&l in s)){var u=qO(e,l);try{KO(t,l,u)}catch{}}}}return t}function ss(t){return typeof t=="function"}function Mg(t){return typeof t=="object"&&"styledComponentId"in t}function Bi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function xc(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function al(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function $p(t,e,n){if(n===void 0&&(n=!1),!n&&!al(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=$p(t[r],e[r]);else if(al(e))for(var r in e)t[r]=$p(t[r],e[r]);return t}function Lg(t,e){Object.defineProperty(t,"toString",{value:e})}function os(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var XO=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw os(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Ag);return n},t}(),Uu=new Map,Ec=new Map,zu=1,gu=function(t){if(Uu.has(t))return Uu.get(t);for(;Ec.has(zu);)zu++;var e=zu++;return Uu.set(t,e),Ec.set(e,t),e},JO=function(t,e){zu=e+1,Uu.set(t,e),Ec.set(e,t)},ZO="style[".concat(So,"][").concat(HE,'="').concat(Rd,'"]'),eA=new RegExp("^".concat(So,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tA=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},nA=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Ag),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(eA);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(JO(c,u),tA(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function rA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var eS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(So,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(So,VE),r.setAttribute(HE,Rd);var o=rA();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},iA=function(){function t(e){this.element=eS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw os(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),sA=function(){function t(e){this.element=eS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),oA=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),G_=Ng,aA={isServer:!Ng,useCSSOMInjection:!jO},Sc=function(){function t(e,n,r){e===void 0&&(e=Co),n===void 0&&(n={});var i=this;this.options=Ct(Ct({},aA),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Ng&&G_&&(G_=!1,function(s){for(var o=document.querySelectorAll(ZO),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(So)!==VE&&(nA(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Lg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var f=function(m){return Ec.get(m)}(d);if(f===void 0)return"continue";var p=s.names.get(f),g=o.getGroup(d);if(p===void 0||g.length===0)return"continue";var v="".concat(So,".g").concat(d,'[id="').concat(f,'"]'),w="";p!==void 0&&p.forEach(function(m){m.length>0&&(w+="".concat(m,","))}),l+="".concat(g).concat(v,'{content:"').concat(w,'"}').concat(Ag)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return gu(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ct(Ct({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new oA(i):r?new iA(i):new sA(i)}(this.options),new XO(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(gu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(gu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(gu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),lA=/&/g,uA=/^\s*\/\/.*$/gm;function tS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=tS(n.children,e)),n})}function cA(t){var e,n,r,i=t===void 0?Co:t,s=i.options,o=s===void 0?Co:s,a=i.plugins,l=a===void 0?Pd:a,u=function(f,p,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(e):f},c=l.slice();c.push(function(f){f.type===Td&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(lA,n).replace(r,u))}),o.prefix&&c.push(MO),c.push(AO);var d=function(f,p,g,v){p===void 0&&(p=""),g===void 0&&(g=""),v===void 0&&(v="&"),e=v,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(uA,""),m=PO(g||p?"".concat(g," ").concat(p," { ").concat(w," }"):w);o.namespace&&(m=tS(m,o.namespace));var h=[];return wc(m,NO(c.concat(DO(function(y){return h.push(y)})))),h};return d.hash=l.length?l.reduce(function(f,p){return p.name||os(15),Xs(f,p.name)},YE).toString():"",d}var dA=new Sc,Up=cA(),nS=ot.createContext({shouldForwardProp:void 0,styleSheet:dA,stylis:Up});nS.Consumer;ot.createContext(void 0);function zp(){return C.useContext(nS)}var rS=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Up);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Lg(this,function(){throw os(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Up),this.name+e.hash},t}(),fA=function(t){return t>="A"&&t<="Z"};function K_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;fA(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var iS=function(t){return t==null||t===!1||t===""},sS=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!iS(s)&&(Array.isArray(s)&&s.isCss||ss(s)?r.push("".concat(K_(i),":"),s,";"):al(s)?r.push.apply(r,wo(wo(["".concat(i," {")],sS(s),!1),["}"],!1)):r.push("".concat(K_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in LO||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ni(t,e,n,r){if(iS(t))return[];if(Mg(t))return[".".concat(t.styledComponentId)];if(ss(t)){if(!ss(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ni(i,e,n,r)}var s;return t instanceof rS?n?(t.inject(n,r),[t.getName(r)]):[t]:al(t)?sS(t):Array.isArray(t)?Array.prototype.concat.apply(Pd,t.map(function(o){return ni(o,e,n,r)})):[t.toString()]}function oS(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ss(n)&&!Mg(n))return!1}return!0}var hA=qE(Rd),pA=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&oS(e),this.componentId=n,this.baseHash=Xs(hA,n),this.baseStyle=r,Sc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Bi(i,this.staticRulesId);else{var s=xc(ni(this.rules,e,n,r)),o=Fp(Xs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Bi(i,o),this.staticRulesId=o}else{for(var l=Xs(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=xc(ni(d,e,n,r));l=Xs(l,f+c),u+=f}}if(u){var p=Fp(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=Bi(i,p)}}return i},t}(),ll=ot.createContext(void 0);ll.Consumer;function mA(t){var e=ot.useContext(ll),n=C.useMemo(function(){return function(r,i){if(!r)throw os(14);if(ss(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw os(8);return i?Ct(Ct({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?ot.createElement(ll.Provider,{value:n},t.children):null}var nh={};function gA(t,e,n){var r=Mg(t),i=t,s=!th(t),o=e.attrs,a=o===void 0?Pd:o,l=e.componentId,u=l===void 0?function(E,T){var _=typeof E!="string"?"sc":z_(E);nh[_]=(nh[_]||0)+1;var S="".concat(_,"-").concat(Dg(Rd+_+nh[_]));return T?"".concat(T,"-").concat(S):S}(e.displayName,e.parentComponentId):l,c=e.displayName,d=c===void 0?function(E){return th(E)?"styled.".concat(E):"Styled(".concat(BO(E),")")}(t):c,f=e.displayName&&e.componentId?"".concat(z_(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var w=e.shouldForwardProp;g=function(E,T){return v(E,T)&&w(E,T)}}else g=v}var m=new pA(n,f,r?i.componentStyle:void 0);function h(E,T){return function(_,S,P){var k=_.attrs,A=_.componentStyle,N=_.defaultProps,G=_.foldedComponentIds,j=_.styledComponentId,Z=_.target,Ie=ot.useContext(ll),Oe=zp(),de=_.shouldForwardProp||Oe.shouldForwardProp,z=GE(S,Ie,N)||Co,K=function(Le,Se,$e){for(var Ht,It=Ct(Ct({},Se),{className:void 0,theme:$e}),M=0;M<Le.length;M+=1){var $=ss(Ht=Le[M])?Ht(It):Ht;for(var J in $)It[J]=J==="className"?Bi(It[J],$[J]):J==="style"?Ct(Ct({},It[J]),$[J]):$[J]}return Se.className&&(It.className=Bi(It.className,Se.className)),It}(k,S,z),q=K.as||Z,ne={};for(var se in K)K[se]===void 0||se[0]==="$"||se==="as"||se==="theme"&&K.theme===z||(se==="forwardedAs"?ne.as=K.forwardedAs:de&&!de(se,q)||(ne[se]=K[se]));var at=function(Le,Se){var $e=zp(),Ht=Le.generateAndInjectStyles(Se,$e.styleSheet,$e.stylis);return Ht}(A,K),Re=Bi(G,j);return at&&(Re+=" "+at),K.className&&(Re+=" "+K.className),ne[th(q)&&!KE.has(q)?"class":"className"]=Re,ne.ref=P,C.createElement(q,ne)}(y,E,T)}h.displayName=d;var y=ot.forwardRef(h);return y.attrs=p,y.componentStyle=m,y.displayName=d,y.shouldForwardProp=g,y.foldedComponentIds=r?Bi(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=f,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(T){for(var _=[],S=1;S<arguments.length;S++)_[S-1]=arguments[S];for(var P=0,k=_;P<k.length;P++)$p(T,k[P],!0);return T}({},i.defaultProps,E):E}}),Lg(y,function(){return".".concat(y.styledComponentId)}),s&&ZE(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Y_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var q_=function(t){return Object.assign(t,{isCss:!0})};function jg(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ss(t)||al(t))return q_(ni(Y_(Pd,wo([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ni(r):q_(ni(Y_(r,e)))}function Bp(t,e,n){if(n===void 0&&(n=Co),!e)throw os(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,jg.apply(void 0,wo([i],s,!1)))};return r.attrs=function(i){return Bp(t,e,Ct(Ct({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Bp(t,e,Ct(Ct({},n),i))},r}var aS=function(t){return Bp(gA,t)},D=aS;KE.forEach(function(t){D[t]=aS(t)});var yA=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=oS(e),Sc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(xc(ni(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Sc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function vA(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=jg.apply(void 0,wo([t],e,!1)),i="sc-global-".concat(Dg(JSON.stringify(r))),s=new yA(r,i),o=function(l){var u=zp(),c=ot.useContext(ll),d=ot.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),ot.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(s.isStatic)s.renderStyles(l,FO,c,f);else{var p=Ct(Ct({},u),{theme:GE(u,d,o.defaultProps)});s.renderStyles(l,p,c,f)}}return ot.memo(o)}function _A(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=xc(jg.apply(void 0,wo([t],e,!1))),i=Dg(r);return new rS(i,r)}function Rt(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var wA=typeof Symbol=="function"&&Symbol.observable||"@@observable",Q_=wA,rh=()=>Math.random().toString(36).substring(7).split("").join("."),xA={INIT:`@@redux/INIT${rh()}`,REPLACE:`@@redux/REPLACE${rh()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${rh()}`},Cc=xA;function Fg(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function lS(t,e,n){if(typeof t!="function")throw new Error(Rt(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Rt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Rt(1));return n(lS)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((w,m)=>{o.set(m,w)}))}function c(){if(l)throw new Error(Rt(3));return i}function d(w){if(typeof w!="function")throw new Error(Rt(4));if(l)throw new Error(Rt(5));let m=!0;u();const h=a++;return o.set(h,w),function(){if(m){if(l)throw new Error(Rt(6));m=!1,u(),o.delete(h),s=null}}}function f(w){if(!Fg(w))throw new Error(Rt(7));if(typeof w.type>"u")throw new Error(Rt(8));if(typeof w.type!="string")throw new Error(Rt(17));if(l)throw new Error(Rt(9));try{l=!0,i=r(i,w)}finally{l=!1}return(s=o).forEach(h=>{h()}),w}function p(w){if(typeof w!="function")throw new Error(Rt(10));r=w,f({type:Cc.REPLACE})}function g(){const w=d;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(Rt(11));function h(){const E=m;E.next&&E.next(c())}return h(),{unsubscribe:w(h)}},[Q_](){return this}}}return f({type:Cc.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:p,[Q_]:g}}function EA(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Cc.INIT})>"u")throw new Error(Rt(12));if(typeof n(void 0,{type:Cc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Rt(13))})}function SA(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{EA(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],p=o[d],g=f(p,a);if(typeof g>"u")throw a&&a.type,new Error(Rt(14));u[d]=g,l=l||g!==p}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Tc(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function CA(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Rt(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=Tc(...a)(i.dispatch),{...i,dispatch:s}}}function TA(t){return Fg(t)&&"type"in t&&typeof t.type=="string"}var uS=Symbol.for("immer-nothing"),X_=Symbol.for("immer-draftable"),fn=Symbol.for("immer-state");function Mn(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var To=Object.getPrototypeOf;function hi(t){return!!t&&!!t[fn]}function Tr(t){var e;return t?cS(t)||Array.isArray(t)||!!t[X_]||!!((e=t.constructor)!=null&&e[X_])||Ad(t)||Nd(t):!1}var bA=Object.prototype.constructor.toString();function cS(t){if(!t||typeof t!="object")return!1;const e=To(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===bA}function ul(t,e){Od(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function Od(t){const e=t[fn];return e?e.type_:Array.isArray(t)?1:Ad(t)?2:Nd(t)?3:0}function Wp(t,e){return Od(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function dS(t,e,n){const r=Od(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function IA(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Ad(t){return t instanceof Map}function Nd(t){return t instanceof Set}function Ai(t){return t.copy_||t.base_}function Vp(t,e){if(Ad(t))return new Map(t);if(Nd(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&cS(t))return To(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[fn];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(To(t),n)}function $g(t,e=!1){return Dd(t)||hi(t)||!Tr(t)||(Od(t)>1&&(t.set=t.add=t.clear=t.delete=kA),Object.freeze(t),e&&ul(t,(n,r)=>$g(r,!0))),t}function kA(){Mn(2)}function Dd(t){return Object.isFrozen(t)}var RA={};function as(t){const e=RA[t];return e||Mn(0,t),e}var cl;function fS(){return cl}function PA(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function J_(t,e){e&&(as("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Hp(t){Gp(t),t.drafts_.forEach(OA),t.drafts_=null}function Gp(t){t===cl&&(cl=t.parent_)}function Z_(t){return cl=PA(cl,t)}function OA(t){const e=t[fn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function e0(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[fn].modified_&&(Hp(e),Mn(4)),Tr(t)&&(t=bc(e,t),e.parent_||Ic(e,t)),e.patches_&&as("Patches").generateReplacementPatches_(n[fn].base_,t,e.patches_,e.inversePatches_)):t=bc(e,n,[]),Hp(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==uS?t:void 0}function bc(t,e,n){if(Dd(e))return e;const r=e[fn];if(!r)return ul(e,(i,s)=>t0(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Ic(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),ul(s,(a,l)=>t0(t,r,i,a,l,n,o)),Ic(t,i,!1),n&&t.patches_&&as("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function t0(t,e,n,r,i,s,o){if(hi(i)){const a=s&&e&&e.type_!==3&&!Wp(e.assigned_,r)?s.concat(r):void 0,l=bc(t,i,a);if(dS(n,r,l),hi(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Tr(i)&&!Dd(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;bc(t,i),(!e||!e.scope_.parent_)&&Ic(t,i)}}function Ic(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&$g(e,n)}function AA(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:fS(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Ug;n&&(i=[r],s=dl);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Ug={get(t,e){if(e===fn)return t;const n=Ai(t);if(!Wp(n,e))return NA(t,n,e);const r=n[e];return t.finalized_||!Tr(r)?r:r===ih(t.base_,e)?(sh(t),t.copy_[e]=Yp(r,t)):r},has(t,e){return e in Ai(t)},ownKeys(t){return Reflect.ownKeys(Ai(t))},set(t,e,n){const r=hS(Ai(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=ih(Ai(t),e),s=i==null?void 0:i[fn];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(IA(n,i)&&(n!==void 0||Wp(t.base_,e)))return!0;sh(t),Kp(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return ih(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,sh(t),Kp(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Ai(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Mn(11)},getPrototypeOf(t){return To(t.base_)},setPrototypeOf(){Mn(12)}},dl={};ul(Ug,(t,e)=>{dl[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});dl.deleteProperty=function(t,e){return dl.set.call(this,t,e,void 0)};dl.set=function(t,e,n){return Ug.set.call(this,t[0],e,n,t[0])};function ih(t,e){const n=t[fn];return(n?Ai(n):t)[e]}function NA(t,e,n){var i;const r=hS(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function hS(t,e){if(!(e in t))return;let n=To(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=To(n)}}function Kp(t){t.modified_||(t.modified_=!0,t.parent_&&Kp(t.parent_))}function sh(t){t.copy_||(t.copy_=Vp(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var DA=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&Mn(6),r!==void 0&&typeof r!="function"&&Mn(7);let i;if(Tr(e)){const s=Z_(this),o=Yp(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Hp(s):Gp(s)}return J_(s,r),e0(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===uS&&(i=void 0),this.autoFreeze_&&$g(i,!0),r){const s=[],o=[];as("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Mn(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Tr(t)||Mn(8),hi(t)&&(t=pS(t));const e=Z_(this),n=Yp(t,void 0);return n[fn].isManual_=!0,Gp(e),n}finishDraft(t,e){const n=t&&t[fn];(!n||!n.isManual_)&&Mn(9);const{scope_:r}=n;return J_(r,e),e0(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=as("Patches").applyPatches_;return hi(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Yp(t,e){const n=Ad(t)?as("MapSet").proxyMap_(t,e):Nd(t)?as("MapSet").proxySet_(t,e):AA(t,e);return(e?e.scope_:fS()).drafts_.push(n),n}function pS(t){return hi(t)||Mn(10,t),mS(t)}function mS(t){if(!Tr(t)||Dd(t))return t;const e=t[fn];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Vp(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Vp(t,!0);return ul(n,(r,i)=>{dS(n,r,mS(i))}),e&&(e.finalized_=!1),n}var hn=new DA,gS=hn.produce;hn.produceWithPatches.bind(hn);hn.setAutoFreeze.bind(hn);hn.setUseStrictShallowCopy.bind(hn);hn.applyPatches.bind(hn);hn.createDraft.bind(hn);hn.finishDraft.bind(hn);function MA(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function LA(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function jA(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var n0=t=>Array.isArray(t)?t:[t];function FA(t){const e=Array.isArray(t[0])?t[0]:t;return jA(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function $A(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var UA=class{constructor(t){this.value=t}deref(){return this.value}},zA=typeof WeakRef<"u"?WeakRef:UA,BA=0,r0=1;function yu(){return{s:BA,v:void 0,o:null,p:null}}function zg(t,e={}){let n=yu();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let f=0,p=l;f<p;f++){const g=arguments[f];if(typeof g=="function"||typeof g=="object"&&g!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const w=v.get(g);w===void 0?(a=yu(),v.set(g,a)):a=w}else{let v=a.p;v===null&&(a.p=v=new Map);const w=v.get(g);w===void 0?(a=yu(),v.set(g,a)):a=w}}const u=a;let c;if(a.s===r0?c=a.v:(c=t.apply(null,arguments),s++),u.s=r0,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new zA(c):c}return u.v=c,c}return o.clearCache=()=>{n=yu(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function yS(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),MA(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:p=zg,argsMemoizeOptions:g=[],devModeChecks:v={}}=c,w=n0(f),m=n0(g),h=FA(i),y=d(function(){return s++,u.apply(null,arguments)},...w),E=p(function(){o++;const _=$A(h,arguments);return a=y.apply(null,_),a},...m);return Object.assign(E,{resultFunc:u,memoizedResultFunc:y,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var WA=yS(zg),VA=Object.assign((t,e=WA)=>{LA(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>VA});function vS(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var HA=vS(),GA=vS,KA=(...t)=>{const e=yS(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(hi(o)?pS(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};KA(zg);var YA=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Tc:Tc.apply(null,arguments)};function bo(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(Zt(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>TA(r)&&r.type===t,n}var _S=class xa extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,xa.prototype)}static get[Symbol.species](){return xa}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new xa(...e[0].concat(this)):new xa(...e.concat(this))}};function i0(t){return Tr(t)?gS(t,()=>{}):t}function s0(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(Zt(10));const r=n.insert(e,t);return t.set(e,r),r}function qA(t){return typeof t=="boolean"}var QA=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new _S;return n&&(qA(n)?o.push(HA):o.push(GA(n.extraArgument))),o},XA="RTK_autoBatch",wS=t=>e=>{setTimeout(e,t)},JA=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:wS(10),ZA=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?JA:t.type==="callback"?t.queueNotification:wS(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[XA]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},eN=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new _S(t);return r&&i.push(ZA(typeof r=="object"?r:void 0)),i},tN=!0;function nN(t){const e=QA(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Fg(n))a=SA(n);else throw new Error(Zt(1));let l;typeof r=="function"?l=r(e):l=e();let u=Tc;i&&(u=YA({trace:!tN,...typeof i=="object"&&i}));const c=CA(...l),d=eN(c);let f=typeof o=="function"?o(d):d();const p=u(...f);return lS(a,s,p)}function xS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(Zt(28));if(a in e)throw new Error(Zt(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function rN(t){return typeof t=="function"}function iN(t,e){let[n,r,i]=xS(e),s;if(rN(t))s=()=>i0(t());else{const a=i0(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(hi(c)){const p=d(c,l);return p===void 0?c:p}else{if(Tr(c))return gS(c,f=>d(f,l));{const f=d(c,l);if(f===void 0){if(c===null)return c;throw new Error(Zt(9))}return f}}return c},a)}return o.getInitialState=s,o}var sN="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",oN=(t=21)=>{let e="",n=t;for(;n--;)e+=sN[Math.random()*64|0];return e},aN=Symbol.for("rtk-slice-createasyncthunk");function lN(t,e){return`${t}/${e}`}function uN({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[aN];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(Zt(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(fN()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(y,E){const T=typeof y=="string"?y:y.type;if(!T)throw new Error(Zt(12));if(T in u.sliceCaseReducersByType)throw new Error(Zt(13));return u.sliceCaseReducersByType[T]=E,c},addMatcher(y,E){return u.sliceMatchers.push({matcher:y,reducer:E}),c},exposeAction(y,E){return u.actionCreators[y]=E,c},exposeCaseReducer(y,E){return u.sliceCaseReducersByName[y]=E,c}};l.forEach(y=>{const E=a[y],T={reducerName:y,type:lN(s,y),createNotation:typeof i.reducers=="function"};pN(E)?gN(T,E,c,e):hN(T,E,c)});function d(){const[y={},E=[],T=void 0]=typeof i.extraReducers=="function"?xS(i.extraReducers):[i.extraReducers],_={...y,...u.sliceCaseReducersByType};return iN(i.initialState,S=>{for(let P in _)S.addCase(P,_[P]);for(let P of u.sliceMatchers)S.addMatcher(P.matcher,P.reducer);for(let P of E)S.addMatcher(P.matcher,P.reducer);T&&S.addDefaultCase(T)})}const f=y=>y,p=new Map;let g;function v(y,E){return g||(g=d()),g(y,E)}function w(){return g||(g=d()),g.getInitialState()}function m(y,E=!1){function T(S){let P=S[y];return typeof P>"u"&&E&&(P=w()),P}function _(S=f){const P=s0(p,E,{insert:()=>new WeakMap});return s0(P,S,{insert:()=>{const k={};for(const[A,N]of Object.entries(i.selectors??{}))k[A]=cN(N,S,w,E);return k}})}return{reducerPath:y,getSelectors:_,get selectors(){return _(T)},selectSlice:T}}const h={name:s,reducer:v,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:w,...m(o),injectInto(y,{reducerPath:E,...T}={}){const _=E??o;return y.inject({reducerPath:_,reducer:v},T),{...h,...m(_,!0)}}};return h}}function cN(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var dN=uN();function fN(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function hN({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!mN(r))throw new Error(Zt(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?bo(t,o):bo(t))}function pN(t){return t._reducerDefinitionType==="asyncThunk"}function mN(t){return t._reducerDefinitionType==="reducerWithPrepare"}function gN({type:t,reducerName:e},n,r,i){if(!i)throw new Error(Zt(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(t,s,c);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(e,{fulfilled:o||vu,pending:a||vu,rejected:l||vu,settled:u||vu})}function vu(){}var yN=(t,e)=>{if(typeof t!="function")throw new Error(Zt(32))},Bg="listenerMiddleware",vN=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=bo(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(Zt(21));return yN(s),{predicate:i,type:e,effect:s}},_N=Object.assign(t=>{const{type:e,predicate:n,effect:r}=vN(t);return{id:oN(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(Zt(22))}}},{withTypes:()=>_N}),wN=Object.assign(bo(`${Bg}/add`),{withTypes:()=>wN});bo(`${Bg}/removeAll`);var xN=Object.assign(bo(`${Bg}/remove`),{withTypes:()=>xN});function Zt(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const ES=dN({name:"users",initialState:{currentUser:{favorites:[]}},reducers:{setUser(t,e){t.currentUser={...e.payload}},setFavorites(t,e){return{...t,currentUser:{...t.currentUser,favorites:e.payload}}}}}),{setUser:pi,setFavorites:c7}=ES.actions,Wg=t=>t.users,EN=ES.reducer,SN=nN({reducer:{users:EN}});var o0={};/**
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
 */const SS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(t,e){if(!t)throw zo(e)},zo=function(t){return new Error("Firebase Database ("+SS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const CS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},CN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Vg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(CS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new TN;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TS=function(t){const e=CS(t);return Vg.encodeByteArray(e,!0)},kc=function(t){return TS(t).replace(/\./g,"")},Rc=function(t){try{return Vg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bN(t){return bS(void 0,t)}function bS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!IN(n)||(t[n]=bS(t[n],e[n]));return t}function IN(t){return t!=="__proto__"}/**
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
 */function kN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RN=()=>kN().__FIREBASE_DEFAULTS__,PN=()=>{if(typeof process>"u"||typeof o0>"u")return;const t=o0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ON=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rc(t[1]);return e&&JSON.parse(e)},Hg=()=>{try{return RN()||PN()||ON()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},IS=t=>{var e,n;return(n=(e=Hg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AN=t=>{const e=IS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kS=()=>{var t;return(t=Hg())===null||t===void 0?void 0:t.config},RS=t=>{var e;return(e=Hg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Md{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function NN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[kc(JSON.stringify(n)),kc(JSON.stringify(o)),""].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function DN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MN(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OS(){return SS.NODE_ADMIN===!0}function LN(){try{return typeof indexedDB=="object"}catch{return!1}}function jN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const FN="FirebaseError";class Ti extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FN,Object.setPrototypeOf(this,Ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ll.prototype.create)}}class Ll{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$N(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ti(i,a,r)}}function $N(t,e){return t.replace(UN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UN=/\{\$([^}]+)}/g;/**
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
 */function fl(t){return JSON.parse(t)}function ft(t){return JSON.stringify(t)}/**
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
 */const AS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=fl(Rc(s[0])||""),n=fl(Rc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},zN=function(t){const e=AS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},BN=function(t){const e=AS(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function rr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Io(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Oc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(a0(s)&&a0(o)){if(!Oc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function a0(t){return t!==null&&typeof t=="object"}/**
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
 */function Bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ea(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Sa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class WN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function VN(t,e){const n=new HN(t,e);return n.subscribe.bind(n)}class HN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=oh),i.error===void 0&&(i.error=oh),i.complete===void 0&&(i.complete=oh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oh(){}function Kg(t,e){return`${t} failed: ${e} argument `}/**
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
 */const KN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,F(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ld=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Nt(t){return t&&t._delegate?t._delegate:t}class ls{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ni="[DEFAULT]";/**
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
 */class YN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Md;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QN(e))try{this.getOrInitializeService({instanceIdentifier:Ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ni){return this.instances.has(e)}getOptions(e=Ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ni){return this.component?this.component.multipleInstances?e:Ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qN(t){return t===Ni?void 0:t}function QN(t){return t.instantiationMode==="EAGER"}/**
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
 */class XN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Me||(Me={}));const JN={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},ZN=Me.INFO,eD={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},tD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=eD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yg{constructor(e){this.name=e,this._logLevel=ZN,this._logHandler=tD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const nD=(t,e)=>e.some(n=>t instanceof n);let l0,u0;function rD(){return l0||(l0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iD(){return u0||(u0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const NS=new WeakMap,Qp=new WeakMap,DS=new WeakMap,ah=new WeakMap,qg=new WeakMap;function sD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ri(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&NS.set(n,t)}).catch(()=>{}),qg.set(e,t),e}function oD(t){if(Qp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qp.set(t,e)}let Xp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||DS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ri(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aD(t){Xp=t(Xp)}function lD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lh(this),e,...n);return DS.set(r,e.sort?e.sort():[e]),ri(r)}:iD().includes(t)?function(...e){return t.apply(lh(this),e),ri(NS.get(this))}:function(...e){return ri(t.apply(lh(this),e))}}function uD(t){return typeof t=="function"?lD(t):(t instanceof IDBTransaction&&oD(t),nD(t,rD())?new Proxy(t,Xp):t)}function ri(t){if(t instanceof IDBRequest)return sD(t);if(ah.has(t))return ah.get(t);const e=uD(t);return e!==t&&(ah.set(t,e),qg.set(e,t)),e}const lh=t=>qg.get(t);function cD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ri(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ri(o.result),l.oldVersion,l.newVersion,ri(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const dD=["get","getKey","getAll","getAllKeys","count"],fD=["put","add","delete","clear"],uh=new Map;function c0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uh.get(e))return uh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return uh.set(e,s),s}aD(t=>({...t,get:(e,n,r)=>c0(e,n)||t.get(e,n,r),has:(e,n)=>!!c0(e,n)||t.has(e,n)}));/**
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
 */class hD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jp="@firebase/app",d0="0.9.27";/**
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
 */const us=new Yg("@firebase/app"),mD="@firebase/app-compat",gD="@firebase/analytics-compat",yD="@firebase/analytics",vD="@firebase/app-check-compat",_D="@firebase/app-check",wD="@firebase/auth",xD="@firebase/auth-compat",ED="@firebase/database",SD="@firebase/database-compat",CD="@firebase/functions",TD="@firebase/functions-compat",bD="@firebase/installations",ID="@firebase/installations-compat",kD="@firebase/messaging",RD="@firebase/messaging-compat",PD="@firebase/performance",OD="@firebase/performance-compat",AD="@firebase/remote-config",ND="@firebase/remote-config-compat",DD="@firebase/storage",MD="@firebase/storage-compat",LD="@firebase/firestore",jD="@firebase/firestore-compat",FD="firebase",$D="10.8.0";/**
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
 */const Zp="[DEFAULT]",UD={[Jp]:"fire-core",[mD]:"fire-core-compat",[yD]:"fire-analytics",[gD]:"fire-analytics-compat",[_D]:"fire-app-check",[vD]:"fire-app-check-compat",[wD]:"fire-auth",[xD]:"fire-auth-compat",[ED]:"fire-rtdb",[SD]:"fire-rtdb-compat",[CD]:"fire-fn",[TD]:"fire-fn-compat",[bD]:"fire-iid",[ID]:"fire-iid-compat",[kD]:"fire-fcm",[RD]:"fire-fcm-compat",[PD]:"fire-perf",[OD]:"fire-perf-compat",[AD]:"fire-rc",[ND]:"fire-rc-compat",[DD]:"fire-gcs",[MD]:"fire-gcs-compat",[LD]:"fire-fst",[jD]:"fire-fst-compat","fire-js":"fire-js",[FD]:"fire-js-all"};/**
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
 */const Ac=new Map,em=new Map;function zD(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ko(t){const e=t.name;if(em.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;em.set(e,t);for(const n of Ac.values())zD(n,t);return!0}function Qg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const BD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ii=new Ll("app","Firebase",BD);/**
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
 */class WD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
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
 */const Wo=$D;function MS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ii.create("bad-app-name",{appName:String(i)});if(n||(n=kS()),!n)throw ii.create("no-options");const s=Ac.get(i);if(s){if(Oc(n,s.options)&&Oc(r,s.config))return s;throw ii.create("duplicate-app",{appName:i})}const o=new XN(i);for(const l of em.values())o.addComponent(l);const a=new WD(n,r,o);return Ac.set(i,a),a}function LS(t=Zp){const e=Ac.get(t);if(!e&&t===Zp&&kS())return MS();if(!e)throw ii.create("no-app",{appName:t});return e}function si(t,e,n){var r;let i=(r=UD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}ko(new ls(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const VD="firebase-heartbeat-database",HD=1,hl="firebase-heartbeat-store";let ch=null;function jS(){return ch||(ch=cD(VD,HD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ii.create("idb-open",{originalErrorMessage:t.message})})),ch}async function GD(t){try{const n=(await jS()).transaction(hl),r=await n.objectStore(hl).get(FS(t));return await n.done,r}catch(e){if(e instanceof Ti)us.warn(e.message);else{const n=ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(n.message)}}}async function f0(t,e){try{const r=(await jS()).transaction(hl,"readwrite");await r.objectStore(hl).put(e,FS(t)),await r.done}catch(n){if(n instanceof Ti)us.warn(n.message);else{const r=ii.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});us.warn(r.message)}}}function FS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KD=1024,YD=30*24*60*60*1e3;class qD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=h0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=YD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=h0(),{heartbeatsToSend:r,unsentEntries:i}=QD(this._heartbeatsCache.heartbeats),s=kc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function h0(){return new Date().toISOString().substring(0,10)}function QD(t,e=KD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),p0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),p0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LN()?jN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return f0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return f0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function p0(t){return kc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function JD(t){ko(new ls("platform-logger",e=>new hD(e),"PRIVATE")),ko(new ls("heartbeat",e=>new qD(e),"PRIVATE")),si(Jp,d0,t),si(Jp,d0,"esm2017"),si("fire-js","")}JD("");var ZD="firebase",eM="10.8.0";/**
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
 */si(ZD,eM,"app");function Xg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $S(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tM=$S,US=new Ll("auth","Firebase",$S());/**
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
 */const Nc=new Yg("@firebase/auth");function nM(t,...e){Nc.logLevel<=Me.WARN&&Nc.warn(`Auth (${Wo}): ${t}`,...e)}function Bu(t,...e){Nc.logLevel<=Me.ERROR&&Nc.error(`Auth (${Wo}): ${t}`,...e)}/**
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
 */function Vn(t,...e){throw Jg(t,...e)}function er(t,...e){return Jg(t,...e)}function rM(t,e,n){const r=Object.assign(Object.assign({},tM()),{[e]:n});return new Ll("auth","Firebase",r).create(e,{appName:t.name})}function Jg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return US.create(t,...e)}function ie(t,e,...n){if(!t)throw Jg(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bu(e),new Error(e)}function br(t,e){t||hr(e)}/**
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
 */function tm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iM(){return m0()==="http:"||m0()==="https:"}function m0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iM()||DN()||"connection"in navigator)?navigator.onLine:!0}function oM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class jl{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=Gg()||PS()}get(){return sM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zg(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lM=new jl(3e4,6e4);function bi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pr(t,e,n,r,i={}){return BS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Bo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zS.fetch()(WS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function BS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aM),e);try{const i=new cM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _u(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _u(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _u(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _u(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw rM(t,c,u);Vn(t,c)}}catch(i){if(i instanceof Ti)throw i;Vn(t,"network-request-failed",{message:String(i)})}}async function Fl(t,e,n,r,i={}){const s=await Pr(t,e,n,r,i);return"mfaPendingCredential"in s&&Vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function WS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zg(t.config,i):`${t.config.apiScheme}://${i}`}function uM(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(er(this.auth,"network-request-failed")),lM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _u(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=er(t,e,r);return i.customData._tokenResponse=n,i}function g0(t){return t!==void 0&&t.enterprise!==void 0}class dM{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uM(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fM(t,e){return Pr(t,"GET","/v2/recaptchaConfig",bi(t,e))}/**
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
 */async function hM(t,e){return Pr(t,"POST","/v1/accounts:delete",e)}async function pM(t,e){return Pr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ma(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mM(t,e=!1){const n=Nt(t),r=await n.getIdToken(e),i=ey(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ma(dh(i.auth_time)),issuedAtTime:Ma(dh(i.iat)),expirationTime:Ma(dh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dh(t){return Number(t)*1e3}function ey(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rc(n);return i?JSON.parse(i):(Bu("Failed to decode base64 JWT payload"),null)}catch(i){return Bu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gM(t){const e=ey(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ti&&yM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class VS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ro(t,pM(n,{idToken:r}));ie(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xM(s.providerUserInfo):[],a=wM(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new VS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function _M(t){const e=Nt(t);await Dc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xM(t){return t.map(e=>{var{providerId:n}=e,r=Xg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function EM(t,e){const n=await BS(t,{},async()=>{const r=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=WS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SM(t,e){return Pr(t,"POST","/v2/accounts:revokeToken",bi(t,e))}/**
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
 */class pl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gM(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await EM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new pl;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pl,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
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
 */function Dr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new VS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mM(this,e)}reload(){return _M(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ro(this,hM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:T,providerData:_,stsTokenManager:S}=n;ie(y&&S,e,"internal-error");const P=pl.fromJSON(this.name,S);ie(typeof y=="string",e,"internal-error"),Dr(d,e.name),Dr(f,e.name),ie(typeof E=="boolean",e,"internal-error"),ie(typeof T=="boolean",e,"internal-error"),Dr(p,e.name),Dr(g,e.name),Dr(v,e.name),Dr(w,e.name),Dr(m,e.name),Dr(h,e.name);const k=new Yi({uid:y,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:T,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:P,createdAt:m,lastLoginAt:h});return _&&Array.isArray(_)&&(k.providerData=_.map(A=>Object.assign({},A))),w&&(k._redirectEventId=w),k}static async _fromIdTokenResponse(e,n,r=!1){const i=new pl;i.updateFromServerResponse(n);const s=new Yi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dc(s),s}}/**
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
 */const y0=new Map;function pr(t){br(t instanceof Function,"Expected a class definition");let e=y0.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,y0.set(t,e),e)}/**
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
 */class HS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}HS.type="NONE";const v0=HS;/**
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
 */function Wu(t,e,n){return`firebase:${t}:${e}:${n}`}class ao{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ao(pr(v0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||pr(v0);const o=Wu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Yi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ao(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ao(s,e,r))}}/**
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
 */function _0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(QS(e))return"Blackberry";if(XS(e))return"Webos";if(ty(e))return"Safari";if((e.includes("chrome/")||KS(e))&&!e.includes("edge/"))return"Chrome";if(qS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GS(t=$t()){return/firefox\//i.test(t)}function ty(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KS(t=$t()){return/crios\//i.test(t)}function YS(t=$t()){return/iemobile/i.test(t)}function qS(t=$t()){return/android/i.test(t)}function QS(t=$t()){return/blackberry/i.test(t)}function XS(t=$t()){return/webos/i.test(t)}function jd(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CM(t=$t()){var e;return jd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TM(){return MN()&&document.documentMode===10}function JS(t=$t()){return jd(t)||qS(t)||XS(t)||QS(t)||/windows phone/i.test(t)||YS(t)}function bM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ZS(t,e=[]){let n;switch(t){case"Browser":n=_0($t());break;case"Worker":n=`${_0($t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wo}/${r}`}/**
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
 */class IM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kM(t,e={}){return Pr(t,"GET","/v2/passwordPolicy",bi(t,e))}/**
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
 */const RM=6;class PM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:RM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class OM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new w0(this),this.idTokenSubscription=new w0(this),this.beforeStateQueue=new IM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=US,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ao.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Nt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kM(this),n=new PM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ll("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pr(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[pr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vs(t){return Nt(t)}class w0{constructor(e){this.auth=e,this.observer=null,this.addObserver=VN(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AM(t){Fd=t}function eC(t){return Fd.loadJS(t)}function NM(){return Fd.recaptchaEnterpriseScript}function DM(){return Fd.gapiScript}function MM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const LM="recaptcha-enterprise",jM="NO_RECAPTCHA";class FM{constructor(e){this.type=LM,this.auth=vs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{fM(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new dM(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;g0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(jM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&g0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=NM();l.length!==0&&(l+=a),eC(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function x0(t,e,n,r=!1){const i=new FM(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function nm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await x0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await x0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function $M(t,e){const n=Qg(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Oc(s,e??{}))return i;Vn(i,"already-initialized")}return n.initialize({options:e})}function UM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zM(t,e,n){const r=vs(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=tC(e),{host:o,port:a}=BM(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WM()}function tC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BM(t){const e=tC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:E0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:E0(o)}}}function E0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ny{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function VM(t,e){return Pr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function HM(t,e){return Fl(t,"POST","/v1/accounts:signInWithPassword",bi(t,e))}/**
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
 */async function GM(t,e){return Fl(t,"POST","/v1/accounts:signInWithEmailLink",bi(t,e))}async function KM(t,e){return Fl(t,"POST","/v1/accounts:signInWithEmailLink",bi(t,e))}/**
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
 */class ml extends ny{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ml(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ml(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nm(e,n,"signInWithPassword",HM);case"emailLink":return GM(e,{email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nm(e,r,"signUpPassword",VM);case"emailLink":return KM(e,{idToken:n,email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function lo(t,e){return Fl(t,"POST","/v1/accounts:signInWithIdp",bi(t,e))}/**
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
 */const YM="http://localhost";class cs extends ny{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return lo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,lo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lo(e,n)}buildRequest(){const e={requestUri:YM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
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
 */function qM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QM(t){const e=Ea(Sa(t)).link,n=e?Ea(Sa(e)).deep_link_id:null,r=Ea(Sa(t)).deep_link_id;return(r?Ea(Sa(r)).link:null)||r||n||e||t}class ry{constructor(e){var n,r,i,s,o,a;const l=Ea(Sa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=qM((i=l.mode)!==null&&i!==void 0?i:null);ie(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=QM(e);try{return new ry(n)}catch{return null}}}/**
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
 */class Vo{constructor(){this.providerId=Vo.PROVIDER_ID}static credential(e,n){return ml._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ry.parseLink(n);return ie(r,"argument-error"),ml._fromEmailAndCode(e,r.code,r.tenantId)}}Vo.PROVIDER_ID="password";Vo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class nC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $l extends nC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Br extends $l{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.FACEBOOK_SIGN_IN_METHOD="facebook.com";Br.PROVIDER_ID="facebook.com";/**
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
 */class Wr extends $l{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cs._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.GOOGLE_SIGN_IN_METHOD="google.com";Wr.PROVIDER_ID="google.com";/**
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
 */class Vr extends $l{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
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
 */class Hr extends $l{constructor(){super("twitter.com")}static credential(e,n){return cs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hr.credential(n,r)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
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
 */async function XM(t,e){return Fl(t,"POST","/v1/accounts:signUp",bi(t,e))}/**
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
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yi._fromIdTokenResponse(e,r,i),o=S0(r);return new ds({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=S0(r);return new ds({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function S0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Mc extends Ti{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mc(e,n,r,i)}}function rC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mc._fromErrorAndOperation(t,s,e,r):s})}async function JM(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",r)}/**
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
 */async function ZM(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ro(t,rC(r,i,e,t),n);ie(s.idToken,r,"internal-error");const o=ey(s.idToken);ie(o,r,"internal-error");const{sub:a}=o;return ie(t.uid===a,r,"user-mismatch"),ds._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),s}}/**
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
 */async function iC(t,e,n=!1){const r="signIn",i=await rC(t,r,e),s=await ds._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function eL(t,e){return iC(vs(t),e)}/**
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
 */async function sC(t){const e=vs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tL(t,e,n){const r=vs(t),o=await nm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",XM).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&sC(t),l}),a=await ds._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function oC(t,e,n){return eL(Nt(t),Vo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sC(t),r})}/**
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
 */async function nL(t,e){return Pr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function rL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Nt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ro(r,nL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function iL(t,e,n,r){return Nt(t).onIdTokenChanged(e,n,r)}function sL(t,e,n){return Nt(t).beforeAuthStateChanged(e,n)}function oL(t,e,n,r){return Nt(t).onAuthStateChanged(e,n,r)}function aL(t){return Nt(t).signOut()}const Lc="__sak";/**
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
 */class aC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lc,"1"),this.storage.removeItem(Lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lL(){const t=$t();return ty(t)||jd(t)}const uL=1e3,cL=10;class lC extends aC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lL()&&bM(),this.fallbackToPolling=JS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lC.type="LOCAL";const dL=lC;/**
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
 */class uC extends aC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uC.type="SESSION";const cC=uC;/**
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
 */function fL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $d{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $d(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await fL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$d.receivers=[];/**
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
 */function iy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=iy("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tr(){return window}function pL(t){tr().location.href=t}/**
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
 */function dC(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function mL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yL(){return dC()?self:null}/**
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
 */const fC="firebaseLocalStorageDb",vL=1,jc="firebaseLocalStorage",hC="fbase_key";class Ul{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ud(t,e){return t.transaction([jc],e?"readwrite":"readonly").objectStore(jc)}function _L(){const t=indexedDB.deleteDatabase(fC);return new Ul(t).toPromise()}function rm(){const t=indexedDB.open(fC,vL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jc,{keyPath:hC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jc)?e(r):(r.close(),await _L(),e(await rm()))})})}async function C0(t,e,n){const r=Ud(t,!0).put({[hC]:e,value:n});return new Ul(r).toPromise()}async function wL(t,e){const n=Ud(t,!1).get(e),r=await new Ul(n).toPromise();return r===void 0?null:r.value}function T0(t,e){const n=Ud(t,!0).delete(e);return new Ul(n).toPromise()}const xL=800,EL=3;class pC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$d._getInstance(yL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mL(),!this.activeServiceWorker)return;this.sender=new hL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rm();return await C0(e,Lc,"1"),await T0(e,Lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>C0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>T0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ud(i,!1).getAll();return new Ul(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pC.type="LOCAL";const SL=pC;new jl(3e4,6e4);/**
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
 */function CL(t,e){return e?pr(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sy extends ny{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TL(t){return iC(t.auth,new sy(t),t.bypassAuthState)}function bL(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),ZM(n,new sy(t),t.bypassAuthState)}async function IL(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),JM(n,new sy(t),t.bypassAuthState)}/**
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
 */class mC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TL;case"linkViaPopup":case"linkViaRedirect":return IL;case"reauthViaPopup":case"reauthViaRedirect":return bL;default:Vn(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kL=new jl(2e3,1e4);class Js extends mC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Js.currentPopupAction&&Js.currentPopupAction.cancel(),Js.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=iy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Js.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kL.get())};e()}}Js.currentPopupAction=null;/**
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
 */const RL="pendingRedirect",Vu=new Map;class PL extends mC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vu.get(this.auth._key());if(!e){try{const r=await OL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vu.set(this.auth._key(),e)}return this.bypassAuthState||Vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OL(t,e){const n=DL(e),r=NL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function AL(t,e){Vu.set(t._key(),e)}function NL(t){return pr(t._redirectPersistence)}function DL(t){return Wu(RL,t.config.apiKey,t.name)}async function ML(t,e,n=!1){const r=vs(t),i=CL(r,e),o=await new PL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const LL=10*60*1e3;class jL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(er(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LL&&this.cachedEventUids.clear(),this.cachedEventUids.has(b0(e))}saveEventToCache(e){this.cachedEventUids.add(b0(e)),this.lastProcessedEventTime=Date.now()}}function b0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gC(t);default:return!1}}/**
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
 */async function $L(t,e={}){return Pr(t,"GET","/v1/projects",e)}/**
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
 */const UL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zL=/^https?/;async function BL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $L(t);for(const n of e)try{if(WL(n))return}catch{}Vn(t,"unauthorized-domain")}function WL(t){const e=tm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zL.test(n))return!1;if(UL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const VL=new jl(3e4,6e4);function I0(){const t=tr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HL(t){return new Promise((e,n)=>{var r,i,s;function o(){I0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{I0(),n(er(t,"network-request-failed"))},timeout:VL.get()})}if(!((i=(r=tr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tr().gapi)===null||s===void 0)&&s.load)o();else{const a=MM("iframefcb");return tr()[a]=()=>{gapi.load?o():n(er(t,"network-request-failed"))},eC(`${DM()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Hu=null,e})}let Hu=null;function GL(t){return Hu=Hu||HL(t),Hu}/**
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
 */const KL=new jl(5e3,15e3),YL="__/auth/iframe",qL="emulator/auth/iframe",QL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JL(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zg(e,qL):`https://${t.config.authDomain}/${YL}`,r={apiKey:e.apiKey,appName:t.name,v:Wo},i=XL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bo(r).slice(1)}`}async function ZL(t){const e=await GL(t),n=tr().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:JL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=er(t,"network-request-failed"),a=tr().setTimeout(()=>{s(o)},KL.get());function l(){tr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const e2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},t2=500,n2=600,r2="_blank",i2="http://localhost";class k0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s2(t,e,n,r=t2,i=n2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},e2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=$t().toLowerCase();n&&(a=KS(u)?r2:n),GS(u)&&(e=e||i2,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(CM(u)&&a!=="_self")return o2(e||"",a),new k0(null);const d=window.open(e||"",a,c);ie(d,t,"popup-blocked");try{d.focus()}catch{}return new k0(d)}function o2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const a2="__/auth/handler",l2="emulator/auth/handler",u2=encodeURIComponent("fac");async function R0(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wo,eventId:i};if(e instanceof nC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof $l){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${u2}=${encodeURIComponent(l)}`:"";return`${c2(t)}?${Bo(a).slice(1)}${u}`}function c2({config:t}){return t.emulator?Zg(t,l2):`https://${t.authDomain}/${a2}`}/**
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
 */const fh="webStorageSupport";class d2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cC,this._completeRedirectFn=ML,this._overrideRedirectResult=AL}async _openPopup(e,n,r,i){var s;br((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await R0(e,n,r,tm(),i);return s2(e,o,iy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await R0(e,n,r,tm(),i);return pL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(br(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZL(e),r=new jL(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fh,{type:fh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fh];o!==void 0&&n(!!o),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return JS()||ty()||jd()}}const f2=d2;var P0="@firebase/auth",O0="1.6.0";/**
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
 */class h2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function p2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function m2(t){ko(new ls("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZS(t)},u=new OM(r,i,s,l);return UM(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ko(new ls("auth-internal",e=>{const n=vs(e.getProvider("auth").getImmediate());return(r=>new h2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),si(P0,O0,p2(t)),si(P0,O0,"esm2017")}/**
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
 */const g2=5*60,y2=RS("authIdTokenMaxAge")||g2;let A0=null;const v2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>y2)return;const i=n==null?void 0:n.token;A0!==i&&(A0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _2(t=LS()){const e=Qg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$M(t,{popupRedirectResolver:f2,persistence:[SL,dL,cC]}),r=RS("authTokenSyncURL");if(r){const s=v2(r);sL(n,s,()=>s(n.currentUser)),iL(n,o=>s(o))}const i=IS("auth");return i&&zM(n,`http://${i}`),n}function w2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}AM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=er("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",w2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});m2("Browser");var N0={};const D0="@firebase/database",M0="1.0.3";/**
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
 */let yC="";function x2(t){yC=t}/**
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
 */class E2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ft(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class S2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const vC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new E2(e)}}catch{}return new S2},Wi=vC("localStorage"),im=vC("sessionStorage");/**
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
 */const uo=new Yg("@firebase/database"),C2=function(){let t=1;return function(){return t++}}(),_C=function(t){const e=KN(t),n=new WN;n.update(e);const r=n.digest();return Vg.encodeByteArray(r)},zl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=zl.apply(null,r):typeof r=="object"?e+=ft(r):e+=r,e+=" "}return e};let qi=null,L0=!0;const T2=function(t,e){F(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(uo.logLevel=Me.VERBOSE,qi=uo.log.bind(uo),e&&im.set("logging_enabled",!0)):typeof t=="function"?qi=t:(qi=null,im.remove("logging_enabled"))},jt=function(...t){if(L0===!0&&(L0=!1,qi===null&&im.get("logging_enabled")===!0&&T2(!0)),qi){const e=zl.apply(null,t);qi(e)}},Bl=function(t){return function(...e){jt(t,...e)}},sm=function(...t){const e="FIREBASE INTERNAL ERROR: "+zl(...t);uo.error(e)},Ir=function(...t){const e=`FIREBASE FATAL ERROR: ${zl(...t)}`;throw uo.error(e),new Error(e)},en=function(...t){const e="FIREBASE WARNING: "+zl(...t);uo.warn(e)},b2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&en("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},oy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},I2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fs="[MIN_NAME]",mi="[MAX_NAME]",Ho=function(t,e){if(t===e)return 0;if(t===fs||e===mi)return-1;if(e===fs||t===mi)return 1;{const n=j0(t),r=j0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},k2=function(t,e){return t===e?0:t<e?-1:1},ua=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ft(e))},ay=function(t){if(typeof t!="object"||t===null)return ft(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ft(e[r]),n+=":",n+=ay(t[e[r]]);return n+="}",n},wC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function tn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xC=function(t){F(!oy(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},R2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},P2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function O2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const A2=new RegExp("^-?(0*)\\d{1,10}$"),N2=-2147483648,D2=2147483647,j0=function(t){if(A2.test(t)){const e=Number(t);if(e>=N2&&e<=D2)return e}return null},Go=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw en("Exception was thrown by user callback.",n),e},Math.floor(0))}},M2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},La=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class L2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){en(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class j2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',en(e)}}class co{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}co.OWNER="owner";/**
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
 */const ly="5",EC="v",SC="s",CC="r",TC="f",bC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,IC="ls",kC="p",om="ac",RC="websocket",PC="long_polling";/**
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
 */class OC{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function F2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function AC(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let r;if(e===RC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===PC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);F2(t)&&(n.ns=t.namespace);const i=[];return tn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class $2{constructor(){this.counters_={}}incrementCounter(e,n=1){rr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return bN(this.counters_)}}/**
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
 */const hh={},ph={};function uy(t){const e=t.toString();return hh[e]||(hh[e]=new $2),hh[e]}function U2(t,e){const n=t.toString();return ph[n]||(ph[n]=e()),ph[n]}/**
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
 */class z2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Go(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const F0="start",B2="close",W2="pLPCommand",V2="pRTLPCB",NC="id",DC="pw",MC="ser",H2="cb",G2="seg",K2="ts",Y2="d",q2="dframe",LC=1870,jC=30,Q2=LC-jC,X2=25e3,J2=3e4;class Zs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bl(e),this.stats_=uy(n),this.urlFn=l=>(this.appCheckToken&&(l[om]=this.appCheckToken),AC(n,PC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new z2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(J2)),I2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cy((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===F0)this.id=a,this.password=l;else if(o===B2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[F0]="t",r[MC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[H2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[EC]=ly,this.transportSessionId&&(r[SC]=this.transportSessionId),this.lastSessionId&&(r[IC]=this.lastSessionId),this.applicationId&&(r[kC]=this.applicationId),this.appCheckToken&&(r[om]=this.appCheckToken),typeof location<"u"&&location.hostname&&bC.test(location.hostname)&&(r[CC]=TC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zs.forceAllow_=!0}static forceDisallow(){Zs.forceDisallow_=!0}static isAvailable(){return Zs.forceAllow_?!0:!Zs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!R2()&&!P2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ft(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=TS(n),i=wC(r,Q2);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[q2]="t",r[NC]=e,r[DC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ft(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=C2(),window[W2+this.uniqueCallbackIdentifier]=e,window[V2+this.uniqueCallbackIdentifier]=n,this.myIFrame=cy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){jt("frame writing exception"),a.stack&&jt(a.stack),jt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||jt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[NC]=this.myID,e[DC]=this.myPW,e[MC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jC+r.length<=LC;){const o=this.pendingSegs.shift();r=r+"&"+G2+i+"="+o.seg+"&"+K2+i+"="+o.ts+"&"+Y2+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(X2)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Z2=16384,ej=45e3;let Fc=null;typeof MozWebSocket<"u"?Fc=MozWebSocket:typeof WebSocket<"u"&&(Fc=WebSocket);class Ln{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bl(this.connId),this.stats_=uy(n),this.connURL=Ln.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[EC]=ly,typeof location<"u"&&location.hostname&&bC.test(location.hostname)&&(o[CC]=TC),n&&(o[SC]=n),r&&(o[IC]=r),i&&(o[om]=i),s&&(o[kC]=s),AC(e,RC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wi.set("previous_websocket_failure",!0);try{let r;OS(),this.mySock=new Fc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ln.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Fc!==null&&!Ln.forceDisallow_}static previouslyFailed(){return Wi.isInMemoryStorage||Wi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=fl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ft(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=wC(n,Z2);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ej))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ln.responsesRequiredToBeHealthy=2;Ln.healthyTimeout=3e4;/**
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
 */class gl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zs,Ln]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ln&&Ln.isAvailable();let r=n&&!Ln.previouslyFailed();if(e.webSocketOnly&&(n||en("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ln];else{const i=this.transports_=[];for(const s of gl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);gl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gl.globalTransportInitialized_=!1;/**
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
 */const tj=6e4,nj=5e3,rj=10*1024,ij=100*1024,mh="t",$0="d",sj="s",U0="r",oj="e",z0="o",B0="a",W0="n",V0="p",aj="h";class lj{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bl("c:"+this.id+":"),this.transportManager_=new gl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=La(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ij?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rj?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mh in e){const n=e[mh];n===B0?this.upgradeIfSecondaryHealthy_():n===U0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===z0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ua("t",e),r=ua("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:V0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:B0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:W0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ua("t",e),r=ua("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ua(mh,e);if($0 in e){const r=e[$0];if(n===aj){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===W0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sj?this.onConnectionShutdown_(r):n===U0?this.onReset_(r):n===oj?sm("Server Error: "+r):n===z0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ly!==r&&en("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),La(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tj))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):La(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nj))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:V0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class FC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $C{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class $c extends $C{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $c}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const H0=32,G0=768;class Fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Pe(){return new Fe("")}function ye(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gi(t){return t.pieces_.length-t.pieceNum_}function Be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Fe(t.pieces_,e)}function UC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uj(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function BC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Fe(e,0)}function ht(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Fe(n,0)}function _e(t){return t.pieceNum_>=t.pieces_.length}function zt(t,e){const n=ye(t),r=ye(e);if(n===null)return e;if(n===r)return zt(Be(t),Be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function dy(t,e){if(gi(t)!==gi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function jn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(gi(t)>gi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class cj{constructor(e,n){this.errorPrefix_=n,this.parts_=zC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ld(this.parts_[r]);WC(this)}}function dj(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ld(e),WC(t)}function fj(t){const e=t.parts_.pop();t.byteLength_-=Ld(e),t.parts_.length>0&&(t.byteLength_-=1)}function WC(t){if(t.byteLength_>G0)throw new Error(t.errorPrefix_+"has a key path longer than "+G0+" bytes ("+t.byteLength_+").");if(t.parts_.length>H0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+H0+") or object contains a cycle "+Di(t))}function Di(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class fy extends $C{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new fy}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ca=1e3,hj=60*5*1e3,K0=30*1e3,pj=1.3,mj=3e4,gj="server_kill",Y0=3;class _r extends FC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=_r.nextPersistentConnectionId_++,this.log_=Bl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ca,this.maxReconnectDelay_=hj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!OS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$c.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ft(s)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Md,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;_r.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rr(e,"w")){const r=Io(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();en(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||BN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=K0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ft(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sm("Unrecognized action received from server: "+ft(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mj&&(this.reconnectDelay_=ca),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_r.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?jt("getToken() completed but was canceled"):(jt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new lj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{en(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(gj)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&en(d),l())}}}interrupt(e){jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qp(this.interruptReasons_)&&(this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ay(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Fe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){jt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Y0&&(this.reconnectDelay_=K0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){jt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Y0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yC.replace(/\./g,"-")]=1,Gg()?e["framework.cordova"]=1:PS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$c.getInstance().currentlyOnline();return qp(this.interruptReasons_)&&e}}_r.nextPersistentConnectionId_=0;_r.nextConnectionId_=0;/**
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
 */class ve{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ve(e,n)}}/**
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
 */class zd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ve(fs,e),i=new ve(fs,n);return this.compare(r,i)!==0}minPost(){return ve.MIN}}/**
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
 */let wu;class VC extends zd{static get __EMPTY_NODE(){return wu}static set __EMPTY_NODE(e){wu=e}compare(e,n){return Ho(e.name,n.name)}isDefinedOn(e){throw zo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ve.MIN}maxPost(){return new ve(mi,wu)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,wu)}toString(){return".key"}}const oi=new VC;/**
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
 */class xu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Et.RED,this.left=i??qt.EMPTY_NODE,this.right=s??qt.EMPTY_NODE}copy(e,n,r,i,s){return new Et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Et.RED=!0;Et.BLACK=!1;class yj{copy(e,n,r,i,s){return this}insert(e,n,r){return new Et(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qt{constructor(e,n=qt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Et.BLACK,null,null))}remove(e){return new qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Et.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new xu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new xu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new xu(this.root_,null,this.comparator_,!0,e)}}qt.EMPTY_NODE=new yj;/**
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
 */function vj(t,e){return Ho(t.name,e.name)}function hy(t,e){return Ho(t,e)}/**
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
 */let am;function _j(t){am=t}const HC=function(t){return typeof t=="number"?"number:"+xC(t):"string:"+t},GC=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rr(e,".sv"),"Priority must be a string or number.")}else F(t===am||t.isEmpty(),"priority of unexpected type.");F(t===am||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let q0;class _t{constructor(e,n=_t.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GC(this.priorityNode_)}static set __childrenNodeConstructor(e){q0=e}static get __childrenNodeConstructor(){return q0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _t(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_t.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return _e(e)?this:ye(e)===".priority"?this.priorityNode_:_t.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ye(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(F(r!==".priority"||gi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,_t.__childrenNodeConstructor.EMPTY_NODE.updateChild(Be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+HC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xC(this.value_):e+=this.value_,this.lazyHash_=_C(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _t.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=_t.VALUE_TYPE_ORDER.indexOf(n),s=_t.VALUE_TYPE_ORDER.indexOf(r);return F(i>=0,"Unknown leaf type: "+n),F(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_t.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let KC,YC;function wj(t){KC=t}function xj(t){YC=t}class Ej extends zd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ho(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve(mi,new _t("[PRIORITY-POST]",YC))}makePost(e,n){const r=KC(e);return new ve(n,new _t("[PRIORITY-POST]",r))}toString(){return".priority"}}const Je=new Ej;/**
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
 */const Sj=Math.log(2);class Cj{constructor(e){const n=s=>parseInt(Math.log(s)/Sj,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Uc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Et(f,d.node,Et.BLACK,null,null);{const p=parseInt(c/2,10)+l,g=i(l,p),v=i(p+1,u);return d=t[p],f=n?n(d):d,new Et(f,d.node,Et.BLACK,g,v)}},s=function(l){let u=null,c=null,d=t.length;const f=function(g,v){const w=d-g,m=d;d-=g;const h=i(w+1,m),y=t[w],E=n?n(y):y;p(new Et(E,y.node,v,null,h))},p=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));v?f(w,Et.BLACK):(f(w,Et.BLACK),f(w,Et.RED))}return c},o=new Cj(t.length),a=s(o);return new qt(r||e,a)};/**
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
 */let gh;const Ds={};class mr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return F(Ds&&Je,"ChildrenNode.ts has not been loaded"),gh=gh||new mr({".priority":Ds},{".priority":Je}),gh}get(e){const n=Io(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qt?n:null}hasIndex(e){return rr(this.indexSet_,e.toString())}addIndex(e,n){F(e!==oi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ve.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Uc(r,e.getCompare()):a=Ds;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new mr(c,u)}addToIndexes(e,n){const r=Pc(this.indexes_,(i,s)=>{const o=Io(this.indexSet_,s);if(F(o,"Missing index implementation for "+s),i===Ds)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ve.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Uc(a,o.getCompare())}else return Ds;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ve(e.name,a))),l.insert(e,e.node)}});return new mr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Pc(this.indexes_,i=>{if(i===Ds)return i;{const s=n.get(e.name);return s?i.remove(new ve(e.name,s)):i}});return new mr(r,this.indexSet_)}}/**
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
 */let da;class ee{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&GC(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return da||(da=new ee(new qt(hy),null,mr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||da}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?da:n}}getChild(e){const n=ye(e);return n===null?this:this.getImmediateChild(n).getChild(Be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ve(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?da:this.priorityNode_;return new ee(i,o,s)}}updateChild(e,n){const r=ye(e);if(r===null)return n;{F(ye(e)!==".priority"||gi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Be(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Je,(o,a)=>{n[o]=a.val(e),r++,s&&ee.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+HC(this.getPriority().val())+":"),this.forEachChild(Je,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":_C(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ve(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ve(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ve.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wl?-1:0}withIndex(e){if(e===oi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===oi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Je),i=n.getIterator(Je);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===oi?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tj extends ee{constructor(){super(new qt(hy),ee.EMPTY_NODE,mr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Wl=new Tj;Object.defineProperties(ve,{MIN:{value:new ve(fs,ee.EMPTY_NODE)},MAX:{value:new ve(mi,Wl)}});VC.__EMPTY_NODE=ee.EMPTY_NODE;_t.__childrenNodeConstructor=ee;_j(Wl);xj(Wl);/**
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
 */const bj=!0;function St(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _t(n,St(e))}if(!(t instanceof Array)&&bj){const n=[];let r=!1;if(tn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=St(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ve(o,l)))}}),n.length===0)return ee.EMPTY_NODE;const s=Uc(n,vj,o=>o.name,hy);if(r){const o=Uc(n,Je.getCompare());return new ee(s,St(e),new mr({".priority":o},{".priority":Je}))}else return new ee(s,St(e),mr.Default)}else{let n=ee.EMPTY_NODE;return tn(t,(r,i)=>{if(rr(t,r)&&r.substring(0,1)!=="."){const s=St(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(St(e))}}wj(St);/**
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
 */class qC extends zd{constructor(e){super(),this.indexPath_=e,F(!_e(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ho(e.name,n.name):s}makePost(e,n){const r=St(e),i=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new ve(n,i)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Wl);return new ve(mi,e)}toString(){return zC(this.indexPath_,0).join("/")}}/**
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
 */class Ij extends zd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ho(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,n){const r=St(e);return new ve(n,r)}toString(){return".value"}}const QC=new Ij;/**
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
 */function XC(t){return{type:"value",snapshotNode:t}}function Po(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function yl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function kj(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class py{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(yl(n,a)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Po(n,r)):o.trackChildChange(vl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Je,(i,s)=>{n.hasChild(i)||r.trackChildChange(yl(i,s))}),n.isLeafNode()||n.forEachChild(Je,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(vl(i,s,o))}else r.trackChildChange(Po(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class _l{constructor(e){this.indexedFilter_=new py(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_l.getStartPost_(e),this.endPost_=_l.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ve(n,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ee.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ee.EMPTY_NODE);const s=this;return n.forEachChild(Je,(o,a)=>{s.matches(new ve(o,a))||(i=i.updateImmediateChild(o,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Rj{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new _l(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ve(n,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ee.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ee.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;F(a.numChildren()===this.limit_,"");const l=new ve(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(vl(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(yl(n,d));const v=a.updateImmediateChild(n,ee.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Po(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(yl(u.name,u.node)),s.trackChildChange(Po(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,ee.EMPTY_NODE)):e}}/**
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
 */class my{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fs}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Je}copy(){const e=new my;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pj(t){return t.loadsAllData()?new py(t.getIndex()):t.hasLimit()?new Rj(t):new _l(t)}function Oj(t,e){const n=t.copy();return n.index_=e,n}function Q0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Je?n="$priority":t.index_===QC?n="$value":t.index_===oi?n="$key":(F(t.index_ instanceof qC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ft(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ft(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ft(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ft(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ft(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function X0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Je&&(e.i=t.index_.toString()),e}/**
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
 */class zc extends FC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Bl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=zc.getListenId_(e,r),a={};this.listens_[o]=a;const l=Q0(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Io(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=zc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Q0(e._queryParams),r=e._path.toString(),i=new Md;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fl(a.responseText)}catch{en("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&en("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Aj{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Bc(){return{value:null,children:new Map}}function JC(t,e,n){if(_e(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ye(e);t.children.has(r)||t.children.set(r,Bc());const i=t.children.get(r);e=Be(e),JC(i,e,n)}}function lm(t,e,n){t.value!==null?n(e,t.value):Nj(t,(r,i)=>{const s=new Fe(e.toString()+"/"+r);lm(i,s,n)})}function Nj(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Dj{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const J0=10*1e3,Mj=30*1e3,Lj=5*60*1e3;class jj{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Dj(e);const r=J0+(Mj-J0)*Math.random();La(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;tn(e,(i,s)=>{s>0&&rr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),La(this.reportStats_.bind(this),Math.floor(Math.random()*2*Lj))}}/**
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
 */var Fn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Fn||(Fn={}));function ZC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Wc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Fn.ACK_USER_WRITE,this.source=ZC()}operationForChild(e){if(_e(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Fe(e));return new Wc(Pe(),n,this.revert)}}else return F(ye(this.path)===e,"operationForChild called for unrelated child."),new Wc(Be(this.path),this.affectedTree,this.revert)}}/**
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
 */class wl{constructor(e,n){this.source=e,this.path=n,this.type=Fn.LISTEN_COMPLETE}operationForChild(e){return _e(this.path)?new wl(this.source,Pe()):new wl(this.source,Be(this.path))}}/**
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
 */class hs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Fn.OVERWRITE}operationForChild(e){return _e(this.path)?new hs(this.source,Pe(),this.snap.getImmediateChild(e)):new hs(this.source,Be(this.path),this.snap)}}/**
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
 */class xl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Fn.MERGE}operationForChild(e){if(_e(this.path)){const n=this.children.subtree(new Fe(e));return n.isEmpty()?null:n.value?new hs(this.source,Pe(),n.value):new xl(this.source,Pe(),n)}else return F(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xl(this.source,Be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class yi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(_e(e))return this.isFullyInitialized()&&!this.filtered_;const n=ye(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Fj{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $j(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(kj(o.childName,o.snapshotNode))}),fa(t,i,"child_removed",e,r,n),fa(t,i,"child_added",e,r,n),fa(t,i,"child_moved",s,r,n),fa(t,i,"child_changed",e,r,n),fa(t,i,"value",e,r,n),i}function fa(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>zj(t,a,l)),o.forEach(a=>{const l=Uj(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function Uj(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zj(t,e,n){if(e.childName==null||n.childName==null)throw zo("Should only compare child_ events.");const r=new ve(e.childName,e.snapshotNode),i=new ve(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Bd(t,e){return{eventCache:t,serverCache:e}}function ja(t,e,n,r){return Bd(new yi(e,n,r),t.serverCache)}function eT(t,e,n,r){return Bd(t.eventCache,new yi(e,n,r))}function Vc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ps(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let yh;const Bj=()=>(yh||(yh=new qt(k2)),yh);class Ke{constructor(e,n=Bj()){this.value=e,this.children=n}static fromObject(e){let n=new Ke(null);return tn(e,(r,i)=>{n=n.set(new Fe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Pe(),value:this.value};if(_e(e))return null;{const r=ye(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Be(e),n);return s!=null?{path:ht(new Fe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(_e(e))return this;{const n=ye(e),r=this.children.get(n);return r!==null?r.subtree(Be(e)):new Ke(null)}}set(e,n){if(_e(e))return new Ke(n,this.children);{const r=ye(e),s=(this.children.get(r)||new Ke(null)).set(Be(e),n),o=this.children.insert(r,s);return new Ke(this.value,o)}}remove(e){if(_e(e))return this.children.isEmpty()?new Ke(null):new Ke(null,this.children);{const n=ye(e),r=this.children.get(n);if(r){const i=r.remove(Be(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ke(null):new Ke(this.value,s)}else return this}}get(e){if(_e(e))return this.value;{const n=ye(e),r=this.children.get(n);return r?r.get(Be(e)):null}}setTree(e,n){if(_e(e))return n;{const r=ye(e),s=(this.children.get(r)||new Ke(null)).setTree(Be(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ke(this.value,o)}}fold(e){return this.fold_(Pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ht(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Pe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(_e(e))return null;{const s=ye(e),o=this.children.get(s);return o?o.findOnPath_(Be(e),ht(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Pe(),n)}foreachOnPath_(e,n,r){if(_e(e))return this;{this.value&&r(n,this.value);const i=ye(e),s=this.children.get(i);return s?s.foreachOnPath_(Be(e),ht(n,i),r):new Ke(null)}}foreach(e){this.foreach_(Pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ht(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Bn{constructor(e){this.writeTree_=e}static empty(){return new Bn(new Ke(null))}}function Fa(t,e,n){if(_e(e))return new Bn(new Ke(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=zt(i,e);return s=s.updateChild(o,n),new Bn(t.writeTree_.set(i,s))}else{const i=new Ke(n),s=t.writeTree_.setTree(e,i);return new Bn(s)}}}function Z0(t,e,n){let r=t;return tn(n,(i,s)=>{r=Fa(r,ht(e,i),s)}),r}function ew(t,e){if(_e(e))return Bn.empty();{const n=t.writeTree_.setTree(e,new Ke(null));return new Bn(n)}}function um(t,e){return _s(t,e)!=null}function _s(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(zt(n.path,e)):null}function tw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Je,(r,i)=>{e.push(new ve(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ve(r,i.value))}),e}function ai(t,e){if(_e(e))return t;{const n=_s(t,e);return n!=null?new Bn(new Ke(n)):new Bn(t.writeTree_.subtree(e))}}function cm(t){return t.writeTree_.isEmpty()}function Oo(t,e){return tT(Pe(),t.writeTree_,e)}function tT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(F(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=tT(ht(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ht(t,".priority"),r)),n}}/**
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
 */function Wd(t,e){return sT(e,t)}function Wj(t,e,n,r,i){F(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Fa(t.visibleWrites,e,n)),t.lastWriteId=r}function Vj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Hj(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Gj(a,r.path)?i=!1:jn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Kj(t),!0;if(r.snap)t.visibleWrites=ew(t.visibleWrites,r.path);else{const a=r.children;tn(a,l=>{t.visibleWrites=ew(t.visibleWrites,ht(r.path,l))})}return!0}else return!1}function Gj(t,e){if(t.snap)return jn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&jn(ht(t.path,n),e))return!0;return!1}function Kj(t){t.visibleWrites=nT(t.allWrites,Yj,Pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Yj(t){return t.visible}function nT(t,e,n){let r=Bn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)jn(n,o)?(a=zt(n,o),r=Fa(r,a,s.snap)):jn(o,n)&&(a=zt(o,n),r=Fa(r,Pe(),s.snap.getChild(a)));else if(s.children){if(jn(n,o))a=zt(n,o),r=Z0(r,a,s.children);else if(jn(o,n))if(a=zt(o,n),_e(a))r=Z0(r,Pe(),s.children);else{const l=Io(s.children,ye(a));if(l){const u=l.getChild(Be(a));r=Fa(r,Pe(),u)}}}else throw zo("WriteRecord should have .snap or .children")}}return r}function rT(t,e,n,r,i){if(!r&&!i){const s=_s(t.visibleWrites,e);if(s!=null)return s;{const o=ai(t.visibleWrites,e);if(cm(o))return n;if(n==null&&!um(o,Pe()))return null;{const a=n||ee.EMPTY_NODE;return Oo(o,a)}}}else{const s=ai(t.visibleWrites,e);if(!i&&cm(s))return n;if(!i&&n==null&&!um(s,Pe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(jn(u.path,e)||jn(e,u.path))},a=nT(t.allWrites,o,e),l=n||ee.EMPTY_NODE;return Oo(a,l)}}}function qj(t,e,n){let r=ee.EMPTY_NODE;const i=_s(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Je,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ai(t.visibleWrites,e);return n.forEachChild(Je,(o,a)=>{const l=Oo(ai(s,new Fe(o)),a);r=r.updateImmediateChild(o,l)}),tw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ai(t.visibleWrites,e);return tw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Qj(t,e,n,r,i){F(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ht(e,n);if(um(t.visibleWrites,s))return null;{const o=ai(t.visibleWrites,s);return cm(o)?i.getChild(n):Oo(o,i.getChild(n))}}function Xj(t,e,n,r){const i=ht(e,n),s=_s(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ai(t.visibleWrites,i);return Oo(o,r.getNode().getImmediateChild(n))}else return null}function Jj(t,e){return _s(t.visibleWrites,e)}function Zj(t,e,n,r,i,s,o){let a;const l=ai(t.visibleWrites,e),u=_s(l,Pe());if(u!=null)a=u;else if(n!=null)a=Oo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&c.length<i;)d(p,r)!==0&&c.push(p),p=f.getNext();return c}else return[]}function eF(){return{visibleWrites:Bn.empty(),allWrites:[],lastWriteId:-1}}function Hc(t,e,n,r){return rT(t.writeTree,t.treePath,e,n,r)}function vy(t,e){return qj(t.writeTree,t.treePath,e)}function nw(t,e,n,r){return Qj(t.writeTree,t.treePath,e,n,r)}function Gc(t,e){return Jj(t.writeTree,ht(t.treePath,e))}function tF(t,e,n,r,i,s){return Zj(t.writeTree,t.treePath,e,n,r,i,s)}function _y(t,e,n){return Xj(t.writeTree,t.treePath,e,n)}function iT(t,e){return sT(ht(t.treePath,e),t.writeTree)}function sT(t,e){return{treePath:t,writeTree:e}}/**
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
 */class nF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,vl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,yl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Po(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,vl(r,e.snapshotNode,i.oldSnap));else throw zo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class rF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const oT=new rF;class wy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new yi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _y(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ps(this.viewCache_),s=tF(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function iF(t){return{filter:t}}function sF(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function oF(t,e,n,r,i){const s=new nF;let o,a;if(n.type===Fn.OVERWRITE){const u=n;u.source.fromUser?o=dm(t,e,u.path,u.snap,r,i,s):(F(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!_e(u.path),o=Kc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Fn.MERGE){const u=n;u.source.fromUser?o=lF(t,e,u.path,u.children,r,i,s):(F(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=fm(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Fn.ACK_USER_WRITE){const u=n;u.revert?o=dF(t,e,u.path,r,i,s):o=uF(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Fn.LISTEN_COMPLETE)o=cF(t,e,n.path,r,s);else throw zo("Unknown operation type: "+n.type);const l=s.getChanges();return aF(e,o,l),{viewCache:o,changes:l}}function aF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Vc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(XC(Vc(e)))}}function aT(t,e,n,r,i,s){const o=e.eventCache;if(Gc(r,n)!=null)return e;{let a,l;if(_e(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ps(e),c=u instanceof ee?u:ee.EMPTY_NODE,d=vy(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Hc(r,ps(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ye(n);if(u===".priority"){F(gi(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=nw(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=Be(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=nw(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=_y(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return ja(e,a,o.isFullyInitialized()||_e(n),t.filter.filtersNodes())}}function Kc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(_e(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),p,null)}else{const p=ye(n);if(!l.isCompleteForPath(n)&&gi(n)>1)return e;const g=Be(n),w=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),p,w,g,oT,null)}const d=eT(e,u,l.isFullyInitialized()||_e(n),c.filtersNodes()),f=new wy(i,d,s);return aT(t,d,n,i,f,a)}function dm(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new wy(i,e,s);if(_e(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ja(e,u,!0,t.filter.filtersNodes());else{const d=ye(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ja(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=Be(n),p=a.getNode().getImmediateChild(d);let g;if(_e(f))g=r;else{const v=c.getCompleteChild(d);v!=null?UC(f)===".priority"&&v.getChild(BC(f)).isEmpty()?g=v:g=v.updateChild(f,r):g=ee.EMPTY_NODE}if(p.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),d,g,f,c,o);l=ja(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function rw(t,e){return t.eventCache.isCompleteForChild(e)}function lF(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=ht(n,l);rw(e,ye(c))&&(a=dm(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=ht(n,l);rw(e,ye(c))||(a=dm(t,a,c,u,i,s,o))}),a}function iw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function fm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;_e(n)?u=r:u=new Ke(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),g=iw(t,p,f);l=Kc(t,l,new Fe(d),g,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!p){const g=e.serverCache.getNode().getImmediateChild(d),v=iw(t,g,f);l=Kc(t,l,new Fe(d),v,i,s,o,a)}}),l}function uF(t,e,n,r,i,s,o){if(Gc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(_e(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Kc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(_e(n)){let u=new Ke(null);return l.getNode().forEachChild(oi,(c,d)=>{u=u.set(new Fe(c),d)}),fm(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ke(null);return r.foreach((c,d)=>{const f=ht(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),fm(t,e,n,u,i,s,a,o)}}function cF(t,e,n,r,i){const s=e.serverCache,o=eT(e,s.getNode(),s.isFullyInitialized()||_e(n),s.isFiltered());return aT(t,o,n,r,oT,i)}function dF(t,e,n,r,i,s){let o;if(Gc(r,n)!=null)return e;{const a=new wy(r,e,i),l=e.eventCache.getNode();let u;if(_e(n)||ye(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Hc(r,ps(e));else{const d=e.serverCache.getNode();F(d instanceof ee,"serverChildren would be complete if leaf node"),c=vy(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ye(n);let d=_y(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,Be(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,ee.EMPTY_NODE,Be(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Hc(r,ps(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Gc(r,Pe())!=null,ja(e,u,o,t.filter.filtersNodes())}}/**
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
 */class fF{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new py(r.getIndex()),s=Pj(r);this.processor_=iF(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(ee.EMPTY_NODE,a.getNode(),null),c=new yi(l,o.isFullyInitialized(),i.filtersNodes()),d=new yi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bd(d,c),this.eventGenerator_=new Fj(this.query_)}get query(){return this.query_}}function hF(t){return t.viewCache_.serverCache.getNode()}function pF(t){return Vc(t.viewCache_)}function mF(t,e){const n=ps(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!_e(e)&&!n.getImmediateChild(ye(e)).isEmpty())?n.getChild(e):null}function sw(t){return t.eventRegistrations_.length===0}function gF(t,e){t.eventRegistrations_.push(e)}function ow(t,e,n){const r=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function aw(t,e,n,r){e.type===Fn.MERGE&&e.source.queryId!==null&&(F(ps(t.viewCache_),"We should always have a full cache before handling merges"),F(Vc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=oF(t.processor_,i,e,n,r);return sF(t.processor_,s.viewCache),F(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,lT(t,s.changes,s.viewCache.eventCache.getNode(),null)}function yF(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Je,(s,o)=>{r.push(Po(s,o))}),n.isFullyInitialized()&&r.push(XC(n.getNode())),lT(t,r,n.getNode(),e)}function lT(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return $j(t.eventGenerator_,e,n,i)}/**
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
 */let Yc;class uT{constructor(){this.views=new Map}}function vF(t){F(!Yc,"__referenceConstructor has already been defined"),Yc=t}function _F(){return F(Yc,"Reference.ts has not been loaded"),Yc}function wF(t){return t.views.size===0}function xy(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return F(s!=null,"SyncTree gave us an op for an invalid query."),aw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(aw(o,e,n,r));return s}}function cT(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Hc(n,i?r:null),l=!1;a?l=!0:r instanceof ee?(a=vy(n,r),l=!1):(a=ee.EMPTY_NODE,l=!1);const u=Bd(new yi(a,l,!1),new yi(r,i,!1));return new fF(e,u)}return o}function xF(t,e,n,r,i,s){const o=cT(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gF(o,n),yF(o,n)}function EF(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=vi(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(ow(u,n,r)),sw(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(ow(l,n,r)),sw(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!vi(t)&&s.push(new(_F())(e._repo,e._path)),{removed:s,events:o}}function dT(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function li(t,e){let n=null;for(const r of t.views.values())n=n||mF(r,e);return n}function fT(t,e){if(e._queryParams.loadsAllData())return Vd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function hT(t,e){return fT(t,e)!=null}function vi(t){return Vd(t)!=null}function Vd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let qc;function SF(t){F(!qc,"__referenceConstructor has already been defined"),qc=t}function CF(){return F(qc,"Reference.ts has not been loaded"),qc}let TF=1;class lw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ke(null),this.pendingWriteTree_=eF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pT(t,e,n,r,i){return Wj(t.pendingWriteTree_,e,n,r,i),i?Hl(t,new hs(ZC(),e,n)):[]}function Vi(t,e,n=!1){const r=Vj(t.pendingWriteTree_,e);if(Hj(t.pendingWriteTree_,e)){let s=new Ke(null);return r.snap!=null?s=s.set(Pe(),!0):tn(r.children,o=>{s=s.set(new Fe(o),!0)}),Hl(t,new Wc(r.path,s,n))}else return[]}function Vl(t,e,n){return Hl(t,new hs(gy(),e,n))}function bF(t,e,n){const r=Ke.fromObject(n);return Hl(t,new xl(gy(),e,r))}function IF(t,e){return Hl(t,new wl(gy(),e))}function kF(t,e,n){const r=Sy(t,n);if(r){const i=Cy(r),s=i.path,o=i.queryId,a=zt(s,e),l=new wl(yy(o),a);return Ty(t,s,l)}else return[]}function Qc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||hT(o,e))){const l=EF(o,e,n,r);wF(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,p)=>vi(p));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=OF(f);for(let g=0;g<p.length;++g){const v=p[g],w=v.query,m=vT(t,v);t.listenProvider_.startListening($a(w),El(t,w),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening($a(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(Hd(f));t.listenProvider_.stopListening($a(f),p)}))}AF(t,u)}return a}function mT(t,e,n,r){const i=Sy(t,r);if(i!=null){const s=Cy(i),o=s.path,a=s.queryId,l=zt(o,e),u=new hs(yy(a),l,n);return Ty(t,o,u)}else return[]}function RF(t,e,n,r){const i=Sy(t,r);if(i){const s=Cy(i),o=s.path,a=s.queryId,l=zt(o,e),u=Ke.fromObject(n),c=new xl(yy(a),l,u);return Ty(t,o,c)}else return[]}function hm(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const g=zt(f,i);s=s||li(p,g),o=o||vi(p)});let a=t.syncPointTree_.get(i);a?(o=o||vi(a),s=s||li(a,Pe())):(a=new uT,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=ee.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const v=li(g,Pe());v&&(s=s.updateImmediateChild(p,v))}));const u=hT(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Hd(e);F(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=NF();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const c=Wd(t.pendingWriteTree_,i);let d=xF(a,e,n,c,s,l);if(!u&&!o&&!r){const f=fT(a,e);d=d.concat(DF(t,e,f))}return d}function Ey(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=zt(o,e),u=li(a,l);if(u)return u});return rT(i,e,s,n,!0)}function PF(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=zt(u,n);r=r||li(c,d)});let i=t.syncPointTree_.get(n);i?r=r||li(i,Pe()):(i=new uT,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new yi(r,!0,!1):null,a=Wd(t.pendingWriteTree_,e._path),l=cT(i,e,a,s?o.getNode():ee.EMPTY_NODE,s);return pF(l)}function Hl(t,e){return gT(e,t.syncPointTree_,null,Wd(t.pendingWriteTree_,Pe()))}function gT(t,e,n,r){if(_e(t.path))return yT(t,e,n,r);{const i=e.get(Pe());n==null&&i!=null&&(n=li(i,Pe()));let s=[];const o=ye(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=iT(r,o);s=s.concat(gT(a,l,u,c))}return i&&(s=s.concat(xy(i,t,r,n))),s}}function yT(t,e,n,r){const i=e.get(Pe());n==null&&i!=null&&(n=li(i,Pe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=iT(r,o),c=t.operationForChild(o);c&&(s=s.concat(yT(c,a,l,u)))}),i&&(s=s.concat(xy(i,t,r,n))),s}function vT(t,e){const n=e.query,r=El(t,n);return{hashFn:()=>(hF(e)||ee.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?kF(t,n._path,r):IF(t,n._path);{const s=O2(i,n);return Qc(t,n,null,s)}}}}function El(t,e){const n=Hd(e);return t.queryToTagMap.get(n)}function Hd(t){return t._path.toString()+"$"+t._queryIdentifier}function Sy(t,e){return t.tagToQueryMap.get(e)}function Cy(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Fe(t.substr(0,e))}}function Ty(t,e,n){const r=t.syncPointTree_.get(e);F(r,"Missing sync point for query tag that we're tracking");const i=Wd(t.pendingWriteTree_,e);return xy(r,n,i,null)}function OF(t){return t.fold((e,n,r)=>{if(n&&vi(n))return[Vd(n)];{let i=[];return n&&(i=dT(n)),tn(r,(s,o)=>{i=i.concat(o)}),i}})}function $a(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(CF())(t._repo,t._path):t}function AF(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Hd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function NF(){return TF++}function DF(t,e,n){const r=e._path,i=El(t,e),s=vT(t,n),o=t.listenProvider_.startListening($a(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)F(!vi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!_e(u)&&c&&vi(c))return[Vd(c).query];{let f=[];return c&&(f=f.concat(dT(c).map(p=>p.query))),tn(d,(p,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening($a(c),El(t,c))}}return o}/**
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
 */class by{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new by(n)}node(){return this.node_}}class Iy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ht(this.path_,e);return new Iy(this.syncTree_,n)}node(){return Ey(this.syncTree_,this.path_)}}const MF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},uw=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return LF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return jF(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},LF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},jF=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&F(!1,"Unexpected increment value: "+r);const i=e.node();if(F(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},FF=function(t,e,n,r){return ky(e,new Iy(n,t),r)},_T=function(t,e,n){return ky(t,new by(e),n)};function ky(t,e,n){const r=t.getPriority().val(),i=uw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=uw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new _t(a,St(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new _t(i))),o.forEachChild(Je,(a,l)=>{const u=ky(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Ry{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Py(t,e){let n=e instanceof Fe?e:new Fe(e),r=t,i=ye(n);for(;i!==null;){const s=Io(r.node.children,i)||{children:{},childCount:0};r=new Ry(i,r,s),n=Be(n),i=ye(n)}return r}function Ko(t){return t.node.value}function wT(t,e){t.node.value=e,pm(t)}function xT(t){return t.node.childCount>0}function $F(t){return Ko(t)===void 0&&!xT(t)}function Gd(t,e){tn(t.node.children,(n,r)=>{e(new Ry(n,t,r))})}function ET(t,e,n,r){n&&!r&&e(t),Gd(t,i=>{ET(i,e,!0,r)}),n&&r&&e(t)}function UF(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Gl(t){return new Fe(t.parent===null?t.name:Gl(t.parent)+"/"+t.name)}function pm(t){t.parent!==null&&zF(t.parent,t.name,t)}function zF(t,e,n){const r=$F(n),i=rr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,pm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,pm(t))}/**
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
 */const BF=/[\[\].#$\/\u0000-\u001F\u007F]/,WF=/[\[\].#$\u0000-\u001F\u007F]/,vh=10*1024*1024,ST=function(t){return typeof t=="string"&&t.length!==0&&!BF.test(t)},CT=function(t){return typeof t=="string"&&t.length!==0&&!WF.test(t)},VF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),CT(t)},cw=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!oy(t)||t&&typeof t=="object"&&rr(t,".sv")},HF=function(t,e,n,r){r&&e===void 0||Oy(Kg(t,"value"),e,n)},Oy=function(t,e,n){const r=n instanceof Fe?new cj(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Di(r));if(typeof e=="function")throw new Error(t+"contains a function "+Di(r)+" with contents = "+e.toString());if(oy(e))throw new Error(t+"contains "+e.toString()+" "+Di(r));if(typeof e=="string"&&e.length>vh/3&&Ld(e)>vh)throw new Error(t+"contains a string greater than "+vh+" utf8 bytes "+Di(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(tn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ST(o)))throw new Error(t+" contains an invalid key ("+o+") "+Di(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dj(r,o),Oy(t,a,r),fj(r)}),i&&s)throw new Error(t+' contains ".value" child '+Di(r)+" in addition to actual children.")}},TT=function(t,e,n,r){if(!(r&&n===void 0)&&!CT(n))throw new Error(Kg(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},GF=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),TT(t,e,n,r)},KF=function(t,e){if(ye(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},YF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ST(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VF(n))throw new Error(Kg(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class qF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ay(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!dy(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function bT(t,e,n){Ay(t,n),IT(t,r=>dy(r,e))}function nr(t,e,n){Ay(t,n),IT(t,r=>jn(r,e)||jn(e,r))}function IT(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(QF(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function QF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();qi&&jt("event: "+n.toString()),Go(r)}}}/**
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
 */const XF="repo_interrupt",JF=25;class ZF{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bc(),this.transactionQueueTree_=new Ry,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function e4(t,e,n){if(t.stats_=uy(t.repoInfo_),t.forceRestClient_||M2())t.server_=new zc(t.repoInfo_,(r,i,s,o)=>{dw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ft(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new _r(t.repoInfo_,e,(r,i,s,o)=>{dw(t,r,i,s,o)},r=>{fw(t,r)},r=>{n4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=U2(t.repoInfo_,()=>new jj(t.stats_,t.server_)),t.infoData_=new Aj,t.infoSyncTree_=new lw({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Vl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Dy(t,"connected",!1),t.serverSyncTree_=new lw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);nr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function t4(t){const n=t.infoData_.getNode(new Fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ny(t){return MF({timestamp:t4(t)})}function dw(t,e,n,r,i){t.dataUpdateCount++;const s=new Fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Pc(n,u=>St(u));o=RF(t.serverSyncTree_,s,l,i)}else{const l=St(n);o=mT(t.serverSyncTree_,s,l,i)}else if(r){const l=Pc(n,u=>St(u));o=bF(t.serverSyncTree_,s,l)}else{const l=St(n);o=Vl(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Yd(t,s)),nr(t.eventQueue_,a,o)}function fw(t,e){Dy(t,"connected",e),e===!1&&s4(t)}function n4(t,e){tn(e,(n,r)=>{Dy(t,n,r)})}function Dy(t,e,n){const r=new Fe("/.info/"+e),i=St(n);t.infoData_.updateSnapshot(r,i);const s=Vl(t.infoSyncTree_,r,i);nr(t.eventQueue_,r,s)}function kT(t){return t.nextWriteId_++}function r4(t,e,n){const r=PF(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=St(i).withIndex(e._queryParams.getIndex());hm(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Vl(t.serverSyncTree_,e._path,s);else{const a=El(t.serverSyncTree_,e);o=mT(t.serverSyncTree_,e._path,s,a)}return nr(t.eventQueue_,e._path,o),Qc(t.serverSyncTree_,e,n,null,!0),s},i=>(Kd(t,"get for query "+ft(e)+" failed: "+i),Promise.reject(new Error(i))))}function i4(t,e,n,r,i){Kd(t,"set",{path:e.toString(),value:n,priority:r});const s=Ny(t),o=St(n,r),a=Ey(t.serverSyncTree_,e),l=_T(o,a,s),u=kT(t),c=pT(t.serverSyncTree_,e,l,u,!0);Ay(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||en("set at "+e+" failed: "+f);const v=Vi(t.serverSyncTree_,u,!g);nr(t.eventQueue_,e,v),l4(t,i,f,p)});const d=NT(t,e);Yd(t,d),nr(t.eventQueue_,d,[])}function s4(t){Kd(t,"onDisconnectEvents");const e=Ny(t),n=Bc();lm(t.onDisconnect_,Pe(),(i,s)=>{const o=FF(i,s,t.serverSyncTree_,e);JC(n,i,o)});let r=[];lm(n,Pe(),(i,s)=>{r=r.concat(Vl(t.serverSyncTree_,i,s));const o=NT(t,i);Yd(t,o)}),t.onDisconnect_=Bc(),nr(t.eventQueue_,Pe(),r)}function o4(t,e,n){let r;ye(e._path)===".info"?r=hm(t.infoSyncTree_,e,n):r=hm(t.serverSyncTree_,e,n),bT(t.eventQueue_,e._path,r)}function hw(t,e,n){let r;ye(e._path)===".info"?r=Qc(t.infoSyncTree_,e,n):r=Qc(t.serverSyncTree_,e,n),bT(t.eventQueue_,e._path,r)}function a4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(XF)}function Kd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),jt(n,...e)}function l4(t,e,n,r){e&&Go(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function RT(t,e,n){return Ey(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function My(t,e=t.transactionQueueTree_){if(e||qd(t,e),Ko(e)){const n=OT(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&u4(t,Gl(e),n)}else xT(e)&&Gd(e,n=>{My(t,n)})}function u4(t,e,n){const r=n.map(u=>u.currentWriteId),i=RT(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];F(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=zt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Kd(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Vi(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();qd(t,Py(t.transactionQueueTree_,e)),My(t,t.transactionQueueTree_),nr(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Go(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{en("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Yd(t,e)}},o)}function Yd(t,e){const n=PT(t,e),r=Gl(n),i=OT(t,n);return c4(t,i,r),r}function c4(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=zt(n,l.path);let c=!1,d;if(F(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Vi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=JF)c=!0,d="maxretry",i=i.concat(Vi(t.serverSyncTree_,l.currentWriteId,!0));else{const f=RT(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Oy("transaction failed: Data returned ",p,l.path);let g=St(p);typeof p=="object"&&p!=null&&rr(p,".priority")||(g=g.updatePriority(f.getPriority()));const w=l.currentWriteId,m=Ny(t),h=_T(g,f,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=h,l.currentWriteId=kT(t),o.splice(o.indexOf(w),1),i=i.concat(pT(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Vi(t.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(Vi(t.serverSyncTree_,l.currentWriteId,!0))}nr(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}qd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Go(r[a]);My(t,t.transactionQueueTree_)}function PT(t,e){let n,r=t.transactionQueueTree_;for(n=ye(e);n!==null&&Ko(r)===void 0;)r=Py(r,n),e=Be(e),n=ye(e);return r}function OT(t,e){const n=[];return AT(t,e,n),n.sort((r,i)=>r.order-i.order),n}function AT(t,e,n){const r=Ko(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Gd(e,i=>{AT(t,i,n)})}function qd(t,e){const n=Ko(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,wT(e,n.length>0?n:void 0)}Gd(e,r=>{qd(t,r)})}function NT(t,e){const n=Gl(PT(t,e)),r=Py(t.transactionQueueTree_,e);return UF(r,i=>{_h(t,i)}),_h(t,r),ET(r,i=>{_h(t,i)}),n}function _h(t,e){const n=Ko(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Vi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?wT(e,void 0):n.length=s+1,nr(t.eventQueue_,Gl(e),i);for(let o=0;o<r.length;o++)Go(r[o])}}/**
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
 */function d4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function f4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):en(`Invalid query segment '${n}' in query '${t}'`)}return e}const pw=function(t,e){const n=h4(t),r=n.namespace;n.domain==="firebase.com"&&Ir(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ir("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||b2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new OC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Fe(n.pathString)}},h4=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=d4(t.substring(c,d)));const f=f4(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class DT{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ft(this.snapshot.exportVal())}}class MT{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class LT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Qd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return _e(this._path)?null:UC(this._path)}get ref(){return new ir(this._repo,this._path)}get _queryIdentifier(){const e=X0(this._queryParams),n=ay(e);return n==="{}"?"default":n}get _queryObject(){return X0(this._queryParams)}isEqual(e){if(e=Nt(e),!(e instanceof Qd))return!1;const n=this._repo===e._repo,r=dy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uj(this._path)}}function p4(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function m4(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===oi){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==fs)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==mi)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Je){if(e!=null&&!cw(e)||n!=null&&!cw(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(F(t.getIndex()instanceof qC||t.getIndex()===QC,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class ir extends Qd{constructor(e,n){super(e,n,new my,!1)}get parent(){const e=BC(this._path);return e===null?null:new ir(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ao{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Fe(e),r=Xc(this.ref,e);return new Ao(this._node.getChild(n),r,Je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ao(i,Xc(this.ref,r),Je)))}hasChild(e){const n=new Fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Sl(t,e){return t=Nt(t),t._checkNotDeleted("ref"),e!==void 0?Xc(t._root,e):t._root}function Xc(t,e){return t=Nt(t),ye(t._path)===null?GF("child","path",e,!1):TT("child","path",e,!1),new ir(t._repo,ht(t._path,e))}function jT(t,e){t=Nt(t),KF("set",t._path),HF("set",e,t._path,!1);const n=new Md;return i4(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function FT(t){t=Nt(t);const e=new LT(()=>{}),n=new Xd(e);return r4(t._repo,t,n).then(r=>new Ao(r,new ir(t._repo,t._path),t._queryParams.getIndex()))}class Xd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new DT("value",this,new Ao(e.snapshotNode,new ir(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new MT(this,e,n):null}matches(e){return e instanceof Xd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ly{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new MT(this,e,n):null}createEvent(e,n){F(e.childName!=null,"Child events should have a childName.");const r=Xc(new ir(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new DT(e.type,this,new Ao(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ly?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function g4(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{hw(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new LT(n,s||void 0),a=e==="value"?new Xd(o):new Ly(e,o);return o4(t._repo,t,a),()=>hw(t._repo,t,a)}function y4(t,e,n,r){return g4(t,"value",e,n,r)}class v4{}class _4 extends v4{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){p4(e,"orderByKey");const n=Oj(e._queryParams,oi);return m4(n),new Qd(e._repo,e._path,n,!0)}}function w4(){return new _4}function x4(t,...e){let n=Nt(t);for(const r of e)n=r._apply(n);return n}vF(ir);SF(ir);/**
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
 */const E4="FIREBASE_DATABASE_EMULATOR_HOST",mm={};let S4=!1;function C4(t,e,n,r){t.repoInfo_=new OC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function T4(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ir("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),jt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=pw(s,i),a=o.repoInfo,l,u;typeof process<"u"&&N0&&(u=N0[E4]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=pw(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new co(co.OWNER):new j2(t.name,t.options,e);YF("Invalid Firebase Database URL",o),_e(o.path)||Ir("Database URL must point to the root of a Firebase Database (not including a child path).");const d=I4(a,t,c,new L2(t.name,n));return new k4(d,t)}function b4(t,e){const n=mm[e];(!n||n[t.key]!==t)&&Ir(`Database ${e}(${t.repoInfo_}) has already been deleted.`),a4(t),delete n[t.key]}function I4(t,e,n,r){let i=mm[e.name];i||(i={},mm[e.name]=i);let s=i[t.toURLString()];return s&&Ir("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ZF(t,S4,n,r),i[t.toURLString()]=s,s}class k4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(e4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ir(this._repo,Pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(b4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ir("Cannot call "+e+" on a deleted database.")}}function R4(t=LS(),e){const n=Qg(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=AN("database");r&&P4(n,...r)}return n}function P4(t,e,n,r={}){t=Nt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ir("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ir('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new co(co.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:NN(r.mockUserToken,t.app.options.projectId);s=new co(o)}C4(i,e,n,s)}/**
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
 */function O4(t){x2(Wo),ko(new ls("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return T4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),si(D0,M0,t),si(D0,M0,"esm2017")}_r.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_r.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};O4();const A4={apiKey:"AIzaSyCWYjmkk34JmxhoKR59l_T-aK5C44aY72I",authDomain:"babysitters-57e3c.firebaseapp.com",databaseURL:"https://babysitters-57e3c-default-rtdb.firebaseio.com",projectId:"babysitters-57e3c",storageBucket:"babysitters-57e3c.appspot.com",messagingSenderId:"107090147671",appId:"1:107090147671:web:d1ad6872e16611aa746612"},N4=MS(A4),Cl=R4(N4),No=_2(),gm=async t=>{const e=Sl(Cl,`users/${t}/favorites`),n=await FT(e);if(n.exists()){const r=n.val();return Object.keys(r).map(s=>r[s])}else return[]},D4=(t,e)=>{jT(Sl(Cl,"users/"+t),{favorites:e})},M4=async(t,e)=>{const n=Sl(Cl,`users/${t}/favorites`),r=await FT(n);if(r.exists()){const i=r.val(),s=Object.keys(i).map(a=>({id:a,...i[a]})),o=s.findIndex(a=>a.id===e);o!==-1?(s.splice(o,1),jT(Sl(Cl,`users/${t}/favorites`),s)):console.error("Object with provided favoriteId not found in favorites array")}else console.error("No favorites found for the provided userId")},L4=vA`
body {
    background-color:  ${t=>t.theme.colors.mainBackground};
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

    
`,ha=["320","833","834","1439","1440"],j4=Object.freeze({colors:{mainBackground:"#F3F3F3",primaryGreenColor:"#103931",secondaryGreenColor:"#38cd3e",headerText:"#fbfbfb",titleText:"#8a8a89",primaryBodyText:"#11101c",secondaryBodyText:"rgba(17, 16, 28, 0.5)",buttonBorder:"rgba(251, 251, 251, 0.4)",photoBorder:"rgba(240, 63, 59, 0.2)",primaryWhite:"#FFFFFF",error:"#E74A3B",additionalGreenColor:"rgba(16, 57, 49, 0.2)"},transition:{customTrans:"250ms cubic-bezier(0.4, 0, 0.2, 1)"},mq:{mobMin:`min-width: ${ha[0]}px`,mobMax:`max-width: ${ha[1]}px`,tabMin:`min-width: ${ha[2]}px`,tabMax:`max-width: ${ha[3]}px`,deskMin:`min-width: ${ha[4]}px`}}),F4=()=>(RE(),x.jsx("div",{children:"ErrorPage"})),$T=C.createContext(),jy=()=>C.useContext($T),$4=({children:t})=>{const[e,n]=C.useState({isOpen:!1,formType:null,selectedNanny:null}),r=(s,o)=>{n({isOpen:!0,formType:s,selectedNanny:o})},i=()=>{n({isOpen:!1,formType:null,selectedNanny:null})};return x.jsx($T.Provider,{value:{modalConfig:e,openModal:r,closeModal:i},children:t})};function Jd(){const{currentUser:t}=Rg(Wg);return{currentUser:t,name:t==null?void 0:t.name,isAuth:!!(t!=null&&t.email),email:t.email}}const U4=D.button`
  font-weight: 500;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: ${t=>t.theme.colors.headerText};
  padding: ${({$padding:t})=>t||"14px 40px"};
  border-radius: 30px;
  border: ${({$border:t})=>t?"1px solid rgba(251, 251, 251, 0.4)":"none"};
  background-color: ${({$border:t})=>t?"transparent":"#103931"};
  transition: ${t=>t.theme.transition.customTrans};
  &:hover {
    background-color: rgba(16, 57, 49, 0.2);
    color: black;
  }
  @media (max-width: 1200px) {
    padding: 10px 20px;
  }
`,_n=({title:t,border:e,onClick:n,padding:r,type:i})=>x.jsx(U4,{$border:e,onClick:n,$padding:r,type:i,children:t});var z4=function(e){return B4(e)&&!W4(e)};function B4(t){return!!t&&typeof t=="object"}function W4(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||G4(t)}var V4=typeof Symbol=="function"&&Symbol.for,H4=V4?Symbol.for("react.element"):60103;function G4(t){return t.$$typeof===H4}function K4(t){return Array.isArray(t)?[]:{}}function Jc(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Tl(K4(t),t,e):t}function Y4(t,e,n){return t.concat(e).map(function(r){return Jc(r,n)})}function q4(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=Jc(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=Jc(e[i],n):r[i]=Tl(t[i],e[i],n)}),r}function Tl(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||Y4,n.isMergeableObject=n.isMergeableObject||z4;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):q4(t,e,n):Jc(e,n)}Tl.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return Tl(r,i,n)},{})};var ym=Tl,UT=typeof global=="object"&&global&&global.Object===Object&&global,Q4=typeof self=="object"&&self&&self.Object===Object&&self,sr=UT||Q4||Function("return this")(),_i=sr.Symbol,zT=Object.prototype,X4=zT.hasOwnProperty,J4=zT.toString,pa=_i?_i.toStringTag:void 0;function Z4(t){var e=X4.call(t,pa),n=t[pa];try{t[pa]=void 0;var r=!0}catch{}var i=J4.call(t);return r&&(e?t[pa]=n:delete t[pa]),i}var e3=Object.prototype,t3=e3.toString;function n3(t){return t3.call(t)}var r3="[object Null]",i3="[object Undefined]",mw=_i?_i.toStringTag:void 0;function ws(t){return t==null?t===void 0?i3:r3:mw&&mw in Object(t)?Z4(t):n3(t)}function BT(t,e){return function(n){return t(e(n))}}var Fy=BT(Object.getPrototypeOf,Object);function xs(t){return t!=null&&typeof t=="object"}var s3="[object Object]",o3=Function.prototype,a3=Object.prototype,WT=o3.toString,l3=a3.hasOwnProperty,u3=WT.call(Object);function gw(t){if(!xs(t)||ws(t)!=s3)return!1;var e=Fy(t);if(e===null)return!0;var n=l3.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&WT.call(n)==u3}var yw=Array.isArray,vw=Object.keys,c3=Object.prototype.hasOwnProperty,d3=typeof Element<"u";function vm(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=yw(t),r=yw(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!vm(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,c=e instanceof RegExp;if(u!=c)return!1;if(u&&c)return t.toString()==e.toString();var d=vw(t);if(s=d.length,s!==vw(e).length)return!1;for(i=s;i--!==0;)if(!c3.call(e,d[i]))return!1;if(d3&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=d[i],!(o==="_owner"&&t.$$typeof)&&!vm(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var f3=function(e,n){try{return vm(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Mi=sd(f3);function h3(){this.__data__=[],this.size=0}function VT(t,e){return t===e||t!==t&&e!==e}function Zd(t,e){for(var n=t.length;n--;)if(VT(t[n][0],e))return n;return-1}var p3=Array.prototype,m3=p3.splice;function g3(t){var e=this.__data__,n=Zd(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():m3.call(e,n,1),--this.size,!0}function y3(t){var e=this.__data__,n=Zd(e,t);return n<0?void 0:e[n][1]}function v3(t){return Zd(this.__data__,t)>-1}function _3(t,e){var n=this.__data__,r=Zd(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Or(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Or.prototype.clear=h3;Or.prototype.delete=g3;Or.prototype.get=y3;Or.prototype.has=v3;Or.prototype.set=_3;function w3(){this.__data__=new Or,this.size=0}function x3(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function E3(t){return this.__data__.get(t)}function S3(t){return this.__data__.has(t)}function Kl(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var C3="[object AsyncFunction]",T3="[object Function]",b3="[object GeneratorFunction]",I3="[object Proxy]";function HT(t){if(!Kl(t))return!1;var e=ws(t);return e==T3||e==b3||e==C3||e==I3}var wh=sr["__core-js_shared__"],_w=function(){var t=/[^.]+$/.exec(wh&&wh.keys&&wh.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function k3(t){return!!_w&&_w in t}var R3=Function.prototype,P3=R3.toString;function Es(t){if(t!=null){try{return P3.call(t)}catch{}try{return t+""}catch{}}return""}var O3=/[\\^$.*+?()[\]{}|]/g,A3=/^\[object .+?Constructor\]$/,N3=Function.prototype,D3=Object.prototype,M3=N3.toString,L3=D3.hasOwnProperty,j3=RegExp("^"+M3.call(L3).replace(O3,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function F3(t){if(!Kl(t)||k3(t))return!1;var e=HT(t)?j3:A3;return e.test(Es(t))}function $3(t,e){return t==null?void 0:t[e]}function Ss(t,e){var n=$3(t,e);return F3(n)?n:void 0}var bl=Ss(sr,"Map"),Il=Ss(Object,"create");function U3(){this.__data__=Il?Il(null):{},this.size=0}function z3(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var B3="__lodash_hash_undefined__",W3=Object.prototype,V3=W3.hasOwnProperty;function H3(t){var e=this.__data__;if(Il){var n=e[t];return n===B3?void 0:n}return V3.call(e,t)?e[t]:void 0}var G3=Object.prototype,K3=G3.hasOwnProperty;function Y3(t){var e=this.__data__;return Il?e[t]!==void 0:K3.call(e,t)}var q3="__lodash_hash_undefined__";function Q3(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Il&&e===void 0?q3:e,this}function ms(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ms.prototype.clear=U3;ms.prototype.delete=z3;ms.prototype.get=H3;ms.prototype.has=Y3;ms.prototype.set=Q3;function X3(){this.size=0,this.__data__={hash:new ms,map:new(bl||Or),string:new ms}}function J3(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function ef(t,e){var n=t.__data__;return J3(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Z3(t){var e=ef(this,t).delete(t);return this.size-=e?1:0,e}function e6(t){return ef(this,t).get(t)}function t6(t){return ef(this,t).has(t)}function n6(t,e){var n=ef(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Ii(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ii.prototype.clear=X3;Ii.prototype.delete=Z3;Ii.prototype.get=e6;Ii.prototype.has=t6;Ii.prototype.set=n6;var r6=200;function i6(t,e){var n=this.__data__;if(n instanceof Or){var r=n.__data__;if(!bl||r.length<r6-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Ii(r)}return n.set(t,e),this.size=n.size,this}function Yo(t){var e=this.__data__=new Or(t);this.size=e.size}Yo.prototype.clear=w3;Yo.prototype.delete=x3;Yo.prototype.get=E3;Yo.prototype.has=S3;Yo.prototype.set=i6;function s6(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var ww=function(){try{var t=Ss(Object,"defineProperty");return t({},"",{}),t}catch{}}();function GT(t,e,n){e=="__proto__"&&ww?ww(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var o6=Object.prototype,a6=o6.hasOwnProperty;function KT(t,e,n){var r=t[e];(!(a6.call(t,e)&&VT(r,n))||n===void 0&&!(e in t))&&GT(t,e,n)}function tf(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?GT(n,a,l):KT(n,a,l)}return n}function l6(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var u6="[object Arguments]";function xw(t){return xs(t)&&ws(t)==u6}var YT=Object.prototype,c6=YT.hasOwnProperty,d6=YT.propertyIsEnumerable,f6=xw(function(){return arguments}())?xw:function(t){return xs(t)&&c6.call(t,"callee")&&!d6.call(t,"callee")},Yl=Array.isArray;function h6(){return!1}var qT=typeof ln=="object"&&ln&&!ln.nodeType&&ln,Ew=qT&&typeof un=="object"&&un&&!un.nodeType&&un,p6=Ew&&Ew.exports===qT,Sw=p6?sr.Buffer:void 0,m6=Sw?Sw.isBuffer:void 0,QT=m6||h6,g6=9007199254740991,y6=/^(?:0|[1-9]\d*)$/;function v6(t,e){var n=typeof t;return e=e??g6,!!e&&(n=="number"||n!="symbol"&&y6.test(t))&&t>-1&&t%1==0&&t<e}var _6=9007199254740991;function XT(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=_6}var w6="[object Arguments]",x6="[object Array]",E6="[object Boolean]",S6="[object Date]",C6="[object Error]",T6="[object Function]",b6="[object Map]",I6="[object Number]",k6="[object Object]",R6="[object RegExp]",P6="[object Set]",O6="[object String]",A6="[object WeakMap]",N6="[object ArrayBuffer]",D6="[object DataView]",M6="[object Float32Array]",L6="[object Float64Array]",j6="[object Int8Array]",F6="[object Int16Array]",$6="[object Int32Array]",U6="[object Uint8Array]",z6="[object Uint8ClampedArray]",B6="[object Uint16Array]",W6="[object Uint32Array]",Ge={};Ge[M6]=Ge[L6]=Ge[j6]=Ge[F6]=Ge[$6]=Ge[U6]=Ge[z6]=Ge[B6]=Ge[W6]=!0;Ge[w6]=Ge[x6]=Ge[N6]=Ge[E6]=Ge[D6]=Ge[S6]=Ge[C6]=Ge[T6]=Ge[b6]=Ge[I6]=Ge[k6]=Ge[R6]=Ge[P6]=Ge[O6]=Ge[A6]=!1;function V6(t){return xs(t)&&XT(t.length)&&!!Ge[ws(t)]}function $y(t){return function(e){return t(e)}}var JT=typeof ln=="object"&&ln&&!ln.nodeType&&ln,Ua=JT&&typeof un=="object"&&un&&!un.nodeType&&un,H6=Ua&&Ua.exports===JT,xh=H6&&UT.process,Do=function(){try{var t=Ua&&Ua.require&&Ua.require("util").types;return t||xh&&xh.binding&&xh.binding("util")}catch{}}(),Cw=Do&&Do.isTypedArray,G6=Cw?$y(Cw):V6,K6=Object.prototype,Y6=K6.hasOwnProperty;function ZT(t,e){var n=Yl(t),r=!n&&f6(t),i=!n&&!r&&QT(t),s=!n&&!r&&!i&&G6(t),o=n||r||i||s,a=o?l6(t.length,String):[],l=a.length;for(var u in t)(e||Y6.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||v6(u,l)))&&a.push(u);return a}var q6=Object.prototype;function Uy(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||q6;return t===n}var Q6=BT(Object.keys,Object),X6=Object.prototype,J6=X6.hasOwnProperty;function Z6(t){if(!Uy(t))return Q6(t);var e=[];for(var n in Object(t))J6.call(t,n)&&n!="constructor"&&e.push(n);return e}function eb(t){return t!=null&&XT(t.length)&&!HT(t)}function zy(t){return eb(t)?ZT(t):Z6(t)}function e$(t,e){return t&&tf(e,zy(e),t)}function t$(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var n$=Object.prototype,r$=n$.hasOwnProperty;function i$(t){if(!Kl(t))return t$(t);var e=Uy(t),n=[];for(var r in t)r=="constructor"&&(e||!r$.call(t,r))||n.push(r);return n}function By(t){return eb(t)?ZT(t,!0):i$(t)}function s$(t,e){return t&&tf(e,By(e),t)}var tb=typeof ln=="object"&&ln&&!ln.nodeType&&ln,Tw=tb&&typeof un=="object"&&un&&!un.nodeType&&un,o$=Tw&&Tw.exports===tb,bw=o$?sr.Buffer:void 0,Iw=bw?bw.allocUnsafe:void 0;function a$(t,e){if(e)return t.slice();var n=t.length,r=Iw?Iw(n):new t.constructor(n);return t.copy(r),r}function nb(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function l$(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function rb(){return[]}var u$=Object.prototype,c$=u$.propertyIsEnumerable,kw=Object.getOwnPropertySymbols,Wy=kw?function(t){return t==null?[]:(t=Object(t),l$(kw(t),function(e){return c$.call(t,e)}))}:rb;function d$(t,e){return tf(t,Wy(t),e)}function ib(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var f$=Object.getOwnPropertySymbols,sb=f$?function(t){for(var e=[];t;)ib(e,Wy(t)),t=Fy(t);return e}:rb;function h$(t,e){return tf(t,sb(t),e)}function ob(t,e,n){var r=e(t);return Yl(t)?r:ib(r,n(t))}function p$(t){return ob(t,zy,Wy)}function m$(t){return ob(t,By,sb)}var _m=Ss(sr,"DataView"),wm=Ss(sr,"Promise"),xm=Ss(sr,"Set"),Em=Ss(sr,"WeakMap"),Rw="[object Map]",g$="[object Object]",Pw="[object Promise]",Ow="[object Set]",Aw="[object WeakMap]",Nw="[object DataView]",y$=Es(_m),v$=Es(bl),_$=Es(wm),w$=Es(xm),x$=Es(Em),Li=ws;(_m&&Li(new _m(new ArrayBuffer(1)))!=Nw||bl&&Li(new bl)!=Rw||wm&&Li(wm.resolve())!=Pw||xm&&Li(new xm)!=Ow||Em&&Li(new Em)!=Aw)&&(Li=function(t){var e=ws(t),n=e==g$?t.constructor:void 0,r=n?Es(n):"";if(r)switch(r){case y$:return Nw;case v$:return Rw;case _$:return Pw;case w$:return Ow;case x$:return Aw}return e});const Vy=Li;var E$=Object.prototype,S$=E$.hasOwnProperty;function C$(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&S$.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Dw=sr.Uint8Array;function Hy(t){var e=new t.constructor(t.byteLength);return new Dw(e).set(new Dw(t)),e}function T$(t,e){var n=e?Hy(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var b$=/\w*$/;function I$(t){var e=new t.constructor(t.source,b$.exec(t));return e.lastIndex=t.lastIndex,e}var Mw=_i?_i.prototype:void 0,Lw=Mw?Mw.valueOf:void 0;function k$(t){return Lw?Object(Lw.call(t)):{}}function R$(t,e){var n=e?Hy(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var P$="[object Boolean]",O$="[object Date]",A$="[object Map]",N$="[object Number]",D$="[object RegExp]",M$="[object Set]",L$="[object String]",j$="[object Symbol]",F$="[object ArrayBuffer]",$$="[object DataView]",U$="[object Float32Array]",z$="[object Float64Array]",B$="[object Int8Array]",W$="[object Int16Array]",V$="[object Int32Array]",H$="[object Uint8Array]",G$="[object Uint8ClampedArray]",K$="[object Uint16Array]",Y$="[object Uint32Array]";function q$(t,e,n){var r=t.constructor;switch(e){case F$:return Hy(t);case P$:case O$:return new r(+t);case $$:return T$(t,n);case U$:case z$:case B$:case W$:case V$:case H$:case G$:case K$:case Y$:return R$(t,n);case A$:return new r;case N$:case L$:return new r(t);case D$:return I$(t);case M$:return new r;case j$:return k$(t)}}var jw=Object.create,Q$=function(){function t(){}return function(e){if(!Kl(e))return{};if(jw)return jw(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function X$(t){return typeof t.constructor=="function"&&!Uy(t)?Q$(Fy(t)):{}}var J$="[object Map]";function Z$(t){return xs(t)&&Vy(t)==J$}var Fw=Do&&Do.isMap,e5=Fw?$y(Fw):Z$,t5="[object Set]";function n5(t){return xs(t)&&Vy(t)==t5}var $w=Do&&Do.isSet,r5=$w?$y($w):n5,i5=1,s5=2,o5=4,ab="[object Arguments]",a5="[object Array]",l5="[object Boolean]",u5="[object Date]",c5="[object Error]",lb="[object Function]",d5="[object GeneratorFunction]",f5="[object Map]",h5="[object Number]",ub="[object Object]",p5="[object RegExp]",m5="[object Set]",g5="[object String]",y5="[object Symbol]",v5="[object WeakMap]",_5="[object ArrayBuffer]",w5="[object DataView]",x5="[object Float32Array]",E5="[object Float64Array]",S5="[object Int8Array]",C5="[object Int16Array]",T5="[object Int32Array]",b5="[object Uint8Array]",I5="[object Uint8ClampedArray]",k5="[object Uint16Array]",R5="[object Uint32Array]",ze={};ze[ab]=ze[a5]=ze[_5]=ze[w5]=ze[l5]=ze[u5]=ze[x5]=ze[E5]=ze[S5]=ze[C5]=ze[T5]=ze[f5]=ze[h5]=ze[ub]=ze[p5]=ze[m5]=ze[g5]=ze[y5]=ze[b5]=ze[I5]=ze[k5]=ze[R5]=!0;ze[c5]=ze[lb]=ze[v5]=!1;function Gu(t,e,n,r,i,s){var o,a=e&i5,l=e&s5,u=e&o5;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!Kl(t))return t;var c=Yl(t);if(c){if(o=C$(t),!a)return nb(t,o)}else{var d=Vy(t),f=d==lb||d==d5;if(QT(t))return a$(t,a);if(d==ub||d==ab||f&&!i){if(o=l||f?{}:X$(t),!a)return l?h$(t,s$(o,t)):d$(t,e$(o,t))}else{if(!ze[d])return i?t:{};o=q$(t,d,a)}}s||(s=new Yo);var p=s.get(t);if(p)return p;s.set(t,o),r5(t)?t.forEach(function(w){o.add(Gu(w,e,n,w,t,s))}):e5(t)&&t.forEach(function(w,m){o.set(m,Gu(w,e,n,m,t,s))});var g=u?l?m$:p$:l?By:zy,v=c?void 0:g(t);return s6(v||t,function(w,m){v&&(m=w,w=t[m]),KT(o,m,Gu(w,e,n,m,t,s))}),o}var P5=4;function Uw(t){return Gu(t,P5)}function cb(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var O5="[object Symbol]";function Gy(t){return typeof t=="symbol"||xs(t)&&ws(t)==O5}var A5="Expected a function";function Ky(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(A5);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Ky.Cache||Ii),n}Ky.Cache=Ii;var N5=500;function D5(t){var e=Ky(t,function(r){return n.size===N5&&n.clear(),r}),n=e.cache;return e}var M5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,L5=/\\(\\)?/g,j5=D5(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(M5,function(n,r,i,s){e.push(i?s.replace(L5,"$1"):r||n)}),e});const F5=j5;var $5=1/0;function U5(t){if(typeof t=="string"||Gy(t))return t;var e=t+"";return e=="0"&&1/t==-$5?"-0":e}var z5=1/0,zw=_i?_i.prototype:void 0,Bw=zw?zw.toString:void 0;function db(t){if(typeof t=="string")return t;if(Yl(t))return cb(t,db)+"";if(Gy(t))return Bw?Bw.call(t):"";var e=t+"";return e=="0"&&1/t==-z5?"-0":e}function B5(t){return t==null?"":db(t)}function fb(t){return Yl(t)?cb(t,U5):Gy(t)?[t]:nb(F5(B5(t)))}var hb={exports:{}},De={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bt=typeof Symbol=="function"&&Symbol.for,Yy=bt?Symbol.for("react.element"):60103,qy=bt?Symbol.for("react.portal"):60106,nf=bt?Symbol.for("react.fragment"):60107,rf=bt?Symbol.for("react.strict_mode"):60108,sf=bt?Symbol.for("react.profiler"):60114,of=bt?Symbol.for("react.provider"):60109,af=bt?Symbol.for("react.context"):60110,Qy=bt?Symbol.for("react.async_mode"):60111,lf=bt?Symbol.for("react.concurrent_mode"):60111,uf=bt?Symbol.for("react.forward_ref"):60112,cf=bt?Symbol.for("react.suspense"):60113,W5=bt?Symbol.for("react.suspense_list"):60120,df=bt?Symbol.for("react.memo"):60115,ff=bt?Symbol.for("react.lazy"):60116,V5=bt?Symbol.for("react.block"):60121,H5=bt?Symbol.for("react.fundamental"):60117,G5=bt?Symbol.for("react.responder"):60118,K5=bt?Symbol.for("react.scope"):60119;function gn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Yy:switch(t=t.type,t){case Qy:case lf:case nf:case sf:case rf:case cf:return t;default:switch(t=t&&t.$$typeof,t){case af:case uf:case ff:case df:case of:return t;default:return e}}case qy:return e}}}function pb(t){return gn(t)===lf}De.AsyncMode=Qy;De.ConcurrentMode=lf;De.ContextConsumer=af;De.ContextProvider=of;De.Element=Yy;De.ForwardRef=uf;De.Fragment=nf;De.Lazy=ff;De.Memo=df;De.Portal=qy;De.Profiler=sf;De.StrictMode=rf;De.Suspense=cf;De.isAsyncMode=function(t){return pb(t)||gn(t)===Qy};De.isConcurrentMode=pb;De.isContextConsumer=function(t){return gn(t)===af};De.isContextProvider=function(t){return gn(t)===of};De.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yy};De.isForwardRef=function(t){return gn(t)===uf};De.isFragment=function(t){return gn(t)===nf};De.isLazy=function(t){return gn(t)===ff};De.isMemo=function(t){return gn(t)===df};De.isPortal=function(t){return gn(t)===qy};De.isProfiler=function(t){return gn(t)===sf};De.isStrictMode=function(t){return gn(t)===rf};De.isSuspense=function(t){return gn(t)===cf};De.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===nf||t===lf||t===sf||t===rf||t===cf||t===W5||typeof t=="object"&&t!==null&&(t.$$typeof===ff||t.$$typeof===df||t.$$typeof===of||t.$$typeof===af||t.$$typeof===uf||t.$$typeof===H5||t.$$typeof===G5||t.$$typeof===K5||t.$$typeof===V5)};De.typeOf=gn;hb.exports=De;var Y5=hb.exports,mb=Y5,q5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Q5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gb={};gb[mb.ForwardRef]=q5;gb[mb.Memo]=Q5;function vt(){return vt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vt.apply(this,arguments)}function yb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var hf=C.createContext(void 0);hf.displayName="FormikContext";hf.Provider;hf.Consumer;function X5(){var t=C.useContext(hf);return t}var Rn=function(e){return typeof e=="function"},pf=function(e){return e!==null&&typeof e=="object"},J5=function(e){return String(Math.floor(Number(e)))===e},Eh=function(e){return Object.prototype.toString.call(e)==="[object String]"},Sh=function(e){return pf(e)&&Rn(e.then)};function nn(t,e,n,r){r===void 0&&(r=0);for(var i=fb(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function Qi(t,e,n){for(var r=Uw(t),i=r,s=0,o=fb(e);s<o.length-1;s++){var a=o[s],l=nn(t,o.slice(0,s+1));if(l&&(pf(l)||Array.isArray(l)))i=i[a]=Uw(l);else{var u=o[s+1];i=i[a]=J5(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function vb(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];pf(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},vb(a,e,n,r[o])):r[o]=e}return r}function Z5(t,e){switch(e.type){case"SET_VALUES":return vt({},t,{values:e.payload});case"SET_TOUCHED":return vt({},t,{touched:e.payload});case"SET_ERRORS":return Mi(t.errors,e.payload)?t:vt({},t,{errors:e.payload});case"SET_STATUS":return vt({},t,{status:e.payload});case"SET_ISSUBMITTING":return vt({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return vt({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return vt({},t,{values:Qi(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return vt({},t,{touched:Qi(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return vt({},t,{errors:Qi(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return vt({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return vt({},t,{touched:vb(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return vt({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return vt({},t,{isSubmitting:!1});default:return t}}var Ri={},Eu={};function _b(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,c=t.onSubmit,d=yb(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=vt({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},d),p=C.useRef(f.initialValues),g=C.useRef(f.initialErrors||Ri),v=C.useRef(f.initialTouched||Eu),w=C.useRef(f.initialStatus),m=C.useRef(!1),h=C.useRef({});C.useEffect(function(){return m.current=!0,function(){m.current=!1}},[]);var y=C.useState(0),E=y[1],T=C.useRef({values:f.initialValues,errors:f.initialErrors||Ri,touched:f.initialTouched||Eu,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),_=T.current,S=C.useCallback(function(I){var U=T.current;T.current=Z5(U,I),U!==T.current&&E(function(V){return V+1})},[]),P=C.useCallback(function(I,U){return new Promise(function(V,Q){var ce=f.validate(I,U);ce==null?V(Ri):Sh(ce)?ce.then(function(be){V(be||Ri)},function(be){Q(be)}):V(ce)})},[f.validate]),k=C.useCallback(function(I,U){var V=f.validationSchema,Q=Rn(V)?V(U):V,ce=U&&Q.validateAt?Q.validateAt(U,I):tU(I,Q);return new Promise(function(be,lt){ce.then(function(){be(Ri)},function(mt){mt.name==="ValidationError"?be(eU(mt)):lt(mt)})})},[f.validationSchema]),A=C.useCallback(function(I,U){return new Promise(function(V){return V(h.current[I].validate(U))})},[]),N=C.useCallback(function(I){var U=Object.keys(h.current).filter(function(Q){return Rn(h.current[Q].validate)}),V=U.length>0?U.map(function(Q){return A(Q,nn(I,Q))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(V).then(function(Q){return Q.reduce(function(ce,be,lt){return be==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||be&&(ce=Qi(ce,U[lt],be)),ce},{})})},[A]),G=C.useCallback(function(I){return Promise.all([N(I),f.validationSchema?k(I):{},f.validate?P(I):{}]).then(function(U){var V=U[0],Q=U[1],ce=U[2],be=ym.all([V,Q,ce],{arrayMerge:nU});return be})},[f.validate,f.validationSchema,N,P,k]),j=vn(function(I){return I===void 0&&(I=_.values),S({type:"SET_ISVALIDATING",payload:!0}),G(I).then(function(U){return m.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:U})),U})});C.useEffect(function(){o&&m.current===!0&&Mi(p.current,f.initialValues)&&j(p.current)},[o,j]);var Z=C.useCallback(function(I){var U=I&&I.values?I.values:p.current,V=I&&I.errors?I.errors:g.current?g.current:f.initialErrors||{},Q=I&&I.touched?I.touched:v.current?v.current:f.initialTouched||{},ce=I&&I.status?I.status:w.current?w.current:f.initialStatus;p.current=U,g.current=V,v.current=Q,w.current=ce;var be=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!I&&!!I.isSubmitting,errors:V,touched:Q,status:ce,values:U,isValidating:!!I&&!!I.isValidating,submitCount:I&&I.submitCount&&typeof I.submitCount=="number"?I.submitCount:0}})};if(f.onReset){var lt=f.onReset(_.values,ae);Sh(lt)?lt.then(be):be()}else be()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);C.useEffect(function(){m.current===!0&&!Mi(p.current,f.initialValues)&&u&&(p.current=f.initialValues,Z(),o&&j(p.current))},[u,f.initialValues,Z,o,j]),C.useEffect(function(){u&&m.current===!0&&!Mi(g.current,f.initialErrors)&&(g.current=f.initialErrors||Ri,S({type:"SET_ERRORS",payload:f.initialErrors||Ri}))},[u,f.initialErrors]),C.useEffect(function(){u&&m.current===!0&&!Mi(v.current,f.initialTouched)&&(v.current=f.initialTouched||Eu,S({type:"SET_TOUCHED",payload:f.initialTouched||Eu}))},[u,f.initialTouched]),C.useEffect(function(){u&&m.current===!0&&!Mi(w.current,f.initialStatus)&&(w.current=f.initialStatus,S({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var Ie=vn(function(I){if(h.current[I]&&Rn(h.current[I].validate)){var U=nn(_.values,I),V=h.current[I].validate(U);return Sh(V)?(S({type:"SET_ISVALIDATING",payload:!0}),V.then(function(Q){return Q}).then(function(Q){S({type:"SET_FIELD_ERROR",payload:{field:I,value:Q}}),S({type:"SET_ISVALIDATING",payload:!1})})):(S({type:"SET_FIELD_ERROR",payload:{field:I,value:V}}),Promise.resolve(V))}else if(f.validationSchema)return S({type:"SET_ISVALIDATING",payload:!0}),k(_.values,I).then(function(Q){return Q}).then(function(Q){S({type:"SET_FIELD_ERROR",payload:{field:I,value:nn(Q,I)}}),S({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Oe=C.useCallback(function(I,U){var V=U.validate;h.current[I]={validate:V}},[]),de=C.useCallback(function(I){delete h.current[I]},[]),z=vn(function(I,U){S({type:"SET_TOUCHED",payload:I});var V=U===void 0?i:U;return V?j(_.values):Promise.resolve()}),K=C.useCallback(function(I){S({type:"SET_ERRORS",payload:I})},[]),q=vn(function(I,U){var V=Rn(I)?I(_.values):I;S({type:"SET_VALUES",payload:V});var Q=U===void 0?n:U;return Q?j(V):Promise.resolve()}),ne=C.useCallback(function(I,U){S({type:"SET_FIELD_ERROR",payload:{field:I,value:U}})},[]),se=vn(function(I,U,V){S({type:"SET_FIELD_VALUE",payload:{field:I,value:U}});var Q=V===void 0?n:V;return Q?j(Qi(_.values,I,U)):Promise.resolve()}),at=C.useCallback(function(I,U){var V=U,Q=I,ce;if(!Eh(I)){I.persist&&I.persist();var be=I.target?I.target:I.currentTarget,lt=be.type,mt=be.name,bs=be.id,Is=be.value,ql=be.checked,iv=be.outerHTML,qo=be.options,ks=be.multiple;V=U||mt||bs,Q=/number|range/.test(lt)?(ce=parseFloat(Is),isNaN(ce)?"":ce):/checkbox/.test(lt)?iU(nn(_.values,V),ql,Is):qo&&ks?rU(qo):Is}V&&se(V,Q)},[se,_.values]),Re=vn(function(I){if(Eh(I))return function(U){return at(U,I)};at(I)}),Le=vn(function(I,U,V){U===void 0&&(U=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:I,value:U}});var Q=V===void 0?i:V;return Q?j(_.values):Promise.resolve()}),Se=C.useCallback(function(I,U){I.persist&&I.persist();var V=I.target,Q=V.name,ce=V.id,be=V.outerHTML,lt=U||Q||ce;Le(lt,!0)},[Le]),$e=vn(function(I){if(Eh(I))return function(U){return Se(U,I)};Se(I)}),Ht=C.useCallback(function(I){Rn(I)?S({type:"SET_FORMIK_STATE",payload:I}):S({type:"SET_FORMIK_STATE",payload:function(){return I}})},[]),It=C.useCallback(function(I){S({type:"SET_STATUS",payload:I})},[]),M=C.useCallback(function(I){S({type:"SET_ISSUBMITTING",payload:I})},[]),$=vn(function(){return S({type:"SUBMIT_ATTEMPT"}),j().then(function(I){var U=I instanceof Error,V=!U&&Object.keys(I).length===0;if(V){var Q;try{if(Q=oe(),Q===void 0)return}catch(ce){throw ce}return Promise.resolve(Q).then(function(ce){return m.current&&S({type:"SUBMIT_SUCCESS"}),ce}).catch(function(ce){if(m.current)throw S({type:"SUBMIT_FAILURE"}),ce})}else if(m.current&&(S({type:"SUBMIT_FAILURE"}),U))throw I})}),J=vn(function(I){I&&I.preventDefault&&Rn(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&Rn(I.stopPropagation)&&I.stopPropagation(),$().catch(function(U){console.warn("Warning: An unhandled error was caught from submitForm()",U)})}),ae={resetForm:Z,validateForm:j,validateField:Ie,setErrors:K,setFieldError:ne,setFieldTouched:Le,setFieldValue:se,setStatus:It,setSubmitting:M,setTouched:z,setValues:q,setFormikState:Ht,submitForm:$},oe=vn(function(){return c(_.values,ae)}),le=vn(function(I){I&&I.preventDefault&&Rn(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&Rn(I.stopPropagation)&&I.stopPropagation(),Z()}),ue=C.useCallback(function(I){return{value:nn(_.values,I),error:nn(_.errors,I),touched:!!nn(_.touched,I),initialValue:nn(p.current,I),initialTouched:!!nn(v.current,I),initialError:nn(g.current,I)}},[_.errors,_.touched,_.values]),fe=C.useCallback(function(I){return{setValue:function(V,Q){return se(I,V,Q)},setTouched:function(V,Q){return Le(I,V,Q)},setError:function(V){return ne(I,V)}}},[se,Le,ne]),we=C.useCallback(function(I){var U=pf(I),V=U?I.name:I,Q=nn(_.values,V),ce={name:V,value:Q,onChange:Re,onBlur:$e};if(U){var be=I.type,lt=I.value,mt=I.as,bs=I.multiple;be==="checkbox"?lt===void 0?ce.checked=!!Q:(ce.checked=!!(Array.isArray(Q)&&~Q.indexOf(lt)),ce.value=lt):be==="radio"?(ce.checked=Q===lt,ce.value=lt):mt==="select"&&bs&&(ce.value=ce.value||[],ce.multiple=!0)}return ce},[$e,Re,_.values]),Ce=C.useMemo(function(){return!Mi(p.current,_.values)},[p.current,_.values]),xe=C.useMemo(function(){return typeof a<"u"?Ce?_.errors&&Object.keys(_.errors).length===0:a!==!1&&Rn(a)?a(f):a:_.errors&&Object.keys(_.errors).length===0},[a,Ce,_.errors,f]),W=vt({},_,{initialValues:p.current,initialErrors:g.current,initialTouched:v.current,initialStatus:w.current,handleBlur:$e,handleChange:Re,handleReset:le,handleSubmit:J,resetForm:Z,setErrors:K,setFormikState:Ht,setFieldTouched:Le,setFieldValue:se,setFieldError:ne,setStatus:It,setSubmitting:M,setTouched:z,setValues:q,submitForm:$,validateForm:j,validateField:Ie,isValid:xe,dirty:Ce,unregisterField:de,registerField:Oe,getFieldProps:we,getFieldMeta:ue,getFieldHelpers:fe,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return W}function eU(t){var e={};if(t.inner){if(t.inner.length===0)return Qi(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;nn(e,o.path)||(e=Qi(e,o.path,o.message))}}return e}function tU(t,e,n,r){n===void 0&&(n=!1);var i=Sm(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Sm(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||gw(i)?Sm(i):i!==""?i:void 0}):gw(t[r])?e[r]=Sm(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function nU(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?ym(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=ym(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function rU(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function iU(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var sU=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?C.useLayoutEffect:C.useEffect;function vn(t){var e=C.useRef(t);return sU(function(){e.current=t}),C.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}var oU=C.forwardRef(function(t,e){var n=t.action,r=yb(t,["action"]),i=n??"#",s=X5(),o=s.handleReset,a=s.handleSubmit;return C.createElement("form",vt({onSubmit:a,ref:e,onReset:o,action:i},r))});oU.displayName="Form";function Cs(t){this._maxSize=t,this.clear()}Cs.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Cs.prototype.get=function(t){return this._values[t]};Cs.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var aU=/[^.^\]^[]+|(?=\[\]|\.\.)/g,wb=/^\d+$/,lU=/^\d/,uU=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,cU=/^\s*(['"]?)(.*?)(\1)\s*$/,Xy=512,Ww=new Cs(Xy),Vw=new Cs(Xy),Hw=new Cs(Xy),Xi={Cache:Cs,split:Cm,normalizePath:Ch,setter:function(t){var e=Ch(t);return Vw.get(t)||Vw.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=Ch(t);return Hw.get(t)||Hw.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(Jy(n)||wb.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){dU(Array.isArray(t)?t:Cm(t),e,n)}};function Ch(t){return Ww.get(t)||Ww.set(t,Cm(t).map(function(e){return e.replace(cU,"$2")}))}function Cm(t){return t.match(aU)||[""]}function dU(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(pU(i)&&(i='"'+i+'"'),a=Jy(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function Jy(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function fU(t){return t.match(lU)&&!t.match(wb)}function hU(t){return uU.test(t)}function pU(t){return!Jy(t)&&(fU(t)||hU(t))}const mU=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,mf=t=>t.match(mU)||[],gf=t=>t[0].toUpperCase()+t.slice(1),Zy=(t,e)=>mf(t).join(e).toLowerCase(),xb=t=>mf(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),gU=t=>gf(xb(t)),yU=t=>Zy(t,"_"),vU=t=>Zy(t,"-"),_U=t=>gf(Zy(t," ")),wU=t=>mf(t).map(gf).join(" ");var Th={words:mf,upperFirst:gf,camelCase:xb,pascalCase:gU,snakeCase:yU,kebabCase:vU,sentenceCase:_U,titleCase:wU},ev={exports:{}};ev.exports=function(t){return Eb(xU(t),t)};ev.exports.array=Eb;function Eb(t,e){var n=t.length,r=new Array(n),i={},s=n,o=EU(e),a=SU(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var p=o.get(u)||new Set;if(p=Array.from(p),c=p.length){d.add(u);do{var g=p[--c];l(g,a.get(g),d)}while(c);d.delete(u)}r[--n]=u}}}function xU(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function EU(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function SU(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var CU=ev.exports;const TU=sd(CU),bU=Object.prototype.toString,IU=Error.prototype.toString,kU=RegExp.prototype.toString,RU=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",PU=/^Symbol\((.*)\)(.*)$/;function OU(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function Gw(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return OU(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return RU.call(t).replace(PU,"Symbol($1)");const r=bU.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+IU.call(t)+"]":r==="RegExp"?kU.call(t):null}function ui(t,e){let n=Gw(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=Gw(this[r],e);return s!==null?s:i},2)}function Sb(t){return t==null?[]:[].concat(t)}let Cb,AU=/\$\{\s*(\w+)\s*\}/g;Cb=Symbol.toStringTag;class Kt extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(AU,(i,s)=>ui(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[Cb]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Sb(e).forEach(o=>{if(Kt.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,Kt)}}let qn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${ui(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${ui(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${ui(n,!0)}\``+i}},Pn={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},jr={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Tm={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},NU={isValue:"${path} field must be ${value}"},bm={noUnknown:"${path} field has unspecified keys: ${unknown}"},DU={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},MU={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${ui(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${ui(n,!0)}\``}return Kt.formatError(qn.notType,t)}};Object.assign(Object.create(null),{mixed:qn,string:Pn,number:jr,date:Tm,object:bm,array:DU,boolean:NU,tuple:MU});const tv=t=>t&&t.__isYupSchema__;class Zc{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new Zc(e,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!tv(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Su={context:"$",value:"."};class Ts{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Su.context,this.isValue=this.key[0]===Su.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Su.context:this.isValue?Su.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Xi.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Ts.prototype.__isYupRef=!0;const gr=t=>t==null;function Ms(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:d,message:f,skipAbsent:p}=t;let{parent:g,context:v,abortEarly:w=o.spec.abortEarly,disableStackTrace:m=o.spec.disableStackTrace}=i;function h(N){return Ts.isRef(N)?N.getValue(n,g,v):N}function y(N={}){var G;const j=Object.assign({value:n,originalValue:s,label:o.spec.label,path:N.path||r,spec:o.spec},d,N.params);for(const Ie of Object.keys(j))j[Ie]=h(j[Ie]);const Z=new Kt(Kt.formatError(N.message||f,j),n,j.path,N.type||u,(G=N.disableStackTrace)!=null?G:m);return Z.params=j,Z}const E=w?a:l;let T={path:r,parent:g,type:u,from:i.from,createError:y,resolve:h,options:i,originalValue:s,schema:o};const _=N=>{Kt.isError(N)?E(N):N?l(null):E(y())},S=N=>{Kt.isError(N)?E(N):a(N)};if(p&&gr(n))return _(!0);let k;try{var A;if(k=c.call(T,n,T),typeof((A=k)==null?void 0:A.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${T.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(k).then(_,S)}}catch(N){S(N);return}_(k)}return e.OPTIONS=t,e}function LU(t,e,n,r=n){let i,s,o;return e?(Xi.forEach(e,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let d=t.type==="tuple",f=u?parseInt(c,10):0;if(t.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=d?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[c])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[c],t=t.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class ed extends Set{describe(){const e=[];for(const n of this.values())e.push(Ts.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new ed(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function eo(t,e=new Map){if(tv(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=eo(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,eo(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(eo(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=eo(i,e)}else throw Error(`Unable to clone ${t}`);return n}class Hn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new ed,this._blacklist=new ed,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(qn.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=eo(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&gr(s))return s;let o=ui(e),a=ui(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,c=v=>{i||(i=!0,n(v,o))},d=v=>{i||(i=!0,r(v,o))},f=s.length,p=[];if(!f)return d([]);let g={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const w=s[v];w(g,c,function(h){h&&(Array.isArray(h)?p.push(...h):p.push(h)),--f<=0&&d(p)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(d,f,p)=>this.resolve(c)._validate(u,c,f,p)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{Kt.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new Kt(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw Kt.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new Kt(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(Kt.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(Kt.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):eo(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=Ms({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=Ms({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=qn.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=qn.notNull){return this.nullability(!1,e)}required(e=qn.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=qn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Ms(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=Sb(e).map(s=>new Ts(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new Zc(i,n):Zc.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=Ms({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=qn.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Ms({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=qn.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Ms({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(d=>d.name===l.name)===u)}}}Hn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])Hn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=LU(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])Hn.prototype[t]=Hn.prototype.oneOf;for(const t of["not","nope"])Hn.prototype[t]=Hn.prototype.notOneOf;let jU=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,FU=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,$U=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,UU=t=>gr(t)||t===t.trim(),zU={}.toString();function cr(){return new Tb}class Tb extends Hn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===zU?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||qn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=Pn.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=Pn.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=Pn.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Pn.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=Pn.email){return this.matches(jU,{name:"email",message:e,excludeEmptyString:!0})}url(e=Pn.url){return this.matches(FU,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=Pn.uuid){return this.matches($U,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=Pn.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:UU})}lowercase(e=Pn.lowercase){return this.transform(n=>gr(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>gr(n)||n===n.toLowerCase()})}uppercase(e=Pn.uppercase){return this.transform(n=>gr(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>gr(n)||n===n.toUpperCase()})}}cr.prototype=Tb.prototype;let BU=t=>t!=+t;function bb(){return new Ib}class Ib extends Hn{constructor(){super({type:"number",check(e){return e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&!BU(e)}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce)return e;let i=e;if(typeof i=="string"){if(i=i.replace(/\s/g,""),i==="")return NaN;i=+i}return r.isType(i)||i===null?i:parseFloat(i)})})}min(e,n=jr.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r>=this.resolve(e)}})}max(e,n=jr.max){return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(r){return r<=this.resolve(e)}})}lessThan(e,n=jr.lessThan){return this.test({message:n,name:"max",exclusive:!0,params:{less:e},skipAbsent:!0,test(r){return r<this.resolve(e)}})}moreThan(e,n=jr.moreThan){return this.test({message:n,name:"min",exclusive:!0,params:{more:e},skipAbsent:!0,test(r){return r>this.resolve(e)}})}positive(e=jr.positive){return this.moreThan(0,e)}negative(e=jr.negative){return this.lessThan(0,e)}integer(e=jr.integer){return this.test({name:"integer",message:e,skipAbsent:!0,test:n=>Number.isInteger(n)})}truncate(){return this.transform(e=>gr(e)?e:e|0)}round(e){var n;let r=["ceil","floor","round","trunc"];if(e=((n=e)==null?void 0:n.toLowerCase())||"round",e==="trunc")return this.truncate();if(r.indexOf(e.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(i=>gr(i)?i:Math[e](i))}}bb.prototype=Ib.prototype;const WU=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function or(t,e=0){return Number(t)||e}function VU(t){const e=WU.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:or(e[1]),month:or(e[2],1)-1,day:or(e[3],1),hour:or(e[4]),minute:or(e[5]),second:or(e[6]),millisecond:e[7]?or(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:or(e[10]),minuteOffset:or(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let HU=new Date(""),GU=t=>Object.prototype.toString.call(t)==="[object Date]";class yf extends Hn{constructor(){super({type:"date",check(e){return GU(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=VU(e),isNaN(e)?yf.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(Ts.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=Tm.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=Tm.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}yf.INVALID_DATE=HU;yf.prototype;function KU(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=Xi.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),Ts.isRef(a)&&a.isSibling?s(a.path,o):tv(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return TU.array(Array.from(r),n).reverse()}function Kw(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function kb(t){return(e,n)=>Kw(t,e)-Kw(t,n)}const YU=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function Ku(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=Ku(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Ku(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Ku)}):"optional"in t?t.optional():t}const qU=(t,e)=>{const n=[...Xi.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=Xi.getter(Xi.join(n),!0)(t);return!!(i&&r in i)};let Yw=t=>Object.prototype.toString.call(t)==="[object Object]";function QU(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const XU=kb([]);function nv(t){return new Rb(t)}class Rb extends Hn{constructor(e){super({type:"object",check(n){return Yw(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=XU,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let f=s[d],p=d in i;if(f){let g,v=i[d];u.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:v,context:n.context,parent:l});let w=f instanceof Hn?f.spec:void 0,m=w==null?void 0:w.strict;if(w!=null&&w.strip){c=c||d in i;continue}g=!n.__validating||!m?f.cast(i[d],u):i[d],g!==void 0&&(l[d]=g)}else p&&!o&&(l[d]=i[d]);(p!==d in l||l[d]!==i[d])&&(c=!0)}return c?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!Yw(u)){i(l,u);return}o=o||u;let c=[];for(let d of this._nodes){let f=this.fields[d];!f||Ts.isRef(f)||c.push(f.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=KU(e,n),r._sortErrors=kb(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return Ku(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=Xi.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return qU(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(YU)}noUnknown(e=!0,n=bm.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=QU(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=bm.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(Th.camelCase)}snakeCase(){return this.transformKeys(Th.snakeCase)}constantCase(){return this.transformKeys(e=>Th.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}nv.prototype=Rb.prototype;const JU=nv().shape({email:cr().email("Invalid email address").test("email-format","Email should contain '@' and a valid domain",t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)).required("Email is required"),password:cr().required("Password is required").min(6)}),ZU=D.div`
  position: relative;
`,Pb=D.input`
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
  grid-column: ${({$isGridStretchRow:t})=>t?"span 2":"span 1"};
  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 14px;
  }
`,e8=D.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 16px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,td=D.div`
  margin-top: 4px;
  color: red;
`,t8=t=>C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none",...t},C.createElement("path",{d:"M0.666504 7.99996C0.666504 7.99996 3.33317 2.66663 7.99984 2.66663C12.6665 2.66663 15.3332 7.99996 15.3332 7.99996C15.3332 7.99996 12.6665 13.3333 7.99984 13.3333C3.33317 13.3333 0.666504 7.99996 0.666504 7.99996Z",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),C.createElement("path",{d:"M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),n8=t=>C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none",...t},C.createElement("g",{clipPath:"url(#clip0_283_2250)"},C.createElement("path",{d:"M11.9601 11.96C10.8205 12.8286 9.43282 13.3099 8.00008 13.3333C3.33342 13.3333 0.666748 7.99998 0.666748 7.99998C1.49601 6.45457 2.64617 5.10438 4.04008 4.03998M6.60008 2.82664C7.05897 2.71923 7.52879 2.66554 8.00008 2.66664C12.6667 2.66664 15.3334 7.99998 15.3334 7.99998C14.9287 8.75705 14.4461 9.4698 13.8934 10.1266M9.41342 9.41331C9.23032 9.60981 9.00952 9.76741 8.76418 9.87672C8.51885 9.98604 8.25402 10.0448 7.98548 10.0496C7.71693 10.0543 7.45019 10.0049 7.20116 9.9043C6.95212 9.80371 6.7259 9.65399 6.53598 9.46408C6.34606 9.27416 6.19634 9.04794 6.09575 8.7989C5.99517 8.54987 5.94577 8.28312 5.9505 8.01458C5.95524 7.74604 6.01402 7.48121 6.12333 7.23587C6.23264 6.99054 6.39025 6.76974 6.58675 6.58664",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),C.createElement("path",{d:"M0.666748 0.666626L15.3334 15.3333",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),C.createElement("defs",null,C.createElement("clipPath",{id:"clip0_283_2250"},C.createElement("rect",{width:16,height:16,fill:"#11101c"})))),bh=({name:t,type:e,handleChange:n,value:r,formik:i})=>{const[s,o]=C.useState(!1),a=t.charAt(0).toUpperCase()+t.slice(1),l=u=>{u.preventDefault(),o(c=>!c)};return x.jsxs(ZU,{children:[x.jsx(Pb,{id:t,name:t,type:t==="password"?s?"text":"password":e,onChange:n,value:r,placeholder:a}),t==="password"&&x.jsx(e8,{onClick:l,children:s?x.jsx(t8,{}):x.jsx(n8,{})}),i.touched[t]&&i.errors[t]&&x.jsx(td,{children:i.errors[t]}),i.touched[t]&&t==="name"&&r.length<2&&x.jsx(td,{children:"Required and at least 2 symbols"})]})},r8=_A`
  to {
    transform: rotate(360deg);
  }
`,i8=D.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,s8=D.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${t=>t.theme.colors.primaryGreenColor};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${r8} 1s linear infinite;
`,vf=()=>x.jsx(i8,{children:x.jsx(s8,{})}),Ob=t=>C.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{d:"M24 8L8 24",stroke:"#11101C",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),C.createElement("path",{d:"M8 8L24 24",stroke:"#11101C",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"})),o8=D.form`
  position: relative;
  max-width: 566px;
  background: #fbfbfb;
  border-radius: 30px;
  padding: 64px;
  @media (max-width: 1024px) {
    padding: 40px;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
`,a8=D.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #11101c;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`,l8=D.p`
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
  margin-bottom: 40px;
`,u8=D.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
`,c8=D.button`
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
  margin-bottom: 20px;
  transition: ${t=>t.theme.transition.customTrans};
  &:hover {
    background-color: rgba(16, 57, 49, 0.2);
    color: black;
  }
`,Ab=D(Ob)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    box-shadow: inset 0 0 10px #103931, 0 0 0 1px #103931;
  }
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
  }
`,d8=D.p`
  font-size: 20px;
  margin-top: 10px;
  color: red;
  text-align: center;
`,rv=({title:t,handleClick:e,text:n,isRegistration:r,onClose:i,errorMessage:s,loading:o})=>{const a=_b({initialValues:{email:"",password:"",name:""},onSubmit:()=>e(a.values.email,a.values.password,a.values.name),validationSchema:JU});return o?x.jsx(vf,{}):x.jsxs(o8,{onSubmit:a.handleSubmit,children:[x.jsx(Ab,{onClick:i}),x.jsx(a8,{children:t}),x.jsx(l8,{children:n}),x.jsxs(u8,{children:[r&&x.jsx(bh,{name:"name",type:"text",handleChange:a.handleChange,value:a.values.name,formik:a}),x.jsx(bh,{name:"email",type:"email",handleChange:a.handleChange,value:a.values.email,formik:a}),x.jsx(bh,{name:"password",type:"password",handleChange:a.handleChange,value:a.values.password,formik:a})]}),x.jsx(c8,{type:"submit",children:r?"Sign Up":"Log In"}),s&&x.jsx(d8,{children:s})]})},Ih=({onClose:t})=>{const e=$o(),[n,r]=C.useState(null),[i,s]=C.useState(!1),o=(a,l)=>{s(!0),oC(No,a,l).then(({user:u})=>{const c=u.displayName||"";e(pi({name:c,email:u.email,id:u.uid,token:u.accessToken})),localStorage.setItem("userToken",u.accessToken),t()}).catch(u=>{console.error("Error:",u.code),u.code==="auth/user-not-found"||u.code==="auth/invalid-credential"?r("The email or password you entered is incorrect. Please check your credentials or sign up."):r(u.message)}).finally(()=>{s(!1)})};return x.jsx(x.Fragment,{children:x.jsx(rv,{onClose:t,title:"Log In",handleClick:o,text:"Welcome back! Please enter your credentials to access your account and continue your babysitter search.",errorMessage:n,loading:i})})},f8=D.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`,h8=D.div`
  background-color: #fff;
  border-radius: 10px;
  margin-inline: 20px;
`,za=({onClose:t,children:e})=>(C.useEffect(()=>{const n=r=>{r.key==="Escape"&&t()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[t]),x.jsx(f8,{onClick:t,children:x.jsx(h8,{onClick:n=>n.stopPropagation(),children:e})})),kh=({onClose:t})=>{const e=$o(),[n,r]=C.useState(null),[i,s]=C.useState(!1),o=(a,l,u)=>{s(!0),tL(No,a,l).then(({user:c})=>{rL(No.currentUser,{displayName:u}).catch(d=>{console.error("Error updating name:",d)}),e(pi({name:u,email:c.email,id:c.uid,token:c.accessToken})),localStorage.setItem("userToken",c.accessToken),t()}).catch(c=>{console.error("Error:",c.code),c.code==="auth/email-already-in-use"?r("A user with this email already exists. Please enter a new email or log in to your account."):r(c.message)}).finally(()=>{s(!1)})};return x.jsx(rv,{onClose:t,title:"Registration",handleClick:o,text:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.",isRegistration:!0,errorMessage:n,loading:i})},Rh=t=>C.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{d:"M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z",fill:"#103931"})),p8=D.div`
  display: flex;
  gap: 9px;
  @media (max-width: 1024px) {
    display: none;
  }
  button {
    ${({$main:t})=>!t&&"border:1px solid rgba(251, 251, 251, 0.4);"}
    &:hover {
      ${({$main:t})=>!t&&"background-color:rgba(251, 251, 251, 0.4);"}
    }
  }
`,Ph=D.div`
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
  button {
    &:hover {
      background-color: ${t=>t.theme.colors.headerText};
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`,Cu=D.div`
  display: flex;
  align-items: center;
  gap: 14px;
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 111%;
    letter-spacing: -0.01em;
    color: ${t=>t.theme.colors.headerText};
  }
`,Oh=D.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${t=>t.theme.colors.headerText};
  cursor: pointer;
`,Ah=D.div`
  position: absolute;
  top: 60px;
  right: 0;
  border: 2px solid white;
  background-color: ${t=>t.theme.colors.primaryGreenColor};
  border-radius: 10px;
  width: 100%;
  height: auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  color: ${t=>t.theme.colors.headerText};

  @media (max-width: 1024px) {
    top: -21px;
    right: -22px;
    width: auto;
    height: 130px;
    justify-content: center;
    font-size: 14px;
    padding-inline: 10px;
  }
  @media (max-width: 768px) {
    top: 105%;
    right: 0;
    width: 100%;
    height: auto;
    text-align: center;
    background-color: transparent;
    color: ${t=>t.theme.colors.primaryBodyText};
    border-color: ${t=>t.theme.colors.primaryGreenColor};
  }
`,Nh=D.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 1024px) {
    gap: 10px;
  }
  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
  button {
    font-size: 14px;
    border-radius: 15px;
    border: 1px solid ${t=>t.theme.colors.buttonBorder};
    background-color: inherit;
    padding: 5px 15px;
    color: ${t=>t.theme.colors.headerText};
    transition: ${t=>t.theme.transition.customTrans};
    &:hover {
      background-color: ${t=>t.theme.colors.headerText};
      color: ${t=>t.theme.colors.primaryBodyText};
    }
    @media (max-width: 1024px) {
      font-size: 12px;
      padding-inline: 12px;
    }
  }
`,m8=D.div`
  position: absolute;
  bottom: -10px;
  right: 0;
  transform: translateY(100%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${t=>t.theme.colors.headerText};
  border-radius: 10px;
  padding: 20px;
  background-color: ${t=>t.theme.colors.primaryGreenColor};
  button {
    border: 1px solid rgba(251, 251, 251, 0.4);
    &:hover {
      background-color: rgba(251, 251, 251, 0.4);
    }
  }
`,g8=D.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  span {
    color: ${t=>t.theme.colors.primaryGreenColor};
  }

  button {
    background-color: ${t=>t.theme.colors.primaryGreenColor};
    border: 1px solid ${t=>t.theme.colors.primaryGreenColor};
  }
`;var Nb={exports:{}};(function(t,e){(function(r,i){t.exports=i(C)})(Yb,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(a,l)=>{l.match=g,l.parse=v;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,c=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,d=/^(?:(min|max)-)?(.+)/,f=/(em|rem|px|cm|mm|in|pt|pc)?$/,p=/(dpi|dpcm|dppx)?$/;function g(y,E){return v(y).some(function(T){var _=T.inverse,S=T.type==="all"||E.type===T.type;if(S&&_||!(S||_))return!1;var P=T.expressions.every(function(k){var A=k.feature,N=k.modifier,G=k.value,j=E[A];if(!j)return!1;switch(A){case"orientation":case"scan":return j.toLowerCase()===G.toLowerCase();case"width":case"height":case"device-width":case"device-height":G=h(G),j=h(j);break;case"resolution":G=m(G),j=m(j);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":G=w(G),j=w(j);break;case"grid":case"color":case"color-index":case"monochrome":G=parseInt(G,10)||1,j=parseInt(j,10)||0;break}switch(N){case"min":return j>=G;case"max":return j<=G;default:return j===G}});return P&&!_||!P&&_})}function v(y){return y.split(",").map(function(E){E=E.trim();var T=E.match(u),_=T[1],S=T[2],P=T[3]||"",k={};return k.inverse=!!_&&_.toLowerCase()==="not",k.type=S?S.toLowerCase():"all",P=P.match(/\([^\)]+\)/g)||[],k.expressions=P.map(function(A){var N=A.match(c),G=N[1].toLowerCase().match(d);return{modifier:G[1],feature:G[2],value:N[2]}}),k})}function w(y){var E=Number(y),T;return E||(T=y.match(/^(\d+)\s*\/\s*(\d+)$/),E=T[1]/T[2]),E}function m(y){var E=parseFloat(y),T=String(y).match(p)[1];switch(T){case"dpcm":return E/2.54;case"dppx":return E*96;default:return E}}function h(y){var E=parseFloat(y),T=String(y).match(f)[1];switch(T){case"em":return E*16;case"rem":return E*16;case"cm":return E*96/2.54;case"mm":return E*96/2.54/10;case"in":return E*96;case"pt":return E*72;case"pc":return E*72/12;default:return E}}},"./node_modules/hyphenate-style-name/index.js":(a,l,u)=>{u.r(l),u.d(l,{default:()=>v});var c=/[A-Z]/g,d=/^ms-/,f={};function p(w){return"-"+w.toLowerCase()}function g(w){if(f.hasOwnProperty(w))return f[w];var m=w.replace(c,p);return f[w]=d.test(m)?"-"+m:m}const v=g},"./node_modules/matchmediaquery/index.js":(a,l,u)=>{var c=u("./node_modules/css-mediaquery/index.js").match,d=typeof window<"u"?window.matchMedia:null;function f(g,v,w){var m=this;if(d&&!w){var h=d.call(window,g);this.matches=h.matches,this.media=h.media,h.addListener(T)}else this.matches=c(g,v),this.media=g;this.addListener=y,this.removeListener=E,this.dispose=_;function y(S){h&&h.addListener(S)}function E(S){h&&h.removeListener(S)}function T(S){m.matches=S.matches,m.media=S.media}function _(){h&&h.removeListener(T)}}function p(g,v,w){return new f(g,v,w)}a.exports=p},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(p){if(p==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(p)}function f(){try{if(!Object.assign)return!1;var p=new String("abc");if(p[5]="de",Object.getOwnPropertyNames(p)[0]==="5")return!1;for(var g={},v=0;v<10;v++)g["_"+String.fromCharCode(v)]=v;var w=Object.getOwnPropertyNames(g).map(function(h){return g[h]});if(w.join("")!=="0123456789")return!1;var m={};return"abcdefghijklmnopqrst".split("").forEach(function(h){m[h]=h}),Object.keys(Object.assign({},m)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=f()?Object.assign:function(p,g){for(var v,w=d(p),m,h=1;h<arguments.length;h++){v=Object(arguments[h]);for(var y in v)u.call(v,y)&&(w[y]=v[y]);if(l){m=l(v);for(var E=0;E<m.length;E++)c.call(v,m[E])&&(w[m[E]]=v[m[E]])}}return w}},"./node_modules/prop-types/checkPropTypes.js":(a,l,u)=>{var c=function(){};{var d=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),f={},p=u("./node_modules/prop-types/lib/has.js");c=function(v){var w="Warning: "+v;typeof console<"u"&&console.error(w);try{throw new Error(w)}catch{}}}function g(v,w,m,h,y){for(var E in v)if(p(v,E)){var T;try{if(typeof v[E]!="function"){var _=Error((h||"React class")+": "+m+" type `"+E+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof v[E]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}T=v[E](w,E,h,m,null,d)}catch(P){T=P}if(T&&!(T instanceof Error)&&c((h||"React class")+": type specification of "+m+" `"+E+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof T+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),T instanceof Error&&!(T.message in f)){f[T.message]=!0;var S=y?y():"";c("Failed "+m+" type: "+T.message+(S??""))}}}g.resetWarningCache=function(){f={}},a.exports=g},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,l,u)=>{var c=u("./node_modules/react-is/index.js"),d=u("./node_modules/object-assign/index.js"),f=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),p=u("./node_modules/prop-types/lib/has.js"),g=u("./node_modules/prop-types/checkPropTypes.js"),v=function(){};v=function(m){var h="Warning: "+m;typeof console<"u"&&console.error(h);try{throw new Error(h)}catch{}};function w(){return null}a.exports=function(m,h){var y=typeof Symbol=="function"&&Symbol.iterator,E="@@iterator";function T(M){var $=M&&(y&&M[y]||M[E]);if(typeof $=="function")return $}var _="<<anonymous>>",S={array:N("array"),bigint:N("bigint"),bool:N("boolean"),func:N("function"),number:N("number"),object:N("object"),string:N("string"),symbol:N("symbol"),any:G(),arrayOf:j,element:Z(),elementType:Ie(),instanceOf:Oe,node:q(),objectOf:z,oneOf:de,oneOfType:K,shape:se,exact:at};function P(M,$){return M===$?M!==0||1/M===1/$:M!==M&&$!==$}function k(M,$){this.message=M,this.data=$&&typeof $=="object"?$:{},this.stack=""}k.prototype=Error.prototype;function A(M){var $={},J=0;function ae(le,ue,fe,we,Ce,xe,W){if(we=we||_,xe=xe||fe,W!==f){if(h){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}else if(typeof console<"u"){var U=we+":"+fe;!$[U]&&J<3&&(v("You are manually calling a React.PropTypes validation function for the `"+xe+"` prop on `"+we+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),$[U]=!0,J++)}}return ue[fe]==null?le?ue[fe]===null?new k("The "+Ce+" `"+xe+"` is marked as required "+("in `"+we+"`, but its value is `null`.")):new k("The "+Ce+" `"+xe+"` is marked as required in "+("`"+we+"`, but its value is `undefined`.")):null:M(ue,fe,we,Ce,xe)}var oe=ae.bind(null,!1);return oe.isRequired=ae.bind(null,!0),oe}function N(M){function $(J,ae,oe,le,ue,fe){var we=J[ae],Ce=Se(we);if(Ce!==M){var xe=$e(we);return new k("Invalid "+le+" `"+ue+"` of type "+("`"+xe+"` supplied to `"+oe+"`, expected ")+("`"+M+"`."),{expectedType:M})}return null}return A($)}function G(){return A(w)}function j(M){function $(J,ae,oe,le,ue){if(typeof M!="function")return new k("Property `"+ue+"` of component `"+oe+"` has invalid PropType notation inside arrayOf.");var fe=J[ae];if(!Array.isArray(fe)){var we=Se(fe);return new k("Invalid "+le+" `"+ue+"` of type "+("`"+we+"` supplied to `"+oe+"`, expected an array."))}for(var Ce=0;Ce<fe.length;Ce++){var xe=M(fe,Ce,oe,le,ue+"["+Ce+"]",f);if(xe instanceof Error)return xe}return null}return A($)}function Z(){function M($,J,ae,oe,le){var ue=$[J];if(!m(ue)){var fe=Se(ue);return new k("Invalid "+oe+" `"+le+"` of type "+("`"+fe+"` supplied to `"+ae+"`, expected a single ReactElement."))}return null}return A(M)}function Ie(){function M($,J,ae,oe,le){var ue=$[J];if(!c.isValidElementType(ue)){var fe=Se(ue);return new k("Invalid "+oe+" `"+le+"` of type "+("`"+fe+"` supplied to `"+ae+"`, expected a single ReactElement type."))}return null}return A(M)}function Oe(M){function $(J,ae,oe,le,ue){if(!(J[ae]instanceof M)){var fe=M.name||_,we=It(J[ae]);return new k("Invalid "+le+" `"+ue+"` of type "+("`"+we+"` supplied to `"+oe+"`, expected ")+("instance of `"+fe+"`."))}return null}return A($)}function de(M){if(!Array.isArray(M))return arguments.length>1?v("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):v("Invalid argument supplied to oneOf, expected an array."),w;function $(J,ae,oe,le,ue){for(var fe=J[ae],we=0;we<M.length;we++)if(P(fe,M[we]))return null;var Ce=JSON.stringify(M,function(W,I){var U=$e(I);return U==="symbol"?String(I):I});return new k("Invalid "+le+" `"+ue+"` of value `"+String(fe)+"` "+("supplied to `"+oe+"`, expected one of "+Ce+"."))}return A($)}function z(M){function $(J,ae,oe,le,ue){if(typeof M!="function")return new k("Property `"+ue+"` of component `"+oe+"` has invalid PropType notation inside objectOf.");var fe=J[ae],we=Se(fe);if(we!=="object")return new k("Invalid "+le+" `"+ue+"` of type "+("`"+we+"` supplied to `"+oe+"`, expected an object."));for(var Ce in fe)if(p(fe,Ce)){var xe=M(fe,Ce,oe,le,ue+"."+Ce,f);if(xe instanceof Error)return xe}return null}return A($)}function K(M){if(!Array.isArray(M))return v("Invalid argument supplied to oneOfType, expected an instance of array."),w;for(var $=0;$<M.length;$++){var J=M[$];if(typeof J!="function")return v("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Ht(J)+" at index "+$+"."),w}function ae(oe,le,ue,fe,we){for(var Ce=[],xe=0;xe<M.length;xe++){var W=M[xe],I=W(oe,le,ue,fe,we,f);if(I==null)return null;I.data&&p(I.data,"expectedType")&&Ce.push(I.data.expectedType)}var U=Ce.length>0?", expected one of type ["+Ce.join(", ")+"]":"";return new k("Invalid "+fe+" `"+we+"` supplied to "+("`"+ue+"`"+U+"."))}return A(ae)}function q(){function M($,J,ae,oe,le){return Re($[J])?null:new k("Invalid "+oe+" `"+le+"` supplied to "+("`"+ae+"`, expected a ReactNode."))}return A(M)}function ne(M,$,J,ae,oe){return new k((M||"React class")+": "+$+" type `"+J+"."+ae+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+oe+"`.")}function se(M){function $(J,ae,oe,le,ue){var fe=J[ae],we=Se(fe);if(we!=="object")return new k("Invalid "+le+" `"+ue+"` of type `"+we+"` "+("supplied to `"+oe+"`, expected `object`."));for(var Ce in M){var xe=M[Ce];if(typeof xe!="function")return ne(oe,le,ue,Ce,$e(xe));var W=xe(fe,Ce,oe,le,ue+"."+Ce,f);if(W)return W}return null}return A($)}function at(M){function $(J,ae,oe,le,ue){var fe=J[ae],we=Se(fe);if(we!=="object")return new k("Invalid "+le+" `"+ue+"` of type `"+we+"` "+("supplied to `"+oe+"`, expected `object`."));var Ce=d({},J[ae],M);for(var xe in Ce){var W=M[xe];if(p(M,xe)&&typeof W!="function")return ne(oe,le,ue,xe,$e(W));if(!W)return new k("Invalid "+le+" `"+ue+"` key `"+xe+"` supplied to `"+oe+"`.\nBad object: "+JSON.stringify(J[ae],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(M),null,"  "));var I=W(fe,xe,oe,le,ue+"."+xe,f);if(I)return I}return null}return A($)}function Re(M){switch(typeof M){case"number":case"string":case"undefined":return!0;case"boolean":return!M;case"object":if(Array.isArray(M))return M.every(Re);if(M===null||m(M))return!0;var $=T(M);if($){var J=$.call(M),ae;if($!==M.entries){for(;!(ae=J.next()).done;)if(!Re(ae.value))return!1}else for(;!(ae=J.next()).done;){var oe=ae.value;if(oe&&!Re(oe[1]))return!1}}else return!1;return!0;default:return!1}}function Le(M,$){return M==="symbol"?!0:$?$["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&$ instanceof Symbol:!1}function Se(M){var $=typeof M;return Array.isArray(M)?"array":M instanceof RegExp?"object":Le($,M)?"symbol":$}function $e(M){if(typeof M>"u"||M===null)return""+M;var $=Se(M);if($==="object"){if(M instanceof Date)return"date";if(M instanceof RegExp)return"regexp"}return $}function Ht(M){var $=$e(M);switch($){case"array":case"object":return"an "+$;case"boolean":case"date":case"regexp":return"a "+$;default:return $}}function It(M){return!M.constructor||!M.constructor.name?_:M.constructor.name}return S.checkPropTypes=g,S.resetWarningCache=g.resetWarningCache,S.PropTypes=S,S}},"./node_modules/prop-types/index.js":(a,l,u)=>{{var c=u("./node_modules/react-is/index.js"),d=!0;a.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(c.isElement,d)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=l},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,l)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,c=u?Symbol.for("react.element"):60103,d=u?Symbol.for("react.portal"):60106,f=u?Symbol.for("react.fragment"):60107,p=u?Symbol.for("react.strict_mode"):60108,g=u?Symbol.for("react.profiler"):60114,v=u?Symbol.for("react.provider"):60109,w=u?Symbol.for("react.context"):60110,m=u?Symbol.for("react.async_mode"):60111,h=u?Symbol.for("react.concurrent_mode"):60111,y=u?Symbol.for("react.forward_ref"):60112,E=u?Symbol.for("react.suspense"):60113,T=u?Symbol.for("react.suspense_list"):60120,_=u?Symbol.for("react.memo"):60115,S=u?Symbol.for("react.lazy"):60116,P=u?Symbol.for("react.block"):60121,k=u?Symbol.for("react.fundamental"):60117,A=u?Symbol.for("react.responder"):60118,N=u?Symbol.for("react.scope"):60119;function G(W){return typeof W=="string"||typeof W=="function"||W===f||W===h||W===g||W===p||W===E||W===T||typeof W=="object"&&W!==null&&(W.$$typeof===S||W.$$typeof===_||W.$$typeof===v||W.$$typeof===w||W.$$typeof===y||W.$$typeof===k||W.$$typeof===A||W.$$typeof===N||W.$$typeof===P)}function j(W){if(typeof W=="object"&&W!==null){var I=W.$$typeof;switch(I){case c:var U=W.type;switch(U){case m:case h:case f:case g:case p:case E:return U;default:var V=U&&U.$$typeof;switch(V){case w:case y:case S:case _:case v:return V;default:return I}}case d:return I}}}var Z=m,Ie=h,Oe=w,de=v,z=c,K=y,q=f,ne=S,se=_,at=d,Re=g,Le=p,Se=E,$e=!1;function Ht(W){return $e||($e=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),It(W)||j(W)===m}function It(W){return j(W)===h}function M(W){return j(W)===w}function $(W){return j(W)===v}function J(W){return typeof W=="object"&&W!==null&&W.$$typeof===c}function ae(W){return j(W)===y}function oe(W){return j(W)===f}function le(W){return j(W)===S}function ue(W){return j(W)===_}function fe(W){return j(W)===d}function we(W){return j(W)===g}function Ce(W){return j(W)===p}function xe(W){return j(W)===E}l.AsyncMode=Z,l.ConcurrentMode=Ie,l.ContextConsumer=Oe,l.ContextProvider=de,l.Element=z,l.ForwardRef=K,l.Fragment=q,l.Lazy=ne,l.Memo=se,l.Portal=at,l.Profiler=Re,l.StrictMode=Le,l.Suspense=Se,l.isAsyncMode=Ht,l.isConcurrentMode=It,l.isContextConsumer=M,l.isContextProvider=$,l.isElement=J,l.isForwardRef=ae,l.isFragment=oe,l.isLazy=le,l.isMemo=ue,l.isPortal=fe,l.isProfiler=we,l.isStrictMode=Ce,l.isSuspense=xe,l.isValidElementType=G,l.typeOf=j})()},"./node_modules/react-is/index.js":(a,l,u)=>{a.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,l,u)=>{u.r(l),u.d(l,{shallowEqualArrays:()=>d,shallowEqualObjects:()=>c});function c(f,p){if(f===p)return!0;if(!f||!p)return!1;var g=Object.keys(f),v=Object.keys(p),w=g.length;if(v.length!==w)return!1;for(var m=0;m<w;m++){var h=g[m];if(f[h]!==p[h]||!Object.prototype.hasOwnProperty.call(p,h))return!1}return!0}function d(f,p){if(f===p)return!0;if(!f||!p)return!1;var g=f.length;if(p.length!==g)return!1;for(var v=0;v<g;v++)if(f[v]!==p[v])return!1;return!0}},"./src/Component.ts":function(a,l,u){var c=this&&this.__rest||function(g,v){var w={};for(var m in g)Object.prototype.hasOwnProperty.call(g,m)&&v.indexOf(m)<0&&(w[m]=g[m]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,m=Object.getOwnPropertySymbols(g);h<m.length;h++)v.indexOf(m[h])<0&&Object.prototype.propertyIsEnumerable.call(g,m[h])&&(w[m[h]]=g[m[h]]);return w},d=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(l,"__esModule",{value:!0});var f=d(u("./src/useMediaQuery.ts")),p=function(g){var v=g.children,w=g.device,m=g.onChange,h=c(g,["children","device","onChange"]),y=(0,f.default)(h,w,m);return typeof v=="function"?v(y):y?v:null};l.default=p},"./src/Context.ts":(a,l,u)=>{Object.defineProperty(l,"__esModule",{value:!0});var c=u("react"),d=(0,c.createContext)(void 0);l.default=d},"./src/index.ts":function(a,l,u){var c=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(l,"__esModule",{value:!0}),l.Context=l.toQuery=l.useMediaQuery=l.default=void 0;var d=c(u("./src/useMediaQuery.ts"));l.useMediaQuery=d.default;var f=c(u("./src/Component.ts"));l.default=f.default;var p=c(u("./src/toQuery.ts"));l.toQuery=p.default;var g=c(u("./src/Context.ts"));l.Context=g.default},"./src/mediaQuery.ts":function(a,l,u){var c=this&&this.__assign||function(){return c=Object.assign||function(E){for(var T,_=1,S=arguments.length;_<S;_++){T=arguments[_];for(var P in T)Object.prototype.hasOwnProperty.call(T,P)&&(E[P]=T[P])}return E},c.apply(this,arguments)},d=this&&this.__rest||function(E,T){var _={};for(var S in E)Object.prototype.hasOwnProperty.call(E,S)&&T.indexOf(S)<0&&(_[S]=E[S]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,S=Object.getOwnPropertySymbols(E);P<S.length;P++)T.indexOf(S[P])<0&&Object.prototype.propertyIsEnumerable.call(E,S[P])&&(_[S[P]]=E[S[P]]);return _},f=this&&this.__importDefault||function(E){return E&&E.__esModule?E:{default:E}};Object.defineProperty(l,"__esModule",{value:!0});var p=f(u("./node_modules/prop-types/index.js")),g=p.default.oneOfType([p.default.string,p.default.number]),v={all:p.default.bool,grid:p.default.bool,aural:p.default.bool,braille:p.default.bool,handheld:p.default.bool,print:p.default.bool,projection:p.default.bool,screen:p.default.bool,tty:p.default.bool,tv:p.default.bool,embossed:p.default.bool},w={orientation:p.default.oneOf(["portrait","landscape"]),scan:p.default.oneOf(["progressive","interlace"]),aspectRatio:p.default.string,deviceAspectRatio:p.default.string,height:g,deviceHeight:g,width:g,deviceWidth:g,color:p.default.bool,colorIndex:p.default.bool,monochrome:p.default.bool,resolution:g,type:Object.keys(v)};w.type;var m=d(w,["type"]),h=c({minAspectRatio:p.default.string,maxAspectRatio:p.default.string,minDeviceAspectRatio:p.default.string,maxDeviceAspectRatio:p.default.string,minHeight:g,maxHeight:g,minDeviceHeight:g,maxDeviceHeight:g,minWidth:g,maxWidth:g,minDeviceWidth:g,maxDeviceWidth:g,minColor:p.default.number,maxColor:p.default.number,minColorIndex:p.default.number,maxColorIndex:p.default.number,minMonochrome:p.default.number,maxMonochrome:p.default.number,minResolution:g,maxResolution:g},m),y=c(c({},v),h);l.default={all:y,types:v,matchers:w,features:h}},"./src/toQuery.ts":function(a,l,u){var c=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(l,"__esModule",{value:!0});var d=c(u("./node_modules/hyphenate-style-name/index.js")),f=c(u("./src/mediaQuery.ts")),p=function(m){return"not ".concat(m)},g=function(m,h){var y=(0,d.default)(m);return typeof h=="number"&&(h="".concat(h,"px")),h===!0?y:h===!1?p(y):"(".concat(y,": ").concat(h,")")},v=function(m){return m.join(" and ")},w=function(m){var h=[];return Object.keys(f.default.all).forEach(function(y){var E=m[y];E!=null&&h.push(g(y,E))}),v(h)};l.default=w},"./src/useMediaQuery.ts":function(a,l,u){var c=this&&this.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(l,"__esModule",{value:!0});var d=u("react"),f=c(u("./node_modules/matchmediaquery/index.js")),p=c(u("./node_modules/hyphenate-style-name/index.js")),g=u("./node_modules/shallow-equal/dist/index.esm.js"),v=c(u("./src/toQuery.ts")),w=c(u("./src/Context.ts")),m=function(k){return k.query||(0,v.default)(k)},h=function(k){if(k){var A=Object.keys(k);return A.reduce(function(N,G){return N[(0,p.default)(G)]=k[G],N},{})}},y=function(){var k=(0,d.useRef)(!1);return(0,d.useEffect)(function(){k.current=!0},[]),k.current},E=function(k){var A=(0,d.useContext)(w.default),N=function(){return h(k)||h(A)},G=(0,d.useState)(N),j=G[0],Z=G[1];return(0,d.useEffect)(function(){var Ie=N();(0,g.shallowEqualObjects)(j,Ie)||Z(Ie)},[k,A]),j},T=function(k){var A=function(){return m(k)},N=(0,d.useState)(A),G=N[0],j=N[1];return(0,d.useEffect)(function(){var Z=A();G!==Z&&j(Z)},[k]),G},_=function(k,A){var N=function(){return(0,f.default)(k,A||{},!!A)},G=(0,d.useState)(N),j=G[0],Z=G[1],Ie=y();return(0,d.useEffect)(function(){if(Ie){var Oe=N();return Z(Oe),function(){Oe&&Oe.dispose()}}},[k,A]),j},S=function(k){var A=(0,d.useState)(k.matches),N=A[0],G=A[1];return(0,d.useEffect)(function(){var j=function(Z){G(Z.matches)};return k.addListener(j),G(k.matches),function(){k.removeListener(j)}},[k]),N},P=function(k,A,N){var G=E(A),j=T(k);if(!j)throw new Error("Invalid or missing MediaQuery!");var Z=_(j,G),Ie=S(Z),Oe=y();return(0,d.useEffect)(function(){Oe&&N&&N(Ie)},[Ie]),(0,d.useEffect)(function(){return function(){Z&&Z.dispose()}},[]),Ie};l.default=P},react:a=>{a.exports=n}},i={};function s(a){var l=i[a];if(l!==void 0)return l.exports;var u=i[a]={exports:{}};return r[a].call(u.exports,u,u.exports,s),u.exports}s.d=(a,l)=>{for(var u in l)s.o(l,u)&&!s.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:l[u]})},s.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),s.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o=s("./src/index.ts");return o})())})(Nb);var nd=Nb.exports;const Db=({main:t})=>{const{name:e,email:n,isAuth:r}=Jd(),{modalConfig:i,openModal:s,closeModal:o}=jy(),a=$o(),[l,u]=C.useState(!1),c=Ig(),d=nd.useMediaQuery({maxWidth:1024}),[f,p]=C.useState(!1),g=nd.useMediaQuery({maxWidth:768});C.useEffect(()=>{const T=_=>{const S=document.getElementById("authUserBlock");S&&!S.contains(_.target)&&p(!1)};return document.addEventListener("mousedown",T),()=>{document.removeEventListener("mousedown",T)}},[p]);const v=()=>{u(!0)},w=()=>{u(!1)},m=()=>{l&&aL(No).then(()=>{a(pi(null)),w(),localStorage.removeItem("userToken"),c("/BabySitterHub",{replace:!0})}).catch(T=>console.log(T))},h=()=>{p(T=>!T)},y=T=>{s(T),p(!0)},E=()=>{p(!1),u(T=>!T)};return g?x.jsxs(g8,{children:[r?x.jsxs(Ph,{children:[x.jsxs(Cu,{children:[x.jsx(Oh,{children:x.jsx(Rh,{})}),x.jsx("span",{children:e})]}),x.jsx(_n,{title:"Logout",border:!0,onClick:v}),l&&x.jsx(Ah,{onClose:w,children:x.jsxs("div",{onClick:w,children:[x.jsx("p",{children:"Are you sure you want to log out?"}),x.jsxs(Nh,{children:[x.jsx("button",{onClick:m,children:"Confirm"}),x.jsx("button",{onClick:w,children:"Cancel"})]})]})})]}):x.jsxs(x.Fragment,{children:[x.jsx(_n,{title:"Log in",border:!0,onClick:()=>s("login")}),x.jsx(_n,{title:"Registration",border:!1,onClick:()=>s("registration")})]}),i.isOpen&&x.jsx(za,{onClose:o,children:i.formType==="login"?x.jsx(Ih,{onClose:o}):i.formType==="registration"?x.jsx(kh,{onClose:o}):null})]}):d?x.jsxs(Cu,{children:[x.jsx("span",{children:e}),x.jsxs(Oh,{id:"authUserBlock",onClick:h,children:[x.jsx(Rh,{}),f&&x.jsx(m8,{$main:t,children:r?x.jsxs(Ph,{children:[x.jsx(Cu,{children:x.jsx("span",{children:n})}),x.jsx(_n,{title:"Logout",border:!0,onClick:E}),l&&x.jsx(Ah,{onClose:w,children:x.jsxs("div",{onClick:w,children:[x.jsx("p",{children:"Are you sure you want to log out?"}),x.jsxs(Nh,{children:[x.jsx("button",{onClick:m,children:"Confirm"}),x.jsx("button",{onClick:w,children:"Cancel"})]})]})})]}):x.jsxs(x.Fragment,{children:[x.jsx(_n,{title:"Log in",border:!0,onClick:()=>y("login")}),x.jsx(_n,{title:"Registration",border:!1,onClick:()=>y("registration")})]})})]}),i.isOpen&&x.jsx(za,{onClose:o,children:i.formType==="login"?x.jsx(Ih,{onClose:o}):i.formType==="registration"?x.jsx(kh,{onClose:o}):null})]}):x.jsxs(p8,{$main:t,children:[r?x.jsxs(Ph,{children:[x.jsxs(Cu,{children:[x.jsx(Oh,{children:x.jsx(Rh,{})}),x.jsx("span",{children:e})]}),x.jsx(_n,{title:"Logout",border:!0,onClick:v}),l&&x.jsx(Ah,{onClose:w,children:x.jsxs("div",{onClick:w,children:[x.jsx("p",{children:"Are you sure you want to log out?"}),x.jsxs(Nh,{children:[x.jsx("button",{onClick:m,children:"Confirm"}),x.jsx("button",{onClick:w,children:"Cancel"})]})]})})]}):x.jsxs(x.Fragment,{children:[x.jsx(_n,{$main:t,title:"Log in",border:!0,onClick:()=>s("login")}),x.jsx(_n,{$main:t,title:"Registration",border:!1,onClick:()=>s("registration")})]}),i.isOpen&&x.jsx(za,{onClose:o,children:i.formType==="login"?x.jsx(Ih,{onClose:o}):i.formType==="registration"?x.jsx(kh,{onClose:o}):null})]})},y8=D.header`
  position: ${({$main:t})=>t?"absolute":"static"};
  top: 0;
  left: 0;
  z-index: 1000;
  max-width: 100%;
  padding-inline: ${({$main:t})=>t?"128px":"0"};
  width: ${({$main:t})=>"100%"};
  background-color: ${({$main:t,theme:e})=>t?"transparent":e.colors.primaryGreenColor};

  @media (max-width: 1210px) {
    padding-inline: ${({$main:t})=>t?"100px":"30px"};
  }
  @media (max-width: 1024px) {
    padding-inline: ${({$main:t})=>t?"80px":"20px"};
  }
  @media (max-width: 768px) {
    padding-inline: 20px;
    position: static;
    background-color: ${t=>t.theme.colors.primaryGreenColor};
  }
`,v8=D.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  margin: 0 auto;
  max-width: 1184px;
  @media (max-width: 768px) {
    padding-block: 14px;
  }
`,_8=D(Cd)`
  font-weight: 500;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${t=>t.theme.colors.headerText};
  /*  padding-right: 200px; */
  padding-right: ${({$main:t})=>t?"0px":"180px"};
  @media (max-width: 480px) {
    padding-right: ${({$main:t})=>t?"0px":"100px"};
  }
`,w8=D.div`
  width: ${({$main:t})=>t?"auto":"100%"};
  display: flex;
  gap: ${({$main:t})=>t?"92px":"0"};
  justify-content: ${({$main:t})=>t?"stretch":"space-between"};
  align-items: center;
  max-width: 715px;
  @media (max-width: 1200px) {
    gap: 70px;
  }
  @media (max-width: 1024px) {
    gap: 100px;
  }
`,Mb=D.nav`
  display: flex;
  gap: 40px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  @media (max-width: 1200px) {
    gap: 20px;
  }
`,Yu=D(GP)`
  font-size: 16px;
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
  transition: ${t=>t.theme.transition.customTrans};
  &:hover {
    transform: scale(1.1);
  }
`;var Lb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qw=ot.createContext&&ot.createContext(Lb),x8=["attr","size","title"];function E8(t,e){if(t==null)return{};var n=S8(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function S8(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rd(){return rd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rd.apply(this,arguments)}function Qw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function id(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qw(Object(n),!0).forEach(function(r){C8(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function C8(t,e,n){return e=T8(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T8(t){var e=b8(t,"string");return typeof e=="symbol"?e:String(e)}function b8(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function jb(t){return t&&t.map((e,n)=>ot.createElement(e.tag,id({key:n},e.attr),jb(e.child)))}function I8(t){return e=>ot.createElement(k8,rd({attr:id({},t.attr)},e),jb(t.child))}function k8(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=E8(t,x8),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ot.createElement("svg",rd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:id(id({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ot.createElement("title",null,s),t.children)};return qw!==void 0?ot.createElement(qw.Consumer,null,n=>e(n)):e(Lb)}function R8(t){return I8({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(t)}const P8=D.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`,O8=D.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`,A8=D.div`
  position: fixed;
  top: 0;
  right: ${({$isOpen:t})=>t?"0":"-50%"};
  width: 50%;
  height: 100%;
  background-color: ${t=>t.theme.colors.mainBackground};
  transition: right 0.3s ease-in-out;
  z-index: 3;
  padding: 80px 20px;
  @media (max-width: 480px) {
    right: ${({$isOpen:t})=>t?"0":"-70%"};
    width: 70%;
  }
`,N8=D.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    bottom: -20px;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${t=>t.theme.colors.primaryGreenColor};
  }
`,D8=D(Ob)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`,Dh=D(Yu)`
  color: ${t=>t.theme.colors.primaryGreenColor};
  font-size: 30px;
  &.active {
    &::after {
      width: 14px;
      height: 14px;
      top: 50%;
      left: -30px;
      transform: translateY(-50%);
      background-color: ${t=>t.theme.colors.primaryGreenColor};
    }
  }
`,M8=D(Mb)`
  flex-direction: column;
`,L8=()=>{const{isAuth:t}=Jd(),[e,n]=C.useState(!1),r=()=>{n(!e)};return x.jsxs(P8,{children:[x.jsx(R8,{color:"#FBFBFB",size:34,onClick:r}),e&&x.jsx(O8,{onClick:r}),x.jsxs(A8,{$isOpen:e,children:[x.jsx(D8,{onClick:r}),x.jsx(N8,{children:x.jsxs(M8,{children:[x.jsx(Dh,{to:"/BabySitterHub",end:!0,children:"Home"}),x.jsx(Dh,{to:"/BabySitterHub/nannies",children:"Nannies"}),t&&x.jsx(Dh,{to:"/BabySitterHub/favorites",children:"Favorites"})]})}),x.jsx(Db,{})]})]})},j8=()=>{const t=Fo(),{pathname:e}=t,{isAuth:n}=Jd(),r=nd.useMediaQuery({maxWidth:768}),i=e==="/BabySitterHub";return x.jsx(y8,{$main:i,children:x.jsxs(v8,{$main:i,children:[x.jsx(_8,{to:"/BabySitterHub",$main:i,children:"Nanny.Services"}),r?x.jsx(L8,{}):x.jsxs(w8,{$main:i,children:[x.jsxs(Mb,{children:[x.jsx(Yu,{to:"/BabySitterHub",end:!0,children:"Home"}),x.jsx(Yu,{to:"/BabySitterHub/nannies",children:"Nannies"}),n&&x.jsx(Yu,{to:"/BabySitterHub/favorites",children:"Favorites"})]}),x.jsx(Db,{main:i})]})]})})},F8=D.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`,$8=D.main`
  width: 100%;
  margin: 0 auto;
`,U8=()=>{const t=$o();return C.useEffect(()=>{const e=oL(No,n=>{if(n){const r={name:n.displayName,email:n.email,id:n.uid};t(pi(r))}else t(pi(null))});return()=>e()},[t]),x.jsx($4,{children:x.jsxs(F8,{children:[x.jsx(j8,{}),x.jsx($8,{children:x.jsx(bP,{})})]})})},z8=t=>C.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 12.5L5 15L12.5 22.5L25 10L22.5 7.5L12.5 17.5L7.5 12.5Z",fill:"#FBFBFB"})),B8=D.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: ${t=>t.theme.colors.mainBackground};
  border-radius: 20px;
  padding: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 1200px) {
    padding: 24px;
    bottom: 40px;
    right: 40px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 100px;
    top: 300px;
    left: 15px;
  }
  @media (max-width: 640px) {
    top: 380px;
    left: 20px;
  }
  @media (max-width: 480px) {
    top: 400px;
  }
`,W8=D.div`
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background: ${t=>t.theme.colors.primaryGreenColor};
  display: flex;
  align-items: center;
  justify-content: center;
`,V8=D.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: ${t=>t.theme.colors.secondaryBodyText};
    margin-bottom: 6px;
  }
  span {
    font-weight: 700;
    font-size: 24px;
    color: ${t=>t.theme.colors.primaryBodyText};
  }
`,H8=()=>x.jsxs(B8,{children:[x.jsx(W8,{children:x.jsx(z8,{})}),x.jsxs(V8,{children:[x.jsx("h2",{children:"Experienced Nannies"}),x.jsx("span",{children:"15,000"})]})]}),G8="/BabySitterHub/assets/MainPageImg-wFjZ-yXa.jpg",K8=t=>C.createElement("svg",{width:15,height:17,viewBox:"0 0 15 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{d:"M12.8229 1.67313C12.7461 1.12622 12.2404 0.745174 11.6935 0.822036L2.78109 2.0746C2.23418 2.15146 1.85313 2.65713 1.92999 3.20404C2.00685 3.75095 2.51252 4.13199 3.05943 4.05513L10.9816 2.94175L12.095 10.8639C12.1718 11.4108 12.6775 11.7918 13.2244 11.715C13.7713 11.6381 14.1524 11.1325 14.0755 10.5855L12.8229 1.67313ZM1.79864 16.7896L12.6313 2.41412L11.034 1.21049L0.201365 15.5859L1.79864 16.7896Z",fill:"#FBFBFB"})),Y8=D.section`
  position: relative;
  max-width: 1376px;
  margin: 32px;
  border-radius: 30px;
  height: calc(100lvh - 64px);
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${t=>t.theme.colors.primaryGreenColor};
  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 0;
    margin: 0;
  }
`,q8=D.div`
  width: 517px;
  flex: 1 1 49.2%;
  display: flex;
  flex-direction: column;
  padding-top: 251px;
  padding-right: 64px;
  padding-bottom: 15px;
  padding-left: 96px;
  color: ${t=>t.theme.colors.headerText};
  @media (max-width: 1200px) {
    max-width: 517px;
    padding-top: 200px;
    padding-right: 64px;
    padding-bottom: 15px;
    padding-left: 68px;
    flex: 1 1 45%;
  }
  @media (max-width: 1024px) {
    padding-top: 170px;
    padding-right: 44px;
    padding-bottom: 15px;
    padding-left: 48px;
    flex: 1 1 40%;
  }
  @media (max-width: 768px) {
    position: relative;
    max-width: none;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 30px;
    padding-inline: 20px;
    justify-content: space-between;
  }
  @media (max-height: 640px) {
    width: 100%;
    padding-top: 150px;
    padding-bottom: 30px;
  }
  @media (max-height: 430px) {
    padding-top: 80px;
  }
`,Q8=D.h1`
  font-weight: 500;
  font-size: clamp(40px, 4.1vw, 70px);
  letter-spacing: -0.03em;
  margin-bottom: 28px;
  @media (max-width: 768px) {
    /*  position: absolute; */
    max-width: 600px;
    font-size: clamp(30px, 8vw, 50px);
  }
  @media (max-height: 400px) {
    font-size: 30px;
  }
`,X8=D.p`
  font-size: clamp(22px, 2vw, 28px);
  letter-spacing: -0.02em;
  margin-bottom: 64px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
  @media (max-height: 640px) {
    margin-bottom: 16px;
  }
`,J8=D.button`
  max-width: 231px;
  display: inline-block;
  color: ${t=>t.theme.colors.headerText};
  border: 1px solid ${t=>t.theme.colors.buttonBorder};
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
  transition: ${t=>t.theme.transition.customTrans};
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
  @media (max-width: 1024px) {
    padding: 14px 30px;
    justify-content: center;
    gap: 20px;
  }
  @media (max-width: 768px) {
    position: absolute;
    bottom: 18%;
    right: 20px;
  }
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    max-width: 100%;
  }
`,Z8=D.div`
  flex: 1 1 50.8%;
  height: auto;
  img {
    height: calc(100lvh - 64px);
    width: 100%;
    box-shadow: inset 0 4px 4px 0 rgba(18, 20, 23, 0.6);
    @media (max-width: 640px) {
      height: 100%;
    }
  }
`,ez=()=>x.jsxs(Y8,{children:[x.jsxs(q8,{children:[x.jsx(Q8,{children:"Make Life Easier for the Family"}),x.jsx(X8,{children:"Find Babysitters Online for All Occasions"}),x.jsxs(J8,{as:Cd,to:"/BabySitterHub/nannies",children:["Get started",x.jsx(K8,{})]})]}),x.jsx(Z8,{children:x.jsx("img",{src:G8})}),x.jsx(H8,{})]}),Xw=()=>x.jsx(ez,{}),Fb=t=>C.createElement("svg",{width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{d:"M1 1.5L6 6.5L11 1.5",stroke:"#FBFBFB",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),tz=D.div`
  position: relative;
  display: inline-block;
  margin-bottom: 32px;
  z-index: 1;
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: ${t=>t.theme.colors.titleText};
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,nz=D.button`
  padding: 16px 23px 16px 18px;
  width: 226px;
  background-color: ${t=>t.theme.colors.primaryGreenColor};
  border-radius: 14px;
  border: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: ${t=>t.theme.colors.headerText};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
    min-width: 150px;
    gap: 20px;
  }
`,rz=D.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  padding: 14px 18px;
  list-style: none;
  border-radius: 14px;
  box-shadow: 0 20px 69px 0 rgba(0, 0, 0, 0.07);
  background: ${t=>t.theme.colors.primaryWhite};
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 768px) {
    gap: 8px;
  }
`,iz=D.li`
  font-size: 18px;
  line-height: 111%;
  color: rgba(17, 16, 28, 0.3);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${t=>t.selected&&`
    color: ${t.theme.colors.primaryBodyText};
  `}
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,$b=({onSelect:t})=>{const e=[{label:"A to Z",value:"a-z"},{label:"Z to A",value:"z-a"},{label:"Price: Low to High",value:"asc"},{label:"Price: High to Low",value:"desc"},{label:"Popular",value:"popular"},{label:"Not popular",value:"not-popular"},{label:"Show all",value:"show-all"}],[n,r]=C.useState(!1),[i,s]=C.useState(!1),[o,a]=C.useState(e[6]||null),l=()=>{r(!n),s(!i)},u=c=>{a(c),t(c.value),r(!1),s(!i)};return x.jsxs(tz,{children:[x.jsx("label",{htmlFor:"filters",children:"Filters"}),x.jsxs(nz,{onClick:l,id:"filters",children:[o.label||"Select an option",x.jsx(Fb,{style:{transform:i?"rotate(180deg)":"rotate(0)"}})]}),n&&x.jsx(rz,{children:e.map((c,d)=>x.jsx(iz,{onClick:()=>u(c),selected:o&&c.value===o.value,children:c.label},d))})]})},sz=t=>C.createElement("svg",{width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{d:"M22.5766 4.99419C22.0233 4.44061 21.3663 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8047 3.40226 16.0817 3.70187C15.3586 4.00147 14.7016 4.44061 14.1483 4.99419L13 6.14252L11.8516 4.99419C10.734 3.87652 9.21809 3.24863 7.63747 3.24863C6.05685 3.24863 4.54097 3.87652 3.4233 4.99419C2.30563 6.11186 1.67773 7.62774 1.67773 9.20836C1.67773 10.789 2.30563 12.3049 3.4233 13.4225L4.57163 14.5709L13 22.9992L21.4283 14.5709L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5693 6.20448 23.1302 5.54751 22.5766 4.99419Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),oz=D.article`
  width: 100%;
  display: flex;
  padding: 24px;
  border-radius: 24px;
  background-color: ${t=>t.theme.colors.headerText};
  @media (max-width: 1024px) {
    padding: 18px;
    border-radius: 18px;
  }
  @media (max-width: 768px) {
    position: relative;
  }
`,Jw=D.div`
  border: 2px solid ${t=>t.theme.colors.photoBorder};
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
  @media (max-width: 1024px) {
    border-radius: 24px;
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`,az=D.div`
  display: flex;
  flex-direction: column;
  gap: ${({$fullInfo:t})=>t?"48px":"14px"};
  @media (max-width: 1024px) {
    gap: ${({$fullInfo:t})=>t?"30px":"14px"};
  }
  @media (max-width: 768px) {
    gap: ${({$fullInfo:t})=>t?"20px":"10px"};
  }
`,lz=D.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 1024px) {
    gap: 18px;
  }
`,uz=D.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    gap: 16px;
  }
  @media (max-width: 480px) {
    justify-content: start;
    row-gap: 16px;
    column-gap: 20px;
    flex-wrap: wrap;
  }
`,cz=D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${t=>t.theme.colors.titleText};
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: ${t=>t.theme.colors.primaryBodyText};
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`,dz=D.div`
  display: flex;
  gap: 48px;
  align-items: center;
  @media (max-width: 1024px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
`,fz=D.div`
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
    background-color: ${t=>t.theme.colors.primaryBodyText};
  }
  @media (max-width: 1024px) {
    gap: 16px;
  }
  @media (max-width: 768px) {
    gap: 10px;
    flex-wrap: wrap;
  }
`,hz=D.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,pz=D.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,mz=D.span`
  @media (max-width: 768px) {
    font-size: 14px;
  }
  span {
    color: ${t=>t.theme.colors.secondaryGreenColor};
  }
`,gz=D.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,Zw=D.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${t=>t.theme.colors.secondaryBodyText};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,yz=D.div`
  display: flex;
  gap: 40px;
  align-items: center;
  @media (max-width: 768px) {
    gap: 28px;
    button {
      font-size: 14px;
    }
  }
`,vz=D.button`
  text-align: start;
  border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration-skip-ink: none;
  color: ${t=>t.theme.colors.primaryBodyText};
  transition: ${t=>t.theme.transition.customTrans};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) scaleX(1);
    width: 100%;
    height: 1px;
    background-color: ${t=>t.theme.colors.primaryBodyText};
    transition: transform 0.3s ease;
    transform-origin: center;
  }
  &:hover::after {
    transform: translateX(-50%) scaleX(0);
  }
  &:hover {
    transform: scale(1.1);
  }
`,_z=D.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 1024px) {
    gap: 16px;
    & > :not(:last-child) {
      padding-bottom: 10px;
      border-bottom: 1px solid ${t=>t.theme.colors.primaryBodyText};
    }
  }
`,wz=D(sz)`
  fill: ${({$clicked:t})=>t?e=>e.theme.colors.primaryGreenColor:"none"};
  stroke: ${({$clicked:t})=>t?e=>e.theme.colors.primaryGreenColor:"#11101c"};

  cursor: pointer;
  transition: ${t=>t.theme.transition.customTrans};
  &:hover {
    stroke: ${t=>t.theme.colors.primaryGreenColor};
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`,Ub=t=>C.createElement("svg",{width:16,height:15,viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{d:"M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5795 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703Z",fill:"#FFC531",stroke:"#FFC531",strokeWidth:1.2})),xz=t=>C.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("g",{clipPath:"url(#clip0_31_1949)"},C.createElement("path",{d:"M14 6.66663C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66663C2 5.07533 2.63214 3.5492 3.75736 2.42399C4.88258 1.29877 6.4087 0.666626 8 0.666626C9.5913 0.666626 11.1174 1.29877 12.2426 2.42399C13.3679 3.5492 14 5.07533 14 6.66663Z",stroke:"#11101C",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),C.createElement("path",{d:"M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z",stroke:"#11101C",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),C.createElement("defs",null,C.createElement("clipPath",{id:"clip0_31_1949"},C.createElement("rect",{width:16,height:16,fill:"white"})))),Ez=D.article`
  max-width: 433px;
  @media (max-width: 1024px) {
    max-width: 100%;
    width: 100%;
    display: flex;
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`,Sz=D.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  min-width: 120px;
  @media (max-width: 1024px) {
    margin-bottom: 0;
    min-width: 100px;
  }
`,Cz=D.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 44px;
  height: 44px;
  background: ${t=>t.theme.colors.additionalGreenColor};
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${t=>t.theme.colors.primaryGreenColor};
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`,Tz=D.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
`,bz=D.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: ${t=>t.theme.colors.primaryBodyText};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Iz=D.span`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${t=>t.theme.colors.primaryBodyText};
`,kz=D.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${t=>t.theme.colors.secondaryBodyText};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Rz=({review:t})=>{const{reviewer:e,rating:n,comment:r}=t;return x.jsxs(Ez,{children:[x.jsxs(Sz,{children:[x.jsx(Cz,{children:t.avatar?x.jsx("img",{src:t.avatar}):x.jsx("span",{children:e.charAt(0).toUpperCase()})}),x.jsxs(Tz,{children:[x.jsx(bz,{children:e}),x.jsxs(Iz,{children:[x.jsx(Ub,{}),x.jsx("span",{children:n.toString().length===1?`${n}.0`:n})]})]})]}),x.jsx(kz,{children:r})]})},Pz=nv().shape({address:cr().required("Address is required"),phone:cr().required("Phone number is required").matches(/^\+?[0-9\s]+$/,"Invalid phone number").min(12,"Phone must be at least 12 characters").max(13,"Phone must be max 13 characters"),child_age:bb().integer("Child age must be an integer").min(0,"Child age must be a positive number").max(18,"Child age must be max 18").required("Child age is required"),time:cr().required("Time is required"),email:cr().email("Invalid email address").test("email-format","Email should contain '@' and a valid domain",t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)).required("Email is required"),parent_name:cr().required("Parent's name is required").min(2),comment:cr().required("Comment is required")}),Oz=D.div`
  border-radius: 30px;
  max-width: 600px;
  max-height: 700px;
  background-color: ${t=>t.theme.colors.headerText};
  position: relative;
  padding: 34px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
  @media (max-width: 768px) {
    gap: 20px;
  }
  @media (max-height: 768px) {
    max-height: 600px;
  }
  @media (max-height: 540px) {
    max-height: 400px;
  }
`,Az=D.div`
  h3 {
    max-width: 400px;
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: ${t=>t.theme.colors.primaryBodyText};
    margin-bottom: 20px;
    @media (max-height: 768px) {
      font-size: 30px;
      line-height: normal;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: ${t=>t.theme.colors.secondaryBodyText};
    @media (max-height: 768px) {
      font-size: 14px;
      line-height: normal;
    }
  }
`,Nz=D.div`
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
    color: ${t=>t.theme.colors.titleText};
    margin-bottom: 4px;
  }
  h4 {
    font-weight: 500;
    line-height: 150%;
    color: ${t=>t.theme.colors.primaryBodyText};
  }
`,Dz=D.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, auto);
  grid-row-gap: 10px;
  grid-column-gap: 8px;
  button {
    grid-column: span 2;
    margin-top: 20px;
  }
`,Mz=D.textarea`
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  grid-column: span 2;
  height: 86px;
  resize: none;
  &:focus,
  &:hover {
    outline: ${t=>t.theme.colors.primaryGreenColor} solid 1px;
  }
`,Lz=D.div`
  text-align: center;
  grid-column: span 2;
  color: ${t=>t.theme.colors.secondaryGreenColor};
`,jz=D.div`
  grid-column: ${({$isGridStretchRow:t})=>t?"span 2":"span 1"};
`,Ls=({name:t,type:e,placeholder:n,value:r,onChange:i,isGridStretchRow:s,formik:o})=>x.jsxs(jz,{$isGridStretchRow:s,children:[x.jsx(Pb,{name:t,type:e,placeholder:n,value:r,onChange:i}),o.touched[t]&&o.errors[t]&&x.jsx(td,{children:o.errors[t]})]}),Fz=({onClose:t,nanny:e})=>{const[n,r]=C.useState(!1),{name:i,avatar_url:s}=e,o=(l,u,c,d,f,p,g)=>{console.log("Form values:",l,u,c,d,f,p,g)},a=_b({initialValues:{address:"",phone:"",child_age:"",time:"",email:"",parent_name:"",comment:""},onSubmit:()=>{console.log("Form submitted"),o(a.values.address,a.values.phone,a.values.child_age,a.values.time,a.values.email,a.values.parent_name,a.values.comment),r(!0),setTimeout(()=>{t()},3e3)},validationSchema:Pz});return x.jsxs(Oz,{children:[x.jsx(Ab,{onClick:t}),x.jsxs(Az,{children:[x.jsx("h3",{children:"Make an appointment with a babysitter"}),x.jsx("p",{children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."})]}),x.jsxs(Nz,{children:[x.jsx("img",{src:s,alt:"Portrait of the babysitter"}),x.jsxs("div",{children:[x.jsx("span",{children:"Your nanny"}),x.jsx("h4",{children:i})]})]}),x.jsxs(Dz,{onSubmit:a.handleSubmit,children:[x.jsx(Ls,{value:a.values.address,name:"address",type:"text",placeholder:"Address",onChange:a.handleChange,formik:a}),x.jsx(Ls,{value:a.values.phone,name:"phone",type:"tel",placeholder:"+380",onChange:a.handleChange,formik:a}),x.jsx(Ls,{value:a.values.child_age,name:"child_age",type:"number",placeholder:"Child's age",onChange:a.handleChange,formik:a}),x.jsx(Ls,{value:a.values.time,name:"time",type:"time",placeholder:"00:00",onChange:a.handleChange,formik:a}),x.jsx(Ls,{value:a.values.email,name:"email",type:"email",placeholder:"Email",isGridStretchRow:"true",onChange:a.handleChange,formik:a}),x.jsx(Ls,{value:a.values.parent_name,name:"parent_name",type:"text",placeholder:"Father's or mother's name",isGridStretchRow:"true",onChange:a.handleChange,formik:a}),x.jsxs(x.Fragment,{children:[x.jsx(Mz,{value:a.values.comment,name:"comment",placeholder:"Comment",onChange:a.handleChange}),a.touched.comment&&a.errors.comment&&x.jsx(td,{children:a.errors.comment})]}),n?x.jsx(Lz,{children:"Your application has been successfully submitted. Please await confirmation via email."}):x.jsx(_n,{title:"Send",border:!1,padding:"14px",type:"submit"})]})]})},$z=D.div`
  position: relative;
`,Uz=D.div`
  position: absolute;
  bottom: 20px;
  left: 64px;
  color: ${t=>t.theme.colors.secondaryBodyText};
  font-size: 18px;
  span {
    color: ${t=>t.theme.colors.primaryBodyText};
    text-decoration: underline;
    cursor: pointer;
  }
`,zz=({onClose:t})=>{const e=$o(),[n,r]=C.useState(null),{openModal:i}=jy(),s=(a,l)=>{oC(No,a,l).then(({user:u})=>{const c=u.displayName||"";e(pi({name:c,email:u.email,id:u.uid,token:u.accessToken})),localStorage.setItem("userId",u.uid),t()}).catch(u=>{console.error("Error:",u.code),u.code==="auth/user-not-found"||u.code==="auth/invalid-credential"?r("The email or password you entered is incorrect. Please check your credentials or sign up."):r(u.message)})},o=()=>{i("registration")};return x.jsxs($z,{children:[x.jsx(rv,{onClose:t,title:"Add to favorites",handleClick:s,text:"To add nannies to your favorites, you need to log in to your account.",errorMessage:n}),x.jsxs(Uz,{children:["If you don't have an account yet, please"," ",x.jsx("span",{onClick:o,children:"register"}),"."]})]})},Bz=t=>{const e=new Date(t),n=new Date;let r=n.getFullYear()-e.getFullYear();const i=n.getMonth()-e.getMonth();return(i<0||i===0&&n.getDate()<e.getDate())&&r--,r},Wz=D.li`
  display: flex;
  gap: 3px;
  align-items: center;
  border-radius: 24px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  background: ${t=>t.theme.colors.mainBackground};
  color: ${t=>t.theme.colors.titleText};
  &:first-child p {
    text-decoration: underline;
  }
  p {
    text-decoration-skip-ink: none;
    color: ${t=>t.theme.colors.primaryBodyText};
  }
  @media (max-width: 1024px) {
    padding: 8px 10px;
    line-height: normal;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding: 4px;
    font-size: 12px;
  }
`,ma=({label:t,value:e})=>x.jsxs(Wz,{children:[x.jsx("span",{children:t}),x.jsx("p",{children:e})]}),Vz=({birthday:t,experience:e,kids_age:n,formattedCharacters:r,education:i})=>x.jsxs(gz,{children:[x.jsx(ma,{label:"Age:",value:Bz(t)}),x.jsx(ma,{label:"Experience:",value:e}),x.jsx(ma,{label:"Kids age:",value:n}),x.jsx(ma,{label:"Characters:",value:r}),x.jsx(ma,{label:"Education:",value:i})]}),Hz=({nanny:t})=>{const{currentUser:e,isAuth:n}=Jd(),[r,i]=C.useState(!1),{modalConfig:s,openModal:o,closeModal:a}=jy(),[l,u]=C.useState(null),[c,d]=C.useState(!1),f=$o(),p=nd.useMediaQuery({maxWidth:768}),{about:g,avatar_url:v,birthday:w,characters:m,education:h,experience:y,id:E,kids_age:T,location:_,name:S,price_per_hour:P,rating:k,reviews:A}=t,N=m.map(Z=>Z.charAt(0).toUpperCase()+Z.slice(1)).join(", "),G=()=>{o("appointment",t)};C.useEffect(()=>{(async()=>{try{if(e&&t){const Oe=(await gm(e.id)).some(de=>de.id===t.id);u(Oe)}}catch(Ie){console.error("Error fetching favorites",Ie)}})()},[e,t]);const j=async()=>{if(n)try{const Z=await gm(e.id);if(Z.some(Oe=>Oe.id===t.id))if(u(!1),d(!0),t.id){await M4(e.id,t.id);const Oe=e==null?void 0:e.favorites.filter(z=>z.id!==t.id),de={...e,favorites:Oe};f(pi(de))}else console.error("Error: Nanny id is null or undefined");else{const Oe=[...Z,t];await D4(e.id,Oe);const de={...e,favorites:Oe};f(pi(de)),u(!0)}}catch(Z){console.error("Error adding to favorites:",Z)}finally{d(!1)}else o("favorites")};return c?x.jsx(vf,{}):x.jsxs(oz,{children:[!p&&x.jsx(Jw,{children:x.jsx("img",{src:v,alt:"Portrait of the babysitter"})}),x.jsxs(az,{$fullInfo:r,children:[x.jsxs(lz,{children:[x.jsxs(uz,{children:[p&&x.jsx(Jw,{children:x.jsx("img",{src:v,alt:"Portrait of the babysitter"})}),x.jsxs(cz,{children:[x.jsx("span",{children:"Nanny"}),x.jsx("h2",{children:S})]}),x.jsxs(dz,{children:[x.jsxs(fz,{children:[x.jsxs(hz,{children:[x.jsx(xz,{}),x.jsx("p",{children:_})]}),x.jsxs(pz,{children:[x.jsx(Ub,{}),x.jsxs("p",{children:["Rating: ",k]})]}),x.jsxs(mz,{children:["Price / 1 hour:",x.jsxs("span",{children:[" ",P,"$"]})]})]}),x.jsx(wz,{onClick:j,$clicked:l})]})]}),x.jsx(Vz,{birthday:w,experience:y,kids_age:T,formattedCharacters:N,education:h}),!p&&x.jsx(Zw,{children:g})]}),r&&x.jsxs(x.Fragment,{children:[p&&x.jsx(Zw,{children:g}),x.jsx(_z,{children:A.map((Z,Ie)=>x.jsx(Rz,{review:Z},Ie))})]}),x.jsxs(yz,{children:[r&&x.jsx(_n,{title:"Make an appointment",border:!1,padding:"14px 28px",onClick:G}),x.jsx(vz,{onClick:()=>i(!r),children:r?"Show less":"Read more"})]})]}),s.isOpen&&s.formType==="appointment"&&x.jsx(za,{onClose:a,children:x.jsx(Fz,{onClose:a,nanny:s.selectedNanny})}),s.isOpen&&s.formType==="favorites"&&x.jsx(za,{onClose:a,children:x.jsx(zz,{onClose:a})})]})},Gz=D.div`
  display: flex;
  flex-direction: column;
  & > button {
    align-self: center;
  }
`,Kz=D.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
  @media (max-width: 1024px) {
    gap: 24px;
    margin-bottom: 40px;
  }
`,Yz=()=>(window.innerWidth-1184)/2,qz=D.button`
  position: fixed;
  bottom: 60px;
  right: ${Yz()}px;
  z-index: 999;
  border-radius: 50%;
  border: none;
  background-color: rgba(16, 57, 49, 0.5);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    right: 20px;
    bottom: 20px;
    width: 40px;
    height: 40px;
  }
`,Qz=D(Fb)`
  width: 24px;
  height: 24px;
  transform: rotate(180deg);
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`,Xz=()=>{const[t,e]=C.useState(!1),n=()=>{window.scrollY>200?e(!0):e(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return C.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]),x.jsx(x.Fragment,{children:t&&x.jsx(qz,{onClick:r,children:x.jsx(Qz,{})})})},zb=({sortBy:t,nannies:e})=>{const[n,r]=C.useState([]),i=0,s=[...e].sort((l,u)=>{switch(t){case"a-z":return l.name.localeCompare(u.name);case"z-a":return u.name.localeCompare(l.name);case"asc":return l.price_per_hour-u.price_per_hour;case"desc":return u.price_per_hour-l.price_per_hour;case"popular":return u.rating-l.rating;case"not-popular":return l.rating-u.rating;case"show-all":default:return 0}});C.useEffect(()=>{r(s.slice(i,i+3))},[t,e,i]);const o=()=>{const l=[...n,...s.slice(i+n.length,i+n.length+3)];r(l)},a=s.length>i+n.length;return x.jsxs(Gz,{children:[x.jsx(Kz,{children:n.map(l=>x.jsx(Hz,{nanny:l},l.id))}),a&&x.jsx(_n,{title:"Load More",border:!1,padding:"14px 40px",onClick:o}),x.jsx(Xz,{})]})},e1=D.section`
  max-width: 1184px;
  margin: 64px auto;
  @media (max-width: 1210px) {
    padding-inline: 30px;
  }
  @media (max-width: 1024px) {
    padding-inline: 20px;
    margin-block: 40px;
  }
  @media (max-width: 768px) {
    margin-block: 20px;
  }
`,Jz=D.div`
  font-size: 34px;
  width: 1000px;
  height: 500px;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 0 auto;
`,Zz=D(Cd)`
  color: ${t=>t.theme.colors.titleText};
  &:hover {
    text-decoration: underline;
  }
`,e7=()=>{const[t,e]=C.useState(null),{currentUser:n}=Rg(Wg),[r,i]=C.useState([]),[s,o]=C.useState(!0);C.useEffect(()=>{(async()=>{try{if(n){o(!0);const u=await gm(n.id);i(u),console.log("favorites",u)}}catch(u){console.error("Error fetching favorites",u)}finally{o(!1)}})()},[n]);const a=l=>{console.log("Selected option:",l),e(l)};return s?x.jsx(vf,{}):r.length===0?x.jsx(e1,{children:x.jsx(Jz,{children:x.jsxs("p",{children:["Your list of favorite nannies is empty. Please go to the"," ",x.jsx(Zz,{to:"/BabySitterHub/nannies",children:"Catalog"})," and choose a suitable nanny for your child."]})})}):x.jsxs(e1,{children:[x.jsx($b,{onSelect:a}),x.jsx(zb,{sortBy:t,nannies:r})]})},t7=D.section`
  max-width: 1184px;
  margin: 64px auto;
  @media (max-width: 1210px) {
    padding-inline: 30px;
  }
  @media (max-width: 1024px) {
    padding-inline: 20px;
    margin-block: 40px;
  }
  @media (max-width: 768px) {
    margin-block: 20px;
  }
`,n7=()=>{const[t,e]=C.useState(null),[n,r]=C.useState([]),[i,s]=C.useState(!0);C.useEffect(()=>{const a=Sl(Cl,"/nannies"),l=x4(a,w4()),u=y4(l,c=>{const d=c.val();if(d!==null){const f=Object.values(d);r(f),s(!1)}});return()=>{u()}},[]);const o=a=>{e(a)};return i?x.jsx(vf,{}):x.jsxs(t7,{children:[x.jsx($b,{onSelect:o}),x.jsx(zb,{sortBy:t,nannies:n})]})},Bb=C.createContext(null);function r7({children:t}){const{currentUser:e}=Rg(Wg),[n]=C.useState(e||null);return x.jsx(Bb.Provider,{value:n,children:t})}const i7=()=>{const t=C.useContext(Bb),n=!!localStorage.getItem("userToken");return{currentUser:t,name:t==null?void 0:t.name,isAuth:n}};function s7({children:t}){const{isAuth:e}=i7(),n=Ig();return C.useEffect(()=>{e||n("/BabySitterHub",{replace:!0})},[e,n]),e?t:null}const o7=DP([{element:x.jsx(U8,{}),errorElement:x.jsx(F4,{}),children:[{path:"/BabySitterHub",element:x.jsx(Xw,{})},{path:"/BabySitterHub/",element:x.jsx(Xw,{})},{path:"/BabySitterHub/nannies",element:x.jsx(n7,{})},{path:"/BabySitterHub/favorites",element:x.jsx(s7,{children:x.jsx(e7,{})})}]}]);Lh.createRoot(document.getElementById("root")).render(x.jsx(ot.StrictMode,{children:x.jsx(mO,{store:SN,children:x.jsxs(mA,{theme:j4,children:[x.jsx(L4,{}),x.jsx(r7,{children:x.jsx(BP,{router:o7})})]})})}))});export default a7();
