"use strict";(self.webpackChunk_wcAdmin_webpackJsonp=self.webpackChunk_wcAdmin_webpackJsonp||[]).push([[115],{59868:function(e,t,o){var s=o(69307),i=o(65736),n=o(94333),a=o(9818),c=o(29497),r=o(55609),m=o(86020),l=o(67221),u=o(73516);class d extends s.Component{constructor(e){super(e),this.state={isLoadingScripts:!1,isRequestStarted:!1}}async componentDidUpdate(e,t){const{hasErrors:o,isRequesting:s,onClose:n,onContinue:a,createNotice:c}=this.props,{isLoadingScripts:r,isRequestStarted:m}=this.state;if(!m)return;const l=!s&&!r&&(e.isRequesting||t.isLoadingScripts)&&!o,u=!s&&e.isRequesting&&o;l&&(n(),a()),u&&(c("error",(0,i.__)("There was a problem updating your preferences","woocommerce-admin")),n())}updateTracking(e){let{allowTracking:t}=e;const{updateOptions:o}=this.props;t&&"function"==typeof window.wcTracks.enable?(this.setState({isLoadingScripts:!0}),window.wcTracks.enable((()=>{this._isMounted&&((0,u.initializeExPlat)(),this.setState({isLoadingScripts:!1}))}))):t||(window.wcTracks.isEnabled=!1);const s=t?"yes":"no";this.setState({isRequestStarted:!0}),o({woocommerce_allow_tracking:s})}componentDidMount(){this._isMounted=!0}componentWillUnmount(){this._isMounted=!1}render(){const{allowTracking:e,isResolving:t,onClose:o,onContinue:n}=this.props;if(t)return null;if(e)return o(),n(),null;const{isRequesting:a,title:l=(0,i.__)("Build a better WooCommerce","woocommerce-admin"),message:u=(0,c.Z)({mixedString:(0,i.__)("Get improved features and faster fixes by sharing non-sensitive data via {{link}}usage tracking{{/link}} that shows us how WooCommerce is used. No personal data is tracked or stored.","woocommerce-admin"),components:{link:(0,s.createElement)(m.Link,{href:"https://woocommerce.com/usage-tracking?utm_medium=product",target:"_blank",type:"external"})}}),dismissActionText:d=(0,i.__)("No thanks","woocommerce-admin"),acceptActionText:p=(0,i.__)("Yes, count me in!","woocommerce-admin")}=this.props,{isRequestStarted:g}=this.state,w=g&&a;return(0,s.createElement)(r.Modal,{title:l,isDismissible:this.props.isDismissible,onRequestClose:()=>this.props.onClose(),className:"woocommerce-usage-modal"},(0,s.createElement)("div",{className:"woocommerce-usage-modal__wrapper"},(0,s.createElement)("div",{className:"woocommerce-usage-modal__message"},u),(0,s.createElement)("div",{className:"woocommerce-usage-modal__actions"},(0,s.createElement)(r.Button,{isSecondary:!0,isBusy:w,onClick:()=>this.updateTracking({allowTracking:!1})},d),(0,s.createElement)(r.Button,{isPrimary:!0,isBusy:w,onClick:()=>this.updateTracking({allowTracking:!0})},p))))}}t.Z=(0,n.compose)((0,a.withSelect)((e=>{const{getOption:t,getOptionsUpdatingError:o,isOptionsUpdating:s,hasFinishedResolution:i}=e(l.OPTIONS_STORE_NAME);return{allowTracking:"yes"===t("woocommerce_allow_tracking"),isRequesting:Boolean(s()),isResolving:!i("getOption",["woocommerce_allow_tracking"])||void 0===t("woocommerce_allow_tracking"),hasErrors:Boolean(o())}})),(0,a.withDispatch)((e=>{const{createNotice:t}=e("core/notices"),{updateOptions:o}=e(l.OPTIONS_STORE_NAME);return{createNotice:t,updateOptions:o}})))(d)},61080:function(e,t,o){o.r(t),o.d(t,{UsageModal:function(){return m}});var s=o(69307),i=o(65736),n=o(10431),a=o(29497),c=o(86020),r=o(59868);const m=()=>{const e="1"===(0,n.getQuery)()["wcpay-connection-success"],[t,o]=(0,s.useState)(e);if(!t)return null;const m=()=>{o(!1),(0,n.updateQueryString)({"wcpay-connection-success":void 0})},l=(0,i.__)("Help us build a better WooCommerce Payments experience","woocommerce-admin"),u=(0,a.Z)({mixedString:(0,i.__)("By agreeing to share non-sensitive {{link}}usage data{{/link}}, you’ll help us improve features and optimize the WooCommerce Payments experience. You can opt out at any time.","woocommerce-admin"),components:{link:(0,s.createElement)(c.Link,{href:"https://woocommerce.com/usage-tracking?utm_medium=product",target:"_blank",type:"external"})}});return(0,s.createElement)(r.Z,{isDismissible:!1,title:l,message:u,acceptActionText:(0,i.__)("I agree","woocommerce-admin"),dismissActionText:(0,i.__)("No thanks","woocommerce-admin"),onContinue:m,onClose:m})};t.default=m}}]);