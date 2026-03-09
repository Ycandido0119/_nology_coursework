let petName = "Luna";
let petEnergyLevel = 70;
let petHungerLevel = 50;
let petHappinessLevel = 60;

const feedPet = (amount) => {
    if (petHungerLevel < 10) {
        console.log(`${petName} is full and doesn't want to eat.`);
    } else {
        petHungerLevel = petHungerLevel - amount;
        petEnergyLevel = petEnergyLevel + amount;
    }
    return petHungerLevel;
    
}

const playWithPet = (amount) => {
    if (petEnergyLevel > 20) {
        petEnergyLevel = petEnergyLevel - amount;
        petHappinessLevel = petHappinessLevel + amount;
        petHungerLevel = petHungerLevel + amount;
    }
    else {
        console.log(`${petName} is too tired to play.`);
    }
    return petHappinessLevel;
}

const restPet = (amount) => {
    if (petEnergyLevel < 80) {
        petEnergyLevel = petEnergyLevel + amount * 2;
        petHungerLevel = petHungerLevel + amount/2;
    }
    else {
        console.log(`${petName} is already well rested.`);
    }
    return petEnergyLevel;

}

const checkPetStatus = () => {
    console.log(`${petName}'s status is as follows: her energy level is ${petEnergyLevel}, her hunger level is ${petHungerLevel} and her happiness level is ${petHappinessLevel}`);
    return checkPetStatus;
}

console.log(checkPetStatus());
console.log(feedPet(10));
console.log(playWithPet(10));
console.log(playWithPet(10));
console.log(restPet(10));
console.log(checkPetStatus());