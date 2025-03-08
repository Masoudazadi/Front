import{r as d,u as h,j as e,O as f,N as g,b as w,f as b,F as j,a as N}from"./index-CL5vkUFu.js";import{z as a,u as y,P as C,L as v,t as E,y as S}from"./index-DbCPdz4B.js";const F=a.object({name:a.string().min(5,{message:"Name must be at least 5 character"}),email:a.string().email({message:"Email is invalid"}),password:a.string().min(6,{message:"Password should be at least 6 characters long"})}),k="http://127.0.0.1:5000/api/v1/auth/register";function R(){const[n,o]=d.useState(!1),{register:t,handleSubmit:m,formState:{errors:s},setError:i,clearErrors:c}=y({resolver:E(F),shouldFocusError:!1}),u=h(),p=async r=>{try{await N.post(k,r,{headers:{"Content-Type":"application/json"}}),S.success("Successfully Registered",{position:"bottom-right",autoClose:2e3}),o(!0),u("/login")}catch(x){i("email",{type:"server",message:x.response.data.msg})}};function l(r){c(r)}return e.jsxs(e.Fragment,{children:[e.jsx(f,{}),e.jsx(g,{}),e.jsxs("div",{className:"py-[68px] flex flex-col xl:flex-row justify-center xl:justify-start items-center 2xl:gap-56 ",children:[e.jsx("img",{src:C,className:"w-[805px] h-[781px] hidden xl:block "}),e.jsxs("div",{className:"w-full px-8 sm:w-[371px] h-full flex flex-col items-center sm:items-start ",children:[e.jsx("h1",{className:"text-3xl w-auto mb-6 break-all",children:" Create an account"}),e.jsx("h5",{className:" break-all",children:"Enter Your Details Below"}),e.jsxs("form",{onSubmit:m(p),className:"w-full flex flex-col items-start pt-12 ",children:[s.name?e.jsxs("span",{className:"text-red-500 text-sm",children:[" ",s.name.message]}):null,e.jsx("input",{onChange:()=>l("name"),autoComplete:"name",...t("name"),placeholder:"Name",className:"p-2 border-b w-full sm:w-[370px] h-[32px] outline-none mb-10"}),s.email?e.jsxs("span",{className:"text-red-500 text-sm",children:[" ",s.email.message]}):null,e.jsx("input",{onChange:()=>l("email"),autoComplete:"email",type:"email",name:"email",...t("email"),placeholder:"Email ",className:"p-2 border-b w-full sm:w-[370px] h-[32px] outline-none mb-10"}),s.password?e.jsxs("span",{className:"text-red-500 text-sm",children:[" ",s.password.message]}):null,e.jsx("input",{onChange:()=>l("password"),autoComplete:"current-password",type:"password",name:"password",...t("password"),placeholder:"password",className:"p-2 border-b w-full sm:w-[370px] h-[32px] outline-none mb-10"}),e.jsx("button",{type:"submit",className:" w-full sm:w-[371px] h-14 bg-[#DB4444] rounded text-white break-all",disabled:n,children:n?"Your Account has been registered":"Create an account"})]}),e.jsxs("button",{className:"w-full sm:w-[371px] h-14 rounded border mt-4 flex items-center justify-center gap-3",children:[e.jsx(w,{icon:b}),"sign up with Google"]}),e.jsxs("span",{className:"w-full sm:w-[371px] mt-4",children:["Already have account? ",e.jsx("a",{href:"#",children:"Log in"})," "]})]})]}),e.jsx(j,{}),e.jsx(v,{})]})}export{R as default};
