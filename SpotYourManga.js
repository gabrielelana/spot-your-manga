// ==UserScript==
// @name         SpotYourManga
// @namespace    https://github.com/gabrielelana/spot-your-manga
// @author       https://github.com/gabrielelana
// @author       https://github.com/stefanobaghino
// @version      0.0.3
// @description  Some manga have an hard name to remember, this will let you spot your mangas in the mangareader.net home page
// @match        http://www.mangareader.net/
// @match        http://www.mangareader.net/latest*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// ==/UserScript==

(function ($) {
    
    var starred = localStorage.starred && JSON.parse(localStorage.starred) || []
    
    var emptyStarSymbol = '&#x2606', fullStarSymbol = '&#x2605'
    var $marker = $('<span />')
    .addClass('spot-your-manga')
    .css({
        'margin-right': '10px',
        'font-size': '1.2em',
        'position': 'relative',
        'cursor': 'pointer'
    })
    
    $('.chapter').each(function() {
        var isStarred = starred.indexOf($(this).text()) >= 0
        $(this).parent().prepend($marker.clone().html(isStarred ? fullStarSymbol : emptyStarSymbol))
    })
    
    $('.spot-your-manga').on('click', toggleStar)
    
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