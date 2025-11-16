


export const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
  
    const targetY = el.getBoundingClientRect().top + window.scrollY; 
    const startY = window.scrollY;
    const startTime = performance.now();
  
    const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      
  
    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / 2500, 1);
      const easedProgress = easeInOutCubic(progress);
  
      window.scrollTo(0, startY + (targetY - startY) * easedProgress);
  
      if (progress < 1) requestAnimationFrame(animate);
    };
  
    requestAnimationFrame(animate);

};
  