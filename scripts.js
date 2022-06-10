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



//login
function loginFunction() {
    var username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    
    console.log("boop");
    console.log(username);

    if (username === "ahawthorne@starcommand.unv" && password === "PX"){
        setTimeout(() => { window.location.href="home.html"; }, 500);
    }
    else {
        alert("Wrong Username and Password.");
    }
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