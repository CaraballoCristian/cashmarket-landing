"use client";
import { useRef, useEffect } from "react";

const Stars = ({
  sectionRef,
  content,
  type = "scroll",
  quantity,
  bgColor = "white",
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let image = null;
    let mouseX = 0;
    let mouseY = 0;

    if (content) {
      image = new Image();
      image.src = content;
    }

    const stars = Array.from({ length: quantity }, (_, i) => {
      const baseSize = 5 + Math.random() * 20;
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() < 0.1 ? 45 : baseSize,
        opacity: 0.2 + Math.random() * 0.4,
        direction: i % 2 === 0 ? 1 : -1,
        intensity: ((i % 5) + 1) * 0.5,
      };
    });

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const animate = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.clearRect(0, 0, w, h);

      let progress = 0;
      if (type === "scroll" && sectionRef?.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportH = window.innerHeight;
        progress = Math.max(
          0,
          Math.min(1, (viewportH - rect.top) / (viewportH + rect.height))
        );
      }

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const cx = (star.x / 100) * w;
        const cy = (star.y / 100) * h;

        let offsetX = 0;
        let offsetY = 0;
        let rotation = 0;

        if (type === "scroll") {
          const d = star.direction;
          offsetX = d * (100 + i * 20) * progress;
          offsetY = d * (-50 - i * 10) * progress;
          rotation = d * 360 * progress;
        } else if (type === "mouse") {
          offsetX = -mouseX * star.intensity * 50;
          offsetY = -mouseY * star.intensity * 50;
          rotation = mouseX * star.intensity * 10;
        }

        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.translate(cx + offsetX, cy + offsetY);
        ctx.rotate((rotation * Math.PI) / 180);

        const r = star.size / 2;

        if (image && image.complete && image.naturalWidth > 0) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.clip();
          const imgAspect = image.naturalWidth / image.naturalHeight;
          if (imgAspect > 1) {
            const drawW = star.size * imgAspect;
            ctx.drawImage(image, -drawW / 2, -star.size / 2, drawW, star.size);
          } else {
            const drawH = star.size / imgAspect;
            ctx.drawImage(image, -star.size / 2, -drawH / 2, star.size, drawH);
          }
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fillStyle = bgColor;
          ctx.fill();
        }

        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    resize();
    window.addEventListener("resize", resize);
    if (type === "mouse") {
      window.addEventListener("mousemove", handleMouseMove);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (type === "mouse") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [type, content, quantity, bgColor, sectionRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[999]"
    />
  );
};

export default Stars;
