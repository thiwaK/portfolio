export function scrollToPosition(targetY: number, duration = 600) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime: number | null = null;

  // Easing: easeInOutCubic
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const loop = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const ease = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(loop);
    }
  };

  requestAnimationFrame(loop);
}

export function scrollToTop(duration = 600) {
  scrollToPosition(0, duration);
}
