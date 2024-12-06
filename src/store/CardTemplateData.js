import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:null
}

const CardTemplateData = createSlice({
    name: "card",
    initialState,
    reducers:{
        tempData: (state, action) =>{
            state.data = action.payload;
        }
    }
})

export const { tempData } = CardTemplateData.actions;
export default CardTemplateData.reducer; 