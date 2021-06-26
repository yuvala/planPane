
export interface IPlan {
    planID: string;
    cards: ICard;
}


export interface ICard {
    imgUrl: string;
    tools: any;
}

export class Plan implements IPlan {
    planID: string;
    cards: ICard;
    constructor() {
        this.planID = Plan.generateID();
        this.cards
    }

    static generateID(): string {
        return '5423';
    }

}


