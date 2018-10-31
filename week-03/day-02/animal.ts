/* Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */

class Animal {
    hunger_value: number;
    thirst_value: number;

    constructor (hunger_value: number = 50, thirst_value: number = 50){
        this.hunger_value = hunger_value;
        this.thirst_value = thirst_value;
    }

    eat() {
        this.hunger_value --;
    }

    drink() {
        this.thirst_value --;
    }

    play() {
        this.hunger_value -- && this.thirst_value --;
    }
}