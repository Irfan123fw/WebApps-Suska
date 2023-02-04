(self.webpackChunkidlefinance = self.webpackChunkidlefinance || []).push([
  [177], {
    97016: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.BreakpointType = void 0;
      const s = i(70655).__importDefault(i(73112));
      var a;
      ! function (t) {
        t.Desktop = "Desktop", t.Tablet = "Tablet", t.Mobile = "Mobile"
      }(a = e.BreakpointType || (e.BreakpointType = {}));
      const o = {
        Desktop: {
          id: 3,
          name: a.Desktop,
          width: 1440,
          height: 800,
          mediaQuery: "(min-width: 1025px)"
        },
        Tablet: {
          id: 2,
          name: "Tablet",
          width: 768,
          height: 1024,
          mediaQuery: "(min-width: 481px) and (max-width: 1024px)"
        },
        Mobile: {
          id: 1,
          name: "Mobile",
          width: 320,
          height: 1024,
          mediaQuery: "(max-width: 480px)"
        }
      };
      s.default.registerBreakpoint(o.Desktop), s.default.registerBreakpoint(o.Tablet), s.default.registerBreakpoint(o.Mobile), e.default = {
        get All() {
          return o
        },
        get Current() {
          return s.default.Current
        },
        isActive(...t) {
          return t.includes(this.Current.breakpoint.id)
        }
      }
    },
    67823: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      const s = i(70655),
        a = s.__importDefault(i(66358)),
        o = s.__importDefault(i(11248)),
        n = s.__importDefault(i(2998)),
        r = i(95781).createLogger("[LottieComponent]");
      let l;
      class u extends n.default {
        constructor() {
          super(...arguments), this._isCompleted = !0, this._isLoaded = !1, this._playPending = !1, this._playingPromise = null, this._play = () => {
            this._anim && (this._isLoaded ? (this._isCompleted && (this._anim.goToAndStop(0), this._isCompleted = !1), this._anim.play()) : this._playPending = !0)
          }
        }
        get animation() {
          return this._anim
        }
        get priority() {
          return this._priority || 3
        }
        get isPlaying() {
          return this.animation.isLoaded && !this.animation.isPaused
        }
        async doSetup() {
          this.useDefaultConfig({
            register: !0,
            loop: !0,
            hideOnDeactivate: !0,
            autoplay: !0,
            playOnActivate: !0
          }), this._params = {
            container: this.element,
            renderer: this._config.renderer || "svg",
            loop: this._config.loop,
            autoplay: this._config.autoplay,
            path: this.element.dataset.lottiePath,
            rendererSettings: this._config.rendererSettings
          }, this._config.hideOnDeactivate ? a.default.set(this.element, {
            autoAlpha: 0
          }) : a.default.set(this.element, {
            autoAlpha: 1
          }), o.default.setQuality("low"), await super.doSetup()
        }
        playAnimation() {
          return this._playingPromise || (this._playingPromise = new Promise((t => {
            this._anim.addEventListener("complete", (() => {
              this._playingPromise = null, t()
            })), this._anim.play()
          }))), this._playingPromise
        }
        async _doLoading() {
          if (this._lottie = await async function () {
              return l || (r.log("Loading library..."), l = Promise.resolve().then((() => s.__importStar(i(11248)))), l.then((() => r.log("Library has been loaded")))), l
            }(), this._anim = this._lottie.loadAnimation(this._params), this._anim.addEventListener("complete", (() => {
              this._isCompleted = !0
            })), this._anim.isLoaded) return this._isLoaded = !0, Promise.resolve();
          await new Promise((t => {
            this._anim.addEventListener("DOMLoaded", (() => {
              this._isLoaded = !0, this._playPending && (this._playPending = !1, setTimeout((() => {
                r.log("Play Pending", this)
              }), 500), this._anim.play()), t()
            }))
          }))
        }
        _stop() {
          var t;
          null === (t = this._anim) || void 0 === t || t.goToAndStop(0), this._isCompleted = !1
        }
        async _activate() {
          this._config.hideOnDeactivate && ("first" === this._config.hideOnDeactivate && this.wasActive || await this.showByAlpha()), this._config.playOnActivate && this._play()
        }
        async _deactivate() {
          !0 === this._config.hideOnDeactivate && await this.hideByAlpha(), this._config.playOnActivate && this._stop()
        }
        async showByAlpha() {
          var t;
          a.default.killTweensOf(this.element), await a.default.set(this.element, {
            autoAlpha: 1,
            delay: (null === (t = this.activationConfig) || void 0 === t ? void 0 : t.delay) || 0
          })
        }
        async hideByAlpha() {
          var t;
          a.default.killTweensOf(this.element), await a.default.set(this.element, {
            autoAlpha: 0,
            delay: (null === (t = this.activationConfig) || void 0 === t ? void 0 : t.delay) || 0
          })
        }
      }
      e.default = u
    },
    39692: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      const s = i(70655),
        a = s.__importDefault(i(95781)),
        o = i(90494),
        n = s.__importDefault(i(2998)),
        r = s.__importDefault(i(26398)),
        l = "lazy";

      function u(t, e) {
        let i = 0;
        t.srcSet || (t.srcSet = function (t) {
          const e = {};
          let i = Number.MAX_VALUE,
            s = null;
          return Object.keys(t.dataset).forEach((a => {
            if (/^src/.test(a)) {
              const o = +a.substr(3) || 0,
                n = t.dataset[a];
              e[o] = n, o < i && (s = n, i = o)
            }
          })), e[0] || (e[0] = s || "#"), e
        }(t));
        const s = t.srcSet;
        return Object.keys(s).forEach((t => {
          const s = +t;
          s >= i && e >= s && (i = s)
        })), s[i]
      }
      class h extends n.default {
        constructor(t) {
          null == t.register && (t.register = !0), super(t)
        }
        get video() {
          return this.element
        }
        async doSetup() {
          this._state = 0, this._requestedState = 0, this._placeHolder = this.element.parentElement.querySelector(".video-placeholder"), this._hasPlaceholder = null != this._placeHolder && this.element.classList.contains("has-placeholder-mobile"), this._hasPlaceholder || (this._usePlaceholder = !1), this._hasMixBlend = this.element.classList.contains("has-mix-blend"), this._placeHoldersLoaded = !1, this._sources = Array.from(this.element.querySelectorAll("source")), this._logId = this.element.id, await super.doSetup()
        }
        _checkIsSourceChanged(t = !1) {
          let e = !1;
          this.log("_checkIsSourceChanged", this.element, this._sources);
          for (let i = 0; i < this._sources.length; ++i) {
            const s = this._sources[i],
              a = u(s, this._widthVieport);
            if (this.log(`Changing source ${s.src} to ${a}`), s.targetSrc !== a) {
              if (!t) return !0;
              s.targetSrc = a, s.src = a, e = !0
            }
          }
          return e
        }
        async _enableVideo() {
          this._placeHolder && (this._placeHolder.hidden = !0, this.video.hidden = !1);
          const t = this._checkIsSourceChanged(!0);
          if (this.log("[VIDEO] Switching to Video, isChanged =", t), t) {
            this.video.classList.add(l);
            const t = new Promise((t => {
              const e = () => {
                this._state <= 1 && (this.video.removeEventListener("canplay", e), this._switchToState(2), t())
              };
              this.video.addEventListener("canplay", e), this.log("[VIDEO] Loading..."), this.video.load()
            }));
            await t
          }
          this.isActive && await this._switchToState(4)
        }
        async _enablePlaceholders() {
          this._placeHolder.hidden = !1, this.video.hidden = !0, await this._switchToState(3), this._placeHoldersLoaded || (this.log("Switching to Placeholders"), this._placeHolder.classList.add(l), new r.default({
            el: this._placeHolder,
            register: !0
          }), this._placeHoldersLoaded = !0)
        }
        async _switchToState(t) {
          if (t < 1) throw new Error("Invalid state");
          if (t > 2 && this._state < 2) return this._requestedState = t, void this.log("ignoring state =", t, " when current state =", this._state);
          if (t === this._state) return;
          if (this._changingState) return void(this._requestedState = t);
          switch (this._changingState = !0, t) {
            case 4:
              await this.video.play();
              break;
            case 3:
              this.video.pause(), this.log("paused");
              break;
            case 1:
              this.log("LOAD ALLOWED");
              break;
            case 2:
              this.log("LOADED");
              break;
            default:
              throw new Error("Unhandled targetState: " + t)
          }
          this._changingState = !1, this._state = t;
          const e = this._requestedState;
          this._requestedState = null, e && e !== this._state && this._switchToState(e)
        }
        async _load() {
          null != this._usePlaceholder ? this._usePlaceholder ? await this._enablePlaceholders() : await this._enableVideo() : this.log("Skipping load beacuse don't know about placeholder. Try to call resize first!")
        }
        async _doLoading() {
          await this._switchToState(1), await this._load()
        }
        scroll(t, e) {}
        resize(t, e) {
          const i = t <= 1024,
            s = !!(this._hasPlaceholder && i || this._hasMixBlend && !o.SUPPORT_MIX_BLEND);
          if (this._widthVieport = t, this._usePlaceholder === s) return !1 === this._usePlaceholder && this._state > 1 && this._checkIsSourceChanged() ? void this._doLoading() : void 0;
          this._usePlaceholder = s, this._state >= 1 && this._load()
        }
        _activate() {
          this.register(), this._switchToState(4)
        }
        _deactivate() {
          this._switchToState(3)
        }
        log(...t) {
          this._logId && a.default.log(`[VIDEO = ${this._logId}]`, ...t)
        }
      }
      e.default = h
    },
    82261: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      const s = i(70655).__importDefault(i(65155));
      class a extends s.default {
        constructor() {
          super(...arguments), this._scrollCoeffs = {
            down: {
              show: .3,
              hide: .5
            },
            up: {
              show: .3,
              hide: .3
            }
          }, this._scrollPosition = 0, this._isHero = !1
        }
        get page() {
          return this._config.page
        }
        get scrollCoeffs() {
          return this._scrollCoeffs
        }
        get scrollPosition() {
          return this._scrollPosition
        }
        get isHero() {
          return this._isHero
        }
        get show() {
          return this._show
        }
        get fallbackTreshold() {
          return 0
        }
        async doSetup() {
          this.element && this.element.style && (this.element.style.visibility = "visible"), await this.setupSection()
        }
        setupSection() {}
        resize(t, e) {}
        scroll(t, e) {
          const i = this.rect,
            s = this.page.height + i.height,
            a = s - i.bottom;
          this._scrollPosition = a / s
        }
        wheel(t, e) {}
        get animateOnSetup() {
          return !0
        }
        get logAnimation() {
          return !0
        }
      }
      e.default = a
    },
    65424: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.MyTransition = void 0;
      const s = i(70655).__importDefault(i(98595)),
        a = i(98595);
      e.default = function (t, e) {
        return new s.default(t, e)
      }, e.MyTransition = function (t, e) {
        const {
          bind: i
        } = a.EventInterface(t), {
          Move: s
        } = e, {
          list: o
        } = e.Elements;
        let n;

        function r() {
          o.style.transition = ""
        }
        return {
          mount: function () {
            i(o, "transitionend", (t => {
              t.target === o && n && (r(), n())
            }))
          },
          start: function (t, e) {
            const i = s.toPosition(t, !0);
            o.style.transition = "transform 833ms cubic-bezier(0.47, 0.00, 0.52, 1.00)", s.translate(i), n = e
          },
          cancel: r
        }
      }
    },
    37734: (t, e, i) => {
      "use strict";
      const s = i(70655);
      i(26024), i(15650);
      const a = s.__importDefault(i(99700)),
        o = s.__importDefault(i(67298)),
        n = s.__importDefault(i(71640)),
        r = s.__importDefault(i(52216)),
        l = s.__importDefault(i(50299)),
        u = s.__importDefault(i(23263)),
        h = s.__importDefault(i(11241)),
        d = s.__importDefault(i(77460)),
        c = s.__importDefault(i(38642)),
        _ = s.__importDefault(i(74859));
      class m extends a.default {
        constructor() {
          super(...arguments), this._sectionTypes = [o.default, n.default, d.default, r.default, l.default, u.default, h.default, c.default, _.default]
        }
        async setupPageAsync() {
          await super.setupPageAsync()
        }
        get sectionTypes() {
          return this._sectionTypes
        }
      }
      m.RunPage(m)
    },
    38642: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      const s = i(70655),
        a = s.__importDefault(i(82261)),
        o = s.__importDefault(i(97016)),
        n = s.__importDefault(i(66358)),
        r = i(21454);
      class l extends a.default {
        constructor() {
          super(...arguments), this._show = () => {
            if (this._animated) return;
            const t = {
                autoAlpha: 0,
                y: r.AnimationValues.distance * this._rem
              },
              e = {
                autoAlpha: 1,
                y: 0,
                duration: r.AnimationValues.duration,
                ease: r.AnimationValues.showEase,
                stagger: r.AnimationValues.stagger
              };
            return n.default.timeline({
              immediateRender: !1,
              force3d: !1,
              onStart: () => this._animated = !0
            }).fromTo(this._animationItem, t, e, 0)
          }
        }
        get _animationItem() {
          return this.element.querySelectorAll(".anim-item-js")
        }
        _setupAnimItems() {
          n.default.set([this._animationItem], {
            autoAlpha: 0
          })
        }
        async resize() {
          this._rem = o.default.Current.rem
        }
        async setupSection() {
          this._setupAnimItems()
        }
        _activate() {
          this._show()
        }
        _deactivate() {}
      }
      e.default = l
    },
    67298: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      const s = i(70655),
        a = s.__importDefault(i(97016)),
        o = s.__importDefault(i(82261)),
        n = s.__importDefault(i(66358)),
        r = s.__importDefault(i(1578)),
        l = i(21454),
        u = s.__importDefault(i(39692)),
        h = s.__importDefault(i(2615));
      n.default.registerPlugin(r.default);
      class d extends o.default {
        constructor() {
          super(...arguments), this._initialSetup = !0, this._titleLines = null, this._show = () => {
            if (this._animated) return;
            const t = {
                autoAlpha: 0,
                y: l.AnimationValues.distance * this._rem
              },
              e = {
                autoAlpha: 1,
                y: 0,
                duration: l.AnimationValues.duration,
                ease: l.AnimationValues.showEase,
                stagger: l.AnimationValues.stagger
              },
              i = l.AnimationValues.stagger * this._titleLines.length;
            return n.default.timeline({
              immediateRender: !1,
              force3d: !1,
              onStart: () => this._animated = !0
            }).fromTo(this._titleLines, t, e, 0).fromTo(this._animationItems, t, e, i).fromTo(this._discoverMore, t, e, i + l.AnimationValues.stagger)
          }
        }
        get _title() {
          return this.element.querySelector(".title-anim-js")
        }
        get _animationItems() {
          return this.element.querySelectorAll(".anim-item-js")
        }
        get _discoverMore() {
          return this.element.querySelector(".hero-discover-more")
        }
        async setupVideo() {
          this.element.querySelector(".video-js") && (this._video = await new u.default({
            el: this.element.querySelector(".video-js")
          }).setup())
        }
        _setupAnimItems() {
          this._splitText = new r.default(this._title, {
            type: "lines"
          }), this._titleLines = this._splitText.lines, n.default.set([this._titleLines, this._animationItems, this._discoverMore], {
            autoAlpha: 0
          })
        }
        async resize(t, e) {
          this._prevDevice = this._currentDevice, this._currentDevice = h.default(a.default), this._rem = a.default.Current.rem, this._currentDevice !== this._prevDevice && this._splitText.revert(), this._video && this._video.resize(t, e)
        }
        async setupSection() {
          this._initialSetup && (this._initialSetup = !1), this._setupAnimItems(), await this.setupVideo()
        }
        _activate() {
          this._video && this._video.activate(), this._show()
        }
        _deactivate() {}
      }
      e.default = d
    },
    52216: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      const s = i(70655),
        a = s.__importDefault(i(82261)),
        o = s.__importDefault(i(97016)),
        n = s.__importDefault(i(66358)),
        r = i(21454),
        l = s.__importDefault(i(67823));
      class u extends a.default {
        constructor() {
          super(...arguments), this._lottieIcons = [], this._show = () => {
            if (this._animated) return;
            let t = 0;
            const e = {
                autoAlpha: 0,
                y: r.AnimationValues.distance * this._rem
              },
              i = {
                autoAlpha: 1,
                y: 0,
                duration: r.AnimationValues.duration,
                ease: r.AnimationValues.showEase,
                stagger: r.AnimationValues.stagger
              },
              s = {
                autoAlpha: 1,
                y: 0,
                duration: r.AnimationValues.duration,
                ease: r.AnimationValues.showEase,
                stagger: {
                  each: r.AnimationValues.stagger,
                  onComplete: () => this._lottieIcons[t++].animation.play()
                }
              };
            return n.default.timeline({
              immediateRender: !1,
              force3d: !1,
              onStart: () => this._animated = !0
            }).fromTo(this._title, e, i, 0).fromTo(this._desc, e, i, r.AnimationValues.stagger).fromTo(this._cardIcon, e, s, 2 * r.AnimationValues.stagger).fromTo(this._cardTitle, e, i, 3 * r.AnimationValues.stagger).fromTo(this._cardDesc, e, i, 4 * r.AnimationValues.stagger)
          }
        }
        get _title() {
          return this.element.querySelector(".title-anim-js")
        }
        get _desc() {
          return this.element.querySelector(".desc-anim-js")
        }
        get _cardIcon() {
          return this.element.querySelectorAll(".card-icon-anim-js")
        }
        get _cardTitle() {
          return this.element.querySelectorAll(".card-title-anim-js")
        }
        get _cardDesc() {
          return this.element.querySelectorAll(".card-desc-anim-js")
        }
        async _setupLotties() {
          this.element.querySelectorAll(".logo-lottie").forEach((async t => {
            const e = await new l.default({
              el: t,
              autoplay: !1,
              renderer: "canvas",
              loop: !1,
              playOnActivate: !1
            }).setup();
            e.activate(), t.addEventListener("mouseenter", (() => {
              e.animation.isPaused && (e.animation.setDirection(1), e.animation.goToAndPlay(0, !0))
            })), this._lottieIcons.push(e)
          }))
        }
        _setupAnimItems() {
          n.default.set([this._title, this._desc, this._cardTitle, this._cardDesc, this._cardIcon], {
            autoAlpha: 0
          })
        }
        async resize() {
          this._rem = o.default.Current.rem
        }
        async setupSection() {
          this._setupLotties(), this._setupAnimItems()
        }
        _activate() {
          this._show()
        }
        _deactivate() {}
      }
      e.default = u
    },
    74859: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      const s = i(70655),
        a = s.__importDefault(i(82261)),
        o = s.__importDefault(i(97016)),
        n = s.__importDefault(i(66358)),
        r = i(21454);
      class l extends a.default {
        constructor() {
          super(...arguments), this._show = () => {
            if (this._animated) return;
            const t = {
                autoAlpha: 0,
                y: r.AnimationValues.distance * this._rem
              },
              e = {
                autoAlpha: 1,
                y: 0,
                duration: r.AnimationValues.duration,
                ease: r.AnimationValues.showEase,
                stagger: r.AnimationValues.stagger
              };
            return n.default.timeline({
              immediateRender: !1,
              force3d: !1,
              onStart: () => this._animated = !0
            }).fromTo(this._desktopAnimationItem, t, e, 0).fromTo(this._mobileAnimationItems, t, e, 0)
          }
        }
        get _desktopAnimationItem() {
          return this.element.querySelectorAll(".desktop-anim-item-js")
        }
        get _mobileAnimationItems() {
          return this.element.querySelectorAll(".mobile-anim-item-js")
        }
        _setupAnimItems() {
          n.default.set([this._desktopAnimationItem, this._mobileAnimationItems], {
            autoAlpha: 0
          })
        }
        async resize() {
          this._rem = o.default.Current.rem
        }
        async setupSection() {
          this._setupAnimItems()
        }
        _activate() {
          this._show()
        }
        _deactivate() {}
      }
      e.default = l
    },
    11241: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      const s = i(70655),
        a = s.__importDefault(i(82261)),
        o = s.__importDefault(i(97016)),
        n = s.__importDefault(i(66358)),
        r = i(21454),
        l = s.__importDefault(i(67823));
      class u extends a.default {
        constructor() {
          super(...arguments), this._lottieIcons = [], this._show = () => {
            if (this._animated) return;
            let t = 0;
            const e = {
                autoAlpha: 0,
                y: r.AnimationValues.distance * this._rem
              },
              i = {
                autoAlpha: 1,
                y: 0,
                duration: r.AnimationValues.duration,
                ease: r.AnimationValues.showEase,
                stagger: r.AnimationValues.stagger
              },
              s = {
                autoAlpha: 1,
                y: 0,
                duration: r.AnimationValues.duration,
                ease: r.AnimationValues.showEase,
                stagger: {
                  each: r.AnimationValues.stagger,
                  onComplete: () => this._lottieIcons[t++].animation.play()
                }
              };
            return n.default.timeline({
              immediateRender: !1,
              force3d: !1,
              onStart: () => this._animated = !0
            }).fromTo(this._subtitle, e, i, 0).fromTo(this._title, e, i, r.AnimationValues.stagger).fromTo(this._cardIcon, e, s, 2 * r.AnimationValues.stagger).fromTo(this._cardTitle, e, i, 3 * r.AnimationValues.stagger).fromTo(this._cardDesc, e, i, 4 * r.AnimationValues.stagger)
          }
        }
        get _subtitle() {
          return this.element.querySelector(".subtitle-anim-js")
        }
        get _title() {
          return this.element.querySelector(".title-anim-js")
        }
        get _cardTitle() {
          return this.element.querySelectorAll(".card-title-anim-js")
        }
        get _cardDesc() {
          return this.element.querySelectorAll(".card-desc-anim-js")
        }
        get _cardIcon() {
          return this.element.querySelectorAll(".card-icon-anim-js")
        }
        async _setupLotties() {
          this.element.querySelectorAll(".logo-lottie").forEach((async t => {
            const e = await new l.default({
              el: t,
              autoplay: !1,
              renderer: "canvas",
              loop: !1,
              playOnActivate: !1
            }).setup();
            e.activate(), t.addEventListener("mouseenter", (() => {
              e.animation.isPaused && (e.animation.setDirection(1), e.animation.goToAndPlay(0, !0))
            })), this._lottieIcons.push(e)
          }))
        }
        _setupAnimItems() {
          n.default.set([this._subtitle, this._title, this._cardTitle, this._cardDesc, this._cardIcon], {
            autoAlpha: 0
          })
        }
        async resize() {
          this._rem = o.default.Current.rem
        }
        async setupSection() {
          this._setupLotties(), this._setupAnimItems()
        }
        _activate() {
          this._show()
        }
        _deactivate() {}
      }
      e.default = u
    },
    71640: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      const s = i(70655),
        a = s.__importDefault(i(82261)),
        o = s.__importDefault(i(97016)),
        n = s.__importStar(i(65424)),
        r = s.__importDefault(i(66358)),
        l = i(21454),
        u = s.__importDefault(i(67823)),
        h = s.__importDefault(i(2615));
      class d extends a.default {
        constructor() {
          super(...arguments), this._cardLogos = [], this._show = () => {
            if (this._animated) return;
            const t = l.AnimationValues.distance * this._rem,
              e = {
                autoAlpha: 0,
                y: t
              },
              i = {
                autoAlpha: 1,
                y: 0,
                duration: l.AnimationValues.duration,
                ease: l.AnimationValues.showEase,
                stagger: l.AnimationValues.stagger
              };
            return r.default.timeline({
              immediateRender: !1,
              force3d: !1,
              onStart: () => this._animated = !0
            }).fromTo(this._subtitle, e, i, 0).fromTo(this._title, e, i, l.AnimationValues.stagger).fromTo(this._description, e, i, 2 * l.AnimationValues.stagger).fromTo(this._nav, e, i, 3 * l.AnimationValues.stagger).fromTo(this._cards, {
              y: t
            }, {
              y: 0,
              duration: l.AnimationValues.duration,
              ease: l.AnimationValues.showEase,
              stagger: l.AnimationValues.stagger
            }, 3 * l.AnimationValues.stagger)
          }
        }
        get _subtitle() {
          return this.element.querySelector(".subtitle-anim-js")
        }
        get _title() {
          return this.element.querySelector(".title-anim-js")
        }
        get _description() {
          return this.element.querySelector(".desc-anim-js")
        }
        get _cards() {
          return this.element.querySelectorAll(".card-anim-js")
        }
        get _nav() {
          return this.element.querySelector(".nav-anim-js")
        }
        get _discoverMore() {
          return document.body.querySelector(".hero-discover-more")
        }
        async _setupLotties() {
          this.element.querySelectorAll(".card-lottie").forEach((async t => {
            const e = t.querySelector(".logo-lottie"),
              i = t.querySelector(".logo");
            this._cardLogos.push(i);
            const s = await new u.default({
              el: e,
              autoplay: !1,
              renderer: "canvas",
              loop: !1,
              playOnActivate: !1
            }).setup();
            i.classList.add("hidden"), s.activate(), t.addEventListener("mouseenter", (() => {
              s.animation.setDirection(1), s.animation.play()
            })), t.addEventListener("mouseleave", (() => {
              s.animation.setDirection(-1), s.animation.play()
            }))
          }))
        }
        _setupSlider() {
          this.element.querySelector(".splide") && (this._slider = n.default(this.element.querySelector(".splide"), {
            type: "slide",
            arrows: !0,
            perPage: 2,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            breakpoints: {
              1024: {
                padding: {
                  left: 0,
                  right: 0
                }
              },
              480: {
                perPage: 1,
                padding: {
                  left: 0,
                  right: 0
                }
              }
            }
          }), this._slider.mount({}, n.MyTransition))
        }
        _setupAnimItems() {
          r.default.set([this._subtitle, this._title, this._description, this._nav], {
            autoAlpha: 0
          })
        }
        _hideDiscoverBtn() {
          r.default.killTweensOf([this._discoverMore]), r.default.to(this._discoverMore, {
            opacity: 0,
            pointerEvents: "none"
          })
        }
        async resize() {
          var t, e;
          this._prevDevice = this._currentDevice, this._currentDevice = h.default(o.default), this._rem = o.default.Current.rem, "desktop" !== this._currentDevice ? this._cardLogos.forEach((t => t.classList.remove("hidden"))) : this._cardLogos.forEach((t => t.classList.add("hidden"))), this._prevDevice !== this._currentDevice && "desktop" !== this._currentDevice && (null === (t = this._slider) || void 0 === t || t.destroy(), this._setupSlider()), this._prevDevice !== this._currentDevice && "desktop" === this._currentDevice && (null === (e = this._slider) || void 0 === e || e.destroy())
        }
        async setupSection() {
          this._currentDevice = h.default(o.default), "desktop" === this._currentDevice && this._setupLotties(), "desktop" !== this._currentDevice && this._setupSlider(), this._setupAnimItems()
        }
        _activate() {
          this._hideDiscoverBtn(), this._show()
        }
        _deactivate() {}
      }
      e.default = d
    },
    23263: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      const s = i(70655),
        a = s.__importDefault(i(73112)),
        o = s.__importDefault(i(82261)),
        n = s.__importDefault(i(97016)),
        r = s.__importDefault(i(66358)),
        l = i(21454),
        u = s.__importDefault(i(2615));
      class h extends o.default {
        constructor() {
          super(...arguments), this._initialSetup = !0, this._show = () => {
            if (this._animated) return;
            const t = {
                autoAlpha: 0,
                y: l.AnimationValues.distance * this._rem
              },
              e = {
                autoAlpha: 1,
                y: 0,
                duration: l.AnimationValues.duration,
                ease: l.AnimationValues.showEase,
                stagger: l.AnimationValues.stagger
              },
              i = r.default.timeline({
                immediateRender: !1,
                force3d: !1,
                onStart: () => this._animated = !0
              });
            return "mobile" === this._currentDevice ? i.fromTo(this._logo1, t, e, 0).fromTo(this._logo2, t, e, l.AnimationValues.stagger).fromTo(this._logo4, t, e, 2 * l.AnimationValues.stagger).fromTo(this._logo6, t, e, 3 * l.AnimationValues.stagger).fromTo(this._logo5, t, e, 4 * l.AnimationValues.stagger).fromTo(this._logo3, t, e, 5 * l.AnimationValues.stagger) : i.fromTo(this._logo1, t, e, 0).fromTo(this._logo2, t, e, l.AnimationValues.stagger).fromTo(this._logo3, t, e, 2 * l.AnimationValues.stagger).fromTo(this._logo4, t, e, 3 * l.AnimationValues.stagger).fromTo(this._logo5, t, e, 4 * l.AnimationValues.stagger).fromTo(this._logo6, t, e, 5 * l.AnimationValues.stagger)
          }
        }
        get _logo1() {
          return this.element.querySelector(".logo-anim-js-1")
        }
        get _logo2() {
          return this.element.querySelector(".logo-anim-js-2")
        }
        get _logo3() {
          return this.element.querySelector(".logo-anim-js-3")
        }
        get _logo4() {
          return this.element.querySelector(".logo-anim-js-4")
        }
        get _logo5() {
          return this.element.querySelector(".logo-anim-js-5")
        }
        get _logo6() {
          return this.element.querySelector(".logo-anim-js-6")
        }
        _setupAnimItems() {
          r.default.set([this._logo1, this._logo2, this._logo3, this._logo4, this._logo5, this._logo6], {
            autoAlpha: 0
          })
        }
        async resize() {
          this._rem = a.default.Current.rem, await this._setCurrentDevice()
        }
        async _setCurrentDevice() {
          this._currentDevice = u.default(n.default)
        }
        async setupSection() {
          this._initialSetup && (this._initialSetup = !1), this._setupAnimItems(), await this._setCurrentDevice()
        }
        _activate() {
          this._show()
        }
        _deactivate() {}
      }
      e.default = h
    },
    50299: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      const s = i(70655),
        a = s.__importDefault(i(73112)),
        o = s.__importDefault(i(82261)),
        n = s.__importDefault(i(66358)),
        r = i(21454),
        l = s.__importDefault(i(67823));
      class u extends o.default {
        constructor() {
          super(...arguments), this._lottieIcons = [], this._show = () => {
            if (this._animated) return;
            const t = r.AnimationValues.distance * this._rem,
              e = {
                autoAlpha: 0,
                y: t
              },
              i = {
                autoAlpha: 1,
                y: 0,
                duration: r.AnimationValues.duration,
                ease: r.AnimationValues.showEase,
                stagger: r.AnimationValues.stagger
              };
            return n.default.timeline({
              immediateRender: !1,
              force3d: !1,
              onStart: () => this._animated = !0,
              onComplete: () => this._lottieIcons.forEach((t => t.animation.play()))
            }).fromTo(this._subtitle, e, i, 0).fromTo(this._title, e, i, r.AnimationValues.stagger).fromTo(this._desc, e, i, 2 * r.AnimationValues.stagger).fromTo(this._cards, {
              y: 2 * t
            }, {
              y: 0,
              duration: r.AnimationValues.duration,
              ease: r.AnimationValues.showEase,
              stagger: r.AnimationValues.stagger
            }, 3 * r.AnimationValues.stagger)
          }
        }
        get _subtitle() {
          return this.element.querySelector(".subtitle-anim-js")
        }
        get _title() {
          return this.element.querySelector(".title-anim-js")
        }
        get _desc() {
          return this.element.querySelector(".desc-anim-js")
        }
        get _cards() {
          return this.element.querySelectorAll(".card-anim-js")
        }
        async _setupLotties() {
          this.element.querySelectorAll(".audits__item").forEach((async t => {
            const e = t.querySelector(".logo-lottie"),
              i = await new l.default({
                el: e,
                autoplay: !1,
                renderer: "canvas",
                loop: !1,
                playOnActivate: !1
              }).setup();
            i.activate(), t.addEventListener("mouseenter", (() => {
              i.animation.isPaused && (i.animation.setDirection(1), i.animation.goToAndPlay(0, !0))
            })), this._lottieIcons.push(i)
          }))
        }
        _setupAnimItems() {
          n.default.set([this._subtitle, this._title, this._desc], {
            autoAlpha: 0
          })
        }
        async resize() {
          this._rem = a.default.Current.rem
        }
        async setupSection() {
          this._setupLotties(), this._setupAnimItems()
        }
        _activate() {
          this._show()
        }
        _deactivate() {}
      }
      e.default = u
    },
    77460: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      const s = i(70655),
        a = s.__importDefault(i(82261)),
        o = s.__importDefault(i(97016)),
        n = s.__importDefault(i(66358)),
        r = i(21454);
      class l extends a.default {
        constructor() {
          super(...arguments), this._show = () => {
            if (this._animated) return;
            const t = {
                autoAlpha: 0,
                y: r.AnimationValues.distance * this._rem
              },
              e = {
                autoAlpha: 1,
                y: 0,
                duration: r.AnimationValues.duration,
                ease: r.AnimationValues.showEase,
                stagger: r.AnimationValues.stagger
              };
            return n.default.timeline({
              immediateRender: !1,
              force3d: !1,
              onStart: () => this._animated = !0
            }).fromTo(this._animationItems, t, e)
          }
        }
        get _animationItems() {
          return this.element.querySelectorAll(".anim-item-js")
        }
        _setupAnimItems() {
          n.default.set([this._animationItems], {
            autoAlpha: 0
          })
        }
        async resize() {
          this._rem = o.default.Current.rem
        }
        async setupSection() {
          this._setupAnimItems()
        }
        _activate() {
          this._show()
        }
        _deactivate() {}
      }
      e.default = l
    },
    21454: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.AnimationValues = void 0;
      const s = i(70655),
        a = s.__importDefault(i(66358)),
        o = s.__importDefault(i(32067));
      a.default.registerPlugin(o.default), e.AnimationValues = {
        duration: .83333,
        stagger: .06666,
        distance: 50,
        showEase: o.default.create("ShowEase", ".17,.17,.41,1"),
        hideEase: o.default.create("HideEase", ".59,.00,.83,.83"),
        defFromSettings: t => ({
          autoAlpha: 0,
          y: t
        }),
        defToSettings() {
          return {
            duration: this.duration,
            ease: this.showEase,
            stagger: this.stagger,
            autoAlpha: 1,
            y: 0
          }
        }
      }
    },
    90494: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.SUPPORT_MIX_BLEND = e.MOBILE_DEVICE_SCREEN_WIDTH = void 0, e.MOBILE_DEVICE_SCREEN_WIDTH = 690, e.SUPPORT_MIX_BLEND = !!("mix-blend-mode" in document.documentElement.style)
    },
    2615: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function (t) {
        let e;
        return window.matchMedia(t.All.Desktop.mediaQuery).matches && (e = "desktop"), window.matchMedia(t.All.Tablet.mediaQuery).matches && (e = "tablet"), window.matchMedia(t.All.Mobile.mediaQuery).matches && (e = "mobile"), e
      }
    },
    15650: (t, e, i) => {
      "use strict";
      i.r(e)
    }
  },
  t => {
    "use strict";
    t.O(0, [380, 808, 24, 700, 594, 429], (() => (37734, t(t.s = 37734)))), t.O()
  }
]);