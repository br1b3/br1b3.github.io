//aptrinsic call
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-FLT1ANRKZSFY-2");

//globalcontext and custom event
var url = window.location.pathname;
var article = url.substring(url.lastIndexOf('/')+1);

aptrinsic('set', 'globalContext', {"Article":article});

aptrinsic ('track', 'article', {"Article": article});

var config = {kcAllowedFuncNames : ["launchChat"]};

function launchChat (){
  zE('webWidget', 'show');
  console.log("chat opened");
}