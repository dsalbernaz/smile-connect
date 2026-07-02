import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, Clock, CheckCircle2, Stethoscope, Smile, Shield, Users, Star, Quote, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { APARELHOS } from "@/lib/aparelhos";
import clinicRoom1 from "@/assets/clinic-room-1.jpg";
import clinicRoom2 from "@/assets/clinic-room-2.jpg";
import clinicReception1 from "@/assets/clinic-reception-1.jpg";
import clinicReception2 from "@/assets/clinic-reception-2.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      {
        title: "OrthoDontic São José dos Campos | Agende sua Avaliação Odontológica",
      },
      {
        name: "description",
        content:
          "Agende sua avaliação odontológica na OrthoDontic São José dos Campos. Ortodontia, clínica geral, implantes, clareamento e mais. WhatsApp (12) 98126-4630.",
      },
    ],
  }),
});




const CLINIC_PHOTOS = [
  {
    src: clinicReception1,
    position: "center",
  },
  {
    src: clinicRoom1,
    position: "center",
  },
  {
    src: clinicRoom2,
    position: "center",
  },
  {
    src: clinicReception2,
    position: "center",
  },
];

const GOOGLE_RATING = "4,9";
const GOOGLE_REVIEWS_COUNT = "380";
const TESTIMONIALS = [
  {
    name: "Ana Paula Ribeiro",
    text: "Atendimento excelente do começo ao fim. Equipe atenciosa, ambiente limpo e meu tratamento ortodôntico está sendo perfeito. Recomendo demais!",
  },
  {
    name: "Marcelo Souza",
    text: "Fiz meu implante aqui e superou as expectativas. Profissionais muito qualificados e preço justo. Fui super bem acolhido em todas as consultas.",
  },
  {
    name: "Juliana Alves",
    text: "Levo meus filhos e o cuidado com as crianças é encantador. Sem trauma nenhum, eles até gostam de ir ao dentista agora. Nota mil!",
  },
  {
    name: "Roberto Carvalho",
    text: "Marquei a avaliação pelo WhatsApp e fui atendido rapidamente. Explicaram tudo com clareza e o resultado do meu sorriso ficou incrível.",
  },
  {
    name: "Fernanda Lima",
    text: "Clínica moderna e organizada, no centro e de fácil acesso. Equipe humana e pontual. Meu clareamento ficou lindo, muito satisfeita!",
  },
  {
    name: "Diego Martins",
    text: "Melhor experiência odontológica que já tive. Atendimento humanizado e resultado impecável. Vale cada estrela das avaliações!",
  },
];



function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-10 text-center md:mb-14">
      <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      {/* Fixed WhatsApp CTA (mobile always visible, desktop optional) */}
      <WhatsAppButton size="fixed" />

      {/* Header / Logo */}
      <header className="w-full border-b border-border/50 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4 md:py-6">
          <img
            src="https://www.orthodonticbrasil.com.br/wp-content/uploads/2025/08/logo.png"
            alt="OrthoDontic Brasil"
            className="h-10 w-auto md:h-14"
            loading="eager"
          />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary px-4 py-16 text-primary-foreground md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Seu sorriso em boas mãos
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed opacity-90 md:text-xl">
            A OrthoDontic São José dos Campos – Unidade Quinze de Novembro (Praça Cônego Lima)
            oferece tratamentos odontológicos completos para toda a família. Agende sua avaliação
            hoje mesmo e dê o primeiro passo para o sorriso dos seus sonhos.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <WhatsAppButton size="large" />
            <span className="text-sm opacity-75">
              Resposta rápida via WhatsApp
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            subtitle="Especialistas em cuidar do seu sorriso com tecnologia e carinho"
          >
            Nossos Tratamentos
          </SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Smile className="h-8 w-8" />,
                title: "Ortodontia",
                desc: "Aparelhos tradicionais, estéticos e alinhadores invisíveis para todos os perfis.",
              },
              {
                icon: <Stethoscope className="h-8 w-8" />,
                title: "Clínica Geral",
                desc: "Restaurações, profilaxias, extrações e tratamento de canal com segurança.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Implantes",
                desc: "Recupere sua mastigação e estética com implantes dentários de alta qualidade.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Odontopediatria",
                desc: "Cuidados especiais para as crianças, com ambiente acolhedor e sem trauma.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de aparelho */}
      <section className="bg-secondary/50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle subtitle="Encontre o aparelho ideal para o seu sorriso. Clique para saber mais sobre cada tipo.">
            Conheça nossos aparelhos
          </SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {APARELHOS.map((a) => (
              <Link
                key={a.slug}
                to="/aparelhos/$slug"
                params={{ slug: a.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={a.cardImage}
                    alt={a.nome}
                    className="h-full w-full object-cover transition-transform duration-500"
                    style={{
                      objectPosition: a.cardImagePosition ?? "center",
                      transform: `scale(${a.cardImageScale ?? 1})`,
                    }}
                    loading="lazy"
                  />
                  <span
                    className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white"
                    style={{ backgroundColor: a.cor }}
                  >
                    {a.tagline}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-foreground">{a.nome}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {a.descricaoCurta}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* Why choose us */}
      <section className="bg-secondary/50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle subtitle="Mais de 20 anos cuidando de sorrisos em todo o Brasil">
            Por que escolher a OrthoDontic?
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Profissionais altamente qualificados e em constante atualização",
              "Tecnologia de ponta em diagnóstico e tratamento",
              "Ambiente moderno, higienizado e acolhedor",
              "Planos facilitados para o seu orçamento",
              "Atendimento humanizado para toda a família",
              "Unidades em várias cidades do Brasil",
            ].map((text) => (
              <div
                key={text}
                className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Photos */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle subtitle="Conheça nossa estrutura moderna e acolhedora">
            Nossa Clínica
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {CLINIC_PHOTOS.map((photo, i) => (
              <div
                key={i}
                className="aspect-video overflow-hidden rounded-2xl border border-border shadow-sm"
              >
                <img
                  src={photo.src}
                  alt={`Foto da clínica OrthoDontic São José dos Campos ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ objectPosition: photo.position }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle subtitle="Veja o que nossos pacientes dizem sobre a OrthoDontic São José dos Campos">
            Quem confia, recomenda
          </SectionTitle>

          {/* Google rating badge */}
          <div className="mx-auto mb-10 flex max-w-md flex-col items-center gap-2 rounded-2xl border border-border bg-white p-5 text-center shadow-sm md:mb-14">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground">{GOOGLE_RATING}</span>
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Nota <span className="font-semibold text-foreground">{GOOGLE_RATING}</span> em mais de{" "}
              <span className="font-semibold text-foreground">{GOOGLE_REVIEWS_COUNT} avaliações</span> no Google
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <Quote className="h-7 w-7 text-primary/30" aria-hidden="true" />
                <div className="mt-3 flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                  "{item.text}"
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-border/60 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">Avaliação do Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center md:mt-14">
            <WhatsAppButton size="large" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-4 py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-4xl">
            Não espere mais para cuidar do seu sorriso
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Agende sua avaliação agora mesmo pelo WhatsApp. É rápido, fácil e sem compromisso.
          </p>
          <div className="mt-8">
            <WhatsAppButton size="large" />
          </div>
          <p className="mt-4 text-sm opacity-75">
            Horário de atendimento: Seg–Sex 09:00–18:00 | Sáb 08:00–12:00
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle subtitle="Estamos prontos para receber você">
            Onde nos encontrar
          </SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Endereço</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Praça Cônego Lima, 30
                  <br />
                  Centro, São José dos Campos – SP
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Telefone</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  (12) 3941-8966
                </p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/orthodontic.sjc15denovembro?igsh=MTRxMmQ4YXRhNTFrbw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:bg-secondary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Instagram className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Instagram</p>
                <p className="mt-1 text-sm text-muted-foreground break-all">
                  @orthodontic.sjc15denovembro
                </p>
              </div>
            </a>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Funcionamento</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Seg–Sex: 09:00–18:00
                  <br />
                  Sáb: 08:00–12:00
                </p>
              </div>
            </div>
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
            EPAO: 23552/SP
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            OrthoDontic São José dos Campos – Praça Cônego Lima, 30, Centro
          </p>
          <p className="mt-4 text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} OrthoDontic Brasil. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
