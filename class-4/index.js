// class rec{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     area(){
//         return this.width*this.height;
//     }
// }

// const rectangel = new rec(2,3);
// console.log(rectangel.area());


// class shape{
// constructor(color){
//     this.color = color;

// }
// area(){
//     throw new Error("this is implemented in subclass");
// }
// }

// class square extends shape{
//     constructor(side, color){
//         super(color);
//         this.side = side;
    
//     }
//     area(){
//         return this.side*this.side;
//     }

//     perimeter(){
//         return this.side * 4;
//     }
// }
// const sq = new square( 5, "red");
// console.log(sq.area());
// console.log(sq.perimeter()) ;
// console.log(sq.color);


class Vehical{
    constructor(brand){
        this.brand = brand ;
    }

    // showBrand(){
    //     throw new Error("has info in subclass");
    // }

}

class Car extends Vehical{
    constructor(brand, model, price){

        super(brand)
        this.model = model;
        this.price =  price;

    }
    showBrand(){
        return this.brand;
    }
    showDetails(){
        return {model : this.model , price : this.price}
    }    
}

const newCar = new Car("Toyota", "Camery", 250000 );
console.log(newCar.brand)
console.log(newCar.showDetails().model);
console.log(newCar.showDetails().price);

