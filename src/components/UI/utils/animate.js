const animate = ({timing, draw, duration}) => {
  const start = performance.now();
  const raf = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame

  const animateFn = (time) => {
    const timeFraction = (time - start) / duration
    timeFraction < 1 ? (draw(timing(timeFraction)), raf(animateFn)) : draw(timing(1))
  }

  raf(animateFn)
}

animate.duration = 750
animate.linear = Number
animate.ease = (t) => (1 - Math.cos(Math.asin(t)))

export { animate }
