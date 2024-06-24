import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: 0,
  }


 const counterSlice = createSlice({
    name: 'couter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value = state.value +1
           
        },
        decrement:(state)=>{
            if (state.value>0)
                { state.value -=1 } 
            
        },

        increaseByAmount:(state,action)=>{
state.value = state.value+action.payload
        }
    }
})

export default counterSlice.reducer;
export const { increment, decrement,increaseByAmount } = counterSlice.actions;
