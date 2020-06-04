function calculateBill(subtotal, tax) {
  console.log('calculate bill');
  const total = subtotal * tax;
  return total;
}

const myTotal = calculateBill(100, 0.875);

function sayMyName(name) {
  console.log(name.toUpperCase());
}
