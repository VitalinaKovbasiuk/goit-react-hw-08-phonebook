(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[675],{5675:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r=n(2791),i=n(9434),a=n(2561),o="NOT_FOUND";var u=function(e,t){return e===t};function c(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,i=void 0===r?u:r,a=n.maxSize,c=void 0===a?1:a,l=n.resultEqualityCheck,s=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!e(t[i],n[i]))return!1;return!0}}(i),p=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:o},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(s):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var i=n[r];return r>0&&(n.splice(r,1),n.unshift(i)),i.value}return o}return{get:r,put:function(t,i){r(t)===o&&(n.unshift({key:t,value:i}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,s);function f(){var t=p.get(arguments);if(t===o){if(t=e.apply(null,arguments),l){var n=p.getEntries(),r=n.find((function(e){return l(e.value,t)}));r&&(t=r.value)}p.put(arguments,t)}return t}return f.clearCache=function(){return p.clear()},f}function l(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function s(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var a,o=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,p=s.memoizeOptions,f=void 0===p?n:p,d=Array.isArray(f)?f:[f],h=l(r),m=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(d)),y=e((function(){for(var e=[],t=h.length,n=0;n<t;n++)e.push(h[n].apply(null,arguments));return a=m.apply(null,e)}));return Object.assign(y,{resultFunc:c,memoizedResultFunc:m,dependencies:h,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),y};return i}var p,f,d,h,m,y=s(c),g=function(e){return e.contacts.items},x=function(e){return e.filter.value},b=function(e){return e.contacts.isLoading},v=y([g,x],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),w=n(9439),j=n(2007),E=n.n(j),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},C=n(168),O=n(4934),Z=O.Z.form(p||(p=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),_=O.Z.input(f||(f=(0,C.Z)(["\n  width: 350px;\n  height: 30px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  margin-top: 10px;\n"]))),S=O.Z.label(d||(d=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 22px;\n  margin-bottom: 5px;\n"]))),T=O.Z.button(h||(h=(0,C.Z)(["\n  width: 160px;\n  height: 40px;\n  border-radius: 10px;\n  max-height: 65px;\n  text-transform: uppercase;\n\n  font-size: 16px;\n\n  background-color: rgb(243, 161, 242, 0.5);\n"]))),R=n(184);function A(){var e=(0,r.useState)(""),t=(0,w.Z)(e,2),n=t[0],o=t[1],u=(0,r.useState)(""),c=(0,w.Z)(u,2),l=c[0],s=c[1],p=k(),f=k(),d=(0,i.v9)(g),h=(0,i.I0)(),m=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":o(r);break;case"number":s(r);break;default:return}},y=function(){o(""),s("")};return(0,R.jsxs)(Z,{action:"",onSubmit:function(e){e.preventDefault();var t={name:n,number:l},r=d.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}));r?alert("".concat(n," is already in contact")):h((0,a.uK)(t)),y()},children:[(0,R.jsxs)(S,{htmlFor:"",children:["Name:",(0,R.jsx)(_,{id:p,type:"text",name:"name",value:n,onChange:m,placeholder:"Rosie Simpson",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,R.jsxs)(S,{htmlFor:"",children:["Number:",(0,R.jsx)(_,{id:f,type:"tel",name:"number",value:l,placeholder:"459-12-56",onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,R.jsx)(T,{type:"submit",children:"Add contact"})]})}A.prototypes={name:E().string.isRequired,number:E().string.isRequired,onSubmit:E().func.isRequired};var P=O.Z.input(m||(m=(0,C.Z)(["\n  width: 350px;\n  height: 30px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n"]))),q=n(1473);function z(){var e=(0,i.I0)(),t=(0,i.v9)(x);return(0,R.jsx)("label",{children:(0,R.jsx)(P,{type:"text",name:t,onChange:function(t){e((0,q.T)(t.target.value))},placeholder:"Find contacts by name"})})}var F,I,N,D=n(9938),L=O.Z.ul(F||(F=(0,C.Z)(["\n  list-style-type: none;\n  padding: 0; ;\n"]))),U=O.Z.li(I||(I=(0,C.Z)(["\n  display: flex;\n  align-items: baseline; ;\n"]))),B=O.Z.button(N||(N=(0,C.Z)(["\n  // display: flex;\n  // justify-content: center;\n  width: 80px;\n  height: 25px;\n  border-radius: 10px;\n  text-transform: uppercase;\n\n  font-size: 14px;\n  margin-left: 26px;\n\n  // margin-right: 15px;\n  background-color: rgb(243, 161, 242, 0.5);\n"])));function M(){var e=(0,i.I0)(),t=(0,i.v9)(v),n={visible:function(e){return{opacity:1,y:0,transition:{delay:.1*e}}},hidden:{opacity:0,y:-100}};return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(L,{children:t.map((function(t,r){var i=t.id,o=t.name,u=t.number;return(0,R.jsx)(D.E.div,{variants:n,initial:"hidden",animate:"visible",custom:r,children:(0,R.jsxs)(U,{children:[(0,R.jsxs)("p",{children:[o,": ",u]}),(0,R.jsx)(B,{type:"button",onClick:function(){return e((0,a.GK)(i))},children:"Delete"})]},i)},i)}))})})}var K=n(1413),V=function(){return V=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},V.apply(this,arguments)};var W=function(e){var t=e.animate,n=e.animateBegin,i=e.backgroundColor,a=e.backgroundOpacity,o=e.baseUrl,u=e.children,c=e.foregroundColor,l=e.foregroundOpacity,s=e.gradientRatio,p=e.gradientDirection,f=e.uniqueKey,d=e.interval,h=e.rtl,m=e.speed,y=e.style,g=e.title,x=e.beforeMask,b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),v=f||Math.random().toString(36).substring(6),w=v+"-diff",j=v+"-animated-diff",E=v+"-aria",k=h?{transform:"scaleX(-1)"}:null,C="0; "+d+"; 1",O=m+"s",Z="top-bottom"===p?"rotate(90)":void 0;return(0,r.createElement)("svg",V({"aria-labelledby":E,role:"img",style:V(V({},y),k)},b),g?(0,r.createElement)("title",{id:E},g):null,x&&(0,r.isValidElement)(x)?x:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+w+")",style:{fill:"url("+o+"#"+j+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:w},u),(0,r.createElement)("linearGradient",{id:j,gradientTransform:Z},(0,r.createElement)("stop",{offset:"0%",stopColor:i,stopOpacity:a},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-s+"; "+-s+"; 1",keyTimes:C,dur:O,repeatCount:"indefinite",begin:n})),(0,r.createElement)("stop",{offset:"50%",stopColor:c,stopOpacity:l},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-s/2+"; "+-s/2+"; "+(1+s/2),keyTimes:C,dur:O,repeatCount:"indefinite",begin:n})),(0,r.createElement)("stop",{offset:"100%",stopColor:i,stopOpacity:a},t&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+s),keyTimes:C,dur:O,repeatCount:"indefinite",begin:n})))))};W.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var G=function(e){return e.children?(0,r.createElement)(W,V({},e)):(0,r.createElement)(Y,V({},e))},Y=function(e){return(0,r.createElement)(G,V({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},H=G,J=function(e){return(0,R.jsxs)(H,(0,K.Z)((0,K.Z)({speed:1,width:371,height:450,viewBox:"0 0 383 450",backgroundColor:"#00576f",foregroundColor:"#3e7386"},e),{},{children:[(0,R.jsx)("rect",{x:"12",y:"13",rx:"5",ry:"5",width:"371",height:"62"}),(0,R.jsx)("rect",{x:"12",y:"86",rx:"5",ry:"5",width:"371",height:"62"}),(0,R.jsx)("rect",{x:"12",y:"158",rx:"5",ry:"5",width:"371",height:"62"}),(0,R.jsx)("rect",{x:"12",y:"230",rx:"5",ry:"5",width:"371",height:"62"}),(0,R.jsx)("rect",{x:"12",y:"302",rx:"5",ry:"5",width:"371",height:"62"}),(0,R.jsx)("rect",{x:"12",y:"374",rx:"5",ry:"5",width:"371",height:"62"})]}))};function X(){var e=(0,i.I0)(),t=(0,i.v9)(b);return(0,r.useEffect)((function(){e((0,a.yF)())}),[e]),(0,R.jsxs)("div",{children:[(0,R.jsx)("title",{children:"Your contacts"}),(0,R.jsx)(A,{}),(0,R.jsx)(z,{}),t?(0,R.jsx)(J,{}):(0,R.jsx)(M,{})]})}},888:function(e,t,n){"use strict";var r=n(9047);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,a,o){if(o!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=675.25c5a96e.chunk.js.map