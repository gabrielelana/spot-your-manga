// ==UserScript==
// @name       SpotYourManga
// @namespace  http://gabrielelana.it
// @version    0.0.2
// @description  Some manga have an hard name to remember, this will let you spot your mangas in the mangareader.net home page
// @match      http://www.mangareader.net/
// @copyright  2013, Gabriele Lana
// @require    http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// ==/UserScript==

(function ($) {
    
    var favManga, $favMangaMarker;
    
    function editFavorite() {
        var target = $(this)
        var clickedTitle = target.next().text()
        var titleIndex = favManga.indexOf(clickedTitle)
        if (titleIndex >= 0) {
            favManga.splice(titleIndex, 1)
            target.css('color', 'black')
        } else {
            favManga.push(clickedTitle)
            target.css('color', 'orange')
        }
        localStorage.favManga = favManga
    }
    
    function spawnMarker() {
        return $('<span />')
        .css({
            'margin-right': '10px',
            'font-size': '1.2em',
            'position': 'relative',
            'cursor': 'pointer'
        })
        .html('&#x2605;')
        .on('click', editFavorite)
    }
    
    favManga = localStorage.favManga && localStorage.favManga.split(',') || []
    
    $('.chapter')
    .each(function() {
        var isFav = favManga.indexOf($(this).text()) >= 0
        $(this).parent().prepend(spawnMarker().css('color', isFav ? 'orange' : 'black'))
    })

}(jQuery));

