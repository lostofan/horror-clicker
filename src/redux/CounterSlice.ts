import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type CounterStateType = {
    value: number;
    clickMultiplier: number;
    killersArray: string[];
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

const initialState:CounterStateType = {
    value: 1500,
    clickMultiplier: 1,
    killersArray: [],
    items: {
        killers: {
            jigsaw: {
                multiplier: 0.1,
                value: 0,
                price: 50,
            },
            ghostface: {
                multiplier: 0.2,
                value: 0,
                price: 100,
            },
            pennywise: {
                multiplier: 0.3,
                value: 0,
                price: 150,
            },
            pinhead: {
                multiplier: 0.4,
             value: 0,
             price: 200,
            },
            chucky: {
                multiplier: 0.5,
                value: 0,
                price: 250,
            },
            jason: {
                multiplier: 0.75,
                value: 0,
                price: 300,
               },
               freddy: {
                multiplier: 1,
                value: 0,
                price: 400,
               },
               myers: {
                multiplier: 1.25,
                value: 0,
                price: 500,
               },
               leatherface: {
                multiplier: 1.5,
                value: 0,
                price: 600,
               }
    }, weapons: {
        baloon: {
            multiplier: 0.1,
            value: 0,
            price: 15,
        },
        mirror: {
            multiplier: 0.2,
            value: 0,
            price: 40,
        },
        scytche: {
            multiplier: 0.3,
            value: 0,
            price: 100,
        },
        axe: {
            multiplier: 0.5,
            value: 0,
            price: 150,
        },
        chainsaw: {
            multiplier: 0.7,
            value: 0,
            price: 200,
        },
        knife: {
            multiplier: 1,
            value: 0,
            price: 250,
        },
        machete: {
            multiplier: 1.25,
            value: 0,
            price: 300,
        },
        glove: {
            multiplier: 1.5,
            value: 0,
            price: 350,
        },
        hatchet: {
            multiplier: 2,
            value: 0,
            price: 450,
        }
    }

    }
    
}

type ActionPickType = {
    name: string;
}
type ActionChangeCount = {
    value: number;
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        loadGame: (state) => {

        },
        addCounter: (state, action:PayloadAction<ActionChangeCount>) => {
            state.value += action.payload.value;
            localStorage.setItem('counter', state.value.toFixed().toString());
            console.log(localStorage.getItem('counter'));
        },
        addKiller: (state, action:PayloadAction<ActionPickType>) => {
            state.items.killers[action.payload.name].value += 1;
        },
        addWeapon: (state, action:PayloadAction<ActionChangeCount>) => {
            state.clickMultiplier *= action.payload.value;
        },
        buyItem: (state, action:PayloadAction<ActionChangeCount>) => {
            state.value -= action.payload.value;
        },
        drawKiller: (state, action:PayloadAction<ActionPickType>) => {
            state.killersArray.push(action.payload.name);
            localStorage.setItem(
                'killers', JSON.stringify(state.killersArray)
            );
        }
    }
});


export const selectCount = (state: RootState) => state.counter.value;


export const {loadGame, addCounter, addKiller, addWeapon, buyItem, drawKiller} = counterSlice.actions;
export default counterSlice.reducer;