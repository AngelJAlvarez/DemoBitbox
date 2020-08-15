import { Creator } from './creator';
import { States } from './enum';
export class Item {
    id: number;
    code: number;
    description: string;
    state: States;
    price: number;
    creationDate: Date;
    creator: Creator;
}

