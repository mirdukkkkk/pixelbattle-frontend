var t,n,e,r,o,i,_,u,l,s,f,c,a={},p=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function d(t,n){for(var e in n)t[e]=n[e];return t}function y(t){var n=t.parentNode;n&&n.removeChild(t)}function m(n,e,r){var o,i,_,u={};for(_ in e)"key"==_?o=e[_]:"ref"==_?i=e[_]:u[_]=e[_];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof n&&null!=n.defaultProps)for(_ in n.defaultProps)void 0===u[_]&&(u[_]=n.defaultProps[_]);return b(n,u,o,i,null)}function b(t,r,o,i,_){var u={type:t,props:r,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==_?++e:_,__i:-1,__u:0};return null==_&&null!=n.vnode&&n.vnode(u),u}function g(t){return t.children}function k(t,n){this.props=t,this.context=n}function S(t,n){if(null==n)return t.__?S(t.__,t.__i+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?S(t):null}function w(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return w(t)}}function x(t){(!t.__d&&(t.__d=!0)&&o.push(t)&&!C.__r++||i!==n.debounceRendering)&&((i=n.debounceRendering)||_)(C)}function C(){var t,e,r,i,_,l,s,f;for(o.sort(u);t=o.shift();)t.__d&&(e=o.length,i=void 0,l=(_=(r=t).__v).__e,s=[],f=[],r.__P&&((i=d({},_)).__v=_.__v+1,n.vnode&&n.vnode(i),T(r.__P,i,_,r.__n,r.__P.namespaceURI,32&_.__u?[l]:null,s,null==l?S(_):l,!!(32&_.__u),f),i.__v=_.__v,i.__.__k[i.__i]=i,$(s,i,f),i.__e!=l&&w(i)),o.length>e&&o.sort(u));C.__r=0}function E(t,n,e,r,o,i,_,u,l,s,f){var c,h,d,y,m,k=r&&r.__k||p,w=n.length;for(e.__d=l,function(t,n,e){var r,o,i,_,u,l=n.length,s=e.length,f=s,c=0;for(t.__k=[],r=0;r<l;r++)_=r+c,null!=(o=t.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?b(null,o,null,null,null):v(o)?b(g,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?b(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=t,o.__b=t.__b+1,u=U(o,e,_,f),o.__i=u,i=null,-1!==u&&(f--,(i=e[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&c--,"function"!=typeof o.type&&(o.__u|=65536)):u!==_&&(u==_-1?c=u-_:u==_+1?c++:u>_?f>l-_?c+=u-_:c--:u<_&&c++,u!==r+c&&(o.__u|=65536))):(i=e[_])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=S(i)),A(i,i,!1),e[_]=null,f--);if(f)for(r=0;r<s;r++)null!=(i=e[r])&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=S(i)),A(i,i))}(e,n,k),l=e.__d,c=0;c<w;c++)null!=(d=e.__k[c])&&"boolean"!=typeof d&&"function"!=typeof d&&(h=-1===d.__i?a:k[d.__i]||a,d.__i=c,T(t,d,h,o,i,_,u,l,s,f),y=d.__e,d.ref&&h.ref!=d.ref&&(h.ref&&D(h.ref,null,d),f.push(d.ref,d.__c||y,d)),null==m&&null!=y&&(m=y),65536&d.__u||h.__k===d.__k?l=P(d,l,t):"function"==typeof d.type&&void 0!==d.__d?l=d.__d:y&&(l=y.nextSibling),d.__d=void 0,d.__u&=-196609);e.__d=l,e.__e=m}function P(t,n,e){var r,o;if("function"==typeof t.type){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,n=P(r[o],n,e));return n}t.__e!=n&&(n&&t.type&&!e.contains(n)&&(n=S(t)),e.insertBefore(t.__e,n||null),n=t.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function N(t,n){return n=n||[],null==t||"boolean"==typeof t||(v(t)?t.some((function(t){N(t,n)})):n.push(t)),n}function U(t,n,e,r){var o=t.key,i=t.type,_=e-1,u=e+1,l=n[e];if(null===l||l&&o==l.key&&i===l.type&&!(131072&l.__u))return e;if(r>(null==l||131072&l.__u?0:1))for(;_>=0||u<n.length;){if(_>=0){if((l=n[_])&&!(131072&l.__u)&&o==l.key&&i===l.type)return _;_--}if(u<n.length){if((l=n[u])&&!(131072&l.__u)&&o==l.key&&i===l.type)return u;u++}}return-1}function H(t,n,e){"-"===n[0]?t.setProperty(n,null==e?"":e):t[n]=null==e?"":"number"!=typeof e||h.test(n)?e:e+"px"}function O(t,n,e,r,o){var i;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||H(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||H(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in t||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+i]=e,e?r?e.u=r.u:(e.u=l,t.addEventListener(n,i?f:s,i)):t.removeEventListener(n,i?f:s,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in t)try{t[n]=null==e?"":e;break t}catch(_){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?t.removeAttribute(n):t.setAttribute(n,"popover"==n&&1==e?"":e))}}function R(t){return function(e){if(this.l){var r=this.l[e.type+t];if(null==e.t)e.t=l++;else if(e.t<r.u)return;return r(n.event?n.event(e):e)}}}function T(e,r,o,i,_,u,l,s,f,c){var p,h,m,b,w,x,C,P,N,U,H,R,T,$,D,A,M=r.type;if(void 0!==r.constructor)return null;128&o.__u&&(f=!!(32&o.__u),u=[s=r.__e=o.__e]),(p=n.__b)&&p(r);t:if("function"==typeof M)try{if(P=r.props,N="prototype"in M&&M.prototype.render,U=(p=M.contextType)&&i[p.__c],H=p?U?U.props.value:p.__:i,o.__c?C=(h=r.__c=o.__c).__=h.__E:(N?r.__c=h=new M(P,H):(r.__c=h=new k(P,H),h.constructor=M,h.render=L),U&&U.sub(h),h.props=P,h.state||(h.state={}),h.context=H,h.__n=i,m=h.__d=!0,h.__h=[],h._sb=[]),N&&null==h.__s&&(h.__s=h.state),N&&null!=M.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,M.getDerivedStateFromProps(P,h.__s))),b=h.props,w=h.state,h.__v=r,m)N&&null==M.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),N&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(N&&null==M.getDerivedStateFromProps&&P!==b&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(P,H),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(P,h.__s,H)||r.__v===o.__v)){for(r.__v!==o.__v&&(h.props=P,h.state=h.__s,h.__d=!1),r.__e=o.__e,r.__k=o.__k,r.__k.forEach((function(t){t&&(t.__=r)})),R=0;R<h._sb.length;R++)h.__h.push(h._sb[R]);h._sb=[],h.__h.length&&l.push(h);break t}null!=h.componentWillUpdate&&h.componentWillUpdate(P,h.__s,H),N&&null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(b,w,x)}))}if(h.context=H,h.props=P,h.__P=e,h.__e=!1,T=n.__r,$=0,N){for(h.state=h.__s,h.__d=!1,T&&T(r),p=h.render(h.props,h.state,h.context),D=0;D<h._sb.length;D++)h.__h.push(h._sb[D]);h._sb=[]}else do{h.__d=!1,T&&T(r),p=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(i=d(d({},i),h.getChildContext())),N&&!m&&null!=h.getSnapshotBeforeUpdate&&(x=h.getSnapshotBeforeUpdate(b,w)),E(e,v(A=null!=p&&p.type===g&&null==p.key?p.props.children:p)?A:[A],r,o,i,_,u,l,s,f,c),h.base=r.__e,r.__u&=-161,h.__h.length&&l.push(h),C&&(h.__E=h.__=null)}catch(W){if(r.__v=null,f||null!=u){for(r.__u|=f?160:32;s&&8===s.nodeType&&s.nextSibling;)s=s.nextSibling;u[u.indexOf(s)]=null,r.__e=s}else r.__e=o.__e,r.__k=o.__k;n.__e(W,r,o)}else null==u&&r.__v===o.__v?(r.__k=o.__k,r.__e=o.__e):r.__e=function(n,e,r,o,i,_,u,l,s){var f,c,p,h,d,m,b,g=r.props,k=e.props,w=e.type;if("svg"===w?i="http://www.w3.org/2000/svg":"math"===w?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=_)for(f=0;f<_.length;f++)if((d=_[f])&&"setAttribute"in d==!!w&&(w?d.localName===w:3===d.nodeType)){n=d,_[f]=null;break}if(null==n){if(null===w)return document.createTextNode(k);n=document.createElementNS(i,w,k.is&&k),_=null,l=!1}if(null===w)g===k||l&&n.data===k||(n.data=k);else{if(_=_&&t.call(n.childNodes),g=r.props||a,!l&&null!=_)for(g={},f=0;f<n.attributes.length;f++)g[(d=n.attributes[f]).name]=d.value;for(f in g)if(d=g[f],"children"==f);else if("dangerouslySetInnerHTML"==f)p=d;else if("key"!==f&&!(f in k)){if("value"==f&&"defaultValue"in k||"checked"==f&&"defaultChecked"in k)continue;O(n,f,null,d,i)}for(f in k)d=k[f],"children"==f?h=d:"dangerouslySetInnerHTML"==f?c=d:"value"==f?m=d:"checked"==f?b=d:"key"===f||l&&"function"!=typeof d||g[f]===d||O(n,f,d,g[f],i);if(c)l||p&&(c.__html===p.__html||c.__html===n.innerHTML)||(n.innerHTML=c.__html),e.__k=[];else if(p&&(n.innerHTML=""),E(n,v(h)?h:[h],e,r,o,"foreignObject"===w?"http://www.w3.org/1999/xhtml":i,_,u,_?_[0]:r.__k&&S(r,0),l,s),null!=_)for(f=_.length;f--;)null!=_[f]&&y(_[f]);l||(f="value",void 0!==m&&(m!==n[f]||"progress"===w&&!m||"option"===w&&m!==g[f])&&O(n,f,m,g[f],i),f="checked",void 0!==b&&b!==n[f]&&O(n,f,b,g[f],i))}return n}(o.__e,r,o,i,_,u,l,f,c);(p=n.diffed)&&p(r)}function $(t,e,r){e.__d=void 0;for(var o=0;o<r.length;o++)D(r[o],r[++o],r[++o]);n.__c&&n.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(r){n.__e(r,e.__v)}}))}function D(t,e,r){try{if("function"==typeof t){var o="function"==typeof t.__u;o&&t.__u(),o&&null==e||(t.__u=t(e))}else t.current=e}catch(i){n.__e(i,r)}}function A(t,e,r){var o,i;if(n.unmount&&n.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||D(o,null,e)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){n.__e(_,e)}o.base=o.__P=null}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&A(o[i],e,r||"function"!=typeof t.type);r||null==t.__e||y(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function L(t,n,e){return this.constructor(t,e)}function M(e,r,o){var i,_,u,l;n.__&&n.__(e,r),_=(i="function"==typeof o)?null:o&&o.__k||r.__k,u=[],l=[],T(r,e=(!i&&o||r).__k=m(g,null,[e]),_||a,a,r.namespaceURI,!i&&o?[o]:_?null:r.firstChild?t.call(r.childNodes):null,u,!i&&o?o:_?_.__e:r.firstChild,i,l),$(u,e,l)}function W(t,n){M(t,n,W)}function F(n,e,r){var o,i,_,u,l=d({},n.props);for(_ in n.type&&n.type.defaultProps&&(u=n.type.defaultProps),e)"key"==_?o=e[_]:"ref"==_?i=e[_]:l[_]=void 0===e[_]&&void 0!==u?u[_]:e[_];return arguments.length>2&&(l.children=arguments.length>3?t.call(arguments,2):r),b(n.type,l,o||n.key,i||n.ref,null)}function I(t,n){var e={__c:n="__cC"+c++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,r;return this.getChildContext||(e=[],(r={})[n]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){e=null},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some((function(t){t.__e=!0,x(t)}))},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e&&e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}t=p.slice,n={__e:function(t,n,e,r){for(var o,i,_;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),_=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),_=o.__d),_)return o.__E=o}catch(u){t=u}throw t}},e=0,r=function(t){return null!=t&&null==t.constructor},k.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof t&&(t=t(d({},e),this.props)),t&&d(e,t),null!=t&&this.__v&&(n&&this._sb.push(n),x(this))},k.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),x(this))},k.prototype.render=g,o=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(t,n){return t.__v.__b-n.__v.__b},C.__r=0,l=0,s=R(!1),f=R(!0),c=0;var V=0;function j(t,e,r,o,i,_){e||(e={});var u,l,s=e;if("ref"in s)for(l in s={},e)"ref"==l?u=e[l]:s[l]=e[l];var f={type:t,props:s,key:r,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--V,__i:-1,__u:0,__source:i,__self:_};if("function"==typeof t&&(u=t.defaultProps))for(l in u)void 0===s[l]&&(s[l]=u[l]);return n.vnode&&n.vnode(f),f}var B,q,z,G,Z=0,J=[],Y=n,K=Y.__b,Q=Y.__r,X=Y.diffed,tt=Y.__c,nt=Y.unmount,et=Y.__;function rt(t,n){Y.__h&&Y.__h(q,t,Z||n),Z=0;var e=q.__H||(q.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function ot(t){return Z=1,it(kt,t)}function it(t,n,e){var r=rt(B++,2);if(r.t=t,!r.__c&&(r.__=[e?e(n):kt(void 0,n),function(t){var n=r.__N?r.__N[0]:r.__[0],e=r.t(n,t);n!==e&&(r.__N=[e,r.__[1]],r.__c.setState({}))}],r.__c=q,!q.u)){var o=function(t,n,e){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(t){return!!t.__c}));if(o.every((function(t){return!t.__N})))return!i||i.call(this,t,n,e);var _=!1;return o.forEach((function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(_=!0)}})),!(!_&&r.__c.props===t)&&(!i||i.call(this,t,n,e))};q.u=!0;var i=q.shouldComponentUpdate,_=q.componentWillUpdate;q.componentWillUpdate=function(t,n,e){if(this.__e){var r=i;i=void 0,o(t,n,e),i=r}_&&_.call(this,t,n,e)},q.shouldComponentUpdate=o}return r.__N||r.__}function _t(t,n){var e=rt(B++,3);!Y.__s&&gt(e.__H,n)&&(e.__=t,e.i=n,q.__H.__h.push(e))}function ut(t,n){var e=rt(B++,4);!Y.__s&&gt(e.__H,n)&&(e.__=t,e.i=n,q.__h.push(e))}function lt(t){return Z=5,ft((function(){return{current:t}}),[])}function st(t,n,e){Z=6,ut((function(){return"function"==typeof t?(t(n()),function(){return t(null)}):t?(t.current=n(),function(){return t.current=null}):void 0}),null==e?e:e.concat(t))}function ft(t,n){var e=rt(B++,7);return gt(e.__H,n)&&(e.__=t(),e.__H=n,e.__h=t),e.__}function ct(t,n){return Z=8,ft((function(){return t}),n)}function at(t){var n=q.context[t.__c],e=rt(B++,9);return e.c=t,n?(null==e.__&&(e.__=!0,n.sub(q)),n.props.value):t.__}function pt(t,n){Y.useDebugValue&&Y.useDebugValue(n?n(t):t)}function ht(){var t=rt(B++,11);if(!t.__){for(var n=q.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;var e=n.__m||(n.__m=[0,0]);t.__="P"+e[0]+"-"+e[1]++}return t.__}function vt(){for(var t;t=J.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(mt),t.__H.__h.forEach(bt),t.__H.__h=[]}catch(n){t.__H.__h=[],Y.__e(n,t.__v)}}Y.__b=function(t){q=null,K&&K(t)},Y.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),et&&et(t,n)},Y.__r=function(t){Q&&Q(t),B=0;var n=(q=t.__c).__H;n&&(z===q?(n.__h=[],q.__h=[],n.__.forEach((function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0}))):(n.__h.forEach(mt),n.__h.forEach(bt),n.__h=[],B=0)),z=q},Y.diffed=function(t){X&&X(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==J.push(n)&&G===Y.requestAnimationFrame||((G=Y.requestAnimationFrame)||yt)(vt)),n.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.i=void 0}))),z=q=null},Y.__c=function(t,n){n.some((function(t){try{t.__h.forEach(mt),t.__h=t.__h.filter((function(t){return!t.__||bt(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],Y.__e(e,t.__v)}})),tt&&tt(t,n)},Y.unmount=function(t){nt&&nt(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach((function(t){try{mt(t)}catch(e){n=e}})),e.__H=void 0,n&&Y.__e(n,e.__v))};var dt="function"==typeof requestAnimationFrame;function yt(t){var n,e=function(){clearTimeout(r),dt&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);dt&&(n=requestAnimationFrame(e))}function mt(t){var n=q,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),q=n}function bt(t){var n=q;t.__c=t.__(),q=n}function gt(t,n){return!t||t.length!==n.length||n.some((function(n,e){return n!==t[e]}))}function kt(t,n){return"function"==typeof n?n(t):n}const St=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement);function wt(t,n){return t===n&&(0!==t||1/t==1/n)||t!=t&&n!=n}const xt=t=>{const n=lt([t,(...t)=>n[0](...t)]).current;return ut((()=>{n[0]=t})),n[1]},Ct="pushState",Et="replaceState",Pt=["popstate",Ct,Et,"hashchange"],Nt=t=>{for(const n of Pt)addEventListener(n,t);return()=>{for(const n of Pt)removeEventListener(n,t)}},Ut=(t,n)=>function(t,n,e){e&&!St&&(n=e);const r=n(),[{_instance:o},i]=ot({_instance:{_value:r,_getSnapshot:n}});return ut((()=>{o._value=r,o._getSnapshot=n,wt(o._value,n())||i({_instance:o})}),[t,r,n]),_t((()=>(wt(o._value,o._getSnapshot())||i({_instance:o}),t((()=>{wt(o._value,o._getSnapshot())||i({_instance:o})})))),[t]),r}(Nt,t,n),Ht=()=>location.search,Ot=()=>location.pathname,Rt=({ssrPath:t}={})=>Ut(Ot,t?()=>t:Ot),Tt=(t,{replace:n=!1,state:e=null}={})=>history[n?Et:Ct](e,"",t),$t=Symbol.for("wouter_v3");if("undefined"!=typeof history&&void 0===window[$t]){for(const t of[Ct,Et]){const n=history[t];history[t]=function(){const e=n.apply(this,arguments),r=new Event(t);return r.arguments=arguments,dispatchEvent(r),e}}Object.defineProperty(window,$t,{value:!0})}const Dt=(t="",n)=>n.toLowerCase().indexOf(t.toLowerCase())?"~"+n:n.slice(t.length)||"/",At=t=>{try{return decodeURI(t)}catch(n){return t}},Lt={hook:(t={})=>[Rt(t),Tt],searchHook:({ssrSearch:t=""}={})=>Ut(Ht,(()=>t)),parser:function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,r,o,i,_=[],u="",l=t.split("/");for(l[0]||l.shift();o=l.shift();)"*"===(e=o[0])?(_.push(e),u+="?"===o[1]?"(?:/(.*))?":"/(.*)"):":"===e?(r=o.indexOf("?",1),i=o.indexOf(".",1),_.push(o.substring(1,~r?r:~i?i:o.length)),u+=~r&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(u+=(~r?"?":"")+"\\"+o.substring(i))):u+="/"+o;return{keys:_,pattern:new RegExp("^"+u+(n?"(?=$|/)":"/?$"),"i")}},base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:t=>t},Mt=I(Lt),Wt=()=>at(Mt),Ft={},It=I(Ft),Vt=t=>{const[n,e]=t.hook(t);return[At(Dt(t.base,n)),xt(((n,r)=>e(((t,n="")=>"~"===t[0]?t.slice(1):n+t)(n,t.base),r)))]},jt=(t,n,e,r)=>{const{pattern:o,keys:i}=n instanceof RegExp?{keys:!1,pattern:n}:t(n||"*",r),_=o.exec(e)||[],[u,...l]=_;return void 0!==u?[!0,(()=>{const t=!1!==i?Object.fromEntries(i.map(((t,n)=>[t,l[n]]))):_.groups;let n={...l};return t&&Object.assign(n,t),n})(),...r?[u]:[]]:[!1,null]},Bt=({children:t,...n})=>{var e,r;const o=Wt(),i=n.hook?Lt:o;let _=i;const[u,l]=(null==(e=n.ssrPath)?void 0:e.split("?"))??[];l&&(n.ssrSearch=l,n.ssrPath=u),n.hrefs=n.hrefs??(null==(r=n.hook)?void 0:r.hrefs);let s=lt({}),f=s.current,c=f;for(let a in i){const t="base"===a?i[a]+(n[a]||""):n[a]||i[a];f===c&&t!==c[a]&&(s.current=c={...c}),c[a]=t,t!==i[a]&&(_=c)}return m(Mt.Provider,{value:_,children:t})},qt=({children:t,component:n},e)=>n?m(n,{params:e}):"function"==typeof t?t(e):t,zt=({path:t,nest:n,match:e,...r})=>{const o=Wt(),[i]=Vt(o),[_,u,l]=e??jt(o.parser,t,i,n),s=(t=>{let n=lt(Ft),e=n.current;for(const r in t)t[r]!==e[r]&&(e=t);return n.current=e})({...at(It),...u});if(!_)return null;const f=l?m(Bt,{base:l},qt(r,s)):qt(r,s);return m(It.Provider,{value:s,children:f})},Gt=t=>Array.isArray(t)?t.flatMap((t=>Gt(t&&t.type===g?t.props.children:t))):[t],Zt=({children:t,location:n})=>{const e=Wt(),[o]=Vt(e);for(const i of Gt(t)){let t=0;if(r(i)&&(t=jt(e.parser,i.props.path,n||o,i.props.nest))[0])return F(i,{match:t})}return null};function Jt(t,n){for(var e in n)t[e]=n[e];return t}function Yt(t,n){for(var e in t)if("__source"!==e&&!(e in n))return!0;for(var r in n)if("__source"!==r&&t[r]!==n[r])return!0;return!1}function Kt(t,n){this.props=t,this.context=n}(Kt.prototype=new k).isPureReactComponent=!0,Kt.prototype.shouldComponentUpdate=function(t,n){return Yt(this.props,t)||Yt(this.state,n)};var Qt=n.__b;n.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Qt&&Qt(t)};var Xt="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var tn=function(t,n){return null==t?null:N(N(t).map(n))},nn={map:tn,forEach:tn,count:function(t){return t?N(t).length:0},only:function(t){var n=N(t);if(1!==n.length)throw"Children.only";return n[0]},toArray:N},en=n.__e;n.__e=function(t,n,e,r){if(t.then)for(var o,i=n;i=i.__;)if((o=i.__c)&&o.__c)return null==n.__e&&(n.__e=e.__e,n.__k=e.__k),o.__c(t,n);en(t,n,e,r)};var rn=n.unmount;function on(t,n,e){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),t.__c.__H=null),null!=(t=Jt({},t)).__c&&(t.__c.__P===e&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return on(t,n,e)}))),t}function _n(t,n,e){return t&&e&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return _n(t,n,e)})),t.__c&&t.__c.__P===n&&(t.__e&&e.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=e)),t}function un(){this.__u=0,this.t=null,this.__b=null}function ln(t){var n=t.__.__c;return n&&n.__a&&n.__a(t)}function sn(t){var n,e,r;function o(o){if(n||(n=t()).then((function(t){e=t.default||t}),(function(t){r=t})),r)throw r;if(!e)throw n;return m(e,o)}return o.displayName="Lazy",o.__f=!0,o}function fn(){this.u=null,this.o=null}n.unmount=function(t){var n=t.__c;n&&n.__R&&n.__R(),n&&32&t.__u&&(t.type=null),rn&&rn(t)},(un.prototype=new k).__c=function(t,n){var e=n.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var o=ln(r.__v),i=!1,_=function(){i||(i=!0,e.__R=null,o?o(u):u())};e.__R=_;var u=function(){if(! --r.__u){if(r.state.__a){var t=r.state.__a;r.__v.__k[0]=_n(t,t.__c.__P,t.__c.__O)}var n;for(r.setState({__a:r.__b=null});n=r.t.pop();)n.forceUpdate()}};r.__u++||32&n.__u||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(_,_)},un.prototype.componentWillUnmount=function(){this.t=[]},un.prototype.render=function(t,n){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=on(this.__b,e,r.__O=r.__P)}this.__b=null}var o=n.__a&&m(g,null,t.fallback);return o&&(o.__u&=-33),[m(g,null,n.__a?null:t.children),o]};var cn=function(t,n,e){if(++e[1]===e[0]&&t.o.delete(n),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(e=t.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;t.u=e=e[2]}};function an(t){return this.getChildContext=function(){return t.context},t.children}function pn(t){var n=this,e=t.i;n.componentWillUnmount=function(){M(null,n.l),n.l=null,n.i=null},n.i&&n.i!==e&&n.componentWillUnmount(),n.l||(n.i=e,n.l={nodeType:1,parentNode:e,childNodes:[],contains:function(){return!0},appendChild:function(t){this.childNodes.push(t),n.i.appendChild(t)},insertBefore:function(t,e){this.childNodes.push(t),n.i.appendChild(t)},removeChild:function(t){this.childNodes.splice(this.childNodes.indexOf(t)>>>1,1),n.i.removeChild(t)}}),M(m(an,{context:n.context},t.__v),n.l)}(fn.prototype=new k).__a=function(t){var n=this,e=ln(n.__v),r=n.o.get(t);return r[0]++,function(o){var i=function(){n.props.revealOrder?(r.push(o),cn(n,t,r)):o()};e?e(i):i()}},fn.prototype.render=function(t){this.u=null,this.o=new Map;var n=N(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&n.reverse();for(var e=n.length;e--;)this.o.set(n[e],this.u=[1,0,this.u]);return t.children},fn.prototype.componentDidUpdate=fn.prototype.componentDidMount=function(){var t=this;this.o.forEach((function(n,e){cn(t,e,n)}))};var hn="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,vn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,dn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,yn=/[A-Z0-9]/g,mn="undefined"!=typeof document,bn=function(t){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(t)};k.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(k.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})}));var gn=n.event;function kn(){}function Sn(){return this.cancelBubble}function wn(){return this.defaultPrevented}n.event=function(t){return gn&&(t=gn(t)),t.persist=kn,t.isPropagationStopped=Sn,t.isDefaultPrevented=wn,t.nativeEvent=t};var xn,Cn={enumerable:!1,configurable:!0,get:function(){return this.class}},En=n.vnode;n.vnode=function(t){"string"==typeof t.type&&function(t){var n=t.props,e=t.type,r={};for(var o in n){var i=n[o];if(!("value"===o&&"defaultValue"in n&&null==i||mn&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var _=o.toLowerCase();"defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===i?i="":"translate"===_&&"no"===i?i=!1:"ondoubleclick"===_?o="ondblclick":"onchange"!==_||"input"!==e&&"textarea"!==e||bn(n.type)?"onfocus"===_?o="onfocusin":"onblur"===_?o="onfocusout":dn.test(o)?o=_:-1===e.indexOf("-")&&vn.test(o)?o=o.replace(yn,"-$&").toLowerCase():null===i&&(i=void 0):_=o="oninput","oninput"===_&&r[o=_]&&(o="oninputCapture"),r[o]=i}}"select"==e&&r.multiple&&Array.isArray(r.value)&&(r.value=N(n.children).forEach((function(t){t.props.selected=-1!=r.value.indexOf(t.props.value)}))),"select"==e&&null!=r.defaultValue&&(r.value=N(n.children).forEach((function(t){t.props.selected=r.multiple?-1!=r.defaultValue.indexOf(t.props.value):r.defaultValue==t.props.value}))),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",Cn)):(n.className&&!n.class||n.class&&n.className)&&(r.class=r.className=n.className),t.props=r}(t),t.$$typeof=hn,En&&En(t)};var Pn=n.__r;n.__r=function(t){Pn&&Pn(t),xn=t.__c};var Nn=n.diffed;n.diffed=function(t){Nn&&Nn(t);var n=t.props,e=t.__e;null!=e&&"textarea"===t.type&&"value"in n&&n.value!==e.value&&(e.value=null==n.value?"":n.value),xn=null};var Un={ReactCurrentDispatcher:{current:{readContext:function(t){return xn.__n[t.__c].props.value},useCallback:ct,useContext:at,useDebugValue:pt,useDeferredValue:Rn,useEffect:_t,useId:ht,useImperativeHandle:st,useInsertionEffect:$n,useLayoutEffect:ut,useMemo:ft,useReducer:it,useRef:lt,useState:ot,useSyncExternalStore:Dn,useTransition:Tn}}};function Hn(t){return!!t&&t.$$typeof===hn}function On(t){t()}function Rn(t){return t}function Tn(){return[!1,On]}var $n=ut;function Dn(t,n){var e=n(),r=ot({h:{__:e,v:n}}),o=r[0].h,i=r[1];return ut((function(){o.__=e,o.v=n,An(o)&&i({h:o})}),[t,e,n]),_t((function(){return An(o)&&i({h:o}),t((function(){An(o)&&i({h:o})}))}),[t]),e}function An(t){var n,e,r=t.v,o=t.__;try{var i=r();return!((n=o)===(e=i)&&(0!==n||1/n==1/e)||n!=n&&e!=e)}catch(_){return!0}}var Ln={useState:ot,useId:ht,useReducer:it,useEffect:_t,useLayoutEffect:ut,useInsertionEffect:$n,useTransition:Tn,useDeferredValue:Rn,useSyncExternalStore:Dn,startTransition:On,useRef:lt,useImperativeHandle:st,useMemo:ft,useCallback:ct,useContext:at,useDebugValue:pt,version:"17.0.2",Children:nn,render:function(t,n,e){return null==n.__k&&(n.textContent=""),M(t,n),"function"==typeof e&&e(),t?t.__c:null},hydrate:function(t,n,e){return W(t,n),"function"==typeof e&&e(),t?t.__c:null},unmountComponentAtNode:function(t){return!!t.__k&&(M(null,t),!0)},createPortal:function(t,n){var e=m(pn,{__v:t,i:n});return e.containerInfo=n,e},createElement:m,createContext:I,createFactory:function(t){return m.bind(null,t)},cloneElement:function(t){return Hn(t)?F.apply(null,arguments):t},createRef:function(){return{current:null}},Fragment:g,isValidElement:Hn,isElement:Hn,isFragment:function(t){return Hn(t)&&t.type===g},isMemo:function(t){return!!t&&!!t.displayName&&("string"==typeof t.displayName||t.displayName instanceof String)&&t.displayName.startsWith("Memo(")},findDOMNode:function(t){return t&&(t.base||1===t.nodeType&&t)||null},Component:k,PureComponent:Kt,memo:function(t,n){function e(t){var e=this.props.ref,r=e==t.ref;return!r&&e&&(e.call?e(null):e.current=null),n?!n(this.props,t)||!r:Yt(this.props,t)}function r(n){return this.shouldComponentUpdate=e,m(t,n)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r},forwardRef:function(t){function n(n){var e=Jt({},n);return delete e.ref,t(e,n.ref||null)}return n.$$typeof=Xt,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(t.displayName||t.name)+")",n},flushSync:function(t,n){return t(n)},unstable_batchedUpdates:function(t,n){return t(n)},StrictMode:g,Suspense:un,SuspenseList:fn,lazy:sn,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Un},Mn=Symbol.for("preact-signals");function Wn(){if(Bn>1)Bn--;else{for(var t,n=!1;void 0!==jn;){var e=jn;for(jn=void 0,qn++;void 0!==e;){var r=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&Yn(e))try{e.c()}catch(o){n||(t=o,n=!0)}e=r}}if(qn=0,Bn--,n)throw t}}var Fn,In,Vn=void 0,jn=void 0,Bn=0,qn=0,zn=0;function Gn(t){if(void 0!==Vn){var n=t.n;if(void 0===n||n.t!==Vn)return n={i:0,S:t,p:Vn.s,n:void 0,t:Vn,e:void 0,x:void 0,r:n},void 0!==Vn.s&&(Vn.s.n=n),Vn.s=n,t.n=n,32&Vn.f&&t.S(n),n;if(-1===n.i)return n.i=0,void 0!==n.n&&(n.n.p=n.p,void 0!==n.p&&(n.p.n=n.n),n.p=Vn.s,n.n=void 0,Vn.s.n=n,Vn.s=n),n}}function Zn(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function Jn(t){return new Zn(t)}function Yn(t){for(var n=t.s;void 0!==n;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function Kn(t){for(var n=t.s;void 0!==n;n=n.n){var e=n.S.n;if(void 0!==e&&(n.r=e),n.S.n=n,n.i=-1,void 0===n.n){t.s=n;break}}}function Qn(t){for(var n=t.s,e=void 0;void 0!==n;){var r=n.p;-1===n.i?(n.S.U(n),void 0!==r&&(r.n=n.n),void 0!==n.n&&(n.n.p=r)):e=n,n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=r}t.s=e}function Xn(t){Zn.call(this,void 0),this.x=t,this.s=void 0,this.g=zn-1,this.f=4}function te(t){return new Xn(t)}function ne(t){var n=t.u;if(t.u=void 0,"function"==typeof n){Bn++;var e=Vn;Vn=void 0;try{n()}catch(r){throw t.f&=-2,t.f|=8,ee(t),r}finally{Vn=e,Wn()}}}function ee(t){for(var n=t.s;void 0!==n;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,ne(t)}function re(t){if(Vn!==this)throw new Error("Out-of-order effect");Qn(this),Vn=t,this.f&=-2,8&this.f&&ee(this),Wn()}function oe(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function ie(t){var n=new oe(t);try{n.c()}catch(e){throw n.d(),e}return n.d.bind(n)}function _e(t,e){n[t]=e.bind(null,n[t]||function(){})}function ue(t){In&&In(),In=t&&t.S()}function le(t){var n=this,e=t.data,o=fe(e);o.value=e;var i=ft((function(){for(var t=n.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return n.__$u.c=function(){var t;r(i.peek())||3!==(null==(t=n.base)?void 0:t.nodeType)?(n.__$f|=1,n.setState({})):n.base.data=i.peek()},te((function(){var t=o.value.value;return 0===t?0:!0===t?"":t||""}))}),[]);return i.value}function se(t,n,e,r){var o=n in t&&void 0===t.ownerSVGElement,i=Jn(e);return{o:function(t,n){i.value=t,r=n},d:ie((function(){var e=i.value.value;r[n]!==e&&(r[n]=e,o?t[n]=e:e?t.setAttribute(n,e):t.removeAttribute(n))}))}}function fe(t){return ft((function(){return Jn(t)}),[])}function ce(t){var n=lt(t);return n.current=t,Fn.__$f|=4,ft((function(){return te((function(){return n.current()}))}),[])}Zn.prototype.brand=Mn,Zn.prototype.h=function(){return!0},Zn.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},Zn.prototype.U=function(t){if(void 0!==this.t){var n=t.e,e=t.x;void 0!==n&&(n.x=e,t.e=void 0),void 0!==e&&(e.e=n,t.x=void 0),t===this.t&&(this.t=e)}},Zn.prototype.subscribe=function(t){var n=this;return ie((function(){var e=n.value,r=Vn;Vn=void 0;try{t(e)}finally{Vn=r}}))},Zn.prototype.valueOf=function(){return this.value},Zn.prototype.toString=function(){return this.value+""},Zn.prototype.toJSON=function(){return this.value},Zn.prototype.peek=function(){var t=Vn;Vn=void 0;try{return this.value}finally{Vn=t}},Object.defineProperty(Zn.prototype,"value",{get:function(){var t=Gn(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(qn>100)throw new Error("Cycle detected");this.v=t,this.i++,zn++,Bn++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{Wn()}}}}),(Xn.prototype=new Zn).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===zn)return!0;if(this.g=zn,this.f|=1,this.i>0&&!Yn(this))return this.f&=-2,!0;var t=Vn;try{Kn(this),Vn=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return Vn=t,Qn(this),this.f&=-2,!0},Xn.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}Zn.prototype.S.call(this,t)},Xn.prototype.U=function(t){if(void 0!==this.t&&(Zn.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},Xn.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Object.defineProperty(Xn.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=Gn(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),oe.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var n=this.x();"function"==typeof n&&(this.u=n)}finally{t()}},oe.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,ne(this),Kn(this),Bn++;var t=Vn;return Vn=this,re.bind(this,t)},oe.prototype.N=function(){2&this.f||(this.f|=2,this.o=jn,jn=this)},oe.prototype.d=function(){this.f|=8,1&this.f||ee(this)},le.displayName="_st",Object.defineProperties(Zn.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:le},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),_e("__b",(function(t,n){if("string"==typeof n.type){var e,r=n.props;for(var o in r)if("children"!==o){var i=r[o];i instanceof Zn&&(e||(n.__np=e={}),e[o]=i,r[o]=i.peek())}}t(n)})),_e("__r",(function(t,n){ue();var e,r,o=n.__c;o&&(o.__$f&=-2,void 0===(e=o.__$u)&&(o.__$u=(ie((function(){r=this})),r.c=function(){o.__$f|=1,o.setState({})},e=r))),Fn=o,ue(e),t(n)})),_e("__e",(function(t,n,e,r){ue(),Fn=void 0,t(n,e,r)})),_e("diffed",(function(t,n){var e;if(ue(),Fn=void 0,"string"==typeof n.type&&(e=n.__e)){var r=n.__np,o=n.props;if(r){var i=e.U;if(i)for(var _ in i){var u=i[_];void 0===u||_ in r||(u.d(),i[_]=void 0)}else e.U=i={};for(var l in r){var s=i[l],f=r[l];void 0===s?(s=se(e,l,f,o),i[l]=s):s.o(f,o)}}}t(n)})),_e("unmount",(function(t,n){if("string"==typeof n.type){var e=n.__e;if(e){var r=e.U;if(r)for(var o in e.U=void 0,r){var i=r[o];i&&i.d()}}}else{var _=n.__c;if(_){var u=_.__$u;u&&(_.__$u=void 0,u.d())}}t(n)})),_e("__h",(function(t,n,e,r){(r<3||9===r)&&(n.__$f|=2),t(n,e,r)})),k.prototype.shouldComponentUpdate=function(t,n){var e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var r in n)return!0;for(var o in t)if("__source"!==o&&t[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in t))return!0;return!1};export{lt as A,M as B,sn as F,I as G,un as L,zt as R,Zt as S,ft as T,ut as _,Ln as a,fe as b,ce as c,Jn as d,ot as h,g as k,ct as q,j as u,te as w,at as x,_t as y};
