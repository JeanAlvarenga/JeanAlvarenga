$(document).ready(function(){
    $(".text h1 span, .bottom_text h5").lettering();

    var tl = gsap.timeline();
    tl.from(".text h1 span",{
      x: -20,
      duration: 1,
      opacity: 0,
      stagger: .1
    })
    .from(".img_group img",{
      x: 1100,
      duration: 1,
      opacity: 0,
      stagger: .14
    })
    .to(".img_group img",{
      x: 1100,
      margin: '0 -140px 0',
      duration: 1,
      opacity: 1,
      rotate: 15,
      stagger: .14
    }, '-=1.4')
    .from(".bottom_text h5 span",{
      x: -20,
      duration: 1,
      opacity: 0,
      stagger: .07
    })
    .from("header .logo",{
      y: -20,
      duration: 1,
      opacity: 0,
    })
    .from("header nav li",{
      y: -20,
      duration: 1,
      opacity: 0,
      stagger: .07
    })
    setTimeout(function(){
      $(".engineer").mouseover(function(){
        gsap.to(".img_group img",{
          x: 100,
          margin: '0 10px 0',
          duration: 1,
          opacity: 1,
          rotate: 0,
          stagger: .14
        })
      });
      $(".engineer").mouseout(function(){
        gsap.to(".img_group img",{
          x: 1100,
          margin: '0 -140px 0',
          duration: 1,
          opacity: 1,
          rotate: 15,
          stagger: .14
        })
      });
    }, 5000);
  });

  const menuDiv = document.getElementById('menu-mobile')
  const btnAnimar = document.getElementById('btn-menu')
  menuDiv.addEventListener('click', animarMenu)
  function animarMenu() {
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
    btnAnimar.classList.toggle('ativar') // animação do icone sanduiche 
  }

  $(document).ready(function() {
    var $sections = $('.about, .projects'); // Adicione outras classes aqui, separadas por vírgulas

    function checkScroll() {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        $sections.each(function() {
            var $section = $(this);
            var sectionOffsetTop = $section.offset().top;
            var sectionHeight = $section.height();

            if (scrollTop + windowHeight >= sectionOffsetTop && scrollTop <= sectionOffsetTop + sectionHeight) {
                $section.addClass('visible');
            } else {
                $section.removeClass('visible');
            }
        });
    }

    $(window).on('scroll', checkScroll);
    checkScroll(); // Checa ao carregar a página
});