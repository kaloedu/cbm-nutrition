import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  FileText,
  HeartPulse,
  LoaderCircle,
  MapPin,
  Medal,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Sunrise,
  Target,
  Timer,
  Users,
  Video,
  Waves,
} from "lucide-react";

/* ───────────────────────── Datos editables ───────────────────────── */

const LOGO_URL = "/logo-cbm.webp";
const PROFILE_IMAGE_URL = "/foto-carlos.webp";
const GUIA_IMAGE_URL = "/guia-portada.webp";

const WHATSAPP_BASE = "https://wa.me/525657007223";
const WHATSAPP_URL =
  "https://wa.me/525657007223?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20CBM%20Nutrition%20y%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20nutricional";
const INSTAGRAM_URL = "https://www.instagram.com/cbm_nutrition/";

// Perfil de especialista en Avena (aquí se confirma la cita)
const AVENA_ALIAS = "cbarradas865";
const AVENA_PROFILE_URL = "https://avena.io/nutriologos/jalisco/zapopan/carlos-barradas?utm_source=web";
const AVENA_AGENDA_API = "https://api.avena.io/_ah/api/coach/v1/public/agenda";
const AVENA_RATING = "5.0";
const AVENA_REVIEWS = 18;

// Guía de pago (link de Stripe de $249)
const GUIA_PRICE = "$249 MXN";
const GUIA_URL = "https://buy.stripe.com/7sY6oHaEQdjd3bnah10gw07?utm_source=web";

const CONSULTORIO = {
  name: "Consultorio Zapopan",
  address: "Gonzaga 4276, Ciudad de los Niños, Zapopan, Jalisco",
  maps: "https://www.google.com/maps/search/?api=1&query=Gonzaga+4276+Ciudad+de+los+Ni%C3%B1os+Zapopan+Jalisco",
};

const TIMEZONE = "America/Mexico_City";

/* ───────────────────────── Contenido ───────────────────────── */

const areas = [
  "Natación: competencia, máster y aguas abiertas",
  "Alimentación según tu horario de nado",
  "Día de competencia y entrenamientos dobles",
  "Composición corporal sin perder rendimiento",
  "Otros deportes: fútbol, básquetbol, gym y Hyrox",
  "Nutrición clínica: resistencia a la insulina, diabetes, hipertensión y SOP",
];

const swimmers = [
  {
    icon: Sunrise,
    title: "Nadas temprano",
    text: "Entrenas a las 6 de la mañana y no sabes si entrar en ayunas o qué desayunar al salir.",
  },
  {
    icon: Timer,
    title: "Entrenas doble",
    text: "Dos sesiones al día, escuela o trabajo en medio, y llegas sin energía a la segunda.",
  },
  {
    icon: Medal,
    title: "Compites",
    text: "Eliminatorias, finales y pruebas el mismo día: qué comer entre una y otra sin que te caiga pesado.",
  },
  {
    icon: Waves,
    title: "Másters y aguas abiertas",
    text: "Nadas antes o después del trabajo, o preparas una travesía, y quieres rendir y recuperarte mejor.",
  },
  {
    icon: Users,
    title: "Papás de nadadores",
    text: "Quieres saber qué darle a tu hijo antes y después de entrenar, sin complicarte en la cocina.",
  },
  {
    icon: Target,
    title: "Composición corporal",
    text: "Quieres bajar grasa o ganar músculo sin que se te caigan los tiempos en el agua.",
  },
];

const services = [
  {
    icon: Waves,
    title: "Nutrición para nadadores",
    text: "Plan de alimentación según tu horario de nado, tus entrenamientos, tus competencias y lo que te gusta comer.",
    ideal: "Nadadores de competencia, másters, aguas abiertas y papás de nadadores.",
  },
  {
    icon: Medal,
    title: "Nutrición deportiva",
    text: "Para otros deportes: alimentación alrededor del entrenamiento, recuperación y rendimiento.",
    ideal: "Fútbol, básquetbol, gym y Hyrox.",
  },
  {
    icon: HeartPulse,
    title: "Nutrición clínica",
    text: "Control de glucosa, presión arterial, colesterol y triglicéridos, y condiciones como resistencia a la insulina, diabetes, hipertensión y SOP.",
    ideal: "Control metabólico, prevención y cambio de hábitos.",
  },
  {
    icon: ShieldCheck,
    title: "Seguimiento",
    text: "Ajustes del plan según tus avances, tu temporada, tus síntomas y qué tan fácil te resulta seguirlo.",
    ideal: "Mantener el progreso durante toda la temporada.",
  },
];

const process = [
  {
    title: "Agenda",
    text: "Eliges día y hora aquí abajo, en consultorio en Zapopan o en línea, y te confirmo por WhatsApp.",
  },
  {
    title: "Evaluación",
    text: "Revisamos tu objetivo, historial, horarios de nado, entrenamientos, competencias y gustos.",
  },
  {
    title: "Tu plan",
    text: "Recibes tu plan en la app de Avena, con opciones realistas para tu semana.",
  },
  {
    title: "Seguimiento",
    text: "Ajustamos el plan según tus avances, tu temporada y tu rendimiento.",
  },
];

const guiaIncluye = [
  "Menús de 7 días según la hora a la que entras al agua",
  "Qué comer antes y después de nadar",
  "Qué llevar en la mochila",
  "Lista del súper y hoja para pegar en el refri",
  "Lo que pagas se descuenta de tu primera consulta (30 días)",
];

const faqs = [
  {
    q: "¿Solo atiendes nadadores?",
    a: "No. Mi enfoque principal es la natación, pero también atiendo otros deportes y nutrición clínica (resistencia a la insulina, diabetes, hipertensión y SOP).",
  },
  {
    q: "¿La consulta puede ser en línea?",
    a: "Sí. Puedes elegir consulta presencial en Zapopan o en línea por videollamada, con el mismo seguimiento.",
  },
  {
    q: "¿Cómo agendo?",
    a: "En la sección Agenda ves mis horarios libres. Eliges lugar, día y hora, y se abre WhatsApp con tu horario ya escrito; envías el mensaje y te confirmo la cita.",
  },
  {
    q: "¿El plan se adapta a mi horario de nado?",
    a: "Sí. El plan se arma alrededor de tus entrenamientos: lo que comes antes, después y entre sesiones, y cómo cambia en semana de competencia.",
  },
  {
    q: "¿Me vas a quitar mis alimentos favoritos?",
    a: "No. La idea es acomodar lo que ya comes para que te sostenga en el agua, sin dietas extremas.",
  },
  {
    q: "¿La guía de 7 días sustituye la consulta?",
    a: "No. La guía es general y te sirve para empezar. En consulta el plan se ajusta a ti; y lo que pagaste por la guía se descuenta de tu primera consulta si agendas dentro de los 30 días.",
  },
];

/* ───────────────────────── Componentes base ───────────────────────── */

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

function SectionLabel({ children, dark = false }) {
  return (
    <span
      className={`inline-flex max-w-full items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold leading-tight ${
        dark ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-200" : "border-cyan-200 bg-cyan-50 text-cyan-700"
      }`}
    >
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

function ButtonLink({ children, href, variant = "primary", className = "" }) {
  const base =
    "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 sm:w-auto";
  const styles = {
    primary: "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:bg-cyan-600",
    secondary: "border border-slate-300 bg-white text-slate-900 hover:border-cyan-400 hover:text-cyan-700",
    dark: "bg-slate-950 text-white hover:bg-cyan-600",
    ghost: "border border-white/25 bg-white/5 text-white hover:border-cyan-300 hover:text-cyan-200",
  }[variant];
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function Stars({ className = "h-4 w-4" }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-amber-400" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`${className} fill-current`} />
      ))}
    </span>
  );
}

/* ───────────────────────── Agenda (disponibilidad real de Avena) ───────────────────────── */

const DAY_SHORT = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];
const DAY_LONG = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const MONTHS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// Fecha de hoy en Ciudad de México (sin depender de la zona del visitante)
function todayInMexico() {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: TIMEZONE, year: "numeric", month: "2-digit", day: "2-digit" })
    .formatToParts(new Date())
    .reduce((acc, p) => ({ ...acc, [p.type]: p.value }), {});
  return new Date(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day)));
}

function addDays(date, n) {
  const d = new Date(date);
  d.setUTCDate(d.getUTCDate() + n);
  return d;
}

function apiDate(d) {
  return `${d.getUTCDate()}-${d.getUTCMonth() + 1}-${d.getUTCFullYear()}`;
}

function formatHour({ hour, minute }) {
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  const suffix = hour < 12 ? "am" : "pm";
  return minute ? `${h12}:${String(minute).padStart(2, "0")} ${suffix}` : `${h12} ${suffix}`;
}

function useAvenaAgenda(daysAhead = 21) {
  const [state, setState] = useState({ status: "loading", days: [] });

  useEffect(() => {
    let cancelled = false;
    const start = todayInMexico();
    // Avena pide al menos 24 h de anticipación: empezamos mañana y filtramos lo que regrese vacío
    const dates = Array.from({ length: daysAhead }, (_, i) => addDays(start, i + 1));

    Promise.all(
      dates.map((d) => {
        const params = new URLSearchParams({ alias: AVENA_ALIAS, timezone: TIMEZONE, date: apiDate(d) });
        return fetch(`${AVENA_AGENDA_API}?${params}`)
          .then((r) => (r.ok ? r.json() : null))
          .then((json) => ({ date: d, slots: json?.schedule ?? [] }))
          .catch(() => ({ date: d, slots: [], failed: true }));
      })
    ).then((results) => {
      if (cancelled) return;
      if (results.every((r) => r.failed)) {
        setState({ status: "error", days: [] });
        return;
      }
      const days = results.filter((r) => r.slots.length > 0);
      setState({ status: days.length ? "ready" : "empty", days });
    });

    return () => {
      cancelled = true;
    };
  }, [daysAhead]);

  return state;
}

function AgendaWidget() {
  const { status, days } = useAvenaAgenda();
  const [mode, setMode] = useState("presencial");
  const [dayIndex, setDayIndex] = useState(0);
  const [slotIndex, setSlotIndex] = useState(0);

  const visibleDays = useMemo(() => days.slice(0, 10), [days]);
  const day = visibleDays[dayIndex];
  const slot = day?.slots[slotIndex];

  const selectDay = (i) => {
    setDayIndex(i);
    setSlotIndex(0);
  };

  const label = day && slot ? `${DAY_LONG[day.date.getUTCDay()]} ${day.date.getUTCDate()} · ${formatHour(slot.start)}` : "";

  // Mensaje de WhatsApp con el horario elegido (la cita la registra Carlos en su agenda)
  const bookingUrl = useMemo(() => {
    if (!day || !slot) return WHATSAPP_URL;
    const fecha = `${DAY_LONG[day.date.getUTCDay()]} ${day.date.getUTCDate()} de ${MONTHS[day.date.getUTCMonth()]}`;
    const modalidad = mode === "online" ? "en línea" : "presencial en el consultorio de Zapopan";
    const text = `Hola, vengo de la página web de CBM Nutrition. Me gustaría agendar una consulta ${modalidad} el ${fecha} a las ${formatHour(slot.start)}.`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
  }, [day, slot, mode]);

  return (
    <div className="overflow-hidden rounded-[2rem] bg-white text-slate-900 shadow-2xl shadow-slate-950/30 ring-1 ring-slate-100">
      <div className="flex items-center justify-between bg-[#0B1F4D] px-6 py-4 text-white">
        <p className="flex items-center gap-2 font-black">
          <CalendarDays className="h-5 w-5 text-cyan-300" />
          Agenda tu cita
        </p>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
          <Stars className="h-3.5 w-3.5" /> {AVENA_RATING}
        </span>
      </div>

      <div className="space-y-6 p-5 sm:p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Elige el lugar</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {[
              { id: "presencial", icon: MapPin, title: "Presencial", sub: CONSULTORIO.name },
              { id: "online", icon: Video, title: "En línea", sub: "Videollamada" },
            ].map(({ id, icon: Icon, title, sub }) => (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                className={`rounded-2xl border p-3 text-left transition ${
                  mode === id ? "border-cyan-500 bg-cyan-50 ring-2 ring-cyan-500/20" : "border-slate-200 hover:border-cyan-300"
                }`}
              >
                <span className="flex items-center gap-2 text-sm font-black text-slate-950">
                  <Icon className="h-4 w-4 text-cyan-600" />
                  {title}
                </span>
                <span className="mt-1 block text-xs font-semibold text-slate-500">{sub}</span>
              </button>
            ))}
          </div>
          {mode === "presencial" && (
            <a
              href={CONSULTORIO.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:underline"
            >
              <MapPin className="h-3.5 w-3.5" />
              {CONSULTORIO.address}
            </a>
          )}
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Elige el día</p>

          {status === "loading" && (
            <div className="mt-3 flex items-center gap-2 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-500">
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Buscando horarios disponibles…
            </div>
          )}

          {(status === "error" || status === "empty") && (
            <div className="mt-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              {status === "error"
                ? "No pude cargar los horarios en este momento."
                : "No hay horarios libres en las próximas tres semanas."}{" "}
              Escríbeme por WhatsApp y buscamos un horario.
            </div>
          )}

          {status === "ready" && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {visibleDays.map((d, i) => (
                <button
                  key={apiDate(d.date)}
                  type="button"
                  onClick={() => selectDay(i)}
                  className={`flex w-16 shrink-0 flex-col items-center rounded-2xl border py-2 transition ${
                    i === dayIndex ? "border-cyan-500 bg-cyan-50 text-cyan-800 ring-2 ring-cyan-500/20" : "border-slate-200 text-slate-700 hover:border-cyan-300"
                  }`}
                >
                  <span className="text-[11px] font-bold">{DAY_SHORT[d.date.getUTCDay()]}</span>
                  <span className="text-xl font-black">{d.date.getUTCDate()}</span>
                  <span className="text-[10px] font-semibold text-slate-500">{MONTHS[d.date.getUTCMonth()].slice(0, 3)}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {status === "ready" && day && (
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Horarios disponibles</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {day.slots.map((s, i) => (
                <button
                  key={`${s.start.hour}-${s.start.minute}`}
                  type="button"
                  onClick={() => setSlotIndex(i)}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2 text-sm font-bold transition ${
                    i === slotIndex ? "border-cyan-500 bg-cyan-50 text-cyan-800 ring-2 ring-cyan-500/20" : "border-slate-200 text-slate-700 hover:border-cyan-300"
                  }`}
                >
                  <Clock className="h-3.5 w-3.5" />
                  {formatHour(s.start)}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500">Hora del centro de México.</p>
          </div>
        )}

        <div>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:bg-cyan-600"
          >
            <WhatsAppLogo className="h-5 w-5" />
            {label ? `Agendar ${label}` : "Agendar por WhatsApp"}
          </a>
          <p className="mt-3 text-center text-xs leading-5 text-slate-500">
            Se abre WhatsApp con tu horario ya escrito; solo envía el mensaje y te confirmo la cita.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Página ───────────────────────── */

export default function App() {
  return (
    <main className="min-h-screen bg-[#F7F0E8] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-[#F7F0E8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2 sm:gap-3 sm:py-3 lg:px-8">
          <a href="#inicio" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="CBM Nutrition - Inicio">
            <CBMLogoMark size="sm" />
            <div className="min-w-0 leading-tight">
              <BrandName />
              <p className="hidden text-xs font-semibold text-slate-600 lg:block">Nutrición para nadadores · Zapopan y en línea</p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a href="#sobre-mi" className="hover:text-cyan-700">Sobre mí</a>
            <a href="#nadadores" className="hover:text-cyan-700">Nadadores</a>
            <a href="#servicios" className="hover:text-cyan-700">Servicios</a>
            <a href="#guia" className="hover:text-cyan-700">Guía</a>
            <a href="#faq" className="hover:text-cyan-700">FAQ</a>
          </nav>
          <a
            href="#agenda"
            className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-slate-950 px-3 py-2 text-xs font-bold text-white transition hover:bg-cyan-600 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-24">
        <div className="absolute -right-32 top-16 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute -left-24 bottom-8 h-64 w-64 rounded-full bg-white/70 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <SectionLabel>Nutriólogo y nadador · Zapopan y en línea</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.03] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Come mejor.</span>
            <span className="block">Nada mejor.</span>
            <span className="block text-cyan-600">Según tu horario</span>
            <span className="block">de nado.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8">
            Nutrición deportiva para nadadores de competencia, másters, aguas abiertas y papás de nadadores. Un plan que se acomoda a tus entrenamientos, tus competencias y tu vida real.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#agenda">
              <CalendarDays className="h-5 w-5" />
              Agendar consulta
            </ButtonLink>
            <ButtonLink href="#guia" variant="secondary">
              Guía de 7 días para nadadores
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
            <a href={AVENA_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-700">
              <Stars />
              {AVENA_RATING} · {AVENA_REVIEWS} reseñas en Avena
            </a>
            {["Presencial en Zapopan y en línea", "Plan según tu horario de nado"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="bg-white px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative rounded-[2rem] bg-[#F7F0E8] p-5 shadow-sm sm:p-8">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-xl shadow-slate-900/10">
              <img
                src={PROFILE_IMAGE_URL}
                alt="Carlos Barradas, nutriólogo deportivo"
                className="aspect-[4/5] h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/90 p-5 shadow-lg backdrop-blur sm:bottom-12 sm:left-12 sm:right-12">
              <p className="text-sm font-bold text-cyan-700">CBM Nutrition</p>
              <p className="mt-1 text-2xl font-black text-slate-950">Carlos Barradas</p>
              <p className="text-sm font-semibold text-slate-600">Lic. en Nutrición · Céd. prof. 15115712</p>
            </div>
          </div>
          <div>
            <SectionLabel>Sobre mí</SectionLabel>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Soy nutriólogo y nadador</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Soy Carlos Barradas, licenciado en Nutrición. La natación la vivo desde dentro, como nadador e instructor, y eso cambia cómo armo un plan: sé lo que es entrar al agua a las 6 de la mañana, entrenar doble o comer entre una prueba y otra.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Mi enfoque combina evaluación, educación alimentaria y seguimiento, para que comas lo que te sostiene en el agua sin dietas extremas ni planes genéricos.
            </p>
            <h3 className="mt-8 text-xl font-black text-slate-950">Con qué te ayudo</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <div key={area} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  {area}
                </div>
              ))}
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:underline"
            >
              <InstagramLogo className="h-4 w-4" />
              Sígueme en Instagram: @cbm_nutrition
            </a>
          </div>
        </div>
      </section>

      {/* Nadadores */}
      <section id="nadadores" className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 py-16 text-white sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Para nadadores</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">Lo que comes también es parte de tu entrenamiento</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            No es lo mismo nadar a las 6 de la mañana que a las 7 de la noche, ni un día de series que uno de competencia. El plan se arma alrededor de tus horarios en el agua.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {swimmers.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-4 text-lg font-black">{title}</h3>
                <p className="mt-2 leading-7 text-slate-200">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Servicios</SectionLabel>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Atención nutricional personalizada</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map(({ icon: Icon, title, text, ideal }) => (
              <article
                key={title}
                className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 sm:p-7"
              >
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

      {/* Guía */}
      <section id="guia" className="bg-white px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="mx-auto w-full max-w-sm">
            <img
              src={GUIA_IMAGE_URL}
              alt="Portada de la guía 7 días de comidas para nadadores"
              className="w-full rounded-2xl shadow-2xl shadow-slate-900/30 ring-1 ring-slate-900/5"
              loading="lazy"
            />
          </div>
          <div>
            <SectionLabel>Guía en PDF</SectionLabel>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">7 días de comidas para nadadores</h2>
            <p className="mt-3 text-xl font-bold text-cyan-700">Según tu horario de nado</p>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Si todavía no quieres agendar, empieza por aquí: una semana completa de comidas armada según la hora a la que entras al agua.
            </p>
            <ul className="mt-6 space-y-3">
              {guiaIncluye.map((item) => (
                <li key={item} className="flex items-start gap-3 font-semibold text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={GUIA_URL}>
                <ShoppingBag className="h-5 w-5" />
                Comprar la guía · {GUIA_PRICE}
              </ButtonLink>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-500">
                <FileText className="h-4 w-4" />
                Descarga inmediata al pagar
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Proceso</SectionLabel>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">¿Cómo trabajo?</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} className="rounded-[2rem] border border-slate-100 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-lg font-black text-white">{index + 1}</div>
                <h3 className="mt-6 text-xl font-black text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="scroll-mt-20 bg-slate-950 px-4 py-16 text-white sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="lg:pt-6">
            <SectionLabel dark>Agenda</SectionLabel>
            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">Empieza con un plan hecho para tu horario de nado</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Estos son los horarios que tengo libres ahora mismo. Elige consulta presencial en Zapopan o en línea, el día y la hora, y me mandas el mensaje por WhatsApp.
            </p>
            <a
              href={AVENA_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 ring-1 ring-white/10 transition hover:bg-white/15"
            >
              <Stars className="h-5 w-5" />
              <span>
                <span className="block font-black">{AVENA_RATING} de calificación</span>
                <span className="block text-sm text-slate-300">{AVENA_REVIEWS} reseñas de pacientes en Avena</span>
              </span>
            </a>
          </div>
          <AgendaWidget />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Dudas frecuentes</SectionLabel>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Preguntas frecuentes</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-3xl border border-slate-100 bg-slate-50 p-6 open:bg-white open:shadow-lg open:shadow-slate-900/5">
                <summary className="cursor-pointer list-none text-lg font-black text-slate-950">{faq.q}</summary>
                <p className="mt-4 leading-7 text-slate-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Aviso de privacidad */}
      <section id="aviso-de-privacidad" className="px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Información legal</SectionLabel>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Aviso de privacidad</h2>
          <div className="mt-8 space-y-6 rounded-[2rem] bg-white p-5 text-justify leading-7 text-slate-700 ring-1 ring-slate-100 sm:p-8">
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
              <h3 className="text-xl font-black text-slate-950">Plataformas que usamos</h3>
              <p className="mt-2">
                Los planes se entregan a través de Avena y los pagos de la guía se procesan con Stripe. Cada plataforma trata tus datos conforme a su propio aviso de privacidad. Esta página no guarda tus datos.
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
            <p className="text-sm font-semibold text-slate-500">Última actualización: noviembre 2026.</p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 pb-10 text-white sm:px-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <CBMLogoMark size="lg" white />
            <div className="leading-tight">
              <BrandName variant="light" />
              <p>Nutrición para nadadores · Zapopan y en línea</p>
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
              href={INSTAGRAM_URL}
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
