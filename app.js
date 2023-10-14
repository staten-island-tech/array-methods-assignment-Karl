const animals = [
    {
        speciesName: "Monkey",
        scientificName: "(Cercopithecidae)",
        location: "Land",
        abilities: ["Climb", "Swing",],
        status: "Endangered",
    },
    {
        speciesName: "Blue Whale",
        scientificName: "(Balaenoptera musculus)",
        location: "Ocean",
        abilities: ["Dive", "Roll",],
        status: "Endangered",
    },
    {
        speciesName: "Seal",
        scientificName: "(Pinnipedia)",
        location: "Ocean",
        abilities: ["Swim", "Wriggle",],
        status: "Least Concern",
    },
    {
        speciesName: "Blue Jay",
        scientificName: "(Cyanocitta cristata)",
        location: "Forest",
        abilities: ["Fly", "Peck",],
        status: "Least Concern",
    },
    
]

animals.forEach((name) => console.log(name.speciesName, name.scientificName));
animals.forEach((name)=> name.abilities.forEach((movement) => console.log(movement)));

const Endangered = animals.filter((name) => name.status === "Endangered");
console.log(Endangered);