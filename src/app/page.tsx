import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import spindowHero from "../../public/img/spindow-hero.jpg";
import pomeloHero from "../../public/img/pomelo-hero.jpg";
import zammerPicole from "../../public/img/zammer-picole.jpg";
import khuiHero from "../../public/img/khui-hero.jpg";
import portrait from "../../public/img/douglas.jpg";

const LINKEDIN = "https://www.linkedin.com/in/douglasoliveiraa/";
const GITHUB = "https://github.com/douglasdeoliveira";

const tools = ["Next.js", "React", "Node.js", "PostgreSQL", "OpenAI", "Claude", "Whisper", "WhatsApp", "Swift"];
const capabilities = ["Chat", "Voz", "Agentes", "RAG", "Automação", "WhatsApp", "Web", "Mobile"];
const waveDelays = Array.from({ length: 14 }, (_, i) => (i * 97) % 900);

const buildLines = [
  { t: "Cadastro e login", k: "web e mobile" },
  { t: "Pagamentos", k: "cartão e Pix" },
  { t: "Assistente com IA", k: "chat e voz" },
  { t: "Painel administrativo", k: "gestão" },
  { t: "No ar para os primeiros clientes", k: "lançamento", done: true },
];

const steps = [
  { n: "01", t: "Conversa", d: "Você me conta o produto e o problema. Eu volto com onde a IA faz diferença e um caminho para chegar lá." },
  { n: "02", t: "Construção", d: "Entregas curtas que você testa de verdade, com custo e qualidade das respostas medidos." },
  { n: "03", t: "No ar", d: "O sistema em produção, documentado, e o seu time pronto para seguir sem depender de mim." },
];

type Project = {
  name: string;
  kind: string;
  line: string;
  href?: string;
  img?: { src: typeof spindowHero; alt: string; pos: string };
  media?: "chat" | "stock";
};

const projects: Project[] = [
  { name: "Spindow", kind: "IA · educação · acessibilidade", line: "Inglês para pessoas com dislexia, com tutor de conversa e prática de pronúncia por voz.", href: "https://spindow.com.br", img: { src: spindowHero, alt: "Página inicial do Spindow", pos: "top" } },
  { name: "Luvi", kind: "IA · agente no WhatsApp", line: "Agente no WhatsApp que analisava o Instagram do cliente e vendia na conversa.", media: "chat" },
  { name: "Pomelo", kind: "App iOS e macOS", line: "Converte e comprime arquivos pelo menu Compartilhar, tudo no aparelho.", href: "https://pomelofiles.app", img: { src: pomeloHero, alt: "Página do Pomelo com a roda de formatos", pos: "center" } },
  { name: "Zammer Sorvetes", kind: "Site e sistema de gestão", line: "Site da marca e sistema de pedidos entre a fábrica e as lojas.", href: "https://zammer.com.br", img: { src: zammerPicole, alt: "Picolés Zammer no site da marca", pos: "center" } },
  { name: "09 Iluminação", kind: "Sistema de gestão", line: "Orçamentos, pedidos e estoque de uma empresa de iluminação.", media: "stock" },
  { name: "K-hui", kind: "Site e plataforma", line: "Site e gestão de academia com sistema de créditos.", href: "https://khui.com.br", img: { src: khuiHero, alt: "Página da academia K-hui", pos: "top" } },
];

function Icon({ d, className = "ico" }: { d: React.ReactNode; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {d}
    </svg>
  );
}
const arrowRight = <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>;
const arrowUpRight = <><path d="M7 7h10v10" /><path d="M7 17 17 7" /></>;
const check = <path d="M20 6 9 17l-5-5" />;

function Wave() {
  return (
    <span className="wave" aria-hidden="true">
      {waveDelays.map((d, i) => (
        <i key={i} style={{ animationDelay: `${d}ms` }} />
      ))}
    </span>
  );
}

function Typing({ delay, className = "" }: { delay: string; className?: string }) {
  return (
    <div className={`msg typing ${className}`} style={{ animationDelay: delay }}>
      <i /><i /><i />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>

      <header className="header">
        <nav aria-label="Principal" className="wrap nav">
          <a href="#topo" className="brand">Douglas de Oliveira</a>
          <div className="nav-right">
            <div className="nav-links">
              <a className="link" href="#servicos">Serviços</a>
              <a className="link" href="#projetos">Projetos</a>
              <a className="link" href="#sobre">Sobre</a>
            </div>
            <a className="btn btn-secondary btn-small" href="#contato">Vamos conversar</a>
          </div>
        </nav>
      </header>

      <section id="topo" aria-labelledby="h1" className="wrap hero">
        <div className="hero-text">
          <h1 id="h1" className="h1 in">Coloco IA dentro do seu produto</h1>
          <p className="lead in" style={{ animationDelay: "50ms" }}>
            E ela funciona em produção. Construo chat, voz, agentes e automações para startups e empresas, do protótipo ao produto no ar.
          </p>
          <div className="ctas in" style={{ animationDelay: "100ms" }}>
            <a className="btn btn-primary" href="#contato">
              Vamos conversar sobre o seu produto <Icon d={arrowRight} />
            </a>
            <a className="btn btn-secondary" href="#projetos">Ver projetos</a>
          </div>
          <div className="tools in" style={{ animationDelay: "150ms" }}>
            <span className="mono">Com o que eu construo</span>
            <ul>
              {tools.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>

        <div className="in" style={{ animationDelay: "200ms" }}>
          <figure className="rise">
            <div className="window">
              <div className="window-bar"><span className="mono">spindow.com.br</span></div>
              <Image className="window-shot" src={spindowHero} alt="Página inicial do Spindow" loading="eager" fetchPriority="high" sizes="(max-width: 1024px) 100vw, 568px" />
              <div className="chatcard" role="img" aria-label="Conversa de exemplo com o tutor do Spindow: o aluno pergunta como dizer eu tenho estudado, o tutor responde I have been studying e pede para falar em voz alta, e o aluno responde com um áudio">
                <span className="mono">Tutor</span>
                <div className="bubble out in" style={{ animationDelay: "700ms" }}>Como digo “eu tenho estudado”?</div>
                <div className="bubble in-msg in" style={{ animationDelay: "1400ms" }}>“I have been studying.” Agora fale em voz alta.</div>
                <div className="bubble out voice in" style={{ animationDelay: "2100ms" }}>
                  <Wave />
                  <span className="mono">0:04</span>
                </div>
              </div>
            </div>
            <figcaption className="mono">Tutor de conversa do Spindow · conversa de exemplo</figcaption>
          </figure>
        </div>
      </section>

      <div className="band">
        <ul className="wrap" aria-label="O que eu construo">
          {capabilities.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>

      <main id="conteudo" className="wrap">
        <section id="servicos" aria-labelledby="svc-h" className="sec">
          <div className="sec-head">
            <h2 id="svc-h" className="h2" style={{ maxWidth: "12em" }}>O que eu construo para você</h2>
            <p className="lead" style={{ maxWidth: "28em" }}>
              Três formas de colocar IA para trabalhar no seu negócio. Todas terminam com o sistema no ar e o seu time sabendo mantê-lo.
            </p>
          </div>

          <div className="svc">
            <article className="card svc-card svc-ai">
              <div className="svc-text">
                <span className="mono">chat · voz · RAG · automação</span>
                <h3 className="h3">IA dentro do seu produto</h3>
                <p className="body">Assistentes, voz e busca nos seus dados, encaixados no que o usuário já faz e integrados ao seu backend.</p>
              </div>
              <div className="demo demo-ai" aria-hidden="true">
                <div className="msg bubble out raised">Quais pedidos atrasaram hoje?</div>
                <div className="msg bubble in-msg alt" style={{ animationDelay: "1.2s" }}>Três. O mais antigo está parado na transportadora desde ontem.</div>
                <div className="msg bubble out raised voice" style={{ animationDelay: "2.4s" }}>
                  <Wave />
                  <span className="mono">0:03</span>
                </div>
                <Typing delay="3.6s" className="bubble alt" />
              </div>
            </article>

            <article className="card svc-card svc-wa">
              <div className="demo wa" aria-hidden="true">
                <div className="msg bubble out">Vi o anúncio de vocês</div>
                <div className="msg bubble in-msg" style={{ animationDelay: "1.4s" }}>Oi, posso te mostrar os planos?</div>
                <div className="msg bubble out" style={{ animationDelay: "2.8s" }}>Pode sim</div>
                <Typing delay="4.2s" className="bubble in-msg" />
              </div>
              <span className="mono">atende · qualifica · vende</span>
              <h3 className="h3">Agente de IA no WhatsApp</h3>
              <p className="body">Atendimento e vendas na conversa, 24 horas, com histórico de cada mensagem.</p>
            </article>

            <article className="card svc-card svc-mvp">
              <div className="svc-text">
                <span className="mono">web · mobile · pagamentos · painel</span>
                <h3 className="h3">MVP com IA do zero</h3>
                <p className="body">Da ideia ao produto pronto para os primeiros clientes. Você recebe o código e a autonomia para seguir.</p>
              </div>
              <ul className="build-list" aria-hidden="true">
                {buildLines.map((l, i) => (
                  <li key={l.t} className="build" style={{ animationDelay: `${i * 600}ms` }}>
                    <span style={{ color: l.done ? "var(--accent)" : "var(--t3)", display: "inline-flex" }}><Icon d={check} /></span>
                    <span>{l.t}</span>
                    <span className="mono">{l.k}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="projetos" aria-labelledby="proj-h" className="sec">
          <div className="sec-head">
            <h2 id="proj-h" className="h2">Projetos</h2>
            <p className="lead">Alguns produtos que construí de ponta a ponta</p>
          </div>
          <div className="projgrid">
            {projects.map((p) => (
              <article key={p.name} className="card proj">
                <div className="proj-media">
                  {p.img && (
                    <Image className="shot" src={p.img.src} alt={p.img.alt} sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 380px" style={{ objectPosition: p.img.pos }} />
                  )}
                  {p.media === "chat" && (
                    <div className="demo-chat wa" role="img" aria-label="Conversa de exemplo do Luvi no WhatsApp">
                      <div className="bubble out">Quero melhorar meu Instagram</div>
                      <div className="bubble in-msg">Me manda o seu @ que eu analiso agora</div>
                      <div className="bubble out">@meunegocio</div>
                    </div>
                  )}
                  {p.media === "stock" && (
                    <div className="stock" role="img" aria-label="Painel de estoque de exemplo da 09 Iluminação">
                      <div className="head"><span>Produto</span><span>Estoque</span><span>Livre</span></div>
                      <div><span>Pendente linear</span><span>40</span><span>28</span></div>
                      <div className="low"><span>Spot LED</span><span>18</span><span style={{ fontWeight: 500 }}>3</span></div>
                      <div><span>Arandela externa</span><span>9</span><span>9</span></div>
                    </div>
                  )}
                </div>
                <div className="proj-body">
                  <span className="mono">{p.kind}</span>
                  <h3 className="h3">{p.name}</h3>
                  <p className="body">{p.line}</p>
                  {p.href && (
                    <a className="link proj-link" href={p.href} target="_blank" rel="noopener noreferrer">
                      {p.href.replace("https://", "")} <Icon d={arrowUpRight} className="ico ico-sm" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="como-h" className="sec split how">
          <div className="how-head">
            <h2 id="como-h" className="h2">Como eu trabalho</h2>
            <p className="lead">Três etapas, do primeiro papo ao sistema rodando. Você acompanha cada uma de perto.</p>
          </div>
          <ol className="steps">
            <li className="track" aria-hidden="true"><b /></li>
            {steps.map((s) => (
              <li key={s.n} className="step">
                <span className="step-n">{s.n}</span>
                <div>
                  <h3 className="h3">{s.t}</h3>
                  <p className="body">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="sobre" aria-labelledby="sobre-h" className="sec split about">
          <Image className="portrait" src={portrait} alt="Douglas de Oliveira" sizes="(max-width: 760px) 100vw, 440px" />
          <div className="about-text">
            <div className="about-head">
              <h2 id="sobre-h" className="h2">Oi, eu sou o Douglas</h2>
              <p className="role">
                Engenheiro de software, atualmente no
                {/* ponytail: marca provisória; trocar pelo SVG oficial do Mercado Livre */}
                <span className="ml" role="img" aria-label="Mercado Livre">mercado livre</span>
              </p>
            </div>
            <p className="lead" style={{ color: "var(--t1)" }}>
              Há 15 anos eu construo software que precisa funcionar todo dia, com muita gente usando. Além do Mercado Livre, ajudo startups e empresas a colocar IA dentro dos seus produtos.
            </p>
            <p className="lead">Gosto de projeto em que a IA resolve um problema real do usuário, não só vira um botão novo na tela.</p>
            <div className="about-links">
              <a className="btn btn-secondary btn-small" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="btn btn-secondary btn-small" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <section id="contato" aria-labelledby="ct-h" className="contact">
        <div className="wrap split">
          <div className="contact-text">
            <h2 id="ct-h" className="h2">Tem uma ideia? Vamos tirar do papel</h2>
            <p className="lead">Me conta o que você quer construir. Eu leio pessoalmente e respondo com os próximos passos e um horário para a gente conversar.</p>
            <a className="link" href="mailto:contato@douglasdeoliveira.dev" style={{ fontWeight: 500, color: "var(--t1)" }}>contato@douglasdeoliveira.dev</a>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <p className="wordmark" aria-hidden="true">Douglas <span>de Oliveira</span></p>
          <div className="footer-meta">
            <span>Engenharia de Software</span>
            <nav aria-label="Rodapé">
              <a className="link" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="link" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
