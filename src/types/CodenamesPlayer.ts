export interface CodenamesPlayer {
    uuid: string;
    id: string;
    name: string;
    targetWords: number[];
    assassinWords: number[];
}

export class Player implements CodenamesPlayer {
    uuid: string;
    id: string;
    name: string;
    targetWords: number[];
    assassinWords: number[];

    constructor() {
        this.uuid = "";
        this.id = "";
        this.name = "";
        this.targetWords = [];
        this.assassinWords = [];
    }
}
