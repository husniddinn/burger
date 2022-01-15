window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  const menuBtn = document.querySelector('.menu-btn');
  const navigation = document.querySelector('.navigation');
  const navigationItems = document.querySelectorAll('.navigation a');
  menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navigation.classList.toggle('active');
  });


  navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navigation.classList.toggle('active');
    });
  });

  const scrollBtn = document.querySelector(".scrollToTop");
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeigt = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeigt - revealPoint) {
        reveals[i].classList.toggle("active", window.scrollY > 10);
      };
    };
  });
});

  // MODAL
  const allModalBtn = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  allModalBtn.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimer);
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    e.preventDefault
    if (e.target === modal || e.target.getAttribute('data-close') === '') {
      closeModal();
    }
  });

  const modalTimer = setTimeout(openModal, 50000);

  function showMyModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showMyModalByScroll);
    }
  }
window.addEventListener("scroll", showMyModalByScroll);