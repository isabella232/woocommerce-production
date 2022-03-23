"use strict";(self.webpackChunk_wcAdmin_webpackJsonp=self.webpackChunk_wcAdmin_webpackJsonp||[]).push([[6824],{57636:function(e,t,r){r.d(t,{Z:function(){return c}});var o=r(69307),a=r(92819),s=r(55609),i=r(86020),n=r(10431);class c extends o.Component{getCategoryAncestorIds(e,t){const r=[];let o=e.parent;for(;o;)r.unshift(o),o=t.get(o).parent;return r}getCategoryAncestors(e,t){const r=this.getCategoryAncestorIds(e,t);if(r.length)return 1===r.length?t.get((0,a.first)(r)).name+" › ":2===r.length?t.get((0,a.first)(r)).name+" › "+t.get((0,a.last)(r)).name+" › ":t.get((0,a.first)(r)).name+" … "+t.get((0,a.last)(r)).name+" › "}render(){const{categories:e,category:t,query:r}=this.props,a=(0,n.getPersistedQuery)(r);return t?(0,o.createElement)("div",{className:"woocommerce-table__breadcrumbs"},this.getCategoryAncestors(t,e),(0,o.createElement)(i.Link,{href:(0,n.getNewPath)(a,"/analytics/categories",{filter:"single_category",categories:t.id}),type:"wc-admin"},t.name)):(0,o.createElement)(s.Spinner,null)}}},52517:function(e,t,r){r.d(t,{O3:function(){return l},be:function(){return u},u8:function(){return p}});var o=r(65736),a=r(92694),s=r(9818),i=r(63193),n=r(79548);const{addCesSurveyForAnalytics:c}=(0,s.dispatch)(n.Ls),l=(0,a.applyFilters)("woocommerce_admin_products_report_charts",[{key:"items_sold",label:(0,o.__)("Items sold","woocommerce-admin"),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:(0,o.__)("Net sales","woocommerce-admin"),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:(0,o.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),m={label:(0,o.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:[{label:(0,o.__)("All products","woocommerce-admin"),value:"all"},{label:(0,o.__)("Single product","woocommerce-admin"),value:"select_product",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_product",chartMode:"item-comparison",path:["select_product"],settings:{type:"products",param:"products",getLabels:i.oC,labels:{placeholder:(0,o.__)("Type to search for a product","woocommerce-admin"),button:(0,o.__)("Single product","woocommerce-admin")}}}]},{label:(0,o.__)("Comparison","woocommerce-admin"),value:"compare-products",chartMode:"item-comparison",settings:{type:"products",param:"products",getLabels:i.oC,labels:{helpText:(0,o.__)("Check at least two products below to compare","woocommerce-admin"),placeholder:(0,o.__)("Search for products to compare","woocommerce-admin"),title:(0,o.__)("Compare Products","woocommerce-admin"),update:(0,o.__)("Compare","woocommerce-admin")},onClick:c}}]},d={showFilters:e=>"single_product"===e.filter&&!!e.products&&e["is-variable"],staticParams:["filter","products","chartType","paged","per_page"],param:"filter-variations",filters:[{label:(0,o.__)("All variations","woocommerce-admin"),chartMode:"item-comparison",value:"all"},{label:(0,o.__)("Single variation","woocommerce-admin"),value:"select_variation",subFilters:[{component:"Search",value:"single_variation",path:["select_variation"],settings:{type:"variations",param:"variations",getLabels:i.uC,labels:{placeholder:(0,o.__)("Type to search for a variation","woocommerce-admin"),button:(0,o.__)("Single variation","woocommerce-admin")}}}]},{label:(0,o.__)("Comparison","woocommerce-admin"),chartMode:"item-comparison",value:"compare-variations",settings:{type:"variations",param:"variations",getLabels:i.uC,labels:{helpText:(0,o.__)("Check at least two variations below to compare","woocommerce-admin"),placeholder:(0,o.__)("Search for variations to compare","woocommerce-admin"),title:(0,o.__)("Compare Variations","woocommerce-admin"),update:(0,o.__)("Compare","woocommerce-admin")}}}]},u=(0,a.applyFilters)("woocommerce_admin_products_report_advanced_filters",{filters:{},title:(0,o._x)("Products Match {{select /}} Filters","A sentence describing filters for Products. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin")});Object.keys(u.filters).length&&(m.filters.push({label:(0,o.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}),d.filters.push({label:(0,o.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}));const p=(0,a.applyFilters)("woocommerce_admin_products_report_filters",[m,d])},50427:function(e,t,r){r.r(t);var o=r(69307),a=r(65736),s=r(94333),i=r(7862),n=r.n(i),c=r(67221),l=r(9818),m=r(52517),d=r(21314),u=r(41021),p=r(23961),_=r(46439),g=r(13098),y=r(86046),h=r(25619);class b extends o.Component{getChartMeta(){const{query:e,isSingleProductView:t,isSingleProductVariable:r}=this.props,o="compare-products"===e.filter&&e.products&&e.products.split(",").length>1||t&&r?"item-comparison":"time-comparison";return{compareObject:t&&r?"variations":"products",itemsLabel:t&&r?(0,a.__)("%d variations","woocommerce-admin"):(0,a.__)("%d products","woocommerce-admin"),mode:o}}render(){const{compareObject:e,itemsLabel:t,mode:r}=this.getChartMeta(),{path:a,query:s,isError:i,isRequesting:n,isSingleProductVariable:c}=this.props;if(i)return(0,o.createElement)(_.Z,null);const l={...s};return"item-comparison"===r&&(l.segmentby="products"===e?"product":"variation"),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(h.Z,{query:s,path:a,filters:m.u8,advancedFilters:m.be,report:"products"}),(0,o.createElement)(g.Z,{mode:r,charts:m.O3,endpoint:"products",isRequesting:n,query:l,selectedChart:(0,d.Z)(s.chart,m.O3),filters:m.u8,advancedFilters:m.be}),(0,o.createElement)(p.Z,{charts:m.O3,mode:r,filters:m.u8,advancedFilters:m.be,endpoint:"products",isRequesting:n,itemsLabel:t,path:a,query:l,selectedChart:(0,d.Z)(l.chart,m.O3)}),c?(0,o.createElement)(y.Z,{baseSearchQuery:{filter:"single_product"},isRequesting:n,query:s,filters:m.u8,advancedFilters:m.be}):(0,o.createElement)(u.Z,{isRequesting:n,query:s,filters:m.u8,advancedFilters:m.be}))}}b.propTypes={path:n().string.isRequired,query:n().object.isRequired},t.default=(0,s.compose)((0,l.withSelect)(((e,t)=>{const{query:r,isRequesting:o}=t,a=!r.search&&r.products&&1===r.products.split(",").length,{getItems:s,isResolving:i,getItemsError:n}=e(c.ITEMS_STORE_NAME);if(o)return{query:{...r},isSingleProductView:a,isRequesting:o};if(a){const e=parseInt(r.products,10),t={include:e},o=s("products",t),c=o&&o.get(e)&&"variable"===o.get(e).type,l=i("getItems",["products",t]),m=Boolean(n("products",t));return{query:{...r,"is-variable":c},isSingleProductView:a,isRequesting:l,isSingleProductVariable:c,isError:m}}return{query:r,isSingleProductView:a}})))(b)},41021:function(e,t,r){var o=r(69307),a=r(65736),s=r(94333),i=r(22629),n=r(9818),c=r(92819),l=r(10431),m=r(86020),d=r(81595),u=r(74617),p=r(67221),_=r(57636),g=r(42934),y=r(13732),h=r(83199),b=r(4411);const w=(0,b.O3)("manageStock","no"),v=(0,b.O3)("stockStatuses",{});class f extends o.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,a.__)("Product title","woocommerce-admin"),key:"product_name",required:!0,isLeftAligned:!0,isSortable:!0},{label:(0,a.__)("SKU","woocommerce-admin"),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:(0,a.__)("Items sold","woocommerce-admin"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:(0,a.__)("Net sales","woocommerce-admin"),screenReaderLabel:(0,a.__)("Net sales","woocommerce-admin"),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:(0,a.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0},{label:(0,a.__)("Category","woocommerce-admin"),key:"product_cat"},{label:(0,a.__)("Variations","woocommerce-admin"),key:"variations",isSortable:!0},"yes"===w?{label:(0,a.__)("Status","woocommerce-admin"),key:"stock_status"}:null,"yes"===w?{label:(0,a.__)("Stock","woocommerce-admin"),key:"stock",isNumeric:!0}:null].filter(Boolean)}getRowsContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const{query:t}=this.props,r=(0,l.getPersistedQuery)(t),{render:s,formatDecimal:n,getCurrencyConfig:p}=this.context,y=p();return(0,c.map)(e,(e=>{const{product_id:c,items_sold:p,net_revenue:h,orders_count:b}=e,f=e.extended_info||{},{category_ids:S,low_stock_amount:k,manage_stock:C,sku:q,stock_status:E,stock_quantity:R,variations:F=[]}=f,P=(0,i.decodeEntities)(f.name),x=(0,l.getNewPath)(r,"/analytics/orders",{filter:"advanced",product_includes:c}),N=(0,l.getNewPath)(r,"/analytics/products",{filter:"single_product",products:c}),{categories:V}=this.props,A=S&&V&&S.map((e=>V.get(e))).filter(Boolean)||[],L=(0,g.d)(E,R,k)?(0,o.createElement)(m.Link,{href:(0,u.getAdminLink)("post.php?action=edit&post="+c),type:"wp-admin"},(0,a._x)("Low","Indication of a low quantity","woocommerce-admin")):v[E];return[{display:(0,o.createElement)(m.Link,{href:N,type:"wc-admin"},P),value:P},{display:q,value:q},{display:(0,d.formatValue)(y,"number",p),value:p},{display:s(h),value:n(h)},{display:(0,o.createElement)(m.Link,{href:x,type:"wc-admin"},b),value:b},{display:(0,o.createElement)("div",{className:"woocommerce-table__product-categories"},A[0]&&(0,o.createElement)(_.Z,{category:A[0],categories:V}),A.length>1&&(0,o.createElement)(m.Tag,{label:(0,a.sprintf)((0,a._x)("+%d more","categories","woocommerce-admin"),A.length-1),popoverContents:A.map((e=>(0,o.createElement)(_.Z,{category:e,categories:V,key:e.id,query:t})))})),value:A.map((e=>e.name)).join(", ")},{display:(0,d.formatValue)(y,"number",F.length),value:F.length},"yes"===w?{display:C?L:(0,a.__)("N/A","woocommerce-admin"),value:C?v[E]:null}:null,"yes"===w?{display:C?(0,d.formatValue)(y,"number",R):(0,a.__)("N/A","woocommerce-admin"),value:R}:null].filter(Boolean)}))}getSummary(e){const{products_count:t=0,items_sold:r=0,net_revenue:o=0,orders_count:s=0}=e,{formatAmount:i,getCurrencyConfig:n}=this.context,c=n();return[{label:(0,a._n)("Product","Products",t,"woocommerce-admin"),value:(0,d.formatValue)(c,"number",t)},{label:(0,a._n)("Item sold","Items sold",r,"woocommerce-admin"),value:(0,d.formatValue)(c,"number",r)},{label:(0,a.__)("Net sales","woocommerce-admin"),value:i(o)},{label:(0,a._n)("Orders","Orders",s,"woocommerce-admin"),value:(0,d.formatValue)(c,"number",s)}]}render(){const{advancedFilters:e,baseSearchQuery:t,filters:r,hideCompare:s,isRequesting:i,query:n}=this.props,c={helpText:(0,a.__)("Check at least two products below to compare","woocommerce-admin"),placeholder:(0,a.__)("Search by product name or SKU","woocommerce-admin")};return(0,o.createElement)(y.Z,{compareBy:s?void 0:"products",endpoint:"products",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["products_count","items_sold","net_revenue","orders_count"],itemIdField:"product_id",isRequesting:i,labels:c,query:n,searchBy:"products",baseSearchQuery:t,tableQuery:{orderby:n.orderby||"items_sold",order:n.order||"desc",extended_info:!0,segmentby:n.segmentby},title:(0,a.__)("Products","woocommerce-admin"),columnPrefsKey:"products_report_columns",filters:r,advancedFilters:e})}}f.contextType=h.$,t.Z=(0,s.compose)((0,n.withSelect)(((e,t)=>{const{query:r,isRequesting:o}=t,{getItems:a,getItemsError:s,isResolving:i}=e(p.ITEMS_STORE_NAME);if(o||r.search&&(!r.products||!r.products.length))return{};const n={per_page:-1};return{categories:a("categories",n),isError:Boolean(s("categories",n)),isRequesting:i("getItems",["categories",n])}})))(f)},86046:function(e,t,r){var o=r(69307),a=r(65736),s=r(92694),i=r(92819),n=r(86020),c=r(10431),l=r(81595),m=r(74617),d=r(13732),u=r(42934),p=r(83199),_=r(63193),g=r(4411);const y=(0,g.O3)("manageStock","no"),h=(0,g.O3)("stockStatuses",{});class b extends o.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,a.__)("Product / Variation title","woocommerce-admin"),key:"name",required:!0,isLeftAligned:!0},{label:(0,a.__)("SKU","woocommerce-admin"),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:(0,a.__)("Items sold","woocommerce-admin"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:(0,a.__)("Net sales","woocommerce-admin"),screenReaderLabel:(0,a.__)("Net sales","woocommerce-admin"),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:(0,a.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0},"yes"===y?{label:(0,a.__)("Status","woocommerce-admin"),key:"stock_status"}:null,"yes"===y?{label:(0,a.__)("Stock","woocommerce-admin"),key:"stock",isNumeric:!0}:null].filter(Boolean)}getRowsContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const{query:t}=this.props,r=(0,c.getPersistedQuery)(t),{formatAmount:s,formatDecimal:d,getCurrencyConfig:p}=this.context;return(0,i.map)(e,(e=>{const{items_sold:t,net_revenue:i,orders_count:g,product_id:b,variation_id:w}=e,v=e.extended_info||{},{stock_status:f,stock_quantity:S,low_stock_amount:k,deleted:C,sku:q}=v,E=(R=e,(0,_.V1)(R.extended_info||{}));var R;const F=(0,c.getNewPath)(r,"/analytics/orders",{filter:"advanced",variation_includes:w}),P=(0,m.getAdminLink)(`post.php?post=${b}&action=edit`);return[{display:C?E+" "+(0,a.__)("(Deleted)"," woocommerce-admin"):(0,o.createElement)(n.Link,{href:P,type:"wp-admin"},E),value:E},{display:q,value:q},{display:(0,l.formatValue)(p(),"number",t),value:t},{display:s(i),value:d(i)},{display:(0,o.createElement)(n.Link,{href:F,type:"wc-admin"},g),value:g},"yes"===y?{display:(0,u.d)(f,S,k)?(0,o.createElement)(n.Link,{href:P,type:"wp-admin"},(0,a._x)("Low","Indication of a low quantity","woocommerce-admin")):h[f],value:h[f]}:null,"yes"===y?{display:S,value:S}:null].filter(Boolean)}))}getSummary(e){const{query:t}=this.props,{variations_count:r=0,items_sold:o=0,net_revenue:i=0,orders_count:n=0}=e,{formatAmount:c,getCurrencyConfig:m}=this.context,d=m();return[{label:(0,s.applyFilters)("experimental_woocommerce_admin_variations_report_table_summary_variations_count_label",(0,a._n)("variation sold","variations sold",r,"woocommerce-admin"),r,t),value:(0,l.formatValue)(d,"number",r)},{label:(0,a._n)("item sold","items sold",o,"woocommerce-admin"),value:(0,l.formatValue)(d,"number",o)},{label:(0,a.__)("net sales","woocommerce-admin"),value:c(i)},{label:(0,a._n)("orders","orders",n,"woocommerce-admin"),value:(0,l.formatValue)(d,"number",n)}]}render(){const{advancedFilters:e,baseSearchQuery:t,filters:r,isRequesting:i,query:n}=this.props,c={helpText:(0,a.__)("Check at least two variations below to compare","woocommerce-admin"),placeholder:(0,a.__)("Search by variation name or SKU","woocommerce-admin")};return(0,o.createElement)(d.Z,{baseSearchQuery:t,compareBy:"variations",compareParam:"filter-variations",endpoint:"variations",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,isRequesting:i,itemIdField:"variation_id",labels:c,query:n,getSummary:this.getSummary,summaryFields:["variations_count","items_sold","net_revenue","orders_count"],tableQuery:{orderby:n.orderby||"items_sold",order:n.order||"desc",extended_info:!0,product_includes:n.product_includes,variations:n.variations},title:(0,s.applyFilters)("experimental_woocommerce_admin_variations_report_table_title",(0,a.__)("Variations","woocommerce-admin"),n),columnPrefsKey:"variations_report_columns",filters:r,advancedFilters:e})}}b.contextType=p.$,t.Z=b}}]);