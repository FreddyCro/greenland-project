const onceIntersectionObserver = (el, callback, options) => {
  const cb = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // show second chart
      callback();

      // stop observing
      observer.unobserve(entry.target);
    });
  };

  if (!options) {
    options = {
      rootMargin: '0px 0px -200px 0px',
      threshold: 0,
    };
  }

  const observer = new IntersectionObserver(cb, options);
  observer.observe(el);
};

const linearIntersectionObserver = (el, enterEvent, leaveEvent, options) => {
  const cb = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        if (leaveEvent) leaveEvent();
      } else {
        if (enterEvent) enterEvent();
      }
    });
  };

  if (!options) {
    options = {
      rootMargin: '0px 0px 0px 0px',
      threshold: 0,
    };
  }

  const observer = new IntersectionObserver(cb, options);
  observer.observe(el);
};

export { onceIntersectionObserver, linearIntersectionObserver };
