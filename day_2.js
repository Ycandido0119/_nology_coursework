const holidayDestinations = [
 { locationName: "Maldives", vacationType: "beach", budget: 1200 },
 { locationName: "Tokyo", vacationType: "city", budget: 800 },
 { locationName: "Swiss Alps", vacationType: "nature", budget: 1500 },
 { locationName: "Bali", vacationType: "beach", budget: 900 },
 { locationName: "New York", vacationType: "city", budget: 1100 }

];

const formatDestination = (destination) => {
    let tag;

    if (destination.vacationType === "beach") {
        tag = "[Beach Getaway]";
    } else if (destination.vacationType === "city") {
        tag = "[City Break]";
    } else if (destination.vacationType === "nature") {
        tag = "[Nature Retreat]";
    } else {
        tag = `[${destination.vacationType}]`;
    }

    return `${tag} ${destination.locationName} (£${destination.budget})`;
};

const formattedBrochures = holidayDestinations.map(formatDestination)

console.log(formattedBrochures);
