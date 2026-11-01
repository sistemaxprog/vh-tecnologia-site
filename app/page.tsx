import {
  Cpu,
  Droplets,
  QrCode,
  ArrowRight,
  ShieldCheck,
  Gauge,
  Smartphone
} from "lucide-react";

const whatsapp =
  "https://wa.me/5511991044545?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20VH%20Tecnologia";

export default function Home() {
  return (
    <>
      <header className="header wrap">
        <a className="brand" href="#inicio">
          <Cpu size={29} />
          <span>
            VH <b>TECNOLOGIA</b>
          </span>
        </a>

        <nav>
          <a href="#solucoes">Soluções</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          className="outline"
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          Solicitar orçamento
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="wrap hero-inner">
            <span className="eyebrow">
              AUTOMAÇÃO • SOFTWARE • INOVAÇÃO
            </span>

            <h1>
              Tecnologia inteligente para{" "}
              <em>o seu negócio.</em>
            </h1>

            <p>
              Desenvolvemos soluções para automatizar
              operações, melhorar a experiência dos
              clientes e facilitar a gestão do seu negócio.
            </p>

            <div className="actions">
              <a className="button" href="#solucoes">
                Conheça nossas soluções
                <ArrowRight size={18} />
              </a>

              <a
                className="ghost"
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Fale com a gente
              </a>
            </div>

            <div className="hero-stats">
              <span>
                <ShieldCheck />
                Automação inteligente
              </span>
              <span>
                <Gauge />
                Gestão e telemetria
              </span>
              <span>
                <Smartphone />
                Experiência digital
              </span>
            </div>
          </div>
        </section>

        <section
          className="section wrap"
          id="solucoes"
        >
          <span className="eyebrow blue">
            NOSSOS PRODUTOS
          </span>

          <h2>
            Soluções para transformar sua operação
          </h2>

          <p className="section-desc">
            Tecnologia criada para negócios que buscam
            praticidade, segurança e eficiência.
          </p>

          <div className="cards">
            <article className="card">
              <div className="card-visual wash">
                <Droplets size={72} />
                <span>AUTOMAÇÃO DE LAVAGEM</span>
              </div>

              <div className="card-body">
                <span className="tag">
                  AUTOATENDIMENTO
                </span>

                <h3>LavaRápido Smart</h3>

                <p>
                  Sistema para lava-rápidos self-service
                  com pagamento digital, seleção de Água,
                  Espuma e Enxágue, controle do tempo e
                  painel de acompanhamento.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar demonstração
                  <ArrowRight size={17} />
                </a>
              </div>
            </article>

            <article className="card">
              <div className="card-visual access">
                <QrCode size={72} />
                <span>ACESSO INTELIGENTE</span>
              </div>

              <div className="card-body">
                <span className="tag">
                  CONTROLE DE ACESSO
                </span>

                <h3>LaveAccess</h3>

                <p>
                  Controle de entrada por QR Code,
                  pensado para lavanderias e outros
                  estabelecimentos que precisam gerenciar
                  o acesso com praticidade.
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar demonstração
                  <ArrowRight size={17} />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="about" id="sobre">
          <div className="wrap about-inner">
            <div>
              <span className="eyebrow">
                QUEM SOMOS
              </span>

              <h2>
                Inovação que funciona no mundo real.
              </h2>
            </div>

            <p>
              A VH Tecnologia desenvolve soluções de
              software e automação para simplificar
              processos comerciais. Nossos projetos unem
              equipamentos inteligentes, interfaces
              intuitivas e ferramentas de gestão.
            </p>
          </div>
        </section>

        <section
          className="section wrap contact"
          id="contato"
        >
          <span className="eyebrow blue">
            VAMOS CONVERSAR?
          </span>

          <h2>
            Leve mais tecnologia para sua empresa.
          </h2>

          <p>
            Conheça nossos projetos e converse sobre
            a solução ideal para seu negócio.
          </p>

          <a
            className="button"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento
            <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>
            © {new Date().getFullYear()} VH Tecnologia
          </span>
          <span>
            Automação • Software • Inovação
          </span>
        </div>
      </footer>
    </>
  );
}
