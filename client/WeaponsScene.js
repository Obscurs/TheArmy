function WeaponsScene () {
    this.kb = new KeyboardJS(true);
    //this.socket = socket;
    this.buttons = [];
    this.buttons[0] = new Button(200, 100, 300, 500, true, "test");

    this.next=2;
}
WeaponsScene.prototype.update = function(deltatime) {
    
    /*
    if (!this.match_start) {return;};
    if ((this.players[this.player_id].vy === 0 ) && ( this.kb.char("W") || this.kb.char(" ") || this.kb.char("&")))
        this.sendCommand("U");
    else if (this.kb.char("A") || this.kb.char("%"))
        this.sendCommand("L");
    else if (this.kb.char("D") || this.kb.char("'"))
        this.sendCommand("R");

    for (var it in this.obstacles) this.obstacles[it].update(deltatime, -this.wspeed, this.obstacles);
    for (var it in this.players) this.players[it].update(deltatime, -this.wspeed,this.obstacles);

    if (this.wspeed < this.players[0].speedx*0.95)
        this.wspeed++;

    this.randomGenerator = new Math.seedrandom(this.seed+this.iteration);
    this.iteration++;
    */

    return this.next;
};

WeaponsScene.prototype.draw = function(context) {
    context.fillStyle = "white";
    context.fillRect(0,0,context.canvas.width,context.canvas.height);
    for(var i=0; i<this.buttons.length;++i) this.buttons[i].draw(context);
    //this.b1.draw(context);
    /*
    if (!this.match_start) {return;};
    context.font = "10px Arial";
    for (var it in this.obstacles) this.obstacles[it].draw(context);
    for (var it in this.players) {
        this.players[it].draw(context);
    }
    context.fillStyle = "black";
    context.fillRect(590, 0, CANVAS_WIDTH, (20*this.players.length)+20);
    for (var it in this.players) {
        context.fillStyle = this.players[it].color;
        context.fillText(this.players[it].name,600,(20*it)+20);
    }
    */
};
