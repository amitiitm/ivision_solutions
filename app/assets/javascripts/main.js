$(function () {
  var shrinkHeader = 700;
  var slideImage = 700;
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) 
      $('header').addClass('expand');
    else 
      $('header').removeClass('expand');
    if (scroll >= slideImage) 
      $('.paper-pen').addClass('slide');
    else 
      $('.paper-pen').removeClass('slide');
  });
  
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
  i = 0;
  list = ["Client Relationships", "Service Delivery", "Professional Consultant", "Support", "Job Opportunity"];
  setInterval(function () {
    change(i++)
  }, 2000);

  function change() {
    if (i == list.length)
      i = 0;
    $('#text-change')[0].innerText = list[i];
  }
});
