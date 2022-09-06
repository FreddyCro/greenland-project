const calcElementProgress = (el) => {
  const { top, height } = el.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, (top / height - 1) * -1));
  return +progress.toFixed(2);
};

const calcGlobalProgress = () => {
  const { scrollY, innerHeight } = window;
  const { body } = document;
  const { height } = body.getBoundingClientRect();
  const progress = scrollY / (height - innerHeight);
  return progress;
};

const calcInterpolation = ({ startX, startY, endX, endY, progress }) => {
  const x = +startX + (+endX - +startX) * progress;
  const y = +startY + (+endY - +startY) * progress;
  return { x, y };
};

export { calcElementProgress, calcGlobalProgress, calcInterpolation };
