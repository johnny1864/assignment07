/*eslint-env browser*/

window.addEventListener('load', function () {
    'use strict';
    var recipe = {
        title: 'Pizza',
        servings: 4,
        ingredients: ['16oz pizza dough', '4oz tomato sauce', '1 cup mozorella chesse', '8 pepperoni slices'],
        display: function () {
            window.console.log(this.title);
            window.console.log(`Serves: ${this.servings}`);
            window.console.log('Ingredients:');
            this.ingredients.forEach(function(item){
                window.console.log('-' + item);
            });
        }
    };
    
    recipe.display();
});
