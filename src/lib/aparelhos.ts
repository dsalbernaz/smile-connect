import imgTradicional from "@/assets/aparelho-tradicional.jpg";
import imgAutoligado from "@/assets/aparelho-autoligado.jpg";
import imgEstetico from "@/assets/aparelho-estetico.jpg";
import imgAlinhador from "@/assets/alinhador-transparente.png";
import cardTradicional from "@/assets/card-aparelho-tradicional.jpg";
import cardAutoligado from "@/assets/card-aparelho-autoligado.jpg";
import cardEstetico from "@/assets/card-aparelho-estetico.jpg";
import cardAlinhador from "@/assets/card-alinhador-transparente.jpg";

export const WHATSAPP_NUMBER = "5512981264630";
export const WHATSAPP_MESSAGE =
  "Olá, gostaria de agendar uma avaliação odontológica na OrthoDontic São José dos Campos";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export function whatsappLinkFor(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Aparelho = {
  slug: string;
  nome: string;
  tagline: string;
  descricaoCurta: string;
  descricaoLonga: string;
  cor: string; // background color for the card accent
  cardImage: string;
  cardImagePosition?: string;
  cardImageScale?: number;
  image: string;
  beneficios: string[];
  indicadoPara: string;
  whatsappMessage: string;
};

export const APARELHOS: Aparelho[] = [
  {
    slug: "tradicional",
    nome: "Aparelho Tradicional",
    tagline: "O modelo mais usado",
    descricaoCurta:
      "Corrige o alinhamento dos dentes com segurança e ótimo custo-benefício.",
    descricaoLonga:
      "O aparelho fixo tradicional é composto por bráquetes metálicos e fios que aplicam uma força contínua e controlada sobre os dentes, movendo-os gradualmente até a posição ideal. É a opção mais consolidada da ortodontia, indicada para a grande maioria dos casos, do mais simples ao mais complexo, com excelente custo-benefício.",
    cor: "#2f56c8",
    cardImage: cardTradicional,
    cardImagePosition: "center 30%",
    cardImageScale: 1.15,
    image: imgTradicional,
    beneficios: [
      "Ótimo custo-benefício",
      "Indicado para praticamente todos os casos",
      "Alta eficiência na correção do alinhamento",
      "Resultados previsíveis e duradouros",
    ],
    indicadoPara:
      "Pessoas que buscam um tratamento eficaz e acessível, sem abrir mão da qualidade do resultado.",
    whatsappMessage:
      "Olá, gostaria de agendar uma avaliação para o aparelho tradicional na OrthoDontic São José dos Campos",
  },
  {
    slug: "autoligado",
    nome: "Aparelho Autoligado",
    tagline: "Tecnologia que acelera o tratamento",
    descricaoCurta:
      "Menos atrito e mais conforto, sem as borrachinhas.",
    descricaoLonga:
      "O aparelho autoligado utiliza bráquetes com um sistema de fechamento próprio, dispensando as borrachinhas (elásticos). Isso reduz o atrito entre fio e bráquete, tornando o tratamento mais confortável, com trocas mais espaçadas e, em muitos casos, mais rápido. A higienização também fica mais fácil.",
    cor: "#17a2b8",
    cardImage: cardAutoligado,
    cardImagePosition: "center 38%",
    cardImageScale: 1.14,
    image: imgAutoligado,
    beneficios: [
      "Mais conforto durante o tratamento",
      "Sem borrachinhas, com menos atrito",
      "Consultas de manutenção mais espaçadas",
      "Higienização facilitada",
    ],
    indicadoPara:
      "Quem deseja um tratamento mais confortável, prático e potencialmente mais ágil.",
    whatsappMessage:
      "Olá, gostaria de agendar uma avaliação para o aparelho autoligado na OrthoDontic São José dos Campos",
  },
  {
    slug: "estetico",
    nome: "Aparelho Estético",
    tagline: "Mais discreto no seu sorriso",
    descricaoCurta:
      "Bráquetes transparentes que se misturam aos dentes.",
    descricaoLonga:
      "O aparelho estético funciona como o tradicional, mas com bráquetes de porcelana ou safira, transparentes ou da cor dos dentes. O resultado é um tratamento muito mais discreto, ideal para quem quer corrigir o sorriso sem chamar a atenção para o aparelho no dia a dia.",
    cor: "#e6197f",
    cardImage: cardEstetico,
    cardImagePosition: "center 32%",
    cardImageScale: 1.13,
    image: imgEstetico,
    beneficios: [
      "Bráquetes discretos, quase imperceptíveis",
      "Mesma eficiência do aparelho tradicional",
      "Ideal para quem tem contato direto com o público",
      "Visual mais harmonioso durante o tratamento",
    ],
    indicadoPara:
      "Quem quer um tratamento eficaz, porém mais discreto e elegante.",
    whatsappMessage:
      "Olá, gostaria de agendar uma avaliação para o aparelho estético na OrthoDontic São José dos Campos",
  },
  {
    slug: "alinhador-transparente",
    nome: "Alinhador Transparente",
    tagline: "Removível e quase invisível",
    descricaoCurta:
      "Aparelho removível e transparente, quase imperceptível.",
    descricaoLonga:
      "Os alinhadores transparentes são placas removíveis e sob medida que movem os dentes de forma gradual e planejada. São praticamente invisíveis, podem ser retirados para comer e escovar os dentes, e proporcionam muito mais conforto e liberdade no dia a dia. O tratamento é planejado digitalmente do início ao fim.",
    cor: "#f28c1f",
    cardImage: cardAlinhador,
    cardImagePosition: "center 30%",
    cardImageScale: 1.12,
    image: imgAlinhador,
    beneficios: [
      "Praticamente invisível",
      "Removível para comer e higienizar",
      "Mais conforto, sem fios e bráquetes",
      "Planejamento digital do tratamento",
    ],
    indicadoPara:
      "Quem busca máxima discrição, conforto e praticidade no tratamento.",
    whatsappMessage:
      "Olá, gostaria de agendar uma avaliação para o alinhador transparente na OrthoDontic São José dos Campos",
  },
];

export function getAparelho(slug: string) {
  return APARELHOS.find((a) => a.slug === slug);
}
