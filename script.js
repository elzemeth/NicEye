var btn1 = document.getElementById('girisyap');
var btn2 = document.getElementById('uyeol');

btn1.onclick = function() {
    location.href = "#";
}
btn2.onclick = function() {
    location.href = "#";
}
// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });