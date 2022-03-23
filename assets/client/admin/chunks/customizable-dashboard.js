"use strict";(self.webpackChunk_wcAdmin_webpackJsonp=self.webpackChunk_wcAdmin_webpackJsonp||[]).push([[8960],{25619:function(e,t,n){var o=n(69307),r=n(94333),a=n(7862),i=n.n(a),s=n(92819),l=n(9818),c=n(86020),d=n(67221),m=n(81921),u=n(14599),p=n(83199),h=n(79548),v=n(4411);class f extends o.Component{constructor(){super(),this.onDateSelect=this.onDateSelect.bind(this),this.onFilterSelect=this.onFilterSelect.bind(this),this.onAdvancedFilterAction=this.onAdvancedFilterAction.bind(this)}onDateSelect(e){const{report:t,addCesSurveyForAnalytics:n}=this.props;n(),(0,u.recordEvent)("datepicker_update",{report:t,...(0,s.omitBy)(e,s.isUndefined)})}onFilterSelect(e){const{report:t,addCesSurveyForAnalytics:n}=this.props,o=e.filter||e["filter-variations"];["single_product","single_category","single_coupon","single_variation"].includes(o)&&n();const r={report:t,filter:e.filter||"all"};"single_product"===e.filter&&(r.filter_variation=e["filter-variations"]||"all"),(0,u.recordEvent)("analytics_filter",r)}onAdvancedFilterAction(e,t){const{report:n,addCesSurveyForAnalytics:o}=this.props;switch(e){case"add":(0,u.recordEvent)("analytics_filters_add",{report:n,filter:t.key});break;case"remove":(0,u.recordEvent)("analytics_filters_remove",{report:n,filter:t.key});break;case"filter":const e=Object.keys(t).reduce(((e,n)=>(e[(0,s.snakeCase)(n)]=t[n],e)),{});o(),(0,u.recordEvent)("analytics_filters_filter",{report:n,...e});break;case"clear_all":(0,u.recordEvent)("analytics_filters_clear_all",{report:n});break;case"match":(0,u.recordEvent)("analytics_filters_all_any",{report:n,value:t.match})}}render(){const{advancedFilters:e,filters:t,path:n,query:r,showDatePicker:a,defaultDateRange:i}=this.props,{period:s,compare:l,before:d,after:u}=(0,m.getDateParamsFromQuery)(r,i),{primary:p,secondary:h}=(0,m.getCurrentDates)(r,i),f={period:s,compare:l,before:d,after:u,primaryDate:p,secondaryDate:h},_=this.context;return(0,o.createElement)(c.ReportFilters,{query:r,siteLocale:v.MV.siteLocale,currency:_.getCurrencyConfig(),path:n,filters:t,advancedFilters:e,showDatePicker:a,onDateSelect:this.onDateSelect,onFilterSelect:this.onFilterSelect,onAdvancedFilterAction:this.onAdvancedFilterAction,dateQuery:f,isoDateFormat:m.isoDateFormat})}}f.contextType=p.$,t.Z=(0,r.compose)((0,l.withSelect)((e=>{const{woocommerce_default_date_range:t}=e(d.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{defaultDateRange:t}})),(0,l.withDispatch)((e=>{const{addCesSurveyForAnalytics:t}=e(h.Ls);return{addCesSurveyForAnalytics:t}})))(f),f.propTypes={advancedFilters:i().object,filters:i().array,path:i().string.isRequired,query:i().object,showDatePicker:i().bool,report:i().string.isRequired}},3592:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var o=n(69307),r=n(65736),a=n(94333),i=n(92819),s=n(55609),l=n(92694),c=n(70444),d=(0,o.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(c.Path,{d:"M2 12C2 6.44444 6.44444 2 12 2C17.5556 2 22 6.44444 22 12C22 17.5556 17.5556 22 12 22C6.44444 22 2 17.5556 2 12ZM13 11V7H11V11H7V13H11V17H13V13H17V11H13Z"})),m=n(1402),u=n(9818),p=n(86020),h=n(67221),v=n(10431),f=n(81921),_=n(14599),g=(0,o.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(c.Path,{d:"M14.3 6.7l-1.1 1.1 4 4H4v1.5h13.3l-4.1 4.4 1.1 1.1 5.8-6.3z"})),y=(0,o.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(c.Path,{fillRule:"evenodd",d:"M11.25 5h1.5v15h-1.5V5zM6 10h1.5v10H6V10zm12 4h-1.5v6H18v-6z",clipRule:"evenodd"})),w=n(36886);const b=(0,o.lazy)((()=>Promise.all([n.e(5487),n.e(2397)]).then(n.bind(n,2445)))),k=(0,o.lazy)((()=>n.e(727).then(n.bind(n,31082)))),E=(0,o.lazy)((()=>n.e(2624).then(n.bind(n,83285))));var S=(0,l.applyFilters)("woocommerce_dashboard_default_sections",[{key:"store-performance",component:e=>(0,o.createElement)(o.Suspense,{fallback:(0,o.createElement)(p.Spinner,null)},(0,o.createElement)(E,e)),title:(0,r.__)("Performance","woocommerce-admin"),isVisible:!0,icon:g,hiddenBlocks:["coupons/amount","coupons/orders_count","downloads/download_count","taxes/order_tax","taxes/total_tax","taxes/shipping_tax","revenue/shipping","orders/avg_order_value","revenue/refunds","revenue/gross_sales"]},{key:"charts",component:e=>(0,o.createElement)(o.Suspense,{fallback:(0,o.createElement)(p.Spinner,null)},(0,o.createElement)(b,e)),title:(0,r.__)("Charts","woocommerce-admin"),isVisible:!0,icon:y,hiddenBlocks:["orders_avg_order_value","avg_items_per_order","products_items_sold","revenue_total_sales","revenue_refunds","coupons_amount","coupons_orders_count","revenue_shipping","taxes_total_tax","taxes_order_tax","taxes_shipping_tax","downloads_download_count"]},{key:"leaderboards",component:e=>(0,o.createElement)(o.Suspense,{fallback:(0,o.createElement)(p.Spinner,null)},(0,o.createElement)(k,e)),title:(0,r.__)("Leaderboards","woocommerce-admin"),isVisible:!0,icon:(0,o.createElement)(w.Z,null),hiddenBlocks:["coupons","customers"]}]),C=n(5267),x=(0,o.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(c.Path,{d:"M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z"})),O=n(59449),B=n(10918);class M extends o.Component{constructor(e){super(e),this.onMoveUp=this.onMoveUp.bind(this),this.onMoveDown=this.onMoveDown.bind(this)}onMoveUp(){const{onMove:e,onToggle:t}=this.props;e(-1),t()}onMoveDown(){const{onMove:e,onToggle:t}=this.props;e(1),t()}render(){const{onRemove:e,isFirst:t,isLast:n,onTitleBlur:a,onTitleChange:i,titleInput:l}=this.props;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{className:"woocommerce-ellipsis-menu__item"},(0,o.createElement)(s.TextControl,{label:(0,r.__)("Section title","woocommerce-admin"),onBlur:a,onChange:i,required:!0,value:l})),(0,o.createElement)("div",{className:"woocommerce-dashboard-section-controls"},!t&&(0,o.createElement)(p.MenuItem,{isClickable:!0,onInvoke:this.onMoveUp},(0,o.createElement)(m.Z,{icon:(0,o.createElement)(O.Z,null),label:(0,r.__)("Move up"),size:20,className:"icon-control"}),(0,r.__)("Move up","woocommerce-admin")),!n&&(0,o.createElement)(p.MenuItem,{isClickable:!0,onInvoke:this.onMoveDown},(0,o.createElement)(m.Z,{icon:(0,o.createElement)(B.Z,null),size:20,label:(0,r.__)("Move down"),className:"icon-control"}),(0,r.__)("Move down","woocommerce-admin")),(0,o.createElement)(p.MenuItem,{isClickable:!0,onInvoke:e},(0,o.createElement)(m.Z,{icon:x,size:20,label:(0,r.__)("Remove block"),className:"icon-control"}),(0,r.__)("Remove section","woocommerce-admin"))))}}var T=M;class D extends o.Component{constructor(e){super(e);const{title:t}=e;this.state={titleInput:t},this.onToggleHiddenBlock=this.onToggleHiddenBlock.bind(this),this.onTitleChange=this.onTitleChange.bind(this),this.onTitleBlur=this.onTitleBlur.bind(this)}onTitleChange(e){this.setState({titleInput:e})}onTitleBlur(){const{onTitleUpdate:e,title:t}=this.props,{titleInput:n}=this.state;""===n?this.setState({titleInput:t}):e&&e(n)}onToggleHiddenBlock(e){return()=>{const t=(0,i.xor)(this.props.hiddenBlocks,[e]);this.props.onChangeHiddenBlocks(t)}}render(){const{component:e,...t}=this.props,{titleInput:n}=this.state;return(0,o.createElement)("div",{className:"woocommerce-dashboard-section"},(0,o.createElement)(e,(0,C.Z)({onTitleChange:this.onTitleChange,onTitleBlur:this.onTitleBlur,onToggleHiddenBlock:this.onToggleHiddenBlock,titleInput:n,controls:T},t)))}}var F=n(25619),V=n(83199);const z=(0,l.applyFilters)("woocommerce_admin_dashboard_filters",[]);var j=(0,a.compose)((0,u.withSelect)((e=>{const{woocommerce_default_date_range:t}=e(h.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{defaultDateRange:t}})))((e=>{let{defaultDateRange:t,path:n,query:a}=e;const{updateUserPreferences:l,...c}=(0,h.useUserPreferences)(),u=(0,o.useMemo)((()=>(e=>{if(!e||0===e.length)return S.reduce(((e,t)=>[...e,{...t}]),[]);const t=S.map((e=>e.key)),n=e.map((e=>e.key)),o=new Set([...n,...t]),r=[];return o.forEach((t=>{const n=S.find((e=>e.key===t));if(!n)return;const o=e.find((e=>e.key===t));o&&delete o.icon,r.push({...n,...o})})),r})(c.dashboard_sections)),[c.dashboard_sections]),g=e=>{l({dashboard_sections:e})},y=(e,t)=>{const n=u.map((n=>(delete n.icon,n.key===e?{...n,...t}:n)));g(n)},w=e=>t=>{(0,_.recordEvent)("dash_section_rename",{key:e}),y(e,{title:t})},b=(e,t)=>()=>{t&&t();const n=u.findIndex((t=>e===t.key)),o=u.splice(n,1).shift();o.isVisible=!o.isVisible,u.push(o),o.isVisible?(0,_.recordEvent)("dash_section_add",{key:o.key}):(0,_.recordEvent)("dash_section_remove",{key:o.key}),g(u)},k=(e,t)=>{const n=u.splice(e,1).shift(),o=e+t;if(u[t<0?o:o-1].isVisible||0===e||e===u.length-1){u.splice(o,0,n),g(u);const e={key:n.key,direction:t>0?"down":"up"};(0,_.recordEvent)("dash_section_order_change",e)}else k(e,t+t)};return(0,o.createElement)(V.$.Provider,{value:(0,V.s)((0,v.getQuery)())},(()=>{const{period:e,compare:l,before:c,after:h}=(0,f.getDateParamsFromQuery)(a,t),{primary:v,secondary:_}=(0,f.getCurrentDates)(a,t),g={period:e,compare:l,before:c,after:h,primaryDate:v,secondaryDate:_},E=u.filter((e=>e.isVisible)).map((e=>e.key));return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(F.Z,{report:"dashboard",query:a,path:n,dateQuery:g,isoDateFormat:f.isoDateFormat,filters:z}),u.map(((e,r)=>{return e.isVisible?(0,o.createElement)(D,{component:e.component,hiddenBlocks:e.hiddenBlocks,key:e.key,onChangeHiddenBlocks:(s=e.key,e=>{y(s,{hiddenBlocks:e})}),onTitleUpdate:w(e.key),path:n,defaultDateRange:t,query:a,title:e.title,onMove:(0,i.partial)(k,r),onRemove:b(e.key),isFirst:e.key===E[0],isLast:e.key===E[E.length-1],filters:z}):null;var s})),(()=>{const e=u.filter((e=>!1===e.isVisible));return 0===e.length?null:(0,o.createElement)(s.Dropdown,{position:"top center",className:"woocommerce-dashboard-section__add-more",renderToggle:e=>{let{onToggle:t,isOpen:n}=e;return(0,o.createElement)(s.Button,{onClick:t,title:(0,r.__)("Add more sections","woocommerce-admin"),"aria-expanded":n},(0,o.createElement)(m.Z,{icon:d}))},renderContent:t=>{let{onToggle:n}=t;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(p.H,null,(0,r.__)("Dashboard Sections","woocommerce-admin")),(0,o.createElement)("div",{className:"woocommerce-dashboard-section__add-more-choices"},e.map((e=>(0,o.createElement)(s.Button,{key:e.key,onClick:b(e.key,n),className:"woocommerce-dashboard-section__add-more-btn",title:(0,r.sprintf)((0,r.__)("Add %s section","woocommerce-admin"),e.title)},(0,o.createElement)(m.Z,{className:e.key+"__icon",icon:e.icon,size:30}),(0,o.createElement)("span",{className:"woocommerce-dashboard-section__add-more-btn-title"},e.title))))))}})})())})())}))},10918:function(e,t,n){t.Z=function(e){var t=e.size,n=void 0===t?24:t,o=e.onClick,s=(e.icon,e.className),l=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],0<=t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,a),c=["gridicon","gridicons-chevron-down",s,!1,!1,!1].filter(Boolean).join(" ");return r.default.createElement("svg",i({className:c,height:n,width:n,onClick:o},l,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586z"})))};var o,r=(o=n(99196))&&o.__esModule?o:{default:o},a=["size","onClick","icon","className"];function i(){return i=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)}},59449:function(e,t,n){t.Z=function(e){var t=e.size,n=void 0===t?24:t,o=e.onClick,s=(e.icon,e.className),l=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],0<=t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,a),c=["gridicon","gridicons-chevron-up",s,!1,!1,!1].filter(Boolean).join(" ");return r.default.createElement("svg",i({className:c,height:n,width:n,onClick:o},l,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M4 15l8-8 8 8-1.414 1.414L12 9.828l-6.586 6.586z"})))};var o,r=(o=n(99196))&&o.__esModule?o:{default:o},a=["size","onClick","icon","className"];function i(){return i=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)}},36886:function(e,t,n){t.Z=function(e){var t=e.size,n=void 0===t?24:t,o=e.onClick,s=(e.icon,e.className),l=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],0<=t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,a),c=["gridicon","gridicons-list-ordered",s,!!function(e){return 0==e%18}(n)&&"needs-offset",!1,!1].filter(Boolean).join(" ");return r.default.createElement("svg",i({className:c,height:n,width:n,onClick:o},l,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M8 19h13v-2H8v2zm0-6h13v-2H8v2zm0-8v2h13V5H8zm-4.425.252c.107-.096.197-.188.269-.275-.012.228-.018.48-.018.756V8h1.175V3.717H3.959L2.488 4.915l.601.738.486-.401zm.334 7.764c.475-.426.785-.715.93-.867.146-.152.262-.297.35-.435.088-.138.153-.278.195-.42.042-.143.063-.298.063-.466 0-.225-.06-.427-.18-.608s-.289-.32-.507-.417a1.775 1.775 0 00-.742-.148c-.221 0-.419.022-.596.067s-.34.11-.491.195c-.15.085-.336.226-.557.423l.636.744c.174-.15.33-.264.467-.341a.835.835 0 01.409-.116.44.44 0 01.305.097.335.335 0 01.108.264c0 .09-.018.176-.054.258-.036.082-.1.18-.192.294-.092.114-.287.328-.586.64l-1.046 1.058V14h3.108v-.955h-1.62v-.029zm.53 4.746v-.018c.307-.086.541-.225.703-.414.162-.191.243-.419.243-.685a.839.839 0 00-.378-.727c-.252-.176-.6-.264-1.043-.264-.307 0-.579.033-.816.1s-.469.178-.696.334l.48.773c.293-.184.576-.275.85-.275.147 0 .263.027.35.082s.13.139.13.252c0 .301-.294.451-.882.451h-.27v.87h.264c.217 0 .393.016.527.049.135.031.232.08.293.143.061.064.091.154.091.271 0 .152-.058.264-.174.336-.116.07-.301.106-.555.106a2.3 2.3 0 01-.538-.069 2.502 2.502 0 01-.573-.212v.961c.228.088.441.148.637.182.196.033.41.05.64.05.561 0 .998-.114 1.314-.343.315-.228.473-.542.473-.94.003-.585-.355-.923-1.07-1.013z"})))};var o,r=(o=n(99196))&&o.__esModule?o:{default:o},a=["size","onClick","icon","className"];function i(){return i=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)}}}]);