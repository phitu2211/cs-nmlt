var i=document.getElementById("add"),o=document.getElementById("search"),l=document.getElementById("clear"),m=document.getElementById("error"),h=document.getElementById("detailStudent"),p=document.getElementById("inputName"),f=document.getElementById("inputAge"),v=document.getElementById("inputAddress"),b=document.getElementById("inputClass"),S=document.getElementById("inputCode"),c=!1;var u=[{name:"John",age:22,code:"SV00001",class:"IBSK1D1",address:"H\xE0 n\u1ED9i",created_at:new Date().toLocaleString(),updated_at:new Date().toLocaleString()},{name:"John 2",age:23,code:"SV00002",class:"IBSK1D1",address:"H\xE0 t\xE2y",created_at:new Date().toLocaleString(),updated_at:new Date().toLocaleString()},{name:"John 3",age:24,code:"SV00003",class:"IBSK1D1",address:"H\xE0 giang",created_at:new Date().toLocaleString(),updated_at:new Date().toLocaleString()}],d=[];g(u);r();function r(){let a=document.querySelector("#histories"),n="";for(let t=0;t<d.length;t++){let e=d[t];n+='<li class="list-group-item">',n+=`<td>${e}</td>`,n+="</li>"}a.innerHTML=n}function g(a){let n=document.querySelector("table > tbody"),t="";for(let e=0;e<a.length;e++){let s=a[e];t+="<tr>",t+=`<td>${e+1}</td>`,t+=`<td>${s.name}</td>`,t+=`<td>${s.age}</td>`,t+=`<td>${s.code}</td>`,t+=`<td>${s.created_at}</td>`,t+=`<td>${s.updated_at}</td>`,t+=`<td>
								<button class="btn btn-info btn-sm"  onClick="detail(${e})">Chi ti\u1EBFt</button>
								<button class="btn btn-primary btn-sm" onClick="edit(${e})">S\u1EEDa</button>
								<button class="btn btn-danger btn-sm" onClick="remove(${e})">X\xF3a</button>
							</td>`,t+="</tr>"}n.innerHTML=t}l.addEventListener("click",function(a){c&&(i.innerText="T\u1EA1o m\u1EDBi",l.innerText="Clear input",o.disabled=!1)});
