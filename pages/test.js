class Animal {
    constructor(color = "yellow", energy = 100) {
        this.color = color;
        this.energy = energy;
    } isActive() {
        if (this.energy > 0) {
            this.energy -= this.energy;
            console.log('Energy is decreasing, currently at:', this.energy)
        }
        else if (this.energy == 0) {
            sleep();
        }
    }
    sleep = function () {
        this.energy += 20;
        console.log(this.energy);
    };
    getColor() { console.log(this.color) };
}


class Cat extends Animal {
    constructor(color, energy, sound = "purr", canJumpHigh = true, canClimbTrees = true) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;

    }
    makeSound() {
        console.log(this.sound);
    };
}
class Bird extends Animal {
    constructor(sound = "chirp", canFly = true, energy, color) {
        super(color, energy);

        this.sound = sound;
        this.canFly = canFly;

    }

    makeSound() {

        console.log(this.sound);
    };
}
class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}


let polly = new Parrot(true);


let sam = new HouseCat();

console.log(sam.isActive());