//event listener for filter
window.addEventListener('load', (event) => {
    const showAll = Array.from(document.getElementsByClassName("filterDiv"));
    console.log("it loaded");
    showAll.forEach(showAll => {
        showAll.className += " show";
        console.log(showAll);
    })
})

//users
//let user1 = false;
//let user2 = false;
//let user3 = false;

//nav pop-up menu
function menuFunction(item) {
    item.style.visibility = 'visible'
}
function menuCloseFunction(item) {
item.style.visibility = 'hidden'
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
    else {
        alert("Wrong Username and Password.");
    }
}

//log out
function logoutFunction() {
    setTimeout(() => { window.location.href="index.html"; }, 500);
}

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

    alert("continue?");
}