const calcElementProgress = (element) => {
  const { top, height } = element.getBoundingClientRect();
  const { innerHeight } = window;
  const progress = (innerHeight - top) / height;
  return progress;
};

const calcGlobalProgress = () => {
  const { scrollY, innerHeight } = window;
  const { body } = document;
  const { height } = body.getBoundingClientRect();
  const progress = scrollY / (height - innerHeight);
  return progress;
};

const calcInterpolation = ({ startX, startY, endX, endY, progress }) => {
  const x = startX + (endX - startX) * progress;
  const y = startY + (endY - startY) * progress;
  return { x, y };
};

export { calcElementProgress, calcGlobalProgress, calcInterpolation };
