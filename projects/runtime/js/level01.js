var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -10,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        
        function createEnemy(x,y){
        myObstacle.x = 400;
        myObstacle.y = 400;
        game.addGameItem(myObstacle);    
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25; 
        var enemy =  game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -1;
        enemy.rotationalVelocity = 10;
        enemy.onPlayerCollision = function() {
        game.changeIntegrity(-100);
        enemy.fadeOut();
        };
        enemy.onProjectileCollision = function() {
            game.increaseScore(100);
            enemy.fadeOut();
        };
        }
        createEnemy(400,groundY-40);
        createEnemy(800,groundY-40);
        createEnemy(1200,groundY-40);
        createEnemy(1600,groundY-40);
        createEnemy(2000,groundY-40);
        createEnemy(2400,groundY-40);
        createEnemy(2800,groundY-40);
        function createSawBlade(x,y) {
       // your code goes here
    game.addGameItem(myObstacle);
    var obstacleImage= draw.bitmap('img/sawblade.png');
    myObstacle.addChild(obstacleImage);
    obstacleImage.x = -x;
    obstacleImage.y = -y;
    
}  
    
    createSawBlade(600,400);
    createSawBlade(700,400);
    createSawBlade(500,400);
    for(var i=0 ;i<levelData.gameItems.length ;i++){
    createSawBlade(levelData.gameItems.x,levelData.gameItems.y);
    }
    var reward=game.createGameItem('reward',25);
    function createReward (x,y){
    var redSquare = draw.rect(50,50,'gold');
    redSquare.x = -25;
    redSquare.y = -25;
    reward.addChild(redSquare);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    reward.velocityX = -1;
    reward.rotationalVelocity = 4;
    reward.onPlayerCollision = function() {
    game.changeIntegrity(100);
    reward.fadeOut();
    };
    reward.onProjectileCollision = function() {
    game.increaseScore(300);
    reward.fadeOut();
    };
    }
    createReward(1700, groundY -97);    
        
    };

};

   
       
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}