(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SettingsGoals","chunk-65b8a6a2"],{"0349":function(e,t,a){"use strict";var o=a("5e8d"),s=a.n(o);s.a},"10f4":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[0==e.devGoalsCount?[o("ElementPlaceholder",{attrs:{icon:a("d7ba")},scopedSlots:e._u([{key:"actions",fn:function(){return[o("BaseButton",{attrs:{label:"Создать цель"},on:{click:function(t){e.modalEditGoal=!0}}}),o("BaseButton",{attrs:{label:"Подробнее",type:"tertiary"}})]},proxy:!0}],null,!1,1630672382)},[e._v(" Цели — лучший способ показать сообществу новый этап в Вашем творчестве. Предложите пользователям перейти к нему вместе ")])]:[o("BaseHead",{attrs:{level:"3"},scopedSlots:e._u([{key:"description",fn:function(){return[e._v(" Цели — лучший способ показать сообществу новый этап в Вашем творчестве. Предложите пользователям перейти к нему вместе ")]},proxy:!0}])},[e._v(" Цели ")]),o("div",{staticClass:"goals"},[e._l(e.devGoalsCount,(function(t){return o("ElementCard",{staticClass:"goal",attrs:{size:"large",type:"shadow",title:"На певко",description:"Осталось 5 дней",dropdown:[{text:"Поделиться"},{text:"Редактировать"},{text:"Скрыть"},{text:"Удалить"}]}},[o("div",{staticClass:"goal__progress"},[o("BaseProgress",{attrs:{value:50,"label-start":e.$format.money(0),"label-finish":e.$format.money(1e4),"full-indicate":""}})],1)])})),o("ElementCard",{staticClass:"goal goal_new",attrs:{size:"large",type:"ghost"},on:{click:function(t){e.modalEditGoal=!0}}},[o("div",{staticClass:"goal__placeholder"},[o("div",{staticClass:"goal__placeholder-icon"},[o("svg",{staticClass:"svg-inline--fa fa-plus fa-w-12 fa-lg",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"plus",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"}},[o("path",{attrs:{fill:"currentColor",d:"M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}})])]),e._v(" Создать цель ")])])],2)],o("BaseModal",{attrs:{show:e.modalEditGoal,title:"Создать цель"},on:{"update:show":function(t){e.modalEditGoal=t}}},[o("BaseForm",[o("BaseRadio",{attrs:{label:"Тип цели",name:"type",options:[{text:"Хочу собрать определенную сумму",description:"Для достижения цели будет необходимо собрать сумму, которую Вы укажите",value:0,checked:!0},{text:"Хочу набрать спонсоров",description:"Для достижения цели будет необходимо набрать указанное количество спонсоров",value:1}]},on:{change:function(t){e.editGoalGoalType=1==t}}}),o("BaseFormField",{attrs:{label:"Название",maxlength:"50",name:"name",required:""},scopedSlots:e._u([{key:"message",fn:function(){return[e._v(" По названию цели пользователи будут понимать хотят ли они помочь ее достижению ")]},proxy:!0}])}),e.editGoalGoalType?[o("BaseFormField",{key:"editGoalGoalTypeSponsorsAmount",attrs:{type:"number",label:"Количество спонсоров",decimal:!0,max:1e4,name:"sponsors_amount",placeholder:"500",required:""},scopedSlots:e._u([{key:"message",fn:function(){return[e._v(" Укажите количество спонсоров, которое необходимо набрать для достижения цели ")]},proxy:!0}])})]:[o("BaseFormField",{key:"editGoalGoalTypeAmount",attrs:{type:"number",label:"Сумма",min:1,max:9999999,name:"amount",placeholder:"10 000",decimal:"",required:""},scopedSlots:e._u([{key:"uiEnd",fn:function(){return[e._v(" ₽ ")]},proxy:!0},{key:"message",fn:function(){return[e._v(" Укажите сумму, которую необходимо собрать для достижения цели ")]},proxy:!0}],null,!1,4202178414)})],o("BaseFormField",{attrs:{type:"textarea",label:"Описание цели",placeholder:e.goalTypeText.descriptionPlaceholder,name:"description",maxlength:500,emoji:!0,formatting:!0,required:""},scopedSlots:e._u([{key:"message",fn:function(){return[e._v(" Описание цели не менее важно, чем ее название. Используйте инструменты разметки текста, чтобы полностью передать Ваши мысли ")]},proxy:!0}])}),o("BaseFormRow",[o("BaseExpand",{attrs:{keeper:"Дополнительно"}},[o("BaseFormRow",[o("BaseRadio",{attrs:{label:e.goalTypeText.finishLabel,name:"finish",options:[{text:e.goalTypeText.finishType1.text,description:e.goalTypeText.finishType1.description,value:0,checked:!0},{text:e.goalTypeText.finishType2.text,description:e.goalTypeText.finishType2.description,value:1}]},on:{change:function(t){e.editGoalFinishDateField=1==t}}})],1),e.editGoalFinishDateField?o("BaseFormRow",[o("BaseFormField",{attrs:{type:"datetime",name:"finish_date",label:"Дата завершения",placeholder:"Выберите дату",min:e.$moment().subtract(1,"days"),required:""}})],1):e._e()],1)],1),o("BaseFormButton",{attrs:{label:"Сохранить"}})],2)],1)],2)},s=[],n=a("ab8e"),i=a("7011"),r={name:"SettingsGoals",components:{ElementCard:i["a"],ElementPlaceholder:n["default"]},data:function(){return{modalEditGoal:!1,editGoalFinishDateField:!1,editGoalGoalType:!1,devGoalsCount:5}},computed:{goalTypeText:function(){var e={0:{descriptionPlaceholder:"Например: когда я буду собирать 30 000 ₽ в месяц, то смогу уволиться с основной работы и полностью посвятить себя творчеству",finishLabel:"Завершение сборов",finishType1:{text:"Начинать заново в начале каждого месяца",description:"Собранная сумма сбросится, а сборы начнутся заново"},finishType2:{text:"Завершить сборы в указанную дату",description:"Если Вам необходимы единоразовые сборы, то Вы можете указать дату завершения сборов. После этого цель автоматически скроется"}},1:{descriptionPlaceholder:"Например: когда я буду набирать 100 спонсоров в месяц, то я буду выпускать больше видео",finishLabel:"Завершение набора",finishType1:{text:"Начинать заново в начале каждого месяца",description:"Набранное количество спонсоров сбросится, а набор начнется заново"},finishType2:{text:"Завершить набор в указанную дату",description:"Если Вам необходимо единоразово набрать определенное количество спонсоров, то Вы можете указать дату завершения набора. После этого цель автоматически скроется"}}};return e[+this.editGoalGoalType]}},watch:{modalEditGoal:function(){this.editGoalFinishDateField=!1,this.editGoalGoalType=!1}}},l=r,c=(a("beca"),a("2877")),d=Object(c["a"])(l,o,s,!1,null,"b9c71504",null);t["default"]=d.exports},"151c":function(e,t,a){},"5e8d":function(e,t,a){},"6eb9":function(e,t,a){"use strict";var o=function(e,t){var a=t._c;return a("div",{staticClass:"avatar",class:[t.data.class,t.data.staticClass,"avatar_size_"+t.props.size],style:{backgroundImage:"url("+t.props.src+")"}},[t.props.corner||t.$slots.default?a("div",{staticClass:"avatar__corner",class:"avatar__corner_color_"+t.props.cornerColor},[t._t("default"),t.props.corner?[t._v(" "+t._s(t.corner)+" ")]:t._e()],2):t._e()])},s=[],n={name:"ElementAvatar",props:{src:String,size:{type:String,default:"medium"},corner:String,cornerColor:{type:String,default:"green"}}},i=n,r=(a("91a6"),a("2877")),l=Object(r["a"])(i,o,s,!0,null,"154d9d73",null);t["a"]=l.exports},7011:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(e.routerLink?"routerLink":"div",e._g(e._b({tag:"component",staticClass:"card",class:["card_type_"+e.type,"card_size_"+e.size]},"component",e.$attrs,!1),e.$listeners),[e.title||e.$slots.title?a("div",{staticClass:"card__header"},[e.icon||e.$slots.icon?a("div",{staticClass:"card__icon"},[e._t("icon",[a("ElementAvatar",{attrs:{src:e.icon}})])],2):e._e(),a("div",{staticClass:"card__info"},[a("div",{staticClass:"card__title"},[e._t("title",[e._v(" "+e._s(e.title)+" ")])],2),e.description?a("BaseMessage",[e._v(" "+e._s(e.description)+" ")]):e._e()],1),e.dropdown?a("div",{staticClass:"card__dropdown"},[a("BaseDropdown",{attrs:{options:e.dropdown}},[a("BaseButton",{attrs:{type:"tertiary",mode:"rounded"},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("font-awesome-icon",{attrs:{icon:"ellipsis-h"}})]},proxy:!0}],null,!1,966527544)})],1)],1):e._e()]):e._e(),e.$slots.default?a("div",{staticClass:"card__main"},[e._t("default")],2):e._e()])},s=[],n=a("6eb9"),i={name:"ElementCard",components:{ElementAvatar:n["a"]},props:{title:String,description:String,dropdown:Array,ghost:Boolean,icon:String,size:{type:String,default:"medium"},type:{type:String,default:"default"},routerLink:Boolean}},r=i,l=(a("ec3a"),a("2877")),c=Object(l["a"])(r,o,s,!1,null,"8dc49588",null);t["a"]=c.exports},"91a6":function(e,t,a){"use strict";var o=a("edc4"),s=a.n(o);s.a},ab8e:function(e,t,a){"use strict";a.r(t);var o=function(e,t){var a=t._c;return a("div",{staticClass:"placeholder"},[t.props.icon?a("div",{staticClass:"placeholder__icon",style:{backgroundImage:"url("+t.props.icon+")"}}):t._e(),a("div",{staticClass:"placeholder__text"},[t._t("default")],2),t.$slots.actions?a("div",{staticClass:"placeholder__actions"},[t._t("actions")],2):t._e()])},s=[],n={name:"ElementPlaceholder",props:{icon:String}},i=n,r=(a("0349"),a("2877")),l=Object(r["a"])(i,o,s,!0,null,"407a03f4",null);t["default"]=l.exports},afd4:function(e,t,a){},beca:function(e,t,a){"use strict";var o=a("afd4"),s=a.n(o);s.a},d7ba:function(e,t,a){e.exports=a.p+"img/direct-hit.c27a1b78.png"},ec3a:function(e,t,a){"use strict";var o=a("151c"),s=a.n(o);s.a},edc4:function(e,t,a){}}]);
//# sourceMappingURL=SettingsGoals.cfb03b73.js.map