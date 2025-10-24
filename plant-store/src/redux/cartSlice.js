import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // {id, name, price, quantity, thumbnail}
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (!item) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity--;
        state.totalQuantity--;
        state.totalPrice -= item.price;
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(i => i.id === action.payload);
      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
