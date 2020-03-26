import {Injectable} from '@angular/core';

@Injectable()

export class ChoreList {
    constructor(
        public id: string,
        public name: string,
        public children: ChoreList[]
    ) {}
}