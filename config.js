// config.js

export const PALETTE = {
  UPB: '#E63946',         // Rojo
  Ciudad: '#00B4D8',      // Azul
  Academia: '#9D4EDD',    // Morado
  Industria: '#FFB703',   // Amarillo
  Talento: '#2EC4B6',     // Verde
  Confianza: '#F15BB5',   // Rosa
  Experiencia: '#00F5D4', // Turquesa
  Background: '#0B0D17',  // Oscuro profundo
  Text: '#FFFFFF'
};

export const SLIDES_CONFIG = {
  1: {
    type: 'WORD_FORMATION',
    words: [{ text: 'RELEVO', color: PALETTE.UPB, xRel: 0.5, yRel: 0.6 }],
    hasPhoto: false,
    layout: 'FULL'
  },
  2: {
    type: 'WORD_FORMATION',
    words: [{ text: 'AUDITORIO', color: PALETTE.UPB, xRel: 0.5, yRel: 0.75 }],
    hasPhoto: true,
    photoPath: 'assets/slide-02-grados.webp',
    layout: 'BOTTOM_STRIP' // Conforma las partículas en el 35% inferior
  },
  3: {
    type: 'ORGANIC_NETWORK',
    hasPhoto: false,
    layout: 'FULL'
  },
  4: {
    type: 'MULTI_WORDS',
    words: [
      { text: 'ACADEMIA', color: PALETTE.Academia, xRel: 0.2, yRel: 0.7 },
      { text: 'INDUSTRIA', color: PALETTE.Industria, xRel: 0.5, yRel: 0.7 },
      { text: 'CIUDAD', color: PALETTE.Ciudad, xRel: 0.8, yRel: 0.7 }
    ],
    hasPhoto: true,
    photoPath: 'assets/slide-04-actores.webp',
    layout: 'BOTTOM_STRIP'
  },
  5: {
    type: 'WORD_FORMATION',
    words: [{ text: 'IMPACTO', color: PALETTE.Talento, xRel: 0.5, yRel: 0.75 }],
    hasPhoto: true,
    photoPath: 'assets/slide-05-impacto.webp',
    layout: 'BOTTOM_STRIP'
  },
  6: {
    type: 'WORD_FORMATION',
    words: [{ text: 'COMUNIDAD', color: PALETTE.Confianza, xRel: 0.5, yRel: 0.6 }],
    hasPhoto: false,
    layout: 'FULL'
  },
  7: {
    type: 'WORD_FORMATION',
    words: [
      { text: 'TALENTO', color: PALETTE.Talento, xRel: 0.35, yRel: 0.6 },
      { text: 'CONFIANZA', color: PALETTE.Confianza, xRel: 0.65, yRel: 0.6 }
    ],
    hasPhoto: false,
    layout: 'FULL'
  },
  8: {
    type: 'WORD_FORMATION',
    words: [{ text: 'RUTAS', color: PALETTE.Experiencia, xRel: 0.75, yRel: 0.5 }],
    hasPhoto: true,
    photoPath: 'assets/slide-08-rutas.webp',
    layout: 'RIGHT_SPLIT' // Partículas en la mitad derecha
  },
  9: {
    type: 'WORD_FORMATION',
    words: [
      { text: 'EXPERIENCIA', color: PALETTE.Experiencia, xRel: 0.3, yRel: 0.6 },
      { text: 'FUTURO', color: PALETTE.Talento, xRel: 0.7, yRel: 0.6 }
    ],
    hasPhoto: false,
    layout: 'FULL'
  },
  10: {
    type: 'ORGANIC_NETWORK',
    hasPhoto: false,
    layout: 'FULL'
  },
  11: {
    type: 'WORD_FORMATION',
    words: [{ text: 'PRESENTE', color: PALETTE.Talento, xRel: 0.5, yRel: 0.65 }],
    hasPhoto: false,
    layout: 'FULL'
  },
  12: {
    type: 'WORD_FORMATION',
    words: [{ text: 'CONSTRUIR', color: PALETTE.UPB, xRel: 0.75, yRel: 0.5 }],
    hasPhoto: true,
    photoPath: 'assets/slide-12-futuro.webp',
    layout: 'RIGHT_SPLIT'
  },
  13: {
    type: 'FUSION_FORUM', // Fusión de todas las partículas en la palabra FÓRUM
    words: [{ text: 'FÓRUM', color: 'MULTI', xRel: 0.5, yRel: 0.45 }],
    hasPhoto: true,
    photoPath: 'assets/slide-13-cierre.webp',
    layout: 'CENTER_HERO'
  }
};