function Firework(x, y) {
  this.r = random(0, 255)
  this.g = random(0, 255)
  this.b = random(0, 255)
  this.color = color(this.r, this.g, this.b, 255)
  this.firework = new Particle(x, y, true)
  this.exploded = false
  this.particles = []
  this.lifespan = 255
  this.done = false

  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(createVector(0, 1))
      this.firework.update()

      if (this.firework.velocity.y >= 0) {
        this.exploded = true

        // init particles
        for (let i = 0, len = 100; i < len; ++i) {
          const particle = new Particle(this.firework.location.x, this.firework.location.y)
          this.particles.push(particle)
        }
      }
    } else {
      if (this.firework) {
        this.firework = null
      }

      if (!this.dead) {
        this.color = color(this.r, this.g, this.b, this.lifespan)
        this.lifespan -= 5
        for (let i = 0, len = 100; i < len; ++i) {
          this.particles[i].applyForce(createVector(0, 1))
          this.particles[i].update()
        }
      }

      if (this.lifespan < 0) {
        this.dead = true
        for (let i = this.particles.length - 1; i >= 0; i--) {
          this.particles.splice(i, 1)
        }
      }
    }
  }

  this.render = function() {
    fill(this.color)
    if (!this.exploded) {
      this.firework.render()
    } else {
      for (let i = 0, len = this.particles.length; i < len; ++i) {
        this.particles[i].render()
      }
    }
  }
}
