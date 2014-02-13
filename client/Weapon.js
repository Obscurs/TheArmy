function Weapon(name, dmg, cad, tar){
	this.name = name;
	this.dmg = dmg;
	this.cad = cad;
	this.tar = tar;
	this.cost = dmg+cad+tar;
	this.num = undefined;
}