class FrameCell extends Cell
{
  constructor(name, size, posX, posY)
  {
    super('orange', name, size, posX, posY)
    this.nameColor = 'black'
  }

  draw() 
  {
    rectMode(CORNER)
    fill(color(this.color));
    square(this.posX, this.posY, this.size)
    textAlign(CENTER, CENTER)
    fill(color(this.nameColor));
    text(this.name, this.posX+(this.size/2), this.posY+(this.size/2))
  }
}