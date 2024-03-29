/*!
 * 
 *     Gainsight PX Agent Wrapper
 *     Agent Version:  0.49.0
 *     Installed:      2023-05-01 12:59
 * 
 */
! function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.i = function (e) {
        return e
    }, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 398)
}([function (e, t, n) {
    "use strict";

    function r(e) {
        return void 0 !== e && null !== e && "string" == typeof e
    }

    function o(e) {
        return void 0 === e || null === e || "string" != typeof e
    }

    function i(e) {
        return !e || "string" != typeof e || "" == e.trim()
    }

    function a(e) {
        return i(e) ? e : e.trim()
    }

    function s(e) {
        return e && Array.isArray(e) && e.length > 0
    }

    function l(e) {
        if (e) {
            var t = e;
            return Array.isArray(t) || (t = (0, Ue.arrayFrom)(e)), Array.isArray(t) && 0 == t.length
        }
        return !0
    }

    function c(e, t, n) {
        var r = e[t];
        if (n) {
            var o = void 0;
            if ({}.hasOwnProperty.call(e, "Zone") ? o = e : {}.hasOwnProperty.call(window, "Zone") && (o = window), o) {
                r = e[o.Zone.__symbol__(t)] || e[t]
            }
        }
        return r
    }

    function u(e, t, n) {
        var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            o = c(e, "addEventListener", (0, Ve.getConfig)("angularAddEventListener"));
        if (o) o.call(e, t, n, r);
        else {
            if (!e.attachEvent) return !1;
            e.attachEvent("on" + t, n)
        }
        return !0
    }

    function d(e, t, n) {
        var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            o = c(e, "removeEventListener", (0, Ve.getConfig)("angularAddEventListener"));
        o ? o.call(e, t, n, r) : e.detachEvent && e.detachEvent("on" + t, n)
    }

    function g(e) {
        var t = document.createElement("div");
        return t.innerHTML = e.trim(), t.firstChild
    }

    function f(e) {
        var t = document.createElement("div");
        return t.innerHTML = e.trim(), t.childNodes
    }

    function p(e, t, n) {
        var r = document.getElementById(t);
        r ? r.styleSheet ? r.styleSheet.cssText = e : (r.innerHTML = "", r.appendChild(document.createTextNode(e))) : r = rt(e, t), n ? n.parentNode.insertBefore(r, n) : (0, Ve.getBody)().appendChild(r)
    }

    function m(e) {
        return e.join("&")
    }

    function v(e, t, n) {
        return n || (n = []), n.push(e + ("" !== t ? "=" + encodeURIComponent(t) : "")), n
    }

    function h(e) {
        var t = (new Date).getTime() + "-" + De.UUIDGenerator.generateRandom(4);
        return Object.assign(e, {
            cb: t
        }), e
    }

    function y(e, t) {
        for (var n in e) e.hasOwnProperty(n) && (t = v(n, e[n], t));
        return t
    }

    function b(e, t) {
        return t && E(t) || (t = {}), e.forEach(function (e) {
            var n = e.split("=");
            n.length < 2 || (t[n[0]] = n.slice(1).join(""))
        }), t
    }

    function E(e) {
        return void 0 !== e && null != e && "[object Object]" == Object.prototype.toString.call(e)
    }

    function I(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function C(e, t, n, r, o) {
        t.parentNode;
        if (t.getAttribute("apt-ignore") !== r) {
            var i = parseInt(t.getAttribute("apt-original") || n.getPropertyValue("top"), 10);
            i !== r && !o && (t.style.top = i + r + "px") && t.setAttribute("apt-original", i), t.setAttribute("apt-ignore", r)
        }
    }

    function T(e, t) {
        for (var n = Ge.body.getElementsByTagName("*"), r = n.length, o = void 0, i = [], a = (0, Ve.getConfig)("mapperResizeFullHeightElements"), s = (0, Ve.getConfig)("mapperResizeFullHeightBody"), l = 0; l < r; l++) {
            if (o = window.getComputedStyle(n[l], null), a && o && parseInt(o.getPropertyValue("height")) === Ge.body.clientHeight && (n[l].style.height = "calc(100vh - " + e + "px)"), o && "fixed" === o.getPropertyValue("position")) {
                if (U(n[l].className) && (n[l].className.indexOf("apt") > -1 || n[l].className.indexOf("tippy-popper") > -1)) continue;
                C(i, n[l], o, e, t)
            }
            if (o && "absolute" === o.getPropertyValue("position")) {
                if (U(n[l].className) && (n[l].className.indexOf("apt") > -1 || n[l].className.indexOf("tippy-popper") > -1)) continue;
                for (var c = n[l].parentNode, u = !1, d = void 0; c && "body" !== c.tagName.toLowerCase();) {
                    d = Me.windowRef.getComputedStyle(c, null);
                    var g = d.getPropertyValue("position");
                    if ("relative" === g || "fixed" === g || i.indexOf(c) > -1) {
                        u = !0;
                        break
                    }
                    c = c.parentNode, !1
                }
                if (!u && n[l].getAttribute("apt-ignore") !== e) {
                    i.push(n[l]), n[l].style.marginTop = e + "px";
                    var f = o.getPropertyValue("top");
                    !t && (n[l].style.top = f), n[l].setAttribute("apt-ignore", e)
                }
            }
        }
        o = window.getComputedStyle(Ge.body, null), s && o && parseInt(o.getPropertyValue("height")) === Ge.body.clientHeight && Ge.body.style.setProperty("box-sizing", "border-box", "important"), Ge.body.style.setProperty("padding-top", e + "px", "important")
    }

    function w(e, t) {
        if (!("style" in e)) throw new Error("object " + e + " has no 'style' property");
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t
    }

    function S(e, t) {
        var n = e.replace("#", "");
        return "rgba(" + parseInt(n.substring(0, 2), 16) + "," + parseInt(n.substring(2, 4), 16) + "," + parseInt(n.substring(4, 6), 16) + "," + t + ")"
    }

    function k(e) {
        var t = e.replace("#", "");
        return (parseInt(t.substring(0, 2), 16) + parseInt(t.substring(2, 4), 16) + parseInt(t.substring(4, 6), 16)) / 3 < 128
    }

    function x(e) {
        for (var t = document.querySelectorAll(e), n = 0, r = 0; r < t.length; r++) {
            var o = Number.parseInt(document.defaultView.getComputedStyle(t[r], null).getPropertyValue("z-index"), 10);
            o > n && (n = o)
        }
        return n
    }

    function O(e, t, n) {
        var r = !0;
        if (t) {
            var o = {
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                },
                i = document.elementFromPoint(o.x, o.y),
                a = "true" === i.getAttribute("data-apt-ignore-visible"),
                s = i.getAttribute("class") || "",
                l = i !== (0, Ve.getBody)() && s.indexOf("apt") > -1,
                c = i === t,
                u = !!n && (i === n || n.contains(i));
            r = c || a || l || u
        }
        return r
    }

    function _(e, t, n) {
        return (0, He.elementContainsChild)(e, (0, He.documentElementFromPoint)(document, t.x, t.y)) || (0, He.elementContainsChild)(e, (0, He.documentElementFromPoint)(document, n.left, n.top)) || (0, He.elementContainsChild)(e, (0, He.documentElementFromPoint)(document, n.right, n.top)) || (0, He.elementContainsChild)(e, (0, He.documentElementFromPoint)(document, n.right, n.bottom)) || (0, He.elementContainsChild)(e, (0, He.documentElementFromPoint)(document, n.left, n.bottom))
    }

    function A(e, t, n) {
        for (var r = document.elementFromPoint(t.x, t.y); r && r.tagName;) {
            var o = !1;
            if (r) {
                var i = "true" === r.getAttribute("data-apt-ignore-visible"),
                    a = r === e,
                    s = r.getAttribute("class") || "",
                    l = n && r !== (0, Ve.getBody)() && s.indexOf("apt") > -1;
                o = i || a || l
            }
            if (o) return !0;
            r = r.parentNode
        }
        return !1
    }

    function P(e, t, n) {
        if (!e) return !1;
        var r = window.getComputedStyle(e);
        if ("none" === r.display) return !1;
        if ("visible" !== r.visibility) return !1;
        if (r.opacity < .1) return !1;
        var o = e.getBoundingClientRect();
        if (e.offsetWidth + e.offsetHeight + o.height + o.width === 0) return !1;
        var i = {
            x: o.left + e.offsetWidth / 2,
            y: o.top + e.offsetHeight / 2
        };
        if (t) {
            if (i.x < 0) return !1;
            if (i.x > (document.documentElement.clientWidth || window.innerWidth)) return !1;
            if (i.y < 0) return !1;
            if (i.y > (document.documentElement.clientHeight || window.innerHeight)) return !1
        }
        return !!_(e, i, o) || A(e, i, n)
    }

    function L(e, t, n) {
        if (!e) return !1;
        var r = window.getComputedStyle(e);
        if ("none" === r.display) return !1;
        if ("visible" !== r.visibility) return !1;
        if (r.opacity < .1) return !1;
        if (e.offsetWidth + e.offsetHeight + e.getBoundingClientRect().height + e.getBoundingClientRect().width === 0) return !1;
        if (t) {
            var o = e.getBoundingClientRect(),
                i = {
                    x: o.left + e.offsetWidth / 2,
                    y: o.top + e.offsetHeight / 2
                };
            if (i.x < 0) return !1;
            if (i.x > (document.documentElement.clientWidth || window.innerWidth)) return !1;
            if (i.y < 0) return !1;
            if (i.y > (document.documentElement.clientHeight || window.innerHeight)) return !1;
            if ((0, He.elementContainsChild)(e, (0, He.documentElementFromPoint)(document, i.x, i.y)) || (0, He.elementContainsChild)(e, (0, He.documentElementFromPoint)(document, o.left, o.top)) || (0, He.elementContainsChild)(e, (0, He.documentElementFromPoint)(document, o.right, o.top)) || (0, He.elementContainsChild)(e, (0, He.documentElementFromPoint)(document, o.right, o.bottom)) || (0, He.elementContainsChild)(e, (0, He.documentElementFromPoint)(document, o.left, o.bottom))) return !0;
            var a = document.elementFromPoint(i.x, i.y);
            do {
                var s = !1;
                if (a) {
                    var l = "true" === a.getAttribute("data-apt-ignore-visible"),
                        c = a === e,
                        u = a.getAttribute("class") || "",
                        d = n && a !== (0, Ve.getBody)() && u.indexOf("apt") > -1;
                    s = l || c || d
                }
                if (s) return !0
            } while (a && (a = a.parentNode) && a.tagName);
            return !1
        }
        return !0
    }

    function N(e, t, n) {
        var r = (0, We.getCurrentProductKey)() || "",
            o = r.indexOf("GLVNMB5BLV8T") > -1;
        return o ? P(e, t, n) : L(e, t, n)
    }

    function B(e) {
        var t = window.getComputedStyle(e),
            n = t.getPropertyValue("margin-top");
        n = n.substring(0, n.length - 2), n = Number(n);
        var r = t.getPropertyValue("margin-bottom");
        return r = r.substring(0, r.length - 2), (r = Number(r)) + n
    }

    function R(e) {
        return e.getBoundingClientRect().top + e.offsetHeight / 2
    }

    function D(e) {
        var t = B((0, Ve.getBody)()),
            n = (window.innerHeight - t) / 2,
            r = R(e);
        return Math.abs(n - r) < 10
    }

    function M(e) {
        if (!e) return !1;
        var t = e.getBoundingClientRect(),
            n = t.left,
            r = t.top,
            o = {
                x: n + e.offsetWidth / 2,
                y: r + e.offsetHeight / 2
            };
        return !D(e) || o.x < 0 || o.x > Math.min(document.documentElement.clientWidth, window.innerWidth) || o.y < 0 || o.y > Math.min(document.documentElement.clientHeight, window.innerHeight)
    }

    function U(e) {
        return e && ("string" == typeof e || e instanceof String)
    }

    function F(e) {
        return e && ("function" == typeof e || e instanceof Function)
    }

    function V(e) {
        return ["body", "#document", "frameset", "html"].indexOf(e.nodeName.toLowerCase()) > -1
    }

    function j(e) {
        return e === document || ["body", "frameset", "html"].indexOf(e.tagName.toLowerCase()) > -1
    }

    function H(e, t) {
        for (var n = e; n && !V(n);) {
            if (n.classList.contains(t)) return !0;
            n = (0, He.getParentNode)(n)
        }
        return !1
    }

    function q(e, t, n) {
        for (var r = e; r && !V(r);) {
            if (r[t] === n) return !0;
            r = (0, He.getParentNode)(r)
        }
        return !1
    }

    function W(e, t) {
        for (var n = t; n && !j(n);) {
            if (n === e) return !0;
            n = (0, He.getParentNode)(n)
        }
        return !1
    }

    function G(e, t, n) {
        var r = Ge.createElement("a");
        r.href = e;
        var o = Te(r),
            a = we(r),
            s = i(r.search) ? "?" : "";
        return s += v(t, n, r.search ? r.search.split("&") : null).join("&"), [o, a, s, r.hash].join("")
    }

    function K(e, t) {
        var n = Ge.createElement("a");
        n.href = e;
        var r = Te(n),
            o = we(n),
            a = i(n.search) ? "?" : "";
        return a += y(t, n.search ? n.search.split("&") : []).join("&"), [r, o, a, n.hash].join("")
    }

    function z(e) {
        for (var t = window.location.search.substring(1), n = t.split("&"), r = 0; r < n.length; r++) {
            var o = n[r].split("=");
            if (o[0] === e) return o[1]
        }
        return null
    }

    function Y(e) {
        for (var t = window.location.search.substring(1), n = t.split("&"), r = [], o = 0; o < n.length; o++) {
            n[o].split("=")[0] !== e && "" !== n[o] && "" !== n[o] && r.push(n[o])
        }
        return location.protocol + "//" + location.host + location.pathname + (r.length > 0 ? "?" + r.join("&") : "") + location.hash
    }

    function J(e) {
        return void 0 !== $e.find(function (t) {
            return t.test(e)
        })
    }

    function X(e, t) {
        e && (e.innerText = t.toLowerCase(), e.classList.contains("strong") && e.classList.remove("strong"), e.classList.contains("medium") && e.classList.remove("medium"), e.classList.contains("weak") && e.classList.remove("weak"), e.classList.add(t.toLowerCase()))
    }

    function Q(e, t) {
        function n(e) {
            e = e || window.event, e.target.classList.add("dragging"), s = e.clientX, l = e.clientY, u(document, "mouseup", o), u(document, "mousemove", r)
        }

        function r(t) {
            t = t || window.event, i = s - t.clientX, a = l - t.clientY, s = t.clientX, l = t.clientY, e.style.top = e.offsetTop - a + "px", e.style.left = e.offsetLeft - i + "px"
        }

        function o(e) {
            e.target.classList.remove("dragging"), d(document, "mouseup", o), d(document, "mousemove", r)
        }
        var i = 0,
            a = 0,
            s = 0,
            l = 0;
        t ? u(t, "mousedown", n) : u(e, "mousedown", n)
    }

    function $(e) {
        if (e)
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
        return !0
    }

    function Z(e, t) {
        for (var n = e; n != Ge;) {
            if (n && n.tagName && n.tagName.toLowerCase() === t) return n;
            n = n.parentNode
        }
        return null
    }

    function ee() {
        (0, Ve.getConfig)("crossProductEngagement") || (Me.windowRef.sessionStorage.removeItem("apt.prevStepMap"), Me.windowRef.sessionStorage.removeItem("apt.stepId"), Me.windowRef.sessionStorage.removeItem("aptGuideSelectedLanguage"), Me.windowRef.sessionStorage.removeItem("aptCurrentGuideUrl"), Me.windowRef.sessionStorage.removeItem("apt.engagementSessionId"), Me.windowRef.sessionStorage.removeItem("aptMapperDockingPosition"))
    }

    function te(e, t, n) {
        for (var r = 0; r < e; r++) setTimeout(n, t * r)
    }

    function ne(e) {
        var t = window.innerHeight / 2,
            n = (0, Fe.detectIE)(),
            r = n <= je.LAST_IE_VERSION,
            o = r ? document.documentElement : (0, Ve.getBody)(),
            i = R(e),
            a = Math.abs(i - t);
        o.scrollTop + i > t && (o.scrollTop += a)
    }

    function re(e, t, n) {
        try {
            if (e) {
                var r = e.getBoundingClientRect(),
                    o = window.innerHeight,
                    i = (o - r.height) / 2,
                    a = Math.max((0, Ve.getBody)().scrollHeight, (0, Ve.getBody)().offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
                    s = a - (window.scrollY + r.bottom),
                    l = r.top < i && !(0, Ve.isIframe)(),
                    c = s < i && !(0, Ve.isIframe)(),
                    u = n ? {
                        behavior: "smooth"
                    } : {};
                l ? (u.top = 0, u.left = 0, window.scrollTo(u)) : c ? (u.top = a, u.left = 0, window.scrollTo(u)) : (u.block = "center", e.scrollIntoView(u))
            }
        } catch (e) {
            t && t(new Error("Error in scrollIntoView " + e))
        }
    }

    function oe(e, t) {
        try {
            var n = (0, Fe.detectIE)();
            !1 !== n && n < 79 ? (e.scrollIntoView(!1), setTimeout(function () {
                ne(e)
            }, 500)) : ((0, Ve.getConfig)("viewAlignedScroll") ? re(e, t, !0) : e.scrollIntoView({
                behavior: "smooth",
                block: "center"
            }), setTimeout(function () {
                M(e) && ((0, Ve.getConfig)("viewAlignedScroll") ? re(e, t, !1) : e.scrollIntoView({
                    block: "center"
                }))
            }, 800))
        } catch (e) {
            t && t(new Error("Error in scrollIntoView " + e))
        }
    }

    function ie(e, t, n, r) {
        var o = void 0;
        return "function" == typeof CustomEvent ? o = new CustomEvent(e, {
            detail: t,
            cancelable: r || !1,
            bubbles: n || !1
        }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(e, n || !1, r || !1, t)), o
    }

    function ae(e, t, n, r) {
        document.dispatchEvent(ie(e, t, n, r))
    }

    function se(e, t) {
        var n = e.substring(0, e.length - 2) + "*";
        return new RegExp("^" + e.split("*").join(".*") + "$").test(t + "/") && new RegExp("^" + n.split("*").join(".*") + "$").test(t + "/")
    }

    function le(e, t, n, r) {
        var o = (0, We.getCurrentProductId)(),
            i = ["AP-VFU6ONL15QEY-2", "AP-98W68BOG3KCQ-2"];
        if (o && -1 === i.indexOf(o)) {
            var a = e;
            a = e.replace(/\/\*/, "*"), r = new RegExp("^" + a.split("*").join(".*") + "$").test(t), r && !1 === n && qe.logger.logInternalError(new Error("The rule " + e + " match to url " + t + "/"))
        } else e.endsWith("/*") && (r = n);
        return r
    }

    function ce(e, t, n, r) {
        return e.some(function (e) {
            var o = void 0,
                i = new RegExp("^" + e.split("*").join(".*") + "$").test(t);
            return r && e.endsWith("/*") && (o = se(e, t)), r && (i = le(e, t, o, i)), n ? !i : i
        })
    }

    function ue(e, t, n, r) {
        return e.every(function (e) {
            var o = void 0,
                i = new RegExp("^" + e.split("*").join(".*") + "$").test(t);
            return r && e.endsWith("/*") && (o = se(e, t)), r && r && (i = le(e, t, o, i)), n ? !i : i
        })
    }

    function de(e) {
        return e.replace(/[.+?^${}()|[\]\\]/g, "\\$&")
    }

    function ge(e, t) {
        return (t || (0, Ve.getConfig)("stripSafeUrlProtocol")) && (0 === e.indexOf("http://") ? e = e.substring("http://".length) : 0 === e.indexOf("https://") && (e = e.substring("https://".length))), 0 === e.indexOf("www.") && (e = e.substring("www.")), e.endsWith("/") && (e = e.substring(0, e.length - 1)), e
    }

    function fe(e, t, n, r) {
        Array.isArray(e) || (e = [e]);
        var o = !1,
            i = (0, Ue.arrayFrom)(e, function (e) {
                return e = ge(e), t.endsWith("/") && (o = !0), de(e)
            });
        return t = ge(t), r ? ue(i, t, n, o) : ce(i, t, n, o)
    }

    function pe(e) {
        var t = e.split("-");
        if (t.length < 3) throw "invalid key " + e;
        return "2" === t[2]
    }

    function me(e) {
        return !i(e) && "80" !== e && "443" !== e
    }

    function ve() {
        var e = "localhost" === location.hostname || me(location.port) ? location.host : location.hostname;
        return location.protocol + "//" + e + location.pathname + location.search + location.hash
    }

    function he() {
        return ["localhost" === location.hostname ? location.host : location.hostname, location.pathname, location.search, location.hash]
    }

    function ye(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return function (n) {
            n = n || Me.windowRef.event;
            var r = !1;
            (r = "key" in n ? "Escape" === n.key || "Esc" === n.key : 27 === n.keyCode) && (t && n.preventDefault(), e())
        }
    }

    function be(e) {
        return function (t) {
            13 === t.keyCode && e(t)
        }
    }

    function Ee(e, t) {
        var n = be(t);
        return u(e, "keydown", n), n
    }

    function Ie(e, t) {
        t || (t = ["click", "mousedown", "mouseup"]), e.forEach(function (e) {
            t.forEach(function (t) {
                return u(e, t, function (e) {
                    e.stopImmediatePropagation()
                })
            })
        })
    }

    function Ce(e, t) {
        var n = this,
            r = De.UUIDGenerator.generateV4Id(),
            o = [];
        return arguments.length > 2 && (o = Array.prototype.slice.call(arguments, 2)), e ? (o.unshift(r), [r, function (e) {
            var r = (0, Ue.arrayFrom)(o);
            r.unshift(e), t.apply(n, r)
        }]) : [r, function () {
            var e = (0, Ue.arrayFrom)(o);
            e.unshift(r), t.apply(n, e)
        }]
    }

    function Te(e) {
        if (!e || !e.href) throw new Error("getOriginFromAnchorElement - Wrong element was provided, missing href");
        return e.origin ? e.origin : e.protocol + "//" + e.hostname
    }

    function we(e) {
        if (!e || !e.href) throw new Error("getPathnameFromAnchorElement - Wrong element was provided, missing href");
        return e.origin ? e.pathname : e.pathname ? "/" + e.pathname : ""
    }

    function Se(e) {
        return -1 === [null, void 0].indexOf(e)
    }

    function ke(e) {
        return [null, void 0].indexOf(e) > -1
    }

    function xe(e) {
        if (e) {
            var t = "INPUT" === e.nodeName && "text" === e.type,
                n = "TEXTAREA" === e.nodeName;
            return t || n
        }
        return !1
    }

    function Oe(e, t) {
        return isNaN(e) || !e && 0 !== e ? t : e
    }

    function _e(e) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
    }

    function Ae(e, t) {
        var n = void 0;
        return function () {
            var r = arguments,
                o = this;
            clearTimeout(n), n = setTimeout(function () {
                return e.apply(o, r)
            }, t)
        }
    }

    function Pe(e, t) {
        var n = e.substring(e.indexOf(t), e.length);
        return n = n.substring(0, n.indexOf("}") + 1)
    }

    function Le(e) {
        var t = [];
        return e.substring(e.indexOf("{") + 1, e.indexOf("}")).split(";").map(function (e) {
            return e.trim()
        }).forEach(function (e) {
            if (e) {
                var n = e.split(":");
                n && 2 === n.length && t.push({
                    inlineProperty: n[0],
                    value: n[1]
                })
            }
        }), t
    }

    function Ne(e, t) {
        var n = {},
            r = 0;
        for (var o in e)
            if ({}.hasOwnProperty.call(e, o)) {
                if (r++ >= t) break;
                n[o] = e[o]
            } return n
    }

    function Be(e) {
        return null !== e && "object" === (void 0 === e ? "undefined" : Re(e)) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && "number" == typeof e.length && (0 === e.length || "object" === Re(e[0]) && e[0].nodeType > 0)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isElementInIframeVisible = t.isValidPort = t.isRootTag = t.isRootNode = t.isEmail = t.getNumberWithFallback = t.trimString = t.paramToObject = t.isNotNullOrUndefined = t.isNullOrUndefined = t.isFunction = t.addEnterKeyDownListener = t.getEnterHandler = t.getUrlParts = t.addStopClickListeners = t.hasElement = t.getHandler = t.addStyle = t.getEscHandlerCallback = t.safeUrl = t.isDefinedStr = t.isUndefinedStr = t.getPageUrl = t.isWebApp = t.matchUrl = t.escapeRegex = t.matchEither = t.scrollElementToCenter = t.needToScroll = t.createInputConfig = t.isRandomIdSelector = t.retryFunction = t.createMultipleElementsFromString = t.createElementFromString = t.clearAptrinsicSessionStorage = t.searchElementInParentTree = t.checkDarkColor = t.hasParentField = t.isObjectEmpty = t.isEmptyArr = t.makeDraggable = t.setSelectorStrengthLabel = t.removeFromQueryParam = t.getQueryParam = t.addParametersToUrl = t.addParameterToUrl = t.hasParentClass = t.isString = t.isElementVisible = t.findHighestZIndex = t.hexToRgba = t.setCrossBrowserTransform = t.pushElements = t.createStyle = t.removeChildren = t.isObject = t.addCacheBuster = t.addParameters = t.addParameter = t.convert2Parameters = t.MILLISEC = t.removeEventListener = t.isNotEmptyArr = t.createInput = t.appendElements = t.createElement = t.addEventListener = t.isBlank = t.isEnterAllowedElement = void 0;
    var Re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    t.getNativeFunction = c, t.isElementVisibleProxy = N, t.dispatchCustomEvent = ae, t.debounce = Ae, t.extractStyleString = Pe, t.extractStyleProperties = Le, t.limitJsonKeys = Ne, t.isNodeList = Be;
    var De = n(16),
        Me = n(4),
        Ue = n(11),
        Fe = n(9),
        Ve = n(1),
        je = n(8),
        He = n(19),
        qe = n(3),
        We = n(18),
        Ge = document,
        Ke = new RegExp(/(^| )[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i),
        ze = new RegExp(/(^| )#.+_(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){8,}$/),
        Ye = new RegExp(/(^| )#.+gen[0-9]{4}/),
        Je = new RegExp(/(^| )#.+-[0-9]{4}.*$/),
        Xe = new RegExp(/(^| )#ember[0-9]{4}$/),
        Qe = new RegExp(/(^| )#id[0-9a-zA-Z]{3}$/),
        $e = [Ke, ze, Ye, Je, Xe, Qe],
        Ze = function (e, t, n, r) {
            if ("text" === e) return Ge.createTextNode(n);
            var o = Ge.createElement(e);
            switch (void 0 !== t && null != t && (o.className = s(t) ? t.join(" ") : t), e) {
                case "option":
                    o.value = n.value, o.text = n.name, n.selected && o.setAttribute("selected", n.selected);
                    break;
                case "a":
                    o.href = n.href, n.blank && (o.target = "_blank");
                    break;
                case "textarea":
                    o.rows = n.rows, o.cols = n.cols;
                    break;
                case "input":
                    o.value = n.value;
                    break;
                case "p":
                    o.innerHTML = n.value;
                    break;
                case "label":
                    n && n.for && o.setAttribute("for", n.for);
                    break;
                case "img":
                    n && n.src && (o.src = n.src)
            }
            if (void 0 !== n && null != n && (void 0 !== n.text && o.appendChild(Ge.createTextNode(n.text)), n.title && (o.title = n.title), n.dataAtt))
                for (var i = 0; i < n.dataAtt.length; i++) o.setAttribute(n.dataAtt[i].name, n.dataAtt[i].value);
            return r && (Array.isArray(r) || (r = [r]), et(o, r)), o
        },
        et = function (e, t) {
            for (var n = 0; n < t.length; n++) t[n] && e.appendChild(t[n]);
            return e
        },
        tt = function (e, t, n, r, o, i, a, l, c) {
            var u = Ge.createElement("input");
            if (u.type = e, void 0 !== n && null !== n && (u.value = n, u.setAttribute("value", n)), void 0 !== r && (u.placeholder = r), void 0 !== t && null !== t && (u.className = s(t) ? t.join(" ") : t), o && (u.disabled = o), i && (u.setAttribute("checked", i), u.checked = i), a)
                for (var d in a) a.hasOwnProperty(d) && u.setAttribute("data-" + d, a[d]);
            if (l)
                for (var g in l) l.hasOwnProperty(g) && u.setAttribute(g, l[g]);
            return c && (Array.isArray(c) || (c = [c]), et(u, c)), u
        },
        nt = function (e, t) {
            return tt(e, t.classes, t.value, t.placeholder, t.disabled, t.checked, t.dataAtt, t.otherAtt, t.children)
        },
        rt = function (e, t) {
            var n = document.createElement("style");
            t && (n.id = t);
            var r = (0, Ve.getConfig)("cssNonce");
            return r && (n.nonce = r), n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : (n.innerHTML = "", n.appendChild(document.createTextNode(e))), n
        };
    t.isEnterAllowedElement = xe, t.isBlank = i, t.addEventListener = u, t.createElement = Ze, t.appendElements = et, t.createInput = tt, t.isNotEmptyArr = s, t.removeEventListener = d, t.MILLISEC = 1e3, t.convert2Parameters = m, t.addParameter = v, t.addParameters = y, t.addCacheBuster = h, t.isObject = E, t.removeChildren = I, t.createStyle = rt, t.pushElements = T, t.setCrossBrowserTransform = w, t.hexToRgba = S, t.findHighestZIndex = x, t.isElementVisible = L, t.isString = U, t.hasParentClass = H, t.addParameterToUrl = G, t.addParametersToUrl = K, t.getQueryParam = z, t.removeFromQueryParam = Y, t.setSelectorStrengthLabel = X, t.makeDraggable = Q, t.isEmptyArr = l, t.isObjectEmpty = $, t.hasParentField = q, t.checkDarkColor = k, t.searchElementInParentTree = Z, t.clearAptrinsicSessionStorage = ee, t.createElementFromString = g, t.createMultipleElementsFromString = f, t.retryFunction = te, t.isRandomIdSelector = J, t.createInputConfig = nt, t.needToScroll = M, t.scrollElementToCenter = oe, t.matchEither = ce, t.escapeRegex = de, t.matchUrl = fe, t.isWebApp = pe, t.getPageUrl = ve, t.isUndefinedStr = o, t.isDefinedStr = r, t.safeUrl = ge, t.getEscHandlerCallback = ye, t.addStyle = p, t.getHandler = Ce, t.hasElement = W, t.addStopClickListeners = Ie, t.getUrlParts = he, t.getEnterHandler = be, t.addEnterKeyDownListener = Ee, t.isFunction = F, t.isNullOrUndefined = ke, t.isNotNullOrUndefined = Se, t.paramToObject = b, t.trimString = a, t.getNumberWithFallback = Oe, t.isEmail = _e, t.isRootNode = V, t.isRootTag = j, t.isValidPort = me, t.isElementInIframeVisible = O
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = O[e];
        if (null === t) throw new Error("not found any value for config " + e);
        return t
    }

    function o() {
        return Object.assign({}, O)
    }

    function i() {
        var e = window.self !== window.top.parent && r("iframeModeEnabled") && !window.runVue;
        return e ? window.self !== window.top.parent.self : e
    }

    function a() {
        return pe
    }

    function s() {
        return a() + "/article"
    }

    function l() {
        return r("framesetMode") ? document.documentElement : document.body
    }

    function c(e) {
        switch (e) {
            case "style":
                return r("cssFileEndpoint") || Ee + "/style.css";
            case "widget":
                return r("widgetFileEndpoint") || Ie;
            default:
                return null
        }
    }

    function u(e, n) {
        e && !e.startsWith("http") && (e = "https://" + e), n && !n.startsWith("http") && (n = "https://" + n), e && (t.serverEndpointBase = $ = e + A, t.serverEndpoint = Z = $ + P, t.commandEndpoint = ee = Z + L, t.commandEndPointV2 = te = $ + "/v2/command", t.campaignEndpoint = ne = Z + N, t.notificationEndpoint = re = Z + R, t.notificationStateEndpoint = oe = Z + D, t.engagementTrackEndpoint = ie = Z + M, t.accountEndpoint = ae = Z + U, t.logErrorEndpoint = se = Z + F, t.internalErrorEndpoint = le = Z + V, t.ondemandEndpoint = ce = Z + j, t.ongoingEngagementEndpoint = ue = Z + H, t.getConfigEndpoint = de = Z + q, t.getKnowledceCenterConfigEndpoint = ge = $ + W, t.getWidgetConfigUrl = fe = Z + G, t.trackMultiStepEndpoint = he = Z + "/engagement/multistep/track", t.trackStepEndpoint = ye = Z + "/engagement/multistep/step/track", t.getWidgetContentEndpoint = pe = $ + K, t.getWidgetDocsEndpoint = me = $ + z, t.getAllInAppEndpoint = be = Z + B, t.getWidgetSingleDocEndpoint = ve = $ + Y, t.desktopEngagementTrackEndpoint = Te = $ + J, t.trackSurveyCompleteEndpoint = ke = $ + Q, t.fetchFeatureRuleEndpoint = we = "" + $ + X, t.snoozeUrl = Se = Z + "/engagement/track/snooze", t.surveySubmitUrl = xe = Z + "/engagement/survey", t.trackSingleStepEndpoint = Oe = Z + "/engagement/survey/step", t.trackSinglePageEndpoint = _e = Z + "/engagement/survey/page", t.trackKcEndpoint = Ce = Z + "/kc"), n && (t.staticContentHost = Ee = n)
    }

    function d(e) {
        return Pe.indexOf(e) > -1 && ("identify" !== e || !r("enableIdentifyFromIFrame"))
    }

    function g(e) {
        return void 0 !== e && "[object Object]" == Object.prototype.toString.call(e)
    }

    function f() {
        O.enableTag = !1
    }

    function p(e) {
        return ("string" != typeof e || !(0, k.isBlank)(e)) && (!Array.isArray(e) || !(0, k.isEmptyArr)(e))
    }

    function m(e, t, n, r) {
        var i = o();
        if (g(e))
            for (var a in e) e.hasOwnProperty(a) && O.hasOwnProperty(a) && p(e[a]) && (-1 === _.indexOf(a) || r) && (O[a] = e[a], n && _.push(a));
        O.autoTrack ? O.autoClickTrack || (O.trackLevel = 1) : O.trackLevel = 0, t && y(i, O), u(O.espProxyDomain, O.contentProxyDomain)
    }

    function v(e) {
        return (!i() || !d(e)) && ("pageView" === e ? O.trackLevel > 0 && r("autoTrackPage") : Ae[e] <= O.trackLevel)
    }

    function h(e, t) {
        if (!O.hasOwnProperty(e)) return void S.logger.logInternalError(new Error("Unrecognized config field: " + e + ". Cannot set config change handler"));
        Le[e] = t
    }

    function y(e, t) {
        for (var n in Le) Le.hasOwnProperty(n) && e[n] !== t[n] && Le[n](e[n], t[n])
    }

    function b(e, t) {
        De.setdata(e, t)
    }

    function E(e) {
        return De.getKey(e)
    }

    function I() {
        return Ne
    }

    function C(e) {
        if (Ne = e, Re)
            for (var t in Re) e.hasOwnProperty(t) || (Ne[t] = Re[t])
    }

    function T(e, t) {
        g(Ne) && (Ne[e] = t), -1 !== Be.indexOf(e) && (Re = Re || {}, Re[e] = t)
    }

    function w() {
        return {
            enableTag: !0,
            maxEngagementCalls: 2,
            engagementCallDelay: 500,
            filterType: "mask",
            filterUrls: [],
            nameParamFilterType: "mask",
            namedParamFilter: [],
            autoTrackHash: !1,
            widgetEnabled: !1,
            trackLevel: 3,
            autoClickTrack: 1,
            autoTrack: 1,
            autoTrackPage: !0,
            iframeModeEnabled: !0
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getWidgetArticleByIdEndpoint = t.widgetContentEndpointGetter = t.getCachedConfig = t.setCachedConfig = t.getAssetEndpoint = t.disableTag = t.setKcConfigByName = t.setKcConfig = t.getKcConfig = t.getDefaultConfiguration = t.registerConfigChangeHandler = t.getConfigObj = t.isIframe = t.isIframeDisabled = t.featureEnabled = t.getConfig = t.overrideConfig = t.trackSinglePageEndpoint = t.trackSingleStepEndpoint = t.surveySubmitUrl = t.trackSurveyCompleteEndpoint = t.snoozeUrl = t.fetchFeatureRuleEndpoint = t.desktopEngagementTrackEndpoint = t.trackKcEndpoint = t.widgetUrl = t.staticContentHost = t.getAllInAppEndpoint = t.refreshBadgeEndpoint = t.badgeTrackEndpoint = t.fetchBadgeEndpoint = t.trackStepEndpoint = t.trackMultiStepEndpoint = t.getWidgetSingleDocEndpoint = t.getWidgetDocsEndpoint = t.getWidgetContentEndpoint = t.getWidgetConfigUrl = t.getKnowledceCenterConfigEndpoint = t.getConfigEndpoint = t.ongoingEngagementEndpoint = t.ondemandEndpoint = t.internalErrorEndpoint = t.logErrorEndpoint = t.accountEndpoint = t.engagementTrackEndpoint = t.notificationStateEndpoint = t.notificationEndpoint = t.campaignEndpoint = t.commandEndPointV2 = t.commandEndpoint = t.serverEndpoint = t.serverEndpointBase = t.trackWidgetExternalArticleInfix = void 0, t.getBody = l;
    var S = n(3),
        k = n(0),
        x = n(5),
        O = {
            enableTag: !0,
            maxEngagementCalls: 1,
            engagementCallDelay: 750,
            filterType: "mask",
            filterUrls: [],
            nameParamFilterType: "mask",
            namedParamFilter: [],
            autoTrackHash: !1,
            widgetEnabled: !1,
            trackLevel: 3,
            autoClickTrack: !0,
            autoTrack: !0,
            autoTrackPage: !0,
            iframeModeEnabled: !0,
            elementAttributeWhitelist: [],
            engagementExcludeUrl: [],
            delayClickEvent: !1,
            delayClickEventTime: 2e3,
            textMatchEnabled: !1,
            guideAdvanceOnHover: !1,
            espProxyDomain: void 0,
            contentProxyDomain: void 0,
            storageProxyDomain: void 0,
            enableBadge: !0,
            badgeRefreshInterval: 5,
            setSessionExternally: !1,
            usePOST: !1,
            allowCrossDomain: !1,
            enableFullStory: !1,
            fullDomainCookie: !1,
            cssFileEndpoint: void 0,
            widgetFileEndpoint: void 0,
            multipleProductsPerDomain: !0,
            fetchKcType: "automatic",
            kcDisplayType: "default",
            kcPositionType: "injection",
            sfdcTemplate: void 0,
            overrideBotSearchContextUrl: void 0,
            htmlSanitization: !1,
            htmlSanitizationAllowedDomains: void 0,
            mapperResizeFullHeightElements: !1,
            sessionCookieTTL: 18e5,
            enableIdentifyFromIFrame: !1,
            engagementChecksumFileUrl: void 0,
            cssNonce: void 0,
            enableKcSecureArticle: !1,
            useSessionStorageEditorToken: !1,
            secureCookie: !1,
            mapperResizeFullHeightBody: !1,
            stripSafeUrlProtocol: !0,
            elementAttributeDenyMap: {},
            maskUrlFunction: void 0,
            trustedOrigin: void 0,
            angularMutationObserver: !1,
            badgeUseInterval: !1,
            badgeRepositionInterval: 500,
            enableModalBodyScroll: !0,
            evaluateEngRuleOnNavigation: !1,
            usesShadowDom: !1,
            dockMapper: !1,
            kcAllowedFuncNames: [],
            usePointerEvent: !0,
            badgesUseFixedPosition: !1,
            crossOriginStyle: !1,
            viewAlignedScroll: !1,
            newProductMapper: !0,
            framesetMode: !1,
            angularAddEventListener: !1,
            crossProductEngagement: !1,
            queryParamsInHash: !1,
            clientSideEngagementTracking: !1,
            engagementEditorV2AutoSave: !1,
            trackPageTitles: !1,
            excludeUrls: [],
            keyboardTriggerClick: !1,
            localStorageCookie: !1,
            htmlSanitizationAllowedSchemes: void 0,
            tooltipDynamicReposition: !1,
            requestTimeoutDefault: 0,
            requestTimeoutCritical: 0
        },
        _ = [],
        A = "/rte",
        P = "/v1",
        L = "/command",
        N = "/engagements/single",
        B = "/inapp",
        R = "/notification/list",
        D = "/notification/state",
        M = "/engagement/track",
        U = "/account",
        F = "/error/log",
        V = "/activity/error",
        j = "/engagement/ondemand",
        H = "/engagement/ongoing",
        q = "/configuration",
        W = "/v2/kc",
        G = "/kc/config",
        K = W + "/content",
        z = W + "/docs",
        Y = W + "/doc",
        J = "/v1/desktop/engagement",
        X = "/api/v1/feature/client",
        Q = "/v1/engagement/survey/completed",
        $ = (t.trackWidgetExternalArticleInfix = "track/article/external", t.serverEndpointBase = 'https://esp.aptrinsic.com' + A),
        Z = t.serverEndpoint = $ + P,
        ee = t.commandEndpoint = Z + L,
        te = t.commandEndPointV2 = $ + "/v2/command",
        ne = t.campaignEndpoint = Z + N,
        re = t.notificationEndpoint = Z + R,
        oe = t.notificationStateEndpoint = Z + D,
        ie = t.engagementTrackEndpoint = Z + M,
        ae = t.accountEndpoint = Z + U,
        se = t.logErrorEndpoint = Z + F,
        le = t.internalErrorEndpoint = Z + V,
        ce = t.ondemandEndpoint = Z + j,
        ue = t.ongoingEngagementEndpoint = Z + H,
        de = t.getConfigEndpoint = Z + q,
        ge = t.getKnowledceCenterConfigEndpoint = $ + W,
        fe = t.getWidgetConfigUrl = Z + G,
        pe = t.getWidgetContentEndpoint = $ + K,
        me = t.getWidgetDocsEndpoint = $ + z,
        ve = t.getWidgetSingleDocEndpoint = $ + Y,
        he = t.trackMultiStepEndpoint = Z + "/engagement/multistep/track",
        ye = t.trackStepEndpoint = Z + "/engagement/multistep/step/track",
        be = (t.fetchBadgeEndpoint = Z + "/badges", t.badgeTrackEndpoint = Z + "/badge/track", t.refreshBadgeEndpoint = Z + "/badges/full/sync", t.getAllInAppEndpoint = Z + B),
        Ee = t.staticContentHost = 'https://web-sdk.aptrinsic.com',
        Ie = t.widgetUrl = 'https://web-sdk.aptrinsic.com' + "/widget/aptrinsic-widget.js",
        Ce = t.trackKcEndpoint = Z + "/kc",
        Te = t.desktopEngagementTrackEndpoint = "" + $ + J,
        we = t.fetchFeatureRuleEndpoint = "" + $ + X,
        Se = t.snoozeUrl = Z + "/engagement/track/snooze",
        ke = t.trackSurveyCompleteEndpoint = "" + $ + Q,
        xe = t.surveySubmitUrl = Z + "/engagement/survey",
        Oe = t.trackSingleStepEndpoint = Z + "/engagement/survey/step",
        _e = t.trackSinglePageEndpoint = Z + "/engagement/survey/page",
        Ae = {
            click: 2,
            pageView: 1,
            form: 1,
            identify: 0,
            engagementPull: 0
        },
        Pe = ["pageView", "identify", "sessionInitialized", "engagementPull"],
        Le = {},
        Ne = void 0,
        Be = ["labels"],
        Re = void 0,
        De = new x.LocalCache;
    t.overrideConfig = m, t.getConfig = r, t.featureEnabled = v, t.isIframeDisabled = d, t.isIframe = i, t.getConfigObj = o, t.registerConfigChangeHandler = h, t.getDefaultConfiguration = w, t.getKcConfig = I, t.setKcConfig = C, t.setKcConfigByName = T, t.disableTag = f, t.getAssetEndpoint = c, t.setCachedConfig = b, t.getCachedConfig = E, t.widgetContentEndpointGetter = a, t.getWidgetArticleByIdEndpoint = s
}, , function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.logger = void 0;
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(4),
        a = n(12),
        s = n(1),
        l = n(6),
        c = n(13),
        u = (n(21), n(59)),
        d = n(58),
        g = i.eventTrackData,
        f = function () {
            function e() {
                r(this, e);
                var t = d.LocalStorageCookie.getCookie("apt.debug") || u.NativeCookie.getCookie("apt.debug");
                this.debugMode = "true" === t
            }
            return o(e, [{
                key: "log",
                value: function (e) {
                    this.debugMode && console && console.log && console.log(e)
                }
            }, {
                key: "trace",
                value: function (e) {
                    this.debugMode && console && console.trace && console.trace(e)
                }
            }, {
                key: "logInternalMessage",
                value: function (e) {
                    if ((0, s.getConfig)("enableTag") && !(0, s.isIframe)()) {
                        var t = "aptrinsic web sdk error:\n" + JSON.stringify(e) + "\n";
                        this.log(t), a.AjaxUtil.postData(s.internalErrorEndpoint + "?p=" + g.data[i.productIdParameter], e, void 0, void 0, void 0, void 0, !0)
                    }
                }
            }, {
                key: "logInternalError",
                value: function (e, t) {
                    if ((0, s.getConfig)("enableTag")) {
                        if ((0, s.isIframe)()) {
                            t || (t = ""), t += "Error from Iframe: " + window.location.toString();
                            var n = l.IframeRequest.getIframeRequest((0, c.getIframeId)(), "apt-log", {
                                message: e.message,
                                stackTrace: e.stack,
                                extraMessage: t
                            });
                            return void window.top.postMessage(JSON.stringify(n), "*")
                        }
                        var r = "aptrinsic web sdk error: ";
                        t && (r += t + "\n"), r += e.message, e.stack ? (r += ", stack trace: " + e.stack, this.log(r)) : (r += e.message, e.stack ? (r += ", stack trace: " + e.stack, this.log(r)) : this.trace(r)), this.reportToServer(r)
                    }
                }
            }, {
                key: "reportToServer",
                value: function (e) {}
            }]), e
        }();
    t.logger = new f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.EXTRA_ATTRIBUTES_BY_ELEMENT_TYPE = t.path = t.host = t.externalEventListeners = t.globalContextCache = t.eventTrackData = t.aptrinsicGlobalObjName = t.decode = t.documentRef = t.windowRef = t.applicationVersion = t.aptrinsicIdParam = t.sessionIdParam = t.userIdParameter = t.productIdParameter = t.apiMethods = t.trackApiMethod = void 0;
    var r = n(5),
        o = t.trackApiMethod = "track";
    t.apiMethods = [o, "get", "users", "set", "identify", "initWithExternalState", "carousel", "login", "lead", "account", "checklog", "event", "setOnce", "remove", "pageView", "send", "bot", "kcb", "reset", "addListener", "config", "render"], t.productIdParameter = "p", t.userIdParameter = "v", t.sessionIdParam = "s", t.aptrinsicIdParam = "ai", t.applicationVersion = "0.49.0", t.windowRef = window, t.documentRef = document, t.decode = decodeURIComponent, t.aptrinsicGlobalObjName = "aptrinsic", t.eventTrackData = new r.LocalCache, t.globalContextCache = new r.LocalCache, t.externalEventListeners = {}, t.host = location.hostname, t.path = location.pathname + location.search + location.hash, t.EXTRA_ATTRIBUTES_BY_ELEMENT_TYPE = {
        button: ["name", "value", "type"],
        img: ["src", "alt"],
        select: ["name"],
        textarea: ["name"],
        input: ["name", "type"],
        a: ["href"]
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e) {
        return void 0 !== e && null != e && "[object Object]" == Object.prototype.toString.call(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    t.LocalCache = function () {
        function e() {
            r(this, e), this.data = {}, this.callbacks = []
        }
        return i(e, [{
            key: "getdata",
            value: function () {
                return this.data
            }
        }, {
            key: "onChange",
            value: function (e) {
                e && "function" == typeof e && this.callbacks.push(e)
            }
        }, {
            key: "toString",
            value: function () {
                return JSON.stringify(this.data)
            }
        }, {
            key: "setdata",
            value: function (e, t) {
                var n = this;
                try {
                    this.data[e] = t, this.callbacks.forEach(function (e) {
                        e(n.data)
                    })
                } catch (e) {}
            }
        }, {
            key: "mergeData",
            value: function (e, t, n) {
                if (o(t)) {
                    var r = this.data[e];
                    r || (r = {}), n ? Object.keys(t).forEach(function (e) {
                        r.hasOwnProperty(e) || (r[e] = t[e])
                    }) : Object.assign(r, t), this.data[e] = r
                } else {
                    var i = this.getKey(e);
                    n ? !i && this.setdata(e, t) : this.setdata(e, t)
                }
            }
        }, {
            key: "addToMap",
            value: function (e, t, n) {
                var r = this.data[e];
                r || (r = {}), r[t] || (r[t] = {}), Object.assign(r[t], n), this.data[e] = r
            }
        }, {
            key: "getKey",
            value: function (e) {
                return this.data[e]
            }
        }, {
            key: "deleteKey",
            value: function (e) {
                delete this.data[e]
            }
        }]), e
    }();
    t.cacheSet = "setdata", t.cacheGetAll = "getdata", t.cacheGet = "getKey", t.cacheGetAsString = "toString", t.cacheMerge = "mergeData", t.cacheOnChange = "onChange"
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e) {
        for (var t = document.querySelectorAll("frame"), n = void 0, r = 0; r < t.length; r++)
            if (t[r].name === e.name) {
                n = t[r];
                break
            } return n
    }

    function i(e, t, n, r) {
        if (r) {
            var i = o(e);
            I[n] = I[n] || new b(e, t, n, i.getBoundingClientRect())
        } else I[n] = I[n] || new b(e, t, n);
        y.internalEventListener.dispatchEvent("IFRAME_REGISTERED", I[n])
    }

    function a(e) {
        delete I[e]
    }

    function s() {
        return Object.keys(I).map(function (e) {
            return I[e]
        })
    }

    function l(e) {
        return I[e]
    }

    function c(e, t) {
        var n = I[e];
        n && (n.domElement = t, n.isChild = !0)
    }

    function u(e, t, n) {
        var r = {
            callback: t,
            counter: 0,
            data: null,
            additionalData: n
        };
        C[e] = r
    }

    function d(e) {
        C[e].counter++
    }

    function g(e, t) {
        var n = C[e];
        n && (null === n.data && (n.data = []), n.data.push(t), --n.counter <= 0 && (n.timeout && clearTimeout(n.timeout), n.callback(n.data, n.additionalData)))
    }

    function f(e, t) {
        var n = C[e];
        n && t && (n.timeout = setTimeout(function () {
            for (; n.counter > 0;) g(e, {
                error: "PX_INCREMENT_STATE_TIMEOUT_" + n.counter
            })
        }, t))
    }

    function p(e) {
        T[e] = Date.now()
    }

    function m() {
        Object.entries(T).map(function (e) {
            if (e[1] < Date.now() - w) return e[0]
        }).filter(function (e) {
            return void 0 !== e
        }).forEach(function (e) {
            return delete T[e]
        })
    }

    function v(e) {
        return m(), T[e]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkHandledRequest = t.addHandledRequestId = t.execute = t.unregisterIframe = t.associateIframe = t.getIframeData = t.IframeData = t.decrementState = t.incrementState = t.subscribe = t.IframeRequest = t.getRegisteredIframes = t.registerIframe = void 0;
    var h = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        y = n(10),
        b = function e(t, n, o, i) {
            r(this, e), this.iframe = t, this.origin = n, this.iframeId = o, this.frameOffset = i
        },
        E = function () {
            function e(t) {
                if (r(this, e), t && (this.aptrinsicEventType = t.aptrinsicEventType, this.aptrinsicIframeId = t.aptrinsicIframeId, this.content = t.content, this.aptrinsicRequestId = t.aptrinsicRequestId, !this.aptrinsicEventType)) throw new Error("cannot initiate iframe request without event type")
            }
            return h(e, null, [{
                key: "getMasterRequst",
                value: function (t, n, r, o) {
                    var i = new e({
                        aptrinsicIframeId: o,
                        aptrinsicEventType: t,
                        content: n,
                        aptrinsicRequestId: r
                    });
                    if (!i.aptrinsicEventType) throw new Error("cannot initiate iframe request without event type");
                    return i
                }
            }, {
                key: "getIframeRequest",
                value: function (t, n, r, o) {
                    var i = new e({
                        aptrinsicIframeId: t,
                        aptrinsicEventType: n,
                        content: r,
                        aptrinsicRequestId: o
                    });
                    if (!i.aptrinsicEventType) throw new Error("cannot initiate iframe request without event type");
                    if (!i.aptrinsicIframeId) throw new Error("cannot initiate iframe request without iframe id");
                    return i
                }
            }]), e
        }(),
        I = {},
        C = {},
        T = {},
        w = 6e4;
    t.registerIframe = i, t.getRegisteredIframes = s, t.IframeRequest = E, t.subscribe = u, t.incrementState = d, t.decrementState = g, t.IframeData = b, t.getIframeData = l, t.associateIframe = c, t.unregisterIframe = a, t.execute = f, t.addHandledRequestId = p, t.checkHandledRequest = v
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = (0, N.createElement)("div", n);
        return e = o(e), r.innerHTML = e, t ? r.firstChild : r
    }

    function o(e) {
        var t = (0, B.getConfig)("cssNonce");
        if (t) {
            var n = /<style(>|[ ]+[^>]*>)/g;
            e = e.replace(n, '<style nonce="' + t + '"$1')
        }
        return e
    }

    function i(e) {
        var t = "" + +new Date + Math.random();
        try {
            var n = e;
            return n[t] = "asd", "asd" === n[t]
        } catch (e) {
            return !1
        }
    }

    function a(e, t) {
        var n = window.top.document.querySelector(e),
            r = void 0;
        if (n) return {
            element: n,
            sourceIframe: null
        };
        try {
            if ((0, N.isNotEmptyArr)(t))
                for (var o = 0; o < t.length && (r = t[o], !i(r) || !(n = r.iframe.document.querySelector(e))); o++);
        } catch (e) {}
        return n ? {
            element: n,
            sourceIframe: n ? r : void 0
        } : void 0
    }

    function s(e, t) {
        var n = void 0,
            r = void 0;
        try {
            if ((0, N.isNotEmptyArr)(t))
                for (var o = 0; o < t.length && (r = t[o], !i(r) || !(n = r.iframe.document.querySelector(e))); o++);
        } catch (e) {}
        return {
            element: n,
            sourceIframe: n ? r : void 0
        }
    }

    function l(e, t, n) {
        return t[n ? "querySelectorAll" : "querySelector"](e)
    }

    function c(e) {
        for (var t = e; t && "BODY" !== t.tagName;) {
            if (1 === t.nodeType && (t.classList.contains("apt-guide-popup") || "true" === t.getAttribute("data-apt-disable-selector") || t.classList.value.indexOf("apt-") > -1 || t.classList.value.indexOf("aptr-") > -1)) return !1;
            t = t.parentNode
        }
        return !0
    }

    function u(e, t, n) {
        var r = void 0,
            o = void 0,
            i = null;
        for (e = e.firstChild; e; e = e.nextSibling)
            if (r = e.nodeType, o = "", r === W || r === G && -1 == q.indexOf(e.tagName.toLowerCase()) && c(e))
                if (o = e.textContent, o = o.trim(), e.childNodes && e.childNodes.length > 0) {
                    var a = void 0,
                        s = "";
                    switch (t) {
                        case "is":
                        case "startsWith":
                        case "endsWith":
                        case "contains":
                            a = "contains", s = n;
                            break;
                        case "isNot":
                        case "notContains":
                        case "notStartsWith":
                        case "notEndsWith":
                            a = "isNotEmpty";
                            break;
                        case "isNotEmpty":
                            a = t
                    }
                    if (("isEmpty" === t || (0, M.matchExpression)(o, a, s)) && (i = u(e, t, n))) return i
                } else {
                    if (r === W && (0, M.matchExpression)(o, t, n) && (0, N.isElementVisible)(e.parentNode)) return e.parentNode;
                    if (r === G && (0, M.matchExpression)(o, t, n) && (0, N.isElementVisible)(e)) return e
                } return i
    }

    function d(e, t, n) {
        var r = void 0,
            o = void 0;
        if (e.matchCssSelector) {
            if (o = (0, V.findElementsInShadowDom)(e.cssSelector, t), (0, N.isEmptyArr)(o)) return null;
            if (e.matchTextRule) {
                for (var i = [], a = 0; a < o.length; a++)
                    if (r = o[a], (0, M.matchExpression)((0, N.isBlank)(r.textContent) ? "" : r.textContent.trim(), e.textRuleOperator, e.textRuleValues[0])) {
                        if (!n) return r;
                        i.push(r)
                    } return (0, N.isEmptyArr)(i) ? null : i
            }
            return n ? o : o[0]
        }
        if (e.matchTextRule) {
            var s = u((0, B.getBody)(), e.textRuleOperator, e.textRuleValues[0]);
            return s && n ? [s] : s
        }
        return null
    }

    function g(e, t) {
        var n = [],
            r = window.top.document.querySelector(e);
        r && n.push(r);
        try {
            var o = void 0;
            if (t)
                for (var a = 0; a < t.length; a++) o = t[a], i(o) && (r = o.iframe.document.querySelector(e)) && n.push(r)
        } catch (e) {}
        return n
    }

    function f(e) {
        var t = e.ownerDocument;
        return t.defaultView || t.parentWindow
    }

    function p(e) {
        return e.ownerDocument.defaultView.frameElement
    }

    function m(e) {
        try {
            for (var t = 0, n = 0, r = 0, o = 0, i = e.ownerDocument.defaultView; i !== window.top;) {
                var a = i.frameElement.getBoundingClientRect();
                t += a.top, n += a.left, r += a.right, o += a.bottom, i = i.frameElement.ownerDocument.defaultView
            }
            return {
                top: t,
                left: n,
                right: r,
                bottom: o
            }
        } catch (e) {
            return R.logger.logInternalError(e), {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function v(e) {
        if (!e || !(0, N.isElementVisible)(e)) return null;
        var t = void 0;
        return t = "input" === e.tagName.toLowerCase() ? e.value : e.textContent, (0, N.isUndefinedStr)(t) ? null : t.trim()
    }

    function h(e) {
        return v(l(e, document))
    }

    function y(e, t, n) {
        var r = n ? n + " ." + t : "." + t,
            o = e.indexOf(t);
        if (o > -1) {
            var i = e.indexOf("}", o),
                a = e.substring(0, o - 1),
                s = e.substring(i + 1, e.length),
                l = e.substring(o - 1, i + 1),
                c = (a + s).replace(H, r + " $1 $2");
            return n ? n + " " + l + c : l + c
        }
        return e.replace(H, r + " $1 $2")
    }

    function b(e, t, n, r) {
        if (!(0, N.isBlank)(t)) {
            var o = document.createElement("style"),
                i = (0, B.getConfig)("cssNonce");
            i && (o.nonce = i), o.type = "text/css", t = n ? y(t, n, r) : t, o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t)), e.appendChild(o)
        }
    }

    function E() {
        var e = F.documentRef.documentElement,
            t = (0, D.detectIE)();
        if (t) {
            e = t <= U.LAST_IE_VERSION ? F.documentRef.documentElement : F.documentRef.body
        }
        return e
    }

    function I() {
        var e = (0, D.detectIE)(),
            t = !1;
        return e && (t = e < 79), t
    }

    function C(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        try {
            if (e) {
                var n = E(),
                    r = n.scrollTop,
                    o = n.scrollLeft;
                e.focus({
                    preventScroll: t
                }), t && I() && (n.scrollLeft = o, n.scrollTop = r)
            }
        } catch (e) {
            R.logger.logInternalError(e, "FocusElement - could not focus on element")
        }
    }

    function T(e, t) {
        try {
            (0, N.addEventListener)(e, "mousedown", function (e) {
                e.preventDefault(), t && C(t)
            })
        } catch (e) {
            R.logger.log(e, "disableFocusOnClick")
        }
    }

    function w(e) {
        return "object" === ("undefined" == typeof HTMLElement ? "undefined" : L(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : L(e)) && 1 === e.nodeType && "string" == typeof e.nodeName
    }

    function S(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, t.textContent
    }

    function k(e, t) {
        ["webkitTransitionEnd", "mozTransitionEnd", "oTransitionEnd", "transitionend"].forEach(function (n) {
            (0, N.addEventListener)(e, n, t)
        })
    }

    function x(e, t) {
        ["webkitTransitionEnd", "mozTransitionEnd", "oTransitionEnd", "transitionend"].forEach(function (n) {
            (0, N.removeEventListener)(e, n, t)
        })
    }

    function O(e, t) {
        ["webkitTransitionStart", "mozTransitionStart", "oTransitionStart", "transitionstart"].forEach(function (n) {
            (0, N.addEventListener)(e, n, t)
        })
    }

    function _(e, t) {
        ["webkitTransitionStart", "mozTransitionStart", "oTransitionStart", "transitionstart"].forEach(function (n) {
            (0, N.removeEventListener)(e, n, t)
        })
    }

    function A(e) {
        return e.tagName && "function" == typeof e.tagName.toLowerCase ? e.tagName : e.nodeName
    }

    function P(e, t) {
        return t === e || t.isEqualNode(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkIfSameElement = t.getTagName = t.removeTransitionStartListener = t.addTransitionStartListener = t.removeTransitionEndListener = t.addTransitionEndListener = t.stripHtml = t.isElement = t.addNonceToDomString = t.disableFocusOnClick = t.focusElement = t.getText = t.findElementInWindow = t.observeDOM = t.addStyleTag = t.getElementText = t.getIframeOffsetOfElement = t.getContainingIframeOfElement = t.getParentWindowOfElement = t.findElementInFrames = t.findInWindow = t.findAllElements = t.findElement = t.checkIframe = t.toDom = void 0;
    var L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        N = n(0),
        B = n(1),
        R = n(3),
        D = n(9),
        M = n(89),
        U = n(8),
        F = n(4),
        V = n(19),
        j = n(30),
        H = /([^]*?)({[^]*?}|,)/g,
        q = ["script", "style"],
        W = 3,
        G = 1,
        K = function () {
            var e = (0, j.getNativeMutationObserver)();
            return function (t, n) {
                if (t && 1 !== !t.nodeType)
                    if (e) {
                        var r = new e(function (e) {
                            n(e)
                        });
                        r.observe(t, {
                            childList: !0,
                            subtree: !0
                        })
                    } else window.addEventListener && (t.addEventListener("DOMNodeInserted", n, !1), t.addEventListener("DOMNodeRemoved", n, !1))
            }
        }();
    t.toDom = r, t.checkIframe = i, t.findElement = a, t.findAllElements = g, t.findInWindow = l, t.findElementInFrames = s, t.getParentWindowOfElement = f, t.getContainingIframeOfElement = p, t.getIframeOffsetOfElement = m, t.getElementText = h, t.addStyleTag = b, t.observeDOM = K, t.findElementInWindow = d, t.getText = v, t.focusElement = C, t.disableFocusOnClick = T, t.addNonceToDomString = o, t.isElement = w, t.stripHtml = S, t.addTransitionEndListener = k, t.removeTransitionEndListener = x, t.addTransitionStartListener = O, t.removeTransitionStartListener = _, t.getTagName = A, t.checkIfSameElement = P
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = t.MAX_TAB_INDEX = 32767,
        o = (t.TAB_INDEX_START = r - 1e3, t.NO_TAB_INDEX = -1, t.LAST_IE_VERSION = 11, t.DESKTOP_CHANNEL = 4, t.PROD_ENVIRONMENT = 1, t.GLOBAL_CONTEXT_CHANGED = "GLOBAL_CONTEXT_CHANGED", t.TEXT_OPERATOR_IS = "is", t.IN_APP_GUIDE = "IN_APP_GUIDE", t.IN_APP_MULTIPLE_QUESTION_SURVEY = "IN_APP_MULTIPLE_QUESTION_SURVEY", t.IN_APP_RATING_SURVEY = "IN_APP_RATING_SURVEY"),
        i = t.IN_APP_SURVEY_NPS = "IN_APP_SURVEY_NPS",
        a = t.IN_APP_BOOLEAN_SURVEY = "IN_APP_BOOLEAN_SURVEY",
        s = t.IN_APP_CES_SURVEY = "IN_APP_CES_SURVEY";
    t.SCORE_SURVEY_TYPES = [o, i, a, s], t.ACTIVATION_TYPE_AUTOMATIC = "a", t.EDITOR_ACTIVATION_TYPE_AUTOMATIC = "APPLICATION", t.VIEW_TYPE_BAR = "BAR", t.SET_USER_ATTRIBUTE_EVENT_NAME = "GAINSIGHT_PX_SET_USER_ATTRIBUTE", t.DEFAULT_STORAGE_DOMAIN = "https://storage.googleapis.com"
}, function (e, t, n) {
    "use strict";

    function r() {
        try {
            return localStorage.setItem("aptTest", "aptTest"), localStorage.removeItem("aptTest"), !0
        } catch (e) {
            return !1
        }
    }

    function o() {
        if ((0, w.getConfig)("localStorageCookie")) return _ = document.location.hostname;
        if (O !== document.location.hostname) {
            O = document.location.hostname;
            var e = new Date,
                t = void 0,
                n = void 0,
                r = "apt.temp-" + Date.now() + E.UUIDGenerator.generateRandom(8),
                o = document.location.hostname.split("."),
                i = m();
            if (e.setTime(Date.now() + 6e4), 1 == o.length) return _ = "";
            for (var a = o.length - 1; a >= 0; a--)
                if (t = o.slice(a).join("."), n = "." + t, document.cookie = r + "=cookie;domain=" + n + "; expires=" + e.toUTCString() + i, document.cookie.indexOf(r) > -1) return document.cookie = r + "=;domain=" + n + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;" + i, _ = "." + t;
            _ = document.location.hostname
        }
        return _
    }

    function i(e) {
        var t = null;
        return window.innerWidth && !e ? t = window.innerWidth : document.documentElement && document.documentElement.clientWidth ? t = document.documentElement.clientWidth : (0, w.getBody)() && (t = (0, w.getBody)().clientWidth), t || 0
    }

    function a() {
        var e = null;
        return window.innerHeight ? e = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? e = document.documentElement.clientHeight : (0, w.getBody)() && (e = (0, w.getBody)().clientHeight), e || 0
    }

    function s() {
        var e = document,
            t = e.body,
            n = document.documentElement;
        return Math.max(t.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)
    }

    function l() {
        if (!S) {
            S = !0;
            for (var e = 0; e < x.length; e++) {
                var t = Array.prototype.slice.call(x[e]),
                    n = t.shift();
                try {
                    n.apply(window, t)
                } catch (e) {}
            }
            x = []
        }
    }

    function c() {
        "complete" === document.readyState && ready()
    }

    function u(e) {
        if (S) {
            var t = [].slice.call(arguments, 1);
            return void setTimeout(function () {
                e.apply(window, t)
            }, 1)
        }
        x.push(arguments), "complete" === document.readyState ? setTimeout(l, 1) : k || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", l, !1), window.addEventListener("load", l, !1)) : (document.attachEvent("onreadystatechange", c), window.attachEvent("onload", l)), k = !0)
    }

    function d(e) {
        if ((0, C.isBlank)(e)) return null;
        try {
            var t = I.documentRef.createElement("a");
            return t.href = e, {
                protocol: t.protocol + "//",
                host: t.host,
                pathname: t.pathname,
                search: t.search,
                hash: t.hash
            }
        } catch (e) {
            return null
        }
    }

    function g(e) {
        var t = e || window.navigator.userAgent,
            n = t.indexOf("MSIE ");
        if (n > 0) return parseInt(t.substring(n + 5, t.indexOf(".", n)), 10);
        if (t.indexOf("Trident/") > 0) {
            var r = t.indexOf("rv:");
            return parseInt(t.substring(r + 3, t.indexOf(".", r)), 10)
        }
        var o = t.indexOf("Edge/");
        return o > 0 && parseInt(t.substring(o + 5, t.indexOf(".", o)), 10)
    }

    function f() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
    }

    function p() {
        return window.self !== window.top.parent && !window.runVue
    }

    function m() {
        return p() && I.documentRef.location.protocol.startsWith("https") || f() ? "; SameSite=None; Secure" : (0, w.getConfig)("secureCookie") ? "; Secure" : ""
    }

    function v(e, t, n) {
        n && (e.style[t] = n)
    }

    function h() {
        var e = g();
        return e && e < T.LAST_IE_VERSION ? "MSPointerDown" : "pointerdown"
    }

    function y() {
        var e = g();
        return e && e < T.LAST_IE_VERSION ? "MSPointerUp" : "pointerup"
    }

    function b() {
        var e = navigator.userAgent,
            t = void 0,
            n = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        return /trident/i.test(n[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [], {
            name: "IE",
            version: t[1] || ""
        }) : "Chrome" === n[1] && null != (t = e.match(/\bOPR|Edge\/(\d+)/)) ? {
            name: "Opera",
            version: t[1]
        } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], t = e.match(/version\/(\d+)/i), null != t && n.splice(1, 1, t[1]), {
            name: n[0].toLowerCase(),
            version: n[1]
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getBrowserDetails = t.getPointerDownEventName = t.getPointerUpEventName = t.applyStyle = t.getSameSiteCookieSuffix = t.detectIE = t.localStorageEnabled = t.url2Location = t.getDomain = t.addDOMReadyListener = t.getFullPageHeight = t.getPageHeight = t.getPageWidth = void 0;
    var E = n(16),
        I = n(4),
        C = n(0),
        T = n(8),
        w = n(1),
        S = !1,
        k = !1,
        x = [],
        O = null,
        _ = null;
    t.getPageWidth = i, t.getPageHeight = a, t.getFullPageHeight = s, t.addDOMReadyListener = u, t.getDomain = o, t.url2Location = d, t.localStorageEnabled = r, t.detectIE = g, t.getSameSiteCookieSuffix = m, t.applyStyle = v, t.getPointerUpEventName = y, t.getPointerDownEventName = h, t.getBrowserDetails = b
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e) {
        return u.getKey(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.internalEventListener = void 0;
    var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(5),
        s = n(0),
        l = n(3),
        c = n(16),
        u = new a.LocalCache,
        d = function () {
            function e() {
                r(this, e)
            }
            return i(e, [{
                key: "addListener",
                value: function (e, t, n, r, o) {
                    var i = c.UUIDGenerator.generateV4Id(),
                        a = u.getKey(e);
                    a || (a = [], u.setdata(e, a));
                    for (var s = !1, l = 0; l < a.length; l++)
                        if (a[l].callback === t) {
                            s = !0;
                            break
                        } s || a.push({
                        listenerId: i,
                        callback: t,
                        thisReference: n,
                        isExternal: r,
                        executeOnce: o
                    })
                }
            }, {
                key: "removeListener",
                value: function (e, t, n) {
                    var r = u.getKey(e);
                    if ((0, s.isNotEmptyArr)(r))
                        for (var o = 0; o < r.length; o++) r[o].callback !== t && r[o].listenerId !== n || r.splice(o, 1)
                }
            }, {
                key: "dispatchEvent",
                value: function (e) {
                    try {
                        var t = o(e),
                            n = [];
                        arguments.length > 1 && (n = Array.prototype.slice.call(arguments, 1));
                        var r = [];
                        t && t.forEach(function (t, o) {
                            var i = this;
                            try {
                                t.isExternal ? setTimeout(function () {
                                    t.callback.apply(t.thisReference || i, n)
                                }, 0) : t.executeOnce && !t.executed ? (t.executed = !0, r.unshift(o), t.callback.apply(t.thisReference || this, n)) : t.callback.apply(t.thisReference || this, n)
                            } catch (t) {
                                l.logger.logInternalError(t, "Error while executing listener for type " + e)
                            }
                        }), r.length > 0 && r.forEach(function (e) {
                            return t.splice(e, 1)
                        })
                    } catch (t) {
                        l.logger.logInternalError(t, "Error while trying to execute listeners for type" + e)
                    }
                }
            }]), e
        }(),
        g = new d;
    t.internalEventListener = g
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if (Array.prototype.toJSON) {
            var t = "",
                n = Array.prototype.toJSON;
            delete Array.prototype.toJSON;
            try {
                t = JSON.stringify(e)
            } catch (e) {
                throw e
            } finally {
                Array.prototype.toJSON = n
            }
            return t
        }
        return JSON.stringify(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.jsonStringify = r;
    var o = function (e) {
        return !!e && /\{\s+\[native code\]/.test(Function.prototype.toString.call(e))
    }(Array.from) ? Array.from : function () {
        var e = Object.prototype.toString,
            t = function (t) {
                return "function" == typeof t || "[object Function]" === e.call(t)
            },
            n = function (e) {
                var t = Number(e);
                return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
            },
            r = Math.pow(2, 53) - 1,
            o = function (e) {
                var t = n(e);
                return Math.min(Math.max(t, 0), r)
            };
        return function (e) {
            var n = this,
                r = Object(e);
            if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var i = arguments.length > 1 ? arguments[1] : void 0,
                a = void 0;
            if (void 0 !== i) {
                if (!t(i)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (a = arguments[2])
            }
            for (var s = o(r.length), l = t(n) ? Object(new n(s)) : new Array(s), c = 0, u = void 0; c < s;) u = r[c], l[c] = i ? void 0 === a ? i(u, c) : i.call(a, u, c) : u, c += 1;
            return l.length = s, l
        }
    }();
    t.arrayFrom = o
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t, n, r, o, i, f, p, m) {
        try {
            var v = g.createCors(e, t, m);
            if (!v) {
                if (p) return;
                throw new Error("cannot make request to " + t + " not supported")
            }
            if (f && v.setRequestHeader("Content-Type", "application/json"), o)
                for (var h in o) o.hasOwnProperty(h) && v.setRequestHeader(h, o[h]);
            v.onload = function () {
                try {
                    var o = v.responseText,
                        i = null;
                    if ("" !== o) try {
                        i = JSON.parse(o)
                    } catch (e) {
                        i = o
                    }
                    if (v.status >= 200 && v.status < 300) {
                        var d = a.eventTrackData[l.cacheGet](a.productIdParameter);
                        if (i && i.p && d && !(0, c.isApiKeyMatch)(i.p, d) && !(0, u.getConfig)("crossProductEngagement")) return;
                        n && n(i)
                    } else s.logger.log("error " + v.statusText + " happened in the request: " + e + " " + t), r && r(v.status, i)
                } catch (e) {
                    if (p) return;
                    s.logger.logInternalError(e)
                }
            }, v.onerror = function () {
                p || (r && r(), s.logger.log("error happened in the request: " + e + " " + t))
            }, v.PXsource = "true", i && "GET" !== e ? v.send((0, d.jsonStringify)(i)) : v.send()
        } catch (e) {
            if (p) return;
            var y = "sendAjaxRequest: ";
            if (y += "URL: '" + t + "'\n", i) try {
                y += "Data: '" + (0, d.jsonStringify)(i) + "'\n"
            } catch (e) {}
            s.logger.logInternalError(e, y)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AjaxUtil = void 0;
    var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(4),
        s = n(3),
        l = n(5),
        c = n(18),
        u = n(1),
        d = n(11),
        g = function () {
            function e() {
                r(this, e)
            }
            return i(e, null, [{
                key: "createCors",
                value: function (e, t, n) {
                    var r = new XMLHttpRequest,
                        o = void 0 === n ? (0, u.getConfig)("requestTimeoutDefault") : n;
                    return o && (r.timeout = o), "withCredentials" in r ? r.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (r = new XDomainRequest, r.open(e, t)) : r = null, r
                }
            }, {
                key: "postData",
                value: function (e, t, n, r, i, a, s, l) {
                    o("POST", e, r, i, n, t, a, s, l)
                }
            }, {
                key: "putData",
                value: function (e, t, n, r, i, a) {
                    o("PUT", e, r, i, n, t, a)
                }
            }, {
                key: "getData",
                value: function (e, t, n, r, i, a, s) {
                    o("GET", e, t, r, n, null, i, a, s)
                }
            }, {
                key: "deleteData",
                value: function (e, t, n, r, i, a) {
                    o("DELETE", e, r, i, n, t, a)
                }
            }, {
                key: "loadFile",
                value: function (e, t, n) {
                    try {
                        var r = null;
                        switch (e) {
                            case "js":
                                r = a.documentRef.createElement("script"), r.async = !0, r.type = "text/javascript", r.src = t;
                                break;
                            case "css":
                                r = a.documentRef.createElement("link"), r.rel = "stylesheet", r.type = "text/css", r.href = t, n && (r.crossOrigin = "anonymous");
                                break;
                            default:
                                throw new Error("unknown type " + e)
                        }
                        a.documentRef.getElementsByTagName("head")[0].appendChild(r)
                    } catch (e) {
                        s.logger.logInternalError(e)
                    }
                }
            }]), e
        }();
    t.AjaxUtil = g
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        try {
            if ((0, p.isIframe)() || (0, m.isEmptyArr)(t)) return;
            t.forEach(function (t) {
                e.aptrinsicIframeId = t.iframeId, t.iframe && t.iframe.postMessage(JSON.stringify(e), t.origin)
            })
        } catch (e) {
            v.logger.logInternalError(e)
        }
    }

    function o(e) {
        try {
            if (!(e && e.data && ("string" == typeof e.data || e.data instanceof String) && e.data.startsWith("{"))) return null;
            return new h.IframeRequest(JSON.parse(e.data))
        } catch (e) {
            return null
        }
    }

    function i(e, t, n) {
        var r = (0, p.getConfig)("trustedOrigin"),
            o = void 0;
        o = n ? r || "*" : t.location.protocol + "//" + ((0, m.isValidPort)(t.location.port) ? t.location.host : t.location.hostname), t.postMessage(JSON.stringify(e), o)
    }

    function a(e, t) {
        var n = (0, p.getConfig)("trustedOrigin");
        n && n !== t.origin || t.iframe.postMessage(JSON.stringify(e), t.origin)
    }

    function s() {
        return window.aptrinsicIframeId = window.aptrinsicIframeId || y.UUIDGenerator.generateV4Id()
    }

    function l(e) {
        var t = (0, b.getDomain)();
        e = (0, m.safeUrl)(e, !0), e.indexOf(":") > -1 && -1 === t.indexOf(":") && (e = e.split(":")[0]);
        var n = e.endsWith(t),
            r = e.indexOf(t) > -1,
            o = (0, p.getConfig)("trustedOrigin");
        return (!o || (0, m.safeUrl)(o, !0) === e) && (!n && r && v.logger.logInternalError(new Error("iframe validate domain suffix does not match but domain " + t + " found in " + e)), !(!n && 0 !== e.indexOf(t.substring(1, t.length)) && !(0, p.getConfig)("allowCrossDomain")))
    }

    function c(e) {
        var t = window,
            n = t.frames;
        if (n.length > 0)
            for (var r = 0; r < n.length; r++)
                if (n[r] === e.source) {
                    var o = n[r].getBoundingClientRect();
                    return {
                        top: o.top,
                        right: o.right,
                        bottom: o.bottom,
                        left: o.left,
                        width: o.width,
                        height: o.height,
                        x: o.x,
                        y: o.y
                    }
                } return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }

    function u(e, t, n, r) {
        var o = y.UUIDGenerator.generateV4Id();
        (0, h.subscribe)(o, r), a(h.IframeRequest.getMasterRequst(e, t, o), n), (0, h.incrementState)(o)
    }

    function d(e, t, n) {
        var r = y.UUIDGenerator.generateV4Id();
        (0, h.subscribe)(r, n), i(h.IframeRequest.getIframeRequest(s(), e, t, r), window.top, !0), (0, h.incrementState)(r)
    }

    function g(e) {
        if (e.length > 0)
            for (var t = 0; t < e.length; t++) {
                (function (t) {
                    if (!e[t].src.startsWith("http")) return "continue";
                    var n = document.createElement("a");
                    n.href = e[t].src;
                    var r = n.protocol + "//" + ((0, m.isValidPort)(n.port) ? n.host : n.hostname),
                        o = !1;
                    (0, m.retryFunction)(5, 500, function () {
                        o || u("getChildAssociation", null, new h.IframeData(e[t].contentWindow, r), function (n) {
                            (0, h.associateIframe)(n[0].iframeId, e[t]), o = !0
                        })
                    })
                })(t)
            }
    }

    function f(e, t) {
        var n = (0, h.getIframeData)(e);
        if (!n) return [];
        var r = n.domElement,
            o = (0, p.getConfig)("framesetMode"),
            i = o ? n.frameOffset : r.getBoundingClientRect(),
            a = o || (0, m.isElementVisible)(r, !0),
            s = [];
        return Array.isArray(t) && (s = t.map(function (e) {
            return Object.assign({}, e, {
                isVisible: e.isVisible && a,
                rect: Object.assign({}, e.rect, {
                    top: e.rect.top + i.top,
                    left: e.rect.left + i.left,
                    right: e.rect.right + i.right,
                    bottom: e.rect.bottom + i.bottom
                })
            })
        })), s
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isValidPort = t.fixBadgesLocations = t.iframeSubscribeCallback = t.createSubscribeCallbackRequest = t.associateChildIframes = t.getIframeBoundingRect = t.getIframeId = t.isValidCallingDomain = t.postRequestDown = t.postRequest = t.parseEvent = t.propagateDown = void 0;
    var p = n(1),
        m = n(0),
        v = n(3),
        h = n(6),
        y = n(16),
        b = n(9);
    t.propagateDown = r, t.parseEvent = o, t.postRequest = i, t.postRequestDown = a, t.isValidCallingDomain = l, t.getIframeId = s, t.getIframeBoundingRect = c, t.associateChildIframes = g, t.createSubscribeCallbackRequest = u, t.iframeSubscribeCallback = d, t.fixBadgesLocations = f, t.isValidPort = m.isValidPort
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function o(e) {
        var t = decodeURIComponent(e);
        if (t.indexOf("?redirect=") > -1) {
            var n = document.createElement("a");
            return n.href = t.substring("?redirect=".length), n.search
        }
        return t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.previewEndpoint = void 0;
    var i = n(36),
        a = n(0),
        s = n(12),
        l = n(1),
        c = n(58),
        u = n(59),
        d = window,
        g = 'https://app-be.aptrinsic.com' + "/api/editor/v2/preview",
        f = new function () {
            var e = void 0,
                t = void 0,
                n = {},
                f = void 0,
                p = void 0,
                m = void 0,
                v = function () {
                    return f.push(arguments), !0
                };
            return d.guideEditor = d.guideEditor || v, f = d.guideEditor.q || [], d.guideEditor.q = d.guideEditor.q || f, v.getQueue = function () {
                    return f
                }, v.isEditorMode = function () {
                    return e && t
                }, v.isEngagementEditorV2 = function () {
                    return "7" === t
                }, v.getToken = function () {
                    return e
                }, v.getType = function () {
                    return t
                }, v.isPreview = function () {
                    return "true" === n.aptPreview
                }, v.getPreviewUrl = function () {
                    return g + "/" + n.groupId + "/" + n.contentId + "?lang=" + n.aptLang
                }, v.loadEditor = function (e) {
                    p = p || e;
                    return "1" === t ? s.AjaxUtil.loadFile("js", l.staticContentHost + "/api/editor.js?a=" + e) : "2" === t ? s.AjaxUtil.loadFile("js", l.staticContentHost + "/api/guide-editor.min.js?a=" + e) : v.isEngagementEditorV2() && s.AjaxUtil.loadFile("js", l.staticContentHost + "/api/engagement-editor.min.js?a=" + e), !0
                }, v.getAdditionalDetails = function () {
                    return n
                }, v.replaceCall = function (e) {
                    v = e
                }, v.exit = function () {
                    sessionStorage.removeItem("apt.token"), i.Cookie.deleteCookie("apt.token")
                }, v.cleanEngagementData = function () {
                    var e = "queryParam" === m ? d.location.search : d.location.hash,
                        t = void 0;
                    t = e.indexOf("aptToken");
                    var n = t > -1 ? e.substring(0, t - 1) : e,
                        r = d.location.protocol + "//" + d.location.host + d.location.pathname;
                    return r += "queryParam" === m ? n + d.location.hash : d.location.search + n
                }, v.getProductKey = function () {
                    return p
                }, v.getQueryParams = function () {
                    var o;
                    return Object.assign((o = {}, r(o, "aptToken", e), r(o, "aptEditor", t), r(o, "aptProductKey", p), o), n)
                }, v.saveConfig = function () {
                    if (e && t && 3 != t && 4 != t && 5 != t) {
                        var r = [e, t, 1 != t ? JSON.stringify(n) : "{}"].join("&");
                        (0, l.getConfig)("useSessionStorageEditorToken") ? (sessionStorage.setItem("apt.token", r), i.Cookie.deleteCookie("apt.token")) : (i.Cookie.setCookie("apt.token", r), sessionStorage.removeItem("apt.token"))
                    }
                },
                function () {
                    var r = d.location.search,
                        i = d.location.hash;
                    r = o(r);
                    var s = (0, a.isBlank)(r) ? -1 : r.indexOf("aptToken"),
                        l = (0, a.isBlank)(i) ? -1 : i.indexOf("aptToken"),
                        g = -1,
                        f = void 0;
                    if (s > -1 ? (g = s, f = "queryParam") : l > -1 && (g = l, f = "hash"), g > -1) {
                        m = f;
                        var v = void 0;
                        v = "queryParam" === m ? r : i;
                        for (var h = v.substring(g).split("&"), y = 0; y < h.length; y++) {
                            var b = h[y].split("=");
                            switch (b[0]) {
                                case "aptToken":
                                    e = b[1];
                                    break;
                                case "aptEditor":
                                    t = b[1];
                                    break;
                                case "aptProductKey":
                                    p = b[1];
                                    break;
                                case "guideId":
                                case "groupId":
                                case "engagementId":
                                case "contentId":
                                case "aptPreview":
                                case "kcId":
                                case "aptLang":
                                case "selectedFeature":
                                case "isParentSubscription":
                                case "isChildSubscription":
                                    n[b[0]] = b[1]
                            }
                        }
                        v.includes("isEditorV2=true") && v.includes("aptProductKey=AP-E9VUBBLZ6BIS-2") && (t = "7")
                    } else {
                        var E = sessionStorage.getItem("apt.token") || c.LocalStorageCookie.getCookie("apt.token") || u.NativeCookie.getCookie("apt.token", !0),
                            I = E && E.split("&");
                        (0, a.isNotEmptyArr)(I) && I.length > 1 && (e = I[0]) && (t = I[1]) && (n = JSON.parse(I[2]))
                    }
                }(), v
        };
    t.default = f, t.previewEndpoint = g
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        return e === W.ACTIVATION_TYPE_AUTOMATIC && t && t.enabled || n && n.indexOf(W.EDITOR_ACTIVATION_TYPE_AUTOMATIC) > -1
    }

    function o(e, t, n) {
        var r = t.backgroundColor,
            o = t.backgroundFill,
            i = t.textColor,
            a = t.cornerRadius,
            s = t.hoverBackgroundColor,
            l = t.hoverBackgroundFill,
            c = t.hoverBorderColor,
            u = t.hoverTextColor,
            d = t.borderColor,
            g = t.borderWidth,
            f = ".px-step-navigation-" + n + " {",
            p = ".px-step-navigation-" + n + ":hover {";
        f += "background-color: " + (o > -1 ? (0, M.hexToRgba)(r, o / 100) : r) + ";", p += "background-color: " + (l > -1 ? (0, M.hexToRgba)(s, l / 100) : s) + ";", f += "color: " + i + ";", p += "color: " + u + ";", f += "border-radius: " + a + "px;", f += "border-width: " + g + "px;", f += "border-color: " + d + ";", p += "border-color: " + c + ";", f += "}", p += "}", (0, M.addStyle)(f + p, "px-step-navigation-" + n, e)
    }

    function i(e, t, n) {
        if (!$.default.isEditorMode()) {
            var r = [];
            r = (0, M.addParameters)(j.eventTrackData[V.cacheGetAll](), r), (0, M.addParameters)({
                ei: e.engagementId,
                ecoi: e.contentId || e.content.id,
                evi: e.matchEventId || null,
                ent: e.contentTypeId || e.content.contentTypeId,
                acci: e.accountId,
                exi: e.executionId,
                ext: e.executionTimestamp,
                cl: e.contentLocale,
                at: e.activationType || "a",
                cosi: t,
                cossn: n
            }, r);
            var o = (0, J.getGlobalContext)();
            o && (0, M.addParameters)({
                gcx: JSON.stringify(o)
            }, r), r = (0, M.addParameters)((0, X.getWebContext)(), r), K.AjaxUtil.getData(z.snoozeUrl + "?" + (0, M.convert2Parameters)(r))
        }
    }

    function a(e, t, n, r, a, s) {
        var l = e.text || "Show me later",
            c = (0, M.createElement)("button", ["px-step-navigation-snooze"], {
                text: l
            });
        return c.setAttribute(ne, "true"), c.setAttribute("aria-label", l), t.appendChild(c), o(c, e, "snooze"), (0, M.addEventListener)(c, "click", function () {
            i(n, r, a), s()
        }), (0, U.disableFocusOnClick)(c), c
    }

    function s(e, t, n, r) {
        var o = {
            ei: e.engagementId,
            ecoi: e.contentId || e.content.id,
            ent: e.contentTypeId || e.content.contentTypeId,
            evi: e.matchEventId,
            ett: t,
            exi: e.executionId,
            ext: e.executionTimestamp
        };
        n && (o.cosi = n, (r || 0 === r) && (o.cossn = r));
        var i = (0, M.addParameters)(o, []),
            a = (0, J.getGlobalContext)();
        return a && (0, M.addParameters)({
            gcx: JSON.stringify(a)
        }, i), i = (0, M.addParameters)(j.eventTrackData[V.cacheGetAll](), i)
    }

    function l(e) {
        var t = void 0;
        switch (e) {
            case "IN_APP_DIALOG":
                t = "Dialog";
                break;
            case "IN_APP_CAROUSEL":
                t = "Slider";
                break;
            case "IN_APP_GUIDE":
                t = "Guide";
                break;
            case "IN_APP_SURVEY_NPS":
                t = "NPS";
                break;
            case "IN_APP_CES_SURVEY":
                t = "CES";
                break;
            case "IN_APP_RATING_SURVEY":
                t = "Rating";
                break;
            case "IN_APP_BOOLEAN_SURVEY":
                t = "Boolean";
                break;
            case "IN_APP_MULTIPLE_QUESTION_SURVEY":
                t = "Multi Question";
                break;
            default:
                return
        }
        return t
    }

    function c(e) {
        switch (e) {
            case "a":
                return "Auto";
            case "kc":
                return "Bot";
            case "b":
                return "Badge";
            case "jo":
                return "Journey Orchestrator";
            default:
                throw "unknown activation type " + e
        }
    }

    function u(e, t) {
        return {
            engagementId: e.engagementId,
            executionId: e.executionId,
            executionTimestamp: e.executionTimestamp,
            engagementType: l(e.contentType || e.content.contentType),
            activation: c(e.activationType),
            engagementName: e.engagementName,
            interaction: t,
            identifyId: e.ideId
        }
    }

    function d(e, t) {
        return {
            engagementId: e.engagementId,
            executionId: e.executionId,
            executionTimestamp: e.executionTimestamp,
            engagementType: l(e.contentType),
            activation: c(e.activationType),
            engagementName: e.engagementName,
            interaction: t,
            identifyId: e.ideId
        }
    }

    function g(e, t, n, r) {
        var o = {
            engagementId: e.engagementId,
            executionId: e.executionId,
            executionTimestamp: e.executionTimestamp,
            engagementType: l(e.content.contentType),
            activation: c(e.activationType),
            engagementName: e.engagementName,
            interaction: t,
            identifyId: e.ideId
        };
        if (r)
            if ("SCORE" === r.questionType) {
                if (o.score = r.score, "IN_APP_SURVEY_NPS" === n)
                    for (var i = 0; i < te.length; i++)
                        if (te[i].lowScore <= o.score && te[i].maxScore >= o.score) {
                            o.scoreType = te[i].type;
                            break
                        }(0, M.isBlank)(r.comment) || (o.comment = r.comment)
            } else "OPEN_TEXT" !== r.questionType || (0, M.isBlank)(r.comment) || (o.comment = r.comment);
        return o
    }

    function f(e) {
        var t = void 0,
            n = void 0;
        if (e) {
            document.querySelectorAll(".px-engagement-wrapper").forEach(function (r) {
                n || (n = r.querySelector("#step-" + e), t = r)
            })
        } else t = document.querySelector(".px-engagement-wrapper");
        return t
    }

    function p(e, t, n) {
        function r(e) {
            var r = f(n),
                i = r && (r.contains(e.target) || r === e.target);
            t ? t(e.target) ? (ee += 1, o(e)) : ee = 0 : i ? ee = 0 : (ee += 1, o(e)), 5 === ee && F.logger.logInternalError(new Error("Accessibility - circular tabs - 5 invalid elements in a row with tabindex " + e.target.tabIndex))
        }
        var o = (0, M.debounce)(e);
        return (0, M.addEventListener)(document, "focusin", r), r
    }

    function m(e, t, n) {
        function r(e) {
            var r = f(n),
                s = (0, Y.getEventTarget)(e),
                l = r && (r.contains(s) || r === s);
            if (l) ee = 0;
            else {
                var c = s === t || t.contains(s);
                c ? ee = 0 : (ee += 1, i ? ((0, U.focusElement)(t), j.documentRef.activeElement !== t && o(e)) : o(a ? e : e)), a = c
            }
            i = l, 5 === ee && F.logger.logInternalError(new Error("Accessibility - circular tabs - 5 invalid elements in a row with tabindex " + e.target.tabIndex))
        }
        var o = (0, M.debounce)(e),
            i = !1,
            a = !1;
        return (0, M.addEventListener)(document, "focusin", r), r
    }

    function v(e) {
        e && (0, M.removeEventListener)(document, "focusin", e)
    }

    function h(e, t) {
        var n = t,
            r = e.querySelectorAll("a[href], button[onclick]");
        return r.length > 0 && r.forEach(function (e) {
            e.setAttribute("tabindex", n), e.setAttribute("role", "button"), e.setAttribute(ne, "true"), n += 1
        }), n
    }

    function y() {
        re || (re = (0, M.addEnterKeyDownListener)(document, function (e) {
            var t = document,
                n = t.activeElement;
            n.getAttribute(ne) && (n.click(), e.preventDefault())
        }))
    }

    function b() {
        re && ((0, M.removeEventListener)(document, "keydown", re), re = null)
    }

    function E(e, t) {
        return e && t > 0
    }

    function I(e, t, n) {
        return function (r) {
            try {
                var o = r.target;
                if (e === o || e.contains(o)) {
                    var i = "LINK_CLICK",
                        a = "linkClick",
                        s = "Link Clicked";
                    if (e.parentNode.classList.contains("apt-custom-button") && (i = "CUSTOM_BUTTON_CLICK", a = "customButtonClick", s = "Custom Button clicked"), e.href) {
                        var l = e.href.split("ru=");
                        if (2 === l.length) {
                            var c = decodeURIComponent(l[1]);
                            H.internalEventListener.dispatchEvent(a, c, u(t, s), n), H.internalEventListener.dispatchEvent(i, c, u(t, s), n)
                        }
                    }
                }
            } catch (r) {
                F.logger.log("listenToLinksClicks " + r)
            }
        }
    }

    function C(e, t, n) {
        e.querySelectorAll("a[href]").forEach(function (e) {
            (0, M.addEventListener)(e, "click", I(e, t, n), !1)
        })
    }

    function T(e, t, n, r) {
        H.internalEventListener.dispatchEvent(e, {
            engagementType: n.content.contentType,
            engagementId: n.engagementId,
            width: t.width,
            height: t.height,
            fixedWidth: r.width,
            fixedHeight: r.autoHeight ? t.height : r.height
        })
    }

    function w(e, t, n) {
        (0, q.getChannel)(j.eventTrackData[V.cacheGet](j.productIdParameter)) == W.DESKTOP_CHANNEL && T("engagementResize", e.getBoundingClientRect(), t, n)
    }

    function S(e, t, n) {
        var r = (0, M.paramToObject)(t, {}),
            o = G.eventCache.getKey("trackingPayload"),
            i = r.gcx,
            a = r.ru;
        Object.assign(r, o || {}, n || {}, i ? {
            gcx: decodeURIComponent(i)
        } : {}, a ? {
            ru: decodeURIComponent(a)
        } : {}), K.AjaxUtil.postData(e, r, null, null, null, !0)
    }

    function k(e, t) {
        S(z.desktopEngagementTrackEndpoint + "/multistep/track", e, t)
    }

    function x(e, t) {
        S(z.desktopEngagementTrackEndpoint + "/multistep/step/track", e, t)
    }

    function O(e, t, n, r) {
        var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        return function (i) {
            i.preventDefault();
            var a = s(e, "ENGAGEMENT_CLICK", t, n);
            return a = (0, M.addParameters)({
                ru: r
            }, a), S(z.desktopEngagementTrackEndpoint + "/track/link/click", a), H.internalEventListener.dispatchEvent("engagementLinkClick", {
                engagementType: e.content.contentType,
                engagementId: e.engagementId,
                link: r,
                close: o
            }), !1
        }
    }

    function _(e, t, n, r, o) {
        try {
            e.querySelectorAll("a").forEach(function (e) {
                (0, M.addEventListener)(e, "click", O(t, n, r, e.href, o))
            })
        } catch (e) {
            F.logger.logInternalError(e, "failed to add lister ")
        }
    }

    function A(e, t, n) {
        if (e) {
            var r = e.querySelector(".apt-step-content");
            if (r && t && null !== t.right && null !== t.top && null !== t.bottom && null !== t.left) {
                r.style.paddingTop = (t.top || 0) + "px", r.style.paddingBottom = (t.bottom || 0) + "px";
                var o = n ? "#step-" + n : "";
                (0, U.addStyleTag)(e, o + " .px-div-group { \n\t\t\t\t\tpadding-left: " + (t.left || 0) + "px; \n\t\t\t\t\tpadding-right: " + (t.right || 0) + "px; \n\t\t\t\t}", "px-engagement-wrapper-guide", ".apt-vex.vex.vex-theme-os")
            }
        }
    }

    function P(e, t) {
        if (["padding", "padding-top", "padding-bottom", "padding-left", "padding-right"].indexOf(t.inlineProperty) > -1) {
            var n = e.querySelector(".apt-step-content");
            n && (n.style[t.inlineProperty] = t.value)
        } else e.style[t.inlineProperty] = t.value
    }

    function L(e, t, n, r) {
        if (t.indexOf(".px-engagement-global-settings") >= 0) {
            var o = (0, M.extractStyleString)(t, ".px-engagement-global-settings"),
                i = (0, M.extractStyleProperties)(o);
            i && i.length > 0 && i.forEach(function (t) {
                P(e, t)
            })
        }
        if (n) {
            var a = ".px-step-settings-" + n,
                s = ".px-step-navigation-settings-" + n;
            if (t.indexOf(a) >= 0) {
                var l = (0, M.extractStyleString)(t, a),
                    c = (0, M.extractStyleProperties)(l);
                c && c.length > 0 && c.forEach(function (t) {
                    e.style[t.inlineProperty] = t.value
                })
            }
            if (t.indexOf(s) >= 0) {
                var u = (0, M.extractStyleString)(t, s),
                    d = (0, M.extractStyleProperties)(u);
                d && d.length > 0 && d.forEach(function (t) {
                    var n = e.querySelector(".px-step-navigation");
                    n && (n.style[t.inlineProperty] = t.value)
                })
            }
        }
        A(e, r, n)
    }

    function N(e) {
        var t = "";
        return t += (e.offsetX ? e.offsetX : 0) + "px ", t += (e.offsetY ? e.offsetY : 0) + "px ", t += (e.blur ? e.blur : 0) + "px ", e.fill && e.color && (t += (0, M.hexToRgba)(e.color, e.fill / 100)), t
    }

    function B(e, t) {
        var n = N(t);
        e.style.setProperty("filter", "drop-shadow(" + n + ")"), e.style.setProperty("-webkit-filter", "drop-shadow(" + n + ")")
    }

    function R(e) {
        e.querySelectorAll("img").forEach(function (e) {
            (0, Z.replaceAllDomains)(e, "src", (0, z.getConfig)("storageProxyDomain"), W.DEFAULT_STORAGE_DOMAIN)
        })
    }

    function D(e) {
        if (!e) return "";
        var t = W.DEFAULT_STORAGE_DOMAIN,
            n = (0, z.getConfig)("storageProxyDomain");
        return e.replace(new RegExp(t, "g"), n)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.addGlobalSettings = t.addLinkListener = t.desktopTrackStep = t.desktopTrackEngagementState = t.sendDesktopResize = t.toExternalEventSurvey = t.toExternalEventGuide = t.getExternalEvent = t.getEngagementTrackPayload = t.PX_TABBABLE_ATTR = void 0, t.isSnoozeButtonEnabled = r, t.addHoverState = o, t.trackSnooze = i, t.createSnoozeButton = a, t.getRelevantDialog = f, t.addCircularTabListener = p, t.addCircularTabListenerForTooltips = m, t.removeCicularTabsWrapperListener = v, t.setTabIndexes = h, t.addTabbableEnterListener = y, t.removeTabbableEnterListener = b, t.checkHasOverlay = E, t.listenToLinksClicks = C, t.sendDesktopEngagementSizeEvent = T, t.getBoxShadowString = N, t.setShadow = B, t.replaceImagesSrc = R, t.replaceImagesSrcFromHtmlString = D;
    var M = n(0),
        U = n(7),
        F = n(3),
        V = n(5),
        j = n(4),
        H = n(10),
        q = n(18),
        W = n(8),
        G = n(57),
        K = n(12),
        z = n(1),
        Y = n(19),
        J = n(20),
        X = n(21),
        Q = n(14),
        $ = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(Q),
        Z = n(141),
        ee = 0,
        te = [{
            type: "Promoter",
            lowScore: 9,
            maxScore: 10
        }, {
            type: "Passive",
            lowScore: 7,
            maxScore: 8
        }, {
            type: "Detractor",
            lowScore: 0,
            maxScore: 6
        }],
        ne = t.PX_TABBABLE_ATTR = "data-apt-tabbable-element",
        re = null;
    t.getEngagementTrackPayload = s, t.getExternalEvent = u, t.toExternalEventGuide = d, t.toExternalEventSurvey = g, t.sendDesktopResize = w, t.desktopTrackEngagementState = k, t.desktopTrackStep = x, t.addLinkListener = _, t.addGlobalSettings = L
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(109);
    t.UUIDGenerator = function () {
        function e() {
            r(this, e)
        }
        return o(e, null, [{
            key: "generateUuid",
            value: function (e) {
                return e + "-" + (new Date).getTime() + "-" + this.generateRandom(8)
            }
        }, {
            key: "getProductId",
            value: function (e) {
                return e ? e.split(".")[0].split("-").slice(0, -2).join("-") : null
            }
        }, {
            key: "getRandomInt",
            value: function (e, t) {
                var n = Math.ceil(e),
                    r = Math.floor(t);
                return Math.floor(Math.random() * (r - n)) + n
            }
        }, {
            key: "generateRandom",
            value: function (e) {
                for (var t = "", n = 0; n < e; n++) t += this.getRandomInt(1, 10);
                return t
            }
        }, {
            key: "generateV4Id",
            value: function () {
                return i()
            }
        }]), e
    }()
}, function (e, t, n) {
    "use strict";

    function r(e, t, n, r, a, d) {
        if (!e) return void n(void 0);
        var g = [],
            f = (0, o.getConfig)("sfdcTemplate") || document,
            p = (0, c.findElementInWindow)(e, f, !0),
            m = void 0,
            v = ((0, s.isNodeList)(p) || Array.isArray(p)) && p.length > 0,
            h = Node.prototype.isPrototypeOf(p);
        if (v || h) {
            var y = h ? p : p[0],
                b = h ? 1 : p.length;
            d && (0, s.scrollElementToCenter)(y);
            var E = {
                element: y,
                isVisible: (0, s.isElementVisible)(y),
                count: b
            };
            if (!a) return void n(E);
            g.push(E)
        }
        var I = l.UUIDGenerator.generateV4Id();
        (0, i.subscribe)(I, function (e) {
            for (var t = 0; t < e.length; t++) ! function (t) {
                e[t].exist && !g.some(function (n) {
                    return n.iframeData && n.iframeData.iframeId === e[t].iframeData.iframeId
                }) && g.push({
                    iframeData: e[t].iframeData,
                    count: e[t].count,
                    isVisible: e[t].isVisible
                })
            }(t);
            n(r ? g : g.length > 0 ? g[0] : void 0)
        });
        try {
            if ((0, s.isNotEmptyArr)(t)) {
                for (var C = 0; C < t.length; C++) m = t[C], u.elementExist(m, e, I, d), (0, i.incrementState)(I);
                (0, i.execute)(I, 200)
            } else n(g.length > 0 ? g : void 0)
        } catch (e) {}
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.findInAll = void 0;
    var o = n(1),
        i = n(6),
        a = n(13),
        s = n(0),
        l = n(16),
        c = n(7),
        u = new function () {
            this.guideHideSteps = function () {
                if (!(0, o.isIframe)()) {
                    var e = i.IframeRequest.getMasterRequst("guide", {
                        type: "hideAll"
                    });
                    (0, a.propagateDown)(e, (0, i.getRegisteredIframes)())
                }
            }, this.updateState = function (e, t) {
                if (!(0, o.isIframe)()) {
                    var n = i.IframeRequest.getMasterRequst("guide", {
                        type: "updateState",
                        state: e,
                        enableSelector: t
                    });
                    (0, a.propagateDown)(n, (0, i.getRegisteredIframes)())
                }
            }, this.setSelectorStateForEditorV2 = function (e) {
                if (!(0, o.isIframe)()) {
                    var t = i.IframeRequest.getMasterRequst("guide", {
                        type: "setSelectorStateForEditorV2",
                        isMapperEnabled: e
                    });
                    (0, a.propagateDown)(t, (0, i.getRegisteredIframes)())
                }
            }, this.setSelectorState = function (e) {
                if (!(0, o.isIframe)()) {
                    var t = i.IframeRequest.getMasterRequst("guide", {
                        type: "updateSelectorState",
                        state: e
                    });
                    (0, a.propagateDown)(t, (0, i.getRegisteredIframes)())
                }
            }, this.guideRemoveHighlighted = function (e, t) {
                if (!(0, o.isIframe)()) {
                    var n = i.IframeRequest.getMasterRequst("guide", {
                        type: "removeHighlighted",
                        tag: e,
                        removeAll: t
                    });
                    (0, a.propagateDown)(n, (0, i.getRegisteredIframes)())
                }
            }, this.selectorHighlightElement = function (e, t, n) {
                if (!(0, o.isIframe)()) {
                    var r = i.IframeRequest.getMasterRequst("guide", {
                        type: "highlightElement",
                        tag: t,
                        cssSelector: e
                    });
                    (0, a.postRequest)(r, n)
                }
            }, this.selectorHighlightAll = function (e, t, n) {
                if (!(0, o.isIframe)()) {
                    var r = i.IframeRequest.getMasterRequst("guide", {
                        type: "highlightAll",
                        stepId: t,
                        cssSelector: e
                    });
                    (0, a.postRequestDown)(r, n)
                }
            }, this.selectorRemoveAllHighlighted = function () {
                if (!(0, o.isIframe)()) {
                    var e = i.IframeRequest.getMasterRequst("guide", {
                        type: "removeAllHighlighted"
                    });
                    (0, a.propagateDown)(e, (0, i.getRegisteredIframes)())
                }
            }, this.getBadgesLocations = function (e, t) {
                (0, o.isIframe)() || (0, a.createSubscribeCallbackRequest)("apt_msg_get_badges_locations", {}, e, t)
            }, this.removeBadgeFromIframe = function (e, t, n) {
                (0, o.isIframe)() || (0, a.createSubscribeCallbackRequest)("apt_msg_remove_badge", {
                    badgeId: t
                }, e, n)
            }, this.setBadgeObserver = function (e, t) {
                (0, o.isIframe)() || (0, a.createSubscribeCallbackRequest)("apt_msg_badge_set_observer", {}, e, t)
            }, this.unsetBadgeObserver = function (e, t) {
                (0, o.isIframe)() || (0, a.createSubscribeCallbackRequest)("apt_msg_badge_unset_observer", {}, e, t)
            }, this.sendBadgeToIframe = function (e, t) {
                (0, o.isIframe)() || (0, a.createSubscribeCallbackRequest)("apt_msg_send_badge", {
                    badge: t
                }, e)
            }, this.getElementLocation = function (e, t, n) {
                if (!(0, o.isIframe)()) {
                    var r = {
                        elementSelector: t
                    };
                    (0, a.createSubscribeCallbackRequest)("apt-msg-get-element-location", r, e, n)
                }
            }, this.elementExist = function (e, t, n, r) {
                if (!(0, o.isIframe)()) {
                    var s = i.IframeRequest.getMasterRequst("elementExist", {
                        elementSelector: t,
                        scrollToElement: r
                    }, n, e.iframeId);
                    (0, a.postRequestDown)(s, e)
                }
            }, this.addElementHandler = function (e, t, n, r) {
                if (!(0, o.isIframe)()) {
                    var i = {
                        nextStepTrigger: n,
                        elementSelector: t
                    };
                    (0, a.createSubscribeCallbackRequest)("apt-msg-add-handler-show-next-step", i, e, r)
                }
            }, this.isElementVisible = function (e, t, n) {
                (0, o.isIframe)() || (0, a.createSubscribeCallbackRequest)("guide", {
                    type: "isElementVisible",
                    cssSelector: t
                }, e, n)
            }, this.sendEditorV2StateResponse = function (e, t, n, r) {
                if (!(0, o.isIframe)()) {
                    var s = i.IframeRequest.getMasterRequst("guide", {
                        type: "editorV2StateResponse",
                        isMapperEnabled: n,
                        isPreview: r
                    }, t);
                    (0, a.postRequestDown)(s, e)
                }
            }, this.sendStateResponse = function (e, t, n, r) {
                if (!(0, o.isIframe)()) {
                    var s = i.IframeRequest.getMasterRequst("guide", {
                        type: "stateResponse",
                        state: n,
                        isStepSelected: r
                    }, t);
                    (0, a.postRequestDown)(s, e)
                }
            }, this.getAlternateSelector = function (e, t, n) {
                (0, o.isIframe)() || (0, a.createSubscribeCallbackRequest)("guide", {
                    type: "getAlternateSelector",
                    cssSelector: t
                }, e, n)
            }, this.addOutsideEventHandler = function (e, t, n, r) {
                if (!(0, o.isIframe)()) {
                    var i = {
                        nextStepTrigger: n,
                        elementSelector: t
                    };
                    (0, a.createSubscribeCallbackRequest)("aptGuideExternalClick", i, e, r)
                }
            }, this.removeElementHandlers = function (e) {
                (0, o.isIframe)() || (0, a.createSubscribeCallbackRequest)("apt-msg-remove-element-handlers", {}, e)
            }
        };
    t.default = u, t.findInAll = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if (e) {
            var t = e.split("-"),
                n = t.length;
            return t.length > 2 && t.splice(2, 1), n < 4 && t.push("1"), t.join("-")
        }
        return e
    }

    function o(e) {
        return e ? e.split("-").slice(1, 2).join() : e
    }

    function i(e, t) {
        return r(e) === r(t)
    }

    function a(e) {
        if (!e) throw new Error("invalid API key, the value must be set to be parsed");
        return e.split("-")
    }

    function s(e) {
        var t = a(e);
        if (t.length < 3) throw new Error("invalid API key structure " + e);
        return parseInt(t[2], 10)
    }

    function l(e) {
        var t = a(e);
        return t.length < 4 ? g.PROD_ENVIRONMENT : parseInt(t[3], 10)
    }

    function c() {
        return s(f.eventTrackData[p.cacheGet](f.productIdParameter)) === g.DESKTOP_CHANNEL
    }

    function u() {
        return f.eventTrackData[p.cacheGet](f.productIdParameter)
    }

    function d() {
        return o(m.Cookie.getCookie("apt.sid"))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isDesktop = t.getEnvironment = t.getChannel = t.isApiKeyMatch = t.getProduct = t.getProductKeyFromApiKey = void 0, t.getCurrentProductId = u, t.getCurrentProductKey = d;
    var g = n(8),
        f = n(4),
        p = n(5),
        m = n(36);
    t.getProductKeyFromApiKey = r, t.getProduct = o, t.isApiKeyMatch = i, t.getChannel = s, t.getEnvironment = l, t.isDesktop = c
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = t || h.documentRef;
        return (0, v.getConfig)("usesShadowDom") ? (0, m.querySelectorAllDeep)(e, n) : n.querySelectorAll(e)
    }

    function o(e, t) {
        var n = t || h.documentRef;
        return (0, v.getConfig)("usesShadowDom") ? (0, m.querySelectorDeep)(e, n) : n.querySelector(e)
    }

    function i(e) {
        var t = (0, v.getConfig)("usesShadowDom");
        return e ? t && e.composedPath && e.composedPath()[0] || e.target : void 0
    }

    function a(e) {
        return (0, v.getConfig)("usesShadowDom") && e.parentNode instanceof DocumentFragment ? e.parentNode.host : e.parentNode
    }

    function s(e) {
        return (0, v.getConfig)("usesShadowDom") && e.parentNode instanceof DocumentFragment ? e.parentNode.host : e.parentElement
    }

    function l(e, t) {
        return e.nodeType === Node.ELEMENT_NODE && t.some(function (t) {
            return null !== e.getAttribute(t) && "" !== e.getAttribute(t)
        })
    }

    function c(e, t, n) {
        if (l(e, t)) return e;
        if (n >= b) return null;
        var r = e.childNodes;
        if (r.length > 0)
            for (var o = 0; o < r.length; o++) {
                var i = c(r[o], t, n + 1);
                if (null !== i) return i
            }
        return null
    }

    function u(e) {
        return e && e.nodeName && -1 === ["body", "html", "#document"].indexOf(e.nodeName)
    }

    function d(e) {
        if (!e || !e.nodeName || E.indexOf(e.nodeName.toLowerCase()) > -1) return e;
        var t = (0, v.getConfig)("elementAttributeWhitelist");
        if ((0, y.isNotEmptyArr)(t)) {
            if (t = t.filter(function (e) {
                    return -1 === e.indexOf("*")
                }), l(e, t)) return e;
            for (var n = 0, r = e.parentNode; n <= b && u(r); n++, r = r.parentNode)
                if (l(r, t)) return r;
            var o = c(e, t, 0);
            if (o) return o
        }
        return e
    }

    function g(e, t) {
        var n = (0, v.getConfig)("usesShadowDom"),
            r = void 0;
        if (n) {
            for (var o = t; o && o !== e && "BODY" !== o.tagNameProp;) o = a(o);
            r = o === e
        } else r = e.contains(t);
        return r
    }

    function f(e, t, n, r) {
        var o = e.elementFromPoint(t, n);
        if (o.shadowRoot && o.shadowRoot !== e) {
            if (!(r < I)) return o;
            o = f(o.shadowRoot, t, n, r + 1)
        }
        return o
    }

    function p(e, t, n) {
        var r = (0, v.getConfig)("usesShadowDom");
        return r ? f(e, t, n, 0) : e.elementFromPoint(t, n)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.documentElementFromPoint = t.findOptimizedTarget = t.elementContainsChild = t.getParentElement = t.getParentNode = t.getEventTarget = t.findSingleElementInShadowDom = t.findElementsInShadowDom = void 0;
    var m = n(130),
        v = n(1),
        h = n(4),
        y = n(0),
        b = 2,
        E = ["#document", "html", "body"],
        I = 5e3;
    t.findElementsInShadowDom = r, t.findSingleElementInShadowDom = o, t.getEventTarget = i, t.getParentNode = a, t.getParentElement = s, t.elementContainsChild = g, t.findOptimizedTarget = d, t.documentElementFromPoint = p
}, function (e, t, n) {
    "use strict";

    function r() {
        var e = o.globalContextCache[i.cacheGet]("apt.gcx");
        return (0, a.limitJsonKeys)(e, 100)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getGlobalContext = r;
    var o = n(4),
        i = n(5),
        a = n(0)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = (0, h.getConfig)("filterUrls"),
            n = (0, h.getConfig)("filterType");
        if ((0, y.isNotEmptyArr)(t)) {
            var r = e || location.hostname + location.pathname + location.search + location.hash;
            if ((0, y.matchUrl)(t, r)) return n
        }
        return null
    }

    function o(e, t) {
        if ((0, y.isNotEmptyArr)(t)) {
            var n = e || location.hostname + location.pathname + location.search + location.hash;
            if ((0, y.matchUrl)(t, n)) return !0
        }
        return !1
    }

    function i(e) {
        return o(e, (0, h.getConfig)("excludeUrls"))
    }

    function a(e) {
        return "exclude" === r(e) || i(e)
    }

    function s(e) {
        return "mask" === r(e)
    }

    function l(e) {
        var t = (0, h.getConfig)("namedParamFilter"),
            n = (0, h.getConfig)("nameParamFilterType");
        if ((0, y.isNotEmptyArr)(t) && !(0, y.isBlank)(e)) {
            var r = e.startsWith("?") ? e.substring(1).split("&") : e.split("&"),
                o = {},
                i = void 0,
                a = !0,
                s = !1,
                l = void 0;
            try {
                for (var c, u = r[Symbol.iterator](); !(a = (c = u.next()).done); a = !0) {
                    i = c.value.split("="), i.length > 0 && i.length < 2 ? o[i[0]] = "" : i.length > 0 && i.length < 3 && (o[i[0]] = i[1])
                }
            } catch (e) {
                s = !0, l = e
            } finally {
                try {
                    !a && u.return && u.return()
                } finally {
                    if (s) throw l
                }
            }
            var d = !0,
                g = !1,
                f = void 0;
            try {
                for (var p, m = t[Symbol.iterator](); !(d = (p = m.next()).done); d = !0) {
                    var v = p.value;
                    o.hasOwnProperty(v) && ("mask" === n ? o[v] = "apt-masked" : "exclude" == n && delete o[v])
                }
            } catch (e) {
                g = !0, f = e
            } finally {
                try {
                    !d && m.return && m.return()
                } finally {
                    if (g) throw f
                }
            }
            return "?" + (0, y.convert2Parameters)((0, y.addParameters)(o, []))
        }
        return e
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0,
            i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        try {
            return e({
                url: t,
                title: n,
                path: o,
                referrer: r
            }, i ? "rule" : "track")
        } catch (e) {
            throw I.logger.logInternalError(e, "failed to execute masking function, going to fail the tracking"), e
        }
    }

    function u(e) {
        var t = b.documentRef.createElement("a");
        return t.href = e, [t.protocol + "//", t.host, t.pathname, t.search, t.hash]
    }

    function d(e, t, n, r, o, i, d) {
        var g = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : void 0,
            f = arguments[8],
            p = s(g),
            m = void 0,
            E = (0, h.getConfig)("maskUrlFunction"),
            I = (0, y.isFunction)(E);
        if (I) {
            var C = void 0;
            f ? C = "" + e + t + n : t && (C = "" + e + t + n + r + o), m = c(E, C, d, i, C ? void 0 : n, f)
        } else if (f) return [e, t, n, r, o, i, d];
        if (I) {
            if (m.url) {
                var T = u(m.url),
                    w = v(T, 5);
                e = w[0], t = w[1], n = w[2], r = w[3], o = w[4]
            } else m.path && (n = m.path);
            d = m.title
        } else r = l(r), p && (n = "/apt-masked-url", r = "", o = "", d = "");
        var S = "";
        if (i && !a(i)) {
            var k = b.documentRef.createElement("a");
            k.href = i;
            var x = s(i);
            S = k.host !== location.host ? k.protocol + "//" + k.host + (x ? "/apt-masked-url" : k.pathname + l(k.search) + k.hash) : "", x && !(0, y.isBlank)(S) && I && (S = m.referrer)
        }
        return (0, h.getConfig)("trackPageTitles") || (d = ""), [e, t, n, r, o, S, d]
    }

    function g(e, t, n) {
        return d(e, t, n, void 0, void 0, void 0, void 0, void 0, !0)
    }

    function f() {
        var e = location.protocol + "//",
            t = location,
            n = t.host,
            r = location.pathname,
            o = location.search,
            i = location.hash,
            a = d(e, n, r, o, i, null, null),
            s = v(a, 5);
        return e = s[0], n = s[1], r = s[2], o = s[3], i = s[4], "" + e + n + r + o + i
    }

    function p() {
        var e = location.protocol + "//",
            t = location,
            n = t.host,
            r = location.pathname,
            o = location.search,
            i = b.documentRef.title,
            a = location.hash,
            s = d(e, n, r, o, a, null, i),
            l = v(s, 6);
        return e = l[0], n = l[1], r = l[2], o = l[3], a = l[4], i = l[5], {
            sc: e,
            ho: n,
            pa: decodeURIComponent(r),
            q: decodeURIComponent(o),
            ha: decodeURIComponent(a),
            sch: (0, E.getPageHeight)(),
            scw: (0, E.getPageWidth)(),
            pt: i
        }
    }

    function m(e) {
        var t = b.documentRef.createElement("a");
        t.href = e;
        var n = t.protocol + "//",
            r = t.host,
            o = t.pathname,
            i = t.search,
            a = t.hash,
            s = d(n, r, o, i, a, null, null, e),
            l = v(s, 5);
        return n = l[0], r = l[1], o = l[2], i = l[3], a = l[4], (0, y.isEmail)(o) && (o = ""), e.startsWith("http") ? "" + n + r + o + i + a : e.startsWith("mailto:") ? "" + t.protocol + o : 0 === e.indexOf("#") ? a : "" + o + i + a
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.maskUrlEditor = t.maskFullUrl = t.getFullUrlMasked = t.maskParameters = t.shouldBeMasked = t.isUrlFiltered = t.isExcluded = t.maskUrl = t.getWebContext = void 0;
    var v = function () {
            function e(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }
            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        h = n(1),
        y = n(0),
        b = n(4),
        E = n(9),
        I = n(3);
    t.getWebContext = p, t.maskUrl = d, t.isExcluded = a, t.isUrlFiltered = r, t.shouldBeMasked = s, t.maskParameters = l, t.getFullUrlMasked = f, t.maskFullUrl = m, t.maskUrlEditor = g
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.EVENTS = {
        BOT: "bot"
    }, t.TOP_TO_IFRAME_EVENTS = {
        BOT_RESPONSE: "botResponse",
        BOT_FOUND: "botFound",
        GET_BOT_CONTENT_RESPONSE: "getBotContentResponse",
        POST_BOT_EVENT: "postBotEvent",
        SET_BOT_IS_OPEN: "setBotIsOpen",
        REMOVE_BOT: "removeBot",
        IS_ELEMENT_VISIBLE: "isElementVisible",
        GET_APTRINSIC_ID_RESPONSE: "getAptrinsicIdResponse",
        ADD_ELEMENT_CLICK_LISTENER: "ADD_ELEMENT_CLICK_LISTENER"
    }, t.IFRAME_TO_TOP_EVENTS = {
        IFRAME_CLOSED: "iframeClosed",
        BOT_FOUND: "botFound",
        GET_BOT_CONTENT: "getBotContent",
        TRACK_BOT_TOGGLE: "trackBotToggle",
        IS_ELEMENT_VISIBLE_RESPONSE: "isElementVisibleResponse",
        GET_APTRINSIC_ID: "getAptrinsicId",
        BOT_ELEMENT_CLICK: "botElementClick"
    }, t.BOT_IFRAME_INTERNAL_EVENTS = {
        INIT_WIDGET_IN_IFRAME: "INIT_WIDGET_IN_IFRAME",
        BOT_EMPTY_CONFIG: "BOT_EMPTY_CONFIG"
    }, t.BOT_INTERNAL_EVENTS = {
        BOT_CLICK_OUTSIDE: "BOT_CLICK_OUTSIDE"
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.UserData = void 0;
    var r = n(16),
        o = n(36),
        i = n(4),
        a = n(5),
        s = n(3),
        l = n(24),
        c = n(0),
        u = n(1),
        d = n(9),
        g = n(10),
        f = n(18),
        p = "apt.uid",
        m = "apt.sid",
        v = 31536e6,
        h = 18e5,
        y = 20,
        b = null,
        E = t.UserData = new function () {
            function e() {
                return (0, u.getConfig)("sessionCookieTTL") || h
            }

            function t(e) {
                return e.split(".")
            }

            function n(e) {
                return e.join(".")
            }

            function I() {
                try {
                    var e = o.Cookie.getAllCookieVal(p);
                    if (null != e && e.length > 1) {
                        var t = !(0, u.getConfig)("localStorageCookie") && (0, u.getConfig)("fullDomainCookie") ? (0, d.getDomain)() : document.location.hostname;
                        if (o.Cookie.deleteCookie(p, t), null != (e = o.Cookie.getAllCookieVal(p)) && e.length > 1) {
                            var n = !(0, u.getConfig)("localStorageCookie") && (0, u.getConfig)("fullDomainCookie") ? (0, d.getDomain)() : " ";
                            o.Cookie.deleteCookie(p, n)
                        }
                        s.logger.logInternalError(new Error("deleting " + p + " for domain, current cookies: " + o.Cookie.getCookiesRaw()))
                    }
                } catch (e) {
                    s.logger.logInternalError(e)
                }
            }

            function C() {
                try {
                    var e = o.Cookie.getAllCookieVal(m);
                    if (null != e && e.length > 1) {
                        var t = !(0, u.getConfig)("localStorageCookie") && (0, u.getConfig)("fullDomainCookie") ? (0, d.getDomain)() : " ";
                        o.Cookie.deleteCookie(m, t), s.logger.logInternalError(new Error("deleting " + m + " for domain, current cookies: " + o.Cookie.getCookiesRaw()))
                    }
                } catch (e) {
                    s.logger.logInternalError(e)
                }
            }

            function T(e, l, c) {
                if ((0, u.getConfig)("enableTag")) {
                    I();
                    var d = o.Cookie.getCookie(p),
                        g = [],
                        m = e || O;
                    if (d && (0, u.getConfig)("multipleProductsPerDomain")) {
                        var h = r.UUIDGenerator.getProductId(d);
                        h && !(0, f.isApiKeyMatch)(h, _) && (d = null)
                    }
                    if (!d || l || d && d.startsWith("undefined-") ? (l && !c && s.logger.logInternalError(new Error("force new is " + l + ", and did not have aptrinsic id so generating a new one")), d = r.UUIDGenerator.generateUuid(_), g.push(d), g.push(0), g.push(m), l && c && g.push(c)) : (g = t(d), e && e > g[2] && (g[2] = e)), i.eventTrackData[a.cacheSet](i.userIdParameter, g[0]), o.Cookie.setCookie(p, n(g), v), !(d = o.Cookie.getCookie(p))) throw new Error("wasn't able to save user cookie for type: " + e + ", force new:" + l + ", aptrinsic id: " + c);
                    P = !0
                }
            }

            function w() {
                if ((0, u.getConfig)("enableTag") || !(0, f.isDesktop)()) {
                    var e = r.UUIDGenerator.generateUuid(_);
                    return S(e), i.eventTrackData[a.cacheSet](i.sessionIdParam, e), e
                }
            }

            function S(t) {
                if (!((0, f.isDesktop)() || (o.Cookie.setCookie(m, t, e()), k(), t = o.Cookie.getCookie(m)))) throw new Error("wan't able to create session cookie, not going to track this user")
            }

            function k() {
                b && clearTimeout(b), b = setTimeout(function () {
                    o.Cookie.getCookie(m) || g.internalEventListener.dispatchEvent("sessionExpired")
                }, e() + y)
            }
            var x = this,
                O = 0,
                _ = void 0,
                A = !1,
                P = !1;
            this.initializeUser = function (e) {
                (0, u.getConfig)("enableTag") && (e && (_ = e), T(), x.getSessionId())
            }, this.clearUserData = function () {
                o.Cookie.deleteCookie(p), o.Cookie.deleteCookie(m)
            }, this.ensureUserData = function () {
                if ((0, u.getConfig)("enableTag")) {
                    I();
                    var e = o.Cookie.getCookie(p),
                        t = o.Cookie.getCookie(m);
                    e && t || x.initializeUser()
                }
            }, this.getUserId = function () {
                if ((0, u.getConfig)("enableTag")) {
                    var e = o.Cookie.getCookie(p);
                    if (!e) throw new Error("user cookie is not initialized, is init called before: " + P + ", current cookies in doc: " + o.Cookie.getCookiesRaw());
                    return t(e)[0]
                }
            }, this.getAptrinisId = function (e) {
                if ((0, u.getConfig)("enableTag")) {
                    var n = o.Cookie.getCookie(p),
                        r = [];
                    if (e && !n) return null;
                    if (!n) throw new Error("user cookie is not initialized, is init called before: " + P + ", current cookies in doc: " + o.Cookie.getCookiesRaw());
                    return r = t(n), r.length > 3 ? r[3] : r[0]
                }
            }, this.setAptrinsicId = function (e, n) {
                if ((0, u.getConfig)("enableTag")) {
                    var r = o.Cookie.getCookie(p),
                        s = [];
                    if (!r) throw new Error("user cookie is not initialized, is init called before: " + P + ", current cookies in doc: " + o.Cookie.getCookiesRaw());
                    s = t(r);
                    var l = s.length < 4 || s.length > 3 && s[3] !== e;
                    return l && (w(), T(n ? 1 : 2, !0, e)), s[3] = e, i.eventTrackData[a.cacheSet](i.aptrinsicIdParam, s[3]), l
                }
            }, this.changeUserType = function (e) {
                (0, u.getConfig)("enableTag") && (T(e), i.eventTrackData[a.cacheSet]("vt", E.getUserType()))
            }, this.getUserType = function (e) {
                if ((0, u.getConfig)("enableTag")) {
                    var n = o.Cookie.getCookie(p),
                        r = [];
                    if (e && !n) return O;
                    if (!n) throw new Error("user cookie is not initialize");
                    r = t(n);
                    return r[2] || 0
                }
            }, this.getSessionId = function () {
                if ((0, u.getConfig)("enableTag")) {
                    if ((0, f.isDesktop)()) return i.eventTrackData[a.cacheGet](i.sessionIdParam);
                    C();
                    var e = o.Cookie.getCookie(m),
                        t = !1;
                    return !e || (0, u.getConfig)("multipleProductsPerDomain") && (0, f.getProductKeyFromApiKey)(r.UUIDGenerator.getProductId(e)) !== (0, f.getProductKeyFromApiKey)(_) ? (t = A = !0, e = r.UUIDGenerator.generateUuid(_)) : A = !1, S(e), t && !(0, u.getConfig)("setSessionExternally") && (i.eventTrackData[a.cacheSet]("ai", E.getAptrinisId()), i.eventTrackData[a.cacheSet]("vt", E.getUserType()), i.eventTrackData[a.cacheSet](i.sessionIdParam, e), (0, l.internalApt)("sessionInitialized", null, null, null, !1), (0, c.clearAptrinsicSessionStorage)()), e
                }
            }, this.setSessionId = function (t) {
                if ((0, u.getConfig)("enableTag")) {
                    if (C(), o.Cookie.setCookie(m, t, e()), k(), !(t = o.Cookie.getCookie(m))) throw new Error("wan't able to create session cookie, not going to track this user");
                    i.eventTrackData[a.cacheSet]("ai", E.getAptrinisId()), i.eventTrackData[a.cacheSet](i.sessionIdParam, t), i.eventTrackData[a.cacheSet]("vt", E.getUserType()), (0, c.clearAptrinsicSessionStorage)()
                }
            }, this.getLeadType = function () {
                return 1
            }, this.userType = function () {
                return 2
            }, this.visitorType = function () {
                return O
            }, this.isNewSession = function () {
                var e = A;
                return A = !1, e
            }, this.isUser = function () {
                return 2 == x.getUserType()
            }
        }
}, function (e, t, n) {
    "use strict";

    function r() {
        (0, g.getConfig)("enableTag") && p.push(arguments)
    }

    function o() {
        var e = Array.prototype.slice.call(arguments);
        d.api.trackEvent.apply(d.api, e)
    }

    function i() {
        if ((0, g.getConfig)("enableTag")) {
            for (var e = p, n = void 0, r = e.length, i = 0; i < r; i++) n = e.shift(), o.apply(null, n);
            t.internalApt = y = function () {
                o.apply(null, arguments)
            }
        }
    }

    function a() {
        t.internalApt = y = r
    }

    function s() {
        v = !1, m && clearTimeout(m) && (m = null), i();
        for (var e = 0; e < h.length; e++) {
            var t = h[e],
                n = t[0],
                r = t.slice(1);
            n.apply(null, r)
        }
    }

    function l() {
        v = !0, m = setTimeout(s, 1e3), t.internalApt = y = r
    }

    function c() {
        return v
    }

    function u() {
        var e = [].slice.call(arguments),
            t = e[0];
        if (!t || "function" != typeof t) return void f.logger.logInternalError(new Error("registerIdentifyCallback didnt receive function as first argument"));
        h.push(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.appNotReady = t.registerIdentifyCallback = t.isInIdentify = t.identifyFinished = t.identifyStart = t.internalApt = t.appReady = void 0;
    var d = n(42),
        g = n(1),
        f = n(3),
        p = [],
        m = null,
        v = !1,
        h = [],
        y = r;
    t.appReady = i, t.internalApt = y, t.identifyStart = l, t.identifyFinished = s, t.isInIdentify = c, t.registerIdentifyCallback = u, t.appNotReady = a
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (e.showQuestionNumber) {
            var n = (0, S.createElement)("div", "apt-question-sequence", {
                text: t + "."
            });
            return n.style.fontFamily = e.numberFontFamily, n.style.fontSize = e.numberSize + "px", n.style.color = e.numberColor, n
        }
        return null
    }

    function o(e, t) {
        var n = "string" == typeof t ? t + "Text" : "text";
        return (0, S.isBlank)(e[n]) ? e.isLast ? "Done" : "Next" : e[n]
    }

    function i(e, t, n, r) {
        var i = (0, S.createElement)("div", "apt-survey-submit", {
            text: o(e)
        });
        return i.style.color = e[r ? "submitButtonTextColor" : "textColor"], i.style.backgroundColor = e[r ? "submitButtonBackgroundColor" : "backgroundColor"], i.style.borderWidth = e[r ? "submitButtonBorderWidth" : "borderWidth"] + "px", i.style.borderRadius = e[r ? "submitButtonBorderRadius" : "borderRadius"] + "px", i.style.borderColor = e[r ? "submitButtonBorderColor" : "borderColor"], i.setAttribute("tabindex", n + t), i.setAttribute("role", "button"), i
    }

    function a(e, t, n, o, i) {
        var a = (0, k.toDom)(t, !1, ["apt-survey-title"].concat(o));
        return n.push("apt-survey-title-wrapper"), (0, S.createElement)("div", n, null, [r(e, i), a])
    }

    function s(e, t) {
        return (0, S.createInput)("checkbox", void 0, !1, void 0, void 0, !1, void 0, {
            "aria-label": e.contactMeMessage || A,
            tabindex: t
        })
    }

    function l(e, t) {
        var n = (0, S.createElement)("div", ["apt-contact-wrapper"], void 0, [t, (0, S.createElement)("div", "apt-contact-me-text", {
            text: e.contactMeMessage || A,
            dataAtt: [{
                name: "aria-hidden",
                value: "true"
            }]
        })]);
        return e.showContactMeMessage || (n.style.display = "none"), n
    }

    function c() {
        document.querySelector(".aptr-snooze-container").style.display = "none"
    }

    function u(e, t) {
        var n = void 0,
            r = void 0;
        return 0 === e.sequenceNumber && (0, O.isSnoozeButtonEnabled)(e.activationType, e.snoozeButton, e.activationTypes) && (n = (0, S.createElement)("div", ["aptr-snooze-container"]), r = (0, O.createSnoozeButton)(e.snoozeButton, n, e.survey, e.id, e.sequenceNumber, t)), [n, r]
    }

    function d(e, t) {
        return e.setAttribute("tabindex", t), t + 1
    }

    function g(e, t, n) {
        var r = u(e, t),
            o = w(r, 2),
            i = o[0],
            a = o[1];
        return i && n.push(i), a
    }

    function f(e, t) {
        var n = e.querySelector(".apt-question-sequence");
        n && (n.innerText = t + ".")
    }

    function p(e, t, n) {
        var r = document.getElementById(e),
            o = r.parentNode,
            i = o.getBoundingClientRect().height;
        .9 * (0, x.getPageHeight)() < i && (o.style.paddingRight = "0px");
        var a = window.getComputedStyle(o, null),
            s = a.getPropertyValue("padding-top"),
            l = a.getPropertyValue("padding-bottom"),
            c = r.querySelector(n),
            u = c.getBoundingClientRect().height,
            d = window.getComputedStyle(r, null),
            g = d.getPropertyValue("padding-top"),
            f = d.getPropertyValue("padding-bottom"),
            p = r.querySelector(t);
        p.style.maxHeight = "calc(90vh - " + u + "px - " + g + " - " + f + " - " + s + " - " + l + ")", p.style.overflowY = "auto"
    }

    function m(e) {
        return e && (0, _.getConfig)("storageProxyDomain") ? (0, O.replaceImagesSrcFromHtmlString)(e) : e
    }

    function v(e) {
        e.titleHtml = m(e.titleHtml), e.notSatisfiedHtml = m(e.notSatisfiedHtml), e.satisfiedHtml = m(e.satisfiedHtml), e.defaultComment = m(e.defaultComment)
    }

    function h(e) {
        e.titleHtml = m(e.titleHtml), e.notSatisfiedHtml = m(e.notSatisfiedHtml), e.satisfiedHtml = m(e.satisfiedHtml), e.defaultComment = m(e.defaultComment)
    }

    function y(e) {
        e.question = m(e.question), e.answers = e.answers.map(function (e) {
            return e.text = m(e.text), e
        })
    }

    function b(e) {
        e.question = m(e.question)
    }

    function E(e) {
        e.notSatisfiedHtml = m(e.notSatisfiedHtml), e.defaultComment = m(e.defaultComment), e.satisfiedHtml = m(e.satisfiedHtml)
    }

    function I(e) {
        e.html = m(e.html)
    }

    function C(e, t, n, r) {
        var o = u(e, t),
            i = w(o, 2),
            a = i[0],
            s = i[1];
        return s ? (n.push(a), d(s, r)) : r
    }

    function T(e, t, n, r, o) {
        var i = u(e, t),
            a = w(i, 2),
            s = a[0],
            l = a[1];
        if (l) {
            var c = d(l, o);
            return e.mergeFirstSteps ? n.insertBefore(s, n.firstChild) : r.push(s), c
        }
        return o
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DEFAULT_CONTACT_ME_MESSAGE = void 0;
    var w = function () {
        function e(e, t) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
        return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.renderSubmitButton = i, t.renderSurveyTitle = a, t.renderContactMeCheckBox = s, t.renderContactMe = l, t.hideSnooze = c, t.setTabIndexForSnoozeButton = d, t.showSnooze = g, t.updateStepNumber = f, t.setMaxHeightForPage = p, t.replaceScoreSurveyImagesDomain = v, t.replaceBooleanImagesDomain = h, t.replaceMultiChoiceImagesDomain = y, t.replaceOpenTextImagesDomain = b, t.replaceDynamicRangeImagesDomain = E, t.replaceContentStepImagesDomain = I, t.addSnoozeForMCQSurvey = C, t.addSnoozeForScoreSurvey = T;
    var S = n(0),
        k = n(7),
        x = n(9),
        O = n(15),
        _ = n(1),
        A = t.DEFAULT_CONTACT_ME_MESSAGE = "It's okay to contact me about my feedback"
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o() {
        if (ue) {
            var e = (0, S.removeFromQueryParam)(ie);
            history.replaceState("", document.title, e)
        }
        if (fe) {
            var t = (0, S.removeFromQueryParam)(ae);
            history.replaceState("", document.title, t)
        }
    }

    function i() {
        ce = h(), ue = (0, S.getQueryParam)(ie), de = x.windowRef.sessionStorage.getItem("apt.guideId"), ge = ue || de, fe = (0, S.getQueryParam)(ae), o(), setTimeout(o, 1500)
    }

    function a(e) {
        var t = pe[e];
        D.internalEventListener.removeListener("pageview", t)
    }

    function s(e, t) {
        a(e), D.internalEventListener.addListener("pageview", t), pe[e] = t
    }

    function l() {
        D.internalEventListener.dispatchEvent("engagementClosed");
        var e = x.eventTrackData[_.cacheGet](x.productIdParameter);
        !e || 0 !== e.indexOf("AP-BTJ9NZXEJFSP") && 0 !== e.indexOf("AP-2POJKINZM5HL") || D.internalEventListener.dispatchEvent("surveyClosed")
    }

    function c(e) {
        oe[e] = !0
    }

    function u(e) {
        d(e), setTimeout(function () {
            N.KnowledgeCenterManager.fetchEntriesAndSendToWidget(x.eventTrackData.data[x.productIdParameter], x.eventTrackData.data[x.aptrinsicIdParam])
        }, 200), a(e)
    }

    function d(e) {
        g(e) && (oe[e] = !1)
    }

    function g(e) {
        return {}.hasOwnProperty.call(oe, e) && !0 === oe[e]
    }

    function f() {
        return Object.values(oe).some(function (e) {
            return e
        })
    }

    function p() {
        return ge
    }

    function m() {
        return ce
    }

    function v(e) {
        try {
            var t = {
                guideId: e,
                timestamp: Date.now()
            };
            x.windowRef.sessionStorage.setItem(se, JSON.stringify(t))
        } catch (e) {
            O.logger.logInternalError("Error setting onDemand guide id", e)
        }
    }

    function h() {
        var e = void 0;
        try {
            var t = x.windowRef.sessionStorage.getItem(se);
            if (t) {
                var n = JSON.parse(t);
                n && n.timestamp && Date.now() <= n.timestamp + le && (e = n.guideId), x.windowRef.sessionStorage.removeItem(se)
            }
        } catch (e) {
            O.logger.logInternalError("Error reading onDemand guide id", e)
        }
        return e
    }

    function y(e) {
        b(e)
    }

    function b(e) {
        try {
            if (ge && !P.default.isEditorMode()) {
                var t = {};
                Object.assign(t, x.eventTrackData[_.cacheGetAll]()), (0, S.addCacheBuster)(t);
                var n = (0, M.getGlobalContext)();
                n && Object.assign(t, {
                    gcx: JSON.stringify(n)
                });
                var r = (0, R.getEngagementSessionId)();
                t.s = r, fe && (t.at = fe);
                var o = x.eventTrackData.data[x.productIdParameter];
                if ((0, L.getConfig)("crossProductEngagement")) {
                    var i = JSON.parse(x.windowRef.sessionStorage.getItem("apt.localCache"));
                    t.ai = i.ai, t.v = r, t.p = U.UUIDGenerator.getProductId(r), o = t.p
                }
                var a = L.ongoingEngagementEndpoint + "/" + o + "/" + ge + "?" + (0, S.convert2Parameters)((0, S.addParameters)(t, []));
                k.AjaxUtil.getData(a, function (t) {
                    if (de) {
                        var n = JSON.parse(x.windowRef.sessionStorage.getItem("apt.prevStepMap")),
                            r = x.windowRef.sessionStorage.getItem("apt.stepId");
                        if (!n || !r) return void O.logger.logInternalError(new Error("guide ongoing cannot be processed due to missing parameters, prev step map: " + n + ", current step: " + r));
                        var o = t.content.steps,
                            i = void 0;
                        if (o.forEach(function (e) {
                                e.id === n[r].id && (i = e)
                            }), !i) return void O.logger.logInternalError(new Error("guide ongoing cannot be processed since previous step " + n[r].id + ", does not exist in guide " + ge));
                        var a = (0, B.resolveUrlWithPlaceholders)(x.windowRef.location.href, i.navigation.nextStepUrl);
                        if (!ue && de && !(0, S.matchUrl)(a, (0, S.getPageUrl)())) return
                    }
                    e(t)
                })
            }
        } catch (e) {
            O.logger.logInternalError("Error during getting on demand engagement id " + ge)
        }
    }

    function E() {
        if (!(0, L.isIframe)()) {
            var e = window.self !== window.top.parent ? window.document : window.top.document;
            Object.values(re.getAll()).forEach(function (e) {
                e.rootEl.classList.contains("apt-vex") && e.close()
            });
            e.querySelectorAll(".apt-hotspot-element").forEach(function (t) {
                t && e.body.removeChild(t)
            })
        }
    }

    function I(e, t) {
        var n = void 0;
        switch (e.type) {
            case "CONTENT":
                n = W.default.getHtml(e);
                break;
            case "SCORE":
                switch (t) {
                    case "IN_APP_SURVEY_NPS":
                    case "IN_APP_CES_SURVEY":
                        n = K.default.getHtml(e);
                        break;
                    case "IN_APP_RATING_SURVEY":
                        n = Y.default.getHtml(e)
                }
                break;
            case "BOOLEAN":
                n = X.default.getHtml(e);
                break;
            case "MULTIPLE_CHOICE_QUESTION":
                n = $.default.getHtml(e);
                break;
            case "OPEN_TEXT":
                n = ee.default.getHtml(e);
                break;
            case "DYNAMIC_RATING_STEP":
                n = ne.default.getHtml(e);
                break;
            default:
                throw new Error("Type " + e.type + " is not supported")
        }
        return n
    }

    function C(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = [];
        switch (e.contentType) {
            case "IN_APP_DIALOG":
                r.push(H.default.SanitizeHtml(e.htmlElements, n, t));
                break;
            case "IN_APP_GUIDE":
                e.steps.sort(function (e, t) {
                    return e.sequenceNumber - t.sequenceNumber
                }), r.push(Object.assign({}, H.default.SanitizeHtml(e.footer, n, t), {
                    stepId: e.steps ? e.steps[0].id : null
                }));
                for (var o = 0; o < e.steps.length; o++) {
                    var i = e.steps[o],
                        a = H.default.SanitizeHtml(i.content + i.titleHtml, n, t);
                    0 === o ? a.isValid || Object.assign(r[0], a, {
                        stepId: i.id
                    }) : r.push(Object.assign({}, a, {
                        stepId: i.id
                    }))
                }
                break;
            case "IN_APP_CAROUSEL":
                e.carouselSlideList.sort(function (e, t) {
                    return e.sequence - t.sequence
                });
                for (var s = 0; s < e.carouselSlideList.length; s++) {
                    var l = e.carouselSlideList[s];
                    r.push(Object.assign({}, H.default.SanitizeHtml(l.html, n, t), {
                        stepId: e.carouselSlideList[s].id
                    }))
                }
                break;
            case "IN_APP_BOOLEAN_SURVEY":
            case "IN_APP_SURVEY_NPS":
            case "IN_APP_CES_SURVEY":
            case "IN_APP_MULTIPLE_QUESTION_SURVEY":
            case "IN_APP_RATING_SURVEY":
                var c = e.contentType,
                    u = e.steps;
                u.sort(function (e, t) {
                    return e.sequenceNumber - t.sequenceNumber
                });
                for (var d = 0; d < u.length; d++) {
                    var g = I(u[d], c);
                    r.push(Object.assign({}, H.default.SanitizeHtml(g, n, t), {
                        stepId: u[d].id
                    }))
                }
        }
        return r
    }

    function T(e, t, n, r) {
        return function (o) {
            var i = (0, F.arrayFrom)(n, function (e) {
                    return Object.assign({}, {
                        id: e.id,
                        content: e.content.map(function (e) {
                            return (0, S.isObject)(e) ? e : JSON.parse(e)
                        })
                    })
                }),
                a = (0, F.arrayFrom)(i, function (n) {
                    var r = n.id,
                        i = n.content,
                        a = [],
                        s = !0;
                    e && !o ? (s = !1, a.push("Engagement checksum is invalid since there is URL configured but no checksum to validated against")) : o && i.forEach(function (e) {
                        var t = (0, V.validateChecksum)(r, e, o);
                        t.valid || (s = t.valid, a.push(t.errorMessage))
                    });
                    var l = C(i[0], t, !0).map(function (e, t) {
                        return {
                            valid: e.isValid,
                            errors: e.errors,
                            stepIndex: t,
                            stepId: e.stepId
                        }
                    });
                    return {
                        id: r,
                        checksum: {
                            valid: s,
                            errors: a
                        },
                        sanitization: l
                    }
                });
            r(a)
        }
    }

    function w(e, t, n, r) {
        (0, V.loadChecksumFile)(e, T(e, t, n, r))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateEngagements = t.sanitizeEngagement = t.cleanOndemandGuideDataFromURL = t.sendEngagementClosedEvent = t.registerEngagementPageChangedHandler = t.hasLiveEngagement = t.getGuideRefreshData = t.hideAnyActiveEngagement = t.handleEngagementFinish = t.saveOnDemandGuideId = t.isOndemandState = t.startOverEngagement = t.isStartOverState = t.isLocked = t.unlockEngagementType = t.lockEngagementType = void 0, t.getOngoingEngagement = b;
    var S = n(0),
        k = n(12),
        x = n(4),
        O = n(3),
        _ = n(5),
        A = n(14),
        P = r(A),
        L = n(1),
        N = n(29),
        B = n(32),
        R = n(38),
        D = n(10),
        M = n(20),
        U = n(16),
        F = n(11),
        V = n(50),
        j = n(82),
        H = r(j),
        q = n(76),
        W = r(q),
        G = n(81),
        K = r(G),
        z = n(80),
        Y = r(z),
        J = n(75),
        X = r(J),
        Q = n(78),
        $ = r(Q),
        Z = n(79),
        ee = r(Z),
        te = n(77),
        ne = r(te),
        re = n(31),
        oe = {},
        ie = "aptGuideId",
        ae = "aptActivationType",
        se = "apt.aptOdGuideId",
        le = 3e4,
        ce = void 0,
        ue = void 0,
        de = void 0,
        ge = void 0,
        fe = void 0,
        pe = {};
    i(), t.lockEngagementType = c, t.unlockEngagementType = d, t.isLocked = g, t.isStartOverState = p, t.startOverEngagement = y, t.isOndemandState = m, t.saveOnDemandGuideId = v, t.handleEngagementFinish = u, t.hideAnyActiveEngagement = E, t.getGuideRefreshData = i, t.hasLiveEngagement = f, t.registerEngagementPageChangedHandler = s, t.sendEngagementClosedEvent = l, t.cleanOndemandGuideDataFromURL = o, t.sanitizeEngagement = C, t.validateEngagements = w
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = {};
        return Object.keys(e).sort().forEach(function (n) {
            (0, s.isObject)(e[n]) ? t[n] = r(e[n]): Array.isArray(e[n]) ? t[n] = (0, l.arrayFrom)(e[n], function (e) {
                return (0, s.isObject)(e) ? r(e) : e
            }) : t[n] = e[n]
        }), t
    }

    function o(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) > -1 && e.hasOwnProperty(r) && (n[r] = e[r]);
        return n
    }

    function i(e) {
        return Object.keys(e).filter(function (t) {
            return null != e[t]
        }).reduce(function (t, n) {
            return t[n] = "object" === a(e[n]) ? i(e[n]) : e[n], t
        }, Array.isArray(e) ? [] : {})
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.removeNullFields = t.filterProperties = t.orderAlphabetically = void 0;
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        s = n(0),
        l = n(11);
    t.orderAlphabetically = r, t.filterProperties = o, t.removeNullFields = i
}, , function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o() {
        var e = T.windowRef.sessionStorage;
        return {
            kcId: le.getKcId(),
            categoryId: e.getItem("apt.kcCatId"),
            recId: le.getRecommendedId()
        }
    }

    function i() {
        var e = (0, O.isOndemandState)();
        if (e) {
            var t = o();
            a(e, !1, t.kcId, t.categoryId, t.recId)
        }
    }

    function a(e, t, n, r, o) {
        if ((0, O.hideAnyActiveEngagement)(), t) x.AjaxUtil.getData(B.previewEndpoint + "/kc/" + e, function (e) {
            D.EngagementDrawer.draw(e)
        }, {
            Authorization: "Bearer " + R.default.getToken()
        }, function (e) {
            try {
                403 === e ? ((0, M.showMessage)("error", "Not authorized to preview this engagement"), R.default.exit()) : 401 == e && ((0, M.showMessage)("error", "Token expired, try to preview again"), R.default.exit())
            } catch (e) {
                S.logger.logInternalError(e)
            }
        });
        else {
            var i = (0, U.getTrackingPayload)();
            i.at = "kc", i.kcid = n, i.catid = r, i.recId = o || null;
            var a = i.s;
            (0, _.setEngagementSessionId)(a);
            var s = w.ondemandEndpoint + "/" + T.eventTrackData.data[T.productIdParameter] + "/" + e + "?" + (0, A.convert2Parameters)((0, A.addParameters)(i, []));
            try {
                x.AjaxUtil.getData(s, function (e) {
                    D.EngagementDrawer.draw([e], !0, {
                        kcid: n,
                        catid: r,
                        recId: o || null
                    })
                })
            } catch (e) {
                S.logger.logInternalError("Error during getting on demand engagement id " + startOverGuideId)
            }
        }
    }

    function s() {
        var e = T.eventTrackData.data[T.productIdParameter],
            t = T.eventTrackData.data[T.aptrinsicIdParam];
        ce.fetchEntriesAndSendToWidget(e, t)
    }

    function l(e, t, n, r) {
        return x.AjaxUtil.getData(w.getKnowledceCenterConfigEndpoint + "/" + e + "/" + t, n, "", r)
    }

    function c(e, t, n, r) {
        var o = T.eventTrackData[F.cacheGet](T.sessionIdParam),
            i = (0, U.getUrl)(w.getKnowledceCenterConfigEndpoint, {
                s: o,
                p: e
            });
        return e && o || S.logger.logInternalError(new Error("Trying to fetch kc with product id " + e + " and session id " + o)), t ? l(e, t, n, r) : x.AjaxUtil.getData(i, n, "", r)
    }

    function u(e) {
        return "MIDDLE" === e || "CENTER" === e
    }

    function d(e, t, n, r) {
        try {
            var o = document.querySelector("#apt-widget");
            if (!e || e && !e.element || !t || !n || !o) return !o && S.logger.logInternalError(new Error("Could not calculate position for embedded bot, widget container does not exist")), e && !e.element && S.logger.logInternalError(new Error("Could not calculate position for embedded bot, mapped element does not exist")), (!r || !t || !n) && S.logger.logInternalError(new Error("Could not calculate position for embedded bot" + JSON.stringify({
                positionSettings: t,
                alignments: n,
                positionType: r
            }))), {};
            var i = t.positionHorizontal.toUpperCase(),
                a = t.positionVertical.toUpperCase(),
                s = n.horizontalAlignment.toUpperCase(),
                l = n.verticalAlignment.toUpperCase(),
                c = "fixed" === r,
                d = e.element.getBoundingClientRect(),
                g = o.getBoundingClientRect(),
                f = d.height / 2,
                p = d.width / 2,
                m = "0px",
                v = "0px",
                h = 0,
                y = c ? d.top : g.top - d.top;
            "TOP" === a ? h = c ? y : 0 - y : "BOTTOM" === a ? h = c ? d.height + y : d.height - y : u(a) && (h = c ? f + y : f - y), h += t.positionTopDelta, "BOTTOM" === l && (v = "-100%");
            var b = 0,
                E = c ? d.left : g.left - d.left;
            return "LEFT" === i ? b = c ? E : 0 - E : "RIGHT" === i ? b = c ? d.width + E : d.width - E : u(i) && (b = c ? p + E : p - E), b += t.positionLeftDelta, "RIGHT" === s && (m = "-100%"), {
                left: b,
                top: h,
                transform: "translate(" + m + ", " + v + ")"
            }
        } catch (e) {
            return S.logger.logInternalError(e, "Could not calculate position for embedded bot with element"), {}
        }
    }

    function g(e, t) {
        try {
            var n = (0, w.getConfig)("contentProxyDomain"),
                r = (0, w.getConfig)("enableKcSecureArticle"),
                o = (0, w.getConfig)("kcPositionType"),
                i = "embedded" === (0, w.getConfig)("kcDisplayType"),
                a = i ? d(t, e.windowSettings.embedKCSettings.positionSettings, {
                    horizontalAlignment: e.windowSettings.embedKCSettings.horizontalAlignment,
                    verticalAlignment: e.windowSettings.embedKCSettings.verticalAlignment
                }, o) : {};
            e.windowSettings.embedKCSettings.calculatedPosition = a;
            var s = "API" === (0, w.getConfig)("fetchKcType");
            return Object.assign(e, {
                showIcon: !i && (!s || s && se),
                isEmbedded: i,
                kcPositionType: o,
                enableKcSecureArticle: r,
                contentProxyDomain: n
            })
        } catch (e) {
            return S.logger.logInternalError(e, "Could not merge sdk configuration for bot"), {}
        }
    }

    function f(e) {
        var t = {
                font: e,
                weights: W.FONTS_WEIGHTS
            },
            n = W.FONTS_SUBSETS,
            r = [t].reduce(function (e, t) {
                var n = t.font.replace(/ +/g, "+"),
                    r = (t.weights || []).join(",");
                return e.push(n + (r && ":" + r)), e
            }, []).join("|"),
            o = "https://fonts.googleapis.com/css?family=" + r;
        return n && Array.isArray(n) && n.length > 0 && (o += "&subset=" + n.join(",")), '<link rel="stylesheet" href="' + o + '">'
    }

    function p(e) {
        return e && W.BROWSER_DEFAULT_FONTS.indexOf(e) < 0
    }

    function m(e, t) {
        return "<style>.regular-" + t + "{font-family: " + e + ";}.bold-" + t + "{font-family: " + e + ';font-weight: bold}</style><div class="regular-' + t + '">âˆ‘aÃ¥ÄÐ‘Î´ â·º</div><div class="bold-' + t + '">âˆ‘aÃ¥ÄÐ‘Î´ â·º</div>'
    }

    function v(e) {
        ae = e
    }

    function h() {
        return ae
    }

    function y(e) {
        null === se && (se = e)
    }

    function b() {
        return se
    }

    function E(e) {
        return -1 !== ["ZSBMJTAYEANS", "ALAZMN715YZH", "PDCNS0SWT1ZP", "RR8EQLTW2VP9", "TGAN0LMXA1BX", "XIKPBREHZXOJ", "GLSDIDVBIAVK", "AKKBV8ECO1E8", "FAP8QPGYKUVA", "GZKRSU61EUCU", "OJY7IO6BCAAN", "RMACDJOEHAEG", "X4TBJOVYHWVS", "ZJQOCZEF9PIR", "DQ1NRPVT7VG1", "9APX3RS6VUQK", "ZSSKB3VPJSDK", "EOLIULDC9NMZ", "AS1CEZNAOYLR"].indexOf(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.KnowledgeCenterManager = t.KcSessionStorage = void 0;
    var I = function () {
        function e(e, t) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
        return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.getKcDataFromSessionStorage = o, t.loadOnDemandEngagement = i, t.getKcEngagement = a, t.fetchKnowledgeCenterConfig = c, t.setKcIsShownViaAPI = v, t.getKcIsShownViaAPI = h, t.setIsNewAPI = y, t.getIsNewAPI = b, t.productNeedsExtraLogging = E;
    var C = n(23),
        T = n(4),
        w = n(1),
        S = n(3),
        k = n(10),
        x = n(12),
        O = n(26),
        _ = n(38),
        A = n(0),
        P = n(42),
        L = n(32),
        N = n(140),
        B = n(14),
        R = r(B),
        D = n(44),
        M = n(35),
        U = n(85),
        F = n(5),
        V = n(54),
        j = n(21),
        H = n(18),
        q = n(55),
        W = n(86),
        G = n(46),
        K = r(G),
        z = n(22),
        Y = n(13),
        J = n(6),
        X = n(47),
        Q = r(X),
        $ = n(45),
        Z = r($),
        ee = n(8),
        te = n(136),
        ne = n(20),
        re = "apt_track_external_article",
        oe = "apt_log",
        ie = ["apt_get_engagement", "APT_WIDGET_LOADED", "apt_get_user_data", "apt_send_feedback", "apt_search_articles", "apt_get_article", "apt_get_community_content_list", "apt_get_community_content_search", "apt_get_community_article", "apt_vote_on_community_content", "apt_track_internal_article", "apt_tracking_toggle_widget", "apt_kc_func_click", "apt_kc_link_click", "apt_get_article_by_id", "apt_log_bot_internal_error", re, oe],
        ae = !1,
        se = null,
        le = t.KcSessionStorage = {
            setKcId: function (e) {
                T.windowRef.sessionStorage.setItem("apt.kcId", e)
            },
            setIsDefaultKc: function (e) {
                T.windowRef.sessionStorage.setItem("apt.isDefaultKc", e)
            },
            setRecommendedId: function (e) {
                T.windowRef.sessionStorage.setItem("apt.recId", e)
            },
            getIsDefaultKc: function (e) {
                return T.windowRef.sessionStorage.getItem("apt.isDefaultKc")
            },
            getKcId: function () {
                return T.windowRef.sessionStorage.getItem("apt.kcId")
            },
            getRecommendedId: function () {
                return T.windowRef.sessionStorage.getItem("apt.recId")
            }
        },
        ce = t.KnowledgeCenterManager = new function () {
            function e(e) {
                return function () {
                    h(e.apply(this, arguments))
                }
            }

            function t(e, t) {
                if (!document.querySelector(".apt-widget-frame")) {
                    S.logger.log("SDK Creating KC iframe"), de = !1, fe = C.UserData.getUserId();
                    var n = document.createElement("iframe");
                    n.className = "apt-widget-frame", n.style.opacity = "0", n.style.transform = "scale(0)", n.style.visibility = "hidden", n.style.position = "absolute", n.style.top = "-9999px", n.style.left = "-9999px", (0, w.getBody)().appendChild(n);
                    var r = JSON.stringify(Object.assign(t, {
                        enableKcSecureArticle: (0, w.getConfig)("enableKcSecureArticle"),
                        contentProxyDomain: (0, w.getConfig)("contentProxyDomain")
                    }));
                    n.setAttribute("data-sdkconfig", r);
                    var o = t.initialConfig.windowSettings.textFont,
                        i = t.initialConfig.onBoardingSettings.textFont,
                        a = p(o),
                        s = p(i),
                        l = a ? f(o) : "",
                        c = s ? f(i) : "",
                        u = a ? m(o, 1) : "",
                        d = s ? m(i, 2) : "",
                        g = "<head>" + (l + c) + '<script type="text/javascript" charset="utf-8" src=' + e + " async><\/script></head><body>" + (u + d) + "</body>";
                    n.contentWindow.document.open(), n.contentWindow.document.write(g), n.contentWindow.document.close(), R = n.contentWindow, X = !0, ae = !1, S.logger.log("SDK KC iframe creation done"), (0, w.isIframe)() ? K.default.postBotFound() : k.internalEventListener.dispatchEvent(z.IFRAME_TO_TOP_EVENTS.BOT_FOUND, $.TOP_WINDOW_ID)
                }
            }

            function n() {
                var e = (0, w.getKcConfig)(),
                    t = "embedded" === (0, w.getConfig)("kcDisplayType"),
                    n = e && e.enabled,
                    r = (0, w.getConfig)("enableTag") && (0, w.getConfig)("widgetEnabled") && C.UserData.isUser(),
                    o = r && n && (0, w.isIframe)() && t,
                    i = Z.default.getBotConfig();
                return r && !(0, w.isIframe)() && (n || i && i.enabled && i.isEmbedded) || o
            }

            function r() {
                if (n()) {
                    var e = (0, w.getKcConfig)(),
                        t = e.includePatterns,
                        r = e.excludePatterns,
                        i = window.location.href;
                    return r && r.length > 0 && (0, A.matchUrl)(r, i) ? void o() : t && 0 !== t.length ? void(t && t.length > 0 && ((0, A.matchUrl)(t, i) ? l() : o())) : void l()
                }
            }

            function o() {
                if (n()) {
                    var e = document.getElementById("apt-widget");
                    if (!e) return void S.logger.log("Couldn't find KC element when attempting to hide it.");
                    E((0, H.getProduct)(T.eventTrackData[F.cacheGet](T.productIdParameter))) && S.logger.reportToServer("Hiding KC bot"), e.style.display = "none"
                }
            }

            function l() {
                if (n()) {
                    var e = document.getElementById("apt-widget");
                    if (!e) return void S.logger.log("Couldn't find KC element when attempting to show it.");
                    e.style.display = ""
                }
            }

            function c() {
                D.forEach(function (e) {
                    e.call()
                })
            }

            function u() {
                (0, O.getGuideRefreshData)(), i(), k.internalEventListener.removeListener("pageview", u)
            }

            function v(e, t, n, r) {
                var o = {
                    type: "APT_WIDGET_ENTRIES",
                    entries: e,
                    recommendationRuleSets: t,
                    userData: n
                };
                S.logger.log("SDK Posting entries to KC"), h(o), pe((0, ne.getGlobalContext)()), me(), r && "function" == typeof r && r({
                    entries: e,
                    userData: n
                })
            }

            function h(e, t) {
                try {
                    if (t) {
                        var n = (0, J.getIframeData)(t);
                        Q.default.postBotEvent(n, e)
                    } else R.postMessage(JSON.stringify(e), T.windowRef.location.href)
                } catch (e) {
                    S.logger.log("postToWidget " + e)
                }
            }

            function y(e, t) {
                return {
                    articleId: e.articleId,
                    categoryId: e.categoryId,
                    articleUrl: e.articleUrl,
                    kcId: t,
                    articleLink: e.articleLink
                }
            }

            function b() {
                C.UserData.getSessionId()
            }

            function _(e) {
                if (e.origin === T.windowRef.location.origin && !(ie.indexOf(e.data.name) < 0)) {
                    if (!e.data.messageId) return void S.logger.log("Web SDK skipping event without message id " + JSON.stringify(e.data));
                    if (M[e.data.messageId]) return void S.logger.log("Web SDK skipping handled message with id " + e.data.messageId);
                    if ((0, w.isIframe)() && "APT_WIDGET_LOADED" !== e.data.name) return void window.top.postMessage(Object.assign({}, e.data, {
                        iframeId: (0, Y.getIframeId)()
                    }), window.top.location.href);
                    switch (M[e.data.messageId] = !0, e.data.name) {
                        case "apt_get_engagement":
                            var t = e.data,
                                n = t.categoryId,
                                r = t.recommendedId;
                            if (T.windowRef.sessionStorage.setItem("apt.kcCatId", n), le.setRecommendedId(r), S.logger.log("SDK received activate engagement message"), e.data.absoluteTargetUrl) {
                                var o = (0, L.resolveUrlWithPlaceholders)(T.windowRef.location.href, e.data.absoluteTargetUrl);
                                o !== T.windowRef.location.href ? ((0, O.saveOnDemandGuideId)(e.data.engId), k.internalEventListener.addListener("pageview", u), T.windowRef.location.href = o) : a(e.data.engId, e.data.isPreview, G, n, r)
                            } else a(e.data.engId, e.data.isPreview, G, n, r);
                            return void b();
                        case "APT_WIDGET_LOADED":
                            return S.logger.log("SDK received KC loaded"), void(e.data.error ? S.logger.logInternalError(new Error("KC failed to load due to error"), e.data.error) : (k.internalEventListener.dispatchEvent("kcTriggered", {
                                kcId: G
                            }), c()));
                        case "apt_send_feedback":
                            return S.logger.log("SDK received send feedback message"), e.data.feedbackObj && P.api.feedback(Object.assign(e.data.feedbackObj, {
                                kcId: G
                            })), void b();
                        case "apt_search_articles":
                            return S.logger.log("SDK received search articles"), (e.data.searchTerms || "" === e.data.searchTerms) && ce.searchArticles(T.eventTrackData.data[T.productIdParameter], T.eventTrackData.data[T.aptrinsicIdParam], e.data.searchTerms, e.data.labels, e.data.url, e.data.userEmail, G, e.data.iframeId), b(), void(e.data.searchTerms && k.internalEventListener.dispatchEvent("kcSearch", {
                                searchTerms: e.data.searchTerms,
                                kcId: G
                            }));
                        case "apt_get_community_content_list":
                            return S.logger.log("SDK get community content list"), ce.getCommunityContentList(T.eventTrackData.data[T.productIdParameter], T.eventTrackData.data[T.aptrinsicIdParam], e.data.userEmail, e.data.sortType, e.data.iframeId), void b();
                        case "apt_get_community_content_search":
                            return S.logger.log("SDK get community content search"), ce.searchCommunityContent(T.eventTrackData.data[T.productIdParameter], T.eventTrackData.data[T.aptrinsicIdParam], e.data.searchTerm, e.data.userEmail, e.data.iframeId), void b();
                        case "apt_get_community_article":
                            return S.logger.log("SDK get community article by id"), e.data.id && ce.getCommunityArticleById(T.eventTrackData.data[T.productIdParameter], T.eventTrackData.data[T.aptrinsicIdParam], e.data.id, e.data.type, e.data.totalLikes, e.data.userRegistered, e.data.userEmail, e.data.iframeId), void b();
                        case "apt_vote_on_community_content":
                            return S.logger.log("SDK vote on community content"), ce.voteOnCommunityContent(T.eventTrackData.data[T.productIdParameter], T.eventTrackData.data[T.aptrinsicIdParam], e.data.iframeId, e.data.type, e.data.userEmail, e.data.id, e.data.likedByUser, e.data.totalLikes), void b();
                        case "apt_get_article":
                            S.logger.log("SDK get article by id");
                            var i = e.data,
                                l = i.id,
                                d = i.title,
                                g = i.propertyGroupId;
                            return e.data.id && ce.getArticleById(T.eventTrackData.data[T.productIdParameter], T.eventTrackData.data[T.aptrinsicIdParam], l, g, d, e.data.iframeId), void b();
                        case "apt_get_user_data":
                            return void S.logger.log("SDK received get user data message");
                        case "apt_track_internal_article":
                            return S.logger.log("SDK received track internal article message"), (0, U.trackArticleClick)(e.data.articleId, e.data.categoryId, e.data.articleUrl, G, e.data.recommendedId, s), k.internalEventListener.dispatchEvent("articleView", y(e.data, G)), void b();
                        case "apt_kc_func_click":
                            S.logger.log("SDK received call javascript function");
                            var f = (0, w.getConfig)("kcAllowedFuncNames");
                            return (0, A.isEmptyArr)(f) || f.indexOf(e.data.funcName) < 0 ? void S.logger.logInternalError(new Error("tried to executed function not in the allow list, function name:" + e.data.funcName)) : (e.data.funcName && (0, N.executeFunctionByName)(e.data.funcName), void b());
                        case "apt_kc_link_click":
                            if (S.logger.log("SDK received link click"), (0, U.trackWebLinkClick)(e.data.webLinkId, G, e.data.recommendedId, s), e.data.linkObj) {
                                var p = (0, L.resolveUrlWithPlaceholders)(document.location.href, e.data.linkObj.url);
                                "CURR_TAB" === e.data.linkObj.target ? document.location.href = p : window.open(p, "_blank", "noopener")
                            }
                            return void b();
                        case "apt_get_article_by_id":
                            S.logger.log("SDK received article id to fetch and open");
                            var m = e.data.articleId;
                            return m && ce.fetchAndOpenArticleById(T.eventTrackData.data[T.productIdParameter], T.eventTrackData.data[T.aptrinsicIdParam], m, e.data.iframeId), void b();
                        case "apt_log_bot_internal_error":
                            S.logger.log("SDK received internal error from bot");
                            var v = e.data,
                                h = v.error,
                                E = v.errorMsg;
                            return void S.logger.logInternalError(h, E);
                        case re:
                            var I = e.data,
                                C = I.articleId,
                                x = I.articleUrl,
                                _ = I.articleTitle,
                                B = I.articleProvider,
                                R = I.propertyGroupId,
                                D = I.recommendedId,
                                F = {
                                    articleId: C,
                                    articleUrl: x,
                                    articleProvider: B,
                                    articleTitle: _,
                                    propertyGroupId: R,
                                    recommendedId: D
                                };
                            S.logger.log("SDK received track external article message"), (0, U.trackExternalArticleClick)(G, R, F), k.internalEventListener.dispatchEvent("articleView", y(e.data, G)), b();
                        case oe:
                            var V = e.data.message;
                            S.logger.log("Widget log: " + V);
                        case "apt_tracking_toggle_widget":
                            S.logger.log("SDK received track toggle widget");
                            var j = e.data,
                                H = j.isOpen,
                                q = j.shouldTrack,
                                W = j.iframeId,
                                K = de !== H;
                            return q && K && ((0, U.trackToggleWidget)(G, H), k.internalEventListener.dispatchEvent(H ? "kcOpened" : "kcClosed", {
                                kcId: G
                            })), W ? Q.default.setBotIsOpen(H, W) : de = H, void b()
                    }
                }
            }
            var B = this,
                R = void 0,
                D = [],
                M = {},
                G = void 0,
                X = !1,
                ae = !1,
                ue = !1,
                de = !1,
                ge = null,
                fe = "",
                pe = e(te.getGlobalContextMessage),
                me = e(te.getUrlMessage);
            this.handleIncomingBotEvents = function () {
                T.windowRef.addEventListener("message", _, !1)
            }, this.initWidget = function (e, o, i, a) {
                try {
                    if (!n()) return;
                    if (ae = !0, S.logger.log("SDK Initializing KC with config " + JSON.stringify(e, null, 2)), G !== e.initialConfig.kcId && (de = !1), G = e.initialConfig.kcId, le.setIsDefaultKc(!i), le.setKcId(G), T.windowRef.addEventListener("message", _, !1), !document.querySelector("#apt-widget")) {
                        X = !1, ge = null;
                        var s = document.createElement("div");
                        s.setAttribute("id", "apt-widget"), s.classList.add("apt-widget-top-container"), (0, w.getBody)().appendChild(s), S.logger.log("SDK Created KC container")
                    }
                    var l = e.initialConfig.windowSettings.embedKCSettings.elementSelector.cssSelector;
                    if (e.initialConfig = g(e.initialConfig, ge), e.contentProxyDomain = (0, w.getConfig)("contentProxyDomain"), e.initialConfig.isEmbedded && l) {
                        var c = (0, w.getConfig)("kcPositionType");
                        (0, V.injectWidgetToTargetElement)(l, a, {
                            isNewAPI: se,
                            positionType: c,
                            kcId: e.initialConfig.kcId
                        }, {
                            onClick: ce.toggleBot,
                            onFailed: function () {
                                X = !1, ae = !1, ge = null
                            },
                            onFound: function () {
                                X = !0
                            },
                            onDone: function (n) {
                                ge = n, e.initialConfig = g(e.initialConfig, ge), t((0, w.getAssetEndpoint)("widget"), e)
                            }
                        })
                    } else t((0, w.getAssetEndpoint)("widget"), e);
                    o || (r(), k.internalEventListener.addListener("pageview", function () {
                        r()
                    })), document.addEventListener(W.GAINSIGHT_PX_OPEN_BOT, ce.open), document.addEventListener(W.GAINSIGHT_PX_OPEN_ARTICLE, function (e) {
                        return ce.openArticleById(e.detail.articleId)
                    }), k.internalEventListener.addListener(ee.GLOBAL_CONTEXT_CHANGED, pe), k.internalEventListener.addListener("pageview", me)
                } catch (e) {
                    S.logger.logInternalError(e, "cannot start kc widget")
                }
            }, this.clearWidgetLoadQueue = function () {
                D = []
            }, this.checkIsInProgress = function () {
                return ae
            }, this.checkIsInitialized = function () {
                return X && !!document.querySelector("#apt-widget")
            }, this.cleanWidget = function () {
                B.clearWidgetLoadQueue(), X = !1, ae = !1, ge = null
            }, this.removeWidget = function () {
                M = {}, B.cleanWidget();
                var e = document.querySelector(".apt-widget-frame");
                e && e.parentNode.removeChild(e);
                var t = document.getElementById("apt-widget");
                t && (k.internalEventListener.removeListener(ee.GLOBAL_CONTEXT_CHANGED, pe), k.internalEventListener.removeListener("pageview", me), t.parentNode.removeChild(t), clearInterval(void 0), E((0, H.getProduct)(T.eventTrackData[F.cacheGet](T.productIdParameter))) && S.logger.reportToServer("Removing KC bot"))
            }, this.updatePositionForEmbeddeBot = function () {
                var e = (0, w.getKcConfig)(),
                    t = (0, w.getConfig)("kcPositionType");
                h({
                    type: "APT_WIDGET_EMBEDDED_POSITIONS",
                    calculatedPosition: d(ge, e.windowSettings.embedKCSettings.positionSettings, {
                        horizontalAlignment: e.windowSettings.embedKCSettings.horizontalAlignment,
                        verticalAlignment: e.windowSettings.embedKCSettings.verticalAlignment
                    }, t)
                })
            }, this.updateWidgetConfig = function () {
                if (n()) {
                    h({
                        type: "APT_WIDGET_CONFIG",
                        config: g((0, w.getKcConfig)(), ge),
                        shouldResetState: C.UserData.getUserId() !== fe
                    }), fe = C.UserData.getUserId()
                }
            }, this.fetchEntriesById = function (e, t, n, r, o) {
                function i(t) {
                    if (!t) return void(r && "function" == typeof r && r(t));
                    var n = Object.assign({}, t);
                    if (!(0, q.validateContentChecksum)(e, n)) return void("function" == typeof o && o("Checksum does not match when fetching knowledge center entries"));
                    r && "function" == typeof r && r(t)
                }
                var a = (0, U.getUrl)(w.getWidgetContentEndpoint + "/" + t + "/" + e, {
                    ai: n
                });
                x.AjaxUtil.getData(a, i, null, function () {
                    "function" == typeof o && o("Error occurred while fetching knowledge center entries"), S.logger.logInternalError("Error occurred while fetching KC entries")
                })
            }, this.fetchEntriesAndSendToWidget = function (e, t, r, o) {
                try {
                    var i = function (e) {
                        v(e.entries, e.recommendationRuleSets, e.userData, r), me()
                    };
                    if (!X || !n()) return;
                    S.logger.log("SDK Fetching KC entries");
                    var a = (0, w.getKcConfig)(),
                        s = a.kcId;
                    (0, w.isIframe)() ? K.default.getBotContent(s, function (e) {
                        var t = I(e, 1),
                            n = t[0],
                            r = n.response,
                            a = n.error;
                        r ? i(r) : o(a)
                    }): B.fetchEntriesById(s, e, t, i, o)
                } catch (e) {
                    S.logger.logInternalError(new Error("KC - fetch entries - " + e))
                }
            }, this.registerAfterWidgetLoad = function (e) {
                "function" == typeof e && D.push(e)
            }, this.searchArticles = function (e, t, r, o, i, a, s, l) {
                if (n()) {
                    var c = o && Array.isArray(o) && o.length > 0 ? o.join() : "";
                    S.logger.log("SDK searching Articles");
                    var u = (0, j.maskUrl)(null, null, i, null, null, null, null);
                    i = I(u, 3)[2], i = (0, w.getConfig)("overrideBotSearchContextUrl") || i;
                    var d = (0, U.getTrackingPayload)();
                    Object.assign(d, {
                        searchTerm: r,
                        labels: c,
                        url: i,
                        ai: t,
                        userEmail: a
                    });
                    var g = (0, U.getUrl)(w.getWidgetDocsEndpoint + "/v2/" + e + "/" + s, d);
                    h({
                        type: "IS_COMMUNITY_API_IN_PROGRESS",
                        content: !0
                    }, l), x.AjaxUtil.getData(g, function (e) {
                        if (e) {
                            (0, A.isNotEmptyArr)(e) && e[0].propertyGroupId && (e[0].propertyGroupId, (0, H.getProduct)(T.eventTrackData[F.cacheGet](T.productIdParameter)));
                            var t = {
                                type: "APT_WIDGET_SEARCH_RESULTS",
                                articles: e
                            };
                            S.logger.log("SDK Posting articles to KC"), h(t, l)
                        }
                    }, null, function () {
                        S.logger.logInternalError("Error occurred while searching KC articles"), h({
                            type: "APT_WIDGET_SEARCH_RESULTS_FAILED"
                        }, l)
                    })
                }
            }, this.getCommunityContentList = function (e, t, r, o, i) {
                if (n()) {
                    S.logger.log("SDK get Community Content list");
                    var a = {
                            userEmail: r,
                            sortBy: o
                        },
                        s = (0, U.getUrl)(w.getWidgetDocsEndpoint + "/community/content/" + e + "/" + G, a);
                    h({
                        type: "IS_COMMUNITY_API_IN_PROGRESS",
                        content: !0
                    }, i), x.AjaxUtil.getData(s, function (t) {
                        !t || t.propertyGroupId && t.propertyGroupId !== (0, H.getProduct)(e) || (S.logger.log("SDK Posting community content list to KC"), h({
                            type: "APT_GET_COMMUNITY_CONTENT_LIST",
                            content: t
                        }, i))
                    }, null, function () {
                        S.logger.logInternalError(new Error("Error occurred while fetching community content list:")), h({
                            type: "APT_GET_COMMUNITY_CONTENT_LIST_FAILED"
                        }, i)
                    })
                }
            }, this.searchCommunityContent = function (e, t, r, o, i) {
                if (n()) {
                    S.logger.log("SDK get Community Content search");
                    var a = (0, U.getTrackingPayload)();
                    Object.assign(a, {
                        searchTerm: r,
                        userEmail: o
                    });
                    var s = (0, U.getUrl)(w.getWidgetDocsEndpoint + "/community/" + e + "/" + G, a);
                    h({
                        type: "IS_COMMUNITY_API_IN_PROGRESS",
                        content: !0
                    }, i), x.AjaxUtil.getData(s, function (t) {
                        !t || t.propertyGroupId && t.propertyGroupId !== (0, H.getProduct)(e) || (S.logger.log("SDK Posting community content search results to KC"), h({
                            type: "APT_GET_COMMUNITY_CONTENT_SEARCH",
                            content: t
                        }, i))
                    }, null, function () {
                        S.logger.logInternalError(new Error("Error occurred while fetching community content search:")), h({
                            type: "APT_GET_COMMUNITY_CONTENT_SEARCH_FAILED"
                        }, i)
                    })
                }
            }, this.voteOnCommunityContent = function (e, t, r, o, i, a, s, l) {
                if (n()) {
                    var c = (0, U.getTrackingPayload)();
                    Object.assign(c, {
                        contentId: a,
                        contentType: o,
                        userEmail: i
                    });
                    var u = "idea" === o ? "vote" : "like";
                    s && (u = "un" + u);
                    var d = (0, U.getUrl)(w.getWidgetSingleDocEndpoint + "/community/" + u + "/" + e + "/" + G, c);
                    x.AjaxUtil.getData(d, function (e) {
                        e ? (S.logger.log("SDK Posting community vote\\like result to KC"), h({
                            type: "APT_VOTE_ON_COMMUNITY_CONTENT",
                            contentId: a,
                            contentType: o,
                            totalLikes: l,
                            likedByUser: !s
                        }, r)) : h({
                            type: "APT_VOTE_ON_COMMUNITY_CONTENT_BLOCKED"
                        }, r)
                    }, null, function () {
                        S.logger.logInternalError(new Error("Error occurred while " + u + " community article by id: " + a)), h({
                            type: "APT_VOTE_ON_COMMUNITY_CONTENT_FAILED"
                        }, r)
                    })
                }
            }, this.getCommunityArticleById = function (e, t, r, o, i, a, s, l) {
                if (n()) {
                    S.logger.log("SDK get Community Article by id");
                    var c = (0, U.getTrackingPayload)();
                    Object.assign(c, {
                        contentId: r,
                        contentType: o,
                        userEmail: s
                    });
                    var u = (0, U.getUrl)(w.getWidgetSingleDocEndpoint + "/community/" + e + "/" + G, c);
                    x.AjaxUtil.getData(u, function (t) {
                        if (t && (!t.propertyGroupId || t.propertyGroupId === (0, H.getProduct)(e))) {
                            var n = {
                                type: "APT_GET_COMMUNITY_ARTICLE",
                                article: t
                            };
                            t.entryType = "COMMUNITY_ARTICLE", t.totalLikes = i, t.userRegistered = a, t.userEmail = s, t.contentId = r, S.logger.log("SDK Posting community article to KC"), h(n, l)
                        }
                    }, null, function () {
                        S.logger.logInternalError(new Error("Error occurred while fetching community article by id: " + r)), h({
                            type: "APT_GET_COMMUNITY_ARTICLE_FAILED"
                        }, l)
                    })
                }
            }, this.getArticleById = function (e, t, r, o, i, a) {
                if (n()) {
                    S.logger.log("SDK get Article by id");
                    var s = (0, U.getTrackingPayload)();
                    Object.assign(s, {
                        propertyGroupId: o,
                        articleId: r,
                        ai: t,
                        art: i
                    });
                    var l = (0, U.getUrl)(w.getWidgetSingleDocEndpoint + "/" + e + "/" + G, s);
                    x.AjaxUtil.getData(l, function (t) {
                        if (t && (!t.propertyGroupId || t.propertyGroupId === (0, H.getProduct)(e))) {
                            var n = {
                                type: "APT_GET_ARTICLE",
                                article: t
                            };
                            S.logger.log("SDK Posting article to KC"), h(n, a)
                        }
                    }, null, function () {
                        S.logger.logInternalError(new Error("Error occurred while fetching article by id: " + r)), h({
                            type: "APT_GET_ARTICLE_FAILED"
                        }, a)
                    })
                }
            }, this.updateEmbeddedMappedElement = function (e) {
                ge = e
            }, this.getEmbeddedMappedElement = function () {
                return ge
            }, this.toggleBot = function () {
                de ? ce.close(!0) : ce.open()
            }, this.setIsOpen = function (e) {
                de = e
            }, this.open = function () {
                if (B.checkIsInitialized()) {
                    "embedded" === (0, w.getConfig)("kcDisplayType") && B.updatePositionForEmbeddeBot(), h({
                        type: "APT_WIDGET_OPEN"
                    }), ue = !0
                }
            }, this.close = function (e) {
                try {
                    e && de && ((0, w.isIframe)() ? K.default.trackBotToggle(G, !1) : (0, U.trackToggleWidget)(G, !1)), h({
                        type: "APT_WIDGET_CLOSE"
                    }), ue = !1
                } catch (e) {
                    S.logger.log("clsoing bot " + e)
                }
            }, this.checkIsShown = function () {
                return ue
            }, this.postToWidget = h, this.addClickListenerToElement = function (e) {
                (0, A.addEventListener)(e, "click", ce.open)
            }, this.openArticleById = function (e) {
                S.logger.log("SDK open article by id"), B.postToWidget({
                    type: "APT_SET_ARTICLE_BY_ID",
                    articleId: e
                })
            }, this.fetchAndOpenArticleById = function (e, t, n, r) {
                S.logger.log("SDK fetch and open article by id");
                var o = (0, U.getUrl)((0, w.getWidgetArticleByIdEndpoint)() + "/" + e + "/" + n, {
                    ai: t
                });
                x.AjaxUtil.getData(o, function (t) {
                    !t || t.propertyGroupId && t.propertyGroupId !== (0, H.getProduct)(e) || (S.logger.log("SDK Posting article to KC"), B.postToWidget({
                        type: "APT_SET_ARTICLE",
                        article: Object.assign(t, {
                            forceOpen: !0
                        })
                    }, r))
                }, null, function () {
                    S.logger.logInternalError(new Error("Error occurred while fetching article by id: " + n)), h({
                        type: "APT_SET_ARTICLE_FAILED"
                    }, r)
                })
            }
        }
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o() {
        var e = window.MutationObserver || window.WebKitMutationObserver;
        if ((0, m.getConfig)("angularMutationObserver") && window.Zone) {
            var t = window.Zone.__symbol__("MutationObserver"),
                n = window.Zone.__symbol__("WebkitMutationObserver");
            e = window[t] || window[n] || window.MutationObserver || window.WebKitMutationObserver
        }
        return e
    }

    function i() {
        return !(0, m.getConfig)("badgeUseInterval") && ((0, u.detectIE)() >= 11 || v)
    }

    function a(e, t) {
        b.forEach(function (n) {
            try {
                (n.validateBeforeChange && n.validateBeforeChange(e, t) || t) && n.onChangeCallback(e, t)
            } catch (e) {
                d.logger.logInternalError(e, "failed to run on change for observer")
            }
        }), E = []
    }

    function s() {
        return function (e) {
            try {
                return e.beforeValidator()
            } catch (e) {
                return d.logger.logInternalError(e, "failed to validate if need to run observer"), !1
            }
        }
    }

    function l() {
        if (!y) return !1;
        try {
            var e = o();
            C = new e(function (e) {
                if (b.some(s())) {
                    var t = e.some(function (e) {
                        var t = e.attributeName,
                            n = e.target,
                            r = e.type,
                            o = "attributes" === r && ("style" === t || "class" === t),
                            i = n.getAttribute("class") || "",
                            a = n.getAttribute("id") || "",
                            s = -1 === i.indexOf("apt") && -1 === a.indexOf("apt");
                        return s && "attributes" !== r || s && o
                    });
                    E = E.concat(e), T(t)
                }
            }), C.observe((0, m.getBody)(), h)
        } catch (e) {
            d.logger.logInternalMessage(e, "failed to observed mutation")
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    t.getNativeMutationObserver = o, t.checkMutationObserverIsSupported = i;
    var u = n(9),
        d = n(3),
        g = n(0),
        f = n(16),
        p = n(138),
        m = n(1),
        v = window.MutationObserver || window.WebKitMutationObserver,
        h = {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ["style", "class"]
        },
        y = (0, u.detectIE)() >= 11 || v,
        b = [],
        E = [],
        I = {},
        C = void 0,
        T = (0, g.debounce)(function (e) {
            a(E, e)
        }, 300),
        w = function e(t, n, o, i) {
            r(this, e), this.id = t, this.beforeValidator = n, this.onChangeCallback = o, this.validateBeforeChange = i
        },
        S = function () {
            function e() {
                r(this, e)
            }
            return c(e, [{
                key: "addObserver",
                value: function (e, t, n) {
                    b.length < 1 && l();
                    var r = f.UUIDGenerator.generateV4Id();
                    return b.push(new w(r, e, t, n)), r
                }
            }, {
                key: "removeObserver",
                value: function (e) {
                    var t = (0, p.findIndex)(b, function (t) {
                        return t.id === e
                    });
                    t > -1 && b.splice(t, 1), b.length < 1 && C.disconnect()
                }
            }, {
                key: "addPXElementObserver",
                value: function (e, t, n) {
                    this.addElementObserver(e, t, n, !0)
                }
            }, {
                key: "addElementObserver",
                value: function (e, t, n, r) {
                    try {
                        var i = o(),
                            a = new i(function (e) {
                                e.some(function (e) {
                                    var t = e.attributeName,
                                        n = e.target,
                                        o = e.type,
                                        i = "attributes" === o && ("style" === t || "class" === t),
                                        a = n.getAttribute("class") || "",
                                        s = n.getAttribute("id") || "",
                                        l = r || -1 === a.indexOf("apt") && -1 === s.indexOf("apt");
                                    return l && "attributes" !== o || l && i
                                }) && n(e)
                            });
                        a.observe(t, {
                            childList: !0,
                            subtree: !0,
                            attributeFilter: ["style", "class"]
                        }), I[e] = a
                    } catch (e) {
                        d.logger.logInternalMessage(e, "failed to observed mutation for element: " + t)
                    }
                }
            }, {
                key: "removeElementListener",
                value: function (e) {
                    var t = I[e];
                    t && (t.disconnect(), delete I[e])
                }
            }]), e
        }(),
        k = new S;
    t.default = k
}, function (e, t, n) {
    "use strict";
    var r, o, i, a, a, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        l = n(8),
        c = n(0),
        u = n(7),
        d = n(1);
    ! function (n) {
        if ("object" === s(t) && void 0 !== e) e.exports = n();
        else {
            o = [], r = n, void 0 !== (i = "function" == typeof r ? r.apply(t, o) : r) && (e.exports = i)
        }
    }(function () {
        return function e(t, n, r) {
            function o(s, l) {
                if (!n[s]) {
                    if (!t[s]) {
                        var c = "function" == typeof a && a;
                        if (!l && c) return a(s, !0);
                        if (i) return i(s, !0);
                        var u = new Error("Cannot find module '" + s + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var d = n[s] = {
                        exports: {}
                    };
                    t[s][0].call(d.exports, function (e) {
                        var n = t[s][1][e];
                        return o(n || e)
                    }, d, d.exports, e, t, n, r)
                }
                return n[s].exports
            }
            for (var i = "function" == typeof a && a, s = 0; s < r.length; s++) o(r[s]);
            return o
        }({
            1: [function (e, t, n) {
                /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
                "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? function () {
                    var e = document.createElement("_");
                    if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
                        var t = function (e) {
                            var t = DOMTokenList.prototype[e];
                            DOMTokenList.prototype[e] = function (e) {
                                var n, r = arguments.length;
                                for (n = 0; n < r; n++) e = arguments[n], t.call(this, e)
                            }
                        };
                        t("add"), t("remove")
                    }
                    if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
                        var n = DOMTokenList.prototype.toggle;
                        DOMTokenList.prototype.toggle = function (e, t) {
                            return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e)
                        }
                    }
                    e = null
                }() : function (e) {
                    if ("Element" in e) {
                        var t = e.Element.prototype,
                            n = Object,
                            r = String.prototype.trim || function () {
                                return this.replace(/^\s+|\s+$/g, "")
                            },
                            o = Array.prototype.indexOf || function (e) {
                                for (var t = 0, n = this.length; t < n; t++)
                                    if (t in this && this[t] === e) return t;
                                return -1
                            },
                            i = function (e, t) {
                                this.name = e, this.code = DOMException[e], this.message = t
                            },
                            a = function (e, t) {
                                if ("" === t) throw new i("SYNTAX_ERR", "An invalid or illegal string was specified");
                                if (/\s/.test(t)) throw new i("INVALID_CHARACTER_ERR", "String contains an invalid character");
                                return o.call(e, t)
                            },
                            s = function (e) {
                                for (var t = r.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], o = 0, i = n.length; o < i; o++) this.push(n[o]);
                                this._updateClassName = function () {
                                    e.setAttribute("class", this.toString())
                                }
                            },
                            l = s.prototype = [],
                            c = function () {
                                return new s(this)
                            };
                        if (i.prototype = Error.prototype, l.item = function (e) {
                                return this[e] || null
                            }, l.contains = function (e) {
                                return e += "", -1 !== a(this, e)
                            }, l.add = function () {
                                var e, t = arguments,
                                    n = 0,
                                    r = t.length,
                                    o = !1;
                                do {
                                    e = t[n] + "", -1 === a(this, e) && (this.push(e), o = !0)
                                } while (++n < r);
                                o && this._updateClassName()
                            }, l.remove = function () {
                                var e, t, n = arguments,
                                    r = 0,
                                    o = n.length,
                                    i = !1;
                                do {
                                    for (e = n[r] + "", t = a(this, e); - 1 !== t;) this.splice(t, 1), i = !0, t = a(this, e)
                                } while (++r < o);
                                i && this._updateClassName()
                            }, l.toggle = function (e, t) {
                                e += "";
                                var n = this.contains(e),
                                    r = n ? !0 !== t && "remove" : !1 !== t && "add";
                                return r && this[r](e), !0 === t || !1 === t ? t : !n
                            }, l.toString = function () {
                                return this.join(" ")
                            }, n.defineProperty) {
                            var u = {
                                get: c,
                                enumerable: !0,
                                configurable: !0
                            };
                            try {
                                n.defineProperty(t, "classList", u)
                            } catch (e) {
                                -2146823252 === e.number && (u.enumerable = !1, n.defineProperty(t, "classList", u))
                            }
                        } else n.prototype.__defineGetter__ && t.__defineGetter__("classList", c)
                    }
                }(window.self))
            }, {}],
            2: [function (e, t, n) {
                function r(e, t) {
                    if ("string" != typeof e) throw new TypeError("String expected");
                    t || (t = document);
                    var n = /<([\w:]+)/.exec(e);
                    if (!n) return t.createTextNode(e);
                    e = e.replace(/^\s+|\s+$/g, "");
                    var r = n[1];
                    if ("body" == r) {
                        var o = t.createElement("html");
                        return o.innerHTML = e, o.removeChild(o.lastChild)
                    }
                    var i = a[r] || a._default,
                        s = i[0],
                        l = i[1],
                        c = i[2],
                        o = t.createElement("div");
                    for (o.innerHTML = l + e + c; s--;) o = o.lastChild;
                    if (o.firstChild == o.lastChild) return o.removeChild(o.firstChild);
                    for (var u = t.createDocumentFragment(); o.firstChild;) u.appendChild(o.removeChild(o.firstChild));
                    return u
                }
                t.exports = r;
                var o, i = !1;
                "undefined" != typeof document && (o = document.createElement("div"), o.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>', i = !o.getElementsByTagName("link").length, o = void 0);
                var a = {
                    legend: [1, "<fieldset>", "</fieldset>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    _default: i ? [1, "X<div>", "</div>"] : [0, "", ""]
                };
                a.td = a.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], a.option = a.optgroup = [1, '<select multiple="multiple">', "</select>"], a.thead = a.tbody = a.colgroup = a.caption = a.tfoot = [1, "<table>", "</table>"], a.polyline = a.ellipse = a.polygon = a.circle = a.text = a.line = a.path = a.rect = a.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"]
            }, {}],
            3: [function (e, t, n) {
                function r(e, t) {
                    if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
                    for (var n = Object(e), r = 1; r < arguments.length; r++) {
                        var o = arguments[r];
                        if (void 0 !== o && null !== o)
                            for (var i = Object.keys(Object(o)), a = 0, s = i.length; a < s; a++) {
                                var l = i[a],
                                    c = Object.getOwnPropertyDescriptor(o, l);
                                void 0 !== c && c.enumerable && (n[l] = o[l])
                            }
                    }
                    return n
                }

                function o() {
                    Object.assign || Object.defineProperty(Object, "assign", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: r
                    })
                }
                t.exports = {
                    assign: r,
                    polyfill: o
                }
            }, {}],
            4: [function (e, t, n) {
                e("classlist-polyfill"), e("es6-object-assign").polyfill();
                var r = e("domify"),
                    o = function (e) {
                        if (void 0 !== e) {
                            var t = document.createElement("div");
                            return t.appendChild(document.createTextNode(e)), t.innerHTML
                        }
                        return ""
                    },
                    i = function (e, t) {
                        if ("string" == typeof t && 0 !== t.length)
                            for (var n = t.split(" "), r = 0; r < n.length; r++) {
                                var o = n[r];
                                o.length && e.classList.add(o)
                            }
                    },
                    a = function () {
                        for (var e = document.createElement("div"), t = [{
                                styleName: "animation",
                                eventName: "animationend"
                            }, {
                                styleName: "WebkitAnimation",
                                eventName: "webkitAnimationEnd"
                            }, {
                                styleName: "MozAnimation",
                                eventName: "animationend"
                            }, {
                                styleName: "OAnimation",
                                eventName: "oanimationend"
                            }, {
                                styleName: "msAnimation",
                                eventName: "MSAnimationEnd"
                            }], n = 0; n < t.length; n++)
                            if (void 0 !== e.style[t[n].styleName]) return t[n].eventName;
                        return !1
                    }(),
                    s = {
                        vex: "vex",
                        content: "vex-content",
                        overlay: "vex-overlay",
                        close: "vex-close",
                        closing: "vex-closing",
                        open: "vex-open"
                    },
                    g = {},
                    f = 1,
                    p = !1,
                    m = {
                        open: function (e) {
                            var t = function (e) {
                                console.warn('The "' + e + '" property is deprecated in vex 3. Use CSS classes and the appropriate "ClassName" options, instead.'), console.warn("See http://github.hubspot.com/vex/api/advanced/#options")
                            };
                            e.css && t("css"), e.overlayCSS && t("overlayCSS"), e.contentCSS && t("contentCSS"), e.closeCSS && t("closeCSS");
                            var n = {};
                            n.id = f++, g[n.id] = n, n.isOpen = !0, n.close = function () {
                                function e(e) {
                                    var t = n.getPropertyValue(e + "animation-name"),
                                        r = n.getPropertyValue(e + "animation-duration");
                                    return !!t && "none" !== t && !!r && "0s" !== r
                                }
                                if (!this.isOpen) return !0;
                                var t = this.options;
                                if (p && !t.escapeButtonCloses) return !1;
                                if (!1 === function () {
                                        return !t.beforeClose || t.beforeClose.call(this)
                                    }.bind(this)()) return !1;
                                this.isOpen = !1;
                                var n = window.getComputedStyle(this.contentEl),
                                    r = e("");
                                r = r || e("-webkit-"), r = r || e("-moz-"), r = r || e("-o-");
                                var o = function e() {
                                    this.rootEl.parentNode && (this.rootEl.removeEventListener(a, e), delete g[this.id], this.rootEl.parentNode.removeChild(this.rootEl), t.afterClose && t.afterClose.call(this), 0 === Object.keys(g).length && (0, d.getBody)().classList.remove(s.open))
                                }.bind(this);
                                return a && r ? (this.rootEl.addEventListener(a, o), this.rootEl.classList.add(s.closing)) : o(), !0
                            }, "string" == typeof e && (e = {
                                content: e
                            }), e.unsafeContent && !e.content ? e.content = e.unsafeContent : e.content && (e.content = o(e.content));
                            var v = n.options = Object.assign({}, m.defaultOptions, e),
                                h = n.rootEl = document.createElement("div");
                            h.classList.add(s.vex), i(h, v.className);
                            var y = n.overlayEl = document.createElement("div");
                            y.classList.add(s.overlay), i(y, v.overlayClassName), v.overlayClosesOnClick && y.addEventListener("click", function (e) {
                                e.target === y && n.close()
                            }), h.appendChild(y);
                            var b = n.contentEl = document.createElement("div");
                            if (b.classList.add(s.content), i(b, v.contentClassName), b.appendChild(v.content instanceof window.Node ? v.content : r(v.content)), h.appendChild(b), v.showCloseButton) {
                                var E = n.closeEl = document.createElement("div");
                                E.classList.add(s.close), i(E, v.closeClassName), E.setAttribute("tabindex", l.MAX_TAB_INDEX), E.setAttribute("role", "button"), E.setAttribute("aria-label", "close"), (0, u.disableFocusOnClick)(E, b), (0, c.addEnterKeyDownListener)(E, function () {
                                    return E && E.click()
                                }), E.addEventListener("click", n.close.bind(n)), b.appendChild(E)
                            }
                            return document.querySelector(v.appendLocation).appendChild(h), v.afterOpen && v.afterOpen.call(n), e.disableTransitionEffect && h.classList.add("apt-disable-transition"), b.setAttribute("tabindex", l.TAB_INDEX_START - 1), e.disableAutoFocus || (0, u.focusElement)(b), e.enableModalBodyScroll && (0, d.getBody)().classList.add(s.open), n
                        },
                        close: function (e) {
                            var t;
                            if (e.id) t = e.id;
                            else {
                                if ("string" != typeof e) throw new TypeError("close requires a vex object or id string");
                                t = e
                            }
                            return !!g[t] && g[t].close()
                        },
                        closeTop: function () {
                            var e = Object.keys(g);
                            return !!e.length && g[e[e.length - 1]].close()
                        },
                        closeAll: function () {
                            for (var e in g) this.close(e);
                            return !0
                        },
                        getAll: function () {
                            return g
                        },
                        getById: function (e) {
                            return g[e]
                        }
                    };
                window.addEventListener("keyup", function (e) {
                    27 === e.keyCode && (p = !0, m.closeTop(), p = !1)
                }), window.addEventListener("popstate", function () {
                    m.defaultOptions.closeAllOnPopState && m.closeAll()
                }), m.defaultOptions = {
                    content: "",
                    showCloseButton: !0,
                    escapeButtonCloses: !0,
                    overlayClosesOnClick: !0,
                    appendLocation: "body",
                    className: "",
                    overlayClassName: "",
                    contentClassName: "",
                    closeClassName: "",
                    closeAllOnPopState: !0
                }, Object.defineProperty(m, "_escapeHtml", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !1,
                    value: o
                }), m.registerPlugin = function (e, t) {
                    var n = e(m),
                        r = t || n.name;
                    if (m[r]) throw new Error("Plugin " + t + " is already registered.");
                    m[r] = n
                };
                var v = m;
                t.exports = v
            }, {
                "classlist-polyfill": 1,
                domify: 2,
                "es6-object-assign": 3
            }]
        }, {}, [4])(4)
    })
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        return "" + t + e.substring(g.length)
    }

    function o(e, t) {
        var n = e.substring(d.length),
            r = n[0];
        if (-1 === ["/", "?", "#"].indexOf(r)) return t;
        var o = document.createElement("a");
        o.href = t;
        var i = decodeURIComponent(o.host.endsWith(":80") || o.host.endsWith(":443") ? o.hostname : o.host),
            a = o.protocol + "//";
        switch (r) {
            case "/":
                return "" + a + i + n;
            case "?":
                return "" + a + i + o.pathname + n;
            case "#":
                return "" + a + i + o.pathname + o.search + n;
            default:
                return t
        }
    }

    function i(e, t, n) {
        if (!t) return "";
        if (!e) return t;
        if (t === n) return t;
        var r = t.split(n),
            o = e.split(n);
        if (1 === r.length && r[0] === u || 2 === r.length && "" === r[0] && r[1] === u) return e.charAt(0) === n ? e.substring(1) : e;
        for (var i = [], a = 0; a < r.length; a++) {
            var s = o[a],
                l = r[a];
            s && l && l === u ? i.push(s) : l && i.push(l)
        }
        return i.join(n)
    }

    function a(e, t) {
        if (t.startsWith(g)) return r(t, e);
        if (t.startsWith(d)) return o(t, e);
        if (-1 === t.indexOf(c)) return t;
        if (t === u) return e;
        var n = document.createElement("a");
        n.href = e, 0 === t.indexOf(u) && (t = n.protocol + "//" + t);
        var a = document.createElement("a");
        a.href = t, p(a.pathname, a.hash) && (a.pathname += a.hash, a.hash = ""), a.hash !== "#" + u && p(n.pathname, n.hash) && (n.pathname += n.hash, n.hash = "");
        var s = decodeURIComponent(n.host.endsWith(":80") || n.host.endsWith(":443") ? n.hostname : n.host),
            l = decodeURIComponent(a.host.endsWith(":80") || a.host.endsWith(":443") ? a.hostname : a.host),
            m = i(s, l, "."),
            v = i(decodeURIComponent(n.pathname), decodeURIComponent(a.pathname), "/"),
            h = !1;
        !n.hash.startsWith("#/") && n.hash.split("/").length > 1 && (n.hash = n.hash.replace("/", "#")), !n.hash.startsWith("#/") && a.hash.split("/").length > 1 && (a.hash = a.hash.replace("/", "#"), h = !0);
        var y = i(n.hash, a.hash, "#");
        h && (y = y.replace("#", "/"));
        var b = "",
            E = "",
            I = "";
        if (n.search || a.search && a.search.substring(1) !== u)
            if (n.search) {
                b = decodeURIComponent(n.search).substring(1).split("&"), E = decodeURIComponent(a.search).substring(1).split("&");
                for (var C = [], T = 0; T < E.length; T++) {
                    var w = i(b[T], E[T], "=");
                    C.push(w)
                }
                I = C.join("&")
            } else I = a.search.substring(1);
        return f(a.protocol, m, v, I, y)
    }

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (e) {
                return e
            },
            n = l.documentRef.createElement("div");
        return n.innerHTML = e, n.querySelectorAll("a").forEach(function (e) {
            var n = a(window.location.href, e.href);
            e.href = t ? t(n) : n
        }), n.innerHTML
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.resolveUrlWithPlaceholders = a, t.resolveUrlsWithPlaceholdersInHTML = s;
    var l = n(4),
        c = "px-auto-resolve",
        u = "$px-auto-resolve",
        d = "$px-auto-resolve-prefix",
        g = "$px-auto-resolve-current-url",
        f = function (e, t, n, r, o) {
            var i = n && "/" !== n ? "/" + n : "/" === n ? "/" : "",
                a = r ? "?" + r : "",
                s = "";
            return o && (s = o.startsWith("#") ? o : "#" + o), e + "//" + t + i + a + s
        },
        p = function (e, t) {
            return t && (0 === t.indexOf("#/") || 0 === t.indexOf("#!/")) && e && -1 !== e.indexOf("/", e.length - 1)
        }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(9),
        o = n(1),
        i = window,
        a = function (e) {
            function t(e, t, n, r, o) {
                var a = [],
                    l = i.getComputedStyle(e);
                switch (e.style.position = "fixed", r = r || 0, t.toLowerCase()) {
                    case "left":
                        e.style.right = "", e.style.left = 10 + o + "px", a.push("left");
                        break;
                    case "right":
                        e.style.left = window.innerWidth - parseInt(l.width, 10) - 10 + o + "px", e.style.right = "", a.push("right");
                        break;
                    case "center":
                    default:
                        e.style.right = "", e.style.left = "calc(50% - " + (0 - o + parseInt(l.width, 10) / 2) + "px)", a.push("center")
                }
                switch (n.toLowerCase()) {
                    case "top":
                        e.style.bottom = "", e.style.top = 10 + r + s + "px", a.push("top");
                        break;
                    case "bottom":
                        e.style.bottom = 10 - r + "px", e.style.top = "auto", a.push("bottom");
                        break;
                    case "center":
                    default:
                        e.style.bottom = "", e.style.top = "calc(50% - " + (0 - r + parseInt(l.height, 10) / 2) + "px)", a.push("center")
                }
                return a
            }

            function n(e, t, n, i, a, l, c, u, d, g) {
                if (!t || void 0 === t) return null;
                var f = t.isDom ? t.element.getBoundingClientRect() : t.elementRect,
                    p = e.getBoundingClientRect(),
                    m = t && f,
                    v = t && m.height,
                    h = t && m.width,
                    y = p.height,
                    b = p.width,
                    E = (0, r.getPageWidth)(),
                    I = (0, r.getFullPageHeight)(),
                    C = null,
                    T = null;
                switch (n.toLowerCase()) {
                    case "left":
                        C = m.left, c || (C -= b + ("center" === i ? 10 : 0));
                        break;
                    case "right":
                        C = m.left + m.width, c || (C += "center" === i ? 10 : 0);
                        break;
                    case "center":
                        C = Math.abs(m.left + h / 2) - (c ? 0 : b / 2);
                        break;
                    default:
                        throw new Error("unsupported horizontal position " + n)
                }
                switch (i.toLowerCase()) {
                    case "top":
                        T = m.top - (c ? 0 : y + 10);
                        break;
                    case "center":
                        T = m.top + v / 2 - (c ? 0 : y / 2);
                        break;
                    case "bottom":
                        T = m.top + v + (c ? 0 : 10);
                        break;
                    default:
                        throw new Error("unsupported vertical position " + i)
                }
                var w = C < 0 || C + b > E;
                if (!u && w) return null;
                T += isNaN(g) ? window.pageYOffset : g;
                var S = T + y > I || T < s;
                if (!u && S) return null;
                var k = T + a;
                if (!(0, o.getConfig)("enableModalBodyScroll")) {
                    var x = (0, o.getBody)().getBoundingClientRect(),
                        O = x.top;
                    O > 0 && (k -= O)
                }
                k += "px";
                var _ = C + l + "px";
                return d ? e.style.setProperty("transform", "translate3d(" + _ + ", " + k + ", 0px") : (e.style.left = _, e.style.top = k), [n, i]
            }
            var a = this,
                s = e || 0;
            this.setDefaultTopOffset = function (e) {
                s = e || 0
            }, this.positionElement = function (e, r, o, i, a, s, l, c, u, d) {
                return a || 0 === a || (a = 0), s || 0 === s || (s = 0), r ? n(e, r, o, i, a, s, l, c, u, d) : t(e, o, i, a, s)
            }, this.getElementPosition = function (e) {
                var t = e.getBoundingClientRect();
                return [t.top, t.left, t.bottom, t.right]
            }, this.getElementDataPosition = function (e) {
                return e.isDom ? a.getElementPosition(e.element) : [e.elementRect.top, e.elementRect.left, e.elementRect.bottom, e.elementRect.right]
            }
        };
    t.default = a
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        (0, M.findTarget)(e, t.target, function (n) {
            t.target = n, n && ae(e, t)
        })
    }

    function a() {
        var e = (0, V.getConfig)("badgeRepositionInterval");
        return (0, Y.isNullOrUndefined)(e) && (e = 500), e
    }

    function s() {
        var e = Object.values(ee);
        re.forEach(function (e) {
            var t = e.sdkRules,
                n = e.badgeSettings.id,
                r = e.engagementId,
                o = {
                    url: (0, Y.getPageUrl)()
                };
            if ((0, Y.isBlank)(t) || (0, J.matchMultiTypeRules)(JSON.parse(t), o)) {
                if (!ee[n]) {
                    e.badgeSettings.engagementId = r;
                    var i = ae(e.badgeSettings);
                    i && (ee[n] = i)
                }
            } else ee[n] && (ee[n].destroy(), delete ee[n])
        });
        var t = Object.values(ee),
            n = (0, Q.checkMutationObserverIsSupported)();
        (0, V.isIframe)() ? (ne.observe((0, V.getBody)(), ue), g()) : ne && n ? e.length > 0 && 0 === t.length ? (ne.disconnect(), g(), O()) : 0 === e.length && t.length > 0 ? (ne.observe((0, V.getBody)(), ue), g()) : e.length > 0 && t.length > 0 && g() : u()
    }

    function l() {
        try {
            var e = (0, Q.getNativeMutationObserver)();
            ne = new e(function (e) {
                Object.values(ee).length > 0 || (0, V.isIframe)() ? e.some(function (e) {
                    var t = e.attributeName,
                        n = e.target,
                        r = e.type,
                        o = "attributes" === r && ("style" === t || "class" === t),
                        i = n.getAttribute("class") || "",
                        a = -1 === i.indexOf("apt") && -1 === i.indexOf("px-");
                    return a && "attributes" !== r || a && o
                }) && ((0, V.isIframe)() ? d() : (ie = ie || de())()) : ne.disconnect()
            }), ne.observe((0, V.getBody)(), ue)
        } catch (e) {
            U.logger.logInternalError(new Error("Mutation Observer", e))
        }
    }

    function c() {
        oe && clearInterval(oe)
    }

    function u() {
        c(), oe = setInterval(function () {
            var e = Object.values(ee);
            e.length > 0 || (0, V.isIframe)() ? g() : c()
        }, 2e3)
    }

    function d() {
        if ((0, V.isIframe)()) {
            var e = Object.values(ee);
            if (e.length > 0) {
                var t = e.map(function (e) {
                    var t = e.elementSelector,
                        n = t.matchCssSelector,
                        r = t.selector,
                        o = t.cssSelector,
                        i = t.matchTextRule,
                        a = t.textRule,
                        s = t.htmlTextRule,
                        l = s || JSON.parse(a) || {},
                        c = l.operator,
                        u = l.values,
                        d = {
                            matchCssSelector: n,
                            cssSelector: r || o,
                            matchTextRule: i,
                            textRuleOperator: c,
                            textRuleValues: u
                        },
                        g = (0, $.findElementInWindow)(d, (0, V.getBody)(), !1);
                    return Object.assign({}, e, {
                        isExist: !!g
                    })
                });
                K.default.broadcastBadgesStatuses(t)
            }
        }
    }

    function g() {
        (0, V.isIframe)() ? d(): le(Object.values(ee))
    }

    function f() {
        ne.disconnect(), H.internalEventListener.removeListener("pageview", s)
    }

    function p() {
        var e = (0, Q.checkMutationObserverIsSupported)();
        (0, V.isIframe)() ? e ? l() : u(): (x(), 0 === re.length ? H.internalEventListener.removeListener("pageview", s) : re.length > 0 && (e ? l() : u(), H.internalEventListener.addListener("pageview", s)))
    }

    function m(e) {
        var t = R.eventTrackData[D.cacheGet](R.sessionIdParam),
            n = B.default.fetchBadges(t);
        y(e, n), B.default.storeBadges(t, n, !0)
    }

    function v(e, t, n) {
        B.default.setIsPreview(n);
        var r = void 0;
        if (t) {
            r = {};
            for (var o = 0; o < t.length; o++) r[t[o].badgeSettings.id] = {
                index: o,
                badge: t[o]
            }
        }
        var i = !1;
        return e.forEach(function (o, a) {
            try {
                var s = o.badgeSettings,
                    l = o.engagementId,
                    c = o.sdkRules,
                    u = s.id,
                    d = ee[u];
                d && d.destroy(), r && t.splice(r[o.badgeSettings.id].index, 1, o);
                var g = {
                    url: (0, Y.getPageUrl)()
                };
                if ((0, Y.isBlank)(c) || (0, J.matchMultiTypeRules)(JSON.parse(c), g)) {
                    s.engagementId = l, s.clickCallback = n ? s.clickCallback : m, s.executionId = o.executionId;
                    var f = ae(s, null);
                    f && (ee[u] = f)
                } else U.logger.log("SDK rules did not match, rules: " + c + ", current URL: " + g);
                i || e.length - 1 !== a || (h(e), p(le), i = !0)
            } catch (e) {
                U.logger.logInternalError(e)
            }
        }), Object.values(ee)
    }

    function h(e) {
        e.forEach(function (e) {
            var t = e.badgeSettings.id;
            re.filter(function (e) {
                return e.badgeSettings.id === t
            }).length > 0 || re.push(e)
        })
    }

    function y(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = ee[e], r = 0; r < t.length; r++) t[r].badgeSettings.id == e && t.splice(r, 1);
        for (var o = 0; o < re.length; o++) re[o].badgeSettings.id == e && re.splice(o, 1);
        n && (n.destroy(), delete ee[e])
    }

    function b(e) {
        var t = e.removed,
            n = e.updated,
            r = R.eventTrackData[D.cacheGet](R.sessionIdParam),
            o = B.default.fetchBadges(r);
        (0, Y.isNotEmptyArr)(t) && t.forEach(function (e) {
            return y(e, o)
        }), (0, Y.isNotEmptyArr)(n) && v(n, o), B.default.storeBadges(r, o, !0)
    }

    function E() {
        var e = R.eventTrackData[D.cacheGet](R.sessionIdParam),
            t = B.default.fetchBadges(e),
            n = Object.assign({}, ee);
        if (!(0, Y.isEmptyArr)(t) || !(0, Y.isEmptyArr)(Object.keys(n))) {
            var r = t.map(function (e) {
                var t = e.badgeSettings,
                    r = t.id,
                    o = t.version;
                return delete n[r], {
                    id: r,
                    version: o
                }
            });
            r.concat((0, X.arrayFrom)(Object.values(n), function (e) {
                var t = e.badgeAttr;
                return {
                    id: t.id,
                    version: t.version
                }
            }));
            var o = R.eventTrackData[D.cacheGet](R.aptrinsicIdParam),
                i = {};
            Object.assign(i, R.eventTrackData[D.cacheGetAll]()), (0, Y.addCacheBuster)(i);
            var a = V.refreshBadgeEndpoint + "?" + (0, Y.convert2Parameters)((0, Y.addParameters)(i, []));
            j.AjaxUtil.postData(a, {
                sdkBadges: r,
                aptrinsicId: o
            }, void 0, b, null, !0)
        }
    }

    function I(e, t) {
        var n = V.badgeTrackEndpoint,
            r = [];
        r = (0, Y.addParameters)(R.eventTrackData[D.cacheGetAll](), r), (0, Y.addParameters)({
            ei: e.engagementId,
            ecoi: e.badgeSettings.deviceContentId || null,
            evi: e.badgeSettings.matchEventId || null,
            acci: t,
            exi: e.executionId,
            ext: (new Date).getTime(),
            at: "b",
            bi: e.badgeSettings.id
        }, r);
        var o = (0, Z.getGlobalContext)();
        o && (0, Y.addParameters)({
            gcx: JSON.stringify(o)
        }, r), n += "?" + (0, Y.convert2Parameters)(r), j.AjaxUtil.getData(n)
    }

    function C() {
        clearInterval(fe), fe = null, w()
    }

    function T() {
        (0, V.isIframe)() || fe || (fe = setInterval(function () {
            if (0 === B.default.getAllBadgesInIframes().length) return void C();
            (0, z.getRegisteredIframes)().forEach(function (e) {
                var t = e.iframeId,
                    n = e.iframe;
                if (B.default.getBadgesOfIframe(t).length > 0) {
                    if (n.closed) return void k(t);
                    W.default.getBadgesLocations(e, function (t) {
                        var n = P(t, 1),
                            r = n[0],
                            o = e.domElement;
                        r.badges.forEach(function (e) {
                            var t = ee[e.id];
                            if (t) {
                                var n = document.getElementById("apt-" + e.id),
                                    r = {
                                        rect: e.rect,
                                        isVisible: e.isVisible && (0, Y.isElementInIframeVisible)(e.rect, o, n),
                                        isExist: e.isExist,
                                        pageYOffset: window.pageYOffset
                                    };
                                se(t, null, r)
                            }
                        }), 0 === r.badges.length && k(e.iframeId)
                    })
                }
            })
        }, 250))
    }

    function w() {
        (0, z.getRegisteredIframes)().forEach(function (e) {
            k(e.iframeId)
        })
    }

    function S(e) {
        ee[e] && (ee[e].destroy(), delete ee[e])
    }

    function k(e) {
        B.default.getBadgesOfIframe(e).forEach(function (e) {
            S(e), B.default.removeBadgeFromIframe(e)
        }), re.forEach(function (e) {
            var t = e.badgeSettings.id;
            if (!ee[t]) {
                var n = ae(e.badgeSettings);
                n && (ee[t] = n)
            }
        })
    }

    function x() {
        (0, z.getRegisteredIframes)().forEach(W.default.setBadgeObserver), H.internalEventListener.addListener("IFRAME_REGISTERED", W.default.setBadgeObserver)
    }

    function O() {
        (0, z.getRegisteredIframes)().forEach(W.default.unsetBadgeObserver), H.internalEventListener.removeListener("IFRAME_REGISTERED", W.default.setBadgeObserver)
    }

    function _(e, t) {
        t.forEach(function (t) {
            var n = t.id,
                r = t.isExist;
            if (B.default.addBadgeToIframe(e, n), r) {
                if (!ee[n]) {
                    var o = re.find(function (e) {
                        return e.badgeSettings.id === n
                    });
                    if (o) {
                        var i = ae(o.badgeSettings);
                        i && (ee[n] = i)
                    }
                }
            } else S(n)
        });
        var n = B.default.getAllBadgesInIframes(),
            r = B.default.getAllBadgesInIframes().length > 0;
        0 === t.length && B.default.getBadgesOfIframe(e).length > 0 && k(e), re.forEach(function (e) {
            var t = e.badgeSettings.id;
            if (-1 === n.indexOf(t))
                if (ee[t]) {
                    var r = ce();
                    !ee[t].target && r(ee[t])
                } else {
                    var o = ae(e.badgeSettings);
                    o && (ee[t] = o)
                }
        }), r ? T() : C()
    }

    function A() {
        var e = {};
        this.removeBadgeFromBadgesList = function (t) {
            delete ee[t], delete e[t], re = Object.values(e)
        }, this.addBadgeToBadgesList = function (t) {
            void 0 !== ee[t.id] && void 0 !== e[t.id] || (ee[t.id] = t, e[t.id] = t, re = Object.values(e), d())
        }, this.getRenderedBadges = function () {
            return ee
        }, this.getBadgesWithLocations = function () {
            return Object.values(ee).map(function (e) {
                var t = e.elementSelector,
                    n = t.matchCssSelector,
                    r = t.selector,
                    o = t.cssSelector,
                    i = t.matchTextRule,
                    a = t.textRule,
                    s = t.htmlTextRule,
                    l = s || JSON.parse(a) || {},
                    c = l.operator,
                    u = l.values,
                    d = {
                        matchCssSelector: n,
                        cssSelector: r || o,
                        matchTextRule: i,
                        textRuleOperator: c,
                        textRuleValues: u
                    },
                    g = (0, $.findElementInWindow)(d, (0, V.getBody)(), !1),
                    f = void 0;
                if (g) {
                    var p = g.getBoundingClientRect(),
                        m = (0, Y.isElementVisible)(g, !0);
                    f = Object.assign({}, e, {
                        rect: p,
                        isVisible: m,
                        isExist: !0
                    })
                } else f = Object.assign({}, e, {
                    rect: {},
                    isVisible: !1,
                    isExist: !1
                });
                return f
            })
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.badgeIframeHelper = void 0;
    var P = function () {
            function e(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }
            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        L = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    t.removeBadgeObserver = f, t.addBadgeObserver = p, t.drawBadges = v, t.removeBadge = y, t.setBadgeObserverForRegisteredIframes = x, t.unsetBadgeObserverForRegisteredIframes = O, t.updateBadgesFromIframe = _;
    var N = n(72),
        B = r(N),
        R = n(4),
        D = n(5),
        M = n(66),
        U = n(3),
        F = n(9),
        V = n(1),
        j = n(12),
        H = n(10),
        q = n(17),
        W = r(q),
        G = n(40),
        K = r(G),
        z = n(6),
        Y = n(0),
        J = n(56),
        X = n(11),
        Q = n(30),
        $ = n(7),
        Z = n(20),
        ee = {},
        te = void 0,
        ne = void 0,
        re = [],
        oe = void 0,
        ie = void 0,
        ae = function (e, t, n, r) {
            var o = R.eventTrackData[D.cacheGet](R.sessionIdParam),
                i = t || new M.Badge(e),
                a = void 0,
                s = B.default.getIsPreview();
            if (!s) {
                var l = e.id;
                if (!l) return void U.logger.log("renderBadge got wrong badge id: " + l);
                if (!(a = B.default.fetchBadges(o).filter(function (e) {
                        return e.badgeSettings.id === l
                    })[0])) return void U.logger.log(new Error("No badge found in store while expecting to get badge id " + l))
            }
            if (r && i.updateTargetData(n, r), i.render(), !s && i.isRendered && !a.wasViewed) {
                a.wasViewed = !0, B.default.storeBadge(o, a);
                try {
                    I(a)
                } catch (e) {
                    U.logger.logInternalError(e, "Error during tracking badge view " + i)
                }
            }
            return i
        },
        se = function (e, t, n) {
            if (!e) return void U.logger.log("update badge was called with undefined " + e);
            n ? e.isRendered ? e.targetData.rect.top === n.rect.top && e.targetData.rect.bottom === n.rect.bottom && e.targetData.rect.left === n.rect.left && e.targetData.rect.right === n.rect.right && e.targetData.rect.height === n.rect.height && e.targetData.rect.width === n.rect.width && e.targetData.isVisible === n.isVisible && e.targetData.pageYOffset === n.pageYOffset || (e.updateTargetData(t, n), e.scheduleUpdatePopper()) : ae(e.badgeAttr, e, t, n) : e.isRendered ? e.scheduleUpdatePopper() : i(e.badgeAttr, e)
        },
        le = function (e) {
            return e.forEach(function (e) {
                return se(e)
            })
        },
        ce = function () {
            var e = a();
            return (0, Y.debounce)(function (e) {
                se(e)
            }, e)
        },
        ue = {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ["style", "class"]
        },
        de = function () {
            var e = a();
            return (0, Y.debounce)(g, e)
        },
        ge = function () {
            function e() {
                o(this, e)
            }
            return L(e, null, [{
                key: "init",
                value: function () {
                    if ((0, V.getConfig)("enableBadge") && !(0, V.isIframe)()) {
                        te = setInterval(E, 1e3 * (0, V.getConfig)("badgeRefreshInterval") * 60);
                        var e = R.eventTrackData[D.cacheGet](R.sessionIdParam),
                            t = B.default.fetchBadges(e);
                        t.length < 1 || ((0, $.addStyleTag)(document.body, ".apt-badge.apt-badge--hidden {\n\t\t\t\tdisplay: none;\n\t\t\t}"), re = t, p(le), (0, F.addDOMReadyListener)(v, t))
                    }
                }
            }, {
                key: "addBadges",
                value: function (e) {
                    try {
                        if (!Array.isArray(e) || e.length < 1) return;
                        h(e), p(le);
                        var t = R.eventTrackData[D.cacheGet](R.sessionIdParam);
                        B.default.storeBadges(t, e), v(e)
                    } catch (e) {
                        U.logger.logInternalError(e)
                    }
                }
            }, {
                key: "removeAllBadges",
                value: function () {
                    var e = R.eventTrackData[D.cacheGet](R.sessionIdParam),
                        t = B.default.fetchBadges(e);
                    if ((0, Y.isNotEmptyArr)(t)) {
                        (0, X.arrayFrom)(t).forEach(function (e) {
                            y(e.badgeSettings.id, t)
                        })
                    }
                    B.default.storeBadges(e, t, !0), B.default.clearAll()
                }
            }]), e
        }();
    t.default = ge;
    var fe = void 0;
    t.badgeIframeHelper = new A
}, function (e, t, n) {
    "use strict";

    function r(e, t, n, r, s) {
        var l = r && r.messageTime || 3e3,
            c = (0, i.getConfig)("framesetMode") ? "html" : "body";
        switch (e) {
            case "warning":
                a.dialog.alert({
                    appendLocation: c,
                    afterOpen: function () {
                        (0, i.getBody)().classList.add("apt-vex"), this.rootEl.classList.add("apt-vex");
                        var e = this;
                        setTimeout(function () {
                            e.close()
                        }, l), (0, o.addEventListener)(this.overlayEl, "click", function (e) {
                            e.stopImmediatePropagation()
                        }), (0, o.addEventListener)(this.overlayEl, "mousedown", function (e) {
                            e.stopImmediatePropagation()
                        }), (0, o.addEventListener)(this.overlayEl, "mouseup", function (e) {
                            e.stopImmediatePropagation()
                        })
                    },
                    afterClose: function () {
                        (0, i.getBody)().classList.remove("apt-vex")
                    },
                    overlayClassName: "apt-wrapper",
                    className: "apt-wrapper vex-theme-default vex-content-warning",
                    contentClassName: "apt-wrapper",
                    closeClassName: "apt-wrapper",
                    unsafeMessage: '<div><div class="message-wrapper"><div class="apt-message-icon warning" ></div><div>' + t + "</div></div></div>"
                });
                break;
            case "success":
                a.dialog.alert({
                    appendLocation: c,
                    afterOpen: function () {
                        (0, i.getBody)().classList.add("apt-vex"), this.rootEl.classList.add("apt-vex");
                        var e = this;
                        setTimeout(function () {
                            e.close()
                        }, l), (0, o.addEventListener)(this.overlayEl, "click", function (e) {
                            e.stopImmediatePropagation()
                        }), (0, o.addEventListener)(this.overlayEl, "mousedown", function (e) {
                            e.stopImmediatePropagation()
                        }), (0, o.addEventListener)(this.overlayEl, "mouseup", function (e) {
                            e.stopImmediatePropagation()
                        })
                    },
                    afterClose: function () {
                        (0, i.getBody)().classList.remove("apt-vex")
                    },
                    overlayClassName: "apt-wrapper",
                    className: "apt-wrapper vex-theme-default vex-content-success",
                    contentClassName: "apt-wrapper",
                    closeClassName: "apt-wrapper",
                    unsafeMessage: '<div><div class="message-wrapper"><div class="apt-message-icon success" ></div><div>' + t + "</div></div></div>"
                });
                break;
            case "error":
                a.dialog.alert({
                    appendLocation: c,
                    afterOpen: function () {
                        (0, i.getBody)().classList.add("apt-vex"), this.rootEl.classList.add("apt-vex");
                        var e = this;
                        r && r.autoHideFalse || setTimeout(function () {
                            e.close(), n && n()
                        }, l), (0, o.addEventListener)(this.overlayEl, "click", function (e) {
                            e.stopImmediatePropagation()
                        }), (0, o.addEventListener)(this.overlayEl, "mousedown", function (e) {
                            e.stopImmediatePropagation()
                        }), (0, o.addEventListener)(this.overlayEl, "mouseup", function (e) {
                            e.stopImmediatePropagation()
                        })
                    },
                    afterClose: function () {
                        (0, i.getBody)().classList.remove("apt-vex")
                    },
                    overlayClassName: "apt-wrapper",
                    className: "apt-wrapper vex-theme-default vex-content-error",
                    contentClassName: "apt-wrapper",
                    callback: function (e) {
                        e && n && n()
                    },
                    closeClassName: "apt-wrapper",
                    unsafeMessage: '<div><div class="message-wrapper"><div class="apt-message-icon alert" ></div><div>' + t + "</div></div></div>"
                });
                break;
            case "confirm":
                var u = "apt-wrapper";
                r && r.contentClass && (u += " " + r.contentClass), a.dialog.buttons.YES.text = r && r.buttonText || "OK", a.dialog.buttons.NO.text = r && r.buttonNoText || "Cancel", a.dialog.confirm({
                    appendLocation: c,
                    afterOpen: function () {
                        (0, i.getBody)().classList.add("apt-vex"), this.rootEl.classList.add("apt-vex"), r && r.showCancel && this.rootEl.classList.add("apt-confirm-show"), this.contentEl.querySelectorAll(".vex-dialog-button").forEach(function (e) {
                            (0, o.addEventListener)(e, "mousedown", function (e) {
                                e.stopImmediatePropagation()
                            }), (0, o.addEventListener)(e, "mouseup", function (e) {
                                e.stopImmediatePropagation()
                            })
                        }), (0, o.addEventListener)(this.overlayEl, "click", function (e) {
                            e.stopImmediatePropagation()
                        }), (0, o.addEventListener)(this.overlayEl, "mousedown", function (e) {
                            e.stopImmediatePropagation()
                        }), (0, o.addEventListener)(this.overlayEl, "mouseup", function (e) {
                            e.stopImmediatePropagation()
                        })
                    },
                    afterClose: function () {
                        (0, i.getBody)().classList.remove("apt-vex")
                    },
                    callback: function (e) {
                        e && "function" == typeof n ? n() : e || "function" != typeof s || s()
                    },
                    overlayClassName: "apt-wrapper",
                    contentClassName: u,
                    closeClassName: "apt-wrapper",
                    unsafeMessage: '<div><div class="message-wrapper"><div class="apt-message-icon alert" src="images/alert.png"></div><div class="apt-message-text">' + t + "</div></div></div>",
                    className: "vex-theme-default vex-content-confirm"
                })
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.showMessage = void 0;
    var o = n(0),
        i = n(1),
        a = n(39);
    a.registerPlugin(n(110)), a.defaultOptions.className = "vex-theme-os", t.showMessage = r
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Cookie = void 0;
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(1),
        a = n(59),
        s = n(58);
    t.Cookie = function () {
        function e() {
            r(this, e)
        }
        return o(e, null, [{
            key: "setCookie",
            value: function (e, t, n, r) {
                (0, i.isIframe)() || ((0, i.getConfig)("localStorageCookie") ? s.LocalStorageCookie.setCookie(e, t, n) : a.NativeCookie.setCookie(e, t, n, r))
            }
        }, {
            key: "getCookie",
            value: function (e, t) {
                return (0, i.getConfig)("localStorageCookie") ? s.LocalStorageCookie.getCookie(e) : a.NativeCookie.getCookie(e, t)
            }
        }, {
            key: "getAllCookieVal",
            value: function (e) {
                return (0, i.getConfig)("localStorageCookie") ? s.LocalStorageCookie.getAllCookieVal(e) : a.NativeCookie.getAllCookieVal(e)
            }
        }, {
            key: "deleteCookie",
            value: function (e, t) {
                (0, i.getConfig)("localStorageCookie") ? s.LocalStorageCookie.deleteCookie(e): a.NativeCookie.deleteCookie(e, t)
            }
        }, {
            key: "getCookiesRaw",
            value: function () {
                return (0, i.getConfig)("localStorageCookie") ? s.LocalStorageCookie.getCookiesRaw() : a.NativeCookie.getCookiesRaw()
            }
        }]), e
    }()
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        return e.length < t.minCommentLength ? {
            valid: !1,
            message: t.minCharsValidationText ? t.minCharsValidationText.replace("%minCommentLength%", t.minCommentLength) : "Comment should be minimum " + t.minCommentLength + " characters"
        } : {
            valid: !0,
            message: ""
        }
    }

    function o(e, t) {
        return t.isCommentMandatory && !e ? {
            valid: !1,
            message: t.mandatoryValidationText || "Please insert your comment"
        } : {
            valid: !0,
            message: ""
        }
    }

    function i(e, t) {
        return e.length > t.maxCommentLength ? {
            valid: !1,
            message: t.maxCharsValidationText ? t.maxCharsValidationText.replace("%maxCommentLength%", t.maxCommentLength) : "Comment can be at most " + t.maxCommentLength + " characters"
        } : {
            valid: !0,
            message: ""
        }
    }

    function a(e, t, n) {
        var a = t.value && t.value.trim(),
            s = o(a, e),
            l = r(a, e),
            c = i(a, e);
        return n.innerText = s.message || l.message || c.message, s.valid && l.valid && c.valid ? (t.classList.remove("error"), n.style.display = "none", !0) : (t.classList.add("error"), n.style.display = "inline-block", !1)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateComment = a
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = Array.isArray(n) ? n : [],
            o = !1,
            i = r.every(function (e) {
                return t.findIndex(function (t) {
                    return e === t
                }) > -1
            }),
            a = t.length === r.length && i;
        switch (e) {
            case f.IS:
                o = a;
                break;
            case f.IS_NOT:
                o = !a;
                break;
            case f.IN:
                o = i;
                break;
            case f.NOT_IN:
                o = !i;
                break;
            default:
                o = !0
        }
        return o
    }

    function o(e, t, n, r) {
        var o = !1;
        switch (e) {
            case p.EQUALS:
                o = r === t;
                break;
            case p.GREATER_THAN:
                o = r > t;
                break;
            case p.SMALLER_THAN:
                o = r < t;
                break;
            case p.SMALLER_THAN_EQUALS:
                o = r <= t;
                break;
            case p.GREATER_THAN_EQUALS:
                o = r >= t;
                break;
            case p.BETWEEN:
                o = r >= t && r <= n;
                break;
            default:
                o = !1
        }
        return o
    }

    function i(e, t, n, i) {
        var a = !1;
        return i && ("multiValueSelector" === e ? a = r(t, n, i) : "number" === e && (a = o(t, Number(n[0]), Number(n[1]), Number(i[0])))), a
    }

    function a(e, t) {
        var n = e.stepConditionSet,
            r = e.defaultConditionAction,
            o = void 0;
        return Object.values(n).sort(function (e, t) {
            return e.conditionIndex - t.conditionIndex
        }).forEach(function (e) {
            var n = e.rules.reduce(function (e, n) {
                    return e[n.ruleGroupIndex] = t(n), e
                }, {}),
                r = (0, d.default)(e.logicalExpression, n);
            !o && r && (o = e.action)
        }), o || (o = r), o
    }

    function s(e, t) {
        return a(e, function (e) {
            return i(e.type, e.operator, e.value, t[e.id])
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setEngagementSessionId = t.getEngagementSessionId = void 0, t.evaluateSurveyAnswers = i, t.evaluateStepConditionFilter = a, t.evaluateStepConditionFilterForSurvey = s;
    var l = n(4),
        c = n(23),
        u = n(139),
        d = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(u),
        g = l.windowRef.sessionStorage,
        f = {
            IS: "is",
            IN: "in",
            NOT_IN: "notIn",
            IS_NOT: "isNot"
        },
        p = {
            SMALLER_THAN: "smallerThan",
            GREATER_THAN: "greaterThan",
            SMALLER_THAN_EQUALS: "smallerThanEquals",
            GREATER_THAN_EQUALS: "greaterThanEquals",
            EQUALS: "equals",
            BETWEEN: "between"
        };
    t.getEngagementSessionId = function () {
        var e = g.getItem("apt.engagementSessionId"),
            t = c.UserData.getSessionId();
        return e || t
    }, t.setEngagementSessionId = function (e) {
        g.setItem("apt.engagementSessionId", e)
    }
}, function (e, t, n) {
    "use strict";
    var r, o, i, a, a, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function (n) {
        if ("object" === s(t) && void 0 !== e) e.exports = n();
        else {
            o = [], r = n, void 0 !== (i = "function" == typeof r ? r.apply(t, o) : r) && (e.exports = i)
        }
    }(function () {
        return function e(t, n, r) {
            function o(s, l) {
                if (!n[s]) {
                    if (!t[s]) {
                        var c = "function" == typeof a && a;
                        if (!l && c) return a(s, !0);
                        if (i) return i(s, !0);
                        var u = new Error("Cannot find module '" + s + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var d = n[s] = {
                        exports: {}
                    };
                    t[s][0].call(d.exports, function (e) {
                        var n = t[s][1][e];
                        return o(n || e)
                    }, d, d.exports, e, t, n, r)
                }
                return n[s].exports
            }
            for (var i = "function" == typeof a && a, s = 0; s < r.length; s++) o(r[s]);
            return o
        }({
            1: [function (e, t, n) {
                /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
                "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? function () {
                    var e = document.createElement("_");
                    if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
                        var t = function (e) {
                            var t = DOMTokenList.prototype[e];
                            DOMTokenList.prototype[e] = function (e) {
                                var n, r = arguments.length;
                                for (n = 0; n < r; n++) e = arguments[n], t.call(this, e)
                            }
                        };
                        t("add"), t("remove")
                    }
                    if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
                        var n = DOMTokenList.prototype.toggle;
                        DOMTokenList.prototype.toggle = function (e, t) {
                            return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e)
                        }
                    }
                    e = null
                }() : function (e) {
                    if ("Element" in e) {
                        var t = e.Element.prototype,
                            n = Object,
                            r = String.prototype.trim || function () {
                                return this.replace(/^\s+|\s+$/g, "")
                            },
                            o = Array.prototype.indexOf || function (e) {
                                for (var t = 0, n = this.length; t < n; t++)
                                    if (t in this && this[t] === e) return t;
                                return -1
                            },
                            i = function (e, t) {
                                this.name = e, this.code = DOMException[e], this.message = t
                            },
                            a = function (e, t) {
                                if ("" === t) throw new i("SYNTAX_ERR", "An invalid or illegal string was specified");
                                if (/\s/.test(t)) throw new i("INVALID_CHARACTER_ERR", "String contains an invalid character");
                                return o.call(e, t)
                            },
                            s = function (e) {
                                for (var t = r.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], o = 0, i = n.length; o < i; o++) this.push(n[o]);
                                this._updateClassName = function () {
                                    e.setAttribute("class", this.toString())
                                }
                            },
                            l = s.prototype = [],
                            c = function () {
                                return new s(this)
                            };
                        if (i.prototype = Error.prototype, l.item = function (e) {
                                return this[e] || null
                            }, l.contains = function (e) {
                                return e += "", -1 !== a(this, e)
                            }, l.add = function () {
                                var e, t = arguments,
                                    n = 0,
                                    r = t.length,
                                    o = !1;
                                do {
                                    e = t[n] + "", -1 === a(this, e) && (this.push(e), o = !0)
                                } while (++n < r);
                                o && this._updateClassName()
                            }, l.remove = function () {
                                var e, t, n = arguments,
                                    r = 0,
                                    o = n.length,
                                    i = !1;
                                do {
                                    for (e = n[r] + "", t = a(this, e); - 1 !== t;) this.splice(t, 1), i = !0, t = a(this, e)
                                } while (++r < o);
                                i && this._updateClassName()
                            }, l.toggle = function (e, t) {
                                e += "";
                                var n = this.contains(e),
                                    r = n ? !0 !== t && "remove" : !1 !== t && "add";
                                return r && this[r](e), !0 === t || !1 === t ? t : !n
                            }, l.toString = function () {
                                return this.join(" ")
                            }, n.defineProperty) {
                            var u = {
                                get: c,
                                enumerable: !0,
                                configurable: !0
                            };
                            try {
                                n.defineProperty(t, "classList", u)
                            } catch (e) {
                                -2146823252 === e.number && (u.enumerable = !1, n.defineProperty(t, "classList", u))
                            }
                        } else n.prototype.__defineGetter__ && t.__defineGetter__("classList", c)
                    }
                }(window.self))
            }, {}],
            2: [function (e, t, n) {
                function r(e, t) {
                    if ("string" != typeof e) throw new TypeError("String expected");
                    t || (t = document);
                    var n = /<([\w:]+)/.exec(e);
                    if (!n) return t.createTextNode(e);
                    e = e.replace(/^\s+|\s+$/g, "");
                    var r = n[1];
                    if ("body" == r) {
                        var o = t.createElement("html");
                        return o.innerHTML = e, o.removeChild(o.lastChild)
                    }
                    var i = a[r] || a._default,
                        s = i[0],
                        l = i[1],
                        c = i[2],
                        o = t.createElement("div");
                    for (o.innerHTML = l + e + c; s--;) o = o.lastChild;
                    if (o.firstChild == o.lastChild) return o.removeChild(o.firstChild);
                    for (var u = t.createDocumentFragment(); o.firstChild;) u.appendChild(o.removeChild(o.firstChild));
                    return u
                }
                t.exports = r;
                var o, i = !1;
                "undefined" != typeof document && (o = document.createElement("div"), o.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>', i = !o.getElementsByTagName("link").length, o = void 0);
                var a = {
                    legend: [1, "<fieldset>", "</fieldset>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    _default: i ? [1, "X<div>", "</div>"] : [0, "", ""]
                };
                a.td = a.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], a.option = a.optgroup = [1, '<select multiple="multiple">', "</select>"], a.thead = a.tbody = a.colgroup = a.caption = a.tfoot = [1, "<table>", "</table>"], a.polyline = a.ellipse = a.polygon = a.circle = a.text = a.line = a.path = a.rect = a.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"]
            }, {}],
            3: [function (e, t, n) {
                function r(e, t) {
                    if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
                    for (var n = Object(e), r = 1; r < arguments.length; r++) {
                        var o = arguments[r];
                        if (void 0 !== o && null !== o)
                            for (var i = Object.keys(Object(o)), a = 0, s = i.length; a < s; a++) {
                                var l = i[a],
                                    c = Object.getOwnPropertyDescriptor(o, l);
                                void 0 !== c && c.enumerable && (n[l] = o[l])
                            }
                    }
                    return n
                }

                function o() {
                    Object.assign || Object.defineProperty(Object, "assign", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: r
                    })
                }
                t.exports = {
                    assign: r,
                    polyfill: o
                }
            }, {}],
            4: [function (e, t, n) {
                e("classlist-polyfill"), e("es6-object-assign").polyfill();
                var r = e("domify"),
                    o = function (e) {
                        if (void 0 !== e) {
                            var t = document.createElement("div");
                            return t.appendChild(document.createTextNode(e)), t.innerHTML
                        }
                        return ""
                    },
                    i = function (e, t) {
                        if ("string" == typeof t && 0 !== t.length)
                            for (var n = t.split(" "), r = 0; r < n.length; r++) {
                                var o = n[r];
                                o.length && e.classList.add(o)
                            }
                    },
                    a = function () {
                        var e = document.createElement("div"),
                            t = {
                                WebkitAnimation: "webkitAnimationEnd",
                                MozAnimation: "animationend",
                                OAnimation: "oanimationend",
                                msAnimation: "MSAnimationEnd",
                                animation: "animationend"
                            };
                        for (var n in t)
                            if (void 0 !== e.style[n]) return t[n];
                        return !1
                    }(),
                    s = {
                        vex: "vex",
                        content: "vex-content",
                        overlay: "vex-overlay",
                        close: "vex-close",
                        closing: "vex-closing",
                        open: "vex-open"
                    },
                    l = {},
                    c = 1,
                    u = !1,
                    d = {
                        open: function (e) {
                            var t = function (e) {
                                console.warn('The "' + e + '" property is deprecated in vex 3. Use CSS classes and the appropriate "ClassName" options, instead.'), console.warn("See http://github.hubspot.com/vex/api/advanced/#options")
                            };
                            e.css && t("css"), e.overlayCSS && t("overlayCSS"), e.contentCSS && t("contentCSS"), e.closeCSS && t("closeCSS");
                            var n = {};
                            n.id = c++, l[n.id] = n, n.isOpen = !0, n.close = function () {
                                function e(e) {
                                    return "none" !== n.getPropertyValue(e + "animation-name") && "0s" !== n.getPropertyValue(e + "animation-duration")
                                }
                                if (!this.isOpen) return !0;
                                var t = this.options;
                                if (u && !t.escapeButtonCloses) return !1;
                                if (!1 === function () {
                                        return !t.beforeClose || t.beforeClose.call(this)
                                    }.bind(this)()) return !1;
                                this.isOpen = !1;
                                var n = window.getComputedStyle(this.contentEl),
                                    r = e("") || e("-webkit-") || e("-moz-") || e("-o-"),
                                    o = function e() {
                                        this.rootEl.parentNode && (this.rootEl.removeEventListener(a, e), delete l[this.id], this.rootEl.parentNode.removeChild(this.rootEl), t.afterClose && t.afterClose.call(this), 0 === Object.keys(l).length && document.body.classList.remove(s.open))
                                    }.bind(this);
                                return a && r ? (this.rootEl.addEventListener(a, o), this.rootEl.classList.add(s.closing)) : o(), !0
                            }, "string" == typeof e && (e = {
                                content: e
                            }), e.unsafeContent && !e.content ? e.content = e.unsafeContent : e.content && (e.content = o(e.content));
                            var g = n.options = Object.assign({}, d.defaultOptions, e),
                                f = n.rootEl = document.createElement("div");
                            f.classList.add(s.vex), i(f, g.className);
                            var p = n.overlayEl = document.createElement("div");
                            p.classList.add(s.overlay), i(p, g.overlayClassName), g.overlayClosesOnClick && p.addEventListener("click", function (e) {
                                e.target === p && n.close()
                            }), f.appendChild(p);
                            var m = n.contentEl = document.createElement("div");
                            if (m.classList.add(s.content), i(m, g.contentClassName), m.appendChild(g.content instanceof window.Node ? g.content : r(g.content)), f.appendChild(m), g.showCloseButton) {
                                var v = n.closeEl = document.createElement("div");
                                v.classList.add(s.close), i(v, g.closeClassName), v.addEventListener("click", n.close.bind(n)), m.appendChild(v)
                            }
                            return document.querySelector(g.appendLocation).appendChild(f), g.afterOpen && g.afterOpen.call(n), document.body.classList.add(s.open), n
                        },
                        close: function (e) {
                            var t;
                            if (e.id) t = e.id;
                            else {
                                if ("string" != typeof e) throw new TypeError("close requires a vex object or id string");
                                t = e
                            }
                            return !!l[t] && l[t].close()
                        },
                        closeTop: function () {
                            var e = Object.keys(l);
                            return !!e.length && l[e[e.length - 1]].close()
                        },
                        closeAll: function () {
                            for (var e in l) this.close(e);
                            return !0
                        },
                        getAll: function () {
                            return l
                        },
                        getById: function (e) {
                            return l[e]
                        }
                    };
                window.addEventListener("keyup", function (e) {
                    27 === e.keyCode && (u = !0, d.closeTop(), u = !1)
                }), window.addEventListener("popstate", function () {
                    d.defaultOptions.closeAllOnPopState && d.closeAll()
                }), d.defaultOptions = {
                    content: "",
                    showCloseButton: !0,
                    escapeButtonCloses: !0,
                    overlayClosesOnClick: !0,
                    appendLocation: "body",
                    className: "",
                    overlayClassName: "",
                    contentClassName: "",
                    closeClassName: "",
                    closeAllOnPopState: !0
                }, Object.defineProperty(d, "_escapeHtml", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !1,
                    value: o
                }), d.registerPlugin = function (e, t) {
                    var n = e(d),
                        r = t || n.name;
                    if (d[r]) throw new Error("Plugin " + t + " is already registered.");
                    d[r] = n
                }, t.exports = d
            }, {
                "classlist-polyfill": 1,
                domify: 2,
                "es6-object-assign": 3
            }]
        }, {}, [4])(4)
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        o = n(13),
        i = n(6),
        a = n(0),
        s = n(16),
        l = new function () {
            var e = window.top;
            if ((0, r.isIframe)()) {
                var t = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "register");
                (0, a.retryFunction)(3, 3e3, function () {
                    (0, o.postRequest)(t, e, !0)
                }), (0, a.retryFunction)(3, 3e3, function () {
                    (0, o.postRequest)(t, window.parent, !0)
                }), this.associateParent = function (e) {
                    var t = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "associateParent", null, e);
                    (0, o.postRequest)(t, window.parent, !0)
                }, this.guideElementSelected = function (t, n) {
                    var r = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "guide", {
                        type: "elementSelected",
                        cssSelector: t,
                        elementText: n
                    });
                    (0, o.postRequest)(r, e, !0)
                }, this.guideElementSelectedForEditorV2 = function (t, n) {
                    var r = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "guide", {
                        type: "elementSelectedForEditorV2",
                        cssSelector: t,
                        elementText: n
                    });
                    (0, o.postRequest)(r, e, !0)
                }, this.getGuide = function () {
                    var t = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "guide", {
                        type: "get"
                    });
                    (0, o.postRequest)(t, e, !0)
                }, this.guideElementNotVisible = function () {}, this.selectElementInProductMapper = function (t) {
                    (0, o.postRequest)(i.IframeRequest.getIframeRequest({
                        aptrinsicEventType: "element_selector_document_click",
                        content: {
                            selector: t
                        },
                        aptrinsicIframeId: (0, o.getIframeId)()
                    }), e)
                }, this.showNextStep = function (t, n) {
                    var r = i.IframeRequest.getIframeRequest({
                        aptrinsicEventType: "apt_msg_show_next_step",
                        content: {
                            stepId: t,
                            stepSelector: n
                        },
                        aptrinsicIframeId: (0, o.getIframeId)()
                    });
                    (0, o.postRequest)(r, e, !0)
                }, this.updateContent = function (t) {
                    var n = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "guide", {
                        type: "updateLastContent",
                        content: t
                    });
                    (0, o.postRequest)(n, e, !0)
                }, this.setSelectorState = function (t) {
                    var n = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "guide", {
                        type: "updateSelectorState",
                        state: t
                    });
                    (0, o.postRequest)(n, e, !0)
                }, this.selectorIconClicked = function (t, n) {
                    var r = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "guide", {
                        type: "iconClicked",
                        state: t,
                        extraData: n
                    });
                    (0, o.postRequest)(r, e, !0)
                }, this.broadcastElementRect = function (e, t) {
                    var n = Object.assign({}, e),
                        r = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), window.parent === window.top ? "apt-msg-element-rect-parent" : "apt-msg-element-rect", {
                            elementRect: n
                        }, t);
                    (0, o.postRequest)(r, window.parent, !0)
                }, this.broadcastUpBadgesLocation = function (e, t) {
                    var n = window.parent === window.top ? "apt_msg_get_badges_locations_response" : "apt_msg_get_badges_locations_parent_iframe",
                        r = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), n, {
                            prevIframeId: (0, o.getIframeId)(),
                            badges: e
                        }, t);
                    (0, o.postRequest)(r, window.parent, !0)
                }, this.broadcastBadgesStatuses = function (t) {
                    var n = s.UUIDGenerator.generateV4Id(),
                        r = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "apt_msg_badge_post_status", {
                            badges: t
                        }, n);
                    (0, o.postRequest)(r, e, !0)
                }, this.sendElementResponse = function (t, n, r, a) {
                    var s = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "elementExistResult", {
                        exist: !!t,
                        isVisible: n,
                        count: r
                    }, a);
                    (0, o.postRequest)(s, e, !0)
                }, this.guideLinkedElementClicked = function (t) {
                    var n = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "apt-msg-element-clicked", {}, t);
                    (0, o.postRequest)(n, e, !0)
                }, this.guideExternalElementClicked = function (t) {
                    var n = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "apt-msg-external-element-clicked", {}, t);
                    (0, o.postRequest)(n, e, !0)
                }, this.isElementVisibleResponse = function (t, n) {
                    var r = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "guide", {
                        type: "isElementVisibleResponse",
                        isVisible: n
                    }, t);
                    (0, o.postRequest)(r, e, !0)
                }, this.getMapperState = function (e) {
                    (0, o.iframeSubscribeCallback)("guide", {
                        type: "getState"
                    }, e)
                }, this.getMapperStateForEditorV2 = function (e) {
                    (0, o.iframeSubscribeCallback)("guide", {
                        type: "getMapperStateForEditorV2"
                    }, e)
                }, this.getAlternateSelectorResponse = function (t, n) {
                    var r = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "guide", {
                        type: "alternateSelectorResponse",
                        alternateSelector: n
                    }, t);
                    (0, o.postRequest)(r, e, !0)
                }, this.postDifferentSelectorResponse = function (t, n) {
                    var r = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "guide", {
                        type: "differentSelectorResponse",
                        selectors: n
                    }, t);
                    (0, o.postRequest)(r, e, !0)
                }
            }
        };
    t.default = l
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = {
            appendTo: (0, l.getBody)(),
            zIndex: 2147483647,
            theme: "px-tooltip"
        };
        return (0, s.default)(e, Object.assign(n, t))
    }

    function o(e) {
        return e.map(function (e) {
            var t = i(e, 2);
            return r(t[0], t[1])
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function e(e, t) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
        return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.addTooltipToElement = r, t.addTooltipToElements = o;
    var a = n(68),
        s = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(a),
        l = n(1)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i() {
        j.internalEventListener.dispatchEvent(Q.GLOBAL_CONTEXT_CHANGED, (0, $.getGlobalContext)())
    }

    function a() {
        (0, M.getIsNewAPI)() ? (0, q.removeWidget)() : (0, W.removeWidget)()
    }

    function s(e) {
        try {
            var t = h.documentRef.createElement("img");
            t.width = 1, t.hight = 1, t.src = e
        } catch (e) {
            T.logger.logInternalError(e)
        }
    }

    function l(e) {
        var t = {};
        if ((0, x.isObject)(e)) {
            var n = {};
            for (var r in e) e.hasOwnProperty(r) && (-1 == ie.indexOf(r) ? n[r] = e[r] : t[r] = e[r]);
            t.customAttributes = n
        }
        return t
    }

    function c() {
        (0, y.isIframe)() || (m.UserData.ensureUserData(), h.eventTrackData[b.cacheSet](h.userIdParameter, m.UserData.getUserId()), h.eventTrackData[b.cacheSet](h.sessionIdParam, m.UserData.getSessionId()), h.eventTrackData[b.cacheSet]("ai", m.UserData.getAptrinisId()), h.eventTrackData[b.cacheSet]("vt", m.UserData.getUserType()))
    }

    function u(e, t, n) {
        var r = {};
        r[h.productIdParameter] = e[h.productIdParameter], r[le] = e[le], delete e.ep;
        var o = (0, x.convert2Parameters)((0, x.addParameters)(r, [])),
            i = y.commandEndPointV2 + "?" + o,
            a = {};
        (0, x.isObjectEmpty)(t) || (a.ep = t), E.AjaxUtil.postData(i, Object.assign({}, e, a), null, n)
    }

    function d(e) {
        try {
            m.UserData.changeUserType(m.UserData.userType());
            m.UserData.setAptrinsicId(e.ai) ? de.trackEvent("sessionInitialized", null, function () {
                (0, P.identifyFinished)()
            }) : (0, P.identifyFinished)()
        } catch (e) {
            T.logger.logInternalError(e, "failed to run identify call back for response")
        }
    }

    function g(e, t) {
        if (e) {
            if (t && (0, C.setEngagementSessionId)(t), !(0, Y.isExcluded)() && !A.default.isEditorMode() && (0, y.getConfig)("enableBadge")) {
                var n = e.badgeData;
                try {
                    n && F.default.addBadges(n.badges)
                } catch (e) {
                    T.logger.logInternalError(e)
                }
            }
            var r = e.engagement,
                o = Array.isArray(r);
            (o && r.length > 0 || !o && r) && (se = !0, ne = !1);
            try {
                I.EngagementDrawer.draw(r)
            } catch (e) {
                T.logger.logInternalError(e)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.identifyCallback = t.startEngagementBatch = t.externalApi = t.api = void 0;
    var f = function () {
            function e(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }
            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        p = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        m = n(23),
        v = n(90),
        h = n(4),
        y = n(1),
        b = n(5),
        E = n(12),
        I = n(44),
        C = n(38),
        T = n(3),
        w = n(9),
        S = n(97),
        k = r(S),
        x = n(0),
        O = n(132),
        _ = n(14),
        A = r(_),
        P = n(24),
        L = n(43),
        N = r(L),
        B = n(87),
        R = r(B),
        D = n(11),
        M = n(29),
        U = n(34),
        F = r(U),
        V = n(91),
        j = n(10),
        H = n(26),
        q = n(48),
        W = n(70),
        G = n(53),
        K = n(99),
        z = n(65),
        Y = n(21),
        J = n(57),
        X = n(18),
        Q = n(8),
        $ = n(20),
        Z = n(36),
        ee = 0,
        te = 0,
        ne = !1,
        re = void 0,
        oe = ["click", "linkClick"],
        ie = ["id", "name", "trackedSubscriptionId", "industry", "numberOfEmployees", "sicCode", "website", "naicsCode", "plan", "countryCode", "countryName", "stateCode", "stateName", "city", "street", "continent", "postalCode", "regionName", "timeZone", "latitude", "longitude", "sfdcId", "parentGroupId"],
        ae = ["linkClick", "LINK_CLICK", "ENGAGEMENT_DRAWN", "engagementDrawn", "engagementView", "engagementClosed", "engagementCompleted", "engagementViewedStep", "engagementPostRender", "surveyResponded", "SURVEY_CLOSED", "surveyClosed", "kcSearch", "articleView", "kcOpened", "kcClosed", "engagementLinkClick", "engagementResize", "customButtonClick", "CUSTOM_BUTTON_CLICK", "kcTriggered"],
        se = !1,
        le = "et",
        ce = function e(t, n, r, o) {
            var i = (o || 0) + 1;
            try {
                if (!(0, y.getConfig)("enableTag")) return;
                if (se) return;
                n || (se = !1);
                var a = (new Date).getTime(),
                    s = (0, y.getConfig)("maxEngagementCalls");
                if (t > s) return T.logger.log("sent " + s + " engagement calls, not calling again"), ne = !1, re = void 0, void j.internalEventListener.dispatchEvent("ENGAGEMENT_FETCH");
                var l = (0, y.getConfig)("engagementCallDelay");
                if (a - te < l || a - ee < l || (0, P.isInIdentify)()) {
                    var c = 0 === ee ? l : l - (a - ee);
                    return void setTimeout(function () {
                        e(t, !0, r, i)
                    }, c)
                }
                ge.get("engagement", r), ee = a, e(t + 1, !0, r, i)
            } catch (e) {
                T.logger.logInternalError(e)
            }
        },
        ue = function e(t) {
            try {
                if (!(0, y.getConfig)("enableTag") || (0, H.hasLiveEngagement)()) return;
                var n = !(0, x.isObjectEmpty)(t) && t.s || void 0,
                    r = (0, y.getConfig)("crossProductEngagement") && !!h.windowRef.sessionStorage.getItem("apt.localCache");
                if (!(0, y.featureEnabled)("engagementPull") || ne || r) return n && re !== n && j.internalEventListener.addListener("ENGAGEMENT_FETCH", e, void 0, !1, !0), void T.logger.log("we have another engagement batch already running");
                ne = !0, n && (re = n), se = !1, ce(1, null, t, 0)
            } catch (e) {
                T.logger.logInternalError(e)
            }
        },
        de = t.api = function () {
            function e() {
                o(this, e)
            }
            return p(e, null, [{
                key: "trackEvent",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
                        o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0,
                        a = {};
                    try {
                        if (!(0, y.getConfig)("enableTag")) return;
                        if ((0, X.getChannel)(h.eventTrackData[b.cacheGet](h.productIdParameter)) == Q.DESKTOP_CHANNEL) return;
                        if ("identify" !== e && (0, Y.isExcluded)() || A.default.isEditorMode()) return;
                        var s = "sessionInitialized" !== e && !(0, y.isIframe)();
                        if (oe.indexOf(e) > -1 && R.default.try2Match(), o && c(), "signup" === e && arguments.length < 2) throw new Error("sign up event must contain event properties");
                        !(0, y.isIframe)() && Object.assign(a, h.eventTrackData[b.cacheGetAll]()), (0, y.isIframe)() || 0 !== a[h.aptrinsicIdParam].indexOf("AP-") || a[h.aptrinsicIdParam] === a[h.userIdParameter] || T.logger.logInternalError(new Error("visitor id does not match aptrinsic id for command"), "current cookies: " + Z.Cookie.getCookiesRaw());
                        var l = location.protocol + "//",
                            d = location,
                            g = d.host,
                            p = location.pathname,
                            v = location.search,
                            I = h.documentRef.title,
                            C = location.hash,
                            S = h.documentRef.referrer;
                        if ("pageview" === e && t) {
                            if (t.url) {
                                var k = (0, w.url2Location)(t.url);
                                l = k.protocol, g = k.host, p = k.pathname, v = k.search, C = k.hash
                            }
                            I = t.title || I, S = t.referrer || S, p = t.path || p, !(0, y.isIframe)() && (t = void 0)
                        }
                        var O = void 0,
                            _ = (0, Y.maskUrl)(l, g, p, v, C, S, I),
                            P = f(_, 7);
                        l = P[0], g = P[1], p = P[2], v = P[3], C = P[4], O = P[5], I = P[6], Object.assign(a, {
                            et: e,
                            rf: O,
                            sc: l,
                            ho: g,
                            pa: decodeURIComponent(p),
                            q: decodeURIComponent(v),
                            ha: decodeURIComponent(C),
                            sch: (0, w.getPageHeight)(),
                            scw: (0, w.getPageWidth)(),
                            pt: I
                        }), r && Object.assign(a, {
                            cet: r
                        });
                        var L = (0, $.getGlobalContext)();
                        if ((L || i) && (t || (t = {})), a = (0, V.addFullStoryInfo)(a), (0, x.isObject)(t) && !(0, y.isIframe)()) {
                            "feature" == e ? t = t.featureMatches ? {
                                fmf: t.featureMatches
                            } : {
                                fmf: [{
                                    id: t.id,
                                    femr: !0
                                }]
                            } : "custom" === e && (t = {
                                epr: t
                            });
                            var B = {};
                            i && Object.assign(B, i), L && Object.assign(B, L), !(0, x.isObjectEmpty)(B) && Object.assign(t, {
                                gco: B
                            }), Object.assign(a, {
                                ep: (0, D.jsonStringify)(t)
                            })
                        }
                        if (s && (te = (new Date).getTime()), (0, y.isIframe)()) N.default.track(e, t, r, L);
                        else if ((0, x.addCacheBuster)(a), (0, y.getConfig)("usePOST")) u(a, t, n);
                        else {
                            var M = y.commandEndpoint + "?" + (0, x.convert2Parameters)((0, x.addParameters)(a, [])),
                                U = "identify" === a.et ? (0, y.getConfig)("requestTimeoutCritical") : void 0;
                            M.length <= 2083 ? E.AjaxUtil.getData(M, n, void 0, void 0, void 0, void 0, U) : (delete a.ep, M = y.commandEndpoint + "?" + (0, x.convert2Parameters)((0, x.addParameters)(a, [])), E.AjaxUtil.postData(M, t, null, n, void 0, void 0, void 0, U))
                        }
                        s && ue({
                            s: m.UserData.getSessionId()
                        }), j.internalEventListener.dispatchEvent(e)
                    } catch (t) {
                        T.logger.logInternalError(t, "track: " + e + ":" + a)
                    }
                }
            }, {
                key: "feedback",
                value: function (e) {
                    try {
                        c();
                        var t = Object.assign({}, h.eventTrackData[b.cacheGetAll]());
                        Object.assign(t, (0, Y.getWebContext)()), t.et = "feedback", !(0, x.isBlank)(e.category) && (t.category = e.category), !(0, x.isBlank)(e.subject) && (t.subject = e.subject), !(0, x.isBlank)(e.description) && (t.description = e.description), (0, x.isNotEmptyArr)(e.labels) && (t.labels = (0, D.arrayFrom)(e.labels, function (e) {
                            return e
                        })), (0, x.addCacheBuster)(t);
                        var n = y.serverEndpoint + "/feedback?" + h.productIdParameter + "=" + h.eventTrackData[b.cacheGet](h.productIdParameter);
                        (0, x.isBlank)(e.kcId) || (n += "&kcid=" + e.kcId), E.AjaxUtil.postData(n, t, null, null, null, !0)
                    } catch (t) {
                        T.logger.logInternalError(t, "failed to send feedback " + JSON.stringify(e))
                    }
                }
            }]), e
        }(),
        ge = t.externalApi = function () {
            function e() {
                o(this, e)
            }
            return p(e, null, [{
                key: "track",
                value: function (e, t) {
                    try {
                        if (!(0, y.getConfig)("enableTag")) return;
                        var n = "";
                        if (!e || !(0, x.isString)(e) || "" === e.trim()) return void T.logger.logInternalError(new Error("cannot send custom event without event name: " + e + ", properties: " + JSON.stringify(t)));
                        "feature" !== e && (n = e, e = "custom"), (0, x.isObject)(t) && Object.entries(t).forEach(function (e) {
                            var n = f(e, 2),
                                r = n[0],
                                o = n[1];
                            (0, x.isString)(o) && o && o.length > 1024 ? t[r] = o.substr(0, 1024) : (0, x.isObject)(o) && JSON.stringify(o).length > 1024 && (t[r] = JSON.stringify(o).substr(0, 1024))
                        }), P.internalApt.call(null, e, t, null, n)
                    } catch (n) {
                        T.logger.logInternalError(n, "custom event track: " + e + ", properties: " + t)
                    }
                }
            }, {
                key: "get",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        if (!(0, y.getConfig)("enableTag")) return;
                        if ((0, Y.isExcluded)() || A.default.isEditorMode()) return;
                        var n = null,
                            r = void 0,
                            o = void 0,
                            i = {};
                        switch (Object.assign(i, h.eventTrackData[b.cacheGetAll](), t || {}), i = (0, V.addFullStoryInfo)(i), e) {
                            case "engagement":
                                c(), n = y.getAllInAppEndpoint;
                                var a = (0, x.getUrlParts)(),
                                    s = f(a, 4),
                                    l = s[0],
                                    u = s[1],
                                    d = s[2],
                                    p = s[3],
                                    m = (0, Y.maskUrl)(location.protocol + "//", l, u, d, p, null, null),
                                    v = f(m, 5);
                                o = v[0], l = v[1], u = v[2], d = v[3], p = v[4], Object.assign(i, {
                                    sc: o,
                                    ho: l,
                                    pa: decodeURIComponent(u),
                                    q: decodeURIComponent(d),
                                    ha: decodeURIComponent(p)
                                }), i.u = "" + l + i.pa + i.q + i.ha;
                                var I = (0, $.getGlobalContext)();
                                I && Object.assign(i, {
                                    gcx: JSON.stringify(I)
                                });
                                var C = i.s;
                                r = function (e) {
                                    g(e, C)
                                };
                                break;
                            default:
                                return
                        }(0, x.addCacheBuster)(i), n += "?" + (0, x.convert2Parameters)((0, x.addParameters)(i, [])), E.AjaxUtil.getData(n, function (e) {
                            try {
                                r.call(this, e)
                            } catch (e) {
                                T.logger.logInternalError(e)
                            }
                        })
                    } catch (e) {
                        T.logger.logInternalError(e)
                    }
                }
            }, {
                key: "identify",
                value: function (t, n, r) {
                    try {
                        if (!(0, y.getConfig)("enableTag")) return;
                        if (!(0, y.featureEnabled)("identify")) return;
                        if ((0, x.isObject)(r)) {
                            var o = new O.IntegrationMapper(t, n, r);
                            if (o.mapData() && (t = o.getUserObj(), n = o.getAccountObj()), o.isSegmentGroupCall()) return void e._waitForUserIdentify(t, n)
                        }
                        var i = {};
                        if ((0, x.isBlank)(t.id && t.id.toString())) throw new Error("cannot identify without user id. Current user data: " + JSON.stringify(t));
                        i = {}, i.usf = (0, v.copyUserFields)(t, n), (0, x.isObject)(n) && (i.acf = l(n)), (0, P.internalApt)("identify", i, d), (0, P.identifyStart)()
                    } catch (e) {
                        T.logger.logInternalError(e)
                    }
                }
            }, {
                key: "initWithExternalState",
                value: function (t, n) {
                    m.UserData.setAptrinsicId(n), m.UserData.setSessionId(t), e.get("engagement")
                }
            }, {
                key: "_waitForUserIdentify",
                value: function (t, n, r) {
                    r = r || 0;
                    var o = !1;
                    try {
                        o = m.UserData.isUser()
                    } catch (e) {}!o && r < 1500 ? setTimeout(function () {
                        e._waitForUserIdentify(t, n, r + 250)
                    }, 250) : e.identify(t, n)
                }
            }, {
                key: "account",
                value: function (e) {
                    try {
                        if (!(0, y.getConfig)("enableTag")) return;
                        if ((0, Y.isExcluded)() || A.default.isEditorMode()) return;
                        c();
                        var t = {};
                        (0, x.isObject)(e) && (t = l(e));
                        var n = y.accountEndpoint + "?",
                            r = [];
                        r = (0, x.addParameters)(h.eventTrackData[b.cacheGetAll](), r), r = (0, x.addParameter)("acc", JSON.stringify(t), r), n += (0, x.convert2Parameters)(r), te = (new Date).getTime(), E.AjaxUtil.getData(n)
                    } catch (e) {
                        T.logger.logInternalError(e)
                    }
                }
            }, {
                key: "set",
                value: function (e) {
                    try {
                        if (!(0, y.getConfig)("enableTag")) return;
                        switch (e) {
                            case "notification":
                                var t = arguments[1],
                                    n = [];
                                n = (0, x.addParameters)(h.eventTrackData[b.cacheGetAll](), n), n = (0, x.addParameter)("ni", t, n), n = (0, x.addParameter)("ns", 1, n), s(y.notificationStateEndpoint + "?" + (0, x.convert2Parameters)(n));
                                break;
                            case "user":
                                (0, v.setUser)(arguments[1]);
                                break;
                            case "globalContext":
                                var r = arguments[1];
                                h.globalContextCache[b.cacheMerge]("apt.gcx", r), i();
                                break;
                            case "eventListener":
                                var o = arguments[1],
                                    a = arguments[2]; - 1 !== ["ENGAGEMENT_DRAWN", "SURVEY_CLOSED", "engagementDrawn", "surveyClosed"].indexOf(o) && null !== a && "function" == typeof a && (h.externalEventListeners[o] = a)
                        }
                        j.internalEventListener.dispatchEvent("set", e)
                    } catch (e) {
                        T.logger.logInternalError(e)
                    }
                }
            }, {
                key: "setOnce",
                value: function (e) {
                    try {
                        if (!(0, y.getConfig)("enableTag")) return;
                        switch (e) {
                            case "globalContext":
                                var t = arguments[1];
                                h.globalContextCache[b.cacheMerge]("apt.gcx", t, !0), i()
                        }
                    } catch (e) {
                        T.logger.logInternalError(e)
                    }
                }
            }, {
                key: "remove",
                value: function (e) {
                    try {
                        if (!(0, y.getConfig)("enableTag")) return;
                        switch (e) {
                            case "globalContext":
                                var t = arguments[1],
                                    n = (0, $.getGlobalContext)();
                                (0, x.isNotEmptyArr)(t) && (t.forEach(function (e) {
                                    n.hasOwnProperty(e) && delete n[e]
                                }), h.globalContextCache[b.cacheSet]("apt.gcx", n), i())
                        }
                    } catch (e) {
                        T.logger.logInternalError(e)
                    }
                }
            }, {
                key: "lead",
                value: function (e, t) {
                    if ((0, y.getConfig)("enableTag")) {
                        var n = {};
                        (0, x.isObject)(t) && (n = (0, v.copyUserFields)(t)), k.default.trackLead(e, n)
                    }
                }
            }, {
                key: "event",
                value: function (e, t) {
                    try {
                        if (!(0, y.getConfig)("enableTag")) return;
                        if (!e) return void T.logger.logInternalError(new Error("cannot track custom event from segment without event name: " + e + ", event attributes: " + JSON.stringify(t)));
                        this.track(e, t)
                    } catch (t) {
                        T.logger.logInternalError(t, "SEGMENT_EVENT Unable to log " + e)
                    }
                }
            }, {
                key: "checklog",
                value: function () {
                    T.logger.debugMode && T.logger.logInternalError(new Error("Test log from web-sdk"))
                }
            }, {
                key: "pageView",
                value: function (e) {
                    (0, P.internalApt)("pageview", e)
                }
            }, {
                key: "send",
                value: function (e) {
                    switch (e) {
                        case "feedback":
                            if (arguments.length < 2 || !(0, x.isObject)(arguments[1])) return;
                            de.feedback(arguments[1]);
                            break;
                        case "click":
                            if (arguments.length < 2 || !Array.isArray(arguments[1])) return;
                            var t = arguments[1];
                            (0, P.internalApt)("click", {
                                elementTree: t
                            })
                    }
                }
            }, {
                key: "bot",
                value: function (e, t) {
                    (0, M.setIsNewAPI)(!1);
                    var n = (0, M.getIsNewAPI)(),
                        r = "API" === (0, y.getConfig)("fetchKcType"),
                        o = t;
                    switch ((0, x.isObject)(o) || (o = {}), e) {
                        case "search":
                            if (!(0, x.isObject)(t)) return;
                            (0, y.setKcConfigByName)("labels", t.labels), M.KnowledgeCenterManager.updateWidgetConfig();
                            break;
                        case "get":
                            if (!1 === n) {
                                console.log("The Bot api being used is deprecated, please check the documentation on how to use new Bot 'kcb' api");
                                try {
                                    (0, W.fetchKcByApi)(o, !1)
                                } catch (e) {
                                    T.logger.logInternalError(new Error("Bot API - get - " + e))
                                }
                            }
                            break;
                        case "show":
                            if (!1 === n) {
                                console.log("The Bot api being used is deprecated, please check the documentation on how to use new Bot 'kcb' api");
                                try {
                                    var i = o,
                                        a = i.onError,
                                        s = i.onDone;
                                    r && (0, W.toggleKcBot)(!0, s, a)
                                } catch (e) {
                                    T.logger.logInternalError(new Error("Bot API - show - " + e))
                                }
                            }
                            break;
                        case "start":
                            if (!1 === n) {
                                console.log("The Bot api being used is deprecated, please check the documentation on how to use new Bot 'kcb' api");
                                try {
                                    (0, W.fetchKcByApi)(o, !0)
                                } catch (e) {
                                    T.logger.logInternalError(new Error("Bot API - start - " + e))
                                }
                            }
                            break;
                        case "hide":
                            if (!1 === n) {
                                console.log("The Bot api being used is deprecated, please check the documentation on how to use new Bot 'kcb' api");
                                try {
                                    var l = o,
                                        c = l.onError,
                                        u = l.onDone;
                                    r && (0, W.toggleKcBot)(!1, u, c, !0)
                                } catch (e) {
                                    T.logger.logInternalError(new Error("Bot API - hide - " + e))
                                }
                            }
                    }
                }
            }, {
                key: "kcb",
                value: function (e, t) {
                    if ((0, M.setIsNewAPI)(!0), (0, M.getIsNewAPI)()) {
                        var n = "API" === (0, y.getConfig)("fetchKcType"),
                            r = "embedded" === (0, y.getConfig)("kcDisplayType"),
                            o = t;
                        switch ((0, x.isObject)(o) || (o = {}), e) {
                            case "open":
                                var i = o,
                                    a = i.onError,
                                    s = i.onDone;
                                try {
                                    n ? (0, M.getKcIsShownViaAPI)() ? M.KnowledgeCenterManager.checkIsInitialized() && (0, q.toggleKcBot)(!0, s, a, !0) : ((0, G.addCommandToBotQueue)(function () {
                                        (0, q.toggleKcBot)(!0, s, a, !0)
                                    }), (0, q.initWidgetForAPI)(!0, a), (0, M.setKcIsShownViaAPI)(!0)) : (0, q.toggleKcBot)(!0, s, a, !0)
                                } catch (e) {
                                    (0, x.isFunction)(a) && a({
                                        message: "Bot API - error occurred"
                                    }), T.logger.logInternalError(new Error("Bot API - open - " + e))
                                }
                                break;
                            case "close":
                                var l = o,
                                    c = l.onError,
                                    u = l.onDone;
                                try {
                                    (0, q.toggleKcBot)(!1, u, c, !0)
                                } catch (e) {
                                    (0, x.isFunction)(c) && c({
                                        message: "Bot API - error occurred"
                                    }), T.logger.logInternalError(new Error("Bot API - close - " + e))
                                }
                                break;
                            case "show":
                                var d = o,
                                    g = d.onError,
                                    f = d.onDone;
                                try {
                                    n ? ((0, G.addCommandToBotQueue)(function () {
                                        (0, M.setKcIsShownViaAPI)(!0), (0, x.isFunction)(f) && f()
                                    }), (0, q.initWidgetForAPI)(!1, g)) : ((0, x.isFunction)(g) && g({
                                        message: "Bot API - show is only supported in API mode"
                                    }), T.logger.log("Bot API - show is only supported in API mode"))
                                } catch (e) {
                                    (0, x.isFunction)(g) && g("Bot API - error occurred"), T.logger.logInternalError(new Error("Bot API - show - " + e))
                                }
                                break;
                            case "hide":
                                var p = o,
                                    m = p.onError,
                                    v = p.onDone;
                                try {
                                    if (n) {
                                        var h = function () {
                                            r && (0, q.removeEmbeddedHanldlers)(), (0, q.removeWidget)(), (0, M.setKcIsShownViaAPI)(!1)
                                        };
                                        (0, q.toggleKcBot)(!1, function (e) {
                                            var t = e.kcId;
                                            h(), (0, x.isFunction)(v) && v({
                                                id: t
                                            })
                                        }, function () {
                                            h(), (0, x.isFunction)(m) && m({
                                                message: "An error occurred, could not hide the bot."
                                            })
                                        }, !0)
                                    } else(0, x.isFunction)(m) && m({
                                        message: "Bot API - hide is only supported in API mode"
                                    }), T.logger.log("Bot API - hide is only supported in API mode")
                                } catch (e) {
                                    (0, x.isFunction)(m) && m({
                                        message: "Bot API - error occurred"
                                    }), T.logger.logInternalError(new Error("Bot API - hide - " + e))
                                }
                                break;
                            case "showArticleById":
                                var b = o,
                                    E = b.articleId,
                                    I = b.onError;
                                try {
                                    M.KnowledgeCenterManager.openArticleById(E)
                                } catch (e) {
                                    (0, x.isFunction)(I) && I({
                                        message: "Bot API - error occurred"
                                    }), T.logger.logInternalError(new Error("Bot API - showArticleById - " + e))
                                }
                        }
                    }
                }
            }, {
                key: "reset",
                value: function () {
                    (0, M.productNeedsExtraLogging)((0, X.getProduct)(h.eventTrackData[b.cacheGet](h.productIdParameter))) && T.logger.reportToServer("reset called"), m.UserData.clearUserData(), I.EngagementDrawer.clearEngagements(!0), F.default.removeAllBadges(), a()
                }
            }, {
                key: "addListener",
                value: function (e, t) {
                    if (ae.indexOf(e) < 0) return void T.logger.log("trying to listen to event " + e + " that is not allowed in the API");
                    j.internalEventListener.addListener(e, t, null, !0)
                }
            }, {
                key: "config",
                value: function (e, t, n) {
                    if (void 0 !== t)
                        if ("tagKey" === e) {
                            if (t !== h.eventTrackData[b.cacheGet](h.productIdParameter)) {
                                var r = {};
                                n && !(0, x.isObjectEmpty)(n.tagConfig) && (r = n.tagConfig), (0, y.setCachedConfig)(K.tagConfigKeyName, r), h.windowRef[h.aptrinsicGlobalObjName] = z.aptNotReady, (0, P.appNotReady)(), h.eventTrackData[b.cacheSet](h.productIdParameter, t), m.UserData.clearUserData(), I.EngagementDrawer.clearEngagements(), F.default.removeAllBadges(), R.default.clearAll(), a(), (0, K.getServerConfiguration)(!1, t, null, (0, y.getCachedConfig)(K.tagConfigKeyName), null, function () {
                                    (0, y.isIframe)() || (m.UserData.initializeUser(t), h.eventTrackData[b.cacheSet](h.userIdParameter, m.UserData.getUserId()), h.eventTrackData[b.cacheSet]("vt", m.UserData.getUserType()), h.eventTrackData[b.cacheSet]("ai", m.UserData.getAptrinisId()), h.eventTrackData[b.cacheSet](h.sessionIdParam, m.UserData.getSessionId())), (0, P.appReady)(), (0, z.aptReady)()
                                })
                            }
                        } else "enableTag" === e && ((0, y.overrideConfig)({
                            enableTag: t
                        }, !1, !0, !0), !1 === t && this.reset())
                }
            }, {
                key: "render",
                value: function (e, t, n) {
                    if ("engagement" === e) try {
                        J.eventCache.setdata("trackingPayload", n), g(t, null)
                    } catch (e) {
                        T.logger.logInternalError(e, "failed to draw engagement: " + JSON.stringify(t))
                    }
                }
            }]), e
        }();
    t.startEngagementBatch = ue, t.identifyCallback = d
}, function (e, t, n) {
    "use strict";

    function r() {
        var e = window.top;
        if ((0, o.isIframe)() && !l.default.isEditorMode()) {
            var t = a.IframeRequest.getIframeRequest((0, i.getIframeId)(), "register", void 0);
            (0, c.retryFunction)(u, d, function () {
                (0, i.postRequest)(t, e, !0)
            }), this.track = function (t, n, r, o) {
                var s = a.IframeRequest.getIframeRequest((0, i.getIframeId)(), "track", {
                    aptrinsicEventType: t,
                    properties: n,
                    customEventName: r,
                    passedGlobalContext: o
                });
                (0, i.postRequest)(s, e, !0)
            }, this.lead = function (t, n, r, o) {
                var s = a.IframeRequest.getIframeRequest((0, i.getIframeId)(), "lead", {
                    source: t,
                    email: n,
                    userData: r,
                    formFields: o
                });
                (0, i.postRequest)(s, e, !0)
            }, this.textElementResponse = function (t, n) {
                var r = a.IframeRequest.getIframeRequest((0, i.getIframeId)(), "fetchElementTextResponse", {
                    text: t
                }, n);
                (0, i.postRequest)(r, e, !0)
            }, this.textFeatureMatch = function (t) {
                var n = a.IframeRequest.getIframeRequest((0, i.getIframeId)(), "textFeatureMatches", {
                    featureMatchData: t
                });
                (0, i.postRequest)(n, e, !0)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(1),
        i = n(13),
        a = n(6),
        s = n(14),
        l = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(s),
        c = n(0),
        u = 3,
        d = 1e3,
        g = new r;
    t.default = g
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t, n, r, o) {
        try {
            var i = void 0,
                a = void 0;
            a = (0, L.getEngagementTrackPayload)(e, Z.CLICK, n, r), a = (0, C.addParameters)({
                recId: o || null
            }, a);
            var s = t;
            return (0, D.getConfig)("storageProxyDomain") && (s = (0, L.replaceImagesSrcFromHtmlString)(t)), i = D.engagementTrackEndpoint + "?", (0, F.resolveUrlsWithPlaceholdersInHTML)(s, (0, j.isDesktop)() ? null : function (e) {
                var t = a.concat((0, C.addParameter)("ru", e));
                return i + (0, C.convert2Parameters)(t)
            })
        } catch (e) {
            S.logger.logInternalError(e)
        }
    }

    function a(e) {
        return (0, x.isLocked)(e) ? (S.logger.log("Not displaying engagement of type " + e + " because an engagement of this type already displayed"), !1) : ((0, x.lockEngagementType)(e), !0)
    }

    function s(e, t, n, r, o, i) {
        return {
            errorType: e,
            errorSubTypes: o,
            engagementErrorData: {
                engagementId: n,
                engagementType: r,
                stepId: i
            },
            flowType: "ENGAGEMENT",
            exceptionDetails: t,
            aptrinsicId: w.eventTrackData.data[w.aptrinsicIdParam] || null,
            sessionId: w.eventTrackData.data[w.sessionIdParam] || null
        }
    }

    function l(e, t, n, r) {
        var o = s("FAILED_HTML_SANITIZATION", "" + t, e.engagementId, e.content.contentType, Array.isArray(n) ? [].concat.apply([], n) : [], r);
        S.logger.logInternalMessage(o)
    }

    function c(e, t) {
        m(e.content.contentType, e.rules, t)
    }

    function u() {
        (0, q.toggleKcBot)(!1, void 0, void 0, !0)
    }

    function d(e, t) {
        e.content.coreStyling = e.content.coreStyling.replace("https://storage.googleapis.com", t), e.content.engagementCoreStyling = e.content.engagementCoreStyling.replace("https://storage.googleapis.com", t), e.content.overrideStyling = e.content.overrideStyling.replace("https://storage.googleapis.com", t)
    }

    function g(e, t, n) {
        var r = n && n.recId ? n.recId : null;
        if (Array.isArray(e) && (e.length > 1 && (e = e.sort(function (e, t) {
                return $[e.content.contentType] - $[t.content.contentType]
            })), e = e[0]), e) {
            var o = {
                url: (0, C.getPageUrl)()
            };
            if (!(t || B.default.isPreview() || (0, C.isBlank)(e.rules) || (0, U.matchMultiTypeRules)(JSON.parse(e.rules), o))) return void S.logger.log("did not have client side match for engagement rules " + e.rules + ", current URL: " + o);
            var g = (0, W.validateChecksum)(e.engagementId, e.content);
            if (!g.valid) {
                var p = s(g.errorType, g.errorMessage, e.engagementId, e.content.contentType);
                return void S.logger.logInternalMessage(p)
            }
            e.content.contentTypeId = $[e.content.contentType];
            var m = (0, x.sanitizeEngagement)(e.content, null, !1);
            Q || (document.addEventListener(K.SET_USER_ATTRIBUTE_EVENT_NAME, function (e) {
                (0, G.setUser)(e.detail.userAttr)
            }), Q = !0);
            var v = (0, D.getConfig)("storageProxyDomain");
            switch (v && d(e, v), e.content.contentType) {
                case "IN_APP_DIALOG":
                    if (a(e.content.contentType)) {
                        if (m[0].isValid) {
                            e = ee(e, r);
                            var h = z.checkHasOverlayForCurrentStep() ? z.getStepSettings().zIndex : e.content.settings.zIndex,
                                y = z.isRunning() && z.checkHasOverlayForCurrentStep(),
                                b = y ? 0 : e.content.settings.overlayFill,
                                E = Object.assign({}, e, {
                                    content: Object.assign({}, e.content, {
                                        settings: Object.assign({}, e.content.settings, {
                                            zIndex: h,
                                            overlayFill: b
                                        })
                                    })
                                });
                            J.drawDialog(E, f, t, n), u(), V.internalEventListener.dispatchEvent("engagementView", (0, L.getExternalEvent)(e, "Viewed"))
                        } else l(e, m[0].errors, m[0].errorTypes);
                        c(e, t)
                    }
                    break;
                case "IN_APP_GUIDE":
                    if (a(e.content.contentType)) {
                        for (var I = !0, T = 0; T < e.content.steps.length; T++) {
                            var w = e.content.steps[T];
                            w.total = e.content.steps.length, (0, C.isBlank)(w.content) || (m[T].isValid && I ? (e.content.steps[T].content = i(e, w.content, w.id, w.sequenceNumber, r), w.titleHtml && (e.content.steps[T].titleHtml = i(e, w.titleHtml, w.id, w.sequenceNumber, r))) : (I = !1, l(e, m[T].errors, m[T].errorTypes, w.id)))
                        }
                        if (m.some(function (e) {
                                return !e.isValid
                            })) break;
                        var k = e.content;
                        Object.assign(k, {
                            engagementId: e.engagementId,
                            contentId: e.content.id,
                            matchEventId: e.matchEventId,
                            accountId: e.accountId,
                            executionId: e.executionId,
                            executionTimestamp: e.executionTimestamp,
                            coreStyling: e.content.coreStyling,
                            engagementCoreStyling: e.content.engagementCoreStyling,
                            overrideStyling: e.content.overrideStyling,
                            activationType: e.activationType,
                            contentLocale: e.contentLocale,
                            ideId: e.ideId,
                            engagementName: e.engagementName
                        }), e.content.steps = e.content.steps.map(function (e) {
                            return Object.assign({}, e, {
                                elementSelector: {
                                    matchCssSelector: e.matchCssSelector,
                                    cssSelector: e.cssSelector,
                                    matchTextRule: e.matchTextRule,
                                    textRuleOperator: e.textRule && e.textRule.operator,
                                    textRuleValues: e.textRule && e.textRule.values
                                }
                            })
                        });
                        var O = function () {
                            (0, x.handleEngagementFinish)(e.content.contentType)
                        };
                        z.playGuide(e.content.steps, k, O, n), u(), V.internalEventListener.dispatchEvent("engagementView", (0, L.getExternalEvent)(e, "Viewed"))
                    }
                    break;
                case "IN_APP_CAROUSEL":
                    if (a(e.content.contentType)) {
                        for (var _ = !0, A = 0; A < e.content.carouselSlideList.length; A++) {
                            var P = e.content.carouselSlideList[A];
                            (0, C.isBlank)(P.html) || (_ && m[A].isValid ? e.content.carouselSlideList[A].html = i(e, P.html, P.id, P.sequence, r) : (_ = !1, l(e, m[A].errors, m[A].errorTypes, P.id)))
                        }
                        if (!_) break;
                        Y.drawCarousel(e, f, n), u(), V.internalEventListener.dispatchEvent("engagementView", (0, L.getExternalEvent)(e, "Viewed")), c(e, t)
                    }
                    break;
                case "IN_APP_BOOLEAN_SURVEY":
                case "IN_APP_SURVEY_NPS":
                case "IN_APP_CES_SURVEY":
                case "IN_APP_MULTIPLE_QUESTION_SURVEY":
                case "IN_APP_RATING_SURVEY":
                    if (a(e.content.contentType)) {
                        m.forEach(function (t) {
                            t.isValid || l(e, t.errors, t.errorTypes, t.stepId)
                        });
                        if (!X.draw(e, f, n).isValid) break;
                        u(), V.internalEventListener.dispatchEvent("engagementView", (0, L.getExternalEvent)(e, "Viewed")), c(e, t)
                    }
            }
        }
    }

    function f(e, t) {
        ["ENGAGEMENT_DRAWN", "engagementDrawn"].forEach(function (n) {
            var r = t.getBoundingClientRect(),
                o = {
                    width: r.width,
                    height: r.height
                };
            if (w.externalEventListeners[n]) try {
                w.externalEventListeners[n](e.content.contentType, e.engagementId, o)
            } catch (e) {
                S.logger.logInternalError(e, "Error calling " + n + " event listener")
            }
            V.internalEventListener.dispatchEvent(n, e.content.contentType, e.engagementId, o)
        })
    }

    function p(e, t) {
        return function () {
            var n = {
                url: (0, C.getPageUrl)()
            };
            (0, U.matchMultiTypeRules)(JSON.parse(e), n) || te.clearEngagement(t)
        }
    }

    function m(e, t, n) {
        if ((0, D.getConfig)("evaluateEngRuleOnNavigation") && !n && !B.default.isPreview() && !(0, C.isBlank)(t)) {
            var r = p(t, e);
            (0, x.registerEngagementPageChangedHandler)(e, r)
        }
    }

    function v(e, t) {
        try {
            "ONCE" === e.qualificationScopeType && "ON_CLICK" === e.engagementTrigger && (0, H.removeBadge)(e.id);
            g(t.engagement)
        } catch (e) {
            S.logger.logInternalError(e)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.guideDrawer = t.EngagementDrawer = void 0;
    var h = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        y = n(62),
        b = r(y),
        E = n(117),
        I = r(E),
        C = n(0),
        T = n(9),
        w = n(4),
        S = n(3),
        k = n(12),
        x = n(26),
        O = n(120),
        _ = r(O),
        A = n(126),
        P = r(A),
        L = n(15),
        N = n(14),
        B = r(N),
        R = n(35),
        D = n(1),
        M = n(29),
        U = n(56),
        F = n(32),
        V = n(10),
        j = n(18),
        H = n(34),
        q = n(48),
        W = n(50),
        G = n(90),
        K = n(8),
        z = new b.default(null, !0),
        Y = new I.default,
        J = new _.default,
        X = new P.default,
        Q = !1,
        $ = {
            IN_APP_CAROUSEL: 1,
            IN_APP_GUIDE: 2,
            IN_APP_DIALOG: 3,
            IN_APP_SURVEY_NPS: 4,
            IN_APP_CES_SURVEY: 5,
            IN_APP_BOOLEAN_SURVEY: 6,
            IN_APP_RATING_SURVEY: 7,
            IN_APP_MULTIPLE_QUESTION_SURVEY: 8
        },
        Z = {
            CLICK: "ENGAGEMENT_CLICK"
        },
        ee = function (e, t) {
            try {
                var n = void 0;
                if (e.content.htmlElements)
                    if (Array.isArray(e.content.htmlElements))
                        for (var r = 0; r < e.content.htmlElements.length; r++) n = e.content.htmlElements[r], e.content.htmlElements[r] = i(e, n, null, null, t);
                    else e.content.htmlElements = i(e, e.content.htmlElements, null, null, t);
                return e
            } catch (e) {
                S.logger.logInternalError(e)
            }
        },
        te = t.EngagementDrawer = function () {
            function e() {
                o(this, e)
            }
            return h(e, null, [{
                key: "draw",
                value: function (e, t, n) {
                    (0, T.addDOMReadyListener)(g, e, t, n)
                }
            }, {
                key: "clearEngagements",
                value: function (e) {
                    var t = e || !(0, D.getConfig)("crossProductEngagement");
                    t && z.close(), Y.close(), J.close(), X.close(), t && z.clearStepRedirectData()
                }
            }, {
                key: "clearEngagement",
                value: function (e) {
                    switch (e) {
                        case "IN_APP_DIALOG":
                            J.close();
                            break;
                        case "IN_APP_CAROUSEL":
                            Y.close();
                            break;
                        case "IN_APP_GUIDE":
                            z.close(), z.clearStepRedirectData();
                            break;
                        case "IN_APP_BOOLEAN_SURVEY":
                        case "IN_APP_SURVEY_NPS":
                        case "IN_APP_CES_SURVEY":
                        case "IN_APP_MULTIPLE_QUESTION_SURVEY":
                        case "IN_APP_RATING_SURVEY":
                            X.close()
                    }
                }
            }]), e
        }();
    t.guideDrawer = z, !(0, D.isIframe)() && B.default.isPreview() && (B.default.getAdditionalDetails().kcId ? (0, T.addDOMReadyListener)(function () {
        k.AjaxUtil.getData('https://app-be.aptrinsic.com' + "/api/knowledge/" + B.default.getProductKey().split("-")[1], function (e) {
            M.KnowledgeCenterManager.removeWidget(), M.KnowledgeCenterManager.initWidget({
                apiKey: B.default.getProductKey(),
                initialConfig: Object.assign(e, {
                    enabled: !0
                }),
                isPreview: !0
            }, !0), history.replaceState("", document.title, B.default.cleanEngagementData())
        }, {
            Authorization: "Bearer " + B.default.getToken()
        }, function (e) {
            try {
                403 === e ? ((0, R.showMessage)("error", "Not authorized to preview this knowledge center"), B.default.exit()) : 401 == e && ((0, R.showMessage)("error", "Token expired, try to preview again"), B.default.exit())
            } catch (e) {
                S.logger.logInternalError(e)
            }
        })
    }) : k.AjaxUtil.getData(B.default.getPreviewUrl(), function (e) {
        (0, T.addDOMReadyListener)(function () {
            history.replaceState("", document.title, B.default.cleanEngagementData())
        });
        var t = e.badgeData;
        try {
            if (t && (0, C.isNotEmptyArr)(t.badges)) {
                var n = t.badges[0].badgeSettings;
                Object.assign(n, {
                    isPreview: !0,
                    clickCallback: function () {
                        v(n, e)
                    }
                }), (0, H.drawBadges)(t.badges, null, !0)
            } else g(e.engagement)
        } catch (e) {
            S.logger.logInternalError(e)
        }
    }, {
        Authorization: "Bearer " + B.default.getToken()
    }, function (e) {
        try {
            403 === e ? ((0, R.showMessage)("error", "Not authorized to preview this engagement"), B.default.exit()) : 401 == e && ((0, R.showMessage)("error", "Token expired, try to preview again"), B.default.exit())
        } catch (e) {
            S.logger.logInternalError(e)
        }
    }))
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TOP_WINDOW_ID = void 0;
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(5),
        a = (t.TOP_WINDOW_ID = "top", function () {
            function e() {
                r(this, e), this.store = new i.LocalCache
            }
            return o(e, [{
                key: "setIframeId",
                value: function (e) {
                    this.store.setdata("IFRAME_ID", e)
                }
            }, {
                key: "getIframeId",
                value: function () {
                    return this.store.getKey("IFRAME_ID")
                }
            }, {
                key: "setBotConfig",
                value: function (e) {
                    this.store.setdata("KC_CONFIG", e)
                }
            }, {
                key: "getBotConfig",
                value: function () {
                    return this.store.getKey("KC_CONFIG")
                }
            }]), e
        }()),
        s = new a;
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        o = n(13),
        i = n(6),
        a = n(22),
        s = n(16),
        l = n(0),
        c = new function () {
            var e = window.top;
            if ((0, r.isIframe)()) {
                var t = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), "register");
                (0, l.retryFunction)(3, 3e3, function () {
                    (0, o.postRequest)(t, e, !0)
                }), (0, l.retryFunction)(3, 3e3, function () {
                    (0, o.postRequest)(t, window.parent, !0)
                }), this.postIframeClosed = function () {
                    if ((0, r.isIframe)()) {
                        var t = s.UUIDGenerator.generateV4Id(),
                            n = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), a.EVENTS.BOT, {
                                type: a.IFRAME_TO_TOP_EVENTS.IFRAME_CLOSED
                            }, t);
                        (0, o.postRequest)(n, e, !0)
                    }
                }, this.postBotFound = function () {
                    if ((0, r.isIframe)()) {
                        var t = s.UUIDGenerator.generateV4Id(),
                            n = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), a.EVENTS.BOT, {
                                type: a.IFRAME_TO_TOP_EVENTS.BOT_FOUND
                            }, t);
                        (0, o.postRequest)(n, e, !0)
                    }
                }, this.getBotContent = function (e, t, n) {
                    (0, o.iframeSubscribeCallback)(a.EVENTS.BOT, {
                        type: a.IFRAME_TO_TOP_EVENTS.GET_BOT_CONTENT,
                        botId: e
                    }, function (e, r) {
                        e && t && t(e), r && n && n(r)
                    })
                }, this.trackBotToggle = function (t, n) {
                    if ((0, r.isIframe)()) {
                        var l = s.UUIDGenerator.generateV4Id(),
                            c = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), a.EVENTS.BOT, {
                                type: a.IFRAME_TO_TOP_EVENTS.TRACK_BOT_TOGGLE,
                                botId: t,
                                isOpen: n
                            }, l);
                        (0, o.postRequest)(c, e, !0)
                    }
                }, this.checkMappedElementIsVisibleResponse = function (t, n) {
                    if ((0, r.isIframe)()) {
                        var s = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), a.EVENTS.BOT, {
                            type: a.IFRAME_TO_TOP_EVENTS.IS_ELEMENT_VISIBLE_RESPONSE,
                            isVisible: n,
                            iframeId: (0, o.getIframeId)()
                        }, t);
                        (0, o.postRequest)(s, e, !0)
                    }
                }, this.getAptrinsicId = function (e) {
                    (0, o.iframeSubscribeCallback)(a.EVENTS.BOT, {
                        type: a.IFRAME_TO_TOP_EVENTS.GET_APTRINSIC_ID
                    }, e)
                }, this.postClickElement = function () {
                    if ((0, r.isIframe)()) {
                        var t = s.UUIDGenerator.generateV4Id(),
                            n = i.IframeRequest.getIframeRequest((0, o.getIframeId)(), a.EVENTS.BOT, {
                                type: a.IFRAME_TO_TOP_EVENTS.BOT_ELEMENT_CLICK
                            }, t);
                        (0, o.postRequest)(n, e, !0)
                    }
                }
            }
        };
    t.default = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        o = n(13),
        i = n(6),
        a = n(16),
        s = n(22),
        l = new function () {
            function e(e, t, n) {
                var r = a.UUIDGenerator.generateV4Id();
                return i.IframeRequest.getMasterRequst(s.EVENTS.BOT, {
                    type: s.TOP_TO_IFRAME_EVENTS.BOT_RESPONSE,
                    botConfig: e,
                    isInitial: t,
                    shouldOpen: n
                }, r)
            }
            this.postBotEvent = function (e, t) {
                var n = a.UUIDGenerator.generateV4Id(),
                    r = i.IframeRequest.getMasterRequst(s.EVENTS.BOT, {
                        type: s.TOP_TO_IFRAME_EVENTS.POST_BOT_EVENT,
                        data: t
                    }, n);
                (0, o.postRequestDown)(r, e)
            }, this.sendBotFound = function (e) {
                if (!(0, r.isIframe)()) {
                    var t = a.UUIDGenerator.generateV4Id(),
                        n = i.IframeRequest.getMasterRequst(s.EVENTS.BOT, {
                            type: s.TOP_TO_IFRAME_EVENTS.BOT_FOUND,
                            iframeId: e
                        }, t);
                    (0, o.propagateDown)(n, (0, i.getRegisteredIframes)())
                }
            }, this.removeWidgetFromAllIframes = function () {
                if (!(0, r.isIframe)()) {
                    var e = a.UUIDGenerator.generateV4Id(),
                        t = i.IframeRequest.getMasterRequst(s.EVENTS.BOT, {
                            type: s.TOP_TO_IFRAME_EVENTS.REMOVE_BOT
                        }, e);
                    (0, o.propagateDown)(t, (0, i.getRegisteredIframes)())
                }
            }, this.sendBotConfig = function (t, n) {
                if (!(0, r.isIframe)()) {
                    var a = e(t, n);
                    (0, o.propagateDown)(a, (0, i.getRegisteredIframes)())
                }
            }, this.sendBotConfigToIframe = function (t, n, i, a) {
                if (!(0, r.isIframe)()) {
                    var s = e(n, i, a);
                    (0, o.postRequestDown)(s, t)
                }
            }, this.removeBotFromIframe = function (e) {
                if (!(0, r.isIframe)()) {
                    var t = a.UUIDGenerator.generateV4Id(),
                        n = i.IframeRequest.getMasterRequst(s.EVENTS.BOT, {
                            type: s.TOP_TO_IFRAME_EVENTS.REMOVE_BOT
                        }, t);
                    (0, o.postRequestDown)(n, e)
                }
            }, this.getBotContentResponse = function (e, t, n, a) {
                if (!(0, r.isIframe)()) {
                    var l = i.IframeRequest.getMasterRequst(s.EVENTS.BOT, {
                        type: s.TOP_TO_IFRAME_EVENTS.GET_BOT_CONTENT_RESPONSE,
                        response: n,
                        error: a
                    }, t);
                    (0, o.postRequestDown)(l, e)
                }
            }, this.setBotIsOpen = function (e, t) {
                var n = a.UUIDGenerator.generateV4Id(),
                    r = i.IframeRequest.getMasterRequst(s.EVENTS.BOT, {
                        type: s.TOP_TO_IFRAME_EVENTS.SET_BOT_IS_OPEN,
                        isOpen: e
                    }, n, t);
                (0, o.postRequestDown)(r, (0, i.getIframeData)(t))
            }, this.checkMappedElementIsVisible = function (e, t, n) {
                (0, r.isIframe)() || (0, o.createSubscribeCallbackRequest)(s.EVENTS.BOT, {
                    type: s.TOP_TO_IFRAME_EVENTS.IS_ELEMENT_VISIBLE,
                    cssSelector: t
                }, e, n)
            }, this.addElementClickListener = function (e, t) {
                var n = a.UUIDGenerator.generateV4Id(),
                    r = i.IframeRequest.getMasterRequst(s.EVENTS.BOT, {
                        type: s.TOP_TO_IFRAME_EVENTS.ADD_ELEMENT_CLICK_LISTENER,
                        cssSelector: t
                    }, n);
                (0, o.postRequestDown)(r, e)
            }, this.getAptrinsicIdResponse = function (e, t, n) {
                if (!(0, r.isIframe)()) {
                    var a = i.IframeRequest.getMasterRequst(s.EVENTS.BOT, {
                        type: s.TOP_TO_IFRAME_EVENTS.GET_APTRINSIC_ID_RESPONSE,
                        aptrinsicId: n
                    }, t);
                    (0, o.postRequestDown)(a, e)
                }
            }
        };
    t.default = l
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        var t = (0, A.getKcConfig)();
        if (t) {
            var n = t.kcId;
            $ = n, s(function () {
                ee = !1, H.botEventEmmiter.dispatchEvent("WIDGET_LOADED", e, {
                    kcId: n
                })
            }, function (t) {
                ee = !1, H.botEventEmmiter.dispatchEvent("WIDGET_FAILED", e, {
                    kcId: n,
                    code: 500,
                    message: t
                })
            })
        }
    }

    function i(e, t, n) {
        var r = {
            apiKey: O.eventTrackData.data[O.productIdParameter],
            aptId: e,
            initialConfig: t
        };
        N.KnowledgeCenterManager.initWidget(r, !1, te, n)
    }

    function a(e, t, n, r, a) {
        var l = !1,
            c = Z !== t.kcId;
        (r || Z) && c && (N.KnowledgeCenterManager.clearWidgetLoadQueue(), (0, A.setKcConfig)({})), Z = t.kcId, (0, A.setKcConfig)(t), e || c ? ((0, A.isIframe)() ? Q.default.getAptrinsicId(function (e) {
            i(x(e, 1)[0].aptrinsicId, t, a)
        }) : i(O.eventTrackData.data[O.aptrinsicIdParam], t, a), $ ? (l = !0, o(a)) : $ !== Z ? (l = !1, N.KnowledgeCenterManager.registerAfterWidgetLoad(function () {
            o(a)
        })) : ee = !1) : c ? (l = !0, ee = !1) : (l = !0, s(function () {
            ee = !1, H.botEventEmmiter.dispatchEvent("WIDGET_LOADED", a, {
                kcId: Z
            })
        }, function (e) {
            ee = !1, H.botEventEmmiter.dispatchEvent("WIDGET_FAILED", a, {
                kcId: Z,
                code: 500,
                message: e
            })
        })), l && N.KnowledgeCenterManager.updateWidgetConfig()
    }

    function s(e, t) {
        var n = O.eventTrackData.data[O.productIdParameter],
            r = O.eventTrackData.data[O.aptrinsicIdParam];
        N.KnowledgeCenterManager.fetchEntriesAndSendToWidget(n, r, e, t)
    }

    function l() {
        se.removeAllHandler()
    }

    function c() {
        $ = "", N.KnowledgeCenterManager.removeWidget(Z), (0, j.removeEmbeddedListeners)(), Z = "", (0, A.setKcConfig)({}), ee = !1
    }

    function u(e, t, n, r) {
        var o = r.shouldRemoveWidget,
            i = r.shouldJustClean,
            a = r.shouldDispatchEvent;
        r.shouldRemoveHandlers && se.removeAllHandler(), o ? c() : i && (Z = "", (0, A.setKcConfig)({}), N.KnowledgeCenterManager.cleanWidget()), ee = !1, a && H.botEventEmmiter.dispatchEvent("WIDGET_FAILED", n, {
            kcId: e,
            code: t,
            message: "Could not fetch knowledge center with provided id"
        })
    }

    function d(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = arguments[4],
            i = _.UserData.isUser(),
            a = W.UUIDGenerator.generateV4Id();
        if (r && ie && ae && (H.botEventEmmiter.addListener("WIDGET_LOADED", ie, a), H.botEventEmmiter.addListener("WIDGET_FAILED", ae, a)), ee && (R.logger.log(n + " is in progress"), u(Z, 500, a, {
                shouldRemoveWidget: !0,
                shouldJustClean: !1,
                shouldDispatchEvent: !1,
                shouldRemoveHandlers: !1
            })), (0, A.getConfig)("widgetEnabled") && i && !(L.default.isPreview() && L.default.getAdditionalDetails().kcId) && !ee) {
            var s = function (i) {
                    if (i) {
                        ne = i.kcId;
                        var s = Object.assign({}, i);
                        if (!(0, G.validateConfigChecksum)(ne, s)) return void u(ne, 500, a, {
                            shouldRemoveWidget: !0,
                            shouldJustClean: !1,
                            shouldDispatchEvent: !0,
                            shouldRemoveHandlers: !0
                        });
                        w(i, e, r, a)
                    } else t ? ee = !1 : (B.internalEventListener.dispatchEvent(z.BOT_IFRAME_INTERNAL_EVENTS.BOT_EMPTY_CONFIG), u(n, 500, a, {
                        shouldRemoveWidget: !0,
                        shouldJustClean: !1,
                        shouldDispatchEvent: !0,
                        shouldRemoveHandlers: !0
                    }));
                    o && o(i)
                },
                l = function (e) {
                    u(n, 404, a, {
                        shouldRemoveWidget: !0,
                        shouldJustClean: !1,
                        shouldDispatchEvent: !0,
                        shouldRemoveHandlers: !0
                    })
                };
            ee = !0;
            var c = O.eventTrackData.data[O.productIdParameter];
            (0, N.fetchKnowledgeCenterConfig)(c, n, s, l)
        }
    }

    function g(e, t, n, r) {
        try {
            var o = (0, A.getKcConfig)() || {},
                i = o.kcId;
            Object.keys(o).length > 0 && i ? (e ? N.KnowledgeCenterManager.open() : N.KnowledgeCenterManager.close(r), (0, D.isFunction)(t) && t({
                kcId: i
            })) : (0, D.isFunction)(n) && n({
                kcId: i,
                code: 404,
                message: "Not bot was found with id provided"
            })
        } catch (e) {
            (0, D.isFunction)(n) && n({
                kcId: kcId,
                code: 404,
                message: "An error occurred"
            }), R.logger.logInternalError(new Error("toggleKcBot - " + e))
        }
    }

    function f() {
        var e = document.querySelector("#apt-widget");
        return e ? e && !e.classList.contains("apt-hidden") : null
    }

    function p(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
        try {
            var r = document.querySelector("#apt-widget"),
                o = f();
            r ? (e !== o && (e ? r.classList.remove("apt-hidden") : r.classList.add("apt-hidden")), t()) : n()
        } catch (e) {
            n(), R.logger.log("error in togglerBotContainer " + e)
        }
    }

    function m() {
        var e = document.querySelector("#apt-widget");
        if (e) {
            return !e.querySelector(".apt-widget.apt-widget-window")
        }
        return !1
    }

    function v() {
        clearInterval(re), re = null, clearTimeout(oe), oe = null
    }

    function h(e, t) {
        try {
            v(), m() ? (t(), v()) : (re = setInterval(function () {
                m() && (t(), v())
            }, 200), oe = setTimeout(function () {
                v(), u(Z, 500, e, {
                    shouldRemoveWidget: !0,
                    shouldDispatchEvent: !0,
                    shouldRemoveHandlers: !0
                }), R.logger.logInternalError(new Error("onWidgetClosed - error - could not close the widget in less than 3 seconds"))
            }, 3e3))
        } catch (t) {
            v(), u(Z, 500, e, {
                shouldRemoveWidget: !0,
                shouldDispatchEvent: !0,
                shouldRemoveHandlers: !0
            }), R.logger.log("onWidgetClosed - error" + t)
        }
    }

    function y(e, t, n, r, o) {
        try {
            var i = (0, A.getConfig)("kcPositionType");
            (0, j.findWidgetContainer)(n.cssSelector, o, {
                isNewAPI: !0,
                positionType: i,
                fetchKcType: (0, A.getConfig)("fetchKcType"),
                kcId: t.kcId
            }, {
                onClick: N.KnowledgeCenterManager.toggleBot,
                onDone: function (n) {
                    ne === t.kcId && (N.KnowledgeCenterManager.updateEmbeddedMappedElement(n), N.KnowledgeCenterManager.checkIsInitialized() || N.KnowledgeCenterManager.checkIsInProgress() ? N.KnowledgeCenterManager.checkIsInitialized() && !1 === f() && (g(!1), h(o, function () {
                        p(!0)
                    })) : a(e, t, n, r, o))
                },
                onFailed: function () {
                    ne === t.kcId && (r ? c() : (b(), B.internalEventListener.dispatchEvent("BOT_NOT_FOUND")))
                }
            })
        } catch (e) {
            clearInterval(re), re = null, R.logger.log("error in updateWidget " + e)
        }
    }

    function b(e, t) {
        g(!1, function () {
            p(!1, e, t)
        }, t)
    }

    function E() {
        if ("injection" === (0, A.getConfig)("kcPositionType")) {
            var e = N.KnowledgeCenterManager.getEmbeddedMappedElement() || {
                    element: null
                },
                t = e.element;
            try {
                !t || t && !(0, K.elementContainsChild)((0, A.getBody)(), t) ? c() : p(!1)
            } catch (e) {
                c()
            }
        } else b()
    }

    function I() {
        var e = void 0,
            t = void 0;
        this.removeAllHandler = function () {
            t && (U.default.removeObserver(t), t = null), e && B.internalEventListener.removeListener("pageview", e)
        }, this.addHandlers = function (n, r) {
            e = function () {
                (0, H.clearBotCommands)(), E(), n([], !0)
            }, B.internalEventListener.addListener("pageview", e), t && this.removeAllHandler(), t = U.default.addObserver(function () {
                return !0
            }, n, function (e, t) {
                return T(e) || t
            })
        }
    }

    function C(e) {
        return "apt-widget" === e.id || 1 === e.nodeType && e.querySelector("#apt-widget")
    }

    function T(e) {
        var t = !1,
            n = !1;
        return e.some(function (e) {
            return e.addedNodes.forEach(function (e) {
                var t = 3 === e.nodeType;
                n || t || (n = C(e))
            }), n || e.removedNodes.forEach(function (e) {
                var n = 3 === e.nodeType;
                t || n || (t = C(e))
            }), !n && t
        })
    }

    function w(e, t, n, r) {
        function o() {
            a(t, e, null, n, r)
        }
        var i = e.windowSettings.embedKCSettings.elementSelector,
            s = function (o, a) {
                var s = T(o);
                s && c(), (s || a) && le(t, e, i, n, r)
            };
        if ("embedded" === (0, A.getConfig)("kcDisplayType")) {
            (0, A.isIframe)() || B.internalEventListener.dispatchEvent(z.TOP_TO_IFRAME_EVENTS.BOT_RESPONSE, e);
            var l = (0, A.getConfig)("kcPositionType"),
                u = "injection" === l;
            Z !== e.kcId && (ee = !1, N.KnowledgeCenterManager.cleanWidget(), u && ($ = "", N.KnowledgeCenterManager.removeWidget()));
            var d = N.KnowledgeCenterManager.checkIsInitialized();
            N.KnowledgeCenterManager.checkIsInitialized() || N.KnowledgeCenterManager.checkIsInProgress() ? d && (n ? (se.removeAllHandler(), (0, j.removeEmbeddedListeners)(), S(i, o, function () {
                se.addHandlers(s, r)
            })) : o()) : ((0, j.removeEmbeddedListeners)(), se.removeAllHandler(), S(i, o, function () {
                se.addHandlers(s, r)
            }))
        } else o()
    }

    function S(e, t, n) {
        (0, q.addDOMReadyListener)(function () {
            (0, F.findInAll)(e, (0, V.getRegisteredIframes)(), function (e) {
                e && t(e), n && n(e)
            })
        })
    }

    function k(e, t) {
        e && N.KnowledgeCenterManager.checkIsInitialized() && (0, H.runBotCommands)(), ie = function () {
            (0, H.runBotCommands)(), ee = !1
        }, ae = function () {
            ee = !1, (0, D.isFunction)(t) && t(), se.removeAllHandler()
        }, d(!0, !1, null, !0)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var x = function () {
        function e(e, t) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
        return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.removeEmbeddedHanldlers = l, t.removeWidget = c, t.initKnowledgeCenter = d, t.toggleKcBot = g, t.toggleBotContainer = p, t.closeAndHideBot = b, t.initWidgetForAPI = k;
    var O = n(4),
        _ = n(23),
        A = n(1),
        P = n(14),
        L = r(P),
        N = n(29),
        B = n(10),
        R = n(3),
        D = n(0),
        M = n(30),
        U = r(M),
        F = n(17),
        V = n(6),
        j = n(54),
        H = n(53),
        q = n(9),
        W = n(16),
        G = n(55),
        K = n(19),
        z = n(22),
        Y = n(111),
        J = r(Y),
        X = n(46),
        Q = r(X),
        $ = void 0,
        Z = void 0,
        ee = !1,
        te = !1,
        ne = "",
        re = void 0,
        oe = void 0,
        ie = void 0,
        ae = void 0,
        se = new I,
        le = (0, D.debounce)(y, 500);
    (0, J.default)(function () {
        l(), c()
    }, function (e, t) {
        ne = e.kcId, w(e, t)
    }, N.KnowledgeCenterManager)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.ENGAGEMENT_CHECKSUM_KEY = "engagementChecksum", t.ENGAGEMENT_FIELD_MAPPING_ENABLED_KEY = "engFieldMappingEnabled", t.ENGAGEMENT_CHECKSUM_URL_CONFIG = "engagementChecksumFileUrl", t.BOT_CHECKSUM_KEY = "botChecksum", t.CHECKSUM_VERSION = "checksumVersion"
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = (0, s.getCachedConfig)(l.CHECKSUM_VERSION);
        return void 0 === n || n <= 2 ? (0, c.filterAndSortEngagementFieldsV1)(e, t) : 3 === n ? (0, u.filterAndSortEngagementFieldsV3)(e, t) : (0, c.filterAndSortEngagementFieldsV1)(e, t)
    }

    function o(e) {
        return function (t) {
            var n = {},
                r = {},
                o = t.engagementChecksums;
            (0, g.isNotEmptyArr)(o) && o.forEach(function (e) {
                n[e.engagementId] = e.validChecksums
            });
            var i = t.checksumVersion,
                a = t.botChecksums;
            (0, g.isNotEmptyArr)(a) && a.forEach(function (e) {
                r[e.botId] = e.validContentChecksums.concat(e.validConfigChecksums)
            });
            var c = t.engFieldMappingEnabled;
            (0, g.isFunction)(e) ? e({
                engagementChecksumMapping: n,
                checksumVersion: i,
                botChecksumsMapping: r,
                engagementFieldMappingEnabled: c || !1
            }): ((0, s.setCachedConfig)(l.ENGAGEMENT_CHECKSUM_KEY, n), (0, s.setCachedConfig)(l.CHECKSUM_VERSION, i), (0, s.setCachedConfig)(l.BOT_CHECKSUM_KEY, r), c ? (0, s.setCachedConfig)(l.ENGAGEMENT_FIELD_MAPPING_ENABLED_KEY, c) : (0, s.setCachedConfig)(l.ENGAGEMENT_FIELD_MAPPING_ENABLED_KEY, !1))
        }
    }

    function i(e, t) {
        e ? d.AjaxUtil.getData(e, o(t), null, function () {
            (0, g.isFunction)(t) && t(void 0)
        }) : (0, g.isFunction)(t) && t(void 0)
    }

    function a(e, t, n) {
        var o = (0, f.getEnvironment)(p.eventTrackData[m.cacheGet](p.productIdParameter));
        if (v.logger.debugMode && o !== h.PROD_ENVIRONMENT) return {
            valid: !0
        };
        var i = n ? n.engagementChecksumMapping : (0, s.getCachedConfig)(l.ENGAGEMENT_CHECKSUM_KEY),
            a = n ? n.engagementFieldMappingEnabled : (0, s.getCachedConfig)(l.ENGAGEMENT_FIELD_MAPPING_ENABLED_KEY),
            c = (0, s.getConfig)(l.ENGAGEMENT_CHECKSUM_URL_CONFIG);
        if (!c && !n) return {
            valid: !0
        };
        var u = "MISSING_CHECKSUM_FOR_ENGAGEMENT",
            d = "Engagement checksum is invalid since there is URL configured but no checksum to validated against";
        if (!i && c) return {
            valid: !1,
            errorType: u,
            errorMessage: d
        };
        var E = i[e];
        if (!E && !Array.isArray(E) || (0, g.isEmptyArr)(E)) {
            return {
                valid: !1,
                errorType: u,
                errorMessage: d + ", array is empty"
            }
        }
        var I = Object.assign({}, t);
        I = r(I, a), I = (0, y.orderAlphabetically)(I), I = (0, y.removeNullFields)(I);
        var C = JSON.stringify(I);
        C = C.replaceAll(/(\d+)\.0/g, "$1");
        var T = (0, b.sha256)(C),
            w = E.indexOf(T) > -1;
        if (!w) {
            return {
                valid: !1,
                errorType: "CHECKSUM_MISMATCH",
                errorMessage: "the engagement checksum is invalid, js checksum:" + T + ". engagement checksums: " + JSON.stringify(E) + " the engagement checksum was done on: " + JSON.stringify(I)
            }
        }
        return {
            valid: w
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateChecksum = t.loadChecksumFile = t.filterAndSortEngagementFields = void 0;
    var s = n(1),
        l = n(49),
        c = n(118),
        u = n(119),
        d = n(12),
        g = n(0),
        f = n(18),
        p = n(4),
        m = n(5),
        v = n(3),
        h = n(8),
        y = n(27),
        b = n(83);
    t.filterAndSortEngagementFields = r, t.loadChecksumFile = i, t.validateChecksum = a
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = e.fromScore,
            r = e.toScore,
            o = e.labels.map(function (e) {
                return new a.default(Object.assign({}, t, {
                    id: e.id,
                    text: e.text
                }))
            });
        this.render = function () {
            return o.map(function (e) {
                return e.render()
            })
        }, this.getSelected = function () {
            return o.map(function (e) {
                return e.isSelected() ? e.getId() : null
            }).filter(function (e) {
                return null !== e
            })
        }, this.isInRange = function (e) {
            return n <= e && r >= e
        }, this.setTabIndexes = function (e) {
            var t = e;
            return o.forEach(function (e) {
                e.setTabIndex(t), t += 1
            }), t
        }
    }

    function o(e, t) {
        var n = null,
            o = e.map(function (e) {
                return new r(e, t)
            });
        t.singleList && (n = o[0]), this.setTabIndexes = function (e) {
            var t = e;
            return o.forEach(function (e) {
                t = e.setTabIndexes(t)
            }), t
        }, this.getLabelElements = function (e) {
            if (t.singleList) return o[0].render();
            for (var r = 0; r < o.length; r++)
                if (o[r].isInRange(e)) return n = o[r], o[r].render()
        }, this.getSelectedLabels = function () {
            return n ? n.getSelected() : []
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(127),
        a = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i);
    t.default = o
}, function (e, t, n) {
    "use strict";
    (function (e) {
        function n(e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then(function () {
                    t = !1, e()
                }))
            }
        }

        function r(e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, ge))
            }
        }

        function o(e) {
            var t = {};
            return e && "[object Function]" === t.toString.call(e)
        }

        function i(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView,
                r = n.getComputedStyle(e, null);
            return t ? r[t] : r
        }

        function a(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function s(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case "HTML":
                    return document.documentElement;
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body
            }
            var t = i(e),
                n = t.overflow,
                r = t.overflowX;
            return /(auto|scroll|overlay)/.test(n + t.overflowY + r) ? e : s(a(e))
        }

        function l(e) {
            return e && e.referenceNode ? e.referenceNode : e
        }

        function c(e) {
            return 11 === e ? me : 10 === e ? ve : me || ve
        }

        function u(e) {
            if (!e) return document.documentElement;
            for (var t = c(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
            var r = n && n.nodeName;
            return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === i(n, "position") ? u(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
        }

        function d(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || u(e.firstElementChild) === e)
        }

        function g(e) {
            return null !== e.parentNode ? g(e.parentNode) : e
        }

        function f(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                r = n ? e : t,
                o = n ? t : e,
                i = document.createRange();
            i.setStart(r, 0), i.setEnd(o, 0);
            var a = i.commonAncestorContainer;
            if (e !== a && t !== a || r.contains(o)) return d(a) ? a : u(a);
            var s = g(e);
            return s.host ? f(s.host, t) : f(e, g(t).host)
        }

        function p(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                n = "top" === t ? "scrollTop" : "scrollLeft",
                r = e.nodeName;
            if ("BODY" === r || "HTML" === r) {
                var o = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || o)[n]
            }
            return e[n]
        }

        function m(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = p(t, "top"),
                o = p(t, "left"),
                i = n ? -1 : 1;
            return e.top += r * i, e.bottom += r * i, e.left += o * i, e.right += o * i, e
        }

        function v(e, t) {
            var n = "x" === t ? "Left" : "Top",
                r = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
        }

        function h(e, t, n, r) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], c(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
        }

        function y(e) {
            var t = e.body,
                n = e.documentElement,
                r = c(10) && getComputedStyle(n);
            return {
                height: h("Height", t, n, r),
                width: h("Width", t, n, r)
            }
        }

        function b(e) {
            return Ee({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }

        function E(e) {
            var t = {};
            try {
                if (c(10)) {
                    t = e.getBoundingClientRect();
                    var n = p(e, "top"),
                        r = p(e, "left");
                    t.top += n, t.left += r, t.bottom += n, t.right += r
                } else t = e.getBoundingClientRect()
            } catch (e) {}
            var o = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                },
                a = "HTML" === e.nodeName ? y(e.ownerDocument) : {},
                s = a.width || e.clientWidth || o.width,
                l = a.height || e.clientHeight || o.height,
                u = e.offsetWidth - s,
                d = e.offsetHeight - l;
            if (u || d) {
                var g = i(e);
                u -= v(g, "x"), d -= v(g, "y"), o.width -= u, o.height -= d
            }
            return b(o)
        }

        function I(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = c(10),
                o = "HTML" === t.nodeName,
                a = E(e),
                l = E(t),
                u = s(e),
                d = i(t),
                g = parseFloat(d.borderTopWidth, 10),
                f = parseFloat(d.borderLeftWidth, 10);
            n && o && (l.top = Math.max(l.top, 0), l.left = Math.max(l.left, 0));
            var p = b({
                top: a.top - l.top - g,
                left: a.left - l.left - f,
                width: a.width,
                height: a.height
            });
            if (p.marginTop = 0, p.marginLeft = 0, !r && o) {
                var v = parseFloat(d.marginTop, 10),
                    h = parseFloat(d.marginLeft, 10);
                p.top -= g - v, p.bottom -= g - v, p.left -= f - h, p.right -= f - h, p.marginTop = v, p.marginLeft = h
            }
            return (r && !n ? t.contains(u) : t === u && "BODY" !== u.nodeName) && (p = m(p, t)), p
        }

        function C(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                r = I(e, n),
                o = Math.max(n.clientWidth, window.innerWidth || 0),
                i = Math.max(n.clientHeight, window.innerHeight || 0),
                a = t ? 0 : p(n),
                s = t ? 0 : p(n, "left");
            return b({
                top: a - r.top + r.marginTop,
                left: s - r.left + r.marginLeft,
                width: o,
                height: i
            })
        }

        function T(e) {
            var t = e.nodeName;
            if ("BODY" === t || "HTML" === t) return !1;
            if ("fixed" === i(e, "position")) return !0;
            var n = a(e);
            return !!n && T(n)
        }

        function w(e) {
            if (!e || !e.parentElement || c()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === i(t, "transform");) t = t.parentElement;
            return t || document.documentElement
        }

        function S(e, t, n, r) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                i = {
                    top: 0,
                    left: 0
                },
                c = o ? w(e) : f(e, l(t));
            if ("viewport" === r) i = C(c, o);
            else {
                var u = void 0;
                "scrollParent" === r ? (u = s(a(t)), "BODY" === u.nodeName && (u = e.ownerDocument.documentElement)) : u = "window" === r ? e.ownerDocument.documentElement : r;
                var d = I(u, c, o);
                if ("HTML" !== u.nodeName || T(c)) i = d;
                else {
                    var g = y(e.ownerDocument),
                        p = g.height,
                        m = g.width;
                    i.top += d.top - d.marginTop, i.bottom = p + d.top, i.left += d.left - d.marginLeft, i.right = m + d.left
                }
            }
            n = n || 0;
            var v = "number" == typeof n;
            return i.left += v ? n : n.left || 0, i.top += v ? n : n.top || 0, i.right -= v ? n : n.right || 0, i.bottom -= v ? n : n.bottom || 0, i
        }

        function k(e) {
            return e.width * e.height
        }

        function x(e, t, n, r, o) {
            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var a = S(n, r, i, o),
                s = {
                    top: {
                        width: a.width,
                        height: t.top - a.top
                    },
                    right: {
                        width: a.right - t.right,
                        height: a.height
                    },
                    bottom: {
                        width: a.width,
                        height: a.bottom - t.bottom
                    },
                    left: {
                        width: t.left - a.left,
                        height: a.height
                    }
                },
                l = Object.keys(s).map(function (e) {
                    return Ee({
                        key: e
                    }, s[e], {
                        area: k(s[e])
                    })
                }).sort(function (e, t) {
                    return t.area - e.area
                }),
                c = l.filter(function (e) {
                    var t = e.width,
                        r = e.height;
                    return t >= n.clientWidth && r >= n.clientHeight
                }),
                u = c.length > 0 ? c[0].key : l[0].key,
                d = e.split("-")[1];
            return u + (d ? "-" + d : "")
        }

        function O(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return I(n, r ? w(t) : f(t, l(n)), r)
        }

        function _(e) {
            var t = e.ownerDocument.defaultView,
                n = t.getComputedStyle(e),
                r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
                o = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0);
            return {
                width: e.offsetWidth + o,
                height: e.offsetHeight + r
            }
        }

        function A(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e]
            })
        }

        function P(e, t, n) {
            n = n.split("-")[0];
            var r = _(e),
                o = {
                    width: r.width,
                    height: r.height
                },
                i = -1 !== ["right", "left"].indexOf(n),
                a = i ? "top" : "left",
                s = i ? "left" : "top",
                l = i ? "height" : "width",
                c = i ? "width" : "height";
            return o[a] = t[a] + t[l] / 2 - r[l] / 2, o[s] = n === s ? t[s] - r[c] : t[A(s)], o
        }

        function L(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function N(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var r = L(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(r)
        }

        function B(e, t, n) {
            return (void 0 === n ? e : e.slice(0, N(e, "name", n))).forEach(function (e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = e.function || e.fn;
                e.enabled && o(n) && (t.offsets.popper = b(t.offsets.popper), t.offsets.reference = b(t.offsets.reference), t = n(t, e))
            }), t
        }

        function R() {
            if (!this.state.isDestroyed) {
                var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                };
                e.offsets.reference = O(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = x(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = P(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = B(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function D(e, t) {
            return e.some(function (e) {
                var n = e.name;
                return e.enabled && n === t
            })
        }

        function M(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                var o = t[r],
                    i = o ? "" + o + n : e;
                if (void 0 !== document.body.style[i]) return i
            }
            return null
        }

        function U() {
            return this.state.isDestroyed = !0, D(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[M("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function F(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }

        function V(e, t, n, r) {
            var o = "BODY" === e.nodeName || "HTML" === e.nodeName,
                i = o ? e.ownerDocument.defaultView : e;
            i.addEventListener(t, n, {
                passive: !0
            }), o || V(s(i.parentNode), t, n, r), r.push(i)
        }

        function j(e, t, n, r) {
            n.updateBound = r, F(e).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var o = s(e);
            return V(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
        }

        function H() {
            this.state.eventsEnabled || (this.state = j(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function q(e, t) {
            return F(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }

        function W() {
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = q(this.reference, this.state))
        }

        function G(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function K(e, t) {
            Object.keys(t).forEach(function (n) {
                var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && G(t[n]) && (r = "px"), e.style[n] = t[n] + r
            })
        }

        function z(e, t) {
            Object.keys(t).forEach(function (n) {
                !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
            })
        }

        function Y(e) {
            return K(e.instance.popper, e.styles), z(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && K(e.arrowElement, e.arrowStyles), e
        }

        function J(e, t, n, r, o) {
            var i = O(o, t, e, n.positionFixed),
                a = x(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
            return t.setAttribute("x-placement", a), K(t, {
                position: n.positionFixed ? "fixed" : "absolute"
            }), n
        }

        function X(e, t) {
            var n = e.offsets,
                r = n.popper,
                o = n.reference,
                i = Math.round,
                a = Math.floor,
                s = function (e) {
                    return e
                },
                l = i(o.width),
                c = i(r.width),
                u = -1 !== ["left", "right"].indexOf(e.placement),
                d = -1 !== e.placement.indexOf("-"),
                g = l % 2 == c % 2,
                f = l % 2 == 1 && c % 2 == 1,
                p = t ? u || d || g ? i : a : s,
                m = t ? i : s;
            return {
                left: p(f && !d && t ? r.left - 1 : r.left),
                top: m(r.top),
                bottom: m(r.bottom),
                right: p(r.right)
            }
        }

        function Q(e, t) {
            var n = t.x,
                r = t.y,
                o = e.offsets.popper,
                i = L(e.instance.modifiers, function (e) {
                    return "applyStyle" === e.name
                }).gpuAcceleration;
            void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
            var a = void 0 !== i ? i : t.gpuAcceleration,
                s = u(e.instance.popper),
                l = E(s),
                c = {
                    position: o.position
                },
                d = X(e, window.devicePixelRatio < 2 || !Ie),
                g = "bottom" === n ? "top" : "bottom",
                f = "right" === r ? "left" : "right",
                p = M("transform"),
                m = void 0,
                v = void 0;
            if (v = "bottom" === g ? "HTML" === s.nodeName ? -s.clientHeight + d.bottom : -l.height + d.bottom : d.top, m = "right" === f ? "HTML" === s.nodeName ? -s.clientWidth + d.right : -l.width + d.right : d.left, a && p) c[p] = "translate3d(" + m + "px, " + v + "px, 0)", c[g] = 0, c[f] = 0, c.willChange = "transform";
            else {
                var h = "bottom" === g ? -1 : 1,
                    y = "right" === f ? -1 : 1;
                c[g] = v * h, c[f] = m * y, c.willChange = g + ", " + f
            }
            var b = {
                "x-placement": e.placement
            };
            return e.attributes = Ee({}, b, e.attributes), e.styles = Ee({}, c, e.styles), e.arrowStyles = Ee({}, e.offsets.arrow, e.arrowStyles), e
        }

        function $(e, t, n) {
            var r = L(e, function (e) {
                    return e.name === t
                }),
                o = !!r && e.some(function (e) {
                    return e.name === n && e.enabled && e.order < r.order
                });
            if (!o) {
                var i = "`" + t + "`",
                    a = "`" + n + "`";
                console.warn(a + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
            }
            return o
        }

        function Z(e, t) {
            var n = void 0;
            if (!$(e.instance.modifiers, "arrow", "keepTogether")) return e;
            var r = t.element;
            if ("string" == typeof r) {
                if (!(r = e.instance.popper.querySelector(r))) return e
            } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
            var o = e.placement.split("-")[0],
                a = e.offsets,
                s = a.popper,
                l = a.reference,
                c = -1 !== ["left", "right"].indexOf(o),
                u = c ? "height" : "width",
                d = c ? "Top" : "Left",
                g = d.toLowerCase(),
                f = c ? "left" : "top",
                p = c ? "bottom" : "right",
                m = _(r)[u];
            l[p] - m < s[g] && (e.offsets.popper[g] -= s[g] - (l[p] - m)), l[g] + m > s[p] && (e.offsets.popper[g] += l[g] + m - s[p]), e.offsets.popper = b(e.offsets.popper);
            var v = l[g] + l[u] / 2 - m / 2,
                h = i(e.instance.popper),
                y = parseFloat(h["margin" + d], 10),
                E = parseFloat(h["border" + d + "Width"], 10),
                I = v - e.offsets.popper[g] - y - E;
            return I = Math.max(Math.min(s[u] - m, I), 0), e.arrowElement = r, e.offsets.arrow = (n = {}, be(n, g, Math.round(I)), be(n, f, ""), n), e
        }

        function ee(e) {
            return "end" === e ? "start" : "start" === e ? "end" : e
        }

        function te(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = Te.indexOf(e),
                r = Te.slice(n + 1).concat(Te.slice(0, n));
            return t ? r.reverse() : r
        }

        function ne(e, t) {
            if (D(e.instance.modifiers, "inner")) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            var n = S(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                r = e.placement.split("-")[0],
                o = A(r),
                i = e.placement.split("-")[1] || "",
                a = [];
            switch (t.behavior) {
                case we.FLIP:
                    a = [r, o];
                    break;
                case we.CLOCKWISE:
                    a = te(r);
                    break;
                case we.COUNTERCLOCKWISE:
                    a = te(r, !0);
                    break;
                default:
                    a = t.behavior
            }
            return a.forEach(function (s, l) {
                if (r !== s || a.length === l + 1) return e;
                r = e.placement.split("-")[0], o = A(r);
                var c = e.offsets.popper,
                    u = e.offsets.reference,
                    d = Math.floor,
                    g = "left" === r && d(c.right) > d(u.left) || "right" === r && d(c.left) < d(u.right) || "top" === r && d(c.bottom) > d(u.top) || "bottom" === r && d(c.top) < d(u.bottom),
                    f = d(c.left) < d(n.left),
                    p = d(c.right) > d(n.right),
                    m = d(c.top) < d(n.top),
                    v = d(c.bottom) > d(n.bottom),
                    h = "left" === r && f || "right" === r && p || "top" === r && m || "bottom" === r && v,
                    y = -1 !== ["top", "bottom"].indexOf(r),
                    b = !!t.flipVariations && (y && "start" === i && f || y && "end" === i && p || !y && "start" === i && m || !y && "end" === i && v),
                    E = !!t.flipVariationsByContent && (y && "start" === i && p || y && "end" === i && f || !y && "start" === i && v || !y && "end" === i && m),
                    I = b || E;
                (g || h || I) && (e.flipped = !0, (g || h) && (r = a[l + 1]), I && (i = ee(i)), e.placement = r + (i ? "-" + i : ""), e.offsets.popper = Ee({}, e.offsets.popper, P(e.instance.popper, e.offsets.reference, e.placement)), e = B(e.instance.modifiers, e, "flip"))
            }), e
        }

        function re(e) {
            var t = e.offsets,
                n = t.popper,
                r = t.reference,
                o = e.placement.split("-")[0],
                i = Math.floor,
                a = -1 !== ["top", "bottom"].indexOf(o),
                s = a ? "right" : "bottom",
                l = a ? "left" : "top",
                c = a ? "width" : "height";
            return n[s] < i(r[l]) && (e.offsets.popper[l] = i(r[l]) - n[c]), n[l] > i(r[s]) && (e.offsets.popper[l] = i(r[s])), e
        }

        function oe(e, t, n, r) {
            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                i = +o[1],
                a = o[2];
            if (!i) return e;
            if (0 === a.indexOf("%")) {
                var s = void 0;
                switch (a) {
                    case "%p":
                        s = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        s = r
                }
                return b(s)[t] / 100 * i
            }
            if ("vh" === a || "vw" === a) {
                return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i
            }
            return i
        }

        function ie(e, t, n, r) {
            var o = [0, 0],
                i = -1 !== ["right", "left"].indexOf(r),
                a = e.split(/(\+|\-)/).map(function (e) {
                    return e.trim()
                }),
                s = a.indexOf(L(a, function (e) {
                    return -1 !== e.search(/,|\s/)
                }));
            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
            return c = c.map(function (e, r) {
                var o = (1 === r ? !i : i) ? "height" : "width",
                    a = !1;
                return e.reduce(function (e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                }, []).map(function (e) {
                    return oe(e, o, t, n)
                })
            }), c.forEach(function (e, t) {
                e.forEach(function (n, r) {
                    G(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1))
                })
            }), o
        }

        function ae(e, t) {
            var n = t.offset,
                r = e.placement,
                o = e.offsets,
                i = o.popper,
                a = o.reference,
                s = r.split("-")[0],
                l = void 0;
            return l = G(+n) ? [+n, 0] : ie(n, i, a, s), "left" === s ? (i.top += l[0], i.left -= l[1]) : "right" === s ? (i.top += l[0], i.left += l[1]) : "top" === s ? (i.left += l[0], i.top -= l[1]) : "bottom" === s && (i.left += l[0], i.top += l[1]), e.popper = i, e
        }

        function se(e, t) {
            var n = t.boundariesElement || u(e.instance.popper);
            e.instance.reference === n && (n = u(n));
            var r = M("transform"),
                o = e.instance.popper.style,
                i = o.top,
                a = o.left,
                s = o[r];
            o.top = "", o.left = "", o[r] = "";
            var l = S(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
            o.top = i, o.left = a, o[r] = s, t.boundaries = l;
            var c = t.priority,
                d = e.offsets.popper,
                g = {
                    primary: function (e) {
                        var n = d[e];
                        return d[e] < l[e] && !t.escapeWithReference && (n = Math.max(d[e], l[e])), be({}, e, n)
                    },
                    secondary: function (e) {
                        var n = "right" === e ? "left" : "top",
                            r = d[n];
                        return d[e] > l[e] && !t.escapeWithReference && (r = Math.min(d[n], l[e] - ("right" === e ? d.width : d.height))), be({}, n, r)
                    }
                };
            return c.forEach(function (e) {
                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                d = Ee({}, d, g[t](e))
            }), e.offsets.popper = d, e
        }

        function le(e) {
            var t = e.placement,
                n = t.split("-")[0],
                r = t.split("-")[1];
            if (r) {
                var o = e.offsets,
                    i = o.reference,
                    a = o.popper,
                    s = -1 !== ["bottom", "top"].indexOf(n),
                    l = s ? "left" : "top",
                    c = s ? "width" : "height",
                    u = {
                        start: be({}, l, i[l]),
                        end: be({}, l, i[l] + i[c] - a[c])
                    };
                e.offsets.popper = Ee({}, a, u[r])
            }
            return e
        }

        function ce(e) {
            if (!$(e.instance.modifiers, "hide", "preventOverflow")) return e;
            var t = e.offsets.reference,
                n = L(e.instance.modifiers, function (e) {
                    return "preventOverflow" === e.name
                }).boundaries;
            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                if (!0 === e.hide) return e;
                e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
            } else {
                if (!1 === e.hide) return e;
                e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
            }
            return e
        }

        function ue(e) {
            var t = e.placement,
                n = t.split("-")[0],
                r = e.offsets,
                o = r.popper,
                i = r.reference,
                a = -1 !== ["left", "right"].indexOf(n),
                s = -1 === ["top", "left"].indexOf(n);
            return o[a ? "left" : "top"] = i[n] - (s ? o[a ? "width" : "height"] : 0), e.placement = A(t), e.offsets.popper = b(o), e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        /** !
         * LOCAL VERSION
         * @fileOverview Kickass library to create and place poppers near their reference elements.
         * @version 1.16.0
         * @license
         * Copyright (c) 2016 Federico Zivolo and contributors
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE.
         */
        var de = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
            ge = function () {
                for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                    if (de && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                return 0
            }(),
            fe = de && window.Promise,
            pe = fe ? n : r,
            me = de && !(!window.MSInputMethodContext || !document.documentMode),
            ve = de && /MSIE 10/.test(navigator.userAgent),
            he = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            ye = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            be = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            },
            Ee = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            Ie = de && /Firefox/i.test(navigator.userAgent),
            Ce = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            Te = Ce.slice(3),
            we = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            },
            Se = {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: le
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: ae,
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: se,
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: re
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: Z,
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: ne,
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: ue
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: ce
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: Q,
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: Y,
                    onLoad: J,
                    gpuAcceleration: void 0
                }
            },
            ke = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () {},
                onUpdate: function () {},
                modifiers: Se
            },
            xe = function () {
                function e(t, n) {
                    var r = this,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    he(this, e), this.scheduleUpdate = function () {
                        return requestAnimationFrame(r.update)
                    }, this.update = pe(this.update.bind(this)), this.options = Ee({}, e.Defaults, i), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(Ee({}, e.Defaults.modifiers, i.modifiers)).forEach(function (t) {
                        r.options.modifiers[t] = Ee({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
                    }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                        return Ee({
                            name: e
                        }, r.options.modifiers[e])
                    }).sort(function (e, t) {
                        return e.order - t.order
                    }), this.modifiers.forEach(function (e) {
                        e.enabled && o(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                    }), this.update();
                    var a = this.options.eventsEnabled;
                    a && this.enableEventListeners(), this.state.eventsEnabled = a
                }
                return ye(e, [{
                    key: "update",
                    value: function () {
                        return R.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        return U.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function () {
                        return H.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function () {
                        return W.call(this)
                    }
                }]), e
            }();
        xe.Utils = ("undefined" != typeof window ? window : e).PopperUtils, xe.placements = Ce, xe.Defaults = ke, t.default = xe
    }).call(t, n(131))
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        return function (r) {
            r.listenerId === e && (n(r), u.removeListener(t))
        }
    }

    function o(e) {
        (0, l.isFunction)(e) && c.push(e)
    }

    function i() {
        c = []
    }

    function a() {
        c.forEach(function (e) {
            (0, l.isFunction)(e) && e(), c.shift()
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.botEventEmmiter = void 0, t.addCommandToBotQueue = o, t.clearBotCommands = i, t.runBotCommands = a;
    var s = n(10),
        l = n(0),
        c = [],
        u = t.botEventEmmiter = new function () {
            var e = {},
                t = {};
            this.dispatchEvent = function (t, n, r) {
                n === e[t] && s.internalEventListener.dispatchEvent(t, Object.assign({
                    listenerId: n
                }, r))
            }, this.addListener = function (n, o, i) {
                u.removeListener(n), e[n] = i;
                var a = r(i, n, o);
                t[i] || (t[i] = {}), t[i][n] = a, s.internalEventListener.addListener(n, a)
            }, this.removeListener = function (n) {
                var r = e[n];
                if (r) {
                    var o = t[r][n];
                    s.internalEventListener.removeListener(n, o), e[n] = null, delete e[n]
                }
            }
        }
}, function (e, t, n) {
    "use strict";

    function r() {
        try {
            return ["TUUD4GR54UIT", "FR6WJFXU3UWQ", "VFU6ONL15QEY"].indexOf((0, y.getProduct)(b.eventTrackData[E.cacheGet](b.productIdParameter))) > -1
        } catch (e) {
            return m.logger.log("isTrimble " + e), !1
        }
    }

    function o(e, t, n, r) {
        var o = r.onDone,
            i = r.onFailed,
            s = r.onClick;
        try {
            var l = n.positionType,
                u = {
                    matchCssSelector: !0,
                    cssSelector: e,
                    matchTextRule: !1,
                    textRuleOperator: null,
                    textRuleValues: null
                };
            (0, g.findInAll)(u, null, function (e) {
                if (e && e.element) {
                    var r = !("fixed" === l || "absolute" === l),
                        u = e.element;
                    k = u;
                    !r && (0, p.isElementVisible)(u) || r ? (c(n, t, s), o && o(e)) : (a(), i && i())
                } else i && i()
            })
        } catch (e) {
            m.logger.logInternalError(new Error("findWidgetContainer - error " + e)), i && i()
        }
    }

    function i(e) {
        if (e.target === k) return e.preventDefault(), e.stopImmediatePropagation(), !1
    }

    function a() {
        _.forEach(function (e) {
            (0, p.removeEventListener)(document, e, i)
        })
    }

    function s() {
        _.forEach(function (e) {
            (0, p.removeEventListener)(document, e, i), (0, p.addEventListener)(document, e, i)
        })
    }

    function l(e, t, n) {
        try {
            var r = n.onDone,
                o = n.onFound,
                i = (n.onClick, n.onFailed, t.positionType),
                a = !("fixed" === i || "absolute" === i),
                s = e.element;
            o && o(e);
            var l = document.querySelector("#apt-widget");
            if (l && r) {
                if (l.classList.remove("apt-hidden"), l.style.position = a ? "relative" : "absolute", l.style.width = "0px", l.style.height = "0px", l.style.left = "0px", l.style.top = "0px", l.style.zIndex = S, a) {
                    if (a) {
                        var c = s.tagName.toLowerCase();
                        if (/br|input|img|select|textarea/.test(c)) {
                            var u = l.parentNode === s.parentNode;
                            u || s.parentNode.appendChild(l)
                        } else s !== l.parentNode && s.appendChild(l)
                    }
                } else l.parentNode !== (0, C.getBody)() && (0, C.getBody)().appendChild(l);
                r && r(e)
            }
        } catch (e) {
            m.logger.logInternalError(new Error("injectWidget - " + e))
        }
    }

    function c(e, t, n) {
        var r = "API" === e.fetchKcType,
            o = !0 === e.isNewAPI,
            i = !("fixed" === e.positionType || "absolute" === e.positionType);
        !r || o ? (A = function (t) {
            var i = t.kcId;
            i === e.kcId && (O = i, d(n, r, o), o ? ((0, h.runBotCommands)(), h.botEventEmmiter.removeListener("WIDGET_LOADED")) : v.botEventEmmiter.removeListener("WIDGET_LOADED"))
        }, o ? h.botEventEmmiter.addListener("WIDGET_LOADED", A, t) : v.botEventEmmiter.addListener("WIDGET_LOADED", A, t), O !== e.kcId || i ? O === e.kcId && i || a() : d(n, r, o)) : a()
    }

    function u(e, t, n, r) {
        var i = r.onDone,
            s = r.onFound,
            c = r.onClick,
            u = r.onFailed;
        try {
            "string" != typeof e && m.logger.logInternalError(new Error("injectWidgetToTargetElement - cssSelector should be a string " + e)), n.isNewAPI ? h.botEventEmmiter.removeListener("WIDGET_FAILED") : v.botEventEmmiter.removeListener("WIDGET_FAILED"), P = function (e) {
                e.kcId === n.kcId && (O = "", a())
            }, n.isNewAPI ? h.botEventEmmiter.addListener("WIDGET_FAILED", P, t) : v.botEventEmmiter.addListener("WIDGET_FAILED", P, t), o(e, t, n, {
                onClick: c,
                onDone: function (e) {
                    s && s(e), l(e, n, {
                        onDone: i
                    })
                },
                onFailed: u
            })
        } catch (e) {
            m.logger.logInternalError(new Error("injectWidgetToTargetElement - error " + e))
        }
    }

    function d(e, t, n) {
        try {
            (0, p.removeEventListener)(document, "click", x), x = function (t) {
                try {
                    if (t.target === k || k.contains(t.target)) {
                        t.preventDefault(), t.stopImmediatePropagation();
                        var n = (0, C.isIframe)() ? (0, T.getIframeId)() : w.TOP_WINDOW_ID;
                        f.internalEventListener.dispatchEvent(I.IFRAME_TO_TOP_EVENTS.BOT_ELEMENT_CLICK, n), e()
                    } else r() && f.internalEventListener.dispatchEvent(I.BOT_INTERNAL_EVENTS.BOT_CLICK_OUTSIDE);
                    return !1
                } catch (e) {
                    m.logger.log("Embedded bot click event " + e)
                }
            }, t && !n || (s(), (0, p.addEventListener)(document, "click", x))
        } catch (e) {
            m.logger.logInternalError(new Error("addClickListenerToMappedElement - error " + e))
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.findWidgetContainer = o, t.removeEmbeddedListeners = a, t.injectWidgetToTargetElement = u, t.addClickListenerToMappedElement = d;
    var g = n(17),
        f = n(10),
        p = n(0),
        m = n(3),
        v = n(84),
        h = n(53),
        y = n(18),
        b = n(4),
        E = n(5),
        I = n(22),
        C = n(1),
        T = n(13),
        w = n(45),
        S = "99998",
        k = null,
        x = null,
        O = "",
        _ = ["dblclick", "mousedown", "mouseover"],
        A = void 0,
        P = void 0
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if ((0, u.isBlank)(e) || !t) return !0;
        var n = (0, f.getEnvironment)(p.eventTrackData[m.cacheGet](p.productIdParameter));
        if (c.logger.debugMode && n !== v.PROD_ENVIRONMENT) return !0;
        var r = (0, s.getCachedConfig)(l.BOT_CHECKSUM_KEY),
            o = (0, s.getConfig)(l.ENGAGEMENT_CHECKSUM_URL_CONFIG);
        if (!o) return !0;
        if (!r && o) return c.logger.logInternalError(new Error("the bot checksum is invalid since there is URL configured but no checksum to validated against")), !1;
        var i = r[e];
        if (!i && !Array.isArray(i) || (0, u.isEmptyArr)(i)) return c.logger.logInternalError(new Error("the bot checksum is invalid since there is URL configured but no checksum to validated against, array is empty")), !1;
        var a = (0, d.orderAlphabetically)(t),
            h = (0, g.sha256)(JSON.stringify(a)),
            y = i.indexOf(h) > -1;
        return y || (c.logger.logInternalError(new Error("the bot checksum is invalid, js checksum: " + h + ". engagement checksums:\n         " + JSON.stringify(i))), c.logger.logInternalError(new Error("the bot checksum was done on: " + JSON.stringify(a)))), y
    }

    function o(e, t, n) {
        for (var o = 0; o < n.length; o++) {
            if (!0 === r(e, n[o](t))) return !0
        }
        return !1
    }

    function i(e, t) {
        var n = (0, s.getCachedConfig)(l.CHECKSUM_VERSION),
            r = void 0;
        return r = void 0 === n || n <= 2 ? [C, b] : 3 === n ? [h.filterKcConfigV3] : [C, b], o(e, t, r)
    }

    function a(e, t) {
        var n = (0, s.getCachedConfig)(l.CHECKSUM_VERSION),
            r = void 0;
        return r = void 0 === n || n <= 2 ? [T, E] : 3 === n ? [h.filterKcContentV3] : [T, E], o(e, t, r)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateContentChecksum = t.validateConfigChecksum = void 0;
    var s = n(1),
        l = n(49),
        c = n(3),
        u = n(0),
        d = n(27),
        g = n(83),
        f = n(18),
        p = n(4),
        m = n(5),
        v = n(8),
        h = n(135),
        y = n(133),
        b = y.filterKcConfigV1,
        E = y.filterKcContentV1,
        I = n(134),
        C = I.filterKcConfigV2,
        T = I.filterKcContentV2;
    t.validateConfigChecksum = i, t.validateContentChecksum = a
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = l[e.type];
        return n.matchRules(e.rules, e.operator, t[n.getAttribute()])
    }

    function o(e, t) {
        var n = e.rules;
        return !!(0, s.isEmptyArr)(n) || ("all" === e.operator ? n.every(function (e) {
            return r(e, t)
        }) : n.some(function (e) {
            return r(e, t)
        }))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.matchMultiTypeRules = void 0;
    var i = n(137),
        a = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i),
        s = n(0),
        l = {
            URL: a.default
        };
    t.matchMultiTypeRules = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.eventCache = void 0;
    var r = n(5);
    t.eventCache = new r.LocalCache
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.LocalStorageCookie = void 0;
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(11);
    t.LocalStorageCookie = function () {
        function e() {
            r(this, e)
        }
        return o(e, null, [{
            key: "setCookie",
            value: function (e, t, n) {
                var r = void 0;
                if (n) {
                    r = Date.now() + n
                }
                var o = {
                    value: encodeURIComponent(t),
                    expires: r
                };
                localStorage.setItem(e, (0, i.jsonStringify)(o))
            }
        }, {
            key: "getCookie",
            value: function (e) {
                var t = localStorage.getItem(e);
                if (!t) return null;
                var n = JSON.parse(t);
                return n.expires && Date.now() > n.expires ? (localStorage.removeItem(e), null) : decodeURIComponent(n.value)
            }
        }, {
            key: "getAllCookieVal",
            value: function (t) {
                var n = e.getCookie(t);
                return n ? [n] : null
            }
        }, {
            key: "deleteCookie",
            value: function (e) {
                localStorage.removeItem(e)
            }
        }, {
            key: "getCookiesRaw",
            value: function () {
                return ""
            }
        }]), e
    }()
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o() {
        return (0, s.getConfig)("fullDomainCookie") ? location.hostname : (0, l.getDomain)()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NativeCookie = void 0;
    var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(4),
        s = n(1),
        l = n(9),
        c = encodeURIComponent,
        u = decodeURIComponent;
    t.NativeCookie = function () {
        function e() {
            r(this, e)
        }
        return i(e, null, [{
            key: "setCookie",
            value: function (e, t, n, r, i) {
                if (!(0, s.isIframe)()) {
                    var u = void 0,
                        d = r || o();
                    if (n) {
                        var g = Date.now();
                        u = new Date, u.setTime(g + n)
                    }
                    if (!i) {
                        var f = (0, s.getConfig)("fullDomainCookie") ? (0, l.getDomain)() : location.hostname;
                        this.deleteCookie(e, f)
                    }
                    a.documentRef.cookie = e + "=" + c(t) + (u ? "; expires=" + u.toUTCString() : "") + "; path=/" + (d && d.trim().length > 0 ? "; domain=" + d : "") + (0, l.getSameSiteCookieSuffix)()
                }
            }
        }, {
            key: "getCookieValues",
            value: function (e) {
                for (var t = a.documentRef.cookie.split(";"), n = void 0, r = [], o = void 0, i = 0; i < t.length; i++) n = t[i], n = n.trim(), o = n.split("="), 2 === o.length && o[0] === e && r.push(o[1]);
                return r
            }
        }, {
            key: "getCookie",
            value: function (t, n) {
                var r = e.getCookieValues(t);
                return r.length > 0 && n && r.every(function (e) {
                    return e === r[0]
                }) ? u(r[0].trim()) : 1 === r.length ? u(r[0].trim()) : null
            }
        }, {
            key: "getAllCookieVal",
            value: function (t) {
                var n = e.getCookieValues(t);
                if (n.length > 0)
                    for (var r = 0; r < n.length; r++) n[r] = u(n[r].trim());
                return n.length > 0 ? n : null
            }
        }, {
            key: "deleteCookie",
            value: function (t, n) {
                e.setCookie(t, null, -1, n, !0)
            }
        }, {
            key: "getCookiesRaw",
            value: function () {
                return a.documentRef.cookie
            }
        }]), e
    }()
}, , , function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o() {
        var e = (0, l.removeFromQueryParam)(K);
        (e = (0, l.removeFromQueryParam)(z)) !== g.windowRef.location.href && history.replaceState("", document.title, e)
    }

    function i(e) {
        var t = e.querySelector(".apt-guide-content-wrapper"),
            n = e.querySelector((0, O.getSelectorByVersion)(document, "apt-step-footer"));
        if (n) {
            var r = n.getBoundingClientRect();
            t.style.maxHeight = "calc(90vh - " + r.height + "px)"
        } else t.style.maxHeight = "90vh";
        t.style.overflowY = "auto"
    }

    function a() {
        var e = !!g.windowRef.angular;
        return (0, x.getConfig)("queryParamsInHash") && e
    }

    function s(e, t, n) {
        if (n) g.windowRef.history.replaceState({}, g.documentRef.title, e), "function" == typeof t && t();
        else {
            g.windowRef.location.href = e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getSelectorByVersion = t.GuideDrawerIframe = void 0;
    var l = n(0),
        c = n(33),
        u = r(c),
        d = n(12),
        g = n(4),
        f = n(5),
        p = n(3),
        m = n(9),
        v = n(92),
        h = n(10),
        y = n(6),
        b = n(17),
        E = r(b),
        I = n(14),
        C = r(I),
        T = n(7),
        w = n(32),
        S = n(88),
        k = r(S),
        x = n(1),
        O = n(122),
        _ = r(O),
        A = n(121),
        P = n(74),
        L = r(P),
        N = n(15),
        B = n(8),
        R = n(123),
        D = n(19),
        M = n(20),
        U = n(21),
        F = (n(101), n(31));
    F.defaultOptions.className = "vex-theme-os", F.defaultOptions.closeAllOnPopState = !1;
    var V = B.TAB_INDEX_START,
        j = void 0,
        H = "div",
        q = "classList",
        W = 2,
        G = "aptCurrentGuideUrl",
        K = "aptGuideId",
        z = "aptActivationType",
        Y = function (e, t, n, r) {
            function c() {
                return !(0, x.getConfig)("tooltipDynamicReposition") && dt
            }

            function I() {
                return ct || (0, x.getBody)()
            }

            function S(e) {
                return e.querySelectorAll("#px-editor-v2-content").length > 0
            }

            function P(e) {
                -1 !== [Gt, Kt, zt, Yt].indexOf(e.target) && e.stopImmediatePropagation()
            }

            function K() {
                ["click", "mousedown", "mouseup", "touchstart"].forEach(function (e) {
                    (0, l.addEventListener)(g.documentRef, e, P)
                })
            }

            function z() {
                ["click", "mousedown", "mouseup", "touchstart"].forEach(function (e) {
                    (0, l.removeEventListener)(g.documentRef, e, P)
                })
            }

            function Y() {
                var e = g.eventTrackData[f.cacheGetAll](),
                    t = JSON.parse(g.windowRef.sessionStorage.getItem("apt.localCache"));
                return (0, x.getConfig)("crossProductEngagement") && t && (e = t), e
            }

            function J(e) {
                var t = x.trackMultiStepEndpoint;
                if (dt && !0 !== At) {
                    2 === e && (At = !0);
                    var n = [];
                    n = (0, l.addParameters)(Y(), n), (0, l.addParameters)({
                        ei: St.engagementId || null,
                        ecoi: St.contentId || null,
                        ems: e || null,
                        evi: St.matchEventId || null,
                        ent: W,
                        acci: St.accountId,
                        exi: St.executionId,
                        ext: St.executionTimestamp,
                        cl: St.contentLocale,
                        at: St.activationType || "a"
                    }, n), Xt && "kc" === St.activationType && (0, l.addParameters)(Xt, n);
                    var r = (0, M.getGlobalContext)();
                    r && (0, l.addParameters)({
                        gcx: JSON.stringify(r)
                    }, n), n = (0, l.addParameters)((0, U.getWebContext)(), n), t += "?" + (0, l.convert2Parameters)(n), d.AjaxUtil.getData(t)
                }
            }

            function X(e, t) {
                if (dt && !k.default.wasStepTracked(St.executionId, e)) {
                    k.default.markStepTracked(St.executionId, e), (0, x.getConfig)("clientSideEngagementTracking") && 0 === t && J(1);
                    var n = x.trackStepEndpoint,
                        r = [];
                    r = (0, l.addParameters)(Y(), r), (0, l.addParameters)({
                        ei: St.engagementId,
                        ecoi: St.contentId,
                        cosi: e,
                        evi: St.matchEventId,
                        cossn: t,
                        ent: W,
                        acci: St.accountId,
                        exi: St.executionId,
                        ext: St.executionTimestamp,
                        cl: St.contentLocale,
                        at: St.activationType || "a"
                    }, r);
                    var o = (0, M.getGlobalContext)();
                    o && (0, l.addParameters)({
                        gcx: JSON.stringify(o)
                    }, r), r = (0, l.addParameters)((0, U.getWebContext)(), r), n += "?" + (0, l.convert2Parameters)(r), d.AjaxUtil.getData(n);
                    var i = (0, N.toExternalEventGuide)(St, "Viewed Step");
                    i.stepNumber = t + 1, h.internalEventListener.dispatchEvent("engagementViewedStep", i)
                }
            }

            function Q(e) {
                return ["TOOLTIP", "HOTSPOT"].indexOf(e.type) > -1 && e.elementSelector || "DIALOG" === e.type && ("BAR" === e.dialogViewType && e.barPosition || e.positionHorizontal && e.positionVertical)
            }

            function $(e) {
                wt.forEach(function (t, n) {
                    t.id === e && (Ct = n)
                }), ie()
            }

            function Z(e) {
                Object.keys(yt).forEach(function (e) {
                    var t = yt[e],
                        n = t.element,
                        r = t.event,
                        o = t.handler;
                    (0, l.removeEventListener)(n, r, o), delete yt[e]
                })
            }

            function ee(e) {
                Nt && e && e.isDom && ((0, l.removeEventListener)(e.element, "click", Nt), (0, l.removeEventListener)(e.element, "contextmenu", Nt), (0, l.removeEventListener)(e.element, "mouseenter", Nt), Ve(e), Bt && (0, l.removeEventListener)(e.element, "keydown", Bt))
            }

            function te(e) {
                Z(), e && e.isDom && ee(e), !(0, x.isIframe)() && e && !e.isDom && e.iframeSource && E.default.removeElementHandlers(e.iframeSource), R.hotspotEventHandler.removeListener()
            }

            function ne(e, t) {
                var n = !1;
                return t && "HOTSPOT" !== t.type && (n = t.overlay && t.overlay.modal ? t.overlayFill > 0 : e && e.modal && e.overlayFill > 0), n
            }

            function re(e) {
                return !ne(e, wt[Tt])
            }

            function oe() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                e || (e = document.querySelector(".apt-hotspot-element")), e && e.parentNode && I().removeChild(e)
            }

            function ie(e) {
                It = Ct, Tt = Ct, Ie(), Wt = !1, Et.length > 0 && Et.pop().close(), Wt = !0, te();
                for (var t = wt[Tt]; Tt < wt.length && !Q(t);) t = wt[++Tt];
                if (void 0 === t) return Et[0] && Et.pop().close(), te(), oe(), void(kt && kt());
                Ct = Tt + 1;
                for (var n = wt[Ct]; Ct < wt.length && !Q(n);) n = wt[++Ct];
                try {
                    e && e > 0 ? setTimeout(function () {
                        se(t.elementSelector, t.type, function (n, r) {
                            if (("TOOLTIP" === r || "HOTSPOT" === r) && null === n) return void(t.skippable ? ie(e) : (nt(), kt && kt(t.elementSelector)));
                            ye(n, St.footer, t.content, St, t)
                        }, void 0, t.autoScroll, t.searchTimeout, t.skippable)
                    }, e) : ["TOOLTIP", "HOTSPOT"].indexOf(t.type) > -1 ? setTimeout(function () {
                        se(t.elementSelector, t.type, function (n, r) {
                            if (["TOOLTIP", "HOTSPOT"].indexOf(r) > -1 && null === n) return void(t.skippable ? ie(e) : (nt(), kt && kt(t.elementSelector)));
                            ye(n, St.footer, t.content, St, t)
                        }, void 0, t.autoScroll, t.searchTimeout, t.skippable)
                    }, 0) : ye(null, St.footer, t.content, St, t)
                } catch (e) {
                    throw pe(), Te(), e
                }
            }

            function ae(e, t) {
                try {
                    var n = St.engagementId,
                        r = e ? e.cssSelector : "MISSING",
                        o = n + "_" + r;
                    if (!bt[o]) {
                        bt[o] = !0;
                        var i = {
                            entityId: n,
                            errorType: "ENGAGEMENT_MISSING_ELEMENT",
                            engagementErrorData: {
                                mappedElementId: r,
                                engagementId: n,
                                engagementType: "IN_APP_GUIDE",
                                stepId: wt[Tt] && wt[Tt].id || ""
                            },
                            flowType: "ENGAGEMENT",
                            exceptionDetails: "element is not found after: " + t,
                            aptrinsicId: g.eventTrackData.data[g.aptrinsicIdParam] || null,
                            sessionId: g.eventTrackData.data[g.sessionIdParam] || null
                        };
                        p.logger.logInternalMessage(i)
                    }
                } catch (e) {
                    p.logger.log("error sending element not found log.\n" + e.message), Te()
                }
            }

            function se(e, t, n, r, o, i, a) {
                var s = i > 0 ? i : pt;
                if (-1 === ["TOOLTIP", "HOTSPOT"].indexOf(t)) return void n(null, t);
                var c = (new Date).getTime(),
                    u = void 0;
                (0, b.findInAll)(e, (0, y.getRegisteredIframes)(), function (d) {
                    r = r || c;
                    var g = c - r;
                    if (g > s) return dt && !a && ae(e, g), void n(null, t);
                    if (d || setTimeout(function () {
                            se(e, t, n, r, o, i, a)
                        }, 500), d && d.element) {
                        if (u = d.element, (0, l.isElementVisible)(u, !1, null) && g <= s) return void n({
                            isDom: !0,
                            element: u,
                            isVisible: d.isVisible
                        }, t);
                        setTimeout(function () {
                            se(e, t, n, r, o, i, a)
                        }, 500)
                    } else d && d.iframeData && setTimeout(function () {
                        E.default.getElementLocation(d.iframeData, e, function (e) {
                            n({
                                isDom: !1,
                                elementRect: e[0],
                                iframeSource: d.iframeData,
                                isVisible: d.isVisible,
                                iframeOrigin: y.IframeData.iframeOrigin
                            }, t)
                        })
                    }, o ? 800 : 0)
                }, !1, !1, o)
            }

            function le() {
                Ct = Tt;
                for (var e = wt[--Tt]; !Q(e);) e = wt[--Tt];
                It = Tt - 1;
                for (var t = wt[It]; It > -1 && !Q(t);) t = wt[--It];
                se(e.elementSelector, e.type, function (t) {
                    if (null === t && "DIALOG" !== e.type) return void le();
                    try {
                        ye(t, St.footer, e.content, St, e)
                    } catch (e) {
                        throw pe(), Te(), e
                    }
                }, void 0, e.autoScroll, e.searchTimeout, e.skippable)
            }

            function ce(e) {
                e.classList.contains("apt-guide-arrow-bottom") && e.classList.remove("apt-guide-arrow-bottom"), e.classList.contains("apt-guide-arrow-top") && e.classList.remove("apt-guide-arrow-top"), e.classList.contains("apt-guide-arrow-right") && e.classList.remove("apt-guide-arrow-right"), e.classList.contains("apt-guide-arrow-left") && e.classList.remove("apt-guide-arrow-left"), e.classList.remove("apt-guide-arrow-top-left"), e.classList.remove("apt-guide-arrow-top-right"), e.classList.remove("apt-guide-arrow-bottom-right"), e.classList.remove("apt-guide-arrow-bottom-left"), e.classList.remove("apt-guide-arrow-top-center"), e.classList.remove("apt-guide-arrow-center")
            }

            function ue(e, t) {
                var n = "." + e + "::after{border-color:" + t + ";}",
                    r = document.getElementById("apt-guide-arrow-style");
                null === r ? r = (0, l.createStyle)(n, "apt-guide-arrow-style") : r.styleSheet ? r.styleSheet.cssText = n : (r.innerHTML = "", r.appendChild(document.createTextNode(n))), I().appendChild(r)
            }

            function de(e, t, n) {
                if (ce(t), (0, l.isNotEmptyArr)(e)) {
                    var r = "",
                        o = "",
                        i = "";
                    "top" === e[1] ? (r = "apt-guide-arrow-bottom", n && (o = n + " transparent transparent transparent"), "right" === e[0] ? (t.style.borderBottomLeftRadius = "0", i = "apt-guide-arrow-bottom-left") : "left" === e[0] ? (t.style.borderBottomRightRadius = "0", i = "apt-guide-arrow-bottom-right") : i = "apt-guide-arrow-center") : "bottom" === e[1] ? (r = "apt-guide-arrow-top", n && (o = "transparent transparent " + n + " transparent"), "right" === e[0] ? (t.style.borderTopLeftRadius = "0", i = "apt-guide-arrow-top-left") : "left" === e[0] ? (t.style.borderTopRightRadius = "0", i = "apt-guide-arrow-top-right") : i = "apt-guide-arrow-center") : "left" === e[0] ? (r = "apt-guide-arrow-right", n && (o = "transparent transparent transparent " + n)) : (r = "apt-guide-arrow-left", n && (o = "transparent " + n + " transparent transparent")), t[q].add(r), "" !== i && t[q].add(i), "" !== o && ue(r, o)
                }
            }

            function ge(e, t, n, r, o, i, a) {
                r || (r = 0);
                var s = (0, m.detectIE)(),
                    c = s && s < 79,
                    u = e.isDom ? e.element.getBoundingClientRect() : e.elementRect,
                    d = (0, m.getPageWidth)(),
                    g = (0, m.getPageHeight)(),
                    f = c ? Math.floor(u.height) : u.height,
                    p = c ? Math.floor(u.width) : u.width,
                    v = c ? Math.floor(u.left) : u.left,
                    h = c ? Math.floor(u.top) : u.top,
                    y = c ? Math.ceil(u.bottom) : u.bottom,
                    b = c ? Math.ceil(u.right) : u.right,
                    E = v - r >= 0 ? v - r : 0;
                Gt.style.left = E + "px", Gt.style.top = "0px", Gt.style.height = (0 === h ? 0 : h - r > 0 ? h - r : 0) + "px", t && (Gt.style.background = (0, l.hexToRgba)(t, n ? n / 100 : 0)), Kt.style.top = h + r + f + "px", Kt.style.height = (0 === y ? 0 : g - parseInt(Kt.style.top)) + "px", t && (Kt.style.background = (0, l.hexToRgba)(t, n ? n / 100 : 0)), zt.style.left = "0px", zt.style.top = "0px", zt.style.height = g + "px";
                var I = 0 === v ? 0 : E;
                zt.style.width = I + "px", t && (zt.style.background = (0, l.hexToRgba)(t, n ? n / 100 : 0));
                var C = v + p + r;
                if (Yt.style.left = C + "px", Yt.style.top = "0px", Yt.style.height = g + "px", Yt.style.width = (0 === b ? 0 : d - C) + "px", t && (Yt.style.background = (0, l.hexToRgba)(t, n ? n / 100 : 0)), Gt.style.width = C - I + "px", Kt.style.width = C - I + "px", Gt.style.left = I + "px", Kt.style.left = I + "px", Gt.style.display = "block", Gt.style.visibility = "visible", Kt.style.display = "block", Kt.style.visibility = "visible", zt.style.display = "block", zt.style.visibility = "visible", Yt.style.display = "block", Yt.style.visibility = "visible", a > 0 ? (Gt.style.setProperty("z-index", a), Kt.style.setProperty("z-index", a), zt.style.setProperty("z-index", a), Yt.style.setProperty("z-index", a)) : (Gt.style.removeProperty("z-index"), Kt.style.removeProperty("z-index"), zt.style.removeProperty("z-index"), Yt.style.removeProperty("z-index")), i) {
                    var T = (0, l.createElement)("div", "apt-guide-target-block");
                    T.style.left = v - r + "px", T.style.width = p + 2 * r + "px", T.style.height = f + 2 * r + "px", T.style.top = h - r + "px", o.appendChild(T)
                }
            }

            function fe() {
                Gt.style.display = "block", Gt.style.visibility = "visible", Kt.style.display = "block", Kt.style.visibility = "visible", zt.style.display = "block", zt.style.visibility = "visible", Yt.style.display = "block", Yt.style.visibility = "visible"
            }

            function pe() {
                Gt.style.display = "none", Gt.style.visibility = "hidden", Kt.style.display = "none", Kt.style.visibility = "hidden", zt.style.display = "none", zt.style.visibility = "hidden", Yt.style.display = "none", Yt.style.visibility = "hidden"
            }

            function me(e, t) {
                var n = g.windowRef.sessionStorage,
                    r = JSON.parse(n.getItem("apt.prevStepMap"));
                if (r || (r = {}), r[t.id] = {
                        id: e.id,
                        url: g.windowRef.location.href
                    }, n.setItem("apt.prevStepMap", JSON.stringify(r)), n.setItem("apt.stepId", t.id), (St.engagementId || !1 === dt) && n.setItem("apt.guideId", St.engagementId), (0, x.getConfig)("crossProductEngagement")) {
                    n.getItem("apt.localCache") || n.setItem("apt.localCache", JSON.stringify(g.eventTrackData[f.cacheGetAll]()))
                }
            }

            function ve(e) {
                var t = g.windowRef.sessionStorage;
                t.getItem(e) && t.removeItem(e)
            }

            function he() {
                ve("apt.currentGuideId"), ve("apt.stepId"), ve("apt.guideId")
            }

            function ye(e, t, n, r, o, i, a, s) {
                switch (!0 !== i && (Ie(), Wt = !1, Et.length > 0 && Et.pop().close(), te(e), L.default.removeAllHandlers(), Wt = !0, Lt = e), o.type) {
                    case "TOOLTIP":
                    case "DIALOG":
                        return et(e, t, n, r, o, i, a, s);
                    case "HOTSPOT":
                        return Oe(e, r, o, i, a, s);
                    case "BADGE":
                        return;
                    default:
                        p.logger.logInternalError(new Error("Unsupported step type " + o.type))
                }
            }

            function be(e) {
                var t = e.hotspotSettings,
                    n = ".apt-hotspot-dynamic {",
                    r = ".apt-hotspot-dynamic:before {",
                    o = e.zIndex || e.zindex;
                g.eventTrackData[f.cacheGet](g.productIdParameter) && g.eventTrackData[f.cacheGet](g.productIdParameter).startsWith("AP-WVMZ1DVKRDJD") && (o = 9e3), o = isNaN(o) || null === o ? 2147483647 : o, n += "z-index: " + o + ";", r += "z-index: " + o + ";", n += "background-color: " + t.spotColor + ";", r += "box-shadow: 0px 0px 2px 2px " + t.animationColor + ";", n += "height: " + t.spotSize + "px; width: " + t.spotSize + "px;", r += "height: " + t.spotSize + "px; width: " + t.spotSize + "px;", r += "animation:apt-hotspot-active " + t.animationDuration + "ms " + (t.animationCount ? t.animationCount : "infinite") + " linear; animation-delay: " + (t.animationDelay ? t.animationDelay : "0") + "ms;", n += "}", r += "}";
                var i = n + " " + r,
                    a = document.getElementById("apt-hotspot-style");
                a ? a.styleSheet ? a.styleSheet.cssText = i : (a.innerHTML = "", a.appendChild(document.createTextNode(i))) : a = (0, l.createStyle)(i, "apt-hotspot-style"), I().appendChild(a)
            }

            function Ee(e, t, n, r, o) {
                e.setAttribute("tabindex", V);
                var i = function () {
                    clearInterval(Jt), oe(e), Te(), Be(t, n)
                };
                (0, l.addEventListener)(e, "click", i), (0, T.disableFocusOnClick)(e), (0, l.addEnterKeyDownListener)(e, i), t.hotspotSettings.elementClickTrigger && R.hotspotEventHandler.addListener(o, t.elementSelector, i)
            }

            function Ie() {
                oe()
            }

            function Ce(e, t, n) {
                var r = function r() {
                    setTimeout(function () {
                        (0, b.findInAll)(e.elementSelector, (0, y.getRegisteredIframes)(), function (e) {
                            e && (e.element || e.iframeData) && !1 !== e.isVisible || ((0, D.elementContainsChild)(I(), t) && oe(t), !n.preview && kt && kt()), h.internalEventListener.removeListener("pageview", r), Te()
                        })
                    }, 500)
                };
                h.internalEventListener.addListener("pageview", r), Jt = setInterval(function () {
                    try {
                        (0, b.findInAll)(e.elementSelector, (0, y.getRegisteredIframes)(), function (e) {
                            e && (e.element || e.iframeData) && t.parentElement && !1 !== e.isVisible || (t.parentElement && oe(t), clearInterval(Jt), Te(), !n.preview && kt && kt())
                        })
                    } catch (e) {
                        clearInterval(Jt), Te(), p.logger.logInternalError(e)
                    }
                }, 500)
            }

            function Te() {
                try {
                    Pt && clearInterval(Pt)
                } catch (e) {}
            }

            function we(e, t, n, r) {
                var o = "TOOLTIP" === r.type && _e(n, r);
                t ? (e.style.display = "block", o && fe()) : (e.style.display = "none", o && pe())
            }

            function Se(e, t, n, r, o, i, a, s) {
                var u = ut.getElementPosition(n),
                    d = e[0] !== t[0] || e[1] !== t[1] || e[2] !== t[2] || e[3] !== t[3],
                    g = u[0] !== s[0] || u[1] !== s[1] || u[2] !== s[2] || u[3] !== s[3],
                    f = d || !d && g,
                    p = !1;
                return p = r.isDom ? (0, l.isElementVisible)(r.element, !0, !0) : r.elementRect.isVisible ? (0, l.isElementInIframeVisible)(r.elementRect, r.iframeSource.domElement) : void 0 === r.elementRect.isVisible && r.isVisible, we(n, p, a, o), f && (t = e, ut.positionElement(n, r, o.positionHorizontal, o.positionVertical, o.positionTopDelta, o.positionLeftDelta, "HOTSPOT" === o.type, c()), "TOOLTIP" === o.type && Ae(i, a, o, r)), t
            }

            function ke(e, t, n, r, o, i) {
                var a = !0,
                    s = ut.getElementPosition(n);
                if (i.preview || dt) {
                    var l = function (r) {
                            if (r)
                                if (r.element) {
                                    var a = ut.getElementPosition(r.element);
                                    r.isDom = !0, t = Se(a, t, n, r, e, o, i, s), s = ut.getElementPosition(n)
                                } else {
                                    var l = function (a) {
                                        var l = {
                                                isDom: !1,
                                                elementRect: Array.isArray(a) ? a[0] : a,
                                                isVisible: r.isVisible,
                                                iframeSource: r.iframeData,
                                                iframeOrigin: y.IframeData.iframeOrigin
                                            },
                                            c = ut.getElementDataPosition(l);
                                        t = Se(c, t, n, l, e, o, i, s), s = ut.getElementPosition(n)
                                    };
                                    r.elementRect ? l(r.elementRect) : E.default.getElementLocation(r.iframeData, e.elementSelector, l)
                                }
                        },
                        c = e.repositionInterval > 0 ? e.repositionInterval : 1e3,
                        u = setInterval(function () {
                            try {
                                if (r && r.isDom && r.element && !(0, D.elementContainsChild)(I(), r.element)) {
                                    var t = JSON.stringify(e.elementSelector);
                                    p.logger.logInternalError(new Error("Guide " + i.id + " on step " + e.id + " with selector " + t + " was closed, mapped element was there and then removed")), $e(e, i)
                                } else(0, b.findInAll)(e.elementSelector, (0, y.getRegisteredIframes)(), l, !1, !1, a && e.autoScroll), a = !1
                            } catch (e) {
                                clearInterval(u), Te(), p.logger.logInternalError(e)
                            }
                        }, c);
                    return u
                }
                return null
            }

            function xe() {
                return wt && (Ct >= wt.length || 1 === wt.length)
            }

            function Oe(e, t, n, r, o, i) {
                var a = n.autoScroll && e && e.element && (0, l.needToScroll)(e.element);
                a && (0, l.scrollElementToCenter)(e.element, function (e) {
                    return p.logger.logInternalError(e)
                }), be(n);
                var s = (0, l.createElement)("span", ["apt-hotspot-element", "apt-hotspot-dynamic"]);
                s.setAttribute("data-apt-disable-selector", !0), s.style.display = e.isVisible ? "block" : "none", (0, l.appendElements)(I(), [s]);
                var u = function () {
                    var r = null;
                    if (n && n.positionHorizontal && n.positionVertical) {
                        r = ut.positionElement(s, e, n.positionHorizontal, n.positionVertical, n.positionTopDelta, n.positionLeftDelta, !0, c());
                        var a = ut.getElementDataPosition(e);
                        Pt = ke(n, a, s, e, null, t)
                    }
                    null === r && (r = tt(s, e, n.positionTopDelta, n.positionLeftDelta, !0)), i || (Ee(s, n, t, o, e), Ce(n, s, t), wt && (Ct >= wt.length || 1 === wt.length) && J(2), n && X(n.id, n.sequenceNumber)), Ot && Ot(r), dt && xe() && h.internalEventListener.dispatchEvent("engagementCompleted", (0, N.toExternalEventGuide)(St, "Completed"))
                };
                a ? setTimeout(u, 800) : u()
            }

            function _e(e, t) {
                var n = t.overlay && t.overlay.fill < 1 && !t.showOverlay;
                return (t.overlay && t.overlay.modal || e.modal) && !n
            }

            function Ae(e, t, n, r, o) {
                var i = e.querySelector(".apt-vex.apt-popup-disable-overlay .vex-overlay"),
                    a = void 0,
                    s = void 0,
                    c = void 0,
                    u = 0,
                    d = n.overlay && n.overlay.modal || t.modal;
                if (!(n.overlay && n.overlay.fill < 1) || n.showOverlay) {
                    if (d) {
                        var g = I();
                        g.classList.contains("apt-non-scroll") || document.documentElement.classList.contains("apt-non-scroll") || (document.documentElement.classList.add("apt-non-scroll"), (0, x.getConfig)("enableModalBodyScroll") && g.classList.add("apt-non-scroll")), a = n.overlay && n.overlay.modal && n.overlay.color || t.overlayColor, s = n.overlay && n.overlay.modal && !isNaN(n.overlay.fill) ? n.overlay.fill : t.overlayFill, c = n.overlay && n.overlay.modal && (n.overlay.padding || 0 === n.overlay.padding) ? n.overlay.padding : t.overlayPadding, u = n.zIndex || n.zindex
                    }
                    if (t && "TOOLTIP" === n.type) {
                        var f = n.overlay && n.overlay.modal && n.overlay.blockElement && !Re(n.navigation.nextStepTrigger);
                        o || ge(r, a, s, c, e, f, u), d || pe()
                    }
                    t && "DIALOG" === n.type && (d ? (i.style.background = (0, l.hexToRgba)(a, s ? s / 100 : 0), i.style.display = "block") : i.style.display = "none")
                }
            }

            function Pe(e, t) {
                var n = (0, w.resolveUrlWithPlaceholders)(g.windowRef.location.href, e);
                return a() || (n = (0, l.addParameterToUrl)(n, t.preview ? "aptShowGuide" : "aptGuideId", t.preview ? "1" : t.engagementId), gt || (n = (0, l.addParameterToUrl)(n, "aptActivationType", t.activationType))), n
            }

            function Le(e, t) {
                return {
                    closeCallback: function () {
                        return $e(e, t)
                    },
                    startOverGuideCallback: function (e) {
                        return Qe(t, e)
                    },
                    customButtonNextCallback: function (n) {
                        return Ye(e, t, n)
                    },
                    showPreviousStepCallback: function (n) {
                        return $t(e, t, Xe(e, n))
                    }
                }
            }

            function Ne(e, t, n) {
                if ("URL_REDIRECTION" === n.onNavigationNextAction && (0, w.resolveUrlWithPlaceholders)(window.location.href, n.url) !== g.windowRef.location.href) {
                    o();
                    var r = Pe(n.url, t);
                    r !== g.windowRef.location.href && e.sequenceNumber < e.total - 1 && me(e, wt[Tt + 1]), g.windowRef.location.href = r
                } else ie(null, !0)
            }

            function Be(e, t) {
                if ("REDIRECT" === e.navigation.nextButtonAction && e.navigation.nextStepUrl && (0, w.resolveUrlWithPlaceholders)(window.location.href, e.navigation.nextStepUrl) !== g.windowRef.location.href) {
                    o();
                    var n = Pe(e.navigation.nextStepUrl, t);
                    n !== g.windowRef.location.href && e.sequenceNumber < e.total - 1 && me(e, wt[Tt + 1]), s(n, function () {
                        ie(null, !0)
                    }, a())
                } else ie(null, !0)
            }

            function Re(e) {
                return ["ELEMENT_CLICK", "ELEMENT_HOVER", "INPUT_TEXT_COMPLETION"].indexOf(e) > -1
            }

            function De(e) {
                return ["ELEMENT_CLICK", "INPUT_TEXT_COMPLETION"].indexOf(e) > -1
            }

            function Me(e) {
                return -1 !== ["REDIRECT", "REPLACE"].indexOf(e)
            }

            function Ue(e, t) {
                var n = e.total - 1;
                if (Tt >= n && Me(t.completionClosingAction) && t.completionClosingRedirectUrl) {
                    var r = (0, w.resolveUrlWithPlaceholders)(g.windowRef.location.href, t.completionClosingRedirectUrl);
                    r !== g.windowRef.location.href && s(r, void 0, "REPLACE" === t.completionClosingAction)
                } else if (Tt < n && "REDIRECT" === t.interruptClosingAction && t.interruptClosingRedirectUrl) {
                    var o = (0, w.resolveUrlWithPlaceholders)(g.windowRef.location.href, t.interruptClosingRedirectUrl);
                    o !== g.windowRef.location.href && s(o, void 0, a())
                }
            }

            function Fe(e) {
                (0, x.getConfig)("guideAdvanceOnHover") && ((0, l.addEventListener)(e.element, "mouseleave", Qt, !1), (0, l.addEventListener)(e.element, "mouseout", Qt, !1), e.element.nextElementSibling && ((0, l.addEventListener)(e.element.nextElementSibling, "mouseleave", Qt, !1), (0, l.addEventListener)(e.element.nextElementSibling, "mouseout", Qt, !1)))
            }

            function Ve(e) {
                (0, x.getConfig)("guideAdvanceOnHover") && ((0, l.removeEventListener)(e.element, "mouseleave", Qt), (0, l.removeEventListener)(e.element, "mouseout", Qt), e.element.nextElementSibling && ((0, l.removeEventListener)(e.element.nextElementSibling, "mouseleave", Qt, !1), (0, l.removeEventListener)(e.element.nextElementSibling, "mouseout", Qt, !1)))
            }

            function je(e, t) {
                var n = We(t);
                return e.sequenceNumber === n
            }

            function He(e, t) {
                var n = qe(t);
                return e.sequenceNumber === n
            }

            function qe(e) {
                return e && e.reduce(function (e, t) {
                    return Math.max(e, t.sequenceNumber)
                }, e[0].sequenceNumber)
            }

            function We(e) {
                return e && e.reduce(function (e, t) {
                    return Math.min(e, t.sequenceNumber)
                }, e[0].sequenceNumber)
            }

            function Ge(e) {
                var t = wt && wt.filter(function (e) {
                    return "DIALOG" === e.type
                });
                return t && t.length && je(e, t)
            }

            function Ke(e) {
                var t = wt && wt.filter(function (e) {
                    return "DIALOG" === e.type
                });
                return t && t.length && He(e, t)
            }

            function ze(e, t, n, r, o) {
                var i = this.contentEl.querySelector(".apt-step-new-index") || this.contentEl.querySelector(".px-step-new-index");
                if (i && e.total > 1) {
                    i[q].add("px-step-numbers");
                    var a = n ? " " + n + " " : " of ",
                        s = (0, l.createElement)("div", null, {
                            text: t + 1 + a + e.total
                        });
                    r && (s.style.color = r), o && (s.style.fontSize = o + "px"), i.appendChild(s)
                }
            }

            function Ye(e, t, n) {
                var r = !1;
                if (r) return void p.logger.log("next already clicked");
                r = !0, Ne(e, t, n), Te()
            }

            function Je(e) {
                return e && e.navigation && "HISTORY_BACK" == e.navigation.previousButtonAction
            }

            function Xe(e, t) {
                return e && t
            }

            function Qe(e, t) {
                var n = sessionStorage.getItem(G);
                g.windowRef.location.href === n ? (Ct = 0, It = -1, Tt = 0, At = !1, ie(0)) : s(Pe(n, e), function () {
                    ie(0)
                }, t)
            }

            function $e(e, t, n) {
                sessionStorage.removeItem(G), he(), ve("apt.localCache"), Te(), sessionStorage.removeItem("apt.prevStepMap"), !n && kt && kt(), Et.length > 0 && Et.pop().close(), te(), e && t && Ue(e, t), L.default.removeAllHandlers(), z(), oe(), (0, N.removeTabbableEnterListener)()
            }

            function Ze(e, t, n) {
                if (e.style) {
                    (0, T.addStyleTag)(n, e.style, "px-engagement-wrapper-guide #step-" + t.id, ".apt-vex.vex.vex-theme-os");
                    var r = e.style.match(/.px-close-button\s*{[^}]*}/);
                    r && (0, T.addStyleTag)(n, ".aptr-step-close-button-" + t.id + r[0], "px-engagement-wrapper-guide", ".apt-vex.vex.vex-theme-os")
                }
            }

            function et(e, t, r, o, u, d, f, m) {
                var v = function () {
                        try {
                            pe(), sessionStorage.removeItem(G), he(), g.windowRef.sessionStorage.removeItem("apt.prevStepMap"), Te(), te(e), kt && kt(), Ue(u, o)
                        } catch (e) {
                            p.logger.logInternalError(e, "Error on closing guide")
                        }
                    },
                    y = (0, l.getEscHandlerCallback)(v);
                if (_t = u, !(0, T.isElement)(r)) {
                    var b = document.createElement("div");
                    b.innerHTML = r, r = b, r[q].add("apt-step-wrapper")
                }
                var k = S(r);
                if (Ut = (0, N.setTabIndexes)(r, ht), Vt = Ut, jt = Ut + 1, Ht = Ut + 2, Ft = Ut + 3, Ut += 4, !k && _t.titleHtml && !(0, T.isElement)(_t.titleHtml)) {
                    var P = document.createElement("div");
                    P.innerHTML = _t.titleHtml, _t.titleHtml = P
                }
                if (!(0, T.isElement)(t)) {
                    var B = document.createElement("div");
                    B.innerHTML = t, t = B.firstChild
                }
                var R = (0, l.createElement)(H, ["apt-step-content", "apt-sdk"]),
                    D = (0, l.createElement)(H, ["apt-guide-content-wrapper"]);
                R.setAttribute("id", "step-" + _t.id), R[q].toggle("px-dialog-container", "DIALOG" === u.type), R[q].toggle("px-tooltip-container", "TOOLTIP" === u.type), R[q].toggle("px-start-guide-dialog", Ge(u)), R[q].toggle("px-end-guide-dialog", Ke(u)), R[q].toggle("px-first-step", je(u, wt)), R[q].toggle("px-last-step", He(u, wt)), !k && _t.titleHtml && _t.showTitle && D.insertBefore(_t.titleHtml, D.firstChild), "TOOLTIP" !== u.type || _t.titleHtml || k || (_t.navigation.useElementListener && Re(_t.navigation.nextStepTrigger) ? D[q].add("apt-guide-tooltip-content") : D[q].add("apt-guide-tooltip-content-navigation")), r && t && (D.appendChild(r), (0, l.appendElements)(R, [D, t]));
                var M = null,
                    U = u.autoScroll && e && e.element && (0, l.needToScroll)(e.element);
                U && (0, l.scrollElementToCenter)(e.element, function (e) {
                    return p.logger.logInternalError(e)
                });
                var V = void 0,
                    W = e && e.isDom ? e.element : null,
                    K = I(),
                    z = K.id,
                    Y = (0, x.getConfig)("framesetMode") ? "html" : z ? "#" + z : "body",
                    Q = {
                        appendLocation: Y,
                        enableModalBodyScroll: (0, x.getConfig)("enableModalBodyScroll"),
                        disableTransitionEffect: u.disableTransitionEffect,
                        closeClassName: "aptr-engagement-close-btn px-close-button aptr-step-close-button-" + u.id,
                        unsafeContent: R.outerHTML,
                        overlayClosesOnClick: !1,
                        closeAllOnPopState: !1,
                        showCloseButton: !0,
                        disableAutoFocus: n || C.default.isEngagementEditorV2(),
                        afterOpen: function () {
                            function t(e) {
                                -1 !== [13, 9].indexOf(e.keyCode) && e.currentTarget === W && (Be(u, o), (0, l.removeEventListener)(W, "keydown", t))
                            }
                            var n = this,
                                r = function (e) {
                                    return (0, T.disableFocusOnClick)(e, n.contentEl)
                                };
                            this.rootEl.style.display = "none", (0, x.getConfig)("enableModalBodyScroll") && K.classList.add("apt-vex"), this.rootEl[q].add("apt-vex"), this.rootEl.setAttribute("data-apt-ignore-visible", !0), this.contentEl.setAttribute("data-apt-disable-selector", !0), Rt = this.contentEl, Dt = this.rootEl, Mt = this.overlayEl, this.rootEl[q].add("apt-popup-disable-overlay"), this.contentEl[q].add("apt-guide-popup"), this.contentEl[q].add("guide-initial-position"), this.contentEl[q].add("apt-popup-content-disable-overlay"), this.contentEl[q].add("px-engagement-wrapper-guide"), this.contentEl[q].add("px-engagement-wrapper");
                            var d = u.zindex || u.zIndex || o.zIndex || vt;
                            this.rootEl.style.zIndex = d, this.contentEl.style.zIndex = d, (u.zindex || u.zIndex || 0 === d) && (this.overlayEl.style.zIndex = d), (0, T.addStyleTag)(this.contentEl, o.coreStyling, "px-engagement-wrapper", ".apt-vex.vex.vex-theme-os"), (0, T.addStyleTag)(this.contentEl, o.engagementCoreStyling, "px-engagement-wrapper-guide", ".apt-vex.vex.vex-theme-os"), (0, N.addGlobalSettings)(this.contentEl, o.engagementCoreStyling, _t.id, u.paddingSettings), (0, T.addStyleTag)(this.contentEl, o.overrideStyling, "px-engagement-wrapper-guide", ".apt-vex.vex.vex-theme-os");
                            var b = f > -1 ? f : Tt,
                                I = wt[b];
                            Ze(I, u, this.contentEl), o.showStepCounter && u.showStepCounter && ze.call(this, u, b, o.stepCounterLabelText, o.stepCounterFontColor, o.stepCounterFontSize), m && !o.preview || (L.default.removeAllHandlers(), L.default.addNavigationHandler(e, u, o, function (e, t) {
                                $e(e, t)
                            })), u && (u.backgroundImage && rt(this.contentEl, u.backgroundImage), u.backgroundColor && (this.contentEl.style.backgroundColor = u.backgroundColor, u.backgroundFill && (this.contentEl.style.backgroundColor = (0, l.hexToRgba)(u.backgroundColor, u.backgroundFill / 100), (0, l.checkDarkColor)(u.backgroundColor) && this.contentEl.querySelector(".aptr-engagement-close-btn").classList.add("apt-engagement-close-btn-bright")))), u.autoHeight || (u && u.height && (this.contentEl.style.height = u.height + "px"), u && u.height && (this.contentEl.querySelector(".apt-step-content").style.height = u.height + "px")), u && u.width && (this.contentEl.style.width = u.width + "px"), o && o.borderRadius && (this.contentEl.style.borderRadius = o.borderRadius + "px");
                            var C = this.contentEl.querySelectorAll((0, O.getSelectorByVersion)(this.contentEl, "apt-step-footer-buttons")),
                                S = C[C.length - 1],
                                P = this.closeEl;
                            (0, l.isNullOrUndefined)(u.navigation.showNavigation) || _.default.setButtonsVisibility(this.contentEl, u.navigation.showNavigation), (0, l.addEventListener)(P, "click", v), (0, l.addEventListener)(document, "keydown", y), u.shadow && (0, N.setShadow)(this.contentEl, u.shadowSettings);
                            var B = this.contentEl.querySelector((0, O.getSelectorByVersion)(this.contentEl, "apt-step-footer-next")),
                                R = this.contentEl.querySelector((0, O.getSelectorByVersion)(this.contentEl, "apt-step-footer-button")),
                                D = this.contentEl.querySelector((0, O.getSelectorByVersion)(this.contentEl, "apt-step-footer"));
                            u.isFirstStepNonHotspot && (_.default.addSkipButton(D, o.skipButton, u.navigation.backgroundRadius, !m, function (e, t) {
                                return function () {
                                    $e(e, t)
                                }
                            }(u, o), o.skipButtonText, r, Ft), (0, N.isSnoozeButtonEnabled)(o.activationType, o.snoozeButton, o.activationTypes) && _.default.addSnoozeButton(D, o.snoozeButton, !m, function (e, t) {
                                return function () {
                                    (0, N.trackSnooze)(St, e.id, e.sequenceNumber), $e(e, t)
                                }
                            }(u, o), o.snoozeButtonText, r, Vt, k));
                            var U = null,
                                F = null;
                            o.navigationV2 && u.backButton && (U = u.backButton.text, F = u.nextButton.text), R.innerText = U || o.backButtonText || "Previous", R.setAttribute("tabindex", jt), R.setAttribute("role", "button"), B.innerText = F || o.nextButtonText || "Next", B.setAttribute("tabindex", Ht), B.setAttribute("role", "button"), R.classList.add("apt-step-footer-prev"), "TOOLTIP" === u.type && (e && e.isDom ? (0, l.isEnterAllowedElement)(W) && (yt[u.id] = {
                                element: W,
                                event: "keydown",
                                handler: t
                            }, (0, l.addEventListener)(W, "keydown", t)) : e && !e.isDom && e.iframeSource && E.default.addElementHandler(e.iframeSource, u.elementSelector, u.navigation.nextStepTrigger, function () {
                                Be(u, o)
                            }));
                            var H = xe(),
                                G = u.nextButton,
                                z = u.backButton;
                            if (u && !u.navigation.useElementListener || m || !Re(u.navigation.nextStepTrigger)) {
                                if (0 === u.sequenceNumber && ("DIALOG" !== u.type && "TOOLTIP" !== u.type || (B.innerText = o.getStartedButtonText || o.startButton && o.startButton.text || "Get Started", G = o.startButton, B.style.width = "")), 0 !== u.sequenceNumber && u.showPreviousButton || (m ? R.style.display = "none" : R.parentNode === S && S.removeChild(R)), b >= u.total - 1 && (B.innerText = o.endButtonText || "End Tour", G = o.endButton, u.total > 1 && (R.innerText = o.restartButtonText || "Start Over", z = o.restartButton)), !m && o)
                                    if (H) {
                                        var Y = function () {
                                                Q || (Q = !0, $e(u, o))
                                            },
                                            Q = !1;
                                        (0, l.addEventListener)(B, "click", Y), (0, l.addEnterKeyDownListener)(B, Y), r(B);
                                        var $ = function () {
                                            return Qe(o, a())
                                        };
                                        (0, l.addEventListener)(R, "click", $), (0, l.addEnterKeyDownListener)(R, $), r(R)
                                    } else {
                                        var Z = !1,
                                            ee = function () {
                                                if (Z) return void p.logger.log("next already clicked");
                                                Z = !0, Be(u, o), Te()
                                            };
                                        (0, l.addEventListener)(B, "click", ee), (0, l.addEnterKeyDownListener)(B, ee), r(B);
                                        var te = function () {
                                            return $t(u, o, Je(u))
                                        };
                                        (0, l.addEnterKeyDownListener)(R, te), r(R), (0, l.addEventListener)(R, "click", te)
                                    } var ne = Le(u, o);
                                (0, A.setCustomButtonEventListener)(this.contentEl, u.customAction, ne, St, u.id);
                                var re = D.querySelector(".px-step-navigation-skip"),
                                    oe = D.querySelector(".px-step-navigation-snooze");
                                _.default.setStepNavigationV2Style({
                                    guideSettings: o,
                                    stepSettings: u,
                                    nextButton: B,
                                    prevButton: R,
                                    skipButtonDom: re,
                                    snoozeButtonDom: oe,
                                    footerElement: D,
                                    stepPrevButtonStyleSettings: z,
                                    stepNextButtonStyleSettings: G,
                                    navigation: u.navigation
                                }), (m && u.navigation.useElementListener || Re(u.navigation.nextStepTrigger)) && (o.showStepCounter && u.showStepCounter || (D.style.display = "none"), S.style.display = "none", B.style.display = "none", R.style.display = "none")
                            } else o.showStepCounter && u.showStepCounter || (D.style.display = "none"), S.style.display = B.style.display = R.style.display = "none";
                            if ((Re(u.navigation.nextStepTrigger) || u.navigation.useElementListener) && !m && e) {
                                var ae = function () {
                                        ie(1e3, !0), e.isDom && ("ELEMENT_CLICK" === u.navigation.nextStepTrigger && ((0, l.removeEventListener)(e.element, "keydown", Bt), (0, l.removeEventListener)(e.element, "click", Nt), (0, l.removeEventListener)(e.element, "contextmenu", Nt)), "ELEMENT_HOVER" === u.nextStepTrigger && ((0, l.removeEventListener)(e.element, "mouseenter", Nt), Ve(e))), se = !1
                                    },
                                    se = !0;
                                Nt = function (t) {
                                    if (!(0, l.isEnterAllowedElement)(e.element) && se)
                                        if (L.default.removeAllHandlers(), De(u.navigation.nextStepTrigger) && u.navigation.nextStepUrl && ("REDIRECT" === u.navigation.nextButtonAction && g.windowRef.location.href !== u.navigation.nextStepUrl || "SHOW_ON_NEXT_PAGE" === u.navigation.nextButtonAction)) {
                                            var n = f > -1 ? f : Tt;
                                            if (n < u.total - 1 && me(u, wt[Tt + 1]), "REDIRECT" === u.navigation.nextButtonAction) {
                                                var r = (0, w.resolveUrlWithPlaceholders)(g.windowRef.location.href, u.navigation.nextStepUrl),
                                                    i = n < u.total - 1 ? Pe(r, o) : r;
                                                s(i, ae, a())
                                            }
                                        } else ae()
                                }, e.isDom ? ("ELEMENT_CLICK" === u.navigation.nextStepTrigger && ((0, l.addEventListener)(e.element, "click", Nt), (0, l.addEventListener)(e.element, "contextmenu", Nt)), "ELEMENT_HOVER" === u.navigation.nextStepTrigger && ((0, l.addEventListener)(e.element, "mouseenter", Nt, !1), Fe(e)), "ELEMENT_CLICK" !== u.navigation.nextStepTrigger && "ELEMENT_HOVER" !== u.navigation.nextStepTrigger || (Bt = (0, l.addEnterKeyDownListener)(e.element, function (t) {
                                    Nt(t), e.element.blur()
                                }))) : E.default.addElementHandler(e.iframeSource, u.elementSelector, u.navigation.nextStepTrigger, Nt)
                            }
                            if ("DIALOG" === u.type && "BAR" === u.dialogViewType && (this.contentEl.style.position = "absolute", this.contentEl[q].add("apt-dialog-bar"), this.contentEl.style.width = "100%"), this.rootEl.style.display = "block", "DIALOG" !== u.type && e && (we(this.contentEl, e.isVisible, o, u), void 0 === e.isVisible && p.logger.log("showContentStep - get isVisible undefined")), !ft && u.autoHeight && "DIALOG" === u.type && i(this.contentEl), "DIALOG" === u.type && "BAR" === u.dialogViewType) {
                                var le = "bottom",
                                    ce = 0;
                                "TOP" === u.barPosition && (le = "top", ce = u.barOffset || 0), M = ut.positionElement(this.contentEl, e, "center", le, ce, u.positionLeftDelta), "BOTTOM" === u.barPosition && (this.contentEl.style.bottom = (u.barOffset || 0) + "px", this.contentEl.style.left = "0px")
                            } else u && u.positionHorizontal && u.positionVertical && (M = ut.positionElement(this.contentEl, e, u.positionHorizontal, u.positionVertical, u.positionTopDelta, u.positionLeftDelta, !1, !(0, x.getConfig)("tooltipDynamicReposition") && (dt || o.preview)));
                            if (null === M && (M = e || "DIALOG" !== u.type ? tt(this.contentEl, e, u.positionTopDelta, u.positionLeftDelta) : ut.positionElement(this.contentEl, e, "center", "center", u.positionTopDelta, u.positionLeftDelta, !1, c())), "TOOLTIP" === u.type)
                                if (null === M) dt && p.logger.logInternalError(new Error("Could not find linked element after attempting to position it, element might be not visible.\nLinked element css selector:" + u.elementSelector));
                                else {
                                    this.contentEl[q].add("apt-guide-tooltip"), de(M, this.contentEl, u && u.backgroundColor ? u.backgroundColor : "#ffffff"), e && e.isDom && (V = mt.getFollowScrollHandler(e.element, this.contentEl), mt.handleScrollEvent(W, V));
                                    var ue = ut.getElementDataPosition(e);
                                    Pt = ke(u, ue, this.contentEl, e, this.rootEl, o)
                                } if (Ae(this.rootEl, o, u, e), (0, N.removeCicularTabsWrapperListener)(j), _e(o, u) && (dt || o.preview)) {
                                var ge = function () {
                                    var e = n.contentEl.querySelector("[tabindex]");
                                    e && (0, T.focusElement)(e)
                                };
                                j = "TOOLTIP" === u.type ? (0, N.addCircularTabListenerForTooltips)(ge, e && e.element, I.id) : (0, N.addCircularTabListener)(ge, null, I.id)
                            }
                            u && X(u.id, u.sequenceNumber), wt && (Ct >= wt.length || 1 === wt.length) && J(2), (0, N.listenToLinksClicks)(this.rootEl, o, {
                                stepId: I.id
                            }), dt && H && h.internalEventListener.dispatchEvent("engagementCompleted", (0, N.toExternalEventGuide)(St, "Completed"))
                        }
                    };
                Q.beforeClose = function () {
                    (Wt || re(o)) && (K.classList.remove("apt-vex"), K.classList.remove("apt-non-scroll"), document.documentElement.classList.remove("apt-non-scroll")), Te(), pe(), mt.clearScrollEventListenerFromParents(W), (0, l.removeEventListener)(document, "keydown", y), te(e), (0, N.removeCicularTabsWrapperListener)(j), xt && xt(), Wt && !o.preview && kt && kt()
                };
                var $ = function () {
                    var e = F.open(Q);
                    Et.push(e), Ot && Ot(M)
                };
                U ? setTimeout($, 800) : $()
            }

            function tt(e, t, n, r, o) {
                function i(i, a) {
                    return ut.positionElement(e, t, i, a, n, r, o, c())
                }
                return i("right", "top") || i("center", "top") || i("right", "center") || i("right", "bottom") || i("center", "bottom") || i("left", "bottom") || i("left", "center") || i("left", "top")
            }

            function nt() {
                Te(), pe(), st(), oe(), Et = [], Lt && Ve(Lt), Lt = void 0
            }

            function rt(e, t) {
                e && (e.style.backgroundPosition = "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundSize = "cover", e.style.backgroundImage = "url(" + t + ")")
            }

            function ot(e) {
                e && (e.style.removeProperty("background-position"), e.style.removeProperty("background-repeat"), e.style.removeProperty("background-size"), e.style.removeProperty("background-image"))
            }

            function it(e, t) {
                var n = e.getBoundingClientRect(),
                    r = t.getBoundingClientRect(),
                    o = Math.abs(n.left - r.left),
                    i = Math.abs(n.right - r.right);
                return o > i ? "left" : o === i ? "center" : "right"
            }

            function at(e, t) {
                var n = e.getBoundingClientRect(),
                    r = t.getBoundingClientRect(),
                    o = Math.abs(n.top - r.top),
                    i = Math.abs(n.bottom - r.bottom);
                return o > i ? "top" : o === i ? "center" : "bottom"
            }

            function st() {
                for (var e = 0; e < Et.length; e++) Et[e].close();
                var t = g.documentRef.querySelectorAll(".vex-closing");
                t.length > 0 && t.forEach(function (e) {
                    return I().removeChild(e)
                })
            }
            var lt = this,
                ct = r,
                ut = e || new u.default,
                dt = !(n || C.default.isEditorMode()),
                gt = n || !!C.default.isEditorMode(),
                ft = !C.default.isEditorMode() && n,
                pt = 15 * l.MILLISEC,
                mt = new v.ScrollEventBinder,
                vt = t || void 0,
                ht = B.TAB_INDEX_START + 1,
                yt = {},
                bt = {},
                Et = [],
                It = -1,
                Ct = 0,
                Tt = 0,
                wt = null,
                St = null,
                kt = null,
                xt = null,
                Ot = null,
                _t = null,
                At = !1,
                Pt = void 0,
                Lt = void 0,
                Nt = null,
                Bt = null,
                Rt = null,
                Dt = null,
                Mt = null,
                Ut = void 0,
                Ft = void 0,
                Vt = void 0,
                jt = void 0,
                Ht = void 0,
                qt = !1,
                Wt = !0,
                Gt = void 0,
                Kt = void 0,
                zt = void 0,
                Yt = void 0,
                Jt = void 0,
                Xt = null;
            (0, m.addDOMReadyListener)(function () {
                document.querySelector(".apt-guide-overlay-top") ? Gt = document.querySelector(".apt-guide-overlay-top") : (Gt = document.createElement("div"), Gt.className = "apt-guide-overlay-top", Gt.style.display = "none", Gt.style.visibility = "hidden"), document.querySelector(".apt-guide-overlay-bottom") ? Kt = document.querySelector(".apt-guide-overlay-bottom") : (Kt = document.createElement("div"), Kt.className = "apt-guide-overlay-bottom", Kt.style.display = "none", Kt.style.visibility = "hidden"), document.querySelector(".apt-guide-overlay-left") ? zt = document.querySelector(".apt-guide-overlay-left") : (zt = document.createElement("div"), zt.className = "apt-guide-overlay-left", zt.style.display = "none", zt.style.visibility = "hidden"), document.querySelector(".apt-guide-overlay-right") ? Yt = document.querySelector(".apt-guide-overlay-right") : (Yt = document.createElement("div"), Yt.className = "apt-guide-overlay-right", Yt.style.display = "none", Yt.style.visibility = "hidden");
                var e = I();
                e.appendChild(Gt), e.appendChild(Kt), e.appendChild(zt), e.appendChild(Yt)
            }), this.hideOverlay = pe, this.showOverlay = ge, this.showOverlayForStep = Ae, this.showStepById = $, this.findElementInPage = se;
            var Qt = function (e) {
                e.stopImmediatePropagation()
            };
            this.checkHasOverlayForCurrentStep = function () {
                if (wt) {
                    var e = wt[Tt];
                    return !!e && _e(St, e)
                }
                return !1
            }, this.getStepSettings = function () {
                return wt[Tt]
            };
            var $t = function (e, t, n) {
                var r = !0;
                if (n) history.back();
                else {
                    var i = JSON.parse(g.windowRef.sessionStorage.getItem("apt.prevStepMap")),
                        c = null;
                    if (i && (c = i[e.id]), c) {
                        Te(), he(), g.windowRef.sessionStorage.setItem("apt.stepId", c.id);
                        var u = c.url;
                        if (o(), u !== g.windowRef.location.href) {
                            r = !1;
                            s((0, l.addParameterToUrl)(u, t.preview ? "aptShowGuide" : "aptGuideId", t.preview ? "1" : t.engagementId), le, a())
                        }
                    }
                }
                r && le()
            };
            this.setHotspotStyle = function (e) {
                be(e)
            }, this.setDialogStyle = function (e, t) {
                if (Rt && (e && (Rt.style.borderRadius = e.borderRadius + "px"), t)) {
                    t.backgroundImage ? rt(Rt, t.backgroundImage) : ot(Rt), t.backgroundColor && (t.backgroundFill ? (Rt.style.backgroundColor = (0, l.hexToRgba)(t.backgroundColor, t.backgroundFill / 100), (0, l.checkDarkColor)(t.backgroundColor) && Rt.querySelector(".aptr-engagement-close-btn").classList.add("apt-engagement-close-btn-bright")) : Rt.style.backgroundColor = t.backgroundColor), !t.autoHeight && t.height ? (Rt.style.height = t.height + "px", Rt.querySelector(".apt-step-content").style.height = t.height + "px") : (Rt.style.height = "unset", Rt.querySelector(".apt-step-content").style.height = "unset"), t.width && (Rt.style.width = t.width + "px"), t.shadow && t.shadow.enable ? (0, N.setShadow)(Rt, t.shadow) : (Rt.style.removeProperty("filter"), Rt.style.removeProperty("-webkit-filter"));
                    var n = t.zIndex;
                    Dt.style.zIndex = n, Rt.style.zIndex = n, Mt.style.zIndex = n
                }
            }, this.editSkipButton = function (e, t) {
                t && t.remove();
                var n = Object.assign({}, e.navigation.skipButton, {
                    enabled: e.navigation.skipButton.visible
                });
                lt.toggleSkip(e.navigation.skipButton.visible, n, e.navigation.skipButton.text)
            }, this.editSnoozeButton = function (e, t, n) {
                t && t.remove();
                var r = Object.assign({}, e, {
                    enabled: e.visible
                });
                lt.toggleSnooze(e.visible, r, e.text, n)
            }, this.setEngNavigationStyle = function (e) {
                var t = e.guideSettings,
                    n = e.stepStyle;
                if (n.navigation) {
                    var r = t.steps[n.navigation.currentStepIndex],
                        o = r.nextButton,
                        i = r.backButton,
                        a = 1 === n.navigation.stepLength,
                        s = 0 === n.navigation.currentStepIndex && !a,
                        l = n.navigation.stepLength - 1 === n.navigation.currentStepIndex && !a,
                        c = !s && !l && !a,
                        u = S(Rt),
                        d = Rt.querySelector((0, O.getSelectorByVersion)(Rt, "apt-step-footer")),
                        g = _.default.getNavigationButtons(Rt),
                        f = Rt.querySelector((0, O.getSelectorByVersion)(Rt, "apt-step-footer-button")),
                        p = Rt.querySelector((0, O.getSelectorByVersion)(Rt, "apt-step-footer-next")),
                        m = f.className.indexOf("snooze") > -1 ? Rt.querySelectorAll((0, O.getSelectorByVersion)(Rt, "apt-step-footer-button"))[1] : f,
                        v = d.querySelector(".px-step-navigation-skip");
                    lt.editSkipButton(n, v), v = d.querySelector(".px-step-navigation-skip"), v && (n.navigation.isFirstStepNonHotspot ? v.style.display = "block" : v.style.display = "none");
                    var h = d.querySelector(".px-step-navigation-snooze");
                    if (lt.editSnoozeButton(n.navigation.snoozeButton, h, u), h = d.querySelector(".px-step-navigation-snooze"), h && (h.style.display = n.navigation.isFirstStepNonHotspot ? "block" : "none"), s && !l ? (p && (p.innerText = n.navigation.startButton.text, o = t.guideSettings.startButton), m.style.display = s || !n.navigation.showPreviousButton ? "none" : "block") : c ? (m.style.display = n.navigation.showPreviousButton ? "block" : "none", m.innerText = i.text, p.innerText = o.text, i = r.backButton) : a ? p && (p.innerText = n.navigation.endButton.text, o = t.guideSettings.endButton) : l && (p.innerText = n.navigation.endButton.text, o = t.guideSettings.endButton, m.style.display = n.navigation.showPreviousButton ? "block" : "none", m.innerText = n.navigation.restartButton.text, i = t.guideSettings.restartButton), d && m && p && n && n.navigation) {
                        var y = Re(n.navigation.type),
                            b = !n.showStepCounter && !r.navigation.showNavigation,
                            E = !r.navigation.showNavigation || y,
                            I = y && !(t.guideSettings.showStepCounter && n.showStepCounter) || b;
                        p.style.display = y ? "none" : "block", d.style.display = I ? "none" : "flex", g.style.display = E ? "none" : "", _.default.setStepNavigationV2Style({
                            guideSettings: t.guideSettings,
                            stepSettings: r,
                            nextButton: p,
                            prevButton: m,
                            skipButtonDom: v,
                            snoozeButtonDom: h,
                            footerElement: d,
                            stepPrevButtonStyleSettings: i,
                            stepNextButtonStyleSettings: o,
                            navigation: n.navigation
                        })
                    }
                }
            }, this.setEngStyleTag = function (e, t, n) {
                if (Rt) {
                    var r = Rt.querySelectorAll("style");
                    r && r.forEach(function (e) {
                        e.remove()
                    }), e && ((0, T.addStyleTag)(Rt, e.coreStyling, "px-engagement-wrapper", ".apt-vex.vex.vex-theme-os"), (0, T.addStyleTag)(Rt, e.engagementCoreStyling, "px-engagement-wrapper-guide", ".apt-vex.vex.vex-theme-os"), (0, T.addStyleTag)(Rt, e.overrideStyling, "px-engagement-wrapper-guide", ".apt-vex.vex.vex-theme-os")), t && Ze(t, t, Rt), (0, N.addGlobalSettings)(Rt, e.engagementCoreStyling, void 0, n)
                }
            }, this.positionDialogAndTooltipInCenter = function () {
                var e = this.getTargetContainer(),
                    t = e.getBoundingClientRect();
                ut.positionElement(Rt, {
                    isDom: !1,
                    elementRect: {
                        left: 0,
                        top: 0,
                        height: t.height,
                        width: t.width
                    }
                }, "center", "center", 0, 0)
            }, this.updateDialogViewPosition = function (e, t) {
                "DIALOG" === e.type && (Rt[q].toggle("px-dialog-bar", "BAR" === e.position.dialogViewType), "BAR" === e.position.dialogViewType ? (Rt.style.position = "fixed", Rt.style.width = "100%", Rt.style.left = "0px", "BOTTOM" === e.position.barPosition ? (Rt.style.bottom = (e.position.barOffset || 0) + "px", Rt.style.top = "unset") : (Rt.style.top = (e.position.barOffset || 0) + 10 + "px", Rt.style.bottom = "unset")) : (Rt.style.bottom = "unset", Rt.style.right = "unset", t ? lt.positionDialogAndTooltipInCenter() : (Rt.style.position = "", Rt.style.width = e.width + "px")))
            }, this.updateTargetContainer = function (e) {
                ct = e, ct.appendChild(Gt), ct.appendChild(Kt), ct.appendChild(zt), ct.appendChild(Yt)
            }, this.getTargetContainer = I, this.setStepNavigationVisibility = function (e) {
                _.default.setButtonsVisibility(Rt, e)
            }, this.setStepCounterVisibility = function (e, t) {
                _.default.setCounterVisibility(Rt, e, t)
            }, this.updateDialogStyle = function (e) {
                var t = e.guideSettings,
                    n = e.stepSettings,
                    r = e.engStyle,
                    o = e.elementData,
                    i = e.dontReposition;
                if (Rt && Rt.parentElement) {
                    var a = r && r.styleTags;
                    if (lt.setEngStyleTag(a, n.styleTag, n.padding), lt.setDialogStyle(r, n), lt.setEngNavigationStyle({
                            guideSettings: t,
                            stepStyle: n
                        }), lt.updateDialogViewPosition(n, i), "TOOLTIP" === n.type && o ? Ae(Rt.parentElement, t.guideSettings, n, o, i) : Ae(Rt.parentElement, t.guideSettings, n), !n.overlay || !n.overlay.blockElement) {
                        var s = Rt.parentElement.querySelector(".apt-guide-target-block");
                        s && Rt.parentElement.removeChild(s)
                    }
                }
            }, this.changePositionWithFallback = function (e) {
                var t = e.elementData,
                    n = e.stepSettings,
                    r = e.callback,
                    o = parseInt(n.position.positionTopDelta) || 0,
                    i = parseInt(n.position.positionLeftDelta) || 0,
                    a = lt.changePosition(t, n.position.positionHorizontal, n.position.positionVertical, o, i),
                    s = !a;
                if (Rt && t && !a) {
                    var l = it(Rt, t.element),
                        c = at(Rt, t.element);
                    a = lt.changePosition(t, l, c, o, i)
                }
                r && r(a, s)
            }, this.updateStepStyleForDialog = function (e) {
                var t = e.guideSettings,
                    n = e.stepSettings,
                    r = e.engStyle,
                    o = e.callback,
                    i = e.dontReposition,
                    a = e.skipReposition;
                lt.updateDialogStyle({
                    guideSettings: t,
                    stepSettings: n,
                    engStyle: r,
                    elementData: null,
                    dontReposition: i
                }), a || lt.changePositionWithFallback({
                    elementData: null,
                    stepSettings: n,
                    callback: o
                })
            }, this.updateStepStyle = function (e, t, n, r, o, i, a) {
                if (t) {
                    var s = a || "BAR" === t.position.dialogViewType;
                    "DIALOG" === t.type ? lt.updateStepStyleForDialog({
                        guideSettings: e,
                        stepSettings: t,
                        engStyle: n,
                        callback: i,
                        dontReposition: a,
                        skipReposition: s
                    }) : se(o, t.type, function (r) {
                        switch (t.type) {
                            case "TOOLTIP":
                                lt.updateDialogStyle({
                                    guideSettings: e,
                                    stepSettings: t,
                                    engStyle: n,
                                    elementData: r,
                                    dontReposition: a
                                }), s && de([t.position.positionHorizontal, t.position.positionVertical], Et[0].contentEl, t.backgroundColor), _t.backgroundColor = t.backgroundColor;
                                break;
                            case "HOTSPOT":
                                t.hotspotSettings && be(t);
                                break;
                            case "BADGE":
                                break;
                            default:
                                p.logger.logInternalError(new Error("Unsupported step type " + t.type))
                        }
                        s || lt.changePositionWithFallback({
                            elementData: r,
                            stepSettings: t,
                            callback: i
                        })
                    }, void 0, !0), Rt && _.default.setCounterVisibility(Rt, r, t.showStepCounter)
                } else i && i()
            }, this.showStep = function (e, t, n, r, o, i, a, s, l, c, u) {
                kt = i, a && (xt = a), u && (Ot = u), wt = l, l.sort(function (e, t) {
                    return e.sequenceNumber - t.sequenceNumber
                });
                var d = qe(l);
                l = _.default.populateNavigationFlags(l, d), l.forEach(function (e) {
                    e.sequenceNumber === o.sequenceNumber && (o.showStepCounter = e.showStepCounter, o.isFirstStepNonHotspot = e.isFirstStepNonHotspot)
                });
                for (var g = -1, f = !1, p = 0; p < l.length; p++) l[p].id === o.id && (g = p), "BADGE" === l[p].type && (f = !0);
                return f && (g -= 1, o.total -= 1), ye(e, t, n, r, o, s, g, c)
            }, this.changePosition = function (e, t, n, r, o) {
                var i = null;
                if (Et[0]) {
                    if ((i = ut.positionElement(Et[0].contentEl, e, t, n, r, o, !1, c())) && i.length > 0) return e && de([t, n], Et[0].contentEl, _t.backgroundColor), i
                } else {
                    var a = document.querySelector(".apt-hotspot-element");
                    if (a && (i = ut.positionElement(a, e, t, n, r, o, !0, c), i.length > 0)) return i
                }
                return null
            }, this.changeBarPosition = function (e, t) {
                var n = "bottom",
                    r = 0;
                "TOP" === e && (n = "top", r = t), ut.positionElement(Et[0].contentEl, null, "center", n, r, 0), "BOTTOM" === e && (Et[0].contentEl.style.bottom = t + "px")
            }, this.playGuide = function (e, t, n, r) {
                qt = !0, r && (Xt = r), e.sort(function (e, t) {
                    return e.sequenceNumber - t.sequenceNumber
                });
                var o = qe(e);
                e = _.default.populateNavigationFlags(e, o), st(), oe(), Et = [], It = -1, Ct = 0, xt = void 0, Ot = void 0, kt = function (e) {
                    n(e), qt = !1
                }, wt = e, St = t, Tt = 0, At = !1, Te(), (0, N.addTabbableEnterListener)();
                var i = g.windowRef.sessionStorage.getItem("apt.stepId") || t.startStepId;
                if (i) {
                    var a = e.findIndex(function (e) {
                        return e.id === i
                    });
                    Ct = a, It = a - 1
                }
                g.windowRef.sessionStorage.removeItem("apt.stepId"), g.windowRef.sessionStorage.removeItem("apt.guideId"), K(), !i && sessionStorage.setItem(G, g.windowRef.location.href), ie(i ? 1e3 : 0)
            }, this.toggleSkip = function (e, t, n) {
                if (Et.length > 0) {
                    var r = Et[0].contentEl,
                        o = r.querySelector((0, O.getSelectorByVersion)(r, "apt-step-footer"));
                    _.default.toggle(o, e, t, n, T.disableFocusOnClick, Ft)
                }
            }, this.toggleSnooze = function (e, t, n, r) {
                if (Et.length > 0) {
                    var o = Et[0].contentEl,
                        i = o.querySelector((0, O.getSelectorByVersion)(o, "apt-step-footer"));
                    _.default.toggleSnooze(i, e, t, n, T.disableFocusOnClick, r, Vt)
                }
            }, this.showAll = function (e, t) {
                e.sort(function (e, t) {
                    return e.sequenceNumber - t.sequenceNumber
                }), wt = e;
                for (var n = 0; n < e.length; n++) ! function (n) {
                    Q(e[n]) && (0, b.findInAll)(e[n].elementSelector, (0, y.getRegisteredIframes)(), function (r) {
                        if (r) {
                            var o = {};
                            r.element ? (o.isDom = !0, o.element = r.element, ye(o, t.footer, e[n].content, t, e[n], !0, n, !0)) : r.iframeData && (o.isDom = !1, E.default.getElementLocation(r.iframeData, e[n].elementSelector, function (r) {
                                r && 1 === r.length && (o.elementRect = r[0], ye(o, t.footer, e[n].content, t, e[n], !0, n, !0))
                            }))
                        }
                    })
                }(n)
            }, this.isRunning = function () {
                return qt
            }, this.hideAll = function () {
                nt()
            }, this.setDefaultPaddingTop = function (t) {
                e.setDefaultTopOffset((0, x.getConfig)("dockMapper") ? 0 : t)
            }, this.clearStepRedirectData = function () {
                he()
            }, this.close = function (e) {
                $e(void 0, void 0, e)
            }
        },
        J = new function () {
            this.getElementBoundingRect = function (e) {
                try {
                    var t = (0, T.findElementInWindow)(e, document),
                        n = t.getBoundingClientRect(),
                        r = (0, l.isElementVisible)(t, !0);
                    return {
                        top: n.top,
                        right: n.right,
                        bottom: n.bottom,
                        left: n.left,
                        width: n.width,
                        height: n.height,
                        x: n.x,
                        y: n.y,
                        isVisible: r
                    }
                } catch (e) {
                    return p.logger.logInternalError(e), null
                }
            }
        };
    t.default = Y, t.GuideDrawerIframe = J, t.getSelectorByVersion = O.getSelectorByVersion
}, , , function (e, t, n) {
    "use strict";

    function r() {
        (0, l.getConfig)("enableTag") && h.push(arguments)
    }

    function o() {
        for (; h && h.length > 0;) d.default.callCommand(h.shift());
        c.windowRef[c.aptrinsicGlobalObjName] = y
    }

    function i(e, t, n) {
        if (!(0, l.isIframe)()) {
            var r = (0, l.getConfig)("fetchKcType"),
                o = "automatic" === r,
                i = null;
            o || p.KcSessionStorage.getIsDefaultKc() || (i = p.KcSessionStorage.getKcId());
            (o || !o && !!i) && (0, g.initKnowledgeCenter)(e, t, i, !1, n)
        }
    }

    function a(e, t, n) {
        if (!(0, l.isIframe)()) {
            var r = "API" === (0, l.getConfig)("fetchKcType");
            (!r || r && (0, p.getKcIsShownViaAPI)()) && (0, f.initKnowledgeCenter)(e, t, null, !1, n)
        }
    }

    function s(e, t, n) {
        "API" === (0, l.getConfig)("fetchKcType") || (0, p.setIsNewAPI)(!0), (0, p.getIsNewAPI)() ? a(e, t, n): i(e, t, n)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initKnowledgeCenterWrapper = t.aptReady = t.aptNotReady = t.aptExternal = void 0;
    var l = n(1),
        c = n(4),
        u = n(98),
        d = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(u),
        g = n(70),
        f = n(48),
        p = n(29),
        m = n(26),
        v = n(0),
        h = [],
        y = function () {
            d.default.call([arguments])
        };
    y.validateEngagementSecurity = function (e, t, n, r) {
        if (!(0, v.isFunction)(r)) throw "cannot run validation without callback function";
        if ((0, v.isEmptyArr)(n)) throw "cannot run validation for empty engagement array";
        (0, m.validateEngagements)(e, t, n, r)
    }, t.aptExternal = y, t.aptNotReady = r, t.aptReady = o, t.initKnowledgeCenterWrapper = s
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function i(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, t.children.length > 0
    }

    function a(e, t) {
        var n = "#06f263" !== t;
        return !i(e) && n
    }

    function s(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, 1 === t.children.length
    }

    function l() {
        var e = document.querySelector(".apt-hotspot-element"),
            t = document.querySelector(".apt-guide-popup");
        return !!e || !!t
    }

    function c(e) {
        var t = e.positionVertical,
            n = e.positionHorizontal,
            r = e.positionLeftDelta,
            o = e.positionTopDelta,
            i = "top" === t,
            a = "left" === n;
        return Y(t) && a ? r = 0 - r : i && (o = 0 - o), Y(t) ? o + ", " + r : r + ", " + o
    }

    function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.positionTopDelta,
            r = e.positionLeftDelta,
            o = e.positionVertical,
            i = e.positionHorizontal;
        o = o.toLowerCase(), i = i.toLowerCase(), "middle" === o && (o = "center");
        var a = void 0;
        if (Y(o)) a = i;
        else if (Y(i)) a = o;
        else {
            var s = i === (t ? "left" : "right"),
                l = s ? "end" : "start";
            a = o + "-" + l
        }
        return {
            position: a,
            offset: c({
                positionVertical: o,
                positionHorizontal: i,
                positionLeftDelta: r,
                positionTopDelta: n
            })
        }
    }

    function d(e, t, n) {
        var r = e.elementSelector,
            o = e.id,
            i = r.matchCssSelector,
            a = r.selector,
            s = r.cssSelector,
            l = r.matchTextRule,
            c = r.textRule,
            u = r.htmlTextRule,
            d = u || JSON.parse(c) || {},
            g = d.operator,
            f = d.values,
            p = {
                matchCssSelector: i,
                cssSelector: a || s,
                matchTextRule: l,
                textRuleOperator: g,
                textRuleValues: f
            },
            m = void 0;
        try {
            m = (0, D.elementContainsChild)(document, t)
        } catch (e) {
            m = !1
        }
        m ? n(t) : (0, x.findInAll)(p, (0, _.getRegisteredIframes)(), function (e) {
            var t = void 0,
                i = R.default.getIframeIdOfBadge(o);
            e && e.iframeData ? (i && i !== e.iframeData.iframeId && O.default.removeBadgeFromIframe((0, _.getIframeData)(i), o), O.default.sendBadgeToIframe(e.iframeData, {
                id: o,
                elementSelector: r
            })) : e && e.element ? (t = e.element, i && O.default.removeBadgeFromIframe(i)) : (k.logger.log("Could not find target element for badge with selector " + r.cssSelector), t = void 0), n(t)
        })
    }

    function g(e) {
        try {
            var t = e ? e.trim() : e;
            if (s(e)) return t;
            var n = document.createElement("div");
            return n.innerHTML = t, n
        } catch (e) {
            return k.logger.logInternalError(new Error("Badge Tooltip createElementFromHTML " + e)), ""
        }
    }

    function f(e, t, n) {
        function r() {
            var r = this;
            this.badgeAttr = e, this.isRendered = !1, n ? (this.targetData = n, this.target = t) : t ? this.target = t : d(e, null, function (e) {
                r.target = e
            })
        }

        function o(e) {
            try {
                if (Q) {
                    var t = Q,
                        n = t.state.isVisible;
                    e && !n ? Q.show() : !e && n && (Q.setProps({
                        duration: [0, 0]
                    }), Q.hide(), Q.setProps({
                        duration: [300, 250]
                    }))
                }
            } catch (e) {
                k.logger.logInternalError(new Error("Error in change visibility of tooltip" + e))
            }
        }

        function i(e, t, n) {
            if (!Q && t) c(e, t, !1, n);
            else if (Q) {
                var r = Q,
                    i = r.state.isVisible;
                t !== i && t && o(!0)
            }
        }

        function s(e) {
            try {
                if (!e) return;
                var t = e.backgroundColor,
                    n = e.height,
                    r = e.autoHeight,
                    o = e.width,
                    i = e.showTooltipArrow;
                if (Q) {
                    var a = Q,
                        s = a.popper;
                    s.classList.add("apt-badge-tippy"), s.setAttribute("aria-live", "polite");
                    var l = s.firstChild,
                        c = l.querySelector(".tippy-content");
                    if (r ? c.style.height = "" : n && (c.style.height = n + "px"), o && (c.style.width = o + "px"), i) {
                        l.querySelector(".tippy-arrow").style.color = t
                    }
                    e.shadow ? e.shadowSettings && (0, U.setShadow)(l, e.shadowSettings) : ee && (l.style.removeProperty("filter"), l.style.removeProperty("-webkit-filter")), l.style.backgroundColor = t
                }
            } catch (e) {
                k.logger.logInternalError(new Error("Error in update tooltip: " + e))
            }
        }

        function c(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments[3],
                i = e.positionSettings,
                l = e.text,
                c = e.textColor,
                d = e.showTooltipArrow;
            Q && Q.state && !Q.state.isDestroyed && Q.destroy();
            var f = u(i, !0),
                p = f.position,
                m = f.offset,
                v = l;
            a(l, c) && (v = "<div style='color: " + c + "'>" + l + "</div>");
            var h = g(v);
            if (t = t || ee, h) {
                var y = {
                    trigger: t ? "manual" : n ? "click" : "mouseenter focus",
                    zIndex: (0, E.getNumberWithFallback)(r, F),
                    showOnCreate: t,
                    hideOnClick: !t,
                    arrow: !!(0, E.isNullOrUndefined)(d) || d,
                    theme: "badge",
                    placement: p,
                    offset: m,
                    content: h,
                    interactive: !0,
                    allowHTML: !0,
                    flip: !1,
                    maxWidth: "none",
                    sticky: !0,
                    plugins: [b.sticky]
                };
                (0, M.useComputeStyleModifierForTooltip)(y), Q = (0, A.addTooltipToElement)(Y, y)
            }
            Q && (s(e), t && o(!0))
        }

        function f(e) {
            var t = this,
                n = u(e, !1),
                r = n.position,
                o = n.offset,
                i = {
                    placement: r,
                    removeOnDestroy: !1,
                    positionFixed: (0, S.getConfig)("badgesUseFixedPosition"),
                    modifiers: {
                        offset: {
                            offset: o
                        },
                        flip: {
                            enabled: !1
                        }
                    }
                };
            if ((0, M.useComputeStyleModifier)(i), this.targetData) {
                var a = function (n) {
                    if ((0, E.isObject)(n.styles)) {
                        if (Object.keys(n.styles).forEach(function (e) {
                                var t = n.styles[e];
                                "transform" !== e && n.instance.popper.style.setProperty(e, t)
                            }), t.targetData.rect) {
                            var r = new N.default,
                                o = e.positionVertical.toLowerCase();
                            "middle" === o && (o = "center"), r.positionElement(n.instance.popper, {
                                isDom: !1,
                                elementRect: t.targetData.rect
                            }, e.positionHorizontal.toLowerCase(), o, e.positionTopDelta, e.positionLeftDelta, !1, !1, !0, t.targetData.pageYOffset)
                        }
                    }
                    return n
                };
                i.modifiers.applyStyle = {
                    fn: a
                }, i.onUpdate = function () {
                    T(t.targetData.isVisible), Y.style.removeProperty("visibility")
                }
            } else i.onUpdate = x.bind(this);
            return new y.default(this.target || (0, S.getBody)(), Y, i)
        }

        function p(e) {
            var t = e.engagementTrigger,
                n = e.altSettings,
                r = e.standalone,
                o = n && n.enabled,
                i = t === W;
            return (r || i) && o
        }

        function m() {
            if (this.target || this.targetData) {
                var e = this.badgeAttr,
                    t = e.positionSettings,
                    n = e.altSettings,
                    r = e.standalone,
                    o = e.engagementTrigger,
                    i = e.customZIndex;
                if (K = f.apply(this, [t]), K.scheduleUpdate(), p(this.badgeAttr)) {
                    c(n, !1, r && o === W, i)
                }
            }
        }

        function h(e, t) {
            z(e, function (e) {
                Y || (Y = document.querySelector("#" + $)), Y.innerHTML = e;
                var n = Y.firstChild,
                    r = {
                        height: "100%",
                        width: "100%",
                        padding: "7%",
                        stroke: t,
                        boxSizing: "border-box"
                    };
                Object.assign(n.style, r)
            })
        }

        function C(e) {
            var t = e.customZIndex,
                n = e.borderColor,
                r = e.borderWidth,
                o = e.badgeHotspotSettings.spotSize,
                i = o + "px";
            return {
                zIndex: (0, E.getNumberWithFallback)(t, F),
                height: i,
                width: i,
                borderColor: n,
                borderWidth: r + "px"
            }
        }

        function T(e) {
            try {
                Y && (e ? (Y.classList.remove(V), q || K && K.scheduleUpdate()) : (o(!1), Y.classList.add(V))), q = e
            } catch (e) {
                k.logger.log("toggleVisibility - " + e)
            }
        }

        function x() {
            var e = this;
            Y.style.removeProperty("visibility"), ee || d(this.badgeAttr, this.target, function (t) {
                if (e.target = t, t) {
                    var n = (0, E.isElementVisible)(e.target, !0, !0);
                    K.reference = e.target, e.isRendered ? T.call(e, n) : e.render()
                } else e.destroy()
            })
        }

        function O() {
            Q && Q.popperInstance && Q.popperInstance.scheduleUpdate()
        }

        function _(e) {
            if (Q) {
                return Q.state.isVisible !== e
            }
            return !0
        }

        function L(e) {
            if (Q) {
                var t = u(e, !0),
                    n = t.position,
                    r = t.offset,
                    o = Q.props,
                    i = o.placement,
                    a = o.offset;
                return n !== i || r !== a
            }
            return !0
        }

        function B(e) {
            if (Q) {
                return Q.props.arrow !== e
            }
            return !0
        }

        function R(e) {
            Y.children.length > 0 ? Y.replaceChild(e, Y.children[0]) : Y.appendChild(e)
        }

        function D(t, n) {
            var r = G[t];
            if (r) {
                var i = function () {
                    var r = l();
                    e.standalone || r || (e.isPreview ? e.clickCallback && e.clickCallback(e.id) : ((0, w.default)(n, "b", function (e) {
                        if (e.content.contentType === P.IN_APP_GUIDE && e.content.steps && Array.isArray(e.content.steps)) {
                            var t = v(e.content.steps, 1),
                                n = t[0];
                            n && "TOOLTIP" === n.type && 0 === n.sequenceNumber && n.stickToBadge && (n.matchCssSelector = !0, n.cssSelector = "#" + Y.id)
                        }
                    }), "ONCE" === e.qualificationScopeType && t === W && e.clickCallback && e.clickCallback(e.id)))
                };
                e.standalone && (0, E.addEnterKeyDownListener)(Y, function () {
                    o(!Q.state.isVisible)
                }), (0, E.addEnterKeyDownListener)(Y, i), (0, E.addEventListener)(Y, r, i)
            }
        }

        function j(e) {
            var t = e.engagementTrigger,
                n = e.badgeIcon,
                r = e.badgeIconColor,
                o = e.backgroundColor,
                i = e.backgroundFill,
                a = e.useImage,
                s = e.imageUrl,
                l = e.onClick,
                c = e.engagementId,
                u = C(e);
            if (a && s) {
                var d = (0, E.createElement)("img");
                d.src = s, u.backgroundColor = "transparent", R(d)
            } else n ? (u.backgroundColor = (0, E.hexToRgba)(o, "number" == typeof i ? i / 100 : 1), h(n, r)) : k.logger.log("No image nor icon were found for badge");
            Object.assign(Y.style, u), Y.id = $, D(t, c, l), q = J
        }
        var H = this,
            q = X,
            K = void 0,
            Y = void 0,
            Q = void 0,
            $ = "apt-" + e.id,
            Z = {},
            ee = !1;
        r.apply(this), this.saveChanges = function () {
            this.badgeAttr = Object.assign(this.badgeAttr, Z)
        }, this.createTooltip = function () {
            var e = this.badgeAttr,
                t = e.altSettings,
                n = e.standalone,
                r = e.engagementTrigger,
                o = e.customZIndex;
            c(t, !1, n && r === W, o)
        }, this.setEditMode = function (e) {
            ee = e
        }, this.clear = function () {
            i(this.badgeAttr.altSettings, !0, this.badgeAttr.customZIndex)
        }, this.toggleTooltip = function (e) {
            var t = this.badgeAttr,
                n = t.altSettings,
                r = t.customZIndex;
            (p(this.badgeAttr) && e || !e) && i(n, e, r)
        }, this.repositionTooltip = function () {
            O()
        }, this.updateTooltipContent = function (e) {
            this.badgeAttr.altSettings.text = g(e)
        }, this.update = function (e, t) {
            var n = t.indexOf("all") > -1,
                r = t.indexOf("altSettings") > -1,
                a = e.altSettings;
            if (!Q && a.enabled && this.createTooltip(), Q && (n || a && r)) {
                Z = Object.assign(Z, e);
                var l = Z,
                    c = l.altSettings,
                    d = _(a.enabled),
                    g = L(a.positionSettings),
                    m = B(a.showTooltipArrow);
                if (g) {
                    var v = u(a.positionSettings, !0),
                        h = v.position,
                        y = v.offset;
                    Q.setProps({
                        placement: h,
                        offset: y
                    }), Q.popperInstance.scheduleUpdate()
                } else m ? (Q.setProps({
                    arrow: a.showTooltipArrow
                }), a.showTooltipArrow && s(c)) : d ? o(a.enabled) : Object.keys(a).length > 0 && s(c)
            }
            if (n || !r)
                if (Z = Object.assign(Z, e), O(), Q && Q.setProps({
                        zIndex: Z.customZIndex
                    }), t.indexOf("positionSettings") > -1) f.apply(this, [Z.positionSettings]);
                else if (t.indexOf("engagementTrigger") > -1) {
                var b = Z,
                    E = b.altSettings,
                    I = b.customZIndex,
                    C = p(Z);
                i(E, C, I), C || Q && Q.setProps({
                    trigger: ""
                })
            } else j.apply(this, [Z])
        }, this.scheduleUpdatePopper = function () {
            var e = this;
            d(this.badgeAttr, this.target, function (t) {
                e.target = t, t && (K.reference = e.target), K && K.scheduleUpdate()
            })
        }, this.changePosition = function (e) {
            if (this.target) {
                var t = Object.assign(this.badgeAttr.positionSettings, e);
                f.apply(this, [t])
            }
        }, this.getDomElement = function () {
            return Y
        }, this.destroy = function () {
            try {
                Q && Q.state && !Q.state.isDestroyed && Q.destroy(), Y = document.querySelector("#" + $), Y && Y.parentNode.removeChild(Y), K && K.reference && K.destroy(), this.isRendered = !1, Y = null
            } catch (e) {
                k.logger.logInternalError(new Error("Could not destroy badge: " + e))
            }
        }, this.updateTargetData = function (e, t) {
            H.targetData = t, H.target = e
        }, this.render = function (e) {
            if (this.target || this.targetData) {
                var t = e || (0, S.getBody)();
                Y && this.destroy(), Y = (0, E.createElement)("div", "apt-badge", {}), ee || (Y.style.visibility = "hidden"), j.apply(this, [this.badgeAttr]), t.appendChild(Y), m.apply(this), this.isRendered = !0, this.badgeAttr.isViewed || (this.badgeAttr.isViewed = !0), Y.setAttribute("tabindex", P.TAB_INDEX_START - 1);
                var n = this.badgeAttr,
                    r = n.altSettings,
                    o = n.alternateText,
                    i = r && r.enabled;
                o ? Y.setAttribute("aria-label", o) : i ? Y.setAttribute("aria-label", (0, I.stripHtml)(r.text)) : Y.setAttribute("aria-label", "Badge"), (0, I.disableFocusOnClick)(Y)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ICON_MAP = void 0;
    var p, m, v = function () {
        function e(e, t) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
        return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.checkStringHasWrapper = s, t.findTarget = d, t.formatContentForTooltip = g, t.Badge = f;
    var h = n(52),
        y = r(h),
        b = n(68),
        E = n(0),
        I = n(7),
        C = n(12),
        T = n(115),
        w = r(T),
        S = n(1),
        k = n(3),
        x = n(17),
        O = r(x),
        _ = n(6),
        A = n(41),
        P = n(8),
        L = n(33),
        N = r(L),
        B = n(72),
        R = r(B),
        D = n(19),
        M = n(116),
        U = n(15),
        F = "99998",
        V = "apt-badge--hidden",
        j = function (e) {
            return "BADGE_ICON_" + e
        },
        H = function (e) {
            return S.staticContentHost + "/images/badge/types/" + e + ".svg"
        },
        q = t.ICON_MAP = (p = {}, o(p, j(1), H("announce")), o(p, j(2), H("bulb")), o(p, j(3), H("cap")), o(p, j(4), H("exclam")), o(p, j(5), H("question")), o(p, j(6), H("flag")), o(p, j(7), H("guide")), o(p, j(8), H("arrow")), o(p, j(9), H("badge")), o(p, j(10), H("check")), o(p, j(11), H("cross")), o(p, j(12), H("dash")), o(p, j(13), H("feedback")), o(p, j(14), H("info")), o(p, j(15), H("nps")), o(p, j(16), H("star")), o(p, j(17), H("tooltip")), p),
        W = "ON_CLICK",
        G = (m = {}, o(m, W, "click"), o(m, "ON_HOVER", "mouseover"), m),
        K = {},
        z = function (e, t) {
            var n = K[e];
            if (n) return t(n);
            var r = q[e];
            C.AjaxUtil.getData(r, function (n) {
                return K[e] = n, t(n)
            })
        },
        Y = function (e) {
            return "center" === e
        },
        J = !0,
        X = !1
}, function (e, t, n) {
    "use strict";

    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (d === setTimeout) return setTimeout(e, 0);
        if ((d === r || !d) && setTimeout) return d = setTimeout, setTimeout(e, 0);
        try {
            return d(e, 0)
        } catch (t) {
            try {
                return d.call(null, e, 0)
            } catch (t) {
                return d.call(this, e, 0)
            }
        }
    }

    function a(e) {
        if (g === clearTimeout) return clearTimeout(e);
        if ((g === o || !g) && clearTimeout) return g = clearTimeout, clearTimeout(e);
        try {
            return g(e)
        } catch (t) {
            try {
                return g.call(null, e)
            } catch (t) {
                return g.call(this, e)
            }
        }
    }

    function s() {
        v && p && (v = !1, p.length ? m = p.concat(m) : h = -1, m.length && l())
    }

    function l() {
        if (!v) {
            var e = i(s);
            v = !0;
            for (var t = m.length; t;) {
                for (p = m, m = []; ++h < t;) p && p[h].run();
                h = -1, t = m.length
            }
            p = null, v = !1, a(e)
        }
    }

    function c(e, t) {
        this.fun = e, this.array = t
    }

    function u() {}
    var d, g, f = e.exports = {};
    ! function () {
        try {
            d = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
            d = r
        }
        try {
            g = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            g = o
        }
    }();
    var p, m = [],
        v = !1,
        h = -1;
    f.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        m.push(new c(e, t)), 1 !== m.length || v || i(l)
    }, c.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function (e) {
        return []
    }, f.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function () {
        return "/"
    }, f.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";
    (function (e) {
        function r(t, n, r) {
            function o(e) {
                if (e.target) {
                    var t = e.target.closest(f);
                    if (t) {
                        var r = t.getAttribute("data-tippy-trigger") || n.trigger || l.d.trigger;
                        if ((0, l.i)(r, u[e.type])) {
                            var o = (0, l.t)(t, v);
                            o && (g = g.concat(o))
                        }
                    }
                }
            }

            function i(e, t, n, r) {
                void 0 === r && (r = !1), e.addEventListener(t, n, r), d.push({
                    node: e,
                    eventType: t,
                    handler: n,
                    options: r
                })
            }

            function a(e) {
                var t = e.reference;
                i(t, "mouseover", o), i(t, "focusin", o), i(t, "click", o)
            }

            function s() {
                d.forEach(function (e) {
                    var t = e.node,
                        n = e.eventType,
                        r = e.handler,
                        o = e.options;
                    t.removeEventListener(n, r, o)
                }), d = []
            }

            function c(e) {
                var t = e.destroy;
                e.destroy = function (e) {
                    void 0 === e && (e = !0), e && g.forEach(function (e) {
                        e.destroy()
                    }), g = [], s(), t()
                }, a(e)
            }
            void 0 === r && (r = []), "production" !== e.env.NODE_ENV && (0, l.e)(!(n && n.target), ["You must specity a `target` prop indicating a CSS selector string matching", "the target elements that should receive a tippy."].join(" ")), r = n.plugins || r;
            var d = [],
                g = [],
                f = n.target,
                p = (0, l.r)(n, ["target"]),
                m = (0, l._)({}, p, {
                    plugins: r,
                    trigger: "manual"
                }),
                v = (0, l._)({}, p, {
                    plugins: r,
                    showOnCreate: !0
                }),
                h = (0, l.t)(t, m);
            return (0, l.n)(h).forEach(c), h
        }

        function o() {
            var e = (0, l.a)();
            return e.className = l.B, (0, l.s)([e], "hidden"), e
        }

        function i(e, t) {
            var n = t ? e.offsetWidth : e.offsetHeight;
            return {
                size: n,
                x: t ? n : 0,
                y: t ? 0 : n
            }
        }

        function a(e, t, n) {
            if (n.length < 2 || null === e) return t;
            switch (e) {
                case "top":
                case "bottom":
                    var r = n[0],
                        o = n[n.length - 1],
                        i = "top" === e,
                        a = r.top,
                        s = o.bottom,
                        l = i ? r.left : o.left,
                        c = i ? r.right : o.right;
                    return {
                        top: a, bottom: s, left: l, right: c, width: c - l, height: s - a
                    };
                case "left":
                case "right":
                    var u = Math.min.apply(Math, n.map(function (e) {
                            return e.left
                        })),
                        d = Math.max.apply(Math, n.map(function (e) {
                            return e.right
                        })),
                        g = n.filter(function (t) {
                            return "left" === e ? t.left === u : t.right === d
                        }),
                        f = g[0].top,
                        p = g[g.length - 1].bottom,
                        m = u,
                        v = d;
                    return {
                        top: f, bottom: p, left: m, right: v, width: v - m, height: p - f
                    };
                default:
                    return t
            }
        }

        function s(e, t) {
            return !e || !t || (e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sticky = t.inlinePositioning = t.followCursor = t.delegate = t.createSingleton = t.animateFill = t.roundArrow = t.hideAll = t.default = t.createTippyWithPlugins = void 0;
        var l = n(106);
        Object.defineProperty(t, "createTippyWithPlugins", {
            enumerable: !0,
            get: function () {
                return l.m
            }
        }), Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
                return l.t
            }
        }), Object.defineProperty(t, "hideAll", {
            enumerable: !0,
            get: function () {
                return l.l
            }
        }), Object.defineProperty(t, "roundArrow", {
            enumerable: !0,
            get: function () {
                return l.R
            }
        }), n(52);
        var c = function (t, n, r) {
                void 0 === n && (n = {}), void 0 === r && (r = []), "production" !== e.env.NODE_ENV && (0, l.e)(!Array.isArray(t), ["The first argument passed to createSingleton() must be an array of tippy", "instances. The passed value was", String(t)].join(" ")), r = n.plugins || r, t.forEach(function (e) {
                    e.disable()
                });
                var o, i, a = (0, l._)({}, l.d, {}, n).aria,
                    s = !1,
                    c = t.map(function (e) {
                        return e.reference
                    }),
                    u = {
                        fn: function (e) {
                            function n(t) {
                                if (o) {
                                    var n = "aria-" + o;
                                    t && !e.props.interactive ? i.setAttribute(n, e.popperChildren.tooltip.id) : i.removeAttribute(n)
                                }
                            }
                            return {
                                onAfterUpdate: function (t, n) {
                                    var r = n.aria;
                                    void 0 !== r && r !== a && (s ? (s = !0, e.setProps({
                                        aria: null
                                    }), s = !1) : a = r)
                                },
                                onDestroy: function () {
                                    t.forEach(function (e) {
                                        e.enable()
                                    })
                                },
                                onMount: function () {
                                    n(!0)
                                },
                                onUntrigger: function () {
                                    n(!1)
                                },
                                onTrigger: function (r, s) {
                                    var l = s.currentTarget,
                                        u = c.indexOf(l);
                                    l !== i && (i = l, o = a, e.state.isVisible && n(!0), e.popperInstance.reference = l, e.setContent(t[u].props.content))
                                }
                            }
                        }
                    };
                return (0, l.t)((0, l.a)(), (0, l._)({}, n, {
                    plugins: [u].concat(r),
                    aria: null,
                    triggerTarget: c
                }))
            },
            u = {
                mouseover: "mouseenter",
                focusin: "focus",
                click: "click"
            },
            d = {
                name: "animateFill",
                defaultValue: !1,
                fn: function (t) {
                    function n() {
                        t.popperChildren.backdrop = s
                    }
                    var r = t.popperChildren,
                        i = r.tooltip,
                        a = r.content,
                        s = t.props.animateFill && !l.b ? o() : null;
                    return {
                        onCreate: function () {
                            s && (n(), i.insertBefore(s, i.firstElementChild), i.setAttribute("data-animatefill", ""), i.style.overflow = "hidden", t.setProps({
                                animation: "shift-away",
                                arrow: !1
                            }))
                        },
                        onMount: function () {
                            if (s) {
                                var t = i.style.transitionDuration,
                                    n = Number(t.replace("ms", ""));
                                a.style.transitionDelay = Math.round(n / 10) + "ms", s.style.transitionDuration = t, (0, l.s)([s], "visible"), "production" !== e.env.NODE_ENV && ((0, l.w)("absolute" !== getComputedStyle(s).position, "The `tippy.js/dist/backdrop.css` stylesheet has not been\n              imported!\n              \n              The `animateFill` plugin requires this stylesheet to work."), (0, l.w)("none" === getComputedStyle(i).transform, "The `tippy.js/animations/shift-away.css` stylesheet has not\n              been imported!\n              \n              The `animateFill` plugin requires this stylesheet to work."))
                            }
                        },
                        onShow: function () {
                            s && (s.style.transitionDuration = "0ms")
                        },
                        onHide: function () {
                            s && (0, l.s)([s], "hidden")
                        },
                        onAfterUpdate: function () {
                            n()
                        }
                    }
                }
            },
            g = {
                name: "followCursor",
                defaultValue: !1,
                fn: function (e) {
                    function t(e) {
                        Object.keys(e).forEach(function (t) {
                            C[t] = (0, l.u)(e[t], C[t])
                        })
                    }

                    function n() {
                        return "manual" === e.props.trigger.trim()
                    }

                    function r() {
                        var t = !!n() || null !== E && !(0 === E.clientX && 0 === E.clientY);
                        return e.props.followCursor && t
                    }

                    function o() {
                        return l.f.isTouch || "initial" === e.props.followCursor && e.state.isVisible
                    }

                    function a() {
                        e.popperInstance && y && (e.popperInstance.reference = y)
                    }

                    function s() {
                        if (r() || e.props.placement !== C.placement) {
                            var t = C.placement,
                                n = t.split("-")[1];
                            I = !0, e.setProps({
                                placement: r() && n ? t.replace(n, "start" === n ? "end" : "start") : t
                            }), I = !1
                        }
                    }

                    function c() {
                        e.popperInstance && r() && (o() || !0 !== e.props.followCursor) && e.popperInstance.disableEventListeners()
                    }

                    function u() {
                        r() ? g() : a()
                    }

                    function d() {
                        r() && p(m)
                    }

                    function g() {
                        b.addEventListener("mousemove", p)
                    }

                    function f() {
                        b.removeEventListener("mousemove", p)
                    }

                    function p(t) {
                        var n = m = t,
                            r = n.clientX,
                            a = n.clientY;
                        if (e.popperInstance && e.state.currentPlacement) {
                            var s = (0, l.h)(t.target, function (e) {
                                    return e === v
                                }),
                                c = v.getBoundingClientRect(),
                                u = e.props.followCursor,
                                d = "horizontal" === u,
                                g = "vertical" === u,
                                p = (0, l.i)(["top", "bottom"], (0, l.j)(e.state.currentPlacement)),
                                b = i(h, p),
                                E = b.size,
                                I = b.x,
                                C = b.y;
                            !s && e.props.interactive || (null === y && (y = e.popperInstance.reference), e.popperInstance.reference = {
                                referenceNode: v,
                                clientWidth: 0,
                                clientHeight: 0,
                                getBoundingClientRect: function () {
                                    return {
                                        width: p ? E : 0,
                                        height: p ? 0 : E,
                                        top: (d ? c.top : a) - C,
                                        bottom: (d ? c.bottom : a) + C,
                                        left: (g ? c.left : r) - I,
                                        right: (g ? c.right : r) + I
                                    }
                                }
                            }, e.popperInstance.update()), o() && f()
                        }
                    }
                    var m, v = e.reference,
                        h = e.popper,
                        y = null,
                        b = (0, l.g)(e.props.triggerTarget || v),
                        E = null,
                        I = !1,
                        C = e.props;
                    return {
                        onAfterUpdate: function (e, n) {
                            I || (t(n), n.placement && s()), n.placement && c(), requestAnimationFrame(d)
                        },
                        onMount: function () {
                            d(), c()
                        },
                        onShow: function () {
                            n() && (E = {
                                clientX: 0,
                                clientY: 0
                            }, m = E, s(), u())
                        },
                        onTrigger: function (e, t) {
                            E || ((0, l.c)(t) && (E = {
                                clientX: t.clientX,
                                clientY: t.clientY
                            }, m = t), s(), u())
                        },
                        onUntrigger: function () {
                            e.state.isVisible || (f(), E = null)
                        },
                        onHidden: function () {
                            f(), a(), E = null
                        }
                    }
                }
            },
            f = {
                name: "inlinePositioning",
                defaultValue: !1,
                fn: function (e) {
                    function t() {
                        return !!e.props.inlinePositioning
                    }
                    var n = e.reference;
                    return {
                        onHidden: function () {
                            t() && (e.popperInstance.reference = n)
                        },
                        onShow: function () {
                            t() && (e.popperInstance.reference = {
                                referenceNode: n,
                                clientWidth: 0,
                                clientHeight: 0,
                                getBoundingClientRect: function () {
                                    return a(e.state.currentPlacement && (0, l.j)(e.state.currentPlacement), n.getBoundingClientRect(), (0, l.k)(n.getClientRects()))
                                }
                            })
                        }
                    }
                }
            },
            p = {
                name: "sticky",
                defaultValue: !1,
                fn: function (e) {
                    function t() {
                        return e.popperInstance ? e.popperInstance.reference : o
                    }

                    function n(t) {
                        return !0 === e.props.sticky || e.props.sticky === t
                    }

                    function r() {
                        var o = n("reference") ? t().getBoundingClientRect() : null,
                            c = n("popper") ? i.getBoundingClientRect() : null;
                        (o && s(a, o) || c && s(l, c)) && e.popperInstance.update(), a = o, l = c, e.state.isMounted && requestAnimationFrame(r)
                    }
                    var o = e.reference,
                        i = e.popper,
                        a = null,
                        l = null;
                    return {
                        onMount: function () {
                            e.props.sticky && r()
                        }
                    }
                }
            };
        t.animateFill = d, t.createSingleton = c, t.delegate = r, t.followCursor = g, t.inlinePositioning = f, t.sticky = p
    }).call(t, n(67))
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        var t = (0, O.getKcConfig)();
        if (t) {
            var n = t.kcId;
            G = n, a(function () {
                z = !1, V.botEventEmmiter.dispatchEvent("WIDGET_LOADED", e, {
                    kcId: n
                })
            }, function (t) {
                z = !1, V.botEventEmmiter.dispatchEvent("WIDGET_FAILED", e, {
                    kcId: n,
                    code: 500,
                    message: t
                })
            })
        }
    }

    function i(e, t, n, r, i) {
        var s = !1,
            l = K !== t.kcId;
        if ((r || K) && l && (P.KnowledgeCenterManager.clearWidgetLoadQueue(), (0, O.setKcConfig)({})), K = t.kcId, (0, O.setKcConfig)(t), e || l) {
            var c = {
                apiKey: k.eventTrackData.data[k.productIdParameter],
                aptId: k.eventTrackData.data[k.aptrinsicIdParam],
                initialConfig: t
            };
            P.KnowledgeCenterManager.initWidget(c, !1, Y, i), G ? (s = !0, o(i)) : G !== K ? (s = !1, P.KnowledgeCenterManager.registerAfterWidgetLoad(function () {
                return o(i)
            })) : z = !1
        } else l ? (s = !0, z = !1) : (s = !0, a(function () {
            z = !1, V.botEventEmmiter.dispatchEvent("WIDGET_LOADED", i, {
                kcId: K
            })
        }, function (e) {
            z = !1, V.botEventEmmiter.dispatchEvent("WIDGET_FAILED", i, {
                kcId: K,
                code: 500,
                message: e
            })
        }));
        s && P.KnowledgeCenterManager.updateWidgetConfig()
    }

    function a(e, t) {
        var n = k.eventTrackData.data[k.productIdParameter],
            r = k.eventTrackData.data[k.aptrinsicIdParam];
        P.KnowledgeCenterManager.fetchEntriesAndSendToWidget(n, r, e, t)
    }

    function s() {
        G = "", P.KnowledgeCenterManager.removeWidget(K), (0, F.removeEmbeddedListeners)(), K = "", (0, O.setKcConfig)({}), z = !1
    }

    function l(e, t, n, r) {
        var o = r.shouldRemoveWidget,
            i = r.shouldJustClean,
            a = r.shouldDispatchEvent;
        r.shouldRemoveHandlers && ee.removeAllHandler(), o ? s() : i && (K = "", (0, O.setKcConfig)({}), P.KnowledgeCenterManager.cleanWidget()), z = !1, a && V.botEventEmmiter.dispatchEvent("WIDGET_FAILED", n, {
            kcId: e,
            code: t,
            message: "Could not fetch knowledge center with provided id"
        })
    }

    function c(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = arguments[4],
            i = x.UserData.isUser(),
            a = H.UUIDGenerator.generateV4Id();
        if (r && $ && Z && (V.botEventEmmiter.addListener("WIDGET_LOADED", $, a), V.botEventEmmiter.addListener("WIDGET_FAILED", Z, a)), z && (N.logger.log(n + " is in progress"), l(K, 500, a, {
                shouldRemoveWidget: !0,
                shouldJustClean: !1,
                shouldDispatchEvent: !1,
                shouldRemoveHandlers: !1
            })), (0, O.getConfig)("widgetEnabled") && i && !(A.default.isPreview() && A.default.getAdditionalDetails().kcId) && !z) {
            var s = function (i) {
                    if (i) {
                        J = i.kcId;
                        var s = Object.assign({}, i);
                        if (!(0, q.validateConfigChecksum)(J, s)) return void l(n, 500, a, {
                            shouldRemoveWidget: !0,
                            shouldJustClean: !1,
                            shouldDispatchEvent: !0,
                            shouldRemoveHandlers: !0
                        });
                        w(i, e, r, a)
                    } else t ? z = !1 : l(n, 500, a, {
                        shouldRemoveWidget: !0,
                        shouldJustClean: !1,
                        shouldDispatchEvent: !0,
                        shouldRemoveHandlers: !0
                    });
                    o && o(i)
                },
                c = function (e) {
                    l(n, 404, a, {
                        shouldRemoveWidget: !0,
                        shouldJustClean: !1,
                        shouldDispatchEvent: !0,
                        shouldRemoveHandlers: !0
                    })
                };
            z = !0;
            var u = k.eventTrackData.data[k.productIdParameter];
            (0, P.fetchKnowledgeCenterConfig)(u, n, s, c)
        }
    }

    function u(e, t, n) {
        var r = n.onDone,
            o = n.onError,
            i = "API" === (0, O.getConfig)("fetchKcType");
        z && N.logger.log(e + " is in progress"), i && ($ = function (e) {
            var n = e.kcId;
            t && P.KnowledgeCenterManager.open(), z = !1, r && "function" == typeof r && r({
                id: n
            })
        }, Z = function (e) {
            var t = e.kcId,
                n = e.code,
                r = e.message;
            z = !1, o && "function" == typeof o && o({
                id: t,
                code: n,
                message: r
            }), ee.removeAllHandler()
        }, c(!0, !0, e, !0))
    }

    function d(e, t) {
        if ((0, B.isObject)(e)) {
            var n = function () {
                    Y = !1, u(null, t, {
                        onDone: i,
                        onError: o
                    })
                },
                r = e.id,
                o = e.onError,
                i = e.onDone,
                a = e.fetchDefault;
            if (r) {
                var s = function (e) {
                    !0 === a ? n() : "function" == typeof o && o(e)
                };
                Y = !0, u(r, t, {
                    onDone: i,
                    onError: s
                })
            } else !0 === a && n()
        }
    }

    function g(e, t, n, r) {
        var o = (0, O.getKcConfig)() || {},
            i = o.kcId;
        Object.keys(o).length > 0 && i ? (e ? P.KnowledgeCenterManager.open() : P.KnowledgeCenterManager.close(r), "function" == typeof t && t({
            kcId: i
        })) : "function" == typeof n && n({
            kcId: i,
            code: 404,
            message: "Not bot was found with id provided"
        })
    }

    function f() {
        var e = document.querySelector("#apt-widget");
        return e ? e && !e.classList.contains("apt-hidden") : null
    }

    function p(e) {
        try {
            var t = document.querySelector("#apt-widget"),
                n = f();
            t && e !== n && (e ? t.classList.remove("apt-hidden") : t.classList.add("apt-hidden"))
        } catch (e) {
            N.logger.log("error in togglerBotContainer " + e)
        }
    }

    function m() {
        var e = document.querySelector("#apt-widget");
        if (e) {
            return !e.querySelector(".apt-widget.apt-widget-window")
        }
        return !1
    }

    function v() {
        clearInterval(X), X = null, clearTimeout(Q), Q = null
    }

    function h(e, t) {
        try {
            v(), m() ? (t(), v()) : (X = setInterval(function () {
                m() && (t(), v())
            }, 200), Q = setTimeout(function () {
                v(), l(K, 500, e, {
                    shouldRemoveWidget: !0,
                    shouldDispatchEvent: !0,
                    shouldRemoveHandlers: !0
                }), N.logger.logInternalError(new Error("onWidgetClosed - error - could not close the widget in less than 3 seconds"))
            }, 3e3))
        } catch (t) {
            v(), l(K, 500, e, {
                shouldRemoveWidget: !0,
                shouldDispatchEvent: !0,
                shouldRemoveHandlers: !0
            }), N.logger.log("onWidgetClosed - error" + t)
        }
    }

    function y(e, t, n, r, o) {
        try {
            var a = (0, O.getConfig)("kcPositionType");
            (0, F.findWidgetContainer)(n.cssSelector, o, {
                isNewAPI: !1,
                positionType: a,
                fetchKcType: (0, O.getConfig)("fetchKcType"),
                kcId: t.kcId
            }, {
                onClick: P.KnowledgeCenterManager.toggleBot,
                onDone: function (n) {
                    J === t.kcId && (P.KnowledgeCenterManager.updateEmbeddedMappedElement(n), P.KnowledgeCenterManager.checkIsInitialized() || P.KnowledgeCenterManager.checkIsInProgress() || r ? P.KnowledgeCenterManager.checkIsInitialized() && !1 === f() && (g(!1), h(o, function () {
                        p(!0)
                    })) : i(e, t, n, r, o))
                },
                onFailed: function () {
                    J === t.kcId && (r ? s() : b())
                }
            })
        } catch (e) {
            clearInterval(X), X = null, N.logger.log("error in updateWidget " + e)
        }
    }

    function b() {
        g(!1), p(!1)
    }

    function E() {
        if ("injection" === (0, O.getConfig)("kcPositionType")) {
            var e = P.KnowledgeCenterManager.getEmbeddedMappedElement() || {
                    element: null
                },
                t = e.element;
            try {
                !t || t && !(0, W.elementContainsChild)((0, O.getBody)(), t) ? s() : p(!1)
            } catch (e) {
                s()
            }
        } else b()
    }

    function I() {
        var e = void 0,
            t = void 0;
        this.removeAllHandler = function () {
            t && (D.default.removeObserver(t), t = null), e && L.internalEventListener.removeListener("pageview", e)
        }, this.addHandlers = function (n, r) {
            e = function () {
                E(), n([], !0)
            }, L.internalEventListener.addListener("pageview", e), t = D.default.addObserver(function () {
                return !0
            }, n, function (e, t) {
                return T(e) || t
            })
        }
    }

    function C(e) {
        return "apt-widget" === e.id || 1 === e.nodeType && e.querySelector("#apt-widget")
    }

    function T(e) {
        var t = !1,
            n = !1;
        return e.some(function (e) {
            return e.addedNodes.forEach(function (e) {
                var t = 3 === e.nodeType;
                n || t || (n = C(e))
            }), n || e.removedNodes.forEach(function (e) {
                var n = 3 === e.nodeType;
                t || n || (t = C(e))
            }), !n && t
        })
    }

    function w(e, t, n, r) {
        function o() {
            i(t, e, null, n, r)
        }
        var a = e.windowSettings.embedKCSettings.elementSelector,
            l = function (o, i) {
                var l = T(o);
                l && s(), (l || i) && te(t, e, a, n, r)
            };
        if ("embedded" === (0, O.getConfig)("kcDisplayType")) {
            var c = (0, O.getConfig)("kcPositionType"),
                u = "injection" === c;
            K !== e.kcId && (z = !1, P.KnowledgeCenterManager.cleanWidget(), u && (G = "", P.KnowledgeCenterManager.removeWidget()));
            var d = P.KnowledgeCenterManager.checkIsInitialized();
            P.KnowledgeCenterManager.checkIsInitialized() || P.KnowledgeCenterManager.checkIsInProgress() ? d && n && (ee.removeAllHandler(), (0, F.removeEmbeddedListeners)(), S(a, o, function () {
                ee.addHandlers(l, r)
            })) : ((0, F.removeEmbeddedListeners)(), ee.removeAllHandler(), S(a, o, function () {
                ee.addHandlers(l, r)
            }))
        } else o()
    }

    function S(e, t, n) {
        (0, j.addDOMReadyListener)(function () {
            (0, M.findInAll)(e, (0, U.getRegisteredIframes)(), function (e) {
                e && t(e), n && n(e)
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.removeWidget = s, t.initKnowledgeCenter = c, t.fetchKcByApi = d, t.toggleKcBot = g;
    var k = n(4),
        x = n(23),
        O = n(1),
        _ = n(14),
        A = r(_),
        P = n(29),
        L = n(10),
        N = n(3),
        B = n(0),
        R = n(30),
        D = r(R),
        M = n(17),
        U = n(6),
        F = n(54),
        V = n(84),
        j = n(9),
        H = n(16),
        q = n(55),
        W = n(19),
        G = void 0,
        K = void 0,
        z = !1,
        Y = !1,
        J = "",
        X = void 0,
        Q = void 0,
        $ = void 0,
        Z = void 0,
        ee = new I,
        te = (0, B.debounce)(y, 500)
}, , function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(5),
        a = n(1),
        s = window.localStorage,
        l = new i.LocalCache,
        c = function () {
            function e() {
                r(this, e)
            }
            return o(e, null, [{
                key: "storeBadges",
                value: function (e, t, n) {
                    var r = JSON.parse(s.getItem("px.badge")) || {};
                    r.sid !== e && (r = {
                        bgl: []
                    }), r.sid = e, r.bgl = n ? t : r.bgl.concat(t), s.setItem("px.badge", JSON.stringify(r))
                }
            }, {
                key: "fetchBadges",
                value: function (e) {
                    if (!(0, a.isIframe)()) {
                        var t = JSON.parse(s.getItem("px.badge")) || {};
                        return t.sid === e ? t.bgl : []
                    }
                }
            }, {
                key: "storeBadge",
                value: function (e, t) {
                    var n = this.fetchBadges(e),
                        r = t.badgeSettings.id,
                        o = n.filter(function (e) {
                            return e.badgeSettings.id !== r
                        });
                    o.push(t), this.storeBadges(e, o, !0)
                }
            }, {
                key: "clearAll",
                value: function () {
                    s.removeItem("px.badge")
                }
            }, {
                key: "getBadgesOfIframe",
                value: function (e) {
                    var t = l.getKey("iframeBadges");
                    return t ? t[e] ? t[e] : [] : (l.setdata("iframeBadges", {}), [])
                }
            }, {
                key: "addBadgeToIframe",
                value: function (t, n) {
                    e.getAllBadgesInIframes().indexOf(n) > -1 && e.removeBadgeFromIframe(n);
                    var r = l.getKey("iframeBadges");
                    if (r || l.setdata("iframeBadges", {}), r = l.getKey("iframeBadges"), r[t]) {
                        var o = r[t]; - 1 === o.indexOf(n) && o.push(n), r[t] = o
                    } else r[t] = [n];
                    l.setdata("iframeBadges", r)
                }
            }, {
                key: "getIframeIdOfBadge",
                value: function (e) {
                    var t = l.getKey("iframeBadges"),
                        n = void 0;
                    if (t)
                        for (var r = Object.keys(t), o = 0; o < r.length; o += 1) {
                            var i = r[o],
                                a = t[i];
                            if (a.length > 0) {
                                var s = a.indexOf(e);
                                if (s > -1) {
                                    n = i;
                                    break
                                }
                            }
                        }
                    return n
                }
            }, {
                key: "removeBadgeFromIframe",
                value: function (e) {
                    var t = l.getKey("iframeBadges");
                    t || l.setdata("iframeBadges", {}), t = l.getKey("iframeBadges"), Object.keys(t).forEach(function (n) {
                        var r = t[n],
                            o = r.indexOf(e);
                        o > -1 && r.splice(o, 1), t[n] = r
                    }), l.setdata("iframeBadges", t)
                }
            }, {
                key: "getAllBadgesInIframes",
                value: function () {
                    var e = l.getKey("iframeBadges");
                    return (e ? Object.values(e) : []).reduce(function (e, t) {
                        return e.concat(t)
                    }, [])
                }
            }, {
                key: "setIsPreview",
                value: function (e) {
                    l.setdata("isPreview", e)
                }
            }, {
                key: "getIsPreview",
                value: function () {
                    return l.getKey("isPreview")
                }
            }]), e
        }();
    t.default = c
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = e.radioOptions,
            n = e.name,
            r = e.selectCallback,
            i = null;
        this.getSelectedValue = function () {
            return i
        }, this.render = function () {
            var a = [];
            return t && t.forEach(function (t) {
                var s = (0, o.createInput)("radio", "", t.value, "", !1, t.selected, null, {
                    name: n,
                    tabIndex: t.tabIndex || -1
                });
                if (t.selected && (i = t.value), t && t.value || 0 === t.value) {
                    var l = t.children,
                        c = t.text,
                        u = {},
                        d = [s];
                    c && (u.text = c), l && d.push(l);
                    var g = e.childrenClassName.split(" "),
                        f = (0, o.createElement)("label", g, u, d);
                    (0, o.addEventListener)(f, "click", function () {
                        i = s.value, r && r(s.value)
                    }), a.push(f)
                }
            }), (0, o.createElement)("div", e.className, null, a)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;
    var o = n(0)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t, n, r) {
        var o = S[e];
        o || (o = {}, S[e] = o), o[t] = new O(t, r, n)
    }

    function a(e, t) {
        var n = S[e];
        return n ? n[t] : null
    }

    function s(e, t) {
        var n = a(e, t);
        return n ? n.handlerFunc : null
    }

    function l(e) {
        var t = S[e];
        t && Object.values(t).forEach(function (e) {
            switch (e.type) {
                case "CLICK":
                    (0, h.removeEventListener)(document, "click", e.handlerFunc);
                    break;
                case "PAGE":
                    b.internalEventListener.removeListener("pageview", e.handlerFunc)
            }
        }), delete S[e];
        try {
            w.default.removeObserver(k[e])
        } catch (e) {}
        delete k[e]
    }

    function c(e, t, n, r) {
        try {
            (0, E.findInAll)(t.elementSelector, (0, C.getRegisteredIframes)(), function (e) {
                e && (e.element || e.iframeData) && !1 !== e.isVisible || (w.default.removeObserver(k[t.id]), l(t.id), r(t, n))
            })
        } catch (e) {
            y.logger.logInternalError(e, "failure in mutation observer handler for guide tooltip on redirect"), r(t), w.default.removeObserver(k[t.id]), l(t.id)
        }
    }

    function u(e, t) {
        var n = e.overlay && e.overlay.modal,
            r = t.modal && t.overlayFill > 0;
        return n ? e.overlay.fill > 0 : r
    }

    function d(e, t, n, r, o, i, a) {
        try {
            if (!u(i, a))
                if ("STEP" !== n || (0, h.hasParentClass)(e.target, "px-engagement-wrapper-guide") || (0, h.hasParentClass)(e.target, "apt-guide-target-block")) "ELEMENT" !== n || (0, h.hasParentClass)(e.target, "px-engagement-wrapper-guide") || (r.isDom ? r.element && !(0, h.hasElement)(r.element, e.target) && (o(i, a), (0, h.removeEventListener)(document, "click", s(i.id, t)), l(i.id)) : (x[r.iframeSource.iframeId] = {
                    handlerId: t,
                    stepSettings: i,
                    guideSettings: a,
                    errorHandler: o
                }, I.default.addOutsideEventHandler(r.iframeSource, i.elementSelector)));
                else {
                    if (r.isDom && r.element && (0, h.hasElement)(r.element, e.target)) return void setTimeout(function () {
                        (0, h.isElementVisibleProxy)(r.element, !1, null) || (o(i, a), (0, h.removeEventListener)(document, "click", s(i.id, t)), l(i.id))
                    }, 1500);
                    o(i, a)
                }
        } catch (e) {
            y.logger.logInternalError(e, "failed to handle tooltip action for show hide"), (0, h.removeEventListener)(document, "click", s(i.id, t)), l(i.id)
        }
    }

    function g(e, t, n, r) {
        try {
            (0, E.findInAll)(t.elementSelector, (0, C.getRegisteredIframes)(), function (e) {
                e && (e.element || e.iframeData) && !1 !== e.isVisible || r(t)
            }), b.internalEventListener.removeListener("pageview", s(t.id, e)), l(t.id)
        } catch (n) {
            y.logger.logInternalError(n, "failure in page change handler for guide tooltip on redirect"), r(t), b.internalEventListener.removeListener("pageview", s(t.id, e)), l(t.id)
        }
    }

    function f(e, t, n) {
        var r = (0, h.getHandler)(!1, g, e, t, n),
            o = v(r, 2),
            a = o[0],
            s = o[1];
        i(e.id, a, s), b.internalEventListener.addListener("pageview", s, "PAGE")
    }

    function p(e, t, n, r, o) {
        var a = (0, h.getHandler)(!0, d, e, t, o, n, r),
            s = v(a, 2),
            l = s[0],
            c = s[1];
        (0, h.addEventListener)(document, "click", c), i(n.id, l, c, "CLICK")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var m = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        v = function () {
            function e(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }
            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        h = n(0),
        y = n(3),
        b = n(10),
        E = n(17),
        I = r(E),
        C = n(6),
        T = n(30),
        w = r(T),
        S = {},
        k = {},
        x = {},
        O = function e(t, n, r) {
            o(this, e), this.handlerId = t, this.type = n, this.handlerFunc = r
        },
        _ = function () {
            function e() {
                o(this, e)
            }
            return m(e, [{
                key: "addNavigationHandler",
                value: function (e, t, n, r) {
                    if ("TOOLTIP" === t.type) {
                        var o = (0, h.getHandler)(!1, c, t, n, r),
                            i = v(o, 2),
                            a = i[1],
                            s = w.default.addObserver(function () {
                                return !0
                            }, a);
                        k[t.id] = s;
                        var l = t.navigation,
                            u = l.nextStepTrigger,
                            d = l.nextButtonAction;
                        switch (u) {
                            case "NAVIGATION_CLICK":
                                "REDIRECT" === d ? (f(t, n, r), p("STEP", e, t, n, r)) : "SHOW_NEXT" === d && p("STEP", e, t, n, r);
                                break;
                            case "ELEMENT_CLICK":
                                "SHOW_NEXT" === d ? p("ELEMENT", e, t, n, r) : "REDIRECT" === d ? (p("ELEMENT", e, t, n, r), f(t, n, r)) : "SHOW_ON_NEXT_PAGE" === d && (p("ELEMENT", e, t, n, r), f(t, n, r));
                                break;
                            case "ELEMENT_HOVER":
                            case "INPUT_TEXT_COMPLETION":
                                p("ELEMENT", e, t, n, r)
                        }
                    }
                }
            }, {
                key: "handleIframeExternalClick",
                value: function (e) {
                    var t = x[e];
                    t && ((0, h.removeEventListener)(document, "click", s(t.stepSettings.id, t.handlerId)), l(t.stepSettings.id))
                }
            }, {
                key: "removeAllHandlers",
                value: function () {
                    try {
                        Object.keys(S).forEach(function (e) {
                            l(e)
                        })
                    } catch (e) {
                        y.logger.logInternalError(e, "failed to remove all handlers")
                    }
                }
            }]), e
        }(),
        A = new _;
    t.default = A
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e.titleHtml + e.notSatisfiedHtml + e.satisfiedHtml + e.defaultComment
    }

    function o(e, t, n) {
        function o() {
            return (0, a.validateComment)(e, E, I)
        }

        function c() {
            L.classList.remove("apt-hidden"), P.classList.remove("apt-hidden"), B.classList.add("apt-hidden"), N.classList.add("apt-hidden")
        }

        function p(e, t, n) {
            var r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                    var l = a.value;
                    if (t === l.from) return void(n.innerHTML = l.comment)
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
        }

        function m(e) {
            for (var t = O.getLabelElements(e), n = document.createDocumentFragment(), r = 0; r < t.length; ++r) n.appendChild(t[r]);
            (0, d.arrayFrom)(S.childNodes).forEach(function (e) {
                return S.removeChild(e)
            }), S.appendChild(n), S.classList.contains("labelWrapperElement.classList") || S.classList.add("px-labels-show")
        }

        function v(t) {
            c(), t ? (P.classList.add("apt-hidden"), N.classList.remove("apt-hidden")) : (L.classList.add("apt-hidden"), B.classList.remove("apt-hidden")), y = t, e.showDynamicComment && p(e.dynamicComments, y, T), e.labelSetting && e.labelSetting.enabled && m(t), k.forEach(function (e) {
                e.style.display = "none"
            }), x.forEach(function (e) {
                return !e.classList.contains("apt-survey-show") && e.classList.add("apt-survey-show")
            }), e.mergeFirstSteps && w.classList.remove("apt-survey-submit-disabled"), !e.mergeFirstSteps && (0, f.isSnoozeButtonEnabled)(e.activationType, e.snoozeButton, e.activationTypes) && (0, g.hideSnooze)()
        }

        function h() {
            return (0, i.isBlank)(e.buttonText) ? "Submit" : e.buttonText
        }
        var y = null,
            b = void 0,
            E = void 0,
            I = void 0,
            C = void 0,
            T = void 0,
            w = void 0,
            S = void 0,
            k = [],
            x = [],
            O = void 0,
            _ = l.TAB_INDEX_START + 1,
            A = _,
            P = (0, i.createElementFromString)("<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30' style='width:250px; height: 70px;'>\n        <g fill='none'  fillRule='evenodd'>\n        <g stroke=" + e.positiveButtonBorderColor + " fill=" + e.positiveButtonBackgroundColor + " stroke-linecap='round' stroke-linejoin='round' strokeWidth=" + e.positiveButtonBorderWidth + " >\n            <path d='M13.5 9H18V18.5H13.5z' transform='translate(6 5) matrix(-1 0 0 1 31.5 0)' />\n              <path d='M12 9.928c-.15-.56-2.496-3.571-3.321-5.309-.3-.63-.58-1.276-.833-1.907-.158-.393-.269-.685-.352-.914.088-.596.058-1.257-.113-1.553C7.29.091 7.125-.003 6.947 0 6.372.011 5.79.218 5.399.764c-.535.745-.516 1.938-.02 3.457.42 1.278.532 2.378.34 3.3l-1.202-.224c-1.878-.413-2.827-.38-3.661.385-.422.389-.568.88-.495 1.39.044.304.15.557.276.761.015.023.011.053-.036.097-.103.104-.186.2-.294.37-.179.28-.293.59-.305.923-.024.52.207 1.02.65 1.483.009.062-.01.105-.046.181-.03.063-.058.133-.085.21-.066.189-.11.392-.12.606-.039.72.302 1.353.964 1.853.025.02.034.05.025.077-.015.041-.024.084-.027.127.006-.068-.004-.025-.02.063-.07.375-.05.781.135 1.177l.056.11c.357.644 1.091 1.07 2.142 1.294.794.173 4.475.079 5.737-.023.752-.06 1.465-.137 1.708-.171l.42-.05' transform='translate(6 5)' />\n        </g>\n        </g>\n    </svg>");
        P.setAttribute("aria-label", "positive"), P.setAttribute("role", "button");
        var L = (0, i.createElementFromString)("<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'  style='width:250px; height: 70px;'>\n        <g fill='none'  fillRule='evenodd'>\n            <g stroke=" + e.negativeButtonBorderColor + " fill=" + e.negativeButtonBackgroundColor + " stroke-linecap='round' stroke-linejoin='round' strokeWidth=" + e.negativeButtonBorderWidth + " >\n                <path d='M0 0.5H4.5V10H0z' transform='translate(6 5) matrix(1 0 0 -1 0 10.5)' />\n              <path d='M6 9.072c.15.56 2.496 3.571 3.321 5.309.3.63.58 1.276.833 1.907.158.393.269.685.352.914-.088.596-.058 1.257.113 1.553.09.154.256.248.434.245.575-.011 1.156-.218 1.548-.764.535-.745.516-1.938.02-3.457-.42-1.278-.532-2.378-.34-3.3l1.202.224c1.878.413 2.827.38 3.661-.385.422-.389.568-.88.495-1.39-.044-.304-.15-.557-.276-.761-.015-.023-.011-.053.036-.097.103-.104.186-.2.294-.37.179-.28.293-.59.305-.923.024-.52-.207-1.02-.65-1.483-.009-.062.01-.105.046-.181.03-.063.058-.133.085-.21.066-.189.11-.392.12-.606.039-.72-.302-1.353-.964-1.853-.025-.02-.034-.05-.025-.077.015-.041.024-.084.027-.127-.006.068.004.025.02-.063.07-.375.05-.781-.135-1.177l-.056-.11c-.357-.644-1.091-1.07-2.142-1.294C13.53.423 9.849.517 8.587.619c-.752.06-1.465.137-1.708.171l-.42.05' transform='translate(6 5)' />\n            </g>\n        </g>\n    </svg>");
        L.setAttribute("aria-label", "negative"), L.setAttribute("role", "button");
        var N = (0, i.createElementFromString)("<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30' style='width:250px; height: 70px;'>\n        <g fill='none'  fillRule='evenodd'>\n            <g stroke=" + e.selectedButtonsBorderColor + " fill=" + e.selectedButtonsBackgroundColor + " stroke-linecap='round' stroke-linejoin='round' strokeWidth=" + e.selectedButtonsBorderWidth + " >\n              <path d='M13.5 9H18V18.5H13.5z' transform='translate(6 5) matrix(-1 0 0 1 31.5 0)' />\n              <path d='M12 9.928c-.15-.56-2.496-3.571-3.321-5.309-.3-.63-.58-1.276-.833-1.907-.158-.393-.269-.685-.352-.914.088-.596.058-1.257-.113-1.553C7.29.091 7.125-.003 6.947 0 6.372.011 5.79.218 5.399.764c-.535.745-.516 1.938-.02 3.457.42 1.278.532 2.378.34 3.3l-1.202-.224c-1.878-.413-2.827-.38-3.661.385-.422.389-.568.88-.495 1.39.044.304.15.557.276.761.015.023.011.053-.036.097-.103.104-.186.2-.294.37-.179.28-.293.59-.305.923-.024.52.207 1.02.65 1.483.009.062-.01.105-.046.181-.03.063-.058.133-.085.21-.066.189-.11.392-.12.606-.039.72.302 1.353.964 1.853.025.02.034.05.025.077-.015.041-.024.084-.027.127.006-.068-.004-.025-.02.063-.07.375-.05.781.135 1.177l.056.11c.357.644 1.091 1.07 2.142 1.294.794.173 4.475.079 5.737-.023.752-.06 1.465-.137 1.708-.171l.42-.05' transform='translate(6 5)' />\n            </g>\n        </g>\n    </svg>");
        N.setAttribute("aria-label", "positive selected"), N.setAttribute("role", "button");
        var B = (0, i.createElementFromString)("<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'  style='width:250px; height: 70px;'>\n            <g fill='none'  fillRule='evenodd'>\n                <g stroke=" + e.selectedButtonsBorderColor + " fill=" + e.selectedButtonsBackgroundColor + " stroke-linecap='round' stroke-linejoin='round' strokeWidth=" + e.selectedButtonsBorderWidth + " >\n                <path d='M0 0.5H4.5V10H0z' transform='translate(6 5) matrix(1 0 0 -1 0 10.5)' />\n              <path d='M6 9.072c.15.56 2.496 3.571 3.321 5.309.3.63.58 1.276.833 1.907.158.393.269.685.352.914-.088.596-.058 1.257.113 1.553.09.154.256.248.434.245.575-.011 1.156-.218 1.548-.764.535-.745.516-1.938.02-3.457-.42-1.278-.532-2.378-.34-3.3l1.202.224c1.878.413 2.827.38 3.661-.385.422-.389.568-.88.495-1.39-.044-.304-.15-.557-.276-.761-.015-.023-.011-.053.036-.097.103-.104.186-.2.294-.37.179-.28.293-.59.305-.923.024-.52-.207-1.02-.65-1.483-.009-.062.01-.105.046-.181.03-.063.058-.133.085-.21.066-.189.11-.392.12-.606.039-.72-.302-1.353-.964-1.853-.025-.02-.034-.05-.025-.077.015-.041.024-.084.027-.127-.006.068.004.025.02-.063.07-.375.05-.781-.135-1.177l-.056-.11c-.357-.644-1.091-1.07-2.142-1.294C13.53.423 9.849.517 8.587.619c-.752.06-1.465.137-1.708.171l-.42.05' transform='translate(6 5)' />\n                </g>\n            </g>\n        </svg>");
        B.setAttribute("aria-label", "negative selected"), B.setAttribute("role", "button"), this.getData = function () {
            return {
                selected: y,
                comment: E.value,
                contactMeAllowed: e.showContactMeMessage ? C.checked : null,
                labels: e.labelSetting && e.labelSetting.enabled ? O.getSelectedLabels() : []
            }
        }, this.hide = function () {
            b.style.display = "none"
        }, this.focus = function () {
            var e = null != y && L ? L : b.querySelector('[tabindex="' + _ + '"]');
            e && (0, s.focusElement)(e)
        }, this.render = function (r) {
            var a = (0, s.toDom)(e.titleHtml, !1),
                d = e.contactMeMessage || "It's okay to contact me about my feedback";
            (0, f.addTabbableEnterListener)(), E = (0, i.createElement)("textArea"), C = (0, i.createInput)("checkbox", void 0, !1, void 0, void 0, !1, void 0, {
                "aria-label": d
            }), I = (0, i.createElement)("div", "apt-error-message", {
                text: "Comment can be at most 1000 characters"
            }), I.setAttribute("role", "alert"), c();
            var p = (0, i.createElement)("div", ["apt-contact-wrapper"], void 0, [C, (0, i.createElement)("div", "apt-contact-me-text", {
                text: d,
                dataAtt: [{
                    name: "aria-hidden",
                    value: "true"
                }]
            })]);
            !e.showContactMeMessage && (p.style.display = "none"), T = e.showDynamicComment ? (0, i.createElement)("div") : (0, s.toDom)(e.defaultComment);
            var m = (0, i.createElement)("div", ["apt-survey-choices-wrapper"], null, [(0, i.createElement)("div", "apt-survey-choices", null, [L, B, P, N]), (0, i.createElement)("div", "apt-survey-choices-legend", null, [(0, i.createElement)("div", null, null, [(0, s.toDom)(e.notSatisfiedHtml)]), (0, i.createElement)("div", null, null, [(0, s.toDom)(e.satisfiedHtml)])])]),
                y = (0, i.createElement)("div", ["apt-survey-comment"], null, [T]),
                R = (0, i.createElement)("div", "apt-survey-submit-text", {
                    text: h()
                });
            w = (0, i.createElement)("div", "apt-survey-submit", null, [R]);
            var D = (0, i.createElement)("div", "px-submit-container", null, [w]),
                M = e.labelSetting;
            M && M.enabled && (O = new u.default(M.ranges, M)), R.setAttribute("aria-hidden", "true"), w.setAttribute("role", "button"), w.setAttribute("aria-label", R.textContent), S = (0, i.createElement)("div", ["px-survey-labels"]);
            var U = (0, i.createElement)("div", "bottom-feedback-container", null, [E, I, "DIALOG" === e.viewType && p, D]),
                F = (0, i.createElement)("div", "apt-feedback-text-wrapper", null, [U, "BAR" === e.viewType && (0, i.createElement)("div", "", null, [p])]),
                V = (0, i.createElement)("div", "apt-survey-feedback", null, [y, S, F]);
            V.setAttribute("aria-live", "polite"), "BAR" === e.viewType && (U.classList.add("bottom-feedback-container-bar"), w.classList.add("apt-survey-submit-bar")), w.style.color = e.submitButtonTextColor, w.style.backgroundColor = e.submitButtonBackgroundColor, w.style.borderWidth = e.submitButtonBorderWidth + "px", w.style.borderRadius = e.submitButtonBorderRadius + "px", w.style.borderColor = e.submitButtonBorderColor, E.placeholder = e.placeholderText || "Share your thoughts about your choice...", (0, i.addEventListener)(E, "keyup", o);
            var j = (0, i.createElement)("div", "apt-survey-title", null, [a]),
                H = [j, m, V];
            e.showFooter && H.push((0, s.toDom)(e.footer, !1, "apt-survey-footer")), b = (0, i.createElement)("div", "apt-survey-step", null, H), b.setAttribute("id", "step-" + e.id), A = _, A = (0, f.setTabIndexes)(a, A), L.setAttribute("tabindex", A), B.setAttribute("tabindex", A), A += 1, P.setAttribute("tabindex", A), N.setAttribute("tabindex", A), A += 1, A = (0, f.setTabIndexes)(T, A), O && (A = O.setTabIndexes(A)), A = (0, g.addSnoozeForScoreSurvey)(e, r, D, H, A), E.setAttribute("tabindex", A), A += 1, C.setAttribute("tabindex", A), A += 1, w.setAttribute("tabindex", e.mergeFirstSteps ? l.NO_TAB_INDEX : A), A += 1;
            var q = function () {
                o() && t()
            };
            (0, i.addEventListener)(w, "click", q), (0, i.addEnterKeyDownListener)(w, q), n(w);
            var W = function () {
                v(0)
            };
            n(C), (0, i.addEventListener)(L, "click", W), (0, i.addEnterKeyDownListener)(L, W), n(L), n(B);
            var G = function () {
                v(1)
            };
            return (0, i.addEventListener)(P, "click", G), (0, i.addEnterKeyDownListener)(P, G), n(P), n(N), !e.mergeFirstSteps && k.push(a), !e.mergeFirstSteps && x.push(V), e.mergeFirstSteps && V.classList.add("apt-survey-show"), e.mergeFirstSteps && w.classList.add("apt-survey-submit-disabled"), b
        }, this.getSettings = function () {
            return e
        }, this.getHtml = function () {
            return r(e)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = n(37),
        s = n(7),
        l = n(8),
        c = n(51),
        u = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(c),
        d = n(11),
        g = n(25),
        f = n(15);
    o.getHtml = function (e) {
        return r(e)
    }, t.default = o
}, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        var l = function () {
                return (0, o.isBlank)(t.buttonText) ? t.isLast ? "Close" : "Next" : t.buttonText
            }(),
            c = (0, i.toDom)(e, !1, "apt-survey-title"),
            u = a.TAB_INDEX_START + 1,
            d = u;
        d = (0, s.setTabIndexes)(c, d);
        var g = (0, o.createElement)("div", "apt-survey-close-button", null, [(0, o.createElement)("div", "apt-survey-close-text", {
            text: l
        })]);
        g.setAttribute("tabindex", d), g.setAttribute("role", "button"), g.setAttribute("aria-label", l), g.style.color = t.closeButtonTextColor, g.style.backgroundColor = t.closeButtonBackgroundColor, g.style.borderRadius = t.closeButtonBorderRadius + "px", g.style.borderWidth = t.closeButtonBorderWidth + "px", g.style.borderColor = t.closeButtonBorderColor, (0, o.addEventListener)(g, "click", n), (0, o.addEnterKeyDownListener)(g, n), r(g);
        var f = (0, o.createElement)("div", "apt-survey-step", null, [c, g]);
        f.setAttribute("id", "step-" + t.id), this.render = function () {
            var e = f.querySelector(".apt-survey-close-button");
            return r(e), f
        }, this.focus = function () {
            var e = f.querySelector('[tabindex="' + u + '"]');
            (0, i.focusElement)(e)
        }, this.hide = function () {
            f.style.display = "none"
        }, this.getSettings = function () {
            return t
        }, this.getHtml = function () {
            return e
        }, this.isValid = function () {
            return !0
        }, this.getNextTabIndex = function () {
            return d
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(0),
        i = n(7),
        a = n(8),
        s = n(15);
    r.getHtml = function (e) {
        return e.html
    }, t.default = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e.notSatisfiedHtml + e.satisfiedHtml + e.defaultComment
    }

    function o(e, t) {
        function n() {
            return 39 * (E - b + 1) - 8
        }

        function o(t) {
            t.style.borderWidth = e.buttonsBorderWidth + "px", t.style.borderRadius = e.buttonsBorderRadius + "px", t.style.borderColor = e.buttonsBorderColor, t.style.color = e.buttonsTextColor, t.style.backgroundColor = e.buttonsBackgroundColor
        }

        function c() {
            for (var t = [], n = b; n <= E; n += 1) {
                var r = (0, l.createElement)("span", ["apt-survey-dynamic-rating-radio-label"], {
                    text: n
                });
                r.style.borderRadius = e.buttonsBorderRadius + "px", t.push({
                    children: r,
                    value: n,
                    tabIndex: p,
                    selected: v === n
                }), p += 1
            }
            return t
        }

        function f(t) {
            return new u.default({
                name: "apt-trigger-radio-" + e.id,
                className: "apt-survey-dynamic-rating-radio-answers",
                childrenClassName: "apt-survey-dynamic-rating-radio px-survey-rating-button",
                selectCallback: function (t) {
                    h && o(h);
                    var n = document.querySelector('input[name="apt-trigger-radio-' + e.id + '"]:checked');
                    n && (h = n.parentElement, h.style.backgroundColor = e.selectedButtonsBackgroundColor, h.style.color = e.selectedButtonsTextColor, h.style.borderWidth = e.selectedButtonsBorderWidth + "px", h.style.borderColor = e.selectedButtonsBorderColor), v = t
                },
                radioOptions: t
            }).render()
        }
        var p = i.TAB_INDEX_START,
            m = void 0,
            v = void 0,
            h = void 0,
            y = t,
            b = e.minAnswer,
            E = e.maxAnswer;
        return this.isValid = function () {
            return !0
        }, this.setTabIndex = function (e) {
            p = e
        }, this.render = function () {
            var t = (0, s.renderSurveyTitle)(e, e.titleHtml, ["apt-survey-dynamic-rating-wrapper"], ["apt-survey-dynamic-rating-title"], y);
            p = (0, g.setTabIndexes)(t, p);
            var r = c(),
                i = f(r);
            (0, d.arrayFrom)(i.childNodes).forEach(o);
            var u = (0, l.createElement)("div", "apt-survey-dynamic-rating-labels-wrapper", null, [(0, a.toDom)(e.notSatisfiedHtml, !0), (0, a.toDom)(e.satisfiedHtml, !0)]);
            "PORTRAIT" === e.orientation && (u.style.maxWidth = "100%", u.style.width = n() + "px");
            var v = (0, l.createElement)("div", ["apt-survey-dynamic-rating-answers-wrapper", "apt-survey-answer-wrapper", "px-survey-answer-wrapper", "px-survey-rating-answer-wrapper"], null, [i, u]);
            return m = (0, l.createElement)("div", "apt-survey-dynamic-rating-step", null, [t, v]), m.setAttribute("id", "step-" + e.id), m
        }, this.focus = function () {}, this.hide = function () {
            m.style.display = "none"
        }, this.getData = function () {
            return {
                selected: v
            }
        }, this.getNextTabIndex = function () {
            return p
        }, this.getSettings = function () {
            return e
        }, this.getHtml = function () {
            return r(e)
        }, this.updateStepNumber = function (e) {
            (0, s.updateStepNumber)(m, e), y = e
        }, this.getStepNumber = function () {
            return y
        }, this
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(8),
        a = n(7),
        s = n(25),
        l = n(0),
        c = n(73),
        u = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(c),
        d = n(11),
        g = n(15);
    o.getHtml = function (e) {
        return r(e)
    }, t.default = o
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e.answers.map(function (e) {
            return e.text
        }).join("") + e.question
    }

    function o(e, t, n, o) {
        function l(e, t, n) {
            n && e.checked && E.length >= n ? (e.checked = !1, C.style.display = "inline-block") : (C.style.display = "none", T.style.display = "none"), e.checked ? -1 === E.indexOf(t) && E.push(t) : E = E.filter(function (e) {
                return e !== t
            })
        }

        function g(t) {
            var n = new c.default({
                name: "apt-trigger-radio-" + e.id,
                className: "apt-survey-multi-choice-radio-answers",
                childrenClassName: "apt-survey-multi-choice-radio",
                selectCallback: function (e) {
                    E[0] = e
                },
                radioOptions: t.map(function (e) {
                    var t = (0, i.createElement)("div", ["apt-survey-multi-choice-radio-label"]);
                    t.innerHTML = e.text, k = (0, d.setTabIndexes)(t, k);
                    var n = {
                        children: t,
                        tabIndex: k,
                        value: e.id,
                        selected: e.id === E[0]
                    };
                    return k += 1, n
                })
            }).render();
            return k += t.length, n
        }

        function f(e, t) {
            var n = (0, i.createElement)("div", ["apt-survey-multi-choice-label"], {
                    dataAtt: [{
                        name: "for",
                        value: e.id
                    }, {
                        name: "aria-hidden",
                        value: "true"
                    }]
                }, (0, a.toDom)(e.text, !1, e.text.indexOf("px-multi-survey-answer") > -1 ? void 0 : "apt-multi-survey-answer")),
                r = (0, i.createElement)("input", "apt-survey-multi-choice-checkbox", {
                    dataAtt: [{
                        name: "type",
                        value: "checkbox"
                    }, {
                        name: "aria-label",
                        value: n.textContent
                    }, {
                        name: "id",
                        value: e.id
                    }, {
                        name: "name",
                        value: "multi-choices-radio"
                    }]
                });
            return (0, i.addEventListener)(r, "change", function (n) {
                l(n.target, e.id, t)
            }), o(r), r.setAttribute("tabindex", k), k += 1, k = (0, d.setTabIndexes)(n, k), (0, i.createElement)("div", "apt-survey-multi-choices-radio", null, [(0, i.createElement)("div", "apt-survey-multi-choice-input-wrapper", null, [r]), n])
        }

        function p(e) {
            var t = e.answers,
                n = e.maxSelectionNumber,
                r = e.minSelectionNumber,
                o = 1 === n && 1 === r;
            t.sort(function (e, t) {
                return e.sequenceNumber - t.sequenceNumber
            });
            var a = o ? g(t) : t.map(function (e) {
                return f(e, n)
            });
            return (0, i.createElement)("div", ["apt-survey-multi-choices-wrapper", "apt-survey-multi-choices-wrapper-" + t.length, "apt-survey-answer-wrapper", "px-survey-answer-wrapper", "px-survey-multi-answer-wrapper"], null, a)
        }

        function m(e) {
            var t = e.maxAnswersValidationText ? e.maxAnswersValidationText.replace("%maxSelectionNumber%", e.maxSelectionNumber) : "You can only select a maximum of " + e.maxSelectionNumber + " answer(s)",
                n = e.minAnswersValidationText ? e.minAnswersValidationText.replace("%minSelectionNumber%", e.minSelectionNumber) : "Please select at least " + e.minSelectionNumber + " answer(s)";
            return C = (0, i.createElement)("div", "apt-error-message apt-max-choices", {
                text: t
            }), T = (0, i.createElement)("div", "apt-error-message apt-min-choices", {
                text: n
            }), (0, i.createElement)("div", "apt-error-message-wrapper", null, [C, T])
        }

        function v() {
            return (0, i.isBlank)(e.buttonText) ? e.isLast ? "Done" : "Next" : e.buttonText
        }

        function h(e) {
            var t = (0, i.createElement)("div", "apt-survey-submit", {
                text: v()
            });
            return t.style.color = e.submitButtonTextColor, t.style.backgroundColor = e.submitButtonBackgroundColor, t.style.borderWidth = e.submitButtonBorderWidth + "px", t.style.borderRadius = e.submitButtonBorderRadius + "px", t.style.borderColor = e.submitButtonBorderColor, t.setAttribute("tabindex", k), k += 1, t.setAttribute("role", "button"), t
        }

        function y(e, t) {
            t && E.length < t ? T.style.display = "inline-block" : (T.style.display = "none", e())
        }

        function b(e) {
            if (e.showQuestionNumber) {
                var t = (0, i.createElement)("div", "apt-question-sequence", {
                    text: S + "."
                });
                return t.style.fontFamily = e.numberFontFamily, t.style.fontSize = e.numberSize + "px", t.style.color = e.numberColor, t
            }
            return null
        }
        var E = [],
            I = void 0,
            C = void 0,
            T = void 0,
            w = void 0,
            S = n,
            k = s.TAB_INDEX_START,
            x = k;
        this.isValid = function () {
            var t = e.minSelectionNumber,
                n = t && E.length < t;
            return T.style.display = n ? "inline-block" : "none", !n
        }, this.setTabIndex = function (e) {
            k = e
        }, this.render = function (n) {
            var r = (0, a.toDom)(e.question, !1),
                s = e.contactMeMessage || "It's okay to contact me about my feedback";
            r.classList.add("apt-survey-multi-title"), r.classList.add("apt-survey-title");
            var l = (0, i.createElement)("div", ["apt-survey-multi-choices-title-wrapper", "apt-survey-title-wrapper"], null, [b(e), r]);
            k = (0, d.setTabIndexes)(l, k);
            var c = p(e),
                g = m(e),
                f = [];
            k = (0, u.addSnoozeForMCQSurvey)(e, n, f, k);
            var v = h(e);
            f.push(v);
            var E = (0, i.createElement)("div", "px-survey-page-footer", null, f);
            w = (0, i.createInput)("checkbox", void 0, !1, void 0, void 0, !1, void 0, {
                "aria-label": s
            });
            var C = (0, i.createElement)("div", ["apt-contact-wrapper"], void 0, [w, (0, i.createElement)("div", "apt-contact-me-text", {
                text: s,
                dataAtt: [{
                    name: "aria-hidden",
                    value: "true"
                }]
            })]);
            !e.showContactMeMessage && (C.style.display = "none"), I = (0, i.createElement)("div", "apt-survey-multi-choices-step", null, [l, c, g, C, E]), I.setAttribute("id", "step-" + e.id);
            var T = function () {
                y(t, e.minSelectionNumber)
            };
            return (0, i.addEnterKeyDownListener)(v, T), (0, i.addEventListener)(v, "click", T), o(v), I
        }, this.focus = function () {
            var e = I.querySelector('[tabindex="' + x + '"]');
            (0, a.focusElement)(e)
        }, this.hide = function () {
            I.style.display = "none"
        }, this.getData = function () {
            return {
                choices: E,
                contactMeAllowed: e.showContactMeMessage ? w.checked : null
            }
        }, this.getSettings = function () {
            return e
        }, this.getHtml = function () {
            return r(e)
        }, this.getNextTabIndex = function () {
            return k
        }, this.updateStepNumber = function (e) {
            (0, u.updateStepNumber)(I, e), S = e
        }, this.getStepNumber = function () {
            return S
        }, l = l.bind(this), y = y.bind(this)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = n(7),
        s = n(8),
        l = n(73),
        c = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(l),
        u = n(25),
        d = n(15);
    o.getHtml = function (e) {
        return r(e)
    }, t.default = o
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e.question
    }

    function o(e, t, n, o) {
        function d() {
            return (0, s.validateComment)(e, h, y)
        }

        function g() {
            return h = (0, i.createElement)("textArea"), h.setAttribute("tabindex", I), I += 1, h.placeholder = e.placeholderText || "Share your thoughts about your choice...", (0, i.addEventListener)(h, "keyup", d), y = (0, i.createElement)("div", "apt-error-message", {
                text: "Comment can be at most 1000 characters"
            }), (0, i.createElement)("div", "bottom-feedback-container", null, [h, y])
        }

        function f() {
            return (0, i.isBlank)(e.buttonText) ? e.isLast ? "Done" : "Next" : e.buttonText
        }

        function p(e) {
            var t = (0, i.createElement)("div", "apt-survey-submit", {
                text: f()
            });
            return t.style.color = e.submitButtonTextColor, t.style.backgroundColor = e.submitButtonBackgroundColor, t.style.borderWidth = e.submitButtonBorderWidth + "px", t.style.borderRadius = e.submitButtonBorderRadius + "px", t.style.borderColor = e.submitButtonBorderColor, t.setAttribute("tabindex", I), I += 1, t.setAttribute("role", "button"), t
        }

        function m(e) {
            if (e.showQuestionNumber) {
                var t = (0, i.createElement)("div", "apt-question-sequence", {
                    text: T + "."
                });
                return t.style.fontFamily = e.numberFontFamily, t.style.fontSize = e.numberSize + "px", t.style.color = e.numberColor, t
            }
            return null
        }
        var v = void 0,
            h = void 0,
            y = void 0,
            b = void 0,
            E = void 0,
            I = l.TAB_INDEX_START,
            C = I,
            T = n;
        this.isValid = function () {
            return d()
        }, this.setTabIndex = function (e) {
            I = e
        }, this.render = function (n) {
            var r = (0, a.toDom)(e.question, !1),
                s = e.contactMeMessage || "It's okay to contact me about my feedback";
            r.classList.add("apt-survey-open-text-title"), r.classList.add("apt-survey-title");
            var l = (0, i.createElement)("div", ["apt-survey-open-text-title-wrapper", "apt-survey-title-wrapper"], null, [m(e), r]);
            I = (0, u.setTabIndexes)(l, I);
            var f = g();
            b = (0, i.createInput)("checkbox", void 0, !1, void 0, void 0, !1, void 0, {
                "aria-label": s,
                tabindex: I
            }), I += 1;
            var h = [];
            I = (0, c.addSnoozeForMCQSurvey)(e, n, h, I), E = p(e), h.push(E);
            var y = (0, i.createElement)("div", ["apt-contact-wrapper"], void 0, [b, (0, i.createElement)("div", "apt-contact-me-text", {
                text: s,
                dataAtt: [{
                    name: "aria-hidden",
                    value: "true"
                }]
            })]);
            !e.showContactMeMessage && (y.style.display = "none"), "BAR" === e.viewType && (f.classList.add("bottom-feedback-container-bar"), E.classList.add("apt-survey-submit-bar")), "DIALOG" === e.viewType && f.appendChild(y);
            var C = (0, i.createElement)("div", ["apt-feedback-text-wrapper", "apt-survey-answer-wrapper", "px-survey-answer-wrapper", "px-survey-feedback-answer-wrapper"], null, [f, "BAR" === e.viewType && (0, i.createElement)("div", "", null, [y])]),
                T = (0, i.createElement)("div", "px-survey-page-footer", null, h);
            v = (0, i.createElement)("div", "apt-survey-open-text-step", null, [l, C, T]), v.setAttribute("id", "step-" + e.id);
            var w = function () {
                d() && t()
            };
            return (0, i.addEventListener)(E, "click", w), (0, i.addEnterKeyDownListener)(E, w), o(E), o(b), v
        }, this.focus = function () {
            var e = v.querySelector('[tabindex="' + C + '"]');
            (0, a.focusElement)(e)
        }, this.hide = function () {
            v.style.display = "none"
        }, this.getData = function () {
            return {
                comment: h.value,
                contactMeAllowed: e.showContactMeMessage ? b.checked : null
            }
        }, this.getSettings = function () {
            return e
        }, this.getHtml = function () {
            return r(e)
        }, this.getNextTabIndex = function () {
            return I
        }, this.updateStepNumber = function (e) {
            (0, c.updateStepNumber)(v, e), T = e
        }, this.getStepNumber = function () {
            return T
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = n(7),
        s = n(37),
        l = n(8),
        c = n(25),
        u = n(15);
    o.getHtml = function (e) {
        return r(e)
    }, t.default = o
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e.titleHtml + e.notSatisfiedHtml + e.satisfiedHtml + e.defaultComment
    }

    function o(e, t, n) {
        function o(e) {
            switch (e) {
                case 0:
                    return "unsatisfied";
                case 1:
                    return "neutral";
                case 2:
                    return "satisfied";
                default:
                    return ""
            }
        }

        function u(e) {
            return (e += 1) + " " + (1 === e ? "star" : "stars")
        }

        function h(e, t) {
            return {
                0: {
                    buttonsBackgroundColor: t.negativeButtonBackgroundColor,
                    buttonsBorderColor: t.negativeButtonBorderColor,
                    buttonsBorderWidth: t.negativeButtonBorderWidth
                },
                1: {
                    buttonsBackgroundColor: t.neutralButtonBackgroundColor,
                    buttonsBorderColor: t.neutralButtonBorderColor,
                    buttonsBorderWidth: t.neutralButtonBorderWidth
                },
                2: {
                    buttonsBackgroundColor: t.positiveButtonBackgroundColor,
                    buttonsBorderColor: t.positiveButtonBorderColor,
                    buttonsBorderWidth: t.positiveButtonBorderWidth
                }
            } [e]
        }

        function y(e, t, n) {
            var r = e.getElementsByTagName("svg")[0];
            if (R) {
                var i = h(n, t),
                    a = r.querySelector("#Oval");
                a.style.fill = i.buttonsBackgroundColor, a.setAttribute("stroke-width", i.buttonsBorderWidth), a.setAttribute("stroke", i.buttonsBorderColor), e.setAttribute("aria-label", n + 1 + " " + o(n));
                for (var s = r.querySelectorAll("[data-border-color]"), l = 0; l < s.length; l++) s[l].setAttribute("stroke", i.buttonsBorderColor), s[l].setAttribute("fill", i.buttonsBorderColor)
            } else r.getElementsByTagName("polygon")[0].style.fill = t.buttonsBackgroundColor, r.getElementsByTagName("path")[0].setAttribute("stroke-width", t.buttonsBorderWidth), r.getElementsByTagName("path")[0].setAttribute("stroke", t.buttonsBorderColor), r.getElementsByTagName("g")[0].style.fill = t.buttonsBorderColor, r.getElementsByTagName("g")[0].setAttribute("stroke-width", t.buttonsBorderWidth), e.setAttribute("aria-label", u(n))
        }

        function b(t) {
            return t - e.initialButtonIndex
        }

        function E() {
            if (!R) return N;
            switch (N) {
                case 1:
                    return 1;
                case 2:
                    return 3;
                case 3:
                    return 5
            }
            return N
        }

        function I() {
            for (var e = G.getLabelElements(E()), t = document.createDocumentFragment(), n = 0; n < e.length; ++n) t.appendChild(e[n]);
            (0, g.arrayFrom)(H.childNodes).forEach(function (e) {
                return H.removeChild(e)
            }), H.appendChild(t), !H.classList.contains("labelWrapperElement.classList") && H.classList.add("px-labels-show")
        }

        function C(e, t, n) {
            var r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                    var l = a.value;
                    if (t >= l.from && t <= l.to) return void(n.innerHTML = l.comment)
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
        }

        function T(e) {
            L.forEach(function (t, n) {
                if (n === e - 1) {
                    t.setAttribute("data-selected", "true");
                    var r = u(n),
                        o = r + " " + (0 === n ? "is" : "are") + " selected";
                    t.setAttribute("aria-label", o)
                } else t.setAttribute("data-selected", "false"), t.setAttribute("aria-label", u(n))
            })
        }

        function w(e) {
            switch (e) {
                case 0:
                    return 1;
                case 1:
                    return 3;
                case 2:
                    return 5
            }
        }

        function S(e) {
            switch (e) {
                case 0:
                    return "unsatisfied";
                case 1:
                    return "neutral";
                case 2:
                    return "satisfied"
            }
        }

        function k(t) {
            if (R) {
                for (var n = 1; n < L.length + 1; n++)
                    if (n !== t) {
                        var r = L[n - 1];
                        y(r, e, n - 1)
                    }
            } else if (null !== N && N > t)
                for (var o = 0; o < L.length; o++) {
                    var i = L[o];
                    y(i, e, o)
                }
            N = t;
            var a = b(t);
            if (T(t), R) {
                var s = L[a],
                    l = s.getElementsByTagName("svg")[0],
                    c = l.querySelector("#Oval");
                c.style.fill = e.selectedButtonsBackgroundColor, c.setAttribute("stroke-width", e.selectedButtonsBorderWidth), c.setAttribute("stroke", e.selectedButtonsBorderColor);
                for (var u = l.querySelectorAll("[data-border-color]"), d = 0; d < u.length; d++) u[d].setAttribute("stroke", e.selectedButtonsBorderColor), u[d].setAttribute("fill", e.selectedButtonsBorderColor)
            } else
                for (var g = 0; g < a + 1; g++) {
                    var m = L[g],
                        v = m.getElementsByTagName("svg")[0];
                    v.getElementsByTagName("polygon")[0].style.fill = e.selectedButtonsBackgroundColor, v.getElementsByTagName("path")[0].setAttribute("stroke-width", e.selectedButtonsBorderWidth), v.getElementsByTagName("path")[0].setAttribute("stroke", e.selectedButtonsBorderColor), v.getElementsByTagName("g")[0].style.fill = e.selectedButtonsBorderColor, v.getElementsByTagName("g")[0].setAttribute("stroke-width", e.selectedButtonsBorderWidth)
                }
            e.showDynamicComment && C(e.dynamicComments, R ? w(a) : a + 1, V), e.labelSetting && e.labelSetting.enabled && I(t), q.forEach(function (e) {
                e.style.display = "none"
            }), W.forEach(function (e) {
                return !e.classList.contains("apt-survey-show") && e.classList.add("apt-survey-show")
            }), e.mergeFirstSteps && (j.classList.remove("apt-survey-submit-disabled"), j.setAttribute("tabindex", B)), !e.mergeFirstSteps && (0, p.isSnoozeButtonEnabled)(e.activationType, e.snoozeButton, e.activationTypes) && (0, f.hideSnooze)()
        }

        function x() {
            return (0, a.validateComment)(e, M, U)
        }

        function O(e, t, n) {
            return function (r) {
                e.appendChild(r), y(e, t, n)
            }
        }

        function _(e, t, r, o) {
            var a = (0, i.createElement)("div"),
                s = R ? (0, c.getImage)(S(r), O(a, t, r)) : (0, i.createElementFromString)(v);
            a.setAttribute("tabindex", o), a.setAttribute("role", "button"), a.setAttribute("aria-label", r), R || (a.appendChild(s), y(a, t, r));
            var l = function (e) {
                return function () {
                    k(e)
                }
            }(e);
            return (0, i.addEnterKeyDownListener)(a, l), (0, i.addEventListener)(a, "click", l), n(a), a
        }

        function A() {
            return (0, i.isBlank)(e.buttonText) ? "Submit" : e.buttonText
        }
        var P = s.TAB_INDEX_START + 1,
            L = [],
            N = null,
            B = P,
            R = e.surveyScoreType === m,
            D = void 0,
            M = void 0,
            U = void 0,
            F = void 0,
            V = void 0,
            j = void 0,
            H = void 0,
            q = [],
            W = [],
            G = null;
        this.focus = function () {
            var e = null != N && L.length ? L[0] : D.querySelector('[tabindex="' + P + '"]');
            e && (0, l.focusElement)(e)
        }, this.render = function (r) {
            var o = (0, l.toDom)(e.titleHtml, !1);
            B = (0, p.setTabIndexes)(o, B), (0, p.addTabbableEnterListener)();
            for (var a = e.contactMeMessage || "It's okay to contact me about my feedback", c = e.initialButtonIndex; c < e.numberOfButtons + e.initialButtonIndex; c++) {
                var u = c - e.initialButtonIndex;
                L.push(_(c, e, u, B)), B += 1
            }
            V = e.showDynamicComment ? (0, i.createElement)("div") : (0, l.toDom)(e.defaultComment), B = (0, p.setTabIndexes)(V, B);
            var g = e.labelSetting;
            g && g.enabled && (G = new d.default(g.ranges, g), B = G.setTabIndexes(B)), M = (0, i.createElement)("textArea"), M.setAttribute("tabindex", B), B += 1, F = (0, i.createInput)("checkbox", void 0, !1, void 0, void 0, !1, void 0, {
                "aria-label": a
            }), F.setAttribute("tabindex", B), B += 1, U = (0, i.createElement)("div", "apt-error-message", {
                text: "Comment can be at most 1000 characters"
            });
            var m = (0, i.createElement)("div", ["apt-contact-wrapper", e.showContactMeMessage ? "" : "apt-hidden"], void 0, [F, (0, i.createElement)("div", "apt-contact-me-text", {
                    text: a,
                    dataAtt: [{
                        name: "aria-hidden",
                        value: "true"
                    }]
                })]),
                v = (0, i.createElement)("div", ["apt-survey-choices-wrapper", "apt-survey-choices-wrapper-" + e.numberOfButtons], null, [(0, i.createElement)("div", "apt-survey-choices", null, L), (0, i.createElement)("div", "apt-survey-choices-legend", null, [(0, i.createElement)("div", null, null, [(0, l.toDom)(e.notSatisfiedHtml)]), (0, i.createElement)("div", null, null, [(0, l.toDom)(e.satisfiedHtml)])])]),
                h = (0, i.createElement)("div", ["apt-survey-comment"], null, [V]),
                y = (0, i.createElement)("div", "apt-survey-submit-text", {
                    text: A()
                });
            j = (0, i.createElement)("div", "apt-survey-submit", null, [y]);
            var b = (0, i.createElement)("div", "px-submit-container", null, [j]);
            y.setAttribute("aria-hidden", "true"), j.setAttribute("role", "button"), j.setAttribute("aria-label", y.textContent);
            var E = (0, i.createElement)("div", "bottom-feedback-container", null, [M, U, e.showContactMeMessage ? "DIALOG" === e.viewType && m : void 0, b]),
                I = (0, i.createElement)("div", "apt-feedback-text-wrapper", null, [E, e.showContactMeMessage ? "BAR" === e.viewType && (0, i.createElement)("div", "", null, [m]) : void 0]);
            H = (0, i.createElement)("div", ["px-survey-labels"]);
            var C = [h, H, I],
                T = (0, i.createElement)("div", "apt-survey-feedback", null, C);
            T.setAttribute("aria-live", "polite"), "BAR" === e.viewType && (E.classList.add("bottom-feedback-container-bar"), j.classList.add("apt-survey-submit-bar")), j.style.color = e.submitButtonTextColor, j.style.backgroundColor = e.submitButtonBackgroundColor, j.style.borderWidth = e.submitButtonBorderWidth + "px", j.style.borderRadius = e.submitButtonBorderRadius + "px", j.style.borderColor = e.submitButtonBorderColor, j.setAttribute("tabindex", e.mergeFirstSteps ? s.NO_TAB_INDEX : B), M.placeholder = e.placeholderText || "Share your thoughts about your choice...", (0, i.addEventListener)(M, "keyup", x);
            var w = (0, i.createElement)("div", "apt-survey-title", null, [o]),
                S = [w, v, T];
            B = (0, f.addSnoozeForScoreSurvey)(e, r, b, S, B), e.showFooter && S.push((0, l.toDom)(e.footer, !1, "apt-survey-footer")), D = (0, i.createElement)("div", "apt-survey-step", null, S), D.setAttribute("id", "step-" + e.id);
            var k = function () {
                x() && t()
            };
            return (0, i.addEventListener)(j, "click", k), (0, i.addEnterKeyDownListener)(j, k), n(j), n(F), !e.mergeFirstSteps && q.push(o), !e.mergeFirstSteps && W.push(T), e.mergeFirstSteps && T.classList.add("apt-survey-show"), e.mergeFirstSteps && j.classList.add("apt-survey-submit-disabled"), D
        }, this.hide = function () {
            D.style.display = "none"
        }, this.getData = function () {
            return {
                selected: E(),
                comment: M.value,
                contactMeAllowed: e.showContactMeMessage ? F.checked : null,
                labels: e.labelSetting && e.labelSetting.enabled ? G.getSelectedLabels() : []
            }
        }, this.getSettings = function () {
            return e
        }, this.getHtml = function () {
            return r(e)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = n(37),
        s = n(8),
        l = n(7),
        c = n(142),
        u = n(51),
        d = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(u),
        g = n(11),
        f = n(25),
        p = n(15),
        m = "SMILEY",
        v = '<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" style="width: 40px; height: 40px;"><g id="XMLID_31_" fill="#cfd8dc" stroke-width="0.5"><g><g stroke-width="0.5"><polygon calss="apt-star-polygon" fill="#ffffff" points="61.5,25 45.1,39.6 50.2,61.5 32,49.6 13.8,61.5 18.9,39.6 2.5,25 23.9,23.4 32,2.5 40.1,23.4"></polygon></g></g><g><g><path stroke="#cfd8dc" stroke-width="0.5" d="M51.8,63.7L32,50.8L12.2,63.7l5.6-23.8L0.1,24.2l23.1-1.8L32-0.3l8.8,22.7l23.1,1.8L46.2,39.9L51.8,63.7zM32, 48.4l16.7,10.9L44,39.2l15.1-13.4l-19.7-1.5L32,5.3l-7.4,19.1L4.9,25.9L20,39.2l-4.7,20.1L32,48.4z"></path></g></g></g></svg>';
    o.getHtml = function (e) {
        return r(e)
    }, t.default = o
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e.titleHtml + e.notSatisfiedHtml + e.satisfiedHtml + e.defaultComment
    }

    function o(e, t, n) {
        function o(e, t, n) {
            e.style.color = t.buttonsTextColor, e.style.backgroundColor = t.buttonsBackgroundColor, e.style.borderWidth = t.buttonsBorderWidth + "px", e.style.borderRadius = t.buttonsBorderRadius + "px", e.style.borderColor = t.buttonsBorderColor, e.setAttribute("aria-label", n)
        }

        function c(t) {
            return t - e.initialButtonIndex
        }

        function p(e, t, n) {
            var r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                    var l = a.value;
                    if (t >= l.from && t <= l.to) return void(n.innerHTML = l.comment)
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
        }

        function m(e) {
            for (var t = L.getLabelElements(e), n = document.createDocumentFragment(), r = 0; r < t.length; ++r) n.appendChild(t[r]);
            (0, d.arrayFrom)(_.childNodes).forEach(function (e) {
                return _.removeChild(e)
            }), _.appendChild(n), !_.classList.contains("labelWrapperElement.classList") && _.classList.add("px-labels-show")
        }

        function v(t) {
            if (null !== I) {
                var n = c(I);
                o(E[n], e, n)
            }
            I = t;
            var r = c(t),
                i = "IN_APP_CES_SURVEY" === e.surveyType;
            e.showDynamicComment && p(e.dynamicComments, i ? r + 1 : r, k);
            var a = E[r];
            a.style.color = e.selectedButtonsTextColor, a.style.backgroundColor = e.selectedButtonsBackgroundColor, a.style.borderWidth = e.selectedButtonsBorderWidth + "px", a.style.borderRadius = e.buttonsBorderRadius + "px", a.style.borderColor = e.selectedButtonsBorderColor, a.setAttribute("aria-label", t + " selected"), e.labelSetting && e.labelSetting.enabled && m(t), A.forEach(function (e) {
                e.style.display = "none"
            }), P.forEach(function (e) {
                return !e.classList.contains("apt-survey-show") && e.classList.add("apt-survey-show")
            }), e.mergeFirstSteps && (x.classList.remove("apt-survey-submit-disabled"), x.setAttribute("tabindex", O)), !e.mergeFirstSteps && (0, f.isSnoozeButtonEnabled)(e.activationType, e.snoozeButton, e.activationTypes) && (0, g.hideSnooze)()
        }

        function h() {
            return (0, l.validateComment)(e, T, w)
        }

        function y(e, t, r, a) {
            var s = (0, i.createElement)("div", "apt-survey-choice", {
                text: e
            });
            o(s, t, r), s.setAttribute("tabindex", a), s.setAttribute("role", "button"), s.setAttribute("aria-label", e);
            var l = function (e) {
                return function () {
                    v(e)
                }
            }(e);
            return (0, i.addEventListener)(s, "click", l), (0, i.addEnterKeyDownListener)(s, l), n(s), s
        }

        function b() {
            return (0, i.isBlank)(e.buttonText) ? "Submit" : e.buttonText
        }
        var E = [],
            I = null,
            C = void 0,
            T = void 0,
            w = void 0,
            S = void 0,
            k = void 0,
            x = void 0,
            O = void 0,
            _ = void 0,
            A = [],
            P = [],
            L = void 0,
            N = s.TAB_INDEX_START + 1,
            B = N;
        this.focus = function () {
            var e = null != I && E.length ? E[0] : C.querySelector('[tabindex="' + N + '"]');
            e && (0, a.focusElement)(e)
        }, this.render = function (r) {
            var o = (0, a.toDom)(e.titleHtml);
            B = (0, f.setTabIndexes)(o, B), (0, f.addTabbableEnterListener)();
            for (var l = e.initialButtonIndex; l < e.numberOfButtons + e.initialButtonIndex; l++) {
                var c = l - e.initialButtonIndex;
                E.push(y(l, e, c, B)), B += 1
            }
            T = (0, i.createElement)("textArea");
            var d = e.contactMeMessage || "It's okay to contact me about my feedback";
            S = (0, i.createInput)("checkbox", void 0, !1, void 0, void 0, !1, void 0, {
                "aria-label": d
            }), w = (0, i.createElement)("div", "apt-error-message", {
                text: "Comment can be at most 1000 characters"
            });
            var p = (0, i.createElement)("div", ["apt-contact-wrapper"], void 0, [S, (0, i.createElement)("div", "apt-contact-me-text", {
                text: d,
                dataAtt: [{
                    name: "aria-hidden",
                    value: "true"
                }]
            })]);
            !e.showContactMeMessage && (p.style.display = "none"), k = e.showDynamicComment ? (0, i.createElement)("div") : (0, a.toDom)(e.defaultComment), B = (0, f.setTabIndexes)(k, B);
            var m = (0, i.createElement)("div", ["apt-survey-choices-wrapper", "apt-survey-choices-wrapper-" + e.numberOfButtons], null, [(0, i.createElement)("div", "apt-survey-choices", null, E), (0, i.createElement)("div", ["apt-survey-choices-legend"], null, [(0, i.createElement)("div", null, null, [(0, a.toDom)(e.notSatisfiedHtml)]), (0, i.createElement)("div", null, null, [(0, a.toDom)(e.satisfiedHtml)])])]),
                v = (0, i.createElement)("div", ["apt-survey-comment"], null, [k]),
                I = (0, i.createElement)("div", "apt-survey-submit-text", {
                    text: b()
                });
            x = (0, i.createElement)("div", "apt-survey-submit", null, [I]);
            var N = (0, i.createElement)("div", "px-submit-container", null, [x]);
            I.setAttribute("aria-hidden", "true"), x.setAttribute("role", "button"), x.setAttribute("aria-label", I.textContent);
            var R = (0, i.createElement)("div", "bottom-feedback-container", null, [T, w, "DIALOG" === e.viewType && p, N]),
                D = (0, i.createElement)("div", "apt-feedback-text-wrapper", null, [R, "BAR" === e.viewType && (0, i.createElement)("div", "", null, [p])]);
            _ = (0, i.createElement)("div", ["px-survey-labels"]);
            var M = [v, _, D],
                U = e.labelSetting;
            e.labelSetting && U.enabled && (L = new u.default(U.ranges, U), B = L.setTabIndexes(B));
            var F = (0, i.createElement)("div", "apt-survey-feedback", null, M);
            F.setAttribute("aria-live", "polite"), "BAR" === e.viewType && (R.classList.add("bottom-feedback-container-bar"), x.classList.add("apt-survey-submit-bar")), x.style.color = e.submitButtonTextColor, x.style.backgroundColor = e.submitButtonBackgroundColor, x.style.borderWidth = e.submitButtonBorderWidth + "px", x.style.borderRadius = e.submitButtonBorderRadius + "px", x.style.borderColor = e.submitButtonBorderColor, x.setAttribute("tabindex", e.mergeFirstSteps ? s.NO_TAB_INDEX : O), T.placeholder = e.placeholderText || "Share your thoughts about your choice...", T.setAttribute("tabindex", B), B += 1, S.setAttribute("tabindex", B), B += 1, x.setAttribute("tabindex", e.mergeFirstSteps ? s.NO_TAB_INDEX : B), O = B, B += 1, (0, i.addEventListener)(T, "keyup", h);
            var V = (0, i.createElement)("div", "apt-survey-title", null, [(0, i.createElement)("div", null, null, [o])]),
                j = [V, m, F];
            B = (0, g.addSnoozeForScoreSurvey)(e, r, N, j, B), e.showFooter && j.push((0, a.toDom)(e.footer, !1, "apt-survey-footer")), C = (0, i.createElement)("div", ["apt-survey-step"], null, j), C.setAttribute("id", "step-" + e.id);
            var H = function () {
                h() && t()
            };
            return (0, i.addEventListener)(x, "click", H), (0, i.addEnterKeyDownListener)(x, H), n(x), n(S), !e.mergeFirstSteps && A.push(o), !e.mergeFirstSteps && P.push(F), e.mergeFirstSteps && F.classList.add("apt-survey-show"), e.mergeFirstSteps && x.classList.add("apt-survey-submit-disabled"), C
        }, this.hide = function () {
            C.style.display = "none"
        }, this.getData = function () {
            return {
                selected: I,
                comment: T.value,
                contactMeAllowed: e.showContactMeMessage ? S.checked : null,
                labels: e.labelSetting && e.labelSetting.enabled ? L.getSelectedLabels() : []
            }
        }, this.getSettings = function () {
            return e
        }, this.getHtml = function () {
            return r(e)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = n(7),
        s = n(8),
        l = n(37),
        c = n(51),
        u = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(c),
        d = n(11),
        g = n(25),
        f = n(15);
    o.getHtml = function (e) {
        return r(e)
    }, t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3),
        o = n(1),
        i = n(0),
        a = n(11),
        s = new function () {
            function e(e, t, n, o) {
                e.push(t), n.push(o), r.logger.log(t)
            }

            function t(e, t) {
                for (var n = 0; n < t.length; n++)
                    if (0 === e.indexOf(t[n])) return !0;
                return !1
            }
            var n = {
                    A: !0,
                    ABBR: !0,
                    AUDIO: !0,
                    B: !0,
                    BIG: !0,
                    BLOCKQUOTE: !0,
                    BODY: !0,
                    BR: !0,
                    CAPTION: !0,
                    CENTER: !0,
                    CODE: !0,
                    COL: !0,
                    COLGROUP: !0,
                    DEL: !0,
                    DIV: !0,
                    EM: !0,
                    FONT: !0,
                    H1: !0,
                    H2: !0,
                    H3: !0,
                    H4: !0,
                    H5: !0,
                    H6: !0,
                    HR: !0,
                    I: !0,
                    IFRAME: !0,
                    IMG: !0,
                    INS: !0,
                    LABEL: !0,
                    LI: !0,
                    O: !0,
                    OL: !0,
                    P: !0,
                    PRE: !0,
                    S: !0,
                    SCRIPT: !0,
                    SMALL: !0,
                    SOURCE: !0,
                    SPAN: !0,
                    STRIKE: !0,
                    STRONG: !0,
                    SUB: !0,
                    SUP: !0,
                    TABLE: !0,
                    TBODY: !0,
                    TD: !0,
                    TFOOT: !0,
                    TH: !0,
                    THEAD: !0,
                    TR: !0,
                    TT: !0,
                    U: !0,
                    UL: !0,
                    VIDEO: !0,
                    META: !0,
                    SECTION: !0,
                    BUTTON: !0
                },
                s = {
                    FORM: !0
                },
                l = {
                    accept: !0,
                    "accept-charset": !0,
                    accesskey: !0,
                    action: !0,
                    align: !0,
                    alt: !0,
                    allowfullscreen: !0,
                    async: !0,
                    autocomplete: !0,
                    autofocus: !0,
                    autoplay: !0,
                    bgcolor: !0,
                    border: !0,
                    charset: !0,
                    checked: !0,
                    cite: !0,
                    class: !0,
                    color: !0,
                    cols: !0,
                    colspan: !0,
                    content: !0,
                    contenteditable: !0,
                    controls: !0,
                    coords: !0,
                    data: !0,
                    "data-aptr": !0,
                    "data-apt-element": !0,
                    datetime: !0,
                    default: !0,
                    defer: !0,
                    dir: !0,
                    dirname: !0,
                    disabled: !0,
                    download: !0,
                    draggable: !0,
                    enctype: !0,
                    form: !0,
                    formaction: !0,
                    frameborder: !0,
                    headers: !0,
                    height: !0,
                    hidden: !0,
                    high: !0,
                    href: !0,
                    hreflang: !0,
                    "http-equiv": !0,
                    id: !0,
                    ismap: !0,
                    kind: !0,
                    label: !0,
                    lang: !0,
                    list: !0,
                    loop: !0,
                    low: !0,
                    max: !0,
                    maxlength: !0,
                    media: !0,
                    method: !0,
                    min: !0,
                    multiple: !0,
                    muted: !0,
                    name: !0,
                    novalidate: !0,
                    open: !0,
                    optimum: !0,
                    pattern: !0,
                    placeholder: !0,
                    poster: !0,
                    preload: !0,
                    readonly: !0,
                    rel: !0,
                    required: !0,
                    reversed: !0,
                    rows: !0,
                    rowspan: !0,
                    sandbox: !0,
                    scope: !0,
                    selected: !0,
                    shape: !0,
                    size: !0,
                    sizes: !0,
                    span: !0,
                    spellcheck: !0,
                    src: !0,
                    srcdoc: !0,
                    srclang: !0,
                    srcset: !0,
                    start: !0,
                    step: !0,
                    style: !0,
                    tabindex: !0,
                    target: !0,
                    title: !0,
                    translate: !0,
                    type: !0,
                    usemap: !0,
                    value: !0,
                    width: !0,
                    wrap: !0
                },
                c = ["http:", "https:", "data:"],
                u = {
                    href: !0,
                    action: !0,
                    src: !0
                },
                d = ["https://storage.googleapis.com/aptrinsic-cloud-public-assets/*", "https://storage.googleapis.com/froala-upload-default/*", "https://storage.googleapis.com/froala-upload-prod/*", "https://storage.googleapis.com/froala-upload-dev/*", "https://storage.googleapis.com/app-demo-public-bucket/*"];
            this.SanitizeHtml = function (g) {
                function f(r) {
                    var a = void 0;
                    if (r.nodeType === Node.TEXT_NODE) a = r.cloneNode(!0);
                    else if (r.nodeType === Node.ELEMENT_NODE && (n[r.tagName] || s[r.tagName])) {
                        a = h.createElement(r.tagName);
                        for (var c = 0; c < r.attributes.length; c++) {
                            var g = r.attributes[c];
                            if (!l[g.name] || "META" === r.tagName && "charset" !== g.name) {
                                var p = "Not allowed attribute '" + g.name + "' in tag <" + r.tagName + ">";
                                e(y, p, b, "DISALLOWED_HTML_TAG_OR_ATTRIBUTE")
                            } else if (u[g.name]) {
                                var v = m || (0, o.getConfig)("htmlSanitizationAllowedDomains") || [],
                                    E = v.concat(d);
                                if (g.value.indexOf(":") > -1 && !t(g.value, I)) {
                                    var C = "Not allowed attribute '" + g.name + "' with value '" + g.value + "' in tag '" + r.tagName + "' - schema is not allowed";
                                    e(y, C, b, "DISALLOWED_HTML_TAG_OR_ATTRIBUTE")
                                } else if (!(0, i.matchEither)(E, g.value)) {
                                    var T = "Not allowed attribute '" + g.name + "' with value '" + g.value + "' in tag '" + r.tagName + "' - domain is not allowed";
                                    e(y, T, b, "DISALLOWED_DOMAINS")
                                }
                            }
                        }
                        for (var w = 0; w < r.childNodes.length; w++) f(r.childNodes[w])
                    } else {
                        var S = "tag <" + r.tagName + "> is not allowed";
                        e(y, S, b, "DISALLOWED_HTML_TAG_OR_ATTRIBUTE"), a = document.createDocumentFragment()
                    }
                    return a
                }
                var p = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    m = arguments[2];
                if (!(0, o.getConfig)("htmlSanitization") && !p) return {
                    isValid: !0
                };
                if ((0, i.isBlank)(g)) return {
                    isValid: !0
                };
                if ("<br>" === g) return {
                    isValid: !0
                };
                var v = document.createElement("iframe");
                if (void 0 === v.sandbox) return r.logger.logInternalError(new Error("Browser not supporting iframe sandbox")), {
                    isValid: !1,
                    errors: ["Browser not supporting iframe sandbox, cannot perform sanitization"]
                };
                v.sandbox = "allow-same-origin", v.style.display = "none", (0, o.getBody)().appendChild(v);
                var h = v.contentDocument || v.contentWindow.document;
                null == h.body && h.write("<body></body>"), h.body.innerHTML = g;
                var y = [],
                    b = [],
                    E = (0, o.getConfig)("htmlSanitizationAllowedSchemes"),
                    I = Array.isArray(E) ? E.filter(function (e) {
                        return !!e
                    }).map(function (e) {
                        return e.endsWith(":") ? e : e + ":"
                    }) : c;
                return f(h.body), (0, o.getBody)().removeChild(v), {
                    isValid: 0 === y.length,
                    errors: y === [] ? null : y,
                    errorTypes: (0, a.arrayFrom)(b)
                }
            }
        };
    t.default = s
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var t, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        /**
         * [js-sha256]{@link https://github.com/emn178/js-sha256}
         *
         * @version 0.9.0
         * @author Chen, Yi-Cyuan [emn178@gmail.com]
         * @copyright Chen, Yi-Cyuan 2014-2017
         * @license MIT
         */
        ! function () {
            function o(e, t) {
                t ? (h[0] = h[16] = h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = 0, this.blocks = h) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = e
            }

            function i(e, t, n) {
                var i, s = void 0 === e ? "undefined" : r(e);
                if ("string" === s) {
                    var l, c = [],
                        u = e.length,
                        g = 0;
                    for (i = 0; i < u; ++i) l = e.charCodeAt(i), l < 128 ? c[g++] = l : l < 2048 ? (c[g++] = 192 | l >> 6, c[g++] = 128 | 63 & l) : l < 55296 || l >= 57344 ? (c[g++] = 224 | l >> 12, c[g++] = 128 | l >> 6 & 63, c[g++] = 128 | 63 & l) : (l = 65536 + ((1023 & l) << 10 | 1023 & e.charCodeAt(++i)), c[g++] = 240 | l >> 18, c[g++] = 128 | l >> 12 & 63, c[g++] = 128 | l >> 6 & 63, c[g++] = 128 | 63 & l);
                    e = c
                } else {
                    if ("object" !== s) throw new Error(a);
                    if (null === e) throw new Error(a);
                    if (d && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                    else if (!(Array.isArray(e) || d && ArrayBuffer.isView(e))) throw new Error(a)
                }
                e.length > 64 && (e = new o(t, !0).update(e).array());
                var f = [],
                    p = [];
                for (i = 0; i < 64; ++i) {
                    var m = e[i] || 0;
                    f[i] = 92 ^ m, p[i] = 54 ^ m
                }
                o.call(this, t, n), this.update(p), this.oKeyPad = f, this.inner = !0, this.sharedMemory = n
            }
            var a = "input is invalid type",
                s = "object" === ("undefined" == typeof window ? "undefined" : r(window)),
                l = s ? window : {};
            l.JS_SHA256_NO_WINDOW && (s = !1), !s && "object" === ("undefined" == typeof self ? "undefined" : r(self)) && (l = self);
            var c = !l.JS_SHA256_NO_COMMON_JS && "object" === r(e) && e.exports,
                u = n(174),
                d = !l.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                g = "0123456789abcdef".split(""),
                f = [-2147483648, 8388608, 32768, 128],
                p = [24, 16, 8, 0],
                m = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                v = ["hex", "array", "digest", "arrayBuffer"],
                h = [];
            !l.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }), !d || !l.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (e) {
                return "object" === (void 0 === e ? "undefined" : r(e)) && e.buffer && e.buffer.constructor === ArrayBuffer
            });
            var y = function (e, t) {
                    return function (n) {
                        return new o(t, !0).update(n)[e]()
                    }
                },
                b = function (e) {
                    var t = y("hex", e);
                    t.create = function () {
                        return new o(e)
                    }, t.update = function (e) {
                        return t.create().update(e)
                    };
                    for (var n = 0; n < v.length; ++n) {
                        var r = v[n];
                        t[r] = y(r, e)
                    }
                    return t
                },
                E = function (e, t) {
                    return function (n, r) {
                        return new i(n, t, !0).update(r)[e]()
                    }
                },
                I = function (e) {
                    var t = E("hex", e);
                    t.create = function (t) {
                        return new i(t, e)
                    }, t.update = function (e, n) {
                        return t.create(e).update(n)
                    };
                    for (var n = 0; n < v.length; ++n) {
                        var r = v[n];
                        t[r] = E(r, e)
                    }
                    return t
                };
            o.prototype.update = function (e) {
                if (!this.finalized) {
                    var t, n = void 0 === e ? "undefined" : r(e);
                    if ("string" !== n) {
                        if ("object" !== n) throw new Error(a);
                        if (null === e) throw new Error(a);
                        if (d && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (!(Array.isArray(e) || d && ArrayBuffer.isView(e))) throw new Error(a);
                        t = !0
                    }
                    for (var o, i, s = 0, l = e.length, c = this.blocks; s < l;) {
                        if (this.hashed && (this.hashed = !1, c[0] = this.block, c[16] = c[1] = c[2] = c[3] = c[4] = c[5] = c[6] = c[7] = c[8] = c[9] = c[10] = c[11] = c[12] = c[13] = c[14] = c[15] = 0), t)
                            for (i = this.start; s < l && i < 64; ++s) c[i >> 2] |= e[s] << p[3 & i++];
                        else
                            for (i = this.start; s < l && i < 64; ++s) o = e.charCodeAt(s), o < 128 ? c[i >> 2] |= o << p[3 & i++] : o < 2048 ? (c[i >> 2] |= (192 | o >> 6) << p[3 & i++], c[i >> 2] |= (128 | 63 & o) << p[3 & i++]) : o < 55296 || o >= 57344 ? (c[i >> 2] |= (224 | o >> 12) << p[3 & i++], c[i >> 2] |= (128 | o >> 6 & 63) << p[3 & i++], c[i >> 2] |= (128 | 63 & o) << p[3 & i++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++s)), c[i >> 2] |= (240 | o >> 18) << p[3 & i++], c[i >> 2] |= (128 | o >> 12 & 63) << p[3 & i++], c[i >> 2] |= (128 | o >> 6 & 63) << p[3 & i++], c[i >> 2] |= (128 | 63 & o) << p[3 & i++]);
                        this.lastByteIndex = i, this.bytes += i - this.start, i >= 64 ? (this.block = c[16], this.start = i - 64, this.hash(), this.hashed = !0) : this.start = i
                    }
                    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                }
            }, o.prototype.finalize = function () {
                if (!this.finalized) {
                    this.finalized = !0;
                    var e = this.blocks,
                        t = this.lastByteIndex;
                    e[16] = this.block, e[t >> 2] |= f[3 & t], this.block = e[16], t >= 56 && (this.hashed || this.hash(), e[0] = this.block, e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.hBytes << 3 | this.bytes >>> 29, e[15] = this.bytes << 3, this.hash()
                }
            }, o.prototype.hash = function () {
                var e, t, n, r, o, i, a, s, l, c, u, d = this.h0,
                    g = this.h1,
                    f = this.h2,
                    p = this.h3,
                    v = this.h4,
                    h = this.h5,
                    y = this.h6,
                    b = this.h7,
                    E = this.blocks;
                for (e = 16; e < 64; ++e) o = E[e - 15], t = (o >>> 7 | o << 25) ^ (o >>> 18 | o << 14) ^ o >>> 3, o = E[e - 2], n = (o >>> 17 | o << 15) ^ (o >>> 19 | o << 13) ^ o >>> 10, E[e] = E[e - 16] + t + E[e - 7] + n << 0;
                for (u = g & f, e = 0; e < 64; e += 4) this.first ? (this.is224 ? (s = 300032, o = E[0] - 1413257819, b = o - 150054599 << 0, p = o + 24177077 << 0) : (s = 704751109, o = E[0] - 210244248, b = o - 1521486534 << 0, p = o + 143694565 << 0), this.first = !1) : (t = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10), n = (v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7), s = d & g, r = s ^ d & f ^ u, a = v & h ^ ~v & y, o = b + n + a + m[e] + E[e], i = t + r, b = p + o << 0, p = o + i << 0), t = (p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10), n = (b >>> 6 | b << 26) ^ (b >>> 11 | b << 21) ^ (b >>> 25 | b << 7), l = p & d, r = l ^ p & g ^ s, a = b & v ^ ~b & h, o = y + n + a + m[e + 1] + E[e + 1], i = t + r, y = f + o << 0, f = o + i << 0, t = (f >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10), n = (y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7), c = f & p, r = c ^ f & d ^ l, a = y & b ^ ~y & v, o = h + n + a + m[e + 2] + E[e + 2], i = t + r, h = g + o << 0, g = o + i << 0, t = (g >>> 2 | g << 30) ^ (g >>> 13 | g << 19) ^ (g >>> 22 | g << 10), n = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7), u = g & f, r = u ^ g & p ^ c, a = h & y ^ ~h & b, o = v + n + a + m[e + 3] + E[e + 3], i = t + r, v = d + o << 0, d = o + i << 0;
                this.h0 = this.h0 + d << 0, this.h1 = this.h1 + g << 0, this.h2 = this.h2 + f << 0, this.h3 = this.h3 + p << 0, this.h4 = this.h4 + v << 0, this.h5 = this.h5 + h << 0, this.h6 = this.h6 + y << 0, this.h7 = this.h7 + b << 0
            }, o.prototype.hex = function () {
                this.finalize();
                var e = this.h0,
                    t = this.h1,
                    n = this.h2,
                    r = this.h3,
                    o = this.h4,
                    i = this.h5,
                    a = this.h6,
                    s = this.h7,
                    l = g[e >> 28 & 15] + g[e >> 24 & 15] + g[e >> 20 & 15] + g[e >> 16 & 15] + g[e >> 12 & 15] + g[e >> 8 & 15] + g[e >> 4 & 15] + g[15 & e] + g[t >> 28 & 15] + g[t >> 24 & 15] + g[t >> 20 & 15] + g[t >> 16 & 15] + g[t >> 12 & 15] + g[t >> 8 & 15] + g[t >> 4 & 15] + g[15 & t] + g[n >> 28 & 15] + g[n >> 24 & 15] + g[n >> 20 & 15] + g[n >> 16 & 15] + g[n >> 12 & 15] + g[n >> 8 & 15] + g[n >> 4 & 15] + g[15 & n] + g[r >> 28 & 15] + g[r >> 24 & 15] + g[r >> 20 & 15] + g[r >> 16 & 15] + g[r >> 12 & 15] + g[r >> 8 & 15] + g[r >> 4 & 15] + g[15 & r] + g[o >> 28 & 15] + g[o >> 24 & 15] + g[o >> 20 & 15] + g[o >> 16 & 15] + g[o >> 12 & 15] + g[o >> 8 & 15] + g[o >> 4 & 15] + g[15 & o] + g[i >> 28 & 15] + g[i >> 24 & 15] + g[i >> 20 & 15] + g[i >> 16 & 15] + g[i >> 12 & 15] + g[i >> 8 & 15] + g[i >> 4 & 15] + g[15 & i] + g[a >> 28 & 15] + g[a >> 24 & 15] + g[a >> 20 & 15] + g[a >> 16 & 15] + g[a >> 12 & 15] + g[a >> 8 & 15] + g[a >> 4 & 15] + g[15 & a];
                return this.is224 || (l += g[s >> 28 & 15] + g[s >> 24 & 15] + g[s >> 20 & 15] + g[s >> 16 & 15] + g[s >> 12 & 15] + g[s >> 8 & 15] + g[s >> 4 & 15] + g[15 & s]), l
            }, o.prototype.toString = o.prototype.hex, o.prototype.digest = function () {
                this.finalize();
                var e = this.h0,
                    t = this.h1,
                    n = this.h2,
                    r = this.h3,
                    o = this.h4,
                    i = this.h5,
                    a = this.h6,
                    s = this.h7,
                    l = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a];
                return this.is224 || l.push(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s), l
            }, o.prototype.array = o.prototype.digest, o.prototype.arrayBuffer = function () {
                this.finalize();
                var e = new ArrayBuffer(this.is224 ? 28 : 32),
                    t = new DataView(e);
                return t.setUint32(0, this.h0), t.setUint32(4, this.h1), t.setUint32(8, this.h2), t.setUint32(12, this.h3), t.setUint32(16, this.h4), t.setUint32(20, this.h5), t.setUint32(24, this.h6), this.is224 || t.setUint32(28, this.h7), e
            }, i.prototype = new o, i.prototype.finalize = function () {
                if (o.prototype.finalize.call(this), this.inner) {
                    this.inner = !1;
                    var e = this.array();
                    o.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(e), o.prototype.finalize.call(this)
                }
            };
            var C = b();
            C.sha256 = C, C.sha224 = b(!0), C.sha256.hmac = I(), C.sha224.hmac = I(!0), c ? e.exports = C : (l.sha256 = C.sha256, l.sha224 = C.sha224, u && void 0 !== (t = function () {
                return C
            }.call(C, n, C, e)) && (e.exports = t))
        }()
    }).call(t, n(69)(e))
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        return function (r) {
            r.listenerId === e && (n(r), i.removeListener(t))
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.botEventEmmiter = void 0;
    var o = n(10),
        i = t.botEventEmmiter = new function () {
            var e = {},
                t = {};
            this.dispatchEvent = function (t, n, r) {
                n === e[t] && o.internalEventListener.dispatchEvent(t, Object.assign({
                    listenerId: n
                }, r))
            }, this.addListener = function (n, a, s) {
                i.removeListener(n), e[n] = s;
                var l = r(s, n, a);
                t[s] = l, o.internalEventListener.addListener(n, l)
            }, this.removeListener = function (n) {
                var r = e[n];
                o.internalEventListener.removeListener(n, t[r]), e[n] = null, delete e[n]
            }
        }
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        return e + "?" + (0, g.convert2Parameters)((0, g.addParameters)(t, []))
    }

    function o(e, t, n, r) {
        try {
            var o = a();
            o.kcid = t, o.recId = n || null;
            var i = p.trackKcEndpoint + "/" + u.eventTrackData.data[u.productIdParameter] + "/" + t + "/track/webLink/" + e + "?" + (0, g.convert2Parameters)((0, g.addParameters)(o, []));
            m.AjaxUtil.getData(i, r)
        } catch (n) {
            v.logger.logInternalError(n, "Error during tracking webLink " + e + "for kc id " + t)
        }
    }

    function i(e, t, n, r, o, i) {
        try {
            var s = a();
            s.kcid = r, s.catid = t, s.recId = o || null;
            var l = p.trackKcEndpoint + "/" + u.eventTrackData.data[u.productIdParameter] + "/" + r + "/track/article/" + e + "?" + (0, g.convert2Parameters)((0, g.addParameters)(s, []));
            m.AjaxUtil.getData(l, i)
        } catch (t) {
            v.logger.logInternalError(t, "Error during tracking article " + e + "for kc id " + r)
        }
    }

    function a() {
        var e = {};
        Object.assign(e, u.eventTrackData[d.cacheGetAll]()), (0, g.addCacheBuster)(e);
        var t = (0, y.getGlobalContext)();
        t && Object.assign(e, {
            gcx: JSON.stringify(t)
        });
        var n = location.protocol + "//",
            r = location,
            o = r.host,
            i = location.pathname,
            a = location.search,
            s = u.documentRef.title,
            l = location.hash,
            p = u.documentRef.referrer,
            m = p,
            v = (0, h.maskUrl)(n, o, i, a, l, p, s),
            b = c(v, 7);
        return n = b[0], o = b[1], i = b[2], a = b[3], l = b[4], m = b[5], s = b[6], Object.assign(e, {
            rf: m,
            sc: n,
            ho: o,
            pa: decodeURIComponent(i),
            q: decodeURIComponent(a),
            ha: decodeURIComponent(l),
            sch: (0, f.getPageHeight)(),
            scw: (0, f.getPageWidth)(),
            pt: s,
            u: "" + n + o + i + a + l
        }), e
    }

    function s(e, t) {
        try {
            var n = a();
            n.kcid = e, n.kct = t;
            var r = p.trackKcEndpoint + "/" + u.eventTrackData.data[u.productIdParameter] + "/" + e + "/track/toggle?" + (0, g.convert2Parameters)((0, g.addParameters)(n, []));
            m.AjaxUtil.getData(r)
        } catch (t) {
            v.logger.logInternalError(t, "Error during tracking toggle widget for kc id " + e)
        }
    }

    function l(e, t, n) {
        var o = n.articleId,
            i = n.articleUrl,
            s = n.articleProvider,
            l = n.articleTitle,
            c = n.recommendedId;
        try {
            var d = u.eventTrackData.data[u.productIdParameter],
                g = u.eventTrackData.data[u.aptrinsicIdParam],
                f = a(),
                h = p.trackKcEndpoint + "/" + d + "/" + e + "/" + p.trackWidgetExternalArticleInfix + "/" + o,
                y = r(h, Object.assign(f, {
                    art: l,
                    ai: g,
                    arpro: s,
                    aru: i,
                    ari: o,
                    recId: c
                }));
            m.AjaxUtil.getData(y)
        } catch (t) {
            v.logger.logInternalError(t, "Error during tracking article " + o + "for kc id " + e)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = function () {
        function e(e, t) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
        return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.getUrl = r, t.trackWebLinkClick = o, t.trackArticleClick = i, t.getTrackingPayload = a, t.trackToggleWidget = s, t.trackExternalArticleClick = l;
    var u = n(4),
        d = n(5),
        g = n(0),
        f = n(9),
        p = n(1),
        m = n(12),
        v = n(3),
        h = n(21),
        y = n(20)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.BROWSER_DEFAULT_FONTS = ["Arial", "Times New Roman", "Times", "Courier New", "Courier", "Verdana", "Georgia", "Palatino", "Garamond", "Bookman", "Tahoma", "Trebuchet MS", "Arial Black", "Impact", "Comic Sans MS"], t.FONTS_WEIGHTS = [400, 500, 600, 700], t.FONTS_SUBSETS = ["cyrillic-ext", "greek", "cyrillic"], t.GAINSIGHT_PX_OPEN_BOT = "GAINSIGHT_PX_OPEN_BOT", t.GAINSIGHT_PX_OPEN_ARTICLE = "GAINSIGHT_PX_OPEN_ARTICLE"
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function a(e) {
        j = e;
        var t = (0, _.arrayFrom)(e, function (e) {
                var t = e.mappedElements.filter(function (e) {
                    return "TEXT_ELEMENT" === e.type && (0, y.getConfig)("textMatchEnabled")
                });
                if (t.length < 1) return null;
                var n = Object.assign({}, e);
                return n.mappedElements = t, n
            }).filter(function (e) {
                return null !== e
            }),
            n = (0, _.arrayFrom)(e, function (e) {
                var t = e.mappedElements.filter(function (e) {
                    return H.indexOf(e.type) > -1
                });
                if (t.length < 1) return null;
                var n = Object.assign({}, e);
                return n.mappedElements = t, n
            }).filter(function (e) {
                return null !== e
            });
        D.splice.apply(D, [0, D.length].concat(i(t))), M.splice.apply(M, [0, M.length].concat(i(n))), (0, y.isIframe)() || w.default.syncFeatureRules(e)
    }

    function s(e) {
        (0, y.isIframe)() && a(e)
    }

    function l() {
        return j
    }

    function c() {
        var e = Object.assign({}, E.eventTrackData[I.cacheGetAll]());
        e.wsv = E.applicationVersion, (0, h.addCacheBuster)(e), b.AjaxUtil.getData(y.fetchFeatureRuleEndpoint + "?" + (0, h.convert2Parameters)((0, h.addParameters)(e, [])), a)
    }

    function u() {
        if (U) return JSON.parse(localStorage.getItem(q))
    }

    function d(e, t) {
        if (U) {
            var n = u();
            n && n[e] && n[e][t] && (delete n[e][t], localStorage.setItem(q, JSON.stringify(n)))
        }
    }

    function g(e, t) {
        if (!U) return !0;
        var n = u();
        if (!n || !n[e] || !n[e][t]) return !0;
        var r = n[e][t].timestamp;
        return Date.now() - r >= F && (d(e, t), !0)
    }

    function f(e, t) {
        if (U) {
            var n = u() || {};
            n[e] = n[e] || {}, n[e][t] = {
                timestamp: Date.now()
            }, localStorage.setItem(q, JSON.stringify(n))
        }
    }

    function p(e) {
        var t = e.scopeRules,
            n = e.urlLogicalOperator,
            r = (0, h.getPageUrl)();
        return "AND" === n ? t.every(function (e) {
            return (0, h.matchUrl)(e.urlScope, r, "NOT" === e.urlCondition)
        }) : t.some(function (e) {
            return (0, h.matchUrl)(e.urlScope, r, "NOT" === e.urlCondition)
        })
    }

    function m(e, t) {
        var n = e.textElementRules;
        if (!(0, y.isIframe)()) {
            if (!p(e)) return !1
        }
        return n.reduce(function (n, r) {
            if ("SELECTOR_TEXT_RULE" === e.type) {
                var o = (0, P.findInWindow)(r.cssSelector, document, !0),
                    i = Array.prototype.slice.call(o),
                    a = i.filter(function (e) {
                        return e === t || e.contains && e.contains(t)
                    });
                return !a || a.length < 1 ? n : n || a.some(function (e) {
                    return (0, O.matchExpression)((0, P.getText)(e), r.textOperator, (0, h.trimString)(r.text[0]))
                })
            }
            return "TEXT_ONLY_RULE" === e.type ? n || (0, O.matchExpression)((0, P.getText)(t), r.textOperator, (0, h.trimString)(r.text[0])) : (A.logger.logInternalError(new Error("trying to run unsupported rule type " + e.type + ", won't match")), !1)
        }, !1)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getRawFeatureRules = t.loadIframeRules = void 0;
    var v = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        h = n(0),
        y = n(1),
        b = n(12),
        E = n(4),
        I = n(5),
        C = n(24),
        T = n(100),
        w = r(T),
        S = n(6),
        k = n(16),
        x = n(9),
        O = n(89),
        _ = n(11),
        A = n(3),
        P = n(7),
        L = n(43),
        N = r(L),
        B = n(14),
        R = r(B),
        D = [],
        M = [],
        U = (0, x.localStorageEnabled)(),
        F = 18e5,
        V = [],
        j = void 0,
        H = ["SELECTOR_TEXT_RULE", "TEXT_ONLY_RULE"],
        q = "apt.fm",
        W = function () {
            function e() {
                o(this, e)
            }
            return v(e, [{
                key: "init",
                value: function () {
                    (0, y.isIframe)() || R.default.isEditorMode() || (setInterval(c, 3e5), c())
                }
            }, {
                key: "sendRuleMatchResults",
                value: function (e) {
                    var t = {
                        featureMatches: e
                    };
                    (0, C.internalApt)("feature", t)
                }
            }, {
                key: "matchFeatureRule",
                value: function (e, t) {
                    var n = e.textElementRules,
                        r = e.scopeRules,
                        o = e.urlLogicalOperator,
                        i = k.UUIDGenerator.generateV4Id();
                    (0, S.subscribe)(i, function (e, t) {
                        var n = (0, h.getPageUrl)(),
                            i = "AND" === o ? r.every(function (e) {
                                return (0, h.matchUrl)(e.urlScope, n, "NOT" === e.urlCondition)
                            }) : r.some(function (e) {
                                return (0, h.matchUrl)(e.urlScope, n, "NOT" === e.urlCondition)
                            }),
                            a = i && e.reduce(function (e, t) {
                                return e && t
                            });
                        (0, S.decrementState)(t.callingFutureId, {
                            id: t.rule.id,
                            matched: a
                        })
                    }, {
                        rule: e,
                        callingFutureId: t
                    }), !(0, y.isIframe)() && w.default.getElementText && n.forEach(function (e) {
                        try {
                            w.default.getElementText(e.cssSelector, i, function (t, n) {
                                t && (0, h.isNotEmptyArr)(t) || (0, S.decrementState)(n, !1);
                                for (var r = void 0, o = 0; o < t.length; o++)
                                    if ((0, h.isDefinedStr)(t[o])) {
                                        r = t[o];
                                        break
                                    } if ((0, h.isUndefinedStr)(r))(0, S.decrementState)(n, !1);
                                else {
                                    var i = (0, O.matchExpression)(r, e.textOperator, e.text[0]);
                                    (0, S.decrementState)(n, i)
                                }
                            })
                        } catch (e) {
                            (0, S.decrementState)(i, !1), A.logger.logInternalError(e)
                        }
                    })
                }
            }, {
                key: "handleAllFeatureMatchResult",
                value: function (e) {
                    var t = !1,
                        n = (0, _.arrayFrom)(e, function (e) {
                            var n = e.featureId;
                            return (0, _.arrayFrom)(e.rulesResult, function (e) {
                                var r = e.matched;
                                return !r && d(n, e.ruleId), g(n, e.ruleId) || (r = !1), r && (f(n, e.ruleId), t = !0), {
                                    id: n,
                                    feme: e.ruleId,
                                    femr: r
                                }
                            })
                        });
                    t && this.sendRuleMatchResults([].concat.apply([], n))
                }
            }, {
                key: "matchRules",
                value: function () {
                    var e = this,
                        t = k.UUIDGenerator.generateV4Id();
                    (0, S.subscribe)(t, this.handleAllFeatureMatchResult.bind(this)), D.forEach(function () {
                        return (0, S.incrementState)(t)
                    }), D.forEach(function (n) {
                        var r = n.mappedElements;
                        if ((0, h.isNotEmptyArr)(r)) {
                            var o = k.UUIDGenerator.generateV4Id();
                            (0, S.subscribe)(o, function (e, t) {
                                var n = (0, _.arrayFrom)(e, function (e) {
                                    return {
                                        ruleId: e.id,
                                        matched: e.matched
                                    }
                                });
                                (0, S.decrementState)(t.matchId, {
                                    featureId: t.featureId,
                                    rulesResult: n
                                })
                            }, {
                                matchId: t,
                                featureId: n.featureId
                            }), r.forEach(function () {
                                return (0, S.incrementState)(o)
                            }), r.forEach(function (t) {
                                e.matchFeatureRule(t, o)
                            })
                        }
                    })
                }
            }, {
                key: "try2Match",
                value: function () {
                    var e = this;
                    if ((0, y.getConfig)("textMatchEnabled")) {
                        try {
                            V.forEach(function (e) {
                                return clearTimeout(e)
                            })
                        } catch (e) {}
                        for (var t = 0; t < 3; t++) {
                            var n = setTimeout(function (t) {
                                return function () {
                                    var t = V.indexOf(void 0);
                                    t > -1 && V.splice(t, 1), e.matchRules()
                                }
                            }(), (0, y.getConfig)("delayClickEventTime") * (t + 1));
                            V.push(n)
                        }
                    }
                }
            }, {
                key: "matchElement",
                value: function (e) {
                    var t = M.reduce(function (t, n) {
                        var r = n.mappedElements,
                            o = r.filter(function (t) {
                                return m(t, e)
                            });
                        return o.length > 0 && ((0, y.isIframe)() ? t.push({
                            id: n.featureId,
                            rules: o
                        }) : t.push({
                            id: n.featureId,
                            feme: o[0].id,
                            femr: !0
                        })), t
                    }, []);
                    t && t.length > 0 && ((0, y.isIframe)() ? N.default.textFeatureMatch([].concat.apply([], t)) : this.sendRuleMatchResults([].concat.apply([], t)))
                }
            }, {
                key: "clearAll",
                value: function () {
                    localStorage.removeItem(q)
                }
            }, {
                key: "evaluateIframeMatches",
                value: function (e) {
                    var t = e.reduce(function (e, t) {
                        var n = t.rules,
                            r = n.filter(function (e) {
                                return p(e)
                            });
                        return r.length > 0 && e.push({
                            id: t.id,
                            feme: r[0].id,
                            femr: !0
                        }), e
                    }, []);
                    t && t.length > 0 && this.sendRuleMatchResults([].concat.apply([], t))
                }
            }]), e
        }(),
        G = new W;
    t.default = G, t.loadIframeRules = s, t.getRawFeatureRules = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
        markStepTracked: function (e, t) {
            var n = sessionStorage.getItem(e) || "{}",
                r = JSON.parse(n);
            r[t] || (r[t] = !0, sessionStorage.setItem(e, JSON.stringify(r)))
        },
        wasStepTracked: function (e, t) {
            var n = sessionStorage.getItem(e) || "{}";
            return !!JSON.parse(n)[t]
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = void 0;
        switch (t) {
            case "is":
                r = e === n;
                break;
            case "isNot":
                r = e !== n;
                break;
            case "isEmpty":
                r = (0, o.isBlank)(e);
                break;
            case "isNotEmpty":
                r = !(0, o.isBlank)(e);
                break;
            case "startsWith":
                r = 0 === e.indexOf(n);
                break;
            case "notStartsWith":
                var i = e.indexOf(n);
                r = (0, o.isBlank)(e) || i < 0 || i > 0;
                break;
            case "endsWith":
                r = e.indexOf(n) === e.length - n.length;
                break;
            case "contains":
                r = e.indexOf(n) > -1;
                break;
            case "notEndsWith":
                var a = e.indexOf(n);
                r = (0, o.isBlank)(e) || a < 0 || a + n.length < e.length;
                break;
            case "notContains":
                r = (0, o.isBlank)(e) || e.indexOf(n) < 0;
                break;
            default:
                throw new Error("unsupported operator type " + t)
        }
        return r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.matchExpression = r;
    var o = n(0)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setUser = t.copyUserFields = t.userFields = void 0;
    var r = n(23),
        o = n(0),
        i = n(112),
        a = n(3),
        s = n(1),
        l = n(24),
        c = t.userFields = ["id", "globalId", "email", "gender", "firstName", "lastName", "signUpDate", "title", "role", "subscriptionId", "phone", "countryCode", "countryName", "stateCode", "stateName", "city", "street", "continent", "postalCode", "regionName", "timeZone", "latitude", "longitude", "accountId", "firstVisitDate", "score", "userHash", "sfdcContactId"],
        u = t.copyUserFields = function (e, t) {
            var n = {};
            if (e.id && (n.ide = e.id.toString()), !(0, o.isBlank)(e.email) && (n.usem = e.email), (0, o.isObject)(e)) {
                var r = {};
                for (var a in e) e.hasOwnProperty(a) && (-1 === c.indexOf(a) ? r[a] = e[a] : n[a] = e[a]);
                n.customAttributes = r, (0, i.shouldInjectAccountId)(e, t) && (n.accountId = t.id)
            }
            return delete n.id, delete n.email, n
        };
    t.setUser = function (e) {
        if ((0, s.getConfig)("enableTag")) {
            var t = {},
                n = r.UserData.getAptrinisId(),
                o = r.UserData.getUserId();
            if (!r.UserData.isUser()) return void a.logger.log("not doing anything since not a user yet, visitor id: " + o + ", user id: " + n);
            t.usf = u(e, null), (0, l.internalApt)("setAttribute", t)
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if ((0, o.getConfig)("enableFullStory")) try {
            var t = window._fs_namespace;
            if (t && (0, a.isFunction)(window[t].getCurrentSessionURL)) {
                var n = window[t].getCurrentSessionURL(!0);
                n && (e.fs = n)
            }
        } catch (e) {
            i.logger.logInternalError(e, "Unable to FullStory session")
        }
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.addFullStoryInfo = void 0;
    var o = n(1),
        i = n(3),
        a = n(0);
    t.addFullStoryInfo = r
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ScrollEventBinder = void 0;
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(4),
        a = n(0),
        s = n(3),
        l = n(19);
    t.ScrollEventBinder = function () {
        function e() {
            r(this, e), this.bindedElementsMap = {}
        }
        return o(e, [{
            key: "getFollowScrollHandler",
            value: function (e, t, n) {
                var r = void 0,
                    o = void 0,
                    i = void 0,
                    a = e.getBoundingClientRect(),
                    c = a.left,
                    u = a.top;
                return r = e.scrollTop, o = e.scrollLeft, n || (i = {}),
                    function (e) {
                        var n = (0, l.getEventTarget)(e),
                            a = n.getBoundingClientRect(),
                            d = a.top,
                            g = a.left,
                            f = d !== u || g !== c;
                        if (!(n && "hidden" === n.style.visibility || f)) {
                            if (c = g, u = d, i[n]) {
                                if (r > 99999 || o > 99999) return void s.logger.logInternalError(new Error("Warning: large values seen for lastSroll in scroll event handler " + r + "/" + o));
                                for (var p = n.scrollTop - r, m = n.scrollLeft - o, v = Array.isArray(t) ? t : [t], h = 0; h < v.length; h++) v[h].style.top = parseInt(v[h].style.top) - p + "px", v[h].style.left = parseInt(v[h].style.left) - m + "px"
                            } else i[n] = !0;
                            r = n.scrollTop, o = n.scrollLeft, (r > 99999 || o > 99999) && s.logger.logInternalError(new Error("Warning: large values seen for lastSroll in scroll event handler" + r + "/" + o))
                        }
                    }
            }
        }, {
            key: "clearScrollEventListenerFromParents",
            value: function (e) {
                var t = this;
                try {
                    this.bindedElementsMap[e] && this.bindedElementsMap[e].elements.forEach(function (n) {
                        (0, a.removeEventListener)(n, t.bindedElementsMap[e].scrollHandler)
                    })
                } catch (t) {
                    s.logger.logInternalError(t, "Error happened during clearing scroll handler of element " + e)
                }
            }
        }, {
            key: "handleScrollEvent",
            value: function (t, n) {
                try {
                    for (var r = t.parentNode; r.tagName && "BODY" !== r.tagName;) {
                        if (e.hasScrollbars(r)) {
                            var o = r;
                            this.bindedElementsMap[t] || (this.bindedElementsMap[t] = {}), this.bindedElementsMap[t].elements && Array.isArray(this.bindedElementsMap[t].elements) || (this.bindedElementsMap[t].elements = []), this.bindedElementsMap[t].scrollHandler || (this.bindedElementsMap[t].scrollHandler = n), this.bindedElementsMap[t].elements.push(o), (0, a.addEventListener)(o, "scroll", function (e) {
                                n(e)
                            })
                        }
                        r = (0, l.getParentElement)(r)
                    }
                } catch (e) {
                    s.logger.logInternalError(e, "Error during setting scroll event for element " + t)
                }
            }
        }], [{
            key: "hasScrollbars",
            value: function (e) {
                var t = i.windowRef.getComputedStyle(e);
                return "auto" === t["overflow-x"] || "scroll" === t["overflow-x"] || "auto" === t["overflow-y"] || "scroll" === t["overflow-y"]
            }
        }]), e
    }()
}, , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        o = n(3),
        i = n(23),
        a = n(1),
        s = n(24),
        l = n(43),
        c = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(l),
        u = new function () {
            function e(e) {
                return void 0 !== e && null != e
            }

            function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (e.indexOf(r) > -1) return !0
                }
                return !1
            }

            function n(n) {
                if ((0, a.getConfig)("enableTag")) {
                    var i = n.querySelectorAll("input[type=password]");
                    if (e(i) && i.length > 0) return void o.logger.log("lead tracker does not collect forms with password fields");
                    try {
                        if (t(n.querySelectorAll("[type=submit]").item(0).textContent.toLowerCase(), ["password", "unsubscribe"])) return void o.logger.log("lead tracker does not collect forms with reserved words")
                    } catch (e) {
                        o.logger.logInternalError(e)
                    }
                    var s = {},
                        l = {},
                        c = void 0,
                        u = void 0,
                        d = void 0,
                        g = n.querySelectorAll("input");
                    if (e(g)) {
                        for (var f = 0; f < g.length; f++) c = g[f], "password" !== (d = c.getAttribute("type")) && "button" !== d && "submit" !== d && (u = c.getAttribute("id") || c.getAttribute("name")) && (l[u] = c.value) && (0, r.isEmail)(l[u]) && (s.email = l[u]);
                        s.formFields = l
                    }
                    return s
                }
            }

            function l(e, t) {
                (0, a.getConfig)("enableTag") && (i.UserData.changeUserType(i.UserData.getLeadType()), (0, s.internalApt)("lead", {
                    fof: t,
                    usf: {
                        usem: e,
                        ls: "FORM"
                    }
                }, function (e) {
                    i.UserData.setAptrinsicId(e.ai, !0)
                }))
            }
            var u = this;
            this.init = function () {
                (0, a.getConfig)("enableTag") && (0, a.featureEnabled)("form") && (0, r.addEventListener)(document, "submit", function (e) {
                    try {
                        if (i.UserData.getUserType() != i.UserData.visitorType()) return;
                        if (location.href.toLowerCase().indexOf("unsubscribe") > -1) return;
                        var t = n(e.target);
                        t && t.email && ((0, a.isIframe)() ? c.default.lead("FORM", t.email, void 0, t.formFields) : l(t.email, t.formFields))
                    } catch (e) {
                        o.logger.logInternalError(e)
                    }
                })
            }, this.trackLead = function (e, t) {
                try {
                    if (!(0, a.getConfig)("enableTag")) return;
                    var n = {};
                    Object.assign(n, t), n.usem = e, n.ls = "API", (0, a.isIframe)() ? c.default.lead("API", e, t) : (0, s.internalApt)("lead", {
                        usf: n
                    }, function (e) {
                        i.UserData.setAptrinsicId(e.ai, !0)
                    })
                } catch (e) {
                    o.logger.logInternalError(e)
                }
            }, this.track = function (e, t, n, r) {
                if ((0, a.getConfig)("enableTag") && !(0, a.isIframe)()) switch (e) {
                    case "API":
                        u.trackLead(t, n);
                        break;
                    case "FORM":
                        l(t, r);
                        break;
                    default:
                        o.logger.logInternalError(new Error("got unknown lead source: " + e))
                }
            }
        };
    t.default = u
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(1),
        a = n(4),
        s = n(42),
        l = n(3),
        c = function () {
            function e() {
                r(this, e)
            }
            return o(e, null, [{
                key: "call",
                value: function () {
                    for (var t = arguments[0], n = t.length, r = 0; r < n; r++) e.callCommand(t[r])
                }
            }, {
                key: "callCommand",
                value: function (e) {
                    try {
                        if (e.length < 1) throw new Error("Cannot have command with less than one arguments");
                        if (!(0, i.getConfig)("enableTag") && "config" !== e[0]) return;
                        var t = Array.prototype.slice.call(e),
                            n = t[0];
                        if ("reset" !== n && e.length < 2) throw new Error("Cannot have command with less than two arguments");
                        a.apiMethods.indexOf(n) > -1 && s.externalApi[n].apply(s.externalApi, t.slice(1))
                    } catch (e) {
                        l.logger.logInternalError(e)
                    }
                }
            }]), e
        }();
    t.default = c
}, function (e, t, n) {
    "use strict";

    function r(e, t, n, r, p, m) {
        var v = o.getConfigEndpoint + "/" + t,
            h = i.UserData.getAptrinisId(!0);
        i.UserData.getUserType(!0) > 0 && h && (v += "?ai=" + h), a.AjaxUtil.getData(v, function (i) {
            var a = i.sdkConfiguration;
            s.logger.log("Received new configuration: \n" + JSON.stringify(a, null, 2)), (0, o.overrideConfig)(a, !e), s.logger.log("Applied configuration: \n" + JSON.stringify((0, o.getConfigObj)(), null, 2));
            var v = (0, l.detectIE)();
            v && v < 10 && (s.logger.logInternalError(new Error("disabling tag since this is unsupported IE version " + v)), (0, o.disableTag)()), (0, o.overrideConfig)(r, !1, !0), e && (0, o.getConfig)("enableTag") ? ((0, d.loadChecksumFile)((0, o.getConfig)(g.ENGAGEMENT_CHECKSUM_URL_CONFIG)), p(t, n, e)) : (0, o.getConfig)("enableTag") ? (m && m(), (0, d.loadChecksumFile)((0, o.getConfig)(g.ENGAGEMENT_CHECKSUM_URL_CONFIG))) : c.windowRef[c.aptrinsicGlobalObjName] = f, (0, u.initKnowledgeCenterWrapper)(e, !e)
        }, null, function () {
            e ? ((0, o.overrideConfig)((0, o.getConfigObj)(), !1), (0, o.overrideConfig)(r, !1, !0), p(t, n, e)) : m && m(), s.logger.log("Applied configuration: \n" + JSON.stringify((0, o.getConfigObj)(), null, 2))
        }, void 0, void 0, (0, o.getConfig)("requestTimeoutCritical"))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getServerConfiguration = t.tagConfigKeyName = void 0;
    var o = n(1),
        i = n(23),
        a = n(12),
        s = n(3),
        l = n(9),
        c = n(4),
        u = n(65),
        d = n(50),
        g = n(49),
        f = function () {};
    t.tagConfigKeyName = "tagConfig", t.getServerConfiguration = r
}, function (e, t, n) {
    "use strict";

    function r() {
        function e(e, t, n) {
            var r = a.IframeRequest.getMasterRequst("getElementText", {
                cssSelector: t
            }, n);
            (0, i.postRequestDown)(r, e)
        }

        function t() {
            return !((0, d.isIframe)() || l.default.isEditorMode())
        }
        var n = window.top;
        this.getElementText = function (n, r, i) {
            if (t()) {
                n || i(void 0, r);
                var s = (0, o.getElementText)(n),
                    l = void 0;
                if ((0, u.isDefinedStr)(s)) return void i([s], r);
                var d = c.UUIDGenerator.generateV4Id();
                (0, a.subscribe)(d, function (e, t) {
                    i(e, t)
                }, r);
                try {
                    var g = (0, a.getRegisteredIframes)();
                    if ((0, u.isNotEmptyArr)(g))
                        for (var f = 0; f < g.length; f++) l = g[f], e(l, n, d), (0, a.incrementState)(d);
                    else i(void 0, r)
                } catch (e) {}
            }
        }, this.lead = function (e, r, o, s) {
            if (t()) {
                var l = a.IframeRequest.getIframeRequest((0, i.getIframeId)(), "lead", {
                    source: e,
                    email: r,
                    userData: o,
                    formFields: s
                });
                (0, i.postRequest)(l, n, !0)
            }
        }, this.syncFeatureRules = function (e) {
            if (t()) {
                var n = a.IframeRequest.getMasterRequst("registerFeatureRules", {
                    rules: e
                });
                (0, i.propagateDown)(n, (0, a.getRegisteredIframes)())
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(7),
        i = n(13),
        a = n(6),
        s = n(14),
        l = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(s),
        c = n(16),
        u = n(0),
        d = n(1),
        g = new r;
    t.default = g
}, function (e, t, n) {
    "use strict";

    function r(e) {
        null !== sessionStorage.getItem(e) && localStorage.setItem(e, sessionStorage.getItem(e))
    }

    function o(e) {
        null !== localStorage.getItem(e) && (sessionStorage.setItem(e, localStorage.getItem(e)), localStorage.removeItem(e))
    }

    function i() {
        s.forEach(r)
    }

    function a() {
        s.forEach(o)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.copySessionStorageToLocalStorage = r, t.copyLocalStorageToSessionStorage = o, t.copySessionStorageToLocalStorageGuideKeys = i, t.copyLocalStorageToSessionStorageGuideKeys = a;
    var s = ["apt.stepId", "apt.prevStepMap", "apt.guideId", "aptCurrentGuideUrl", "apt.localCache"]
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        var t = (0, s.findElementInWindow)(e.content.elementSelector, document),
            n = e.aptrinsicRequestId,
            r = !0,
            o = function e(o) {
                r && ((0, l.hasElement)(t, o.target) || (f.default.guideExternalElementClicked(n), (0, l.removeEventListener)(document, "click", e, !1), r = !1))
            };
        (0, l.addEventListener)(document, "click", o)
    }

    function i() {
        var e = this,
            t = {},
            n = void 0,
            r = !0,
            o = function (t) {
                return function () {
                    r && (f.default.guideLinkedElementClicked(t), e.removeAllHandlers(), r = !1)
                }
            };
        this.addEnterKeyDownListener = function (e) {
            var r = e.aptrinsicRequestId,
                i = e.content.elementSelector;
            n = (0, s.findElementInWindow)(i, document), (0, l.isEnterAllowedElement)(n) && (t.keydown = function (e) {
                -1 !== [13, 9].indexOf(e.keyCode) && e.currentTarget === n && o(r)()
            }, (0, l.addEventListener)(n, "keydown", t.keydown))
        }, this.addEventListener = function (e, r) {
            var i = r.aptrinsicRequestId,
                a = r.content.elementSelector;
            n = (0, s.findElementInWindow)(a, document), "click" !== e && "contextmenu" !== e && "mouseover" !== e || (t[e] = o(i), (0, l.addEventListener)(n, e, t[e]))
        }, this.removeEventListener = function (e, n) {
            (0, l.removeEventListener)(e, n, t[n]), t[n] = null
        }, this.removeAllHandlers = function () {
            n && (e.removeEventListener(n, "click"), e.removeEventListener(n, "contextmenu"), e.removeEventListener(n, "mouseover"), e.removeEventListener(n, "keydown")), r = !0
        }
    }

    function a(e) {
        if ((0, u.isValidCallingDomain)(e.origin)) try {
            var t = (0, u.parseEvent)(e);
            if (!t) return;
            if (C.indexOf(t.aptrinsicEventType) > -1) {
                if ((0, p.checkHandledRequest)(t.aptrinsicRequestId)) return void c.logger.log("ignoring request that was already handled " + t.aptrinsicRequestId);
                switch ((0, p.addHandledRequestId)(t.aptrinsicRequestId), t.aptrinsicEventType) {
                    case "redirect":
                        v.default.getToken() || (window.location.href = (0, l.addParametersToUrl)(window.location.href, JSON.parse(t.content.params)));
                        break;
                    case "register":
                        (0, p.registerIframe)(e.source, e.origin, t.aptrinsicIframeId);
                        var n = document.getElementsByTagName("iframe");
                        (0, u.associateChildIframes)(n);
                        break;
                    case "elementExist":
                        var r = t.content,
                            i = (0, s.findElementInWindow)(r.elementSelector, document, !0),
                            a = null,
                            g = 0,
                            m = ((0, l.isNodeList)(i) || Array.isArray(i)) && i.length > 0,
                            h = Node.prototype.isPrototypeOf(i);
                        m ? (a = i[0], g = i.length) : h && (a = i, g = 1);
                        var b = (0, l.isElementVisibleProxy)(a, r.scrollToElement);
                        a && !b && r.scrollToElement && (0, l.scrollElementToCenter)(a, function (e) {
                            return c.logger.logInternalError(e)
                        }), f.default.sendElementResponse(a, b, g, t.aptrinsicRequestId);
                        break;
                    case "getChildAssociation":
                        f.default.associateParent(t.aptrinsicRequestId);
                        break;
                    case "associateParent":
                        (0, p.decrementState)(t.aptrinsicRequestId, {
                            iframeId: t.aptrinsicIframeId
                        });
                        break;
                    case "apt-msg-get-element-location":
                        var w = d.GuideDrawerIframe.getElementBoundingRect(t.content.elementSelector);
                        f.default.broadcastElementRect(w, t.aptrinsicRequestId);
                        break;
                    case "apt_msg_get_badges_locations":
                        var S = y.badgeIframeHelper.getBadgesWithLocations();
                        f.default.broadcastUpBadgesLocation(S, t.aptrinsicRequestId);
                        break;
                    case "apt_msg_get_badges_locations_parent_iframe":
                        var k = t.content.badges,
                            x = t.aptrinsicIframeId,
                            O = (0, u.fixBadgesLocations)(x, k);
                        f.default.broadcastUpBadgesLocation(O, t.aptrinsicRequestId);
                        break;
                    case "apt_msg_remove_badge":
                        var _ = t.content.badgeId;
                        _ && y.badgeIframeHelper.removeBadgeFromBadgesList(_);
                        break;
                    case "apt_msg_send_badge":
                        var A = t.content.badge;
                        A && y.badgeIframeHelper.addBadgeToBadgesList(A);
                        break;
                    case "apt_msg_badge_set_observer":
                        (0, y.addBadgeObserver)();
                        var P = y.badgeIframeHelper.getBadgesWithLocations();
                        P.length > 0 && f.default.broadcastBadgesStatuses(P);
                        break;
                    case "apt_msg_badge_unset_observer":
                        (0, y.removeBadgeObserver)();
                        break;
                    case "apt-msg-element-rect":
                        var L = t.content.elementRect,
                            N = t.aptrinsicRequestId,
                            B = (0, p.getIframeData)(t.aptrinsicIframeId),
                            R = B.domElement.getBoundingClientRect();
                        L.top += R.top, L.left += R.left, L.bottom += R.bottom, L.right += R.right, f.default.broadcastElementRect(L, N);
                        break;
                    case "apt-msg-add-handler-show-next-step":
                        switch (T.removeAllHandlers(), t.content.nextStepTrigger) {
                            case "ELEMENT_CLICK":
                                T.addEventListener("click", t), T.addEventListener("contextmenu", t);
                                break;
                            case "ELEMENT_HOVER":
                                T.addEventListener("mouseover", t);
                                break;
                            case "INPUT_TEXT_COMPLETION":
                                T.addEnterKeyDownListener(t)
                        }
                        break;
                    case "aptGuideExternalClick":
                        o(t);
                        break;
                    case "apt-msg-remove-element-handlers":
                        T.removeAllHandlers();
                        break;
                    case I.EVENTS.BOT:
                        (0, E.default)(t);
                        break;
                    default:
                        c.logger.logInternalError(new Error("child iframe script got unsupported event from master, data: " + JSON.stringify(t)))
                }
            }
        } catch (e) {
            c.logger.logInternalError(e)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.handleIncomingRequest = void 0;
    var s = n(7),
        l = n(0),
        c = n(3),
        u = n(13),
        d = n(62),
        g = n(40),
        f = r(g),
        p = n(6),
        m = n(14),
        v = r(m),
        h = n(1),
        y = n(34),
        b = n(113),
        E = r(b),
        I = n(22),
        C = ["apt-msg-get-element-location", "apt-msg-add-handler-show-next-step", "apt-msg-remove-element-handlers", "register", "getChildAssociation", "apt-msg-element-rect", "associateParent", "elementExist", "aptGuideExternalClick", "redirect", "apt_msg_get_badges_locations", "apt_msg_badge_set_observer", "apt_msg_badge_unset_observer", "apt_msg_send_badge", "apt_msg_remove_badge", "apt_msg_get_badges_locations_parent_iframe", I.EVENTS.BOT],
        T = new i,
        w = new function () {
            (0, h.isIframe)() && !v.default.isEditorMode() && (0, l.addEventListener)(window, "message", a)
        };
    t.default = w, t.handleIncomingRequest = a
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        (0, d.postRequestDown)({
            origin: window.location.href,
            aptrinsicEventType: "redirect",
            content: {
                params: t
            }
        }, (0, u.getIframeData)(e))
    }

    function i(e) {
        if ((0, d.isValidCallingDomain)(e.origin)) {
            var t = (0, d.parseEvent)(e);
            try {
                if (null === t) return;
                if (E.indexOf(t.aptrinsicEventType) > -1) {
                    var n = t.aptrinsicRequestId + "_" + t.aptrinsicIframeId;
                    if ((0, u.checkHandledRequest)(n)) return void c.logger.log("ignoring request that was already handled " + t.aptrinsicRequestId);
                    switch ((0, u.addHandledRequestId)(n), t.aptrinsicEventType) {
                        case "register":
                            (0, u.registerIframe)(e.source, e.origin, t.aptrinsicIframeId, (0, l.getConfig)("framesetMode"));
                            var r = document.getElementsByTagName("iframe");
                            (0, d.associateChildIframes)(r);
                            if (f.default.isEditorMode()) {
                                var i = f.default.getQueryParams();
                                o(t.aptrinsicIframeId, JSON.stringify(i))
                            }
                            break;
                        case "associateParent":
                            (0, u.decrementState)(t.aptrinsicRequestId, {
                                iframeId: t.aptrinsicIframeId
                            });
                            break;
                        case "apt-msg-element-rect-parent":
                            var a = t.content.elementRect,
                                s = (0, u.getIframeData)(t.aptrinsicIframeId),
                                g = (0, l.getConfig)("framesetMode") ? s.frameOffset : s.domElement.getBoundingClientRect();
                            a.top += g.top, a.left += g.left, a.bottom += g.bottom, a.right += g.right, (0, u.decrementState)(t.aptrinsicRequestId, a);
                            break;
                        case "apt-msg-element-clicked":
                            (0, u.decrementState)(t.aptrinsicRequestId, {});
                            break;
                        case "apt_msg_get_badges_locations_response":
                            var p = t.content.badges,
                                y = t.aptrinsicIframeId,
                                I = (0, d.fixBadgesLocations)(y, p);
                            (0, u.decrementState)(t.aptrinsicRequestId, {
                                badges: I,
                                iframeData: (0, u.getIframeData)(y)
                            });
                            break;
                        case "apt_msg_badge_post_status":
                            (0, v.updateBadgesFromIframe)(t.aptrinsicIframeId, t.content.badges);
                            break;
                        case "elementExistResult":
                            var C = t.content.exist,
                                T = t.content.count > 0 ? t.content.count : 0;
                            (0, u.decrementState)(t.aptrinsicRequestId, {
                                exist: C,
                                isVisible: t.content.isVisible,
                                count: T,
                                iframeData: (0, u.getIframeData)(t.aptrinsicIframeId)
                            });
                            break;
                        case "apt-msg-external-element-clicked":
                            (0, u.decrementState)(t.aptrinsicRequestId, {}), m.default.handleIframeExternalClick(t.aptrinsicIframeId);
                            break;
                        case h.EVENTS.BOT:
                            (0, b.default)(t);
                            break;
                        default:
                            c.logger.logInternalError(new Error("master script got unsupported event from iframe, data: " + JSON.stringify(t)))
                    }
                }
            } catch (e) {
                c.logger.logInternalError(e)
            }
        }
    }

    function a() {
        (0, l.isIframe)() || f.default.isEditorMode() || (0, s.addEventListener)(window, "message", i, !1)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.handleIncomingRequest = void 0;
    var s = n(0),
        l = n(1),
        c = n(3),
        u = n(6),
        d = n(13),
        g = n(14),
        f = r(g),
        p = n(74),
        m = r(p),
        v = n(34),
        h = n(22),
        y = n(114),
        b = r(y),
        E = ["register", "apt-msg-element-rect-parent", "apt-msg-element-clicked", "associateParent", "elementExistResult", "apt-msg-external-element-clicked", "apt_msg_badge_post_status", "apt_msg_get_badges_locations_response", h.EVENTS.BOT],
        I = new a;
    t.default = I, t.handleIncomingRequest = i
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
        for (var n = Object(e), r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (void 0 !== o && null !== o)
                for (var i = Object.keys(Object(o)), a = 0, s = i.length; a < s; a++) {
                    var l = i[a],
                        c = Object.getOwnPropertyDescriptor(o, l);
                    void 0 !== c && c.enumerable && (n[l] = o[l])
                }
        }
        return n
    }

    function o() {
        Object.assign || Object.defineProperty(Object, "assign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: r
        })
    }
    e.exports = {
        assign: r,
        polyfill: o
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        for (var n = e.split("."), r = t.split("."), o = 0; o < 3; o++) {
            var i = Number(n[o]),
                a = Number(r[o]);
            if (i > a) return 1;
            if (a > i) return -1;
            if (!isNaN(i) && isNaN(a)) return 1;
            if (isNaN(i) && !isNaN(a)) return -1
        }
        return 0
    }
}, function (e, t, n) {
    "use strict";
    (function (e) {
        function r() {
            return t._ = r = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, r.apply(this, arguments)
        }

        function o(e) {
            e.offsetHeight
        }

        function i(e, t) {
            e.innerHTML = t
        }

        function a(e) {
            return !(!e || !e._tippy || e._tippy.reference !== e)
        }

        function s(e, t) {
            return {}.hasOwnProperty.call(e, t)
        }

        function l(e) {
            return g(e) ? [e] : f(e) ? T(e) : Array.isArray(e) ? e : T(document.querySelectorAll(e))
        }

        function c(e, t, n) {
            if (Array.isArray(e)) {
                var r = e[t];
                return null == r ? Array.isArray(n) ? n[t] : n : r
            }
            return e
        }

        function u(e, t) {
            return e && e.modifiers && e.modifiers[t]
        }

        function d(e, t) {
            var n = {}.toString.call(e);
            return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1
        }

        function g(e) {
            return d(e, "Element")
        }

        function f(e) {
            return d(e, "NodeList")
        }

        function p(e) {
            return d(e, "MouseEvent")
        }

        function m(e, t) {
            return "function" == typeof e ? e.apply(void 0, t) : e
        }

        function v(e, t, n, r) {
            e.filter(function (e) {
                return e.name === t
            })[0][n] = r
        }

        function h() {
            return document.createElement("div")
        }

        function y(e, t) {
            e.forEach(function (e) {
                e && (e.style.transitionDuration = t + "ms")
            })
        }

        function b(e, t) {
            e.forEach(function (e) {
                e && e.setAttribute("data-state", t)
            })
        }

        function E(e, t) {
            if (0 === t) return e;
            var n;
            return function (r) {
                clearTimeout(n), n = setTimeout(function () {
                    e(r)
                }, t)
            }
        }

        function I(e, t, n) {
            e && e !== t && e.apply(void 0, n)
        }

        function C(e, t) {
            var n = r({}, e);
            return t.forEach(function (e) {
                delete n[e]
            }), n
        }

        function T(e) {
            return [].slice.call(e)
        }

        function w(e, t) {
            for (; e;) {
                if (t(e)) return e;
                e = e.parentElement
            }
            return null
        }

        function S(e, t) {
            return e.indexOf(t) > -1
        }

        function k(e) {
            return e.split(/\s+/).filter(Boolean)
        }

        function x(e, t) {
            return void 0 !== e ? e : t
        }

        function O(e) {
            return [].concat(e)
        }

        function _(e) {
            var t = O(e),
                n = t[0];
            return n ? n.ownerDocument || document : document
        }

        function A(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }

        function P(e) {
            return "number" == typeof e ? e + "px" : e
        }

        function L(e) {
            return e.filter(function (t, n) {
                return e.indexOf(t) === n
            })
        }

        function N(e) {
            return "number" == typeof e ? e : parseFloat(e)
        }

        function B(e, t) {
            var n = "string" == typeof t && S(t, "rem"),
                r = e.documentElement;
            return r && n ? parseFloat(getComputedStyle(r).fontSize || String(16)) * N(t) : N(t)
        }

        function R(e, t, n) {
            void 0 === t && (t = 5);
            var r = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
            return Object.keys(r).reduce(function (r, o) {
                return r[o] = "number" == typeof t ? t : t[o], e === o && (r[o] = "number" == typeof t ? t + n : t[e] + n), r
            }, r)
        }

        function D(e) {
            return "\n    " + e + "() was called on a" + ("destroy" === e ? "n already-" : " ") + "destroyed instance. This is a no-op but\n    indicates a potential memory leak.\n  "
        }

        function M(e) {
            var t = /[ \t]{2,}/g,
                n = /^[ \t]*/gm;
            return e.replace(t, " ").replace(n, "").trim()
        }

        function U(e) {
            return M("\n  %ctippy.js\n\n  %c" + M(e) + "\n\n  %cðŸ‘·â€ This is a development-only message. It will be removed in production.\n  ")
        }

        function F(e) {
            return [U(e), "color: #00C584; font-size: 1.3em; font-weight: bold;", "line-height: 1.5", "color: #a6a095;"]
        }

        function V(e, t) {
            if (e) {
                var n;
                (n = console).warn.apply(n, F(t))
            }
        }

        function j(e, t) {
            if (e) {
                var n;
                (n = console).error.apply(n, F(t))
            }
        }

        function H(e) {
            var t = !e,
                n = "[object Object]" === Object.prototype.toString.call(e) && !e.addEventListener;
            j(t, ["tippy() was passed", "`" + String(e) + "`", "as its targets (first) argument. Valid types are: String, Element, Element[],", "or NodeList."].join(" ")), j(n, ["tippy() was passed a plain object which is no longer supported as an argument.", "See: https://atomiks.github.io/tippyjs/misc/#custom-position"].join(" "))
        }

        function q(e) {
            var t = e.plugins || [],
                n = t.reduce(function (t, n) {
                    var r = n.name,
                        o = n.defaultValue;
                    return r && (t[r] = void 0 !== e[r] ? e[r] : o), t
                }, {});
            return r({}, e, {}, n)
        }

        function W(e, t) {
            return (t ? Object.keys(q(r({}, be, {
                plugins: t
            }))) : Ee).reduce(function (t, n) {
                var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                if (!r) return t;
                if ("content" === n) t[n] = r;
                else try {
                    t[n] = JSON.parse(r)
                } catch (e) {
                    t[n] = r
                }
                return t
            }, {})
        }

        function G(e, t) {
            var n = r({}, t, {
                content: m(t.content, [e])
            }, t.ignoreAttributes ? {} : W(e, t.plugins));
            return n.interactive && (n.aria = null), n
        }

        function K(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = []), Object.keys(e).forEach(function (n) {
                var r = e[n],
                    o = "popperOptions" === n && null !== r && "object" === (void 0 === r ? "undefined" : pe(r)) && s(r, "placement"),
                    i = C(be, ["animateFill", "followCursor", "inlinePositioning", "sticky"]),
                    a = ["a11y", "arrowType", "showOnInit", "size", "target", "touchHold"],
                    l = !s(i, n) && !S(a, n);
                l && (l = 0 === t.filter(function (e) {
                    return e.name === n
                }).length), V("target" === n, ["The `target` prop was removed in v5 and replaced with the delegate() addon", "in order to conserve bundle size.", "See: https://atomiks.github.io/tippyjs/addons/#event-delegation"].join(" ")), V("a11y" === n, ["The `a11y` prop was removed in v5. Make sure the element you are giving a", "tippy to is natively focusable, such as <button> or <input>, not <div>", "or <span>."].join(" ")), V("showOnInit" === n, "The `showOnInit` prop was renamed to `showOnCreate` in v5."), V("arrowType" === n, ["The `arrowType` prop was removed in v5 in favor of overloading the `arrow`", "prop.", "\n\n", '"round" string was replaced with importing the string from the package.', "\n\n", "* import {roundArrow} from 'tippy.js'; (ESM version)\n", "* const {roundArrow} = tippy; (IIFE CDN version)", "\n\n", 'Before: {arrow: true, arrowType: "round"}\n', "After: {arrow: roundArrow}`"].join(" ")), V("touchHold" === n, ["The `touchHold` prop was removed in v5 in favor of overloading the `touch`", "prop.", "\n\n", "Before: {touchHold: true}\n", 'After: {touch: "hold"}'].join(" ")), V("size" === n, ["The `size` prop was removed in v5. Instead, use a theme that specifies", "CSS padding and font-size properties."].join(" ")), V("theme" === n && "google" === r, 'The included theme "google" was renamed to "material" in v5.'), V(o, ["Specifying placement in `popperOptions` is not supported. Use the base-level", "`placement` prop instead.", "\n\n", 'Before: {popperOptions: {placement: "bottom"}}\n', 'After: {placement: "bottom"}'].join(" ")), V(l, ["`" + n + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's a", "plugin, forgot to pass it in an array as props.plugins.", "\n\n", "In v5, the following props were turned into plugins:", "\n\n", "* animateFill\n", "* followCursor\n", "* sticky", "\n\n", "All props: https://atomiks.github.io/tippyjs/all-props/\n", "Plugins: https://atomiks.github.io/tippyjs/plugins/"].join(" "))
            })
        }

        function z() {
            Re.isTouch || (Re.isTouch = !0, window.performance && document.addEventListener("mousemove", Y))
        }

        function Y() {
            var e = performance.now();
            e - De < 20 && (Re.isTouch = !1, document.removeEventListener("mousemove", Y)), De = e
        }

        function J() {
            var e = document.activeElement;
            if (a(e)) {
                var t = e._tippy;
                e.blur && !t.state.isVisible && e.blur()
            }
        }

        function X() {
            document.addEventListener("touchstart", z, r({}, Te, {
                capture: !0
            })), window.addEventListener("blur", J)
        }

        function Q(e) {
            var t = e && je && Re.isTouch;
            document.body.classList[t ? "add" : "remove"](we)
        }

        function $(e) {
            return e.split("-")[0]
        }

        function Z(e) {
            e.setAttribute("data-inertia", "")
        }

        function ee(e) {
            e.removeAttribute("data-inertia")
        }

        function te(e) {
            e.setAttribute("data-interactive", "")
        }

        function ne(e) {
            e.removeAttribute("data-interactive")
        }

        function re(e, t) {
            if (g(t.content)) i(e, ""), e.appendChild(t.content);
            else if ("function" != typeof t.content) {
                var n = t.allowHTML ? "innerHTML" : "textContent";
                e[n] = t.content
            }
        }

        function oe(e) {
            return {
                tooltip: e.querySelector(Pe),
                content: e.querySelector(Le),
                arrow: e.querySelector(Ne) || e.querySelector(Be)
            }
        }

        function ie(e) {
            var t = h();
            return !0 === e ? t.className = Oe : (t.className = _e, g(e) ? t.appendChild(e) : i(t, e)), t
        }

        function ae(e, t) {
            var n = h();
            n.className = Se, n.style.position = "absolute", n.style.top = "0", n.style.left = "0";
            var r = h();
            r.className = ke, r.id = "tippy-" + e, r.setAttribute("data-state", "hidden"), r.setAttribute("tabindex", "-1"), ce(r, "add", t.theme);
            var o = h();
            return o.className = xe, o.setAttribute("data-state", "hidden"), t.interactive && te(r), t.arrow && (r.setAttribute("data-arrow", ""), r.appendChild(ie(t.arrow))), t.inertia && Z(r), re(o, t), r.appendChild(o), n.appendChild(r), se(n, t, t), n
        }

        function se(e, t, n) {
            var r = oe(e),
                o = r.tooltip,
                i = r.content,
                a = r.arrow;
            e.style.zIndex = "" + n.zIndex, o.setAttribute("data-animation", n.animation), o.style.maxWidth = P(n.maxWidth), n.role ? o.setAttribute("role", n.role) : o.removeAttribute("role"), t.content !== n.content && re(i, n), !t.arrow && n.arrow ? (o.appendChild(ie(n.arrow)), o.setAttribute("data-arrow", "")) : t.arrow && !n.arrow ? (o.removeChild(a), o.removeAttribute("data-arrow")) : t.arrow !== n.arrow && (o.removeChild(a), o.appendChild(ie(n.arrow))), !t.interactive && n.interactive ? te(o) : t.interactive && !n.interactive && ne(o), !t.inertia && n.inertia ? Z(o) : t.inertia && !n.inertia && ee(o), t.theme !== n.theme && (ce(o, "remove", t.theme), ce(o, "add", n.theme))
        }

        function le(e, t, n) {
            var r = Ve && void 0 !== document.body.style.webkitTransition ? "webkitTransitionEnd" : "transitionend";
            e[t + "EventListener"](r, n)
        }

        function ce(e, t, n) {
            k(n).forEach(function (n) {
                e.classList[t](n + "-theme")
            })
        }

        function ue(e, t) {
            var n = t.clientX,
                r = t.clientY;
            return e.every(function (e) {
                var t = e.popperRect,
                    o = e.tooltipRect,
                    i = e.interactiveBorder,
                    a = {
                        top: Math.min(t.top, o.top),
                        right: Math.max(t.right, o.right),
                        bottom: Math.max(t.bottom, o.bottom),
                        left: Math.min(t.left, o.left)
                    },
                    s = a.top - r > i,
                    l = r - a.bottom > i,
                    c = a.left - n > i,
                    u = n - a.right > i;
                return s || l || c || u
            })
        }

        function de(t, n) {
            function i() {
                var e = $e.props.touch;
                return Array.isArray(e) ? e : [e, 0]
            }

            function a() {
                return "hold" === i()[0]
            }

            function l() {
                return Pe || t
            }

            function d(e) {
                return $e.state.isMounted && !$e.state.isVisible || Re.isTouch || xe && "focus" === xe.type ? 0 : c($e.props.delay, e ? 0 : 1, be.delay)
            }

            function g(e, t, n) {
                if (void 0 === n && (n = !0), Ze.forEach(function (n) {
                        s(n, e) && n[e].apply(n, t)
                    }), n) {
                    var r;
                    (r = $e.props)[e].apply(r, t)
                }
            }

            function f() {
                var e = $e.props.aria;
                if (e) {
                    var n = "aria-" + e,
                        r = Ye.id;
                    O($e.props.triggerTarget || t).forEach(function (e) {
                        var t = e.getAttribute(n);
                        if ($e.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
                        else {
                            var o = t && t.replace(r, "").trim();
                            o ? e.setAttribute(n, o) : e.removeAttribute(n)
                        }
                    })
                }
            }

            function h() {
                O($e.props.triggerTarget || t).forEach(function (e) {
                    $e.props.interactive ? e.setAttribute("aria-expanded", $e.state.isVisible && e === l() ? "true" : "false") : e.removeAttribute("aria-expanded")
                })
            }

            function C() {
                Ve.body.removeEventListener("mouseleave", ce), Ve.removeEventListener("mousemove", Ue), qe = qe.filter(function (e) {
                    return e !== Ue
                })
            }

            function P(e) {
                if (!$e.props.interactive || !Ge.contains(e.target)) {
                    if (l().contains(e.target)) {
                        if (Re.isTouch) return;
                        if ($e.state.isVisible && S($e.props.trigger, "click")) return
                    }!0 === $e.props.hideOnClick && (Ne = !1, $e.clearDelayTimeouts(), $e.hide(), Be = !0, setTimeout(function () {
                        Be = !1
                    }), $e.state.isMounted || M())
                }
            }

            function N() {
                Ve.addEventListener("mousedown", P, !0)
            }

            function M() {
                Ve.removeEventListener("mousedown", P, !0)
            }

            function U(e, t) {
                j(e, function () {
                    !$e.state.isVisible && Ge.parentNode && Ge.parentNode.contains(Ge) && t()
                })
            }

            function F(e, t) {
                j(e, t)
            }

            function j(e, t) {
                function n(e) {
                    e.target === Ye && "visibility" === e.propertyName && (le(Ye, "remove", n), t())
                }
                if (0 === e) return t();
                le(Ye, "remove", _e), le(Ye, "add", n), _e = n
            }

            function H(e, n, r) {
                void 0 === r && (r = !1), O($e.props.triggerTarget || t).forEach(function (t) {
                    t.addEventListener(e, n, r), Me.push({
                        node: t,
                        eventType: e,
                        handler: n,
                        options: r
                    })
                })
            }

            function W() {
                a() && (H("touchstart", Y, Te), H("touchend", X, Te)), k($e.props.trigger).forEach(function (e) {
                    if ("manual" !== e) switch (H(e, Y), e) {
                        case "mouseenter":
                            H("mouseleave", X);
                            break;
                        case "focus":
                            H(Fe ? "focusout" : "blur", Z)
                    }
                })
            }

            function z() {
                Me.forEach(function (e) {
                    var t = e.node,
                        n = e.eventType,
                        r = e.handler,
                        o = e.options;
                    t.removeEventListener(n, r, o)
                }), Me = []
            }

            function Y(e) {
                var t = !1;
                if ($e.state.isEnabled && !ee(e) && !Be) {
                    if (xe = e, Pe = e.currentTarget, h(), !$e.state.isVisible && p(e) && qe.forEach(function (t) {
                            return t(e)
                        }), "click" !== e.type || S($e.props.trigger, "mouseenter") && !Ne || !1 === $e.props.hideOnClick || !$e.state.isVisible) {
                        var n = i(),
                            r = n[0],
                            o = n[1];
                        Re.isTouch && "hold" === r && o ? we = setTimeout(function () {
                            ie(e)
                        }, o) : ie(e)
                    } else t = !0;
                    "click" === e.type && (Ne = !t), t && ce(e)
                }
            }

            function J(e) {
                w(e.target, function (e) {
                    return e === t || e === Ge
                }) || ue(T(Ge.querySelectorAll(Ae)).concat(Ge).map(function (e) {
                    var t = e._tippy,
                        n = t.popperChildren.tooltip,
                        r = t.props.interactiveBorder;
                    return {
                        popperRect: e.getBoundingClientRect(),
                        tooltipRect: n.getBoundingClientRect(),
                        interactiveBorder: r
                    }
                }), e) && (C(), ce(e))
            }

            function X(e) {
                if (!ee(e)) return $e.props.interactive ? (Ve.body.addEventListener("mouseleave", ce), Ve.addEventListener("mousemove", Ue), void A(qe, Ue)) : void(S($e.props.trigger, "click") && Ne || ce(e))
            }

            function Z(e) {
                e.target === l() && ($e.props.interactive && e.relatedTarget && Ge.contains(e.relatedTarget) || ce(e))
            }

            function ee(e) {
                var t = "ontouchstart" in window,
                    n = S(e.type, "touch"),
                    r = a();
                return t && Re.isTouch && r && !n || Re.isTouch && !r && n
            }

            function te() {
                function e(e) {
                    var t = $e.state.currentPlacement;
                    $e.state.currentPlacement = e.placement, $e.props.flip && !$e.props.flipOnUpdate && (e.flipped && ($e.popperInstance.options.placement = e.placement), v($e.popperInstance.modifiers, "flip", "enabled", !1)), Ye.setAttribute("data-placement", e.placement), !1 !== e.attributes["x-out-of-boundaries"] ? Ye.setAttribute("data-out-of-boundaries", "") : Ye.removeAttribute("data-out-of-boundaries");
                    var r = $(e.placement),
                        o = S(["top", "bottom"], r),
                        i = S(["bottom", "right"], r);
                    Ye.style.top = "0", Ye.style.left = "0", Ye.style[o ? "top" : "left"] = (i ? 1 : -1) * n + "px", t && t !== e.placement && $e.popperInstance.update()
                }
                var n, o = $e.props.popperOptions,
                    i = $e.popperChildren.arrow,
                    a = u(o, "flip"),
                    s = u(o, "preventOverflow"),
                    l = r({
                        eventsEnabled: !1,
                        placement: $e.props.placement
                    }, o, {
                        modifiers: r({}, o && o.modifiers, {
                            tippyDistance: {
                                enabled: !0,
                                order: 0,
                                fn: function (e) {
                                    n = B(Ve, $e.props.distance);
                                    var t = $(e.placement),
                                        r = R(t, s && s.padding, n),
                                        o = R(t, a && a.padding, n),
                                        i = $e.popperInstance.modifiers;
                                    return v(i, "preventOverflow", "padding", r), v(i, "flip", "padding", o), e
                                }
                            },
                            preventOverflow: r({
                                boundariesElement: $e.props.boundary
                            }, s),
                            flip: r({
                                enabled: $e.props.flip,
                                behavior: $e.props.flipBehavior
                            }, a),
                            arrow: r({
                                element: i,
                                enabled: !!i
                            }, u(o, "arrow")),
                            offset: r({
                                offset: $e.props.offset
                            }, u(o, "offset"))
                        }),
                        onCreate: function (t) {
                            e(t), I(o && o.onCreate, l.onCreate, [t]), ne()
                        },
                        onUpdate: function (t) {
                            e(t), I(o && o.onUpdate, l.onUpdate, [t]), ne()
                        }
                    });
                $e.popperInstance = new ve.default(t, Ge, l)
            }

            function ne() {
                0 === De ? (De++, $e.popperInstance.update()) : Oe && 1 === De && (De++, o(Ge), Oe())
            }

            function re() {
                De = 0;
                var t, n = $e.props.appendTo,
                    r = l();
                t = $e.props.interactive && n === be.appendTo || "parent" === n ? r.parentNode : m(n, [r]), t.contains(Ge) || t.appendChild(Ge), "production" !== e.env.NODE_ENV && V($e.props.interactive && n === be.appendTo && r.nextElementSibling !== Ge, ["Interactive tippy element may not be accessible via keyboard navigation", "because it is not directly after the reference element in the DOM source", "order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element solves", "this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle keyboard", "navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/accessibility/#interactivity"].join(" ")), v($e.popperInstance.modifiers, "flip", "enabled", $e.props.flip), $e.popperInstance.enableEventListeners(), $e.popperInstance.update()
            }

            function ie(e) {
                $e.clearDelayTimeouts(), $e.popperInstance || te(), e && g("onTrigger", [$e, e]), N();
                var t = d(!0);
                t ? we = setTimeout(function () {
                    $e.show()
                }, t) : $e.show()
            }

            function ce(e) {
                if ($e.clearDelayTimeouts(), g("onUntrigger", [$e, e]), !$e.state.isVisible) return void M();
                var t = d(!1);
                t ? Se = setTimeout(function () {
                    $e.state.isVisible && $e.hide()
                }, t) : ke = requestAnimationFrame(function () {
                    $e.hide()
                })
            }

            function de() {
                $e.state.isEnabled = !0
            }

            function ge() {
                $e.hide(), $e.state.isEnabled = !1
            }

            function fe() {
                clearTimeout(we), clearTimeout(Se), cancelAnimationFrame(ke)
            }

            function pe(n) {
                if ("production" !== e.env.NODE_ENV && V($e.state.isDestroyed, D("setProps")), !$e.state.isDestroyed) {
                    "production" !== e.env.NODE_ENV && (K(n, ze), V(!!n.plugins && (n.plugins.length !== ze.length || ze.some(function (e, t) {
                        return !n.plugins || !n.plugins[t] || e !== n.plugins[t]
                    })), "Cannot update plugins")), g("onBeforeUpdate", [$e, n]), z();
                    var o = $e.props,
                        i = G(t, r({}, $e.props, {}, n, {
                            ignoreAttributes: !0
                        }));
                    if (i.ignoreAttributes = x(n.ignoreAttributes, o.ignoreAttributes), $e.props = i, W(), o.interactiveDebounce !== i.interactiveDebounce && (C(), Ue = E(J, i.interactiveDebounce)), se(Ge, o, i), $e.popperChildren = oe(Ge), o.triggerTarget && !i.triggerTarget ? O(o.triggerTarget).forEach(function (e) {
                            e.removeAttribute("aria-expanded")
                        }) : i.triggerTarget && t.removeAttribute("aria-expanded"), h(), $e.popperInstance)
                        if (Ie.some(function (e) {
                                return s(n, e) && n[e] !== o[e]
                            })) {
                            var a = $e.popperInstance.reference;
                            $e.popperInstance.destroy(), te(), $e.popperInstance.reference = a, $e.state.isVisible && $e.popperInstance.enableEventListeners()
                        } else $e.popperInstance.update();
                    g("onAfterUpdate", [$e, n])
                }
            }

            function me(e) {
                $e.setProps({
                    content: e
                })
            }

            function he(t) {
                void 0 === t && (t = c($e.props.duration, 0, be.duration)), "production" !== e.env.NODE_ENV && V($e.state.isDestroyed, D("show"));
                var n = $e.state.isVisible,
                    r = $e.state.isDestroyed,
                    o = !$e.state.isEnabled,
                    i = Re.isTouch && !$e.props.touch;
                n || r || o || i || l().hasAttribute("disabled") || ($e.popperInstance || te(), g("onShow", [$e], !1), !1 !== $e.props.onShow($e) && (N(), Ge.style.visibility = "visible", $e.state.isVisible = !0, $e.state.isMounted || y(Xe.concat(Ge), 0), Oe = function () {
                    $e.state.isVisible && (y([Ge], $e.props.updateDuration), y(Xe, t), b(Xe, "visible"), f(), h(), A(We, $e), Q(!0), $e.state.isMounted = !0, g("onMount", [$e]), F(t, function () {
                        $e.state.isShown = !0, g("onShown", [$e])
                    }))
                }, re()))
            }

            function ye(t) {
                void 0 === t && (t = c($e.props.duration, 1, be.duration)), "production" !== e.env.NODE_ENV && V($e.state.isDestroyed, D("hide"));
                var n = !$e.state.isVisible && !Le,
                    r = $e.state.isDestroyed,
                    o = !$e.state.isEnabled && !Le;
                n || r || o || (g("onHide", [$e], !1), (!1 !== $e.props.onHide($e) || Le) && (M(), Ge.style.visibility = "hidden", $e.state.isVisible = !1, $e.state.isShown = !1, y(Xe, t), b(Xe, "hidden"), f(), h(), U(t, function () {
                    $e.popperInstance.disableEventListeners(), $e.popperInstance.options.placement = $e.props.placement, Ge.parentNode.removeChild(Ge), We = We.filter(function (e) {
                        return e !== $e
                    }), 0 === We.length && Q(!1), $e.state.isMounted = !1, g("onHidden", [$e])
                })))
            }

            function Ee() {
                "production" !== e.env.NODE_ENV && V($e.state.isDestroyed, D("destroy")), $e.state.isDestroyed || (Le = !0, $e.clearDelayTimeouts(), $e.hide(0), z(), delete t._tippy, $e.popperInstance && $e.popperInstance.destroy(), Le = !1, $e.state.isDestroyed = !0, g("onDestroy", [$e]))
            }
            var Ce = G(t, r({}, be, {}, q(n)));
            if (!Ce.multiple && t._tippy) return null;
            var we, Se, ke, xe, Oe, _e, Pe, Le = !1,
                Ne = !1,
                Be = !1,
                De = 0,
                Me = [],
                Ue = E(J, Ce.interactiveDebounce),
                Ve = _(Ce.triggerTarget || t),
                je = He++,
                Ge = ae(je, Ce),
                Ke = oe(Ge),
                ze = L(Ce.plugins),
                Ye = Ke.tooltip,
                Je = Ke.content,
                Xe = [Ye, Je],
                Qe = {
                    currentPlacement: null,
                    isEnabled: !0,
                    isVisible: !1,
                    isDestroyed: !1,
                    isMounted: !1,
                    isShown: !1
                },
                $e = {
                    id: je,
                    reference: t,
                    popper: Ge,
                    popperChildren: Ke,
                    popperInstance: null,
                    props: Ce,
                    state: Qe,
                    plugins: ze,
                    clearDelayTimeouts: fe,
                    setProps: pe,
                    setContent: me,
                    show: he,
                    hide: ye,
                    enable: de,
                    disable: ge,
                    destroy: Ee
                };
            t._tippy = $e, Ge._tippy = $e;
            var Ze = ze.map(function (e) {
                return e.fn($e)
            });
            return W(), h(), Ce.lazy || te(), g("onCreate", [$e]), Ce.showOnCreate && ie(), Ge.addEventListener("mouseenter", function () {
                $e.props.interactive && $e.state.isVisible && $e.clearDelayTimeouts()
            }), Ge.addEventListener("mouseleave", function () {
                $e.props.interactive && S($e.props.trigger, "mouseenter") && Ve.addEventListener("mousemove", Ue)
            }), $e
        }

        function ge(t, n, o) {
            void 0 === n && (n = {}), void 0 === o && (o = []), o = be.plugins.concat(n.plugins || o), "production" !== e.env.NODE_ENV && (H(t), K(n, o)), X();
            var i = r({}, n, {
                    plugins: o
                }),
                a = l(t);
            if ("production" !== e.env.NODE_ENV) {
                var s = g(i.content),
                    c = a.length > 1;
                V(s && c, ["tippy() was passed an Element as the `content` prop, but more than one tippy", "instance was created by this invocation. This means the content element will", "only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that returns a", "cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "))
            }
            var u = a.reduce(function (e, t) {
                var n = t && de(t, i);
                return n && e.push(n), e
            }, []);
            return g(t) ? u[0] : u
        }

        function fe(t) {
            "production" !== e.env.NODE_ENV && V(!0, ["createTippyWithPlugins([...]) has been deprecated.", "\n\n", "Use tippy.setDefaultProps({plugins: [...]}) instead."].join(" "));
            var n = function (e, n, o) {
                return void 0 === n && (n = {}), void 0 === o && (o = []), o = n.plugins || o, ge(e, r({}, n, {
                    plugins: [].concat(t, o)
                }))
            };
            return n.version = he, n.defaultProps = be, n.setDefaultProps = Ce, n.currentInput = Re, n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.w = t.u = t.t = t.s = t.r = t.o = t.n = t.m = t.l = t.k = t.j = t.i = t.h = t.g = t.f = t.e = t.d = t.c = t.b = t.a = t._ = t.R = t.B = void 0;
        var pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            me = n(52),
            ve = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(me),
            he = "5.1.3",
            ye = {
                animateFill: !1,
                followCursor: !1,
                inlinePositioning: !1,
                sticky: !1
            },
            be = r({
                allowHTML: !0,
                animation: "fade",
                appendTo: function () {
                    return document.body
                },
                aria: "describedby",
                arrow: !0,
                boundary: "scrollParent",
                content: "",
                delay: 0,
                distance: 10,
                duration: [300, 250],
                flip: !0,
                flipBehavior: "flip",
                flipOnUpdate: !1,
                hideOnClick: !0,
                ignoreAttributes: !1,
                inertia: !1,
                interactive: !1,
                interactiveBorder: 2,
                interactiveDebounce: 0,
                lazy: !0,
                maxWidth: 350,
                multiple: !1,
                offset: 0,
                onAfterUpdate: function () {},
                onBeforeUpdate: function () {},
                onCreate: function () {},
                onDestroy: function () {},
                onHidden: function () {},
                onHide: function () {},
                onMount: function () {},
                onShow: function () {},
                onShown: function () {},
                onTrigger: function () {},
                onUntrigger: function () {},
                placement: "top",
                plugins: [],
                popperOptions: {},
                role: "tooltip",
                showOnCreate: !1,
                theme: "",
                touch: !0,
                trigger: "mouseenter focus",
                triggerTarget: null,
                updateDuration: 0,
                zIndex: 9999
            }, ye),
            Ee = Object.keys(be),
            Ie = ["arrow", "boundary", "distance", "flip", "flipBehavior", "flipOnUpdate", "offset", "placement", "popperOptions"],
            Ce = function (t) {
                "production" !== e.env.NODE_ENV && K(t, []), Object.keys(t).forEach(function (e) {
                    be[e] = t[e]
                })
            },
            Te = {
                passive: !0
            },
            we = "tippy-iOS",
            Se = "tippy-popper",
            ke = "tippy-tooltip",
            xe = "tippy-content",
            Oe = "tippy-arrow",
            _e = "tippy-svg-arrow",
            Ae = "." + Se,
            Pe = "." + ke,
            Le = "." + xe,
            Ne = "." + Oe,
            Be = "." + _e,
            Re = {
                isTouch: !1
            },
            De = 0,
            Me = "undefined" != typeof window && "undefined" != typeof document,
            Ue = Me ? navigator.userAgent : "",
            Fe = /MSIE |Trident\//.test(Ue),
            Ve = /UCBrowser\//.test(Ue),
            je = Me && /iPhone|iPad|iPod/.test(navigator.platform),
            He = 1,
            qe = [],
            We = [];
        ge.version = he, ge.defaultProps = be, ge.setDefaultProps = Ce, ge.currentInput = Re;
        var Ge = function (e) {
            var t = void 0 === e ? {} : e,
                n = t.exclude,
                r = t.duration;
            We.forEach(function (e) {
                var t = !1;
                n && (t = a(n) ? e.reference === n : e.popper === n.popper), t || e.hide(r)
            })
        };
        t.B = "tippy-backdrop", t.R = '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>', t._ = r, t.a = h, t.b = Ve, t.c = p, t.d = be, t.e = j, t.f = Re, t.g = _, t.h = w, t.i = S, t.j = $, t.k = T, t.l = Ge, t.m = fe, t.n = O, t.o = Me, t.r = C, t.s = b, t.t = ge, t.u = x, t.w = V
    }).call(t, n(67))
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = t || 0,
            r = o;
        return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
    }
    for (var o = [], i = 0; i < 256; ++i) o[i] = (i + 256).toString(16).substr(1);
    e.exports = r
}, function (e, t, n) {
    "use strict";
    var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (r) {
        var o = new Uint8Array(16);
        e.exports = function () {
            return r(o), o
        }
    } else {
        var i = new Array(16);
        e.exports = function () {
            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
            return i
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null), e = e || {};
        var a = e.random || (e.rng || o)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
            for (var s = 0; s < 16; ++s) t[r + s] = a[s];
        return t || i(a)
    }
    var o = n(108),
        i = n(107);
    e.exports = r
}, function (e, t, n) {
    "use strict";
    var r, o, i, a, a, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function (n) {
        if ("object" === s(t) && void 0 !== e) e.exports = n();
        else {
            o = [], r = n, void 0 !== (i = "function" == typeof r ? r.apply(t, o) : r) && (e.exports = i)
        }
    }(function () {
        return function () {
            function e(t, n, r) {
                function o(s, l) {
                    if (!n[s]) {
                        if (!t[s]) {
                            var c = "function" == typeof a && a;
                            if (!l && c) return a(s, !0);
                            if (i) return i(s, !0);
                            var u = new Error("Cannot find module '" + s + "'");
                            throw u.code = "MODULE_NOT_FOUND", u
                        }
                        var d = n[s] = {
                            exports: {}
                        };
                        t[s][0].call(d.exports, function (e) {
                            var n = t[s][1][e];
                            return o(n || e)
                        }, d, d.exports, e, t, n, r)
                    }
                    return n[s].exports
                }
                for (var i = "function" == typeof a && a, s = 0; s < r.length; s++) o(r[s]);
                return o
            }
            return e
        }()({
            1: [function (e, t, n) {
                function r(e) {
                    if (!e || "object" != (void 0 === e ? "undefined" : s(e))) return e;
                    if ("[object Date]" == Object.prototype.toString.call(e)) return new Date(e.getTime());
                    if (Array.isArray(e)) return e.map(r);
                    var t = {};
                    return Object.keys(e).forEach(function (n) {
                        t[n] = r(e[n])
                    }), t
                }
                t.exports = r
            }, {}],
            2: [function (e, t, n) {
                function r(e, t) {
                    if ("string" != typeof e) throw new TypeError("String expected");
                    t || (t = document);
                    var n = /<([\w:]+)/.exec(e);
                    if (!n) return t.createTextNode(e);
                    e = e.replace(/^\s+|\s+$/g, "");
                    var r = n[1];
                    if ("body" == r) {
                        var o = t.createElement("html");
                        return o.innerHTML = e, o.removeChild(o.lastChild)
                    }
                    var i = a[r] || a._default,
                        s = i[0],
                        l = i[1],
                        c = i[2],
                        o = t.createElement("div");
                    for (o.innerHTML = l + e + c; s--;) o = o.lastChild;
                    if (o.firstChild == o.lastChild) return o.removeChild(o.firstChild);
                    for (var u = t.createDocumentFragment(); o.firstChild;) u.appendChild(o.removeChild(o.firstChild));
                    return u
                }
                t.exports = r;
                var o, i = !1;
                "undefined" != typeof document && (o = document.createElement("div"), o.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>', i = !o.getElementsByTagName("link").length, o = void 0);
                var a = {
                    legend: [1, "<fieldset>", "</fieldset>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    _default: i ? [1, "X<div>", "</div>"] : [0, "", ""]
                };
                a.td = a.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], a.option = a.optgroup = [1, '<select multiple="multiple">', "</select>"], a.thead = a.tbody = a.colgroup = a.caption = a.tfoot = [1, "<table>", "</table>"], a.polyline = a.ellipse = a.polygon = a.circle = a.text = a.line = a.path = a.rect = a.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"]
            }, {}],
            3: [function (e, t, n) {
                function r(e, t) {
                    "object" != (void 0 === t ? "undefined" : s(t)) ? t = {
                        hash: !!t
                    }: void 0 === t.hash && (t.hash = !0);
                    for (var n = t.hash ? {} : "", r = t.serializer || (t.hash ? a : l), o = e && e.elements ? e.elements : [], i = Object.create(null), d = 0; d < o.length; ++d) {
                        var g = o[d];
                        if ((t.disabled || !g.disabled) && g.name && (u.test(g.nodeName) && !c.test(g.type))) {
                            var f = g.name,
                                p = g.value;
                            if ("checkbox" !== g.type && "radio" !== g.type || g.checked || (p = void 0), t.empty) {
                                if ("checkbox" !== g.type || g.checked || (p = ""), "radio" === g.type && (i[g.name] || g.checked ? g.checked && (i[g.name] = !0) : i[g.name] = !1), !p && "radio" == g.type) continue
                            } else if (!p) continue;
                            if ("select-multiple" !== g.type) n = r(n, f, p);
                            else {
                                p = [];
                                for (var m = g.options, v = !1, h = 0; h < m.length; ++h) {
                                    var y = m[h],
                                        b = t.empty && !y.value,
                                        E = y.value || b;
                                    y.selected && E && (v = !0, n = t.hash && "[]" !== f.slice(f.length - 2) ? r(n, f + "[]", y.value) : r(n, f, y.value))
                                }!v && t.empty && (n = r(n, f, ""))
                            }
                        }
                    }
                    if (t.empty)
                        for (var f in i) i[f] || (n = r(n, f, ""));
                    return n
                }

                function o(e) {
                    var t = [],
                        n = /^([^\[\]]*)/,
                        r = new RegExp(d),
                        o = n.exec(e);
                    for (o[1] && t.push(o[1]); null !== (o = r.exec(e));) t.push(o[1]);
                    return t
                }

                function i(e, t, n) {
                    if (0 === t.length) return e = n;
                    var r = t.shift(),
                        o = r.match(/^\[(.+?)\]$/);
                    if ("[]" === r) return e = e || [], Array.isArray(e) ? e.push(i(null, t, n)) : (e._values = e._values || [], e._values.push(i(null, t, n))), e;
                    if (o) {
                        var a = o[1],
                            s = +a;
                        isNaN(s) ? (e = e || {}, e[a] = i(e[a], t, n)) : (e = e || [], e[s] = i(e[s], t, n))
                    } else e[r] = i(e[r], t, n);
                    return e
                }

                function a(e, t, n) {
                    if (t.match(d)) i(e, o(t), n);
                    else {
                        var r = e[t];
                        r ? (Array.isArray(r) || (e[t] = [r]), e[t].push(n)) : e[t] = n
                    }
                    return e
                }

                function l(e, t, n) {
                    return n = n.replace(/(\r)?\n/g, "\r\n"), n = encodeURIComponent(n), n = n.replace(/%20/g, "+"), e + (e ? "&" : "") + encodeURIComponent(t) + "=" + n
                }
                var c = /^(?:submit|button|image|reset|file)$/i,
                    u = /^(?:input|select|textarea|keygen)/i,
                    d = /(\[[^\[\]]*\])/g;
                t.exports = r
            }, {}],
            4: [function (e, t, n) {
                var r = e("domify"),
                    o = e("form-serialize"),
                    i = e("deep-clone-simple"),
                    a = function (e) {
                        var t = document.createElement("form");
                        t.classList.add("vex-dialog-form");
                        var n = document.createElement("div");
                        n.classList.add("vex-dialog-message"), n.appendChild(e.message instanceof window.Node ? e.message : r(e.message));
                        var o = document.createElement("div");
                        return o.classList.add("vex-dialog-input"), o.appendChild(e.input instanceof window.Node ? e.input : r(e.input)), t.appendChild(n), t.appendChild(o), t
                    },
                    l = function (e) {
                        var t = document.createElement("div");
                        t.classList.add("vex-dialog-buttons");
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n],
                                o = document.createElement("button");
                            o.type = r.type, o.textContent = r.text, o.className = r.className, o.classList.add("vex-dialog-button"), 0 === n ? o.classList.add("vex-first") : n === e.length - 1 && o.classList.add("vex-last"),
                                function (e) {
                                    o.addEventListener("click", function (t) {
                                        e.click && e.click.call(this, t)
                                    }.bind(this))
                                }.bind(this)(r), t.appendChild(o)
                        }
                        return t
                    },
                    c = function (e) {
                        var t = {
                            name: "dialog",
                            open: function (t) {
                                var n = Object.assign({}, i(this.defaultOptions), t);
                                n.unsafeMessage && !n.message ? n.message = n.unsafeMessage : n.message && (n.message = e._escapeHtml(n.message));
                                var r = n.unsafeContent = a(n),
                                    o = e.open(n);
                                "" !== n.yesText && (n.buttons[0].text = n.yesText), "" !== n.noText && (n.buttons[1].text = n.noText);
                                var s = n.beforeClose && n.beforeClose.bind(o);
                                if (o.options.beforeClose = function () {
                                        var e = !s || s();
                                        return e && n.callback(this.value || !1), e
                                    }.bind(o), r.appendChild(l.call(o, n.buttons)), o.form = r, r.addEventListener("submit", n.onSubmit.bind(o)), n.focusFirstInput) {
                                    var c = o.contentEl.querySelector("button, input, select, textarea");
                                    c && c.focus()
                                }
                                return o
                            },
                            alert: function (e) {
                                return "string" == typeof e && (e = {
                                    message: e
                                }), e = Object.assign({}, i(this.defaultOptions), i(this.defaultAlertOptions), e), this.open(e)
                            },
                            confirm: function (e) {
                                if ("object" !== (void 0 === e ? "undefined" : s(e)) || "function" != typeof e.callback) throw new Error("dialog.confirm(options) requires options.callback.");
                                return e = Object.assign({}, i(this.defaultOptions), i(this.defaultConfirmOptions), e), this.open(e)
                            },
                            prompt: function (t) {
                                if ("object" !== (void 0 === t ? "undefined" : s(t)) || "function" != typeof t.callback) throw new Error("dialog.prompt(options) requires options.callback.");
                                var n = Object.assign({}, i(this.defaultOptions), i(this.defaultPromptOptions)),
                                    r = {
                                        unsafeMessage: '<label for="vex">' + e._escapeHtml(t.label || n.label) + "</label>",
                                        input: '<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="' + e._escapeHtml(t.placeholder || n.placeholder) + '" value="' + e._escapeHtml(t.value || n.value) + '" />'
                                    };
                                t = Object.assign(n, r, t);
                                var o = t.callback;
                                return t.callback = function (e) {
                                    if ("object" === (void 0 === e ? "undefined" : s(e))) {
                                        var t = Object.keys(e);
                                        e = t.length ? e[t[0]] : ""
                                    }
                                    o(e)
                                }, this.open(t)
                            }
                        };
                        return t.buttons = {
                            YES: {
                                text: "OK",
                                type: "submit",
                                className: "vex-dialog-button-primary",
                                click: function () {
                                    this.value = !0
                                }
                            },
                            NO: {
                                text: "Cancel",
                                type: "button",
                                className: "vex-dialog-button-secondary",
                                click: function () {
                                    this.value = !1, this.close()
                                }
                            }
                        }, t.defaultOptions = {
                            callback: function () {},
                            afterOpen: function () {},
                            message: "",
                            input: "",
                            yesText: "",
                            noText: "",
                            buttons: [t.buttons.YES, t.buttons.NO],
                            showCloseButton: !1,
                            onSubmit: function (e) {
                                return e.preventDefault(), this.options.input && (this.value = o(this.form, {
                                    hash: !0
                                })), this.close()
                            },
                            focusFirstInput: !0
                        }, t.defaultAlertOptions = {
                            buttons: [t.buttons.YES]
                        }, t.defaultPromptOptions = {
                            label: "Prompt:",
                            placeholder: "",
                            value: ""
                        }, t.defaultConfirmOptions = {}, t
                    };
                t.exports = c
            }, {
                "deep-clone-simple": 1,
                domify: 2,
                "form-serialize": 3
            }]
        }, {}, [4])(4)
    })
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t, n) {
        function r(e) {
            var t = (0, E.getIframeData)(e);
            f.default.removeBotFromIframe(t)
        }

        function o(t) {
            t !== h.TOP_WINDOW_ID ? r(t) : e()
        }

        function i(t) {
            !y.default.getIframeId() && t ? (y.default.setIframeId(t), f.default.sendBotFound(t), t !== h.TOP_WINDOW_ID && e()) : y.default.getIframeId() !== t && o(t)
        }

        function a(e) {
            y.default.getIframeId() === e && (y.default.setIframeId(""), t(y.default.getBotConfig()))
        }

        function g(e) {
            if (y.default.setBotConfig(e), (0, E.getRegisteredIframes)().length > 0) {
                var t = y.default.getIframeId();
                if (t) {
                    if (!(t === h.TOP_WINDOW_ID)) {
                        var n = (0, E.getIframeData)(t);
                        f.default.sendBotConfigToIframe(n, e, !1)
                    }
                }
            }
        }

        function p() {
            if ((0, E.getRegisteredIframes)().length > 0) {
                var e = y.default.getBotConfig(),
                    t = y.default.getIframeId();
                if (t) {
                    t === h.TOP_WINDOW_ID && (y.default.setIframeId(""), f.default.sendBotConfig(e, !0))
                } else f.default.sendBotConfig(e, !0)
            }
        }

        function m(e, t, r) {
            var o = l.eventTrackData.data[l.productIdParameter],
                i = l.eventTrackData.data[l.aptrinsicIdParam];
            n.fetchEntriesById(e, o, i, t, r)
        }

        function I(e, t) {
            var n = (0, E.getRegisteredIframes)(),
                r = void 0;
            n.forEach(function (n) {
                f.default.checkMappedElementIsVisible(n, e, function (e) {
                    var n = s(e, 1),
                        i = n[0],
                        a = i.isVisible,
                        l = i.iframeId;
                    a && !r && (r = l, o(y.default.getIframeId()), y.default.setIframeId(""), f.default.sendBotConfigToIframe((0, E.getIframeData)(r), t, !0))
                })
            })
        }

        function w(e) {
            try {
                var o = y.default.getIframeId(),
                    i = y.default.getBotConfig();
                if (i) {
                    var a = i.windowSettings.embedKCSettings.elementSelector;
                    a.cssSelector && f.default.addElementClickListener(e, a.cssSelector), o || !(0, c.getConfig)("framesetMode") && !(0, v.isElementVisible)(e.elementData) ? o === h.TOP_WINDOW_ID ? (0, T.findInAll)(a, null, function (e) {
                        if (e) {
                            (0, v.isElementVisible)(e.element, !0) || (n.close(), I(a, i))
                        }
                    }) : e.iframeId !== o && f.default.checkMappedElementIsVisible((0, E.getIframeData)(o), a, function (e) {
                        s(e, 1)[0].isVisible || (0, T.findInAll)(a, null, function (e) {
                            e && ((0, v.isElementVisible)(e.element, !0) ? (r(o), t(y.default.getBotConfig())) : I(a, i))
                        })
                    }) : f.default.sendBotConfigToIframe(e, i, !0)
                }
            } catch (e) {
                b.logger.log("Embedded bot onIframeRegistered " + e)
            }
        }

        function S() {
            y.default.setIframeId(""), f.default.removeWidgetFromAllIframes()
        }

        function k() {
            d.internalEventListener.removeListener("WIDGET_LOADED", k), n.open()
        }

        function x(n) {
            var r = y.default.getIframeId();
            if (!r || r && r !== n)
                if (n === h.TOP_WINDOW_ID) {
                    var o = (0, E.getIframeData)(y.default.getIframeId());
                    (0, c.getConfig)("framesetMode") || (0, v.isElementVisible)(o.domElement) || (y.default.setIframeId(""), d.internalEventListener.addListener("WIDGET_LOADED", k), f.default.removeWidgetFromAllIframes(), t(y.default.getBotConfig()))
                } else {
                    y.default.setIframeId(""), e();
                    var i = (0, E.getIframeData)(n);
                    f.default.sendBotConfigToIframe(i, y.default.getBotConfig(), !0, !0)
                }
        }

        function O() {
            n.close(!0)
        }
        d.internalEventListener.addListener(u.IFRAME_TO_TOP_EVENTS.BOT_FOUND, i), d.internalEventListener.addListener(u.IFRAME_TO_TOP_EVENTS.IFRAME_CLOSED, a), d.internalEventListener.addListener(u.TOP_TO_IFRAME_EVENTS.BOT_RESPONSE, g), d.internalEventListener.addListener("BOT_NOT_FOUND", p), d.internalEventListener.addListener(u.IFRAME_TO_TOP_EVENTS.GET_BOT_CONTENT, m), d.internalEventListener.addListener(u.IFRAME_TO_TOP_EVENTS.TRACK_BOT_TOGGLE, C.trackToggleWidget), d.internalEventListener.addListener("IFRAME_REGISTERED", (0, v.debounce)(w, 0)), d.internalEventListener.addListener(u.BOT_IFRAME_INTERNAL_EVENTS.BOT_EMPTY_CONFIG, S), d.internalEventListener.addListener(u.IFRAME_TO_TOP_EVENTS.BOT_ELEMENT_CLICK, x), d.internalEventListener.addListener(u.BOT_INTERNAL_EVENTS.BOT_CLICK_OUTSIDE, O)
    }

    function i(e, t, n) {
        function r(e, t) {
            var n = !1,
                r = (0, w.findInWindow)(e.cssSelector, document);
            r && (n = (0, v.isElementVisible)(r, !0)), m.default.checkMappedElementIsVisibleResponse(t, n)
        }

        function o() {
            n.close(!0)
        }

        function i() {
            n.open()
        }

        function a(e) {
            try {
                s = function (t) {
                    var n = document.querySelector(e);
                    return n && (t.target === n || n.contains(t.target)) && (t.preventDefault(), t.stopImmediatePropagation(), d.internalEventListener.dispatchEvent(u.IFRAME_TO_TOP_EVENTS.BOT_ELEMENT_CLICK, (0, I.getIframeId)())), !1
                }, (0, v.removeEventListener)(document, "click", s, !1), (0, v.addEventListener)(document, "click", s, !1)
            } catch (e) {
                b.logger.log("Embedded bot addElementClickListener " + e)
            }
        }
        var s = null;
        d.internalEventListener.addListener(u.TOP_TO_IFRAME_EVENTS.REMOVE_BOT, e), d.internalEventListener.addListener(u.BOT_IFRAME_INTERNAL_EVENTS.INIT_WIDGET_IN_IFRAME, function (e, n, r) {
            r && (d.internalEventListener.removeListener("WIDGET_LOADED", i), d.internalEventListener.addListener("WIDGET_LOADED", i, null, !1, !0)), t(e, n)
        }), d.internalEventListener.addListener(u.TOP_TO_IFRAME_EVENTS.POST_BOT_EVENT, n.postToWidget), d.internalEventListener.addListener(u.TOP_TO_IFRAME_EVENTS.SET_BOT_IS_OPEN, n.setIsOpen), d.internalEventListener.addListener(u.TOP_TO_IFRAME_EVENTS.IS_ELEMENT_VISIBLE, r), d.internalEventListener.addListener(u.IFRAME_TO_TOP_EVENTS.BOT_ELEMENT_CLICK, m.default.postClickElement), d.internalEventListener.addListener(u.BOT_INTERNAL_EVENTS.BOT_CLICK_OUTSIDE, o), d.internalEventListener.addListener(u.TOP_TO_IFRAME_EVENTS.ADD_ELEMENT_CLICK_LISTENER, a)
    }

    function a(e, t, n) {
        try {
            (0, c.isIframe)() ? (i(e, t, n), (0, v.addEventListener)(window, "unload", function () {
                m.default.postIframeClosed()
            })) : (o(e, t, n), n && n.handleIncomingBotEvents())
        } catch (e) {
            b.logger.logInternalError(new Error("handlingEmbeddedBotIframeRequests - " + e))
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
        function e(e, t) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
        return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.default = a;
    var l = n(4),
        c = n(1),
        u = n(22),
        d = n(10),
        g = n(47),
        f = r(g),
        p = n(46),
        m = r(p),
        v = n(0),
        h = n(45),
        y = r(h),
        b = n(3),
        E = n(6),
        I = n(13),
        C = n(85),
        T = n(17),
        w = n(7)
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        return (0, o.isObject)(e) && (0, o.isObject)(t) && t.hasOwnProperty("id") && t.id
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.shouldInjectAccountId = r;
    var o = n(0)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = e.content;
        switch (t.type) {
            case s.TOP_TO_IFRAME_EVENTS.BOT_RESPONSE:
                l.internalEventListener.dispatchEvent(s.BOT_IFRAME_INTERNAL_EVENTS.INIT_WIDGET_IN_IFRAME, t.botConfig, t.isInitial, t.shouldOpen);
                break;
            case s.TOP_TO_IFRAME_EVENTS.BOT_FOUND:
                var n = t.iframeId;
                (0, a.getIframeId)() !== n && l.internalEventListener.dispatchEvent(s.TOP_TO_IFRAME_EVENTS.REMOVE_BOT);
                break;
            case s.TOP_TO_IFRAME_EVENTS.GET_APTRINSIC_ID_RESPONSE:
            case s.TOP_TO_IFRAME_EVENTS.GET_BOT_CONTENT_RESPONSE:
                (0, i.decrementState)(e.aptrinsicRequestId, t);
                break;
            case s.TOP_TO_IFRAME_EVENTS.SET_BOT_IS_OPEN:
                var r = t.isOpen;
                l.internalEventListener.dispatchEvent(s.TOP_TO_IFRAME_EVENTS.SET_BOT_IS_OPEN, r);
                break;
            case s.TOP_TO_IFRAME_EVENTS.POST_BOT_EVENT:
                l.internalEventListener.dispatchEvent(s.TOP_TO_IFRAME_EVENTS.POST_BOT_EVENT, t.data);
                break;
            case s.TOP_TO_IFRAME_EVENTS.REMOVE_BOT:
                l.internalEventListener.dispatchEvent(s.TOP_TO_IFRAME_EVENTS.REMOVE_BOT);
                break;
            case s.TOP_TO_IFRAME_EVENTS.IS_ELEMENT_VISIBLE:
                l.internalEventListener.dispatchEvent(s.TOP_TO_IFRAME_EVENTS.IS_ELEMENT_VISIBLE, t.cssSelector, e.aptrinsicRequestId);
                break;
            case s.TOP_TO_IFRAME_EVENTS.ADD_ELEMENT_CLICK_LISTENER:
                l.internalEventListener.dispatchEvent(s.TOP_TO_IFRAME_EVENTS.ADD_ELEMENT_CLICK_LISTENER, t.cssSelector);
                break;
            default:
                o.logger.logInternalError(new Error("child iframe script got unsupported bot event from top window, data: " + JSON.stringify(e)))
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;
    var o = n(3),
        i = n(6),
        a = n(13),
        s = n(22),
        l = n(10)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = e.content;
        switch (t.type) {
            case i.IFRAME_TO_TOP_EVENTS.BOT_FOUND:
                a.internalEventListener.dispatchEvent(i.IFRAME_TO_TOP_EVENTS.BOT_FOUND, e.aptrinsicIframeId);
                break;
            case i.IFRAME_TO_TOP_EVENTS.IFRAME_CLOSED:
                a.internalEventListener.dispatchEvent(i.IFRAME_TO_TOP_EVENTS.IFRAME_CLOSED, e.aptrinsicIframeId);
                break;
            case i.IFRAME_TO_TOP_EVENTS.POST_BOT_EVENT:
                a.internalEventListener.dispatchEvent(i.IFRAME_TO_TOP_EVENTS.POST_BOT_EVENT, e.aptrinsicIframeId);
                break;
            case i.IFRAME_TO_TOP_EVENTS.TRACK_BOT_TOGGLE:
                a.internalEventListener.dispatchEvent(i.IFRAME_TO_TOP_EVENTS.TRACK_BOT_TOGGLE, t.botId, t.isOpen);
                break;
            case i.IFRAME_TO_TOP_EVENTS.IS_ELEMENT_VISIBLE_RESPONSE:
                (0, o.decrementState)(e.aptrinsicRequestId, t);
                break;
            case i.IFRAME_TO_TOP_EVENTS.GET_APTRINSIC_ID:
                var n = u.eventTrackData.data[u.aptrinsicIdParam],
                    r = (0, o.getIframeData)(e.aptrinsicIframeId);
                l.default.getAptrinsicIdResponse(r, e.aptrinsicRequestId, n);
                break;
            case i.IFRAME_TO_TOP_EVENTS.BOT_ELEMENT_CLICK:
                a.internalEventListener.dispatchEvent(i.IFRAME_TO_TOP_EVENTS.BOT_ELEMENT_CLICK, e.aptrinsicIframeId);
                break;
            case i.IFRAME_TO_TOP_EVENTS.GET_BOT_CONTENT:
                var s = t.botId,
                    d = (0, o.getIframeData)(e.aptrinsicIframeId);
                a.internalEventListener.dispatchEvent(i.IFRAME_TO_TOP_EVENTS.GET_BOT_CONTENT, s, function (t) {
                    l.default.getBotContentResponse(d, e.aptrinsicRequestId, t, null)
                }, function (t) {
                    l.default.getBotContentResponse(d, e.aptrinsicRequestId, null, t)
                });
                break;
            default:
                c.logger.logInternalError(new Error("master script got unsupported bot event from top window, data: " + JSON.stringify(e)))
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;
    var o = n(6),
        i = n(22),
        a = n(10),
        s = n(47),
        l = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(s),
        c = n(3),
        u = n(4)
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = {};
        Object.assign(r, o.eventTrackData[u.cacheGetAll]()), (0, l.addCacheBuster)(r);
        var f = (0, d.getGlobalContext)();
        f && Object.assign(r, {
            gcx: JSON.stringify(f)
        }), Object.assign(r, (0, g.getWebContext)()), r.at = t || "a";
        var p = i.ondemandEndpoint + "/" + o.eventTrackData.data[o.productIdParameter] + "/" + e + "?" + (0, l.convert2Parameters)((0, l.addParameters)(r, []));
        try {
            s.AjaxUtil.getData(p, function (e) {
                n(e), c.EngagementDrawer.draw([e])
            })
        } catch (t) {
            a.logger.logInternalError("Error during getting on demand engagement id " + e)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;
    var o = n(4),
        i = n(1),
        a = n(3),
        s = n(12),
        l = n(0),
        c = n(44),
        u = n(5),
        d = n(20),
        g = n(21)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = (0, a.getBody)().getBoundingClientRect(),
            n = t.top,
            r = e.offsets.popper,
            o = r.top,
            i = r.left,
            s = o;
        return n > 0 && (s -= n), e.styles.top = "0px", e.styles.left = "0px", e.styles.transform = "translate(" + i + "px, " + s + "px)", e.styles.willChange = "transform", e
    }

    function o(e) {
        (0, a.getConfig)("enableModalBodyScroll") || (e.modifiers.computeStyle = {
            fn: r
        })
    }

    function i(e) {
        (0, a.getConfig)("enableModalBodyScroll") || (e.popperOptions = {
            modifiers: {}
        }, o(e.popperOptions))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.useComputeStyleModifier = o, t.useComputeStyleModifierForTooltip = i;
    var a = n(1)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(0),
        i = n(3),
        a = n(26),
        s = n(12),
        l = n(4),
        c = n(5),
        u = n(14),
        d = r(u),
        g = n(33),
        f = r(g),
        p = n(7),
        m = n(88),
        v = r(m),
        h = n(24),
        y = n(1),
        b = n(10),
        E = n(15),
        I = n(8),
        C = n(18),
        T = n(20),
        w = n(21),
        S = n(9),
        k = n(31);
    k.defaultOptions.className = "vex-theme-os";
    var x = n(143),
        O = n(154),
        _ = n(155),
        A = n(156),
        P = n(157),
        L = n(158),
        N = n(159),
        B = n(160),
        R = n(161),
        D = n(144),
        M = n(145),
        U = n(146),
        F = n(147),
        V = n(148),
        j = n(149),
        H = n(150),
        q = n(151),
        W = n(152),
        G = n(153),
        K = n(162),
        z = n(166),
        Y = n(167),
        J = n(168),
        X = n(169),
        Q = n(170),
        $ = n(171),
        Z = n(172),
        ee = n(173),
        te = n(163),
        ne = n(164),
        re = n(165),
        oe = "div",
        ie = 3,
        ae = new f.default,
        se = void 0,
        le = function () {
            function e() {
                Te = 1, we = [], Se = [], ke = [], xe = 0, Oe = [], _e = null, Ae = null, Pe = null, Le = null, Ne = !1, Be = {}
            }

            function t(e, t) {
                if (!d.default.isEditorMode()) {
                    var n = y.trackMultiStepEndpoint,
                        r = [];
                    if (!0 !== Ne) {
                        2 === t && (Ne = !0), r = (0, o.addParameters)(l.eventTrackData[c.cacheGetAll](), r), (0, o.addParameters)({
                            ei: e.engagementId || null,
                            ecoi: e.content.id || null,
                            evi: e.matchEventId || null,
                            ent: ie,
                            ems: t || null,
                            acci: e.accountId,
                            exi: e.executionId,
                            ext: e.executionTimestamp,
                            at: e.activationType || "a",
                            cl: e.contentLocale
                        }, r), Ee && "kc" === e.activationType && (0, o.addParameters)(Ee, r), r = (0, o.addParameters)((0, w.getWebContext)(), r);
                        var i = (0, C.getChannel)(l.eventTrackData[c.cacheGet](l.productIdParameter)),
                            a = (0, T.getGlobalContext)(),
                            u = void 0;
                        a && (u = {
                            gcx: JSON.stringify(a)
                        }, i !== I.DESKTOP_CHANNEL && (0, o.addParameters)(u, r)), i == I.DESKTOP_CHANNEL ? (0, E.desktopTrackEngagementState)(r, u) : (n += "?" + (0, o.convert2Parameters)(r), s.AjaxUtil.getData(n)), b.internalEventListener.dispatchEvent("engagementCompleted", (0, E.getExternalEvent)(e, "Completed"))
                    }
                }
            }

            function n(e, t, n) {
                if (!d.default.isEditorMode() && !v.default.wasStepTracked(e.executionId, t)) {
                    v.default.markStepTracked(e.executionId, t);
                    var r = y.trackStepEndpoint,
                        i = [];
                    i = (0, o.addParameters)(l.eventTrackData[c.cacheGetAll](), i), (0, o.addParameters)({
                        ei: e.engagementId,
                        ecoi: e.content.id,
                        cosi: t,
                        evi: e.matchEventId,
                        cossn: n,
                        ent: ie,
                        acci: e.accountId,
                        exi: e.executionId,
                        ext: e.executionTimestamp,
                        at: e.activationType || "a",
                        cl: e.contentLocale
                    }, i), Ee && "kc" === e.activationType && (0, o.addParameters)(Ee, i);
                    var a = (0, T.getGlobalContext)(),
                        u = (0, C.getChannel)(l.eventTrackData[c.cacheGet](l.productIdParameter)),
                        g = void 0;
                    a && (g = {
                        gcx: JSON.stringify(a)
                    }, u !== I.DESKTOP_CHANNEL && (0, o.addParameters)(g, i)), i = (0, o.addParameters)((0, w.getWebContext)(), i), u == I.DESKTOP_CHANNEL ? (0, E.desktopTrackStep)(i, g) : (r += "?" + (0, o.convert2Parameters)(i), s.AjaxUtil.getData(r));
                    var f = (0, E.getExternalEvent)(e, "Viewed Step");
                    f.stepNumber = n + 1, b.internalEventListener.dispatchEvent("engagementViewedStep", f)
                }
            }

            function r(e) {
                e.querySelector(".aptr-snooze-container").style.display = 1 === Te ? "block" : "none"
            }

            function u() {
                _e.close()
            }

            function g(e, a, s) {
                try {
                    var l, c = a.content;
                    if (e > we.length && !c.cyclic) return void _e.close();
                    if (c.cyclic && e > we.length && (Te = 1), c.cyclic && e < 1 && (Te = we.length), (0, E.isSnoozeButtonEnabled)(a.activationType, c.snoozeButton, a.activationTypes) && r(s), !c.cyclic && e == we.length && c.carouselNavigation && c.carouselNavigation.lastSlideSettings && f(s, c.carouselNavigation.lastSlideSettings), !c.cyclic) {
                        s.querySelector(".aptr-nav-button.aptr-arrow-left").style.display = 1 == e ? "none" : ""
                    }
                    if (Se)
                        for (l = 0; l < Se.length; l++) Se[l].classList.remove("aptr-slideshow-active"), Se[l].style.backgroundColor = c.carouselNavigation.backgroundColor ? c.carouselNavigation.backgroundColor : "#ffffff";
                    var u = s.querySelector(".aptr-slides-container"),
                        d = c.carouselSlideList[Te - 1],
                        p = Se[0].parentNode,
                        m = parseInt(window.getComputedStyle(p).height);
                    if (s.style.backgroundColor = "transparent", (0, o.setCrossBrowserTransform)(u, "translateX(" + -1 * Oe[Te - 1] + "px)"), d.width > 0 && (s.style.width = d.width + "px"), d.width > 0 && (s.style.width = d.width + "px"), ye(we[Te - 1]), d.autoHeight) {
                        var v = window.getComputedStyle(u.children[Te - 1]),
                            h = v.height;
                        Be[Te - 1] || (h = parseInt(h) + m + "px", u.children[Te - 1].style.height = h, Be[Te - 1] = !0), u.parentNode.style.height = h, s.style.height = h
                    } else d.height > 0 && (s.style.height = d.height + "px", u.parentNode.style.height = d.height + "px");
                    Se.length > 0 && (Se[Te - 1].style.backgroundColor = "transparent", Se[Te - 1].classList.add("aptr-slideshow-active"), Se[Te - 1].style.borderColor = c.carouselNavigation.backgroundColor ? c.carouselNavigation.backgroundColor : "#ffffff"), n(a, d.id, d.sequence), Te == we.length && t(a, 2), c.interval && (c.cyclic || e < we.length) && (Ae = setTimeout(function () {
                        g(++Te, a, s)
                    }, c.interval * o.MILLISEC)), (0, C.isDesktop)() && !Re[d.id] && (Re[d.id] = !0, (0, E.addLinkListener)(u.children[Te - 1], a, d.id, d.sequence, !1)), (0, E.sendDesktopResize)(s, a, d)
                } catch (e) {
                    i.logger.logInternalError(e)
                }
            }

            function f(e, t) {
                var n = e.querySelector(".aptr-nav-button:not(.aptr-arrow-left)");
                n.style.backgroundColor = t.backgroundColor, n.removeChild(n.querySelector(".aptr-arrow-icon"));
                var r = (0, o.createElement)(oe, []);
                r.innerHTML = Ce[t.checkmarkType];
                var i = r.firstChild;
                i.classList.add("aptr-arrow-icon"), i.style.stroke = t.color, i.style.fill = t.color, (0, o.appendElements)(n, [i])
            }

            function m(e, t) {
                var n = e.querySelector(".aptr-nav-button:not(.aptr-arrow-left)");
                n.style.backgroundColor = t.backgroundColor, n.removeChild(n.querySelector(".aptr-arrow-icon"));
                var r = (0, o.createElement)(oe, []);
                r.innerHTML = Ie[t.arrowType];
                var i = r.firstChild;
                i.classList.add("aptr-arrow-icon"), i.style.stroke = t.color, i.style.fill = t.color, (0, o.appendElements)(n, [i])
            }

            function le(e) {
                if (e) {
                    var t = (0, o.createElement)(oe, ["aptr-slides-container"]),
                        n = me(e.carouselSlideList);
                    (0, o.appendElements)(t, n);
                    var r = (0, o.createElement)(oe, ["aptr-arrows-container"]),
                        i = ge(e.carouselNavigation);
                    (0, o.appendElements)(r, i);
                    var a = (0, o.createElement)(oe, ["aptr-slideshow-dots-container"]);
                    Se = ue(e.carouselNavigation, e.carouselSlideList.length), (0, o.appendElements)(a, Se);
                    var s = (0, o.createElement)(oe, ["aptr-carousel-engagement"]);
                    return (0, o.appendElements)(s, [t, r, a]), s
                }
            }

            function ce(e, t) {
                if (e) {
                    var n = t.querySelector(".aptr-slides-container");
                    if (n.style.width = xe + "px", e.borderRadius) {
                        var r = t.querySelector(".aptr-carousel-engagement");
                        r && (r.style.borderRadius = e.borderRadius + "px"), t.style.borderRadius = e.borderRadius + "px"
                    }
                    ve(e.carouselSlideList, n.children)
                }
            }

            function ue(e, t) {
                for (var n = [], r = 0; r < t; r++) {
                    var i = (0, o.createElement)(oe, ["aptr-slideshow-dot"]);
                    n.push(i)
                }
                return n
            }

            function de(e, t) {
                for (var n = 0; n < t.length; n++) t[n].style.borderColor = e.backgroundColor
            }

            function ge(e) {
                if (!e) throw new Error("No navigation settings provided for carousel");
                var t = [],
                    n = (0, o.createElement)("span", ["aptr-nav-button", "aptr-arrow-left"]);
                n.setAttribute("role", "button"), n.setAttribute("aria-label", "previous");
                var r = (0, o.createElement)(oe, []);
                r.innerHTML = Ie[e.arrowType];
                var i = r.firstChild;
                i.classList.add("aptr-arrow-icon"), (0, o.appendElements)(n, [i]);
                var a = (0, o.createElement)("span", ["aptr-nav-button", "aptr-arrow-right"]);
                a.setAttribute("role", "button"), a.setAttribute("aria-label", "next"), r = (0, o.createElement)(oe, []), r.innerHTML = Ie[e.arrowType];
                var s = r.firstChild;
                return s.classList.add("aptr-arrow-icon"), (0, o.appendElements)(a, [s]), t.push(n), t.push(a), t
            }

            function fe(e, t, n) {
                pe(t, e), pe(n, e)
            }

            function pe(e, t) {
                e.style.backgroundColor = t.backgroundColor, e.style.borderRadius = t.backgroundRadius ? t.backgroundRadius + "%" : "0px";
                var n = e.querySelector(".aptr-arrow-icon");
                n.style.stroke = t.color, n.style.fill = t.color
            }

            function me(e) {
                var t = [];
                if (!e.forEach) throw new Error("Cannot create slides for carousel because slides array was not sent correctly");
                return e.sort(function (e, t) {
                    return e.sequence - t.sequence
                }), e.forEach(function (e, n) {
                    Oe[n] = xe, xe += e.width;
                    var r = (0, o.createElement)(oe, ["aptr-slide"]);
                    r.setAttribute("id", "slide" + e.id), he(r), e.html && (r.innerHTML = (0, p.addNonceToDomString)(e.html)), t.push(r)
                }), t
            }

            function ve(e, t) {
                e.sort(function (e, t) {
                    return e.sequence - t.sequence
                }), e.forEach(function (e, n) {
                    var r = t[n];
                    e.backgroundType && "IMAGE" === e.backgroundType ? e.backgroundImage ? r.style.background = e.backgroundImage : r.style.backgroundColor = (0, o.hexToRgba)("#ffffff", e.backgroundFill || 0 === e.backgroundFill ? e.backgroundFill / 100 : 1) : r.style.backgroundColor = e.backgroundColor ? (0, o.hexToRgba)(e.backgroundColor, e.backgroundFill || 0 === e.backgroundFill ? e.backgroundFill / 100 : 1) : (0, o.hexToRgba)("#ffffff", e.backgroundFill || 0 === e.backgroundFill ? e.backgroundFill / 100 : 1), r.style.height = e.autoHeight ? "auto" : e.height + "px", r.style.width = e.width + "px"
                })
            }

            function he(e) {
                e.setAttribute("aria-hidden", "true")
            }

            function ye(e) {
                e.setAttribute("aria-hidden", "false")
            }

            function be(e, t, n) {
                function r(e, t) {
                    for (var n = 0; n < e.length; n += 1) t(e[n], n)
                }

                function o() {
                    r(e, function (e) {
                        "true" !== e.getAttribute("aria-hidden") && (e.classList.remove("aptr-slide-hide"), e.classList.add("aptr-slide-show"))
                    })
                }

                function i() {
                    var e = (0, S.getBrowserDetails)(),
                        t = e.name,
                        n = e.version;
                    "chrome" === t && parseInt(n, 10) < 74 && o()
                }

                function a() {
                    r(e, function (e, r) {
                        if ("true" === e.getAttribute("aria-hidden") && (e.classList.remove("aptr-slide-show"), e.classList.add("aptr-slide-hide"), !n)) {
                            t.querySelector(".aptr-nav-button.aptr-arrow-left").style.display = 0 === r ? "none" : ""
                        }
                    })
                }
                var s = document.querySelector(".aptr-slides-container");
                return (0, p.addTransitionEndListener)(s, a), (0, p.addTransitionStartListener)(s, o), i
            }
            var Ee = null,
                Ie = {
                    ARROW_1: x,
                    ARROW_2: O,
                    ARROW_3: _,
                    ARROW_4: A,
                    ARROW_5: P,
                    ARROW_6: L,
                    ARROW_7: N,
                    ARROW_8: B,
                    ARROW_9: R,
                    ARROW_10: D,
                    ARROW_11: M,
                    ARROW_12: U,
                    ARROW_13: F,
                    ARROW_14: V,
                    ARROW_15: j,
                    ARROW_16: H,
                    ARROW_17: q,
                    ARROW_18: W,
                    ARROW_19: G,
                    EMPTY_ARROW_TYPE: x
                },
                Ce = {
                    V_1: K,
                    V_2: z,
                    V_3: Y,
                    V_4: J,
                    V_5: X,
                    V_6: Q,
                    V_7: $,
                    V_8: Z,
                    V_9: ee,
                    V_10: te,
                    V_11: ne,
                    V_12: re,
                    EMPTY_LAST_SLIDE_ICON_TYPE: K
                },
                Te = 1,
                we = [],
                Se = [],
                ke = [],
                xe = 0,
                Oe = [],
                _e = null,
                Ae = null,
                Pe = null,
                Le = null,
                Ne = !1,
                Be = {},
                Re = {};
            this.drawCarousel = function (n, r, s) {
                Ee = s, e(), this.carousel = n;
                var l = le(n.content);
                Le = Le || 0 === Le ? Le : n.content.zindex || n.content.zIndex || 2147483647, _e = k.open({
                    appendLocation: (0, y.getConfig)("framesetMode") ? "html" : "body",
                    enableModalBodyScroll: (0, y.getConfig)("enableModalBodyScroll"),
                    closeClassName: "aptr-engagement-close-btn px-close-button",
                    unsafeContent: l.outerHTML,
                    showCloseButton: !0,
                    overlayClosesOnClick: !1,
                    afterOpen: function () {
                        var e = this,
                            i = I.TAB_INDEX_START;
                        (0, y.getConfig)("enableModalBodyScroll") && (0, y.getBody)().classList.add("apt-vex"), this.rootEl.classList.add("apt-vex"), this.rootEl.setAttribute("aria-live", "polite"), this.contentEl.classList.add("apt-carousel-popup"), this.contentEl.setAttribute("data-apt-disable-selector", !0), this.contentEl.classList.add("px-engagement-wrapper-slider"), this.contentEl.classList.add("px-engagement-wrapper"), this.contentEl.style.zIndex = n.content.zindex || n.content.zIndex || Le, this.rootEl.style.zIndex = n.content.zindex || n.content.zIndex || Le, (0, p.addStyleTag)(this.contentEl, n.content.coreStyling, "px-engagement-wrapper", ".apt-vex.vex.vex-theme-os"), (0, p.addStyleTag)(this.contentEl, n.content.engagementCoreStyling, "px-engagement-wrapper-slider", ".apt-vex.vex.vex-theme-os"), (0, p.addStyleTag)(this.contentEl, n.content.overrideStyling, "px-engagement-wrapper-slider", ".apt-vex.vex.vex-theme-os"), Array.isArray(n.content.carouselSlideList) && n.content.carouselSlideList.forEach(function (t) {
                            var n = t && t.style;
                            n && (0, p.addStyleTag)(e.contentEl, n, "px-engagement-wrapper-slider #slide" + t.id, ".apt-vex.vex.vex-theme-os")
                        }), this.rootEl.querySelector(".vex-overlay").style.zIndex = Le, n.content.overlayColor && (this.rootEl.querySelector(".vex-overlay").style.background = (0, o.hexToRgba)(n.content.overlayColor, n.content.overlayFill ? n.content.overlayFill / 100 : 0)), (!n.content.overlayFill || n.content.overlayFill < 1) && this.rootEl.classList.add("apt-popup-disable-overlay"), n.borderRadius && (this.contentEl.style.borderRadius = n.borderRadius + "px");
                        var a = void 0;
                        if ((0, E.isSnoozeButtonEnabled)(n.activationType, n.content.snoozeButton, n.activationTypes)) {
                            var s = this.contentEl.querySelector(".aptr-slideshow-dots-container"),
                                c = (0, o.createElement)(oe, ["aptr-snooze-container"]),
                                d = n.content.carouselSlideList[Te - 1];
                            a = (0, E.createSnoozeButton)(n.content.snoozeButton, c, n, d.id, d.sequence, u), s.appendChild(c)
                        }
                        var f = this.contentEl.getElementsByClassName("aptr-nav-button");
                        we = document.getElementsByClassName("aptr-slide"), Se = document.getElementsByClassName("aptr-slideshow-dot");
                        var v = be(we, l, n.content.cyclic),
                            h = f[0],
                            b = f[1];
                        ce(n.content, this.contentEl), fe(n.content.carouselNavigation, h, b), de(n.content.carouselNavigation, Se);
                        var T = function () {
                                clearTimeout(Ae);
                                var t = Te - 1;
                                g(--Te, n, e.contentEl), he(we[t]), n.content.cyclic || Te != we.length - 1 || m(e.contentEl, n.content.carouselNavigation)
                            },
                            w = function () {
                                clearTimeout(Ae);
                                var t = Te - 1;
                                g(++Te, n, e.contentEl), v(), he(we[t])
                            };
                        (0, o.addEventListener)(h, "click", T), (0, o.addEventListener)(b, "click", w), (0, p.disableFocusOnClick)(h, this.contentEl), (0, p.disableFocusOnClick)(b, this.contentEl), (0, o.addEnterKeyDownListener)(h, T), (0, o.addEnterKeyDownListener)(b, w), (0, E.removeCicularTabsWrapperListener)(se), (0, E.checkHasOverlay)(n.content.overlayColor, n.content.overlayFill) && (se = (0, E.addCircularTabListener)(function () {
                            n.content.cyclic ? (0, p.focusElement)(h) : 1 === Te ? (0, p.focusElement)(b) : (0, p.focusElement)(h)
                        })), h.setAttribute("tabindex", i), i += 1, i = (0, E.setTabIndexes)(this.contentEl, i), (0, E.addTabbableEnterListener)(), a && (a.setAttribute("tabindex", i), i += 1), b.setAttribute("tabindex", i), i += 1, g(Te, n, this.contentEl), (0, C.isDesktop)() ? (this.contentEl.style.position = "fixed", this.contentEl.style.top = "0px", this.contentEl.style.left = "0px") : ae.positionElement(this.contentEl, null, "center", "center"), n.content.carouselSlideList.forEach(function (t) {
                            (0, E.listenToLinksClicks)(e.rootEl.querySelector("#slide" + t.id), n, {
                                stepId: t.id,
                                stepName: t.name
                            })
                        }), (0, y.getConfig)("clientSideEngagementTracking") && t(n, 1), r && r(n, this.contentEl)
                    },
                    afterClose: function () {
                        (0, y.getBody)().classList.add("apt-vex"), Ne ? (0, h.internalApt)("engagementCompletedClosed") : (0, h.internalApt)("engagementDroppedClosed"), (0, E.removeCicularTabsWrapperListener)(se), (0, a.sendEngagementClosedEvent)()
                    },
                    beforeClose: function () {
                        try {
                            (0, a.handleEngagementFinish)("IN_APP_CAROUSEL"), (0, E.removeTabbableEnterListener)()
                        } catch (e) {
                            i.logger.logInternalError(e, "Error in before closing slider")
                        }
                    }
                })
            }, this.close = function () {
                _e && _e.close()
            }, le = le.bind(this), g = g.bind(this)
        };
    t.default = le
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = e.id,
            n = e.contentType,
            r = e.deviceType,
            o = e.coreStyling,
            i = e.overrideStyling,
            a = e.engagementCoreStyling,
            s = e.defaultLanguage,
            l = e.deviceContentLanguagesList,
            c = e.htmlElements,
            u = e.htmlLangAddition;
        return l.sort(), {
            id: t,
            contentType: n,
            deviceType: r,
            coreStyling: o,
            overrideStyling: i,
            engagementCoreStyling: a,
            defaultLanguage: s,
            deviceContentLanguagesList: l,
            htmlElements: c,
            htmlLangAddition: u
        }
    }

    function o(e) {
        var t = e.id,
            n = e.contentType,
            r = e.deviceType,
            o = e.coreStyling,
            i = e.overrideStyling,
            a = e.engagementCoreStyling,
            s = e.defaultLanguage,
            l = e.deviceContentLanguagesList,
            c = e.footer,
            u = e.buttonType,
            d = e.url,
            g = e.targetUrl,
            f = e.transitionType,
            m = e.transitionTimeout,
            v = e.overlayColor,
            h = e.overlayFill,
            k = e.modal,
            x = e.overlayPadding,
            O = e.steps,
            _ = e.widgetEnabled,
            A = e.widgetTitle,
            P = e.widgetDescription,
            L = e.category,
            N = e.endButtonText,
            B = e.restartButtonText,
            R = e.nextButtonText,
            D = e.backButtonText,
            M = e.getStartedButtonText,
            U = e.skipButtonText,
            F = e.stepCounterLabelText,
            V = e.borderRadius,
            j = e.completionClosingAction,
            H = e.completionClosingRedirectUrl,
            q = e.interruptClosingAction,
            W = e.interruptClosingRedirectUrl,
            G = e.showStepCounter,
            K = e.skipButton,
            z = e.startButton;
        l.sort();
        var Y = O.map(function (e) {
            var t = p(e, y);
            return t.textRule = p(e.textRule, b), t.textRule && t.textRule.values && t.textRule.values.sort(), t.navigation = p(e.navigation, E), t.shadowSettings = p(e.shadowSettings, S), t.overlay = p(e.overlay, I), t.hotspotSettings = p(e.hotspotSettings, C), t
        });
        return Y.sort(function (e, t) {
            return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
        }), {
            id: t,
            contentType: n,
            deviceType: r,
            coreStyling: o,
            overrideStyling: i,
            engagementCoreStyling: a,
            defaultLanguage: s,
            deviceContentLanguagesList: l,
            footer: c,
            buttonType: u,
            url: d,
            targetUrl: g,
            transitionType: f,
            transitionTimeout: m,
            overlayColor: v,
            overlayFill: h,
            modal: k,
            overlayPadding: x,
            steps: Y,
            widgetEnabled: _,
            widgetTitle: A,
            widgetDescription: P,
            category: p(L, T),
            endButtonText: N,
            restartButtonText: B,
            nextButtonText: R,
            backButtonText: D,
            getStartedButtonText: M,
            skipButtonText: U,
            stepCounterLabelText: F,
            borderRadius: V,
            completionClosingAction: j,
            completionClosingRedirectUrl: H,
            interruptClosingAction: q,
            interruptClosingRedirectUrl: W,
            showStepCounter: G,
            skipButton: p(K, w),
            startButton: p(z, w)
        }
    }

    function i(e) {
        var t = e.id,
            n = e.contentType,
            r = e.deviceType,
            o = e.coreStyling,
            i = e.overrideStyling,
            a = e.engagementCoreStyling,
            s = e.defaultLanguage,
            l = e.deviceContentLanguagesList,
            c = e.defaultHeight,
            u = e.defaultWidth,
            d = e.transitionType,
            g = e.interval,
            f = e.hideNavigation,
            y = e.cyclic,
            b = e.overlayColor,
            E = e.overlayFill,
            I = e.carouselNavigation,
            C = e.carouselSlideList,
            T = e.borderRadius,
            w = e.completionClosingAction,
            S = e.completionClosingRedirectUrl,
            k = e.interruptClosingAction,
            x = e.interruptClosingRedirectUrl,
            O = e.zIndex;
        l.sort();
        var _ = p(I, m),
            A = p(I.lastSlideSettings, v);
        _.lastSlideSettings = A;
        var P = C.map(function (e) {
            return p(e, h)
        });
        return P.sort(function (e, t) {
            return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
        }), {
            id: t,
            contentType: n,
            deviceType: r,
            coreStyling: o,
            overrideStyling: i,
            engagementCoreStyling: a,
            defaultLanguage: s,
            deviceContentLanguagesList: l,
            defaultHeight: c,
            defaultWidth: u,
            transitionType: d,
            interval: g,
            hideNavigation: f,
            cyclic: y,
            overlayColor: b,
            overlayFill: E,
            carouselNavigation: _,
            carouselSlideList: P,
            borderRadius: T,
            completionClosingAction: w,
            completionClosingRedirectUrl: S,
            interruptClosingAction: k,
            interruptClosingRedirectUrl: x,
            zIndex: O
        }
    }

    function a(e) {
        var t = e.id,
            n = e.type,
            r = e.sequenceNumber,
            o = e.height,
            i = e.width,
            a = e.overlayColor,
            s = e.overlayFill,
            l = e.verticalPosition,
            c = e.horizontalPosition,
            u = e.style,
            d = e.question,
            g = e.submitButtonTextColor,
            f = e.submitButtonBackgroundColor,
            m = e.submitButtonBorderColor,
            v = e.submitButtonBorderRadius,
            h = e.submitButtonBorderWidth,
            y = e.answers,
            b = e.maxSelectionNumber,
            E = e.minSelectionNumber,
            I = e.numberColor,
            C = e.numberSize,
            T = e.numberFontFamily,
            w = e.showQuestionNumber,
            S = e.buttonText,
            x = y.map(function (e) {
                return p(e, k)
            });
        return x.sort(function (e, t) {
            return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
        }), {
            id: t,
            type: n,
            sequenceNumber: r,
            height: o,
            width: i,
            overlayColor: a,
            overlayFill: s,
            verticalPosition: l,
            horizontalPosition: c,
            style: u,
            question: d,
            submitButtonTextColor: g,
            submitButtonBackgroundColor: f,
            submitButtonBorderColor: m,
            submitButtonBorderRadius: v,
            submitButtonBorderWidth: h,
            answers: x,
            maxSelectionNumber: b,
            minSelectionNumber: E,
            numberColor: I,
            numberSize: C,
            numberFontFamily: T,
            showQuestionNumber: w,
            buttonText: S
        }
    }

    function s(e) {
        return {
            id: e.id,
            type: e.type,
            sequenceNumber: e.sequenceNumber,
            height: e.height,
            width: e.width,
            overlayColor: e.overlayColor,
            overlayFill: e.overlayFill,
            verticalPosition: e.verticalPosition,
            horizontalPosition: e.horizontalPosition,
            style: e.style,
            question: e.question,
            submitButtonTextColor: e.submitButtonTextColor,
            submitButtonBackgroundColor: e.submitButtonBackgroundColor,
            submitButtonBorderColor: e.submitButtonBorderColor,
            submitButtonBorderRadius: e.submitButtonBorderRadius,
            submitButtonBorderWidth: e.submitButtonBorderWidth,
            numberColor: e.numberColor,
            numberSize: e.numberSize,
            numberFontFamily: e.numberFontFamily,
            showQuestionNumber: e.showQuestionNumber,
            buttonText: e.buttonText,
            placeholderText: e.placeholderText,
            isCommentMandatory: e.isCommentMandatory,
            minCommentLength: e.minCommentLength,
            maxCommentLength: e.maxCommentLength
        }
    }

    function l(e) {
        return {
            id: e.id,
            type: e.type,
            sequenceNumber: e.sequenceNumber,
            height: e.height,
            width: e.width,
            overlayColor: e.overlayColor,
            overlayFill: e.overlayFill,
            verticalPosition: e.verticalPosition,
            horizontalPosition: e.horizontalPosition,
            style: e.style,
            html: e.html,
            closeButtonTextColor: e.closeButtonTextColor,
            closeButtonBackgroundColor: e.closeButtonBackgroundColor,
            closeButtonBorderRadius: e.closeButtonBorderRadius,
            closeButtonBorderWidth: e.closeButtonBorderWidth,
            closeButtonBorderColor: e.closeButtonBorderColor,
            closeButtonBorderText: e.closeButtonBorderText,
            buttonText: e.buttonText
        }
    }

    function c(e) {
        return {
            id: e.id,
            type: e.type,
            sequenceNumber: e.sequenceNumber,
            height: e.height,
            width: e.width,
            overlayColor: e.overlayColor,
            overlayFill: e.overlayFill,
            verticalPosition: e.verticalPosition,
            horizontalPosition: e.horizontalPosition,
            style: e.style,
            titleHtml: e.titleHtml,
            textHtml: e.textHtml,
            buttonsTextColor: e.buttonsTextColor,
            buttonsBackgroundColor: e.buttonsBackgroundColor,
            buttonsBorderWidth: e.buttonsBorderWidth,
            buttonsBorderColor: e.buttonsBorderColor,
            buttonsBorderRadius: e.buttonsBorderRadius,
            selectedButtonsBackgroundColor: e.selectedButtonsBackgroundColor,
            selectedButtonsTextColor: e.selectedButtonsTextColor,
            selectedButtonsBorderWidth: e.selectedButtonsBorderWidth,
            selectedButtonsBorderColor: e.selectedButtonsBorderColor,
            notSatisfiedHtml: e.notSatisfiedHtml,
            satisfiedHtml: e.satisfiedHtml,
            detractorsComment: e.detractorsComment,
            passivesComment: e.passivesComment,
            promotersComment: e.promotersComment,
            submitButtonTextColor: e.submitButtonTextColor,
            submitButtonBackgroundColor: e.submitButtonBackgroundColor,
            submitButtonBorderColor: e.submitButtonBorderColor,
            submitButtonBorderRadius: e.submitButtonBorderRadius,
            submitButtonBorderWidth: e.submitButtonBorderWidth,
            showDynamicComment: e.showDynamicComment,
            defaultComment: e.defaultComment,
            positiveButtonTextColor: e.positiveButtonTextColor,
            positiveButtonBackgroundColor: e.positiveButtonBackgroundColor,
            positiveButtonBorderColor: e.positiveButtonBorderColor,
            positiveButtonBorderWidth: e.positiveButtonBorderWidth,
            negativeButtonTextColor: e.negativeButtonTextColor,
            negativeButtonBackgroundColor: e.negativeButtonBackgroundColor,
            negativeButtonBorderColor: e.negativeButtonBorderColor,
            negativeButtonBorderWidth: e.negativeButtonBorderWidth,
            buttonText: e.buttonText,
            placeholderText: e.placeholderText,
            isCommentMandatory: e.isCommentMandatory,
            minCommentLength: e.minCommentLength,
            maxCommentLength: e.maxCommentLength,
            surveyScoreType: e.surveyScoreType,
            neutralButtonTextColor: e.neutralButtonTextColor,
            neutralButtonBackgroundColor: e.neutralButtonBackgroundColor,
            neutralButtonBorderColor: e.neutralButtonBorderColor,
            neutralButtonBorderWidth: e.neutralButtonBorderWidth
        }
    }

    function u(e) {
        switch (e.type) {
            case "CONTENT":
                return l(e);
            case "SCORE":
            case "BOOLEAN":
                return c(e);
            case "OPEN_TEXT":
                return s(e);
            case "MULTIPLE_CHOICE_QUESTION":
                return a(e);
            default:
                return e
        }
    }

    function d(e) {
        var t = e.id,
            n = e.contentType,
            r = e.deviceType,
            o = e.coreStyling,
            i = e.overrideStyling,
            a = e.engagementCoreStyling,
            s = e.defaultLanguage,
            l = e.deviceContentLanguagesList,
            c = e.borderRadius,
            d = e.overlayColor,
            g = e.overlayFill,
            f = e.viewType,
            m = e.verticalPosition,
            v = e.horizontalPosition,
            h = e.positionTopDelta,
            y = e.positionLeftDelta,
            b = e.backgroundColor,
            E = e.backgroundFill,
            I = e.height,
            C = e.width,
            T = e.showContactMeMessage,
            w = e.autoHeight,
            k = e.showShadow,
            x = e.showFooter,
            O = e.mergeFirstSteps,
            _ = e.shadowSettings,
            A = e.barPosition,
            P = e.barOffset,
            L = e.contactMeMessage,
            N = e.footer,
            B = e.minCharsValidationText,
            R = e.maxCharsValidationText,
            D = e.mandatoryValidationText,
            M = e.maxAnswersValidationText,
            U = e.minAnswersValidationText,
            F = e.zIndex,
            V = e.steps;
        l.sort();
        var j = p(_, S),
            H = V.map(function (e) {
                return u(e)
            });
        return H.sort(function (e, t) {
            return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
        }), {
            id: t,
            contentType: n,
            deviceType: r,
            coreStyling: o,
            overrideStyling: i,
            engagementCoreStyling: a,
            defaultLanguage: s,
            deviceContentLanguagesList: l,
            borderRadius: c,
            overlayColor: d,
            overlayFill: g,
            viewType: f,
            verticalPosition: m,
            horizontalPosition: v,
            positionTopDelta: h,
            positionLeftDelta: y,
            backgroundColor: b,
            backgroundFill: E,
            height: I,
            width: C,
            showContactMeMessage: T,
            autoHeight: w,
            showShadow: k,
            showFooter: x,
            mergeFirstSteps: O,
            shadowSettings: j,
            barPosition: A,
            barOffset: P,
            contactMeMessage: L,
            footer: N,
            minCharsValidationText: B,
            maxCharsValidationText: R,
            mandatoryValidationText: D,
            maxAnswersValidationText: M,
            minAnswersValidationText: U,
            zIndex: F,
            steps: H
        }
    }

    function g(e, t) {
        if (t) switch (e.contentType) {
            case "IN_APP_DIALOG":
                return r(e);
            case "IN_APP_GUIDE":
                return o(e);
            case "IN_APP_CAROUSEL":
                return i(e);
            case "IN_APP_BOOLEAN_SURVEY":
            case "IN_APP_SURVEY_NPS":
            case "IN_APP_CES_SURVEY":
            case "IN_APP_MULTIPLE_QUESTION_SURVEY":
            case "IN_APP_RATING_SURVEY":
                return d(e);
            default:
                return e
        } else switch (e.contentType) {
            case "IN_APP_GUIDE":
                return e.steps.sort(function (e, t) {
                    return e.sequenceNumber - t.sequenceNumber
                }), e;
            case "IN_APP_CAROUSEL":
                return e.carouselSlideList.sort(function (e, t) {
                    return e.sequence - t.sequence
                }), e;
            case "IN_APP_BOOLEAN_SURVEY":
            case "IN_APP_SURVEY_NPS":
            case "IN_APP_CES_SURVEY":
            case "IN_APP_MULTIPLE_QUESTION_SURVEY":
            case "IN_APP_RATING_SURVEY":
                return e.steps.sort(function (e, t) {
                    return e.sequenceNumber - t.sequenceNumber
                }), e;
            default:
                return e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var f = n(27),
        p = f.filterProperties,
        m = ["arrowType", "color", "backgroundColor", "backgroundRadius", "horizontalOffset", "verticalOffset", "hidden", "lastSlideSettings"],
        v = ["checkmarkType", "color", "backgroundColor"],
        h = ["id", "name", "state", "sequence", "backgroundType", "backgroundColor", "backgroundImage", "backgroundFill", "html", "height", "width", "autoHeight", "style"],
        y = ["id", "content", "matchCssSelector", "cssSelector", "matchTextRule", "textRule", "backgroundType", "backgroundColor", "backgroundFill", "height", "width", "positionHorizontal", "positionVertical", "positionTopDelta", "positionLeftDelta", "sequenceNumber", "type", "navigation", "autoHeight", "shadow", "shadowSettings", "overlay", "hotspotSettings", "showPreviousButton", "autoScroll", "showTitle", "titleHtml", "dialogViewType", "barPosition", "barOffset", "stickToBadge", "style", "zIndex", "repositionInterval"],
        b = ["operator", "values"],
        E = ["labelColor", "backgroundFill", "backgroundColor", "backgroundRadius", "nextStepUrl", "nextStepNewTab", "nextStepTrigger", "useElementListener", "nextButtonAction", "previousButtonAction"],
        I = ["color", "fill", "modal", "padding", "blockElement"],
        C = ["spotColor", "spotSize", "animationColor", "animationDelay", "animationDuration", "animationCount"],
        T = ["name"],
        w = ["enabled", "backgroundColor", "backgroundFill", "showBorder", "borderColor", "text", "textColor", "cornerRadius", "hoverBackgroundColor", "hoverBackgroundFill", "hoverTextColor", "hoverBorderColor"],
        S = ["color", "fill", "offsetX", "offsetY", "blur", "spread"],
        k = ["id", "text", "sequenceNumber"];
    t.filterAndSortEngagementFieldsV1 = g
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = e.id,
            n = e.contentType,
            r = e.deviceType,
            o = e.coreStyling,
            i = e.overrideStyling,
            a = e.engagementCoreStyling,
            s = e.defaultLanguage,
            l = e.deviceContentLanguagesList,
            c = e.htmlElements,
            u = e.htmlLangAddition;
        return l.sort(), {
            id: t,
            contentType: n,
            deviceType: r,
            coreStyling: o,
            overrideStyling: i,
            engagementCoreStyling: a,
            defaultLanguage: s,
            deviceContentLanguagesList: l,
            htmlElements: c,
            htmlLangAddition: u
        }
    }

    function o(e) {
        var t = e.id,
            n = e.contentType,
            r = e.deviceType,
            o = e.coreStyling,
            i = e.overrideStyling,
            a = e.engagementCoreStyling,
            s = e.defaultLanguage,
            l = e.deviceContentLanguagesList,
            c = e.footer,
            u = e.buttonType,
            d = e.url,
            g = e.targetUrl,
            f = e.transitionType,
            p = e.transitionTimeout,
            m = e.overlayColor,
            v = e.overlayFill,
            y = e.modal,
            b = e.overlayPadding,
            E = e.steps,
            _ = e.widgetEnabled,
            A = e.widgetTitle,
            P = e.widgetDescription,
            L = e.category,
            N = e.endButtonText,
            B = e.restartButtonText,
            R = e.nextButtonText,
            D = e.backButtonText,
            M = e.getStartedButtonText,
            U = e.skipButtonText,
            F = e.stepCounterLabelText,
            V = e.borderRadius,
            j = e.completionClosingAction,
            H = e.completionClosingRedirectUrl,
            q = e.interruptClosingAction,
            W = e.interruptClosingRedirectUrl,
            G = e.showStepCounter,
            K = e.skipButton,
            z = e.startButton;
        l.sort();
        var Y = E.map(function (e) {
            var t = h(e, I);
            return t.textRule = h(e.textRule, C), t.textRule && t.textRule.values && t.textRule.values.sort(), t.navigation = h(e.navigation, T), t.shadowSettings = h(e.shadowSettings, O), t.overlay = h(e.overlay, w), t.hotspotSettings = h(e.hotspotSettings, S), t
        });
        return Y.sort(function (e, t) {
            return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
        }), {
            id: t,
            contentType: n,
            deviceType: r,
            coreStyling: o,
            overrideStyling: i,
            engagementCoreStyling: a,
            defaultLanguage: s,
            deviceContentLanguagesList: l,
            footer: c,
            buttonType: u,
            url: d,
            targetUrl: g,
            transitionType: f,
            transitionTimeout: p,
            overlayColor: m,
            overlayFill: v,
            modal: y,
            overlayPadding: b,
            steps: Y,
            widgetEnabled: _,
            widgetTitle: A,
            widgetDescription: P,
            category: h(L, k),
            endButtonText: N,
            restartButtonText: B,
            nextButtonText: R,
            backButtonText: D,
            getStartedButtonText: M,
            skipButtonText: U,
            stepCounterLabelText: F,
            borderRadius: V,
            completionClosingAction: j,
            completionClosingRedirectUrl: H,
            interruptClosingAction: q,
            interruptClosingRedirectUrl: W,
            showStepCounter: G,
            skipButton: h(K, x),
            startButton: h(z, x)
        }
    }

    function i(e) {
        var t = e.id,
            n = e.contentType,
            r = e.deviceType,
            o = e.coreStyling,
            i = e.overrideStyling,
            a = e.engagementCoreStyling,
            s = e.defaultLanguage,
            l = e.deviceContentLanguagesList,
            c = e.defaultHeight,
            u = e.defaultWidth,
            d = e.transitionType,
            g = e.interval,
            f = e.hideNavigation,
            p = e.cyclic,
            m = e.overlayColor,
            v = e.overlayFill,
            I = e.carouselNavigation,
            C = e.carouselSlideList,
            T = e.borderRadius,
            w = e.completionClosingAction,
            S = e.completionClosingRedirectUrl,
            k = e.interruptClosingAction,
            x = e.interruptClosingRedirectUrl,
            O = e.zIndex;
        l.sort();
        var _ = h(I, y),
            A = h(I.lastSlideSettings, b);
        _.lastSlideSettings = A;
        var P = C.map(function (e) {
            return h(e, E)
        });
        return P.sort(function (e, t) {
            return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
        }), {
            id: t,
            contentType: n,
            deviceType: r,
            coreStyling: o,
            overrideStyling: i,
            engagementCoreStyling: a,
            defaultLanguage: s,
            deviceContentLanguagesList: l,
            defaultHeight: c,
            defaultWidth: u,
            transitionType: d,
            interval: g,
            hideNavigation: f,
            cyclic: p,
            overlayColor: m,
            overlayFill: v,
            carouselNavigation: _,
            carouselSlideList: P,
            borderRadius: T,
            completionClosingAction: w,
            completionClosingRedirectUrl: S,
            interruptClosingAction: k,
            interruptClosingRedirectUrl: x,
            zIndex: O
        }
    }

    function a(e) {
        var t = e.id,
            n = e.type,
            r = e.sequenceNumber,
            o = e.height,
            i = e.width,
            a = e.overlayColor,
            s = e.overlayFill,
            l = e.verticalPosition,
            c = e.horizontalPosition,
            u = e.style,
            d = e.surveyPageId,
            g = e.question,
            f = e.submitButtonTextColor,
            p = e.submitButtonBackgroundColor,
            m = e.submitButtonBorderColor,
            v = e.submitButtonBorderRadius,
            y = e.submitButtonBorderWidth,
            b = e.answers,
            E = e.maxSelectionNumber,
            I = e.minSelectionNumber,
            C = e.numberColor,
            T = e.numberSize,
            w = e.numberFontFamily,
            S = e.showQuestionNumber,
            k = e.buttonText,
            x = b.map(function (e) {
                return h(e, _)
            });
        return x.sort(function (e, t) {
            return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
        }), {
            id: t,
            type: n,
            sequenceNumber: r,
            height: o,
            width: i,
            overlayColor: a,
            overlayFill: s,
            verticalPosition: l,
            horizontalPosition: c,
            style: u,
            surveyPageId: d,
            question: g,
            submitButtonTextColor: f,
            submitButtonBackgroundColor: p,
            submitButtonBorderColor: m,
            submitButtonBorderRadius: v,
            submitButtonBorderWidth: y,
            answers: x,
            maxSelectionNumber: E,
            minSelectionNumber: I,
            numberColor: C,
            numberSize: T,
            numberFontFamily: w,
            showQuestionNumber: S,
            buttonText: k
        }
    }

    function s(e) {
        return {
            id: e.id,
            type: e.type,
            sequenceNumber: e.sequenceNumber,
            height: e.height,
            width: e.width,
            overlayColor: e.overlayColor,
            overlayFill: e.overlayFill,
            verticalPosition: e.verticalPosition,
            horizontalPosition: e.horizontalPosition,
            style: e.style,
            surveyPageId: e.surveyPageId,
            question: e.question,
            submitButtonTextColor: e.submitButtonTextColor,
            submitButtonBackgroundColor: e.submitButtonBackgroundColor,
            submitButtonBorderColor: e.submitButtonBorderColor,
            submitButtonBorderRadius: e.submitButtonBorderRadius,
            submitButtonBorderWidth: e.submitButtonBorderWidth,
            numberColor: e.numberColor,
            numberSize: e.numberSize,
            numberFontFamily: e.numberFontFamily,
            showQuestionNumber: e.showQuestionNumber,
            buttonText: e.buttonText,
            placeholderText: e.placeholderText,
            isCommentMandatory: e.isCommentMandatory,
            minCommentLength: e.minCommentLength,
            maxCommentLength: e.maxCommentLength
        }
    }

    function l(e) {
        return {
            id: e.id,
            type: e.type,
            sequenceNumber: e.sequenceNumber,
            height: e.height,
            width: e.width,
            overlayColor: e.overlayColor,
            overlayFill: e.overlayFill,
            verticalPosition: e.verticalPosition,
            horizontalPosition: e.horizontalPosition,
            style: e.style,
            surveyPageId: e.surveyPageId,
            html: e.html,
            closeButtonTextColor: e.closeButtonTextColor,
            closeButtonBackgroundColor: e.closeButtonBackgroundColor,
            closeButtonBorderRadius: e.closeButtonBorderRadius,
            closeButtonBorderWidth: e.closeButtonBorderWidth,
            closeButtonBorderColor: e.closeButtonBorderColor,
            closeButtonBorderText: e.closeButtonBorderText,
            buttonText: e.buttonText
        }
    }

    function c(e) {
        return {
            id: e.id,
            type: e.type,
            sequenceNumber: e.sequenceNumber,
            height: e.height,
            width: e.width,
            overlayColor: e.overlayColor,
            overlayFill: e.overlayFill,
            verticalPosition: e.verticalPosition,
            horizontalPosition: e.horizontalPosition,
            style: e.style,
            titleHtml: e.titleHtml,
            textHtml: e.textHtml,
            buttonsTextColor: e.buttonsTextColor,
            buttonsBackgroundColor: e.buttonsBackgroundColor,
            buttonsBorderWidth: e.buttonsBorderWidth,
            buttonsBorderColor: e.buttonsBorderColor,
            buttonsBorderRadius: e.buttonsBorderRadius,
            selectedButtonsBackgroundColor: e.selectedButtonsBackgroundColor,
            selectedButtonsTextColor: e.selectedButtonsTextColor,
            selectedButtonsBorderWidth: e.selectedButtonsBorderWidth,
            selectedButtonsBorderColor: e.selectedButtonsBorderColor,
            notSatisfiedHtml: e.notSatisfiedHtml,
            satisfiedHtml: e.satisfiedHtml,
            detractorsComment: e.detractorsComment,
            passivesComment: e.passivesComment,
            promotersComment: e.promotersComment,
            submitButtonTextColor: e.submitButtonTextColor,
            submitButtonBackgroundColor: e.submitButtonBackgroundColor,
            submitButtonBorderColor: e.submitButtonBorderColor,
            submitButtonBorderRadius: e.submitButtonBorderRadius,
            submitButtonBorderWidth: e.submitButtonBorderWidth,
            showDynamicComment: e.showDynamicComment,
            defaultComment: e.defaultComment,
            positiveButtonTextColor: e.positiveButtonTextColor,
            positiveButtonBackgroundColor: e.positiveButtonBackgroundColor,
            positiveButtonBorderColor: e.positiveButtonBorderColor,
            positiveButtonBorderWidth: e.positiveButtonBorderWidth,
            negativeButtonTextColor: e.negativeButtonTextColor,
            negativeButtonBackgroundColor: e.negativeButtonBackgroundColor,
            negativeButtonBorderColor: e.negativeButtonBorderColor,
            negativeButtonBorderWidth: e.negativeButtonBorderWidth,
            buttonText: e.buttonText,
            placeholderText: e.placeholderText,
            isCommentMandatory: e.isCommentMandatory,
            minCommentLength: e.minCommentLength,
            maxCommentLength: e.maxCommentLength,
            surveyScoreType: e.surveyScoreType,
            neutralButtonTextColor: e.neutralButtonTextColor,
            neutralButtonBackgroundColor: e.neutralButtonBackgroundColor,
            neutralButtonBorderColor: e.neutralButtonBorderColor,
            neutralButtonBorderWidth: e.neutralButtonBorderWidth
        }
    }

    function u(e) {
        var t = c(e),
            n = e.surveyPageId,
            r = e.minAnswer,
            o = e.maxAnswer,
            i = e.showQuestionNumber,
            a = e.numberColor,
            s = e.numberSize,
            l = e.numberFontFamily;
        return Object.assign({}, t, {
            surveyPageId: n,
            minAnswer: r,
            maxAnswer: o,
            showQuestionNumber: i,
            numberColor: a,
            numberSize: s,
            numberFontFamily: l
        })
    }

    function d(e) {
        switch (e.type) {
            case "CONTENT":
                return l(e);
            case "SCORE":
            case "BOOLEAN":
                return c(e);
            case "DYNAMIC_RATING_STEP":
                return u(e);
            case "OPEN_TEXT":
                return s(e);
            case "MULTIPLE_CHOICE_QUESTION":
                return a(e);
            default:
                return e
        }
    }

    function g(e) {
        return {
            enabled: e.enabled,
            backgroundColor: e.backgroundColor,
            backgroundFill: e.backgroundFill,
            borderColor: e.borderColor,
            hoverBackgroundColor: e.hoverBackgroundColor,
            hoverBackgroundFill: e.hoverBackgroundFill,
            hoverBorderColor: e.hoverBorderColor,
            showBorder: e.showBorder,
            text: e.text,
            textColor: e.textColor,
            hoverTextColor: e.hoverTextColor,
            cornerRadius: e.cornerRadius
        }
    }

    function f(e) {
        var t = e.id,
            n = e.title,
            r = e.sequenceNumber,
            o = e.height,
            i = e.width,
            a = e.verticalPosition,
            s = e.horizontalPosition,
            l = e.buttonSetting,
            c = e.style;
        return {
            id: t,
            title: n,
            sequenceNumber: r,
            height: o,
            width: i,
            verticalPosition: a,
            horizontalPosition: s,
            buttonSetting: g(l),
            style: c
        }
    }

    function p(e) {
        var t = e.id,
            n = e.contentType,
            r = e.contentSubType,
            o = e.deviceType,
            i = e.coreStyling,
            a = e.overrideStyling,
            s = e.engagementCoreStyling,
            l = e.defaultLanguage,
            c = e.deviceContentLanguagesList,
            u = e.borderRadius,
            g = e.overlayColor,
            p = e.overlayFill,
            m = e.viewType,
            v = e.verticalPosition,
            y = e.horizontalPosition,
            b = e.positionTopDelta,
            E = e.positionLeftDelta,
            I = e.backgroundColor,
            C = e.backgroundFill,
            T = e.height,
            w = e.width,
            S = e.showContactMeMessage,
            k = e.autoHeight,
            x = e.showShadow,
            _ = e.showFooter,
            A = e.mergeFirstSteps,
            P = e.shadowSettings,
            L = e.barPosition,
            N = e.barOffset,
            B = e.contactMeMessage,
            R = e.footer,
            D = e.minCharsValidationText,
            M = e.maxCharsValidationText,
            U = e.mandatoryValidationText,
            F = e.maxAnswersValidationText,
            V = e.minAnswersValidationText,
            j = e.zIndex,
            H = e.steps,
            q = e.surveyPages,
            W = e.orientation;
        c.sort();
        var G = h(P, O),
            K = H.map(function (e) {
                return d(e)
            });
        K.sort(function (e, t) {
            return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
        });
        var z = q.map(function (e) {
            return f(e)
        });
        return z.sort(function (e, t) {
            return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
        }), {
            id: t,
            contentType: n,
            deviceType: o,
            coreStyling: i,
            overrideStyling: a,
            engagementCoreStyling: s,
            defaultLanguage: l,
            deviceContentLanguagesList: c,
            contentSubType: r,
            borderRadius: u,
            overlayColor: g,
            overlayFill: p,
            viewType: m,
            verticalPosition: v,
            horizontalPosition: y,
            positionTopDelta: b,
            positionLeftDelta: E,
            backgroundColor: I,
            backgroundFill: C,
            height: T,
            width: w,
            showContactMeMessage: S,
            autoHeight: k,
            showShadow: x,
            showFooter: _,
            mergeFirstSteps: A,
            shadowSettings: G,
            barPosition: L,
            barOffset: N,
            contactMeMessage: B,
            footer: R,
            minCharsValidationText: D,
            maxCharsValidationText: M,
            mandatoryValidationText: U,
            maxAnswersValidationText: F,
            minAnswersValidationText: V,
            zIndex: j,
            steps: K,
            surveyPages: z,
            orientation: W
        }
    }

    function m(e) {
        switch (e.contentType) {
            case "IN_APP_DIALOG":
                return r(e);
            case "IN_APP_GUIDE":
                return o(e);
            case "IN_APP_CAROUSEL":
                return i(e);
            case "IN_APP_BOOLEAN_SURVEY":
            case "IN_APP_SURVEY_NPS":
            case "IN_APP_CES_SURVEY":
            case "IN_APP_MULTIPLE_QUESTION_SURVEY":
            case "IN_APP_RATING_SURVEY":
                return p(e);
            default:
                return e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var v = n(27),
        h = v.filterProperties,
        y = ["arrowType", "color", "backgroundColor", "backgroundRadius", "horizontalOffset", "verticalOffset", "hidden", "lastSlideSettings"],
        b = ["checkmarkType", "color", "backgroundColor"],
        E = ["id", "name", "state", "sequence", "backgroundType", "backgroundColor", "backgroundImage", "backgroundFill", "html", "height", "width", "autoHeight", "style"],
        I = ["id", "content", "matchCssSelector", "cssSelector", "matchTextRule", "textRule", "backgroundType", "backgroundColor", "backgroundFill", "height", "width", "positionHorizontal", "positionVertical", "positionTopDelta", "positionLeftDelta", "sequenceNumber", "type", "navigation", "autoHeight", "shadow", "shadowSettings", "overlay", "hotspotSettings", "showPreviousButton", "autoScroll", "showTitle", "titleHtml", "dialogViewType", "barPosition", "barOffset", "stickToBadge", "style", "zIndex", "repositionInterval"],
        C = ["operator", "values"],
        T = ["labelColor", "backgroundFill", "backgroundColor", "backgroundRadius", "nextStepUrl", "nextStepNewTab", "nextStepTrigger", "useElementListener", "nextButtonAction", "previousButtonAction"],
        w = ["color", "fill", "modal", "padding", "blockElement"],
        S = ["spotColor", "spotSize", "animationColor", "animationDelay", "animationDuration", "animationCount"],
        k = ["name"],
        x = ["enabled", "backgroundColor", "backgroundFill", "showBorder", "borderColor", "text", "textColor", "cornerRadius", "hoverBackgroundColor", "hoverBackgroundFill", "hoverTextColor", "hoverBorderColor"],
        O = ["color", "fill", "offsetX", "offsetY", "blur", "spread"],
        _ = ["id", "text", "sequenceNumber"];
    t.filterAndSortEngagementFieldsV3 = m
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t) {
        var n = (0, w.getChannel)(d.eventTrackData[y.cacheGet](d.productIdParameter));
        !e.isAutoHeight && e.height ? (t.style.height = e.height + "px", t.querySelector(".apt-dialog-content-wrapper").style.height = e.height + "px") : e.isAutoHeight && n !== S.DESKTOP_CHANNEL && t.classList.add("apt-auto-height-scroll")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        a = n(33),
        s = r(a),
        l = n(9),
        c = n(26),
        u = n(12),
        d = n(4),
        g = n(15),
        f = n(7),
        p = n(11),
        m = n(32),
        v = n(3),
        h = n(24),
        y = n(5),
        b = n(14),
        E = r(b),
        I = n(1),
        C = n(10),
        T = n(56),
        w = n(18),
        S = n(8),
        k = n(19),
        x = n(20),
        O = n(21),
        _ = n(23),
        A = n(31);
    A.defaultOptions.className = "vex-theme-os";
    var P = "classList",
        L = new s.default,
        N = null,
        B = void 0,
        R = function () {
            function e(e, t, n) {
                if (!E.default.isEditorMode()) {
                    var r = I.trackMultiStepEndpoint,
                        o = [],
                        a = _.UserData.getSessionId();
                    if (!0 !== R[a]) {
                        2 === t && (R[a] = !0), o = (0, i.addParameters)(d.eventTrackData[y.cacheGetAll](), o), (0, i.addParameters)({
                            ei: e.engagementId || null,
                            ecoi: e.content.id || null,
                            evi: e.matchEventId || null,
                            ent: 1,
                            ems: t || null,
                            acci: e.accountId,
                            exi: e.executionId,
                            ext: e.executionTimestamp,
                            at: e.activationType || "a",
                            cl: e.contentLocale
                        }, o), n && "kc" === e.activationType && (0, i.addParameters)(n, o);
                        var s = (0, x.getGlobalContext)(),
                            l = (0, w.getChannel)(d.eventTrackData[y.cacheGet](d.productIdParameter)),
                            c = void 0;
                        s && (c = {
                            gcx: JSON.stringify(s)
                        }, l !== S.DESKTOP_CHANNEL && (0, i.addParameters)(c, o)), o = (0, i.addParameters)((0, O.getWebContext)(), o), l === S.DESKTOP_CHANNEL ? (0, g.desktopTrackEngagementState)(o, c) : (r += "?" + (0, i.convert2Parameters)(o), u.AjaxUtil.getData(r)), C.internalEventListener.dispatchEvent("engagementCompleted", (0, g.getExternalEvent)(e, "Completed"))
                    }
                }
            }

            function t(e, t) {
                (0, w.isDesktop)() && (0, g.addLinkListener)(e, t, null, 0)
            }

            function n(e, t) {
                var n = e && e.contentBackground;
                n && (t.style.backgroundColor = e.contentBackground), n && e.backgroundFill && (t.style.backgroundColor = (0, i.hexToRgba)(e.contentBackground, e.backgroundFill / 100), (0, i.checkDarkColor)(e.contentBackground) && t.querySelector(".aptr-engagement-close-btn").classList.add("apt-engagement-close-btn-bright"))
            }

            function r(e, t) {
                t.borderRadius && "DIALOG" === t.viewType && (e.style.borderRadius = t.borderRadius + "px")
            }

            function a(e, t) {
                return function () {
                    try {
                        if (e.closingAction && "REDIRECT" === e.closingAction && e.closeUrl)
                            if ((0, w.isDesktop)()) C.internalEventListener.dispatchEvent("engagementLinkClick", {
                                engagementType: t.content.contentType,
                                engagementId: t.engagementId,
                                link: e.closeUrl,
                                close: !0
                            });
                            else {
                                var n = (0, m.resolveUrlWithPlaceholders)(document.location.href, e.closeUrl);
                                n !== document.location.href && (document.location.href = n)
                            }
                    } catch (e) {
                        v.logger.logInternalError(e, "Error in dialog close handler")
                    }
                }
            }

            function s(s, d, m, y, b, C) {
                var S = (0, i.getEscHandlerCallback)(a(s, m)),
                    k = void 0,
                    x = void 0,
                    O = {
                        appendLocation: (0, I.getConfig)("framesetMode") ? "html" : "body",
                        enableModalBodyScroll: (0, I.getConfig)("enableModalBodyScroll"),
                        closeClassName: "aptr-engagement-close-btn px-close-button",
                        unsafeContent: d.outerHTML,
                        overlayClosesOnClick: !1,
                        showCloseButton: !0,
                        afterClose: function () {
                            (0, I.getBody)().classList.remove("apt-vex"), clearTimeout(x), k && clearTimeout(k), (0, h.internalApt)("engagementCompletedClosed"), (0, g.removeCicularTabsWrapperListener)(B), (0, c.sendEngagementClosedEvent)()
                        },
                        beforeClose: function () {
                            try {
                                (0, i.removeEventListener)(document, "keydown", S), (0, c.handleEngagementFinish)("IN_APP_DIALOG")
                            } catch (e) {
                                v.logger.logInternalError(e, "Error before close dialog")
                            }
                        },
                        afterOpen: function () {
                            var c = this;
                            if ((0, I.getConfig)("enableModalBodyScroll") && (0, I.getBody)().classList.add("apt-vex"), this.rootEl.classList.add("apt-vex"), this.contentEl[P].add("apt-dialog-popup"), this.contentEl[P].add("px-engagement-wrapper-dialog"), this.contentEl[P].add("px-engagement-wrapper"), (0, f.addStyleTag)(this.contentEl, m.content.coreStyling, "px-engagement-wrapper", ".apt-vex.vex.vex-theme-os"), (0, f.addStyleTag)(this.contentEl, m.content.engagementCoreStyling, "px-engagement-wrapper-dialog", ".apt-vex.vex.vex-theme-os"), (0, f.addStyleTag)(this.contentEl, m.content.overrideStyling, "px-engagement-wrapper-dialog", ".apt-vex.vex.vex-theme-os"), this.contentEl.setAttribute("data-apt-disable-selector", !0), o(s, this.contentEl), s.zIndex > 0 && (this.rootEl.style.zIndex = s.zIndex, this.overlayEl.style.zIndex = s.zIndex, this.contentEl.style.zIndex = s.zIndex), "BAR" === s.viewType) {
                                this.contentEl.style.position = "fixed", this.contentEl[P].add("apt-dialog-bar"), this.contentEl.style.width = (0, w.isDesktop)() ? "100%" : (0, l.getPageWidth)() + "px";
                                var d = (s.barOffset || 0) + "px";
                                "TOP" === s.barPosition ? this.contentEl.style.top = d : this.contentEl.style.bottom = d
                            } else {
                                s.width && (this.contentEl.style.width = s.width + "px"), s.isFitToWidth && (this.contentEl.style.height = (0, l.getPageHeight)(), this.contentEl.style.width = (0, l.getPageWidth)());
                                var v = s.hPosition,
                                    h = s.vPosition;
                                v || (v = "center"), h && "middle" !== h || (h = "center"), this.contentEl.style.position = "absolute", L.positionElement(this.contentEl, null, v, h), /^\d+$/.test(v) && (this.contentEl.style.left = v + "px"), /^\d+$/.test(h) && (this.contentEl.style.top = h + "px")
                            }
                            s.overlayColor && (this.overlayEl.style.background = (0, i.hexToRgba)(s.overlayColor, s.overlayFill ? s.overlayFill / 100 : 0)), (!s.overlayFill || s.overlayFill < 1) && this.rootEl.classList.add("apt-popup-disable-overlay"), n(s, this.contentEl);
                            var b = (0, p.arrayFrom)(this.contentEl.querySelectorAll("a"));
                            if ((0, i.isNotEmptyArr)(b))
                                for (var E = 0; E < b.length; E++) "_blank" !== b[E].target && (0, i.addEventListener)(b[E], "click", function () {
                                    N.close()
                                });
                            var T = (0, p.arrayFrom)(this.contentEl.querySelectorAll("button")),
                                k = C && C.recId ? C.recId : null;
                            (0, i.isNotEmptyArr)(T) && T.forEach(function (e) {
                                (0, i.addEventListener)(e, "click", function () {
                                    var e = (0, g.getEngagementTrackPayload)(m, "ENGAGEMENT_CLICK");
                                    e = (0, i.addParameters)({
                                        recId: k || null
                                    }, e);
                                    var t = I.engagementTrackEndpoint + "?" + (0, i.convert2Parameters)(e);
                                    u.AjaxUtil.getData(t, null, null, null, !0)
                                })
                            }), (0, g.removeCicularTabsWrapperListener)(B), (0, g.checkHasOverlay)(s.overlayColor, s.overlayFill) && (B = (0, g.addCircularTabListener)(function () {
                                return (0, f.focusElement)(c.contentEl)
                            })), (0, i.addEventListener)(document, "keydown", S), (0, i.addEventListener)(this.closeEl, "click", a(s, m)), r(this.contentEl, s), e(m, 2), (0, g.listenToLinksClicks)(this.rootEl, m), y && y(m, this.contentEl), (0, g.sendDesktopResize)(this.contentEl, m, {
                                height: s.height,
                                width: s.width,
                                autoHeight: s.isAutoHeight
                            }), t(this.contentEl, m)
                        }
                    },
                    _ = s.timeout ? s.timeout * i.MILLISEC : 0,
                    R = s.delay ? s.delay * i.MILLISEC : 0;
                x = setTimeout(function () {
                    var e = {
                        url: (0, i.getPageUrl)()
                    };
                    if (!1 === b && !E.default.isPreview() && !(0, i.isBlank)(m.rules) && !(0, T.matchMultiTypeRules)(JSON.parse(m.rules), e)) return v.logger.log("did not have client side match for engagement rules " + m.rules + ", current URL: " + e), void(0, c.handleEngagementFinish)("IN_APP_DIALOG");
                    N = A.open(O), _ > 0 && (k = setTimeout(function () {
                        A.close(N)
                    }, _))
                }, R)
            }

            function b(t, r, a) {
                var s = t.embeddedSelector,
                    l = (0, k.findElementsInShadowDom)(s, document);
                if (1 !== l.length) return void v.logger.log("Could not embed Dialog " + a.engagementId + ". There were " + l.length + " elements with selector " + s + ". Should have only 1.");
                var u = l[0],
                    d = u.querySelector(".apt-dialog-content-wrapper");
                d && u.removeChild(d), u.appendChild(r), o(t, u), u.style.width = "BAR" === t.viewType ? "100%" : t.width + "px", u.style.position = "relative", n(t, r);
                var f = (0, i.createElement)("div", "apt-embedded-close");
                (0, i.addEventListener)(f, "click", function () {
                    u.removeChild(r), u.removeAttribute("style"), (0, c.handleEngagementFinish)("IN_APP_DIALOG")
                }), r.appendChild(f), e(a, 2), (0, g.listenToLinksClicks)(r, a)
            }
            var R = {};
            this.drawDialog = function (e, t, n, r) {
                var o = e.content.htmlElements,
                    a = e.content.settings,
                    l = (0, i.createElement)("div", "apt-dialog-content-wrapper");
                (0, f.isElement)(o) ? (l.appendChild(o), o = l) : (l.innerHTML = (0, f.addNonceToDomString)(o), o = l), (0, g.setTabIndexes)(o, S.TAB_INDEX_START), (0, g.addTabbableEnterListener)(), a.embedded ? b(a, o, e) : s(a, o, e, t, n, r)
            }, this.close = function () {
                N && N.close(), (0, g.removeTabbableEnterListener)()
            }
        };
    t.default = R
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function o(e, t) {
        window.open(e, t ? "_blank" : "_self")
    }

    function i(e, t) {
        var n = t.customButtonNextCallback,
            r = t.closeCallback,
            i = t.showPreviousStepCallback,
            a = t.startOverGuideCallback;
        switch (e.navigationType) {
            case I:
                n(e);
                break;
            case S:
                r();
                break;
            case T:
                e.onNavigationNextAction === h ? o(e.url, e.openNewTab) : r();
                break;
            case C:
                i(e.useBrowsingHistory);
                break;
            case w:
                a(e.useBrowsingHistory);
                break;
            default:
                throw new Error("Navigation type not found")
        }
    }

    function a(e, t) {
        var n = e[0];
        if (n) switch (n.actionType) {
            case h:
                o(n.url, n.openNewTab), n.closeEngagement && t.closeCallback();
                break;
            case y:
                n.articleId ? (0, u.dispatchCustomEvent)(f.GAINSIGHT_PX_OPEN_ARTICLE, {
                    articleId: n.articleId
                }) : (0, u.dispatchCustomEvent)(f.GAINSIGHT_PX_OPEN_BOT), n.closeEngagement && t.closeCallback();
                break;
            case b:
                i(n, t);
                break;
            case E:
                (0, u.dispatchCustomEvent)(p.SET_USER_ATTRIBUTE_EVENT_NAME, {
                    userAttr: r({}, n.attributeName, n.attributeValue)
                }), n.closeEngagement && t.closeCallback();
                break;
            default:
                throw new Error("Action type not found")
        }
    }

    function s(e) {
        switch (e.actionType) {
            case h:
                return e.url;
            case y:
                return e.articleId ? e.articleId : k;
            case b:
                return e.navigationType;
            case E:
                return e.attributeValue;
            default:
                throw new Error("Action type not found")
        }
    }

    function l(e, t, n, r) {
        var o = n.actionConfigs[0],
            i = {
                actionIndex: o.sequenceNumber,
                actionValue: s(o)
            },
            a = e.steps.find(function (e) {
                return e.id === t
            }),
            l = (0, m.getEngagementTrackPayload)(e, "ENGAGEMENT_CLICK", t, a.sequenceNumber),
            c = (0, u.paramToObject)(l, {}),
            f = c.gcx,
            p = Object.assign({}, c, {
                cei: n.elementId,
                actionEventTrack: [i],
                ru: "",
                gcx: f ? decodeURIComponent(f) : {}
            }),
            v = d.engagementTrackEndpoint + "?" + (0, u.convert2Parameters)(l);
        g.AjaxUtil.postData(v, p, null, r, r, !0)
    }

    function c(e, t, n, r, o) {
        if (t) {
            e.querySelectorAll('button[id^="pxCustomButton"]').forEach(function (e) {
                var i = e.id.slice(v),
                    s = t.find(function (e) {
                        return e.elementId === i
                    });
                s && s.actionConfigs && s.actionConfigs.length && (0, u.addEventListener)(e, "click", function () {
                    var e = s.actionConfigs,
                        t = e[0],
                        i = t.actionType,
                        c = t.onNavigationNextAction,
                        u = i === h || i === b && c === h;
                    r.preview ? a(e, n) : u ? l(r, o, s, function () {
                        a(e, n)
                    }) : (l(r, o, s), a(e, n))
                })
            })
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setCustomButtonEventListener = t.CUSTOM_BUTTON_PREFIX_END_INDEX = void 0;
    var u = n(0),
        d = n(1),
        g = n(12),
        f = n(86),
        p = n(8),
        m = n(15),
        v = t.CUSTOM_BUTTON_PREFIX_END_INDEX = 15,
        h = "URL_REDIRECTION",
        y = "KC_BOT",
        b = "NAVIGATION",
        E = "USER_ATTRIBUTE",
        I = "NEXT",
        C = "PREVIOUS",
        T = "END",
        w = "START_OVER",
        S = "SKIP",
        k = "OPEN_BOT";
    t.setCustomButtonEventListener = c
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = {
            "apt-step-footer-buttons": "px-step-navigation-buttons",
            "apt-step-footer-next": "px-step-navigation-next",
            "apt-step-footer-button": "px-step-navigation-button",
            "apt-step-footer": "px-step-navigation",
            "apt-step-new-index": "px-step-new-index"
        };
        return e.querySelector(".px-step-navigation") ? "." + n[t] : "." + t
    }

    function o() {
        function e(e, t, n) {
            var r = t.backgroundColor,
                o = t.backgroundFill,
                a = t.textColor,
                s = t.cornerRadius,
                l = t.hoverBackgroundColor,
                c = t.hoverBackgroundFill,
                u = t.hoverTextColor,
                d = ".px-step-navigation-" + n + " {",
                g = ".px-step-navigation-" + n + ":hover {";
            d += "background-color: " + (o > -1 ? (0, i.hexToRgba)(r, o / 100) : r) + ";", g += "background-color: " + (c > -1 ? (0, i.hexToRgba)(l, c / 100) : l) + ";", d += "color: " + a + ";", g += "color: " + u + ";", d += "border-radius: " + s + "px;", d += "}", g += "}", (0, i.addStyle)(d + g, "px-step-navigation-" + n, e)
        }

        function t(e, t, n) {
            e.backgroundColor && (t.style.backgroundColor = e.backgroundColor) && (n.style.backgroundColor = e.backgroundColor), e.backgroundFill && (t.style.backgroundColor = (0, i.hexToRgba)(e.backgroundColor, e.backgroundFill / 100)) && (n.style.backgroundColor = (0, i.hexToRgba)(e.backgroundColor, e.backgroundFill / 100)), e.backgroundRadius && (t.style.borderRadius = e.backgroundRadius + "px") && (n.style.borderRadius = e.backgroundRadius + "px"), e.labelColor && (t.style.color = e.labelColor) && (n.style.color = e.labelColor)
        }

        function n(e) {
            var t = e.globalSettings,
                n = e.stepSettings,
                r = e.button;
            if (r)
                if (n && n.shouldOverrideGlobalSettings && n.fontSettings && n.fontSettings.fontSize && "0" !== n.fontSettings.fontSize) r.style.fontSize = n.fontSettings.fontSize + "px";
                else {
                    var o = t && t.fontSettings && t.fontSettings.fontSize || 14;
                    r.style.fontSize = o + "px"
                }
        }

        function o(e) {
            var t = e.globalSettings,
                r = e.stepSettings,
                o = e.button,
                a = e.parentElement,
                s = e.id,
                l = r.shouldOverrideGlobalSettings ? r : t;
            null === l.backgroundFill || void 0 === l.backgroundFill ? o.style.backgroundColor = l.backgroundColor ? l.backgroundColor : "#ffffff" : o.style.backgroundColor = (0, i.hexToRgba)(l.backgroundColor ? l.backgroundColor : "#ffffff", l.backgroundFill / 100), o.style.color = l.textColor ? l.textColor : "#000000", o.style.borderRadius = null === l.cornerRadius || void 0 === l.cornerRadius ? "0px" : l.cornerRadius + "px", l.buttonPaddingSettings && (null === l.buttonPaddingSettings.top && null === l.buttonPaddingSettings.bottom && null === l.buttonPaddingSettings.left && null === l.buttonPaddingSettings.right || (o.style.padding = (l.buttonPaddingSettings.top || 0) + "px \n                " + (l.buttonPaddingSettings.right || 0) + "px \n                " + (l.buttonPaddingSettings.bottom || 0) + "px \n                " + (l.buttonPaddingSettings.left || 0) + "px")), o.style.border = (l.borderWidth || 0) + "px solid " + (l.borderColor || "#000"), l.fontSettings && (o.style.fontFamily = "inherit" === l.fontSettings.fontFamily ? "inherit" : l.fontSettings.fontFamily + ", Helvetica", n({
                globalSettings: t,
                stepSettings: r,
                button: o
            }), o.style.lineHeight = l.fontSettings.fontSize + "px", o.style.fontStyle = l.fontSettings.itallic ? "italic" : "unset", o.style.fontWeight = l.fontSettings.bold ? 700 : "unset", o.style.textDecoration = l.fontSettings.underlined ? "underline" : "unset");
            var c = void 0;
            c = null === l.hoverBackgroundFill || void 0 === l.hoverBackgroundFill ? "unset" !== l.hoverBackgroundColor ? l.hoverBackgroundColor : "" : "unset" !== l.hoverBackgroundColor ? (0, i.hexToRgba)(l.hoverBackgroundColor, l.hoverBackgroundFill / 100) : "";
            var u = "." + s + ":hover {\n            color: " + ("unset" !== l.hoverTextColor ? l.hoverTextColor : "") + " !important;\n            background-color: " + c + " !important;\n            border: " + (l.borderWidth || 0) + "px solid " + l.hoverBorderColor + " !important;\n        }";
            (0, i.addStyle)(u, s, a)
        }
        var u = this;
        this.getFooterElement = function (e) {
            return e.querySelector(r(e, "apt-step-footer"))
        }, this.getNavigationButtons = function (e) {
            return e.querySelector(r(e, "apt-step-footer-buttons"))
        }, this.getStepCounter = function (e) {
            return e.querySelector(r(e, "apt-step-new-index"))
        }, this.setNavigationVisibility = function (e, t) {
            var n = t || {},
                r = n.navigationButtons,
                o = n.stepIndexWrapper;
            r = r || u.getNavigationButtons(e), o = o || u.getStepCounter(e);
            var i = u.getFooterElement(e);
            i && r && ("none" !== r.style.display || o && "" !== o.innerHTML ? i.style.display = "" : i.style.display = "none")
        }, this.setButtonsVisibility = function (e, t) {
            var n = u.getNavigationButtons(e);
            n && (n.style.display = t ? "" : "none"), u.setNavigationVisibility(e, {
                navigationButtons: n
            })
        }, this.setCounterVisibility = function (e, t, n) {
            var r = u.getStepCounter(e);
            r && (t.show && n ? (r.classList.add("px-step-numbers"), r.innerHTML = "<div>" + (t.label || " of ") + "</div>", t.fontColor && (r.style.color = t.fontColor), t.fontSize && (r.style.fontSize = t.fontSize + "px")) : r.innerHTML = ""), u.setNavigationVisibility(e, {
                stepIndexWrapper: r
            })
        }, this.addSkipButton = function (t, n, r, o, a, s, c, u) {
            if (n.enabled) {
                var d = (0, i.createElement)("div", ["px-step-navigation-button", "px-step-navigation-skip"], {
                    text: s || n.text || "Skip Tour"
                });
                d.setAttribute("tabindex", u), d.setAttribute("role", "button"), e(t, n, "skip"), c(d);
                (t[l](".apt-step-footer-buttons") || t[l](".px-step-navigation-buttons")).appendChild(d), o && ((0, i.addEventListener)(d, "click", a), (0, i.addEnterKeyDownListener)(d, a))
            }
        }, this.addSnoozeButton = function (t, n, r, o, a, s, l, c) {
            if (n && n.enabled) {
                var u = (0, i.createElement)("div", ["px-step-navigation-button", "px-step-navigation-snooze"], {
                    text: a || n.text || "Show me later"
                });
                c || (u.style.display = "flex", u.style.alignItems = "center", u.style.padding = "5px"), u.setAttribute("tabindex", l), u.setAttribute("role", "button"), e(t, n, "snooze"), s(u);
                var d = t.querySelector(".apt-step-footer-buttons") || t.querySelector(".px-step-navigation-buttons"),
                    g = d.firstChild;
                d.insertBefore(u, g), r && ((0, i.addEventListener)(u, "click", o), (0, i.addEnterKeyDownListener)(u, o))
            }
        }, this.toggleSnooze = function (t, n, r, o, i, s) {
            var l = t.querySelector(".px-step-navigation-snooze");
            l ? ((0, a.applyStyle)(l, "display", n ? "block" : "none"), e(t, r, "snooze")) : u.addSnoozeButton(t, r, !1, void 0, o, i, s)
        }, this.toggle = function (t, n, r, o, i, s) {
            var c = t[l](".px-step-navigation-skip");
            c ? ((0, a.applyStyle)(c, "display", n ? "block" : "none"), e(t, r, "skip")) : u.addSkipButton(t, r, void 0, !1, void 0, o, i, s)
        }, this.populateNavigationFlags = function (e, t) {
            var n = !1;
            return (0, s.arrayFrom)(e, function (e) {
                return "DIALOG" !== e.type || 0 !== e.sequenceNumber && e.sequenceNumber !== t || (e.showStepCounter = e.showStepCounter || !1), !n && c.indexOf(e.type) > -1 ? (n = !0, e.isFirstStepNonHotspot = !0) : e.isFirstStepNonHotspot = !1, e
            })
        }, this.setStepNavigationV2Style = function (e) {
            var n = e.guideSettings,
                r = e.stepSettings,
                i = e.nextButton,
                a = e.prevButton,
                s = e.skipButtonDom,
                l = e.snoozeButtonDom,
                c = e.footerElement,
                u = e.stepPrevButtonStyleSettings,
                d = e.stepNextButtonStyleSettings,
                g = e.navigation,
                f = void 0;
            if (n.navigationV2) {
                var p = void 0;
                r.overrideFooterSettings ? (p = r.footerPaddingSettings, f = r.buttonSpace) : (p = n.footerPaddingSettings, f = n.buttonSpace), o({
                    globalSettings: n.nextButton,
                    stepSettings: d,
                    button: i,
                    parentElement: c,
                    id: "px-step-navigation-next"
                }), i.style.marginLeft = f + "px", s && (o({
                    globalSettings: n.skipButton,
                    stepSettings: n.skipButton,
                    button: s,
                    parentElement: c,
                    id: "px-step-navigation-skip"
                }), s.style.marginLeft = f + "px"), o({
                    globalSettings: n.backButton,
                    stepSettings: u,
                    button: a,
                    parentElement: c,
                    id: "px-step-navigation-back"
                }), p && (null === p.top && null === p.right && null === p.bottom && null === p.left || (c.style.padding = (p.top || 0) + "px \n                                " + (p.right || 0) + "px \n                                " + (p.bottom || 0) + "px \n                                " + (p.left || 0) + "px"))
            } else t(g, a, i);
            l && (o({
                globalSettings: n.snoozeButton,
                stepSettings: n.snoozeButton,
                button: l,
                parentElement: c,
                id: "px-step-navigation-snooze"
            }), void 0 !== f && null !== f && (a.style.marginLeft = f + "px"), n.navigationV2 || (l.style.padding = "5px"))
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getSelectorByVersion = void 0;
    var i = n(0),
        a = n(9),
        s = n(11),
        l = "querySelector",
        c = ["DIALOG", "TOOLTIP"],
        u = new o;
    t.default = u, t.getSelectorByVersion = r
}, function (e, t, n) {
    "use strict";

    function r() {
        var e = this,
            t = void 0,
            n = void 0;
        this.addListener = function (r, i, s) {
            e.removeListener(), t = function (t) {
                s(t), e.removeListener()
            }, (n = r) && (n.isDom && n.element ? ((0, o.addEventListener)(n.element, "click", t), (0, o.addEventListener)(n.element, "contextmenu", t)) : !n.isDom && n.iframeSource && a.default.addElementHandler(r.iframeSource, i, "ELEMENT_CLICK", t))
        }, this.removeListener = function () {
            n && t && (n.element && n.isDom ? ((0, o.removeEventListener)(n.element, "click", t), (0, o.removeEventListener)(n.element, "contextmenu", t)) : !n.isDom && n.iframeSource && a.default.removeElementHandlers(n.iframeSource)), n = null, t = null
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hotspotEventHandler = void 0;
    var o = n(0),
        i = n(17),
        a = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i);
    t.hotspotEventHandler = new r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        return (0, P.disableFocusOnClick)(e, ie)
    }

    function i(e, t, n) {
        this.id = e, this.type = t, this.step = n
    }

    function a(e, t, n, r, a) {
        function l(e) {
            "DIALOG" === Ae.viewType && (e.style.borderRadius = Ae.borderRadius + "px")
        }

        function u() {
            var e = Re.contentEl.getBoundingClientRect();
            le == e.width && se == e.height || ("DIALOG" === Ae.viewType && re.positionElement(Re.contentEl, null, Ae.horizontalPosition, Ae.verticalPosition, Ae.positionTopDelta, Ae.positionLeftDelta), se = e.height, le = e.width, (0, M.sendDesktopEngagementSizeEvent)("engagementResize", e, t, t.content), De && De(t, Re.contentEl))
        }

        function d() {
            Z.valueStepTypes.indexOf(Le[Oe].getSettings().type) > -1 && _e++, Oe += 1, b(Le, Oe, Oe - 1)
        }

        function f() {
            xe += 1, b(Ce, xe, xe - 1)
        }

        function b(e, n, r) {
            if (e[r].hide(), n >= e.length) return void Re.close();
            var o = e[n];
            Re.contentEl.appendChild(o.render()), Re.contentEl.setAttribute("data-step-id", o.getSettings().id), Re.contentEl.setAttribute("data-step-index", n + 1), (0, M.removeCicularTabsWrapperListener)(oe), (0, M.checkHasOverlay)(Ae.overlayColor, Ae.overlayFill) && (oe = (0, M.addCircularTabListener)(e[n].focus)), (0, P.focusElement)(ie);
            Le[Oe].getSettings().type;
            setTimeout(function () {
                if (Re) {
                    var e = Re.contentEl.getBoundingClientRect();
                    le === e.width && se === e.height || (se = e.height, le = e.width, (0, M.sendDesktopEngagementSizeEvent)("engagementResize", e, t, t.content))
                }
            })
        }

        function C(e, t) {
            var n = (0, M.getBoxShadowString)(t);
            e.style.setProperty("filter", "drop-shadow(" + n + ")"), e.style.setProperty("-webkit-filter", "drop-shadow(" + n + ")")
        }

        function w() {
            if (!E.default.isEditorMode()) {
                var n = !1,
                    r = !1,
                    o = (0, A.arrayFrom)(Pe, function (e) {
                        var t = e.step.getData();
                        return void 0 !== t.contactMeAllowed && (n = t.contactMeAllowed), r = null !== t.selected, {
                            stepId: e.id,
                            score: t.selected,
                            comment: t.comment,
                            questionType: e.type,
                            labels: t.labels || []
                        }
                    });
                if (r) {
                    var i = (0, g.addParameters)(v.eventTrackData[h.cacheGetAll](), []);
                    t.accountId && (i = (0, g.addParameters)({
                        acci: t.accountId
                    }, i)), i = (0, g.addParameters)({
                        exi: t.executionId,
                        ext: t.executionTimestamp,
                        at: t.activationType || "a",
                        cl: t.contentLocale
                    }, i), i = (0, g.addParameters)((0, U.getWebContext)(), i), Me && "kc" === t.activationType && (0, g.addParameters)(Me, i), i = (0, g.addParameters)((0, R.addFullStoryInfo)([]), i);
                    var a = {
                            ei: t.engagementId,
                            ecoi: t.content.id,
                            ent: t.content.contentType,
                            contactMeAllowed: n,
                            questions: o
                        },
                        s = (0, z.getGlobalContext)();
                    if (s && Object.assign(a, {
                            gcx: s
                        }), Ie == q.DESKTOP_CHANNEL) {
                        var l = (0, g.paramToObject)(i, {}),
                            c = H.eventCache.getKey("trackingPayload");
                        Object.assign(a, l, c || {}), m.AjaxUtil.postData(B.desktopEngagementTrackEndpoint + "/survey", a, null, null, null, !0)
                    } else m.AjaxUtil.postData(B.surveySubmitUrl + "?" + (0, g.convert2Parameters)(i), a, null, null, null, !0);
                    Ne = !0, Be = !0, o.forEach(function (n) {
                        return D.internalEventListener.dispatchEvent("surveyResponded", (0, M.toExternalEventSurvey)(t, "Responded", e, n))
                    }), D.internalEventListener.dispatchEvent("engagementCompleted", (0, M.toExternalEventSurvey)(t, "Completed"))
                }
            }
        }

        function k() {
            d(), w(), Ne = !0, Be = !0
        }

        function O(e, n, r) {
            var o = !1;
            switch (void 0 !== n.contactMeAllowed && (o = n.contactMeAllowed), e.questionType) {
                case "MULTIPLE_CHOICE_QUESTION":
                    e.selectionIds = n.choices;
                    break;
                case "OPEN_TEXT":
                    e.comment = n.comment;
                    break;
                case "DYNAMIC_RATING_STEP":
                    Object.assign(e, {
                        questionType: "SCORE",
                        score: n.selected,
                        comment: n.comment,
                        labels: n.labels || []
                    });
                    break;
                case "CONTENT":
                    break;
                default:
                    throw new Error("Survey type not supported")
            }
            var i = {
                ei: t.engagementId,
                ecoi: t.content.id,
                ent: t.content.contentType,
                lastStep: r,
                contactMeAllowed: o
            };
            "CONTENT" !== e.questionType && (i.questions = [e]);
            var a = (0, z.getGlobalContext)();
            return a && Object.assign(i, {
                gcx: a
            }), i
        }

        function F() {
            var e = (0, g.addParameters)(v.eventTrackData[h.cacheGetAll](), []);
            t.accountId && (e = (0, g.addParameters)({
                acci: t.accountId
            }, e)), e = (0, g.addParameters)((0, R.addFullStoryInfo)([]), e), e = (0, g.addParameters)({
                exi: t.executionId,
                ext: t.executionTimestamp,
                at: t.activationType || "a",
                cl: t.contentLocale
            }, e);
            (0, g.addParameters)((0, U.getWebContext)(), e);
            return Me && "kc" === t.activationType && (0, g.addParameters)(Me, e), Object.assign(e)
        }

        function W() {
            var e = Pe[_e],
                n = Pe.length === _e + 1;
            if (Be = n, d(), !E.default.isEditorMode()) {
                var r = {
                        stepId: e.id,
                        questionType: e.type
                    },
                    o = e.step.getData(),
                    i = F(),
                    a = O(r, o, n);
                if (Ie == q.DESKTOP_CHANNEL) {
                    var s = (0, g.paramToObject)(i, {}),
                        l = H.eventCache.getKey("trackingPayload");
                    Object.assign(a, s, l || {}), m.AjaxUtil.postData(B.desktopEngagementTrackEndpoint + "/survey/step", a, null, null, null, !0)
                } else m.AjaxUtil.postData(B.trackSingleStepEndpoint + "?" + (0, g.convert2Parameters)(i), a, null, null, null, !0);
                n && D.internalEventListener.dispatchEvent("engagementCompleted", (0, M.toExternalEventSurvey)(t, "Completed"))
            }
        }

        function Y() {
            for (var e = void 0, t = 0; t < Ce.length; t++)
                if (e = Ce.length - 1 - t, !Ce[e].isContentPage()) return void(Te = e)
        }

        function X(e) {
            var n = B.trackMultiStepEndpoint;
            if (!0 !== Be) {
                2 === e && (Be = !0);
                var r = F();
                (0, g.addParameters)({
                    ei: t.engagementId || null,
                    ecoi: t.content.id || null,
                    ems: e || null,
                    evi: t.matchEventId || null,
                    ent: Z.contentTypeEnumMap[t.content.contentType] || null,
                    cl: t.contentLocale
                }, r);
                var o = (0, z.getGlobalContext)();
                o && (0, g.addParameters)({
                    gcx: JSON.stringify(o)
                }, r), r = (0, g.addParameters)((0, U.getWebContext)(), r), n += "?" + (0, g.convert2Parameters)(r), m.AjaxUtil.getData(n)
            }
        }

        function ce(e) {
            return e.steps.reduce(function (e, t) {
                var n = t.getSettings(),
                    r = t.getData();
                return r.choices ? e[n.id] = r.choices : r.selected && (e[n.id] = [r.selected]), e
            }, {})
        }

        function ue() {
            try {
                var e = JSON.parse(r[xe].nextStepCondition),
                    t = Ce[xe];
                0 === e.stepConditionSet.length && e.defaultConditionAction.type === Z.CLOSE_ACTION && "END_SURVEY" === e.defaultConditionAction.value && Ae.showContactMeMessage ? t.setShowContactMe(Ae.showContactMeMessage) : t.setShowContactMe(!1)
            } catch (e) {
                L.logger.log("setShowContactMeForCurrentPage - error in parsing nextStepCondition " + e)
            }
        }

        function de(e) {
            var t = Ce[e],
                n = t.getData(),
                r = n.steps,
                o = r[r.length - 1],
                i = o.getStepNumber();
            Ce[xe].updateQuestionsNumbers(i + 1)
        }

        function ge(e, t) {
            var n = (0, $.evaluateStepConditionFilterForSurvey)(e, t),
                r = n.value,
                o = n.type,
                i = xe;
            return o === Z.GO_TO_STEP_ACTION ? (xe = we[r], ue(), b(Ce, xe, i), de(i)) : o === Z.CLOSE_ACTION && b(Ce, Ce.length + 1, i), o
        }

        function fe(e, t) {
            var n = void 0;
            try {
                var r = JSON.parse(e);
                if (r) {
                    n = ge(r, t.isContentPage() ? [] : ce(t.getData()))
                }
            } catch (e) {
                L.logger.log("Error in parsing nextStepCondition " + e)
            }
            return n
        }

        function pe(e, t, n) {
            var r = e.getSettings();
            return {
                step: {
                    stepId: r.id,
                    questionType: r.type
                },
                stepData: Object.assign({}, {
                    contactMeAllowed: t.contactMeAllowed
                }, n)
            }
        }

        function me(e) {
            var n = t.content.surveyVersion;
            if (t.content.viewType === q.VIEW_TYPE_BAR)
                if (0 === n) e.classList.add("apt-container-bar-and-combine-old");
                else {
                    var r = t.content.autoHeight;
                    e.classList.add("apt-container-bar-and-combine"), r || e.classList.add("apt-none-auto-height")
                }
        }

        function ve() {
            var e = xe,
                n = Ce[xe],
                o = void 0,
                i = r[e].nextStepCondition;
            i ? o = fe(i, n) : f();
            var a = Ce.length === xe + 1;
            if (Be = a, !E.default.isEditorMode()) {
                var s = F(),
                    l = [],
                    c = n.getData(),
                    u = n.isContentPage();
                if (!u || o === Z.CLOSE_ACTION) {
                    var d = u && o === Z.CLOSE_ACTION || Te === e;
                    if (s = (0, g.addParameters)({
                            lqsp: d
                        }, s), u && o === Z.CLOSE_ACTION) {
                        var p = pe(c.steps[0], c, {}),
                            v = p.step,
                            h = p.stepData,
                            y = O(v, h, a);
                        m.AjaxUtil.postData(B.trackSurveyCompleteEndpoint + "?" + (0, g.convert2Parameters)(s), y, null, null, null, !0)
                    } else c.steps.forEach(function (e) {
                        var t = pe(e, c, e.getData()),
                            n = t.step,
                            r = t.stepData,
                            o = O(n, r, a);
                        l.push(o)
                    }), m.AjaxUtil.postData(B.trackSinglePageEndpoint + "?" + (0, g.convert2Parameters)(s), l, null, null, null, !0);
                    a && D.internalEventListener.dispatchEvent("engagementCompleted", (0, M.toExternalEventSurvey)(t, "Completed"))
                }
            }
        }

        function he() {
            Re.close()
        }

        function ye(e, t) {
            return e.sequenceNumber - t.sequenceNumber
        }

        function be(e, t, n, r, o) {
            o = o || t.type;
            var a = V.default.SanitizeHtml(e.getHtml());
            if (a.isValid) {
                if (Pe.push(new i(t.id, o, e)), Le.push(e), r) return ++n
            } else Se.push(a.errors);
            return n
        }
        r = r || [];
        var Ee = t.content,
            Ie = (0, j.getChannel)(v.eventTrackData[h.cacheGet](v.productIdParameter)),
            Ce = [],
            Te = void 0,
            we = {},
            Se = void 0,
            ke = void 0,
            xe = 0,
            Oe = 0,
            _e = 0,
            Ae = {},
            Pe = [],
            Le = [],
            Ne = !1,
            Be = !1,
            Re = null,
            De = null,
            Me = a;
        ! function (e) {
            Object.entries(e).forEach(function (e) {
                var t = s(e, 2),
                    n = t[0],
                    r = t[1];
                Z.knownSettings.indexOf(n) > -1 && (Ae[n] = r)
            }), Ae.horizontalPosition || (Ae.horizontalPosition = "center"), Ae.verticalPosition || (Ae.verticalPosition = "center")
        }(t.content), this.render = function (i) {
            De = i, n.sort(ye), r.sort(ye).forEach(function (n, o) {
                we[n.id] = n.sequenceNumber, n.isLast = o === r.length - 1, n.showContactMeMessage = n.isLast && Ae.showContactMeMessage, n.contactMeMessage = Ae.contactMeMessage, n.orientation = Ee.orientation, n.mergeFirstSteps = Ae.mergeFirstSteps, n.snoozeButton = Ee.snoozeButton, n.surveyType = e, n.activationType = t.activationType, n.activationTypes = t.activationTypes, n.survey = t, Ce.push(new J.default(n, ve, P.disableFocusOnClick))
            });
            var a = 1;
            Se = [], ke = [];
            for (var s = void 0, f = 0; f < n.length; f++) {
                var m = Object.assign({}, n[f]);
                switch (m.isLast = f === n.length - 1 || f === n.length - 2 && "CONTENT" === n[f + 1].type && "IN_APP_MULTIPLE_QUESTION_SURVEY" !== e, m.showContactMeMessage = (m.isLast || f === n.length - 2 && "CONTENT" === n[f + 1].type && "IN_APP_MULTIPLE_QUESTION_SURVEY" === e) && Ae.showContactMeMessage, m.contactMeMessage = Ae.contactMeMessage, m.minCharsValidationText = Ae.minCharsValidationText, m.maxCharsValidationText = Ae.maxCharsValidationText, m.mandatoryValidationText = Ae.mandatoryValidationText, m.minAnswersValidationText = Ae.minAnswersValidationText, m.maxAnswersValidationText = Ae.maxAnswersValidationText, m.viewType = Ae.viewType, m.showFooter = Ae.showFooter, m.footer = Ae.footer, m.mergeFirstSteps = Ae.mergeFirstSteps, m.orientation = Ee.orientation, m.snoozeButton = Ee.snoozeButton, m.surveyType = e, m.activationType = t.activationType, m.activationTypes = t.activationTypes, m.survey = t, n[f].type) {
                    case "CONTENT":
                        (0, ee.replaceContentStepImagesDomain)(n[f]);
                        var h = new p.default(n[f].html, m, f < n.length - 1 ? d : he, o);
                        s = V.default.SanitizeHtml(h.getHtml()), s.isValid ? Le.push(h) : (Se.push(s.errors), ke.push(s.errorTypes));
                        break;
                    case "SCORE":
                        var b = void 0;
                        switch ((0, ee.replaceScoreSurveyImagesDomain)(m), e) {
                            case "IN_APP_SURVEY_NPS":
                                m.numberOfButtons = 11, m.initialButtonIndex = 0, b = new c.default(m, k, o);
                                break;
                            case "IN_APP_CES_SURVEY":
                                m.numberOfButtons = 7, m.initialButtonIndex = 1, b = new c.default(m, k, o);
                                break;
                            case "IN_APP_RATING_SURVEY":
                                "SMILEY" === m.surveyScoreType ? m.numberOfButtons = 3 : m.numberOfButtons = 5, m.initialButtonIndex = 1, b = new S.default(m, k, o)
                        }
                        be(b, m, a);
                        break;
                    case "BOOLEAN":
                        (0, ee.replaceBooleanImagesDomain)(m);
                        be(new T.default(m, k, o), m, a, !1, "SCORE");
                        break;
                    case "MULTIPLE_CHOICE_QUESTION":
                        (0, ee.replaceMultiChoiceImagesDomain)(m);
                        a = be(new x.default(m, W, a, o), m, a, !0);
                        break;
                    case "OPEN_TEXT":
                        (0, ee.replaceOpenTextImagesDomain)(m);
                        a = be(new _.default(m, W, a, o), m, a, !0);
                        break;
                    case "DYNAMIC_RATING_STEP":
                        (0, ee.replaceDynamicRangeImagesDomain)(m);
                        a = be(new Q.default(m, a), m, a, !0)
                }
            }
            if (Se.length > 0) return {
                isValid: !1,
                errors: Se
            };
            if (Ce.length > 0) {
                Le.forEach(function (e) {
                    var t = e.getSettings(),
                        n = we[t.surveyPageId];
                    Ce[n].addStep(e)
                }), Y(), Ce[Te].setShowContactMe(Ae.showContactMeMessage);
                for (var E = Te + 1; E < Ce.length; E++) Ce[E].setShowContactMe(!1);
                ue()
            }
            var O = {
                appendLocation: (0, B.getConfig)("framesetMode") ? "html" : "body",
                enableModalBodyScroll: (0, B.getConfig)("enableModalBodyScroll"),
                closeClassName: "aptr-engagement-close-btn px-close-button",
                overlayClosesOnClick: !1,
                showCloseButton: !0,
                afterOpen: function () {
                    var n = this;
                    (0, B.getConfig)("enableModalBodyScroll") && (0, B.getBody)().classList.add("apt-vex"), this.rootEl[ne].add("apt-vex"), this.contentEl[ne].add("apt-survey-popup"), this.closeEl.setAttribute("aria-label", "exit survey"), ie = this.contentEl, this.rootEl.setAttribute("data-apt-ignore-visible", !0), this.contentEl.setAttribute("data-apt-disable-selector", !0), this.rootEl[ne].add("apt-popup-disable-overlay"), this.contentEl[ne].add("apt-popup-content-disable-overlay"), this.contentEl[ne].add("apt-engagement-wrapper-survey"), this.contentEl[ne].add("apt-engagement-wrapper"), this.contentEl[ne].add("px-engagement-wrapper-survey"), this.contentEl[ne].add("px-engagement-wrapper"), (Ae.zIndex || Ae.zindex) && (this.rootEl.style.zIndex = Ae.zindex || Ae.zIndex, this.contentEl.style.zIndex = Ae.zindex || Ae.zIndex, this.overlayEl.style.zIndex = Ae.zindex || Ae.zIndex), (0, P.addStyleTag)(this.contentEl, Ae.coreStyling, "px-engagement-wrapper", ".apt-vex.vex.vex-theme-os"), (0, P.addStyleTag)(this.contentEl, Ae.engagementCoreStyling, "px-engagement-wrapper-survey", ".apt-vex.vex.vex-theme-os"), (0, P.addStyleTag)(this.contentEl, Ae.overrideStyling, "px-engagement-wrapper-survey", ".apt-vex.vex.vex-theme-os"), Array.isArray(t.content.steps) && t.content.steps.forEach(function (e) {
                        e.style && (0, P.addStyleTag)(n.contentEl, e.style, "px-engagement-wrapper-survey #step-" + e.id, ".apt-vex.vex.vex-theme-os")
                    }), Array.isArray(r) && r.forEach(function (e) {
                        e.style && (0, P.addStyleTag)(n.contentEl, e.style, "px-engagement-wrapper-survey #page-" + e.id, ".apt-vex.vex.vex-theme-os")
                    });
                    var o = "MULTIPLE_QUESTION_PER_PAGE" === Ee.contentSubType ? Ce : Le,
                        i = o[0].render(he);
                    if (this.contentEl.appendChild(i), this.contentEl.setAttribute("data-step-id", o[0].getSettings().id), this.contentEl.setAttribute("data-step-index", 1), Ae.autoHeight || (this.contentEl.style.height = Ae.height + "px"), "DIALOG" === Ae.viewType) this.contentEl.style.width = Ae.width + "px", Ie != q.DESKTOP_CHANNEL ? re.positionElement(this.contentEl, null, Ae.horizontalPosition, Ae.verticalPosition, Ae.positionTopDelta, Ae.positionLeftDelta) : (this.contentEl.style.top = 0, this.contentEl.style.left = 0);
                    else {
                        this.contentEl[ne].add("apt-survey-bar"), this.contentEl.style.width = (0, y.getPageWidth)(!0) + "px", this.contentEl.style.left = "0px";
                        var a = (Ae.barOffset || 0) + "px";
                        "TOP" === Ae.barPosition ? this.contentEl.style.top = a : this.contentEl.style.bottom = a
                    }
                    q.SCORE_SURVEY_TYPES.indexOf(e) > -1 && t.content.mergeFirstSteps && me(this.contentEl), this.contentEl.style.background = (0, g.hexToRgba)(Ae.backgroundColor, Ae.backgroundFill ? Ae.backgroundFill / 100 : 1), l(this.contentEl);
                    var s = this.rootEl.querySelector(".vex-overlay");
                    Ae.overlayFill && Ae.overlayFill > 0 && (s.style.background = (0, g.hexToRgba)(Ae.overlayColor, Ae.overlayFill ? Ae.overlayFill / 100 : 0), s.style.display = "block"), Ae.showShadow && C(this.contentEl, Ae.shadowSettings);
                    var c = this.contentEl.querySelector(".aptr-engagement-close-btn");
                    c && (0, g.addEventListener)(c, "click", function () {
                        if (-1 != Z.onXSubmitSurveys.indexOf(e) && !Ne) {
                            null !== o[Oe].getData().selected && w()
                        }
                    }), c && c.setAttribute("role", "button"), (0, M.removeCicularTabsWrapperListener)(oe), (0, M.checkHasOverlay)(Ae.overlayColor, Ae.overlayFill) && (oe = (0, M.addCircularTabListener)(o[0].focus)), (0, P.focusElement)(ie), G.default.removeElementListener(ae), ae = K.UUIDGenerator.generateV4Id(), G.default.addPXElementObserver(ae, this.contentEl, u), (0, B.getConfig)("clientSideEngagementTracking") && X(1), setTimeout(function () {
                        var e = Re.contentEl.getBoundingClientRect();
                        (0, M.sendDesktopEngagementSizeEvent)("engagementPostRender", e, t, Ae), De && De(t, Re.contentEl)
                    }, 500)
                }
            };
            return O.beforeClose = function () {
                try {
                    (0, B.getBody)().classList.remove("apt-vex"), (0, I.handleEngagementFinish)(t.content.contentType), Ie == q.DESKTOP_CHANNEL && G.default.removeElementListener(ae), (0, M.removeTabbableEnterListener)()
                } catch (e) {
                    L.logger.logInternalError(e, "Error in before close survey")
                }
            }, O.afterClose = function () {
                try {
                    setTimeout(function () {
                        Be ? (0, N.internalApt)("engagementCompletedClosed") : (0, N.internalApt)("engagementDroppedClosed")
                    }, 500)
                } catch (e) {
                    L.logger.logInternalError(e, "Error in after close survey")
                } ["SURVEY_CLOSED", "surveyClosed"].forEach(function (n) {
                    if (v.externalEventListeners[n]) try {
                        v.externalEventListeners[n]()
                    } catch (e) {
                        L.logger.logInternalError(e, "Error calling " + n + " event listener")
                    }
                    D.internalEventListener.dispatchEvent(n, (0, M.toExternalEventSurvey)(t, "Closed", e))
                }), (0, M.removeCicularTabsWrapperListener)()
            }, Re = te.open(O), {
                isValid: !0,
                errors: []
            }
        }, this.close = function () {
            Re && Re.close()
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
            function e(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }
            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        l = n(81),
        c = r(l),
        u = n(33),
        d = r(u),
        g = n(0),
        f = n(76),
        p = r(f),
        m = n(12),
        v = n(4),
        h = n(5),
        y = n(9),
        b = n(14),
        E = r(b),
        I = n(26),
        C = n(75),
        T = r(C),
        w = n(80),
        S = r(w),
        k = n(78),
        x = r(k),
        O = n(79),
        _ = r(O),
        A = n(11),
        P = n(7),
        L = n(3),
        N = n(24),
        B = n(1),
        R = n(91),
        D = n(10),
        M = n(15),
        U = n(21),
        F = n(82),
        V = r(F),
        j = n(18),
        H = n(57),
        q = n(8),
        W = n(30),
        G = r(W),
        K = n(16),
        z = n(20),
        Y = n(128),
        J = r(Y),
        X = n(77),
        Q = r(X),
        $ = n(38),
        Z = n(125),
        ee = n(25),
        te = n(31);
    te.defaultOptions.className = "vex-theme-os";
    var ne = "classList",
        re = new d.default,
        oe = void 0,
        ie = void 0,
        ae = null,
        se = null,
        le = null;
    t.default = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.knownSettings = ["borderRadius", "overlayColor", "overlayFill", "viewType", "verticalPosition", "horizontalPosition", "positionTopDelta", "positionLeftDelta", "backgroundColor", "backgroundFill", "height", "width", "autoHeight", "showShadow", "shadowSettings", "barPosition", "showContactMeMessage", "coreStyling", "overrideStyling", "engagementCoreStyling", "contactMeMessage", "minCharsValidationText", "maxCharsValidationText", "mandatoryValidationText", "minAnswersValidationText", "maxAnswersValidationText", "footer", "showFooter", "mergeFirstSteps", "zIndex", "barOffset", "zindex"], t.valueStepTypes = ["SCORE", "BOOLEAN", "MULTIPLE_CHOICE_QUESTION", "OPEN_TEXT"], t.contentTypeEnumMap = {
        IN_APP_SURVEY_NPS: 4,
        IN_APP_CES_SURVEY: 5,
        IN_APP_BOOLEAN_SURVEY: 6,
        IN_APP_RATING_SURVEY: 7,
        IN_APP_MULTIPLE_QUESTION_SURVEY: 8
    }, t.CLOSE_ACTION = "CLOSE", t.GO_TO_STEP_ACTION = "GO_TO_STEP", t.onXSubmitSurveys = ["IN_APP_SURVEY_NPS", "IN_APP_CES_SURVEY", "IN_APP_RATING_SURVEY", "IN_APP_BOOLEAN_SURVEY"]
}, function (e, t, n) {
    "use strict";

    function r() {
        var e = null;
        this.draw = function (t, n, r) {
            var o = t.content;
            return e = new i.default(o.contentType, t, o.steps, o.surveyPages, r), e.render(n)
        }, this.close = function () {
            e && e.close()
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;
    var o = n(124),
        i = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        function t(e) {
            r.style.color = e.textColor, r.style.borderColor = e.borderColor, r.style.backgroundColor = e.fillColor
        }

        function n() {
            a = !a, t(a ? d : u)
        }
        var r = (0, o.createElement)("div", ["px-survey-label"], {
            text: e.text
        });
        r.style.borderRadius = e.cornerRadius + "px", r.setAttribute("role", "button"), r.setAttribute("aria-label", e.text), r.setAttribute(i.PX_TABBABLE_ATTR, "true");
        var a = !1,
            s = e.textColor,
            l = e.borderColor,
            c = e.fillColor,
            u = {
                textColor: s,
                borderColor: l,
                fillColor: c
            },
            d = {};
        d.borderColor = e.selectedBorderColor, d.textColor = e.selectedTextColor, d.fillColor = e.selectedFillColor, t(u), (0, o.addEventListener)(r, "click", n), this.render = function () {
            return r
        }, this.setTabIndex = function (e) {
            r.setAttribute("tabindex", e)
        }, this.isSelected = function () {
            return a
        }, this.getText = function () {
            return e.text
        }, this.getId = function () {
            return e.id
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(0),
        i = n(15);
    t.default = r
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = this,
            c = void 0,
            u = void 0,
            d = a.TAB_INDEX_START,
            g = [];
        return this.addStep = function (e) {
            g.push(e)
        }, this.isValid = function () {
            var e = !0;
            return g.forEach(function (t) {
                t.isValid() || (e = !1)
            }), e
        }, this.submitSurvey = function () {
            r.isValid() && t()
        }, this.render = function (t) {
            var a = (0, o.renderSurveyTitle)(e, e.title, ["apt-survey-page-title-wrapper"], ["apt-survey-page-title"], e.sequenceNumber + 1);
            d = (0, s.setTabIndexes)(a, d);
            var l = [a];
            g.forEach(function (e) {
                "function" == typeof r.setTabIndex && e.setTabIndex(d);
                var n = e.render(t);
                n.classList.add("apt-survey-step"), l.push(n), d = e.getNextTabIndex()
            }), u = (0, o.renderContactMeCheckBox)(e, d), d += 1;
            var f = (0, o.renderContactMe)(e, u),
                p = [],
                m = (0, o.showSnooze)(e, t, p);
            m && (m.classList.add("page-snooze"), m.setAttribute("tabindex", d), d += 1);
            var v = e.buttonSetting;
            v.borderRadius = v.cornerRadius;
            var h = (0, o.renderSubmitButton)(e.buttonSetting, 0, d);
            h.classList.add("page-submit"), m && (h.style.margin = "unset"), p.push(h);
            var y = (0, i.createElement)("div", "px-survey-page-footer", null, p),
                b = ["apt-survey-page"];
            return "PORTRAIT" === e.orientation && b.push("apt-orientation-portrait"), c = (0, i.createElement)("div", b, null, l.concat([f, y])), c.setAttribute("id", "page-" + e.id), (0, i.addEnterKeyDownListener)(h, r.submitSurvey.bind(r)), (0, i.addEventListener)(h, "click", r.submitSurvey.bind(r)), n(h), c
        }, this.focus = function () {
            var e = c.querySelector("[tabindex]");
            e ? (0, l.focusElement)(e) : g.length > 0 && g[0].focus()
        }, this.hide = function () {
            c.style.display = "none"
        }, this.getData = function () {
            return {
                steps: g,
                contactMeAllowed: e.showContactMeMessage ? u.checked : null
            }
        }, this.isContentPage = function () {
            return 1 === g.length && g.some(function (e) {
                return "CONTENT" === e.getSettings().type
            })
        }, this.updateQuestionsNumbers = function (e) {
            r.isContentPage() || g.forEach(function (t, n) {
                t.updateStepNumber(e + n)
            })
        }, this.setShowContactMe = function (t) {
            e.showContactMeMessage = t
        }, this.getSettings = function () {
            return e
        }, this
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(25),
        i = n(0),
        a = n(8),
        s = n(15),
        l = n(7);
    t.default = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        function t() {
            r && (a.length > 0 && /^[~+>]$/.test(a[a.length - 1]) && a.push(" "), a.push(r))
        }
        var n, r, o, i, a = [],
            s = [0],
            l = 0,
            c = /(?:[^\\]|(?:^|[^\\])(?:\\\\)+)$/,
            u = /^\s+$/,
            d = [/\s+|\/\*|["'>~+[(]/g, /\s+|\/\*|["'[\]()]/g, /\s+|\/\*|["'[\]()]/g, null, /\*\//g];
        for (e = e.trim();;) {
            if (r = "", o = d[s[s.length - 1]], o.lastIndex = l, !(n = o.exec(e))) {
                r = e.substr(l), t();
                break
            }
            if (i = l, l = o.lastIndex, i < l - n[0].length && (r = e.substring(i, l - n[0].length)), s[s.length - 1] < 3) {
                if (t(), "[" === n[0]) s.push(1);
                else if ("(" === n[0]) s.push(2);
                else if (/^["']$/.test(n[0])) s.push(3), d[3] = new RegExp(n[0], "g");
                else if ("/*" === n[0]) s.push(4);
                else if (/^[\])]$/.test(n[0]) && s.length > 0) s.pop();
                else if (/^(?:\s+|[~+>])$/.test(n[0]) && (a.length > 0 && !u.test(a[a.length - 1]) && 0 === s[s.length - 1] && a.push(" "), 1 === s[s.length - 1] && 5 === a.length && "=" === a[2].charAt(a[2].length - 1) && (a[4] = " " + a[4]), u.test(n[0]))) continue;
                a.push(n[0])
            } else a[a.length - 1] += r, c.test(a[a.length - 1]) && (4 === s[s.length - 1] && (a.length < 2 || u.test(a[a.length - 2]) ? a.pop() : a[a.length - 1] = " ", n[0] = ""), s.pop()), a[a.length - 1] += n[0]
        }
        return a.join("").trim()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.normalizeSelector = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return i(e, !0, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }

    function o(e) {
        return i(e, !1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }

    function i(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        e = (0, d.normalizeSelector)(e);
        var o = n.querySelector(e);
        if (document.head.createShadowRoot || document.head.attachShadow) {
            if (!t && o) return o;
            return s(e, ",").reduce(function (e, o) {
                if (!t && e) return e;
                var i = s(o.replace(/^\s+/g, "").replace(/\s*([>+~]+)\s*/g, "$1"), " ").filter(function (e) {
                        return !!e
                    }).map(function (e) {
                        return s(e, ">")
                    }),
                    l = i.length - 1,
                    c = i[l][i[l].length - 1],
                    d = u(c, n, r),
                    g = a(i, l, n);
                return t ? e = e.concat(d.filter(g)) : (e = d.find(g)) || null
            }, t ? [] : null)
        }
        return t ? n.querySelectorAll(e) : o
    }

    function a(e, t, n) {
        return function (r) {
            for (var o = t, i = r, a = !1; i && !l(i);) {
                var s = !0;
                if (1 === e[o].length) s = i.matches(e[o]);
                else {
                    var u = [].concat(e[o]).reverse(),
                        d = i,
                        g = !0,
                        f = !1,
                        p = void 0;
                    try {
                        for (var m, v = u[Symbol.iterator](); !(g = (m = v.next()).done); g = !0) {
                            var h = m.value;
                            if (!d || !d.matches(h)) {
                                s = !1;
                                break
                            }
                            d = c(d, n)
                        }
                    } catch (e) {
                        f = !0, p = e
                    } finally {
                        try {
                            !g && v.return && v.return()
                        } finally {
                            if (f) throw p
                        }
                    }
                }
                if (s && 0 === o) {
                    a = !0;
                    break
                }
                s && o--, i = c(i, n)
            }
            return a
        }
    }

    function s(e, t) {
        return e.match(/\\?.|^$/g).reduce(function (e, n) {
            return '"' !== n || e.sQuote ? "'" !== n || e.quote ? e.quote || e.sQuote || n !== t ? e.a[e.a.length - 1] += n : e.a.push("") : (e.sQuote ^= 1, e.a[e.a.length - 1] += n) : (e.quote ^= 1, e.a[e.a.length - 1] += n), e
        }, {
            a: [""]
        }).a
    }

    function l(e) {
        return e.nodeType === Node.DOCUMENT_FRAGMENT_NODE || e.nodeType === Node.DOCUMENT_NODE
    }

    function c(e, t) {
        var n = e.parentNode;
        return n && n.host && 11 === n.nodeType ? n.host : n === t ? null : n
    }

    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = [];
        if (n) r = n;
        else {
            var o = function e(t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    r.push(o), o.shadowRoot && e(o.shadowRoot.querySelectorAll("*"))
                }
            };
            t.shadowRoot && o(t.shadowRoot.querySelectorAll("*")), o(t.querySelectorAll("*"))
        }
        return e ? r.filter(function (t) {
            return t.matches(e)
        }) : r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.querySelectorAllDeep = r, t.querySelectorDeep = o, t.collectAllElementsDeep = u;
    var d = n(129)
}, function (e, t, n) {
    "use strict";
    e.exports = window
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.IntegrationMapper = void 0;
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(3),
        a = n(0),
        s = n(104),
        l = s.assign,
        c = n(105);
    t.IntegrationMapper = function () {
        function e(t, n, o) {
            r(this, e), this.initialUserObj = t, this.initialAccountObj = n, this.integrationContext = o, this.mappedUserObj = null, this.mappedAccountObj = null
        }
        return o(e, [{
            key: "mapData",
            value: function () {
                var e = !1;
                switch (this.integrationContext.name) {
                    case "aptrinsic-segment":
                        this._mapSegment(), e = !0;
                        break;
                    default:
                        i.logger.log("Ignoring unknown integration " + this.integrationContext.name)
                }
                return e
            }
        }, {
            key: "getUserObj",
            value: function () {
                return this.mappedUserObj
            }
        }, {
            key: "getAccountObj",
            value: function () {
                return this.mappedAccountObj
            }
        }, {
            key: "isSegmentGroupCall",
            value: function () {
                return "aptrinsic-segment" === this.integrationContext.name && this.initialAccountObj && this.initialAccountObj.anonymousId && !(0, a.isBlank)(this.initialAccountObj.anonymousId())
            }
        }, {
            key: "_mapSegment",
            value: function () {
                c(this.integrationContext.version, "1.0.0") >= 0 && this._mapSegmentV1()
            }
        }, {
            key: "_mapSegmentV1",
            value: function () {
                var e = this.initialUserObj.traits(),
                    t = this.initialUserObj.address(),
                    n = l({}, this.initialUserObj.traits());
                if (l(n, {
                        id: this.initialUserObj.userId(),
                        email: this.initialUserObj.email(),
                        firstName: this.initialUserObj.firstName(),
                        lastName: this.initialUserObj.lastName(),
                        gender: this.initialUserObj.gender() && this.initialUserObj.gender().toUpperCase(),
                        title: e.title,
                        phone: this.initialUserObj.phone(),
                        accountId: this.initialAccountObj.groupId()
                    }), t && l(n, {
                        street: t.street,
                        countryCode: t.country,
                        stateCode: t.state,
                        city: t.city,
                        postalCode: t.postalCode
                    }), e.company) {
                    var r = e.company;
                    l(n, {
                        organization: r.name,
                        organizationIndustry: r.industry,
                        organizationEmployees: r.employee_count && r.employee_count.toString()
                    })
                }
                var o = null;
                if (this.initialAccountObj.groupId()) {
                    var i = this.initialAccountObj.traits();
                    o = l({}, i), o.id = this.initialAccountObj.groupId(), o.street = this.initialAccountObj.street(), o.city = this.initialAccountObj.city(), o.countryCode = this.initialAccountObj.country(), o.postalCode = this.initialAccountObj.zip(), o.numberOfEmployees = parseInt(i.employees)
                }
                this.mappedUserObj = n, this.mappedAccountObj = o
            }
        }]), e
    }()
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = e.entries;
        if (!t) return null;
        var n = (0, i.arrayFrom)(t, function (e) {
            var t = s(e, v),
                n = s(t.category, h);
            return t.category = n, t
        });
        return n.sort(function (e, t) {
            return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
        }), {
            entries: n
        }
    }

    function o(e) {
        var t = e.kcId,
            n = e.subscriptionId,
            r = e.propertyGroupId,
            o = e.urlPattern,
            i = e.injectionType,
            a = e.progressBarSettings,
            v = e.badgeSettings,
            h = e.windowSettings,
            y = e.floatingButtonSettings,
            b = e.onBoardingSettings,
            E = e.includePatterns,
            I = e.excludePatterns,
            C = e.enableFeedback,
            T = e.enableOnBoarding,
            w = e.articleSearchEnabled,
            S = e.articleProvider,
            k = e.articleProviderDomain,
            x = e.environments,
            O = e.name,
            _ = e.description,
            A = e.contextualSearchSetting,
            P = e.contextualSearchTerm,
            L = s(a, l),
            N = s(v, c),
            B = s(h, u),
            R = s(B.embedKCSettings, d),
            D = s(R.positionSettings, g),
            M = s(R.elementSelector, f),
            U = s(y, p),
            F = s(b, m);
        return R.positionSettings = D, R.elementSelector = M, B.embedKCSettings = R, {
            kcId: t,
            subscriptionId: n,
            propertyGroupId: r,
            urlPattern: o,
            injectionType: i,
            progressBarSettings: L,
            badgeSettings: N,
            windowSettings: B,
            floatingButtonSettings: U,
            onBoardingSettings: F,
            includePatterns: E,
            excludePatterns: I,
            enableFeedback: C,
            enableOnBoarding: T,
            articleSearchEnabled: w,
            articleProvider: S,
            articleProviderDomain: k,
            environments: x,
            name: O,
            description: _,
            contextualSearchSetting: A,
            contextualSearchTerm: P
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.filterKcContentV1 = t.filterKcConfigV1 = void 0;
    var i = n(11),
        a = n(27),
        s = a.filterProperties,
        l = ["enabled", "countArticle", "barBackgroundColor", "barFillColor", "barHeight", "barWidth", "textMessage", "textMessageColor", "textMessageFontSize", "progressValueType"],
        c = ["enabled", "backgroundColor", "textColor", "borderColor", "fontSize", "position"],
        u = ["contentBackgroundColor", "headerColor", "textColor", "hoverTextColor", "selectedTabHighlightColor", "unselectedTabColor", "headerText", "headerTextColor", "headerIcon", "headerFont", "textFont", "tooltipTextColor", "tooltipBackgroundColor", "badgeColor", "badgeTextColor", "newEngagementIcon", "completedEngagementIcon", "inProgressEngagementIcon", "categoryHoverStripeColor", "categoryHoverBackgroundColor", "categoryHoverBackgroundFill", "categoryHoverArrowColor", "submitButtonColor", "searchResultsTitleColor", "searchResultsSummeryColor", "botPosition", "botPositionOffsetBottom", "widgetHeight", "feedbackHeaderText", "docsSearchHeaderText", "showSpeechBobble", "showEngagementsType", "showCategoryIcon", "showEngagementsCompletedIndicator", "showEngagementsInProgressIndicator", "showEngagementsNotViewedIndicator", "engagementsTypeColor", "engagementsNotViewedIndicatorColor", "engagementsInProgressIndicatorColor", "engagementsCompletedIndicatorColor", "categoryColor", "embedKCSettings", "showReadMore", "botPositionHorizontalOffset", "allowDismiss", "dismissButtonColor"],
        d = ["horizontalAlignment", "verticalAlignment", "positionSettings", "elementSelector"],
        g = ["positionVertical", "positionHorizontal", "positionTopDelta", "positionLeftDelta"],
        f = ["cssSelector", "type", "unique", "matchCssSelector", "matchTextRule", "textRule"],
        p = ["openStateColor", "closedStateColor", "iconCloseColor", "openStateIcon", "closedStateIcon", "rightPadding", "bottomPadding", "iconOpenColor", "useImage", "draggable", "imageUrl"],
        m = ["autoSuggestionType", "suggestionText", "completionText", "backgroundColor", "textColor"],
        v = ["id", "kcId", "propertyGroupId", "entryType", "linkUrl", "engagementId", "containingListType", "title", "description", "sequence", "absoluteTargetUrl", "sdkRule", "category", "articleTitleHtml", "articleBodyHtml", "articleAuthor", "articleDate", "articleProvider", "articlePropertyGroupId", "knowledgeBaseReferenceId"],
        h = ["id", "name", "subtitle", "showBadge"];
    t.filterKcConfigV1 = o, t.filterKcContentV1 = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = e.entries;
        if (!t) return null;
        var n = (0, i.arrayFrom)(t, function (e) {
            var t = s(e, h),
                n = s(t.category, b);
            return t.category = n, t
        });
        return n.sort(function (e, t) {
            return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
        }), {
            entries: n
        }
    }

    function o(e) {
        var t = e.kcId,
            n = e.subscriptionId,
            r = e.propertyGroupId,
            o = e.urlPattern,
            i = e.injectionType,
            a = e.progressBarSettings,
            h = e.badgeSettings,
            b = e.tabsSettings,
            E = e.windowSettings,
            I = e.floatingButtonSettings,
            C = e.onBoardingSettings,
            T = e.includePatterns,
            w = e.excludePatterns,
            S = e.enableFeedback,
            k = e.enableOnBoarding,
            x = e.articleSearchEnabled,
            O = e.articleProvider,
            _ = e.articleProviderDomain,
            A = e.environments,
            P = e.name,
            L = e.description,
            N = e.contextualSearchSetting,
            B = e.contextualSearchTerm,
            R = e.staticFields,
            D = s(a, l),
            M = s(h, c),
            U = s(b, u),
            F = s(R, y),
            V = s(E, d),
            j = s(V.embedKCSettings, g),
            H = s(j.positionSettings, f),
            q = s(j.elementSelector, p),
            W = s(I, m),
            G = s(C, v);
        return j.positionSettings = H, j.elementSelector = q, V.embedKCSettings = j, {
            kcId: t,
            subscriptionId: n,
            propertyGroupId: r,
            urlPattern: o,
            injectionType: i,
            progressBarSettings: D,
            badgeSettings: M,
            tabsSettings: U,
            windowSettings: V,
            floatingButtonSettings: W,
            onBoardingSettings: G,
            includePatterns: T,
            excludePatterns: w,
            enableFeedback: S,
            enableOnBoarding: k,
            articleSearchEnabled: x,
            articleProvider: O,
            articleProviderDomain: _,
            environments: A,
            name: P,
            description: L,
            contextualSearchSetting: N,
            contextualSearchTerm: B,
            staticFields: F
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.filterKcContentV2 = t.filterKcConfigV2 = void 0;
    var i = n(11),
        a = n(27),
        s = a.filterProperties,
        l = ["enabled", "countArticle", "barBackgroundColor", "barFillColor", "barHeight", "barWidth", "categoriesSectionTitle", "textMessage", "textMessageColor", "textMessageFontSize", "progressValueType"],
        c = ["enabled", "backgroundColor", "textColor", "borderColor", "fontSize", "position"],
        u = ["id", "hideSingleTab", "onboardingIcon", "feedbackIcon", "knowledgeBaseIcon", "onboardingIconColor", "feedbackIconColor", "knowledgeBaseIconColor", "onboardingTabIndex", "feedbackTabIndex", "knowledgeBaseTabIndex"],
        d = ["contentBackgroundColor", "headerColor", "textColor", "hoverTextColor", "selectedTabHighlightColor", "unselectedTabColor", "headerText", "headerTextColor", "headerIcon", "headerFont", "textFont", "tooltipTextColor", "tooltipBackgroundColor", "badgeColor", "badgeTextColor", "newEngagementIcon", "completedEngagementIcon", "inProgressEngagementIcon", "categoryHoverStripeColor", "categoryHoverBackgroundColor", "categoryHoverBackgroundFill", "categoryHoverArrowColor", "submitButtonColor", "searchResultsTitleColor", "searchResultsSummeryColor", "botPosition", "botPositionOffsetBottom", "widgetHeight", "feedbackHeaderText", "docsSearchHeaderText", "showSpeechBobble", "showEngagementsType", "showCategoryIcon", "showEngagementsCompletedIndicator", "showEngagementsInProgressIndicator", "showEngagementsNotViewedIndicator", "engagementsTypeColor", "engagementsNotViewedIndicatorColor", "engagementsInProgressIndicatorColor", "engagementsCompletedIndicatorColor", "categoryColor", "embedKCSettings", "showReadMore", "botPositionHorizontalOffset", "allowDismiss", "dismissButtonColor", "enableOnboardingSearch", "knowledgeBaseSearchText"],
        g = ["horizontalAlignment", "verticalAlignment", "positionSettings", "elementSelector"],
        f = ["positionVertical", "positionHorizontal", "positionTopDelta", "positionLeftDelta"],
        p = ["cssSelector", "type", "unique", "matchCssSelector", "matchTextRule", "textRule"],
        m = ["openStateColor", "closedStateColor", "iconCloseColor", "openStateIcon", "closedStateIcon", "rightPadding", "bottomPadding", "iconOpenColor", "useImage", "draggable", "imageUrl"],
        v = ["autoSuggestionType", "suggestionText", "completionText", "backgroundColor", "textColor"],
        h = ["id", "kcId", "propertyGroupId", "entryType", "linkUrl", "engagementId", "containingListType", "title", "description", "sequence", "absoluteTargetUrl", "sdkRule", "category", "articleTitleHtml", "articleBodyHtml", "articleAuthor", "articleDate", "articleProvider", "articlePropertyGroupId", "knowledgeBaseReferenceId"],
        y = ["guideRedirectMessage", "guideRedirectConfirmButton", "guideRedirectCancelButton", "feedbackDropdownIssue", "feedbackDropdownFeatureRequest", "feedbackDropdownGeneralFeedback", "feedbackDropdownOther", "feedbackSubjectPlaceholder", "feedbackDescriptionPlaceholder", "feedbackSubmitButtonLabel", "feedbackThankYouMessage", "feedbackLeaveAnotherMessage", "knowledgeBaseBlankSearchMessage", "knowledgeBaseNoResultMessage", "knowledgeBaseInputPlaceholder", "knowledgeBaseFailureMessage"],
        b = ["id", "name", "subtitle", "showBadge"];
    t.filterKcConfigV2 = o, t.filterKcContentV2 = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = e.entries;
        if (!t) return null;
        var n = (0, i.arrayFrom)(t, function (e) {
            var t = s(e, h),
                n = s(t.category, b);
            return t.category = n, t
        });
        return n.sort(function (e, t) {
            return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
        }), {
            entries: n
        }
    }

    function o(e) {
        var t = e.kcId,
            n = e.subscriptionId,
            r = e.propertyGroupId,
            o = e.urlPattern,
            i = e.injectionType,
            a = e.progressBarSettings,
            h = e.badgeSettings,
            b = e.tabsSettings,
            E = e.windowSettings,
            I = e.floatingButtonSettings,
            C = e.onBoardingSettings,
            T = e.includePatterns,
            w = e.excludePatterns,
            S = e.enableFeedback,
            k = e.enableOnBoarding,
            x = e.articleSearchEnabled,
            O = e.articleProvider,
            _ = e.articleProviderDomain,
            A = e.environments,
            P = e.name,
            L = e.description,
            N = e.contextualSearchSetting,
            B = e.contextualSearchTerm,
            R = e.staticFields,
            D = s(a, l),
            M = s(h, c),
            U = s(b, u),
            F = s(R, y),
            V = s(E, d),
            j = s(V.embedKCSettings, g),
            H = s(j.positionSettings, f),
            q = s(j.elementSelector, p),
            W = s(I, m),
            G = s(C, v);
        return j.positionSettings = H, j.elementSelector = q, V.embedKCSettings = j, {
            kcId: t,
            subscriptionId: n,
            propertyGroupId: r,
            urlPattern: o,
            injectionType: i,
            progressBarSettings: D,
            badgeSettings: M,
            tabsSettings: U,
            windowSettings: V,
            floatingButtonSettings: W,
            onBoardingSettings: G,
            includePatterns: T,
            excludePatterns: w,
            enableFeedback: S,
            enableOnBoarding: k,
            articleSearchEnabled: x,
            articleProvider: O,
            articleProviderDomain: _,
            environments: A,
            name: P,
            description: L,
            contextualSearchSetting: N,
            contextualSearchTerm: B,
            staticFields: F
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.filterKcContentV3 = t.filterKcConfigV3 = void 0;
    var i = n(11),
        a = n(27),
        s = a.filterProperties,
        l = ["enabled", "countArticle", "barBackgroundColor", "barFillColor", "barHeight", "barWidth", "categoriesSectionTitle", "textMessage", "textMessageColor", "textMessageFontSize", "progressValueType"],
        c = ["enabled", "backgroundColor", "textColor", "borderColor", "fontSize", "position"],
        u = ["id", "hideSingleTab", "onboardingIcon", "feedbackIcon", "knowledgeBaseIcon", "onboardingIconColor", "feedbackIconColor", "knowledgeBaseIconColor", "onboardingTabIndex", "feedbackTabIndex", "knowledgeBaseTabIndex"],
        d = ["contentBackgroundColor", "headerColor", "textColor", "hoverTextColor", "selectedTabHighlightColor", "unselectedTabColor", "headerText", "headerTextColor", "headerIcon", "headerFont", "textFont", "tooltipTextColor", "tooltipBackgroundColor", "badgeColor", "badgeTextColor", "newEngagementIcon", "completedEngagementIcon", "inProgressEngagementIcon", "categoryHoverStripeColor", "categoryHoverBackgroundColor", "categoryHoverBackgroundFill", "categoryHoverArrowColor", "submitButtonColor", "searchResultsTitleColor", "searchResultsSummeryColor", "botPosition", "botPositionOffsetBottom", "widgetHeight", "feedbackHeaderText", "docsSearchHeaderText", "showSpeechBobble", "showEngagementsType", "showCategoryIcon", "showEngagementsCompletedIndicator", "showEngagementsInProgressIndicator", "showEngagementsNotViewedIndicator", "engagementsTypeColor", "engagementsNotViewedIndicatorColor", "engagementsInProgressIndicatorColor", "engagementsCompletedIndicatorColor", "categoryColor", "embedKCSettings", "showReadMore", "botPositionHorizontalOffset", "allowDismiss", "dismissButtonColor", "enableOnboardingSearch", "knowledgeBaseSearchText"],
        g = ["horizontalAlignment", "verticalAlignment", "positionSettings", "elementSelector"],
        f = ["positionVertical", "positionHorizontal", "positionTopDelta", "positionLeftDelta"],
        p = ["cssSelector", "type", "unique", "matchCssSelector", "matchTextRule", "textRule"],
        m = ["openStateColor", "closedStateColor", "iconCloseColor", "openStateIcon", "closedStateIcon", "rightPadding", "bottomPadding", "iconOpenColor", "useImage", "draggable", "imageUrl"],
        v = ["autoSuggestionType", "suggestionText", "completionText", "backgroundColor", "textColor"],
        h = ["id", "kcId", "propertyGroupId", "entryType", "linkUrl", "engagementId", "containingListType", "title", "description", "sequence", "absoluteTargetUrl", "sdkRule", "category", "articleTitleHtml", "articleBodyHtml", "articleAuthor", "articleDate", "articleProvider", "articlePropertyGroupId", "knowledgeBaseReferenceId"],
        y = ["guideRedirectMessage", "guideRedirectConfirmButton", "guideRedirectCancelButton", "feedbackDropdownIssue", "feedbackDropdownFeatureRequest", "feedbackDropdownGeneralFeedback", "feedbackDropdownOther", "feedbackSubjectPlaceholder", "feedbackDescriptionPlaceholder", "feedbackSubmitButtonLabel", "feedbackThankYouMessage", "feedbackLeaveAnotherMessage", "knowledgeBaseBlankSearchMessage", "knowledgeBaseNoResultMessage", "knowledgeBaseInputPlaceholder", "knowledgeBaseFailureMessage"],
        b = ["id", "name", "subtitle", "showBadge"];
    t.filterKcConfigV3 = o, t.filterKcContentV3 = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return a.logger.log("SDK Posting global context to KC"), {
            type: s,
            globalContext: e
        }
    }

    function o() {
        return a.logger.log("SDK Posting current url to KC"), {
            type: l,
            url: (0, i.getPageUrl)()
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getGlobalContextMessage = r, t.getUrlMessage = o;
    var i = n(0),
        a = n(3),
        s = "APT_WIDGET_GLOBAL_CONTEXT",
        l = "APT_WIDGET_URL"
}, function (e, t, n) {
    "use strict";

    function r() {
        this.getAttribute = function () {
            return "url"
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(0);
    r.prototype.matchRules = function (e, t, n) {
        return "all" === t ? e.every(function (e) {
            return (0, o.matchUrl)(e.value, n, "is" !== e.operator, "isNot" === e.operator)
        }) : e.some(function (e) {
            return (0, o.matchUrl)(e.value, n, "is" !== e.operator, "isNot" === e.operator)
        })
    };
    var i = new r;
    t.default = i
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = 0; n < e.length; n++)
            if (t(e[n])) return n;
        return -1
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.findIndex = r
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = !1;
        return null === e ? r = t : n === l ? r = t || e : n === c && (r = t && e), r
    }

    function o(e, t, n, r) {
        t.push(e), n.push(null), r.push(null)
    }

    function i(e, t, n, o, i) {
        e.pop(), "boolean" == typeof i && (t[o] = r(t[o], i, n[o]));
        var a = e[e.length - 1];
        void 0 !== a && (t[a] = r(t[a], t[o], n[a]))
    }

    function a(e, t, n, o, i, a) {
        var s = a;
        return "boolean" == typeof n && (e[o] = r(e[o], n, t[o])), t[o] = i, i === l ? s += 1 : i === c && (s += 2), s
    }

    function s(e, t) {
        var n = [],
            s = [],
            g = [];
        e[0] !== u && (e = "" + u + e + d);
        for (var f = -1, p = "", m = 0; m < e.length; m++) {
            var v = e[m],
                h = n[n.length - 1],
                y = v === u,
                b = v === d;
            if (y) f += 1, o(f, n, s, g), p = "";
            else if (b) i(n, s, g, h, t[p]), p = "";
            else if (" " === v) g[h] && "boolean" == typeof t[p] && (s[h] = r(s[h], t[p], g[h]), p = "");
            else {
                var E = (v + e[m + 1]).toUpperCase() === l,
                    I = (v + e[m + 1] + e[m + 2]).toUpperCase() === c;
                E || I ? (m = a(s, g, t[p], h, E ? l : c, m), p = "") : p += v
            }
        }
        return s[0]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = s;
    var l = "OR",
        c = "AND",
        u = "(",
        d = ")"
}, function (e, t, n) {
    "use strict";

    function r(e) {
        try {
            for (var t = window, n = e && e.split("."), r = n && n.pop(), o = 0; o < n.length; o++) t = t[n[o]];
            if ("function" == typeof t[r]) return t[r].apply(t)
        } catch (e) {
            console.error("apt. Failed to execute function. Error is", e)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.executeFunctionByName = r
}, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        if (e.hasAttribute(t)) {
            var o = e.getAttribute(t),
                i = document.createElement("a");
            i.href = o, 0 === o.indexOf(r) && (i.href = o.replace(r, n), e.setAttribute(t, i.href))
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.replaceAllDomains = r
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = l[e];
        if (n) return t(n);
        var r = u[e];
        return i.AjaxUtil.getData(r, function (n) {
            var r = (0, s.toDom)(n, !0);
            return l[e] = r, t(r)
        }), null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getImage = t.IMAGE_MAP = void 0;
    var o = n(5),
        i = n(12),
        a = n(1),
        s = n(7),
        l = new o.LocalCache,
        c = function (e) {
            return a.staticContentHost + "/images/" + e + ".svg"
        },
        u = t.IMAGE_MAP = {
            unsatisfied: c("unsatisfied"),
            satisfied: c("satisfied"),
            neutral: c("neutral")
        };
    t.getImage = r
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 1.5l12 13.125-12 13.125"></path></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><g stroke-width="4"><path d="M13.5 5.25l9.375 9.375L13.5 24M23.25 14.5h-18"></path></g></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g><path d="m15,3.75l12.75,11.25l-12.75,11.25l-5.25,0l12.75,-11.25l-12.75,-11.25l5.25,0z"></path><path d="m3,13l21,0l0,3.75l-21,0l0,-3.75z"></path></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><g stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M15.75 7.5l6 7.5-6 7.5M6.75 15h15"></path></g></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g><path d="m2.75,13.75l21,0l0,3l-21,0l0,-3z"></path><path d="m15.5,23.442l2.09,2.058l10.285,-10.125l-10.284,-10.125l-2.091,2.058l8.194,8.067l-8.194,8.067z" fill-rule="nonzero"></path></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.695 16.125l-4.32 4.253 1.394 1.372L23.625 15l-6.856-6.75-1.394 1.372 4.32 4.253H7.5v2.25h12.195z"></path></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path stroke="none" d="m12.06,10.304l1.47,4.386c0.059,0.17 0.059,0.45 0,0.621l-1.47,4.386c-0.174,0.518 0.046,0.707 0.491,0.422l7.475,-4.774c0.3,-0.19 0.298,-0.499 0,-0.689l-7.475,-4.774c-0.444,-0.283 -0.665,-0.096 -0.492,0.422l0.001,0z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path stroke="none" d="m10.05,6.097a0.664,0.664 0 0 0 -0.3,0.537c1.493,2.912 3.285,5.865 4.731,8.366l-4.64,8.043a0.662,0.662 0 0 0 0.12,0.788c0.21,0.196 0.555,0.225 0.793,0.067c4.154,-2.896 8.47,-5.765 12.185,-8.346c0.148,-0.11 0.311,-0.225 0.311,-0.553a0.656,0.656 0 0 0 -0.281,-0.533c-4.194,-2.855 -8.465,-5.794 -12.205,-8.355c-0.296,-0.166 -0.435,-0.125 -0.714,-0.014z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path stroke="none" d="m25.682,16.355c0.762,-0.77 0.756,-2.02 -0.01,-2.792l-9.083,-9.116c-2.12,-2.113 -5.301,1.057 -3.181,3.17l3.963,3.95c0.66,0.658 0.437,1.19 -0.485,1.19l-10.886,0a2.247,2.247 0 0 0 -2.25,2.243a2.246,2.246 0 0 0 2.25,2.241l10.886,0c0.927,0 1.149,0.532 0.485,1.194l-3.963,3.947c-2.12,2.115 1.06,5.285 3.18,3.17l9.094,-9.197z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path stroke="none" d="m27.508,15.032l-13.964,8.693l0,-6.015l-11.081,0l0,-5.45l11.08,0l0,-5.92l13.965,8.692zm1.742,0c0,-0.63 -0.33,-1.228 -0.841,-1.575l-13.964,-8.693a1.653,1.653 0 0 0 -1.742,-0.032c-0.541,0.315 -0.87,0.913 -0.87,1.575l0,4.094l-9.342,0c-0.96,0 -1.742,0.82 -1.742,1.827l0,5.449c0,1.008 0.781,1.827 1.742,1.827l9.34,0l0,4.189c0,0.662 0.331,1.26 0.87,1.575c0.541,0.315 1.202,0.315 1.743,-0.032l13.964,-8.693c0.51,-0.283 0.841,-0.881 0.841,-1.511l0.001,0z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path stroke="none" d="m16.616,22.44a0.591,0.591 0 0 1 -0.345,-0.533l0,-3.365l-10.331,1.423a0.625,0.625 0 0 1 -0.482,-0.14a0.591,0.591 0 0 1 -0.208,-0.447l0.003,-8.76c0,-0.17 0.077,-0.336 0.208,-0.448a0.615,0.615 0 0 1 0.482,-0.14l10.331,1.423l0,-3.362c0,-0.229 0.134,-0.435 0.345,-0.533a0.62,0.62 0 0 1 0.641,0.072l8.765,6.905a0.587,0.587 0 0 1 0,0.922l-8.77,6.908a0.597,0.597 0 0 1 -0.639,0.075zm8.066,-7.444l-7.199,-5.67l0,3.485l-11.019,-1.511l0,7.4l11.019,-1.512l0,3.488l7.2,-5.679l-0.001,-0.001z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12.5 3l9.75 11.625L12.5 26.25"></path></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><path stroke-width="4" d="M11.5 5.25l9.375 9.375L11.5 24"></path></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path stroke="none" d="m13,3.75l12.75,11.25l-12.75,11.25l-5.25,0l12.75,-11.25l-12.75,-11.25l5.25,0z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12.75 7.5l6 7.5-6 7.5"></path></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path stroke="none" d="m10.5,23.442l2.09,2.058l10.285,-10.125l-10.284,-10.125l-2.091,2.058l8.194,8.067l-8.194,8.067z" fill-rule="nonzero"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.378l1.394 1.372L20.25 15l-6.856-6.75L12 9.622 17.463 15z"></path></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15.75 1.5l12 13.125-12 13.125M2.25 14.5h24"></path></g></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><g stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path d="M3.75 14.5H24M16.5 3l9.75 11.625L16.5 26.25"></path></g></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 15l7 6L24 9"></path></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g fill-rule="evenodd" fill="none"><path stroke="none" d="m0,0l30,0l0,30l-30,0l0,-30z"></path><g stroke-width="4" stroke-linejoin="round" stroke-linecap="round"><path d="m15.75,7.5l6,7.5l-6,7.5m-9,-7.5l15,0"></path></g></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path d="m5,21.237c0.261,-3.28 1.917,-9.413 10.625,-9.413l0,-3.204c-0.001,-0.234 0.13,-0.45 0.336,-0.555a0.602,0.602 0 0 1 0.64,0.06l8.01,6.082c0.245,0.187 0.389,0.48 0.389,0.79a0.99,0.99 0 0 1 -0.39,0.79l-7.999,6.08a0.601,0.601 0 0 1 -0.647,0.069a0.618,0.618 0 0 1 -0.34,-0.564l0,-3.204s-5.678,-1.057 -9.534,3.526a0.62,0.62 0 0 1 -0.703,0.16a0.636,0.636 0 0 1 -0.386,-0.617l-0.001,0z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path d="m21.058,12.17l-3.12,-3.242a1.427,1.427 0 0 1 0,-2.012a1.416,1.416 0 0 1 2.005,0l5.647,5.665a1.42,1.42 0 0 1 0,1.997l-5.648,5.665a1.408,1.408 0 0 1 -1.996,0.007a1.42,1.42 0 0 1 -0.008,-2.004l3.12,-3.243l-9.822,0c-0.387,0 -0.758,0.158 -1.025,0.44a1.42,1.42 0 0 0 -0.387,1.047l0,5.594c0,0.782 -0.632,1.416 -1.412,1.416c-0.78,0 -1.411,-0.634 -1.411,-1.416l0,-5.594a4.258,4.258 0 0 1 1.214,-3.05a4.229,4.229 0 0 1 3.02,-1.27l9.823,0z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path d="m12.986,22l-5.986,-5.621l1.513,-1.63l4.321,4.052l9.502,-10.801l1.664,1.479l-11.014,12.521z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path strok="none" d="m10.288,14.997l3.617,2.63l7.593,-9.584a1.352,1.352 0 0 1 1.838,-0.313l0.101,0.071c0.597,0.404 0.743,1.197 0.324,1.773l-8.285,12.307c-0.313,0.43 -0.623,0.58 -1.168,0.615c-0.545,0.035 -0.875,-0.16 -1.202,-0.476l-4.715,-5.197a1.256,1.256 0 0 1 0,-1.823l0.007,-0.003a1.373,1.373 0 0 1 1.89,0z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path d="m8.133,11.868l6.355,4.846l9.237,-10.374a1.021,1.021 0 0 1 1.431,-0.09c0.378,0.33 0.454,0.885 0.179,1.303l-10.847,16.447l-7.798,-10.752a0.997,0.997 0 0 1 0.233,-1.4c0.364,-0.26 0.856,-0.251 1.21,0.02z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M23.206 8.831A2.636 2.636 0 0 0 21.286 8c-.725 0-1.407.295-1.918.831l-6.053 6.322-2.684-2.805a2.635 2.635 0 0 0-1.919-.831c-.724 0-1.407.295-1.92.831-1.056 1.105-1.056 2.904.001 4.01l4.602 4.809a2.618 2.618 0 0 0 3.41.367c.156-.108.3-.23.428-.365l7.97-8.327A2.884 2.884 0 0 0 24 10.837a2.888 2.888 0 0 0-.794-2.006z"></path></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.695 16.125l-4.32 4.253 1.394 1.372L23.625 15l-6.856-6.75-1.394 1.372 4.32 4.253H7.5v2.25h12.195z"></path></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g fill="none" fill-rule="evenodd"><path stroke="none" d="M0 0h30v30H0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M17.332 8.003c.08.011.156.045.22.098l7.273 6.034c.11.091.175.232.175.38 0 .15-.065.29-.175.381l-7.273 6.034a.432.432 0 0 1-.476.052.487.487 0 0 1-.256-.43v-2.42c-.576-.025-1.863-.06-3.764.287-2.268.413-5.046 1.367-7.302 3.461a.433.433 0 0 1-.55.04.498.498 0 0 1-.182-.552c1.899-6.21 7.676-9.169 11.798-10.347V8.487c0-.14.054-.273.153-.365a.435.435 0 0 1 .359-.118v-.001z"></path></g></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path d="m10.05,6.097a0.664,0.664 0 0 0 -0.3,0.537c1.493,2.912 3.285,5.865 4.731,8.366l-4.64,8.043a0.662,0.662 0 0 0 0.12,0.788c0.21,0.196 0.555,0.225 0.793,0.067c4.154,-2.896 8.47,-5.765 12.185,-8.346c0.148,-0.11 0.311,-0.225 0.311,-0.553a0.656,0.656 0 0 0 -0.281,-0.533c-4.194,-2.855 -8.465,-5.794 -12.205,-8.355c-0.296,-0.166 -0.435,-0.125 -0.714,-0.014z"></path></svg>'
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path d="m9,6.634c6.353,8.365 0.09,16.41 0.09,16.41a0.662,0.662 0 0 0 0.12,0.787c0.21,0.196 0.556,0.225 0.794,0.067c4.154,-2.896 8.47,-5.765 12.185,-8.346c0.148,-0.11 0.311,-0.225 0.311,-0.553a0.656,0.656 0 0 0 -0.281,-0.533c-4.194,-2.855 -8.465,-5.794 -12.205,-8.355c-0.296,-0.166 -0.435,-0.125 -0.714,-0.014a0.665,0.665 0 0 0 -0.3,0.537z"></path></svg>'
}, function (e, t) {
    (function (t) {
        e.exports = t
    }).call(t, {})
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e) {
        if (y.default.isEditorMode()) y.default.saveConfig();
        else {
            (new m.EventTracker).initCollector(), (0, P.isWebApp)(e) || E.default.init(), (0, S.appReady)(), x.default.init(), _.default.init(), N.default.init()
        }
    }

    function i() {
        y.default.isEditorMode() || (0, f.featureEnabled)("pageView") && (0, S.internalApt)("pageview")
    }

    function a(e) {
        y.default.isEditorMode() && y.default.loadEditor(e) && (0, y.default)("setConfig", (0, f.getConfigObj)()) && (0, y.default)("init", e)
    }

    function s() {
        (0, f.registerConfigChangeHandler)("enableTag", function (e, t) {
            !e && t ? l(H, q) : e && !1 == !t && A.KnowledgeCenterManager.removeWidget()
        }), (0, f.registerConfigChangeHandler)("widgetEnabled", function (e, t) {
            "loading" !== document.readyState && (!e && t ? A.KnowledgeCenterManager.initWidget({
                apiKey: g.eventTrackData.data[g.productIdParameter],
                aptId: g.eventTrackData.data[g.aptrinsicIdParam]
            }) : e && !t && A.KnowledgeCenterManager.removeWidget())
        })
    }

    function l(e, t, n) {
        p.AjaxUtil.loadFile("css", (0, f.getAssetEndpoint)("style") + "?a=" + e, (0, f.getConfig)("crossOriginStyle") || e && -1 !== e.indexOf("AP-7SBC7L5BZ8ML")), g.eventTrackData[d.cacheSet](g.productIdParameter, e), g.eventTrackData[d.cacheSet]("sv", g.applicationVersion), (0, f.isIframe)() || (v.UserData.initializeUser(e), g.eventTrackData[d.cacheSet](g.userIdParameter, v.UserData.getUserId()), g.eventTrackData[d.cacheSet]("vt", v.UserData.getUserType()), g.eventTrackData[d.cacheSet]("ai", v.UserData.getAptrinisId()), g.eventTrackData[d.cacheSet](g.sessionIdParam, v.UserData.getSessionId())), t = F.q, t && t.length > 0 && M.default.call(t), g.windowRef[g.aptrinsicGlobalObjName] = R.aptExternal, a(e), o(e), i(), g.windowRef[g.aptrinsicGlobalObjName].init = !0;
        var r = (0, w.isOndemandState)();
        if (r) {
            var s = (0, A.getKcDataFromSessionStorage)(),
                l = s.kcId,
                c = s.categoryId;
            (0, A.getKcEngagement)(r, !1, l, c)
        }!(0, f.isIframe)() && w.isStartOverState && (0, w.startOverEngagement)(function (e) {
            T.EngagementDrawer.draw([e], !0)
        })
    }

    function c() {
        setTimeout(function () {
            return (0, R.initKnowledgeCenterWrapper)(!1, !0, function (e) {
                e || setTimeout(function () {
                    return W(!1, !1)
                }, j)
            })
        }, j)
    }
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        d = n(5),
        g = n(4),
        f = n(1),
        p = n(12),
        m = n(394),
        v = n(23),
        h = n(14),
        y = r(h),
        b = n(97),
        E = r(b),
        I = n(10),
        C = n(3),
        T = n(44),
        w = n(26),
        S = n(24),
        k = n(379),
        x = r(k),
        O = n(87),
        _ = r(O),
        A = n(29),
        P = n(0),
        L = n(34),
        N = r(L),
        B = n(99),
        R = n(65),
        D = n(98),
        M = r(D),
        U = n(101),
        F = g.windowRef[g.aptrinsicGlobalObjName],
        V = 6e5,
        j = 750;
    Object.entries || (Object.entries = function (e) {
        for (var t = Object.keys(e), n = t.length, r = new Array(n); n--;) r[n] = [t[n], e[t[n]]];
        return r
    }), String.prototype.startsWith || (String.prototype.startsWith = function (e, t) {
        return this.substr(!t || t < 0 ? 0 : +t, e.length) === e
    }), Object.keys || (Object.keys = function () {
        var e = Object.prototype.hasOwnProperty,
            t = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            r = n.length;
        return function (o) {
            if ("function" != typeof o && ("object" !== (void 0 === o ? "undefined" : u(o)) || null === o)) throw new TypeError("Object.keys called on non-object");
            var i = [],
                a = void 0,
                s = void 0;
            for (a in o) e.call(o, a) && i.push(a);
            if (t)
                for (s = 0; s < r; s++) e.call(o, n[s]) && i.push(n[s]);
            return i
        }
    }()), Object.values || (Object.values = function (e) {
        return Object.keys(e).map(function (t) {
            return e[t]
        })
    }), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) {
        t = t || window;
        for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this)
    }), String.prototype.endsWith || (String.prototype.endsWith = function (e, t) {
        return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
    });
    var H = void 0,
        q = void 0;
    try {
        if (!0 !== g.windowRef[g.aptrinsicGlobalObjName].init) {
            if (!F) throw new Error("cannot initiate without tag");
            H = F.p, g.eventTrackData[d.cacheSet](g.productIdParameter, H), (0, f.setCachedConfig)(B.tagConfigKeyName, F.c), H ? function () {
                (0, U.copyLocalStorageToSessionStorageGuideKeys)(), s(), (0, f.overrideConfig)((0, f.getCachedConfig)(B.tagConfigKeyName), !1), y.default.saveConfig(), setInterval(function () {
                    (0, B.getServerConfiguration)(!1, H, q, (0, f.getCachedConfig)(B.tagConfigKeyName), l)
                }, V), (0, B.getServerConfiguration)(!0, H, q, (0, f.getCachedConfig)(B.tagConfigKeyName), l), I.internalEventListener.addListener("identify", c), I.internalEventListener.addListener("set", function (e) {
                    return "user" === e && c()
                }), I.internalEventListener.addListener("sessionInitialized", c), I.internalEventListener.addListener("sessionExpired", w.hideAnyActiveEngagement)
            }() : C.logger.logInternalError(new Error("Tag does not contain proper API key"))
        }
    } catch (e) {
        C.logger.logInternalError(e)
    }
    var W = (0, P.debounce)(R.initKnowledgeCenterWrapper, j)
}, , , , , function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o() {
        function e(e) {
            if ((0, l.isValidCallingDomain)(e.origin)) try {
                var t = (0, l.parseEvent)(e);
                if (t && m.indexOf(t.aptrinsicEventType) > -1) {
                    var n = t.content;
                    switch (t.aptrinsicEventType) {
                        case "getElementText":
                            var r = (0, i.getElementText)(n.cssSelector);
                            g.default.textElementResponse(r, t.aptrinsicRequestId);
                            break;
                        case "registerFeatureRules":
                            (0, p.loadIframeRules)(n.rules);
                            break;
                        default:
                            s.logger.logInternalError(new Error("tracker iframe client got unsupported message, data: " + JSON.stringify(t)))
                    }
                }
            } catch (e) {
                s.logger.logInternalError(e)
            }
        }(0, f.isIframe)() && !u.default.isEditorMode() && (0, a.addEventListener)(window, "message", e, !1)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(7),
        a = n(0),
        s = n(3),
        l = n(13),
        c = n(14),
        u = r(c),
        d = n(43),
        g = r(d),
        f = n(1),
        p = n(87),
        m = ["getElementText", "registerFeatureRules"],
        v = new o;
    t.default = v
}, , , , , , , function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(0),
        i = n(3),
        a = n(13),
        s = n(97),
        l = r(s),
        c = n(1),
        u = n(42),
        d = n(6),
        g = n(14),
        f = r(g),
        p = n(87),
        m = r(p),
        v = n(100),
        h = r(v),
        y = ["register", "track", "lead", "fetchElementTextResponse", "apt-log", "textFeatureMatches"],
        b = new function () {
            function e(e) {
                if ((0, a.isValidCallingDomain)(e.origin)) try {
                    var t = (0, a.parseEvent)(e);
                    if (t && y.indexOf(t.aptrinsicEventType) > -1) {
                        var n = t.content;
                        switch (t.aptrinsicEventType) {
                            case "register":
                                (0, d.registerIframe)(e.source, e.origin, t.aptrinsicIframeId, (0, c.getConfig)("framesetMode"));
                                var r = (0, p.getRawFeatureRules)();
                                (0, o.isNotEmptyArr)(r) && h.default.syncFeatureRules(r);
                                break;
                            case "track":
                                if ((0, c.isIframeDisabled)(n.aptrinsicEventType)) return void i.logger.logInternalError(new Error("master script got unsupported track event from iframe, data: " + JSON.stringify(n)));
                                var s = "identify" === n.aptrinsicEventType ? u.identifyCallback : void 0;
                                u.api.trackEvent(n.aptrinsicEventType, n.properties, s, n.customEventName, !0, n.passedGlobalContext);
                                break;
                            case "lead":
                                var g = t.content;
                                l.default.track(g.source, g.email, g.userData, g.formFields);
                                break;
                            case "fetchElementTextResponse":
                                (0, d.decrementState)(t.aptrinsicRequestId, n.text);
                                break;
                            case "apt-log":
                                var f = "aptrinsic web sdk error: " + t.content.message + "\n" + t.content.extraMessage + "\n at: " + t.content.stackTrace;
                                i.logger.reportToServer(f);
                                break;
                            case "textFeatureMatches":
                                if ((0, c.isIframe)()) return;
                                m.default.evaluateIframeMatches(t.content.featureMatchData);
                                break;
                            default:
                                i.logger.logInternalError(new Error("tracker proxy got unsupported message, data: " + JSON.stringify(t)))
                        }
                    }
                } catch (e) {
                    i.logger.logInternalError(e)
                }
            }
            this.init = function () {
                !(0, c.isIframe)() && !f.default.isEditorMode() && (0, o.addEventListener)(window, "message", e, !1)
            }
        };
    t.default = b
}, , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e) {
        if (e.previousElementSibling) return e.previousElementSibling;
        for (; e = e.previousSibling && 1 !== e.nodeType;);
        return e
    }

    function i(e, t) {
        return T.indexOf(t) > -1 && !(0, f.isBlank)(e) && !e.startsWith("data") && (e = (0, v.maskFullUrl)(e)), e.length > 255 ? e.substring(0, 255) : e
    }

    function a(e) {
        var t = {},
            n = void 0,
            r = void 0,
            a = e[S].toLowerCase(),
            s = (0, d.getConfig)("elementAttributeDenyMap")[a];
        r = m.EXTRA_ATTRIBUTES_BY_ELEMENT_TYPE[a], t.tagName = e[S], t.attributes = e.attributes.length > 0 ? {} : null;
        for (var l = 0; l < e.attributes.length; l++) {
            n = e.attributes[l];
            var c = n.name.toLowerCase();
            s && s.indexOf(c) > -1 || (n.specified && C.indexOf(c) > -1 || (0, f.matchEither)((0, d.getConfig)("elementAttributeWhitelist"), n.name) || r && r.indexOf(c) > -1) && (t.attributes[n.name] = "class" === n.name.toLowerCase() ? i(n.value.replace(w, " "), n.name.toLowerCase()) : i(n.value, n.name.toLowerCase()))
        }
        "select" === e[S].toLowerCase() && (t.attributes.selectedIndex = e.selectedIndex, ((0, f.isEmptyArr)(s) || -1 === s.value) && (t.attributes.selectedValue = e.value));
        for (var u = 1, g = 1, p = e; p = o(p);) ++u, p[S] == e[S] && g++;
        return t.child_n = u, t.child_tag_n = g, t
    }

    function s(e, t) {
        if (!e || !e[S]) return !1;
        if (!e[S][k]) throw new Error("element have tag name but it is not a string " + e[S] + ", full element" + e);
        var n = e[S][k]();
        if (E.indexOf(n) > -1 || 1 != e.nodeType) return !1;
        if ("select" === n && "change" !== t.type) return !1;
        if ("change" === t.type && -1 == I.indexOf(n)) return !1;
        if ("submit" === t.type && "form" !== n) return !1;
        for (var r = e; r && !(0, f.isRootTag)(r);) {
            if (1 === r.nodeType && r.classList.contains("apt-guide-popup") || "true" === r.getAttribute("data-apt-disable-selector")) return !1;
            r = (0, p.getParentNode)(r)
        }
        return !0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.EventTracker = void 0;
    var l = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        c = n(3),
        u = n(9),
        d = n(1),
        g = n(24),
        f = n(0),
        p = n(19),
        m = n(4),
        v = n(21),
        h = n(87),
        y = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(h),
        b = n(7),
        E = ["html", "body", "option"],
        I = ["select"],
        C = ["id", "class"],
        T = ["href", "src"],
        w = new RegExp(/\s\s+/g),
        S = "tagName",
        k = "toLowerCase",
        x = function () {
            function e() {
                r(this, e), this.lastEvent = null, this.pageHight = (0, u.getPageHeight)(), this.pageWidth = (0, u.getPageWidth)()
            }
            return l(e, [{
                key: "initCollector",
                value: function () {
                    var e = this;
                    if ((0, d.getConfig)("enableTag")) {
                        c.logger.log("starting collector for all events");
                        var t = (0, d.getConfig)("usePointerEvent");
                        if ((0, d.featureEnabled)("click") && (this.addEventListener(document, t ? (0, u.getPointerDownEventName)() : "mousedown", function (t) {
                                e.lastEvent = t.target
                            }), this.addEventListener(document, t ? (0, u.getPointerUpEventName)() : "mouseup", function (t) {
                                (0, b.checkIfSameElement)(e.lastEvent, t.target) && (0, d.featureEnabled)("click") && e.sendWebEvent(t)
                            }), (0, d.getConfig)("keyboardTriggerClick") && this.addEventListener(document, "keydown", function (t) {
                                (["Space", "Enter"].indexOf(t.code) > -1 || [13, 32].indexOf(t.keyCode) > -1) && (0, d.featureEnabled)("click") && !(0, f.isEnterAllowedElement)(t.target) && e.sendWebEvent(t)
                            }), this.addEventListener(document, "change", function (t) {
                                (0, d.featureEnabled)("click") && e.sendWebEvent(t)
                            })), (0, d.featureEnabled)("form") && !(0, f.isWebApp)(m.eventTrackData.data[m.productIdParameter]) && (this.addEventListener(document, "submit", function (t) {
                                (0, d.featureEnabled)("form") && e.sendWebEvent(t)
                            }), this.addEventListener(document, "change", function (t) {
                                (0, d.featureEnabled)("form") && e.sendWebEvent(t)
                            })), (0, d.featureEnabled)("pageView")) try {
                            if ("onhashchange" in window && !0 === (0, d.getConfig)("autoTrackHash") && window.addEventListener("hashchange", function () {
                                    (0, d.featureEnabled)("pageView") && (0, g.internalApt)("pageview")
                                }), history && history.pushState) {
                                var n = window.location.href;
                                this.handlePushState = this.handlePushState.bind(this), this.oldPushState = history.pushState, history.pushState = this.handlePushState, window.addEventListener("popstate", function (e) {
                                    e.singleSpa || n !== window.location.href && (n = window.location.href, (0, d.featureEnabled)("pageView") && (0, g.internalApt)("pageview"))
                                })
                            }
                            history && history.replaceState && (this.handleReplaceState = this.handleReplaceState.bind(this), this.oldReplaceState = history.replaceState, history.replaceState = this.handleReplaceState)
                        } catch (e) {
                            if (!(e instanceof TypeError && e.message && e.message.indexOf("read only property") >= 0)) throw e;
                            ! function () {
                                var e = window.location.href,
                                    t = setInterval(function () {
                                        try {
                                            (0, d.featureEnabled)("pageView") && window.location.href !== e && (e = window.location.href, (0, g.internalApt)("pageview"))
                                        } catch (e) {
                                            c.logger.logInternalError(new Error("Alternate pageview tracking failed" + e)), clearInterval(t)
                                        }
                                    }, 1e3)
                            }()
                        }
                    }
                }
            }, {
                key: "handlePushState",
                value: function () {
                    this.handleStateChange(arguments, this.oldPushState, !1)
                }
            }, {
                key: "handleReplaceState",
                value: function () {
                    this.handleStateChange(arguments, this.oldReplaceState, !0)
                }
            }, {
                key: "handleStateChange",
                value: function (e, t, n) {
                    if ((0, d.getConfig)("enableTag")) {
                        var r = window.location.href;
                        if (t.apply(history, e), n && e.length >= 3) {
                            var o = document.createElement("a");
                            if (o.href = e[2], o.href === r) return
                        }
                        try {
                            (0, d.featureEnabled)("pageView") && (0, g.internalApt)("pageview")
                        } catch (e) {
                            c.logger.logInternalError(new Error("failed to handle push state " + e))
                        }
                    }
                }
            }, {
                key: "sendWebEvent",
                value: function (e) {
                    try {
                        if (!(0, d.getConfig)("enableTag")) return;
                        var t = (0, p.getEventTarget)(e),
                            n = t,
                            r = [],
                            o = void 0,
                            i = {};
                        if (3 == e.which) return void c.logger.log("ignoring right click");
                        if (!s(t, e)) return;
                        for (; null !== t && "html" !== t[S][k]();) o = a(t), r.push(o), t = (0, p.getParentNode)(t);
                        i.elementTree = r.reverse(), i = this.populateExtraProperties(n, e, i);
                        var l = this.getEventType(n, e);
                        try {
                            y.default.matchElement(n)
                        } catch (e) {
                            c.logger.logInternalError(e, "failed to process feature matches for element click")
                        }(0, g.internalApt)(l, i)
                    } catch (t) {
                        c.logger.logInternalError(t, "sendWebEvent:" + e + "\nelement:" + e.target)
                    }
                }
            }, {
                key: "getEventType",
                value: function (e, t) {
                    return "form" === e[S][k]() ? "formSubmit" : "a" == e[S][k]() ? "linkClick" : "click"
                }
            }, {
                key: "populateExtraProperties",
                value: function (e, t, n) {
                    if ((0, d.getConfig)("enableTag")) {
                        if ("form" === e[S][k]() && "submit" === t.type) {
                            var r = {},
                                o = void 0,
                                i = void 0,
                                a = void 0,
                                s = e.querySelectorAll("input");
                            if (void 0 !== s) {
                                for (var l = 0; l < s.length; l++) o = s[l], "password" !== (a = o.getAttribute("type")) && "button" !== a && "submit" !== a && o.value.length <= 2048 && (i = o.getAttribute("id") || o.getAttribute("name")) && (r[i] = o.value);
                                n.fof = r
                            }
                        }
                        if ("button" === e[S][k]()) {
                            var c = (0, d.getConfig)("elementAttributeDenyMap").button;
                            c && -1 !== c.indexOf("value") || (n.value = e.textContent)
                        }
                        if ("select" === e[S][k]()) {
                            var u = (0, d.getConfig)("elementAttributeDenyMap").select;
                            if (!u || -1 === u.indexOf("value"))
                                if (e.multiple) {
                                    for (var g = [], f = e.options, p = 0; p < f.length; p++) f[p].selected && g.push(f[p].value);
                                    n.value = g.join(",")
                                } else n.value = e.value
                        }
                        return n
                    }
                }
            }, {
                key: "addEventListener",
                value: function (e, t, n) {
                    var r = (0, d.getConfig)("sfdcTemplate");
                    if (r && e === document && (e = r), e.addEventListener) e.addEventListener(t, n, !0);
                    else {
                        if (!e.attachEvent) return c.logger.log("there is no support for adding events"), !1;
                        e.attachEvent("on" + t, n)
                    }
                    return !0
                }
            }]), e
        }();
    t.EventTracker = x
}, , , , function (e, t, n) {
    n(367), n(103), n(102), e.exports = n(372)
}]);