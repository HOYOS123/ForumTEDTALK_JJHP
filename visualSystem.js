// visualSystem.js
import { PALETTE } from './config.js';

class Particle {
  constructor(x, y, color) {
    this.pos = createVector(x, y);
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(2);
    this.acc = createVector(0, 0);
    this.maxSpeed = 8;
    this.maxForce = 0.4;
    this.color = color || PALETTE.UPB;
    this.originalColor = this.color;
    this.radius = random(3, 5);
  }

  setTarget(x, y, newColor) {
    this.target = createVector(x, y);
    if (newColor && newColor !== 'MULTI') {
      this.color = newColor;
    }
  }

  // Algoritmo de Arrive de Craig Reynolds
  arrive(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    let speed = this.maxSpeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxSpeed);
    }
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    let arriveForce = this.arrive(this.target);
    this.applyForce(arriveForce);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show(p) {
    p.noStroke();
    p.fill(this.color);
    p.circle(this.pos.x, this.pos.y, this.radius * 2);
  }
}

export class VisualSystem {
  constructor(p5Instance, font) {
    this.p = p5Instance;
    this.font = font;
    this.particles = [];
    this.numParticles = 800; // Cantidad suficiente para definir textos nítidos
    this.init();
  }

  init() {
    for (let i = 0; i < this.numParticles; i++) {
      let x = this.p.random(this.p.width);
      let y = this.p.random(this.p.height);
      let colors = Object.values(PALETTE).filter(c => c !== PALETTE.Background && c !== PALETTE.Text);
      let initialColor = colors[i % colors.length];
      this.particles.push(new Particle(x, y, initialColor));
    }
  }

  // Convierte las palabras solicitadas en la slide actual a puntos geométricos
  setSlideState(slideConfig) {
    if (!slideConfig) return;

    if (slideConfig.type === 'WORD_FORMATION' || slideConfig.type === 'MULTI_WORDS' || slideConfig.type === 'FUSION_FORUM') {
      let targets = [];

      slideConfig.words.forEach(wConfig => {
        let fontSize = this.p.width * (slideConfig.type === 'FUSION_FORUM' ? 0.12 : 0.055);
        let bounds = this.font.textBounds(wConfig.text, 0, 0, fontSize);
        
        let x = (this.p.width * wConfig.xRel) - (bounds.w / 2);
        let y = (this.p.height * wConfig.yRel) + (bounds.h / 2);

        let pts = this.font.textToPoints(wConfig.text, x, y, fontSize, {
          sampleFactor: 0.25,
          simplifyThreshold: 0
        });

        pts.forEach(pt => {
          targets.push({
            x: pt.x,
            y: pt.y,
            color: wConfig.color === 'MULTI' ? null : wConfig.color
          });
        });
      });

      // Asigna cada partícula a un punto del texto
      this.particles.forEach((particle, idx) => {
        let t = targets[idx % targets.length];
        particle.setTarget(t.x, t.y, t.color);
      });
    } else {
      // Estado de red orgánica dispersa
      this.particles.forEach(particle => {
        let rx = this.p.random(this.p.width * 0.1, this.p.width * 0.9);
        let ry = this.p.random(this.p.height * 0.4, this.p.height * 0.8);
        particle.setTarget(rx, ry, particle.originalColor);
      });
    }
  }

  render() {
    this.particles.forEach(particle => {
      particle.update();
      particle.show(this.p);
    });

    // Dibuja conexiones sutiles si están cerca (sistemas de vínculos)
    this.drawConnections();
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i += 4) {
      for (let j = i + 1; j < this.particles.length; j += 4) {
        let d = p5.Vector.dist(this.particles[i].pos, this.particles[j].pos);
        if (d < 35) {
          this.p.stroke(255, map(d, 0, 35, 40, 0));
          this.p.strokeWeight(0.8);
          this.p.line(
            this.particles[i].pos.x, this.particles[i].pos.y,
            this.particles[j].pos.x, this.particles[j].pos.y
          );
        }
      }
    }
  }
}