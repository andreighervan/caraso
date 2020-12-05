export const CARS = {
    1: {
        id: 1,
        carName: 'Audi A7',
        sNew: true,
        price: 50000,
        imgUrl: './assets/img/cars/audi_a7.jpeg',
        combustible: 'Petrol',
        consumption: 7,
        seatsNo: 4,
        carType: 'Hatchback'
    },
    2: {
        id: 2,
        carName: 'Audi Q8',
        isNew: false,
        price: 73000,
        imgUrl: './assets/img/cars/audi_q8.jpg',
        combustible: 'Diesel',
        consumption: 9,
        seatsNo: 5,
        carType: 'Break'
    },
    3: {
        id: 3,
        carName: 'Mercedes AMG',
        isNew: true,
        price: 154000,
        imgUrl: './assets/img/cars/hummer.jpg',
        combustible: 'Petrol',
        consumption: 10,
        seatsNo: 5,
        carType: 'Hatchback'
    },
    4: {
        id: 4,
        carName: 'Mercedes CLA',
        isNew: false,
        price: 45000,
        imgUrl: './assets/img/cars/mercedes_cla.jpg',
        combustible: 'Petrol',
        consumption: 7,
        seatsNo: 4,
        carType: 'Hatchback'
    },
    5: {
        id: 5,
        carName: 'Reanault Captur',
        isNew: false,
        price: 87000,
        imgUrl: './assets/img/cars/renault_captur.jpg',
        combustible: 'Diesel',
        consumption: 9,
        seatsNo: 4,
        carType: 'Break'
    },
    6: {
        id: 6,
        carName: 'Seat Ibiza',
        isNew: true,
        price: 14000,
        imgUrl: './assets/img/cars/seat_ibitza.jpg',
        combustible: 'Petrol',
        consumption: 10,
        seatsNo: 5,
        carType: 'Hatchback'
    },
    7: {
        id: 7,
        carName: 'Tesla Model S',
        isNew: true,
        price: 50000,
        imgUrl: './assets/img/cars/tesla_model_s.jpg',
        combustible: 'Petrol',
        consumption: 7,
        seatsNo: 4,
        carType: 'Break'
    },
    8: {
        id: 8,
        carName: 'Volvo V60',
        isNew: false,
        price: 73000,
        imgUrl: './assets/img/cars/volvo_v60.jpg',
        combustible: 'Diesel',
        consumption: 9,
        seatsNo: 5,
        carType: 'Break'
    },
    9: {
        id: 9,
        carName: 'Lamborghini',
        isNew: true,
        price: 124000,
        imgUrl: './assets/img/cars/lamborghini.jpg',
        combustible: 'Petrol',
        consumption: 10,
        seatsNo: 4,
        carType: 'Hatchback'
    }
};


export function findCarById(carId: number) {
    return CARS[carId];
}

