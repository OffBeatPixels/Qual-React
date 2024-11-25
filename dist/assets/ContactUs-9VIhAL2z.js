import{r as i,j as e}from"./index-BYkX9hMe.js";const o=()=>{const[s,t]=i.useState({firstName:"",lastName:"",email:"",message:""}),a=r=>{const{name:l,value:n}=r.target;t({...s,[l]:n})};return e.jsxs("div",{className:"grid md:grid-cols-2 md:px-20",children:[e.jsx("div",{className:"flex items-center justify-center font-bold mt-10 text-2xl md:text-4xl px-10",children:"Learn more about how Qualiinsight can help your Business and Quality teams"}),e.jsx("div",{className:"min-h-52 flex items-center justify-center",children:e.jsxs("div",{className:"p-8 w-full max-w-xl",children:[e.jsx("h2",{className:"text-3xl font-bold text-center text-gray-800",children:"Contact Us"}),e.jsxs("form",{action:"https://formspree.io/f/xeojkllk",method:"POST",className:"space-y-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{htmlFor:"firstName",className:"block text-gray-700",children:["First Name ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",id:"firstName",name:"firstName",value:s.firstName,onChange:a,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"lastName",className:"block text-gray-700",children:"Last Name"}),e.jsx("input",{type:"text",id:"lastName",name:"lastName",value:s.lastName,onChange:a,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{htmlFor:"email",className:"block text-gray-700",children:["Email ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:a,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{htmlFor:"message",className:"block text-gray-700",children:["How can we help you? ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:a,rows:"4",className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400",required:!0})]}),e.jsx("button",{type:"submit",className:"w-full bg-gray-600 text-white py-3 rounded-md hover:bg-green-900 transition duration-200",children:"Submit"})]})]})})]})};export{o as default};
