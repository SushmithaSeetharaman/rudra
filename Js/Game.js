class Game {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        })
    }

    update(state){
            database.ref('/').update({
                gameState : state
            })
    }

    start(){
            if(gameState === 0){
                player = new Player();
                player.getCount();
                form = new Form();
                form.display();
                
            wall1 = createSprite(300,290,10,500);

            player1 = createSprite(500, 100,20,20);
            player1.shapeColor = 'yellow'
            player2 = createSprite(200, 200,20,20);
            player2.shapeColor = 'blue'
            players = [player1, player2];

            
        }
    
    }

    play(){
            var counter = 0;
            form.hide();
            Player.getPlayerInfo();
            if(allPlayers!== undefined){
                background(gameBackground);
                var index = 0;
               
                var x=0;
                var y = 0;
                //console.log("printing players " +players[0]);

                for(var plr in allPlayers){
                    
                    index = index + 1;     
                    
                    players[index-1].x = allPlayers[plr].x;
                    players[index-1].y = allPlayers[plr].y;
                   
                }

                
            }

            if(keyDown('UP_ARROW') ){
                console.log("Hi");
                player.y = player.y - 10;
                player.update();
            }
            if(keyDown('DOWN_ARROW')){
                //console.log("Hi");
                player.y = player.y + 10;
                player.update();
            }
            if(keyDown('LEFT_ARROW')){
                //console.log("Hi");
                player.x = player.x - 10;
                player.update();
            }
            if(keyDown('RIGHT_ARROW')){
                //console.log("Hi");
                player.x = player.x + 10;
                player.update();
            }

            drawSprites();
        }
}