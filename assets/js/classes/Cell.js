class Cell
{
  constructor( color, name, row, column, isBusy, size, posX, posY )
  {
    this.color = color
    this.borderColor = 'orange'
    this.name = name
    this.row = row
    this.column = column
    this.posX = posX
    this.posY = posY
    this.size = size
    this.onFocus = false
    this.adjoiningCells = {}
    this.isBusy = isBusy
  }

  draw() 
  {
    if (this.onFocus) {
      stroke(color(this.borderColor))
      strokeWeight(6)
    }else{
      noStroke()
    }
    fill(color(this.color));
    square(this.posX, this.posY, this.size)
  }
  
  turnOn()
  {
    this.onFocus = true
  }

  turnOff()
  {
    this.onFocus = false
  }

  wasSelected(offsetX, offsetY){
    return (offsetX >= this.posX && offsetX <= this.posX+this.size) && (offsetY >= this.posY && offsetY <= this.posY+this.size)
  }
  
  getAdjoiningCells()
  {
    return this.adjoiningCells
  }

  setAdjoiningCells(cells)
  {
    this.adjoiningCells = cells
  }
}