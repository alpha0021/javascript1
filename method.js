function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here 
    this.perimeter = function(){
        return 2 * Math.PI * this.radius;
        }
}

var bircle = new Circle();
bircle.radius = 4 ;

console.log(bircle.area());
console.log(bircle.perimeter());