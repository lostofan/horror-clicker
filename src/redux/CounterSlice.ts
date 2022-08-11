import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionBuy, ActionChangeCount, 
    ActionCoordinates, 
    ActionKillerType, ActionWeaponType, 
    DrawAction } from "../types/actionTypes";
import { CounterStateType, Dots } from "../types/stateTypes";
import { RootState } from "./store";
import { v4 as uuid } from 'uuid';

class Powerup {
    multiplier: number;
    value: number;
    price: number;
    constructor(multiplier:number, value:number, price:number) {
        this.multiplier = multiplier;
        this.value = value;
        this.price = price;
    }
}
const   billy = new Powerup(0.1, 0, 50),
        ghostface = new Powerup(0.2, 0, 100),
        pennywise = new Powerup(0.3, 0, 150),
        pinhead = new Powerup(0.4, 0, 200),
        chucky = new Powerup(0.5, 0, 250),
        jason = new Powerup(0.75, 0, 300),
        freddy = new Powerup(1, 0, 400),
        myers = new Powerup(1.25, 0, 500),
        leatherface = new Powerup(1.5, 0, 600),
        baloon = new Powerup(1.1, 0, 15),
        mirror = new Powerup(1.2, 0, 40),
        scythe = new Powerup(1.3, 0, 100),
        axe = new Powerup(1.5, 0, 150),
        chainsaw = new Powerup(1.7, 0, 200),
        knife = new Powerup(2, 0, 250),
        machete = new Powerup(2.25, 0, 300),
        glove = new Powerup(2.5, 0, 350),
        hatchet = new Powerup(3, 0, 450);



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
            billy,
            ghostface,
            pennywise,
            pinhead,
            chucky,
            jason,
            freddy,
            myers,
            leatherface,
    }, weapons: {
        baloon,
        mirror,
        scythe,
        axe,
        chainsaw,
        knife,
        machete,
        glove,
        hatchet
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
            console.log(state.items.killers.billys);
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


export const {loadGame, addCounter, addKiller, addWeapon, buyItem, drawKiller, drawBlood} = counterSlice.actions;
export default counterSlice.reducer;