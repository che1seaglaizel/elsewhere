const guideName = "CHELSEA'S ELSEWHERE";
const currentYear = new Date().getFullYear(); // or 2026


let totalPlacesCount = 0;


const placeCards = document.querySelectorAll(".place-card");
totalPlacesCount = placeCards.length;


const headerTitle = document.getElementById("guide-title");
if (headerTitle) {
  headerTitle.textContent = guideName;
}


const countDisplay = document.getElementById("places-count");
if (countDisplay) {
  countDisplay.textContent = `${totalPlacesCount} cute spots featured`;
}


const copyrightElement = document.getElementById("footer-copyright");
if (copyrightElement) {
  copyrightElement.textContent = `© ${currentYear} ${guideName}`;
}
