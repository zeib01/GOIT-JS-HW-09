import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import"./assets/vendor-BrmiC7Ed.js";const t=document.querySelector(".feedback-form"),m=t.elements.message,r=t.elements.email,s="feedback-form-state";let e={email:"",message:""};const l=JSON.parse(localStorage.getItem(s));l&&(e=l,r.value=e.email||"",m.value=e.message||"");t.addEventListener("input",a=>{a.target.name==="email"?e.email=a.target.value:a.target.name==="message"&&(e.message=a.target.value),localStorage.setItem(s,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log("Form Data:",e),t.reset(),localStorage.removeItem(s),e={email:"",message:""}});
//# sourceMappingURL=2-form.js.map
