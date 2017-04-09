$(function($) {
  // Determine header based on screen size
  var header = document.getElementById('header-content');
  if ($(window).width() < 768) {
    header.innerHTML = '<img src="./images/vive_header.jpg" id="header-img">';
  } else {
    header.innerHTML = '<video loop type="video/mp4" src="./video/vive_video.mp4" style="width: 100%; height: auto; visibility: visible;" autoplay></video>';
  }

  // Autoplay videos when sliding
  $('#games-carousel').on('slid.bs.carousel', function (e) {
    $('video').each(function(){
      this.pause();
    });
    $('.item.active').find('video')[0].play();
  });

  // Click to play and pause
  $('video').click(function(){
    var video = this;
    this.paused?this.play():this.pause();
    $('.carousel-control').click(function(){
      video.pause();
    });
  });

  // Play video when in viewport only
  $(window).scroll(function(){
    function elementScrolled(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
    if(elementScrolled('#games-carousel')) {
      $('.item.active').find('video')[0].play();
    } else {
      $('.item.active').find('video')[0].pause();
    }
  });

  // WebVR Modal
  $('#webvr-link').on('click', function(){
    $('#webvr')[0].style.display = "block";
  });
  $('.close').on('click', function(){
    $('#webvr').fadeOut('1600');
  });
});
