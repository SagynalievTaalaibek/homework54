import {useState} from 'react';
import Cells from "../components/Cells/Cells";
import createItems from "../components/Cells/CellsFunction";
import './App.css';


const App = () => {
    const [count, setCount] = useState([
        {id: 0, count: 0}
    ]);

    const [isBomb, setBomb] = useState(false);
    const [items, setItems] = useState(createItems);

    const changeBackground = (id: number) => {
        countCell(id);

        setItems((prevState) => prevState.map((cell) => {
            if (cell.id === id) {
                if (cell.hasItem) {
                    setBomb(true);
                }
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


    const reset = () => {
        setItems(createItems);

        setCount((prevState) => prevState.map((cellCount) => {
            return {...cellCount, id: 0, count: 0};
        }));

        setBomb(false);
    };

    const boardContainer = ['cellContainer'];

    if (isBomb) {
        boardContainer.push('disabled');
        alert('You find bomb! To continue game press reset');
    }


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
            <div className={boardContainer.join(' ')}>
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
