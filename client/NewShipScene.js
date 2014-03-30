function NewShipScene () {
    //this.kb = new KeyboardJS(true);
    //this.socket = socket;
    this.buttons = [];
    //this.buttons[0] = new Button(200, 100, 300, 500, true, "test");
    var self = this;
    this.textImput=false;
    this.entratAra=true;
    this.punter=0;

    this.Nship = new Ship("newName");
    this.ImgAct = 0; //numero de la imatge actual

    //posicions de les coses per recorre amb el punter
    this.Pn=0;


    document.addEventListener("keydown", function(e) {

        if(!APRETAT && self.textImput===true){
            if(e.keyCode >= 65 && e.keyCode <= 90) self.Nship.name += String.fromCharCode(e.keyCode);
            APRETAT = true;
            if(e.keyCode===8) self.Nship.name = self.Nship.name.substring(0, self.Nship.name.length-1);
            if(e.keyCode===13) self.textImput=false;
        }
            
        //this.apretat = false;
    });

}
NewShipScene.prototype.update = function(deltatime) {
    if(this.textImput===true){

    }
    else{
        //B
        if (kb.keys['66'] && !APRETAT) {
            NEXTE=4;
            APRETAT = true;
        }

        //O
        if (kb.keys['79'] && !APRETAT) {
            NEXTE=4;
            ++S_CONT;
            //console.log(this.Nship.img);
            SHIPS[S_CONT] = new Ship(this.Nship.name);
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
            if(this.punter==this.Pn){
                this.textImput=true;
                this.Nship.name = "";
            }
            APRETAT = true;
        }
        //esquerra
        if (kb.keys['37'] && !APRETAT) {
            APRETAT = true;
        }
        
    }

    return NEXTE;
};

NewShipScene.prototype.draw = function(context) {
    context.fillStyle = "black";
    context.fillRect(0,0,context.canvas.width,context.canvas.height);
    context.fillStyle = "grey";
    context.fillRect(40,60,300,50);
    context.fillRect(40,150,700,300);
    context.fillStyle = "green";
    if(this.punter==0){
        context.fillRect(10,80,20,20);
    }
    for(var i=0; i<this.buttons.length;++i) this.buttons[i].draw(context);
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.fillText("Name: " + this.Nship.name,50,100);
    //context.drawImage(this.Nweap.Img, 300, 200, 200, 200);
};


