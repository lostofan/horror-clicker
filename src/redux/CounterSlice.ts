import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type CounterStateType = {
    value: number;
    clickMultiplier: number;
    items: {
        [key:string]: {
            multiplier: number;
            value: number;
        }
    }
}

const initialState:CounterStateType = {
    value: 0,
    clickMultiplier: 1,
    items: {
       jason: {
        multiplier: 1,
        value: 0
       },
       freddy: {
        multiplier: 0.5,
        value: 0
       },
       mike: {
        multiplier: 0.20,
        value: 0
       }
    }
    
}

type ActionPickType = {
    name: string;
}
type ActionAddCount = {
    value: number;
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addCounter: (state, action:PayloadAction<ActionAddCount>) => {
            state.value += action.payload.value;
        },
        addKiller: (state, action:PayloadAction<ActionPickType>) => {

            state.items[action.payload.name].value += 1;
            console.log(state.items[action.payload.name].value);
        },
        addWeapon: (state, action:PayloadAction<ActionAddCount>) => {
            state.clickMultiplier *= action.payload.value;
        }
    }
});


export const selectCount = (state: RootState) => state.counter.value;


export const {addCounter, addKiller, addWeapon} = counterSlice.actions;
export default counterSlice.reducer;