class PlayableCell extends Cell
{
  constructor( color, name, row, column, size, posX, posY, actualPiece = null )
  {
    super(color, name, size, posX, posY, row, column)
    this.selectedColor
    this.row = row
    this.column = column
    this.onFocus = false
    this.adjoiningCells = {}
    this.actualPiece = actualPiece
  }

  draw() 
  {
    if (this.onFocus) {
      stroke(color(this.selectedColor))
      strokeWeight(6)
    }else{
      noStroke()
    }
    rectMode(CORNER)
    fill(color(this.color));
    square(this.posX, this.posY, this.size)
  }
  
  turnOn(selectedColor = 'orange')
  {
    this.selectedColor = selectedColor
    this.onFocus = true
  }

  turnOff()
  {
    this.onFocus = false
  }

  isOnFocus()
  {
    return this.onFocus
  }

  isBusy()
  {
    return this.actualPiece !== null
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

  getActualPiece()
  {
    return this.actualPiece
  }

  setActualPiece(piece)
  {
    this.actualPiece = piece
  }
}