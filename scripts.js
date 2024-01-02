// Navbar for mobile
function toggleNavbar() {
  var links = document.getElementById("nav-links");
  if (links.classList.contains("active")) {
    links.classList.remove("active");
  } else {
    links.classList.add("active");
  }
}


// FAQ section
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq__question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;

      button.classList.toggle('active');
      if (button.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });
});
