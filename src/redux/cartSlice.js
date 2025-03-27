// filepath: /Users/shahadnazar/Documents/GitHub/-Lemonade-Stand/src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    profit: 0, // Tilføj profit til initialState
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.profit += 5; // Opdater profit ved tilføjelse til kurv
        },
        removeFromCart: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                state.profit -= item.quantity * 5; // Opdater profit ved fjernelse fra kurv
                state.items = state.items.filter(i => i.id !== action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.profit += 5; // Opdater profit ved øgning af mængde
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    state.profit -= 5; // Opdater profit ved formindskelse af mængde
                } else {
                    state.items = state.items.filter(i => i.id !== action.payload);
                    state.profit -= 5; // Opdater profit ved fjernelse fra kurv
                }
            }
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectProfit = (state) => state.cart.profit; // Tilføj selectProfit selector
export default cartSlice.reducer;