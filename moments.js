// moments.js
import { PALETTE } from './config.js';

export const moments = [
  {
    id: "relevo-generacional",
    state: "title",
    words: [{ text: "RELEVO", color: PALETTE.UPB, xRel: 0.5, yRel: 0.68 }],
    copy: {
      es: { title: "RELEVO GENERACIONAL: LA VENTAJA QUE NADIE ESTÁ APROVECHANDO", kicker: "Fórum UPB" },
      pt: { title: "RELEVO GERACIONAL: A VANTAGEM QUE NINGUÉM ESTÁ APROVEITANDO", kicker: "Fórum UPB" }
    }
  },
  {
    id: "universidad-mundo",
    state: "content",
    words: [{ text: "AUDITORIO", color: PALETTE.UPB, xRel: 0.5, yRel: 0.78 }],
    asset: { type: "image", src: "assets/slide-02-grados.webp", placement: "background" },
    copy: {
      es: { title: "¿un gran auditorio solo para hacer grados?", kicker: "Fórum UPB" },
      pt: { title: "um grande auditório apenas para formaturas?", kicker: "Fórum UPB" }
    }
  },
  {
    id: "universidad-mundo-2",
    state: "content",
    type: "PLANET", // Formación del planeta Tierra en verde y azul
    copy: {
      es: { title: "Los eventos no llegaron a la Universidad. La Universidad decidió encontrarse con el mundo.", kicker: "Fórum UPB" },
      pt: { title: "Os eventos não chegaram à Universidade. A Universidade decidiu se encontrar com o mundo.", kicker: "Fórum UPB" }
    }
  },
  {
    id: "actores",
    state: "content",
    words: [
      { text: "ACADEMIA", color: PALETTE.Academia, xRel: 0.18, yRel: 0.75 },  // Morado
      { text: "INDUSTRIA", color: PALETTE.Industria, xRel: 0.50, yRel: 0.75 }, // Amarillo
      { text: "CIUDAD", color: PALETTE.Ciudad, xRel: 0.82, yRel: 0.75 }        // Azul
    ],
    asset: { type: "image", src: "assets/slide-04-actores.webp", placement: "background" },
    copy: {
      es: { title: "Academia + Industria + Ciudad", kicker: "Ecosistema" },
      pt: { title: "Academia + Indústria + Cidade", kicker: "Ecosistema" }
    }
  },
  {
    id: "impacto",
    state: "content",
    words: [{ text: "IMPACTO", color: PALETTE.Talento, xRel: 0.5, yRel: 0.78 }],
    asset: { type: "image", src: "assets/slide-05-impacto.webp", placement: "background" },
    copy: {
      es: { title: "Los eventos nunca fueron el objetivo. El impacto sí.", kicker: "Propósito" },
      pt: { title: "Os eventos nunca foram o objetivo. O impacto, sim.", kicker: "Propósito" }
    }
  },
  {
    id: "comunidad",
    state: "content",
    words: [{ text: "COMUNIDAD", color: PALETTE.Confianza, xRel: 0.5, yRel: 0.68 }],
    morphWord: { text: "TRANSFORMACIÓN", color: PALETTE.Talento, xRel: 0.5, yRel: 0.68 }, // Morfosis animada
    copy: {
      es: { title: "Un evento trae personas. Una comunidad trae transformación.", kicker: "Conexión" },
      pt: { title: "Um evento traz pessoas. Uma comunidade traz transformação.", kicker: "Conexão" }
    }
  },
  {
    id: "confianza",
    state: "content",
    words: [
      { text: "TALENTO", color: PALETTE.Talento, xRel: 0.28, yRel: 0.70 },
      { text: "CONFIANZA", color: PALETTE.Confianza, xRel: 0.72, yRel: 0.70, grow: true } // Crece en tamaño
    ],
    copy: {
      es: { title: "El talento crece a la velocidad de la confianza.", kicker: "Crecimiento" },
      pt: { title: "O talento cresce na velocidade da confiança.", kicker: "Crescimento" }
    }
  },
  {
    id: "nuevas-rutas",
    state: "content",
    words: [{ text: "RUTAS", color: PALETTE.Experiencia, xRel: 0.75, yRel: 0.60 }],
    asset: { type: "image", src: "assets/slide-08-rutas.webp", placement: "background" },
    copy: {
      es: { title: "La experiencia construye el camino. Las nuevas generaciones descubren nuevas rutas.", kicker: "Generaciones" },
      pt: { title: "A experiência constrói o caminho. As novas gerações descobrem novas rotas.", kicker: "Gerações" }
    }
  },
  {
    id: "vision-generaciones",
    state: "content",
    words: [
      { text: "EXPERIENCIA", color: PALETTE.Experiencia, xRel: 0.28, yRel: 0.70 },
      { text: "FUTURO", color: PALETTE.Talento, xRel: 0.72, yRel: 0.70 }
    ],
    copy: {
      es: { title: "Una visión. Dos generaciones.", kicker: "Sinergia" },
      pt: { title: "Uma visão. Duas gerações.", kicker: "Sinergia" }
    }
  },
  {
    id: "trabajan-juntas",
    state: "content",
    type: "CHOREOGRAPHY", // Danza de figuras geométricas en malla unificada
    copy: {
      es: { title: "El crecimiento no ocurre cuando una generación reemplaza a otra. Ocurre cuando trabajan juntas.", kicker: "Unión" },
      pt: { title: "O crescimento não acontece quando uma geração substitui outra. Acontece quando trabalham juntas.", kicker: "União" }
    }
  },
  {
    id: "presente-joven",
    state: "content",
    words: [{ text: "PRESENTE", color: PALETTE.Talento, xRel: 0.5, yRel: 0.68 }],
    copy: {
      es: { title: "Los jóvenes no son el futuro. Son el presente que muchas organizaciones aún no ven.", kicker: "Liderazgo" },
      pt: { title: "Os jovens não são o futuro. São o presente que muitas organizações ainda não vêm.", kicker: "Liderança" }
    }
  },
  {
    id: "futuro-construido",
    state: "content",
    words: [{ text: "CONSTRUIR", color: PALETTE.UPB, xRel: 0.75, yRel: 0.60 }],
    asset: { type: "image", src: "assets/slide-12-futuro.webp", placement: "background" },
    copy: {
      es: { title: "El futuro no se hereda. Se construye.", kicker: "Acción" },
      pt: { title: "O futuro não se herda. Constrói-se.", kicker: "Ação" }
    }
  },
  {
    id: "cierre-forum",
    state: "qr",
    isHero: true,
    words: [{ text: "FÓRUM", color: "MULTI", xRel: 0.5, yRel: 0.48 }],
    asset: { type: "image", src: "assets/slide-13-cierre.webp", placement: "background" },
    copy: {
      es: { title: "Múltiples elementos. Una sola comunidad.", kicker: "Fórum UPB" },
      pt: { title: "Múltiples elementos. Uma só comunidade.", kicker: "Fórum UPB" }
    }
  }
];