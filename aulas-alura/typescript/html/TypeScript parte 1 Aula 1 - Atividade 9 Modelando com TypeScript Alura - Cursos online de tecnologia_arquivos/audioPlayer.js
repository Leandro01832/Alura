$(function(){$(".audioPlayer").append('<div class="audioPlayer-loop"><svg class="loop"><use xlink:href="/assets/images/classPage/playerLoop.svg#playerLoop"></svg></div>'),$(".audioPlayer-loop").on("click",function(){!function(o){o.loop=!o.loop}($(this).parent().find("audio")[0]),$(this).toggleClass("audioPlayer-loop--active")}),$(".audioPlayer-player").contextmenu(function(){return!1})});