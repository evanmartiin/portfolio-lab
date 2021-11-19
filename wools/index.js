const body = document.body
const canvas = document.createElement('canvas')
body.appendChild(canvas)
canvas.width = window.innerWidth * window.devicePixelRatio
canvas.height = window.innerHeight * window.devicePixelRatio
const ctx = canvas.getContext("2d")

// NFT

const RADIUS = 500
let THICK = Math.floor(Math.random() * 4) + 3
let LIGHT = Math.floor(Math.random() * 6)
let COLOR = [Math.floor(Math.random() * 156), Math.floor(Math.random() * 156), Math.floor(Math.random() * 156)]

let count = 0

let points = []
for (let i = 0; i < Math.PI * 200; i ++) {
    points.push([Math.cos(i * 0.01) * RADIUS, Math.sin(i * 0.01) * RADIUS])
}

function getRndColor() {
    var r = COLOR[0] + (Math.random() - .5) * 100,
        g = COLOR[1] + (Math.random() - .5) * 100,
        b = COLOR[2] + (Math.random() - .5) * 100;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

document.body.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    THICK = Math.floor(Math.random() * 5) + 2
    LIGHT = Math.floor(Math.random() * 6)
    COLOR = [Math.floor(Math.random() * 156), Math.floor(Math.random() * 156), Math.floor(Math.random() * 156)]

    count = 0

    points = []
    for (let i = 0; i < Math.PI * 200; i ++) {
        points.push([Math.cos(i * 0.01) * RADIUS, Math.sin(i * 0.01) * RADIUS])
    }
})

const update = () => {
    requestAnimationFrame(update)

    if (count < THICK * 20) {
        for (let i = 0; i < 50; i++) {
            let point1 = points[Math.floor(Math.random() * points.length)]
            let point2 = points[Math.floor(Math.random() * points.length)]
            let centreCoords = [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2]
            let centre = centreCoords[0] + centreCoords[1]

            if (Math.abs(centre) < 700) {
                ctx.save()
                ctx.translate(canvas.width/2, canvas.height/2)
                ctx.beginPath()
                ctx.strokeStyle = getRndColor()

                switch (LIGHT) {
                    case 0: // TOP LEFT
                        ctx.globalAlpha = (centre + 700) / 1400
                        break;

                    case 1: // BOTTOM RIGHT
                        ctx.globalAlpha = 1 - (centre + 700) / 1400
                        break;

                    case 2: // LEFT
                        ctx.globalAlpha = (centreCoords[0] + 500) / 1000
                        break;

                    case 3: // RIGHT
                        ctx.globalAlpha = 1 - (centreCoords[0] + 500) / 1000
                        break;

                    case 4: // TOP
                        ctx.globalAlpha = (centreCoords[1] + 500) / 1000
                        break;

                    case 5: // BOTTOM
                        ctx.globalAlpha = 1 - (centreCoords[1] + 500) / 1000
                        break;
                
                    default:
                        break;
                }

                ctx.moveTo(point1[0], point1[1])
                ctx.lineTo(point2[0], point2[1])
                ctx.stroke()
                ctx.closePath()
                ctx.restore()
            }
        }
    }

    count++
}

requestAnimationFrame(update)