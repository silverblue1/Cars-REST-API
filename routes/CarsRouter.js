const router = require("express").Router();

const cars = require("../db/Cars.json");

// TODO: /cars/paginate/:count         -> pagination

// TODO: CREATE, UPDATE, DELETE



// Route: "/cars"
// Returns: []cars
// Description: Returns all cars in DB

router.get("/", (req, res) => {
    res.send(cars);
});


// Route: "/cars/:carID"
// Returns: car
// Description: Returns the car that matches the :carId parameter
// Example: "/cars/23"

router.get("/:carId", (req, res) => {
    const carId = req.params.carId;
    const carsById = cars.filter(car => {
        return JSON.stringify(car.id) === carId;
    });
    res.json(carsById);
});


// Route: "/make/:make"
// Returns: [] cars
// Description: Returns all cars that matches the :make parameter
// Example: "/make/Toyota"

router.get("/make/:make", (req, res) => {
    const make = req.params.make;
    const carsByMake = cars.filter(car => {
        return car.make === make;
    });
    res.json(carsByMake);
});


// Route: "/year/:year"
// Returns: [] cars
// Description: Returns all cars that matches the :year parameter
// Example: "/year/2006"

router.get("/year/:year", (req, res) => {
    const year = req.params.year;
    const carsByYear = cars.filter(car => {
        return JSON.stringify(car.year) === year;
    });
    res.json(carsByYear);
});

// Route: "/color/:color"
// Returns: [] cars
// Description: Returns all cars that matches the :color parameter
// Example: "/color/Green"

router.get("/color/:color", (req, res) => {
    const color = req.params.color;
    const carsByColor = cars.filter(car => {
        return car.color === color;
    })
    res.json(carsByColor);
});


// Route: "/model/:model"
// Returns: [] cars
// Description: Returns all cars that matches the :model parameter
// Example: "/model/Corolla"

router.get("/model/:model", (req, res) => {
    const model = req.params.model;
    const carsByModel = cars.filter(car => {
        return car.model === model;
    })
    res.json(carsByModel);
});


// Route: "/stock/outofstock"
// Returns: [] cars
// Description: Returns all cars that are out of stock

router.get("/stock/outofstock", (req, res) => {
    const carsOutOfStock = cars.filter(car => {
        return JSON.stringify(car.stock) === "0";
    });
    res.json(carsOutOfStock);
});

// Route: "/available/54"
// Returns: car
// Description: Returns if the car with particular id is in stock
// Example: "/avaiable/34"

router.get("/available/:carId", (req, res) => {
    const carId = req.params.carId;
    const isAvailable = cars.find(car => (JSON.stringify(car.id) === carId)).stock > 0 ? true : false;
    res.json(isAvailable);
});

// Route: "/price/:start-:end"
// Returns: [] cars
// Description: Returns all cars that costs between :start and :end
// Example: "/price/34000-78000"

router.get("/price/:start-:end", (req, res) => {
    const startPrice = parseFloat(req.params.start);
    const endPrice = parseFloat(req.params.end);

    const carsInPriceRange = cars.filter(car => {
        const carPrice = parseFloat(car.price.substring(1));
        return carPrice >= startPrice && carPrice <= endPrice;
    });

    res.json(carsInPriceRange);
});

module.exports = router;