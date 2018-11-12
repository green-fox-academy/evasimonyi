class Plant {
    type: string; //flower or tree
    colour: string; //flower: yellow and blue, trees: purple and orange
    currentWaterAmount: number; 
    absorb: number; 
    thirsty: number; //below this number it needs water

    constructor(type, colour, currentWaterAmount, absorb, thirsty){
        this.type = type;
        this.colour = colour;
        this.currentWaterAmount = currentWaterAmount;
        this.absorb = absorb;
        this.thirsty = thirsty;
    }

    waterPlant(wateringAmount: number) {
        this.currentWaterAmount += (wateringAmount * this.absorb);
    }

    doesItNeedWater (): any {
        return this.currentWaterAmount < this.thirsty; //return true or false, but doesnt print
    }

    printStatus(): void {
        if (this.doesItNeedWater()) {
            console.log('The ' + this.colour + ' ' + this.type + ' needs water.');  
        } else {
            console.log('The ' + this.colour + ' ' + this.type + ' doesn\'t need water.');
        }
    }
};

class Flower extends Plant {
    constructor(type: 'flower', colour) {
    super(type, colour, 0, 0.75, 5);
    }
}

class Tree extends Plant {
    constructor(type: 'tree', colour) {
    super(type, colour, 0, 0.4, 10);
    }
}

class Garden {
    plants: Plant[] = new Array;

    waterAllPlant(water: number){
        this.plants.forEach((plant: any) : any => {
            if (plant.doesItNeedWater()) { 
                plant.waterPlant(water/this.plants.length); //has to be changed, it divides with all the plants and not only with those who need water
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

let yellowFlower = new Flower ('flower', 'yellow');
garden1.addNewPlant(yellowFlower);
let blueFlower = new Flower ('flower', 'blue');
garden1.addNewPlant(blueFlower);
let purpleTree = new Tree ('tree', 'purple');
garden1.addNewPlant(purpleTree);
let orangeTree = new Tree ('tree', 'orange');
garden1.addNewPlant(orangeTree);

garden1.plants.forEach(function (plant: any) : any{
    plant.printStatus();
});

console.log('\n', 'Watering with 40','\n');

garden1.waterAllPlant(40);

garden1.plants.forEach(function (plant: any) : any{
    plant.printStatus();
});

console.log('\n', 'Watering with 70', '\n');

garden1.waterAllPlant(70);

garden1.plants.forEach(function (plant: any) : any{
    plant.printStatus();
});