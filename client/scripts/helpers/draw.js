export const drawLine = (ctx, x1, y1, x2, y2, color) => {
  ctx.beginPath()
  ctx.strokeStyle = color
  ctx.lineWidth = 1
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.closePath()
}

// A = [x ,y], B = [x, y]
// ref: https://stackoverflow.com/questions/13491676/get-all-pixel-coordinates-between-2-points/13491882
export const getCoordsBetweenTwo = (A, B) => {
  const m = slope(A, B)
  const b = intercept(A, m)

  const coords = []

  if (A.x === B.x) {
    for (let y = A.y; y <= B.y; y++) {
      coords.push({
        x: A.x,
        y,
      })
    }
  }

  if (A.x > B.x) {
    for (let x = B.x; x <= A.x; x++) {
      const y = m * x + b
      coords.push({
        x, 
        y,
      })
    }
  }

  if (A.x < B.x) {
    for (let x = A.x; x <= B.x; x++) {
      const y = m * x + b
      coords.push({
        x, 
        y,
      })
    }
  }
  return coords
}

const slope = (a, b) => {
  if (a.x === b.x) {
    return null
  }

  return (b.y - a.y) / (b.x - a.x)
}

const intercept = (point, slope) => {
  if (slope === null) {
    // vertical line
    return point.x
  }

  return point.y - slope * point.x
}