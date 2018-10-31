class Plant {
    type: string; //flower or tree
    colour: string; //flower: yellow and blue, trees: purple and orange
    currentWaterAmount: number; 
    absorb: number; 
    thirsty: number //below this number it needs water

    constructor(type, colour, currentWaterAmount, absorb, thirsty){
        this.type = type;
        this.colour = colour;
        this.currentWaterAmount = currentWaterAmount;
        this.absorb = absorb;
        this.thirsty = thirsty;
    }

    waterPlant(wateringAmount: number) {
        this.currentWaterAmount += (wateringAmount) * this.absorb;
    }

    doesItNeedWater (currentWaterAmount: number): any {
        if (this.currentWaterAmount < this.thirsty) {
            console.log('The ' + this.colour + this.type + ' needs water.');   
            return true;
        } else {
            console.log('The ' + this.colour + this.type + ' doesn\'t need water.');
            return false;
            };
        };
};

class Flower extends Plant {
    constructor(type: 'flower', colour: string, currentWaterAmount: 0) {
    super(type, colour, currentWaterAmount, 0.75, 5);
    }
}

class Tree extends Plant {
    constructor(type: 'tree', colour: string, currentWaterAmount: 0) {
    super(type, colour, currentWaterAmount, 0.4, 10);
    }
}

class Garden {
    plants: Plant[]  = new Array;

    waterAllPlant(water: number){

        this.plants.forEach((plant: any) : any => {
            if (plant.doesItNeedWater()) { 
            plant.doesItNeedWater(water/this.plants.length);
            }
        });
    }

    addNewPlant(newplant: Plant){
        this.plants.push(newplant);
    }

    doesPlantNeedWater(){
        this.plants.forEach(function (plant: any) : any{
            plant.doesItNeedWater(this.currentWaterAmount);
        });
    }
}

let garden1 = new Garden ()

let yellowFlower = new Flower ('flower', 'yellow', 0);
garden1.addNewPlant(yellowFlower);
let blueFlower = new Flower ('flower', 'blue', 0);
garden1.addNewPlant(blueFlower);
let purpleTree = new Tree ('tree', 'purple', 0);
garden1.addNewPlant(purpleTree);
let orangeTree = new Tree ('tree', 'orange', 0);
garden1.addNewPlant(orangeTree);

console.log(garden1.plants.forEach(function (plant: any) : any{
    plant.doesItNeedWater(this.currentWaterAmount);
}));

console.log('\n', 'Watering with 40','\n');

console.log(garden1.waterAllPlant(40));

console.log('\n', 'Watering with 70', '\n');

console.log(garden1.waterAllPlant(70));

