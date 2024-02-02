import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMobiles = createAsyncThunk("mobiles/fetchMobiles", async () => {
    try {
        const res = await axios.get("http://localhost:5000/mobiles")
        return res.data
    } catch (error) {
        console.log(error);
    }
})

export const addNewPhone = createAsyncThunk("mobiles/addNewPhone", async (newPhone) => {
    try {
        const res = await axios.post("http://localhost:5000/mobiles", newPhone);
        return res.data
    } catch (error) {
        console.log(error)
    }
})

export const deletePhone = createAsyncThunk("mobiles/deletePhone", async (id) => {
    try {
        await axios.delete(`http://localhost:5000/mobiles/${id}`);
        return id;
    } catch (error) {
        console.log(error)
        throw error;
    }
});


const mobileSlice = createSlice({
    name: "mobiles",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        // reducer basically used for synchronous actions
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMobiles.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchMobiles.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMobiles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addNewPhone.fulfilled, (state, action) => {
                state.data = [...state.data, action.payload]
            }) 
            .addCase(deletePhone.fulfilled, (state, action) => {
                state.data = state.data.filter((phone) => phone._id !== action.payload)
            })
    }
})

export const { actions: mobileActions, reducer: mobileReducer } = mobileSlice