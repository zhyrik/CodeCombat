loop{
    var flag = hero.findFlag("green");
    var enemy = hero.findNearestEnemy();
    var friends = hero.findFriends();
    
    if(flag) 
        hero.pickUpFlag(flag);
    
    if(enemy) 
        hero.attack(enemy);
    
    if(hero.gold > 50)
        hero.summon("griffin-rider");
    
    for(var i=0; i<friends.length; i++){
        var friend = friends[i];
        var enemySoldier = friend.findNearestEnemy();
        
        if(enemySoldier)
             hero.command(friend, "attack", enemySoldier);
        else {
            hero.command(friend, "move", ({x: hero.pos.x+i, y: hero.pos.y+i+i+i}));
        }
    }
}