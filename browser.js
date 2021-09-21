  var param = "fbclid";
  if (-1 !== location.search.indexOf("fbclid=")) {
      var replace = "";
      try {
          var url = new URL(location);
          url.searchParams.delete(param), replace = url.href
      } catch (e) {
          var regExp = /[?&]fbclid=.*$/;
          replace = location.search.replace(regExp, ""), replace = location.pathname + replace + location.hash
      }
      history.replaceState(null, "", replace), window.location = replace
  }

  function $error(e) {
      function t() {
          return {
              html: s,
              name: e.name,
              message: e.message,
              stack: l,
              reportBody: a,
              reportLink: "/bug.php?report=" + encodeURIComponent(a)
          }
      }
      var r, n, i, a, o = Object.prototype.toString,
          l = [],
          s = e;
      if ("string" == typeof e) return t();
      if ("[object Arguments]" == o.call(e) && (s = e[0], e[1] && "string" == typeof e[1] && e[2] && e[3] ? e = {
              message: e[0] + "",
              stack: e[1] + ":" + e[2] + ":" + e[3]
          } : e[0] && "object" == typeof e[0] && "string" == typeof e[0].stack ? e = e[0] : e[4] && "object" == typeof e[4] && "string" == typeof e[4].stack && (e = e[4])), !e.stack) return t();
      for (var c = 0, b = (i = e.stack.split("\n")).length; c < b; ++c) {
          if (r = /^\s*(.*?)(?:\((.*?)\))?@?((?:file|https?|chrome):.*?):(\d+)(?::(\d+))?\s*$/i.exec(i[c])) n = {
              url: r[3],
              func: r[1] || "?",
              args: r[2] ? r[2].split(",") : "",
              line: +r[4],
              column: r[5] ? +r[5] : null
          };
          else if (r = /^\s*at (.*?) ?\(?((?:file|https?|chrome-extension):.*?):(\d+)(?::(\d+))?\)?\s*$/i.exec(i[c])) n = {
              url: r[2],
              func: r[1] || "?",
              line: +r[3],
              column: r[4] ? +r[4] : null
          };
          else {
              if (!(r = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i.exec(i[c]))) continue;
              n = {
                  url: r[2],
                  func: r[1] || "?",
                  line: +r[3],
                  column: r[4] ? +r[4] : null
              }
          }
          l.push(n)
      }
      if (!l.length) return t();
      l[0].column || void 0 === e.columnNumber || (l[0].column = e.columnNumber + 1), a = platform.description + "\nuserAgent: " + navigator.userAgent + "\n#" + (e.name ? e.name + " " : "") + e.message, s = (e.name ? "<strong>" + e.name + "</strong> " : "") + e.message;
      for (var p, c = 0, u = l.length; c < u; c++) {
          p = l[c], a += "\n" + p.func + " -> " + p.url + ":" + p.line + ":" + p.column;
          var d = (p.func + "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          s += "\n" + d + ' <a href="' + p.url + ":" + p.line + ":" + p.column + '">' + p.url + ":" + p.line + ":" + p.column + "</a>"
      }
      return t()
  }(function() {
      "use strict";

      function t(e) {
          return (e += "").charAt(0).toUpperCase() + e.slice(1)
      }

      function A(e) {
          return e = G(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : t(e)
      }

      function I(e, t) {
          for (var r in e) l.call(e, r) && t(e[r], r, e)
      }

      function R(e) {
          return null == e ? t(e) : V.call(e).slice(8, -1)
      }

      function $(e, t) {
          var r = null == e ? "number" : typeof e[t];
          return !/^(?:boolean|number|string|undefined)$/.test(r) && ("object" != r || e[t])
      }

      function T(e) {
          return (e + "").replace(/([ -])(?!$)/g, "$1?")
      }

      function F(r, n) {
          var i = null;
          return function(e, t) {
              var r = -1,
                  n = e ? e.length : 0;
              if ("number" == typeof n && -1 < n && n <= a)
                  for (; ++r < n;) t(e[r], r, e);
              else I(e, t)
          }(r, function(e, t) {
              i = n(i, e, t, r)
          }), i
      }

      function G(e) {
          return (e + "").replace(/^ +| +$/g, "")
      }

      function j(l) {
          function e(e) {
              return F(e, function(e, t) {
                  var r = t.pattern || T(t);
                  return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(l) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(l) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(l)) && ((e = ((t.label && !RegExp(r, "i").test(t.label) ? t.label : e) + "").split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), t = t.label || t, e = A(e[0].replace(RegExp(r, "i"), t).replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ").replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
              })
          }
          var t = N,
              r = l && "object" == typeof l && "String" != R(l);
          r && (t = l, l = null);
          var n = t.navigator || {},
              i = n.userAgent || "";
          l = l || i;
          var a, o, s = r ? !!n.likeChrome : /\bChrome\b/.test(l) && !/internal|\n/i.test(V.toString()),
              c = r ? "Object" : "ScriptBridgingProxyObject",
              b = r ? "Object" : "Environment",
              p = r && t.java ? "JavaPackage" : R(t.java),
              u = r ? "Object" : "RuntimeObject",
              d = /\bJava/.test(p) && t.java,
              f = d && R(t.environment) == b,
              m = d ? "a" : "α",
              h = d ? "b" : "β",
              x = t.document || {},
              S = t.operamini || t.opera,
              g = K.test(g = r && S ? S["[[Class]]"] : R(S)) ? g : S = null,
              y = l,
              O = [],
              v = null,
              M = l == i,
              w = M && S && "function" == typeof S.version && S.version(),
              P = F([{
                  label: "EdgeHTML",
                  pattern: "Edge"
              }, "Trident", {
                  label: "WebKit",
                  pattern: "AppleWebKit"
              }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function(e, t) {
                  return e || RegExp("\\b" + (t.pattern || T(t)) + "\\b", "i").exec(l) && (t.label || t)
              }),
              E = F(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                  label: "Microsoft Edge",
                  pattern: "Edge"
              }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                  label: "Samsung Internet",
                  pattern: "SamsungBrowser"
              }, "SeaMonkey", {
                  label: "Silk",
                  pattern: "(?:Cloud9|Silk-Accelerated)"
              }, "Sleipnir", "SlimBrowser", {
                  label: "SRWare Iron",
                  pattern: "Iron"
              }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                  label: "Opera Mini",
                  pattern: "OPiOS"
              }, "Opera", {
                  label: "Opera",
                  pattern: "OPR"
              }, "Chrome", {
                  label: "Chrome Mobile",
                  pattern: "(?:CriOS|CrMo)"
              }, {
                  label: "Firefox",
                  pattern: "(?:Firefox|Minefield)"
              }, {
                  label: "Firefox for iOS",
                  pattern: "FxiOS"
              }, {
                  label: "IE",
                  pattern: "IEMobile"
              }, {
                  label: "IE",
                  pattern: "MSIE"
              }, "Safari"], function(e, t) {
                  return e || RegExp("\\b" + (t.pattern || T(t)) + "\\b", "i").exec(l) && (t.label || t)
              }),
              k = e([{
                  label: "BlackBerry",
                  pattern: "BB10"
              }, "BlackBerry", {
                  label: "Galaxy S",
                  pattern: "GT-I9000"
              }, {
                  label: "Galaxy S2",
                  pattern: "GT-I9100"
              }, {
                  label: "Galaxy S3",
                  pattern: "GT-I9300"
              }, {
                  label: "Galaxy S4",
                  pattern: "GT-I9500"
              }, {
                  label: "Galaxy S5",
                  pattern: "SM-G900"
              }, {
                  label: "Galaxy S6",
                  pattern: "SM-G920"
              }, {
                  label: "Galaxy S6 Edge",
                  pattern: "SM-G925"
              }, {
                  label: "Galaxy S7",
                  pattern: "SM-G930"
              }, {
                  label: "Galaxy S7 Edge",
                  pattern: "SM-G935"
              }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                  label: "Kindle Fire",
                  pattern: "(?:Cloud9|Silk-Accelerated)"
              }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                  label: "Wii U",
                  pattern: "WiiU"
              }, "Wii", "Xbox One", {
                  label: "Xbox 360",
                  pattern: "Xbox"
              }, "Xoom"]),
              C = F({
                  Apple: {
                      iPad: 1,
                      iPhone: 1,
                      iPod: 1
                  },
                  Archos: {},
                  Amazon: {
                      Kindle: 1,
                      "Kindle Fire": 1
                  },
                  Asus: {
                      Transformer: 1
                  },
                  "Barnes & Noble": {
                      Nook: 1
                  },
                  BlackBerry: {
                      PlayBook: 1
                  },
                  Google: {
                      "Google TV": 1,
                      Nexus: 1
                  },
                  HP: {
                      TouchPad: 1
                  },
                  HTC: {},
                  LG: {},
                  Microsoft: {
                      Xbox: 1,
                      "Xbox One": 1
                  },
                  Motorola: {
                      Xoom: 1
                  },
                  Nintendo: {
                      "Wii U": 1,
                      Wii: 1
                  },
                  Nokia: {
                      Lumia: 1
                  },
                  Samsung: {
                      "Galaxy S": 1,
                      "Galaxy S2": 1,
                      "Galaxy S3": 1,
                      "Galaxy S4": 1
                  },
                  Sony: {
                      PlayStation: 1,
                      "PlayStation Vita": 1
                  }
              }, function(e, t, r) {
                  return e || (t[k] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(k)] || RegExp("\\b" + T(r) + "(?:\\b|\\w*\\d)", "i").exec(l)) && r
              }),
              W = F(["Windows Phone", "Android", "CentOS", {
                  label: "Chrome OS",
                  pattern: "CrOS"
              }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "], function(e, t) {
                  var r, n, i, a, o = t.pattern || T(t);
                  return !e && (e = RegExp("\\b" + o + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(l)) && (r = e, n = o, i = t.label || t, a = {
                      "10.0": "10",
                      6.4: "10 Technical Preview",
                      6.3: "8.1",
                      6.2: "8",
                      6.1: "Server 2008 R2 / 7",
                      "6.0": "Server 2008 / Vista",
                      5.2: "Server 2003 / XP 64-bit",
                      5.1: "XP",
                      5.01: "2000 SP1",
                      "5.0": "2000",
                      "4.0": "NT",
                      "4.90": "ME"
                  }, n && i && /^Win/i.test(r) && !/^Windows Phone /i.test(r) && (a = a[/[\d.]+$/.exec(r)]) && (r = "Windows " + a), r += "", n && i && (r = r.replace(RegExp(n, "i"), i)), e = A(r.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])), e
              }),
              P = P && [P];
          if (C && !k && (k = e([C])), (a = /\bGoogle TV\b/.exec(k)) && (k = a[0]), /\bSimulator\b/i.test(l) && (k = (k ? k + " " : "") + "Simulator"), "Opera Mini" == E && /\bOPiOS\b/.test(l) && O.push("running in Turbo/Uncompressed mode"), "IE" == E && /\blike iPhone OS\b/.test(l) ? (C = (a = j(l.replace(/like iPhone OS/, ""))).manufacturer, k = a.product) : /^iP/.test(k) ? (E = E || "Safari", W = "iOS" + ((a = / OS ([\d_]+)/i.exec(l)) ? " " + a[1].replace(/_/g, ".") : "")) : "Konqueror" != E || /buntu/i.test(W) ? C && "Google" != C && (/Chrome/.test(E) && !/\bMobile Safari\b/i.test(l) || /\bVita\b/.test(k)) || /\bAndroid\b/.test(W) && /^Chrome/.test(E) && /\bVersion\//i.test(l) ? (E = "Android Browser", W = /\bAndroid\b/.test(W) ? W : "Android") : "Silk" == E ? (/\bMobi/i.test(l) || (W = "Android", O.unshift("desktop mode")), /Accelerated *= *true/i.test(l) && O.unshift("accelerated")) : "PaleMoon" == E && (a = /\bFirefox\/([\d.]+)\b/.exec(l)) ? O.push("identifying as Firefox " + a[1]) : "Firefox" == E && (a = /\b(Mobile|Tablet|TV)\b/i.exec(l)) ? (W = W || "Firefox OS", k = k || a[1]) : !E || (a = !/\bMinefield\b/i.test(l) && /\b(?:Firefox|Safari)\b/.exec(E)) ? (E && !k && /[\/,]|^[^(]+?\)/.test(l.slice(l.indexOf(a + "/") + 8)) && (E = null), (a = k || C || W) && (k || C || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(W)) && (E = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(W) ? W : a) + " Browser")) : "Electron" == E && (a = (/\bChrome\/([\d.]+)\b/.exec(l) || 0)[1]) && O.push("Chromium " + a) : W = "Kubuntu", w = w || F(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", T(E), "(?:Firefox|Minefield|NetFront)"], function(e, t) {
                  return e || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(l) || 0)[1] || null
              }), (a = ("iCab" == P && 3 < parseFloat(w) ? "WebKit" : /\bOpera\b/.test(E) && (/\bOPR\b/.test(l) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(l) && !/^(?:Trident|EdgeHTML)$/.test(P) && "WebKit" || !P && /\bMSIE\b/i.test(l) && ("Mac OS" == W ? "Tasman" : "Trident") || "WebKit" == P && /\bPlayStation\b(?! Vita\b)/i.test(E) && "NetFront") && (P = [a]), "IE" == E && (a = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(l) || 0)[1]) ? (E += " Mobile", W = "Windows Phone " + (/\+$/.test(a) ? a : a + ".x"), O.unshift("desktop mode")) : /\bWPDesktop\b/i.test(l) ? (E = "IE Mobile", W = "Windows Phone 8.x", O.unshift("desktop mode"), w = w || (/\brv:([\d.]+)/.exec(l) || 0)[1]) : "IE" != E && "Trident" == P && (a = /\brv:([\d.]+)/.exec(l)) && (E && O.push("identifying as " + E + (w ? " " + w : "")), E = "IE", w = a[1]), M) {
              if ($(t, "global"))
                  if (d && (y = (a = d.lang.System).getProperty("os.arch"), W = W || a.getProperty("os.name") + " " + a.getProperty("os.version")), (r || L == X) && $(t, "system") && (a = [t.system])[0]) {
                      W = W || (a[0].os || null);
                      try {
                          a[1] = t.require("ringo/engine").version, w = a[1].join("."), E = "RingoJS"
                      } catch (e) {
                          a[0].global.system == t.system && (E = "Narwhal")
                      }
                  } else "object" == typeof t.process && !t.process.browser && (a = t.process) ? ("object" == typeof a.versions && ("string" == typeof a.versions.electron ? (O.push("Node " + a.versions.node), E = "Electron", w = a.versions.electron) : "string" == typeof a.versions.nw && (O.push("Chromium " + w, "Node " + a.versions.node), E = "NW.js", w = a.versions.nw)), E || (E = "Node.js", y = a.arch, W = a.platform, w = (w = /[\d.]+/.exec(a.version)) ? w[0] : "unknown")) : f && (E = "Rhino");
              else R(a = t.runtime) == c ? (E = "Adobe AIR", W = a.flash.system.Capabilities.os) : R(a = t.phantom) == u ? (E = "PhantomJS", w = (a = a.version || null) && a.major + "." + a.minor + "." + a.patch) : "number" == typeof x.documentMode && (a = /\bTrident\/(\d+)/i.exec(l)) ? (w = [w, x.documentMode], (a = +a[1] + 4) != w[1] && (O.push("IE " + w[1] + " mode"), P && (P[1] = ""), w[1] = a), w = "IE" == E ? w[1].toFixed(1) + "" : w[0]) : "number" == typeof x.documentMode && /^(?:Chrome|Firefox)\b/.test(E) && (O.push("masking as " + E + " " + w), E = "IE", w = "11.0", P = ["Trident"], W = "Windows");
              W = W && A(W)
          }
          if (w && (a = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(w) || /(?:alpha|beta)(?: ?\d)?/i.exec(l + ";" + (M && n.appMinorVersion)) || /\bMinefield\b/i.test(l) && "a") && (v = /b/i.test(a) ? "beta" : "alpha", w = w.replace(RegExp(a + "\\+?$"), "") + ("beta" == v ? h : m) + (/\d+\+?/.exec(a) || "")), "Fennec" == E || "Firefox" == E && /\b(?:Android|Firefox OS)\b/.test(W)) E = "Firefox Mobile";
          else if ("Maxthon" == E && w) w = w.replace(/\.[\d.]+/, ".x");
          else if (/\bXbox\b/i.test(k)) "Xbox 360" == k && (W = null), "Xbox 360" == k && /\bIEMobile\b/.test(l) && O.unshift("mobile mode");
          else if (!/^(?:Chrome|IE|Opera)$/.test(E) && (!E || k || /Browser|Mobi/.test(E)) || "Windows CE" != W && !/Mobi/i.test(l))
              if ("IE" == E && M) try {
                  null === t.external && O.unshift("platform preview")
              } catch (e) {
                  O.unshift("embedded")
              } else(/\bBlackBerry\b/.test(k) || /\bBB10\b/.test(l)) && (a = (RegExp(k.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(l) || 0)[1] || w) ? (W = ((a = [a, /BB10/.test(l)])[1] ? (k = null, C = "BlackBerry") : "Device Software") + " " + a[0], w = null) : this != I && "Wii" != k && (M && S || /Opera/.test(E) && /\b(?:MSIE|Firefox)\b/i.test(l) || "Firefox" == E && /\bOS X (?:\d+\.){2,}/.test(W) || "IE" == E && (W && !/^Win/.test(W) && 5.5 < w || /\bWindows XP\b/.test(W) && 8 < w || 8 == w && !/\bTrident\b/.test(l))) && !K.test(a = j.call(I, l.replace(K, "") + ";")) && a.name && (a = "ing as " + a.name + ((a = a.version) ? " " + a : ""), K.test(E) ? (/\bIE\b/.test(a) && "Mac OS" == W && (W = null), a = "identify" + a) : (a = "mask" + a, E = g ? A(g.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(a) && (W = null), M || (w = null)), P = ["Presto"], O.push(a));
              else E += " Mobile";
              (a = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(l) || 0)[1]) && (a = [parseFloat(a.replace(/\.(\d)$/, ".0$1")), a], "Safari" == E && "+" == a[1].slice(-1) ? (E = "WebKit Nightly", v = "alpha", w = a[1].slice(0, -1)) : w != a[1] && w != (a[2] = (/\bSafari\/([\d.]+\+?)/i.exec(l) || 0)[1]) || (w = null), a[1] = (/\bChrome\/([\d.]+)/i.exec(l) || 0)[1], 537.36 == a[0] && 537.36 == a[2] && 28 <= parseFloat(a[1]) && "WebKit" == P && (P = ["Blink"]), a = M && (s || a[1]) ? (P && (P[1] = "like Chrome"), a[1] || ((a = a[0]) < 530 ? 1 : a < 532 ? 2 : a < 532.05 ? 3 : a < 533 ? 4 : a < 534.03 ? 5 : a < 534.07 ? 6 : a < 534.1 ? 7 : a < 534.13 ? 8 : a < 534.16 ? 9 : a < 534.24 ? 10 : a < 534.3 ? 11 : a < 535.01 ? 12 : a < 535.02 ? "13+" : a < 535.07 ? 15 : a < 535.11 ? 16 : a < 535.19 ? 17 : a < 536.05 ? 18 : a < 536.1 ? 19 : a < 537.01 ? 20 : a < 537.11 ? "21+" : a < 537.13 ? 23 : a < 537.18 ? 24 : a < 537.24 ? 25 : a < 537.36 ? 26 : "Blink" == P ? "28" : "27")) : (P && (P[1] = "like Safari"), (a = a[0]) < 400 ? 1 : a < 500 ? 2 : a < 526 ? 3 : a < 533 ? 4 : a < 534 ? "4+" : a < 535 ? 5 : a < 537 ? 6 : a < 538 ? 7 : a < 601 ? 8 : "8"), P && (P[1] += " " + (a += "number" == typeof a ? ".x" : /[.+]/.test(a) ? "" : "+")), "Safari" == E && (!w || 45 < parseInt(w)) && (w = a)), "Opera" == E && (a = /\bzbov|zvav$/.exec(W)) ? (E += " ", O.unshift("desktop mode"), "zvav" == a ? (E += "Mini", w = null) : E += "Mobile", W = W.replace(RegExp(" *" + a + "$"), "")) : "Safari" == E && /\bChrome\b/.exec(P && P[1]) && (O.unshift("desktop mode"), E = "Chrome Mobile", w = null, W = /\bOS X\b/.test(W) ? (C = "Apple", "iOS 4.3+") : null), w && 0 == w.indexOf(a = /[\d.]+$/.exec(W)) && -1 < l.indexOf("/" + a + "-") && (W = G(W.replace(a, ""))), P && !/\b(?:Avant|Nook)\b/.test(E) && (/Browser|Lunascape|Maxthon/.test(E) || "Safari" != E && /^iOS/.test(W) && /\bSafari\b/.test(P[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(E) && P[1]) && (a = P[P.length - 1]) && O.push(a), O.length && (O = ["(" + O.join("; ") + ")"]), C && k && k.indexOf(C) < 0 && O.push("on " + C), k && O.push((/^on /.test(O[O.length - 1]) ? "" : "on ") + k), W && (a = / ([\d.+]+)$/.exec(W), o = a && "/" == W.charAt(W.length - a[0].length - 1), W = {
              architecture: 32,
              family: a && !o ? W.replace(a[0], "") : W,
              version: a ? a[1] : null,
              toString: function() {
                  var e = this.version;
                  return this.family + (e && !o ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
              }
          }), (a = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(y)) && !/\bi686\b/i.test(y) ? (W && (W.architecture = 64, W.family = W.family.replace(RegExp(" *" + a), "")), E && (/\bWOW64\b/i.test(l) || M && /\w(?:86|32)$/.test(n.cpuClass || n.platform) && !/\bWin64; x64\b/i.test(l)) && O.unshift("32-bit")) : W && /^OS X/.test(W.family) && "Chrome" == E && 39 <= parseFloat(w) && (W.architecture = 64), l = l || null;
          var B = {};
          return B.description = l, B.layout = P && P[0], B.manufacturer = C, B.name = E, B.prerelease = v, B.product = k, B.ua = l, B.version = E && w, B.os = W || {
              architecture: null,
              family: null,
              version: null,
              toString: function() {
                  return "null"
              }
          }, B.parse = j, B.toString = function() {
              return this.description || ""
          }, B.version && O.unshift(w), B.name && O.unshift(E), W && E && (W != (W + "").split(" ")[0] || W != E.split(" ")[0] && !k) && O.push(k ? "(" + W + ")" : "on " + W), O.length && (B.description = O.join(" ")), B
      }
      var e = {
              function: !0,
              object: !0
          },
          N = e[typeof window] && window || this,
          X = N,
          r = e[typeof exports] && exports,
          n = e[typeof module] && module && !module.nodeType && module,
          i = r && n && "object" == typeof global && global;
      !i || i.global !== i && i.window !== i && i.self !== i || (N = i);
      var a = Math.pow(2, 53) - 1,
          K = /\bOpera/,
          L = this,
          o = Object.prototype,
          l = o.hasOwnProperty,
          V = o.toString,
          s = j();
      "function" == typeof define && "object" == typeof define.amd && define.amd ? (N.platform = s, define(function() {
          return s
      })) : r && n ? I(s, function(e, t) {
          r[t] = e
      }) : N.platform = s
  }).call(this)