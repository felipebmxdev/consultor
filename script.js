/* ================================================================
   FELIPE DIAZ — JARVIS JS
   GSAP + ScrollTrigger + Custom Cursor + WebGL Canvas
   ================================================================ */

// ── TRANSLATIONS ──────────────────────────────────────────────
const T = {
  es:{
    'nav.about':'Sobre mi','nav.services':'Servicios','nav.method':'Metodo',
    'nav.cases':'Casos','nav.contact':'Contacto','nav.cta':'Hablemos',
    'hero.tag':'Analytics & AI Transformation',
    'hero.l1':'Transformando','hero.l2':'organizaciones','hero.l3':'con datos & AI.',
    'hero.sub':'Consultor especializado en Analytics, Inteligencia Artificial y Riesgo Actuarial para Seguros y Salud.',
    'hero.cta1':'Agenda una sesion','hero.cta2':'Ver servicios',
    'hero.s1':'Anos','hero.s2':'Reduccion','hero.s3':'Servicios','hero.s4':'Sectores',
    'hero.scroll':'Scroll',
    'about.tag':'Sobre mi','about.h':'Negocio.<br>Datos.<br>AI.',
    'about.p1':'Soy Felipe Diaz, consultor con mas de <strong>15 anos</strong> liderando transformaciones en <strong>seguros y salud</strong>. Empece en operaciones, entendi el negocio desde adentro.',
    'about.p2':'Mi diferencial: hablo el idioma del negocio <em>y</em> el de los datos. Los conecto para generar impacto financiero real.',
    'edu.1':'Magister en Gerencia de Proyectos','edu.2':'Especializacion en Inteligencia de Negocios',
    'edu.3':'Ingenieria Industrial','edu.4':'Big Data & ML — Google Cloud','edu.5':'Chatbots con OpenAI',
    'about.li':'Conectar en LinkedIn','about.role':'Consultor Analytics & AI','about.chart':'Impacto acumulado',
    'sec.h1':'Sector Salud','sec.p1':'Cuentas medicas, redes IPS, control presupuestal y analitica de servicios.',
    'sec.h2':'Sector Seguros','sec.p2':'Pricing, reservas, riesgo actuarial y automatizacion de emision e indemnizacion.',
    'sec.h3':'Transformacion Digital','sec.p3':'Estrategia data-driven, gobierno del dato y cultura analitica organizacional.',
    'svc.tag':'Servicios','svc.h':'Soluciones concretas,<br>no consultoria generica.',
    's1.t':'Diagnostico Data & AI','s1.p':'No sabes que tan madura es tu organizacion en datos.','s1.l1':'Evaluacion de madurez analitica','s1.l2':'Mapa de oportunidades','s1.l3':'Hoja de ruta priorizada','s1.r':'Claridad total sobre donde estas.',
    's2.t':'Automatizacion de Procesos','s2.p':'Procesos manuales que frenan el crecimiento.','s2.l1':'Procesos automatizables','s2.l2':'Flujos inteligentes','s2.l3':'Reduccion de carga operativa','s2.r':'Hasta 80% de reduccion en tiempos.',
    's3.t':'Business Intelligence','s3.p':'Tienes datos pero no informacion accionable.','s3.l1':'Dashboards ejecutivos','s3.l2':'KPIs de negocio','s3.l3':'Reporteria automatizada','s3.r':'Decisiones mas rapidas y basadas en evidencia.',
    's4.t':'Modelos Analiticos','s4.p':'Pricing y proyecciones basadas en intuicion.','s4.l1':'Modelos de pricing y reservas','s4.l2':'Analitica de riesgo financiero','s4.l3':'Proyecciones y escenarios','s4.r':'Sostenibilidad financiera respaldada por modelos.',
    's5.t':'Estrategia Data Driven','s5.p':'La organizacion no esta alineada alrededor de los datos.','s5.l1':'Cultura data-driven','s5.l2':'Gobierno del dato','s5.l3':'Alineacion negocio-tecnologia','s5.r':'Organizacion que decide con datos en todos los niveles.',
    's6.t':'AI Aplicada al Negocio','s6.p':'Quieres usar AI pero no sabes como aplicarla.','s6.l1':'Casos de uso reales','s6.l2':'Implementacion de modelos AI','s6.l3':'Chatbots inteligentes','s6.r':'AI con impacto medible, no pilotos eternos.',
    's7.t':'Analitica Actuarial & Riesgo Financiero','s7.p':'Decisiones de pricing y riesgo sin modelos robustos.','s7.l1':'Modelos de pricing y tarifacion','s7.l2':'Analisis de reservas y siniestralidad','s7.l3':'Dashboards de sostenibilidad financiera','s7.l4':'Modelos predictivos de riesgo','s7.r':'Decisiones financieras respaldadas por modelos.','s7.badge':'Seguros · Salud',
    'mth.tag':'Metodologia','mth.h1':'El Metodo ','mth.sub':'Un framework probado para llevar tu organizacion de los datos al impacto real.',
    'mth.a1':'Analisis del Negocio','mth.d1':'El negocio primero. Entendemos contexto, procesos criticos y objetivos estrategicos.',
    'mth.a2':'Diagnostico de Datos','mth.d2':'Evaluamos calidad, disponibilidad y madurez. Identificamos brechas y oportunidades.',
    'mth.a3':'Automatizacion','mth.d3':'Eliminamos trabajo manual y liberamos capacidad operativa.',
    'mth.a4':'Prediccion Avanzada','mth.d4':'Modelos que anticipan escenarios y generan ventaja competitiva.',
    'mth.a5':'Transformacion Organizacional','mth.d5':'Acompanamos el cambio cultural para que los datos sean el ADN de la organizacion.',
    'dk1':'Eficiencia','dk2':'Costo Op.','dk3':'Precision',
    'dl1':'Analytics 40%','dl2':'Automatiz. 23%','dl3':'AI 12%',
    'cas.tag':'Casos de Impacto','cas.h':'Resultados reales,<br>no promesas.',
    'c1.t':'Reduccion tiempos operativos','c1.d':'Analitica y automatizacion en salud, reduciendo tiempos hasta 80%.','c1.s':'Sector Salud',
    'c2.t':'Equipo AI liderado','c2.d':'Equipo multidisciplinario de analytics e IA para multiples lineas de negocio.','c2.s':'Sector Seguros',
    'c3.t':'Lineas de negocio transformadas','c3.d':'Soluciones analiticas en salud y vida, articulando negocio y niveles directivos.','c3.s':'Seguros & Salud',
    'c4.t':'Automatizacion regulatoria','c4.d':'Reporteria regulatoria automatizada en cuentas medicas.','c4.s':'Sector Salud',
    'c5.t':'Dashboards ejecutivos de riesgo','c5.d':'Modelos de pricing, reservas y dashboards para decisiones estrategicas.','c5.s':'Actuaria & Riesgo',
    'c6.t':'Sistema de indicadores','c6.d':'KPIs estrategicos y BI que mejoraron el control presupuestal en salud.','c6.s':'Operaciones',
    'ct.tag':'Contacto','ct.h':'Listo para transformar<br>tu organizacion?',
    'ct.sub':'Sesion de diagnostico gratuita de 30 minutos. Sin compromiso, con valor real.',
    'ct.el':'Email','ct.btn':'Agenda tu sesion gratuita',
    'ft.c':'2026 Felipe Diaz · Analytics & AI · Bogota, Colombia',
    'ft.s':'Transformando organizaciones con datos, automatizacion e inteligencia artificial.',
  },
  en:{
    'nav.about':'About','nav.services':'Services','nav.method':'Method',
    'nav.cases':'Results','nav.contact':'Contact','nav.cta':"Let's Talk",
    'hero.tag':'Analytics & AI Transformation',
    'hero.l1':'Transforming','hero.l2':'organizations','hero.l3':'with data & AI.',
    'hero.sub':'Consultant specialized in Analytics, Artificial Intelligence and Actuarial Risk for Insurance and Healthcare.',
    'hero.cta1':'Book a Session','hero.cta2':'View Services',
    'hero.s1':'Years','hero.s2':'Reduction','hero.s3':'Services','hero.s4':'Sectors',
    'hero.scroll':'Scroll',
    'about.tag':'About Me','about.h':'Business.<br>Data.<br>AI.',
    'about.p1':'I am Felipe Diaz, consultant with over <strong>15 years</strong> leading transformations in <strong>insurance and healthcare</strong>. I started in operations, understood the business from the inside.',
    'about.p2':'My differentiator: I speak the language of business <em>and</em> data. I connect them to generate real financial impact.',
    'edu.1':"Master's in Project Management",'edu.2':'Specialization in Business Intelligence',
    'edu.3':'Industrial Engineering','edu.4':'Big Data & ML — Google Cloud','edu.5':'Chatbots with OpenAI',
    'about.li':'Connect on LinkedIn','about.role':'Analytics & AI Consultant','about.chart':'Cumulative impact',
    'sec.h1':'Healthcare Sector','sec.p1':'Medical billing, IPS networks, budget control and healthcare service analytics.',
    'sec.h2':'Insurance Sector','sec.p2':'Pricing, reserves, actuarial risk and automation of issuance and claims.',
    'sec.h3':'Digital Transformation','sec.p3':'Data-driven strategy, data governance and analytical culture.',
    'svc.tag':'Services','svc.h':'Concrete solutions,<br>not generic consulting.',
    's1.t':'Data & AI Assessment','s1.p':"You don't know how mature your organization is in data.",'s1.l1':'Analytical maturity assessment','s1.l2':'Opportunity mapping','s1.l3':'Prioritized roadmap','s1.r':'Full clarity on where you stand.',
    's2.t':'Process Automation','s2.p':'Manual processes that slow growth.','s2.l1':'Automatable processes','s2.l2':'Intelligent workflows','s2.l3':'Operational burden reduction','s2.r':'Up to 80% reduction in operational time.',
    's3.t':'Business Intelligence','s3.p':'You have data but no actionable information.','s3.l1':'Executive dashboards','s3.l2':'Business KPIs','s3.l3':'Automated reporting','s3.r':'Faster, evidence-based decisions.',
    's4.t':'Analytical Models','s4.p':'Pricing and projections based on intuition.','s4.l1':'Pricing and reserve models','s4.l2':'Financial risk analytics','s4.l3':'Projections and scenarios','s4.r':'Financial sustainability backed by models.',
    's5.t':'Data-Driven Strategy','s5.p':'The organization is not aligned around data.','s5.l1':'Data-driven culture','s5.l2':'Data governance','s5.l3':'Business-technology alignment','s5.r':'An organization that decides with data at every level.',
    's6.t':'AI Applied to Business','s6.p':"You want to use AI but don't know how.",'s6.l1':'Real use cases','s6.l2':'AI model implementation','s6.l3':'Intelligent chatbots','s6.r':'AI with measurable impact, not endless pilots.',
    's7.t':'Actuarial Analytics & Financial Risk','s7.p':'Pricing and risk decisions without robust models.','s7.l1':'Pricing and rate models','s7.l2':'Reserve and claims analysis','s7.l3':'Financial sustainability dashboards','s7.l4':'Predictive risk models','s7.r':'Financial decisions backed by models, not intuition.','s7.badge':'Insurance · Healthcare',
    'mth.tag':'Methodology','mth.h1':'The ','mth.sub':'A proven framework to take your organization from data to real impact.',
    'mth.a1':'Business Analysis','mth.d1':'Business first. We understand context, critical processes and strategic objectives.',
    'mth.a2':'Data Diagnosis','mth.d2':'We assess quality, availability and maturity. We identify gaps and opportunities.',
    'mth.a3':'Automation','mth.d3':'We eliminate manual work and free up operational capacity.',
    'mth.a4':'Advanced Prediction','mth.d4':'Models that anticipate scenarios and generate competitive advantage.',
    'mth.a5':'Organizational Transformation','mth.d5':"We accompany the cultural change so data becomes the organization's DNA.",
    'dk1':'Efficiency','dk2':'Op. Cost','dk3':'Accuracy',
    'dl1':'Analytics 40%','dl2':'Automation 23%','dl3':'AI 12%',
    'cas.tag':'Impact Cases','cas.h':'Real results,<br>not promises.',
    'c1.t':'Reduction in operational time','c1.d':'Analytics and automation in healthcare, reducing management time by 80%.','c1.s':'Healthcare Sector',
    'c2.t':'AI Team Led','c2.d':'Multidisciplinary analytics and AI team for multiple business lines.','c2.s':'Insurance Sector',
    'c3.t':'Business Lines Transformed','c3.d':'Analytical solutions in health and life, connecting business and executive levels.','c3.s':'Insurance & Healthcare',
    'c4.t':'Regulatory Automation','c4.d':'Automated regulatory reporting in medical billing.','c4.s':'Healthcare Sector',
    'c5.t':'Executive Risk Dashboards','c5.d':'Pricing, reserve models and dashboards for strategic decisions.','c5.s':'Actuarial & Risk',
    'c6.t':'KPI System','c6.d':'Strategic KPIs and BI that improved budget control in healthcare.','c6.s':'Operations',
    'ct.tag':'Contact','ct.h':'Ready to transform<br>your organization?',
    'ct.sub':'Free 30-minute diagnostic session. No commitment, real value.',
    'ct.el':'Email','ct.btn':'Book your free session',
    'ft.c':'2026 Felipe Diaz · Analytics & AI · Bogota, Colombia',
    'ft.s':'Transforming organizations with data, automation and artificial intelligence.',
  }
};

let lang = 'es';
function applyLang(l) {
  const t = T[l];
  document.querySelectorAll('[data-i18n]').forEach(el => { if(t[el.dataset.i18n]!==undefined) el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { if(t[el.dataset.i18nHtml]!==undefined) el.innerHTML = t[el.dataset.i18nHtml]; });
  document.documentElement.lang = l;
  const btn = document.getElementById('langBtn');
  if(btn){ btn.querySelector('.lang-active').textContent = l.toUpperCase(); btn.querySelector('.lang-other').textContent = l==='es'?'EN':'ES'; }
}
document.getElementById('langBtn')?.addEventListener('click',()=>{ lang=lang==='es'?'en':'es'; applyLang(lang); });

// ── CUSTOM CURSOR ──────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx=0,my=0,fx=0,fy=0;
document.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; if(cursor){ cursor.style.left=mx+'px'; cursor.style.top=my+'px'; } });
function animFollower(){ fx+=(mx-fx)*0.12; fy+=(my-fy)*0.12; if(follower){ follower.style.left=fx+'px'; follower.style.top=fy+'px'; } requestAnimationFrame(animFollower); }
animFollower();

// ── SCROLL PROGRESS ───────────────────────────────────────────
const prog = document.getElementById('progress');
window.addEventListener('scroll',()=>{ if(prog) prog.style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight)*100)+'%'; },{passive:true});

// ── NAV ───────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll',()=>{ nav?.classList.toggle('stuck',window.scrollY>60); },{passive:true});
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger?.addEventListener('click',()=>{
  const open = navLinks.classList.toggle('open');
  const s = burger.querySelectorAll('span');
  if(open){ s[0].style.transform='rotate(45deg) translate(5px,5px)'; s[1].style.opacity='0'; }
  else{ s[0].style.transform=''; s[1].style.opacity='1'; }
});
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ navLinks.classList.remove('open'); burger.querySelectorAll('span').forEach(s=>{ s.style.transform=''; s.style.opacity='1'; }); }));

// ── HERO CANVAS — Flowing gradient mesh ───────────────────────
(function(){
  const canvas = document.getElementById('heroCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W,H,t=0;
  function resize(){ W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; }
  resize(); window.addEventListener('resize',resize);

  const orbs = [
    {x:0.7,y:0.3,r:0.45,c:'rgba(124,109,250,',a:0.18,sx:0.0003,sy:0.0002},
    {x:0.2,y:0.7,r:0.35,c:'rgba(0,200,150,',a:0.13,sx:-0.0002,sy:0.0003},
    {x:0.5,y:0.5,r:0.25,c:'rgba(255,55,95,',a:0.07,sx:0.0004,sy:-0.0003},
    {x:0.85,y:0.8,r:0.3,c:'rgba(124,109,250,',a:0.1,sx:-0.0003,sy:-0.0002},
  ];

  // Particles
  const pts = Array.from({length:60},()=>({
    x:Math.random()*1,y:Math.random()*1,
    vx:(Math.random()-0.5)*0.0002,vy:(Math.random()-0.5)*0.0002,
    r:Math.random()*1.2+0.3,a:Math.random()*0.4+0.1,
    c:['rgba(124,109,250,','rgba(0,200,150,','rgba(255,55,95,'][Math.floor(Math.random()*3)]
  }));

  function draw(){
    ctx.clearRect(0,0,W,H);
    t++;

    // Orbs
    orbs.forEach(o=>{
      o.x += o.sx; o.y += o.sy;
      if(o.x<-0.2||o.x>1.2) o.sx*=-1;
      if(o.y<-0.2||o.y>1.2) o.sy*=-1;
      const grd = ctx.createRadialGradient(o.x*W,o.y*H,0,o.x*W,o.y*H,o.r*Math.min(W,H));
      grd.addColorStop(0,o.c+o.a+')');
      grd.addColorStop(1,o.c+'0)');
      ctx.fillStyle=grd;
      ctx.beginPath();
      ctx.arc(o.x*W,o.y*H,o.r*Math.min(W,H),0,Math.PI*2);
      ctx.fill();
    });

    // Particles + connections
    pts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>1) p.vx*=-1;
      if(p.y<0||p.y>1) p.vy*=-1;
      ctx.beginPath();
      ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2);
      ctx.fillStyle=p.c+p.a+')';
      ctx.fill();
    });
    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
      const dx=(pts[i].x-pts[j].x)*W, dy=(pts[i].y-pts[j].y)*H;
      const d=Math.sqrt(dx*dx+dy*dy);
      if(d<120){ ctx.beginPath(); ctx.moveTo(pts[i].x*W,pts[i].y*H); ctx.lineTo(pts[j].x*W,pts[j].y*H); ctx.strokeStyle=`rgba(124,109,250,${0.04*(1-d/120)})`; ctx.lineWidth=0.5; ctx.stroke(); }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── GSAP ANIMATIONS ───────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

// Hero entrance
const tl = gsap.timeline({defaults:{ease:'power3.out'}});
tl.to('#heroTag',{opacity:1,y:0,duration:0.8,delay:0.3})
  .to('.ht-line',{opacity:1,y:0,clipPath:'inset(0 0 0% 0)',duration:1,stagger:0.15,ease:'power4.out'},'-=0.4')
  .to('.hero-divider',{opacity:1,y:0,duration:0.7},'-=0.2')
  .to('#heroActions',{opacity:1,y:0,duration:0.6},'-=0.3')
  .to('#heroStats',{opacity:1,y:0,duration:0.6},'-=0.3')
  .to('.hero-scroll-hint',{opacity:1,duration:0.5},'-=0.2')
  .to('#heroBadgeFloat',{opacity:1,x:0,duration:0.8,ease:'power3.out'},'-=0.8');

// Counter animation
function animCount(el){
  const to = +el.dataset.to;
  gsap.fromTo(el,{textContent:0},{textContent:to,duration:2,ease:'power2.out',snap:{textContent:1},
    scrollTrigger:{trigger:el,start:'top 85%',once:true}});
}
document.querySelectorAll('.count').forEach(animCount);

// About
gsap.from('.about-left',{opacity:0,x:-60,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.about',start:'top 75%'}});
gsap.from('.about-right',{opacity:0,x:60,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.about',start:'top 75%'}});

// Sectors
gsap.from('.sector-item',{opacity:0,y:40,duration:0.7,stagger:0.12,ease:'power3.out',
  scrollTrigger:{trigger:'.sectors',start:'top 80%'}});

// Services
gsap.from('.svc-card',{opacity:0,y:50,duration:0.7,stagger:0.08,ease:'power3.out',
  scrollTrigger:{trigger:'.services',start:'top 75%'}});

// Method
gsap.from('.method-left',{opacity:0,x:-50,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.method',start:'top 75%'}});
gsap.from('.method-right',{opacity:0,x:50,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.method',start:'top 75%'}});
gsap.from('.adapt-step',{opacity:0,x:-30,duration:0.6,stagger:0.1,ease:'power3.out',
  scrollTrigger:{trigger:'.adapt-steps',start:'top 80%'}});

// Cases
gsap.from('.case-card',{opacity:0,y:40,duration:0.7,stagger:0.08,ease:'power3.out',
  scrollTrigger:{trigger:'.cases',start:'top 80%'}});

// Contact
gsap.from('.contact-inner > *',{opacity:0,y:30,duration:0.7,stagger:0.1,ease:'power3.out',
  scrollTrigger:{trigger:'.contact',start:'top 80%'}});

// Parallax hero title on scroll
gsap.to('.hero-title',{yPercent:-15,ease:'none',
  scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
gsap.to('.hero-sub',{yPercent:-8,opacity:0,ease:'none',
  scrollTrigger:{trigger:'.hero',start:'top top',end:'60% top',scrub:true}});

// Section titles split reveal
document.querySelectorAll('.section-h').forEach(el=>{
  gsap.from(el,{opacity:0,y:40,duration:0.9,ease:'power3.out',
    scrollTrigger:{trigger:el,start:'top 85%',once:true}});
});

// Set initial state for badge float
gsap.set('#heroBadgeFloat', {x: 30});

// Active nav
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll',()=>{
  let cur='';
  sections.forEach(s=>{ if(window.scrollY>=s.offsetTop-150) cur=s.id; });
  navAs.forEach(a=>{ a.style.color = a.getAttribute('href')==='#'+cur?'var(--white)':''; });
},{passive:true});
