import{_ as p,k as f,x as _,y as g,o as F,c as E,a as i,b as o,w as l,z as w,v as b,q as u,s as h,u as y,E as k}from"./index-ee16fe4a.js";import{E as v}from"./el-image-viewer-3a6382e0.js";const V=f({setup(){return{src:_("../../src/assets/shop.jpg")}},data(){return{n:30,userForm:{email:"",password:""},rules:{email:[{required:!0,message:"请输入正确的电子邮箱",trigger:"blur"},{type:"email",message:"电子邮箱格式错误",trigger:"blur"}],password:[{required:!0,message:"请输入正确的用户密码",trigger:"blur"},{min:8,message:"密码长度不得小于8个字符",trigger:"blur"}]}}},mounted(){},methods:{...g(w,["setToken","fillUserinfo"]),btnLogin(){const e=this,s=document.getElementById("email").value,r=document.getElementById("pwd").value;(s===""||r==="")&&(console.log("false1"),alert("用户名或密码为空！")),s==="6118888@qq.com"&&r==="asdf1234"?e.$router.push("/home/brand"):(console.log("false"),alert("用户名或密码错误！"))},resetForm(){this.$refs.ruleFormRef.resetFields()}}}),B={class:"login"},C={class:"login-form"},I={class:"login-form-logo"};function $(e,s,r,q,U,L){const d=v,n=h,t=y,m=k,c=b;return F(),E("div",B,[i("div",C,[i("div",I,[o(d,{src:e.src,fit:"fill",lazy:!0},null,8,["src"])]),o(c,{ref:"ruleFormRef",model:e.userForm,"status-icon":"",rules:e.rules,class:"login-ruleForm"},{default:l(()=>[o(t,{prop:"email"},{default:l(()=>[o(n,{id:"email",modelValue:e.userForm.email,"onUpdate:modelValue":s[0]||(s[0]=a=>e.userForm.email=a),autocomplete:"off",placeholder:"请输入你的用户邮箱","suffix-icon":"Message"},null,8,["modelValue"])]),_:1}),o(t,{prop:"password"},{default:l(()=>[o(n,{id:"pwd",modelValue:e.userForm.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.userForm.password=a),type:"password",autocomplete:"off",placeholder:"请输入你的用户密码","suffix-icon":"Lock"},null,8,["modelValue"])]),_:1}),o(t,{class:"login-form-btns"},{default:l(()=>[o(m,{type:"primary",onClick:e.btnLogin},{default:l(()=>[u("用户登录")]),_:1},8,["onClick"]),o(m,{onClick:e.resetForm},{default:l(()=>[u("Reset")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])])}const z=p(V,[["render",$],["__scopeId","data-v-2505d1f6"]]);export{z as default};