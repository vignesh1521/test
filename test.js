
var hosts = [
  'github.io','raw.githubusercontent.com','gstatic.com','google.com',
  'webhook.site','pipedream.net','interact.sh','requestbin.net','oastify.com',
  's3.amazonaws.com','cloudfront.net','azurewebsites.net',
  '169.254.169.254','127.0.0.1'
];
var root = document.body || document.documentElement;
var pre = document.createElement('pre');
pre.innerText = 'PROBE RESULTS\n';
root.appendChild(pre);
hosts.forEach(function(h){
  fetch('http://' + h + '/?_=' + Math.random(), {mode:'no-cors'})
    .then(function(){ pre.innerText += 'OPEN    ' + h + '\n'; })
    .catch(function(){ pre.innerText += 'BLOCKED ' + h + '\n'; });
});
