import { Opinion } from './opinion';

export class Supplement {
    id: string;
    name: string;
    category: string;
    producer: string;
    description: string;
    price: number;
    weight: number;
    amount: number;
    image: string;
    rate?: Array<number>;
    opinions?: Array<Opinion>;
}