import { User } from 'src/models/User';
import { Creator } from './creator';
import { Item } from './item';

export class DeactivatedItem {
    item: Item;
    user: Creator;
    reasonForDeactivation: string;
}

