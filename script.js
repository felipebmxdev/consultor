/* ================================================================
   FELIPE DIAZ — CLEAN JS
   ================================================================ */

// TRANSLATIONS
const T={es:{'n.about':'Sobre mi','n.services':'Servicios','n.method':'Metodo','n.cases':'Casos','n.contact':'Contacto','n.cta':'Hablemos','h.label':'Analytics & AI Transformation','h.l1':'Transformando','h.l2':'organizaciones','h.l3':'con datos & AI.','h.desc':'Consultor especializado en Analytics, Inteligencia Artificial y Riesgo Actuarial para los sectores de Seguros y Salud.','h.b1':'Agenda una sesion','h.b2':'Ver servicios','h.s1':'Anos','h.s2':'Reduccion','h.s3':'Servicios','h.s4':'Sectores','a.tag':'Sobre mi','a.h':'Negocio.<br>Datos. AI.','a.p1':'Soy Felipe Diaz, consultor con mas de <strong>15 anos</strong> liderando transformaciones en <strong>seguros y salud</strong>. Empece en operaciones y evolucione hacia soluciones analiticas de alto impacto.','a.p2':'Mi diferencial: hablo el idioma del negocio <em>y</em> el de los datos, y los conecto para generar impacto financiero real.','e.1':'Magister en Gerencia de Proyectos','e.2':'Especializacion en Inteligencia de Negocios','e.3':'Ingenieria Industrial','e.4':'Big Data & ML — Google Cloud','e.5':'Chatbots con OpenAI','a.li':'Conectar en LinkedIn','a.role':'Consultor Analytics & AI','a.chart':'Impacto acumulado','s.h1':'Sector Salud','s.p1':'Cuentas medicas, redes IPS, control presupuestal y analitica de servicios.','s.h2':'Sector Seguros','s.p2':'Pricing, reservas, riesgo actuarial y automatizacion de emision e indemnizacion.','s.h3':'Transformacion Digital','s.p3':'Estrategia data-driven, gobierno del dato y cultura analitica organizacional.','sv.tag':'Servicios','sv.h':'Soluciones concretas,<br>no consultoria generica.','v1.t':'Diagnostico Data & AI','v1.p':'No sabes que tan madura es tu organizacion en datos.','v1.l1':'Evaluacion de madurez analitica','v1.l2':'Mapa de oportunidades','v1.l3':'Hoja de ruta priorizada','v1.r':'Claridad total sobre donde estas.','v2.t':'Automatizacion de Procesos','v2.p':'Procesos manuales que frenan el crecimiento.','v2.l1':'Procesos automatizables','v2.l2':'Flujos inteligentes','v2.l3':'Reduccion de carga operativa','v2.r':'Hasta 80% de reduccion en tiempos.','v3.t':'Business Intelligence','v3.p':'Tienes datos pero no informacion accionable.','v3.l1':'Dashboards ejecutivos','v3.l2':'KPIs de negocio','v3.l3':'Reporteria automatizada','v3.r':'Decisiones mas rapidas y basadas en evidencia.','v4.t':'Modelos Analiticos','v4.p':'Pricing y proyecciones basadas en intuicion.','v4.l1':'Modelos de pricing y reservas','v4.l2':'Analitica de riesgo financiero','v4.l3':'Proyecciones y escenarios','v4.r':'Sostenibilidad financiera respaldada por modelos.','v5.t':'Estrategia Data Driven','v5.p':'La organizacion no esta alineada alrededor de los datos.','v5.l1':'Cultura data-driven','v5.l2':'Gobierno del dato','v5.l3':'Alineacion negocio-tecnologia','v5.r':'Organizacion que decide con datos en todos los niveles.','v6.t':'AI Aplicada al Negocio','v6.p':'Quieres usar AI pero no sabes como aplicarla.','v6.l1':'Casos de uso reales','v6.l2':'Implementacion de modelos AI','v6.l3':'Chatbots inteligentes','v6.r':'AI con impacto medible, no pilotos eternos.','v7.t':'Analitica Actuarial & Riesgo Financiero','v7.p':'Decisiones de pricing y riesgo sin modelos robustos.','v7.l1':'Modelos de pricing y tarifacion','v7.l2':'Analisis de reservas y siniestralidad','v7.l3':'Dashboards de sostenibilidad financiera','v7.l4':'Modelos predictivos de riesgo','v7.r':'Decisiones financieras respaldadas por modelos.','v7.badge':'Seguros · Salud','m.tag':'Metodologia','m.h':'El Metodo ','m.sub':'Un framework probado para llevar tu organizacion de los datos al impacto real.','m.a1':'Analisis del Negocio','m.d1':'El negocio primero. Entendemos contexto, procesos criticos y objetivos estrategicos.','m.a2':'Diagnostico de Datos','m.d2':'Evaluamos calidad, disponibilidad y madurez. Identificamos brechas y oportunidades.','m.a3':'Automatizacion','m.d3':'Eliminamos trabajo manual y liberamos capacidad operativa.','m.a4':'Prediccion Avanzada','m.d4':'Modelos que anticipan escenarios y generan ventaja competitiva.','m.a5':'Transformacion Organizacional','m.d5':'Acompanamos el cambio cultural para que los datos sean el ADN de la organizacion.','dk.1':'Eficiencia','dk.2':'Costo Op.','dk.3':'Precision','dl.1':'Analytics 40%','dl.2':'Automatiz. 23%','dl.3':'AI 12%','c.tag':'Casos de Impacto','c.h':'Resultados reales,<br>no promesas.','c1.t':'Reduccion tiempos operativos','c1.d':'Analitica y automatizacion en salud, reduciendo tiempos hasta 80%.','c1.s':'Sector Salud','c2.t':'Equipo AI liderado','c2.d':'Equipo multidisciplinario de analytics e IA para multiples lineas de negocio.','c2.s':'Sector Seguros','c3.t':'Lineas de negocio transformadas','c3.d':'Soluciones analiticas en salud y vida, articulando negocio y niveles directivos.','c3.s':'Seguros & Salud','c4.t':'Automatizacion regulatoria','c4.d':'Reporteria regulatoria automatizada en cuentas medicas.','c4.s':'Sector Salud','c5.t':'Dashboards ejecutivos de riesgo','c5.d':'Modelos de pricing, reservas y dashboards para decisiones estrategicas.','c5.s':'Actuaria & Riesgo','c6.t':'Sistema de indicadores','c6.d':'KPIs estrategicos y BI que mejoraron el control presupuestal en salud.','c6.s':'Operaciones','ct.tag':'Contacto','ct.h':'Listo para transformar<br>tu organizacion?','ct.sub':'Sesion de diagnostico gratuita de 30 minutos. Sin compromiso, con valor real.','ct.el':'Email','ct.btn':'Agenda tu sesion gratuita','ft.c':'2026 Felipe Diaz · Analytics & AI · Bogota, Colombia','ft.s':'Transformando organizaciones con datos, automatizacion e inteligencia artificial.'},en:{'n.about':'About','n.services':'Services','n.method':'Method','n.cases':'Results','n.contact':'Contact','n.cta':"Let's Talk",'h.label':'Analytics & AI Transformation','h.l1':'Transforming','h.l2':'organizations','h.l3':'with data & AI.','h.desc':'Consultant specialized in Analytics, Artificial Intelligence and Actuarial Risk for the Insurance and Healthcare sectors.','h.b1':'Book a Session','h.b2':'View Services','h.s1':'Years','h.s2':'Reduction','h.s3':'Services','h.s4':'Sectors','a.tag':'About Me','a.h':'Business.<br>Data. AI.','a.p1':'I am Felipe Diaz, consultant with over <strong>15 years</strong> leading transformations in <strong>insurance and healthcare</strong>. I started in operations and evolved into high-impact analytical solutions.','a.p2':'My differentiator: I speak the language of business <em>and</em> data, and connect them to generate real financial impact.','e.1':"Master's in Project Management",'e.2':'Specialization in Business Intelligence','e.3':'Industrial Engineering','e.4':'Big Data & ML — Google Cloud','e.5':'Chatbots with OpenAI','a.li':'Connect on LinkedIn','a.role':'Analytics & AI Consultant','a.chart':'Cumulative impact','s.h1':'Healthcare Sector','s.p1':'Medical billing, IPS networks, budget control and healthcare service analytics.','s.h2':'Insurance Sector','s.p2':'Pricing, reserves, actuarial risk and automation of issuance and claims.','s.h3':'Digital Transformation','s.p3':'Data-driven strategy, data governance and analytical culture.','sv.tag':'Services','sv.h':'Concrete solutions,<br>not generic consulting.','v1.t':'Data & AI Assessment','v1.p':"You don't know how mature your organization is in data.",'v1.l1':'Analytical maturity assessment','v1.l2':'Opportunity mapping','v1.l3':'Prioritized roadmap','v1.r':'Full clarity on where you stand.','v2.t':'Process Automation','v2.p':'Manual processes that slow growth.','v2.l1':'Automatable processes','v2.l2':'Intelligent workflows','v2.l3':'Operational burden reduction','v2.r':'Up to 80% reduction in operational time.','v3.t':'Business Intelligence','v3.p':'You have data but no actionable information.','v3.l1':'Executive dashboards','v3.l2':'Business KPIs','v3.l3':'Automated reporting','v3.r':'Faster, evidence-based decisions.','v4.t':'Analytical Models','v4.p':'Pricing and projections based on intuition.','v4.l1':'Pricing and reserve models','v4.l2':'Financial risk analytics','v4.l3':'Projections and scenarios','v4.r':'Financial sustainability backed by models.','v5.t':'Data-Driven Strategy','v5.p':'The organization is not aligned around data.','v5.l1':'Data-driven culture','v5.l2':'Data governance','v5.l3':'Business-technology alignment','v5.r':'An organization that decides with data at every level.','v6.t':'AI Applied to Business','v6.p':"You want to use AI but don't know how.",'v6.l1':'Real use cases','v6.l2':'AI model implementation','v6.l3':'Intelligent chatbots','v6.r':'AI with measurable impact, not endless pilots.','v7.t':'Actuarial Analytics & Financial Risk','v7.p':'Pricing and risk decisions without robust models.','v7.l1':'Pricing and rate models','v7.l2':'Reserve and claims analysis','v7.l3':'Financial sustainability dashboards','v7.l4':'Predictive risk models','v7.r':'Financial decisions backed by models, not intuition.','v7.badge':'Insurance · Healthcare','m.tag':'Methodology','m.h':'The ','m.sub':'A proven framework to take your organization from data to real impact.','m.a1':'Business Analysis','m.d1':'Business first. We understand context, critical processes and strategic objectives.','m.a2':'Data Diagnosis','m.d2':'We assess quality, availability and maturity. We identify gaps and opportunities.','m.a3':'Automation','m.d3':'We eliminate manual work and free up operational capacity.','m.a4':'Advanced Prediction','m.d4':'Models that anticipate scenarios and generate competitive advantage.','m.a5':'Organizational Transformation','m.d5':"We accompany the cultural change so data becomes the organization's DNA.",'dk.1':'Efficiency','dk.2':'Op. Cost','dk.3':'Accuracy','dl.1':'Analytics 40%','dl.2':'Automation 23%','dl.3':'AI 12%','c.tag':'Impact Cases','c.h':'Real results,<br>not promises.','c1.t':'Reduction in operational time','c1.d':'Analytics and automation in healthcare, reducing management time by 80%.','c1.s':'Healthcare Sector','c2.t':'AI Team Led','c2.d':'Multidisciplinary analytics and AI team for multiple business lines.','c2.s':'Insurance Sector','c3.t':'Business Lines Transformed','c3.d':'Analytical solutions in health and life, connecting business and executive levels.','c3.s':'Insurance & Healthcare','c4.t':'Regulatory Automation','c4.d':'Automated regulatory reporting in medical billing.','c4.s':'Healthcare Sector','c5.t':'Executive Risk Dashboards','c5.d':'Pricing, reserve models and dashboards for strategic decisions.','c5.s':'Actuarial & Risk','c6.t':'KPI System','c6.d':'Strategic KPIs and BI that improved budget control in healthcare.','c6.s':'Operations','ct.tag':'Contact','ct.h':'Ready to transform<br>your organization?','ct.sub':'Free 30-minute diagnostic session. No commitment, real value.','ct.el':'Email','ct.btn':'Book your free session','ft.c':'2026 Felipe Diaz · Analytics & AI · Bogota, Colombia','ft.s':'Transforming organizations with data, automation and artificial intelligence.'}};

let lang='es';
function applyLang(l){
  const t=T[l];
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(t[k]!==undefined)el.textContent=t[k];});
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{const k=el.dataset.i18nHtml;if(t[k]!==undefined)el.innerHTML=t[k];});
  document.documentElement.lang=l;
  const btn=document.getElementById('lang-toggle');
  if(btn){btn.querySelector('.lt-active').textContent=l.toUpperCase();btn.querySelector('.lt-other').textContent=l==='es'?'EN':'ES';}
}
document.getElementById('lang-toggle')?.addEventListener('click',()=>{lang=lang==='es'?'en':'es';applyLang(lang);});

// CURSOR
const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;if(cur){cur.style.left=mx+'px';cur.style.top=my+'px';}});
(function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;if(ring){ring.style.left=rx+'px';ring.style.top=ry+'px';}requestAnimationFrame(animRing);})();

// PROGRESS
const pb=document.getElementById('progress-bar');
window.addEventListener('scroll',()=>{if(pb)pb.style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight)*100)+'%';},{passive:true});

// NAV
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav?.classList.toggle('stuck',window.scrollY>60),{passive:true});
const burger=document.getElementById('burger'),menu=document.getElementById('navMenu');
burger?.addEventListener('click',()=>{
  const o=menu.classList.toggle('open');
  const s=burger.querySelectorAll('span');
  if(o){s[0].style.transform='rotate(45deg) translate(5px,5px)';s[1].style.opacity='0';}
  else{s[0].style.transform='';s[1].style.opacity='1';}
});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');burger.querySelectorAll('span').forEach(s=>{s.style.transform='';s.style.opacity='1';});}));

// CANVAS — flowing orbs + particles
(function(){
  const c=document.getElementById('canvas');if(!c)return;
  const ctx=c.getContext('2d');let W,H;
  function resize(){W=c.width=window.innerWidth;H=c.height=window.innerHeight;}
  resize();window.addEventListener('resize',resize);
  const orbs=[
    {x:.72,y:.28,rx:.5,ry:.45,col:'rgba(124,109,250,',a:.16,dx:.00025,dy:.00018},
    {x:.18,y:.72,rx:.38,ry:.35,col:'rgba(0,200,150,',a:.12,dx:-.0002,dy:.00022},
    {x:.5,y:.5,rx:.28,ry:.25,col:'rgba(255,55,95,',a:.06,dx:.0003,dy:-.00025},
    {x:.88,y:.82,rx:.32,ry:.28,col:'rgba(124,109,250,',a:.09,dx:-.00022,dy:-.0002},
  ];
  const pts=Array.from({length:55},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.00022,vy:(Math.random()-.5)*.00022,r:Math.random()*1.3+.3,a:Math.random()*.4+.1,c:['rgba(124,109,250,','rgba(0,200,150,','rgba(255,55,95,'][Math.floor(Math.random()*3)]}));
  function draw(){
    ctx.clearRect(0,0,W,H);
    orbs.forEach(o=>{
      o.x+=o.dx;o.y+=o.dy;
      if(o.x<-.2||o.x>1.2)o.dx*=-1;if(o.y<-.2||o.y>1.2)o.dy*=-1;
      const g=ctx.createRadialGradient(o.x*W,o.y*H,0,o.x*W,o.y*H,o.rx*Math.min(W,H));
      g.addColorStop(0,o.col+o.a+')');g.addColorStop(1,o.col+'0)');
      ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(o.x*W,o.y*H,o.rx*Math.min(W,H),o.ry*Math.min(W,H),0,0,Math.PI*2);ctx.fill();
    });
    pts.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>1)p.vx*=-1;if(p.y<0||p.y>1)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2);ctx.fillStyle=p.c+p.a+')';ctx.fill();
    });
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
      const dx=(pts[i].x-pts[j].x)*W,dy=(pts[i].y-pts[j].y)*H,d=Math.sqrt(dx*dx+dy*dy);
      if(d<110){ctx.beginPath();ctx.moveTo(pts[i].x*W,pts[i].y*H);ctx.lineTo(pts[j].x*W,pts[j].y*H);ctx.strokeStyle=`rgba(124,109,250,${.04*(1-d/110)})`;ctx.lineWidth=.5;ctx.stroke();}
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// HERO ENTRANCE
(function(){
  const label=document.getElementById('h-label');
  const lines=document.querySelectorAll('.line');
  const bottom=document.getElementById('h-bottom');
  const scrollCue=document.querySelector('.scroll-cue');
  function anim(el,delay,props){setTimeout(()=>{if(!el)return;Object.assign(el.style,{transition:'opacity .8s cubic-bezier(.4,0,.2,1), transform .8s cubic-bezier(.4,0,.2,1)',...props});},delay);}
  setTimeout(()=>{if(label)Object.assign(label.style,{opacity:'1',transform:'translateY(0)',transition:'opacity .7s ease, transform .7s ease'});},300);
  lines.forEach((l,i)=>setTimeout(()=>{Object.assign(l.style,{opacity:'1',transform:'translateY(0)',transition:'opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)'});},500+i*140));
  setTimeout(()=>{if(bottom)Object.assign(bottom.style,{opacity:'1',transform:'translateY(0)',transition:'opacity .7s ease, transform .7s ease'});},1000);
  setTimeout(()=>{if(scrollCue)Object.assign(scrollCue.style,{opacity:'1',transition:'opacity .6s ease'});},1400);
})();

// COUNTER
function runCount(el){
  const to=+el.dataset.count,dur=1800,start=performance.now();
  function tick(now){const p=Math.min((now-start)/dur,1),e=1-Math.pow(1-p,3);el.textContent=Math.floor(e*to);if(p<1)requestAnimationFrame(tick);else el.textContent=to;}
  requestAnimationFrame(tick);
}
const countObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){runCount(e.target);countObs.unobserve(e.target);}});},{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>countObs.observe(el));

// FADE-IN ON SCROLL
const fadeObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const delay=+(e.target.dataset.delay||0);
      setTimeout(()=>e.target.classList.add('visible'),delay);
      fadeObs.unobserve(e.target);
    }
  });
},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.fade-in').forEach(el=>fadeObs.observe(el));

// ACTIVE NAV
const secs=document.querySelectorAll('section[id]'),navAs=document.querySelectorAll('.nav-menu a[href^="#"]');
window.addEventListener('scroll',()=>{
  let cur='';secs.forEach(s=>{if(window.scrollY>=s.offsetTop-160)cur=s.id;});
  navAs.forEach(a=>{a.style.color=a.getAttribute('href')==='#'+cur?'#ededed':'';});
},{passive:true});
