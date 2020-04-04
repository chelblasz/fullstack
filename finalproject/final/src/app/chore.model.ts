import {Injectable} from '@angular/core';

@Injectable()

export class Chores {
    public id: string;
    public location: string;
    public task: string;
    
    constructor(id: string, location: string, task: string) {
            this.id = id;
            this.location = location;
            this.task = task;
        }
}


 // public chemical: string,
    // public description: string