class Aircraft {
    type: any;
    current_ammo: number = 0;
    max_ammo: number;
    base_damage: number = 0; 

    constructor(type: any, current_ammo: number, max_ammo: number, base_damage: number) {
        this.type = type;
        this.current_ammo = current_ammo;
        this.max_ammo = max_ammo;
        this.base_damage = base_damage;
    }    

    fight(){
        return this.base_damage * this.current_ammo;
        return this.current_ammo -= this.current_ammo;
    }

    refill(number){
        return this.current_ammo + number -(number - this.max_ammo);
        //10 a max ammo kapacitás, van benne már 2, megtöltjük 20-szal, 8 belemegy, marad 12
        // 2 + 20 - (20 - 10) = 12
    }

    getType(input){
        return input.Type;
    }

    getStatus(){
        return "Type: " + this.type + ", Ammo: " + this.current_ammo + ", Base Damage: " + this.base_damage + ", All Damage: " + (this.base_damage * this.current_ammo);
    }

    isPriority(){
        if (this.type === 'F35'){
            return true;
        } else if (this.type === 'F16') {
            return false;
        }
    }
}


let F16 = new Aircraft ('F16', 0, 8, 30);
let F35 = new Aircraft ('F35', 0, 12, 50);

class Carrier {
    aircrafts = [];
    storeOfAmmo : number;
    healthPoint : number;

    constructor(storeOfAmmo, healthPoint){
        this.storeOfAmmo = storeOfAmmo;
        this.healthPoint = healthPoint;
    }

    add(newAircraft: Aircraft){
        this.aircrafts.push(newAircraft);
    }

    fill(){
        this.aircrafts.forEach((aircraft: any) : any => {  
            if (this.storeOfAmmo === 0) {
                throw "out of ammo"
            }         
            for (let i = 0; i <= this.aircrafts.length; i++) {
                while (this.aircrafts[i].current_ammo < this.aircrafts[i].max_ammo && this.aircrafts[i].isPriority === true && this.storeOfAmmo > 0){ 
                    return this.aircrafts[i].current_ammo ++;
                    return this.storeOfAmmo --;
                }
                while (this.aircrafts[i].current_ammo < this.aircrafts[i].max_ammo && this.aircrafts[i].isPriority === false && this.storeOfAmmo > 0){ 
                    return this.aircrafts[i].current_ammo ++ && this.storeOfAmmo --;
                    //return this.storeOfAmmo --;
                }
                 
            }
        }

        )
    };

    fight(anotherCarrier: Carrier){
        this.aircrafts.forEach ((aircraft: any) : any => {  
            return aircraft.current_ammo === 0;
            return this.storeOfAmmo = 0;
            return anotherCarrier.healthPoint - (aircraft.base_damage * aircraft.current_ammo);
        })
    };

    getStatus(){
        for (let k = 0; k <= this.aircrafts.length; k++){
            return 'Type: ' + this.aircrafts[k].type + ', Ammo: ' + this.aircrafts[k].max_ammo + ', Base Damage: ' + this.aircrafts[k].base_damage + ', All Damage: ' + this.aircrafts[k].base_damage * this.aircrafts[k].current_ammo
            if (this.aircrafts[k] === 0){
                return 'It\'s dead Jim :('
            }
        }
        
    }
};
