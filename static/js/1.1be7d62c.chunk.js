(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[1],{113:function(e,t,a){"use strict";var n,r=a(1),o=a(2),i=a(5),s=a.n(i),l=a(0),c=a.n(l);var u=a(45),d=a(4),f=a.n(d),p=a(24),b=a(159),m=a(117),v=a(53),g=a(25),O=a(160),h=a(172),j=a(173),w={children:f.a.func.isRequired,drop:f.a.oneOf(["up","left","right","down"]),focusFirstItemOnShow:f.a.oneOf([!1,!0,"keyboard"]),itemSelector:f.a.string,alignEnd:f.a.bool,show:f.a.bool,defaultShow:f.a.bool,onToggle:f.a.func};function y(e){var t=e.drop,a=e.alignEnd,r=e.defaultShow,o=e.show,i=e.onToggle,s=e.itemSelector,d=void 0===s?"* > *":s,f=e.focusFirstItemOnShow,h=e.children,j=Object(v.a)(),w=Object(p.b)(o,r,i),y=w[0],E=w[1],C=Object(m.a)(),x=C[0],N=C[1],P=Object(l.useRef)(null),R=P.current,k=Object(l.useCallback)((function(e){P.current=e,j()}),[j]),T=Object(b.a)(y),S=Object(l.useRef)(null),M=Object(l.useRef)(!1),D=Object(l.useCallback)((function(e){E(!y,e)}),[E,y]),z=Object(l.useMemo)((function(){return{toggle:D,drop:t,show:y,alignEnd:a,menuElement:R,toggleElement:x,setMenu:k,setToggle:N}}),[D,t,y,a,R,x,k,N]);R&&T&&!y&&(M.current=R.contains(document.activeElement));var I=Object(g.a)((function(){x&&x.focus&&x.focus()})),F=Object(g.a)((function(){var e=S.current,t=f;if(null==t&&(t=!(!P.current||!function(e,t){if(!n){var a=document.body,r=a.matches||a.matchesSelector||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector;n=function(e,t){return r.call(e,t)}}return n(e,t)}(P.current,"[role=menu]"))&&"keyboard"),!1!==t&&("keyboard"!==t||/^key.+$/.test(e))){var a=Object(u.a)(P.current,d)[0];a&&a.focus&&a.focus()}}));Object(l.useEffect)((function(){y?F():M.current&&(M.current=!1,I())}),[y,M,I,F]),Object(l.useEffect)((function(){S.current=null}));var A=function(e,t){if(!P.current)return null;var a=Object(u.a)(P.current,d),n=a.indexOf(e)+t;return a[n=Math.max(0,Math.min(n,a.length))]};return c.a.createElement(O.a.Provider,{value:z},h({props:{onKeyDown:function(e){var t=e.key,a=e.target;if(!/input|textarea/i.test(a.tagName)||!(" "===t||"Escape"!==t&&P.current&&P.current.contains(a)))switch(S.current=e.type,t){case"ArrowUp":var n=A(a,-1);return n&&n.focus&&n.focus(),void e.preventDefault();case"ArrowDown":if(e.preventDefault(),y){var r=A(a,1);r&&r.focus&&r.focus()}else D(e);return;case"Escape":case"Tab":E(!1,e)}}}}))}y.displayName="ReactOverlaysDropdown",y.propTypes=w,y.Menu=h.a,y.Toggle=j.a;var E=y,C=a(13),x=a(6),N=a(27),P={as:a(46).a,disabled:!1},R=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.children,u=e.eventKey,d=e.disabled,f=e.href,p=e.onClick,b=e.onSelect,m=e.active,v=e.as,O=Object(o.a)(e,["bsPrefix","className","children","eventKey","disabled","href","onClick","onSelect","active","as"]),h=Object(x.a)(a,"dropdown-item"),j=Object(l.useContext)(C.a),w=(Object(l.useContext)(N.a)||{}).activeKey,y=Object(C.b)(u,f),E=null==m&&null!=y?Object(C.b)(w)===y:m,P=Object(g.a)((function(e){d||(p&&p(e),j&&j(y,e),b&&b(y,e))}));return c.a.createElement(v,Object(r.a)({},O,{ref:t,href:f,disabled:d,className:s()(n,h,E&&"active",d&&"disabled"),onClick:P}),i)}));R.displayName="DropdownItem",R.defaultProps=P;var k=R,T=a(174),S=a(150),M=a(11),D=Object(M.a)("dropdown-header",{defaultProps:{role:"heading"}}),z=Object(M.a)("dropdown-divider",{defaultProps:{role:"separator"}}),I=Object(M.a)("dropdown-item-text",{Component:"span"}),F=c.a.forwardRef((function(e,t){var a=Object(p.a)(e,{show:"onToggle"}),n=a.bsPrefix,i=a.drop,u=a.show,d=a.className,f=a.alignRight,b=a.onSelect,m=a.onToggle,v=a.focusFirstItemOnShow,O=a.as,h=void 0===O?"div":O,j=(a.navbar,Object(o.a)(a,["bsPrefix","drop","show","className","alignRight","onSelect","onToggle","focusFirstItemOnShow","as","navbar"])),w=Object(l.useContext)(C.a),y=Object(x.a)(n,"dropdown"),N=Object(g.a)((function(e,t,a){void 0===a&&(a=t.type),t.currentTarget===document&&(a="rootClose"),m&&m(e,t,{source:a})})),P=Object(g.a)((function(e,t){w&&w(e,t),b&&b(e,t),N(!1,t,"select")}));return c.a.createElement(C.a.Provider,{value:P},c.a.createElement(E,{drop:i,show:u,alignEnd:f,onToggle:N,focusFirstItemOnShow:v,itemSelector:"."+y+"-item:not(.disabled):not(:disabled)"},(function(e){var a=e.props;return c.a.createElement(h,Object(r.a)({},j,a,{ref:t,className:s()(d,u&&"show",(!i||"down"===i)&&y,"up"===i&&"dropup","right"===i&&"dropright","left"===i&&"dropleft")}))})))}));F.displayName="Dropdown",F.defaultProps={navbar:!1},F.Divider=z,F.Header=D,F.Item=k,F.ItemText=I,F.Menu=T.b,F.Toggle=S.a;t.a=F},126:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({controlId:void 0});t.a=r},145:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(5),i=a.n(o),s=(a(61),a(0)),l=a.n(s),c=(a(59),a(161)),u=a(126),d=a(6),f=l.a.forwardRef((function(e,t){var a,o,c=e.bsPrefix,f=e.bsCustomPrefix,p=e.type,b=e.size,m=e.htmlSize,v=e.id,g=e.className,O=e.isValid,h=void 0!==O&&O,j=e.isInvalid,w=void 0!==j&&j,y=e.plaintext,E=e.readOnly,C=e.custom,x=e.as,N=void 0===x?"input":x,P=Object(r.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),R=Object(s.useContext)(u.a).controlId,k=C?[f,"custom"]:[c,"form-control"],T=k[0],S=k[1];if(c=Object(d.a)(T,S),y)(o={})[c+"-plaintext"]=!0,a=o;else if("file"===p){var M;(M={})[c+"-file"]=!0,a=M}else if("range"===p){var D;(D={})[c+"-range"]=!0,a=D}else if("select"===N&&C){var z;(z={})[c+"-select"]=!0,z[c+"-select-"+b]=b,a=z}else{var I;(I={})[c]=!0,I[c+"-"+b]=b,a=I}return l.a.createElement(N,Object(n.a)({},P,{type:p,size:m,ref:t,readOnly:E,id:v||R,className:i()(g,a,h&&"is-valid",w&&"is-invalid")}))}));f.displayName="FormControl",t.a=Object.assign(f,{Feedback:c.a})},150:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(5),i=a.n(o),s=(a(130),a(0)),l=a.n(s),c=a(173),u=a(41),d=a(97),f=a(6),p=a(175),b=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.split,s=e.className,b=e.childBsPrefix,m=e.as,v=void 0===m?d.a:m,g=Object(r.a)(e,["bsPrefix","split","className","childBsPrefix","as"]),O=Object(f.a)(a,"dropdown-toggle");void 0!==b&&(g.bsPrefix=b);var h=Object(c.b)(),j=h[0],w=h[1].toggle;return j.ref=Object(u.a)(j.ref,Object(p.a)(t,"DropdownToggle")),l.a.createElement(v,Object(n.a)({onClick:w,className:i()(s,O,o&&O+"-split")},j,g))}));b.displayName="DropdownToggle",t.a=b},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);t.a=r},161:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(5),i=a.n(o),s=a(0),l=a.n(s),c=a(4),u=a.n(c),d={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},f=l.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"div":a,s=e.className,c=e.type,u=void 0===c?"valid":c,d=e.tooltip,f=void 0!==d&&d,p=Object(r.a)(e,["as","className","type","tooltip"]);return l.a.createElement(o,Object(n.a)({},p,{ref:t,className:i()(s,u+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=d,t.a=f},162:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(4),i=a.n(o),s=a(0),l=a.n(s),c=a(5),u=a.n(c),d={label:i.a.string.isRequired,onClick:i.a.func},f=l.a.forwardRef((function(e,t){var a=e.label,o=e.onClick,i=e.className,s=Object(r.a)(e,["label","onClick","className"]);return l.a.createElement("button",Object(n.a)({ref:t,type:"button",className:u()("close",i),onClick:o},s),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},a))}));f.displayName="CloseButton",f.propTypes=d,f.defaultProps={label:"Close"},t.a=f},166:function(e,t,a){"use strict";var n=a(2),r=a(1),o=a(5),i=a.n(o),s=a(0),l=a.n(s),c=a(11),u=a(6),d=Object(c.a)("input-group-append"),f=Object(c.a)("input-group-prepend"),p=Object(c.a)("input-group-text",{Component:"span"}),b=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.size,s=e.className,c=e.as,d=void 0===c?"div":c,f=Object(n.a)(e,["bsPrefix","size","className","as"]);return a=Object(u.a)(a,"input-group"),l.a.createElement(d,Object(r.a)({ref:t},f,{className:i()(s,a,o&&a+"-"+o)}))}));b.displayName="InputGroup";var m=Object(r.a)({},b,{Text:p,Radio:function(e){return l.a.createElement(p,null,l.a.createElement("input",Object(r.a)({type:"radio"},e)))},Checkbox:function(e){return l.a.createElement(p,null,l.a.createElement("input",Object(r.a)({type:"checkbox"},e)))},Append:d,Prepend:f});t.a=m},172:function(e,t,a){"use strict";a.d(t,"b",(function(){return m}));var n=a(1),r=a(2),o=a(4),i=a.n(o),s=a(0),l=a.n(s),c=a(117),u=a(160),d=a(143),f=a(144),p=a(140),b=function(){};function m(e){void 0===e&&(e={});var t=Object(s.useContext)(u.a),a=Object(c.a)(),o=a[0],i=a[1],l=Object(s.useRef)(!1),m=e,v=m.flip,g=m.offset,O=m.rootCloseEvent,h=m.popperConfig,j=void 0===h?{}:h,w=m.usePopper,y=void 0===w?!!t:w,E=null==(null==t?void 0:t.show)?e.show:t.show,C=null==(null==t?void 0:t.alignEnd)?e.alignEnd:t.alignEnd;E&&!l.current&&(l.current=!0);var x=function(e){null==t||t.toggle(!1,e)},N=t||{},P=N.drop,R=N.setMenu,k=N.menuElement,T=N.toggleElement,S=C?"bottom-end":"bottom-start";"up"===P?S=C?"top-end":"top-start":"right"===P?S=C?"right-end":"right-start":"left"===P&&(S=C?"left-end":"left-start");var M,D=Object(d.a)(T,k,Object(p.a)({placement:S,enabled:!(!y||!E),enableEvents:E,offset:g,flip:v,arrowElement:o,popperConfig:j})),z=D.styles,I=D.attributes,F=Object(r.a)(D,["styles","attributes"]),A={ref:R||b,"aria-labelledby":null==T?void 0:T.id},q={show:E,alignEnd:C,hasShown:l.current,close:x};return M=y?Object(n.a)({},F,q,{props:Object(n.a)({},A,I.popper,{style:z.popper}),arrowProps:Object(n.a)({ref:i},I.arrow,{style:z.arrow})}):Object(n.a)({},q,{props:A}),Object(f.a)(k,x,{clickTrigger:O,disabled:!(M&&E)}),M}var v={children:i.a.func.isRequired,show:i.a.bool,alignEnd:i.a.bool,flip:i.a.bool,usePopper:i.a.oneOf([!0,!1]),popperConfig:i.a.object,rootCloseEvent:i.a.string};function g(e){var t=e.children,a=m(Object(r.a)(e,["children"]));return l.a.createElement(l.a.Fragment,null,a.hasShown?t(a):null)}g.displayName="ReactOverlaysDropdownMenu",g.propTypes=v,g.defaultProps={usePopper:!0},t.a=g},173:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(4),r=a.n(n),o=a(0),i=a.n(o),s=a(160),l=function(){};function c(){var e=Object(o.useContext)(s.a)||{},t=e.show,a=void 0!==t&&t,n=e.toggle,r=void 0===n?l:n;return[{ref:e.setToggle||l,"aria-haspopup":!0,"aria-expanded":!!a},{show:a,toggle:r}]}var u={children:r.a.func.isRequired};function d(e){var t=e.children,a=c(),n=a[0],r=a[1],o=r.show,s=r.toggle;return i.a.createElement(i.a.Fragment,null,t({show:o,toggle:s,props:n}))}d.displayName="ReactOverlaysDropdownToggle",d.propTypes=u,t.a=d},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(1),r=a(2),o=a(5),i=a.n(o),s=a(4),l=a.n(s),c=a(0),u=a.n(c),d=a(172),f=a(41),p=(a(59),a(15)),b=a(6),m=a(175),v=a(139),g=l.a.oneOf(["left","right"]),O=l.a.oneOfType([g,l.a.shape({sm:g}),l.a.shape({md:g}),l.a.shape({lg:g}),l.a.shape({xl:g})]),h=u.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.align,l=e.alignRight,g=e.rootCloseEvent,O=e.flip,h=e.show,j=e.renderOnMount,w=e.as,y=void 0===w?"div":w,E=e.popperConfig,C=Object(r.a)(e,["bsPrefix","className","align","alignRight","rootCloseEvent","flip","show","renderOnMount","as","popperConfig"]),x=Object(c.useContext)(p.a),N=Object(b.a)(a,"dropdown-menu"),P=Object(v.a)(),R=P[0],k=P[1],T=[];if(s)if("object"===typeof s){var S=Object.keys(s);if(S.length){var M=S[0],D=s[M];l="left"===D,T.push(N+"-"+M+"-"+D)}}else"right"===s&&(l=!0);var z=Object(d.b)({flip:O,rootCloseEvent:g,show:h,alignEnd:l,usePopper:!x&&0===T.length,popperConfig:Object(n.a)({},E,{modifiers:k.concat((null==E?void 0:E.modifiers)||[])})}),I=z.hasShown,F=z.placement,A=z.show,q=z.alignEnd,B=z.close,K=z.props;if(K.ref=Object(f.a)(R,Object(f.a)(Object(m.a)(t,"DropdownMenu"),K.ref)),!I&&!j)return null;"string"!==typeof y&&(K.show=A,K.close=B,K.alignRight=q);var L=C.style;return F&&(L=Object(n.a)({},C.style,K.style),C["x-placement"]=F),u.a.createElement(y,Object(n.a)({},C,K,{style:L,className:i.a.apply(void 0,[o,N,A&&"show",q&&N+"-right"].concat(T))}))}));h.displayName="DropdownMenu",h.defaultProps={align:"left",alignRight:!1,flip:!0},t.b=h},175:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(32),a(0),a(41);function n(e,t){return e}},221:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),i=a.n(o),s=a(4),l=a.n(s),c=a(113),u=a(150),d=a(174),f={id:l.a.any,href:l.a.string,onClick:l.a.func,title:l.a.node.isRequired,disabled:l.a.bool,menuAlign:d.a,menuRole:l.a.string,renderMenuOnMount:l.a.bool,rootCloseEvent:l.a.string,bsPrefix:l.a.string,variant:l.a.string,size:l.a.string},p=i.a.forwardRef((function(e,t){var a=e.title,o=e.children,s=e.bsPrefix,l=e.rootCloseEvent,f=e.variant,p=e.size,b=e.menuAlign,m=e.menuRole,v=e.renderMenuOnMount,g=e.disabled,O=e.href,h=e.id,j=Object(r.a)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuAlign","menuRole","renderMenuOnMount","disabled","href","id"]);return i.a.createElement(c.a,Object(n.a)({ref:t},j),i.a.createElement(u.a,{id:h,href:O,size:p,variant:f,disabled:g,childBsPrefix:s},a),i.a.createElement(d.b,{align:b,role:m,renderOnMount:v,rootCloseEvent:l},o))}));p.displayName="DropdownButton",p.propTypes=f,t.a=p},222:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(5),i=a.n(o),s=a(0),l=a.n(s),c=a(24),u=a(25),d=a(6),f=a(111),p=a(162),b=a(34),m=a(11),v=a(46),g=Object(b.a)("h4");g.displayName="DivStyledAsH4";var O=Object(m.a)("alert-heading",{Component:g}),h=Object(m.a)("alert-link",{Component:v.a}),j={show:!0,transition:f.a,closeLabel:"Close alert"},w=l.a.forwardRef((function(e,t){var a=Object(c.a)(e,{show:"onClose"}),o=a.bsPrefix,s=a.show,b=a.closeLabel,m=a.className,v=a.children,g=a.variant,O=a.onClose,h=a.dismissible,j=a.transition,w=Object(r.a)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),y=Object(d.a)(o,"alert"),E=Object(u.a)((function(e){O&&O(!1,e)})),C=!0===j?f.a:j,x=l.a.createElement("div",Object(n.a)({role:"alert"},C?void 0:w,{ref:t,className:i()(m,y,g&&y+"-"+g,h&&y+"-dismissible")}),h&&l.a.createElement(p.a,{onClick:E,label:b}),v);return C?l.a.createElement(C,Object(n.a)({unmountOnExit:!0},w,{ref:void 0,in:s}),x):s?x:null}));w.displayName="Alert",w.defaultProps=j,w.Link=h,w.Heading=O,t.a=w}}]);
//# sourceMappingURL=1.1be7d62c.chunk.js.map