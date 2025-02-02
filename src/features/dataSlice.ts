import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductSalesData } from '@services/productApi';
import data from '@/types/productTypes.ts';

export const fetchProductData = createAsyncThunk('data/fetchProductData', async () => {
    const response = await fetchProductSalesData();
    return response;
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        productData: [] as data[],
        status: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(
                fetchProductData.fulfilled,
                (state: { status: string; productData: data[] }, action) => {
                    state.status = 'succeeded';
                    state.productData = action.payload as data[];
                }
            )
            .addCase(fetchProductData.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export default dataSlice.reducer;