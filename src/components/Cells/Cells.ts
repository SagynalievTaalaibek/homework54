interface Cell {
  hasItem: boolean;
  clicked: boolean;
}

export const createItems = () => {
  const cells: Cell[] = [];

  const randomIndex = Math.floor(Math.random() * 36);

  for (let i = 0; i < 36; i++) {
    cells.push({hasItem: false, clicked: false});
  }

  cells[randomIndex].hasItem = true;

  return cells;
};

