export const BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};

export function renderThumbStyle({ move, size, bar }) {
  const style = {};
  const translate = `translate${bar.axis}(${ move }%)`;

  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;

  return style;
};

export const on = (() => {
  // if (document && document.addEventListener) {
  //   return function (element, event, handler) {
  //     element.addEventListener(event, handler, false);
  //   }
  // } else {
  //   return function (element, event, handler) {
  //     element.attachEvent('on' + event, handler);
  //   }
  // }
})();

export const off = (() => {
  // if (document && document.removeListener) {
  //   return function (element, event, handler) {
  //     element.removeEventListener(event, handler, false);
  //   }
  // } else {
  //   return function (element, event, handler) {
  //     element.detachEvent('on' + event, handler);
  //   }
  // }
})()

function extend(to, _from) {
  for(let i in _from) {
    to[i] = _from[i];
  }
  return to;
}

export const toObject = (arr) => {
  let res = {};
  for(let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}
