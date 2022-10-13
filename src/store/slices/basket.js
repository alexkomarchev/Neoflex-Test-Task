import {createSlice} from '@reduxjs/toolkit'
import product from "../../components/Product/Product";

const initialState = {
    product: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct(state, action) {
            console.log('1')
            const {id} = action.payload

            const prod = state.product.find(el => el.id === id)

            if (prod) {
                state.product.map(el => {
                    if (el === prod) {
                        el.count += 1
                    }
                })
            } else {
                state.product.push({...action.payload, count: 1})
            }
        },
        removeProduct(state, action) {
            state.product.map(el => {
                if (el.id === action.payload) {
                    if (el.count > 1) {
                        el.count -= 1
                    } else {
                        console.log(1)
                        state.product = state.product.filter(el => el.id == action.payload.id)
                    }
                }
            })
        }

    },
})

export const {addProduct, removeProduct} = basketSlice.actions

export default basketSlice.reducer