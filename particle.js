function Particle(x, y, isFirework) {
  if (isFirework) {
    this.velocity = createVector(0, random(-18, -8))
    this.mass = 5
  } else {
    this.velocity = p5.Vector.random2D()
    this.velocity.mult(random(2, 5))
    this.mass = 5
  }
  this.acceleration = createVector(0, 0)
  this.location = createVector(x, y)

  this.applyForce = function(force) {
    const f = p5.Vector.div(force, this.mass)
    this.acceleration = this.acceleration.add(f)
  }

  this.update = function() {
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
    this.acceleration.mult(0)
  }

  this.render = function() {
    ellipse(this.location.x, this.location.y, this.mass, this.mass)
  }
}
