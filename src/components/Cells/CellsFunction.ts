interface Cell {
    id: number;
    hasItem: boolean;
    clicked: boolean;
}

const createItems = () => {
    const cells: Cell[] = [];

    const randomIndex = Math.floor(Math.random() * 36);


    for (let i = 0; i < 36; i++) {
        const id = i + 1;
        cells.push({hasItem: false, clicked: false, id: id});
    }

    cells[randomIndex].hasItem = true;

    return cells;
};


export default createItems;