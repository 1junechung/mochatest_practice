// Robot with 200 bullets and 4 phrases
var Robot = function(){
    this.bullet =  200;
    this.phrases = ['Enemy Ahead!', 
                  'I am ready to shoot', 
                  'I surrender', 
                  'I am out of bullets!'];
};

// Robot returns a random string out of 4 phrases
Robot.prototype.talk= function(){
    let phrase = this.phrases[ Math.floor(Math.random() * this.phrases.length) ];
    console.log("Robot says:", phrase);
    return phrase;
};

// Robot shoots 50 bullets a time 
Robot.prototype.shoot= function(){
        console.log("pew pew pew. 50 shots fired.");
        this.bullet -= 50;    
        
    return this.bullet; //returns a number of remaining bullets
};

let robot = new Robot();
//robot.talk();

module.exports = robot;