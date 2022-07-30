export type CounterStateType = {
    value: number;
    clickMultiplier: number;
    killersMultiplier: number;
    killerInterval: ReturnType<typeof setInterval> | null;
    killersArray: string[];
    loaded: boolean;
    animArray: number[][];
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