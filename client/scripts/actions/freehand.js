// let isDrawing = false
// let x = 0
// let y = 0
// let width = window.innerWidth;
// let height = window.innerHeight;

// const map = {}
// let object = []

// const canvas = document.getElementById('canvas')
// canvas.width = width
// canvas.height = height
// const ctx = canvas.getContext('2d')

// const rect = canvas.getBoundingClientRect();


// const drawLine = (ctx, x1, y1, x2, y2, color) => {
//   ctx.beginPath();
//   ctx.strokeStyle = color;
//   ctx.lineWidth = 1;
//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);
//   ctx.stroke();
//   ctx.closePath();
// }

// export default canvas


// // canvas.addEventListener('click', e => {
// // 	if (!isDrawing) {
// // 		x = e.clientX - rect.left
// // 		y = e.clientY - rect.top
// // 		console.log(x, y)
// // 		for (let key in map) {
// // 			for (let item of map[key]) {
// // 				if (item.x === x && item.y === y) {
// // 					console.log("You clicked on object")
// // 					selectObject(ctx, x, y, map[key])
// // 					break
// // 				}
// // 			}
// // 		}
// // 	}
// // })

// // const selectObject = (ctx, x, y, obj) => {
// // 	for (let i = 0; i < obj.length; i++) {
// // 		drawLine(ctx, x, y, obj[i].x, obj[i].y, 'red')
// // 	}
// // }