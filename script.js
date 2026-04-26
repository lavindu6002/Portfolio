function scrolltop() {
    let a = window.document;
    a = location.href = '#home';
}
let contact = document.getElementById('contactForm');
contact.addEventListener('submit', function (e) {
    e.preventDefault();
    alert(`technical error`);
})
function openPopup() {
    document.getElementById("blogPopup").style.display = "block";
}

function closePopup(event) {
    event.stopPropagation();
    document.getElementById("blogPopup").style.display = "none";
}

function goToBlog() {
    window.location.href = "https://medium.com/@lavindu.manith/getting-started-with-html-and-css-4bf0370cbbcd";
}