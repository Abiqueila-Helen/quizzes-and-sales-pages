import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const BRAND = {
  blue: "#00AFEF",
  blueDark: "#0095C7",
  green: "#00A859",
  greenDark: "#379263",
  orange: "#F58634",
  orangeDark: "#D96D28",
  yellow: "#FFCC29",
  black: "#373435",
  red: "#ED3237",
  terracota: "#C95241",
  brown: "#BF7F4D",
  mint: "#CCE7D4",
  olive: "#D2E28B",
  text: "#0F172A",
  textSoft: "#64748B",
  border: "#E2E8F0",
  bg: "#FFFFFF",
  bgSoft: "#F8FAFC",
};

export const GRADIENT_CTA = `linear-gradient(135deg, ${BRAND.orange} 0%, ${BRAND.yellow} 100%)`;
export const GRADIENT_GREEN = `linear-gradient(135deg, ${BRAND.green} 0%, ${BRAND.greenDark} 100%)`;
export const GRADIENT_BLUE_GREEN = `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.green} 100%)`;
export const GRADIENT_ORANGE = `linear-gradient(135deg, ${BRAND.orange} 0%, ${BRAND.yellow} 100%)`;

export const CHECKOUT = {
  mensal: "https://pay.cakto.com.br/3bfg6d6_992279",
  trimestral: "https://pay.cakto.com.br/38uxdqx",
  anual: "https://pay.cakto.com.br/39ainba",
};

export function go(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "green";
}) {
  const c = tone === "blue" ? BRAND.blue : BRAND.green;
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
      style={{ color: c, background: `${c}18` }}
    >
      {children}
    </span>
  );
}

export function GradText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: GRADIENT_BLUE_GREEN,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
}

export function CTA({
  children,
  onClick,
  variant = "gradient",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "gradient" | "green" | "outline";
  className?: string;
}) {
  const styles: React.CSSProperties =
    variant === "gradient"
      ? { background: GRADIENT_CTA, color: "#fff", boxShadow: `0 16px 34px -14px ${BRAND.orange}88` }
      : variant === "green"
        ? { background: BRAND.green, color: "#fff", boxShadow: `0 16px 34px -14px ${BRAND.green}88` }
        : { background: "#fff", color: BRAND.text, border: `1px solid ${BRAND.border}` };

  return (
    <button
      onClick={onClick}
      style={styles}
      className={`w-full rounded-2xl px-6 py-4 text-base font-extrabold transition-all active:scale-[0.98] hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </button>
  );
}

export function Card({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-3xl bg-white p-6 ${className}`}
      style={{
        border: `1px solid ${BRAND.border}`,
        boxShadow: "0 18px 40px -28px rgba(15,23,42,0.35)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  tone = "blue",
  title,
  subtitle,
}: {
  eyebrow?: string;
  tone?: "blue" | "green";
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-[28px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-[15px] leading-relaxed sm:text-lg" style={{ color: BRAND.textSoft }}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function useCountdown(totalSeconds = 15 * 60) {
  const [left, setLeft] = useState(totalSeconds);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(left / 60);
  const s = left % 60;
  return { m: String(m).padStart(2, "0"), s: String(s).padStart(2, "0") };
}