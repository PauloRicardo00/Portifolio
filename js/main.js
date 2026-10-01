function IMG(k){return "img/certificados/"+k+".jpg"}
var CATS={todos:"Todos",cloud:"Cloud",dados:"Dados",ia:"Inteligência Artificial",prog:"Programação e Mobile",outros:"Outros"};
var C=[
["Implantação de Serviços de IA em Nuvem — Microsoft AI-900",40,"2026-06-17","ia","implantacao-de-servicos-de-inteligencia-artifici"],
["Competência Transversal — Lógica de Programação",14,"2026-04-13","prog","competencia-transversal-logica-de-programaca"],
["Fluência — Fundamentos da Inteligência Artificial",8,"2026-03-13","ia","fluencia-fundamentos-da-inteligencia-artificia"],
["Ética na Inteligência Artificial",4,"2026-03-11","ia","etica-na-inteligencia-artificia"],
["Cibersegurança na Nuvem",20,"2026-02-07","cloud","ciberseguranca-na-nuvem"],
["Implantação de Serviços em Nuvem — Microsoft AZ-900",40,"2025-04-09","cloud","implantacao-de-servicos-em-nuvem-microsoft-az-90"],
["Data Analytics e Tomada de Decisão",20,"2024-12-14","dados","data-analytics-e-tomada-de-decisao"],
["Implantação de Serviços em Nuvem — AWS Cloud Practitioner Foundational",40,"2024-10-24","cloud","implantacao-de-servicos-em-nuvem-aws-cloud-pract"],
["Competência Transversal — Segurança no Trabalho",14,"2024-10-22","outros","competencia-transversal-seguranca-no-trabalh"],
["Soluções Integradas com IoT",60,"2024-09-21","prog","solucoes-integradas-com-iot"],
["Microsoft Power BI",32,"2024-09-04","dados","microsoft-power-b"],
["Criador de App Microsoft Power Platform — PL-100",32,"2024-08-12","dados","criador-de-app-microsoft-power-plataform-microso"],
["Desenvolvedor de Aplicações para Android",40,"2024-07-16","prog","desenvolvedor-de-aplicacoes-para-androi"],
["Fundamentos de Ciência de Dados — Google Cloud",20,"2024-06-26","dados","fundamentos-de-ciencia-de-dados-google-clou"],
["Economia Circular",20,"2024-06-04","outros","economia-circula"],
["Fundamentos do Python 1",30,"2024-05-23","prog","fundamentos-do-python"],
["Desvendando o 5G",15,"2024-05-28","outros","desvendando-o-5"],
["Privacidade e Proteção de Dados (LGPD)",4,"2024-05-28","outros","privacidade-e-protecao-de-dados-lgpd"]
].sort(function(a,b){return a[2]<b[2]?1:-1});
var M=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
function when(d){var p=d.split("-");return M[+p[1]-1]+"/"+p[0]}
function info(x){return "SENAI-SP · "+x[1]+"h · concluído em "+when(x[2])}
var grid=document.getElementById("grid"),chips=document.getElementById("chips"),count=document.getElementById("count");
var cur="todos",list=C.slice(),idx=0;
function render(){
  list=C.filter(function(x){return cur==="todos"||x[3]===cur});
  grid.innerHTML=list.map(function(x,i){
    return '<div class="col"><button type="button" class="card h-100 w-100 text-start p-0" data-i="'+i+'" data-bs-toggle="modal" data-bs-target="#lb" aria-haspopup="dialog">'+
      '<span class="frame"><img loading="lazy" class="rounded-1 shadow" alt="" src="'+IMG(x[4])+'"></span>'+
      '<span class="card-body d-block"><span class="d-block text-primary fw-bold small text-uppercase">'+CATS[x[3]]+'</span><span class="visually-hidden">: </span><span class="d-block h6 mt-1">'+x[0]+'</span><small class="text-secondary">'+x[1]+'h · '+when(x[2])+'</small></span>'+
      '<span class="visually-hidden"> (abre o certificado ampliado)</span></button></div>';
  }).join("");
  count.textContent=list.length+" certificado"+(list.length>1?"s":"")+(cur==="todos"?"":" em "+CATS[cur]);
}
Object.keys(CATS).forEach(function(k){
  var b=document.createElement("button");b.type="button";b.className="btn btn-sm btn-outline-primary rounded-pill"+(k===cur?" active":"");b.textContent=CATS[k];b.setAttribute("aria-pressed",k===cur?"true":"false");
  b.onclick=function(){cur=k;[].forEach.call(chips.children,function(c){c.classList.toggle("active",c===b);c.setAttribute("aria-pressed",c===b?"true":"false")});render()};
  chips.appendChild(b);
});
var lbEl=document.getElementById("lb"),lbimg=document.getElementById("lbimg");
function show(i){
  idx=(i+list.length)%list.length;var x=list[idx];
  lbimg.src=IMG(x[4]);lbimg.alt="Certificado: "+x[0];
  document.getElementById("lbt").textContent=x[0];
  document.getElementById("lbm").textContent=info(x);
  document.getElementById("pos").textContent=(idx+1)+" de "+list.length;
}
grid.addEventListener("click",function(e){var b=e.target.closest("button[data-i]");if(b)show(+b.dataset.i)});
document.getElementById("prev").onclick=function(){show(idx-1)};
document.getElementById("next").onclick=function(){show(idx+1)};
lbEl.addEventListener("keydown",function(e){if(e.key==="ArrowLeft")show(idx-1);if(e.key==="ArrowRight")show(idx+1)});
render();

/* Tema claro/escuro */
var root=document.documentElement,tb=document.getElementById("theme");
function icon(){var d=root.getAttribute("data-bs-theme")==="dark";tb.firstElementChild.textContent=d?"☀":"☾";tb.setAttribute("aria-pressed",d?"true":"false");tb.title=d?"Mudar para tema claro":"Mudar para tema escuro"}
tb.addEventListener("click",function(){
  var t=root.getAttribute("data-bs-theme")==="dark"?"light":"dark";
  root.setAttribute("data-bs-theme",t);
  try{localStorage.setItem("theme",t)}catch(e){}
  icon();
});
icon();

/* Fecha o menu mobile ao escolher um item */
var nm=document.getElementById("navMenu");
nm.addEventListener("click",function(e){
  if(e.target.classList.contains("nav-link")&&nm.classList.contains("show"))bootstrap.Collapse.getOrCreateInstance(nm).hide();
});

/* Formulário de contato (FormSubmit) */
var fm=document.getElementById("form"),sendB=document.getElementById("send"),toastEl=document.getElementById("toastMsg"),toastTxt=document.getElementById("toastText");
/* Acessibilidade do formulário: marca campos inválidos e liga cada um à sua mensagem de erro */
var fields=[].slice.call(fm.querySelectorAll("[required]"));
function mark(el){var fb=document.getElementById(el.id+"-erro");if(el.validity.valid){el.removeAttribute("aria-invalid");el.removeAttribute("aria-describedby")}else{el.setAttribute("aria-invalid","true");if(fb)el.setAttribute("aria-describedby",fb.id)}}
fields.forEach(function(el){el.addEventListener("input",function(){if(fm.classList.contains("was-validated"))mark(el)})});
/* Toast: aviso que aparece no canto da tela e some sozinho (verde = sucesso, vermelho = erro) */
function note(t,ok){
  toastEl.classList.remove("text-bg-success","text-bg-danger");
  toastEl.classList.add(ok?"text-bg-success":"text-bg-danger");
  toastTxt.textContent=t;
  /* Leitores de tela: anuncia por uma região fixa (toast oculto não é anunciado de forma confiável) */
  var st=document.getElementById("status");st.textContent="";setTimeout(function(){st.textContent=t},60);
  /* Sucesso some após 10s; erro fica até a pessoa fechar (WCAG 2.2.1) */
  var inst=bootstrap.Toast.getInstance(toastEl);if(inst)inst.dispose();
  bootstrap.Toast.getOrCreateInstance(toastEl,{autohide:ok,delay:10000}).show();
}
fm.addEventListener("submit",function(e){
  e.preventDefault();
  if(sendB.getAttribute("aria-disabled")==="true")return;
  if(!fm.checkValidity()){fm.classList.add("was-validated");fields.forEach(mark);var bad=fields.filter(function(el){return !el.validity.valid})[0];if(bad)bad.focus();return}
  if(fm.elements._honey.value)return;
  sendB.setAttribute("aria-disabled","true");sendB.innerHTML='<span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Enviando…';bootstrap.Toast.getOrCreateInstance(toastEl).hide();
  fetch(fm.action.replace("formsubmit.co/","formsubmit.co/ajax/"),{method:"POST",headers:{Accept:"application/json"},body:new FormData(fm)})
    .then(function(r){return r.json()})
    .then(function(d){
      if(d.success===true||d.success==="true"){note("Mensagem enviada! Responderei assim que possível.",true);fm.reset();fm.classList.remove("was-validated");fields.forEach(function(el){el.removeAttribute("aria-invalid");el.removeAttribute("aria-describedby")})}
      else throw new Error(d.message||"erro");
    })
    .catch(function(){note("Não foi possível enviar agora. Tente de novo ou escreva para desvpaulorslima@gmail.com.",false)})
    .then(function(){sendB.removeAttribute("aria-disabled");sendB.textContent="Enviar mensagem"});
});
/* Respeita "reduzir movimento": sem rolagem suave do menu */
if(matchMedia("(prefers-reduced-motion: reduce)").matches)document.body.removeAttribute("data-bs-smooth-scroll");
/* Informa ao leitor de tela qual seção do menu está ativa */
document.body.addEventListener("activate.bs.scrollspy",function(e){
  [].forEach.call(document.querySelectorAll("#menu .nav-link"),function(l){l.removeAttribute("aria-current")});
  if(e.relatedTarget)e.relatedTarget.setAttribute("aria-current","true");
});