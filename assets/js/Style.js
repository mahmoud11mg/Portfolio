let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    // Handle resize logic here
    console.log('Resized');
  }, 200);
});

/*! Bootstrap v4.5.0 (https://getbootstrap.com/)*/
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery);
})(this, function (t, e) {
  "use strict";
  function n(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function i(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function o(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function r(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function s(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? r(Object(n), !0).forEach(function (e) {
            o(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : r(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  function a(t) {
    var n = this,
      i = !1;
    return (
      e(this).one(l.TRANSITION_END, function () {
        i = !0;
      }),
      setTimeout(function () {
        i || l.triggerTransitionEnd(n);
      }, t),
      this
    );
  }
  var l = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var n = e(t).css("transition-duration"),
        i = e(t).css("transition-delay"),
        o = parseFloat(n),
        r = parseFloat(i);
      return o || r
        ? ((n = n.split(",")[0]),
          (i = i.split(",")[0]),
          1e3 * (parseFloat(n) + parseFloat(i)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      e(t).trigger("transitionend");
    },
    supportsTransitionEnd: function () {
      return Boolean("transitionend");
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            s =
              r && l.isElement(r)
                ? "element"
                : null === (a = r) || "undefined" == typeof a
                ? "" + a
                : {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? l.findShadowRoot(t.parentNode)
        : null;
    },
    jQueryDetection: function () {
      if ("undefined" == typeof e)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = e.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  l.jQueryDetection(),
    (e.fn.emulateTransitionEnd = a),
    (e.event.special[l.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (t) {
        if (e(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var c = "alert",
    u = e.fn[c],
    h = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.alert"), (this._element = null);
        }),
        (n._getRootElement = function (t) {
          var n = l.getSelectorFromElement(t),
            i = !1;
          return (
            n && (i = document.querySelector(n)),
            i || (i = e(t).closest(".alert")[0]),
            i
          );
        }),
        (n._triggerCloseEvent = function (t) {
          var n = e.Event("close.bs.alert");
          return e(t).trigger(n), n;
        }),
        (n._removeElement = function (t) {
          var n = this;
          if ((e(t).removeClass("show"), e(t).hasClass("fade"))) {
            var i = l.getTransitionDurationFromElement(t);
            e(t)
              .one(l.TRANSITION_END, function (e) {
                return n._destroyElement(t, e);
              })
              .emulateTransitionEnd(i);
          } else this._destroyElement(t);
        }),
        (n._destroyElement = function (t) {
          e(t).detach().trigger("closed.bs.alert").remove();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.alert");
            o || ((o = new t(this)), i.data("bs.alert", o)),
              "close" === n && o[n](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.alert.data-api",
    '[data-dismiss="alert"]',
    h._handleDismiss(new h())
  ),
    (e.fn[c] = h._jQueryInterface),
    (e.fn[c].Constructor = h),
    (e.fn[c].noConflict = function () {
      return (e.fn[c] = u), h._jQueryInterface;
    });
  var f = e.fn.button,
    d = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          var t = !0,
            n = !0,
            i = e(this._element).closest('[data-toggle="buttons"]')[0];
          if (i) {
            var o = this._element.querySelector('input:not([type="hidden"])');
            if (o) {
              if ("radio" === o.type)
                if (o.checked && this._element.classList.contains("active"))
                  t = !1;
                else {
                  var r = i.querySelector(".active");
                  r && e(r).removeClass("active");
                }
              t &&
                (("checkbox" !== o.type && "radio" !== o.type) ||
                  (o.checked = !this._element.classList.contains("active")),
                e(o).trigger("change")),
                o.focus(),
                (n = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (n &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains("active")
              ),
            t && e(this._element).toggleClass("active"));
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.button"), (this._element = null);
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.button");
            i || ((i = new t(this)), e(this).data("bs.button", i)),
              "toggle" === n && i[n]();
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
        ]),
        t
      );
    })();
  e(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var n = t.target,
        i = n;
      if (
        (e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]),
        !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))
      )
        t.preventDefault();
      else {
        var o = n.querySelector('input:not([type="hidden"])');
        if (
          o &&
          (o.hasAttribute("disabled") || o.classList.contains("disabled"))
        )
          return void t.preventDefault();
        "LABEL" === i.tagName &&
          o &&
          "checkbox" === o.type &&
          t.preventDefault(),
          d._jQueryInterface.call(e(n), "toggle");
      }
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function (t) {
        var n = e(t.target).closest(".btn")[0];
        e(n).toggleClass("focus", /^focus(in)?$/.test(t.type));
      }
    ),
    e(window).on("load.bs.button.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector('input:not([type="hidden"])');
        o.checked || o.hasAttribute("checked")
          ? i.classList.add("active")
          : i.classList.remove("active");
      }
      for (
        var r = 0,
          s = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        r < s;
        r++
      ) {
        var a = t[r];
        "true" === a.getAttribute("aria-pressed")
          ? a.classList.add("active")
          : a.classList.remove("active");
      }
    }),
    (e.fn.button = d._jQueryInterface),
    (e.fn.button.Constructor = d),
    (e.fn.button.noConflict = function () {
      return (e.fn.button = f), d._jQueryInterface;
    });
  var p = "carousel",
    m = ".bs.carousel",
    g = e.fn[p],
    v = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    _ = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    b = { TOUCH: "touch", PEN: "pen" },
    y = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            ".carousel-indicators"
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var n = t.prototype;
      return (
        (n.next = function () {
          this._isSliding || this._slide("next");
        }),
        (n.nextWhenVisible = function () {
          !document.hidden &&
            e(this._element).is(":visible") &&
            "hidden" !== e(this._element).css("visibility") &&
            this.next();
        }),
        (n.prev = function () {
          this._isSliding || this._slide("prev");
        }),
        (n.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev"
            ) && (l.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (n.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (n.to = function (t) {
          var n = this;
          this._activeElement = this._element.querySelector(
            ".active.carousel-item"
          );
          var i = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              e(this._element).one("slid.bs.carousel", function () {
                return n.to(t);
              });
            else {
              if (i === t) return this.pause(), void this.cycle();
              var o = t > i ? "next" : "prev";
              this._slide(o, this._items[t]);
            }
        }),
        (n.dispose = function () {
          e(this._element).off(m),
            e.removeData(this._element, "bs.carousel"),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (n._getConfig = function (t) {
          return (t = s(s({}, v), t)), l.typeCheckConfig(p, t, _), t;
        }),
        (n._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (n._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            e(this._element).on("keydown.bs.carousel", function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              e(this._element)
                .on("mouseenter.bs.carousel", function (e) {
                  return t.pause(e);
                })
                .on("mouseleave.bs.carousel", function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (n._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var n = function (e) {
                t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              i = function (e) {
                t._pointerEvent &&
                  b[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            e(this._element.querySelectorAll(".carousel-item img")).on(
              "dragstart.bs.carousel",
              function (t) {
                return t.preventDefault();
              }
            ),
              this._pointerEvent
                ? (e(this._element).on("pointerdown.bs.carousel", function (t) {
                    return n(t);
                  }),
                  e(this._element).on("pointerup.bs.carousel", function (t) {
                    return i(t);
                  }),
                  this._element.classList.add("pointer-event"))
                : (e(this._element).on("touchstart.bs.carousel", function (t) {
                    return n(t);
                  }),
                  e(this._element).on("touchmove.bs.carousel", function (e) {
                    return (function (e) {
                      e.originalEvent.touches &&
                      e.originalEvent.touches.length > 1
                        ? (t.touchDeltaX = 0)
                        : (t.touchDeltaX =
                            e.originalEvent.touches[0].clientX - t.touchStartX);
                    })(e);
                  }),
                  e(this._element).on("touchend.bs.carousel", function (t) {
                    return i(t);
                  }));
          }
        }),
        (n._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (n._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(t)
          );
        }),
        (n._getItemByDirection = function (t, e) {
          var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
          return -1 === s
            ? this._items[this._items.length - 1]
            : this._items[s];
        }),
        (n._triggerSlideEvent = function (t, n) {
          var i = this._getItemIndex(t),
            o = this._getItemIndex(
              this._element.querySelector(".active.carousel-item")
            ),
            r = e.Event("slide.bs.carousel", {
              relatedTarget: t,
              direction: n,
              from: o,
              to: i,
            });
          return e(this._element).trigger(r), r;
        }),
        (n._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var n = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active")
            );
            e(n).removeClass("active");
            var i = this._indicatorsElement.children[this._getItemIndex(t)];
            i && e(i).addClass("active");
          }
        }),
        (n._slide = function (t, n) {
          var i,
            o,
            r,
            s = this,
            a = this._element.querySelector(".active.carousel-item"),
            c = this._getItemIndex(a),
            u = n || (a && this._getItemByDirection(t, a)),
            h = this._getItemIndex(u),
            f = Boolean(this._interval);
          if (
            ("next" === t
              ? ((i = "carousel-item-left"),
                (o = "carousel-item-next"),
                (r = "left"))
              : ((i = "carousel-item-right"),
                (o = "carousel-item-prev"),
                (r = "right")),
            u && e(u).hasClass("active"))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(u, r).isDefaultPrevented() &&
            a &&
            u
          ) {
            (this._isSliding = !0),
              f && this.pause(),
              this._setActiveIndicatorElement(u);
            var d = e.Event("slid.bs.carousel", {
              relatedTarget: u,
              direction: r,
              from: c,
              to: h,
            });
            if (e(this._element).hasClass("slide")) {
              e(u).addClass(o), l.reflow(u), e(a).addClass(i), e(u).addClass(i);
              var p = parseInt(u.getAttribute("data-interval"), 10);
              p
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = p))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var m = l.getTransitionDurationFromElement(a);
              e(a)
                .one(l.TRANSITION_END, function () {
                  e(u)
                    .removeClass(i + " " + o)
                    .addClass("active"),
                    e(a).removeClass("active " + o + " " + i),
                    (s._isSliding = !1),
                    setTimeout(function () {
                      return e(s._element).trigger(d);
                    }, 0);
                })
                .emulateTransitionEnd(m);
            } else
              e(a).removeClass("active"),
                e(u).addClass("active"),
                (this._isSliding = !1),
                e(this._element).trigger(d);
            f && this.cycle();
          }
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.carousel"),
              o = s(s({}, v), e(this).data());
            "object" == typeof n && (o = s(s({}, o), n));
            var r = "string" == typeof n ? n : o.slide;
            if (
              (i || ((i = new t(this, o)), e(this).data("bs.carousel", i)),
              "number" == typeof n)
            )
              i.to(n);
            else if ("string" == typeof r) {
              if ("undefined" == typeof i[r])
                throw new TypeError('No method named "' + r + '"');
              i[r]();
            } else o.interval && o.ride && (i.pause(), i.cycle());
          });
        }),
        (t._dataApiClickHandler = function (n) {
          var i = l.getSelectorFromElement(this);
          if (i) {
            var o = e(i)[0];
            if (o && e(o).hasClass("carousel")) {
              var r = s(s({}, e(o).data()), e(this).data()),
                a = this.getAttribute("data-slide-to");
              a && (r.interval = !1),
                t._jQueryInterface.call(e(o), r),
                a && e(o).data("bs.carousel").to(a),
                n.preventDefault();
            }
          }
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return v;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.carousel.data-api",
    "[data-slide], [data-slide-to]",
    y._dataApiClickHandler
  ),
    e(window).on("load.bs.carousel.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          n = 0,
          i = t.length;
        n < i;
        n++
      ) {
        var o = e(t[n]);
        y._jQueryInterface.call(o, o.data());
      }
    }),
    (e.fn[p] = y._jQueryInterface),
    (e.fn[p].Constructor = y),
    (e.fn[p].noConflict = function () {
      return (e.fn[p] = g), y._jQueryInterface;
    });
  var w = "collapse",
    E = e.fn[w],
    T = { toggle: !0, parent: "" },
    C = { toggle: "boolean", parent: "(string|element)" },
    S = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(
              document.querySelectorAll('[data-toggle="collapse"]')
            ),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = l.getSelectorFromElement(r),
            a = [].slice
              .call(document.querySelectorAll(s))
              .filter(function (e) {
                return e === t;
              });
          null !== s &&
            a.length > 0 &&
            ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          e(this._element).hasClass("show") ? this.hide() : this.show();
        }),
        (n.show = function () {
          var n,
            i,
            o = this;
          if (
            !this._isTransitioning &&
            !e(this._element).hasClass("show") &&
            (this._parent &&
              0 ===
                (n = [].slice
                  .call(this._parent.querySelectorAll(".show, .collapsing"))
                  .filter(function (t) {
                    return "string" == typeof o._config.parent
                      ? t.getAttribute("data-parent") === o._config.parent
                      : t.classList.contains("collapse");
                  })).length &&
              (n = null),
            !(
              n &&
              (i = e(n).not(this._selector).data("bs.collapse")) &&
              i._isTransitioning
            ))
          ) {
            var r = e.Event("show.bs.collapse");
            if ((e(this._element).trigger(r), !r.isDefaultPrevented())) {
              n &&
                (t._jQueryInterface.call(e(n).not(this._selector), "hide"),
                i || e(n).data("bs.collapse", null));
              var s = this._getDimension();
              e(this._element).removeClass("collapse").addClass("collapsing"),
                (this._element.style[s] = 0),
                this._triggerArray.length &&
                  e(this._triggerArray)
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                c = l.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(l.TRANSITION_END, function () {
                  e(o._element)
                    .removeClass("collapsing")
                    .addClass("collapse show"),
                    (o._element.style[s] = ""),
                    o.setTransitioning(!1),
                    e(o._element).trigger("shown.bs.collapse");
                })
                .emulateTransitionEnd(c),
                (this._element.style[s] = this._element[a] + "px");
            }
          }
        }),
        (n.hide = function () {
          var t = this;
          if (!this._isTransitioning && e(this._element).hasClass("show")) {
            var n = e.Event("hide.bs.collapse");
            if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
              var i = this._getDimension();
              (this._element.style[i] =
                this._element.getBoundingClientRect()[i] + "px"),
                l.reflow(this._element),
                e(this._element)
                  .addClass("collapsing")
                  .removeClass("collapse show");
              var o = this._triggerArray.length;
              if (o > 0)
                for (var r = 0; r < o; r++) {
                  var s = this._triggerArray[r],
                    a = l.getSelectorFromElement(s);
                  if (null !== a)
                    e([].slice.call(document.querySelectorAll(a))).hasClass(
                      "show"
                    ) || e(s).addClass("collapsed").attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[i] = "";
              var c = l.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(l.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    e(t._element)
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(c);
            }
          }
        }),
        (n.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.collapse"),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (n._getConfig = function (t) {
          return (
            ((t = s(s({}, T), t)).toggle = Boolean(t.toggle)),
            l.typeCheckConfig(w, t, C),
            t
          );
        }),
        (n._getDimension = function () {
          return e(this._element).hasClass("width") ? "width" : "height";
        }),
        (n._getParent = function () {
          var n,
            i = this;
          l.isElement(this._config.parent)
            ? ((n = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (n = this._config.parent[0]))
            : (n = document.querySelector(this._config.parent));
          var o =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            r = [].slice.call(n.querySelectorAll(o));
          return (
            e(r).each(function (e, n) {
              i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
            }),
            n
          );
        }),
        (n._addAriaAndCollapsedClass = function (t, n) {
          var i = e(t).hasClass("show");
          n.length &&
            e(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
        }),
        (t._getTargetFromElement = function (t) {
          var e = l.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.collapse"),
              r = s(s(s({}, T), i.data()), "object" == typeof n && n ? n : {});
            if (
              (!o &&
                r.toggle &&
                "string" == typeof n &&
                /show|hide/.test(n) &&
                (r.toggle = !1),
              o || ((o = new t(this, r)), i.data("bs.collapse", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n]();
            }
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return T;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.collapse.data-api",
    '[data-toggle="collapse"]',
    function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var n = e(this),
        i = l.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(i));
      e(o).each(function () {
        var t = e(this),
          i = t.data("bs.collapse") ? "toggle" : n.data();
        S._jQueryInterface.call(t, i);
      });
    }
  ),
    (e.fn[w] = S._jQueryInterface),
    (e.fn[w].Constructor = S),
    (e.fn[w].noConflict = function () {
      return (e.fn[w] = E), S._jQueryInterface;
    });
  var D =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      "undefined" != typeof navigator,
    k = (function () {
      for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
        if (D && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
      return 0;
    })();
  var N =
    D && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, k));
          };
        };
  function O(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function A(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function I(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function x(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = A(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : x(I(t));
  }
  function j(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }
  var L = D && !(!window.MSInputMethodContext || !document.documentMode),
    P = D && /MSIE 10/.test(navigator.userAgent);
  function F(t) {
    return 11 === t ? L : 10 === t ? P : L || P;
  }
  function R(t) {
    if (!t) return document.documentElement;
    for (
      var e = F(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === A(n, "position")
        ? R(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function M(t) {
    return null !== t.parentNode ? M(t.parentNode) : t;
  }
  function B(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s,
      a,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return "BODY" === (a = (s = l).nodeName) ||
        ("HTML" !== a && R(s.firstElementChild) !== s)
        ? R(l)
        : l;
    var c = M(t);
    return c.host ? B(c.host, e) : B(t, M(e).host);
  }
  function q(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
      n = "top" === e ? "scrollTop" : "scrollLeft",
      i = t.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var o = t.ownerDocument.documentElement,
        r = t.ownerDocument.scrollingElement || o;
      return r[n];
    }
    return t[n];
  }
  function H(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = q(e, "top"),
      o = q(e, "left"),
      r = n ? -1 : 1;
    return (
      (t.top += i * r),
      (t.bottom += i * r),
      (t.left += o * r),
      (t.right += o * r),
      t
    );
  }
  function Q(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"], 10) +
      parseFloat(t["border" + i + "Width"], 10)
    );
  }
  function W(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      F(10)
        ? parseInt(n["offset" + t]) +
            parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
            parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
        : 0
    );
  }
  function U(t) {
    var e = t.body,
      n = t.documentElement,
      i = F(10) && getComputedStyle(n);
    return { height: W("Height", e, n, i), width: W("Width", e, n, i) };
  }
  var V = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    },
    Y = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    z = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    X =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function K(t) {
    return X({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function G(t) {
    var e = {};
    try {
      if (F(10)) {
        e = t.getBoundingClientRect();
        var n = q(t, "top"),
          i = q(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      r = "HTML" === t.nodeName ? U(t.ownerDocument) : {},
      s = r.width || t.clientWidth || o.width,
      a = r.height || t.clientHeight || o.height,
      l = t.offsetWidth - s,
      c = t.offsetHeight - a;
    if (l || c) {
      var u = A(t);
      (l -= Q(u, "x")), (c -= Q(u, "y")), (o.width -= l), (o.height -= c);
    }
    return K(o);
  }
  function $(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = F(10),
      o = "HTML" === e.nodeName,
      r = G(t),
      s = G(e),
      a = x(t),
      l = A(e),
      c = parseFloat(l.borderTopWidth, 10),
      u = parseFloat(l.borderLeftWidth, 10);
    n && o && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
    var h = K({
      top: r.top - s.top - c,
      left: r.left - s.left - u,
      width: r.width,
      height: r.height,
    });
    if (((h.marginTop = 0), (h.marginLeft = 0), !i && o)) {
      var f = parseFloat(l.marginTop, 10),
        d = parseFloat(l.marginLeft, 10);
      (h.top -= c - f),
        (h.bottom -= c - f),
        (h.left -= u - d),
        (h.right -= u - d),
        (h.marginTop = f),
        (h.marginLeft = d);
    }
    return (
      (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) &&
        (h = H(h, e)),
      h
    );
  }
  function J(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = t.ownerDocument.documentElement,
      i = $(t, n),
      o = Math.max(n.clientWidth, window.innerWidth || 0),
      r = Math.max(n.clientHeight, window.innerHeight || 0),
      s = e ? 0 : q(n),
      a = e ? 0 : q(n, "left"),
      l = {
        top: s - i.top + i.marginTop,
        left: a - i.left + i.marginLeft,
        width: o,
        height: r,
      };
    return K(l);
  }
  function Z(t) {
    var e = t.nodeName;
    if ("BODY" === e || "HTML" === e) return !1;
    if ("fixed" === A(t, "position")) return !0;
    var n = I(t);
    return !!n && Z(n);
  }
  function tt(t) {
    if (!t || !t.parentElement || F()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === A(e, "transform"); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function et(t, e, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      r = { top: 0, left: 0 },
      s = o ? tt(t) : B(t, j(e));
    if ("viewport" === i) r = J(s, o);
    else {
      var a = void 0;
      "scrollParent" === i
        ? "BODY" === (a = x(I(e))).nodeName &&
          (a = t.ownerDocument.documentElement)
        : (a = "window" === i ? t.ownerDocument.documentElement : i);
      var l = $(a, s, o);
      if ("HTML" !== a.nodeName || Z(s)) r = l;
      else {
        var c = U(t.ownerDocument),
          u = c.height,
          h = c.width;
        (r.top += l.top - l.marginTop),
          (r.bottom = u + l.top),
          (r.left += l.left - l.marginLeft),
          (r.right = h + l.left);
      }
    }
    var f = "number" == typeof (n = n || 0);
    return (
      (r.left += f ? n : n.left || 0),
      (r.top += f ? n : n.top || 0),
      (r.right -= f ? n : n.right || 0),
      (r.bottom -= f ? n : n.bottom || 0),
      r
    );
  }
  function nt(t) {
    return t.width * t.height;
  }
  function it(t, e, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = et(n, i, r, o),
      a = {
        top: { width: s.width, height: e.top - s.top },
        right: { width: s.right - e.right, height: s.height },
        bottom: { width: s.width, height: s.bottom - e.bottom },
        left: { width: e.left - s.left, height: s.height },
      },
      l = Object.keys(a)
        .map(function (t) {
          return X({ key: t }, a[t], { area: nt(a[t]) });
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      c = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      u = c.length > 0 ? c[0].key : l[0].key,
      h = t.split("-")[1];
    return u + (h ? "-" + h : "");
  }
  function ot(t, e, n) {
    var i =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      o = i ? tt(e) : B(e, j(n));
    return $(n, o, i);
  }
  function rt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
      i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function st(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function at(t, e, n) {
    n = n.split("-")[0];
    var i = rt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      s = r ? "top" : "left",
      a = r ? "left" : "top",
      l = r ? "height" : "width",
      c = r ? "width" : "height";
    return (
      (o[s] = e[s] + e[l] / 2 - i[l] / 2),
      (o[a] = n === a ? e[a] - i[c] : e[st(a)]),
      o
    );
  }
  function lt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function ct(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = lt(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", n)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t.function || t.fn;
        t.enabled &&
          O(n) &&
          ((e.offsets.popper = K(e.offsets.popper)),
          (e.offsets.reference = K(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function ut() {
    if (!this.state.isDestroyed) {
      var t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (t.offsets.reference = ot(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (t.placement = it(
          this.options.placement,
          t.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (t.originalPlacement = t.placement),
        (t.positionFixed = this.options.positionFixed),
        (t.offsets.popper = at(this.popper, t.offsets.reference, t.placement)),
        (t.offsets.popper.position = this.options.positionFixed
          ? "fixed"
          : "absolute"),
        (t = ct(this.modifiers, t)),
        this.state.isCreated
          ? this.options.onUpdate(t)
          : ((this.state.isCreated = !0), this.options.onCreate(t));
    }
  }
  function ht(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function ft(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? "" + o + n : t;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function dt() {
    return (
      (this.state.isDestroyed = !0),
      ht(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style.left = ""),
        (this.popper.style.right = ""),
        (this.popper.style.bottom = ""),
        (this.popper.style.willChange = ""),
        (this.popper.style[ft("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function pt(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function mt(t, e, n, i) {
    (n.updateBound = i),
      pt(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var o = x(t);
    return (
      (function t(e, n, i, o) {
        var r = "BODY" === e.nodeName,
          s = r ? e.ownerDocument.defaultView : e;
        s.addEventListener(n, i, { passive: !0 }),
          r || t(x(s.parentNode), n, i, o),
          o.push(s);
      })(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function gt() {
    this.state.eventsEnabled ||
      (this.state = mt(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function vt() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        pt(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function _t(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function bt(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
        _t(e[n]) &&
        (i = "px"),
        (t.style[n] = e[n] + i);
    });
  }
  var yt = D && /Firefox/i.test(navigator.userAgent);
  function wt(t, e, n) {
    var i = lt(t, function (t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = "`" + e + "`",
        s = "`" + n + "`";
      console.warn(
        s +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return o;
  }
  var Et = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    Tt = Et.slice(3);
  function Ct(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = Tt.indexOf(t),
      i = Tt.slice(n + 1).concat(Tt.slice(0, n));
    return e ? i.reverse() : i;
  }
  var St = "flip",
    Dt = "clockwise",
    kt = "counterclockwise";
  function Nt(t, e, n, i) {
    var o = [0, 0],
      r = -1 !== ["right", "left"].indexOf(i),
      s = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      a = s.indexOf(
        lt(s, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    s[a] &&
      -1 === s[a].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      c =
        -1 !== a
          ? [
              s.slice(0, a).concat([s[a].split(l)[0]]),
              [s[a].split(l)[1]].concat(s.slice(a + 1)),
            ]
          : [s];
    return (
      (c = c.map(function (t, i) {
        var o = (1 === i ? !r : r) ? "height" : "width",
          s = !1;
        return t
          .reduce(function (t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
              ? ((t[t.length - 1] = e), (s = !0), t)
              : s
              ? ((t[t.length - 1] += e), (s = !1), t)
              : t.concat(e);
          }, [])
          .map(function (t) {
            return (function (t, e, n, i) {
              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                s = o[2];
              if (!r) return t;
              if (0 === s.indexOf("%")) {
                var a = void 0;
                switch (s) {
                  case "%p":
                    a = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a = i;
                }
                return (K(a)[e] / 100) * r;
              }
              if ("vh" === s || "vw" === s) {
                return (
                  (("vh" === s
                    ? Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      )
                    : Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      )) /
                    100) *
                  r
                );
              }
              return r;
            })(t, o, e, n);
          });
      })).forEach(function (t, e) {
        t.forEach(function (n, i) {
          _t(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
        });
      }),
      o
    );
  }
  var Ot = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = {
                  start: z({}, l, r[l]),
                  end: z({}, l, r[l] + r[c] - s[c]),
                };
              t.offsets.popper = X({}, s, u[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;
            return (
              (l = _t(+n) ? [+n, 0] : Nt(n, r, s, a)),
              "left" === a
                ? ((r.top += l[0]), (r.left -= l[1]))
                : "right" === a
                ? ((r.top += l[0]), (r.left += l[1]))
                : "top" === a
                ? ((r.left += l[0]), (r.top -= l[1]))
                : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
              (t.popper = r),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || R(t.instance.popper);
            t.instance.reference === n && (n = R(n));
            var i = ft("transform"),
              o = t.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[i];
            (o.top = ""), (o.left = ""), (o[i] = "");
            var l = et(
              t.instance.popper,
              t.instance.reference,
              e.padding,
              n,
              t.positionFixed
            );
            (o.top = r), (o.left = s), (o[i] = a), (e.boundaries = l);
            var c = e.priority,
              u = t.offsets.popper,
              h = {
                primary: function (t) {
                  var n = u[t];
                  return (
                    u[t] < l[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(u[t], l[t])),
                    z({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = "right" === t ? "left" : "top",
                    i = u[n];
                  return (
                    u[t] > l[t] &&
                      !e.escapeWithReference &&
                      (i = Math.min(
                        u[n],
                        l[t] - ("right" === t ? u.width : u.height)
                      )),
                    z({}, n, i)
                  );
                },
              };
            return (
              c.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                u = X({}, u, h[e](t));
              }),
              (t.offsets.popper = u),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
              n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!wt(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var o = t.placement.split("-")[0],
              r = t.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              c = l ? "height" : "width",
              u = l ? "Top" : "Left",
              h = u.toLowerCase(),
              f = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = rt(i)[c];
            a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)),
              a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]),
              (t.offsets.popper = K(t.offsets.popper));
            var m = a[h] + a[c] / 2 - p / 2,
              g = A(t.instance.popper),
              v = parseFloat(g["margin" + u], 10),
              _ = parseFloat(g["border" + u + "Width"], 10),
              b = m - t.offsets.popper[h] - v - _;
            return (
              (b = Math.max(Math.min(s[c] - p, b), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (z((n = {}), h, Math.round(b)), z(n, f, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (ht(t.instance.modifiers, "inner")) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = et(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement,
                t.positionFixed
              ),
              i = t.placement.split("-")[0],
              o = st(i),
              r = t.placement.split("-")[1] || "",
              s = [];
            switch (e.behavior) {
              case St:
                s = [i, o];
                break;
              case Dt:
                s = Ct(i);
                break;
              case kt:
                s = Ct(i, !0);
                break;
              default:
                s = e.behavior;
            }
            return (
              s.forEach(function (a, l) {
                if (i !== a || s.length === l + 1) return t;
                (i = t.placement.split("-")[0]), (o = st(i));
                var c = t.offsets.popper,
                  u = t.offsets.reference,
                  h = Math.floor,
                  f =
                    ("left" === i && h(c.right) > h(u.left)) ||
                    ("right" === i && h(c.left) < h(u.right)) ||
                    ("top" === i && h(c.bottom) > h(u.top)) ||
                    ("bottom" === i && h(c.top) < h(u.bottom)),
                  d = h(c.left) < h(n.left),
                  p = h(c.right) > h(n.right),
                  m = h(c.top) < h(n.top),
                  g = h(c.bottom) > h(n.bottom),
                  v =
                    ("left" === i && d) ||
                    ("right" === i && p) ||
                    ("top" === i && m) ||
                    ("bottom" === i && g),
                  _ = -1 !== ["top", "bottom"].indexOf(i),
                  b =
                    !!e.flipVariations &&
                    ((_ && "start" === r && d) ||
                      (_ && "end" === r && p) ||
                      (!_ && "start" === r && m) ||
                      (!_ && "end" === r && g)),
                  y =
                    !!e.flipVariationsByContent &&
                    ((_ && "start" === r && p) ||
                      (_ && "end" === r && d) ||
                      (!_ && "start" === r && g) ||
                      (!_ && "end" === r && m)),
                  w = b || y;
                (f || v || w) &&
                  ((t.flipped = !0),
                  (f || v) && (i = s[l + 1]),
                  w &&
                    (r = (function (t) {
                      return "end" === t ? "start" : "start" === t ? "end" : t;
                    })(r)),
                  (t.placement = i + (r ? "-" + r : "")),
                  (t.offsets.popper = X(
                    {},
                    t.offsets.popper,
                    at(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = ct(t.instance.modifiers, t, "flip")));
              }),
              t
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (o[s ? "left" : "top"] =
                r[n] - (a ? o[s ? "width" : "height"] : 0)),
              (t.placement = st(e)),
              (t.offsets.popper = K(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!wt(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = lt(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = lt(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s = void 0 !== r ? r : e.gpuAcceleration,
              a = R(t.instance.popper),
              l = G(a),
              c = { position: o.position },
              u = (function (t, e) {
                var n = t.offsets,
                  i = n.popper,
                  o = n.reference,
                  r = Math.round,
                  s = Math.floor,
                  a = function (t) {
                    return t;
                  },
                  l = r(o.width),
                  c = r(i.width),
                  u = -1 !== ["left", "right"].indexOf(t.placement),
                  h = -1 !== t.placement.indexOf("-"),
                  f = e ? (u || h || l % 2 == c % 2 ? r : s) : a,
                  d = e ? r : a;
                return {
                  left: f(
                    l % 2 == 1 && c % 2 == 1 && !h && e ? i.left - 1 : i.left
                  ),
                  top: d(i.top),
                  bottom: d(i.bottom),
                  right: f(i.right),
                };
              })(t, window.devicePixelRatio < 2 || !yt),
              h = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              d = ft("transform"),
              p = void 0,
              m = void 0;
            if (
              ((m =
                "bottom" === h
                  ? "HTML" === a.nodeName
                    ? -a.clientHeight + u.bottom
                    : -l.height + u.bottom
                  : u.top),
              (p =
                "right" === f
                  ? "HTML" === a.nodeName
                    ? -a.clientWidth + u.right
                    : -l.width + u.right
                  : u.left),
              s && d)
            )
              (c[d] = "translate3d(" + p + "px, " + m + "px, 0)"),
                (c[h] = 0),
                (c[f] = 0),
                (c.willChange = "transform");
            else {
              var g = "bottom" === h ? -1 : 1,
                v = "right" === f ? -1 : 1;
              (c[h] = m * g), (c[f] = p * v), (c.willChange = h + ", " + f);
            }
            var _ = { "x-placement": t.placement };
            return (
              (t.attributes = X({}, _, t.attributes)),
              (t.styles = X({}, c, t.styles)),
              (t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              bt(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                bt(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = ot(o, e, t, n.positionFixed),
              s = it(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", s),
              bt(e, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    At = (function () {
      function t(e, n) {
        var i = this,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        V(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = N(this.update.bind(this))),
          (this.options = X({}, t.Defaults, o)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(X({}, t.Defaults.modifiers, o.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = X(
                {},
                t.Defaults.modifiers[e] || {},
                o.modifiers ? o.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return X({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              O(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), (this.state.eventsEnabled = r);
      }
      return (
        Y(t, [
          {
            key: "update",
            value: function () {
              return ut.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return dt.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return gt.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return vt.call(this);
            },
          },
        ]),
        t
      );
    })();
  (At.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (At.placements = Et),
    (At.Defaults = Ot);
  var It = "dropdown",
    xt = e.fn[It],
    jt = new RegExp("38|40|27"),
    Lt = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    Pt = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    Ft = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          if (
            !this._element.disabled &&
            !e(this._element).hasClass("disabled")
          ) {
            var n = e(this._menu).hasClass("show");
            t._clearMenus(), n || this.show(!0);
          }
        }),
        (n.show = function (n) {
          if (
            (void 0 === n && (n = !1),
            !(
              this._element.disabled ||
              e(this._element).hasClass("disabled") ||
              e(this._menu).hasClass("show")
            ))
          ) {
            var i = { relatedTarget: this._element },
              o = e.Event("show.bs.dropdown", i),
              r = t._getParentFromElement(this._element);
            if ((e(r).trigger(o), !o.isDefaultPrevented())) {
              if (!this._inNavbar && n) {
                if ("undefined" == typeof At)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var s = this._element;
                "parent" === this._config.reference
                  ? (s = r)
                  : l.isElement(this._config.reference) &&
                    ((s = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (s = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    e(r).addClass("position-static"),
                  (this._popper = new At(
                    s,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === e(r).closest(".navbar-nav").length &&
                e(document.body).children().on("mouseover", null, e.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                e(this._menu).toggleClass("show"),
                e(r)
                  .toggleClass("show")
                  .trigger(e.Event("shown.bs.dropdown", i));
            }
          }
        }),
        (n.hide = function () {
          if (
            !this._element.disabled &&
            !e(this._element).hasClass("disabled") &&
            e(this._menu).hasClass("show")
          ) {
            var n = { relatedTarget: this._element },
              i = e.Event("hide.bs.dropdown", n),
              o = t._getParentFromElement(this._element);
            e(o).trigger(i),
              i.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                e(this._menu).toggleClass("show"),
                e(o)
                  .toggleClass("show")
                  .trigger(e.Event("hidden.bs.dropdown", n)));
          }
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.dropdown"),
            e(this._element).off(".bs.dropdown"),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (n.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (n._addEventListeners = function () {
          var t = this;
          e(this._element).on("click.bs.dropdown", function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (n._getConfig = function (t) {
          return (
            (t = s(
              s(s({}, this.constructor.Default), e(this._element).data()),
              t
            )),
            l.typeCheckConfig(It, t, this.constructor.DefaultType),
            t
          );
        }),
        (n._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(".dropdown-menu"));
          }
          return this._menu;
        }),
        (n._getPlacement = function () {
          var t = e(this._element.parentNode),
            n = "bottom-start";
          return (
            t.hasClass("dropup")
              ? (n = e(this._menu).hasClass("dropdown-menu-right")
                  ? "top-end"
                  : "top-start")
              : t.hasClass("dropright")
              ? (n = "right-start")
              : t.hasClass("dropleft")
              ? (n = "left-start")
              : e(this._menu).hasClass("dropdown-menu-right") &&
                (n = "bottom-end"),
            n
          );
        }),
        (n._detectNavbar = function () {
          return e(this._element).closest(".navbar").length > 0;
        }),
        (n._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = s(
                      s({}, e.offsets),
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (n._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            s(s({}, t), this._config.popperConfig)
          );
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.dropdown");
            if (
              (i ||
                ((i = new t(this, "object" == typeof n ? n : null)),
                e(this).data("bs.dropdown", i)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        (t._clearMenus = function (n) {
          if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
            for (
              var i = [].slice.call(
                  document.querySelectorAll('[data-toggle="dropdown"]')
                ),
                o = 0,
                r = i.length;
              o < r;
              o++
            ) {
              var s = t._getParentFromElement(i[o]),
                a = e(i[o]).data("bs.dropdown"),
                l = { relatedTarget: i[o] };
              if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                var c = a._menu;
                if (
                  e(s).hasClass("show") &&
                  !(
                    n &&
                    (("click" === n.type &&
                      /input|textarea/i.test(n.target.tagName)) ||
                      ("keyup" === n.type && 9 === n.which)) &&
                    e.contains(s, n.target)
                  )
                ) {
                  var u = e.Event("hide.bs.dropdown", l);
                  e(s).trigger(u),
                    u.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        e(document.body)
                          .children()
                          .off("mouseover", null, e.noop),
                      i[o].setAttribute("aria-expanded", "false"),
                      a._popper && a._popper.destroy(),
                      e(c).removeClass("show"),
                      e(s)
                        .removeClass("show")
                        .trigger(e.Event("hidden.bs.dropdown", l)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = l.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (n) {
          if (
            !(/input|textarea/i.test(n.target.tagName)
              ? 32 === n.which ||
                (27 !== n.which &&
                  ((40 !== n.which && 38 !== n.which) ||
                    e(n.target).closest(".dropdown-menu").length))
              : !jt.test(n.which)) &&
            !this.disabled &&
            !e(this).hasClass("disabled")
          ) {
            var i = t._getParentFromElement(this),
              o = e(i).hasClass("show");
            if (o || 27 !== n.which) {
              if (
                (n.preventDefault(),
                n.stopPropagation(),
                !o || (o && (27 === n.which || 32 === n.which)))
              )
                return (
                  27 === n.which &&
                    e(i.querySelector('[data-toggle="dropdown"]')).trigger(
                      "focus"
                    ),
                  void e(this).trigger("click")
                );
              var r = [].slice
                .call(
                  i.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                )
                .filter(function (t) {
                  return e(t).is(":visible");
                });
              if (0 !== r.length) {
                var s = r.indexOf(n.target);
                38 === n.which && s > 0 && s--,
                  40 === n.which && s < r.length - 1 && s++,
                  s < 0 && (s = 0),
                  r[s].focus();
              }
            }
          }
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return Lt;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Pt;
            },
          },
        ]),
        t
      );
    })();
  e(document)
    .on(
      "keydown.bs.dropdown.data-api",
      '[data-toggle="dropdown"]',
      Ft._dataApiKeydownHandler
    )
    .on(
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      Ft._dataApiKeydownHandler
    )
    .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ft._clearMenus)
    .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        Ft._jQueryInterface.call(e(this), "toggle");
    })
    .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }),
    (e.fn[It] = Ft._jQueryInterface),
    (e.fn[It].Constructor = Ft),
    (e.fn[It].noConflict = function () {
      return (e.fn[It] = xt), Ft._jQueryInterface;
    });
  var Rt = e.fn.modal,
    Mt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    Bt = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    qt = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(".modal-dialog")),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var n = t.prototype;
      return (
        (n.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (n.show = function (t) {
          var n = this;
          if (!this._isShown && !this._isTransitioning) {
            e(this._element).hasClass("fade") && (this._isTransitioning = !0);
            var i = e.Event("show.bs.modal", { relatedTarget: t });
            e(this._element).trigger(i),
              this._isShown ||
                i.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(this._element).on(
                  "click.dismiss.bs.modal",
                  '[data-dismiss="modal"]',
                  function (t) {
                    return n.hide(t);
                  }
                ),
                e(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                  e(n._element).one("mouseup.dismiss.bs.modal", function (t) {
                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return n._showElement(t);
                }));
          }
        }),
        (n.hide = function (t) {
          var n = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var i = e.Event("hide.bs.modal");
            if (
              (e(this._element).trigger(i),
              this._isShown && !i.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var o = e(this._element).hasClass("fade");
              if (
                (o && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(document).off("focusin.bs.modal"),
                e(this._element).removeClass("show"),
                e(this._element).off("click.dismiss.bs.modal"),
                e(this._dialog).off("mousedown.dismiss.bs.modal"),
                o)
              ) {
                var r = l.getTransitionDurationFromElement(this._element);
                e(this._element)
                  .one(l.TRANSITION_END, function (t) {
                    return n._hideModal(t);
                  })
                  .emulateTransitionEnd(r);
              } else this._hideModal();
            }
          }
        }),
        (n.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return e(t).off(".bs.modal");
          }),
            e(document).off("focusin.bs.modal"),
            e.removeData(this._element, "bs.modal"),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (n.handleUpdate = function () {
          this._adjustDialog();
        }),
        (n._getConfig = function (t) {
          return (t = s(s({}, Mt), t)), l.typeCheckConfig("modal", t, Bt), t;
        }),
        (n._triggerBackdropTransition = function () {
          var t = this;
          if ("static" === this._config.backdrop) {
            var n = e.Event("hidePrevented.bs.modal");
            if ((e(this._element).trigger(n), n.defaultPrevented)) return;
            this._element.classList.add("modal-static");
            var i = l.getTransitionDurationFromElement(this._element);
            e(this._element)
              .one(l.TRANSITION_END, function () {
                t._element.classList.remove("modal-static");
              })
              .emulateTransitionEnd(i),
              this._element.focus();
          } else this.hide();
        }),
        (n._showElement = function (t) {
          var n = this,
            i = e(this._element).hasClass("fade"),
            o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            e(this._dialog).hasClass("modal-dialog-scrollable") && o
              ? (o.scrollTop = 0)
              : (this._element.scrollTop = 0),
            i && l.reflow(this._element),
            e(this._element).addClass("show"),
            this._config.focus && this._enforceFocus();
          var r = e.Event("shown.bs.modal", { relatedTarget: t }),
            s = function () {
              n._config.focus && n._element.focus(),
                (n._isTransitioning = !1),
                e(n._element).trigger(r);
            };
          if (i) {
            var a = l.getTransitionDurationFromElement(this._dialog);
            e(this._dialog).one(l.TRANSITION_END, s).emulateTransitionEnd(a);
          } else s();
        }),
        (n._enforceFocus = function () {
          var t = this;
          e(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", function (n) {
              document !== n.target &&
                t._element !== n.target &&
                0 === e(t._element).has(n.target).length &&
                t._element.focus();
            });
        }),
        (n._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? e(this._element).on("keydown.dismiss.bs.modal", function (e) {
                t._config.keyboard && 27 === e.which
                  ? (e.preventDefault(), t.hide())
                  : t._config.keyboard ||
                    27 !== e.which ||
                    t._triggerBackdropTransition();
              })
            : this._isShown || e(this._element).off("keydown.dismiss.bs.modal");
        }),
        (n._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? e(window).on("resize.bs.modal", function (e) {
                return t.handleUpdate(e);
              })
            : e(window).off("resize.bs.modal");
        }),
        (n._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              e(document.body).removeClass("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                e(t._element).trigger("hidden.bs.modal");
            });
        }),
        (n._removeBackdrop = function () {
          this._backdrop &&
            (e(this._backdrop).remove(), (this._backdrop = null));
        }),
        (n._showBackdrop = function (t) {
          var n = this,
            i = e(this._element).hasClass("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              i && this._backdrop.classList.add(i),
              e(this._backdrop).appendTo(document.body),
              e(this._element).on("click.dismiss.bs.modal", function (t) {
                n._ignoreBackdropClick
                  ? (n._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    n._triggerBackdropTransition();
              }),
              i && l.reflow(this._backdrop),
              e(this._backdrop).addClass("show"),
              !t)
            )
              return;
            if (!i) return void t();
            var o = l.getTransitionDurationFromElement(this._backdrop);
            e(this._backdrop).one(l.TRANSITION_END, t).emulateTransitionEnd(o);
          } else if (!this._isShown && this._backdrop) {
            e(this._backdrop).removeClass("show");
            var r = function () {
              n._removeBackdrop(), t && t();
            };
            if (e(this._element).hasClass("fade")) {
              var s = l.getTransitionDurationFromElement(this._backdrop);
              e(this._backdrop)
                .one(l.TRANSITION_END, r)
                .emulateTransitionEnd(s);
            } else r();
          } else t && t();
        }),
        (n._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (n._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (n._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (n._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var n = [].slice.call(
                document.querySelectorAll(
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                )
              ),
              i = [].slice.call(document.querySelectorAll(".sticky-top"));
            e(n).each(function (n, i) {
              var o = i.style.paddingRight,
                r = e(i).css("padding-right");
              e(i)
                .data("padding-right", o)
                .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
            }),
              e(i).each(function (n, i) {
                var o = i.style.marginRight,
                  r = e(i).css("margin-right");
                e(i)
                  .data("margin-right", o)
                  .css(
                    "margin-right",
                    parseFloat(r) - t._scrollbarWidth + "px"
                  );
              });
            var o = document.body.style.paddingRight,
              r = e(document.body).css("padding-right");
            e(document.body)
              .data("padding-right", o)
              .css(
                "padding-right",
                parseFloat(r) + this._scrollbarWidth + "px"
              );
          }
          e(document.body).addClass("modal-open");
        }),
        (n._resetScrollbar = function () {
          var t = [].slice.call(
            document.querySelectorAll(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            )
          );
          e(t).each(function (t, n) {
            var i = e(n).data("padding-right");
            e(n).removeData("padding-right"), (n.style.paddingRight = i || "");
          });
          var n = [].slice.call(document.querySelectorAll(".sticky-top"));
          e(n).each(function (t, n) {
            var i = e(n).data("margin-right");
            "undefined" != typeof i &&
              e(n).css("margin-right", i).removeData("margin-right");
          });
          var i = e(document.body).data("padding-right");
          e(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = i || "");
        }),
        (n._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (n, i) {
          return this.each(function () {
            var o = e(this).data("bs.modal"),
              r = s(
                s(s({}, Mt), e(this).data()),
                "object" == typeof n && n ? n : {}
              );
            if (
              (o || ((o = new t(this, r)), e(this).data("bs.modal", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n](i);
            } else r.show && o.show(i);
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return Mt;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.modal.data-api",
    '[data-toggle="modal"]',
    function (t) {
      var n,
        i = this,
        o = l.getSelectorFromElement(this);
      o && (n = document.querySelector(o));
      var r = e(n).data("bs.modal")
        ? "toggle"
        : s(s({}, e(n).data()), e(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var a = e(n).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() ||
          a.one("hidden.bs.modal", function () {
            e(i).is(":visible") && i.focus();
          });
      });
      qt._jQueryInterface.call(e(n), r, this);
    }
  ),
    (e.fn.modal = qt._jQueryInterface),
    (e.fn.modal.Constructor = qt),
    (e.fn.modal.noConflict = function () {
      return (e.fn.modal = Rt), qt._jQueryInterface;
    });
  var Ht = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    Qt = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    Ut =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function Vt(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, "text/html"),
        o = Object.keys(e),
        r = [].slice.call(i.body.querySelectorAll("*")),
        s = function (t, n) {
          var i = r[t],
            s = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), "continue";
          var a = [].slice.call(i.attributes),
            l = [].concat(e["*"] || [], e[s] || []);
          a.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === Ht.indexOf(n) ||
                  Boolean(t.nodeValue.match(Wt) || t.nodeValue.match(Ut))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, l) || i.removeAttribute(t.nodeName);
          });
        },
        a = 0,
        l = r.length;
      a < l;
      a++
    )
      s(a);
    return i.body.innerHTML;
  }
  var Yt = "tooltip",
    zt = e.fn[Yt],
    Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    Kt = ["sanitize", "whiteList", "sanitizeFn"],
    Gt = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    $t = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    Jt = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Qt,
      popperConfig: null,
    },
    Zt = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    te = (function () {
      function t(t, e) {
        if ("undefined" == typeof At)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var n = t.prototype;
      return (
        (n.enable = function () {
          this._isEnabled = !0;
        }),
        (n.disable = function () {
          this._isEnabled = !1;
        }),
        (n.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (n.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var n = this.constructor.DATA_KEY,
                i = e(t.currentTarget).data(n);
              i ||
                ((i = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                e(t.currentTarget).data(n, i)),
                (i._activeTrigger.click = !i._activeTrigger.click),
                i._isWithActiveTrigger()
                  ? i._enter(null, i)
                  : i._leave(null, i);
            } else {
              if (e(this.getTipElement()).hasClass("show"))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (n.dispose = function () {
          clearTimeout(this._timeout),
            e.removeData(this.element, this.constructor.DATA_KEY),
            e(this.element).off(this.constructor.EVENT_KEY),
            e(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && e(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (n.show = function () {
          var t = this;
          if ("none" === e(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var n = e.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            e(this.element).trigger(n);
            var i = l.findShadowRoot(this.element),
              o = e.contains(
                null !== i ? i : this.element.ownerDocument.documentElement,
                this.element
              );
            if (n.isDefaultPrevented() || !o) return;
            var r = this.getTipElement(),
              s = l.getUID(this.constructor.NAME);
            r.setAttribute("id", s),
              this.element.setAttribute("aria-describedby", s),
              this.setContent(),
              this.config.animation && e(r).addClass("fade");
            var a =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, r, this.element)
                  : this.config.placement,
              c = this._getAttachment(a);
            this.addAttachmentClass(c);
            var u = this._getContainer();
            e(r).data(this.constructor.DATA_KEY, this),
              e.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || e(r).appendTo(u),
              e(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new At(
                this.element,
                r,
                this._getPopperConfig(c)
              )),
              e(r).addClass("show"),
              "ontouchstart" in document.documentElement &&
                e(document.body).children().on("mouseover", null, e.noop);
            var h = function () {
              t.config.animation && t._fixTransition();
              var n = t._hoverState;
              (t._hoverState = null),
                e(t.element).trigger(t.constructor.Event.SHOWN),
                "out" === n && t._leave(null, t);
            };
            if (e(this.tip).hasClass("fade")) {
              var f = l.getTransitionDurationFromElement(this.tip);
              e(this.tip).one(l.TRANSITION_END, h).emulateTransitionEnd(f);
            } else h();
          }
        }),
        (n.hide = function (t) {
          var n = this,
            i = this.getTipElement(),
            o = e.Event(this.constructor.Event.HIDE),
            r = function () {
              "show" !== n._hoverState &&
                i.parentNode &&
                i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                e(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t();
            };
          if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (e(i).removeClass("show"),
              "ontouchstart" in document.documentElement &&
                e(document.body).children().off("mouseover", null, e.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              e(this.tip).hasClass("fade"))
            ) {
              var s = l.getTransitionDurationFromElement(i);
              e(i).one(l.TRANSITION_END, r).emulateTransitionEnd(s);
            } else r();
            this._hoverState = "";
          }
        }),
        (n.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (n.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (n.addAttachmentClass = function (t) {
          e(this.getTipElement()).addClass("bs-tooltip-" + t);
        }),
        (n.getTipElement = function () {
          return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
        }),
        (n.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            e(t.querySelectorAll(".tooltip-inner")),
            this.getTitle()
          ),
            e(t).removeClass("fade show");
        }),
        (n.setElementContent = function (t, n) {
          "object" != typeof n || (!n.nodeType && !n.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (n = Vt(n, this.config.whiteList, this.config.sanitizeFn)),
                t.html(n))
              : t.text(n)
            : this.config.html
            ? e(n).parent().is(t) || t.empty().append(n)
            : t.text(e(n).text());
        }),
        (n.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (n._getPopperConfig = function (t) {
          var e = this;
          return s(
            s(
              {},
              {
                placement: t,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: ".arrow" },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t);
                },
              }
            ),
            this.config.popperConfig
          );
        }),
        (n._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = s(
                      s({}, e.offsets),
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (n._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : l.isElement(this.config.container)
            ? e(this.config.container)
            : e(document).find(this.config.container);
        }),
        (n._getAttachment = function (t) {
          return $t[t.toUpperCase()];
        }),
        (n._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (n) {
            if ("click" === n)
              e(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ("manual" !== n) {
              var i =
                  "hover" === n
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                o =
                  "hover" === n
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              e(t.element)
                .on(i, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(o, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            e(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = s(
                  s({}, this.config),
                  {},
                  { trigger: "manual", selector: "" }
                ))
              : this._fixTitle();
        }),
        (n._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (n._enter = function (t, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(i)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            e(t.currentTarget).data(i, n)),
            t &&
              (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            e(n.getTipElement()).hasClass("show") || "show" === n._hoverState
              ? (n._hoverState = "show")
              : (clearTimeout(n._timeout),
                (n._hoverState = "show"),
                n.config.delay && n.config.delay.show
                  ? (n._timeout = setTimeout(function () {
                      "show" === n._hoverState && n.show();
                    }, n.config.delay.show))
                  : n.show());
        }),
        (n._leave = function (t, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(i)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            e(t.currentTarget).data(i, n)),
            t &&
              (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
                !1),
            n._isWithActiveTrigger() ||
              (clearTimeout(n._timeout),
              (n._hoverState = "out"),
              n.config.delay && n.config.delay.hide
                ? (n._timeout = setTimeout(function () {
                    "out" === n._hoverState && n.hide();
                  }, n.config.delay.hide))
                : n.hide());
        }),
        (n._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (n._getConfig = function (t) {
          var n = e(this.element).data();
          return (
            Object.keys(n).forEach(function (t) {
              -1 !== Kt.indexOf(t) && delete n[t];
            }),
            "number" ==
              typeof (t = s(
                s(s({}, this.constructor.Default), n),
                "object" == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            l.typeCheckConfig(Yt, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = Vt(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (n._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (n._cleanTipClass = function () {
          var t = e(this.getTipElement()),
            n = t.attr("class").match(Xt);
          null !== n && n.length && t.removeClass(n.join(""));
        }),
        (n._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (n._fixTransition = function () {
          var t = this.getTipElement(),
            n = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (e(t).removeClass("fade"),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = n));
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.tooltip"),
              o = "object" == typeof n && n;
            if (
              (i || !/dispose|hide/.test(n)) &&
              (i || ((i = new t(this, o)), e(this).data("bs.tooltip", i)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return Jt;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Yt;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            },
          },
          {
            key: "Event",
            get: function () {
              return Zt;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Gt;
            },
          },
        ]),
        t
      );
    })();
  (e.fn[Yt] = te._jQueryInterface),
    (e.fn[Yt].Constructor = te),
    (e.fn[Yt].noConflict = function () {
      return (e.fn[Yt] = zt), te._jQueryInterface;
    });
  var ee = "popover",
    ne = e.fn[ee],
    ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    oe = s(
      s({}, te.Default),
      {},
      {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }
    ),
    re = s(s({}, te.DefaultType), {}, { content: "(string|element|function)" }),
    se = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    ae = (function (t) {
      var n, o;
      function r() {
        return t.apply(this, arguments) || this;
      }
      (o = t),
        ((n = r).prototype = Object.create(o.prototype)),
        (n.prototype.constructor = n),
        (n.__proto__ = o);
      var s = r.prototype;
      return (
        (s.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (s.addAttachmentClass = function (t) {
          e(this.getTipElement()).addClass("bs-popover-" + t);
        }),
        (s.getTipElement = function () {
          return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
        }),
        (s.setContent = function () {
          var t = e(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var n = this._getContent();
          "function" == typeof n && (n = n.call(this.element)),
            this.setElementContent(t.find(".popover-body"), n),
            t.removeClass("fade show");
        }),
        (s._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (s._cleanTipClass = function () {
          var t = e(this.getTipElement()),
            n = t.attr("class").match(ie);
          null !== n && n.length > 0 && t.removeClass(n.join(""));
        }),
        (r._jQueryInterface = function (t) {
          return this.each(function () {
            var n = e(this).data("bs.popover"),
              i = "object" == typeof t ? t : null;
            if (
              (n || !/dispose|hide/.test(t)) &&
              (n || ((n = new r(this, i)), e(this).data("bs.popover", n)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t]();
            }
          });
        }),
        i(r, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return oe;
            },
          },
          {
            key: "NAME",
            get: function () {
              return ee;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover";
            },
          },
          {
            key: "Event",
            get: function () {
              return se;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return re;
            },
          },
        ]),
        r
      );
    })(te);
  (e.fn[ee] = ae._jQueryInterface),
    (e.fn[ee].Constructor = ae),
    (e.fn[ee].noConflict = function () {
      return (e.fn[ee] = ne), ae._jQueryInterface;
    });
  var le = "scrollspy",
    ce = e.fn[le],
    ue = { offset: 10, method: "auto", target: "" },
    he = { offset: "number", method: "string", target: "(string|element)" },
    fe = (function () {
      function t(t, n) {
        var i = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(n)),
          (this._selector =
            this._config.target +
            " .nav-link," +
            this._config.target +
            " .list-group-item," +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          e(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
            return i._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var n = t.prototype;
      return (
        (n.refresh = function () {
          var t = this,
            n =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position",
            i = "auto" === this._config.method ? n : this._config.method,
            o = "position" === i ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var n,
                  r = l.getSelectorFromElement(t);
                if ((r && (n = document.querySelector(r)), n)) {
                  var s = n.getBoundingClientRect();
                  if (s.width || s.height) return [e(n)[i]().top + o, r];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.scrollspy"),
            e(this._scrollElement).off(".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (n._getConfig = function (t) {
          if (
            "string" !=
              typeof (t = s(s({}, ue), "object" == typeof t && t ? t : {}))
                .target &&
            l.isElement(t.target)
          ) {
            var n = e(t.target).attr("id");
            n || ((n = l.getUID(le)), e(t.target).attr("id", n)),
              (t.target = "#" + n);
          }
          return l.typeCheckConfig(le, t, he), t;
        }),
        (n._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (n._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (n._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (n._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (n._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var n = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            i = e([].slice.call(document.querySelectorAll(n.join(","))));
          i.hasClass("dropdown-item")
            ? (i
                .closest(".dropdown")
                .find(".dropdown-toggle")
                .addClass("active"),
              i.addClass("active"))
            : (i.addClass("active"),
              i
                .parents(".nav, .list-group")
                .prev(".nav-link, .list-group-item")
                .addClass("active"),
              i
                .parents(".nav, .list-group")
                .prev(".nav-item")
                .children(".nav-link")
                .addClass("active")),
            e(this._scrollElement).trigger("activate.bs.scrollspy", {
              relatedTarget: t,
            });
        }),
        (n._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains("active");
            })
            .forEach(function (t) {
              return t.classList.remove("active");
            });
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.scrollspy");
            if (
              (i ||
                ((i = new t(this, "object" == typeof n && n)),
                e(this).data("bs.scrollspy", i)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return ue;
            },
          },
        ]),
        t
      );
    })();
  e(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        n = t.length;
      n--;

    ) {
      var i = e(t[n]);
      fe._jQueryInterface.call(i, i.data());
    }
  }),
    (e.fn[le] = fe._jQueryInterface),
    (e.fn[le].Constructor = fe),
    (e.fn[le].noConflict = function () {
      return (e.fn[le] = ce), fe._jQueryInterface;
    });
  var de = e.fn.tab,
    pe = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                e(this._element).hasClass("active")) ||
              e(this._element).hasClass("disabled")
            )
          ) {
            var n,
              i,
              o = e(this._element).closest(".nav, .list-group")[0],
              r = l.getSelectorFromElement(this._element);
            if (o) {
              var s =
                "UL" === o.nodeName || "OL" === o.nodeName
                  ? "> li > .active"
                  : ".active";
              i = (i = e.makeArray(e(o).find(s)))[i.length - 1];
            }
            var a = e.Event("hide.bs.tab", { relatedTarget: this._element }),
              c = e.Event("show.bs.tab", { relatedTarget: i });
            if (
              (i && e(i).trigger(a),
              e(this._element).trigger(c),
              !c.isDefaultPrevented() && !a.isDefaultPrevented())
            ) {
              r && (n = document.querySelector(r)),
                this._activate(this._element, o);
              var u = function () {
                var n = e.Event("hidden.bs.tab", { relatedTarget: t._element }),
                  o = e.Event("shown.bs.tab", { relatedTarget: i });
                e(i).trigger(n), e(t._element).trigger(o);
              };
              n ? this._activate(n, n.parentNode, u) : u();
            }
          }
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.tab"), (this._element = null);
        }),
        (n._activate = function (t, n, i) {
          var o = this,
            r = (
              !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                ? e(n).children(".active")
                : e(n).find("> li > .active")
            )[0],
            s = i && r && e(r).hasClass("fade"),
            a = function () {
              return o._transitionComplete(t, r, i);
            };
          if (r && s) {
            var c = l.getTransitionDurationFromElement(r);
            e(r)
              .removeClass("show")
              .one(l.TRANSITION_END, a)
              .emulateTransitionEnd(c);
          } else a();
        }),
        (n._transitionComplete = function (t, n, i) {
          if (n) {
            e(n).removeClass("active");
            var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
            o && e(o).removeClass("active"),
              "tab" === n.getAttribute("role") &&
                n.setAttribute("aria-selected", !1);
          }
          if (
            (e(t).addClass("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            l.reflow(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))
          ) {
            var r = e(t).closest(".dropdown")[0];
            if (r) {
              var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
              e(s).addClass("active");
            }
            t.setAttribute("aria-expanded", !0);
          }
          i && i();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.tab");
            if (
              (o || ((o = new t(this)), i.data("bs.tab", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n]();
            }
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.tab.data-api",
    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    function (t) {
      t.preventDefault(), pe._jQueryInterface.call(e(this), "show");
    }
  ),
    (e.fn.tab = pe._jQueryInterface),
    (e.fn.tab.Constructor = pe),
    (e.fn.tab.noConflict = function () {
      return (e.fn.tab = de), pe._jQueryInterface;
    });
  var me = e.fn.toast,
    ge = { animation: "boolean", autohide: "boolean", delay: "number" },
    ve = { animation: !0, autohide: !0, delay: 500 },
    _e = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var t = this,
            n = e.Event("show.bs.toast");
          if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
            this._config.animation && this._element.classList.add("fade");
            var i = function () {
              t._element.classList.remove("showing"),
                t._element.classList.add("show"),
                e(t._element).trigger("shown.bs.toast"),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove("hide"),
              l.reflow(this._element),
              this._element.classList.add("showing"),
              this._config.animation)
            ) {
              var o = l.getTransitionDurationFromElement(this._element);
              e(this._element).one(l.TRANSITION_END, i).emulateTransitionEnd(o);
            } else i();
          }
        }),
        (n.hide = function () {
          if (this._element.classList.contains("show")) {
            var t = e.Event("hide.bs.toast");
            e(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (n.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains("show") &&
              this._element.classList.remove("show"),
            e(this._element).off("click.dismiss.bs.toast"),
            e.removeData(this._element, "bs.toast"),
            (this._element = null),
            (this._config = null);
        }),
        (n._getConfig = function (t) {
          return (
            (t = s(
              s(s({}, ve), e(this._element).data()),
              "object" == typeof t && t ? t : {}
            )),
            l.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
          );
        }),
        (n._setListeners = function () {
          var t = this;
          e(this._element).on(
            "click.dismiss.bs.toast",
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (n._close = function () {
          var t = this,
            n = function () {
              t._element.classList.add("hide"),
                e(t._element).trigger("hidden.bs.toast");
            };
          if (
            (this._element.classList.remove("show"), this._config.animation)
          ) {
            var i = l.getTransitionDurationFromElement(this._element);
            e(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(i);
          } else n();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.toast");
            if (
              (o ||
                ((o = new t(this, "object" == typeof n && n)),
                i.data("bs.toast", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n](this);
            }
          });
        }),
        i(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ge;
            },
          },
          {
            key: "Default",
            get: function () {
              return ve;
            },
          },
        ]),
        t
      );
    })();
  (e.fn.toast = _e._jQueryInterface),
    (e.fn.toast.Constructor = _e),
    (e.fn.toast.noConflict = function () {
      return (e.fn.toast = me), _e._jQueryInterface;
    }),
    (t.Alert = h),
    (t.Button = d),
    (t.Carousel = y),
    (t.Collapse = S),
    (t.Dropdown = Ft),
    (t.Modal = qt),
    (t.Popover = ae),
    (t.Scrollspy = fe),
    (t.Tab = pe),
    (t.Toast = _e),
    (t.Tooltip = te),
    (t.Util = l),
    Object.defineProperty(t, "__esModule", { value: !0 });
});

/*! lazysizes - v5.0.0-rc2 */
function _toConsumableArray(t) {
  return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(t) {
  if (
    Symbol.iterator in Object(t) ||
    "[object Arguments]" === Object.prototype.toString.call(t)
  )
    return Array.from(t);
}
function _arrayWithoutHoles(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n;
  }
}
function _extends() {
  return (_extends =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
      return t;
    }).apply(this, arguments);
}
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
!(function (t, e) {
  "object" ===
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.LazyLoad = e());
})(this, function () {
  "use strict";
  var t = "undefined" != typeof window,
    e =
      (t && !("onscroll" in window)) ||
      ("undefined" != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    n = t && "IntersectionObserver" in window,
    r = t && "classList" in document.createElement("p"),
    o = {
      elements_selector: "img",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_poster: "poster",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      load_delay: 0,
      auto_unobserve: !0,
      callback_enter: null,
      callback_exit: null,
      callback_reveal: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      use_native: !1,
    },
    a = function (t, e) {
      var n,
        r = new t(e);
      try {
        n = new CustomEvent("LazyLoad::Initialized", {
          detail: { instance: r },
        });
      } catch (t) {
        (n = document.createEvent("CustomEvent")).initCustomEvent(
          "LazyLoad::Initialized",
          !1,
          !1,
          { instance: r }
        );
      }
      window.dispatchEvent(n);
    };
  var i = function (t, e) {
      return t.getAttribute("data-" + e);
    },
    s = function (t, e, n) {
      var r = "data-" + e;
      null !== n ? t.setAttribute(r, n) : t.removeAttribute(r);
    },
    c = function (t) {
      return "true" === i(t, "was-processed");
    },
    l = function (t, e) {
      return s(t, "ll-timeout", e);
    },
    u = function (t) {
      return i(t, "ll-timeout");
    },
    d = function (t, e, n, r) {
      t && (void 0 === r ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, r));
    },
    f = function (t, e) {
      (t._loadingCount += e),
        0 === t._elements.length &&
          0 === t._loadingCount &&
          d(t._settings.callback_finish, t);
    },
    _ = function (t) {
      for (var e, n = [], r = 0; (e = t.children[r]); r += 1)
        "SOURCE" === e.tagName && n.push(e);
      return n;
    },
    v = function (t, e, n) {
      n && t.setAttribute(e, n);
    },
    b = function (t, e) {
      v(t, "sizes", i(t, e.data_sizes)),
        v(t, "srcset", i(t, e.data_srcset)),
        v(t, "src", i(t, e.data_src));
    },
    m = {
      IMG: function (t, e) {
        var n = t.parentNode;
        n &&
          "PICTURE" === n.tagName &&
          _(n).forEach(function (t) {
            b(t, e);
          });
        b(t, e);
      },
      IFRAME: function (t, e) {
        v(t, "src", i(t, e.data_src));
      },
      VIDEO: function (t, e) {
        _(t).forEach(function (t) {
          v(t, "src", i(t, e.data_src));
        }),
          v(t, "poster", i(t, e.data_poster)),
          v(t, "src", i(t, e.data_src)),
          t.load();
      },
    },
    p = function (t, e) {
      var n,
        r,
        o = e._settings,
        a = t.tagName,
        s = m[a];
      if (s)
        return (
          s(t, o),
          f(e, 1),
          void (e._elements =
            ((n = e._elements),
            (r = t),
            n.filter(function (t) {
              return t !== r;
            })))
        );
      !(function (t, e) {
        var n = i(t, e.data_src),
          r = i(t, e.data_bg);
        n && (t.style.backgroundImage = 'url("'.concat(n, '")')),
          r && (t.style.backgroundImage = r);
      })(t, o);
    },
    g = function (t, e) {
      r ? t.classList.add(e) : (t.className += (t.className ? " " : "") + e);
    },
    y = function (t, e) {
      r
        ? t.classList.remove(e)
        : (t.className = t.className
            .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, ""));
    },
    h = function (t, e, n) {
      t.addEventListener(e, n);
    },
    E = function (t, e, n) {
      t.removeEventListener(e, n);
    },
    w = function (t, e, n) {
      E(t, "load", e), E(t, "loadeddata", e), E(t, "error", n);
    },
    A = function (t, e, n) {
      var r = n._settings,
        o = e ? r.class_loaded : r.class_error,
        a = e ? r.callback_loaded : r.callback_error,
        i = t.target;
      y(i, r.class_loading), g(i, o), d(a, i, n), f(n, -1);
    },
    I = function (t, e) {
      var n = function n(o) {
          A(o, !0, e), w(t, n, r);
        },
        r = function r(o) {
          A(o, !1, e), w(t, n, r);
        };
      !(function (t, e, n) {
        h(t, "load", e), h(t, "loadeddata", e), h(t, "error", n);
      })(t, n, r);
    },
    k = ["IMG", "IFRAME", "VIDEO"],
    L = function (t, e) {
      var n = e._observer;
      S(t, e), n && e._settings.auto_unobserve && n.unobserve(t);
    },
    O = function (t) {
      var e = u(t);
      e && (clearTimeout(e), l(t, null));
    },
    x = function (t, e) {
      var n = e._settings.load_delay,
        r = u(t);
      r ||
        ((r = setTimeout(function () {
          L(t, e), O(t);
        }, n)),
        l(t, r));
    },
    S = function (t, e, n) {
      var r = e._settings;
      (!n && c(t)) ||
        (k.indexOf(t.tagName) > -1 && (I(t, e), g(t, r.class_loading)),
        p(t, e),
        (function (t) {
          s(t, "was-processed", "true");
        })(t),
        d(r.callback_reveal, t, e),
        d(r.callback_set, t, e));
    },
    z = function (t) {
      return (
        !!n &&
        ((t._observer = new IntersectionObserver(
          function (e) {
            e.forEach(function (e) {
              return (function (t) {
                return t.isIntersecting || t.intersectionRatio > 0;
              })(e)
                ? (function (t, e, n) {
                    var r = n._settings;
                    d(r.callback_enter, t, e, n),
                      r.load_delay ? x(t, n) : L(t, n);
                  })(e.target, e, t)
                : (function (t, e, n) {
                    var r = n._settings;
                    d(r.callback_exit, t, e, n), r.load_delay && O(t);
                  })(e.target, e, t);
            });
          },
          {
            root: (e = t._settings).container === document ? null : e.container,
            rootMargin: e.thresholds || e.threshold + "px",
          }
        )),
        !0)
      );
      var e;
    },
    C = ["IMG", "IFRAME"],
    N = function (t, e) {
      return (function (t) {
        return t.filter(function (t) {
          return !c(t);
        });
      })(
        ((n =
          t ||
          (function (t) {
            return t.container.querySelectorAll(t.elements_selector);
          })(e)),
        Array.prototype.slice.call(n))
      );
      var n;
    },
    M = function (t) {
      var e = t._settings;
      _toConsumableArray(
        e.container.querySelectorAll("." + e.class_error)
      ).forEach(function (t) {
        y(t, e.class_error),
          (function (t) {
            s(t, "was-processed", null);
          })(t);
      }),
        t.update();
    },
    R = function (e, n) {
      var r;
      (this._settings = (function (t) {
        return _extends({}, o, t);
      })(e)),
        (this._loadingCount = 0),
        z(this),
        this.update(n),
        (r = this),
        t &&
          window.addEventListener("online", function (t) {
            M(r);
          });
    };
  return (
    (R.prototype = {
      update: function (t) {
        var n,
          r = this,
          o = this._settings;
        ((this._elements = N(t, o)), !e && this._observer)
          ? ((function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            })(o) &&
              ((n = this)._elements.forEach(function (t) {
                -1 !== C.indexOf(t.tagName) &&
                  (t.setAttribute("loading", "lazy"), S(t, n));
              }),
              (this._elements = N(t, o))),
            this._elements.forEach(function (t) {
              r._observer.observe(t);
            }))
          : this.loadAll();
      },
      destroy: function () {
        var t = this;
        this._observer &&
          (this._elements.forEach(function (e) {
            t._observer.unobserve(e);
          }),
          (this._observer = null)),
          (this._elements = null),
          (this._settings = null);
      },
      load: function (t, e) {
        S(t, this, e);
      },
      loadAll: function () {
        var t = this;
        this._elements.forEach(function (e) {
          L(e, t);
        });
      },
    }),
    t &&
      (function (t, e) {
        if (e)
          if (e.length) for (var n, r = 0; (n = e[r]); r += 1) a(t, n);
          else a(t, e);
      })(R, window.lazyLoadOptions),
    R
  );
});

/*Jquery Easing*/
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], function ($) {
      return factory($);
    });
  } else if (typeof module === "object" && typeof module.exports === "object") {
    exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  $.easing.jswing = $.easing.swing;
  var pow = Math.pow,
    sqrt = Math.sqrt,
    sin = Math.sin,
    cos = Math.cos,
    PI = Math.PI,
    c1 = 1.70158,
    c2 = c1 * 1.525,
    c3 = c1 + 1,
    c4 = (2 * PI) / 3,
    c5 = (2 * PI) / 4.5;
  function bounceOut(x) {
    var n1 = 7.5625,
      d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }
  $.extend($.easing, {
    def: "easeOutQuad",
    swing: function (x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function (x) {
      return x * x;
    },
    easeOutQuad: function (x) {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function (x) {
      return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function (x) {
      return x * x * x;
    },
    easeOutCubic: function (x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function (x) {
      return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function (x) {
      return x * x * x * x;
    },
    easeOutQuart: function (x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function (x) {
      return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function (x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function (x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function (x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function (x) {
      return 1 - cos((x * PI) / 2);
    },
    easeOutSine: function (x) {
      return sin((x * PI) / 2);
    },
    easeInOutSine: function (x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function (x) {
      return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function (x) {
      return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5
        ? pow(2, 20 * x - 10) / 2
        : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function (x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function (x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function (x) {
      return x < 0.5
        ? (1 - sqrt(1 - pow(2 * x, 2))) / 2
        : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5
        ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
        : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
    },
    easeInBack: function (x) {
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function (x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function (x) {
      return x < 0.5
        ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function (x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function (x) {
      return x < 0.5
        ? (1 - bounceOut(1 - 2 * x)) / 2
        : (1 + bounceOut(2 * x - 1)) / 2;
    },
  });
});

/*Sticky js*/
!(function (t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "" == typeof module && module.exports
    ? (module.exports = t(require("jquery")))
    : t(jQuery);
})(function (t) {
  var e = Array.prototype.slice,
    i = Array.prototype.splice,
    n = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: "is",
      wrapperClassName: "sticky",
      center: !1,
      getWidthFrom: "",
      widthFromWrapper: !0,
      responsiveWidth: !0,
      zIndex: "",
    },
    r = t(window),
    s = t(document),
    o = [],
    c = r.height(),
    p = function () {
      for (
        var e = r.scrollTop(),
          i = s.height(),
          n = i - c,
          p = e > n ? n - e : 0,
          a = 0,
          d = o.length;
        a < d;
        a++
      ) {
        var l = o[a],
          h = l.stickyWrapper.offset().top - l.topSpacing - p;
        if (
          (l.stickyWrapper.css("", l.stickyElement.outerHeight()), e <= h)
        )
          null !== l.currentTop &&
            (l.stickyElement.css({
              width: "",
              position: "",
              top: "",
              "": "",
            }),
            l.stickyElement.parent().removeClass(l.className),
            l.stickyElement.trigger("end", [l]),
            (l.currentTop = null));
        else {
          var u,
            g =
              i -
              l.stickyElement.outerHeight() -
              l.topSpacing -
              l.bottomSpacing -
              e -
              p;
          if (
            (g < 0 ? (g += l.topSpacing) : (g = l.topSpacing),
            l.currentTop !== g)
          )
            l.getWidthFrom
              ? ((padding =
                  l.stickyElement.innerWidth() - l.stickyElement.width()),
                (u = t(l.getWidthFrom).width() - padding || null))
              : l.widthFromWrapper && (u = l.stickyWrapper.width()),
              l.stickyElement.parent().addClass(l.className),
              
              (l.currentTop = g);
          var m = l.stickyWrapper.parent();
          l.stickyElement.offset().top + l.stickyElement.outerHeight() >=
            m.offset().top + m.outerHeight() &&
          l.stickyElement.offset().top <= l.topSpacing
            ? l.stickyElement
                .css("", "")
                .css("", "")
                .css("", 0)
                .css("", "")
            : l.stickyElement
                .css("", "")
                .css("", g)
                .css("", "")
                .css("", l.zIndex);
        }
      }
    },
    a = function () {
      c = r.height();
      for (var e = 0, i = o.length; e < i; e++) {
        var n = o[e],
          s = null;
        n.getWidthFrom
          ? n.responsiveWidth && (s = t(n.getWidthFrom).width())
          : n.widthFromWrapper && (s = n.stickyWrapper.width()),
          null != s && n.stickyElement.css("width", s);
      }
    },
    
    d = {
      init: function (e) {
        return this.each(function () {
          var i = t.extend({}, n, e),
            r = t(this),
            s = r.attr("id"),
            c = s ? s + "-" + n.wrapperClassName : n.wrapperClassName,
            p = t("").attr("id", c).addClass(i.wrapperClassName);
          r.wrapAll(function () {
            if (0 == t(this).parent("#" + c).length) return p;
          });
          var a = r.parent();
          i.center &&
            a.css({
              width: r.outerWidth(),
              marginLeft: "auto",
              marginRight: "auto",
            }),
            "right" === r.css("float") &&
              r.css({ float: "none" }).parent().css({ float: "right" }),
            (i.stickyElement = r),
            (i.stickyWrapper = a),
            (i.currentTop = null),
            o.push(i),
            d.setWrapperHeight(this),
            d.setupChangeListeners(this);
        });
      },
      setWrapperHeight: function (e) {
        var i = t(e),
          n = i.parent();
        n && n.css("height", i.outerHeight());
      },
      setupChangeListeners: function (t) {
        window.MutationObserver
          ? new window.MutationObserver(function (e) {
              (e[0].addedNodes.length || e[0].removedNodes.length) &&
                d.setWrapperHeight(t);
            }).observe(t, { subtree: !0, childList: !0 })
          : window.addEventListener
          ? (t.addEventListener(
              "DOMNodeInserted",
              function () {
                d.setWrapperHeight(t);
              },
              !1
            ),
            t.addEventListener(
              "DOMNodeRemoved",
              function () {
                d.setWrapperHeight(t);
              },
              !1
            ))
          : window.attachEvent &&
            (t.attachEvent("onDOMNodeInserted", function () {
              d.setWrapperHeight(t);
            }),
            t.attachEvent("onDOMNodeRemoved", function () {
              d.setWrapperHeight(t);
            }));
      },
      update: p,
      unstick: function (e) {
        return this.each(function () {
          for (var e = t(this), n = -1, r = o.length; r-- > 0; )
            o[r].stickyElement.get(0) === this && (i.call(o, r, 1), (n = r));
          -1 !== n &&
            (e.unwrap(),
            e.css({
              width: "",
              position: "",
              top: "",
              float: "",
              "z-index": "",
            }));
        });
      },
    };
  window.addEventListener
    ? (window.addEventListener("scroll", p, !1),
      window.addEventListener("resize", a, !1))
    : window.attachEvent &&
      (window.attachEvent("onscroll", p), window.attachEvent("onresize", a)),
    (t.fn.sticky = function (i) {
      return d[i]
        ? d[i].apply(this, e.call(arguments, 1))
        : "object" != typeof i && i
        ? void t.error("Method " + i + " does not exist on jQuery.sticky")
        : d.init.apply(this, arguments);
    }),
    (t.fn.unstick = function (i) {
      return d[i]
        ? d[i].apply(this, e.call(arguments, 1))
        : "object" != typeof i && i
        ? void t.error("Method " + i + " does not exist on jQuery.sticky")
        : d.unstick.apply(this, arguments);
    }),
    t(function () {
      setTimeout(p, 0);
    });
});

/*Scrolling nav*/
!(function (e) {
  "use strict";
  e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var t = e(this.hash);
      if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length)
        return (
          e("html, body").animate(
            { scrollTop: t.offset().top - 56 },
            1e3,
            "easeInOutExpo"
          ),
          !1
        );
    }
  }),
    e(".js-scroll-trigger").click(function () {
      e(".navbar-collapse").collapse("hide");
    }),
    e("body").scrollspy({ target: "#mainNav", offset: 56 });
})(jQuery);
/* Swiper 5.4.0 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).Swiper = t());
})(this, function () {
  
  "use strict";
  function e(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function t(i, s) {
    void 0 === i && (i = {}),
      void 0 === s && (s = {}),
      Object.keys(s).forEach(function (a) {
        void 0 === i[a]
          ? (i[a] = s[a])
          : e(s[a]) && e(i[a]) && Object.keys(s[a]).length > 0 && t(i[a], s[a]);
      });
  }
  var i = "undefined" != typeof document ? document : {},
    s = {
      body: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: { blur: function () {}, nodeName: "" },
      querySelector: function () {
        return null;
      },
      querySelectorAll: function () {
        return [];
      },
      getElementById: function () {
        return null;
      },
      createEvent: function () {
        return { initEvent: function () {} };
      },
      createElement: function () {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return [];
          },
        };
      },
      createElementNS: function () {
        return {};
      },
      importNode: function () {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
  t(i, s);
  var a = "undefined" != typeof window ? window : {};
  t(a, {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {},
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return "";
        },
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
  });
  var r = function (e) {
    for (var t = 0; t < e.length; t += 1) this[t] = e[t];
    return (this.length = e.length), this;
  };
  function n(e, t) {
    var s = [],
      n = 0;
    if (e && !t && e instanceof r) return e;
    if (e)
      if ("string" == typeof e) {
        var o,
          l,
          d = e.trim();
        if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
          var h = "div";
          for (
            0 === d.indexOf("<li") && (h = "ul"),
              0 === d.indexOf("<tr") && (h = "tbody"),
              (0 !== d.indexOf("<td") && 0 !== d.indexOf("<th")) || (h = "tr"),
              0 === d.indexOf("<tbody") && (h = "table"),
              0 === d.indexOf("<option") && (h = "select"),
              (l = i.createElement(h)).innerHTML = d,
              n = 0;
            n < l.childNodes.length;
            n += 1
          )
            s.push(l.childNodes[n]);
        } else
          for (
            o =
              t || "#" !== e[0] || e.match(/[ .<>:~]/)
                ? (t || i).querySelectorAll(e.trim())
                : [i.getElementById(e.trim().split("#")[1])],
              n = 0;
            n < o.length;
            n += 1
          )
            o[n] && s.push(o[n]);
      } else if (e.nodeType || e === a || e === i) s.push(e);
      else if (e.length > 0 && e[0].nodeType)
        for (n = 0; n < e.length; n += 1) s.push(e[n]);
    return new r(s);
  }
  function o(e) {
    for (var t = [], i = 0; i < e.length; i += 1)
      -1 === t.indexOf(e[i]) && t.push(e[i]);
    return t;
  }
  (n.fn = r.prototype), (n.Class = r), (n.Dom7 = r);
  var l = {
    addClass: function (e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1)
          void 0 !== this[s] &&
            void 0 !== this[s].classList &&
            this[s].classList.add(t[i]);
      return this;
    },
    removeClass: function (e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1)
          void 0 !== this[s] &&
            void 0 !== this[s].classList &&
            this[s].classList.remove(t[i]);
      return this;
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function (e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1)
          void 0 !== this[s] &&
            void 0 !== this[s].classList &&
            this[s].classList.toggle(t[i]);
      return this;
    },
    attr: function (e, t) {
      var i = arguments;
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (var s = 0; s < this.length; s += 1)
        if (2 === i.length) this[s].setAttribute(e, t);
        else
          for (var a in e) (this[s][a] = e[a]), this[s].setAttribute(a, e[a]);
      return this;
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    data: function (e, t) {
      var i;
      if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1)
          (i = this[s]).dom7ElementDataStorage ||
            (i.dom7ElementDataStorage = {}),
            (i.dom7ElementDataStorage[e] = t);
        return this;
      }
      if ((i = this[0])) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
          return i.dom7ElementDataStorage[e];
        var a = i.getAttribute("data-" + e);
        return a || void 0;
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        (i.webkitTransform = e), (i.transform = e);
      }
      return this;
    },
    transition: function (e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        (i.webkitTransitionDuration = e), (i.transitionDuration = e);
      }
      return this;
    },
    on: function () {
      for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
      var s = t[0],
        a = t[1],
        r = t[2],
        o = t[3];
      function l(e) {
        var t = e.target;
        if (t) {
          var i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), n(t).is(a))) r.apply(t, i);
          else
            for (var s = n(t).parents(), o = 0; o < s.length; o += 1)
              n(s[o]).is(a) && r.apply(s[o], i);
        }
      }
      function d(e) {
        var t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }
      "function" == typeof t[1] &&
        ((s = (e = t)[0]), (r = e[1]), (o = e[2]), (a = void 0)),
        o || (o = !1);
      for (var h, p = s.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (a)
          for (h = 0; h < p.length; h += 1) {
            var v = p[h];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}),
              u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []),
              u.dom7LiveListeners[v].push({ listener: r, proxyListener: l }),
              u.addEventListener(v, l, o);
          }
        else
          for (h = 0; h < p.length; h += 1) {
            var f = p[h];
            u.dom7Listeners || (u.dom7Listeners = {}),
              u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
              u.dom7Listeners[f].push({ listener: r, proxyListener: d }),
              u.addEventListener(f, d, o);
          }
      }
      return this;
    },
    off: function () {
      for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
      var s = t[0],
        a = t[1],
        r = t[2],
        n = t[3];
      "function" == typeof t[1] &&
        ((s = (e = t)[0]), (r = e[1]), (n = e[2]), (a = void 0)),
        n || (n = !1);
      for (var o = s.split(" "), l = 0; l < o.length; l += 1)
        for (var d = o[l], h = 0; h < this.length; h += 1) {
          var p = this[h],
            c = void 0;
          if (
            (!a && p.dom7Listeners
              ? (c = p.dom7Listeners[d])
              : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]),
            c && c.length)
          )
            for (var u = c.length - 1; u >= 0; u -= 1) {
              var v = c[u];
              (r && v.listener === r) ||
              (r &&
                v.listener &&
                v.listener.dom7proxy &&
                v.listener.dom7proxy === r)
                ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                : r ||
                  (p.removeEventListener(d, v.proxyListener, n),
                  c.splice(u, 1));
            }
        }
      return this;
    },
    trigger: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      for (var s = e[0].split(" "), r = e[1], n = 0; n < s.length; n += 1)
        for (var o = s[n], l = 0; l < this.length; l += 1) {
          var d = this[l],
            h = void 0;
          try {
            h = new a.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0,
            });
          } catch (e) {
            (h = i.createEvent("Event")).initEvent(o, !0, !0), (h.detail = r);
          }
          (d.dom7EventData = e.filter(function (e, t) {
            return t > 0;
          })),
            d.dispatchEvent(h),
            (d.dom7EventData = []),
            delete d.dom7EventData;
        }
      return this;
    },
    transitionEnd: function (e) {
      var t,
        i = ["webkitTransitionEnd", "transitionend"],
        s = this;
      function a(r) {
        if (r.target === this)
          for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a);
      }
      if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
      return this;
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue("margin-right")) +
            parseFloat(t.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue("margin-top")) +
            parseFloat(t.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function () {
      if (this.length > 0) {
        var e = this[0],
          t = e.getBoundingClientRect(),
          s = i.body,
          r = e.clientTop || s.clientTop || 0,
          n = e.clientLeft || s.clientLeft || 0,
          o = e === a ? a.scrollY : e.scrollTop,
          l = e === a ? a.scrollX : e.scrollLeft;
        return { top: t.top + o - r, left: t.left + l - n };
      }
      return null;
    },
    css: function (e, t) {
      var i;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1)
            for (var s in e) this[i].style[s] = e[s];
          return this;
        }
        if (this[0])
          return a.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1)
        if (!1 === e.call(this[t], t, this[t])) return this;
      return this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      var t,
        s,
        o = this[0];
      if (!o || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (o.matches) return o.matches(e);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(e);
        if (o.msMatchesSelector) return o.msMatchesSelector(e);
        for (t = n(e), s = 0; s < t.length; s += 1) if (t[s] === o) return !0;
        return !1;
      }
      if (e === i) return o === i;
      if (e === a) return o === a;
      if (e.nodeType || e instanceof r) {
        for (t = e.nodeType ? [e] : e, s = 0; s < t.length; s += 1)
          if (t[s] === o) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t,
        i = this.length;
      return new r(
        e > i - 1 ? [] : e < 0 ? ((t = i + e) < 0 ? [] : [this[t]]) : [this[e]]
      );
    },
    append: function () {
      for (var e, t = [], s = arguments.length; s--; ) t[s] = arguments[s];
      for (var a = 0; a < t.length; a += 1) {
        e = t[a];
        for (var n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            var o = i.createElement("div");
            for (o.innerHTML = e; o.firstChild; )
              this[n].appendChild(o.firstChild);
          } else if (e instanceof r)
            for (var l = 0; l < e.length; l += 1) this[n].appendChild(e[l]);
          else this[n].appendChild(e);
      }
      return this;
    },
    prepend: function (e) {
      var t, s;
      for (t = 0; t < this.length; t += 1)
        if ("string" == typeof e) {
          var a = i.createElement("div");
          for (a.innerHTML = e, s = a.childNodes.length - 1; s >= 0; s -= 1)
            this[t].insertBefore(a.childNodes[s], this[t].childNodes[0]);
        } else if (e instanceof r)
          for (s = 0; s < e.length; s += 1)
            this[t].insertBefore(e[s], this[t].childNodes[0]);
        else this[t].insertBefore(e, this[t].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e)
            ? new r([this[0].nextElementSibling])
            : new r([])
          : this[0].nextElementSibling
          ? new r([this[0].nextElementSibling])
          : new r([])
        : new r([]);
    },
    nextAll: function (e) {
      var t = [],
        i = this[0];
      if (!i) return new r([]);
      for (; i.nextElementSibling; ) {
        var s = i.nextElementSibling;
        e ? n(s).is(e) && t.push(s) : t.push(s), (i = s);
      }
      return new r(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        var t = this[0];
        return e
          ? t.previousElementSibling && n(t.previousElementSibling).is(e)
            ? new r([t.previousElementSibling])
            : new r([])
          : t.previousElementSibling
          ? new r([t.previousElementSibling])
          : new r([]);
      }
      return new r([]);
    },
    prevAll: function (e) {
      var t = [],
        i = this[0];
      if (!i) return new r([]);
      for (; i.previousElementSibling; ) {
        var s = i.previousElementSibling;
        e ? n(s).is(e) && t.push(s) : t.push(s), (i = s);
      }
      return new r(t);
    },
    parent: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1)
        null !== this[i].parentNode &&
          (e
            ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode)
            : t.push(this[i].parentNode));
      return n(o(t));
    },
    parents: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1)
        for (var s = this[i].parentNode; s; )
          e ? n(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
      return n(o(t));
    },
    closest: function (e) {
      var t = this;
      return void 0 === e
        ? new r([])
        : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1)
        for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1)
          t.push(s[a]);
      return new r(t);
    },
    children: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1)
        for (var s = this[i].childNodes, a = 0; a < s.length; a += 1)
          e
            ? 1 === s[a].nodeType && n(s[a]).is(e) && t.push(s[a])
            : 1 === s[a].nodeType && t.push(s[a]);
      return new r(o(t));
    },
    filter: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1)
        e.call(this[i], i, this[i]) && t.push(this[i]);
      return new r(t);
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
    add: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var i,
        s,
        a = this;
      for (i = 0; i < e.length; i += 1) {
        var r = n(e[i]);
        for (s = 0; s < r.length; s += 1) (a[a.length] = r[s]), (a.length += 1);
      }
      return a;
    },
    styles: function () {
      return this[0] ? a.getComputedStyle(this[0], null) : {};
    },
  };
  Object.keys(l).forEach(function (e) {
    n.fn[e] = n.fn[e] || l[e];
  });
  var d = {
      deleteProps: function (e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function (e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      },
      now: function () {
        return Date.now();
      },
      getTranslate: function (e, t) {
        var i, s, r;
        void 0 === t && (t = "x");
        var n = a.getComputedStyle(e, null);
        return (
          a.WebKitCSSMatrix
            ? ((s = n.transform || n.webkitTransform).split(",").length > 6 &&
                (s = s
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (r = new a.WebKitCSSMatrix("none" === s ? "" : s)))
            : (i = (r =
                n.MozTransform ||
                n.OTransform ||
                n.MsTransform ||
                n.msTransform ||
                n.transform ||
                n
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (s = a.WebKitCSSMatrix
              ? r.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (s = a.WebKitCSSMatrix
              ? r.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          s || 0
        );
      },
      parseUrlQuery: function (e) {
        var t,
          i,
          s,
          r,
          n = {},
          o = e || a.location.href;
        if ("string" == typeof o && o.length)
          for (
            r = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "")
              .split("&")
              .filter(function (e) {
                return "" !== e;
              })).length,
              t = 0;
            t < r;
            t += 1
          )
            (s = i[t].replace(/#\S+/g, "").split("=")),
              (n[decodeURIComponent(s[0])] =
                void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "");
        return n;
      },
      isObject: function (e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object
        );
      },
      extend: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
          var a = e[s];
          if (null != a)
            for (
              var r = Object.keys(Object(a)), n = 0, o = r.length;
              n < o;
              n += 1
            ) {
              var l = r[n],
                h = Object.getOwnPropertyDescriptor(a, l);
              void 0 !== h &&
                h.enumerable &&
                (d.isObject(i[l]) && d.isObject(a[l])
                  ? d.extend(i[l], a[l])
                  : !d.isObject(i[l]) && d.isObject(a[l])
                  ? ((i[l] = {}), d.extend(i[l], a[l]))
                  : (i[l] = a[l]));
            }
        }
        return i;
      },
    },
    h = {
      touch: !!(
        "ontouchstart" in a ||
        (a.DocumentTouch && i instanceof a.DocumentTouch)
      ),
      pointerEvents:
        !!a.PointerEvent &&
        "maxTouchPoints" in a.navigator &&
        a.navigator.maxTouchPoints >= 0,
      observer: "MutationObserver" in a || "WebkitMutationObserver" in a,
      passiveListener: (function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0;
            },
          });
          a.addEventListener("testPassiveListener", null, t);
        } catch (e) {}
        return e;
      })(),
      gestures: "ongesturestart" in a,
    },
    p = function (e) {
      void 0 === e && (e = {});
      var t = this;
      (t.params = e),
        (t.eventsListeners = {}),
        t.params &&
          t.params.on &&
          Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e]);
          });
    },
    c = { components: { configurable: !0 } };
  (p.prototype.on = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    var a = i ? "unshift" : "push";
    return (
      e.split(" ").forEach(function (e) {
        s.eventsListeners[e] || (s.eventsListeners[e] = []),
          s.eventsListeners[e][a](t);
      }),
      s
    );
  }),
    (p.prototype.once = function (e, t, i) {
      var s = this;
      if ("function" != typeof t) return s;
      function a() {
        for (var i = [], r = arguments.length; r--; ) i[r] = arguments[r];
        s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i);
      }
      return (a.f7proxy = t), s.on(e, a, i);
    }),
    (p.prototype.off = function (e, t) {
      var i = this;
      return i.eventsListeners
        ? (e.split(" ").forEach(function (e) {
            void 0 === t
              ? (i.eventsListeners[e] = [])
              : i.eventsListeners[e] &&
                i.eventsListeners[e].length &&
                i.eventsListeners[e].forEach(function (s, a) {
                  (s === t || (s.f7proxy && s.f7proxy === t)) &&
                    i.eventsListeners[e].splice(a, 1);
                });
          }),
          i)
        : i;
    }),
    (p.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var i,
        s,
        a,
        r = this;
      if (!r.eventsListeners) return r;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((i = e[0]), (s = e.slice(1, e.length)), (a = r))
        : ((i = e[0].events), (s = e[0].data), (a = e[0].context || r));
      var n = Array.isArray(i) ? i : i.split(" ");
      return (
        n.forEach(function (e) {
          if (r.eventsListeners && r.eventsListeners[e]) {
            var t = [];
            r.eventsListeners[e].forEach(function (e) {
              t.push(e);
            }),
              t.forEach(function (e) {
                e.apply(a, s);
              });
          }
        }),
        r
      );
    }),
    (p.prototype.useModulesParams = function (e) {
      var t = this;
      t.modules &&
        Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i];
          s.params && d.extend(e, s.params);
        });
    }),
    (p.prototype.useModules = function (e) {
      void 0 === e && (e = {});
      var t = this;
      t.modules &&
        Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i],
            a = e[i] || {};
          s.instance &&
            Object.keys(s.instance).forEach(function (e) {
              var i = s.instance[e];
              t[e] = "function" == typeof i ? i.bind(t) : i;
            }),
            s.on &&
              t.on &&
              Object.keys(s.on).forEach(function (e) {
                t.on(e, s.on[e]);
              }),
            s.create && s.create.bind(t)(a);
        });
    }),
    (c.components.set = function (e) {
      this.use && this.use(e);
    }),
    (p.installModule = function (e) {
      for (var t = [], i = arguments.length - 1; i-- > 0; )
        t[i] = arguments[i + 1];
      var s = this;
      s.prototype.modules || (s.prototype.modules = {});
      var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
      return (
        (s.prototype.modules[a] = e),
        e.proto &&
          Object.keys(e.proto).forEach(function (t) {
            s.prototype[t] = e.proto[t];
          }),
        e.static &&
          Object.keys(e.static).forEach(function (t) {
            s[t] = e.static[t];
          }),
        e.install && e.install.apply(s, t),
        s
      );
    }),
    (p.use = function (e) {
      for (var t = [], i = arguments.length - 1; i-- > 0; )
        t[i] = arguments[i + 1];
      var s = this;
      return Array.isArray(e)
        ? (e.forEach(function (e) {
            return s.installModule(e);
          }),
          s)
        : s.installModule.apply(s, [e].concat(t));
    }),
    Object.defineProperties(p, c);
  var u = {
    updateSize: function () {
      var e,
        t,
        i = this.$el;
      (e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth),
        (t =
          void 0 !== this.params.height
            ? this.params.height
            : i[0].clientHeight),
        (0 === e && this.isHorizontal()) ||
          (0 === t && this.isVertical()) ||
          ((e =
            e -
            parseInt(i.css("padding-left"), 10) -
            parseInt(i.css("padding-right"), 10)),
          (t =
            t -
            parseInt(i.css("padding-top"), 10) -
            parseInt(i.css("padding-bottom"), 10)),
          d.extend(this, {
            width: e,
            height: t,
            size: this.isHorizontal() ? e : t,
          }));
    },
    updateSlides: function () {
      var e = this.params,
        t = this.$wrapperEl,
        i = this.size,
        s = this.rtlTranslate,
        r = this.wrongRTL,
        n = this.virtual && e.virtual.enabled,
        o = n ? this.virtual.slides.length : this.slides.length,
        l = t.children("." + this.params.slideClass),
        h = n ? this.virtual.slides.length : l.length,
        p = [],
        c = [],
        u = [];
      function v(t) {
        return !e.cssMode || t !== l.length - 1;
      }
      var f = e.slidesOffsetBefore;
      "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
      var m = e.slidesOffsetAfter;
      "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
      var g = this.snapGrid.length,
        b = this.snapGrid.length,
        w = e.spaceBetween,
        y = -f,
        x = 0,
        E = 0;
      if (void 0 !== i) {
        var T, S;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * i),
          (this.virtualSize = -w),
          s
            ? l.css({ marginLeft: "", marginTop: "" })
            : l.css({ marginRight: "", marginBottom: "" }),
          e.slidesPerColumn > 1 &&
            ((T =
              Math.floor(h / e.slidesPerColumn) ===
              h / this.params.slidesPerColumn
                ? h
                : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn),
            "auto" !== e.slidesPerView &&
              "row" === e.slidesPerColumnFill &&
              (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
        for (
          var C,
            M = e.slidesPerColumn,
            P = T / M,
            z = Math.floor(h / e.slidesPerColumn),
            k = 0;
          k < h;
          k += 1
        ) {
          S = 0;
          var $ = l.eq(k);
          if (e.slidesPerColumn > 1) {
            var L = void 0,
              I = void 0,
              O = void 0;
            if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
              var D = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                A = k - e.slidesPerColumn * e.slidesPerGroup * D,
                G =
                  0 === D
                    ? e.slidesPerGroup
                    : Math.min(
                        Math.ceil((h - D * M * e.slidesPerGroup) / M),
                        e.slidesPerGroup
                      );
              (L =
                (I = A - (O = Math.floor(A / G)) * G + D * e.slidesPerGroup) +
                (O * T) / M),
                $.css({
                  "-webkit-box-ordinal-group": L,
                  "-moz-box-ordinal-group": L,
                  "-ms-flex-order": L,
                  "-webkit-order": L,
                  order: L,
                });
            } else
              "column" === e.slidesPerColumnFill
                ? ((O = k - (I = Math.floor(k / M)) * M),
                  (I > z || (I === z && O === M - 1)) &&
                    (O += 1) >= M &&
                    ((O = 0), (I += 1)))
                : (I = k - (O = Math.floor(k / P)) * P);
            $.css(
              "margin-" + (this.isHorizontal() ? "top" : "left"),
              0 !== O && e.spaceBetween && e.spaceBetween + "px"
            );
          }
          if ("none" !== $.css("display")) {
            if ("auto" === e.slidesPerView) {
              var H = a.getComputedStyle($[0], null),
                B = $[0].style.transform,
                N = $[0].style.webkitTransform;
              if (
                (B && ($[0].style.transform = "none"),
                N && ($[0].style.webkitTransform = "none"),
                e.roundLengths)
              )
                S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
              else if (this.isHorizontal()) {
                var X = parseFloat(H.getPropertyValue("width")),
                  V = parseFloat(H.getPropertyValue("padding-left")),
                  Y = parseFloat(H.getPropertyValue("padding-right")),
                  F = parseFloat(H.getPropertyValue("margin-left")),
                  W = parseFloat(H.getPropertyValue("margin-right")),
                  R = H.getPropertyValue("box-sizing");
                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W;
              } else {
                var q = parseFloat(H.getPropertyValue("height")),
                  j = parseFloat(H.getPropertyValue("padding-top")),
                  K = parseFloat(H.getPropertyValue("padding-bottom")),
                  U = parseFloat(H.getPropertyValue("margin-top")),
                  _ = parseFloat(H.getPropertyValue("margin-bottom")),
                  Z = H.getPropertyValue("box-sizing");
                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _;
              }
              B && ($[0].style.transform = B),
                N && ($[0].style.webkitTransform = N),
                e.roundLengths && (S = Math.floor(S));
            } else
              (S = (i - (e.slidesPerView - 1) * w) / e.slidesPerView),
                e.roundLengths && (S = Math.floor(S)),
                l[k] &&
                  (this.isHorizontal()
                    ? (l[k].style.width = S + "px")
                    : (l[k].style.height = S + "px"));
            l[k] && (l[k].swiperSlideSize = S),
              u.push(S),
              e.centeredSlides
                ? ((y = y + S / 2 + x / 2 + w),
                  0 === x && 0 !== k && (y = y - i / 2 - w),
                  0 === k && (y = y - i / 2 - w),
                  Math.abs(y) < 0.001 && (y = 0),
                  e.roundLengths && (y = Math.floor(y)),
                  E % e.slidesPerGroup == 0 && p.push(y),
                  c.push(y))
                : (e.roundLengths && (y = Math.floor(y)),
                  (E - Math.min(this.params.slidesPerGroupSkip, E)) %
                    this.params.slidesPerGroup ==
                    0 && p.push(y),
                  c.push(y),
                  (y = y + S + w)),
              (this.virtualSize += S + w),
              (x = S),
              (E += 1);
          }
        }
        if (
          ((this.virtualSize = Math.max(this.virtualSize, i) + m),
          s &&
            r &&
            ("slide" === e.effect || "coverflow" === e.effect) &&
            t.css({ width: this.virtualSize + e.spaceBetween + "px" }),
          e.setWrapperSize &&
            (this.isHorizontal()
              ? t.css({ width: this.virtualSize + e.spaceBetween + "px" })
              : t.css({ height: this.virtualSize + e.spaceBetween + "px" })),
          e.slidesPerColumn > 1 &&
            ((this.virtualSize = (S + e.spaceBetween) * T),
            (this.virtualSize =
              Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween),
            this.isHorizontal()
              ? t.css({ width: this.virtualSize + e.spaceBetween + "px" })
              : t.css({ height: this.virtualSize + e.spaceBetween + "px" }),
            e.centeredSlides))
        ) {
          C = [];
          for (var Q = 0; Q < p.length; Q += 1) {
            var J = p[Q];
            e.roundLengths && (J = Math.floor(J)),
              p[Q] < this.virtualSize + p[0] && C.push(J);
          }
          p = C;
        }
        if (!e.centeredSlides) {
          C = [];
          for (var ee = 0; ee < p.length; ee += 1) {
            var te = p[ee];
            e.roundLengths && (te = Math.floor(te)),
              p[ee] <= this.virtualSize - i && C.push(te);
          }
          (p = C),
            Math.floor(this.virtualSize - i) - Math.floor(p[p.length - 1]) >
              1 && p.push(this.virtualSize - i);
        }
        if (
          (0 === p.length && (p = [0]),
          0 !== e.spaceBetween &&
            (this.isHorizontal()
              ? s
                ? l.filter(v).css({ marginLeft: w + "px" })
                : l.filter(v).css({ marginRight: w + "px" })
              : l.filter(v).css({ marginBottom: w + "px" })),
          e.centeredSlides && e.centeredSlidesBounds)
        ) {
          var ie = 0;
          u.forEach(function (t) {
            ie += t + (e.spaceBetween ? e.spaceBetween : 0);
          });
          var se = (ie -= e.spaceBetween) - i;
          p = p.map(function (e) {
            return e < 0 ? -f : e > se ? se + m : e;
          });
        }
        if (e.centerInsufficientSlides) {
          var ae = 0;
          if (
            (u.forEach(function (t) {
              ae += t + (e.spaceBetween ? e.spaceBetween : 0);
            }),
            (ae -= e.spaceBetween) < i)
          ) {
            var re = (i - ae) / 2;
            p.forEach(function (e, t) {
              p[t] = e - re;
            }),
              c.forEach(function (e, t) {
                c[t] = e + re;
              });
          }
        }
        d.extend(this, {
          slides: l,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u,
        }),
          h !== o && this.emit("slidesLengthChange"),
          p.length !== g &&
            (this.params.watchOverflow && this.checkOverflow(),
            this.emit("snapGridLengthChange")),
          c.length !== b && this.emit("slidesGridLengthChange"),
          (e.watchSlidesProgress || e.watchSlidesVisibility) &&
            this.updateSlidesOffset();
      }
    },
    updateAutoHeight: function (e) {
      var t,
        i = [],
        s = 0;
      if (
        ("number" == typeof e
          ? this.setTransition(e)
          : !0 === e && this.setTransition(this.params.speed),
        "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
      )
        if (this.params.centeredSlides)
          this.visibleSlides.each(function (e, t) {
            i.push(t);
          });
        else
          for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
            var a = this.activeIndex + t;
            if (a > this.slides.length) break;
            i.push(this.slides.eq(a)[0]);
          }
      else i.push(this.slides.eq(this.activeIndex)[0]);
      for (t = 0; t < i.length; t += 1)
        if (void 0 !== i[t]) {
          var r = i[t].offsetHeight;
          s = r > s ? r : s;
        }
      s && this.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1)
        e[t].swiperSlideOffset = this.isHorizontal()
          ? e[t].offsetLeft
          : e[t].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      var t = this.params,
        i = this.slides,
        s = this.rtlTranslate;
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
        var a = -e;
        s && (a = e),
          i.removeClass(t.slideVisibleClass),
          (this.visibleSlidesIndexes = []),
          (this.visibleSlides = []);
        for (var r = 0; r < i.length; r += 1) {
          var o = i[r],
            l =
              (a +
                (t.centeredSlides ? this.minTranslate() : 0) -
                o.swiperSlideOffset) /
              (o.swiperSlideSize + t.spaceBetween);
          if (t.watchSlidesVisibility || (t.centeredSlides && t.autoHeight)) {
            var d = -(a - o.swiperSlideOffset),
              h = d + this.slidesSizesGrid[r];
            ((d >= 0 && d < this.size - 1) ||
              (h > 1 && h <= this.size) ||
              (d <= 0 && h >= this.size)) &&
              (this.visibleSlides.push(o),
              this.visibleSlidesIndexes.push(r),
              i.eq(r).addClass(t.slideVisibleClass));
          }
          o.progress = s ? -l : l;
        }
        this.visibleSlides = n(this.visibleSlides);
      }
    },
    updateProgress: function (e) {
      if (void 0 === e) {
        var t = this.rtlTranslate ? -1 : 1;
        e = (this && this.translate && this.translate * t) || 0;
      }
      var i = this.params,
        s = this.maxTranslate() - this.minTranslate(),
        a = this.progress,
        r = this.isBeginning,
        n = this.isEnd,
        o = r,
        l = n;
      0 === s
        ? ((a = 0), (r = !0), (n = !0))
        : ((r = (a = (e - this.minTranslate()) / s) <= 0), (n = a >= 1)),
        d.extend(this, { progress: a, isBeginning: r, isEnd: n }),
        (i.watchSlidesProgress ||
          i.watchSlidesVisibility ||
          (i.centeredSlides && i.autoHeight)) &&
          this.updateSlidesProgress(e),
        r && !o && this.emit("reachBeginning toEdge"),
        n && !l && this.emit("reachEnd toEdge"),
        ((o && !r) || (l && !n)) && this.emit("fromEdge"),
        this.emit("progress", a);
    },
    updateSlidesClasses: function () {
      var e,
        t = this.slides,
        i = this.params,
        s = this.$wrapperEl,
        a = this.activeIndex,
        r = this.realIndex,
        n = this.virtual && i.virtual.enabled;
      t.removeClass(
        i.slideActiveClass +
          " " +
          i.slideNextClass +
          " " +
          i.slidePrevClass +
          " " +
          i.slideDuplicateActiveClass +
          " " +
          i.slideDuplicateNextClass +
          " " +
          i.slideDuplicatePrevClass
      ),
        (e = n
          ? this.$wrapperEl.find(
              "." + i.slideClass + '[data-swiper-slide-index="' + a + '"]'
            )
          : t.eq(a)).addClass(i.slideActiveClass),
        i.loop &&
          (e.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    r +
                    '"]'
                )
                .addClass(i.slideDuplicateActiveClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    r +
                    '"]'
                )
                .addClass(i.slideDuplicateActiveClass));
      var o = e
        .nextAll("." + i.slideClass)
        .eq(0)
        .addClass(i.slideNextClass);
      i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
      var l = e
        .prevAll("." + i.slideClass)
        .eq(0)
        .addClass(i.slidePrevClass);
      i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
        i.loop &&
          (o.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    o.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicateNextClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    o.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicateNextClass),
          l.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    l.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicatePrevClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    l.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function (e) {
      var t,
        i = this.rtlTranslate ? this.translate : -this.translate,
        s = this.slidesGrid,
        a = this.snapGrid,
        r = this.params,
        n = this.activeIndex,
        o = this.realIndex,
        l = this.snapIndex,
        h = e;
      if (void 0 === h) {
        for (var p = 0; p < s.length; p += 1)
          void 0 !== s[p + 1]
            ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2
              ? (h = p)
              : i >= s[p] && i < s[p + 1] && (h = p + 1)
            : i >= s[p] && (h = p);
        r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
      }
      if (a.indexOf(i) >= 0) t = a.indexOf(i);
      else {
        var c = Math.min(r.slidesPerGroupSkip, h);
        t = c + Math.floor((h - c) / r.slidesPerGroup);
      }
      if ((t >= a.length && (t = a.length - 1), h !== n)) {
        var u = parseInt(
          this.slides.eq(h).attr("data-swiper-slide-index") || h,
          10
        );
        d.extend(this, {
          snapIndex: t,
          realIndex: u,
          previousIndex: n,
          activeIndex: h,
        }),
          this.emit("activeIndexChange"),
          this.emit("snapIndexChange"),
          o !== u && this.emit("realIndexChange"),
          (this.initialized || this.params.runCallbacksOnInit) &&
            this.emit("slideChange");
      } else t !== l && ((this.snapIndex = t), this.emit("snapIndexChange"));
    },
    updateClickedSlide: function (e) {
      var t = this.params,
        i = n(e.target).closest("." + t.slideClass)[0],
        s = !1;
      if (i)
        for (var a = 0; a < this.slides.length; a += 1)
          this.slides[a] === i && (s = !0);
      if (!i || !s)
        return (this.clickedSlide = void 0), void (this.clickedIndex = void 0);
      (this.clickedSlide = i),
        this.virtual && this.params.virtual.enabled
          ? (this.clickedIndex = parseInt(
              n(i).attr("data-swiper-slide-index"),
              10
            ))
          : (this.clickedIndex = n(i).index()),
        t.slideToClickedSlide &&
          void 0 !== this.clickedIndex &&
          this.clickedIndex !== this.activeIndex &&
          this.slideToClickedSlide();
    },
  };
  var v = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        i = this.rtlTranslate,
        s = this.translate,
        a = this.$wrapperEl;
      if (t.virtualTranslate) return i ? -s : s;
      if (t.cssMode) return s;
      var r = d.getTranslate(a[0], e);
      return i && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      var i = this.rtlTranslate,
        s = this.params,
        a = this.$wrapperEl,
        r = this.wrapperEl,
        n = this.progress,
        o = 0,
        l = 0;
      this.isHorizontal() ? (o = i ? -e : e) : (l = e),
        s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
        s.cssMode
          ? (r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
              this.isHorizontal() ? -o : -l)
          : s.virtualTranslate ||
            a.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
        (this.previousTranslate = this.translate),
        (this.translate = this.isHorizontal() ? o : l);
      var d = this.maxTranslate() - this.minTranslate();
      (0 === d ? 0 : (e - this.minTranslate()) / d) !== n &&
        this.updateProgress(e),
        this.emit("setTranslate", this.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, i, s, a) {
      var r;
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0),
        void 0 === s && (s = !0);
      var n = this,
        o = n.params,
        l = n.wrapperEl;
      if (n.animating && o.preventInteractionOnTransition) return !1;
      var d,
        h = n.minTranslate(),
        p = n.maxTranslate();
      if (
        ((d = s && e > h ? h : s && e < p ? p : e),
        n.updateProgress(d),
        o.cssMode)
      ) {
        var c = n.isHorizontal();
        return (
          0 === t
            ? (l[c ? "scrollLeft" : "scrollTop"] = -d)
            : l.scrollTo
            ? l.scrollTo(
                (((r = {})[c ? "left" : "top"] = -d),
                (r.behavior = "smooth"),
                r)
              )
            : (l[c ? "scrollLeft" : "scrollTop"] = -d),
          !0
        );
      }
      return (
        0 === t
          ? (n.setTransition(0),
            n.setTranslate(d),
            i &&
              (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd")))
          : (n.setTransition(t),
            n.setTranslate(d),
            i &&
              (n.emit("beforeTransitionStart", t, a),
              n.emit("transitionStart")),
            n.animating ||
              ((n.animating = !0),
              n.onTranslateToWrapperTransitionEnd ||
                (n.onTranslateToWrapperTransitionEnd = function (e) {
                  n &&
                    !n.destroyed &&
                    e.target === this &&
                    (n.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      n.onTranslateToWrapperTransitionEnd
                    ),
                    n.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      n.onTranslateToWrapperTransitionEnd
                    ),
                    (n.onTranslateToWrapperTransitionEnd = null),
                    delete n.onTranslateToWrapperTransitionEnd,
                    i && n.emit("transitionEnd"));
                }),
              n.$wrapperEl[0].addEventListener(
                "transitionend",
                n.onTranslateToWrapperTransitionEnd
              ),
              n.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                n.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  var f = {
    setTransition: function (e, t) {
      this.params.cssMode || this.$wrapperEl.transition(e),
        this.emit("setTransition", e, t);
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
        s = this.params,
        a = this.previousIndex;
      if (!s.cssMode) {
        s.autoHeight && this.updateAutoHeight();
        var r = t;
        if (
          (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
          this.emit("transitionStart"),
          e && i !== a)
        ) {
          if ("reset" === r) return void this.emit("slideResetTransitionStart");
          this.emit("slideChangeTransitionStart"),
            "next" === r
              ? this.emit("slideNextTransitionStart")
              : this.emit("slidePrevTransitionStart");
        }
      }
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
        s = this.previousIndex,
        a = this.params;
      if (((this.animating = !1), !a.cssMode)) {
        this.setTransition(0);
        var r = t;
        if (
          (r || (r = i > s ? "next" : i < s ? "prev" : "reset"),
          this.emit("transitionEnd"),
          e && i !== s)
        ) {
          if ("reset" === r) return void this.emit("slideResetTransitionEnd");
          this.emit("slideChangeTransitionEnd"),
            "next" === r
              ? this.emit("slideNextTransitionEnd")
              : this.emit("slidePrevTransitionEnd");
        }
      }
    },
  };
  var m = {
    slideTo: function (e, t, i, s) {
      var a;
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0);
      var r = this,
        n = e;
      n < 0 && (n = 0);
      var o = r.params,
        l = r.snapGrid,
        d = r.slidesGrid,
        h = r.previousIndex,
        p = r.activeIndex,
        c = r.rtlTranslate,
        u = r.wrapperEl;
      if (r.animating && o.preventInteractionOnTransition) return !1;
      var v = Math.min(r.params.slidesPerGroupSkip, n),
        f = v + Math.floor((n - v) / r.params.slidesPerGroup);
      f >= l.length && (f = l.length - 1),
        (p || o.initialSlide || 0) === (h || 0) &&
          i &&
          r.emit("beforeSlideChangeStart");
      var m,
        g = -l[f];
      if ((r.updateProgress(g), o.normalizeSlideIndex))
        for (var b = 0; b < d.length; b += 1)
          -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          g > r.translate &&
          g > r.maxTranslate() &&
          (p || 0) !== n
        )
          return !1;
      }
      if (
        ((m = n > p ? "next" : n < p ? "prev" : "reset"),
        (c && -g === r.translate) || (!c && g === r.translate))
      )
        return (
          r.updateActiveIndex(n),
          o.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== o.effect && r.setTranslate(g),
          "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)),
          !1
        );
      if (o.cssMode) {
        var w = r.isHorizontal(),
          y = -g;
        return (
          c && (y = u.scrollWidth - u.offsetWidth - y),
          0 === t
            ? (u[w ? "scrollLeft" : "scrollTop"] = y)
            : u.scrollTo
            ? u.scrollTo(
                (((a = {})[w ? "left" : "top"] = y), (a.behavior = "smooth"), a)
              )
            : (u[w ? "scrollLeft" : "scrollTop"] = y),
          !0
        );
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.transitionEnd(i, m))
          : (r.setTransition(t),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(i, m));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              ))),
        !0
      );
    },
    slideToLoop: function (e, t, i, s) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0);
      var a = e;
      return (
        this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
      );
    },
    slideNext: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
        a = this.animating,
        r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
      if (s.loop) {
        if (a) return !1;
        this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
      }
      return this.slideTo(this.activeIndex + r, e, t, i);
    },
    slidePrev: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
        a = this.animating,
        r = this.snapGrid,
        n = this.slidesGrid,
        o = this.rtlTranslate;
      if (s.loop) {
        if (a) return !1;
        this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
      }
      function l(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      var d,
        h = l(o ? this.translate : -this.translate),
        p = r.map(function (e) {
          return l(e);
        }),
        c =
          (n.map(function (e) {
            return l(e);
          }),
          r[p.indexOf(h)],
          r[p.indexOf(h) - 1]);
      return (
        void 0 === c &&
          s.cssMode &&
          r.forEach(function (e) {
            !c && h >= e && (c = e);
          }),
        void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1),
        this.slideTo(d, e, t, i)
      );
    },
    slideReset: function (e, t, i) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, i)
      );
    },
    slideToClosest: function (e, t, i, s) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === s && (s = 0.5);
      var a = this.activeIndex,
        r = Math.min(this.params.slidesPerGroupSkip, a),
        n = r + Math.floor((a - r) / this.params.slidesPerGroup),
        o = this.rtlTranslate ? this.translate : -this.translate;
      if (o >= this.snapGrid[n]) {
        var l = this.snapGrid[n];
        o - l > (this.snapGrid[n + 1] - l) * s &&
          (a += this.params.slidesPerGroup);
      } else {
        var d = this.snapGrid[n - 1];
        o - d <= (this.snapGrid[n] - d) * s &&
          (a -= this.params.slidesPerGroup);
      }
      return (
        (a = Math.max(a, 0)),
        (a = Math.min(a, this.slidesGrid.length - 1)),
        this.slideTo(a, e, t, i)
      );
    },
    slideToClickedSlide: function () {
      var e,
        t = this,
        i = t.params,
        s = t.$wrapperEl,
        a =
          "auto" === i.slidesPerView
            ? t.slidesPerViewDynamic()
            : i.slidesPerView,
        r = t.clickedIndex;
      if (i.loop) {
        if (t.animating) return;
        (e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
          i.centeredSlides
            ? r < t.loopedSlides - a / 2 ||
              r > t.slides.length - t.loopedSlides + a / 2
              ? (t.loopFix(),
                (r = s
                  .children(
                    "." +
                      i.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]:not(.' +
                      i.slideDuplicateClass +
                      ")"
                  )
                  .eq(0)
                  .index()),
                d.nextTick(function () {
                  t.slideTo(r);
                }))
              : t.slideTo(r)
            : r > t.slides.length - a
            ? (t.loopFix(),
              (r = s
                .children(
                  "." +
                    i.slideClass +
                    '[data-swiper-slide-index="' +
                    e +
                    '"]:not(.' +
                    i.slideDuplicateClass +
                    ")"
                )
                .eq(0)
                .index()),
              d.nextTick(function () {
                t.slideTo(r);
              }))
            : t.slideTo(r);
      } else t.slideTo(r);
    },
  };
  var g = {
    loopCreate: function () {
      var e = this,
        t = e.params,
        s = e.$wrapperEl;
      s.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
      var a = s.children("." + t.slideClass);
      if (t.loopFillGroupWithBlank) {
        var r = t.slidesPerGroup - (a.length % t.slidesPerGroup);
        if (r !== t.slidesPerGroup) {
          for (var o = 0; o < r; o += 1) {
            var l = n(i.createElement("div")).addClass(
              t.slideClass + " " + t.slideBlankClass
            );
            s.append(l);
          }
          a = s.children("." + t.slideClass);
        }
      }
      "auto" !== t.slidesPerView ||
        t.loopedSlides ||
        (t.loopedSlides = a.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(t.loopedSlides || t.slidesPerView, 10)
        )),
        (e.loopedSlides += t.loopAdditionalSlides),
        e.loopedSlides > a.length && (e.loopedSlides = a.length);
      var d = [],
        h = [];
      a.each(function (t, i) {
        var s = n(i);
        t < e.loopedSlides && h.push(i),
          t < a.length && t >= a.length - e.loopedSlides && d.push(i),
          s.attr("data-swiper-slide-index", t);
      });
      for (var p = 0; p < h.length; p += 1)
        s.append(n(h[p].cloneNode(!0)).addClass(t.slideDuplicateClass));
      for (var c = d.length - 1; c >= 0; c -= 1)
        s.prepend(n(d[c].cloneNode(!0)).addClass(t.slideDuplicateClass));
    },
    loopFix: function () {
      this.emit("beforeLoopFix");
      var e,
        t = this.activeIndex,
        i = this.slides,
        s = this.loopedSlides,
        a = this.allowSlidePrev,
        r = this.allowSlideNext,
        n = this.snapGrid,
        o = this.rtlTranslate;
      (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
      var l = -n[t] - this.getTranslate();
      if (t < s)
        (e = i.length - 3 * s + t),
          (e += s),
          this.slideTo(e, 0, !1, !0) &&
            0 !== l &&
            this.setTranslate((o ? -this.translate : this.translate) - l);
      else if (t >= i.length - s) {
        (e = -i.length + t + s),
          (e += s),
          this.slideTo(e, 0, !1, !0) &&
            0 !== l &&
            this.setTranslate((o ? -this.translate : this.translate) - l);
      }
      (this.allowSlidePrev = a),
        (this.allowSlideNext = r),
        this.emit("loopFix");
    },
    loopDestroy: function () {
      var e = this.$wrapperEl,
        t = this.params,
        i = this.slides;
      e
        .children(
          "." +
            t.slideClass +
            "." +
            t.slideDuplicateClass +
            ",." +
            t.slideClass +
            "." +
            t.slideBlankClass
        )
        .remove(),
        i.removeAttr("data-swiper-slide-index");
    },
  };
  var b = {
    setGrabCursor: function (e) {
      if (
        !(
          h.touch ||
          !this.params.simulateTouch ||
          (this.params.watchOverflow && this.isLocked) ||
          this.params.cssMode
        )
      ) {
        var t = this.el;
        (t.style.cursor = "move"),
          (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
          (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
          (t.style.cursor = e ? "grabbing" : "grab");
      }
    },
    unsetGrabCursor: function () {
      h.touch ||
        (this.params.watchOverflow && this.isLocked) ||
        this.params.cssMode ||
        (this.el.style.cursor = "");
    },
  };
  var w,
    y,
    x,
    E,
    T,
    S,
    C,
    M,
    P,
    z,
    k,
    $,
    L,
    I,
    O,
    D = {
      appendSlide: function (e) {
        var t = this.$wrapperEl,
          i = this.params;
        if (
          (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
        )
          for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
        else t.append(e);
        i.loop && this.loopCreate(),
          (i.observer && h.observer) || this.update();
      },
      prependSlide: function (e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop && this.loopDestroy();
        var a = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
          a = s + e.length;
        } else i.prepend(e);
        t.loop && this.loopCreate(),
          (t.observer && h.observer) || this.update(),
          this.slideTo(a, 0, !1);
      },
      addSlide: function (e, t) {
        var i = this.$wrapperEl,
          s = this.params,
          a = this.activeIndex;
        s.loop &&
          ((a -= this.loopedSlides),
          this.loopDestroy(),
          (this.slides = i.children("." + s.slideClass)));
        var r = this.slides.length;
        if (e <= 0) this.prependSlide(t);
        else if (e >= r) this.appendSlide(t);
        else {
          for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
            var d = this.slides.eq(l);
            d.remove(), o.unshift(d);
          }
          if ("object" == typeof t && "length" in t) {
            for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
            n = a > e ? a + t.length : a;
          } else i.append(t);
          for (var c = 0; c < o.length; c += 1) i.append(o[c]);
          s.loop && this.loopCreate(),
            (s.observer && h.observer) || this.update(),
            s.loop
              ? this.slideTo(n + this.loopedSlides, 0, !1)
              : this.slideTo(n, 0, !1);
        }
      },
      removeSlide: function (e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop &&
          ((s -= this.loopedSlides),
          this.loopDestroy(),
          (this.slides = i.children("." + t.slideClass)));
        var a,
          r = s;
        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1)
            (a = e[n]),
              this.slides[a] && this.slides.eq(a).remove(),
              a < r && (r -= 1);
          r = Math.max(r, 0);
        } else
          (a = e),
            this.slides[a] && this.slides.eq(a).remove(),
            a < r && (r -= 1),
            (r = Math.max(r, 0));
        t.loop && this.loopCreate(),
          (t.observer && h.observer) || this.update(),
          t.loop
            ? this.slideTo(r + this.loopedSlides, 0, !1)
            : this.slideTo(r, 0, !1);
      },
      removeAllSlides: function () {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
        this.removeSlide(e);
      },
    },
    A =
      ((w = a.navigator.platform),
      (y = a.navigator.userAgent),
      (x = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!a.cordova && !a.phonegap),
        phonegap: !(!a.cordova && !a.phonegap),
        electron: !1,
      }),
      (E = a.screen.width),
      (T = a.screen.height),
      (S = y.match(/(Android);?[\s\/]+([\d.]+)?/)),
      (C = y.match(/(iPad).*OS\s([\d_]+)/)),
      (M = y.match(/(iPod)(.*OS\s([\d_]+))?/)),
      (P = !C && y.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
      (z = y.indexOf("MSIE ") >= 0 || y.indexOf("Trident/") >= 0),
      (k = y.indexOf("Edge/") >= 0),
      ($ = y.indexOf("Gecko/") >= 0 && y.indexOf("Firefox/") >= 0),
      (L = "Win32" === w),
      (I = y.toLowerCase().indexOf("electron") >= 0),
      (O = "MacIntel" === w),
      !C &&
        O &&
        h.touch &&
        ((1024 === E && 1366 === T) ||
          (834 === E && 1194 === T) ||
          (834 === E && 1112 === T) ||
          (768 === E && 1024 === T)) &&
        ((C = y.match(/(Version)\/([\d.]+)/)), (O = !1)),
      (x.ie = z),
      (x.edge = k),
      (x.firefox = $),
      S &&
        !L &&
        ((x.os = "android"),
        (x.osVersion = S[2]),
        (x.android = !0),
        (x.androidChrome = y.toLowerCase().indexOf("chrome") >= 0)),
      (C || P || M) && ((x.os = "ios"), (x.ios = !0)),
      P && !M && ((x.osVersion = P[2].replace(/_/g, ".")), (x.iphone = !0)),
      C && ((x.osVersion = C[2].replace(/_/g, ".")), (x.ipad = !0)),
      M &&
        ((x.osVersion = M[3] ? M[3].replace(/_/g, ".") : null), (x.ipod = !0)),
      x.ios &&
        x.osVersion &&
        y.indexOf("Version/") >= 0 &&
        "10" === x.osVersion.split(".")[0] &&
        (x.osVersion = y.toLowerCase().split("version/")[1].split(" ")[0]),
      (x.webView =
        !(
          !(P || C || M) ||
          (!y.match(/.*AppleWebKit(?!.*Safari)/i) && !a.navigator.standalone)
        ) ||
        (a.matchMedia && a.matchMedia("(display-mode: standalone)").matches)),
      (x.webview = x.webView),
      (x.standalone = x.webView),
      (x.desktop = !(x.ios || x.android) || I),
      x.desktop &&
        ((x.electron = I),
        (x.macos = O),
        (x.windows = L),
        x.macos && (x.os = "macos"),
        x.windows && (x.os = "windows")),
      (x.pixelRatio = a.devicePixelRatio || 1),
      x);
  function G(e) {
    var t = this.touchEventsData,
      s = this.params,
      r = this.touches;
    if (!this.animating || !s.preventInteractionOnTransition) {
      var o = e;
      o.originalEvent && (o = o.originalEvent);
      var l = n(o.target);
      if (
        ("wrapper" !== s.touchEventsTarget ||
          l.closest(this.wrapperEl).length) &&
        ((t.isTouchEvent = "touchstart" === o.type),
        (t.isTouchEvent || !("which" in o) || 3 !== o.which) &&
          !(
            (!t.isTouchEvent && "button" in o && o.button > 0) ||
            (t.isTouched && t.isMoved)
          ))
      )
        if (
          s.noSwiping &&
          l.closest(
            s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass
          )[0]
        )
          this.allowClick = !0;
        else if (!s.swipeHandler || l.closest(s.swipeHandler)[0]) {
          (r.currentX =
            "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
            (r.currentY =
              "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
          var h = r.currentX,
            p = r.currentY,
            c = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
            u = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
          if (!c || !(h <= u || h >= a.screen.width - u)) {
            if (
              (d.extend(t, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
              (r.startX = h),
              (r.startY = p),
              (t.touchStartTime = d.now()),
              (this.allowClick = !0),
              this.updateSize(),
              (this.swipeDirection = void 0),
              s.threshold > 0 && (t.allowThresholdMove = !1),
              "touchstart" !== o.type)
            ) {
              var v = !0;
              l.is(t.formElements) && (v = !1),
                i.activeElement &&
                  n(i.activeElement).is(t.formElements) &&
                  i.activeElement !== l[0] &&
                  i.activeElement.blur();
              var f = v && this.allowTouchMove && s.touchStartPreventDefault;
              (s.touchStartForcePreventDefault || f) && o.preventDefault();
            }
            this.emit("touchStart", o);
          }
        }
    }
  }
  function H(e) {
    var t = this.touchEventsData,
      s = this.params,
      a = this.touches,
      r = this.rtlTranslate,
      o = e;
    if ((o.originalEvent && (o = o.originalEvent), t.isTouched)) {
      if (!t.isTouchEvent || "touchmove" === o.type) {
        var l =
            "touchmove" === o.type &&
            o.targetTouches &&
            (o.targetTouches[0] || o.changedTouches[0]),
          h = "touchmove" === o.type ? l.pageX : o.pageX,
          p = "touchmove" === o.type ? l.pageY : o.pageY;
        if (o.preventedByNestedSwiper)
          return (a.startX = h), void (a.startY = p);
        if (!this.allowTouchMove)
          return (
            (this.allowClick = !1),
            void (
              t.isTouched &&
              (d.extend(a, { startX: h, startY: p, currentX: h, currentY: p }),
              (t.touchStartTime = d.now()))
            )
          );
        if (t.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (this.isVertical()) {
            if (
              (p < a.startY && this.translate <= this.maxTranslate()) ||
              (p > a.startY && this.translate >= this.minTranslate())
            )
              return (t.isTouched = !1), void (t.isMoved = !1);
          } else if (
            (h < a.startX && this.translate <= this.maxTranslate()) ||
            (h > a.startX && this.translate >= this.minTranslate())
          )
            return;
        if (
          t.isTouchEvent &&
          i.activeElement &&
          o.target === i.activeElement &&
          n(o.target).is(t.formElements)
        )
          return (t.isMoved = !0), void (this.allowClick = !1);
        if (
          (t.allowTouchCallbacks && this.emit("touchMove", o),
          !(o.targetTouches && o.targetTouches.length > 1))
        ) {
          (a.currentX = h), (a.currentY = p);
          var c = a.currentX - a.startX,
            u = a.currentY - a.startY;
          if (
            !(
              this.params.threshold &&
              Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold
            )
          ) {
            var v;
            if (void 0 === t.isScrolling)
              (this.isHorizontal() && a.currentY === a.startY) ||
              (this.isVertical() && a.currentX === a.startX)
                ? (t.isScrolling = !1)
                : c * c + u * u >= 25 &&
                  ((v = (180 * Math.atan2(Math.abs(u), Math.abs(c))) / Math.PI),
                  (t.isScrolling = this.isHorizontal()
                    ? v > s.touchAngle
                    : 90 - v > s.touchAngle));
            if (
              (t.isScrolling && this.emit("touchMoveOpposite", o),
              void 0 === t.startMoving &&
                ((a.currentX === a.startX && a.currentY === a.startY) ||
                  (t.startMoving = !0)),
              t.isScrolling)
            )
              t.isTouched = !1;
            else if (t.startMoving) {
              (this.allowClick = !1),
                !s.cssMode && o.cancelable && o.preventDefault(),
                s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                t.isMoved ||
                  (s.loop && this.loopFix(),
                  (t.startTranslate = this.getTranslate()),
                  this.setTransition(0),
                  this.animating &&
                    this.$wrapperEl.trigger(
                      "webkitTransitionEnd transitionend"
                    ),
                  (t.allowMomentumBounce = !1),
                  !s.grabCursor ||
                    (!0 !== this.allowSlideNext &&
                      !0 !== this.allowSlidePrev) ||
                    this.setGrabCursor(!0),
                  this.emit("sliderFirstMove", o)),
                this.emit("sliderMove", o),
                (t.isMoved = !0);
              var f = this.isHorizontal() ? c : u;
              (a.diff = f),
                (f *= s.touchRatio),
                r && (f = -f),
                (this.swipeDirection = f > 0 ? "prev" : "next"),
                (t.currentTranslate = f + t.startTranslate);
              var m = !0,
                g = s.resistanceRatio;
              if (
                (s.touchReleaseOnEdges && (g = 0),
                f > 0 && t.currentTranslate > this.minTranslate()
                  ? ((m = !1),
                    s.resistance &&
                      (t.currentTranslate =
                        this.minTranslate() -
                        1 +
                        Math.pow(
                          -this.minTranslate() + t.startTranslate + f,
                          g
                        )))
                  : f < 0 &&
                    t.currentTranslate < this.maxTranslate() &&
                    ((m = !1),
                    s.resistance &&
                      (t.currentTranslate =
                        this.maxTranslate() +
                        1 -
                        Math.pow(
                          this.maxTranslate() - t.startTranslate - f,
                          g
                        ))),
                m && (o.preventedByNestedSwiper = !0),
                !this.allowSlideNext &&
                  "next" === this.swipeDirection &&
                  t.currentTranslate < t.startTranslate &&
                  (t.currentTranslate = t.startTranslate),
                !this.allowSlidePrev &&
                  "prev" === this.swipeDirection &&
                  t.currentTranslate > t.startTranslate &&
                  (t.currentTranslate = t.startTranslate),
                s.threshold > 0)
              ) {
                if (!(Math.abs(f) > s.threshold || t.allowThresholdMove))
                  return void (t.currentTranslate = t.startTranslate);
                if (!t.allowThresholdMove)
                  return (
                    (t.allowThresholdMove = !0),
                    (a.startX = a.currentX),
                    (a.startY = a.currentY),
                    (t.currentTranslate = t.startTranslate),
                    void (a.diff = this.isHorizontal()
                      ? a.currentX - a.startX
                      : a.currentY - a.startY)
                  );
              }
              s.followFinger &&
                !s.cssMode &&
                ((s.freeMode ||
                  s.watchSlidesProgress ||
                  s.watchSlidesVisibility) &&
                  (this.updateActiveIndex(), this.updateSlidesClasses()),
                s.freeMode &&
                  (0 === t.velocities.length &&
                    t.velocities.push({
                      position: a[this.isHorizontal() ? "startX" : "startY"],
                      time: t.touchStartTime,
                    }),
                  t.velocities.push({
                    position: a[this.isHorizontal() ? "currentX" : "currentY"],
                    time: d.now(),
                  })),
                this.updateProgress(t.currentTranslate),
                this.setTranslate(t.currentTranslate));
            }
          }
        }
      }
    } else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", o);
  }
  function B(e) {
    var t = this,
      i = t.touchEventsData,
      s = t.params,
      a = t.touches,
      r = t.rtlTranslate,
      n = t.$wrapperEl,
      o = t.slidesGrid,
      l = t.snapGrid,
      h = e;
    if (
      (h.originalEvent && (h = h.originalEvent),
      i.allowTouchCallbacks && t.emit("touchEnd", h),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && s.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    var p,
      c = d.now(),
      u = c - i.touchStartTime;
    if (
      (t.allowClick &&
        (t.updateClickedSlide(h),
        t.emit("tap click", h),
        u < 300 &&
          c - i.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", h)),
      (i.lastClickTime = d.now()),
      d.nextTick(function () {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
        0 === a.diff ||
        i.currentTranslate === i.startTranslate)
    )
      return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (p = s.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      !s.cssMode)
    )
      if (s.freeMode) {
        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (p > -t.maxTranslate())
          return void (t.slides.length < l.length
            ? t.slideTo(l.length - 1)
            : t.slideTo(t.slides.length - 1));
        if (s.freeModeMomentum) {
          if (i.velocities.length > 1) {
            var v = i.velocities.pop(),
              f = i.velocities.pop(),
              m = v.position - f.position,
              g = v.time - f.time;
            (t.velocity = m / g),
              (t.velocity /= 2),
              Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                (t.velocity = 0),
              (g > 150 || d.now() - v.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;
          (t.velocity *= s.freeModeMomentumVelocityRatio),
            (i.velocities.length = 0);
          var b = 1e3 * s.freeModeMomentumRatio,
            w = t.velocity * b,
            y = t.translate + w;
          r && (y = -y);
          var x,
            E,
            T = !1,
            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
          if (y < t.maxTranslate())
            s.freeModeMomentumBounce
              ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                (x = t.maxTranslate()),
                (T = !0),
                (i.allowMomentumBounce = !0))
              : (y = t.maxTranslate()),
              s.loop && s.centeredSlides && (E = !0);
          else if (y > t.minTranslate())
            s.freeModeMomentumBounce
              ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                (x = t.minTranslate()),
                (T = !0),
                (i.allowMomentumBounce = !0))
              : (y = t.minTranslate()),
              s.loop && s.centeredSlides && (E = !0);
          else if (s.freeModeSticky) {
            for (var C, M = 0; M < l.length; M += 1)
              if (l[M] > -y) {
                C = M;
                break;
              }
            y = -(y =
              Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) ||
              "next" === t.swipeDirection
                ? l[C]
                : l[C - 1]);
          }
          if (
            (E &&
              t.once("transitionEnd", function () {
                t.loopFix();
              }),
            0 !== t.velocity)
          ) {
            if (
              ((b = r
                ? Math.abs((-y - t.translate) / t.velocity)
                : Math.abs((y - t.translate) / t.velocity)),
              s.freeModeSticky)
            ) {
              var P = Math.abs((r ? -y : y) - t.translate),
                z = t.slidesSizesGrid[t.activeIndex];
              b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed;
            }
          } else if (s.freeModeSticky) return void t.slideToClosest();
          s.freeModeMomentumBounce && T
            ? (t.updateProgress(x),
              t.setTransition(b),
              t.setTranslate(y),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              n.transitionEnd(function () {
                t &&
                  !t.destroyed &&
                  i.allowMomentumBounce &&
                  (t.emit("momentumBounce"),
                  t.setTransition(s.speed),
                  setTimeout(function () {
                    t.setTranslate(x),
                      n.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd();
                      });
                  }, 0));
              }))
            : t.velocity
            ? (t.updateProgress(y),
              t.setTransition(b),
              t.setTranslate(y),
              t.transitionStart(!0, t.swipeDirection),
              t.animating ||
                ((t.animating = !0),
                n.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                })))
            : t.updateProgress(y),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        } else if (s.freeModeSticky) return void t.slideToClosest();
        (!s.freeModeMomentum || u >= s.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (
          var k = 0, $ = t.slidesSizesGrid[0], L = 0;
          L < o.length;
          L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== o[L + I]
            ? p >= o[L] && p < o[L + I] && ((k = L), ($ = o[L + I] - o[L]))
            : p >= o[L] && ((k = L), ($ = o[o.length - 1] - o[o.length - 2]));
        }
        var O = (p - o[k]) / $,
          D = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (u > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (O >= s.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k)),
            "prev" === t.swipeDirection &&
              (O > 1 - s.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl)
            ? h.target === t.navigation.nextEl
              ? t.slideTo(k + D)
              : t.slideTo(k)
            : ("next" === t.swipeDirection && t.slideTo(k + D),
              "prev" === t.swipeDirection && t.slideTo(k));
        }
      }
  }
  function N() {
    var e = this.params,
      t = this.el;
    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
        s = this.allowSlidePrev,
        a = this.snapGrid;
      (this.allowSlideNext = !0),
        (this.allowSlidePrev = !0),
        this.updateSize(),
        this.updateSlides(),
        this.updateSlidesClasses(),
        ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
        this.isEnd &&
        !this.params.centeredSlides
          ? this.slideTo(this.slides.length - 1, 0, !1, !0)
          : this.slideTo(this.activeIndex, 0, !1, !0),
        this.autoplay &&
          this.autoplay.running &&
          this.autoplay.paused &&
          this.autoplay.run(),
        (this.allowSlidePrev = s),
        (this.allowSlideNext = i),
        this.params.watchOverflow &&
          a !== this.snapGrid &&
          this.checkOverflow();
    }
  }
  function X(e) {
    this.allowClick ||
      (this.params.preventClicks && e.preventDefault(),
      this.params.preventClicksPropagation &&
        this.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function V() {
    var e = this.wrapperEl,
      t = this.rtlTranslate;
    (this.previousTranslate = this.translate),
      this.isHorizontal()
        ? (this.translate = t
            ? e.scrollWidth - e.offsetWidth - e.scrollLeft
            : -e.scrollLeft)
        : (this.translate = -e.scrollTop),
      -0 === this.translate && (this.translate = 0),
      this.updateActiveIndex(),
      this.updateSlidesClasses();
    var i = this.maxTranslate() - this.minTranslate();
    (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !==
      this.progress &&
      this.updateProgress(t ? -this.translate : this.translate),
      this.emit("setTranslate", this.translate, !1);
  }
  var Y = !1;
  function F() {}
  var W = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
    },
    R = {
      update: u,
      translate: v,
      transition: f,
      slide: m,
      loop: g,
      grabCursor: b,
      manipulation: D,
      events: {
        attachEvents: function () {
          var e = this.params,
            t = this.touchEvents,
            s = this.el,
            a = this.wrapperEl;
          (this.onTouchStart = G.bind(this)),
            (this.onTouchMove = H.bind(this)),
            (this.onTouchEnd = B.bind(this)),
            e.cssMode && (this.onScroll = V.bind(this)),
            (this.onClick = X.bind(this));
          var r = !!e.nested;
          if (!h.touch && h.pointerEvents)
            s.addEventListener(t.start, this.onTouchStart, !1),
              i.addEventListener(t.move, this.onTouchMove, r),
              i.addEventListener(t.end, this.onTouchEnd, !1);
          else {
            if (h.touch) {
              var n = !(
                "touchstart" !== t.start ||
                !h.passiveListener ||
                !e.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.addEventListener(t.start, this.onTouchStart, n),
                s.addEventListener(
                  t.move,
                  this.onTouchMove,
                  h.passiveListener ? { passive: !1, capture: r } : r
                ),
                s.addEventListener(t.end, this.onTouchEnd, n),
                t.cancel && s.addEventListener(t.cancel, this.onTouchEnd, n),
                Y || (i.addEventListener("touchstart", F), (Y = !0));
            }
            ((e.simulateTouch && !A.ios && !A.android) ||
              (e.simulateTouch && !h.touch && A.ios)) &&
              (s.addEventListener("mousedown", this.onTouchStart, !1),
              i.addEventListener("mousemove", this.onTouchMove, r),
              i.addEventListener("mouseup", this.onTouchEnd, !1));
          }
          (e.preventClicks || e.preventClicksPropagation) &&
            s.addEventListener("click", this.onClick, !0),
            e.cssMode && a.addEventListener("scroll", this.onScroll),
            e.updateOnWindowResize
              ? this.on(
                  A.ios || A.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  N,
                  !0
                )
              : this.on("observerUpdate", N, !0);
        },
        detachEvents: function () {
          var e = this.params,
            t = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            r = !!e.nested;
          if (!h.touch && h.pointerEvents)
            s.removeEventListener(t.start, this.onTouchStart, !1),
              i.removeEventListener(t.move, this.onTouchMove, r),
              i.removeEventListener(t.end, this.onTouchEnd, !1);
          else {
            if (h.touch) {
              var n = !(
                "onTouchStart" !== t.start ||
                !h.passiveListener ||
                !e.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.removeEventListener(t.start, this.onTouchStart, n),
                s.removeEventListener(t.move, this.onTouchMove, r),
                s.removeEventListener(t.end, this.onTouchEnd, n),
                t.cancel && s.removeEventListener(t.cancel, this.onTouchEnd, n);
            }
            ((e.simulateTouch && !A.ios && !A.android) ||
              (e.simulateTouch && !h.touch && A.ios)) &&
              (s.removeEventListener("mousedown", this.onTouchStart, !1),
              i.removeEventListener("mousemove", this.onTouchMove, r),
              i.removeEventListener("mouseup", this.onTouchEnd, !1));
          }
          (e.preventClicks || e.preventClicksPropagation) &&
            s.removeEventListener("click", this.onClick, !0),
            e.cssMode && a.removeEventListener("scroll", this.onScroll),
            this.off(
              A.ios || A.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              N
            );
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides;
          void 0 === i && (i = 0);
          var s = this.params,
            a = this.$el,
            r = s.breakpoints;
          if (r && (!r || 0 !== Object.keys(r).length)) {
            var n = this.getBreakpoint(r);
            if (n && this.currentBreakpoint !== n) {
              var o = n in r ? r[n] : void 0;
              o &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn",
                ].forEach(function (e) {
                  var t = o[e];
                  void 0 !== t &&
                    (o[e] =
                      "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                        ? "slidesPerView" === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : "auto");
                });
              var l = o || this.originalParams,
                h = s.slidesPerColumn > 1,
                p = l.slidesPerColumn > 1;
              h && !p
                ? a.removeClass(
                    s.containerModifierClass +
                      "multirow " +
                      s.containerModifierClass +
                      "multirow-column"
                  )
                : !h &&
                  p &&
                  (a.addClass(s.containerModifierClass + "multirow"),
                  "column" === l.slidesPerColumnFill &&
                    a.addClass(s.containerModifierClass + "multirow-column"));
              var c = l.direction && l.direction !== s.direction,
                u = s.loop && (l.slidesPerView !== s.slidesPerView || c);
              c && t && this.changeDirection(),
                d.extend(this.params, l),
                d.extend(this, {
                  allowTouchMove: this.params.allowTouchMove,
                  allowSlideNext: this.params.allowSlideNext,
                  allowSlidePrev: this.params.allowSlidePrev,
                }),
                (this.currentBreakpoint = n),
                u &&
                  t &&
                  (this.loopDestroy(),
                  this.loopCreate(),
                  this.updateSlides(),
                  this.slideTo(e - i + this.loopedSlides, 0, !1)),
                this.emit("breakpoint", l);
            }
          }
        },
        getBreakpoint: function (e) {
          if (e) {
            var t = !1,
              i = Object.keys(e).map(function (e) {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return { value: a.innerHeight * t, point: e };
                }
                return { value: e, point: e };
              });
            i.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var s = 0; s < i.length; s += 1) {
              var r = i[s],
                n = r.point;
              r.value <= a.innerWidth && (t = n);
            }
            return t || "max";
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this.params,
            t = this.isLocked,
            i =
              this.slides.length > 0 &&
              e.slidesOffsetBefore +
                e.spaceBetween * (this.slides.length - 1) +
                this.slides[0].offsetWidth * this.slides.length;
          e.slidesOffsetBefore && e.slidesOffsetAfter && i
            ? (this.isLocked = i <= this.size)
            : (this.isLocked = 1 === this.snapGrid.length),
            (this.allowSlideNext = !this.isLocked),
            (this.allowSlidePrev = !this.isLocked),
            t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
            t &&
              t !== this.isLocked &&
              ((this.isEnd = !1), this.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = [];
          a.push("initialized"),
            a.push(t.direction),
            t.freeMode && a.push("free-mode"),
            t.autoHeight && a.push("autoheight"),
            i && a.push("rtl"),
            t.slidesPerColumn > 1 &&
              (a.push("multirow"),
              "column" === t.slidesPerColumnFill && a.push("multirow-column")),
            A.android && a.push("android"),
            A.ios && a.push("ios"),
            t.cssMode && a.push("css-mode"),
            a.forEach(function (i) {
              e.push(t.containerModifierClass + i);
            }),
            s.addClass(e.join(" "));
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" "));
        },
      },
      images: {
        loadImage: function (e, t, i, s, r, o) {
          var l;
          function d() {
            o && o();
          }
          n(e).parent("picture")[0] || (e.complete && r)
            ? d()
            : t
            ? (((l = new a.Image()).onload = d),
              (l.onerror = d),
              s && (l.sizes = s),
              i && (l.srcset = i),
              t && (l.src = t))
            : d();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var i = 0; i < e.imagesToLoad.length; i += 1) {
            var s = e.imagesToLoad[i];
            e.loadImage(
              s,
              s.currentSrc || s.getAttribute("src"),
              s.srcset || s.getAttribute("srcset"),
              s.sizes || s.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    q = {},
    j = (function (e) {
      function t() {
        for (var i, s, a, r = [], o = arguments.length; o--; )
          r[o] = arguments[o];
        1 === r.length && r[0].constructor && r[0].constructor === Object
          ? (a = r[0])
          : ((s = (i = r)[0]), (a = i[1])),
          a || (a = {}),
          (a = d.extend({}, a)),
          s && !a.el && (a.el = s),
          e.call(this, a),
          Object.keys(R).forEach(function (e) {
            Object.keys(R[e]).forEach(function (i) {
              t.prototype[i] || (t.prototype[i] = R[e][i]);
            });
          });
        var l = this;
        void 0 === l.modules && (l.modules = {}),
          Object.keys(l.modules).forEach(function (e) {
            var t = l.modules[e];
            if (t.params) {
              var i = Object.keys(t.params)[0],
                s = t.params[i];
              if ("object" != typeof s || null === s) return;
              if (!(i in a) || !("enabled" in s)) return;
              !0 === a[i] && (a[i] = { enabled: !0 }),
                "object" != typeof a[i] ||
                  "enabled" in a[i] ||
                  (a[i].enabled = !0),
                a[i] || (a[i] = { enabled: !1 });
            }
          });
        var p = d.extend({}, W);
        l.useModulesParams(p),
          (l.params = d.extend({}, p, q, a)),
          (l.originalParams = d.extend({}, l.params)),
          (l.passedParams = d.extend({}, a)),
          (l.$ = n);
        var c = n(l.params.el);
        if ((s = c[0])) {
          if (c.length > 1) {
            var u = [];
            return (
              c.each(function (e, i) {
                var s = d.extend({}, a, { el: i });
                u.push(new t(s));
              }),
              u
            );
          }
          var v, f, m;
          return (
            (s.swiper = l),
            c.data("swiper", l),
            s && s.shadowRoot && s.shadowRoot.querySelector
              ? ((v = n(
                  s.shadowRoot.querySelector("." + l.params.wrapperClass)
                )).children = function (e) {
                  return c.children(e);
                })
              : (v = c.children("." + l.params.wrapperClass)),
            d.extend(l, {
              $el: c,
              el: s,
              $wrapperEl: v,
              wrapperEl: v[0],
              classNames: [],
              slides: n(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === l.params.direction;
              },
              isVertical: function () {
                return "vertical" === l.params.direction;
              },
              rtl:
                "rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction"),
              rtlTranslate:
                "horizontal" === l.params.direction &&
                ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
              wrongRTL: "-webkit-box" === v.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: l.params.allowSlideNext,
              allowSlidePrev: l.params.allowSlidePrev,
              touchEvents:
                ((f = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                (m = ["mousedown", "mousemove", "mouseup"]),
                h.pointerEvents &&
                  (m = ["pointerdown", "pointermove", "pointerup"]),
                (l.touchEventsTouch = {
                  start: f[0],
                  move: f[1],
                  end: f[2],
                  cancel: f[3],
                }),
                (l.touchEventsDesktop = { start: m[0], move: m[1], end: m[2] }),
                h.touch || !l.params.simulateTouch
                  ? l.touchEventsTouch
                  : l.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  "input, select, option, textarea, button, video, label",
                lastClickTime: d.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: l.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            l.useModules(),
            l.params.init && l.init(),
            l
          );
        }
      }
      e && (t.__proto__ = e),
        (t.prototype = Object.create(e && e.prototype)),
        (t.prototype.constructor = t);
      var i = {
        extendedDefaults: { configurable: !0 },
        defaults: { configurable: !0 },
        Class: { configurable: !0 },
        $: { configurable: !0 },
      };
      return (
        (t.prototype.slidesPerViewDynamic = function () {
          var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            s = this.size,
            a = this.activeIndex,
            r = 1;
          if (e.centeredSlides) {
            for (
              var n, o = t[a].swiperSlideSize, l = a + 1;
              l < t.length;
              l += 1
            )
              t[l] &&
                !n &&
                ((r += 1), (o += t[l].swiperSlideSize) > s && (n = !0));
            for (var d = a - 1; d >= 0; d -= 1)
              t[d] &&
                !n &&
                ((r += 1), (o += t[d].swiperSlideSize) > s && (n = !0));
          } else
            for (var h = a + 1; h < t.length; h += 1)
              i[h] - i[a] < s && (r += 1);
          return r;
        }),
        (t.prototype.update = function () {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              i = e.params;
            i.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (s(), e.params.autoHeight && e.updateAutoHeight())
                : (("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
              i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update");
          }
          function s() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
        }),
        (t.prototype.changeDirection = function (e, t) {
          void 0 === t && (t = !0);
          var i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.$el
                .removeClass("" + this.params.containerModifierClass + i)
                .addClass("" + this.params.containerModifierClass + e),
              (this.params.direction = e),
              this.slides.each(function (t, i) {
                "vertical" === e ? (i.style.width = "") : (i.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }),
        (t.prototype.init = function () {
          this.initialized ||
            (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop
              ? this.slideTo(
                  this.params.initialSlide + this.loopedSlides,
                  0,
                  this.params.runCallbacksOnInit
                )
              : this.slideTo(
                  this.params.initialSlide,
                  0,
                  this.params.runCallbacksOnInit
                ),
            this.attachEvents(),
            (this.initialized = !0),
            this.emit("init"));
        }),
        (t.prototype.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            a = i.$el,
            r = i.$wrapperEl,
            n = i.slides;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                a.removeAttr("style"),
                r.removeAttr("style"),
                n &&
                  n.length &&
                  n
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach(function (e) {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                i.$el.data("swiper", null),
                d.deleteProps(i)),
              (i.destroyed = !0)),
            null
          );
        }),
        (t.extendDefaults = function (e) {
          d.extend(q, e);
        }),
        (i.extendedDefaults.get = function () {
          return q;
        }),
        (i.defaults.get = function () {
          return W;
        }),
        (i.Class.get = function () {
          return e;
        }),
        (i.$.get = function () {
          return n;
        }),
        Object.defineProperties(t, i),
        t
      );
    })(p),
    K = { name: "device", proto: { device: A }, static: { device: A } },
    U = { name: "support", proto: { support: h }, static: { support: h } },
    _ = {
      isEdge: !!a.navigator.userAgent.match(/Edge/g),
      isSafari: (function () {
        var e = a.navigator.userAgent.toLowerCase();
        return (
          e.indexOf("safari") >= 0 &&
          e.indexOf("chrome") < 0 &&
          e.indexOf("android") < 0
        );
      })(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        a.navigator.userAgent
      ),
    },
    Z = { name: "browser", proto: { browser: _ }, static: { browser: _ } },
    Q = {
      name: "resize",
      create: function () {
        var e = this;
        d.extend(e, {
          resize: {
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function () {
          a.addEventListener("resize", this.resize.resizeHandler),
            a.addEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
        destroy: function () {
          a.removeEventListener("resize", this.resize.resizeHandler),
            a.removeEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
      },
    },
    J = {
      func: a.MutationObserver || a.WebkitMutationObserver,
      attach: function (e, t) {
        void 0 === t && (t = {});
        var i = this,
          s = new (0, J.func)(function (e) {
            if (1 !== e.length) {
              var t = function () {
                i.emit("observerUpdate", e[0]);
              };
              a.requestAnimationFrame
                ? a.requestAnimationFrame(t)
                : a.setTimeout(t, 0);
            } else i.emit("observerUpdate", e[0]);
          });
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          i.observer.observers.push(s);
      },
      init: function () {
        if (h.observer && this.params.observer) {
          if (this.params.observeParents)
            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
              this.observer.attach(e[t]);
          this.observer.attach(this.$el[0], {
            childList: this.params.observeSlideChildren,
          }),
            this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    ee = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function () {
        d.extend(this, {
          observer: {
            init: J.init.bind(this),
            attach: J.attach.bind(this),
            destroy: J.destroy.bind(this),
            observers: [],
          },
        });
      },
      on: {
        init: function () {
          this.observer.init();
        },
        destroy: function () {
          this.observer.destroy();
        },
      },
    },
    te = {
      update: function (e) {
        var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.params.virtual,
          o = n.addSlidesBefore,
          l = n.addSlidesAfter,
          h = t.virtual,
          p = h.from,
          c = h.to,
          u = h.slides,
          v = h.slidesGrid,
          f = h.renderSlide,
          m = h.offset;
        t.updateActiveIndex();
        var g,
          b,
          w,
          y = t.activeIndex || 0;
        (g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          r
            ? ((b = Math.floor(s / 2) + a + o), (w = Math.floor(s / 2) + a + l))
            : ((b = s + (a - 1) + o), (w = a + l));
        var x = Math.max((y || 0) - w, 0),
          E = Math.min((y || 0) + b, u.length - 1),
          T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
        function S() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (d.extend(t.virtual, {
            from: x,
            to: E,
            offset: T,
            slidesGrid: t.slidesGrid,
          }),
          p === x && c === E && !e)
        )
          return (
            t.slidesGrid !== v && T !== m && t.slides.css(g, T + "px"),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: T,
              from: x,
              to: E,
              slides: (function () {
                for (var e = [], t = x; t <= E; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void S()
          );
        var C = [],
          M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var P = p; P <= c; P += 1)
            (P < x || P > E) &&
              t.$wrapperEl
                .find(
                  "." +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    P +
                    '"]'
                )
                .remove();
        for (var z = 0; z < u.length; z += 1)
          z >= x &&
            z <= E &&
            (void 0 === c || e
              ? M.push(z)
              : (z > c && M.push(z), z < p && C.push(z)));
        M.forEach(function (e) {
          t.$wrapperEl.append(f(u[e], e));
        }),
          C.sort(function (e, t) {
            return t - e;
          }).forEach(function (e) {
            t.$wrapperEl.prepend(f(u[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(g, T + "px"),
          S();
      },
      renderSlide: function (e, t) {
        var i = this.params.virtual;
        if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
        var s = i.renderSlide
          ? n(i.renderSlide.call(this, e, t))
          : n(
              '<div class="' +
                this.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                "</div>"
            );
        return (
          s.attr("data-swiper-slide-index") ||
            s.attr("data-swiper-slide-index", t),
          i.cache && (this.virtual.cache[t] = s),
          s
        );
      },
      appendSlide: function (e) {
        if ("object" == typeof e && "length" in e)
          for (var t = 0; t < e.length; t += 1)
            e[t] && this.virtual.slides.push(e[t]);
        else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this.activeIndex,
          i = t + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a += 1)
            e[a] && this.virtual.slides.unshift(e[a]);
          (i = t + e.length), (s = e.length);
        } else this.virtual.slides.unshift(e);
        if (this.params.virtual.cache) {
          var r = this.virtual.cache,
            n = {};
          Object.keys(r).forEach(function (e) {
            var t = r[e],
              i = t.attr("data-swiper-slide-index");
            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
              (n[parseInt(e, 10) + s] = t);
          }),
            (this.virtual.cache = n);
        }
        this.virtual.update(!0), this.slideTo(i, 0);
      },
      removeSlide: function (e) {
        if (null != e) {
          var t = this.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; i >= 0; i -= 1)
              this.virtual.slides.splice(e[i], 1),
                this.params.virtual.cache && delete this.virtual.cache[e[i]],
                e[i] < t && (t -= 1),
                (t = Math.max(t, 0));
          else
            this.virtual.slides.splice(e, 1),
              this.params.virtual.cache && delete this.virtual.cache[e],
              e < t && (t -= 1),
              (t = Math.max(t, 0));
          this.virtual.update(!0), this.slideTo(t, 0);
        }
      },
      removeAllSlides: function () {
        (this.virtual.slides = []),
          this.params.virtual.cache && (this.virtual.cache = {}),
          this.virtual.update(!0),
          this.slideTo(0, 0);
      },
    },
    ie = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        d.extend(this, {
          virtual: {
            update: te.update.bind(this),
            appendSlide: te.appendSlide.bind(this),
            prependSlide: te.prependSlide.bind(this),
            removeSlide: te.removeSlide.bind(this),
            removeAllSlides: te.removeAllSlides.bind(this),
            renderSlide: te.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit: function () {
          if (this.params.virtual.enabled) {
            this.classNames.push(
              this.params.containerModifierClass + "virtual"
            );
            var e = { watchSlidesProgress: !0 };
            d.extend(this.params, e),
              d.extend(this.originalParams, e),
              this.params.initialSlide || this.virtual.update();
          }
        },
        setTranslate: function () {
          this.params.virtual.enabled && this.virtual.update();
        },
      },
    },
    se = {
      handle: function (e) {
        var t = this.rtlTranslate,
          s = e;
        s.originalEvent && (s = s.originalEvent);
        var r = s.keyCode || s.charCode;
        if (
          !this.allowSlideNext &&
          ((this.isHorizontal() && 39 === r) ||
            (this.isVertical() && 40 === r) ||
            34 === r)
        )
          return !1;
        if (
          !this.allowSlidePrev &&
          ((this.isHorizontal() && 37 === r) ||
            (this.isVertical() && 38 === r) ||
            33 === r)
        )
          return !1;
        if (
          !(
            s.shiftKey ||
            s.altKey ||
            s.ctrlKey ||
            s.metaKey ||
            (i.activeElement &&
              i.activeElement.nodeName &&
              ("input" === i.activeElement.nodeName.toLowerCase() ||
                "textarea" === i.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            this.params.keyboard.onlyInViewport &&
            (33 === r ||
              34 === r ||
              37 === r ||
              39 === r ||
              38 === r ||
              40 === r)
          ) {
            var n = !1;
            if (
              this.$el.parents("." + this.params.slideClass).length > 0 &&
              0 === this.$el.parents("." + this.params.slideActiveClass).length
            )
              return;
            var o = a.innerWidth,
              l = a.innerHeight,
              d = this.$el.offset();
            t && (d.left -= this.$el[0].scrollLeft);
            for (
              var h = [
                  [d.left, d.top],
                  [d.left + this.width, d.top],
                  [d.left, d.top + this.height],
                  [d.left + this.width, d.top + this.height],
                ],
                p = 0;
              p < h.length;
              p += 1
            ) {
              var c = h[p];
              c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
            }
            if (!n) return;
          }
          this.isHorizontal()
            ? ((33 !== r && 34 !== r && 37 !== r && 39 !== r) ||
                (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
              (((34 !== r && 39 !== r) || t) &&
                ((33 !== r && 37 !== r) || !t)) ||
                this.slideNext(),
              (((33 !== r && 37 !== r) || t) &&
                ((34 !== r && 39 !== r) || !t)) ||
                this.slidePrev())
            : ((33 !== r && 34 !== r && 38 !== r && 40 !== r) ||
                (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
              (34 !== r && 40 !== r) || this.slideNext(),
              (33 !== r && 38 !== r) || this.slidePrev()),
            this.emit("keyPress", r);
        }
      },
      enable: function () {
        this.keyboard.enabled ||
          (n(i).on("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !0));
      },
      disable: function () {
        this.keyboard.enabled &&
          (n(i).off("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !1));
      },
    },
    ae = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
      create: function () {
        d.extend(this, {
          keyboard: {
            enabled: !1,
            enable: se.enable.bind(this),
            disable: se.disable.bind(this),
            handle: se.handle.bind(this),
          },
        });
      },
      on: {
        init: function () {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function () {
          this.keyboard.enabled && this.keyboard.disable();
        },
      },
    };
  var re = {
      lastScrollTime: d.now(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function () {
        return a.navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function () {
              var e = "onwheel" in i;
              if (!e) {
                var t = i.createElement("div");
                t.setAttribute("onwheel", "return;"),
                  (e = "function" == typeof t.onwheel);
              }
              return (
                !e &&
                  i.implementation &&
                  i.implementation.hasFeature &&
                  !0 !== i.implementation.hasFeature("", "") &&
                  (e = i.implementation.hasFeature("Events.wheel", "3.0")),
                e
              );
            })()
          ? "wheel"
          : "mousewheel";
      },
      normalize: function (e) {
        var t = 0,
          i = 0,
          s = 0,
          a = 0;
        return (
          "detail" in e && (i = e.detail),
          "wheelDelta" in e && (i = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
          (s = 10 * t),
          (a = 10 * i),
          "deltaY" in e && (a = e.deltaY),
          "deltaX" in e && (s = e.deltaX),
          e.shiftKey && !s && ((s = a), (a = 0)),
          (s || a) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((s *= 40), (a *= 40))
              : ((s *= 800), (a *= 800))),
          s && !t && (t = s < 1 ? -1 : 1),
          a && !i && (i = a < 1 ? -1 : 1),
          { spinX: t, spinY: i, pixelX: s, pixelY: a }
        );
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var t = e,
          i = this,
          s = i.params.mousewheel;
        i.params.cssMode && t.preventDefault();
        var a = i.$el;
        if (
          ("container" !== i.params.mousewheel.eventsTarged &&
            (a = n(i.params.mousewheel.eventsTarged)),
          !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges)
        )
          return !0;
        t.originalEvent && (t = t.originalEvent);
        var r = 0,
          o = i.rtlTranslate ? -1 : 1,
          l = re.normalize(t);
        if (s.forceToAxis)
          if (i.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
            r = l.pixelX * o;
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
            r = l.pixelY;
          }
        else
          r =
            Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
        if (0 === r) return !0;
        if ((s.invert && (r = -r), i.params.freeMode)) {
          var h = {
              time: d.now(),
              delta: Math.abs(r),
              direction: Math.sign(r),
            },
            p = i.mousewheel.lastEventBeforeSnap,
            c =
              p &&
              h.time < p.time + 500 &&
              h.delta <= p.delta &&
              h.direction === p.direction;
          if (!c) {
            (i.mousewheel.lastEventBeforeSnap = void 0),
              i.params.loop && i.loopFix();
            var u = i.getTranslate() + r * s.sensitivity,
              v = i.isBeginning,
              f = i.isEnd;
            if (
              (u >= i.minTranslate() && (u = i.minTranslate()),
              u <= i.maxTranslate() && (u = i.maxTranslate()),
              i.setTransition(0),
              i.setTranslate(u),
              i.updateProgress(),
              i.updateActiveIndex(),
              i.updateSlidesClasses(),
              ((!v && i.isBeginning) || (!f && i.isEnd)) &&
                i.updateSlidesClasses(),
              i.params.freeModeSticky)
            ) {
              clearTimeout(i.mousewheel.timeout),
                (i.mousewheel.timeout = void 0);
              var m = i.mousewheel.recentWheelEvents;
              m.length >= 15 && m.shift();
              var g = m.length ? m[m.length - 1] : void 0,
                b = m[0];
              if (
                (m.push(h),
                g && (h.delta > g.delta || h.direction !== g.direction))
              )
                m.splice(0);
              else if (
                m.length >= 15 &&
                h.time - b.time < 500 &&
                b.delta - h.delta >= 1 &&
                h.delta <= 6
              ) {
                var w = r > 0 ? 0.8 : 0.2;
                (i.mousewheel.lastEventBeforeSnap = h),
                  m.splice(0),
                  (i.mousewheel.timeout = d.nextTick(function () {
                    i.slideToClosest(i.params.speed, !0, void 0, w);
                  }, 0));
              }
              i.mousewheel.timeout ||
                (i.mousewheel.timeout = d.nextTick(function () {
                  (i.mousewheel.lastEventBeforeSnap = h),
                    m.splice(0),
                    i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (c || i.emit("scroll", t),
              i.params.autoplay &&
                i.params.autoplayDisableOnInteraction &&
                i.autoplay.stop(),
              u === i.minTranslate() || u === i.maxTranslate())
            )
              return !0;
          }
        } else {
          var y = {
              time: d.now(),
              delta: Math.abs(r),
              direction: Math.sign(r),
              raw: e,
            },
            x = i.mousewheel.recentWheelEvents;
          x.length >= 2 && x.shift();
          var E = x.length ? x[x.length - 1] : void 0;
          if (
            (x.push(y),
            E
              ? (y.direction !== E.direction ||
                  y.delta > E.delta ||
                  y.time > E.time + 150) &&
                i.mousewheel.animateSlider(y)
              : i.mousewheel.animateSlider(y),
            i.mousewheel.releaseScroll(y))
          )
            return !0;
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
      },
      animateSlider: function (e) {
        return (
          (e.delta >= 6 && d.now() - this.mousewheel.lastScrollTime < 60) ||
          (e.direction < 0
            ? (this.isEnd && !this.params.loop) ||
              this.animating ||
              (this.slideNext(), this.emit("scroll", e.raw))
            : (this.isBeginning && !this.params.loop) ||
              this.animating ||
              (this.slidePrev(), this.emit("scroll", e.raw)),
          (this.mousewheel.lastScrollTime = new a.Date().getTime()),
          !1)
        );
      },
      releaseScroll: function (e) {
        var t = this.params.mousewheel;
        if (e.direction < 0) {
          if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
        } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
          return !0;
        return !1;
      },
      enable: function () {
        var e = re.event();
        if (this.params.cssMode)
          return (
            this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0
          );
        if (!e) return !1;
        if (this.mousewheel.enabled) return !1;
        var t = this.$el;
        return (
          "container" !== this.params.mousewheel.eventsTarged &&
            (t = n(this.params.mousewheel.eventsTarged)),
          t.on("mouseenter", this.mousewheel.handleMouseEnter),
          t.on("mouseleave", this.mousewheel.handleMouseLeave),
          t.on(e, this.mousewheel.handle),
          (this.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function () {
        var e = re.event();
        if (this.params.cssMode)
          return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (!this.mousewheel.enabled) return !1;
        var t = this.$el;
        return (
          "container" !== this.params.mousewheel.eventsTarged &&
            (t = n(this.params.mousewheel.eventsTarged)),
          t.off(e, this.mousewheel.handle),
          (this.mousewheel.enabled = !1),
          !0
        );
      },
    },
    ne = {
      update: function () {
        var e = this.params.navigation;
        if (!this.params.loop) {
          var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          s &&
            s.length > 0 &&
            (this.isBeginning
              ? s.addClass(e.disabledClass)
              : s.removeClass(e.disabledClass),
            s[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](e.lockClass)),
            i &&
              i.length > 0 &&
              (this.isEnd
                ? i.addClass(e.disabledClass)
                : i.removeClass(e.disabledClass),
              i[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](e.lockClass));
        }
      },
      onPrevClick: function (e) {
        e.preventDefault(),
          (this.isBeginning && !this.params.loop) || this.slidePrev();
      },
      onNextClick: function (e) {
        e.preventDefault(),
          (this.isEnd && !this.params.loop) || this.slideNext();
      },
      init: function () {
        var e,
          t,
          i = this.params.navigation;
        (i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = n(i.nextEl)),
            this.params.uniqueNavElements &&
              "string" == typeof i.nextEl &&
              e.length > 1 &&
              1 === this.$el.find(i.nextEl).length &&
              (e = this.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = n(i.prevEl)),
            this.params.uniqueNavElements &&
              "string" == typeof i.prevEl &&
              t.length > 1 &&
              1 === this.$el.find(i.prevEl).length &&
              (t = this.$el.find(i.prevEl))),
          e && e.length > 0 && e.on("click", this.navigation.onNextClick),
          t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
          d.extend(this.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }));
      },
      destroy: function () {
        var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
        t &&
          t.length &&
          (t.off("click", this.navigation.onNextClick),
          t.removeClass(this.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", this.navigation.onPrevClick),
            i.removeClass(this.params.navigation.disabledClass));
      },
    },
    oe = {
      update: function () {
        var e = this.rtl,
          t = this.params.pagination;
        if (
          t.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var i,
            s =
              this.virtual && this.params.virtual.enabled
                ? this.virtual.slides.length
                : this.slides.length,
            a = this.pagination.$el,
            r = this.params.loop
              ? Math.ceil(
                  (s - 2 * this.loopedSlides) / this.params.slidesPerGroup
                )
              : this.snapGrid.length;
          if (
            (this.params.loop
              ? ((i = Math.ceil(
                  (this.activeIndex - this.loopedSlides) /
                    this.params.slidesPerGroup
                )) >
                  s - 1 - 2 * this.loopedSlides &&
                  (i -= s - 2 * this.loopedSlides),
                i > r - 1 && (i -= r),
                i < 0 &&
                  "bullets" !== this.params.paginationType &&
                  (i = r + i))
              : (i =
                  void 0 !== this.snapIndex
                    ? this.snapIndex
                    : this.activeIndex || 0),
            "bullets" === t.type &&
              this.pagination.bullets &&
              this.pagination.bullets.length > 0)
          ) {
            var o,
              l,
              d,
              h = this.pagination.bullets;
            if (
              (t.dynamicBullets &&
                ((this.pagination.bulletSize = h
                  .eq(0)
                  [this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                a.css(
                  this.isHorizontal() ? "width" : "height",
                  this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"
                ),
                t.dynamicMainBullets > 1 &&
                  void 0 !== this.previousIndex &&
                  ((this.pagination.dynamicBulletIndex +=
                    i - this.previousIndex),
                  this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
                    ? (this.pagination.dynamicBulletIndex =
                        t.dynamicMainBullets - 1)
                    : this.pagination.dynamicBulletIndex < 0 &&
                      (this.pagination.dynamicBulletIndex = 0)),
                (o = i - this.pagination.dynamicBulletIndex),
                (d =
                  ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) +
                    o) /
                  2)),
              h.removeClass(
                t.bulletActiveClass +
                  " " +
                  t.bulletActiveClass +
                  "-next " +
                  t.bulletActiveClass +
                  "-next-next " +
                  t.bulletActiveClass +
                  "-prev " +
                  t.bulletActiveClass +
                  "-prev-prev " +
                  t.bulletActiveClass +
                  "-main"
              ),
              a.length > 1)
            )
              h.each(function (e, s) {
                var a = n(s),
                  r = a.index();
                r === i && a.addClass(t.bulletActiveClass),
                  t.dynamicBullets &&
                    (r >= o &&
                      r <= l &&
                      a.addClass(t.bulletActiveClass + "-main"),
                    r === o &&
                      a
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev-prev"),
                    r === l &&
                      a
                        .next()
                        .addClass(t.bulletActiveClass + "-next")
                        .next()
                        .addClass(t.bulletActiveClass + "-next-next"));
              });
            else {
              var p = h.eq(i),
                c = p.index();
              if ((p.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1)
                  h.eq(f).addClass(t.bulletActiveClass + "-main");
                if (this.params.loop)
                  if (c >= h.length - t.dynamicMainBullets) {
                    for (var m = t.dynamicMainBullets; m >= 0; m -= 1)
                      h.eq(h.length - m).addClass(
                        t.bulletActiveClass + "-main"
                      );
                    h.eq(h.length - t.dynamicMainBullets - 1).addClass(
                      t.bulletActiveClass + "-prev"
                    );
                  } else
                    u
                      .prev()
                      .addClass(t.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(t.bulletActiveClass + "-prev-prev"),
                      v
                        .next()
                        .addClass(t.bulletActiveClass + "-next")
                        .next()
                        .addClass(t.bulletActiveClass + "-next-next");
                else
                  u
                    .prev()
                    .addClass(t.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(t.bulletActiveClass + "-prev-prev"),
                    v
                      .next()
                      .addClass(t.bulletActiveClass + "-next")
                      .next()
                      .addClass(t.bulletActiveClass + "-next-next");
              }
            }
            if (t.dynamicBullets) {
              var g = Math.min(h.length, t.dynamicMainBullets + 4),
                b =
                  (this.pagination.bulletSize * g -
                    this.pagination.bulletSize) /
                    2 -
                  d * this.pagination.bulletSize,
                w = e ? "right" : "left";
              h.css(this.isHorizontal() ? w : "top", b + "px");
            }
          }
          if (
            ("fraction" === t.type &&
              (a
                .find("." + t.currentClass)
                .text(t.formatFractionCurrent(i + 1)),
              a.find("." + t.totalClass).text(t.formatFractionTotal(r))),
            "progressbar" === t.type)
          ) {
            var y;
            y = t.progressbarOpposite
              ? this.isHorizontal()
                ? "vertical"
                : "horizontal"
              : this.isHorizontal()
              ? "horizontal"
              : "vertical";
            var x = (i + 1) / r,
              E = 1,
              T = 1;
            "horizontal" === y ? (E = x) : (T = x),
              a
                .find("." + t.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" + E + ") scaleY(" + T + ")"
                )
                .transition(this.params.speed);
          }
          "custom" === t.type && t.renderCustom
            ? (a.html(t.renderCustom(this, i + 1, r)),
              this.emit("paginationRender", this, a[0]))
            : this.emit("paginationUpdate", this, a[0]),
            a[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](t.lockClass);
        }
      },
      render: function () {
        var e = this.params.pagination;
        if (
          e.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var t =
              this.virtual && this.params.virtual.enabled
                ? this.virtual.slides.length
                : this.slides.length,
            i = this.pagination.$el,
            s = "";
          if ("bullets" === e.type) {
            for (
              var a = this.params.loop
                  ? Math.ceil(
                      (t - 2 * this.loopedSlides) / this.params.slidesPerGroup
                    )
                  : this.snapGrid.length,
                r = 0;
              r < a;
              r += 1
            )
              e.renderBullet
                ? (s += e.renderBullet.call(this, r, e.bulletClass))
                : (s +=
                    "<" +
                    e.bulletElement +
                    ' class="' +
                    e.bulletClass +
                    '"></' +
                    e.bulletElement +
                    ">");
            i.html(s), (this.pagination.bullets = i.find("." + e.bulletClass));
          }
          "fraction" === e.type &&
            ((s = e.renderFraction
              ? e.renderFraction.call(this, e.currentClass, e.totalClass)
              : '<span class="' +
                e.currentClass +
                '"></span> / <span class="' +
                e.totalClass +
                '"></span>'),
            i.html(s)),
            "progressbar" === e.type &&
              ((s = e.renderProgressbar
                ? e.renderProgressbar.call(this, e.progressbarFillClass)
                : '<span class="' + e.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== e.type &&
              this.emit("paginationRender", this.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var i = n(t.el);
          0 !== i.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              i.length > 1 &&
              1 === e.$el.find(t.el).length &&
              (i = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              i.addClass(t.progressbarOppositeClass),
            t.clickable &&
              i.on("click", "." + t.bulletClass, function (t) {
                t.preventDefault();
                var i = n(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
              }),
            d.extend(e.pagination, { $el: i, el: i[0] }));
        }
      },
      destroy: function () {
        var e = this.params.pagination;
        if (
          e.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            this.pagination.bullets &&
              this.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off("click", "." + e.bulletClass);
        }
      },
    },
    le = {
      setTranslate: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;
          t
            ? (d = -d) > 0
              ? ((l = s - d), (d = 0))
              : -d + s > a && (l = a + d)
            : d < 0
            ? ((l = s + d), (d = 0))
            : d + s > a && (l = a - d),
            this.isHorizontal()
              ? (r.transform("translate3d(" + d + "px, 0, 0)"),
                (r[0].style.width = l + "px"))
              : (r.transform("translate3d(0px, " + d + "px, 0)"),
                (r[0].style.height = l + "px")),
            o.hide &&
              (clearTimeout(this.scrollbar.timeout),
              (n[0].style.opacity = 1),
              (this.scrollbar.timeout = setTimeout(function () {
                (n[0].style.opacity = 0), n.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
          (t[0].style.width = ""), (t[0].style.height = "");
          var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
          (s =
            "auto" === this.params.scrollbar.dragSize
              ? a * r
              : parseInt(this.params.scrollbar.dragSize, 10)),
            this.isHorizontal()
              ? (t[0].style.width = s + "px")
              : (t[0].style.height = s + "px"),
            (i[0].style.display = r >= 1 ? "none" : ""),
            this.params.scrollbar.hide && (i[0].style.opacity = 0),
            d.extend(e, {
              trackSize: a,
              divider: r,
              moveDivider: n,
              dragSize: s,
            }),
            e.$el[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](this.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      },
      setDragPosition: function (e) {
        var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          o = i.dragStartPos;
        (t =
          (i.getPointerPosition(e) -
            a.offset()[this.isHorizontal() ? "left" : "top"] -
            (null !== o ? o : r / 2)) /
          (n - r)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
        var l =
          this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
        this.updateProgress(l),
          this.setTranslate(l),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
        (this.scrollbar.isTouched = !0),
          (this.scrollbar.dragStartPos =
            e.target === r[0] || e.target === r
              ? i.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  this.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          r.transition(100),
          i.setDragPosition(e),
          clearTimeout(this.scrollbar.dragTimeout),
          a.transition(0),
          t.hide && a.css("opacity", 1),
          this.params.cssMode &&
            this.$wrapperEl.css("scroll-snap-type", "none"),
          this.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
        this.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          a.transition(0),
          this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
        this.scrollbar.isTouched &&
          ((this.scrollbar.isTouched = !1),
          this.params.cssMode &&
            (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
          t.hide &&
            (clearTimeout(this.scrollbar.dragTimeout),
            (this.scrollbar.dragTimeout = d.nextTick(function () {
              a.css("opacity", 0), a.transition(400);
            }, 1e3))),
          this.emit("scrollbarDragEnd", e),
          t.snapOnRelease && this.slideToClosest());
      },
      enableDraggable: function () {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = e.$el[0],
            n = !(!h.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            o = !(!h.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          h.touch
            ? (r.addEventListener(t.start, this.scrollbar.onDragStart, n),
              r.addEventListener(t.move, this.scrollbar.onDragMove, n),
              r.addEventListener(t.end, this.scrollbar.onDragEnd, o))
            : (r.addEventListener(s.start, this.scrollbar.onDragStart, n),
              i.addEventListener(s.move, this.scrollbar.onDragMove, n),
              i.addEventListener(s.end, this.scrollbar.onDragEnd, o));
        }
      },
      disableDraggable: function () {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = e.$el[0],
            n = !(!h.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            o = !(!h.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          h.touch
            ? (r.removeEventListener(t.start, this.scrollbar.onDragStart, n),
              r.removeEventListener(t.move, this.scrollbar.onDragMove, n),
              r.removeEventListener(t.end, this.scrollbar.onDragEnd, o))
            : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n),
              i.removeEventListener(s.move, this.scrollbar.onDragMove, n),
              i.removeEventListener(s.end, this.scrollbar.onDragEnd, o));
        }
      },
      init: function () {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            s = n(i.el);
          this.params.uniqueNavElements &&
            "string" == typeof i.el &&
            s.length > 1 &&
            1 === t.find(i.el).length &&
            (s = t.find(i.el));
          var a = s.find("." + this.params.scrollbar.dragClass);
          0 === a.length &&
            ((a = n(
              '<div class="' + this.params.scrollbar.dragClass + '"></div>'
            )),
            s.append(a)),
            d.extend(e, { $el: s, el: s[0], $dragEl: a, dragEl: a[0] }),
            i.draggable && e.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    de = {
      setTransform: function (e, t) {
        var i = this.rtl,
          s = n(e),
          a = i ? -1 : 1,
          r = s.attr("data-swiper-parallax") || "0",
          o = s.attr("data-swiper-parallax-x"),
          l = s.attr("data-swiper-parallax-y"),
          d = s.attr("data-swiper-parallax-scale"),
          h = s.attr("data-swiper-parallax-opacity");
        if (
          (o || l
            ? ((o = o || "0"), (l = l || "0"))
            : this.isHorizontal()
            ? ((o = r), (l = "0"))
            : ((l = r), (o = "0")),
          (o =
            o.indexOf("%") >= 0
              ? parseInt(o, 10) * t * a + "%"
              : o * t * a + "px"),
          (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
          null != h)
        ) {
          var p = h - (h - 1) * (1 - Math.abs(t));
          s[0].style.opacity = p;
        }
        if (null == d) s.transform("translate3d(" + o + ", " + l + ", 0px)");
        else {
          var c = d - (d - 1) * (1 - Math.abs(t));
          s.transform(
            "translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")"
          );
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.$el,
          i = e.slides,
          s = e.progress,
          a = e.snapGrid;
        t
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t, i) {
            e.parallax.setTransform(i, s);
          }),
          i.each(function (t, i) {
            var r = i.progress;
            e.params.slidesPerGroup > 1 &&
              "auto" !== e.params.slidesPerView &&
              (r += Math.ceil(t / 2) - s * (a.length - 1)),
              (r = Math.min(Math.max(r, -1), 1)),
              n(i)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each(function (t, i) {
                  e.parallax.setTransform(i, r);
                });
          });
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed);
        this.$el
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t, i) {
            var s = n(i),
              a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (a = 0), s.transition(a);
          });
      },
    },
    he = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
      },
      onGestureStart: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (
          ((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !h.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureTouched = !0),
            (s.scaleStart = he.getDistanceBetweenTouches(e));
        }
        (s.$slideEl && s.$slideEl.length) ||
        ((s.$slideEl = n(e.target).closest("." + this.params.slideClass)),
        0 === s.$slideEl.length &&
          (s.$slideEl = this.slides.eq(this.activeIndex)),
        (s.$imageEl = s.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        )),
        (s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass)),
        (s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
        0 !== s.$imageWrapEl.length)
          ? (s.$imageEl && s.$imageEl.transition(0), (this.zoom.isScaling = !0))
          : (s.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!h.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureMoved = !0),
            (s.scaleMove = he.getDistanceBetweenTouches(e));
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          ((i.scale = h.gestures
            ? e.scale * i.currentScale
            : (s.scaleMove / s.scaleStart) * i.currentScale),
          i.scale > s.maxRatio &&
            (i.scale =
              s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
          i.scale < t.minRatio &&
            (i.scale =
              t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
          s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
      },
      onGestureEnd: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!h.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !A.android)
          )
            return;
          (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
          s.$imageEl
            .transition(this.params.speed)
            .transform("translate3d(0,0,0) scale(" + i.scale + ")"),
          (i.currentScale = i.scale),
          (i.isScaling = !1),
          1 === i.scale && (s.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image;
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (s.isTouched ||
            (A.android && e.cancelable && e.preventDefault(),
            (s.isTouched = !0),
            (s.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (s.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((this.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0),
            (s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
          var r = s.width * t.scale,
            n = s.height * t.scale;
          if (!(r < i.slideWidth && n < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - n / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !t.isScaling)
            ) {
              if (
                this.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !this.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
              a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
              a.prevTime || (a.prevTime = Date.now()),
              (a.x =
                (s.touchesCurrent.x - a.prevPositionX) /
                (Date.now() - a.prevTime) /
                2),
              (a.y =
                (s.touchesCurrent.y - a.prevPositionY) /
                (Date.now() - a.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
              Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
              (a.prevPositionX = s.touchesCurrent.x),
              (a.prevPositionY = s.touchesCurrent.y),
              (a.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved)
            return (i.isTouched = !1), void (i.isMoved = !1);
          (i.isTouched = !1), (i.isMoved = !1);
          var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;
          0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
            0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
          var h = Math.max(a, r);
          (i.currentX = o), (i.currentY = d);
          var p = i.width * e.scale,
            c = i.height * e.scale;
          (i.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
            (i.maxX = -i.minX),
            (i.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
            (i.maxY = -i.minY),
            (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
            (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
            t.$imageWrapEl
              .transition(h)
              .transform(
                "translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
          (e.scale = 1),
          (e.currentScale = 1),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          i,
          s,
          a,
          r,
          n,
          o,
          l,
          d,
          h,
          p,
          c,
          u,
          v,
          f,
          m,
          g = this.zoom,
          b = this.params.zoom,
          w = g.gesture,
          y = g.image;
        (w.$slideEl ||
          (this.params.virtual && this.params.virtual.enabled && this.virtual
            ? (w.$slideEl = this.$wrapperEl.children(
                "." + this.params.slideActiveClass
              ))
            : (w.$slideEl = this.slides.eq(this.activeIndex)),
          (w.$imageEl = w.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass))),
        w.$imageEl && 0 !== w.$imageEl.length) &&
          (w.$slideEl.addClass("" + b.zoomedSlideClass),
          void 0 === y.touchesStart.x && e
            ? ((t =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((t = y.touchesStart.x), (i = y.touchesStart.y)),
          (g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
          (g.currentScale =
            w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
          e
            ? ((f = w.$slideEl[0].offsetWidth),
              (m = w.$slideEl[0].offsetHeight),
              (s = w.$slideEl.offset().left + f / 2 - t),
              (a = w.$slideEl.offset().top + m / 2 - i),
              (o = w.$imageEl[0].offsetWidth),
              (l = w.$imageEl[0].offsetHeight),
              (d = o * g.scale),
              (h = l * g.scale),
              (u = -(p = Math.min(f / 2 - d / 2, 0))),
              (v = -(c = Math.min(m / 2 - h / 2, 0))),
              (r = s * g.scale) < p && (r = p),
              r > u && (r = u),
              (n = a * g.scale) < c && (n = c),
              n > v && (n = v))
            : ((r = 0), (n = 0)),
          w.$imageWrapEl
            .transition(300)
            .transform("translate3d(" + r + "px, " + n + "px,0)"),
          w.$imageEl
            .transition(300)
            .transform("translate3d(0,0,0) scale(" + g.scale + ")"));
      },
      out: function () {
        var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
        i.$slideEl ||
          (this.params.virtual && this.params.virtual.enabled && this.virtual
            ? (i.$slideEl = this.$wrapperEl.children(
                "." + this.params.slideActiveClass
              ))
            : (i.$slideEl = this.slides.eq(this.activeIndex)),
          (i.$imageEl = i.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((e.scale = 1),
            (e.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            (i.$slideEl = void 0));
      },
      enable: function () {
        var e = this.zoom;
        if (!e.enabled) {
          e.enabled = !0;
          var t = !(
              "touchstart" !== this.touchEvents.start ||
              !h.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            i = !h.passiveListener || { passive: !1, capture: !0 },
            s = "." + this.params.slideClass;
          h.gestures
            ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t),
              this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t),
              this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t))
            : "touchstart" === this.touchEvents.start &&
              (this.$wrapperEl.on(
                this.touchEvents.start,
                s,
                e.onGestureStart,
                t
              ),
              this.$wrapperEl.on(
                this.touchEvents.move,
                s,
                e.onGestureChange,
                i
              ),
              this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t),
              this.touchEvents.cancel &&
                this.$wrapperEl.on(
                  this.touchEvents.cancel,
                  s,
                  e.onGestureEnd,
                  t
                )),
            this.$wrapperEl.on(
              this.touchEvents.move,
              "." + this.params.zoom.containerClass,
              e.onTouchMove,
              i
            );
        }
      },
      disable: function () {
        var e = this.zoom;
        if (e.enabled) {
          this.zoom.enabled = !1;
          var t = !(
              "touchstart" !== this.touchEvents.start ||
              !h.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            i = !h.passiveListener || { passive: !1, capture: !0 },
            s = "." + this.params.slideClass;
          h.gestures
            ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t),
              this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t),
              this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t))
            : "touchstart" === this.touchEvents.start &&
              (this.$wrapperEl.off(
                this.touchEvents.start,
                s,
                e.onGestureStart,
                t
              ),
              this.$wrapperEl.off(
                this.touchEvents.move,
                s,
                e.onGestureChange,
                i
              ),
              this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t),
              this.touchEvents.cancel &&
                this.$wrapperEl.off(
                  this.touchEvents.cancel,
                  s,
                  e.onGestureEnd,
                  t
                )),
            this.$wrapperEl.off(
              this.touchEvents.move,
              "." + this.params.zoom.containerClass,
              e.onTouchMove,
              i
            );
        }
      },
    },
    pe = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var i = this,
          s = i.params.lazy;
        if (void 0 !== e && 0 !== i.slides.length) {
          var a =
              i.virtual && i.params.virtual.enabled
                ? i.$wrapperEl.children(
                    "." +
                      i.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : i.slides.eq(e),
            r = a.find(
              "." +
                s.elementClass +
                ":not(." +
                s.loadedClass +
                "):not(." +
                s.loadingClass +
                ")"
            );
          !a.hasClass(s.elementClass) ||
            a.hasClass(s.loadedClass) ||
            a.hasClass(s.loadingClass) ||
            (r = r.add(a[0])),
            0 !== r.length &&
              r.each(function (e, r) {
                var o = n(r);
                o.addClass(s.loadingClass);
                var l = o.attr("data-background"),
                  d = o.attr("data-src"),
                  h = o.attr("data-srcset"),
                  p = o.attr("data-sizes"),
                  c = o.parent("picture");
                i.loadImage(o[0], d || l, h, p, !1, function () {
                  if (null != i && i && (!i || i.params) && !i.destroyed) {
                    if (
                      (l
                        ? (o.css("background-image", 'url("' + l + '")'),
                          o.removeAttr("data-background"))
                        : (h &&
                            (o.attr("srcset", h), o.removeAttr("data-srcset")),
                          p && (o.attr("sizes", p), o.removeAttr("data-sizes")),
                          c.length &&
                            c.children("source").each(function (e, t) {
                              var i = n(t);
                              i.attr("data-srcset") &&
                                (i.attr("srcset", i.attr("data-srcset")),
                                i.removeAttr("data-srcset"));
                            }),
                          d && (o.attr("src", d), o.removeAttr("data-src"))),
                      o.addClass(s.loadedClass).removeClass(s.loadingClass),
                      a.find("." + s.preloaderClass).remove(),
                      i.params.loop && t)
                    ) {
                      var e = a.attr("data-swiper-slide-index");
                      if (a.hasClass(i.params.slideDuplicateClass)) {
                        var r = i.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            i.params.slideDuplicateClass +
                            ")"
                        );
                        i.lazy.loadInSlide(r.index(), !1);
                      } else {
                        var u = i.$wrapperEl.children(
                          "." +
                            i.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        i.lazy.loadInSlide(u.index(), !1);
                      }
                    }
                    i.emit("lazyImageReady", a[0], o[0]),
                      i.params.autoHeight && i.updateAutoHeight();
                  }
                }),
                  i.emit("lazyImageLoad", a[0], o[0]);
              });
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          i = e.params,
          s = e.slides,
          a = e.activeIndex,
          r = e.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;
        function d(e) {
          if (r) {
            if (
              t.children(
                "." + i.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0;
          } else if (s[e]) return !0;
          return !1;
        }
        function h(e) {
          return r ? n(e).attr("data-swiper-slide-index") : n(e).index();
        }
        if (
          ("auto" === l && (l = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children("." + i.slideVisibleClass).each(function (t, i) {
            var s = r ? n(i).attr("data-swiper-slide-index") : n(i).index();
            e.lazy.loadInSlide(s);
          });
        else if (l > 1)
          for (var p = a; p < a + l; p += 1) d(p) && e.lazy.loadInSlide(p);
        else e.lazy.loadInSlide(a);
        if (o.loadPrevNext)
          if (l > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
            for (
              var c = o.loadPrevNextAmount,
                u = l,
                v = Math.min(a + u + Math.max(c, u), s.length),
                f = Math.max(a - Math.max(u, c), 0),
                m = a + l;
              m < v;
              m += 1
            )
              d(m) && e.lazy.loadInSlide(m);
            for (var g = f; g < a; g += 1) d(g) && e.lazy.loadInSlide(g);
          } else {
            var b = t.children("." + i.slideNextClass);
            b.length > 0 && e.lazy.loadInSlide(h(b));
            var w = t.children("." + i.slidePrevClass);
            w.length > 0 && e.lazy.loadInSlide(h(w));
          }
      },
    },
    ce = {
      LinearSpline: function (e, t) {
        var i,
          s,
          a,
          r,
          n,
          o = function (e, t) {
            for (s = -1, i = e.length; i - s > 1; )
              e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
            return i;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = o(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        this.controller.spline ||
          (this.controller.spline = this.params.loop
            ? new ce.LinearSpline(this.slidesGrid, e.slidesGrid)
            : new ce.LinearSpline(this.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var i,
          s,
          a = this,
          r = a.controller.control;
        function n(e) {
          var t = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by &&
            (a.controller.getInterpolateFunction(e),
            (s = -a.controller.spline.interpolate(-t))),
            (s && "container" !== a.params.controller.by) ||
              ((i =
                (e.maxTranslate() - e.minTranslate()) /
                (a.maxTranslate() - a.minTranslate())),
              (s = (t - a.minTranslate()) * i + e.minTranslate())),
            a.params.controller.inverse && (s = e.maxTranslate() - s),
            e.updateProgress(s),
            e.setTranslate(s, a),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof j && n(r[o]);
        else r instanceof j && t !== r && n(r);
      },
      setTransition: function (e, t) {
        var i,
          s = this,
          a = s.controller.control;
        function r(t) {
          t.setTransition(e, s),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                d.nextTick(function () {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(function () {
                a &&
                  (t.params.loop &&
                    "slide" === s.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        if (Array.isArray(a))
          for (i = 0; i < a.length; i += 1)
            a[i] !== t && a[i] instanceof j && r(a[i]);
        else a instanceof j && t !== a && r(a);
      },
    },
    ue = {
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      makeElNotFocusable: function (e) {
        return e.attr("tabIndex", "-1"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function (e) {
        var t = this.params.a11y;
        if (13 === e.keyCode) {
          var i = n(e.target);
          this.navigation &&
            this.navigation.$nextEl &&
            i.is(this.navigation.$nextEl) &&
            ((this.isEnd && !this.params.loop) || this.slideNext(),
            this.isEnd
              ? this.a11y.notify(t.lastSlideMessage)
              : this.a11y.notify(t.nextSlideMessage)),
            this.navigation &&
              this.navigation.$prevEl &&
              i.is(this.navigation.$prevEl) &&
              ((this.isBeginning && !this.params.loop) || this.slidePrev(),
              this.isBeginning
                ? this.a11y.notify(t.firstSlideMessage)
                : this.a11y.notify(t.prevSlideMessage)),
            this.pagination &&
              i.is("." + this.params.pagination.bulletClass) &&
              i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        if (!this.params.loop && this.navigation) {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          i &&
            i.length > 0 &&
            (this.isBeginning
              ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i))
              : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))),
            t &&
              t.length > 0 &&
              (this.isEnd
                ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t))
                : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
        }
      },
      updatePagination: function () {
        var e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (i, s) {
            var a = n(s);
            e.a11y.makeElFocusable(a),
              e.a11y.addElRole(a, "button"),
              e.a11y.addElLabel(
                a,
                t.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  a.index() + 1
                )
              );
          });
      },
      init: function () {
        this.$el.append(this.a11y.liveRegion);
        var e,
          t,
          i = this.params.a11y;
        this.navigation &&
          this.navigation.$nextEl &&
          (e = this.navigation.$nextEl),
          this.navigation &&
            this.navigation.$prevEl &&
            (t = this.navigation.$prevEl),
          e &&
            (this.a11y.makeElFocusable(e),
            this.a11y.addElRole(e, "button"),
            this.a11y.addElLabel(e, i.nextSlideMessage),
            e.on("keydown", this.a11y.onEnterKey)),
          t &&
            (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, "button"),
            this.a11y.addElLabel(t, i.prevSlideMessage),
            t.on("keydown", this.a11y.onEnterKey)),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.on(
              "keydown",
              "." + this.params.pagination.bulletClass,
              this.a11y.onEnterKey
            );
      },
      destroy: function () {
        var e, t;
        this.a11y.liveRegion &&
          this.a11y.liveRegion.length > 0 &&
          this.a11y.liveRegion.remove(),
          this.navigation &&
            this.navigation.$nextEl &&
            (e = this.navigation.$nextEl),
          this.navigation &&
            this.navigation.$prevEl &&
            (t = this.navigation.$prevEl),
          e && e.off("keydown", this.a11y.onEnterKey),
          t && t.off("keydown", this.a11y.onEnterKey),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.off(
              "keydown",
              "." + this.params.pagination.bulletClass,
              this.a11y.onEnterKey
            );
      },
    },
    ve = {
      init: function () {
        if (this.params.history) {
          if (!a.history || !a.history.pushState)
            return (
              (this.params.history.enabled = !1),
              void (this.params.hashNavigation.enabled = !0)
            );
          var e = this.history;
          (e.initialized = !0),
            (e.paths = ve.getPathValues()),
            (e.paths.key || e.paths.value) &&
              (e.scrollToSlide(
                0,
                e.paths.value,
                this.params.runCallbacksOnInit
              ),
              this.params.history.replaceState ||
                a.addEventListener(
                  "popstate",
                  this.history.setHistoryPopState
                ));
        }
      },
      destroy: function () {
        this.params.history.replaceState ||
          a.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        (this.history.paths = ve.getPathValues()),
          this.history.scrollToSlide(
            this.params.speed,
            this.history.paths.value,
            !1
          );
      },
      getPathValues: function () {
        var e = a.location.pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          t = e.length;
        return { key: e[t - 2], value: e[t - 1] };
      },
      setHistory: function (e, t) {
        if (this.history.initialized && this.params.history.enabled) {
          var i = this.slides.eq(t),
            s = ve.slugify(i.attr("data-history"));
          a.location.pathname.includes(e) || (s = e + "/" + s);
          var r = a.history.state;
          (r && r.value === s) ||
            (this.params.history.replaceState
              ? a.history.replaceState({ value: s }, null, s)
              : a.history.pushState({ value: s }, null, s));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, i) {
        if (t)
          for (var s = 0, a = this.slides.length; s < a; s += 1) {
            var r = this.slides.eq(s);
            if (
              ve.slugify(r.attr("data-history")) === t &&
              !r.hasClass(this.params.slideDuplicateClass)
            ) {
              var n = r.index();
              this.slideTo(n, e, i);
            }
          }
        else this.slideTo(0, e, i);
      },
    },
    fe = {
      onHashCange: function () {
        this.emit("hashChange");
        var e = i.location.hash.replace("#", "");
        if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
          var t = this.$wrapperEl
            .children("." + this.params.slideClass + '[data-hash="' + e + '"]')
            .index();
          if (void 0 === t) return;
          this.slideTo(t);
        }
      },
      setHash: function () {
        if (
          this.hashNavigation.initialized &&
          this.params.hashNavigation.enabled
        )
          if (
            this.params.hashNavigation.replaceState &&
            a.history &&
            a.history.replaceState
          )
            a.history.replaceState(
              null,
              null,
              "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""
            ),
              this.emit("hashSet");
          else {
            var e = this.slides.eq(this.activeIndex),
              t = e.attr("data-hash") || e.attr("data-history");
            (i.location.hash = t || ""), this.emit("hashSet");
          }
      },
      init: function () {
        if (
          !(
            !this.params.hashNavigation.enabled ||
            (this.params.history && this.params.history.enabled)
          )
        ) {
          this.hashNavigation.initialized = !0;
          var e = i.location.hash.replace("#", "");
          if (e)
            for (var t = 0, s = this.slides.length; t < s; t += 1) {
              var r = this.slides.eq(t);
              if (
                (r.attr("data-hash") || r.attr("data-history")) === e &&
                !r.hasClass(this.params.slideDuplicateClass)
              ) {
                var o = r.index();
                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
              }
            }
          this.params.hashNavigation.watchState &&
            n(a).on("hashchange", this.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        this.params.hashNavigation.watchState &&
          n(a).off("hashchange", this.hashNavigation.onHashCange);
      },
    },
    me = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = d.nextTick(function () {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit("autoplay"))
                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
              : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
              e.params.cssMode && e.autoplay.running && e.autoplay.run();
          }, i));
      },
      start: function () {
        return (
          void 0 === this.autoplay.timeout &&
          !this.autoplay.running &&
          ((this.autoplay.running = !0),
          this.emit("autoplayStart"),
          this.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        return (
          !!this.autoplay.running &&
          void 0 !== this.autoplay.timeout &&
          (this.autoplay.timeout &&
            (clearTimeout(this.autoplay.timeout),
            (this.autoplay.timeout = void 0)),
          (this.autoplay.running = !1),
          this.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        this.autoplay.running &&
          (this.autoplay.paused ||
            (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
            (this.autoplay.paused = !0),
            0 !== e && this.params.autoplay.waitForTransition
              ? (this.$wrapperEl[0].addEventListener(
                  "transitionend",
                  this.autoplay.onTransitionEnd
                ),
                this.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  this.autoplay.onTransitionEnd
                ))
              : ((this.autoplay.paused = !1), this.autoplay.run())));
      },
    },
    ge = {
      setTranslate: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
          this.params.virtualTranslate || (s -= this.translate);
          var a = 0;
          this.isHorizontal() || ((a = s), (s = 0));
          var r = this.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: r }).transform(
            "translate3d(" + s + "px, " + a + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.$wrapperEl;
        if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var a = !1;
          i.transitionEnd(function () {
            if (!a && t && !t.destroyed) {
              (a = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                i < e.length;
                i += 1
              )
                s.trigger(e[i]);
            }
          });
        }
      },
    },
    be = {
      setTranslate: function () {
        var e,
          t = this.$el,
          i = this.$wrapperEl,
          s = this.slides,
          a = this.width,
          r = this.height,
          o = this.rtlTranslate,
          l = this.size,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          c = 0;
        d.shadow &&
          (h
            ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                ((e = n('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: a + "px" }))
            : 0 === (e = t.find(".swiper-cube-shadow")).length &&
              ((e = n('<div class="swiper-cube-shadow"></div>')), t.append(e)));
        for (var u = 0; u < s.length; u += 1) {
          var v = s.eq(u),
            f = u;
          p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
            g = Math.floor(m / 360);
          o && ((m = -m), (g = Math.floor(-m / 360)));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
          f % 4 == 0
            ? ((w = 4 * -g * l), (x = 0))
            : (f - 1) % 4 == 0
            ? ((w = 0), (x = 4 * -g * l))
            : (f - 2) % 4 == 0
            ? ((w = l + 4 * g * l), (x = l))
            : (f - 3) % 4 == 0 && ((w = -l), (x = 3 * l + 4 * l * g)),
            o && (w = -w),
            h || ((y = w), (w = 0));
          var E =
            "rotateX(" +
            (h ? 0 : -m) +
            "deg) rotateY(" +
            (h ? m : 0) +
            "deg) translate3d(" +
            w +
            "px, " +
            y +
            "px, " +
            x +
            "px)";
          if (
            (b <= 1 &&
              b > -1 &&
              ((c = 90 * f + 90 * b), o && (c = 90 * -f - 90 * b)),
            v.transform(E),
            d.slideShadows)
          ) {
            var T = h
                ? v.find(".swiper-slide-shadow-left")
                : v.find(".swiper-slide-shadow-top"),
              S = h
                ? v.find(".swiper-slide-shadow-right")
                : v.find(".swiper-slide-shadow-bottom");
            0 === T.length &&
              ((T = n(
                '<div class="swiper-slide-shadow-' +
                  (h ? "left" : "top") +
                  '"></div>'
              )),
              v.append(T)),
              0 === S.length &&
                ((S = n(
                  '<div class="swiper-slide-shadow-' +
                    (h ? "right" : "bottom") +
                    '"></div>'
                )),
                v.append(S)),
              T.length && (T[0].style.opacity = Math.max(-b, 0)),
              S.length && (S[0].style.opacity = Math.max(b, 0));
          }
        }
        if (
          (i.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px",
          }),
          d.shadow)
        )
          if (h)
            e.transform(
              "translate3d(0px, " +
                (a / 2 + d.shadowOffset) +
                "px, " +
                -a / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                d.shadowScale +
                ")"
            );
          else {
            var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
              M =
                1.5 -
                (Math.sin((2 * C * Math.PI) / 360) / 2 +
                  Math.cos((2 * C * Math.PI) / 360) / 2),
              P = d.shadowScale,
              z = d.shadowScale / M,
              k = d.shadowOffset;
            e.transform(
              "scale3d(" +
                P +
                ", 1, " +
                z +
                ") translate3d(0px, " +
                (r / 2 + k) +
                "px, " +
                -r / 2 / z +
                "px) rotateX(-90deg)"
            );
          }
        var $ = _.isSafari || _.isUiWebView ? -l / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            $ +
            "px) rotateX(" +
            (this.isHorizontal() ? 0 : c) +
            "deg) rotateY(" +
            (this.isHorizontal() ? -c : 0) +
            "deg)"
        );
      },
      setTransition: function (e) {
        var t = this.$el;
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            t.find(".swiper-cube-shadow").transition(e);
      },
    },
    we = {
      setTranslate: function () {
        for (
          var e = this.slides, t = this.rtlTranslate, i = 0;
          i < e.length;
          i += 1
        ) {
          var s = e.eq(i),
            a = s[0].progress;
          this.params.flipEffect.limitRotation &&
            (a = Math.max(Math.min(s[0].progress, 1), -1));
          var r = -180 * a,
            o = 0,
            l = -s[0].swiperSlideOffset,
            d = 0;
          if (
            (this.isHorizontal()
              ? t && (r = -r)
              : ((d = l), (l = 0), (o = -r), (r = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length),
            this.params.flipEffect.slideShadows)
          ) {
            var h = this.isHorizontal()
                ? s.find(".swiper-slide-shadow-left")
                : s.find(".swiper-slide-shadow-top"),
              p = this.isHorizontal()
                ? s.find(".swiper-slide-shadow-right")
                : s.find(".swiper-slide-shadow-bottom");
            0 === h.length &&
              ((h = n(
                '<div class="swiper-slide-shadow-' +
                  (this.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              s.append(h)),
              0 === p.length &&
                ((p = n(
                  '<div class="swiper-slide-shadow-' +
                    (this.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                s.append(p)),
              h.length && (h[0].style.opacity = Math.max(-a, 0)),
              p.length && (p[0].style.opacity = Math.max(a, 0));
          }
          s.transform(
            "translate3d(" +
              l +
              "px, " +
              d +
              "px, 0px) rotateX(" +
              o +
              "deg) rotateY(" +
              r +
              "deg)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;
        if (
          (i
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          i.eq(s).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              (r = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                i < e.length;
                i += 1
              )
                a.trigger(e[i]);
            }
          });
        }
      },
    },
    ye = {
      setTranslate: function () {
        for (
          var e = this.width,
            t = this.height,
            i = this.slides,
            s = this.$wrapperEl,
            a = this.slidesSizesGrid,
            r = this.params.coverflowEffect,
            o = this.isHorizontal(),
            l = this.translate,
            d = o ? e / 2 - l : t / 2 - l,
            p = o ? r.rotate : -r.rotate,
            c = r.depth,
            u = 0,
            v = i.length;
          u < v;
          u += 1
        ) {
          var f = i.eq(u),
            m = a[u],
            g = ((d - f[0].swiperSlideOffset - m / 2) / m) * r.modifier,
            b = o ? p * g : 0,
            w = o ? 0 : p * g,
            y = -c * Math.abs(g),
            x = r.stretch;
          "string" == typeof x &&
            -1 !== x.indexOf("%") &&
            (x = (parseFloat(r.stretch) / 100) * m);
          var E = o ? 0 : x * g,
            T = o ? x * g : 0;
          Math.abs(T) < 0.001 && (T = 0),
            Math.abs(E) < 0.001 && (E = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(b) < 0.001 && (b = 0),
            Math.abs(w) < 0.001 && (w = 0);
          var S =
            "translate3d(" +
            T +
            "px," +
            E +
            "px," +
            y +
            "px)  rotateX(" +
            w +
            "deg) rotateY(" +
            b +
            "deg)";
          if (
            (f.transform(S),
            (f[0].style.zIndex = 1 - Math.abs(Math.round(g))),
            r.slideShadows)
          ) {
            var C = o
                ? f.find(".swiper-slide-shadow-left")
                : f.find(".swiper-slide-shadow-top"),
              M = o
                ? f.find(".swiper-slide-shadow-right")
                : f.find(".swiper-slide-shadow-bottom");
            0 === C.length &&
              ((C = n(
                '<div class="swiper-slide-shadow-' +
                  (o ? "left" : "top") +
                  '"></div>'
              )),
              f.append(C)),
              0 === M.length &&
                ((M = n(
                  '<div class="swiper-slide-shadow-' +
                    (o ? "right" : "bottom") +
                    '"></div>'
                )),
                f.append(M)),
              C.length && (C[0].style.opacity = g > 0 ? g : 0),
              M.length && (M[0].style.opacity = -g > 0 ? -g : 0);
          }
        }
        (h.pointerEvents || h.prefixedPointerEvents) &&
          (s[0].style.perspectiveOrigin = d + "px 50%");
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    },
    xe = {
      init: function () {
        var e = this.params.thumbs,
          t = this.constructor;
        e.swiper instanceof t
          ? ((this.thumbs.swiper = e.swiper),
            d.extend(this.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            d.extend(this.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }))
          : d.isObject(e.swiper) &&
            ((this.thumbs.swiper = new t(
              d.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              })
            )),
            (this.thumbs.swiperCreated = !0)),
          this.thumbs.swiper.$el.addClass(
            this.params.thumbs.thumbsContainerClass
          ),
          this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
      },
      onThumbClick: function () {
        var e = this.thumbs.swiper;
        if (e) {
          var t = e.clickedIndex,
            i = e.clickedSlide;
          if (
            !(
              (i && n(i).hasClass(this.params.thumbs.slideThumbActiveClass)) ||
              null == t
            )
          ) {
            var s;
            if (
              ((s = e.params.loop
                ? parseInt(
                    n(e.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : t),
              this.params.loop)
            ) {
              var a = this.activeIndex;
              this.slides.eq(a).hasClass(this.params.slideDuplicateClass) &&
                (this.loopFix(),
                (this._clientLeft = this.$wrapperEl[0].clientLeft),
                (a = this.activeIndex));
              var r = this.slides
                  .eq(a)
                  .prevAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index(),
                o = this.slides
                  .eq(a)
                  .nextAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index();
              s = void 0 === r ? o : void 0 === o ? r : o - a < a - r ? o : r;
            }
            this.slideTo(s);
          }
        }
      },
      update: function (e) {
        var t = this.thumbs.swiper;
        if (t) {
          var i =
              "auto" === t.params.slidesPerView
                ? t.slidesPerViewDynamic()
                : t.params.slidesPerView,
            s = this.params.thumbs.autoScrollOffset,
            a = s && !t.params.loop;
          if (this.realIndex !== t.realIndex || a) {
            var r,
              n,
              o = t.activeIndex;
            if (t.params.loop) {
              t.slides.eq(o).hasClass(t.params.slideDuplicateClass) &&
                (t.loopFix(),
                (t._clientLeft = t.$wrapperEl[0].clientLeft),
                (o = t.activeIndex));
              var l = t.slides
                  .eq(o)
                  .prevAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                  .eq(0)
                  .index(),
                d = t.slides
                  .eq(o)
                  .nextAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                  .eq(0)
                  .index();
              (r =
                void 0 === l
                  ? d
                  : void 0 === d
                  ? l
                  : d - o == o - l
                  ? o
                  : d - o < o - l
                  ? d
                  : l),
                (n = this.activeIndex > this.previousIndex ? "next" : "prev");
            } else
              n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
            a && (r += "next" === n ? s : -1 * s),
              t.visibleSlidesIndexes &&
                t.visibleSlidesIndexes.indexOf(r) < 0 &&
                (t.params.centeredSlides
                  ? (r =
                      r > o
                        ? r - Math.floor(i / 2) + 1
                        : r + Math.floor(i / 2) - 1)
                  : r > o && (r = r - i + 1),
                t.slideTo(r, e ? 0 : void 0));
          }
          var h = 1,
            p = this.params.thumbs.slideThumbActiveClass;
          if (
            (this.params.slidesPerView > 1 &&
              !this.params.centeredSlides &&
              (h = this.params.slidesPerView),
            this.params.thumbs.multipleActiveThumbs || (h = 1),
            (h = Math.floor(h)),
            t.slides.removeClass(p),
            t.params.loop || (t.params.virtual && t.params.virtual.enabled))
          )
            for (var c = 0; c < h; c += 1)
              t.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (this.realIndex + c) + '"]'
                )
                .addClass(p);
          else
            for (var u = 0; u < h; u += 1)
              t.slides.eq(this.realIndex + u).addClass(p);
        }
      },
    },
    Ee = [
      K,
      U,
      Z,
      Q,
      ee,
      ie,
      ae,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container",
          },
        },
        create: function () {
          d.extend(this, {
            mousewheel: {
              enabled: !1,
              enable: re.enable.bind(this),
              disable: re.disable.bind(this),
              handle: re.handle.bind(this),
              handleMouseEnter: re.handleMouseEnter.bind(this),
              handleMouseLeave: re.handleMouseLeave.bind(this),
              animateSlider: re.animateSlider.bind(this),
              releaseScroll: re.releaseScroll.bind(this),
              lastScrollTime: d.now(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
            },
          });
        },
        on: {
          init: function () {
            !this.params.mousewheel.enabled &&
              this.params.cssMode &&
              this.mousewheel.disable(),
              this.params.mousewheel.enabled && this.mousewheel.enable();
          },
          destroy: function () {
            this.params.cssMode && this.mousewheel.enable(),
              this.mousewheel.enabled && this.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          d.extend(this, {
            navigation: {
              init: ne.init.bind(this),
              update: ne.update.bind(this),
              destroy: ne.destroy.bind(this),
              onNextClick: ne.onNextClick.bind(this),
              onPrevClick: ne.onPrevClick.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.navigation.init(), this.navigation.update();
          },
          toEdge: function () {
            this.navigation.update();
          },
          fromEdge: function () {
            this.navigation.update();
          },
          destroy: function () {
            this.navigation.destroy();
          },
          click: function (e) {
            var t,
              i = this.navigation,
              s = i.$nextEl,
              a = i.$prevEl;
            !this.params.navigation.hideOnClick ||
              n(e.target).is(a) ||
              n(e.target).is(s) ||
              (s
                ? (t = s.hasClass(this.params.navigation.hiddenClass))
                : a && (t = a.hasClass(this.params.navigation.hiddenClass)),
              !0 === t
                ? this.emit("navigationShow", this)
                : this.emit("navigationHide", this),
              s && s.toggleClass(this.params.navigation.hiddenClass),
              a && a.toggleClass(this.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          d.extend(this, {
            pagination: {
              init: oe.init.bind(this),
              render: oe.render.bind(this),
              update: oe.update.bind(this),
              destroy: oe.destroy.bind(this),
              dynamicBulletIndex: 0,
            },
          });
        },
        on: {
          init: function () {
            this.pagination.init(),
              this.pagination.render(),
              this.pagination.update();
          },
          activeIndexChange: function () {
            (this.params.loop || void 0 === this.snapIndex) &&
              this.pagination.update();
          },
          snapIndexChange: function () {
            this.params.loop || this.pagination.update();
          },
          slidesLengthChange: function () {
            this.params.loop &&
              (this.pagination.render(), this.pagination.update());
          },
          snapGridLengthChange: function () {
            this.params.loop ||
              (this.pagination.render(), this.pagination.update());
          },
          destroy: function () {
            this.pagination.destroy();
          },
          click: function (e) {
            this.params.pagination.el &&
              this.params.pagination.hideOnClick &&
              this.pagination.$el.length > 0 &&
              !n(e.target).hasClass(this.params.pagination.bulletClass) &&
              (!0 ===
              this.pagination.$el.hasClass(this.params.pagination.hiddenClass)
                ? this.emit("paginationShow", this)
                : this.emit("paginationHide", this),
              this.pagination.$el.toggleClass(
                this.params.pagination.hiddenClass
              ));
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create: function () {
          d.extend(this, {
            scrollbar: {
              init: le.init.bind(this),
              destroy: le.destroy.bind(this),
              updateSize: le.updateSize.bind(this),
              setTranslate: le.setTranslate.bind(this),
              setTransition: le.setTransition.bind(this),
              enableDraggable: le.enableDraggable.bind(this),
              disableDraggable: le.disableDraggable.bind(this),
              setDragPosition: le.setDragPosition.bind(this),
              getPointerPosition: le.getPointerPosition.bind(this),
              onDragStart: le.onDragStart.bind(this),
              onDragMove: le.onDragMove.bind(this),
              onDragEnd: le.onDragEnd.bind(this),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          });
        },
        on: {
          init: function () {
            this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate();
          },
          update: function () {
            this.scrollbar.updateSize();
          },
          resize: function () {
            this.scrollbar.updateSize();
          },
          observerUpdate: function () {
            this.scrollbar.updateSize();
          },
          setTranslate: function () {
            this.scrollbar.setTranslate();
          },
          setTransition: function (e) {
            this.scrollbar.setTransition(e);
          },
          destroy: function () {
            this.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function () {
          d.extend(this, {
            parallax: {
              setTransform: de.setTransform.bind(this),
              setTranslate: de.setTranslate.bind(this),
              setTransition: de.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.parallax.enabled &&
              ((this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          init: function () {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTranslate: function () {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTransition: function (e) {
            this.params.parallax.enabled && this.parallax.setTransition(e);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create: function () {
          var e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              },
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
            .split(" ")
            .forEach(function (i) {
              t[i] = he[i].bind(e);
            }),
            d.extend(e, { zoom: t });
          var i = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: function () {
              return i;
            },
            set: function (t) {
              if (i !== t) {
                var s = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  a = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0;
                e.emit("zoomChange", t, s, a);
              }
              i = t;
            },
          });
        },
        on: {
          init: function () {
            this.params.zoom.enabled && this.zoom.enable();
          },
          destroy: function () {
            this.zoom.disable();
          },
          touchStart: function (e) {
            this.zoom.enabled && this.zoom.onTouchStart(e);
          },
          touchEnd: function (e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e);
          },
          doubleTap: function (e) {
            this.params.zoom.enabled &&
              this.zoom.enabled &&
              this.params.zoom.toggle &&
              this.zoom.toggle(e);
          },
          transitionEnd: function () {
            this.zoom.enabled &&
              this.params.zoom.enabled &&
              this.zoom.onTransitionEnd();
          },
          slideChange: function () {
            this.zoom.enabled &&
              this.params.zoom.enabled &&
              this.params.cssMode &&
              this.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function () {
          d.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: pe.load.bind(this),
              loadInSlide: pe.loadInSlide.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.lazy.enabled &&
              this.params.preloadImages &&
              (this.params.preloadImages = !1);
          },
          init: function () {
            this.params.lazy.enabled &&
              !this.params.loop &&
              0 === this.params.initialSlide &&
              this.lazy.load();
          },
          scroll: function () {
            this.params.freeMode &&
              !this.params.freeModeSticky &&
              this.lazy.load();
          },
          resize: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          scrollbarDragMove: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          transitionStart: function () {
            this.params.lazy.enabled &&
              (this.params.lazy.loadOnTransitionStart ||
                (!this.params.lazy.loadOnTransitionStart &&
                  !this.lazy.initialImageLoaded)) &&
              this.lazy.load();
          },
          transitionEnd: function () {
            this.params.lazy.enabled &&
              !this.params.lazy.loadOnTransitionStart &&
              this.lazy.load();
          },
          slideChange: function () {
            this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function () {
          d.extend(this, {
            controller: {
              control: this.params.controller.control,
              getInterpolateFunction: ce.getInterpolateFunction.bind(this),
              setTranslate: ce.setTranslate.bind(this),
              setTransition: ce.setTransition.bind(this),
            },
          });
        },
        on: {
          update: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          resize: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          observerUpdate: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          setTranslate: function (e, t) {
            this.controller.control && this.controller.setTranslate(e, t);
          },
          setTransition: function (e, t) {
            this.controller.control && this.controller.setTransition(e, t);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
          },
        },
        create: function () {
          var e = this;
          d.extend(e, {
            a11y: {
              liveRegion: n(
                '<span class="' +
                  e.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              ),
            },
          }),
            Object.keys(ue).forEach(function (t) {
              e.a11y[t] = ue[t].bind(e);
            });
        },
        on: {
          init: function () {
            this.params.a11y.enabled &&
              (this.a11y.init(), this.a11y.updateNavigation());
          },
          toEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          fromEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          paginationUpdate: function () {
            this.params.a11y.enabled && this.a11y.updatePagination();
          },
          destroy: function () {
            this.params.a11y.enabled && this.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create: function () {
          d.extend(this, {
            history: {
              init: ve.init.bind(this),
              setHistory: ve.setHistory.bind(this),
              setHistoryPopState: ve.setHistoryPopState.bind(this),
              scrollToSlide: ve.scrollToSlide.bind(this),
              destroy: ve.destroy.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.history.enabled && this.history.init();
          },
          destroy: function () {
            this.params.history.enabled && this.history.destroy();
          },
          transitionEnd: function () {
            this.history.initialized &&
              this.history.setHistory(
                this.params.history.key,
                this.activeIndex
              );
          },
          slideChange: function () {
            this.history.initialized &&
              this.params.cssMode &&
              this.history.setHistory(
                this.params.history.key,
                this.activeIndex
              );
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create: function () {
          d.extend(this, {
            hashNavigation: {
              initialized: !1,
              init: fe.init.bind(this),
              destroy: fe.destroy.bind(this),
              setHash: fe.setHash.bind(this),
              onHashCange: fe.onHashCange.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.init();
          },
          destroy: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.destroy();
          },
          transitionEnd: function () {
            this.hashNavigation.initialized && this.hashNavigation.setHash();
          },
          slideChange: function () {
            this.hashNavigation.initialized &&
              this.params.cssMode &&
              this.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          var e = this;
          d.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: me.run.bind(e),
              start: me.start.bind(e),
              stop: me.stop.bind(e),
              pause: me.pause.bind(e),
              onVisibilityChange: function () {
                "hidden" === document.visibilityState &&
                  e.autoplay.running &&
                  e.autoplay.pause(),
                  "visible" === document.visibilityState &&
                    e.autoplay.paused &&
                    (e.autoplay.run(), (e.autoplay.paused = !1));
              },
              onTransitionEnd: function (t) {
                e &&
                  !e.destroyed &&
                  e.$wrapperEl &&
                  t.target === this &&
                  (e.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    e.autoplay.onTransitionEnd
                  ),
                  e.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    e.autoplay.onTransitionEnd
                  ),
                  (e.autoplay.paused = !1),
                  e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
              },
            },
          });
        },
        on: {
          init: function () {
            this.params.autoplay.enabled &&
              (this.autoplay.start(),
              document.addEventListener(
                "visibilitychange",
                this.autoplay.onVisibilityChange
              ));
          },
          beforeTransitionStart: function (e, t) {
            this.autoplay.running &&
              (t || !this.params.autoplay.disableOnInteraction
                ? this.autoplay.pause(e)
                : this.autoplay.stop());
          },
          sliderFirstMove: function () {
            this.autoplay.running &&
              (this.params.autoplay.disableOnInteraction
                ? this.autoplay.stop()
                : this.autoplay.pause());
          },
          touchEnd: function () {
            this.params.cssMode &&
              this.autoplay.paused &&
              !this.params.autoplay.disableOnInteraction &&
              this.autoplay.run();
          },
          destroy: function () {
            this.autoplay.running && this.autoplay.stop(),
              document.removeEventListener(
                "visibilitychange",
                this.autoplay.onVisibilityChange
              );
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          d.extend(this, {
            fadeEffect: {
              setTranslate: ge.setTranslate.bind(this),
              setTransition: ge.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            if ("fade" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "fade");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              d.extend(this.params, e), d.extend(this.originalParams, e);
            }
          },
          setTranslate: function () {
            "fade" === this.params.effect && this.fadeEffect.setTranslate();
          },
          setTransition: function (e) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          d.extend(this, {
            cubeEffect: {
              setTranslate: be.setTranslate.bind(this),
              setTransition: be.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            if ("cube" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "cube"),
                this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              d.extend(this.params, e), d.extend(this.originalParams, e);
            }
          },
          setTranslate: function () {
            "cube" === this.params.effect && this.cubeEffect.setTranslate();
          },
          setTransition: function (e) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          d.extend(this, {
            flipEffect: {
              setTranslate: we.setTranslate.bind(this),
              setTransition: we.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            if ("flip" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "flip"),
                this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              d.extend(this.params, e), d.extend(this.originalParams, e);
            }
          },
          setTranslate: function () {
            "flip" === this.params.effect && this.flipEffect.setTranslate();
          },
          setTransition: function (e) {
            "flip" === this.params.effect && this.flipEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          d.extend(this, {
            coverflowEffect: {
              setTranslate: ye.setTranslate.bind(this),
              setTransition: ye.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            "coverflow" === this.params.effect &&
              (this.classNames.push(
                this.params.containerModifierClass + "coverflow"
              ),
              this.classNames.push(this.params.containerModifierClass + "3d"),
              (this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function () {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTranslate();
          },
          setTransition: function (e) {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTransition(e);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create: function () {
          d.extend(this, {
            thumbs: {
              swiper: null,
              init: xe.init.bind(this),
              update: xe.update.bind(this),
              onThumbClick: xe.onThumbClick.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this.params.thumbs;
            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
          },
          slideChange: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          update: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          resize: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          observerUpdate: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          setTransition: function (e) {
            var t = this.thumbs.swiper;
            t && t.setTransition(e);
          },
          beforeDestroy: function () {
            var e = this.thumbs.swiper;
            e && this.thumbs.swiperCreated && e && e.destroy();
          },
        },
      },
    ];
  return (
    void 0 === j.use &&
      ((j.use = j.Class.use), (j.installModule = j.Class.installModule)),
    j.use(Ee),
    j
  );
});

/*! Magnific Popup - v1.1.0 - 2016-02-20*/
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/*Font Awesome*/
window.FontAwesomeKitConfig = {
  asyncLoading: { enabled: false },
  autoA11y: { enabled: true },
  baseUrl: "https://kit-free.fontawesome.com",
  detectConflictsUntil: null,
  license: "free",
  method: "css",
  minify: { enabled: true },
  v4FontFaceShim: { enabled: true },
  v4shim: { enabled: true },
  version: "latest",
};
!(function () {
  function r(e) {
    var t,
      n = [],
      i = document,
      o = i.documentElement.doScroll,
      r = "DOMContentLoaded",
      a = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(i.readyState);
    a ||
      i.addEventListener(
        r,
        (t = function () {
          for (i.removeEventListener(r, t), a = 1; (t = n.shift()); ) t();
        })
      ),
      a ? setTimeout(e, 0) : n.push(e);
  }
  !(function () {
    if (
      !(void 0 === window.Element || "classList" in document.documentElement)
    ) {
      var e,
        t,
        n,
        i = Array.prototype,
        o = i.push,
        r = i.splice,
        a = i.join;
      (d.prototype = {
        add: function (e) {
          this.contains(e) ||
            (o.call(this, e), (this.el.className = this.toString()));
        },
        contains: function (e) {
          return -1 != this.el.className.indexOf(e);
        },
        item: function (e) {
          return this[e] || null;
        },
        remove: function (e) {
          if (this.contains(e)) {
            for (var t = 0; t < this.length && this[t] != e; t++);
            r.call(this, t, 1), (this.el.className = this.toString());
          }
        },
        toString: function () {
          return a.call(this, " ");
        },
        toggle: function (e) {
          return (
            this.contains(e) ? this.remove(e) : this.add(e), this.contains(e)
          );
        },
      }),
        (window.DOMTokenList = d),
        (e = Element.prototype),
        (t = "classList"),
        (n = function () {
          return new d(this);
        }),
        Object.defineProperty
          ? Object.defineProperty(e, t, { get: n })
          : e.__defineGetter__(t, n);
    }
    function d(e) {
      for (
        var t = (this.el = e).className.replace(/^\s+|\s+$/g, "").split(/\s+/),
          n = 0;
        n < t.length;
        n++
      )
        o.call(this, t[n]);
    }
  })();
  function a(e) {
    var t, n, i, o;
    (prefixesArray = e || ["fa"]),
      (prefixesSelectorString = "." + Array.prototype.join.call(e, ",.")),
      (t = document.querySelectorAll(prefixesSelectorString)),
      Array.prototype.forEach.call(t, function (e) {
        (n = e.getAttribute("title")),
          e.setAttribute("aria-hidden", "true"),
          (i =
            !e.nextElementSibling ||
            !e.nextElementSibling.classList.contains("sr-only")),
          n &&
            i &&
            (((o = document.createElement("span")).innerHTML = n),
            o.classList.add("sr-only"),
            e.parentNode.insertBefore(o, e.nextSibling));
      });
  }
  var d = function (e, t) {
      var n = document.createElement("link");
      (n.href = e),
        (n.media = "all"),
        (n.rel = "stylesheet"),
        t &&
          t.detectingConflicts &&
          t.detectionIgnoreAttr &&
          n.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),
        document.getElementsByTagName("head")[0].appendChild(n);
    },
    c = function (e, t) {
      !(function (e, t) {
        var n,
          i = (t && t.before) || void 0,
          o = (t && t.media) || void 0,
          r = window.document,
          a = r.createElement("link");
        if (
          (t &&
            t.detectingConflicts &&
            t.detectionIgnoreAttr &&
            a.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),
          i)
        )
          n = i;
        else {
          var d = (r.body || r.getElementsByTagName("head")[0]).childNodes;
          n = d[d.length - 1];
        }
        var c = r.styleSheets;
        (a.rel = "stylesheet"),
          (a.href = e),
          (a.media = "only x"),
          (function e(t) {
            if (r.body) return t();
            setTimeout(function () {
              e(t);
            });
          })(function () {
            n.parentNode.insertBefore(a, i ? n : n.nextSibling);
          });
        var s = function (e) {
          for (var t = a.href, n = c.length; n--; )
            if (c[n].href === t) return e();
          setTimeout(function () {
            s(e);
          });
        };
        function l() {
          a.addEventListener && a.removeEventListener("load", l),
            (a.media = o || "all");
        }
        a.addEventListener && a.addEventListener("load", l),
          (a.onloadcssdefined = s)(l);
      })(e, t);
    },
    e = function (e, t, n) {
      var i = t && void 0 !== t.autoFetchSvg ? t.autoFetchSvg : void 0,
        o = t && void 0 !== t.async ? t.async : void 0,
        r = t && void 0 !== t.autoA11y ? t.autoA11y : void 0,
        a = document.createElement("script"),
        d = document.scripts[0];
      (a.src = e),
        void 0 !== r && a.setAttribute("data-auto-a11y", r ? "true" : "false"),
        i &&
          (a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),
          a.setAttribute("data-fetch-svg-from", t.fetchSvgFrom)),
        o && a.setAttributeNode(document.createAttribute("defer")),
        n &&
          n.detectingConflicts &&
          n.detectionIgnoreAttr &&
          a.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)),
        d.parentNode.appendChild(a);
    };
  function s(e, t) {
    var n = (t && t.addOn) || "",
      i = (t && t.baseFilename) || e.license + n,
      o = t && t.minify ? ".min" : "",
      r = (t && t.fileSuffix) || e.method,
      a = (t && t.subdir) || e.method;
    return (
      e.baseUrl +
      "/releases/" +
      ("latest" === e.version ? "latest" : "v".concat(e.version)) +
      "/" +
      a +
      "/" +
      i +
      o +
      "." +
      r
    );
  }
  var t, n, i, o, l;
  try {
    if (window.FontAwesomeKitConfig) {
      var u,
        f = window.FontAwesomeKitConfig,
        m = {
          detectingConflicts:
            f.detectConflictsUntil &&
            new Date() <= new Date(f.detectConflictsUntil),
          detectionIgnoreAttr: "data-fa-detection-ignore",
          detectionTimeoutAttr: "data-fa-detection-timeout",
          detectionTimeout: null,
        };
      "js" === f.method &&
        ((o = m),
        (l = {
          async: (i = f).asyncLoading.enabled,
          autoA11y: i.autoA11y.enabled,
        }),
        "pro" === i.license &&
          ((l.autoFetchSvg = !0),
          (l.fetchSvgFrom =
            i.baseUrl +
            "/releases/" +
            ("latest" === i.version ? "latest" : "v".concat(i.version)) +
            "/svgs")),
        i.v4shim.enabled &&
          e(s(i, { addOn: "-v4-shims", minify: i.minify.enabled })),
        e(s(i, { minify: i.minify.enabled }), l, o)),
        "css" === f.method &&
          (function (e, t) {
            var n,
              i = a.bind(a, ["fa", "fab", "fas", "far", "fal", "fad"]);
            e.autoA11y.enabled &&
              (r(i),
              (n = i),
              "undefined" != typeof MutationObserver &&
                new MutationObserver(n).observe(document, {
                  childList: !0,
                  subtree: !0,
                })),
              e.v4shim.enabled &&
                (e.license,
                e.asyncLoading.enabled
                  ? c(s(e, { addOn: "-v4-shims", minify: e.minify.enabled }), t)
                  : d(
                      s(e, { addOn: "-v4-shims", minify: e.minify.enabled }),
                      t
                    ));
            e.v4FontFaceShim.enabled &&
              (e.asyncLoading.enabled
                ? c(
                    s(e, { addOn: "-v4-font-face", minify: e.minify.enabled }),
                    t
                  )
                : d(
                    s(e, { addOn: "-v4-font-face", minify: e.minify.enabled }),
                    t
                  ));
            var o = s(e, { minify: e.minify.enabled });
            e.asyncLoading.enabled ? c(o, t) : d(o, t);
          })(f, m),
        m.detectingConflicts &&
          ((u = document.currentScript.getAttribute(m.detectionTimeoutAttr)) &&
            (m.detectionTimeout = u),
          document.currentScript.setAttributeNode(
            document.createAttribute(m.detectionIgnoreAttr)
          ),
          (t = f),
          (n = m),
          r(function () {
            var e = document.createElement("script");
            n &&
              n.detectionIgnoreAttr &&
              e.setAttributeNode(
                document.createAttribute(n.detectionIgnoreAttr)
              ),
              n &&
                n.detectionTimeoutAttr &&
                n.detectionTimeout &&
                e.setAttribute(n.detectionTimeoutAttr, n.detectionTimeout),
              (e.src = s(t, {
                baseFilename: "conflict-detection",
                fileSuffix: "js",
                subdir: "js",
                minify: t.minify.enabled,
              })),
              (e.async = !0),
              document.body.appendChild(e);
          }));
    }
  } catch (e) {}
})();

/*! Isotope PACKAGED v3.0.6*/
!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))),
          (s.isBoxSizeOuter = r),
          i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf("%") != -1 && (s = (s / 100) * a.width),
          n.indexOf("%") != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning))
          return void this.layoutPosition();
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({
            to: a,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + n(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });
