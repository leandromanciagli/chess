class Board
{
  constructor()
  {
    this.size = (40 * windowWidth) / 100
    this.posX = windowWidth/2
    this.posY = windowHeight/2
    this.createCells(this.size/10)
    this.createPieces(this.size/10)
    for (const piece in this.pieces) {
      this.cells[this.pieces[piece].getActualCell()].actualPiece = this.pieces[piece]
    }
    this.selectedPiece = null
  }

  draw()
  {
    for (const cell in this.cells) {
      this.cells[cell].draw()
    }

    for (const piece in this.pieces) {
      this.pieces[piece].draw()
    }
  }

  turnOffAllCells()
  {
    for (const cell in this.cells) {
      this.cells[cell].turnOff()
    }
  }

  selectPiece(piece)
  {
    this.turnOffAllCells()
    this.selectedPiece = piece
    this.selectedPiece.actualCell.turnOn()
    piece.showPossibleDestinations()
  }

  createCells(cellSize)
  {
    const color1 = 'brown'
    const color2 = 'white'
    let northWestCornerPosX = this.posX - this.size/2
    let northWestCornerPosY = this.posY - this.size/2

    let northWestCorner = new FrameCell('', cellSize, northWestCornerPosX+(cellSize*0), northWestCornerPosY+(cellSize*0))
    let northEastCorner = new FrameCell('', cellSize, northWestCornerPosX+(cellSize*9), northWestCornerPosY+(cellSize*0))
    let southWestCorner = new FrameCell('', cellSize, northWestCornerPosX+(cellSize*0), northWestCornerPosY+(cellSize*9))
    let southEastCorner = new FrameCell('', cellSize, northWestCornerPosX+(cellSize*9), northWestCornerPosY+(cellSize*9))

    let topColumnA = new FrameCell('A', cellSize, northWestCornerPosX+(cellSize*1), northWestCornerPosY+(cellSize*0))
    let topColumnB = new FrameCell('B', cellSize, northWestCornerPosX+(cellSize*2), northWestCornerPosY+(cellSize*0))
    let topColumnC = new FrameCell('C', cellSize, northWestCornerPosX+(cellSize*3), northWestCornerPosY+(cellSize*0))
    let topColumnD = new FrameCell('D', cellSize, northWestCornerPosX+(cellSize*4), northWestCornerPosY+(cellSize*0))
    let topColumnE = new FrameCell('E', cellSize, northWestCornerPosX+(cellSize*5), northWestCornerPosY+(cellSize*0))
    let topColumnF = new FrameCell('F', cellSize, northWestCornerPosX+(cellSize*6), northWestCornerPosY+(cellSize*0))
    let topColumnG = new FrameCell('G', cellSize, northWestCornerPosX+(cellSize*7), northWestCornerPosY+(cellSize*0))
    let topColumnH = new FrameCell('H', cellSize, northWestCornerPosX+(cellSize*8), northWestCornerPosY+(cellSize*0))

    let bottomColumnA = new FrameCell('A', cellSize, northWestCornerPosX+(cellSize*1), northWestCornerPosY+(cellSize*9))
    let bottomColumnB = new FrameCell('B', cellSize, northWestCornerPosX+(cellSize*2), northWestCornerPosY+(cellSize*9))
    let bottomColumnC = new FrameCell('C', cellSize, northWestCornerPosX+(cellSize*3), northWestCornerPosY+(cellSize*9))
    let bottomColumnD = new FrameCell('D', cellSize, northWestCornerPosX+(cellSize*4), northWestCornerPosY+(cellSize*9))
    let bottomColumnE = new FrameCell('E', cellSize, northWestCornerPosX+(cellSize*5), northWestCornerPosY+(cellSize*9))
    let bottomColumnF = new FrameCell('F', cellSize, northWestCornerPosX+(cellSize*6), northWestCornerPosY+(cellSize*9))
    let bottomColumnG = new FrameCell('G', cellSize, northWestCornerPosX+(cellSize*7), northWestCornerPosY+(cellSize*9))
    let bottomColumnH = new FrameCell('H', cellSize, northWestCornerPosX+(cellSize*8), northWestCornerPosY+(cellSize*9))

    let leftRow1 = new FrameCell('1', cellSize, northWestCornerPosX+(cellSize*0), northWestCornerPosY+(cellSize*8))
    let leftRow2 = new FrameCell('2', cellSize, northWestCornerPosX+(cellSize*0), northWestCornerPosY+(cellSize*7))
    let leftRow3 = new FrameCell('3', cellSize, northWestCornerPosX+(cellSize*0), northWestCornerPosY+(cellSize*6))
    let leftRow4 = new FrameCell('4', cellSize, northWestCornerPosX+(cellSize*0), northWestCornerPosY+(cellSize*5))
    let leftRow5 = new FrameCell('5', cellSize, northWestCornerPosX+(cellSize*0), northWestCornerPosY+(cellSize*4))
    let leftRow6 = new FrameCell('6', cellSize, northWestCornerPosX+(cellSize*0), northWestCornerPosY+(cellSize*3))
    let leftRow7 = new FrameCell('7', cellSize, northWestCornerPosX+(cellSize*0), northWestCornerPosY+(cellSize*2))
    let leftRow8 = new FrameCell('8', cellSize, northWestCornerPosX+(cellSize*0), northWestCornerPosY+(cellSize*1))

    let rightRow1 = new FrameCell('1', cellSize, northWestCornerPosX+(cellSize*9), northWestCornerPosY+(cellSize*8))
    let rightRow2 = new FrameCell('2', cellSize, northWestCornerPosX+(cellSize*9), northWestCornerPosY+(cellSize*7))
    let rightRow3 = new FrameCell('3', cellSize, northWestCornerPosX+(cellSize*9), northWestCornerPosY+(cellSize*6))
    let rightRow4 = new FrameCell('4', cellSize, northWestCornerPosX+(cellSize*9), northWestCornerPosY+(cellSize*5))
    let rightRow5 = new FrameCell('5', cellSize, northWestCornerPosX+(cellSize*9), northWestCornerPosY+(cellSize*4))
    let rightRow6 = new FrameCell('6', cellSize, northWestCornerPosX+(cellSize*9), northWestCornerPosY+(cellSize*3))
    let rightRow7 = new FrameCell('7', cellSize, northWestCornerPosX+(cellSize*9), northWestCornerPosY+(cellSize*2))
    let rightRow8 = new FrameCell('8', cellSize, northWestCornerPosX+(cellSize*9), northWestCornerPosY+(cellSize*1))

    let a1 = new PlayableCell(color1, 'A1', '1', 'A', true,  cellSize, northWestCornerPosX+(cellSize*1), northWestCornerPosY+(cellSize*8))
    let a2 = new PlayableCell(color2, 'A2', '2', 'A', true,  cellSize, northWestCornerPosX+(cellSize*1), northWestCornerPosY+(cellSize*7))
    let a3 = new PlayableCell(color1, 'A3', '3', 'A', false, cellSize, northWestCornerPosX+(cellSize*1), northWestCornerPosY+(cellSize*6))
    let a4 = new PlayableCell(color2, 'A4', '4', 'A', false, cellSize, northWestCornerPosX+(cellSize*1), northWestCornerPosY+(cellSize*5))
    let a5 = new PlayableCell(color1, 'A5', '5', 'A', false, cellSize, northWestCornerPosX+(cellSize*1), northWestCornerPosY+(cellSize*4))
    let a6 = new PlayableCell(color2, 'A6', '6', 'A', false, cellSize, northWestCornerPosX+(cellSize*1), northWestCornerPosY+(cellSize*3))
    let a7 = new PlayableCell(color1, 'A7', '7', 'A', true,  cellSize, northWestCornerPosX+(cellSize*1), northWestCornerPosY+(cellSize*2))
    let a8 = new PlayableCell(color2, 'A8', '8', 'A', true,  cellSize, northWestCornerPosX+(cellSize*1), northWestCornerPosY+(cellSize*1))
    let b1 = new PlayableCell(color2, 'B1', '1', 'B', true,  cellSize, northWestCornerPosX+(cellSize*2), northWestCornerPosY+(cellSize*8))
    let b2 = new PlayableCell(color1, 'B2', '2', 'B', true,  cellSize, northWestCornerPosX+(cellSize*2), northWestCornerPosY+(cellSize*7))
    let b3 = new PlayableCell(color2, 'B3', '3', 'B', false, cellSize, northWestCornerPosX+(cellSize*2), northWestCornerPosY+(cellSize*6))
    let b4 = new PlayableCell(color1, 'B4', '4', 'B', false, cellSize, northWestCornerPosX+(cellSize*2), northWestCornerPosY+(cellSize*5))
    let b5 = new PlayableCell(color2, 'B5', '5', 'B', false, cellSize, northWestCornerPosX+(cellSize*2), northWestCornerPosY+(cellSize*4))
    let b6 = new PlayableCell(color1, 'B6', '6', 'B', false, cellSize, northWestCornerPosX+(cellSize*2), northWestCornerPosY+(cellSize*3))
    let b7 = new PlayableCell(color2, 'B7', '7', 'B', true,  cellSize, northWestCornerPosX+(cellSize*2), northWestCornerPosY+(cellSize*2))
    let b8 = new PlayableCell(color1, 'B8', '8', 'B', true,  cellSize, northWestCornerPosX+(cellSize*2), northWestCornerPosY+(cellSize*1))
    let c1 = new PlayableCell(color1, 'C1', '1', 'C', true,  cellSize, northWestCornerPosX+(cellSize*3), northWestCornerPosY+(cellSize*8))
    let c2 = new PlayableCell(color2, 'C2', '2', 'C', true,  cellSize, northWestCornerPosX+(cellSize*3), northWestCornerPosY+(cellSize*7))
    let c3 = new PlayableCell(color1, 'C3', '3', 'C', false, cellSize, northWestCornerPosX+(cellSize*3), northWestCornerPosY+(cellSize*6))
    let c4 = new PlayableCell(color2, 'C4', '4', 'C', false, cellSize, northWestCornerPosX+(cellSize*3), northWestCornerPosY+(cellSize*5))
    let c5 = new PlayableCell(color1, 'C5', '5', 'C', false, cellSize, northWestCornerPosX+(cellSize*3), northWestCornerPosY+(cellSize*4))
    let c6 = new PlayableCell(color2, 'C6', '6', 'C', false, cellSize, northWestCornerPosX+(cellSize*3), northWestCornerPosY+(cellSize*3))
    let c7 = new PlayableCell(color1, 'C7', '7', 'C', true,  cellSize, northWestCornerPosX+(cellSize*3), northWestCornerPosY+(cellSize*2))
    let c8 = new PlayableCell(color2, 'C8', '8', 'C', true,  cellSize, northWestCornerPosX+(cellSize*3), northWestCornerPosY+(cellSize*1))
    let d1 = new PlayableCell(color2, 'D1', '1', 'D', true,  cellSize, northWestCornerPosX+(cellSize*4), northWestCornerPosY+(cellSize*8))
    let d2 = new PlayableCell(color1, 'D2', '2', 'D', true,  cellSize, northWestCornerPosX+(cellSize*4), northWestCornerPosY+(cellSize*7))
    let d3 = new PlayableCell(color2, 'D3', '3', 'D', false, cellSize, northWestCornerPosX+(cellSize*4), northWestCornerPosY+(cellSize*6))
    let d4 = new PlayableCell(color1, 'D4', '4', 'D', false, cellSize, northWestCornerPosX+(cellSize*4), northWestCornerPosY+(cellSize*5))
    let d5 = new PlayableCell(color2, 'D5', '5', 'D', false, cellSize, northWestCornerPosX+(cellSize*4), northWestCornerPosY+(cellSize*4))
    let d6 = new PlayableCell(color1, 'D6', '6', 'D', false, cellSize, northWestCornerPosX+(cellSize*4), northWestCornerPosY+(cellSize*3))
    let d7 = new PlayableCell(color2, 'D7', '7', 'D', true,  cellSize, northWestCornerPosX+(cellSize*4), northWestCornerPosY+(cellSize*2))
    let d8 = new PlayableCell(color1, 'D8', '8', 'D', true,  cellSize, northWestCornerPosX+(cellSize*4), northWestCornerPosY+(cellSize*1))
    let e1 = new PlayableCell(color1, 'E1', '1', 'E', true,  cellSize, northWestCornerPosX+(cellSize*5), northWestCornerPosY+(cellSize*8))
    let e2 = new PlayableCell(color2, 'E2', '2', 'E', true,  cellSize, northWestCornerPosX+(cellSize*5), northWestCornerPosY+(cellSize*7))
    let e3 = new PlayableCell(color1, 'E3', '3', 'E', false, cellSize, northWestCornerPosX+(cellSize*5), northWestCornerPosY+(cellSize*6))
    let e4 = new PlayableCell(color2, 'E4', '4', 'E', false, cellSize, northWestCornerPosX+(cellSize*5), northWestCornerPosY+(cellSize*5))
    let e5 = new PlayableCell(color1, 'E5', '5', 'E', false, cellSize, northWestCornerPosX+(cellSize*5), northWestCornerPosY+(cellSize*4))
    let e6 = new PlayableCell(color2, 'E6', '6', 'E', false, cellSize, northWestCornerPosX+(cellSize*5), northWestCornerPosY+(cellSize*3))
    let e7 = new PlayableCell(color1, 'E7', '7', 'E', true,  cellSize, northWestCornerPosX+(cellSize*5), northWestCornerPosY+(cellSize*2))
    let e8 = new PlayableCell(color2, 'E8', '8', 'E', true,  cellSize, northWestCornerPosX+(cellSize*5), northWestCornerPosY+(cellSize*1))
    let f1 = new PlayableCell(color2, 'F1', '1', 'F', true,  cellSize, northWestCornerPosX+(cellSize*6), northWestCornerPosY+(cellSize*8))
    let f2 = new PlayableCell(color1, 'F2', '2', 'F', true,  cellSize, northWestCornerPosX+(cellSize*6), northWestCornerPosY+(cellSize*7))
    let f3 = new PlayableCell(color2, 'F3', '3', 'F', false, cellSize, northWestCornerPosX+(cellSize*6), northWestCornerPosY+(cellSize*6))
    let f4 = new PlayableCell(color1, 'F4', '4', 'F', false, cellSize, northWestCornerPosX+(cellSize*6), northWestCornerPosY+(cellSize*5))
    let f5 = new PlayableCell(color2, 'F5', '5', 'F', false, cellSize, northWestCornerPosX+(cellSize*6), northWestCornerPosY+(cellSize*4))
    let f6 = new PlayableCell(color1, 'F6', '6', 'F', false, cellSize, northWestCornerPosX+(cellSize*6), northWestCornerPosY+(cellSize*3))
    let f7 = new PlayableCell(color2, 'F7', '7', 'F', true,  cellSize, northWestCornerPosX+(cellSize*6), northWestCornerPosY+(cellSize*2))
    let f8 = new PlayableCell(color1, 'F8', '8', 'F', true,  cellSize, northWestCornerPosX+(cellSize*6), northWestCornerPosY+(cellSize*1))
    let g1 = new PlayableCell(color1, 'G1', '1', 'G', true,  cellSize, northWestCornerPosX+(cellSize*7), northWestCornerPosY+(cellSize*8))
    let g2 = new PlayableCell(color2, 'G2', '2', 'G', true,  cellSize, northWestCornerPosX+(cellSize*7), northWestCornerPosY+(cellSize*7))
    let g3 = new PlayableCell(color1, 'G3', '3', 'G', false, cellSize, northWestCornerPosX+(cellSize*7), northWestCornerPosY+(cellSize*6))
    let g4 = new PlayableCell(color2, 'G4', '4', 'G', false, cellSize, northWestCornerPosX+(cellSize*7), northWestCornerPosY+(cellSize*5))
    let g5 = new PlayableCell(color1, 'G5', '5', 'G', false, cellSize, northWestCornerPosX+(cellSize*7), northWestCornerPosY+(cellSize*4))
    let g6 = new PlayableCell(color2, 'G6', '6', 'G', false, cellSize, northWestCornerPosX+(cellSize*7), northWestCornerPosY+(cellSize*3))
    let g7 = new PlayableCell(color1, 'G7', '7', 'G', true,  cellSize, northWestCornerPosX+(cellSize*7), northWestCornerPosY+(cellSize*2))
    let g8 = new PlayableCell(color2, 'G8', '8', 'G', true,  cellSize, northWestCornerPosX+(cellSize*7), northWestCornerPosY+(cellSize*1))
    let h1 = new PlayableCell(color2, 'H1', '1', 'H', true,  cellSize, northWestCornerPosX+(cellSize*8), northWestCornerPosY+(cellSize*8))
    let h2 = new PlayableCell(color1, 'H2', '2', 'H', true,  cellSize, northWestCornerPosX+(cellSize*8), northWestCornerPosY+(cellSize*7))
    let h3 = new PlayableCell(color2, 'H3', '3', 'H', false, cellSize, northWestCornerPosX+(cellSize*8), northWestCornerPosY+(cellSize*6))
    let h4 = new PlayableCell(color1, 'H4', '4', 'H', false, cellSize, northWestCornerPosX+(cellSize*8), northWestCornerPosY+(cellSize*5))
    let h5 = new PlayableCell(color2, 'H5', '5', 'H', false, cellSize, northWestCornerPosX+(cellSize*8), northWestCornerPosY+(cellSize*4))
    let h6 = new PlayableCell(color1, 'H6', '6', 'H', false, cellSize, northWestCornerPosX+(cellSize*8), northWestCornerPosY+(cellSize*3))
    let h7 = new PlayableCell(color2, 'H7', '7', 'H', true,  cellSize, northWestCornerPosX+(cellSize*8), northWestCornerPosY+(cellSize*2))
    let h8 = new PlayableCell(color1, 'H8', '8', 'H', true,  cellSize, northWestCornerPosX+(cellSize*8), northWestCornerPosY+(cellSize*1))

    a1.setAdjoiningCells({ north: a2,   northEast: b2,   east: b1, southEast: null, south: null, southWest: null, west: null, northWest: null })
    a2.setAdjoiningCells({ north: a3,   northEast: b3,   east: b2, southEast: b1,   south: a1,   southWest: null, west: null, northWest: null })
    a3.setAdjoiningCells({ north: a4,   northEast: b4,   east: b3, southEast: b2,   south: a2,   southWest: null, west: null, northWest: null })
    a4.setAdjoiningCells({ north: a5,   northEast: b5,   east: b4, southEast: b3,   south: a3,   southWest: null, west: null, northWest: null })
    a5.setAdjoiningCells({ north: a6,   northEast: b6,   east: b5, southEast: b4,   south: a4,   southWest: null, west: null, northWest: null })
    a6.setAdjoiningCells({ north: a7,   northEast: b7,   east: b6, southEast: b5,   south: a5,   southWest: null, west: null, northWest: null })
    a7.setAdjoiningCells({ north: a8,   northEast: b8,   east: b7, southEast: b6,   south: a6,   southWest: null, west: null, northWest: null })
    a8.setAdjoiningCells({ north: null, northEast: null, east: b8, southEast: b7,   south: a7,   southWest: null, west: null, northWest: null })

    b1.setAdjoiningCells({ north: b2,   northEast: c2,   east: c1, southEast: null, south: null, southWest: null, west: a1, northWest: a2   })
    b2.setAdjoiningCells({ north: b3,   northEast: c3,   east: c2, southEast: c1,   south: b1,   southWest: a1,   west: a2, northWest: a3   })
    b3.setAdjoiningCells({ north: b4,   northEast: c4,   east: c3, southEast: c2,   south: b2,   southWest: a2,   west: a3, northWest: a4   })
    b4.setAdjoiningCells({ north: b5,   northEast: c5,   east: c4, southEast: c3,   south: b3,   southWest: a3,   west: a4, northWest: a5   })
    b5.setAdjoiningCells({ north: b6,   northEast: c6,   east: c5, southEast: c4,   south: b4,   southWest: a4,   west: a5, northWest: a6   })
    b6.setAdjoiningCells({ north: b7,   northEast: c7,   east: c6, southEast: c5,   south: b5,   southWest: a5,   west: a6, northWest: a7   })
    b7.setAdjoiningCells({ north: b8,   northEast: c8,   east: c7, southEast: c6,   south: b6,   southWest: a6,   west: a7, northWest: a8   })
    b8.setAdjoiningCells({ north: null, northEast: null, east: c8, southEast: c7,   south: b7,   southWest: a7,   west: a8, northWest: null })

    c1.setAdjoiningCells({ north: c2,   northEast: d2,   east: d1, southEast: null, south: null, southWest: null, west: b1, northWest: b2   })
    c2.setAdjoiningCells({ north: c3,   northEast: d3,   east: d2, southEast: d1,   south: c1,   southWest: b1,   west: b2, northWest: b3   })
    c3.setAdjoiningCells({ north: c4,   northEast: d4,   east: d3, southEast: d2,   south: c2,   southWest: b2,   west: b3, northWest: b4   })
    c4.setAdjoiningCells({ north: c5,   northEast: d5,   east: d4, southEast: d3,   south: c3,   southWest: b3,   west: b4, northWest: b5   })
    c5.setAdjoiningCells({ north: c6,   northEast: d6,   east: d5, southEast: d4,   south: c4,   southWest: b4,   west: b5, northWest: b6   })
    c6.setAdjoiningCells({ north: c7,   northEast: d7,   east: d6, southEast: d5,   south: c5,   southWest: b5,   west: b6, northWest: b7   })
    c7.setAdjoiningCells({ north: c8,   northEast: d8,   east: d7, southEast: d6,   south: c6,   southWest: b6,   west: b7, northWest: b8   })
    c8.setAdjoiningCells({ north: null, northEast: null, east: d8, southEast: d7,   south: c7,   southWest: b7,   west: b8, northWest: null })

    d1.setAdjoiningCells({ north: d2,   northEast: e2,   east: e1, southEast: null, south: null, southWest: null, west: c1, northWest: c2   })
    d2.setAdjoiningCells({ north: d3,   northEast: e3,   east: e2, southEast: e1,   south: d1,   southWest: c1,   west: c2, northWest: c3   })
    d3.setAdjoiningCells({ north: d4,   northEast: e4,   east: e3, southEast: e2,   south: d2,   southWest: c2,   west: c3, northWest: c4   })
    d4.setAdjoiningCells({ north: d5,   northEast: e5,   east: e4, southEast: e3,   south: d3,   southWest: c3,   west: c4, northWest: c5   })
    d5.setAdjoiningCells({ north: d6,   northEast: e6,   east: e5, southEast: e4,   south: d4,   southWest: c4,   west: c5, northWest: c6   })
    d6.setAdjoiningCells({ north: d7,   northEast: e7,   east: e6, southEast: e5,   south: d5,   southWest: c5,   west: c6, northWest: c7   })
    d7.setAdjoiningCells({ north: d8,   northEast: e8,   east: e7, southEast: e6,   south: d6,   southWest: c6,   west: c7, northWest: c8   })
    d8.setAdjoiningCells({ north: null, northEast: null, east: e8, southEast: e7,   south: d7,   southWest: c7,   west: c8, northWest: null })
    
    e1.setAdjoiningCells({ north: e2,   northEast: f2,   east: f1, southEast: null, south: null, southWest: null, west: d1, northWest: d2   })
    e2.setAdjoiningCells({ north: e3,   northEast: f3,   east: f2, southEast: f1,   south: e1,   southWest: d1,   west: d2, northWest: d3   })
    e3.setAdjoiningCells({ north: e4,   northEast: f4,   east: f3, southEast: f2,   south: e2,   southWest: d2,   west: d3, northWest: d4   })
    e4.setAdjoiningCells({ north: e5,   northEast: f5,   east: f4, southEast: f3,   south: e3,   southWest: d3,   west: d4, northWest: d5   })
    e5.setAdjoiningCells({ north: e6,   northEast: f6,   east: f5, southEast: f4,   south: e4,   southWest: d4,   west: d5, northWest: d6   })
    e6.setAdjoiningCells({ north: e7,   northEast: f7,   east: f6, southEast: f5,   south: e5,   southWest: d5,   west: d6, northWest: d7   })
    e7.setAdjoiningCells({ north: e8,   northEast: f8,   east: f7, southEast: f6,   south: e6,   southWest: d6,   west: d7, northWest: d8   })
    e8.setAdjoiningCells({ north: null, northEast: null, east: f8, southEast: f7,   south: e7,   southWest: d7,   west: d8, northWest: null })
    
    f1.setAdjoiningCells({ north: f2,   northEast: g2,   east: g1, southEast: null, south: null, southWest: null, west: e1, northWest: e2   })
    f2.setAdjoiningCells({ north: f3,   northEast: g3,   east: g2, southEast: g1,   south: f1,   southWest: e1,   west: e2, northWest: e3   })
    f3.setAdjoiningCells({ north: f4,   northEast: g4,   east: g3, southEast: g2,   south: f2,   southWest: e2,   west: e3, northWest: e4   })
    f4.setAdjoiningCells({ north: f5,   northEast: g5,   east: g4, southEast: g3,   south: f3,   southWest: e3,   west: e4, northWest: e5   })
    f5.setAdjoiningCells({ north: f6,   northEast: g6,   east: g5, southEast: g4,   south: f4,   southWest: e4,   west: e5, northWest: e6   })
    f6.setAdjoiningCells({ north: f7,   northEast: g7,   east: g6, southEast: g5,   south: f5,   southWest: e5,   west: e6, northWest: e7   })
    f7.setAdjoiningCells({ north: f8,   northEast: g8,   east: g7, southEast: g6,   south: f6,   southWest: e6,   west: e7, northWest: e8   })
    f8.setAdjoiningCells({ north: null, northEast: null, east: g8, southEast: g7,   south: f7,   southWest: e7,   west: e8, northWest: null })
    
    g1.setAdjoiningCells({ north: g2,   northEast: h2,   east: h1, southEast: null, south: null, southWest: null, west: f1, northWest: f2   })
    g2.setAdjoiningCells({ north: g3,   northEast: h3,   east: h2, southEast: h1,   south: g1,   southWest: f1,   west: f2, northWest: f3   })
    g3.setAdjoiningCells({ north: g4,   northEast: h4,   east: h3, southEast: h2,   south: g2,   southWest: f2,   west: f3, northWest: f4   })
    g4.setAdjoiningCells({ north: g5,   northEast: h5,   east: h4, southEast: h3,   south: g3,   southWest: f3,   west: f4, northWest: f5   })
    g5.setAdjoiningCells({ north: g6,   northEast: h6,   east: h5, southEast: h4,   south: g4,   southWest: f4,   west: f5, northWest: f6   })
    g6.setAdjoiningCells({ north: g7,   northEast: h7,   east: h6, southEast: h5,   south: g5,   southWest: f5,   west: f6, northWest: f7   })
    g7.setAdjoiningCells({ north: g8,   northEast: h8,   east: h7, southEast: h6,   south: g6,   southWest: f6,   west: f7, northWest: f8   })
    g8.setAdjoiningCells({ north: null, northEast: null, east: h8, southEast: h7,   south: g7,   southWest: f7,   west: f8, northWest: null })
    
    h1.setAdjoiningCells({ north: h2,   northEast: null, east: null, southEast: null, south: null, southWest: null, west: g1, northWest: g2   })
    h2.setAdjoiningCells({ north: h3,   northEast: null, east: null, southEast: null, south: h1,   southWest: g2,   west: g2, northWest: g3   })
    h3.setAdjoiningCells({ north: h4,   northEast: null, east: null, southEast: null, south: h2,   southWest: g3,   west: g3, northWest: g4   })
    h4.setAdjoiningCells({ north: h5,   northEast: null, east: null, southEast: null, south: h3,   southWest: g4,   west: g4, northWest: g5   })
    h5.setAdjoiningCells({ north: h6,   northEast: null, east: null, southEast: null, south: h4,   southWest: g5,   west: g5, northWest: g6   })
    h6.setAdjoiningCells({ north: h7,   northEast: null, east: null, southEast: null, south: h5,   southWest: g6,   west: g6, northWest: g7   })
    h7.setAdjoiningCells({ north: h8,   northEast: null, east: null, southEast: null, south: h6,   southWest: g7,   west: g7, northWest: g8   })
    h8.setAdjoiningCells({ north: null, northEast: null, east: null, southEast: null, south: h7,   southWest: g8,   west: g8, northWest: null })

    this.cells = {
      northWestCorner: northWestCorner,
      northEastCorner: northEastCorner,
      southWestCorner: southWestCorner,
      southEastCorner: southEastCorner,
      topColumnA: topColumnA,
      topColumnB: topColumnB,
      topColumnC: topColumnC,
      topColumnD: topColumnD,
      topColumnE: topColumnE,
      topColumnF: topColumnF,
      topColumnG: topColumnG,
      topColumnH: topColumnH,
      bottomColumnA: bottomColumnA,
      bottomColumnB: bottomColumnB,
      bottomColumnC: bottomColumnC,
      bottomColumnD: bottomColumnD,
      bottomColumnE: bottomColumnE,
      bottomColumnF: bottomColumnF,
      bottomColumnG: bottomColumnG,
      bottomColumnH: bottomColumnH,
      leftRow1: leftRow1,
      leftRow2: leftRow2,
      leftRow3: leftRow3,
      leftRow4: leftRow4,
      leftRow5: leftRow5,
      leftRow6: leftRow6,
      leftRow7: leftRow7,
      leftRow8: leftRow8,
      rightRow1: rightRow1,
      rightRow2: rightRow2,
      rightRow3: rightRow3,
      rightRow4: rightRow4,
      rightRow5: rightRow5,
      rightRow6: rightRow6,
      rightRow7: rightRow7,
      rightRow8: rightRow8,
      A1: a1, A2: a2, A3: a3, A4: a4, A5: a5, A6: a6, A7: a7, A8: a8,
      B1: b1, B2: b2, B3: b3, B4: b4, B5: b5, B6: b6, B7: b7, B8: b8,
      C1: c1, C2: c2, C3: c3, C4: c4, C5: c5, C6: c6, C7: c7, C8: c8,
      D1: d1, D2: d2, D3: d3, D4: d4, D5: d5, D6: d6, D7: d7, D8: d8,
      E1: e1, E2: e2, E3: e3, E4: e4, E5: e5, E6: e6, E7: e7, E8: e8,
      F1: f1, F2: f2, F3: f3, F4: f4, F5: f5, F6: f6, F7: f7, F8: f8,
      G1: g1, G2: g2, G3: g3, G4: g4, G5: g5, G6: g6, G7: g7, G8: g8,
      H1: h1, H2: h2, H3: h3, H4: h4, H5: h5, H6: h6, H7: h7, H8: h8
    }
  }

  createPieces(pieceSize)
  {
    const bKing   = loadImage( '../assets/images/blackKing.png')
    const bQueen  = loadImage( '../assets/images/blackQueen.png')
    const bTower  = loadImage( '../assets/images/blackTower.png')
    const bBishop = loadImage( '../assets/images/blackBishop.png')
    const bHorse  = loadImage( '../assets/images/blackHorse.png')
    const bPawn   = loadImage( '../assets/images/blackPawn.png')
    const wKing   = loadImage( '../assets/images/whiteKing.png')
    const wQueen  = loadImage( '../assets/images/whiteQueen.png')
    const wTower  = loadImage( '../assets/images/whiteTower.png')
    const wBishop = loadImage( '../assets/images/whiteBishop.png')
    const wHorse  = loadImage( '../assets/images/whiteHorse.png')
    const wPawn   = loadImage( '../assets/images/whitePawn.png')

    // White Pieces
    let whiteKing    = new King(wKing,     "whiteKing",    pieceSize, this.cells["E1"], 1)
    let whiteQueen   = new Queen(wQueen,   "whiteQueen",   pieceSize, this.cells["D1"], 1)
    let whiteTower1  = new Tower(wTower,   "whiteTower1",  pieceSize, this.cells["A1"], 1)
    let whiteTower2  = new Tower(wTower,   "whiteTower2",  pieceSize, this.cells["H1"], 1)
    let whiteBishop1 = new Bishop(wBishop, "whiteBishop1", pieceSize, this.cells["C1"], 1)
    let whiteBishop2 = new Bishop(wBishop, "whiteBishop2", pieceSize, this.cells["F1"], 1)
    let whiteHorse1  = new Horse(wHorse,   "whiteHorse1",  pieceSize, this.cells["B1"], 1)
    let whiteHorse2  = new Horse(wHorse,   "whiteHorse2",  pieceSize, this.cells["G1"], 1)
    let whitePawn1   = new Pawn(wPawn,     "whitePawn1",   pieceSize, this.cells["A2"], 1)
    let whitePawn2   = new Pawn(wPawn,     "whitePawn2",   pieceSize, this.cells["B2"], 1)
    let whitePawn3   = new Pawn(wPawn,     "whitePawn3",   pieceSize, this.cells["C2"], 1)
    let whitePawn4   = new Pawn(wPawn,     "whitePawn4",   pieceSize, this.cells["D2"], 1)
    let whitePawn5   = new Pawn(wPawn,     "whitePawn5",   pieceSize, this.cells["E2"], 1)
    let whitePawn6   = new Pawn(wPawn,     "whitePawn6",   pieceSize, this.cells["F2"], 1)
    let whitePawn7   = new Pawn(wPawn,     "whitePawn7",   pieceSize, this.cells["G2"], 1)
    let whitePawn8   = new Pawn(wPawn,     "whitePawn8",   pieceSize, this.cells["H2"], 1)

    // Black Pieces
    let blackKing    = new King(bKing,     "blackKing",    pieceSize, this.cells["E8"], 2)
    let blackQueen   = new Queen(bQueen,   "blackQueen",   pieceSize, this.cells["D8"], 2)
    let blackTower1  = new Tower(bTower,   "blackTower1",  pieceSize, this.cells["A8"], 2)
    let blackTower2  = new Tower(bTower,   "blackTower2",  pieceSize, this.cells["H8"], 2)
    let blackBishop1 = new Bishop(bBishop, "blackBishop1", pieceSize, this.cells["C8"], 2)
    let blackBishop2 = new Bishop(bBishop, "blackBishop2", pieceSize, this.cells["F8"], 2)
    let blackHorse1  = new Horse(bHorse,   "blackHorse1",  pieceSize, this.cells["B8"], 2)
    let blackHorse2  = new Horse(bHorse,   "blackHorse2",  pieceSize, this.cells["G8"], 2)
    let blackPawn1   = new Pawn(bPawn,     "blackPawn1",   pieceSize, this.cells["A7"], 2)
    let blackPawn2   = new Pawn(bPawn,     "blackPawn2",   pieceSize, this.cells["B7"], 2)
    let blackPawn3   = new Pawn(bPawn,     "blackPawn3",   pieceSize, this.cells["C7"], 2)
    let blackPawn4   = new Pawn(bPawn,     "blackPawn4",   pieceSize, this.cells["D7"], 2)
    let blackPawn5   = new Pawn(bPawn,     "blackPawn5",   pieceSize, this.cells["E7"], 2)
    let blackPawn6   = new Pawn(bPawn,     "blackPawn6",   pieceSize, this.cells["F7"], 2)
    let blackPawn7   = new Pawn(bPawn,     "blackPawn7",   pieceSize, this.cells["G7"], 2)
    let blackPawn8   = new Pawn(bPawn,     "blackPawn8",   pieceSize, this.cells["H7"], 2)

    this.pieces = {
      whiteKing: whiteKing,
      whiteQueen: whiteQueen,
      whiteTower1: whiteTower1,
      whiteTower2: whiteTower2,
      whiteBishop1: whiteBishop1,
      whiteBishop2: whiteBishop2,
      whiteHorse1: whiteHorse1,
      whiteHorse2: whiteHorse2,
      whitePawn1: whitePawn1,
      whitePawn2: whitePawn2,
      whitePawn3: whitePawn3,
      whitePawn4: whitePawn4,
      whitePawn5: whitePawn5,
      whitePawn6: whitePawn6,
      whitePawn7: whitePawn7,
      whitePawn8: whitePawn8,
      blackKing: blackKing,
      blackQueen: blackQueen,
      blackTower1: blackTower1,
      blackTower2: blackTower2,
      blackBishop1: blackBishop1,
      blackBishop2: blackBishop2,
      blackHorse1: blackHorse1,
      blackHorse2: blackHorse2,
      blackPawn1: blackPawn1,
      blackPawn2: blackPawn2,
      blackPawn3: blackPawn3,
      blackPawn4: blackPawn4,
      blackPawn5: blackPawn5,
      blackPawn6: blackPawn6,
      blackPawn7: blackPawn7,
      blackPawn8: blackPawn8,
    }
  }
}