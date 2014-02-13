var io = require('socket.io').listen(4242);
io.set('log level', 1);


function Weapon(name, dmg, cad, tar){
	this.name = name;
	this.dmg = dmg;
	this.cad = cad;
	this.tar = tar;
	this.cost = dmg+cad+tar;
	this.num = undefined;
}

function Ship(name, weapons, life){
	this.name = name;
	this.weapons = weapons;
	this.life = life;
	this.pos = undefined;
}

function Army(name, ships){
	this.name = name;
	this.ships = ships;
}



function Player(user, id){
	this.id = id;
	this.user = user;
	this.weapons = undefined;
	this.ships = undefined;
	this.armys = undefined;
}

var players = {};


io.sockets.on('connection', function (socket) {
	socket.on('userConnected', function (username) {
		var player = new Player (username, socket.id);
		players[socket.id] = player;
	});

	socket.on('donaWeapon', function (weapon){
		players[socket.id].weapons[weapon.name] = weapon;
	});

	socket.on('disconnect', function () {
		delete players[socket.id];
		//socket.broadcast.emit('elimina', socket.id);
	});

});