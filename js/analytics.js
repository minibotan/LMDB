function anal() {
  googleanal();


}

function googleanal() {

  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-99106493-1', 'auto');
  ga('send', 'pageview');
}

function yaanal() {
  (function (d, w, c) {
    (w[c] = w[c] || []).push(function () {
      try {
        w.yaCounter45062375 = new Ya.Metrika({
          id: 45062375,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true
        });
      } catch (e) {}
    });

    var n = d.getElementsByTagName("script")[0],
      s = d.createElement("script"),
      f = function () {
        n.parentNode.insertBefore(s, n);
      };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
      d.addEventListener("DOMContentLoaded", f, false);
    } else {
      f();
    }
  })(document, window, "yandex_metrika_callbacks");
}