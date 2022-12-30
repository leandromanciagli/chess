class Board
{
  constructor()
  {
    this.cells
    this.teams
    this.selectedPiece = null
    this.size = (45 * windowWidth) / 100
    this.posX = windowWidth/2
    this.posY = windowHeight/2
  }

  draw()
  {
    for (const cell in this.cells) {
      this.cells[cell].draw()
    }
    for (const team in this.teams) {
      this.teams[team].draw()
    }
  }

  turnOffAllCells()
  {
    for (const cell in this.cells) {
      this.cells[cell].turnOff()
    }
  }

  getTurnTeam()
  {
    for (const team in this.teams) {
      if(this.teams[team].getIsPlaying()) {
        return this.teams[team]
      }
    }
  }

  changeTurnTeams()
  {
    for (const team in this.teams) {
      this.teams[team].changeTurn()
    }
  }

  selectPiece(piece)
  {
    this.turnOffAllCells()
    this.selectedPiece = piece
    this.selectedPiece.getActualCell().turnOn()
    this.selectedPiece.showPossibleDestinations()
  }

  getSize()
  {
    return this.size
  }

  setCells(cells)
  {
    this.cells = cells
  }

  setTeams(teams)
  {
    this.teams = teams
  }

}