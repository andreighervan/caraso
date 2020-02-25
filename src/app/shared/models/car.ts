export interface Car {
    id: number;
    make: string;
    year: number;
    mileage: number;
    model: string;
    transmision: string;
    horserPower: number;
    interiorColor: string;
    exteriorColor: string;
    price: string;
    pasteALink: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    notes: string;
}

export interface CarCombo{
    value: string;
    viewValue: string;
}

export interface CarFilter{
    make: string;
    model: string;
}
