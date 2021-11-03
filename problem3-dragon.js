//  Dragon of Loowater

function DragonOfLoowater(dragonHead, knightHeight) {
  
  let final = 0
  dragonHead.sort((a, b) => {return a - b})
  knightHeight.sort((a, b) => {return a - b})

  for ( let i in knightHeight) {
    
    if (knightHeight[i] >= dragonHead[0]) {
      final += knightHeight[i]
      dragonHead.shift()
    }
  }
  if (!dragonHead.length) {
    return final

  } else {
    return "knight fall"
  }
}

console.log(DragonOfLoowater([5, 4], [7, 8, 4]));          // 11
console.log(DragonOfLoowater([5, 10], [5]));               // knight fall
console.log(DragonOfLoowater([7, 2], [4, 3, 1, 2]));       // knight fall
console.log(DragonOfLoowater([7, 2], [2, 1, 8, 5]));       // 10