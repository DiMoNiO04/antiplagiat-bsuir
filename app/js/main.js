(() => {
  var e = {
      689: () => {
        document.addEventListener('DOMContentLoaded', () => {
          document.querySelector('.js-btn-up').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        });
      },
      663: () => {
        const e = document.querySelector('.drag-area'),
          t = e.querySelector('button'),
          o = e.querySelector('input'),
          s = document.querySelector('.drag-area__files'),
          n = document.querySelector('.drag-area__form');
        function i(t) {
          ((e) => 'application/pdf' === e.type && e.size <= 10485760)(t)
            ? ((function (t) {
                const n = new FileReader();
                (n.onload = function () {
                  const n = document.createElement('div');
                  n.setAttribute('class', 'drag-area__file');
                  const i = document.createElement('div');
                  i.setAttribute('class', 'drag-area__filename'), (i.textContent = t.name);
                  const a = document.createElement('button');
                  a.setAttribute('class', 'drag-area__fileclose'),
                    (a.innerHTML =
                      '\n      <svg>\n        <use xlink:href="assets/img/sprite.svg#close-file"></use>\n      </svg>\n    '),
                    a.addEventListener('click', () => {
                      s.removeChild(n), e.classList.remove('--error'), e.classList.remove('--files'), (o.value = '');
                    }),
                    n.appendChild(i),
                    n.appendChild(a),
                    s.appendChild(n);
                }),
                  n.readAsDataURL(t);
              })(t),
              e.classList.add('--files'))
            : n.classList.add('--error');
        }
        document.addEventListener('DOMContentLoaded', () => {
          t.addEventListener('click', () => o.click()),
            e.addEventListener('dragover', function (e) {
              e.preventDefault(), this.classList.add('--active');
            }),
            e.addEventListener('dragleave', function () {
              this.classList.remove('--active');
            }),
            e.addEventListener('drop', (e) => {
              e.preventDefault(), n.classList.remove('--active'), i(e.dataTransfer.files[0]);
            }),
            o.addEventListener('change', (e) => {
              i(e.target.files[0]);
            });
        });
      },
      922: () => {
        document.addEventListener('DOMContentLoaded', () => {
          const e = document.querySelectorAll('.js-dropdown');
          e &&
            e.forEach((e) => {
              const t = e.querySelector('.js-dropdown-inner'),
                o = e.querySelector('.js-dropdown-value'),
                s = e.querySelectorAll('.js-dropdown-item label');
              t.addEventListener('click', () => {
                e.classList.contains('--active') ? e.classList.remove('--active') : e.classList.add('--active');
              });
              for (let t = 0; t < s.length; t += 1)
                s[t].addEventListener('click', (t) => {
                  o && ((o.textContent = t.target.textContent), e.classList.add('--filled'));
                });
              document.addEventListener('click', (t) => {
                t.target.closest('.js-dropdown-inner') || e.classList.remove('--active');
              });
            });
        });
      },
      658: () => {
        document.addEventListener('DOMContentLoaded', () => {
          (() => {
            const e = document.querySelector('.js-menu'),
              t = document.querySelector('.js-menu-btn'),
              o = document.querySelector('.js-menus');
            e &&
              t &&
              (window.innerWidth >= 1100
                ? (t.addEventListener('mouseover', () => {
                    e.classList.add('--active'), t.classList.add('--active');
                  }),
                  o.addEventListener('mouseleave', () => {
                    e.classList.remove('--active'), t.classList.remove('--active');
                  }))
                : (t.addEventListener('click', () => {
                    e.classList.toggle('--active'), t.classList.toggle('--active');
                  }),
                  document.addEventListener('click', (o) => {
                    o.target.closest('.js-menus') || (e.classList.remove('--active'), t.classList.remove('--active'));
                  })));
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
                  o = e.querySelector('.input__btn');
                o.addEventListener('mousedown', (e) => {
                  e.preventDefault(),
                    o.classList.toggle('--open'),
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
                  o = e.querySelector('input');
                o.addEventListener('input', () => {
                  o.value ? t.classList.add('--active') : t.classList.remove('--active');
                }),
                  t.addEventListener('click', () => {
                    t.classList.remove('--active'), o.focus();
                  });
              }
            })();
        });
      },
      253: () => {
        document.addEventListener('DOMContentLoaded', () => {
          !(function () {
            const e = document.querySelector('.modal-doc'),
              t = e.querySelector('.js-modal-doc-name'),
              o = e.querySelector('.js-modal-doc-orig'),
              s = e.querySelector('.js-modal-doc-file'),
              n = document.querySelectorAll('[data-graph-path="modal-doc"]'),
              i = document.querySelector('.js-result-success'),
              a = document.querySelector('.js-result-no-success');
            let c = null;
            i.addEventListener('click', () => {
              c && (c.classList.remove('--no-success'), c.classList.add('--success'));
            }),
              a.addEventListener('click', () => {
                c && (c.classList.remove('--success'), c.classList.add('--no-success'));
              }),
              n.forEach((e) => {
                e.addEventListener('click', () => {
                  c = e.parentElement.parentElement.parentElement;
                  const n = c.querySelector('.js-modal-doc-name').textContent,
                    i = c.querySelector('.js-modal-doc-orig').textContent,
                    a = c.querySelector('.js-modal-doc-file').textContent;
                  (t.textContent = n || '—'), (o.textContent = i || '—'), (s.textContent = a || '—');
                });
              });
          })(),
            (function () {
              const e = document.querySelector('.modal-protection'),
                t = e.querySelector('.js-modal-doc-orig'),
                o = e.querySelector('.js-modal-doc-file'),
                s = document.querySelectorAll('[data-graph-path="modal-protection"]');
              let n = null;
              s.forEach((e) => {
                e.addEventListener('click', () => {
                  n = e.parentElement.parentElement.parentElement;
                  const s = n.querySelector('.js-modal-doc-orig').textContent,
                    i = n.querySelector('.js-modal-doc-file').textContent;
                  (t.textContent = s || '—'), (o.textContent = i || '—');
                });
              });
            })();
        });
      },
      326: () => {
        const e = document.querySelectorAll('.more-btns');
        document.addEventListener('click', (t) => {
          e &&
            e.forEach((e) => {
              const o = e.querySelector('.more-btns__content');
              e.contains(t.target) || o.classList.remove('--active');
            });
        }),
          document.addEventListener('DOMContentLoaded', () => {
            e &&
              e.forEach((e) => {
                const t = e.querySelector('.more-btns__btn'),
                  o = e.querySelector('.more-btns__content');
                t.addEventListener('click', () => {
                  o.classList.toggle('--active');
                });
              });
          });
      },
      924: () => {
        document.addEventListener('DOMContentLoaded', () => {
          const e = document.querySelectorAll('.js-notify-tippy');
          e &&
            window.innerWidth > 1100 &&
            e.forEach((e) => {
              e.addEventListener('mouseover', (t) => {
                const o = t.currentTarget,
                  s = o.textContent,
                  n = o.scrollHeight;
                s.split('\n').length >= 2 &&
                  n > 24 &&
                  (console.log('заебок'),
                  tippy(e, {
                    content: s,
                    placement: 'bottom',
                    arrow: !0,
                    theme: 'light',
                    maxWidth: '400px',
                    followCursor: !0,
                  }));
              });
            });
        }),
          document.querySelector('.js-notify') &&
            tippy('.js-notify', {
              content: (e) => e.getAttribute('data-notify'),
              placement: 'bottom',
              animation: 'fade',
              maxWidth: '200px',
            });
      },
    },
    t = {};
  function o(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var i = (t[s] = { exports: {} });
    return e[s](i, i.exports, o), i.exports;
  }
  (() => {
    'use strict';
    o(924),
      o(882),
      o(658),
      o(326),
      o(922),
      o(663),
      o(253),
      o(689),
      new (class {
        constructor(e) {
          (this.options = Object.assign({ isOpen: () => {}, isClose: () => {} }, e)),
            (this.modal = document.querySelector('.graph-modal')),
            (this.speed = 300),
            (this.animation = 'fade'),
            (this._reOpen = !1),
            (this._nextContainer = !1),
            (this.modalContainer = !1),
            (this.isOpen = !1),
            (this.previousActiveElement = !1),
            (this._focusElements = [
              'a[href]',
              'input',
              'select',
              'textarea',
              'button',
              'iframe',
              '[contenteditable]',
              '[tabindex]:not([tabindex^="-"])',
            ]),
            (this._fixBlocks = document.querySelectorAll('.fix-block')),
            this.events();
        }
        events() {
          this.modal &&
            (document.addEventListener(
              'click',
              function (e) {
                const t = e.target.closest('[data-graph-path]');
                if (t) {
                  let e = t.dataset.graphPath,
                    o = t.dataset.graphAnimation,
                    s = t.dataset.graphSpeed;
                  return (
                    (this.animation = o || 'fade'),
                    (this.speed = s ? parseInt(s) : 300),
                    (this._nextContainer = document.querySelector(`[data-graph-target="${e}"]`)),
                    void this.open()
                  );
                }
                e.target.closest('.js-modal-close') && this.close();
              }.bind(this)
            ),
            window.addEventListener(
              'keydown',
              function (e) {
                27 == e.keyCode && this.isOpen && this.close(), 9 == e.which && this.isOpen && this.focusCatch(e);
              }.bind(this)
            ),
            document.addEventListener(
              'click',
              function (e) {
                e.target.classList.contains('graph-modal') && e.target.classList.contains('is-open') && this.close();
              }.bind(this)
            ));
        }
        open(e) {
          if (((this.previousActiveElement = document.activeElement), this.isOpen))
            return (this.reOpen = !0), void this.close();
          (this.modalContainer = this._nextContainer),
            e && (this.modalContainer = document.querySelector(`[data-graph-target="${e}"]`)),
            this.modalContainer.scrollTo(0, 0),
            this.modal.style.setProperty('--transition-time', this.speed / 1e3 + 's'),
            this.modal.classList.add('is-open'),
            (document.body.style.scrollBehavior = 'auto'),
            (document.documentElement.style.scrollBehavior = 'auto'),
            this.disableScroll(),
            this.modalContainer.classList.add('graph-modal-open'),
            this.modalContainer.classList.add(this.animation),
            setTimeout(() => {
              this.options.isOpen(this),
                this.modalContainer.classList.add('animate-open'),
                (this.isOpen = !0),
                this.focusTrap();
            }, this.speed);
        }
        close() {
          this.modalContainer &&
            (this.modalContainer.classList.remove('animate-open'),
            this.modalContainer.classList.remove(this.animation),
            this.modal.classList.remove('is-open'),
            this.modalContainer.classList.remove('graph-modal-open'),
            this.enableScroll(),
            (document.body.style.scrollBehavior = 'auto'),
            (document.documentElement.style.scrollBehavior = 'auto'),
            this.options.isClose(this),
            (this.isOpen = !1),
            this.focusTrap(),
            this.reOpen && ((this.reOpen = !1), this.open()));
        }
        focusCatch(e) {
          const t = this.modalContainer.querySelectorAll(this._focusElements),
            o = Array.prototype.slice.call(t),
            s = o.indexOf(document.activeElement);
          e.shiftKey && 0 === s && (o[o.length - 1].focus(), e.preventDefault()),
            e.shiftKey || s !== o.length - 1 || (o[0].focus(), e.preventDefault());
        }
        focusTrap() {
          const e = this.modalContainer.querySelectorAll(this._focusElements);
          this.isOpen ? e.length && e[0].focus() : this.previousActiveElement.focus();
        }
        disableScroll() {
          let e = window.scrollY;
          this.lockPadding(),
            document.body.classList.add('disable-scroll'),
            (document.body.dataset.position = e),
            (document.body.style.top = -e + 'px');
        }
        enableScroll() {
          let e = parseInt(document.body.dataset.position, 10);
          this.unlockPadding(),
            (document.body.style.top = 'auto'),
            document.body.classList.remove('disable-scroll'),
            window.scrollTo({ top: e, left: 0 }),
            document.body.removeAttribute('data-position');
        }
        lockPadding() {
          let e = window.innerWidth - document.body.offsetWidth + 'px';
          this._fixBlocks.forEach((t) => {
            t.style.paddingRight = e;
          }),
            (document.body.style.paddingRight = e);
        }
        unlockPadding() {
          this._fixBlocks.forEach((e) => {
            e.style.paddingRight = '0px';
          }),
            (document.body.style.paddingRight = '0px');
        }
      })();
  })();
})();
