export type CounterStateType = {
    value: number;
    clickMultiplier: number;
    killersMultiplier: number;
    killerInterval: ReturnType<typeof setInterval> | null;
    killersArray: string[];
    loaded: boolean;
    animArray: Dots[];
    items: {
        killers: {
            [key:string]: {
            multiplier: number;
            value: number;
            price: number;
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

export type Dots = {
    id: string;
    coords: {
        x: number;
         y: number
    }
}