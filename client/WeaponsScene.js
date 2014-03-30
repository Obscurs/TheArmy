


function WeaponsScene () {
    //this.kb = new KeyboardJS(true);
    //this.socket = socket;
    this.buttons = [];
    //this.buttons[0] = new Button(200, 100, 300, 500, true, "test");
    this.Wcont=0;
    this.actW = WEAPONS[this.Wcont];
    var self = this;


}
WeaponsScene.prototype.update = function(deltatime) {

    if(this.actW === undefined && WEAPONS[this.Wcont] !== undefined) this.actW = WEAPONS[this.Wcont];
    if(this.actW !== undefined){
        //dreta
        if (kb.keys['39'] && !APRETAT) {
            ++this.Wcont;
            if(this.Wcont===WEAPONS.length) this.Wcont=0;
            this.actW = WEAPONS[this.Wcont];
            APRETAT = true;
        }
        //esquerra
        if (kb.keys['37'] && !APRETAT) {
            --this.Wcont;
            if(this.Wcont<0) this.Wcont=WEAPONS.length-1;
            this.actW = WEAPONS[this.Wcont];
            APRETAT = true;
        }

        //SUPR
        if (kb.keys['46'] && !APRETAT) {
            APRETAT = true;
            suprElem(WEAPONS, this.Wcont);
            if(this.Wcont>0)--this.Wcont;
            --W_CONT;
            this.actW = WEAPONS[this.Wcont];
        }
    }
    //B
    if (kb.keys['66'] && !APRETAT) {
        NEXTE=1;
        APRETAT = true;
    }
    //N
    if (kb.keys['78'] && !APRETAT) {
        NEXTE=3;
        APRETAT = true;
    }

    /*
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

    return NEXTE;
};

WeaponsScene.prototype.draw = function(context) {
    context.fillStyle = "black";
    context.fillRect(0,0,context.canvas.width,context.canvas.height);
    context.fillStyle = "grey";
    context.fillRect(40,60,300,50);
    context.fillRect(40,150,500,300);
    for(var i=0; i<this.buttons.length;++i) this.buttons[i].draw(context);
    context.font = "30px Arial";
    context.fillStyle = "black";
    if(this.actW !== undefined){
        context.fillText("Name: " + this.actW.name,50,100);
        context.fillText("Damage: " + this.actW.dmg,50,200);
        context.fillText("Targets: " + this.actW.tar,50,250);
        context.fillText("Fire rate: " + this.actW.cad,50,300);
        context.fillText("Cost: " + this.actW.cost ,50,380);
        context.drawImage(this.actW.Img, 300, 200, 200, 200);
    }


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
