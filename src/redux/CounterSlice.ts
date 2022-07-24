import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type CounterStateType = {
    value: number;
    items: {
        [key:string]: number;
    }
}

const initialState:CounterStateType = {
    value: 0,
    items: {
       jasons: 0 
    }
    
}

type ActionPickType = {
    name: string;
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addCounter: (state) => {
            state.value += 1;
        },
        addSmth: (state, action:PayloadAction<ActionPickType>) => {

            state.items[action.payload.name] += 1;
            console.log(state.items.jasons);
        }
    }
});


export const selectCount = (state: RootState) => state.counter.value;


export const {addCounter, addSmth} = counterSlice.actions;
export default counterSlice.reducer;