import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cartState : false,
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    cartToatlAmount: 0,
    cartTotalQuantity: 0,
};

const CartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        // Cart open
        setOpenCart : (state, action) => {
            state.cartState = action.payload.cartState;
        },
        // Cart close
        setCloseCart : (state, action) => {
            state.cartState = action.payload.cartState;
        },
        // Add item to cart
        setAddItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(itemIndex >= 0)
            {
                state.cartItems[itemIndex].cartQuantity += 1;

                toast.success("Item Quantity Increased");
            }
            else
            {
                const toBeAdded = {...action.payload, cartQuantity: 1};
                state.cartItems.push(toBeAdded);

                toast.success(`${action.payload.title} added to the cart`);
            }

            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        // Remove item from cart
        setRemoveItemFromCart: (state, action) => {
            const itemsLeft = state.cartItems.filter((item) => item.id !== action.payload.id);

            state.cartItems = itemsLeft;
            localStorage.setItem("cart", JSON.stringify(state.cartItems));

            toast.success(`${action.payload.title} removed from the cart`)
        }, 
        // Increase Item Quantity
        setIncreaseItemQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(itemIndex >= 0)
            {
                state.cartItems[itemIndex].cartQuantity += 1;

                toast.success("Item Quantity Increased");
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        }, 
        // Decrease Item Quantity
        setDecreaseItemQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(state.cartItems[itemIndex].cartQuantity > 1)
            {
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.success("Item Quantity Decreased");
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        // Clear the cart
        setClearCartItems: (state, action) => {
            state.cartItems = [];
            toast.success("Cart is cleared");
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        // Get the Total Cart Amount
        setGetTotals: (state, action) => {
            let {totalAmount, totalQuantity} = state.cartItems.reduce((cartTotal, cartItem) => {
                const {price, cartQuantity} = cartItem;
                const totalPrice = price * cartQuantity;

                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQuantity += cartQuantity;

                return cartTotal;
            }, {
                totalAmount: 0,
                totalQuantity: 0,
            });

            state.cartToatlAmount = totalAmount;
            state.cartTotalQuantity = totalQuantity;
        },
    },
});

export const {
    setOpenCart,
    setCloseCart,
    setAddItemToCart,
    setRemoveItemFromCart,
    setIncreaseItemQuantity,
    setDecreaseItemQuantity,
    setClearCartItems,
    setGetTotals
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQuantity = (state) => state.cart.cartTotalQuantity;


export default CartSlice.reducer;