(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PopupEmoji"],{2042:function(t,o,e){"use strict";var i=e("c4db"),n=e.n(i);n.a},"645e":function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"popup-emoji"},[e("div",{ref:"parent",on:{click:function(o){t.show=!0}}},[t._t("default")],2),e("UtilPopup",{attrs:{show:t.show,parent:t.$refs.parent,"align-y":"top"},on:{"update:show":function(o){t.show=o}}},[e("div",{staticClass:"popup-emoji__block",on:{mousedown:function(t){t.preventDefault()}}},[e("UtilScrollbar",{ref:"scrollbar",attrs:{"max-height":200},on:{scroll:t.throttledLoadEmoji}},[e("div",{staticClass:"popup-emoji__list",class:{"popup-emoji__list_loading":t.emoji[0].skeleton}},[t._l(t.loadedEmoji,(function(o){return[e("div",{staticClass:"popup-emoji__title"},[e("BaseLabel",{attrs:{text:o.category}})],1),t._l(o.list,(function(o){return e("div",{staticClass:"popup-emoji__symbol",on:{click:function(o){return t.$emit("selectEmoji",o)}}},[t._v(" "+t._s(o)+" ")])}))]}))],2)])],1)])],1)},n=[],s=(e("fb6a"),e("d3b7"),e("1626")),l=e("6671"),a={name:"PopupEmoji",components:{UtilScrollbar:l["a"],UtilPopup:s["a"]},data:function(){return{show:!1,loaded:1,emoji:[{skeleton:!0,list:Array(50)}]}},computed:{loadedEmoji:function(){return this.emoji.slice(0,this.loaded)}},watch:{show:function(){var t=this;this.emoji[0].skeleton&&e.e("emoji").then(e.bind(null,"bcfa")).then((function(o){t.emoji=o.default}))}},created:function(){this.throttledLoadEmoji=this.$_.throttle(this.loadEmoji,10)},methods:{loadEmoji:function(t){var o=t.target.scrollHeight-t.target.scrollTop-t.target.clientHeight;o<100&&this.loaded<this.emoji.length&&this.loaded++}}},c=a,r=(e("2042"),e("2877")),u=Object(r["a"])(c,i,n,!1,null,"5f3b4d26",null);o["default"]=u.exports},c4db:function(t,o,e){}}]);
//# sourceMappingURL=PopupEmoji.d025a244.js.map