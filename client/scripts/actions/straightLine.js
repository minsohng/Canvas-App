import cv from '../helpers/canvas.js'
import { drawLine, getCoordsBetweenTwo } from '../helpers/draw.js'

// stores start and end coordinates
let drawing = []

export const straightLine = {
  mousedown: (e) => {
    cv.x = e.clientX - cv.rect.left
    cv.y = e.clientY - cv.rect.top
    cv.isDrawing = true
    drawing.push({
      x: cv.x,
      y: cv.y,
    })
  },
  mousemove: (e) => {
    if (cv.isDrawing === true) {
      // if (strokeStack.length) {
      //   const lastStroke = strokeStack.pop()
      //   drawLine(cv.ctx, lastStroke.x, lastStroke.y, e.clientX - cv.rect.left, e.clientY - cv.rect.top, 'white')
      // }
      // drawLine(cv.ctx, cv.x, cv.y, e.clientX - cv.rect.left, e.clientY - cv.rect.top, 'black')
    }
  },
  mouseup: (e) => {
    if (cv.isDrawing === true) {
      drawLine(cv.ctx, cv.x, cv.y, e.clientX - cv.rect.left, e.clientY - cv.rect.top, 'black')
      drawing.push({
        x: e.clientX - cv.rect.left,
        y: e.clientY - cv.rect.top,
      })
      const startCoord = drawing[0]
      const endCoord = drawing[1]
      console.log("drawing", startCoord, endCoord)
      const coords = getCoordsBetweenTwo(startCoord, endCoord)
      
      cv.drawingMap[`${cv.x}, ${cv.y}`] = coords

      cv.x = 0
      cv.y = 0
      cv.isDrawing = false
      drawing = []
      // console.log(cv.drawingMap)
    }
  },
}