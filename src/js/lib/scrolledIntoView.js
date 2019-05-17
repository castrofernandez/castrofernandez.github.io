! function(a) {
    function b(a) {
        {
            var b = g.scrollTop(),
                c = b + g.height(),
                d = a.offset().top;
            d + a.height()
        }
        return d >= b && c >= d
    }

    function c(c) {
        a.each(h, function() {
            b(this.element) ? this.invp || (this.invp = !0, this.options.scrolledin && this.options.scrolledin.call(this.element, c), this.element.trigger("scrolledin", c)) : this.invp && (this.invp = !1, this.options.scrolledout && this.options.scrolledout.call(this.element, c), this.element.trigger("scrolledout", c))
        })
    }

    function d(a, b) {
        var c = {
            element: a,
            options: b,
            invp: !1
        };
        return h.push(c), c
    }

    function e(a) {
        for (var b = 0; b < h.length; b++)
            if (h[b] === a) {
                h.splice(b, 1), a.element = null;
                break
            }
        console.log(h)
    }
    var f, g = a(window),
        h = [];
    g.on("scroll", function(a) {
        f || (f = setTimeout(function() {
            c(a), f = null
        }, 300))
    });
    var i = "scrolledIntoView",
        j = {
            scrolledin: null,
            scrolledout: null
        };
    a.fn[i] = function(b) {
        var b = a.extend({}, j, b);
        return this.each(function() {
            var c = a(this),
                f = a.data(this, i);
            f ? f.options = b : (a.data(this, i, d(c, b)), c.on("remove", a.proxy(function() {
                a.removeData(this, i), e(f)
            }, this)))
        }), this
    }
}(jQuery);
