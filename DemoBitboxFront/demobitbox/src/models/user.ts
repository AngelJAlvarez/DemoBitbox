import { Role } from './role';
export class User {
    username: string;
    name?: string;
    roles?: Role[];
    id?: number;
    password?: string;
}
