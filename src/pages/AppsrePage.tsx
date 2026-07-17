import { useEffect, useState } from "react";

const COLORS = {
  primary: "#1ABCFE",
  success: "#0ACF83",
  white: "#FFFFFF",
  gray: "#F5F5F5",
  text: "#1A1A1A",
  textLight: "#666666",
};

export default function AppsrePage() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const scrollToOffer = () => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: COLORS.text, lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section className="hero" style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Interrompa o loop dos pensamentos negativos em menos de 5 minutos.
          </h1>
          <p style={styles.heroSubtitle}>
            O Ressignifica é um aplicativo de intervenção emocional que ajuda você a interromper sentimentos como ansiedade,
            culpa, medo, procrastinação, insegurança e autossabotagem para recuperar o foco e voltar a agir.
          </p>
          <button onClick={scrollToOffer} style={styles.ctaButton}>
            Quero começar agora
          </button>
          <div style={styles.badges}>
            <span>✓ Acesso imediato</span>
            <span>✓ Funciona no celular</span>
            <span>✓ Garantia de 7 dias</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tudo o que você precisa para recuperar seu estado mental produtivo</h2>
        <div style={styles.featuresGrid}>
          {["Check-in de sentimentos", "Áudios de Ressignificação", "Biblioteca de Vídeos", "Tarefas Inteligentes", "Dashboard", "Histórico", "Seus próprios conteúdos"].map((feature, idx) => (
            <div key={idx} style={styles.featureCard}>
              <div style={styles.featureIcon}>📌</div>
              <h3 style={styles.featureTitle}>{feature}</h3>
              <p style={styles.featureText}>Descrição curta do recurso</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{ ...styles.section, background: COLORS.gray }}>
        <h2 style={styles.sectionTitle}>Você não precisa esperar se sentir melhor para agir.</h2>
        <div style={styles.comparisonGrid}>
          <div style={styles.comparisonCard}>
            <h3>Sem o Ressignifica</h3>
            <ul>
              <li>Pensamentos negativos</li>
              <li>Procrastinação</li>
              <li>Culpa</li>
              <li>Mais ansiedade</li>
              <li>Paralisia</li>
            </ul>
          </div>
          <div style={styles.comparisonCard}>
            <h3>Com o Ressignifica</h3>
            <ul>
              <li>Reconhece o sentimento</li>
              <li>Escuta o áudio</li>
              <li>Recupera a clareza</li>
              <li>Executa uma pequena ação</li>
              <li>Constrói autoestima</li>
              <li>Gera resultados reais</li>
            </ul>
          </div>
        </div>
        <div style={styles.benefitsGrid}>
          {[
            "Recupera o foco rapidamente",
            "Diminui a procrastinação",
            "Interrompe ciclos de autossabotagem",
            "Aumenta a autoestima",
            "Desenvolve clareza mental",
            "Cria evidências de progresso",
          ].map((benefit, idx) => (
            <div key={idx} style={styles.benefit}>✔ {benefit}</div>
          ))}
        </div>
      </section>

      {/* Bonus Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Você também recebe estes bônus</h2>
        <div style={styles.bonusGrid}>
          {[
            { title: "Guia PDF", desc: "30 Microações para sair da procrastinação" },
            { title: "20 Áudios exclusivos", desc: "Coleção de intervenção emocional" },
            { title: "Desafio de 7 dias", desc: "Reconstrução da autoestima" },
          ].map((bonus, idx) => (
            <div key={idx} style={styles.bonusCard}>
              <h3>{bonus.title}</h3>
              <p>{bonus.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 20 }}>Valor total dos bônus: <strong>R$197</strong> — Hoje incluso gratuitamente.</p>
      </section>

      {/* Offer Section */}
      <section id="offer" style={{ ...styles.section, background: COLORS.primary, color: COLORS.white }}>
        <h2 style={{ ...styles.sectionTitle, color: COLORS.white }}>Oferta por tempo limitado</h2>
        <div style={styles.offerCard}>
          <h3>Você recebe</h3>
          <ul>
            <li>✓ Aplicativo Ressignifica</li>
            <li>✓ Todas as futuras atualizações</li>
            <li>✓ Biblioteca completa</li>
            <li>✓ Dashboard</li>
            <li>✓ Upload dos seus áudios</li>
            <li>✓ Upload dos seus vídeos</li>
            <li>✓ Todos os bônus</li>
          </ul>
          <div style={styles.countdown}>⏳ {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</div>
          <button style={styles.offerButton}>QUERO COMEÇAR AGORA</button>
          <div style={styles.paymentBadges}>
            <span>Pagamento Seguro</span>
            <span>Compra Protegida</span>
            <span>Pix • Cartão • Parcelamento</span>
          </div>
        </div>
      </section>

      {/* App Gallery */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Conheça o Ressignifica por dentro</h2>
        <div style={styles.gallery}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} style={styles.galleryItem}>Imagem {item}</div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ ...styles.section, background: COLORS.gray }}>
        <h2 style={styles.sectionTitle}>Veja o que nossos usuários estão dizendo</h2>
        <div style={styles.testimonialsGrid}>
          {[
            { name: "Carlos M.", text: "Eu passava horas preso em pensamentos negativos. Hoje em poucos minutos consigo recuperar o foco e voltar ao trabalho." },
            { name: "Fernanda A.", text: "O aplicativo virou meu botão de emergência emocional. Simplesmente funciona." },
            { name: "Ricardo S.", text: "Foi a primeira vez que consegui transformar pequenas ações em uma rotina consistente." },
          ].map((t, idx) => (
            <div key={idx} style={styles.testimonialCard}>
              <p style={styles.testimonialText}>“{t.text}”</p>
              <div style={styles.stars}>★★★★★</div>
              <p style={styles.testimonialAuthor}>{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Garantia Incondicional de 7 Dias</h2>
        <p style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          Experimente o Ressignifica durante 7 dias. Se não sentir que o aplicativo ajudou você a recuperar seu foco e
          interromper pensamentos negativos, basta solicitar o reembolso. Sem perguntas. Sem burocracia. Risco zero.
        </p>
      </section>

      {/* FAQ */}
      <section style={{ ...styles.section, background: COLORS.gray }}>
        <h2 style={styles.sectionTitle}>Perguntas Frequentes</h2>
        <div style={styles.faq}>
          {[
            { q: "O aplicativo funciona em Android e iPhone?", a: "Sim. Basta acessar pelo navegador ou instalar como aplicativo." },
            { q: "Preciso de internet?", a: "Sim, para sincronização e acesso aos conteúdos." },
            { q: "Posso adicionar meus próprios áudios?", a: "Sim. Você pode enviar seus próprios arquivos MP3 e M4A." },
            { q: "Posso cancelar quando quiser?", a: "Sim. Você possui garantia incondicional de 7 dias." },
            { q: "Em quanto tempo começo a perceber resultados?", a: "Muitos usuários relatam sensação de clareza e redução da ansiedade logo após a primeira intervenção de poucos minutos." },
          ].map((item, idx) => (
            <details key={idx} style={styles.faqItem}>
              <summary style={styles.faqQuestion}>{item.q}</summary>
              <p style={styles.faqAnswer}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 FigTree. Todos os direitos reservados.</p>
        <div style={styles.footerLinks}>
          <a href="#privacy">Política de Privacidade</a>
          <a href="#terms">Termos de Uso</a>
          <a href="#contact">Contato</a>
        </div>
      </footer>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.success} 100%)`,
    color: COLORS.white,
    padding: "80px 20px",
    textAlign: "center" as const,
  },
  heroContent: {
    maxWidth: 800,
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: 20,
    lineHeight: 1.2,
  },
  heroSubtitle: {
    fontSize: "1.125rem",
    marginBottom: 30,
    opacity: 0.9,
  },
  ctaButton: {
    background: COLORS.white,
    color: COLORS.primary,
    border: "none",
    padding: "16px 32px",
    fontSize: "1rem",
    fontWeight: 600,
    borderRadius: 8,
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
  },
  badges: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    marginTop: 20,
    flexWrap: "wrap" as const,
  },
  section: {
    padding: "60px 20px",
    maxWidth: 1200,
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    textAlign: "center" as const,
    marginBottom: 40,
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 20,
  },
  featureCard: {
    background: COLORS.white,
    padding: 24,
    borderRadius: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  featureIcon: {
    fontSize: "2rem",
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: "1.125rem",
    fontWeight: 600,
    marginBottom: 8,
  },
  featureText: {
    color: COLORS.textLight,
    fontSize: "0.875rem",
  },
  comparisonGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    marginBottom: 40,
  },
  comparisonCard: {
    background: COLORS.white,
    padding: 24,
    borderRadius: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 12,
  },
  benefit: {
    background: COLORS.white,
    padding: 12,
    borderRadius: 8,
    color: COLORS.success,
    fontWeight: 600,
  },
  bonusGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 20,
  },
  bonusCard: {
    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    padding: 24,
    borderRadius: 12,
    border: "2px solid #ffd700",
    textAlign: "center" as const,
  },
  offerCard: {
    background: COLORS.white,
    color: COLORS.text,
    padding: 40,
    borderRadius: 16,
    maxWidth: 600,
    margin: "0 auto",
    textAlign: "center" as const,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  },
  countdown: {
    fontSize: "2rem",
    fontWeight: 700,
    color: COLORS.primary,
    margin: "20px 0",
  },
  offerButton: {
    background: COLORS.primary,
    color: COLORS.white,
    border: "none",
    padding: "20px 40px",
    fontSize: "1.125rem",
    fontWeight: 700,
    borderRadius: 8,
    cursor: "pointer",
    width: "100%",
    marginTop: 20,
  },
  paymentBadges: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap" as const,
    marginTop: 20,
    fontSize: "0.875rem",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 16,
  },
  galleryItem: {
    aspectRatio: "9/16",
    background: COLORS.gray,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  testimonialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
  },
  testimonialCard: {
    background: COLORS.white,
    padding: 24,
    borderRadius: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  testimonialText: {
    fontStyle: "italic",
    marginBottom: 12,
  },
  stars: {
    color: "#ffc107",
    marginBottom: 8,
  },
  testimonialAuthor: {
    fontWeight: 600,
    color: COLORS.primary,
  },
  faq: {
    maxWidth: 800,
    margin: "0 auto",
  },
  faqItem: {
    background: COLORS.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  faqQuestion: {
    fontWeight: 600,
    cursor: "pointer",
    listStyle: "none",
  },
  faqAnswer: {
    marginTop: 12,
    color: COLORS.textLight,
  },
  footer: {
    background: COLORS.text,
    color: COLORS.white,
    padding: 40,
    textAlign: "center" as const,
  },
  footerLinks: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    marginTop: 16,
    flexWrap: "wrap" as const,
  },
};