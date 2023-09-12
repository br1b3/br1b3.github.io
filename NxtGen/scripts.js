
//Nxt Gen
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-M9A6K3DJSGSV-2"), {
    "htmlSanitization": true,
    "htmlSanitizationAllowedDomains": ["https://aptrinsic.com/*"],
    "engagementChecksumFileUrl": "https://https://br1b3.github.io/checksums.json"
    };

//Segment.io Tag
/*!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="d6GRBJGgs63NCkHHXcHp7P9WLxyAOImX";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("d6GRBJGgs63NCkHHXcHp7P9WLxyAOImX");
  analytics.page();
  }}();*/

  //Full Story Tag
/*window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = 'o-1KHVA2-na1';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.anonymize=function(){g.identify(!!0)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.log = function(a,b){g("log",[a,b])};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
    g.setVars=function(n, p){g('setVars',[n,p]);};
    g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
    if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
    g._v="1.3.0";
})(window,document,window['_fs_namespace'],'script','user');*/

// Setting Global Context For Site
aptrinsic('set', 'globalContext', {"pagename":document.location.pathname});

//event listener for filter
window.addEventListener('load', (event) => {
    const showAll = Array.from(document.getElementsByClassName("filterDiv"));
    console.log("it loaded");
    showAll.forEach(showAll => {
        showAll.className += " show";
        console.log(showAll);
    })
})

//nav pop-up menu
function menuFunction(item) {
    item.style.visibility = 'visible'
    aptrinsic('set', 'user', {'language':'eu-ES'});
}
function menuCloseFunction(item) {
item.style.visibility = 'hidden'
aptrinsic('set', 'user', {'language':'en'});
}



//slide show
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mainSlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length)
  {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i ++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i ++) {
      dots[i].className = dots[i].className.replace("active", "");
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }
  //if left idle run slideshow automatically here
}

/*
const user1 = {
    userId: "user1",
    password: "PX",
    email: "user1@starcommand.unv",
    firstName: "Jackson",
    lastName: "LaRoe",
    account: "JLaroe",
    accountName: "LaRoe, Jackson"
};
const user2 = {
    userId: "user2",
    password: "PX",
    email: "user2@starcommand.unv",
    firstName: "Mitty",
    lastName: "Tilbert",
    account: "MTilbert",
    accountName: "Tilbert, Mitty"
};
const user3 = {
    userId: "user3",
    password: "PX",
    email: "user3@starcommand.unv",
    firstName: "Alishia",
    lastName: "Hawthorne",
    account: "AHawthorne",
    accountName: "Hawthorne, Alishia"
};

//login
function loginFunction() {
    var username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === user1.userId && password === user1.password){
        setTimeout(() => { window.location.href="home.html"; }, 500);
        //passing user and account objects:
        aptrinsic("identify",
        {
        //User Fields
        "id": user1.userId, // Required for logged in app users
        "email": user1.email,
        "firstName": user1.firstName,
        "lastName": user1.lastName
        },
        {
        //Account Fields
        "id": user1.account, //Required
        "name": user1.accountName
        });
    }
    else if (username === user2.userId && password === user2.password){
        setTimeout(() => { window.location.href="home.html"; }, 500);
        aptrinsic("identify",
        {
        //User Fields
        "id": user2.userId, // Required for logged in app users
        "email": user2.email,
        "firstName": user2.firstName,
        "lastName": user2.lastName
        },
        {
        //Account Fields
        "id": user2.account, //Required
        "name": user2.accountName
        });
    }
    else if (username === user3.userId && password === user3.password){
        setTimeout(() => { window.location.href="home.html"; }, 500);
        aptrinsic("identify",
        {
        //User Fields
        "id": user3.userId, // Required for logged in app users
        "email": user3.email,
        "firstName": user3.firstName,
        "lastName": user3.lastName
        },
        {
        //Account Fields
        "id": user3.account, //Required
        "name": user3.accountName
        });
    }
    else if (username != user1.userId && username != user2.userId && username != user3.userId && password == "PX"){
        aptrinsic("identify",
        {
        //User Fields
        "id": username, // Required for logged in app users
        "email": username + "@dummydata.com",
        "firstName": username,
        "lastName": "Dummy"
        },
        {
        //Account Fields
        "id": "dummydata", //Required
        "name": "Dummy Data Corp"
        });
        setTimeout(() => { window.location.href="home.html"; }, 500);
    }
    else if (username != user1.userId && username != user2.userId && username != user3.userId && password == "NUM"){
        aptrinsic("identify",
        {
        //User Fields
        "id": username, // Required for logged in app users
        "email": username + "@numbers.inc",
        "firstName": username,
        "lastName": "Number"
        },
        {
        //Account Fields
        "id": "numbersinc", //Required
        "name": "Numbers Inc"
        });
        setTimeout(() => { window.location.href="home.html"; }, 500);
    }
    else if (username != user1.userId && username != user2.userId && username != user3.userId && password == "Password"){
        aptrinsic("identify",
        {
        //User Fields
        "id": "bgoodrum_test", // Required for logged in app users
        "email": "bgoodrum@gainsight.com",
        "firstName": "Tester Brianna",
        "lastName": "Test Goodrum"
        },
        {
        //Account Fields
        "id": "ABCXYZ", //Required
        });
        setTimeout(() => { window.location.href="home.html"; }, 500);
    }
    else {
        alert("Wrong Username and Password.");
    }
}

//log out
function logoutFunction() {
    window.aptrinsic('reset');
    setTimeout(() => { window.location.href="login.html"; }, 500);
}
*/

//filter popup
function showFilter(){
    const popupFilter = Array.from(
        document.getElementsByClassName('popupFilter')
    );

    console.log(popupFilter.values);

    popupFilter.forEach(popupFilter => {
        popupFilter.style.visibility = 'visible'
    })
}

function hideFilter(){
    const popupFilter = Array.from(
        document.getElementsByClassName('popupFilter')
    );

    console.log(popupFilter.values);

    popupFilter.forEach(popupFilter => {
        popupFilter.style.visibility = 'hidden'
    })
}



//filtering items (show all)

function filterSelection(i) {
    const showAll = Array.from(document.getElementsByClassName("filterDiv"));
    showAll.forEach(showAll => {
        showAll.classList.remove("show");
        console.log(showAll);
        console.log("should hide");
    })

    console.log(i);
    console.log("good");
    if (i === 'all') {
        

        showAll.forEach(showAll => {
            showAll.className += " show";
            console.log("heyo");
            console.log(showAll);
        })
    }
    //filtering items (specific)
    else {
      const selector = Array.from(document.getElementsByClassName(i));
      console.log(selector);
      console.log("did it work?");
      selector.forEach(selector => {
        selector.className += " show";
        console.log("change here");
        console.log(selector);
      });
      
    }
}


/*//profile form = text
//on click of edit => hide text and show form
//on click save => replace text, hide form and show new text
function editForm(item) {
    item.style.visibility = 'visible'
}
function saveForm(item) {
item.style.visibility = 'hidden'
}*/

//contact form
function contactForm(){
    let title = document.getElementById("contactTitle").value;
    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let issue = document.getElementById("contactIssue").value;
    let explain = document.getElementById("contactText").value;

    console.log(title + ", " + name + ", "+ email + ", " + issue + ", " + explain);
    aptrinsic ('track', 'contactForm', {"Title":title, "Name":name, "Email":email, "Issue":issue, "Text":explain});

    alert("continue?");
}

function sayHello(){
    alert("Bonjour!");
}
//coulmn 1 colors
function pushTheRedButton(){
    aptrinsic ('track', 'redButton1', {"Color": "red"});
}
function pushTheBlueButton(){
    aptrinsic ('track', 'blueButton1', {"Color": "blue"});
}
function pushTheGreenButton(){
    aptrinsic ('track', 'greenButton1', {"Color": "green"});
}

//column 2 colors
function colorButton(n){
    console.log(n);
    aptrinsic ('track', 'colorButton', {"Color": n});
}


//KC Bot API Call
aptrinsic('bot','search', { labels: ['Product', 'Support', 'Updates'] });

function hoverEvent(){
    aptrinsic ('track', 'hover', {"Hover": true});
    console.log("it hovers");
}

//Hash
//location.hash = "hash_mark";
//document.getElementById("hash")