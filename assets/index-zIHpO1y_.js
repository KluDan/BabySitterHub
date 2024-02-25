var Gb=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var c7=Gb((ln,un)=>{function e1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Kb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function od(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var t1={exports:{}},ad={},n1={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kl=Symbol.for("react.element"),Yb=Symbol.for("react.portal"),qb=Symbol.for("react.fragment"),Qb=Symbol.for("react.strict_mode"),Xb=Symbol.for("react.profiler"),Jb=Symbol.for("react.provider"),Zb=Symbol.for("react.context"),eI=Symbol.for("react.forward_ref"),tI=Symbol.for("react.suspense"),nI=Symbol.for("react.memo"),rI=Symbol.for("react.lazy"),lv=Symbol.iterator;function iI(t){return t===null||typeof t!="object"?null:(t=lv&&t[lv]||t["@@iterator"],typeof t=="function"?t:null)}var r1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i1=Object.assign,s1={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=s1,this.updater=n||r1}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o1(){}o1.prototype=Mo.prototype;function km(t,e,n){this.props=t,this.context=e,this.refs=s1,this.updater=n||r1}var Rm=km.prototype=new o1;Rm.constructor=km;i1(Rm,Mo.prototype);Rm.isPureReactComponent=!0;var uv=Array.isArray,a1=Object.prototype.hasOwnProperty,Pm={current:null},l1={key:!0,ref:!0,__self:!0,__source:!0};function u1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)a1.call(e,r)&&!l1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:kl,type:t,key:s,ref:o,props:i,_owner:Pm.current}}function sI(t,e){return{$$typeof:kl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Om(t){return typeof t=="object"&&t!==null&&t.$$typeof===kl}function oI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cv=/\/+/g;function Tf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oI(""+t.key):e.toString(36)}function bu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case kl:case Yb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Tf(o,0):r,uv(i)?(n="",t!=null&&(n=t.replace(cv,"$&/")+"/"),bu(i,e,n,"",function(u){return u})):i!=null&&(Om(i)&&(i=sI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",uv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Tf(s,a);o+=bu(s,e,n,l,i)}else if(l=iI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Tf(s,a++),o+=bu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zl(t,e,n){if(t==null)return t;var r=[],i=0;return bu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function aI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},Iu={transition:null},lI={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:Iu,ReactCurrentOwner:Pm};Ee.Children={map:Zl,forEach:function(t,e,n){Zl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zl(t,function(){e++}),e},toArray:function(t){return Zl(t,function(e){return e})||[]},only:function(t){if(!Om(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ee.Component=Mo;Ee.Fragment=qb;Ee.Profiler=Xb;Ee.PureComponent=km;Ee.StrictMode=Qb;Ee.Suspense=tI;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lI;Ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=i1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)a1.call(e,l)&&!l1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:kl,type:t.type,key:i,ref:s,props:r,_owner:o}};Ee.createContext=function(t){return t={$$typeof:Zb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Jb,_context:t},t.Consumer=t};Ee.createElement=u1;Ee.createFactory=function(t){var e=u1.bind(null,t);return e.type=t,e};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(t){return{$$typeof:eI,render:t}};Ee.isValidElement=Om;Ee.lazy=function(t){return{$$typeof:rI,_payload:{_status:-1,_result:t},_init:aI}};Ee.memo=function(t,e){return{$$typeof:nI,type:t,compare:e===void 0?null:e}};Ee.startTransition=function(t){var e=Iu.transition;Iu.transition={};try{t()}finally{Iu.transition=e}};Ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ee.useCallback=function(t,e){return Wt.current.useCallback(t,e)};Ee.useContext=function(t){return Wt.current.useContext(t)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};Ee.useEffect=function(t,e){return Wt.current.useEffect(t,e)};Ee.useId=function(){return Wt.current.useId()};Ee.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};Ee.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};Ee.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};Ee.useMemo=function(t,e){return Wt.current.useMemo(t,e)};Ee.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};Ee.useRef=function(t){return Wt.current.useRef(t)};Ee.useState=function(t){return Wt.current.useState(t)};Ee.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};Ee.useTransition=function(){return Wt.current.useTransition()};Ee.version="18.2.0";n1.exports=Ee;var C=n1.exports;const ot=od(C),Lh=e1({__proto__:null,default:ot},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uI=C,cI=Symbol.for("react.element"),dI=Symbol.for("react.fragment"),fI=Object.prototype.hasOwnProperty,hI=uI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pI={key:!0,ref:!0,__self:!0,__source:!0};function c1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fI.call(e,r)&&!pI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cI,type:t,key:s,ref:o,props:i,_owner:hI.current}}ad.Fragment=dI;ad.jsx=c1;ad.jsxs=c1;t1.exports=ad;var w=t1.exports,jh={},d1={exports:{}},pn={},f1={exports:{}},h1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var q=z.length;z.push(K);e:for(;0<q;){var ne=q-1>>>1,se=z[ne];if(0<i(se,K))z[ne]=K,z[q]=se,q=ne;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],q=z.pop();if(q!==K){z[0]=q;e:for(var ne=0,se=z.length,at=se>>>1;ne<at;){var Re=2*(ne+1)-1,Le=z[Re],Se=Re+1,$e=z[Se];if(0>i(Le,q))Se<se&&0>i($e,Le)?(z[ne]=$e,z[Se]=q,ne=Se):(z[ne]=Le,z[Re]=q,ne=Re);else if(Se<se&&0>i($e,q))z[ne]=$e,z[Se]=q,ne=Se;else break e}}return K}function i(z,K){var q=z.sortIndex-K.sortIndex;return q!==0?q:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,g=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(z){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=z)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function E(z){if(v=!1,y(z),!g)if(n(l)!==null)g=!0,Oe(T);else{var K=n(u);K!==null&&de(E,K.startTime-z)}}function T(z,K){g=!1,v&&(v=!1,m(P),P=-1),p=!0;var q=f;try{for(y(K),d=n(l);d!==null&&(!(d.expirationTime>K)||z&&!D());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var se=ne(d.expirationTime<=K);K=t.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&r(l),y(K)}else r(l);d=n(l)}if(d!==null)var at=!0;else{var Re=n(u);Re!==null&&de(E,Re.startTime-K),at=!1}return at}finally{d=null,f=q,p=!1}}var _=!1,S=null,P=-1,k=5,A=-1;function D(){return!(t.unstable_now()-A<k)}function G(){if(S!==null){var z=t.unstable_now();A=z;var K=!0;try{K=S(!0,z)}finally{K?j():(_=!1,S=null)}}else _=!1}var j;if(typeof h=="function")j=function(){h(G)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,Ie=Z.port2;Z.port1.onmessage=G,j=function(){Ie.postMessage(null)}}else j=function(){x(G,0)};function Oe(z){S=z,_||(_=!0,j())}function de(z,K){P=x(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Oe(T))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var q=f;f=K;try{return z()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=f;f=z;try{return K()}finally{f=q}},t.unstable_scheduleCallback=function(z,K,q){var ne=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ne+q:ne):q=ne,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=q+se,z={id:c++,callback:K,priorityLevel:z,startTime:q,expirationTime:se,sortIndex:-1},q>ne?(z.sortIndex=q,e(u,z),n(l)===null&&z===n(u)&&(v?(m(P),P=-1):v=!0,de(E,q-ne))):(z.sortIndex=se,e(l,z),g||p||(g=!0,Oe(T))),z},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(z){var K=f;return function(){var q=f;f=K;try{return z.apply(this,arguments)}finally{f=q}}}})(h1);f1.exports=h1;var mI=f1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p1=C,dn=mI;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m1=new Set,Ba={};function gs(t,e){fo(t,e),fo(t+"Capture",e)}function fo(t,e){for(Ba[t]=e,t=0;t<e.length;t++)m1.add(e[t])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fh=Object.prototype.hasOwnProperty,gI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dv={},fv={};function yI(t){return Fh.call(fv,t)?!0:Fh.call(dv,t)?!1:gI.test(t)?fv[t]=!0:(dv[t]=!0,!1)}function vI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _I(t,e,n,r){if(e===null||typeof e>"u"||vI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];At[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Am=/[\-:]([a-z])/g;function Nm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Am,Nm);At[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Am,Nm);At[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Am,Nm);At[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dm(t,e,n,r){var i=At.hasOwnProperty(e)?At[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_I(e,n,i,r)&&(n=null),r||i===null?yI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kr=p1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eu=Symbol.for("react.element"),js=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),Mm=Symbol.for("react.strict_mode"),$h=Symbol.for("react.profiler"),g1=Symbol.for("react.provider"),y1=Symbol.for("react.context"),Lm=Symbol.for("react.forward_ref"),Uh=Symbol.for("react.suspense"),zh=Symbol.for("react.suspense_list"),jm=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),v1=Symbol.for("react.offscreen"),hv=Symbol.iterator;function Qo(t){return t===null||typeof t!="object"?null:(t=hv&&t[hv]||t["@@iterator"],typeof t=="function"?t:null)}var et=Object.assign,bf;function ga(t){if(bf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bf=e&&e[1]||""}return`
`+bf+t}var If=!1;function kf(t,e){if(!t||If)return"";If=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{If=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ga(t):""}function wI(t){switch(t.tag){case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 2:case 15:return t=kf(t.type,!1),t;case 11:return t=kf(t.type.render,!1),t;case 1:return t=kf(t.type,!0),t;default:return""}}function Bh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fs:return"Fragment";case js:return"Portal";case $h:return"Profiler";case Mm:return"StrictMode";case Uh:return"Suspense";case zh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y1:return(t.displayName||"Context")+".Consumer";case g1:return(t._context.displayName||"Context")+".Provider";case Lm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jm:return e=t.displayName||null,e!==null?e:Bh(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return Bh(t(e))}catch{}}return null}function xI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bh(e);case 8:return e===Mm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function EI(t){var e=_1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tu(t){t._valueTracker||(t._valueTracker=EI(t))}function w1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Qu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wh(t,e){var n=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function x1(t,e){e=e.checked,e!=null&&Dm(t,"checked",e,!1)}function Vh(t,e){x1(t,e);var n=ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hh(t,e.type,ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hh(t,e,n){(e!=="number"||Qu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function to(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(ya(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ci(n)}}function E1(t,e){var n=ci(e.value),r=ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nu,C1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nu=nu||document.createElement("div"),nu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SI=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){SI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function T1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function b1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=T1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var CI=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yh(t,e){if(e){if(CI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function qh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qh=null;function Fm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xh=null,no=null,ro=null;function vv(t){if(t=Ol(t)){if(typeof Xh!="function")throw Error(L(280));var e=t.stateNode;e&&(e=fd(e),Xh(t.stateNode,t.type,e))}}function I1(t){no?ro?ro.push(t):ro=[t]:no=t}function k1(){if(no){var t=no,e=ro;if(ro=no=null,vv(t),e)for(t=0;t<e.length;t++)vv(e[t])}}function R1(t,e){return t(e)}function P1(){}var Rf=!1;function O1(t,e,n){if(Rf)return t(e,n);Rf=!0;try{return R1(t,e,n)}finally{Rf=!1,(no!==null||ro!==null)&&(P1(),k1())}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var r=fd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Jh=!1;if(wr)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){Jh=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{Jh=!1}function TI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ta=!1,Xu=null,Ju=!1,Zh=null,bI={onError:function(t){Ta=!0,Xu=t}};function II(t,e,n,r,i,s,o,a,l){Ta=!1,Xu=null,TI.apply(bI,arguments)}function kI(t,e,n,r,i,s,o,a,l){if(II.apply(this,arguments),Ta){if(Ta){var u=Xu;Ta=!1,Xu=null}else throw Error(L(198));Ju||(Ju=!0,Zh=u)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function A1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _v(t){if(ys(t)!==t)throw Error(L(188))}function RI(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _v(i),t;if(s===r)return _v(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function N1(t){return t=RI(t),t!==null?D1(t):null}function D1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=D1(t);if(e!==null)return e;t=t.sibling}return null}var M1=dn.unstable_scheduleCallback,wv=dn.unstable_cancelCallback,PI=dn.unstable_shouldYield,OI=dn.unstable_requestPaint,st=dn.unstable_now,AI=dn.unstable_getCurrentPriorityLevel,$m=dn.unstable_ImmediatePriority,L1=dn.unstable_UserBlockingPriority,Zu=dn.unstable_NormalPriority,NI=dn.unstable_LowPriority,j1=dn.unstable_IdlePriority,ld=null,Jn=null;function DI(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(ld,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:jI,MI=Math.log,LI=Math.LN2;function jI(t){return t>>>=0,t===0?32:31-(MI(t)/LI|0)|0}var ru=64,iu=4194304;function va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=va(a):(s&=o,s!==0&&(r=va(s)))}else o=n&~i,o!==0?r=va(o):s!==0&&(r=va(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$n(e),i=1<<n,r|=t[n],e&=~i;return r}function FI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $I(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=FI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ep(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function F1(){var t=ru;return ru<<=1,!(ru&4194240)&&(ru=64),t}function Pf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function UI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Um(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ne=0;function $1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var U1,zm,z1,B1,W1,tp=!1,su=[],Yr=null,qr=null,Qr=null,Ha=new Map,Ga=new Map,Ur=[],zI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xv(t,e){switch(t){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":Ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function Jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ol(e),e!==null&&zm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function BI(t,e,n,r,i){switch(e){case"focusin":return Yr=Jo(Yr,t,e,n,r,i),!0;case"dragenter":return qr=Jo(qr,t,e,n,r,i),!0;case"mouseover":return Qr=Jo(Qr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ha.set(s,Jo(Ha.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ga.set(s,Jo(Ga.get(s)||null,t,e,n,r,i)),!0}return!1}function V1(t){var e=ji(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=A1(n),e!==null){t.blockedOn=e,W1(t.priority,function(){z1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ku(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=np(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qh=r,n.target.dispatchEvent(r),Qh=null}else return e=Ol(n),e!==null&&zm(e),t.blockedOn=n,!1;e.shift()}return!0}function Ev(t,e,n){ku(t)&&n.delete(e)}function WI(){tp=!1,Yr!==null&&ku(Yr)&&(Yr=null),qr!==null&&ku(qr)&&(qr=null),Qr!==null&&ku(Qr)&&(Qr=null),Ha.forEach(Ev),Ga.forEach(Ev)}function Zo(t,e){t.blockedOn===e&&(t.blockedOn=null,tp||(tp=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,WI)))}function Ka(t){function e(i){return Zo(i,t)}if(0<su.length){Zo(su[0],t);for(var n=1;n<su.length;n++){var r=su[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yr!==null&&Zo(Yr,t),qr!==null&&Zo(qr,t),Qr!==null&&Zo(Qr,t),Ha.forEach(e),Ga.forEach(e),n=0;n<Ur.length;n++)r=Ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ur.length&&(n=Ur[0],n.blockedOn===null);)V1(n),n.blockedOn===null&&Ur.shift()}var io=kr.ReactCurrentBatchConfig,tc=!0;function VI(t,e,n,r){var i=Ne,s=io.transition;io.transition=null;try{Ne=1,Bm(t,e,n,r)}finally{Ne=i,io.transition=s}}function HI(t,e,n,r){var i=Ne,s=io.transition;io.transition=null;try{Ne=4,Bm(t,e,n,r)}finally{Ne=i,io.transition=s}}function Bm(t,e,n,r){if(tc){var i=np(t,e,n,r);if(i===null)Uf(t,e,r,nc,n),xv(t,r);else if(BI(i,t,e,n,r))r.stopPropagation();else if(xv(t,r),e&4&&-1<zI.indexOf(t)){for(;i!==null;){var s=Ol(i);if(s!==null&&U1(s),s=np(t,e,n,r),s===null&&Uf(t,e,r,nc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uf(t,e,r,null,n)}}var nc=null;function np(t,e,n,r){if(nc=null,t=Fm(r),t=ji(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=A1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nc=t,null}function H1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AI()){case $m:return 1;case L1:return 4;case Zu:case NI:return 16;case j1:return 536870912;default:return 16}default:return 16}}var Gr=null,Wm=null,Ru=null;function G1(){if(Ru)return Ru;var t,e=Wm,n=e.length,r,i="value"in Gr?Gr.value:Gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ru=i.slice(t,1<r?1-r:void 0)}function Pu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ou(){return!0}function Sv(){return!1}function mn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ou:Sv,this.isPropagationStopped=Sv,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ou)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ou)},persist:function(){},isPersistent:ou}),e}var Lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vm=mn(Lo),Pl=et({},Lo,{view:0,detail:0}),GI=mn(Pl),Of,Af,ea,ud=et({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(Of=t.screenX-ea.screenX,Af=t.screenY-ea.screenY):Af=Of=0,ea=t),Of)},movementY:function(t){return"movementY"in t?t.movementY:Af}}),Cv=mn(ud),KI=et({},ud,{dataTransfer:0}),YI=mn(KI),qI=et({},Pl,{relatedTarget:0}),Nf=mn(qI),QI=et({},Lo,{animationName:0,elapsedTime:0,pseudoElement:0}),XI=mn(QI),JI=et({},Lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZI=mn(JI),ek=et({},Lo,{data:0}),Tv=mn(ek),tk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ik(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rk[t])?!!e[t]:!1}function Hm(){return ik}var sk=et({},Pl,{key:function(t){if(t.key){var e=tk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hm,charCode:function(t){return t.type==="keypress"?Pu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ok=mn(sk),ak=et({},ud,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bv=mn(ak),lk=et({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hm}),uk=mn(lk),ck=et({},Lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),dk=mn(ck),fk=et({},ud,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hk=mn(fk),pk=[9,13,27,32],Gm=wr&&"CompositionEvent"in window,ba=null;wr&&"documentMode"in document&&(ba=document.documentMode);var mk=wr&&"TextEvent"in window&&!ba,K1=wr&&(!Gm||ba&&8<ba&&11>=ba),Iv=" ",kv=!1;function Y1(t,e){switch(t){case"keyup":return pk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function q1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function gk(t,e){switch(t){case"compositionend":return q1(e);case"keypress":return e.which!==32?null:(kv=!0,Iv);case"textInput":return t=e.data,t===Iv&&kv?null:t;default:return null}}function yk(t,e){if($s)return t==="compositionend"||!Gm&&Y1(t,e)?(t=G1(),Ru=Wm=Gr=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K1&&e.locale!=="ko"?null:e.data;default:return null}}var vk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vk[t.type]:e==="textarea"}function Q1(t,e,n,r){I1(r),e=rc(e,"onChange"),0<e.length&&(n=new Vm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ia=null,Ya=null;function _k(t){ax(t,0)}function cd(t){var e=Bs(t);if(w1(e))return t}function wk(t,e){if(t==="change")return e}var X1=!1;if(wr){var Df;if(wr){var Mf="oninput"in document;if(!Mf){var Pv=document.createElement("div");Pv.setAttribute("oninput","return;"),Mf=typeof Pv.oninput=="function"}Df=Mf}else Df=!1;X1=Df&&(!document.documentMode||9<document.documentMode)}function Ov(){Ia&&(Ia.detachEvent("onpropertychange",J1),Ya=Ia=null)}function J1(t){if(t.propertyName==="value"&&cd(Ya)){var e=[];Q1(e,Ya,t,Fm(t)),O1(_k,e)}}function xk(t,e,n){t==="focusin"?(Ov(),Ia=e,Ya=n,Ia.attachEvent("onpropertychange",J1)):t==="focusout"&&Ov()}function Ek(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cd(Ya)}function Sk(t,e){if(t==="click")return cd(e)}function Ck(t,e){if(t==="input"||t==="change")return cd(e)}function Tk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:Tk;function qa(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fh.call(e,i)||!Wn(t[i],e[i]))return!1}return!0}function Av(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nv(t,e){var n=Av(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Av(n)}}function Z1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Z1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ex(){for(var t=window,e=Qu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qu(t.document)}return e}function Km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bk(t){var e=ex(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Z1(n.ownerDocument.documentElement,n)){if(r!==null&&Km(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Nv(n,s);var o=Nv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ik=wr&&"documentMode"in document&&11>=document.documentMode,Us=null,rp=null,ka=null,ip=!1;function Dv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ip||Us==null||Us!==Qu(r)||(r=Us,"selectionStart"in r&&Km(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ka&&qa(ka,r)||(ka=r,r=rc(rp,"onSelect"),0<r.length&&(e=new Vm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Us)))}function au(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zs={animationend:au("Animation","AnimationEnd"),animationiteration:au("Animation","AnimationIteration"),animationstart:au("Animation","AnimationStart"),transitionend:au("Transition","TransitionEnd")},Lf={},tx={};wr&&(tx=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function dd(t){if(Lf[t])return Lf[t];if(!zs[t])return t;var e=zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tx)return Lf[t]=e[n];return t}var nx=dd("animationend"),rx=dd("animationiteration"),ix=dd("animationstart"),sx=dd("transitionend"),ox=new Map,Mv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wi(t,e){ox.set(t,e),gs(e,[t])}for(var jf=0;jf<Mv.length;jf++){var Ff=Mv[jf],kk=Ff.toLowerCase(),Rk=Ff[0].toUpperCase()+Ff.slice(1);wi(kk,"on"+Rk)}wi(nx,"onAnimationEnd");wi(rx,"onAnimationIteration");wi(ix,"onAnimationStart");wi("dblclick","onDoubleClick");wi("focusin","onFocus");wi("focusout","onBlur");wi(sx,"onTransitionEnd");fo("onMouseEnter",["mouseout","mouseover"]);fo("onMouseLeave",["mouseout","mouseover"]);fo("onPointerEnter",["pointerout","pointerover"]);fo("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pk=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Lv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kI(r,e,void 0,t),t.currentTarget=null}function ax(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Lv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Lv(i,a,u),s=l}}}if(Ju)throw t=Zh,Ju=!1,Zh=null,t}function Ve(t,e){var n=e[up];n===void 0&&(n=e[up]=new Set);var r=t+"__bubble";n.has(r)||(lx(e,t,2,!1),n.add(r))}function $f(t,e,n){var r=0;e&&(r|=4),lx(n,t,r,e)}var lu="_reactListening"+Math.random().toString(36).slice(2);function Qa(t){if(!t[lu]){t[lu]=!0,m1.forEach(function(n){n!=="selectionchange"&&(Pk.has(n)||$f(n,!1,t),$f(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lu]||(e[lu]=!0,$f("selectionchange",!1,e))}}function lx(t,e,n,r){switch(H1(e)){case 1:var i=VI;break;case 4:i=HI;break;default:i=Bm}n=i.bind(null,e,n,t),i=void 0,!Jh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ji(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}O1(function(){var u=s,c=Fm(n),d=[];e:{var f=ox.get(t);if(f!==void 0){var p=Vm,g=t;switch(t){case"keypress":if(Pu(n)===0)break e;case"keydown":case"keyup":p=ok;break;case"focusin":g="focus",p=Nf;break;case"focusout":g="blur",p=Nf;break;case"beforeblur":case"afterblur":p=Nf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=YI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uk;break;case nx:case rx:case ix:p=XI;break;case sx:p=dk;break;case"scroll":p=GI;break;case"wheel":p=hk;break;case"copy":case"cut":case"paste":p=ZI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bv}var v=(e&4)!==0,x=!v&&t==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,y;h!==null;){y=h;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,m!==null&&(E=Va(h,m),E!=null&&v.push(Xa(h,E,y)))),x)break;h=h.return}0<v.length&&(f=new p(f,g,null,n,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Qh&&(g=n.relatedTarget||n.fromElement)&&(ji(g)||g[xr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?ji(g):null,g!==null&&(x=ys(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=Cv,E="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=bv,E="onPointerLeave",m="onPointerEnter",h="pointer"),x=p==null?f:Bs(p),y=g==null?f:Bs(g),f=new v(E,h+"leave",p,n,c),f.target=x,f.relatedTarget=y,E=null,ji(c)===u&&(v=new v(m,h+"enter",g,n,c),v.target=y,v.relatedTarget=x,E=v),x=E,p&&g)t:{for(v=p,m=g,h=0,y=v;y;y=As(y))h++;for(y=0,E=m;E;E=As(E))y++;for(;0<h-y;)v=As(v),h--;for(;0<y-h;)m=As(m),y--;for(;h--;){if(v===m||m!==null&&v===m.alternate)break t;v=As(v),m=As(m)}v=null}else v=null;p!==null&&jv(d,f,p,v,!1),g!==null&&x!==null&&jv(d,x,g,v,!0)}}e:{if(f=u?Bs(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=wk;else if(Rv(f))if(X1)T=Ck;else{T=Ek;var _=xk}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=Sk);if(T&&(T=T(t,u))){Q1(d,T,n,c);break e}_&&_(t,f,u),t==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Hh(f,"number",f.value)}switch(_=u?Bs(u):window,t){case"focusin":(Rv(_)||_.contentEditable==="true")&&(Us=_,rp=u,ka=null);break;case"focusout":ka=rp=Us=null;break;case"mousedown":ip=!0;break;case"contextmenu":case"mouseup":case"dragend":ip=!1,Dv(d,n,c);break;case"selectionchange":if(Ik)break;case"keydown":case"keyup":Dv(d,n,c)}var S;if(Gm)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $s?Y1(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(K1&&n.locale!=="ko"&&($s||P!=="onCompositionStart"?P==="onCompositionEnd"&&$s&&(S=G1()):(Gr=c,Wm="value"in Gr?Gr.value:Gr.textContent,$s=!0)),_=rc(u,P),0<_.length&&(P=new Tv(P,t,null,n,c),d.push({event:P,listeners:_}),S?P.data=S:(S=q1(n),S!==null&&(P.data=S)))),(S=mk?gk(t,n):yk(t,n))&&(u=rc(u,"onBeforeInput"),0<u.length&&(c=new Tv("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}ax(d,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Va(t,n),s!=null&&r.unshift(Xa(t,s,i)),s=Va(t,e),s!=null&&r.push(Xa(t,s,i))),t=t.return}return r}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Va(n,s),l!=null&&o.unshift(Xa(n,l,a))):i||(l=Va(n,s),l!=null&&o.push(Xa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ok=/\r\n?/g,Ak=/\u0000|\uFFFD/g;function Fv(t){return(typeof t=="string"?t:""+t).replace(Ok,`
`).replace(Ak,"")}function uu(t,e,n){if(e=Fv(e),Fv(t)!==e&&n)throw Error(L(425))}function ic(){}var sp=null,op=null;function ap(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lp=typeof setTimeout=="function"?setTimeout:void 0,Nk=typeof clearTimeout=="function"?clearTimeout:void 0,$v=typeof Promise=="function"?Promise:void 0,Dk=typeof queueMicrotask=="function"?queueMicrotask:typeof $v<"u"?function(t){return $v.resolve(null).then(t).catch(Mk)}:lp;function Mk(t){setTimeout(function(){throw t})}function zf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ka(e)}function Xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var jo=Math.random().toString(36).slice(2),Xn="__reactFiber$"+jo,Ja="__reactProps$"+jo,xr="__reactContainer$"+jo,up="__reactEvents$"+jo,Lk="__reactListeners$"+jo,jk="__reactHandles$"+jo;function ji(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xr]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uv(t);t!==null;){if(n=t[Xn])return n;t=Uv(t)}return e}t=n,n=t.parentNode}return null}function Ol(t){return t=t[Xn]||t[xr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function fd(t){return t[Ja]||null}var cp=[],Ws=-1;function xi(t){return{current:t}}function Ye(t){0>Ws||(t.current=cp[Ws],cp[Ws]=null,Ws--)}function We(t,e){Ws++,cp[Ws]=t.current,t.current=e}var di={},Ft=xi(di),Qt=xi(!1),Ji=di;function ho(t,e){var n=t.type.contextTypes;if(!n)return di;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Xt(t){return t=t.childContextTypes,t!=null}function sc(){Ye(Qt),Ye(Ft)}function zv(t,e,n){if(Ft.current!==di)throw Error(L(168));We(Ft,e),We(Qt,n)}function ux(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,xI(t)||"Unknown",i));return et({},n,r)}function oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||di,Ji=Ft.current,We(Ft,t),We(Qt,Qt.current),!0}function Bv(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=ux(t,e,Ji),r.__reactInternalMemoizedMergedChildContext=t,Ye(Qt),Ye(Ft),We(Ft,t)):Ye(Qt),We(Qt,n)}var ur=null,hd=!1,Bf=!1;function cx(t){ur===null?ur=[t]:ur.push(t)}function Fk(t){hd=!0,cx(t)}function Ei(){if(!Bf&&ur!==null){Bf=!0;var t=0,e=Ne;try{var n=ur;for(Ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ur=null,hd=!1}catch(i){throw ur!==null&&(ur=ur.slice(t+1)),M1($m,Ei),i}finally{Ne=e,Bf=!1}}return null}var Vs=[],Hs=0,ac=null,lc=0,xn=[],En=0,Zi=null,dr=1,fr="";function Pi(t,e){Vs[Hs++]=lc,Vs[Hs++]=ac,ac=t,lc=e}function dx(t,e,n){xn[En++]=dr,xn[En++]=fr,xn[En++]=Zi,Zi=t;var r=dr;t=fr;var i=32-$n(r)-1;r&=~(1<<i),n+=1;var s=32-$n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dr=1<<32-$n(e)+i|n<<i|r,fr=s+t}else dr=1<<s|n<<i|r,fr=t}function Ym(t){t.return!==null&&(Pi(t,1),dx(t,1,0))}function qm(t){for(;t===ac;)ac=Vs[--Hs],Vs[Hs]=null,lc=Vs[--Hs],Vs[Hs]=null;for(;t===Zi;)Zi=xn[--En],xn[En]=null,fr=xn[--En],xn[En]=null,dr=xn[--En],xn[En]=null}var cn=null,on=null,Qe=!1,Dn=null;function fx(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,on=Xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zi!==null?{id:dr,overflow:fr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,on=null,!0):!1;default:return!1}}function dp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fp(t){if(Qe){var e=on;if(e){var n=e;if(!Wv(t,e)){if(dp(t))throw Error(L(418));e=Xr(n.nextSibling);var r=cn;e&&Wv(t,e)?fx(r,n):(t.flags=t.flags&-4097|2,Qe=!1,cn=t)}}else{if(dp(t))throw Error(L(418));t.flags=t.flags&-4097|2,Qe=!1,cn=t}}}function Vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function cu(t){if(t!==cn)return!1;if(!Qe)return Vv(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ap(t.type,t.memoizedProps)),e&&(e=on)){if(dp(t))throw hx(),Error(L(418));for(;e;)fx(t,e),e=Xr(e.nextSibling)}if(Vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){on=Xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}on=null}}else on=cn?Xr(t.stateNode.nextSibling):null;return!0}function hx(){for(var t=on;t;)t=Xr(t.nextSibling)}function po(){on=cn=null,Qe=!1}function Qm(t){Dn===null?Dn=[t]:Dn.push(t)}var $k=kr.ReactCurrentBatchConfig;function On(t,e){if(t&&t.defaultProps){e=et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var uc=xi(null),cc=null,Gs=null,Xm=null;function Jm(){Xm=Gs=cc=null}function Zm(t){var e=uc.current;Ye(uc),t._currentValue=e}function hp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function so(t,e){cc=t,Xm=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(Xm!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(cc===null)throw Error(L(308));Gs=t,cc.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Fi=null;function eg(t){Fi===null?Fi=[t]:Fi.push(t)}function px(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,eg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Er(t,r)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $r=!1;function tg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Er(t,n)}return i=r.interleaved,i===null?(e.next=e,eg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Er(t,n)}function Ou(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Um(t,n)}}function Hv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dc(t,e,n,r){var i=t.updateQueue;$r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(f=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=et({},d,f);break e;case 2:$r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=d}}function Gv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var gx=new p1.Component().refs;function pp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pd={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=ei(t),s=yr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jr(t,s,i),e!==null&&(Un(e,t,i,r),Ou(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=ei(t),s=yr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jr(t,s,i),e!==null&&(Un(e,t,i,r),Ou(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Bt(),r=ei(t),i=yr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jr(t,i,r),e!==null&&(Un(e,t,r,n),Ou(e,t,r))}};function Kv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qa(n,r)||!qa(i,s):!0}function yx(t,e,n){var r=!1,i=di,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(i=Xt(e)?Ji:Ft.current,r=e.contextTypes,s=(r=r!=null)?ho(t,i):di),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pd.enqueueReplaceState(e,e.state,null)}function mp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=gx,tg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Tn(s):(s=Xt(e)?Ji:Ft.current,i.context=ho(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pd.enqueueReplaceState(i,i.state,null),dc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===gx&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function du(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qv(t){var e=t._init;return e(t._payload)}function vx(t){function e(m,h){if(t){var y=m.deletions;y===null?(m.deletions=[h],m.flags|=16):y.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=ti(m,h),m.index=0,m.sibling=null,m}function s(m,h,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<h?(m.flags|=2,h):y):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,y,E){return h===null||h.tag!==6?(h=qf(y,m.mode,E),h.return=m,h):(h=i(h,y),h.return=m,h)}function l(m,h,y,E){var T=y.type;return T===Fs?c(m,h,y.props.children,E,y.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Fr&&qv(T)===h.type)?(E=i(h,y.props),E.ref=ta(m,h,y),E.return=m,E):(E=ju(y.type,y.key,y.props,null,m.mode,E),E.ref=ta(m,h,y),E.return=m,E)}function u(m,h,y,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Qf(y,m.mode,E),h.return=m,h):(h=i(h,y.children||[]),h.return=m,h)}function c(m,h,y,E,T){return h===null||h.tag!==7?(h=Gi(y,m.mode,E,T),h.return=m,h):(h=i(h,y),h.return=m,h)}function d(m,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=qf(""+h,m.mode,y),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case eu:return y=ju(h.type,h.key,h.props,null,m.mode,y),y.ref=ta(m,null,h),y.return=m,y;case js:return h=Qf(h,m.mode,y),h.return=m,h;case Fr:var E=h._init;return d(m,E(h._payload),y)}if(ya(h)||Qo(h))return h=Gi(h,m.mode,y,null),h.return=m,h;du(m,h)}return null}function f(m,h,y,E){var T=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(m,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case eu:return y.key===T?l(m,h,y,E):null;case js:return y.key===T?u(m,h,y,E):null;case Fr:return T=y._init,f(m,h,T(y._payload),E)}if(ya(y)||Qo(y))return T!==null?null:c(m,h,y,E,null);du(m,y)}return null}function p(m,h,y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(y)||null,a(h,m,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case eu:return m=m.get(E.key===null?y:E.key)||null,l(h,m,E,T);case js:return m=m.get(E.key===null?y:E.key)||null,u(h,m,E,T);case Fr:var _=E._init;return p(m,h,y,_(E._payload),T)}if(ya(E)||Qo(E))return m=m.get(y)||null,c(h,m,E,T,null);du(h,E)}return null}function g(m,h,y,E){for(var T=null,_=null,S=h,P=h=0,k=null;S!==null&&P<y.length;P++){S.index>P?(k=S,S=null):k=S.sibling;var A=f(m,S,y[P],E);if(A===null){S===null&&(S=k);break}t&&S&&A.alternate===null&&e(m,S),h=s(A,h,P),_===null?T=A:_.sibling=A,_=A,S=k}if(P===y.length)return n(m,S),Qe&&Pi(m,P),T;if(S===null){for(;P<y.length;P++)S=d(m,y[P],E),S!==null&&(h=s(S,h,P),_===null?T=S:_.sibling=S,_=S);return Qe&&Pi(m,P),T}for(S=r(m,S);P<y.length;P++)k=p(S,m,P,y[P],E),k!==null&&(t&&k.alternate!==null&&S.delete(k.key===null?P:k.key),h=s(k,h,P),_===null?T=k:_.sibling=k,_=k);return t&&S.forEach(function(D){return e(m,D)}),Qe&&Pi(m,P),T}function v(m,h,y,E){var T=Qo(y);if(typeof T!="function")throw Error(L(150));if(y=T.call(y),y==null)throw Error(L(151));for(var _=T=null,S=h,P=h=0,k=null,A=y.next();S!==null&&!A.done;P++,A=y.next()){S.index>P?(k=S,S=null):k=S.sibling;var D=f(m,S,A.value,E);if(D===null){S===null&&(S=k);break}t&&S&&D.alternate===null&&e(m,S),h=s(D,h,P),_===null?T=D:_.sibling=D,_=D,S=k}if(A.done)return n(m,S),Qe&&Pi(m,P),T;if(S===null){for(;!A.done;P++,A=y.next())A=d(m,A.value,E),A!==null&&(h=s(A,h,P),_===null?T=A:_.sibling=A,_=A);return Qe&&Pi(m,P),T}for(S=r(m,S);!A.done;P++,A=y.next())A=p(S,m,P,A.value,E),A!==null&&(t&&A.alternate!==null&&S.delete(A.key===null?P:A.key),h=s(A,h,P),_===null?T=A:_.sibling=A,_=A);return t&&S.forEach(function(G){return e(m,G)}),Qe&&Pi(m,P),T}function x(m,h,y,E){if(typeof y=="object"&&y!==null&&y.type===Fs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case eu:e:{for(var T=y.key,_=h;_!==null;){if(_.key===T){if(T=y.type,T===Fs){if(_.tag===7){n(m,_.sibling),h=i(_,y.props.children),h.return=m,m=h;break e}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Fr&&qv(T)===_.type){n(m,_.sibling),h=i(_,y.props),h.ref=ta(m,_,y),h.return=m,m=h;break e}n(m,_);break}else e(m,_);_=_.sibling}y.type===Fs?(h=Gi(y.props.children,m.mode,E,y.key),h.return=m,m=h):(E=ju(y.type,y.key,y.props,null,m.mode,E),E.ref=ta(m,h,y),E.return=m,m=E)}return o(m);case js:e:{for(_=y.key;h!==null;){if(h.key===_)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(m,h.sibling),h=i(h,y.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=Qf(y,m.mode,E),h.return=m,m=h}return o(m);case Fr:return _=y._init,x(m,h,_(y._payload),E)}if(ya(y))return g(m,h,y,E);if(Qo(y))return v(m,h,y,E);du(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,y),h.return=m,m=h):(n(m,h),h=qf(y,m.mode,E),h.return=m,m=h),o(m)):n(m,h)}return x}var mo=vx(!0),_x=vx(!1),Al={},Zn=xi(Al),Za=xi(Al),el=xi(Al);function $i(t){if(t===Al)throw Error(L(174));return t}function ng(t,e){switch(We(el,e),We(Za,t),We(Zn,Al),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kh(e,t)}Ye(Zn),We(Zn,e)}function go(){Ye(Zn),Ye(Za),Ye(el)}function wx(t){$i(el.current);var e=$i(Zn.current),n=Kh(e,t.type);e!==n&&(We(Za,t),We(Zn,n))}function rg(t){Za.current===t&&(Ye(Zn),Ye(Za))}var Xe=xi(0);function fc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wf=[];function ig(){for(var t=0;t<Wf.length;t++)Wf[t]._workInProgressVersionPrimary=null;Wf.length=0}var Au=kr.ReactCurrentDispatcher,Vf=kr.ReactCurrentBatchConfig,es=0,Ze=null,dt=null,wt=null,hc=!1,Ra=!1,tl=0,Uk=0;function Dt(){throw Error(L(321))}function sg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function og(t,e,n,r,i,s){if(es=s,Ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Au.current=t===null||t.memoizedState===null?Vk:Hk,t=n(r,i),Ra){s=0;do{if(Ra=!1,tl=0,25<=s)throw Error(L(301));s+=1,wt=dt=null,e.updateQueue=null,Au.current=Gk,t=n(r,i)}while(Ra)}if(Au.current=pc,e=dt!==null&&dt.next!==null,es=0,wt=dt=Ze=null,hc=!1,e)throw Error(L(300));return t}function ag(){var t=tl!==0;return tl=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ze.memoizedState=wt=t:wt=wt.next=t,wt}function bn(){if(dt===null){var t=Ze.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var e=wt===null?Ze.memoizedState:wt.next;if(e!==null)wt=e,dt=t;else{if(t===null)throw Error(L(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},wt===null?Ze.memoizedState=wt=t:wt=wt.next=t}return wt}function nl(t,e){return typeof e=="function"?e(t):e}function Hf(t){var e=bn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=dt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((es&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ze.lanes|=c,ts|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Wn(r,e.memoizedState)||(Yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ze.lanes|=s,ts|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gf(t){var e=bn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wn(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function xx(){}function Ex(t,e){var n=Ze,r=bn(),i=e(),s=!Wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Yt=!0),r=r.queue,lg(Tx.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,rl(9,Cx.bind(null,n,r,i,e),void 0,null),Tt===null)throw Error(L(349));es&30||Sx(n,e,i)}return i}function Sx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ze.updateQueue,e===null?(e={lastEffect:null,stores:null},Ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cx(t,e,n,r){e.value=n,e.getSnapshot=r,bx(e)&&Ix(t)}function Tx(t,e,n){return n(function(){bx(e)&&Ix(t)})}function bx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function Ix(t){var e=Er(t,1);e!==null&&Un(e,t,1,-1)}function Qv(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e.queue=t,t=t.dispatch=Wk.bind(null,Ze,t),[e.memoizedState,t]}function rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ze.updateQueue,e===null?(e={lastEffect:null,stores:null},Ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kx(){return bn().memoizedState}function Nu(t,e,n,r){var i=Yn();Ze.flags|=t,i.memoizedState=rl(1|e,n,void 0,r===void 0?null:r)}function md(t,e,n,r){var i=bn();r=r===void 0?null:r;var s=void 0;if(dt!==null){var o=dt.memoizedState;if(s=o.destroy,r!==null&&sg(r,o.deps)){i.memoizedState=rl(e,n,s,r);return}}Ze.flags|=t,i.memoizedState=rl(1|e,n,s,r)}function Xv(t,e){return Nu(8390656,8,t,e)}function lg(t,e){return md(2048,8,t,e)}function Rx(t,e){return md(4,2,t,e)}function Px(t,e){return md(4,4,t,e)}function Ox(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ax(t,e,n){return n=n!=null?n.concat([t]):null,md(4,4,Ox.bind(null,e,t),n)}function ug(){}function Nx(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Dx(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Mx(t,e,n){return es&21?(Wn(n,e)||(n=F1(),Ze.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function zk(t,e){var n=Ne;Ne=n!==0&&4>n?n:4,t(!0);var r=Vf.transition;Vf.transition={};try{t(!1),e()}finally{Ne=n,Vf.transition=r}}function Lx(){return bn().memoizedState}function Bk(t,e,n){var r=ei(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jx(t))Fx(e,n);else if(n=px(t,e,n,r),n!==null){var i=Bt();Un(n,t,r,i),$x(n,e,r)}}function Wk(t,e,n){var r=ei(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jx(t))Fx(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Wn(a,o)){var l=e.interleaved;l===null?(i.next=i,eg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=px(t,e,i,r),n!==null&&(i=Bt(),Un(n,t,r,i),$x(n,e,r))}}function jx(t){var e=t.alternate;return t===Ze||e!==null&&e===Ze}function Fx(t,e){Ra=hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $x(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Um(t,n)}}var pc={readContext:Tn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Vk={readContext:Tn,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:Xv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4194308,4,Ox.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nu(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Bk.bind(null,Ze,t),[r.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:Qv,useDebugValue:ug,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=Qv(!1),e=t[0];return t=zk.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ze,i=Yn();if(Qe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Tt===null)throw Error(L(349));es&30||Sx(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xv(Tx.bind(null,r,s,t),[t]),r.flags|=2048,rl(9,Cx.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=Tt.identifierPrefix;if(Qe){var n=fr,r=dr;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Uk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hk={readContext:Tn,useCallback:Nx,useContext:Tn,useEffect:lg,useImperativeHandle:Ax,useInsertionEffect:Rx,useLayoutEffect:Px,useMemo:Dx,useReducer:Hf,useRef:kx,useState:function(){return Hf(nl)},useDebugValue:ug,useDeferredValue:function(t){var e=bn();return Mx(e,dt.memoizedState,t)},useTransition:function(){var t=Hf(nl)[0],e=bn().memoizedState;return[t,e]},useMutableSource:xx,useSyncExternalStore:Ex,useId:Lx,unstable_isNewReconciler:!1},Gk={readContext:Tn,useCallback:Nx,useContext:Tn,useEffect:lg,useImperativeHandle:Ax,useInsertionEffect:Rx,useLayoutEffect:Px,useMemo:Dx,useReducer:Gf,useRef:kx,useState:function(){return Gf(nl)},useDebugValue:ug,useDeferredValue:function(t){var e=bn();return dt===null?e.memoizedState=t:Mx(e,dt.memoizedState,t)},useTransition:function(){var t=Gf(nl)[0],e=bn().memoizedState;return[t,e]},useMutableSource:xx,useSyncExternalStore:Ex,useId:Lx,unstable_isNewReconciler:!1};function yo(t,e){try{var n="",r=e;do n+=wI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kk=typeof WeakMap=="function"?WeakMap:Map;function Ux(t,e,n){n=yr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gc||(gc=!0,bp=r),gp(t,e)},n}function zx(t,e,n){n=yr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){gp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gp(t,e),typeof r!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Kk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=aR.bind(null,t,e,n),e.then(t,t))}function Zv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function e_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yr(-1,1),e.tag=2,Jr(n,e,1))),n.lanes|=1),t)}var Yk=kr.ReactCurrentOwner,Yt=!1;function Ut(t,e,n,r){e.child=t===null?_x(e,null,n,r):mo(e,t.child,n,r)}function t_(t,e,n,r,i){n=n.render;var s=e.ref;return so(e,i),r=og(t,e,n,r,s,i),n=ag(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sr(t,e,i)):(Qe&&n&&Ym(e),e.flags|=1,Ut(t,e,r,i),e.child)}function n_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Bx(t,e,s,r,i)):(t=ju(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(o,r)&&t.ref===e.ref)return Sr(t,e,i)}return e.flags|=1,t=ti(s,r),t.ref=e.ref,t.return=e,e.child=t}function Bx(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qa(s,r)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,Sr(t,e,i)}return yp(t,e,n,r,i)}function Wx(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Ys,sn),sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,We(Ys,sn),sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,We(Ys,sn),sn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,We(Ys,sn),sn|=r;return Ut(t,e,i,n),e.child}function Vx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yp(t,e,n,r,i){var s=Xt(n)?Ji:Ft.current;return s=ho(e,s),so(e,i),n=og(t,e,n,r,s,i),r=ag(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sr(t,e,i)):(Qe&&r&&Ym(e),e.flags|=1,Ut(t,e,n,i),e.child)}function r_(t,e,n,r,i){if(Xt(n)){var s=!0;oc(e)}else s=!1;if(so(e,i),e.stateNode===null)Du(t,e),yx(e,n,r),mp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Tn(u):(u=Xt(n)?Ji:Ft.current,u=ho(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Yv(e,o,r,u),$r=!1;var f=e.memoizedState;o.state=f,dc(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Qt.current||$r?(typeof c=="function"&&(pp(e,n,c,r),l=e.memoizedState),(a=$r||Kv(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,mx(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:On(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=Xt(n)?Ji:Ft.current,l=ho(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Yv(e,o,r,l),$r=!1,f=e.memoizedState,o.state=f,dc(e,r,o,i);var g=e.memoizedState;a!==d||f!==g||Qt.current||$r?(typeof p=="function"&&(pp(e,n,p,r),g=e.memoizedState),(u=$r||Kv(e,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return vp(t,e,n,r,s,i)}function vp(t,e,n,r,i,s){Vx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Bv(e,n,!1),Sr(t,e,s);r=e.stateNode,Yk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=mo(e,t.child,null,s),e.child=mo(e,null,a,s)):Ut(t,e,a,s),e.memoizedState=r.state,i&&Bv(e,n,!0),e.child}function Hx(t){var e=t.stateNode;e.pendingContext?zv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zv(t,e.context,!1),ng(t,e.containerInfo)}function i_(t,e,n,r,i){return po(),Qm(i),e.flags|=256,Ut(t,e,n,r),e.child}var _p={dehydrated:null,treeContext:null,retryLane:0};function wp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gx(t,e,n){var r=e.pendingProps,i=Xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),We(Xe,i&1),t===null)return fp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vd(o,r,0,null),t=Gi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wp(n),e.memoizedState=_p,t):cg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ti(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ti(a,s):(s=Gi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?wp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_p,r}return s=t.child,t=s.sibling,r=ti(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cg(t,e){return e=vd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fu(t,e,n,r){return r!==null&&Qm(r),mo(e,t.child,null,n),t=cg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kf(Error(L(422))),fu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vd({mode:"visible",children:r.children},i,0,null),s=Gi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&mo(e,t.child,null,o),e.child.memoizedState=wp(o),e.memoizedState=_p,s);if(!(e.mode&1))return fu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(L(419)),r=Kf(s,r,void 0),fu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Yt||a){if(r=Tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Er(t,i),Un(r,t,i,-1))}return gg(),r=Kf(Error(L(421))),fu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=lR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,on=Xr(i.nextSibling),cn=e,Qe=!0,Dn=null,t!==null&&(xn[En++]=dr,xn[En++]=fr,xn[En++]=Zi,dr=t.id,fr=t.overflow,Zi=e),e=cg(e,r.children),e.flags|=4096,e)}function s_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hp(t.return,e,n)}function Yf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Kx(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(t,e,r.children,n),r=Xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&s_(t,n,e);else if(t.tag===19)s_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(We(Xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&fc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&fc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yf(e,!0,n,null,s);break;case"together":Yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Du(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=ti(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ti(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Qk(t,e,n){switch(e.tag){case 3:Hx(e),po();break;case 5:wx(e);break;case 1:Xt(e.type)&&oc(e);break;case 4:ng(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;We(uc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(We(Xe,Xe.current&1),e.flags|=128,null):n&e.child.childLanes?Gx(t,e,n):(We(Xe,Xe.current&1),t=Sr(t,e,n),t!==null?t.sibling:null);We(Xe,Xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Kx(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),We(Xe,Xe.current),r)break;return null;case 22:case 23:return e.lanes=0,Wx(t,e,n)}return Sr(t,e,n)}var Yx,xp,qx,Qx;Yx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xp=function(){};qx=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$i(Zn.current);var s=null;switch(n){case"input":i=Wh(t,i),r=Wh(t,r),s=[];break;case"select":i=et({},i,{value:void 0}),r=et({},r,{value:void 0}),s=[];break;case"textarea":i=Gh(t,i),r=Gh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ic)}Yh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ba.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ba.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Qx=function(t,e,n,r){n!==r&&(e.flags|=4)};function na(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Xk(t,e,n){var r=e.pendingProps;switch(qm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return Xt(e.type)&&sc(),Mt(e),null;case 3:return r=e.stateNode,go(),Ye(Qt),Ye(Ft),ig(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(cu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Rp(Dn),Dn=null))),xp(t,e),Mt(e),null;case 5:rg(e);var i=$i(el.current);if(n=e.type,t!==null&&e.stateNode!=null)qx(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return Mt(e),null}if(t=$i(Zn.current),cu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xn]=e,r[Ja]=s,t=(e.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<_a.length;i++)Ve(_a[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":pv(r,s),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",r);break;case"textarea":gv(r,s),Ve("invalid",r)}Yh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&uu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&uu(r.textContent,a,t),i=["children",""+a]):Ba.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ve("scroll",r)}switch(n){case"input":tu(r),mv(r,s,!0);break;case"textarea":tu(r),yv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ic)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xn]=e,t[Ja]=r,Yx(t,e,!1,!1),e.stateNode=t;e:{switch(o=qh(n,r),n){case"dialog":Ve("cancel",t),Ve("close",t),i=r;break;case"iframe":case"object":case"embed":Ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<_a.length;i++)Ve(_a[i],t);i=r;break;case"source":Ve("error",t),i=r;break;case"img":case"image":case"link":Ve("error",t),Ve("load",t),i=r;break;case"details":Ve("toggle",t),i=r;break;case"input":pv(t,r),i=Wh(t,r),Ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=et({},r,{value:void 0}),Ve("invalid",t);break;case"textarea":gv(t,r),i=Gh(t,r),Ve("invalid",t);break;default:i=r}Yh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?b1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&C1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wa(t,l):typeof l=="number"&&Wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ba.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ve("scroll",t):l!=null&&Dm(t,s,l,o))}switch(n){case"input":tu(t),mv(t,r,!1);break;case"textarea":tu(t),yv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ci(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?to(t,!!r.multiple,s,!1):r.defaultValue!=null&&to(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ic)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mt(e),null;case 6:if(t&&e.stateNode!=null)Qx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=$i(el.current),$i(Zn.current),cu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xn]=e,(s=r.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:uu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xn]=e,e.stateNode=r}return Mt(e),null;case 13:if(Ye(Xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&on!==null&&e.mode&1&&!(e.flags&128))hx(),po(),e.flags|=98560,s=!1;else if(s=cu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Xn]=e}else po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mt(e),s=!1}else Dn!==null&&(Rp(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Xe.current&1?pt===0&&(pt=3):gg())),e.updateQueue!==null&&(e.flags|=4),Mt(e),null);case 4:return go(),xp(t,e),t===null&&Qa(e.stateNode.containerInfo),Mt(e),null;case 10:return Zm(e.type._context),Mt(e),null;case 17:return Xt(e.type)&&sc(),Mt(e),null;case 19:if(Ye(Xe),s=e.memoizedState,s===null)return Mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)na(s,!1);else{if(pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fc(t),o!==null){for(e.flags|=128,na(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return We(Xe,Xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&st()>vo&&(e.flags|=128,r=!0,na(s,!1),e.lanes=4194304)}else{if(!r)if(t=fc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Mt(e),null}else 2*st()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,r=!0,na(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=st(),e.sibling=null,n=Xe.current,We(Xe,r?n&1|2:n&1),e):(Mt(e),null);case 22:case 23:return mg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?sn&1073741824&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function Jk(t,e){switch(qm(e),e.tag){case 1:return Xt(e.type)&&sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return go(),Ye(Qt),Ye(Ft),ig(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rg(e),null;case 13:if(Ye(Xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ye(Xe),null;case 4:return go(),null;case 10:return Zm(e.type._context),null;case 22:case 23:return mg(),null;case 24:return null;default:return null}}var hu=!1,Lt=!1,Zk=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){nt(t,e,r)}else n.current=null}function Ep(t,e,n){try{n()}catch(r){nt(t,e,r)}}var o_=!1;function eR(t,e){if(sp=tc,t=ex(),Km(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(op={focusedElem:t,selectionRange:n},tc=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,x=g.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:On(e.type,v),x);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(E){nt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return g=o_,o_=!1,g}function Pa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ep(e,n,s)}i=i.next}while(i!==r)}}function gd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xx(t){var e=t.alternate;e!==null&&(t.alternate=null,Xx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[Ja],delete e[up],delete e[Lk],delete e[jk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jx(t){return t.tag===5||t.tag===3||t.tag===4}function a_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ic));else if(r!==4&&(t=t.child,t!==null))for(Cp(t,e,n),t=t.sibling;t!==null;)Cp(t,e,n),t=t.sibling}function Tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tp(t,e,n),t=t.sibling;t!==null;)Tp(t,e,n),t=t.sibling}var Pt=null,An=!1;function Nr(t,e,n){for(n=n.child;n!==null;)Zx(t,e,n),n=n.sibling}function Zx(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(ld,n)}catch{}switch(n.tag){case 5:Lt||Ks(n,e);case 6:var r=Pt,i=An;Pt=null,Nr(t,e,n),Pt=r,An=i,Pt!==null&&(An?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(An?(t=Pt,n=n.stateNode,t.nodeType===8?zf(t.parentNode,n):t.nodeType===1&&zf(t,n),Ka(t)):zf(Pt,n.stateNode));break;case 4:r=Pt,i=An,Pt=n.stateNode.containerInfo,An=!0,Nr(t,e,n),Pt=r,An=i;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ep(n,e,o),i=i.next}while(i!==r)}Nr(t,e,n);break;case 1:if(!Lt&&(Ks(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){nt(n,e,a)}Nr(t,e,n);break;case 21:Nr(t,e,n);break;case 22:n.mode&1?(Lt=(r=Lt)||n.memoizedState!==null,Nr(t,e,n),Lt=r):Nr(t,e,n);break;default:Nr(t,e,n)}}function l_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zk),e.forEach(function(r){var i=uR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,An=!1;break e;case 3:Pt=a.stateNode.containerInfo,An=!0;break e;case 4:Pt=a.stateNode.containerInfo,An=!0;break e}a=a.return}if(Pt===null)throw Error(L(160));Zx(s,o,i),Pt=null,An=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){nt(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)eE(e,t),e=e.sibling}function eE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Kn(t),r&4){try{Pa(3,t,t.return),gd(3,t)}catch(v){nt(t,t.return,v)}try{Pa(5,t,t.return)}catch(v){nt(t,t.return,v)}}break;case 1:kn(e,t),Kn(t),r&512&&n!==null&&Ks(n,n.return);break;case 5:if(kn(e,t),Kn(t),r&512&&n!==null&&Ks(n,n.return),t.flags&32){var i=t.stateNode;try{Wa(i,"")}catch(v){nt(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&x1(i,s),qh(a,o);var u=qh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?b1(i,d):c==="dangerouslySetInnerHTML"?C1(i,d):c==="children"?Wa(i,d):Dm(i,c,d,u)}switch(a){case"input":Vh(i,s);break;case"textarea":E1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?to(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?to(i,!!s.multiple,s.defaultValue,!0):to(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ja]=s}catch(v){nt(t,t.return,v)}}break;case 6:if(kn(e,t),Kn(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){nt(t,t.return,v)}}break;case 3:if(kn(e,t),Kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(v){nt(t,t.return,v)}break;case 4:kn(e,t),Kn(t);break;case 13:kn(e,t),Kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hg=st())),r&4&&l_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Lt=(u=Lt)||c,kn(e,t),Lt=u):kn(e,t),Kn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(H=t,c=t.child;c!==null;){for(d=H=c;H!==null;){switch(f=H,p=f.child,f.tag){case 0:case 11:case 14:case 15:Pa(4,f,f.return);break;case 1:Ks(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){nt(r,n,v)}}break;case 5:Ks(f,f.return);break;case 22:if(f.memoizedState!==null){c_(d);continue}}p!==null?(p.return=f,H=p):c_(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=T1("display",o))}catch(v){nt(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){nt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kn(e,t),Kn(t),r&4&&l_(t);break;case 21:break;default:kn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jx(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wa(i,""),r.flags&=-33);var s=a_(t);Tp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=a_(t);Cp(t,a,o);break;default:throw Error(L(161))}}catch(l){nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tR(t,e,n){H=t,tE(t)}function tE(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Lt;a=hu;var u=Lt;if(hu=o,(Lt=l)&&!u)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?d_(i):l!==null?(l.return=o,H=l):d_(i);for(;s!==null;)H=s,tE(s),s=s.sibling;H=i,hu=a,Lt=u}u_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):u_(t)}}function u_(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||gd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ka(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Lt||e.flags&512&&Sp(e)}catch(f){nt(e,e.return,f)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function c_(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function d_(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gd(4,e)}catch(l){nt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){nt(e,i,l)}}var s=e.return;try{Sp(e)}catch(l){nt(e,s,l)}break;case 5:var o=e.return;try{Sp(e)}catch(l){nt(e,o,l)}}}catch(l){nt(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var nR=Math.ceil,mc=kr.ReactCurrentDispatcher,dg=kr.ReactCurrentOwner,Cn=kr.ReactCurrentBatchConfig,ke=0,Tt=null,ct=null,Ot=0,sn=0,Ys=xi(0),pt=0,il=null,ts=0,yd=0,fg=0,Oa=null,Gt=null,hg=0,vo=1/0,ar=null,gc=!1,bp=null,Zr=null,pu=!1,Kr=null,yc=0,Aa=0,Ip=null,Mu=-1,Lu=0;function Bt(){return ke&6?st():Mu!==-1?Mu:Mu=st()}function ei(t){return t.mode&1?ke&2&&Ot!==0?Ot&-Ot:$k.transition!==null?(Lu===0&&(Lu=F1()),Lu):(t=Ne,t!==0||(t=window.event,t=t===void 0?16:H1(t.type)),t):1}function Un(t,e,n,r){if(50<Aa)throw Aa=0,Ip=null,Error(L(185));Rl(t,n,r),(!(ke&2)||t!==Tt)&&(t===Tt&&(!(ke&2)&&(yd|=n),pt===4&&zr(t,Ot)),Jt(t,r),n===1&&ke===0&&!(e.mode&1)&&(vo=st()+500,hd&&Ei()))}function Jt(t,e){var n=t.callbackNode;$I(t,e);var r=ec(t,t===Tt?Ot:0);if(r===0)n!==null&&wv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wv(n),e===1)t.tag===0?Fk(f_.bind(null,t)):cx(f_.bind(null,t)),Dk(function(){!(ke&6)&&Ei()}),n=null;else{switch($1(r)){case 1:n=$m;break;case 4:n=L1;break;case 16:n=Zu;break;case 536870912:n=j1;break;default:n=Zu}n=uE(n,nE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nE(t,e){if(Mu=-1,Lu=0,ke&6)throw Error(L(327));var n=t.callbackNode;if(oo()&&t.callbackNode!==n)return null;var r=ec(t,t===Tt?Ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vc(t,r);else{e=r;var i=ke;ke|=2;var s=iE();(Tt!==t||Ot!==e)&&(ar=null,vo=st()+500,Hi(t,e));do try{sR();break}catch(a){rE(t,a)}while(!0);Jm(),mc.current=s,ke=i,ct!==null?e=0:(Tt=null,Ot=0,e=pt)}if(e!==0){if(e===2&&(i=ep(t),i!==0&&(r=i,e=kp(t,i))),e===1)throw n=il,Hi(t,0),zr(t,r),Jt(t,st()),n;if(e===6)zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!rR(i)&&(e=vc(t,r),e===2&&(s=ep(t),s!==0&&(r=s,e=kp(t,s))),e===1))throw n=il,Hi(t,0),zr(t,r),Jt(t,st()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Oi(t,Gt,ar);break;case 3:if(zr(t,r),(r&130023424)===r&&(e=hg+500-st(),10<e)){if(ec(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lp(Oi.bind(null,t,Gt,ar),e);break}Oi(t,Gt,ar);break;case 4:if(zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=st()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nR(r/1960))-r,10<r){t.timeoutHandle=lp(Oi.bind(null,t,Gt,ar),r);break}Oi(t,Gt,ar);break;case 5:Oi(t,Gt,ar);break;default:throw Error(L(329))}}}return Jt(t,st()),t.callbackNode===n?nE.bind(null,t):null}function kp(t,e){var n=Oa;return t.current.memoizedState.isDehydrated&&(Hi(t,e).flags|=256),t=vc(t,e),t!==2&&(e=Gt,Gt=n,e!==null&&Rp(e)),t}function Rp(t){Gt===null?Gt=t:Gt.push.apply(Gt,t)}function rR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~fg,e&=~yd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),r=1<<n;t[n]=-1,e&=~r}}function f_(t){if(ke&6)throw Error(L(327));oo();var e=ec(t,0);if(!(e&1))return Jt(t,st()),null;var n=vc(t,e);if(t.tag!==0&&n===2){var r=ep(t);r!==0&&(e=r,n=kp(t,r))}if(n===1)throw n=il,Hi(t,0),zr(t,e),Jt(t,st()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Oi(t,Gt,ar),Jt(t,st()),null}function pg(t,e){var n=ke;ke|=1;try{return t(e)}finally{ke=n,ke===0&&(vo=st()+500,hd&&Ei())}}function ns(t){Kr!==null&&Kr.tag===0&&!(ke&6)&&oo();var e=ke;ke|=1;var n=Cn.transition,r=Ne;try{if(Cn.transition=null,Ne=1,t)return t()}finally{Ne=r,Cn.transition=n,ke=e,!(ke&6)&&Ei()}}function mg(){sn=Ys.current,Ye(Ys)}function Hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Nk(n)),ct!==null)for(n=ct.return;n!==null;){var r=n;switch(qm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sc();break;case 3:go(),Ye(Qt),Ye(Ft),ig();break;case 5:rg(r);break;case 4:go();break;case 13:Ye(Xe);break;case 19:Ye(Xe);break;case 10:Zm(r.type._context);break;case 22:case 23:mg()}n=n.return}if(Tt=t,ct=t=ti(t.current,null),Ot=sn=e,pt=0,il=null,fg=yd=ts=0,Gt=Oa=null,Fi!==null){for(e=0;e<Fi.length;e++)if(n=Fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fi=null}return t}function rE(t,e){do{var n=ct;try{if(Jm(),Au.current=pc,hc){for(var r=Ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hc=!1}if(es=0,wt=dt=Ze=null,Ra=!1,tl=0,dg.current=null,n===null||n.return===null){pt=1,il=e,ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Zv(o);if(p!==null){p.flags&=-257,e_(p,o,a,s,e),p.mode&1&&Jv(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Jv(s,u,e),gg();break e}l=Error(L(426))}}else if(Qe&&a.mode&1){var x=Zv(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),e_(x,o,a,s,e),Qm(yo(l,a));break e}}s=l=yo(l,a),pt!==4&&(pt=2),Oa===null?Oa=[s]:Oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Ux(s,l,e);Hv(s,m);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Zr===null||!Zr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=zx(s,a,e);Hv(s,E);break e}}s=s.return}while(s!==null)}oE(n)}catch(T){e=T,ct===n&&n!==null&&(ct=n=n.return);continue}break}while(!0)}function iE(){var t=mc.current;return mc.current=pc,t===null?pc:t}function gg(){(pt===0||pt===3||pt===2)&&(pt=4),Tt===null||!(ts&268435455)&&!(yd&268435455)||zr(Tt,Ot)}function vc(t,e){var n=ke;ke|=2;var r=iE();(Tt!==t||Ot!==e)&&(ar=null,Hi(t,e));do try{iR();break}catch(i){rE(t,i)}while(!0);if(Jm(),ke=n,mc.current=r,ct!==null)throw Error(L(261));return Tt=null,Ot=0,pt}function iR(){for(;ct!==null;)sE(ct)}function sR(){for(;ct!==null&&!PI();)sE(ct)}function sE(t){var e=lE(t.alternate,t,sn);t.memoizedProps=t.pendingProps,e===null?oE(t):ct=e,dg.current=null}function oE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Jk(n,e),n!==null){n.flags&=32767,ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pt=6,ct=null;return}}else if(n=Xk(n,e,sn),n!==null){ct=n;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);pt===0&&(pt=5)}function Oi(t,e,n){var r=Ne,i=Cn.transition;try{Cn.transition=null,Ne=1,oR(t,e,n,r)}finally{Cn.transition=i,Ne=r}return null}function oR(t,e,n,r){do oo();while(Kr!==null);if(ke&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(UI(t,s),t===Tt&&(ct=Tt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pu||(pu=!0,uE(Zu,function(){return oo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=Ne;Ne=1;var a=ke;ke|=4,dg.current=null,eR(t,n),eE(n,t),bk(op),tc=!!sp,op=sp=null,t.current=n,tR(n),OI(),ke=a,Ne=o,Cn.transition=s}else t.current=n;if(pu&&(pu=!1,Kr=t,yc=i),s=t.pendingLanes,s===0&&(Zr=null),DI(n.stateNode),Jt(t,st()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gc)throw gc=!1,t=bp,bp=null,t;return yc&1&&t.tag!==0&&oo(),s=t.pendingLanes,s&1?t===Ip?Aa++:(Aa=0,Ip=t):Aa=0,Ei(),null}function oo(){if(Kr!==null){var t=$1(yc),e=Cn.transition,n=Ne;try{if(Cn.transition=null,Ne=16>t?16:t,Kr===null)var r=!1;else{if(t=Kr,Kr=null,yc=0,ke&6)throw Error(L(331));var i=ke;for(ke|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(H=u;H!==null;){var c=H;switch(c.tag){case 0:case 11:case 15:Pa(8,c,s)}var d=c.child;if(d!==null)d.return=c,H=d;else for(;H!==null;){c=H;var f=c.sibling,p=c.return;if(Xx(c),c===u){H=null;break}if(f!==null){f.return=p,H=f;break}H=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,H=m;break e}H=s.return}}var h=t.current;for(H=h;H!==null;){o=H;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,H=y;else e:for(o=h;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gd(9,a)}}catch(T){nt(a,a.return,T)}if(a===o){H=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,H=E;break e}H=a.return}}if(ke=i,Ei(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(ld,t)}catch{}r=!0}return r}finally{Ne=n,Cn.transition=e}}return!1}function h_(t,e,n){e=yo(n,e),e=Ux(t,e,1),t=Jr(t,e,1),e=Bt(),t!==null&&(Rl(t,1,e),Jt(t,e))}function nt(t,e,n){if(t.tag===3)h_(t,t,n);else for(;e!==null;){if(e.tag===3){h_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zr===null||!Zr.has(r))){t=yo(n,t),t=zx(e,t,1),e=Jr(e,t,1),t=Bt(),e!==null&&(Rl(e,1,t),Jt(e,t));break}}e=e.return}}function aR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(Ot&n)===n&&(pt===4||pt===3&&(Ot&130023424)===Ot&&500>st()-hg?Hi(t,0):fg|=n),Jt(t,e)}function aE(t,e){e===0&&(t.mode&1?(e=iu,iu<<=1,!(iu&130023424)&&(iu=4194304)):e=1);var n=Bt();t=Er(t,e),t!==null&&(Rl(t,e,n),Jt(t,n))}function lR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),aE(t,n)}function uR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),aE(t,n)}var lE;lE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,Qk(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,Qe&&e.flags&1048576&&dx(e,lc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Du(t,e),t=e.pendingProps;var i=ho(e,Ft.current);so(e,n),i=og(null,e,r,t,i,n);var s=ag();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xt(r)?(s=!0,oc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tg(e),i.updater=pd,e.stateNode=i,i._reactInternals=e,mp(e,r,t,n),e=vp(null,e,r,!0,s,n)):(e.tag=0,Qe&&s&&Ym(e),Ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Du(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dR(r),t=On(r,t),i){case 0:e=yp(null,e,r,t,n);break e;case 1:e=r_(null,e,r,t,n);break e;case 11:e=t_(null,e,r,t,n);break e;case 14:e=n_(null,e,r,On(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),yp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),r_(t,e,r,i,n);case 3:e:{if(Hx(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,mx(t,e),dc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=yo(Error(L(423)),e),e=i_(t,e,r,n,i);break e}else if(r!==i){i=yo(Error(L(424)),e),e=i_(t,e,r,n,i);break e}else for(on=Xr(e.stateNode.containerInfo.firstChild),cn=e,Qe=!0,Dn=null,n=_x(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),r===i){e=Sr(t,e,n);break e}Ut(t,e,r,n)}e=e.child}return e;case 5:return wx(e),t===null&&fp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ap(r,i)?o=null:s!==null&&ap(r,s)&&(e.flags|=32),Vx(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&fp(e),null;case 13:return Gx(t,e,n);case 4:return ng(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mo(e,null,r,n):Ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),t_(t,e,r,i,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,We(uc,r._currentValue),r._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===i.children&&!Qt.current){e=Sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=yr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,so(e,n),i=Tn(i),r=r(i),e.flags|=1,Ut(t,e,r,n),e.child;case 14:return r=e.type,i=On(r,e.pendingProps),i=On(r.type,i),n_(t,e,r,i,n);case 15:return Bx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),Du(t,e),e.tag=1,Xt(r)?(t=!0,oc(e)):t=!1,so(e,n),yx(e,r,i),mp(e,r,i,n),vp(null,e,r,!0,t,n);case 19:return Kx(t,e,n);case 22:return Wx(t,e,n)}throw Error(L(156,e.tag))};function uE(t,e){return M1(t,e)}function cR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,r){return new cR(t,e,n,r)}function yg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dR(t){if(typeof t=="function")return yg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lm)return 11;if(t===jm)return 14}return 2}function ti(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ju(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fs:return Gi(n.children,i,s,e);case Mm:o=8,i|=8;break;case $h:return t=Sn(12,n,e,i|2),t.elementType=$h,t.lanes=s,t;case Uh:return t=Sn(13,n,e,i),t.elementType=Uh,t.lanes=s,t;case zh:return t=Sn(19,n,e,i),t.elementType=zh,t.lanes=s,t;case v1:return vd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g1:o=10;break e;case y1:o=9;break e;case Lm:o=11;break e;case jm:o=14;break e;case Fr:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gi(t,e,n,r){return t=Sn(7,t,r,e),t.lanes=n,t}function vd(t,e,n,r){return t=Sn(22,t,r,e),t.elementType=v1,t.lanes=n,t.stateNode={isHidden:!1},t}function qf(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function Qf(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pf(0),this.expirationTimes=Pf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vg(t,e,n,r,i,s,o,a,l){return t=new fR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tg(s),t}function hR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cE(t){if(!t)return di;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(Xt(n))return ux(t,n,e)}return e}function dE(t,e,n,r,i,s,o,a,l){return t=vg(n,r,!0,t,i,s,o,a,l),t.context=cE(null),n=t.current,r=Bt(),i=ei(n),s=yr(r,i),s.callback=e??null,Jr(n,s,i),t.current.lanes=i,Rl(t,i,r),Jt(t,r),t}function _d(t,e,n,r){var i=e.current,s=Bt(),o=ei(i);return n=cE(n),e.context===null?e.context=n:e.pendingContext=n,e=yr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jr(i,e,o),t!==null&&(Un(t,i,o,s),Ou(t,i,o)),o}function _c(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function p_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _g(t,e){p_(t,e),(t=t.alternate)&&p_(t,e)}function pR(){return null}var fE=typeof reportError=="function"?reportError:function(t){console.error(t)};function wg(t){this._internalRoot=t}wd.prototype.render=wg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));_d(t,e,null,null)};wd.prototype.unmount=wg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){_d(null,t,null,null)}),e[xr]=null}};function wd(t){this._internalRoot=t}wd.prototype.unstable_scheduleHydration=function(t){if(t){var e=B1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ur.length&&e!==0&&e<Ur[n].priority;n++);Ur.splice(n,0,t),n===0&&V1(t)}};function xg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function m_(){}function mR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=_c(o);s.call(u)}}var o=dE(e,r,t,0,null,!1,!1,"",m_);return t._reactRootContainer=o,t[xr]=o.current,Qa(t.nodeType===8?t.parentNode:t),ns(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=_c(l);a.call(u)}}var l=vg(t,0,!1,null,null,!1,!1,"",m_);return t._reactRootContainer=l,t[xr]=l.current,Qa(t.nodeType===8?t.parentNode:t),ns(function(){_d(e,l,n,r)}),l}function Ed(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=_c(o);a.call(l)}}_d(e,o,t,i)}else o=mR(n,e,t,i,r);return _c(o)}U1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=va(e.pendingLanes);n!==0&&(Um(e,n|1),Jt(e,st()),!(ke&6)&&(vo=st()+500,Ei()))}break;case 13:ns(function(){var r=Er(t,1);if(r!==null){var i=Bt();Un(r,t,1,i)}}),_g(t,1)}};zm=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=Bt();Un(e,t,134217728,n)}_g(t,134217728)}};z1=function(t){if(t.tag===13){var e=ei(t),n=Er(t,e);if(n!==null){var r=Bt();Un(n,t,e,r)}_g(t,e)}};B1=function(){return Ne};W1=function(t,e){var n=Ne;try{return Ne=t,e()}finally{Ne=n}};Xh=function(t,e,n){switch(e){case"input":if(Vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fd(r);if(!i)throw Error(L(90));w1(r),Vh(r,i)}}}break;case"textarea":E1(t,n);break;case"select":e=n.value,e!=null&&to(t,!!n.multiple,e,!1)}};R1=pg;P1=ns;var gR={usingClientEntryPoint:!1,Events:[Ol,Bs,fd,I1,k1,pg]},ra={findFiberByHostInstance:ji,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},yR={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=N1(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||pR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{ld=mu.inject(yR),Jn=mu}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gR;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xg(e))throw Error(L(200));return hR(t,e,null,n)};pn.createRoot=function(t,e){if(!xg(t))throw Error(L(299));var n=!1,r="",i=fE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vg(t,1,!1,null,null,n,!1,r,i),t[xr]=e.current,Qa(t.nodeType===8?t.parentNode:t),new wg(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=N1(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return ns(t)};pn.hydrate=function(t,e,n){if(!xd(e))throw Error(L(200));return Ed(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!xg(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dE(e,null,t,1,n??null,i,!1,s,o),t[xr]=e.current,Qa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wd(e)};pn.render=function(t,e,n){if(!xd(e))throw Error(L(200));return Ed(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!xd(t))throw Error(L(40));return t._reactRootContainer?(ns(function(){Ed(null,null,t,!1,function(){t._reactRootContainer=null,t[xr]=null})}),!0):!1};pn.unstable_batchedUpdates=pg;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!xd(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return Ed(t,e,n,!1,r)};pn.version="18.2.0-next-9e3b772b8-20220608";function hE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hE)}catch(t){console.error(t)}}hE(),d1.exports=pn;var Eg=d1.exports;const vR=od(Eg),_R=e1({__proto__:null,default:vR},[Eg]);var g_=Eg;jh.createRoot=g_.createRoot,jh.hydrateRoot=g_.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rt(){return rt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rt.apply(this,arguments)}var it;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(it||(it={}));const y_="popstate";function wR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return sl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:is(i)}return ER(e,n,null,t)}function me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xR(){return Math.random().toString(36).substr(2,8)}function v_(t,e){return{usr:t.state,key:t.key,idx:e}}function sl(t,e,n,r){return n===void 0&&(n=null),rt({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Rr(e):e,{state:n,key:e&&e.key||r||xR()})}function is(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Rr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ER(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=it.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(rt({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=it.Pop;let x=c(),m=x==null?null:x-u;u=x,l&&l({action:a,location:v.location,delta:m})}function f(x,m){a=it.Push;let h=sl(v.location,x,m);n&&n(h,x),u=c()+1;let y=v_(h,u),E=v.createHref(h);try{o.pushState(y,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(x,m){a=it.Replace;let h=sl(v.location,x,m);n&&n(h,x),u=c();let y=v_(h,u),E=v.createHref(h);o.replaceState(y,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function g(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof x=="string"?x:is(x);return me(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let v={get action(){return a},get location(){return t(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(y_,d),l=x,()=>{i.removeEventListener(y_,d),l=null}},createHref(x){return e(i,x)},createURL:g,encodeLocation(x){let m=g(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(x){return o.go(x)}};return v}var tt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(tt||(tt={}));const SR=new Set(["lazy","caseSensitive","path","id","index","children"]);function CR(t){return t.index===!0}function Pp(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(me(i.index!==!0||!i.children,"Cannot specify children on an index route"),me(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),CR(i)){let l=rt({},i,e(i),{id:a});return r[a]=l,l}else{let l=rt({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Pp(i.children,e,o,r)),l}})}function qs(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Rr(e):e,i=Cr(r.pathname||"/",n);if(i==null)return null;let s=pE(t);bR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=MR(s[a],jR(i));return o}function TR(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function pE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=vr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:NR(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of mE(s.path))i(s,o,l)}),e}function mE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=mE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function bR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:DR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const IR=/^:[\w-]+$/,kR=3,RR=2,PR=1,OR=10,AR=-2,__=t=>t==="*";function NR(t,e){let n=t.split("/"),r=n.length;return n.some(__)&&(r+=AR),e&&(r+=RR),n.filter(i=>!__(i)).reduce((i,s)=>i+(IR.test(s)?kR:s===""?PR:OR),r)}function DR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function MR(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Op({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:vr([i,c.pathname]),pathnameBase:zR(vr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=vr([i,c.pathnameBase]))}return s}function Op(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=LR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let v=a[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const g=a[d];return p&&!g?u[f]=void 0:u[f]=FR(g||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function LR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),rs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function jR(t){try{return decodeURI(t)}catch(e){return rs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function FR(t,e){try{return decodeURIComponent(t)}catch(n){return rs(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Cr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function $R(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Rr(t):t;return{pathname:n?n.startsWith("/")?n:UR(n,e):e,search:BR(r),hash:WR(i)}}function UR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Sg(t,e){let n=gE(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Rr(t):(i=rt({},t),me(!i.pathname||!i.pathname.includes("?"),Xf("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),Xf("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),Xf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=$R(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const vr=t=>t.join("/").replace(/\/\/+/g,"/"),zR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,WR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Tg{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function yE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const vE=["post","put","patch","delete"],VR=new Set(vE),HR=["get",...vE],GR=new Set(HR),KR=new Set([301,302,303,307,308]),YR=new Set([307,308]),Jf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},qR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ia={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},_E=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,QR=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),wE="remix-router-transitions";function XR(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;me(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let b=t.detectErrorBoundary;i=R=>({hasErrorBoundary:b(R)})}else i=QR;let s={},o=Pp(t.routes,i,void 0,s),a,l=t.basename||"/",u=rt({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},t.future),c=null,d=new Set,f=null,p=null,g=null,v=t.hydrationData!=null,x=qs(o,t.history.location,l),m=null;if(x==null){let b=wn(404,{pathname:t.history.location.pathname}),{matches:R,route:O}=I_(o);x=R,m={[O.id]:b}}let h,y=x.some(b=>b.route.lazy),E=x.some(b=>b.route.loader);if(y)h=!1;else if(!E)h=!0;else if(u.v7_partialHydration){let b=t.hydrationData?t.hydrationData.loaderData:null,R=t.hydrationData?t.hydrationData.errors:null;h=x.every(O=>O.route.loader&&O.route.loader.hydrate!==!0&&(b&&b[O.route.id]!==void 0||R&&R[O.route.id]!==void 0))}else h=t.hydrationData!=null;let T,_={historyAction:t.history.action,location:t.history.location,matches:x,initialized:h,navigation:Jf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},S=it.Pop,P=!1,k,A=!1,D=new Map,G=null,j=!1,Z=!1,Ie=[],Oe=[],de=new Map,z=0,K=-1,q=new Map,ne=new Set,se=new Map,at=new Map,Re=new Set,Le=new Map,Se=new Map,$e=!1;function Ht(){if(c=t.history.listen(b=>{let{action:R,location:O,delta:B}=b;if($e){$e=!1;return}rs(Se.size===0||B!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Y=sv({currentLocation:_.location,nextLocation:O,historyAction:R});if(Y&&B!=null){$e=!0,t.history.go(B*-1),ks(Y,{state:"blocked",location:O,proceed(){ks(Y,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),t.history.go(B)},reset(){let ge=new Map(_.blockers);ge.set(Y,ia),$({blockers:ge})}});return}return le(R,O)}),n){lP(e,D);let b=()=>uP(e,D);e.addEventListener("pagehide",b),G=()=>e.removeEventListener("pagehide",b)}return _.initialized||le(it.Pop,_.location,{initialHydration:!0}),T}function It(){c&&c(),G&&G(),d.clear(),k&&k.abort(),_.fetchers.forEach((b,R)=>be(R)),_.blockers.forEach((b,R)=>qo(R))}function M(b){return d.add(b),()=>d.delete(b)}function $(b,R){R===void 0&&(R={}),_=rt({},_,b);let O=[],B=[];u.v7_fetcherPersist&&_.fetchers.forEach((Y,ge)=>{Y.state==="idle"&&(Re.has(ge)?B.push(ge):O.push(ge))}),[...d].forEach(Y=>Y(_,{deletedFetchers:B,unstable_viewTransitionOpts:R.viewTransitionOpts,unstable_flushSync:R.flushSync===!0})),u.v7_fetcherPersist&&(O.forEach(Y=>_.fetchers.delete(Y)),B.forEach(Y=>be(Y)))}function J(b,R,O){var B,Y;let{flushSync:ge}=O===void 0?{}:O,re=_.actionData!=null&&_.navigation.formMethod!=null&&Nn(_.navigation.formMethod)&&_.navigation.state==="loading"&&((B=b.state)==null?void 0:B._isRedirect)!==!0,te;R.actionData?Object.keys(R.actionData).length>0?te=R.actionData:te=null:re?te=_.actionData:te=null;let X=R.loaderData?b_(_.loaderData,R.loaderData,R.matches||[],R.errors):_.loaderData,Te=_.blockers;Te.size>0&&(Te=new Map(Te),Te.forEach((Ue,kt)=>Te.set(kt,ia)));let gt=P===!0||_.navigation.formMethod!=null&&Nn(_.navigation.formMethod)&&((Y=b.state)==null?void 0:Y._isRedirect)!==!0;a&&(o=a,a=void 0),j||S===it.Pop||(S===it.Push?t.history.push(b,b.state):S===it.Replace&&t.history.replace(b,b.state));let he;if(S===it.Pop){let Ue=D.get(_.location.pathname);Ue&&Ue.has(b.pathname)?he={currentLocation:_.location,nextLocation:b}:D.has(b.pathname)&&(he={currentLocation:b,nextLocation:_.location})}else if(A){let Ue=D.get(_.location.pathname);Ue?Ue.add(b.pathname):(Ue=new Set([b.pathname]),D.set(_.location.pathname,Ue)),he={currentLocation:_.location,nextLocation:b}}$(rt({},R,{actionData:te,loaderData:X,historyAction:S,location:b,initialized:!0,navigation:Jf,revalidation:"idle",restoreScrollPosition:av(b,R.matches||_.matches),preventScrollReset:gt,blockers:Te}),{viewTransitionOpts:he,flushSync:ge===!0}),S=it.Pop,P=!1,A=!1,j=!1,Z=!1,Ie=[],Oe=[]}async function ae(b,R){if(typeof b=="number"){t.history.go(b);return}let O=Ap(_.location,_.matches,l,u.v7_prependBasename,b,u.v7_relativeSplatPath,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:B,submission:Y,error:ge}=w_(u.v7_normalizeFormMethod,!1,O,R),re=_.location,te=sl(_.location,B,R&&R.state);te=rt({},te,t.history.encodeLocation(te));let X=R&&R.replace!=null?R.replace:void 0,Te=it.Push;X===!0?Te=it.Replace:X===!1||Y!=null&&Nn(Y.formMethod)&&Y.formAction===_.location.pathname+_.location.search&&(Te=it.Replace);let gt=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,he=(R&&R.unstable_flushSync)===!0,Ue=sv({currentLocation:re,nextLocation:te,historyAction:Te});if(Ue){ks(Ue,{state:"blocked",location:te,proceed(){ks(Ue,{state:"proceeding",proceed:void 0,reset:void 0,location:te}),ae(b,R)},reset(){let kt=new Map(_.blockers);kt.set(Ue,ia),$({blockers:kt})}});return}return await le(Te,te,{submission:Y,pendingError:ge,preventScrollReset:gt,replace:R&&R.replace,enableViewTransition:R&&R.unstable_viewTransition,flushSync:he})}function oe(){if(U(),$({revalidation:"loading"}),_.navigation.state!=="submitting"){if(_.navigation.state==="idle"){le(_.historyAction,_.location,{startUninterruptedRevalidation:!0});return}le(S||_.historyAction,_.navigation.location,{overrideNavigation:_.navigation})}}async function le(b,R,O){k&&k.abort(),k=null,S=b,j=(O&&O.startUninterruptedRevalidation)===!0,Wb(_.location,_.matches),P=(O&&O.preventScrollReset)===!0,A=(O&&O.enableViewTransition)===!0;let B=a||o,Y=O&&O.overrideNavigation,ge=qs(B,R,l),re=(O&&O.flushSync)===!0;if(!ge){let kt=wn(404,{pathname:R.pathname}),{matches:yn,route:yt}=I_(B);wf(),J(R,{matches:yn,loaderData:{},errors:{[yt.id]:kt}},{flushSync:re});return}if(_.initialized&&!Z&&nP(_.location,R)&&!(O&&O.submission&&Nn(O.submission.formMethod))){J(R,{matches:ge},{flushSync:re});return}k=new AbortController;let te=oa(t.history,R,k.signal,O&&O.submission),X,Te;if(O&&O.pendingError)Te={[Na(ge).route.id]:O.pendingError};else if(O&&O.submission&&Nn(O.submission.formMethod)){let kt=await ue(te,R,O.submission,ge,{replace:O.replace,flushSync:re});if(kt.shortCircuited)return;X=kt.pendingActionData,Te=kt.pendingActionError,Y=Zf(R,O.submission),re=!1,te=new Request(te.url,{signal:te.signal})}let{shortCircuited:gt,loaderData:he,errors:Ue}=await fe(te,R,ge,Y,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,O&&O.initialHydration===!0,re,X,Te);gt||(k=null,J(R,rt({matches:ge},X?{actionData:X}:{},{loaderData:he,errors:Ue})))}async function ue(b,R,O,B,Y){Y===void 0&&(Y={}),U();let ge=oP(R,O);$({navigation:ge},{flushSync:Y.flushSync===!0});let re,te=Dp(B,R);if(!te.route.action&&!te.route.lazy)re={type:tt.error,error:wn(405,{method:b.method,pathname:R.pathname,routeId:te.route.id})};else if(re=await sa("action",b,te,B,s,i,l,u.v7_relativeSplatPath),b.signal.aborted)return{shortCircuited:!0};if(zi(re)){let X;return Y&&Y.replace!=null?X=Y.replace:X=re.location===_.location.pathname+_.location.search,await W(_,re,{submission:O,replace:X}),{shortCircuited:!0}}if(Qs(re)){let X=Na(B,te.route.id);return(Y&&Y.replace)!==!0&&(S=it.Push),{pendingActionData:{},pendingActionError:{[X.route.id]:re.error}}}if(Ui(re))throw wn(400,{type:"defer-action"});return{pendingActionData:{[te.route.id]:re.data}}}async function fe(b,R,O,B,Y,ge,re,te,X,Te,gt){let he=B||Zf(R,Y),Ue=Y||ge||P_(he),kt=a||o,[yn,yt]=x_(t.history,_,O,Ue,R,u.v7_partialHydration&&te===!0,Z,Ie,Oe,Re,se,ne,kt,l,Te,gt);if(wf(je=>!(O&&O.some(qe=>qe.route.id===je))||yn&&yn.some(qe=>qe.route.id===je)),K=++z,yn.length===0&&yt.length===0){let je=Is();return J(R,rt({matches:O,loaderData:{},errors:gt||null},Te?{actionData:Te}:{},je?{fetchers:new Map(_.fetchers)}:{}),{flushSync:X}),{shortCircuited:!0}}if(!j&&(!u.v7_partialHydration||!te)){yt.forEach(qe=>{let Gn=_.fetchers.get(qe.key),Jl=aa(void 0,Gn?Gn.data:void 0);_.fetchers.set(qe.key,Jl)});let je=Te||_.actionData;$(rt({navigation:he},je?Object.keys(je).length===0?{actionData:null}:{actionData:je}:{},yt.length>0?{fetchers:new Map(_.fetchers)}:{}),{flushSync:X})}yt.forEach(je=>{de.has(je.key)&&mt(je.key),je.controller&&de.set(je.key,je.controller)});let Rs=()=>yt.forEach(je=>mt(je.key));k&&k.signal.addEventListener("abort",Rs);let{results:xf,loaderResults:Ps,fetcherResults:Ar}=await I(_.matches,O,yn,yt,b);if(b.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",Rs),yt.forEach(je=>de.delete(je.key));let ki=k_(xf);if(ki){if(ki.idx>=yn.length){let je=yt[ki.idx-yn.length].key;ne.add(je)}return await W(_,ki.result,{replace:re}),{shortCircuited:!0}}let{loaderData:Ef,errors:Sf}=T_(_,O,yn,Ps,gt,yt,Ar,Le);Le.forEach((je,qe)=>{je.subscribe(Gn=>{(Gn||je.done)&&Le.delete(qe)})});let Cf=Is(),Os=Ql(K),Xl=Cf||Os||yt.length>0;return rt({loaderData:Ef,errors:Sf},Xl?{fetchers:new Map(_.fetchers)}:{})}function we(b,R,O,B){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");de.has(b)&&mt(b);let Y=(B&&B.unstable_flushSync)===!0,ge=a||o,re=Ap(_.location,_.matches,l,u.v7_prependBasename,O,u.v7_relativeSplatPath,R,B==null?void 0:B.relative),te=qs(ge,re,l);if(!te){Q(b,R,wn(404,{pathname:re}),{flushSync:Y});return}let{path:X,submission:Te,error:gt}=w_(u.v7_normalizeFormMethod,!0,re,B);if(gt){Q(b,R,gt,{flushSync:Y});return}let he=Dp(te,X);if(P=(B&&B.preventScrollReset)===!0,Te&&Nn(Te.formMethod)){Ce(b,R,X,he,te,Y,Te);return}se.set(b,{routeId:R,path:X}),xe(b,R,X,he,te,Y,Te)}async function Ce(b,R,O,B,Y,ge,re){if(U(),se.delete(b),!B.route.action&&!B.route.lazy){let qe=wn(405,{method:re.formMethod,pathname:O,routeId:R});Q(b,R,qe,{flushSync:ge});return}let te=_.fetchers.get(b);V(b,aP(re,te),{flushSync:ge});let X=new AbortController,Te=oa(t.history,O,X.signal,re);de.set(b,X);let gt=z,he=await sa("action",Te,B,Y,s,i,l,u.v7_relativeSplatPath);if(Te.signal.aborted){de.get(b)===X&&de.delete(b);return}if(u.v7_fetcherPersist&&Re.has(b)){if(zi(he)||Qs(he)){V(b,Mr(void 0));return}}else{if(zi(he))if(de.delete(b),K>gt){V(b,Mr(void 0));return}else return ne.add(b),V(b,aa(re)),W(_,he,{fetcherSubmission:re});if(Qs(he)){Q(b,R,he.error);return}}if(Ui(he))throw wn(400,{type:"defer-action"});let Ue=_.navigation.location||_.location,kt=oa(t.history,Ue,X.signal),yn=a||o,yt=_.navigation.state!=="idle"?qs(yn,_.navigation.location,l):_.matches;me(yt,"Didn't find any matches after fetcher action");let Rs=++z;q.set(b,Rs);let xf=aa(re,he.data);_.fetchers.set(b,xf);let[Ps,Ar]=x_(t.history,_,yt,re,Ue,!1,Z,Ie,Oe,Re,se,ne,yn,l,{[B.route.id]:he.data},void 0);Ar.filter(qe=>qe.key!==b).forEach(qe=>{let Gn=qe.key,Jl=_.fetchers.get(Gn),Hb=aa(void 0,Jl?Jl.data:void 0);_.fetchers.set(Gn,Hb),de.has(Gn)&&mt(Gn),qe.controller&&de.set(Gn,qe.controller)}),$({fetchers:new Map(_.fetchers)});let ki=()=>Ar.forEach(qe=>mt(qe.key));X.signal.addEventListener("abort",ki);let{results:Ef,loaderResults:Sf,fetcherResults:Cf}=await I(_.matches,yt,Ps,Ar,kt);if(X.signal.aborted)return;X.signal.removeEventListener("abort",ki),q.delete(b),de.delete(b),Ar.forEach(qe=>de.delete(qe.key));let Os=k_(Ef);if(Os){if(Os.idx>=Ps.length){let qe=Ar[Os.idx-Ps.length].key;ne.add(qe)}return W(_,Os.result)}let{loaderData:Xl,errors:je}=T_(_,_.matches,Ps,Sf,void 0,Ar,Cf,Le);if(_.fetchers.has(b)){let qe=Mr(he.data);_.fetchers.set(b,qe)}Ql(Rs),_.navigation.state==="loading"&&Rs>K?(me(S,"Expected pending action"),k&&k.abort(),J(_.navigation.location,{matches:yt,loaderData:Xl,errors:je,fetchers:new Map(_.fetchers)})):($({errors:je,loaderData:b_(_.loaderData,Xl,yt,je),fetchers:new Map(_.fetchers)}),Z=!1)}async function xe(b,R,O,B,Y,ge,re){let te=_.fetchers.get(b);V(b,aa(re,te?te.data:void 0),{flushSync:ge});let X=new AbortController,Te=oa(t.history,O,X.signal);de.set(b,X);let gt=z,he=await sa("loader",Te,B,Y,s,i,l,u.v7_relativeSplatPath);if(Ui(he)&&(he=await SE(he,Te.signal,!0)||he),de.get(b)===X&&de.delete(b),!Te.signal.aborted){if(Re.has(b)){V(b,Mr(void 0));return}if(zi(he))if(K>gt){V(b,Mr(void 0));return}else{ne.add(b),await W(_,he);return}if(Qs(he)){Q(b,R,he.error);return}me(!Ui(he),"Unhandled fetcher deferred data"),V(b,Mr(he.data))}}async function W(b,R,O){let{submission:B,fetcherSubmission:Y,replace:ge}=O===void 0?{}:O;R.revalidate&&(Z=!0);let re=sl(b.location,R.location,{_isRedirect:!0});if(me(re,"Expected a location on the redirect navigation"),n){let Ue=!1;if(R.reloadDocument)Ue=!0;else if(_E.test(R.location)){const kt=t.history.createURL(R.location);Ue=kt.origin!==e.location.origin||Cr(kt.pathname,l)==null}if(Ue){ge?e.location.replace(R.location):e.location.assign(R.location);return}}k=null;let te=ge===!0?it.Replace:it.Push,{formMethod:X,formAction:Te,formEncType:gt}=b.navigation;!B&&!Y&&X&&Te&&gt&&(B=P_(b.navigation));let he=B||Y;if(YR.has(R.status)&&he&&Nn(he.formMethod))await le(te,re,{submission:rt({},he,{formAction:R.location}),preventScrollReset:P});else{let Ue=Zf(re,B);await le(te,re,{overrideNavigation:Ue,fetcherSubmission:Y,preventScrollReset:P})}}async function I(b,R,O,B,Y){let ge=await Promise.all([...O.map(X=>sa("loader",Y,X,R,s,i,l,u.v7_relativeSplatPath)),...B.map(X=>X.matches&&X.match&&X.controller?sa("loader",oa(t.history,X.path,X.controller.signal),X.match,X.matches,s,i,l,u.v7_relativeSplatPath):{type:tt.error,error:wn(404,{pathname:X.path})})]),re=ge.slice(0,O.length),te=ge.slice(O.length);return await Promise.all([R_(b,O,re,re.map(()=>Y.signal),!1,_.loaderData),R_(b,B.map(X=>X.match),te,B.map(X=>X.controller?X.controller.signal:null),!0)]),{results:ge,loaderResults:re,fetcherResults:te}}function U(){Z=!0,Ie.push(...wf()),se.forEach((b,R)=>{de.has(R)&&(Oe.push(R),mt(R))})}function V(b,R,O){O===void 0&&(O={}),_.fetchers.set(b,R),$({fetchers:new Map(_.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function Q(b,R,O,B){B===void 0&&(B={});let Y=Na(_.matches,R);be(b),$({errors:{[Y.route.id]:O},fetchers:new Map(_.fetchers)},{flushSync:(B&&B.flushSync)===!0})}function ce(b){return u.v7_fetcherPersist&&(at.set(b,(at.get(b)||0)+1),Re.has(b)&&Re.delete(b)),_.fetchers.get(b)||qR}function be(b){let R=_.fetchers.get(b);de.has(b)&&!(R&&R.state==="loading"&&q.has(b))&&mt(b),se.delete(b),q.delete(b),ne.delete(b),Re.delete(b),_.fetchers.delete(b)}function lt(b){if(u.v7_fetcherPersist){let R=(at.get(b)||0)-1;R<=0?(at.delete(b),Re.add(b)):at.set(b,R)}else be(b);$({fetchers:new Map(_.fetchers)})}function mt(b){let R=de.get(b);me(R,"Expected fetch controller: "+b),R.abort(),de.delete(b)}function bs(b){for(let R of b){let O=ce(R),B=Mr(O.data);_.fetchers.set(R,B)}}function Is(){let b=[],R=!1;for(let O of ne){let B=_.fetchers.get(O);me(B,"Expected fetcher: "+O),B.state==="loading"&&(ne.delete(O),b.push(O),R=!0)}return bs(b),R}function Ql(b){let R=[];for(let[O,B]of q)if(B<b){let Y=_.fetchers.get(O);me(Y,"Expected fetcher: "+O),Y.state==="loading"&&(mt(O),q.delete(O),R.push(O))}return bs(R),R.length>0}function iv(b,R){let O=_.blockers.get(b)||ia;return Se.get(b)!==R&&Se.set(b,R),O}function qo(b){_.blockers.delete(b),Se.delete(b)}function ks(b,R){let O=_.blockers.get(b)||ia;me(O.state==="unblocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="proceeding"||O.state==="blocked"&&R.state==="unblocked"||O.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+R.state);let B=new Map(_.blockers);B.set(b,R),$({blockers:B})}function sv(b){let{currentLocation:R,nextLocation:O,historyAction:B}=b;if(Se.size===0)return;Se.size>1&&rs(!1,"A router only supports one blocker at a time");let Y=Array.from(Se.entries()),[ge,re]=Y[Y.length-1],te=_.blockers.get(ge);if(!(te&&te.state==="proceeding")&&re({currentLocation:R,nextLocation:O,historyAction:B}))return ge}function wf(b){let R=[];return Le.forEach((O,B)=>{(!b||b(B))&&(O.cancel(),R.push(B),Le.delete(B))}),R}function Bb(b,R,O){if(f=b,g=R,p=O||null,!v&&_.navigation===Jf){v=!0;let B=av(_.location,_.matches);B!=null&&$({restoreScrollPosition:B})}return()=>{f=null,g=null,p=null}}function ov(b,R){return p&&p(b,R.map(B=>TR(B,_.loaderData)))||b.key}function Wb(b,R){if(f&&g){let O=ov(b,R);f[O]=g()}}function av(b,R){if(f){let O=ov(b,R),B=f[O];if(typeof B=="number")return B}return null}function Vb(b){s={},a=Pp(b,i,void 0,s)}return T={get basename(){return l},get future(){return u},get state(){return _},get routes(){return o},get window(){return e},initialize:Ht,subscribe:M,enableScrollRestoration:Bb,navigate:ae,fetch:we,revalidate:oe,createHref:b=>t.history.createHref(b),encodeLocation:b=>t.history.encodeLocation(b),getFetcher:ce,deleteFetcher:lt,dispose:It,getBlocker:iv,deleteBlocker:qo,_internalFetchControllers:de,_internalActiveDeferreds:Le,_internalSetRoutes:Vb},T}function JR(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Ap(t,e,n,r,i,s,o,a){let l,u;if(o){l=[];for(let d of e)if(l.push(d),d.route.id===o){u=d;break}}else l=e,u=e[e.length-1];let c=Cg(i||".",Sg(l,s),Cr(t.pathname,n)||t.pathname,a==="path");return i==null&&(c.search=t.search,c.hash=t.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!bg(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:vr([n,c.pathname])),is(c)}function w_(t,e,n,r){if(!r||!JR(r))return{path:n};if(r.formMethod&&!sP(r.formMethod))return{path:n,error:wn(405,{method:r.formMethod})};let i=()=>({path:n,error:wn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=EE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Nn(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,g)=>{let[v,x]=g;return""+p+v+"="+x+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Nn(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}me(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Np(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Np(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=C_(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=C_(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Nn(c.formMethod))return{path:n,submission:c};let d=Rr(n);return e&&d.search&&bg(d.search)&&l.append("index",""),d.search="?"+l,{path:is(d),submission:c}}function ZR(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function x_(t,e,n,r,i,s,o,a,l,u,c,d,f,p,g,v){let x=v?Object.values(v)[0]:g?Object.values(g)[0]:void 0,m=t.createURL(e.location),h=t.createURL(i),y=v?Object.keys(v)[0]:void 0,T=ZR(n,y).filter((S,P)=>{let{route:k}=S;if(k.lazy)return!0;if(k.loader==null)return!1;if(s)return k.loader.hydrate?!0:e.loaderData[k.id]===void 0&&(!e.errors||e.errors[k.id]===void 0);if(eP(e.loaderData,e.matches[P],S)||a.some(G=>G===S.route.id))return!0;let A=e.matches[P],D=S;return E_(S,rt({currentUrl:m,currentParams:A.params,nextUrl:h,nextParams:D.params},r,{actionResult:x,defaultShouldRevalidate:o||m.pathname+m.search===h.pathname+h.search||m.search!==h.search||xE(A,D)}))}),_=[];return c.forEach((S,P)=>{if(s||!n.some(j=>j.route.id===S.routeId)||u.has(P))return;let k=qs(f,S.path,p);if(!k){_.push({key:P,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let A=e.fetchers.get(P),D=Dp(k,S.path),G=!1;d.has(P)?G=!1:l.includes(P)?G=!0:A&&A.state!=="idle"&&A.data===void 0?G=o:G=E_(D,rt({currentUrl:m,currentParams:e.matches[e.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:x,defaultShouldRevalidate:o})),G&&_.push({key:P,routeId:S.routeId,path:S.path,matches:k,match:D,controller:new AbortController})}),[T,_]}function eP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function xE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function E_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function S_(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];me(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";rs(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!SR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,rt({},e(i),{lazy:void 0}))}async function sa(t,e,n,r,i,s,o,a,l){l===void 0&&(l={});let u,c,d,f=v=>{let x,m=new Promise((h,y)=>x=y);return d=()=>x(),e.signal.addEventListener("abort",d),Promise.race([v({request:e,params:n.params,context:l.requestContext}),m])};try{let v=n.route[t];if(n.route.lazy)if(v){let x,m=await Promise.all([f(v).catch(h=>{x=h}),S_(n.route,s,i)]);if(x)throw x;c=m[0]}else if(await S_(n.route,s,i),v=n.route[t],v)c=await f(v);else if(t==="action"){let x=new URL(e.url),m=x.pathname+x.search;throw wn(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:tt.data,data:void 0};else if(v)c=await f(v);else{let x=new URL(e.url),m=x.pathname+x.search;throw wn(404,{pathname:m})}me(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){u=tt.error,c=v}finally{d&&e.signal.removeEventListener("abort",d)}if(iP(c)){let v=c.status;if(KR.has(v)){let m=c.headers.get("Location");if(me(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!_E.test(m))m=Ap(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m,a);else if(!l.isStaticRequest){let h=new URL(e.url),y=m.startsWith("//")?new URL(h.protocol+m):new URL(m),E=Cr(y.pathname,o)!=null;y.origin===h.origin&&E&&(m=y.pathname+y.search+y.hash)}if(l.isStaticRequest)throw c.headers.set("Location",m),c;return{type:tt.redirect,status:v,location:m,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===tt.error?tt.error:tt.data,response:c};let x;try{let m=c.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?c.body==null?x=null:x=await c.json():x=await c.text()}catch(m){return{type:tt.error,error:m}}return u===tt.error?{type:u,error:new Tg(v,c.statusText,x),headers:c.headers}:{type:tt.data,data:x,statusCode:c.status,headers:c.headers}}if(u===tt.error)return{type:u,error:c};if(rP(c)){var p,g;return{type:tt.deferred,deferredData:c,statusCode:(p=c.init)==null?void 0:p.status,headers:((g=c.init)==null?void 0:g.headers)&&new Headers(c.init.headers)}}return{type:tt.data,data:c}}function oa(t,e,n,r){let i=t.createURL(EE(e)).toString(),s={signal:n};if(r&&Nn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Np(r.formData):s.body=r.formData}return new Request(i,s)}function Np(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function C_(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function tP(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(me(!zi(c),"Cannot handle redirect results in processLoaderData"),Qs(c)){let p=Na(t,f),g=c.error;r&&(g=Object.values(r)[0],r=void 0),o=o||{},o[p.route.id]==null&&(o[p.route.id]=g),s[f]=void 0,l||(l=!0,a=yE(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else Ui(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function T_(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=tP(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:p}=s[c];me(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let g=o[c];if(!(p&&p.signal.aborted))if(Qs(g)){let v=Na(t.matches,f==null?void 0:f.route.id);u&&u[v.route.id]||(u=rt({},u,{[v.route.id]:g.error})),t.fetchers.delete(d)}else if(zi(g))me(!1,"Unhandled fetcher revalidation redirect");else if(Ui(g))me(!1,"Unhandled fetcher deferred data");else{let v=Mr(g.data);t.fetchers.set(d,v)}}return{loaderData:l,errors:u}}function b_(t,e,n,r){let i=rt({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Na(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function I_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function wn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Tg(t||500,o,new Error(a),!0)}function k_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(zi(n))return{result:n,idx:e}}}function EE(t){let e=typeof t=="string"?Rr(t):t;return is(rt({},e,{hash:""}))}function nP(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Ui(t){return t.type===tt.deferred}function Qs(t){return t.type===tt.error}function zi(t){return(t&&t.type)===tt.redirect}function rP(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function iP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function sP(t){return GR.has(t.toLowerCase())}function Nn(t){return VR.has(t.toLowerCase())}async function R_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!xE(u,l)&&(s&&s[l.route.id])!==void 0;if(Ui(a)&&(i||c)){let d=r[o];me(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await SE(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function SE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:tt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:tt.error,error:i}}return{type:tt.data,data:t.deferredData.data}}}function bg(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Dp(t,e){let n=typeof e=="string"?Rr(e).search:e.search;if(t[t.length-1].route.index&&bg(n||""))return t[t.length-1];let r=gE(t);return r[r.length-1]}function P_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Zf(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function oP(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function aa(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function aP(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Mr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function lP(t,e){try{let n=t.sessionStorage.getItem(wE);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function uP(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(wE,JSON.stringify(n))}catch(r){rs(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ol.apply(this,arguments)}const Nl=C.createContext(null),Ig=C.createContext(null),Si=C.createContext(null),Sd=C.createContext(null),Ci=C.createContext({outlet:null,matches:[],isDataRoute:!1}),CE=C.createContext(null);function cP(t,e){let{relative:n}=e===void 0?{}:e;Dl()||me(!1);let{basename:r,navigator:i}=C.useContext(Si),{hash:s,pathname:o,search:a}=Td(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:vr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Dl(){return C.useContext(Sd)!=null}function Fo(){return Dl()||me(!1),C.useContext(Sd).location}function TE(t){C.useContext(Si).static||C.useLayoutEffect(t)}function Cd(){let{isDataRoute:t}=C.useContext(Ci);return t?SP():dP()}function dP(){Dl()||me(!1);let t=C.useContext(Nl),{basename:e,future:n,navigator:r}=C.useContext(Si),{matches:i}=C.useContext(Ci),{pathname:s}=Fo(),o=JSON.stringify(Sg(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return TE(()=>{a.current=!0}),C.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Cg(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:vr([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}const fP=C.createContext(null);function hP(t){let e=C.useContext(Ci).outlet;return e&&C.createElement(fP.Provider,{value:t},e)}function Td(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.useContext(Si),{matches:i}=C.useContext(Ci),{pathname:s}=Fo(),o=JSON.stringify(Sg(i,r.v7_relativeSplatPath));return C.useMemo(()=>Cg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function pP(t,e,n,r){Dl()||me(!1);let{navigator:i}=C.useContext(Si),{matches:s}=C.useContext(Ci),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Fo(),c;if(e){var d;let x=typeof e=="string"?Rr(e):e;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||me(!1),c=x}else c=u;let f=c.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",g=qs(t,{pathname:p}),v=_P(g&&g.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:vr([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:vr([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&v?C.createElement(Sd.Provider,{value:{location:ol({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:it.Pop}},v):v}function mP(){let t=kE(),e=yE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,null)}const gP=C.createElement(mP,null);class yP extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?C.createElement(Ci.Provider,{value:this.props.routeContext},C.createElement(CE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vP(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Nl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Ci.Provider,{value:e},r)}function _P(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||me(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:p}=n,g=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let p,g=!1,v=null,x=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||gP,l&&(u<0&&f===0?(CP("route-fallback",!1),g=!0,x=null):u===f&&(g=!0,x=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),h=()=>{let y;return p?y=v:g?y=x:d.route.Component?y=C.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,C.createElement(vP,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?C.createElement(yP,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var bE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(bE||{}),wc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(wc||{});function wP(t){let e=C.useContext(Nl);return e||me(!1),e}function xP(t){let e=C.useContext(Ig);return e||me(!1),e}function EP(t){let e=C.useContext(Ci);return e||me(!1),e}function IE(t){let e=EP(),n=e.matches[e.matches.length-1];return n.route.id||me(!1),n.route.id}function kE(){var t;let e=C.useContext(CE),n=xP(wc.UseRouteError),r=IE(wc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function SP(){let{router:t}=wP(bE.UseNavigateStable),e=IE(wc.UseNavigateStable),n=C.useRef(!1);return TE(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ol({fromRouteId:e},s)))},[t,e])}const O_={};function CP(t,e,n){!e&&!O_[t]&&(O_[t]=!0)}function TP(t){return hP(t.context)}function bP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=it.Pop,navigator:s,static:o=!1,future:a}=t;Dl()&&me(!1);let l=e.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:s,static:o,future:ol({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Rr(r));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:g="default"}=r,v=C.useMemo(()=>{let x=Cr(c,l);return x==null?null:{location:{pathname:x,search:d,hash:f,state:p,key:g},navigationType:i}},[l,c,d,f,p,g,i]);return v==null?null:C.createElement(Si.Provider,{value:u},C.createElement(Sd.Provider,{children:n,value:v}))}new Promise(()=>{});function IP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:C.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:C.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:C.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_o.apply(this,arguments)}function RE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function RP(t,e){return t.button===0&&(!e||e==="_self")&&!kP(t)}const PP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],OP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],AP="6";try{window.__reactRouterVersion=AP}catch{}function NP(t,e){return XR({basename:e==null?void 0:e.basename,future:_o({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:wR({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||DP(),routes:t,mapRouteProperties:IP,window:e==null?void 0:e.window}).initialize()}function DP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=_o({},e,{errors:MP(e.errors)})),e}function MP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Tg(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const PE=C.createContext({isTransitioning:!1}),LP=C.createContext(new Map),jP="startTransition",A_=Lh[jP],FP="flushSync",N_=_R[FP];function $P(t){A_?A_(t):t()}function la(t){N_?N_(t):t()}let UP=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function zP(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=C.useState(n.state),[o,a]=C.useState(),[l,u]=C.useState({isTransitioning:!1}),[c,d]=C.useState(),[f,p]=C.useState(),[g,v]=C.useState(),x=C.useRef(new Map),{v7_startTransition:m}=r||{},h=C.useCallback(S=>{m?$P(S):S()},[m]),y=C.useCallback((S,P)=>{let{deletedFetchers:k,unstable_flushSync:A,unstable_viewTransitionOpts:D}=P;k.forEach(j=>x.current.delete(j)),S.fetchers.forEach((j,Z)=>{j.data!==void 0&&x.current.set(Z,j.data)});let G=n.window==null||typeof n.window.document.startViewTransition!="function";if(!D||G){A?la(()=>s(S)):h(()=>s(S));return}if(A){la(()=>{f&&(c&&c.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:D.currentLocation,nextLocation:D.nextLocation})});let j=n.window.document.startViewTransition(()=>{la(()=>s(S))});j.finished.finally(()=>{la(()=>{d(void 0),p(void 0),a(void 0),u({isTransitioning:!1})})}),la(()=>p(j));return}f?(c&&c.resolve(),f.skipTransition(),v({state:S,currentLocation:D.currentLocation,nextLocation:D.nextLocation})):(a(S),u({isTransitioning:!0,flushSync:!1,currentLocation:D.currentLocation,nextLocation:D.nextLocation}))},[n.window,f,c,x,h]);C.useLayoutEffect(()=>n.subscribe(y),[n,y]),C.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new UP)},[l]),C.useEffect(()=>{if(c&&o&&n.window){let S=o,P=c.promise,k=n.window.document.startViewTransition(async()=>{h(()=>s(S)),await P});k.finished.finally(()=>{d(void 0),p(void 0),a(void 0),u({isTransitioning:!1})}),p(k)}},[h,o,c,n.window]),C.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,f,i.location,o]),C.useEffect(()=>{!l.isTransitioning&&g&&(a(g.state),u({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),v(void 0))},[l.isTransitioning,g]),C.useEffect(()=>{},[]);let E=C.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:S=>n.navigate(S),push:(S,P,k)=>n.navigate(S,{state:P,preventScrollReset:k==null?void 0:k.preventScrollReset}),replace:(S,P,k)=>n.navigate(S,{replace:!0,state:P,preventScrollReset:k==null?void 0:k.preventScrollReset})}),[n]),T=n.basename||"/",_=C.useMemo(()=>({router:n,navigator:E,static:!1,basename:T}),[n,E,T]);return C.createElement(C.Fragment,null,C.createElement(Nl.Provider,{value:_},C.createElement(Ig.Provider,{value:i},C.createElement(LP.Provider,{value:x.current},C.createElement(PE.Provider,{value:l},C.createElement(bP,{basename:T,location:i.location,navigationType:i.historyAction,navigator:E,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?C.createElement(BP,{routes:n.routes,future:n.future,state:i}):e))))),null)}function BP(t){let{routes:e,future:n,state:r}=t;return pP(e,void 0,r,n)}const WP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",VP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ml=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=RE(e,PP),{basename:p}=C.useContext(Si),g,v=!1;if(typeof u=="string"&&VP.test(u)&&(g=u,WP))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),T=Cr(E.pathname,p);E.origin===y.origin&&T!=null?u=T+E.search+E.hash:v=!0}catch{}let x=cP(u,{relative:i}),m=KP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(y){r&&r(y),y.defaultPrevented||m(y)}return C.createElement("a",_o({},f,{href:g||x,onClick:v||s?r:h,ref:n,target:l}))}),HP=C.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=RE(e,OP),f=Td(l,{relative:d.relative}),p=Fo(),g=C.useContext(Ig),{navigator:v,basename:x}=C.useContext(Si),m=g!=null&&YP(f)&&u===!0,h=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,y=p.pathname,E=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(y=y.toLowerCase(),E=E?E.toLowerCase():null,h=h.toLowerCase()),E&&x&&(E=Cr(E,x)||E);const T=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let _=y===h||!o&&y.startsWith(h)&&y.charAt(T)==="/",S=E!=null&&(E===h||!o&&E.startsWith(h)&&E.charAt(h.length)==="/"),P={isActive:_,isPending:S,isTransitioning:m},k=_?r:void 0,A;typeof s=="function"?A=s(P):A=[s,_?"active":null,S?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let D=typeof a=="function"?a(P):a;return C.createElement(Ml,_o({},d,{"aria-current":k,className:A,ref:n,style:D,to:l,unstable_viewTransition:u}),typeof c=="function"?c(P):c)});var Mp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Mp||(Mp={}));var D_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(D_||(D_={}));function GP(t){let e=C.useContext(Nl);return e||me(!1),e}function KP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Cd(),u=Fo(),c=Td(t,{relative:o});return C.useCallback(d=>{if(RP(d,n)){d.preventDefault();let f=r!==void 0?r:is(u)===is(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function YP(t,e){e===void 0&&(e={});let n=C.useContext(PE);n==null&&me(!1);let{basename:r}=GP(Mp.useViewTransitionState),i=Td(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Cr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Cr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Op(i.pathname,o)!=null||Op(i.pathname,s)!=null}var OE={exports:{}},AE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=C;function qP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var QP=typeof Object.is=="function"?Object.is:qP,XP=Ll.useSyncExternalStore,JP=Ll.useRef,ZP=Ll.useEffect,eO=Ll.useMemo,tO=Ll.useDebugValue;AE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=JP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=eO(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var g=o.value;if(i(g,p))return d=g}return d=p}if(g=d,QP(c,p))return g;var v=r(p);return i!==void 0&&i(g,v)?g:(c=p,d=v)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=XP(t,s[0],s[1]);return ZP(function(){o.hasValue=!0,o.value=a},[a]),tO(a),a};OE.exports=AE;var nO=OE.exports,an="default"in Lh?ot:Lh,M_=Symbol.for("react-redux-context"),L_=typeof globalThis<"u"?globalThis:{};function rO(){if(!an.createContext)return{};const t=L_[M_]??(L_[M_]=new Map);let e=t.get(an.createContext);return e||(e=an.createContext(null),t.set(an.createContext,e)),e}var fi=rO(),iO=()=>{throw new Error("uSES not initialized!")};function kg(t=fi){return function(){return an.useContext(t)}}var NE=kg(),DE=iO,sO=t=>{DE=t},oO=(t,e)=>t===e;function aO(t=fi){const e=t===fi?NE:kg(t),n=(r,i={})=>{const{equalityFn:s=oO,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=e();an.useRef(!0);const f=an.useCallback({[r.name](g){return r(g)}}[r.name],[r,c,o.stabilityCheck]),p=DE(l.addNestedSub,a.getState,u||a.getState,f,s);return an.useDebugValue(p),p};return Object.assign(n,{withTypes:()=>n}),n}var Rg=aO();function lO(t){t()}function uO(){let t=null,e=null;return{clear(){t=null,e=null},notify(){lO(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var j_={notify(){},get:()=>[]};function cO(t,e){let n,r=j_,i=0,s=!1;function o(v){c();const x=r.subscribe(v);let m=!1;return()=>{m||(m=!0,x(),d())}}function a(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return s}function c(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=uO())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=j_)}function f(){s||(s=!0,c())}function p(){s&&(s=!1,d())}const g={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return g}var dO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fO=dO?an.useLayoutEffect:an.useEffect;function hO({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=an.useMemo(()=>{const u=cO(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=an.useMemo(()=>t.getState(),[t]);fO(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||fi;return an.createElement(l.Provider,{value:o},n)}var pO=hO;function ME(t=fi){const e=t===fi?NE:kg(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var mO=ME();function gO(t=fi){const e=t===fi?mO:ME(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var $o=gO();sO(nO.useSyncExternalStoreWithSelector);var Ct=function(){return Ct=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ct.apply(this,arguments)};function wo(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var He="-ms-",Da="-moz-",Ae="-webkit-",LE="comm",bd="rule",Pg="decl",yO="@import",jE="@keyframes",vO="@layer",FE=Math.abs,Og=String.fromCharCode,Lp=Object.assign;function _O(t,e){return xt(t,0)^45?(((e<<2^xt(t,0))<<2^xt(t,1))<<2^xt(t,2))<<2^xt(t,3):0}function $E(t){return t.trim()}function lr(t,e){return(t=e.exec(t))?t[0]:t}function pe(t,e,n){return t.replace(e,n)}function Fu(t,e,n){return t.indexOf(e,n)}function xt(t,e){return t.charCodeAt(e)|0}function xo(t,e,n){return t.slice(e,n)}function Qn(t){return t.length}function UE(t){return t.length}function wa(t,e){return e.push(t),t}function wO(t,e){return t.map(e).join("")}function F_(t,e){return t.filter(function(n){return!lr(n,e)})}var Id=1,Eo=1,zE=0,In=0,ut=0,Uo="";function kd(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Id,column:Eo,length:o,return:"",siblings:a}}function Lr(t,e){return Lp(kd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ns(t){for(;t.root;)t=Lr(t.root,{children:[t]});wa(t,t.siblings)}function xO(){return ut}function EO(){return ut=In>0?xt(Uo,--In):0,Eo--,ut===10&&(Eo=1,Id--),ut}function zn(){return ut=In<zE?xt(Uo,In++):0,Eo++,ut===10&&(Eo=1,Id++),ut}function Ki(){return xt(Uo,In)}function $u(){return In}function Rd(t,e){return xo(Uo,t,e)}function jp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function SO(t){return Id=Eo=1,zE=Qn(Uo=t),In=0,[]}function CO(t){return Uo="",t}function eh(t){return $E(Rd(In-1,Fp(t===91?t+2:t===40?t+1:t)))}function TO(t){for(;(ut=Ki())&&ut<33;)zn();return jp(t)>2||jp(ut)>3?"":" "}function bO(t,e){for(;--e&&zn()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return Rd(t,$u()+(e<6&&Ki()==32&&zn()==32))}function Fp(t){for(;zn();)switch(ut){case t:return In;case 34:case 39:t!==34&&t!==39&&Fp(ut);break;case 40:t===41&&Fp(t);break;case 92:zn();break}return In}function IO(t,e){for(;zn()&&t+ut!==57;)if(t+ut===84&&Ki()===47)break;return"/*"+Rd(e,In-1)+"*"+Og(t===47?t:zn())}function kO(t){for(;!jp(Ki());)zn();return Rd(t,In)}function RO(t){return CO(Uu("",null,null,null,[""],t=SO(t),0,[0],t))}function Uu(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,p=0,g=0,v=1,x=1,m=1,h=0,y="",E=i,T=s,_=r,S=y;x;)switch(g=h,h=zn()){case 40:if(g!=108&&xt(S,d-1)==58){Fu(S+=pe(eh(h),"&","&\f"),"&\f",FE(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:S+=eh(h);break;case 9:case 10:case 13:case 32:S+=TO(g);break;case 92:S+=bO($u()-1,7);continue;case 47:switch(Ki()){case 42:case 47:wa(PO(IO(zn(),$u()),e,n,l),l);break;default:S+="/"}break;case 123*v:a[u++]=Qn(S)*m;case 125*v:case 59:case 0:switch(h){case 0:case 125:x=0;case 59+c:m==-1&&(S=pe(S,/\f/g,"")),p>0&&Qn(S)-d&&wa(p>32?U_(S+";",r,n,d-1,l):U_(pe(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(wa(_=$_(S,e,n,u,c,i,a,y,E=[],T=[],d,s),s),h===123)if(c===0)Uu(S,e,_,_,E,s,d,a,T);else switch(f===99&&xt(S,3)===110?100:f){case 100:case 108:case 109:case 115:Uu(t,_,_,r&&wa($_(t,_,_,0,0,i,a,y,i,E=[],d,T),T),i,T,d,a,r?E:T);break;default:Uu(S,_,_,_,[""],T,0,a,T)}}u=c=p=0,v=m=1,y=S="",d=o;break;case 58:d=1+Qn(S),p=g;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&EO()==125)continue}switch(S+=Og(h),h*v){case 38:m=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(Qn(S)-1)*m,m=1;break;case 64:Ki()===45&&(S+=eh(zn())),f=Ki(),c=d=Qn(y=S+=kO($u())),h++;break;case 45:g===45&&Qn(S)==2&&(v=0)}}return s}function $_(t,e,n,r,i,s,o,a,l,u,c,d){for(var f=i-1,p=i===0?s:[""],g=UE(p),v=0,x=0,m=0;v<r;++v)for(var h=0,y=xo(t,f+1,f=FE(x=o[v])),E=t;h<g;++h)(E=$E(x>0?p[h]+" "+y:pe(y,/&\f/g,p[h])))&&(l[m++]=E);return kd(t,e,n,i===0?bd:a,l,u,c,d)}function PO(t,e,n,r){return kd(t,e,n,LE,Og(xO()),xo(t,2,-2),0,r)}function U_(t,e,n,r,i){return kd(t,e,n,Pg,xo(t,0,r),xo(t,r+1,-1),r,i)}function BE(t,e,n){switch(_O(t,e)){case 5103:return Ae+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+t+t;case 4789:return Da+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+t+Da+t+He+t+t;case 5936:switch(xt(t,e+11)){case 114:return Ae+t+He+pe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ae+t+He+pe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ae+t+He+pe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ae+t+He+t+t;case 6165:return Ae+t+He+"flex-"+t+t;case 5187:return Ae+t+pe(t,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+He+"flex-$1$2")+t;case 5443:return Ae+t+He+"flex-item-"+pe(t,/flex-|-self/g,"")+(lr(t,/flex-|baseline/)?"":He+"grid-row-"+pe(t,/flex-|-self/g,""))+t;case 4675:return Ae+t+He+"flex-line-pack"+pe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ae+t+He+pe(t,"shrink","negative")+t;case 5292:return Ae+t+He+pe(t,"basis","preferred-size")+t;case 6060:return Ae+"box-"+pe(t,"-grow","")+Ae+t+He+pe(t,"grow","positive")+t;case 4554:return Ae+pe(t,/([^-])(transform)/g,"$1"+Ae+"$2")+t;case 6187:return pe(pe(pe(t,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),t,"")+t;case 5495:case 3959:return pe(t,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return pe(pe(t,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+He+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+t+t;case 4200:if(!lr(t,/flex-|baseline/))return He+"grid-column-align"+xo(t,e)+t;break;case 2592:case 3360:return He+pe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,lr(r.props,/grid-\w+-end/)})?~Fu(t+(n=n[e].value),"span",0)?t:He+pe(t,"-start","")+t+He+"grid-row-span:"+(~Fu(n,"span",0)?lr(n,/\d+/):+lr(n,/\d+/)-+lr(t,/\d+/))+";":He+pe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return lr(r.props,/grid-\w+-start/)})?t:He+pe(pe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return pe(t,/(.+)-inline(.+)/,Ae+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qn(t)-1-e>6)switch(xt(t,e+1)){case 109:if(xt(t,e+4)!==45)break;case 102:return pe(t,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+Da+(xt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Fu(t,"stretch",0)?BE(pe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return pe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return He+i+":"+s+u+(o?He+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(xt(t,e+6)===121)return pe(t,":",":"+Ae)+t;break;case 6444:switch(xt(t,xt(t,14)===45?18:11)){case 120:return pe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae+(xt(t,14)===45?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+He+"$2box$3")+t;case 100:return pe(t,":",":"+He)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(t,"scroll-","scroll-snap-")+t}return t}function xc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function OO(t,e,n,r){switch(t.type){case vO:if(t.children.length)break;case yO:case Pg:return t.return=t.return||t.value;case LE:return"";case jE:return t.return=t.value+"{"+xc(t.children,r)+"}";case bd:if(!Qn(t.value=t.props.join(",")))return""}return Qn(n=xc(t.children,r))?t.return=t.value+"{"+n+"}":""}function AO(t){var e=UE(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function NO(t){return function(e){e.root||(e=e.return)&&t(e)}}function DO(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Pg:t.return=BE(t.value,t.length,n);return;case jE:return xc([Lr(t,{value:pe(t.value,"@","@"+Ae)})],r);case bd:if(t.length)return wO(n=t.props,function(i){switch(lr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ns(Lr(t,{props:[pe(i,/:(read-\w+)/,":"+Da+"$1")]})),Ns(Lr(t,{props:[i]})),Lp(t,{props:F_(n,r)});break;case"::placeholder":Ns(Lr(t,{props:[pe(i,/:(plac\w+)/,":"+Ae+"input-$1")]})),Ns(Lr(t,{props:[pe(i,/:(plac\w+)/,":"+Da+"$1")]})),Ns(Lr(t,{props:[pe(i,/:(plac\w+)/,He+"input-$1")]})),Ns(Lr(t,{props:[i]})),Lp(t,{props:F_(n,r)});break}return""})}}var MO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rn={},So=typeof process<"u"&&rn!==void 0&&(rn.REACT_APP_SC_ATTR||rn.SC_ATTR)||"data-styled",WE="active",VE="data-styled-version",Pd="6.1.8",Ag=`/*!sc*/
`,Ng=typeof window<"u"&&"HTMLElement"in window,LO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&rn!==void 0&&rn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&rn.REACT_APP_SC_DISABLE_SPEEDY!==""?rn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&rn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&rn!==void 0&&rn.SC_DISABLE_SPEEDY!==void 0&&rn.SC_DISABLE_SPEEDY!==""&&rn.SC_DISABLE_SPEEDY!=="false"&&rn.SC_DISABLE_SPEEDY),jO={},Od=Object.freeze([]),Co=Object.freeze({});function HE(t,e,n){return n===void 0&&(n=Co),t.theme!==n.theme&&t.theme||e||n.theme}var GE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),FO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$O=/(^-|-$)/g;function z_(t){return t.replace(FO,"-").replace($O,"")}var UO=/(a)(d)/gi,gu=52,B_=function(t){return String.fromCharCode(t+(t>25?39:97))};function $p(t){var e,n="";for(e=Math.abs(t);e>gu;e=e/gu|0)n=B_(e%gu)+n;return(B_(e%gu)+n).replace(UO,"$1-$2")}var th,KE=5381,Xs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},YE=function(t){return Xs(KE,t)};function Dg(t){return $p(YE(t)>>>0)}function zO(t){return t.displayName||t.name||"Component"}function nh(t){return typeof t=="string"&&!0}var qE=typeof Symbol=="function"&&Symbol.for,QE=qE?Symbol.for("react.memo"):60115,BO=qE?Symbol.for("react.forward_ref"):60112,WO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},VO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},XE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},HO=((th={})[BO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},th[QE]=XE,th);function W_(t){return("type"in(e=t)&&e.type.$$typeof)===QE?XE:"$$typeof"in t?HO[t.$$typeof]:WO;var e}var GO=Object.defineProperty,KO=Object.getOwnPropertyNames,V_=Object.getOwnPropertySymbols,YO=Object.getOwnPropertyDescriptor,qO=Object.getPrototypeOf,H_=Object.prototype;function JE(t,e,n){if(typeof e!="string"){if(H_){var r=qO(e);r&&r!==H_&&JE(t,r,n)}var i=KO(e);V_&&(i=i.concat(V_(e)));for(var s=W_(t),o=W_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in VO||n&&n[l]||o&&l in o||s&&l in s)){var u=YO(e,l);try{GO(t,l,u)}catch{}}}}return t}function ss(t){return typeof t=="function"}function Mg(t){return typeof t=="object"&&"styledComponentId"in t}function Bi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ec(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function al(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Up(t,e,n){if(n===void 0&&(n=!1),!n&&!al(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Up(t[r],e[r]);else if(al(e))for(var r in e)t[r]=Up(t[r],e[r]);return t}function Lg(t,e){Object.defineProperty(t,"toString",{value:e})}function os(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var QO=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw os(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Ag);return n},t}(),zu=new Map,Sc=new Map,Bu=1,yu=function(t){if(zu.has(t))return zu.get(t);for(;Sc.has(Bu);)Bu++;var e=Bu++;return zu.set(t,e),Sc.set(e,t),e},XO=function(t,e){Bu=e+1,zu.set(t,e),Sc.set(e,t)},JO="style[".concat(So,"][").concat(VE,'="').concat(Pd,'"]'),ZO=new RegExp("^".concat(So,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eA=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},tA=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Ag),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(ZO);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(XO(c,u),eA(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function nA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ZE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(So,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(So,WE),r.setAttribute(VE,Pd);var o=nA();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},rA=function(){function t(e){this.element=ZE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw os(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),iA=function(){function t(e){this.element=ZE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),sA=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),G_=Ng,oA={isServer:!Ng,useCSSOMInjection:!LO},Cc=function(){function t(e,n,r){e===void 0&&(e=Co),n===void 0&&(n={});var i=this;this.options=Ct(Ct({},oA),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Ng&&G_&&(G_=!1,function(s){for(var o=document.querySelectorAll(JO),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(So)!==WE&&(tA(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Lg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var f=function(m){return Sc.get(m)}(d);if(f===void 0)return"continue";var p=s.names.get(f),g=o.getGroup(d);if(p===void 0||g.length===0)return"continue";var v="".concat(So,".g").concat(d,'[id="').concat(f,'"]'),x="";p!==void 0&&p.forEach(function(m){m.length>0&&(x+="".concat(m,","))}),l+="".concat(g).concat(v,'{content:"').concat(x,'"}').concat(Ag)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return yu(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ct(Ct({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new sA(i):r?new rA(i):new iA(i)}(this.options),new QO(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(yu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(yu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(yu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),aA=/&/g,lA=/^\s*\/\/.*$/gm;function eS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=eS(n.children,e)),n})}function uA(t){var e,n,r,i=t===void 0?Co:t,s=i.options,o=s===void 0?Co:s,a=i.plugins,l=a===void 0?Od:a,u=function(f,p,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(e):f},c=l.slice();c.push(function(f){f.type===bd&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(aA,n).replace(r,u))}),o.prefix&&c.push(DO),c.push(OO);var d=function(f,p,g,v){p===void 0&&(p=""),g===void 0&&(g=""),v===void 0&&(v="&"),e=v,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var x=f.replace(lA,""),m=RO(g||p?"".concat(g," ").concat(p," { ").concat(x," }"):x);o.namespace&&(m=eS(m,o.namespace));var h=[];return xc(m,AO(c.concat(NO(function(y){return h.push(y)})))),h};return d.hash=l.length?l.reduce(function(f,p){return p.name||os(15),Xs(f,p.name)},KE).toString():"",d}var cA=new Cc,zp=uA(),tS=ot.createContext({shouldForwardProp:void 0,styleSheet:cA,stylis:zp});tS.Consumer;ot.createContext(void 0);function Bp(){return C.useContext(tS)}var nS=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=zp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Lg(this,function(){throw os(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=zp),this.name+e.hash},t}(),dA=function(t){return t>="A"&&t<="Z"};function K_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;dA(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var rS=function(t){return t==null||t===!1||t===""},iS=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!rS(s)&&(Array.isArray(s)&&s.isCss||ss(s)?r.push("".concat(K_(i),":"),s,";"):al(s)?r.push.apply(r,wo(wo(["".concat(i," {")],iS(s),!1),["}"],!1)):r.push("".concat(K_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in MO||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ni(t,e,n,r){if(rS(t))return[];if(Mg(t))return[".".concat(t.styledComponentId)];if(ss(t)){if(!ss(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ni(i,e,n,r)}var s;return t instanceof nS?n?(t.inject(n,r),[t.getName(r)]):[t]:al(t)?iS(t):Array.isArray(t)?Array.prototype.concat.apply(Od,t.map(function(o){return ni(o,e,n,r)})):[t.toString()]}function sS(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ss(n)&&!Mg(n))return!1}return!0}var fA=YE(Pd),hA=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&sS(e),this.componentId=n,this.baseHash=Xs(fA,n),this.baseStyle=r,Cc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Bi(i,this.staticRulesId);else{var s=Ec(ni(this.rules,e,n,r)),o=$p(Xs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Bi(i,o),this.staticRulesId=o}else{for(var l=Xs(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Ec(ni(d,e,n,r));l=Xs(l,f+c),u+=f}}if(u){var p=$p(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=Bi(i,p)}}return i},t}(),ll=ot.createContext(void 0);ll.Consumer;function pA(t){var e=ot.useContext(ll),n=C.useMemo(function(){return function(r,i){if(!r)throw os(14);if(ss(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw os(8);return i?Ct(Ct({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?ot.createElement(ll.Provider,{value:n},t.children):null}var rh={};function mA(t,e,n){var r=Mg(t),i=t,s=!nh(t),o=e.attrs,a=o===void 0?Od:o,l=e.componentId,u=l===void 0?function(E,T){var _=typeof E!="string"?"sc":z_(E);rh[_]=(rh[_]||0)+1;var S="".concat(_,"-").concat(Dg(Pd+_+rh[_]));return T?"".concat(T,"-").concat(S):S}(e.displayName,e.parentComponentId):l,c=e.displayName,d=c===void 0?function(E){return nh(E)?"styled.".concat(E):"Styled(".concat(zO(E),")")}(t):c,f=e.displayName&&e.componentId?"".concat(z_(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;g=function(E,T){return v(E,T)&&x(E,T)}}else g=v}var m=new hA(n,f,r?i.componentStyle:void 0);function h(E,T){return function(_,S,P){var k=_.attrs,A=_.componentStyle,D=_.defaultProps,G=_.foldedComponentIds,j=_.styledComponentId,Z=_.target,Ie=ot.useContext(ll),Oe=Bp(),de=_.shouldForwardProp||Oe.shouldForwardProp,z=HE(S,Ie,D)||Co,K=function(Le,Se,$e){for(var Ht,It=Ct(Ct({},Se),{className:void 0,theme:$e}),M=0;M<Le.length;M+=1){var $=ss(Ht=Le[M])?Ht(It):Ht;for(var J in $)It[J]=J==="className"?Bi(It[J],$[J]):J==="style"?Ct(Ct({},It[J]),$[J]):$[J]}return Se.className&&(It.className=Bi(It.className,Se.className)),It}(k,S,z),q=K.as||Z,ne={};for(var se in K)K[se]===void 0||se[0]==="$"||se==="as"||se==="theme"&&K.theme===z||(se==="forwardedAs"?ne.as=K.forwardedAs:de&&!de(se,q)||(ne[se]=K[se]));var at=function(Le,Se){var $e=Bp(),Ht=Le.generateAndInjectStyles(Se,$e.styleSheet,$e.stylis);return Ht}(A,K),Re=Bi(G,j);return at&&(Re+=" "+at),K.className&&(Re+=" "+K.className),ne[nh(q)&&!GE.has(q)?"class":"className"]=Re,ne.ref=P,C.createElement(q,ne)}(y,E,T)}h.displayName=d;var y=ot.forwardRef(h);return y.attrs=p,y.componentStyle=m,y.displayName=d,y.shouldForwardProp=g,y.foldedComponentIds=r?Bi(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=f,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(T){for(var _=[],S=1;S<arguments.length;S++)_[S-1]=arguments[S];for(var P=0,k=_;P<k.length;P++)Up(T,k[P],!0);return T}({},i.defaultProps,E):E}}),Lg(y,function(){return".".concat(y.styledComponentId)}),s&&JE(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Y_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var q_=function(t){return Object.assign(t,{isCss:!0})};function jg(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ss(t)||al(t))return q_(ni(Y_(Od,wo([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ni(r):q_(ni(Y_(r,e)))}function Wp(t,e,n){if(n===void 0&&(n=Co),!e)throw os(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,jg.apply(void 0,wo([i],s,!1)))};return r.attrs=function(i){return Wp(t,e,Ct(Ct({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Wp(t,e,Ct(Ct({},n),i))},r}var oS=function(t){return Wp(mA,t)},N=oS;GE.forEach(function(t){N[t]=oS(t)});var gA=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=sS(e),Cc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Ec(ni(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Cc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function yA(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=jg.apply(void 0,wo([t],e,!1)),i="sc-global-".concat(Dg(JSON.stringify(r))),s=new gA(r,i),o=function(l){var u=Bp(),c=ot.useContext(ll),d=ot.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),ot.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(s.isStatic)s.renderStyles(l,jO,c,f);else{var p=Ct(Ct({},u),{theme:HE(u,d,o.defaultProps)});s.renderStyles(l,p,c,f)}}return ot.memo(o)}function vA(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Ec(jg.apply(void 0,wo([t],e,!1))),i=Dg(r);return new nS(i,r)}function Rt(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var _A=typeof Symbol=="function"&&Symbol.observable||"@@observable",Q_=_A,ih=()=>Math.random().toString(36).substring(7).split("").join("."),wA={INIT:`@@redux/INIT${ih()}`,REPLACE:`@@redux/REPLACE${ih()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ih()}`},Tc=wA;function Fg(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function aS(t,e,n){if(typeof t!="function")throw new Error(Rt(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Rt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Rt(1));return n(aS)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((x,m)=>{o.set(m,x)}))}function c(){if(l)throw new Error(Rt(3));return i}function d(x){if(typeof x!="function")throw new Error(Rt(4));if(l)throw new Error(Rt(5));let m=!0;u();const h=a++;return o.set(h,x),function(){if(m){if(l)throw new Error(Rt(6));m=!1,u(),o.delete(h),s=null}}}function f(x){if(!Fg(x))throw new Error(Rt(7));if(typeof x.type>"u")throw new Error(Rt(8));if(typeof x.type!="string")throw new Error(Rt(17));if(l)throw new Error(Rt(9));try{l=!0,i=r(i,x)}finally{l=!1}return(s=o).forEach(h=>{h()}),x}function p(x){if(typeof x!="function")throw new Error(Rt(10));r=x,f({type:Tc.REPLACE})}function g(){const x=d;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(Rt(11));function h(){const E=m;E.next&&E.next(c())}return h(),{unsubscribe:x(h)}},[Q_](){return this}}}return f({type:Tc.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:p,[Q_]:g}}function xA(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Tc.INIT})>"u")throw new Error(Rt(12));if(typeof n(void 0,{type:Tc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Rt(13))})}function EA(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{xA(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],p=o[d],g=f(p,a);if(typeof g>"u")throw a&&a.type,new Error(Rt(14));u[d]=g,l=l||g!==p}return l=l||r.length!==Object.keys(o).length,l?u:o}}function bc(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function SA(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Rt(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=bc(...a)(i.dispatch),{...i,dispatch:s}}}function CA(t){return Fg(t)&&"type"in t&&typeof t.type=="string"}var lS=Symbol.for("immer-nothing"),X_=Symbol.for("immer-draftable"),fn=Symbol.for("immer-state");function Mn(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var To=Object.getPrototypeOf;function hi(t){return!!t&&!!t[fn]}function Tr(t){var e;return t?uS(t)||Array.isArray(t)||!!t[X_]||!!((e=t.constructor)!=null&&e[X_])||Nd(t)||Dd(t):!1}var TA=Object.prototype.constructor.toString();function uS(t){if(!t||typeof t!="object")return!1;const e=To(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===TA}function ul(t,e){Ad(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function Ad(t){const e=t[fn];return e?e.type_:Array.isArray(t)?1:Nd(t)?2:Dd(t)?3:0}function Vp(t,e){return Ad(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function cS(t,e,n){const r=Ad(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function bA(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Nd(t){return t instanceof Map}function Dd(t){return t instanceof Set}function Ai(t){return t.copy_||t.base_}function Hp(t,e){if(Nd(t))return new Map(t);if(Dd(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&uS(t))return To(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[fn];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(To(t),n)}function $g(t,e=!1){return Md(t)||hi(t)||!Tr(t)||(Ad(t)>1&&(t.set=t.add=t.clear=t.delete=IA),Object.freeze(t),e&&ul(t,(n,r)=>$g(r,!0))),t}function IA(){Mn(2)}function Md(t){return Object.isFrozen(t)}var kA={};function as(t){const e=kA[t];return e||Mn(0,t),e}var cl;function dS(){return cl}function RA(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function J_(t,e){e&&(as("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Gp(t){Kp(t),t.drafts_.forEach(PA),t.drafts_=null}function Kp(t){t===cl&&(cl=t.parent_)}function Z_(t){return cl=RA(cl,t)}function PA(t){const e=t[fn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function e0(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[fn].modified_&&(Gp(e),Mn(4)),Tr(t)&&(t=Ic(e,t),e.parent_||kc(e,t)),e.patches_&&as("Patches").generateReplacementPatches_(n[fn].base_,t,e.patches_,e.inversePatches_)):t=Ic(e,n,[]),Gp(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==lS?t:void 0}function Ic(t,e,n){if(Md(e))return e;const r=e[fn];if(!r)return ul(e,(i,s)=>t0(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return kc(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),ul(s,(a,l)=>t0(t,r,i,a,l,n,o)),kc(t,i,!1),n&&t.patches_&&as("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function t0(t,e,n,r,i,s,o){if(hi(i)){const a=s&&e&&e.type_!==3&&!Vp(e.assigned_,r)?s.concat(r):void 0,l=Ic(t,i,a);if(cS(n,r,l),hi(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Tr(i)&&!Md(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Ic(t,i),(!e||!e.scope_.parent_)&&kc(t,i)}}function kc(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&$g(e,n)}function OA(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:dS(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Ug;n&&(i=[r],s=dl);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Ug={get(t,e){if(e===fn)return t;const n=Ai(t);if(!Vp(n,e))return AA(t,n,e);const r=n[e];return t.finalized_||!Tr(r)?r:r===sh(t.base_,e)?(oh(t),t.copy_[e]=qp(r,t)):r},has(t,e){return e in Ai(t)},ownKeys(t){return Reflect.ownKeys(Ai(t))},set(t,e,n){const r=fS(Ai(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=sh(Ai(t),e),s=i==null?void 0:i[fn];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(bA(n,i)&&(n!==void 0||Vp(t.base_,e)))return!0;oh(t),Yp(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return sh(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,oh(t),Yp(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Ai(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Mn(11)},getPrototypeOf(t){return To(t.base_)},setPrototypeOf(){Mn(12)}},dl={};ul(Ug,(t,e)=>{dl[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});dl.deleteProperty=function(t,e){return dl.set.call(this,t,e,void 0)};dl.set=function(t,e,n){return Ug.set.call(this,t[0],e,n,t[0])};function sh(t,e){const n=t[fn];return(n?Ai(n):t)[e]}function AA(t,e,n){var i;const r=fS(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function fS(t,e){if(!(e in t))return;let n=To(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=To(n)}}function Yp(t){t.modified_||(t.modified_=!0,t.parent_&&Yp(t.parent_))}function oh(t){t.copy_||(t.copy_=Hp(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var NA=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&Mn(6),r!==void 0&&typeof r!="function"&&Mn(7);let i;if(Tr(e)){const s=Z_(this),o=qp(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Gp(s):Kp(s)}return J_(s,r),e0(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===lS&&(i=void 0),this.autoFreeze_&&$g(i,!0),r){const s=[],o=[];as("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Mn(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Tr(t)||Mn(8),hi(t)&&(t=hS(t));const e=Z_(this),n=qp(t,void 0);return n[fn].isManual_=!0,Kp(e),n}finishDraft(t,e){const n=t&&t[fn];(!n||!n.isManual_)&&Mn(9);const{scope_:r}=n;return J_(r,e),e0(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=as("Patches").applyPatches_;return hi(t)?r(t,e):this.produce(t,i=>r(i,e))}};function qp(t,e){const n=Nd(t)?as("MapSet").proxyMap_(t,e):Dd(t)?as("MapSet").proxySet_(t,e):OA(t,e);return(e?e.scope_:dS()).drafts_.push(n),n}function hS(t){return hi(t)||Mn(10,t),pS(t)}function pS(t){if(!Tr(t)||Md(t))return t;const e=t[fn];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Hp(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Hp(t,!0);return ul(n,(r,i)=>{cS(n,r,pS(i))}),e&&(e.finalized_=!1),n}var hn=new NA,mS=hn.produce;hn.produceWithPatches.bind(hn);hn.setAutoFreeze.bind(hn);hn.setUseStrictShallowCopy.bind(hn);hn.applyPatches.bind(hn);hn.createDraft.bind(hn);hn.finishDraft.bind(hn);function DA(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function MA(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function LA(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var n0=t=>Array.isArray(t)?t:[t];function jA(t){const e=Array.isArray(t[0])?t[0]:t;return LA(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function FA(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var $A=class{constructor(t){this.value=t}deref(){return this.value}},UA=typeof WeakRef<"u"?WeakRef:$A,zA=0,r0=1;function vu(){return{s:zA,v:void 0,o:null,p:null}}function zg(t,e={}){let n=vu();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let f=0,p=l;f<p;f++){const g=arguments[f];if(typeof g=="function"||typeof g=="object"&&g!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const x=v.get(g);x===void 0?(a=vu(),v.set(g,a)):a=x}else{let v=a.p;v===null&&(a.p=v=new Map);const x=v.get(g);x===void 0?(a=vu(),v.set(g,a)):a=x}}const u=a;let c;if(a.s===r0?c=a.v:(c=t.apply(null,arguments),s++),u.s=r0,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new UA(c):c}return u.v=c,c}return o.clearCache=()=>{n=vu(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function gS(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),DA(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:p=zg,argsMemoizeOptions:g=[],devModeChecks:v={}}=c,x=n0(f),m=n0(g),h=jA(i),y=d(function(){return s++,u.apply(null,arguments)},...x),E=p(function(){o++;const _=FA(h,arguments);return a=y.apply(null,_),a},...m);return Object.assign(E,{resultFunc:u,memoizedResultFunc:y,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var BA=gS(zg),WA=Object.assign((t,e=BA)=>{MA(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>WA});function yS(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var VA=yS(),HA=yS,GA=(...t)=>{const e=gS(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(hi(o)?hS(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};GA(zg);var KA=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?bc:bc.apply(null,arguments)};function bo(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(Zt(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>CA(r)&&r.type===t,n}var vS=class xa extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,xa.prototype)}static get[Symbol.species](){return xa}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new xa(...e[0].concat(this)):new xa(...e.concat(this))}};function i0(t){return Tr(t)?mS(t,()=>{}):t}function s0(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(Zt(10));const r=n.insert(e,t);return t.set(e,r),r}function YA(t){return typeof t=="boolean"}var qA=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new vS;return n&&(YA(n)?o.push(VA):o.push(HA(n.extraArgument))),o},QA="RTK_autoBatch",_S=t=>e=>{setTimeout(e,t)},XA=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:_S(10),JA=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?XA:t.type==="callback"?t.queueNotification:_S(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[QA]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},ZA=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new vS(t);return r&&i.push(JA(typeof r=="object"?r:void 0)),i},eN=!0;function tN(t){const e=qA(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Fg(n))a=EA(n);else throw new Error(Zt(1));let l;typeof r=="function"?l=r(e):l=e();let u=bc;i&&(u=KA({trace:!eN,...typeof i=="object"&&i}));const c=SA(...l),d=ZA(c);let f=typeof o=="function"?o(d):d();const p=u(...f);return aS(a,s,p)}function wS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(Zt(28));if(a in e)throw new Error(Zt(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function nN(t){return typeof t=="function"}function rN(t,e){let[n,r,i]=wS(e),s;if(nN(t))s=()=>i0(t());else{const a=i0(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(hi(c)){const p=d(c,l);return p===void 0?c:p}else{if(Tr(c))return mS(c,f=>d(f,l));{const f=d(c,l);if(f===void 0){if(c===null)return c;throw new Error(Zt(9))}return f}}return c},a)}return o.getInitialState=s,o}var iN="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",sN=(t=21)=>{let e="",n=t;for(;n--;)e+=iN[Math.random()*64|0];return e},oN=Symbol.for("rtk-slice-createasyncthunk");function aN(t,e){return`${t}/${e}`}function lN({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[oN];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(Zt(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(dN()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(y,E){const T=typeof y=="string"?y:y.type;if(!T)throw new Error(Zt(12));if(T in u.sliceCaseReducersByType)throw new Error(Zt(13));return u.sliceCaseReducersByType[T]=E,c},addMatcher(y,E){return u.sliceMatchers.push({matcher:y,reducer:E}),c},exposeAction(y,E){return u.actionCreators[y]=E,c},exposeCaseReducer(y,E){return u.sliceCaseReducersByName[y]=E,c}};l.forEach(y=>{const E=a[y],T={reducerName:y,type:aN(s,y),createNotation:typeof i.reducers=="function"};hN(E)?mN(T,E,c,e):fN(T,E,c)});function d(){const[y={},E=[],T=void 0]=typeof i.extraReducers=="function"?wS(i.extraReducers):[i.extraReducers],_={...y,...u.sliceCaseReducersByType};return rN(i.initialState,S=>{for(let P in _)S.addCase(P,_[P]);for(let P of u.sliceMatchers)S.addMatcher(P.matcher,P.reducer);for(let P of E)S.addMatcher(P.matcher,P.reducer);T&&S.addDefaultCase(T)})}const f=y=>y,p=new Map;let g;function v(y,E){return g||(g=d()),g(y,E)}function x(){return g||(g=d()),g.getInitialState()}function m(y,E=!1){function T(S){let P=S[y];return typeof P>"u"&&E&&(P=x()),P}function _(S=f){const P=s0(p,E,{insert:()=>new WeakMap});return s0(P,S,{insert:()=>{const k={};for(const[A,D]of Object.entries(i.selectors??{}))k[A]=uN(D,S,x,E);return k}})}return{reducerPath:y,getSelectors:_,get selectors(){return _(T)},selectSlice:T}}const h={name:s,reducer:v,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:x,...m(o),injectInto(y,{reducerPath:E,...T}={}){const _=E??o;return y.inject({reducerPath:_,reducer:v},T),{...h,...m(_,!0)}}};return h}}function uN(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var cN=lN();function dN(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function fN({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!pN(r))throw new Error(Zt(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?bo(t,o):bo(t))}function hN(t){return t._reducerDefinitionType==="asyncThunk"}function pN(t){return t._reducerDefinitionType==="reducerWithPrepare"}function mN({type:t,reducerName:e},n,r,i){if(!i)throw new Error(Zt(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(t,s,c);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(e,{fulfilled:o||_u,pending:a||_u,rejected:l||_u,settled:u||_u})}function _u(){}var gN=(t,e)=>{if(typeof t!="function")throw new Error(Zt(32))},Bg="listenerMiddleware",yN=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=bo(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(Zt(21));return gN(s),{predicate:i,type:e,effect:s}},vN=Object.assign(t=>{const{type:e,predicate:n,effect:r}=yN(t);return{id:sN(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(Zt(22))}}},{withTypes:()=>vN}),_N=Object.assign(bo(`${Bg}/add`),{withTypes:()=>_N});bo(`${Bg}/removeAll`);var wN=Object.assign(bo(`${Bg}/remove`),{withTypes:()=>wN});function Zt(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const xS=cN({name:"users",initialState:{currentUser:{favorites:[]}},reducers:{setUser(t,e){t.currentUser={...e.payload}},setFavorites(t,e){return{...t,currentUser:{...t.currentUser,favorites:e.payload}}}}}),{setUser:pi,setFavorites:h7}=xS.actions,Wg=t=>t.users,xN=xS.reducer,EN=tN({reducer:{users:xN}});var o0={};/**
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
 */const ES={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(t,e){if(!t)throw zo(e)},zo=function(t){return new Error("Firebase Database ("+ES.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const SS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},SN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Vg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(SS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new CN;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CS=function(t){const e=SS(t);return Vg.encodeByteArray(e,!0)},Rc=function(t){return CS(t).replace(/\./g,"")},Pc=function(t){try{return Vg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TN(t){return TS(void 0,t)}function TS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bN(n)||(t[n]=TS(t[n],e[n]));return t}function bN(t){return t!=="__proto__"}/**
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
 */function IN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kN=()=>IN().__FIREBASE_DEFAULTS__,RN=()=>{if(typeof process>"u"||typeof o0>"u")return;const t=o0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pc(t[1]);return e&&JSON.parse(e)},Hg=()=>{try{return kN()||RN()||PN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bS=t=>{var e,n;return(n=(e=Hg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ON=t=>{const e=bS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},IS=()=>{var t;return(t=Hg())===null||t===void 0?void 0:t.config},kS=t=>{var e;return(e=Hg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ld{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function AN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rc(JSON.stringify(n)),Rc(JSON.stringify(o)),""].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function NN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function RS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DN(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PS(){return ES.NODE_ADMIN===!0}function MN(){try{return typeof indexedDB=="object"}catch{return!1}}function LN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const jN="FirebaseError";class Ti extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jN,Object.setPrototypeOf(this,Ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jl.prototype.create)}}class jl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?FN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ti(i,a,r)}}function FN(t,e){return t.replace($N,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $N=/\{\$([^}]+)}/g;/**
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
 */const OS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=fl(Pc(s[0])||""),n=fl(Pc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},UN=function(t){const e=OS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zN=function(t){const e=OS(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function rr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Io(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Qp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ac(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(a0(s)&&a0(o)){if(!Ac(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function a0(t){return t!==null&&typeof t=="object"}/**
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
 */class BN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function WN(t,e){const n=new VN(t,e);return n.subscribe.bind(n)}class VN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ah),i.error===void 0&&(i.error=ah),i.complete===void 0&&(i.complete=ah);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ah(){}function Kg(t,e){return`${t} failed: ${e} argument `}/**
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
 */const GN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,F(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class KN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ld;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qN(e))try{this.getOrInitializeService({instanceIdentifier:Ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ni){return this.instances.has(e)}getOptions(e=Ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ni){return this.component?this.component.multipleInstances?e:Ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YN(t){return t===Ni?void 0:t}function qN(t){return t.instantiationMode==="EAGER"}/**
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
 */class QN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Me||(Me={}));const XN={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},JN=Me.INFO,ZN={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},eD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ZN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yg{constructor(e){this.name=e,this._logLevel=JN,this._logHandler=eD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const tD=(t,e)=>e.some(n=>t instanceof n);let l0,u0;function nD(){return l0||(l0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rD(){return u0||(u0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AS=new WeakMap,Xp=new WeakMap,NS=new WeakMap,lh=new WeakMap,qg=new WeakMap;function iD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ri(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&AS.set(n,t)}).catch(()=>{}),qg.set(e,t),e}function sD(t){if(Xp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xp.set(t,e)}let Jp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||NS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ri(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oD(t){Jp=t(Jp)}function aD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uh(this),e,...n);return NS.set(r,e.sort?e.sort():[e]),ri(r)}:rD().includes(t)?function(...e){return t.apply(uh(this),e),ri(AS.get(this))}:function(...e){return ri(t.apply(uh(this),e))}}function lD(t){return typeof t=="function"?aD(t):(t instanceof IDBTransaction&&sD(t),tD(t,nD())?new Proxy(t,Jp):t)}function ri(t){if(t instanceof IDBRequest)return iD(t);if(lh.has(t))return lh.get(t);const e=lD(t);return e!==t&&(lh.set(t,e),qg.set(e,t)),e}const uh=t=>qg.get(t);function uD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ri(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ri(o.result),l.oldVersion,l.newVersion,ri(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const cD=["get","getKey","getAll","getAllKeys","count"],dD=["put","add","delete","clear"],ch=new Map;function c0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ch.get(e))return ch.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=dD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ch.set(e,s),s}oD(t=>({...t,get:(e,n,r)=>c0(e,n)||t.get(e,n,r),has:(e,n)=>!!c0(e,n)||t.has(e,n)}));/**
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
 */class fD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zp="@firebase/app",d0="0.9.27";/**
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
 */const us=new Yg("@firebase/app"),pD="@firebase/app-compat",mD="@firebase/analytics-compat",gD="@firebase/analytics",yD="@firebase/app-check-compat",vD="@firebase/app-check",_D="@firebase/auth",wD="@firebase/auth-compat",xD="@firebase/database",ED="@firebase/database-compat",SD="@firebase/functions",CD="@firebase/functions-compat",TD="@firebase/installations",bD="@firebase/installations-compat",ID="@firebase/messaging",kD="@firebase/messaging-compat",RD="@firebase/performance",PD="@firebase/performance-compat",OD="@firebase/remote-config",AD="@firebase/remote-config-compat",ND="@firebase/storage",DD="@firebase/storage-compat",MD="@firebase/firestore",LD="@firebase/firestore-compat",jD="firebase",FD="10.8.0";/**
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
 */const em="[DEFAULT]",$D={[Zp]:"fire-core",[pD]:"fire-core-compat",[gD]:"fire-analytics",[mD]:"fire-analytics-compat",[vD]:"fire-app-check",[yD]:"fire-app-check-compat",[_D]:"fire-auth",[wD]:"fire-auth-compat",[xD]:"fire-rtdb",[ED]:"fire-rtdb-compat",[SD]:"fire-fn",[CD]:"fire-fn-compat",[TD]:"fire-iid",[bD]:"fire-iid-compat",[ID]:"fire-fcm",[kD]:"fire-fcm-compat",[RD]:"fire-perf",[PD]:"fire-perf-compat",[OD]:"fire-rc",[AD]:"fire-rc-compat",[ND]:"fire-gcs",[DD]:"fire-gcs-compat",[MD]:"fire-fst",[LD]:"fire-fst-compat","fire-js":"fire-js",[jD]:"fire-js-all"};/**
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
 */const Nc=new Map,tm=new Map;function UD(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ko(t){const e=t.name;if(tm.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;tm.set(e,t);for(const n of Nc.values())UD(n,t);return!0}function Qg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ii=new jl("app","Firebase",zD);/**
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
 */class BD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
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
 */const Wo=FD;function DS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:em,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ii.create("bad-app-name",{appName:String(i)});if(n||(n=IS()),!n)throw ii.create("no-options");const s=Nc.get(i);if(s){if(Ac(n,s.options)&&Ac(r,s.config))return s;throw ii.create("duplicate-app",{appName:i})}const o=new QN(i);for(const l of tm.values())o.addComponent(l);const a=new BD(n,r,o);return Nc.set(i,a),a}function MS(t=em){const e=Nc.get(t);if(!e&&t===em&&IS())return DS();if(!e)throw ii.create("no-app",{appName:t});return e}function si(t,e,n){var r;let i=(r=$D[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}ko(new ls(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const WD="firebase-heartbeat-database",VD=1,hl="firebase-heartbeat-store";let dh=null;function LS(){return dh||(dh=uD(WD,VD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ii.create("idb-open",{originalErrorMessage:t.message})})),dh}async function HD(t){try{const n=(await LS()).transaction(hl),r=await n.objectStore(hl).get(jS(t));return await n.done,r}catch(e){if(e instanceof Ti)us.warn(e.message);else{const n=ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(n.message)}}}async function f0(t,e){try{const r=(await LS()).transaction(hl,"readwrite");await r.objectStore(hl).put(e,jS(t)),await r.done}catch(n){if(n instanceof Ti)us.warn(n.message);else{const r=ii.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});us.warn(r.message)}}}function jS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const GD=1024,KD=30*24*60*60*1e3;class YD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=h0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=KD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=h0(),{heartbeatsToSend:r,unsentEntries:i}=qD(this._heartbeatsCache.heartbeats),s=Rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function h0(){return new Date().toISOString().substring(0,10)}function qD(t,e=GD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),p0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),p0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class QD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MN()?LN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return f0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return f0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function p0(t){return Rc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XD(t){ko(new ls("platform-logger",e=>new fD(e),"PRIVATE")),ko(new ls("heartbeat",e=>new YD(e),"PRIVATE")),si(Zp,d0,t),si(Zp,d0,"esm2017"),si("fire-js","")}XD("");var JD="firebase",ZD="10.8.0";/**
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
 */si(JD,ZD,"app");function Xg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function FS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eM=FS,$S=new jl("auth","Firebase",FS());/**
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
 */const Dc=new Yg("@firebase/auth");function tM(t,...e){Dc.logLevel<=Me.WARN&&Dc.warn(`Auth (${Wo}): ${t}`,...e)}function Wu(t,...e){Dc.logLevel<=Me.ERROR&&Dc.error(`Auth (${Wo}): ${t}`,...e)}/**
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
 */function Vn(t,...e){throw Jg(t,...e)}function er(t,...e){return Jg(t,...e)}function nM(t,e,n){const r=Object.assign(Object.assign({},eM()),{[e]:n});return new jl("auth","Firebase",r).create(e,{appName:t.name})}function Jg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $S.create(t,...e)}function ie(t,e,...n){if(!t)throw Jg(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wu(e),new Error(e)}function br(t,e){t||hr(e)}/**
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
 */function nm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rM(){return m0()==="http:"||m0()==="https:"}function m0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function iM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rM()||NN()||"connection"in navigator)?navigator.onLine:!0}function sM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fl{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=Gg()||RS()}get(){return iM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class US{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aM=new Fl(3e4,6e4);function bi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pr(t,e,n,r,i={}){return zS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Bo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),US.fetch()(BS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function zS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oM),e);try{const i=new uM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw nM(t,c,u);Vn(t,c)}}catch(i){if(i instanceof Ti)throw i;Vn(t,"network-request-failed",{message:String(i)})}}async function $l(t,e,n,r,i={}){const s=await Pr(t,e,n,r,i);return"mfaPendingCredential"in s&&Vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function BS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zg(t.config,i):`${t.config.apiScheme}://${i}`}function lM(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(er(this.auth,"network-request-failed")),aM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=er(t,e,r);return i.customData._tokenResponse=n,i}function g0(t){return t!==void 0&&t.enterprise!==void 0}class cM{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return lM(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function dM(t,e){return Pr(t,"GET","/v2/recaptchaConfig",bi(t,e))}/**
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
 */async function fM(t,e){return Pr(t,"POST","/v1/accounts:delete",e)}async function hM(t,e){return Pr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ma(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pM(t,e=!1){const n=Nt(t),r=await n.getIdToken(e),i=ey(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ma(fh(i.auth_time)),issuedAtTime:Ma(fh(i.iat)),expirationTime:Ma(fh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fh(t){return Number(t)*1e3}function ey(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pc(n);return i?JSON.parse(i):(Wu("Failed to decode base64 JWT payload"),null)}catch(i){return Wu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mM(t){const e=ey(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ti&&gM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class yM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class WS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ro(t,hM(n,{idToken:r}));ie(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?wM(s.providerUserInfo):[],a=_M(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new WS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function vM(t){const e=Nt(t);await Mc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _M(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wM(t){return t.map(e=>{var{providerId:n}=e,r=Xg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xM(t,e){const n=await zS(t,{},async()=>{const r=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=BS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",US.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function EM(t,e){return Pr(t,"POST","/v2/accounts:revokeToken",bi(t,e))}/**
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
 */class pl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mM(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new pl;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pl,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
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
 */function Dr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new WS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pM(this,e)}reload(){return vM(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ro(this,fM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:T,providerData:_,stsTokenManager:S}=n;ie(y&&S,e,"internal-error");const P=pl.fromJSON(this.name,S);ie(typeof y=="string",e,"internal-error"),Dr(d,e.name),Dr(f,e.name),ie(typeof E=="boolean",e,"internal-error"),ie(typeof T=="boolean",e,"internal-error"),Dr(p,e.name),Dr(g,e.name),Dr(v,e.name),Dr(x,e.name),Dr(m,e.name),Dr(h,e.name);const k=new Yi({uid:y,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:T,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:P,createdAt:m,lastLoginAt:h});return _&&Array.isArray(_)&&(k.providerData=_.map(A=>Object.assign({},A))),x&&(k._redirectEventId=x),k}static async _fromIdTokenResponse(e,n,r=!1){const i=new pl;i.updateFromServerResponse(n);const s=new Yi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mc(s),s}}/**
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
 */class VS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}VS.type="NONE";const v0=VS;/**
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
 */function Vu(t,e,n){return`firebase:${t}:${e}:${n}`}class ao{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ao(pr(v0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||pr(v0);const o=Vu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Yi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ao(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ao(s,e,r))}}/**
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
 */function _0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(KS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(HS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qS(e))return"Blackberry";if(QS(e))return"Webos";if(ty(e))return"Safari";if((e.includes("chrome/")||GS(e))&&!e.includes("edge/"))return"Chrome";if(YS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function HS(t=$t()){return/firefox\//i.test(t)}function ty(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function GS(t=$t()){return/crios\//i.test(t)}function KS(t=$t()){return/iemobile/i.test(t)}function YS(t=$t()){return/android/i.test(t)}function qS(t=$t()){return/blackberry/i.test(t)}function QS(t=$t()){return/webos/i.test(t)}function Fd(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SM(t=$t()){var e;return Fd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CM(){return DN()&&document.documentMode===10}function XS(t=$t()){return Fd(t)||YS(t)||QS(t)||qS(t)||/windows phone/i.test(t)||KS(t)}function TM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function JS(t,e=[]){let n;switch(t){case"Browser":n=_0($t());break;case"Worker":n=`${_0($t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wo}/${r}`}/**
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
 */class bM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function IM(t,e={}){return Pr(t,"GET","/v2/passwordPolicy",bi(t,e))}/**
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
 */const kM=6;class RM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class PM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new w0(this),this.idTokenSubscription=new w0(this),this.beforeStateQueue=new bM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$S,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ao.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Nt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IM(this),n=new RM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await EM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pr(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[pr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=JS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vs(t){return Nt(t)}class w0{constructor(e){this.auth=e,this.observer=null,this.addObserver=WN(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $d={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OM(t){$d=t}function ZS(t){return $d.loadJS(t)}function AM(){return $d.recaptchaEnterpriseScript}function NM(){return $d.gapiScript}function DM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const MM="recaptcha-enterprise",LM="NO_RECAPTCHA";class jM{constructor(e){this.type=MM,this.auth=vs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{dM(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new cM(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;g0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(LM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&g0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=AM();l.length!==0&&(l+=a),ZS(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function x0(t,e,n,r=!1){const i=new jM(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function rm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await x0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await x0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function FM(t,e){const n=Qg(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ac(s,e??{}))return i;Vn(i,"already-initialized")}return n.initialize({options:e})}function $M(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UM(t,e,n){const r=vs(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=eC(e),{host:o,port:a}=zM(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||BM()}function eC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zM(t){const e=eC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:E0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:E0(o)}}}function E0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ny{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function WM(t,e){return Pr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function VM(t,e){return $l(t,"POST","/v1/accounts:signInWithPassword",bi(t,e))}/**
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
 */async function HM(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",bi(t,e))}async function GM(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",bi(t,e))}/**
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
 */class ml extends ny{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ml(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ml(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rm(e,n,"signInWithPassword",VM);case"emailLink":return HM(e,{email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rm(e,r,"signUpPassword",WM);case"emailLink":return GM(e,{idToken:n,email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function lo(t,e){return $l(t,"POST","/v1/accounts:signInWithIdp",bi(t,e))}/**
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
 */const KM="http://localhost";class cs extends ny{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return lo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,lo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lo(e,n)}buildRequest(){const e={requestUri:KM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
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
 */function YM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qM(t){const e=Ea(Sa(t)).link,n=e?Ea(Sa(e)).deep_link_id:null,r=Ea(Sa(t)).deep_link_id;return(r?Ea(Sa(r)).link:null)||r||n||e||t}class ry{constructor(e){var n,r,i,s,o,a;const l=Ea(Sa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=YM((i=l.mode)!==null&&i!==void 0?i:null);ie(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qM(e);try{return new ry(n)}catch{return null}}}/**
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
 */class tC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ul extends tC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Br extends Ul{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.FACEBOOK_SIGN_IN_METHOD="facebook.com";Br.PROVIDER_ID="facebook.com";/**
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
 */class Wr extends Ul{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cs._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.GOOGLE_SIGN_IN_METHOD="google.com";Wr.PROVIDER_ID="google.com";/**
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
 */class Vr extends Ul{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
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
 */class Hr extends Ul{constructor(){super("twitter.com")}static credential(e,n){return cs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hr.credential(n,r)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
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
 */async function QM(t,e){return $l(t,"POST","/v1/accounts:signUp",bi(t,e))}/**
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
 */class Lc extends Ti{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Lc(e,n,r,i)}}function nC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Lc._fromErrorAndOperation(t,s,e,r):s})}async function XM(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",r)}/**
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
 */async function JM(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ro(t,nC(r,i,e,t),n);ie(s.idToken,r,"internal-error");const o=ey(s.idToken);ie(o,r,"internal-error");const{sub:a}=o;return ie(t.uid===a,r,"user-mismatch"),ds._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),s}}/**
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
 */async function rC(t,e,n=!1){const r="signIn",i=await nC(t,r,e),s=await ds._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ZM(t,e){return rC(vs(t),e)}/**
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
 */async function iC(t){const e=vs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eL(t,e,n){const r=vs(t),o=await rm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QM).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&iC(t),l}),a=await ds._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function sC(t,e,n){return ZM(Nt(t),Vo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iC(t),r})}/**
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
 */async function tL(t,e){return Pr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function nL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Nt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ro(r,tL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function rL(t,e,n,r){return Nt(t).onIdTokenChanged(e,n,r)}function iL(t,e,n){return Nt(t).beforeAuthStateChanged(e,n)}function sL(t,e,n,r){return Nt(t).onAuthStateChanged(e,n,r)}function oL(t){return Nt(t).signOut()}const jc="__sak";/**
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
 */class oC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jc,"1"),this.storage.removeItem(jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function aL(){const t=$t();return ty(t)||Fd(t)}const lL=1e3,uL=10;class aC extends oC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aL()&&TM(),this.fallbackToPolling=XS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);CM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aC.type="LOCAL";const cL=aC;/**
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
 */class lC extends oC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lC.type="SESSION";const uC=lC;/**
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
 */function dL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ud{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ud(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await dL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ud.receivers=[];/**
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
 */class fL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=iy("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tr(){return window}function hL(t){tr().location.href=t}/**
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
 */function cC(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function pL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gL(){return cC()?self:null}/**
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
 */const dC="firebaseLocalStorageDb",yL=1,Fc="firebaseLocalStorage",fC="fbase_key";class zl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zd(t,e){return t.transaction([Fc],e?"readwrite":"readonly").objectStore(Fc)}function vL(){const t=indexedDB.deleteDatabase(dC);return new zl(t).toPromise()}function im(){const t=indexedDB.open(dC,yL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fc,{keyPath:fC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fc)?e(r):(r.close(),await vL(),e(await im()))})})}async function C0(t,e,n){const r=zd(t,!0).put({[fC]:e,value:n});return new zl(r).toPromise()}async function _L(t,e){const n=zd(t,!1).get(e),r=await new zl(n).toPromise();return r===void 0?null:r.value}function T0(t,e){const n=zd(t,!0).delete(e);return new zl(n).toPromise()}const wL=800,xL=3;class hC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await im(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ud._getInstance(gL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pL(),!this.activeServiceWorker)return;this.sender=new fL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await im();return await C0(e,jc,"1"),await T0(e,jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>C0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_L(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>T0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zd(i,!1).getAll();return new zl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hC.type="LOCAL";const EL=hC;new Fl(3e4,6e4);/**
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
 */function SL(t,e){return e?pr(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sy extends ny{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CL(t){return rC(t.auth,new sy(t),t.bypassAuthState)}function TL(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),JM(n,new sy(t),t.bypassAuthState)}async function bL(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),XM(n,new sy(t),t.bypassAuthState)}/**
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
 */class pC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CL;case"linkViaPopup":case"linkViaRedirect":return bL;case"reauthViaPopup":case"reauthViaRedirect":return TL;default:Vn(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IL=new Fl(2e3,1e4);class Js extends pC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Js.currentPopupAction&&Js.currentPopupAction.cancel(),Js.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=iy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Js.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IL.get())};e()}}Js.currentPopupAction=null;/**
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
 */const kL="pendingRedirect",Hu=new Map;class RL extends pC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hu.get(this.auth._key());if(!e){try{const r=await PL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hu.set(this.auth._key(),e)}return this.bypassAuthState||Hu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PL(t,e){const n=NL(e),r=AL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OL(t,e){Hu.set(t._key(),e)}function AL(t){return pr(t._redirectPersistence)}function NL(t){return Vu(kL,t.config.apiKey,t.name)}async function DL(t,e,n=!1){const r=vs(t),i=SL(r,e),o=await new RL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ML=10*60*1e3;class LL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(er(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ML&&this.cachedEventUids.clear(),this.cachedEventUids.has(b0(e))}saveEventToCache(e){this.cachedEventUids.add(b0(e)),this.lastProcessedEventTime=Date.now()}}function b0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mC(t);default:return!1}}/**
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
 */async function FL(t,e={}){return Pr(t,"GET","/v1/projects",e)}/**
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
 */const $L=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UL=/^https?/;async function zL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FL(t);for(const n of e)try{if(BL(n))return}catch{}Vn(t,"unauthorized-domain")}function BL(t){const e=nm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UL.test(n))return!1;if($L.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const WL=new Fl(3e4,6e4);function I0(){const t=tr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function VL(t){return new Promise((e,n)=>{var r,i,s;function o(){I0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{I0(),n(er(t,"network-request-failed"))},timeout:WL.get()})}if(!((i=(r=tr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tr().gapi)===null||s===void 0)&&s.load)o();else{const a=DM("iframefcb");return tr()[a]=()=>{gapi.load?o():n(er(t,"network-request-failed"))},ZS(`${NM()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gu=null,e})}let Gu=null;function HL(t){return Gu=Gu||VL(t),Gu}/**
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
 */const GL=new Fl(5e3,15e3),KL="__/auth/iframe",YL="emulator/auth/iframe",qL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XL(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zg(e,YL):`https://${t.config.authDomain}/${KL}`,r={apiKey:e.apiKey,appName:t.name,v:Wo},i=QL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bo(r).slice(1)}`}async function JL(t){const e=await HL(t),n=tr().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:XL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=er(t,"network-request-failed"),a=tr().setTimeout(()=>{s(o)},GL.get());function l(){tr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const ZL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},e2=500,t2=600,n2="_blank",r2="http://localhost";class k0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function i2(t,e,n,r=e2,i=t2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=$t().toLowerCase();n&&(a=GS(u)?n2:n),HS(u)&&(e=e||r2,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(SM(u)&&a!=="_self")return s2(e||"",a),new k0(null);const d=window.open(e||"",a,c);ie(d,t,"popup-blocked");try{d.focus()}catch{}return new k0(d)}function s2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const o2="__/auth/handler",a2="emulator/auth/handler",l2=encodeURIComponent("fac");async function R0(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wo,eventId:i};if(e instanceof tC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ul){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${l2}=${encodeURIComponent(l)}`:"";return`${u2(t)}?${Bo(a).slice(1)}${u}`}function u2({config:t}){return t.emulator?Zg(t,a2):`https://${t.authDomain}/${o2}`}/**
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
 */const hh="webStorageSupport";class c2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uC,this._completeRedirectFn=DL,this._overrideRedirectResult=OL}async _openPopup(e,n,r,i){var s;br((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await R0(e,n,r,nm(),i);return i2(e,o,iy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await R0(e,n,r,nm(),i);return hL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(br(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JL(e),r=new LL(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hh,{type:hh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hh];o!==void 0&&n(!!o),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return XS()||ty()||Fd()}}const d2=c2;var P0="@firebase/auth",O0="1.6.0";/**
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
 */class f2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function h2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function p2(t){ko(new ls("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:JS(t)},u=new PM(r,i,s,l);return $M(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ko(new ls("auth-internal",e=>{const n=vs(e.getProvider("auth").getImmediate());return(r=>new f2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),si(P0,O0,h2(t)),si(P0,O0,"esm2017")}/**
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
 */const m2=5*60,g2=kS("authIdTokenMaxAge")||m2;let A0=null;const y2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>g2)return;const i=n==null?void 0:n.token;A0!==i&&(A0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function v2(t=MS()){const e=Qg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FM(t,{popupRedirectResolver:d2,persistence:[EL,cL,uC]}),r=kS("authTokenSyncURL");if(r){const s=y2(r);iL(n,s,()=>s(n.currentUser)),rL(n,o=>s(o))}const i=bS("auth");return i&&UM(n,`http://${i}`),n}function _2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}OM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=er("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});p2("Browser");var N0={};const D0="@firebase/database",M0="1.0.3";/**
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
 */let gC="";function w2(t){gC=t}/**
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
 */class x2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ft(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class E2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const yC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new x2(e)}}catch{}return new E2},Wi=yC("localStorage"),sm=yC("sessionStorage");/**
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
 */const uo=new Yg("@firebase/database"),S2=function(){let t=1;return function(){return t++}}(),vC=function(t){const e=GN(t),n=new BN;n.update(e);const r=n.digest();return Vg.encodeByteArray(r)},Bl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Bl.apply(null,r):typeof r=="object"?e+=ft(r):e+=r,e+=" "}return e};let qi=null,L0=!0;const C2=function(t,e){F(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(uo.logLevel=Me.VERBOSE,qi=uo.log.bind(uo),e&&sm.set("logging_enabled",!0)):typeof t=="function"?qi=t:(qi=null,sm.remove("logging_enabled"))},jt=function(...t){if(L0===!0&&(L0=!1,qi===null&&sm.get("logging_enabled")===!0&&C2(!0)),qi){const e=Bl.apply(null,t);qi(e)}},Wl=function(t){return function(...e){jt(t,...e)}},om=function(...t){const e="FIREBASE INTERNAL ERROR: "+Bl(...t);uo.error(e)},Ir=function(...t){const e=`FIREBASE FATAL ERROR: ${Bl(...t)}`;throw uo.error(e),new Error(e)},en=function(...t){const e="FIREBASE WARNING: "+Bl(...t);uo.warn(e)},T2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&en("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},oy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},b2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fs="[MIN_NAME]",mi="[MAX_NAME]",Ho=function(t,e){if(t===e)return 0;if(t===fs||e===mi)return-1;if(e===fs||t===mi)return 1;{const n=j0(t),r=j0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},I2=function(t,e){return t===e?0:t<e?-1:1},ua=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ft(e))},ay=function(t){if(typeof t!="object"||t===null)return ft(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ft(e[r]),n+=":",n+=ay(t[e[r]]);return n+="}",n},_C=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function tn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wC=function(t){F(!oy(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},k2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},R2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function P2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const O2=new RegExp("^-?(0*)\\d{1,10}$"),A2=-2147483648,N2=2147483647,j0=function(t){if(O2.test(t)){const e=Number(t);if(e>=A2&&e<=N2)return e}return null},Go=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw en("Exception was thrown by user callback.",n),e},Math.floor(0))}},D2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},La=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class M2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){en(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class L2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',en(e)}}class co{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}co.OWNER="owner";/**
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
 */const ly="5",xC="v",EC="s",SC="r",CC="f",TC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bC="ls",IC="p",am="ac",kC="websocket",RC="long_polling";/**
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
 */class PC{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function j2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function OC(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let r;if(e===kC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===RC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);j2(t)&&(n.ns=t.namespace);const i=[];return tn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class F2{constructor(){this.counters_={}}incrementCounter(e,n=1){rr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return TN(this.counters_)}}/**
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
 */const ph={},mh={};function uy(t){const e=t.toString();return ph[e]||(ph[e]=new F2),ph[e]}function $2(t,e){const n=t.toString();return mh[n]||(mh[n]=e()),mh[n]}/**
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
 */class U2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Go(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const F0="start",z2="close",B2="pLPCommand",W2="pRTLPCB",AC="id",NC="pw",DC="ser",V2="cb",H2="seg",G2="ts",K2="d",Y2="dframe",MC=1870,LC=30,q2=MC-LC,Q2=25e3,X2=3e4;class Zs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wl(e),this.stats_=uy(n),this.urlFn=l=>(this.appCheckToken&&(l[am]=this.appCheckToken),OC(n,RC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new U2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(X2)),b2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cy((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===F0)this.id=a,this.password=l;else if(o===z2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[F0]="t",r[DC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[V2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[xC]=ly,this.transportSessionId&&(r[EC]=this.transportSessionId),this.lastSessionId&&(r[bC]=this.lastSessionId),this.applicationId&&(r[IC]=this.applicationId),this.appCheckToken&&(r[am]=this.appCheckToken),typeof location<"u"&&location.hostname&&TC.test(location.hostname)&&(r[SC]=CC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zs.forceAllow_=!0}static forceDisallow(){Zs.forceDisallow_=!0}static isAvailable(){return Zs.forceAllow_?!0:!Zs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!k2()&&!R2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ft(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=CS(n),i=_C(r,q2);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Y2]="t",r[AC]=e,r[NC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ft(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=S2(),window[B2+this.uniqueCallbackIdentifier]=e,window[W2+this.uniqueCallbackIdentifier]=n,this.myIFrame=cy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){jt("frame writing exception"),a.stack&&jt(a.stack),jt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||jt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[AC]=this.myID,e[NC]=this.myPW,e[DC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+LC+r.length<=MC;){const o=this.pendingSegs.shift();r=r+"&"+H2+i+"="+o.seg+"&"+G2+i+"="+o.ts+"&"+K2+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Q2)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const J2=16384,Z2=45e3;let $c=null;typeof MozWebSocket<"u"?$c=MozWebSocket:typeof WebSocket<"u"&&($c=WebSocket);class Ln{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wl(this.connId),this.stats_=uy(n),this.connURL=Ln.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[xC]=ly,typeof location<"u"&&location.hostname&&TC.test(location.hostname)&&(o[SC]=CC),n&&(o[EC]=n),r&&(o[bC]=r),i&&(o[am]=i),s&&(o[IC]=s),OC(e,kC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wi.set("previous_websocket_failure",!0);try{let r;PS(),this.mySock=new $c(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ln.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&$c!==null&&!Ln.forceDisallow_}static previouslyFailed(){return Wi.isInMemoryStorage||Wi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=fl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ft(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=_C(n,J2);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Z2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ln.responsesRequiredToBeHealthy=2;Ln.healthyTimeout=3e4;/**
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
 */const ej=6e4,tj=5e3,nj=10*1024,rj=100*1024,gh="t",$0="d",ij="s",U0="r",sj="e",z0="o",B0="a",W0="n",V0="p",oj="h";class aj{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wl("c:"+this.id+":"),this.transportManager_=new gl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=La(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rj?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nj?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gh in e){const n=e[gh];n===B0?this.upgradeIfSecondaryHealthy_():n===U0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===z0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ua("t",e),r=ua("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:V0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:B0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:W0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ua("t",e),r=ua("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ua(gh,e);if($0 in e){const r=e[$0];if(n===oj){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===W0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ij?this.onConnectionShutdown_(r):n===U0?this.onReset_(r):n===sj?om("Server Error: "+r):n===z0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):om("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ly!==r&&en("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),La(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ej))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):La(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tj))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:V0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class jC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class FC{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Uc extends FC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Uc}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const H0=32,G0=768;class Fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Pe(){return new Fe("")}function ye(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gi(t){return t.pieces_.length-t.pieceNum_}function Be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Fe(t.pieces_,e)}function $C(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function lj(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function UC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function zC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Fe(e,0)}function ht(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Fe(n,0)}function _e(t){return t.pieceNum_>=t.pieces_.length}function zt(t,e){const n=ye(t),r=ye(e);if(n===null)return e;if(n===r)return zt(Be(t),Be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function dy(t,e){if(gi(t)!==gi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function jn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(gi(t)>gi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class uj{constructor(e,n){this.errorPrefix_=n,this.parts_=UC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=jd(this.parts_[r]);BC(this)}}function cj(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=jd(e),BC(t)}function dj(t){const e=t.parts_.pop();t.byteLength_-=jd(e),t.parts_.length>0&&(t.byteLength_-=1)}function BC(t){if(t.byteLength_>G0)throw new Error(t.errorPrefix_+"has a key path longer than "+G0+" bytes ("+t.byteLength_+").");if(t.parts_.length>H0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+H0+") or object contains a cycle "+Di(t))}function Di(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class fy extends FC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new fy}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ca=1e3,fj=60*5*1e3,K0=30*1e3,hj=1.3,pj=3e4,mj="server_kill",Y0=3;class _r extends jC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=_r.nextPersistentConnectionId_++,this.log_=Wl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ca,this.maxReconnectDelay_=fj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!PS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Uc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ft(s)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ld,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;_r.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rr(e,"w")){const r=Io(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();en(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=K0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=UN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ft(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):om("Unrecognized action received from server: "+ft(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pj&&(this.reconnectDelay_=ca),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_r.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?jt("getToken() completed but was canceled"):(jt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new aj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{en(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(mj)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&en(d),l())}}}interrupt(e){jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qp(this.interruptReasons_)&&(this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ay(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Fe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){jt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Y0&&(this.reconnectDelay_=K0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){jt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Y0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+gC.replace(/\./g,"-")]=1,Gg()?e["framework.cordova"]=1:RS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Uc.getInstance().currentlyOnline();return Qp(this.interruptReasons_)&&e}}_r.nextPersistentConnectionId_=0;_r.nextConnectionId_=0;/**
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
 */class Bd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ve(fs,e),i=new ve(fs,n);return this.compare(r,i)!==0}minPost(){return ve.MIN}}/**
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
 */let xu;class WC extends Bd{static get __EMPTY_NODE(){return xu}static set __EMPTY_NODE(e){xu=e}compare(e,n){return Ho(e.name,n.name)}isDefinedOn(e){throw zo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ve.MIN}maxPost(){return new ve(mi,xu)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,xu)}toString(){return".key"}}const oi=new WC;/**
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
 */class Eu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Et.RED,this.left=i??qt.EMPTY_NODE,this.right=s??qt.EMPTY_NODE}copy(e,n,r,i,s){return new Et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Et.RED=!0;Et.BLACK=!1;class gj{copy(e,n,r,i,s){return this}insert(e,n,r){return new Et(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qt{constructor(e,n=qt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Et.BLACK,null,null))}remove(e){return new qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Et.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Eu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Eu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Eu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Eu(this.root_,null,this.comparator_,!0,e)}}qt.EMPTY_NODE=new gj;/**
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
 */function yj(t,e){return Ho(t.name,e.name)}function hy(t,e){return Ho(t,e)}/**
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
 */let lm;function vj(t){lm=t}const VC=function(t){return typeof t=="number"?"number:"+wC(t):"string:"+t},HC=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rr(e,".sv"),"Priority must be a string or number.")}else F(t===lm||t.isEmpty(),"priority of unexpected type.");F(t===lm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let q0;class _t{constructor(e,n=_t.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),HC(this.priorityNode_)}static set __childrenNodeConstructor(e){q0=e}static get __childrenNodeConstructor(){return q0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _t(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_t.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return _e(e)?this:ye(e)===".priority"?this.priorityNode_:_t.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ye(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(F(r!==".priority"||gi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,_t.__childrenNodeConstructor.EMPTY_NODE.updateChild(Be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+VC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wC(this.value_):e+=this.value_,this.lazyHash_=vC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _t.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=_t.VALUE_TYPE_ORDER.indexOf(n),s=_t.VALUE_TYPE_ORDER.indexOf(r);return F(i>=0,"Unknown leaf type: "+n),F(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_t.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let GC,KC;function _j(t){GC=t}function wj(t){KC=t}class xj extends Bd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ho(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve(mi,new _t("[PRIORITY-POST]",KC))}makePost(e,n){const r=GC(e);return new ve(n,new _t("[PRIORITY-POST]",r))}toString(){return".priority"}}const Je=new xj;/**
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
 */const Ej=Math.log(2);class Sj{constructor(e){const n=s=>parseInt(Math.log(s)/Ej,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Et(f,d.node,Et.BLACK,null,null);{const p=parseInt(c/2,10)+l,g=i(l,p),v=i(p+1,u);return d=t[p],f=n?n(d):d,new Et(f,d.node,Et.BLACK,g,v)}},s=function(l){let u=null,c=null,d=t.length;const f=function(g,v){const x=d-g,m=d;d-=g;const h=i(x+1,m),y=t[x],E=n?n(y):y;p(new Et(E,y.node,v,null,h))},p=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),x=Math.pow(2,l.count-(g+1));v?f(x,Et.BLACK):(f(x,Et.BLACK),f(x,Et.RED))}return c},o=new Sj(t.length),a=s(o);return new qt(r||e,a)};/**
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
 */let yh;const Ds={};class mr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return F(Ds&&Je,"ChildrenNode.ts has not been loaded"),yh=yh||new mr({".priority":Ds},{".priority":Je}),yh}get(e){const n=Io(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qt?n:null}hasIndex(e){return rr(this.indexSet_,e.toString())}addIndex(e,n){F(e!==oi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ve.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=zc(r,e.getCompare()):a=Ds;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new mr(c,u)}addToIndexes(e,n){const r=Oc(this.indexes_,(i,s)=>{const o=Io(this.indexSet_,s);if(F(o,"Missing index implementation for "+s),i===Ds)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ve.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),zc(a,o.getCompare())}else return Ds;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ve(e.name,a))),l.insert(e,e.node)}});return new mr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Oc(this.indexes_,i=>{if(i===Ds)return i;{const s=n.get(e.name);return s?i.remove(new ve(e.name,s)):i}});return new mr(r,this.indexSet_)}}/**
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
 */let da;class ee{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&HC(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return da||(da=new ee(new qt(hy),null,mr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||da}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?da:n}}getChild(e){const n=ye(e);return n===null?this:this.getImmediateChild(n).getChild(Be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ve(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?da:this.priorityNode_;return new ee(i,o,s)}}updateChild(e,n){const r=ye(e);if(r===null)return n;{F(ye(e)!==".priority"||gi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Be(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Je,(o,a)=>{n[o]=a.val(e),r++,s&&ee.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+VC(this.getPriority().val())+":"),this.forEachChild(Je,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":vC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ve(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ve(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ve.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vl?-1:0}withIndex(e){if(e===oi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===oi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Je),i=n.getIterator(Je);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===oi?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cj extends ee{constructor(){super(new qt(hy),ee.EMPTY_NODE,mr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Vl=new Cj;Object.defineProperties(ve,{MIN:{value:new ve(fs,ee.EMPTY_NODE)},MAX:{value:new ve(mi,Vl)}});WC.__EMPTY_NODE=ee.EMPTY_NODE;_t.__childrenNodeConstructor=ee;vj(Vl);wj(Vl);/**
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
 */const Tj=!0;function St(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _t(n,St(e))}if(!(t instanceof Array)&&Tj){const n=[];let r=!1;if(tn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=St(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ve(o,l)))}}),n.length===0)return ee.EMPTY_NODE;const s=zc(n,yj,o=>o.name,hy);if(r){const o=zc(n,Je.getCompare());return new ee(s,St(e),new mr({".priority":o},{".priority":Je}))}else return new ee(s,St(e),mr.Default)}else{let n=ee.EMPTY_NODE;return tn(t,(r,i)=>{if(rr(t,r)&&r.substring(0,1)!=="."){const s=St(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(St(e))}}_j(St);/**
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
 */class YC extends Bd{constructor(e){super(),this.indexPath_=e,F(!_e(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ho(e.name,n.name):s}makePost(e,n){const r=St(e),i=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new ve(n,i)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Vl);return new ve(mi,e)}toString(){return UC(this.indexPath_,0).join("/")}}/**
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
 */class bj extends Bd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ho(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,n){const r=St(e);return new ve(n,r)}toString(){return".value"}}const qC=new bj;/**
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
 */function QC(t){return{type:"value",snapshotNode:t}}function Po(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function yl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ij(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class kj{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new _l(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ve(n,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ee.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ee.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;F(a.numChildren()===this.limit_,"");const l=new ve(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(vl(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(yl(n,d));const v=a.updateImmediateChild(n,ee.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Po(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(yl(u.name,u.node)),s.trackChildChange(Po(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,ee.EMPTY_NODE)):e}}/**
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
 */class my{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fs}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Je}copy(){const e=new my;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rj(t){return t.loadsAllData()?new py(t.getIndex()):t.hasLimit()?new kj(t):new _l(t)}function Pj(t,e){const n=t.copy();return n.index_=e,n}function Q0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Je?n="$priority":t.index_===qC?n="$value":t.index_===oi?n="$key":(F(t.index_ instanceof YC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ft(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ft(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ft(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ft(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ft(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function X0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Je&&(e.i=t.index_.toString()),e}/**
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
 */class Bc extends jC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Wl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Bc.getListenId_(e,r),a={};this.listens_[o]=a;const l=Q0(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Io(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Bc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Q0(e._queryParams),r=e._path.toString(),i=new Ld;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fl(a.responseText)}catch{en("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&en("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Oj{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Wc(){return{value:null,children:new Map}}function XC(t,e,n){if(_e(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ye(e);t.children.has(r)||t.children.set(r,Wc());const i=t.children.get(r);e=Be(e),XC(i,e,n)}}function um(t,e,n){t.value!==null?n(e,t.value):Aj(t,(r,i)=>{const s=new Fe(e.toString()+"/"+r);um(i,s,n)})}function Aj(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Nj{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const J0=10*1e3,Dj=30*1e3,Mj=5*60*1e3;class Lj{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Nj(e);const r=J0+(Dj-J0)*Math.random();La(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;tn(e,(i,s)=>{s>0&&rr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),La(this.reportStats_.bind(this),Math.floor(Math.random()*2*Mj))}}/**
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
 */var Fn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Fn||(Fn={}));function JC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Vc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Fn.ACK_USER_WRITE,this.source=JC()}operationForChild(e){if(_e(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Fe(e));return new Vc(Pe(),n,this.revert)}}else return F(ye(this.path)===e,"operationForChild called for unrelated child."),new Vc(Be(this.path),this.affectedTree,this.revert)}}/**
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
 */class jj{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Fj(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Ij(o.childName,o.snapshotNode))}),fa(t,i,"child_removed",e,r,n),fa(t,i,"child_added",e,r,n),fa(t,i,"child_moved",s,r,n),fa(t,i,"child_changed",e,r,n),fa(t,i,"value",e,r,n),i}function fa(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Uj(t,a,l)),o.forEach(a=>{const l=$j(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function $j(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Uj(t,e,n){if(e.childName==null||n.childName==null)throw zo("Should only compare child_ events.");const r=new ve(e.childName,e.snapshotNode),i=new ve(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Wd(t,e){return{eventCache:t,serverCache:e}}function ja(t,e,n,r){return Wd(new yi(e,n,r),t.serverCache)}function ZC(t,e,n,r){return Wd(t.eventCache,new yi(e,n,r))}function Hc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ps(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let vh;const zj=()=>(vh||(vh=new qt(I2)),vh);class Ke{constructor(e,n=zj()){this.value=e,this.children=n}static fromObject(e){let n=new Ke(null);return tn(e,(r,i)=>{n=n.set(new Fe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Pe(),value:this.value};if(_e(e))return null;{const r=ye(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Be(e),n);return s!=null?{path:ht(new Fe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(_e(e))return this;{const n=ye(e),r=this.children.get(n);return r!==null?r.subtree(Be(e)):new Ke(null)}}set(e,n){if(_e(e))return new Ke(n,this.children);{const r=ye(e),s=(this.children.get(r)||new Ke(null)).set(Be(e),n),o=this.children.insert(r,s);return new Ke(this.value,o)}}remove(e){if(_e(e))return this.children.isEmpty()?new Ke(null):new Ke(null,this.children);{const n=ye(e),r=this.children.get(n);if(r){const i=r.remove(Be(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ke(null):new Ke(this.value,s)}else return this}}get(e){if(_e(e))return this.value;{const n=ye(e),r=this.children.get(n);return r?r.get(Be(e)):null}}setTree(e,n){if(_e(e))return n;{const r=ye(e),s=(this.children.get(r)||new Ke(null)).setTree(Be(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ke(this.value,o)}}fold(e){return this.fold_(Pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ht(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Pe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(_e(e))return null;{const s=ye(e),o=this.children.get(s);return o?o.findOnPath_(Be(e),ht(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Pe(),n)}foreachOnPath_(e,n,r){if(_e(e))return this;{this.value&&r(n,this.value);const i=ye(e),s=this.children.get(i);return s?s.foreachOnPath_(Be(e),ht(n,i),r):new Ke(null)}}foreach(e){this.foreach_(Pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ht(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Bn{constructor(e){this.writeTree_=e}static empty(){return new Bn(new Ke(null))}}function Fa(t,e,n){if(_e(e))return new Bn(new Ke(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=zt(i,e);return s=s.updateChild(o,n),new Bn(t.writeTree_.set(i,s))}else{const i=new Ke(n),s=t.writeTree_.setTree(e,i);return new Bn(s)}}}function Z0(t,e,n){let r=t;return tn(n,(i,s)=>{r=Fa(r,ht(e,i),s)}),r}function ew(t,e){if(_e(e))return Bn.empty();{const n=t.writeTree_.setTree(e,new Ke(null));return new Bn(n)}}function cm(t,e){return _s(t,e)!=null}function _s(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(zt(n.path,e)):null}function tw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Je,(r,i)=>{e.push(new ve(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ve(r,i.value))}),e}function ai(t,e){if(_e(e))return t;{const n=_s(t,e);return n!=null?new Bn(new Ke(n)):new Bn(t.writeTree_.subtree(e))}}function dm(t){return t.writeTree_.isEmpty()}function Oo(t,e){return eT(Pe(),t.writeTree_,e)}function eT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(F(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=eT(ht(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ht(t,".priority"),r)),n}}/**
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
 */function Vd(t,e){return iT(e,t)}function Bj(t,e,n,r,i){F(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Fa(t.visibleWrites,e,n)),t.lastWriteId=r}function Wj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Vj(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Hj(a,r.path)?i=!1:jn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Gj(t),!0;if(r.snap)t.visibleWrites=ew(t.visibleWrites,r.path);else{const a=r.children;tn(a,l=>{t.visibleWrites=ew(t.visibleWrites,ht(r.path,l))})}return!0}else return!1}function Hj(t,e){if(t.snap)return jn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&jn(ht(t.path,n),e))return!0;return!1}function Gj(t){t.visibleWrites=tT(t.allWrites,Kj,Pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Kj(t){return t.visible}function tT(t,e,n){let r=Bn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)jn(n,o)?(a=zt(n,o),r=Fa(r,a,s.snap)):jn(o,n)&&(a=zt(o,n),r=Fa(r,Pe(),s.snap.getChild(a)));else if(s.children){if(jn(n,o))a=zt(n,o),r=Z0(r,a,s.children);else if(jn(o,n))if(a=zt(o,n),_e(a))r=Z0(r,Pe(),s.children);else{const l=Io(s.children,ye(a));if(l){const u=l.getChild(Be(a));r=Fa(r,Pe(),u)}}}else throw zo("WriteRecord should have .snap or .children")}}return r}function nT(t,e,n,r,i){if(!r&&!i){const s=_s(t.visibleWrites,e);if(s!=null)return s;{const o=ai(t.visibleWrites,e);if(dm(o))return n;if(n==null&&!cm(o,Pe()))return null;{const a=n||ee.EMPTY_NODE;return Oo(o,a)}}}else{const s=ai(t.visibleWrites,e);if(!i&&dm(s))return n;if(!i&&n==null&&!cm(s,Pe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(jn(u.path,e)||jn(e,u.path))},a=tT(t.allWrites,o,e),l=n||ee.EMPTY_NODE;return Oo(a,l)}}}function Yj(t,e,n){let r=ee.EMPTY_NODE;const i=_s(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Je,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ai(t.visibleWrites,e);return n.forEachChild(Je,(o,a)=>{const l=Oo(ai(s,new Fe(o)),a);r=r.updateImmediateChild(o,l)}),tw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ai(t.visibleWrites,e);return tw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function qj(t,e,n,r,i){F(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ht(e,n);if(cm(t.visibleWrites,s))return null;{const o=ai(t.visibleWrites,s);return dm(o)?i.getChild(n):Oo(o,i.getChild(n))}}function Qj(t,e,n,r){const i=ht(e,n),s=_s(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ai(t.visibleWrites,i);return Oo(o,r.getNode().getImmediateChild(n))}else return null}function Xj(t,e){return _s(t.visibleWrites,e)}function Jj(t,e,n,r,i,s,o){let a;const l=ai(t.visibleWrites,e),u=_s(l,Pe());if(u!=null)a=u;else if(n!=null)a=Oo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&c.length<i;)d(p,r)!==0&&c.push(p),p=f.getNext();return c}else return[]}function Zj(){return{visibleWrites:Bn.empty(),allWrites:[],lastWriteId:-1}}function Gc(t,e,n,r){return nT(t.writeTree,t.treePath,e,n,r)}function vy(t,e){return Yj(t.writeTree,t.treePath,e)}function nw(t,e,n,r){return qj(t.writeTree,t.treePath,e,n,r)}function Kc(t,e){return Xj(t.writeTree,ht(t.treePath,e))}function eF(t,e,n,r,i,s){return Jj(t.writeTree,t.treePath,e,n,r,i,s)}function _y(t,e,n){return Qj(t.writeTree,t.treePath,e,n)}function rT(t,e){return iT(ht(t.treePath,e),t.writeTree)}function iT(t,e){return{treePath:t,writeTree:e}}/**
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
 */class tF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,vl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,yl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Po(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,vl(r,e.snapshotNode,i.oldSnap));else throw zo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class nF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const sT=new nF;class wy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new yi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _y(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ps(this.viewCache_),s=eF(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function rF(t){return{filter:t}}function iF(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sF(t,e,n,r,i){const s=new tF;let o,a;if(n.type===Fn.OVERWRITE){const u=n;u.source.fromUser?o=fm(t,e,u.path,u.snap,r,i,s):(F(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!_e(u.path),o=Yc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Fn.MERGE){const u=n;u.source.fromUser?o=aF(t,e,u.path,u.children,r,i,s):(F(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=hm(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Fn.ACK_USER_WRITE){const u=n;u.revert?o=cF(t,e,u.path,r,i,s):o=lF(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Fn.LISTEN_COMPLETE)o=uF(t,e,n.path,r,s);else throw zo("Unknown operation type: "+n.type);const l=s.getChanges();return oF(e,o,l),{viewCache:o,changes:l}}function oF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Hc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(QC(Hc(e)))}}function oT(t,e,n,r,i,s){const o=e.eventCache;if(Kc(r,n)!=null)return e;{let a,l;if(_e(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ps(e),c=u instanceof ee?u:ee.EMPTY_NODE,d=vy(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Gc(r,ps(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ye(n);if(u===".priority"){F(gi(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=nw(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=Be(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=nw(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=_y(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return ja(e,a,o.isFullyInitialized()||_e(n),t.filter.filtersNodes())}}function Yc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(_e(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),p,null)}else{const p=ye(n);if(!l.isCompleteForPath(n)&&gi(n)>1)return e;const g=Be(n),x=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?u=c.updatePriority(l.getNode(),x):u=c.updateChild(l.getNode(),p,x,g,sT,null)}const d=ZC(e,u,l.isFullyInitialized()||_e(n),c.filtersNodes()),f=new wy(i,d,s);return oT(t,d,n,i,f,a)}function fm(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new wy(i,e,s);if(_e(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ja(e,u,!0,t.filter.filtersNodes());else{const d=ye(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ja(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=Be(n),p=a.getNode().getImmediateChild(d);let g;if(_e(f))g=r;else{const v=c.getCompleteChild(d);v!=null?$C(f)===".priority"&&v.getChild(zC(f)).isEmpty()?g=v:g=v.updateChild(f,r):g=ee.EMPTY_NODE}if(p.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),d,g,f,c,o);l=ja(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function rw(t,e){return t.eventCache.isCompleteForChild(e)}function aF(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=ht(n,l);rw(e,ye(c))&&(a=fm(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=ht(n,l);rw(e,ye(c))||(a=fm(t,a,c,u,i,s,o))}),a}function iw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function hm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;_e(n)?u=r:u=new Ke(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),g=iw(t,p,f);l=Yc(t,l,new Fe(d),g,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!p){const g=e.serverCache.getNode().getImmediateChild(d),v=iw(t,g,f);l=Yc(t,l,new Fe(d),v,i,s,o,a)}}),l}function lF(t,e,n,r,i,s,o){if(Kc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(_e(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Yc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(_e(n)){let u=new Ke(null);return l.getNode().forEachChild(oi,(c,d)=>{u=u.set(new Fe(c),d)}),hm(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ke(null);return r.foreach((c,d)=>{const f=ht(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),hm(t,e,n,u,i,s,a,o)}}function uF(t,e,n,r,i){const s=e.serverCache,o=ZC(e,s.getNode(),s.isFullyInitialized()||_e(n),s.isFiltered());return oT(t,o,n,r,sT,i)}function cF(t,e,n,r,i,s){let o;if(Kc(r,n)!=null)return e;{const a=new wy(r,e,i),l=e.eventCache.getNode();let u;if(_e(n)||ye(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Gc(r,ps(e));else{const d=e.serverCache.getNode();F(d instanceof ee,"serverChildren would be complete if leaf node"),c=vy(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ye(n);let d=_y(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,Be(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,ee.EMPTY_NODE,Be(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gc(r,ps(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Kc(r,Pe())!=null,ja(e,u,o,t.filter.filtersNodes())}}/**
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
 */class dF{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new py(r.getIndex()),s=Rj(r);this.processor_=rF(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(ee.EMPTY_NODE,a.getNode(),null),c=new yi(l,o.isFullyInitialized(),i.filtersNodes()),d=new yi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Wd(d,c),this.eventGenerator_=new jj(this.query_)}get query(){return this.query_}}function fF(t){return t.viewCache_.serverCache.getNode()}function hF(t){return Hc(t.viewCache_)}function pF(t,e){const n=ps(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!_e(e)&&!n.getImmediateChild(ye(e)).isEmpty())?n.getChild(e):null}function sw(t){return t.eventRegistrations_.length===0}function mF(t,e){t.eventRegistrations_.push(e)}function ow(t,e,n){const r=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function aw(t,e,n,r){e.type===Fn.MERGE&&e.source.queryId!==null&&(F(ps(t.viewCache_),"We should always have a full cache before handling merges"),F(Hc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=sF(t.processor_,i,e,n,r);return iF(t.processor_,s.viewCache),F(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,aT(t,s.changes,s.viewCache.eventCache.getNode(),null)}function gF(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Je,(s,o)=>{r.push(Po(s,o))}),n.isFullyInitialized()&&r.push(QC(n.getNode())),aT(t,r,n.getNode(),e)}function aT(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Fj(t.eventGenerator_,e,n,i)}/**
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
 */let qc;class lT{constructor(){this.views=new Map}}function yF(t){F(!qc,"__referenceConstructor has already been defined"),qc=t}function vF(){return F(qc,"Reference.ts has not been loaded"),qc}function _F(t){return t.views.size===0}function xy(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return F(s!=null,"SyncTree gave us an op for an invalid query."),aw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(aw(o,e,n,r));return s}}function uT(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Gc(n,i?r:null),l=!1;a?l=!0:r instanceof ee?(a=vy(n,r),l=!1):(a=ee.EMPTY_NODE,l=!1);const u=Wd(new yi(a,l,!1),new yi(r,i,!1));return new dF(e,u)}return o}function wF(t,e,n,r,i,s){const o=uT(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),mF(o,n),gF(o,n)}function xF(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=vi(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(ow(u,n,r)),sw(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(ow(l,n,r)),sw(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!vi(t)&&s.push(new(vF())(e._repo,e._path)),{removed:s,events:o}}function cT(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function li(t,e){let n=null;for(const r of t.views.values())n=n||pF(r,e);return n}function dT(t,e){if(e._queryParams.loadsAllData())return Hd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function fT(t,e){return dT(t,e)!=null}function vi(t){return Hd(t)!=null}function Hd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Qc;function EF(t){F(!Qc,"__referenceConstructor has already been defined"),Qc=t}function SF(){return F(Qc,"Reference.ts has not been loaded"),Qc}let CF=1;class lw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ke(null),this.pendingWriteTree_=Zj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hT(t,e,n,r,i){return Bj(t.pendingWriteTree_,e,n,r,i),i?Gl(t,new hs(JC(),e,n)):[]}function Vi(t,e,n=!1){const r=Wj(t.pendingWriteTree_,e);if(Vj(t.pendingWriteTree_,e)){let s=new Ke(null);return r.snap!=null?s=s.set(Pe(),!0):tn(r.children,o=>{s=s.set(new Fe(o),!0)}),Gl(t,new Vc(r.path,s,n))}else return[]}function Hl(t,e,n){return Gl(t,new hs(gy(),e,n))}function TF(t,e,n){const r=Ke.fromObject(n);return Gl(t,new xl(gy(),e,r))}function bF(t,e){return Gl(t,new wl(gy(),e))}function IF(t,e,n){const r=Sy(t,n);if(r){const i=Cy(r),s=i.path,o=i.queryId,a=zt(s,e),l=new wl(yy(o),a);return Ty(t,s,l)}else return[]}function Xc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||fT(o,e))){const l=xF(o,e,n,r);_F(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,p)=>vi(p));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=PF(f);for(let g=0;g<p.length;++g){const v=p[g],x=v.query,m=yT(t,v);t.listenProvider_.startListening($a(x),El(t,x),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening($a(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(Gd(f));t.listenProvider_.stopListening($a(f),p)}))}OF(t,u)}return a}function pT(t,e,n,r){const i=Sy(t,r);if(i!=null){const s=Cy(i),o=s.path,a=s.queryId,l=zt(o,e),u=new hs(yy(a),l,n);return Ty(t,o,u)}else return[]}function kF(t,e,n,r){const i=Sy(t,r);if(i){const s=Cy(i),o=s.path,a=s.queryId,l=zt(o,e),u=Ke.fromObject(n),c=new xl(yy(a),l,u);return Ty(t,o,c)}else return[]}function pm(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const g=zt(f,i);s=s||li(p,g),o=o||vi(p)});let a=t.syncPointTree_.get(i);a?(o=o||vi(a),s=s||li(a,Pe())):(a=new lT,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=ee.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const v=li(g,Pe());v&&(s=s.updateImmediateChild(p,v))}));const u=fT(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Gd(e);F(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=AF();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const c=Vd(t.pendingWriteTree_,i);let d=wF(a,e,n,c,s,l);if(!u&&!o&&!r){const f=dT(a,e);d=d.concat(NF(t,e,f))}return d}function Ey(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=zt(o,e),u=li(a,l);if(u)return u});return nT(i,e,s,n,!0)}function RF(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=zt(u,n);r=r||li(c,d)});let i=t.syncPointTree_.get(n);i?r=r||li(i,Pe()):(i=new lT,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new yi(r,!0,!1):null,a=Vd(t.pendingWriteTree_,e._path),l=uT(i,e,a,s?o.getNode():ee.EMPTY_NODE,s);return hF(l)}function Gl(t,e){return mT(e,t.syncPointTree_,null,Vd(t.pendingWriteTree_,Pe()))}function mT(t,e,n,r){if(_e(t.path))return gT(t,e,n,r);{const i=e.get(Pe());n==null&&i!=null&&(n=li(i,Pe()));let s=[];const o=ye(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=rT(r,o);s=s.concat(mT(a,l,u,c))}return i&&(s=s.concat(xy(i,t,r,n))),s}}function gT(t,e,n,r){const i=e.get(Pe());n==null&&i!=null&&(n=li(i,Pe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=rT(r,o),c=t.operationForChild(o);c&&(s=s.concat(gT(c,a,l,u)))}),i&&(s=s.concat(xy(i,t,r,n))),s}function yT(t,e){const n=e.query,r=El(t,n);return{hashFn:()=>(fF(e)||ee.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?IF(t,n._path,r):bF(t,n._path);{const s=P2(i,n);return Xc(t,n,null,s)}}}}function El(t,e){const n=Gd(e);return t.queryToTagMap.get(n)}function Gd(t){return t._path.toString()+"$"+t._queryIdentifier}function Sy(t,e){return t.tagToQueryMap.get(e)}function Cy(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Fe(t.substr(0,e))}}function Ty(t,e,n){const r=t.syncPointTree_.get(e);F(r,"Missing sync point for query tag that we're tracking");const i=Vd(t.pendingWriteTree_,e);return xy(r,n,i,null)}function PF(t){return t.fold((e,n,r)=>{if(n&&vi(n))return[Hd(n)];{let i=[];return n&&(i=cT(n)),tn(r,(s,o)=>{i=i.concat(o)}),i}})}function $a(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(SF())(t._repo,t._path):t}function OF(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Gd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function AF(){return CF++}function NF(t,e,n){const r=e._path,i=El(t,e),s=yT(t,n),o=t.listenProvider_.startListening($a(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)F(!vi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!_e(u)&&c&&vi(c))return[Hd(c).query];{let f=[];return c&&(f=f.concat(cT(c).map(p=>p.query))),tn(d,(p,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening($a(c),El(t,c))}}return o}/**
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
 */class by{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new by(n)}node(){return this.node_}}class Iy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ht(this.path_,e);return new Iy(this.syncTree_,n)}node(){return Ey(this.syncTree_,this.path_)}}const DF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},uw=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return MF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return LF(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},MF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},LF=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&F(!1,"Unexpected increment value: "+r);const i=e.node();if(F(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},jF=function(t,e,n,r){return ky(e,new Iy(n,t),r)},vT=function(t,e,n){return ky(t,new by(e),n)};function ky(t,e,n){const r=t.getPriority().val(),i=uw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=uw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new _t(a,St(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new _t(i))),o.forEachChild(Je,(a,l)=>{const u=ky(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Ry{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Py(t,e){let n=e instanceof Fe?e:new Fe(e),r=t,i=ye(n);for(;i!==null;){const s=Io(r.node.children,i)||{children:{},childCount:0};r=new Ry(i,r,s),n=Be(n),i=ye(n)}return r}function Ko(t){return t.node.value}function _T(t,e){t.node.value=e,mm(t)}function wT(t){return t.node.childCount>0}function FF(t){return Ko(t)===void 0&&!wT(t)}function Kd(t,e){tn(t.node.children,(n,r)=>{e(new Ry(n,t,r))})}function xT(t,e,n,r){n&&!r&&e(t),Kd(t,i=>{xT(i,e,!0,r)}),n&&r&&e(t)}function $F(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Kl(t){return new Fe(t.parent===null?t.name:Kl(t.parent)+"/"+t.name)}function mm(t){t.parent!==null&&UF(t.parent,t.name,t)}function UF(t,e,n){const r=FF(n),i=rr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,mm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,mm(t))}/**
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
 */const zF=/[\[\].#$\/\u0000-\u001F\u007F]/,BF=/[\[\].#$\u0000-\u001F\u007F]/,_h=10*1024*1024,ET=function(t){return typeof t=="string"&&t.length!==0&&!zF.test(t)},ST=function(t){return typeof t=="string"&&t.length!==0&&!BF.test(t)},WF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ST(t)},cw=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!oy(t)||t&&typeof t=="object"&&rr(t,".sv")},VF=function(t,e,n,r){r&&e===void 0||Oy(Kg(t,"value"),e,n)},Oy=function(t,e,n){const r=n instanceof Fe?new uj(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Di(r));if(typeof e=="function")throw new Error(t+"contains a function "+Di(r)+" with contents = "+e.toString());if(oy(e))throw new Error(t+"contains "+e.toString()+" "+Di(r));if(typeof e=="string"&&e.length>_h/3&&jd(e)>_h)throw new Error(t+"contains a string greater than "+_h+" utf8 bytes "+Di(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(tn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ET(o)))throw new Error(t+" contains an invalid key ("+o+") "+Di(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cj(r,o),Oy(t,a,r),dj(r)}),i&&s)throw new Error(t+' contains ".value" child '+Di(r)+" in addition to actual children.")}},CT=function(t,e,n,r){if(!(r&&n===void 0)&&!ST(n))throw new Error(Kg(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},HF=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),CT(t,e,n,r)},GF=function(t,e){if(ye(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},KF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ET(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!WF(n))throw new Error(Kg(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class YF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ay(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!dy(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function TT(t,e,n){Ay(t,n),bT(t,r=>dy(r,e))}function nr(t,e,n){Ay(t,n),bT(t,r=>jn(r,e)||jn(e,r))}function bT(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(qF(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();qi&&jt("event: "+n.toString()),Go(r)}}}/**
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
 */const QF="repo_interrupt",XF=25;class JF{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new YF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wc(),this.transactionQueueTree_=new Ry,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZF(t,e,n){if(t.stats_=uy(t.repoInfo_),t.forceRestClient_||D2())t.server_=new Bc(t.repoInfo_,(r,i,s,o)=>{dw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ft(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new _r(t.repoInfo_,e,(r,i,s,o)=>{dw(t,r,i,s,o)},r=>{fw(t,r)},r=>{t4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=$2(t.repoInfo_,()=>new Lj(t.stats_,t.server_)),t.infoData_=new Oj,t.infoSyncTree_=new lw({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Hl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Dy(t,"connected",!1),t.serverSyncTree_=new lw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);nr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function e4(t){const n=t.infoData_.getNode(new Fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ny(t){return DF({timestamp:e4(t)})}function dw(t,e,n,r,i){t.dataUpdateCount++;const s=new Fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Oc(n,u=>St(u));o=kF(t.serverSyncTree_,s,l,i)}else{const l=St(n);o=pT(t.serverSyncTree_,s,l,i)}else if(r){const l=Oc(n,u=>St(u));o=TF(t.serverSyncTree_,s,l)}else{const l=St(n);o=Hl(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=qd(t,s)),nr(t.eventQueue_,a,o)}function fw(t,e){Dy(t,"connected",e),e===!1&&i4(t)}function t4(t,e){tn(e,(n,r)=>{Dy(t,n,r)})}function Dy(t,e,n){const r=new Fe("/.info/"+e),i=St(n);t.infoData_.updateSnapshot(r,i);const s=Hl(t.infoSyncTree_,r,i);nr(t.eventQueue_,r,s)}function IT(t){return t.nextWriteId_++}function n4(t,e,n){const r=RF(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=St(i).withIndex(e._queryParams.getIndex());pm(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Hl(t.serverSyncTree_,e._path,s);else{const a=El(t.serverSyncTree_,e);o=pT(t.serverSyncTree_,e._path,s,a)}return nr(t.eventQueue_,e._path,o),Xc(t.serverSyncTree_,e,n,null,!0),s},i=>(Yd(t,"get for query "+ft(e)+" failed: "+i),Promise.reject(new Error(i))))}function r4(t,e,n,r,i){Yd(t,"set",{path:e.toString(),value:n,priority:r});const s=Ny(t),o=St(n,r),a=Ey(t.serverSyncTree_,e),l=vT(o,a,s),u=IT(t),c=hT(t.serverSyncTree_,e,l,u,!0);Ay(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||en("set at "+e+" failed: "+f);const v=Vi(t.serverSyncTree_,u,!g);nr(t.eventQueue_,e,v),a4(t,i,f,p)});const d=AT(t,e);qd(t,d),nr(t.eventQueue_,d,[])}function i4(t){Yd(t,"onDisconnectEvents");const e=Ny(t),n=Wc();um(t.onDisconnect_,Pe(),(i,s)=>{const o=jF(i,s,t.serverSyncTree_,e);XC(n,i,o)});let r=[];um(n,Pe(),(i,s)=>{r=r.concat(Hl(t.serverSyncTree_,i,s));const o=AT(t,i);qd(t,o)}),t.onDisconnect_=Wc(),nr(t.eventQueue_,Pe(),r)}function s4(t,e,n){let r;ye(e._path)===".info"?r=pm(t.infoSyncTree_,e,n):r=pm(t.serverSyncTree_,e,n),TT(t.eventQueue_,e._path,r)}function hw(t,e,n){let r;ye(e._path)===".info"?r=Xc(t.infoSyncTree_,e,n):r=Xc(t.serverSyncTree_,e,n),TT(t.eventQueue_,e._path,r)}function o4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(QF)}function Yd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),jt(n,...e)}function a4(t,e,n,r){e&&Go(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function kT(t,e,n){return Ey(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function My(t,e=t.transactionQueueTree_){if(e||Qd(t,e),Ko(e)){const n=PT(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&l4(t,Kl(e),n)}else wT(e)&&Kd(e,n=>{My(t,n)})}function l4(t,e,n){const r=n.map(u=>u.currentWriteId),i=kT(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];F(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=zt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Yd(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Vi(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Qd(t,Py(t.transactionQueueTree_,e)),My(t,t.transactionQueueTree_),nr(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Go(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{en("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}qd(t,e)}},o)}function qd(t,e){const n=RT(t,e),r=Kl(n),i=PT(t,n);return u4(t,i,r),r}function u4(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=zt(n,l.path);let c=!1,d;if(F(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Vi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=XF)c=!0,d="maxretry",i=i.concat(Vi(t.serverSyncTree_,l.currentWriteId,!0));else{const f=kT(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Oy("transaction failed: Data returned ",p,l.path);let g=St(p);typeof p=="object"&&p!=null&&rr(p,".priority")||(g=g.updatePriority(f.getPriority()));const x=l.currentWriteId,m=Ny(t),h=vT(g,f,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=h,l.currentWriteId=IT(t),o.splice(o.indexOf(x),1),i=i.concat(hT(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Vi(t.serverSyncTree_,x,!0))}else c=!0,d="nodata",i=i.concat(Vi(t.serverSyncTree_,l.currentWriteId,!0))}nr(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Qd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Go(r[a]);My(t,t.transactionQueueTree_)}function RT(t,e){let n,r=t.transactionQueueTree_;for(n=ye(e);n!==null&&Ko(r)===void 0;)r=Py(r,n),e=Be(e),n=ye(e);return r}function PT(t,e){const n=[];return OT(t,e,n),n.sort((r,i)=>r.order-i.order),n}function OT(t,e,n){const r=Ko(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Kd(e,i=>{OT(t,i,n)})}function Qd(t,e){const n=Ko(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,_T(e,n.length>0?n:void 0)}Kd(e,r=>{Qd(t,r)})}function AT(t,e){const n=Kl(RT(t,e)),r=Py(t.transactionQueueTree_,e);return $F(r,i=>{wh(t,i)}),wh(t,r),xT(r,i=>{wh(t,i)}),n}function wh(t,e){const n=Ko(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Vi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?_T(e,void 0):n.length=s+1,nr(t.eventQueue_,Kl(e),i);for(let o=0;o<r.length;o++)Go(r[o])}}/**
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
 */function c4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function d4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):en(`Invalid query segment '${n}' in query '${t}'`)}return e}const pw=function(t,e){const n=f4(t),r=n.namespace;n.domain==="firebase.com"&&Ir(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ir("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||T2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new PC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Fe(n.pathString)}},f4=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=c4(t.substring(c,d)));const f=d4(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class NT{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ft(this.snapshot.exportVal())}}class DT{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class MT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Xd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return _e(this._path)?null:$C(this._path)}get ref(){return new ir(this._repo,this._path)}get _queryIdentifier(){const e=X0(this._queryParams),n=ay(e);return n==="{}"?"default":n}get _queryObject(){return X0(this._queryParams)}isEqual(e){if(e=Nt(e),!(e instanceof Xd))return!1;const n=this._repo===e._repo,r=dy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+lj(this._path)}}function h4(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function p4(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===oi){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==fs)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==mi)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Je){if(e!=null&&!cw(e)||n!=null&&!cw(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(F(t.getIndex()instanceof YC||t.getIndex()===qC,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class ir extends Xd{constructor(e,n){super(e,n,new my,!1)}get parent(){const e=zC(this._path);return e===null?null:new ir(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ao{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Fe(e),r=Jc(this.ref,e);return new Ao(this._node.getChild(n),r,Je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ao(i,Jc(this.ref,r),Je)))}hasChild(e){const n=new Fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Sl(t,e){return t=Nt(t),t._checkNotDeleted("ref"),e!==void 0?Jc(t._root,e):t._root}function Jc(t,e){return t=Nt(t),ye(t._path)===null?HF("child","path",e,!1):CT("child","path",e,!1),new ir(t._repo,ht(t._path,e))}function LT(t,e){t=Nt(t),GF("set",t._path),VF("set",e,t._path,!1);const n=new Ld;return r4(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function jT(t){t=Nt(t);const e=new MT(()=>{}),n=new Jd(e);return n4(t._repo,t,n).then(r=>new Ao(r,new ir(t._repo,t._path),t._queryParams.getIndex()))}class Jd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new NT("value",this,new Ao(e.snapshotNode,new ir(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new DT(this,e,n):null}matches(e){return e instanceof Jd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ly{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new DT(this,e,n):null}createEvent(e,n){F(e.childName!=null,"Child events should have a childName.");const r=Jc(new ir(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new NT(e.type,this,new Ao(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ly?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function m4(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{hw(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new MT(n,s||void 0),a=e==="value"?new Jd(o):new Ly(e,o);return s4(t._repo,t,a),()=>hw(t._repo,t,a)}function g4(t,e,n,r){return m4(t,"value",e,n,r)}class y4{}class v4 extends y4{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){h4(e,"orderByKey");const n=Pj(e._queryParams,oi);return p4(n),new Xd(e._repo,e._path,n,!0)}}function _4(){return new v4}function w4(t,...e){let n=Nt(t);for(const r of e)n=r._apply(n);return n}yF(ir);EF(ir);/**
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
 */const x4="FIREBASE_DATABASE_EMULATOR_HOST",gm={};let E4=!1;function S4(t,e,n,r){t.repoInfo_=new PC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function C4(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ir("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),jt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=pw(s,i),a=o.repoInfo,l,u;typeof process<"u"&&N0&&(u=N0[x4]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=pw(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new co(co.OWNER):new L2(t.name,t.options,e);KF("Invalid Firebase Database URL",o),_e(o.path)||Ir("Database URL must point to the root of a Firebase Database (not including a child path).");const d=b4(a,t,c,new M2(t.name,n));return new I4(d,t)}function T4(t,e){const n=gm[e];(!n||n[t.key]!==t)&&Ir(`Database ${e}(${t.repoInfo_}) has already been deleted.`),o4(t),delete n[t.key]}function b4(t,e,n,r){let i=gm[e.name];i||(i={},gm[e.name]=i);let s=i[t.toURLString()];return s&&Ir("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new JF(t,E4,n,r),i[t.toURLString()]=s,s}class I4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ir(this._repo,Pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(T4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ir("Cannot call "+e+" on a deleted database.")}}function k4(t=MS(),e){const n=Qg(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=ON("database");r&&R4(n,...r)}return n}function R4(t,e,n,r={}){t=Nt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ir("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ir('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new co(co.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:AN(r.mockUserToken,t.app.options.projectId);s=new co(o)}S4(i,e,n,s)}/**
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
 */function P4(t){w2(Wo),ko(new ls("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return C4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),si(D0,M0,t),si(D0,M0,"esm2017")}_r.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_r.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};P4();const O4={apiKey:"AIzaSyCWYjmkk34JmxhoKR59l_T-aK5C44aY72I",authDomain:"babysitters-57e3c.firebaseapp.com",databaseURL:"https://babysitters-57e3c-default-rtdb.firebaseio.com",projectId:"babysitters-57e3c",storageBucket:"babysitters-57e3c.appspot.com",messagingSenderId:"107090147671",appId:"1:107090147671:web:d1ad6872e16611aa746612"},A4=DS(O4),Cl=k4(A4),No=v2(),ym=async t=>{const e=Sl(Cl,`users/${t}/favorites`),n=await jT(e);if(n.exists()){const r=n.val();return Object.keys(r).map(s=>r[s])}else return[]},N4=(t,e)=>{LT(Sl(Cl,"users/"+t),{favorites:e})},D4=async(t,e)=>{const n=Sl(Cl,`users/${t}/favorites`),r=await jT(n);if(r.exists()){const i=r.val(),s=Object.keys(i).map(a=>({id:a,...i[a]})),o=s.findIndex(a=>a.id===e);o!==-1?(s.splice(o,1),LT(Sl(Cl,`users/${t}/favorites`),s)):console.error("Object with provided favoriteId not found in favorites array")}else console.error("No favorites found for the provided userId")},M4=yA`
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

    
`,ha=["320","833","834","1439","1440"],L4=Object.freeze({colors:{mainBackground:"#F3F3F3",primaryGreenColor:"#103931",secondaryGreenColor:"#38cd3e",headerText:"#fbfbfb",titleText:"#8a8a89",primaryBodyText:"#11101c",secondaryBodyText:"rgba(17, 16, 28, 0.5)",buttonBorder:"rgba(251, 251, 251, 0.4)",photoBorder:"rgba(240, 63, 59, 0.2)",primaryWhite:"#FFFFFF",error:"#E74A3B",additionalGreenColor:"rgba(16, 57, 49, 0.2)"},transition:{customTrans:"250ms cubic-bezier(0.4, 0, 0.2, 1)"},mq:{mobMin:`min-width: ${ha[0]}px`,mobMax:`max-width: ${ha[1]}px`,tabMin:`min-width: ${ha[2]}px`,tabMax:`max-width: ${ha[3]}px`,deskMin:`min-width: ${ha[4]}px`}}),j4="/BabySitterHub/assets/Error-Xo2ryO_F.png",F4=N.section`
  height: 100lvh;
  background-color: ${t=>t.theme.colors.primaryGreenColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${t=>t.theme.colors.headerText};
  img {
    text-align: center;
    opacity: 0.3;
  }
  h1 {
    font-size: 80px;
  }
  p {
    font-size: 30px;
    margin-bottom: 30px;
  }
`,$4=N(Ml)`
  font-size: 30px;
  color: ${t=>t.theme.colors.headerText};
  text-decoration: underline;
`,U4=()=>{const t=kE();return console.log(t),w.jsxs(F4,{children:[w.jsx("h1",{children:"Oooops..."}),w.jsx("img",{src:j4}),t.statusText==="Not Found"?w.jsx("p",{children:"Sorry, the page you're looking for cannot be found."}):w.jsxs("p",{children:['Sorry, something went wrong. "',t.statusText,'"']}),w.jsx($4,{to:"/BabySitterHub/",children:"Back to home"})]})},FT=C.createContext(),jy=()=>C.useContext(FT),z4=({children:t})=>{const[e,n]=C.useState({isOpen:!1,formType:null,selectedNanny:null}),r=(s,o)=>{n({isOpen:!0,formType:s,selectedNanny:o})},i=()=>{n({isOpen:!1,formType:null,selectedNanny:null})};return w.jsx(FT.Provider,{value:{modalConfig:e,openModal:r,closeModal:i},children:t})};function Zd(){const{currentUser:t}=Rg(Wg);return{currentUser:t,name:t==null?void 0:t.name,isAuth:!!(t!=null&&t.email),email:t.email}}const B4=N.button`
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
`,_n=({title:t,border:e,onClick:n,padding:r,type:i})=>w.jsx(B4,{$border:e,onClick:n,$padding:r,type:i,children:t});var W4=function(e){return V4(e)&&!H4(e)};function V4(t){return!!t&&typeof t=="object"}function H4(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||Y4(t)}var G4=typeof Symbol=="function"&&Symbol.for,K4=G4?Symbol.for("react.element"):60103;function Y4(t){return t.$$typeof===K4}function q4(t){return Array.isArray(t)?[]:{}}function Zc(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Tl(q4(t),t,e):t}function Q4(t,e,n){return t.concat(e).map(function(r){return Zc(r,n)})}function X4(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=Zc(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=Zc(e[i],n):r[i]=Tl(t[i],e[i],n)}),r}function Tl(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||Q4,n.isMergeableObject=n.isMergeableObject||W4;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):X4(t,e,n):Zc(e,n)}Tl.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return Tl(r,i,n)},{})};var vm=Tl,$T=typeof global=="object"&&global&&global.Object===Object&&global,J4=typeof self=="object"&&self&&self.Object===Object&&self,sr=$T||J4||Function("return this")(),_i=sr.Symbol,UT=Object.prototype,Z4=UT.hasOwnProperty,e3=UT.toString,pa=_i?_i.toStringTag:void 0;function t3(t){var e=Z4.call(t,pa),n=t[pa];try{t[pa]=void 0;var r=!0}catch{}var i=e3.call(t);return r&&(e?t[pa]=n:delete t[pa]),i}var n3=Object.prototype,r3=n3.toString;function i3(t){return r3.call(t)}var s3="[object Null]",o3="[object Undefined]",mw=_i?_i.toStringTag:void 0;function ws(t){return t==null?t===void 0?o3:s3:mw&&mw in Object(t)?t3(t):i3(t)}function zT(t,e){return function(n){return t(e(n))}}var Fy=zT(Object.getPrototypeOf,Object);function xs(t){return t!=null&&typeof t=="object"}var a3="[object Object]",l3=Function.prototype,u3=Object.prototype,BT=l3.toString,c3=u3.hasOwnProperty,d3=BT.call(Object);function gw(t){if(!xs(t)||ws(t)!=a3)return!1;var e=Fy(t);if(e===null)return!0;var n=c3.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&BT.call(n)==d3}var yw=Array.isArray,vw=Object.keys,f3=Object.prototype.hasOwnProperty,h3=typeof Element<"u";function _m(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=yw(t),r=yw(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!_m(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,c=e instanceof RegExp;if(u!=c)return!1;if(u&&c)return t.toString()==e.toString();var d=vw(t);if(s=d.length,s!==vw(e).length)return!1;for(i=s;i--!==0;)if(!f3.call(e,d[i]))return!1;if(h3&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=d[i],!(o==="_owner"&&t.$$typeof)&&!_m(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var p3=function(e,n){try{return _m(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Mi=od(p3);function m3(){this.__data__=[],this.size=0}function WT(t,e){return t===e||t!==t&&e!==e}function ef(t,e){for(var n=t.length;n--;)if(WT(t[n][0],e))return n;return-1}var g3=Array.prototype,y3=g3.splice;function v3(t){var e=this.__data__,n=ef(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():y3.call(e,n,1),--this.size,!0}function _3(t){var e=this.__data__,n=ef(e,t);return n<0?void 0:e[n][1]}function w3(t){return ef(this.__data__,t)>-1}function x3(t,e){var n=this.__data__,r=ef(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Or(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Or.prototype.clear=m3;Or.prototype.delete=v3;Or.prototype.get=_3;Or.prototype.has=w3;Or.prototype.set=x3;function E3(){this.__data__=new Or,this.size=0}function S3(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function C3(t){return this.__data__.get(t)}function T3(t){return this.__data__.has(t)}function Yl(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var b3="[object AsyncFunction]",I3="[object Function]",k3="[object GeneratorFunction]",R3="[object Proxy]";function VT(t){if(!Yl(t))return!1;var e=ws(t);return e==I3||e==k3||e==b3||e==R3}var xh=sr["__core-js_shared__"],_w=function(){var t=/[^.]+$/.exec(xh&&xh.keys&&xh.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function P3(t){return!!_w&&_w in t}var O3=Function.prototype,A3=O3.toString;function Es(t){if(t!=null){try{return A3.call(t)}catch{}try{return t+""}catch{}}return""}var N3=/[\\^$.*+?()[\]{}|]/g,D3=/^\[object .+?Constructor\]$/,M3=Function.prototype,L3=Object.prototype,j3=M3.toString,F3=L3.hasOwnProperty,$3=RegExp("^"+j3.call(F3).replace(N3,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function U3(t){if(!Yl(t)||P3(t))return!1;var e=VT(t)?$3:D3;return e.test(Es(t))}function z3(t,e){return t==null?void 0:t[e]}function Ss(t,e){var n=z3(t,e);return U3(n)?n:void 0}var bl=Ss(sr,"Map"),Il=Ss(Object,"create");function B3(){this.__data__=Il?Il(null):{},this.size=0}function W3(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var V3="__lodash_hash_undefined__",H3=Object.prototype,G3=H3.hasOwnProperty;function K3(t){var e=this.__data__;if(Il){var n=e[t];return n===V3?void 0:n}return G3.call(e,t)?e[t]:void 0}var Y3=Object.prototype,q3=Y3.hasOwnProperty;function Q3(t){var e=this.__data__;return Il?e[t]!==void 0:q3.call(e,t)}var X3="__lodash_hash_undefined__";function J3(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Il&&e===void 0?X3:e,this}function ms(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ms.prototype.clear=B3;ms.prototype.delete=W3;ms.prototype.get=K3;ms.prototype.has=Q3;ms.prototype.set=J3;function Z3(){this.size=0,this.__data__={hash:new ms,map:new(bl||Or),string:new ms}}function e6(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function tf(t,e){var n=t.__data__;return e6(e)?n[typeof e=="string"?"string":"hash"]:n.map}function t6(t){var e=tf(this,t).delete(t);return this.size-=e?1:0,e}function n6(t){return tf(this,t).get(t)}function r6(t){return tf(this,t).has(t)}function i6(t,e){var n=tf(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Ii(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ii.prototype.clear=Z3;Ii.prototype.delete=t6;Ii.prototype.get=n6;Ii.prototype.has=r6;Ii.prototype.set=i6;var s6=200;function o6(t,e){var n=this.__data__;if(n instanceof Or){var r=n.__data__;if(!bl||r.length<s6-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Ii(r)}return n.set(t,e),this.size=n.size,this}function Yo(t){var e=this.__data__=new Or(t);this.size=e.size}Yo.prototype.clear=E3;Yo.prototype.delete=S3;Yo.prototype.get=C3;Yo.prototype.has=T3;Yo.prototype.set=o6;function a6(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var ww=function(){try{var t=Ss(Object,"defineProperty");return t({},"",{}),t}catch{}}();function HT(t,e,n){e=="__proto__"&&ww?ww(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var l6=Object.prototype,u6=l6.hasOwnProperty;function GT(t,e,n){var r=t[e];(!(u6.call(t,e)&&WT(r,n))||n===void 0&&!(e in t))&&HT(t,e,n)}function nf(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?HT(n,a,l):GT(n,a,l)}return n}function c6(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var d6="[object Arguments]";function xw(t){return xs(t)&&ws(t)==d6}var KT=Object.prototype,f6=KT.hasOwnProperty,h6=KT.propertyIsEnumerable,p6=xw(function(){return arguments}())?xw:function(t){return xs(t)&&f6.call(t,"callee")&&!h6.call(t,"callee")},ql=Array.isArray;function m6(){return!1}var YT=typeof ln=="object"&&ln&&!ln.nodeType&&ln,Ew=YT&&typeof un=="object"&&un&&!un.nodeType&&un,g6=Ew&&Ew.exports===YT,Sw=g6?sr.Buffer:void 0,y6=Sw?Sw.isBuffer:void 0,qT=y6||m6,v6=9007199254740991,_6=/^(?:0|[1-9]\d*)$/;function w6(t,e){var n=typeof t;return e=e??v6,!!e&&(n=="number"||n!="symbol"&&_6.test(t))&&t>-1&&t%1==0&&t<e}var x6=9007199254740991;function QT(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=x6}var E6="[object Arguments]",S6="[object Array]",C6="[object Boolean]",T6="[object Date]",b6="[object Error]",I6="[object Function]",k6="[object Map]",R6="[object Number]",P6="[object Object]",O6="[object RegExp]",A6="[object Set]",N6="[object String]",D6="[object WeakMap]",M6="[object ArrayBuffer]",L6="[object DataView]",j6="[object Float32Array]",F6="[object Float64Array]",$6="[object Int8Array]",U6="[object Int16Array]",z6="[object Int32Array]",B6="[object Uint8Array]",W6="[object Uint8ClampedArray]",V6="[object Uint16Array]",H6="[object Uint32Array]",Ge={};Ge[j6]=Ge[F6]=Ge[$6]=Ge[U6]=Ge[z6]=Ge[B6]=Ge[W6]=Ge[V6]=Ge[H6]=!0;Ge[E6]=Ge[S6]=Ge[M6]=Ge[C6]=Ge[L6]=Ge[T6]=Ge[b6]=Ge[I6]=Ge[k6]=Ge[R6]=Ge[P6]=Ge[O6]=Ge[A6]=Ge[N6]=Ge[D6]=!1;function G6(t){return xs(t)&&QT(t.length)&&!!Ge[ws(t)]}function $y(t){return function(e){return t(e)}}var XT=typeof ln=="object"&&ln&&!ln.nodeType&&ln,Ua=XT&&typeof un=="object"&&un&&!un.nodeType&&un,K6=Ua&&Ua.exports===XT,Eh=K6&&$T.process,Do=function(){try{var t=Ua&&Ua.require&&Ua.require("util").types;return t||Eh&&Eh.binding&&Eh.binding("util")}catch{}}(),Cw=Do&&Do.isTypedArray,Y6=Cw?$y(Cw):G6,q6=Object.prototype,Q6=q6.hasOwnProperty;function JT(t,e){var n=ql(t),r=!n&&p6(t),i=!n&&!r&&qT(t),s=!n&&!r&&!i&&Y6(t),o=n||r||i||s,a=o?c6(t.length,String):[],l=a.length;for(var u in t)(e||Q6.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||w6(u,l)))&&a.push(u);return a}var X6=Object.prototype;function Uy(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||X6;return t===n}var J6=zT(Object.keys,Object),Z6=Object.prototype,e$=Z6.hasOwnProperty;function t$(t){if(!Uy(t))return J6(t);var e=[];for(var n in Object(t))e$.call(t,n)&&n!="constructor"&&e.push(n);return e}function ZT(t){return t!=null&&QT(t.length)&&!VT(t)}function zy(t){return ZT(t)?JT(t):t$(t)}function n$(t,e){return t&&nf(e,zy(e),t)}function r$(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var i$=Object.prototype,s$=i$.hasOwnProperty;function o$(t){if(!Yl(t))return r$(t);var e=Uy(t),n=[];for(var r in t)r=="constructor"&&(e||!s$.call(t,r))||n.push(r);return n}function By(t){return ZT(t)?JT(t,!0):o$(t)}function a$(t,e){return t&&nf(e,By(e),t)}var eb=typeof ln=="object"&&ln&&!ln.nodeType&&ln,Tw=eb&&typeof un=="object"&&un&&!un.nodeType&&un,l$=Tw&&Tw.exports===eb,bw=l$?sr.Buffer:void 0,Iw=bw?bw.allocUnsafe:void 0;function u$(t,e){if(e)return t.slice();var n=t.length,r=Iw?Iw(n):new t.constructor(n);return t.copy(r),r}function tb(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function c$(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function nb(){return[]}var d$=Object.prototype,f$=d$.propertyIsEnumerable,kw=Object.getOwnPropertySymbols,Wy=kw?function(t){return t==null?[]:(t=Object(t),c$(kw(t),function(e){return f$.call(t,e)}))}:nb;function h$(t,e){return nf(t,Wy(t),e)}function rb(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var p$=Object.getOwnPropertySymbols,ib=p$?function(t){for(var e=[];t;)rb(e,Wy(t)),t=Fy(t);return e}:nb;function m$(t,e){return nf(t,ib(t),e)}function sb(t,e,n){var r=e(t);return ql(t)?r:rb(r,n(t))}function g$(t){return sb(t,zy,Wy)}function y$(t){return sb(t,By,ib)}var wm=Ss(sr,"DataView"),xm=Ss(sr,"Promise"),Em=Ss(sr,"Set"),Sm=Ss(sr,"WeakMap"),Rw="[object Map]",v$="[object Object]",Pw="[object Promise]",Ow="[object Set]",Aw="[object WeakMap]",Nw="[object DataView]",_$=Es(wm),w$=Es(bl),x$=Es(xm),E$=Es(Em),S$=Es(Sm),Li=ws;(wm&&Li(new wm(new ArrayBuffer(1)))!=Nw||bl&&Li(new bl)!=Rw||xm&&Li(xm.resolve())!=Pw||Em&&Li(new Em)!=Ow||Sm&&Li(new Sm)!=Aw)&&(Li=function(t){var e=ws(t),n=e==v$?t.constructor:void 0,r=n?Es(n):"";if(r)switch(r){case _$:return Nw;case w$:return Rw;case x$:return Pw;case E$:return Ow;case S$:return Aw}return e});const Vy=Li;var C$=Object.prototype,T$=C$.hasOwnProperty;function b$(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&T$.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Dw=sr.Uint8Array;function Hy(t){var e=new t.constructor(t.byteLength);return new Dw(e).set(new Dw(t)),e}function I$(t,e){var n=e?Hy(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var k$=/\w*$/;function R$(t){var e=new t.constructor(t.source,k$.exec(t));return e.lastIndex=t.lastIndex,e}var Mw=_i?_i.prototype:void 0,Lw=Mw?Mw.valueOf:void 0;function P$(t){return Lw?Object(Lw.call(t)):{}}function O$(t,e){var n=e?Hy(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var A$="[object Boolean]",N$="[object Date]",D$="[object Map]",M$="[object Number]",L$="[object RegExp]",j$="[object Set]",F$="[object String]",$$="[object Symbol]",U$="[object ArrayBuffer]",z$="[object DataView]",B$="[object Float32Array]",W$="[object Float64Array]",V$="[object Int8Array]",H$="[object Int16Array]",G$="[object Int32Array]",K$="[object Uint8Array]",Y$="[object Uint8ClampedArray]",q$="[object Uint16Array]",Q$="[object Uint32Array]";function X$(t,e,n){var r=t.constructor;switch(e){case U$:return Hy(t);case A$:case N$:return new r(+t);case z$:return I$(t,n);case B$:case W$:case V$:case H$:case G$:case K$:case Y$:case q$:case Q$:return O$(t,n);case D$:return new r;case M$:case F$:return new r(t);case L$:return R$(t);case j$:return new r;case $$:return P$(t)}}var jw=Object.create,J$=function(){function t(){}return function(e){if(!Yl(e))return{};if(jw)return jw(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function Z$(t){return typeof t.constructor=="function"&&!Uy(t)?J$(Fy(t)):{}}var e5="[object Map]";function t5(t){return xs(t)&&Vy(t)==e5}var Fw=Do&&Do.isMap,n5=Fw?$y(Fw):t5,r5="[object Set]";function i5(t){return xs(t)&&Vy(t)==r5}var $w=Do&&Do.isSet,s5=$w?$y($w):i5,o5=1,a5=2,l5=4,ob="[object Arguments]",u5="[object Array]",c5="[object Boolean]",d5="[object Date]",f5="[object Error]",ab="[object Function]",h5="[object GeneratorFunction]",p5="[object Map]",m5="[object Number]",lb="[object Object]",g5="[object RegExp]",y5="[object Set]",v5="[object String]",_5="[object Symbol]",w5="[object WeakMap]",x5="[object ArrayBuffer]",E5="[object DataView]",S5="[object Float32Array]",C5="[object Float64Array]",T5="[object Int8Array]",b5="[object Int16Array]",I5="[object Int32Array]",k5="[object Uint8Array]",R5="[object Uint8ClampedArray]",P5="[object Uint16Array]",O5="[object Uint32Array]",ze={};ze[ob]=ze[u5]=ze[x5]=ze[E5]=ze[c5]=ze[d5]=ze[S5]=ze[C5]=ze[T5]=ze[b5]=ze[I5]=ze[p5]=ze[m5]=ze[lb]=ze[g5]=ze[y5]=ze[v5]=ze[_5]=ze[k5]=ze[R5]=ze[P5]=ze[O5]=!0;ze[f5]=ze[ab]=ze[w5]=!1;function Ku(t,e,n,r,i,s){var o,a=e&o5,l=e&a5,u=e&l5;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!Yl(t))return t;var c=ql(t);if(c){if(o=b$(t),!a)return tb(t,o)}else{var d=Vy(t),f=d==ab||d==h5;if(qT(t))return u$(t,a);if(d==lb||d==ob||f&&!i){if(o=l||f?{}:Z$(t),!a)return l?m$(t,a$(o,t)):h$(t,n$(o,t))}else{if(!ze[d])return i?t:{};o=X$(t,d,a)}}s||(s=new Yo);var p=s.get(t);if(p)return p;s.set(t,o),s5(t)?t.forEach(function(x){o.add(Ku(x,e,n,x,t,s))}):n5(t)&&t.forEach(function(x,m){o.set(m,Ku(x,e,n,m,t,s))});var g=u?l?y$:g$:l?By:zy,v=c?void 0:g(t);return a6(v||t,function(x,m){v&&(m=x,x=t[m]),GT(o,m,Ku(x,e,n,m,t,s))}),o}var A5=4;function Uw(t){return Ku(t,A5)}function ub(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var N5="[object Symbol]";function Gy(t){return typeof t=="symbol"||xs(t)&&ws(t)==N5}var D5="Expected a function";function Ky(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(D5);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Ky.Cache||Ii),n}Ky.Cache=Ii;var M5=500;function L5(t){var e=Ky(t,function(r){return n.size===M5&&n.clear(),r}),n=e.cache;return e}var j5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,F5=/\\(\\)?/g,$5=L5(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(j5,function(n,r,i,s){e.push(i?s.replace(F5,"$1"):r||n)}),e});const U5=$5;var z5=1/0;function B5(t){if(typeof t=="string"||Gy(t))return t;var e=t+"";return e=="0"&&1/t==-z5?"-0":e}var W5=1/0,zw=_i?_i.prototype:void 0,Bw=zw?zw.toString:void 0;function cb(t){if(typeof t=="string")return t;if(ql(t))return ub(t,cb)+"";if(Gy(t))return Bw?Bw.call(t):"";var e=t+"";return e=="0"&&1/t==-W5?"-0":e}function V5(t){return t==null?"":cb(t)}function db(t){return ql(t)?ub(t,B5):Gy(t)?[t]:tb(U5(V5(t)))}var fb={exports:{}},De={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bt=typeof Symbol=="function"&&Symbol.for,Yy=bt?Symbol.for("react.element"):60103,qy=bt?Symbol.for("react.portal"):60106,rf=bt?Symbol.for("react.fragment"):60107,sf=bt?Symbol.for("react.strict_mode"):60108,of=bt?Symbol.for("react.profiler"):60114,af=bt?Symbol.for("react.provider"):60109,lf=bt?Symbol.for("react.context"):60110,Qy=bt?Symbol.for("react.async_mode"):60111,uf=bt?Symbol.for("react.concurrent_mode"):60111,cf=bt?Symbol.for("react.forward_ref"):60112,df=bt?Symbol.for("react.suspense"):60113,H5=bt?Symbol.for("react.suspense_list"):60120,ff=bt?Symbol.for("react.memo"):60115,hf=bt?Symbol.for("react.lazy"):60116,G5=bt?Symbol.for("react.block"):60121,K5=bt?Symbol.for("react.fundamental"):60117,Y5=bt?Symbol.for("react.responder"):60118,q5=bt?Symbol.for("react.scope"):60119;function gn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Yy:switch(t=t.type,t){case Qy:case uf:case rf:case of:case sf:case df:return t;default:switch(t=t&&t.$$typeof,t){case lf:case cf:case hf:case ff:case af:return t;default:return e}}case qy:return e}}}function hb(t){return gn(t)===uf}De.AsyncMode=Qy;De.ConcurrentMode=uf;De.ContextConsumer=lf;De.ContextProvider=af;De.Element=Yy;De.ForwardRef=cf;De.Fragment=rf;De.Lazy=hf;De.Memo=ff;De.Portal=qy;De.Profiler=of;De.StrictMode=sf;De.Suspense=df;De.isAsyncMode=function(t){return hb(t)||gn(t)===Qy};De.isConcurrentMode=hb;De.isContextConsumer=function(t){return gn(t)===lf};De.isContextProvider=function(t){return gn(t)===af};De.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yy};De.isForwardRef=function(t){return gn(t)===cf};De.isFragment=function(t){return gn(t)===rf};De.isLazy=function(t){return gn(t)===hf};De.isMemo=function(t){return gn(t)===ff};De.isPortal=function(t){return gn(t)===qy};De.isProfiler=function(t){return gn(t)===of};De.isStrictMode=function(t){return gn(t)===sf};De.isSuspense=function(t){return gn(t)===df};De.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===rf||t===uf||t===of||t===sf||t===df||t===H5||typeof t=="object"&&t!==null&&(t.$$typeof===hf||t.$$typeof===ff||t.$$typeof===af||t.$$typeof===lf||t.$$typeof===cf||t.$$typeof===K5||t.$$typeof===Y5||t.$$typeof===q5||t.$$typeof===G5)};De.typeOf=gn;fb.exports=De;var Q5=fb.exports,pb=Q5,X5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},J5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mb={};mb[pb.ForwardRef]=X5;mb[pb.Memo]=J5;function vt(){return vt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vt.apply(this,arguments)}function gb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var pf=C.createContext(void 0);pf.displayName="FormikContext";pf.Provider;pf.Consumer;function Z5(){var t=C.useContext(pf);return t}var Rn=function(e){return typeof e=="function"},mf=function(e){return e!==null&&typeof e=="object"},eU=function(e){return String(Math.floor(Number(e)))===e},Sh=function(e){return Object.prototype.toString.call(e)==="[object String]"},Ch=function(e){return mf(e)&&Rn(e.then)};function nn(t,e,n,r){r===void 0&&(r=0);for(var i=db(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function Qi(t,e,n){for(var r=Uw(t),i=r,s=0,o=db(e);s<o.length-1;s++){var a=o[s],l=nn(t,o.slice(0,s+1));if(l&&(mf(l)||Array.isArray(l)))i=i[a]=Uw(l);else{var u=o[s+1];i=i[a]=eU(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function yb(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];mf(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},yb(a,e,n,r[o])):r[o]=e}return r}function tU(t,e){switch(e.type){case"SET_VALUES":return vt({},t,{values:e.payload});case"SET_TOUCHED":return vt({},t,{touched:e.payload});case"SET_ERRORS":return Mi(t.errors,e.payload)?t:vt({},t,{errors:e.payload});case"SET_STATUS":return vt({},t,{status:e.payload});case"SET_ISSUBMITTING":return vt({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return vt({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return vt({},t,{values:Qi(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return vt({},t,{touched:Qi(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return vt({},t,{errors:Qi(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return vt({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return vt({},t,{touched:yb(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return vt({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return vt({},t,{isSubmitting:!1});default:return t}}var Ri={},Su={};function vb(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,c=t.onSubmit,d=gb(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=vt({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},d),p=C.useRef(f.initialValues),g=C.useRef(f.initialErrors||Ri),v=C.useRef(f.initialTouched||Su),x=C.useRef(f.initialStatus),m=C.useRef(!1),h=C.useRef({});C.useEffect(function(){return m.current=!0,function(){m.current=!1}},[]);var y=C.useState(0),E=y[1],T=C.useRef({values:f.initialValues,errors:f.initialErrors||Ri,touched:f.initialTouched||Su,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),_=T.current,S=C.useCallback(function(I){var U=T.current;T.current=tU(U,I),U!==T.current&&E(function(V){return V+1})},[]),P=C.useCallback(function(I,U){return new Promise(function(V,Q){var ce=f.validate(I,U);ce==null?V(Ri):Ch(ce)?ce.then(function(be){V(be||Ri)},function(be){Q(be)}):V(ce)})},[f.validate]),k=C.useCallback(function(I,U){var V=f.validationSchema,Q=Rn(V)?V(U):V,ce=U&&Q.validateAt?Q.validateAt(U,I):rU(I,Q);return new Promise(function(be,lt){ce.then(function(){be(Ri)},function(mt){mt.name==="ValidationError"?be(nU(mt)):lt(mt)})})},[f.validationSchema]),A=C.useCallback(function(I,U){return new Promise(function(V){return V(h.current[I].validate(U))})},[]),D=C.useCallback(function(I){var U=Object.keys(h.current).filter(function(Q){return Rn(h.current[Q].validate)}),V=U.length>0?U.map(function(Q){return A(Q,nn(I,Q))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(V).then(function(Q){return Q.reduce(function(ce,be,lt){return be==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||be&&(ce=Qi(ce,U[lt],be)),ce},{})})},[A]),G=C.useCallback(function(I){return Promise.all([D(I),f.validationSchema?k(I):{},f.validate?P(I):{}]).then(function(U){var V=U[0],Q=U[1],ce=U[2],be=vm.all([V,Q,ce],{arrayMerge:iU});return be})},[f.validate,f.validationSchema,D,P,k]),j=vn(function(I){return I===void 0&&(I=_.values),S({type:"SET_ISVALIDATING",payload:!0}),G(I).then(function(U){return m.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:U})),U})});C.useEffect(function(){o&&m.current===!0&&Mi(p.current,f.initialValues)&&j(p.current)},[o,j]);var Z=C.useCallback(function(I){var U=I&&I.values?I.values:p.current,V=I&&I.errors?I.errors:g.current?g.current:f.initialErrors||{},Q=I&&I.touched?I.touched:v.current?v.current:f.initialTouched||{},ce=I&&I.status?I.status:x.current?x.current:f.initialStatus;p.current=U,g.current=V,v.current=Q,x.current=ce;var be=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!I&&!!I.isSubmitting,errors:V,touched:Q,status:ce,values:U,isValidating:!!I&&!!I.isValidating,submitCount:I&&I.submitCount&&typeof I.submitCount=="number"?I.submitCount:0}})};if(f.onReset){var lt=f.onReset(_.values,ae);Ch(lt)?lt.then(be):be()}else be()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);C.useEffect(function(){m.current===!0&&!Mi(p.current,f.initialValues)&&u&&(p.current=f.initialValues,Z(),o&&j(p.current))},[u,f.initialValues,Z,o,j]),C.useEffect(function(){u&&m.current===!0&&!Mi(g.current,f.initialErrors)&&(g.current=f.initialErrors||Ri,S({type:"SET_ERRORS",payload:f.initialErrors||Ri}))},[u,f.initialErrors]),C.useEffect(function(){u&&m.current===!0&&!Mi(v.current,f.initialTouched)&&(v.current=f.initialTouched||Su,S({type:"SET_TOUCHED",payload:f.initialTouched||Su}))},[u,f.initialTouched]),C.useEffect(function(){u&&m.current===!0&&!Mi(x.current,f.initialStatus)&&(x.current=f.initialStatus,S({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var Ie=vn(function(I){if(h.current[I]&&Rn(h.current[I].validate)){var U=nn(_.values,I),V=h.current[I].validate(U);return Ch(V)?(S({type:"SET_ISVALIDATING",payload:!0}),V.then(function(Q){return Q}).then(function(Q){S({type:"SET_FIELD_ERROR",payload:{field:I,value:Q}}),S({type:"SET_ISVALIDATING",payload:!1})})):(S({type:"SET_FIELD_ERROR",payload:{field:I,value:V}}),Promise.resolve(V))}else if(f.validationSchema)return S({type:"SET_ISVALIDATING",payload:!0}),k(_.values,I).then(function(Q){return Q}).then(function(Q){S({type:"SET_FIELD_ERROR",payload:{field:I,value:nn(Q,I)}}),S({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Oe=C.useCallback(function(I,U){var V=U.validate;h.current[I]={validate:V}},[]),de=C.useCallback(function(I){delete h.current[I]},[]),z=vn(function(I,U){S({type:"SET_TOUCHED",payload:I});var V=U===void 0?i:U;return V?j(_.values):Promise.resolve()}),K=C.useCallback(function(I){S({type:"SET_ERRORS",payload:I})},[]),q=vn(function(I,U){var V=Rn(I)?I(_.values):I;S({type:"SET_VALUES",payload:V});var Q=U===void 0?n:U;return Q?j(V):Promise.resolve()}),ne=C.useCallback(function(I,U){S({type:"SET_FIELD_ERROR",payload:{field:I,value:U}})},[]),se=vn(function(I,U,V){S({type:"SET_FIELD_VALUE",payload:{field:I,value:U}});var Q=V===void 0?n:V;return Q?j(Qi(_.values,I,U)):Promise.resolve()}),at=C.useCallback(function(I,U){var V=U,Q=I,ce;if(!Sh(I)){I.persist&&I.persist();var be=I.target?I.target:I.currentTarget,lt=be.type,mt=be.name,bs=be.id,Is=be.value,Ql=be.checked,iv=be.outerHTML,qo=be.options,ks=be.multiple;V=U||mt||bs,Q=/number|range/.test(lt)?(ce=parseFloat(Is),isNaN(ce)?"":ce):/checkbox/.test(lt)?oU(nn(_.values,V),Ql,Is):qo&&ks?sU(qo):Is}V&&se(V,Q)},[se,_.values]),Re=vn(function(I){if(Sh(I))return function(U){return at(U,I)};at(I)}),Le=vn(function(I,U,V){U===void 0&&(U=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:I,value:U}});var Q=V===void 0?i:V;return Q?j(_.values):Promise.resolve()}),Se=C.useCallback(function(I,U){I.persist&&I.persist();var V=I.target,Q=V.name,ce=V.id,be=V.outerHTML,lt=U||Q||ce;Le(lt,!0)},[Le]),$e=vn(function(I){if(Sh(I))return function(U){return Se(U,I)};Se(I)}),Ht=C.useCallback(function(I){Rn(I)?S({type:"SET_FORMIK_STATE",payload:I}):S({type:"SET_FORMIK_STATE",payload:function(){return I}})},[]),It=C.useCallback(function(I){S({type:"SET_STATUS",payload:I})},[]),M=C.useCallback(function(I){S({type:"SET_ISSUBMITTING",payload:I})},[]),$=vn(function(){return S({type:"SUBMIT_ATTEMPT"}),j().then(function(I){var U=I instanceof Error,V=!U&&Object.keys(I).length===0;if(V){var Q;try{if(Q=oe(),Q===void 0)return}catch(ce){throw ce}return Promise.resolve(Q).then(function(ce){return m.current&&S({type:"SUBMIT_SUCCESS"}),ce}).catch(function(ce){if(m.current)throw S({type:"SUBMIT_FAILURE"}),ce})}else if(m.current&&(S({type:"SUBMIT_FAILURE"}),U))throw I})}),J=vn(function(I){I&&I.preventDefault&&Rn(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&Rn(I.stopPropagation)&&I.stopPropagation(),$().catch(function(U){console.warn("Warning: An unhandled error was caught from submitForm()",U)})}),ae={resetForm:Z,validateForm:j,validateField:Ie,setErrors:K,setFieldError:ne,setFieldTouched:Le,setFieldValue:se,setStatus:It,setSubmitting:M,setTouched:z,setValues:q,setFormikState:Ht,submitForm:$},oe=vn(function(){return c(_.values,ae)}),le=vn(function(I){I&&I.preventDefault&&Rn(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&Rn(I.stopPropagation)&&I.stopPropagation(),Z()}),ue=C.useCallback(function(I){return{value:nn(_.values,I),error:nn(_.errors,I),touched:!!nn(_.touched,I),initialValue:nn(p.current,I),initialTouched:!!nn(v.current,I),initialError:nn(g.current,I)}},[_.errors,_.touched,_.values]),fe=C.useCallback(function(I){return{setValue:function(V,Q){return se(I,V,Q)},setTouched:function(V,Q){return Le(I,V,Q)},setError:function(V){return ne(I,V)}}},[se,Le,ne]),we=C.useCallback(function(I){var U=mf(I),V=U?I.name:I,Q=nn(_.values,V),ce={name:V,value:Q,onChange:Re,onBlur:$e};if(U){var be=I.type,lt=I.value,mt=I.as,bs=I.multiple;be==="checkbox"?lt===void 0?ce.checked=!!Q:(ce.checked=!!(Array.isArray(Q)&&~Q.indexOf(lt)),ce.value=lt):be==="radio"?(ce.checked=Q===lt,ce.value=lt):mt==="select"&&bs&&(ce.value=ce.value||[],ce.multiple=!0)}return ce},[$e,Re,_.values]),Ce=C.useMemo(function(){return!Mi(p.current,_.values)},[p.current,_.values]),xe=C.useMemo(function(){return typeof a<"u"?Ce?_.errors&&Object.keys(_.errors).length===0:a!==!1&&Rn(a)?a(f):a:_.errors&&Object.keys(_.errors).length===0},[a,Ce,_.errors,f]),W=vt({},_,{initialValues:p.current,initialErrors:g.current,initialTouched:v.current,initialStatus:x.current,handleBlur:$e,handleChange:Re,handleReset:le,handleSubmit:J,resetForm:Z,setErrors:K,setFormikState:Ht,setFieldTouched:Le,setFieldValue:se,setFieldError:ne,setStatus:It,setSubmitting:M,setTouched:z,setValues:q,submitForm:$,validateForm:j,validateField:Ie,isValid:xe,dirty:Ce,unregisterField:de,registerField:Oe,getFieldProps:we,getFieldMeta:ue,getFieldHelpers:fe,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return W}function nU(t){var e={};if(t.inner){if(t.inner.length===0)return Qi(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;nn(e,o.path)||(e=Qi(e,o.path,o.message))}}return e}function rU(t,e,n,r){n===void 0&&(n=!1);var i=Cm(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Cm(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||gw(i)?Cm(i):i!==""?i:void 0}):gw(t[r])?e[r]=Cm(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function iU(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?vm(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=vm(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function sU(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function oU(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var aU=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?C.useLayoutEffect:C.useEffect;function vn(t){var e=C.useRef(t);return aU(function(){e.current=t}),C.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}var lU=C.forwardRef(function(t,e){var n=t.action,r=gb(t,["action"]),i=n??"#",s=Z5(),o=s.handleReset,a=s.handleSubmit;return C.createElement("form",vt({onSubmit:a,ref:e,onReset:o,action:i},r))});lU.displayName="Form";function Cs(t){this._maxSize=t,this.clear()}Cs.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Cs.prototype.get=function(t){return this._values[t]};Cs.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var uU=/[^.^\]^[]+|(?=\[\]|\.\.)/g,_b=/^\d+$/,cU=/^\d/,dU=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,fU=/^\s*(['"]?)(.*?)(\1)\s*$/,Xy=512,Ww=new Cs(Xy),Vw=new Cs(Xy),Hw=new Cs(Xy),Xi={Cache:Cs,split:Tm,normalizePath:Th,setter:function(t){var e=Th(t);return Vw.get(t)||Vw.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=Th(t);return Hw.get(t)||Hw.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(Jy(n)||_b.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){hU(Array.isArray(t)?t:Tm(t),e,n)}};function Th(t){return Ww.get(t)||Ww.set(t,Tm(t).map(function(e){return e.replace(fU,"$2")}))}function Tm(t){return t.match(uU)||[""]}function hU(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(gU(i)&&(i='"'+i+'"'),a=Jy(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function Jy(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function pU(t){return t.match(cU)&&!t.match(_b)}function mU(t){return dU.test(t)}function gU(t){return!Jy(t)&&(pU(t)||mU(t))}const yU=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,gf=t=>t.match(yU)||[],yf=t=>t[0].toUpperCase()+t.slice(1),Zy=(t,e)=>gf(t).join(e).toLowerCase(),wb=t=>gf(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),vU=t=>yf(wb(t)),_U=t=>Zy(t,"_"),wU=t=>Zy(t,"-"),xU=t=>yf(Zy(t," ")),EU=t=>gf(t).map(yf).join(" ");var bh={words:gf,upperFirst:yf,camelCase:wb,pascalCase:vU,snakeCase:_U,kebabCase:wU,sentenceCase:xU,titleCase:EU},ev={exports:{}};ev.exports=function(t){return xb(SU(t),t)};ev.exports.array=xb;function xb(t,e){var n=t.length,r=new Array(n),i={},s=n,o=CU(e),a=TU(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var p=o.get(u)||new Set;if(p=Array.from(p),c=p.length){d.add(u);do{var g=p[--c];l(g,a.get(g),d)}while(c);d.delete(u)}r[--n]=u}}}function SU(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function CU(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function TU(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var bU=ev.exports;const IU=od(bU),kU=Object.prototype.toString,RU=Error.prototype.toString,PU=RegExp.prototype.toString,OU=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",AU=/^Symbol\((.*)\)(.*)$/;function NU(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function Gw(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return NU(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return OU.call(t).replace(AU,"Symbol($1)");const r=kU.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+RU.call(t)+"]":r==="RegExp"?PU.call(t):null}function ui(t,e){let n=Gw(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=Gw(this[r],e);return s!==null?s:i},2)}function Eb(t){return t==null?[]:[].concat(t)}let Sb,DU=/\$\{\s*(\w+)\s*\}/g;Sb=Symbol.toStringTag;class Kt extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(DU,(i,s)=>ui(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[Sb]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Eb(e).forEach(o=>{if(Kt.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,Kt)}}let qn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${ui(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${ui(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${ui(n,!0)}\``+i}},Pn={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},jr={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},bm={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},MU={isValue:"${path} field must be ${value}"},Im={noUnknown:"${path} field has unspecified keys: ${unknown}"},LU={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},jU={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${ui(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${ui(n,!0)}\``}return Kt.formatError(qn.notType,t)}};Object.assign(Object.create(null),{mixed:qn,string:Pn,number:jr,date:bm,object:Im,array:LU,boolean:MU,tuple:jU});const tv=t=>t&&t.__isYupSchema__;class ed{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new ed(e,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!tv(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Cu={context:"$",value:"."};class Ts{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Cu.context,this.isValue=this.key[0]===Cu.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Cu.context:this.isValue?Cu.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Xi.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Ts.prototype.__isYupRef=!0;const gr=t=>t==null;function Ms(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:d,message:f,skipAbsent:p}=t;let{parent:g,context:v,abortEarly:x=o.spec.abortEarly,disableStackTrace:m=o.spec.disableStackTrace}=i;function h(D){return Ts.isRef(D)?D.getValue(n,g,v):D}function y(D={}){var G;const j=Object.assign({value:n,originalValue:s,label:o.spec.label,path:D.path||r,spec:o.spec},d,D.params);for(const Ie of Object.keys(j))j[Ie]=h(j[Ie]);const Z=new Kt(Kt.formatError(D.message||f,j),n,j.path,D.type||u,(G=D.disableStackTrace)!=null?G:m);return Z.params=j,Z}const E=x?a:l;let T={path:r,parent:g,type:u,from:i.from,createError:y,resolve:h,options:i,originalValue:s,schema:o};const _=D=>{Kt.isError(D)?E(D):D?l(null):E(y())},S=D=>{Kt.isError(D)?E(D):a(D)};if(p&&gr(n))return _(!0);let k;try{var A;if(k=c.call(T,n,T),typeof((A=k)==null?void 0:A.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${T.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(k).then(_,S)}}catch(D){S(D);return}_(k)}return e.OPTIONS=t,e}function FU(t,e,n,r=n){let i,s,o;return e?(Xi.forEach(e,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let d=t.type==="tuple",f=u?parseInt(c,10):0;if(t.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=d?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[c])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[c],t=t.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class td extends Set{describe(){const e=[];for(const n of this.values())e.push(Ts.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new td(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function eo(t,e=new Map){if(tv(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=eo(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,eo(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(eo(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=eo(i,e)}else throw Error(`Unable to clone ${t}`);return n}class Hn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new td,this._blacklist=new td,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(qn.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=eo(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&gr(s))return s;let o=ui(e),a=ui(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,c=v=>{i||(i=!0,n(v,o))},d=v=>{i||(i=!0,r(v,o))},f=s.length,p=[];if(!f)return d([]);let g={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const x=s[v];x(g,c,function(h){h&&(Array.isArray(h)?p.push(...h):p.push(h)),--f<=0&&d(p)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(d,f,p)=>this.resolve(c)._validate(u,c,f,p)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{Kt.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new Kt(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw Kt.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new Kt(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(Kt.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(Kt.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):eo(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=Ms({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=Ms({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=qn.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=qn.notNull){return this.nullability(!1,e)}required(e=qn.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=qn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Ms(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=Eb(e).map(s=>new Ts(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new ed(i,n):ed.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=Ms({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=qn.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Ms({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=qn.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Ms({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(d=>d.name===l.name)===u)}}}Hn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])Hn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=FU(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])Hn.prototype[t]=Hn.prototype.oneOf;for(const t of["not","nope"])Hn.prototype[t]=Hn.prototype.notOneOf;let $U=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,UU=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,zU=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,BU=t=>gr(t)||t===t.trim(),WU={}.toString();function cr(){return new Cb}class Cb extends Hn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===WU?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||qn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=Pn.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=Pn.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=Pn.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Pn.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=Pn.email){return this.matches($U,{name:"email",message:e,excludeEmptyString:!0})}url(e=Pn.url){return this.matches(UU,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=Pn.uuid){return this.matches(zU,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=Pn.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:BU})}lowercase(e=Pn.lowercase){return this.transform(n=>gr(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>gr(n)||n===n.toLowerCase()})}uppercase(e=Pn.uppercase){return this.transform(n=>gr(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>gr(n)||n===n.toUpperCase()})}}cr.prototype=Cb.prototype;let VU=t=>t!=+t;function Tb(){return new bb}class bb extends Hn{constructor(){super({type:"number",check(e){return e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&!VU(e)}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce)return e;let i=e;if(typeof i=="string"){if(i=i.replace(/\s/g,""),i==="")return NaN;i=+i}return r.isType(i)||i===null?i:parseFloat(i)})})}min(e,n=jr.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r>=this.resolve(e)}})}max(e,n=jr.max){return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(r){return r<=this.resolve(e)}})}lessThan(e,n=jr.lessThan){return this.test({message:n,name:"max",exclusive:!0,params:{less:e},skipAbsent:!0,test(r){return r<this.resolve(e)}})}moreThan(e,n=jr.moreThan){return this.test({message:n,name:"min",exclusive:!0,params:{more:e},skipAbsent:!0,test(r){return r>this.resolve(e)}})}positive(e=jr.positive){return this.moreThan(0,e)}negative(e=jr.negative){return this.lessThan(0,e)}integer(e=jr.integer){return this.test({name:"integer",message:e,skipAbsent:!0,test:n=>Number.isInteger(n)})}truncate(){return this.transform(e=>gr(e)?e:e|0)}round(e){var n;let r=["ceil","floor","round","trunc"];if(e=((n=e)==null?void 0:n.toLowerCase())||"round",e==="trunc")return this.truncate();if(r.indexOf(e.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(i=>gr(i)?i:Math[e](i))}}Tb.prototype=bb.prototype;const HU=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function or(t,e=0){return Number(t)||e}function GU(t){const e=HU.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:or(e[1]),month:or(e[2],1)-1,day:or(e[3],1),hour:or(e[4]),minute:or(e[5]),second:or(e[6]),millisecond:e[7]?or(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:or(e[10]),minuteOffset:or(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let KU=new Date(""),YU=t=>Object.prototype.toString.call(t)==="[object Date]";class vf extends Hn{constructor(){super({type:"date",check(e){return YU(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=GU(e),isNaN(e)?vf.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(Ts.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=bm.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=bm.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}vf.INVALID_DATE=KU;vf.prototype;function qU(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=Xi.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),Ts.isRef(a)&&a.isSibling?s(a.path,o):tv(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return IU.array(Array.from(r),n).reverse()}function Kw(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function Ib(t){return(e,n)=>Kw(t,e)-Kw(t,n)}const QU=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function Yu(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=Yu(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Yu(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Yu)}):"optional"in t?t.optional():t}const XU=(t,e)=>{const n=[...Xi.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=Xi.getter(Xi.join(n),!0)(t);return!!(i&&r in i)};let Yw=t=>Object.prototype.toString.call(t)==="[object Object]";function JU(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const ZU=Ib([]);function nv(t){return new kb(t)}class kb extends Hn{constructor(e){super({type:"object",check(n){return Yw(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=ZU,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let f=s[d],p=d in i;if(f){let g,v=i[d];u.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:v,context:n.context,parent:l});let x=f instanceof Hn?f.spec:void 0,m=x==null?void 0:x.strict;if(x!=null&&x.strip){c=c||d in i;continue}g=!n.__validating||!m?f.cast(i[d],u):i[d],g!==void 0&&(l[d]=g)}else p&&!o&&(l[d]=i[d]);(p!==d in l||l[d]!==i[d])&&(c=!0)}return c?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!Yw(u)){i(l,u);return}o=o||u;let c=[];for(let d of this._nodes){let f=this.fields[d];!f||Ts.isRef(f)||c.push(f.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=qU(e,n),r._sortErrors=Ib(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return Yu(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=Xi.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return XU(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(QU)}noUnknown(e=!0,n=Im.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=JU(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=Im.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(bh.camelCase)}snakeCase(){return this.transformKeys(bh.snakeCase)}constantCase(){return this.transformKeys(e=>bh.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}nv.prototype=kb.prototype;const e8=nv().shape({email:cr().email("Invalid email address").test("email-format","Email should contain '@' and a valid domain",t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)).required("Email is required"),password:cr().required("Password is required").min(6)}),t8=N.div`
  position: relative;
`,Rb=N.input`
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
`,n8=N.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 16px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,nd=N.div`
  margin-top: 4px;
  color: red;
`,r8=t=>C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none",...t},C.createElement("path",{d:"M0.666504 7.99996C0.666504 7.99996 3.33317 2.66663 7.99984 2.66663C12.6665 2.66663 15.3332 7.99996 15.3332 7.99996C15.3332 7.99996 12.6665 13.3333 7.99984 13.3333C3.33317 13.3333 0.666504 7.99996 0.666504 7.99996Z",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),C.createElement("path",{d:"M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),i8=t=>C.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none",...t},C.createElement("g",{clipPath:"url(#clip0_283_2250)"},C.createElement("path",{d:"M11.9601 11.96C10.8205 12.8286 9.43282 13.3099 8.00008 13.3333C3.33342 13.3333 0.666748 7.99998 0.666748 7.99998C1.49601 6.45457 2.64617 5.10438 4.04008 4.03998M6.60008 2.82664C7.05897 2.71923 7.52879 2.66554 8.00008 2.66664C12.6667 2.66664 15.3334 7.99998 15.3334 7.99998C14.9287 8.75705 14.4461 9.4698 13.8934 10.1266M9.41342 9.41331C9.23032 9.60981 9.00952 9.76741 8.76418 9.87672C8.51885 9.98604 8.25402 10.0448 7.98548 10.0496C7.71693 10.0543 7.45019 10.0049 7.20116 9.9043C6.95212 9.80371 6.7259 9.65399 6.53598 9.46408C6.34606 9.27416 6.19634 9.04794 6.09575 8.7989C5.99517 8.54987 5.94577 8.28312 5.9505 8.01458C5.95524 7.74604 6.01402 7.48121 6.12333 7.23587C6.23264 6.99054 6.39025 6.76974 6.58675 6.58664",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),C.createElement("path",{d:"M0.666748 0.666626L15.3334 15.3333",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),C.createElement("defs",null,C.createElement("clipPath",{id:"clip0_283_2250"},C.createElement("rect",{width:16,height:16,fill:"#11101c"})))),Ih=({name:t,type:e,handleChange:n,value:r,formik:i})=>{const[s,o]=C.useState(!1),a=t.charAt(0).toUpperCase()+t.slice(1),l=u=>{u.preventDefault(),o(c=>!c)};return w.jsxs(t8,{children:[w.jsx(Rb,{id:t,name:t,type:t==="password"?s?"text":"password":e,onChange:n,value:r,placeholder:a}),t==="password"&&w.jsx(n8,{onClick:l,children:s?w.jsx(r8,{}):w.jsx(i8,{})}),i.touched[t]&&i.errors[t]&&w.jsx(nd,{children:i.errors[t]}),i.touched[t]&&t==="name"&&r.length<2&&w.jsx(nd,{children:"Required and at least 2 symbols"})]})},s8=vA`
  to {
    transform: rotate(360deg);
  }
`,o8=N.div`
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
`,a8=N.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${t=>t.theme.colors.primaryGreenColor};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${s8} 1s linear infinite;
`,_f=()=>w.jsx(o8,{children:w.jsx(a8,{})}),Pb=t=>C.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{d:"M24 8L8 24",stroke:"#11101C",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),C.createElement("path",{d:"M8 8L24 24",stroke:"#11101C",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"})),l8=N.form`
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
`,u8=N.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #11101c;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`,c8=N.p`
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
  margin-bottom: 40px;
`,d8=N.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
`,f8=N.button`
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
`,Ob=N(Pb)`
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
`,h8=N.p`
  font-size: 20px;
  margin-top: 10px;
  color: red;
  text-align: center;
`,rv=({title:t,handleClick:e,text:n,isRegistration:r,onClose:i,errorMessage:s,loading:o})=>{const a=vb({initialValues:{email:"",password:"",name:""},onSubmit:()=>e(a.values.email,a.values.password,a.values.name),validationSchema:e8});return o?w.jsx(_f,{}):w.jsxs(l8,{onSubmit:a.handleSubmit,children:[w.jsx(Ob,{onClick:i}),w.jsx(u8,{children:t}),w.jsx(c8,{children:n}),w.jsxs(d8,{children:[r&&w.jsx(Ih,{name:"name",type:"text",handleChange:a.handleChange,value:a.values.name,formik:a}),w.jsx(Ih,{name:"email",type:"email",handleChange:a.handleChange,value:a.values.email,formik:a}),w.jsx(Ih,{name:"password",type:"password",handleChange:a.handleChange,value:a.values.password,formik:a})]}),w.jsx(f8,{type:"submit",children:r?"Sign Up":"Log In"}),s&&w.jsx(h8,{children:s})]})},kh=({onClose:t})=>{const e=$o(),[n,r]=C.useState(null),[i,s]=C.useState(!1),o=(a,l)=>{s(!0),sC(No,a,l).then(({user:u})=>{const c=u.displayName||"";e(pi({name:c,email:u.email,id:u.uid,token:u.accessToken})),localStorage.setItem("userToken",u.accessToken),t()}).catch(u=>{console.error("Error:",u.code),u.code==="auth/user-not-found"||u.code==="auth/invalid-credential"?r("The email or password you entered is incorrect. Please check your credentials or sign up."):r(u.message)}).finally(()=>{s(!1)})};return w.jsx(w.Fragment,{children:w.jsx(rv,{onClose:t,title:"Log In",handleClick:o,text:"Welcome back! Please enter your credentials to access your account and continue your babysitter search.",errorMessage:n,loading:i})})},p8=N.div`
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
`,m8=N.div`
  background-color: #fff;
  border-radius: 10px;
  margin-inline: 20px;
`,za=({onClose:t,children:e})=>(C.useEffect(()=>{const n=r=>{r.key==="Escape"&&t()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[t]),w.jsx(p8,{onClick:t,children:w.jsx(m8,{onClick:n=>n.stopPropagation(),children:e})})),Rh=({onClose:t})=>{const e=$o(),[n,r]=C.useState(null),[i,s]=C.useState(!1),o=(a,l,u)=>{s(!0),eL(No,a,l).then(({user:c})=>{nL(No.currentUser,{displayName:u}).catch(d=>{console.error("Error updating name:",d)}),e(pi({name:u,email:c.email,id:c.uid,token:c.accessToken})),localStorage.setItem("userToken",c.accessToken),t()}).catch(c=>{console.error("Error:",c.code),c.code==="auth/email-already-in-use"?r("A user with this email already exists. Please enter a new email or log in to your account."):r(c.message)}).finally(()=>{s(!1)})};return w.jsx(rv,{onClose:t,title:"Registration",handleClick:o,text:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.",isRegistration:!0,errorMessage:n,loading:i})},Ph=t=>C.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{d:"M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z",fill:"#103931"})),g8=N.div`
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
`,Oh=N.div`
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
`,Tu=N.div`
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
`,Ah=N.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${t=>t.theme.colors.headerText};
  cursor: pointer;
`,Nh=N.div`
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
`,Dh=N.div`
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
`,y8=N.div`
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
`,v8=N.div`
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
`;var Ab={exports:{}};(function(t,e){(function(r,i){t.exports=i(C)})(Kb,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(a,l)=>{l.match=g,l.parse=v;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,c=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,d=/^(?:(min|max)-)?(.+)/,f=/(em|rem|px|cm|mm|in|pt|pc)?$/,p=/(dpi|dpcm|dppx)?$/;function g(y,E){return v(y).some(function(T){var _=T.inverse,S=T.type==="all"||E.type===T.type;if(S&&_||!(S||_))return!1;var P=T.expressions.every(function(k){var A=k.feature,D=k.modifier,G=k.value,j=E[A];if(!j)return!1;switch(A){case"orientation":case"scan":return j.toLowerCase()===G.toLowerCase();case"width":case"height":case"device-width":case"device-height":G=h(G),j=h(j);break;case"resolution":G=m(G),j=m(j);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":G=x(G),j=x(j);break;case"grid":case"color":case"color-index":case"monochrome":G=parseInt(G,10)||1,j=parseInt(j,10)||0;break}switch(D){case"min":return j>=G;case"max":return j<=G;default:return j===G}});return P&&!_||!P&&_})}function v(y){return y.split(",").map(function(E){E=E.trim();var T=E.match(u),_=T[1],S=T[2],P=T[3]||"",k={};return k.inverse=!!_&&_.toLowerCase()==="not",k.type=S?S.toLowerCase():"all",P=P.match(/\([^\)]+\)/g)||[],k.expressions=P.map(function(A){var D=A.match(c),G=D[1].toLowerCase().match(d);return{modifier:G[1],feature:G[2],value:D[2]}}),k})}function x(y){var E=Number(y),T;return E||(T=y.match(/^(\d+)\s*\/\s*(\d+)$/),E=T[1]/T[2]),E}function m(y){var E=parseFloat(y),T=String(y).match(p)[1];switch(T){case"dpcm":return E/2.54;case"dppx":return E*96;default:return E}}function h(y){var E=parseFloat(y),T=String(y).match(f)[1];switch(T){case"em":return E*16;case"rem":return E*16;case"cm":return E*96/2.54;case"mm":return E*96/2.54/10;case"in":return E*96;case"pt":return E*72;case"pc":return E*72/12;default:return E}}},"./node_modules/hyphenate-style-name/index.js":(a,l,u)=>{u.r(l),u.d(l,{default:()=>v});var c=/[A-Z]/g,d=/^ms-/,f={};function p(x){return"-"+x.toLowerCase()}function g(x){if(f.hasOwnProperty(x))return f[x];var m=x.replace(c,p);return f[x]=d.test(m)?"-"+m:m}const v=g},"./node_modules/matchmediaquery/index.js":(a,l,u)=>{var c=u("./node_modules/css-mediaquery/index.js").match,d=typeof window<"u"?window.matchMedia:null;function f(g,v,x){var m=this;if(d&&!x){var h=d.call(window,g);this.matches=h.matches,this.media=h.media,h.addListener(T)}else this.matches=c(g,v),this.media=g;this.addListener=y,this.removeListener=E,this.dispose=_;function y(S){h&&h.addListener(S)}function E(S){h&&h.removeListener(S)}function T(S){m.matches=S.matches,m.media=S.media}function _(){h&&h.removeListener(T)}}function p(g,v,x){return new f(g,v,x)}a.exports=p},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(p){if(p==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(p)}function f(){try{if(!Object.assign)return!1;var p=new String("abc");if(p[5]="de",Object.getOwnPropertyNames(p)[0]==="5")return!1;for(var g={},v=0;v<10;v++)g["_"+String.fromCharCode(v)]=v;var x=Object.getOwnPropertyNames(g).map(function(h){return g[h]});if(x.join("")!=="0123456789")return!1;var m={};return"abcdefghijklmnopqrst".split("").forEach(function(h){m[h]=h}),Object.keys(Object.assign({},m)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=f()?Object.assign:function(p,g){for(var v,x=d(p),m,h=1;h<arguments.length;h++){v=Object(arguments[h]);for(var y in v)u.call(v,y)&&(x[y]=v[y]);if(l){m=l(v);for(var E=0;E<m.length;E++)c.call(v,m[E])&&(x[m[E]]=v[m[E]])}}return x}},"./node_modules/prop-types/checkPropTypes.js":(a,l,u)=>{var c=function(){};{var d=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),f={},p=u("./node_modules/prop-types/lib/has.js");c=function(v){var x="Warning: "+v;typeof console<"u"&&console.error(x);try{throw new Error(x)}catch{}}}function g(v,x,m,h,y){for(var E in v)if(p(v,E)){var T;try{if(typeof v[E]!="function"){var _=Error((h||"React class")+": "+m+" type `"+E+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof v[E]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}T=v[E](x,E,h,m,null,d)}catch(P){T=P}if(T&&!(T instanceof Error)&&c((h||"React class")+": type specification of "+m+" `"+E+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof T+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),T instanceof Error&&!(T.message in f)){f[T.message]=!0;var S=y?y():"";c("Failed "+m+" type: "+T.message+(S??""))}}}g.resetWarningCache=function(){f={}},a.exports=g},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,l,u)=>{var c=u("./node_modules/react-is/index.js"),d=u("./node_modules/object-assign/index.js"),f=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),p=u("./node_modules/prop-types/lib/has.js"),g=u("./node_modules/prop-types/checkPropTypes.js"),v=function(){};v=function(m){var h="Warning: "+m;typeof console<"u"&&console.error(h);try{throw new Error(h)}catch{}};function x(){return null}a.exports=function(m,h){var y=typeof Symbol=="function"&&Symbol.iterator,E="@@iterator";function T(M){var $=M&&(y&&M[y]||M[E]);if(typeof $=="function")return $}var _="<<anonymous>>",S={array:D("array"),bigint:D("bigint"),bool:D("boolean"),func:D("function"),number:D("number"),object:D("object"),string:D("string"),symbol:D("symbol"),any:G(),arrayOf:j,element:Z(),elementType:Ie(),instanceOf:Oe,node:q(),objectOf:z,oneOf:de,oneOfType:K,shape:se,exact:at};function P(M,$){return M===$?M!==0||1/M===1/$:M!==M&&$!==$}function k(M,$){this.message=M,this.data=$&&typeof $=="object"?$:{},this.stack=""}k.prototype=Error.prototype;function A(M){var $={},J=0;function ae(le,ue,fe,we,Ce,xe,W){if(we=we||_,xe=xe||fe,W!==f){if(h){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}else if(typeof console<"u"){var U=we+":"+fe;!$[U]&&J<3&&(v("You are manually calling a React.PropTypes validation function for the `"+xe+"` prop on `"+we+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),$[U]=!0,J++)}}return ue[fe]==null?le?ue[fe]===null?new k("The "+Ce+" `"+xe+"` is marked as required "+("in `"+we+"`, but its value is `null`.")):new k("The "+Ce+" `"+xe+"` is marked as required in "+("`"+we+"`, but its value is `undefined`.")):null:M(ue,fe,we,Ce,xe)}var oe=ae.bind(null,!1);return oe.isRequired=ae.bind(null,!0),oe}function D(M){function $(J,ae,oe,le,ue,fe){var we=J[ae],Ce=Se(we);if(Ce!==M){var xe=$e(we);return new k("Invalid "+le+" `"+ue+"` of type "+("`"+xe+"` supplied to `"+oe+"`, expected ")+("`"+M+"`."),{expectedType:M})}return null}return A($)}function G(){return A(x)}function j(M){function $(J,ae,oe,le,ue){if(typeof M!="function")return new k("Property `"+ue+"` of component `"+oe+"` has invalid PropType notation inside arrayOf.");var fe=J[ae];if(!Array.isArray(fe)){var we=Se(fe);return new k("Invalid "+le+" `"+ue+"` of type "+("`"+we+"` supplied to `"+oe+"`, expected an array."))}for(var Ce=0;Ce<fe.length;Ce++){var xe=M(fe,Ce,oe,le,ue+"["+Ce+"]",f);if(xe instanceof Error)return xe}return null}return A($)}function Z(){function M($,J,ae,oe,le){var ue=$[J];if(!m(ue)){var fe=Se(ue);return new k("Invalid "+oe+" `"+le+"` of type "+("`"+fe+"` supplied to `"+ae+"`, expected a single ReactElement."))}return null}return A(M)}function Ie(){function M($,J,ae,oe,le){var ue=$[J];if(!c.isValidElementType(ue)){var fe=Se(ue);return new k("Invalid "+oe+" `"+le+"` of type "+("`"+fe+"` supplied to `"+ae+"`, expected a single ReactElement type."))}return null}return A(M)}function Oe(M){function $(J,ae,oe,le,ue){if(!(J[ae]instanceof M)){var fe=M.name||_,we=It(J[ae]);return new k("Invalid "+le+" `"+ue+"` of type "+("`"+we+"` supplied to `"+oe+"`, expected ")+("instance of `"+fe+"`."))}return null}return A($)}function de(M){if(!Array.isArray(M))return arguments.length>1?v("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):v("Invalid argument supplied to oneOf, expected an array."),x;function $(J,ae,oe,le,ue){for(var fe=J[ae],we=0;we<M.length;we++)if(P(fe,M[we]))return null;var Ce=JSON.stringify(M,function(W,I){var U=$e(I);return U==="symbol"?String(I):I});return new k("Invalid "+le+" `"+ue+"` of value `"+String(fe)+"` "+("supplied to `"+oe+"`, expected one of "+Ce+"."))}return A($)}function z(M){function $(J,ae,oe,le,ue){if(typeof M!="function")return new k("Property `"+ue+"` of component `"+oe+"` has invalid PropType notation inside objectOf.");var fe=J[ae],we=Se(fe);if(we!=="object")return new k("Invalid "+le+" `"+ue+"` of type "+("`"+we+"` supplied to `"+oe+"`, expected an object."));for(var Ce in fe)if(p(fe,Ce)){var xe=M(fe,Ce,oe,le,ue+"."+Ce,f);if(xe instanceof Error)return xe}return null}return A($)}function K(M){if(!Array.isArray(M))return v("Invalid argument supplied to oneOfType, expected an instance of array."),x;for(var $=0;$<M.length;$++){var J=M[$];if(typeof J!="function")return v("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Ht(J)+" at index "+$+"."),x}function ae(oe,le,ue,fe,we){for(var Ce=[],xe=0;xe<M.length;xe++){var W=M[xe],I=W(oe,le,ue,fe,we,f);if(I==null)return null;I.data&&p(I.data,"expectedType")&&Ce.push(I.data.expectedType)}var U=Ce.length>0?", expected one of type ["+Ce.join(", ")+"]":"";return new k("Invalid "+fe+" `"+we+"` supplied to "+("`"+ue+"`"+U+"."))}return A(ae)}function q(){function M($,J,ae,oe,le){return Re($[J])?null:new k("Invalid "+oe+" `"+le+"` supplied to "+("`"+ae+"`, expected a ReactNode."))}return A(M)}function ne(M,$,J,ae,oe){return new k((M||"React class")+": "+$+" type `"+J+"."+ae+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+oe+"`.")}function se(M){function $(J,ae,oe,le,ue){var fe=J[ae],we=Se(fe);if(we!=="object")return new k("Invalid "+le+" `"+ue+"` of type `"+we+"` "+("supplied to `"+oe+"`, expected `object`."));for(var Ce in M){var xe=M[Ce];if(typeof xe!="function")return ne(oe,le,ue,Ce,$e(xe));var W=xe(fe,Ce,oe,le,ue+"."+Ce,f);if(W)return W}return null}return A($)}function at(M){function $(J,ae,oe,le,ue){var fe=J[ae],we=Se(fe);if(we!=="object")return new k("Invalid "+le+" `"+ue+"` of type `"+we+"` "+("supplied to `"+oe+"`, expected `object`."));var Ce=d({},J[ae],M);for(var xe in Ce){var W=M[xe];if(p(M,xe)&&typeof W!="function")return ne(oe,le,ue,xe,$e(W));if(!W)return new k("Invalid "+le+" `"+ue+"` key `"+xe+"` supplied to `"+oe+"`.\nBad object: "+JSON.stringify(J[ae],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(M),null,"  "));var I=W(fe,xe,oe,le,ue+"."+xe,f);if(I)return I}return null}return A($)}function Re(M){switch(typeof M){case"number":case"string":case"undefined":return!0;case"boolean":return!M;case"object":if(Array.isArray(M))return M.every(Re);if(M===null||m(M))return!0;var $=T(M);if($){var J=$.call(M),ae;if($!==M.entries){for(;!(ae=J.next()).done;)if(!Re(ae.value))return!1}else for(;!(ae=J.next()).done;){var oe=ae.value;if(oe&&!Re(oe[1]))return!1}}else return!1;return!0;default:return!1}}function Le(M,$){return M==="symbol"?!0:$?$["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&$ instanceof Symbol:!1}function Se(M){var $=typeof M;return Array.isArray(M)?"array":M instanceof RegExp?"object":Le($,M)?"symbol":$}function $e(M){if(typeof M>"u"||M===null)return""+M;var $=Se(M);if($==="object"){if(M instanceof Date)return"date";if(M instanceof RegExp)return"regexp"}return $}function Ht(M){var $=$e(M);switch($){case"array":case"object":return"an "+$;case"boolean":case"date":case"regexp":return"a "+$;default:return $}}function It(M){return!M.constructor||!M.constructor.name?_:M.constructor.name}return S.checkPropTypes=g,S.resetWarningCache=g.resetWarningCache,S.PropTypes=S,S}},"./node_modules/prop-types/index.js":(a,l,u)=>{{var c=u("./node_modules/react-is/index.js"),d=!0;a.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(c.isElement,d)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=l},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,l)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,c=u?Symbol.for("react.element"):60103,d=u?Symbol.for("react.portal"):60106,f=u?Symbol.for("react.fragment"):60107,p=u?Symbol.for("react.strict_mode"):60108,g=u?Symbol.for("react.profiler"):60114,v=u?Symbol.for("react.provider"):60109,x=u?Symbol.for("react.context"):60110,m=u?Symbol.for("react.async_mode"):60111,h=u?Symbol.for("react.concurrent_mode"):60111,y=u?Symbol.for("react.forward_ref"):60112,E=u?Symbol.for("react.suspense"):60113,T=u?Symbol.for("react.suspense_list"):60120,_=u?Symbol.for("react.memo"):60115,S=u?Symbol.for("react.lazy"):60116,P=u?Symbol.for("react.block"):60121,k=u?Symbol.for("react.fundamental"):60117,A=u?Symbol.for("react.responder"):60118,D=u?Symbol.for("react.scope"):60119;function G(W){return typeof W=="string"||typeof W=="function"||W===f||W===h||W===g||W===p||W===E||W===T||typeof W=="object"&&W!==null&&(W.$$typeof===S||W.$$typeof===_||W.$$typeof===v||W.$$typeof===x||W.$$typeof===y||W.$$typeof===k||W.$$typeof===A||W.$$typeof===D||W.$$typeof===P)}function j(W){if(typeof W=="object"&&W!==null){var I=W.$$typeof;switch(I){case c:var U=W.type;switch(U){case m:case h:case f:case g:case p:case E:return U;default:var V=U&&U.$$typeof;switch(V){case x:case y:case S:case _:case v:return V;default:return I}}case d:return I}}}var Z=m,Ie=h,Oe=x,de=v,z=c,K=y,q=f,ne=S,se=_,at=d,Re=g,Le=p,Se=E,$e=!1;function Ht(W){return $e||($e=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),It(W)||j(W)===m}function It(W){return j(W)===h}function M(W){return j(W)===x}function $(W){return j(W)===v}function J(W){return typeof W=="object"&&W!==null&&W.$$typeof===c}function ae(W){return j(W)===y}function oe(W){return j(W)===f}function le(W){return j(W)===S}function ue(W){return j(W)===_}function fe(W){return j(W)===d}function we(W){return j(W)===g}function Ce(W){return j(W)===p}function xe(W){return j(W)===E}l.AsyncMode=Z,l.ConcurrentMode=Ie,l.ContextConsumer=Oe,l.ContextProvider=de,l.Element=z,l.ForwardRef=K,l.Fragment=q,l.Lazy=ne,l.Memo=se,l.Portal=at,l.Profiler=Re,l.StrictMode=Le,l.Suspense=Se,l.isAsyncMode=Ht,l.isConcurrentMode=It,l.isContextConsumer=M,l.isContextProvider=$,l.isElement=J,l.isForwardRef=ae,l.isFragment=oe,l.isLazy=le,l.isMemo=ue,l.isPortal=fe,l.isProfiler=we,l.isStrictMode=Ce,l.isSuspense=xe,l.isValidElementType=G,l.typeOf=j})()},"./node_modules/react-is/index.js":(a,l,u)=>{a.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,l,u)=>{u.r(l),u.d(l,{shallowEqualArrays:()=>d,shallowEqualObjects:()=>c});function c(f,p){if(f===p)return!0;if(!f||!p)return!1;var g=Object.keys(f),v=Object.keys(p),x=g.length;if(v.length!==x)return!1;for(var m=0;m<x;m++){var h=g[m];if(f[h]!==p[h]||!Object.prototype.hasOwnProperty.call(p,h))return!1}return!0}function d(f,p){if(f===p)return!0;if(!f||!p)return!1;var g=f.length;if(p.length!==g)return!1;for(var v=0;v<g;v++)if(f[v]!==p[v])return!1;return!0}},"./src/Component.ts":function(a,l,u){var c=this&&this.__rest||function(g,v){var x={};for(var m in g)Object.prototype.hasOwnProperty.call(g,m)&&v.indexOf(m)<0&&(x[m]=g[m]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,m=Object.getOwnPropertySymbols(g);h<m.length;h++)v.indexOf(m[h])<0&&Object.prototype.propertyIsEnumerable.call(g,m[h])&&(x[m[h]]=g[m[h]]);return x},d=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(l,"__esModule",{value:!0});var f=d(u("./src/useMediaQuery.ts")),p=function(g){var v=g.children,x=g.device,m=g.onChange,h=c(g,["children","device","onChange"]),y=(0,f.default)(h,x,m);return typeof v=="function"?v(y):y?v:null};l.default=p},"./src/Context.ts":(a,l,u)=>{Object.defineProperty(l,"__esModule",{value:!0});var c=u("react"),d=(0,c.createContext)(void 0);l.default=d},"./src/index.ts":function(a,l,u){var c=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(l,"__esModule",{value:!0}),l.Context=l.toQuery=l.useMediaQuery=l.default=void 0;var d=c(u("./src/useMediaQuery.ts"));l.useMediaQuery=d.default;var f=c(u("./src/Component.ts"));l.default=f.default;var p=c(u("./src/toQuery.ts"));l.toQuery=p.default;var g=c(u("./src/Context.ts"));l.Context=g.default},"./src/mediaQuery.ts":function(a,l,u){var c=this&&this.__assign||function(){return c=Object.assign||function(E){for(var T,_=1,S=arguments.length;_<S;_++){T=arguments[_];for(var P in T)Object.prototype.hasOwnProperty.call(T,P)&&(E[P]=T[P])}return E},c.apply(this,arguments)},d=this&&this.__rest||function(E,T){var _={};for(var S in E)Object.prototype.hasOwnProperty.call(E,S)&&T.indexOf(S)<0&&(_[S]=E[S]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,S=Object.getOwnPropertySymbols(E);P<S.length;P++)T.indexOf(S[P])<0&&Object.prototype.propertyIsEnumerable.call(E,S[P])&&(_[S[P]]=E[S[P]]);return _},f=this&&this.__importDefault||function(E){return E&&E.__esModule?E:{default:E}};Object.defineProperty(l,"__esModule",{value:!0});var p=f(u("./node_modules/prop-types/index.js")),g=p.default.oneOfType([p.default.string,p.default.number]),v={all:p.default.bool,grid:p.default.bool,aural:p.default.bool,braille:p.default.bool,handheld:p.default.bool,print:p.default.bool,projection:p.default.bool,screen:p.default.bool,tty:p.default.bool,tv:p.default.bool,embossed:p.default.bool},x={orientation:p.default.oneOf(["portrait","landscape"]),scan:p.default.oneOf(["progressive","interlace"]),aspectRatio:p.default.string,deviceAspectRatio:p.default.string,height:g,deviceHeight:g,width:g,deviceWidth:g,color:p.default.bool,colorIndex:p.default.bool,monochrome:p.default.bool,resolution:g,type:Object.keys(v)};x.type;var m=d(x,["type"]),h=c({minAspectRatio:p.default.string,maxAspectRatio:p.default.string,minDeviceAspectRatio:p.default.string,maxDeviceAspectRatio:p.default.string,minHeight:g,maxHeight:g,minDeviceHeight:g,maxDeviceHeight:g,minWidth:g,maxWidth:g,minDeviceWidth:g,maxDeviceWidth:g,minColor:p.default.number,maxColor:p.default.number,minColorIndex:p.default.number,maxColorIndex:p.default.number,minMonochrome:p.default.number,maxMonochrome:p.default.number,minResolution:g,maxResolution:g},m),y=c(c({},v),h);l.default={all:y,types:v,matchers:x,features:h}},"./src/toQuery.ts":function(a,l,u){var c=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(l,"__esModule",{value:!0});var d=c(u("./node_modules/hyphenate-style-name/index.js")),f=c(u("./src/mediaQuery.ts")),p=function(m){return"not ".concat(m)},g=function(m,h){var y=(0,d.default)(m);return typeof h=="number"&&(h="".concat(h,"px")),h===!0?y:h===!1?p(y):"(".concat(y,": ").concat(h,")")},v=function(m){return m.join(" and ")},x=function(m){var h=[];return Object.keys(f.default.all).forEach(function(y){var E=m[y];E!=null&&h.push(g(y,E))}),v(h)};l.default=x},"./src/useMediaQuery.ts":function(a,l,u){var c=this&&this.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(l,"__esModule",{value:!0});var d=u("react"),f=c(u("./node_modules/matchmediaquery/index.js")),p=c(u("./node_modules/hyphenate-style-name/index.js")),g=u("./node_modules/shallow-equal/dist/index.esm.js"),v=c(u("./src/toQuery.ts")),x=c(u("./src/Context.ts")),m=function(k){return k.query||(0,v.default)(k)},h=function(k){if(k){var A=Object.keys(k);return A.reduce(function(D,G){return D[(0,p.default)(G)]=k[G],D},{})}},y=function(){var k=(0,d.useRef)(!1);return(0,d.useEffect)(function(){k.current=!0},[]),k.current},E=function(k){var A=(0,d.useContext)(x.default),D=function(){return h(k)||h(A)},G=(0,d.useState)(D),j=G[0],Z=G[1];return(0,d.useEffect)(function(){var Ie=D();(0,g.shallowEqualObjects)(j,Ie)||Z(Ie)},[k,A]),j},T=function(k){var A=function(){return m(k)},D=(0,d.useState)(A),G=D[0],j=D[1];return(0,d.useEffect)(function(){var Z=A();G!==Z&&j(Z)},[k]),G},_=function(k,A){var D=function(){return(0,f.default)(k,A||{},!!A)},G=(0,d.useState)(D),j=G[0],Z=G[1],Ie=y();return(0,d.useEffect)(function(){if(Ie){var Oe=D();return Z(Oe),function(){Oe&&Oe.dispose()}}},[k,A]),j},S=function(k){var A=(0,d.useState)(k.matches),D=A[0],G=A[1];return(0,d.useEffect)(function(){var j=function(Z){G(Z.matches)};return k.addListener(j),G(k.matches),function(){k.removeListener(j)}},[k]),D},P=function(k,A,D){var G=E(A),j=T(k);if(!j)throw new Error("Invalid or missing MediaQuery!");var Z=_(j,G),Ie=S(Z),Oe=y();return(0,d.useEffect)(function(){Oe&&D&&D(Ie)},[Ie]),(0,d.useEffect)(function(){return function(){Z&&Z.dispose()}},[]),Ie};l.default=P},react:a=>{a.exports=n}},i={};function s(a){var l=i[a];if(l!==void 0)return l.exports;var u=i[a]={exports:{}};return r[a].call(u.exports,u,u.exports,s),u.exports}s.d=(a,l)=>{for(var u in l)s.o(l,u)&&!s.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:l[u]})},s.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),s.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o=s("./src/index.ts");return o})())})(Ab);var rd=Ab.exports;const Nb=({main:t})=>{const{name:e,email:n,isAuth:r}=Zd(),{modalConfig:i,openModal:s,closeModal:o}=jy(),a=$o(),[l,u]=C.useState(!1),c=Cd(),d=rd.useMediaQuery({maxWidth:1024}),[f,p]=C.useState(!1),g=rd.useMediaQuery({maxWidth:768});C.useEffect(()=>{const T=_=>{const S=document.getElementById("authUserBlock");S&&!S.contains(_.target)&&p(!1)};return document.addEventListener("mousedown",T),()=>{document.removeEventListener("mousedown",T)}},[p]);const v=()=>{u(!0)},x=()=>{u(!1)},m=()=>{l&&oL(No).then(()=>{a(pi(null)),x(),localStorage.removeItem("userToken"),c("/BabySitterHub/",{replace:!0})}).catch(T=>console.log(T))},h=()=>{p(T=>!T)},y=T=>{s(T),p(!0)},E=()=>{p(!1),u(T=>!T)};return g?w.jsxs(v8,{children:[r?w.jsxs(Oh,{children:[w.jsxs(Tu,{children:[w.jsx(Ah,{children:w.jsx(Ph,{})}),w.jsx("span",{children:e})]}),w.jsx(_n,{title:"Logout",border:!0,onClick:v}),l&&w.jsx(Nh,{onClose:x,children:w.jsxs("div",{onClick:x,children:[w.jsx("p",{children:"Are you sure you want to log out?"}),w.jsxs(Dh,{children:[w.jsx("button",{onClick:m,children:"Confirm"}),w.jsx("button",{onClick:x,children:"Cancel"})]})]})})]}):w.jsxs(w.Fragment,{children:[w.jsx(_n,{title:"Log in",border:!0,onClick:()=>s("login")}),w.jsx(_n,{title:"Registration",border:!1,onClick:()=>s("registration")})]}),i.isOpen&&w.jsx(za,{onClose:o,children:i.formType==="login"?w.jsx(kh,{onClose:o}):i.formType==="registration"?w.jsx(Rh,{onClose:o}):null})]}):d?w.jsxs(Tu,{children:[w.jsx("span",{children:e}),w.jsxs(Ah,{id:"authUserBlock",onClick:h,children:[w.jsx(Ph,{}),f&&w.jsx(y8,{$main:t,children:r?w.jsxs(Oh,{children:[w.jsx(Tu,{children:w.jsx("span",{children:n})}),w.jsx(_n,{title:"Logout",border:!0,onClick:E}),l&&w.jsx(Nh,{onClose:x,children:w.jsxs("div",{onClick:x,children:[w.jsx("p",{children:"Are you sure you want to log out?"}),w.jsxs(Dh,{children:[w.jsx("button",{onClick:m,children:"Confirm"}),w.jsx("button",{onClick:x,children:"Cancel"})]})]})})]}):w.jsxs(w.Fragment,{children:[w.jsx(_n,{title:"Log in",border:!0,onClick:()=>y("login")}),w.jsx(_n,{title:"Registration",border:!1,onClick:()=>y("registration")})]})})]}),i.isOpen&&w.jsx(za,{onClose:o,children:i.formType==="login"?w.jsx(kh,{onClose:o}):i.formType==="registration"?w.jsx(Rh,{onClose:o}):null})]}):w.jsxs(g8,{$main:t,children:[r?w.jsxs(Oh,{children:[w.jsxs(Tu,{children:[w.jsx(Ah,{children:w.jsx(Ph,{})}),w.jsx("span",{children:e})]}),w.jsx(_n,{title:"Logout",border:!0,onClick:v}),l&&w.jsx(Nh,{onClose:x,children:w.jsxs("div",{onClick:x,children:[w.jsx("p",{children:"Are you sure you want to log out?"}),w.jsxs(Dh,{children:[w.jsx("button",{onClick:m,children:"Confirm"}),w.jsx("button",{onClick:x,children:"Cancel"})]})]})})]}):w.jsxs(w.Fragment,{children:[w.jsx(_n,{$main:t,title:"Log in",border:!0,onClick:()=>s("login")}),w.jsx(_n,{$main:t,title:"Registration",border:!1,onClick:()=>s("registration")})]}),i.isOpen&&w.jsx(za,{onClose:o,children:i.formType==="login"?w.jsx(kh,{onClose:o}):i.formType==="registration"?w.jsx(Rh,{onClose:o}):null})]})},_8=N.header`
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
`,w8=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  margin: 0 auto;
  max-width: 1184px;
  @media (max-width: 768px) {
    padding-block: 14px;
  }
`,x8=N(Ml)`
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
`,E8=N.div`
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
`,Db=N.nav`
  display: flex;
  gap: 40px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  @media (max-width: 1200px) {
    gap: 20px;
  }
`,qu=N(HP)`
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
`;var Mb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qw=ot.createContext&&ot.createContext(Mb),S8=["attr","size","title"];function C8(t,e){if(t==null)return{};var n=T8(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function T8(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function id(){return id=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},id.apply(this,arguments)}function Qw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function sd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qw(Object(n),!0).forEach(function(r){b8(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function b8(t,e,n){return e=I8(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I8(t){var e=k8(t,"string");return typeof e=="symbol"?e:String(e)}function k8(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Lb(t){return t&&t.map((e,n)=>ot.createElement(e.tag,sd({key:n},e.attr),Lb(e.child)))}function R8(t){return e=>ot.createElement(P8,id({attr:sd({},t.attr)},e),Lb(t.child))}function P8(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=C8(t,S8),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ot.createElement("svg",id({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:sd(sd({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ot.createElement("title",null,s),t.children)};return qw!==void 0?ot.createElement(qw.Consumer,null,n=>e(n)):e(Mb)}function O8(t){return R8({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(t)}const A8=N.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`,N8=N.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`,D8=N.div`
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
`,M8=N.div`
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
`,L8=N(Pb)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`,Mh=N(qu)`
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
`,j8=N(Db)`
  flex-direction: column;
`,F8=()=>{const{isAuth:t}=Zd(),[e,n]=C.useState(!1),r=()=>{n(!e)};return w.jsxs(A8,{children:[w.jsx(O8,{color:"#FBFBFB",size:34,onClick:r}),e&&w.jsx(N8,{onClick:r}),w.jsxs(D8,{$isOpen:e,children:[w.jsx(L8,{onClick:r}),w.jsx(M8,{children:w.jsxs(j8,{children:[w.jsx(Mh,{to:"/BabySitterHub",end:!0,children:"Home"}),w.jsx(Mh,{to:"/BabySitterHub/nannies",children:"Nannies"}),t&&w.jsx(Mh,{to:"/BabySitterHub/favorites",children:"Favorites"})]})}),w.jsx(Nb,{})]})]})},$8=()=>{const t=Fo(),{pathname:e}=t;console.log("pathname",e);const{isAuth:n}=Zd(),r=rd.useMediaQuery({maxWidth:768}),i=e==="/BabySitterHub/";return w.jsx(_8,{$main:i,children:w.jsxs(w8,{$main:i,children:[w.jsx(x8,{to:"/BabySitterHub/",$main:i,children:"Nanny.Services"}),r?w.jsx(F8,{}):w.jsxs(E8,{$main:i,children:[w.jsxs(Db,{children:[w.jsx(qu,{to:"/BabySitterHub/",end:!0,children:"Home"}),w.jsx(qu,{to:"/BabySitterHub/nannies",children:"Nannies"}),n&&w.jsx(qu,{to:"/BabySitterHub/favorites",children:"Favorites"})]}),w.jsx(Nb,{main:i})]})]})})},U8=N.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`,z8=N.main`
  width: 100%;
  margin: 0 auto;
`,B8=()=>{const t=$o();return Cd(),C.useEffect(()=>{const e=sL(No,n=>{if(n){const r={name:n.displayName,email:n.email,id:n.uid};console.log(n),t(pi(r))}else t(pi(null))});return()=>e()},[t]),w.jsx(z4,{children:w.jsxs(U8,{children:[w.jsx($8,{}),w.jsx(z8,{children:w.jsx(TP,{})})]})})},W8=t=>C.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 12.5L5 15L12.5 22.5L25 10L22.5 7.5L12.5 17.5L7.5 12.5Z",fill:"#FBFBFB"})),V8=N.div`
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
`,H8=N.div`
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background: ${t=>t.theme.colors.primaryGreenColor};
  display: flex;
  align-items: center;
  justify-content: center;
`,G8=N.div`
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
`,K8=()=>w.jsxs(V8,{children:[w.jsx(H8,{children:w.jsx(W8,{})}),w.jsxs(G8,{children:[w.jsx("h2",{children:"Experienced Nannies"}),w.jsx("span",{children:"15,000"})]})]}),Y8="/BabySitterHub/assets/MainPageImg-wFjZ-yXa.jpg",q8=t=>C.createElement("svg",{width:15,height:17,viewBox:"0 0 15 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{d:"M12.8229 1.67313C12.7461 1.12622 12.2404 0.745174 11.6935 0.822036L2.78109 2.0746C2.23418 2.15146 1.85313 2.65713 1.92999 3.20404C2.00685 3.75095 2.51252 4.13199 3.05943 4.05513L10.9816 2.94175L12.095 10.8639C12.1718 11.4108 12.6775 11.7918 13.2244 11.715C13.7713 11.6381 14.1524 11.1325 14.0755 10.5855L12.8229 1.67313ZM1.79864 16.7896L12.6313 2.41412L11.034 1.21049L0.201365 15.5859L1.79864 16.7896Z",fill:"#FBFBFB"})),Q8=N.section`
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
`,X8=N.div`
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
`,J8=N.h1`
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
`,Z8=N.p`
  font-size: clamp(22px, 2vw, 28px);
  letter-spacing: -0.02em;
  margin-bottom: 64px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
  @media (max-height: 640px) {
    margin-bottom: 16px;
  }
`,ez=N.button`
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
`,tz=N.div`
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
`,nz=()=>w.jsxs(Q8,{children:[w.jsxs(X8,{children:[w.jsx(J8,{children:"Make Life Easier for the Family"}),w.jsx(Z8,{children:"Find Babysitters Online for All Occasions"}),w.jsxs(ez,{as:Ml,to:"/BabySitterHub/nannies",children:["Get started",w.jsx(q8,{})]})]}),w.jsx(tz,{children:w.jsx("img",{src:Y8})}),w.jsx(K8,{})]}),rz=()=>w.jsx(nz,{}),jb=t=>C.createElement("svg",{width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{d:"M1 1.5L6 6.5L11 1.5",stroke:"#FBFBFB",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),iz=N.div`
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
`,sz=N.button`
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
`,oz=N.ul`
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
`,az=N.li`
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
`,Fb=({onSelect:t})=>{const e=[{label:"A to Z",value:"a-z"},{label:"Z to A",value:"z-a"},{label:"Price: Low to High",value:"asc"},{label:"Price: High to Low",value:"desc"},{label:"Popular",value:"popular"},{label:"Not popular",value:"not-popular"},{label:"Show all",value:"show-all"}],[n,r]=C.useState(!1),[i,s]=C.useState(!1),[o,a]=C.useState(e[6]||null),l=()=>{r(!n),s(!i)},u=c=>{a(c),t(c.value),r(!1),s(!i)};return w.jsxs(iz,{children:[w.jsx("label",{htmlFor:"filters",children:"Filters"}),w.jsxs(sz,{onClick:l,id:"filters",children:[o.label||"Select an option",w.jsx(jb,{style:{transform:i?"rotate(180deg)":"rotate(0)"}})]}),n&&w.jsx(oz,{children:e.map((c,d)=>w.jsx(az,{onClick:()=>u(c),selected:o&&c.value===o.value,children:c.label},d))})]})},lz=t=>C.createElement("svg",{width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{d:"M22.5766 4.99419C22.0233 4.44061 21.3663 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8047 3.40226 16.0817 3.70187C15.3586 4.00147 14.7016 4.44061 14.1483 4.99419L13 6.14252L11.8516 4.99419C10.734 3.87652 9.21809 3.24863 7.63747 3.24863C6.05685 3.24863 4.54097 3.87652 3.4233 4.99419C2.30563 6.11186 1.67773 7.62774 1.67773 9.20836C1.67773 10.789 2.30563 12.3049 3.4233 13.4225L4.57163 14.5709L13 22.9992L21.4283 14.5709L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5693 6.20448 23.1302 5.54751 22.5766 4.99419Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),uz=N.article`
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
`,Xw=N.div`
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
`,cz=N.div`
  display: flex;
  flex-direction: column;
  gap: ${({$fullInfo:t})=>t?"48px":"14px"};
  @media (max-width: 1024px) {
    gap: ${({$fullInfo:t})=>t?"30px":"14px"};
  }
  @media (max-width: 768px) {
    gap: ${({$fullInfo:t})=>t?"20px":"10px"};
  }
`,dz=N.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 1024px) {
    gap: 18px;
  }
`,fz=N.div`
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
`,hz=N.div`
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
`,pz=N.div`
  display: flex;
  gap: 48px;
  align-items: center;
  @media (max-width: 1024px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
`,mz=N.div`
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
`,gz=N.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,yz=N.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,vz=N.span`
  @media (max-width: 768px) {
    font-size: 14px;
  }
  span {
    color: ${t=>t.theme.colors.secondaryGreenColor};
  }
`,_z=N.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,Jw=N.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${t=>t.theme.colors.secondaryBodyText};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,wz=N.div`
  display: flex;
  gap: 40px;
  align-items: center;
  @media (max-width: 768px) {
    gap: 28px;
    button {
      font-size: 14px;
    }
  }
`,xz=N.button`
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
`,Ez=N.ul`
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
`,Sz=N(lz)`
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
`,$b=t=>C.createElement("svg",{width:16,height:15,viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{d:"M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5795 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703Z",fill:"#FFC531",stroke:"#FFC531",strokeWidth:1.2})),Cz=t=>C.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("g",{clipPath:"url(#clip0_31_1949)"},C.createElement("path",{d:"M14 6.66663C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66663C2 5.07533 2.63214 3.5492 3.75736 2.42399C4.88258 1.29877 6.4087 0.666626 8 0.666626C9.5913 0.666626 11.1174 1.29877 12.2426 2.42399C13.3679 3.5492 14 5.07533 14 6.66663Z",stroke:"#11101C",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),C.createElement("path",{d:"M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z",stroke:"#11101C",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),C.createElement("defs",null,C.createElement("clipPath",{id:"clip0_31_1949"},C.createElement("rect",{width:16,height:16,fill:"white"})))),Tz=N.article`
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
`,bz=N.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  min-width: 120px;
  @media (max-width: 1024px) {
    margin-bottom: 0;
    min-width: 100px;
  }
`,Iz=N.div`
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
`,kz=N.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
`,Rz=N.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: ${t=>t.theme.colors.primaryBodyText};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Pz=N.span`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${t=>t.theme.colors.primaryBodyText};
`,Oz=N.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${t=>t.theme.colors.secondaryBodyText};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,Az=({review:t})=>{const{reviewer:e,rating:n,comment:r}=t;return w.jsxs(Tz,{children:[w.jsxs(bz,{children:[w.jsx(Iz,{children:t.avatar?w.jsx("img",{src:t.avatar}):w.jsx("span",{children:e.charAt(0).toUpperCase()})}),w.jsxs(kz,{children:[w.jsx(Rz,{children:e}),w.jsxs(Pz,{children:[w.jsx($b,{}),w.jsx("span",{children:n.toString().length===1?`${n}.0`:n})]})]})]}),w.jsx(Oz,{children:r})]})},Nz=nv().shape({address:cr().required("Address is required"),phone:cr().required("Phone number is required").matches(/^\+?[0-9\s]+$/,"Invalid phone number").min(12,"Phone must be at least 12 characters").max(13,"Phone must be max 13 characters"),child_age:Tb().integer("Child age must be an integer").min(0,"Child age must be a positive number").max(18,"Child age must be max 18").required("Child age is required"),time:cr().required("Time is required"),email:cr().email("Invalid email address").test("email-format","Email should contain '@' and a valid domain",t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)).required("Email is required"),parent_name:cr().required("Parent's name is required").min(2),comment:cr().required("Comment is required")}),Dz=N.div`
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
`,Mz=N.div`
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
`,Lz=N.div`
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
`,jz=N.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, auto);
  grid-row-gap: 10px;
  grid-column-gap: 8px;
  button {
    grid-column: span 2;
    margin-top: 20px;
  }
`,Fz=N.textarea`
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
`,$z=N.div`
  text-align: center;
  grid-column: span 2;
  color: ${t=>t.theme.colors.secondaryGreenColor};
`,Uz=N.div`
  grid-column: ${({$isGridStretchRow:t})=>t?"span 2":"span 1"};
`,Ls=({name:t,type:e,placeholder:n,value:r,onChange:i,isGridStretchRow:s,formik:o})=>w.jsxs(Uz,{$isGridStretchRow:s,children:[w.jsx(Rb,{name:t,type:e,placeholder:n,value:r,onChange:i}),o.touched[t]&&o.errors[t]&&w.jsx(nd,{children:o.errors[t]})]}),zz=({onClose:t,nanny:e})=>{const[n,r]=C.useState(!1),{name:i,avatar_url:s}=e,o=(l,u,c,d,f,p,g)=>{console.log("Form values:",l,u,c,d,f,p,g)},a=vb({initialValues:{address:"",phone:"",child_age:"",time:"",email:"",parent_name:"",comment:""},onSubmit:()=>{console.log("Form submitted"),o(a.values.address,a.values.phone,a.values.child_age,a.values.time,a.values.email,a.values.parent_name,a.values.comment),r(!0),setTimeout(()=>{t()},3e3)},validationSchema:Nz});return w.jsxs(Dz,{children:[w.jsx(Ob,{onClick:t}),w.jsxs(Mz,{children:[w.jsx("h3",{children:"Make an appointment with a babysitter"}),w.jsx("p",{children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."})]}),w.jsxs(Lz,{children:[w.jsx("img",{src:s,alt:"Portrait of the babysitter"}),w.jsxs("div",{children:[w.jsx("span",{children:"Your nanny"}),w.jsx("h4",{children:i})]})]}),w.jsxs(jz,{onSubmit:a.handleSubmit,children:[w.jsx(Ls,{value:a.values.address,name:"address",type:"text",placeholder:"Address",onChange:a.handleChange,formik:a}),w.jsx(Ls,{value:a.values.phone,name:"phone",type:"tel",placeholder:"+380",onChange:a.handleChange,formik:a}),w.jsx(Ls,{value:a.values.child_age,name:"child_age",type:"number",placeholder:"Child's age",onChange:a.handleChange,formik:a}),w.jsx(Ls,{value:a.values.time,name:"time",type:"time",placeholder:"00:00",onChange:a.handleChange,formik:a}),w.jsx(Ls,{value:a.values.email,name:"email",type:"email",placeholder:"Email",isGridStretchRow:"true",onChange:a.handleChange,formik:a}),w.jsx(Ls,{value:a.values.parent_name,name:"parent_name",type:"text",placeholder:"Father's or mother's name",isGridStretchRow:"true",onChange:a.handleChange,formik:a}),w.jsxs(w.Fragment,{children:[w.jsx(Fz,{value:a.values.comment,name:"comment",placeholder:"Comment",onChange:a.handleChange}),a.touched.comment&&a.errors.comment&&w.jsx(nd,{children:a.errors.comment})]}),n?w.jsx($z,{children:"Your application has been successfully submitted. Please await confirmation via email."}):w.jsx(_n,{title:"Send",border:!1,padding:"14px",type:"submit"})]})]})},Bz=N.div`
  position: relative;
`,Wz=N.div`
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
`,Vz=({onClose:t})=>{const e=$o(),[n,r]=C.useState(null),{openModal:i}=jy(),s=(a,l)=>{sC(No,a,l).then(({user:u})=>{const c=u.displayName||"";e(pi({name:c,email:u.email,id:u.uid,token:u.accessToken})),localStorage.setItem("userToken",u.accessToken),t()}).catch(u=>{console.error("Error:",u.code),u.code==="auth/user-not-found"||u.code==="auth/invalid-credential"?r("The email or password you entered is incorrect. Please check your credentials or sign up."):r(u.message)})},o=()=>{i("registration")};return w.jsxs(Bz,{children:[w.jsx(rv,{onClose:t,title:"Add to favorites",handleClick:s,text:"To add nannies to your favorites, you need to log in to your account.",errorMessage:n}),w.jsxs(Wz,{children:["If you don't have an account yet, please"," ",w.jsx("span",{onClick:o,children:"register"}),"."]})]})},Hz=t=>{const e=new Date(t),n=new Date;let r=n.getFullYear()-e.getFullYear();const i=n.getMonth()-e.getMonth();return(i<0||i===0&&n.getDate()<e.getDate())&&r--,r},Gz=N.li`
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
`,ma=({label:t,value:e})=>w.jsxs(Gz,{children:[w.jsx("span",{children:t}),w.jsx("p",{children:e})]}),Kz=({birthday:t,experience:e,kids_age:n,formattedCharacters:r,education:i})=>w.jsxs(_z,{children:[w.jsx(ma,{label:"Age:",value:Hz(t)}),w.jsx(ma,{label:"Experience:",value:e}),w.jsx(ma,{label:"Kids age:",value:n}),w.jsx(ma,{label:"Characters:",value:r}),w.jsx(ma,{label:"Education:",value:i})]}),Yz=({nanny:t})=>{const{currentUser:e,isAuth:n}=Zd(),[r,i]=C.useState(!1),{modalConfig:s,openModal:o,closeModal:a}=jy(),[l,u]=C.useState(null),[c,d]=C.useState(!1),f=$o(),p=rd.useMediaQuery({maxWidth:768}),{about:g,avatar_url:v,birthday:x,characters:m,education:h,experience:y,id:E,kids_age:T,location:_,name:S,price_per_hour:P,rating:k,reviews:A}=t,D=m.map(Z=>Z.charAt(0).toUpperCase()+Z.slice(1)).join(", "),G=()=>{o("appointment",t)};C.useEffect(()=>{(async()=>{try{if(e&&t){const Oe=(await ym(e.id)).some(de=>de.id===t.id);u(Oe)}}catch(Ie){console.error("Error fetching favorites",Ie)}})()},[e,t]);const j=async()=>{if(n)try{const Z=await ym(e.id);if(Z.some(Oe=>Oe.id===t.id))if(u(!1),d(!0),t.id){await D4(e.id,t.id);const Oe=e==null?void 0:e.favorites.filter(z=>z.id!==t.id),de={...e,favorites:Oe};f(pi(de))}else console.error("Error: Nanny id is null or undefined");else{const Oe=[...Z,t];await N4(e.id,Oe);const de={...e,favorites:Oe};f(pi(de)),u(!0)}}catch(Z){console.error("Error adding to favorites:",Z)}finally{d(!1)}else o("favorites")};return c?w.jsx(_f,{}):w.jsxs(uz,{children:[!p&&w.jsx(Xw,{children:w.jsx("img",{src:v,alt:"Portrait of the babysitter"})}),w.jsxs(cz,{$fullInfo:r,children:[w.jsxs(dz,{children:[w.jsxs(fz,{children:[p&&w.jsx(Xw,{children:w.jsx("img",{src:v,alt:"Portrait of the babysitter"})}),w.jsxs(hz,{children:[w.jsx("span",{children:"Nanny"}),w.jsx("h2",{children:S})]}),w.jsxs(pz,{children:[w.jsxs(mz,{children:[w.jsxs(gz,{children:[w.jsx(Cz,{}),w.jsx("p",{children:_})]}),w.jsxs(yz,{children:[w.jsx($b,{}),w.jsxs("p",{children:["Rating: ",k]})]}),w.jsxs(vz,{children:["Price / 1 hour:",w.jsxs("span",{children:[" ",P,"$"]})]})]}),w.jsx(Sz,{onClick:j,$clicked:l})]})]}),w.jsx(Kz,{birthday:x,experience:y,kids_age:T,formattedCharacters:D,education:h}),!p&&w.jsx(Jw,{children:g})]}),r&&w.jsxs(w.Fragment,{children:[p&&w.jsx(Jw,{children:g}),w.jsx(Ez,{children:A.map((Z,Ie)=>w.jsx(Az,{review:Z},Ie))})]}),w.jsxs(wz,{children:[r&&w.jsx(_n,{title:"Make an appointment",border:!1,padding:"14px 28px",onClick:G}),w.jsx(xz,{onClick:()=>i(!r),children:r?"Show less":"Read more"})]})]}),s.isOpen&&s.formType==="appointment"&&w.jsx(za,{onClose:a,children:w.jsx(zz,{onClose:a,nanny:s.selectedNanny})}),s.isOpen&&s.formType==="favorites"&&w.jsx(za,{onClose:a,children:w.jsx(Vz,{onClose:a})})]})},qz=N.div`
  display: flex;
  flex-direction: column;
  & > button {
    align-self: center;
  }
`,Qz=N.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
  @media (max-width: 1024px) {
    gap: 24px;
    margin-bottom: 40px;
  }
`,Xz=()=>(window.innerWidth-1184)/2,Jz=N.button`
  position: fixed;
  bottom: 60px;
  right: ${Xz()}px;
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
`,Zz=N(jb)`
  width: 24px;
  height: 24px;
  transform: rotate(180deg);
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`,e7=()=>{const[t,e]=C.useState(!1),n=()=>{window.scrollY>200?e(!0):e(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return C.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]),w.jsx(w.Fragment,{children:t&&w.jsx(Jz,{onClick:r,children:w.jsx(Zz,{})})})},Ub=({sortBy:t,nannies:e})=>{const[n,r]=C.useState([]),i=0,s=[...e].sort((l,u)=>{switch(t){case"a-z":return l.name.localeCompare(u.name);case"z-a":return u.name.localeCompare(l.name);case"asc":return l.price_per_hour-u.price_per_hour;case"desc":return u.price_per_hour-l.price_per_hour;case"popular":return u.rating-l.rating;case"not-popular":return l.rating-u.rating;case"show-all":default:return 0}});C.useEffect(()=>{r(s.slice(i,i+3))},[t,e,i]);const o=()=>{const l=[...n,...s.slice(i+n.length,i+n.length+3)];r(l)},a=s.length>i+n.length;return w.jsxs(qz,{children:[w.jsx(Qz,{children:n.map(l=>w.jsx(Yz,{nanny:l},l.id))}),a&&w.jsx(_n,{title:"Load More",border:!1,padding:"14px 40px",onClick:o}),w.jsx(e7,{})]})},Zw=N.section`
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
`,t7=N.div`
  font-size: 34px;
  width: 1000px;
  height: 500px;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 0 auto;
`,n7=N(Ml)`
  color: ${t=>t.theme.colors.titleText};
  &:hover {
    text-decoration: underline;
  }
`,r7=()=>{const[t,e]=C.useState(null),{currentUser:n}=Rg(Wg),[r,i]=C.useState([]),[s,o]=C.useState(!0);C.useEffect(()=>{(async()=>{try{if(n){o(!0);const u=await ym(n.id);i(u),console.log("favorites",u)}}catch(u){console.error("Error fetching favorites",u)}finally{o(!1)}})()},[n]);const a=l=>{console.log("Selected option:",l),e(l)};return s?w.jsx(_f,{}):r.length===0?w.jsx(Zw,{children:w.jsx(t7,{children:w.jsxs("p",{children:["Your list of favorite nannies is empty. Please go to the"," ",w.jsx(n7,{to:"/BabySitterHub/nannies",children:"Catalog"})," and choose a suitable nanny for your child."]})})}):w.jsxs(Zw,{children:[w.jsx(Fb,{onSelect:a}),w.jsx(Ub,{sortBy:t,nannies:r})]})},i7=N.section`
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
`,s7=()=>{const[t,e]=C.useState(null),[n,r]=C.useState([]),[i,s]=C.useState(!0);C.useEffect(()=>{const a=Sl(Cl,"/nannies"),l=w4(a,_4()),u=g4(l,c=>{const d=c.val();if(d!==null){const f=Object.values(d);r(f),s(!1)}});return()=>{u()}},[]);const o=a=>{e(a)};return i?w.jsx(_f,{}):w.jsxs(i7,{children:[w.jsx(Fb,{onSelect:o}),w.jsx(Ub,{sortBy:t,nannies:n})]})},zb=C.createContext(null);function o7({children:t}){const{currentUser:e}=Rg(Wg),[n]=C.useState(e||null);return w.jsx(zb.Provider,{value:n,children:t})}const a7=()=>{const t=C.useContext(zb),n=!!localStorage.getItem("userToken");return{currentUser:t,name:t==null?void 0:t.name,isAuth:n}};function l7({children:t}){const{isAuth:e}=a7(),n=Cd();return C.useEffect(()=>{e||(console.log(e),n("/BabySitterHub/",{replace:!0}))},[e,n]),e?t:null}const u7=NP([{element:w.jsx(B8,{}),errorElement:w.jsx(U4,{}),children:[{path:"/BabySitterHub/",element:w.jsx(rz,{})},{path:"/BabySitterHub/nannies",element:w.jsx(s7,{})},{path:"/BabySitterHub/favorites",element:w.jsx(l7,{children:w.jsx(r7,{})})}]}]);jh.createRoot(document.getElementById("root")).render(w.jsx(ot.StrictMode,{children:w.jsx(pO,{store:EN,children:w.jsxs(pA,{theme:L4,children:[w.jsx(M4,{}),w.jsx(o7,{children:w.jsx(zP,{router:u7})})]})})}))});export default c7();
