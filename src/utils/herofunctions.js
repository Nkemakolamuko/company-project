const prevState = (current, setCurrent, slides) => {
  if (current === 0) setCurrent(slides.length - 1);
  else setCurrent(current - 1);
};

const nextState = (current, setCurrent, slides) => {
  if (current === slides.length - 1) setCurrent(0);
  else setCurrent(current + 1);
};

export {prevState, nextState}