import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-subtle py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 shadow-lg">
          <div className="mb-8">
            <Link to="/cadastro">
              <Button variant="outline" className="mb-4">
                ← Voltar ao Cadastro
              </Button>
            </Link>
            <h1 className="text-h1 text-foreground mb-4">
              Termos de Uso
            </h1>
            <p className="text-muted-foreground">
              Última atualização: 15 de novembro de 2025
            </p>
          </div>

          <div className="space-y-6 text-foreground">
            <section>
              <h2 className="text-h3 mb-3">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bem-vindo à nossa plataforma. Este documento contém as regras e condições gerais de uso 
                dos serviços oferecidos. Ao acessar e utilizar nossa plataforma, você concorda em cumprir 
                estes termos e condições. Recomendamos que leia atentamente todo o conteúdo antes de 
                criar sua conta.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">2. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao criar uma conta em nossa plataforma, você declara que leu, compreendeu e aceitou 
                integralmente estes Termos de Uso. O uso continuado dos serviços após eventuais 
                modificações nos termos constituirá aceitação tácita das novas condições.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">3. Dados do Usuário</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Você se compromete a fornecer informações verdadeiras, precisas e atualizadas durante 
                o processo de cadastro. É de sua responsabilidade:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
                <li>Manter a confidencialidade de sua senha e dados de acesso</li>
                <li>Notificar imediatamente qualquer uso não autorizado de sua conta</li>
                <li>Manter seus dados cadastrais sempre atualizados</li>
                <li>Ser o único responsável por todas as atividades realizadas em sua conta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 mb-3">4. Privacidade e Proteção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                O tratamento de seus dados pessoais será realizado conforme nossa Política de Privacidade, 
                que está em conformidade com a legislação vigente. Comprometemo-nos a proteger suas 
                informações e utilizá-las apenas para as finalidades descritas em nossa política.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">5. Uso da Plataforma</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2">Uso Permitido:</h3>
                  <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
                    <li>Utilizar a plataforma para fins comerciais legítimos</li>
                    <li>Acessar os recursos disponíveis de acordo com seu plano de assinatura</li>
                    <li>Integrar nossos serviços em seus processos de negócio</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Uso Proibido:</h3>
                  <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
                    <li>Utilizar a plataforma para atividades ilegais ou fraudulentas</li>
                    <li>Enviar spam ou mensagens não solicitadas</li>
                    <li>Tentar burlar ou comprometer a segurança do sistema</li>
                    <li>Revender ou redistribuir nossos serviços sem autorização</li>
                    <li>Usar a plataforma para difamar, assediar ou prejudicar terceiros</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-h3 mb-3">6. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo da plataforma, incluindo mas não se limitando a logos, nomes, código, 
                design, textos, imagens e funcionalidades, são de propriedade exclusiva da empresa e 
                estão protegidos por leis de propriedade intelectual. O uso não autorizado pode 
                violar direitos autorais, marcas registradas e outras leis.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">7. Planos e Pagamentos</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Nossos serviços podem incluir planos pagos. Nestes casos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
                <li>A cobrança será realizada conforme o plano escolhido</li>
                <li>O cancelamento pode ser solicitado a qualquer momento</li>
                <li>Reembolsos seguirão nossa política de reembolso específica</li>
                <li>O acesso aos recursos premium será suspenso após o cancelamento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 mb-3">8. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                A empresa não se responsabiliza por danos diretos, indiretos, incidentais, 
                consequenciais ou punitivos resultantes do uso ou incapacidade de uso da plataforma. 
                Isso inclui, mas não se limita a, perda de dados, lucros cessantes ou interrupção 
                de negócios. A responsabilidade total não excederá o valor pago pelo usuário 
                nos últimos 12 meses.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">9. Suspensão e Cancelamento de Conta</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Reservamo-nos o direito de suspender ou cancelar contas por:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
                <li>Violação destes Termos de Uso</li>
                <li>Uso indevido ou abusivo da plataforma</li>
                <li>Atividades ilegais ou fraudulentas</li>
                <li>Não pagamento de valores devidos</li>
                <li>Solicitação expressa do usuário</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 mb-3">10. Alterações nos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar estes Termos de Uso periodicamente. Notificaremos os usuários 
                sobre mudanças significativas por meio da plataforma ou por email. O uso continuado 
                dos serviços após as alterações constituirá aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">11. Contato e Suporte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas, sugestões ou problemas relacionados a estes Termos de Uso, 
                entre em contato conosco através do email: contato@insightagency-ia.com
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-3">12. Foro e Jurisdição</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa 
                relacionada ao uso da plataforma será resolvida no foro da cidade de São Paulo, 
                estado de São Paulo, com renúncia a qualquer outro, por mais privilegiado que seja.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-muted-foreground text-center">
              Ao utilizar nossa plataforma, você confirma que leu, compreendeu e aceitou todos os termos acima.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
