import {createSlice} from "@reduxjs/toolkit";

const initialState={
    value: [],
}

export const todoSlice=createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToList: (state,action)=>{
            state.value=[...state.value,action.payload];
        },
        removeFromList: (state,action)=>{
            state.value=state.value.filter(item=>item !== action.payload);
        },
        updateFromList: (state,action)=>{
            const newTask=prompt("Enter new task");

            state.value=state.value.map((item)=>{
                return item == action.payload ? newTask : item;
            });
        }
    },
});

export const {addToList,removeFromList,updateFromList}=todoSlice.actions;

export const selectTaskList=(state)=>state.todo.value;

export default todoSlice.reducer;