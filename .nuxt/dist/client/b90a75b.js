(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{488:function(e,t,r){var content=r(530);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("62bfac8c",content,!0,{sourceMap:!1})},529:function(e,t,r){"use strict";r(488)},530:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,"a[data-v-48821892]{text-decoration:none!important}.table-width[data-v-48821892]{width:100%!important;background:red!important}",""]),o.locals={},e.exports=o},597:function(e,t,r){"use strict";r.r(t);r(8),r(9),r(13),r(4),r(16),r(10),r(17);var o=r(12),n=r(2),l=(r(63),r(70));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={middleware:["auth","isUser"],data:function(){return{bookTitle:"Your Profile",items:[1,2,3],dialog:!1,bookId:null,numberOfDays:null}},computed:d(d({},Object(l.c)({singleBook:"transactions/singleBook"})),{},{proposedDate:function(){if(this.numberOfDays)return new Date(theDate.getTime()+24*this.numberOfDays*60*60*1e3)}}),methods:d(d({},Object(l.b)({getSingleBook:"transactions/getSingleBook",borrowBookAction:"transactions/borrowBook"})),{},{borrowBook:function(){this.dialog=!0},confirmBorrow:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=new Date,o=r.setDate(r.getDate()+e.numberOfDays),data={numberOfBooks:1,bookId:e.bookId,returnDate:o},console.log(data),t.next=7,e.borrowBookAction(data);case 7:e.dialog=!1,t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}),mounted:function(){this.bookId=this.$route.params.id,this.getSingleBook(this.bookId)}},f=(r(529),r(62)),v=r(78),k=r.n(v),h=r(590),w=r(444),O=r(178),x=r(591),y=r(458),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("v-item-group",{attrs:{"active-class":"primary"}},[r("v-container",[r("div",{staticClass:"text-h6 text-left font-weight-medium grey--text mb-10 text-capitalize"},[e._v(e._s(e.bookTitle))]),e._v(" "),r("v-row",[r("v-col",{staticClass:"pa-0",attrs:{cols:"12",md:"4"}},[r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{disabled:"",dense:"",outlined:"",block:"",required:!0},model:{value:e.user.firstName,callback:function(t){e.$set(e.user,"firstName",t)},expression:"user.firstName"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{disabled:"",dense:"",outlined:"",block:"",required:!0},model:{value:e.user.lastName,callback:function(t){e.$set(e.user,"lastName",t)},expression:"user.lastName"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{disabled:"",dense:"",outlined:"",block:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{disabled:"",dense:"",outlined:"",block:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{disabled:"",dense:"",outlined:"",block:""},model:{value:e.user.phoneNumber,callback:function(t){e.$set(e.user,"phoneNumber",t)},expression:"user.phoneNumber"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{disabled:"",dense:"",outlined:"",block:""},model:{value:e.user.occupation,callback:function(t){e.$set(e.user,"occupation",t)},expression:"user.occupation"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{disabled:"",dense:"",outlined:"",block:"",required:!0},model:{value:e.user.address,callback:function(t){e.$set(e.user,"address",t)},expression:"user.address"}})],1)])],1)],1)],1)],1)}),[],!1,null,"48821892",null);t.default=component.exports;k()(component,{VCol:h.a,VContainer:w.a,VItemGroup:O.b,VRow:x.a,VTextField:y.a})}}]);