export interface InventoryModel {
    id?: string;
    type?: TYPE;
    price?: number;
    name?: string;
    productionDate?: string;
}

export enum TYPE {
    TRUCK = 'TRUCK',
    CAR = 'CAR',
    BUS = 'BUS'
}
