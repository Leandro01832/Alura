!function n(t,e,r){function i(o,c){if(!e[o]){if(!t[o]){var a="function"==typeof require&&require;if(!c&&a)return a(o,!0);if(u)return u(o,!0);var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}var l=e[o]={exports:{}};t[o][0].call(l.exports,function(n){var e=t[o][1][n];return i(e||n)},l,l.exports,n,t,e,r)}return e[o].exports}for(var u="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(n,t,e){!function(){var n=!1,e=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){},Class.extend=function(t,r){function i(){!n&&this.init&&this.init.apply(this,arguments)}void 0==r&&(r=t,t="Class");var u=this.prototype;n=!0;var o=new this;n=!1;for(var c in r)o[c]="function"==typeof r[c]&&"function"==typeof u[c]&&e.test(r[c])?function(n,t){return function(){var e=this._super;this._super=u[n];var r=t.apply(this,arguments);return this._super=e,r}}(c,r[c]):r[c];i.prototype=o;var a=new Function("return function "+t+"(){ }")();return i.prototype.constructor=a,i.extend=arguments.callee,i},t.exports=Class}()},{}],2:[function(n,t,e){(function(){function n(n){function t(t,e,r,i,u,o){for(;u>=0&&u<o;u+=n){var c=i?i[u]:u;r=e(r,t[c],c,t)}return r}return function(e,r,i,u){r=b(r,u,4);var o=!A(e)&&m.keys(e),c=(o||e).length,a=n>0?0:c-1;return arguments.length<3&&(i=e[o?o[a]:a],a+=n),t(e,r,i,o,a,c)}}function r(n){return function(t,e,r){e=x(e,r);for(var i=T(t),u=n>0?0:i-1;u>=0&&u<i;u+=n)if(e(t[u],u,t))return u;return-1}}function i(n,t,e){return function(r,i,u){var o=0,c=T(r);if("number"==typeof u)n>0?o=u>=0?u:Math.max(u+c,o):c=u>=0?Math.min(u+1,c):u+c+1;else if(e&&u&&c)return u=e(r,i),r[u]===i?u:-1;if(i!==i)return(u=t(p.call(r,o,c),m.isNaN))>=0?u+o:-1;for(u=n>0?o:c-1;u>=0&&u<c;u+=n)if(r[u]===i)return u;return-1}}function u(n,t){var e=q.length,r=n.constructor,i=m.isFunction(r)&&r.prototype||s,u="constructor";for(m.has(n,u)&&!m.contains(t,u)&&t.push(u);e--;)(u=q[e])in n&&n[u]!==i[u]&&!m.contains(t,u)&&t.push(u)}var o=this,c=o._,a=Array.prototype,s=Object.prototype,l=Function.prototype,f=a.push,p=a.slice,h=s.toString,v=s.hasOwnProperty,d=Array.isArray,y=Object.keys,g=l.bind,S=Object.create,_=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};void 0!==e?(void 0!==t&&t.exports&&(e=t.exports=m),e._=m):o._=m,m.VERSION="1.8.3";var b=function(n,t,e){if(void 0===t)return n;switch(null==e?3:e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,i){return n.call(t,e,r,i)};case 4:return function(e,r,i,u){return n.call(t,e,r,i,u)}}return function(){return n.apply(t,arguments)}},x=function(n,t,e){return null==n?m.identity:m.isFunction(n)?b(n,t,e):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var k=function(n,t){return function(e){var r=arguments.length;if(r<2||null==e)return e;for(var i=1;i<r;i++)for(var u=arguments[i],o=n(u),c=o.length,a=0;a<c;a++){var s=o[a];t&&void 0!==e[s]||(e[s]=u[s])}return e}},w=function(n){if(!m.isObject(n))return{};if(S)return S(n);_.prototype=n;var t=new _;return _.prototype=null,t},j=function(n){return function(t){return null==t?void 0:t[n]}},E=Math.pow(2,53)-1,T=j("length"),A=function(n){var t=T(n);return"number"==typeof t&&t>=0&&t<=E};m.each=m.forEach=function(n,t,e){t=b(t,e);var r,i;if(A(n))for(r=0,i=n.length;r<i;r++)t(n[r],r,n);else{var u=m.keys(n);for(r=0,i=u.length;r<i;r++)t(n[u[r]],u[r],n)}return n},m.map=m.collect=function(n,t,e){t=x(t,e);for(var r=!A(n)&&m.keys(n),i=(r||n).length,u=Array(i),o=0;o<i;o++){var c=r?r[o]:o;u[o]=t(n[c],c,n)}return u},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,e){var r;if(void 0!==(r=A(n)?m.findIndex(n,t,e):m.findKey(n,t,e))&&-1!==r)return n[r]},m.filter=m.select=function(n,t,e){var r=[];return t=x(t,e),m.each(n,function(n,e,i){t(n,e,i)&&r.push(n)}),r},m.reject=function(n,t,e){return m.filter(n,m.negate(x(t)),e)},m.every=m.all=function(n,t,e){t=x(t,e);for(var r=!A(n)&&m.keys(n),i=(r||n).length,u=0;u<i;u++){var o=r?r[u]:u;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,e){t=x(t,e);for(var r=!A(n)&&m.keys(n),i=(r||n).length,u=0;u<i;u++){var o=r?r[u]:u;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,e,r){return A(n)||(n=m.values(n)),("number"!=typeof e||r)&&(e=0),m.indexOf(n,t,e)>=0},m.invoke=function(n,t){var e=p.call(arguments,2),r=m.isFunction(t);return m.map(n,function(n){var i=r?t:n[t];return null==i?i:i.apply(n,e)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,e){var r,i,u=-1/0,o=-1/0;if(null==t&&null!=n)for(var c=0,a=(n=A(n)?n:m.values(n)).length;c<a;c++)(r=n[c])>u&&(u=r);else t=x(t,e),m.each(n,function(n,e,r){((i=t(n,e,r))>o||i===-1/0&&u===-1/0)&&(u=n,o=i)});return u},m.min=function(n,t,e){var r,i,u=1/0,o=1/0;if(null==t&&null!=n)for(var c=0,a=(n=A(n)?n:m.values(n)).length;c<a;c++)(r=n[c])<u&&(u=r);else t=x(t,e),m.each(n,function(n,e,r){((i=t(n,e,r))<o||i===1/0&&u===1/0)&&(u=n,o=i)});return u},m.shuffle=function(n){for(var t,e=A(n)?n:m.values(n),r=e.length,i=Array(r),u=0;u<r;u++)(t=m.random(0,u))!==u&&(i[u]=i[t]),i[t]=e[u];return i},m.sample=function(n,t,e){return null==t||e?(A(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,e){return t=x(t,e),m.pluck(m.map(n,function(n,e,r){return{value:n,index:e,criteria:t(n,e,r)}}).sort(function(n,t){var e=n.criteria,r=t.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(e<r||void 0===r)return-1}return n.index-t.index}),"value")};var O=function(n){return function(t,e,r){var i={};return e=x(e,r),m.each(t,function(r,u){var o=e(r,u,t);n(i,r,o)}),i}};m.groupBy=O(function(n,t,e){m.has(n,e)?n[e].push(t):n[e]=[t]}),m.indexBy=O(function(n,t,e){n[e]=t}),m.countBy=O(function(n,t,e){m.has(n,e)?n[e]++:n[e]=1}),m.toArray=function(n){return n?m.isArray(n)?p.call(n):A(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:A(n)?n.length:m.keys(n).length},m.partition=function(n,t,e){t=x(t,e);var r=[],i=[];return m.each(n,function(n,e,u){(t(n,e,u)?r:i).push(n)}),[r,i]},m.first=m.head=m.take=function(n,t,e){if(null!=n)return null==t||e?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,e){return p.call(n,0,Math.max(0,n.length-(null==t||e?1:t)))},m.last=function(n,t,e){if(null!=n)return null==t||e?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,e){return p.call(n,null==t||e?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var C=function(n,t,e,r){for(var i=[],u=0,o=r||0,c=T(n);o<c;o++){var a=n[o];if(A(a)&&(m.isArray(a)||m.isArguments(a))){t||(a=C(a,t,e));var s=0,l=a.length;for(i.length+=l;s<l;)i[u++]=a[s++]}else e||(i[u++]=a)}return i};m.flatten=function(n,t){return C(n,t,!1)},m.without=function(n){return m.difference(n,p.call(arguments,1))},m.uniq=m.unique=function(n,t,e,r){m.isBoolean(t)||(r=e,e=t,t=!1),null!=e&&(e=x(e,r));for(var i=[],u=[],o=0,c=T(n);o<c;o++){var a=n[o],s=e?e(a,o,n):a;t?(o&&u===s||i.push(a),u=s):e?m.contains(u,s)||(u.push(s),i.push(a)):m.contains(i,a)||i.push(a)}return i},m.union=function(){return m.uniq(C(arguments,!0,!0))},m.intersection=function(n){for(var t=[],e=arguments.length,r=0,i=T(n);r<i;r++){var u=n[r];if(!m.contains(t,u)){for(var o=1;o<e&&m.contains(arguments[o],u);o++);o===e&&t.push(u)}}return t},m.difference=function(n){var t=C(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,T).length||0,e=Array(t),r=0;r<t;r++)e[r]=m.pluck(n,r);return e},m.object=function(n,t){for(var e={},r=0,i=T(n);r<i;r++)t?e[n[r]]=t[r]:e[n[r][0]]=n[r][1];return e},m.findIndex=r(1),m.findLastIndex=r(-1),m.sortedIndex=function(n,t,e,r){for(var i=(e=x(e,r,1))(t),u=0,o=T(n);u<o;){var c=Math.floor((u+o)/2);e(n[c])<i?u=c+1:o=c}return u},m.indexOf=i(1,m.findIndex,m.sortedIndex),m.lastIndexOf=i(-1,m.findLastIndex),m.range=function(n,t,e){null==t&&(t=n||0,n=0),e=e||1;for(var r=Math.max(Math.ceil((t-n)/e),0),i=Array(r),u=0;u<r;u++,n+=e)i[u]=n;return i};var I=function(n,t,e,r,i){if(!(r instanceof t))return n.apply(e,i);var u=w(n.prototype),o=n.apply(u,i);return m.isObject(o)?o:u};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,p.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var e=p.call(arguments,2),r=function(){return I(n,r,t,this,e.concat(p.call(arguments)))};return r},m.partial=function(n){var t=p.call(arguments,1),e=function(){for(var r=0,i=t.length,u=Array(i),o=0;o<i;o++)u[o]=t[o]===m?arguments[r++]:t[o];for(;r<arguments.length;)u.push(arguments[r++]);return I(n,e,this,this,u)};return e},m.bindAll=function(n){var t,e,r=arguments.length;if(r<=1)throw new Error("bindAll must be passed function names");for(t=1;t<r;t++)n[e=arguments[t]]=m.bind(n[e],n);return n},m.memoize=function(n,t){var e=function(r){var i=e.cache,u=""+(t?t.apply(this,arguments):r);return m.has(i,u)||(i[u]=n.apply(this,arguments)),i[u]};return e.cache={},e},m.delay=function(n,t){var e=p.call(arguments,2);return setTimeout(function(){return n.apply(null,e)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,e){var r,i,u,o=null,c=0;e||(e={});var a=function(){c=!1===e.leading?0:m.now(),o=null,u=n.apply(r,i),o||(r=i=null)};return function(){var s=m.now();c||!1!==e.leading||(c=s);var l=t-(s-c);return r=this,i=arguments,l<=0||l>t?(o&&(clearTimeout(o),o=null),c=s,u=n.apply(r,i),o||(r=i=null)):o||!1===e.trailing||(o=setTimeout(a,l)),u}},m.debounce=function(n,t,e){var r,i,u,o,c,a=function(){var s=m.now()-o;s<t&&s>=0?r=setTimeout(a,t-s):(r=null,e||(c=n.apply(u,i),r||(u=i=null)))};return function(){u=this,i=arguments,o=m.now();var s=e&&!r;return r||(r=setTimeout(a,t)),s&&(c=n.apply(u,i),u=i=null),c}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var e=t,r=n[t].apply(this,arguments);e--;)r=n[e].call(this,r);return r}},m.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},m.before=function(n,t){var e;return function(){return--n>0&&(e=t.apply(this,arguments)),n<=1&&(t=null),e}},m.once=m.partial(m.before,2);var F=!{toString:null}.propertyIsEnumerable("toString"),q=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(y)return y(n);var t=[];for(var e in n)m.has(n,e)&&t.push(e);return F&&u(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var e in n)t.push(e);return F&&u(n,t),t},m.values=function(n){for(var t=m.keys(n),e=t.length,r=Array(e),i=0;i<e;i++)r[i]=n[t[i]];return r},m.mapObject=function(n,t,e){t=x(t,e);for(var r,i=m.keys(n),u=i.length,o={},c=0;c<u;c++)o[r=i[c]]=t(n[r],r,n);return o},m.pairs=function(n){for(var t=m.keys(n),e=t.length,r=Array(e),i=0;i<e;i++)r[i]=[t[i],n[t[i]]];return r},m.invert=function(n){for(var t={},e=m.keys(n),r=0,i=e.length;r<i;r++)t[n[e[r]]]=e[r];return t},m.functions=m.methods=function(n){var t=[];for(var e in n)m.isFunction(n[e])&&t.push(e);return t.sort()},m.extend=k(m.allKeys),m.extendOwn=m.assign=k(m.keys),m.findKey=function(n,t,e){t=x(t,e);for(var r,i=m.keys(n),u=0,o=i.length;u<o;u++)if(r=i[u],t(n[r],r,n))return r},m.pick=function(n,t,e){var r,i,u={},o=n;if(null==o)return u;m.isFunction(t)?(i=m.allKeys(o),r=b(t,e)):(i=C(arguments,!1,!1,1),r=function(n,t,e){return t in e},o=Object(o));for(var c=0,a=i.length;c<a;c++){var s=i[c],l=o[s];r(l,s,o)&&(u[s]=l)}return u},m.omit=function(n,t,e){if(m.isFunction(t))t=m.negate(t);else{var r=m.map(C(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(r,t)}}return m.pick(n,t,e)},m.defaults=k(m.allKeys,!0),m.create=function(n,t){var e=w(n);return t&&m.extendOwn(e,t),e},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var e=m.keys(t),r=e.length;if(null==n)return!r;for(var i=Object(n),u=0;u<r;u++){var o=e[u];if(t[o]!==i[o]||!(o in i))return!1}return!0};var Q=function(n,t,e,r){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var i=h.call(n);if(i!==h.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!=+n?+t!=+t:0==+n?1/+n==1/t:+n==+t;case"[object Date]":case"[object Boolean]":return+n==+t}var u="[object Array]"===i;if(!u){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,c=t.constructor;if(o!==c&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(c)&&c instanceof c)&&"constructor"in n&&"constructor"in t)return!1}e=e||[],r=r||[];for(var a=e.length;a--;)if(e[a]===n)return r[a]===t;if(e.push(n),r.push(t),u){if((a=n.length)!==t.length)return!1;for(;a--;)if(!Q(n[a],t[a],e,r))return!1}else{var s,l=m.keys(n);if(a=l.length,m.keys(t).length!==a)return!1;for(;a--;)if(s=l[a],!m.has(t,s)||!Q(n[s],t[s],e,r))return!1}return e.pop(),r.pop(),!0};m.isEqual=function(n,t){return Q(n,t)},m.isEmpty=function(n){return null==n||(A(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length)},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=d||function(n){return"[object Array]"===h.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return h.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===h.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return void 0===n},m.has=function(n,t){return null!=n&&v.call(n,t)},m.noConflict=function(){return o._=c,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=j,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,e){var r=Array(Math.max(0,n));t=b(t,e,1);for(var i=0;i<n;i++)r[i]=t(i);return r},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},N=m.invert(M),L=function(n){var t=function(t){return n[t]},e="(?:"+m.keys(n).join("|")+")",r=RegExp(e),i=RegExp(e,"g");return function(n){return n=null==n?"":""+n,r.test(n)?n.replace(i,t):n}};m.escape=L(M),m.unescape=L(N),m.result=function(n,t,e){var r=null==n?void 0:n[t];return void 0===r&&(r=e),m.isFunction(r)?r.call(n):r};var U=0;m.uniqueId=function(n){var t=++U+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var D=/(.)^/,R={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},W=/\\|'|\r|\n|\u2028|\u2029/g,P=function(n){return"\\"+R[n]};m.template=function(n,t,e){!t&&e&&(t=e),t=m.defaults({},t,m.templateSettings);var r=RegExp([(t.escape||D).source,(t.interpolate||D).source,(t.evaluate||D).source].join("|")+"|$","g"),i=0,u="__p+='";n.replace(r,function(t,e,r,o,c){return u+=n.slice(i,c).replace(W,P),i=c+t.length,e?u+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?u+="'+\n((__t=("+r+"))==null?'':__t)+\n'":o&&(u+="';\n"+o+"\n__p+='"),t}),u+="';\n",t.variable||(u="with(obj||{}){\n"+u+"}\n"),u="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{var o=new Function(t.variable||"obj","_",u)}catch(n){throw n.source=u,n}var c=function(n){return o.call(this,n,m)},a=t.variable||"obj";return c.source="function("+a+"){\n"+u+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var B=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var e=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),B(this,e.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=a[n];m.prototype[n]=function(){var e=this._wrapped;return t.apply(e,arguments),"shift"!==n&&"splice"!==n||0!==e.length||delete e[0],B(this,e)}}),m.each(["concat","join","slice"],function(n){var t=a[n];m.prototype[n]=function(){return B(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this)},{}],3:[function(n,t,e){"use strict";var r=n("underscore"),i=n("../events");t.exports=function(n){var t=n.getComponent("MenuItem");return n.extend(t,{constructor:function(n,e){var i=e.source;if(!r.isObject(i))throw new Error('was not provided a "source" object, but rather: '+typeof i);e=r.extend({selectable:!0,label:i.label},e),t.call(this,n,e),this.source=i},handleClick:function(n){t.prototype.handleClick.call(this,n),this.player().trigger(i.QUALITY_REQUESTED,this.source)}})}},{"../events":5,underscore:2}],4:[function(n,t,e){"use strict";var r=n("underscore"),i=n("../events"),u=n("./QualityOption");t.exports=function(n){var t,e=n.getComponent("MenuButton"),o=u(n);return t=n.extend(e,{constructor:function(n,t){e.call(this,n,t),n.on(i.QUALITY_REQUESTED,function(t,e){this.setSelectedSource(e),n.addClass("vjs-quality-changing"),n.one("loadeddata",function(){n.removeClass("vjs-quality-changing")})}.bind(this)),n.on(i.QUALITY_SELECTED,function(n,t){this.setSelectedSource(t)}.bind(this)),n.one("ready",function(){this.selectedSrc=n.src(),this.update()}.bind(this)),this.controlText("Open quality selector menu")},setSelectedSource:function(n){var t=n?n.src:void 0;this.selectedSrc!==t&&(this.selectedSrc=t,this.update())},createItems:function(){var n=this.player(),t=n.currentSources();return!t||t.length<2?[]:r.map(t,function(t){return new o(n,{source:t,selected:t.src===this.selectedSrc})}.bind(this))},buildWrapperCSSClass:function(){return"vjs-quality-selector "+e.prototype.buildWrapperCSSClass.call(this)}}),n.registerComponent("QualitySelector",t),t}},{"../events":5,"./QualityOption":3,underscore:2}],5:[function(n,t,e){"use strict";t.exports={QUALITY_REQUESTED:"qualityRequested",QUALITY_SELECTED:"qualitySelected"}},{}],6:[function(n,t,e){"use strict";var r=n("underscore"),i=n("./events"),u=n("./components/QualitySelector"),o=n("./middleware/SourceInterceptor"),c=n("./util/SafeSeek");t.exports=function(n){n=n||window.videojs,u(n),o(n),n.hook("setup",function(n){n.on(i.QUALITY_REQUESTED,function(t,e){var i=n.currentSources(),u=n.currentTime(),o=n.paused();r.each(i,function(n){n.selected=!1}),r.findWhere(i,{src:e.src}).selected=!0,n._qualitySelectorSafeSeek&&n._qualitySelectorSafeSeek.onQualitySelectionChange(),n.src(i),n.ready(function(){n._qualitySelectorSafeSeek&&!n._qualitySelectorSafeSeek.hasFinished()||(n._qualitySelectorSafeSeek=new c(n,u)),o||n.play()})})})},t.exports.EVENTS=i},{"./components/QualitySelector":4,"./events":5,"./middleware/SourceInterceptor":7,"./util/SafeSeek":9,underscore:2}],7:[function(n,t,e){"use strict";var r=n("underscore"),i=n("../events");t.exports=function(n){n.use("*",function(n){return{setSource:function(t,e){var u,o=n.currentSources();n._qualitySelectorSafeSeek&&n._qualitySelectorSafeSeek.onPlayerSourcesChange(),u=r.find(o,function(n){return!0===n.selected||"true"===n.selected})||t,n.trigger(i.QUALITY_SELECTED,u),e(null,u)}}})}},{"../events":5,underscore:2}],8:[function(n,t,e){"use strict";n("./index")()},{"./index":6}],9:[function(n,t,e){"use strict";var r=n("class.extend");t.exports=r.extend({init:function(n,t){this._player=n,this._seekToTime=t,this._hasFinished=!1,this._keepThisInstanceWhenPlayerSourcesChange=!1,this._seekWhenSafe()},_seekWhenSafe:function(){this._player.readyState()<3?(this._seekFn=this._seek.bind(this),this._player.one("canplay",this._seekFn)):this._seek()},onPlayerSourcesChange:function(){this._keepThisInstanceWhenPlayerSourcesChange?this._keepThisInstanceWhenPlayerSourcesChange=!1:this.cancel()},onQualitySelectionChange:function(){this.hasFinished()||(this._keepThisInstanceWhenPlayerSourcesChange=!0)},_seek:function(){this._player.currentTime(this._seekToTime),this._keepThisInstanceWhenPlayerSourcesChange=!1,this._hasFinished=!0},hasFinished:function(){return this._hasFinished},cancel:function(){this._player.off("canplay",this._seekFn),this._keepThisInstanceWhenPlayerSourcesChange=!1,this._hasFinished=!0}})},{"class.extend":1}]},{},[8]);
//# sourceMappingURL=silvermine-videojs-quality-selector.min.js.map