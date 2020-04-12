class Canvas {
  canvas = undefined
  ctx = undefined
  rect = undefined
  x = 0
  y = 0
  width = window.innerWidth
  height = window.innerHeight
  isDrawing = false

  init() {
    this.canvas = document.getElementById('canvas')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = canvas.getContext('2d')
    this.rect = canvas.getBoundingClientRect()
  }
}

const cv = new Canvas()
cv.init()

export default cv
