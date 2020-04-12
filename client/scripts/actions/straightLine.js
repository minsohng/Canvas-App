import cv from '../helpers/canvas.js'
import { drawLine } from '../helpers/draw.js'

const strokeStack = []

export const straightLine = {
  mousedown: (e) => {
    cv.x = e.clientX - cv.rect.left
    cv.y = e.clientY - cv.rect.top
    cv.isDrawing = true
  },
  mousemove: (e) => {
    if (cv.isDrawing === true) {
      // if (strokeStack.length) {
      //   const lastStroke = strokeStack.pop()
      //   drawLine(cv.ctx, lastStroke.x, lastStroke.y, e.clientX - cv.rect.left, e.clientY - cv.rect.top, 'white')
      // }

      cv.ctx.clearRect(0, 0, cv.canvas.width, cv.canvas.height);
      drawLine(cv.ctx, cv.x, cv.y, e.clientX - cv.rect.left, e.clientY - cv.rect.top, 'black')
      // strokeStack.push({
      //   x: cv.x,
      //   y: cv.y,
      // })

    }
  },
  mouseup: (e) => {
    if (cv.isDrawing === true) {
      drawLine(cv.ctx, cv.x, cv.y, e.clientX - cv.rect.left, e.clientY - cv.rect.top, 'black')
      cv.x = 0
      cv.y = 0
      cv.isDrawing = false
      // strokeStack.pop()
    }
  },
}