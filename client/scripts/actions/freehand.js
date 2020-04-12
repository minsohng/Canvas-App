import cv from '../helpers/canvas.js'
import { drawLine } from '../helpers/draw.js'

export const freehand = {
  mousedown: (e) => {
    cv.x = e.clientX - cv.rect.left
    cv.y = e.clientY - cv.rect.top
    cv.isDrawing = true
  },
  mousemove: (e) => {
    if (cv.isDrawing === true) {
      drawLine(cv.ctx, cv.x, cv.y, e.clientX - cv.rect.left, e.clientY - cv.rect.top, 'black')
      cv.x = e.clientX - cv.rect.left
      cv.y = e.clientY - cv.rect.top
    }
  },
  mouseup: (e) => {
    if (cv.isDrawing === true) {
      drawLine(cv.ctx, cv.x, cv.y, e.clientX - cv.rect.left, e.clientY - cv.rect.top, 'black')
      cv.x = 0
      cv.y = 0
      cv.isDrawing = false
    }
  },
}