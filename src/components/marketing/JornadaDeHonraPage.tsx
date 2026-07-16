import { Instagram, MessageCircleMore, Youtube } from "lucide-react";

const cards = [
  {
    title: "BLACK EXPERT",
    href: "https://talitaamarques.com.br/black-expert/",
    image: "/jornada-de-honra/jornada-de-honra.svg",
    cta: "QUERO ACESSAR O BLACK EXPERT",
  },
  {
    title: "JORNADA DE HONRA",
    href: "https://talitaamarques.com.br/jornada-honra/",
    image: "/jornada-de-honra/jornada-de-honra.svg",
    cta: "QUERO ENTRAR NA JORNADA",
  },
  {
    title: "AC PRÁTICA",
    href: "https://talitaamarques.com.br/ac-pratica/",
    image: "/jornada-de-honra/ac-pratica.svg",
    cta: "QUERO VER A AC PRÁTICA",
  },
  {
    title: "WORKSHOP IA PARA MENTORAS",
    href: "https://talitaamarques.com.br/workshop-conteudo-para-mentoras-com-ia/",
    image: "/jornada-de-honra/workshop-ia.svg",
    cta: "QUERO O WORKSHOP",
  },
  {
    title: "PRESENCIAL AC",
    href: "https://talitaamarques.com.br/presencial-ac/",
    image: "/jornada-de-honra/presencial-ac.svg",
    cta: "QUERO O PRESENCIAL",
  },
  {
    title: "LUCRAR COM TICKET BAIXO",
    href: "https://talitaamarques.com.br/lctb/",
    image: "/jornada-de-honra/jornada-de-honra.svg",
    cta: "QUERO LUCRAR COM TICKET BAIXO",
  },
  {
    title: "FATURAR COM O FUNIL",
    href: "https://talitaamarques.com.br/3k-semana-c-infoprodutos/",
    image: "/jornada-de-honra/jornada-de-honra.svg",
    cta: "QUERO O FATURAR COM O FUNIL",
  },
  {
    title: "MENTORIAS 10K",
    href: "https://talitaamarques.com.br/mentora-10k",
    image: "/jornada-de-honra/jornada-de-honra.svg",
    cta: "QUERO FATURAR COM MENTORIAS",
  },
];

export function JornadaDeHonraPage() {
  return (
    <div className="min-h-screen bg-[#f7efe3] text-[#24160f]">
      <main className="mx-auto flex w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <section className="grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-[1.75rem] border border-[#e3d5bc] bg-white shadow-[0_20px_45px_rgba(36,22,15,0.08)] transition duration-200 hover:-translate-y-1"
            >
              <img
                src={card.image}
                alt={card.title}
                className="aspect-[16/9] w-full object-cover"
                loading="eager"
              />
              <div className="bg-[#f7efe3] p-4 text-center sm:p-5">
                <span className="inline-flex rounded-full bg-[#b9833b] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white">
                  {card.cta}
                </span>
              </div>
            </a>
          ))}
        </section>
      </main>

      <footer className="border-t border-[#e3d5bc] bg-[#2d2017] px-4 py-10 text-center text-[#f8ebdc] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
          <h2 className="text-2xl font-semibold sm:text-3xl">Faça parte da nossa comunidade!</h2>

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/atalitamarques"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5527992739429"
              target="_blank"
              rel="noreferrer"
              aria-label="Whatsapp"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
            >
              <MessageCircleMore className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@ATalitaMarques"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-[#e7d4ba]">Viver de Infoprodutos - Talita Marques © 2021</p>
          <p className="text-sm text-[#e7d4ba]">E-mail: suporte@talitasouzamarques.com.br</p>
          <a href="https://talitasouzamarques.com.br/politica-de-privacidade/" className="text-sm text-[#f8ebdc] underline decoration-white/30 underline-offset-4">
            Termos de Uso | Política de Privacidade
          </a>
        </div>
      </footer>
    </div>
  );
}
