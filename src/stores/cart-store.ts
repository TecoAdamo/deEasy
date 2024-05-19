import { create } from 'zustand'
import { ProductProps } from '../utils/products'

import * as cartInMemory from '../stores/helpers/cart-in-memory'

export type ProductCartProps = ProductProps & {
    quantity: number
    size: string
    price: number
}

type StateProps = {
    products: ProductCartProps[]
    add: (product: ProductCartProps) => void
    remove: (productId: string) => void
    clearCart: () => void
}

export const useCartStore = create<StateProps>((set) => ({
    products: [],

    add: (product: ProductCartProps) =>
        set((state) => ({
            products: cartInMemory.add(state.products, product),
        })),

    remove: (productId: string) =>
        set((state) => ({
            products: cartInMemory.remove(state.products, productId),
        })),
    clearCart: () => set({ products: [] }),
}))
