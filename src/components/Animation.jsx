import React, { useEffect, useRef } from 'react';

function RainAnimation() {
  const canvasRef = useRef(null);
  let width = window.innerWidth;
  let height = window.innerHeight;
  const maxDrops = 25;
  let drops = [];

  class Drop {
    constructor() {
      this.init();
    }

    init() {
      this.x = random(0, width);
      this.y = 0;
      this.color = 'hsl(0, 0%, 30%)';
      this.w = 2;
      this.h = 1;
      this.vy = random(4, 5);
      this.vw = 3;
      this.vh = 1;
      this.size = 2;
      this.hit = random(height * 0.8, height * 0.9);
      this.a = 1;
      this.va = 0.96;
    }

    draw() {
      const ctx = canvasRef.current.getContext('2d');
      if (this.y > this.hit) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.h / 2);
        ctx.bezierCurveTo(
          this.x + this.w / 2,
          this.y - this.h / 2,
          this.x + this.w / 2,
          this.y + this.h / 2,
          this.x,
          this.y + this.h / 2
        );
        ctx.bezierCurveTo(
          this.x - this.w / 2,
          this.y + this.h / 2,
          this.x - this.w / 2,
          this.y - this.h / 2,
          this.x,
          this.y - this.h / 2
        );
        ctx.strokeStyle = `hsla(0, 0%, 30%, ${this.a})`;
        ctx.stroke();
        ctx.closePath();
      } else {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size * 5);
      }
      this.update();
    }

    update() {
      if (this.y < this.hit) {
        this.y += this.vy;
      } else {
        if (this.a > 0.03) {
          this.w += this.vw;
          this.h += this.vh;
          if (this.w > 100) {
            this.a *= this.va;
            this.vw *= 0.98;
            this.vh *= 0.98;
          }
        } else {
          this.init();
        }
      }
    }
  }

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    if (canvasRef.current) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }
  }

  function setup() {
    for (let i = 0; i < maxDrops; i++) {
      setTimeout(() => {
        const drop = new Drop();
        drops.push(drop);
      }, i * 200);
    }
  }

  function animate() {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, width, height);
      for (const drop of drops) {
        drop.draw();
      }
    }
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    resize();
    setup();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  });

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ pointerEvents: 'none' }} />
    </div>
  );
}

export default RainAnimation;
