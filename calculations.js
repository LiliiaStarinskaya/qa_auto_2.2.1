function increaseBalance(x, y) {
  x += y;
  console.log(x);
  return x;
}

function decreaseBalance(x, y) {
  x -= y;
  console.log(x);
  return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  console.log(x);
  return x;
}

function getRestAfterDivision(x, y) {
  x %= y;
  console.log(x);
  return x;
}

increaseBalance(3000, 700);
decreaseBalance(3000, 700);
divideBalanceByAccounts(3000, 2);
getRestAfterDivision(7000, 3);
