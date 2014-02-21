function Button(x, y, sx, sy, act, name){
	this.x=x;
	this.y=y;
	this.sx=sx;
	this.sy=sy;
	this.act=act;
	this.buttImg = new Image ();
	this.buttImg.src =("client/images/" + name + ".png");
}

Button.prototype.draw = function(context){
	if(this.act===true){
		context.drawImage(this.buttImg, this.x, this.y, this.sx, this.sy);
	}
};
