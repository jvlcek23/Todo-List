$(document).ready(function() {
$('#add').click(function() {
    var item = $('#todo').val();
    $('ul').append('<li>' + item + '</li>')
  }); 
  $('#list').on('click','li',function(){
      $(this).wrap('<s>');

  });
});
