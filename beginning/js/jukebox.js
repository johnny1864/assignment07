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
        window.console.log(title);
        $('albums').innerHTML += `<option value='${title}'>${title}</option>`;
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
    var album1 = new Album("Operation Ivy", "Energy");
    var album2 = new Album("Blink 182", "Dude Ranch");
    var album3 = new Album("New Found Glory", "Sticks and Stones");

    jbox.addAlbum(album1);
    jbox.addAlbum(album2);
    jbox.addAlbum(album3);
    
    var albums = $('albums');
    
    $('play').addEventListener('click', function(e){
       window.console.log(albums.value); 
    });
    
    /*
    album1.play();
    album1.play();
    album1.play();
    album2.play();
    album3.play();
    */
    
    window.console.log("You favorite album is: " + jbox.favoriteAlbum());
});
