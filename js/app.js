//Loading
$(window).on("load", function () {
  $(".loader-container").fadeOut(500, function () {
    $(this).remove();
  });
});

//when scroll changing navbar
let screenHeight = $(window).height();
console.log("screenHeight" + screenHeight);

$(window).on("scroll load", function () {
  let currentPosition = $(document).scrollTop();
  //console.log("current position" + currentPosition);
  if (currentPosition > screenHeight - 180) {
    $(".site-nav").addClass("site-nav-scroll");
  } else {
    $(".site-nav").removeClass("site-nav-scroll");
    setActive("home");
  }
});

//changing the mobile menu icon
$(".navbar-toggler").click(function () {
  let result = $(".navbar-collapse").hasClass("show");
  console.log(result);

  if (result) {
    //if hasClass is true
    $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
  } else {
    //if hasCass is false
    $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
  }
});

//Changing the Micro Interreaction
function setActive(current) {
  $(".nav-link").removeClass("current-section");
  $(`.nav-link[href='#${current}']`).addClass("current-section");
}

function navScroll() {
  let currentSection = $("section[id]");
  currentSection.waypoint(
    function (direction) {
      if (direction == "down") {
        let currentSectionID = $(this.element).attr("id");
        console.log(currentSectionID);
        setActive(currentSectionID);
      }
    },
    { offset: "100px" }
  );

  currentSection.waypoint(
    function (direction) {
      if (direction === "up") {
        let currentSectionID = $(this.element).attr("id");
        console.log(currentSectionID);
        setActive(currentSectionID);
      }
    },
    { offset: "-90px" }
  );
}

navScroll();
// var waypoints = $('#home').waypoint(function(direction) {
//     console.log("I'm home");
//     $('.nav-link').removeClass('current-section');
//     $(`.nav-link[href='#home']`).addClass("current-section");
//   }, {
//     offset: '150px'
//   })
// var waypoints = $('#about').waypoint(function(direction) {
//     console.log("I'm about");
//     $('.nav-link').removeClass('current-section');
//     $(`.nav-link[href='#about']`).addClass("current-section");
//   }, {
//     offset: '150px'
//   })
//   var waypoints = $('#services').waypoint(function(direction) {
//     console.log("I'm services");
//     $('.nav-link').removeClass('current-section');
//     $(`.nav-link[href='#services']`).addClass("current-section");
//   }, {
//     offset: '150px'
//   })
//   var waypoints = $('#pricing').waypoint(function(direction) {
//     console.log("I'm pricing");
//     $('.nav-link').removeClass('current-section');
//     $(`.nav-link[href='#pricing']`).addClass("current-section");
//   }, {
//     offset: '150px'
//   })

// Wow js
new WOW().init();
wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();

//pricing script
$(".pricing-slide").slick({
  arrows: false,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// pricing script end
