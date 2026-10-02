// visualSystem.js
import { PALETTE } from './config.js';

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.targetX = x;
    this.targetY = y;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.maxForce = 0.5;
    this.color = color || PALETTE.UPB;
    this.originalColor = this.color;
    this.radius = 3.5;
    this.targetRadius = 3.5;
  }

  setTarget(tx, ty, newColor, newRadius) {
    this.targetX = tx;
    this.targetY = ty;
    if (newColor && newColor !== 'MULTI') {
      this.color = newColor;
    }
    if (newRadius) {
      this.targetRadius = newRadius;
    }
  }

  update() {
    this.radius += (this.targetRadius - this.radius) * 0.08;

    let dx = this.targetX - this.x;
    let dy = this.targetY - this.y;
    let dist = Math.hypot(dx, dy);

    let speed = this.maxSpeed;
    if (dist < 100) {
      speed = (dist / 100) * this.maxSpeed;
    }

    if (dist > 0.001) {
      let desiredX = (dx / dist) * speed;
      let desiredY = (dy / dist) * speed;

      let steerX = desiredX - this.vx;
      let steerY = desiredY - this.vy;

      let steerDist = Math.hypot(steerX, steerY);
      if (steerDist > this.maxForce) {
        steerX = (steerX / steerDist) * this.maxForce;
        steerY = (steerY / steerDist) * this.maxForce;
      }

      this.ax += steerX;
      this.ay += steerY;
    }

    this.vx += this.ax;
    this.vy += this.ay;
    this.x += this.vx;
    this.y += this.vy;
    this.ax = 0;
    this.ay = 0;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

export class VisualSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.numParticles = 2000; // Alta densidad para formar palabras completas
    this.offCanvas = document.createElement('canvas');
    this.offCtx = this.offCanvas.getContext('2d');
    this.currentMoment = null;
    this.morphTimer = null;
    this.angleChoreo = 0;
    
    this.resize();
    window.addEventListener('resize', () => {
      this.resize();
      if (this.currentMoment) {
        this.setMoment(this.currentMoment);
      }
    });
    this.initParticles();
  }

  resize() {
    this.width = window.innerWidth || 1920;
    this.height = window.innerHeight || 1080;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.offCanvas.width = this.width;
    this.offCanvas.height = this.height;
  }

  initParticles() {
    const colors = [PALETTE.UPB, PALETTE.Ciudad, PALETTE.Academia, PALETTE.Industria, PALETTE.Talento, PALETTE.Confianza, PALETTE.Experiencia];
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      let px = Math.random() * this.width;
      let py = Math.random() * this.height;
      let col = colors[i % colors.length];
      this.particles.push(new Particle(px, py, col));
    }
  }

  sampleWordGroup(wConfig) {
    if (!this.width || !this.height) this.resize();
    this.offCtx.clearRect(0, 0, this.width, this.height);

    let text = wConfig.text || "";
    let len = text.length;

    // Escala calculada para mantener las palabras dentro de pantalla
    let baseScale = text === 'FÓRUM' ? 0.15 : (len > 12 ? 0.032 : (len > 8 ? 0.040 : 0.055));
    let fontSize = Math.floor(this.width * baseScale);

    this.offCtx.font = `900 ${fontSize}px sans-serif, Arial`;
    this.offCtx.textAlign = 'center';
    this.offCtx.textBaseline = 'middle';
    this.offCtx.fillStyle = '#FFFFFF';

    let tx = this.width * (wConfig.xRel !== undefined ? wConfig.xRel : 0.5);
    let ty = this.height * (wConfig.yRel !== undefined ? wConfig.yRel : 0.7);

    this.offCtx.fillText(text, tx, ty);

    let imgData;
    try {
      imgData = this.offCtx.getImageData(0, 0, this.width, this.height).data;
    } catch(e) {
      return [];
    }

    let points = [];
    let step = Math.max(2, Math.floor(fontSize / 22));

    for (let y = 0; y < this.height; y += step) {
      for (let x = 0; x < this.width; x += step) {
        let index = (y * this.width + x) * 4;
        let alpha = imgData[index + 3];
        // Captura permisiva de píxeles
        if (alpha > 20) {
          points.push({ x, y, color: wConfig.color });
        }
      }
    }
    return points;
  }

  setMoment(moment) {
    if (!moment) return;
    this.currentMoment = moment;
    if (this.morphTimer) clearTimeout(this.morphTimer);

    let targetRadius = moment.isHero ? 8.5 : 3.5;

    // --- CASO 1: Diapositiva 3 - Planeta Tierra (Verde y Azul con partículas grandes de 8px) ---
    if (moment.type === 'PLANET') {
      let cx = this.width * 0.5;
      let cy = this.height * 0.62;
      let R = Math.min(this.width, this.height) * 0.28; // Esfera amplia y destacada

      this.particles.forEach((p, idx) => {
        let angle = Math.random() * Math.PI * 2;
        let r = Math.sqrt(Math.random()) * R;
        let px = cx + Math.cos(angle) * r;
        let py = cy + Math.sin(angle) * r;

        // Formación de continentes (Verde) y océanos (Azul)
        let noiseVal = Math.sin(px * 0.012) * Math.cos(py * 0.012);
        let isLand = noiseVal > 0.02;
        let color = isLand ? PALETTE.Talento : PALETTE.Ciudad;

        // Partículas en 8px para una silueta de planeta clara y definida
        p.setTarget(px, py, color, 8.0);
      });
      return;
    }

    // --- CASO 2: Diapositiva 10 - Coreografía Geométrica ---
    if (moment.type === 'CHOREOGRAPHY') {
      this.updateChoreographyTargets();
      return;
    }

    // --- CASO 3: Formación de Palabras ---
    if (moment.words && moment.words.length > 0) {
      this.applyWordsTarget(moment.words, targetRadius);

      // Animación de Morfosis (Slide 6: COMUNIDAD -> TRANSFORMACIÓN)
      if (moment.morphWord) {
        this.morphTimer = setTimeout(() => {
          this.applyWordsTarget([moment.morphWord], targetRadius);
        }, 2600);
      }
    } else {
      this.particles.forEach(p => {
        let rx = Math.random() * (this.width * 0.8) + (this.width * 0.1);
        let ry = Math.random() * (this.height * 0.5) + (this.height * 0.3);
        p.setTarget(rx, ry, p.originalColor, targetRadius);
      });
    }
  }

  applyWordsTarget(wordConfigs, baseRadius) {
    let numWords = wordConfigs.length;
    let particlesPerWord = Math.floor(this.particles.length / numWords);

    wordConfigs.forEach((wConfig, wIdx) => {
      let wordPoints = this.sampleWordGroup(wConfig);
      let startParticle = wIdx * particlesPerWord;
      let endParticle = (wIdx === numWords - 1) ? this.particles.length : startParticle + particlesPerWord;
      let assignedCount = endParticle - startParticle;

      let radius = wConfig.grow ? 6.5 : baseRadius;

      if (wordPoints.length > 0) {
        let stepRatio = wordPoints.length / assignedCount;
        for (let pIdx = startParticle; pIdx < endParticle; pIdx++) {
          let ptIdx = Math.floor((pIdx - startParticle) * stepRatio) % wordPoints.length;
          let pt = wordPoints[ptIdx];
          this.particles[pIdx].setTarget(pt.x, pt.y, pt.color, radius);
        }
      }
    });
  }

  updateChoreographyTargets() {
    let cx = this.width * 0.5;
    let cy = this.height * 0.62;
    let numRings = 4;

    this.particles.forEach((p, idx) => {
      let ring = idx % numRings;
      let radius = (ring + 1) * (Math.min(this.width, this.height) * 0.08);
      let speedFactor = (ring % 2 === 0 ? 1 : -1) * (0.8 + ring * 0.3);
      let angle = (idx / this.numParticles) * Math.PI * 8 + this.angleChoreo * speedFactor;

      let px = cx + Math.cos(angle) * radius;
      let py = cy + Math.sin(angle) * radius;

      if (ring === 3) {
        px += Math.cos(angle * 5) * 25;
        py += Math.sin(angle * 5) * 25;
      }

      p.setTarget(px, py, p.originalColor, 4.0);
    });
  }

  render() {
    // Se limpia el lienzo para hacerlo transparente y revelar la fotografía de fondo
    this.ctx.clearRect(0, 0, this.width, this.height);

    if (this.currentMoment && this.currentMoment.type === 'CHOREOGRAPHY') {
      this.angleChoreo += 0.015;
      this.updateChoreographyTargets();
    }

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      this.particles[i].draw(this.ctx);
    }

    this.drawConnections();
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i += 7) {
      for (let j = i + 1; j < this.particles.length; j += 7) {
        let dx = this.particles[i].x - this.particles[j].x;
        let dy = this.particles[i].y - this.particles[j].y;
        let dist = Math.hypot(dx, dy);

        if (dist < 32) {
          let alpha = (1 - dist / 32) * 0.22;
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          this.ctx.lineWidth = 0.6;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }
}