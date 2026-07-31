export const FIG = {
  charcoal: "#373435",
  ochre: "#BF7F4D",
  white: "#FFFFFF",
  yellow: "#FFCC29",
  mint: "#CCE7D4",
  olive: "#D2E28B",
};

export const GRADIENT_SOFT = `linear-gradient(160deg, ${FIG.mint} 0%, ${FIG.olive} 100%)`;

export const CHECKOUT = {
  mensal: "https://pay.cakto.com.br/3bfg6d6_992279",
  trimestral: "https://pay.cakto.com.br/38uxdqx",
  anual: "https://pay.cakto.com.br/39ainba",
};

export const SERIF = "'Fraunces', Georgia, serif";
export const SANS = "'DM Sans', system-ui, sans-serif";

export function go(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}
