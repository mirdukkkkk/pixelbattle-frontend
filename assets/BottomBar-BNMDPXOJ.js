import{f as e,t as r,u as n,v as t,w as o,F as a,x as l,_ as c,y as i,z as u,B as s,A as f,G as p,H as d}from"./main-CvgESOET.js";import{B as v,I as h}from"./Icon-DNElGIzu.js";const _="_wrapper_1l1y6_1",g="_cooldown_1l1y6_19",m="_coordinates_1l1y6_24",b="_palette_1l1y6_33",w={wrapper:"_wrapper_ybck9_1",progress:"_progress_ybck9_8",label:"_label_ybck9_18"};function x(){const t=e(r);return t.hasCooldown.value?n("div",{className:w.wrapper,children:[n("progress",{className:w.progress,value:t.progress,max:"100"}),n("p",{className:w.label,children:[t.progress.value.toFixed(0),"%"]})]}):null}const N={group:"_group_1aovs_1"};function y({children:e}){return n("div",{className:N.group,children:e})}const C={color:"_color_gk3h4_1",appear:"_appear_gk3h4_1"};function k({color:r}){const o=e(t);return n("input",{type:"radio",name:"palette",value:r.toHex(),className:C.color,style:{backgroundColor:r.toHex()},checked:r.equals(o.palette.value.selected),onChange:()=>o.setCurrentColor(r)})}const E={wrapper:"_wrapper_n8bdy_1",buttons:"_buttons_n8bdy_9",button:"_button_n8bdy_9"};function M(){return(M=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function H(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r.indexOf(n=a[t])>=0||(o[n]=e[n]);return o}function I(e){var r=a(e),n=a((function(e){r.current&&r.current(e)}));return r.current=e,n.current}var z=function(e,r,n){return void 0===r&&(r=0),void 0===n&&(n=1),e>n?n:e<r?r:e},B=function(e){return"touches"in e},O=function(e){return e&&e.ownerDocument.defaultView||self},j=function(e,r,n){var t=e.getBoundingClientRect(),o=B(r)?function(e,r){for(var n=0;n<e.length;n++)if(e[n].identifier===r)return e[n];return e[0]}(r.touches,n):r;return{left:z((o.pageX-(t.left+O(e).pageXOffset))/t.width),top:z((o.pageY-(t.top+O(e).pageYOffset))/t.height)}},q=function(e){!B(e)&&e.preventDefault()},D=o.memo((function(e){var r=e.onMove,n=e.onKey,t=H(e,["onMove","onKey"]),i=a(null),u=I(r),s=I(n),f=a(null),p=a(!1),d=l((function(){var e=function(e){q(e),(B(e)?e.touches.length>0:e.buttons>0)&&i.current?u(j(i.current,e,f.current)):n(!1)},r=function(){return n(!1)};function n(n){var t=p.current,o=O(i.current),a=n?o.addEventListener:o.removeEventListener;a(t?"touchmove":"mousemove",e),a(t?"touchend":"mouseup",r)}return[function(e){var r,t=e.nativeEvent,o=i.current;if(o&&(q(t),r=t,(!p.current||B(r))&&o)){if(B(t)){p.current=!0;var a=t.changedTouches||[];a.length&&(f.current=a[0].identifier)}o.focus(),u(j(o,t,f.current)),n(!0)}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),s({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},n]}),[s,u]),v=d[0],h=d[1],_=d[2];return c((function(){return _}),[_]),o.createElement("div",M({},t,{onTouchStart:v,onMouseDown:v,className:"react-colorful__interactive",ref:i,onKeyDown:h,tabIndex:0,role:"slider"}))})),S=function(e){return e.filter(Boolean).join(" ")},A=function(e){var r=e.color,n=e.left,t=e.top,a=void 0===t?.5:t,l=S(["react-colorful__pointer",e.className]);return o.createElement("div",{className:l,style:{top:100*a+"%",left:100*n+"%"}},o.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},K=function(e,r,n){return void 0===r&&(r=0),void 0===n&&(n=Math.pow(10,r)),Math.round(n*e)/n},L=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?K(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?K(parseInt(e.substring(6,8),16)/255,2):1}},F=function(e){var r=function(e){var r=e.s,n=e.v,t=e.a,o=(200-r)*n/100;return{h:K(e.h),s:K(o>0&&o<200?r*n/100/(o<=100?o:200-o)*100:0),l:K(o/2),a:K(t,2)}}(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},T=function(e){var r=e.h,n=e.s,t=e.v,o=e.a;r=r/360*6,n/=100,t/=100;var a=Math.floor(r),l=t*(1-n),c=t*(1-(r-a)*n),i=t*(1-(1-r+a)*n),u=a%6;return{r:K(255*[t,c,l,l,i,t][u]),g:K(255*[i,t,t,c,l,l][u]),b:K(255*[l,l,i,t,t,c][u]),a:K(o,2)}},X=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},Y=function(e){var r=e.r,n=e.g,t=e.b,o=e.a,a=o<1?X(K(255*o)):"";return"#"+X(r)+X(n)+X(t)+a},G=function(e){var r=e.r,n=e.g,t=e.b,o=e.a,a=Math.max(r,n,t),l=a-Math.min(r,n,t),c=l?a===r?(n-t)/l:a===n?2+(t-r)/l:4+(r-n)/l:0;return{h:K(60*(c<0?c+6:c)),s:K(a?l/a*100:0),v:K(a/255*100),a:o}},P=o.memo((function(e){var r=e.hue,n=e.onChange,t=S(["react-colorful__hue",e.className]);return o.createElement("div",{className:t},o.createElement(D,{onMove:function(e){n({h:360*e.left})},onKey:function(e){n({h:z(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":K(r),"aria-valuemax":"360","aria-valuemin":"0"},o.createElement(A,{className:"react-colorful__hue-pointer",left:r/360,color:F({h:r,s:100,v:100,a:1})})))})),R=o.memo((function(e){var r=e.hsva,n=e.onChange,t={backgroundColor:F({h:r.h,s:100,v:100,a:1})};return o.createElement("div",{className:"react-colorful__saturation",style:t},o.createElement(D,{onMove:function(e){n({s:100*e.left,v:100-100*e.top})},onKey:function(e){n({s:z(r.s+100*e.left,0,100),v:z(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+K(r.s)+"%, Brightness "+K(r.v)+"%"},o.createElement(A,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:F(r)})))})),V=function(e,r){if(e===r)return!0;for(var n in e)if(e[n]!==r[n])return!1;return!0};var $="undefined"!=typeof window?s:c,J=new Map,Q=function(e){$((function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!J.has(r)){var n=r.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',J.set(r,n);var t="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0;t&&n.setAttribute("nonce",t),r.head.appendChild(n)}}),[])},U=function(e){var r=e.className,n=e.colorModel,t=e.color,l=void 0===t?n.defaultColor:t,s=e.onChange,f=H(e,["className","colorModel","color","onChange"]),p=a(null);Q(p);var d=function(e,r,n){var t=I(n),o=u((function(){return e.toHsva(r)})),l=o[0],s=o[1],f=a({color:r,hsva:l});c((function(){if(!e.equal(r,f.current.color)){var n=e.toHsva(r);f.current={hsva:n,color:r},s(n)}}),[r,e]),c((function(){var r;V(l,f.current.hsva)||e.equal(r=e.fromHsva(l),f.current.color)||(f.current={hsva:l,color:r},t(r))}),[l,e,t]);var p=i((function(e){s((function(r){return Object.assign({},r,e)}))}),[]);return[l,p]}(n,l,s),v=d[0],h=d[1],_=S(["react-colorful",r]);return o.createElement("div",M({},f,{ref:p,className:_}),o.createElement(R,{hsva:v,onChange:h}),o.createElement(P,{hue:v.h,onChange:h,className:"react-colorful__last-control"}))},W={defaultColor:"000",toHsva:function(e){return G(L(e))},fromHsva:function(e){return function(e){return Y(T(e))}({h:e.h,s:e.s,v:e.v,a:1})},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||V(L(e),L(r))}},Z=function(e){return o.createElement(U,M({},e,{colorModel:W}))},ee=/^#?([0-9A-F]{3,8})$/i,re=function(e){var r=e.color,n=void 0===r?"":r,t=e.onChange,a=e.onBlur,l=e.escape,s=e.validate,f=e.format,p=e.process,d=H(e,["color","onChange","onBlur","escape","validate","format","process"]),v=u((function(){return l(n)})),h=v[0],_=v[1],g=I(t),m=I(a),b=i((function(e){var r=l(e.target.value);_(r),s(r)&&g(p?p(r):r)}),[l,p,s,g]),w=i((function(e){s(e.target.value)||_(l(n)),m(e)}),[n,l,s,m]);return c((function(){_(l(n))}),[n,l]),o.createElement("input",M({},d,{value:f?f(h):h,spellCheck:"false",onChange:b,onBlur:w}))},ne=function(e){return"#"+e},te=function(e){var r=e.prefixed,n=e.alpha,t=H(e,["prefixed","alpha"]),a=i((function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,n?8:6)}),[n]),l=i((function(e){return r=e,t=n,o=ee.exec(r),3===(a=o?o[1].length:0)||6===a||!!t&&4===a||!!t&&8===a;var r,t,o,a}),[n]);return o.createElement(re,M({},t,{escape:a,format:r?ne:void 0,process:ne,validate:l}))};function oe(){const r=e(t),[o,a]=u(r.palette.value.selected.toHex()),[l,c]=u(!1);function i(){c(!l)}return n("div",{className:E.wrapper,children:[l?n("div",{className:"color-picker",children:[n(Z,{color:o,onChange:a}),n(te,{color:o,onChange:a,prefixed:!0}),n("div",{className:E.buttons,children:[n(v,{onClick:function(){c(!l),r.addAndSelect(new f(o))},children:"Готово"}),n(v,{onClick:i,type:"danger",children:"Отмена"})]})]}):null,n("button",{onClick:function(){a(r.palette.value.selected.toHex()),i()},className:E.button,children:n(h,{icon:"plus",className:E.icon,alt:"Выбрать цвет"})})]})}const ae={button:"_button_rn6tb_1",icon:"_icon_rn6tb_19"};function le(){const r=e(t);return n("button",{className:ae.button,onClick:()=>r.removeColor(r.palette.value.selected),disabled:r.isDefaultColor(r.palette.value.selected),children:n(h,{icon:"plus",className:ae.icon,alt:"Удалить выбранный цвет"})})}const ce={wrapper:"_wrapper_1yg7w_1",input:"_input_1yg7w_5",icon:"_icon_1yg7w_25"};function ie(){const r=e(p);return n("div",{className:ce.wrapper,children:[n("input",{type:"checkbox",name:"color-pick",className:ce.input,onInput:()=>r.toggle(),checked:r.isEnabled.value}),n(h,{icon:"color-picker",className:ce.icon,alt:"Пипетка",viewBoxSize:21})]})}const ue={palette:"_palette_p4wtl_1","scale-down":"_scale-down_p4wtl_1",hr:"_hr_p4wtl_35"};function se(){const r=e(t);return r.load(),n("div",{className:ue.palette,children:[n(y,{children:r.palette.value.colors.map((e=>n(k,{color:e})))}),n("hr",{className:ue.hr}),n(y,{children:[n(ie,{}),n(oe,{}),n(le,{})]})]})}const fe={coordinates:"_coordinates_shzur_1",appear:"_appear_shzur_1"};function pe(){const r=e(d);return r.areCoordinatesSet.value?n("p",{className:fe.coordinates,children:r.coordinates.value.x+", "+r.coordinates.value.y}):null}const de={wrapper:"_wrapper_1t57q_1",appear:"_appear_1t57q_1",tag:"_tag_1t57q_9"};function ve(){const r=e(d);if(null===r.info.value)return null;if("loading"===r.info.value)return n("div",{className:de.wrapper,children:"Загрузка..."});const t=r.info.value.author??"Без автора";return n("div",{className:de.wrapper,children:n("p",{className:de.info,children:[n("strong",{className:de.author,children:t}),r.info.value.tag&&n("span",{className:de.tag,children:r.info.value.tag})]})})}function he(){return n("div",{className:_,children:[n("div",{className:m,children:[n(ve,{}),n(pe,{})]}),n("div",{className:g,children:n(x,{})}),n("div",{className:b,children:n(se,{})})]})}export{he as BottomBar};