import{j as e,r,C as n,O as d,N as m,F as u}from"./index-CL5vkUFu.js";function h(){return e.jsxs("div",{className:" w-full flex flex-col items-center justify-center gap-3 my-[10%] ",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}),e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),e.jsx("h1",{className:"text-xl w-auto px-5",children:" Your cart is empty "}),e.jsx("p",{className:"w-auto text-center px-5",children:" Add products while you shop, so they'll be ready for checkout later."})]})}function p(){const{selectedProduct:l,setSelectedProduct:a}=r.useContext(n);function i(s){a(t=>[...t],s.quantity++)}function o(s){a(t=>[...t],s.quantity--)}console.log(l);function c(s){const t=l.filter(x=>x.id!==s.id);a(t)}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full my-[180px]  h-full ",children:[e.jsxs("div",{className:"hidden h-full sm:mx-[135px] my-8  py-3 sm:flex  sm:flex-row sm:h-[72px] w-auto justify-between items-center sm:p-4 shadow-[1px_1px_9px_0px_#e2e8f0] ",children:[e.jsx("span",{className:"text-base sm:w-[40%]",children:" Products"}),e.jsx("span",{className:"text-base sm:w-[10%]",children:" Price"}),e.jsx("span",{className:"text-base",children:" Quantity"}),e.jsx("span",{className:"text-base sm:w-[10%]",children:" Subtotal"})]}),l.map((s,t)=>e.jsxs("div",{className:"h-full sm:mx-[135px] m-8 py-3 flex flex-col lg:flex-row lg:h-[72px] w-auto justify-between items-center lg:p-4 shadow-[1px_1px_9px_0px_#e2e8f0]",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row sm:w-[40%] items-center h-full",children:[e.jsxs("div",{className:"flex flex-row ",children:[e.jsx("button",{type:"button",className:"  bg-red-500 rounded-full p-2 -mr-2 flex flex-row items-center justify-center w-7 h-7",onClick:()=>c(s),children:e.jsx("svg",{className:"h-3 w-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("img",{src:`http://127.0.0.1:5000${s.image}`,className:" w-auto h-[50px] rounded "})]}),e.jsx("span",{className:"h-auto",children:s.name})]}),e.jsxs("span",{className:"text-base sm:w-[10%]",children:[s.price," $"]}),e.jsxs("div",{className:"flex flex-row items-center w-auto border rounded",children:[e.jsxs("span",{className:"w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 ",children:[" ",s.quantity," "]}),e.jsxs("div",{className:"flex flex-col items-center justify-between",children:[e.jsx("button",{type:"button",id:"decrement-button","data-input-counter-decrement":"counter-input",className:"inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md",onClick:()=>i(s),disabled:s.quantity===s.inventory,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"})})}),e.jsx("button",{type:"button",id:"increment-button","data-input-counter-increment":"counter-input",className:"inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md",onClick:()=>o(s),disabled:s.quantity===1,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]})]}),e.jsxs("span",{className:"text-base sm:w-[10%]",children:[s.price*s.quantity," $"]})]},t)),e.jsxs("div",{className:"h-full sm:mx-[135px] flex flex-col gap-3 sm:flex-row sm:h-[72px] w-auto justify-between items-center p-8 sm:p-0",children:[e.jsx("button",{className:"w-full sm:w-[218px] h-auto sm:h-[56px] border rounded border-black p-5  break-all ",children:"Return To Shop"}),e.jsx("button",{className:"w-full sm:w-[218px] h-auto sm:h-[56px] border rounded border-black p-5 break-all",children:"Update Cart"})]}),e.jsxs("div",{className:"h-full sm:mx-[135px] m-8 md:py-3 flex flex-col lg:flex-row gap-3 justify-between items-center sm:items-baseline",children:[e.jsxs("div",{className:"w-full sm:w-auto sm:p-0 flex flex-col sm:flex-row gap-11",children:[e.jsx("input",{placeholder:"Coupon Code ",className:" w-auto  h-[56px]  p-2 border border-black rounded break-all"}),e.jsx("button",{className:"w-auto sm:w-[211px] h-[56px] border rounded text-white   bg-red-500 break-all",children:"Apply Coupon"})]}),e.jsxs("div",{className:"flex flex-col items-start border  mb-10 border-black rounded w-full sm:w-[470px] h-full sm:h-[324px] p-4 m-4 sm:m-0 gap-4 ",children:[e.jsx("span",{className:"text-[20px] break-all",children:"Cart Total:"}),e.jsxs("div",{className:"w-full flex flex-row justify-between",children:[e.jsx("span",{className:"text-base break-all",children:"Subtotal:"}),e.jsx("span",{className:"text-base break-all",children:l.reduce((s,t)=>s+t.price*t.quantity,0)})]}),e.jsx("hr",{className:"w-full"}),e.jsxs("div",{className:"w-full flex flex-row justify-between",children:[e.jsx("span",{className:"text-base break-all",children:"Shipping:"}),e.jsx("span",{className:"text-base break-all",children:"0"})]}),e.jsx("hr",{className:"w-full"}),e.jsxs("div",{className:"w-full flex flex-row justify-between",children:[e.jsx("span",{className:"text-base break-all",children:"Total:"}),e.jsx("span",{className:"text-base break-all ",children:l.reduce((s,t)=>s+t.price*t.quantity,0)})]}),e.jsx("div",{className:"w-full flex flex-row justify-center",children:e.jsx("button",{className:" w-auto md:w-[260px] h-[56px] border rounded text-white bg-red-500 item break-all p-5",children:"Procees to checkout"})})]})]})]})})}function w(){const{selectedProduct:l}=r.useContext(n);return e.jsxs(e.Fragment,{children:[e.jsx(d,{}),e.jsx(m,{}),l.length===0?e.jsx(h,{}):e.jsx(p,{}),e.jsx(u,{})]})}export{w as default};
