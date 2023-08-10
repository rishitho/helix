$(document).ready(function(){
  $('.accordion h3').on('click', function(){
      $(this).siblings('p').toggle();
  })
})
