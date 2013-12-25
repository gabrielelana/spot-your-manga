// ==UserScript==
// @name       SpotYourManga
// @namespace  http://gabrielelana.it
// @version    0.0.1
// @description  Some manga have an hard name to remember, this will let you spot your mangas in the mangareader.net home page
// @match      http://www.mangareader.net/
// @copyright  2013, Gabriele Lana
// @require    http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// ==/UserScript==

// TODO: make the search more reliable (fuzzy match)
// TODO: save the manga list in the local storage
// TODO: add to every manga not tracked a button to add it to the list

var $spottedMangaMarker = $('<span style="margin-left: 10px; color: black; font-size: 1.2em; position: absolute;">&#x2605;</span>')
var mangaToKeepTrackOf = [
    'Naruto', 'Bleach', 'Dragons Rioting', 'Beelzebub', 'The Breaker: New Waves', 'Fairy Tail',
    'Historys Strongest Disciple Kenichi', 'Girls of the Wild\'s', 'Diamond no Ace', 'One Piece'
]

$('.chapter strong')
    .filter(function() {
        return mangaToKeepTrackOf.indexOf($(this).text()) >= 0
    })
    .parent()
    .append($spottedMangaMarker)
