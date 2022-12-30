class Team
{
  constructor(name, isPlaying, pieces)
  {
    this.name = name
    this.isPlaying = isPlaying
    this.pieces = pieces
  }

  draw()
  {
    for (const piece in this.pieces) {
      if (!this.pieces[piece].getCaptured()) {
        this.pieces[piece].draw()
      }
    }
  }

  getIsPlaying()
  {
    return this.isPlaying
  }

  changeTurn()
  {
    this.isPlaying = !this.isPlaying
  }
  
  getPieces()
  {
    return this.pieces
  }
}