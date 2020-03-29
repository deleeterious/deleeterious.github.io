const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

window.addEventListener('scroll', throttle(() => {
  console.log('hi');
  const pageHeader = document.querySelector('.page-header');
  if (document.documentElement.scrollTop > 100) {
    pageHeader.classList.add('page-header--fixed');
  } else {
    pageHeader.classList.remove('page-header--fixed');
  }
}, 400));

const menuBtn = document.querySelector('.page-header-menu__btn');
menuBtn.addEventListener('click', () => {
  document.querySelector('.page-header-menu__nav').classList.toggle('page-header-menu__nav--hidden');
})
