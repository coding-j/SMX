!function (e, t) {
    "use strict";
    function n(e, t, n) {
        this.root = this.currentNode = e, this.nodeType = t, this.filter = n
    }

    function o(e, t) {
        for (var n = e.length; n--;)if (!t(e[n]))return !1;
        return !0
    }

    function i(e) {
        return e.nodeType === w && !!_t[e.nodeName]
    }

    function r(e) {
        switch (e.nodeType) {
            case F:
                return yt;
            case w:
            case H:
                if (gt && Et.has(e))return Et.get(e);
                break;
            default:
                return St
        }
        var t;
        return t = o(e.childNodes, a) ? Ct.test(e.nodeName) ? yt : Tt : bt, gt && Et.set(e, t), t
    }

    function a(e) {
        return r(e) === yt
    }

    function s(e) {
        return r(e) === Tt
    }

    function d(e) {
        return r(e) === bt
    }

    function l(e, t) {
        var o = new n(t, W, s);
        return o.currentNode = e, o
    }

    function c(e, t) {
        return e = l(e, t).previousNode(), e !== t ? e : null
    }

    function h(e, t) {
        return e = l(e, t).nextNode(), e !== t ? e : null
    }

    function u(e, t) {
        return !i(e) && e.nodeType === t.nodeType && e.nodeName === t.nodeName && "A" !== e.nodeName && e.className === t.className && (!e.style && !t.style || e.style.cssText === t.style.cssText)
    }

    function f(e, t, n) {
        if (e.nodeName !== t)return !1;
        for (var o in n)if (e.getAttribute(o) !== n[o])return !1;
        return !0
    }

    function p(e, t, n, o) {
        for (; e && e !== t;) {
            if (f(e, n, o))return e;
            e = e.parentNode
        }
        return null
    }

    function g(e, t) {
        for (; t;) {
            if (t === e)return !0;
            t = t.parentNode
        }
        return !1
    }

    function m(e, t) {
        var n, o, i, r, a = "";
        return e && e !== t && (a = m(e.parentNode, t), e.nodeType === w && (a += (a ? ">" : "") + e.nodeName, (n = e.id) && (a += "#" + n), (o = e.className.trim()) && (i = o.split(/\s\s*/), i.sort(), a += ".", a += i.join(".")), (r = e.dir) && (a += "[dir=" + r + "]"), i && (vt.call(i, j) > -1 && (a += "[backgroundColor=" + e.style.backgroundColor.replace(/ /g, "") + "]"), vt.call(i, Q) > -1 && (a += "[color=" + e.style.color.replace(/ /g, "") + "]"), vt.call(i, V) > -1 && (a += "[fontFamily=" + e.style.fontFamily.replace(/ /g, "") + "]"), vt.call(i, $) > -1 && (a += "[fontSize=" + e.style.fontSize + "]")))), a
    }

    function v(e) {
        var t = e.nodeType;
        return t === w ? e.childNodes.length : e.length || 0
    }

    function N(e) {
        var t = e.parentNode;
        return t && t.removeChild(e), e
    }

    function C(e, t) {
        var n = e.parentNode;
        n && n.replaceChild(t, e)
    }

    function _(e) {
        for (var t = e.ownerDocument.createDocumentFragment(), n = e.childNodes, o = n ? n.length : 0; o--;)t.appendChild(e.firstChild);
        return t
    }

    function S(e, n, o, i) {
        var r, a, s, d, l = e.createElement(n);
        if (o instanceof Array && (i = o, o = null), o)for (r in o)a = o[r], a !== t && l.setAttribute(r, o[r]);
        if (i)for (s = 0, d = i.length; d > s; s += 1)l.appendChild(i[s]);
        return l
    }

    function y(e, t) {
        var n, o, r = t.__squire__, s = e.ownerDocument, d = e;
        if (e === t && ((o = e.firstChild) && "BR" !== o.nodeName || (n = r.createDefaultBlock(), o ? e.replaceChild(n, o) : e.appendChild(n), e = n, n = null)), e.nodeType === F)return d;
        if (a(e)) {
            for (o = e.firstChild; ut && o && o.nodeType === F && !o.data;)e.removeChild(o), o = e.firstChild;
            o || (ut ? (n = s.createTextNode(Y), r._didAddZWS()) : n = s.createTextNode(""))
        } else if (ht) {
            for (; e.nodeType !== F && !i(e);) {
                if (o = e.firstChild, !o) {
                    n = s.createTextNode("");
                    break
                }
                e = o
            }
            e.nodeType === F ? /^ +$/.test(e.data) && (e.data = "") : i(e) && e.parentNode.insertBefore(s.createTextNode(""), e)
        } else if (!e.querySelector("BR"))for (n = S(s, "BR"); (o = e.lastElementChild) && !a(o);)e = o;
        if (n)try {
            e.appendChild(n)
        } catch (l) {
            r.didError({
                name: "Squire: fixCursor – " + l,
                message: "Parent: " + e.nodeName + "/" + e.innerHTML + " appendChild: " + n.nodeName
            })
        }
        return d
    }

    function T(e, t) {
        var n, o, i, r, s = e.childNodes, l = e.ownerDocument, c = null, h = t.__squire__._config;
        for (n = 0, o = s.length; o > n; n += 1)i = s[n], r = "BR" === i.nodeName, !r && a(i) ? (c || (c = S(l, h.blockTag, h.blockAttributes)), c.appendChild(i), n -= 1, o -= 1) : (r || c) && (c || (c = S(l, h.blockTag, h.blockAttributes)), y(c, t), r ? e.replaceChild(c, i) : (e.insertBefore(c, i), n += 1, o += 1), c = null), d(i) && T(i, t);
        return c && e.appendChild(y(c, t)), e
    }

    function b(e, t, n, o) {
        var i, r, a, s = e.nodeType;
        if (s === F && e !== n)return b(e.parentNode, e.splitText(t), n, o);
        if (s === w) {
            if ("number" == typeof t && (t = t < e.childNodes.length ? e.childNodes[t] : null), e === n)return t;
            for (i = e.parentNode, r = e.cloneNode(!1); t;)a = t.nextSibling, r.appendChild(t), t = a;
            return "OL" === e.nodeName && p(e, o, "BLOCKQUOTE") && (r.start = (+e.start || 1) + e.childNodes.length - 1), y(e, o), y(r, o), (a = e.nextSibling) ? i.insertBefore(r, a) : i.appendChild(r), b(i, r, n, o)
        }
        return t
    }

    function E(e, t) {
        for (var n, o, i, r = e.childNodes, s = r.length, d = []; s--;)if (n = r[s], o = s && r[s - 1], s && a(n) && u(n, o) && !_t[n.nodeName])t.startContainer === n && (t.startContainer = o, t.startOffset += v(o)), t.endContainer === n && (t.endContainer = o, t.endOffset += v(o)), t.startContainer === e && (t.startOffset > s ? t.startOffset -= 1 : t.startOffset === s && (t.startContainer = o, t.startOffset = v(o))), t.endContainer === e && (t.endOffset > s ? t.endOffset -= 1 : t.endOffset === s && (t.endContainer = o, t.endOffset = v(o))), N(n), n.nodeType === F ? o.appendData(n.data) : d.push(_(n)); else if (n.nodeType === w) {
            for (i = d.length; i--;)n.appendChild(d.pop());
            E(n, t)
        }
    }

    function k(e, t) {
        if (e.nodeType === F && (e = e.parentNode), e.nodeType === w) {
            var n = {
                startContainer: t.startContainer,
                startOffset: t.startOffset,
                endContainer: t.endContainer,
                endOffset: t.endOffset
            };
            E(e, n), t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset)
        }
    }

    function B(e, t, n) {
        for (var o, i, r = t; 1 === r.parentNode.childNodes.length;)r = r.parentNode;
        N(r), i = e.childNodes.length, o = e.lastChild, o && "BR" === o.nodeName && (e.removeChild(o), i -= 1), e.appendChild(_(t)), n.setStart(e, i), n.collapse(!0), k(e, n), at && (o = e.lastChild) && "BR" === o.nodeName && e.removeChild(o)
    }

    function x(e, t) {
        var n, o, i = e.previousSibling, r = e.firstChild, a = e.ownerDocument, s = "LI" === e.nodeName;
        if (!s || r && /^[OU]L$/.test(r.nodeName))if (i && u(i, e)) {
            if (!d(i)) {
                if (!s)return;
                o = S(a, "DIV"), o.appendChild(_(i)), i.appendChild(o)
            }
            N(e), n = !d(e), i.appendChild(_(e)), n && T(i, t), r && x(r, t)
        } else s && (i = S(a, "DIV"), e.insertBefore(i, r), y(i, t))
    }

    function L(e) {
        this.isShiftDown = e.shiftKey
    }

    function A(e, t, n) {
        var o, i;
        if (e || (e = {}), t)for (o in t)!n && o in e || (i = t[o], e[o] = i && i.constructor === Object ? A(e[o], i, n) : i);
        return e
    }

    function O(e, t) {
        e.nodeType === M && (e = e.body);
        var n, o = e.ownerDocument, i = o.defaultView;
        this._win = i, this._doc = o, this._root = e, this._events = {}, this._isFocused = !1, this._lastSelection = null, ft && this.addEventListener("beforedeactivate", this.getSelection), this._hasZWS = !1, this._lastAnchorNode = null, this._lastFocusNode = null, this._path = "", this._willUpdatePath = !1, "onselectionchange" in o ? this.addEventListener("selectionchange", this._updatePathOnEvent) : (this.addEventListener("keyup", this._updatePathOnEvent), this.addEventListener("mouseup", this._updatePathOnEvent)), this._undoIndex = -1, this._undoStack = [], this._undoStackLength = 0, this._isInUndoState = !1, this._ignoreChange = !1, this._ignoreAllChanges = !1, pt ? (n = new MutationObserver(this._docWasChanged.bind(this)), n.observe(e, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        }), this._mutation = n) : this.addEventListener("keyup", this._keyUpDetectChange), this._restoreSelection = !1, this.addEventListener("blur", D), this.addEventListener("mousedown", R), this.addEventListener("touchstart", R), this.addEventListener("focus", U), this._awaitingPaste = !1, this.addEventListener(rt ? "beforecut" : "cut", dn), this.addEventListener("copy", ln), this.addEventListener("keydown", L), this.addEventListener("keyup", L), this.addEventListener(rt ? "beforepaste" : "paste", cn), this.addEventListener("drop", hn), this.addEventListener(at ? "keypress" : "keydown", zt), this._keyHandlers = Object.create(Zt), this.setConfig(t), rt && (i.Text.prototype.splitText = function (e) {
            var t = this.ownerDocument.createTextNode(this.data.slice(e)), n = this.nextSibling, o = this.parentNode, i = this.length - e;
            return n ? o.insertBefore(t, n) : o.appendChild(t), i && this.deleteData(e, i), t
        }), e.setAttribute("contenteditable", "true");
        try {
            o.execCommand("enableObjectResizing", !1, "false"), o.execCommand("enableInlineTableEditing", !1, "false")
        } catch (r) {
        }
        e.__squire__ = this, this.setHTML("")
    }

    function D() {
        this._restoreSelection = !0
    }

    function R() {
        this._restoreSelection = !1
    }

    function U() {
        this._restoreSelection && this.setSelection(this._lastSelection)
    }

    function P(e, t, n) {
        var o, i;
        for (o = t.firstChild; o; o = i) {
            if (i = o.nextSibling, a(o)) {
                if (o.nodeType === F || "BR" === o.nodeName || "IMG" === o.nodeName) {
                    n.appendChild(o);
                    continue
                }
            } else if (s(o)) {
                n.appendChild(e.createDefaultBlock([P(e, o, e._doc.createDocumentFragment())]));
                continue
            }
            P(e, o, n)
        }
        return n
    }

    var I = 2, w = 1, F = 3, M = 9, H = 11, W = 1, z = 4, q = 0, K = 1, G = 2, Z = 3, j = "highlight", Q = "colour", V = "font", $ = "size", Y = "​", X = e.defaultView, J = navigator.userAgent, et = /Android/.test(J), tt = /iP(?:ad|hone|od)/.test(J), nt = /Mac OS X/.test(J), ot = /Windows NT/.test(J), it = /Gecko\//.test(J), rt = /Trident\/[456]\./.test(J), at = !!X.opera, st = /Edge\//.test(J), dt = !st && /WebKit\//.test(J), lt = /Trident\/[4567]\./.test(J), ct = nt ? "meta-" : "ctrl-", ht = rt || at, ut = rt || dt, ft = rt, pt = "undefined" != typeof MutationObserver, gt = "undefined" != typeof WeakMap, mt = /[^ \t\r\n]/, vt = Array.prototype.indexOf;
    Object.create || (Object.create = function (e) {
        var t = function () {
        };
        return t.prototype = e, new t
    });
    var Nt = {1: 1, 2: 2, 3: 4, 8: 128, 9: 256, 11: 1024};
    n.prototype.nextNode = function () {
        for (var e, t = this.currentNode, n = this.root, o = this.nodeType, i = this.filter; ;) {
            for (e = t.firstChild; !e && t && t !== n;)e = t.nextSibling, e || (t = t.parentNode);
            if (!e)return null;
            if (Nt[e.nodeType] & o && i(e))return this.currentNode = e, e;
            t = e
        }
    }, n.prototype.previousNode = function () {
        for (var e, t = this.currentNode, n = this.root, o = this.nodeType, i = this.filter; ;) {
            if (t === n)return null;
            if (e = t.previousSibling)for (; t = e.lastChild;)e = t; else e = t.parentNode;
            if (!e)return null;
            if (Nt[e.nodeType] & o && i(e))return this.currentNode = e, e;
            t = e
        }
    }, n.prototype.previousPONode = function () {
        for (var e, t = this.currentNode, n = this.root, o = this.nodeType, i = this.filter; ;) {
            for (e = t.lastChild; !e && t && t !== n;)e = t.previousSibling, e || (t = t.parentNode);
            if (!e)return null;
            if (Nt[e.nodeType] & o && i(e))return this.currentNode = e, e;
            t = e
        }
    };
    var Ct = /^(?:#text|A(?:BBR|CRONYM)?|B(?:R|D[IO])?|C(?:ITE|ODE)|D(?:ATA|EL|FN)|EM|FONT|HR|I(?:FRAME|MG|NPUT|NS)?|KBD|Q|R(?:P|T|UBY)|S(?:AMP|MALL|PAN|TR(?:IKE|ONG)|U[BP])?|TIME|U|VAR|WBR)$/, _t = {
        BR: 1,
        HR: 1,
        IFRAME: 1,
        IMG: 1,
        INPUT: 1
    }, St = 0, yt = 1, Tt = 2, bt = 3, Et = gt ? new WeakMap : null, kt = function (e, t) {
        for (var n = e.childNodes; t && e.nodeType === w;)e = n[t - 1], n = e.childNodes, t = n.length;
        return e
    }, Bt = function (e, t) {
        if (e.nodeType === w) {
            var n = e.childNodes;
            if (t < n.length)e = n[t]; else {
                for (; e && !e.nextSibling;)e = e.parentNode;
                e && (e = e.nextSibling)
            }
        }
        return e
    }, xt = function (e, t) {
        var n, o, i, r, a = e.startContainer, s = e.startOffset, d = e.endContainer, l = e.endOffset;
        a.nodeType === F ? (n = a.parentNode, o = n.childNodes, s === a.length ? (s = vt.call(o, a) + 1, e.collapsed && (d = n, l = s)) : (s && (r = a.splitText(s), d === a ? (l -= s, d = r) : d === n && (l += 1), a = r), s = vt.call(o, a)), a = n) : o = a.childNodes, i = o.length, s === i ? a.appendChild(t) : a.insertBefore(t, o[s]), a === d && (l += o.length - i), e.setStart(a, s), e.setEnd(d, l)
    }, Lt = function (e, t, n) {
        var o = e.startContainer, i = e.startOffset, r = e.endContainer, a = e.endOffset;
        t || (t = e.commonAncestorContainer), t.nodeType === F && (t = t.parentNode);
        for (var s, d, l, c = b(r, a, t, n), h = b(o, i, t, n), u = t.ownerDocument.createDocumentFragment(); h !== c;)s = h.nextSibling, u.appendChild(h), h = s;
        return o = t, i = c ? vt.call(t.childNodes, c) : t.childNodes.length, l = t.childNodes[i], d = l && l.previousSibling, d && d.nodeType === F && l.nodeType === F && (o = d, i = d.length, d.appendData(l.data), N(l)), e.setStart(o, i), e.collapse(!0), y(t, n), u
    }, At = function (e, t) {
        var n, o, i = Pt(e, t), r = It(e, t), a = i !== r;
        return Rt(e), Ut(e, i, r, t), n = Lt(e, null, t), Rt(e), a && (r = It(e, t), i && r && i !== r && B(i, r, e)), i && y(i, t), o = t.firstChild, o && "BR" !== o.nodeName ? e.collapse(!0) : (y(t, t), e.selectNodeContents(t.firstChild)), n
    }, Ot = function (e, t, n) {
        for (var o = !0, i = t.childNodes, r = i.length; r--;)if (!a(i[r])) {
            o = !1;
            break
        }
        if (e.collapsed || At(e, n), Rt(e), o)xt(e, t), e.startContainer !== e.endContainer && k(e.endContainer, e), k(e.startContainer, e), e.collapse(!1); else {
            for (var l, u, f, g, m, v = e.startContainer, N = b(v, e.startOffset, p(v.parentNode, n, "BLOCKQUOTE") || n, n), C = N.previousSibling, _ = C, S = _.childNodes.length, T = N, E = 0, B = N.parentNode; (l = _.lastChild) && l.nodeType === w;) {
                if ("BR" === l.nodeName) {
                    S -= 1;
                    break
                }
                _ = l, S = _.childNodes.length
            }
            for (; (l = T.firstChild) && l.nodeType === w && "BR" !== l.nodeName;)T = l;
            for (m = _.childNodes[S] || null; (l = t.firstChild) && a(l);)_.insertBefore(l, m);
            for (; (l = t.lastChild) && a(l);)T.insertBefore(l, T.firstChild), E += 1;
            for (u = t; u = h(u, n);)y(u, n);
            if (B.insertBefore(t, N), g = C.nextSibling, u = c(g, n), u && !/\S/.test(u.textContent))do B = u.parentNode, B.removeChild(u), u = B; while (u && !u.lastChild && u !== n);
            if (C.parentNode || (C = g.previousSibling), _.parentNode || (_ = C || g.parentNode, S = C ? C.childNodes.length : 0), d(g) && x(g, n), f = N.previousSibling, u = s(N) ? N : h(N, n), u && !/\S/.test(u.textContent))do B = u.parentNode, B.removeChild(u), u = B; while (u && !u.lastChild && u !== n);
            N.parentNode || (N = f.nextSibling), E || (T = f, E = f.childNodes.length), N && d(N) && x(N, n), e.setStart(_, S), e.setEnd(T, E), Rt(e)
        }
    }, Dt = function (e, t, n) {
        var o = t.ownerDocument.createRange();
        if (o.selectNode(t), n) {
            var i = e.compareBoundaryPoints(Z, o) > -1, r = e.compareBoundaryPoints(K, o) < 1;
            return !i && !r
        }
        var a = e.compareBoundaryPoints(q, o) < 1, s = e.compareBoundaryPoints(G, o) > -1;
        return a && s
    }, Rt = function (e) {
        for (var t, n = e.startContainer, o = e.startOffset, r = e.endContainer, a = e.endOffset, s = !0; n.nodeType !== F && (t = n.childNodes[o], t && !i(t));)n = t, o = 0;
        if (a)for (; r.nodeType !== F;) {
            if (t = r.childNodes[a - 1], !t || i(t)) {
                if (s && t && "BR" === t.nodeName) {
                    a -= 1, s = !1;
                    continue
                }
                break
            }
            r = t, a = v(r)
        } else for (; r.nodeType !== F && (t = r.firstChild, t && !i(t));)r = t;
        e.collapsed ? (e.setStart(r, a), e.setEnd(n, o)) : (e.setStart(n, o), e.setEnd(r, a))
    }, Ut = function (e, t, n, o) {
        var i, r = e.startContainer, a = e.startOffset, s = e.endContainer, d = e.endOffset, l = !0;
        for (t || (t = e.commonAncestorContainer), n || (n = t); !a && r !== t && r !== o;)i = r.parentNode, a = vt.call(i.childNodes, r), r = i;
        for (; ;) {
            if (l && s.nodeType !== F && s.childNodes[d] && "BR" === s.childNodes[d].nodeName && (d += 1, l = !1), s === n || s === o || d !== v(s))break;
            i = s.parentNode, d = vt.call(i.childNodes, s) + 1, s = i
        }
        e.setStart(r, a), e.setEnd(s, d)
    }, Pt = function (e, t) {
        var n, o = e.startContainer;
        return a(o) ? n = c(o, t) : o !== t && s(o) ? n = o : (n = kt(o, e.startOffset), n = h(n, t)), n && Dt(e, n, !0) ? n : null
    }, It = function (e, t) {
        var n, o, i = e.endContainer;
        if (a(i))n = c(i, t); else if (i !== t && s(i))n = i; else {
            if (n = Bt(i, e.endOffset), !n || !g(t, n))for (n = t; o = n.lastChild;)n = o;
            n = c(n, t)
        }
        return n && Dt(e, n, !0) ? n : null
    }, wt = new n(null, z | W, function (e) {
        return e.nodeType === F ? mt.test(e.data) : "IMG" === e.nodeName
    }), Ft = function (e, t) {
        var n, o = e.startContainer, i = e.startOffset;
        if (wt.root = null, o.nodeType === F) {
            if (i)return !1;
            n = o
        } else if (n = Bt(o, i), n && !g(t, n) && (n = null), !n && (n = kt(o, i), n.nodeType === F && n.length))return !1;
        return wt.currentNode = n, wt.root = Pt(e, t), !wt.previousNode()
    }, Mt = function (e, t) {
        var n, o = e.endContainer, i = e.endOffset;
        if (wt.root = null, o.nodeType === F) {
            if (n = o.data.length, n && n > i)return !1;
            wt.currentNode = o
        } else wt.currentNode = kt(o, i);
        return wt.root = It(e, t), !wt.nextNode()
    }, Ht = function (e, t) {
        var n, o = Pt(e, t), i = It(e, t);
        o && i && (n = o.parentNode, e.setStart(n, vt.call(n.childNodes, o)), n = i.parentNode, e.setEnd(n, vt.call(n.childNodes, i) + 1))
    }, Wt = {
        8: "backspace",
        9: "tab",
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        37: "left",
        39: "right",
        46: "delete",
        219: "[",
        221: "]"
    }, zt = function (e) {
        var t = e.keyCode, n = Wt[t], o = "", i = this.getSelection();
        e.defaultPrevented || (n || (n = String.fromCharCode(t).toLowerCase(), /^[A-Za-z0-9]$/.test(n) || (n = "")), at && 46 === e.which && (n = "."), t > 111 && 124 > t && (n = "f" + (t - 111)), "backspace" !== n && "delete" !== n && (e.altKey && (o += "alt-"), e.ctrlKey && (o += "ctrl-"), e.metaKey && (o += "meta-")), e.shiftKey && (o += "shift-"), n = o + n, this._keyHandlers[n] ? this._keyHandlers[n](this, e, i) : 1 !== n.length || i.collapsed || (this.saveUndoState(i), At(i, this._root), this._ensureBottomLine(), this.setSelection(i), this._updatePath(i, !0)))
    }, qt = function (e) {
        return function (t, n) {
            n.preventDefault(), t[e]()
        }
    }, Kt = function (e, t) {
        return t = t || null, function (n, o) {
            o.preventDefault();
            var i = n.getSelection();
            n.hasFormat(e, null, i) ? n.changeFormat(null, {tag: e}, i) : n.changeFormat({tag: e}, t, i)
        }
    }, Gt = function (e, t) {
        try {
            t || (t = e.getSelection());
            var n, o = t.startContainer;
            for (o.nodeType === F && (o = o.parentNode), n = o; a(n) && (!n.textContent || n.textContent === Y);)o = n, n = o.parentNode;
            o !== n && (t.setStart(n, vt.call(n.childNodes, o)), t.collapse(!0), n.removeChild(o), s(n) || (n = c(n, e._root)), y(n, e._root), Rt(t)), o === e._root && (o = o.firstChild) && "BR" === o.nodeName && N(o), e._ensureBottomLine(), e.setSelection(t), e._updatePath(t, !0)
        } catch (i) {
            e.didError(i)
        }
    }, Zt = {
        enter: function (e, t, n) {
            var o, i, r, a = e._root;
            if (t.preventDefault(), e._recordUndoState(n), On(n.startContainer, a, e), e._removeZWS(), e._getRangeAndRemoveBookmark(n), n.collapsed || At(n, a), o = Pt(n, a), !o || /^T[HD]$/.test(o.nodeName))return i = p(n.endContainer, a, "A"), i && (i = i.parentNode, Ut(n, i, i, a), n.collapse(!1)), xt(n, e.createElement("BR")), n.collapse(!1), e.setSelection(n), void e._updatePath(n, !0);
            if ((i = p(o, a, "LI")) && (o = i), !o.textContent) {
                if (p(o, a, "UL") || p(o, a, "OL"))return e.modifyBlocks(Ln, n);
                if (p(o, a, "BLOCKQUOTE"))return e.modifyBlocks(Tn, n)
            }
            for (r = _n(e, o, n.startContainer, n.startOffset), mn(o), nn(o), y(o, a); r.nodeType === w;) {
                var s, d = r.firstChild;
                if ("A" === r.nodeName && (!r.textContent || r.textContent === Y)) {
                    d = e._doc.createTextNode(""), C(r, d), r = d;
                    break
                }
                for (; d && d.nodeType === F && !d.data && (s = d.nextSibling, s && "BR" !== s.nodeName);)N(d), d = s;
                if (!d || "BR" === d.nodeName || d.nodeType === F && !at)break;
                r = d
            }
            n = e._createRange(r, 0), e.setSelection(n), e._updatePath(n, !0)
        }, backspace: function (e, t, n) {
            var o = e._root;
            if (e._removeZWS(), e.saveUndoState(n), n.collapsed)if (Ft(n, o)) {
                t.preventDefault();
                var i, r = Pt(n, o);
                if (!r)return;
                if (T(r.parentNode, o), i = c(r, o)) {
                    if (!i.isContentEditable)return void N(i);
                    for (B(i, r, n), r = i.parentNode; r !== o && !r.nextSibling;)r = r.parentNode;
                    r !== o && (r = r.nextSibling) && x(r, o), e.setSelection(n)
                } else if (r) {
                    if (p(r, o, "UL") || p(r, o, "OL"))return e.modifyBlocks(Ln, n);
                    if (p(r, o, "BLOCKQUOTE"))return e.modifyBlocks(yn, n);
                    e.setSelection(n), e._updatePath(n, !0)
                }
            } else e.setSelection(n), setTimeout(function () {
                Gt(e)
            }, 0); else t.preventDefault(), At(n, o), Gt(e, n)
        }, "delete": function (e, t, n) {
            var o, i, r, a, s, d, l = e._root;
            if (e._removeZWS(), e.saveUndoState(n), n.collapsed)if (Mt(n, l)) {
                if (t.preventDefault(), o = Pt(n, l), !o)return;
                if (T(o.parentNode, l), i = h(o, l)) {
                    if (!i.isContentEditable)return void N(i);
                    for (B(o, i, n), i = o.parentNode; i !== l && !i.nextSibling;)i = i.parentNode;
                    i !== l && (i = i.nextSibling) && x(i, l), e.setSelection(n), e._updatePath(n, !0)
                }
            } else {
                if (r = n.cloneRange(), Ut(n, l, l, l), a = n.endContainer, s = n.endOffset, a.nodeType === w && (d = a.childNodes[s], d && "IMG" === d.nodeName))return t.preventDefault(), N(d), Rt(n), void Gt(e, n);
                e.setSelection(r), setTimeout(function () {
                    Gt(e)
                }, 0)
            } else t.preventDefault(), At(n, l), Gt(e, n)
        }, tab: function (e, t, n) {
            var o, i, r = e._root;
            if (e._removeZWS(), n.collapsed && Ft(n, r))for (o = Pt(n, r); i = o.parentNode;) {
                if ("UL" === i.nodeName || "OL" === i.nodeName) {
                    t.preventDefault(), e.modifyBlocks(xn, n);
                    break
                }
                o = i
            }
        }, "shift-tab": function (e, t, n) {
            var o, i = e._root;
            e._removeZWS(), n.collapsed && Ft(n, i) && (o = n.startContainer, (p(o, i, "UL") || p(o, i, "OL")) && (t.preventDefault(), e.modifyBlocks(Ln, n)))
        }, space: function (e, t, n) {
            var o, i;
            e._recordUndoState(n), On(n.startContainer, e._root, e), e._getRangeAndRemoveBookmark(n), o = n.endContainer, i = o.parentNode, n.collapsed && "A" === i.nodeName && !o.nextSibling && n.endOffset === v(o) ? n.setStartAfter(i) : n.collapsed || (At(n, e._root), e._ensureBottomLine(), e.setSelection(n), e._updatePath(n, !0)), e.setSelection(n)
        }, left: function (e) {
            e._removeZWS()
        }, right: function (e) {
            e._removeZWS()
        }
    };
    nt && it && (Zt["meta-left"] = function (e, t) {
        t.preventDefault();
        var n = gn(e);
        n && n.modify && n.modify("move", "backward", "lineboundary")
    }, Zt["meta-right"] = function (e, t) {
        t.preventDefault();
        var n = gn(e);
        n && n.modify && n.modify("move", "forward", "lineboundary")
    }), nt || (Zt.pageup = function (e) {
        e.moveCursorToStart()
    }, Zt.pagedown = function (e) {
        e.moveCursorToEnd()
    }), Zt[ct + "b"] = Kt("B"), Zt[ct + "i"] = Kt("I"), Zt[ct + "u"] = Kt("U"), Zt[ct + "shift-7"] = Kt("S"), Zt[ct + "shift-5"] = Kt("SUB", {tag: "SUP"}), Zt[ct + "shift-6"] = Kt("SUP", {tag: "SUB"}), Zt[ct + "shift-8"] = qt("makeUnorderedList"), Zt[ct + "shift-9"] = qt("makeOrderedList"), Zt[ct + "["] = qt("decreaseQuoteLevel"), Zt[ct + "]"] = qt("increaseQuoteLevel"), Zt[ct + "y"] = qt("redo"), Zt[ct + "z"] = qt("undo"), Zt[ct + "shift-z"] = qt("redo");
    var jt = {1: 10, 2: 13, 3: 16, 4: 18, 5: 24, 6: 32, 7: 48}, Qt = {
        backgroundColor: {
            regexp: mt,
            replace: function (e, t) {
                return S(e, "SPAN", {"class": j, style: "background-color:" + t})
            }
        }, color: {
            regexp: mt, replace: function (e, t) {
                return S(e, "SPAN", {"class": Q, style: "color:" + t})
            }
        }, fontWeight: {
            regexp: /^bold|^700/i, replace: function (e) {
                return S(e, "B")
            }
        }, fontStyle: {
            regexp: /^italic/i, replace: function (e) {
                return S(e, "I")
            }
        }, fontFamily: {
            regexp: mt, replace: function (e, t) {
                return S(e, "SPAN", {"class": V, style: "font-family:" + t})
            }
        }, fontSize: {
            regexp: mt, replace: function (e, t) {
                return S(e, "SPAN", {"class": $, style: "font-size:" + t})
            }
        }, textDecoration: {
            regexp: /^underline/i, replace: function (e) {
                return S(e, "U")
            }
        }
    }, Vt = function (e) {
        return function (t, n) {
            var o = S(t.ownerDocument, e);
            return n.replaceChild(o, t), o.appendChild(_(t)), o
        }
    }, $t = function (e, t) {
        var n, o, i, r, a, s, d = e.style, l = e.ownerDocument;
        for (n in Qt)o = Qt[n], i = d[n], i && o.regexp.test(i) && (s = o.replace(l, i), a || (a = s), r && r.appendChild(s), r = s, e.style[n] = "");
        return a && (r.appendChild(_(e)), "SPAN" === e.nodeName ? t.replaceChild(a, e) : e.appendChild(a)), r || e
    }, Yt = {
        P: $t, SPAN: $t, STRONG: Vt("B"), EM: Vt("I"), INS: Vt("U"), STRIKE: Vt("S"), FONT: function (e, t) {
            var n, o, i, r, a, s = e.face, d = e.size, l = e.color, c = e.ownerDocument;
            return s && (n = S(c, "SPAN", {
                "class": V,
                style: "font-family:" + s
            }), a = n, r = n), d && (o = S(c, "SPAN", {
                "class": $,
                style: "font-size:" + jt[d] + "px"
            }), a || (a = o), r && r.appendChild(o), r = o), l && /^#?([\dA-F]{3}){1,2}$/i.test(l) && ("#" !== l.charAt(0) && (l = "#" + l), i = S(c, "SPAN", {
                "class": Q,
                style: "color:" + l
            }), a || (a = i), r && r.appendChild(i), r = i), a || (a = r = S(c, "SPAN")), t.replaceChild(a, e), r.appendChild(_(e)), r
        }, TT: function (e, t) {
            var n = S(e.ownerDocument, "SPAN", {
                "class": V,
                style: 'font-family:menlo,consolas,"courier new",monospace'
            });
            return t.replaceChild(n, e), n.appendChild(_(e)), n
        }
    }, Xt = /^(?:A(?:DDRESS|RTICLE|SIDE|UDIO)|BLOCKQUOTE|CAPTION|D(?:[DLT]|IV)|F(?:IGURE|IGCAPTION|OOTER)|H[1-6]|HEADER|L(?:ABEL|EGEND|I)|O(?:L|UTPUT)|P(?:RE)?|SECTION|T(?:ABLE|BODY|D|FOOT|H|HEAD|R)|COL(?:GROUP)?|UL)$/, Jt = /^(?:HEAD|META|STYLE)/, en = new n(null, z | W, function () {
        return !0
    }), tn = function Un(e, t) {
        var n, o, i, r, s, d, l, c, h, u, f, p, g = e.childNodes;
        for (n = e; a(n);)n = n.parentNode;
        for (en.root = n, o = 0, i = g.length; i > o; o += 1)if (r = g[o], s = r.nodeName, d = r.nodeType, l = Yt[s], d === w) {
            if (c = r.childNodes.length, l)r = l(r, e); else {
                if (Jt.test(s)) {
                    e.removeChild(r), o -= 1, i -= 1;
                    continue
                }
                if (!Xt.test(s) && !a(r)) {
                    o -= 1, i += c - 1, e.replaceChild(_(r), r);
                    continue
                }
            }
            c && Un(r, t || "PRE" === s)
        } else {
            if (d === F) {
                if (f = r.data, h = !mt.test(f.charAt(0)), u = !mt.test(f.charAt(f.length - 1)), t || !h && !u)continue;
                if (h) {
                    for (en.currentNode = r; (p = en.previousPONode()) && (s = p.nodeName, !("IMG" === s || "#text" === s && mt.test(p.data)));)if (!a(p)) {
                        p = null;
                        break
                    }
                    f = f.replace(/^[ \t\r\n]+/g, p ? " " : "")
                }
                if (u) {
                    for (en.currentNode = r; (p = en.nextNode()) && !("IMG" === s || "#text" === s && mt.test(p.data));)if (!a(p)) {
                        p = null;
                        break
                    }
                    f = f.replace(/[ \t\r\n]+$/g, p ? " " : "")
                }
                if (f) {
                    r.data = f;
                    continue
                }
            }
            e.removeChild(r), o -= 1, i -= 1
        }
        return e
    }, nn = function Pn(e) {
        for (var t, n = e.childNodes, o = n.length; o--;)t = n[o], t.nodeType !== w || i(t) ? t.nodeType !== F || t.data || e.removeChild(t) : (Pn(t), a(t) && !t.firstChild && e.removeChild(t))
    }, on = function (e) {
        return e.nodeType === w ? "BR" === e.nodeName : mt.test(e.data)
    }, rn = function (e, t) {
        for (var o, i = e.parentNode; a(i);)i = i.parentNode;
        return o = new n(i, W | z, on), o.currentNode = e, !!o.nextNode() || t && !o.previousNode()
    }, an = function (e, t, n) {
        var o, i, r, s = e.querySelectorAll("BR"), d = [], l = s.length;
        for (o = 0; l > o; o += 1)d[o] = rn(s[o], n);
        for (; l--;)i = s[l], r = i.parentNode, r && (d[l] ? a(r) || T(r, t) : N(i))
    }, sn = function (e, t, n) {
        var o, i, r = t.ownerDocument.body;
        an(t, n, !0), t.setAttribute("style", "position:fixed;overflow:hidden;bottom:100%;right:100%;"), r.appendChild(t), o = t.innerHTML, i = t.innerText || t.textContent, ot && (i = i.replace(/\r?\n/g, "\r\n")), e.setData("text/html", o), e.setData("text/plain", i), r.removeChild(t)
    }, dn = function (e) {
        var t, n, o, i, r, a, s, d = e.clipboardData, l = this.getSelection(), c = this._root, h = this;
        if (l.collapsed)return void e.preventDefault();
        if (this.saveUndoState(l), st || tt || !d)setTimeout(function () {
            try {
                h._ensureBottomLine()
            } catch (e) {
                h.didError(e)
            }
        }, 0); else {
            for (t = Pt(l, c), n = It(l, c), o = t === n && t || c, i = At(l, c), r = l.commonAncestorContainer, r.nodeType === F && (r = r.parentNode); r && r !== o;)a = r.cloneNode(!1), a.appendChild(i), i = a, r = r.parentNode;
            s = this.createElement("div"), s.appendChild(i), sn(d, s, c), e.preventDefault()
        }
        this.setSelection(l)
    }, ln = function (e) {
        var t, n, o, i, r, a, s, d = e.clipboardData, l = this.getSelection(), c = this._root;
        if (!st && !tt && d) {
            for (t = Pt(l, c), n = It(l, c), o = t === n && t || c, l = l.cloneRange(), Rt(l), Ut(l, o, o, c), i = l.cloneContents(), r = l.commonAncestorContainer, r.nodeType === F && (r = r.parentNode); r && r !== o;)a = r.cloneNode(!1), a.appendChild(i), i = a, r = r.parentNode;
            s = this.createElement("div"), s.appendChild(i), sn(d, s, c), e.preventDefault()
        }
    }, cn = function (e) {
        var t, n, o, i, r, a = e.clipboardData, s = a && a.items, d = this.isShiftDown, l = !1, c = !1, h = null, u = this;
        if (!st && s) {
            for (e.preventDefault(), t = s.length; t--;) {
                if (n = s[t], o = n.type, !d && "text/html" === o)return void n.getAsString(function (e) {
                    u.insertHTML(e, !0)
                });
                "text/plain" === o && (h = n), !d && /^image\/.*/.test(o) && (c = !0)
            }
            return void(c ? (this.fireEvent("dragover", {
                dataTransfer: a, preventDefault: function () {
                    l = !0
                }
            }), l && this.fireEvent("drop", {dataTransfer: a})) : h && h.getAsString(function (e) {
                u.insertPlainText(e, !0)
            }))
        }
        if (i = a && a.types, !st && i && (vt.call(i, "text/html") > -1 || !it && vt.call(i, "text/plain") > -1 && vt.call(i, "text/rtf") < 0))return e.preventDefault(), void(!d && (r = a.getData("text/html")) ? this.insertHTML(r, !0) : ((r = a.getData("text/plain")) || (r = a.getData("text/uri-list"))) && this.insertPlainText(r, !0));
        this._awaitingPaste = !0;
        var f = this._doc.body, p = this.getSelection(), g = p.startContainer, m = p.startOffset, v = p.endContainer, C = p.endOffset, _ = this.createElement("DIV", {
            contenteditable: "true",
            style: "position:fixed; overflow:hidden; top:0; right:100%; width:1px; height:1px;"
        });
        f.appendChild(_), p.selectNodeContents(_), this.setSelection(p), setTimeout(function () {
            try {
                u._awaitingPaste = !1;
                for (var e, t, n = "", o = _; _ = o;)o = _.nextSibling, N(_), e = _.firstChild, e && e === _.lastChild && "DIV" === e.nodeName && (_ = e), n += _.innerHTML;
                t = u._createRange(g, m, v, C), u.setSelection(t), n && u.insertHTML(n, !0)
            } catch (i) {
                u.didError(i)
            }
        }, 0)
    }, hn = function (e) {
        for (var t = e.dataTransfer.types, n = t.length, o = !1, i = !1; n--;)switch (t[n]) {
            case"text/plain":
                o = !0;
                break;
            case"text/html":
                i = !0;
                break;
            default:
                return
        }
        (i || o) && this.saveUndoState()
    }, un = O.prototype, fn = function (e, t, n) {
        var o = n._doc, i = e ? DOMPurify.sanitize(e, {
            WHOLE_DOCUMENT: !1,
            RETURN_DOM: !0,
            RETURN_DOM_FRAGMENT: !0
        }) : null;
        return i ? o.importNode(i, !0) : o.createDocumentFragment()
    };
    un.setConfig = function (e) {
        return e = A({
            blockTag: "DIV",
            blockAttributes: null,
            tagAttributes: {blockquote: null, ul: null, ol: null, li: null, a: null},
            leafNodeNames: _t,
            undo: {documentSizeThreshold: -1, undoLimit: -1},
            isInsertedHTMLSanitized: !0,
            isSetHTMLSanitized: !0,
            sanitizeToDOMFragment: "undefined" != typeof DOMPurify && DOMPurify.isSupported ? fn : null
        }, e, !0), e.blockTag = e.blockTag.toUpperCase(), this._config = e, this
    }, un.createElement = function (e, t, n) {
        return S(this._doc, e, t, n)
    }, un.createDefaultBlock = function (e) {
        var t = this._config;
        return y(this.createElement(t.blockTag, t.blockAttributes, e), this._root)
    }, un.didError = function (e) {
        console.log(e)
    }, un.getDocument = function () {
        return this._doc
    }, un.getRoot = function () {
        return this._root
    }, un.modifyDocument = function (e) {
        var t = this._mutation;
        t && (t.takeRecords().length && this._docWasChanged(), t.disconnect()), this._ignoreAllChanges = !0, e(), this._ignoreAllChanges = !1, t && (t.observe(this._root, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        }), this._ignoreChange = !1)
    };
    var pn = {pathChange: 1, select: 1, input: 1, undoStateChange: 1};
    un.fireEvent = function (e, t) {
        var n, o, i, r = this._events[e];
        if (/^(?:focus|blur)/.test(e))if (n = g(this._root, this._doc.activeElement), "focus" === e) {
            if (!n || this._isFocused)return this;
            this._isFocused = !0
        } else {
            if (n || !this._isFocused)return this;
            this._isFocused = !1
        }
        if (r)for (t || (t = {}), t.type !== e && (t.type = e), r = r.slice(), o = r.length; o--;) {
            i = r[o];
            try {
                i.handleEvent ? i.handleEvent(t) : i.call(this, t)
            } catch (a) {
                a.details = "Squire: fireEvent error. Event type: " + e, this.didError(a)
            }
        }
        return this
    }, un.destroy = function () {
        var e, t = this._events;
        for (e in t)this.removeEventListener(e);
        this._mutation && this._mutation.disconnect(), delete this._root.__squire__, this._undoIndex = -1, this._undoStack = [], this._undoStackLength = 0
    }, un.handleEvent = function (e) {
        this.fireEvent(e.type, e)
    }, un.addEventListener = function (e, t) {
        var n = this._events[e], o = this._root;
        return t ? (n || (n = this._events[e] = [], pn[e] || ("selectionchange" === e && (o = this._doc), o.addEventListener(e, this, !0))), n.push(t), this) : (this.didError({
            name: "Squire: addEventListener with null or undefined fn",
            message: "Event type: " + e
        }), this)
    }, un.removeEventListener = function (e, t) {
        var n, o = this._events[e], i = this._root;
        if (o) {
            if (t)for (n = o.length; n--;)o[n] === t && o.splice(n, 1); else o.length = 0;
            o.length || (delete this._events[e], pn[e] || ("selectionchange" === e && (i = this._doc), i.removeEventListener(e, this, !0)))
        }
        return this
    }, un._createRange = function (e, t, n, o) {
        if (e instanceof this._win.Range)return e.cloneRange();
        var i = this._doc.createRange();
        return i.setStart(e, t), n ? i.setEnd(n, o) : i.setEnd(e, t), i
    }, un.getCursorPosition = function (e) {
        if (!e && !(e = this.getSelection()) || !e.getBoundingClientRect)return null;
        var t, n, o = e.getBoundingClientRect();
        return o && !o.top && (this._ignoreChange = !0, t = this._doc.createElement("SPAN"), t.textContent = Y, xt(e, t), o = t.getBoundingClientRect(), n = t.parentNode, n.removeChild(t), k(n, e)), o
    }, un._moveCursorTo = function (e) {
        var t = this._root, n = this._createRange(t, e ? 0 : t.childNodes.length);
        return Rt(n), this.setSelection(n), this
    }, un.moveCursorToStart = function () {
        return this._moveCursorTo(!0)
    }, un.moveCursorToEnd = function () {
        return this._moveCursorTo(!1)
    };
    var gn = function (e) {
        return e._win.getSelection() || null
    };
    un.setSelection = function (e) {
        if (e)if (this._lastSelection = e, this._isFocused)if (et && !this._restoreSelection)D.call(this), this.blur(), this.focus(); else {
            tt && this._win.focus();
            var t = gn(this);
            t && (t.removeAllRanges(), t.addRange(e))
        } else D.call(this);
        return this
    }, un.getSelection = function () {
        var e, t, n, o = gn(this), r = this._root;
        return this._isFocused && o && o.rangeCount && (e = o.getRangeAt(0).cloneRange(), t = e.startContainer, n = e.endContainer, t && i(t) && e.setStartBefore(t), n && i(n) && e.setEndBefore(n)), e && g(r, e.commonAncestorContainer) ? this._lastSelection = e : e = this._lastSelection, e || (e = this._createRange(r.firstChild, 0)), e
    }, un.getSelectedText = function () {
        var e, t = this.getSelection(), o = new n(t.commonAncestorContainer, z | W, function (e) {
            return Dt(t, e, !0)
        }), i = t.startContainer, r = t.endContainer, s = o.currentNode = i, d = "", l = !1;
        for (o.filter(s) || (s = o.nextNode()); s;)s.nodeType === F ? (e = s.data, e && /\S/.test(e) && (s === r && (e = e.slice(0, t.endOffset)), s === i && (e = e.slice(t.startOffset)), d += e, l = !0)) : ("BR" === s.nodeName || l && !a(s)) && (d += "\n", l = !1), s = o.nextNode();
        return d
    }, un.getPath = function () {
        return this._path
    };
    var mn = function (e, t) {
        for (var o, i, r, s = new n(e, z, function () {
            return !0
        }, !1); i = s.nextNode();)for (; (r = i.data.indexOf(Y)) > -1 && (!t || i.parentNode !== t);) {
            if (1 === i.length) {
                do o = i.parentNode, o.removeChild(i), i = o, s.currentNode = o; while (a(i) && !v(i));
                break
            }
            i.deleteData(r, 1)
        }
    };
    un._didAddZWS = function () {
        this._hasZWS = !0
    }, un._removeZWS = function () {
        this._hasZWS && (mn(this._root), this._hasZWS = !1)
    }, un._updatePath = function (e, t) {
        var n, o = e.startContainer, i = e.endContainer;
        (t || o !== this._lastAnchorNode || i !== this._lastFocusNode) && (this._lastAnchorNode = o, this._lastFocusNode = i, n = o && i ? o === i ? m(i, this._root) : "(selection)" : "", this._path !== n && (this._path = n, this.fireEvent("pathChange", {path: n}))), e.collapsed || this.fireEvent("select")
    }, un._updatePathOnEvent = function () {
        var e = this;
        e._willUpdatePath || (e._willUpdatePath = !0, setTimeout(function () {
            e._willUpdatePath = !1, e._updatePath(e.getSelection())
        }, 0))
    }, un.focus = function () {
        return this._root.focus(), lt && this.fireEvent("focus"), this
    }, un.blur = function () {
        return this._root.blur(), lt && this.fireEvent("blur"), this
    };
    var vn = "squire-selection-start", Nn = "squire-selection-end";
    un._saveRangeToBookmark = function (e) {
        var t, n = this.createElement("INPUT", {id: vn, type: "hidden"}), o = this.createElement("INPUT", {
            id: Nn,
            type: "hidden"
        });
        xt(e, n), e.collapse(!1), xt(e, o), n.compareDocumentPosition(o) & I && (n.id = Nn, o.id = vn, t = n, n = o, o = t), e.setStartAfter(n), e.setEndBefore(o)
    }, un._getRangeAndRemoveBookmark = function (e) {
        var t = this._root, n = t.querySelector("#" + vn), o = t.querySelector("#" + Nn);
        if (n && o) {
            var i = n.parentNode, r = o.parentNode, a = vt.call(i.childNodes, n), s = vt.call(r.childNodes, o);
            i === r && (s -= 1), N(n), N(o), e || (e = this._doc.createRange()), e.setStart(i, a), e.setEnd(r, s), k(i, e), i !== r && k(r, e), e.collapsed && (i = e.startContainer, i.nodeType === F && (r = i.childNodes[e.startOffset], r && r.nodeType === F || (r = i.childNodes[e.startOffset - 1]), r && r.nodeType === F && (e.setStart(r, 0), e.collapse(!0))))
        }
        return e || null
    }, un._keyUpDetectChange = function (e) {
        var t = e.keyCode;
        e.ctrlKey || e.metaKey || e.altKey || !(16 > t || t > 20) || !(33 > t || t > 45) || this._docWasChanged()
    }, un._docWasChanged = function () {
        if (gt && (Et = new WeakMap), !this._ignoreAllChanges) {
            if (pt && this._ignoreChange)return void(this._ignoreChange = !1);
            this._isInUndoState && (this._isInUndoState = !1, this.fireEvent("undoStateChange", {
                canUndo: !0,
                canRedo: !1
            })), this.fireEvent("input")
        }
    }, un._recordUndoState = function (e) {
        if (!this._isInUndoState) {
            var t, n = this._undoIndex += 1, o = this._undoStack, i = this._config.undo, r = i.documentSizeThreshold, a = i.undoLimit;
            n < this._undoStackLength && (o.length = this._undoStackLength = n), e && this._saveRangeToBookmark(e), t = this._getHTML(), r > -1 && 2 * t.length > r && a > -1 && n > a && (o.splice(0, n - a), n = this._undoIndex = a, this._undoStackLength = a), o[n] = t, this._undoStackLength += 1, this._isInUndoState = !0
        }
    }, un.saveUndoState = function (e) {
        return e === t && (e = this.getSelection()), this._isInUndoState || (this._recordUndoState(e), this._getRangeAndRemoveBookmark(e)), this
    }, un.undo = function () {
        if (0 !== this._undoIndex || !this._isInUndoState) {
            this._recordUndoState(this.getSelection()), this._undoIndex -= 1, this._setHTML(this._undoStack[this._undoIndex]);
            var e = this._getRangeAndRemoveBookmark();
            e && this.setSelection(e), this._isInUndoState = !0, this.fireEvent("undoStateChange", {
                canUndo: 0 !== this._undoIndex,
                canRedo: !0
            }), this.fireEvent("input")
        }
        return this
    }, un.redo = function () {
        var e = this._undoIndex, t = this._undoStackLength;
        if (t > e + 1 && this._isInUndoState) {
            this._undoIndex += 1, this._setHTML(this._undoStack[this._undoIndex]);
            var n = this._getRangeAndRemoveBookmark();
            n && this.setSelection(n), this.fireEvent("undoStateChange", {
                canUndo: !0,
                canRedo: t > e + 2
            }), this.fireEvent("input")
        }
        return this
    }, un.hasFormat = function (e, t, o) {
        if (e = e.toUpperCase(), t || (t = {}), !o && !(o = this.getSelection()))return !1;
        !o.collapsed && o.startContainer.nodeType === F && o.startOffset === o.startContainer.length && o.startContainer.nextSibling && o.setStartBefore(o.startContainer.nextSibling), !o.collapsed && o.endContainer.nodeType === F && 0 === o.endOffset && o.endContainer.previousSibling && o.setEndAfter(o.endContainer.previousSibling);
        var i, r, a = this._root, s = o.commonAncestorContainer;
        if (p(s, a, e, t))return !0;
        if (s.nodeType === F)return !1;
        i = new n(s, z, function (e) {
            return Dt(o, e, !0)
        }, !1);
        for (var d = !1; r = i.nextNode();) {
            if (!p(r, a, e, t))return !1;
            d = !0
        }
        return d
    }, un.getFontInfo = function (e) {
        var n, o, i, r = {color: t, backgroundColor: t, family: t, size: t}, a = 0;
        if (!e && !(e = this.getSelection()))return r;
        if (n = e.commonAncestorContainer, e.collapsed || n.nodeType === F)for (n.nodeType === F && (n = n.parentNode); 4 > a && n;)(o = n.style) && (!r.color && (i = o.color) && (r.color = i, a += 1), !r.backgroundColor && (i = o.backgroundColor) && (r.backgroundColor = i, a += 1), !r.family && (i = o.fontFamily) && (r.family = i, a += 1), !r.size && (i = o.fontSize) && (r.size = i, a += 1)), n = n.parentNode;
        return r
    }, un._addFormat = function (e, t, o) {
        var i, r, s, d, l, c, h, u, f, g = this._root;
        if (o.collapsed) {
            for (i = y(this.createElement(e, t), g), xt(o, i), o.setStart(i.firstChild, i.firstChild.length), o.collapse(!0), f = i; a(f);)f = f.parentNode;
            mn(f, i)
        } else {
            if (r = new n(o.commonAncestorContainer, z | W, function (e) {
                    return (e.nodeType === F || "BR" === e.nodeName || "IMG" === e.nodeName) && Dt(o, e, !0)
                }, !1), s = o.startContainer, l = o.startOffset, d = o.endContainer, c = o.endOffset, r.currentNode = s, r.filter(s) || (s = r.nextNode(), l = 0), !s)return o;
            do h = r.currentNode, u = !p(h, g, e, t), u && (h === d && h.length > c && h.splitText(c), h === s && l && (h = h.splitText(l), d === s && (d = h, c -= l), s = h, l = 0), i = this.createElement(e, t), C(h, i), i.appendChild(h)); while (r.nextNode());
            d.nodeType !== F && (h.nodeType === F ? (d = h, c = h.length) : (d = h.parentNode, c = 1)), o = this._createRange(s, l, d, c)
        }
        return o
    }, un._removeFormat = function (e, t, n, o) {
        this._saveRangeToBookmark(n);
        var i, r = this._doc;
        n.collapsed && (ut ? (i = r.createTextNode(Y), this._didAddZWS()) : i = r.createTextNode(""), xt(n, i));
        for (var s = n.commonAncestorContainer; a(s);)s = s.parentNode;
        var d = n.startContainer, l = n.startOffset, c = n.endContainer, h = n.endOffset, u = [], p = function (e, t) {
            if (!Dt(n, e, !1)) {
                var o, i, r = e.nodeType === F;
                if (!Dt(n, e, !0))return void("INPUT" === e.nodeName || r && !e.data || u.push([t, e]));
                if (r)e === c && h !== e.length && u.push([t, e.splitText(h)]), e === d && l && (e.splitText(l), u.push([t, e])); else for (o = e.firstChild; o; o = i)i = o.nextSibling, p(o, t)
            }
        }, g = Array.prototype.filter.call(s.getElementsByTagName(e), function (o) {
            return Dt(n, o, !0) && f(o, e, t)
        });
        return o || g.forEach(function (e) {
            p(e, e)
        }), u.forEach(function (e) {
            var t = e[0].cloneNode(!1), n = e[1];
            C(n, t), t.appendChild(n)
        }), g.forEach(function (e) {
            C(e, _(e))
        }), this._getRangeAndRemoveBookmark(n), i && n.collapse(!1), k(s, n), n
    }, un.changeFormat = function (e, t, n, o) {
        return n || (n = this.getSelection()) ? (this.saveUndoState(n), t && (n = this._removeFormat(t.tag.toUpperCase(), t.attributes || {}, n, o)), e && (n = this._addFormat(e.tag.toUpperCase(), e.attributes || {}, n)), this.setSelection(n), this._updatePath(n, !0), pt || this._docWasChanged(), this) : this
    };
    var Cn = {DT: "DD", DD: "DT", LI: "LI"}, _n = function (e, t, n, o) {
        var i = Cn[t.nodeName], r = null, a = b(n, o, t.parentNode, e._root), s = e._config;
        return i || (i = s.blockTag, r = s.blockAttributes), f(a, i, r) || (t = S(a.ownerDocument, i, r), a.dir && (t.dir = a.dir), C(a, t), t.appendChild(_(a)), a = t), a
    };
    un.forEachBlock = function (e, t, n) {
        if (!n && !(n = this.getSelection()))return this;
        t && this.saveUndoState(n);
        var o = this._root, i = Pt(n, o), r = It(n, o);
        if (i && r)do if (e(i) || i === r)break; while (i = h(i, o));
        return t && (this.setSelection(n), this._updatePath(n, !0), pt || this._docWasChanged()), this
    }, un.modifyBlocks = function (e, t) {
        if (!t && !(t = this.getSelection()))return this;
        this._isInUndoState ? this._saveRangeToBookmark(t) : this._recordUndoState(t);
        var n, o = this._root;
        return Ht(t, o), Ut(t, o, o, o), n = Lt(t, o, o), xt(t, e.call(this, n)), t.endOffset < t.endContainer.childNodes.length && x(t.endContainer.childNodes[t.endOffset], o), x(t.startContainer.childNodes[t.startOffset], o), this._getRangeAndRemoveBookmark(t), this.setSelection(t), this._updatePath(t, !0), pt || this._docWasChanged(), this
    };
    var Sn = function (e) {
        return this.createElement("BLOCKQUOTE", this._config.tagAttributes.blockquote, [e])
    }, yn = function (e) {
        var t = this._root, n = e.querySelectorAll("blockquote");
        return Array.prototype.filter.call(n, function (e) {
            return !p(e.parentNode, t, "BLOCKQUOTE")
        }).forEach(function (e) {
            C(e, _(e))
        }), e
    }, Tn = function () {
        return this.createDefaultBlock([this.createElement("INPUT", {
            id: vn,
            type: "hidden"
        }), this.createElement("INPUT", {id: Nn, type: "hidden"})])
    }, bn = function (e, t, n) {
        for (var o, i, r, a, s = l(t, e._root), d = e._config.tagAttributes, c = d[n.toLowerCase()], h = d.li; o = s.nextNode();)"LI" === o.parentNode.nodeName && (o = o.parentNode, s.currentNode = o.lastChild), "LI" !== o.nodeName ? (a = e.createElement("LI", h), o.dir && (a.dir = o.dir), (r = o.previousSibling) && r.nodeName === n ? (r.appendChild(a), N(o)) : C(o, e.createElement(n, c, [a])), a.appendChild(_(o)), s.currentNode = a) : (o = o.parentNode, i = o.nodeName, i !== n && /^[OU]L$/.test(i) && C(o, e.createElement(n, c, [_(o)])))
    }, En = function (e) {
        return bn(this, e, "UL"), e
    }, kn = function (e) {
        return bn(this, e, "OL"), e
    }, Bn = function (e) {
        var t, n, o, i, r, a = e.querySelectorAll("UL, OL"), d = e.querySelectorAll("LI"), l = this._root;
        for (t = 0, n = a.length; n > t; t += 1)o = a[t], i = _(o), T(i, l), C(o, i);
        for (t = 0, n = d.length; n > t; t += 1)r = d[t], s(r) ? C(r, this.createDefaultBlock([_(r)])) : (T(r, l), C(r, _(r)));
        return e
    }, xn = function (e) {
        var t, n, o, i, r, a, s = e.querySelectorAll("LI"), l = this._config.tagAttributes;
        for (t = 0, n = s.length; n > t; t += 1)o = s[t], d(o.firstChild) || (i = o.parentNode.nodeName, r = o.previousSibling, r && (r = r.lastChild) && r.nodeName === i || (a = l[i.toLowerCase()], r = this.createElement(i, a), C(o, r)), r.appendChild(o));
        return e
    }, Ln = function (e) {
        var t = this._root, n = e.querySelectorAll("LI");
        return Array.prototype.filter.call(n, function (e) {
            return !d(e.firstChild)
        }).forEach(function (n) {
            var o, i = n.parentNode, r = i.parentNode, a = n.firstChild, s = a;
            if (n.previousSibling && (i = b(i, n, r, t)), /^[OU]L$/.test(r.nodeName))r.insertBefore(n, i), i.firstChild || r.removeChild(i); else for (; s && (o = s.nextSibling, !d(s));)r.insertBefore(s, i), s = o;
            for ("LI" === r.nodeName && a.previousSibling && b(r, a, r.parentNode, t); n !== e && !n.childNodes.length;)i = n.parentNode, i.removeChild(n), n = i
        }, this), T(e, t), e
    };
    un._ensureBottomLine = function () {
        var e = this._root, t = e.lastElementChild;
        t && t.nodeName === this._config.blockTag && s(t) || e.appendChild(this.createDefaultBlock())
    }, un.setKeyHandler = function (e, t) {
        return this._keyHandlers[e] = t, this
    }, un._getHTML = function () {
        return this._root.innerHTML
    }, un._setHTML = function (e) {
        var t = this._root, n = t;
        n.innerHTML = e;
        do y(n, t); while (n = h(n, t));
        this._ignoreChange = !0
    }, un.getHTML = function (e) {
        var t, n, o, i, r, a, s = [];
        if (e && (a = this.getSelection()) && this._saveRangeToBookmark(a), ht)for (t = this._root, n = t; n = h(n, t);)n.textContent || n.querySelector("BR") || (o = this.createElement("BR"), n.appendChild(o), s.push(o));
        if (i = this._getHTML().replace(/\u200B/g, ""), ht)for (r = s.length; r--;)N(s[r]);
        return a && this._getRangeAndRemoveBookmark(a), i
    }, un.setHTML = function (e) {
        var t, n, o, i = this._config, r = i.isSetHTMLSanitized ? i.sanitizeToDOMFragment : null, a = this._root;
        "function" == typeof r ? n = r(e, !1, this) : (t = this.createElement("DIV"), t.innerHTML = e, n = this._doc.createDocumentFragment(), n.appendChild(_(t))), tn(n), an(n, a, !1), T(n, a);
        for (var s = n; s = h(s, a);)y(s, a);
        for (this._ignoreChange = !0; o = a.lastChild;)a.removeChild(o);
        a.appendChild(n), y(a, a), this._undoIndex = -1, this._undoStack.length = 0, this._undoStackLength = 0, this._isInUndoState = !1;
        var d = this._getRangeAndRemoveBookmark() || this._createRange(a.firstChild, 0);
        return this.saveUndoState(d), this._lastSelection = d, D.call(this), this._updatePath(d, !0), this
    }, un.insertElement = function (e, t) {
        if (t || (t = this.getSelection()), t.collapse(!0), a(e))xt(t, e), t.setStartAfter(e); else {
            for (var n, o, i = this._root, r = Pt(t, i) || i; r !== i && !r.nextSibling;)r = r.parentNode;
            r !== i && (n = r.parentNode, o = b(n, r.nextSibling, i, i)), o ? i.insertBefore(e, o) : (i.appendChild(e), o = this.createDefaultBlock(), i.appendChild(o)), t.setStart(o, 0), t.setEnd(o, 0), Rt(t)
        }
        return this.focus(), this.setSelection(t), this._updatePath(t), pt || this._docWasChanged(), this
    }, un.insertImage = function (e, t) {
        var n = this.createElement("IMG", A({src: e}, t, !0));
        return this.insertElement(n), n
    };
    var An = /\b((?:(?:ht|f)tps?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,}\/)(?:[^\s()<>]+|\([^\s()<>]+\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|([\w\-.%+]+@(?:[\w\-]+\.)+[A-Z]{2,}\b)/i, On = function (e, t, o) {
        for (var i, r, a, s, d, l, c, h = e.ownerDocument, u = new n(e, z, function (e) {
            return !p(e, t, "A")
        }, !1), f = o._config.tagAttributes.a; i = u.nextNode();)for (r = i.data, a = i.parentNode; s = An.exec(r);)d = s.index, l = d + s[0].length, d && (c = h.createTextNode(r.slice(0, d)), a.insertBefore(c, i)), c = o.createElement("A", A({href: s[1] ? /^(?:ht|f)tps?:/.test(s[1]) ? s[1] : "http://" + s[1] : "mailto:" + s[2]}, f, !1)), c.textContent = r.slice(d, l), a.insertBefore(c, i), i.data = r = r.slice(l)
    };
    un.insertHTML = function (e, t) {
        var n, o, i, r, a, s, d, l = this._config, c = l.isInsertedHTMLSanitized ? l.sanitizeToDOMFragment : null, u = this.getSelection(), f = this._doc;
        "function" == typeof c ? r = c(e, t, this) : (t && (n = e.indexOf("<!--StartFragment-->"), o = e.lastIndexOf("<!--EndFragment-->"), n > -1 && o > -1 && (e = e.slice(n + 20, o))), i = this.createElement("DIV"), i.innerHTML = e, r = f.createDocumentFragment(), r.appendChild(_(i))), this.saveUndoState(u);
        try {
            for (a = this._root, s = r, d = {
                fragment: r, preventDefault: function () {
                    this.defaultPrevented = !0
                }, defaultPrevented: !1
            }, On(r, r, this), tn(r), an(r, a, !1), nn(r), r.normalize(); s = h(s, r);)y(s, a);
            t && this.fireEvent("willPaste", d), d.defaultPrevented || (Ot(u, d.fragment, a), pt || this._docWasChanged(), u.collapse(!1), this._ensureBottomLine()), this.setSelection(u), this._updatePath(u, !0), t && this.focus()
        } catch (p) {
            this.didError(p)
        }
        return this
    };
    var Dn = function (e) {
        return e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")
    };
    un.insertPlainText = function (e, t) {
        var n, o, i, r, a = e.split("\n"), s = this._config, d = s.blockTag, l = s.blockAttributes, c = "</" + d + ">", h = "<" + d;
        for (n in l)h += " " + n + '="' + Dn(l[n]) + '"';
        for (h += ">", o = 0, i = a.length; i > o; o += 1)r = a[o], r = Dn(r).replace(/ (?= )/g, "&nbsp;"), o && i > o + 1 && (r = h + (r || "<BR>") + c), a[o] = r;
        return this.insertHTML(a.join(""), t)
    };
    var Rn = function (e, t, n) {
        return function () {
            return this[e](t, n), this.focus()
        }
    };
    un.addStyles = function (e) {
        if (e) {
            var t = this._doc.documentElement.firstChild, n = this.createElement("STYLE", {type: "text/css"});
            n.appendChild(this._doc.createTextNode(e)), t.appendChild(n)
        }
        return this
    }, un.bold = Rn("changeFormat", {tag: "B"}), un.italic = Rn("changeFormat", {tag: "I"}), un.underline = Rn("changeFormat", {tag: "U"}), un.strikethrough = Rn("changeFormat", {tag: "S"}), un.subscript = Rn("changeFormat", {tag: "SUB"}, {tag: "SUP"}), un.superscript = Rn("changeFormat", {tag: "SUP"}, {tag: "SUB"}), un.removeBold = Rn("changeFormat", null, {tag: "B"}), un.removeItalic = Rn("changeFormat", null, {tag: "I"}), un.removeUnderline = Rn("changeFormat", null, {tag: "U"}), un.removeStrikethrough = Rn("changeFormat", null, {tag: "S"}), un.removeSubscript = Rn("changeFormat", null, {tag: "SUB"}), un.removeSuperscript = Rn("changeFormat", null, {tag: "SUP"}), un.makeLink = function (e, t) {
        var n = this.getSelection();
        if (n.collapsed) {
            var o = e.indexOf(":") + 1;
            if (o)for (; "/" === e[o];)o += 1;
            xt(n, this._doc.createTextNode(e.slice(o)))
        }
        return t = A(A({href: e}, t, !0), this._config.tagAttributes.a, !1), this.changeFormat({
            tag: "A",
            attributes: t
        }, {tag: "A"}, n), this.focus()
    }, un.removeLink = function () {
        return this.changeFormat(null, {tag: "A"}, this.getSelection(), !0), this.focus()
    }, un.setFontFace = function (e) {
        return this.changeFormat(e ? {
            tag: "SPAN",
            attributes: {"class": V, style: "font-family: " + e + ", sans-serif;"}
        } : null, {tag: "SPAN", attributes: {"class": V}}), this.focus()
    }, un.setFontSize = function (e) {
        return this.changeFormat(e ? {
            tag: "SPAN",
            attributes: {"class": $, style: "font-size: " + ("number" == typeof e ? e + "px" : e)}
        } : null, {tag: "SPAN", attributes: {"class": $}}), this.focus()
    }, un.setTextColour = function (e) {
        return this.changeFormat(e ? {tag: "SPAN", attributes: {"class": Q, style: "color:" + e}} : null, {
            tag: "SPAN",
            attributes: {"class": Q}
        }), this.focus()
    }, un.setHighlightColour = function (e) {
        return this.changeFormat(e ? {
            tag: "SPAN",
            attributes: {"class": j, style: "background-color:" + e}
        } : e, {tag: "SPAN", attributes: {"class": j}}), this.focus()
    }, un.setTextAlignment = function (e) {
        return this.forEachBlock(function (t) {
            var n = t.className.split(/\s+/).filter(function (e) {
                return !!e && !/^align/.test(e)
            }).join(" ");
            e ? (t.className = n + " align-" + e, t.style.textAlign = e) : (t.className = n, t.style.textAlign = "")
        }, !0), this.focus()
    }, un.setTextDirection = function (e) {
        return this.forEachBlock(function (t) {
            e ? t.dir = e : t.removeAttribute("dir")
        }, !0), this.focus()
    }, un.removeAllFormatting = function (e) {
        if (!e && !(e = this.getSelection()) || e.collapsed)return this;
        for (var t = this._root, n = e.commonAncestorContainer; n && !s(n);)n = n.parentNode;
        if (n || (Ht(e, t), n = t), n.nodeType === F)return this;
        this.saveUndoState(e), Ut(e, n, n, t);
        for (var o, i, r = n.ownerDocument, a = e.startContainer, d = e.startOffset, l = e.endContainer, c = e.endOffset, h = r.createDocumentFragment(), u = r.createDocumentFragment(), f = b(l, c, n, t), p = b(a, d, n, t); p !== f;)o = p.nextSibling, h.appendChild(p), p = o;
        return P(this, h, u), u.normalize(), p = u.firstChild, o = u.lastChild, i = n.childNodes, p ? (n.insertBefore(u, f), d = vt.call(i, p), c = vt.call(i, o) + 1) : (d = vt.call(i, f), c = d), e.setStart(n, d), e.setEnd(n, c), k(n, e), Rt(e), this.setSelection(e), this._updatePath(e, !0), this.focus()
    }, un.increaseQuoteLevel = Rn("modifyBlocks", Sn), un.decreaseQuoteLevel = Rn("modifyBlocks", yn), un.makeUnorderedList = Rn("modifyBlocks", En), un.makeOrderedList = Rn("modifyBlocks", kn), un.removeList = Rn("modifyBlocks", Bn), un.increaseListLevel = Rn("modifyBlocks", xn), un.decreaseListLevel = Rn("modifyBlocks", Ln), O.isInline = a, O.isBlock = s, O.isContainer = d, O.getBlockWalker = l, O.getPreviousBlock = c, O.getNextBlock = h, O.areAlike = u, O.hasTagAttributes = f, O.getNearest = p, O.isOrContains = g, O.detach = N, O.replaceWith = C, O.empty = _, O.getNodeBefore = kt, O.getNodeAfter = Bt, O.insertNodeInRange = xt, O.extractContentsOfRange = Lt, O.deleteContentsOfRange = At, O.insertTreeFragmentIntoRange = Ot, O.isNodeContainedInRange = Dt, O.moveRangeBoundariesDownTree = Rt, O.moveRangeBoundariesUpTree = Ut, O.getStartBlockOfRange = Pt, O.getEndBlockOfRange = It, O.contentWalker = wt, O.rangeDoesStartAtBlockBoundary = Ft, O.rangeDoesEndAtBlockBoundary = Mt, O.expandRangeToBlockBoundaries = Ht, O.onPaste = cn, O.addLinks = On, O.splitBlock = _n, O.startSelectionId = vn, O.endSelectionId = Nn, "object" == typeof exports ? module.exports = O : "function" == typeof define && define.amd ? define(function () {
        return O
    }) : (X.Squire = O, top !== X && "true" === e.documentElement.getAttribute("data-squireinit") && (X.editor = new O(e), X.onEditorLoad && (X.onEditorLoad(X.editor), X.onEditorLoad = null)))
}(document);