export interface ICar {
    id: number;
    carName?: string;
    isNew?: boolean;
    price?: number;
    imgUrl?: string;
    combustible?: string;
    consumption?: number;
    seatsNo?: number;
    carType?: string;
}

export function convertSnaps<T>(snaps) {
    return <T[]>snaps.map(snap => {
        return {
            id: snap.payload.doc.id,
            ...snap.payload.doc.data()
        };

    });
}