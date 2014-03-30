function NewWeaponScene () {
    //this.kb = new KeyboardJS(true);
    //this.socket = socket;
    this.buttons = [];
    //this.buttons[0] = new Button(200, 100, 300, 500, true, "test");
    var self = this;
    this.textImput=false;
    this.entratAra=true;
    this.punter=0;

    this.Nweap = new Weapon("newName", 0, 0, 0, "WI0");
    this.ImgAct = 0; //numero de la imatge actual

    //posicions de les coses per recorre amb el punter
    this.Pn=0;
    this.Pd=1;
    this.Pt=2;
    this.Pr=3;
    this.Pi=4;

    document.addEventListener("keydown", function(e) {

        if(!APRETAT && self.textImput===true){
            if(e.keyCode >= 65 && e.keyCode <= 90) self.Nweap.name += String.fromCharCode(e.keyCode);
            APRETAT = true;
            if(e.keyCode===8) self.Nweap.name = self.Nweap.name.substring(0, self.Nweap.name.length-1);
            if(e.keyCode===13) self.textImput=false;
        }
            
        //this.apretat = false;
    });

}
NewWeaponScene.prototype.update = function(deltatime) {

    /*if(this.entratAra===true) {
        this.newName = prompt("Enter weapon name: ") || "New weapon";
        this.Nweap.name = this.newName;
        this.entratAra=false;
    }
    */

    /*if(this.textImput===true){
        var text = this.Nweap.name;
        for(var i=65; i<=90; ++i){
            if(kb.keys[i] && !APRETAT){
                text = text + String.fromCharCode(i);
                APRETAT=true;
            }
            if(kb.keys[13] && !APRETAT){
                this.textImput=false;
                APRETAT=true;
            }

        }
        this.Nweap.name = text;
        //this.textImput=false;
    }*/
    if(this.textImput===true){

    }
    else{
        //B
        if (kb.keys['66'] && !APRETAT) {
            NEXTE=2;
            APRETAT = true;
        }

        //O
        if (kb.keys['79'] && !APRETAT) {
            NEXTE=2;
            ++W_CONT;
            WEAPONS[W_CONT] = new Weapon(this.Nweap.name, this.Nweap.dmg, this.Nweap.cad, this.Nweap.tar, this.Nweap.img);
            APRETAT = true;
        }

        //UP
        if (kb.keys['38'] && !APRETAT) {
            --this.punter
            if(this.punter<0) this.punter=3;
            APRETAT = true;
        }

        //DOWN
        if (kb.keys['40'] && !APRETAT) {
            ++this.punter;
            if(this.punter>3)this.punter=0;
            APRETAT = true;
        }

            //dreta
        if (kb.keys['39'] && !APRETAT) {
            if(this.punter==this.Pd){
                ++this.Nweap.dmg;
                this.Nweap.actualitza();
            }
            else if(this.punter==this.Pt){
                ++this.Nweap.tar;
                this.Nweap.actualitza();
            }
            else if(this.punter==this.Pr){
                ++this.Nweap.cad;
                this.Nweap.actualitza();
            }
            else if(this.punter==this.Pn){
                this.textImput=true;
                this.Nweap.name = "";
            }
            /*else if(this.punter==this.Pi){
                ++this.ImgAct;
                if(this.ImgAct>=NUM_IMAGES_WEAPONS) this.ImgAct=0;
                this.Nweap.Img.src =("client/images/WI" + this.ImgAct + ".png");
                this.Nweap.img=("WI"+ this.ImgAct);
            }
            */

            APRETAT = true;
        }
        //esquerra
        if (kb.keys['37'] && !APRETAT) {
            if(this.punter==this.Pd){
                if(this.Nweap.dmg>0) --this.Nweap.dmg;
                this.Nweap.actualitza();
            }
            else if(this.punter==this.Pt){
                if(this.Nweap.tar>0) --this.Nweap.tar;
                this.Nweap.actualitza();
            }
            else if(this.punter==this.Pr){
                if(this.Nweap.cad>0) --this.Nweap.cad;
                this.Nweap.actualitza();
            }
            /*else if(this.punter==this.Pi){
                --this.ImgAct;
                if(this.ImgAct<0) this.ImgAct=NUM_IMAGES_WEAPONS-1;
                console.log("img " + this.ImgAct);
                this.Nweap.Img.src =("client/images/WI" + this.ImgAct + ".png");
                this.Nweap.img=("WI"+ this.ImgAct);
                console.log("img " + this.Nweap.img);
            }
            */
            APRETAT = true;
        }
        if(this.Nweap.dmg >= this.Nweap.tar && this.Nweap.dmg >= this.Nweap.cad){
            this.ImgAct=2;
            this.Nweap.Img.src =("client/images/WI" + this.ImgAct + ".png");
            this.Nweap.img=("WI"+ this.ImgAct);
        }
        else if(this.Nweap.tar >= this.Nweap.cad && this.Nweap.dmg <= this.Nweap.tar){
            this.ImgAct=1;
            this.Nweap.Img.src =("client/images/WI" + this.ImgAct + ".png");
            this.Nweap.img=("WI"+ this.ImgAct);
        }
        else if(this.Nweap.tar <= this.Nweap.cad && this.Nweap.dmg <= this.Nweap.cad){
            this.ImgAct=0;
            this.Nweap.Img.src =("client/images/WI" + this.ImgAct + ".png");
            this.Nweap.img=("WI"+ this.ImgAct);
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
    }

    return NEXTE;
};

NewWeaponScene.prototype.draw = function(context) {
    context.fillStyle = "black";
    context.fillRect(0,0,context.canvas.width,context.canvas.height);
    context.fillStyle = "grey";
    context.fillRect(40,60,300,50);
    context.fillRect(40,150,500,300);
    context.fillStyle = "green";
    if(this.punter==0){
        context.fillRect(10,80,20,20);
    }
    else if(this.punter==1){
        context.fillRect(10,180,20,20);
    }
    else if(this.punter==2){
        context.fillRect(10,230,20,20);
    }
    else if(this.punter==3){
        context.fillRect(10,280,20,20);
    }
    else if(this.punter==4){
        context.fillRect(295,195,210,210);
    }
    for(var i=0; i<this.buttons.length;++i) this.buttons[i].draw(context);
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.fillText("Name: " + this.Nweap.name,50,100);
    context.fillText("Damage: " + this.Nweap.dmg,50,200);
    context.fillText("Targets: " + this.Nweap.tar,50,250);
    context.fillText("Fire rate: " + this.Nweap.cad,50,300);
    context.fillText("Cost: " + this.Nweap.cost ,50,380);
    //context.fillText("Fire rate: " + this.Nweap.cad,50,300);
    context.drawImage(this.Nweap.Img, 300, 200, 200, 200);
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


