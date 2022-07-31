import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionBuy, ActionChangeCount, 
    ActionCoordinates, 
    ActionKillerType, ActionWeaponType, 
    DrawAction } from "../types/actionTypes";
import { CounterStateType, Dots } from "../types/stateTypes";
import { RootState } from "./store";
import { v4 as uuid } from 'uuid';



const initialState:CounterStateType = {
    value: 0,
    killerInterval: null,
    clickMultiplier: 1,
    killersMultiplier: 0,
    killersArray: [],
    animArray: [],
    loaded: false,
    items: {
        killers: {
            billy: {
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
            multiplier: 1.1,
            value: 0,
            price: 15,
        },
        mirror: {
            multiplier: 1.2,
            value: 0,
            price: 40,
        },
        scythe: {
            multiplier: 1.3,
            value: 0,
            price: 100,
        },
        axe: {
            multiplier: 1.5,
            value: 0,
            price: 150,
        },
        chainsaw: {
            multiplier: 1.7,
            value: 0,
            price: 200,
        },
        knife: {
            multiplier: 2,
            value: 0,
            price: 250,
        },
        machete: {
            multiplier: 2.25,
            value: 0,
            price: 300,
        },
        glove: {
            multiplier: 2.5,
            value: 0,
            price: 350,
        },
        hatchet: {
            multiplier: 3,
            value: 0,
            price: 450,
        }
    }

    }
    
}



const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        loadGame: (state) => {
            state.value = Number(localStorage.getItem('counter'));

            state.killersArray = JSON.parse(localStorage.getItem('killers') || "[]");

            const killersObj = state.items.killers;
            const weaponsObj = state.items.weapons;
            for(let key in killersObj) {
                killersObj[key] = JSON.parse(localStorage.getItem(key.toString()) || JSON.stringify(killersObj[key]));
            }

            for(let key in weaponsObj) {
                weaponsObj[key] = JSON.parse(localStorage.getItem(key.toString()) || JSON.stringify(weaponsObj[key]));
            }

            if (localStorage.getItem("clickMult") === null) {
                state.clickMultiplier = 1;
            } else {state.clickMultiplier = Number(localStorage.getItem("clickMult"))}

            if (localStorage.getItem("killersMult") === null) {
                state.killersMultiplier = 0;
            } else {state.killersMultiplier = Number(localStorage.getItem("killersMult"))}
            state.loaded = true;


            
        },
        addCounter: (state, action:PayloadAction<ActionChangeCount>) => {
            if (action.payload.isAsync) {
                state.value += state.killersMultiplier;
            } else {
                state.value += action.payload.value * state.clickMultiplier;
            }
            
            localStorage.setItem('counter', state.value.toFixed().toString());
        },
        addKiller: (state, action:PayloadAction<ActionKillerType>) => {
            state.items.killers[action.payload.name].value += 1;
            state.items.killers[action.payload.name].price *= 1.2;
            state.killersMultiplier += action.payload.multiplier;

            localStorage.setItem("killersMult", state.killersMultiplier.toString());
            localStorage.setItem( 
                action.payload.name, JSON.stringify(state.items.killers[action.payload.name])
                );
        },
        addWeapon: (state, action:PayloadAction<ActionWeaponType>) => {
            /* логика */
            state.items.weapons[action.payload.name].value += 1;
            state.items.weapons[action.payload.name].price *= 1.2;
            state.clickMultiplier *= action.payload.value;
            /* запись данных */
            localStorage.setItem("clickMult", state.clickMultiplier.toString());
            localStorage.setItem( 
                action.payload.name, JSON.stringify(state.items.weapons[action.payload.name])
                );
        },
        buyItem: (state, action:PayloadAction<ActionBuy>) => {
            state.value -= action.payload.value;
            localStorage.setItem('counter', state.value.toFixed().toString());
        },
        drawKiller: (state, action:PayloadAction<DrawAction>) => {
            state.killersArray.push(action.payload.name);
            localStorage.setItem(
                'killers', JSON.stringify(state.killersArray)
            );
        },
        resetGame: () => {
            localStorage.clear();
            document.location.reload();
        },
        drawBlood: (state, action:PayloadAction<ActionCoordinates>) => {
            if (state.animArray.length >= 20) {
                state.animArray = state.animArray.slice(1);
            }
            const {x,y} = action.payload;
            const newArray = [...state.animArray, createDot([x,y])]
                state.animArray = newArray;
        }
    }
});

const createDot = ([x,y]: [number, number]):Dots => {

    return {
        id: uuid(),
        coords: {x,y}
    }
}


export const selectCount = (state: RootState) => state.counter.value;


export const {loadGame, addCounter, addKiller, addWeapon, buyItem, drawKiller, resetGame, drawBlood} = counterSlice.actions;
export default counterSlice.reducer;