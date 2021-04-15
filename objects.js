var carModels = {
    model: "Hatchback",
    brand: "Honda",
    manufacturingYear: 2007,
};

// printing object
console.log(carModels);

// printing elements with keys
console.log(carModels["model"]);
console.log(carModels["brand"]);
console.log(carModels["manufacturingYear"]);

// printing object with for loop
for (keys in carModels) {
    console.log(keys + " --> " + carModels[keys]);
}

// updating manufacturing year
carModels["manufacturingYear"] = 1997;
console.log(carModels);