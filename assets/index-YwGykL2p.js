var PI=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var b5=PI((Kt,Yt)=>{function X0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function jp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var J0={exports:{}},Rc={},Z0={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ll=Symbol.for("react.element"),NI=Symbol.for("react.portal"),AI=Symbol.for("react.fragment"),OI=Symbol.for("react.strict_mode"),DI=Symbol.for("react.profiler"),LI=Symbol.for("react.provider"),MI=Symbol.for("react.context"),FI=Symbol.for("react.forward_ref"),jI=Symbol.for("react.suspense"),$I=Symbol.for("react.memo"),UI=Symbol.for("react.lazy"),dy=Symbol.iterator;function zI(e){return e===null||typeof e!="object"?null:(e=dy&&e[dy]||e["@@iterator"],typeof e=="function"?e:null)}var ew={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tw=Object.assign,nw={};function ps(e,t,n){this.props=e,this.context=t,this.refs=nw,this.updater=n||ew}ps.prototype.isReactComponent={};ps.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ps.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rw(){}rw.prototype=ps.prototype;function $p(e,t,n){this.props=e,this.context=t,this.refs=nw,this.updater=n||ew}var Up=$p.prototype=new rw;Up.constructor=$p;tw(Up,ps.prototype);Up.isPureReactComponent=!0;var fy=Array.isArray,iw=Object.prototype.hasOwnProperty,zp={current:null},ow={key:!0,ref:!0,__self:!0,__source:!0};function sw(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)iw.call(t,r)&&!ow.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ll,type:e,key:o,ref:s,props:i,_owner:zp.current}}function BI(e,t){return{$$typeof:ll,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bp(e){return typeof e=="object"&&e!==null&&e.$$typeof===ll}function WI(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hy=/\/+/g;function Hd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?WI(""+e.key):t.toString(36)}function iu(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ll:case NI:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Hd(s,0):r,fy(i)?(n="",e!=null&&(n=e.replace(hy,"$&/")+"/"),iu(i,t,n,"",function(u){return u})):i!=null&&(Bp(i)&&(i=BI(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(hy,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",fy(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Hd(o,a);s+=iu(o,t,n,l,i)}else if(l=zI(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Hd(o,a++),s+=iu(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ol(e,t,n){if(e==null)return e;var r=[],i=0;return iu(e,r,"","",function(o){return t.call(n,o,i++)}),r}function VI(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Rt={current:null},ou={transition:null},HI={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:ou,ReactCurrentOwner:zp};le.Children={map:Ol,forEach:function(e,t,n){Ol(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ol(e,function(){t++}),t},toArray:function(e){return Ol(e,function(t){return t})||[]},only:function(e){if(!Bp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=ps;le.Fragment=AI;le.Profiler=DI;le.PureComponent=$p;le.StrictMode=OI;le.Suspense=jI;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HI;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tw({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=zp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)iw.call(t,l)&&!ow.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ll,type:e.type,key:i,ref:o,props:r,_owner:s}};le.createContext=function(e){return e={$$typeof:MI,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:LI,_context:e},e.Consumer=e};le.createElement=sw;le.createFactory=function(e){var t=sw.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:FI,render:e}};le.isValidElement=Bp;le.lazy=function(e){return{$$typeof:UI,_payload:{_status:-1,_result:e},_init:VI}};le.memo=function(e,t){return{$$typeof:$I,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=ou.transition;ou.transition={};try{e()}finally{ou.transition=t}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(e,t){return Rt.current.useCallback(e,t)};le.useContext=function(e){return Rt.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return Rt.current.useDeferredValue(e)};le.useEffect=function(e,t){return Rt.current.useEffect(e,t)};le.useId=function(){return Rt.current.useId()};le.useImperativeHandle=function(e,t,n){return Rt.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return Rt.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return Rt.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return Rt.current.useMemo(e,t)};le.useReducer=function(e,t,n){return Rt.current.useReducer(e,t,n)};le.useRef=function(e){return Rt.current.useRef(e)};le.useState=function(e){return Rt.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return Rt.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return Rt.current.useTransition()};le.version="18.2.0";Z0.exports=le;var w=Z0.exports;const At=jp(w),Yf=X0({__proto__:null,default:At},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GI=w,KI=Symbol.for("react.element"),YI=Symbol.for("react.fragment"),qI=Object.prototype.hasOwnProperty,QI=GI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XI={key:!0,ref:!0,__self:!0,__source:!0};function aw(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)qI.call(t,r)&&!XI.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:KI,type:e,key:o,ref:s,props:i,_owner:QI.current}}Rc.Fragment=YI;Rc.jsx=aw;Rc.jsxs=aw;J0.exports=Rc;var I=J0.exports,qf={},lw={exports:{}},Zt={},uw={exports:{}},cw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,z){var V=D.length;D.push(z);e:for(;0<V;){var J=V-1>>>1,Z=D[J];if(0<i(Z,z))D[J]=z,D[V]=Z,V=J;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],V=D.pop();if(V!==z){D[0]=V;e:for(var J=0,Z=D.length,vt=Z>>>1;J<vt;){var xe=2*(J+1)-1,Le=D[xe],Ae=xe+1,dt=D[Ae];if(0>i(Le,V))Ae<Z&&0>i(dt,Le)?(D[J]=dt,D[Ae]=V,J=Ae):(D[J]=Le,D[xe]=V,J=xe);else if(Ae<Z&&0>i(dt,V))D[J]=dt,D[Ae]=V,J=Ae;else break e}}return z}function i(D,z){var V=D.sortIndex-z.sortIndex;return V!==0?V:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,y=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=D)r(u),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(u)}}function C(D){if(_=!1,g(D),!y)if(n(l)!==null)y=!0,nn(b);else{var z=n(u);z!==null&&he(C,z.startTime-D)}}function b(D,z){y=!1,_&&(_=!1,p(P),P=-1),m=!0;var V=f;try{for(g(z),d=n(l);d!==null&&(!(d.expirationTime>z)||D&&!G());){var J=d.callback;if(typeof J=="function"){d.callback=null,f=d.priorityLevel;var Z=J(d.expirationTime<=z);z=e.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&r(l),g(z)}else r(l);d=n(l)}if(d!==null)var vt=!0;else{var xe=n(u);xe!==null&&he(C,xe.startTime-z),vt=!1}return vt}finally{d=null,f=V,m=!1}}var v=!1,S=null,P=-1,O=5,U=-1;function G(){return!(e.unstable_now()-U<O)}function me(){if(S!==null){var D=e.unstable_now();U=D;var z=!0;try{z=S(!0,D)}finally{z?X():(v=!1,S=null)}}else v=!1}var X;if(typeof h=="function")X=function(){h(me)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,zt=Ee.port2;Ee.port1.onmessage=me,X=function(){zt.postMessage(null)}}else X=function(){E(me,0)};function nn(D){S=D,v||(v=!0,X())}function he(D,z){P=E(function(){D(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,nn(b))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var V=f;f=z;try{return D()}finally{f=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=f;f=D;try{return z()}finally{f=V}},e.unstable_scheduleCallback=function(D,z,V){var J=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?J+V:J):V=J,D){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=V+Z,D={id:c++,callback:z,priorityLevel:D,startTime:V,expirationTime:Z,sortIndex:-1},V>J?(D.sortIndex=V,t(u,D),n(l)===null&&D===n(u)&&(_?(p(P),P=-1):_=!0,he(C,V-J))):(D.sortIndex=Z,t(l,D),y||m||(y=!0,nn(b))),D},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(D){var z=f;return function(){var V=f;f=z;try{return D.apply(this,arguments)}finally{f=V}}}})(cw);uw.exports=cw;var JI=uw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dw=w,Qt=JI;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fw=new Set,Sa={};function Ji(e,t){Ho(e,t),Ho(e+"Capture",t)}function Ho(e,t){for(Sa[e]=t,e=0;e<t.length;e++)fw.add(t[e])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qf=Object.prototype.hasOwnProperty,ZI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,py={},my={};function ex(e){return Qf.call(my,e)?!0:Qf.call(py,e)?!1:ZI.test(e)?my[e]=!0:(py[e]=!0,!1)}function tx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nx(e,t,n,r){if(t===null||typeof t>"u"||tx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){gt[e]=new Pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];gt[t]=new Pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){gt[e]=new Pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){gt[e]=new Pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){gt[e]=new Pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){gt[e]=new Pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){gt[e]=new Pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){gt[e]=new Pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){gt[e]=new Pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wp=/[\-:]([a-z])/g;function Vp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wp,Vp);gt[t]=new Pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wp,Vp);gt[t]=new Pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wp,Vp);gt[t]=new Pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){gt[e]=new Pt(e,1,!1,e.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){gt[e]=new Pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hp(e,t,n,r){var i=gt.hasOwnProperty(t)?gt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nx(t,n,i,r)&&(n=null),r||i===null?ex(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hr=dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dl=Symbol.for("react.element"),yo=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),Gp=Symbol.for("react.strict_mode"),Xf=Symbol.for("react.profiler"),hw=Symbol.for("react.provider"),pw=Symbol.for("react.context"),Kp=Symbol.for("react.forward_ref"),Jf=Symbol.for("react.suspense"),Zf=Symbol.for("react.suspense_list"),Yp=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),mw=Symbol.for("react.offscreen"),gy=Symbol.iterator;function Ns(e){return e===null||typeof e!="object"?null:(e=gy&&e[gy]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,Gd;function Xs(e){if(Gd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gd=t&&t[1]||""}return`
`+Gd+e}var Kd=!1;function Yd(e,t){if(!e||Kd)return"";Kd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Kd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xs(e):""}function rx(e){switch(e.tag){case 5:return Xs(e.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return e=Yd(e.type,!1),e;case 11:return e=Yd(e.type.render,!1),e;case 1:return e=Yd(e.type,!0),e;default:return""}}function eh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vo:return"Fragment";case yo:return"Portal";case Xf:return"Profiler";case Gp:return"StrictMode";case Jf:return"Suspense";case Zf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pw:return(e.displayName||"Context")+".Consumer";case hw:return(e._context.displayName||"Context")+".Provider";case Kp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yp:return t=e.displayName||null,t!==null?t:eh(e.type)||"Memo";case Cr:t=e._payload,e=e._init;try{return eh(e(t))}catch{}}return null}function ix(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eh(t);case 8:return t===Gp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ox(e){var t=gw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ll(e){e._valueTracker||(e._valueTracker=ox(e))}function yw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gw(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function th(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yy(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vw(e,t){t=t.checked,t!=null&&Hp(e,"checked",t,!1)}function nh(e,t){vw(e,t);var n=Kr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rh(e,t.type,n):t.hasOwnProperty("defaultValue")&&rh(e,t.type,Kr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vy(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function rh(e,t,n){(t!=="number"||xu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Js=Array.isArray;function Do(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ih(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _y(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Js(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kr(n)}}function _w(e,t){var n=Kr(t.value),r=Kr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wy(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ww(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ww(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ml,Ew=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ml.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ca(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sx=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(e){sx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oa[t]=oa[e]})});function Sw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oa.hasOwnProperty(e)&&oa[e]?(""+t).trim():t+"px"}function Cw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ax=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sh(e,t){if(t){if(ax[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ah(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lh=null;function qp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uh=null,Lo=null,Mo=null;function Ey(e){if(e=dl(e)){if(typeof uh!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Dc(t),uh(e.stateNode,e.type,t))}}function Tw(e){Lo?Mo?Mo.push(e):Mo=[e]:Lo=e}function Iw(){if(Lo){var e=Lo,t=Mo;if(Mo=Lo=null,Ey(e),t)for(e=0;e<t.length;e++)Ey(t[e])}}function xw(e,t){return e(t)}function kw(){}var qd=!1;function bw(e,t,n){if(qd)return e(t,n);qd=!0;try{return xw(e,t,n)}finally{qd=!1,(Lo!==null||Mo!==null)&&(kw(),Iw())}}function Ta(e,t){var n=e.stateNode;if(n===null)return null;var r=Dc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var ch=!1;if(ir)try{var As={};Object.defineProperty(As,"passive",{get:function(){ch=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{ch=!1}function lx(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var sa=!1,ku=null,bu=!1,dh=null,ux={onError:function(e){sa=!0,ku=e}};function cx(e,t,n,r,i,o,s,a,l){sa=!1,ku=null,lx.apply(ux,arguments)}function dx(e,t,n,r,i,o,s,a,l){if(cx.apply(this,arguments),sa){if(sa){var u=ku;sa=!1,ku=null}else throw Error(N(198));bu||(bu=!0,dh=u)}}function Zi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rw(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sy(e){if(Zi(e)!==e)throw Error(N(188))}function fx(e){var t=e.alternate;if(!t){if(t=Zi(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Sy(i),e;if(o===r)return Sy(i),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Pw(e){return e=fx(e),e!==null?Nw(e):null}function Nw(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nw(e);if(t!==null)return t;e=e.sibling}return null}var Aw=Qt.unstable_scheduleCallback,Cy=Qt.unstable_cancelCallback,hx=Qt.unstable_shouldYield,px=Qt.unstable_requestPaint,He=Qt.unstable_now,mx=Qt.unstable_getCurrentPriorityLevel,Qp=Qt.unstable_ImmediatePriority,Ow=Qt.unstable_UserBlockingPriority,Ru=Qt.unstable_NormalPriority,gx=Qt.unstable_LowPriority,Dw=Qt.unstable_IdlePriority,Pc=null,Fn=null;function yx(e){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(Pc,e,void 0,(e.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:wx,vx=Math.log,_x=Math.LN2;function wx(e){return e>>>=0,e===0?32:31-(vx(e)/_x|0)|0}var Fl=64,jl=4194304;function Zs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Zs(a):(o&=s,o!==0&&(r=Zs(o)))}else s=n&~i,s!==0?r=Zs(s):o!==0&&(r=Zs(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-In(t),i=1<<n,r|=e[n],t&=~i;return r}function Ex(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-In(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Ex(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function fh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lw(){var e=Fl;return Fl<<=1,!(Fl&4194240)&&(Fl=64),e}function Qd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ul(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-In(t),e[t]=n}function Cx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-In(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Xp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-In(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function Mw(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fw,Jp,jw,$w,Uw,hh=!1,$l=[],Or=null,Dr=null,Lr=null,Ia=new Map,xa=new Map,Ir=[],Tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ty(e,t){switch(e){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Ia.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(t.pointerId)}}function Os(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=dl(t),t!==null&&Jp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ix(e,t,n,r,i){switch(t){case"focusin":return Or=Os(Or,e,t,n,r,i),!0;case"dragenter":return Dr=Os(Dr,e,t,n,r,i),!0;case"mouseover":return Lr=Os(Lr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ia.set(o,Os(Ia.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xa.set(o,Os(xa.get(o)||null,e,t,n,r,i)),!0}return!1}function zw(e){var t=_i(e.target);if(t!==null){var n=Zi(t);if(n!==null){if(t=n.tag,t===13){if(t=Rw(n),t!==null){e.blockedOn=t,Uw(e.priority,function(){jw(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function su(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ph(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lh=r,n.target.dispatchEvent(r),lh=null}else return t=dl(n),t!==null&&Jp(t),e.blockedOn=n,!1;t.shift()}return!0}function Iy(e,t,n){su(e)&&n.delete(t)}function xx(){hh=!1,Or!==null&&su(Or)&&(Or=null),Dr!==null&&su(Dr)&&(Dr=null),Lr!==null&&su(Lr)&&(Lr=null),Ia.forEach(Iy),xa.forEach(Iy)}function Ds(e,t){e.blockedOn===t&&(e.blockedOn=null,hh||(hh=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,xx)))}function ka(e){function t(i){return Ds(i,e)}if(0<$l.length){Ds($l[0],e);for(var n=1;n<$l.length;n++){var r=$l[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Or!==null&&Ds(Or,e),Dr!==null&&Ds(Dr,e),Lr!==null&&Ds(Lr,e),Ia.forEach(t),xa.forEach(t),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)zw(n),n.blockedOn===null&&Ir.shift()}var Fo=hr.ReactCurrentBatchConfig,Nu=!0;function kx(e,t,n,r){var i=ge,o=Fo.transition;Fo.transition=null;try{ge=1,Zp(e,t,n,r)}finally{ge=i,Fo.transition=o}}function bx(e,t,n,r){var i=ge,o=Fo.transition;Fo.transition=null;try{ge=4,Zp(e,t,n,r)}finally{ge=i,Fo.transition=o}}function Zp(e,t,n,r){if(Nu){var i=ph(e,t,n,r);if(i===null)af(e,t,r,Au,n),Ty(e,r);else if(Ix(i,e,t,n,r))r.stopPropagation();else if(Ty(e,r),t&4&&-1<Tx.indexOf(e)){for(;i!==null;){var o=dl(i);if(o!==null&&Fw(o),o=ph(e,t,n,r),o===null&&af(e,t,r,Au,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else af(e,t,r,null,n)}}var Au=null;function ph(e,t,n,r){if(Au=null,e=qp(r),e=_i(e),e!==null)if(t=Zi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rw(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Au=e,null}function Bw(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mx()){case Qp:return 1;case Ow:return 4;case Ru:case gx:return 16;case Dw:return 536870912;default:return 16}default:return 16}}var Nr=null,em=null,au=null;function Ww(){if(au)return au;var e,t=em,n=t.length,r,i="value"in Nr?Nr.value:Nr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return au=i.slice(e,1<r?1-r:void 0)}function lu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function xy(){return!1}function en(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ul:xy,this.isPropagationStopped=xy,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),t}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tm=en(ms),cl=$e({},ms,{view:0,detail:0}),Rx=en(cl),Xd,Jd,Ls,Nc=$e({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ls&&(Ls&&e.type==="mousemove"?(Xd=e.screenX-Ls.screenX,Jd=e.screenY-Ls.screenY):Jd=Xd=0,Ls=e),Xd)},movementY:function(e){return"movementY"in e?e.movementY:Jd}}),ky=en(Nc),Px=$e({},Nc,{dataTransfer:0}),Nx=en(Px),Ax=$e({},cl,{relatedTarget:0}),Zd=en(Ax),Ox=$e({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Dx=en(Ox),Lx=$e({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mx=en(Lx),Fx=$e({},ms,{data:0}),by=en(Fx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ux[e])?!!t[e]:!1}function nm(){return zx}var Bx=$e({},cl,{key:function(e){if(e.key){var t=jx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=lu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$x[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nm,charCode:function(e){return e.type==="keypress"?lu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wx=en(Bx),Vx=$e({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ry=en(Vx),Hx=$e({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nm}),Gx=en(Hx),Kx=$e({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yx=en(Kx),qx=$e({},Nc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=en(qx),Xx=[9,13,27,32],rm=ir&&"CompositionEvent"in window,aa=null;ir&&"documentMode"in document&&(aa=document.documentMode);var Jx=ir&&"TextEvent"in window&&!aa,Vw=ir&&(!rm||aa&&8<aa&&11>=aa),Py=" ",Ny=!1;function Hw(e,t){switch(e){case"keyup":return Xx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gw(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _o=!1;function Zx(e,t){switch(e){case"compositionend":return Gw(t);case"keypress":return t.which!==32?null:(Ny=!0,Py);case"textInput":return e=t.data,e===Py&&Ny?null:e;default:return null}}function ek(e,t){if(_o)return e==="compositionend"||!rm&&Hw(e,t)?(e=Ww(),au=em=Nr=null,_o=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vw&&t.locale!=="ko"?null:t.data;default:return null}}var tk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ay(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tk[e.type]:t==="textarea"}function Kw(e,t,n,r){Tw(r),t=Ou(t,"onChange"),0<t.length&&(n=new tm("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var la=null,ba=null;function nk(e){i1(e,0)}function Ac(e){var t=So(e);if(yw(t))return e}function rk(e,t){if(e==="change")return t}var Yw=!1;if(ir){var ef;if(ir){var tf="oninput"in document;if(!tf){var Oy=document.createElement("div");Oy.setAttribute("oninput","return;"),tf=typeof Oy.oninput=="function"}ef=tf}else ef=!1;Yw=ef&&(!document.documentMode||9<document.documentMode)}function Dy(){la&&(la.detachEvent("onpropertychange",qw),ba=la=null)}function qw(e){if(e.propertyName==="value"&&Ac(ba)){var t=[];Kw(t,ba,e,qp(e)),bw(nk,t)}}function ik(e,t,n){e==="focusin"?(Dy(),la=t,ba=n,la.attachEvent("onpropertychange",qw)):e==="focusout"&&Dy()}function ok(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ac(ba)}function sk(e,t){if(e==="click")return Ac(t)}function ak(e,t){if(e==="input"||e==="change")return Ac(t)}function lk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rn=typeof Object.is=="function"?Object.is:lk;function Ra(e,t){if(Rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qf.call(t,i)||!Rn(e[i],t[i]))return!1}return!0}function Ly(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function My(e,t){var n=Ly(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ly(n)}}function Qw(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qw(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xw(){for(var e=window,t=xu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xu(e.document)}return t}function im(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uk(e){var t=Xw(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qw(n.ownerDocument.documentElement,n)){if(r!==null&&im(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=My(n,o);var s=My(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ck=ir&&"documentMode"in document&&11>=document.documentMode,wo=null,mh=null,ua=null,gh=!1;function Fy(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gh||wo==null||wo!==xu(r)||(r=wo,"selectionStart"in r&&im(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ua&&Ra(ua,r)||(ua=r,r=Ou(mh,"onSelect"),0<r.length&&(t=new tm("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wo)))}function zl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Eo={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},nf={},Jw={};ir&&(Jw=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function Oc(e){if(nf[e])return nf[e];if(!Eo[e])return e;var t=Eo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jw)return nf[e]=t[n];return e}var Zw=Oc("animationend"),e1=Oc("animationiteration"),t1=Oc("animationstart"),n1=Oc("transitionend"),r1=new Map,jy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(e,t){r1.set(e,t),Ji(t,[e])}for(var rf=0;rf<jy.length;rf++){var of=jy[rf],dk=of.toLowerCase(),fk=of[0].toUpperCase()+of.slice(1);ti(dk,"on"+fk)}ti(Zw,"onAnimationEnd");ti(e1,"onAnimationIteration");ti(t1,"onAnimationStart");ti("dblclick","onDoubleClick");ti("focusin","onFocus");ti("focusout","onBlur");ti(n1,"onTransitionEnd");Ho("onMouseEnter",["mouseout","mouseover"]);Ho("onMouseLeave",["mouseout","mouseover"]);Ho("onPointerEnter",["pointerout","pointerover"]);Ho("onPointerLeave",["pointerout","pointerover"]);Ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function $y(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dx(r,t,void 0,e),e.currentTarget=null}function i1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;$y(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;$y(i,a,u),o=l}}}if(bu)throw e=dh,bu=!1,dh=null,e}function ke(e,t){var n=t[Eh];n===void 0&&(n=t[Eh]=new Set);var r=e+"__bubble";n.has(r)||(o1(t,e,2,!1),n.add(r))}function sf(e,t,n){var r=0;t&&(r|=4),o1(n,e,r,t)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Pa(e){if(!e[Bl]){e[Bl]=!0,fw.forEach(function(n){n!=="selectionchange"&&(hk.has(n)||sf(n,!1,e),sf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bl]||(t[Bl]=!0,sf("selectionchange",!1,t))}}function o1(e,t,n,r){switch(Bw(t)){case 1:var i=kx;break;case 4:i=bx;break;default:i=Zp}n=i.bind(null,t,n,e),i=void 0,!ch||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function af(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=_i(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}bw(function(){var u=o,c=qp(n),d=[];e:{var f=r1.get(e);if(f!==void 0){var m=tm,y=e;switch(e){case"keypress":if(lu(n)===0)break e;case"keydown":case"keyup":m=Wx;break;case"focusin":y="focus",m=Zd;break;case"focusout":y="blur",m=Zd;break;case"beforeblur":case"afterblur":m=Zd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ky;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Gx;break;case Zw:case e1:case t1:m=Dx;break;case n1:m=Yx;break;case"scroll":m=Rx;break;case"wheel":m=Qx;break;case"copy":case"cut":case"paste":m=Mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ry}var _=(t&4)!==0,E=!_&&e==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,g;h!==null;){g=h;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,p!==null&&(C=Ta(h,p),C!=null&&_.push(Na(h,C,g)))),E)break;h=h.return}0<_.length&&(f=new m(f,y,null,n,c),d.push({event:f,listeners:_}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==lh&&(y=n.relatedTarget||n.fromElement)&&(_i(y)||y[or]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?_i(y):null,y!==null&&(E=Zi(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=ky,C="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(_=Ry,C="onPointerLeave",p="onPointerEnter",h="pointer"),E=m==null?f:So(m),g=y==null?f:So(y),f=new _(C,h+"leave",m,n,c),f.target=E,f.relatedTarget=g,C=null,_i(c)===u&&(_=new _(p,h+"enter",y,n,c),_.target=g,_.relatedTarget=E,C=_),E=C,m&&y)t:{for(_=m,p=y,h=0,g=_;g;g=ho(g))h++;for(g=0,C=p;C;C=ho(C))g++;for(;0<h-g;)_=ho(_),h--;for(;0<g-h;)p=ho(p),g--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=ho(_),p=ho(p)}_=null}else _=null;m!==null&&Uy(d,f,m,_,!1),y!==null&&E!==null&&Uy(d,E,y,_,!0)}}e:{if(f=u?So(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=rk;else if(Ay(f))if(Yw)b=ak;else{b=ok;var v=ik}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=sk);if(b&&(b=b(e,u))){Kw(d,b,n,c);break e}v&&v(e,f,u),e==="focusout"&&(v=f._wrapperState)&&v.controlled&&f.type==="number"&&rh(f,"number",f.value)}switch(v=u?So(u):window,e){case"focusin":(Ay(v)||v.contentEditable==="true")&&(wo=v,mh=u,ua=null);break;case"focusout":ua=mh=wo=null;break;case"mousedown":gh=!0;break;case"contextmenu":case"mouseup":case"dragend":gh=!1,Fy(d,n,c);break;case"selectionchange":if(ck)break;case"keydown":case"keyup":Fy(d,n,c)}var S;if(rm)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else _o?Hw(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Vw&&n.locale!=="ko"&&(_o||P!=="onCompositionStart"?P==="onCompositionEnd"&&_o&&(S=Ww()):(Nr=c,em="value"in Nr?Nr.value:Nr.textContent,_o=!0)),v=Ou(u,P),0<v.length&&(P=new by(P,e,null,n,c),d.push({event:P,listeners:v}),S?P.data=S:(S=Gw(n),S!==null&&(P.data=S)))),(S=Jx?Zx(e,n):ek(e,n))&&(u=Ou(u,"onBeforeInput"),0<u.length&&(c=new by("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}i1(d,t)})}function Na(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ou(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ta(e,n),o!=null&&r.unshift(Na(e,o,i)),o=Ta(e,t),o!=null&&r.push(Na(e,o,i))),e=e.return}return r}function ho(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uy(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ta(n,o),l!=null&&s.unshift(Na(n,l,a))):i||(l=Ta(n,o),l!=null&&s.push(Na(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var pk=/\r\n?/g,mk=/\u0000|\uFFFD/g;function zy(e){return(typeof e=="string"?e:""+e).replace(pk,`
`).replace(mk,"")}function Wl(e,t,n){if(t=zy(t),zy(e)!==t&&n)throw Error(N(425))}function Du(){}var yh=null,vh=null;function _h(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wh=typeof setTimeout=="function"?setTimeout:void 0,gk=typeof clearTimeout=="function"?clearTimeout:void 0,By=typeof Promise=="function"?Promise:void 0,yk=typeof queueMicrotask=="function"?queueMicrotask:typeof By<"u"?function(e){return By.resolve(null).then(e).catch(vk)}:wh;function vk(e){setTimeout(function(){throw e})}function lf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ka(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ka(t)}function Mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gs=Math.random().toString(36).slice(2),Mn="__reactFiber$"+gs,Aa="__reactProps$"+gs,or="__reactContainer$"+gs,Eh="__reactEvents$"+gs,_k="__reactListeners$"+gs,wk="__reactHandles$"+gs;function _i(e){var t=e[Mn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[or]||n[Mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wy(e);e!==null;){if(n=e[Mn])return n;e=Wy(e)}return t}e=n,n=e.parentNode}return null}function dl(e){return e=e[Mn]||e[or],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function So(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Dc(e){return e[Aa]||null}var Sh=[],Co=-1;function ni(e){return{current:e}}function Ne(e){0>Co||(e.current=Sh[Co],Sh[Co]=null,Co--)}function Ie(e,t){Co++,Sh[Co]=e.current,e.current=t}var Yr={},Tt=ni(Yr),Lt=ni(!1),Oi=Yr;function Go(e,t){var n=e.type.contextTypes;if(!n)return Yr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(e){return e=e.childContextTypes,e!=null}function Lu(){Ne(Lt),Ne(Tt)}function Vy(e,t,n){if(Tt.current!==Yr)throw Error(N(168));Ie(Tt,t),Ie(Lt,n)}function s1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,ix(e)||"Unknown",i));return $e({},n,r)}function Mu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yr,Oi=Tt.current,Ie(Tt,e),Ie(Lt,Lt.current),!0}function Hy(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=s1(e,t,Oi),r.__reactInternalMemoizedMergedChildContext=e,Ne(Lt),Ne(Tt),Ie(Tt,e)):Ne(Lt),Ie(Lt,n)}var Yn=null,Lc=!1,uf=!1;function a1(e){Yn===null?Yn=[e]:Yn.push(e)}function Ek(e){Lc=!0,a1(e)}function ri(){if(!uf&&Yn!==null){uf=!0;var e=0,t=ge;try{var n=Yn;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Yn=null,Lc=!1}catch(i){throw Yn!==null&&(Yn=Yn.slice(e+1)),Aw(Qp,ri),i}finally{ge=t,uf=!1}}return null}var To=[],Io=0,Fu=null,ju=0,ln=[],un=0,Di=null,qn=1,Qn="";function fi(e,t){To[Io++]=ju,To[Io++]=Fu,Fu=e,ju=t}function l1(e,t,n){ln[un++]=qn,ln[un++]=Qn,ln[un++]=Di,Di=e;var r=qn;e=Qn;var i=32-In(r)-1;r&=~(1<<i),n+=1;var o=32-In(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,qn=1<<32-In(t)+i|n<<i|r,Qn=o+e}else qn=1<<o|n<<i|r,Qn=e}function om(e){e.return!==null&&(fi(e,1),l1(e,1,0))}function sm(e){for(;e===Fu;)Fu=To[--Io],To[Io]=null,ju=To[--Io],To[Io]=null;for(;e===Di;)Di=ln[--un],ln[un]=null,Qn=ln[--un],ln[un]=null,qn=ln[--un],ln[un]=null}var qt=null,Ht=null,De=!1,wn=null;function u1(e,t){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gy(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qt=e,Ht=Mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qt=e,Ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Di!==null?{id:qn,overflow:Qn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qt=e,Ht=null,!0):!1;default:return!1}}function Ch(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Th(e){if(De){var t=Ht;if(t){var n=t;if(!Gy(e,t)){if(Ch(e))throw Error(N(418));t=Mr(n.nextSibling);var r=qt;t&&Gy(e,t)?u1(r,n):(e.flags=e.flags&-4097|2,De=!1,qt=e)}}else{if(Ch(e))throw Error(N(418));e.flags=e.flags&-4097|2,De=!1,qt=e}}}function Ky(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qt=e}function Vl(e){if(e!==qt)return!1;if(!De)return Ky(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_h(e.type,e.memoizedProps)),t&&(t=Ht)){if(Ch(e))throw c1(),Error(N(418));for(;t;)u1(e,t),t=Mr(t.nextSibling)}if(Ky(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ht=Mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ht=null}}else Ht=qt?Mr(e.stateNode.nextSibling):null;return!0}function c1(){for(var e=Ht;e;)e=Mr(e.nextSibling)}function Ko(){Ht=qt=null,De=!1}function am(e){wn===null?wn=[e]:wn.push(e)}var Sk=hr.ReactCurrentBatchConfig;function yn(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var $u=ni(null),Uu=null,xo=null,lm=null;function um(){lm=xo=Uu=null}function cm(e){var t=$u.current;Ne($u),e._currentValue=t}function Ih(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jo(e,t){Uu=e,lm=xo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ot=!0),e.firstContext=null)}function fn(e){var t=e._currentValue;if(lm!==e)if(e={context:e,memoizedValue:t,next:null},xo===null){if(Uu===null)throw Error(N(308));xo=e,Uu.dependencies={lanes:0,firstContext:e}}else xo=xo.next=e;return t}var wi=null;function dm(e){wi===null?wi=[e]:wi.push(e)}function d1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,dm(t)):(n.next=i.next,i.next=n),t.interleaved=n,sr(e,r)}function sr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tr=!1;function fm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function er(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,sr(e,n)}return i=r.interleaved,i===null?(t.next=t,dm(r)):(t.next=i.next,i.next=t),r.interleaved=t,sr(e,n)}function uu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xp(e,n)}}function Yy(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zu(e,t,n,r){var i=e.updateQueue;Tr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(f=t,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(m,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(m,d,f):y,f==null)break e;d=$e({},d,f);break e;case 2:Tr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Mi|=s,e.lanes=s,e.memoizedState=d}}function qy(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var h1=new dw.Component().refs;function xh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mc={isMounted:function(e){return(e=e._reactInternals)?Zi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=bt(),i=$r(e),o=er(r,i);o.payload=t,n!=null&&(o.callback=n),t=Fr(e,o,i),t!==null&&(xn(t,e,i,r),uu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=bt(),i=$r(e),o=er(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Fr(e,o,i),t!==null&&(xn(t,e,i,r),uu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=bt(),r=$r(e),i=er(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fr(e,i,r),t!==null&&(xn(t,e,r,n),uu(t,e,r))}};function Qy(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ra(n,r)||!Ra(i,o):!0}function p1(e,t,n){var r=!1,i=Yr,o=t.contextType;return typeof o=="object"&&o!==null?o=fn(o):(i=Mt(t)?Oi:Tt.current,r=t.contextTypes,o=(r=r!=null)?Go(e,i):Yr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Xy(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mc.enqueueReplaceState(t,t.state,null)}function kh(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=h1,fm(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=fn(o):(o=Mt(t)?Oi:Tt.current,i.context=Go(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(xh(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mc.enqueueReplaceState(i,i.state,null),zu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ms(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===h1&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Hl(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jy(e){var t=e._init;return t(e._payload)}function m1(e){function t(p,h){if(e){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Ur(p,h),p.index=0,p.sibling=null,p}function o(p,h,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,g,C){return h===null||h.tag!==6?(h=gf(g,p.mode,C),h.return=p,h):(h=i(h,g),h.return=p,h)}function l(p,h,g,C){var b=g.type;return b===vo?c(p,h,g.props.children,C,g.key):h!==null&&(h.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Cr&&Jy(b)===h.type)?(C=i(h,g.props),C.ref=Ms(p,h,g),C.return=p,C):(C=mu(g.type,g.key,g.props,null,p.mode,C),C.ref=Ms(p,h,g),C.return=p,C)}function u(p,h,g,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=yf(g,p.mode,C),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function c(p,h,g,C,b){return h===null||h.tag!==7?(h=bi(g,p.mode,C,b),h.return=p,h):(h=i(h,g),h.return=p,h)}function d(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=gf(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Dl:return g=mu(h.type,h.key,h.props,null,p.mode,g),g.ref=Ms(p,null,h),g.return=p,g;case yo:return h=yf(h,p.mode,g),h.return=p,h;case Cr:var C=h._init;return d(p,C(h._payload),g)}if(Js(h)||Ns(h))return h=bi(h,p.mode,g,null),h.return=p,h;Hl(p,h)}return null}function f(p,h,g,C){var b=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(p,h,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Dl:return g.key===b?l(p,h,g,C):null;case yo:return g.key===b?u(p,h,g,C):null;case Cr:return b=g._init,f(p,h,b(g._payload),C)}if(Js(g)||Ns(g))return b!==null?null:c(p,h,g,C,null);Hl(p,g)}return null}function m(p,h,g,C,b){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(g)||null,a(h,p,""+C,b);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Dl:return p=p.get(C.key===null?g:C.key)||null,l(h,p,C,b);case yo:return p=p.get(C.key===null?g:C.key)||null,u(h,p,C,b);case Cr:var v=C._init;return m(p,h,g,v(C._payload),b)}if(Js(C)||Ns(C))return p=p.get(g)||null,c(h,p,C,b,null);Hl(h,C)}return null}function y(p,h,g,C){for(var b=null,v=null,S=h,P=h=0,O=null;S!==null&&P<g.length;P++){S.index>P?(O=S,S=null):O=S.sibling;var U=f(p,S,g[P],C);if(U===null){S===null&&(S=O);break}e&&S&&U.alternate===null&&t(p,S),h=o(U,h,P),v===null?b=U:v.sibling=U,v=U,S=O}if(P===g.length)return n(p,S),De&&fi(p,P),b;if(S===null){for(;P<g.length;P++)S=d(p,g[P],C),S!==null&&(h=o(S,h,P),v===null?b=S:v.sibling=S,v=S);return De&&fi(p,P),b}for(S=r(p,S);P<g.length;P++)O=m(S,p,P,g[P],C),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?P:O.key),h=o(O,h,P),v===null?b=O:v.sibling=O,v=O);return e&&S.forEach(function(G){return t(p,G)}),De&&fi(p,P),b}function _(p,h,g,C){var b=Ns(g);if(typeof b!="function")throw Error(N(150));if(g=b.call(g),g==null)throw Error(N(151));for(var v=b=null,S=h,P=h=0,O=null,U=g.next();S!==null&&!U.done;P++,U=g.next()){S.index>P?(O=S,S=null):O=S.sibling;var G=f(p,S,U.value,C);if(G===null){S===null&&(S=O);break}e&&S&&G.alternate===null&&t(p,S),h=o(G,h,P),v===null?b=G:v.sibling=G,v=G,S=O}if(U.done)return n(p,S),De&&fi(p,P),b;if(S===null){for(;!U.done;P++,U=g.next())U=d(p,U.value,C),U!==null&&(h=o(U,h,P),v===null?b=U:v.sibling=U,v=U);return De&&fi(p,P),b}for(S=r(p,S);!U.done;P++,U=g.next())U=m(S,p,P,U.value,C),U!==null&&(e&&U.alternate!==null&&S.delete(U.key===null?P:U.key),h=o(U,h,P),v===null?b=U:v.sibling=U,v=U);return e&&S.forEach(function(me){return t(p,me)}),De&&fi(p,P),b}function E(p,h,g,C){if(typeof g=="object"&&g!==null&&g.type===vo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Dl:e:{for(var b=g.key,v=h;v!==null;){if(v.key===b){if(b=g.type,b===vo){if(v.tag===7){n(p,v.sibling),h=i(v,g.props.children),h.return=p,p=h;break e}}else if(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Cr&&Jy(b)===v.type){n(p,v.sibling),h=i(v,g.props),h.ref=Ms(p,v,g),h.return=p,p=h;break e}n(p,v);break}else t(p,v);v=v.sibling}g.type===vo?(h=bi(g.props.children,p.mode,C,g.key),h.return=p,p=h):(C=mu(g.type,g.key,g.props,null,p.mode,C),C.ref=Ms(p,h,g),C.return=p,p=C)}return s(p);case yo:e:{for(v=g.key;h!==null;){if(h.key===v)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=yf(g,p.mode,C),h.return=p,p=h}return s(p);case Cr:return v=g._init,E(p,h,v(g._payload),C)}if(Js(g))return y(p,h,g,C);if(Ns(g))return _(p,h,g,C);Hl(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=gf(g,p.mode,C),h.return=p,p=h),s(p)):n(p,h)}return E}var Yo=m1(!0),g1=m1(!1),fl={},jn=ni(fl),Oa=ni(fl),Da=ni(fl);function Ei(e){if(e===fl)throw Error(N(174));return e}function hm(e,t){switch(Ie(Da,t),Ie(Oa,e),Ie(jn,fl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oh(t,e)}Ne(jn),Ie(jn,t)}function qo(){Ne(jn),Ne(Oa),Ne(Da)}function y1(e){Ei(Da.current);var t=Ei(jn.current),n=oh(t,e.type);t!==n&&(Ie(Oa,e),Ie(jn,n))}function pm(e){Oa.current===e&&(Ne(jn),Ne(Oa))}var Me=ni(0);function Bu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cf=[];function mm(){for(var e=0;e<cf.length;e++)cf[e]._workInProgressVersionPrimary=null;cf.length=0}var cu=hr.ReactCurrentDispatcher,df=hr.ReactCurrentBatchConfig,Li=0,je=null,qe=null,it=null,Wu=!1,ca=!1,La=0,Ck=0;function wt(){throw Error(N(321))}function gm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rn(e[n],t[n]))return!1;return!0}function ym(e,t,n,r,i,o){if(Li=o,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,cu.current=e===null||e.memoizedState===null?kk:bk,e=n(r,i),ca){o=0;do{if(ca=!1,La=0,25<=o)throw Error(N(301));o+=1,it=qe=null,t.updateQueue=null,cu.current=Rk,e=n(r,i)}while(ca)}if(cu.current=Vu,t=qe!==null&&qe.next!==null,Li=0,it=qe=je=null,Wu=!1,t)throw Error(N(300));return e}function vm(){var e=La!==0;return La=0,e}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?je.memoizedState=it=e:it=it.next=e,it}function hn(){if(qe===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=it===null?je.memoizedState:it.next;if(t!==null)it=t,qe=e;else{if(e===null)throw Error(N(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},it===null?je.memoizedState=it=e:it=it.next=e}return it}function Ma(e,t){return typeof t=="function"?t(e):t}function ff(e){var t=hn(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=qe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Li&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,je.lanes|=c,Mi|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Rn(r,t.memoizedState)||(Ot=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,je.lanes|=o,Mi|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hf(e){var t=hn(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Rn(o,t.memoizedState)||(Ot=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function v1(){}function _1(e,t){var n=je,r=hn(),i=t(),o=!Rn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ot=!0),r=r.queue,_m(S1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,Fa(9,E1.bind(null,n,r,i,t),void 0,null),ut===null)throw Error(N(349));Li&30||w1(n,t,i)}return i}function w1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function E1(e,t,n,r){t.value=n,t.getSnapshot=r,C1(t)&&T1(e)}function S1(e,t,n){return n(function(){C1(t)&&T1(e)})}function C1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rn(e,n)}catch{return!0}}function T1(e){var t=sr(e,1);t!==null&&xn(t,e,1,-1)}function Zy(e){var t=Dn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},t.queue=e,e=e.dispatch=xk.bind(null,je,e),[t.memoizedState,e]}function Fa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function I1(){return hn().memoizedState}function du(e,t,n,r){var i=Dn();je.flags|=e,i.memoizedState=Fa(1|t,n,void 0,r===void 0?null:r)}function Fc(e,t,n,r){var i=hn();r=r===void 0?null:r;var o=void 0;if(qe!==null){var s=qe.memoizedState;if(o=s.destroy,r!==null&&gm(r,s.deps)){i.memoizedState=Fa(t,n,o,r);return}}je.flags|=e,i.memoizedState=Fa(1|t,n,o,r)}function ev(e,t){return du(8390656,8,e,t)}function _m(e,t){return Fc(2048,8,e,t)}function x1(e,t){return Fc(4,2,e,t)}function k1(e,t){return Fc(4,4,e,t)}function b1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function R1(e,t,n){return n=n!=null?n.concat([e]):null,Fc(4,4,b1.bind(null,t,e),n)}function wm(){}function P1(e,t){var n=hn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function N1(e,t){var n=hn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function A1(e,t,n){return Li&21?(Rn(n,t)||(n=Lw(),je.lanes|=n,Mi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ot=!0),e.memoizedState=n)}function Tk(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=df.transition;df.transition={};try{e(!1),t()}finally{ge=n,df.transition=r}}function O1(){return hn().memoizedState}function Ik(e,t,n){var r=$r(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},D1(e))L1(t,n);else if(n=d1(e,t,n,r),n!==null){var i=bt();xn(n,e,r,i),M1(n,t,r)}}function xk(e,t,n){var r=$r(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(D1(e))L1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,s)){var l=t.interleaved;l===null?(i.next=i,dm(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=d1(e,t,i,r),n!==null&&(i=bt(),xn(n,e,r,i),M1(n,t,r))}}function D1(e){var t=e.alternate;return e===je||t!==null&&t===je}function L1(e,t){ca=Wu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function M1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xp(e,n)}}var Vu={readContext:fn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},kk={readContext:fn,useCallback:function(e,t){return Dn().memoizedState=[e,t===void 0?null:t],e},useContext:fn,useEffect:ev,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,du(4194308,4,b1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return du(4194308,4,e,t)},useInsertionEffect:function(e,t){return du(4,2,e,t)},useMemo:function(e,t){var n=Dn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ik.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=Dn();return e={current:e},t.memoizedState=e},useState:Zy,useDebugValue:wm,useDeferredValue:function(e){return Dn().memoizedState=e},useTransition:function(){var e=Zy(!1),t=e[0];return e=Tk.bind(null,e[1]),Dn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,i=Dn();if(De){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ut===null)throw Error(N(349));Li&30||w1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ev(S1.bind(null,r,o,e),[e]),r.flags|=2048,Fa(9,E1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Dn(),t=ut.identifierPrefix;if(De){var n=Qn,r=qn;n=(r&~(1<<32-In(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=La++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ck++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bk={readContext:fn,useCallback:P1,useContext:fn,useEffect:_m,useImperativeHandle:R1,useInsertionEffect:x1,useLayoutEffect:k1,useMemo:N1,useReducer:ff,useRef:I1,useState:function(){return ff(Ma)},useDebugValue:wm,useDeferredValue:function(e){var t=hn();return A1(t,qe.memoizedState,e)},useTransition:function(){var e=ff(Ma)[0],t=hn().memoizedState;return[e,t]},useMutableSource:v1,useSyncExternalStore:_1,useId:O1,unstable_isNewReconciler:!1},Rk={readContext:fn,useCallback:P1,useContext:fn,useEffect:_m,useImperativeHandle:R1,useInsertionEffect:x1,useLayoutEffect:k1,useMemo:N1,useReducer:hf,useRef:I1,useState:function(){return hf(Ma)},useDebugValue:wm,useDeferredValue:function(e){var t=hn();return qe===null?t.memoizedState=e:A1(t,qe.memoizedState,e)},useTransition:function(){var e=hf(Ma)[0],t=hn().memoizedState;return[e,t]},useMutableSource:v1,useSyncExternalStore:_1,useId:O1,unstable_isNewReconciler:!1};function Qo(e,t){try{var n="",r=t;do n+=rx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function pf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bh(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pk=typeof WeakMap=="function"?WeakMap:Map;function F1(e,t,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gu||(Gu=!0,jh=r),bh(e,t)},n}function j1(e,t,n){n=er(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bh(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bh(e,t),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function tv(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vk.bind(null,e,t,n),t.then(e,e))}function nv(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rv(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=er(-1,1),t.tag=2,Fr(n,t,1))),n.lanes|=1),e)}var Nk=hr.ReactCurrentOwner,Ot=!1;function xt(e,t,n,r){t.child=e===null?g1(t,null,n,r):Yo(t,e.child,n,r)}function iv(e,t,n,r,i){n=n.render;var o=t.ref;return jo(t,i),r=ym(e,t,n,r,o,i),n=vm(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ar(e,t,i)):(De&&n&&om(t),t.flags|=1,xt(e,t,r,i),t.child)}function ov(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!bm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$1(e,t,o,r,i)):(e=mu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(s,r)&&e.ref===t.ref)return ar(e,t,i)}return t.flags|=1,e=Ur(o,r),e.ref=t.ref,e.return=t,t.child=e}function $1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ra(o,r)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ot=!0);else return t.lanes=e.lanes,ar(e,t,i)}return Rh(e,t,n,r,i)}function U1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(bo,Vt),Vt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(bo,Vt),Vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ie(bo,Vt),Vt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ie(bo,Vt),Vt|=r;return xt(e,t,i,n),t.child}function z1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rh(e,t,n,r,i){var o=Mt(n)?Oi:Tt.current;return o=Go(t,o),jo(t,i),n=ym(e,t,n,r,o,i),r=vm(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ar(e,t,i)):(De&&r&&om(t),t.flags|=1,xt(e,t,n,i),t.child)}function sv(e,t,n,r,i){if(Mt(n)){var o=!0;Mu(t)}else o=!1;if(jo(t,i),t.stateNode===null)fu(e,t),p1(t,n,r),kh(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=fn(u):(u=Mt(n)?Oi:Tt.current,u=Go(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Xy(t,s,r,u),Tr=!1;var f=t.memoizedState;s.state=f,zu(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Lt.current||Tr?(typeof c=="function"&&(xh(t,n,c,r),l=t.memoizedState),(a=Tr||Qy(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,f1(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:yn(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=fn(l):(l=Mt(n)?Oi:Tt.current,l=Go(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Xy(t,s,r,l),Tr=!1,f=t.memoizedState,s.state=f,zu(t,r,s,i);var y=t.memoizedState;a!==d||f!==y||Lt.current||Tr?(typeof m=="function"&&(xh(t,n,m,r),y=t.memoizedState),(u=Tr||Qy(t,n,u,r,f,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ph(e,t,n,r,o,i)}function Ph(e,t,n,r,i,o){z1(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Hy(t,n,!1),ar(e,t,o);r=t.stateNode,Nk.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Yo(t,e.child,null,o),t.child=Yo(t,null,a,o)):xt(e,t,a,o),t.memoizedState=r.state,i&&Hy(t,n,!0),t.child}function B1(e){var t=e.stateNode;t.pendingContext?Vy(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vy(e,t.context,!1),hm(e,t.containerInfo)}function av(e,t,n,r,i){return Ko(),am(i),t.flags|=256,xt(e,t,n,r),t.child}var Nh={dehydrated:null,treeContext:null,retryLane:0};function Ah(e){return{baseLanes:e,cachePool:null,transitions:null}}function W1(e,t,n){var r=t.pendingProps,i=Me.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ie(Me,i&1),e===null)return Th(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Uc(s,r,0,null),e=bi(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ah(n),t.memoizedState=Nh,e):Em(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ak(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ur(a,o):(o=bi(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ah(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Nh,r}return o=e.child,e=o.sibling,r=Ur(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Em(e,t){return t=Uc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gl(e,t,n,r){return r!==null&&am(r),Yo(t,e.child,null,n),e=Em(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ak(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=pf(Error(N(422))),Gl(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Uc({mode:"visible",children:r.children},i,0,null),o=bi(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Yo(t,e.child,null,s),t.child.memoizedState=Ah(s),t.memoizedState=Nh,o);if(!(t.mode&1))return Gl(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(N(419)),r=pf(o,r,void 0),Gl(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ot||a){if(r=ut,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,sr(e,i),xn(r,e,i,-1))}return km(),r=pf(Error(N(421))),Gl(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ht=Mr(i.nextSibling),qt=t,De=!0,wn=null,e!==null&&(ln[un++]=qn,ln[un++]=Qn,ln[un++]=Di,qn=e.id,Qn=e.overflow,Di=t),t=Em(t,r.children),t.flags|=4096,t)}function lv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ih(e.return,t,n)}function mf(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function V1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xt(e,t,r.children,n),r=Me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lv(e,n,t);else if(e.tag===19)lv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ie(Me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),mf(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}mf(t,!0,n,null,o);break;case"together":mf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ar(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Ur(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ur(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ok(e,t,n){switch(t.tag){case 3:B1(t),Ko();break;case 5:y1(t);break;case 1:Mt(t.type)&&Mu(t);break;case 4:hm(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ie($u,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Me,Me.current&1),t.flags|=128,null):n&t.child.childLanes?W1(e,t,n):(Ie(Me,Me.current&1),e=ar(e,t,n),e!==null?e.sibling:null);Ie(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return V1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,U1(e,t,n)}return ar(e,t,n)}var H1,Oh,G1,K1;H1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oh=function(){};G1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ei(jn.current);var o=null;switch(n){case"input":i=th(e,i),r=th(e,r),o=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),o=[];break;case"textarea":i=ih(e,i),r=ih(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Du)}sh(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Sa.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ke("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};K1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fs(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dk(e,t,n){var r=t.pendingProps;switch(sm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(t),null;case 1:return Mt(t.type)&&Lu(),Et(t),null;case 3:return r=t.stateNode,qo(),Ne(Lt),Ne(Tt),mm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wn!==null&&(zh(wn),wn=null))),Oh(e,t),Et(t),null;case 5:pm(t);var i=Ei(Da.current);if(n=t.type,e!==null&&t.stateNode!=null)G1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Et(t),null}if(e=Ei(jn.current),Vl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Mn]=t,r[Aa]=o,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<ea.length;i++)ke(ea[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":yy(r,o),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ke("invalid",r);break;case"textarea":_y(r,o),ke("invalid",r)}sh(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Wl(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Wl(r.textContent,a,e),i=["children",""+a]):Sa.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ke("scroll",r)}switch(n){case"input":Ll(r),vy(r,o,!0);break;case"textarea":Ll(r),wy(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Du)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ww(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Mn]=t,e[Aa]=r,H1(e,t,!1,!1),t.stateNode=e;e:{switch(s=ah(n,r),n){case"dialog":ke("cancel",e),ke("close",e),i=r;break;case"iframe":case"object":case"embed":ke("load",e),i=r;break;case"video":case"audio":for(i=0;i<ea.length;i++)ke(ea[i],e);i=r;break;case"source":ke("error",e),i=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=r;break;case"details":ke("toggle",e),i=r;break;case"input":yy(e,r),i=th(e,r),ke("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),ke("invalid",e);break;case"textarea":_y(e,r),i=ih(e,r),ke("invalid",e);break;default:i=r}sh(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Cw(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ew(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ca(e,l):typeof l=="number"&&Ca(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Sa.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ke("scroll",e):l!=null&&Hp(e,o,l,s))}switch(n){case"input":Ll(e),vy(e,r,!1);break;case"textarea":Ll(e),wy(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Do(e,!!r.multiple,o,!1):r.defaultValue!=null&&Do(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Du)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Et(t),null;case 6:if(e&&t.stateNode!=null)K1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Ei(Da.current),Ei(jn.current),Vl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mn]=t,(o=r.nodeValue!==n)&&(e=qt,e!==null))switch(e.tag){case 3:Wl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wl(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mn]=t,t.stateNode=r}return Et(t),null;case 13:if(Ne(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Ht!==null&&t.mode&1&&!(t.flags&128))c1(),Ko(),t.flags|=98560,o=!1;else if(o=Vl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[Mn]=t}else Ko(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Et(t),o=!1}else wn!==null&&(zh(wn),wn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Je===0&&(Je=3):km())),t.updateQueue!==null&&(t.flags|=4),Et(t),null);case 4:return qo(),Oh(e,t),e===null&&Pa(t.stateNode.containerInfo),Et(t),null;case 10:return cm(t.type._context),Et(t),null;case 17:return Mt(t.type)&&Lu(),Et(t),null;case 19:if(Ne(Me),o=t.memoizedState,o===null)return Et(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Fs(o,!1);else{if(Je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Bu(e),s!==null){for(t.flags|=128,Fs(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ie(Me,Me.current&1|2),t.child}e=e.sibling}o.tail!==null&&He()>Xo&&(t.flags|=128,r=!0,Fs(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bu(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!De)return Et(t),null}else 2*He()-o.renderingStartTime>Xo&&n!==1073741824&&(t.flags|=128,r=!0,Fs(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=He(),t.sibling=null,n=Me.current,Ie(Me,r?n&1|2:n&1),t):(Et(t),null);case 22:case 23:return xm(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Vt&1073741824&&(Et(t),t.subtreeFlags&6&&(t.flags|=8192)):Et(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Lk(e,t){switch(sm(t),t.tag){case 1:return Mt(t.type)&&Lu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qo(),Ne(Lt),Ne(Tt),mm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pm(t),null;case 13:if(Ne(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Ko()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Me),null;case 4:return qo(),null;case 10:return cm(t.type._context),null;case 22:case 23:return xm(),null;case 24:return null;default:return null}}var Kl=!1,St=!1,Mk=typeof WeakSet=="function"?WeakSet:Set,$=null;function ko(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(e,t,r)}else n.current=null}function Dh(e,t,n){try{n()}catch(r){Be(e,t,r)}}var uv=!1;function Fk(e,t){if(yh=Nu,e=Xw(),im(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++c===r&&(l=s),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vh={focusedElem:e,selectionRange:n},Nu=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,E=y.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:yn(t.type,_),E);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(C){Be(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return y=uv,uv=!1,y}function da(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Dh(t,n,o)}i=i.next}while(i!==r)}}function jc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Lh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Y1(e){var t=e.alternate;t!==null&&(e.alternate=null,Y1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mn],delete t[Aa],delete t[Eh],delete t[_k],delete t[wk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function q1(e){return e.tag===5||e.tag===3||e.tag===4}function cv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||q1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Du));else if(r!==4&&(e=e.child,e!==null))for(Mh(e,t,n),e=e.sibling;e!==null;)Mh(e,t,n),e=e.sibling}function Fh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fh(e,t,n),e=e.sibling;e!==null;)Fh(e,t,n),e=e.sibling}var pt=null,vn=!1;function _r(e,t,n){for(n=n.child;n!==null;)Q1(e,t,n),n=n.sibling}function Q1(e,t,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:St||ko(n,t);case 6:var r=pt,i=vn;pt=null,_r(e,t,n),pt=r,vn=i,pt!==null&&(vn?(e=pt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(vn?(e=pt,n=n.stateNode,e.nodeType===8?lf(e.parentNode,n):e.nodeType===1&&lf(e,n),ka(e)):lf(pt,n.stateNode));break;case 4:r=pt,i=vn,pt=n.stateNode.containerInfo,vn=!0,_r(e,t,n),pt=r,vn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Dh(n,t,s),i=i.next}while(i!==r)}_r(e,t,n);break;case 1:if(!St&&(ko(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Be(n,t,a)}_r(e,t,n);break;case 21:_r(e,t,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,_r(e,t,n),St=r):_r(e,t,n);break;default:_r(e,t,n)}}function dv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mk),t.forEach(function(r){var i=Gk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,vn=!1;break e;case 3:pt=a.stateNode.containerInfo,vn=!0;break e;case 4:pt=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(pt===null)throw Error(N(160));Q1(o,s,i),pt=null,vn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Be(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)X1(t,e),t=t.sibling}function X1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mn(t,e),On(e),r&4){try{da(3,e,e.return),jc(3,e)}catch(_){Be(e,e.return,_)}try{da(5,e,e.return)}catch(_){Be(e,e.return,_)}}break;case 1:mn(t,e),On(e),r&512&&n!==null&&ko(n,n.return);break;case 5:if(mn(t,e),On(e),r&512&&n!==null&&ko(n,n.return),e.flags&32){var i=e.stateNode;try{Ca(i,"")}catch(_){Be(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&vw(i,o),ah(a,s);var u=ah(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?Cw(i,d):c==="dangerouslySetInnerHTML"?Ew(i,d):c==="children"?Ca(i,d):Hp(i,c,d,u)}switch(a){case"input":nh(i,o);break;case"textarea":_w(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Do(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Do(i,!!o.multiple,o.defaultValue,!0):Do(i,!!o.multiple,o.multiple?[]:"",!1))}i[Aa]=o}catch(_){Be(e,e.return,_)}}break;case 6:if(mn(t,e),On(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){Be(e,e.return,_)}}break;case 3:if(mn(t,e),On(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(t.containerInfo)}catch(_){Be(e,e.return,_)}break;case 4:mn(t,e),On(e);break;case 13:mn(t,e),On(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tm=He())),r&4&&dv(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(St=(u=St)||c,mn(t,e),St=u):mn(t,e),On(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for($=e,c=e.child;c!==null;){for(d=$=c;$!==null;){switch(f=$,m=f.child,f.tag){case 0:case 11:case 14:case 15:da(4,f,f.return);break;case 1:ko(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){Be(r,n,_)}}break;case 5:ko(f,f.return);break;case 22:if(f.memoizedState!==null){hv(d);continue}}m!==null?(m.return=f,$=m):hv(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sw("display",s))}catch(_){Be(e,e.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Be(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mn(t,e),On(e),r&4&&dv(e);break;case 21:break;default:mn(t,e),On(e)}}function On(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(q1(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ca(i,""),r.flags&=-33);var o=cv(e);Fh(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=cv(e);Mh(e,a,s);break;default:throw Error(N(161))}}catch(l){Be(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jk(e,t,n){$=e,J1(e)}function J1(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Kl;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||St;a=Kl;var u=St;if(Kl=s,(St=l)&&!u)for($=i;$!==null;)s=$,l=s.child,s.tag===22&&s.memoizedState!==null?pv(i):l!==null?(l.return=s,$=l):pv(i);for(;o!==null;)$=o,J1(o),o=o.sibling;$=i,Kl=a,St=u}fv(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):fv(e)}}function fv(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:St||jc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:yn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&qy(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qy(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ka(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}St||t.flags&512&&Lh(t)}catch(f){Be(t,t.return,f)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function hv(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function pv(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jc(4,t)}catch(l){Be(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Be(t,i,l)}}var o=t.return;try{Lh(t)}catch(l){Be(t,o,l)}break;case 5:var s=t.return;try{Lh(t)}catch(l){Be(t,s,l)}}}catch(l){Be(t,t.return,l)}if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}var $k=Math.ceil,Hu=hr.ReactCurrentDispatcher,Sm=hr.ReactCurrentOwner,dn=hr.ReactCurrentBatchConfig,de=0,ut=null,Ye=null,mt=0,Vt=0,bo=ni(0),Je=0,ja=null,Mi=0,$c=0,Cm=0,fa=null,Nt=null,Tm=0,Xo=1/0,Gn=null,Gu=!1,jh=null,jr=null,Yl=!1,Ar=null,Ku=0,ha=0,$h=null,hu=-1,pu=0;function bt(){return de&6?He():hu!==-1?hu:hu=He()}function $r(e){return e.mode&1?de&2&&mt!==0?mt&-mt:Sk.transition!==null?(pu===0&&(pu=Lw()),pu):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Bw(e.type)),e):1}function xn(e,t,n,r){if(50<ha)throw ha=0,$h=null,Error(N(185));ul(e,n,r),(!(de&2)||e!==ut)&&(e===ut&&(!(de&2)&&($c|=n),Je===4&&xr(e,mt)),Ft(e,r),n===1&&de===0&&!(t.mode&1)&&(Xo=He()+500,Lc&&ri()))}function Ft(e,t){var n=e.callbackNode;Sx(e,t);var r=Pu(e,e===ut?mt:0);if(r===0)n!==null&&Cy(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cy(n),t===1)e.tag===0?Ek(mv.bind(null,e)):a1(mv.bind(null,e)),yk(function(){!(de&6)&&ri()}),n=null;else{switch(Mw(r)){case 1:n=Qp;break;case 4:n=Ow;break;case 16:n=Ru;break;case 536870912:n=Dw;break;default:n=Ru}n=sE(n,Z1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Z1(e,t){if(hu=-1,pu=0,de&6)throw Error(N(327));var n=e.callbackNode;if($o()&&e.callbackNode!==n)return null;var r=Pu(e,e===ut?mt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yu(e,r);else{t=r;var i=de;de|=2;var o=tE();(ut!==e||mt!==t)&&(Gn=null,Xo=He()+500,ki(e,t));do try{Bk();break}catch(a){eE(e,a)}while(!0);um(),Hu.current=o,de=i,Ye!==null?t=0:(ut=null,mt=0,t=Je)}if(t!==0){if(t===2&&(i=fh(e),i!==0&&(r=i,t=Uh(e,i))),t===1)throw n=ja,ki(e,0),xr(e,r),Ft(e,He()),n;if(t===6)xr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Uk(i)&&(t=Yu(e,r),t===2&&(o=fh(e),o!==0&&(r=o,t=Uh(e,o))),t===1))throw n=ja,ki(e,0),xr(e,r),Ft(e,He()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:hi(e,Nt,Gn);break;case 3:if(xr(e,r),(r&130023424)===r&&(t=Tm+500-He(),10<t)){if(Pu(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){bt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wh(hi.bind(null,e,Nt,Gn),t);break}hi(e,Nt,Gn);break;case 4:if(xr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-In(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$k(r/1960))-r,10<r){e.timeoutHandle=wh(hi.bind(null,e,Nt,Gn),r);break}hi(e,Nt,Gn);break;case 5:hi(e,Nt,Gn);break;default:throw Error(N(329))}}}return Ft(e,He()),e.callbackNode===n?Z1.bind(null,e):null}function Uh(e,t){var n=fa;return e.current.memoizedState.isDehydrated&&(ki(e,t).flags|=256),e=Yu(e,t),e!==2&&(t=Nt,Nt=n,t!==null&&zh(t)),e}function zh(e){Nt===null?Nt=e:Nt.push.apply(Nt,e)}function Uk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Rn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xr(e,t){for(t&=~Cm,t&=~$c,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-In(t),r=1<<n;e[n]=-1,t&=~r}}function mv(e){if(de&6)throw Error(N(327));$o();var t=Pu(e,0);if(!(t&1))return Ft(e,He()),null;var n=Yu(e,t);if(e.tag!==0&&n===2){var r=fh(e);r!==0&&(t=r,n=Uh(e,r))}if(n===1)throw n=ja,ki(e,0),xr(e,t),Ft(e,He()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hi(e,Nt,Gn),Ft(e,He()),null}function Im(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(Xo=He()+500,Lc&&ri())}}function Fi(e){Ar!==null&&Ar.tag===0&&!(de&6)&&$o();var t=de;de|=1;var n=dn.transition,r=ge;try{if(dn.transition=null,ge=1,e)return e()}finally{ge=r,dn.transition=n,de=t,!(de&6)&&ri()}}function xm(){Vt=bo.current,Ne(bo)}function ki(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gk(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(sm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lu();break;case 3:qo(),Ne(Lt),Ne(Tt),mm();break;case 5:pm(r);break;case 4:qo();break;case 13:Ne(Me);break;case 19:Ne(Me);break;case 10:cm(r.type._context);break;case 22:case 23:xm()}n=n.return}if(ut=e,Ye=e=Ur(e.current,null),mt=Vt=t,Je=0,ja=null,Cm=$c=Mi=0,Nt=fa=null,wi!==null){for(t=0;t<wi.length;t++)if(n=wi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}wi=null}return e}function eE(e,t){do{var n=Ye;try{if(um(),cu.current=Vu,Wu){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wu=!1}if(Li=0,it=qe=je=null,ca=!1,La=0,Sm.current=null,n===null||n.return===null){Je=1,ja=t,Ye=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=mt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=nv(s);if(m!==null){m.flags&=-257,rv(m,s,a,o,t),m.mode&1&&tv(o,u,t),t=m,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){tv(o,u,t),km();break e}l=Error(N(426))}}else if(De&&a.mode&1){var E=nv(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),rv(E,s,a,o,t),am(Qo(l,a));break e}}o=l=Qo(l,a),Je!==4&&(Je=2),fa===null?fa=[o]:fa.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=F1(o,l,t);Yy(o,p);break e;case 1:a=l;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(jr===null||!jr.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=j1(o,a,t);Yy(o,C);break e}}o=o.return}while(o!==null)}rE(n)}catch(b){t=b,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(!0)}function tE(){var e=Hu.current;return Hu.current=Vu,e===null?Vu:e}function km(){(Je===0||Je===3||Je===2)&&(Je=4),ut===null||!(Mi&268435455)&&!($c&268435455)||xr(ut,mt)}function Yu(e,t){var n=de;de|=2;var r=tE();(ut!==e||mt!==t)&&(Gn=null,ki(e,t));do try{zk();break}catch(i){eE(e,i)}while(!0);if(um(),de=n,Hu.current=r,Ye!==null)throw Error(N(261));return ut=null,mt=0,Je}function zk(){for(;Ye!==null;)nE(Ye)}function Bk(){for(;Ye!==null&&!hx();)nE(Ye)}function nE(e){var t=oE(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?rE(e):Ye=t,Sm.current=null}function rE(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lk(n,t),n!==null){n.flags&=32767,Ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Je=6,Ye=null;return}}else if(n=Dk(n,t,Vt),n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Je===0&&(Je=5)}function hi(e,t,n){var r=ge,i=dn.transition;try{dn.transition=null,ge=1,Wk(e,t,n,r)}finally{dn.transition=i,ge=r}return null}function Wk(e,t,n,r){do $o();while(Ar!==null);if(de&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Cx(e,o),e===ut&&(Ye=ut=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yl||(Yl=!0,sE(Ru,function(){return $o(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dn.transition,dn.transition=null;var s=ge;ge=1;var a=de;de|=4,Sm.current=null,Fk(e,n),X1(n,e),uk(vh),Nu=!!yh,vh=yh=null,e.current=n,jk(n),px(),de=a,ge=s,dn.transition=o}else e.current=n;if(Yl&&(Yl=!1,Ar=e,Ku=i),o=e.pendingLanes,o===0&&(jr=null),yx(n.stateNode),Ft(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gu)throw Gu=!1,e=jh,jh=null,e;return Ku&1&&e.tag!==0&&$o(),o=e.pendingLanes,o&1?e===$h?ha++:(ha=0,$h=e):ha=0,ri(),null}function $o(){if(Ar!==null){var e=Mw(Ku),t=dn.transition,n=ge;try{if(dn.transition=null,ge=16>e?16:e,Ar===null)var r=!1;else{if(e=Ar,Ar=null,Ku=0,de&6)throw Error(N(331));var i=de;for(de|=4,$=e.current;$!==null;){var o=$,s=o.child;if($.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:da(8,c,o)}var d=c.child;if(d!==null)d.return=c,$=d;else for(;$!==null;){c=$;var f=c.sibling,m=c.return;if(Y1(c),c===u){$=null;break}if(f!==null){f.return=m,$=f;break}$=m}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}$=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,$=s;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:da(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,$=p;break e}$=o.return}}var h=e.current;for($=h;$!==null;){s=$;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,$=g;else e:for(s=h;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jc(9,a)}}catch(b){Be(a,a.return,b)}if(a===s){$=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,$=C;break e}$=a.return}}if(de=i,ri(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(Pc,e)}catch{}r=!0}return r}finally{ge=n,dn.transition=t}}return!1}function gv(e,t,n){t=Qo(n,t),t=F1(e,t,1),e=Fr(e,t,1),t=bt(),e!==null&&(ul(e,1,t),Ft(e,t))}function Be(e,t,n){if(e.tag===3)gv(e,e,n);else for(;t!==null;){if(t.tag===3){gv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){e=Qo(n,e),e=j1(t,e,1),t=Fr(t,e,1),e=bt(),t!==null&&(ul(t,1,e),Ft(t,e));break}}t=t.return}}function Vk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=bt(),e.pingedLanes|=e.suspendedLanes&n,ut===e&&(mt&n)===n&&(Je===4||Je===3&&(mt&130023424)===mt&&500>He()-Tm?ki(e,0):Cm|=n),Ft(e,t)}function iE(e,t){t===0&&(e.mode&1?(t=jl,jl<<=1,!(jl&130023424)&&(jl=4194304)):t=1);var n=bt();e=sr(e,t),e!==null&&(ul(e,t,n),Ft(e,n))}function Hk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),iE(e,n)}function Gk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),iE(e,n)}var oE;oE=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Lt.current)Ot=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ot=!1,Ok(e,t,n);Ot=!!(e.flags&131072)}else Ot=!1,De&&t.flags&1048576&&l1(t,ju,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fu(e,t),e=t.pendingProps;var i=Go(t,Tt.current);jo(t,n),i=ym(null,t,r,e,i,n);var o=vm();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mt(r)?(o=!0,Mu(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fm(t),i.updater=Mc,t.stateNode=i,i._reactInternals=t,kh(t,r,e,n),t=Ph(null,t,r,!0,o,n)):(t.tag=0,De&&o&&om(t),xt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Yk(r),e=yn(r,e),i){case 0:t=Rh(null,t,r,e,n);break e;case 1:t=sv(null,t,r,e,n);break e;case 11:t=iv(null,t,r,e,n);break e;case 14:t=ov(null,t,r,yn(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yn(r,i),Rh(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yn(r,i),sv(e,t,r,i,n);case 3:e:{if(B1(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,i=o.element,f1(e,t),zu(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qo(Error(N(423)),t),t=av(e,t,r,n,i);break e}else if(r!==i){i=Qo(Error(N(424)),t),t=av(e,t,r,n,i);break e}else for(Ht=Mr(t.stateNode.containerInfo.firstChild),qt=t,De=!0,wn=null,n=g1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ko(),r===i){t=ar(e,t,n);break e}xt(e,t,r,n)}t=t.child}return t;case 5:return y1(t),e===null&&Th(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,_h(r,i)?s=null:o!==null&&_h(r,o)&&(t.flags|=32),z1(e,t),xt(e,t,s,n),t.child;case 6:return e===null&&Th(t),null;case 13:return W1(e,t,n);case 4:return hm(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yo(t,null,r,n):xt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yn(r,i),iv(e,t,r,i,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ie($u,r._currentValue),r._currentValue=s,o!==null)if(Rn(o.value,s)){if(o.children===i.children&&!Lt.current){t=ar(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=er(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ih(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ih(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}xt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jo(t,n),i=fn(i),r=r(i),t.flags|=1,xt(e,t,r,n),t.child;case 14:return r=t.type,i=yn(r,t.pendingProps),i=yn(r.type,i),ov(e,t,r,i,n);case 15:return $1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yn(r,i),fu(e,t),t.tag=1,Mt(r)?(e=!0,Mu(t)):e=!1,jo(t,n),p1(t,r,i),kh(t,r,i,n),Ph(null,t,r,!0,e,n);case 19:return V1(e,t,n);case 22:return U1(e,t,n)}throw Error(N(156,t.tag))};function sE(e,t){return Aw(e,t)}function Kk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,t,n,r){return new Kk(e,t,n,r)}function bm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yk(e){if(typeof e=="function")return bm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kp)return 11;if(e===Yp)return 14}return 2}function Ur(e,t){var n=e.alternate;return n===null?(n=cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mu(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")bm(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case vo:return bi(n.children,i,o,t);case Gp:s=8,i|=8;break;case Xf:return e=cn(12,n,t,i|2),e.elementType=Xf,e.lanes=o,e;case Jf:return e=cn(13,n,t,i),e.elementType=Jf,e.lanes=o,e;case Zf:return e=cn(19,n,t,i),e.elementType=Zf,e.lanes=o,e;case mw:return Uc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hw:s=10;break e;case pw:s=9;break e;case Kp:s=11;break e;case Yp:s=14;break e;case Cr:s=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=cn(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=cn(7,e,r,t),e.lanes=n,e}function Uc(e,t,n,r){return e=cn(22,e,r,t),e.elementType=mw,e.lanes=n,e.stateNode={isHidden:!1},e}function gf(e,t,n){return e=cn(6,e,null,t),e.lanes=n,e}function yf(e,t,n){return t=cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qd(0),this.expirationTimes=Qd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rm(e,t,n,r,i,o,s,a,l){return e=new qk(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=cn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fm(o),e}function Qk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function aE(e){if(!e)return Yr;e=e._reactInternals;e:{if(Zi(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Mt(n))return s1(e,n,t)}return t}function lE(e,t,n,r,i,o,s,a,l){return e=Rm(n,r,!0,e,i,o,s,a,l),e.context=aE(null),n=e.current,r=bt(),i=$r(n),o=er(r,i),o.callback=t??null,Fr(n,o,i),e.current.lanes=i,ul(e,i,r),Ft(e,r),e}function zc(e,t,n,r){var i=t.current,o=bt(),s=$r(i);return n=aE(n),t.context===null?t.context=n:t.pendingContext=n,t=er(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fr(i,t,s),e!==null&&(xn(e,i,s,o),uu(e,i,s)),s}function qu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pm(e,t){yv(e,t),(e=e.alternate)&&yv(e,t)}function Xk(){return null}var uE=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nm(e){this._internalRoot=e}Bc.prototype.render=Nm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));zc(e,t,null,null)};Bc.prototype.unmount=Nm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fi(function(){zc(null,e,null,null)}),t[or]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var t=$w();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ir.length&&t!==0&&t<Ir[n].priority;n++);Ir.splice(n,0,e),n===0&&zw(e)}};function Am(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vv(){}function Jk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=qu(s);o.call(u)}}var s=lE(t,r,e,0,null,!1,!1,"",vv);return e._reactRootContainer=s,e[or]=s.current,Pa(e.nodeType===8?e.parentNode:e),Fi(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=qu(l);a.call(u)}}var l=Rm(e,0,!1,null,null,!1,!1,"",vv);return e._reactRootContainer=l,e[or]=l.current,Pa(e.nodeType===8?e.parentNode:e),Fi(function(){zc(t,l,n,r)}),l}function Vc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=qu(s);a.call(l)}}zc(t,s,e,i)}else s=Jk(n,t,e,i,r);return qu(s)}Fw=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zs(t.pendingLanes);n!==0&&(Xp(t,n|1),Ft(t,He()),!(de&6)&&(Xo=He()+500,ri()))}break;case 13:Fi(function(){var r=sr(e,1);if(r!==null){var i=bt();xn(r,e,1,i)}}),Pm(e,1)}};Jp=function(e){if(e.tag===13){var t=sr(e,134217728);if(t!==null){var n=bt();xn(t,e,134217728,n)}Pm(e,134217728)}};jw=function(e){if(e.tag===13){var t=$r(e),n=sr(e,t);if(n!==null){var r=bt();xn(n,e,t,r)}Pm(e,t)}};$w=function(){return ge};Uw=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};uh=function(e,t,n){switch(t){case"input":if(nh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Dc(r);if(!i)throw Error(N(90));yw(r),nh(r,i)}}}break;case"textarea":_w(e,n);break;case"select":t=n.value,t!=null&&Do(e,!!n.multiple,t,!1)}};xw=Im;kw=Fi;var Zk={usingClientEntryPoint:!1,Events:[dl,So,Dc,Tw,Iw,Im]},js={findFiberByHostInstance:_i,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},eb={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pw(e),e===null?null:e.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||Xk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{Pc=ql.inject(eb),Fn=ql}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zk;Zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Am(t))throw Error(N(200));return Qk(e,t,null,n)};Zt.createRoot=function(e,t){if(!Am(e))throw Error(N(299));var n=!1,r="",i=uE;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Rm(e,1,!1,null,null,n,!1,r,i),e[or]=t.current,Pa(e.nodeType===8?e.parentNode:e),new Nm(t)};Zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Pw(t),e=e===null?null:e.stateNode,e};Zt.flushSync=function(e){return Fi(e)};Zt.hydrate=function(e,t,n){if(!Wc(t))throw Error(N(200));return Vc(null,e,t,!0,n)};Zt.hydrateRoot=function(e,t,n){if(!Am(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=uE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=lE(t,null,e,1,n??null,i,!1,o,s),e[or]=t.current,Pa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bc(t)};Zt.render=function(e,t,n){if(!Wc(t))throw Error(N(200));return Vc(null,e,t,!1,n)};Zt.unmountComponentAtNode=function(e){if(!Wc(e))throw Error(N(40));return e._reactRootContainer?(Fi(function(){Vc(null,null,e,!1,function(){e._reactRootContainer=null,e[or]=null})}),!0):!1};Zt.unstable_batchedUpdates=Im;Zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wc(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Vc(e,t,n,!1,r)};Zt.version="18.2.0-next-9e3b772b8-20220608";function cE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cE)}catch(e){console.error(e)}}cE(),lw.exports=Zt;var Om=lw.exports;const tb=jp(Om),nb=X0({__proto__:null,default:tb},[Om]);var _v=Om;qf.createRoot=_v.createRoot,qf.hydrateRoot=_v.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function We(){return We=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},We.apply(this,arguments)}var Ve;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ve||(Ve={}));const wv="popstate";function rb(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return $a("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$i(i)}return ob(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ji(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ib(){return Math.random().toString(36).substr(2,8)}function Ev(e,t){return{usr:e.state,key:e.key,idx:t}}function $a(e,t,n,r){return n===void 0&&(n=null),We({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pr(t):t,{state:n,key:t&&t.key||r||ib()})}function $i(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ob(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ve.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(We({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=Ve.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:p})}function f(E,p){a=Ve.Push;let h=$a(_.location,E,p);n&&n(h,E),u=c()+1;let g=Ev(h,u),C=_.createHref(h);try{s.pushState(g,"",C)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(C)}o&&l&&l({action:a,location:_.location,delta:1})}function m(E,p){a=Ve.Replace;let h=$a(_.location,E,p);n&&n(h,E),u=c();let g=Ev(h,u),C=_.createHref(h);s.replaceState(g,"",C),o&&l&&l({action:a,location:_.location,delta:0})}function y(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:$i(E);return re(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let _={get action(){return a},get location(){return e(i,s)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(wv,d),l=E,()=>{i.removeEventListener(wv,d),l=null}},createHref(E){return t(i,E)},createURL:y,encodeLocation(E){let p=y(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:m,go(E){return s.go(E)}};return _}var ze;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ze||(ze={}));const sb=new Set(["lazy","caseSensitive","path","id","index","children"]);function ab(e){return e.index===!0}function Bh(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let s=[...n,o],a=typeof i.id=="string"?i.id:s.join("-");if(re(i.index!==!0||!i.children,"Cannot specify children on an index route"),re(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),ab(i)){let l=We({},i,t(i),{id:a});return r[a]=l,l}else{let l=We({},i,t(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Bh(i.children,t,s,r)),l}})}function Ro(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?pr(t):t,i=lr(r.pathname||"/",n);if(i==null)return null;let o=dE(e);ub(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=vb(o[a],wb(i));return s}function lb(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function dE(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=tr([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(re(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dE(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:gb(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of fE(o.path))i(o,s,l)}),t}function fE(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=fE(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function ub(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:yb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cb=/^:[\w-]+$/,db=3,fb=2,hb=1,pb=10,mb=-2,Sv=e=>e==="*";function gb(e,t){let n=e.split("/"),r=n.length;return n.some(Sv)&&(r+=mb),t&&(r+=fb),n.filter(i=>!Sv(i)).reduce((i,o)=>i+(cb.test(o)?db:o===""?hb:pb),r)}function yb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function vb(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Wh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:tr([i,c.pathname]),pathnameBase:Tb(tr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=tr([i,c.pathnameBase]))}return o}function Wh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_b(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:m}=c;if(f==="*"){let _=a[d]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[d];return m&&!y?u[f]=void 0:u[f]=Eb(y||"",f),u},{}),pathname:o,pathnameBase:s,pattern:e}}function _b(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ji(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function wb(e){try{return decodeURI(e)}catch(t){return ji(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Eb(e,t){try{return decodeURIComponent(e)}catch(n){return ji(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function lr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Sb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?pr(e):e;return{pathname:n?n.startsWith("/")?n:Cb(n,t):t,search:Ib(r),hash:xb(i)}}function Cb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dm(e,t){let n=hE(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Lm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=pr(e):(i=We({},e),re(!i.pathname||!i.pathname.includes("?"),vf("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),vf("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),vf("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=Sb(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const tr=e=>e.join("/").replace(/\/\/+/g,"/"),Tb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ib=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Mm{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function pE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const mE=["post","put","patch","delete"],kb=new Set(mE),bb=["get",...mE],Rb=new Set(bb),Pb=new Set([301,302,303,307,308]),Nb=new Set([307,308]),_f={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ab={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},$s={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},gE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ob=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),yE="remix-router-transitions";function Db(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;re(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let T=e.detectErrorBoundary;i=x=>({hasErrorBoundary:T(x)})}else i=Ob;let o={},s=Bh(e.routes,i,void 0,o),a,l=e.basename||"/",u=We({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),c=null,d=new Set,f=null,m=null,y=null,_=e.hydrationData!=null,E=Ro(s,e.history.location,l),p=null;if(E==null){let T=an(404,{pathname:e.history.location.pathname}),{matches:x,route:R}=Pv(s);E=x,p={[R.id]:T}}let h,g=E.some(T=>T.route.lazy),C=E.some(T=>T.route.loader);if(g)h=!1;else if(!C)h=!0;else if(u.v7_partialHydration){let T=e.hydrationData?e.hydrationData.loaderData:null,x=e.hydrationData?e.hydrationData.errors:null;h=E.every(R=>R.route.loader&&R.route.loader.hydrate!==!0&&(T&&T[R.route.id]!==void 0||x&&x[R.route.id]!==void 0))}else h=e.hydrationData!=null;let b,v={historyAction:e.history.action,location:e.history.location,matches:E,initialized:h,navigation:_f,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map,blockers:new Map},S=Ve.Pop,P=!1,O,U=!1,G=new Map,me=null,X=!1,Ee=!1,zt=[],nn=[],he=new Map,D=0,z=-1,V=new Map,J=new Set,Z=new Map,vt=new Map,xe=new Set,Le=new Map,Ae=new Map,dt=!1;function Nn(){if(c=e.history.listen(T=>{let{action:x,location:R,delta:L}=T;if(dt){dt=!1;return}ji(Ae.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=ly({currentLocation:v.location,nextLocation:R,historyAction:x});if(B&&L!=null){dt=!0,e.history.go(L*-1),lo(B,{state:"blocked",location:R,proceed(){lo(B,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),e.history.go(L)},reset(){let ie=new Map(v.blockers);ie.set(B,$s),Ue({blockers:ie})}});return}return Hn(x,R)}),n){Hb(t,G);let T=()=>Gb(t,G);t.addEventListener("pagehide",T),me=()=>t.removeEventListener("pagehide",T)}return v.initialized||Hn(Ve.Pop,v.location,{initialHydration:!0}),b}function rn(){c&&c(),me&&me(),d.clear(),O&&O.abort(),v.fetchers.forEach((T,x)=>ce(x)),v.blockers.forEach((T,x)=>Ps(x))}function yr(T){return d.add(T),()=>d.delete(T)}function Ue(T,x){x===void 0&&(x={}),v=We({},v,T);let R=[],L=[];u.v7_fetcherPersist&&v.fetchers.forEach((B,ie)=>{B.state==="idle"&&(xe.has(ie)?L.push(ie):R.push(ie))}),[...d].forEach(B=>B(v,{deletedFetchers:L,unstable_viewTransitionOpts:x.viewTransitionOpts,unstable_flushSync:x.flushSync===!0})),u.v7_fetcherPersist&&(R.forEach(B=>v.fetchers.delete(B)),L.forEach(B=>ce(B)))}function _t(T,x,R){var L,B;let{flushSync:ie}=R===void 0?{}:R,q=v.actionData!=null&&v.navigation.formMethod!=null&&_n(v.navigation.formMethod)&&v.navigation.state==="loading"&&((L=T.state)==null?void 0:L._isRedirect)!==!0,Y;x.actionData?Object.keys(x.actionData).length>0?Y=x.actionData:Y=null:q?Y=v.actionData:Y=null;let H=x.loaderData?Rv(v.loaderData,x.loaderData,x.matches||[],x.errors):v.loaderData,ue=v.blockers;ue.size>0&&(ue=new Map(ue),ue.forEach((Se,ft)=>ue.set(ft,$s)));let et=P===!0||v.navigation.formMethod!=null&&_n(v.navigation.formMethod)&&((B=T.state)==null?void 0:B._isRedirect)!==!0;a&&(s=a,a=void 0),X||S===Ve.Pop||(S===Ve.Push?e.history.push(T,T.state):S===Ve.Replace&&e.history.replace(T,T.state));let te;if(S===Ve.Pop){let Se=G.get(v.location.pathname);Se&&Se.has(T.pathname)?te={currentLocation:v.location,nextLocation:T}:G.has(T.pathname)&&(te={currentLocation:T,nextLocation:v.location})}else if(U){let Se=G.get(v.location.pathname);Se?Se.add(T.pathname):(Se=new Set([T.pathname]),G.set(v.location.pathname,Se)),te={currentLocation:v.location,nextLocation:T}}Ue(We({},x,{actionData:Y,loaderData:H,historyAction:S,location:T,initialized:!0,navigation:_f,revalidation:"idle",restoreScrollPosition:cy(T,x.matches||v.matches),preventScrollReset:et,blockers:ue}),{viewTransitionOpts:te,flushSync:ie===!0}),S=Ve.Pop,P=!1,U=!1,X=!1,Ee=!1,zt=[],nn=[]}async function bs(T,x){if(typeof T=="number"){e.history.go(T);return}let R=Vh(v.location,v.matches,l,u.v7_prependBasename,T,u.v7_relativeSplatPath,x==null?void 0:x.fromRouteId,x==null?void 0:x.relative),{path:L,submission:B,error:ie}=Cv(u.v7_normalizeFormMethod,!1,R,x),q=v.location,Y=$a(v.location,L,x&&x.state);Y=We({},Y,e.history.encodeLocation(Y));let H=x&&x.replace!=null?x.replace:void 0,ue=Ve.Push;H===!0?ue=Ve.Replace:H===!1||B!=null&&_n(B.formMethod)&&B.formAction===v.location.pathname+v.location.search&&(ue=Ve.Replace);let et=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,te=(x&&x.unstable_flushSync)===!0,Se=ly({currentLocation:q,nextLocation:Y,historyAction:ue});if(Se){lo(Se,{state:"blocked",location:Y,proceed(){lo(Se,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),bs(T,x)},reset(){let ft=new Map(v.blockers);ft.set(Se,$s),Ue({blockers:ft})}});return}return await Hn(ue,Y,{submission:B,pendingError:ie,preventScrollReset:et,replace:x&&x.replace,enableViewTransition:x&&x.unstable_viewTransition,flushSync:te})}function Ld(){if(F(),Ue({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Hn(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Hn(S||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Hn(T,x,R){O&&O.abort(),O=null,S=T,X=(R&&R.startUninterruptedRevalidation)===!0,kI(v.location,v.matches),P=(R&&R.preventScrollReset)===!0,U=(R&&R.enableViewTransition)===!0;let L=a||s,B=R&&R.overrideNavigation,ie=Ro(L,x,l),q=(R&&R.flushSync)===!0;if(!ie){let ft=an(404,{pathname:x.pathname}),{matches:on,route:tt}=Pv(L);Ud(),_t(x,{matches:on,loaderData:{},errors:{[tt.id]:ft}},{flushSync:q});return}if(v.initialized&&!Ee&&$b(v.location,x)&&!(R&&R.submission&&_n(R.submission.formMethod))){_t(x,{matches:ie},{flushSync:q});return}O=new AbortController;let Y=zs(e.history,x,O.signal,R&&R.submission),H,ue;if(R&&R.pendingError)ue={[pa(ie).route.id]:R.pendingError};else if(R&&R.submission&&_n(R.submission.formMethod)){let ft=await Md(Y,x,R.submission,ie,{replace:R.replace,flushSync:q});if(ft.shortCircuited)return;H=ft.pendingActionData,ue=ft.pendingActionError,B=wf(x,R.submission),q=!1,Y=new Request(Y.url,{signal:Y.signal})}let{shortCircuited:et,loaderData:te,errors:Se}=await Fd(Y,x,ie,B,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,R&&R.initialHydration===!0,q,H,ue);et||(O=null,_t(x,We({matches:ie},H?{actionData:H}:{},{loaderData:te,errors:Se})))}async function Md(T,x,R,L,B){B===void 0&&(B={}),F();let ie=Wb(x,R);Ue({navigation:ie},{flushSync:B.flushSync===!0});let q,Y=Gh(L,x);if(!Y.route.action&&!Y.route.lazy)q={type:ze.error,error:an(405,{method:T.method,pathname:x.pathname,routeId:Y.route.id})};else if(q=await Us("action",T,Y,L,o,i,l,u.v7_relativeSplatPath),T.signal.aborted)return{shortCircuited:!0};if(Ci(q)){let H;return B&&B.replace!=null?H=B.replace:H=q.location===v.location.pathname+v.location.search,await ui(v,q,{submission:R,replace:H}),{shortCircuited:!0}}if(Po(q)){let H=pa(L,Y.route.id);return(B&&B.replace)!==!0&&(S=Ve.Push),{pendingActionData:{},pendingActionError:{[H.route.id]:q.error}}}if(Si(q))throw an(400,{type:"defer-action"});return{pendingActionData:{[Y.route.id]:q.data}}}async function Fd(T,x,R,L,B,ie,q,Y,H,ue,et){let te=L||wf(x,B),Se=B||ie||Ov(te),ft=a||s,[on,tt]=Tv(e.history,v,R,Se,x,u.v7_partialHydration&&Y===!0,Ee,zt,nn,xe,Z,J,ft,l,ue,et);if(Ud(_e=>!(R&&R.some(Oe=>Oe.route.id===_e))||on&&on.some(Oe=>Oe.route.id===_e)),z=++D,on.length===0&&tt.length===0){let _e=ao();return _t(x,We({matches:R,loaderData:{},errors:et||null},ue?{actionData:ue}:{},_e?{fetchers:new Map(v.fetchers)}:{}),{flushSync:H}),{shortCircuited:!0}}if(!X&&(!u.v7_partialHydration||!Y)){tt.forEach(Oe=>{let An=v.fetchers.get(Oe.key),Al=Bs(void 0,An?An.data:void 0);v.fetchers.set(Oe.key,Al)});let _e=ue||v.actionData;Ue(We({navigation:te},_e?Object.keys(_e).length===0?{actionData:null}:{actionData:_e}:{},tt.length>0?{fetchers:new Map(v.fetchers)}:{}),{flushSync:H})}tt.forEach(_e=>{he.has(_e.key)&&Ze(_e.key),_e.controller&&he.set(_e.key,_e.controller)});let uo=()=>tt.forEach(_e=>Ze(_e.key));O&&O.signal.addEventListener("abort",uo);let{results:zd,loaderResults:co,fetcherResults:vr}=await k(v.matches,R,on,tt,T);if(T.signal.aborted)return{shortCircuited:!0};O&&O.signal.removeEventListener("abort",uo),tt.forEach(_e=>he.delete(_e.key));let ci=Nv(zd);if(ci){if(ci.idx>=on.length){let _e=tt[ci.idx-on.length].key;J.add(_e)}return await ui(v,ci.result,{replace:q}),{shortCircuited:!0}}let{loaderData:Bd,errors:Wd}=bv(v,R,on,co,et,tt,vr,Le);Le.forEach((_e,Oe)=>{_e.subscribe(An=>{(An||_e.done)&&Le.delete(Oe)})});let Vd=ao(),fo=Pl(z),Nl=Vd||fo||tt.length>0;return We({loaderData:Bd,errors:Wd},Nl?{fetchers:new Map(v.fetchers)}:{})}function jd(T,x,R,L){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");he.has(T)&&Ze(T);let B=(L&&L.unstable_flushSync)===!0,ie=a||s,q=Vh(v.location,v.matches,l,u.v7_prependBasename,R,u.v7_relativeSplatPath,x,L==null?void 0:L.relative),Y=Ro(ie,q,l);if(!Y){W(T,x,an(404,{pathname:q}),{flushSync:B});return}let{path:H,submission:ue,error:et}=Cv(u.v7_normalizeFormMethod,!0,q,L);if(et){W(T,x,et,{flushSync:B});return}let te=Gh(Y,H);if(P=(L&&L.preventScrollReset)===!0,ue&&_n(ue.formMethod)){Rs(T,x,H,te,Y,B,ue);return}Z.set(T,{routeId:x,path:H}),$d(T,x,H,te,Y,B,ue)}async function Rs(T,x,R,L,B,ie,q){if(F(),Z.delete(T),!L.route.action&&!L.route.lazy){let Oe=an(405,{method:q.formMethod,pathname:R,routeId:x});W(T,x,Oe,{flushSync:ie});return}let Y=v.fetchers.get(T);j(T,Vb(q,Y),{flushSync:ie});let H=new AbortController,ue=zs(e.history,R,H.signal,q);he.set(T,H);let et=D,te=await Us("action",ue,L,B,o,i,l,u.v7_relativeSplatPath);if(ue.signal.aborted){he.get(T)===H&&he.delete(T);return}if(u.v7_fetcherPersist&&xe.has(T)){if(Ci(te)||Po(te)){j(T,Er(void 0));return}}else{if(Ci(te))if(he.delete(T),z>et){j(T,Er(void 0));return}else return J.add(T),j(T,Bs(q)),ui(v,te,{fetcherSubmission:q});if(Po(te)){W(T,x,te.error);return}}if(Si(te))throw an(400,{type:"defer-action"});let Se=v.navigation.location||v.location,ft=zs(e.history,Se,H.signal),on=a||s,tt=v.navigation.state!=="idle"?Ro(on,v.navigation.location,l):v.matches;re(tt,"Didn't find any matches after fetcher action");let uo=++D;V.set(T,uo);let zd=Bs(q,te.data);v.fetchers.set(T,zd);let[co,vr]=Tv(e.history,v,tt,q,Se,!1,Ee,zt,nn,xe,Z,J,on,l,{[L.route.id]:te.data},void 0);vr.filter(Oe=>Oe.key!==T).forEach(Oe=>{let An=Oe.key,Al=v.fetchers.get(An),RI=Bs(void 0,Al?Al.data:void 0);v.fetchers.set(An,RI),he.has(An)&&Ze(An),Oe.controller&&he.set(An,Oe.controller)}),Ue({fetchers:new Map(v.fetchers)});let ci=()=>vr.forEach(Oe=>Ze(Oe.key));H.signal.addEventListener("abort",ci);let{results:Bd,loaderResults:Wd,fetcherResults:Vd}=await k(v.matches,tt,co,vr,ft);if(H.signal.aborted)return;H.signal.removeEventListener("abort",ci),V.delete(T),he.delete(T),vr.forEach(Oe=>he.delete(Oe.key));let fo=Nv(Bd);if(fo){if(fo.idx>=co.length){let Oe=vr[fo.idx-co.length].key;J.add(Oe)}return ui(v,fo.result)}let{loaderData:Nl,errors:_e}=bv(v,v.matches,co,Wd,void 0,vr,Vd,Le);if(v.fetchers.has(T)){let Oe=Er(te.data);v.fetchers.set(T,Oe)}Pl(uo),v.navigation.state==="loading"&&uo>z?(re(S,"Expected pending action"),O&&O.abort(),_t(v.navigation.location,{matches:tt,loaderData:Nl,errors:_e,fetchers:new Map(v.fetchers)})):(Ue({errors:_e,loaderData:Rv(v.loaderData,Nl,tt,_e),fetchers:new Map(v.fetchers)}),Ee=!1)}async function $d(T,x,R,L,B,ie,q){let Y=v.fetchers.get(T);j(T,Bs(q,Y?Y.data:void 0),{flushSync:ie});let H=new AbortController,ue=zs(e.history,R,H.signal);he.set(T,H);let et=D,te=await Us("loader",ue,L,B,o,i,l,u.v7_relativeSplatPath);if(Si(te)&&(te=await wE(te,ue.signal,!0)||te),he.get(T)===H&&he.delete(T),!ue.signal.aborted){if(xe.has(T)){j(T,Er(void 0));return}if(Ci(te))if(z>et){j(T,Er(void 0));return}else{J.add(T),await ui(v,te);return}if(Po(te)){W(T,x,te.error);return}re(!Si(te),"Unhandled fetcher deferred data"),j(T,Er(te.data))}}async function ui(T,x,R){let{submission:L,fetcherSubmission:B,replace:ie}=R===void 0?{}:R;x.revalidate&&(Ee=!0);let q=$a(T.location,x.location,{_isRedirect:!0});if(re(q,"Expected a location on the redirect navigation"),n){let Se=!1;if(x.reloadDocument)Se=!0;else if(gE.test(x.location)){const ft=e.history.createURL(x.location);Se=ft.origin!==t.location.origin||lr(ft.pathname,l)==null}if(Se){ie?t.location.replace(x.location):t.location.assign(x.location);return}}O=null;let Y=ie===!0?Ve.Replace:Ve.Push,{formMethod:H,formAction:ue,formEncType:et}=T.navigation;!L&&!B&&H&&ue&&et&&(L=Ov(T.navigation));let te=L||B;if(Nb.has(x.status)&&te&&_n(te.formMethod))await Hn(Y,q,{submission:We({},te,{formAction:x.location}),preventScrollReset:P});else{let Se=wf(q,L);await Hn(Y,q,{overrideNavigation:Se,fetcherSubmission:B,preventScrollReset:P})}}async function k(T,x,R,L,B){let ie=await Promise.all([...R.map(H=>Us("loader",B,H,x,o,i,l,u.v7_relativeSplatPath)),...L.map(H=>H.matches&&H.match&&H.controller?Us("loader",zs(e.history,H.path,H.controller.signal),H.match,H.matches,o,i,l,u.v7_relativeSplatPath):{type:ze.error,error:an(404,{pathname:H.path})})]),q=ie.slice(0,R.length),Y=ie.slice(R.length);return await Promise.all([Av(T,R,q,q.map(()=>B.signal),!1,v.loaderData),Av(T,L.map(H=>H.match),Y,L.map(H=>H.controller?H.controller.signal:null),!0)]),{results:ie,loaderResults:q,fetcherResults:Y}}function F(){Ee=!0,zt.push(...Ud()),Z.forEach((T,x)=>{he.has(x)&&(nn.push(x),Ze(x))})}function j(T,x,R){R===void 0&&(R={}),v.fetchers.set(T,x),Ue({fetchers:new Map(v.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function W(T,x,R,L){L===void 0&&(L={});let B=pa(v.matches,x);ce(T),Ue({errors:{[B.route.id]:R},fetchers:new Map(v.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function ee(T){return u.v7_fetcherPersist&&(vt.set(T,(vt.get(T)||0)+1),xe.has(T)&&xe.delete(T)),v.fetchers.get(T)||Ab}function ce(T){let x=v.fetchers.get(T);he.has(T)&&!(x&&x.state==="loading"&&V.has(T))&&Ze(T),Z.delete(T),V.delete(T),J.delete(T),xe.delete(T),v.fetchers.delete(T)}function Ge(T){if(u.v7_fetcherPersist){let x=(vt.get(T)||0)-1;x<=0?(vt.delete(T),xe.add(T)):vt.set(T,x)}else ce(T);Ue({fetchers:new Map(v.fetchers)})}function Ze(T){let x=he.get(T);re(x,"Expected fetch controller: "+T),x.abort(),he.delete(T)}function so(T){for(let x of T){let R=ee(x),L=Er(R.data);v.fetchers.set(x,L)}}function ao(){let T=[],x=!1;for(let R of J){let L=v.fetchers.get(R);re(L,"Expected fetcher: "+R),L.state==="loading"&&(J.delete(R),T.push(R),x=!0)}return so(T),x}function Pl(T){let x=[];for(let[R,L]of V)if(L<T){let B=v.fetchers.get(R);re(B,"Expected fetcher: "+R),B.state==="loading"&&(Ze(R),V.delete(R),x.push(R))}return so(x),x.length>0}function ay(T,x){let R=v.blockers.get(T)||$s;return Ae.get(T)!==x&&Ae.set(T,x),R}function Ps(T){v.blockers.delete(T),Ae.delete(T)}function lo(T,x){let R=v.blockers.get(T)||$s;re(R.state==="unblocked"&&x.state==="blocked"||R.state==="blocked"&&x.state==="blocked"||R.state==="blocked"&&x.state==="proceeding"||R.state==="blocked"&&x.state==="unblocked"||R.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+x.state);let L=new Map(v.blockers);L.set(T,x),Ue({blockers:L})}function ly(T){let{currentLocation:x,nextLocation:R,historyAction:L}=T;if(Ae.size===0)return;Ae.size>1&&ji(!1,"A router only supports one blocker at a time");let B=Array.from(Ae.entries()),[ie,q]=B[B.length-1],Y=v.blockers.get(ie);if(!(Y&&Y.state==="proceeding")&&q({currentLocation:x,nextLocation:R,historyAction:L}))return ie}function Ud(T){let x=[];return Le.forEach((R,L)=>{(!T||T(L))&&(R.cancel(),x.push(L),Le.delete(L))}),x}function xI(T,x,R){if(f=T,y=x,m=R||null,!_&&v.navigation===_f){_=!0;let L=cy(v.location,v.matches);L!=null&&Ue({restoreScrollPosition:L})}return()=>{f=null,y=null,m=null}}function uy(T,x){return m&&m(T,x.map(L=>lb(L,v.loaderData)))||T.key}function kI(T,x){if(f&&y){let R=uy(T,x);f[R]=y()}}function cy(T,x){if(f){let R=uy(T,x),L=f[R];if(typeof L=="number")return L}return null}function bI(T){o={},a=Bh(T,i,void 0,o)}return b={get basename(){return l},get future(){return u},get state(){return v},get routes(){return s},get window(){return t},initialize:Nn,subscribe:yr,enableScrollRestoration:xI,navigate:bs,fetch:jd,revalidate:Ld,createHref:T=>e.history.createHref(T),encodeLocation:T=>e.history.encodeLocation(T),getFetcher:ee,deleteFetcher:Ge,dispose:rn,getBlocker:ay,deleteBlocker:Ps,_internalFetchControllers:he,_internalActiveDeferreds:Le,_internalSetRoutes:bI},b}function Lb(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Vh(e,t,n,r,i,o,s,a){let l,u;if(s){l=[];for(let d of t)if(l.push(d),d.route.id===s){u=d;break}}else l=t,u=t[t.length-1];let c=Lm(i||".",Dm(l,o),lr(e.pathname,n)||e.pathname,a==="path");return i==null&&(c.search=e.search,c.hash=e.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Fm(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:tr([n,c.pathname])),$i(c)}function Cv(e,t,n,r){if(!r||!Lb(r))return{path:n};if(r.formMethod&&!Bb(r.formMethod))return{path:n,error:an(405,{method:r.formMethod})};let i=()=>({path:n,error:an(400,{type:"invalid-body"})}),o=r.formMethod||"get",s=e?o.toUpperCase():o.toLowerCase(),a=_E(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!_n(s))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,y)=>{let[_,E]=y;return""+m+_+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!_n(s))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}re(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Hh(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Hh(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=kv(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=kv(l)}catch{return i()}let c={formMethod:s,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(_n(c.formMethod))return{path:n,submission:c};let d=pr(n);return t&&d.search&&Fm(d.search)&&l.append("index",""),d.search="?"+l,{path:$i(d),submission:c}}function Mb(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Tv(e,t,n,r,i,o,s,a,l,u,c,d,f,m,y,_){let E=_?Object.values(_)[0]:y?Object.values(y)[0]:void 0,p=e.createURL(t.location),h=e.createURL(i),g=_?Object.keys(_)[0]:void 0,b=Mb(n,g).filter((S,P)=>{let{route:O}=S;if(O.lazy)return!0;if(O.loader==null)return!1;if(o)return O.loader.hydrate?!0:t.loaderData[O.id]===void 0&&(!t.errors||t.errors[O.id]===void 0);if(Fb(t.loaderData,t.matches[P],S)||a.some(me=>me===S.route.id))return!0;let U=t.matches[P],G=S;return Iv(S,We({currentUrl:p,currentParams:U.params,nextUrl:h,nextParams:G.params},r,{actionResult:E,defaultShouldRevalidate:s||p.pathname+p.search===h.pathname+h.search||p.search!==h.search||vE(U,G)}))}),v=[];return c.forEach((S,P)=>{if(o||!n.some(X=>X.route.id===S.routeId)||u.has(P))return;let O=Ro(f,S.path,m);if(!O){v.push({key:P,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let U=t.fetchers.get(P),G=Gh(O,S.path),me=!1;d.has(P)?me=!1:l.includes(P)?me=!0:U&&U.state!=="idle"&&U.data===void 0?me=s:me=Iv(G,We({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:E,defaultShouldRevalidate:s})),me&&v.push({key:P,routeId:S.routeId,path:S.path,matches:O,match:G,controller:new AbortController})}),[b,v]}function Fb(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function vE(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Iv(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function xv(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];re(i,"No route found in manifest");let o={};for(let s in r){let l=i[s]!==void 0&&s!=="hasErrorBoundary";ji(!l,'Route "'+i.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!l&&!sb.has(s)&&(o[s]=r[s])}Object.assign(i,o),Object.assign(i,We({},t(i),{lazy:void 0}))}async function Us(e,t,n,r,i,o,s,a,l){l===void 0&&(l={});let u,c,d,f=_=>{let E,p=new Promise((h,g)=>E=g);return d=()=>E(),t.signal.addEventListener("abort",d),Promise.race([_({request:t,params:n.params,context:l.requestContext}),p])};try{let _=n.route[e];if(n.route.lazy)if(_){let E,p=await Promise.all([f(_).catch(h=>{E=h}),xv(n.route,o,i)]);if(E)throw E;c=p[0]}else if(await xv(n.route,o,i),_=n.route[e],_)c=await f(_);else if(e==="action"){let E=new URL(t.url),p=E.pathname+E.search;throw an(405,{method:t.method,pathname:p,routeId:n.route.id})}else return{type:ze.data,data:void 0};else if(_)c=await f(_);else{let E=new URL(t.url),p=E.pathname+E.search;throw an(404,{pathname:p})}re(c!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(_){u=ze.error,c=_}finally{d&&t.signal.removeEventListener("abort",d)}if(zb(c)){let _=c.status;if(Pb.has(_)){let p=c.headers.get("Location");if(re(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!gE.test(p))p=Vh(new URL(t.url),r.slice(0,r.indexOf(n)+1),s,!0,p,a);else if(!l.isStaticRequest){let h=new URL(t.url),g=p.startsWith("//")?new URL(h.protocol+p):new URL(p),C=lr(g.pathname,s)!=null;g.origin===h.origin&&C&&(p=g.pathname+g.search+g.hash)}if(l.isStaticRequest)throw c.headers.set("Location",p),c;return{type:ze.redirect,status:_,location:p,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===ze.error?ze.error:ze.data,response:c};let E;try{let p=c.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?c.body==null?E=null:E=await c.json():E=await c.text()}catch(p){return{type:ze.error,error:p}}return u===ze.error?{type:u,error:new Mm(_,c.statusText,E),headers:c.headers}:{type:ze.data,data:E,statusCode:c.status,headers:c.headers}}if(u===ze.error)return{type:u,error:c};if(Ub(c)){var m,y;return{type:ze.deferred,deferredData:c,statusCode:(m=c.init)==null?void 0:m.status,headers:((y=c.init)==null?void 0:y.headers)&&new Headers(c.init.headers)}}return{type:ze.data,data:c}}function zs(e,t,n,r){let i=e.createURL(_E(t)).toString(),o={signal:n};if(r&&_n(r.formMethod)){let{formMethod:s,formEncType:a}=r;o.method=s.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(r.json)):a==="text/plain"?o.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?o.body=Hh(r.formData):o.body=r.formData}return new Request(i,o)}function Hh(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function kv(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function jb(e,t,n,r,i){let o={},s=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=t[d].route.id;if(re(!Ci(c),"Cannot handle redirect results in processLoaderData"),Po(c)){let m=pa(e,f),y=c.error;r&&(y=Object.values(r)[0],r=void 0),s=s||{},s[m.route.id]==null&&(s[m.route.id]=y),o[f]=void 0,l||(l=!0,a=pE(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else Si(c)?(i.set(f,c.deferredData),o[f]=c.deferredData.data):o[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(s=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:u}}function bv(e,t,n,r,i,o,s,a){let{loaderData:l,errors:u}=jb(t,n,r,i,a);for(let c=0;c<o.length;c++){let{key:d,match:f,controller:m}=o[c];re(s!==void 0&&s[c]!==void 0,"Did not find corresponding fetcher result");let y=s[c];if(!(m&&m.signal.aborted))if(Po(y)){let _=pa(e.matches,f==null?void 0:f.route.id);u&&u[_.route.id]||(u=We({},u,{[_.route.id]:y.error})),e.fetchers.delete(d)}else if(Ci(y))re(!1,"Unhandled fetcher revalidation redirect");else if(Si(y))re(!1,"Unhandled fetcher deferred data");else{let _=Er(y.data);e.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function Rv(e,t,n,r){let i=We({},t);for(let o of n){let s=o.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(i[s]=t[s]):e[s]!==void 0&&o.route.loader&&(i[s]=e[s]),r&&r.hasOwnProperty(s))break}return i}function pa(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Pv(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function an(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,s="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(s="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?a="defer() is not supported in actions":o==="invalid-body"&&(a="Unable to encode submission body")):e===403?(s="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",a='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Mm(e||500,s,new Error(a),!0)}function Nv(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Ci(n))return{result:n,idx:t}}}function _E(e){let t=typeof e=="string"?pr(e):e;return $i(We({},t,{hash:""}))}function $b(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Si(e){return e.type===ze.deferred}function Po(e){return e.type===ze.error}function Ci(e){return(e&&e.type)===ze.redirect}function Ub(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function zb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Bb(e){return Rb.has(e.toLowerCase())}function _n(e){return kb.has(e.toLowerCase())}async function Av(e,t,n,r,i,o){for(let s=0;s<n.length;s++){let a=n[s],l=t[s];if(!l)continue;let u=e.find(d=>d.route.id===l.route.id),c=u!=null&&!vE(u,l)&&(o&&o[l.route.id])!==void 0;if(Si(a)&&(i||c)){let d=r[s];re(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await wE(a,d,i).then(f=>{f&&(n[s]=f||n[s])})}}}async function wE(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ze.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ze.error,error:i}}return{type:ze.data,data:e.deferredData.data}}}function Fm(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Gh(e,t){let n=typeof t=="string"?pr(t).search:t.search;if(e[e.length-1].route.index&&Fm(n||""))return e[e.length-1];let r=hE(e);return r[r.length-1]}function Ov(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:s}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:s,text:void 0}}}function wf(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Wb(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Bs(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Vb(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Er(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Hb(e,t){try{let n=e.sessionStorage.getItem(yE);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function Gb(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(yE,JSON.stringify(n))}catch(r){ji(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ua(){return Ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ua.apply(this,arguments)}const hl=w.createContext(null),jm=w.createContext(null),ii=w.createContext(null),Hc=w.createContext(null),oi=w.createContext({outlet:null,matches:[],isDataRoute:!1}),EE=w.createContext(null);function Kb(e,t){let{relative:n}=t===void 0?{}:t;pl()||re(!1);let{basename:r,navigator:i}=w.useContext(ii),{hash:o,pathname:s,search:a}=Gc(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:tr([r,s])),i.createHref({pathname:l,search:a,hash:o})}function pl(){return w.useContext(Hc)!=null}function ys(){return pl()||re(!1),w.useContext(Hc).location}function SE(e){w.useContext(ii).static||w.useLayoutEffect(e)}function Yb(){let{isDataRoute:e}=w.useContext(oi);return e?aR():qb()}function qb(){pl()||re(!1);let e=w.useContext(hl),{basename:t,future:n,navigator:r}=w.useContext(ii),{matches:i}=w.useContext(oi),{pathname:o}=ys(),s=JSON.stringify(Dm(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return SE(()=>{a.current=!0}),w.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Lm(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:tr([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,s,o,e])}const Qb=w.createContext(null);function Xb(e){let t=w.useContext(oi).outlet;return t&&w.createElement(Qb.Provider,{value:e},t)}function Gc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(ii),{matches:i}=w.useContext(oi),{pathname:o}=ys(),s=JSON.stringify(Dm(i,r.v7_relativeSplatPath));return w.useMemo(()=>Lm(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Jb(e,t,n,r){pl()||re(!1);let{navigator:i}=w.useContext(ii),{matches:o}=w.useContext(oi),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=ys(),c;if(t){var d;let E=typeof t=="string"?pr(t):t;l==="/"||(d=E.pathname)!=null&&d.startsWith(l)||re(!1),c=E}else c=u;let f=c.pathname||"/",m=l==="/"?f:f.slice(l.length)||"/",y=Ro(e,{pathname:m}),_=rR(y&&y.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:tr([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:tr([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,n,r);return t&&_?w.createElement(Hc.Provider,{value:{location:Ua({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ve.Pop}},_):_}function Zb(){let e=IE(),t=pE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const eR=w.createElement(Zb,null);class tR extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(oi.Provider,{value:this.props.routeContext},w.createElement(EE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nR(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(hl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(oi.Provider,{value:t},r)}function rR(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||re(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:m}=n,y=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,f)=>{let m,y=!1,_=null,E=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||eR,l&&(u<0&&f===0?(lR("route-fallback",!1),y=!0,E=null):u===f&&(y=!0,E=d.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,f+1)),h=()=>{let g;return m?g=_:y?g=E:d.route.Component?g=w.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,w.createElement(nR,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?w.createElement(tR,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var CE=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(CE||{}),Qu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qu||{});function iR(e){let t=w.useContext(hl);return t||re(!1),t}function oR(e){let t=w.useContext(jm);return t||re(!1),t}function sR(e){let t=w.useContext(oi);return t||re(!1),t}function TE(e){let t=sR(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function IE(){var e;let t=w.useContext(EE),n=oR(Qu.UseRouteError),r=TE(Qu.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function aR(){let{router:e}=iR(CE.UseNavigateStable),t=TE(Qu.UseNavigateStable),n=w.useRef(!1);return SE(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ua({fromRouteId:t},o)))},[e,t])}const Dv={};function lR(e,t,n){!t&&!Dv[e]&&(Dv[e]=!0)}function uR(e){return Xb(e.context)}function cR(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ve.Pop,navigator:o,static:s=!1,future:a}=e;pl()&&re(!1);let l=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:o,static:s,future:Ua({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=pr(r));let{pathname:c="/",search:d="",hash:f="",state:m=null,key:y="default"}=r,_=w.useMemo(()=>{let E=lr(c,l);return E==null?null:{location:{pathname:E,search:d,hash:f,state:m,key:y},navigationType:i}},[l,c,d,f,m,y,i]);return _==null?null:w.createElement(ii.Provider,{value:u},w.createElement(Hc.Provider,{children:n,value:_}))}new Promise(()=>{});function dR(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:w.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:w.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:w.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jo.apply(this,arguments)}function xE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fR(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hR(e,t){return e.button===0&&(!t||t==="_self")&&!fR(e)}const pR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],mR=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],gR="6";try{window.__reactRouterVersion=gR}catch{}function yR(e,t){return Db({basename:t==null?void 0:t.basename,future:Jo({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:rb({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||vR(),routes:e,mapRouteProperties:dR,window:t==null?void 0:t.window}).initialize()}function vR(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Jo({},t,{errors:_R(t.errors)})),t}function _R(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Mm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let s=new o(i.message);s.stack="",n[r]=s}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const kE=w.createContext({isTransitioning:!1}),wR=w.createContext(new Map),ER="startTransition",Lv=Yf[ER],SR="flushSync",Mv=nb[SR];function CR(e){Lv?Lv(e):e()}function Ws(e){Mv?Mv(e):e()}let TR=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function IR(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=w.useState(n.state),[s,a]=w.useState(),[l,u]=w.useState({isTransitioning:!1}),[c,d]=w.useState(),[f,m]=w.useState(),[y,_]=w.useState(),E=w.useRef(new Map),{v7_startTransition:p}=r||{},h=w.useCallback(S=>{p?CR(S):S()},[p]),g=w.useCallback((S,P)=>{let{deletedFetchers:O,unstable_flushSync:U,unstable_viewTransitionOpts:G}=P;O.forEach(X=>E.current.delete(X)),S.fetchers.forEach((X,Ee)=>{X.data!==void 0&&E.current.set(Ee,X.data)});let me=n.window==null||typeof n.window.document.startViewTransition!="function";if(!G||me){U?Ws(()=>o(S)):h(()=>o(S));return}if(U){Ws(()=>{f&&(c&&c.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:G.currentLocation,nextLocation:G.nextLocation})});let X=n.window.document.startViewTransition(()=>{Ws(()=>o(S))});X.finished.finally(()=>{Ws(()=>{d(void 0),m(void 0),a(void 0),u({isTransitioning:!1})})}),Ws(()=>m(X));return}f?(c&&c.resolve(),f.skipTransition(),_({state:S,currentLocation:G.currentLocation,nextLocation:G.nextLocation})):(a(S),u({isTransitioning:!0,flushSync:!1,currentLocation:G.currentLocation,nextLocation:G.nextLocation}))},[n.window,f,c,E,h]);w.useLayoutEffect(()=>n.subscribe(g),[n,g]),w.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new TR)},[l]),w.useEffect(()=>{if(c&&s&&n.window){let S=s,P=c.promise,O=n.window.document.startViewTransition(async()=>{h(()=>o(S)),await P});O.finished.finally(()=>{d(void 0),m(void 0),a(void 0),u({isTransitioning:!1})}),m(O)}},[h,s,c,n.window]),w.useEffect(()=>{c&&s&&i.location.key===s.location.key&&c.resolve()},[c,f,i.location,s]),w.useEffect(()=>{!l.isTransitioning&&y&&(a(y.state),u({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),_(void 0))},[l.isTransitioning,y]),w.useEffect(()=>{},[]);let C=w.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:S=>n.navigate(S),push:(S,P,O)=>n.navigate(S,{state:P,preventScrollReset:O==null?void 0:O.preventScrollReset}),replace:(S,P,O)=>n.navigate(S,{replace:!0,state:P,preventScrollReset:O==null?void 0:O.preventScrollReset})}),[n]),b=n.basename||"/",v=w.useMemo(()=>({router:n,navigator:C,static:!1,basename:b}),[n,C,b]);return w.createElement(w.Fragment,null,w.createElement(hl.Provider,{value:v},w.createElement(jm.Provider,{value:i},w.createElement(wR.Provider,{value:E.current},w.createElement(kE.Provider,{value:l},w.createElement(cR,{basename:b,location:i.location,navigationType:i.historyAction,navigator:C,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?w.createElement(xR,{routes:n.routes,future:n.future,state:i}):t))))),null)}function xR(e){let{routes:t,future:n,state:r}=e;return Jb(t,void 0,r,n)}const kR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$m=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,f=xE(t,pR),{basename:m}=w.useContext(ii),y,_=!1;if(typeof u=="string"&&bR.test(u)&&(y=u,kR))try{let g=new URL(window.location.href),C=u.startsWith("//")?new URL(g.protocol+u):new URL(u),b=lr(C.pathname,m);C.origin===g.origin&&b!=null?u=b+C.search+C.hash:_=!0}catch{}let E=Kb(u,{relative:i}),p=NR(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(g){r&&r(g),g.defaultPrevented||p(g)}return w.createElement("a",Jo({},f,{href:y||E,onClick:_||o?r:h,ref:n,target:l}))}),RR=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,unstable_viewTransition:u,children:c}=t,d=xE(t,mR),f=Gc(l,{relative:d.relative}),m=ys(),y=w.useContext(jm),{navigator:_,basename:E}=w.useContext(ii),p=y!=null&&AR(f)&&u===!0,h=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,g=m.pathname,C=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(g=g.toLowerCase(),C=C?C.toLowerCase():null,h=h.toLowerCase()),C&&E&&(C=lr(C,E)||C);const b=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let v=g===h||!s&&g.startsWith(h)&&g.charAt(b)==="/",S=C!=null&&(C===h||!s&&C.startsWith(h)&&C.charAt(h.length)==="/"),P={isActive:v,isPending:S,isTransitioning:p},O=v?r:void 0,U;typeof o=="function"?U=o(P):U=[o,v?"active":null,S?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let G=typeof a=="function"?a(P):a;return w.createElement($m,Jo({},d,{"aria-current":O,className:U,ref:n,style:G,to:l,unstable_viewTransition:u}),typeof c=="function"?c(P):c)});var Kh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Kh||(Kh={}));var Fv;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Fv||(Fv={}));function PR(e){let t=w.useContext(hl);return t||re(!1),t}function NR(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Yb(),u=ys(),c=Gc(e,{relative:s});return w.useCallback(d=>{if(hR(d,n)){d.preventDefault();let f=r!==void 0?r:$i(u)===$i(c);l(e,{replace:f,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,c,r,i,n,e,o,s,a])}function AR(e,t){t===void 0&&(t={});let n=w.useContext(kE);n==null&&re(!1);let{basename:r}=PR(Kh.useViewTransitionState),i=Gc(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=lr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=lr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Wh(i.pathname,s)!=null||Wh(i.pathname,o)!=null}var bE={exports:{}},RE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=w;function OR(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var DR=typeof Object.is=="function"?Object.is:OR,LR=ml.useSyncExternalStore,MR=ml.useRef,FR=ml.useEffect,jR=ml.useMemo,$R=ml.useDebugValue;RE.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=MR(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=jR(function(){function l(m){if(!u){if(u=!0,c=m,m=r(m),i!==void 0&&s.hasValue){var y=s.value;if(i(y,m))return d=y}return d=m}if(y=d,DR(c,m))return y;var _=r(m);return i!==void 0&&i(y,_)?y:(c=m,d=_)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=LR(e,o[0],o[1]);return FR(function(){s.hasValue=!0,s.value=a},[a]),$R(a),a};bE.exports=RE;var UR=bE.exports,Gt="default"in Yf?At:Yf,jv=Symbol.for("react-redux-context"),$v=typeof globalThis<"u"?globalThis:{};function zR(){if(!Gt.createContext)return{};const e=$v[jv]??($v[jv]=new Map);let t=e.get(Gt.createContext);return t||(t=Gt.createContext(null),e.set(Gt.createContext,t)),t}var qr=zR(),BR=()=>{throw new Error("uSES not initialized!")};function Um(e=qr){return function(){return Gt.useContext(e)}}var PE=Um(),NE=BR,WR=e=>{NE=e},VR=(e,t)=>e===t;function HR(e=qr){const t=e===qr?PE:Um(e),n=(r,i={})=>{const{equalityFn:o=VR,devModeChecks:s={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=t();Gt.useRef(!0);const f=Gt.useCallback({[r.name](y){return r(y)}}[r.name],[r,c,s.stabilityCheck]),m=NE(l.addNestedSub,a.getState,u||a.getState,f,o);return Gt.useDebugValue(m),m};return Object.assign(n,{withTypes:()=>n}),n}var AE=HR();function GR(e){e()}function KR(){let e=null,t=null;return{clear(){e=null,t=null},notify(){GR(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Uv={notify(){},get:()=>[]};function YR(e,t){let n,r=Uv,i=0,o=!1;function s(_){c();const E=r.subscribe(_);let p=!1;return()=>{p||(p=!0,E(),d())}}function a(){r.notify()}function l(){y.onStateChange&&y.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=KR())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Uv)}function f(){o||(o=!0,c())}function m(){o&&(o=!1,d())}const y={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:m,getListeners:()=>r};return y}var qR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QR=qR?Gt.useLayoutEffect:Gt.useEffect;function XR({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:o="once"}){const s=Gt.useMemo(()=>{const u=YR(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:o}},[e,r,i,o]),a=Gt.useMemo(()=>e.getState(),[e]);QR(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,a]);const l=t||qr;return Gt.createElement(l.Provider,{value:s},n)}var JR=XR;function OE(e=qr){const t=e===qr?PE:Um(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var ZR=OE();function eP(e=qr){const t=e===qr?ZR:OE(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var gl=eP();WR(UR.useSyncExternalStoreWithSelector);var lt=function(){return lt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},lt.apply(this,arguments)};function za(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var be="-ms-",ma="-moz-",pe="-webkit-",DE="comm",Kc="rule",zm="decl",tP="@import",LE="@keyframes",nP="@layer",ME=Math.abs,Bm=String.fromCharCode,Yh=Object.assign;function rP(e,t){return ot(e,0)^45?(((t<<2^ot(e,0))<<2^ot(e,1))<<2^ot(e,2))<<2^ot(e,3):0}function FE(e){return e.trim()}function Kn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function gu(e,t,n){return e.indexOf(t,n)}function ot(e,t){return e.charCodeAt(t)|0}function Zo(e,t,n){return e.slice(t,n)}function Ln(e){return e.length}function jE(e){return e.length}function ta(e,t){return t.push(e),e}function iP(e,t){return e.map(t).join("")}function zv(e,t){return e.filter(function(n){return!Kn(n,t)})}var Yc=1,es=1,$E=0,pn=0,Ke=0,vs="";function qc(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Yc,column:es,length:s,return:"",siblings:a}}function Sr(e,t){return Yh(qc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function po(e){for(;e.root;)e=Sr(e.root,{children:[e]});ta(e,e.siblings)}function oP(){return Ke}function sP(){return Ke=pn>0?ot(vs,--pn):0,es--,Ke===10&&(es=1,Yc--),Ke}function kn(){return Ke=pn<$E?ot(vs,pn++):0,es++,Ke===10&&(es=1,Yc++),Ke}function Ri(){return ot(vs,pn)}function yu(){return pn}function Qc(e,t){return Zo(vs,e,t)}function qh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function aP(e){return Yc=es=1,$E=Ln(vs=e),pn=0,[]}function lP(e){return vs="",e}function Ef(e){return FE(Qc(pn-1,Qh(e===91?e+2:e===40?e+1:e)))}function uP(e){for(;(Ke=Ri())&&Ke<33;)kn();return qh(e)>2||qh(Ke)>3?"":" "}function cP(e,t){for(;--t&&kn()&&!(Ke<48||Ke>102||Ke>57&&Ke<65||Ke>70&&Ke<97););return Qc(e,yu()+(t<6&&Ri()==32&&kn()==32))}function Qh(e){for(;kn();)switch(Ke){case e:return pn;case 34:case 39:e!==34&&e!==39&&Qh(Ke);break;case 40:e===41&&Qh(e);break;case 92:kn();break}return pn}function dP(e,t){for(;kn()&&e+Ke!==57;)if(e+Ke===84&&Ri()===47)break;return"/*"+Qc(t,pn-1)+"*"+Bm(e===47?e:kn())}function fP(e){for(;!qh(Ri());)kn();return Qc(e,pn)}function hP(e){return lP(vu("",null,null,null,[""],e=aP(e),0,[0],e))}function vu(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,d=s,f=0,m=0,y=0,_=1,E=1,p=1,h=0,g="",C=i,b=o,v=r,S=g;E;)switch(y=h,h=kn()){case 40:if(y!=108&&ot(S,d-1)==58){gu(S+=ne(Ef(h),"&","&\f"),"&\f",ME(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:S+=Ef(h);break;case 9:case 10:case 13:case 32:S+=uP(y);break;case 92:S+=cP(yu()-1,7);continue;case 47:switch(Ri()){case 42:case 47:ta(pP(dP(kn(),yu()),t,n,l),l);break;default:S+="/"}break;case 123*_:a[u++]=Ln(S)*p;case 125*_:case 59:case 0:switch(h){case 0:case 125:E=0;case 59+c:p==-1&&(S=ne(S,/\f/g,"")),m>0&&Ln(S)-d&&ta(m>32?Wv(S+";",r,n,d-1,l):Wv(ne(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(ta(v=Bv(S,t,n,u,c,i,a,g,C=[],b=[],d,o),o),h===123)if(c===0)vu(S,t,v,v,C,o,d,a,b);else switch(f===99&&ot(S,3)===110?100:f){case 100:case 108:case 109:case 115:vu(e,v,v,r&&ta(Bv(e,v,v,0,0,i,a,g,i,C=[],d,b),b),i,b,d,a,r?C:b);break;default:vu(S,v,v,v,[""],b,0,a,b)}}u=c=m=0,_=p=1,g=S="",d=s;break;case 58:d=1+Ln(S),m=y;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&sP()==125)continue}switch(S+=Bm(h),h*_){case 38:p=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(Ln(S)-1)*p,p=1;break;case 64:Ri()===45&&(S+=Ef(kn())),f=Ri(),c=d=Ln(g=S+=fP(yu())),h++;break;case 45:y===45&&Ln(S)==2&&(_=0)}}return o}function Bv(e,t,n,r,i,o,s,a,l,u,c,d){for(var f=i-1,m=i===0?o:[""],y=jE(m),_=0,E=0,p=0;_<r;++_)for(var h=0,g=Zo(e,f+1,f=ME(E=s[_])),C=e;h<y;++h)(C=FE(E>0?m[h]+" "+g:ne(g,/&\f/g,m[h])))&&(l[p++]=C);return qc(e,t,n,i===0?Kc:a,l,u,c,d)}function pP(e,t,n,r){return qc(e,t,n,DE,Bm(oP()),Zo(e,2,-2),0,r)}function Wv(e,t,n,r,i){return qc(e,t,n,zm,Zo(e,0,r),Zo(e,r+1,-1),r,i)}function UE(e,t,n){switch(rP(e,t)){case 5103:return pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+e+e;case 4789:return ma+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+e+ma+e+be+e+e;case 5936:switch(ot(e,t+11)){case 114:return pe+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pe+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pe+e+be+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return pe+e+be+e+e;case 6165:return pe+e+be+"flex-"+e+e;case 5187:return pe+e+ne(e,/(\w+).+(:[^]+)/,pe+"box-$1$2"+be+"flex-$1$2")+e;case 5443:return pe+e+be+"flex-item-"+ne(e,/flex-|-self/g,"")+(Kn(e,/flex-|baseline/)?"":be+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return pe+e+be+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return pe+e+be+ne(e,"shrink","negative")+e;case 5292:return pe+e+be+ne(e,"basis","preferred-size")+e;case 6060:return pe+"box-"+ne(e,"-grow","")+pe+e+be+ne(e,"grow","positive")+e;case 4554:return pe+ne(e,/([^-])(transform)/g,"$1"+pe+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+e+e;case 4200:if(!Kn(e,/flex-|baseline/))return be+"grid-column-align"+Zo(e,t)+e;break;case 2592:case 3360:return be+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Kn(r.props,/grid-\w+-end/)})?~gu(e+(n=n[t].value),"span",0)?e:be+ne(e,"-start","")+e+be+"grid-row-span:"+(~gu(n,"span",0)?Kn(n,/\d+/):+Kn(n,/\d+/)-+Kn(e,/\d+/))+";":be+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Kn(r.props,/grid-\w+-start/)})?e:be+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ln(e)-1-t>6)switch(ot(e,t+1)){case 109:if(ot(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+ma+(ot(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gu(e,"stretch",0)?UE(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return be+i+":"+o+u+(s?be+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(ot(e,t+6)===121)return ne(e,":",":"+pe)+e;break;case 6444:switch(ot(e,ot(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(ot(e,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+be+"$2box$3")+e;case 100:return ne(e,":",":"+be)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Xu(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function mP(e,t,n,r){switch(e.type){case nP:if(e.children.length)break;case tP:case zm:return e.return=e.return||e.value;case DE:return"";case LE:return e.return=e.value+"{"+Xu(e.children,r)+"}";case Kc:if(!Ln(e.value=e.props.join(",")))return""}return Ln(n=Xu(e.children,r))?e.return=e.value+"{"+n+"}":""}function gP(e){var t=jE(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function yP(e){return function(t){t.root||(t=t.return)&&e(t)}}function vP(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case zm:e.return=UE(e.value,e.length,n);return;case LE:return Xu([Sr(e,{value:ne(e.value,"@","@"+pe)})],r);case Kc:if(e.length)return iP(n=e.props,function(i){switch(Kn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":po(Sr(e,{props:[ne(i,/:(read-\w+)/,":"+ma+"$1")]})),po(Sr(e,{props:[i]})),Yh(e,{props:zv(n,r)});break;case"::placeholder":po(Sr(e,{props:[ne(i,/:(plac\w+)/,":"+pe+"input-$1")]})),po(Sr(e,{props:[ne(i,/:(plac\w+)/,":"+ma+"$1")]})),po(Sr(e,{props:[ne(i,/:(plac\w+)/,be+"input-$1")]})),po(Sr(e,{props:[i]})),Yh(e,{props:zv(n,r)});break}return""})}}var _P={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wt={},ts=typeof process<"u"&&Wt!==void 0&&(Wt.REACT_APP_SC_ATTR||Wt.SC_ATTR)||"data-styled",zE="active",BE="data-styled-version",Xc="6.1.8",Wm=`/*!sc*/
`,Vm=typeof window<"u"&&"HTMLElement"in window,wP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==""?Wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.SC_DISABLE_SPEEDY!==void 0&&Wt.SC_DISABLE_SPEEDY!==""&&Wt.SC_DISABLE_SPEEDY!=="false"&&Wt.SC_DISABLE_SPEEDY),EP={},Jc=Object.freeze([]),ns=Object.freeze({});function WE(e,t,n){return n===void 0&&(n=ns),e.theme!==n.theme&&e.theme||t||n.theme}var VE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),SP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,CP=/(^-|-$)/g;function Vv(e){return e.replace(SP,"-").replace(CP,"")}var TP=/(a)(d)/gi,Ql=52,Hv=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xh(e){var t,n="";for(t=Math.abs(e);t>Ql;t=t/Ql|0)n=Hv(t%Ql)+n;return(Hv(t%Ql)+n).replace(TP,"$1-$2")}var Sf,HE=5381,No=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},GE=function(e){return No(HE,e)};function KE(e){return Xh(GE(e)>>>0)}function IP(e){return e.displayName||e.name||"Component"}function Cf(e){return typeof e=="string"&&!0}var YE=typeof Symbol=="function"&&Symbol.for,qE=YE?Symbol.for("react.memo"):60115,xP=YE?Symbol.for("react.forward_ref"):60112,kP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},QE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},RP=((Sf={})[xP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Sf[qE]=QE,Sf);function Gv(e){return("type"in(t=e)&&t.type.$$typeof)===qE?QE:"$$typeof"in e?RP[e.$$typeof]:kP;var t}var PP=Object.defineProperty,NP=Object.getOwnPropertyNames,Kv=Object.getOwnPropertySymbols,AP=Object.getOwnPropertyDescriptor,OP=Object.getPrototypeOf,Yv=Object.prototype;function XE(e,t,n){if(typeof t!="string"){if(Yv){var r=OP(t);r&&r!==Yv&&XE(e,r,n)}var i=NP(t);Kv&&(i=i.concat(Kv(t)));for(var o=Gv(e),s=Gv(t),a=0;a<i.length;++a){var l=i[a];if(!(l in bP||n&&n[l]||s&&l in s||o&&l in o)){var u=AP(t,l);try{PP(e,l,u)}catch{}}}}return e}function Ui(e){return typeof e=="function"}function Hm(e){return typeof e=="object"&&"styledComponentId"in e}function Ti(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Jh(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ba(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Zh(e,t,n){if(n===void 0&&(n=!1),!n&&!Ba(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Zh(e[r],t[r]);else if(Ba(t))for(var r in t)e[r]=Zh(e[r],t[r]);return e}function Gm(e,t){Object.defineProperty(e,"toString",{value:t})}function zi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var DP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw zi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Wm);return n},e}(),_u=new Map,Ju=new Map,wu=1,Xl=function(e){if(_u.has(e))return _u.get(e);for(;Ju.has(wu);)wu++;var t=wu++;return _u.set(e,t),Ju.set(t,e),t},LP=function(e,t){wu=t+1,_u.set(e,t),Ju.set(t,e)},MP="style[".concat(ts,"][").concat(BE,'="').concat(Xc,'"]'),FP=new RegExp("^".concat(ts,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jP=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},$P=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Wm),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(FP);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(LP(c,u),jP(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function UP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var JE=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ts,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ts,zE),r.setAttribute(BE,Xc);var s=UP();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},zP=function(){function e(t){this.element=JE(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw zi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),BP=function(){function e(t){this.element=JE(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),WP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),qv=Vm,VP={isServer:!Vm,useCSSOMInjection:!wP},Zu=function(){function e(t,n,r){t===void 0&&(t=ns),n===void 0&&(n={});var i=this;this.options=lt(lt({},VP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Vm&&qv&&(qv=!1,function(o){for(var s=document.querySelectorAll(MP),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(ts)!==zE&&($P(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Gm(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var f=function(p){return Ju.get(p)}(d);if(f===void 0)return"continue";var m=o.names.get(f),y=s.getGroup(d);if(m===void 0||y.length===0)return"continue";var _="".concat(ts,".g").concat(d,'[id="').concat(f,'"]'),E="";m!==void 0&&m.forEach(function(p){p.length>0&&(E+="".concat(p,","))}),l+="".concat(y).concat(_,'{content:"').concat(E,'"}').concat(Wm)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Xl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(lt(lt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new WP(i):r?new zP(i):new BP(i)}(this.options),new DP(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Xl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Xl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Xl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),HP=/&/g,GP=/^\s*\/\/.*$/gm;function ZE(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ZE(n.children,t)),n})}function KP(e){var t,n,r,i=e===void 0?ns:e,o=i.options,s=o===void 0?ns:o,a=i.plugins,l=a===void 0?Jc:a,u=function(f,m,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===Kc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(HP,n).replace(r,u))}),s.prefix&&c.push(vP),c.push(mP);var d=function(f,m,y,_){m===void 0&&(m=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var E=f.replace(GP,""),p=hP(y||m?"".concat(y," ").concat(m," { ").concat(E," }"):E);s.namespace&&(p=ZE(p,s.namespace));var h=[];return Xu(p,gP(c.concat(yP(function(g){return h.push(g)})))),h};return d.hash=l.length?l.reduce(function(f,m){return m.name||zi(15),No(f,m.name)},HE).toString():"",d}var YP=new Zu,ep=KP(),eS=At.createContext({shouldForwardProp:void 0,styleSheet:YP,stylis:ep});eS.Consumer;At.createContext(void 0);function tp(){return w.useContext(eS)}var qP=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ep);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Gm(this,function(){throw zi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ep),this.name+t.hash},e}(),QP=function(e){return e>="A"&&e<="Z"};function Qv(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;QP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var tS=function(e){return e==null||e===!1||e===""},nS=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!tS(o)&&(Array.isArray(o)&&o.isCss||Ui(o)?r.push("".concat(Qv(i),":"),o,";"):Ba(o)?r.push.apply(r,za(za(["".concat(i," {")],nS(o),!1),["}"],!1)):r.push("".concat(Qv(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in _P||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zr(e,t,n,r){if(tS(e))return[];if(Hm(e))return[".".concat(e.styledComponentId)];if(Ui(e)){if(!Ui(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return zr(i,t,n,r)}var o;return e instanceof qP?n?(e.inject(n,r),[e.getName(r)]):[e]:Ba(e)?nS(e):Array.isArray(e)?Array.prototype.concat.apply(Jc,e.map(function(s){return zr(s,t,n,r)})):[e.toString()]}function rS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ui(n)&&!Hm(n))return!1}return!0}var XP=GE(Xc),JP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&rS(t),this.componentId=n,this.baseHash=No(XP,n),this.baseStyle=r,Zu.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ti(i,this.staticRulesId);else{var o=Jh(zr(this.rules,t,n,r)),s=Xh(No(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Ti(i,s),this.staticRulesId=s}else{for(var l=No(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Jh(zr(d,t,n,r));l=No(l,f+c),u+=f}}if(u){var m=Xh(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=Ti(i,m)}}return i},e}(),Wa=At.createContext(void 0);Wa.Consumer;function ZP(e){var t=At.useContext(Wa),n=w.useMemo(function(){return function(r,i){if(!r)throw zi(14);if(Ui(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw zi(8);return i?lt(lt({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?At.createElement(Wa.Provider,{value:n},e.children):null}var Tf={};function eN(e,t,n){var r=Hm(e),i=e,o=!Cf(e),s=t.attrs,a=s===void 0?Jc:s,l=t.componentId,u=l===void 0?function(C,b){var v=typeof C!="string"?"sc":Vv(C);Tf[v]=(Tf[v]||0)+1;var S="".concat(v,"-").concat(KE(Xc+v+Tf[v]));return b?"".concat(b,"-").concat(S):S}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(C){return Cf(C)?"styled.".concat(C):"Styled(".concat(IP(C),")")}(e):c,f=t.displayName&&t.componentId?"".concat(Vv(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;y=function(C,b){return _(C,b)&&E(C,b)}}else y=_}var p=new JP(n,f,r?i.componentStyle:void 0);function h(C,b){return function(v,S,P){var O=v.attrs,U=v.componentStyle,G=v.defaultProps,me=v.foldedComponentIds,X=v.styledComponentId,Ee=v.target,zt=At.useContext(Wa),nn=tp(),he=v.shouldForwardProp||nn.shouldForwardProp,D=WE(S,zt,G)||ns,z=function(Le,Ae,dt){for(var Nn,rn=lt(lt({},Ae),{className:void 0,theme:dt}),yr=0;yr<Le.length;yr+=1){var Ue=Ui(Nn=Le[yr])?Nn(rn):Nn;for(var _t in Ue)rn[_t]=_t==="className"?Ti(rn[_t],Ue[_t]):_t==="style"?lt(lt({},rn[_t]),Ue[_t]):Ue[_t]}return Ae.className&&(rn.className=Ti(rn.className,Ae.className)),rn}(O,S,D),V=z.as||Ee,J={};for(var Z in z)z[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&z.theme===D||(Z==="forwardedAs"?J.as=z.forwardedAs:he&&!he(Z,V)||(J[Z]=z[Z]));var vt=function(Le,Ae){var dt=tp(),Nn=Le.generateAndInjectStyles(Ae,dt.styleSheet,dt.stylis);return Nn}(U,z),xe=Ti(me,X);return vt&&(xe+=" "+vt),z.className&&(xe+=" "+z.className),J[Cf(V)&&!VE.has(V)?"class":"className"]=xe,J.ref=P,w.createElement(V,J)}(g,C,b)}h.displayName=d;var g=At.forwardRef(h);return g.attrs=m,g.componentStyle=p,g.displayName=d,g.shouldForwardProp=y,g.foldedComponentIds=r?Ti(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=f,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(b){for(var v=[],S=1;S<arguments.length;S++)v[S-1]=arguments[S];for(var P=0,O=v;P<O.length;P++)Zh(b,O[P],!0);return b}({},i.defaultProps,C):C}}),Gm(g,function(){return".".concat(g.styledComponentId)}),o&&XE(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Xv(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Jv=function(e){return Object.assign(e,{isCss:!0})};function iS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ui(e)||Ba(e))return Jv(zr(Xv(Jc,za([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?zr(r):Jv(zr(Xv(r,t)))}function np(e,t,n){if(n===void 0&&(n=ns),!t)throw zi(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,iS.apply(void 0,za([i],o,!1)))};return r.attrs=function(i){return np(e,t,lt(lt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return np(e,t,lt(lt({},n),i))},r}var oS=function(e){return np(eN,e)},M=oS;VE.forEach(function(e){M[e]=oS(e)});var tN=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=rS(t),Zu.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Jh(zr(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Zu.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function nN(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=iS.apply(void 0,za([e],t,!1)),i="sc-global-".concat(KE(JSON.stringify(r))),o=new tN(r,i),s=function(l){var u=tp(),c=At.useContext(Wa),d=At.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),At.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(o.isStatic)o.renderStyles(l,EP,c,f);else{var m=lt(lt({},u),{theme:WE(u,d,s.defaultProps)});o.renderStyles(l,m,c,f)}}return At.memo(s)}function ht(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var rN=typeof Symbol=="function"&&Symbol.observable||"@@observable",Zv=rN,If=()=>Math.random().toString(36).substring(7).split("").join("."),iN={INIT:`@@redux/INIT${If()}`,REPLACE:`@@redux/REPLACE${If()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${If()}`},ec=iN;function Km(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function sS(e,t,n){if(typeof e!="function")throw new Error(ht(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ht(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ht(1));return n(sS)(e,t)}let r=e,i=t,o=new Map,s=o,a=0,l=!1;function u(){s===o&&(s=new Map,o.forEach((E,p)=>{s.set(p,E)}))}function c(){if(l)throw new Error(ht(3));return i}function d(E){if(typeof E!="function")throw new Error(ht(4));if(l)throw new Error(ht(5));let p=!0;u();const h=a++;return s.set(h,E),function(){if(p){if(l)throw new Error(ht(6));p=!1,u(),s.delete(h),o=null}}}function f(E){if(!Km(E))throw new Error(ht(7));if(typeof E.type>"u")throw new Error(ht(8));if(typeof E.type!="string")throw new Error(ht(17));if(l)throw new Error(ht(9));try{l=!0,i=r(i,E)}finally{l=!1}return(o=s).forEach(h=>{h()}),E}function m(E){if(typeof E!="function")throw new Error(ht(10));r=E,f({type:ec.REPLACE})}function y(){const E=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(ht(11));function h(){const C=p;C.next&&C.next(c())}return h(),{unsubscribe:E(h)}},[Zv](){return this}}}return f({type:ec.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:m,[Zv]:y}}function oN(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:ec.INIT})>"u")throw new Error(ht(12));if(typeof n(void 0,{type:ec.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ht(13))})}function sN(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let i;try{oN(n)}catch(o){i=o}return function(s={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],m=s[d],y=f(m,a);if(typeof y>"u")throw a&&a.type,new Error(ht(14));u[d]=y,l=l||y!==m}return l=l||r.length!==Object.keys(s).length,l?u:s}}function tc(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function aN(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(ht(15))};const s={getState:i.getState,dispatch:(l,...u)=>o(l,...u)},a=e.map(l=>l(s));return o=tc(...a)(i.dispatch),{...i,dispatch:o}}}function lN(e){return Km(e)&&"type"in e&&typeof e.type=="string"}var aS=Symbol.for("immer-nothing"),e_=Symbol.for("immer-draftable"),Xt=Symbol.for("immer-state");function En(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var rs=Object.getPrototypeOf;function Qr(e){return!!e&&!!e[Xt]}function ur(e){var t;return e?lS(e)||Array.isArray(e)||!!e[e_]||!!((t=e.constructor)!=null&&t[e_])||ed(e)||td(e):!1}var uN=Object.prototype.constructor.toString();function lS(e){if(!e||typeof e!="object")return!1;const t=rs(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===uN}function Va(e,t){Zc(e)===0?Object.entries(e).forEach(([n,r])=>{t(n,r,e)}):e.forEach((n,r)=>t(r,n,e))}function Zc(e){const t=e[Xt];return t?t.type_:Array.isArray(e)?1:ed(e)?2:td(e)?3:0}function rp(e,t){return Zc(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function uS(e,t,n){const r=Zc(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function cN(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ed(e){return e instanceof Map}function td(e){return e instanceof Set}function pi(e){return e.copy_||e.base_}function ip(e,t){if(ed(e))return new Map(e);if(td(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&lS(e))return rs(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[Xt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const o=r[i],s=n[o];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(n[o]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[o]})}return Object.create(rs(e),n)}function Ym(e,t=!1){return nd(e)||Qr(e)||!ur(e)||(Zc(e)>1&&(e.set=e.add=e.clear=e.delete=dN),Object.freeze(e),t&&Va(e,(n,r)=>Ym(r,!0))),e}function dN(){En(2)}function nd(e){return Object.isFrozen(e)}var fN={};function Bi(e){const t=fN[e];return t||En(0,e),t}var Ha;function cS(){return Ha}function hN(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function t_(e,t){t&&(Bi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function op(e){sp(e),e.drafts_.forEach(pN),e.drafts_=null}function sp(e){e===Ha&&(Ha=e.parent_)}function n_(e){return Ha=hN(Ha,e)}function pN(e){const t=e[Xt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function r_(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Xt].modified_&&(op(t),En(4)),ur(e)&&(e=nc(t,e),t.parent_||rc(t,e)),t.patches_&&Bi("Patches").generateReplacementPatches_(n[Xt].base_,e,t.patches_,t.inversePatches_)):e=nc(t,n,[]),op(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==aS?e:void 0}function nc(e,t,n){if(nd(t))return t;const r=t[Xt];if(!r)return Va(t,(i,o)=>i_(e,r,t,i,o,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return rc(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let o=i,s=!1;r.type_===3&&(o=new Set(i),i.clear(),s=!0),Va(o,(a,l)=>i_(e,r,i,a,l,n,s)),rc(e,i,!1),n&&e.patches_&&Bi("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function i_(e,t,n,r,i,o,s){if(Qr(i)){const a=o&&t&&t.type_!==3&&!rp(t.assigned_,r)?o.concat(r):void 0,l=nc(e,i,a);if(uS(n,r,l),Qr(l))e.canAutoFreeze_=!1;else return}else s&&n.add(i);if(ur(i)&&!nd(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;nc(e,i),(!t||!t.scope_.parent_)&&rc(e,i)}}function rc(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ym(t,n)}function mN(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:cS(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=qm;n&&(i=[r],o=Ga);const{revoke:s,proxy:a}=Proxy.revocable(i,o);return r.draft_=a,r.revoke_=s,a}var qm={get(e,t){if(t===Xt)return e;const n=pi(e);if(!rp(n,t))return gN(e,n,t);const r=n[t];return e.finalized_||!ur(r)?r:r===xf(e.base_,t)?(kf(e),e.copy_[t]=lp(r,e)):r},has(e,t){return t in pi(e)},ownKeys(e){return Reflect.ownKeys(pi(e))},set(e,t,n){const r=dS(pi(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=xf(pi(e),t),o=i==null?void 0:i[Xt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(cN(n,i)&&(n!==void 0||rp(e.base_,t)))return!0;kf(e),ap(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return xf(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,kf(e),ap(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=pi(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){En(11)},getPrototypeOf(e){return rs(e.base_)},setPrototypeOf(){En(12)}},Ga={};Va(qm,(e,t)=>{Ga[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Ga.deleteProperty=function(e,t){return Ga.set.call(this,e,t,void 0)};Ga.set=function(e,t,n){return qm.set.call(this,e[0],t,n,e[0])};function xf(e,t){const n=e[Xt];return(n?pi(n):e)[t]}function gN(e,t,n){var i;const r=dS(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function dS(e,t){if(!(t in e))return;let n=rs(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=rs(n)}}function ap(e){e.modified_||(e.modified_=!0,e.parent_&&ap(e.parent_))}function kf(e){e.copy_||(e.copy_=ip(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var yN=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const o=n;n=t;const s=this;return function(l=o,...u){return s.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&En(6),r!==void 0&&typeof r!="function"&&En(7);let i;if(ur(t)){const o=n_(this),s=lp(t,void 0);let a=!0;try{i=n(s),a=!1}finally{a?op(o):sp(o)}return t_(o,r),r_(i,o)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===aS&&(i=void 0),this.autoFreeze_&&Ym(i,!0),r){const o=[],s=[];Bi("Patches").generateReplacementPatches_(t,i,o,s),r(o,s)}return i}else En(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...a)=>this.produceWithPatches(s,l=>t(l,...a));let r,i;return[this.produce(t,n,(s,a)=>{r=s,i=a}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){ur(e)||En(8),Qr(e)&&(e=fS(e));const t=n_(this),n=lp(e,void 0);return n[Xt].isManual_=!0,sp(t),n}finishDraft(e,t){const n=e&&e[Xt];(!n||!n.isManual_)&&En(9);const{scope_:r}=n;return t_(r,t),r_(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Bi("Patches").applyPatches_;return Qr(e)?r(e,t):this.produce(e,i=>r(i,t))}};function lp(e,t){const n=ed(e)?Bi("MapSet").proxyMap_(e,t):td(e)?Bi("MapSet").proxySet_(e,t):mN(e,t);return(t?t.scope_:cS()).drafts_.push(n),n}function fS(e){return Qr(e)||En(10,e),hS(e)}function hS(e){if(!ur(e)||nd(e))return e;const t=e[Xt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=ip(e,t.scope_.immer_.useStrictShallowCopy_)}else n=ip(e,!0);return Va(n,(r,i)=>{uS(n,r,hS(i))}),t&&(t.finalized_=!1),n}var Jt=new yN,pS=Jt.produce;Jt.produceWithPatches.bind(Jt);Jt.setAutoFreeze.bind(Jt);Jt.setUseStrictShallowCopy.bind(Jt);Jt.applyPatches.bind(Jt);Jt.createDraft.bind(Jt);Jt.finishDraft.bind(Jt);function vN(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function _N(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function wN(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var o_=e=>Array.isArray(e)?e:[e];function EN(e){const t=Array.isArray(e[0])?e[0]:e;return wN(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function SN(e,t){const n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var CN=class{constructor(e){this.value=e}deref(){return this.value}},TN=typeof WeakRef<"u"?WeakRef:CN,IN=0,s_=1;function Jl(){return{s:IN,v:void 0,o:null,p:null}}function Qm(e,t={}){let n=Jl();const{resultEqualityCheck:r}=t;let i,o=0;function s(){var d;let a=n;const{length:l}=arguments;for(let f=0,m=l;f<m;f++){const y=arguments[f];if(typeof y=="function"||typeof y=="object"&&y!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const E=_.get(y);E===void 0?(a=Jl(),_.set(y,a)):a=E}else{let _=a.p;_===null&&(a.p=_=new Map);const E=_.get(y);E===void 0?(a=Jl(),_.set(y,a)):a=E}}const u=a;let c;if(a.s===s_?c=a.v:(c=e.apply(null,arguments),o++),u.s=s_,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,o!==0&&o--),i=typeof c=="object"&&c!==null||typeof c=="function"?new TN(c):c}return u.v=c,c}return s.clearCache=()=>{n=Jl(),s.resetResultsCount()},s.resultsCount=()=>o,s.resetResultsCount=()=>{o=0},s}function mS(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...i)=>{let o=0,s=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),vN(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:m=Qm,argsMemoizeOptions:y=[],devModeChecks:_={}}=c,E=o_(f),p=o_(y),h=EN(i),g=d(function(){return o++,u.apply(null,arguments)},...E),C=m(function(){s++;const v=SN(h,arguments);return a=g.apply(null,v),a},...p);return Object.assign(C,{resultFunc:u,memoizedResultFunc:g,dependencies:h,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>a,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:d,argsMemoize:m})};return Object.assign(r,{withTypes:()=>r}),r}var xN=mS(Qm),kN=Object.assign((e,t=xN)=>{_N(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(o=>e[o]);return t(r,(...o)=>o.reduce((s,a,l)=>(s[n[l]]=a,s),{}))},{withTypes:()=>kN});function gS(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var bN=gS(),RN=gS,PN=(...e)=>{const t=mS(...e),n=Object.assign((...r)=>{const i=t(...r),o=(s,...a)=>i(Qr(s)?fS(s):s,...a);return Object.assign(o,i),o},{withTypes:()=>n});return n};PN(Qm);var NN=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?tc:tc.apply(null,arguments)};function is(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(jt(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>lN(r)&&r.type===e,n}var yS=class na extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,na.prototype)}static get[Symbol.species](){return na}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new na(...t[0].concat(this)):new na(...t.concat(this))}};function a_(e){return ur(e)?pS(e,()=>{}):e}function l_(e,t,n){if(e.has(t)){let i=e.get(t);return n.update&&(i=n.update(i,t,e),e.set(t,i)),i}if(!n.insert)throw new Error(jt(10));const r=n.insert(t,e);return e.set(t,r),r}function AN(e){return typeof e=="boolean"}var ON=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let s=new yS;return n&&(AN(n)?s.push(bN):s.push(RN(n.extraArgument))),s},DN="RTK_autoBatch",vS=e=>t=>{setTimeout(t,e)},LN=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:vS(10),MN=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,s=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?LN:e.type==="callback"?e.queueNotification:vS(e.timeout),u=()=>{s=!1,o&&(o=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[DN]),o=!i,o&&(s||(s=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},FN=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new yS(e);return r&&i.push(MN(typeof r=="object"?r:void 0)),i},jN=!0;function $N(e){const t=ON(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(Km(n))a=sN(n);else throw new Error(jt(1));let l;typeof r=="function"?l=r(t):l=t();let u=tc;i&&(u=NN({trace:!jN,...typeof i=="object"&&i}));const c=aN(...l),d=FN(c);let f=typeof s=="function"?s(d):d();const m=u(...f);return sS(a,o,m)}function _S(e){const t={},n=[];let r;const i={addCase(o,s){const a=typeof o=="string"?o:o.type;if(!a)throw new Error(jt(28));if(a in t)throw new Error(jt(29));return t[a]=s,i},addMatcher(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function UN(e){return typeof e=="function"}function zN(e,t){let[n,r,i]=_S(t),o;if(UN(e))o=()=>a_(e());else{const a=a_(e);o=()=>a}function s(a=o(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Qr(c)){const m=d(c,l);return m===void 0?c:m}else{if(ur(c))return pS(c,f=>d(f,l));{const f=d(c,l);if(f===void 0){if(c===null)return c;throw new Error(jt(9))}return f}}return c},a)}return s.getInitialState=o,s}var BN="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",WN=(e=21)=>{let t="",n=e;for(;n--;)t+=BN[Math.random()*64|0];return t},VN=Symbol.for("rtk-slice-createasyncthunk");function HN(e,t){return`${e}/${t}`}function GN({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[VN];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(jt(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(qN()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(g,C){const b=typeof g=="string"?g:g.type;if(!b)throw new Error(jt(12));if(b in u.sliceCaseReducersByType)throw new Error(jt(13));return u.sliceCaseReducersByType[b]=C,c},addMatcher(g,C){return u.sliceMatchers.push({matcher:g,reducer:C}),c},exposeAction(g,C){return u.actionCreators[g]=C,c},exposeCaseReducer(g,C){return u.sliceCaseReducersByName[g]=C,c}};l.forEach(g=>{const C=a[g],b={reducerName:g,type:HN(o,g),createNotation:typeof i.reducers=="function"};XN(C)?ZN(b,C,c,t):QN(b,C,c)});function d(){const[g={},C=[],b=void 0]=typeof i.extraReducers=="function"?_S(i.extraReducers):[i.extraReducers],v={...g,...u.sliceCaseReducersByType};return zN(i.initialState,S=>{for(let P in v)S.addCase(P,v[P]);for(let P of u.sliceMatchers)S.addMatcher(P.matcher,P.reducer);for(let P of C)S.addMatcher(P.matcher,P.reducer);b&&S.addDefaultCase(b)})}const f=g=>g,m=new Map;let y;function _(g,C){return y||(y=d()),y(g,C)}function E(){return y||(y=d()),y.getInitialState()}function p(g,C=!1){function b(S){let P=S[g];return typeof P>"u"&&C&&(P=E()),P}function v(S=f){const P=l_(m,C,{insert:()=>new WeakMap});return l_(P,S,{insert:()=>{const O={};for(const[U,G]of Object.entries(i.selectors??{}))O[U]=KN(G,S,E,C);return O}})}return{reducerPath:g,getSelectors:v,get selectors(){return v(b)},selectSlice:b}}const h={name:o,reducer:_,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:E,...p(s),injectInto(g,{reducerPath:C,...b}={}){const v=C??s;return g.inject({reducerPath:v,reducer:_},b),{...h,...p(v,!0)}}};return h}}function KN(e,t,n,r){function i(o,...s){let a=t(o);return typeof a>"u"&&r&&(a=n()),e(a,...s)}return i.unwrapped=e,i}var YN=GN();function qN(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function QN({type:e,reducerName:t,createNotation:n},r,i){let o,s;if("reducer"in r){if(n&&!JN(r))throw new Error(jt(17));o=r.reducer,s=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,s?is(e,s):is(e))}function XN(e){return e._reducerDefinitionType==="asyncThunk"}function JN(e){return e._reducerDefinitionType==="reducerWithPrepare"}function ZN({type:e,reducerName:t},n,r,i){if(!i)throw new Error(jt(18));const{payloadCreator:o,fulfilled:s,pending:a,rejected:l,settled:u,options:c}=n,d=i(e,o,c);r.exposeAction(t,d),s&&r.addCase(d.fulfilled,s),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:s||Zl,pending:a||Zl,rejected:l||Zl,settled:u||Zl})}function Zl(){}var eA=(e,t)=>{if(typeof e!="function")throw new Error(jt(32))},Xm="listenerMiddleware",tA=e=>{let{type:t,actionCreator:n,matcher:r,predicate:i,effect:o}=e;if(t)i=is(t).match;else if(n)t=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(jt(21));return eA(o),{predicate:i,type:t,effect:o}},nA=Object.assign(e=>{const{type:t,predicate:n,effect:r}=tA(e);return{id:WN(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(jt(22))}}},{withTypes:()=>nA}),rA=Object.assign(is(`${Xm}/add`),{withTypes:()=>rA});is(`${Xm}/removeAll`);var iA=Object.assign(is(`${Xm}/remove`),{withTypes:()=>iA});function jt(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const wS=YN({name:"users",initialState:{currentUser:{favorites:[]}},reducers:{setUser(e,t){e.currentUser={...t.payload}},setFavorites(e,t){return{...e,currentUser:{...e.currentUser,favorites:t.payload}}}}}),{setUser:Wi,setFavorites:N5}=wS.actions,ES=e=>e.users,oA=wS.reducer,sA=$N({reducer:{users:oA}});var u_={};/**
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
 */const A=function(e,t){if(!e)throw _s(t)},_s=function(e){return new Error("Firebase Database ("+SS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const CS=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},aA=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Jm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,s||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(CS(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):aA(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw new lA;const f=o<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class lA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TS=function(e){const t=CS(e);return Jm.encodeByteArray(t,!0)},ic=function(e){return TS(e).replace(/\./g,"")},oc=function(e){try{return Jm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function uA(e){return IS(void 0,e)}function IS(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!cA(n)||(e[n]=IS(e[n],t[n]));return e}function cA(e){return e!=="__proto__"}/**
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
 */function dA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fA=()=>dA().__FIREBASE_DEFAULTS__,hA=()=>{if(typeof process>"u"||typeof u_>"u")return;const e=u_.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},pA=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&oc(e[1]);return t&&JSON.parse(t)},Zm=()=>{try{return fA()||hA()||pA()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},xS=e=>{var t,n;return(n=(t=Zm())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},mA=e=>{const t=xS(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},kS=()=>{var e;return(e=Zm())===null||e===void 0?void 0:e.config},bS=e=>{var t;return(t=Zm())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class rd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function gA(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ic(JSON.stringify(n)),ic(JSON.stringify(s)),""].join(".")}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function yA(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function RS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vA(){const e=It();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function PS(){return SS.NODE_ADMIN===!0}function _A(){try{return typeof indexedDB=="object"}catch{return!1}}function wA(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const EA="FirebaseError";class si extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=EA,Object.setPrototypeOf(this,si.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yl.prototype.create)}}class yl{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?SA(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new si(i,a,r)}}function SA(e,t){return e.replace(CA,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const CA=/\{\$([^}]+)}/g;/**
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
 */function Ka(e){return JSON.parse(e)}function Qe(e){return JSON.stringify(e)}/**
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
 */const NS=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=Ka(oc(o[0])||""),n=Ka(oc(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},TA=function(e){const t=NS(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},IA=function(e){const t=NS(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function Bn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function os(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function up(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function sc(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ac(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(c_(o)&&c_(s)){if(!ac(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function c_(e){return e!==null&&typeof e=="object"}/**
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
 */function ws(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ra(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function ia(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
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
 */class xA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^o&(s^a),c=1518500249):(u=o^s^a,c=1859775393):d<60?(u=o&s|a&(o|s),c=2400959708):(u=o^s^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(o[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=t[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)t[r]=this.chain_[i]>>o&255,++r;return t}}function kA(e,t){const n=new bA(e,t);return n.subscribe.bind(n)}class bA{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RA(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=bf),i.error===void 0&&(i.error=bf),i.complete===void 0&&(i.complete=bf);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RA(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function bf(){}function id(e,t){return`${e} failed: ${t} argument `}/**
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
 */const PA=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,A(r<e.length,"Surrogate pair missing trail surrogate.");const s=e.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},od=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function yt(e){return e&&e._delegate?e._delegate:e}class Vi{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const mi="[DEFAULT]";/**
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
 */class NA{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new rd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(OA(t))try{this.getOrInitializeService({instanceIdentifier:mi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=mi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=mi){return this.instances.has(t)}getOptions(t=mi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AA(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=mi){return this.component?this.component.multipleInstances?t:mi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AA(e){return e===mi?void 0:e}function OA(e){return e.instantiationMode==="EAGER"}/**
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
 */class DA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new NA(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ve||(ve={}));const LA={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},MA=ve.INFO,FA={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},jA=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=FA[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class tg{constructor(t){this.name=t,this._logLevel=MA,this._logHandler=jA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ve))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?LA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...t),this._logHandler(this,ve.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...t),this._logHandler(this,ve.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...t),this._logHandler(this,ve.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...t),this._logHandler(this,ve.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...t),this._logHandler(this,ve.ERROR,...t)}}const $A=(e,t)=>t.some(n=>e instanceof n);let d_,f_;function UA(){return d_||(d_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zA(){return f_||(f_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AS=new WeakMap,cp=new WeakMap,OS=new WeakMap,Rf=new WeakMap,ng=new WeakMap;function BA(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Br(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&AS.set(n,e)}).catch(()=>{}),ng.set(t,e),t}function WA(e){if(cp.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});cp.set(e,t)}let dp={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return cp.get(e);if(t==="objectStoreNames")return e.objectStoreNames||OS.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function VA(e){dp=e(dp)}function HA(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Pf(this),t,...n);return OS.set(r,t.sort?t.sort():[t]),Br(r)}:zA().includes(e)?function(...t){return e.apply(Pf(this),t),Br(AS.get(this))}:function(...t){return Br(e.apply(Pf(this),t))}}function GA(e){return typeof e=="function"?HA(e):(e instanceof IDBTransaction&&WA(e),$A(e,UA())?new Proxy(e,dp):e)}function Br(e){if(e instanceof IDBRequest)return BA(e);if(Rf.has(e))return Rf.get(e);const t=GA(e);return t!==e&&(Rf.set(e,t),ng.set(t,e)),t}const Pf=e=>ng.get(e);function KA(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Br(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Br(s.result),l.oldVersion,l.newVersion,Br(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const YA=["get","getKey","getAll","getAllKeys","count"],qA=["put","add","delete","clear"],Nf=new Map;function h_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Nf.get(t))return Nf.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=qA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||YA.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Nf.set(t,o),o}VA(e=>({...e,get:(t,n,r)=>h_(t,n)||e.get(t,n,r),has:(t,n)=>!!h_(t,n)||e.has(t,n)}));/**
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
 */class QA{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XA(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fp="@firebase/app",p_="0.9.27";/**
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
 */const Hi=new tg("@firebase/app"),JA="@firebase/app-compat",ZA="@firebase/analytics-compat",eO="@firebase/analytics",tO="@firebase/app-check-compat",nO="@firebase/app-check",rO="@firebase/auth",iO="@firebase/auth-compat",oO="@firebase/database",sO="@firebase/database-compat",aO="@firebase/functions",lO="@firebase/functions-compat",uO="@firebase/installations",cO="@firebase/installations-compat",dO="@firebase/messaging",fO="@firebase/messaging-compat",hO="@firebase/performance",pO="@firebase/performance-compat",mO="@firebase/remote-config",gO="@firebase/remote-config-compat",yO="@firebase/storage",vO="@firebase/storage-compat",_O="@firebase/firestore",wO="@firebase/firestore-compat",EO="firebase",SO="10.8.0";/**
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
 */const hp="[DEFAULT]",CO={[fp]:"fire-core",[JA]:"fire-core-compat",[eO]:"fire-analytics",[ZA]:"fire-analytics-compat",[nO]:"fire-app-check",[tO]:"fire-app-check-compat",[rO]:"fire-auth",[iO]:"fire-auth-compat",[oO]:"fire-rtdb",[sO]:"fire-rtdb-compat",[aO]:"fire-fn",[lO]:"fire-fn-compat",[uO]:"fire-iid",[cO]:"fire-iid-compat",[dO]:"fire-fcm",[fO]:"fire-fcm-compat",[hO]:"fire-perf",[pO]:"fire-perf-compat",[mO]:"fire-rc",[gO]:"fire-rc-compat",[yO]:"fire-gcs",[vO]:"fire-gcs-compat",[_O]:"fire-fst",[wO]:"fire-fst-compat","fire-js":"fire-js",[EO]:"fire-js-all"};/**
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
 */const lc=new Map,pp=new Map;function TO(e,t){try{e.container.addComponent(t)}catch(n){Hi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ss(e){const t=e.name;if(pp.has(t))return Hi.debug(`There were multiple attempts to register component ${t}.`),!1;pp.set(t,e);for(const n of lc.values())TO(n,e);return!0}function rg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const IO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wr=new yl("app","Firebase",IO);/**
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
 */class xO{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const Es=SO;function DS(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:hp,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=kS()),!n)throw Wr.create("no-options");const o=lc.get(i);if(o){if(ac(n,o.options)&&ac(r,o.config))return o;throw Wr.create("duplicate-app",{appName:i})}const s=new DA(i);for(const l of pp.values())s.addComponent(l);const a=new xO(n,r,s);return lc.set(i,a),a}function LS(e=hp){const t=lc.get(e);if(!t&&e===hp&&kS())return DS();if(!t)throw Wr.create("no-app",{appName:e});return t}function Vr(e,t,n){var r;let i=(r=CO[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Hi.warn(a.join(" "));return}ss(new Vi(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const kO="firebase-heartbeat-database",bO=1,Ya="firebase-heartbeat-store";let Af=null;function MS(){return Af||(Af=KA(kO,bO,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ya)}catch(n){console.warn(n)}}}}).catch(e=>{throw Wr.create("idb-open",{originalErrorMessage:e.message})})),Af}async function RO(e){try{const n=(await MS()).transaction(Ya),r=await n.objectStore(Ya).get(FS(e));return await n.done,r}catch(t){if(t instanceof si)Hi.warn(t.message);else{const n=Wr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Hi.warn(n.message)}}}async function m_(e,t){try{const r=(await MS()).transaction(Ya,"readwrite");await r.objectStore(Ya).put(t,FS(e)),await r.done}catch(n){if(n instanceof si)Hi.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hi.warn(r.message)}}}function FS(e){return`${e.name}!${e.options.appId}`}/**
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
 */const PO=1024,NO=30*24*60*60*1e3;class AO{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=g_();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=NO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=g_(),{heartbeatsToSend:r,unsentEntries:i}=OO(this._heartbeatsCache.heartbeats),o=ic(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function g_(){return new Date().toISOString().substring(0,10)}function OO(e,t=PO){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),y_(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),y_(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DO{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _A()?wA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return m_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return m_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function y_(e){return ic(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function LO(e){ss(new Vi("platform-logger",t=>new QA(t),"PRIVATE")),ss(new Vi("heartbeat",t=>new AO(t),"PRIVATE")),Vr(fp,p_,e),Vr(fp,p_,"esm2017"),Vr("fire-js","")}LO("");var MO="firebase",FO="10.8.0";/**
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
 */Vr(MO,FO,"app");function ig(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function jS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jO=jS,$S=new yl("auth","Firebase",jS());/**
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
 */const uc=new tg("@firebase/auth");function $O(e,...t){uc.logLevel<=ve.WARN&&uc.warn(`Auth (${Es}): ${e}`,...t)}function Eu(e,...t){uc.logLevel<=ve.ERROR&&uc.error(`Auth (${Es}): ${e}`,...t)}/**
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
 */function Pn(e,...t){throw og(e,...t)}function $n(e,...t){return og(e,...t)}function UO(e,t,n){const r=Object.assign(Object.assign({},jO()),{[t]:n});return new yl("auth","Firebase",r).create(t,{appName:e.name})}function og(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return $S.create(e,...t)}function Q(e,t,...n){if(!e)throw og(t,...n)}function Xn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Eu(t),new Error(t)}function cr(e,t){e||Xn(t)}/**
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
 */function mp(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function zO(){return v_()==="http:"||v_()==="https:"}function v_(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function BO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zO()||yA()||"connection"in navigator)?navigator.onLine:!0}function WO(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class vl{constructor(t,n){this.shortDelay=t,this.longDelay=n,cr(n>t,"Short delay should be less than long delay!"),this.isMobile=eg()||RS()}get(){return BO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sg(e,t){cr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class US{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const HO=new vl(3e4,6e4);function ai(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function mr(e,t,n,r,i={}){return zS(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=ws(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),US.fetch()(BS(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function zS(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},VO),t);try{const i=new KO(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw eu(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw eu(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw eu(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw eu(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw UO(e,c,u);Pn(e,c)}}catch(i){if(i instanceof si)throw i;Pn(e,"network-request-failed",{message:String(i)})}}async function _l(e,t,n,r,i={}){const o=await mr(e,t,n,r,i);return"mfaPendingCredential"in o&&Pn(e,"multi-factor-auth-required",{_serverResponse:o}),o}function BS(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?sg(e.config,i):`${e.config.apiScheme}://${i}`}function GO(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KO{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),HO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function eu(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$n(e,t,r);return i.customData._tokenResponse=n,i}function __(e){return e!==void 0&&e.enterprise!==void 0}class YO{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return GO(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function qO(e,t){return mr(e,"GET","/v2/recaptchaConfig",ai(e,t))}/**
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
 */async function QO(e,t){return mr(e,"POST","/v1/accounts:delete",t)}async function XO(e,t){return mr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ga(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function JO(e,t=!1){const n=yt(e),r=await n.getIdToken(t),i=ag(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ga(Of(i.auth_time)),issuedAtTime:ga(Of(i.iat)),expirationTime:ga(Of(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Of(e){return Number(e)*1e3}function ag(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Eu("JWT malformed, contained fewer than 3 sections"),null;try{const i=oc(n);return i?JSON.parse(i):(Eu("Failed to decode base64 JWT payload"),null)}catch(i){return Eu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ZO(e){const t=ag(e);return Q(t,"internal-error"),Q(typeof t.exp<"u","internal-error"),Q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function as(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof si&&eD(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function eD({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class tD{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class WS{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ga(this.lastLoginAt),this.creationTime=ga(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cc(e){var t;const n=e.auth,r=await e.getIdToken(),i=await as(e,XO(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?iD(o.providerUserInfo):[],a=rD(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new WS(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function nD(e){const t=yt(e);await cc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function rD(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function iD(e){return e.map(t=>{var{providerId:n}=t,r=ig(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function oD(e,t){const n=await zS(e,{},async()=>{const r=ws({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=BS(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",US.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sD(e,t){return mr(e,"POST","/v2/accounts:revokeToken",ai(e,t))}/**
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
 */class qa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Q(t.idToken,"internal-error"),Q(typeof t.idToken<"u","internal-error"),Q(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ZO(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return Q(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await oD(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new qa;return r&&(Q(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(Q(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new qa,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
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
 */function wr(e,t){Q(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Pi{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=ig(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new WS(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await as(this,this.stsTokenManager.getToken(this.auth,t));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return JO(this,t)}reload(){return nD(this)}_assign(t){this!==t&&(Q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Pi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await cc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await as(this,QO(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:C,isAnonymous:b,providerData:v,stsTokenManager:S}=n;Q(g&&S,t,"internal-error");const P=qa.fromJSON(this.name,S);Q(typeof g=="string",t,"internal-error"),wr(d,t.name),wr(f,t.name),Q(typeof C=="boolean",t,"internal-error"),Q(typeof b=="boolean",t,"internal-error"),wr(m,t.name),wr(y,t.name),wr(_,t.name),wr(E,t.name),wr(p,t.name),wr(h,t.name);const O=new Pi({uid:g,auth:t,email:f,emailVerified:C,displayName:d,isAnonymous:b,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:P,createdAt:p,lastLoginAt:h});return v&&Array.isArray(v)&&(O.providerData=v.map(U=>Object.assign({},U))),E&&(O._redirectEventId=E),O}static async _fromIdTokenResponse(t,n,r=!1){const i=new qa;i.updateFromServerResponse(n);const o=new Pi({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await cc(o),o}}/**
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
 */const w_=new Map;function Jn(e){cr(e instanceof Function,"Expected a class definition");let t=w_.get(e);return t?(cr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w_.set(e,t),t)}/**
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
 */class VS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}VS.type="NONE";const E_=VS;/**
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
 */function Su(e,t,n){return`firebase:${e}:${t}:${n}`}class Uo{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Su(this.userKey,i.apiKey,o),this.fullPersistenceKey=Su("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Pi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Uo(Jn(E_),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Jn(E_);const s=Su(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const d=Pi._fromJSON(t,c);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Uo(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Uo(o,t,r))}}/**
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
 */function S_(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(KS(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(HS(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(qS(t))return"Blackberry";if(QS(t))return"Webos";if(lg(t))return"Safari";if((t.includes("chrome/")||GS(t))&&!t.includes("edge/"))return"Chrome";if(YS(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function HS(e=It()){return/firefox\//i.test(e)}function lg(e=It()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function GS(e=It()){return/crios\//i.test(e)}function KS(e=It()){return/iemobile/i.test(e)}function YS(e=It()){return/android/i.test(e)}function qS(e=It()){return/blackberry/i.test(e)}function QS(e=It()){return/webos/i.test(e)}function sd(e=It()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function aD(e=It()){var t;return sd(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function lD(){return vA()&&document.documentMode===10}function XS(e=It()){return sd(e)||YS(e)||QS(e)||qS(e)||/windows phone/i.test(e)||KS(e)}function uD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function JS(e,t=[]){let n;switch(e){case"Browser":n=S_(It());break;case"Worker":n=`${S_(It())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Es}/${r}`}/**
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
 */class cD{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dD(e,t={}){return mr(e,"GET","/v2/passwordPolicy",ai(e,t))}/**
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
 */const fD=6;class hD{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:fD,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class pD{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new C_(this),this.idTokenSubscription=new C_(this),this.beforeStateQueue=new cD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$S,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Uo.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await cc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=WO()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?yt(t):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await dD(this),n=new hD(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new yl("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sD(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Jn(t)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Uo.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=JS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&$O(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function eo(e){return yt(e)}class C_{constructor(t){this.auth=t,this.observer=null,this.addObserver=kA(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ad={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mD(e){ad=e}function ZS(e){return ad.loadJS(e)}function gD(){return ad.recaptchaEnterpriseScript}function yD(){return ad.gapiScript}function vD(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const _D="recaptcha-enterprise",wD="NO_RECAPTCHA";class ED{constructor(t){this.type=_D,this.auth=eo(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{qO(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new YO(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;__(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(wD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&__(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=gD();l.length!==0&&(l+=a),ZS(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function T_(e,t,n,r=!1){const i=new ED(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function gp(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await T_(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await T_(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
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
 */function SD(e,t){const n=rg(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ac(o,t??{}))return i;Pn(i,"already-initialized")}return n.initialize({options:t})}function CD(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function TD(e,t,n){const r=eo(e);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=eC(t),{host:s,port:a}=ID(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||xD()}function eC(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ID(e){const t=eC(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:I_(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:I_(s)}}}function I_(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function xD(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class ug{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(t){return Xn("not implemented")}_linkToIdToken(t,n){return Xn("not implemented")}_getReauthenticationResolver(t){return Xn("not implemented")}}async function kD(e,t){return mr(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function bD(e,t){return _l(e,"POST","/v1/accounts:signInWithPassword",ai(e,t))}/**
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
 */async function RD(e,t){return _l(e,"POST","/v1/accounts:signInWithEmailLink",ai(e,t))}async function PD(e,t){return _l(e,"POST","/v1/accounts:signInWithEmailLink",ai(e,t))}/**
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
 */class Qa extends ug{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Qa(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Qa(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gp(t,n,"signInWithPassword",bD);case"emailLink":return RD(t,{email:this._email,oobCode:this._password});default:Pn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gp(t,r,"signUpPassword",kD);case"emailLink":return PD(t,{idToken:n,email:this._email,oobCode:this._password});default:Pn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function zo(e,t){return _l(e,"POST","/v1/accounts:signInWithIdp",ai(e,t))}/**
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
 */const ND="http://localhost";class Gi extends ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Gi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=ig(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Gi(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return zo(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,zo(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,zo(t,n)}buildRequest(){const t={requestUri:ND,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ws(n)}return t}}/**
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
 */function AD(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OD(e){const t=ra(ia(e)).link,n=t?ra(ia(t)).deep_link_id:null,r=ra(ia(e)).deep_link_id;return(r?ra(ia(r)).link:null)||r||n||t||e}class cg{constructor(t){var n,r,i,o,s,a;const l=ra(ia(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=AD((i=l.mode)!==null&&i!==void 0?i:null);Q(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=OD(t);try{return new cg(n)}catch{return null}}}/**
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
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(t,n){return Qa._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=cg.parseLink(n);return Q(r,"argument-error"),Qa._fromEmailAndCode(t,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tC{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wl extends tC{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class kr extends wl{constructor(){super("facebook.com")}static credential(t){return Gi._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kr.credentialFromTaggedObject(t)}static credentialFromError(t){return kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kr.credential(t.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
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
 */class br extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Gi._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return br.credentialFromTaggedObject(t)}static credentialFromError(t){return br.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
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
 */class Rr extends wl{constructor(){super("github.com")}static credential(t){return Gi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rr.credentialFromTaggedObject(t)}static credentialFromError(t){return Rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rr.credential(t.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
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
 */class Pr extends wl{constructor(){super("twitter.com")}static credential(t,n){return Gi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Pr.credentialFromTaggedObject(t)}static credentialFromError(t){return Pr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
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
 */async function DD(e,t){return _l(e,"POST","/v1/accounts:signUp",ai(e,t))}/**
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
 */class Ki{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Pi._fromIdTokenResponse(t,r,i),s=x_(r);return new Ki({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=x_(r);return new Ki({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function x_(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class dc extends si{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dc.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new dc(t,n,r,i)}}function nC(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?dc._fromErrorAndOperation(e,o,t,r):o})}async function LD(e,t,n=!1){const r=await as(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ki._forOperation(e,"link",r)}/**
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
 */async function MD(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await as(e,nC(r,i,t,e),n);Q(o.idToken,r,"internal-error");const s=ag(o.idToken);Q(s,r,"internal-error");const{sub:a}=s;return Q(e.uid===a,r,"user-mismatch"),Ki._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),o}}/**
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
 */async function rC(e,t,n=!1){const r="signIn",i=await nC(e,r,t),o=await Ki._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function FD(e,t){return rC(eo(e),t)}/**
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
 */async function iC(e){const t=eo(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function jD(e,t,n){const r=eo(e),s=await gp(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",DD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&iC(e),l}),a=await Ki._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function $D(e,t,n){return FD(yt(e),Ss.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iC(e),r})}/**
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
 */async function UD(e,t){return mr(e,"POST","/v1/accounts:update",t)}/**
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
 */async function zD(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=yt(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await as(r,UD(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function BD(e,t,n,r){return yt(e).onIdTokenChanged(t,n,r)}function WD(e,t,n){return yt(e).beforeAuthStateChanged(t,n)}function VD(e,t,n,r){return yt(e).onAuthStateChanged(t,n,r)}function HD(e){return yt(e).signOut()}const fc="__sak";/**
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
 */class oC{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function GD(){const e=It();return lg(e)||sd(e)}const KD=1e3,YD=10;class sC extends oC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GD()&&uD(),this.fallbackToPolling=XS(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);lD()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,YD):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},KD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}sC.type="LOCAL";const qD=sC;/**
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
 */class aC extends oC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}aC.type="SESSION";const lC=aC;/**
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
 */function QD(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ld{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ld(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await QD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ld.receivers=[];/**
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
 */function dg(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class XD{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=dg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Un(){return window}function JD(e){Un().location.href=e}/**
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
 */function uC(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function ZD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eL(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function tL(){return uC()?self:null}/**
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
 */const cC="firebaseLocalStorageDb",nL=1,hc="firebaseLocalStorage",dC="fbase_key";class El{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ud(e,t){return e.transaction([hc],t?"readwrite":"readonly").objectStore(hc)}function rL(){const e=indexedDB.deleteDatabase(cC);return new El(e).toPromise()}function yp(){const e=indexedDB.open(cC,nL);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(hc,{keyPath:dC})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(hc)?t(r):(r.close(),await rL(),t(await yp()))})})}async function k_(e,t,n){const r=ud(e,!0).put({[dC]:t,value:n});return new El(r).toPromise()}async function iL(e,t){const n=ud(e,!1).get(t),r=await new El(n).toPromise();return r===void 0?null:r.value}function b_(e,t){const n=ud(e,!0).delete(t);return new El(n).toPromise()}const oL=800,sL=3;class fC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yp(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>sL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ld._getInstance(tL()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ZD(),!this.activeServiceWorker)return;this.sender=new XD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||eL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await yp();return await k_(t,fc,"1"),await b_(t,fc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>k_(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>iL(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>b_(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ud(i,!1).getAll();return new El(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fC.type="LOCAL";const aL=fC;new vl(3e4,6e4);/**
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
 */function lL(e,t){return t?Jn(t):(Q(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class fg extends ug{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zo(t,this._buildIdpRequest())}_linkToIdToken(t,n){return zo(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return zo(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function uL(e){return rC(e.auth,new fg(e),e.bypassAuthState)}function cL(e){const{auth:t,user:n}=e;return Q(n,t,"internal-error"),MD(n,new fg(e),e.bypassAuthState)}async function dL(e){const{auth:t,user:n}=e;return Q(n,t,"internal-error"),LD(n,new fg(e),e.bypassAuthState)}/**
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
 */class hC{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return uL;case"linkViaPopup":case"linkViaRedirect":return dL;case"reauthViaPopup":case"reauthViaRedirect":return cL;default:Pn(this.auth,"internal-error")}}resolve(t){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fL=new vl(2e3,1e4);class Ao extends hC{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ao.currentPopupAction&&Ao.currentPopupAction.cancel(),Ao.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Q(t,this.auth,"internal-error"),t}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const t=dg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ao.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,fL.get())};t()}}Ao.currentPopupAction=null;/**
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
 */const hL="pendingRedirect",Cu=new Map;class pL extends hC{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Cu.get(this.auth._key());if(!t){try{const r=await mL(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Cu.set(this.auth._key(),t)}return this.bypassAuthState||Cu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mL(e,t){const n=vL(t),r=yL(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gL(e,t){Cu.set(e._key(),t)}function yL(e){return Jn(e._redirectPersistence)}function vL(e){return Su(hL,e.config.apiKey,e.name)}async function _L(e,t,n=!1){const r=eo(e),i=lL(r,t),s=await new pL(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const wL=10*60*1e3;class EL{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!SL(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!pC(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wL&&this.cachedEventUids.clear(),this.cachedEventUids.has(R_(t))}saveEventToCache(t){this.cachedEventUids.add(R_(t)),this.lastProcessedEventTime=Date.now()}}function R_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function pC({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function SL(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pC(e);default:return!1}}/**
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
 */async function CL(e,t={}){return mr(e,"GET","/v1/projects",t)}/**
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
 */const TL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IL=/^https?/;async function xL(e){if(e.config.emulator)return;const{authorizedDomains:t}=await CL(e);for(const n of t)try{if(kL(n))return}catch{}Pn(e,"unauthorized-domain")}function kL(e){const t=mp(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!IL.test(n))return!1;if(TL.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const bL=new vl(3e4,6e4);function P_(){const e=Un().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function RL(e){return new Promise((t,n)=>{var r,i,o;function s(){P_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{P_(),n($n(e,"network-request-failed"))},timeout:bL.get()})}if(!((i=(r=Un().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Un().gapi)===null||o===void 0)&&o.load)s();else{const a=vD("iframefcb");return Un()[a]=()=>{gapi.load?s():n($n(e,"network-request-failed"))},ZS(`${yD()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Tu=null,t})}let Tu=null;function PL(e){return Tu=Tu||RL(e),Tu}/**
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
 */const NL=new vl(5e3,15e3),AL="__/auth/iframe",OL="emulator/auth/iframe",DL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ML(e){const t=e.config;Q(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?sg(t,OL):`https://${e.config.authDomain}/${AL}`,r={apiKey:t.apiKey,appName:e.name,v:Es},i=LL.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ws(r).slice(1)}`}async function FL(e){const t=await PL(e),n=Un().gapi;return Q(n,e,"internal-error"),t.open({where:document.body,url:ML(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DL,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=$n(e,"network-request-failed"),a=Un().setTimeout(()=>{o(s)},NL.get());function l(){Un().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const jL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$L=500,UL=600,zL="_blank",BL="http://localhost";class N_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WL(e,t,n,r=$L,i=UL){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jL),{width:r.toString(),height:i.toString(),top:o,left:s}),u=It().toLowerCase();n&&(a=GS(u)?zL:n),HS(u)&&(t=t||BL,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,y])=>`${f}${m}=${y},`,"");if(aD(u)&&a!=="_self")return VL(t||"",a),new N_(null);const d=window.open(t||"",a,c);Q(d,e,"popup-blocked");try{d.focus()}catch{}return new N_(d)}function VL(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HL="__/auth/handler",GL="emulator/auth/handler",KL=encodeURIComponent("fac");async function A_(e,t,n,r,i,o){Q(e.config.authDomain,e,"auth-domain-config-required"),Q(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Es,eventId:i};if(t instanceof tC){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",up(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries(o||{}))s[c]=d}if(t instanceof wl){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${KL}=${encodeURIComponent(l)}`:"";return`${YL(e)}?${ws(a).slice(1)}${u}`}function YL({config:e}){return e.emulator?sg(e,GL):`https://${e.authDomain}/${HL}`}/**
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
 */const Df="webStorageSupport";class qL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lC,this._completeRedirectFn=_L,this._overrideRedirectResult=gL}async _openPopup(t,n,r,i){var o;cr((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await A_(t,n,r,mp(),i);return WL(t,s,dg())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await A_(t,n,r,mp(),i);return JD(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(cr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await FL(t),r=new EL(t);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Df,{type:Df},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Df];s!==void 0&&n(!!s),Pn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xL(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return XS()||lg()||sd()}}const QL=qL;var O_="@firebase/auth",D_="1.6.0";/**
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
 */class XL{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JL(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZL(e){ss(new Vi("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;Q(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:JS(e)},u=new pD(r,i,o,l);return CD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ss(new Vi("auth-internal",t=>{const n=eo(t.getProvider("auth").getImmediate());return(r=>new XL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vr(O_,D_,JL(e)),Vr(O_,D_,"esm2017")}/**
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
 */const eM=5*60,tM=bS("authIdTokenMaxAge")||eM;let L_=null;const nM=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tM)return;const i=n==null?void 0:n.token;L_!==i&&(L_=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rM(e=LS()){const t=rg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=SD(e,{popupRedirectResolver:QL,persistence:[aL,qD,lC]}),r=bS("authTokenSyncURL");if(r){const o=nM(r);WD(n,o,()=>o(n.currentUser)),BD(n,s=>o(s))}const i=xS("auth");return i&&TD(n,`http://${i}`),n}function iM(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}mD({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=$n("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",iM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZL("Browser");var M_={};const F_="@firebase/database",j_="1.0.3";/**
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
 */let mC="";function oM(e){mC=e}/**
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
 */class sM{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Qe(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Ka(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class aM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Bn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const gC=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new sM(t)}}catch{}return new aM},Ii=gC("localStorage"),vp=gC("sessionStorage");/**
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
 */const Bo=new tg("@firebase/database"),lM=function(){let e=1;return function(){return e++}}(),yC=function(e){const t=PA(e),n=new xA;n.update(t);const r=n.digest();return Jm.encodeByteArray(r)},Sl=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Sl.apply(null,r):typeof r=="object"?t+=Qe(r):t+=r,t+=" "}return t};let Ni=null,$_=!0;const uM=function(e,t){A(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Bo.logLevel=ve.VERBOSE,Ni=Bo.log.bind(Bo),t&&vp.set("logging_enabled",!0)):typeof e=="function"?Ni=e:(Ni=null,vp.remove("logging_enabled"))},Ct=function(...e){if($_===!0&&($_=!1,Ni===null&&vp.get("logging_enabled")===!0&&uM(!0)),Ni){const t=Sl.apply(null,e);Ni(t)}},Cl=function(e){return function(...t){Ct(e,...t)}},_p=function(...e){const t="FIREBASE INTERNAL ERROR: "+Sl(...e);Bo.error(t)},dr=function(...e){const t=`FIREBASE FATAL ERROR: ${Sl(...e)}`;throw Bo.error(t),new Error(t)},$t=function(...e){const t="FIREBASE WARNING: "+Sl(...e);Bo.warn(t)},cM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hg=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},dM=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yi="[MIN_NAME]",fr="[MAX_NAME]",Cs=function(e,t){if(e===t)return 0;if(e===Yi||t===fr)return-1;if(t===Yi||e===fr)return 1;{const n=U_(e),r=U_(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},fM=function(e,t){return e===t?0:e<t?-1:1},Vs=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Qe(t))},pg=function(e){if(typeof e!="object"||e===null)return Qe(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=Qe(t[r]),n+=":",n+=pg(e[t[r]]);return n+="}",n},vC=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Ut(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const _C=function(e){A(!hg(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,s,a,l;e===0?(o=0,s=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=a+r,s=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},hM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function mM(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const gM=new RegExp("^-?(0*)\\d{1,10}$"),yM=-2147483648,vM=2147483647,U_=function(e){if(gM.test(e)){const t=Number(e);if(t>=yM&&t<=vM)return t}return null},Ts=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw $t("Exception was thrown by user callback.",n),t},Math.floor(0))}},_M=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ya=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class wM{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){$t(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class EM{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$t(t)}}class Wo{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Wo.OWNER="owner";/**
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
 */const mg="5",wC="v",EC="s",SC="r",CC="f",TC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,IC="ls",xC="p",wp="ac",kC="websocket",bC="long_polling";/**
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
 */class RC{constructor(t,n,r,i,o=!1,s="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ii.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Ii.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function SM(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function PC(e,t,n){A(typeof t=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let r;if(t===kC)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===bC)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);SM(e)&&(n.ns=e.namespace);const i=[];return Ut(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
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
 */class CM{constructor(){this.counters_={}}incrementCounter(t,n=1){Bn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return uA(this.counters_)}}/**
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
 */const Lf={},Mf={};function gg(e){const t=e.toString();return Lf[t]||(Lf[t]=new CM),Lf[t]}function TM(e,t){const n=e.toString();return Mf[n]||(Mf[n]=t()),Mf[n]}/**
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
 */class IM{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ts(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const z_="start",xM="close",kM="pLPCommand",bM="pRTLPCB",NC="id",AC="pw",OC="ser",RM="cb",PM="seg",NM="ts",AM="d",OM="dframe",DC=1870,LC=30,DM=DC-LC,LM=25e3,MM=3e4;class Oo{constructor(t,n,r,i,o,s,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cl(t),this.stats_=gg(n),this.urlFn=l=>(this.appCheckToken&&(l[wp]=this.appCheckToken),PC(n,bC,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new IM(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(MM)),dM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yg((...o)=>{const[s,a,l,u,c]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===z_)this.id=a,this.password=l;else if(s===xM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[z_]="t",r[OC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[RM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[wC]=mg,this.transportSessionId&&(r[EC]=this.transportSessionId),this.lastSessionId&&(r[IC]=this.lastSessionId),this.applicationId&&(r[xC]=this.applicationId),this.appCheckToken&&(r[wp]=this.appCheckToken),typeof location<"u"&&location.hostname&&TC.test(location.hostname)&&(r[SC]=CC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Oo.forceAllow_=!0}static forceDisallow(){Oo.forceDisallow_=!0}static isAvailable(){return Oo.forceAllow_?!0:!Oo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hM()&&!pM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Qe(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=TS(n),i=vC(r,DM);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[OM]="t",r[NC]=t,r[AC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Qe(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yg{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lM(),window[kM+this.uniqueCallbackIdentifier]=t,window[bM+this.uniqueCallbackIdentifier]=n,this.myIFrame=yg.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){Ct("frame writing exception"),a.stack&&Ct(a.stack),Ct(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Ct("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[NC]=this.myID,t[AC]=this.myPW,t[OC]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+LC+r.length<=DC;){const s=this.pendingSegs.shift();r=r+"&"+PM+i+"="+s.seg+"&"+NM+i+"="+s.ts+"&"+AM+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(LM)),o=()=>{clearTimeout(i),r()};this.addTag(t,o)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ct("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const FM=16384,jM=45e3;let pc=null;typeof MozWebSocket<"u"?pc=MozWebSocket:typeof WebSocket<"u"&&(pc=WebSocket);class Sn{constructor(t,n,r,i,o,s,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cl(this.connId),this.stats_=gg(n),this.connURL=Sn.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,o){const s={};return s[wC]=mg,typeof location<"u"&&location.hostname&&TC.test(location.hostname)&&(s[SC]=CC),n&&(s[EC]=n),r&&(s[IC]=r),i&&(s[wp]=i),o&&(s[xC]=o),PC(t,kC,s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ii.set("previous_websocket_failure",!0);try{let r;PS(),this.mySock=new pc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Sn.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&pc!==null&&!Sn.forceDisallow_}static previouslyFailed(){return Ii.isInMemoryStorage||Ii.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ii.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ka(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(A(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=Qe(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=vC(n,FM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jM))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Sn.responsesRequiredToBeHealthy=2;Sn.healthyTimeout=3e4;/**
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
 */class Xa{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Oo,Sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=Sn&&Sn.isAvailable();let r=n&&!Sn.previouslyFailed();if(t.webSocketOnly&&(n||$t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Sn];else{const i=this.transports_=[];for(const o of Xa.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);Xa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xa.globalTransportInitialized_=!1;/**
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
 */const $M=6e4,UM=5e3,zM=10*1024,BM=100*1024,Ff="t",B_="d",WM="s",W_="r",VM="e",V_="o",H_="a",G_="n",K_="p",HM="h";class GM{constructor(t,n,r,i,o,s,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cl("c:"+this.id+":"),this.transportManager_=new Xa(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=ya(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>BM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Ff in t){const n=t[Ff];n===H_?this.upgradeIfSecondaryHealthy_():n===W_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===V_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Vs("t",t),r=Vs("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:K_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:H_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:G_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Vs("t",t),r=Vs("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Vs(Ff,t);if(B_ in t){const r=t[B_];if(n===HM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===G_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===WM?this.onConnectionShutdown_(r):n===W_?this.onReset_(r):n===VM?_p("Server Error: "+r):n===V_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_p("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),mg!==r&&$t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ya(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($M))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ya(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(UM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:K_,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ii.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class MC{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class FC{constructor(t){this.allowedEvents_=t,this.listeners_={},A(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(t){A(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class mc extends FC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!eg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mc}getInitialEvent(t){return A(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Y_=32,q_=768;class we{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function fe(){return new we("")}function oe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Xr(e){return e.pieces_.length-e.pieceNum_}function Te(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new we(e.pieces_,t)}function jC(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function KM(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function $C(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function UC(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new we(t,0)}function Xe(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof we)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new we(n,0)}function ae(e){return e.pieceNum_>=e.pieces_.length}function kt(e,t){const n=oe(e),r=oe(t);if(n===null)return t;if(n===r)return kt(Te(e),Te(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function vg(e,t){if(Xr(e)!==Xr(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Cn(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Xr(e)>Xr(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class YM{constructor(t,n){this.errorPrefix_=n,this.parts_=$C(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=od(this.parts_[r]);zC(this)}}function qM(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=od(t),zC(e)}function QM(e){const t=e.parts_.pop();e.byteLength_-=od(t),e.parts_.length>0&&(e.byteLength_-=1)}function zC(e){if(e.byteLength_>q_)throw new Error(e.errorPrefix_+"has a key path longer than "+q_+" bytes ("+e.byteLength_+").");if(e.parts_.length>Y_)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Y_+") or object contains a cycle "+gi(e))}function gi(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class _g extends FC{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new _g}getInitialEvent(t){return A(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const Hs=1e3,XM=60*5*1e3,Q_=30*1e3,JM=1.3,ZM=3e4,e2="server_kill",X_=3;class nr extends MC{constructor(t,n,r,i,o,s,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=nr.nextPersistentConnectionId_++,this.log_=Cl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hs,this.maxReconnectDelay_=XM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!PS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_g.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&mc.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,o={r:i,a:t,b:n};this.log_(Qe(o)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new rd,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(t,n,r,i){this.initConnection_();const o=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),A(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";t.tag&&(o.q=n._queryObject,o.t=t.tag),o.h=t.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,u=a.s;nr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Bn(t,"w")){const r=os(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();$t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||IA(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Q_)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=TA(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===t&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),A(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const o={p:t},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+t,o),this.sendRequest(t,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Qe(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):_p("Unrecognized action received from server: "+Qe(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ZM&&(this.reconnectDelay_=Hs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*JM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nr.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},u=function(d){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?Ct("getToken() completed but was canceled"):(Ct("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new GM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,m=>{$t(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(e2)},o))}catch(d){this.log_("Failed to get token: "+d),s||(this.repoInfo_.nodeAdmin&&$t(d),l())}}}interrupt(t){Ct("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Ct("Resuming connection for reason: "+t),delete this.interruptReasons_[t],up(this.interruptReasons_)&&(this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(o=>pg(o)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new we(t).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){Ct("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=X_&&(this.reconnectDelay_=Q_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Ct("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=X_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+mC.replace(/\./g,"-")]=1,eg()?t["framework.cordova"]=1:RS()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=mc.getInstance().currentlyOnline();return up(this.interruptReasons_)&&t}}nr.nextPersistentConnectionId_=0;nr.nextConnectionId_=0;/**
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
 */class cd{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new se(Yi,t),i=new se(Yi,n);return this.compare(r,i)!==0}minPost(){return se.MIN}}/**
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
 */let tu;class BC extends cd{static get __EMPTY_NODE(){return tu}static set __EMPTY_NODE(t){tu=t}compare(t,n){return Cs(t.name,n.name)}isDefinedOn(t){throw _s("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return se.MIN}maxPost(){return new se(fr,tu)}makePost(t,n){return A(typeof t=="string","KeyIndex indexValue must always be a string."),new se(t,tu)}toString(){return".key"}}const rr=new BC;/**
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
 */class nu{constructor(t,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!t.isEmpty();)if(t=t,s=n?r(t.key,n):1,i&&(s*=-1),s<0)this.isReverse_?t=t.left:t=t.right;else if(s===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class st{constructor(t,n,r,i,o){this.key=t,this.value=n,this.color=r??st.RED,this.left=i??Dt.EMPTY_NODE,this.right=o??Dt.EMPTY_NODE}copy(t,n,r,i,o){return new st(t??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const o=r(t,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Dt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}st.RED=!0;st.BLACK=!1;class t2{copy(t,n,r,i,o){return this}insert(t,n,r){return new st(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dt{constructor(t,n=Dt.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Dt(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,st.BLACK,null,null))}remove(t){return new Dt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,st.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new nu(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new nu(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new nu(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new nu(this.root_,null,this.comparator_,!0,t)}}Dt.EMPTY_NODE=new t2;/**
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
 */function n2(e,t){return Cs(e.name,t.name)}function wg(e,t){return Cs(e,t)}/**
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
 */let Ep;function r2(e){Ep=e}const WC=function(e){return typeof e=="number"?"number:"+_C(e):"string:"+e},VC=function(e){if(e.isLeafNode()){const t=e.val();A(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Bn(t,".sv"),"Priority must be a string or number.")}else A(e===Ep||e.isEmpty(),"priority of unexpected type.");A(e===Ep||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let J_;class rt{constructor(t,n=rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),VC(this.priorityNode_)}static set __childrenNodeConstructor(t){J_=t}static get __childrenNodeConstructor(){return J_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new rt(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ae(t)?this:oe(t)===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=oe(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(A(r!==".priority"||Xr(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+WC(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=_C(this.value_):t+=this.value_,this.lazyHash_=yC(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===rt.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof rt.__childrenNodeConstructor?-1:(A(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=rt.VALUE_TYPE_ORDER.indexOf(n),o=rt.VALUE_TYPE_ORDER.indexOf(r);return A(i>=0,"Unknown leaf type: "+n),A(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let HC,GC;function i2(e){HC=e}function o2(e){GC=e}class s2 extends cd{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?Cs(t.name,n.name):o}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(fr,new rt("[PRIORITY-POST]",GC))}makePost(t,n){const r=HC(t);return new se(n,new rt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Fe=new s2;/**
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
 */const a2=Math.log(2);class l2{constructor(t){const n=o=>parseInt(Math.log(o)/a2,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const gc=function(e,t,n,r){e.sort(t);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=e[l],f=n?n(d):d,new st(f,d.node,st.BLACK,null,null);{const m=parseInt(c/2,10)+l,y=i(l,m),_=i(m+1,u);return d=e[m],f=n?n(d):d,new st(f,d.node,st.BLACK,y,_)}},o=function(l){let u=null,c=null,d=e.length;const f=function(y,_){const E=d-y,p=d;d-=y;const h=i(E+1,p),g=e[E],C=n?n(g):g;m(new st(C,g.node,_,null,h))},m=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),E=Math.pow(2,l.count-(y+1));_?f(E,st.BLACK):(f(E,st.BLACK),f(E,st.RED))}return c},s=new l2(e.length),a=o(s);return new Dt(r||t,a)};/**
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
 */let jf;const mo={};class Zn{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return A(mo&&Fe,"ChildrenNode.ts has not been loaded"),jf=jf||new Zn({".priority":mo},{".priority":Fe}),jf}get(t){const n=os(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Dt?n:null}hasIndex(t){return Bn(this.indexSet_,t.toString())}addIndex(t,n){A(t!==rr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(se.Wrap);let s=o.getNext();for(;s;)i=i||t.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=gc(r,t.getCompare()):a=mo;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new Zn(c,u)}addToIndexes(t,n){const r=sc(this.indexes_,(i,o)=>{const s=os(this.indexSet_,o);if(A(s,"Missing index implementation for "+o),i===mo)if(s.isDefinedOn(t.node)){const a=[],l=n.getIterator(se.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),gc(a,s.getCompare())}else return mo;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new se(t.name,a))),l.insert(t,t.node)}});return new Zn(r,this.indexSet_)}removeFromIndexes(t,n){const r=sc(this.indexes_,i=>{if(i===mo)return i;{const o=n.get(t.name);return o?i.remove(new se(t.name,o)):i}});return new Zn(r,this.indexSet_)}}/**
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
 */let Gs;class K{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&VC(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Gs||(Gs=new K(new Dt(wg),null,Zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gs}updatePriority(t){return this.children_.isEmpty()?this:new K(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Gs:n}}getChild(t){const n=oe(t);return n===null?this:this.getImmediateChild(n).getChild(Te(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(A(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new se(t,n);let i,o;n.isEmpty()?(i=this.children_.remove(t),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?Gs:this.priorityNode_;return new K(i,s,o)}}updateChild(t,n){const r=oe(t);if(r===null)return n;{A(oe(t)!==".priority"||Xr(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Te(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild(Fe,(s,a)=>{n[s]=a.val(t),r++,o&&K.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!t&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+WC(this.getPriority().val())+":"),this.forEachChild(Fe,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":yC(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new se(t,n));return o?o.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new se(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new se(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,se.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,se.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,t)>0;)i.getNext(),o=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Tl?-1:0}withIndex(t){if(t===rr||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===rr||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Fe),i=n.getIterator(Fe);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(t){return t===rr?null:this.indexMap_.get(t.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class u2 extends K{constructor(){super(new Dt(wg),K.EMPTY_NODE,Zn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return K.EMPTY_NODE}isEmpty(){return!1}}const Tl=new u2;Object.defineProperties(se,{MIN:{value:new se(Yi,K.EMPTY_NODE)},MAX:{value:new se(fr,Tl)}});BC.__EMPTY_NODE=K.EMPTY_NODE;rt.__childrenNodeConstructor=K;r2(Tl);o2(Tl);/**
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
 */const c2=!0;function at(e,t=null){if(e===null)return K.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),A(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new rt(n,at(t))}if(!(e instanceof Array)&&c2){const n=[];let r=!1;if(Ut(e,(s,a)=>{if(s.substring(0,1)!=="."){const l=at(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new se(s,l)))}}),n.length===0)return K.EMPTY_NODE;const o=gc(n,n2,s=>s.name,wg);if(r){const s=gc(n,Fe.getCompare());return new K(o,at(t),new Zn({".priority":s},{".priority":Fe}))}else return new K(o,at(t),Zn.Default)}else{let n=K.EMPTY_NODE;return Ut(e,(r,i)=>{if(Bn(e,r)&&r.substring(0,1)!=="."){const o=at(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(at(t))}}i2(at);/**
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
 */class KC extends cd{constructor(t){super(),this.indexPath_=t,A(!ae(t)&&oe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?Cs(t.name,n.name):o}makePost(t,n){const r=at(t),i=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,i)}maxPost(){const t=K.EMPTY_NODE.updateChild(this.indexPath_,Tl);return new se(fr,t)}toString(){return $C(this.indexPath_,0).join("/")}}/**
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
 */class d2 extends cd{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Cs(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(t,n){const r=at(t);return new se(n,r)}toString(){return".value"}}const YC=new d2;/**
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
 */function qC(e){return{type:"value",snapshotNode:e}}function ls(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ja(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Za(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function f2(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class Eg{constructor(t){this.index_=t}updateChild(t,n,r,i,o,s){A(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?t.hasChild(n)?s.trackChildChange(Ja(n,a)):A(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(ls(n,r)):s.trackChildChange(Za(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Fe,(i,o)=>{n.hasChild(i)||r.trackChildChange(Ja(i,o))}),n.isLeafNode()||n.forEachChild(Fe,(i,o)=>{if(t.hasChild(i)){const s=t.getImmediateChild(i);s.equals(o)||r.trackChildChange(Za(i,o,s))}else r.trackChildChange(ls(i,o))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?K.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class el{constructor(t){this.indexedFilter_=new Eg(t.getIndex()),this.index_=t.getIndex(),this.startPost_=el.getStartPost_(t),this.endPost_=el.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,o,s){return this.matches(new se(n,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,o,s)}updateFullNode(t,n,r){n.isLeafNode()&&(n=K.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const o=this;return n.forEachChild(Fe,(s,a)=>{o.matches(new se(s,a))||(i=i.updateImmediateChild(s,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
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
 */class h2{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new el(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,o,s){return this.rangedFilter_.matches(new se(n,r))||(r=K.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,o,s):this.fullLimitUpdateChild_(t,n,r,o,s)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;o.hasNext()&&s<this.limit_;){const a=o.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),s++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let o;this.reverse_?o=i.getReverseIterator(this.index_):o=i.getIterator(this.index_);let s=0;for(;o.hasNext();){const a=o.getNext();s<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?s++:i=i.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,o){let s;if(this.reverse_){const d=this.index_.getCompare();s=(f,m)=>d(m,f)}else s=this.index_.getCompare();const a=t;A(a.numChildren()===this.limit_,"");const l=new se(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:s(f,l);if(c&&!r.isEmpty()&&m>=0)return o!=null&&o.trackChildChange(Za(n,r,d)),a.updateImmediateChild(n,r);{o!=null&&o.trackChildChange(Ja(n,d));const _=a.updateImmediateChild(n,K.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(o!=null&&o.trackChildChange(ls(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?t:c&&s(u,l)>=0?(o!=null&&(o.trackChildChange(Ja(u.name,u.node)),o.trackChildChange(ls(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,K.EMPTY_NODE)):t}}/**
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
 */class Sg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yi}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const t=new Sg;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function p2(e){return e.loadsAllData()?new Eg(e.getIndex()):e.hasLimit()?new h2(e):new el(e)}function m2(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Z_(e,t,n){const r=e.copy();return r.startSet_=!0,t===void 0&&(t=null),r.indexStartValue_=t,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function g2(e,t,n){let r;return e.index_===rr||n?r=Z_(e,t,n):r=Z_(e,t,fr),r.startAfterSet_=!0,r}function y2(e,t){const n=e.copy();return n.index_=t,n}function e0(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Fe?n="$priority":e.index_===YC?n="$value":e.index_===rr?n="$key":(A(e.index_ instanceof KC,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Qe(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=Qe(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+Qe(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=Qe(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+Qe(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function t0(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Fe&&(t.i=e.index_.toString()),t}/**
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
 */class yc extends MC{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Cl("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(A(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const o=t._path.toString();this.log_("Listen called for "+o+" "+t._queryIdentifier);const s=yc.getListenId_(t,r),a={};this.listens_[s]=a;const l=e0(t._queryParams);this.restRequest_(o+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(o,d,!1,r),os(this.listens_,s)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(t,n){const r=yc.getListenId_(t,n);delete this.listens_[r]}get(t){const n=e0(t._queryParams),r=t._path.toString(),i=new rd;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+ws(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ka(a.responseText)}catch{$t("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&$t("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
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
 */class v2{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function vc(){return{value:null,children:new Map}}function QC(e,t,n){if(ae(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=oe(t);e.children.has(r)||e.children.set(r,vc());const i=e.children.get(r);t=Te(t),QC(i,t,n)}}function Sp(e,t,n){e.value!==null?n(t,e.value):_2(e,(r,i)=>{const o=new we(t.toString()+"/"+r);Sp(i,o,n)})}function _2(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
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
 */class w2{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Ut(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
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
 */const n0=10*1e3,E2=30*1e3,S2=5*60*1e3;class C2{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new w2(t);const r=n0+(E2-n0)*Math.random();ya(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;Ut(t,(i,o)=>{o>0&&Bn(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),ya(this.reportStats_.bind(this),Math.floor(Math.random()*2*S2))}}/**
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
 */var Tn;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tn||(Tn={}));function XC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Tg(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class _c{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=Tn.ACK_USER_WRITE,this.source=XC()}operationForChild(t){if(ae(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(t));return new _c(fe(),n,this.revert)}}else return A(oe(this.path)===t,"operationForChild called for unrelated child."),new _c(Te(this.path),this.affectedTree,this.revert)}}/**
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
 */class tl{constructor(t,n){this.source=t,this.path=n,this.type=Tn.LISTEN_COMPLETE}operationForChild(t){return ae(this.path)?new tl(this.source,fe()):new tl(this.source,Te(this.path))}}/**
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
 */class qi{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=Tn.OVERWRITE}operationForChild(t){return ae(this.path)?new qi(this.source,fe(),this.snap.getImmediateChild(t)):new qi(this.source,Te(this.path),this.snap)}}/**
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
 */class nl{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=Tn.MERGE}operationForChild(t){if(ae(this.path)){const n=this.children.subtree(new we(t));return n.isEmpty()?null:n.value?new qi(this.source,fe(),n.value):new nl(this.source,fe(),n)}else return A(oe(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new nl(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Jr{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ae(t))return this.isFullyInitialized()&&!this.filtered_;const n=oe(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class T2{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function I2(e,t,n,r){const i=[],o=[];return t.forEach(s=>{s.type==="child_changed"&&e.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(f2(s.childName,s.snapshotNode))}),Ks(e,i,"child_removed",t,r,n),Ks(e,i,"child_added",t,r,n),Ks(e,i,"child_moved",o,r,n),Ks(e,i,"child_changed",t,r,n),Ks(e,i,"value",t,r,n),i}function Ks(e,t,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>k2(e,a,l)),s.forEach(a=>{const l=x2(e,a,o);i.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function x2(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function k2(e,t,n){if(t.childName==null||n.childName==null)throw _s("Should only compare child_ events.");const r=new se(t.childName,t.snapshotNode),i=new se(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
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
 */function dd(e,t){return{eventCache:e,serverCache:t}}function va(e,t,n,r){return dd(new Jr(t,n,r),e.serverCache)}function JC(e,t,n,r){return dd(e.eventCache,new Jr(t,n,r))}function wc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Qi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let $f;const b2=()=>($f||($f=new Dt(fM)),$f);class Pe{constructor(t,n=b2()){this.value=t,this.children=n}static fromObject(t){let n=new Pe(null);return Ut(t,(r,i)=>{n=n.set(new we(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(ae(t))return null;{const r=oe(t),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(Te(t),n);return o!=null?{path:Xe(new we(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ae(t))return this;{const n=oe(t),r=this.children.get(n);return r!==null?r.subtree(Te(t)):new Pe(null)}}set(t,n){if(ae(t))return new Pe(n,this.children);{const r=oe(t),o=(this.children.get(r)||new Pe(null)).set(Te(t),n),s=this.children.insert(r,o);return new Pe(this.value,s)}}remove(t){if(ae(t))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=oe(t),r=this.children.get(n);if(r){const i=r.remove(Te(t));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new Pe(null):new Pe(this.value,o)}else return this}}get(t){if(ae(t))return this.value;{const n=oe(t),r=this.children.get(n);return r?r.get(Te(t)):null}}setTree(t,n){if(ae(t))return n;{const r=oe(t),o=(this.children.get(r)||new Pe(null)).setTree(Te(t),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new Pe(this.value,s)}}fold(t){return this.fold_(fe(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(Xe(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,fe(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ae(t))return null;{const o=oe(t),s=this.children.get(o);return s?s.findOnPath_(Te(t),Xe(n,o),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,fe(),n)}foreachOnPath_(t,n,r){if(ae(t))return this;{this.value&&r(n,this.value);const i=oe(t),o=this.children.get(i);return o?o.foreachOnPath_(Te(t),Xe(n,i),r):new Pe(null)}}foreach(t){this.foreach_(fe(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Xe(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
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
 */class bn{constructor(t){this.writeTree_=t}static empty(){return new bn(new Pe(null))}}function _a(e,t,n){if(ae(t))return new bn(new Pe(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let o=r.value;const s=kt(i,t);return o=o.updateChild(s,n),new bn(e.writeTree_.set(i,o))}else{const i=new Pe(n),o=e.writeTree_.setTree(t,i);return new bn(o)}}}function r0(e,t,n){let r=e;return Ut(n,(i,o)=>{r=_a(r,Xe(t,i),o)}),r}function i0(e,t){if(ae(t))return bn.empty();{const n=e.writeTree_.setTree(t,new Pe(null));return new bn(n)}}function Cp(e,t){return to(e,t)!=null}function to(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(kt(n.path,t)):null}function o0(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(r,i)=>{t.push(new se(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new se(r,i.value))}),t}function Hr(e,t){if(ae(t))return e;{const n=to(e,t);return n!=null?new bn(new Pe(n)):new bn(e.writeTree_.subtree(t))}}function Tp(e){return e.writeTree_.isEmpty()}function us(e,t){return ZC(fe(),e.writeTree_,t)}function ZC(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,o)=>{i===".priority"?(A(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=ZC(Xe(e,i),o,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(Xe(e,".priority"),r)),n}}/**
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
 */function fd(e,t){return rT(t,e)}function R2(e,t,n,r,i){A(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=_a(e.visibleWrites,t,n)),e.lastWriteId=r}function P2(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function N2(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);A(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,s=e.allWrites.length-1;for(;i&&s>=0;){const a=e.allWrites[s];a.visible&&(s>=n&&A2(a,r.path)?i=!1:Cn(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return O2(e),!0;if(r.snap)e.visibleWrites=i0(e.visibleWrites,r.path);else{const a=r.children;Ut(a,l=>{e.visibleWrites=i0(e.visibleWrites,Xe(r.path,l))})}return!0}else return!1}function A2(e,t){if(e.snap)return Cn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Cn(Xe(e.path,n),t))return!0;return!1}function O2(e){e.visibleWrites=eT(e.allWrites,D2,fe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function D2(e){return e.visible}function eT(e,t,n){let r=bn.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const s=o.path;let a;if(o.snap)Cn(n,s)?(a=kt(n,s),r=_a(r,a,o.snap)):Cn(s,n)&&(a=kt(s,n),r=_a(r,fe(),o.snap.getChild(a)));else if(o.children){if(Cn(n,s))a=kt(n,s),r=r0(r,a,o.children);else if(Cn(s,n))if(a=kt(s,n),ae(a))r=r0(r,fe(),o.children);else{const l=os(o.children,oe(a));if(l){const u=l.getChild(Te(a));r=_a(r,fe(),u)}}}else throw _s("WriteRecord should have .snap or .children")}}return r}function tT(e,t,n,r,i){if(!r&&!i){const o=to(e.visibleWrites,t);if(o!=null)return o;{const s=Hr(e.visibleWrites,t);if(Tp(s))return n;if(n==null&&!Cp(s,fe()))return null;{const a=n||K.EMPTY_NODE;return us(s,a)}}}else{const o=Hr(e.visibleWrites,t);if(!i&&Tp(o))return n;if(!i&&n==null&&!Cp(o,fe()))return null;{const s=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Cn(u.path,t)||Cn(t,u.path))},a=eT(e.allWrites,s,t),l=n||K.EMPTY_NODE;return us(a,l)}}}function L2(e,t,n){let r=K.EMPTY_NODE;const i=to(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Fe,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=Hr(e.visibleWrites,t);return n.forEachChild(Fe,(s,a)=>{const l=us(Hr(o,new we(s)),a);r=r.updateImmediateChild(s,l)}),o0(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=Hr(e.visibleWrites,t);return o0(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function M2(e,t,n,r,i){A(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=Xe(t,n);if(Cp(e.visibleWrites,o))return null;{const s=Hr(e.visibleWrites,o);return Tp(s)?i.getChild(n):us(s,i.getChild(n))}}function F2(e,t,n,r){const i=Xe(t,n),o=to(e.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=Hr(e.visibleWrites,i);return us(s,r.getNode().getImmediateChild(n))}else return null}function j2(e,t){return to(e.visibleWrites,t)}function $2(e,t,n,r,i,o,s){let a;const l=Hr(e.visibleWrites,t),u=to(l,fe());if(u!=null)a=u;else if(n!=null)a=us(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=s.getCompare(),f=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function U2(){return{visibleWrites:bn.empty(),allWrites:[],lastWriteId:-1}}function Ec(e,t,n,r){return tT(e.writeTree,e.treePath,t,n,r)}function Ig(e,t){return L2(e.writeTree,e.treePath,t)}function s0(e,t,n,r){return M2(e.writeTree,e.treePath,t,n,r)}function Sc(e,t){return j2(e.writeTree,Xe(e.treePath,t))}function z2(e,t,n,r,i,o){return $2(e.writeTree,e.treePath,t,n,r,i,o)}function xg(e,t,n){return F2(e.writeTree,e.treePath,t,n)}function nT(e,t){return rT(Xe(e.treePath,t),e.writeTree)}function rT(e,t){return{treePath:e,writeTree:t}}/**
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
 */class B2{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,Za(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,Ja(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,ls(r,t.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,Za(r,t.snapshotNode,i.oldSnap));else throw _s("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class W2{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const iT=new W2;class kg{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new Jr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xg(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qi(this.viewCache_),o=z2(this.writes_,i,n,1,r,t);return o.length===0?null:o[0]}}/**
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
 */function V2(e){return{filter:e}}function H2(e,t){A(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),A(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function G2(e,t,n,r,i){const o=new B2;let s,a;if(n.type===Tn.OVERWRITE){const u=n;u.source.fromUser?s=Ip(e,t,u.path,u.snap,r,i,o):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!ae(u.path),s=Cc(e,t,u.path,u.snap,r,i,a,o))}else if(n.type===Tn.MERGE){const u=n;u.source.fromUser?s=Y2(e,t,u.path,u.children,r,i,o):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),s=xp(e,t,u.path,u.children,r,i,a,o))}else if(n.type===Tn.ACK_USER_WRITE){const u=n;u.revert?s=X2(e,t,u.path,r,i,o):s=q2(e,t,u.path,u.affectedTree,r,i,o)}else if(n.type===Tn.LISTEN_COMPLETE)s=Q2(e,t,n.path,r,o);else throw _s("Unknown operation type: "+n.type);const l=o.getChanges();return K2(t,s,l),{viewCache:s,changes:l}}function K2(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=wc(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(qC(wc(t)))}}function oT(e,t,n,r,i,o){const s=t.eventCache;if(Sc(r,n)!=null)return t;{let a,l;if(ae(n))if(A(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=Qi(t),c=u instanceof K?u:K.EMPTY_NODE,d=Ig(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),d,o)}else{const u=Ec(r,Qi(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,o)}else{const u=oe(n);if(u===".priority"){A(Xr(n)===1,"Can't have a priority with additional path components");const c=s.getNode();l=t.serverCache.getNode();const d=s0(r,n,c,l);d!=null?a=e.filter.updatePriority(c,d):a=s.getNode()}else{const c=Te(n);let d;if(s.isCompleteForChild(u)){l=t.serverCache.getNode();const f=s0(r,n,s.getNode(),l);f!=null?d=s.getNode().getImmediateChild(u).updateChild(c,f):d=s.getNode().getImmediateChild(u)}else d=xg(r,u,t.serverCache);d!=null?a=e.filter.updateChild(s.getNode(),u,d,c,i,o):a=s.getNode()}}return va(t,a,s.isFullyInitialized()||ae(n),e.filter.filtersNodes())}}function Cc(e,t,n,r,i,o,s,a){const l=t.serverCache;let u;const c=s?e.filter:e.filter.getIndexedFilter();if(ae(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=oe(n);if(!l.isCompleteForPath(n)&&Xr(n)>1)return t;const y=Te(n),E=l.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),m,E,y,iT,null)}const d=JC(t,u,l.isFullyInitialized()||ae(n),c.filtersNodes()),f=new kg(i,d,o);return oT(e,d,n,i,f,a)}function Ip(e,t,n,r,i,o,s){const a=t.eventCache;let l,u;const c=new kg(i,t,o);if(ae(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=va(t,u,!0,e.filter.filtersNodes());else{const d=oe(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=va(t,u,a.isFullyInitialized(),a.isFiltered());else{const f=Te(n),m=a.getNode().getImmediateChild(d);let y;if(ae(f))y=r;else{const _=c.getCompleteChild(d);_!=null?jC(f)===".priority"&&_.getChild(UC(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=K.EMPTY_NODE}if(m.equals(y))l=t;else{const _=e.filter.updateChild(a.getNode(),d,y,f,c,s);l=va(t,_,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function a0(e,t){return e.eventCache.isCompleteForChild(t)}function Y2(e,t,n,r,i,o,s){let a=t;return r.foreach((l,u)=>{const c=Xe(n,l);a0(t,oe(c))&&(a=Ip(e,a,c,u,i,o,s))}),r.foreach((l,u)=>{const c=Xe(n,l);a0(t,oe(c))||(a=Ip(e,a,c,u,i,o,s))}),a}function l0(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function xp(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;ae(n)?u=r:u=new Pe(null).setTree(n,r);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=t.serverCache.getNode().getImmediateChild(d),y=l0(e,m,f);l=Cc(e,l,new we(d),y,i,o,s,a)}}),u.children.inorderTraversal((d,f)=>{const m=!t.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const y=t.serverCache.getNode().getImmediateChild(d),_=l0(e,y,f);l=Cc(e,l,new we(d),_,i,o,s,a)}}),l}function q2(e,t,n,r,i,o,s){if(Sc(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Cc(e,t,n,l.getNode().getChild(n),i,o,a,s);if(ae(n)){let u=new Pe(null);return l.getNode().forEachChild(rr,(c,d)=>{u=u.set(new we(c),d)}),xp(e,t,n,u,i,o,a,s)}else return t}else{let u=new Pe(null);return r.foreach((c,d)=>{const f=Xe(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),xp(e,t,n,u,i,o,a,s)}}function Q2(e,t,n,r,i){const o=t.serverCache,s=JC(t,o.getNode(),o.isFullyInitialized()||ae(n),o.isFiltered());return oT(e,s,n,r,iT,i)}function X2(e,t,n,r,i,o){let s;if(Sc(r,n)!=null)return t;{const a=new kg(r,t,i),l=t.eventCache.getNode();let u;if(ae(n)||oe(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=Ec(r,Qi(t));else{const d=t.serverCache.getNode();A(d instanceof K,"serverChildren would be complete if leaf node"),c=Ig(r,d)}c=c,u=e.filter.updateFullNode(l,c,o)}else{const c=oe(n);let d=xg(r,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,Te(n),a,o):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,K.EMPTY_NODE,Te(n),a,o):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=Ec(r,Qi(t)),s.isLeafNode()&&(u=e.filter.updateFullNode(u,s,o)))}return s=t.serverCache.isFullyInitialized()||Sc(r,fe())!=null,va(t,u,s,e.filter.filtersNodes())}}/**
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
 */class J2{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Eg(r.getIndex()),o=p2(r);this.processor_=V2(o);const s=n.serverCache,a=n.eventCache,l=i.updateFullNode(K.EMPTY_NODE,s.getNode(),null),u=o.updateFullNode(K.EMPTY_NODE,a.getNode(),null),c=new Jr(l,s.isFullyInitialized(),i.filtersNodes()),d=new Jr(u,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=dd(d,c),this.eventGenerator_=new T2(this.query_)}get query(){return this.query_}}function Z2(e){return e.viewCache_.serverCache.getNode()}function e3(e){return wc(e.viewCache_)}function t3(e,t){const n=Qi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ae(t)&&!n.getImmediateChild(oe(t)).isEmpty())?n.getChild(t):null}function u0(e){return e.eventRegistrations_.length===0}function n3(e,t){e.eventRegistrations_.push(t)}function c0(e,t,n){const r=[];if(n){A(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(o=>{const s=o.createCancelEvent(n,i);s&&r.push(s)})}if(t){let i=[];for(let o=0;o<e.eventRegistrations_.length;++o){const s=e.eventRegistrations_[o];if(!s.matches(t))i.push(s);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(o+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function d0(e,t,n,r){t.type===Tn.MERGE&&t.source.queryId!==null&&(A(Qi(e.viewCache_),"We should always have a full cache before handling merges"),A(wc(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=G2(e.processor_,i,t,n,r);return H2(e.processor_,o.viewCache),A(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,sT(e,o.changes,o.viewCache.eventCache.getNode(),null)}function r3(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(o,s)=>{r.push(ls(o,s))}),n.isFullyInitialized()&&r.push(qC(n.getNode())),sT(e,r,n.getNode(),t)}function sT(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return I2(e.eventGenerator_,t,n,i)}/**
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
 */let Tc;class aT{constructor(){this.views=new Map}}function i3(e){A(!Tc,"__referenceConstructor has already been defined"),Tc=e}function o3(){return A(Tc,"Reference.ts has not been loaded"),Tc}function s3(e){return e.views.size===0}function bg(e,t,n,r){const i=t.source.queryId;if(i!==null){const o=e.views.get(i);return A(o!=null,"SyncTree gave us an op for an invalid query."),d0(o,t,n,r)}else{let o=[];for(const s of e.views.values())o=o.concat(d0(s,t,n,r));return o}}function lT(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let a=Ec(n,i?r:null),l=!1;a?l=!0:r instanceof K?(a=Ig(n,r),l=!1):(a=K.EMPTY_NODE,l=!1);const u=dd(new Jr(a,l,!1),new Jr(r,i,!1));return new J2(t,u)}return s}function a3(e,t,n,r,i,o){const s=lT(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),n3(s,n),r3(s,n)}function l3(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Zr(e);if(i==="default")for(const[l,u]of e.views.entries())s=s.concat(c0(u,n,r)),u0(u)&&(e.views.delete(l),u.query._queryParams.loadsAllData()||o.push(u.query));else{const l=e.views.get(i);l&&(s=s.concat(c0(l,n,r)),u0(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||o.push(l.query)))}return a&&!Zr(e)&&o.push(new(o3())(t._repo,t._path)),{removed:o,events:s}}function uT(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Gr(e,t){let n=null;for(const r of e.views.values())n=n||t3(r,t);return n}function cT(e,t){if(t._queryParams.loadsAllData())return hd(e);{const r=t._queryIdentifier;return e.views.get(r)}}function dT(e,t){return cT(e,t)!=null}function Zr(e){return hd(e)!=null}function hd(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let Ic;function u3(e){A(!Ic,"__referenceConstructor has already been defined"),Ic=e}function c3(){return A(Ic,"Reference.ts has not been loaded"),Ic}let d3=1;class f0{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=U2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fT(e,t,n,r,i){return R2(e.pendingWriteTree_,t,n,r,i),i?xl(e,new qi(XC(),t,n)):[]}function xi(e,t,n=!1){const r=P2(e.pendingWriteTree_,t);if(N2(e.pendingWriteTree_,t)){let o=new Pe(null);return r.snap!=null?o=o.set(fe(),!0):Ut(r.children,s=>{o=o.set(new we(s),!0)}),xl(e,new _c(r.path,o,n))}else return[]}function Il(e,t,n){return xl(e,new qi(Cg(),t,n))}function f3(e,t,n){const r=Pe.fromObject(n);return xl(e,new nl(Cg(),t,r))}function h3(e,t){return xl(e,new tl(Cg(),t))}function p3(e,t,n){const r=Pg(e,n);if(r){const i=Ng(r),o=i.path,s=i.queryId,a=kt(o,t),l=new tl(Tg(s),a);return Ag(e,o,l)}else return[]}function xc(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&(t._queryIdentifier==="default"||dT(s,t))){const l=l3(s,t,n,r);s3(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(o,(f,m)=>Zr(m));if(c&&!d){const f=e.syncPointTree_.subtree(o);if(!f.isEmpty()){const m=y3(f);for(let y=0;y<m.length;++y){const _=m[y],E=_.query,p=gT(e,_);e.listenProvider_.startListening(wa(E),rl(e,E),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?e.listenProvider_.stopListening(wa(t),null):u.forEach(f=>{const m=e.queryToTagMap.get(pd(f));e.listenProvider_.stopListening(wa(f),m)}))}v3(e,u)}return a}function hT(e,t,n,r){const i=Pg(e,r);if(i!=null){const o=Ng(i),s=o.path,a=o.queryId,l=kt(s,t),u=new qi(Tg(a),l,n);return Ag(e,s,u)}else return[]}function m3(e,t,n,r){const i=Pg(e,r);if(i){const o=Ng(i),s=o.path,a=o.queryId,l=kt(s,t),u=Pe.fromObject(n),c=new nl(Tg(a),l,u);return Ag(e,s,c)}else return[]}function kp(e,t,n,r=!1){const i=t._path;let o=null,s=!1;e.syncPointTree_.foreachOnPath(i,(f,m)=>{const y=kt(f,i);o=o||Gr(m,y),s=s||Zr(m)});let a=e.syncPointTree_.get(i);a?(s=s||Zr(a),o=o||Gr(a,fe())):(a=new aT,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;o!=null?l=!0:(l=!1,o=K.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((m,y)=>{const _=Gr(y,fe());_&&(o=o.updateImmediateChild(m,_))}));const u=dT(a,t);if(!u&&!t._queryParams.loadsAllData()){const f=pd(t);A(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=_3();e.queryToTagMap.set(f,m),e.tagToQueryMap.set(m,f)}const c=fd(e.pendingWriteTree_,i);let d=a3(a,t,n,c,o,l);if(!u&&!s&&!r){const f=cT(a,t);d=d.concat(w3(e,t,f))}return d}function Rg(e,t,n){const i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(s,a)=>{const l=kt(s,t),u=Gr(a,l);if(u)return u});return tT(i,t,o,n,!0)}function g3(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=kt(u,n);r=r||Gr(c,d)});let i=e.syncPointTree_.get(n);i?r=r||Gr(i,fe()):(i=new aT,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=r!=null,s=o?new Jr(r,!0,!1):null,a=fd(e.pendingWriteTree_,t._path),l=lT(i,t,a,o?s.getNode():K.EMPTY_NODE,o);return e3(l)}function xl(e,t){return pT(t,e.syncPointTree_,null,fd(e.pendingWriteTree_,fe()))}function pT(e,t,n,r){if(ae(e.path))return mT(e,t,n,r);{const i=t.get(fe());n==null&&i!=null&&(n=Gr(i,fe()));let o=[];const s=oe(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const u=n?n.getImmediateChild(s):null,c=nT(r,s);o=o.concat(pT(a,l,u,c))}return i&&(o=o.concat(bg(i,e,r,n))),o}}function mT(e,t,n,r){const i=t.get(fe());n==null&&i!=null&&(n=Gr(i,fe()));let o=[];return t.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,u=nT(r,s),c=e.operationForChild(s);c&&(o=o.concat(mT(c,a,l,u)))}),i&&(o=o.concat(bg(i,e,r,n))),o}function gT(e,t){const n=t.query,r=rl(e,n);return{hashFn:()=>(Z2(t)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?p3(e,n._path,r):h3(e,n._path);{const o=mM(i,n);return xc(e,n,null,o)}}}}function rl(e,t){const n=pd(t);return e.queryToTagMap.get(n)}function pd(e){return e._path.toString()+"$"+e._queryIdentifier}function Pg(e,t){return e.tagToQueryMap.get(t)}function Ng(e){const t=e.indexOf("$");return A(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new we(e.substr(0,t))}}function Ag(e,t,n){const r=e.syncPointTree_.get(t);A(r,"Missing sync point for query tag that we're tracking");const i=fd(e.pendingWriteTree_,t);return bg(r,n,i,null)}function y3(e){return e.fold((t,n,r)=>{if(n&&Zr(n))return[hd(n)];{let i=[];return n&&(i=uT(n)),Ut(r,(o,s)=>{i=i.concat(s)}),i}})}function wa(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(c3())(e._repo,e._path):e}function v3(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=pd(r),o=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(o)}}}function _3(){return d3++}function w3(e,t,n){const r=t._path,i=rl(e,t),o=gT(e,n),s=e.listenProvider_.startListening(wa(t),i,o.hashFn,o.onComplete),a=e.syncPointTree_.subtree(r);if(i)A(!Zr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!ae(u)&&c&&Zr(c))return[hd(c).query];{let f=[];return c&&(f=f.concat(uT(c).map(m=>m.query))),Ut(d,(m,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const c=l[u];e.listenProvider_.stopListening(wa(c),rl(e,c))}}return s}/**
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
 */class Og{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Og(n)}node(){return this.node_}}class Dg{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Xe(this.path_,t);return new Dg(this.syncTree_,n)}node(){return Rg(this.syncTree_,this.path_)}}const E3=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},h0=function(e,t,n){if(!e||typeof e!="object")return e;if(A(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return S3(e[".sv"],t,n);if(typeof e[".sv"]=="object")return C3(e[".sv"],t);A(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},S3=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+e)}},C3=function(e,t,n){e.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&A(!1,"Unexpected increment value: "+r);const i=t.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},T3=function(e,t,n,r){return Lg(t,new Dg(n,e),r)},yT=function(e,t,n){return Lg(e,new Og(t),n)};function Lg(e,t,n){const r=e.getPriority().val(),i=h0(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const s=e,a=h0(s.getValue(),t,n);return a!==s.getValue()||i!==s.getPriority().val()?new rt(a,at(i)):e}else{const s=e;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new rt(i))),s.forEachChild(Fe,(a,l)=>{const u=Lg(l,t.getImmediateChild(a),n);u!==l&&(o=o.updateImmediateChild(a,u))}),o}}/**
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
 */class Mg{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function Fg(e,t){let n=t instanceof we?t:new we(t),r=e,i=oe(n);for(;i!==null;){const o=os(r.node.children,i)||{children:{},childCount:0};r=new Mg(i,r,o),n=Te(n),i=oe(n)}return r}function Is(e){return e.node.value}function vT(e,t){e.node.value=t,bp(e)}function _T(e){return e.node.childCount>0}function I3(e){return Is(e)===void 0&&!_T(e)}function md(e,t){Ut(e.node.children,(n,r)=>{t(new Mg(n,e,r))})}function wT(e,t,n,r){n&&!r&&t(e),md(e,i=>{wT(i,t,!0,r)}),n&&r&&t(e)}function x3(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function kl(e){return new we(e.parent===null?e.name:kl(e.parent)+"/"+e.name)}function bp(e){e.parent!==null&&k3(e.parent,e.name,e)}function k3(e,t,n){const r=I3(n),i=Bn(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,bp(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,bp(e))}/**
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
 */const b3=/[\[\].#$\/\u0000-\u001F\u007F]/,R3=/[\[\].#$\u0000-\u001F\u007F]/,Uf=10*1024*1024,jg=function(e){return typeof e=="string"&&e.length!==0&&!b3.test(e)},ET=function(e){return typeof e=="string"&&e.length!==0&&!R3.test(e)},P3=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ET(e)},p0=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!hg(e)||e&&typeof e=="object"&&Bn(e,".sv")},ST=function(e,t,n,r){r&&t===void 0||$g(id(e,"value"),t,n)},$g=function(e,t,n){const r=n instanceof we?new YM(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+gi(r));if(typeof t=="function")throw new Error(e+"contains a function "+gi(r)+" with contents = "+t.toString());if(hg(t))throw new Error(e+"contains "+t.toString()+" "+gi(r));if(typeof t=="string"&&t.length>Uf/3&&od(t)>Uf)throw new Error(e+"contains a string greater than "+Uf+" utf8 bytes "+gi(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,o=!1;if(Ut(t,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!jg(s)))throw new Error(e+" contains an invalid key ("+s+") "+gi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qM(r,s),$g(e,a,r),QM(r)}),i&&o)throw new Error(e+' contains ".value" child '+gi(r)+" in addition to actual children.")}},N3=function(e,t,n,r){if(!(r&&n===void 0)&&!jg(n))throw new Error(id(e,t)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},CT=function(e,t,n,r){if(!(r&&n===void 0)&&!ET(n))throw new Error(id(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},A3=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),CT(e,t,n,r)},O3=function(e,t){if(oe(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},D3=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!jg(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!P3(n))throw new Error(id(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class L3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ug(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();n!==null&&!vg(o,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function TT(e,t,n){Ug(e,n),IT(e,r=>vg(r,t))}function zn(e,t,n){Ug(e,n),IT(e,r=>Cn(r,t)||Cn(t,r))}function IT(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(M3(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function M3(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();Ni&&Ct("event: "+n.toString()),Ts(r)}}}/**
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
 */const F3="repo_interrupt",j3=25;class $3{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new L3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vc(),this.transactionQueueTree_=new Mg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function U3(e,t,n){if(e.stats_=gg(e.repoInfo_),e.forceRestClient_||_M())e.server_=new yc(e.repoInfo_,(r,i,o,s)=>{m0(e,r,i,o,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>g0(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new nr(e.repoInfo_,t,(r,i,o,s)=>{m0(e,r,i,o,s)},r=>{g0(e,r)},r=>{B3(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=TM(e.repoInfo_,()=>new C2(e.stats_,e.server_)),e.infoData_=new v2,e.infoSyncTree_=new f0({startListening:(r,i,o,s)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Il(e.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),Bg(e,"connected",!1),e.serverSyncTree_=new f0({startListening:(r,i,o,s)=>(e.server_.listen(r,o,i,(a,l)=>{const u=s(a,l);zn(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function z3(e){const n=e.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zg(e){return E3({timestamp:z3(e)})}function m0(e,t,n,r,i){e.dataUpdateCount++;const o=new we(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(i)if(r){const l=sc(n,u=>at(u));s=m3(e.serverSyncTree_,o,l,i)}else{const l=at(n);s=hT(e.serverSyncTree_,o,l,i)}else if(r){const l=sc(n,u=>at(u));s=f3(e.serverSyncTree_,o,l)}else{const l=at(n);s=Il(e.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=yd(e,o)),zn(e.eventQueue_,a,s)}function g0(e,t){Bg(e,"connected",t),t===!1&&H3(e)}function B3(e,t){Ut(t,(n,r)=>{Bg(e,n,r)})}function Bg(e,t,n){const r=new we("/.info/"+t),i=at(n);e.infoData_.updateSnapshot(r,i);const o=Il(e.infoSyncTree_,r,i);zn(e.eventQueue_,r,o)}function xT(e){return e.nextWriteId_++}function W3(e,t,n){const r=g3(e.serverSyncTree_,t);return r!=null?Promise.resolve(r):e.server_.get(t).then(i=>{const o=at(i).withIndex(t._queryParams.getIndex());kp(e.serverSyncTree_,t,n,!0);let s;if(t._queryParams.loadsAllData())s=Il(e.serverSyncTree_,t._path,o);else{const a=rl(e.serverSyncTree_,t);s=hT(e.serverSyncTree_,t._path,o,a)}return zn(e.eventQueue_,t._path,s),xc(e.serverSyncTree_,t,n,null,!0),o},i=>(gd(e,"get for query "+Qe(t)+" failed: "+i),Promise.reject(new Error(i))))}function V3(e,t,n,r,i){gd(e,"set",{path:t.toString(),value:n,priority:r});const o=zg(e),s=at(n,r),a=Rg(e.serverSyncTree_,t),l=yT(s,a,o),u=xT(e),c=fT(e.serverSyncTree_,t,l,u,!0);Ug(e.eventQueue_,c),e.server_.put(t.toString(),s.val(!0),(f,m)=>{const y=f==="ok";y||$t("set at "+t+" failed: "+f);const _=xi(e.serverSyncTree_,u,!y);zn(e.eventQueue_,t,_),Y3(e,i,f,m)});const d=NT(e,t);yd(e,d),zn(e.eventQueue_,d,[])}function H3(e){gd(e,"onDisconnectEvents");const t=zg(e),n=vc();Sp(e.onDisconnect_,fe(),(i,o)=>{const s=T3(i,o,e.serverSyncTree_,t);QC(n,i,s)});let r=[];Sp(n,fe(),(i,o)=>{r=r.concat(Il(e.serverSyncTree_,i,o));const s=NT(e,i);yd(e,s)}),e.onDisconnect_=vc(),zn(e.eventQueue_,fe(),r)}function G3(e,t,n){let r;oe(t._path)===".info"?r=kp(e.infoSyncTree_,t,n):r=kp(e.serverSyncTree_,t,n),TT(e.eventQueue_,t._path,r)}function y0(e,t,n){let r;oe(t._path)===".info"?r=xc(e.infoSyncTree_,t,n):r=xc(e.serverSyncTree_,t,n),TT(e.eventQueue_,t._path,r)}function K3(e){e.persistentConnection_&&e.persistentConnection_.interrupt(F3)}function gd(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ct(n,...t)}function Y3(e,t,n,r){t&&Ts(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let o=i;r&&(o+=": "+r);const s=new Error(o);s.code=i,t(s)}})}function kT(e,t,n){return Rg(e.serverSyncTree_,t,n)||K.EMPTY_NODE}function Wg(e,t=e.transactionQueueTree_){if(t||vd(e,t),Is(t)){const n=RT(e,t);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&q3(e,kl(t),n)}else _T(t)&&md(t,n=>{Wg(e,n)})}function q3(e,t,n){const r=n.map(u=>u.currentWriteId),i=kT(e,t,r);let o=i;const s=i.hash();for(let u=0;u<n.length;u++){const c=n[u];A(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=kt(t,c.path);o=o.updateChild(d,c.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,u=>{gd(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(xi(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();vd(e,Fg(e.transactionQueueTree_,t)),Wg(e,e.transactionQueueTree_),zn(e.eventQueue_,t,c);for(let f=0;f<d.length;f++)Ts(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{$t("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}yd(e,t)}},s)}function yd(e,t){const n=bT(e,t),r=kl(n),i=RT(e,n);return Q3(e,i,r),r}function Q3(e,t,n){if(t.length===0)return;const r=[];let i=[];const s=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=kt(n,l.path);let c=!1,d;if(A(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(xi(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=j3)c=!0,d="maxretry",i=i.concat(xi(e.serverSyncTree_,l.currentWriteId,!0));else{const f=kT(e,l.path,s);l.currentInputSnapshot=f;const m=t[a].update(f.val());if(m!==void 0){$g("transaction failed: Data returned ",m,l.path);let y=at(m);typeof m=="object"&&m!=null&&Bn(m,".priority")||(y=y.updatePriority(f.getPriority()));const E=l.currentWriteId,p=zg(e),h=yT(y,f,p);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=xT(e),s.splice(s.indexOf(E),1),i=i.concat(fT(e.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(xi(e.serverSyncTree_,E,!0))}else c=!0,d="nodata",i=i.concat(xi(e.serverSyncTree_,l.currentWriteId,!0))}zn(e.eventQueue_,n,i),i=[],c&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(d),!1,null))))}vd(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)Ts(r[a]);Wg(e,e.transactionQueueTree_)}function bT(e,t){let n,r=e.transactionQueueTree_;for(n=oe(t);n!==null&&Is(r)===void 0;)r=Fg(r,n),t=Te(t),n=oe(t);return r}function RT(e,t){const n=[];return PT(e,t,n),n.sort((r,i)=>r.order-i.order),n}function PT(e,t,n){const r=Is(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);md(t,i=>{PT(e,i,n)})}function vd(e,t){const n=Is(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,vT(t,n.length>0?n:void 0)}md(t,r=>{vd(e,r)})}function NT(e,t){const n=kl(bT(e,t)),r=Fg(e.transactionQueueTree_,t);return x3(r,i=>{zf(e,i)}),zf(e,r),wT(r,i=>{zf(e,i)}),n}function zf(e,t){const n=Is(t);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(A(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(A(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(xi(e.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?vT(t,void 0):n.length=o+1,zn(e.eventQueue_,kl(t),i);for(let s=0;s<r.length;s++)Ts(r[s])}}/**
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
 */function X3(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function J3(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):$t(`Invalid query segment '${n}' in query '${e}'`)}return t}const v0=function(e,t){const n=Z3(e),r=n.namespace;n.domain==="firebase.com"&&dr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&dr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||cM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new RC(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new we(n.pathString)}},Z3=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(i=X3(e.substring(c,d)));const f=J3(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(s=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const m=t.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=t.indexOf(".");r=t.substring(0,y).toLowerCase(),n=t.substring(y+1),o=r}"ns"in f&&(o=f.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
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
 */class AT{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Qe(this.snapshot.exportVal())}}class OT{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class DT{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class xs{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ae(this._path)?null:jC(this._path)}get ref(){return new Wn(this._repo,this._path)}get _queryIdentifier(){const t=t0(this._queryParams),n=pg(t);return n==="{}"?"default":n}get _queryObject(){return t0(this._queryParams)}isEqual(t){if(t=yt(t),!(t instanceof xs))return!1;const n=this._repo===t._repo,r=vg(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+KM(this._path)}}function eF(e,t){if(e._orderByCalled===!0)throw new Error(t+": You can't combine multiple orderBy calls.")}function LT(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===rr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==Yi)throw new Error(r);if(typeof t!="string")throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==fr)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(e.getIndex()===Fe){if(t!=null&&!p0(t)||n!=null&&!p0(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(A(e.getIndex()instanceof KC||e.getIndex()===YC,"unknown index type."),t!=null&&typeof t=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function tF(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Wn extends xs{constructor(t,n){super(t,n,new Sg,!1)}get parent(){const t=UC(this._path);return t===null?null:new Wn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class cs{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new we(t),r=kc(this.ref,t);return new cs(this._node.getChild(n),r,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new cs(i,kc(this.ref,r),Fe)))}hasChild(t){const n=new we(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ds(e,t){return e=yt(e),e._checkNotDeleted("ref"),t!==void 0?kc(e._root,t):e._root}function kc(e,t){return e=yt(e),oe(e._path)===null?A3("child","path",t,!1):CT("child","path",t,!1),new Wn(e._repo,Xe(e._path,t))}function MT(e,t){e=yt(e),O3("set",e._path),ST("set",t,e._path,!1);const n=new rd;return V3(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function FT(e){e=yt(e);const t=new DT(()=>{}),n=new _d(t);return W3(e._repo,e,n).then(r=>new cs(r,new Wn(e._repo,e._path),e._queryParams.getIndex()))}class _d{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new AT("value",this,new cs(t.snapshotNode,new Wn(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new OT(this,t,n):null}matches(t){return t instanceof _d?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Vg{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new OT(this,t,n):null}createEvent(t,n){A(t.childName!=null,"Child events should have a childName.");const r=kc(new Wn(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new AT(t.type,this,new cs(t.snapshotNode,r,i),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof Vg?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function nF(e,t,n,r,i){let o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{y0(e._repo,e,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const s=new DT(n,o||void 0),a=t==="value"?new _d(s):new Vg(t,s);return G3(e._repo,e,a),()=>y0(e._repo,e,a)}function _0(e,t,n,r){return nF(e,"value",t,n,r)}class Hg{}class rF extends Hg{constructor(t,n){super(),this._value=t,this._key=n,this.type="startAfter"}_apply(t){ST("startAfter",this._value,t._path,!1);const n=g2(t._queryParams,this._value,this._key);if(tF(n),LT(n),t._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new xs(t._repo,t._path,n,t._orderByCalled)}}function iF(e,t){return N3("startAfter","key",t,!0),new rF(e,t)}class oF extends Hg{constructor(t){super(),this._limit=t,this.type="limitToFirst"}_apply(t){if(t._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new xs(t._repo,t._path,m2(t._queryParams,this._limit),t._orderByCalled)}}function w0(e){if(typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new oF(e)}class sF extends Hg{constructor(){super(...arguments),this.type="orderByKey"}_apply(t){eF(t,"orderByKey");const n=y2(t._queryParams,rr);return LT(n),new xs(t._repo,t._path,n,!0)}}function E0(){return new sF}function S0(e,...t){let n=yt(e);for(const r of t)n=r._apply(n);return n}i3(Wn);u3(Wn);/**
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
 */const aF="FIREBASE_DATABASE_EMULATOR_HOST",Rp={};let lF=!1;function uF(e,t,n,r){e.repoInfo_=new RC(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function cF(e,t,n,r,i){let o=r||e.options.databaseURL;o===void 0&&(e.options.projectId||dr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ct("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s=v0(o,i),a=s.repoInfo,l,u;typeof process<"u"&&M_&&(u=M_[aF]),u?(l=!0,o=`http://${u}?ns=${a.namespace}`,s=v0(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const c=i&&l?new Wo(Wo.OWNER):new EM(e.name,e.options,t);D3("Invalid Firebase Database URL",s),ae(s.path)||dr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=fF(a,e,c,new wM(e.name,n));return new hF(d,e)}function dF(e,t){const n=Rp[t];(!n||n[e.key]!==e)&&dr(`Database ${t}(${e.repoInfo_}) has already been deleted.`),K3(e),delete n[e.key]}function fF(e,t,n,r){let i=Rp[t.name];i||(i={},Rp[t.name]=i);let o=i[e.toURLString()];return o&&dr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new $3(e,lF,n,r),i[e.toURLString()]=o,o}class hF{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(U3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wn(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&dr("Cannot call "+t+" on a deleted database.")}}function pF(e=LS(),t){const n=rg(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=mA("database");r&&mF(n,...r)}return n}function mF(e,t,n,r={}){e=yt(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&dr("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&dr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Wo(Wo.OWNER);else if(r.mockUserToken){const s=typeof r.mockUserToken=="string"?r.mockUserToken:gA(r.mockUserToken,e.app.options.projectId);o=new Wo(s)}uF(i,t,n,o)}/**
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
 */function gF(e){oM(Es),ss(new Vi("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return cF(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),Vr(F_,j_,e),Vr(F_,j_,"esm2017")}nr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};nr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};gF();const yF={apiKey:"AIzaSyCWYjmkk34JmxhoKR59l_T-aK5C44aY72I",authDomain:"babysitters-57e3c.firebaseapp.com",databaseURL:"https://babysitters-57e3c-default-rtdb.firebaseio.com",projectId:"babysitters-57e3c",storageBucket:"babysitters-57e3c.appspot.com",messagingSenderId:"107090147671",appId:"1:107090147671:web:d1ad6872e16611aa746612"},vF=DS(yF),fs=pF(vF),il=rM(),Pp=async e=>{const t=ds(fs,`users/${e}/favorites`),n=await FT(t);if(n.exists()){const r=n.val();return Object.keys(r).map(o=>r[o])}else return[]},_F=(e,t)=>{MT(ds(fs,"users/"+e),{favorites:t})},wF=async(e,t)=>{const n=ds(fs,`users/${e}/favorites`),r=await FT(n);if(r.exists()){const i=r.val(),o=Object.keys(i).map(a=>({id:a,...i[a]})),s=o.findIndex(a=>a.id===t);s!==-1?(o.splice(s,1),MT(ds(fs,`users/${e}/favorites`),o)):console.error("Object with provided favoriteId not found in favorites array")}else console.error("No favorites found for the provided userId")},EF=nN`
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

    
`,Ys=["320","833","834","1439","1440"],SF=Object.freeze({colors:{mainBackground:"#F3F3F3",primaryGreenColor:"#103931",secondaryGreenColor:"#38cd3e",headerText:"#fbfbfb",titleText:"#8a8a89",primaryBodyText:"#11101c",secondaryBodyText:"rgba(17, 16, 28, 0.5)",buttonBorder:"rgba(251, 251, 251, 0.4)",photoBorder:"rgba(240, 63, 59, 0.2)",primaryWhite:"#FFFFFF",error:"#E74A3B",additionalGreenColor:"rgba(16, 57, 49, 0.2)"},fontWeights:{medium:500,bold:700},fontSizes:{xs:"14px",s:"16px",m:"18px",l:"22px",l2:"24px",xl:"30px",xxl:"32px"},transition:{customTrans:"250ms cubic-bezier(0.4, 0, 0.2, 1)"},mq:{mobMin:`min-width: ${Ys[0]}px`,mobMax:`max-width: ${Ys[1]}px`,tabMin:`min-width: ${Ys[2]}px`,tabMax:`max-width: ${Ys[3]}px`,deskMin:`min-width: ${Ys[4]}px`}}),CF=()=>(IE(),I.jsx("div",{children:"ErrorPage"})),jT=w.createContext(),$T=()=>w.useContext(jT),TF=({children:e})=>{const[t,n]=w.useState({isOpen:!1,formType:null,selectedNanny:null}),r=(o,s)=>{n({isOpen:!0,formType:o,selectedNanny:s})},i=()=>{n({isOpen:!1,formType:null,selectedNanny:null})};return I.jsx(jT.Provider,{value:{modalConfig:t,openModal:r,closeModal:i},children:e})};function Gg(){const{currentUser:e}=AE(ES);return{currentUser:e,name:e==null?void 0:e.name,isAuth:!!(e!=null&&e.email)}}const IF=M.div`
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
`,xF=M.div`
  background-color: #fff;
  border-radius: 10px;
`,Kg=({onClose:e,children:t})=>(w.useEffect(()=>{const n=r=>{r.key==="Escape"&&e()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[e]),I.jsx(IF,{onClick:e,children:I.jsx(xF,{onClick:n=>n.stopPropagation(),children:t})})),kF=M.button`
  font-weight: 500;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  padding: ${({$padding:e})=>e||"14px 40px"};
  border-radius: 30px;
  border: ${({$border:e})=>e?"1px solid rgba(251, 251, 251, 0.4)":"none"};
  background-color: ${({$border:e})=>e?"transparent":"#103931"};
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    background-color: rgba(16, 57, 49, 0.2);
    color: black;
  }
`,Vo=({title:e,border:t,onClick:n,padding:r})=>I.jsx(kF,{$border:t,onClick:n,$padding:r,children:e});var bF=function(t){return RF(t)&&!PF(t)};function RF(e){return!!e&&typeof e=="object"}function PF(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||OF(e)}var NF=typeof Symbol=="function"&&Symbol.for,AF=NF?Symbol.for("react.element"):60103;function OF(e){return e.$$typeof===AF}function DF(e){return Array.isArray(e)?[]:{}}function bc(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ol(DF(e),e,t):e}function LF(e,t,n){return e.concat(t).map(function(r){return bc(r,n)})}function MF(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=bc(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=bc(t[i],n):r[i]=ol(e[i],t[i],n)}),r}function ol(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||LF,n.isMergeableObject=n.isMergeableObject||bF;var r=Array.isArray(t),i=Array.isArray(e),o=r===i;return o?r?n.arrayMerge(e,t,n):MF(e,t,n):bc(t,n)}ol.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return ol(r,i,n)},{})};var Np=ol,UT=typeof global=="object"&&global&&global.Object===Object&&global,FF=typeof self=="object"&&self&&self.Object===Object&&self,Vn=UT||FF||Function("return this")(),ei=Vn.Symbol,zT=Object.prototype,jF=zT.hasOwnProperty,$F=zT.toString,qs=ei?ei.toStringTag:void 0;function UF(e){var t=jF.call(e,qs),n=e[qs];try{e[qs]=void 0;var r=!0}catch{}var i=$F.call(e);return r&&(t?e[qs]=n:delete e[qs]),i}var zF=Object.prototype,BF=zF.toString;function WF(e){return BF.call(e)}var VF="[object Null]",HF="[object Undefined]",C0=ei?ei.toStringTag:void 0;function no(e){return e==null?e===void 0?HF:VF:C0&&C0 in Object(e)?UF(e):WF(e)}function BT(e,t){return function(n){return e(t(n))}}var Yg=BT(Object.getPrototypeOf,Object);function ro(e){return e!=null&&typeof e=="object"}var GF="[object Object]",KF=Function.prototype,YF=Object.prototype,WT=KF.toString,qF=YF.hasOwnProperty,QF=WT.call(Object);function T0(e){if(!ro(e)||no(e)!=GF)return!1;var t=Yg(e);if(t===null)return!0;var n=qF.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&WT.call(n)==QF}var I0=Array.isArray,x0=Object.keys,XF=Object.prototype.hasOwnProperty,JF=typeof Element<"u";function Ap(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=I0(e),r=I0(t),i,o,s;if(n&&r){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!Ap(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,c=t instanceof RegExp;if(u!=c)return!1;if(u&&c)return e.toString()==t.toString();var d=x0(e);if(o=d.length,o!==x0(t).length)return!1;for(i=o;i--!==0;)if(!XF.call(t,d[i]))return!1;if(JF&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(s=d[i],!(s==="_owner"&&e.$$typeof)&&!Ap(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}var ZF=function(t,n){try{return Ap(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const yi=jp(ZF);function e4(){this.__data__=[],this.size=0}function VT(e,t){return e===t||e!==e&&t!==t}function wd(e,t){for(var n=e.length;n--;)if(VT(e[n][0],t))return n;return-1}var t4=Array.prototype,n4=t4.splice;function r4(e){var t=this.__data__,n=wd(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():n4.call(t,n,1),--this.size,!0}function i4(e){var t=this.__data__,n=wd(t,e);return n<0?void 0:t[n][1]}function o4(e){return wd(this.__data__,e)>-1}function s4(e,t){var n=this.__data__,r=wd(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function gr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}gr.prototype.clear=e4;gr.prototype.delete=r4;gr.prototype.get=i4;gr.prototype.has=o4;gr.prototype.set=s4;function a4(){this.__data__=new gr,this.size=0}function l4(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function u4(e){return this.__data__.get(e)}function c4(e){return this.__data__.has(e)}function bl(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var d4="[object AsyncFunction]",f4="[object Function]",h4="[object GeneratorFunction]",p4="[object Proxy]";function HT(e){if(!bl(e))return!1;var t=no(e);return t==f4||t==h4||t==d4||t==p4}var Bf=Vn["__core-js_shared__"],k0=function(){var e=/[^.]+$/.exec(Bf&&Bf.keys&&Bf.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function m4(e){return!!k0&&k0 in e}var g4=Function.prototype,y4=g4.toString;function io(e){if(e!=null){try{return y4.call(e)}catch{}try{return e+""}catch{}}return""}var v4=/[\\^$.*+?()[\]{}|]/g,_4=/^\[object .+?Constructor\]$/,w4=Function.prototype,E4=Object.prototype,S4=w4.toString,C4=E4.hasOwnProperty,T4=RegExp("^"+S4.call(C4).replace(v4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function I4(e){if(!bl(e)||m4(e))return!1;var t=HT(e)?T4:_4;return t.test(io(e))}function x4(e,t){return e==null?void 0:e[t]}function oo(e,t){var n=x4(e,t);return I4(n)?n:void 0}var sl=oo(Vn,"Map"),al=oo(Object,"create");function k4(){this.__data__=al?al(null):{},this.size=0}function b4(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var R4="__lodash_hash_undefined__",P4=Object.prototype,N4=P4.hasOwnProperty;function A4(e){var t=this.__data__;if(al){var n=t[e];return n===R4?void 0:n}return N4.call(t,e)?t[e]:void 0}var O4=Object.prototype,D4=O4.hasOwnProperty;function L4(e){var t=this.__data__;return al?t[e]!==void 0:D4.call(t,e)}var M4="__lodash_hash_undefined__";function F4(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=al&&t===void 0?M4:t,this}function Xi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xi.prototype.clear=k4;Xi.prototype.delete=b4;Xi.prototype.get=A4;Xi.prototype.has=L4;Xi.prototype.set=F4;function j4(){this.size=0,this.__data__={hash:new Xi,map:new(sl||gr),string:new Xi}}function $4(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Ed(e,t){var n=e.__data__;return $4(t)?n[typeof t=="string"?"string":"hash"]:n.map}function U4(e){var t=Ed(this,e).delete(e);return this.size-=t?1:0,t}function z4(e){return Ed(this,e).get(e)}function B4(e){return Ed(this,e).has(e)}function W4(e,t){var n=Ed(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function li(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}li.prototype.clear=j4;li.prototype.delete=U4;li.prototype.get=z4;li.prototype.has=B4;li.prototype.set=W4;var V4=200;function H4(e,t){var n=this.__data__;if(n instanceof gr){var r=n.__data__;if(!sl||r.length<V4-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new li(r)}return n.set(e,t),this.size=n.size,this}function ks(e){var t=this.__data__=new gr(e);this.size=t.size}ks.prototype.clear=a4;ks.prototype.delete=l4;ks.prototype.get=u4;ks.prototype.has=c4;ks.prototype.set=H4;function G4(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var b0=function(){try{var e=oo(Object,"defineProperty");return e({},"",{}),e}catch{}}();function GT(e,t,n){t=="__proto__"&&b0?b0(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var K4=Object.prototype,Y4=K4.hasOwnProperty;function KT(e,t,n){var r=e[t];(!(Y4.call(e,t)&&VT(r,n))||n===void 0&&!(t in e))&&GT(e,t,n)}function Sd(e,t,n,r){var i=!n;n||(n={});for(var o=-1,s=t.length;++o<s;){var a=t[o],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?GT(n,a,l):KT(n,a,l)}return n}function q4(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Q4="[object Arguments]";function R0(e){return ro(e)&&no(e)==Q4}var YT=Object.prototype,X4=YT.hasOwnProperty,J4=YT.propertyIsEnumerable,Z4=R0(function(){return arguments}())?R0:function(e){return ro(e)&&X4.call(e,"callee")&&!J4.call(e,"callee")},Rl=Array.isArray;function e6(){return!1}var qT=typeof Kt=="object"&&Kt&&!Kt.nodeType&&Kt,P0=qT&&typeof Yt=="object"&&Yt&&!Yt.nodeType&&Yt,t6=P0&&P0.exports===qT,N0=t6?Vn.Buffer:void 0,n6=N0?N0.isBuffer:void 0,QT=n6||e6,r6=9007199254740991,i6=/^(?:0|[1-9]\d*)$/;function o6(e,t){var n=typeof e;return t=t??r6,!!t&&(n=="number"||n!="symbol"&&i6.test(e))&&e>-1&&e%1==0&&e<t}var s6=9007199254740991;function XT(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=s6}var a6="[object Arguments]",l6="[object Array]",u6="[object Boolean]",c6="[object Date]",d6="[object Error]",f6="[object Function]",h6="[object Map]",p6="[object Number]",m6="[object Object]",g6="[object RegExp]",y6="[object Set]",v6="[object String]",_6="[object WeakMap]",w6="[object ArrayBuffer]",E6="[object DataView]",S6="[object Float32Array]",C6="[object Float64Array]",T6="[object Int8Array]",I6="[object Int16Array]",x6="[object Int32Array]",k6="[object Uint8Array]",b6="[object Uint8ClampedArray]",R6="[object Uint16Array]",P6="[object Uint32Array]",Re={};Re[S6]=Re[C6]=Re[T6]=Re[I6]=Re[x6]=Re[k6]=Re[b6]=Re[R6]=Re[P6]=!0;Re[a6]=Re[l6]=Re[w6]=Re[u6]=Re[E6]=Re[c6]=Re[d6]=Re[f6]=Re[h6]=Re[p6]=Re[m6]=Re[g6]=Re[y6]=Re[v6]=Re[_6]=!1;function N6(e){return ro(e)&&XT(e.length)&&!!Re[no(e)]}function qg(e){return function(t){return e(t)}}var JT=typeof Kt=="object"&&Kt&&!Kt.nodeType&&Kt,Ea=JT&&typeof Yt=="object"&&Yt&&!Yt.nodeType&&Yt,A6=Ea&&Ea.exports===JT,Wf=A6&&UT.process,hs=function(){try{var e=Ea&&Ea.require&&Ea.require("util").types;return e||Wf&&Wf.binding&&Wf.binding("util")}catch{}}(),A0=hs&&hs.isTypedArray,O6=A0?qg(A0):N6,D6=Object.prototype,L6=D6.hasOwnProperty;function ZT(e,t){var n=Rl(e),r=!n&&Z4(e),i=!n&&!r&&QT(e),o=!n&&!r&&!i&&O6(e),s=n||r||i||o,a=s?q4(e.length,String):[],l=a.length;for(var u in e)(t||L6.call(e,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||o6(u,l)))&&a.push(u);return a}var M6=Object.prototype;function Qg(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||M6;return e===n}var F6=BT(Object.keys,Object),j6=Object.prototype,$6=j6.hasOwnProperty;function U6(e){if(!Qg(e))return F6(e);var t=[];for(var n in Object(e))$6.call(e,n)&&n!="constructor"&&t.push(n);return t}function eI(e){return e!=null&&XT(e.length)&&!HT(e)}function Xg(e){return eI(e)?ZT(e):U6(e)}function z6(e,t){return e&&Sd(t,Xg(t),e)}function B6(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var W6=Object.prototype,V6=W6.hasOwnProperty;function H6(e){if(!bl(e))return B6(e);var t=Qg(e),n=[];for(var r in e)r=="constructor"&&(t||!V6.call(e,r))||n.push(r);return n}function Jg(e){return eI(e)?ZT(e,!0):H6(e)}function G6(e,t){return e&&Sd(t,Jg(t),e)}var tI=typeof Kt=="object"&&Kt&&!Kt.nodeType&&Kt,O0=tI&&typeof Yt=="object"&&Yt&&!Yt.nodeType&&Yt,K6=O0&&O0.exports===tI,D0=K6?Vn.Buffer:void 0,L0=D0?D0.allocUnsafe:void 0;function Y6(e,t){if(t)return e.slice();var n=e.length,r=L0?L0(n):new e.constructor(n);return e.copy(r),r}function nI(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function q6(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}function rI(){return[]}var Q6=Object.prototype,X6=Q6.propertyIsEnumerable,M0=Object.getOwnPropertySymbols,Zg=M0?function(e){return e==null?[]:(e=Object(e),q6(M0(e),function(t){return X6.call(e,t)}))}:rI;function J6(e,t){return Sd(e,Zg(e),t)}function iI(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var Z6=Object.getOwnPropertySymbols,oI=Z6?function(e){for(var t=[];e;)iI(t,Zg(e)),e=Yg(e);return t}:rI;function ej(e,t){return Sd(e,oI(e),t)}function sI(e,t,n){var r=t(e);return Rl(e)?r:iI(r,n(e))}function tj(e){return sI(e,Xg,Zg)}function nj(e){return sI(e,Jg,oI)}var Op=oo(Vn,"DataView"),Dp=oo(Vn,"Promise"),Lp=oo(Vn,"Set"),Mp=oo(Vn,"WeakMap"),F0="[object Map]",rj="[object Object]",j0="[object Promise]",$0="[object Set]",U0="[object WeakMap]",z0="[object DataView]",ij=io(Op),oj=io(sl),sj=io(Dp),aj=io(Lp),lj=io(Mp),vi=no;(Op&&vi(new Op(new ArrayBuffer(1)))!=z0||sl&&vi(new sl)!=F0||Dp&&vi(Dp.resolve())!=j0||Lp&&vi(new Lp)!=$0||Mp&&vi(new Mp)!=U0)&&(vi=function(e){var t=no(e),n=t==rj?e.constructor:void 0,r=n?io(n):"";if(r)switch(r){case ij:return z0;case oj:return F0;case sj:return j0;case aj:return $0;case lj:return U0}return t});const ey=vi;var uj=Object.prototype,cj=uj.hasOwnProperty;function dj(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&cj.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var B0=Vn.Uint8Array;function ty(e){var t=new e.constructor(e.byteLength);return new B0(t).set(new B0(e)),t}function fj(e,t){var n=t?ty(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var hj=/\w*$/;function pj(e){var t=new e.constructor(e.source,hj.exec(e));return t.lastIndex=e.lastIndex,t}var W0=ei?ei.prototype:void 0,V0=W0?W0.valueOf:void 0;function mj(e){return V0?Object(V0.call(e)):{}}function gj(e,t){var n=t?ty(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var yj="[object Boolean]",vj="[object Date]",_j="[object Map]",wj="[object Number]",Ej="[object RegExp]",Sj="[object Set]",Cj="[object String]",Tj="[object Symbol]",Ij="[object ArrayBuffer]",xj="[object DataView]",kj="[object Float32Array]",bj="[object Float64Array]",Rj="[object Int8Array]",Pj="[object Int16Array]",Nj="[object Int32Array]",Aj="[object Uint8Array]",Oj="[object Uint8ClampedArray]",Dj="[object Uint16Array]",Lj="[object Uint32Array]";function Mj(e,t,n){var r=e.constructor;switch(t){case Ij:return ty(e);case yj:case vj:return new r(+e);case xj:return fj(e,n);case kj:case bj:case Rj:case Pj:case Nj:case Aj:case Oj:case Dj:case Lj:return gj(e,n);case _j:return new r;case wj:case Cj:return new r(e);case Ej:return pj(e);case Sj:return new r;case Tj:return mj(e)}}var H0=Object.create,Fj=function(){function e(){}return function(t){if(!bl(t))return{};if(H0)return H0(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function jj(e){return typeof e.constructor=="function"&&!Qg(e)?Fj(Yg(e)):{}}var $j="[object Map]";function Uj(e){return ro(e)&&ey(e)==$j}var G0=hs&&hs.isMap,zj=G0?qg(G0):Uj,Bj="[object Set]";function Wj(e){return ro(e)&&ey(e)==Bj}var K0=hs&&hs.isSet,Vj=K0?qg(K0):Wj,Hj=1,Gj=2,Kj=4,aI="[object Arguments]",Yj="[object Array]",qj="[object Boolean]",Qj="[object Date]",Xj="[object Error]",lI="[object Function]",Jj="[object GeneratorFunction]",Zj="[object Map]",e$="[object Number]",uI="[object Object]",t$="[object RegExp]",n$="[object Set]",r$="[object String]",i$="[object Symbol]",o$="[object WeakMap]",s$="[object ArrayBuffer]",a$="[object DataView]",l$="[object Float32Array]",u$="[object Float64Array]",c$="[object Int8Array]",d$="[object Int16Array]",f$="[object Int32Array]",h$="[object Uint8Array]",p$="[object Uint8ClampedArray]",m$="[object Uint16Array]",g$="[object Uint32Array]",Ce={};Ce[aI]=Ce[Yj]=Ce[s$]=Ce[a$]=Ce[qj]=Ce[Qj]=Ce[l$]=Ce[u$]=Ce[c$]=Ce[d$]=Ce[f$]=Ce[Zj]=Ce[e$]=Ce[uI]=Ce[t$]=Ce[n$]=Ce[r$]=Ce[i$]=Ce[h$]=Ce[p$]=Ce[m$]=Ce[g$]=!0;Ce[Xj]=Ce[lI]=Ce[o$]=!1;function Iu(e,t,n,r,i,o){var s,a=t&Hj,l=t&Gj,u=t&Kj;if(n&&(s=i?n(e,r,i,o):n(e)),s!==void 0)return s;if(!bl(e))return e;var c=Rl(e);if(c){if(s=dj(e),!a)return nI(e,s)}else{var d=ey(e),f=d==lI||d==Jj;if(QT(e))return Y6(e,a);if(d==uI||d==aI||f&&!i){if(s=l||f?{}:jj(e),!a)return l?ej(e,G6(s,e)):J6(e,z6(s,e))}else{if(!Ce[d])return i?e:{};s=Mj(e,d,a)}}o||(o=new ks);var m=o.get(e);if(m)return m;o.set(e,s),Vj(e)?e.forEach(function(E){s.add(Iu(E,t,n,E,e,o))}):zj(e)&&e.forEach(function(E,p){s.set(p,Iu(E,t,n,p,e,o))});var y=u?l?nj:tj:l?Jg:Xg,_=c?void 0:y(e);return G4(_||e,function(E,p){_&&(p=E,E=e[p]),KT(s,p,Iu(E,t,n,p,e,o))}),s}var y$=4;function Y0(e){return Iu(e,y$)}function cI(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var v$="[object Symbol]";function ny(e){return typeof e=="symbol"||ro(e)&&no(e)==v$}var _$="Expected a function";function ry(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(_$);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(ry.Cache||li),n}ry.Cache=li;var w$=500;function E$(e){var t=ry(e,function(r){return n.size===w$&&n.clear(),r}),n=t.cache;return t}var S$=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,C$=/\\(\\)?/g,T$=E$(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(S$,function(n,r,i,o){t.push(i?o.replace(C$,"$1"):r||n)}),t});const I$=T$;var x$=1/0;function k$(e){if(typeof e=="string"||ny(e))return e;var t=e+"";return t=="0"&&1/e==-x$?"-0":t}var b$=1/0,q0=ei?ei.prototype:void 0,Q0=q0?q0.toString:void 0;function dI(e){if(typeof e=="string")return e;if(Rl(e))return cI(e,dI)+"";if(ny(e))return Q0?Q0.call(e):"";var t=e+"";return t=="0"&&1/e==-b$?"-0":t}function R$(e){return e==null?"":dI(e)}function fI(e){return Rl(e)?cI(e,k$):ny(e)?[e]:nI(I$(R$(e)))}var hI={exports:{}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ct=typeof Symbol=="function"&&Symbol.for,iy=ct?Symbol.for("react.element"):60103,oy=ct?Symbol.for("react.portal"):60106,Cd=ct?Symbol.for("react.fragment"):60107,Td=ct?Symbol.for("react.strict_mode"):60108,Id=ct?Symbol.for("react.profiler"):60114,xd=ct?Symbol.for("react.provider"):60109,kd=ct?Symbol.for("react.context"):60110,sy=ct?Symbol.for("react.async_mode"):60111,bd=ct?Symbol.for("react.concurrent_mode"):60111,Rd=ct?Symbol.for("react.forward_ref"):60112,Pd=ct?Symbol.for("react.suspense"):60113,P$=ct?Symbol.for("react.suspense_list"):60120,Nd=ct?Symbol.for("react.memo"):60115,Ad=ct?Symbol.for("react.lazy"):60116,N$=ct?Symbol.for("react.block"):60121,A$=ct?Symbol.for("react.fundamental"):60117,O$=ct?Symbol.for("react.responder"):60118,D$=ct?Symbol.for("react.scope"):60119;function tn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case iy:switch(e=e.type,e){case sy:case bd:case Cd:case Id:case Td:case Pd:return e;default:switch(e=e&&e.$$typeof,e){case kd:case Rd:case Ad:case Nd:case xd:return e;default:return t}}case oy:return t}}}function pI(e){return tn(e)===bd}ye.AsyncMode=sy;ye.ConcurrentMode=bd;ye.ContextConsumer=kd;ye.ContextProvider=xd;ye.Element=iy;ye.ForwardRef=Rd;ye.Fragment=Cd;ye.Lazy=Ad;ye.Memo=Nd;ye.Portal=oy;ye.Profiler=Id;ye.StrictMode=Td;ye.Suspense=Pd;ye.isAsyncMode=function(e){return pI(e)||tn(e)===sy};ye.isConcurrentMode=pI;ye.isContextConsumer=function(e){return tn(e)===kd};ye.isContextProvider=function(e){return tn(e)===xd};ye.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===iy};ye.isForwardRef=function(e){return tn(e)===Rd};ye.isFragment=function(e){return tn(e)===Cd};ye.isLazy=function(e){return tn(e)===Ad};ye.isMemo=function(e){return tn(e)===Nd};ye.isPortal=function(e){return tn(e)===oy};ye.isProfiler=function(e){return tn(e)===Id};ye.isStrictMode=function(e){return tn(e)===Td};ye.isSuspense=function(e){return tn(e)===Pd};ye.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Cd||e===bd||e===Id||e===Td||e===Pd||e===P$||typeof e=="object"&&e!==null&&(e.$$typeof===Ad||e.$$typeof===Nd||e.$$typeof===xd||e.$$typeof===kd||e.$$typeof===Rd||e.$$typeof===A$||e.$$typeof===O$||e.$$typeof===D$||e.$$typeof===N$)};ye.typeOf=tn;hI.exports=ye;var L$=hI.exports,mI=L$,M$={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},F$={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gI={};gI[mI.ForwardRef]=M$;gI[mI.Memo]=F$;function nt(){return nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nt.apply(this,arguments)}function yI(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Od=w.createContext(void 0);Od.displayName="FormikContext";Od.Provider;Od.Consumer;function j$(){var e=w.useContext(Od);return e}var gn=function(t){return typeof t=="function"},Dd=function(t){return t!==null&&typeof t=="object"},$$=function(t){return String(Math.floor(Number(t)))===t},Vf=function(t){return Object.prototype.toString.call(t)==="[object String]"},Hf=function(t){return Dd(t)&&gn(t.then)};function Bt(e,t,n,r){r===void 0&&(r=0);for(var i=fI(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function Ai(e,t,n){for(var r=Y0(e),i=r,o=0,s=fI(t);o<s.length-1;o++){var a=s[o],l=Bt(e,s.slice(0,o+1));if(l&&(Dd(l)||Array.isArray(l)))i=i[a]=Y0(l);else{var u=s[o+1];i=i[a]=$$(u)&&Number(u)>=0?[]:{}}}return(o===0?e:i)[s[o]]===n?e:(n===void 0?delete i[s[o]]:i[s[o]]=n,o===0&&n===void 0&&delete r[s[o]],r)}function vI(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],a=e[s];Dd(a)?n.get(a)||(n.set(a,!0),r[s]=Array.isArray(a)?[]:{},vI(a,t,n,r[s])):r[s]=t}return r}function U$(e,t){switch(t.type){case"SET_VALUES":return nt({},e,{values:t.payload});case"SET_TOUCHED":return nt({},e,{touched:t.payload});case"SET_ERRORS":return yi(e.errors,t.payload)?e:nt({},e,{errors:t.payload});case"SET_STATUS":return nt({},e,{status:t.payload});case"SET_ISSUBMITTING":return nt({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return nt({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return nt({},e,{values:Ai(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return nt({},e,{touched:Ai(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return nt({},e,{errors:Ai(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return nt({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return nt({},e,{touched:vI(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return nt({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return nt({},e,{isSubmitting:!1});default:return e}}var di={},ru={};function z$(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,o=e.validateOnMount,s=o===void 0?!1:o,a=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,c=e.onSubmit,d=yI(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=nt({validateOnChange:n,validateOnBlur:i,validateOnMount:s,onSubmit:c},d),m=w.useRef(f.initialValues),y=w.useRef(f.initialErrors||di),_=w.useRef(f.initialTouched||ru),E=w.useRef(f.initialStatus),p=w.useRef(!1),h=w.useRef({});w.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var g=w.useState(0),C=g[1],b=w.useRef({values:f.initialValues,errors:f.initialErrors||di,touched:f.initialTouched||ru,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),v=b.current,S=w.useCallback(function(k){var F=b.current;b.current=U$(F,k),F!==b.current&&C(function(j){return j+1})},[]),P=w.useCallback(function(k,F){return new Promise(function(j,W){var ee=f.validate(k,F);ee==null?j(di):Hf(ee)?ee.then(function(ce){j(ce||di)},function(ce){W(ce)}):j(ee)})},[f.validate]),O=w.useCallback(function(k,F){var j=f.validationSchema,W=gn(j)?j(F):j,ee=F&&W.validateAt?W.validateAt(F,k):W$(k,W);return new Promise(function(ce,Ge){ee.then(function(){ce(di)},function(Ze){Ze.name==="ValidationError"?ce(B$(Ze)):Ge(Ze)})})},[f.validationSchema]),U=w.useCallback(function(k,F){return new Promise(function(j){return j(h.current[k].validate(F))})},[]),G=w.useCallback(function(k){var F=Object.keys(h.current).filter(function(W){return gn(h.current[W].validate)}),j=F.length>0?F.map(function(W){return U(W,Bt(k,W))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(j).then(function(W){return W.reduce(function(ee,ce,Ge){return ce==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ce&&(ee=Ai(ee,F[Ge],ce)),ee},{})})},[U]),me=w.useCallback(function(k){return Promise.all([G(k),f.validationSchema?O(k):{},f.validate?P(k):{}]).then(function(F){var j=F[0],W=F[1],ee=F[2],ce=Np.all([j,W,ee],{arrayMerge:V$});return ce})},[f.validate,f.validationSchema,G,P,O]),X=sn(function(k){return k===void 0&&(k=v.values),S({type:"SET_ISVALIDATING",payload:!0}),me(k).then(function(F){return p.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:F})),F})});w.useEffect(function(){s&&p.current===!0&&yi(m.current,f.initialValues)&&X(m.current)},[s,X]);var Ee=w.useCallback(function(k){var F=k&&k.values?k.values:m.current,j=k&&k.errors?k.errors:y.current?y.current:f.initialErrors||{},W=k&&k.touched?k.touched:_.current?_.current:f.initialTouched||{},ee=k&&k.status?k.status:E.current?E.current:f.initialStatus;m.current=F,y.current=j,_.current=W,E.current=ee;var ce=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!k&&!!k.isSubmitting,errors:j,touched:W,status:ee,values:F,isValidating:!!k&&!!k.isValidating,submitCount:k&&k.submitCount&&typeof k.submitCount=="number"?k.submitCount:0}})};if(f.onReset){var Ge=f.onReset(v.values,bs);Hf(Ge)?Ge.then(ce):ce()}else ce()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);w.useEffect(function(){p.current===!0&&!yi(m.current,f.initialValues)&&u&&(m.current=f.initialValues,Ee(),s&&X(m.current))},[u,f.initialValues,Ee,s,X]),w.useEffect(function(){u&&p.current===!0&&!yi(y.current,f.initialErrors)&&(y.current=f.initialErrors||di,S({type:"SET_ERRORS",payload:f.initialErrors||di}))},[u,f.initialErrors]),w.useEffect(function(){u&&p.current===!0&&!yi(_.current,f.initialTouched)&&(_.current=f.initialTouched||ru,S({type:"SET_TOUCHED",payload:f.initialTouched||ru}))},[u,f.initialTouched]),w.useEffect(function(){u&&p.current===!0&&!yi(E.current,f.initialStatus)&&(E.current=f.initialStatus,S({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var zt=sn(function(k){if(h.current[k]&&gn(h.current[k].validate)){var F=Bt(v.values,k),j=h.current[k].validate(F);return Hf(j)?(S({type:"SET_ISVALIDATING",payload:!0}),j.then(function(W){return W}).then(function(W){S({type:"SET_FIELD_ERROR",payload:{field:k,value:W}}),S({type:"SET_ISVALIDATING",payload:!1})})):(S({type:"SET_FIELD_ERROR",payload:{field:k,value:j}}),Promise.resolve(j))}else if(f.validationSchema)return S({type:"SET_ISVALIDATING",payload:!0}),O(v.values,k).then(function(W){return W}).then(function(W){S({type:"SET_FIELD_ERROR",payload:{field:k,value:Bt(W,k)}}),S({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),nn=w.useCallback(function(k,F){var j=F.validate;h.current[k]={validate:j}},[]),he=w.useCallback(function(k){delete h.current[k]},[]),D=sn(function(k,F){S({type:"SET_TOUCHED",payload:k});var j=F===void 0?i:F;return j?X(v.values):Promise.resolve()}),z=w.useCallback(function(k){S({type:"SET_ERRORS",payload:k})},[]),V=sn(function(k,F){var j=gn(k)?k(v.values):k;S({type:"SET_VALUES",payload:j});var W=F===void 0?n:F;return W?X(j):Promise.resolve()}),J=w.useCallback(function(k,F){S({type:"SET_FIELD_ERROR",payload:{field:k,value:F}})},[]),Z=sn(function(k,F,j){S({type:"SET_FIELD_VALUE",payload:{field:k,value:F}});var W=j===void 0?n:j;return W?X(Ai(v.values,k,F)):Promise.resolve()}),vt=w.useCallback(function(k,F){var j=F,W=k,ee;if(!Vf(k)){k.persist&&k.persist();var ce=k.target?k.target:k.currentTarget,Ge=ce.type,Ze=ce.name,so=ce.id,ao=ce.value,Pl=ce.checked,ay=ce.outerHTML,Ps=ce.options,lo=ce.multiple;j=F||Ze||so,W=/number|range/.test(Ge)?(ee=parseFloat(ao),isNaN(ee)?"":ee):/checkbox/.test(Ge)?G$(Bt(v.values,j),Pl,ao):Ps&&lo?H$(Ps):ao}j&&Z(j,W)},[Z,v.values]),xe=sn(function(k){if(Vf(k))return function(F){return vt(F,k)};vt(k)}),Le=sn(function(k,F,j){F===void 0&&(F=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:k,value:F}});var W=j===void 0?i:j;return W?X(v.values):Promise.resolve()}),Ae=w.useCallback(function(k,F){k.persist&&k.persist();var j=k.target,W=j.name,ee=j.id,ce=j.outerHTML,Ge=F||W||ee;Le(Ge,!0)},[Le]),dt=sn(function(k){if(Vf(k))return function(F){return Ae(F,k)};Ae(k)}),Nn=w.useCallback(function(k){gn(k)?S({type:"SET_FORMIK_STATE",payload:k}):S({type:"SET_FORMIK_STATE",payload:function(){return k}})},[]),rn=w.useCallback(function(k){S({type:"SET_STATUS",payload:k})},[]),yr=w.useCallback(function(k){S({type:"SET_ISSUBMITTING",payload:k})},[]),Ue=sn(function(){return S({type:"SUBMIT_ATTEMPT"}),X().then(function(k){var F=k instanceof Error,j=!F&&Object.keys(k).length===0;if(j){var W;try{if(W=Ld(),W===void 0)return}catch(ee){throw ee}return Promise.resolve(W).then(function(ee){return p.current&&S({type:"SUBMIT_SUCCESS"}),ee}).catch(function(ee){if(p.current)throw S({type:"SUBMIT_FAILURE"}),ee})}else if(p.current&&(S({type:"SUBMIT_FAILURE"}),F))throw k})}),_t=sn(function(k){k&&k.preventDefault&&gn(k.preventDefault)&&k.preventDefault(),k&&k.stopPropagation&&gn(k.stopPropagation)&&k.stopPropagation(),Ue().catch(function(F){console.warn("Warning: An unhandled error was caught from submitForm()",F)})}),bs={resetForm:Ee,validateForm:X,validateField:zt,setErrors:z,setFieldError:J,setFieldTouched:Le,setFieldValue:Z,setStatus:rn,setSubmitting:yr,setTouched:D,setValues:V,setFormikState:Nn,submitForm:Ue},Ld=sn(function(){return c(v.values,bs)}),Hn=sn(function(k){k&&k.preventDefault&&gn(k.preventDefault)&&k.preventDefault(),k&&k.stopPropagation&&gn(k.stopPropagation)&&k.stopPropagation(),Ee()}),Md=w.useCallback(function(k){return{value:Bt(v.values,k),error:Bt(v.errors,k),touched:!!Bt(v.touched,k),initialValue:Bt(m.current,k),initialTouched:!!Bt(_.current,k),initialError:Bt(y.current,k)}},[v.errors,v.touched,v.values]),Fd=w.useCallback(function(k){return{setValue:function(j,W){return Z(k,j,W)},setTouched:function(j,W){return Le(k,j,W)},setError:function(j){return J(k,j)}}},[Z,Le,J]),jd=w.useCallback(function(k){var F=Dd(k),j=F?k.name:k,W=Bt(v.values,j),ee={name:j,value:W,onChange:xe,onBlur:dt};if(F){var ce=k.type,Ge=k.value,Ze=k.as,so=k.multiple;ce==="checkbox"?Ge===void 0?ee.checked=!!W:(ee.checked=!!(Array.isArray(W)&&~W.indexOf(Ge)),ee.value=Ge):ce==="radio"?(ee.checked=W===Ge,ee.value=Ge):Ze==="select"&&so&&(ee.value=ee.value||[],ee.multiple=!0)}return ee},[dt,xe,v.values]),Rs=w.useMemo(function(){return!yi(m.current,v.values)},[m.current,v.values]),$d=w.useMemo(function(){return typeof a<"u"?Rs?v.errors&&Object.keys(v.errors).length===0:a!==!1&&gn(a)?a(f):a:v.errors&&Object.keys(v.errors).length===0},[a,Rs,v.errors,f]),ui=nt({},v,{initialValues:m.current,initialErrors:y.current,initialTouched:_.current,initialStatus:E.current,handleBlur:dt,handleChange:xe,handleReset:Hn,handleSubmit:_t,resetForm:Ee,setErrors:z,setFormikState:Nn,setFieldTouched:Le,setFieldValue:Z,setFieldError:J,setStatus:rn,setSubmitting:yr,setTouched:D,setValues:V,submitForm:Ue,validateForm:X,validateField:zt,isValid:$d,dirty:Rs,unregisterField:he,registerField:nn,getFieldProps:jd,getFieldMeta:Md,getFieldHelpers:Fd,validateOnBlur:i,validateOnChange:n,validateOnMount:s});return ui}function B$(e){var t={};if(e.inner){if(e.inner.length===0)return Ai(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var o;if(n){if(r>=i.length)break;o=i[r++]}else{if(r=i.next(),r.done)break;o=r.value}var s=o;Bt(t,s.path)||(t=Ai(t,s.path,s.message))}}return t}function W$(e,t,n,r){n===void 0&&(n=!1);var i=Fp(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Fp(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||T0(i)?Fp(i):i!==""?i:void 0}):T0(e[r])?t[r]=Fp(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function V$(e,t,n){var r=e.slice();return t.forEach(function(o,s){if(typeof r[s]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(o);r[s]=l?Np(Array.isArray(o)?[]:{},o,n):o}else n.isMergeableObject(o)?r[s]=Np(e[s],o,n):e.indexOf(o)===-1&&r.push(o)}),r}function H$(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function G$(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,o=-1;if(Array.isArray(e))r=e,o=e.indexOf(n),i=o>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,o).concat(r.slice(o+1)):r}var K$=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?w.useLayoutEffect:w.useEffect;function sn(e){var t=w.useRef(e);return K$(function(){t.current=e}),w.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}var Y$=w.forwardRef(function(e,t){var n=e.action,r=yI(e,["action"]),i=n??"#",o=j$(),s=o.handleReset,a=o.handleSubmit;return w.createElement("form",nt({onSubmit:a,ref:t,onReset:s,action:i},r))});Y$.displayName="Form";const q$=M.div`
  position: relative;
`,_I=M.input`
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
`,Q$=M.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 16px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,X$=e=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none",...e},w.createElement("path",{d:"M0.666504 7.99996C0.666504 7.99996 3.33317 2.66663 7.99984 2.66663C12.6665 2.66663 15.3332 7.99996 15.3332 7.99996C15.3332 7.99996 12.6665 13.3333 7.99984 13.3333C3.33317 13.3333 0.666504 7.99996 0.666504 7.99996Z",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),w.createElement("path",{d:"M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),J$=e=>w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none",...e},w.createElement("g",{clipPath:"url(#clip0_283_2250)"},w.createElement("path",{d:"M11.9601 11.96C10.8205 12.8286 9.43282 13.3099 8.00008 13.3333C3.33342 13.3333 0.666748 7.99998 0.666748 7.99998C1.49601 6.45457 2.64617 5.10438 4.04008 4.03998M6.60008 2.82664C7.05897 2.71923 7.52879 2.66554 8.00008 2.66664C12.6667 2.66664 15.3334 7.99998 15.3334 7.99998C14.9287 8.75705 14.4461 9.4698 13.8934 10.1266M9.41342 9.41331C9.23032 9.60981 9.00952 9.76741 8.76418 9.87672C8.51885 9.98604 8.25402 10.0448 7.98548 10.0496C7.71693 10.0543 7.45019 10.0049 7.20116 9.9043C6.95212 9.80371 6.7259 9.65399 6.53598 9.46408C6.34606 9.27416 6.19634 9.04794 6.09575 8.7989C5.99517 8.54987 5.94577 8.28312 5.9505 8.01458C5.95524 7.74604 6.01402 7.48121 6.12333 7.23587C6.23264 6.99054 6.39025 6.76974 6.58675 6.58664",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),w.createElement("path",{d:"M0.666748 0.666626L15.3334 15.3333",stroke:"#11101c",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),w.createElement("defs",null,w.createElement("clipPath",{id:"clip0_283_2250"},w.createElement("rect",{width:16,height:16,fill:"#11101c"})))),Gf=({name:e,type:t,handleChange:n,value:r})=>{const[i,o]=w.useState(!1),s=e.charAt(0).toUpperCase()+e.slice(1),a=l=>{l.preventDefault(),o(u=>!u)};return I.jsxs(q$,{children:[I.jsx(_I,{id:e,name:e,type:e==="password"?i?"text":"password":t,onChange:n,value:r,placeholder:s}),e==="password"&&I.jsx(Q$,{onClick:a,children:i?I.jsx(X$,{}):I.jsx(J$,{})})]})},Z$=e=>w.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},w.createElement("path",{d:"M24 8L8 24",stroke:"#11101C",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),w.createElement("path",{d:"M8 8L24 24",stroke:"#11101C",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"})),eU=M.form`
  position: relative;
  width: 566px;
  background: #fbfbfb;
  border-radius: 30px;
  padding: 64px;
`,tU=M.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #11101c;
  margin-bottom: 20px;
`,nU=M.p`
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
  margin-bottom: 40px;
`,rU=M.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
`,iU=M.button`
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
`,wI=M(Z$)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    box-shadow: inset 0 0 10px #103931, 0 0 0 1px #103931;
  }
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,EI=({title:e,handleClick:t,text:n,isRegistration:r,onClose:i})=>{const o=z$({initialValues:{email:"",password:"",name:""},onSubmit:()=>t(o.values.email,o.values.password,o.values.name)});return I.jsxs(eU,{onSubmit:o.handleSubmit,children:[I.jsx(wI,{onClick:i}),I.jsx(tU,{children:e}),I.jsx(nU,{children:n}),I.jsxs(rU,{children:[r&&I.jsx(Gf,{name:"name",type:"text",handleChange:o.handleChange,value:o.values.name}),I.jsx(Gf,{name:"email",type:"email",handleChange:o.handleChange,value:o.values.email}),I.jsx(Gf,{name:"password",type:"password",handleChange:o.handleChange,value:o.values.password})]}),I.jsx(iU,{type:"submit",children:r?"Sign Up":"Log In"})]})},oU=({onClose:e})=>{const t=gl(),n=(r,i)=>{$D(il,r,i).then(({user:o})=>{const s=o.displayName||"";t(Wi({name:s,email:o.email,id:o.uid,token:o.accessToken})),localStorage.setItem("userId",o.uid),e()}).catch(o=>{console.error("Error:",o)})};return I.jsx(EI,{onClose:e,title:"Log In",handleClick:n,text:"Welcome back! Please enter your credentials to access your account and continue your babysitter search."})},sU=({onClose:e})=>{const t=gl(),n=(r,i,o)=>{jD(il,r,i).then(({user:s})=>{zD(il.currentUser,{displayName:o}).catch(a=>{console.error("Error updating name:",a)}),t(Wi({name:o,email:s.email,id:s.uid,token:s.accessToken})),localStorage.setItem("userId",s.uid),e()}).catch(s=>{const a=s.code,l=s.message;console.error("Error:",a,l)})};return I.jsx(EI,{onClose:e,title:"Registration",handleClick:n,text:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.",isRegistration:!0})},aU=e=>w.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},w.createElement("path",{d:"M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z",fill:"#103931"})),lU=M.div`
  display: flex;
  gap: 9px;
`,uU=M.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,cU=M.div`
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
`,dU=M.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${e=>e.theme.colors.headerText};
`,fU=()=>{const{name:e,isAuth:t}=Gg(),{modalConfig:n,openModal:r,closeModal:i}=$T(),o=gl(),s=()=>{HD(il).then(()=>o(Wi(null))).catch(a=>console.log(a))};return I.jsxs(lU,{children:[t?I.jsxs(uU,{children:[I.jsxs(cU,{children:[I.jsx(dU,{children:I.jsx(aU,{})}),I.jsx("span",{children:e})]}),I.jsx(Vo,{title:"Logout",border:!0,onClick:s})]}):I.jsxs(I.Fragment,{children:[I.jsx(Vo,{title:"Log in",border:!0,onClick:()=>r("login")}),I.jsx(Vo,{title:"Registration",border:!1,onClick:()=>r("registration")})]}),n.isOpen&&I.jsx(Kg,{onClose:i,children:n.formType==="login"?I.jsx(oU,{onClose:i}):n.formType==="registration"?I.jsx(sU,{onClose:i}):null})]})},hU=M.header`
  position: ${({$main:e})=>e?"absolute":"static"};
  top: 0;
  left: 128px;
  z-index: 1000;
  width: ${({$main:e})=>e?"1184px":"100%"};
  background-color: ${({$main:e,theme:t})=>e?"transparent":t.colors.primaryGreenColor};
`,pU=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  padding-inline: ${({$main:e})=>e?"0":"128px"};
`,mU=M($m)`
  font-weight: 500;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.headerText};
`,gU=M.div`
  display: flex;
  gap: 92px;
  align-items: center;
`,yU=M.nav`
  display: flex;
  gap: 40px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
`,Kf=M(RR)`
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
`,vU=({isFetching:e})=>{const t=ys(),{pathname:n}=t,{isAuth:r}=Gg(),i=n==="/BabySitterHub";return e?I.jsx(Kg,{children:I.jsx("p",{children:"loading..."})}):I.jsx(hU,{$main:i,children:I.jsxs(pU,{$main:i,children:[I.jsx(mU,{to:"/BabySitterHub",children:"Nanny.Services"}),I.jsxs(gU,{children:[I.jsxs(yU,{children:[I.jsx(Kf,{to:"/BabySitterHub",end:!0,children:"Home"}),I.jsx(Kf,{to:"/BabySitterHub/nannies",children:"Nannies"}),r&&I.jsx(Kf,{to:"/BabySitterHub/favorites",children:"Favorites"})]}),I.jsx(fU,{})]})]})})},_U=M.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`,wU=()=>{const e=gl(),[t,n]=w.useState(!0);return w.useEffect(()=>{const r=VD(il,i=>{if(i){const o={name:i.displayName,email:i.email,id:i.uid};e(Wi(o)),n(!1)}else e(Wi(null)),n(!1)});return()=>r()},[e]),I.jsx(TF,{children:I.jsxs(_U,{children:[I.jsx(vU,{isFetching:t}),I.jsx("main",{children:I.jsx(uR,{})})]})})},EU=e=>w.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},w.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 12.5L5 15L12.5 22.5L25 10L22.5 7.5L12.5 17.5L7.5 12.5Z",fill:"#FBFBFB"})),SU=M.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: ${e=>e.theme.colors.mainBackground};
  border-radius: 20px;
  padding: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
`,CU=M.div`
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background: ${e=>e.theme.colors.primaryGreenColor};
  display: flex;
  align-items: center;
  justify-content: center;
`,TU=M.div`
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
`,IU=()=>I.jsxs(SU,{children:[I.jsx(CU,{children:I.jsx(EU,{})}),I.jsxs(TU,{children:[I.jsx("h2",{children:"Experienced Nannies"}),I.jsx("span",{children:"15,000"})]})]}),xU="/BabySitterHub/assets/MainPageImg-hMIncv30.jpg",kU=e=>w.createElement("svg",{width:15,height:17,viewBox:"0 0 15 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},w.createElement("path",{d:"M12.8229 1.67313C12.7461 1.12622 12.2404 0.745174 11.6935 0.822036L2.78109 2.0746C2.23418 2.15146 1.85313 2.65713 1.92999 3.20404C2.00685 3.75095 2.51252 4.13199 3.05943 4.05513L10.9816 2.94175L12.095 10.8639C12.1718 11.4108 12.6775 11.7918 13.2244 11.715C13.7713 11.6381 14.1524 11.1325 14.0755 10.5855L12.8229 1.67313ZM1.79864 16.7896L12.6313 2.41412L11.034 1.21049L0.201365 15.5859L1.79864 16.7896Z",fill:"#FBFBFB"})),bU=M.section`
  position: relative;
  width: 100%;
  max-width: 1370px;
  margin: 30px;
  border-radius: 30px;
  height: calc(100lvh - 64px);
  display: flex;
  overflow: auto;
  background-color: ${e=>e.theme.colors.primaryGreenColor};
`,RU=M.div`
  width: 517px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 251px 64px 15px 96px;
  color: ${e=>e.theme.colors.headerText};
`,PU=M.h1`
  font-weight: 500;
  font-size: 70px;
  line-height: 100%;
  letter-spacing: -0.03em;
  margin-bottom: 28px;
`,NU=M.p`
  font-size: 28px;
  line-height: 107%;
  letter-spacing: -0.02em;
  margin-bottom: 64px;
`,AU=M.button`
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
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
`,OU=M.div`
  width: 699px;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    box-shadow: inset 0 4px 4px 0 rgba(18, 20, 23, 0.6);
  }
`,DU=()=>I.jsxs(bU,{children:[I.jsxs(RU,{children:[I.jsx(PU,{children:"Make Life Easier for the Family:"}),I.jsx(NU,{children:"Find Babysitters Online for All Occasions"}),I.jsxs(AU,{as:$m,to:"/BabySitterHub/nannies",children:["Get started",I.jsx(kU,{})]})]}),I.jsx(OU,{children:I.jsx("img",{src:xU})}),I.jsx(IU,{})]}),LU=()=>I.jsx(DU,{}),MU=e=>w.createElement("svg",{width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},w.createElement("path",{d:"M22.5766 4.99419C22.0233 4.44061 21.3663 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8047 3.40226 16.0817 3.70187C15.3586 4.00147 14.7016 4.44061 14.1483 4.99419L13 6.14252L11.8516 4.99419C10.734 3.87652 9.21809 3.24863 7.63747 3.24863C6.05685 3.24863 4.54097 3.87652 3.4233 4.99419C2.30563 6.11186 1.67773 7.62774 1.67773 9.20836C1.67773 10.789 2.30563 12.3049 3.4233 13.4225L4.57163 14.5709L13 22.9992L21.4283 14.5709L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5693 6.20448 23.1302 5.54751 22.5766 4.99419Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),FU=M.article`
  width: 100%;
  display: flex;
  padding: 24px;
  border-radius: 24px;
  background-color: ${e=>e.theme.colors.headerText};
`,jU=M.div`
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
`,$U=M.div`
  display: flex;
  flex-direction: column;
  gap: ${({$fullInfo:e})=>e?"48px":"14px"};
`,UU=M.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,zU=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,BU=M.div`
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
`,WU=M.div`
  display: flex;
  gap: 48px;
  align-items: center;
`,VU=M.div`
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
`,HU=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,GU=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,KU=M.span`
  span {
    color: ${e=>e.theme.colors.secondaryGreenColor};
  }
`,YU=M.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,qU=M.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${e=>e.theme.colors.secondaryBodyText};
`,QU=M.div`
  display: flex;
  gap: 40px;
  align-items: center;
`,XU=M.button`
  text-align: start;
  border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration-skip-ink: none;
  color: ${e=>e.theme.colors.primaryBodyText};
  transition: ${e=>e.theme.transition.customTrans};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) scaleX(1);
    width: 100%;
    height: 1px;
    background-color: ${e=>e.theme.colors.primaryBodyText};
    transition: transform 0.3s ease;
    transform-origin: center;
  }
  &:hover::after {
    transform: translateX(-50%) scaleX(0);
  }
  &:hover {
    transform: scale(1.1);
  }
`,JU=M.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,ZU=M(MU)`
  fill: ${({$clicked:e})=>e?t=>t.theme.colors.primaryGreenColor:"none"};
  stroke: ${({$clicked:e})=>e?t=>t.theme.colors.primaryGreenColor:"#11101c"};

  cursor: pointer;
  transition: ${e=>e.theme.transition.customTrans};
  &:hover {
    stroke: ${e=>e.theme.colors.primaryGreenColor};
    transform: scale(1.1);
  }
`,SI=e=>w.createElement("svg",{width:16,height:15,viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},w.createElement("path",{d:"M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5795 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703Z",fill:"#FFC531",stroke:"#FFC531",strokeWidth:1.2})),e5=e=>w.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},w.createElement("g",{clipPath:"url(#clip0_31_1949)"},w.createElement("path",{d:"M14 6.66663C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66663C2 5.07533 2.63214 3.5492 3.75736 2.42399C4.88258 1.29877 6.4087 0.666626 8 0.666626C9.5913 0.666626 11.1174 1.29877 12.2426 2.42399C13.3679 3.5492 14 5.07533 14 6.66663Z",stroke:"#11101C",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),w.createElement("path",{d:"M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z",stroke:"#11101C",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),w.createElement("defs",null,w.createElement("clipPath",{id:"clip0_31_1949"},w.createElement("rect",{width:16,height:16,fill:"white"})))),t5=M.li`
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
`,Qs=({label:e,value:t})=>I.jsxs(t5,{children:[I.jsx("span",{children:e}),I.jsx("p",{children:t})]}),n5=M.article`
  max-width: 433px;
`,r5=M.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,i5=M.div`
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
`,o5=M.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
`,s5=M.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: ${e=>e.theme.colors.primaryBodyText};
`,a5=M.span`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${e=>e.theme.colors.primaryBodyText};
`,l5=M.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${e=>e.theme.colors.secondaryBodyText};
`,u5=({review:e})=>{const{reviewer:t,rating:n,comment:r}=e;return I.jsxs(n5,{children:[I.jsxs(r5,{children:[I.jsx(i5,{children:e.avatar?I.jsx("img",{src:e.avatar}):I.jsx("span",{children:t.charAt(0).toUpperCase()})}),I.jsxs(o5,{children:[I.jsx(s5,{children:t}),I.jsxs(a5,{children:[I.jsx(SI,{}),I.jsx("span",{children:n.toString().length===1?`${n}.0`:n})]})]})]}),I.jsx(l5,{children:r})]})},c5=M.div`
  border-radius: 30px;
  width: 600px;
  height: auto;
  background: #fbfbfb;
  position: relative;
  padding: 34px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`,d5=M.div`
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
`,f5=M.div`
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
`,h5=M.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, auto);
  grid-row-gap: 10px;
  grid-column-gap: 8px;
`,p5=M.textarea`
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
`,go=({name:e,type:t,placeholder:n,value:r,onChange:i,isGridStretchRow:o})=>I.jsx(_I,{name:e,type:t,placeholder:n,value:r,onChange:i,$isGridStretchRow:o}),m5=({onClose:e,nanny:t})=>{const{name:n,avatar_url:r}=t;return I.jsxs(c5,{children:[I.jsx(wI,{onClick:e}),I.jsxs(d5,{children:[I.jsx("h3",{children:"Make an appointment with a babysitter"}),I.jsx("p",{children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."})]}),I.jsxs(f5,{children:[I.jsx("img",{src:r,alt:"Portrait of the babysitter"}),I.jsxs("div",{children:[I.jsx("span",{children:"Your nanny"}),I.jsx("h4",{children:n})]})]}),I.jsxs(h5,{children:[I.jsx(go,{name:"address",type:"text",placeholder:"Address"}),I.jsx(go,{name:"phone",type:"tel",placeholder:"+380"}),I.jsx(go,{name:"child_age",type:"number",placeholder:"Child's age"}),I.jsx(go,{name:"time",type:"time",placeholder:"00:00"}),I.jsx(go,{name:"email",type:"email",placeholder:"Email",isGridStretchRow:"true"}),I.jsx(go,{name:"parent_name",type:"text",placeholder:"Father's or mother's name",isGridStretchRow:"true"}),I.jsx(p5,{placeholder:"Comment"})]}),I.jsx(Vo,{title:"Send",border:!1,padding:"14px"})]})},g5=e=>{const t=new Date(e),n=new Date;let r=n.getFullYear()-t.getFullYear();const i=n.getMonth()-t.getMonth();return(i<0||i===0&&n.getDate()<t.getDate())&&r--,r},CI=({nanny:e})=>{const{currentUser:t,isAuth:n}=Gg(),[r,i]=w.useState(!1),{modalConfig:o,openModal:s,closeModal:a}=$T(),[l,u]=w.useState(null),c=gl(),{about:d,avatar_url:f,birthday:m,characters:y,education:_,experience:E,id:p,kids_age:h,location:g,name:C,price_per_hour:b,rating:v,reviews:S}=e;w.useEffect(()=>{(async()=>{if(t&&e)try{const X=(await Pp(t.id)).some(Ee=>Ee.id===e.id);u(X)}catch(me){console.error("Error fetching favorites",me)}})()},[t,e]);const P=y.map(G=>G.charAt(0).toUpperCase()+G.slice(1)).join(", "),O=()=>{s("appointment",e)},U=async()=>{if(n)try{const G=await Pp(t.id);if(G.some(X=>X.id===e.id))if(u(!1),e.id){console.log("removed"),await wF(t.id,e.id);const X=t==null?void 0:t.favorites.filter(zt=>zt.id!==e.id),Ee={...t,favorites:X};c(Wi(Ee))}else console.error("Error: Nanny id is null or undefined");else{const X=[...G,e];await _F(t.id,X);const Ee={...t,favorites:X};c(Wi(Ee)),u(!0)}}catch(G){console.error("Error adding to favorites:",G)}else s("login")};return I.jsxs(FU,{children:[I.jsx(jU,{children:I.jsx("img",{src:f,alt:"Portrait of the babysitter"})}),I.jsxs($U,{$fullInfo:r,children:[I.jsxs(UU,{children:[I.jsxs(zU,{children:[I.jsxs(BU,{children:[I.jsx("span",{children:"Nanny"}),I.jsx("h2",{children:C})]}),I.jsxs(WU,{children:[I.jsxs(VU,{children:[I.jsxs(HU,{children:[I.jsx(e5,{}),I.jsx("p",{children:g})]}),I.jsxs(GU,{children:[I.jsx(SI,{}),I.jsxs("p",{children:["Rating: ",v]})]}),I.jsxs(KU,{children:["Price / 1 hour:",I.jsxs("span",{children:[" ",b,"$"]})]})]}),I.jsx(ZU,{onClick:U,$clicked:l})]})]}),I.jsxs(YU,{children:[I.jsx(Qs,{label:"Age:",value:g5(m)}),I.jsx(Qs,{label:"Experience:",value:E}),I.jsx(Qs,{label:"Kids age:",value:h}),I.jsx(Qs,{label:"Characters:",value:P}),I.jsx(Qs,{label:"Education:",value:_})]}),I.jsx(qU,{children:d})]}),r&&I.jsx(JU,{children:S.map((G,me)=>I.jsx(u5,{review:G},me))}),I.jsxs(QU,{children:[r&&I.jsx(Vo,{title:"Make an appointment",border:!1,padding:"14px 28px",onClick:O}),I.jsx(XU,{onClick:()=>i(!r),children:r?"Show less":"Read more"})]})]}),o.isOpen&&o.formType==="appointment"&&I.jsx(Kg,{onClose:a,children:I.jsx(m5,{onClose:a,nanny:o.selectedNanny})})]})},y5=e=>w.createElement("svg",{width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},w.createElement("path",{d:"M1 1.5L6 6.5L11 1.5",stroke:"#FBFBFB",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),v5=M.div`
  position: relative;
  display: inline-block;
  margin-bottom: 32px;
`,_5=M.button`
  padding: 16px 23px 16px 18px;
  width: 226px;
  background-color: ${e=>e.theme.colors.primaryGreenColor};
  border-radius: 14px;
  border: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: ${e=>e.theme.colors.headerText};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,w5=M.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  padding: 14px 18px;
  list-style: none;
  border-radius: 14px;
  box-shadow: 0 20px 69px 0 rgba(0, 0, 0, 0.07);
  background: ${e=>e.theme.colors.primaryWhite};
  display: flex;
  flex-direction: column;
  gap: 12px;
`,E5=M.li`
  font-size: 18px;
  line-height: 111%;
  color: rgba(17, 16, 28, 0.3);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${e=>e.selected&&`
    color: ${e.theme.colors.primaryBodyText};
  `}
`,TI=({onSelect:e})=>{const t=[{label:"A to Z",value:"a-z"},{label:"Z to A",value:"z-a"},{label:"Price: Low to High",value:"asc"},{label:"Price: High to Low",value:"desc"},{label:"Popular",value:"popular"},{label:"Not popular",value:"not-popular"},{label:"Show all",value:"show-all"}],[n,r]=w.useState(!1),[i,o]=w.useState(!1),[s,a]=w.useState(t[6]||null),l=()=>{r(!n),o(!i)},u=c=>{a(c),e(c.value),r(!1),o(!i)};return I.jsxs(v5,{children:[I.jsxs(_5,{onClick:l,children:[s.label||"Select an option",I.jsx(y5,{style:{transform:i?"rotate(180deg)":"rotate(0)"}})]}),n&&I.jsx(w5,{children:t.map((c,d)=>I.jsx(E5,{onClick:()=>u(c),selected:s&&c.value===s.value,children:c.label},d))})]})},S5=M.div`
  display: flex;
  flex-direction: column;
  & > button {
    align-self: center;
  }
`,II=M.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
`,C5=()=>{const{currentUser:e}=AE(ES),[t,n]=w.useState([]);w.useEffect(()=>{(async()=>{try{if(e){const s=await Pp(e.id);n(s),console.log("favorites",s)}}catch(s){console.error("Error fetching favorites",s)}})()},[e]);const r=o=>{console.log("Selected option:",o),setSelectedOption(o)},i=M.section`
    max-width: 1184px;
    margin: 64px auto;
  `;return I.jsxs(i,{children:[I.jsx(TI,{onSelect:r}),I.jsx(II,{children:t==null?void 0:t.map(o=>I.jsx(CI,{nanny:o},o.id))})]})},T5=({sortBy:e})=>{const[t,n]=w.useState([]),[r,i]=w.useState(null),[o,s]=w.useState(!1);w.useEffect(()=>{const u=ds(fs,"/nannies"),c=S0(u,E0(),w0(3)),d=_0(c,f=>{const m=f.val();if(m!==null){const y=Object.values(m);n(y);const _=parseInt(Object.keys(m)[Object.keys(m).length-1]);i(_)}});return()=>{d()}},[]);const a=()=>{if(!r)return;const u=ds(fs,"/nannies"),c=S0(u,E0(),iF(r.toString()),w0(3));return _0(c,f=>{const m=f.val();if(m!==null){const y=Object.values(m);n(E=>[...E,...y]);const _=parseInt(Object.keys(m)[Object.keys(m).length-1]);i(_),Object.keys(m).length<3&&s(!0)}})},l=[...t].sort((u,c)=>{switch(e){case"a-z":return u.name.localeCompare(c.name);case"z-a":return c.name.localeCompare(u.name);case"asc":return u.price_per_hour-c.price_per_hour;case"desc":return c.price_per_hour-u.price_per_hour;case"popular":return c.rating-u.rating;case"not-popular":return u.rating-c.rating;case"show-all":default:return 0}});return console.log("sortedNannies",l),I.jsxs(S5,{children:[I.jsx(II,{children:l.map(u=>I.jsx(CI,{nanny:u},u.id))}),!o&&I.jsx(Vo,{title:"Load More",border:!1,padding:"14px 40px",onClick:a})]})},I5=M.section`
  max-width: 1184px;
  margin: 64px auto;
`,x5=()=>{const[e,t]=w.useState(null),n=r=>{t(r),console.log("Selected option:",r)};return I.jsxs(I5,{children:[I.jsx(TI,{onSelect:n}),I.jsx(T5,{sortBy:e})]})},k5=yR([{element:I.jsx(wU,{}),errorElement:I.jsx(CF,{}),children:[{path:"/BabySitterHub",element:I.jsx(LU,{})},{path:"/BabySitterHub/nannies",element:I.jsx(x5,{})},{path:"/BabySitterHub/favorites",element:I.jsx(C5,{})}]}]);qf.createRoot(document.getElementById("root")).render(I.jsx(At.StrictMode,{children:I.jsx(JR,{store:sA,children:I.jsxs(ZP,{theme:SF,children:[I.jsx(EF,{}),I.jsx(w.Suspense,{fallback:I.jsx(I.Fragment,{children:"loading"}),children:I.jsx(IR,{router:k5})})]})})}))});export default b5();
