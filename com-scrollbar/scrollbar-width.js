import Vue from 'vue';

let scrollBarWidth;

export default function () {
  if (Vue.prototype.$isServer) return 0;
  if (scrollBarWidth) {
    return scrollBarWidth;
  }
  const outer = document && document.createElement('div');
  outer.className = 'com-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.postion = 'absolute';
  outer.style.top = '-100px';
  document && document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  const inner = document && document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;

  return scrollBarWidth;
}