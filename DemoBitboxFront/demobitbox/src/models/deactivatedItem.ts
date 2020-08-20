import { User } from 'src/models/user';
import { Creator } from './creator';
import { Item } from './item';

export class DeactivatedItem {
    item: Item;
    user: Creator;
    reasonForDeactivation: string;
}

