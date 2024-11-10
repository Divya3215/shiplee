$(document).ready(function(){
    $("h2").click(function(){
      $("h3").slideToggle("slow");
    });
    $("#a").click(function(){
      $("#b").slideToggle("slow");
    });
    $("#c").click(function(){
      $("#d").slideToggle("slow");
    });
    $("#e").click(function(){
      $("#f").slideToggle("slow");
    });
    $("h2").css("color", "white").slideUp(2000).slideDown(2000);
    $("h3").css("color", "white").slideUp(5000).slideDown(5000);
    $("table").css("color", "white").slideUp(2000).slideDown(2000);

});