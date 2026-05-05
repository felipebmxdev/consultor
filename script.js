// ============================================================
// FELIPE DIAZ — Premium Site JS
// ============================================================

// ── TRANSLATIONS ──────────────────────────────────────────
const T = {
  es: {
    'nav.about':'Sobre mi','nav.services':'Servicios','nav.method':'Metodologia',
    'nav.cases':'Casos','nav.contact':'Contacto','nav.cta':'Hablemos',
    'hero.badge':'Analytics & AI Transformation',
    'hero.title1':'Transformando organizaciones',
    'hero.title2':'con datos & AI.',
    'hero.sub':'Consultor especializado en Analytics, Inteligencia Artificial y Riesgo Actuarial para los sectores de Seguros y Salud.',
    'hero.btn1':'Agenda una sesion','hero.btn2':'Ver servicios',
    'hero.stat1':'Anos experiencia','hero.stat2':'Reduccion tiempos',
    'hero.stat3':'Servicios','hero.stat4':'Sectores',
    'about.tag':'Sobre mi',
    'about.title':'Negocio. Datos. AI.<br/>Los tres juntos.',
    'about.p1':'Soy Felipe Diaz, consultor en Analytics &amp; AI con mas de 15 anos de experiencia liderando transformaciones en los sectores de <strong>seguros y salud</strong>. Empece en operaciones, entendi el negocio desde adentro, y evolucione hacia el liderazgo de soluciones analiticas de alto impacto.',
    'about.p2':'He liderado equipos multidisciplinarios articulando tecnologia, analitica y estrategia con vicepresidencias y areas de negocio. Mi diferencial es que hablo el idioma del negocio <em>y</em> el de los datos.',
    'about.edu1':'Magister en Gerencia de Proyectos — Politecnico Grancolombiano',
    'about.edu2':'Especializacion en Inteligencia de Negocios',
    'about.edu3':'Ingenieria Industrial',
    'about.edu4':'Big Data &amp; ML con Google Cloud Platform',
    'about.edu5':'Desarrollo de Chatbots con OpenAI',
    'about.linkedin':'Conectemos en LinkedIn',
    'about.role':'Consultor Analytics &amp; AI',
    'about.chartLabel':'Impacto acumulado',
    'sector.health.title':'Sector Salud',
    'sector.health.desc':'Cuentas medicas, redes IPS, gestion de prestadores, control presupuestal y analitica de servicios.',
    'sector.insurance.title':'Sector Seguros',
    'sector.insurance.desc':'Pricing, reservas, riesgo actuarial, automatizacion de emision e indemnizacion.',
    'sector.digital.title':'Transformacion Digital',
    'sector.digital.desc':'Estrategia data-driven, gobierno del dato y cultura analitica para organizaciones en evolucion.',
    'services.tag':'Servicios',
    'services.title':'Soluciones concretas,<br/>no consultoria generica.',
    'services.sub':'Cada servicio resuelve un problema real de negocio con datos e inteligencia artificial.',
    's1.title':'Diagnostico Data &amp; AI','s1.problem':'No sabes que tan madura es tu organizacion en datos ni por donde empezar.',
    's1.li1':'Evaluacion de madurez analitica','s1.li2':'Mapa de oportunidades de automatizacion','s1.li3':'Hoja de ruta priorizada',
    's1.benefit':'Claridad total sobre donde estas y que hacer primero.',
    's2.title':'Automatizacion de Procesos','s2.problem':'Procesos manuales que consumen tiempo, generan errores y frenan el crecimiento.',
    's2.li1':'Identificacion de procesos automatizables','s2.li2':'Implementacion de flujos inteligentes','s2.li3':'Reduccion de carga operativa',
    's2.benefit':'Hasta 80% de reduccion en tiempos operativos.',
    's3.title':'Business Intelligence Estrategico','s3.problem':'Tienes datos pero no informacion accionable para tomar decisiones.',
    's3.li1':'Diseno de dashboards ejecutivos','s3.li2':'Definicion de KPIs de negocio','s3.li3':'Reporteria automatizada',
    's3.benefit':'Decisiones mas rapidas y basadas en evidencia.',
    's4.title':'Modelos Analiticos de Negocio','s4.problem':'Pricing, riesgo y proyecciones financieras basadas en intuicion, no en datos.',
    's4.li1':'Modelos de pricing y reservas','s4.li2':'Analitica de riesgo financiero','s4.li3':'Proyecciones y escenarios',
    's4.benefit':'Sostenibilidad financiera respaldada por modelos.',
    's5.title':'Estrategia Data Driven','s5.problem':'La organizacion no esta alineada alrededor de los datos como activo estrategico.',
    's5.li1':'Diseno de cultura data-driven','s5.li2':'Gobierno del dato','s5.li3':'Alineacion negocio-tecnologia',
    's5.benefit':'Organizacion que decide con datos en todos los niveles.',
    's6.title':'AI Aplicada al Negocio','s6.problem':'Quieres usar AI pero no sabes como aplicarla a casos reales de tu industria.',
    's6.li1':'Identificacion de casos de uso reales','s6.li2':'Implementacion de modelos AI','s6.li3':'Chatbots y automatizacion inteligente',
    's6.benefit':'AI que genera impacto medible, no proyectos piloto eternos.',
    's7.title':'Analitica Actuarial &amp; Riesgo Financiero',
    's7.problem':'Decisiones de pricing, reservas y riesgo tomadas sin modelos robustos ni visibilidad financiera real.',
    's7.li1':'Modelos de pricing y tarifacion','s7.li2':'Analisis de reservas y siniestralidad',
    's7.li3':'Dashboards de sostenibilidad financiera','s7.li4':'Modelos predictivos de riesgo',
    's7.benefit':'Decisiones financieras respaldadas por modelos, no por intuicion.',
    's7.badge':'Seguros · Salud',
    'method.tag':'Metodologia','method.title1':'El Metodo ',
    'method.sub':'Un framework probado para llevar tu organizacion de los datos al impacto real.',
    'method.a1.title':'Analisis del Negocio','method.a1.desc':'Entendemos el contexto, los procesos criticos y los objetivos estrategicos antes de tocar un solo dato.',
    'method.d.title':'Diagnostico de Datos','method.d.desc':'Evaluamos la calidad, disponibilidad y madurez de los datos. Identificamos brechas y oportunidades.',
    'method.a2.title':'Automatizacion de Procesos','method.a2.desc':'Eliminamos trabajo manual, reducimos errores y liberamos capacidad operativa.',
    'method.p.title':'Prediccion y Analitica Avanzada','method.p.desc':'Construimos modelos que anticipan escenarios, optimizan decisiones y generan ventaja competitiva.',
    'method.t.title':'Transformacion Organizacional','method.t.desc':'Acompanamos el cambio cultural para que los datos sean parte del ADN de la organizacion.',
    'dash.kpi1':'Eficiencia','dash.kpi2':'Costo Op.','dash.kpi3':'Precision',
    'dash.l1':'Analytics 40%','dash.l2':'Automatiz. 23%','dash.l3':'AI Models 12%',
    'cases.tag':'Casos de Impacto','cases.title':'Resultados reales,<br/>no promesas.',
    'cases.sub':'Transformaciones lideradas en seguros, salud y analitica actuarial.',
    'c1.title':'Reduccion de tiempos operativos','c1.desc':'Analitica operativa y automatizacion en servicios de salud, reduciendo tiempos de gestion hasta en un 80%.','c1.sector':'Sector Salud',
    'c2.title':'Equipo Analytics &amp; AI liderado','c2.desc':'Construccion y liderazgo de equipo multidisciplinario para multiples lineas de negocio asegurador.','c2.sector':'Sector Seguros',
    'c3.title':'Lineas de negocio transformadas','c3.desc':'Integracion de soluciones analiticas en salud y vida, articulando negocio, operaciones y niveles directivos.','c3.sector':'Seguros &amp; Salud',
    'c4.title':'Automatizacion reportes regulatorios','c4.desc':'Automatizacion de reporteria regulatoria en cuentas medicas, mejorando disponibilidad de informacion estrategica.','c4.sector':'Sector Salud',
    'c5.title':'Dashboards ejecutivos de riesgo','c5.desc':'Modelos de pricing, reservas y dashboards ejecutivos para decisiones estrategicas en el negocio asegurador.','c5.sector':'Actuaria &amp; Riesgo',
    'c6.title':'Sistema de indicadores estrategicos','c6.desc':'KPIs estrategicos y herramientas BI que mejoraron el control presupuestal en operaciones de salud.','c6.sector':'Operaciones',
    'c7.title':'Modelos actuariales de pricing y reservas','c7.desc':'Modelos de pricing, analisis de siniestralidad y dashboards de sostenibilidad financiera para decisiones estrategicas.','c7.sector':'Actuaria &amp; Riesgo',
    'contact.tag':'Contacto','contact.title':'Listo para transformar<br/>tu organizacion con datos?',
    'contact.sub':'Agenda una sesion de diagnostico gratuita de 30 minutos. Sin compromiso, con valor real.',
    'contact.email.label':'Email','contact.linkedin.label':'LinkedIn',
    'contact.btn':'Agenda tu sesion gratuita',
    'footer.copy':'2026 Felipe Diaz · Analytics &amp; AI Transformation · Bogota, Colombia',
    'footer.sub':'Transformando organizaciones con datos, automatizacion e inteligencia artificial.',
  },
  en: {
    'nav.about':'About','nav.services':'Services','nav.method':'Methodology',
    'nav.cases':'Results','nav.contact':'Contact','nav.cta':"Let's Talk",
    'hero.badge':'Analytics & AI Transformation',
    'hero.title1':'Transforming organizations',
    'hero.title2':'with data & AI.',
    'hero.sub':'Consultant specialized in Analytics, Artificial Intelligence and Actuarial Risk for the Insurance and Healthcare sectors.',
    'hero.btn1':'Book a Session','hero.btn2':'View Services',
    'hero.stat1':'Years experience','hero.stat2':'Time reduction',
    'hero.stat3':'Services','hero.stat4':'Sectors',
    'about.tag':'About Me',
    'about.title':'Business. Data. AI.<br/>All three together.',
    'about.p1':"I'm Felipe Diaz, an Analytics &amp; AI consultant with over 15 years of experience leading transformations in the <strong>insurance and healthcare</strong> sectors. I started in operations, understood the business from the inside, and evolved into leading high-impact analytical solutions.",
    'about.p2':'I have led multidisciplinary teams connecting technology, analytics and strategy with executive leadership and business units. My differentiator is that I speak the language of business <em>and</em> data.',
    'about.edu1':"Master's in Project Management — Politecnico Grancolombiano",
    'about.edu2':'Specialization in Business Intelligence',
    'about.edu3':'Industrial Engineering',
    'about.edu4':'Big Data &amp; ML with Google Cloud Platform',
    'about.edu5':'Chatbot Development with OpenAI',
    'about.linkedin':'Connect on LinkedIn',
    'about.role':'Analytics &amp; AI Consultant',
    'about.chartLabel':'Cumulative impact',
    'sector.health.title':'Healthcare Sector',
    'sector.health.desc':'Medical billing, IPS networks, provider management, budget control and healthcare service analytics.',
    'sector.insurance.title':'Insurance Sector',
    'sector.insurance.desc':'Pricing, reserves, actuarial risk, automation of issuance and claims processes.',
    'sector.digital.title':'Digital Transformation',
    'sector.digital.desc':'Data-driven strategy, data governance and analytical culture for evolving organizations.',
    'services.tag':'Services',
    'services.title':'Concrete solutions,<br/>not generic consulting.',
    'services.sub':'Each service solves a real business problem with data and artificial intelligence.',
    's1.title':'Data &amp; AI Assessment','s1.problem':"You don't know how mature your organization is in data or where to start.",
    's1.li1':'Analytical maturity assessment','s1.li2':'Automation opportunity mapping','s1.li3':'Prioritized roadmap',
    's1.benefit':'Full clarity on where you stand and what to do first.',
    's2.title':'Process Automation','s2.problem':'Manual processes that consume time, generate errors and slow growth.',
    's2.li1':'Identification of automatable processes','s2.li2':'Implementation of intelligent workflows','s2.li3':'Reduction of operational burden',
    's2.benefit':'Up to 80% reduction in operational time.',
    's3.title':'Strategic Business Intelligence','s3.problem':'You have data but no actionable information to make decisions.',
    's3.li1':'Executive dashboard design','s3.li2':'Business KPI definition','s3.li3':'Automated reporting',
    's3.benefit':'Faster, evidence-based decisions.',
    's4.title':'Business Analytical Models','s4.problem':'Pricing, risk and financial projections based on intuition, not data.',
    's4.li1':'Pricing and reserve models','s4.li2':'Financial risk analytics','s4.li3':'Projections and scenarios',
    's4.benefit':'Financial sustainability backed by models.',
    's5.title':'Data-Driven Strategy','s5.problem':'The organization is not aligned around data as a strategic asset.',
    's5.li1':'Data-driven culture design','s5.li2':'Data governance','s5.li3':'Business-technology alignment',
    's5.benefit':'An organization that decides with data at every level.',
    's6.title':'AI Applied to Business','s6.problem':"You want to use AI but don't know how to apply it to real cases in your industry.",
    's6.li1':'Real use case identification','s6.li2':'AI model implementation','s6.li3':'Chatbots and intelligent automation',
    's6.benefit':'AI that generates measurable impact, not endless pilots.',
    's7.title':'Actuarial Analytics &amp; Financial Risk',
    's7.problem':'Pricing, reserve and risk decisions made without robust models or real financial visibility.',
    's7.li1':'Pricing and rate models','s7.li2':'Reserve and claims analysis',
    's7.li3':'Financial sustainability dashboards','s7.li4':'Predictive risk models',
    's7.benefit':'Financial decisions backed by models, not intuition.',
    's7.badge':'Insurance · Healthcare',
    'method.tag':'Methodology','method.title1':'The ',
    'method.sub':'A proven framework to take your organization from data to real impact.',
    'method.a1.title':'Business Analysis','method.a1.desc':'We understand the context, critical processes and strategic objectives before touching a single data point.',
    'method.d.title':'Data Diagnosis','method.d.desc':'We assess data quality, availability and maturity. We identify gaps and concrete opportunities.',
    'method.a2.title':'Process Automation','method.a2.desc':'We eliminate manual work, reduce errors and free up operational capacity.',
    'method.p.title':'Prediction & Advanced Analytics','method.p.desc':'We build models that anticipate scenarios, optimize decisions and generate competitive advantage.',
    'method.t.title':'Organizational Transformation','method.t.desc':"We accompany the cultural change so that data becomes part of the organization's DNA.",
    'dash.kpi1':'Efficiency','dash.kpi2':'Op. Cost','dash.kpi3':'Accuracy',
    'dash.l1':'Analytics 40%','dash.l2':'Automation 23%','dash.l3':'AI Models 12%',
    'cases.tag':'Impact Cases','cases.title':'Real results,<br/>not promises.',
    'cases.sub':'Transformations led in insurance, healthcare and actuarial analytics.',
    'c1.title':'Reduction in operational time','c1.desc':'Operational analytics and automation in healthcare services, reducing management time by up to 80%.','c1.sector':'Healthcare Sector',
    'c2.title':'Analytics &amp; AI Team Led','c2.desc':'Building and leading a multidisciplinary analytics and AI team for multiple business lines in the insurance sector.','c2.sector':'Insurance Sector',
    'c3.title':'Business Lines Transformed','c3.desc':'Integration of analytical solutions in health and life, connecting business, operations and executive levels.','c3.sector':'Insurance &amp; Healthcare',
    'c4.title':'Regulatory Report Automation','c4.desc':'Automation of regulatory reporting in medical billing, improving strategic information availability.','c4.sector':'Healthcare Sector',
    'c5.title':'Executive Risk Dashboards','c5.desc':'Pricing, reserve models and executive dashboards for strategic decision-making in the insurance business.','c5.sector':'Actuarial &amp; Risk',
    'c6.title':'Strategic KPI System','c6.desc':'Strategic KPIs and BI tools that improved budget control and service quality in healthcare operations.','c6.sector':'Operations',
    'c7.title':'Actuarial Pricing & Reserve Models','c7.desc':'Pricing models, claims analysis and financial sustainability dashboards for strategic decision-making.','c7.sector':'Actuarial &amp; Risk',
    'contact.tag':'Contact','contact.title':'Ready to transform<br/>your organization with data?',
    'contact.sub':'Book a free 30-minute diagnostic session. No commitment, real value.',
    'contact.email.label':'Email','contact.linkedin.label':'LinkedIn',
    'contact.btn':'Book your free session',
    'footer.copy':'2026 Felipe Diaz · Analytics &amp; AI Transformation · Bogota, Colombia',
    'footer.sub':'Transforming organizations with data, automation and artificial intelligence.',
  }
};

let lang = 'es';

function applyLang(l) {
  const t = T[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  document.documentElement.lang = l;
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.querySelector('.lang-toggle__active').textContent = l.toUpperCase();
    btn.querySelector('.lang-toggle__inactive').textContent = l === 'es' ? 'EN' : 'ES';
  }
}

document.getElementById('langToggle')?.addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  applyLang(lang);
});

// ── SCROLL PROGRESS ───────────────────────────────────────
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  if (progressBar) progressBar.style.width = pct + '%';
}, { passive: true });

// ── NAV SCROLL ────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── BURGER ────────────────────────────────────────────────
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  const s = burger.querySelectorAll('span');
  if (open) {
    s[0].style.transform = 'rotate(45deg) translate(5px,5px)';
    s[1].style.opacity = '0';
    s[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
  } else {
    s[0].style.transform = s[1].style.opacity = s[2].style.transform = '';
    s[1].style.opacity = '1';
  }
});
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  const s = burger.querySelectorAll('span');
  s[0].style.transform = s[2].style.transform = '';
  s[1].style.opacity = '1';
}));

// ── PARTICLE CANVAS ───────────────────────────────────────
(function() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const COLORS = ['rgba(124,109,250,','rgba(0,200,150,','rgba(255,55,95,'];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 70; i++) particles.push({
    x: Math.random()*W, y: Math.random()*H,
    r: Math.random()*1.4+0.3,
    vx: (Math.random()-0.5)*0.25, vy: (Math.random()-0.5)*0.25,
    a: Math.random()*0.45+0.1,
    c: COLORS[Math.floor(Math.random()*3)]
  });

  function draw() {
    ctx.clearRect(0,0,W,H);
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = p.c+p.a+')'; ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x<0||p.x>W) p.vx*=-1;
      if (p.y<0||p.y>H) p.vy*=-1;
    });
    for (let i=0;i<particles.length;i++) for (let j=i+1;j<particles.length;j++) {
      const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
      const d=Math.sqrt(dx*dx+dy*dy);
      if (d<110) {
        ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y);
        ctx.lineTo(particles[j].x,particles[j].y);
        ctx.strokeStyle=`rgba(124,109,250,${0.05*(1-d/110)})`;
        ctx.lineWidth=0.5; ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── REVEAL ON SCROLL ──────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = e.target.dataset.delay || 0;
      setTimeout(() => e.target.classList.add('visible'), +delay);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-up,.reveal-left').forEach(el => revealObs.observe(el));

// ── COUNTER ANIMATION ─────────────────────────────────────
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const target = +e.target.dataset.target;
      const start = performance.now();
      const dur = 1800;
      function tick(now) {
        const t = Math.min((now-start)/dur,1);
        const ease = 1-Math.pow(1-t,3);
        e.target.textContent = Math.floor(ease*target);
        if (t<1) requestAnimationFrame(tick);
        else e.target.textContent = target;
      }
      requestAnimationFrame(tick);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));

// ── MAGNETIC BUTTONS ──────────────────────────────────────
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    btn.style.transform = `translate(${x*0.18}px,${y*0.18}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// ── ACTIVE NAV ────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav__links a[href^="#"]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop-140) cur = s.id; });
  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === '#'+cur ? 'var(--text)' : '';
  });
}, { passive: true });
