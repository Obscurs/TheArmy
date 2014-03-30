function ShipsScene () {
    this.buttons = [];
    this.Scont=0;
    this.actS = SHIPS[this.Scont];
    var self = this;


}


ShipsScene.prototype.update = function(deltatime) {

    if(this.actS === undefined && SHIPS[this.Scont] !== undefined) this.actS = SHIPS[this.Scont];
    if(this.actS !== undefined){
        //dreta
        if (kb.keys['39'] && !APRETAT) {
            ++this.Scont;
            if(this.Scont===SHIPS.length) this.Scont=0;
            this.actS = SHIPS[this.Scont];
            APRETAT = true;
        }
        //esquerra
        if (kb.keys['37'] && !APRETAT) {
            --this.Scont;
            if(this.Scont<0) this.Scont=SHIPS.length-1;
            this.actS = SHIPS[this.Scont];
            APRETAT = true;
        }
        //SUPR
        if (kb.keys['46'] && !APRETAT) {
            APRETAT = true;
            suprElem(SHIPS, this.Scont);
            if(this.Scont>0)--this.Scont;
            --S_CONT;
            this.actS = SHIPS[this.Scont];
        }
    }
    //B
    if (kb.keys['66'] && !APRETAT) {
        NEXTE=1;
        APRETAT = true;
    }
    //N
    if (kb.keys['78'] && !APRETAT) {
        NEXTE=5;
        APRETAT = true;
    }


    return NEXTE;
};

ShipsScene.prototype.draw = function(context) {
    context.fillStyle = "black";
    context.fillRect(0,0,context.canvas.width,context.canvas.height);
    context.fillStyle = "grey";
    context.fillRect(40,60,300,50);
    context.fillRect(350,60,200,50);
    //context.fillRect(40,150,700,300);
    context.fillRect(40,150,220,145);
    context.fillRect(235,150,255,70);
    context.fillRect(500,150,260,300);
    context.fillRect(40,305,220,145);
    //img
    context.fillRect(270, 230,220,220);

    //context.fillRect(40,150,340,140);
    for(var i=0; i<this.buttons.length;++i) this.buttons[i].draw(context);
    context.font = "30px Arial";
    context.fillStyle = "black";
    if(this.actS !== undefined){
        context.fillText("Name: " + this.actS.name,50,100);
        context.fillText("Cost: " + this.actS.Cost,360,100);

        context.font = "15px Arial";
        context.fillText("Armor: " + this.actS.Armor,50,170);
        context.fillText("Acuracity: " + this.actS.Acuracity+" (%Hit = "+")",50,190);
        context.fillText("Atk Speed: " + this.actS.AtkSpeed,50,210);
        context.fillText("Speed: " + this.actS.Speed+" (%Dodge = "+")",50,230);


        context.fillText("Size: " + this.actS.Size,280,170);
        context.fillText("Capacity: " + this.actS.Capacity,280,190);
        context.fillText("Used: " + this.actS.Used,280,210);

        context.font = "20px Arial";
        context.fillText("Tripulation: ",50,330);
        context.font = "14px Arial";
        context.fillText("Captains: " + this.actS.Captains,60,350);
        context.fillText("Lieutenants: " + this.actS.Lieutenants,60,365);
        context.fillText("Pilots: " + this.actS.Pilots,60,380);
        context.fillText("Tacticians: " + this.actS.Tacticians,60,395);
        context.fillText("Medics: " + this.actS.Medics,60,410);
        context.fillText("Enginers: " + this.actS.Enginers,60,425);

        context.font = "20px Arial";
        context.fillText("Weapons: ",510,180);

        context.drawImage(this.actS.Img, 270, 230, 220, 220);
    }


};
