import{j as m,_,k as w,o as E,c as k,a as h,b as t,w as l,F,l as d,E as v,m as y,n as A,q as r,i as P,s as z,u as $,v as q}from"./index-0b0ebf12.js";import{E as B}from"./el-pagination-8369fc6e.js";import{c as L}from"./cloneDeep-594a5d27.js";const U=e=>m.request({url:"api/adcate/page",method:"post",data:e}),W=e=>m.request({url:"api/adcate/delete",params:e}),D=e=>m.request({url:"api/adcate/add",method:"post",data:e}),I=e=>m.request({url:"api/adcate/edit",method:"post",data:e}),N=w({data(){return{adCates:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,adCate:{height:"",id:0,name:"",width:""},formLabelWidth:80}},mounted(){this.getAdCatesPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.adCate=L(e)},getAdCatesPage(e){U({current:e,size:2}).then(s=>{console.log(s);const u=s.data.page;this.adCates=u.records,this.page=u}).catch(s=>{console.log(s)})},currentchange(e){this.getAdCatesPage(e),this.page.current=e},del(e){console.log(e),W({id:e}).then(s=>{if(s.success)this.getAdCatesPage(this.page.current);else return console.log(s.msg),!1}).catch(s=>{})},toAdd(){this.dialogFormVisible=!0},save(){const e=this.adCate;e.id==0?D(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getAdCatesPage(this.page.current),d(a.msg);else return d(a.msg),!1}).catch(a=>{d("网络错误联系管理员")}):I(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getAdCatesPage(this.page.current),d(a.msg);else return d(a.msg),!1}).catch(a=>{d("网络错误联系管理员")})}}}),T={class:"adCates"},j={class:"adcate-tools"},M={class:"dialog-footer"};function G(e,a,s,u,H,J){const i=v,n=P,c=y,f=B,p=z,g=$,C=q,b=A;return E(),k(F,null,[h("div",T,[h("div",j,[t(i,{type:"warning",onClick:e.toAdd},{default:l(()=>[r("添加")]),_:1},8,["onClick"])]),t(c,{data:e.adCates,style:{width:"100%"}},{default:l(()=>[t(n,{fixed:"",prop:"id",label:"#",width:"50"}),t(n,{prop:"name",label:"广告类型"}),t(n,{prop:"width",label:"宽度",width:"120"}),t(n,{prop:"height",label:"高度",width:"120"}),t(n,{fixed:"right",label:"操作",width:"120"},{default:l(o=>[t(i,{link:"",type:"primary",size:"small",onClick:V=>e.toEdit(o.row)},{default:l(()=>[r("更新")]),_:2},1032,["onClick"]),t(i,{link:"",type:"primary",size:"small",onClick:V=>e.del(o.row.id)},{default:l(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(f,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),t(b,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[4]||(a[4]=o=>e.dialogFormVisible=o),title:"广告类型编辑"},{footer:l(()=>[h("span",M,[t(i,{onClick:a[3]||(a[3]=o=>e.dialogFormVisible=!1)},{default:l(()=>[r("Cancel")]),_:1}),t(i,{type:"primary",onClick:e.save},{default:l(()=>[r(" 保存 ")]),_:1},8,["onClick"])])]),default:l(()=>[t(C,{model:e.adCate},{default:l(()=>[t(g,{label:"广告类型","label-width":e.formLabelWidth},{default:l(()=>[t(p,{modelValue:e.adCate.name,"onUpdate:modelValue":a[0]||(a[0]=o=>e.adCate.name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(g,{label:"width","label-width":e.formLabelWidth},{default:l(()=>[t(p,{modelValue:e.adCate.width,"onUpdate:modelValue":a[1]||(a[1]=o=>e.adCate.width=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(g,{label:"height","label-width":e.formLabelWidth},{default:l(()=>[t(p,{modelValue:e.adCate.height,"onUpdate:modelValue":a[2]||(a[2]=o=>e.adCate.height=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const R=_(N,[["render",G]]);export{R as default};
