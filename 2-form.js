import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import"./assets/vendor-BrmiC7Ed.js";const t=document.querySelector(".feedback-form"),l="feedback-form-state";let e={email:"",message:""};const m=localStorage.getItem(l);m&&(e=JSON.parse(m),t.email.value=e.email,t.message.value=e.message);t.addEventListener("input",a=>{e[a.target.name]=a.target.value,localStorage.setItem(l,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(l),e={email:"",message:""},t.reset()});
//# sourceMappingURL=2-form.js.map
