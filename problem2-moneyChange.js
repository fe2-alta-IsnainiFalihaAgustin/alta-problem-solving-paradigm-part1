//  Money Change

function moneyChange(money) {

  const arrMoney = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]
  arrMoneySort = arrMoney.sort((a, b) => {return b - a})

  let hasil = []

  for (let i = 0; i < arrMoney.length; i++) {
    if (arrMoneySort[i] <= money){
      money = money - arrMoneySort[i]
      hasil.push(arrMoneySort[i])
      i--
    }
  }
  return hasil
}
  
console.log(moneyChange(123))   // [100 20 1 1 1]
console.log(moneyChange(432))   // [200 200 20 10 1 1]
console.log(moneyChange(543))   // [500, 20, 20, 1, 1, 1]
console.log(moneyChange(7752))  // [5000, 2000, 500, 200, 50, 1, 1]
console.log(moneyChange(15321)) // [10000 5000 200 100 20 1]