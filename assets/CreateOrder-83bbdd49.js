import{au as O,aC as L,ap as m,aD as P,av as x,I as S,P as B,aq as T}from"./index-895aba94.js";/* empty css              */import"./index-8c6623a3.js";/* empty css              */import{s as D}from"./SimpleHeader-f2f1910e.js";import{g as J,a as q}from"./address-4a6b7414.js";import{c as A,p as V}from"./order-abf85726.js";import{_ as $,u as E,a3 as F,r as R,Q as j,O as H,o as u,a as h,c,a2 as s,a9 as o,F as M,a1 as Q,b as U,a0 as _,a7 as I,a5 as z,a6 as G}from"./_plugin-vue_export-helper-730fb40d.js";import{B as K}from"./index-f6e9c29d.js";const W=i=>(z("data-v-961a46cf"),i=i(),G(),i),X={class:"create-order"},Y={class:"address-wrap"},Z={class:"address"},ss={class:"good"},as={class:"good-img"},ts=["src"],es={class:"good-desc"},os={class:"good-title"},rs={class:"good-btn"},ds={class:"price"},cs={class:"pay-wrap"},ns={class:"price"},is=W(()=>s("span",null,"商品金额",-1)),ls={style:{width:"90%",margin:"0 auto",padding:"50px 0"}},ps={__name:"CreateOrder",setup(i){const l=E(),f=F(),a=R({cartList:[],address:{},showPay:!1,orderNo:"",cartItemIds:[]});j(()=>{y()});const y=async()=>{O({message:"加载中...",forbidClick:!0});const{addressId:e,cartItemIds:t}=f.query,d=JSON.parse(t||L("cartItemIds"));m("cartItemIds",JSON.stringify(d));const{data:n}=await P({cartItemIds:d.join(",")}),{data:p}=e?await J(e):await q();if(!p){l.push({path:"/address"});return}a.cartList=n,a.address=p,x()},v=()=>{l.push({path:"/address",query:{cartItemIds:JSON.stringify(a.cartItemIds),from:"create-order"}})},w=()=>{m("cartItemIds","")},C=async()=>{const e={addressId:a.address.addressId,cartItemIds:a.cartList.map(d=>d.cartItemId)},{data:t}=await A(e);m("cartItemIds",""),a.orderNo=t,a.showPay=!0},N=()=>{l.push({path:"/order"})},g=async e=>{await V({orderNo:a.orderNo,payType:e}),T("支付成功"),setTimeout(()=>{l.push({path:"/order"})},2e3)},k=H(()=>{let e=0;return a.cartList.forEach(t=>{e+=t.goodsCount*t.sellingPrice}),e});return(e,t)=>{const d=S,n=K,p=B;return u(),h("div",X,[c(D,{name:"生成订单",onCallback:w}),s("div",Y,[s("div",{class:"name",onClick:v},[s("span",null,o(a.address.userName),1),s("span",null,o(a.address.userPhone),1)]),s("div",Z,o(a.address.provinceName)+" "+o(a.address.cityName)+" "+o(a.address.regionName)+" "+o(a.address.detailAddress),1),c(d,{class:"arrow",name:"arrow"})]),s("div",ss,[(u(!0),h(M,null,Q(a.cartList,(r,b)=>(u(),h("div",{class:"good-item",key:b},[s("div",as,[s("img",{src:e.$filters.prefix(r.goodsCoverImg),alt:""},null,8,ts)]),s("div",es,[s("div",os,[s("span",null,o(r.goodsName),1),s("span",null,"x"+o(r.goodsCount),1)]),s("div",rs,[s("div",ds,"¥"+o(r.sellingPrice),1)])])]))),128))]),s("div",cs,[s("div",ns,[is,s("span",null,"¥"+o(U(k)),1)]),c(n,{onClick:C,class:"pay-btn",color:"#1baeae",type:"primary",block:""},{default:_(()=>[I("生成订单")]),_:1})]),c(p,{closeable:"","close-on-click-overlay":!1,show:a.showPay,"onUpdate:show":t[2]||(t[2]=r=>a.showPay=r),position:"bottom",style:{height:"30%"},onClose:N},{default:_(()=>[s("div",ls,[c(n,{style:{marginBottom:"10px"},color:"#1989fa",block:"",onClick:t[0]||(t[0]=r=>g(1))},{default:_(()=>[I("支付宝支付")]),_:1}),c(n,{color:"#4fc08d",block:"",onClick:t[1]||(t[1]=r=>g(2))},{default:_(()=>[I("微信支付")]),_:1})])]),_:1},8,["show"])])}}},ws=$(ps,[["__scopeId","data-v-961a46cf"]]);export{ws as default};
