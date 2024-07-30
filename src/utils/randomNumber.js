export const randomNumber = (min, max) => {
    const number = Math.random() * (max - min) + min;
    return parseFloat(number.toFixed(2));
}