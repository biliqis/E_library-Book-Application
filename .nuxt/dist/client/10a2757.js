(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{459:function(e,t,r){"use strict";var n=r(2),o=(r(37),r(47),r(221),r(13),r(4),r(10),r(48),r(98),r(8),r(9),r(16),r(17),r(6)),l=r(100),c=r(140);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},494:function(e,t,r){var content=r(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("0b74794e",content,!0,{sourceMap:!1})},556:function(e,t,r){"use strict";r(494)},557:function(e,t,r){var n=r(18)((function(i){return i[1]}));n.push([e.i,".half-bg[data-v-50a5046b]{background-color:#2b2862!important}.bg-tertiary[data-v-50a5046b]{background-color:#fff!important}a[data-v-50a5046b]{text-decoration:none!important}",""]),n.locals={},e.exports=n},603:function(e,t,r){"use strict";r.r(t);r(8),r(9),r(13),r(4),r(16),r(10),r(17);var n=r(12),o=r(2),l=(r(63),r(70));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{},layout:"guest",data:function(){return{dialog:!0,valid:!1,show1:!1,register:{firstName:null,lastName:null,username:null,email:null,confirmPassword:null,phoneNumber:null,occupation:null,address:null,password:null}}},computed:d({},Object(l.c)({registering:"registering"})),methods:d(d({},Object(l.b)({userRegister:"userRegister"})),{},{signIn:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,data={firstName:e.register.firstName,lastName:e.register.lastName,username:e.register.username,email:e.register.email,phonenumber:e.register.phoneNumber,occupation:e.register.occupation,password:e.register.password,confirmPassword:e.register.confirmPassword,address:e.register.address,role:"admin"},t.next=4,e.userRegister(data);case 4:return t.next=6,e.$auth.loginWith("local",{data:{email:e.login.usernameEmail,username:e.login.usernameEmail,password:e.login.password}});case 6:return t.abrupt("return",e.$router.push("/admins/dashboard/"));case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()}})},m=(r(556),r(62)),v=r(78),h=r.n(v),w=r(437),y=r(223),O=r(215),x=r(590),j=r(459),k=r(591),_=r(458),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{staticClass:"half-bg d-flex justify-center align-center"},[r("div",{staticClass:"d-flex d-flex justify-center justify-center pt-10 pb-10"},[r("img",{attrs:{src:"/svg/LMS.svg",width:"5%",alt:"Login image"}})]),e._v(" "),r("v-card",{staticClass:"d-flex flex-column mx-auto pb-10  relative bg-tertiary",attrs:{"max-width":"1000"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signIn.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",{staticClass:"px-10 py-10"},[r("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"6"}},[r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{placeholder:"First Name",label:"First Name",dense:"",outlined:"",block:"",required:!0},model:{value:e.register.firstName,callback:function(t){e.$set(e.register,"firstName",t)},expression:"register.firstName"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{placeholder:"Last Name",label:"Last Name",dense:"",outlined:"",block:"",required:!0},model:{value:e.register.lastName,callback:function(t){e.$set(e.register,"lastName",t)},expression:"register.lastName"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{placeholder:"Username",label:"Username",dense:"",outlined:"",block:"",required:!0},model:{value:e.register.username,callback:function(t){e.$set(e.register,"username",t)},expression:"register.username"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{placeholder:"Email",label:"Email",dense:"",outlined:"",block:"",required:!0},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{placeholder:"Password","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",label:"Password",dense:"",outlined:"",block:"",required:!0},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{placeholder:"Re-enter Password",label:"Re-enter Password",dense:"",type:"password",outlined:"",block:"",required:!0},model:{value:e.register.confirmPassword,callback:function(t){e.$set(e.register,"confirmPassword",t)},expression:"register.confirmPassword"}})],1)]),e._v(" "),r("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"6"}},[r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{placeholder:"Phone Number",label:"Phone Number",dense:"",outlined:"",block:"",required:!0},model:{value:e.register.phoneNumber,callback:function(t){e.$set(e.register,"phoneNumber",t)},expression:"register.phoneNumber"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{placeholder:"Occupation",label:"Occupation",dense:"",outlined:"",block:"",required:!0},model:{value:e.register.occupation,callback:function(t){e.$set(e.register,"occupation",t)},expression:"register.occupation"}})],1),e._v(" "),r("div",[r("v-text-field",{staticClass:"ma-0 p-0 ",attrs:{placeholder:"Address",label:"Address",dense:"",outlined:"",block:"",required:!0},model:{value:e.register.address,callback:function(t){e.$set(e.register,"address",t)},expression:"register.address"}})],1)])],1),e._v(" "),r("v-row",{staticClass:" d-flex justify-center flex-column"},[r("v-btn",{staticClass:"bg-primary d-flex mx-auto",attrs:{color:"primary",width:"60%"},on:{click:e.signIn}},[e._v(e._s(e.registering?"Registering":"Register"))]),e._v(" "),r("nuxt-link",{staticClass:"text-center mt-3",attrs:{to:"/login"}},[r("span",{staticClass:"accent--text text-center"},[e._v("Already have an account?")])])],1)],1)],1)],1)}),[],!1,null,"50a5046b",null);t.default=component.exports;h()(component,{VApp:w.a,VBtn:y.a,VCard:O.a,VCol:x.a,VForm:j.a,VRow:k.a,VTextField:_.a})}}]);