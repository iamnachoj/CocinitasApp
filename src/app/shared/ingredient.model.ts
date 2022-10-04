export class Ingredient {
    public name : string;
    public amount : any;
    constructor(name: string, amount: any) {
        this.name = name
        this.amount = amount
    }
}

// this is the same:
// export class Ingredient {
//    constructor(public name: string, public amount: number) {}
// }
