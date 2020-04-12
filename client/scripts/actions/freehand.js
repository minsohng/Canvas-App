import cv from '../helpers/canvas.js'
import { drawLine } from '../helpers/draw.js'

let drawing = []

export const freehand = {
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
      drawLine(cv.ctx, cv.x, cv.y, e.clientX - cv.rect.left, e.clientY - cv.rect.top, 'black')
      cv.x = e.clientX - cv.rect.left
      cv.y = e.clientY - cv.rect.top
      drawing.push({
        x: cv.x,
        y: cv.y,
      })
    }
  },
  mouseup: (e) => {
    if (cv.isDrawing === true) {
      drawLine(cv.ctx, cv.x, cv.y, e.clientX - cv.rect.left, e.clientY - cv.rect.top, 'black')
      cv.drawingMap[`${cv.x}, ${cv.y}`] = drawing
      cv.x = 0
      cv.y = 0
      cv.isDrawing = false
      drawing = []
    }
  },
}