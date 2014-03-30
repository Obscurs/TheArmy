var MAIN_SCENE = 0;
var MAIN_MENU_SCENE = 1;
var WEAPONS_SCENE = 2;
var NEWWEAPON_SCENE = 3;
var SHIPS_SCENE = 4;
var NEWSHIP_SCENE = 5;


var WEAPONS = [];
var SHIPS = [];
var ARMYS = [];

var W_CONT=-1;
var S_CONT=-1;
var A_CONT=-1;
var NEXTE;
var APRETAT = false;
var NUM_IMAGES_WEAPONS = 3;



++W_CONT;
WEAPONS[W_CONT] = new Weapon('A1', 10, 20, 30, 'WI0');
++W_CONT;
WEAPONS[W_CONT] = new Weapon('A2', 20, 30, 40, 'WI1');
++W_CONT;
WEAPONS[W_CONT] = new Weapon('A3', 30, 40, 50, 'WI2');
++W_CONT;
WEAPONS[W_CONT] = new Weapon('A4', 40, 50, 60, 'WI0');


++S_CONT;
SHIPS[S_CONT] = new Ship('test');

SHIPS[S_CONT].Weapons.push('A1');
SHIPS[S_CONT].Weapons.push('A2');
SHIPS[S_CONT].Weapons.push('A1');
SHIPS[S_CONT].Weapons.push('A3');
SHIPS[S_CONT].Weapons.push('A4');



kb = new KeyboardJS(true);
    /*document.addEventListener("keyup", function(e) {
        if(APRETAT) if(e.keyCode == 65 || e.keyCode == 78 || e.keyCode == 79 || e.keyCode == 13 ||
            e.keyCode == 66 ||e.keyCode == 68 ||e.keyCode == 39 ||e.keyCode == 37 ||e.keyCode == 38 ||e.keyCode == 40) APRETAT = false;
            //this.apretat = false;
    });
    */
    document.addEventListener("keyup", function(e) {
        if(APRETAT)  APRETAT = false;
            //this.apretat = false;
    });


function suprElem(vec, pos){
    size=vec.length;
    vec.splice (pos, 1);
}


function Game () {


    //////////////////////////////////SIDA
    //++W_CONT;
    //WEAPONS[W_CONT] = new Weapon("test 0", 0, 0, 0, "WI1");
    

    //////////////////////////////////FISIDA

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
    NEXTE=1;
    this.scenes[MAIN_MENU_SCENE] = new MainMenuScene();
    this.scenes[WEAPONS_SCENE] = new WeaponsScene();
    this.scenes[NEWWEAPON_SCENE] = new NewWeaponScene();
    this.scenes[SHIPS_SCENE] = new ShipsScene();
    this.scenes[NEWSHIP_SCENE] = new NewShipScene();
    var self = this;
    requestAnimFrame(gameLoop);
    //setTimeout(gameLoop, 16)
};


