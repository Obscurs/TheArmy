function MainMenuScene () {
    //this.kb = new KeyboardJS(true);
    //this.socket = socket;
    this.buttons = [];
    this.buttons[0] = new Button(200, 100, 300, 500, true, "test"); //weapons
    this.buttons[1] = new Button(200, 200, 300, 50, false, "test"); //ships
    this.buttons[2] = new Button(200, 300, 300, 50, false, "test"); //armys
    this.buttons[3] = new Button(200, 400, 300, 50, false, "test"); //go battle
}
MainMenuScene.prototype.update = function(deltatime) {

    //char a apretat
    if (kb.keys['65'] && !APRETAT) {
        NEXTE=2;
        APRETAT = true;
    }
    if (kb.keys['66'] && !APRETAT) {
        NEXTE=4;
        APRETAT = true;
    }
    return NEXTE;

};

MainMenuScene.prototype.draw = function(context) {
    context.fillStyle = "white";
    context.fillRect(0,0,context.canvas.width,context.canvas.height);
    
    for(var i=0; i<this.buttons.length;++i) this.buttons[i].draw(context);

};
