webpackJsonp([1],{"+3PO":function(t,e){},"/CD6":function(t,e){},"8tCY":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("/5sW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},n,!1,function(t){i("tii0")},null,null).exports,o=i("/ocq"),c={name:"TabSet",props:{secondary:{type:Boolean,default:!1}}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"tab-set",class:{secondary:this.secondary}},[this._t("default")],2)},staticRenderFns:[]};var l=i("VU/8")(c,r,!1,function(t){i("+3PO")},"data-v-2daa9206",null).exports,d={name:"TabOption",props:{secondary:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},container:{type:Boolean,default:!1},click:{type:Function,default:function(){}}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-option",class:{selected:this.selected,secondary:this.secondary,container:this.container},on:{click:this.click}},[e("div",{staticClass:"tab-option-label"},[this._t("default")],2)])},staticRenderFns:[]};var v={name:"ComponentsPage",components:{TabSet:l,TabOption:i("VU/8")(d,u,!1,function(t){i("wc2V")},"data-v-2a682384",null).exports},data:function(){return{emailAddress:"",tabIndex:0,tabSecondary:!1}},methods:{emailSignUp:function(){this.emailAddress?alert("Thank you for registering: "+this.emailAddress):alert("No email address entered!")}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container components-page"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("h1",{staticClass:"super-head"},[t._v("TEDxUofW")]),t._v(" "),i("div",[i("router-link",{attrs:{to:"/"}},[t._v("Components")]),t._v(" ·\n        "),i("router-link",{attrs:{to:"/checkout"}},[t._v("Checkout")])],1),t._v(" "),i("h1",[t._v("Grid")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("h2",[t._v("Type Elements")]),t._v(" "),i("p",[t._v("TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia.")]),t._v(" "),i("p",[t._v("In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)")]),t._v(" "),i("p",[t._v("TEDxUofW is established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our organization has sought to give amazing speakers a receptive audience to share their passion. Our all student-run organization has put on a sold-out event for four years in a row, gathering a collection of great creative thinkers, scientific minds, community leaders, and much more.")]),t._v(" "),i("p",{staticClass:"callout"},[t._v("This is a callout")]),t._v(" "),i("p",{staticClass:"footnote"},[t._v("This is a footnote")]),t._v(" "),i("h2",[t._v("Form Elements")]),t._v(" "),i("div",{staticClass:"example-container"},[i("p",{staticClass:"spacer"},[t._v("Join our mailing list to learn more about TEDxUofW!")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.emailAddress,expression:"emailAddress"}],staticClass:"full-width",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.emailAddress},on:{input:function(e){e.target.composing||(t.emailAddress=e.target.value)}}}),t._v(" "),i("button",{staticClass:"full-width",on:{click:function(e){t.emailSignUp()}}},[t._v("Sign up")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),i("h2",[t._v("Tabs")]),t._v(" "),i("tab-set",{attrs:{secondary:t.tabSecondary}},[i("tab-option",{attrs:{selected:0==t.tabIndex,click:function(){t.tabIndex=0},secondary:t.tabSecondary}},[t._v("Conference")]),t._v(" "),i("tab-option",{attrs:{selected:1==t.tabIndex,click:function(){t.tabIndex=1},secondary:t.tabSecondary}},[t._v("Speakers")]),t._v(" "),i("tab-option",{attrs:{selected:2==t.tabIndex,click:function(){t.tabIndex=2},secondary:t.tabSecondary}},[t._v("Sponsors")]),t._v(" "),i("tab-option",{attrs:{click:function(){t.tabIndex=3},secondary:t.tabSecondary,container:""}},[i("button",{staticClass:"primary-2 no-margin full-width"},[t._v("Sign in")])])],1)],1)]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("p",[t._v("For the tab set, you've selected tab index\n        "),i("b",[t._v(t._s(t.tabIndex))]),t._v("!\n      ")])]),t._v(" "),i("div",{staticClass:"col-6"},[i("p",[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.tabSecondary,expression:"tabSecondary"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.tabSecondary)?t._i(t.tabSecondary,null)>-1:t.tabSecondary},on:{change:function(e){var i=t.tabSecondary,a=e.target,n=!!a.checked;if(Array.isArray(i)){var s=t._i(i,null);a.checked?s<0&&(t.tabSecondary=i.concat([null])):s>-1&&(t.tabSecondary=i.slice(0,s).concat(i.slice(s+1)))}else t.tabSecondary=n}}}),t._v(" "),i("span",[t._v("Tab set secondary style.")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-4"},[i("h2",[t._v("About the grid")]),t._v(" "),i("p",[t._v("This grid is twelve columns wide and has a maximum width of 1260px. The margin between each element in the grid is 32px.")])]),t._v(" "),i("div",{staticClass:"col-4"},[i("h2",[t._v("Grid configuration")]),t._v(" "),i("p",[t._v("However, these are just configurable variables. We can choose any width or column count we'd like and the stylesheet will be configured magically!")])]),t._v(" "),i("div",{staticClass:"col-4"},[i("h2",[t._v("Implementation")]),t._v(" "),i("p",[t._v("See how it's done in /src/styles/_grid.scss")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-2"},[e("p",[this._v("Let's make some really narrow columns!")])]),this._v(" "),e("div",{staticClass:"col-2"},[e("p",[this._v("Let's make some really narrow columns!")])]),this._v(" "),e("div",{staticClass:"col-2"},[e("p",[this._v("Let's make some really narrow columns!")])]),this._v(" "),e("div",{staticClass:"col-6"},[e("p",[this._v("And let's make one final really wide column. TEDxUofW is established to bring inspirational and informative TED style talks to the University of Washington.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example-container button-set sign-in-set"},[e("button",[this._v("Sign in")]),this._v(" "),e("button",{staticClass:"secondary"},[this._v("Sign up")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"example-container"},[i("input",{staticClass:"full-width",attrs:{type:"text",placeholder:"First Name"}}),t._v(" "),i("input",{staticClass:"full-width",attrs:{type:"text",placeholder:"Last Name"}}),t._v(" "),i("input",{staticClass:"full-width",attrs:{type:"email",placeholder:"Email"}}),t._v(" "),i("input",{staticClass:"full-width",attrs:{type:"password",placeholder:"Password"}}),t._v(" "),i("label",[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("span",[t._v("I am a current UW student")])]),t._v(" "),i("a",{staticClass:"spacer",attrs:{href:"#"}},[t._v("Forgot your password?")]),t._v(" "),i("button",{staticClass:"full-width"},[t._v("Sign up")])])}]};var p=i("VU/8")(v,m,!1,function(t){i("8tCY")},"data-v-45146532",null).exports,h=i("Dd8w"),f=i.n(h),_={name:"Ticket",props:{name:{type:String,default:""},maxWidth:{type:String,default:""},conferenceName:{type:String,default:"TEDxUofW"},conferenceYear:{type:String},conferenceTitle:{type:String},personName:{type:String},personMeal:{type:String},ticketType:{type:String},confirmationCode:{type:String}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ticket-container",style:{maxWidth:t.maxWidth}},[i("div",{staticClass:"conference-info"},[i("div",{staticClass:"info-small ticket-type"},[t._v(t._s(t.ticketType))]),t._v(" "),i("div",{staticClass:"conference-main"},[i("div",{staticClass:"conference-name-year"},[i("span",{staticClass:"conference-name"},[t._v(t._s(t.conferenceName))]),t._v(" "),i("span",{staticClass:"info-small conference-year"},[t._v(t._s(t.conferenceYear))])]),t._v(" "),i("div",{staticClass:"conference-title"},[t._v(t._s(t.conferenceTitle))])]),t._v(" "),i("div",{staticClass:"info-small ticket-number"},[t._v("Confirmation: "+t._s(t.confirmationCode))])]),t._v(" "),i("div",{staticClass:"person-info"},[i("div",{staticClass:"info-set"},[i("p",{staticClass:"footnote"},[t._v("Name")]),t._v(" "),i("p",{staticClass:"person-name"},[t._v(t._s(t.personName)+" ")])]),t._v(" "),i("div",{staticClass:"info-set"},[i("p",{staticClass:"footnote"},[t._v("Meal Choice")]),t._v(" "),i("p",{staticClass:"person-meal"},[t._v(t._s(t.personMeal)+" ")])])])])},staticRenderFns:[]};var g=i("VU/8")(_,k,!1,function(t){i("Uila")},"data-v-7805a919",null).exports,y={name:"SpotlightTicketView",components:{Ticket:g},props:{tickets:{type:Array},onClickTicket:{type:Function},mobileView:{type:Boolean}},computed:{spotlightTickets:function(){if(this.mobileView)return this.tickets.map(function(t,e){return f()({},t,{index:e})});var t=this.tickets.map(function(t,e){return f()({},t,{index:e})}).filter(function(t,e){return e<3}).map(function(t,e){return f()({},t,{spotlight:0==e})});return 3==t.length&&t.unshift(t.pop()),t}}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.tickets.length>0?i("div",{class:{"mobile-view":t.mobileView}},[i("transition-group",{staticClass:"tickets-container",attrs:{name:"fade",tag:"div"}},t._l(t.spotlightTickets,function(e){return i("div",{key:e.id,staticClass:"ticket-container",on:{click:function(i){t.onClickTicket(e)}}},[i("Ticket",{staticClass:"ticket",class:{"non-spotlight-ticket":!e.spotlight},attrs:{conferenceTitle:"Two Steps Forward",conferenceYear:"2019",personName:e.firstName+" "+e.lastName,personMeal:e.meal,ticketType:e.ticket,confirmationCode:"SB11054"+e.id,maxWidth:"300px"}})],1)}),0)],1):t._e()},staticRenderFns:[]};var C={name:"CheckoutPage",components:{SpotlightTicketView:i("VU/8")(y,T,!1,function(t){i("/CD6")},"data-v-0412ce76",null).exports,Ticket:g},data:function(){return{ticketIdCounter:0,ticketEditIndex:-1,tickets:[],creatingTicket:!1,showError:!1,mobileView:!1,paymentScreen:!1}},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("resize",t.recalculateMobileView)}),this.recalculateMobileView(),this.tickets=[{firstName:"Andrey",lastName:"Butenko",meal:"No Meal",ticket:"General Ticket",id:-4},{firstName:"Jenny",lastName:"Liang",meal:"No Meal",ticket:"General Ticket",id:-3},{firstName:"Nick",lastName:"Zhao",meal:"No Meal",ticket:"General Ticket",id:-2},{firstName:"Soham",lastName:"Pardeshi",meal:"No Meal",ticket:"General Ticket",id:-1}]},beforeDestroy:function(){window.removeEventListener("resize",this.recalculateMobileView)},methods:{addTicket:function(){this.tickets.push(this.getEmptyTicket()),this.editTicket(this.tickets.length-1),this.creatingTicket=!0},saveTicket:function(){this.currentTicketIsValid?this.commitChanges():this.showError=!0},cancelTicket:function(){this.removeTicketAtIndex(this.ticketEditIndex),this.commitChanges()},commitChanges:function(){this.showError=!1,this.ticketEditIndex=-1,this.creatingTicket=!1,this.scrollToTop()},editTicket:function(t){this.isCurrentlyEditing||(this.ticketEditIndex=t,this.scrollToTop())},removeTicketAtIndex:function(t){this.tickets.splice(t,1)},getEmptyTicket:function(){return{firstName:"",lastName:"",meal:"",ticket:"General Ticket",id:this.ticketIdCounter}},scrollToTop:function(){window.scrollTo(0,0)},recalculateMobileView:function(){this.mobileView=window.innerWidth<1350},goToPayment:function(){this.paymentScreen=!0}},computed:{isCurrentlyEditing:function(){return-1!=this.ticketEditIndex},currentTicket:function(){return this.tickets[this.ticketEditIndex]||{}},currentTicketIsValid:function(){return!this.isCurrentlyEditing||!!this.currentTicket.firstName&&!!this.currentTicket.lastName&&!!this.currentTicket.meal&&this.currentTicket.ticket},spotlightTickets:function(){var t=this;return this.isCurrentlyEditing&&this.mobileView?[]:this.isCurrentlyEditing?this.tickets.filter(function(e,i){return i==t.ticketEditIndex}):this.tickets}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container components-page",class:{"mobile-view":t.mobileView}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",[i("router-link",{attrs:{to:"/"}},[t._v("Components")]),t._v(" ·\n        "),i("router-link",{attrs:{to:"/checkout"}},[t._v("Checkout")])],1),t._v(" "),i("h1",[t._v("Checkout")])])]),t._v(" "),t.paymentScreen?i("div",{staticClass:"row"},[i("p",[t._v("Screen where you submit payment details will come soon, based on Jenny's payments work :)")])]):i("div",{staticClass:"row overview-screen-row",class:{"allow-wrap":t.mobileView}},[i("SpotlightTicketView",{class:{"col-12":t.mobileView,"col-8":!t.mobileView},attrs:{tickets:t.spotlightTickets,onClickTicket:function(e){return t.editTicket(e.index)},mobileView:t.mobileView}}),t._v(" "),0==t.tickets.length?i("div",{staticClass:"tickets-container empty-state-container",class:{"col-12":t.mobileView,"col-8":!t.mobileView}},[i("div",{staticClass:"empty-state-text"},[i("p",[t._v("You haven't selected any tickets to purchase yet. "),i("a",{on:{click:function(e){t.addTicket()}}},[t._v("Add a ticket now.")])])])]):t._e(),t._v(" "),t.isCurrentlyEditing?i("div",{staticClass:"col-4 sidebar-container ticket-form",class:{"col-12":t.mobileView,"col-4":!t.mobileView}},[i("h2",[t._v("Ticket Information")]),t._v(" "),i("p",{staticClass:"footnote show-label"},[t._v("Ticket Type")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.currentTicket.ticket,expression:"currentTicket.ticket"}],staticClass:"full-width",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.currentTicket,"ticket",e.target.multiple?i:i[0])}}},[i("option",[t._v("General Ticket")]),t._v(" "),i("option",[t._v("UW Student Ticket")])]),t._v(" "),i("p",{staticClass:"footnote show-label"},[t._v("Meal Type")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.currentTicket.meal,expression:"currentTicket.meal"}],staticClass:"full-width",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.currentTicket,"meal",e.target.multiple?i:i[0])}}},[i("option",{attrs:{disabled:"",value:""}},[t._v("Select a meal")]),t._v(" "),i("option",[t._v("No Meal")]),t._v(" "),i("option",[t._v("Vegan")]),t._v(" "),i("option",[t._v("Non-Vegan")])]),t._v(" "),i("h2",{staticClass:"extra-margin-top"},[t._v("Ticket Holder")]),t._v(" "),i("p",{staticClass:"footnote",class:{"show-label":!!t.currentTicket.firstName}},[t._v("First Name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentTicket.firstName,expression:"currentTicket.firstName"}],staticClass:"full-width",attrs:{type:"text",placeholder:"First Name"},domProps:{value:t.currentTicket.firstName},on:{input:function(e){e.target.composing||t.$set(t.currentTicket,"firstName",e.target.value)}}}),t._v(" "),i("p",{staticClass:"footnote",class:{"show-label":!!t.currentTicket.lastName}},[t._v("Last Name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentTicket.lastName,expression:"currentTicket.lastName"}],staticClass:"full-width",attrs:{type:"text",placeholder:"Last Name"},domProps:{value:t.currentTicket.lastName},on:{input:function(e){e.target.composing||t.$set(t.currentTicket,"lastName",e.target.value)}}}),t._v(" "),t.showError?i("p",{staticClass:"error extra-margin-top"},[t._v("Make sure you've filled out all parts of the form before saving.")]):t._e(),t._v(" "),i("button",{staticClass:"full-width",class:{"extra-margin-top":!t.showError},on:{click:function(e){t.saveTicket()}}},[t._v("Save")]),t._v(" "),t.tickets.length>1?i("button",{staticClass:"full-width secondary",on:{click:function(e){t.cancelTicket()}}},[t._v(t._s(t.creatingTicket?"Cancel":"Delete Ticket"))]):t._e()]):i("div",{staticClass:"sidebar-container ticket-selection",class:{"col-12":t.mobileView,"col-4":!t.mobileView}},[t._l(t.tickets,function(e,a){return i("div",{key:e.id,staticClass:"ticket-item",on:{click:function(e){t.editTicket(a)}}},[i("h2",[t._v(t._s(e.firstName+" "+e.lastName))]),t._v("\n        "+t._s(e.ticket)+" · "+t._s(e.meal)+"\n      ")])}),t._v(" "),i("button",{staticClass:"full-width extra-margin-top secondary",on:{click:function(e){t.addTicket()}}},[t._v("Add Another Ticket")]),t._v(" "),t.tickets.length>0?i("button",{staticClass:"full-width",on:{click:function(e){t.goToPayment()}}},[t._v("Continue to Payment")]):t._e()],2)],1)])},staticRenderFns:[]};var b=i("VU/8")(C,w,!1,function(t){i("l3wK")},"data-v-2db4e048",null).exports;a.a.use(o.a);var x=new o.a({routes:[{path:"/",name:"ComponentsPage",component:p},{path:"/checkout",name:"CheckoutPage",component:b}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:x,render:function(t){return t(s)}})},Uila:function(t,e){},l3wK:function(t,e){},tii0:function(t,e){},wc2V:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.19fa89f8c8655fc37b6f.js.map