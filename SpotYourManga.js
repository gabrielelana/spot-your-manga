// ==UserScript==
// @name     SpotYourManga
// @namespace  http://gabrielelana.it
// @version  0.0.2
// @description  Some manga have an hard name to remember, this will let you spot your mangas in the mangareader.net home page
// @match    http://www.mangareader.net/
// @copyright  2013, Gabriele Lana
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// ==/UserScript==

(function ($) {
  
  var starred = localStorage.starred && JSON.parse(localStorage.starred) || []
  var emptyStarSymbol = '&#x2606', fullStarSymbol = '&#x2605'

  var $marker = $('<span />')
    .css({
      'margin-right': '10px',
      'font-size': '1.2em',
      'position': 'relative',
      'cursor': 'pointer'
    })
    .on('click', toggleStar)

  $('.chapter').each(function() {
    var isStarred = starred.indexOf($(this).text()) >= 0
    $(this).parent().prepend($marker.clone().html(isStarred ? fullStarSymbol : emptyStarSymbol))
  })
  
  function toggleStar() {
    var target = $(this)
    var clickedTitle = target.next().text()
    var titleIndex = starred.indexOf(clickedTitle)
    if (titleIndex >= 0) {
      starred.splice(titleIndex, 1)
      target.html(emptyStarSymbol)
    } else {
      starred.push(clickedTitle)
      target.html(fullStarSymbol)
    }
    localStorage.starred = JSON.stringify(starred)
  }
    
}(jQuery));
