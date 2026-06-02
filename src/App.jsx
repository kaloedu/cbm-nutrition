import React from "react";
import { ArrowRight, CheckCircle2, Dumbbell, HeartPulse, MessageCircle, Salad, ShieldCheck, Sparkles, Target, Trophy } from "lucide-react";

const LOGO_URL = "/logo-cbm.png";
const PROFILE_IMAGE_URL = "/foto-carlos.jpg";

function CBMLogoMark({ size = "sm", className = "", white = false }) {
  const sizes = {
    sm: "h-10 w-16 sm:h-14 sm:w-24",
    md: "h-14 w-24 sm:h-16 sm:w-28",
    lg: "h-20 w-36",
  };

  return (
    <div className={`relative shrink-0 overflow-hidden ${sizes[size]} ${className}`}>
      <img
        src={LOGO_URL}
        alt="CBM Nutrition"
        className={`absolute left-1/2 top-0 w-full max-w-none -translate-x-1/2 object-contain ${
          white ? "brightness-0 invert" : ""
        }`}
      />
    </div>
  );
}

function BrandName({ variant = "dark" }) {
  const baseColor = variant === "light" ? "text-white" : "text-slate-950";
  const accentColor = variant === "light" ? "text-white" : "text-[#0B1F4D]";

  return (
    <p className={`text-base font-black tracking-tight ${baseColor} sm:text-xl`}>
      CBM <span className={accentColor}>Nutrition</span>
    </p>
  );
}

const WHATSAPP_URL = "https://wa.me/525657007223?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20CBM%20Nutrition%20y%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20nutricional";

const areas = [
  "Composición corporal",
  "Nutrición aplicada al rendimiento físico",
  "Deportes: natación, fútbol, básquetbol, gym y Hyrox",
  "Resistencia a la insulina",
  "Diabetes mellitus",
  "Hipertensión",
  "Síndrome de ovario poliquístico",
];

const helpItems = [
  "Mejorar su composición corporal",
  "Mejorar su rendimiento en el deporte",
  "Optimizar energía, recuperación y alimentación alrededor del entrenamiento",
  "Controlar glucosa, colesterol o presión arterial",
  "Mejorar resistencia a la insulina",
  "Manejar diabetes, hipertensión o SOP",
  "Organizar su alimentación con opciones prácticas",
];

const services = [
  {
    icon: HeartPulse,
    title: "Consulta nutricional clínica",
    text: "Para personas que buscan mejorar su salud metabólica, controlar glucosa, presión arterial, colesterol, triglicéridos o condiciones como resistencia a la insulina, diabetes, hipertensión y SOP.",
    ideal: "Control metabólico, prevención, cambios de hábitos y mejora de salud.",
  },
  {
    icon: Trophy,
    title: "Nutrición deportiva",
    text: "Para personas que entrenan y quieren mejorar su rendimiento, recuperación, composición corporal y alimentación alrededor del ejercicio.",
    ideal: "Entrenamiento, recuperación, rendimiento y alimentación deportiva.",
  },
  {
    icon: Target,
    title: "Mejora de composición corporal",
    text: "Para quienes buscan perder grasa, ganar músculo o mejorar su físico sin dietas extremas ni planes imposibles de seguir.",
    ideal: "Personas que quieren verse, sentirse y rendir mejor.",
  },
  {
    icon: ShieldCheck,
    title: "Seguimiento nutricional personalizado",
    text: "Ajustes periódicos del plan de alimentación según tus avances, rutina, síntomas, entrenamiento y adherencia.",
    ideal: "Mantener progreso real y sostenible.",
  },
];

const process = [
  {
    title: "Evaluación inicial",
    text: "Conocemos tu objetivo, historial clínico, hábitos, horarios, entrenamiento, gustos y necesidades específicas.",
  },
  {
    title: "Plan personalizado",
    text: "Diseño un plan de alimentación adaptado a ti, con opciones realistas, accesibles y sostenibles.",
  },
  {
    title: "Seguimiento y ajustes",
    text: "Revisamos avances, síntomas, adherencia y rendimiento para ajustar el plan según tu progreso.",
  },
  {
    title: "Educación alimentaria",
    text: "Aprendes a tomar mejores decisiones, combinar alimentos y mantener resultados sin depender de dietas extremas.",
  },
];

const sportGoals = [
  "Mejorar energía durante el entrenamiento",
  "Optimizar recuperación",
  "Ajustar alimentación antes, durante y después del ejercicio",
  "Mejorar composición corporal",
  "Reducir fatiga",
  "Preparar competencias o eventos deportivos",
];

const faqs = [
  {
    q: "¿La consulta puede ser online?",
    a: "Sí, puedes recibir atención nutricional online con seguimiento personalizado.",
  },
  {
    q: "¿El plan es personalizado?",
    a: "Sí. El plan se adapta a tu objetivo, horarios, gustos, presupuesto, estado de salud y nivel de actividad física.",
  },
  {
    q: "¿Me vas a quitar todos mis alimentos favoritos?",
    a: "No. La idea es aprender a comer mejor sin depender de dietas extremas o restricciones innecesarias.",
  },
  {
    q: "¿También atiendes deportistas?",
    a: "Sí. La consulta puede adaptarse a distintos deportes y niveles de entrenamiento, ya sea que busques mejorar rendimiento, composición corporal, recuperación o alimentación alrededor del ejercicio.",
  },
  {
    q: "¿Puedo ir si tengo resistencia a la insulina, diabetes, hipertensión o SOP?",
    a: "Sí. La consulta también puede enfocarse en control metabólico y mejora de hábitos alimentarios.",
  },
  {
    q: "¿Cómo puedo agendar?",
    a: "Puedes agendar directamente por WhatsApp desde el botón de la página.",
  },
];

function SectionLabel({ children }) {
  return (
    <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold leading-tight text-cyan-700">
      <Sparkles className="h-4 w-4" />
      {children}
    </span>
  );
}

function WhatsAppLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16.04 3C8.87 3 3.05 8.82 3.05 15.99c0 2.29.6 4.53 1.74 6.5L3 29l6.67-1.75a12.9 12.9 0 0 0 6.37 1.62h.01c7.17 0 12.99-5.82 12.99-12.99C29.04 8.82 23.21 3 16.04 3Zm0 23.68h-.01c-1.9 0-3.77-.51-5.4-1.48l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.76 10.76 0 0 1-1.65-5.76c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.54 3.12a10.6 10.6 0 0 1 3.11 7.53c0 5.88-4.78 10.66-10.65 10.66Zm5.84-7.98c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.73.16-.21.32-.84 1.05-1.03 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.57-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.57.08-.86.4-.3.32-1.14 1.11-1.14 2.71s1.17 3.14 1.33 3.36c.16.21 2.3 3.51 5.57 4.92.78.34 1.39.54 1.86.69.78.25 1.49.21 2.06.13.63-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function InstagramLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ButtonLink({ children, href = WHATSAPP_URL, variant = "primary" }) {
  const base = "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 sm:w-auto";
  const styles =
    variant === "primary"
      ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:bg-cyan-600"
      : "border border-slate-300 bg-white text-slate-900 hover:border-cyan-400 hover:text-cyan-700";
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#F7F0E8] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-[#F7F0E8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2 sm:gap-3 sm:py-3 lg:px-8">
          <a href="#inicio" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="CBM Nutrition - Inicio">
            <CBMLogoMark size="sm" />
            <div className="min-w-0 leading-tight">
              <BrandName />
              <p className="hidden text-xs font-semibold text-slate-600 lg:block">
                Nutrición clínica y deportiva · Consulta online y presencial
              </p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a href="#sobre-mi" className="hover:text-cyan-700">Sobre mí</a>
            <a href="#servicios" className="hover:text-cyan-700">Servicios</a>
            <a href="#deportes" className="hover:text-cyan-700">Deportes</a>
            <a href="#faq" className="hover:text-cyan-700">FAQ</a>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-slate-950 px-3 py-2 text-xs font-bold text-white transition hover:bg-cyan-600 sm:px-5 sm:py-2.5 sm:text-sm">
            Agendar
          </a>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-24">
        <div className="absolute -right-32 top-16 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute -left-24 bottom-8 h-64 w-64 rounded-full bg-white/70 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div>
            <SectionLabel>Nutrición clínica y deportiva personalizada</SectionLabel>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.03] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Come mejor.</span>
              <span className="block">Rinde más.</span>
              <span className="block">Mejora tu salud</span>
              <span className="block">sin complicarte.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8">
              Nutrición personalizada para mejorar tu composición corporal, controlar tu salud metabólica y potenciar tu rendimiento físico con un plan adaptado a ti.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink>
                <WhatsAppLogo className="h-5 w-5" />
                Agendar consulta por WhatsApp
              </ButtonLink>
              <ButtonLink href="#servicios" variant="secondary">
                Ver servicios
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
              {["Online y presencial", "Plan personalizado", "Enfoque clínico y deportivo"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="bg-white px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative rounded-[2rem] bg-[#F7F0E8] p-5 shadow-sm sm:p-8">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-xl shadow-slate-900/10">
              <img
                src={PROFILE_IMAGE_URL}
                alt="Carlos Barradas, Licenciado en Nutrición"
                className="aspect-[4/5] h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/90 p-5 shadow-lg backdrop-blur sm:bottom-12 sm:left-12 sm:right-12">
              <p className="text-sm font-bold text-cyan-700">CBM Nutrition</p>
              <p className="mt-1 text-2xl font-black text-slate-950">Carlos Barradas</p>
              <p className="text-sm font-semibold text-slate-600">Lic. en Nutrición</p>
            </div>
          </div>
          <div>
            <SectionLabel>Sobre mí</SectionLabel>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Soy Carlos Barradas</h2>
            <p className="mt-3 text-xl font-bold text-cyan-700">Lic. en Nutrición</p>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Ayudo a personas que buscan mejorar su salud, composición corporal y rendimiento físico mediante planes de alimentación personalizados, realistas y sostenibles.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Mi enfoque combina evaluación nutricional, educación alimentaria y seguimiento para que puedas lograr tus objetivos sin dietas extremas ni planes genéricos.
            </p>
            <h3 className="mt-8 text-xl font-black text-slate-950">Áreas de experiencia</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <div key={area} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Objetivos</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">¿A quién puedo ayudar?</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {helpItems.map((item) => (
              <div key={item} className="rounded-3xl bg-white/8 p-6 ring-1 ring-white/10 backdrop-blur">
                <CheckCircle2 className="h-6 w-6 text-cyan-300" />
                <p className="mt-4 font-semibold leading-7 text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Servicios</SectionLabel>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Atención nutricional personalizada</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map(({ icon: Icon, title, text, ideal }) => (
              <article key={title} className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-slate-950">{title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{text}</p>
                <p className="mt-5 rounded-2xl bg-[#F7F0E8] p-4 text-sm font-semibold text-slate-700">
                  <span className="text-slate-950">Ideal para:</span> {ideal}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Proceso</SectionLabel>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">¿Cómo trabajo?</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-lg font-black text-white">{index + 1}</div>
                <h3 className="mt-6 text-xl font-black text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="deportes" className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 py-16 text-white sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Enfoque deportivo</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Nutrición para entrenar mejor, recuperarte mejor y rendir más</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              La alimentación también forma parte de tu entrenamiento. Un plan nutricional bien diseñado puede ayudarte a mejorar tu energía, recuperación, composición corporal y rendimiento deportivo.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {sportGoals.map((goal) => (
              <div key={goal} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <Trophy className="h-6 w-6 text-cyan-300" />
                <p className="mt-4 font-semibold leading-7 text-slate-100">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-5 shadow-sm sm:p-8 md:p-12">
          <SectionLabel>Resultados reales</SectionLabel>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Resultados con un enfoque realista</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Cada persona tiene objetivos, horarios, gustos y necesidades diferentes. Por eso, el plan se adapta a tu vida real, no al revés.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {["Entender qué comer y por qué", "Crear hábitos sostenibles", "Mejorar tu relación con la comida", "Evitar dietas extremas", "Mantener resultados a largo plazo"].map((item) => (
              <div key={item} className="rounded-3xl bg-[#F7F0E8] p-5 font-semibold leading-7 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Dudas frecuentes</SectionLabel>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Preguntas frecuentes</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-3xl border border-slate-100 bg-slate-50 p-6 open:bg-white open:shadow-lg open:shadow-slate-900/5">
                <summary className="cursor-pointer list-none text-lg font-black text-slate-950">
                  {faq.q}
                </summary>
                <p className="mt-4 leading-7 text-slate-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Empieza con un plan diseñado para ti</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Mejora tu alimentación, salud y rendimiento con una estrategia personalizada, realista y sostenible.
          </p>
          <div className="mt-8">
            <ButtonLink>
              <WhatsAppLogo className="h-5 w-5" />
              Agendar consulta por WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="aviso-de-privacidad" className="bg-white px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Información legal</SectionLabel>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Aviso de privacidad</h2>
          <div className="mt-8 space-y-6 rounded-[2rem] bg-slate-50 p-5 text-justify leading-7 text-slate-700 ring-1 ring-slate-100 sm:p-8">
            <p>
              <strong className="text-slate-950">CBM Nutrition</strong>, a cargo de Carlos Barradas, es responsable del uso y protección de los datos personales que proporciones a través de esta página web, WhatsApp, redes sociales, formularios, mensajes o durante la consulta nutricional.
            </p>
            <div>
              <h3 className="text-xl font-black text-slate-950">Datos personales que podemos recabar</h3>
              <p className="mt-2">
                Podemos solicitar datos como nombre, edad, teléfono, correo electrónico, antecedentes personales, hábitos de alimentación, nivel de actividad física, objetivos de consulta, información de composición corporal, historial clínico relacionado con la atención nutricional y, en su caso, resultados de laboratorio o información médica relevante.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-950">Finalidades del uso de datos</h3>
              <p className="mt-2">
                Tus datos serán utilizados para brindar atención nutricional personalizada, elaborar planes de alimentación, dar seguimiento a tu progreso, agendar o confirmar citas, mantener comunicación relacionada con tu atención y cumplir obligaciones profesionales, administrativas o legales aplicables.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-950">Transferencia y protección de datos</h3>
              <p className="mt-2">
                Tus datos personales no serán vendidos, rentados ni compartidos con terceros para fines comerciales. Solo podrán compartirse cuando sea necesario por obligación legal, requerimiento de autoridad competente o autorización expresa del paciente. CBM Nutrition implementa medidas razonables para proteger la información contra pérdida, uso indebido o acceso no autorizado.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-950">Derechos ARCO</h3>
              <p className="mt-2">
                Puedes solicitar el acceso, rectificación, cancelación u oposición al tratamiento de tus datos personales, así como revocar tu consentimiento, comunicándote por los medios oficiales de CBM Nutrition.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-950">Cambios al aviso de privacidad</h3>
              <p className="mt-2">
                Este aviso puede actualizarse por cambios en los servicios, requisitos legales o prácticas internas. Cualquier modificación estará disponible en esta misma sección.
              </p>
            </div>
            <p className="text-sm font-semibold text-slate-500">Última actualización: mayo 2026.</p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 pb-10 text-white sm:px-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <CBMLogoMark size="lg" white />
            <div className="leading-tight">
              <BrandName variant="light" />
              <p>Nutrición clínica y deportiva · Consulta online y presencial</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de CBM Nutrition"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-cyan-500 hover:text-white"
            >
              <WhatsAppLogo className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/cbm_nutrition/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de CBM Nutrition"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-cyan-500 hover:text-white"
            >
              <InstagramLogo className="h-5 w-5" />
            </a>
            <a href="#aviso-de-privacidad" className="hover:text-cyan-300">
              Aviso de privacidad
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
