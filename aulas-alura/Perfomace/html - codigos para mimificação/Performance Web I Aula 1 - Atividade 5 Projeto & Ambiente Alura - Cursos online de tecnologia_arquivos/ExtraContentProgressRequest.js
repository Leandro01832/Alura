var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var ExtraContentProgressRequest=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"callEndpoint",value:function(e,n){$.post("/extracontentprogress/"+e).success(n)}},{key:"callEndpointTask",value:function(e,n){$.post("/extracontentprogress/task/"+e).success(n)}}]),e}();