import { IUser } from 'app/core/user/user.model';

export interface IBook {
    id?: number;
    name?: string;
    description?: string;
    user?: IUser;
}

export class Book implements IBook {
    constructor(public id?: number, public name?: string, public description?: string, public user?: IUser) {}
}
