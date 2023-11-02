import './App.css';
import {useState} from 'react';
import {createItems} from '../components/Cells/Cells';


const App = () => {
  const [items, setItems] = useState(createItems);

  console.log('Cells', items);

  return (
    <div>
      {/*<button onClick={createItems}>Click me</button>*/}

    </div>
  );
};

export default App;
