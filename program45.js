function store_car_info(manufacturer, model) {
    var kwargs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        kwargs[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < kwargs.length; i += 2) {
        var key = String(kwargs[i]);
        var value = kwargs[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Calling the function with required information and additional name-value pairs
var carInfo = store_car_info("Toyota", "Corolla", "color", "blue", "year", 2022);
// Printing the object returned by the function
console.log(carInfo);
