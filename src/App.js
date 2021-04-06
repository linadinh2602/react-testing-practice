export const add = (num1, num2) => {
  return num1 + num2;
}

export const total = (shipping, subTotal) => {
  return '$' + add(shipping, subTotal)
}