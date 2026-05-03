// ===========================
// TRANSLATIONS (ES / EN)
// ===========================
const translations = {
  es: {
    // NAV
    'nav.about': 'Sobre mí',
    'nav.services': 'Servicios',
    'nav.method': 'Metodología',
    'nav.cases': 'Casos',
    'nav.cta': 'Hablemos',
    // HERO
    'hero.badge': 'Analytics & AI Transformation',
    'hero.title': 'Convierto datos en',
    'hero.title.span': 'decisiones que generan impacto.',
    'hero.sub': 'Ayudo a organizaciones de <strong>seguros y salud</strong> a transformar sus operaciones con analítica avanzada, automatización e inteligencia artificial — con foco en resultados financieros y eficiencia real.',
    'hero.btn1': 'Agenda una sesión',
    'hero.btn2': 'Ver servicios',
    'hero.stat1': 'Años de experiencia',
    'hero.stat2': 'Reducción tiempos operativos',
    'hero.stat3': 'Sectores especializados',
    // NICHES
    'niches.label': 'Especialización sectorial',
    'niches.health.title': 'Sector Salud',
    'niches.health.desc': 'Cuentas médicas, redes IPS, gestión de prestadores, control presupuestal y analítica de servicios de salud.',
    'niches.insurance.title': 'Sector Seguros',
    'niches.insurance.desc': 'Pricing, reservas, riesgo actuarial, automatización de procesos de emisión e indemnización.',
    'niches.digital.title': 'Transformación Digital',
    'niches.digital.desc': 'Estrategia data-driven, gobierno del dato y cultura analítica para organizaciones en evolución.',
    // ABOUT
    'about.tag': 'Sobre mí',
    'about.title': 'Negocio + Datos + AI.<br />Los tres juntos.',
    'about.p1': 'Soy Felipe Díaz, consultor en Analytics &amp; AI con más de 15 años de experiencia liderando transformaciones en los sectores de <strong>seguros y salud</strong>. Empecé en operaciones, entendí el negocio desde adentro, y evolucioné hacia el liderazgo de soluciones analíticas de alto impacto.',
    'about.p2': 'He liderado equipos multidisciplinarios articulando tecnología, analítica y estrategia con vicepresidencias y áreas de negocio. Mi diferencial es que hablo el idioma del negocio <em>y</em> el de los datos — y los conecto para generar resultados reales.',
    'about.edu1': 'Magíster en Gerencia de Proyectos — Politécnico Grancolombiano',
    'about.edu2': 'Especialización en Inteligencia de Negocios',
    'about.edu3': 'Ingeniería Industrial',
    'about.edu4': 'Big Data &amp; ML con Google Cloud Platform',
    'about.edu5': 'Desarrollo de Chatbots con OpenAI',
    'about.linkedin': 'Conectemos en LinkedIn',
    'about.role': 'Consultor Analytics &amp; AI',
    'about.chart.label': 'Impacto acumulado a lo largo del tiempo',
    // SERVICES
    'services.tag': 'Servicios',
    'services.title': 'Soluciones concretas,<br />no consultoría genérica.',
    'services.sub': 'Cada servicio está diseñado para resolver un problema real de negocio con datos e inteligencia artificial — con experiencia probada en seguros y salud.',
    'services.callout.health.title': 'Especialización en Salud',
    'services.callout.health.desc': 'Cuentas médicas, redes de prestadores, control presupuestal, analítica de servicios y automatización de reportes regulatorios.',
    'services.callout.insurance.title': 'Especialización en Seguros',
    'services.callout.insurance.desc': 'Pricing, reservas, riesgo actuarial, emisión, indemnización y modelos de sostenibilidad financiera.',
    // SERVICE 1
    's1.title': 'Diagnóstico Data &amp; AI',
    's1.problem': '<strong>Problema:</strong> No sabes qué tan madura es tu organización en datos ni por dónde empezar.',
    's1.li1': 'Evaluación de madurez analítica',
    's1.li2': 'Mapa de oportunidades de automatización',
    's1.li3': 'Hoja de ruta priorizada',
    's1.benefit': '✦ Claridad total sobre dónde estás y qué hacer primero.',
    // SERVICE 2
    's2.title': 'Automatización de Procesos',
    's2.problem': '<strong>Problema:</strong> Procesos manuales que consumen tiempo, generan errores y frenan el crecimiento.',
    's2.li1': 'Identificación de procesos automatizables',
    's2.li2': 'Implementación de flujos inteligentes',
    's2.li3': 'Reducción de carga operativa',
    's2.benefit': '✦ Hasta 80% de reducción en tiempos operativos.',
    // SERVICE 3
    's3.title': 'Business Intelligence Estratégico',
    's3.problem': '<strong>Problema:</strong> Tienes datos pero no información accionable para tomar decisiones.',
    's3.li1': 'Diseño de dashboards ejecutivos',
    's3.li2': 'Definición de KPIs de negocio',
    's3.li3': 'Reportería automatizada',
    's3.benefit': '✦ Decisiones más rápidas y basadas en evidencia.',
    // SERVICE 4
    's4.title': 'Modelos Analíticos de Negocio',
    's4.problem': '<strong>Problema:</strong> Pricing, riesgo y proyecciones financieras basadas en intuición, no en datos.',
    's4.li1': 'Modelos de pricing y reservas',
    's4.li2': 'Analítica de riesgo financiero',
    's4.li3': 'Proyecciones y escenarios',
    's4.benefit': '✦ Sostenibilidad financiera respaldada por modelos.',
    // SERVICE 5
    's5.title': 'Estrategia Data Driven',
    's5.problem': '<strong>Problema:</strong> La organización no está alineada alrededor de los datos como activo estratégico.',
    's5.li1': 'Diseño de cultura data-driven',
    's5.li2': 'Gobierno del dato',
    's5.li3': 'Alineación negocio-tecnología',
    's5.benefit': '✦ Organización que decide con datos en todos los niveles.',
    // SERVICE 6
    's6.title': 'AI Aplicada al Negocio',
    's6.problem': '<strong>Problema:</strong> Quieres usar AI pero no sabes cómo aplicarla a casos reales de tu industria.',
    's6.li1': 'Identificación de casos de uso reales',
    's6.li2': 'Implementación de modelos AI',
    's6.li3': 'Chatbots y automatización inteligente',
    's6.benefit': '✦ AI que genera impacto medible, no proyectos piloto eternos.',
    // SERVICE 7
    's7.title': 'Analítica Actuarial &amp; Riesgo Financiero',
    's7.problem': '<strong>Problema:</strong> Decisiones de pricing, reservas y riesgo tomadas sin modelos robustos ni visibilidad financiera real.',
    's7.li1': 'Modelos de pricing y tarifación',
    's7.li2': 'Análisis de reservas y siniestralidad',
    's7.li3': 'Dashboards de sostenibilidad financiera',
    's7.li4': 'Modelos predictivos de riesgo',
    's7.benefit': '✦ Decisiones financieras respaldadas por modelos, no por intuición.',
    's7.badge': 'Seguros · Salud',
    // METHODOLOGY
    'method.tag': 'Metodología',
    'method.title.plain': 'El Método ',
    'method.sub': 'Un framework probado para llevar a tu organización de los datos al impacto real.',
    'method.a1.title': 'Análisis del Negocio',
    'method.a1.desc': 'Entendemos el contexto, los procesos críticos y los objetivos estratégicos antes de tocar un solo dato. El negocio primero.',
    'method.d.title': 'Diagnóstico de Datos',
    'method.d.desc': 'Evaluamos la calidad, disponibilidad y madurez de los datos. Identificamos brechas y oportunidades concretas.',
    'method.a2.title': 'Automatización de Procesos',
    'method.a2.desc': 'Eliminamos trabajo manual, reducimos errores y liberamos capacidad operativa con automatización inteligente.',
    'method.p.title': 'Predicción y Analítica Avanzada',
    'method.p.desc': 'Construimos modelos que anticipan escenarios, optimizan decisiones y generan ventaja competitiva.',
    'method.t.title': 'Transformación Organizacional',
    'method.t.desc': 'Acompañamos el cambio cultural y estructural para que los datos sean parte del ADN de la organización.',
    'method.dash.kpi1': 'Eficiencia',
    'method.dash.kpi2': 'Costo Op.',
    'method.dash.kpi3': 'Precisión',
    'method.dash.legend1': 'Analytics 40%',
    'method.dash.legend2': 'Automatiz. 23%',
    'method.dash.legend3': 'AI Models 12%',
    // CASES
    'cases.tag': 'Casos de Impacto',
    'cases.title': 'Resultados reales,<br />no promesas.',
    'cases.sub': 'Ejemplos de transformaciones lideradas a lo largo de mi trayectoria en seguros, salud y analítica actuarial.',
    'impact.before': 'Antes',
    'impact.after': 'Después',
    'impact.label': '80% reducción',
    'impact.stat1': 'Procesos automatizados',
    'impact.stat2': 'Modelos analíticos implementados',
    'impact.stat3': 'Tiempo de decisión reducido',
    'c1.title': 'Reducción de tiempos operativos',
    'c1.desc': 'Implementación de analítica operativa y automatización de procesos en servicios de salud, reduciendo tiempos de gestión hasta en un 80%.',
    'c1.sector': 'Sector Salud',
    'c2.title': 'Equipo de Analytics &amp; AI liderado',
    'c2.desc': 'Construcción y liderazgo de equipo multidisciplinario de analytics e IA para múltiples líneas de negocio en el sector asegurador.',
    'c2.sector': 'Sector Seguros',
    'c3.title': 'Líneas de negocio transformadas',
    'c3.desc': 'Integración de soluciones analíticas en salud (emisión, indemnización, red IPS) y vida, articulando negocio, operaciones y niveles directivos.',
    'c3.sector': 'Seguros &amp; Salud',
    'c4.title': 'Automatización de reportes regulatorios',
    'c4.desc': 'Estructuración de datasets y automatización de reportería regulatoria en cuentas médicas, mejorando disponibilidad de información estratégica.',
    'c4.sector': 'Sector Salud',
    'c5.title': 'Dashboards ejecutivos de riesgo',
    'c5.desc': 'Desarrollo de modelos de pricing, reservas y dashboards ejecutivos para la toma de decisiones estratégicas en el negocio asegurador.',
    'c5.sector': 'Actuaría &amp; Riesgo',
    'c6.title': 'Sistema de indicadores estratégicos',
    'c6.desc': 'Implementación de KPIs estratégicos y herramientas BI que mejoraron el control presupuestal y la calidad del servicio en operaciones de salud.',
    'c6.sector': 'Operaciones',
    'c7.title': 'Modelos actuariales de pricing y reservas',
    'c7.desc': 'Desarrollo de modelos de pricing, análisis de siniestralidad y dashboards de sostenibilidad financiera para la toma de decisiones estratégicas en el negocio asegurador.',
    'c7.sector': 'Actuaría &amp; Riesgo',
    // CONTACT
    'contact.tag': 'Contacto',
    'contact.title': '¿Listo para transformar<br />tu organización con datos?',
    'contact.sub': 'Agenda una sesión de diagnóstico gratuita de 30 minutos. Sin compromiso, con valor real.',
    'contact.email.label': 'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.btn': 'Agenda tu sesión gratuita →',
    // FOOTER
    'footer.text': '© 2026 Felipe Díaz · Analytics &amp; AI Transformation · Bogotá, Colombia',
    'footer.sub': 'Transformando organizaciones con datos, automatización e inteligencia artificial.',
  },
  en: {
    // NAV
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.method': 'Methodology',
    'nav.cases': 'Results',
    'nav.cta': "Let's Talk",
    // HERO
    'hero.badge': 'Analytics & AI Transformation',
    'hero.title': 'I turn data into',
    'hero.title.span': 'decisions that drive impact.',
    'hero.sub': 'I help <strong>insurance and healthcare</strong> organizations transform their operations with advanced analytics, automation and AI — focused on financial results and real efficiency.',
    'hero.btn1': 'Book a Session',
    'hero.btn2': 'View Services',
    'hero.stat1': 'Years of experience',
    'hero.stat2': 'Reduction in operational time',
    'hero.stat3': 'Specialized sectors',
    // NICHES
    'niches.label': 'Sector Specialization',
    'niches.health.title': 'Healthcare Sector',
    'niches.health.desc': 'Medical billing, IPS networks, provider management, budget control and healthcare service analytics.',
    'niches.insurance.title': 'Insurance Sector',
    'niches.insurance.desc': 'Pricing, reserves, actuarial risk, automation of issuance and claims processes.',
    'niches.digital.title': 'Digital Transformation',
    'niches.digital.desc': 'Data-driven strategy, data governance and analytical culture for evolving organizations.',
    // ABOUT
    'about.tag': 'About Me',
    'about.title': 'Business + Data + AI.<br />All three together.',
    'about.p1': "I'm Felipe Díaz, an Analytics &amp; AI consultant with over 15 years of experience leading transformations in the <strong>insurance and healthcare</strong> sectors. I started in operations, understood the business from the inside, and evolved into leading high-impact analytical solutions.",
    'about.p2': 'I have led multidisciplinary teams connecting technology, analytics and strategy with executive leadership and business units. My differentiator is that I speak the language of business <em>and</em> data — and I bridge them to generate real results.',
    'about.edu1': "Master's in Project Management — Politécnico Grancolombiano",
    'about.edu2': 'Specialization in Business Intelligence',
    'about.edu3': 'Industrial Engineering',
    'about.edu4': 'Big Data &amp; ML with Google Cloud Platform',
    'about.edu5': 'Chatbot Development with OpenAI',
    'about.linkedin': 'Connect on LinkedIn',
    'about.role': 'Analytics &amp; AI Consultant',
    'about.chart.label': 'Cumulative impact over time',
    // SERVICES
    'services.tag': 'Services',
    'services.title': 'Concrete solutions,<br />not generic consulting.',
    'services.sub': 'Each service is designed to solve a real business problem with data and AI — with proven experience in insurance and healthcare.',
    'services.callout.health.title': 'Healthcare Specialization',
    'services.callout.health.desc': 'Medical billing, provider networks, budget control, service analytics and regulatory report automation.',
    'services.callout.insurance.title': 'Insurance Specialization',
    'services.callout.insurance.desc': 'Pricing, reserves, actuarial risk, issuance, claims and financial sustainability models.',
    // SERVICE 1
    's1.title': 'Data &amp; AI Assessment',
    's1.problem': "<strong>Challenge:</strong> You don't know how mature your organization is in data or where to start.",
    's1.li1': 'Analytical maturity assessment',
    's1.li2': 'Automation opportunity mapping',
    's1.li3': 'Prioritized roadmap',
    's1.benefit': '✦ Full clarity on where you stand and what to do first.',
    // SERVICE 2
    's2.title': 'Process Automation',
    's2.problem': '<strong>Challenge:</strong> Manual processes that consume time, generate errors and slow growth.',
    's2.li1': 'Identification of automatable processes',
    's2.li2': 'Implementation of intelligent workflows',
    's2.li3': 'Reduction of operational burden',
    's2.benefit': '✦ Up to 80% reduction in operational time.',
    // SERVICE 3
    's3.title': 'Strategic Business Intelligence',
    's3.problem': '<strong>Challenge:</strong> You have data but no actionable information to make decisions.',
    's3.li1': 'Executive dashboard design',
    's3.li2': 'Business KPI definition',
    's3.li3': 'Automated reporting',
    's3.benefit': '✦ Faster, evidence-based decisions.',
    // SERVICE 4
    's4.title': 'Business Analytical Models',
    's4.problem': '<strong>Challenge:</strong> Pricing, risk and financial projections based on intuition, not data.',
    's4.li1': 'Pricing and reserve models',
    's4.li2': 'Financial risk analytics',
    's4.li3': 'Projections and scenarios',
    's4.benefit': '✦ Financial sustainability backed by models.',
    // SERVICE 5
    's5.title': 'Data-Driven Strategy',
    's5.problem': '<strong>Challenge:</strong> The organization is not aligned around data as a strategic asset.',
    's5.li1': 'Data-driven culture design',
    's5.li2': 'Data governance',
    's5.li3': 'Business-technology alignment',
    's5.benefit': '✦ An organization that decides with data at every level.',
    // SERVICE 6
    's6.title': 'AI Applied to Business',
    's6.problem': "<strong>Challenge:</strong> You want to use AI but don't know how to apply it to real cases in your industry.",
    's6.li1': 'Real use case identification',
    's6.li2': 'AI model implementation',
    's6.li3': 'Chatbots and intelligent automation',
    's6.benefit': '✦ AI that generates measurable impact, not endless pilots.',
    // SERVICE 7
    's7.title': 'Actuarial Analytics &amp; Financial Risk',
    's7.problem': '<strong>Challenge:</strong> Pricing, reserve and risk decisions made without robust models or real financial visibility.',
    's7.li1': 'Pricing and rate models',
    's7.li2': 'Reserve and claims analysis',
    's7.li3': 'Financial sustainability dashboards',
    's7.li4': 'Predictive risk models',
    's7.benefit': '✦ Financial decisions backed by models, not intuition.',
    's7.badge': 'Insurance · Healthcare',
    // METHODOLOGY
    'method.tag': 'Methodology',
    'method.title.plain': 'The ',
    'method.sub': 'A proven framework to take your organization from data to real impact.',
    'method.a1.title': 'Business Analysis',
    'method.a1.desc': 'We understand the context, critical processes and strategic objectives before touching a single data point. Business first.',
    'method.d.title': 'Data Diagnosis',
    'method.d.desc': 'We assess data quality, availability and maturity. We identify gaps and concrete opportunities.',
    'method.a2.title': 'Process Automation',
    'method.a2.desc': 'We eliminate manual work, reduce errors and free up operational capacity with intelligent automation.',
    'method.p.title': 'Prediction & Advanced Analytics',
    'method.p.desc': 'We build models that anticipate scenarios, optimize decisions and generate competitive advantage.',
    'method.t.title': 'Organizational Transformation',
    'method.t.desc': "We accompany the cultural and structural change so that data becomes part of the organization's DNA.",
    'method.dash.kpi1': 'Efficiency',
    'method.dash.kpi2': 'Op. Cost',
    'method.dash.kpi3': 'Accuracy',
    'method.dash.legend1': 'Analytics 40%',
    'method.dash.legend2': 'Automation 23%',
    'method.dash.legend3': 'AI Models 12%',
    // CASES
    'cases.tag': 'Impact Cases',
    'cases.title': 'Real results,<br />not promises.',
    'cases.sub': 'Examples of transformations led throughout my career in insurance, healthcare and actuarial analytics.',
    'impact.before': 'Before',
    'impact.after': 'After',
    'impact.label': '80% reduction',
    'impact.stat1': 'Automated processes',
    'impact.stat2': 'Analytical models implemented',
    'impact.stat3': 'Decision time reduced',
    'c1.title': 'Reduction in operational time',
    'c1.desc': 'Implementation of operational analytics and process automation in healthcare services, reducing management time by up to 80%.',
    'c1.sector': 'Healthcare Sector',
    'c2.title': 'Analytics &amp; AI Team Led',
    'c2.desc': 'Building and leading a multidisciplinary analytics and AI team for multiple business lines in the insurance sector.',
    'c2.sector': 'Insurance Sector',
    'c3.title': 'Business Lines Transformed',
    'c3.desc': 'Integration of analytical solutions in health (issuance, claims, IPS network) and life, connecting business, operations and executive levels.',
    'c3.sector': 'Insurance &amp; Healthcare',
    'c4.title': 'Regulatory Report Automation',
    'c4.desc': 'Dataset structuring and automation of regulatory reporting in medical billing, improving strategic information availability.',
    'c4.sector': 'Healthcare Sector',
    'c5.title': 'Executive Risk Dashboards',
    'c5.desc': 'Development of pricing, reserve models and executive dashboards for strategic decision-making in the insurance business.',
    'c5.sector': 'Actuarial &amp; Risk',
    'c6.title': 'Strategic KPI System',
    'c6.desc': 'Implementation of strategic KPIs and BI tools that improved budget control and service quality in healthcare operations.',
    'c6.sector': 'Operations',
    'c7.title': 'Actuarial Pricing & Reserve Models',
    'c7.desc': 'Development of pricing models, claims analysis and financial sustainability dashboards for strategic decision-making in the insurance business.',
    'c7.sector': 'Actuarial &amp; Risk',
    // CONTACT
    'contact.tag': 'Contact',
    'contact.title': 'Ready to transform<br />your organization with data?',
    'contact.sub': 'Book a free 30-minute diagnostic session. No commitment, real value.',
    'contact.email.label': 'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.btn': 'Book your free session →',
    // FOOTER
    'footer.text': '© 2026 Felipe Díaz · Analytics &amp; AI Transformation · Bogotá, Colombia',
    'footer.sub': 'Transforming organizations with data, automation and artificial intelligence.',
  },
};

let currentLang = 'es';

// ===========================
// APPLY LANGUAGE
// ===========================
function applyLang(lang) {
  const t = translations[lang];

  // Plain text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML content elements (contain <strong>, <em>, <br>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // SVG <text> elements with data-i18n (impact visual)
  document.querySelectorAll('text[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update <html lang> attribute
  document.documentElement.lang = lang;

  // Update toggle button: active = current lang, inactive = other
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    const active = toggle.querySelector('.lang-toggle__active');
    const inactive = toggle.querySelector('.lang-toggle__inactive');
    if (active) active.textContent = lang.toUpperCase();
    if (inactive) inactive.textContent = lang === 'es' ? 'EN' : 'ES';
  }
}

// ===========================
// LANG TOGGLE BUTTON
// ===========================
const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyLang(currentLang);
  });
}

// ===========================
// PARTICLES CANVAS
// ===========================
(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = ['rgba(108,99,255,', 'rgba(0,212,170,', 'rgba(255,107,157,'];

  function createParticle() {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      color,
    };
  }

  for (let i = 0; i < 80; i++) particles.push(createParticle());

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });

    // Draw faint connecting lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(108,99,255,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
})();

// ===========================
// NAV SCROLL EFFECT
// ===========================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ===========================
// MOBILE BURGER MENU
// ===========================
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav__links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  burger.setAttribute('aria-expanded', isOpen);
  const spans = burger.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = burger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ===========================
// SCROLL ANIMATIONS
// ===========================
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const animateEls = document.querySelectorAll(
  '.service-card, .case-card, .method__step, .about__card, .contact__card, .niche-card'
);

animateEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`;
  observer.observe(el);
});

// ===========================
// COUNTER ANIMATION
// ===========================
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// ===========================
// ACTIVE NAV HIGHLIGHT
// ===========================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 130) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === `#${current}`) {
      a.style.color = 'var(--text)';
    }
  });
}, { passive: true });
