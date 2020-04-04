import {Injectable} from '@angular/core';

@Injectable()

export class Chores {
    constructor(
    public id: string,
    public location: string,
    public task: string,
    public chemical: string,
    public description: string
    ) {}
}
