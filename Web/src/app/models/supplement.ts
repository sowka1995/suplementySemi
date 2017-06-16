import { Opinion } from './opinion';

export class Supplement {
    id: string;
    name: string;
    category: string;
    producer: string;
    description: string;
    price: number;
    weight?: string;
    amount: number;
    image: string;
    imageSource: any;
    rate?: number;
    opinions?: Array<Opinion>;
}