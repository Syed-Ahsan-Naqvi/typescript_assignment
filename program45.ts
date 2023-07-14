function store_car_info(manufacturer: string, model: string, ...kwargs: any[]): object {
    let carInfo: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let i = 0; i < kwargs.length; i += 2) {
        let key: string = String(kwargs[i]);
        let value: any = kwargs[i + 1];
        carInfo[key] = value;
    }

    return carInfo;
}


let carInfo: object = store_car_info("Toyota", "Corolla", "color", "blue", "year", 2022);


console.log(carInfo);