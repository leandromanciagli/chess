class Cell
{
  constructor(color, name, size, posX, posY)
  {
    this.color = color
    this.name = name
    this.size = size
    this.posX = posX
    this.posY = posY
  }

  draw() {
    throw new Error("Method 'draw()' must be implemented.");
  }

  wasSelected()
  {
    return false
  }

  turnOff()
  {
    return false
  }

}