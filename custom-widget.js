!function (t) {
    var e = {}; function n(r) {
        if (e[r]) return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    } n.m = t, n.c = e, n.d = function (t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) { return t[e] }.bind(null, o)); return r }, n.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return n.d(e, "a", e), e }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 10)
}([function (t, e, n) {
    "use strict"; var r, o, i, a = n(3), u = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
    function s() { i = !1 } function l(t) { if (t) { if (t !== r) { if (t.length !== u.length) throw new Error("Custom alphabet for shortid must be " + u.length + " unique characters. You submitted " + t.length + " characters: " + t); var e = t.split("").filter((function (t, e, n) { return e !== n.lastIndexOf(t) })); if (e.length) throw new Error("Custom alphabet for shortid must be " + u.length + " unique characters. These characters were not unique: " + e.join(", ")); r = t, s() } } else r !== u && (r = u, s()) } function c() { return i || (i = function () { r || l(u); for (var t, e = r.split(""), n = [], o = a.nextValue(); e.length > 0;)o = a.nextValue(), t = Math.floor(o * e.length), n.push(e.splice(t, 1)[0]); return n.join("") }()) } t.exports = { get: function () { return r || u }, characters: function (t) { return l(t), r }, seed: function (t) { a.seed(t), o !== t && (s(), o = t) }, lookup: function (t) { return c()[t] }, shuffled: c }
},
function (t, e, n) { "use strict"; t.exports = n(2) },
function (t, e, n) {
    "use strict"; var r = n(0), o = n(4), i = n(8), a = n(9) || 0;
    function u() { return o(a) }
    t.exports = u,
        t.exports.generate = u,
        t.exports.seed = function (e) { return r.seed(e), t.exports }, t.exports.worker = function (e) { return a = e, t.exports }, t.exports.characters = function (t) { return void 0 !== t && r.characters(t), r.shuffled() }, t.exports.isValid = i
},
function (t, e, n) {
    "use strict"; var r = 1;
    t.exports = { nextValue: function () { return (r = (9301 * r + 49297) % 233280) / 233280 }, seed: function (t) { r = t } }
},
function (t, e, n) {
    "use strict"; var r, o, i = n(5); n(0);
    t.exports = function (t) {
        var e = "", n = Math.floor(.001 * (Date.now() - 1567752802062));
        return n === o ? r++ : (r = 0, o = n), e += i(7), e += i(t), r > 0 && (e += i(r)), e += i(n)
    }
},
function (t, e, n) {
    "use strict"; var r = n(0), o = n(6), i = n(7);
    t.exports = function (t) { for (var e, n = 0, a = ""; !e;)a += i(o, r.get(), 1), e = t < Math.pow(16, n + 1), n++; return a }
},
function (t, e, n) {
    "use strict"; var r, o = "object" == typeof window && (window.crypto || window.msCrypto); r = o && o.getRandomValues ?
        function (t) { return o.getRandomValues(new Uint8Array(t)) } : function (t) { for (var e = [], n = 0; n < t; n++)e.push(Math.floor(256 * Math.random())); return e },
        t.exports = r
}, function (t, e) {
    t.exports = function (t, e, n) {
        for (var r = (2 << Math.log(e.length - 1) / Math.LN2) - 1, o = -~(1.6 * r * n / e.length), i = ""; ;)
            for (var a = t(o), u = o; u--;)if ((i += e[a[u] & r] || "").length === +n) return i
    }
},
function (t, e, n) {
    "use strict"; var r = n(0);
    t.exports = function (t) { return !(!t || "string" != typeof t || t.length < 6) && !new RegExp("[^" + r.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]").test(t) }
},
function (t, e, n) { "use strict"; t.exports = 0 },
function (t, e, n) {
    "use strict"; n.r(e); var r = n(1),
        o = function () {
            return (o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t
            }).apply(this, arguments)
        };
    function i(t, e) { var n = []; return t.map((function (t) { e.map((function (e) { t.variable == e.variable && n.push(o({ bucket: e.origin.bucket || "", origin: e.origin.id || "" }, t)) })) })), n } var a, u, s, l,
        c = function () { return (c = Object.assign || function (t) { for (var e, n = 1, r = arguments.length; n < r; n++)for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) };

    window.TagoIO = {}, window.TagoIO.autoFill = !0;
    var f = [];
    window.addEventListener("message", (function (t) { var e = t.data; e && (e.widget && (l = e.widget.display.variables, u && u(e.widget)), e.realtime && a && a(e.realtime), e.status && e.key && f[e.key] && "function" == typeof f[e.key] && f[e.key](e), !1 === e.status && (s && s(e), e.key && f[e.key] && f[e.key](null, e))) }), !1);
    var d = function (t) { window.parent.postMessage(t, "*") };
    window.TagoIO.ready = function (t) { d(c({ loaded: !0 }, t)) },
        window.TagoIO.onStart = function (t) { u = t }
    window.TagoIO.onRealtime = function (t) { a = t },
        window.TagoIO.onError = function (t) { s = t },
        window.TagoIO.sendData = function (t, e) {
            var n = r.generate(); f[n] = e || null; var o = Array.isArray(t) ? t : [t], a = [];
            if (window.TagoIO.autoFill ? (console.info("AutoFill is enabled, the bucket and origin id will be automatically generated based on the variables of the widget, this option can be disabled by setting window.TagoIO.autoFill = false."), a = i(o, l)) : o.map((function (t) { t.bucket && t.origin || console.error("AutoFill is disabled, the data must contain a bucket and origin key!") })),
            d({ variables: window.TagoIO.autoFill ? a : o, key: n }), window.Promise && !e) return new Promise((function (t, e) { f[n] = function (n, r) { r && e(r), t(n) } }))
        },
        window.TagoIO.editData = function (t, e) { var n = r.generate(); f[n] = e || null; var o = Array.isArray(t) ? t : [t], a = [];
            if (window.TagoIO.autoFill ? (console.info("AutoFill is enabled, the bucket and origin id will be automatically generated based on the variables of the widget, this option can be disabled by setting window.TagoIO.autoFill = false."), a = i(o, l)) : o.map((function (t) { t.bucket && t.origin || console.error("AutoFill is disabled, the data must contain a bucket and origin key!") })),
            d({ variables: window.TagoIO.autoFill ? a : o, method: "edit", key: n }), window.Promise && !e) return new Promise((function (t, e) { f[n] = function (n, r) { r && e(r), t(n) } })) },
        window.TagoIO.deleteData = function (t, e) {
            var n = r.generate(); f[n] = e || null; var o = Array.isArray(t) ? t : [t]; if (d({ variables: o, method: "delete", key: n }),
                window.Promise && !e) return new Promise((function (t, e) { f[n] = function (n, r) { r && e(r), t(n) } }))
        }
}]);
