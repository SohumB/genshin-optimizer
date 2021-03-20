(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[13],{103:function(e,t,a){"use strict";var r=a(1),n=a(2),c=a(5),i=a.n(c),o=a(0),s=a.n(o),l=(a(130),a(6)),d=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.placement,o=e.className,d=e.style,u=e.children,h=e.arrowProps,j=(e.popper,e.show,Object(n.a)(e,["bsPrefix","placement","className","style","children","arrowProps","popper","show"]));a=Object(l.a)(a,"tooltip");var f=((null==c?void 0:c.split("-"))||[])[0];return s.a.createElement("div",Object(r.a)({ref:t,style:d,role:"tooltip","x-placement":f,className:i()(o,a,"bs-tooltip-"+f)},j),s.a.createElement("div",Object(r.a)({className:"arrow"},h)),s.a.createElement("div",{className:a+"-inner"},u))}));d.defaultProps={placement:"right"},d.displayName="Tooltip",t.a=d},104:function(e,t,a){"use strict";var r=a(1),n=a(2),c=a(8),i=a(122),o=a(0),s=a.n(o),l=a(123),d=a(105),u=Math.pow(2,31)-1;function h(e,t,a){var r=a-Date.now();e.current=r<=u?setTimeout(t,r):setTimeout((function(){return h(e,t,a)}),u)}function j(){var e=Object(l.a)(),t=Object(o.useRef)();return Object(d.a)((function(){return clearTimeout(t.current)})),Object(o.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(r,n){void 0===n&&(n=0),e()&&(a(),n<=u?t.current=setTimeout(r,n):h(t,r,Date.now()+n))},clear:a}}),[])}var f=a(107),b=(a(59),a(24)),p=a(5),O=a.n(p),m=a(4),x=a.n(m),g=a(17),w=a.n(g),y=a(117),v=a(41),C=a(102),E=a(143),k=a(144),N=a(108),P=a(140),A=s.a.forwardRef((function(e,t){var a=e.flip,c=e.offset,i=e.placement,l=e.containerPadding,d=void 0===l?5:l,u=e.popperConfig,h=void 0===u?{}:u,j=e.transition,f=Object(y.a)(),b=f[0],p=f[1],O=Object(y.a)(),m=O[0],x=O[1],g=Object(v.a)(p,t),C=Object(N.a)(e.container),A=Object(N.a)(e.target),T=Object(o.useState)(!e.show),_=T[0],R=T[1],B=Object(E.a)(A,b,Object(P.a)({placement:i,enableEvents:!!e.show,containerPadding:d||5,flip:a,offset:c,arrowElement:m,popperConfig:h})),U=B.styles,z=B.attributes,G=Object(n.a)(B,["styles","attributes"]);e.show?_&&R(!1):e.transition||_||R(!0);var D=e.show||j&&!_;if(Object(k.a)(b,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!D)return null;var F=e.children(Object(r.a)({},G,{show:!!e.show,props:Object(r.a)({},z.popper,{style:U.popper,ref:g}),arrowProps:Object(r.a)({},z.arrow,{style:U.arrow,ref:x})}));if(j){var I=e.onExit,S=e.onExiting,W=e.onEnter,H=e.onEntering,q=e.onEntered;F=s.a.createElement(j,{in:e.show,appear:!0,onExit:I,onExiting:S,onExited:function(){R(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:W,onEntering:H,onEntered:q},F)}return C?w.a.createPortal(F,C):null}));A.displayName="Overlay",A.propTypes={show:x.a.bool,placement:x.a.oneOf(C.h),target:x.a.any,container:x.a.any,flip:x.a.bool,children:x.a.func.isRequired,containerPadding:x.a.number,popperConfig:x.a.object,rootClose:x.a.bool,rootCloseEvent:x.a.oneOf(["click","mousedown"]),rootCloseDisabled:x.a.bool,onHide:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n;return e.rootClose?(n=x.a.func).isRequired.apply(n,[e].concat(a)):x.a.func.apply(x.a,[e].concat(a))},transition:x.a.elementType,onEnter:x.a.func,onEntering:x.a.func,onEntered:x.a.func,onExit:x.a.func,onExiting:x.a.func,onExited:x.a.func};var T=A,_=a(139),R=a(111),B={transition:R.a,rootClose:!1,show:!1,placement:"top"};function U(e){var t=e.children,a=e.transition,c=e.popperConfig,i=void 0===c?{}:c,l=Object(n.a)(e,["children","transition","popperConfig"]),d=Object(o.useRef)({}),u=Object(_.a)(),h=u[0],j=u[1],b=!0===a?R.a:a||null;return s.a.createElement(T,Object(r.a)({},l,{ref:h,popperConfig:Object(r.a)({},i,{modifiers:j.concat(i.modifiers||[])}),transition:b}),(function(e){var c,i=e.props,o=e.arrowProps,l=e.show,u=e.update,h=(e.forceUpdate,e.placement),j=e.state,b=Object(n.a)(e,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(e,t){var a=e.ref,r=t.ref;e.ref=a.__wrapped||(a.__wrapped=function(e){return a(Object(f.a)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(Object(f.a)(e))})}(i,o);var p=Object.assign(d.current,{state:j,scheduleUpdate:u,placement:h,outOfBoundaries:(null==j||null==(c=j.modifiersData.hide)?void 0:c.isReferenceHidden)||!1});return"function"===typeof t?t(Object(r.a)({},b,i,{placement:h,show:l,popper:p,arrowProps:o})):s.a.cloneElement(t,Object(r.a)({},b,i,{placement:h,arrowProps:o,popper:p,className:O()(t.props.className,!a&&l&&"show"),style:Object(r.a)({},t.props.style,i.style)}))}))}U.defaultProps=B;var z=U,G=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){return this.props.children},t}(s.a.Component);function D(e,t,a){var r=t[0],n=r.currentTarget,c=r.relatedTarget||r.nativeEvent[a];c&&c===n||Object(i.a)(n,c)||e.apply(void 0,t)}function F(e){var t=e.trigger,a=e.overlay,c=e.children,i=e.popperConfig,l=void 0===i?{}:i,d=e.show,u=e.defaultShow,h=void 0!==u&&u,p=e.onToggle,O=e.delay,m=e.placement,x=e.flip,g=void 0===x?m&&-1!==m.indexOf("auto"):x,w=Object(n.a)(e,["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"]),y=Object(o.useRef)(null),v=j(),C=Object(o.useRef)(""),E=Object(b.b)(d,h,p),k=E[0],N=E[1],P=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(O),A="function"!==typeof c?s.a.Children.only(c).props:{},T=A.onFocus,_=A.onBlur,R=A.onClick,B=Object(o.useCallback)((function(){return Object(f.a)(y.current)}),[]),U=Object(o.useCallback)((function(){v.clear(),C.current="show",P.show?v.set((function(){"show"===C.current&&N(!0)}),P.show):N(!0)}),[P.show,N,v]),F=Object(o.useCallback)((function(){v.clear(),C.current="hide",P.hide?v.set((function(){"hide"===C.current&&N(!1)}),P.hide):N(!1)}),[P.hide,N,v]),I=Object(o.useCallback)((function(){U();for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==T||T.apply(void 0,t)}),[U,T]),S=Object(o.useCallback)((function(){F();for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==_||_.apply(void 0,t)}),[F,_]),W=Object(o.useCallback)((function(){N(!k),R&&R.apply(void 0,arguments)}),[R,N,k]),H=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];D(U,t,"fromElement")}),[U]),q=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];D(F,t,"toElement")}),[F]),M=null==t?[]:[].concat(t),X={};return-1!==M.indexOf("click")&&(X.onClick=W),-1!==M.indexOf("focus")&&(X.onFocus=I,X.onBlur=S),-1!==M.indexOf("hover")&&(X.onMouseOver=H,X.onMouseOut=q),s.a.createElement(s.a.Fragment,null,"function"===typeof c?c(Object(r.a)({},X,{ref:y})):s.a.createElement(G,{ref:y},Object(o.cloneElement)(c,X)),s.a.createElement(z,Object(r.a)({},w,{show:k,onHide:F,flip:g,placement:m,popperConfig:l,target:B}),a))}F.defaultProps={defaultShow:!1,trigger:["hover","focus"]};t.a=F},105:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(e){var t=function(e){var t=Object(r.useRef)(e);return t.current=e,t}(e);Object(r.useEffect)((function(){return function(){return t.current()}}),[])}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(39),n=a(0),c=function(e){var t;return"undefined"===typeof document?null:null==e?Object(r.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(t=e)?void 0:t.nodeType)&&e||null)};function i(e,t){var a=Object(n.useState)((function(){return c(e)})),r=a[0],i=a[1];if(!r){var o=c(e);o&&i(o)}return Object(n.useEffect)((function(){t&&r&&t(r)}),[t,r]),Object(n.useEffect)((function(){var t=c(e);t!==r&&i(t)}),[e,r]),r}},114:function(e,t,a){"use strict";var r=a(1),n=a(2),c=a(5),i=a.n(c),o=a(0),s=a.n(o),l=a(6),d=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.variant,o=e.pill,d=e.className,u=e.as,h=void 0===u?"span":u,j=Object(n.a)(e,["bsPrefix","variant","pill","className","as"]),f=Object(l.a)(a,"badge");return s.a.createElement(h,Object(r.a)({ref:t},j,{className:i()(d,f,o&&f+"-pill",c&&f+"-"+c)}))}));d.displayName="Badge",d.defaultProps={pill:!1},t.a=d},138:function(e,t,a){"use strict";var r=a(3),n=a(104),c=a(103);t.a=function(e){var t=e.children;return Object(r.jsx)(n.a,{overlay:Object(r.jsx)(c.a,{children:"Work In Progress"}),children:Object(r.jsx)("span",{children:t})})}},148:function(e,t,a){"use strict";var r=a(1),n=a(2),c=a(5),i=a.n(c),o=a(0),s=a.n(o),l=a(4),d=a.n(l),u=a(6),h=(d.a.string,d.a.bool,d.a.bool,d.a.bool,d.a.bool,s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.fluid,l=e.rounded,d=e.roundedCircle,h=e.thumbnail,j=Object(n.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(u.a)(a,"img");var f=i()(o&&a+"-fluid",l&&"rounded",d&&"rounded-circle",h&&a+"-thumbnail");return s.a.createElement("img",Object(r.a)({ref:t},j,{className:i()(c,f)}))})));h.displayName="Image",h.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=h},230:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var r=a(3),n=a(55),c=a(40),i=a(30),o=a(31),s=a(148),l=a(114),d=a(18),u=a(138),h=a.p+"static/media/art_editor.f440facc.png",j=a.p+"static/media/build_generator.d1120e05.png",f=a.p+"static/media/character_editor.4f98af14.png",b=a.p+"static/media/talent_scr.9d4af30a.png",p=a.p+"static/media/tools.2724d338.png";function O(e){return d.a.pageview("/home"),Object(r.jsx)(n.a,{className:"my-2",children:Object(r.jsx)(c.a,{children:Object(r.jsx)(i.a,{children:Object(r.jsxs)(o.a,{bg:"darkcontent",text:"lightfont",children:[Object(r.jsx)(o.a.Header,{children:"Welcome to Genshin Optimizer!"}),Object(r.jsxs)(o.a.Body,{children:[Object(r.jsx)(o.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(r.jsx)(o.a.Body,{children:Object(r.jsx)(c.a,{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)("h5",{children:"What is Genshin Optimizer?"}),Object(r.jsxs)("p",{children:["Genshin Optimizer is a tool for the action-rpg gacha game ",Object(r.jsx)("a",{href:"https://genshin.mihoyo.com/",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("strong",{children:"Genshin Impact"})}),". It is intended to help you with dealing with the more complex aspect of the game: Artifacts. Artifacts are heavily RNG-based elements that directly contributes to how effective your characters are in the game. This tool seek to alleviate some of the complexity associated with artifact efficiency, along with which artifact to choose on your character to maximize your stats."]}),Object(r.jsx)("p",{children:"However, this tool can do so much more. It will allow calculations of all conditional stats from artifacts, weapons, teams buffs, and calculate how those stats will affect your character in REAL TIME."})]})})})}),Object(r.jsx)(o.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(r.jsx)(o.a.Body,{children:Object(r.jsxs)(c.a,{children:[Object(r.jsx)(i.a,{xs:12,md:4,children:Object(r.jsx)(s.a,{src:h,className:"w-100 h-auto",rounded:!0})}),Object(r.jsxs)(i.a,{children:[Object(r.jsx)("h5",{children:"Artifact Editor"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Full featured Artifact editor."}),Object(r.jsx)("li",{children:"Add Artifacts by scanning a screenshot."}),Object(r.jsx)("li",{children:"Automatically calculate the exact rolled value of each artifact."}),Object(r.jsx)("li",{children:"Calculate substat efficiency, using the roll calculations. Use a single number to determine whether to keep or trash an artifact!"}),Object(r.jsx)("li",{children:"Equip/unequip/swap artifacts between your characters, try out different builds."})]})]})]})})}),Object(r.jsx)(o.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(r.jsx)(o.a.Body,{children:Object(r.jsxs)(c.a,{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("h5",{children:"Character Editor"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Full featured Character editor."}),Object(r.jsx)("li",{children:"Automatically populate character stats at every milestone level/ascension."}),Object(r.jsx)("li",{children:"Fully editable stats for customization."}),Object(r.jsx)("li",{children:"Calculate current stats based on weapon/artifacts."}),Object(r.jsx)("li",{children:"Fully featured weapon, with milestone level/ascension stats"}),Object(r.jsx)("li",{children:"Apply conditional passives, e.g. Whiteblind's ATK&DEF stacking bonus, to your character stats."}),Object(r.jsx)("li",{children:"Apply conditional passives from Artifacts sets as well!"}),Object(r.jsx)("li",{children:"Under Construction Talent damage calculations."}),Object(r.jsx)("li",{children:"Under Construction Update character stats/talents based on constellation."})]})]}),Object(r.jsx)(i.a,{xs:12,md:4,children:Object(r.jsx)(s.a,{src:f,className:"w-100 h-auto",rounded:!0})})]})})}),Object(r.jsx)(o.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(r.jsx)(o.a.Body,{children:Object(r.jsxs)(c.a,{children:[Object(r.jsx)(i.a,{xs:12,md:4,children:Object(r.jsx)(s.a,{src:b,className:"w-100 h-auto",rounded:!0})}),Object(r.jsxs)(i.a,{children:[Object(r.jsx)("h5",{children:"Character Damage Calculations"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["All the details for Every ",Object(r.jsx)(u.a,{children:Object(r.jsx)(l.a,{variant:"warning",children:"WIP"})})," character's talents."]}),Object(r.jsx)("li",{children:"All numbers should reflect real in game damage."}),Object(r.jsx)("li",{children:"Conditional stats and modifications from every Constellation accounted for."}),Object(r.jsx)("li",{children:"Shows calculations for all the numbers, along with formulas. I show my work."}),Object(r.jsx)("li",{children:"Enemy editor with level/ resistance fields to customize damage calcualtions."}),Object(r.jsx)("li",{children:"Account for elemental infusion for normal/charged/plunging attacks."}),Object(r.jsx)("li",{children:"Real time damage calculations."})]})]})]})})}),Object(r.jsx)(o.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(r.jsx)(o.a.Body,{children:Object(r.jsxs)(c.a,{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("h5",{children:"Build Generator"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Generator builds for specific characters using artifacts added by user."}),Object(r.jsx)("li",{children:"Limit the builds by artifact sets, main stats..."}),Object(r.jsx)("li",{children:"Sort the generated builds by a specific stat for maximization."}),Object(r.jsx)("li",{children:"Generator will not pick up artifacts already equipped on a differnt character."}),Object(r.jsx)("li",{children:"Compare generated artifact build against artifact currently on character."}),Object(r.jsx)("li",{children:"Use conditional stats from artifact sets, e.g. Gladitator's 4-set normal attack DMG Bonus, as part of the build calculations."})]})]}),Object(r.jsx)(i.a,{xs:12,md:4,children:Object(r.jsx)(s.a,{src:j,className:"w-100 h-auto",rounded:!0})})]})})}),Object(r.jsx)(o.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(r.jsx)(o.a.Body,{children:Object(r.jsxs)(c.a,{children:[Object(r.jsx)(i.a,{xs:12,md:4,children:Object(r.jsx)(s.a,{src:p,className:"w-100 h-auto",rounded:!0})}),Object(r.jsxs)(i.a,{children:[Object(r.jsx)("h5",{children:"Tools and Doodads"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Server time, with countdown to reset."}),Object(r.jsx)("li",{children:"Resin Counter."}),Object(r.jsx)("li",{children:"Experience Calculator, to optimize EXP. books usage."}),Object(r.jsxs)("li",{children:[Object(r.jsx)(l.a,{variant:"warning",children:"Under Construction"})," Resource Coverter, for all those pesky x3 tiered resources."]}),Object(r.jsxs)("li",{children:[Object(r.jsx)(l.a,{variant:"warning",children:"Under Construction"})," To-Do list: a dynamic to-do list to tell you what to grind for every day"]})]})]})]})})}),Object(r.jsx)(o.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(r.jsx)(o.a.Body,{children:Object(r.jsxs)(c.a,{children:[Object(r.jsxs)(i.a,{xs:12,md:6,children:[Object(r.jsx)("h5",{children:"What's for the future?"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Full talent/constellation calculations for every released character."}),Object(r.jsx)("li",{children:"Saving multiple artifact builds per character, for comparasion."}),Object(r.jsx)("li",{children:"Food buffs, team buffs."}),Object(r.jsx)("li",{children:"Resource planning to see artifact/character/weapon commitment costs."}),Object(r.jsx)("li",{children:"Artifact Analytics, graphs to show your artifact data."})]}),Object(r.jsxs)("p",{children:["For more, and to check on what is being worked on, join our ",Object(r.jsx)("a",{href:"https://discord.gg/CXUbQXyfUs",target:"_blank",rel:"noreferrer",children:"discord."})]})]}),Object(r.jsxs)(i.a,{xs:12,md:6,children:[Object(r.jsx)("h5",{children:"Want to help the developer?"}),Object(r.jsxs)("p",{children:["Genshin Optimizer has been the manifestation of many days and weeks of sleepless nights, and the developer is still actively trying to improve and add features. If you want to give feedback, request a feature, report a bug, please join our ",Object(r.jsx)("a",{href:"https://discord.gg/CXUbQXyfUs",target:"_blank",rel:"noreferrer",children:"discord."})]}),Object(r.jsxs)("p",{children:["If you want to fiancially support the developer, please either donate via ",Object(r.jsx)("a",{href:"https://www.paypal.com/donate?hosted_button_id=WAHN2DGLCXPZW",target:"_blank",rel:"noreferrer",children:"Paypal"})," or ",Object(r.jsx)("a",{href:"https://www.patreon.com/frzyc",target:"_blank",rel:"noreferrer",children:"Patreon"}),"."]})]})]})})})]})]})})})})}}}]);
//# sourceMappingURL=13.ccd40ca0.chunk.js.map