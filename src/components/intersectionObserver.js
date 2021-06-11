export const applyLoadAnimation = (ref, animationClass) => {
  const applyLoadAnimations = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ref.current.classList.add(animationClass);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(applyLoadAnimations, {
    root: null,
    threshold: 0,
  });

  observer.observe(ref.current);
};

export const applyNavbarStickyAnimation = function (
  navRef,
  containerRef,
  containerClass,
  rootMargin
) {
  const applyStickyNav = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting)
        containerRef.current.classList.add(containerClass);
      else containerRef.current.classList.remove(containerClass);
    });
  };

  const navbarObserver = new IntersectionObserver(applyStickyNav, {
    root: null,
    threshold: 1.0,
    rootMargin: `${rootMargin}px`,
  });

  navbarObserver.observe(navRef.current);
};

export const applyIntersectionWithSection = (ref, id, className) => {
  const sectionRef = document.querySelector(id);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(id);
        if (entry.isIntersecting) {
          ref.current.classList.add(className);
        } else {
          ref.current.classList.remove(className);
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-50%",
    }
  );

  observer.observe(sectionRef);
};
