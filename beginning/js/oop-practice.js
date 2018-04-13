/*eslint-env browser*/

//STEP 1
var Dog = function () {
    'use strict';
};

function Cat() {
    'use strict';

}

//STEP 2

var cat = new Cat();
var dog = new Dog();

//STEP 3
/*
function Animal() {
    'use strict';
    this.init = function () {
        window.console.log('The animal has been created');
    };
}

var animal = new Animal();

animal.init();
*/

//STEP 4
/*
var Animal = function (talk) {
    'use strict';
    this.init = function () {
        window.console.log('The animal has been created and says ' + talk);
    };
};

var animal = new Animal('hello');

animal.init();
*/

//STEP 5
/*
var Animal = function (talk, type, breed, color, height, length) {
    'use strict';

    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;

    this.init = function () {
        window.console.log('The animal has been created and says ' + talk);
    };
    
    this.speak = function(){
        if (this.type === 'dog'){
            window.console.log(`The ${this.color} dog is braking!`)
        }else if(this.type === 'cat'){
            window.console.log(`The ${this.color} cat is meowing!`)
        }else{
            window.console.log(`The ${this.type} is making a sound!`);
        }
    }
};

var animal = new Animal('hello', 'cat', 'tiger', 'brown', '12in', '32in');

animal.init();
*/

//STEP 6
/*
for (var keys in animal) {
    window.console.log(keys, ' : ', animal[keys]);
}
*/

//STEP 7

animal.speak();

//STEP 8

var Animal = function (talk, type, breed, color, height, length) {
    'use strict';

    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;

    this.init = function () {
        window.console.log('The animal has been created and says ' + talk);
    };

    this.speak = function () {
        
    };
    
    var checkType = function(){
        if (this.type === 'dog') {
            return 'dog';
        } else if (this.type === 'cat') {
            return 'cat'
        } else {
            return type;
        }
    };
};



//STEP 9

//STEP 10
