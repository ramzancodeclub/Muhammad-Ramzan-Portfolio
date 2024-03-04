// Hamburger menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Portfolio filter
const btns = document.querySelectorAll(".buttons button");
const imgs = document.querySelectorAll(".portfolio img");

for (let i = 1; i < btns.length; i++) {
    btns[i].addEventListener("click", filterImg);
}

function setActiveBtn (e) {
    btns.forEach(btn => {
        btn.classList.remove("btn-clicked")
    })
    e.target.classList.add("btn-clicked")
}

function filterImg (e) {
    setActiveBtn(e);

    imgs.forEach(img => {
        img.classList.remove("img-shrink");
        img.classList.add("img-expand");

        const imgType = parseInt(img.dataset.img)
        const btnType = parseInt(e.target.dataset.btn)

        if (imgType !== btnType) {
            img.classList.remove("img-expand");
            img.classList.add("img-shrink");
        }
    })
}

btns[0].addEventListener("click", (e) => {
    setActiveBtn(e);

    imgs.forEach(img => {
        img.classList.remove("img-shrink");
        img.classList.add("img-expand");
    })
})


// Get the scroll-up button element
const scrollUpBtn = document.getElementById('scrollUpBtn');

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to toggle the visibility of the scroll-up button based on scroll position
function toggleScrollButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.visibility = 'visible';
  } else {
    scrollUpBtn.style.visibility = 'hidden';
  }
}

// Add a scroll event listener to toggle the visibility of the scroll-up button
window.addEventListener('scroll', toggleScrollButton);