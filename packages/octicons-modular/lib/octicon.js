"use strict";function octicon(c,o,r,s,t){var l=function(t,e){e.label?t["aria-label"]=e.label:t["aria-hidden"]=!0,e.class?t.class="octicon octicon-"+c+" "+e.class:t.class="octicon octicon-"+c;var i=0===e.scale?0:parseFloat(e.scale)||1,n=i*parseInt(t.width),a=i*parseInt(t.height);return t.width=Number(n.toFixed(2)),t.height=Number(a.toFixed(2)),t},u=function(e){return Object.keys(e).map(function(t){return t+'="'+e[t]+'"'}).join(" ").trim()};return{name:c,data:{width:o,height:r,path:s,keywords:t},svg:function(t,e){void 0===e&&(e=document);var i,n,a,c=e.createElement("div");return c.innerHTML="<svg "+(i=t,n=Object.assign({},{scale:1,label:null,class:null},i),a=l({version:"1.1",width:o,height:r,viewBox:"0 0 "+o+" "+r},n),u(a))+">"+s+"</svg>",c.firstChild}}}module.exports=octicon;
