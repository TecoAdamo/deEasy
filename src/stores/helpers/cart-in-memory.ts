import { ProductCartProps } from '../cart-store'

export const add = (
    products: ProductCartProps[],
    product: ProductCartProps
) => {
    const productIndex = products.findIndex(
        (p) => p.id === product.id && p.size === product.size
    )

    if (productIndex > -1) {
        const updatedProducts = [...products]
        updatedProducts[productIndex].quantity += 1
        return updatedProducts
    } else {
        return [...products, { ...product, quantity: 1 }]
    }
}

export const remove = (
    product: ProductCartProps[],
    productRemoveId: string
) => {
    const updatedProducts = product.map((product) =>
        product.id === productRemoveId
            ? {
                  ...product,
                  quantity: product.quantity > 1 ? product.quantity - 1 : 0,
              }
            : product
    )
    return updatedProducts.filter((product) => product.quantity > 0)
}
