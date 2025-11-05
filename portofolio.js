let header = document.getElementById("header");
let title = document.querySelector(".title p");
let menu = document.querySelectorAll(".menu ul li a");

function ubahWarnaHeader() {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "gold";
    header.style.borderButtom = "none";
    title.style.color = "white";
    menu.forEach(function (item) {
      item.style.color = "white";
    });
  } else {
    header.style.backgroundColor = "transparent";
    header.style.borderButtom = "1px solid green";
    title.style.color = "black";
    menu.forEach(function (item) {
      item.style.color = "black";
    });
  }
}
window.addEventListener("scroll", ubahWarnaHeader);
let floatingbutton = document.getElementById("floating-button");

function showOrHideFloatingButton() {
  if (window.scrollY > 0) {
    floatingbutton.style.display = "flex";
  } else {
    floatingbutton.style.display = "none";
  }
}
window.addEventListener("scroll", showOrHideFloatingButton);

function scrollOnTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
floatingbutton.onclick = scrollOnTop;

let aboutLink = document.querySelector('.menu ul li a[ href="#about"]');
let heroLink = document.querySelector('.menu ul li a[ href="#hero"]');
let aboutSection = document.getElementById("about");
let heroSection = document.getElementById("hero");

function scrollToAbout(event) {
  event.preventDefault();
  aboutSection.scrollIntoView({
    behavior: "smooth",
  });
}
function scrollToHero(event) {
  event.preventDefault();
  heroSection.scrollIntoView({
    behavior: "smooth",
  });
}
about.onclick = scrollToAbout;
hero.onclick = scrollToHero;

let worksLink = document.querySelector('.menu ul li a[ href="#works"]');
let skillsLink = document.querySelector('.menu ul li a[ href="#skills"]');
let contactLink = document.querySelector('.menu ul li a[ href="#contact"]');
let worksSection = document.getElementById("works");
let skillsSection = document.getElementById("skills");
let contactSection = document.getElementById("contact");

function scrollToWorks(event) {
  event.preventDefault();
  worksSection.scrollIntoView({
    behavior: "smooth",
  });
}
function scrollToSkills(event) {
  event.preventDefault();
  skillsSection.scrollIntoView({
    behavior: "smooth",
  });
}
function scrollToContact(event) {
  event.preventDefault();
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
}
works.onclick = scrollToWorks;
skills.onclick = scrollToSkills;
contact.onclick = scrollToContact;

let menubars = document.getElementById("menu-bars");
let sidebar = document.getElementById("side-bar");
let closesidebar = document.getElementById("close");

let resolusiScreen = window.matchMedia("(max-width:768px)");
function responsiveScreen(screen) {
  if (screen.matches) {
    menubars.style.display = "block";
    menubars.addEventListener("click", function sideBars() {
      sidebar.style.display = "flex";
      menubars.style.display = "none";
    });
    closesidebar.addEventListener("click", function closeSideBars() {
      sidebar.style.display = "none";
      menubars.style.display = "block";
    });
  } else {
    sidebar.style.display = "none";
    menubars.style.display = "none";
  }
}
responsiveScreen(resolusiScreen);
resolusiScreen.addEventListener("change", responsiveScreen);
