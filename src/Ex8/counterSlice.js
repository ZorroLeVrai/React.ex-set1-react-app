import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {//déclaration des reducer functions
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    init: (state) => { state.value = 0; }
  }
});
// Des action creators sont générées pour chaque reducer function
export const { increment, decrement, init } = counterSlice.actions;
export default counterSlice.reducer;