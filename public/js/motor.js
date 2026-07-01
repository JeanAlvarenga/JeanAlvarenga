$(document).ready(function () {
  $(".text h1 span, .bottom_text h5").lettering();

  function hiddenHeroImageState() {
    return window.innerWidth <= 720
      ? { x: 0, y: 0, margin: 0, opacity: 1, rotate: 0, scale: 1 }
      : { x: 260, y: 0, margin: 0, opacity: 0.55, rotate: 12, scale: 0.92 };
  }

  function showHeroImages() {
    $(".img_group").addClass("revealed");
    gsap.to(".img_group img", {
      x: 0,
      y: 0,
      margin: 0,
      duration: 0.8,
      opacity: 1,
      rotate: 0,
      scale: 1,
      stagger: 0.08,
      ease: "power2.out"
    });
  }

  function hideHeroImages() {
    if (window.innerWidth <= 720) return;

    $(".img_group").removeClass("revealed");
    gsap.to(".img_group img", {
      ...hiddenHeroImageState(),
      duration: 0.8,
      stagger: 0.08,
      ease: "power2.out"
    });
  }

  var tl = gsap.timeline();
  tl.from(".text h1 span", {
    x: -20,
    duration: 1,
    opacity: 0,
    stagger: 0.1
  })
    .from(".img_group img", {
      x: 260,
      duration: 0.7,
      opacity: 0,
      rotate: 12,
      scale: 0.92,
      stagger: 0.1
    })
    .to(".img_group img", {
      ...hiddenHeroImageState(),
      duration: 0.7,
      stagger: 0.1
    }, "-=1.4")
    .from(".bottom_text h5 span", {
      x: -20,
      duration: 1,
      opacity: 0,
      stagger: 0.07
    })
    .from("header .logo", {
      y: -20,
      duration: 1,
      opacity: 0
    })
    .from("header nav li", {
      y: -20,
      duration: 1,
      opacity: 0,
      stagger: 0.07
    });

  setTimeout(function () {
    $(".engineer").on("mouseenter focus", showHeroImages);
    $(".engineer").on("mouseleave blur", hideHeroImages);
  }, 1200);

  $(window).on("resize", function () {
    if (window.innerWidth <= 720) {
      $(".img_group").addClass("revealed");
      gsap.set(".img_group img", hiddenHeroImageState());
    } else if (!$(".img_group").hasClass("revealed")) {
      gsap.set(".img_group img", hiddenHeroImageState());
    }
  });
});

const menuDiv = document.getElementById("menu-mobile");
const btnAnimar = document.getElementById("btn-menu");

function animarMenu() {
  if (!menuDiv || !btnAnimar) return;

  const isOpen = menuDiv.classList.toggle("abrir");
  btnAnimar.classList.toggle("ativo", isOpen);
  btnAnimar.classList.toggle("ativar", isOpen);
  btnAnimar.setAttribute("aria-expanded", String(isOpen));
}

if (menuDiv && btnAnimar) {
  document.querySelectorAll(".menu-mobile a").forEach(function (link) {
    link.addEventListener("click", function () {
      menuDiv.classList.remove("abrir");
      btnAnimar.classList.remove("ativo", "ativar");
      btnAnimar.setAttribute("aria-expanded", "false");
    });
  });
}

$(document).ready(function () {
  var $sections = $(".about, .projects");

  function checkScroll() {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    $sections.each(function () {
      var $section = $(this);
      var sectionOffsetTop = $section.offset().top;
      var sectionHeight = $section.height();

      if (scrollTop + windowHeight >= sectionOffsetTop && scrollTop <= sectionOffsetTop + sectionHeight) {
        $section.addClass("visible");
      } else {
        $section.removeClass("visible");
      }
    });
  }

  $(window).on("scroll", checkScroll);
  checkScroll();
});
