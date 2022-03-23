"use strict";(self.webpackChunk_wcAdmin_webpackJsonp=self.webpackChunk_wcAdmin_webpackJsonp||[]).push([[5396],{12915:function(e,t,n){n.r(t);var a=n(69307),o=n(65736),i=n(9818),r=n(22629),s=n(55609),c=n(86020),m=n(14812),l=n(67221),d=n(14599),u=n(72672),_=n(64329),p=n(462);const g=document.querySelector('[data-gateway_id="pre_install_woocommerce_payments_promotion"]');t.default=()=>{const[e,t]=(0,a.useState)(null),[n,w]=(0,a.useState)(!1),[y,h]=(0,a.useState)(!1),{installAndActivatePlugins:f,dismissRecommendedPlugins:E}=(0,i.useDispatch)(l.PLUGINS_STORE_NAME),{createNotice:v}=(0,i.useDispatch)("core/notices"),{installedPaymentGateway:N,installedPaymentGateways:O,paymentGatewaySuggestions:S,isResolving:A}=(0,i.useSelect)((t=>{const n=y&&(0,p.V)(e);return{installedPaymentGateway:n&&t(l.PAYMENT_GATEWAYS_STORE_NAME).getPaymentGateway(n),installedPaymentGateways:t(l.PAYMENT_GATEWAYS_STORE_NAME).getPaymentGateways().reduce(((e,t)=>(n===t.id||(e[t.id]=!0),e)),{}),isResolving:t(l.ONBOARDING_STORE_NAME).isResolving("getPaymentGatewaySuggestions"),paymentGatewaySuggestions:t(l.ONBOARDING_STORE_NAME).getPaymentGatewaySuggestions()}}),[y]),b=(0,a.useRef)(!1),G=S&&S.length>0&&!n;if((0,a.useEffect)((()=>{if((G||g&&!A)&&!b.current){b.current=!0;const e=(S||[]).reduce(((e,t)=>t.plugins&&t.plugins.length>0?{...e,[t.plugins[0].replace(/\-/g,"_")+"_displayed"]:!0}:e),{woocommerce_payments_displayed:!!g});(0,d.recordEvent)("settings_payments_recommendations_pageview",e)}}),[G,g,A]),(0,a.useEffect)((()=>{N&&(window.location.href=N.settings_url)}),[N]),!G)return null;const P=async()=>{w(!0),(0,d.recordEvent)("settings_payments_recommendations_dismiss",{}),await E("payments")||(w(!1),v("error",(0,o.__)('There was a problem hiding the "Additional ways to get paid" card.',"woocommerce-admin")))},k=(S||[]).filter((e=>{var t;return!O[e.id]&&(null===(t=e.plugins)||void 0===t?void 0:t.length)&&(!window.wcAdminFeatures["wc-pay-promotion"]||!e.id.startsWith("woocommerce_payments"))})).map((n=>({key:n.id,title:(0,a.createElement)(a.Fragment,null,n.title,n.recommended&&(0,a.createElement)(c.Pill,null,(0,o.__)("Recommended","woocommerce-admin"))),content:(0,r.decodeEntities)(n.content),after:(0,a.createElement)(s.Button,{isSecondary:!0,onClick:()=>(n=>{e||(t(n.id),(0,d.recordEvent)("settings_payments_recommendations_setup",{extension_selected:n.plugins[0]}),f([n.plugins[0]]).then((()=>{h(!0)})).catch((e=>{(0,_.a)(e),t(null)})))})(n),isBusy:e===n.id,disabled:!!e},n.actionText||(0,o.__)("Get started","woocommerce-admin")),before:(0,a.createElement)("img",{src:n.square_image||n.image,alt:""})})));return(0,a.createElement)(s.Card,{size:"medium",className:"woocommerce-recommended-payments-card"},(0,a.createElement)(s.CardHeader,null,(0,a.createElement)("div",{className:"woocommerce-recommended-payments-card__header"},(0,a.createElement)(m.Text,{variant:"title.small",as:"p",size:"20",lineHeight:"28px"},(0,o.__)("Additional ways to get paid","woocommerce-admin")),(0,a.createElement)(m.Text,{className:"woocommerce-recommended-payments__header-heading",variant:"caption",as:"p",size:"12",lineHeight:"16px"},(0,o.__)('We recommend adding one of the following payment extensions to your store. The extension will be installed and activated for you when you click "Get started".',"woocommerce-admin"))),(0,a.createElement)("div",{className:"woocommerce-card__menu woocommerce-card__header-item"},(0,a.createElement)(c.EllipsisMenu,{label:(0,o.__)("Task List Options","woocommerce-admin"),renderContent:()=>(0,a.createElement)("div",{className:"woocommerce-review-activity-card__section-controls"},(0,a.createElement)(s.Button,{onClick:P},(0,o.__)("Hide this","woocommerce-admin")))}))),(0,a.createElement)(c.List,{items:k}),(0,a.createElement)(s.CardFooter,null,(0,a.createElement)(s.Button,{href:"https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/?utm_source=payments_recommendations",target:"_blank",isTertiary:!0},(0,o.__)("See more options","woocommerce-admin"),(0,a.createElement)(u.Z,{size:18}))))}},72672:function(e,t,n){t.Z=function(e){var t=e.size,n=void 0===t?24:t,a=e.onClick,s=(e.icon,e.className),c=function(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],0<=t.indexOf(n)||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,i),m=["gridicon","gridicons-external",s,!!function(e){return 0==e%18}(n)&&"needs-offset",!1,!1].filter(Boolean).join(" ");return o.default.createElement("svg",r({className:m,height:n,width:n,onClick:a},c,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),o.default.createElement("g",null,o.default.createElement("path",{d:"M19 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z"})))};var a,o=(a=n(99196))&&a.__esModule?a:{default:a},i=["size","onClick","icon","className"];function r(){return r=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)}}}]);