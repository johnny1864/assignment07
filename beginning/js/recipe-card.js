/*eslint-env browser*/

window.addEventListener('load', function () {
    'use strict';
    var recipe = {
        title: 'Pizza',
        servings: 4,
        ingredients: ['16oz `Pizza dough', '4oz Tomato sauce', ''],
        display: function () {
            window.console.log(this.title);
        }
    };
});
