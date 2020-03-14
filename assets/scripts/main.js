let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c = canvas.getContext('2d');

// Object Create
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = ( Math.random() - 0.5 ) * 8;
// var dy = ( Math.random() - 0.5 ) * 8;
// var rad = 30;



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let mouse = {
    x : undefined,
    y : undefined
};

function setMousePosition(event) {
    mouse.x = event.x;
    mouse.y = event.y;
}



let color = ['#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#298089']

function Circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    let maxRadius = 40;
    let minRadius = randomNumber(2,4);
    this.color = color[randomNumber(0,5)];
    
    this.draw = function() {
                   
                    c.beginPath();
                    c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
                    c.strokeStyle = 'blue';
                    c.stroke();
                    c.fillStyle = this.color;
                    c.fill();
                    
                }

    this.update = function() {
                    
                    if(this.x + this.radius > innerWidth || this.x - this.radius <= 0) {
                        this.dx = -this.dx;
                    }
                    if( this.y + this.radius > innerHeight || this.y - this.radius <= 0) {
                        this.dy = -this.dy;
                    }
                    
                    this.x += this.dx;
                    this.y += this.dy;
                    

                    if(mouse.x - this.x<= 50 && mouse.x - this.x > -50 && mouse.y - this.y <= 50 && mouse.y - this.y > -50) {
                        if(this.radius < maxRadius) {
                            this.radius += 1;
                        } 
                    }else if(this.radius > minRadius) {
                        this.radius -= 1;
                        
                    }

                    this.draw();

                }

}

var circleArray = [];

for(let i = 0; i < 800; i++) {
    
    var x = Math.random() * (innerWidth - 2 * radius) + radius;
    var y = Math.random() * (innerHeight - 2 * radius) + radius;
    var dx = ( Math.random() - 0.5 ) * 3;
    var dy = ( Math.random() - 0.5 ) * 3;
    var radius = 30;

    circleArray.push(new Circle(x, y, radius, dx, dy));

    // circleArray[i].update();
  
}

console.log(circleArray);

// Normal Way


function animate() {
    
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for(let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
   
    
}

function init() {
    circleArray = [];
    for(let i = 0; i < 800; i++) {
    
        var x = Math.random() * (innerWidth - 2 * radius) + radius;
        var y = Math.random() * (innerHeight - 2 * radius) + radius;
        var dx = ( Math.random() - 0.5 ) * 3;
        var dy = ( Math.random() - 0.5 ) * 3;
        var radius = 30;
    
        circleArray.push(new Circle(x, y, radius, dx, dy));
      
    }
}

function setCanvasDimension(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
}

window.addEventListener('mousemove', setMousePosition);

window.addEventListener('resize', setCanvasDimension);

