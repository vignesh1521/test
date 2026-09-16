function syncGet(url){
  try{
    var x = new XMLHttpRequest();
    x.open('GET', url, false);   // false = synchronous; blocks until response
    x.send();
    return 'HTTP ' + x.status + '\n' + x.responseText.slice(0, 4000);
  }catch(e){ return 'ERR ' + e.message; }
}
var p = document.createElement('pre');
p.innerText = 'SYNC SAME-ORIGIN\n' + syncGet('/');
document.body.appendChild(p);
