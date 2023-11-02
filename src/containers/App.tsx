import './App.css';
import {useState} from 'react';
import Cells from "../components/Cells/Cells";

interface Cell {
    id: number;
    hasItem: boolean;
    clicked: boolean;
}


const App = () => {

    const [count, setCount] = useState([
        {id: 0, count: 0}
    ]);
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

    const changeBackground = (id: number) => {
        countCell(id);

        setItems((prevState) => prevState.map((cell) => {
            if (cell.id === id) {
                return {...cell, clicked: true};
            }

            return cell;
        }));
    };

    const countCell = (id: number) => {
        setCount((prevState) => prevState.map((cellCount) => {
            if (cellCount.id !== id) {
                return {...cellCount, id: id, count: cellCount.count + 1};
            }

            return cellCount;
        }));
    };

    const [items, setItems] = useState(createItems);

    console.log('Cells', items);

    const reset = () => {
        setItems((prevState) => prevState.map((cell) => {
            return{...cell, clicked: false};
        }));

        setCount((prevState) => prevState.map((cellCount) => {
            return {...cellCount, id: 0, count: 0};
        }));
    };


    const cellsList = items.map((cell) => {
        return (
            <Cells
                key={cell.id}
                hasItem={cell.hasItem}
                clicked={cell.clicked}
                changeBack={() => changeBackground(cell.id)}
            />
        );
    });

    return (
        <div>
            <div className="cellContainer">
                {cellsList}
            </div>
            Tries {count[0].count}
            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>

    );
};

export default App;
