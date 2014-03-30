function Weapon(name, dmg, cad, tar, img){
	this.name = name;
	this.dmg = dmg;
	this.cad = cad;
	this.tar = tar;
	this.cost = dmg+cad+tar;	//temp
	this.num = undefined;
	this.range = 10;
	this.img = img;
	this.Img = new Image ();
	this.Img.src =("client/images/" + img + ".png");
}


Weapon.prototype.actualitza = function(){
	this.cost = this.dmg+this.cad+this.tar; //temp
};