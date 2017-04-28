$(document).ready(function(){
  var col = 'cf0fcf';
  
  function updateCookieInfo(c){
    $("#cookie").html(c);
    $("#text").css("color", "#" + c);
    $("#colorSelector div").css("background-color", "#" + c);
  }
  
  if(typeof $.cookie('color') != 'undefined'){
    col = $.cookie('color');
    updateCookieInfo(col);
  }
   
  $('#colorSelector').ColorPicker({
    color: col,
    onShow: function (colpkr) {
      $(colpkr).fadeIn(500);
      return false;
    },
    onHide: function (colpkr) {
      $(colpkr).fadeOut(500);
      $.cookie('color', col, { expires: 7 });
      updateCookieInfo(col);
      return false;
    },
    onChange: function (hsb, hex, rgb) {
      col = hex;
      $('#colorSelector div').css('backgroundColor', '#' + hex);
    }
  });
});
