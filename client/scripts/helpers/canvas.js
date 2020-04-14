class Canvas {
  canvas = undefined
  ctx = undefined
  rect = undefined
  x = 0
  y = 0
  width = window.innerWidth
  height = window.innerHeight
  isDrawing = false
  color = 'black'

  // hashmap to store drawings on canvas
  // drawings = coordinates[]
  // type coordinates = {
  //  x: x_coordinate
  //  y: y_coordinate
  // }
  drawingMap = {}

  snapshot = undefined

  init() {
    this.canvas = document.getElementById('canvas')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = canvas.getContext('2d')
    this.rect = canvas.getBoundingClientRect()
  }

  takeSnapshot() {
    if (!this.ctx) {
      throw new Error("context does not exist")
    }
    this.snapshot = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
  }

  restoreSnapshot() {
    if (!this.ctx) {
      throw new Error("context does not exist")
    }

    if (!this.snapshot) {
      throw new Error("snapshot does not exist")
    }
    this.ctx.putImageData(this.snapshot, 0, 0)
  }

  setPenColor(color) {
    this.color = color
  }
}

const cv = new Canvas()
cv.init()

export default cv
