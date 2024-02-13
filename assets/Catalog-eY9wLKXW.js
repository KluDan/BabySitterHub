import{u as l,r as n,a as b,q as j,l as f,o as p,b as y,j as s,C,d as h,s as I}from"./index-oZZP12v1.js";const L=l.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,N=()=>{const[g,c]=n.useState([]),[d,u]=n.useState(null),[m,k]=n.useState(!1);n.useEffect(()=>{const e=b(h,"/nannies"),a=j(e,p(),f(3)),x=y(a,r=>{const t=r.val();if(t!==null){const i=Object.values(t);c(i);const o=parseInt(Object.keys(t)[Object.keys(t).length-1]);u(o)}});return()=>{x()}},[]);const O=()=>{if(!d)return;const e=b(h,"/nannies"),a=j(e,p(),I(d.toString()),f(3));return y(a,r=>{const t=r.val();if(t!==null){const i=Object.values(t);c(v=>[...v,...i]);const o=parseInt(Object.keys(t)[Object.keys(t).length-1]);u(o),Object.keys(t).length<3&&k(!0)}})};return s.jsxs("div",{children:[s.jsx(L,{children:g.map(e=>s.jsx(C,{nanny:e},e.id))}),!m&&s.jsx("button",{onClick:O,children:"Load More"})]})},S=l.section`
  max-width: 1184px;
  margin: 64px auto;
`,A=l.div`
  width: 60px;
  height: 60px;
  background-color: red;
  margin-bottom: 32px;
`,E=()=>s.jsxs(S,{children:[s.jsx(A,{children:"Filter"}),s.jsx(N,{})]});export{E as Catalog};
