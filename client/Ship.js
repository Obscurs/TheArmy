function Ship(name){
	this.name = name;
	this.Weapons = [];
	//this.life = life;
	this.Armor = 100;
	this.Acuracity = 1;
	this.AtkSpeed = 1;
	this.Speed = 1;
	this.Size = 0;
	this.Capacity = 100;
	this.Used = 0;

	this.Captains = 0;
	this.Lieutenants = 0;
	this.Pilots = 0;
	this.Tacticians = 0;
	this.Medics = 0;
	this.Enginers = 0;
	this.Cost = 30;
	this.img = 'SmallShip';
	this.Img = new Image ();
	this.Img.src =("client/images/" + this.img + ".png");
	this.pos = undefined;
}