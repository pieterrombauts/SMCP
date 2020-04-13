export function animateCSS(element: string, animationName: string, animationModifiers?: string[]) {
  const node = document.querySelector(element);
  if (node) {
    node.classList.add("animated", animationName)
    if (animationModifiers) { node.classList.add(...animationModifiers) };
  }
  
  function handleAnimationEnd() {
    if (node) {
      node.classList.remove('animated', animationName);
      if (animationModifiers) { node.classList.remove(...animationModifiers) }
      node.removeEventListener('animationend', handleAnimationEnd);
    }
  }

  if (node) {
    node.addEventListener('animationend', handleAnimationEnd)
  }
}