$(function($) {
  // Video carousel
  $('.item.active').find('video')[0].play();
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

  // WebVR Modal
  $('#webvr-link').on('click', function(){
    $('#webvr')[0].style.display = "block";
  });
  $('.close').on('click', function(){
    $('#webvr').fadeOut('1600');
  });
});
