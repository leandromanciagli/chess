class Horse extends Piece
{
  showPossibleDestinations()
  {
    if(this.actualCell.getAdjoiningCells['north'] && !this.actualCell.getAdjoiningCells['north'].isBusy()){
      getNorthDestinations(this.actualCell.getAdjoiningCells['north'])
    }

    this.actualCell
    let possibleWays = {
      way1: ['north', 'north', 'east'],
      way2: ['north', 'north', 'west'],
      way3: ['south', 'south', 'east'],
      way4: ['south', 'south', 'west'],
      way5: ['east', 'east', 'north'],
      way6: ['east', 'east', 'south'],
      way7: ['west', 'west', 'north'],
      way8: ['west', 'west', 'south']
    }
    for (const way in possibleWays) {
      let cell = this.actualCell
      for (let i = 0; i < way.length; i++) {
        if (cell.getAdjoiningCells()[way[direction]]) {
          cell = cell.getAdjoiningCells()[direction]
        } else {
          i = 3
        }
      }
    }
    this.actualCell.getAdjoiningCells()['north'].getAdjoiningCells()['north'].getAdjoiningCells()['east']
    this.actualCell.getAdjoiningCells()['north'].getAdjoiningCells()['north'].getAdjoiningCells()['west']
    this.actualCell.getAdjoiningCells()['south'].getAdjoiningCells()['south'].getAdjoiningCells()['east']
    this.actualCell.getAdjoiningCells()['south'].getAdjoiningCells()['south'].getAdjoiningCells()['west']
    this.actualCell.getAdjoiningCells()['east'].getAdjoiningCells()['east'].getAdjoiningCells()['north']
    this.actualCell.getAdjoiningCells()['east'].getAdjoiningCells()['east'].getAdjoiningCells()['south']
    this.actualCell.getAdjoiningCells()['west'].getAdjoiningCells()['west'].getAdjoiningCells()['north']
    this.actualCell.getAdjoiningCells()['west'].getAdjoiningCells()['west'].getAdjoiningCells()['south']
  }

  getNorthDestinations(cell)
  {
    if(this.actualCell.getAdjoiningCells['north']){
      getNorthDestinations(this.actualCell.getAdjoiningCells['north'])
    }
  }
}