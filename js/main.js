
var IMG={
 "ciberseguranca-na-nuvem": "img/certificados/ciberseguranca-na-nuvem.jpg",
 "competencia-transversal-logica-de-programaca": "img/certificados/competencia-transversal-logica-de-programaca.jpg",
 "competencia-transversal-seguranca-no-trabalh": "img/certificados/competencia-transversal-seguranca-no-trabalh.jpg",
 "criador-de-app-microsoft-power-plataform-microso": "img/certificados/criador-de-app-microsoft-power-plataform-microso.jpg",
 "data-analytics-e-tomada-de-decisao": "img/certificados/data-analytics-e-tomada-de-decisao.jpg",
 "desenvolvedor-de-aplicacoes-para-androi": "img/certificados/desenvolvedor-de-aplicacoes-para-androi.jpg",
 "desvendando-o-5": "img/certificados/desvendando-o-5.jpg",
 "economia-circula": "img/certificados/economia-circula.jpg",
 "etica-na-inteligencia-artificia": "img/certificados/etica-na-inteligencia-artificia.jpg",
 "fluencia-fundamentos-da-inteligencia-artificia": "img/certificados/fluencia-fundamentos-da-inteligencia-artificia.jpg",
 "fundamentos-de-ciencia-de-dados-google-clou": "img/certificados/fundamentos-de-ciencia-de-dados-google-clou.jpg",
 "fundamentos-do-python": "img/certificados/fundamentos-do-python.jpg",
 "implantacao-de-servicos-de-inteligencia-artifici": "img/certificados/implantacao-de-servicos-de-inteligencia-artifici.jpg",
 "implantacao-de-servicos-em-nuvem-aws-cloud-pract": "img/certificados/implantacao-de-servicos-em-nuvem-aws-cloud-pract.jpg",
 "implantacao-de-servicos-em-nuvem-microsoft-az-90": "img/certificados/implantacao-de-servicos-em-nuvem-microsoft-az-90.jpg",
 "microsoft-power-b": "img/certificados/microsoft-power-b.jpg",
 "privacidade-e-protecao-de-dados-lgpd": "img/certificados/privacidade-e-protecao-de-dados-lgpd.jpg",
 "solucoes-integradas-com-iot": "img/certificados/solucoes-integradas-com-iot.jpg"
};
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
  grid.innerHTML="";
  list.forEach(function(x,i){
    var li=document.createElement("li"),b=document.createElement("button");
    b.type="button";b.className="card";b.dataset.i=i;
    b.innerHTML='<span class="frame"><img loading="lazy" alt="Certificado: '+x[0]+'" src="'+IMG[x[4]]+'"></span><span class="meta"><span class="tag">'+CATS[x[3]]+'</span><strong>'+x[0]+'</strong><small>'+x[1]+'h · '+when(x[2])+'</small></span>';
    li.appendChild(b);grid.appendChild(li);
  });
  count.textContent=list.length+" certificado"+(list.length>1?"s":"")+(cur==="todos"?"":" em "+CATS[cur]);
}
Object.keys(CATS).forEach(function(k){
  var b=document.createElement("button");b.type="button";b.className="chip";b.textContent=CATS[k];b.setAttribute("aria-pressed",k===cur);
  b.onclick=function(){cur=k;[].forEach.call(chips.children,function(c){c.setAttribute("aria-pressed",c===b)});render()};
  chips.appendChild(b);
});
var lb=document.getElementById("lb"),lbimg=document.getElementById("lbimg");
function show(i){
  idx=(i+list.length)%list.length;var x=list[idx];
  lbimg.src=IMG[x[4]];lbimg.alt="Certificado: "+x[0];
  document.getElementById("lbt").textContent=x[0];
  document.getElementById("lbm").textContent=info(x);
  document.getElementById("pos").textContent=(idx+1)+" de "+list.length;
}
grid.addEventListener("click",function(e){var b=e.target.closest(".card");if(!b)return;show(+b.dataset.i);lb.showModal()});
document.getElementById("prev").onclick=function(){show(idx-1)};
document.getElementById("next").onclick=function(){show(idx+1)};
document.getElementById("close").onclick=function(){lb.close()};
lb.addEventListener("click",function(e){if(e.target===lb)lb.close()});
lb.addEventListener("keydown",function(e){if(e.key==="ArrowLeft")show(idx-1);if(e.key==="ArrowRight")show(idx+1)});
var root=document.documentElement;
try{var s=localStorage.getItem("theme");if(s)root.dataset.theme=s}catch(e){}
document.getElementById("theme").onclick=function(){
  var dark=root.dataset.theme?root.dataset.theme==="dark":!matchMedia("(prefers-color-scheme: light)").matches;
  root.dataset.theme=dark?"light":"dark";
  try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}
};
render();

var tabs=[].slice.call(document.querySelectorAll(".tab"));
function pick(i){tabs.forEach(function(t,j){t.setAttribute("aria-selected",i===j);t.tabIndex=i===j?0:-1;document.getElementById("p"+j).hidden=i!==j});tabs[i].focus()}
tabs.forEach(function(t,i){t.onclick=function(){pick(i)};t.onkeydown=function(e){if(e.key==="ArrowRight")pick((i+1)%3);if(e.key==="ArrowLeft")pick((i+2)%3)}});
var lk=document.getElementById("links"),bg=document.getElementById("burger");
var vl=document.getElementById("veil");
function menu(o){lk.classList.toggle("open",o);vl.classList.toggle("on",o);bg.setAttribute("aria-expanded",o);bg.textContent=o?"✕":"☰"}
bg.onclick=function(){menu(!lk.classList.contains("open"))};
vl.onclick=function(){menu(false)};
lk.onclick=function(e){if(e.target.tagName==="A")menu(false)};
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&lk.classList.contains("open")){menu(false);bg.focus()}});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)[].forEach.call(lk.children,function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id)})})},{rootMargin:"-40% 0px -55% 0px"});
["inicio","sobre","portfolio","contato"].forEach(function(id){io.observe(document.getElementById(id))});
