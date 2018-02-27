while (true) {
    run();
    var item = hero.findNearestItem();
    if (item)
        hero.move({
            x: item.pos.x,
            y: item.pos.y
        });
    sum();
    atak();
    sheld();
}
function sum() {
    if (hero.gold > hero.costOf("soldier"))
        hero.summon("soldier");
}
function atak() {
    var soldiers = hero.findFriends();
    for (var i = 0; i < soldiers.length; i++) {
        var soldier = soldiers[i];
        var enemy = soldier.findNearestEnemy();
        if (soldier && enemy)
            hero.command(soldier, "attack", enemy);
    }
}
function sheld() {
    var ready = hero.isReady("shield");
    var enemy = hero.findNearestEnemy();
    if (enemy && ready && hero.distanceTo(enemy) < 5) {
        hero.shield();
        pet.chase(enemy);
    }
}
function run() {
    var flag = hero.findFlag("green");
    if (flag)
        hero.pickUpFlag(flag);
}