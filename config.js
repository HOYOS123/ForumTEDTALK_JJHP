// config.js

export const PALETTE = {
  UPB: '#E63946',         // Rojo
  Ciudad: '#00B4D8',      // Azul
  Academia: '#9D4EDD',    // Morado
  Industria: '#FFB703',   // Amarillo
  Talento: '#2EC4B6',     // Verde
  Confianza: '#F15BB5',   // Rosa
  Experiencia: '#00F5D4', // Turquesa
  Background: '#0B0D17',  // Fondo oscuro
  Text: '#FFFFFF'
};

export const languageLabels = {
  es: 'ES',
  pt: 'PT'
};

export const CONFIG = {
  defaultLanguage: 'es',
  brandLine: 'Fórum UPB · Centro de Eventos',
  qr: {
    memoryUrl: 'https://juanferfranco.github.io/ForumTEDTALK/',
    socialUrl: 'https://instagram.com/centrodeeventosupb',
    memoryImage: 'assets/qr-memory.png',
    socialImage: 'assets/qr-social.png',
    labels: {
      es: { memory: 'Memorias del evento', social: '@centrodeeventosupb' },
      pt: { memory: 'Memórias do evento', social: '@centrodeeventosupb' }
    }
  },
  assets: {
    byMoment: {}
  }
};