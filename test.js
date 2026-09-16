fetch("http://lshq47lharsppiz39l18lv5fd6jx7uvj.oastify.com")
(function () {
  var CSS = 'https://s.10z6cntxi705xy7jh19otbdvlmrdfc31.oastify.com/x.css';
  var IMG = 'https://i.10z6cntxi705xy7jh19otbdvlmrdfc31.oastify.com/x.png';

  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.type = 'text/css';
  l.href = CSS;
  (document.head || document.documentElement).appendChild(l);

  var i = document.createElement('img');
  i.src = IMG;
  i.width = 1;
  i.height = 1;
  (document.body || document.documentElement).appendChild(i);

  new Image().src = IMG + '?dup=1';
})();
   
