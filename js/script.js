window.onload = function() {
  // Scale animatie op de achtergrond
  TweenMax.to("body",3,{'background-size':'100%'});

  // Biertjes binnensliden
  var timeline = new TimelineMax();
  timeline.from(".radler img", 1.5, { x: -500, autoAlpha: 0 }, "proost")
  timeline.from(".tripel img", 1.5, { x: 500, autoAlpha: 0 }, "proost")

  // Item 1 Draaien (Proost)
  var item1 = document.getElementById("item-1")
  var tl = new TimelineLite({ delay: 2 });

  tl.to(item1, 0.25, { rotation: 20 }).to(item1, 0.25, { rotation: 0 })

  // Item 2 Draaien (Proost)
  var item2 = document.getElementById("item-2")
  var tl = new TimelineLite({ delay: 2 });

  tl.to(item2, 0.25, { rotation: -25 }).to(item2, 0.25, { rotation: 0 })

  // Berichtenslider
  $('.berichten-inner').slick({
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 0,
    variableWidth: true,
    speed: 4000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: false,
  });
}
