/*eslint-env browser*/

var $ = function (id) {
    'use strict';
    return window.document.getElementById(id);
}

//JUKEBOX CLASS 
var Jukebox = function () {
    "use strict";
    var albums = [],
        self;

    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1,
                fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

//ALBUM CLASS
var Album = function (artist, title) {
    "use strict";

    var displayAlbum = function () {
        $('menu').innerHTML += `<option value='${title}'>${title} by ${artist}</option>`;
    }
    displayAlbum();
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        }
    };
    return self;
};


window.addEventListener('load', function () {

    var jbox = new Jukebox();

    var music = [["Operation Ivy", "Energy"], ["Blink 182", "Dude Ranch"], ["New Found Glory", "Sticks and Stones"]];

    var albums = [];

    //CREATES ALBUMS FOR MUSIC ARRAY
    for (var i = 0; i < music.length; i++) {
        albums[i] = new Album(music[i][0], music[i][1]);
        jbox.addAlbum(albums[i]);
    }

    /*
    var album1 = new Album();
    var album2 = new Album(music[1][0], music[1][1]);
    var album3 = new Album();
    
    
    jbox.addAlbum(album2);
    jbox.addAlbum(album3);
    */

    var menu = $('menu');

    $('play').addEventListener('click', function (e) {
        window.console.log(e.target);
        for(var i = 0; i<albums.length; i++){
            if(music[i][1] === menu.value){
                albums[i].play();
            }
        }
    });

    /*
    album1.play();
    album1.play();
    album1.play();
    album2.play();
    album3.play();
    */
    
    $('show-favs').addEventListener('click', function(){
        $('favoriteAlbum').innerHTML = "You favorite album is " + jbox.favoriteAlbum()
    });
});










