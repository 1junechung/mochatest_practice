// 
var Robot = function(){
    this.bullet =  200;
    this.phrases = ['Enemy Ahead!', 
                  'I am ready to shoot', 
                  'I surrender', 
                  'I am out of bullets!'];
};
Robot.prototype.talk= function(){
    //returns a string
    let phrase = this.phrases[ Math.floor(Math.random() * this.phrases.length) ];
    console.log("Robot says:", phrase);
    return phrase;
};

Robot.prototype.shoot= function(){
    //returns a number of remaining bullets
    if( this.bullet >= 50){
        console.log("pew pew pew. 50 shots fired.");
        this.bullet -= 50;
    }else if( this.bullet == 0){
        console.log('No bullet left');
    }else{
        let num = this.bullet;
        console.log("pew pew. ", num, "shots fired.");
        this.bullet -= num;
    }
    return this.bullet;
};

let robot = new Robot();
//robot.talk();

module.exports = robot;