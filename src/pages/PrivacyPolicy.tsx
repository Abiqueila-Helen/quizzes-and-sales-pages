import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-subtle py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 shadow-lg">
          <div className="mb-8">
            <Link to="/appsre">
              <Button variant="outline" className="mb-4">
                ← Voltar
              </Button>
            </Link>
            <h1 className="text-h1 text-foreground mb-4">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">
              Última atualização: 15 de novembro de 2025
            </p>
          </div>

          <div className="space-y-6 text-foreground">
            <section>
              <h2 className="text-h3 mb-3">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais
                quando você utiliza nossa plataforma. Estamos comprometidos com a transparência e a proteção dos seus dados.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">2. Informações que Coletamos</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Podemos coletar os seguintes tipos de informações:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
                <li>Informações de cadastro (nome, email, telefone)</li>
                <li>Dados de uso da plataforma (registros de acesso, interações)</li>
                <li>Informações do dispositivo e navegador</li>
                <li>Dados de pagamento (processados por gateways seguros)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 mb-3">3. Como Usamos suas Informações</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Personalizar sua experiência na plataforma</li>
                <li>Enviar comunicações importantes sobre sua conta</li>
                <li>Processar pagamentos e transações</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 mb-3">4. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros,
                exceto quando necessário para fornecer o serviço (processadores de pagamento, provedores de hospedagem)
                ou quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">5. Proteção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra
                acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL/TLS
                para transmissão de dados e armazenamento seguro em servidores protegidos.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">6. Seus Direitos (LGPD)</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Solicitar a portabilidade de seus dados</li>
                <li>Revogar consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 mb-3">7. Cookies e Tecnologias Semelhantes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência,
                analisar o uso da plataforma e personalizar conteúdo. Você pode controlar o uso de cookies
                nas configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">8. Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades
                para as quais foram coletadas, incluindo obrigações legais. Quando não precisarmos mais
                dos seus dados, eles serão excluídos de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">9. Alterações na Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre
                mudanças significativas por email ou através da plataforma. O uso continuado dos serviços
                após as alterações constituirá aceitação da nova política.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">10. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos,
                entre em contato conosco pelo email: contato@insightagency-ia.com
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-muted-foreground text-center">
              Ao utilizar nossa plataforma, você confirma que leu, compreendeu e aceitou esta política de privacidade.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}