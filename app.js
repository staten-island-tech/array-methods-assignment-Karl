const animals = [
    {
        speciesName: "Monkey",
        scientificName: "Bleb bleb",
        location: "Land",
        lifeSpan: 25,
        ancient: true,
        status: "endangered",
    },
    {
        speciesName: "Blue Whale",
        scientificName: "bleb bleb",
        location: "Ocean",
        lifeSpan: 85,
        ancient: true,
        status: "endangered",
    },
    {
        speciesName: "Seal",
        scientificName: "bleb bleb",
        location: "Ocean",
        lifeSpan: 25,
        ancient: true,
        status: "Least Concern",
    },
    {
        speciesName: "Blue Jay",
        scientificName: "bleb bleb",
        location: "Forest",
        lifeSpan: 25,
        ancient: true,
        status: "Least Concern",
    },
    
]

animals.forEach((el)=> console.log(el.speciesName));

const test = animals.filter((animals)=> "Ocean");