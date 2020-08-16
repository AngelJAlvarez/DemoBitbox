import { Supplier } from './supplier';
import { Creator } from './creator';
import { States } from './enum';
import { PriceReduction } from './priceReduction';

export class Item {
    id: number;
    code: number;
    description: string;
    state: States;
    price: number;
    creationDate: Date;
    creator: Creator;
    reasonForDeactivation: string;
    suppliers: Supplier[];
    priceReduction: PriceReduction[];
}
