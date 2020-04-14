import cv from '../helpers/canvas.js'
import { drawLine, getCoordsBetweenTwo } from '../helpers/draw.js'

// array that stores start and end coordinates
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
    cv.takeSnapshot()
  },
  mousemove: (e) => {
    if (cv.isDrawing === true) {
      cv.restoreSnapshot()
      drawLine(cv.ctx, cv.x, cv.y, e.clientX - cv.rect.left, e.clientY - cv.rect.top, cv.color)
    }
  },
  mouseup: (e) => {
    if (cv.isDrawing === true) {
      drawing.push({
        x: e.clientX - cv.rect.left,
        y: e.clientY - cv.rect.top,
      })

      // save drawing as object in drawingMap
      const startCoord = drawing[0]
      const endCoord = drawing[1]
      const coords = getCoordsBetweenTwo(startCoord, endCoord)
      cv.drawingMap[`${cv.x}, ${cv.y}`] = coords
      
      cv.restoreSnapshot()

      drawLine(cv.ctx, cv.x, cv.y, e.clientX - cv.rect.left, e.clientY - cv.rect.top, cv.color)

      // restore global variables to initial state
      cv.x = 0
      cv.y = 0
      cv.isDrawing = false
      drawing = []
    }
  },
}