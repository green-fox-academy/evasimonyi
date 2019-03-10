'use strict';
export { };

class Plant {
	type: string;
	colour: string;
	currentWaterAmount: number = 0;
	thirstyBelowThis: number;
	canAbsorbThisAmount: number;

	constructor(type, colour, currentWaterAmount, thirstyBelowThis, canAbsorbThisAmount) {
		this.type = type;
		this.colour = colour;
		this.currentWaterAmount = currentWaterAmount;
		this.thirstyBelowThis = thirstyBelowThis;
		this.canAbsorbThisAmount = canAbsorbThisAmount;
	}

	doesItNeedWater(): any {
		return this.currentWaterAmount < this.thirstyBelowThis;
	}

	printStatus() {
		if (this.doesItNeedWater()) {
			console.log('This ' + this.colour + ' ' + this.type + ' needs water.')
		} else {
			console.log('This ' + this.colour + ' ' + this.type + ' doesn\'t need water.')
		}
	}

	watering(wateringAmount: number) {
		this.currentWaterAmount += (wateringAmount * this.canAbsorbThisAmount);
	}
};

class Flower extends Plant {
	constructor(colour) {
		super('flower', colour, 0, 5, .75);
	}
}

class Tree extends Plant {
	constructor(colour) {
		super('tree', colour, 0, 10, .4);
	}
}

class Garden {
	plants: Plant[] = new Array;

	wateringAll(wateringAmountAll: number) {
		this.plants.forEach((plant: any): any => {
			if (plant.doesItNeedWater()) {
				plant.watering(wateringAmountAll / this.plants.length);
			}
			//lefilterezem azokat akik need water, es annak a lengthjevel osztom el, visszaad egy arrayt
		});
	}

	pushing(newplant: Plant) {
		this.plants.push(newplant);
	}
}

let myGarden = new Garden();

let yellowFlower = new Flower('yellow');
myGarden.pushing(yellowFlower);
let blueFlower = new Flower('blue');
myGarden.pushing(blueFlower);
let purpleTree = new Tree('purple');
myGarden.pushing(purpleTree);
let orangeTree = new Tree('orange');
myGarden.pushing(orangeTree);

myGarden.plants.forEach(function (plant: any): any {
	plant.printStatus()
});

console.log('\n', 'Watering with 40', '\n');

myGarden.wateringAll(40);

myGarden.plants.forEach(function (plant: any): any {
	plant.printStatus()
});

console.log('\n', 'Watering with 70', '\n');
myGarden.wateringAll(70);

myGarden.plants.forEach(function (plant: any): any {
	plant.printStatus()
});
