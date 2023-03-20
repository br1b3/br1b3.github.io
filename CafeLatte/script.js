//aptrinsic call
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-HT89MSFYKI6R-2");

console.log(aptrinsic.init);

//global context
aptrinsic('set', 'globalContext', {"sitename":"Cafe Latte"});

//side menu trigger
function sideMenuTriggerOn(item)  {
    item.style.visibility = 'visible'
}

function sideMenuTriggerOff(item)  {
    item.style.visibility = 'hidden'
}