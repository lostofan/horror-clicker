export type Dots = {
    id: string;
    coords: {
        x: number;
         y: number
    }
}

export enum KillerStatus {
    Working,
    UnWorking
}

export type CounterStateType = {
    value: number;
    clickMultiplier: number;
    killersArray: string[];
    loaded: boolean;
    animArray: Dots[];
    items: {
        killers: {
            [key:string]: {
            multiplier: number;
            value: number;
            price: number;
            status: KillerStatus;
        }
        },
        weapons: {
            [key:string]: {
                multiplier: number;
                value: number;
                price: number;
            }
        }
        
    }
}