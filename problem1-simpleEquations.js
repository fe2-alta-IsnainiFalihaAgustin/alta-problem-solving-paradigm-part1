// Simple Equations

function simpleEquations(a, b, c) {

  for ( let i = 1; i <= c; i++) {
    for ( let j = 1; j <= b; j++) {
      for ( let k = 1; k <= a; k++) {

        if (i + j + k === a && i * j * k === b && i*i + j*j + k*k === c) {
          console.log(i, j, k)
          return
        }
      }
    }
  }
  console.log('no solution');
}

simpleEquations(1, 2, 3)  // no solution
simpleEquations(6, 6, 14) // 1 2 3