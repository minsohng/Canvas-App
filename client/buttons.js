// import canvas from './freehand.js'

const freehandBtn = document.getElementById('freehand')
const lineBtn = document.getElementById('line')



freehandBtn.addEventListener('click', () => {
  let isDrawing = false
  let x = 0
  let y = 0
  let width = window.innerWidth;
  let height = window.innerHeight;

  const map = {}
  let object = []

  const canvas = document.getElementById('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  const rect = canvas.getBoundingClientRect();


  const drawLine = (ctx, x1, y1, x2, y2, color) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  }
  canvas.addEventListener('mousedown', e => {
    x = e.clientX - rect.left
    y = e.clientY - rect.top
    isDrawing = true
    console.log(x, y)
    object.push({
      'x': x,
      'y': y,
    })
  })
  
  canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
      drawLine(ctx, x, y, e.clientX - rect.left, e.clientY - rect.top, 'black');
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
  
      object.push({
      'x': x,
      'y': y,
    })
    }
  })
  
  canvas.addEventListener('mouseup', e => {
    if (isDrawing === true) {
      drawLine(ctx, x, y, e.clientX - rect.left, e.clientY - rect.top, 'black');
      if (object.length) map[`${x}, ${y}`] = object
      object = []
      x = 0;
      y = 0;
      isDrawing = false;
      console.log(map)
    }
  });
})

lineBtn.addEventListener('click', e => {
  canvas.removeEventListener('mousedown')
  canvas.removeEventListener('mousemove')
  canvas.removeEventListener('mouseup')
})