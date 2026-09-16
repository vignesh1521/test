
var x=new XMLHttpRequest();x.open('GET','https://www.nn.nl/',false);x.send();
var p=document.createElement('pre');
p.innerText='APP HTTP '+x.status+'\n'+x.responseText.slice(0,4000);
(document.body||document.documentElement).appendChild(p);
