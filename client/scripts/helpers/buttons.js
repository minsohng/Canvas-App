import cv from './canvas.js'
import { freehand, straightLine } from '../actions/index.js'


const freehandBtn = document.getElementById('freehand')
const lineBtn = document.getElementById('straightLine')

freehandBtn.addEventListener('click', () => {
  removeOtherEventListeners('freehand')
  cv.canvas.addEventListener('mousedown', freehand.mousedown)
  cv.canvas.addEventListener('mousemove', freehand.mousemove)
  cv.canvas.addEventListener('mouseup', freehand.mouseup)
})

lineBtn.addEventListener('click', () => {
  removeOtherEventListeners('straightLine')
  cv.canvas.addEventListener('mousedown', straightLine.mousedown)
  cv.canvas.addEventListener('mousemove', straightLine.mousemove)
  cv.canvas.addEventListener('mouseup', straightLine.mouseup)
})

const removeOtherEventListeners = (btnId) => {
  const eventObj = {
    freehand,
    straightLine,
    //rectangles
  }
  for (let i in eventObj) {
    if (eventObj[i] !== btnId) {
      for (let j in eventObj[i]) {
        cv.canvas.removeEventListener(j, eventObj[i][j])
      }
    } 
  }
}