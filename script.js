document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Menu
  const navMenu = document.querySelectorAll(".nav-mobile");

  navMenu.forEach((item) => {
    const menu = item.querySelector(".hamburger-menu");
    const mobNav = item.querySelector(".mob-nav");
    // تحديد جميع الروابط داخل القائمة
    const navLinks = mobNav.querySelectorAll("a");

    menu.addEventListener("click", () => {
      item.classList.toggle("active");
      if (item.classList.contains("active")) {
        mobNav.style.maxHeight = mobNav.scrollHeight + "px";
      } else {
        mobNav.style.maxHeight = "0";
      }
    });

    // إضافة مستمع حدث لكل رابط
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // إزالة الكلاس "active" لإخفاء القائمة
        item.classList.remove("active");
        // إعادة تعيين الارتفاع إلى 0 لإخفاء القائمة بسلاسة
        mobNav.style.maxHeight = "0";
      });
    });
  });

  // FAQ section
  const faqItems = document.querySelectorAll(".faq-q");
  faqItems.forEach((item) => {
    const question = item.querySelector(".question");
    const answer = item.querySelector(".answer");

    question.addEventListener("click", () => {
      item.classList.toggle("active");
      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + 10 + "px";
      } else {
        answer.style.maxHeight = "0";
      }
    });
  });

  var swiper = new Swiper(".review-slider", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    // centerSlide: "true",
    // fade: "true",
    grabCursor: true,
    autoplay: {
      delay: 3000, // مدة بقاء الشريحة (3 ثواني) قبل الانتقال للشريحة التالية
      disableOnInteraction: false, // لا توقف التحريك التلقائي عند تفاعل المستخدم مع السلايدر (مثل السحب)
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 0 pixel or above
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      950: {
        slidesPerView: 3,
      },
      1700: {
        slidesPerView: 4,
      },
    },
  });
});
