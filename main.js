let screenWidth = 800
let screenHeight = 600
let fireworks = []
const padding = 20

function setup() {
  // setup
  createCanvas(screenWidth, screenHeight)
  background(0)
}

function draw() {
  // draw
  background(0, 40)
  strokeWeight(1)
  if (random() < 0.03) {
    const firework = new Firework(random(padding, screenWidth - padding), screenHeight + padding)
    fireworks.push(firework)
  }

  for (let i = fireworks.length - 1; i >= 0; i--) {
    if (fireworks[i].dead) {
      fireworks.splice(i, 1)
    } else {
      fireworks[i].update()
      fireworks[i].render()
    }
  }
}
