var out = [];
function s(k,f){ try{ out.push(k+'='+f()); }catch(e){ out.push(k+' ERR '+e.message); } }

s('location',   function(){return location.href});
s('origin',     function(){return location.origin});
s('baseURI',    function(){return document.baseURI});
s('docURL',     function(){return document.URL});
s('UA',         function(){return navigator.userAgent});
s('platform',   function(){return navigator.platform});
s('process',    function(){return typeof process});
s('require',    function(){return typeof require});
s('Buffer',     function(){return typeof Buffer});
s('node_version',function(){return process.version});

function syncGet(url){
  try{
    var x = new XMLHttpRequest();
    x.open('GET', url, false);   // sync: response is in the DOM before the snapshot
    x.send();
    var body = '';
    try { body = x.responseText; } catch(e){ body = 'BODY-UNREADABLE '+e.message; }
    return 'HTTP '+x.status+' len='+body.length+'\n'+body.slice(0,1500);
  }catch(e){ return 'ERR '+e.message; }
}

out.push('--- absolute URLs only (no base in this doc) ---');
[
  'http://127.0.0.1:80/',
  'http://127.0.0.1:3000/',
  'http://127.0.0.1:8080/',
  'http://169.254.169.254/latest/meta-data/',
  'https://vignesh1521.github.io/test/index.css'
].forEach(function(u){ out.push('['+u+']\n'+syncGet(u)); });

var pre = document.createElement('pre');
pre.innerText = out.join('\n');
(document.body || document.documentElement).appendChild(pre);
