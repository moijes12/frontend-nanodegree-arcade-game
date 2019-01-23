/*
 * @description Get a random Integer between min and max.
 */
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


/*
 * @description The Enemy Object
 */
var Enemy = function(x = 0, y = 0) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // The location of the Enemy
    this.x = x;
    this.y = y;
    // The speed of the enemy
    this.speed = randomInt(1, 5);
    // The width and height of the enemy
    this.width = 40;
    this.height = 40;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.x > 500) {
        this.x = this.x - 500;
    } else {
        this.x = this.x + (100 * this.speed * dt);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
/**
 * @description The Player class which will inherit from Enemy.
 */
class Player extends Enemy {
    /*
     * @descriptor The constructor for the Player class.
     */
    constructor(x = 0, y = 0) {
        super(x, y);
        this.sprite = 'images/char-boy.png';
        this.width = 40;
        this.height = 40;
    }

    /*
     * @description Overriding the update method.
     */
    update(dt) {
        return this.y;
    }

    /*
     * @description A do-nothing handle input method.
     */
    handleInput(keyCode) {
        //TODO: Implementation pending
    }
}

// Now instantiate your objects.
let enemy1 = new Enemy(1, 60);
let enemy2 = new Enemy(-100, 140);
let enemy3 = new Enemy(200, 220);
let enemy4 = new Enemy(-150, 310);
// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1, enemy2, enemy3, enemy4];
// Place the player object in a variable called player
let player = new Player(200, 500);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
