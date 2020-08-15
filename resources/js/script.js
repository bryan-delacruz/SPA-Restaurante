$(document).ready(function () {
  $('.js--section-features').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
      console.log("add clase")
    } else {
      $('nav').removeClass('sticky');
      console.log("remove clase")
    }
  });
});

/* var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
}) */
