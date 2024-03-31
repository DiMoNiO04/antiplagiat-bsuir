(() => {
  var e = {
      658: () => {
        document.addEventListener('DOMContentLoaded', () => {
          (() => {
            const e = document.querySelector('.js-menu'),
              t = document.querySelector('.js-menu-btn'),
              r = document.querySelector('.js-menus');
            e &&
              t &&
              (t.addEventListener('mouseover', () => {
                e.classList.add('--active'), t.classList.add('--active');
              }),
              r.addEventListener('mouseleave', () => {
                e.classList.remove('--active'), t.classList.remove('--active');
              }));
          })();
        });
      },
      882: () => {
        const e = () => {
          const e = document.querySelectorAll('.input.--error');
          e &&
            e.forEach((e) => {
              e.addEventListener('input', function () {
                this.classList.remove('--error');
              });
            });
        };
        document.addEventListener('DOMContentLoaded', () => {
          (() => {
            const e = document.querySelectorAll('.input--pass');
            e &&
              e.forEach((e) => {
                const t = e.querySelector('input'),
                  r = e.querySelector('.input__btn');
                r.addEventListener('mousedown', (e) => {
                  e.preventDefault(),
                    r.classList.toggle('--open'),
                    'text' === t.getAttribute('type')
                      ? t.setAttribute('type', 'password')
                      : t.setAttribute('type', 'text'),
                    t.focus();
                });
              });
          })(),
            e(),
            (() => {
              const e = document.querySelector('.search');
              if (e) {
                const t = e.querySelector('.search__btn-reset'),
                  r = e.querySelector('input');
                r.addEventListener('input', () => {
                  r.value ? t.classList.add('--active') : t.classList.remove('--active');
                }),
                  t.addEventListener('click', () => {
                    t.classList.remove('--active'), r.focus();
                  });
              }
            })();
        });
      },
      924: () => {
        tippy('.js-notify', { content: (e) => e.getAttribute('data-notify'), placement: 'bottom', animation: 'fade' });
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var s = (t[n] = { exports: {} });
    return e[n](s, s.exports, r), s.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      'use strict';
      r(924), r(882), r(658);
    })();
})();
