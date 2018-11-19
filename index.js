// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
  if (dist > 42) {
  return  dist - 42
} else {
  return 42 - dist
}
}

function distanceFromHqInFeet(dist) {
  return distanceFromHqInBlocks(dist) * 264
}

function distanceTravelledInFeet(num1, num2) {
  return (num1 > num2) ? (num1 - num2) * 264 : (num2 - num1) * 264
}

function calculatesFarePrice(start, destination) {
  dist = distanceTravelledInFeet(start, destination)
  if (dist <= 400) {
    return 0
  } else if (dist > 400 && dist < 2000) {
    return (dist - 400) * .02
  } else if (dist > 2000 && dist < 2500) {
    return 25
  } else if (dist > 2500) {
    return "cannot travel that far"
  }
}
