(function(e){function t(t){for(var n,s,o=t[0],c=t[1],l=t[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"overflow-hidden"},[a("NavBar",{on:{"print-deck":e.printDeck,"import-deck":e.importDeck}}),a("v-main",[a("Hero",{ref:"hero"})],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",color:"secondary"}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"TTH Logo",contain:"",src:a("cf05"),transition:"scale-transition",width:"40"}}),n("v-card-title",{staticClass:"d-none d-md-block",attrs:{"primary-title":""}},[e._v(" TTH - Deck Manager ")])],1),n("v-spacer"),n("input",{ref:"file",attrs:{id:"fileUpload",type:"file",hidden:"",accept:".txt"},on:{change:e.importDeck}}),n("v-btn",{attrs:{target:"_blank",text:""},on:{click:function(t){return e.$refs.file.click()}}},[n("span",[e._v("Import")]),n("v-icon",[e._v("mdi-arrow-up-bold-box-outline")])],1),n("v-btn",{attrs:{target:"_blank",text:""},on:{click:function(t){return e.printDeck()}}},[n("span",{staticClass:"mr-2"},[e._v("Export")]),n("v-icon",[e._v("mdi-arrow-down-bold-box-outline")])],1)],1)},o=[],c={methods:{printDeck:function(){this.$emit("print-deck")},importDeck:function(e){this.$emit("import-deck",e)}}},l=c,d=a("2877"),u=a("6544"),v=a.n(u),h=a("40dc"),m=a("8336"),p=a("99d9"),f=a("132d"),A=a("adda"),g=a("2fa4"),C=Object(d["a"])(l,s,o,!1,null,null,null),_=C.exports;v()(C,{VAppBar:h["a"],VBtn:m["a"],VCardTitle:p["c"],VIcon:f["a"],VImg:A["a"],VSpacer:g["a"]});var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"overflow-hidden",attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":"","fill-height":""}},[a("v-col",{attrs:{xs:"12",sm:"12",md:"6",lg:"6",cols:"12"}},[a("LeftPage",{attrs:{searchType:e.searchType},on:{"add-card":e.addCard,"add-side":e.addSide,"search-mode":e.searchMode}})],1),a("v-col",{attrs:{xs:"12",sm:"12",md:"6",lg:"6",cols:"12"}},[a("RightPage",{attrs:{deckList:e.deckList,deckCount:e.deckCount,sideList:e.sideList,sideCount:e.sideCount,deckName:e.deckName},on:{"add-card":e.addCard,"remove-card":e.removeCard,"add-side":e.addSide,"remove-side":e.removeSide,"change-deckname":e.changeDeckName}})],1)],1)],1)},y=[],Q=(a("159b"),a("a434"),a("b0c0"),a("ac1f"),a("1276"),a("d3b7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",{staticStyle:{"overflow-y":"hidden"}},[a("v-container",[a("v-btn",{staticClass:"mr-4",attrs:{small:"",color:"primary"},on:{click:function(t){return e.searchMode("exact")}}},[a("v-icon",{attrs:{dark:""}},[e._v("Exact")])],1),a("v-btn",{staticClass:"mr-4",attrs:{small:"",color:"primary"},on:{click:function(t){return e.searchMode("wide")}}},[a("v-icon",{attrs:{dark:""}},[e._v("Wide")])],1),a("v-btn",{staticClass:"mr-4",attrs:{small:"",color:"primary"},on:{click:function(t){return e.searchMode("third")}}},[a("v-icon",{attrs:{dark:""}},[e._v("...")])],1)],1),a("SpecificSearch",{directives:[{name:"show",rawName:"v-show",value:"exact"==e.searchType,expression:"searchType == 'exact'"}],on:{"name-search":e.nameSearch}}),a("SpecificResults",{directives:[{name:"show",rawName:"v-show",value:"exact"==e.searchType,expression:"searchType == 'exact'"}],attrs:{results:e.results},on:{"add-card":e.addCard,"add-side":e.addSide}}),a("GeneralSearch",{directives:[{name:"show",rawName:"v-show",value:"wide"==e.searchType,expression:"searchType == 'wide'"}],on:{"gen-search":e.genSearch}}),a("GeneralResults",{directives:[{name:"show",rawName:"v-show",value:"wide"==e.searchType,expression:"searchType == 'wide'"}],attrs:{results:e.results},on:{"add-card":e.addCard,"add-side":e.addSide}}),a("Error404",{directives:[{name:"show",rawName:"v-show",value:"third"==e.searchType,expression:"searchType == 'third'"}]})],1)],1)}),b=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-form",{on:{submit:function(t){return t.preventDefault(),e.handleSearch.apply(null,arguments)}}},[a("v-text-field",{attrs:{hint:"Try searching for 'Soulfire Grand Master'.",label:"Search for a specific card"},on:{"click:append":function(t){return e.$emit("name-search",this.target.nameField)},submit:e.handleSearch},model:{value:e.nameField,callback:function(t){e.nameField=t},expression:"nameField"}})],1),a("v-btn",{attrs:{color:"primary"},on:{click:e.handleSearch}},[e._v(" Search ")])],1)},w=[],S={name:"NameSearch",data:function(){return{nameField:""}},methods:{handleSearch:function(){this.$emit("name-search",this.nameField)}}},V=S,F=a("a523"),E=a("4bd4"),I=a("8654"),T=Object(d["a"])(V,k,w,!1,null,null,null),L=T.exports;v()(T,{VBtn:m["a"],VContainer:F["a"],VForm:E["a"],VTextField:I["a"]});var N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return 1==e.results.length?a("v-container",{staticStyle:{overflow:"hidden",width:"100%",right:"10px"}},[a("v-list",{staticStyle:{"overflow-y":"auto",width:"107%","overflow-x":"hidden"},attrs:{maxHeight:"66vh"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{xs:"12",sm:"4",md:"12",lg:"4"}},[e.results[0].image_uris?a("v-img",{staticStyle:{margin:"5px"},attrs:{src:e.results[0].image_uris.large,height:"250px","align-center":"",contain:""}}):e._e()],1),a("v-col",[a("v-card-text",[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(e.results[0].name)+" ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.results[0].mana_cost)+" ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.results[0].type_line)+" ")]),a("v-spacer"),a("v-list-item-subtitle",{staticClass:"text-wrap"},[e._v(" "+e._s(e.results[0].oracle_text)+" ")]),a("v-spacer"),e.results[0].type_line.includes("Creature")?a("v-list-item-subtitle",[e._v(e._s(e.results[0].power)+"/"+e._s(e.results[0].toughness))]):e._e(),e.results[0].type_line.includes("Planeswalker")?a("v-list-item-subtitle",[e._v(e._s(e.results[0].loyalty))]):e._e()],1)],1)],1),a("v-card-actions",{staticClass:"pa-4"},[a("v-btn",{attrs:{color:"secondary"},on:{click:function(t){return t.stopPropagation(),e.addCard(e.results[0])}}},[e._v("Add Card")]),a("v-btn",{attrs:{color:"secondary"},on:{click:function(t){return t.stopPropagation(),e.addSide(e.results[0])}}},[e._v("Add Side")])],1)],1)],1)],1)],1)],1):e._e()},O=[],B={name:"NameResult",props:["results"],data:function(){return{}},methods:{addCard:function(e){this.$emit("add-card",e)},addSide:function(e){this.$emit("add-side",e)}}},H=B,P=a("62ad"),D=a("8860"),R=a("da13"),j=a("5d23"),M=a("0fd9"),$=Object(d["a"])(H,N,O,!1,null,null,null),z=$.exports;v()($,{VBtn:m["a"],VCardActions:p["a"],VCardText:p["b"],VCol:P["a"],VContainer:F["a"],VImg:A["a"],VList:D["a"],VListItem:R["a"],VListItemContent:j["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VRow:M["a"],VSpacer:g["a"]});var G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-form",{on:{submit:function(t){return t.preventDefault(),e.handleSearch.apply(null,arguments)}}},[a("v-text-field",{attrs:{hint:"Try searching for soulfire",label:"Search for cards containing:"},on:{"click:append":function(t){return e.$emit("gen-search",this.target.nameField)},submit:e.handleSearch},model:{value:e.nameField,callback:function(t){e.nameField=t},expression:"nameField"}})],1),a("v-btn",{attrs:{color:"primary"},on:{click:e.handleSearch}},[e._v(" Search ")])],1)},Y=[],W={name:"GeneralSearch",data:function(){return{nameField:""}},methods:{handleSearch:function(){this.$emit("gen-search",this.nameField)}}},J=W,U=Object(d["a"])(J,G,Y,!1,null,null,null),X=U.exports;v()(U,{VBtn:m["a"],VContainer:F["a"],VForm:E["a"],VTextField:I["a"]});var q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.results.length>0?a("v-container",{staticStyle:{overflow:"hidden",width:"100%",right:"10px"}},[a("h2",[e._v(e._s(e.results.length)+" Card(s) Found")]),a("v-list",{staticStyle:{"overflow-y":"auto",width:"107%","overflow-x":"hidden"},attrs:{maxHeight:"72vh"}},e._l(e.results,(function(t){return a("v-card",{key:t.mtgo_id,staticClass:"mx-auto",attrs:{outlined:"",width:"90%","max-width":"640px"}},[a("v-row",[a("v-col",{staticClass:"hidden-xs-only",attrs:{sm:"4",md:"4"}},[t.image_uris?a("v-img",{staticStyle:{margin:"5px"},attrs:{src:t.image_uris.normal,height:"250px",width:"180px","align-center":"",contain:""}}):e._e()],1),a("v-col",{attrs:{sm:"8",md:"8"}},[a("v-card-text",[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(t.name)+" ")]),a("v-list-item-subtitle",[e._v(" "+e._s(t.mana_cost)+" ")]),a("v-list-item-subtitle",[e._v(" "+e._s(t.type_line)+" ")]),t.type_line.includes("Creature")?a("v-list-item-subtitle",[e._v(e._s(t.power)+"/"+e._s(t.toughness))]):e._e(),t.type_line.includes("Planeswalker")?a("v-list-item-subtitle",[e._v(e._s(t.loyalty))]):e._e()],1)],1),a("v-card-actions",{staticClass:"pa-4"},[a("v-btn",{attrs:{color:"secondary"},on:{click:function(a){return e.addCard(t)}}},[e._v(" Add Card ")]),a("v-btn",{attrs:{color:"secondary"},on:{click:function(a){return e.addSide(t)}}},[e._v(" Add Side ")])],1),a("v-expansion-panels",{staticClass:"hidden-sm-and-up",attrs:{width:"50%"}},[a("v-expansion-panel",[a("v-expansion-panel-header",[e._v(" image ")]),a("v-expansion-panel-content",[t.image_uris?a("v-img",{staticStyle:{margin:"5px"},attrs:{src:t.image_uris.normal,height:"250px",width:"180px","align-center":"",contain:""}}):e._e()],1)],1)],1),a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",[e._v(" Oracle Text ")]),a("v-expansion-panel-content",[e._v(" "+e._s(t.oracle_text)+" ")])],1)],1)],1)],1)],1)],1)})),1)],1):e._e()},K=[],Z={props:["results"],methods:{addCard:function(e){this.$emit("add-card",e)},addSide:function(e){this.$emit("add-side",e)}}},ee=Z,te=a("b0af"),ae=a("cd55"),ne=a("49e2"),re=a("c865"),ie=a("0393"),se=Object(d["a"])(ee,q,K,!1,null,null,null),oe=se.exports;v()(se,{VBtn:m["a"],VCard:te["a"],VCardActions:p["a"],VCardText:p["b"],VCol:P["a"],VContainer:F["a"],VExpansionPanel:ae["a"],VExpansionPanelContent:ne["a"],VExpansionPanelHeader:re["a"],VExpansionPanels:ie["a"],VImg:A["a"],VList:D["a"],VListItem:R["a"],VListItemContent:j["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VRow:M["a"]});var ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" Hey! Get outta here! ")])},le=[],de={},ue=de,ve=Object(d["a"])(ue,ce,le,!1,null,null,null),he=ve.exports,me={components:{SpecificSearch:L,SpecificResults:z,GeneralSearch:X,GeneralResults:oe,Error404:he},data:function(){return{results:[]}},methods:{genSearch:function(e){var t=this,a="https://api.scryfall.com/cards/search?q=";this.results=[],this.error=this.post=null,this.loading=!0;var n=this,r=a+e;fetch(r).then((function(e){if(200===e.status)return e.json();n.error="No results found"})).then((function(e){var a=e;t.results=new Array(a),t.results=t.results[0].data})).catch((function(e){console.error("Error:",e)}))},nameSearch:function(e){var t=this,a="https://api.scryfall.com/cards/named?fuzzy=";this.results=[],this.error=this.post=null,this.loading=!0;var n=this,r=a+e;fetch(r).then((function(e){if(200===e.status)return e.json();n.error="No results found"})).then((function(e){var a=e;t.results=new Array(a)})).catch((function(e){console.error("Error:",e)}))},addCard:function(e){this.$emit("add-card",e)},addSide:function(e){this.$emit("add-side",e)},searchMode:function(e){this.$emit("search-mode",e)}},props:["searchType"]},pe=me,fe=Object(d["a"])(pe,Q,b,!1,null,null,null),Ae=fe.exports;v()(fe,{VBtn:m["a"],VContainer:F["a"],VIcon:f["a"]});var ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticStyle:{overflow:"hidden",width:"99%"}},[a("v-card",{staticStyle:{left:"10px"}},[a("v-card-title",{attrs:{"primary-title":""}},[e._v(" "+e._s(e.deckName)+" "),a("v-spacer"),a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"secondary"},on:{click:function(t){e.isHidden=!e.isHidden}}},[a("v-icon",{attrs:{dark:""}},[e._v(" mdi-pencil ")])],1)],1),a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!e.isHidden,expression:"!isHidden"}]},[a("v-text-field",{attrs:{filled:"",label:"New Deckname"},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}}),a("v-btn",{attrs:{color:"secondary"},on:{click:function(t){return e.saveDeckName()}}},[e._v("Save")])],1)],1),a("DeckView",{attrs:{deckList:e.deckList,sideList:e.sideList,deckCount:e.deckCount,sideCount:e.sideCount},on:{"add-card":e.addCard,"remove-card":e.removeCard,"add-side":e.addSide,"remove-side":e.removeSide}})],1)},Ce=[],_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-list",{staticStyle:{padding:"10px","overflow-y":"auto",width:"108%","overflow-x":"hidden"},attrs:{maxHeight:"75vh"}},[a("v-card",{staticClass:"elevation-0 mx-auto",attrs:{width:"90%"}},[a("v-card-title",{staticClass:"justify-center"},[a("h2",[e._v(e._s(e.deckCount)+" Card(s)")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary"}},[e._v("Clear")])],1),e._l(e.cardTypes,(function(t){return a("v-expansion-panels",{key:t[0]},[t[1]>0?a("v-card",{attrs:{color:"secondary",width:"100%"}},[a("v-card-title",{staticClass:"justify-start"},[a("h3",[e._v("[ "+e._s(t[1])+" ] ~ "+e._s(t[0]))])])],1):e._e(),e._l(t[2],(function(t){return a("v-expansion-panel",{key:t[0].mtgo_id},[a("v-expansion-panel-header",[a("v-row",[a("v-col",{attrs:{xs:"6",sm:"4",md:"6",lg:"4"}},[a("v-card",{staticClass:"elevation-0 text-left"},[a("p",[e._v(e._s(t[1])+"x")]),a("v-btn",{attrs:{small:"",color:"secondary"},nativeOn:{click:function(a){return a.stopPropagation(),e.removeCard(t[0])}}},[a("v-icon",[e._v("mdi-minus")])],1),a("v-btn",{attrs:{small:"",color:"secondary"},nativeOn:{click:function(a){return a.stopPropagation(),e.addCard(t[0])}}},[a("v-icon",[e._v("mdi-plus")])],1),a("v-btn",{attrs:{outlined:"",small:"",color:"secondary"},nativeOn:{click:function(a){return a.stopPropagation(),e.moveToSide(t[0])}}},[e._v(" Side ")])],1)],1),a("v-col",{attrs:{xs:"6",sm:"4",md:"6",lg:"4"}},[a("v-card",{staticClass:"elevation-0 text-center"},[a("v-card-text",[e._v(" "+e._s(t[0].name)+" ")])],1)],1),a("v-col",{staticClass:"hidden-xs-only hidden-md-only",attrs:{cols:"4"}},[a("v-card",{staticClass:"elevation-0 text-right text-truncate"},[a("v-card-text",[e._v(" "+e._s(t[0].mana_cost)+" ")])],1)],1)],1)],1),a("v-expansion-panel-content",[a("v-row",[a("v-col",[t[0].image_uris?a("v-img",{staticStyle:{margin:"5px"},attrs:{src:t[0].image_uris.normal,height:"250px",width:"180px","align-center":"",contain:""}}):e._e()],1),a("v-col",[a("v-row",{staticStyle:{"padding-top":"10px"}},[a("h4",[e._v(e._s(t[0].name))])]),a("v-row",{staticStyle:{"padding-top":"10px"}},[a("h5",[e._v(e._s(t[0].oracle_text))])]),a("v-row",[t[0].type_line.includes("Creature")?a("v-list-item-subtitle",[e._v(e._s(t[0].power)+"/"+e._s(t[0].toughness))]):e._e(),t[0].type_line.includes("Planeswalker")?a("v-list-item-subtitle",[e._v(e._s(t[0].loyalty))]):e._e()],1)],1)],1)],1)],1)}))],2)}))],2),a("v-card",{staticClass:"elevation-0 mx-auto",attrs:{width:"90%"}},[a("v-card-title",{staticClass:"justify-center"},[a("h2",[e._v(e._s(e.sideCount)+" Sideboard")])]),a("v-expansion-panels",e._l(e.sideList,(function(t){return a("v-expansion-panel",{key:t[0].mtgo_id},[a("v-expansion-panel-header",[a("v-row",[a("v-col",{attrs:{xs:"6",sm:"4",md:"6",lg:"4"}},[a("v-card",{staticClass:"elevation-0 text-left"},[a("p",[e._v(e._s(t[1])+"x")]),a("v-btn",{attrs:{small:"",color:"secondary"},nativeOn:{click:function(a){return a.stopPropagation(),e.removeSide(t[0])}}},[a("v-icon",[e._v("mdi-minus")])],1),a("v-btn",{attrs:{small:"",color:"secondary"},nativeOn:{click:function(a){return a.stopPropagation(),e.addSide(t[0])}}},[a("v-icon",[e._v("mdi-plus")])],1),a("v-btn",{attrs:{outlined:"",small:"",color:"secondary"},nativeOn:{click:function(a){return a.stopPropagation(),e.moveToMain(t[0])}}},[e._v(" Main ")])],1)],1),a("v-col",{attrs:{xs:"6",sm:"4",md:"6",lg:"4"}},[a("v-card",{staticClass:"elevation-0 text-center"},[a("v-card-text",[e._v(" "+e._s(t[0].name)+" ")])],1)],1),a("v-col",{staticClass:"hidden-xs-only hidden-md-only",attrs:{cols:"4"}},[a("v-card",{staticClass:"elevation-0 text-right text-truncate"},[a("v-card-text",[e._v(" "+e._s(t[0].mana_cost)+" ")])],1)],1)],1)],1),a("v-expansion-panel-content",[a("v-row",[a("v-col",[t[0].image_uris?a("v-img",{staticStyle:{margin:"5px"},attrs:{src:t[0].image_uris.normal,height:"250px",width:"180px","align-center":"",contain:""}}):e._e()],1),a("v-col",[a("v-row",{staticStyle:{"padding-top":"10px"}},[a("h4",[e._v(e._s(t[0].name))])]),a("v-row",{staticStyle:{"padding-top":"10px"}},[a("h5",[e._v(e._s(t[0].oracle_text))])]),a("v-row",[t[0].type_line.includes("Creature")?a("v-list-item-subtitle",[e._v(" "+e._s(t[0].power)+"/"+e._s(t[0].toughness)+" ")]):e._e(),t[0].type_line.includes("Planeswalker")?a("v-list-item-subtitle",[e._v(e._s(t[0].loyalty))]):e._e()],1)],1)],1)],1)],1)})),1),e.sideCount>15?a("p",{staticStyle:{"word-break":"break-word"}},[e._v(" HEY! HEY! THATS TOO MANY SIDEBOARD CARDS ")]):e._e()],1)],1)],1)},xe=[],ye=(a("caad"),a("2532"),{name:"DeckView",props:["deckList","deckCount","sideList","sideCount"],methods:{removeCard:function(e){this.$emit("remove-card",e)},addCard:function(e){this.$emit("add-card",e)},removeSide:function(e){this.$emit("remove-side",e)},addSide:function(e){this.$emit("add-side",e)},moveToMain:function(e){this.$emit("remove-side",e),this.$emit("add-card",e)},moveToSide:function(e){this.$emit("remove-card",e),this.$emit("add-side",e)}},computed:{cardTypes:function(){var e=[],t=[],a=[],n=[],r=[],i=[],s=[],o=[],c=0,l=0,d=0,u=0,v=0,h=0,m=0;return this.deckList.forEach((function(e){var p=e[0].type_line,f=e[1];switch(!0){case p.includes("Creature"):t.push(e),c+=f;break;case p.includes("Artifact"):a.push(e),l+=f;break;case p.includes("Enchantment"):n.push(e),d+=f;break;case p.includes("Planeswalker"):r.push(e),u+=f;break;case p.includes("Instant"):i.push(e),v+=f;break;case p.includes("Sorcery"):s.push(e),h+=f;break;case p.includes("Land"):o.push(e),m+=f;break}})),e.push(["Creatures",c,t]),e.push(["Artifacts",l,a]),e.push(["Enchantments",d,n]),e.push(["Planeswalkers",u,r]),e.push(["Instants",v,i]),e.push(["Sorceries",h,s]),e.push(["Lands",m,o]),e}}}),Qe=ye,be=Object(d["a"])(Qe,_e,xe,!1,null,null,null),ke=be.exports;v()(be,{VBtn:m["a"],VCard:te["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:P["a"],VContainer:F["a"],VExpansionPanel:ae["a"],VExpansionPanelContent:ne["a"],VExpansionPanelHeader:re["a"],VExpansionPanels:ie["a"],VIcon:f["a"],VImg:A["a"],VList:D["a"],VListItemSubtitle:j["b"],VRow:M["a"],VSpacer:g["a"]});var we={name:"RightPage",components:{DeckView:ke},methods:{removeCard:function(e){this.$emit("remove-card",e)},addCard:function(e){this.$emit("add-card",e)},removeSide:function(e){this.$emit("remove-side",e)},addSide:function(e){this.$emit("add-side",e)},saveDeckName:function(){this.isHidden=!0,this.$emit("change-deckname",this.newName)}},data:function(){return{isHidden:!0,newName:""}},props:["deckList","deckCount","sideList","sideCount","deckName","editName"]},Se=we,Ve=(a("ba87"),Object(d["a"])(Se,ge,Ce,!1,null,"0cf4b7b6",null)),Fe=Ve.exports;v()(Ve,{VBtn:m["a"],VCard:te["a"],VCardText:p["b"],VCardTitle:p["c"],VContainer:F["a"],VIcon:f["a"],VSpacer:g["a"],VTextField:I["a"]});var Ee={name:"Hero",data:function(){return{uniqueCards:[],deckList:[],sideList:[],deckName:"MyDecklist",searchType:"",deckCount:0,sideCount:0}},components:{LeftPage:Ae,RightPage:Fe},methods:{addCard:function(e){var t=this;this.deckCount++;var a=!1;if(this.deckList.forEach((function(n,r){if(n[0]===e){var i=new Array(e,n[1]+1);t.deckList.splice(r,1,i),a=!0}})),!a){var n=new Array(e,1);this.deckList.push(n)}},removeCard:function(e){var t=this;this.deckCount--,this.deckList.forEach((function(a,n){if(a[0]===e){var r=a[1]-1;if(r>0){var i=new Array(e,r);t.deckList.splice(n,1,i)}else t.deckList.splice(n,1)}}))},addSide:function(e){var t=this;this.sideCount++;var a=!1;if(this.sideList.forEach((function(n,r){if(n[0]===e){var i=new Array(e,n[1]+1);t.sideList.splice(r,1,i),a=!0}})),!a){var n=new Array(e,1);this.sideList.push(n)}},removeSide:function(e){var t=this;this.sideCount--,this.sideList.forEach((function(a,n){if(a[0]===e){var r=a[1]-1;if(r>0){var i=new Array(e,r);t.sideList.splice(n,1,i)}else t.sideList.splice(n,1)}}))},searchMode:function(e){this.searchType=e},printDeck:function(){var e="";this.deckList.forEach((function(t){e=e+t[1]+" "+t[0].name+"\n"})),e+="\n",this.sideList.forEach((function(t){e=e+t[1]+" "+t[0].name+"\n"})),console.log(e);var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e));var a=function(){var e=/^[^\\/:*?"<>|]+$/,t=/^\./,a=/^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i;return function(n){return e.test(n)&&!t.test(n)&&!a.test(n)}}();if(console.log(a(this.deckName)),a(this.deckName)){var n=this.deckName+".txt";t.setAttribute("download",n),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}},importDeck:function(e){var t=this;this.deckList=[],this.sideList=[],this.deckCount=0,this.sideCount=0;var a=e.target.files[0],n=new FileReader;n.onload=function(e){return t.readLines(e.target.result)},n.readAsText(a)},readLines:function(e){for(var t=e.split("\n"),a=0,n=0;n<t.length;n++)t[n].length<=1&&(a=n,n=t.length);var r=t.splice(a);r=r.splice(1),r.pop(),this.importMainboard(t),this.importSideboard(r)},importMainboard:function(e){var t=this;e.forEach((function(e){var a=parseInt(e.substring(0,1)),n=e.substring(2,e.length);t.error=t.post=null,t.loading=!0;var r=t,i="https://api.scryfall.com/cards/named?fuzzy="+n;fetch(i).then((function(e){if(200===e.status)return e.json();r.error="No results found"})).then((function(e){for(var n=e,r=new Array(n),i=0;i<a;i++)t.addCard(r[0])})).catch((function(e){console.error("Error:",e)}))}))},importSideboard:function(e){var t=this;e.forEach((function(e){var a=parseInt(e.substring(0,1)),n=e.substring(2,e.length);t.error=t.post=null,t.loading=!0;var r=t,i="https://api.scryfall.com/cards/named?fuzzy="+n;fetch(i).then((function(e){if(200===e.status)return e.json();r.error="No results found"})).then((function(e){var n=e,r=new Array(n);console.log(r[0].name);for(var i=0;i<a;i++)t.addSide(r[0])})).catch((function(e){console.error("Error:",e)}))}))},changeDeckName:function(e){this.deckName=e}}},Ie=Ee,Te=Object(d["a"])(Ie,x,y,!1,null,null,null),Le=Te.exports;v()(Te,{VCol:P["a"],VContainer:F["a"],VRow:M["a"]});var Ne={name:"App",components:{NavBar:_,Hero:Le},data:function(){return{}},methods:{printDeck:function(){this.$refs.hero.printDeck()},importDeck:function(e){this.$refs.hero.importDeck(e)}}},Oe=Ne,Be=a("7496"),He=a("f6c4"),Pe=Object(d["a"])(Oe,r,i,!1,null,null,null),De=Pe.exports;v()(Pe,{VApp:Be["a"],VMain:He["a"]});var Re=a("f309");n["a"].use(Re["a"]);var je=new Re["a"]({theme:{dark:!0,themes:{dark:{primary:"#8767bf",accent:"#efcfd7",secondary:"#af9fe7",success:"#4CAF50",info:"#2196F3",warning:"#FB8C00",error:"#FF5252"},light:{primary:"#8767bf",accent:"#efcfd7",secondary:"#af9fe7",success:"#29B6F6",info:"#81D4FA",warning:"#FB8C00",error:"#FF5252"}}}});n["a"].config.productionTip=!1,new n["a"]({vuetify:je,render:function(e){return e(De)}}).$mount("#app")},"8fca":function(e,t,a){},ba87:function(e,t,a){"use strict";a("8fca")},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAbXSURBVHhe7dxdiFRlHMfx/8yZszM7+5qKpgkheqGQEtuVRV2YhIJEYQRBdhNERQkSFYUgQgQFknhRBJqQCEbRG4IFZkJQUKZkhRS+0IVelK7rvs9755k9KuXsT9E5Z3fPfD/Lw+4+e/GcefmuM8L+U7s2/FkzAA2lw88AGiAQQCAQQCAQQJj0TXo202F+Oht+ByRXqVqwQnkk/O6/Ggbi4th/YocdP3fIfI9IkFylSsFWLFhl65ZtbBhJw0A622bZ1oNr7dT5owSCRHOBLJ7TZ1tWH7DhYn+4e9Wkgbx56BE7dYFAkGz1QGb32eurPm8YCG/SAYFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAGFK/ia9VClOOmYF+L98W4+lU9H8Lr/e36THHoiLY8mce2zt0ueIBNeV93vs3e+ftUqtHEkk0y6QYnnM+hausU3377GR4sVwF2isJzfPnto3z2pWDQLxwt3mmZaB3H3HQ/bifTuDQAbCXaCxntxce/rjO4OvalMSCG/SAYFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAIFAAKFlAkml0rGtqdDoOiJbwUeraIlAsl7eiuVxK1eKka9ScE6b1x6eHI9spqM+AK3R9TR7uXPS6UwkQ9ymo8RPVmz3u+2Dn16yg3/stUwm3IxQuWK2fP5K2/zglzYcw2hV38vZsbNf2TuHn7GMH25GqBo8W7qy3bZt3ZH6rFw3EjRKTFaMWCbt2+kg9M5cRxB+b+SrJ9dtp/t/MS84Nw7u9rlfZLlspuH1NHt1Z3ttqDBog4Xz9UCSriVeYrknkXvVnEoFr54jXu4gd16cJs5rfD3NXo4XfGqFOJzWuJXATSIQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQJiSQNLBh5/OWiaG5SZDunmywM2IffSoG/W4dO5Ke/Sul228NBzuRqe9rdt2/bjJ/hn+K5Zph9VapT4i85MN/TYwPhTuRifvd9mHP79mn/22zdr9znA3OrVarT4y9v31J21WfoFVauXwJ9HozXXZY3tmXblfm+16o0djD8RxFzVeHg2/i14+eOLENQrUPYHcBMLhwkW75o6NgJt1mPM7zEv5VyYfRuny7RsrDVm5Gm0cjrtFndnbrpzbbNMykKRzD2bc4ojjsiTdvpYfXj0V3IMZ94pTo/OjXlOFQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQACBQCLgJg+WKuOxrUoMI0BbFaNHm2xihmzalszus1K1GO5Gx0tlrH/snF0YOWteOhPu4kYxmzdmbgp5yjz76Ml+Gxi7EO5Gp93vsr3HNtsXv2+PZbp70jCbdwrUrGpDhUv1OzyO5V5mIRoEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggEAggtEUitVq3Pr41rFcqj4cnxKNbn85auuY6olpse2SoSP3rUxeGl/fqIzmrwddSKlTF7YNETtn75qzZeHg53o+OlfPt7+Iy9dfhxy2bywU5q4gcRSaVSVg0iGS0NWjrlhbszV8vP5i1Xirawd6ltf/iIDRYGwt1oFctjscRxmYuko63HPXvDnehkvbx9c3K3vffD8xNnznAEEgQyv3uxvbHmWxsqRD9MOulcIN+d2We7j7zSEoHwJh0QCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQCAQQWiIQNw0wk26rT1hk3drKeH4iJireqOQPjquW7PauRfbCvTtttHQp3MXN8r2cHT37tX3669vW7neGuzNXy09WrNVq9WHLo6WhcAe3yvfa6hMW3b/MM13LB+K4SNBcSYjDYfRowD2YrOauVsH/YgECgQACgQACgQACgQACgQACgQACgQACgQACgQACgQACgQACgQACgQACgQACgQACgQACgQACgQACgQDCpFNNth5ca6fOJ2OqCTCZ+lSTOX22ZfWBGx/7k8102P4TO+z4uUMEgkRzgaxYsMrWLdtohfJIuHtVw0AcF4mfJg4kX6laaBiHM2kgAHiTDkgEAggEAggEAkzK7F81VlHkCDCn/wAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.70ace8ac.js.map