const btnAdd=document.getElementById("add"),btnSearch=document.getElementById("search"),btnClear=document.getElementById("clear"),error=document.getElementById("error"),detailStudent=document.getElementById("detailStudent"),inputName=document.getElementById("inputName"),inputAge=document.getElementById("inputAge"),inputAddress=document.getElementById("inputAddress"),inputClass=document.getElementById("inputClass"),inputCode=document.getElementById("inputCode");let isEdit=!1,editIndex=-1,listStudents=[{name:"John",age:22,code:"SV00001",class:"IBSK1D1",address:"H\xE0 n\u1ED9i",created_at:new Date().toLocaleString(),updated_at:new Date().toLocaleString()},{name:"John 2",age:23,code:"SV00002",class:"IBSK1D1",address:"H\xE0 t\xE2y",created_at:new Date().toLocaleString(),updated_at:new Date().toLocaleString()},{name:"John 3",age:24,code:"SV00003",class:"IBSK1D1",address:"H\xE0 giang",created_at:new Date().toLocaleString(),updated_at:new Date().toLocaleString()}],histories=[];renderTable(listStudents),renderHistory();function renderHistory(){let a=document.querySelector("#histories"),b="";for(let a=0;a<histories.length;a++){const c=histories[a];b+="<li class=\"list-group-item\">",b+=`<td>${c}</td>`,b+="</li>"}a.innerHTML=b}function renderTable(a){let b=document.querySelector("table > tbody"),c="";for(let b=0;b<a.length;b++){const d=a[b];c+="<tr>",c+=`<td>${b+1}</td>`,c+=`<td>${d.name}</td>`,c+=`<td>${d.age}</td>`,c+=`<td>${d.code}</td>`,c+=`<td>${d.created_at}</td>`,c+=`<td>${d.updated_at}</td>`,c+=`<td>
								<button class="btn btn-info btn-sm"  onClick="detail(${b})">Chi tiết</button>
								<button class="btn btn-primary btn-sm" onClick="edit(${b})">Sửa</button>
								<button class="btn btn-danger btn-sm" onClick="remove(${b})">Xóa</button>
							</td>`,c+="</tr>"}b.innerHTML=c}function validate(){var a=[];const b=inputName.value,c=inputAge.value,d=inputClass.value,e=inputCode.value,f=inputAddress.value;b||a.push("Tr\u01B0\u1EDDng t\xEAn kh\xF4ng \u0111\u01B0\u1EE3c b\u1ECF tr\u1ED1ng"),c||a.push("Tr\u01B0\u1EDDng tu\u1ED5i kh\xF4ng \u0111\u01B0\u1EE3c b\u1ECF tr\u1ED1ng"),c&&(16>+c||100<+c)&&a.push("Tr\u01B0\u1EDDng tu\u1ED5i ph\u1EA3i l\u1EDBn h\u01A1n 16 v\xE0 nh\u1ECF h\u01A1n 100"),d||a.push("Tr\u01B0\u1EDDng l\u1EDBp kh\xF4ng \u0111\u01B0\u1EE3c b\u1ECF tr\u1ED1ng"),d&&!d.startsWith("IBS")&&a.push("Tr\u01B0\u1EDDng l\u1EDBp kh\xF4ng h\u1EE3p l\u1EC7"),e||a.push("Tr\u01B0\u1EDDng m\xE3 sv kh\xF4ng \u0111\u01B0\u1EE3c b\u1ECF tr\u1ED1ng"),e&&!e.startsWith("SV")&&a.push("Tr\u01B0\u1EDDng m\xE3 sv kh\xF4ng h\u1EE3p l\u1EC7"),f||a.push("Tr\u01B0\u1EDDng \u0111\u1ECBa ch\u1EC9 kh\xF4ng \u0111\u01B0\u1EE3c b\u1ECF tr\u1ED1ng"),error.innerHTML=a.join("<br>");const g=0<a.length;return g?error.classList.remove("d-none"):error.classList.add("d-none"),g}function addStudent(a){if(a.preventDefault(),validate())return;const b=inputName.value,c=inputAge.value,d=inputClass.value,e=inputCode.value,f=inputAddress.value;isEdit?(listStudents[editIndex].name=b,listStudents[editIndex].age=c,listStudents[editIndex].classStudent=d,listStudents[editIndex].code=e,listStudents[editIndex].address=f,listStudents[editIndex].updated_at=new Date().toLocaleString(),histories.push(`Cập nhật sinh viên ${b}`)):(listStudents.push({name:b,age:c,code:e,class:d,address:f,created_at:new Date().toLocaleString(),updated_at:new Date().toLocaleString()}),histories.push(`Thêm sinh viên ${b} vào lớp`)),renderTable(listStudents),renderHistory(),btnClear.click()}function searchStudent(a){a.preventDefault();const b=inputName.value,c=inputAge.value,d=inputClass.value,e=inputCode.value,f=inputAddress.value;let g=listStudents;b&&(g=g.filter(a=>a.name.includes(b))),c&&(g=g.filter(a=>a.age===c)),e&&(g=g.filter(a=>a.code===e)),f&&(g=g.filter(a=>a.address.includes(f))),d&&(g=g.filter(a=>a.class===d)),renderTable(g),renderHistory()}btnClear.addEventListener("click",function(){isEdit&&(btnAdd.innerText="T\u1EA1o m\u1EDBi",btnClear.innerText="Clear input",btnSearch.disabled=!1)});function edit(a){isEdit=!0,editIndex=a,btnSearch.disabled=!0;let b=listStudents[a];inputName.value=b.name,inputAge.value=b.age,inputClass.value=b.class,inputCode.value=b.code,inputAddress.value=b.address,btnAdd.textContent="L\u01B0u",btnClear.textContent="H\u1EE7y"}function remove(a){histories.push(`Xóa sinh viên ${listStudents[a].name} ra khỏi lớp`),listStudents.splice(a,1),renderTable(listStudents),renderHistory()}function detail(a){let b="",c=listStudents[a];b+=`
    <li class="list-group-item">Tên: ${c.name}</li>
    <li class="list-group-item">Tuổi: ${c.age}</li>
    <li class="list-group-item">Mã: ${c.code}</li>
    <li class="list-group-item">Lớp: ${c.class}</li>
    <li class="list-group-item">Địa chỉ: ${c.address}</li>
  `,detailStudent.innerHTML=b}