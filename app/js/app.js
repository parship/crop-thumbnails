(function(t){function e(e){for(var i,n,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},o=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"39c2":function(t,e){CROP_THUMBNAILS_DO_CACHE_BREAK=function(t){for(var e=jQuery,a=e(t),i=0;i<a.length;i++){var s=e(a[i]),o=s.attr("src"),n=o.split("?");s.attr("src",n[0]+"?&cacheBreak="+(new Date).getTime())}}},"55d5":function(t,e,a){(function(t){t.CROP_THUMBNAILS_VUE={app:null,components:{}}}).call(this,a("c8ba"))},"56d7":function(t,e,a){"use strict";a.r(e);a("7046"),a("83a8"),a("55d5"),a("39c2"),a("bc36"),a("e9f5"),a("ab43");var i=function(){var t=this,e=t._self._c;return t.cropData&&t.lang?e("div",{staticClass:"cptEditorInner",class:{loading:t.loading,cropEditorActive:t.croppingApi}},[t.loading?e("div",{staticClass:"cptWaitingWindow"},[e("div",{staticClass:"msg"},[t._v(" "+t._s(t.lang.waiting)+" "),t._m(0)])]):t._e(),t.cropData.hiddenOnPostType?e("div",{staticClass:"cptWaitingWindow cptCropDisabledMsg"},[e("div",{staticClass:"msg"},[t._v(t._s(t.lang.cropDisabled))])]):t._e(),t.cropData.noPermission?e("div",{staticClass:"cptWaitingWindow cptNoPermissionMsg"},[e("div",{staticClass:"msg"},[t._v(t._s(t.lang.noPermission))])]):t._e(),t.cropData.hiddenOnPostType||t.cropData.noPermission?t._e():e("div",{staticClass:"mainWindow"},[e("div",{staticClass:"cptSelectionPane",class:{cptImagesAreSelected:t.selectedImageSizes.length>0}},[e("div",{staticClass:"cptSelectionPaneInner"},[t.sourceImageHasOrientation?e("message",[t._v(t._s(t.lang.message_image_orientation))]):t._e(),e("div",{staticClass:"cptToolbar"},[e("label",{staticClass:"cptSameRatioMode"},[t._v(" "+t._s(t.lang.label_same_ratio_mode)+" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.sameRatioMode,expression:"sameRatioMode"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.sameRatioMode=e.target.multiple?a:a[0]},t.updateSameRatioMode]}},t._l(t.sameRatioModeOptions,(function(a){return e("option",{key:a.value,domProps:{value:a.value}},[t._v(" "+t._s(a.text)+" ")])})),0)]),e("button",{staticClass:"button cptDeselectAll",attrs:{type:"button"},on:{click:function(e){return t.makeAllInactive()}}},[t._v(" "+t._s(t.lang.label_deselect_all)+" ")])]),t.filteredImageSizes.length>0?e("ul",{staticClass:"cptImageSizelist"},t._l(t.filteredImageSizes,(function(a){return e("li",{key:a.nameLabel,class:t.imageSizeClass(a),on:{click:function(e){return t.toggleActive(a)}}},[e("section",{staticClass:"cptImageSizeInner"},["group"!==t.sameRatioMode?[e("header",[t._v(t._s(a.nameLabel))]),t.isLowRes(a)?e("div",{staticClass:"lowResWarning",attrs:{title:t.lang.lowResWarning}},[e("span",[t._v("!")])]):t._e(),!t.isLowRes(a)&&a.notYetCropped?e("div",{staticClass:"notYetCropped",attrs:{title:t.lang.notYetCropped}},[e("span",{staticClass:"dashicons dashicons-image-crop"})]):t._e(),e("div",{staticClass:"dimensions"},[t._v(t._s(t.lang.dimensions)+" "+t._s(a.width)+" x "+t._s(a.height)+" "+t._s(t.lang.pixel))]),e("div",{staticClass:"ratio"},[t._v(t._s(t.lang.ratio)+" "+t._s(a.printRatio))])]:[e("header",[t._v(t._s(a.printRatio))]),t.isImageInGroupNotYetCropped(a.printRatio)?e("div",{staticClass:"notYetCropped",attrs:{title:t.lang.notYetCropped}},[e("span",{staticClass:"dashicons dashicons-image-crop"})]):t._e()],e("loadingcontainer",{attrs:{image:a.url+"?cacheBreak="+a.cacheBreak}},[e("div",{staticClass:"cptImageBgContainer",style:{"background-image":"url("+a.url+"?cacheBreak="+a.cacheBreak+")"}})])],2)])})),0):e("div",{staticClass:"cptImageSizelist"},[e("div",{staticClass:"noImageSizesAvailable"},[t._v(" "+t._s(t.lang.infoNoImageSizesAvailable)+" ")])])],1)]),e("div",{staticClass:"cptCropPane"},[e("div",{staticClass:"info"},[e("h3",[t._v(t._s(t.lang.rawImage))]),e("div",{staticClass:"dimensions"},[t._v(t._s(t.lang.dimensions)+" "+t._s(t.cropData.sourceImage.full.width)+" x "+t._s(t.cropData.sourceImage.full.height)+" "+t._s(t.lang.pixel)+" ")]),e("div",{staticClass:"ratio"},[t._v(t._s(t.lang.ratio)+" "+t._s(t.cropData.sourceImage.full.printRatio))])]),e("button",{staticClass:"button cptGenerate",class:{"button-primary":t.croppingApi},attrs:{type:"button",disabled:t.isCropButtonDisabled()},on:{click:function(e){return t.cropThumbnails()}}},[t._v(t._s(t.lang.label_crop)+" ")]),e("div",{staticClass:"cropContainer"},[e("img",{ref:"cptCroppingImage",staticClass:"cptCroppingImage",attrs:{src:t.cropImage.url}})]),t.selectedImageSizes.length>0?e("div",{staticClass:"selectionInfo"},[e("h4",[t._v(t._s(t.lang.headline_selected_image_sizes))]),e("ul",t._l(t.selectedImageSizes,(function(a){return e("li",{key:a.nameLabel},[e("div",[e("span",{staticClass:"name"},[t._v(t._s(a.nameLabel))]),t._v(" "),e("span",{staticClass:"dimensions"},[t._v("("+t._s(t.lang.dimensions)+" "+t._s(a.width)+" x "+t._s(a.height)+" "+t._s(t.lang.pixel)+")")])]),t.isLowRes(a)?e("div",{staticClass:"lowResWarning"},[e("span",{staticClass:"icon"},[t._v("!")]),e("span",{staticClass:"text"},[t._v(t._s(t.lang.lowResWarning))])]):t._e(),a.notYetCropped?e("div",{staticClass:"notYetCropped"},[e("span",{staticClass:"icon dashicons dashicons-image-crop"}),e("span",{staticClass:"text"},[t._v(t._s(t.lang.notYetCropped))])]):t._e()])})),0),e("hr")]):t._e(),t.loading||null===t.croppingApi?t._e():e("div",[e("div",[e("label",[t._v("Oben Links: "),e("input",{style:{maxWidth:"100px"},attrs:{name:"x",type:"number"},domProps:{value:Math.round(t.croppingApi.tellSelect().x)},on:{blur:t.setValue,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setValue.apply(null,arguments)}}})]),e("input",{style:{maxWidth:"100px"},attrs:{name:"y",type:"number"},domProps:{value:Math.round(t.croppingApi.tellSelect().y)},on:{blur:t.setValue,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setValue.apply(null,arguments)}}})])]),e("div",{staticClass:"instructionInfo"},[e("h4",[t._v(t._s(t.lang.instructions_header))]),e("ul",{staticClass:"step-info"},[e("li",[t._v(t._s(t.lang.instructions_step_1))]),e("li",[t._v(t._s(t.lang.instructions_step_2))]),e("li",[t._v(t._s(t.lang.instructions_step_3))])])]),e("div",[t.cropData.options.debug_js?e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.showDebugClick("js")}}},[t._v("show JS-Debug ")]):t._e(),t.cropData.options.debug_data&&null!==t.dataDebug?e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.showDebugClick("data")}}},[t._v("show Data-Debug ")]):t._e(),"data"===t.showDebugType?e("pre",[t._v(t._s(t.dataDebug))]):t._e(),"js"===t.showDebugType?e("pre",[e("br"),t._v("cropImage:"+t._s(t.cropImage)),e("br"),t._v("cropData:"+t._s(t.cropData))]):t._e()])])])]):t._e()},s=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"cptLoadingSpinner"})])}],o=(a("14d9"),a("910d"),a("7d54"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"loadingcontainer",class:t.status},[e("img",{staticStyle:{display:"none"},attrs:{src:t.image}}),t._t("default"),e("transition",{attrs:{name:"fade"}},["loading"===t.status?e("div",{staticClass:"loadingMsg"},[e("div",{staticClass:"cptLoadingSpinner"})]):t._e()])],2)}),n=[],r={props:{image:{required:!0,type:String}},data:()=>({status:null}),mounted(){this.setup()},watch:{image(){this.setup()}},methods:{setup(){this.setStart(),setTimeout(()=>{var t=imagesLoaded(this.$el);t.once("done",()=>{"failed"!==this.status&&this.setComplete()}).once("fail",()=>{this.setFailed()})},300)},setComplete(){this.status="completed"},setStart(){this.status="loading"},setFailed(){this.status="failed"}}},l=r,c=a("2877"),p=Object(c["a"])(l,o,n,!1,null,null,null),u=p.exports,d=function(){var t=this,e=t._self._c;return t.closed?t._e():e("div",{staticClass:"notice notice-warning is-dismissible cptMessage",attrs:{"aria-role":"alert"}},[e("p",[t._t("default")],2),e("button",{staticClass:"notice-dismiss",attrs:{type:"button","aria-label":"close"},on:{click:function(e){return t.close()}}})])},g=[],h={props:{},data:()=>({closed:!1}),methods:{close(){this.closed=!0}}},m=h,_=Object(c["a"])(m,d,g,!1,null,null,null),v=_.exports,f={components:{loadingcontainer:u,message:v},props:{imageId:{required:!0,type:Number},posttype:{required:!1,type:String,default:null}},data:()=>({cropData:null,loading:!1,croppingApi:null,currentCropSize:null,lang:null,nonce:null,showDebugType:null,dataDebug:null,sameRatioMode:null,sameRatioModeOptions:[]}),mounted(){this.loadCropData()},computed:{cropImage(){if(void 0!==this.cropData){var t=this.cropData.sourceImage.full,e=Math.round(10*t.ratio);return null!==this.cropData.sourceImage.large&&this.cropData.sourceImage.large.width>745&&e===Math.round(10*this.cropData.sourceImage.large.ratio)&&this.cropData.sourceImage.full.url!==this.cropData.sourceImage.large.url&&(t=this.cropData.sourceImage.large),null!==this.cropData.sourceImage.medium_large&&this.cropData.sourceImage.medium_large.width>745&&e===Math.round(10*this.cropData.sourceImage.medium_large.ratio)&&this.cropData.sourceImage.full.url!==this.cropData.sourceImage.medium_large.url&&(t=this.cropData.sourceImage.medium_large),t}},filteredImageSizes(){let t=this.cropData.imageSizes;if("group"===this.sameRatioMode){let e=[];t=t.filter(t=>{let a=e.indexOf(t.printRatio);return!(a>-1)&&(e.push(t.printRatio),!0)})}return t},selectedImageSizes(){return this.cropData.imageSizes.filter(t=>t.active)},sourceImageHasOrientation(){try{if("string"===typeof this.cropData.sourceImageMeta.orientation&&"1"!==this.cropData.sourceImageMeta.orientation&&"0"!==this.cropData.sourceImageMeta.orientation)return!0}catch(t){}return!1}},methods:{setValue({target:t}){let e=this.croppingApi.tellSelect();e[t.name]=parseInt(t.value),this.croppingApi.setSelect([e.x,e.y,e.x2,e.y2])},isImageInGroupNotYetCropped(t){return this.cropData.imageSizes.filter(e=>e.printRatio===t&&e.notYetCropped).length>0},setupRatioMode(){this.sameRatioModeOptions=[{value:null,text:this.lang.label_same_ratio_mode_nothing},{value:"select",text:this.lang.label_same_ratio_mode_select},{value:"group",text:this.lang.label_same_ratio_mode_group}];try{this.sameRatioMode=localStorage.getItem("cpt_same_ratio_mode")}catch(t){}},updateSameRatioMode(){try{localStorage.setItem("cpt_same_ratio_mode",this.sameRatioMode)}catch(t){}},imageSizeClass(t){var e={active:t.active};return e["cptImageSize-"+t.nameLabel]=!0,e},loadCropData(){let t=this;var e={action:"cpt_cropdata",imageId:this.imageId,posttype:this.posttype};t.loading=!0,jQuery.get(ajaxurl,e,e=>{t.makeAllInactive(e.imageSizes),t.addCacheBreak(e.imageSizes),t.cropData=e,t.lang=t.cropData.lang,t.nonce=t.cropData.nonce,delete t.cropData.nonce}).fail(e=>{t.cropData=e.responseJSON,t.lang=t.cropData.lang,t.nonce=t.cropData.nonce,delete t.cropData.nonce,403===e.status&&(t.cropData.noPermission=!0)}).always(()=>{t.loading=!1,t.setupRatioMode(),t.cropData&&t.cropData.imageSizes&&(t.cropData.imageSizes=t.cropData.imageSizes.filter(t=>!t.hideByPostType),t.cropData.imageSizes.forEach(e=>{e.notYetCropped=e.url===t.cropData.sourceImage.full.url}))})},isLowRes(t){return!(!t.active||null===this.currentCropSize)&&(0===t.width&&this.currentCropSize.height<t.height||(0===t.height&&this.currentCropSize.width<t.width||(9999===t.height?this.currentCropSize.width<t.width:9999===t.width?this.currentCropSize.height<t.height:this.currentCropSize.width+1<t.width||this.currentCropSize.height+1<t.height)))},toggleActive(t){let e=!t.active;!1===t.active&&this.makeAllInactive(),"select"===this.sameRatioMode||"group"===this.sameRatioMode?this.cropData.imageSizes.forEach(a=>{a.printRatio===t.printRatio&&(a.active=e)}):t.active=e,this.selectedImageSizes.length>0?this.activateCropArea():this.deactivateCropArea()},makeAllInactive(t){void 0===t&&(t=this.cropData.imageSizes),t.forEach(t=>{t.active=!1,t.lowResWarning=!1}),this.deactivateCropArea()},addCacheBreak(t){void 0===t&&(t=this.cropData.imageSizes),t.forEach(t=>{t.cacheBreak=Date.now()})},updateCurrentCrop(){let t=null;if(null!==this.croppingApi){let e=this.croppingApi.tellSelect();t={width:Math.round(e.w),height:Math.round(e.h)}}this.currentCropSize=t},getPreselect(t,e,a){let i=0,s=0,o=t,n=e,r=t/e;return r<=a?(s=e/2-t/a/2,n=e-s):(i=t/2-e*a/2,o=t-i),[i,s,o,n]},activateCropArea(){let t=this;t.deactivateCropArea();let e={trueSize:[t.cropData.sourceImage.full.width,t.cropData.sourceImage.full.height],aspectRatio:0,setSelect:[],onSelect:t.updateCurrentCrop};t.selectedImageSizes.forEach(t=>{0===e.aspectRatio&&(e.aspectRatio=t.ratio),e.aspectRatio!==t.ratio&&console.info('Crop Thumbnails: print ratio is different from normal ratio on image size "'+t.name+'".')}),e.setSelect=this.getPreselect(t.cropData.sourceImage.full.width,t.cropData.sourceImage.full.height,e.aspectRatio),e.minSize=[828,600],t.cropData.options.debug_js&&console.info("Cropping options",e),jQuery(this.$refs.cptCroppingImage).Jcrop(e,(function(){t.croppingApi=this,t.updateCurrentCrop()}))},deactivateCropArea(){null!==this.croppingApi&&(this.croppingApi.destroy(),this.croppingApi=null,this.currentCropSize=null)},showDebugClick(t){this.showDebugType===t?this.showDebugType=null:this.showDebugType=t},isCropButtonDisabled(){let t=!1;return this.selectedImageSizes.forEach(e=>{this.isLowRes(e)&&(t=!0)}),null===this.croppingApi||t},cropThumbnails(){let t=this;function e(){let e=[];return t.selectedImageSizes.forEach(t=>{t.active&&e.push({name:t.name,width:t.width,height:t.height,ratio:t.ratio,crop:t.crop})}),e}if(!t.loading&&null!==t.croppingApi){t.loading=!0;const a={action:"cptSaveThumbnail",_ajax_nonce:t.nonce,cookie:encodeURIComponent(document.cookie),crop_thumbnails:JSON.stringify({selection:t.croppingApi.tellSelect(),sourceImageId:t.cropData.sourceImageId,activeImageSizes:e()})};jQuery.post(ajaxurl,a,null,"json").done(e=>{if(t.cropData.options.debug_data&&(t.dataDebug=e.debug,console.log("Save Function Debug",e.debug)),void 0===e.error)return void 0!==e.success?(void 0!==e.changedImageName&&t.selectedImageSizes.forEach((t,a)=>{void 0!==e.changedImageName[t.name]&&(t.url=e.changedImageName[t.name])}),void t.addCacheBreak(t.selectedImageSizes)):void 0;alert(e.error)}).fail(e=>{alert(t.lang.script_connection_error);let i={status:e.status,statusText:e.statusText,requestUrl:ajaxurl,requestParams:a};console.error("crop-thumbnails connection error",i)}).always(()=>{t.loading=!1})}}}},C=f,b=Object(c["a"])(C,i,s,!1,null,null,null),y=b.exports,D=a("a026");CROP_THUMBNAILS_VUE.modal=function(){var t=jQuery,e=this;function a(){t("#cpt_Modal .cpt_ModalClose, #cpt_Modal").unbind("click"),t("#cpt_Modal").remove(),t("body").removeClass("cpt_ModalIsOpen")}e.close=function(i){CROP_THUMBNAILS_VUE.app.$destroy(),CROP_THUMBNAILS_VUE.app=null,a(),t("body").trigger("cropThumbnailModalClosed"),document.removeEventListener("keydown",e.closeByEscKey,!0)},e.closeByBackground=function(t){t.target==document.getElementById("cpt_Modal")&&e.close(t)},e.closeByEscKey=function(t){t.keyCode&&27!==t.keyCode||(t.stopPropagation(),e.close(t))},e.open=function(a,i,s){var o=a,n="";n+='<div id="cpt_Modal" class="cpt_Modal">',n+='<div class="cpt_ModalDialog" role="dialog" aria-label="'+t("<div>").text(s).html()+'">',n+='<button type="button" class="cpt_ModalClose" aria-label="close">&times;</button>',n+='<div class="cpt_ModalHeader"><div class="cpt_ModalTitle">'+s+"</div></div>",n+='<div class="cpt_ModalContent" id="cpt_crop_editor">',n+='<cropeditor :image-id="'+o+'"',"string"===typeof i&&(n+=' posttype="'+i+'"'),n+="></cropeditor>",n+="</div>",n+="</div>",n+="</div>",t("body").prepend(n).addClass("cpt_ModalIsOpen"),t("#cpt_Modal .cpt_ModalClose").click(e.close),t("#cpt_Modal").on("touchstart mousedown",e.closeByBackground),document.addEventListener("keydown",e.closeByEscKey,!0),CROP_THUMBNAILS_VUE.app=new D["a"]({el:"#cpt_crop_editor",mounted:function(){console.log("cpt_crop_editor mounted")},components:{cropeditor:y}})}};var I=function(){var t=this,e=t._self._c;return t.settingsData?e("div",[e("div",{staticClass:"cptSettingsPostListDescription"},[t._v(t._s(t.settingsData.lang.choose_image_sizes))]),e("ul",{staticClass:"cptSettingsPostList"},t._l(t.settingsData.post_types,(function(a){return e("li",{key:a.name},[a?e("section",[e("header",[e("h3",[t._v(t._s(a.label))])]),e("ul",{staticClass:"cptImageSizes"},[t._l(t.settingsData.image_sizes,(function(i){return[i.crop?e("li",{key:i.id},[e("label",[e("input",{attrs:{type:"checkbox",name:"crop-post-thumbs[hide_size]["+a.name+"]["+i.id+"]"},domProps:{value:i.id,checked:t.isImageSizeHidden(a.name,i.id)}}),e("span",{staticClass:"name"},[t._v(t._s(i.name))]),i.name!==i.id?e("span",{staticClass:"defaultName"},[t._v("("+t._s(i.id)+")")]):t._e()])]):t._e()]}))],2),e("label",[e("input",{attrs:{id:"cpt_settings_post",type:"checkbox",name:"crop-post-thumbs[hide_post_type]["+a.name+"]",value:"1"},domProps:{checked:t.isButtonHiddenOnPostType(a.name)}}),t._v(" "+t._s(t.settingsData.lang.hide_on_post_type)+" ")])]):t._e()])})),0)]):t._e()},S=[],w={props:{settings:{required:!0}},components:{},data:()=>({settingsData:null}),mounted(){this.settingsData=JSON.parse(this.settings)},methods:{isButtonHiddenOnPostType(t){return this.settingsData.options&&this.settingsData.options.hide_post_type&&"1"===this.settingsData.options.hide_post_type[t]},isImageSizeHidden(t,e){return this.settingsData.options&&this.settingsData.options.hide_size&&this.settingsData.options.hide_size[t]&&"1"===this.settingsData.options.hide_size[t][e]}}},M=w,k=Object(c["a"])(M,I,S,!1,null,null,null),z=k.exports;jQuery((function(t){t("body.settings_page_page-cpt").length>0&&(CROP_THUMBNAILS_VUE.app=new D["a"]({el:"#cpt_settings_settingsscreen",components:{cptSettingsscreen:z}}))}))},7046:function(t,e,a){},"83a8":function(t,e){(function(){var t={}})()},bc36:function(t,e){jQuery((function(t){t(document).on("click",".cropThumbnailsLink",(function(e){e.preventDefault();var a=t(this).data("cropthumbnail"),i=t(this).attr("title"),s=null;void 0!==a.posttype&&(s=a.posttype);var o=new CROP_THUMBNAILS_VUE.modal;o.open(a.image_id,s,i)}))}))}});
//# sourceMappingURL=app.js.map