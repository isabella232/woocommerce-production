!function(){var e={31772:function(e,o,t){"use strict";var r=t(25148);function n(){}function c(){}c.resetWarningCache=n,e.exports=function(){function e(e,o,t,n,c,a){if(a!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function o(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:c,resetWarningCache:n};return t.PropTypes=t,t}},7862:function(e,o,t){e.exports=t(31772)()},25148:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var c=o[r]={exports:{}};return e[r](c,c.exports,t),c.exports}t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,{a:o}),o},t.d=function(e,o){for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){"use strict";t.r(r),t.d(r,{CustomerEffortScore:function(){return f},default:function(){return p}});var e=window.wp.element,o=t(7862),n=t.n(o),c=window.wp.i18n,a=window.wp.compose,i=window.wp.data,l=window.wp.components,s=window.wc.experimental;function m(o){let{recordScoreCallback:t,label:r}=o;const n=[{label:(0,c.__)("Very difficult","woocommerce-admin"),value:"1"},{label:(0,c.__)("Somewhat difficult","woocommerce-admin"),value:"2"},{label:(0,c.__)("Neutral","woocommerce-admin"),value:"3"},{label:(0,c.__)("Somewhat easy","woocommerce-admin"),value:"4"},{label:(0,c.__)("Very easy","woocommerce-admin"),value:"5"}],[a,i]=(0,e.useState)(NaN),[m,u]=(0,e.useState)(""),[d,f]=(0,e.useState)(!1),[p,w]=(0,e.useState)(!0),b=()=>w(!1);return p?(0,e.createElement)(l.Modal,{className:"woocommerce-customer-effort-score",title:(0,c.__)("Please share your feedback","woocommerce-admin"),onRequestClose:b,shouldCloseOnClickOutside:!1},(0,e.createElement)(s.Text,{variant:"subtitle.small",as:"p",weight:"600",size:"14",lineHeight:"20px"},r),(0,e.createElement)("div",{className:"woocommerce-customer-effort-score__selection"},(0,e.createElement)(l.RadioControl,{selected:a.toString(10),options:n,onChange:e=>{const o=parseInt(e,10);i(o),f(!Number.isInteger(o))}})),(1===a||2===a)&&(0,e.createElement)("div",{className:"woocommerce-customer-effort-score__comments"},(0,e.createElement)(l.TextareaControl,{label:(0,c.__)("Comments (Optional)","woocommerce-admin"),help:(0,c.__)("Your feedback will go to the WooCommerce development team","woocommerce-admin"),value:m,onChange:e=>u(e),rows:5})),d&&(0,e.createElement)("div",{className:"woocommerce-customer-effort-score__errors",role:"alert"},(0,e.createElement)(s.Text,{variant:"body",as:"p"},(0,c.__)("Please provide feedback by selecting an option above.","woocommerce-admin"))),(0,e.createElement)("div",{className:"woocommerce-customer-effort-score__buttons"},(0,e.createElement)(l.Button,{isTertiary:!0,onClick:b,name:"cancel"},(0,c.__)("Cancel","woocommerce-admin")),(0,e.createElement)(l.Button,{isPrimary:!0,onClick:()=>{Number.isInteger(a)?(w(!1),t(a,m)):f(!0)},name:"send"},(0,c.__)("Send","woocommerce-admin")))):null}m.propTypes={recordScoreCallback:n().func.isRequired,label:n().string.isRequired};var u=m;const d=()=>{};function f(o){let{recordScoreCallback:t,label:r,createNotice:n,onNoticeShownCallback:a=d,onNoticeDismissedCallback:i=d,onModalShownCallback:l=d,icon:s}=o;const[m,f]=(0,e.useState)(!0),[p,w]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{m&&(n("success",r,{actions:[{label:(0,c.__)("Give feedback","woocommerce-admin"),onClick:()=>{w(!0),l()}}],icon:s,explicitDismiss:!0,onDismiss:i}),f(!1),a())}),[m]),m?null:p?(0,e.createElement)(u,{label:r,recordScoreCallback:t}):null}f.propTypes={recordScoreCallback:n().func.isRequired,label:n().string.isRequired,createNotice:n().func.isRequired,onNoticeShownCallback:n().func,onNoticeDismissedCallback:n().func,onModalShownCallback:n().func,icon:n().element};var p=(0,a.compose)((0,i.withDispatch)((e=>{const{createNotice:o}=e("core/notices2");return{createNotice:o}})))(f)}(),(window.wc=window.wc||{}).customerEffortScore=r}();