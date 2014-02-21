var MAIN_SCENE = 0;
var MAIN_MENU_SCENE = 1;
var WEAPONS_SCENE = 2;


var WEAPONS = {};
var SHIPS = {};
var ARMYS = {};

var W_CONT=0;
var S_CONT=0;
var A_CONT=0;

function Game () {
    // Control stuff
    //this.socket = io.connect(SERVER_IP+':'+SERVER_PORT);
    var self = this;
    /*
    this.socket.on('connect', function () {
        self.socket.id = self.socket.socket.sessionid;
    });

    this.socket.on('updateDeltatime', function (deltatime) {
        self.deltatime = deltatime/1000;
    });
    */

    // Canvas stuff
    this.canvas = document.getElementById("gameCanvas");
    this.context = this.canvas.getContext('2d');
    this.canvas.style.position = "relative";
    this.canvas.style.backgroundColor = 'white';
    this.canvas.style.display = "block";
    this.canvas.style.width = CANVAS_WIDTH+"px";
    this.canvas.style.height = CANVAS_HEIGHT+"px";
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    this.canvas.style.margin = "auto";
    
    // Stats stuff
    this.stats = new Stats();
    this.stats.setMode(0);
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px';
    document.body.appendChild(this.stats.domElement);

    // Game scenes
    this.scenes = [];
    this.current_scene;
    var self = this;//////////////////////////////////////////////////////
    // Init stuff
    window.onresize = function () {
        self.canvas.style.top = (window.innerHeight/2 - CANVAS_HEIGHT/2)+"px";
    }
    window.onresize(this.canvas);

}

Game.prototype.update = function(deltatime) {
        this.current_scene=(this.scenes[this.current_scene].update(deltatime));
};

Game.prototype.draw = function() {
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    console.log(this.current_scene);
    this.scenes[this.current_scene].draw(this.context);
};

Game.prototype._play = function(delta) {
    this.stats.begin();
    this.draw();
    this.update(delta);
    this.stats.end();
};

Game.prototype.play = function() {
    // Do some stuff
    this.current_scene = MAIN_MENU_SCENE;
    this.scenes[MAIN_MENU_SCENE] = new MainMenuScene();
    this.scenes[WEAPONS_SCENE] = new WeaponsScene();
    var self = this;
    requestAnimFrame(gameLoop);
    //setTimeout(gameLoop, 16)
};


