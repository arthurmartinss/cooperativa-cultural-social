import { Link } from "react-router-dom";
import ListaDepartamentos from "../components/ListaDepartamento/ListaDepartamentos";
import { valores } from "../data/valores";

export default function Home() {
  return (
    <main id="inicio">
      <section className="section-pad overflow-hidden bg-white">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-brand-yellow"
              />{" "}
              Cooperativa Cultural Social
            </p>
            <h1 className="mt-6 max-w-2xl text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-brand-ink">
              Conectamos pessoas.{" "}
              <span className="text-brand-navy">
                Transformamos ideias em oportunidades.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-brand-muted sm:text-lg">
              Cultura, arte, esporte, tecnologia e comunicação se encontram para
              criar projetos que valorizam talentos e fortalecem a comunidade.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/sobre" className="button-primary">
                Conheça a CCS <span aria-hidden="true">↗</span>
              </Link>
              <Link to="/setores" className="button-secondary">
                Explore nossos setores
              </Link>
            </div>
            <p className="mt-10 border-l-4 border-brand-yellow pl-4 text-sm font-medium leading-6 text-brand-muted">
              Cultura e colaboração como instrumentos de transformação social.
            </p>
          </div>
          <div className="relative isolate flex min-h-[340px] items-center justify-center overflow-hidden rounded-[28px] bg-brand-navy p-8 shadow-[0_30px_70px_rgba(1,40,105,0.16)] sm:min-h-[480px]">
            <div
              aria-hidden="true"
              className="absolute -right-25 -top-25 h-65 w-65 rounded-full border-[52px] border-brand-blue/25"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl"
            />
            <img
              src="/brand/ccs-simbolo.png"
              alt="Símbolo da CCS, reunindo cultura, arte, esporte e pessoas"
              width="1080"
              height="1080"
              className="relative z-10 w-full max-w-[370px]"
              fetchPriority="high"
            />
            <span className="absolute bottom-5 left-5 z-20 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-sm sm:bottom-7 sm:left-7">
              Cultura • Arte • Esporte • Tecnologia
            </span>
          </div>
        </div>
      </section>

      <section id="sobre" className="section-pad scroll-mt-24 bg-brand-surface">
        <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Quem somos</p>
            <h2 className="mt-4 max-w-lg text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Diferentes talentos, um propósito coletivo.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-brand-muted sm:text-lg">
            <p>
              A CCS é uma cooperativa criada para promover integração,
              criatividade, inclusão e desenvolvimento social por meio do
              trabalho colaborativo.
            </p>
            <p>
              Reunimos diferentes áreas e profissionais para desenvolver
              projetos, ações e iniciativas que aproximam as pessoas e abrem
              espaço para aprender, participar e criar.
            </p>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 font-bold text-brand-navy hover:text-brand-action"
            >
              Saiba mais sobre a CCS <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="setores" className="section-pad scroll-mt-24 bg-white">
        <div className="site-container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Nossa atuação</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
                Áreas que constroem a CCS juntas.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
                Cada setor contribui com seus conhecimentos para transformar
                ideias em projetos.
              </p>
            </div>
            <Link
              to="/setores"
              className="w-fit shrink-0 font-bold text-brand-navy hover:text-brand-action"
            >
              Ver todos os setores <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-10">
            <ListaDepartamentos />
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-surface">
        <div className="site-container grid gap-8 rounded-[28px] border border-brand-line bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-14">
          <div>
            <p className="eyebrow">CCS em movimento</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Acompanhe nossos eventos e resultados.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-brand-muted">
              Um espaço para reunir as atividades, os projetos em andamento e as
              entregas da cooperativa.
            </p>
            <Link to="/eventos" className="button-primary mt-7">
              Ver eventos e resultados <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="rounded-2xl bg-brand-sky p-6 sm:p-8">
            <span className="inline-block rounded-full bg-brand-yellow px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-navy">
              Tema do mês · TI
            </span>
            <p className="mt-5 text-xl font-bold leading-snug text-brand-navy sm:text-2xl">
              Conectando ideias: o início da CCS no mundo digital
            </p>
            <p className="mt-3 text-sm leading-6 text-brand-muted">
              O primeiro passo da presença digital da cooperativa.
            </p>
          </div>
        </div>
      </section>

      <section id="valores" className="section-pad scroll-mt-24 bg-white">
        <div className="site-container rounded-[28px] bg-brand-navy p-8 text-white sm:p-12 lg:p-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-yellow">
            O que nos guia
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Cooperação para gerar transformação social.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Acreditamos que a cultura e a inovação criam oportunidades quando
            caminham com respeito, inclusão e responsabilidade.
          </p>
          <ul className="mt-9 flex flex-wrap gap-3" aria-label="Valores da CCS">
            {valores.map((valor) => (
              <li
                key={valor.nome}
                className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white"
              >
                {valor.nome}
              </li>
            ))}
          </ul>
          <Link
            to="/valores"
            className="mt-8 inline-flex items-center gap-2 font-bold text-brand-yellow hover:text-white"
          >
            Conheça nossos valores <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
