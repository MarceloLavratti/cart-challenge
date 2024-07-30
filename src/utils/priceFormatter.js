export const formattedPriceBRL = (price) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
export const formattedTotal = (price, quantity) => {
    return (price * quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}