import {iosVhFix} from './utils/ios-vh-fix';
// import {swiperCoaches, swiperReviews} from './vendor';
import {initModals} from './modules/modals/init-modals';
import {isSmoothScroll} from './modules/smooth-scroll/smooth-scroll';
import {showMaskTel} from './modules/mask-for-tel/mask-for-tel';
import {showContentTab} from './modules/tabs/tabs';
import {playVideo} from './modules/video/video';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  isSmoothScroll();
  showMaskTel();
  showContentTab();
  playVideo();
  // swiperCoaches();
  // swiperReviews();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
