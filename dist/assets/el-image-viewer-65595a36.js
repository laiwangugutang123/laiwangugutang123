import{aR as B,aS as be,ac as he,I as de,J as le,aT as fe,aG as ue,k as K,aU as ce,aV as ke,aW as Ie,N as ve,O as me,aX as _e,x as b,aY as ze,aZ as Le,U as h,R as oe,S as pe,ad as ge,o as g,a1 as re,b as u,w as I,a as p,a2 as c,Z as a,a3 as ie,a4 as Ce,a6 as _,h as N,a_ as Ee,c as O,F as J,aw as Se,ax as Oe,a$ as xe,b0 as Ne,a5 as Te,b1 as Re,b2 as $e,ae as Ae,ag as Ve,au as Be,e as q,ak as Me,b3 as Ye,a9 as we,b4 as M,aa as V,b5 as Xe,al as ye,ap as Fe,b6 as De,t as He,a7 as Pe,b7 as We,aF as Ze,b8 as je,b9 as Ue}from"./index-0b0ebf12.js";const Ge=(r,d)=>{if(!B||!r||!d)return!1;const l=r.getBoundingClientRect();let n;return d instanceof Element?n=d.getBoundingClientRect():n={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<n.bottom&&l.bottom>n.top&&l.right>n.left&&l.left<n.right};var qe="Expected a function";function se(r,d,l){var n=!0,w=!0;if(typeof r!="function")throw new TypeError(qe);return be(l)&&(n="leading"in l?!!l.leading:n,w="trailing"in l?!!l.trailing:w),he(r,d,{leading:n,maxWait:d,trailing:w})}const Je=de({urlList:{type:le(Array),default:()=>fe([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Ke={close:()=>!0,switch:r=>ue(r)},Qe=["src"],ea=K({name:"ElImageViewer"}),aa=K({...ea,props:Je,emits:Ke,setup(r,{expose:d,emit:l}){const n=r,w={CONTAIN:{name:"contain",icon:ce(ke)},ORIGINAL:{name:"original",icon:ce(Ie)}},{t:z}=ve(),o=me("image-viewer"),{nextZIndex:Q}=_e(),T=b(),x=b([]),L=ze(),k=b(!0),f=b(n.initialIndex),v=Le(w.CONTAIN),i=b({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=h(()=>{const{urlList:e}=n;return e.length<=1}),R=h(()=>f.value===0),W=h(()=>f.value===n.urlList.length-1),ee=h(()=>n.urlList[f.value]),X=h(()=>{const{scale:e,deg:t,offsetX:s,offsetY:m,enableTransition:E}=i.value;let y=s/e,S=m/e;switch(t%360){case 90:case-270:[y,S]=[S,-y];break;case 180:case-180:[y,S]=[-y,-S];break;case 270:case-90:[y,S]=[-S,y];break}const A={transform:`scale(${e}) rotate(${t}deg) translate(${y}px, ${S}px)`,transition:E?"transform .3s":""};return v.value.name===w.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A}),ae=h(()=>ue(n.zIndex)?n.zIndex:Q());function $(){te(),l("close")}function F(){const e=se(s=>{switch(s.code){case V.esc:n.closeOnPressEscape&&$();break;case V.space:H();break;case V.left:U();break;case V.up:C("zoomIn");break;case V.right:G();break;case V.down:C("zoomOut");break}}),t=se(s=>{const m=s.deltaY||s.deltaX;C(m<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});L.run(()=>{M(document,"keydown",e),M(document,"wheel",t)})}function te(){L.stop()}function ne(){k.value=!1}function Z(e){k.value=!1,e.target.alt=z("el.image.error")}function j(e){if(k.value||e.button!==0||!T.value)return;i.value.enableTransition=!1;const{offsetX:t,offsetY:s}=i.value,m=e.pageX,E=e.pageY,y=se(A=>{i.value={...i.value,offsetX:t+A.pageX-m,offsetY:s+A.pageY-E}}),S=M(document,"mousemove",y);M(document,"mouseup",()=>{S()}),e.preventDefault()}function D(){i.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function H(){if(k.value)return;const e=Xe(w),t=Object.values(w),s=v.value.name,E=(t.findIndex(y=>y.name===s)+1)%e.length;v.value=w[e[E]],D()}function P(e){const t=n.urlList.length;f.value=(e+t)%t}function U(){R.value&&!n.infinite||P(f.value-1)}function G(){W.value&&!n.infinite||P(f.value+1)}function C(e,t={}){if(k.value)return;const{zoomRate:s,rotateDeg:m,enableTransition:E}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...t};switch(e){case"zoomOut":i.value.scale>.2&&(i.value.scale=Number.parseFloat((i.value.scale/s).toFixed(3)));break;case"zoomIn":i.value.scale<7&&(i.value.scale=Number.parseFloat((i.value.scale*s).toFixed(3)));break;case"clockwise":i.value.deg+=m;break;case"anticlockwise":i.value.deg-=m;break}i.value.enableTransition=E}return oe(ee,()=>{pe(()=>{const e=x.value[0];e!=null&&e.complete||(k.value=!0)})}),oe(f,e=>{D(),l("switch",e)}),ge(()=>{var e,t;F(),(t=(e=T.value)==null?void 0:e.focus)==null||t.call(e)}),d({setActiveItem:P}),(e,t)=>(g(),re(Ye,{to:"body",disabled:!e.teleported},[u(Me,{name:"viewer-fade",appear:""},{default:I(()=>[p("div",{ref_key:"wrapper",ref:T,tabindex:-1,class:c(a(o).e("wrapper")),style:ie({zIndex:a(ae)})},[p("div",{class:c(a(o).e("mask")),onClick:t[0]||(t[0]=Ce(s=>e.hideOnClickModal&&$(),["self"]))},null,2),_(" CLOSE "),p("span",{class:c([a(o).e("btn"),a(o).e("close")]),onClick:$},[u(a(N),null,{default:I(()=>[u(a(Ee))]),_:1})],2),_(" ARROW "),a(Y)?_("v-if",!0):(g(),O(J,{key:0},[p("span",{class:c([a(o).e("btn"),a(o).e("prev"),a(o).is("disabled",!e.infinite&&a(R))]),onClick:U},[u(a(N),null,{default:I(()=>[u(a(Se))]),_:1})],2),p("span",{class:c([a(o).e("btn"),a(o).e("next"),a(o).is("disabled",!e.infinite&&a(W))]),onClick:G},[u(a(N),null,{default:I(()=>[u(a(Oe))]),_:1})],2)],64)),_(" ACTIONS "),p("div",{class:c([a(o).e("btn"),a(o).e("actions")])},[p("div",{class:c(a(o).e("actions__inner"))},[u(a(N),{onClick:t[1]||(t[1]=s=>C("zoomOut"))},{default:I(()=>[u(a(xe))]),_:1}),u(a(N),{onClick:t[2]||(t[2]=s=>C("zoomIn"))},{default:I(()=>[u(a(Ne))]),_:1}),p("i",{class:c(a(o).e("actions__divider"))},null,2),u(a(N),{onClick:H},{default:I(()=>[(g(),re(Te(a(v).icon)))]),_:1}),p("i",{class:c(a(o).e("actions__divider"))},null,2),u(a(N),{onClick:t[3]||(t[3]=s=>C("anticlockwise"))},{default:I(()=>[u(a(Re))]),_:1}),u(a(N),{onClick:t[4]||(t[4]=s=>C("clockwise"))},{default:I(()=>[u(a($e))]),_:1})],2)],2),_(" CANVAS "),p("div",{class:c(a(o).e("canvas"))},[(g(!0),O(J,null,Ae(e.urlList,(s,m)=>Ve((g(),O("img",{ref_for:!0,ref:E=>x.value[m]=E,key:s,src:s,style:ie(a(X)),class:c(a(o).e("img")),onLoad:ne,onError:Z,onMousedown:j},null,46,Qe)),[[Be,m===f.value]])),128))],2),q(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var ta=we(aa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const na=ye(ta),sa=de({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:le([String,Object])},previewSrcList:{type:le(Array),default:()=>fe([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),la={load:r=>r instanceof Event,error:r=>r instanceof Event,switch:r=>ue(r),close:()=>!0,show:()=>!0},oa=["src","loading"],ra={key:0},ia=K({name:"ElImage",inheritAttrs:!1}),ua=K({...ia,props:sa,emits:la,setup(r,{emit:d}){const l=r;let n="";const{t:w}=ve(),z=me("image"),o=Fe(),Q=De(),T=b(),x=b(!1),L=b(!0),k=b(!1),f=b(),v=b(),i=B&&"loading"in HTMLImageElement.prototype;let Y,R;const W=h(()=>o.style),ee=h(()=>{const{fit:e}=l;return B&&e?{objectFit:e}:{}}),X=h(()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0}),ae=h(()=>{const{previewSrcList:e,initialIndex:t}=l;let s=t;return t>e.length-1&&(s=0),s}),$=h(()=>l.loading==="eager"?!1:!i&&l.loading==="lazy"||l.lazy),F=()=>{B&&(L.value=!0,x.value=!1,T.value=l.src)};function te(e){L.value=!1,x.value=!1,d("load",e)}function ne(e){L.value=!1,x.value=!0,d("error",e)}function Z(){Ge(f.value,v.value)&&(F(),H())}const j=Ue(Z,200,!0);async function D(){var e;if(!B)return;await pe();const{scrollContainer:t}=l;We(t)?v.value=t:Ze(t)&&t!==""?v.value=(e=document.querySelector(t))!=null?e:void 0:f.value&&(v.value=je(f.value)),v.value&&(Y=M(v,"scroll",j),setTimeout(()=>Z(),100))}function H(){!B||!v.value||!j||(Y==null||Y(),v.value=void 0)}function P(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function U(){X.value&&(R=M("wheel",P,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",k.value=!0,d("show"))}function G(){R==null||R(),document.body.style.overflow=n,k.value=!1,d("close")}function C(e){d("switch",e)}return oe(()=>l.src,()=>{$.value?(L.value=!0,x.value=!1,H(),D()):F()}),ge(()=>{$.value?D():F()}),(e,t)=>(g(),O("div",{ref_key:"container",ref:f,class:c([a(z).b(),e.$attrs.class]),style:ie(a(W))},[x.value?q(e.$slots,"error",{key:0},()=>[p("div",{class:c(a(z).e("error"))},He(a(w)("el.image.error")),3)]):(g(),O(J,{key:1},[T.value!==void 0?(g(),O("img",Pe({key:0},a(Q),{src:T.value,loading:e.loading,style:a(ee),class:[a(z).e("inner"),a(X)&&a(z).e("preview"),L.value&&a(z).is("loading")],onClick:U,onLoad:te,onError:ne}),null,16,oa)):_("v-if",!0),L.value?(g(),O("div",{key:1,class:c(a(z).e("wrapper"))},[q(e.$slots,"placeholder",{},()=>[p("div",{class:c(a(z).e("placeholder"))},null,2)])],2)):_("v-if",!0)],64)),a(X)?(g(),O(J,{key:2},[k.value?(g(),re(a(na),{key:0,"z-index":e.zIndex,"initial-index":a(ae),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:G,onSwitch:C},{default:I(()=>[e.$slots.viewer?(g(),O("div",ra,[q(e.$slots,"viewer")])):_("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):_("v-if",!0)],64)):_("v-if",!0)],6))}});var ca=we(ua,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const fa=ye(ca);export{fa as E};
