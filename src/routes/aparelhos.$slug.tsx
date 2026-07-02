import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { APARELHOS, getAparelho, whatsappLinkFor } from "@/lib/aparelhos";

export const Route = createFileRoute("/aparelhos/$slug")({
  loader: ({ params }) => {
    const aparelho = getAparelho(params.slug);
    if (!aparelho) throw notFound();
    return { aparelho };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Aparelho não encontrado | OrthoDontic São José dos Campos" }, { name: "robots", content: "noindex" }] };
    }
    const { aparelho } = loaderData;
    const title = `${aparelho.nome} | OrthoDontic São José dos Campos`;
    const description = `${aparelho.descricaoCurta} Agende sua avaliação na OrthoDontic São José dos Campos pelo WhatsApp.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:image", content: aparelho.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: aparelho.image },
      ],
    };
  },
  component: AparelhoPage,
  notFoundComponent: AparelhoNotFound,
  errorComponent: AparelhoError,
});

function AparelhoNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center">
      <h1 className="text-2xl font-bold text-primary">Aparelho não encontrado</h1>
      <p className="text-muted-foreground">O tipo de aparelho que você procura não existe.</p>
      <Link to="/" className="font-semibold text-primary underline-offset-4 hover:underline">
        Voltar à página inicial
      </Link>
    </main>
  );
}

function AparelhoError({ reset }: { reset: () => void }) {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center">
      <h1 className="text-2xl font-bold text-primary">Algo deu errado</h1>
      <button
        onClick={() => {
          reset();
          router.invalidate();
        }}
        className="font-semibold text-primary underline-offset-4 hover:underline"
      >
        Tentar novamente
      </button>
    </main>
  );
}

function AparelhoPage() {
  const { aparelho } = Route.useLoaderData();
  const whatsappLink = whatsappLinkFor(aparelho.whatsappMessage);
  const outros = APARELHOS.filter((a) => a.slug !== aparelho.slug);

  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <WhatsAppButton size="fixed" href={whatsappLink} />

      {/* Header / Logo */}
      <header className="w-full border-b border-border/50 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4 md:py-6">
          <Link to="/">
            <img
              src="https://www.orthodonticbrasil.com.br/wp-content/uploads/2025/08/logo.png"
              alt="OrthoDontic Brasil"
              className="h-10 w-auto md:h-14"
              loading="eager"
            />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden px-4 py-16 text-white md:py-24"
        style={{ backgroundColor: aparelho.cor }}
      >
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium opacity-90 transition-opacity hover:opacity-100"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar
            </Link>
            <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
              {aparelho.tagline}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              {aparelho.nome}
            </h1>
            <p className="mt-4 max-w-md text-lg leading-relaxed opacity-90">
              {aparelho.descricaoCurta}
            </p>
            <div className="mt-8">
              <WhatsAppButton size="large" href={whatsappLink} />
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border-4 border-white/30 shadow-2xl">
            <img
              src={aparelho.image}
              alt={aparelho.nome}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Descrição */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">Sobre o tratamento</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {aparelho.descricaoLonga}
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-6">
            <h3 className="text-lg font-semibold text-foreground">Indicado para</h3>
            <p className="mt-2 text-muted-foreground">{aparelho.indicadoPara}</p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-primary">Principais benefícios</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {aparelho.beneficios.map((b: string) => (
              <div key={b} className="flex items-start gap-3 rounded-xl bg-card p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-4xl">Quer saber se é o ideal para você?</h2>
          <p className="mt-4 text-lg opacity-90">
            Agende uma avaliação gratuita e sem compromisso. Nossa equipe indica o melhor
            tratamento para o seu sorriso.
          </p>
          <div className="mt-8">
            <WhatsAppButton size="large" href={whatsappLink} />
          </div>
        </div>
      </section>

      {/* Outros aparelhos */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">
            Conheça outros tipos de aparelho
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {outros.map((a) => (
              <Link
                key={a.slug}
                to="/aparelhos/$slug"
                params={{ slug: a.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.nome}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground">{a.nome}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.descricaoCurta}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 px-4 py-10">
        <div className="mx-auto max-w-6xl text-center">
          <img
            src="https://www.orthodonticbrasil.com.br/wp-content/uploads/2025/08/logo.png"
            alt="OrthoDontic Brasil"
            className="mx-auto h-8 w-auto opacity-70"
            loading="lazy"
          />
          <p className="mt-4 text-xs text-muted-foreground">
            Responsável Técnico: Giuliano Ferreira Queiroz – CRO 140414/SP
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            OrthoDontic São José dos Campos – Praça Cônego Lima, 30, Centro
          </p>
        </div>
      </footer>
    </main>
  );
}
